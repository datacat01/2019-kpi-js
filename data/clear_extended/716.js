if (!window.SURF) window.SURF = (function(window) {
    (function(window, undefined) {
        var
            readyList, rootjQuery, core_strundefined = typeof undefined,
            document = window.document,
            location = window.location,
            _jQuery = window.jQuery,
            _$ = window.$,
            class2type = {},
            core_deletedIds = [],
            core_version = "1.9.1",
            core_concat = core_deletedIds.concat,
            core_push = core_deletedIds.push,
            core_slice = core_deletedIds.slice,
            core_indexOf = core_deletedIds.indexOf,
            core_toString = class2type.toString,
            core_hasOwn = class2type.hasOwnProperty,
            core_trim = core_version.trim,
            jQuery = function(selector, context) {
                return new jQuery.fn.init(selector, context, rootjQuery);
            },
            core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            core_rnotwhite = /\S+/g,
            rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            rquickExpr = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            rvalidchars = /^[\],:{}\s]*$/,
            rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
            rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            rmsPrefix = /^-ms-/,
            rdashAlpha = /-([\da-z])/gi,
            fcamelCase = function(all, letter) {
                return letter.toUpperCase();
            },
            completed = function(event) {
                if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
                    detach();
                    jQuery.ready();
                }
            },
            detach = function() {
                if (document.addEventListener) {
                    document.removeEventListener("DOMContentLoaded", completed, false);
                    window.removeEventListener("load", completed, false);
                } else {
                    document.detachEvent("onreadystatechange", completed);
                    window.detachEvent("onload", completed);
                }
            };
        jQuery.fn = jQuery.prototype = {
            jquery: core_version,
            constructor: jQuery,
            init: function(selector, context, rootjQuery) {
                var match, elem;
                if (!selector) {
                    return this;
                }
                if (typeof selector === "string") {
                    if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
                        match = [null, selector, null];
                    } else {
                        match = rquickExpr.exec(selector);
                    }
                    if (match && (match[1] || !context)) {
                        if (match[1]) {
                            context = context instanceof jQuery ? context[0] : context;
                            jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                                for (match in context) {
                                    if (jQuery.isFunction(this[match])) {
                                        this[match](context[match]);
                                    } else {
                                        this.attr(match, context[match]);
                                    }
                                }
                            }
                            return this;
                        } else {
                            elem = document.getElementById(match[2]);
                            if (elem && elem.parentNode) {
                                if (elem.id !== match[2]) {
                                    return rootjQuery.find(selector);
                                }
                                this.length = 1;
                                this[0] = elem;
                            }
                            this.context = document;
                            this.selector = selector;
                            return this;
                        }
                    } else if (!context || context.jquery) {
                        return (context || rootjQuery).find(selector);
                    } else {
                        return this.constructor(context).find(selector);
                    }
                } else if (selector.nodeType) {
                    this.context = this[0] = selector;
                    this.length = 1;
                    return this;
                } else if (jQuery.isFunction(selector)) {
                    return rootjQuery.ready(selector);
                }
                if (selector.selector !== undefined) {
                    this.selector = selector.selector;
                    this.context = selector.context;
                }
                return jQuery.makeArray(selector, this);
            },
            selector: "",
            length: 0,
            size: function() {
                return this.length;
            },
            toArray: function() {
                return core_slice.call(this);
            },
            get: function(num) {
                return num == null ? this.toArray() : (num < 0 ? this[this.length + num] : this[num]);
            },
            pushStack: function(elems) {
                var ret = jQuery.merge(this.constructor(), elems);
                ret.prevObject = this;
                ret.context = this.context;
                return ret;
            },
            each: function(callback, args) {
                return jQuery.each(this, callback, args);
            },
            ready: function(fn) {
                jQuery.ready.promise().done(fn);
                return this;
            },
            slice: function() {
                return this.pushStack(core_slice.apply(this, arguments));
            },
            first: function() {
                return this.eq(0);
            },
            last: function() {
                return this.eq(-1);
            },
            eq: function(i) {
                var len = this.length,
                    j = +i + (i < 0 ? len : 0);
                return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
            },
            map: function(callback) {
                return this.pushStack(jQuery.map(this, function(elem, i) {
                    return callback.call(elem, i, elem);
                }));
            },
            end: function() {
                return this.prevObject || this.constructor(null);
            },
            push: core_push,
            sort: [].sort,
            splice: [].splice
        };
        jQuery.fn.init.prototype = jQuery.fn;
        jQuery.extend = jQuery.fn.extend = function() {
            var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {},
                i = 1,
                length = arguments.length,
                deep = false;
            if (typeof target === "boolean") {
                deep = target;
                target = arguments[1] || {};
                i = 2;
            }
            if (typeof target !== "object" && !jQuery.isFunction(target)) {
                target = {};
            }
            if (length === i) {
                target = this;
                --i;
            }
            for (; i < length; i++) {
                if ((options = arguments[i]) != null) {
                    for (name in options) {
                        src = target[name];
                        copy = options[name];
                        if (target === copy) {
                            continue;
                        }
                        if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                            if (copyIsArray) {
                                copyIsArray = false;
                                clone = src && jQuery.isArray(src) ? src : [];
                            } else {
                                clone = src && jQuery.isPlainObject(src) ? src : {};
                            }
                            target[name] = jQuery.extend(deep, clone, copy);
                        } else if (copy !== undefined) {
                            target[name] = copy;
                        }
                    }
                }
            }
            return target;
        };
        jQuery.extend({
            noConflict: function(deep) {
                if (window.$ === jQuery) {
                    window.$ = _$;
                }
                if (deep && window.jQuery === jQuery) {
                    window.jQuery = _jQuery;
                }
                return jQuery;
            },
            isReady: false,
            readyWait: 1,
            holdReady: function(hold) {
                if (hold) {
                    jQuery.readyWait++;
                } else {
                    jQuery.ready(true);
                }
            },
            ready: function(wait) {
                if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                    return;
                }
                if (!document.body) {
                    return setTimeout(jQuery.ready);
                }
                jQuery.isReady = true;
                if (wait !== true && --jQuery.readyWait > 0) {
                    return;
                }
                readyList.resolveWith(document, [jQuery]);
                if (jQuery.fn.trigger) {
                    jQuery(document).trigger("ready").off("ready");
                }
            },
            isFunction: function(obj) {
                return jQuery.type(obj) === "function";
            },
            isArray: Array.isArray || function(obj) {
                return jQuery.type(obj) === "array";
            },
            isWindow: function(obj) {
                return obj != null && obj == obj.window;
            },
            isNumeric: function(obj) {
                return !isNaN(parseFloat(obj)) && isFinite(obj);
            },
            type: function(obj) {
                if (obj == null) {
                    return String(obj);
                }
                return typeof obj === "object" || typeof obj === "function" ? class2type[core_toString.call(obj)] || "object" : typeof obj;
            },
            isPlainObject: function(obj) {
                if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                    return false;
                }
                try {
                    if (obj.constructor && !core_hasOwn.call(obj, "constructor") && !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                        return false;
                    }
                } catch (e) {
                    return false;
                }
                var key;
                for (key in obj) {}
                return key === undefined || core_hasOwn.call(obj, key);
            },
            isEmptyObject: function(obj) {
                var name;
                for (name in obj) {
                    return false;
                }
                return true;
            },
            error: function(msg) {
                throw new Error(msg);
            },
            parseHTML: function(data, context, keepScripts) {
                if (!data || typeof data !== "string") {
                    return null;
                }
                if (typeof context === "boolean") {
                    keepScripts = context;
                    context = false;
                }
                context = context || document;
                var parsed = rsingleTag.exec(data),
                    scripts = !keepScripts && [];
                if (parsed) {
                    return [context.createElement(parsed[1])];
                }
                parsed = jQuery.buildFragment([data], context, scripts);
                if (scripts) {
                    jQuery(scripts).remove();
                }
                return jQuery.merge([], parsed.childNodes);
            },
            parseJSON: function(data) {
                if (window.JSON && window.JSON.parse) {
                    return window.JSON.parse(data);
                }
                if (data === null) {
                    return data;
                }
                if (typeof data === "string") {
                    data = jQuery.trim(data);
                    if (data) {
                        if (rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) {
                            return (new Function("return " + data))();
                        }
                    }
                }
                jQuery.error("Invalid JSON: " + data);
            },
            parseXML: function(data) {
                var xml, tmp;
                if (!data || typeof data !== "string") {
                    return null;
                }
                try {
                    if (window.DOMParser) {
                        tmp = new DOMParser();
                        xml = tmp.parseFromString(data, "text/xml");
                    } else {
                        xml = new ActiveXObject("Microsoft.XMLDOM");
                        xml.async = "false";
                        xml.loadXML(data);
                    }
                } catch (e) {
                    xml = undefined;
                }
                if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
                    jQuery.error("Invalid XML: " + data);
                }
                return xml;
            },
            noop: function() {},
            globalEval: function(data) {
                if (data && jQuery.trim(data)) {
                    (window.execScript || function(data) {
                        window["eval"].call(window, data);
                    })(data);
                }
            },
            camelCase: function(string) {
                return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
            },
            nodeName: function(elem, name) {
                return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
            },
            each: function(obj, callback, args) {
                var value, i = 0,
                    length = obj.length,
                    isArray = isArraylike(obj);
                if (args) {
                    if (isArray) {
                        for (; i < length; i++) {
                            value = callback.apply(obj[i], args);
                            if (value === false) {
                                break;
                            }
                        }
                    } else {
                        for (i in obj) {
                            value = callback.apply(obj[i], args);
                            if (value === false) {
                                break;
                            }
                        }
                    }
                } else {
                    if (isArray) {
                        for (; i < length; i++) {
                            value = callback.call(obj[i], i, obj[i]);
                            if (value === false) {
                                break;
                            }
                        }
                    } else {
                        for (i in obj) {
                            value = callback.call(obj[i], i, obj[i]);
                            if (value === false) {
                                break;
                            }
                        }
                    }
                }
                return obj;
            },
            trim: core_trim && !core_trim.call("\uFEFF\xA0") ? function(text) {
                return text == null ? "" : core_trim.call(text);
            } : function(text) {
                return text == null ? "" : (text + "").replace(rtrim, "");
            },
            makeArray: function(arr, results) {
                var ret = results || [];
                if (arr != null) {
                    if (isArraylike(Object(arr))) {
                        jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
                    } else {
                        core_push.call(ret, arr);
                    }
                }
                return ret;
            },
            inArray: function(elem, arr, i) {
                var len;
                if (arr) {
                    if (core_indexOf) {
                        return core_indexOf.call(arr, elem, i);
                    }
                    len = arr.length;
                    i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
                    for (; i < len; i++) {
                        if (i in arr && arr[i] === elem) {
                            return i;
                        }
                    }
                }
                return -1;
            },
            merge: function(first, second) {
                var l = second.length,
                    i = first.length,
                    j = 0;
                if (typeof l === "number") {
                    for (; j < l; j++) {
                        first[i++] = second[j];
                    }
                } else {
                    while (second[j] !== undefined) {
                        first[i++] = second[j++];
                    }
                }
                first.length = i;
                return first;
            },
            grep: function(elems, callback, inv) {
                var retVal, ret = [],
                    i = 0,
                    length = elems.length;
                inv = !!inv;
                for (; i < length; i++) {
                    retVal = !!callback(elems[i], i);
                    if (inv !== retVal) {
                        ret.push(elems[i]);
                    }
                }
                return ret;
            },
            map: function(elems, callback, arg) {
                var value, i = 0,
                    length = elems.length,
                    isArray = isArraylike(elems),
                    ret = [];
                if (isArray) {
                    for (; i < length; i++) {
                        value = callback(elems[i], i, arg);
                        if (value != null) {
                            ret[ret.length] = value;
                        }
                    }
                } else {
                    for (i in elems) {
                        value = callback(elems[i], i, arg);
                        if (value != null) {
                            ret[ret.length] = value;
                        }
                    }
                }
                return core_concat.apply([], ret);
            },
            guid: 1,
            proxy: function(fn, context) {
                var args, proxy, tmp;
                if (typeof context === "string") {
                    tmp = fn[context];
                    context = fn;
                    fn = tmp;
                }
                if (!jQuery.isFunction(fn)) {
                    return undefined;
                }
                args = core_slice.call(arguments, 2);
                proxy = function() {
                    return fn.apply(context || this, args.concat(core_slice.call(arguments)));
                };
                proxy.guid = fn.guid = fn.guid || jQuery.guid++;
                return proxy;
            },
            access: function(elems, fn, key, value, chainable, emptyGet, raw) {
                var i = 0,
                    length = elems.length,
                    bulk = key == null;
                if (jQuery.type(key) === "object") {
                    chainable = true;
                    for (i in key) {
                        jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
                    }
                } else if (value !== undefined) {
                    chainable = true;
                    if (!jQuery.isFunction(value)) {
                        raw = true;
                    }
                    if (bulk) {
                        if (raw) {
                            fn.call(elems, value);
                            fn = null;
                        } else {
                            bulk = fn;
                            fn = function(elem, key, value) {
                                return bulk.call(jQuery(elem), value);
                            };
                        }
                    }
                    if (fn) {
                        for (; i < length; i++) {
                            fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                        }
                    }
                }
                return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
            },
            now: function() {
                return (new Date()).getTime();
            }
        });
        jQuery.ready.promise = function(obj) {
            if (!readyList) {
                readyList = jQuery.Deferred();
                if (document.readyState === "complete") {
                    setTimeout(jQuery.ready);
                } else if (document.addEventListener) {
                    document.addEventListener("DOMContentLoaded", completed, false);
                    window.addEventListener("load", completed, false);
                } else {
                    document.attachEvent("onreadystatechange", completed);
                    window.attachEvent("onload", completed);
                    var top = false;
                    try {
                        top = window.frameElement == null && document.documentElement;
                    } catch (e) {}
                    if (top && top.doScroll) {
                        (function doScrollCheck() {
                            if (!jQuery.isReady) {
                                try {
                                    top.doScroll("left");
                                } catch (e) {
                                    return setTimeout(doScrollCheck, 50);
                                }
                                detach();
                                jQuery.ready();
                            }
                        })();
                    }
                }
            }
            return readyList.promise(obj);
        };
        jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
        });

        function isArraylike(obj) {
            var length = obj.length,
                type = jQuery.type(obj);
            if (jQuery.isWindow(obj)) {
                return false;
            }
            if (obj.nodeType === 1 && length) {
                return true;
            }
            return type === "array" || type !== "function" && (length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj);
        }
        rootjQuery = jQuery(document);
        var optionsCache = {};

        function createOptions(options) {
            var object = optionsCache[options] = {};
            jQuery.each(options.match(core_rnotwhite) || [], function(_, flag) {
                object[flag] = true;
            });
            return object;
        }
        jQuery.Callbacks = function(options) {
            options = typeof options === "string" ? (optionsCache[options] || createOptions(options)) : jQuery.extend({}, options);
            var
                firing, memory, fired, firingLength, firingIndex, firingStart, list = [],
                stack = !options.once && [],
                fire = function(data) {
                    memory = options.memory && data;
                    fired = true;
                    firingIndex = firingStart || 0;
                    firingStart = 0;
                    firingLength = list.length;
                    firing = true;
                    for (; list && firingIndex < firingLength; firingIndex++) {
                        if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
                            memory = false;
                            break;
                        }
                    }
                    firing = false;
                    if (list) {
                        if (stack) {
                            if (stack.length) {
                                fire(stack.shift());
                            }
                        } else if (memory) {
                            list = [];
                        } else {
                            self.disable();
                        }
                    }
                },
                self = {
                    add: function() {
                        if (list) {
                            var start = list.length;
                            (function add(args) {
                                jQuery.each(args, function(_, arg) {
                                    var type = jQuery.type(arg);
                                    if (type === "function") {
                                        if (!options.unique || !self.has(arg)) {
                                            list.push(arg);
                                        }
                                    } else if (arg && arg.length && type !== "string") {
                                        add(arg);
                                    }
                                });
                            })(arguments);
                            if (firing) {
                                firingLength = list.length;
                            } else if (memory) {
                                firingStart = start;
                                fire(memory);
                            }
                        }
                        return this;
                    },
                    remove: function() {
                        if (list) {
                            jQuery.each(arguments, function(_, arg) {
                                var index;
                                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                                    list.splice(index, 1);
                                    if (firing) {
                                        if (index <= firingLength) {
                                            firingLength--;
                                        }
                                        if (index <= firingIndex) {
                                            firingIndex--;
                                        }
                                    }
                                }
                            });
                        }
                        return this;
                    },
                    has: function(fn) {
                        return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
                    },
                    empty: function() {
                        list = [];
                        return this;
                    },
                    disable: function() {
                        list = stack = memory = undefined;
                        return this;
                    },
                    disabled: function() {
                        return !list;
                    },
                    lock: function() {
                        stack = undefined;
                        if (!memory) {
                            self.disable();
                        }
                        return this;
                    },
                    locked: function() {
                        return !stack;
                    },
                    fireWith: function(context, args) {
                        args = args || [];
                        args = [context, args.slice ? args.slice() : args];
                        if (list && (!fired || stack)) {
                            if (firing) {
                                stack.push(args);
                            } else {
                                fire(args);
                            }
                        }
                        return this;
                    },
                    fire: function() {
                        self.fireWith(this, arguments);
                        return this;
                    },
                    fired: function() {
                        return !!fired;
                    }
                };
            return self;
        };
        jQuery.extend({
            Deferred: function(func) {
                var tuples = [
                        ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", jQuery.Callbacks("memory")]
                    ],
                    state = "pending",
                    promise = {
                        state: function() {
                            return state;
                        },
                        always: function() {
                            deferred.done(arguments).fail(arguments);
                            return this;
                        },
                        then: function() {
                            var fns = arguments;
                            return jQuery.Deferred(function(newDefer) {
                                jQuery.each(tuples, function(i, tuple) {
                                    var action = tuple[0],
                                        fn = jQuery.isFunction(fns[i]) && fns[i];
                                    deferred[tuple[1]](function() {
                                        var returned = fn && fn.apply(this, arguments);
                                        if (returned && jQuery.isFunction(returned.promise)) {
                                            returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
                                        } else {
                                            newDefer[action + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                                        }
                                    });
                                });
                                fns = null;
                            }).promise();
                        },
                        promise: function(obj) {
                            return obj != null ? jQuery.extend(obj, promise) : promise;
                        }
                    },
                    deferred = {};
                promise.pipe = promise.then;
                jQuery.each(tuples, function(i, tuple) {
                    var list = tuple[2],
                        stateString = tuple[3];
                    promise[tuple[1]] = list.add;
                    if (stateString) {
                        list.add(function() {
                            state = stateString;
                        }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
                    }
                    deferred[tuple[0]] = function() {
                        deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
                        return this;
                    };
                    deferred[tuple[0] + "With"] = list.fireWith;
                });
                promise.promise(deferred);
                if (func) {
                    func.call(deferred, deferred);
                }
                return deferred;
            },
            when: function(subordinate) {
                var i = 0,
                    resolveValues = core_slice.call(arguments),
                    length = resolveValues.length,
                    remaining = length !== 1 || (subordinate && jQuery.isFunction(subordinate.promise)) ? length : 0,
                    deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
                    updateFunc = function(i, contexts, values) {
                        return function(value) {
                            contexts[i] = this;
                            values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
                            if (values === progressValues) {
                                deferred.notifyWith(contexts, values);
                            } else if (!(--remaining)) {
                                deferred.resolveWith(contexts, values);
                            }
                        };
                    },
                    progressValues, progressContexts, resolveContexts;
                if (length > 1) {
                    progressValues = new Array(length);
                    progressContexts = new Array(length);
                    resolveContexts = new Array(length);
                    for (; i < length; i++) {
                        if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                            resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
                        } else {
                            --remaining;
                        }
                    }
                }
                if (!remaining) {
                    deferred.resolveWith(resolveContexts, resolveValues);
                }
                return deferred.promise();
            }
        });
        jQuery.support = (function() {
            var support, all, a, input, select, fragment, opt, eventName, isSupported, i, div = document.createElement("div");
            div.setAttribute("className", "t");
            div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
            all = div.getElementsByTagName("*");
            a = div.getElementsByTagName("a")[0];
            if (!all || !a || !all.length) {
                return {};
            }
            select = document.createElement("select");
            opt = select.appendChild(document.createElement("option"));
            input = div.getElementsByTagName("input")[0];
            a.style.cssText = "top:1px;float:left;opacity:.5";
            support = {
                getSetAttribute: div.className !== "t",
                leadingWhitespace: div.firstChild.nodeType === 3,
                tbody: !div.getElementsByTagName("tbody").length,
                htmlSerialize: !!div.getElementsByTagName("link").length,
                style: /top/.test(a.getAttribute("style")),
                hrefNormalized: a.getAttribute("href") === "/a",
                opacity: /^0.5/.test(a.style.opacity),
                cssFloat: !!a.style.cssFloat,
                checkOn: !!input.value,
                optSelected: opt.selected,
                enctype: !!document.createElement("form").enctype,
                html5Clone: document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",
                boxModel: document.compatMode === "CSS1Compat",
                deleteExpando: true,
                noCloneEvent: true,
                inlineBlockNeedsLayout: false,
                shrinkWrapBlocks: false,
                reliableMarginRight: true,
                boxSizingReliable: true,
                pixelPosition: false
            };
            input.checked = true;
            support.noCloneChecked = input.cloneNode(true).checked;
            select.disabled = true;
            support.optDisabled = !opt.disabled;
            try {
                delete div.test;
            } catch (e) {
                support.deleteExpando = false;
            }
            input = document.createElement("input");
            input.setAttribute("value", "");
            support.input = input.getAttribute("value") === "";
            input.value = "t";
            input.setAttribute("type", "radio");
            support.radioValue = input.value === "t";
            input.setAttribute("checked", "t");
            input.setAttribute("name", "t");
            fragment = document.createDocumentFragment();
            fragment.appendChild(input);
            support.appendChecked = input.checked;
            support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;
            if (div.attachEvent) {
                div.attachEvent("onclick", function() {
                    support.noCloneEvent = false;
                });
                div.cloneNode(true).click();
            }
            for (i in {
                    submit: true,
                    change: true,
                    focusin: true
                }) {
                div.setAttribute(eventName = "on" + i, "t");
                support[i + "Bubbles"] = eventName in window || div.attributes[eventName].expando === false;
            }
            div.style.backgroundClip = "content-box";
            div.cloneNode(true).style.backgroundClip = "";
            support.clearCloneStyle = div.style.backgroundClip === "content-box";
            jQuery(function() {
                var container, marginDiv, tds, divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    body = document.getElementsByTagName("body")[0];
                if (!body) {
                    return;
                }
                container = document.createElement("div");
                container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
                body.appendChild(container).appendChild(div);
                div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                tds = div.getElementsByTagName("td");
                tds[0].style.cssText = "padding:0;margin:0;border:0;display:none";
                isSupported = (tds[0].offsetHeight === 0);
                tds[0].style.display = "";
                tds[1].style.display = "none";
                support.reliableHiddenOffsets = isSupported && (tds[0].offsetHeight === 0);
                div.innerHTML = "";
                div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
                support.boxSizing = (div.offsetWidth === 4);
                support.doesNotIncludeMarginInBodyOffset = (body.offsetTop !== 1);
                if (window.getComputedStyle) {
                    support.pixelPosition = (window.getComputedStyle(div, null) || {}).top !== "1%";
                    support.boxSizingReliable = (window.getComputedStyle(div, null) || {
                        width: "4px"
                    }).width === "4px";
                    marginDiv = div.appendChild(document.createElement("div"));
                    marginDiv.style.cssText = div.style.cssText = divReset;
                    marginDiv.style.marginRight = marginDiv.style.width = "0";
                    div.style.width = "1px";
                    support.reliableMarginRight = !parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight);
                }
                if (typeof div.style.zoom !== core_strundefined) {
                    div.innerHTML = "";
                    div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
                    support.inlineBlockNeedsLayout = (div.offsetWidth === 3);
                    div.style.display = "block";
                    div.innerHTML = "<div></div>";
                    div.firstChild.style.width = "5px";
                    support.shrinkWrapBlocks = (div.offsetWidth !== 3);
                    if (support.inlineBlockNeedsLayout) {
                        body.style.zoom = 1;
                    }
                }
                body.removeChild(container);
                container = div = tds = marginDiv = null;
            });
            all = select = fragment = opt = a = input = null;
            return support;
        })();
        var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            rmultiDash = /([A-Z])/g;

        function internalData(elem, name, data, pvt) {
            if (!jQuery.acceptData(elem)) {
                return;
            }
            var thisCache, ret, internalKey = jQuery.expando,
                getByName = typeof name === "string",
                isNode = elem.nodeType,
                cache = isNode ? jQuery.cache : elem,
                id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
            if ((!id || !cache[id] || (!pvt && !cache[id].data)) && getByName && data === undefined) {
                return;
            }
            if (!id) {
                if (isNode) {
                    elem[internalKey] = id = core_deletedIds.pop() || jQuery.guid++;
                } else {
                    id = internalKey;
                }
            }
            if (!cache[id]) {
                cache[id] = {};
                if (!isNode) {
                    cache[id].toJSON = jQuery.noop;
                }
            }
            if (typeof name === "object" || typeof name === "function") {
                if (pvt) {
                    cache[id] = jQuery.extend(cache[id], name);
                } else {
                    cache[id].data = jQuery.extend(cache[id].data, name);
                }
            }
            thisCache = cache[id];
            if (!pvt) {
                if (!thisCache.data) {
                    thisCache.data = {};
                }
                thisCache = thisCache.data;
            }
            if (data !== undefined) {
                thisCache[jQuery.camelCase(name)] = data;
            }
            if (getByName) {
                ret = thisCache[name];
                if (ret == null) {
                    ret = thisCache[jQuery.camelCase(name)];
                }
            } else {
                ret = thisCache;
            }
            return ret;
        }

        function internalRemoveData(elem, name, pvt) {
            if (!jQuery.acceptData(elem)) {
                return;
            }
            var i, l, thisCache, isNode = elem.nodeType,
                cache = isNode ? jQuery.cache : elem,
                id = isNode ? elem[jQuery.expando] : jQuery.expando;
            if (!cache[id]) {
                return;
            }
            if (name) {
                thisCache = pvt ? cache[id] : cache[id].data;
                if (thisCache) {
                    if (!jQuery.isArray(name)) {
                        if (name in thisCache) {
                            name = [name];
                        } else {
                            name = jQuery.camelCase(name);
                            if (name in thisCache) {
                                name = [name];
                            } else {
                                name = name.split(" ");
                            }
                        }
                    } else {
                        name = name.concat(jQuery.map(name, jQuery.camelCase));
                    }
                    for (i = 0, l = name.length; i < l; i++) {
                        delete thisCache[name[i]];
                    }
                    if (!(pvt ? isEmptyDataObject : jQuery.isEmptyObject)(thisCache)) {
                        return;
                    }
                }
            }
            if (!pvt) {
                delete cache[id].data;
                if (!isEmptyDataObject(cache[id])) {
                    return;
                }
            }
            if (isNode) {
                jQuery.cleanData([elem], true);
            } else if (jQuery.support.deleteExpando || cache != cache.window) {
                delete cache[id];
            } else {
                cache[id] = null;
            }
        }
        jQuery.extend({
            cache: {},
            expando: "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),
            noData: {
                "embed": true,
                "object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                "applet": true
            },
            hasData: function(elem) {
                elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
                return !!elem && !isEmptyDataObject(elem);
            },
            data: function(elem, name, data) {
                return internalData(elem, name, data);
            },
            removeData: function(elem, name) {
                return internalRemoveData(elem, name);
            },
            _data: function(elem, name, data) {
                return internalData(elem, name, data, true);
            },
            _removeData: function(elem, name) {
                return internalRemoveData(elem, name, true);
            },
            acceptData: function(elem) {
                if (elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9) {
                    return false;
                }
                var noData = elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()];
                return !noData || noData !== true && elem.getAttribute("classid") === noData;
            }
        });
        jQuery.fn.extend({
            data: function(key, value) {
                var attrs, name, elem = this[0],
                    i = 0,
                    data = null;
                if (key === undefined) {
                    if (this.length) {
                        data = jQuery.data(elem);
                        if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
                            attrs = elem.attributes;
                            for (; i < attrs.length; i++) {
                                name = attrs[i].name;
                                if (!name.indexOf("data-")) {
                                    name = jQuery.camelCase(name.slice(5));
                                    dataAttr(elem, name, data[name]);
                                }
                            }
                            jQuery._data(elem, "parsedAttrs", true);
                        }
                    }
                    return data;
                }
                if (typeof key === "object") {
                    return this.each(function() {
                        jQuery.data(this, key);
                    });
                }
                return jQuery.access(this, function(value) {
                    if (value === undefined) {
                        return elem ? dataAttr(elem, key, jQuery.data(elem, key)) : null;
                    }
                    this.each(function() {
                        jQuery.data(this, key, value);
                    });
                }, null, value, arguments.length > 1, null, true);
            },
            removeData: function(key) {
                return this.each(function() {
                    jQuery.removeData(this, key);
                });
            }
        });

        function dataAttr(elem, key, data) {
            if (data === undefined && elem.nodeType === 1) {
                var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
                data = elem.getAttribute(name);
                if (typeof data === "string") {
                    try {
                        data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
                    } catch (e) {}
                    jQuery.data(elem, key, data);
                } else {
                    data = undefined;
                }
            }
            return data;
        }

        function isEmptyDataObject(obj) {
            var name;
            for (name in obj) {
                if (name === "data" && jQuery.isEmptyObject(obj[name])) {
                    continue;
                }
                if (name !== "toJSON") {
                    return false;
                }
            }
            return true;
        }
        jQuery.extend({
            queue: function(elem, type, data) {
                var queue;
                if (elem) {
                    type = (type || "fx") + "queue";
                    queue = jQuery._data(elem, type);
                    if (data) {
                        if (!queue || jQuery.isArray(data)) {
                            queue = jQuery._data(elem, type, jQuery.makeArray(data));
                        } else {
                            queue.push(data);
                        }
                    }
                    return queue || [];
                }
            },
            dequeue: function(elem, type) {
                type = type || "fx";
                var queue = jQuery.queue(elem, type),
                    startLength = queue.length,
                    fn = queue.shift(),
                    hooks = jQuery._queueHooks(elem, type),
                    next = function() {
                        jQuery.dequeue(elem, type);
                    };
                if (fn === "inprogress") {
                    fn = queue.shift();
                    startLength--;
                }
                hooks.cur = fn;
                if (fn) {
                    if (type === "fx") {
                        queue.unshift("inprogress");
                    }
                    delete hooks.stop;
                    fn.call(elem, next, hooks);
                }
                if (!startLength && hooks) {
                    hooks.empty.fire();
                }
            },
            _queueHooks: function(elem, type) {
                var key = type + "queueHooks";
                return jQuery._data(elem, key) || jQuery._data(elem, key, {
                    empty: jQuery.Callbacks("once memory").add(function() {
                        jQuery._removeData(elem, type + "queue");
                        jQuery._removeData(elem, key);
                    })
                });
            }
        });
        jQuery.fn.extend({
            queue: function(type, data) {
                var setter = 2;
                if (typeof type !== "string") {
                    data = type;
                    type = "fx";
                    setter--;
                }
                if (arguments.length < setter) {
                    return jQuery.queue(this[0], type);
                }
                return data === undefined ? this : this.each(function() {
                    var queue = jQuery.queue(this, type, data);
                    jQuery._queueHooks(this, type);
                    if (type === "fx" && queue[0] !== "inprogress") {
                        jQuery.dequeue(this, type);
                    }
                });
            },
            dequeue: function(type) {
                return this.each(function() {
                    jQuery.dequeue(this, type);
                });
            },
            delay: function(time, type) {
                time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
                type = type || "fx";
                return this.queue(type, function(next, hooks) {
                    var timeout = setTimeout(next, time);
                    hooks.stop = function() {
                        clearTimeout(timeout);
                    };
                });
            },
            clearQueue: function(type) {
                return this.queue(type || "fx", []);
            },
            promise: function(type, obj) {
                var tmp, count = 1,
                    defer = jQuery.Deferred(),
                    elements = this,
                    i = this.length,
                    resolve = function() {
                        if (!(--count)) {
                            defer.resolveWith(elements, [elements]);
                        }
                    };
                if (typeof type !== "string") {
                    obj = type;
                    type = undefined;
                }
                type = type || "fx";
                while (i--) {
                    tmp = jQuery._data(elements[i], type + "queueHooks");
                    if (tmp && tmp.empty) {
                        count++;
                        tmp.empty.add(resolve);
                    }
                }
                resolve();
                return defer.promise(obj);
            }
        });
        var nodeHook, boolHook, rclass = /[\t\r\n]/g,
            rreturn = /\r/g,
            rfocusable = /^(?:input|select|textarea|button|object)$/i,
            rclickable = /^(?:a|area)$/i,
            rboolean = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
            ruseDefault = /^(?:checked|selected)$/i,
            getSetAttribute = jQuery.support.getSetAttribute,
            getSetInput = jQuery.support.input;
        jQuery.fn.extend({
            attr: function(name, value) {
                return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1);
            },
            removeAttr: function(name) {
                return this.each(function() {
                    jQuery.removeAttr(this, name);
                });
            },
            prop: function(name, value) {
                return jQuery.access(this, jQuery.prop, name, value, arguments.length > 1);
            },
            removeProp: function(name) {
                name = jQuery.propFix[name] || name;
                return this.each(function() {
                    try {
                        this[name] = undefined;
                        delete this[name];
                    } catch (e) {}
                });
            },
            addClass: function(value) {
                var classes, elem, cur, clazz, j, i = 0,
                    len = this.length,
                    proceed = typeof value === "string" && value;
                if (jQuery.isFunction(value)) {
                    return this.each(function(j) {
                        jQuery(this).addClass(value.call(this, j, this.className));
                    });
                }
                if (proceed) {
                    classes = (value || "").match(core_rnotwhite) || [];
                    for (; i < len; i++) {
                        elem = this[i];
                        cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");
                        if (cur) {
                            j = 0;
                            while ((clazz = classes[j++])) {
                                if (cur.indexOf(" " + clazz + " ") < 0) {
                                    cur += clazz + " ";
                                }
                            }
                            elem.className = jQuery.trim(cur);
                        }
                    }
                }
                return this;
            },
            removeClass: function(value) {
                var classes, elem, cur, clazz, j, i = 0,
                    len = this.length,
                    proceed = arguments.length === 0 || typeof value === "string" && value;
                if (jQuery.isFunction(value)) {
                    return this.each(function(j) {
                        jQuery(this).removeClass(value.call(this, j, this.className));
                    });
                }
                if (proceed) {
                    classes = (value || "").match(core_rnotwhite) || [];
                    for (; i < len; i++) {
                        elem = this[i];
                        cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");
                        if (cur) {
                            j = 0;
                            while ((clazz = classes[j++])) {
                                while (cur.indexOf(" " + clazz + " ") >= 0) {
                                    cur = cur.replace(" " + clazz + " ", " ");
                                }
                            }
                            elem.className = value ? jQuery.trim(cur) : "";
                        }
                    }
                }
                return this;
            },
            toggleClass: function(value, stateVal) {
                var type = typeof value,
                    isBool = typeof stateVal === "boolean";
                if (jQuery.isFunction(value)) {
                    return this.each(function(i) {
                        jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
                    });
                }
                return this.each(function() {
                    if (type === "string") {
                        var className, i = 0,
                            self = jQuery(this),
                            state = stateVal,
                            classNames = value.match(core_rnotwhite) || [];
                        while ((className = classNames[i++])) {
                            state = isBool ? state : !self.hasClass(className);
                            self[state ? "addClass" : "removeClass"](className);
                        }
                    } else if (type === core_strundefined || type === "boolean") {
                        if (this.className) {
                            jQuery._data(this, "__className__", this.className);
                        }
                        this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";
                    }
                });
            },
            hasClass: function(selector) {
                var className = " " + selector + " ",
                    i = 0,
                    l = this.length;
                for (; i < l; i++) {
                    if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
                        return true;
                    }
                }
                return false;
            },
            val: function(value) {
                var ret, hooks, isFunction, elem = this[0];
                if (!arguments.length) {
                    if (elem) {
                        hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                        if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                            return ret;
                        }
                        ret = elem.value;
                        return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
                    }
                    return;
                }
                isFunction = jQuery.isFunction(value);
                return this.each(function(i) {
                    var val, self = jQuery(this);
                    if (this.nodeType !== 1) {
                        return;
                    }
                    if (isFunction) {
                        val = value.call(this, i, self.val());
                    } else {
                        val = value;
                    }
                    if (val == null) {
                        val = "";
                    } else if (typeof val === "number") {
                        val += "";
                    } else if (jQuery.isArray(val)) {
                        val = jQuery.map(val, function(value) {
                            return value == null ? "" : value + "";
                        });
                    }
                    hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                    if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                        this.value = val;
                    }
                });
            }
        });
        jQuery.extend({
            valHooks: {
                option: {
                    get: function(elem) {
                        var val = elem.attributes.value;
                        return !val || val.specified ? elem.value : elem.text;
                    }
                },
                select: {
                    get: function(elem) {
                        var value, option, options = elem.options,
                            index = elem.selectedIndex,
                            one = elem.type === "select-one" || index < 0,
                            values = one ? null : [],
                            max = one ? index + 1 : options.length,
                            i = index < 0 ? max : one ? index : 0;
                        for (; i < max; i++) {
                            option = options[i];
                            if ((option.selected || i === index) && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                                value = jQuery(option).val();
                                if (one) {
                                    return value;
                                }
                                values.push(value);
                            }
                        }
                        return values;
                    },
                    set: function(elem, value) {
                        var values = jQuery.makeArray(value);
                        jQuery(elem).find("option").each(function() {
                            this.selected = jQuery.inArray(jQuery(this).val(), values) >= 0;
                        });
                        if (!values.length) {
                            elem.selectedIndex = -1;
                        }
                        return values;
                    }
                }
            },
            attr: function(elem, name, value) {
                var hooks, notxml, ret, nType = elem.nodeType;
                if (!elem || nType === 3 || nType === 8 || nType === 2) {
                    return;
                }
                if (typeof elem.getAttribute === core_strundefined) {
                    return jQuery.prop(elem, name, value);
                }
                notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
                if (notxml) {
                    name = name.toLowerCase();
                    hooks = jQuery.attrHooks[name] || (rboolean.test(name) ? boolHook : nodeHook);
                }
                if (value !== undefined) {
                    if (value === null) {
                        jQuery.removeAttr(elem, name);
                    } else if (hooks && notxml && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                        return ret;
                    } else {
                        elem.setAttribute(name, value + "");
                        return value;
                    }
                } else if (hooks && notxml && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                    return ret;
                } else {
                    if (typeof elem.getAttribute !== core_strundefined) {
                        ret = elem.getAttribute(name);
                    }
                    return ret == null ? undefined : ret;
                }
            },
            removeAttr: function(elem, value) {
                var name, propName, i = 0,
                    attrNames = value && value.match(core_rnotwhite);
                if (attrNames && elem.nodeType === 1) {
                    while ((name = attrNames[i++])) {
                        propName = jQuery.propFix[name] || name;
                        if (rboolean.test(name)) {
                            if (!getSetAttribute && ruseDefault.test(name)) {
                                elem[jQuery.camelCase("default-" + name)] = elem[propName] = false;
                            } else {
                                elem[propName] = false;
                            }
                        } else {
                            jQuery.attr(elem, name, "");
                        }
                        elem.removeAttribute(getSetAttribute ? name : propName);
                    }
                }
            },
            attrHooks: {
                type: {
                    set: function(elem, value) {
                        if (!jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                            var val = elem.value;
                            elem.setAttribute("type", value);
                            if (val) {
                                elem.value = val;
                            }
                            return value;
                        }
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(elem, name, value) {
                var ret, hooks, notxml, nType = elem.nodeType;
                if (!elem || nType === 3 || nType === 8 || nType === 2) {
                    return;
                }
                notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
                if (notxml) {
                    name = jQuery.propFix[name] || name;
                    hooks = jQuery.propHooks[name];
                }
                if (value !== undefined) {
                    if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                        return ret;
                    } else {
                        return (elem[name] = value);
                    }
                } else {
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                        return ret;
                    } else {
                        return elem[name];
                    }
                }
            },
            propHooks: {
                tabIndex: {
                    get: function(elem) {
                        var attributeNode = elem.getAttributeNode("tabindex");
                        return attributeNode && attributeNode.specified ? parseInt(attributeNode.value, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : undefined;
                    }
                }
            }
        });
        boolHook = {
            get: function(elem, name) {
                var
                    prop = jQuery.prop(elem, name),
                    attr = typeof prop === "boolean" && elem.getAttribute(name),
                    detail = typeof prop === "boolean" ? getSetInput && getSetAttribute ? attr != null : ruseDefault.test(name) ? elem[jQuery.camelCase("default-" + name)] : !!attr : elem.getAttributeNode(name);
                return detail && detail.value !== false ? name.toLowerCase() : undefined;
            },
            set: function(elem, value, name) {
                if (value === false) {
                    jQuery.removeAttr(elem, name);
                } else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
                    elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);
                } else {
                    elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
                }
                return name;
            }
        };
        if (!getSetInput || !getSetAttribute) {
            jQuery.attrHooks.value = {
                get: function(elem, name) {
                    var ret = elem.getAttributeNode(name);
                    return jQuery.nodeName(elem, "input") ? elem.defaultValue : ret && ret.specified ? ret.value : undefined;
                },
                set: function(elem, value, name) {
                    if (jQuery.nodeName(elem, "input")) {
                        elem.defaultValue = value;
                    } else {
                        return nodeHook && nodeHook.set(elem, value, name);
                    }
                }
            };
        }
        if (!getSetAttribute) {
            nodeHook = jQuery.valHooks.button = {
                get: function(elem, name) {
                    var ret = elem.getAttributeNode(name);
                    return ret && (name === "id" || name === "name" || name === "coords" ? ret.value !== "" : ret.specified) ? ret.value : undefined;
                },
                set: function(elem, value, name) {
                    var ret = elem.getAttributeNode(name);
                    if (!ret) {
                        elem.setAttributeNode((ret = elem.ownerDocument.createAttribute(name)));
                    }
                    ret.value = value += "";
                    return name === "value" || value === elem.getAttribute(name) ? value : undefined;
                }
            };
            jQuery.attrHooks.contenteditable = {
                get: nodeHook.get,
                set: function(elem, value, name) {
                    nodeHook.set(elem, value === "" ? false : value, name);
                }
            };
            jQuery.each(["width", "height"], function(i, name) {
                jQuery.attrHooks[name] = jQuery.extend(jQuery.attrHooks[name], {
                    set: function(elem, value) {
                        if (value === "") {
                            elem.setAttribute(name, "auto");
                            return value;
                        }
                    }
                });
            });
        }
        if (!jQuery.support.hrefNormalized) {
            jQuery.each(["href", "src", "width", "height"], function(i, name) {
                jQuery.attrHooks[name] = jQuery.extend(jQuery.attrHooks[name], {
                    get: function(elem) {
                        var ret = elem.getAttribute(name, 2);
                        return ret == null ? undefined : ret;
                    }
                });
            });
            jQuery.each(["href", "src"], function(i, name) {
                jQuery.propHooks[name] = {
                    get: function(elem) {
                        return elem.getAttribute(name, 4);
                    }
                };
            });
        }
        if (!jQuery.support.style) {
            jQuery.attrHooks.style = {
                get: function(elem) {
                    return elem.style.cssText || undefined;
                },
                set: function(elem, value) {
                    return (elem.style.cssText = value + "");
                }
            };
        }
        if (!jQuery.support.optSelected) {
            jQuery.propHooks.selected = jQuery.extend(jQuery.propHooks.selected, {
                get: function(elem) {
                    var parent = elem.parentNode;
                    if (parent) {
                        parent.selectedIndex;
                        if (parent.parentNode) {
                            parent.parentNode.selectedIndex;
                        }
                    }
                    return null;
                }
            });
        }
        if (!jQuery.support.enctype) {
            jQuery.propFix.enctype = "encoding";
        }
        if (!jQuery.support.checkOn) {
            jQuery.each(["radio", "checkbox"], function() {
                jQuery.valHooks[this] = {
                    get: function(elem) {
                        return elem.getAttribute("value") === null ? "on" : elem.value;
                    }
                };
            });
        }
        jQuery.each(["radio", "checkbox"], function() {
            jQuery.valHooks[this] = jQuery.extend(jQuery.valHooks[this], {
                set: function(elem, value) {
                    if (jQuery.isArray(value)) {
                        return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0);
                    }
                }
            });
        });
        var rformElems = /^(?:input|select|textarea)$/i,
            rkeyEvent = /^key/,
            rmouseEvent = /^(?:mouse|contextmenu)|click/,
            rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
            rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

        function returnTrue() {
            return true;
        }

        function returnFalse() {
            return false;
        }
        jQuery.event = {
            global: {},
            add: function(elem, types, handler, data, selector) {
                var tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery._data(elem);
                if (!elemData) {
                    return;
                }
                if (handler.handler) {
                    handleObjIn = handler;
                    handler = handleObjIn.handler;
                    selector = handleObjIn.selector;
                }
                if (!handler.guid) {
                    handler.guid = jQuery.guid++;
                }
                if (!(events = elemData.events)) {
                    events = elemData.events = {};
                }
                if (!(eventHandle = elemData.handle)) {
                    eventHandle = elemData.handle = function(e) {
                        return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined;
                    };
                    eventHandle.elem = elem;
                }
                types = (types || "").match(core_rnotwhite) || [""];
                t = types.length;
                while (t--) {
                    tmp = rtypenamespace.exec(types[t]) || [];
                    type = origType = tmp[1];
                    namespaces = (tmp[2] || "").split(".").sort();
                    special = jQuery.event.special[type] || {};
                    type = (selector ? special.delegateType : special.bindType) || type;
                    special = jQuery.event.special[type] || {};
                    handleObj = jQuery.extend({
                        type: type,
                        origType: origType,
                        data: data,
                        handler: handler,
                        guid: handler.guid,
                        selector: selector,
                        needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                        namespace: namespaces.join(".")
                    }, handleObjIn);
                    if (!(handlers = events[type])) {
                        handlers = events[type] = [];
                        handlers.delegateCount = 0;
                        if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                            if (elem.addEventListener) {
                                elem.addEventListener(type, eventHandle, false);
                            } else if (elem.attachEvent) {
                                elem.attachEvent("on" + type, eventHandle);
                            }
                        }
                    }
                    if (special.add) {
                        special.add.call(elem, handleObj);
                        if (!handleObj.handler.guid) {
                            handleObj.handler.guid = handler.guid;
                        }
                    }
                    if (selector) {
                        handlers.splice(handlers.delegateCount++, 0, handleObj);
                    } else {
                        handlers.push(handleObj);
                    }
                    jQuery.event.global[type] = true;
                }
                elem = null;
            },
            remove: function(elem, types, handler, selector, mappedTypes) {
                var j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType, elemData = jQuery.hasData(elem) && jQuery._data(elem);
                if (!elemData || !(events = elemData.events)) {
                    return;
                }
                types = (types || "").match(core_rnotwhite) || [""];
                t = types.length;
                while (t--) {
                    tmp = rtypenamespace.exec(types[t]) || [];
                    type = origType = tmp[1];
                    namespaces = (tmp[2] || "").split(".").sort();
                    if (!type) {
                        for (type in events) {
                            jQuery.event.remove(elem, type + types[t], handler, selector, true);
                        }
                        continue;
                    }
                    special = jQuery.event.special[type] || {};
                    type = (selector ? special.delegateType : special.bindType) || type;
                    handlers = events[type] || [];
                    tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    origCount = j = handlers.length;
                    while (j--) {
                        handleObj = handlers[j];
                        if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                            handlers.splice(j, 1);
                            if (handleObj.selector) {
                                handlers.delegateCount--;
                            }
                            if (special.remove) {
                                special.remove.call(elem, handleObj);
                            }
                        }
                    }
                    if (origCount && !handlers.length) {
                        if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                            jQuery.removeEvent(elem, type, elemData.handle);
                        }
                        delete events[type];
                    }
                }
                if (jQuery.isEmptyObject(events)) {
                    delete elemData.handle;
                    jQuery._removeData(elem, "events");
                }
            },
            trigger: function(event, data, elem, onlyHandlers) {
                var handle, ontype, cur, bubbleType, special, tmp, i, eventPath = [elem || document],
                    type = core_hasOwn.call(event, "type") ? event.type : event,
                    namespaces = core_hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                cur = tmp = elem = elem || document;
                if (elem.nodeType === 3 || elem.nodeType === 8) {
                    return;
                }
                if (rfocusMorph.test(type + jQuery.event.triggered)) {
                    return;
                }
                if (type.indexOf(".") >= 0) {
                    namespaces = type.split(".");
                    type = namespaces.shift();
                    namespaces.sort();
                }
                ontype = type.indexOf(":") < 0 && "on" + type;
                event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
                event.isTrigger = true;
                event.namespace = namespaces.join(".");
                event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                event.result = undefined;
                if (!event.target) {
                    event.target = elem;
                }
                data = data == null ? [event] : jQuery.makeArray(data, [event]);
                special = jQuery.event.special[type] || {};
                if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                    return;
                }
                if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                    bubbleType = special.delegateType || type;
                    if (!rfocusMorph.test(bubbleType + type)) {
                        cur = cur.parentNode;
                    }
                    for (; cur; cur = cur.parentNode) {
                        eventPath.push(cur);
                        tmp = cur;
                    }
                    if (tmp === (elem.ownerDocument || document)) {
                        eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                    }
                }
                i = 0;
                while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                    event.type = i > 1 ? bubbleType : special.bindType || type;
                    handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
                    if (handle) {
                        handle.apply(cur, data);
                    }
                    handle = ontype && cur[ontype];
                    if (handle && jQuery.acceptData(cur) && handle.apply && handle.apply(cur, data) === false) {
                        event.preventDefault();
                    }
                }
                event.type = type;
                if (!onlyHandlers && !event.isDefaultPrevented()) {
                    if ((!special._default || special._default.apply(elem.ownerDocument, data) === false) && !(type === "click" && jQuery.nodeName(elem, "a")) && jQuery.acceptData(elem)) {
                        if (ontype && elem[type] && !jQuery.isWindow(elem)) {
                            tmp = elem[ontype];
                            if (tmp) {
                                elem[ontype] = null;
                            }
                            jQuery.event.triggered = type;
                            try {
                                elem[type]();
                            } catch (e) {}
                            jQuery.event.triggered = undefined;
                            if (tmp) {
                                elem[ontype] = tmp;
                            }
                        }
                    }
                }
                return event.result;
            },
            dispatch: function(event) {
                event = jQuery.event.fix(event);
                var i, ret, handleObj, matched, j, handlerQueue = [],
                    args = core_slice.call(arguments),
                    handlers = (jQuery._data(this, "events") || {})[event.type] || [],
                    special = jQuery.event.special[event.type] || {};
                args[0] = event;
                event.delegateTarget = this;
                if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                    return;
                }
                handlerQueue = jQuery.event.handlers.call(this, event, handlers);
                i = 0;
                while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                    event.currentTarget = matched.elem;
                    j = 0;
                    while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                        if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
                            event.handleObj = handleObj;
                            event.data = handleObj.data;
                            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                            if (ret !== undefined) {
                                if ((event.result = ret) === false) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }
                            }
                        }
                    }
                }
                if (special.postDispatch) {
                    special.postDispatch.call(this, event);
                }
                return event.result;
            },
            handlers: function(event, handlers) {
                var sel, handleObj, matches, i, handlerQueue = [],
                    delegateCount = handlers.delegateCount,
                    cur = event.target;
                if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
                    for (; cur != this; cur = cur.parentNode || this) {
                        if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
                            matches = [];
                            for (i = 0; i < delegateCount; i++) {
                                handleObj = handlers[i];
                                sel = handleObj.selector + " ";
                                if (matches[sel] === undefined) {
                                    matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length;
                                }
                                if (matches[sel]) {
                                    matches.push(handleObj);
                                }
                            }
                            if (matches.length) {
                                handlerQueue.push({
                                    elem: cur,
                                    handlers: matches
                                });
                            }
                        }
                    }
                }
                if (delegateCount < handlers.length) {
                    handlerQueue.push({
                        elem: this,
                        handlers: handlers.slice(delegateCount)
                    });
                }
                return handlerQueue;
            },
            fix: function(event) {
                if (event[jQuery.expando]) {
                    return event;
                }
                var i, prop, copy, type = event.type,
                    originalEvent = event,
                    fixHook = this.fixHooks[type];
                if (!fixHook) {
                    this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
                }
                copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
                event = new jQuery.Event(originalEvent);
                i = copy.length;
                while (i--) {
                    prop = copy[i];
                    event[prop] = originalEvent[prop];
                }
                if (!event.target) {
                    event.target = originalEvent.srcElement || document;
                }
                if (event.target.nodeType === 3) {
                    event.target = event.target.parentNode;
                }
                event.metaKey = !!event.metaKey;
                return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(event, original) {
                    if (event.which == null) {
                        event.which = original.charCode != null ? original.charCode : original.keyCode;
                    }
                    return event;
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(event, original) {
                    var body, eventDoc, doc, button = original.button,
                        fromElement = original.fromElement;
                    if (event.pageX == null && original.clientX != null) {
                        eventDoc = event.target.ownerDocument || document;
                        doc = eventDoc.documentElement;
                        body = eventDoc.body;
                        event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                        event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
                    }
                    if (!event.relatedTarget && fromElement) {
                        event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
                    }
                    if (!event.which && button !== undefined) {
                        event.which = (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
                    }
                    return event;
                }
            },
            special: {
                load: {
                    noBubble: true
                },
                click: {
                    trigger: function() {
                        if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                            this.click();
                            return false;
                        }
                    }
                },
                focus: {
                    trigger: function() {
                        if (this !== document.activeElement && this.focus) {
                            try {
                                this.focus();
                                return false;
                            } catch (e) {}
                        }
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === document.activeElement && this.blur) {
                            this.blur();
                            return false;
                        }
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function(event) {
                        if (event.result !== undefined) {
                            event.originalEvent.returnValue = event.result;
                        }
                    }
                }
            },
            simulate: function(type, elem, event, bubble) {
                var e = jQuery.extend(new jQuery.Event(), event, {
                    type: type,
                    isSimulated: true,
                    originalEvent: {}
                });
                if (bubble) {
                    jQuery.event.trigger(e, null, elem);
                } else {
                    jQuery.event.dispatch.call(elem, e);
                }
                if (e.isDefaultPrevented()) {
                    event.preventDefault();
                }
            }
        };
        jQuery.removeEvent = document.removeEventListener ? function(elem, type, handle) {
            if (elem.removeEventListener) {
                elem.removeEventListener(type, handle, false);
            }
        } : function(elem, type, handle) {
            var name = "on" + type;
            if (elem.detachEvent) {
                if (typeof elem[name] === core_strundefined) {
                    elem[name] = null;
                }
                elem.detachEvent(name, handle);
            }
        };
        jQuery.Event = function(src, props) {
            if (!(this instanceof jQuery.Event)) {
                return new jQuery.Event(src, props);
            }
            if (src && src.type) {
                this.originalEvent = src;
                this.type = src.type;
                this.isDefaultPrevented = (src.defaultPrevented || src.returnValue === false || src.getPreventDefault && src.getPreventDefault()) ? returnTrue : returnFalse;
            } else {
                this.type = src;
            }
            if (props) {
                jQuery.extend(this, props);
            }
            this.timeStamp = src && src.timeStamp || jQuery.now();
            this[jQuery.expando] = true;
        };
        jQuery.Event.prototype = {
            isDefaultPrevented: returnFalse,
            isPropagationStopped: returnFalse,
            isImmediatePropagationStopped: returnFalse,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = returnTrue;
                if (!e) {
                    return;
                }
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                }
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = returnTrue;
                if (!e) {
                    return;
                }
                if (e.stopPropagation) {
                    e.stopPropagation();
                }
                e.cancelBubble = true;
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = returnTrue;
                this.stopPropagation();
            }
        };
        jQuery.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(orig, fix) {
            jQuery.event.special[orig] = {
                delegateType: fix,
                bindType: fix,
                handle: function(event) {
                    var ret, target = this,
                        related = event.relatedTarget,
                        handleObj = event.handleObj;
                    if (!related || (related !== target && !jQuery.contains(target, related))) {
                        event.type = handleObj.origType;
                        ret = handleObj.handler.apply(this, arguments);
                        event.type = fix;
                    }
                    return ret;
                }
            };
        });
        if (!jQuery.support.submitBubbles) {
            jQuery.event.special.submit = {
                setup: function() {
                    if (jQuery.nodeName(this, "form")) {
                        return false;
                    }
                    jQuery.event.add(this, "click._submit keypress._submit", function(e) {
                        var elem = e.target,
                            form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
                        if (form && !jQuery._data(form, "submitBubbles")) {
                            jQuery.event.add(form, "submit._submit", function(event) {
                                event._submit_bubble = true;
                            });
                            jQuery._data(form, "submitBubbles", true);
                        }
                    });
                },
                postDispatch: function(event) {
                    if (event._submit_bubble) {
                        delete event._submit_bubble;
                        if (this.parentNode && !event.isTrigger) {
                            jQuery.event.simulate("submit", this.parentNode, event, true);
                        }
                    }
                },
                teardown: function() {
                    if (jQuery.nodeName(this, "form")) {
                        return false;
                    }
                    jQuery.event.remove(this, "._submit");
                }
            };
        }
        if (!jQuery.support.changeBubbles) {
            jQuery.event.special.change = {
                setup: function() {
                    if (rformElems.test(this.nodeName)) {
                        if (this.type === "checkbox" || this.type === "radio") {
                            jQuery.event.add(this, "propertychange._change", function(event) {
                                if (event.originalEvent.propertyName === "checked") {
                                    this._just_changed = true;
                                }
                            });
                            jQuery.event.add(this, "click._change", function(event) {
                                if (this._just_changed && !event.isTrigger) {
                                    this._just_changed = false;
                                }
                                jQuery.event.simulate("change", this, event, true);
                            });
                        }
                        return false;
                    }
                    jQuery.event.add(this, "beforeactivate._change", function(e) {
                        var elem = e.target;
                        if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
                            jQuery.event.add(elem, "change._change", function(event) {
                                if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                                    jQuery.event.simulate("change", this.parentNode, event, true);
                                }
                            });
                            jQuery._data(elem, "changeBubbles", true);
                        }
                    });
                },
                handle: function(event) {
                    var elem = event.target;
                    if (this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox")) {
                        return event.handleObj.handler.apply(this, arguments);
                    }
                },
                teardown: function() {
                    jQuery.event.remove(this, "._change");
                    return !rformElems.test(this.nodeName);
                }
            };
        }
        if (!jQuery.support.focusinBubbles) {
            jQuery.each({
                focus: "focusin",
                blur: "focusout"
            }, function(orig, fix) {
                var attaches = 0,
                    handler = function(event) {
                        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
                    };
                jQuery.event.special[fix] = {
                    setup: function() {
                        if (attaches++ === 0) {
                            document.addEventListener(orig, handler, true);
                        }
                    },
                    teardown: function() {
                        if (--attaches === 0) {
                            document.removeEventListener(orig, handler, true);
                        }
                    }
                };
            });
        }
        jQuery.fn.extend({
            on: function(types, selector, data, fn, one) {
                var type, origFn;
                if (typeof types === "object") {
                    if (typeof selector !== "string") {
                        data = data || selector;
                        selector = undefined;
                    }
                    for (type in types) {
                        this.on(type, selector, data, types[type], one);
                    }
                    return this;
                }
                if (data == null && fn == null) {
                    fn = selector;
                    data = selector = undefined;
                } else if (fn == null) {
                    if (typeof selector === "string") {
                        fn = data;
                        data = undefined;
                    } else {
                        fn = data;
                        data = selector;
                        selector = undefined;
                    }
                }
                if (fn === false) {
                    fn = returnFalse;
                } else if (!fn) {
                    return this;
                }
                if (one === 1) {
                    origFn = fn;
                    fn = function(event) {
                        jQuery().off(event);
                        return origFn.apply(this, arguments);
                    };
                    fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
                }
                return this.each(function() {
                    jQuery.event.add(this, types, fn, data, selector);
                });
            },
            one: function(types, selector, data, fn) {
                return this.on(types, selector, data, fn, 1);
            },
            off: function(types, selector, fn) {
                var handleObj, type;
                if (types && types.preventDefault && types.handleObj) {
                    handleObj = types.handleObj;
                    jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                    return this;
                }
                if (typeof types === "object") {
                    for (type in types) {
                        this.off(type, selector, types[type]);
                    }
                    return this;
                }
                if (selector === false || typeof selector === "function") {
                    fn = selector;
                    selector = undefined;
                }
                if (fn === false) {
                    fn = returnFalse;
                }
                return this.each(function() {
                    jQuery.event.remove(this, types, fn, selector);
                });
            },
            bind: function(types, data, fn) {
                return this.on(types, null, data, fn);
            },
            unbind: function(types, fn) {
                return this.off(types, null, fn);
            },
            delegate: function(selector, types, data, fn) {
                return this.on(types, selector, data, fn);
            },
            undelegate: function(selector, types, fn) {
                return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
            },
            trigger: function(type, data) {
                return this.each(function() {
                    jQuery.event.trigger(type, data, this);
                });
            },
            triggerHandler: function(type, data) {
                var elem = this[0];
                if (elem) {
                    return jQuery.event.trigger(type, data, elem, true);
                }
            }
        });
        (function(window, undefined) {
            var i, cachedruns, Expr, getText, isXML, compile, hasDuplicate, outermostContext, setDocument, document, docElem, documentIsXML, rbuggyQSA, rbuggyMatches, matches, contains, sortOrder, expando = "sizzle" + -(new Date()),
                preferredDoc = window.document,
                support = {},
                dirruns = 0,
                done = 0,
                classCache = createCache(),
                tokenCache = createCache(),
                compilerCache = createCache(),
                strundefined = typeof undefined,
                MAX_NEGATIVE = 1 << 31,
                arr = [],
                pop = arr.pop,
                push = arr.push,
                slice = arr.slice,
                indexOf = arr.indexOf || function(elem) {
                    var i = 0,
                        len = this.length;
                    for (; i < len; i++) {
                        if (this[i] === elem) {
                            return i;
                        }
                    }
                    return -1;
                },
                whitespace = "[\\x20\\t\\r\\n\\f]",
                characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                identifier = characterEncoding.replace("w", "w#"),
                operators = "([*^$|!~]?=)",
                attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace + "*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",
                pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace(3, 8) + ")*)|.*)\\)|)",
                rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
                rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
                rcombinators = new RegExp("^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*"),
                rpseudo = new RegExp(pseudos),
                ridentifier = new RegExp("^" + identifier + "$"),
                matchExpr = {
                    "ID": new RegExp("^#(" + characterEncoding + ")"),
                    "CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
                    "NAME": new RegExp("^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]"),
                    "TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
                    "ATTR": new RegExp("^" + attributes),
                    "PSEUDO": new RegExp("^" + pseudos),
                    "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                    "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                },
                rsibling = /[\x20\t\r\n\f]*[+~]/,
                rnative = /^[^{]+\{\s*\[native code/,
                rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                rinputs = /^(?:input|select|textarea|button)$/i,
                rheader = /^h\d$/i,
                rescape = /'|\\/g,
                rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                runescape = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                funescape = function(_, escaped) {
                    var high = "0x" + escaped - 0x10000;
                    return high !== high ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
                };
            try {
                slice.call(preferredDoc.documentElement.childNodes, 0)[0].nodeType;
            } catch (e) {
                slice = function(i) {
                    var elem, results = [];
                    while ((elem = this[i++])) {
                        results.push(elem);
                    }
                    return results;
                };
            }

            function isNative(fn) {
                return rnative.test(fn + "");
            }

            function createCache() {
                var cache, keys = [];
                return (cache = function(key, value) {
                    if (keys.push(key += " ") > Expr.cacheLength) {
                        delete cache[keys.shift()];
                    }
                    return (cache[key] = value);
                });
            }

            function markFunction(fn) {
                fn[expando] = true;
                return fn;
            }

            function assert(fn) {
                var div = document.createElement("div");
                try {
                    return fn(div);
                } catch (e) {
                    return false;
                } finally {
                    div = null;
                }
            }

            function Sizzle(selector, context, results, seed) {
                var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
                if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                    setDocument(context);
                }
                context = context || document;
                results = results || [];
                if (!selector || typeof selector !== "string") {
                    return results;
                }
                if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
                    return [];
                }
                if (!documentIsXML && !seed) {
                    if ((match = rquickExpr.exec(selector))) {
                        if ((m = match[1])) {
                            if (nodeType === 9) {
                                elem = context.getElementById(m);
                                if (elem && elem.parentNode) {
                                    if (elem.id === m) {
                                        results.push(elem);
                                        return results;
                                    }
                                } else {
                                    return results;
                                }
                            } else {
                                if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                    results.push(elem);
                                    return results;
                                }
                            }
                        } else if (match[2]) {
                            push.apply(results, slice.call(context.getElementsByTagName(selector), 0));
                            return results;
                        } else if ((m = match[3]) && support.getByClassName && context.getElementsByClassName) {
                            push.apply(results, slice.call(context.getElementsByClassName(m), 0));
                            return results;
                        }
                    }
                    if (support.qsa && !rbuggyQSA.test(selector)) {
                        old = true;
                        nid = expando;
                        newContext = context;
                        newSelector = nodeType === 9 && selector;
                        if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
                            groups = tokenize(selector);
                            if ((old = context.getAttribute("id"))) {
                                nid = old.replace(rescape, "\\$&");
                            } else {
                                context.setAttribute("id", nid);
                            }
                            nid = "[id='" + nid + "'] ";
                            i = groups.length;
                            while (i--) {
                                groups[i] = nid + toSelector(groups[i]);
                            }
                            newContext = rsibling.test(selector) && context.parentNode || context;
                            newSelector = groups.join(",");
                        }
                        if (newSelector) {
                            try {
                                push.apply(results, slice.call(newContext.querySelectorAll(newSelector), 0));
                                return results;
                            } catch (qsaError) {} finally {
                                if (!old) {
                                    context.removeAttribute("id");
                                }
                            }
                        }
                    }
                }
                return select(selector.replace(rtrim, "$1"), context, results, seed);
            }
            isXML = Sizzle.isXML = function(elem) {
                var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                return documentElement ? documentElement.nodeName !== "HTML" : false;
            };
            setDocument = Sizzle.setDocument = function(node) {
                var doc = node ? node.ownerDocument || node : preferredDoc;
                if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                    return document;
                }
                document = doc;
                docElem = doc.documentElement;
                documentIsXML = isXML(doc);
                support.tagNameNoComments = assert(function(div) {
                    div.appendChild(doc.createComment(""));
                    return !div.getElementsByTagName("*").length;
                });
                support.attributes = assert(function(div) {
                    div.innerHTML = "<select></select>";
                    var type = typeof div.lastChild.getAttribute("multiple");
                    return type !== "boolean" && type !== "string";
                });
                support.getByClassName = assert(function(div) {
                    div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
                    if (!div.getElementsByClassName || !div.getElementsByClassName("e").length) {
                        return false;
                    }
                    div.lastChild.className = "e";
                    return div.getElementsByClassName("e").length === 2;
                });
                support.getByName = assert(function(div) {
                    div.id = expando + 0;
                    div.innerHTML = "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
                    docElem.insertBefore(div, docElem.firstChild);
                    var pass = doc.getElementsByName && doc.getElementsByName(expando).length === 2 +
                        doc.getElementsByName(expando + 0).length;
                    support.getIdNotName = !doc.getElementById(expando);
                    docElem.removeChild(div);
                    return pass;
                });
                Expr.attrHandle = assert(function(div) {
                    div.innerHTML = "<a href='#'></a>";
                    return div.firstChild && typeof div.firstChild.getAttribute !== strundefined && div.firstChild.getAttribute("href") === "#";
                }) ? {} : {
                    "href": function(elem) {
                        return elem.getAttribute("href", 2);
                    },
                    "type": function(elem) {
                        return elem.getAttribute("type");
                    }
                };
                if (support.getIdNotName) {
                    Expr.find["ID"] = function(id, context) {
                        if (typeof context.getElementById !== strundefined && !documentIsXML) {
                            var m = context.getElementById(id);
                            return m && m.parentNode ? [m] : [];
                        }
                    };
                    Expr.filter["ID"] = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            return elem.getAttribute("id") === attrId;
                        };
                    };
                } else {
                    Expr.find["ID"] = function(id, context) {
                        if (typeof context.getElementById !== strundefined && !documentIsXML) {
                            var m = context.getElementById(id);
                            return m ? m.id === id || typeof m.getAttributeNode !== strundefined && m.getAttributeNode("id").value === id ? [m] : undefined : [];
                        }
                    };
                    Expr.filter["ID"] = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
                            return node && node.value === attrId;
                        };
                    };
                }
                Expr.find["TAG"] = support.tagNameNoComments ? function(tag, context) {
                    if (typeof context.getElementsByTagName !== strundefined) {
                        return context.getElementsByTagName(tag);
                    }
                } : function(tag, context) {
                    var elem, tmp = [],
                        i = 0,
                        results = context.getElementsByTagName(tag);
                    if (tag === "*") {
                        while ((elem = results[i++])) {
                            if (elem.nodeType === 1) {
                                tmp.push(elem);
                            }
                        }
                        return tmp;
                    }
                    return results;
                };
                Expr.find["NAME"] = support.getByName && function(tag, context) {
                    if (typeof context.getElementsByName !== strundefined) {
                        return context.getElementsByName(name);
                    }
                };
                Expr.find["CLASS"] = support.getByClassName && function(className, context) {
                    if (typeof context.getElementsByClassName !== strundefined && !documentIsXML) {
                        return context.getElementsByClassName(className);
                    }
                };
                rbuggyMatches = [];
                rbuggyQSA = [":focus"];
                if ((support.qsa = isNative(doc.querySelectorAll))) {
                    assert(function(div) {
                        div.innerHTML = "<select><option selected=''></option></select>";
                        if (!div.querySelectorAll("[selected]").length) {
                            rbuggyQSA.push("\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
                        }
                        if (!div.querySelectorAll(":checked").length) {
                            rbuggyQSA.push(":checked");
                        }
                    });
                    assert(function(div) {
                        div.innerHTML = "<input type='hidden' i=''/>";
                        if (div.querySelectorAll("[i^='']").length) {
                            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:\"\"|'')");
                        }
                        if (!div.querySelectorAll(":enabled").length) {
                            rbuggyQSA.push(":enabled", ":disabled");
                        }
                        div.querySelectorAll("*,:x");
                        rbuggyQSA.push(",.*:");
                    });
                }
                if ((support.matchesSelector = isNative((matches = docElem.matchesSelector || docElem.mozMatchesSelector || docElem.webkitMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)))) {
                    assert(function(div) {
                        support.disconnectedMatch = matches.call(div, "div");
                        matches.call(div, "[s!='']:x");
                        rbuggyMatches.push("!=", pseudos);
                    });
                }
                rbuggyQSA = new RegExp(rbuggyQSA.join("|"));
                rbuggyMatches = new RegExp(rbuggyMatches.join("|"));
                contains = isNative(docElem.contains) || docElem.compareDocumentPosition ? function(a, b) {
                    var adown = a.nodeType === 9 ? a.documentElement : a,
                        bup = b && b.parentNode;
                    return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
                } : function(a, b) {
                    if (b) {
                        while ((b = b.parentNode)) {
                            if (b === a) {
                                return true;
                            }
                        }
                    }
                    return false;
                };
                sortOrder = docElem.compareDocumentPosition ? function(a, b) {
                    var compare;
                    if (a === b) {
                        hasDuplicate = true;
                        return 0;
                    }
                    if ((compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b))) {
                        if (compare & 1 || a.parentNode && a.parentNode.nodeType === 11) {
                            if (a === doc || contains(preferredDoc, a)) {
                                return -1;
                            }
                            if (b === doc || contains(preferredDoc, b)) {
                                return 1;
                            }
                            return 0;
                        }
                        return compare & 4 ? -1 : 1;
                    }
                    return a.compareDocumentPosition ? -1 : 1;
                } : function(a, b) {
                    var cur, i = 0,
                        aup = a.parentNode,
                        bup = b.parentNode,
                        ap = [a],
                        bp = [b];
                    if (a === b) {
                        hasDuplicate = true;
                        return 0;
                    } else if (!aup || !bup) {
                        return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : 0;
                    } else if (aup === bup) {
                        return siblingCheck(a, b);
                    }
                    cur = a;
                    while ((cur = cur.parentNode)) {
                        ap.unshift(cur);
                    }
                    cur = b;
                    while ((cur = cur.parentNode)) {
                        bp.unshift(cur);
                    }
                    while (ap[i] === bp[i]) {
                        i++;
                    }
                    return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
                };
                hasDuplicate = false;
                [0, 0].sort(sortOrder);
                support.detectDuplicates = hasDuplicate;
                return document;
            };
            Sizzle.matches = function(expr, elements) {
                return Sizzle(expr, null, null, elements);
            };
            Sizzle.matchesSelector = function(elem, expr) {
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem);
                }
                expr = expr.replace(rattributeQuotes, "='$1']");
                if (support.matchesSelector && !documentIsXML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && !rbuggyQSA.test(expr)) {
                    try {
                        var ret = matches.call(elem, expr);
                        if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                            return ret;
                        }
                    } catch (e) {}
                }
                return Sizzle(expr, document, null, [elem]).length > 0;
            };
            Sizzle.contains = function(context, elem) {
                if ((context.ownerDocument || context) !== document) {
                    setDocument(context);
                }
                return contains(context, elem);
            };
            Sizzle.attr = function(elem, name) {
                var val;
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem);
                }
                if (!documentIsXML) {
                    name = name.toLowerCase();
                }
                if ((val = Expr.attrHandle[name])) {
                    return val(elem);
                }
                if (documentIsXML || support.attributes) {
                    return elem.getAttribute(name);
                }
                return ((val = elem.getAttributeNode(name)) || elem.getAttribute(name)) && elem[name] === true ? name : val && val.specified ? val.value : null;
            };
            Sizzle.error = function(msg) {
                throw new Error("Syntax error, unrecognized expression: " + msg);
            };
            Sizzle.uniqueSort = function(results) {
                var elem, duplicates = [],
                    i = 1,
                    j = 0;
                hasDuplicate = !support.detectDuplicates;
                results.sort(sortOrder);
                if (hasDuplicate) {
                    for (;
                        (elem = results[i]); i++) {
                        if (elem === results[i - 1]) {
                            j = duplicates.push(i);
                        }
                    }
                    while (j--) {
                        results.splice(duplicates[j], 1);
                    }
                }
                return results;
            };

            function siblingCheck(a, b) {
                var cur = b && a,
                    diff = cur && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
                if (diff) {
                    return diff;
                }
                if (cur) {
                    while ((cur = cur.nextSibling)) {
                        if (cur === b) {
                            return -1;
                        }
                    }
                }
                return a ? 1 : -1;
            }

            function createInputPseudo(type) {
                return function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === type;
                };
            }

            function createButtonPseudo(type) {
                return function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return (name === "input" || name === "button") && elem.type === type;
                };
            }

            function createPositionalPseudo(fn) {
                return markFunction(function(argument) {
                    argument = +argument;
                    return markFunction(function(seed, matches) {
                        var j, matchIndexes = fn([], seed.length, argument),
                            i = matchIndexes.length;
                        while (i--) {
                            if (seed[(j = matchIndexes[i])]) {
                                seed[j] = !(matches[j] = seed[j]);
                            }
                        }
                    });
                });
            }
            getText = Sizzle.getText = function(elem) {
                var node, ret = "",
                    i = 0,
                    nodeType = elem.nodeType;
                if (!nodeType) {
                    for (;
                        (node = elem[i]); i++) {
                        ret += getText(node);
                    }
                } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                    if (typeof elem.textContent === "string") {
                        return elem.textContent;
                    } else {
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            ret += getText(elem);
                        }
                    }
                } else if (nodeType === 3 || nodeType === 4) {
                    return elem.nodeValue;
                }
                return ret;
            };
            Expr = Sizzle.selectors = {
                cacheLength: 50,
                createPseudo: markFunction,
                match: matchExpr,
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: true
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: true
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    "ATTR": function(match) {
                        match[1] = match[1].replace(runescape, funescape);
                        match[3] = (match[4] || match[5] || "").replace(runescape, funescape);
                        if (match[2] === "~=") {
                            match[3] = " " + match[3] + " ";
                        }
                        return match.slice(0, 4);
                    },
                    "CHILD": function(match) {
                        match[1] = match[1].toLowerCase();
                        if (match[1].slice(0, 3) === "nth") {
                            if (!match[3]) {
                                Sizzle.error(match[0]);
                            }
                            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                            match[5] = +((match[7] + match[8]) || match[3] === "odd");
                        } else if (match[3]) {
                            Sizzle.error(match[0]);
                        }
                        return match;
                    },
                    "PSEUDO": function(match) {
                        var excess, unquoted = !match[5] && match[2];
                        if (matchExpr["CHILD"].test(match[0])) {
                            return null;
                        }
                        if (match[4]) {
                            match[2] = match[4];
                        } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                            match[0] = match[0].slice(0, excess);
                            match[2] = unquoted.slice(0, excess);
                        }
                        return match.slice(0, 3);
                    }
                },
                filter: {
                    "TAG": function(nodeName) {
                        if (nodeName === "*") {
                            return function() {
                                return true;
                            };
                        }
                        nodeName = nodeName.replace(runescape, funescape).toLowerCase();
                        return function(elem) {
                            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                        };
                    },
                    "CLASS": function(className) {
                        var pattern = classCache[className + " "];
                        return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                            return pattern.test(elem.className || (typeof elem.getAttribute !== strundefined && elem.getAttribute("class")) || "");
                        });
                    },
                    "ATTR": function(name, operator, check) {
                        return function(elem) {
                            var result = Sizzle.attr(elem, name);
                            if (result == null) {
                                return operator === "!=";
                            }
                            if (!operator) {
                                return true;
                            }
                            result += "";
                            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                        };
                    },
                    "CHILD": function(type, what, argument, first, last) {
                        var simple = type.slice(0, 3) !== "nth",
                            forward = type.slice(-4) !== "last",
                            ofType = what === "of-type";
                        return first === 1 && last === 0 ? function(elem) {
                            return !!elem.parentNode;
                        } : function(elem, context, xml) {
                            var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling",
                                parent = elem.parentNode,
                                name = ofType && elem.nodeName.toLowerCase(),
                                useCache = !xml && !ofType;
                            if (parent) {
                                if (simple) {
                                    while (dir) {
                                        node = elem;
                                        while ((node = node[dir])) {
                                            if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                                return false;
                                            }
                                        }
                                        start = dir = type === "only" && !start && "nextSibling";
                                    }
                                    return true;
                                }
                                start = [forward ? parent.firstChild : parent.lastChild];
                                if (forward && useCache) {
                                    outerCache = parent[expando] || (parent[expando] = {});
                                    cache = outerCache[type] || [];
                                    nodeIndex = cache[0] === dirruns && cache[1];
                                    diff = cache[0] === dirruns && cache[2];
                                    node = nodeIndex && parent.childNodes[nodeIndex];
                                    while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                                        if (node.nodeType === 1 && ++diff && node === elem) {
                                            outerCache[type] = [dirruns, nodeIndex, diff];
                                            break;
                                        }
                                    }
                                } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
                                    diff = cache[1];
                                } else {
                                    while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                                        if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                            if (useCache) {
                                                (node[expando] || (node[expando] = {}))[type] = [dirruns, diff];
                                            }
                                            if (node === elem) {
                                                break;
                                            }
                                        }
                                    }
                                }
                                diff -= last;
                                return diff === first || (diff % first === 0 && diff / first >= 0);
                            }
                        };
                    },
                    "PSEUDO": function(pseudo, argument) {
                        var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                        if (fn[expando]) {
                            return fn(argument);
                        }
                        if (fn.length > 1) {
                            args = [pseudo, pseudo, "", argument];
                            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                                var idx, matched = fn(seed, argument),
                                    i = matched.length;
                                while (i--) {
                                    idx = indexOf.call(seed, matched[i]);
                                    seed[idx] = !(matches[idx] = matched[i]);
                                }
                            }) : function(elem) {
                                return fn(elem, 0, args);
                            };
                        }
                        return fn;
                    }
                },
                pseudos: {
                    "not": markFunction(function(selector) {
                        var input = [],
                            results = [],
                            matcher = compile(selector.replace(rtrim, "$1"));
                        return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                            var elem, unmatched = matcher(seed, null, xml, []),
                                i = seed.length;
                            while (i--) {
                                if ((elem = unmatched[i])) {
                                    seed[i] = !(matches[i] = elem);
                                }
                            }
                        }) : function(elem, context, xml) {
                            input[0] = elem;
                            matcher(input, null, xml, results);
                            return !results.pop();
                        };
                    }),
                    "has": markFunction(function(selector) {
                        return function(elem) {
                            return Sizzle(selector, elem).length > 0;
                        };
                    }),
                    "contains": markFunction(function(text) {
                        return function(elem) {
                            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                        };
                    }),
                    "lang": markFunction(function(lang) {
                        if (!ridentifier.test(lang || "")) {
                            Sizzle.error("unsupported lang: " + lang);
                        }
                        lang = lang.replace(runescape, funescape).toLowerCase();
                        return function(elem) {
                            var elemLang;
                            do {
                                if ((elemLang = documentIsXML ? elem.getAttribute("xml:lang") || elem.getAttribute("lang") : elem.lang)) {
                                    elemLang = elemLang.toLowerCase();
                                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                                }
                            } while ((elem = elem.parentNode) && elem.nodeType === 1);
                            return false;
                        };
                    }),
                    "target": function(elem) {
                        var hash = window.location && window.location.hash;
                        return hash && hash.slice(1) === elem.id;
                    },
                    "root": function(elem) {
                        return elem === docElem;
                    },
                    "focus": function(elem) {
                        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                    },
                    "enabled": function(elem) {
                        return elem.disabled === false;
                    },
                    "disabled": function(elem) {
                        return elem.disabled === true;
                    },
                    "checked": function(elem) {
                        var nodeName = elem.nodeName.toLowerCase();
                        return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
                    },
                    "selected": function(elem) {
                        if (elem.parentNode) {
                            elem.parentNode.selectedIndex;
                        }
                        return elem.selected === true;
                    },
                    "empty": function(elem) {
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            if (elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4) {
                                return false;
                            }
                        }
                        return true;
                    },
                    "parent": function(elem) {
                        return !Expr.pseudos["empty"](elem);
                    },
                    "header": function(elem) {
                        return rheader.test(elem.nodeName);
                    },
                    "input": function(elem) {
                        return rinputs.test(elem.nodeName);
                    },
                    "button": function(elem) {
                        var name = elem.nodeName.toLowerCase();
                        return name === "input" && elem.type === "button" || name === "button";
                    },
                    "text": function(elem) {
                        var attr;
                        return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type);
                    },
                    "first": createPositionalPseudo(function() {
                        return [0];
                    }),
                    "last": createPositionalPseudo(function(matchIndexes, length) {
                        return [length - 1];
                    }),
                    "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
                        return [argument < 0 ? argument + length : argument];
                    }),
                    "even": createPositionalPseudo(function(matchIndexes, length) {
                        var i = 0;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    "odd": createPositionalPseudo(function(matchIndexes, length) {
                        var i = 1;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; --i >= 0;) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; ++i < length;) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    })
                }
            };
            for (i in {
                    radio: true,
                    checkbox: true,
                    file: true,
                    password: true,
                    image: true
                }) {
                Expr.pseudos[i] = createInputPseudo(i);
            }
            for (i in {
                    submit: true,
                    reset: true
                }) {
                Expr.pseudos[i] = createButtonPseudo(i);
            }

            function tokenize(selector, parseOnly) {
                var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                if (cached) {
                    return parseOnly ? 0 : cached.slice(0);
                }
                soFar = selector;
                groups = [];
                preFilters = Expr.preFilter;
                while (soFar) {
                    if (!matched || (match = rcomma.exec(soFar))) {
                        if (match) {
                            soFar = soFar.slice(match[0].length) || soFar;
                        }
                        groups.push(tokens = []);
                    }
                    matched = false;
                    if ((match = rcombinators.exec(soFar))) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            type: match[0].replace(rtrim, " ")
                        });
                        soFar = soFar.slice(matched.length);
                    }
                    for (type in Expr.filter) {
                        if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                            matched = match.shift();
                            tokens.push({
                                value: matched,
                                type: type,
                                matches: match
                            });
                            soFar = soFar.slice(matched.length);
                        }
                    }
                    if (!matched) {
                        break;
                    }
                }
                return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
            }

            function toSelector(tokens) {
                var i = 0,
                    len = tokens.length,
                    selector = "";
                for (; i < len; i++) {
                    selector += tokens[i].value;
                }
                return selector;
            }

            function addCombinator(matcher, combinator, base) {
                var dir = combinator.dir,
                    checkNonElements = base && dir === "parentNode",
                    doneName = done++;
                return combinator.first ? function(elem, context, xml) {
                    while ((elem = elem[dir])) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            return matcher(elem, context, xml);
                        }
                    }
                } : function(elem, context, xml) {
                    var data, cache, outerCache, dirkey = dirruns + " " + doneName;
                    if (xml) {
                        while ((elem = elem[dir])) {
                            if (elem.nodeType === 1 || checkNonElements) {
                                if (matcher(elem, context, xml)) {
                                    return true;
                                }
                            }
                        }
                    } else {
                        while ((elem = elem[dir])) {
                            if (elem.nodeType === 1 || checkNonElements) {
                                outerCache = elem[expando] || (elem[expando] = {});
                                if ((cache = outerCache[dir]) && cache[0] === dirkey) {
                                    if ((data = cache[1]) === true || data === cachedruns) {
                                        return data === true;
                                    }
                                } else {
                                    cache = outerCache[dir] = [dirkey];
                                    cache[1] = matcher(elem, context, xml) || cachedruns;
                                    if (cache[1] === true) {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                };
            }

            function elementMatcher(matchers) {
                return matchers.length > 1 ? function(elem, context, xml) {
                    var i = matchers.length;
                    while (i--) {
                        if (!matchers[i](elem, context, xml)) {
                            return false;
                        }
                    }
                    return true;
                } : matchers[0];
            }

            function condense(unmatched, map, filter, context, xml) {
                var elem, newUnmatched = [],
                    i = 0,
                    len = unmatched.length,
                    mapped = map != null;
                for (; i < len; i++) {
                    if ((elem = unmatched[i])) {
                        if (!filter || filter(elem, context, xml)) {
                            newUnmatched.push(elem);
                            if (mapped) {
                                map.push(i);
                            }
                        }
                    }
                }
                return newUnmatched;
            }

            function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                if (postFilter && !postFilter[expando]) {
                    postFilter = setMatcher(postFilter);
                }
                if (postFinder && !postFinder[expando]) {
                    postFinder = setMatcher(postFinder, postSelector);
                }
                return markFunction(function(seed, results, context, xml) {
                    var temp, i, elem, preMap = [],
                        postMap = [],
                        preexisting = results.length,
                        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
                        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
                        matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                    if (matcher) {
                        matcher(matcherIn, matcherOut, context, xml);
                    }
                    if (postFilter) {
                        temp = condense(matcherOut, postMap);
                        postFilter(temp, [], context, xml);
                        i = temp.length;
                        while (i--) {
                            if ((elem = temp[i])) {
                                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                            }
                        }
                    }
                    if (seed) {
                        if (postFinder || preFilter) {
                            if (postFinder) {
                                temp = [];
                                i = matcherOut.length;
                                while (i--) {
                                    if ((elem = matcherOut[i])) {
                                        temp.push((matcherIn[i] = elem));
                                    }
                                }
                                postFinder(null, (matcherOut = []), temp, xml);
                            }
                            i = matcherOut.length;
                            while (i--) {
                                if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {
                                    seed[temp] = !(results[temp] = elem);
                                }
                            }
                        }
                    } else {
                        matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                        if (postFinder) {
                            postFinder(null, results, matcherOut, xml);
                        } else {
                            push.apply(results, matcherOut);
                        }
                    }
                });
            }

            function matcherFromTokens(tokens) {
                var checkContext, matcher, j, len = tokens.length,
                    leadingRelative = Expr.relative[tokens[0].type],
                    implicitRelative = leadingRelative || Expr.relative[" "],
                    i = leadingRelative ? 1 : 0,
                    matchContext = addCombinator(function(elem) {
                        return elem === checkContext;
                    }, implicitRelative, true),
                    matchAnyContext = addCombinator(function(elem) {
                        return indexOf.call(checkContext, elem) > -1;
                    }, implicitRelative, true),
                    matchers = [function(elem, context, xml) {
                        return (!leadingRelative && (xml || context !== outermostContext)) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                    }];
                for (; i < len; i++) {
                    if ((matcher = Expr.relative[tokens[i].type])) {
                        matchers = [addCombinator(elementMatcher(matchers), matcher)];
                    } else {
                        matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                        if (matcher[expando]) {
                            j = ++i;
                            for (; j < len; j++) {
                                if (Expr.relative[tokens[j].type]) {
                                    break;
                                }
                            }
                            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1)).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens((tokens = tokens.slice(j))), j < len && toSelector(tokens));
                        }
                        matchers.push(matcher);
                    }
                }
                return elementMatcher(matchers);
            }

            function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                var matcherCachedRuns = 0,
                    bySet = setMatchers.length > 0,
                    byElement = elementMatchers.length > 0,
                    superMatcher = function(seed, context, xml, results, expandContext) {
                        var elem, j, matcher, setMatched = [],
                            matchedCount = 0,
                            i = "0",
                            unmatched = seed && [],
                            outermost = expandContext != null,
                            contextBackup = outermostContext,
                            elems = seed || byElement && Expr.find["TAG"]("*", expandContext && context.parentNode || context),
                            dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);
                        if (outermost) {
                            outermostContext = context !== document && context;
                            cachedruns = matcherCachedRuns;
                        }
                        for (;
                            (elem = elems[i]) != null; i++) {
                            if (byElement && elem) {
                                j = 0;
                                while ((matcher = elementMatchers[j++])) {
                                    if (matcher(elem, context, xml)) {
                                        results.push(elem);
                                        break;
                                    }
                                }
                                if (outermost) {
                                    dirruns = dirrunsUnique;
                                    cachedruns = ++matcherCachedRuns;
                                }
                            }
                            if (bySet) {
                                if ((elem = !matcher && elem)) {
                                    matchedCount--;
                                }
                                if (seed) {
                                    unmatched.push(elem);
                                }
                            }
                        }
                        matchedCount += i;
                        if (bySet && i !== matchedCount) {
                            j = 0;
                            while ((matcher = setMatchers[j++])) {
                                matcher(unmatched, setMatched, context, xml);
                            }
                            if (seed) {
                                if (matchedCount > 0) {
                                    while (i--) {
                                        if (!(unmatched[i] || setMatched[i])) {
                                            setMatched[i] = pop.call(results);
                                        }
                                    }
                                }
                                setMatched = condense(setMatched);
                            }
                            push.apply(results, setMatched);
                            if (outermost && !seed && setMatched.length > 0 && (matchedCount + setMatchers.length) > 1) {
                                Sizzle.uniqueSort(results);
                            }
                        }
                        if (outermost) {
                            dirruns = dirrunsUnique;
                            outermostContext = contextBackup;
                        }
                        return unmatched;
                    };
                return bySet ? markFunction(superMatcher) : superMatcher;
            }
            compile = Sizzle.compile = function(selector, group) {
                var i, setMatchers = [],
                    elementMatchers = [],
                    cached = compilerCache[selector + " "];
                if (!cached) {
                    if (!group) {
                        group = tokenize(selector);
                    }
                    i = group.length;
                    while (i--) {
                        cached = matcherFromTokens(group[i]);
                        if (cached[expando]) {
                            setMatchers.push(cached);
                        } else {
                            elementMatchers.push(cached);
                        }
                    }
                    cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                }
                return cached;
            };

            function multipleContexts(selector, contexts, results) {
                var i = 0,
                    len = contexts.length;
                for (; i < len; i++) {
                    Sizzle(selector, contexts[i], results);
                }
                return results;
            }

            function select(selector, context, results, seed) {
                var i, tokens, token, type, find, match = tokenize(selector);
                if (!seed) {
                    if (match.length === 1) {
                        tokens = match[0] = match[0].slice(0);
                        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && !documentIsXML && Expr.relative[tokens[1].type]) {
                            context = Expr.find["ID"](token.matches[0].replace(runescape, funescape), context)[0];
                            if (!context) {
                                return results;
                            }
                            selector = selector.slice(tokens.shift().value.length);
                        }
                        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                        while (i--) {
                            token = tokens[i];
                            if (Expr.relative[(type = token.type)]) {
                                break;
                            }
                            if ((find = Expr.find[type])) {
                                if ((seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && context.parentNode || context))) {
                                    tokens.splice(i, 1);
                                    selector = seed.length && toSelector(tokens);
                                    if (!selector) {
                                        push.apply(results, slice.call(seed, 0));
                                        return results;
                                    }
                                    break;
                                }
                            }
                        }
                    }
                }
                compile(selector, match)(seed, context, documentIsXML, results, rsibling.test(selector));
                return results;
            }
            Expr.pseudos["nth"] = Expr.pseudos["eq"];

            function setFilters() {}
            Expr.filters = setFilters.prototype = Expr.pseudos;
            Expr.setFilters = new setFilters();
            setDocument();
            Sizzle.attr = jQuery.attr;
            jQuery.find = Sizzle;
            jQuery.expr = Sizzle.selectors;
            jQuery.expr[":"] = jQuery.expr.pseudos;
            jQuery.unique = Sizzle.uniqueSort;
            jQuery.text = Sizzle.getText;
            jQuery.isXMLDoc = Sizzle.isXML;
            jQuery.contains = Sizzle.contains;
        })(window);
        var runtil = /Until$/,
            rparentsprev = /^(?:parents|prev(?:Until|All))/,
            isSimple = /^.[^:#\[\.,]*$/,
            rneedsContext = jQuery.expr.match.needsContext,
            guaranteedUnique = {
                children: true,
                contents: true,
                next: true,
                prev: true
            };
        jQuery.fn.extend({
            find: function(selector) {
                var i, ret, self, len = this.length;
                if (typeof selector !== "string") {
                    self = this;
                    return this.pushStack(jQuery(selector).filter(function() {
                        for (i = 0; i < len; i++) {
                            if (jQuery.contains(self[i], this)) {
                                return true;
                            }
                        }
                    }));
                }
                ret = [];
                for (i = 0; i < len; i++) {
                    jQuery.find(selector, this[i], ret);
                }
                ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
                ret.selector = (this.selector ? this.selector + " " : "") + selector;
                return ret;
            },
            has: function(target) {
                var i, targets = jQuery(target, this),
                    len = targets.length;
                return this.filter(function() {
                    for (i = 0; i < len; i++) {
                        if (jQuery.contains(this, targets[i])) {
                            return true;
                        }
                    }
                });
            },
            not: function(selector) {
                return this.pushStack(winnow(this, selector, false));
            },
            filter: function(selector) {
                return this.pushStack(winnow(this, selector, true));
            },
            is: function(selector) {
                return !!selector && (typeof selector === "string" ? rneedsContext.test(selector) ? jQuery(selector, this.context).index(this[0]) >= 0 : jQuery.filter(selector, this).length > 0 : this.filter(selector).length > 0);
            },
            closest: function(selectors, context) {
                var cur, i = 0,
                    l = this.length,
                    ret = [],
                    pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
                for (; i < l; i++) {
                    cur = this[i];
                    while (cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11) {
                        if (pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors)) {
                            ret.push(cur);
                            break;
                        }
                        cur = cur.parentNode;
                    }
                }
                return this.pushStack(ret.length > 1 ? jQuery.unique(ret) : ret);
            },
            index: function(elem) {
                if (!elem) {
                    return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
                }
                if (typeof elem === "string") {
                    return jQuery.inArray(this[0], jQuery(elem));
                }
                return jQuery.inArray(elem.jquery ? elem[0] : elem, this);
            },
            add: function(selector, context) {
                var set = typeof selector === "string" ? jQuery(selector, context) : jQuery.makeArray(selector && selector.nodeType ? [selector] : selector),
                    all = jQuery.merge(this.get(), set);
                return this.pushStack(jQuery.unique(all));
            },
            addBack: function(selector) {
                return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
            }
        });
        jQuery.fn.andSelf = jQuery.fn.addBack;

        function sibling(cur, dir) {
            do {
                cur = cur[dir];
            } while (cur && cur.nodeType !== 1);
            return cur;
        }
        jQuery.each({
            parent: function(elem) {
                var parent = elem.parentNode;
                return parent && parent.nodeType !== 11 ? parent : null;
            },
            parents: function(elem) {
                return jQuery.dir(elem, "parentNode");
            },
            parentsUntil: function(elem, i, until) {
                return jQuery.dir(elem, "parentNode", until);
            },
            next: function(elem) {
                return sibling(elem, "nextSibling");
            },
            prev: function(elem) {
                return sibling(elem, "previousSibling");
            },
            nextAll: function(elem) {
                return jQuery.dir(elem, "nextSibling");
            },
            prevAll: function(elem) {
                return jQuery.dir(elem, "previousSibling");
            },
            nextUntil: function(elem, i, until) {
                return jQuery.dir(elem, "nextSibling", until);
            },
            prevUntil: function(elem, i, until) {
                return jQuery.dir(elem, "previousSibling", until);
            },
            siblings: function(elem) {
                return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
            },
            children: function(elem) {
                return jQuery.sibling(elem.firstChild);
            },
            contents: function(elem) {
                return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
            }
        }, function(name, fn) {
            jQuery.fn[name] = function(until, selector) {
                var ret = jQuery.map(this, fn, until);
                if (!runtil.test(name)) {
                    selector = until;
                }
                if (selector && typeof selector === "string") {
                    ret = jQuery.filter(selector, ret);
                }
                ret = this.length > 1 && !guaranteedUnique[name] ? jQuery.unique(ret) : ret;
                if (this.length > 1 && rparentsprev.test(name)) {
                    ret = ret.reverse();
                }
                return this.pushStack(ret);
            };
        });
        jQuery.extend({
            filter: function(expr, elems, not) {
                if (not) {
                    expr = ":not(" + expr + ")";
                }
                return elems.length === 1 ? jQuery.find.matchesSelector(elems[0], expr) ? [elems[0]] : [] : jQuery.find.matches(expr, elems);
            },
            dir: function(elem, dir, until) {
                var matched = [],
                    cur = elem[dir];
                while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
                    if (cur.nodeType === 1) {
                        matched.push(cur);
                    }
                    cur = cur[dir];
                }
                return matched;
            },
            sibling: function(n, elem) {
                var r = [];
                for (; n; n = n.nextSibling) {
                    if (n.nodeType === 1 && n !== elem) {
                        r.push(n);
                    }
                }
                return r;
            }
        });

        function winnow(elements, qualifier, keep) {
            qualifier = qualifier || 0;
            if (jQuery.isFunction(qualifier)) {
                return jQuery.grep(elements, function(elem, i) {
                    var retVal = !!qualifier.call(elem, i, elem);
                    return retVal === keep;
                });
            } else if (qualifier.nodeType) {
                return jQuery.grep(elements, function(elem) {
                    return (elem === qualifier) === keep;
                });
            } else if (typeof qualifier === "string") {
                var filtered = jQuery.grep(elements, function(elem) {
                    return elem.nodeType === 1;
                });
                if (isSimple.test(qualifier)) {
                    return jQuery.filter(qualifier, filtered, !keep);
                } else {
                    qualifier = jQuery.filter(qualifier, filtered);
                }
            }
            return jQuery.grep(elements, function(elem) {
                return (jQuery.inArray(elem, qualifier) >= 0) === keep;
            });
        }

        function createSafeFragment(document) {
            var list = nodeNames.split("|"),
                safeFrag = document.createDocumentFragment();
            if (safeFrag.createElement) {
                while (list.length) {
                    safeFrag.createElement(list.pop());
                }
            }
            return safeFrag;
        }
        var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
            rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
            rleadingWhitespace = /^\s+/,
            rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            rtagName = /<([\w:]+)/,
            rtbody = /<tbody/i,
            rhtml = /<|&#?\w+;/,
            rnoInnerhtml = /<(?:script|style|link)/i,
            manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
            rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
            rscriptType = /^$|\/(?:java|ecma)script/i,
            rscriptTypeMasked = /^true\/(.*)/,
            rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            wrapMap = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: jQuery.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            safeFragment = createSafeFragment(document),
            fragmentDiv = safeFragment.appendChild(document.createElement("div"));
        wrapMap.optgroup = wrapMap.option;
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        jQuery.fn.extend({
            text: function(value) {
                return jQuery.access(this, function(value) {
                    return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
                }, null, value, arguments.length);
            },
            wrapAll: function(html) {
                if (jQuery.isFunction(html)) {
                    return this.each(function(i) {
                        jQuery(this).wrapAll(html.call(this, i));
                    });
                }
                if (this[0]) {
                    var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                    if (this[0].parentNode) {
                        wrap.insertBefore(this[0]);
                    }
                    wrap.map(function() {
                        var elem = this;
                        while (elem.firstChild && elem.firstChild.nodeType === 1) {
                            elem = elem.firstChild;
                        }
                        return elem;
                    }).append(this);
                }
                return this;
            },
            wrapInner: function(html) {
                if (jQuery.isFunction(html)) {
                    return this.each(function(i) {
                        jQuery(this).wrapInner(html.call(this, i));
                    });
                }
                return this.each(function() {
                    var self = jQuery(this),
                        contents = self.contents();
                    if (contents.length) {
                        contents.wrapAll(html);
                    } else {
                        self.append(html);
                    }
                });
            },
            wrap: function(html) {
                var isFunction = jQuery.isFunction(html);
                return this.each(function(i) {
                    jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
                });
            },
            unwrap: function() {
                return this.parent().each(function() {
                    if (!jQuery.nodeName(this, "body")) {
                        jQuery(this).replaceWith(this.childNodes);
                    }
                }).end();
            },
            append: function() {
                return this.domManip(arguments, true, function(elem) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        this.appendChild(elem);
                    }
                });
            },
            prepend: function() {
                return this.domManip(arguments, true, function(elem) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        this.insertBefore(elem, this.firstChild);
                    }
                });
            },
            before: function() {
                return this.domManip(arguments, false, function(elem) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(elem, this);
                    }
                });
            },
            after: function() {
                return this.domManip(arguments, false, function(elem) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(elem, this.nextSibling);
                    }
                });
            },
            remove: function(selector, keepData) {
                var elem, i = 0;
                for (;
                    (elem = this[i]) != null; i++) {
                    if (!selector || jQuery.filter(selector, [elem]).length > 0) {
                        if (!keepData && elem.nodeType === 1) {
                            jQuery.cleanData(getAll(elem));
                        }
                        if (elem.parentNode) {
                            if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
                                setGlobalEval(getAll(elem, "script"));
                            }
                            elem.parentNode.removeChild(elem);
                        }
                    }
                }
                return this;
            },
            empty: function() {
                var elem, i = 0;
                for (;
                    (elem = this[i]) != null; i++) {
                    if (elem.nodeType === 1) {
                        jQuery.cleanData(getAll(elem, false));
                    }
                    while (elem.firstChild) {
                        elem.removeChild(elem.firstChild);
                    }
                    if (elem.options && jQuery.nodeName(elem, "select")) {
                        elem.options.length = 0;
                    }
                }
                return this;
            },
            clone: function(dataAndEvents, deepDataAndEvents) {
                dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
                deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
                return this.map(function() {
                    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
                });
            },
            html: function(value) {
                return jQuery.access(this, function(value) {
                    var elem = this[0] || {},
                        i = 0,
                        l = this.length;
                    if (value === undefined) {
                        return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined;
                    }
                    if (typeof value === "string" && !rnoInnerhtml.test(value) && (jQuery.support.htmlSerialize || !rnoshimcache.test(value)) && (jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
                        value = value.replace(rxhtmlTag, "<$1></$2>");
                        try {
                            for (; i < l; i++) {
                                elem = this[i] || {};
                                if (elem.nodeType === 1) {
                                    jQuery.cleanData(getAll(elem, false));
                                    elem.innerHTML = value;
                                }
                            }
                            elem = 0;
                        } catch (e) {}
                    }
                    if (elem) {
                        this.empty().append(value);
                    }
                }, null, value, arguments.length);
            },
            replaceWith: function(value) {
                var isFunc = jQuery.isFunction(value);
                if (!isFunc && typeof value !== "string") {
                    value = jQuery(value).not(this).detach();
                }
                return this.domManip([value], true, function(elem) {
                    var next = this.nextSibling,
                        parent = this.parentNode;
                    if (parent) {
                        jQuery(this).remove();
                        parent.insertBefore(elem, next);
                    }
                });
            },
            detach: function(selector) {
                return this.remove(selector, true);
            },
            domManip: function(args, table, callback) {
                args = core_concat.apply([], args);
                var first, node, hasScripts, scripts, doc, fragment, i = 0,
                    l = this.length,
                    set = this,
                    iNoClone = l - 1,
                    value = args[0],
                    isFunction = jQuery.isFunction(value);
                if (isFunction || !(l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test(value))) {
                    return this.each(function(index) {
                        var self = set.eq(index);
                        if (isFunction) {
                            args[0] = value.call(this, index, table ? self.html() : undefined);
                        }
                        self.domManip(args, table, callback);
                    });
                }
                if (l) {
                    fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
                    first = fragment.firstChild;
                    if (fragment.childNodes.length === 1) {
                        fragment = first;
                    }
                    if (first) {
                        table = table && jQuery.nodeName(first, "tr");
                        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                        hasScripts = scripts.length;
                        for (; i < l; i++) {
                            node = fragment;
                            if (i !== iNoClone) {
                                node = jQuery.clone(node, true, true);
                                if (hasScripts) {
                                    jQuery.merge(scripts, getAll(node, "script"));
                                }
                            }
                            callback.call(table && jQuery.nodeName(this[i], "table") ? findOrAppend(this[i], "tbody") : this[i], node, i);
                        }
                        if (hasScripts) {
                            doc = scripts[scripts.length - 1].ownerDocument;
                            jQuery.map(scripts, restoreScript);
                            for (i = 0; i < hasScripts; i++) {
                                node = scripts[i];
                                if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {
                                    if (node.src) {
                                        jQuery.ajax({
                                            url: node.src,
                                            type: "GET",
                                            dataType: "script",
                                            async: false,
                                            global: false,
                                            "throws": true
                                        });
                                    } else {
                                        jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
                                    }
                                }
                            }
                        }
                        fragment = first = null;
                    }
                }
                return this;
            }
        });

        function findOrAppend(elem, tag) {
            return elem.getElementsByTagName(tag)[0] || elem.appendChild(elem.ownerDocument.createElement(tag));
        }

        function disableScript(elem) {
            var attr = elem.getAttributeNode("type");
            elem.type = (attr && attr.specified) + "/" + elem.type;
            return elem;
        }

        function restoreScript(elem) {
            var match = rscriptTypeMasked.exec(elem.type);
            if (match) {
                elem.type = match[1];
            } else {
                elem.removeAttribute("type");
            }
            return elem;
        }

        function setGlobalEval(elems, refElements) {
            var elem, i = 0;
            for (;
                (elem = elems[i]) != null; i++) {
                jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
            }
        }

        function cloneCopyEvent(src, dest) {
            if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
                return;
            }
            var type, i, l, oldData = jQuery._data(src),
                curData = jQuery._data(dest, oldData),
                events = oldData.events;
            if (events) {
                delete curData.handle;
                curData.events = {};
                for (type in events) {
                    for (i = 0, l = events[type].length; i < l; i++) {
                        jQuery.event.add(dest, type, events[type][i]);
                    }
                }
            }
            if (curData.data) {
                curData.data = jQuery.extend({}, curData.data);
            }
        }

        function fixCloneNodeIssues(src, dest) {
            var nodeName, e, data;
            if (dest.nodeType !== 1) {
                return;
            }
            nodeName = dest.nodeName.toLowerCase();
            if (!jQuery.support.noCloneEvent && dest[jQuery.expando]) {
                data = jQuery._data(dest);
                for (e in data.events) {
                    jQuery.removeEvent(dest, e, data.handle);
                }
                dest.removeAttribute(jQuery.expando);
            }
            if (nodeName === "script" && dest.text !== src.text) {
                disableScript(dest).text = src.text;
                restoreScript(dest);
            } else if (nodeName === "object") {
                if (dest.parentNode) {
                    dest.outerHTML = src.outerHTML;
                }
                if (jQuery.support.html5Clone && (src.innerHTML && !jQuery.trim(dest.innerHTML))) {
                    dest.innerHTML = src.innerHTML;
                }
            } else if (nodeName === "input" && manipulation_rcheckableType.test(src.type)) {
                dest.defaultChecked = dest.checked = src.checked;
                if (dest.value !== src.value) {
                    dest.value = src.value;
                }
            } else if (nodeName === "option") {
                dest.defaultSelected = dest.selected = src.defaultSelected;
            } else if (nodeName === "input" || nodeName === "textarea") {
                dest.defaultValue = src.defaultValue;
            }
        }
        jQuery.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(name, original) {
            jQuery.fn[name] = function(selector) {
                var elems, i = 0,
                    ret = [],
                    insert = jQuery(selector),
                    last = insert.length - 1;
                for (; i <= last; i++) {
                    elems = i === last ? this : this.clone(true);
                    jQuery(insert[i])[original](elems);
                    core_push.apply(ret, elems.get());
                }
                return this.pushStack(ret);
            };
        });

        function getAll(context, tag) {
            var elems, elem, i = 0,
                found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll(tag || "*") : undefined;
            if (!found) {
                for (found = [], elems = context.childNodes || context;
                    (elem = elems[i]) != null; i++) {
                    if (!tag || jQuery.nodeName(elem, tag)) {
                        found.push(elem);
                    } else {
                        jQuery.merge(found, getAll(elem, tag));
                    }
                }
            }
            return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found;
        }

        function fixDefaultChecked(elem) {
            if (manipulation_rcheckableType.test(elem.type)) {
                elem.defaultChecked = elem.checked;
            }
        }
        jQuery.extend({
            clone: function(elem, dataAndEvents, deepDataAndEvents) {
                var destElements, node, clone, i, srcElements, inPage = jQuery.contains(elem.ownerDocument, elem);
                if (jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
                    clone = elem.cloneNode(true);
                } else {
                    fragmentDiv.innerHTML = elem.outerHTML;
                    fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
                }
                if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                    destElements = getAll(clone);
                    srcElements = getAll(elem);
                    for (i = 0;
                        (node = srcElements[i]) != null; ++i) {
                        if (destElements[i]) {
                            fixCloneNodeIssues(node, destElements[i]);
                        }
                    }
                }
                if (dataAndEvents) {
                    if (deepDataAndEvents) {
                        srcElements = srcElements || getAll(elem);
                        destElements = destElements || getAll(clone);
                        for (i = 0;
                            (node = srcElements[i]) != null; i++) {
                            cloneCopyEvent(node, destElements[i]);
                        }
                    } else {
                        cloneCopyEvent(elem, clone);
                    }
                }
                destElements = getAll(clone, "script");
                if (destElements.length > 0) {
                    setGlobalEval(destElements, !inPage && getAll(elem, "script"));
                }
                destElements = srcElements = node = null;
                return clone;
            },
            buildFragment: function(elems, context, scripts, selection) {
                var j, elem, contains, tmp, tag, tbody, wrap, l = elems.length,
                    safe = createSafeFragment(context),
                    nodes = [],
                    i = 0;
                for (; i < l; i++) {
                    elem = elems[i];
                    if (elem || elem === 0) {
                        if (jQuery.type(elem) === "object") {
                            jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
                        } else if (!rhtml.test(elem)) {
                            nodes.push(context.createTextNode(elem));
                        } else {
                            tmp = tmp || safe.appendChild(context.createElement("div"));
                            tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                            wrap = wrapMap[tag] || wrapMap._default;
                            tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
                            j = wrap[0];
                            while (j--) {
                                tmp = tmp.lastChild;
                            }
                            if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
                                nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
                            }
                            if (!jQuery.support.tbody) {
                                elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild : wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;
                                j = elem && elem.childNodes.length;
                                while (j--) {
                                    if (jQuery.nodeName((tbody = elem.childNodes[j]), "tbody") && !tbody.childNodes.length) {
                                        elem.removeChild(tbody);
                                    }
                                }
                            }
                            jQuery.merge(nodes, tmp.childNodes);
                            tmp.textContent = "";
                            while (tmp.firstChild) {
                                tmp.removeChild(tmp.firstChild);
                            }
                            tmp = safe.lastChild;
                        }
                    }
                }
                if (tmp) {
                    safe.removeChild(tmp);
                }
                if (!jQuery.support.appendChecked) {
                    jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
                }
                i = 0;
                while ((elem = nodes[i++])) {
                    if (selection && jQuery.inArray(elem, selection) !== -1) {
                        continue;
                    }
                    contains = jQuery.contains(elem.ownerDocument, elem);
                    tmp = getAll(safe.appendChild(elem), "script");
                    if (contains) {
                        setGlobalEval(tmp);
                    }
                    if (scripts) {
                        j = 0;
                        while ((elem = tmp[j++])) {
                            if (rscriptType.test(elem.type || "")) {
                                scripts.push(elem);
                            }
                        }
                    }
                }
                tmp = null;
                return safe;
            },
            cleanData: function(elems, acceptData) {
                var elem, type, id, data, i = 0,
                    internalKey = jQuery.expando,
                    cache = jQuery.cache,
                    deleteExpando = jQuery.support.deleteExpando,
                    special = jQuery.event.special;
                for (;
                    (elem = elems[i]) != null; i++) {
                    if (acceptData || jQuery.acceptData(elem)) {
                        id = elem[internalKey];
                        data = id && cache[id];
                        if (data) {
                            if (data.events) {
                                for (type in data.events) {
                                    if (special[type]) {
                                        jQuery.event.remove(elem, type);
                                    } else {
                                        jQuery.removeEvent(elem, type, data.handle);
                                    }
                                }
                            }
                            if (cache[id]) {
                                delete cache[id];
                                if (deleteExpando) {
                                    delete elem[internalKey];
                                } else if (typeof elem.removeAttribute !== core_strundefined) {
                                    elem.removeAttribute(internalKey);
                                } else {
                                    elem[internalKey] = null;
                                }
                                core_deletedIds.push(id);
                            }
                        }
                    }
                }
            }
        });
        var iframe, getStyles, curCSS, ralpha = /alpha\([^)]*\)/i,
            ropacity = /opacity\s*=\s*([^)]*)/,
            rposition = /^(top|right|bottom|left)$/,
            rdisplayswap = /^(none|table(?!-c[ea]).+)/,
            rmargin = /^margin/,
            rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"),
            rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"),
            rrelNum = new RegExp("^([+-])=(" + core_pnum + ")", "i"),
            elemdisplay = {
                BODY: "block"
            },
            cssShow = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            cssNormalTransform = {
                letterSpacing: 0,
                fontWeight: 400
            },
            cssExpand = ["Top", "Right", "Bottom", "Left"],
            cssPrefixes = ["Webkit", "O", "Moz", "ms"];

        function vendorPropName(style, name) {
            if (name in style) {
                return name;
            }
            var capName = name.charAt(0).toUpperCase() + name.slice(1),
                origName = name,
                i = cssPrefixes.length;
            while (i--) {
                name = cssPrefixes[i] + capName;
                if (name in style) {
                    return name;
                }
            }
            return origName;
        }

        function isHidden(elem, el) {
            elem = el || elem;
            return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
        }

        function showHide(elements, show) {
            var display, elem, hidden, values = [],
                index = 0,
                length = elements.length;
            for (; index < length; index++) {
                elem = elements[index];
                if (!elem.style) {
                    continue;
                }
                values[index] = jQuery._data(elem, "olddisplay");
                display = elem.style.display;
                if (show) {
                    if (!values[index] && display === "none") {
                        elem.style.display = "";
                    }
                    if (elem.style.display === "" && isHidden(elem)) {
                        values[index] = jQuery._data(elem, "olddisplay", css_defaultDisplay(elem.nodeName));
                    }
                } else {
                    if (!values[index]) {
                        hidden = isHidden(elem);
                        if (display && display !== "none" || !hidden) {
                            jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
                        }
                    }
                }
            }
            for (index = 0; index < length; index++) {
                elem = elements[index];
                if (!elem.style) {
                    continue;
                }
                if (!show || elem.style.display === "none" || elem.style.display === "") {
                    elem.style.display = show ? values[index] || "" : "none";
                }
            }
            return elements;
        }
        jQuery.fn.extend({
            css: function(name, value) {
                return jQuery.access(this, function(elem, name, value) {
                    var len, styles, map = {},
                        i = 0;
                    if (jQuery.isArray(name)) {
                        styles = getStyles(elem);
                        len = name.length;
                        for (; i < len; i++) {
                            map[name[i]] = jQuery.css(elem, name[i], false, styles);
                        }
                        return map;
                    }
                    return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
                }, name, value, arguments.length > 1);
            },
            show: function() {
                return showHide(this, true);
            },
            hide: function() {
                return showHide(this);
            },
            toggle: function(state) {
                var bool = typeof state === "boolean";
                return this.each(function() {
                    if (bool ? state : isHidden(this)) {
                        jQuery(this).show();
                    } else {
                        jQuery(this).hide();
                    }
                });
            }
        });
        jQuery.extend({
            cssHooks: {
                opacity: {
                    get: function(elem, computed) {
                        if (computed) {
                            var ret = curCSS(elem, "opacity");
                            return ret === "" ? "1" : ret;
                        }
                    }
                }
            },
            cssNumber: {
                "columnCount": true,
                "fillOpacity": true,
                "fontWeight": true,
                "lineHeight": true,
                "opacity": true,
                "orphans": true,
                "widows": true,
                "zIndex": true,
                "zoom": true
            },
            cssProps: {
                "float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(elem, name, value, extra) {
                if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                    return;
                }
                var ret, type, hooks, origName = jQuery.camelCase(name),
                    style = elem.style;
                name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                if (value !== undefined) {
                    type = typeof value;
                    if (type === "string" && (ret = rrelNum.exec(value))) {
                        value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
                        type = "number";
                    }
                    if (value == null || type === "number" && isNaN(value)) {
                        return;
                    }
                    if (type === "number" && !jQuery.cssNumber[origName]) {
                        value += "px";
                    }
                    if (!jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                        style[name] = "inherit";
                    }
                    if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                        try {
                            style[name] = value;
                        } catch (e) {}
                    }
                } else {
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                        return ret;
                    }
                    return style[name];
                }
            },
            css: function(elem, name, extra, styles) {
                var num, val, hooks, origName = jQuery.camelCase(name);
                name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                if (hooks && "get" in hooks) {
                    val = hooks.get(elem, true, extra);
                }
                if (val === undefined) {
                    val = curCSS(elem, name, styles);
                }
                if (val === "normal" && name in cssNormalTransform) {
                    val = cssNormalTransform[name];
                }
                if (extra === "" || extra) {
                    num = parseFloat(val);
                    return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
                }
                return val;
            },
            swap: function(elem, options, callback, args) {
                var ret, name, old = {};
                for (name in options) {
                    old[name] = elem.style[name];
                    elem.style[name] = options[name];
                }
                ret = callback.apply(elem, args || []);
                for (name in options) {
                    elem.style[name] = old[name];
                }
                return ret;
            }
        });
        if (window.getComputedStyle) {
            getStyles = function(elem) {
                return window.getComputedStyle(elem, null);
            };
            curCSS = function(elem, name, _computed) {
                var width, minWidth, maxWidth, computed = _computed || getStyles(elem),
                    ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined,
                    style = elem.style;
                if (computed) {
                    if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
                        ret = jQuery.style(elem, name);
                    }
                    if (rnumnonpx.test(ret) && rmargin.test(name)) {
                        width = style.width;
                        minWidth = style.minWidth;
                        maxWidth = style.maxWidth;
                        style.minWidth = style.maxWidth = style.width = ret;
                        ret = computed.width;
                        style.width = width;
                        style.minWidth = minWidth;
                        style.maxWidth = maxWidth;
                    }
                }
                return ret;
            };
        } else if (document.documentElement.currentStyle) {
            getStyles = function(elem) {
                return elem.currentStyle;
            };
            curCSS = function(elem, name, _computed) {
                var left, rs, rsLeft, computed = _computed || getStyles(elem),
                    ret = computed ? computed[name] : undefined,
                    style = elem.style;
                if (ret == null && style && style[name]) {
                    ret = style[name];
                }
                if (rnumnonpx.test(ret) && !rposition.test(name)) {
                    left = style.left;
                    rs = elem.runtimeStyle;
                    rsLeft = rs && rs.left;
                    if (rsLeft) {
                        rs.left = elem.currentStyle.left;
                    }
                    style.left = name === "fontSize" ? "1em" : ret;
                    ret = style.pixelLeft + "px";
                    style.left = left;
                    if (rsLeft) {
                        rs.left = rsLeft;
                    }
                }
                return ret === "" ? "auto" : ret;
            };
        }

        function setPositiveNumber(elem, value, subtract) {
            var matches = rnumsplit.exec(value);
            return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
        }

        function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
            var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0,
                val = 0;
            for (; i < 4; i += 2) {
                if (extra === "margin") {
                    val += jQuery.css(elem, extra + cssExpand[i], true, styles);
                }
                if (isBorderBox) {
                    if (extra === "content") {
                        val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                    }
                    if (extra !== "margin") {
                        val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                    }
                } else {
                    val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                    if (extra !== "padding") {
                        val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                    }
                }
            }
            return val;
        }

        function getWidthOrHeight(elem, name, extra) {
            var valueIsBorderBox = true,
                val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
                styles = getStyles(elem),
                isBorderBox = jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";
            if (val <= 0 || val == null) {
                val = curCSS(elem, name, styles);
                if (val < 0 || val == null) {
                    val = elem.style[name];
                }
                if (rnumnonpx.test(val)) {
                    return val;
                }
                valueIsBorderBox = isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]);
                val = parseFloat(val) || 0;
            }
            return (val +
                augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles)) + "px";
        }

        function css_defaultDisplay(nodeName) {
            var doc = document,
                display = elemdisplay[nodeName];
            if (!display) {
                display = actualDisplay(nodeName, doc);
                if (display === "none" || !display) {
                    iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(doc.documentElement);
                    doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
                    doc.write("<!doctype html><html><body>");
                    doc.close();
                    display = actualDisplay(nodeName, doc);
                    iframe.detach();
                }
                elemdisplay[nodeName] = display;
            }
            return display;
        }

        function actualDisplay(name, doc) {
            var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
                display = jQuery.css(elem[0], "display");
            elem.remove();
            return display;
        }
        jQuery.each(["height", "width"], function(i, name) {
            jQuery.cssHooks[name] = {
                get: function(elem, computed, extra) {
                    if (computed) {
                        return elem.offsetWidth === 0 && rdisplayswap.test(jQuery.css(elem, "display")) ? jQuery.swap(elem, cssShow, function() {
                            return getWidthOrHeight(elem, name, extra);
                        }) : getWidthOrHeight(elem, name, extra);
                    }
                },
                set: function(elem, value, extra) {
                    var styles = extra && getStyles(elem);
                    return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
                }
            };
        });
        if (!jQuery.support.opacity) {
            jQuery.cssHooks.opacity = {
                get: function(elem, computed) {
                    return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : computed ? "1" : "";
                },
                set: function(elem, value) {
                    var style = elem.style,
                        currentStyle = elem.currentStyle,
                        opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "",
                        filter = currentStyle && currentStyle.filter || style.filter || "";
                    style.zoom = 1;
                    if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {
                        style.removeAttribute("filter");
                        if (value === "" || currentStyle && !currentStyle.filter) {
                            return;
                        }
                    }
                    style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity;
                }
            };
        }
        jQuery(function() {
            if (!jQuery.support.reliableMarginRight) {
                jQuery.cssHooks.marginRight = {
                    get: function(elem, computed) {
                        if (computed) {
                            return jQuery.swap(elem, {
                                "display": "inline-block"
                            }, curCSS, [elem, "marginRight"]);
                        }
                    }
                };
            }
            if (!jQuery.support.pixelPosition && jQuery.fn.position) {
                jQuery.each(["top", "left"], function(i, prop) {
                    jQuery.cssHooks[prop] = {
                        get: function(elem, computed) {
                            if (computed) {
                                computed = curCSS(elem, prop);
                                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
                            }
                        }
                    };
                });
            }
        });
        if (jQuery.expr && jQuery.expr.filters) {
            jQuery.expr.filters.hidden = function(elem) {
                return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || (!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css(elem, "display")) === "none");
            };
            jQuery.expr.filters.visible = function(elem) {
                return !jQuery.expr.filters.hidden(elem);
            };
        }
        jQuery.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(prefix, suffix) {
            jQuery.cssHooks[prefix + suffix] = {
                expand: function(value) {
                    var i = 0,
                        expanded = {},
                        parts = typeof value === "string" ? value.split(" ") : [value];
                    for (; i < 4; i++) {
                        expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                    }
                    return expanded;
                }
            };
            if (!rmargin.test(prefix)) {
                jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
            }
        });
        var r20 = /%20/g,
            rbracket = /\[\]$/,
            rCRLF = /\r?\n/g,
            rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
            rsubmittable = /^(?:input|select|textarea|keygen)/i;
        jQuery.fn.extend({
            serialize: function() {
                return jQuery.param(this.serializeArray());
            },
            serializeArray: function() {
                return this.map(function() {
                    var elements = jQuery.prop(this, "elements");
                    return elements ? jQuery.makeArray(elements) : this;
                }).filter(function() {
                    var type = this.type;
                    return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
                }).map(function(i, elem) {
                    var val = jQuery(this).val();
                    return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                        return {
                            name: elem.name,
                            value: val.replace(rCRLF, "\r\n")
                        };
                    }) : {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                }).get();
            }
        });
        jQuery.param = function(a, traditional) {
            var prefix, s = [],
                add = function(key, value) {
                    value = jQuery.isFunction(value) ? value() : (value == null ? "" : value);
                    s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
                };
            if (traditional === undefined) {
                traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
            }
            if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
                jQuery.each(a, function() {
                    add(this.name, this.value);
                });
            } else {
                for (prefix in a) {
                    buildParams(prefix, a[prefix], traditional, add);
                }
            }
            return s.join("&").replace(r20, "+");
        };

        function buildParams(prefix, obj, traditional, add) {
            var name;
            if (jQuery.isArray(obj)) {
                jQuery.each(obj, function(i, v) {
                    if (traditional || rbracket.test(prefix)) {
                        add(prefix, v);
                    } else {
                        buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
                    }
                });
            } else if (!traditional && jQuery.type(obj) === "object") {
                for (name in obj) {
                    buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
                }
            } else {
                add(prefix, obj);
            }
        }
        jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
            jQuery.fn[name] = function(data, fn) {
                return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
            };
        });
        jQuery.fn.hover = function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        };
        var
            ajaxLocParts, ajaxLocation, ajax_nonce = jQuery.now(),
            ajax_rquery = /\?/,
            rhash = /#.*$/,
            rts = /([?&])_=[^&]*/,
            rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
            rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            rnoContent = /^(?:GET|HEAD)$/,
            rprotocol = /^\/\//,
            rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            _load = jQuery.fn.load,
            prefilters = {},
            transports = {},
            allTypes = "*/".concat("*");
        try {
            ajaxLocation = location.href;
        } catch (e) {
            ajaxLocation = document.createElement("a");
            ajaxLocation.href = "";
            ajaxLocation = ajaxLocation.href;
        }
        ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

        function addToPrefiltersOrTransports(structure) {
            return function(dataTypeExpression, func) {
                if (typeof dataTypeExpression !== "string") {
                    func = dataTypeExpression;
                    dataTypeExpression = "*";
                }
                var dataType, i = 0,
                    dataTypes = dataTypeExpression.toLowerCase().match(core_rnotwhite) || [];
                if (jQuery.isFunction(func)) {
                    while ((dataType = dataTypes[i++])) {
                        if (dataType[0] === "+") {
                            dataType = dataType.slice(1) || "*";
                            (structure[dataType] = structure[dataType] || []).unshift(func);
                        } else {
                            (structure[dataType] = structure[dataType] || []).push(func);
                        }
                    }
                }
            };
        }

        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
            var inspected = {},
                seekingTransport = (structure === transports);

            function inspect(dataType) {
                var selected;
                inspected[dataType] = true;
                jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                    var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                    if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                        options.dataTypes.unshift(dataTypeOrTransport);
                        inspect(dataTypeOrTransport);
                        return false;
                    } else if (seekingTransport) {
                        return !(selected = dataTypeOrTransport);
                    }
                });
                return selected;
            }
            return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }

        function ajaxExtend(target, src) {
            var deep, key, flatOptions = jQuery.ajaxSettings.flatOptions || {};
            for (key in src) {
                if (src[key] !== undefined) {
                    (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
                }
            }
            if (deep) {
                jQuery.extend(true, target, deep);
            }
            return target;
        }
        jQuery.fn.load = function(url, params, callback) {
            if (typeof url !== "string" && _load) {
                return _load.apply(this, arguments);
            }
            var selector, response, type, self = this,
                off = url.indexOf(" ");
            if (off >= 0) {
                selector = url.slice(off, url.length);
                url = url.slice(0, off);
            }
            if (jQuery.isFunction(params)) {
                callback = params;
                params = undefined;
            } else if (params && typeof params === "object") {
                type = "POST";
            }
            if (self.length > 0) {
                jQuery.ajax({
                    url: url,
                    type: type,
                    dataType: "html",
                    data: params
                }).done(function(responseText) {
                    response = arguments;
                    self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
                }).complete(callback && function(jqXHR, status) {
                    self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
                });
            }
            return this;
        };
        jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
            jQuery.fn[type] = function(fn) {
                return this.on(type, fn);
            };
        });
        jQuery.each(["get", "post"], function(i, method) {
            jQuery[method] = function(url, data, callback, type) {
                if (jQuery.isFunction(data)) {
                    type = type || callback;
                    callback = data;
                    data = undefined;
                }
                return jQuery.ajax({
                    url: url,
                    type: method,
                    dataType: type,
                    data: data,
                    success: callback
                });
            };
        });
        jQuery.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ajaxLocation,
                type: "GET",
                isLocal: rlocalProtocol.test(ajaxLocParts[1]),
                global: true,
                processData: true,
                async: true,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": allTypes,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": window.String,
                    "text html": true,
                    "text json": jQuery.parseJSON,
                    "text xml": jQuery.parseXML
                },
                flatOptions: {
                    url: true,
                    context: true
                }
            },
            ajaxSetup: function(target, settings) {
                return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
            },
            ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
            ajaxTransport: addToPrefiltersOrTransports(transports),
            ajax: function(url, options) {
                if (typeof url === "object") {
                    options = url;
                    url = undefined;
                }
                options = options || {};
                var
                    parts, i, cacheURL, responseHeadersString, timeoutTimer, fireGlobals, transport, responseHeaders, s = jQuery.ajaxSetup({}, options),
                    callbackContext = s.context || s,
                    globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
                    deferred = jQuery.Deferred(),
                    completeDeferred = jQuery.Callbacks("once memory"),
                    statusCode = s.statusCode || {},
                    requestHeaders = {},
                    requestHeadersNames = {},
                    state = 0,
                    strAbort = "canceled",
                    jqXHR = {
                        readyState: 0,
                        getResponseHeader: function(key) {
                            var match;
                            if (state === 2) {
                                if (!responseHeaders) {
                                    responseHeaders = {};
                                    while ((match = rheaders.exec(responseHeadersString))) {
                                        responseHeaders[match[1].toLowerCase()] = match[2];
                                    }
                                }
                                match = responseHeaders[key.toLowerCase()];
                            }
                            return match == null ? null : match;
                        },
                        getAllResponseHeaders: function() {
                            return state === 2 ? responseHeadersString : null;
                        },
                        setRequestHeader: function(name, value) {
                            var lname = name.toLowerCase();
                            if (!state) {
                                name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                                requestHeaders[name] = value;
                            }
                            return this;
                        },
                        overrideMimeType: function(type) {
                            if (!state) {
                                s.mimeType = type;
                            }
                            return this;
                        },
                        statusCode: function(map) {
                            var code;
                            if (map) {
                                if (state < 2) {
                                    for (code in map) {
                                        statusCode[code] = [statusCode[code], map[code]];
                                    }
                                } else {
                                    jqXHR.always(map[jqXHR.status]);
                                }
                            }
                            return this;
                        },
                        abort: function(statusText) {
                            var finalText = statusText || strAbort;
                            if (transport) {
                                transport.abort(finalText);
                            }
                            done(0, finalText);
                            return this;
                        }
                    };
                deferred.promise(jqXHR).complete = completeDeferred.add;
                jqXHR.success = jqXHR.done;
                jqXHR.error = jqXHR.fail;
                s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
                s.type = options.method || options.type || s.method || s.type;
                s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(core_rnotwhite) || [""];
                if (s.crossDomain == null) {
                    parts = rurl.exec(s.url.toLowerCase());
                    s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? 80 : 443)) != (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? 80 : 443))));
                }
                if (s.data && s.processData && typeof s.data !== "string") {
                    s.data = jQuery.param(s.data, s.traditional);
                }
                inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
                if (state === 2) {
                    return jqXHR;
                }
                fireGlobals = s.global;
                if (fireGlobals && jQuery.active++ === 0) {
                    jQuery.event.trigger("ajaxStart");
                }
                s.type = s.type.toUpperCase();
                s.hasContent = !rnoContent.test(s.type);
                cacheURL = s.url;
                if (!s.hasContent) {
                    if (s.data) {
                        cacheURL = (s.url += (ajax_rquery.test(cacheURL) ? "&" : "?") + s.data);
                        delete s.data;
                    }
                    if (s.cache === false) {
                        s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + ajax_nonce++) : cacheURL + (ajax_rquery.test(cacheURL) ? "&" : "?") + "_=" + ajax_nonce++;
                    }
                }
                if (s.ifModified) {
                    if (jQuery.lastModified[cacheURL]) {
                        jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                    }
                    if (jQuery.etag[cacheURL]) {
                        jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                    }
                }
                if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                    jqXHR.setRequestHeader("Content-Type", s.contentType);
                }
                jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
                for (i in s.headers) {
                    jqXHR.setRequestHeader(i, s.headers[i]);
                }
                if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
                    return jqXHR.abort();
                }
                strAbort = "abort";
                for (i in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) {
                    jqXHR[i](s[i]);
                }
                transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
                if (!transport) {
                    done(-1, "No Transport");
                } else {
                    jqXHR.readyState = 1;
                    if (fireGlobals) {
                        globalEventContext.trigger("ajaxSend", [jqXHR, s]);
                    }
                    if (s.async && s.timeout > 0) {
                        timeoutTimer = setTimeout(function() {
                            jqXHR.abort("timeout");
                        }, s.timeout);
                    }
                    try {
                        state = 1;
                        transport.send(requestHeaders, done);
                    } catch (e) {
                        if (state < 2) {
                            done(-1, e);
                        } else {
                            throw e;
                        }
                    }
                }

                function done(status, nativeStatusText, responses, headers) {
                    var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                    if (state === 2) {
                        return;
                    }
                    state = 2;
                    if (timeoutTimer) {
                        clearTimeout(timeoutTimer);
                    }
                    transport = undefined;
                    responseHeadersString = headers || "";
                    jqXHR.readyState = status > 0 ? 4 : 0;
                    if (responses) {
                        response = ajaxHandleResponses(s, jqXHR, responses);
                    }
                    if (status >= 200 && status < 300 || status === 304) {
                        if (s.ifModified) {
                            modified = jqXHR.getResponseHeader("Last-Modified");
                            if (modified) {
                                jQuery.lastModified[cacheURL] = modified;
                            }
                            modified = jqXHR.getResponseHeader("etag");
                            if (modified) {
                                jQuery.etag[cacheURL] = modified;
                            }
                        }
                        if (status === 204) {
                            isSuccess = true;
                            statusText = "nocontent";
                        } else if (status === 304) {
                            isSuccess = true;
                            statusText = "notmodified";
                        } else {
                            isSuccess = ajaxConvert(s, response);
                            statusText = isSuccess.state;
                            success = isSuccess.data;
                            error = isSuccess.error;
                            isSuccess = !error;
                        }
                    } else {
                        error = statusText;
                        if (status || !statusText) {
                            statusText = "error";
                            if (status < 0) {
                                status = 0;
                            }
                        }
                    }
                    jqXHR.status = status;
                    jqXHR.statusText = (nativeStatusText || statusText) + "";
                    if (isSuccess) {
                        deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
                    } else {
                        deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
                    }
                    jqXHR.statusCode(statusCode);
                    statusCode = undefined;
                    if (fireGlobals) {
                        globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
                    }
                    completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
                    if (fireGlobals) {
                        globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                        if (!(--jQuery.active)) {
                            jQuery.event.trigger("ajaxStop");
                        }
                    }
                }
                return jqXHR;
            },
            getScript: function(url, callback) {
                return jQuery.get(url, undefined, callback, "script");
            },
            getJSON: function(url, data, callback) {
                return jQuery.get(url, data, callback, "json");
            }
        });

        function ajaxHandleResponses(s, jqXHR, responses) {
            var firstDataType, ct, finalDataType, type, contents = s.contents,
                dataTypes = s.dataTypes,
                responseFields = s.responseFields;
            for (type in responseFields) {
                if (type in responses) {
                    jqXHR[responseFields[type]] = responses[type];
                }
            }
            while (dataTypes[0] === "*") {
                dataTypes.shift();
                if (ct === undefined) {
                    ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
                }
            }
            if (ct) {
                for (type in contents) {
                    if (contents[type] && contents[type].test(ct)) {
                        dataTypes.unshift(type);
                        break;
                    }
                }
            }
            if (dataTypes[0] in responses) {
                finalDataType = dataTypes[0];
            } else {
                for (type in responses) {
                    if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                        finalDataType = type;
                        break;
                    }
                    if (!firstDataType) {
                        firstDataType = type;
                    }
                }
                finalDataType = finalDataType || firstDataType;
            }
            if (finalDataType) {
                if (finalDataType !== dataTypes[0]) {
                    dataTypes.unshift(finalDataType);
                }
                return responses[finalDataType];
            }
        }

        function ajaxConvert(s, response) {
            var conv2, current, conv, tmp, converters = {},
                i = 0,
                dataTypes = s.dataTypes.slice(),
                prev = dataTypes[0];
            if (s.dataFilter) {
                response = s.dataFilter(response, s.dataType);
            }
            if (dataTypes[1]) {
                for (conv in s.converters) {
                    converters[conv.toLowerCase()] = s.converters[conv];
                }
            }
            for (;
                (current = dataTypes[++i]);) {
                if (current !== "*") {
                    if (prev !== "*" && prev !== current) {
                        conv = converters[prev + " " + current] || converters["* " + current];
                        if (!conv) {
                            for (conv2 in converters) {
                                tmp = conv2.split(" ");
                                if (tmp[1] === current) {
                                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                    if (conv) {
                                        if (conv === true) {
                                            conv = converters[conv2];
                                        } else if (converters[conv2] !== true) {
                                            current = tmp[0];
                                            dataTypes.splice(i--, 0, current);
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                        if (conv !== true) {
                            if (conv && s["throws"]) {
                                response = conv(response);
                            } else {
                                try {
                                    response = conv(response);
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: conv ? e : "No conversion from " + prev + " to " + current
                                    };
                                }
                            }
                        }
                    }
                    prev = current;
                }
            }
            return {
                state: "success",
                data: response
            };
        }
        jQuery.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(text) {
                    jQuery.globalEval(text);
                    return text;
                }
            }
        });
        jQuery.ajaxPrefilter("script", function(s) {
            if (s.cache === undefined) {
                s.cache = false;
            }
            if (s.crossDomain) {
                s.type = "GET";
                s.global = false;
            }
        });
        jQuery.ajaxTransport("script", function(s) {
            if (s.crossDomain) {
                var script, head = document.head || jQuery("head")[0] || document.documentElement;
                return {
                    send: function(_, callback) {
                        script = document.createElement("script");
                        script.async = true;
                        if (s.scriptCharset) {
                            script.charset = s.scriptCharset;
                        }
                        script.src = s.url;
                        script.onload = script.onreadystatechange = function(_, isAbort) {
                            if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
                                script.onload = script.onreadystatechange = null;
                                if (script.parentNode) {
                                    script.parentNode.removeChild(script);
                                }
                                script = null;
                                if (!isAbort) {
                                    callback(200, "success");
                                }
                            }
                        };
                        head.insertBefore(script, head.firstChild);
                    },
                    abort: function() {
                        if (script) {
                            script.onload(undefined, true);
                        }
                    }
                };
            }
        });
        var oldCallbacks = [],
            rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (ajax_nonce++));
                this[callback] = true;
                return callback;
            }
        });
        jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
            var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
            if (jsonProp || s.dataTypes[0] === "jsonp") {
                callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
                if (jsonProp) {
                    s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
                } else if (s.jsonp !== false) {
                    s.url += (ajax_rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
                }
                s.converters["script json"] = function() {
                    if (!responseContainer) {
                        jQuery.error(callbackName + " was not called");
                    }
                    return responseContainer[0];
                };
                s.dataTypes[0] = "json";
                overwritten = window[callbackName];
                window[callbackName] = function() {
                    responseContainer = arguments;
                };
                jqXHR.always(function() {
                    window[callbackName] = overwritten;
                    if (s[callbackName]) {
                        s.jsonpCallback = originalSettings.jsonpCallback;
                        oldCallbacks.push(callbackName);
                    }
                    if (responseContainer && jQuery.isFunction(overwritten)) {
                        overwritten(responseContainer[0]);
                    }
                    responseContainer = overwritten = undefined;
                });
                return "script";
            }
        });
        var xhrCallbacks, xhrSupported, xhrId = 0,
            xhrOnUnloadAbort = window.ActiveXObject && function() {
                var key;
                for (key in xhrCallbacks) {
                    xhrCallbacks[key](undefined, true);
                }
            };

        function createStandardXHR() {
            try {
                return new window.XMLHttpRequest();
            } catch (e) {}
        }

        function createActiveXHR() {
            try {
                return new window.ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
        jQuery.ajaxSettings.xhr = window.ActiveXObject ? function() {
            return !this.isLocal && createStandardXHR() || createActiveXHR();
        } : createStandardXHR;
        xhrSupported = jQuery.ajaxSettings.xhr();
        jQuery.support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
        xhrSupported = jQuery.support.ajax = !!xhrSupported;
        if (xhrSupported) {
            jQuery.ajaxTransport(function(s) {
                if (!s.crossDomain || jQuery.support.cors) {
                    var callback;
                    return {
                        send: function(headers, complete) {
                            var handle, i, xhr = s.xhr();
                            if (s.username) {
                                xhr.open(s.type, s.url, s.async, s.username, s.password);
                            } else {
                                xhr.open(s.type, s.url, s.async);
                            }
                            if (s.xhrFields) {
                                for (i in s.xhrFields) {
                                    xhr[i] = s.xhrFields[i];
                                }
                            }
                            if (s.mimeType && xhr.overrideMimeType) {
                                xhr.overrideMimeType(s.mimeType);
                            }
                            if (!s.crossDomain && !headers["X-Requested-With"]) {
                                headers["X-Requested-With"] = "XMLHttpRequest";
                            }
                            try {
                                for (i in headers) {
                                    xhr.setRequestHeader(i, headers[i]);
                                }
                            } catch (err) {}
                            xhr.send((s.hasContent && s.data) || null);
                            callback = function(_, isAbort) {
                                var status, responseHeaders, statusText, responses;
                                try {
                                    if (callback && (isAbort || xhr.readyState === 4)) {
                                        callback = undefined;
                                        if (handle) {
                                            xhr.onreadystatechange = jQuery.noop;
                                            if (xhrOnUnloadAbort) {
                                                delete xhrCallbacks[handle];
                                            }
                                        }
                                        if (isAbort) {
                                            if (xhr.readyState !== 4) {
                                                xhr.abort();
                                            }
                                        } else {
                                            responses = {};
                                            status = xhr.status;
                                            responseHeaders = xhr.getAllResponseHeaders();
                                            if (typeof xhr.responseText === "string") {
                                                responses.text = xhr.responseText;
                                            }
                                            try {
                                                statusText = xhr.statusText;
                                            } catch (e) {
                                                statusText = "";
                                            }
                                            if (!status && s.isLocal && !s.crossDomain) {
                                                status = responses.text ? 200 : 404;
                                            } else if (status === 1223) {
                                                status = 204;
                                            }
                                        }
                                    }
                                } catch (firefoxAccessException) {
                                    if (!isAbort) {
                                        complete(-1, firefoxAccessException);
                                    }
                                }
                                if (responses) {
                                    complete(status, statusText, responses, responseHeaders);
                                }
                            };
                            if (!s.async) {
                                callback();
                            } else if (xhr.readyState === 4) {
                                setTimeout(callback);
                            } else {
                                handle = ++xhrId;
                                if (xhrOnUnloadAbort) {
                                    if (!xhrCallbacks) {
                                        xhrCallbacks = {};
                                        jQuery(window).unload(xhrOnUnloadAbort);
                                    }
                                    xhrCallbacks[handle] = callback;
                                }
                                xhr.onreadystatechange = callback;
                            }
                        },
                        abort: function() {
                            if (callback) {
                                callback(undefined, true);
                            }
                        }
                    };
                }
            });
        }
        var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/,
            rfxnum = new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i"),
            rrun = /queueHooks$/,
            animationPrefilters = [defaultPrefilter],
            tweeners = {
                "*": [function(prop, value) {
                    var end, unit, tween = this.createTween(prop, value),
                        parts = rfxnum.exec(value),
                        target = tween.cur(),
                        start = +target || 0,
                        scale = 1,
                        maxIterations = 20;
                    if (parts) {
                        end = +parts[2];
                        unit = parts[3] || (jQuery.cssNumber[prop] ? "" : "px");
                        if (unit !== "px" && start) {
                            start = jQuery.css(tween.elem, prop, true) || end || 1;
                            do {
                                scale = scale || ".5";
                                start = start / scale;
                                jQuery.style(tween.elem, prop, start + unit);
                            } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
                        }
                        tween.unit = unit;
                        tween.start = start;
                        tween.end = parts[1] ? start + (parts[1] + 1) * end : end;
                    }
                    return tween;
                }]
            };

        function createFxNow() {
            setTimeout(function() {
                fxNow = undefined;
            });
            return (fxNow = jQuery.now());
        }

        function createTweens(animation, props) {
            jQuery.each(props, function(prop, value) {
                var collection = (tweeners[prop] || []).concat(tweeners["*"]),
                    index = 0,
                    length = collection.length;
                for (; index < length; index++) {
                    if (collection[index].call(animation, prop, value)) {
                        return;
                    }
                }
            });
        }

        function Animation(elem, properties, options) {
            var result, stopped, index = 0,
                length = animationPrefilters.length,
                deferred = jQuery.Deferred().always(function() {
                    delete tick.elem;
                }),
                tick = function() {
                    if (stopped) {
                        return false;
                    }
                    var currentTime = fxNow || createFxNow(),
                        remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
                        temp = remaining / animation.duration || 0,
                        percent = 1 - temp,
                        index = 0,
                        length = animation.tweens.length;
                    for (; index < length; index++) {
                        animation.tweens[index].run(percent);
                    }
                    deferred.notifyWith(elem, [animation, percent, remaining]);
                    if (percent < 1 && length) {
                        return remaining;
                    } else {
                        deferred.resolveWith(elem, [animation]);
                        return false;
                    }
                },
                animation = deferred.promise({
                    elem: elem,
                    props: jQuery.extend({}, properties),
                    opts: jQuery.extend(true, {
                        specialEasing: {}
                    }, options),
                    originalProperties: properties,
                    originalOptions: options,
                    startTime: fxNow || createFxNow(),
                    duration: options.duration,
                    tweens: [],
                    createTween: function(prop, end) {
                        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                        animation.tweens.push(tween);
                        return tween;
                    },
                    stop: function(gotoEnd) {
                        var index = 0,
                            length = gotoEnd ? animation.tweens.length : 0;
                        if (stopped) {
                            return this;
                        }
                        stopped = true;
                        for (; index < length; index++) {
                            animation.tweens[index].run(1);
                        }
                        if (gotoEnd) {
                            deferred.resolveWith(elem, [animation, gotoEnd]);
                        } else {
                            deferred.rejectWith(elem, [animation, gotoEnd]);
                        }
                        return this;
                    }
                }),
                props = animation.props;
            propFilter(props, animation.opts.specialEasing);
            for (; index < length; index++) {
                result = animationPrefilters[index].call(animation, elem, props, animation.opts);
                if (result) {
                    return result;
                }
            }
            createTweens(animation, props);
            if (jQuery.isFunction(animation.opts.start)) {
                animation.opts.start.call(elem, animation);
            }
            jQuery.fx.timer(jQuery.extend(tick, {
                elem: elem,
                anim: animation,
                queue: animation.opts.queue
            }));
            return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        }

        function propFilter(props, specialEasing) {
            var value, name, index, easing, hooks;
            for (index in props) {
                name = jQuery.camelCase(index);
                easing = specialEasing[name];
                value = props[index];
                if (jQuery.isArray(value)) {
                    easing = value[1];
                    value = props[index] = value[0];
                }
                if (index !== name) {
                    props[name] = value;
                    delete props[index];
                }
                hooks = jQuery.cssHooks[name];
                if (hooks && "expand" in hooks) {
                    value = hooks.expand(value);
                    delete props[name];
                    for (index in value) {
                        if (!(index in props)) {
                            props[index] = value[index];
                            specialEasing[index] = easing;
                        }
                    }
                } else {
                    specialEasing[name] = easing;
                }
            }
        }
        jQuery.Animation = jQuery.extend(Animation, {
            tweener: function(props, callback) {
                if (jQuery.isFunction(props)) {
                    callback = props;
                    props = ["*"];
                } else {
                    props = props.split(" ");
                }
                var prop, index = 0,
                    length = props.length;
                for (; index < length; index++) {
                    prop = props[index];
                    tweeners[prop] = tweeners[prop] || [];
                    tweeners[prop].unshift(callback);
                }
            },
            prefilter: function(callback, prepend) {
                if (prepend) {
                    animationPrefilters.unshift(callback);
                } else {
                    animationPrefilters.push(callback);
                }
            }
        });

        function defaultPrefilter(elem, props, opts) {
            var prop, index, length, value, dataShow, toggle, tween, hooks, oldfire, anim = this,
                style = elem.style,
                orig = {},
                handled = [],
                hidden = elem.nodeType && isHidden(elem);
            if (!opts.queue) {
                hooks = jQuery._queueHooks(elem, "fx");
                if (hooks.unqueued == null) {
                    hooks.unqueued = 0;
                    oldfire = hooks.empty.fire;
                    hooks.empty.fire = function() {
                        if (!hooks.unqueued) {
                            oldfire();
                        }
                    };
                }
                hooks.unqueued++;
                anim.always(function() {
                    anim.always(function() {
                        hooks.unqueued--;
                        if (!jQuery.queue(elem, "fx").length) {
                            hooks.empty.fire();
                        }
                    });
                });
            }
            if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
                opts.overflow = [style.overflow, style.overflowX, style.overflowY];
                if (jQuery.css(elem, "display") === "inline" && jQuery.css(elem, "float") === "none") {
                    if (!jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay(elem.nodeName) === "inline") {
                        style.display = "inline-block";
                    } else {
                        style.zoom = 1;
                    }
                }
            }
            if (opts.overflow) {
                style.overflow = "hidden";
                if (!jQuery.support.shrinkWrapBlocks) {
                    anim.always(function() {
                        style.overflow = opts.overflow[0];
                        style.overflowX = opts.overflow[1];
                        style.overflowY = opts.overflow[2];
                    });
                }
            }
            for (index in props) {
                value = props[index];
                if (rfxtypes.exec(value)) {
                    delete props[index];
                    toggle = toggle || value === "toggle";
                    if (value === (hidden ? "hide" : "show")) {
                        continue;
                    }
                    handled.push(index);
                }
            }
            length = handled.length;
            if (length) {
                dataShow = jQuery._data(elem, "fxshow") || jQuery._data(elem, "fxshow", {});
                if ("hidden" in dataShow) {
                    hidden = dataShow.hidden;
                }
                if (toggle) {
                    dataShow.hidden = !hidden;
                }
                if (hidden) {
                    jQuery(elem).show();
                } else {
                    anim.done(function() {
                        jQuery(elem).hide();
                    });
                }
                anim.done(function() {
                    var prop;
                    jQuery._removeData(elem, "fxshow");
                    for (prop in orig) {
                        jQuery.style(elem, prop, orig[prop]);
                    }
                });
                for (index = 0; index < length; index++) {
                    prop = handled[index];
                    tween = anim.createTween(prop, hidden ? dataShow[prop] : 0);
                    orig[prop] = dataShow[prop] || jQuery.style(elem, prop);
                    if (!(prop in dataShow)) {
                        dataShow[prop] = tween.start;
                        if (hidden) {
                            tween.end = tween.start;
                            tween.start = prop === "width" || prop === "height" ? 1 : 0;
                        }
                    }
                }
            }
        }

        function Tween(elem, options, prop, end, easing) {
            return new Tween.prototype.init(elem, options, prop, end, easing);
        }
        jQuery.Tween = Tween;
        Tween.prototype = {
            constructor: Tween,
            init: function(elem, options, prop, end, easing, unit) {
                this.elem = elem;
                this.prop = prop;
                this.easing = easing || "swing";
                this.options = options;
                this.start = this.now = this.cur();
                this.end = end;
                this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
            },
            cur: function() {
                var hooks = Tween.propHooks[this.prop];
                return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
            },
            run: function(percent) {
                var eased, hooks = Tween.propHooks[this.prop];
                if (this.options.duration) {
                    this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
                } else {
                    this.pos = eased = percent;
                }
                this.now = (this.end - this.start) * eased + this.start;
                if (this.options.step) {
                    this.options.step.call(this.elem, this.now, this);
                }
                if (hooks && hooks.set) {
                    hooks.set(this);
                } else {
                    Tween.propHooks._default.set(this);
                }
                return this;
            }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
            _default: {
                get: function(tween) {
                    var result;
                    if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
                        return tween.elem[tween.prop];
                    }
                    result = jQuery.css(tween.elem, tween.prop, "");
                    return !result || result === "auto" ? 0 : result;
                },
                set: function(tween) {
                    if (jQuery.fx.step[tween.prop]) {
                        jQuery.fx.step[tween.prop](tween);
                    } else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                        jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                    } else {
                        tween.elem[tween.prop] = tween.now;
                    }
                }
            }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
            set: function(tween) {
                if (tween.elem.nodeType && tween.elem.parentNode) {
                    tween.elem[tween.prop] = tween.now;
                }
            }
        };
        jQuery.each(["toggle", "show", "hide"], function(i, name) {
            var cssFn = jQuery.fn[name];
            jQuery.fn[name] = function(speed, easing, callback) {
                return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
            };
        });
        jQuery.fn.extend({
            fadeTo: function(speed, to, easing, callback) {
                return this.filter(isHidden).css("opacity", 0).show().end().animate({
                    opacity: to
                }, speed, easing, callback);
            },
            animate: function(prop, speed, easing, callback) {
                var empty = jQuery.isEmptyObject(prop),
                    optall = jQuery.speed(speed, easing, callback),
                    doAnimation = function() {
                        var anim = Animation(this, jQuery.extend({}, prop), optall);
                        doAnimation.finish = function() {
                            anim.stop(true);
                        };
                        if (empty || jQuery._data(this, "finish")) {
                            anim.stop(true);
                        }
                    };
                doAnimation.finish = doAnimation;
                return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
            },
            stop: function(type, clearQueue, gotoEnd) {
                var stopQueue = function(hooks) {
                    var stop = hooks.stop;
                    delete hooks.stop;
                    stop(gotoEnd);
                };
                if (typeof type !== "string") {
                    gotoEnd = clearQueue;
                    clearQueue = type;
                    type = undefined;
                }
                if (clearQueue && type !== false) {
                    this.queue(type || "fx", []);
                }
                return this.each(function() {
                    var dequeue = true,
                        index = type != null && type + "queueHooks",
                        timers = jQuery.timers,
                        data = jQuery._data(this);
                    if (index) {
                        if (data[index] && data[index].stop) {
                            stopQueue(data[index]);
                        }
                    } else {
                        for (index in data) {
                            if (data[index] && data[index].stop && rrun.test(index)) {
                                stopQueue(data[index]);
                            }
                        }
                    }
                    for (index = timers.length; index--;) {
                        if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                            timers[index].anim.stop(gotoEnd);
                            dequeue = false;
                            timers.splice(index, 1);
                        }
                    }
                    if (dequeue || !gotoEnd) {
                        jQuery.dequeue(this, type);
                    }
                });
            },
            finish: function(type) {
                if (type !== false) {
                    type = type || "fx";
                }
                return this.each(function() {
                    var index, data = jQuery._data(this),
                        queue = data[type + "queue"],
                        hooks = data[type + "queueHooks"],
                        timers = jQuery.timers,
                        length = queue ? queue.length : 0;
                    data.finish = true;
                    jQuery.queue(this, type, []);
                    if (hooks && hooks.cur && hooks.cur.finish) {
                        hooks.cur.finish.call(this);
                    }
                    for (index = timers.length; index--;) {
                        if (timers[index].elem === this && timers[index].queue === type) {
                            timers[index].anim.stop(true);
                            timers.splice(index, 1);
                        }
                    }
                    for (index = 0; index < length; index++) {
                        if (queue[index] && queue[index].finish) {
                            queue[index].finish.call(this);
                        }
                    }
                    delete data.finish;
                });
            }
        });

        function genFx(type, includeWidth) {
            var which, attrs = {
                    height: type
                },
                i = 0;
            includeWidth = includeWidth ? 1 : 0;
            for (; i < 4; i += 2 - includeWidth) {
                which = cssExpand[i];
                attrs["margin" + which] = attrs["padding" + which] = type;
            }
            if (includeWidth) {
                attrs.opacity = attrs.width = type;
            }
            return attrs;
        }
        jQuery.each({
            slideDown: genFx("show"),
            slideUp: genFx("hide"),
            slideToggle: genFx("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(name, props) {
            jQuery.fn[name] = function(speed, easing, callback) {
                return this.animate(props, speed, easing, callback);
            };
        });
        jQuery.speed = function(speed, easing, fn) {
            var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
                complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
                duration: speed,
                easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
            };
            opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
            if (opt.queue == null || opt.queue === true) {
                opt.queue = "fx";
            }
            opt.old = opt.complete;
            opt.complete = function() {
                if (jQuery.isFunction(opt.old)) {
                    opt.old.call(this);
                }
                if (opt.queue) {
                    jQuery.dequeue(this, opt.queue);
                }
            };
            return opt;
        };
        jQuery.easing = {
            linear: function(p) {
                return p;
            },
            swing: function(p) {
                return 0.5 - Math.cos(p * Math.PI) / 2;
            }
        };
        jQuery.timers = [];
        jQuery.fx = Tween.prototype.init;
        jQuery.fx.tick = function() {
            var timer, timers = jQuery.timers,
                i = 0;
            fxNow = jQuery.now();
            for (; i < timers.length; i++) {
                timer = timers[i];
                if (!timer() && timers[i] === timer) {
                    timers.splice(i--, 1);
                }
            }
            if (!timers.length) {
                jQuery.fx.stop();
            }
            fxNow = undefined;
        };
        jQuery.fx.timer = function(timer) {
            if (timer() && jQuery.timers.push(timer)) {
                jQuery.fx.start();
            }
        };
        jQuery.fx.interval = 13;
        jQuery.fx.start = function() {
            if (!timerId) {
                timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
            }
        };
        jQuery.fx.stop = function() {
            clearInterval(timerId);
            timerId = null;
        };
        jQuery.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        jQuery.fx.step = {};
        if (jQuery.expr && jQuery.expr.filters) {
            jQuery.expr.filters.animated = function(elem) {
                return jQuery.grep(jQuery.timers, function(fn) {
                    return elem === fn.elem;
                }).length;
            };
        }
        jQuery.fn.offset = function(options) {
            if (arguments.length) {
                return options === undefined ? this : this.each(function(i) {
                    jQuery.offset.setOffset(this, options, i);
                });
            }
            var docElem, win, box = {
                    top: 0,
                    left: 0
                },
                elem = this[0],
                doc = elem && elem.ownerDocument;
            if (!doc) {
                return;
            }
            docElem = doc.documentElement;
            if (!jQuery.contains(docElem, elem)) {
                return box;
            }
            if (typeof elem.getBoundingClientRect !== core_strundefined) {
                box = elem.getBoundingClientRect();
            }
            win = getWindow(doc);
            return {
                top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
                left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
            };
        };
        jQuery.offset = {
            setOffset: function(elem, options, i) {
                var position = jQuery.css(elem, "position");
                if (position === "static") {
                    elem.style.position = "relative";
                }
                var curElem = jQuery(elem),
                    curOffset = curElem.offset(),
                    curCSSTop = jQuery.css(elem, "top"),
                    curCSSLeft = jQuery.css(elem, "left"),
                    calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
                    props = {},
                    curPosition = {},
                    curTop, curLeft;
                if (calculatePosition) {
                    curPosition = curElem.position();
                    curTop = curPosition.top;
                    curLeft = curPosition.left;
                } else {
                    curTop = parseFloat(curCSSTop) || 0;
                    curLeft = parseFloat(curCSSLeft) || 0;
                }
                if (jQuery.isFunction(options)) {
                    options = options.call(elem, i, curOffset);
                }
                if (options.top != null) {
                    props.top = (options.top - curOffset.top) + curTop;
                }
                if (options.left != null) {
                    props.left = (options.left - curOffset.left) + curLeft;
                }
                if ("using" in options) {
                    options.using.call(elem, props);
                } else {
                    curElem.css(props);
                }
            }
        };
        jQuery.fn.extend({
            position: function() {
                if (!this[0]) {
                    return;
                }
                var offsetParent, offset, parentOffset = {
                        top: 0,
                        left: 0
                    },
                    elem = this[0];
                if (jQuery.css(elem, "position") === "fixed") {
                    offset = elem.getBoundingClientRect();
                } else {
                    offsetParent = this.offsetParent();
                    offset = this.offset();
                    if (!jQuery.nodeName(offsetParent[0], "html")) {
                        parentOffset = offsetParent.offset();
                    }
                    parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
                    parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
                }
                return {
                    top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                    left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
                };
            },
            offsetParent: function() {
                return this.map(function() {
                    var offsetParent = this.offsetParent || document.documentElement;
                    while (offsetParent && (!jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static")) {
                        offsetParent = offsetParent.offsetParent;
                    }
                    return offsetParent || document.documentElement;
                });
            }
        });
        jQuery.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(method, prop) {
            var top = /Y/.test(prop);
            jQuery.fn[method] = function(val) {
                return jQuery.access(this, function(elem, method, val) {
                    var win = getWindow(elem);
                    if (val === undefined) {
                        return win ? (prop in win) ? win[prop] : win.document.documentElement[method] : elem[method];
                    }
                    if (win) {
                        win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
                    } else {
                        elem[method] = val;
                    }
                }, method, val, arguments.length, null);
            };
        });

        function getWindow(elem) {
            return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
        }
        jQuery.each({
            Height: "height",
            Width: "width"
        }, function(name, type) {
            jQuery.each({
                padding: "inner" + name,
                content: type,
                "": "outer" + name
            }, function(defaultExtra, funcName) {
                jQuery.fn[funcName] = function(margin, value) {
                    var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
                        extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                    return jQuery.access(this, function(elem, type, value) {
                        var doc;
                        if (jQuery.isWindow(elem)) {
                            return elem.document.documentElement["client" + name];
                        }
                        if (elem.nodeType === 9) {
                            doc = elem.documentElement;
                            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                        }
                        return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                    }, type, chainable ? margin : undefined, chainable, null);
                };
            });
        });
        window.jQuery = window.$ = jQuery;
        if (typeof define === "function" && define.amd && define.amd.jQuery) {
            define("jquery", [], function() {
                return jQuery;
            });
        }
    })(window);
    (function(window, document, location, setTimeout, decodeURIComponent, encodeURIComponent) {
        var global = this;
        var channelId = Math.floor(Math.random() * 10000);
        var emptyFn = Function.prototype;
        var reURI = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/;
        var reParent = /[\-\w]+\/\.\.\//;
        var reDoubleSlash = /([^:])\/\//g;
        var namespace = "";
        var easyXDM = {};
        var _easyXDM = window.easyXDM;
        var IFRAME_PREFIX = "easyXDM_";
        var HAS_NAME_PROPERTY_BUG;
        var useHash = false;
        var flashVersion;
        var HAS_FLASH_THROTTLED_BUG;

        function isHostMethod(object, property) {
            var t = typeof object[property];
            return t == 'function' || (!!(t == 'object' && object[property])) || t == 'unknown';
        }

        function isHostObject(object, property) {
            return !!(typeof(object[property]) == 'object' && object[property]);
        }

        function isArray(o) {
            return Object.prototype.toString.call(o) === '[object Array]';
        }

        function hasFlash() {
            var name = "Shockwave Flash",
                mimeType = "application/x-shockwave-flash";
            if (!undef(navigator.plugins) && typeof navigator.plugins[name] == "object") {
                var description = navigator.plugins[name].description;
                if (description && !undef(navigator.mimeTypes) && navigator.mimeTypes[mimeType] && navigator.mimeTypes[mimeType].enabledPlugin) {
                    flashVersion = description.match(/\d+/g);
                }
            }
            if (!flashVersion) {
                var flash;
                try {
                    flash = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    flashVersion = Array.prototype.slice.call(flash.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/), 1);
                    flash = null;
                } catch (notSupportedException) {}
            }
            if (!flashVersion) {
                return false;
            }
            var major = parseInt(flashVersion[0], 10),
                minor = parseInt(flashVersion[1], 10);
            HAS_FLASH_THROTTLED_BUG = major > 9 && minor > 0;
            return true;
        }
        var on, un;
        if (isHostMethod(window, "addEventListener")) {
            on = function(target, type, listener) {
                target.addEventListener(type, listener, false);
            };
            un = function(target, type, listener) {
                target.removeEventListener(type, listener, false);
            };
        } else if (isHostMethod(window, "attachEvent")) {
            on = function(object, sEvent, fpNotify) {
                object.attachEvent("on" + sEvent, fpNotify);
            };
            un = function(object, sEvent, fpNotify) {
                object.detachEvent("on" + sEvent, fpNotify);
            };
        } else {
            throw new Error("Browser not supported");
        }
        var domIsReady = false,
            domReadyQueue = [],
            readyState;
        if ("readyState" in document) {
            readyState = document.readyState;
            domIsReady = readyState == "complete" || (~navigator.userAgent.indexOf('AppleWebKit/') && (readyState == "loaded" || readyState == "interactive"));
        } else {
            domIsReady = !!document.body;
        }

        function dom_onReady() {
            if (domIsReady) {
                return;
            }
            domIsReady = true;
            for (var i = 0; i < domReadyQueue.length; i++) {
                domReadyQueue[i]();
            }
            domReadyQueue.length = 0;
        }
        if (!domIsReady) {
            if (isHostMethod(window, "addEventListener")) {
                on(document, "DOMContentLoaded", dom_onReady);
            } else {
                on(document, "readystatechange", function() {
                    if (document.readyState == "complete") {
                        dom_onReady();
                    }
                });
                if (document.documentElement.doScroll && window === top) {
                    var doScrollCheck = function() {
                        if (domIsReady) {
                            return;
                        }
                        try {
                            document.documentElement.doScroll("left");
                        } catch (e) {
                            setTimeout(doScrollCheck, 1);
                            return;
                        }
                        dom_onReady();
                    };
                    doScrollCheck();
                }
            }
            on(window, "load", dom_onReady);
        }

        function whenReady(fn, scope) {
            if (domIsReady) {
                fn.call(scope);
                return;
            }
            domReadyQueue.push(function() {
                fn.call(scope);
            });
        }

        function getParentObject() {
            var obj = parent;
            if (namespace !== "") {
                for (var i = 0, ii = namespace.split("."); i < ii.length; i++) {
                    obj = obj[ii[i]];
                }
            }
            return obj.easyXDM;
        }

        function noConflict(ns) {
            window.easyXDM = _easyXDM;
            namespace = ns;
            if (namespace) {
                IFRAME_PREFIX = "easyXDM_" + namespace.replace(".", "_") + "_";
            }
            return easyXDM;
        }

        function getDomainName(url) {
            return url.match(reURI)[3];
        }

        function getPort(url) {
            return url.match(reURI)[4] || "";
        }

        function getLocation(url) {
            var m = url.toLowerCase().match(reURI);
            var proto = m[2],
                domain = m[3],
                port = m[4] || "";
            if ((proto == "http:" && port == ":80") || (proto == "https:" && port == ":443")) {
                port = "";
            }
            return proto + "//" + domain + port;
        }

        function resolveUrl(url) {
            url = url.replace(reDoubleSlash, "$1/");
            if (!url.match(/^(http||https):\/\//)) {
                var path = (url.substring(0, 1) === "/") ? "" : location.pathname;
                if (path.substring(path.length - 1) !== "/") {
                    path = path.substring(0, path.lastIndexOf("/") + 1);
                }
                url = location.protocol + "//" + location.host + path + url;
            }
            while (reParent.test(url)) {
                url = url.replace(reParent, "");
            }
            return url;
        }

        function appendQueryParameters(url, parameters) {
            var hash = "",
                indexOf = url.indexOf("#");
            if (indexOf !== -1) {
                hash = url.substring(indexOf);
                url = url.substring(0, indexOf);
            }
            var q = [];
            for (var key in parameters) {
                if (parameters.hasOwnProperty(key)) {
                    q.push(key + "=" + encodeURIComponent(parameters[key]));
                }
            }
            return url + (useHash ? "#" : (url.indexOf("?") == -1 ? "?" : "&")) + q.join("&") + hash;
        }
        var query = (function(input) {
            input = input.substring(1).split("&");
            var data = {},
                pair, i = input.length;
            while (i--) {
                pair = input[i].split("=");
                data[pair[0]] = decodeURIComponent(pair[1]);
            }
            return data;
        }(/xdm_e=/.test(location.search) ? location.search : location.hash));

        function undef(v) {
            return typeof v === "undefined";
        }
        var getJSON = function() {
            var cached = {};
            var obj = {
                    a: [1, 2, 3]
                },
                json = "{\"a\":[1,2,3]}";
            if (typeof JSON != "undefined" && typeof JSON.stringify === "function" && JSON.stringify(obj).replace((/\s/g), "") === json) {
                return JSON;
            }
            if (Object.toJSON) {
                if (Object.toJSON(obj).replace((/\s/g), "") === json) {
                    cached.stringify = Object.toJSON;
                }
            }
            if (typeof String.prototype.evalJSON === "function") {
                obj = json.evalJSON();
                if (obj.a && obj.a.length === 3 && obj.a[2] === 3) {
                    cached.parse = function(str) {
                        return str.evalJSON();
                    };
                }
            }
            if (cached.stringify && cached.parse) {
                getJSON = function() {
                    return cached;
                };
                return cached;
            }
            return null;
        };

        function apply(destination, source, noOverwrite) {
            var member;
            for (var prop in source) {
                if (source.hasOwnProperty(prop)) {
                    if (prop in destination) {
                        member = source[prop];
                        if (typeof member === "object") {
                            apply(destination[prop], member, noOverwrite);
                        } else if (!noOverwrite) {
                            destination[prop] = source[prop];
                        }
                    } else {
                        destination[prop] = source[prop];
                    }
                }
            }
            return destination;
        }

        function testForNamePropertyBug() {
            var form = document.body.appendChild(document.createElement("form")),
                input = form.appendChild(document.createElement("input"));
            input.name = IFRAME_PREFIX + "TEST" + channelId;
            HAS_NAME_PROPERTY_BUG = input !== form.elements[input.name];
            document.body.removeChild(form);
        }

        function createFrame(config) {
            if (undef(HAS_NAME_PROPERTY_BUG)) {
                testForNamePropertyBug();
            }
            var frame;
            if (HAS_NAME_PROPERTY_BUG) {
                frame = document.createElement("<iframe name=\"" + config.props.name + "\"/>");
            } else {
                frame = document.createElement("IFRAME");
                frame.name = config.props.name;
            }
            frame.id = frame.name = config.props.name;
            delete config.props.name;
            if (typeof config.container == "string") {
                config.container = document.getElementById(config.container);
            }
            if (!config.container) {
                apply(frame.style, {
                    position: "absolute",
                    top: "-2000px",
                    left: "0px"
                });
                config.container = document.body;
            }
            var src = config.props.src;
            config.props.src = "javascript:false";
            apply(frame, config.props);
            frame.border = frame.frameBorder = 0;
            frame.allowTransparency = true;
            config.container.appendChild(frame);
            if (config.onLoad) {
                on(frame, "load", config.onLoad);
            }
            if (config.usePost) {
                var form = config.container.appendChild(document.createElement('form')),
                    input;
                form.target = frame.name;
                form.action = src;
                form.method = 'POST';
                if (typeof(config.usePost) === 'object') {
                    for (var i in config.usePost) {
                        if (config.usePost.hasOwnProperty(i)) {
                            if (HAS_NAME_PROPERTY_BUG) {
                                input = document.createElement('<input name="' + i + '"/>');
                            } else {
                                input = document.createElement("INPUT");
                                input.name = i;
                            }
                            input.value = config.usePost[i];
                            form.appendChild(input);
                        }
                    }
                }
                form.submit();
                form.parentNode.removeChild(form);
            } else {
                frame.src = src;
            }
            config.props.src = src;
            return frame;
        }

        function checkAcl(acl, domain) {
            if (typeof acl == "string") {
                acl = [acl];
            }
            var re, i = acl.length;
            while (i--) {
                re = acl[i];
                re = new RegExp(re.substr(0, 1) == "^" ? re : ("^" + re.replace(/(\*)/g, ".$1").replace(/\?/g, ".") + "$"));
                if (re.test(domain)) {
                    return true;
                }
            }
            return false;
        }

        function prepareTransportStack(config) {
            var protocol = config.protocol,
                stackEls;
            config.isHost = config.isHost || undef(query.xdm_p);
            useHash = config.hash || false;
            if (!config.props) {
                config.props = {};
            }
            if (!config.isHost) {
                config.channel = query.xdm_c.replace(/["'<>\\]/g, "");
                config.secret = query.xdm_s;
                config.remote = query.xdm_e.replace(/["'<>\\]/g, "");;
                protocol = query.xdm_p;
                if (config.acl && !checkAcl(config.acl, config.remote)) {
                    throw new Error("Access denied for " + config.remote);
                }
            } else {
                config.remote = resolveUrl(config.remote);
                config.channel = config.channel || "default" + channelId++;
                config.secret = Math.random().toString(16).substring(2);
                if (undef(protocol)) {
                    if (getLocation(location.href) == getLocation(config.remote)) {
                        protocol = "4";
                    } else if (isHostMethod(window, "postMessage") || isHostMethod(document, "postMessage")) {
                        protocol = "1";
                    } else if (config.swf && isHostMethod(window, "ActiveXObject") && hasFlash()) {
                        protocol = "6";
                    } else if (navigator.product === "Gecko" && "frameElement" in window && navigator.userAgent.indexOf('WebKit') == -1) {
                        protocol = "5";
                    } else if (config.remoteHelper) {
                        protocol = "2";
                    } else {
                        protocol = "0";
                    }
                }
            }
            config.protocol = protocol;
            switch (protocol) {
                case "0":
                    apply(config, {
                        interval: 100,
                        delay: 2000,
                        useResize: true,
                        useParent: false,
                        usePolling: false
                    }, true);
                    if (config.isHost) {
                        if (!config.local) {
                            var domain = location.protocol + "//" + location.host,
                                images = document.body.getElementsByTagName("img"),
                                image;
                            var i = images.length;
                            while (i--) {
                                image = images[i];
                                if (image.src.substring(0, domain.length) === domain) {
                                    config.local = image.src;
                                    break;
                                }
                            }
                            if (!config.local) {
                                config.local = window;
                            }
                        }
                        var parameters = {
                            xdm_c: config.channel,
                            xdm_p: 0
                        };
                        if (config.local === window) {
                            config.usePolling = true;
                            config.useParent = true;
                            config.local = location.protocol + "//" + location.host + location.pathname + location.search;
                            parameters.xdm_e = config.local;
                            parameters.xdm_pa = 1;
                        } else {
                            parameters.xdm_e = resolveUrl(config.local);
                        }
                        if (config.container) {
                            config.useResize = false;
                            parameters.xdm_po = 1;
                        }
                        config.remote = appendQueryParameters(config.remote, parameters);
                    } else {
                        apply(config, {
                            channel: query.xdm_c,
                            remote: query.xdm_e,
                            useParent: !undef(query.xdm_pa),
                            usePolling: !undef(query.xdm_po),
                            useResize: config.useParent ? false : config.useResize
                        });
                    }
                    stackEls = [new easyXDM.stack.HashTransport(config), new easyXDM.stack.ReliableBehavior({}), new easyXDM.stack.QueueBehavior({
                        encode: true,
                        maxLength: 4000 - config.remote.length
                    }), new easyXDM.stack.VerifyBehavior({
                        initiate: config.isHost
                    })];
                    break;
                case "1":
                    stackEls = [new easyXDM.stack.PostMessageTransport(config)];
                    break;
                case "2":
                    config.remoteHelper = resolveUrl(config.remoteHelper);
                    stackEls = [new easyXDM.stack.NameTransport(config), new easyXDM.stack.QueueBehavior(), new easyXDM.stack.VerifyBehavior({
                        initiate: config.isHost
                    })];
                    break;
                case "3":
                    stackEls = [new easyXDM.stack.NixTransport(config)];
                    break;
                case "4":
                    stackEls = [new easyXDM.stack.SameOriginTransport(config)];
                    break;
                case "5":
                    stackEls = [new easyXDM.stack.FrameElementTransport(config)];
                    break;
                case "6":
                    if (!flashVersion) {
                        hasFlash();
                    }
                    stackEls = [new easyXDM.stack.FlashTransport(config)];
                    break;
            }
            stackEls.push(new easyXDM.stack.QueueBehavior({
                lazy: config.lazy,
                remove: true
            }));
            return stackEls;
        }

        function chainStack(stackElements) {
            var stackEl, defaults = {
                incoming: function(message, origin) {
                    this.up.incoming(message, origin);
                },
                outgoing: function(message, recipient) {
                    this.down.outgoing(message, recipient);
                },
                callback: function(success) {
                    this.up.callback(success);
                },
                init: function() {
                    this.down.init();
                },
                destroy: function() {
                    this.down.destroy();
                }
            };
            for (var i = 0, len = stackElements.length; i < len; i++) {
                stackEl = stackElements[i];
                apply(stackEl, defaults, true);
                if (i !== 0) {
                    stackEl.down = stackElements[i - 1];
                }
                if (i !== len - 1) {
                    stackEl.up = stackElements[i + 1];
                }
            }
            return stackEl;
        }

        function removeFromStack(element) {
            element.up.down = element.down;
            element.down.up = element.up;
            element.up = element.down = null;
        }
        apply(easyXDM, {
            version: "2.4.17.1",
            query: query,
            stack: {},
            apply: apply,
            getJSONObject: getJSON,
            whenReady: whenReady,
            noConflict: noConflict
        });
        easyXDM.DomHelper = {
            on: on,
            un: un,
            requiresJSON: function(path) {
                if (!isHostObject(window, "JSON")) {
                    document.write('<' + 'script type="text/javascript" src="' + path + '"><' + '/script>');
                }
            }
        };
        (function() {
            var _map = {};
            easyXDM.Fn = {
                set: function(name, fn) {
                    _map[name] = fn;
                },
                get: function(name, del) {
                    var fn = _map[name];
                    if (del) {
                        delete _map[name];
                    }
                    return fn;
                }
            };
        }());
        easyXDM.Socket = function(config) {
            var stack = chainStack(prepareTransportStack(config).concat([{
                    incoming: function(message, origin) {
                        config.onMessage(message, origin);
                    },
                    callback: function(success) {
                        if (config.onReady) {
                            config.onReady(success);
                        }
                    }
                }])),
                recipient = getLocation(config.remote);
            this.origin = getLocation(config.remote);
            this.destroy = function() {
                stack.destroy();
            };
            this.postMessage = function(message) {
                stack.outgoing(message, recipient);
            };
            stack.init();
        };
        easyXDM.Rpc = function(config, jsonRpcConfig) {
            if (jsonRpcConfig.local) {
                for (var method in jsonRpcConfig.local) {
                    if (jsonRpcConfig.local.hasOwnProperty(method)) {
                        var member = jsonRpcConfig.local[method];
                        if (typeof member === "function") {
                            jsonRpcConfig.local[method] = {
                                method: member
                            };
                        }
                    }
                }
            }
            var stack = chainStack(prepareTransportStack(config).concat([new easyXDM.stack.RpcBehavior(this, jsonRpcConfig), {
                callback: function(success) {
                    if (config.onReady) {
                        config.onReady(success);
                    }
                }
            }]));
            this.origin = getLocation(config.remote);
            this.destroy = function() {
                stack.destroy();
            };
            stack.init();
        };
        easyXDM.stack.SameOriginTransport = function(config) {
            var pub, frame, send, targetOrigin;
            return (pub = {
                outgoing: function(message, domain, fn) {
                    send(message);
                    if (fn) {
                        fn();
                    }
                },
                destroy: function() {
                    if (frame) {
                        frame.parentNode.removeChild(frame);
                        frame = null;
                    }
                },
                onDOMReady: function() {
                    targetOrigin = getLocation(config.remote);
                    if (config.isHost) {
                        apply(config.props, {
                            src: appendQueryParameters(config.remote, {
                                xdm_e: location.protocol + "//" + location.host + location.pathname,
                                xdm_c: config.channel,
                                xdm_p: 4
                            }),
                            name: IFRAME_PREFIX + config.channel + "_provider"
                        });
                        frame = createFrame(config);
                        easyXDM.Fn.set(config.channel, function(sendFn) {
                            send = sendFn;
                            setTimeout(function() {
                                pub.up.callback(true);
                            }, 0);
                            return function(msg) {
                                pub.up.incoming(msg, targetOrigin);
                            };
                        });
                    } else {
                        send = getParentObject().Fn.get(config.channel, true)(function(msg) {
                            pub.up.incoming(msg, targetOrigin);
                        });
                        setTimeout(function() {
                            pub.up.callback(true);
                        }, 0);
                    }
                },
                init: function() {
                    whenReady(pub.onDOMReady, pub);
                }
            });
        };
        easyXDM.stack.FlashTransport = function(config) {
            var pub, frame, send, targetOrigin, swf, swfContainer;

            function onMessage(message, origin) {
                setTimeout(function() {
                    pub.up.incoming(message, targetOrigin);
                }, 0);
            }

            function addSwf(domain) {
                var url = config.swf + "?host=" + config.isHost;
                var id = "easyXDM_swf_" + Math.floor(Math.random() * 10000);
                easyXDM.Fn.set("flash_loaded" + domain.replace(/[\-.]/g, "_"), function() {
                    easyXDM.stack.FlashTransport[domain].swf = swf = swfContainer.firstChild;
                    var queue = easyXDM.stack.FlashTransport[domain].queue;
                    for (var i = 0; i < queue.length; i++) {
                        queue[i]();
                    }
                    queue.length = 0;
                });
                if (config.swfContainer) {
                    swfContainer = (typeof config.swfContainer == "string") ? document.getElementById(config.swfContainer) : config.swfContainer;
                } else {
                    swfContainer = document.createElement('div');
                    apply(swfContainer.style, HAS_FLASH_THROTTLED_BUG && config.swfNoThrottle ? {
                        height: "20px",
                        width: "20px",
                        position: "fixed",
                        right: 0,
                        top: 0
                    } : {
                        height: "1px",
                        width: "1px",
                        position: "absolute",
                        overflow: "hidden",
                        right: 0,
                        top: 0
                    });
                    document.body.appendChild(swfContainer);
                }
                var flashVars = "callback=flash_loaded" + domain.replace(/[\-.]/g, "_") + "&proto=" + global.location.protocol + "&domain=" + getDomainName(global.location.href) + "&port=" + getPort(global.location.href) + "&ns=" + namespace;
                swfContainer.innerHTML = "<object height='20' width='20' type='application/x-shockwave-flash' id='" + id + "' data='" + url + "'>" + "<param name='allowScriptAccess' value='always'></param>" + "<param name='wmode' value='transparent'>" + "<param name='movie' value='" +
                    url + "'></param>" + "<param name='flashvars' value='" +
                    flashVars + "'></param>" + "<embed type='application/x-shockwave-flash' FlashVars='" +
                    flashVars + "' allowScriptAccess='always' wmode='transparent' src='" +
                    url + "' height='1' width='1'></embed>" + "</object>";
            }
            return (pub = {
                outgoing: function(message, domain, fn) {
                    swf.postMessage(config.channel, message.toString());
                    if (fn) {
                        fn();
                    }
                },
                destroy: function() {
                    try {
                        swf.destroyChannel(config.channel);
                    } catch (e) {}
                    swf = null;
                    if (frame) {
                        frame.parentNode.removeChild(frame);
                        frame = null;
                    }
                },
                onDOMReady: function() {
                    targetOrigin = config.remote;
                    easyXDM.Fn.set("flash_" + config.channel + "_init", function() {
                        setTimeout(function() {
                            pub.up.callback(true);
                        });
                    });
                    easyXDM.Fn.set("flash_" + config.channel + "_onMessage", onMessage);
                    config.swf = resolveUrl(config.swf);
                    var swfdomain = getDomainName(config.swf);
                    var fn = function() {
                        easyXDM.stack.FlashTransport[swfdomain].init = true;
                        swf = easyXDM.stack.FlashTransport[swfdomain].swf;
                        swf.createChannel(config.channel, config.secret, getLocation(config.remote), config.isHost);
                        if (config.isHost) {
                            if (HAS_FLASH_THROTTLED_BUG && config.swfNoThrottle) {
                                apply(config.props, {
                                    position: "fixed",
                                    right: 0,
                                    top: 0,
                                    height: "20px",
                                    width: "20px"
                                });
                            }
                            apply(config.props, {
                                src: appendQueryParameters(config.remote, {
                                    xdm_e: getLocation(location.href),
                                    xdm_c: config.channel,
                                    xdm_p: 6,
                                    xdm_s: config.secret
                                }),
                                name: IFRAME_PREFIX + config.channel + "_provider"
                            });
                            frame = createFrame(config);
                        }
                    };
                    if (easyXDM.stack.FlashTransport[swfdomain] && easyXDM.stack.FlashTransport[swfdomain].init) {
                        fn();
                    } else {
                        if (!easyXDM.stack.FlashTransport[swfdomain]) {
                            easyXDM.stack.FlashTransport[swfdomain] = {
                                queue: [fn]
                            };
                            addSwf(swfdomain);
                        } else {
                            easyXDM.stack.FlashTransport[swfdomain].queue.push(fn);
                        }
                    }
                },
                init: function() {
                    whenReady(pub.onDOMReady, pub);
                }
            });
        };
        easyXDM.stack.PostMessageTransport = function(config) {
            var pub, frame, callerWindow, targetOrigin;

            function _getOrigin(event) {
                if (event.origin) {
                    return getLocation(event.origin);
                }
                if (event.uri) {
                    return getLocation(event.uri);
                }
                if (event.domain) {
                    return location.protocol + "//" + event.domain;
                }
                throw "Unable to retrieve the origin of the event";
            }

            function _window_onMessage(event) {
                var origin = _getOrigin(event);
                if (origin == targetOrigin && event.data.substring(0, config.channel.length + 1) == config.channel + " ") {
                    pub.up.incoming(event.data.substring(config.channel.length + 1), origin);
                }
            }
            return (pub = {
                outgoing: function(message, domain, fn) {
                    callerWindow.postMessage(config.channel + " " + message, domain || targetOrigin);
                    if (fn) {
                        fn();
                    }
                },
                destroy: function() {
                    un(window, "message", _window_onMessage);
                    if (frame) {
                        callerWindow = null;
                        frame.parentNode.removeChild(frame);
                        frame = null;
                    }
                },
                onDOMReady: function() {
                    targetOrigin = getLocation(config.remote);
                    if (config.isHost) {
                        var waitForReady = function(event) {
                            if (event.data == config.channel + "-ready") {
                                callerWindow = ("postMessage" in frame.contentWindow) ? frame.contentWindow : frame.contentWindow.document;
                                un(window, "message", waitForReady);
                                on(window, "message", _window_onMessage);
                                setTimeout(function() {
                                    pub.up.callback(true);
                                }, 0);
                            }
                        };
                        on(window, "message", waitForReady);
                        apply(config.props, {
                            src: appendQueryParameters(config.remote, {
                                xdm_e: getLocation(location.href),
                                xdm_c: config.channel,
                                xdm_p: 1
                            }),
                            name: IFRAME_PREFIX + config.channel + "_provider"
                        });
                        frame = createFrame(config);
                    } else {
                        on(window, "message", _window_onMessage);
                        callerWindow = ("postMessage" in window.parent) ? window.parent : window.parent.document;
                        callerWindow.postMessage(config.channel + "-ready", targetOrigin);
                        setTimeout(function() {
                            pub.up.callback(true);
                        }, 0);
                    }
                },
                init: function() {
                    whenReady(pub.onDOMReady, pub);
                }
            });
        };
        easyXDM.stack.FrameElementTransport = function(config) {
            var pub, frame, send, targetOrigin;
            return (pub = {
                outgoing: function(message, domain, fn) {
                    send.call(this, message);
                    if (fn) {
                        fn();
                    }
                },
                destroy: function() {
                    if (frame) {
                        frame.parentNode.removeChild(frame);
                        frame = null;
                    }
                },
                onDOMReady: function() {
                    targetOrigin = getLocation(config.remote);
                    if (config.isHost) {
                        apply(config.props, {
                            src: appendQueryParameters(config.remote, {
                                xdm_e: getLocation(location.href),
                                xdm_c: config.channel,
                                xdm_p: 5
                            }),
                            name: IFRAME_PREFIX + config.channel + "_provider"
                        });
                        frame = createFrame(config);
                        frame.fn = function(sendFn) {
                            delete frame.fn;
                            send = sendFn;
                            setTimeout(function() {
                                pub.up.callback(true);
                            }, 0);
                            return function(msg) {
                                pub.up.incoming(msg, targetOrigin);
                            };
                        };
                    } else {
                        if (document.referrer && getLocation(document.referrer) != query.xdm_e) {
                            window.top.location = query.xdm_e;
                        }
                        send = window.frameElement.fn(function(msg) {
                            pub.up.incoming(msg, targetOrigin);
                        });
                        pub.up.callback(true);
                    }
                },
                init: function() {
                    whenReady(pub.onDOMReady, pub);
                }
            });
        };
        easyXDM.stack.NameTransport = function(config) {
            var pub;
            var isHost, callerWindow, remoteWindow, readyCount, callback, remoteOrigin, remoteUrl;

            function _sendMessage(message) {
                var url = config.remoteHelper + (isHost ? "#_3" : "#_2") + config.channel;
                callerWindow.contentWindow.sendMessage(message, url);
            }

            function _onReady() {
                if (isHost) {
                    if (++readyCount === 2 || !isHost) {
                        pub.up.callback(true);
                    }
                } else {
                    _sendMessage("ready");
                    pub.up.callback(true);
                }
            }

            function _onMessage(message) {
                pub.up.incoming(message, remoteOrigin);
            }

            function _onLoad() {
                if (callback) {
                    setTimeout(function() {
                        callback(true);
                    }, 0);
                }
            }
            return (pub = {
                outgoing: function(message, domain, fn) {
                    callback = fn;
                    _sendMessage(message);
                },
                destroy: function() {
                    callerWindow.parentNode.removeChild(callerWindow);
                    callerWindow = null;
                    if (isHost) {
                        remoteWindow.parentNode.removeChild(remoteWindow);
                        remoteWindow = null;
                    }
                },
                onDOMReady: function() {
                    isHost = config.isHost;
                    readyCount = 0;
                    remoteOrigin = getLocation(config.remote);
                    config.local = resolveUrl(config.local);
                    if (isHost) {
                        easyXDM.Fn.set(config.channel, function(message) {
                            if (isHost && message === "ready") {
                                easyXDM.Fn.set(config.channel, _onMessage);
                                _onReady();
                            }
                        });
                        remoteUrl = appendQueryParameters(config.remote, {
                            xdm_e: config.local,
                            xdm_c: config.channel,
                            xdm_p: 2
                        });
                        apply(config.props, {
                            src: remoteUrl + '#' + config.channel,
                            name: IFRAME_PREFIX + config.channel + "_provider"
                        });
                        remoteWindow = createFrame(config);
                    } else {
                        config.remoteHelper = config.remote;
                        easyXDM.Fn.set(config.channel, _onMessage);
                    }
                    var onLoad = function() {
                        var w = callerWindow || this;
                        un(w, "load", onLoad);
                        easyXDM.Fn.set(config.channel + "_load", _onLoad);
                        (function test() {
                            if (typeof w.contentWindow.sendMessage == "function") {
                                _onReady();
                            } else {
                                setTimeout(test, 50);
                            }
                        }());
                    };
                    callerWindow = createFrame({
                        props: {
                            src: config.local + "#_4" + config.channel
                        },
                        onLoad: onLoad
                    });
                },
                init: function() {
                    whenReady(pub.onDOMReady, pub);
                }
            });
        };
        easyXDM.stack.HashTransport = function(config) {
            var pub;
            var me = this,
                isHost, _timer, pollInterval, _lastMsg, _msgNr, _listenerWindow, _callerWindow;
            var useParent, _remoteOrigin;

            function _sendMessage(message) {
                if (!_callerWindow) {
                    return;
                }
                var url = config.remote + "#" + (_msgNr++) + "_" + message;
                ((isHost || !useParent) ? _callerWindow.contentWindow : _callerWindow).location = url;
            }

            function _handleHash(hash) {
                _lastMsg = hash;
                pub.up.incoming(_lastMsg.substring(_lastMsg.indexOf("_") + 1), _remoteOrigin);
            }

            function _pollHash() {
                if (!_listenerWindow) {
                    return;
                }
                var href = _listenerWindow.location.href,
                    hash = "",
                    indexOf = href.indexOf("#");
                if (indexOf != -1) {
                    hash = href.substring(indexOf);
                }
                if (hash && hash != _lastMsg) {
                    _handleHash(hash);
                }
            }

            function _attachListeners() {
                _timer = setInterval(_pollHash, pollInterval);
            }
            return (pub = {
                outgoing: function(message, domain) {
                    _sendMessage(message);
                },
                destroy: function() {
                    window.clearInterval(_timer);
                    if (isHost || !useParent) {
                        _callerWindow.parentNode.removeChild(_callerWindow);
                    }
                    _callerWindow = null;
                },
                onDOMReady: function() {
                    isHost = config.isHost;
                    pollInterval = config.interval;
                    _lastMsg = "#" + config.channel;
                    _msgNr = 0;
                    useParent = config.useParent;
                    _remoteOrigin = getLocation(config.remote);
                    if (isHost) {
                        apply(config.props, {
                            src: config.remote,
                            name: IFRAME_PREFIX + config.channel + "_provider"
                        });
                        if (useParent) {
                            config.onLoad = function() {
                                _listenerWindow = window;
                                _attachListeners();
                                pub.up.callback(true);
                            };
                        } else {
                            var tries = 0,
                                max = config.delay / 50;
                            (function getRef() {
                                if (++tries > max) {
                                    throw new Error("Unable to reference listenerwindow");
                                }
                                try {
                                    _listenerWindow = _callerWindow.contentWindow.frames[IFRAME_PREFIX + config.channel + "_consumer"];
                                } catch (ex) {}
                                if (_listenerWindow) {
                                    _attachListeners();
                                    pub.up.callback(true);
                                } else {
                                    setTimeout(getRef, 50);
                                }
                            }());
                        }
                        _callerWindow = createFrame(config);
                    } else {
                        _listenerWindow = window;
                        _attachListeners();
                        if (useParent) {
                            _callerWindow = parent;
                            pub.up.callback(true);
                        } else {
                            apply(config, {
                                props: {
                                    src: config.remote + "#" + config.channel + new Date(),
                                    name: IFRAME_PREFIX + config.channel + "_consumer"
                                },
                                onLoad: function() {
                                    pub.up.callback(true);
                                }
                            });
                            _callerWindow = createFrame(config);
                        }
                    }
                },
                init: function() {
                    whenReady(pub.onDOMReady, pub);
                }
            });
        };
        easyXDM.stack.ReliableBehavior = function(config) {
            var pub, callback;
            var idOut = 0,
                idIn = 0,
                currentMessage = "";
            return (pub = {
                incoming: function(message, origin) {
                    var indexOf = message.indexOf("_"),
                        ack = message.substring(0, indexOf).split(",");
                    message = message.substring(indexOf + 1);
                    if (ack[0] == idOut) {
                        currentMessage = "";
                        if (callback) {
                            callback(true);
                            callback = null;
                        }
                    }
                    if (message.length > 0) {
                        pub.down.outgoing(ack[1] + "," + idOut + "_" + currentMessage, origin);
                        if (idIn != ack[1]) {
                            idIn = ack[1];
                            pub.up.incoming(message, origin);
                        }
                    }
                },
                outgoing: function(message, origin, fn) {
                    currentMessage = message;
                    callback = fn;
                    pub.down.outgoing(idIn + "," + (++idOut) + "_" + message, origin);
                }
            });
        };
        easyXDM.stack.QueueBehavior = function(config) {
            var pub, queue = [],
                waiting = true,
                incoming = "",
                destroying, maxLength = 0,
                lazy = false,
                doFragment = false;

            function dispatch() {
                if (config.remove && queue.length === 0) {
                    removeFromStack(pub);
                    return;
                }
                if (waiting || queue.length === 0 || destroying) {
                    return;
                }
                waiting = true;
                var message = queue.shift();
                pub.down.outgoing(message.data, message.origin, function(success) {
                    waiting = false;
                    if (message.callback) {
                        setTimeout(function() {
                            message.callback(success);
                        }, 0);
                    }
                    dispatch();
                });
            }
            return (pub = {
                init: function() {
                    if (undef(config)) {
                        config = {};
                    }
                    if (config.maxLength) {
                        maxLength = config.maxLength;
                        doFragment = true;
                    }
                    if (config.lazy) {
                        lazy = true;
                    } else {
                        pub.down.init();
                    }
                },
                callback: function(success) {
                    waiting = false;
                    var up = pub.up;
                    dispatch();
                    up.callback(success);
                },
                incoming: function(message, origin) {
                    if (doFragment) {
                        var indexOf = message.indexOf("_"),
                            seq = parseInt(message.substring(0, indexOf), 10);
                        incoming += message.substring(indexOf + 1);
                        if (seq === 0) {
                            if (config.encode) {
                                incoming = decodeURIComponent(incoming);
                            }
                            pub.up.incoming(incoming, origin);
                            incoming = "";
                        }
                    } else {
                        pub.up.incoming(message, origin);
                    }
                },
                outgoing: function(message, origin, fn) {
                    if (config.encode) {
                        message = encodeURIComponent(message);
                    }
                    var fragments = [],
                        fragment;
                    if (doFragment) {
                        while (message.length !== 0) {
                            fragment = message.substring(0, maxLength);
                            message = message.substring(fragment.length);
                            fragments.push(fragment);
                        }
                        while ((fragment = fragments.shift())) {
                            queue.push({
                                data: fragments.length + "_" + fragment,
                                origin: origin,
                                callback: fragments.length === 0 ? fn : null
                            });
                        }
                    } else {
                        queue.push({
                            data: message,
                            origin: origin,
                            callback: fn
                        });
                    }
                    if (lazy) {
                        pub.down.init();
                    } else {
                        dispatch();
                    }
                },
                destroy: function() {
                    destroying = true;
                    pub.down.destroy();
                }
            });
        };
        easyXDM.stack.VerifyBehavior = function(config) {
            var pub, mySecret, theirSecret, verified = false;

            function startVerification() {
                mySecret = Math.random().toString(16).substring(2);
                pub.down.outgoing(mySecret);
            }
            return (pub = {
                incoming: function(message, origin) {
                    var indexOf = message.indexOf("_");
                    if (indexOf === -1) {
                        if (message === mySecret) {
                            pub.up.callback(true);
                        } else if (!theirSecret) {
                            theirSecret = message;
                            if (!config.initiate) {
                                startVerification();
                            }
                            pub.down.outgoing(message);
                        }
                    } else {
                        if (message.substring(0, indexOf) === theirSecret) {
                            pub.up.incoming(message.substring(indexOf + 1), origin);
                        }
                    }
                },
                outgoing: function(message, origin, fn) {
                    pub.down.outgoing(mySecret + "_" + message, origin, fn);
                },
                callback: function(success) {
                    if (config.initiate) {
                        startVerification();
                    }
                }
            });
        };
        easyXDM.stack.RpcBehavior = function(proxy, config) {
            var pub, serializer = config.serializer || getJSON();
            var _callbackCounter = 0,
                _callbacks = {};

            function _send(data) {
                data.jsonrpc = "2.0";
                pub.down.outgoing(serializer.stringify(data));
            }

            function _createMethod(definition, method) {
                var slice = Array.prototype.slice;
                return function() {
                    var l = arguments.length,
                        callback, message = {
                            method: method
                        };
                    if (l > 0 && typeof arguments[l - 1] === "function") {
                        if (l > 1 && typeof arguments[l - 2] === "function") {
                            callback = {
                                success: arguments[l - 2],
                                error: arguments[l - 1]
                            };
                            message.params = slice.call(arguments, 0, l - 2);
                        } else {
                            callback = {
                                success: arguments[l - 1]
                            };
                            message.params = slice.call(arguments, 0, l - 1);
                        }
                        _callbacks["" + (++_callbackCounter)] = callback;
                        message.id = _callbackCounter;
                    } else {
                        message.params = slice.call(arguments, 0);
                    }
                    if (definition.namedParams && message.params.length === 1) {
                        message.params = message.params[0];
                    }
                    _send(message);
                };
            }

            function _executeMethod(method, id, fn, params) {
                if (!fn) {
                    if (id) {
                        _send({
                            id: id,
                            error: {
                                code: -32601,
                                message: "Procedure not found."
                            }
                        });
                    }
                    return;
                }
                var success, error;
                if (id) {
                    success = function(result) {
                        success = emptyFn;
                        _send({
                            id: id,
                            result: result
                        });
                    };
                    error = function(message, data) {
                        error = emptyFn;
                        var msg = {
                            id: id,
                            error: {
                                code: -32099,
                                message: message
                            }
                        };
                        if (data) {
                            msg.error.data = data;
                        }
                        _send(msg);
                    };
                } else {
                    success = error = emptyFn;
                }
                if (!isArray(params)) {
                    params = [params];
                }
                try {
                    var result = fn.method.apply(fn.scope, params.concat([success, error]));
                    if (!undef(result)) {
                        success(result);
                    }
                } catch (ex1) {
                    error(ex1.message);
                }
            }
            return (pub = {
                incoming: function(message, origin) {
                    var data = serializer.parse(message);
                    if (data.method) {
                        if (config.handle) {
                            config.handle(data, _send);
                        } else {
                            _executeMethod(data.method, data.id, config.local[data.method], data.params);
                        }
                    } else {
                        var callback = _callbacks[data.id];
                        if (data.error) {
                            if (callback.error) {
                                callback.error(data.error);
                            }
                        } else if (callback.success) {
                            callback.success(data.result);
                        }
                        delete _callbacks[data.id];
                    }
                },
                init: function() {
                    if (config.remote) {
                        for (var method in config.remote) {
                            if (config.remote.hasOwnProperty(method)) {
                                proxy[method] = _createMethod(config.remote[method], method);
                            }
                        }
                    }
                    pub.down.init();
                },
                destroy: function() {
                    for (var method in config.remote) {
                        if (config.remote.hasOwnProperty(method) && proxy.hasOwnProperty(method)) {
                            delete proxy[method];
                        }
                    }
                    pub.down.destroy();
                }
            });
        };
        global.easyXDM = easyXDM;
    })(window, document, location, window.setTimeout, decodeURIComponent, encodeURIComponent);
    var SURFXDM = function(options) {
        var that = this;
        var EVENT_CHANNELS = ['GENERIC', 'READY', 'CONFIGURE', 'CLASSIC', 'DIALOG', 'API_REQUEST', 'API_RESPONSE', 'API_ERROR', 'PUBLIC_EVENT', 'GIGYA_REQUEST', 'GIGYA_RESPONSE'];
        var EventChannel = function EventChannel(type) {
            var $events = $({});
            type = (type === undefined) ? EVENT_CHANNELS[0] : type;
            this.pub = function(name, data, target) {
                if (name === '__global__') {
                    return this;
                }
                target = (target === undefined && target !== 'remote' && target !== 'local') ? 'all' : target;
                if (target === 'all') {
                    var debug_message = {
                        'type': type,
                        'name': name
                    };
                    if (data !== undefined) {
                        debug_message.data = data;
                    }
                    that.debug(debug_message);
                }
                if (target === 'all' || target === 'local') {
                    $events.one(name, function(event) {
                        var data = Array.prototype.slice.call(arguments, 1);
                        $events.trigger('__global__', [event.type, data, event]);
                    });
                    $events.trigger(name, data);
                }
                if (target === 'all' || target === 'remote') {
                    new EventMessage(name, type, data).send();
                }
                return this;
            };
            this.sub = function(name, callback) {
                if (name === '*') return this.sub_all(callback);
                $events.on(name, function() {
                    var event_data = Array.prototype.slice.call(arguments);
                    var e = event_data[0];
                    event_data = event_data.slice(1);
                    callback.apply(that, event_data);
                });
                return this;
            };
            this.sub_once = function(name, callback) {
                $events.one(name, function() {
                    var event_data = Array.prototype.slice.call(arguments);
                    var e = event_data[0];
                    event_data = event_data.slice(1);
                    callback.apply(that, event_data);
                });
                return this;
            };
            this.sub_all = function(callback) {
                $events.on('__global__', function(global_event, event_type, event_params, event_object) {
                    callback.apply(that, [event_type, event_params, event_object]);
                });
                return this;
            };
            this.forget = function(name) {
                $events.off(name);
                return this;
            };
        };
        var EventMessage = function EventMessage(name, type, data) {
            this._name = name;
            this._type = type;
            this._data = data;
            this.name = function name(value) {
                if (value === undefined) {
                    return this._name;
                }
                this._name = value;
                return this._name;
            };
            this.type = function type(value) {
                if (value === undefined) {
                    return this._type;
                }
                this._type = value;
                return this._type;
            };
            this.data = function data(value) {
                if (value === undefined) {
                    return this._data;
                }
                this._data = value;
                return this._data;
            };
            this.send = function send() {
                that.socket.postMessage(JSON.stringify({
                    name: this._name,
                    type: this._type,
                    data: this._data
                }));
            };
            this.fromObject = function fromObject(obj) {
                this.name(obj.name);
                this.type(obj.type);
                this.data(obj.data);
                return this;
            };
            this.fromJSON = function fromJSON(json) {
                return this.fromObject(JSON.parse(json));
            };
        };
        this.events = (function() {
            events = {};
            for (var type in EVENT_CHANNELS) {
                events[EVENT_CHANNELS[type]] = new EventChannel(EVENT_CHANNELS[type]);
            }
            return events;
        })();
        this.globals = {
            'set': function(name, value) {
                if (name === 'set') {
                    return;
                }
                that.events.CONFIGURE.pub(name, value);
            }
        };
        this.getDialogTemplate = function(template_name, alt) {
            if (typeof alt === 'undefined') {
                return this.globals.DIALOG[template_name];
            } else {
                return this.globals.DIALOG[template_name][alt];
            }
        };
        this.isNotSet = function(val) {
            return ((typeof val === 'undefined') || (val === null)) ? true : false;
        };
        this.isSet = function(val) {
            return (this.isNotSet(val)) ? false : true;
        };
        this.isEmpty = function(val, orZero) {
            orZero = (typeof orZero !== 'boolean') ? false : orZero;
            if (this.isNotSet(val) || val === '' || (orZero && (val === parseInt(0)))) {
                return true;
            }
            return false;
        };
        this.events.CONFIGURE.sub_all(function(prop, value) {
            if (prop === 'set') return;
            if (value.length === 0) {
                delete that.globals[prop];
            } else if (value.length > 1) {
                that.globals[prop] = value;
            } else {
                that.globals[prop] = value[0];
            }
        });
        this.events.GENERIC.sub('tell_me_your_secrets', function() {
            var length = 0;
            for (var prop in core.globals) {
                length++;
            }
            console.log('Telling you my ' + length + ' secrets');
            console.log(core.globals);
        });
        this.socket = new easyXDM.Socket({
            local: (options.local !== undefined) ? options.local : undefined,
            swf: (options.remote !== undefined) ? options.remote : undefined,
            container: (options.container !== undefined) ? options.container : undefined,
            remote: (options.remote !== undefined) ? options.remote : undefined,
            onReady: function() {
                var opts = (options.options !== undefined) ? options.options : {};
                for (var prop in opts) {
                    that.globals.set(prop, options.options[prop]);
                }
                if (typeof SURF === 'object') {
                    SURF.socketReady = true;
                }
                that.events.READY.pub(null, null, 'remote');
            },
            onMessage: function(data, origin) {
                var rm = new EventMessage().fromJSON(data);
                if (rm.type() === 'READY') {
                    if (typeof options.onReady === "function") {
                        options.onReady.apply(that, arguments);
                    }
                } else if (rm.type() in that.events) {
                    that.events[rm.type()].pub(rm.name(), rm.data(), 'local');
                } else {
                    that.events.GENERIC.pub(rm.name(), rm.data(), 'local');
                }
            }
        });
        this.parse_surf_response = function parse_surf_response(response) {
            var event_data = {};
            if (typeof response !== 'object' || !('status' in response) && (!('user' in response) || !('surf' in response))) {
                event_data = response;
            } else {
                if ('user' in response && typeof response.user === 'object') {
                    for (var user_prop in response.user) {
                        event_data[user_prop] = response.user[user_prop];
                    }
                }
                if ('surf' in response && typeof response.surf === 'object') {
                    for (var surf_prop in response.surf) {
                        event_data[surf_prop] = response.surf[surf_prop];
                    }
                }
            }
            return event_data;
        };
        this.sessions_enabled = function sessions_enabled() {
            return ('session_management' in core.globals && 'enabled' in core.globals.session_management && core.globals.session_management.enabled === true);
        };
        this.session_active = function session_active() {
            return (this.sessions_enabled && 'session' in core.globals && 'session_token' in core.globals.session);
        };
        this.all_channels_forget = function unset_all_events(type) {
            for (var event_type in this.events) this.events[event_type].forget(type);
        };
        this.api_request = function api_request(method, args, success, error) {
            this.events.API_REQUEST.pub(method, args);
            var timestamp = '.' + new Date().getTime().toString();
            if (typeof success === "function") {
                this.events.API_RESPONSE.sub_once(method + timestamp, success);
            }
            if (typeof error === "function") {
                this.events.API_ERROR.sub_once(method + timestamp, error);
            }
            this.events.API_RESPONSE.sub_once(method + timestamp, function() {
                that.events.API_ERROR.forget(timestamp);
            });
            this.events.API_ERROR.sub_once(method + timestamp, function() {
                that.events.API_RESPONSE.forget(timestamp);
            });
        };
        this.gigya_request = function gigya_request(method, args, response) {
            this.events.GIGYA_REQUEST.pub(method, args);
            var timestamp = '.' + new Date().getTime().toString();
            if (typeof response === "function") {
                this.events.GIGYA_RESPONSE.sub_once(method + timestamp, response);
            }
        };
        this.debug = function debug(msg, level, force) {
            force = (force !== undefined) ? force : false;
            if (force === false && (that.globals.debug === undefined || that.globals.debug === false)) {
                return;
            }
            if ('console' in window) {
                relation = window === window.parent ? 'site' : 'dispatcher';
                level = (typeof level == 'undefined') ? 'log' : level;
                if (typeof msg === "object") {
                    window.console[level](msg);
                } else {
                    window.console[level](relation + ': ' + msg);
                }
            }
        };
    };
    var jQuery = window.jQuery.noConflict(true);
    var $ = jQuery;
    var pageViewport;
    var $containerElement;
    var SURFHost;
    if ($('script[src$="surf.js.php?dev"]').length) {
        SURFHost = $('script[src$="surf.js.php?dev"]').attr('src').match(/(^https?\:\/\/.*?)\//)[1].toString();
    } else {
        SURFHost = $('script[src$="surf.js.php"]').attr('src').match(/(^https?\:\/\/.*?)\//)[1].toString();
    }
    var core = null;
    var pageHasGigya = false;
    var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer, Inc\./.test(navigator.vendor);
    var screenWidthConstraint = 768;
    var deferred = [];

    function isSurfHttps() {
        return (SURFHost.match(/^https/) !== null);
    }

    function isHttps() {
        return (getProtocol().match(/^https/) !== null);
    }

    function getProtocol() {
        if (typeof window.location.protocol !== "undefined") {
            return window.location.protocol;
        }
        if (typeof document.location.protocol !== "undefined") {
            return document.location.protocol;
        }
        return window.location.href.match(/(^[^\/]*)/)[0];
    }

    function setCookie(name, value, expiration, domain) {
        var expires = "";
        var site = "";
        var secure = "";
        if (expiration) {
            var expires_date = new Date(expiration * 1000);
            expires = "; expires=" + expires_date.toGMTString();
        }
        if (domain) {
            site = ";domain=" + domain;
        }
        if (isHttps()) {
            secure = "; secure";
        }
        document.cookie = name + "=" + value + expires + "; path=/" + site + secure;
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    }

    function eraseCookie(name) {
        return setCookie(name, "", -1);
    }

    function center_dialog() {
        if (((document.width !== undefined) && (window.innerWidth !== undefined)) && (document.width / window.innerWidth < 0.9)) {
            $containerElement.css({
                'position': 'absolute'
            });
            return;
        }
        var dialogWidth = $containerElement.width();
        var dialogHeight = $containerElement.height();
        var dialogTop = (dialogHeight < $(window).height()) ? ($(window).height() / 2) - (dialogHeight / 2) : 50;
        var dialogLeft = ($(window).width() / 2) - (dialogWidth / 2);
        var dialog_too_big = (dialogHeight > $(window).height()) ? true : false;
        $containerElement.css({
            'top': dialogTop + 'px',
            'left': dialogLeft + 'px',
            'position': (dialog_too_big) ? 'absolute' : 'fixed',
            'padding-bottom': (dialog_too_big) ? '50px' : null
        });
    }

    function defer_method(func, args) {
        deferred.push({
            method: func,
            arguments: args
        });
    }

    function check_for_missing_fields(response) {
        var missing_fields = [];

        function getIDXUserProp(_prop) {
            var prop = _prop.replace(/\[(.*?)\]/, '.$1');
            var parts = prop.split('.');
            var ref = response.user;
            for (var i = 0; i < parts.length; i++) {
                if (parts[i] in ref) {
                    ref = ref[parts[i]];
                } else {
                    return null;
                }
            }
            return ref;
        }
        for (var field in core.globals.user_fields) {
            var field_object = core.globals.user_fields[field];
            if (('required' in field_object) && (field_object.required === true)) {
                if (field === 'password' || field === 'current_password') {
                    continue;
                }
                var field_idx_value = getIDXUserProp(field_object.idx_property);
                if (field_idx_value === null || field_idx_value === "") {
                    missing_fields.push(field);
                }
            }
        }
        if (missing_fields.length > 0) {
            var f = {};
            for (var i in missing_fields) {
                var missing_field = missing_fields[i];
                f[missing_field] = core.globals.user_fields[missing_field];
            }
            SURF.event.trigger(SURF.events.MISSING_FIELDS, [f]);
            if (('prompt_for_missing_fields' in core.globals) && (core.globals.prompt_for_missing_fields !== false)) {
                var load_dialog = false;
                if (core.globals.prompt_for_missing_fields === true) {
                    load_dialog = true;
                } else if (typeof core.globals.prompt_for_missing_fields === "number") {
                    if (getCookie('_surf_missing_fields')) {
                        if (parseInt(getCookie('_surf_missing_fields')) < core.globals.prompt_for_missing_fields) {
                            load_dialog = true;
                            setCookie('_surf_missing_fields', (parseInt(getCookie('_surf_missing_fields')) + 1));
                        } else {
                            load_dialog = false;
                        }
                    } else {
                        load_dialog = true;
                        setCookie('_surf_missing_fields', 1);
                    }
                }
                if (load_dialog === true) {
                    core.events.DIALOG.pub('open', {
                        'template': 'missing_fields',
                        'args': {
                            'uid': response.user._id,
                            'signature': response.surf._auth_signature
                        }
                    });
                }
            }
        } else {
            SURF.event.trigger(SURF.events.NO_MISSING_FIELDS);
        }
    }
    return {
        configKey: null,
        isReady: false,
        jQuery: jQuery,
        globals: {},
        events: {
            DIALOG: {
                OPEN: 'open',
                LOADED: 'loaded',
                VISIBLE: 'visible',
                RESIZE: 'resize',
                CLOSE: 'close'
            },
            READY: 'onReady',
            SIGNIN: 'onSignin',
            SIGNIN_ERROR: 'onSigninError',
            SIGNOUT: 'onSignout',
            SIGNOUT_ERROR: 'onSignoutError',
            SIGNIN_WITH_SOCIAL_PROVIDER: 'onSignInWithSocialProvider',
            SIGNIN_WITH_SOCIAL_PROVIDER_ERROR: 'onSignInWithSocialProviderError',
            CREATE_ACCOUNT: 'onCreateAccount',
            CREATE_ACCOUNT_ERROR: 'onCreateAccountError',
            EDIT_ACCOUNT: 'onEditAccount',
            EDIT_ACCOUNT_ERROR: 'onEditAccountError',
            LINK_ACCOUNT: 'onLinkAccount',
            LINK_ACCOUNT_ERROR: 'onLinkAccountError',
            UNLINK_ACCOUNT: 'onUnlinkAccount',
            UNLINK_ACCOUNT_ERROR: 'onUnlinkAccountError',
            UI: 'onUI',
            ACCOUNT_UPDATED: 'onAccountUpdate',
            MISSING_FIELDS: 'missing_fields',
            NO_MISSING_FIELDS: 'no_missing_fields',
            PASSWORD_RESET_REQUEST_SENT: 'onPasswordResetRequestSent',
            PASSWORD_RESET_REQUEST_ERROR: 'onPasswordResetRequestError'
        },
        event: $({}),
        init: function(_params) {
            var that = this;
            var params = (_params !== undefined) ? _params : {};
            if (that.isReady === true) {
                if ('warn' in console) {
                    console.warn('SURF.init() called more than once!');
                }
                return;
            }
            $(document).ready(function() {
                var options = {
                    'config': encodeURIComponent($('script[data-config-key]').attr('data-config-key')),
                    'currentPage': window.location.protocol + "//" + window.location.hostname + window.location.pathname + window.location.search,
                    'responsive': ('responsive' in params && params.responsive.constructor === Boolean) ? params.responsive : false,
                    'debug': ('debug' in params && params.debug.constructor === Boolean) ? params.debug : false,
                    'mobile': false,
                    'surfjs_version': 'v2.1.1'
                };
                if ('mobile' in params) {
                    if ('innerWidth' in window && window.innerWidth <= params.mobile) {
                        options.responsive = true;
                        options.mobile = true;
                    }
                }
                if ('lang' in params) {
                    options.lang = params.lang;
                    options.init_lang = params.lang;
                }
                $containerElement = $('<div id="surf-xdm"/>').css({
                    'display': 'none',
                    'visibility': 'hidden'
                });
                if ('element' in params) {
                    if ($('#' + params.element).length < 1) {
                        throw "No element with id " + params.element;
                    }
                    $('#' + params.element).append($containerElement);
                    options.bound_element = params.element;
                } else {
                    $('body').append($containerElement);
                    options.bound_element = 'body';
                }
                $('script[src]').each(function(i, e) {
                    if (e.src !== undefined && e.src.search(/^https?:\/\/cdns?\.gigya\.com\/JS\/socialize\.js\?apikey\=.*$/) != -1) {
                        pageHasGigya = true;
                    }
                });
                $(document).on('click', '.surf-signin-dialog', function() {
                    that.signinDialog();
                });
                $(document).on('click', '.surf-signout', function() {
                    that.signout();
                });
                $(document).on('click', '.surf-edit-dialog', function() {
                    that.editAccountDialog();
                });
                $('head').append($('<link>').attr({
                    rel: "stylesheet",
                    type: "text/css",
                    href: SURFHost + "/_css/surf.css"
                }));
                core = new SURFXDM({
                    local: 'easyXDM/name.html',
                    swf: 'easyXDM/easyxdm.swf',
                    container: $containerElement.get(0),
                    remote: SURFHost + '/rdk/dispatcher.php?c=' + options.config,
                    options: options,
                    onReady: function() {
                        if (core.globals.gigya_api_key !== undefined && pageHasGigya === false) {
                            $('head').append($('<script>').attr({
                                type: 'text/javascript',
                                src: 'https://cdns.gigya.com/JS/socialize.js?apikey=' + core.globals.gigya_api_key
                            }));
                        }
                        var iframe = $containerElement.find('iframe');
                        iframe.attr('scrolling', 'no');
                        iframe.attr('scroll', 'no');
                        iframe.attr('frameborder', '0');
                        iframe.attr('marginwidth', '0');
                        iframe.attr('marginheight', '0');
                        iframe.attr("allowtransparency", "true");
                        iframe.css({
                            'background-color': 'transparent',
                            'overflow': 'hidden',
                            'width': '100%',
                            'height': '100%'
                        });
                        var readyCount = 0;
                        var readyListener = setInterval(function() {
                            if (readyCount < 1200) {
                                if (that.socketReady) {
                                    that.isReady = true;
                                    that.event.trigger(that.events.READY, [('session' in SURF.globals) ? SURF.globals.session : null]);
                                    clearInterval(readyListener);
                                }
                                readyCount++;
                            } else {
                                clearInterval(readyListener);
                            }
                        }, 50);
                        window.setTimeout(function() {
                            var hashKeyElements = window.location.toString().match('#sh=(.*)');
                            if (hashKeyElements === null || hashKeyElements[1] === undefined) {
                                return;
                            }
                            var hashKey = hashKeyElements[1];
                            if ((hashKey !== null) && (typeof hashKey === 'string') && (hashKey.length > 0)) {
                                window.location.hash = '';
                                core.api_request('checkHash', [hashKey], function(response) {
                                    if ((typeof response === 'object') && ('hash_action' in response.surf) && (response.surf.hash_action === 'reset_password')) {
                                        core.events.DIALOG.pub('open', {
                                            'template': core.getDialogTemplate('RESET_PASSWORD'),
                                            'args': {
                                                'hash': hashKey
                                            }
                                        });
                                    }
                                });
                            }
                        }, 500);
                        if (deferred.length > 0) {
                            for (var dm in deferred) {
                                deferred[dm].method.apply(that, deferred[dm].arguments);
                            }
                        }
                    }
                });
                core.events.CONFIGURE.sub_all(function(prop, value) {
                    if (value.length === 0) {
                        delete that.globals[prop];
                    } else if (value.length > 1) {
                        that.globals[prop] = value;
                    } else {
                        that.globals[prop] = value[0];
                    }
                });
                core.events.GIGYA_REQUEST.sub_all(function(method, params) {
                    if (!('gigya' in window) || !('gigya_api_key' in core.globals)) {
                        return false;
                    }
                    var gigya_params = (typeof params[0] != "object") ? {} : params[0];
                    gigya_params.callback = function(response) {
                        core.events.GIGYA_RESPONSE.pub(method, response);
                    };
                    gigya.socialize[method](gigya_params);
                });
                core.events.GENERIC.sub('set-cookie', function(c) {
                    eraseCookie(c.name);
                    setCookie(c.name, encodeURIComponent(c.value), ('expiration' in c) ? c.expiration : null);
                });
                core.events.API_RESPONSE.sub('savePerson', function(response) {
                    that.event.trigger(that.events.CREATE_ACCOUNT, [core.parse_surf_response(response)]);
                    if ('sendConfirmationEmail' in core.globals && core.globals.sendConfirmationEmail === true) {
                        core.events.DIALOG.pub('open', {
                            'template': core.getDialogTemplate('CREATE_EMAIL_CONFIRM'),
                            'args': {}
                        });
                        return;
                    }
                });
                core.events.API_RESPONSE.sub('savePerson checkHash', function(response, request_arguments) {
                    if ('registration_confirmation_dialog' in core.globals && core.globals.registration_confirmation_dialog === true) {
                        if ('hash_action' in response.surf && response.surf.hash_action !== 'verify_email') {
                            return;
                        }
                        if ('_logged_in' in response.user && response.user._logged_in === true) {
                            if ((('allow_avatars' in core.globals) && (core.globals.allow_avatars === true)) || (($.isArray(core.globals.social_providers)) && (core.globals.social_providers.length > 0))) {
                                var dialog_args = {};
                                if (!core.sessions_enabled()) {
                                    dialog_args.uid = response.user._id;
                                    dialog_args.signature = response.surf._auth_signature;
                                }
                                core.events.DIALOG.pub('open', {
                                    'template': core.getDialogTemplate('CREATE_CONFIRM'),
                                    'args': dialog_args
                                });
                                return;
                            }
                        }
                    }
                });
                core.events.API_RESPONSE.sub('login savePerson resetPasswordConfirmation checkHash userExists', function(response, request_arguments) {
                    if (core.isSet(response.user) && core.isSet(response.user._logged_in) && (response.user._logged_in === true)) {
                        if ((core.isSet(response.surf)) && ('_auth_signature' in response.surf)) {
                            setCookie('_surf_auth_signature', response.surf._auth_signature);
                        }
                        that.event.trigger(that.events.SIGNIN, [core.parse_surf_response(response)]);
                        check_for_missing_fields(response);
                    }
                });
                core.events.API_RESPONSE.sub_all(function(eventType, data) {
                    var response = data[0];
                    if (core.isSet(response.user) && core.isSet(response.user._logged_in) && core.isSet(response.surf) && core.isSet(response.surf._auth_signature) && core.isSet(response.surf._gigya_signature) && core.isSet(response.surf._gigya_timestamp)) {
                        core.gigya_request('notifyLogin', {
                            siteUID: response.user._id,
                            UIDSig: response.surf._gigya_signature,
                            UIDTimestamp: response.surf._gigya_timestamp
                        });
                    }
                });
                core.events.API_RESPONSE.sub('login', function(response, request_arguments) {
                    if ('UIDSignature' in request_arguments[1] && 'signatureTimestamp' in request_arguments[1]) {
                        that.event.trigger(that.events.SIGNIN_WITH_SOCIAL_PROVIDER, [core.parse_surf_response(response)]);
                    }
                });
                core.events.API_RESPONSE.sub('savePerson', function(response, request_arguments) {
                    if (('gigya_user' in request_arguments[0]) && (response.user._logged_in !== undefined) && (response.user._logged_in === true)) {
                        that.event.trigger(that.events.SIGNIN_WITH_SOCIAL_PROVIDER, [core.parse_surf_response(response)]);
                    }
                });
                core.events.API_RESPONSE.sub('addProvider', function(response, request_arguments) {
                    if (request_arguments[1] === 'password') {
                        if ('_auth_signature' in response.surf) {
                            setCookie('_surf_auth_signature', response.surf._auth_signature);
                        }
                        that.event.trigger(that.events.SIGNIN, [core.parse_surf_response(response)]);
                        check_for_missing_fields(response);
                        that.event.trigger(that.events.SIGNIN_WITH_SOCIAL_PROVIDER, [core.parse_surf_response(response)]);
                    }
                });
                core.events.API_RESPONSE.sub('logout', function(response) {
                    that.event.trigger(that.events.SIGNOUT, [core.parse_surf_response(response)]);
                });
                core.events.API_RESPONSE.sub('updatePerson uploadAvatar saveAvatar removeAvatar', function(response) {
                    that.event.trigger(that.events.EDIT_ACCOUNT, [core.parse_surf_response(response)]);
                });
                core.events.API_RESPONSE.sub('login logout updatePerson resetPasswordConfirmation uploadAvatar saveAvatar removeAvatar savePerson addProvider removeProvider', function(response) {
                    that.event.trigger(that.events.ACCOUNT_UPDATED, [core.parse_surf_response(response)]);
                });
                core.events.API_RESPONSE.sub('checkHash', function(response) {
                    if ('hash_action' in response.surf && response.surf.hash_action === 'verify_email') {
                        that.event.trigger(that.events.ACCOUNT_UPDATED, [core.parse_surf_response(response)]);
                    }
                });
                core.events.API_RESPONSE.sub('userExists', function(response) {
                    if (response.user !== undefined) {
                        that.event.trigger(that.events.SIGNIN_WITH_SOCIAL_PROVIDER, [core.parse_surf_response(response)]);
                        that.event.trigger(that.events.ACCOUNT_UPDATED, [core.parse_surf_response(response)]);
                    }
                });
                core.events.API_RESPONSE.sub('deleteAccount', function(response) {
                    that.event.trigger(that.events.SIGNOUT, [null]);
                });
                core.events.API_RESPONSE.sub('addProvider', function(response) {
                    that.event.trigger(that.events.LINK_ACCOUNT, [core.parse_surf_response(response)]);
                });
                core.events.API_RESPONSE.sub('removeProvider', function(response) {
                    that.event.trigger(that.events.UNLINK_ACCOUNT, [core.parse_surf_response(response)]);
                });
                core.events.API_RESPONSE.sub('resetPassword', function(response, request_arguments) {
                    var event_params = core.parse_surf_response(response);
                    if (request_arguments.length > 0) {
                        event_params = {
                            success: true,
                            id: request_arguments[0]
                        };
                    }
                    that.event.trigger(that.events.PASSWORD_RESET_REQUEST_SENT, [event_params]);
                });
                core.events.API_ERROR.sub('login', function(error, request_arguments) {
                    if ('UIDSignature' in request_arguments[1] && 'signatureTimestamp' in request_arguments[1]) {
                        core.gigya_request('getUserInfo', {}, function(gigya_response) {
                            if (('errorCode' in gigya_response) && (gigya_response.errorCode === 0) && ('user' in gigya_response) && ('isSiteUID' in gigya_response.user && gigya_response.user.isSiteUID === false) || ('isTempUser' in gigya_response.user && gigya_response.user.isTempUser === true)) {
                                core.gigya_request('logout');
                            }
                        });
                        that.event.trigger(that.events.SIGNIN_WITH_SOCIAL_PROVIDER_ERROR, [error]);
                    }
                    that.event.trigger(that.events.SIGNIN_ERROR, [error]);
                });
                core.events.API_ERROR.sub('logout', function(error) {
                    that.event.trigger(that.events.SIGNOUT_ERROR, [error]);
                    that.event.trigger(that.events.SIGNOUT, [error]);
                });
                core.events.API_ERROR.sub('savePerson', function(error) {
                    that.event.trigger(that.events.CREATE_ACCOUNT_ERROR, [error]);
                });
                core.events.API_ERROR.sub('updatePerson', function(error) {
                    that.event.trigger(that.events.EDIT_ACCOUNT_ERROR, [error]);
                });
                core.events.API_ERROR.sub('addProvider', function(error) {
                    that.event.trigger(that.events.LINK_ACCOUNT_ERROR, [error]);
                });
                core.events.API_ERROR.sub('removeProvider', function(error) {
                    that.event.trigger(that.events.UNLINK_ACCOUNT_ERROR, [error]);
                });
                core.events.API_ERROR.sub('resetPassword', function(error, request_arguments) {
                    error.id = request_arguments[0];
                    that.event.trigger(that.events.PASSWORD_RESET_REQUEST_ERROR, [error]);
                });
                core.events.GENERIC.sub('scroll', function(params) {
                    if (params === undefined) {
                        $containerElement.get(0).scrollIntoView();
                        $containerElement.find('iframe').get(0).scrollIntoView();
                    } else if (params.y !== undefined) {
                        window.scrollBy(0, params.y);
                    }
                });
                core.events.DIALOG.sub('open', function(params) {
                    if (core.globals.responsive === false && core.globals.bound_element === 'body') {
                        $containerElement.css({
                            'position': 'fixed'
                        });
                        if ($('.raas-page-cover').length === 0) {
                            $('<div class="raas-page-cover"/>').appendTo('body');
                        }
                    }
                });
                core.events.DIALOG.sub('loaded', function(params) {
                    $containerElement.css({
                        'display': 'block',
                        'visibility': 'visible'
                    });
                    core.events.DIALOG.pub('visible');
                });
                core.events.DIALOG.sub('visible', function(params) {
                    if (core.globals.mobile === true) {
                        $containerElement.css({
                            'position': 'fixed',
                            'z-index': '9999',
                            'top': '0px',
                            'left': '0px',
                            'width': '100%',
                            'height': '100%',
                            'overflow': 'auto',
                            '-webkit-overflow-scrolling': 'touch'
                        });
                    }
                    if (core.globals.responsive === false) {
                        $containerElement.css({
                            'opacity': '0'
                        });
                    }
                    that.event.trigger(that.events.UI, ['open']);
                    if (!$containerElement.find('iframe').data('focused') || document.activeElement.tagName !== 'IFRAME') {
                        $containerElement.find('iframe').data('focused', true).get(0).contentWindow.focus();
                        core.events.GENERIC.pub('focus');
                    }
                });
                core.events.DIALOG.sub('resize', function(params) {
                    params = (params !== undefined) ? params : {};
                    var css = {};
                    if (params.width !== undefined && core.globals.responsive !== true) {
                        css.width = params.width;
                    }
                    if (params.height !== undefined) {
                        css.height = params.height;
                    }
                    if (core.globals.mobile === false) {
                        $containerElement.css(css);
                    }
                    if (core.globals.responsive === false) {
                        $containerElement.css({
                            'opacity': '1'
                        });
                    }
                    if (core.globals.responsive === false && core.globals.bound_element === 'body') {
                        center_dialog();
                    }
                });
                core.events.DIALOG.sub('close', function(params) {
                    params = (params !== undefined) ? params : {};
                    params.keepShadow = (params.keepShadow !== undefined) ? params.keepShadow : false;
                    params.context = (params.context !== undefined) ? params.context : 'close';
                    $containerElement.find('iframe').removeData('focused').get(0).blur();
                    $('body').get(0).focus();
                    var css = {};
                    if (core.globals.responsive === false) {
                        $.extend(css, {
                            "width": '',
                            "height": '',
                            "padding-bottom": ''
                        });
                    }
                    css.display = 'none';
                    css.visibility = 'hidden';
                    $containerElement.css(css);
                    if (core.globals.responsive === false && core.globals.element === false) {
                        $containerElement.css({
                            'position': 'fixed'
                        });
                    }
                    if (params.keepShadow !== true) {
                        $('.raas-page-cover').remove();
                    }
                    if (params.context === 'close') {
                        that.event.trigger(that.events.UI, ['close']);
                    } else if (params.context === 'cancel') {
                        that.event.trigger(that.events.UI, ['cancel']);
                    }
                });
                if (core.globals.responsive === false && core.globals.bound_element === 'body') {
                    $(window).on('resize', center_dialog);
                }
                core.events.DIALOG.sub_all(function(event_type, event_params, event_object) {
                    that.event.trigger(event_object, event_params);
                });
            });
        },
        debug: function(enable) {
            if (this.isReady === false) {
                defer_method(this.debug, arguments);
                return;
            }
            core.events.CONFIGURE.pub('set', ['debug', enable]);
        },
        responsive: function(enable) {
            if (this.isReady === false) {
                defer_method(this.responsive, arguments);
                return;
            }
            core.events.CONFIGURE.pub('set', ['responsive', enable]);
        },
        signinDialog: function(config) {
            if (this.isReady === false) {
                defer_method(this.signinDialog, arguments);
                return;
            }
            var dialog_config = {
                'template': core.getDialogTemplate('SIGNIN')
            };
            if (typeof config != 'undefined') {
                $.extend(dialog_config, {
                    'args': {
                        'config': config
                    }
                });
            }
            core.events.DIALOG.pub('open', dialog_config);
        },
        forgotPasswordDialog: function(email, config) {
            if (this.isReady === false) {
                defer_method(this.forgotPasswordDialog, arguments);
                return;
            }
            var dialog_config = {
                'template': core.getDialogTemplate('FORGOT_PASSWORD')
            };
            if (typeof email != 'undefined') {
                $.extend(dialog_config, {
                    'args': $.extend({}, dialog_config.args)
                });
                $.extend(dialog_config.args, {
                    'email': email
                });
            }
            if (typeof config != 'undefined') {
                $.extend(dialog_config, {
                    'args': $.extend({}, dialog_config.args)
                });
                $.extend(dialog_config.args, {
                    'config': config
                });
            }
            core.events.DIALOG.pub('open', dialog_config);
        },
        createAccountDialog: function(config) {
            if (this.isReady === false) {
                defer_method(this.createAccountDialog, arguments);
                return;
            }
            var dialog_config = {
                'template': core.getDialogTemplate('CREATE_ACCOUNT')
            };
            if (typeof config != 'undefined') {
                $.extend(dialog_config, {
                    'args': {
                        'config': config
                    }
                });
            }
            core.events.DIALOG.pub('open', dialog_config);
        },
        editAccountDialog: function(options, config) {
            if (this.isReady === false) {
                defer_method(this.editAccountDialog, arguments);
                return;
            }
            var that = this;
            options = options || {};
            var template = (function() {
                if ('section' in options && options.section.toUpperCase() in core.getDialogTemplate('EDIT')) {
                    return core.getDialogTemplate('EDIT')[options.section.toUpperCase()];
                } else if ('show_profile_overview' in core.globals && core.globals.show_profile_overview === true) {
                    return core.getDialogTemplate('EDIT', 'OVERVIEW');
                } else {
                    return core.getDialogTemplate('EDIT', 'DETAILS');
                }
            })();
            var dialog_config = {
                'template': template,
                'args': {
                    'close': options.close || false
                }
            };
            if (core.sessions_enabled()) {
                if (!core.session_active()) {
                    core.debug('No active session', 'warn', true);
                    return;
                }
            } else {
                options.signature = options.signature || getCookie('_surf_auth_signature');
                if (!('uid' in options)) {
                    core.debug('options.uid not defined', 'warn', true);
                    return;
                } else {
                    $.extend(dialog_config.args, {
                        'uid': options.uid
                    });
                }
                if (!('signature' in options) || options.signature === null) {
                    core.debug('options.signature not defined', 'warn', true);
                    return;
                } else {
                    $.extend(dialog_config.args, {
                        'signature': options.signature
                    });
                }
            }
            if (typeof config != 'undefined') {
                $.extend(dialog_config.args, {
                    'config': config
                });
            }
            core.events.DIALOG.pub('open', dialog_config);
        },
        linkAccountDialog: function(email, config) {
            if (this.isReady === false) {
                defer_method(this.linkAccountDialog, arguments);
                return;
            }
            var dialog_config = {
                'template': core.getDialogTemplate('WELCOME_BACK')
            };
            if (typeof email != 'undefined') {
                $.extend(dialog_config, {
                    'args': $.extend({}, dialog_config.args)
                });
                $.extend(dialog_config.args, {
                    'email': email
                });
            }
            if (typeof config != 'undefined') {
                $.extend(dialog_config, {
                    'args': $.extend({}, dialog_config.args)
                });
                $.extend(dialog_config.args, {
                    'config': config
                });
            }
            core.events.DIALOG.pub('open', dialog_config);
        },
        register: function(options) {
            if (this.isReady === false) {
                defer_method(this.register, arguments);
                return;
            }
            options = (options !== undefined) ? options : {};
            var that = this;
            if (core.sessions_enabled() && core.session_active()) {
                core.debug('Session already active', 'warn', true);
                return;
            }
            var method_arguments = {
                'dialog': 'create_account',
                'current_page': core.globals.currentPage
            };
            if (!('user_data' in options)) {
                core.debug('options.user_data not defined', 'warn', true);
                return;
            } else {
                method_arguments.user_data = JSON.stringify(options.user_data);
            }
            if ('provider' in options) {
                method_arguments.provider = {
                    'provider': options.provider.provider,
                    'provider_id': options.provider.provider_id
                };
                if (('provider_signature' in options.provider) && ('provider_timestamp' in options.provider)) {
                    method_arguments.provider.provider_params = {
                        'signature': options.provider.provider_signature,
                        'timestamp': options.provider.provider_timestamp
                    };
                    core.api_request('savePerson', [method_arguments], options.success, options.error);
                } else {
                    core.gigya_request('getUserInfo', {}, function(response) {
                        method_arguments.provider.provider_params = {
                            'gigya_uid': response.UID
                        };
                        core.api_request('savePerson', [method_arguments], options.success, options.error);
                    });
                }
            } else {
                core.api_request('savePerson', [method_arguments], options.success, options.error);
            }
        },
        update: function(options) {
            if (this.isReady === false) {
                defer_method(this.update, arguments);
                return;
            }
            options = (options !== undefined) ? options : {};
            var that = this;
            var method_arguments = [];
            if (core.sessions_enabled()) {
                if (!core.session_active()) {
                    core.debug('No active session', 'warn', true);
                    return;
                } else {
                    method_arguments.push(null);
                    method_arguments.push(null);
                }
            } else {
                options.signature = ('signature' in options) ? options.signature : getCookie('_surf_auth_signature');
                if (!('uid' in options)) {
                    core.debug('options.uid not defined', 'warn', true);
                    return;
                } else {
                    method_arguments.push(options.uid);
                }
                if (!('signature' in options) || options.signature === null) {
                    core.debug('options.signature not defined', 'warn', true);
                    return;
                } else {
                    method_arguments.push(options.signature);
                }
            }
            if (!('user_data' in options)) {
                core.debug('options.user_data not defined', 'warn', true);
                return;
            } else {
                method_arguments.push({
                    'user_data': JSON.stringify(options.user_data)
                });
            }
            core.api_request('updatePerson', method_arguments, options.success, options.error);
        },
        link: function(options) {
            if (this.isReady === false) {
                defer_method(this.link, arguments);
                return;
            }
            options = (options !== undefined) ? options : {};
            var that = this;
            var method_arguments = [];
            if (core.sessions_enabled()) {
                if (!core.session_active()) {
                    core.debug('No active session', 'warn', true);
                    return;
                }
                method_arguments.push(null);
                method_arguments.push(null);
                method_arguments.push(null);
            } else {
                options.signature = ('signature' in options) ? options.signature : getCookie('_surf_auth_signature');
                if (!('uid' in options)) {
                    core.debug('options.uid not defined', 'warn', true);
                    return;
                } else {
                    method_arguments.push(options.uid);
                }
                method_arguments.push('signature');
                if (!('signature' in options) || options.signature === null) {
                    core.debug('options.signature not defined', 'warn', true);
                    return;
                } else {
                    method_arguments.push(options.signature);
                }
            }
            if (!('provider' in options)) {
                core.debug('options.provider not defined', 'warn', true);
                return;
            }
            method_arguments.push(options.provider);
            if ('provider_id' in options && 'provider_signature' in options && 'provider_timestamp' in options) {
                method_arguments.push(options.provider_id);
                method_arguments.push({
                    'signature': options.provider_signature,
                    'timestamp': options.provider_timestamp
                });
                core.api_request('addProvider', method_arguments, options.success, options.error);
            } else {
                core.gigya_request('getUserInfo', {}, function(response) {
                    if (response.status !== 'OK' && response.errorCode !== 0) {
                        if (typeof options.error === "function") options.error(response);
                        that.event.trigger(that.events.LINK_ACCOUNT_ERROR, [response]);
                        return;
                    }
                    if (response.user.identities[options.provider] !== undefined) {
                        method_arguments.push(response.user.identities[options.provider].providerUID);
                        method_arguments.push({
                            'gigya_uid': response.UID
                        });
                        core.api_request('addProvider', method_arguments, options.success, options.error);
                    } else {
                        core.gigya_request('addConnection', {
                            'provider': options.provider
                        }, function(response) {
                            if (response.status !== 'OK' && response.errorCode !== 0) {
                                if (typeof options.error === "function") options.error(response);
                                that.event.trigger(that.events.LINK_ACCOUNT_ERROR, [response]);
                                return;
                            }
                            method_arguments.push(response.user.identities[options.provider].providerUID);
                            method_arguments.push({
                                'gigya_uid': response.UID
                            });
                            core.api_request('addProvider', method_arguments, options.success, options.error);
                        });
                    }
                });
            }
        },
        unlink: function(options) {
            if (this.isReady === false) {
                defer_method(this.unlink, arguments);
                return;
            }
            options = (options !== undefined) ? options : {};
            var that = this;
            var method_arguments = [];
            if (core.sessions_enabled()) {
                if (!core.session_active()) {
                    core.debug('No active session', 'warn', true);
                    return;
                }
                method_arguments.push(null);
                method_arguments.push(null);
            } else {
                options.signature = ('signature' in options) ? options.signature : getCookie('_surf_auth_signature');
                if (!('uid' in options)) {
                    core.debug('options.uid not defined', 'warn', true);
                    return;
                } else {
                    method_arguments.push(options.uid);
                }
                if (!('signature' in options) || options.signature === null) {
                    core.debug('options.signature not defined', 'warn', true);
                    return;
                } else {
                    method_arguments.push(options.signature);
                }
            }
            if (!('provider' in options)) {
                core.debug('options.provider not defined', 'warn', true);
                return;
            } else {
                method_arguments.push(options.provider);
            }
            core.api_request('removeProvider', method_arguments, options.success, options.error);
        },
        forgot_password: function(options) {
            if (this.isReady === false) {
                defer_method(this.forgot_password, arguments);
                return;
            }
            options = (options !== undefined) ? options : {};
            var that = this;
            var method_arguments = [];
            if (!('id' in options)) {
                core.debug('options.id not defined', 'warn', true);
                return;
            } else {
                method_arguments.push(options.id);
            }
            method_arguments.push(core.globals.currentPage);
            if ('lang' in core.globals) {
                method_arguments.push(core.globals.lang);
            }
            core.api_request('resetPassword', method_arguments, options.success, options.error);
        },
        delete: function(options) {
            if (this.isReady === false) {
                defer_method(this.delete, arguments);
                return;
            }
            options = (options !== undefined) ? options : {};
            var that = this;
            var method_arguments = [];
            if (core.sessions_enabled()) {
                if (!core.session_active()) {
                    core.debug('No active session', 'warn', true);
                    return;
                }
                method_arguments.push(null);
                method_arguments.push(null);
            } else {
                options.signature = ('signature' in options) ? options.signature : getCookie('_surf_auth_signature');
                if (!('uid' in options)) {
                    core.debug('options.uid not defined', 'warn', true);
                    return;
                } else {
                    method_arguments.push(options.uid);
                }
                if (!('signature' in options) || options.signature === null) {
                    core.debug('options.signature not defined', 'warn', true);
                    return;
                } else {
                    method_arguments.push(options.signature);
                }
            }
            core.api_request('deleteAccount', method_arguments, options.success, options.error);
        },
        getUserInfo: function(options) {
            if (this.isReady === false) {
                defer_method(this.getUserInfo, arguments);
                return;
            }
            if (!core.session_active()) {
                core.debug('No active session', 'warn', true);
                return;
            }
            options = (options !== undefined) ? options : {};
            core.api_request('getuserinfo', null, options.success, options.error);
        },
        signin: function(options) {
            if (this.isReady === false) {
                defer_method(this.signin, arguments);
                return;
            }
            options = (typeof options !== 'undefined') ? options : {};
            var that = this;
            if (core.sessions_enabled() && core.session_active()) {
                core.debug('Session already active', 'warn', true);
                return;
            }
            var method_arguments = [];
            if (('id' in options) && ('password' in options)) {
                method_arguments.push(options.id);
                method_arguments.push({
                    'password': options.password
                });
            } else if (('provider' in options) && !('id' in options)) {
                core.gigya_request('login', {
                    provider: options.provider
                });
                return;
            } else if (('id' in options) && ('UIDSignature' in options) && ('signatureTimestamp' in options)) {
                method_arguments.push(options.id);
                method_arguments.push({
                    'UIDSignature': options.UIDSignature,
                    'signatureTimestamp': options.signatureTimestamp
                });
            } else if (('id' in options) && ('signature' in options) && ('timestamp' in options) && ('provider' in options)) {
                method_arguments.push(options.id);
                method_arguments.push({
                    'signature': options.signature,
                    'timestamp': options.timestamp,
                    'provider': options.provider
                });
            } else {
                core.debug('Invalid options', 'warn', true);
                return;
            }
            core.api_request('login', method_arguments, options.success, options.error);
        },
        signout: function(options) {
            if (this.isReady === false) {
                defer_method(this.signout, arguments);
                return;
            }
            var method_arguments = [];
            if (core.sessions_enabled()) {
                if (!core.session_active()) {
                    core.debug('No active session', 'warn', true);
                    return;
                }
            } else {
                options.signature = ('signature' in options) ? options.signature : getCookie('_surf_auth_signature');
                if (!('uid' in options)) {
                    core.debug('options.uid not defined', 'warn', true);
                    return;
                } else {
                    method_arguments.push(options.uid);
                }
                if (!('signature' in options) || options.signature === null) {
                    core.debug('options.signature not defined', 'warn', true);
                    return;
                } else {
                    method_arguments.push(options.signature);
                }
            }
            core.api_request('logout', method_arguments, options.success, options.error);
        },
        getVersion: function() {
            return SURF.globals.surfjs_version;
        }
    };
})(window);