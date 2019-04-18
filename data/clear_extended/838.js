! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.globoAB = t() : e.globoAB = t()
}(this, function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.i = function(e) {
            return e
        }, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 5)
    }([function(e, t, n) {
        "use strict";
        (function(t) {
            function r() {
                return "undefined" != typeof window && t && t.navigator && t.navigator.product && "ReactNative" !== t.navigator.product
            }
            var o = n(4),
                i = function() {
                    var e = {},
                        n = null,
                        i = !0;
                    return e.enableHorizon = function() {
                        i = !0
                    }, e.disableHorizon = function() {
                        i = !1
                    }, e.isWebBrowser = function() {
                        return r()
                    }, e.getGloboABHorizon = function() {
                        return n || (n = new o), n
                    }, e.server = function(t) {
                        e.host = t || "", e.environment = e.host.includes("globoi.com") ? "qa1" : e.host.includes("globo.com") ? "prod" : "local"
                    }, e.Experiment = function() {
                        function t(e) {
                            for (var t in e)
                                if (e.hasOwnProperty(t)) {
                                    var n = e[t];
                                    this[t] = n
                                }
                        }
                        return t.prototype.recordImpression = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            e.recordMetric("impression", this, t)
                        }, t.prototype.recordConversion = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            e.recordMetric("conversion", this, t)
                        }, t
                    }(), e.MABExperiment = function() {
                        function t(e) {
                            for (var t in e)
                                if (e.hasOwnProperty(t)) {
                                    var n = e[t];
                                    this[t] = n
                                }
                        }
                        return t.prototype.recordImpression = function() {
                            e.recordMABMetric("increment", this)
                        }, t.prototype.reward = function() {
                            e.recordMABMetric("reward", this)
                        }, t
                    }(), e.doRequest = function(t, n, r, o, i, a) {
                        var u = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {},
                            s = "",
                            c = e.interceptParams(n, r);
                        for (var l in c) c.hasOwnProperty(l) && (s += "&" + l + "=" + c[l]);
                        s && (s = "?" + s.substring(1));
                        var f = e.host + n + s,
                            d = e.creatXHR();
                        d.open(t, f, !0), d.onload = function() {
                            d.status >= 200 && d.status < 400 ? e.callIfDefined(i, d) : e.callIfDefined(a, d)
                        }, d.onerror = function(t) {
                            e.callIfDefined(a, t)
                        }, d.ontimeout = function(t) {
                            e.callIfDefined(a, t)
                        }, o && (d.setRequestHeader("Content-Type", "application/json;charset=utf-8"), o = JSON.stringify(o)), Object.keys(u).forEach(function(e) {
                            d.setRequestHeader(e, u[e])
                        }), d.send(o)
                    }, e.sendHorizon = function(t, n) {
                        i && e.isWebBrowser() && e.getGloboABHorizon().send(t, n)
                    }, e.recordMetric = function(n, r) {
                        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = "/v2/tests/" + r.testId + "/" + n,
                            a = {
                                experiment: r.experiment,
                                alternative: r.alternative
                            },
                            u = void 0;
                        o && void 0 !== o.extraHeaders && (u = o.extraHeaders), void 0 !== t.navigator && t.navigator.sendBeacon && void 0 === u ? t.navigator.sendBeacon(e.host + i, JSON.stringify(a)) : e.doRequest("PUT", i, null, a, null, null, u), e.sendHorizon("ab", {
                            metricId: n,
                            experiment: r.experiment,
                            alternative: r.alternative,
                            trackId: r.testId
                        })
                    }, e.getSelectedAlternatives = function(t, n, r, o) {
                        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {};
                        r = r || {}, r[t] = n;
                        var a = r.extraHeaders || {};
                        delete r.extraHeaders;
                        var u = function(t) {
                            var n = JSON.parse(t.responseText),
                                r = {};
                            for (var i in n.experiments)
                                if (n.experiments.hasOwnProperty(i)) {
                                    var a = n.experiments[i],
                                        u = new e.Experiment(a);
                                    r[i] = u
                                } n.experiments = r, e.callIfDefined(o, n)
                        };
                        e.doRequest("GET", "/v2/selected-alternatives", r, null, u, i, a)
                    }, e.creatXHR = function() {
                        var e = new XMLHttpRequest;
                        return e.withCredentials = !0, e.timeout = 1e3, e
                    }, e.isCompatibleWithPlugin = function() {
                        return !!e.isWebBrowser() && (!!window.chrome && !!window.chrome.webstore)
                    }, e.getDocumentLocationSearch = function() {
                        return e.isWebBrowser() ? document.location.search : ""
                    }, e.getPluginParams = function() {
                        var t = {},
                            n = ["ab-client-context", "ab-client-experiment", "ab-client-alternative"],
                            r = e.getDocumentLocationSearch().substr(1).split("&");
                        for (var o in r)
                            if (r.hasOwnProperty(o)) {
                                var i = r[o].split("=");
                                n.indexOf(i[0]) > -1 && (t[i[0]] = i[1])
                            } return t
                    }, e.getExperimentSettings = function(t, n) {
                        var r = e.getPluginParams();
                        if (t && r["ab-client-context"] === t && r["ab-client-experiment"]) {
                            var o = {
                                experiment: r["ab-client-experiment"],
                                alternative: r["ab-client-alternative"]
                            };
                            return o.alternative || delete o.alternative, o
                        }
                        return n && r["ab-client-experiment"] === n && r["ab-client-alternative"] ? {
                            alternative: r["ab-client-alternative"]
                        } : {}
                    }, e.interceptParams = function(t, n) {
                        try {
                            if (e.isCompatibleWithPlugin() && t) {
                                var r = void 0,
                                    o = void 0;
                                if (t.indexOf("/location/") > -1) {
                                    var i = t.split("/");
                                    r = i[i.length - 1]
                                } else t.indexOf("selected-alternatives") > -1 && (o = n.experiments);
                                if (o || r) return Object.assign({}, n, e.getExperimentSettings(r, o))
                            }
                        } catch (e) {
                            console.error(e)
                        }
                        return n
                    }, e.recordMABMetric = function(n, r, o, i, a) {
                        var u = "/mab/" + r.experiment + "/" + n,
                            s = {
                                arm: r.arm,
                                testId: r.testId,
                                abAlternative: r.abAlternative
                            };
                        r.metadata ? s.metadata = r.metadata : o && o.metadata && (s.metadata = o.metadata), e.sendHorizon("mab", {
                            metricId: n,
                            algorithm: "ucb1",
                            experiment: r.experiment,
                            arm: r.arm,
                            testId: r.testId
                        }), void 0 !== t.navigator && t.navigator.sendBeacon ? t.navigator.sendBeacon(e.host + u, JSON.stringify(s)) : e.doRequest("POST", u, {}, s, i, a)
                    }, e.getSelectedArm = function(t, n, r) {
                        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {},
                            i = n || {},
                            a = "",
                            u = "GET";
                        i && void 0 !== i.skipImpression && !0 === i.skipImpression ? a = "/mab/" + t + "/choose" : (a = "/mab/" + t + "/chooseAndIncrement", u = "POST");
                        var s = function(o) {
                            var i = JSON.parse(o.responseText);
                            i.experiment = t, n && n.metadata && (i.metadata = n.metadata), e.callIfDefined(r, new e.MABExperiment(i))
                        };
                        e.doRequest(u, a, null, null, s, o)
                    }, e.callIfDefined = function(e, t) {
                        e && e(t)
                    }, e
                }();
            e.exports = i
        }).call(t, n(2))
    }, function(e, t, n) {
        "use strict";
        (function(e) {
            var n, r, o, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            ! function(a, u) {
                "object" == i(t) && "object" == i(e) ? e.exports = u() : (r = [], n = u, void 0 !== (o = "function" == typeof n ? n.apply(t, r) : n) && (e.exports = o))
            }(0, function() {
                return function(e) {
                    function t(r) {
                        if (n[r]) return n[r].exports;
                        var o = n[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                    }
                    var n = {};
                    return t.m = e, t.c = n, t.d = function(e, n, r) {
                        t.o(e, n) || Object.defineProperty(e, n, {
                            configurable: !1,
                            enumerable: !0,
                            get: r
                        })
                    }, t.n = function(e) {
                        var n = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return t.d(n, "a", n), n
                    }, t.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, t.p = "", t(t.s = 4)
                }([function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(n(8)),
                        i = {
                            EVENTS_BUFFER_SIZE: 100,
                            EVENTS_SENDER_INTERVAL: 1e4,
                            EVENTS_DISCARD_AFTER_MSECS: 36e5,
                            EVENTS_BULK_SIZE: 10,
                            HORIZON_TRACK_HOST: "https://horizon-track.globo.com",
                            HORIZON_SCHEMAS_HOST: "https://horizon-schemas.globo.com",
                            HORIZON_CALLBACK_STACK_LIMIT: 1e3,
                            HORIZON_REQUEST_ENCODING: "base64",
                            HORIZON_CLIENT_UUID: r(n(2)).default.getResource("clientInstanceUUID", (0, o.default)()),
                            SCHEMA_VALIDATOR_SCRIPT_URL: "https://s3.glbimg.com/cdn/libs/tv4/1.3.0/tv4.min.js",
                            SCHEMA_VALIDATOR_SCRIPT_MAX_RETRIES: 2,
                            SCHEMA_LOAD_COLLECTION_RETRY_AFTER_MSECS: 1e4,
                            PACKAGE_VERSION: "1.0.2"
                        },
                        a = {
                            useQAConfiguration: function() {
                                i.HORIZON_TRACK_HOST = "https://horizon-track.qa.globoi.com", i.HORIZON_SCHEMAS_HOST = "https://horizon-schemas.qa.globoi.com", i.HORIZON_REQUEST_ENCODING = "json"
                            }
                        };
                    t.default = Object.assign(i, a)
                }, function(e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = {
                            DUPLICATED_SCHEMA: "[Horizon] Duplicated schema.",
                            INVALID_DATA: "[Horizon] Invalid data.",
                            INVALID_DATE: "[Horizon] Invalid date-time RFC 3339 format.",
                            INVALID_FORMAT: "[Horizon] Invalid event format.",
                            INVALID_REQUEST: "[Horizon] Invalid request.",
                            INVALID_TIMESTAMP: "[Horizon] Invalid timestamp.",
                            INVALID_VERSION_FORMAT: "[Horizon] Invalid version format.",
                            UNSUPPORTED_TYPE: "[Horizon] Unsupported type.",
                            UNSUPPORTED_TENANT: "[Horizon] Unsupported tenant.",
                            UNSUPPORTED_ENCODER: "[Horizon] Unsupported encoder.",
                            MUST_BE_DEFINED: "[Horizon] Parameter or argument must be defined",
                            ERROR_LOADING_RESOURCE: "[Horizon] Failed to load resouce.",
                            COMPONENT_NOT_READY: "[Horizon] Component is not ready.",
                            COMPONENT_UNAVAILABLE: "[Horizon] Class or function is required.",
                            SCHEMA_VALIDATOR_ERROR_LOADING: "[Horizon] Could not load SchemaValidator.",
                            LIMIT_EXCEEDED: "[Horizon] Resource limit exceeded."
                        },
                        o = {
                            mustBeDefined: function(e) {
                                throw new Error(r.MUST_BE_DEFINED + ": " + e + ".")
                            }
                        };
                    t.default = Object.assign(r, o)
                }, function(e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = function() {
                        return window.horizonResources = window.horizonResources || {}, window.horizonResources
                    };
                    t.default = {
                        getContext: r,
                        getResource: function(e, t) {
                            var n = r();
                            return n[e] = n[e] || t, n[e]
                        }
                    }
                }, function(e, t) {
                    var n;
                    n = function() {
                        return this
                    }();
                    try {
                        n = n || Function("return this")() || (0, eval)("this")
                    } catch (e) {
                        "object" == ("undefined" == typeof window ? "undefined" : i(window)) && (n = window)
                    }
                    e.exports = n
                }, function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.Settings = t.HorizonClient = void 0, n(5);
                    var o = r(n(7)),
                        i = r(n(0));
                    t.HorizonClient = o.default, t.Settings = i.default
                }, function(e, t, n) {
                    n(6).polyfill()
                }, function(e, t, n) {
                    function r(e, t) {
                        if (void 0 === e || null === e) throw new TypeError("Cannot convert first argument to object");
                        for (var n = Object(e), r = 1; r < arguments.length; r++) {
                            var o = arguments[r];
                            if (void 0 !== o && null !== o)
                                for (var i = Object.keys(Object(o)), a = 0, u = i.length; a < u; a++) {
                                    var s = i[a],
                                        c = Object.getOwnPropertyDescriptor(o, s);
                                    void 0 !== c && c.enumerable && (n[s] = o[s])
                                }
                        }
                        return n
                    }
                    e.exports = {
                        assign: r,
                        polyfill: function() {
                            Object.assign || Object.defineProperty(Object, "assign", {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: r
                            })
                        }
                    }
                }, function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = function() {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            return function(t, n, r) {
                                return n && e(t.prototype, n), r && e(t, r), t
                            }
                        }(),
                        i = r(n(0)),
                        a = r(n(11)),
                        u = r(n(1)),
                        s = r(n(13)),
                        c = r(n(21)),
                        l = {
                            READY: "stateReady",
                            UNLOADED: "stateNotReady",
                            LOADING: "stateLoading"
                        },
                        f = function() {
                            function e(t, n) {
                                var r = this,
                                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                ! function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, e), this.tenant = t || u.default.mustBeDefined("tenant"), this.deviceGroup = n || u.default.mustBeDefined("deviceGroup"), this.defaultContentType = o, this.validator = a.default, this.clientVersion = i.default.PACKAGE_VERSION, this.state = l.UNLOADED, this.referer = document.referrer;
                                var f = null,
                                    d = null;
                                this.setSchemasProvider = function(e) {
                                    return f = e
                                }, this.getSchemasProvider = function() {
                                    if (!f) {
                                        var e = c.default.getInstance();
                                        r.setSchemasProvider(e)
                                    }
                                    return f
                                }, this.setEventBus = function(e) {
                                    return d = e
                                }, this.getEventBus = function() {
                                    if (!d) {
                                        var e = s.default.getInstance(r.tenant, r.deviceGroup);
                                        r.setEventBus(e)
                                    }
                                    return d
                                }, this.isReady = function() {
                                    return !!f && r.validator.isReady() && f.isReady()
                                }
                            }
                            return o(e, [{
                                key: "useDefaultContentType",
                                value: function(e) {
                                    this.defaultContentType = e
                                }
                            }, {
                                key: "setValidator",
                                value: function(e) {
                                    this.validator = e
                                }
                            }, {
                                key: "setReferer",
                                value: function(e) {
                                    this.referer = e || document.referrer
                                }
                            }, {
                                key: "unload",
                                value: function() {
                                    this.flush()
                                }
                            }, {
                                key: "getScopeInfo",
                                value: function() {
                                    return {
                                        url: document.location.href,
                                        actionTs: +Date.now(),
                                        horizonClientVersion: this.clientVersion,
                                        horizonClientReferer: this.referer
                                    }
                                }
                            }, {
                                key: "validateBeforeEnqueue",
                                value: function(e) {
                                    var t = this.getSchemasProvider().get(e.id, e.version);
                                    this.validator.validateFor(e, t)
                                }
                            }, {
                                key: "onReady",
                                value: function(e) {
                                    this.validator.isReady() ? this.getSchemasProvider().isReady() ? (this.state = l.READY, e()) : (this.state = l.LOADING, this.getSchemasProvider().onReady(e), this.getSchemasProvider().load()) : (this.state = l.LOADING, this.validator.onReady(e), this.validator.load())
                                }
                            }, {
                                key: "flush",
                                value: function() {
                                    var e = this;
                                    this.isReady() ? this.getEventBus().flush() : this.onReady(function() {
                                        return e.flush()
                                    })
                                }
                            }, {
                                key: "send",
                                value: function(e) {
                                    var t = this;
                                    if (this.validator.validateArgs(e), !this.isReady()) return this.state === l.UNLOADED && this.flush(), void this.onReady(function() {
                                        return t.send(e)
                                    });
                                    this.validateBeforeEnqueue(e);
                                    var n = this.getScopeInfo(),
                                        r = Object.assign({}, e, n);
                                    r.contentType || (this.defaultContentType || u.default.mustBeDefined("contentType"), r.contentType = this.defaultContentType), this.getEventBus().enqueue(r)
                                }
                            }]), e
                        }();
                    t.default = f
                }, function(e, t, n) {
                    var r = n(9),
                        o = n(10);
                    e.exports = function(e, t, n) {
                        var i = t && n || 0;
                        "string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null);
                        var a = (e = e || {}).random || (e.rng || r)();
                        if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
                            for (var u = 0; u < 16; ++u) t[i + u] = a[u];
                        return t || o(a)
                    }
                }, function(e, t, n) {
                    (function(t) {
                        var n, r = t.crypto || t.msCrypto;
                        if (r && r.getRandomValues) {
                            var o = new Uint8Array(16);
                            n = function() {
                                return r.getRandomValues(o), o
                            }
                        }
                        if (!n) {
                            var i = new Array(16);
                            n = function() {
                                for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), i[t] = e >>> ((3 & t) << 3) & 255;
                                return i
                            }
                        }
                        e.exports = n
                    }).call(t, n(3))
                }, function(e, t) {
                    for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
                    e.exports = function(e, t) {
                        var r = t || 0,
                            o = n;
                        return o[e[r++]] + o[e[r++]] + o[e[r++]] + o[e[r++]] + "-" + o[e[r++]] + o[e[r++]] + "-" + o[e[r++]] + o[e[r++]] + "-" + o[e[r++]] + o[e[r++]] + "-" + o[e[r++]] + o[e[r++]] + o[e[r++]] + o[e[r++]] + o[e[r++]] + o[e[r++]]
                    }
                }, function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = "function" == typeof Symbol && "symbol" == i(Symbol.iterator) ? function(e) {
                            return void 0 === e ? "undefined" : i(e)
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : i(e)
                        },
                        a = r(n(12)),
                        u = r(n(1)),
                        s = r(n(0)),
                        c = {
                            ready: []
                        },
                        l = function() {
                            return !!window.tv4
                        },
                        f = function(e) {
                            return null === e ? null : isNaN(e) && !isNaN(Date.parse(e)) ? null : u.default.INVALID_DATE
                        };
                    t.default = {
                        validateFor: function(e, t) {
                            if (!l()) throw new Error(u.default.ERROR_LOADING_RESOURCE + " Validator is not ready.");
                            if (!t) throw new Error(u.default.INVALID_DATA + " Argument: schema.");
                            if (!/\d+\.\d+/.test(e.version)) throw new Error(u.default.INVALID_VERSION_FORMAT);
                            if (!tv4.validate(e.properties, t)) throw new Error(u.default.INVALID_DATA + " " + e.id + " " + e.version + ". " + tv4.error)
                        },
                        validateArgs: function(e) {
                            var t = Object.prototype.hasOwnProperty;
                            if (!(e && t.call(e, "id") && t.call(e, "version") && t.call(e, "properties"))) throw new Error(u.default.INVALID_FORMAT + " Missing properties: " + JSON.stringify(e));
                            if ("string" != typeof e.id || "string" != typeof e.version || "object" !== o(e.properties)) throw new Error(u.default.INVALID_FORMAT + " Wrong object type: " + JSON.stringify(e));
                            if (e.id.length < 2 || e.version.length < 3) throw new Error(u.default.INVALID_FORMAT + " Invalid property size: " + JSON.stringify(e));
                            var n = Object.assign({}, e);
                            if (delete n.id, delete n.version, delete n.properties, delete n.contentType, Object.keys(n).length > 0) throw new Error(u.default.INVALID_FORMAT + " Extra keys aren't allowed: " + JSON.stringify(n))
                        },
                        tv4IsValidData: f,
                        isReady: l,
                        onReady: function(e) {
                            if (l()) return e();
                            if (c.ready.length > s.default.HORIZON_CALLBACK_STACK_LIMIT) throw new Error(u.default.LIMIT_EXCEEDED + " Validator callback stack.");
                            return c.ready.unshift(e)
                        },
                        load: function() {
                            a.default.isDefined("tv4") || (0, a.default)([s.default.SCHEMA_VALIDATOR_SCRIPT_URL], "tv4", {
                                async: !0,
                                numRetries: s.default.SCHEMA_VALIDATOR_SCRIPT_MAX_RETRIES,
                                success: function() {
                                    tv4.addFormat("date-time", f), c.ready.forEach(function(e) {
                                        return e()
                                    })
                                },
                                error: function(e) {
                                    throw new Error(u.default.SCHEMA_VALIDATOR_ERROR_LOADING + " " + e)
                                }
                            })
                        }
                    }
                }, function(e, t, n) {
                    var r, o, i;
                    o = [], void 0 === (i = "function" == typeof(r = function() {
                        function e(e, t) {
                            if (e) {
                                var n = u[e];
                                if (a[e] = t, n)
                                    for (; n.length;) n[0](e, t), n.splice(0, 1)
                            }
                        }

                        function t(e, t) {
                            e.call && (e = {
                                success: e
                            }), t.length ? (e.error || o)(t) : (e.success || o)(e)
                        }

                        function n(e, t, r, i) {
                            var a, u, s = document,
                                c = r.async,
                                l = (r.numRetries || 0) + 1,
                                f = r.before || o,
                                d = e.replace(/^(css|img)!/, "");
                            i = i || 0, /(^css!|\.css$)/.test(e) ? (a = !0, (u = s.createElement("link")).rel = "stylesheet", u.href = d) : /(^img!|\.(png|gif|jpg|svg)$)/.test(e) ? (u = s.createElement("img")).src = d : ((u = s.createElement("script")).src = e, u.async = void 0 === c || c), u.onload = u.onerror = u.onbeforeload = function(o) {
                                var s = o.type[0];
                                if (a && "hideFocus" in u) try {
                                    u.sheet.cssText.length || (s = "e")
                                } catch (o) {
                                    s = "e"
                                }
                                if ("e" == s && (i += 1) < l) return n(e, t, r, i);
                                t(e, s, o.defaultPrevented)
                            }, !1 !== f(e, u) && s.head.appendChild(u)
                        }

                        function r(r, o, a) {
                            var u, s;
                            if (o && o.trim && (u = o), s = (u ? a : o) || {}, u) {
                                if (u in i) throw "LoadJS";
                                i[u] = !0
                            }! function(e, t, r) {
                                var o, i, a = (e = e.push ? e : [e]).length,
                                    u = a,
                                    s = [];
                                for (o = function(e, n, r) {
                                        if ("e" == n && s.push(e), "b" == n) {
                                            if (!r) return;
                                            s.push(e)
                                        }--a || t(s)
                                    }, i = 0; i < u; i++) n(e[i], o, r)
                            }(r, function(n) {
                                t(s, n), e(u, n)
                            }, s)
                        }
                        var o = function() {},
                            i = {},
                            a = {},
                            u = {};
                        return r.ready = function(e, n) {
                            return function(e, t) {
                                var n, r, o, i = [],
                                    s = (e = e.push ? e : [e]).length,
                                    c = s;
                                for (n = function(e, n) {
                                        n.length && i.push(e), --c || t(i)
                                    }; s--;) r = e[s], (o = a[r]) ? n(r, o) : (u[r] = u[r] || []).push(n)
                            }(e, function(e) {
                                t(n, e)
                            }), r
                        }, r.done = function(t) {
                            e(t, [])
                        }, r.reset = function() {
                            i = {}, a = {}, u = {}
                        }, r.isDefined = function(e) {
                            return e in i
                        }, r
                    }) ? r.apply(t, o) : r) || (e.exports = i)
                }, function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = function() {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            return function(t, n, r) {
                                return n && e(t.prototype, n), r && e(t, r), t
                            }
                        }(),
                        i = r(n(14)),
                        a = r(n(15)),
                        u = r(n(2)),
                        s = r(n(16)),
                        c = r(n(0)),
                        l = r(n(1)),
                        f = r(n(19)),
                        d = r(n(20)),
                        v = function() {
                            return u.default.getResource("bus", {})
                        },
                        h = function() {
                            function e(t, n, r) {
                                var o = this;
                                ! function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, e), this.currentTenant = t || l.default.mustBeDefined("tenant"), this.instanceID = n || l.default.mustBeDefined("instanceID"), this.deviceGroup = r || l.default.mustBeDefined("deviceGroup"), this.queue = new f.default(c.default.EVENTS_BUFFER_SIZE), (new d.default).every(c.default.EVENTS_SENDER_INTERVAL).call(function() {
                                    o.queue = o.filterQueue();
                                    var e = o.prepareRequest();
                                    o.dispatch(e, c.default.HORIZON_REQUEST_ENCODING) || e.actions.forEach(function(e) {
                                        return o.enqueue(e)
                                    })
                                }).call(function(e) {
                                    var t = c.default.EVENTS_SENDER_INTERVAL,
                                        n = 2 * c.default.EVENTS_SENDER_INTERVAL,
                                        r = Number(a.default.get("_hzt.interval")) || c.default.EVENTS_SENDER_INTERVAL;
                                    r <= n && r >= t && e.interval !== r && e.reschedule(r), a.default.remove("_hzt.interval", {
                                        path: "/"
                                    })
                                }).start()
                            }
                            return o(e, [{
                                key: "setMaxQueueSize",
                                value: function(e) {
                                    this.queue = f.default.fromArray(this.queue.items, e)
                                }
                            }, {
                                key: "filterQueue",
                                value: function() {
                                    var e = +Date.now() - c.default.EVENTS_DISCARD_AFTER_MSECS;
                                    return this.queue.filter(function(t) {
                                        return t.actionTs > e
                                    })
                                }
                            }, {
                                key: "prepareRequest",
                                value: function() {
                                    return {
                                        horizonClientUUID: this.instanceID,
                                        horizonClientTenant: this.currentTenant,
                                        horizonClientTs: Date.now(),
                                        horizonClientType: "js",
                                        horizonClientDeviceGroup: this.deviceGroup,
                                        actions: this.queue.splice(0, c.default.EVENTS_BULK_SIZE)
                                    }
                                }
                            }, {
                                key: "isValidRequest",
                                value: function(e) {
                                    if (!e || e && !e.actions) throw new Error(l.default.INVALID_REQUEST);
                                    return e.actions.length > 0
                                }
                            }, {
                                key: "dispatch",
                                value: function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "json",
                                        n = c.default.HORIZON_TRACK_HOST + "/event/" + this.currentTenant,
                                        r = s.default.get(t);
                                    if (!this.isValidRequest(e)) return !1;
                                    var o = r(e);
                                    return (0, i.default)(n, o)
                                }
                            }, {
                                key: "enqueue",
                                value: function(e) {
                                    if (!e.actionTs) throw new Error(l.default.INVALID_TIMESTAMP);
                                    this.queue.push(e)
                                }
                            }, {
                                key: "flush",
                                value: function() {
                                    for (; this.queue.length > 0;) {
                                        this.queue = this.filterQueue();
                                        var e = this.prepareRequest();
                                        this.dispatch(e, c.default.HORIZON_REQUEST_ENCODING)
                                    }
                                }
                            }, {
                                key: "length",
                                get: function() {
                                    return this.queue.length
                                }
                            }]), e
                        }();
                    t.default = {
                        getInstance: function(e, t) {
                            var n = v(),
                                r = e + "-" + t;
                            return n[r] || (n[r] = new h(e, c.default.HORIZON_CLIENT_UUID, t)), n[r]
                        },
                        reset: function(e, t) {
                            e && 0 !== e.length || l.default.mustBeDefined("tenant"), t && 0 !== t.length || l.default.mustBeDefined("deviceGroup");
                            var n = e + "-" + t;
                            delete v()[n]
                        },
                        getContextBus: v
                    }
                }, function(e, t, n) {
                    ! function(n) {
                        var r = "navigator" in n && "sendBeacon" in n.navigator,
                            o = function(e, t) {
                                var n = "XMLHttpRequest" in window ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                                n.open("POST", e, !1), n.withCredentials = !0, n.setRequestHeader("Accept", "*/*"), "string" == typeof t ? (n.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), n.responseType = "text/plain") : "[object Blob]" === {}.toString.call(t) && t.type && n.setRequestHeader("Content-Type", t.type);
                                try {
                                    n.send(t)
                                } catch (e) {}
                                return !0
                            };
                        r && (o = navigator.sendBeacon.bind(navigator)), void 0 !== e && e.exports && (t = e.exports = o), t.sendBeacon = o
                    }("object" == ("undefined" == typeof window ? "undefined" : i(window)) ? window : this)
                }, function(e, t, n) {
                    var r, o;
                    /*!
                     * JavaScript Cookie v2.2.0
                     * https://github.com/js-cookie/js-cookie
                     *
                     * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
                     * Released under the MIT license
                     */
                    ! function(i) {
                        if (void 0 === (o = "function" == typeof(r = i) ? r.call(t, n, t, e) : r) || (e.exports = o), e.exports = i(), !1) {
                            var a = window.Cookies,
                                u = window.Cookies = i();
                            u.noConflict = function() {
                                return window.Cookies = a, u
                            }
                        }
                    }(function() {
                        function e() {
                            for (var e = 0, t = {}; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var r in n) t[r] = n[r]
                            }
                            return t
                        }
                        return function t(n) {
                            function r(t, o, i) {
                                var a;
                                if ("undefined" != typeof document) {
                                    if (arguments.length > 1) {
                                        if ("number" == typeof(i = e({
                                                path: "/"
                                            }, r.defaults, i)).expires) {
                                            var u = new Date;
                                            u.setMilliseconds(u.getMilliseconds() + 864e5 * i.expires), i.expires = u
                                        }
                                        i.expires = i.expires ? i.expires.toUTCString() : "";
                                        try {
                                            a = JSON.stringify(o), /^[\{\[]/.test(a) && (o = a)
                                        } catch (e) {}
                                        o = n.write ? n.write(o, t) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                                        var s = "";
                                        for (var c in i) i[c] && (s += "; " + c, !0 !== i[c] && (s += "=" + i[c]));
                                        return document.cookie = t + "=" + o + s
                                    }
                                    t || (a = {});
                                    for (var l = document.cookie ? document.cookie.split("; ") : [], f = /(%[0-9A-Z]{2})+/g, d = 0; d < l.length; d++) {
                                        var v = l[d].split("="),
                                            h = v.slice(1).join("=");
                                        this.json || '"' !== h.charAt(0) || (h = h.slice(1, -1));
                                        try {
                                            var p = v[0].replace(f, decodeURIComponent);
                                            if (h = n.read ? n.read(h, p) : n(h, p) || h.replace(f, decodeURIComponent), this.json) try {
                                                h = JSON.parse(h)
                                            } catch (e) {}
                                            if (t === p) {
                                                a = h;
                                                break
                                            }
                                            t || (a[p] = h)
                                        } catch (e) {}
                                    }
                                    return a
                                }
                            }
                            return r.set = r, r.get = function(e) {
                                return r.call(r, e)
                            }, r.getJSON = function() {
                                return r.apply({
                                    json: !0
                                }, [].slice.call(arguments))
                            }, r.defaults = {}, r.remove = function(t, n) {
                                r(t, "", e(n, {
                                    expires: -1
                                }))
                            }, r.withConverter = t, r
                        }(function() {})
                    })
                }, function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(n(17)),
                        i = r(n(1)),
                        a = {
                            base64: function(e) {
                                var t = new FormData;
                                return t.append("data", o.default.encode(JSON.stringify(e))), t.append("encoding", "base64"), t
                            },
                            json: function(e) {
                                return JSON.stringify(e)
                            }
                        };
                    t.default = {
                        get: function(e) {
                            if (!(e in a)) throw new Error(i.default.UNSUPPORTED_ENCODER + " Invalid " + e + " encoder.");
                            return a[e]
                        }
                    }
                }, function(e, t, n) {
                    (function(e, r) {
                        var o; /*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
                        ! function(a) {
                            var u = (void 0 === t || i(t), "object" == (void 0 === e ? "undefined" : i(e)) && e && e.exports, void 0 === r || i(r), function(e) {
                                this.message = e
                            });
                            (u.prototype = new Error).name = "InvalidCharacterError";
                            var s = function(e) {
                                    throw new u(e)
                                },
                                c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                                l = /[\t\n\f\r ]/g,
                                f = {
                                    encode: function(e) {
                                        e = String(e), /[^\0-\xFF]/.test(e) && s("The string to be encoded contains characters outside of the Latin1 range.");
                                        for (var t, n, r, o, i = e.length % 3, a = "", u = -1, l = e.length - i; ++u < l;) t = e.charCodeAt(u) << 16, n = e.charCodeAt(++u) << 8, r = e.charCodeAt(++u), a += c.charAt((o = t + n + r) >> 18 & 63) + c.charAt(o >> 12 & 63) + c.charAt(o >> 6 & 63) + c.charAt(63 & o);
                                        return 2 == i ? (t = e.charCodeAt(u) << 8, n = e.charCodeAt(++u), a += c.charAt((o = t + n) >> 10) + c.charAt(o >> 4 & 63) + c.charAt(o << 2 & 63) + "=") : 1 == i && (o = e.charCodeAt(u), a += c.charAt(o >> 2) + c.charAt(o << 4 & 63) + "=="), a
                                    },
                                    decode: function(e) {
                                        var t = (e = String(e).replace(l, "")).length;
                                        t % 4 == 0 && (t = (e = e.replace(/==?$/, "")).length), (t % 4 == 1 || /[^+a-zA-Z0-9\/]/.test(e)) && s("Invalid character: the string to be decoded is not correctly encoded.");
                                        for (var n, r, o = 0, i = "", a = -1; ++a < t;) r = c.indexOf(e.charAt(a)), n = o % 4 ? 64 * n + r : r, o++ % 4 && (i += String.fromCharCode(255 & n >> (-2 * o & 6)));
                                        return i
                                    },
                                    version: "0.1.0"
                                };
                            void 0 === (o = function() {
                                return f
                            }.call(t, n, t, e)) || (e.exports = o)
                        }()
                    }).call(t, n(18)(e), n(3))
                }, function(e, t) {
                    e.exports = function(e) {
                        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                            enumerable: !0,
                            get: function() {
                                return e.l
                            }
                        }), Object.defineProperty(e, "id", {
                            enumerable: !0,
                            get: function() {
                                return e.i
                            }
                        }), e.webpackPolyfill = 1), e
                    }
                }, function(e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = function() {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            return function(t, n, r) {
                                return n && e(t.prototype, n), r && e(t, r), t
                            }
                        }(),
                        o = function() {
                            function e() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100;
                                ! function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, e), this._queue = [], this.maxSize = t
                            }
                            return r(e, [{
                                key: "push",
                                value: function(e) {
                                    this._queue = [e].concat(function(e) {
                                        if (Array.isArray(e)) {
                                            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                            return n
                                        }
                                        return Array.from(e)
                                    }(this.slice(0, this.maxSize - 1)))
                                }
                            }, {
                                key: "forEach",
                                value: function(e) {
                                    return this._queue.forEach(e)
                                }
                            }, {
                                key: "slice",
                                value: function(e, t) {
                                    return this._queue.slice(e, t)
                                }
                            }, {
                                key: "splice",
                                value: function(e, t) {
                                    return this._queue.splice(e, t)
                                }
                            }, {
                                key: "clear",
                                value: function() {
                                    this._queue = []
                                }
                            }, {
                                key: "filter",
                                value: function(t) {
                                    return e.fromArray(this._queue.filter(t), this.maxSize)
                                }
                            }, {
                                key: "length",
                                get: function() {
                                    return this._queue.length
                                }
                            }, {
                                key: "items",
                                get: function() {
                                    return JSON.parse(JSON.stringify(this._queue))
                                }
                            }], [{
                                key: "fromArray",
                                value: function(t, n) {
                                    var r = new e(n);
                                    return t.forEach(function(e) {
                                        return r.push(e)
                                    }), r
                                }
                            }]), e
                        }();
                    t.default = o
                }, function(e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = function() {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            return function(t, n, r) {
                                return n && e(t.prototype, n), r && e(t, r), t
                            }
                        }(),
                        o = function() {
                            function e() {
                                ! function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, e), this.interval = 0, this.tickIntervalId = 0, this.callbacks = []
                            }
                            return r(e, [{
                                key: "tick",
                                value: function() {
                                    var e = this;
                                    this.callbacks.forEach(function(t) {
                                        return t(e)
                                    })
                                }
                            }, {
                                key: "start",
                                value: function() {
                                    return this.tickIntervalId = setInterval(this.tick.bind(this), this.interval), this
                                }
                            }, {
                                key: "stop",
                                value: function() {
                                    return clearInterval(this.tickIntervalId), this.tickIntervalId = 0, this
                                }
                            }, {
                                key: "reschedule",
                                value: function(e) {
                                    return this.stop().every(e).start()
                                }
                            }, {
                                key: "every",
                                value: function(e) {
                                    return this.interval = e, this
                                }
                            }, {
                                key: "call",
                                value: function(e) {
                                    return this.callbacks.push(e), this
                                }
                            }, {
                                key: "isRunning",
                                get: function() {
                                    return !!this.tickIntervalId
                                }
                            }]), e
                        }();
                    t.default = o
                }, function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = function() {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            return function(t, n, r) {
                                return n && e(t.prototype, n), r && e(t, r), t
                            }
                        }(),
                        i = r(n(2)),
                        a = r(n(1)),
                        u = r(n(0)),
                        s = r(n(22)),
                        c = {
                            READY: "statusReady",
                            STATE_NOT_READY: "statusNotReady",
                            STATE_LOADING: "statusLoading",
                            STATE_SCHEDULED: "statusScheduled",
                            STATE_ERROR: "statusError"
                        },
                        l = function() {
                            return i.default.getResource("schemas", {
                                data: {}
                            })
                        },
                        f = function() {
                            function e(t) {
                                ! function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, e), this.url = t, this.state = c.STATE_NOT_READY, this.callbacks = {
                                    onReady: [],
                                    onError: [],
                                    onRetry: [],
                                    onLoad: []
                                }
                            }
                            return o(e, [{
                                key: "get",
                                value: function(e, t) {
                                    var n = e + "-" + t;
                                    if (!this.isReady()) throw new Error("" + a.default.COMPONENT_NOT_READY);
                                    var r = l().data[n];
                                    if (!r) throw new Error(a.default.UNSUPPORTED_TYPE + ": " + n);
                                    return r
                                }
                            }, {
                                key: "isReady",
                                value: function() {
                                    return this.state === c.STATE_READY
                                }
                            }, {
                                key: "retry",
                                value: function() {
                                    var e = this;
                                    this.state = c.STATE_SCHEDULED, this.callbacks.onRetry.forEach(function(e) {
                                        return e()
                                    }), setTimeout(function() {
                                        e.state = c.STATE_NOT_READY, e.load()
                                    }, u.default.SCHEMA_LOAD_COLLECTION_RETRY_AFTER_MSECS)
                                }
                            }, {
                                key: "onLoad",
                                value: function(e) {
                                    this.callbacks.onLoad.push(e)
                                }
                            }, {
                                key: "onRetry",
                                value: function(e) {
                                    this.callbacks.onRetry.push(e)
                                }
                            }, {
                                key: "onReady",
                                value: function(e) {
                                    if (this.state === c.STATE_READY) return e(l().data);
                                    if (this.callbacks.onReady.length > u.default.HORIZON_CALLBACK_STACK_LIMIT) throw new Error(a.default.LIMIT_EXCEEDED + " Schemas callback stack.");
                                    return this.callbacks.onReady.push(e)
                                }
                            }, {
                                key: "onError",
                                value: function(e) {
                                    this.state === c.STATE_ERROR ? e() : this.callbacks.onError.push(e)
                                }
                            }, {
                                key: "execAsync",
                                value: function(e, t) {
                                    setTimeout(function() {
                                        return e(t)
                                    }, 1)
                                }
                            }, {
                                key: "load",
                                value: function() {
                                    var e = this,
                                        t = l();
                                    this.state === c.STATE_NOT_READY && (this.state = c.STATE_LOADING, this.callbacks.onLoad.forEach(function(e) {
                                        return e()
                                    }), s.default.request("GET", this.url, function(n) {
                                        t.data = Object.assign(t.data || {}, n), e.state = c.STATE_READY, e.callbacks.onReady.forEach(function(n) {
                                            return e.execAsync(n, t.data)
                                        })
                                    }, function(t) {
                                        e.state = c.STATE_ERROR, e.callbacks.onError.forEach(function(n) {
                                            return e.execAsync(n, t)
                                        }), e.retry()
                                    }))
                                }
                            }]), e
                        }();
                    t.default = {
                        getInstance: function(e) {
                            var t = l();
                            return t.provider || (t.provider = new f(e || u.default.HORIZON_SCHEMAS_HOST + "/schemas")), t.provider
                        },
                        getContextSchemas: l
                    }
                }, function(e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = {
                        request: function(e, t, n, r) {
                            var o = new XMLHttpRequest;
                            o.open(e, t, !0), o.onload = function() {
                                return o.status < 400 ? n(JSON.parse(o.response)) : r(o.response)
                            }, o.onerror = r, o.send()
                        }
                    }
                }])
            })
        }).call(t, n(3)(e))
    }, function(e, t, n) {
        "use strict";
        var r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        r = function() {
            return this
        }();
        try {
            r = r || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (r = window)
        }
        e.exports = r
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = function() {
                function e() {
                    r(this, e), this.horizonClient = null
                }
                return o(e, [{
                    key: "getHorizonClient",
                    value: function() {
                        if (!this.horizonClient) {
                            var e = n(1),
                                t = this.getTenant(),
                                r = this.getDeviceGroup();
                            this.horizonClient = new e.HorizonClient(t, r)
                        }
                        return this.horizonClient
                    }
                }, {
                    key: "getTenant",
                    value: function() {
                        return this.getCdaaasProperty("SITE_ID") || this.getTeliumProperty("ut.profile") || "globocom"
                    }
                }, {
                    key: "getDeviceGroup",
                    value: function() {
                        return this.getCdaaasProperty("MOBILE_GROUP") || this.getTeliumProperty("platform") || "desktop"
                    }
                }, {
                    key: "getCdaaasProperty",
                    value: function(e) {
                        if (window.hasOwnProperty("cdaaas") && window.cdaaas.hasOwnProperty("SETTINGS")) return window.cdaaas.SETTINGS[e]
                    }
                }, {
                    key: "getTeliumProperty",
                    value: function(e) {
                        if (window.hasOwnProperty("utag_data")) return window.utag_data[e]
                    }
                }, {
                    key: "send",
                    value: function(e, t) {
                        var n = null;
                        "ab" === e ? (n = this.getABSignal(t), this.getHorizonClient().send(n)) : "mab" === e && (n = this.getMABSignal(t), this.getHorizonClient().send(n))
                    }
                }, {
                    key: "getABSignal",
                    value: function(e) {
                        return {
                            id: "ab-" + e.metricId,
                            contentType: "ab",
                            version: "1.0",
                            properties: {
                                experiment: e.experiment,
                                alternative: e.alternative,
                                trackId: e.trackId
                            }
                        }
                    }
                }, {
                    key: "getMABSignal",
                    value: function(e) {
                        return {
                            id: "mab-" + e.metricId,
                            contentType: "mab",
                            version: "1.0",
                            properties: {
                                algorithm: e.algorithm,
                                experiment: e.experiment,
                                arm: e.arm,
                                trackId: e.testId
                            }
                        }
                    }
                }]), e
            }();
        e.exports = i
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            o = function() {
                var e = {
                        v2: {
                            version: "2.3.1"
                        }
                    },
                    t = {
                        v1: {}
                    };
                return e.mab = t, e.v2.getMulti = function(t, n, o) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {},
                        a = t.join(",");
                    r.server(e.v2.server), r.getSelectedAlternatives("experiments", a, n, o, i)
                }, e.v2.get = function(t, n, o) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {},
                        a = {};
                    n && void 0 !== n.skipImpression && (a.skipImpressions = n.skipImpression), n && void 0 !== n.extraHeaders && (a.extraHeaders = n.extraHeaders);
                    var u = function(e) {
                        r.callIfDefined(o, e.experiments[t])
                    };
                    e.v2.getMulti([t], a, u, i)
                }, e.v2.getLocation = function(t, n, o) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {};
                    void 0 === n && (n = {}), void 0 !== n.skipImpression && (n.countImpressions = !n.skipImpression, delete n.skipImpression), n.drawed = !0;
                    var a = function(e) {
                        var t = JSON.parse(e.responseText),
                            n = {};
                        for (var i in t)
                            if (t.hasOwnProperty(i)) {
                                var a = t[i];
                                a.experiment = i, delete a.canCountImpression, delete a.canCountConversion, n = new r.Experiment(a)
                            } r.callIfDefined(o, n)
                    };
                    r.server(e.v2.server), r.doRequest("GET", "/ab/location/" + t, n, null, a, i)
                }, e.v2.recordImpression = function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    r.server(e.v2.server), r.recordMetric("impression", t, n)
                }, e.v2.recordConversion = function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    r.server(e.v2.server), r.recordMetric("conversion", t, n)
                }, t.v1.get = function(t, n, o) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {};
                    r.server(e.v2.server), r.getSelectedArm(t, n, o, i)
                }, t.v1.recordImpression = function(t, n) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {};
                    r.server(e.v2.server), r.recordMABMetric("increment", t, n, o, i)
                }, t.v1.reward = function(t, n) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {};
                    r.server(e.v2.server), r.recordMABMetric("reward", t, n, o, i)
                }, e
            }();
        e.exports = o
    }])
});