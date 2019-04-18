(function(window, document) {
    var properties = {
        COOKIE_EXP_LIST: "_abexps",
        OVERRIDE_PREFIX: "ab_",
        STATE_PAUSED: 2,
        STATE_STOPPED: 3,
        TIME_ONE_YEAR: 365,
        LONG_SCALE: 0xfffffffffffff,
        current_test: null,
        running_tests: {},
        debug_mode: false,
        defaults: {
            inputs: null,
            primary_unit: null,
            namespace: null,
            experiment: undefined,
            salt: null,
            num_segments: null,
            available_segments: {},
            segment_allocations: {}
        }
    };

    function ABLincoln(json_tests, vimeo_user, disabled) {
        var prop;
        for (prop in properties) {
            if (properties.hasOwnProperty(prop)) {
                this[prop] = properties[prop]
            }
        }
        this.tests = json_tests;
        this.user = vimeo_user;
        this.disabled = disabled
    }
    ABLincoln.prototype.getTest = function(test_name) {
        var test, i;
        if (this.disabled) {
            return this
        }
        if (typeof this.tests[test_name] === "undefined") {
            this._logIfDebug('ABLincoln.getTest: Test "' + test_name + '" not created in Modworld');
            return this
        }
        this.current_test = test_name;
        if (typeof this.running_tests[test_name] !== "undefined") {
            this._logIfDebug("ABLincoln.getTest: Test already loaded, returning");
            return this
        }
        this._logIfDebug('ABLincoln.getTest: Loading test "' + test_name + '"');
        this.running_tests[test_name] = {};
        test = this.running_tests[test_name];
        for (i in this.defaults) {
            if (this.defaults.hasOwnProperty(i)) {
                test[i] = this.defaults[i]
            }
        }
        test.namespace = this.tests[test_name];
        test.num_segments = test.namespace.buckets;
        switch (test.namespace.input) {
            case "vuid":
                test.inputs = {
                    vuid: this.user.vuid
                };
                test.primary_unit = "vuid";
                break;
            case "cuid":
                test.inputs = {
                    cuid: this.user.cuid
                };
                test.primary_unit = "cuid";
                break;
            case "other":
                test.inputs = null;
                test.primary_unit = null;
                break
        }
        return this
    };
    ABLincoln.prototype.setInputs = function(input_obj) {
        if (this.disabled) {
            return this
        }
        var test = this.running_tests[this.current_test];
        if (this.current_test === null) {
            this._logIfDebug("ABLincoln.setInputs: No test set, returning");
            return this
        }
        test.inputs = input_obj;
        for (var key in test.inputs) {
            if (test.inputs.hasOwnProperty(key)) {
                break
            }
        }
        test.primary_unit = key;
        this._logIfDebug("ABLincoln.setInputs: Inputs set to " + JSON.stringify(input_obj));
        this._logIfDebug('ABLincoln.setInputs: Primary Unit set to "' + test.primary_unit + '"');
        return this
    };
    ABLincoln.prototype.get = function(param_name, default_val) {
        if (this.disabled) {
            return default_val
        }
        var test = this.running_tests[this.current_test],
            override = this._getOverride(param_name);
        if (override !== null) {
            this._logIfDebug('ABLincoln.get: Override set for "' + param_name + '", returning "' + override + '"');
            return override
        }
        if (typeof default_val === "undefined") {
            default_val = null
        }
        if (typeof test === "undefined") {
            this._logIfDebug('ABLincoln.get: No test set, returning default "' + default_val + '"');
            return default_val
        }
        if (test.inputs === null) {
            throw "Must set test inputs via setInputs() before loading a parameter."
        }
        test.experiment = this._getExperimentForTest(test.namespace);
        if (typeof test.experiment === "undefined" || test.experiment === null) {
            this._logIfDebug('ABLincoln.get: Not bucketed to an experiment, returning default "' + default_val + '"');
            test.experiment = null;
            return default_val
        }
        this._logIfDebug("ABLincoln.get: Assigned to experiment with id " + test.experiment.id);
        if (!this._userInSegment()) {
            this._logIfDebug('ABLincoln.get: User not in segment, returning default "' + default_val + '"');
            return default_val
        }
        test.salt = test.namespace.name + "." + test.experiment.name;
        if (test.namespace.input === "vuid") {
            return this._getParameterByVUID(param_name, default_val)
        }
        return this._getTreatmentForExperiment(param_name, default_val)
    };
    ABLincoln.prototype.setDebug = function(debug_mode) {
        this.debug_mode = debug_mode;
        console.log('ABLincoln.setDebug: Debug mode set to "' + debug_mode + '"');
        return this
    };
    ABLincoln.prototype.sendTrackingPixelRequest = function(data) {
        var params = [],
            img;
        for (key in data) {
            if (data.hasOwnProperty(key)) {
                params.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            }
        }
        var url = "/ablincoln/tracking_pixel?" + params.join("&");
        if (typeof navigator.sendBeacon === "function") {
            navigator.sendBeacon(url);
            return
        }
        img = new Image;
        img.src = url
    };
    ABLincoln.prototype._getExperimentForTest = function(namespace) {
        var test = this.running_tests[this.current_test],
            segment, experiment_id, i;
        if (typeof test.experiment !== "undefined") {
            this._logIfDebug("ABLincoln._getExperimentForTest: Experiment already set, returning");
            return test.experiment
        }
        for (i = 0; i < test.num_segments; i++) {
            test.available_segments[i] = i
        }
        this._setupExperiments(namespace.experiments);
        segment = this._randomInteger(0, test.num_segments - 1, namespace.name + ".segment", test.inputs[test.primary_unit]);
        experiment_id = test.segment_allocations[segment];
        return namespace.experiments.filter(function(exp) {
            return exp.id === experiment_id
        })[0]
    };
    ABLincoln.prototype._setupExperiments = function(experiments) {
        var stopped_experiments = [],
            time_published, time_stopped, i, j;
        for (i = 0; i < experiments.length; i++) {
            if (experiments[i].state === this.STATE_STOPPED) {
                stopped_experiments.push(experiments[i])
            }
        }
        stopped_experiments.sort(function(exp1, exp2) {
            return parseDate(exp2.stopped_on) - parseDate(exp1.stopped_on)
        });
        for (i = 0; i < experiments.length; i++) {
            time_published = parseDate(experiments[i].published_on);
            for (j = stopped_experiments.length - 1; j >= 0; j--) {
                time_stopped = parseDate(stopped_experiments[j].stopped_on);
                if (time_stopped < time_published) {
                    this._removeExperiment(stopped_experiments[j]);
                    stopped_experiments.splice(j, 1);
                    continue
                }
                break
            }
            this._addExperiment(experiments[i])
        }
        for (j = stopped_experiments.length - 1; j >= 0; j--) {
            this._removeExperiment(stopped_experiments[j])
        }
    };
    ABLincoln.prototype._addExperiment = function(experiment) {
        var test = this.running_tests[this.current_test],
            sampled_segments, buckets = experiment.buckets,
            name = experiment.name,
            num_available, key;
        num_available = this._countProps(test.available_segments);
        if (num_available < buckets) {
            return
        }
        sampled_segments = this._sample(test.available_segments, buckets, test.namespace.name + ".sampled_segments", name);
        for (key in sampled_segments) {
            if (sampled_segments.hasOwnProperty(key)) {
                test.segment_allocations[sampled_segments[key]] = experiment.id;
                delete test.available_segments[sampled_segments[key]]
            }
        }
        this._logIfDebug('ABLincoln._addExperiment: Adding experiment "' + experiment.name + '"')
    };
    ABLincoln.prototype._removeExperiment = function(experiment) {
        var test = this.running_tests[this.current_test],
            key;
        for (key in test.segment_allocations) {
            if (test.segment_allocations.hasOwnProperty(key) && test.segment_allocations[key] === experiment.id) {
                test.available_segments[key] = key;
                delete test.segment_allocations[key]
            }
        }
        this._logIfDebug('ABLincoln._removeExperiment: Removing experiment "' + experiment.name + '"')
    };
    ABLincoln.prototype._getParameterByVUID = function(param_name, default_val) {
        var test = this.running_tests[this.current_test],
            cookie = this._cookie(this.COOKIE_EXP_LIST),
            cookie_obj = cookie ? JSON.parse(cookie) : {},
            exp_ids = [],
            experiment, i, j, variant;
        for (i in this.tests) {
            if (this.tests.hasOwnProperty(i)) {
                for (j in this.tests[i].experiments) {
                    if (this.tests[i].experiments.hasOwnProperty(j)) {
                        experiment = this.tests[i].experiments[j];
                        if (experiment.state === this.STATE_STOPPED) {
                            delete cookie_obj[experiment.id]
                        }
                    }
                }
            }
        }
        if (test.experiment.state === this.STATE_PAUSED && typeof cookie_obj[test.experiment.id] === "undefined") {
            cookie = JSON.stringify(cookie_obj);
            this._cookie(this.COOKIE_EXP_LIST, cookie, this.TIME_ONE_YEAR);
            this._logIfDebug('ABLincoln._getParameterByVUID: Experiment paused and user not yet exposed, returning default "' + default_val + '"');
            return default_val
        }
        variant = this._getTreatmentForExperiment(param_name, default_val);
        cookie_obj[test.experiment.id] = variant;
        cookie = JSON.stringify(cookie_obj);
        this._cookie(this.COOKIE_EXP_LIST, cookie, this.TIME_ONE_YEAR);
        return variant
    };
    ABLincoln.prototype._getTreatmentForExperiment = function(param_name, default_val) {
        var test = this.running_tests[this.current_test],
            params = test.experiment.parameters,
            offsets = [],
            weights = [],
            param_salt = test.salt + "." + param_name,
            offset, param;
        for (offset in params) {
            if (params.hasOwnProperty(offset)) {
                param = params[offset];
                if (param.name === param_name) {
                    offsets.push(offset);
                    weights.push(param.weight)
                }
            }
        }
        if (offsets.length === 0) {
            return default_val
        }
        offset = this._weightedChoice(offsets, weights, param_salt, test.inputs);
        this._logIfDebug('ABLincoln._getTreatmentForExperiment: Returning treatment "' + params[offset].choice + '" (id ' + params[offset].id + ")");
        this._log("exposure", params[offset]);
        return params[offset].choice
    };
    ABLincoln.prototype._userInSegment = function() {
        var segment_info = this._getFormattedSegmentObj(),
            segment_type, val_array;
        for (segment_type in segment_info.exclude) {
            if (segment_info.exclude.hasOwnProperty(segment_type)) {
                val_array = segment_info.exclude[segment_type];
                if (this._indexOf(this.user[segment_type], val_array) !== -1) {
                    return false
                }
            }
        }
        for (segment_type in segment_info.include) {
            if (segment_info.include.hasOwnProperty(segment_type)) {
                val_array = segment_info.include[segment_type];
                if (this._indexOf(this.user[segment_type], val_array) === -1) {
                    return false
                }
            }
        }
        return true
    };
    ABLincoln.prototype._getFormattedSegmentObj = function() {
        var test = this.running_tests[this.current_test],
            segments = {
                include: {},
                exclude: {}
            },
            seg, include, i, j;
        for (i in test.experiment.segments) {
            if (test.experiment.segments.hasOwnProperty(i)) {
                seg = test.experiment.segments[i];
                include = seg.include === 1 ? "include" : "exclude";
                if (typeof segments[include][seg.type] === "undefined") {
                    segments[include][seg.type] = []
                }
                for (j in seg.values) {
                    if (seg.values.hasOwnProperty(i)) {
                        segments[include][seg.type].push(seg.values[j])
                    }
                }
            }
        }
        return segments
    };
    ABLincoln.prototype._cookie = function(name, value, ttl, path, domain, secure) {
        var future_date;
        if (arguments.length > 1) {
            if (ttl) {
                future_date = new Date;
                future_date.setDate(future_date.getDate() + ttl)
            }
            if (typeof path === "undefined") {
                path = "/"
            }
            return document.cookie = name + "=" + encodeURIComponent(value) + (typeof future_date !== "undefined" ? "; expires=" + future_date.toGMTString() : "") + (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + (secure ? "; secure" : "")
        }
        return decodeURIComponent((("; " + document.cookie).split("; " + name + "=")[1] || "").split(";")[0])
    };
    ABLincoln.prototype._getOverride = function(param_name) {
        var self = this,
            tmp = [],
            param_vals, index;
        param_vals = location.search.substr(1).split("&");
        for (index in param_vals) {
            if (param_vals.hasOwnProperty(index)) {
                tmp = param_vals[index].split("=");
                if (decodeURIComponent(tmp[0]) === self.OVERRIDE_PREFIX + param_name) {
                    return decodeURIComponent(tmp[1])
                }
            }
        }
        return null
    };
    ABLincoln.prototype._indexOf = function(needle, haystack) {
        var i;
        for (i = 0; i < haystack.length; i++) {
            if (haystack[i] === needle) {
                return i
            }
        }
        return -1
    };
    ABLincoln.prototype._countProps = function(obj) {
        var count = 0,
            prop;
        if (typeof obj.__count__ !== "undefined") {
            return obj.__count__
        }
        if (Object.keys) {
            return Object.keys(obj).length
        }
        for (prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                count++
            }
        }
        return count
    };
    ABLincoln.prototype._getUnit = function(inputs, appended_unit) {
        var unit = inputs,
            unit_arr = [],
            key;
        if (unit instanceof Array) {
            unit_arr = unit
        } else if (unit instanceof Object) {
            for (key in unit) {
                if (unit.hasOwnProperty(key)) {
                    unit_arr.push(unit[key])
                }
            }
        } else {
            unit_arr.push(unit)
        }
        if (typeof appended_unit !== "undefined" && appended_unit !== null) {
            unit_arr.push(appended_unit)
        }
        return unit_arr
    };
    ABLincoln.prototype._getHash = function(salt, inputs, appended_unit) {
        var unit_str_array = this._getUnit(inputs, appended_unit).map(function(item) {
                return item.toString()
            }),
            unit_str = unit_str_array.join("."),
            hash = CryptoJS.SHA1(salt + "." + unit_str).toString().substr(0, 13);
        return parseInt(hash, 16)
    };
    ABLincoln.prototype._getUniform = function(min_val, max_val, salt, inputs, appended_unit) {
        var zero_to_one = this._getHash(salt, inputs, appended_unit) / parseFloat(this.LONG_SCALE);
        return min_val + zero_to_one * (max_val - min_val)
    };
    ABLincoln.prototype._randomInteger = function(min_val, max_val, salt, inputs) {
        return min_val + this._getHash(salt, inputs) % (max_val - min_val + 1)
    };
    ABLincoln.prototype._weightedChoice = function(choices, weights, salt, inputs) {
        var cum_weights = weights,
            cum_sum = 0,
            stop_value, i;
        if (choices.length === 0) {
            return []
        }
        for (i = 0; i < cum_weights.length; i++) {
            cum_sum += cum_weights[i];
            cum_weights[i] = cum_sum
        }
        stop_value = this._getUniform(0, cum_sum, salt, inputs);
        for (i = 0; i < cum_weights.length; i++) {
            if (stop_value <= cum_weights[i]) {
                return choices[i]
            }
        }
    };
    ABLincoln.prototype._sample = function(choices, draws, salt, inputs) {
        var s_choices = [],
            i, j, temp;
        for (i in choices) {
            if (choices.hasOwnProperty(i)) {
                s_choices.push(choices[i])
            }
        }
        for (i = s_choices.length - 1; i > 0; i--) {
            j = this._getHash(salt, inputs, i) % (i + 1);
            temp = s_choices[i];
            s_choices[i] = s_choices[j];
            s_choices[j] = temp
        }
        return s_choices.slice(0, draws)
    };
    ABLincoln.prototype._log = function(name, parameter) {
        var test = this.running_tests[this.current_test],
            data = {
                event: name,
                vuid: this.user.vuid,
                cuid: this.user.cuid
            },
            key, img;
        if (typeof test !== "undefined" && typeof test.experiment !== "undefined") {
            data.experiment_id = test.experiment.id;
            data.inputs = JSON.stringify(test.inputs);
            data.salt = test.salt;
            data.name = test.experiment.name.replace(/ /g, "-");
            if (typeof test.namespace !== "undefined") {
                data.namespace_id = test.namespace.id
            }
        }
        if (typeof parameter !== "undefined") {
            data.param_id = parameter.id;
            data.param_name = parameter.name;
            data.param_value = parameter.choice;
            this._logIfDebug('ABLincoln._log: logging exposure to treatment "' + parameter.choice + '" (id ' + parameter.id + ")")
        }
        this.sendTrackingPixelRequest(data)
    };

    function parseDate(dateString) {
        var arr = dateString.split(/[- :]/);
        return Date.parse(new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]))
    }
    ABLincoln.prototype._logIfDebug = function(msg) {
        if (this.debug_mode) {
            console.log(msg)
        }
    };
    if (window.ablincoln_config && window.ablincoln_config.tests) {
        window.ABLincoln = new ABLincoln(window.ablincoln_config.tests, window.ablincoln_config.user, window.ablincoln_config.disabled)
    }
})(window, document);
var CryptoJS = CryptoJS || function(e, m) {
    var p = {},
        j = p.lib = {},
        l = function() {},
        f = j.Base = {
            extend: function(a) {
                l.prototype = this;
                var c = new l;
                a && c.mixIn(a);
                c.hasOwnProperty("init") || (c.init = function() {
                    c.$super.init.apply(this, arguments)
                });
                c.init.prototype = c;
                c.$super = this;
                return c
            },
            create: function() {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            },
            init: function() {},
            mixIn: function(a) {
                for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        },
        n = j.WordArray = f.extend({
            init: function(a, c) {
                a = this.words = a || [];
                this.sigBytes = c != m ? c : 4 * a.length
            },
            toString: function(a) {
                return (a || h).stringify(this)
            },
            concat: function(a) {
                var c = this.words,
                    q = a.words,
                    d = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (d % 4)
                    for (var b = 0; b < a; b++) c[d + b >>> 2] |= (q[b >>> 2] >>> 24 - 8 * (b % 4) & 255) << 24 - 8 * ((d + b) % 4);
                else if (65535 < q.length)
                    for (b = 0; b < a; b += 4) c[d + b >>> 2] = q[b >>> 2];
                else c.push.apply(c, q);
                this.sigBytes += a;
                return this
            },
            clamp: function() {
                var a = this.words,
                    c = this.sigBytes;
                a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
                a.length = e.ceil(c / 4)
            },
            clone: function() {
                var a = f.clone.call(this);
                a.words = this.words.slice(0);
                return a
            },
            random: function(a) {
                for (var c = [], b = 0; b < a; b += 4) c.push(4294967296 * e.random() | 0);
                return new n.init(c, a)
            }
        }),
        b = p.enc = {},
        h = b.Hex = {
            stringify: function(a) {
                var c = a.words;
                a = a.sigBytes;
                for (var b = [], d = 0; d < a; d++) {
                    var f = c[d >>> 2] >>> 24 - 8 * (d % 4) & 255;
                    b.push((f >>> 4).toString(16));
                    b.push((f & 15).toString(16))
                }
                return b.join("")
            },
            parse: function(a) {
                for (var c = a.length, b = [], d = 0; d < c; d += 2) b[d >>> 3] |= parseInt(a.substr(d, 2), 16) << 24 - 4 * (d % 8);
                return new n.init(b, c / 2)
            }
        },
        g = b.Latin1 = {
            stringify: function(a) {
                var c = a.words;
                a = a.sigBytes;
                for (var b = [], d = 0; d < a; d++) b.push(String.fromCharCode(c[d >>> 2] >>> 24 - 8 * (d % 4) & 255));
                return b.join("")
            },
            parse: function(a) {
                for (var c = a.length, b = [], d = 0; d < c; d++) b[d >>> 2] |= (a.charCodeAt(d) & 255) << 24 - 8 * (d % 4);
                return new n.init(b, c)
            }
        },
        r = b.Utf8 = {
            stringify: function(a) {
                try {
                    return decodeURIComponent(escape(g.stringify(a)))
                } catch (c) {
                    throw Error("Malformed UTF-8 data")
                }
            },
            parse: function(a) {
                return g.parse(unescape(encodeURIComponent(a)))
            }
        },
        k = j.BufferedBlockAlgorithm = f.extend({
            reset: function() {
                this._data = new n.init;
                this._nDataBytes = 0
            },
            _append: function(a) {
                "string" == typeof a && (a = r.parse(a));
                this._data.concat(a);
                this._nDataBytes += a.sigBytes
            },
            _process: function(a) {
                var c = this._data,
                    b = c.words,
                    d = c.sigBytes,
                    f = this.blockSize,
                    h = d / (4 * f),
                    h = a ? e.ceil(h) : e.max((h | 0) - this._minBufferSize, 0);
                a = h * f;
                d = e.min(4 * a, d);
                if (a) {
                    for (var g = 0; g < a; g += f) this._doProcessBlock(b, g);
                    g = b.splice(0, a);
                    c.sigBytes -= d
                }
                return new n.init(g, d)
            },
            clone: function() {
                var a = f.clone.call(this);
                a._data = this._data.clone();
                return a
            },
            _minBufferSize: 0
        });
    j.Hasher = k.extend({
        cfg: f.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function() {
            k.reset.call(this);
            this._doReset()
        },
        update: function(a) {
            this._append(a);
            this._process();
            return this
        },
        finalize: function(a) {
            a && this._append(a);
            return this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(a) {
            return function(c, b) {
                return new a.init(b).finalize(c)
            }
        },
        _createHmacHelper: function(a) {
            return function(b, f) {
                return new s.HMAC.init(a, f).finalize(b)
            }
        }
    });
    var s = p.algo = {};
    return p
}(Math);
(function() {
    var e = CryptoJS,
        m = e.lib,
        p = m.WordArray,
        j = m.Hasher,
        l = [],
        m = e.algo.SHA1 = j.extend({
            _doReset: function() {
                this._hash = new p.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
            },
            _doProcessBlock: function(f, n) {
                for (var b = this._hash.words, h = b[0], g = b[1], e = b[2], k = b[3], j = b[4], a = 0; 80 > a; a++) {
                    if (16 > a) l[a] = f[n + a] | 0;
                    else {
                        var c = l[a - 3] ^ l[a - 8] ^ l[a - 14] ^ l[a - 16];
                        l[a] = c << 1 | c >>> 31
                    }
                    c = (h << 5 | h >>> 27) + j + l[a];
                    c = 20 > a ? c + ((g & e | ~g & k) + 1518500249) : 40 > a ? c + ((g ^ e ^ k) + 1859775393) : 60 > a ? c + ((g & e | g & k | e & k) - 1894007588) : c + ((g ^ e ^ k) - 899497514);
                    j = k;
                    k = e;
                    e = g << 30 | g >>> 2;
                    g = h;
                    h = c
                }
                b[0] = b[0] + h | 0;
                b[1] = b[1] + g | 0;
                b[2] = b[2] + e | 0;
                b[3] = b[3] + k | 0;
                b[4] = b[4] + j | 0
            },
            _doFinalize: function() {
                var f = this._data,
                    e = f.words,
                    b = 8 * this._nDataBytes,
                    h = 8 * f.sigBytes;
                e[h >>> 5] |= 128 << 24 - h % 32;
                e[(h + 64 >>> 9 << 4) + 14] = Math.floor(b / 4294967296);
                e[(h + 64 >>> 9 << 4) + 15] = b;
                f.sigBytes = 4 * e.length;
                this._process();
                return this._hash
            },
            clone: function() {
                var e = j.clone.call(this);
                e._hash = this._hash.clone();
                return e
            }
        });
    e.SHA1 = j._createHelper(m);
    e.HmacSHA1 = j._createHmacHelper(m)
})();