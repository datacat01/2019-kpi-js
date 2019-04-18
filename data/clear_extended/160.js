! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("fedopsLogger", [], t) : "object" == typeof exports ? exports.fedopsLogger = t() : e.fedopsLogger = t()
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) n.d(r, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return r
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "https://static.parastorage.com/services/fedops-logger/5.3.0/", n.p = "undefined" != typeof window && window.__STATICS_BASE_URL__ || n.p, n(n.s = 10)
    }([function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return a
            });
            var r = {},
                o = function() {
                    return "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof WorkerGlobalScope ? WorkerGlobalScope : r
                };

            function i() {
                return "undefined" != typeof navigator && navigator && navigator.sendBeacon
            }

            function a(e) {
                return navigator.sendBeacon(e)
            }
        }).call(this, n(11))
    }, function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "a", function() {
            return s
        }), n.d(t, "e", function() {
            return u
        }), n.d(t, "d", function() {
            return c
        });
        var r = n(0);

        function o(e) {
            return ((Object(r.a)().fedops || {}).apps || {})[e]
        }

        function i() {
            Object(r.a)().fedops = Object(r.a)().fedops || {}, Object(r.a)().fedops.apps = Object(r.a)().fedops.apps || {}
        }

        function a(e) {
            i(),
                function(e) {
                    Object(r.a)().fedops.apps[e] = Object(r.a)().fedops.apps[e] || {}
                }(e)
        }

        function s(e) {
            return (o(e) || {}).startLoadTime || 0
        }

        function u(e, t) {
            return o(e).startLoadTime = t
        }

        function c(e) {
            return (Object(r.a)().fedops || {}).sessionId = e
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Host = "frog.wix.com", t.LoggerVersion = "2",
            function(e) {
                e.Auto = "auto", e.PostMessage = "postMessage"
            }(t.PublishMethods || (t.PublishMethods = {})),
            function(e) {
                e[e.Unsupported = 0] = "Unsupported"
            }(t.Errors || (t.Errors = {})),
            function(e) {
                e.msid = "_msid", e.clientId = "_client_id", e.uuid = "_uuid", e.visitorId = "_visitorId", e.siteMemberId = "_siteMemberId"
            }(t.EventContextMap || (t.EventContextMap = {}))
    }, function(e, t, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
            };
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.name = n.constructor.name, n
            }
            return r(t, e), t
        }(Error);
        t.AssertionError = o;
        var i = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.name = n.constructor.name, n
            }
            return r(t, e), t
        }(Error);
        t.APINotSupportedError = i
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.now = function() {
            return "undefined" != typeof performance && performance && performance.now ? performance.now() : -1
        }, t.getDesktopSize = function(e) {
            return (e.screen && e.screen.width || 0) + "x" + (e.screen && e.screen.height || 0)
        }, t.getWindowSize = function(e) {
            var t = 0,
                n = 0;
            return e.innerWidth ? (t = e.innerWidth, n = e.innerHeight) : e.document && (e.document.documentElement && e.document.documentElement.clientWidth ? (t = e.document.documentElement.clientWidth, n = e.document.documentElement.clientHeight) : e.document.body && e.document.body.clientWidth && (t = e.document.body.clientWidth, n = e.document.body.clientHeight)), t + "x" + n
        }, t.sendBeacon = function(e) {
            return !("undefined" == typeof navigator || !navigator || !navigator.sendBeacon) && navigator.sendBeacon(e)
        }, t.readCookie = function(e) {
            if ("undefined" == typeof document) return null;
            for (var t = 0, n = document.cookie.split(";"); t < n.length; t++) {
                for (var r = n[t].split("="), o = r[0], i = r[1];
                    " " === o[0];) o = o.substr(1);
                if (o === e) return i
            }
            return ""
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(2).Host;
        t.setHost = function(e) {
            r = e
        }, t.getHost = function() {
            return r
        }, t.isWebWorker = function() {
            return "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope
        }, t.requestWindow = function(e) {
            if ("undefined" != typeof window && window) try {
                return window.top === window.self ? e ? e(window) : window : null
            } catch (e) {
                return null
            }
            return null
        }
    }, function(e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        var o = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.name = n.constructor.name, n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, Error), t
        }();
        e.exports.defined = function(e, t) {
            if (void 0 === e) throw new o(t)
        }, e.exports.object = function(e, t) {
            if (void 0 !== e && ("object" !== (void 0 === e ? "undefined" : r(e)) || Array.isArray(e) || null === e)) throw new o(t)
        }, e.exports.ok = function(e, t) {
            if (!e) throw new o(t)
        }, e.exports.AssertionError = o
    }, function(e, t, n) {
        "use strict";
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
        }();
        var o = n(6),
            i = n(14).mapValues,
            a = n(15),
            s = n(16).log,
            u = function() {
                function e(t, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this._publishers = t.publishers, this._validators = t.validators || [], this._defaults = t.defaults, this._events = t.events || {}, this._context = n || {}, this._defaultValueTimeout = t.defaultValueTimeout || 5e3, this._defaultContinueOnFail = t.defaultContinueOnFail || !1, this._onPublisherFailHandler = t.onPublisherFailHandler || e._defaultPublisherFailHandler
                }
                return r(e, [{
                    key: "log",
                    value: function(e, t, n) {
                        var r = this;
                        o.defined(e, "Event object or event key must be provided.");
                        var i = this._extractEventAndContext(e, t, n),
                            a = i.event,
                            s = i.context;
                        return this._getDefaults().then(function(e) {
                            var t = Object.assign({}, e, a);
                            if (!(0 === r._validators.length || r._validators.some(function(e) {
                                    return e.match(t) && (e.execute(t) || !0)
                                }))) throw new Error("No validator accepted the event. Source: " + t.src + " Evid: " + (t.evid || t.evtId));
                            return Promise.all(r._publishers.map(function(e) {
                                var n = Object.assign({}, t);
                                return Promise.resolve().then(function() {
                                    return e(n, Object.assign({}, r._context, s))
                                }).catch(function(t) {
                                    return r._onPublisherFailHandler(t, {
                                        publisherName: e.name
                                    })
                                })
                            })).then(function() {})
                        })
                    }
                }, {
                    key: "_extractEventAndContext",
                    value: function(e, t, n) {
                        var r = void 0,
                            i = {};
                        if ("string" != typeof e) r = e, i = t || i;
                        else {
                            if (!(r = this._events[e])) throw new o.AssertionError("Event with key '" + e + "' not found in event map.");
                            t && (r = Object.assign({}, r, t), i = n || i)
                        }
                        return {
                            event: r,
                            context: i
                        }
                    }
                }, {
                    key: "_handleDefaultsError",
                    value: function(e) {
                        return this._defaultContinueOnFail ? (s.error(e), null) : Promise.reject(e)
                    }
                }, {
                    key: "_getDefaults",
                    value: function() {
                        var e = this;
                        if (!this._defaults) return Promise.resolve({});
                        var t = i(this._defaults, function(t, n) {
                            if ("function" == typeof t) try {
                                t = t()
                            } catch (t) {
                                return e._handleDefaultsError(t)
                            }
                            return t && "function" != typeof t.then ? t : a.timedPromise(t, {
                                message: "Cannot get default value '" + n + " for BI Event'",
                                timeout: e._defaultValueTimeout
                            }).catch(function(t) {
                                return e._handleDefaultsError(t)
                            })
                        });
                        return a.allAsObject(t)
                    }
                }], [{
                    key: "_defaultPublisherFailHandler",
                    value: function(e, t) {
                        return t.publisherName
                    }
                }]), e
            }();
        e.exports = u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(4),
            o = n(5),
            i = 0;
        t.getCookies = function(e) {
            return Object.keys(e).reduce(function(t, n) {
                var o = "string" == typeof e[n] ? {
                        name: e[n]
                    } : e[n],
                    i = o.name,
                    a = o.transform,
                    s = (void 0 === a ? function(e) {
                        return e
                    } : a)(r.readCookie(i));
                return s && (t[n] = s), t
            }, {})
        }, t.buildBiUrl = function(e, t, n) {
            var r = e.host,
                a = void 0 === r ? "" : r,
                s = e.endpoint,
                u = void 0 === s ? "" : s;
            void 0 === n && (n = {}), a = a || o.getHost(), u = n.endpoint || u, t._ = "" + (new Date).getTime() + i++;
            var c = Object.keys(t).map(function(e) {
                return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
            }, []);
            return ["//" + a + "/" + u].concat(c.length ? c.join("&") : []).join("?")
        }, t.guid = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            })
        }
    }, function(e, t, n) {
        "use strict";
        var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            },
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(n(12)),
            a = o(n(17)),
            s = n(18),
            u = n(8),
            c = n(2),
            f = n(2);
        t.PublishMethods = f.PublishMethods;
        var p = n(5);
        t.setHost = p.setHost;
        var d = function(e) {
                return Object.keys(e).reduce(function(t, n) {
                    return c.EventContextMap[n] && (t[c.EventContextMap[n]] = e[n]), t
                }, {})
            },
            l = function() {
                return u.getCookies({
                    clientId: "_wixCIDX",
                    uuid: {
                        name: "_wixUIDX",
                        transform: function(e) {
                            return "string" == typeof e && e.split("|")[1]
                        }
                    }
                })
            },
            h = function(e) {
                return -1 !== Object.keys(c.PublishMethods).map(function(e) {
                    return c.PublishMethods[e]
                }).indexOf(e)
            },
            m = function() {
                function e(e) {
                    this.options = e, this.initialized = !1, this.muted = !1, a.ok(!e.publishMethod || h(e.publishMethod), 'Unsupported publish method "' + e.publishMethod + '"'), this.factory = i.default.factory(e), this.withUserContext(l())
                }
                return e.prototype.initFactory = function() {
                    if (this.initialized) return this.factory;
                    this.initialized = !0;
                    var e = s.getPublisher(this.options, this.transformer);
                    return this.factory.addPublisher(e)
                }, e.prototype.withTransformer = function(e) {
                    return a.defined(e, "Transformer must be provided"), a.ok("function" == typeof e || e && e.postMessage, "Valid transformer must be provided"), this.transformer = e, this
                }, e.prototype.withUserContext = function(e) {
                    return a.defined(e, "User context object must be provided"), this.updateDefaults(d(e)), this
                }, e.prototype.withUoUContext = function(e) {
                    return a.defined(e, "UoU context object must be provided"), this.updateDefaults(d(e)), this
                }, e.prototype.updateDefaults = function(e) {
                    return this.factory.updateDefaults(e), this
                }, e.prototype.setMuted = function(e) {
                    return this.muted = e, this
                }, e.prototype.logger = function(e) {
                    void 0 === e && (e = {});
                    var t = this.initFactory().logger(e),
                        n = this;
                    return {
                        log: function(e, r) {
                            return n.muted ? Promise.resolve() : t.log(e, r)
                        }
                    }
                }, e
            }();
        t.Factory = m, t.factory = function(e) {
            return void 0 === e && (e = {}), new m(e)
        }
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(0),
            o = "fed",
            i = "performance",
            a = "0.0.0",
            s = n(9);
        var u = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.biLoggerFactory,
                        r = t.baseUrl,
                        a = t.endpoint;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.factory = n || s.factory({
                        host: r
                    }), this.performancePublisher = this.factory.logger({
                        endpoint: i
                    }), this.fedopsPublisher = this.factory.logger({
                        endpoint: a || o
                    })
                }
                return e.prototype.report = function(e, t) {
                    if (!e) return null;
                    switch (t) {
                        case i:
                            return this.performancePublisher.log(e);
                        default:
                            return this.fedopsPublisher.log(e)
                    }
                }, e
            }(),
            c = function() {
                return void 0 !== Object(r.a)() && Object(r.a)().location
            },
            f = {
                getHost: function() {
                    return c() && Object(r.a)().location.host
                },
                isFedopsDev: function() {
                    return ((c() || {}).search || "").indexOf("fedops=dev") > -1
                }
            },
            p = {
                getNavigation: function() {
                    return void 0 !== Object(r.a)() && Object(r.a)().performance ? Object(r.a)().performance.navigation : {}
                },
                getResources: function() {
                    var e = [];
                    try {
                        return Object(r.a)() && Object(r.a)().performance && Object(r.a)().performance.getEntriesByType && Object(r.a)().performance.getEntriesByType("resource") || e
                    } catch (t) {
                        return e
                    }
                },
                getTiming: function() {
                    return Object(r.a)() && Object(r.a)().performance ? Object(r.a)().performance.timing : {}
                },
                clearResourceTimings: function() {
                    Object(r.a)() && Object(r.a)().performance && Object(r.a)().performance.clearResourceTimings && Object(r.a)().performance.clearResourceTimings()
                },
                now: function() {
                    return Object(r.a)() && Object(r.a)().performance && Object(r.a)().performance.now ? Object(r.a)().performance.now() : "undefined" != typeof performance && performance && performance.now ? performance.now() : (new Date).getTime()
                },
                responseEndTime: function() {
                    if ("undefined" != typeof performance && performance && performance.timing && performance.timing.responseEnd && performance.timing.fetchStart) return performance.timing.responseEnd - performance.timing.fetchStart
                },
                mark: function(e) {
                    f.isFedopsDev() && Object(r.a)() && Object(r.a)().performance && Object(r.a)().performance.mark && Object(r.a)().performance.mark(e)
                },
                measure: function(e, t, n) {
                    f.isFedopsDev() && Object(r.a)() && Object(r.a)().performance && Object(r.a)().performance.measure && Object(r.a)().performance.measure(e, t, n)
                }
            },
            d = n(1);
        var l = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.appName = t, this.apps = {}, this.apps[t] = {}
            }
            return e.prototype._getKeyForApp = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.appName,
                    t = arguments[1];
                return t ? e + "_" + t : e
            }, e.prototype.setLoadStarted = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.appId,
                    n = e.widgetId,
                    r = this._getKeyForApp(t, n);
                this.apps[r] || (this.apps[r] = {}), this.apps[r].startLoadTime = p.now()
            }, e.prototype.getLoadStartTime = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.appId,
                    n = e.widgetId,
                    r = this._getKeyForApp(t, n);
                return Math.floor(this.apps[r] && this.apps[r].startLoadTime || Object(d.a)(r) || 0)
            }, e.prototype.getAppLoadTime = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.appId,
                    n = e.widgetId;
                return Math.floor(p.now() - this.getLoadStartTime({
                    appId: t,
                    widgetId: n
                }))
            }, e.prototype.getFirstRequestDuration = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.appId,
                    n = e.widgetId;
                return this.getLoadStartTime({
                    appId: t,
                    widgetId: n
                })
            }, e
        }();
        var h = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.data = t
            }
            return e.prototype.isActive = function() {
                return !0
            }, e.prototype.export = function() {
                return this.data
            }, e
        }();
        var m = function() {
            function e() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.items = [], n && (void 0 === n.length ? [n] : n).forEach(function(e) {
                    return t.addItem(e)
                })
            }
            return e.prototype.clone = function() {
                return new e(this.items.slice())
            }, e.prototype.addItem = function(e) {
                return this.items.push(e instanceof h ? e : new h(e)), this
            }, e.prototype.mergeItems = function() {
                for (var e = {}, t = 0; t < this.items.length; t++) {
                    var n = this.items[t];
                    if (!n.isActive()) {
                        e = null;
                        break
                    }
                    var r = n.export();
                    for (var o in r) r.hasOwnProperty(o) && (e[o] = r[o])
                }
                return e
            }, e
        }();
        var b = function(e) {
            function t(n, r) {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, e.call(this, {
                        src: 72,
                        evid: n,
                        session_id: r,
                        _: (new Date).getTime()
                    }))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), t
        }(h);
        var y = {
                xmlhttprequest: {
                    count: "countXhr",
                    unsupported: "unsprtXhr",
                    duration: "timeXhr",
                    total: "sizeXhr",
                    longest: "longXhr",
                    http2: "h2Xhr"
                },
                script: {
                    count: "countJs",
                    unsupported: "unsprtJs",
                    duration: "timeJs",
                    total: "sizeJs",
                    cached: "cachedJs",
                    http2: "h2Js"
                },
                link: {
                    count: "countCss",
                    unsupported: "unsprtCss",
                    duration: "timeCss",
                    total: "sizeCss",
                    cached: "cachedCss",
                    http2: "h2Css"
                },
                img: {
                    count: "countImg",
                    unsupported: "unsprtImg",
                    duration: "timeImg",
                    total: "sizeImg",
                    cached: "cachedImages",
                    http2: "h2Images"
                }
            },
            v = {
                link: function(e) {
                    return /(.\.css$|.\.css?.)/g.test(e.name)
                }
            },
            g = function(e) {
                return e.responseEnd - e.startTime
            };

        function w(e, t) {
            var n = v[t];
            return e.filter(function(e) {
                return t === e.initiatorType && (!n || n(e))
            })
        }

        function _(e) {
            return !e.name.match(/http(s)?:\/\/frog.wix.com\//)
        }

        function O(e) {
            return function(e) {
                var t = f.getHost();
                return t && -1 === e.indexOf(t)
            }(e.name) && 0 === e.transferSize && 0 === e.requestStart
        }

        function I(e) {
            var t = e.filter(function(e) {
                return !O(e)
            });
            return Object.keys(y).reduce(function(n, r) {
                var o = w(e, r),
                    i = w(t, r),
                    a = y[r];
                return n[a.count] = i.length, n[a.duration] = function(e) {
                    if (0 === e.length) return 0;
                    var t = {
                        startTime: 1 / 0,
                        responseEnd: 0
                    };
                    return e.forEach(function(e) {
                        t.startTime > e.startTime && (t.startTime = e.startTime), t.responseEnd < e.responseEnd && (t.responseEnd = e.responseEnd)
                    }), t.responseEnd - t.startTime
                }(i), n[a.total] = function(e) {
                    return e.reduce(function(e, t) {
                        return e + t.transferSize
                    }, 0)
                }(i), n[a.unsupported] = function(e) {
                    var t = e.length;
                    if (0 === t) return 0;
                    var n = e.filter(O).length;
                    return Math.round(n / t * 100)
                }(o), n[a.http2] = function(e) {
                    if (0 === e.length) return 0;
                    var t = !1,
                        n = Math.round(e.filter(function(e) {
                            return t = t || "nextHopProtocol" in e, "h2" === e.nextHopProtocol
                        }).length / e.length * 100);
                    return t ? n : NaN
                }(o), a.longest && (n[a.longest] = function(e) {
                    if (0 === e.length) return 0;
                    var t = e.reduce(function(e, t) {
                        return g(t) >= g(e) ? t : e
                    });
                    return g(t)
                }(i)), a.cached && (n[a.cached] = function(e) {
                    if (0 === e.length) return 0;
                    var t = e.filter(function(e) {
                        return 0 === e.transferSize
                    });
                    return Math.round(t.length / e.length * 100)
                }(i)), n
            }, {})
        }

        function P(e) {
            return {
                url: e.name,
                downloadDuration: e.responseEnd - e.startTime,
                bytesTransferred: e.transferSize,
                isHTTP2: "h2" === e.nextHopProtocol
            }
        }
        var j = function(e) {
            function t(n) {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, e.call(this, 18, n))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), t.prototype.performNetworkAnalysis = function(e) {
                if (0 === e.length) return null;
                var t = p.now(),
                    n = e.filter(_),
                    r = I(n);
                r.overhead = p.now() - t;
                var o = function(e) {
                    return Object.keys(e).reduce(function(t, n) {
                        var r = parseInt(e[n]);
                        return isNaN(r) || "number" != typeof r || (t[n] = r), t
                    }, {})
                }(r);
                if (console.debug && f.isFedopsDev()) {
                    var i = function(e) {
                        var t = e.reduce(function(e, t) {
                            return O(t) ? e.unsupported.push(t) : e.supported.push(t), e
                        }, {
                            supported: [],
                            unsupported: []
                        });
                        return Object.keys(y).reduce(function(e, n) {
                            return e[n] = {}, e[n].supported = w(t.supported, n).map(function(e) {
                                return P(e)
                            }), e[n].unsupported = w(t.unsupported, n).map(function(e) {
                                return P(e)
                            }), e
                        }, {})
                    }(n);
                    console.debug("[fedops network analysis] [bytes analysis]\n" + JSON.stringify(o, null, 4)), console.debug("[fedops network analysis] [resources breakdown]\n", i)
                }
                return o
            }, t
        }(b);
        var x = 14,
            T = function(e) {
                function t(n) {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, e.call(this, x, n))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), t
            }(b);
        var S = 13,
            E = function(e) {
                function t(n) {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, e.call(this, S, n))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), t
            }(b);
        var k = function(e) {
            function t(n) {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, e.call(this, {
                        duration: n
                    }))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), t.prototype.setFirstRequestDuration = function(e) {
                return this.data.frd = e, this
            }, t
        }(h);
        var A = 17,
            N = function(e) {
                function t(n) {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, e.call(this, A, n))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), t
            }(b);
        var C = function(e) {
            function t(n) {
                var r = n.name,
                    o = n.phaseStartTime;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var i = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, e.call(this, {}));
                return i.data.name = r, i.data.duration = Math.floor(p.now() - o), i
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), t
        }(h);
        var D = function(e, t) {
                return ("0" + t).slice(-2) + "_" + e
            },
            L = function(e) {
                function t(n) {
                    var r = n.name,
                        o = n.index,
                        i = n.phaseStartTime;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var a = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, e.call(this, {
                        name: r,
                        index: o,
                        phaseStartTime: i
                    }));
                    return a.data.name = D(r, o), a
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), t
            }(C);
        var M = function(e) {
            function t(n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, e.call(this, {}));
                return r.data.phases = t.mergePhasesWithoutIndex(n), r.data.phases = JSON.stringify(r.data.phases), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), t.mergePhasesWithoutIndex = function(e) {
                var n = {},
                    r = e,
                    o = Array.isArray(r),
                    i = 0;
                for (r = o ? r : r[Symbol.iterator]();;) {
                    var a;
                    if (o) {
                        if (i >= r.length) break;
                        a = r[i++]
                    } else {
                        if ((i = r.next()).done) break;
                        a = i.value
                    }
                    var s = a;
                    t.deleteIndexFrom(s), n = Object.assign(n, s)
                }
                return n
            }, t.deleteIndexFrom = function(e) {
                delete e[Object.getOwnPropertyNames(e)[0]].index
            }, t
        }(h);
        var F = 11,
            H = function(e) {
                function t(n) {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, e.call(this, F, n))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), t
            }(b);
        var R = 15,
            U = function(e) {
                function t(n) {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, e.call(this, R, n))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), t
            }(b);
        var V = 16,
            W = function(e) {
                function t(n) {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, e.call(this, V, n))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), t
            }(b);
        var B = function(e) {
                function t(n) {
                    var r = n.appId,
                        o = n.widgetId,
                        i = n.isServerSide,
                        a = n.widgetArray;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var s = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, e.call(this));
                    return s.data = s._filterUndefined({
                        appId: r,
                        widgetId: o,
                        isServerSide: i,
                        widgetArray: a
                    }), s
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), t.prototype._filterUndefined = function(e) {
                    var t = {};
                    return Object.keys(e).forEach(function(n) {
                        e[n] && (t[n] = e[n])
                    }), t
                }, t
            }(h),
            z = function(e) {
                try {
                    return Object(r.a)().localStorage && Object(r.a)().localStorage.getItem(e)
                } catch (e) {}
            },
            X = function(e, t) {
                try {
                    return Object(r.a)().localStorage && Object(r.a)().localStorage.setItem(e, t)
                } catch (e) {}
            },
            q = {
                getSessionId: function() {
                    var e = void 0 !== Object(r.a)() && Object(r.a)().fedops && Object(r.a)().fedops.sessionId;
                    return e = (e = e || z("fedops.logger.sessionId")) || this.generateGuid(), X("fedops.logger.sessionId", e), e
                },
                generateGuid: function() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                        var t = 16 * Math.random() | 0;
                        return ("x" === e ? t : 3 & t | 8).toString(16)
                    })
                }
            };
        var G = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.appName = t, this.phases = new Map, this.indexToKey = new Map
                }
                return e._getIndexForPhase = function(e) {
                    var t = e.name,
                        n = e.appId,
                        r = void 0 === n ? "" : n,
                        o = e.widgetId;
                    return t + "_" + r + "_" + (void 0 === o ? "" : o)
                }, e.prototype.getAppLoadingPhaseData = function(t) {
                    var n = t.name,
                        r = t.appId,
                        o = t.widgetId;
                    return this.phases.get(e._getIndexForPhase({
                        name: n,
                        appId: r,
                        widgetId: o
                    }))
                }, e.prototype.saveLoadingPhase = function(t) {
                    var n = t.name,
                        r = t.appId,
                        o = t.widgetId,
                        i = e._getIndexForPhase({
                            name: n,
                            appId: r,
                            widgetId: o
                        });
                    if (!this.phases.has(i)) {
                        var a = this.phases.size;
                        this.phases.set(i, {
                            name: n,
                            phaseStartTime: p.now(),
                            index: a
                        }), this.indexToKey.set(a, i)
                    }
                }, e.prototype.endLoadingPhase = function(t) {
                    var n = t.name,
                        r = t.appId,
                        o = t.widgetId,
                        i = t.widgetArray,
                        a = e._getIndexForPhase({
                            name: n,
                            appId: r,
                            widgetId: o
                        });
                    if (this.phases.has(a) && !this.phases.get(a).duration) {
                        var s = this.phases.get(a);
                        s.duration = p.now() - s.phaseStartTime, i && (s.widgetArray = i), o && (s.widgetId = o), this.phases.set(a, s)
                    }
                }, e.prototype.getNextPhaseToReport = function() {
                    var e = this.phases.size - 1,
                        t = this.indexToKey.get(e);
                    return this.phases.get(t)
                }, e.prototype.getPhasePreviousTo = function(t) {
                    var n = t.name,
                        r = t.appId,
                        o = t.widgetId,
                        i = this.phases.get(e._getIndexForPhase({
                            name: n,
                            appId: r,
                            widgetId: o
                        })),
                        a = this.indexToKey.get(i.index - 1);
                    return this.phases.get(a)
                }, e.prototype.getPhases = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).appId;
                    return Array.from(this.phases).filter(function(t) {
                        var n = t[0].split("_")[1];
                        return e && n === e || !e
                    }).map(function(e) {
                        return function(e) {
                            var t;
                            return (t = {})[e.name] = e, t
                        }(e[1])
                    })
                }, e.prototype.createCodeParsingPhaseIfNotExist = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.appId,
                        r = t.widgetId,
                        o = e._getIndexForPhase({
                            name: "codeParsingPhase",
                            appId: n,
                            widgetId: r
                        });
                    this.phases.has(o) || (this.phases.set(o, {
                        phaseStartTime: Object(d.a)(this.appName),
                        index: 0,
                        name: "codeParsingPhase"
                    }), this.indexToKey.set(0, o))
                }, e
            }(),
            J = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }();
        var K = function(e, t) {
                if (e) return e(t)
            },
            $ = function() {
                function e(t, n, r, o) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var i = {
                            appId: null,
                            widgetId: null,
                            metasiteId: null,
                            sessionId: q.getSessionId(),
                            isServerSide: null,
                            disableAutoLoadFinish: !1,
                            phasesConfig: Q.SEND_ON_START,
                            interactionTimeout: null,
                            timeoutHook: null,
                            startHook: null,
                            endHook: null,
                            isPersistent: !1
                        },
                        a = Object.assign({}, i, o);
                    this.appName = t, this.appVersion = n, this.appId = a.appId, this.widgetId = a.widgetId, this.metasiteId = a.metasiteId, this.isServerSide = a.isServerSide, this.params = {
                        sessionId: a.sessionId
                    }, this.disableAutoLoadFinish = a.disableAutoLoadFinish, this.phasesConfig = a.phasesConfig, this._appLoadedCalled = {}, this.reporter = r || new u, this.loadingPhases = new G(t), this.dataSourceBase = new m({
                        appName: t
                    }), this._outgoingInteractions = {}, this.interactionTimeout = a.interactionTimeout, this.timeoutHook = a.timeoutHook, this.startHook = a.startHook, this.endHook = a.endHook, this.isPersistent = a.isPersistent, this.times = new l(t)
                }
                return e.prototype._report = function(e, t) {
                    return this.reporter.report(e.mergeItems(), t)
                }, e.prototype.getAppName = function() {
                    return this.appName
                }, e.prototype.getAppVersion = function() {
                    return this.appVersion
                }, e.prototype.getReporter = function() {
                    return this.reporter
                }, e.prototype.getParam = function(e) {
                    return this.params[e]
                }, e.prototype._isDisableAutoLoadFinish = function() {
                    return this.disableAutoLoadFinish
                }, e.prototype.isDisableAutoLoadFinish = function() {
                    return this._isDisableAutoLoadFinish()
                }, e.prototype.reportNetworkAnalysis = function() {
                    var e = this,
                        t = p.getResources();
                    setTimeout(function() {
                        try {
                            var n = new j(e.sessionId),
                                r = n.performNetworkAnalysis(t);
                            if (!r) return;
                            var o = e.dataSource.addItem(n).addItem(r);
                            e._report(o)
                        } catch (e) {
                            console.error("[fedops] Failed to report resource metrics", e)
                        }
                    }, 1e3)
                }, e.prototype.appLoadStarted = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).appId;
                    this.times.setLoadStarted();
                    var t = this.dataSource.addItem(new T(this.sessionId)).addItem(new B({
                        appId: e || this.appId,
                        widgetId: this.widgetId,
                        isServerSide: this.isServerSide
                    }));
                    return e && t.addItem(new h({
                        appName: e
                    })), this._report(t, this.isPersistent ? i : o)
                }, e.prototype.appLoaded = function() {
                    var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).appId;
                    if (!this._appLoadedCalled[t] && !this._appLoadedCalled[this.appName]) {
                        e._clearLoadTimeout(), e._markAndMeasureAppLoad(), this._appLoadedCalled[t || this.appName] = !0, this._sendLastAppLoadPhaseIfNeeded(), this.reportNetworkAnalysis();
                        var n = this.dataSource.addItem(new H(this.sessionId)).addItem(new B({
                            appId: t || this.appId,
                            widgetId: this.widgetId,
                            isServerSide: this.isServerSide
                        })).addItem(new k(this.times.getAppLoadTime()).setFirstRequestDuration(this.times.getFirstRequestDuration()));
                        if (t && n.addItem(new h({
                                appName: t
                            })), this.phasesConfig === Q.SEND_ON_APP_LOADED) {
                            var r = this.loadingPhases.getPhases({
                                appId: t
                            });
                            r.length > 0 && n.addItem(new M(r))
                        }
                        return this._report(n, this.isPersistent ? i : o)
                    }
                }, e.prototype.appLoadingPhaseStart = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.appId,
                        r = t.widgetId;
                    this.phasesConfig === Q.SEND_ON_START && this.loadingPhases.createCodeParsingPhaseIfNotExist({
                        appId: n,
                        widgetId: r
                    }), this.loadingPhases.saveLoadingPhase({
                        name: e,
                        appId: n,
                        widgetId: r
                    }), this._sendPreviousPhaseIfNeeded(e, {
                        appId: n,
                        widgetId: r
                    }), p.mark("[fedops] " + e + " started")
                }, e.prototype._sendPreviousPhaseIfNeeded = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.appId,
                        r = t.widgetId;
                    if (this.phasesConfig === Q.SEND_ON_START) {
                        var o = this.loadingPhases.getPhasePreviousTo({
                            name: e,
                            appId: n,
                            widgetId: r
                        });
                        p.mark("[fedops] " + o.name + " finished");
                        var i = new L(o),
                            a = new E(this.sessionId),
                            s = this.dataSource.addItem(i).addItem(a);
                        this._report(s)
                    }
                }, e.prototype.appLoadingPhaseFinish = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.appId,
                        r = t.widgetId,
                        a = t.widgetArray;
                    if (this.phasesConfig === Q.SEND_ON_START) throw new Error('To use appLoadingPhaseFinish you must create the logger with the "phasesConfig: SEND_ON_FINISH or SEND_ON_APP_LOADED" param');
                    if (p.mark("[fedops] " + e + " finished"), this.phasesConfig !== Q.SEND_ON_APP_LOADED) {
                        var s = this.loadingPhases.getAppLoadingPhaseData({
                            name: e,
                            appId: n,
                            widgetId: r
                        });
                        if (!s) throw new Error("Cannot report end of a phase that wasn't started. Phase " + e + " doesn't exist");
                        var u = new C(s),
                            c = new E(this.sessionId),
                            f = new B({
                                appId: n,
                                widgetId: r,
                                widgetArray: a,
                                isServerSide: this.isServerSide
                            }),
                            d = this.dataSource.addItem(u).addItem(c).addItem(f);
                        return this._report(d, this.isPersistent ? i : o)
                    }
                    this.loadingPhases.endLoadingPhase({
                        name: e,
                        appId: n,
                        widgetId: r,
                        widgetArray: a
                    })
                }, e.prototype._sendLastAppLoadPhaseIfNeeded = function() {
                    var e = this.loadingPhases.getNextPhaseToReport();
                    this.phasesConfig === Q.SEND_ON_START && e && "codeParsingPhase" !== e.name && this._report(this.dataSource.addItem(new L(e)).addItem(new E(this.sessionId)))
                }, e._clearLoadTimeout = function() {
                    Object(r.a)() && Object(r.a)().fedops && "function" == typeof Object(r.a)().fedops.clearLoadTimeout && Object(r.a)().fedops.clearLoadTimeout()
                }, e.prototype.clearResourceTimings = function() {
                    p.clearResourceTimings()
                }, e._markAndMeasureAppLoad = function() {
                    p.mark("[fedops] app-loaded"), p.measure("[fedops] app-loaded", "navigationStart", "[fedops] app-loaded")
                }, e.prototype.interactionStarted = function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = n.interactionTimeout,
                        o = n.startHook,
                        i = n.timeoutHook;
                    p.mark(e + " started");
                    var a = this.dataSource.addItem({
                        name: e
                    }).addItem(new U(this.sessionId));
                    return this._outgoingInteractions[e] = {
                        timestamp: p.now(),
                        timeout: r || this.interactionTimeout
                    }, this._report(a), K(o || this.startHook, {
                        name: e
                    }), {
                        timeoutId: function() {
                            if (r || t.interactionTimeout) return setTimeout(function() {
                                var n = t.dataSource.addItem({
                                    interactionName: e
                                }).addItem({
                                    errorType: "timeout"
                                }).addItem(new N(t.sessionId));
                                t._report(n), K(i || t.timeoutHook, {
                                    name: e,
                                    timeout: r || t.interactionTimeout
                                })
                            }, r || t.interactionTimeout)
                        }()
                    }
                }, e.prototype.interactionEnded = function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = n.timeoutId,
                        i = n.endHook;
                    p.mark(e + " ended"), p.measure(e + " duration", e + " started", e + " ended"), o && clearTimeout(o);
                    var a = this._outgoingInteractions[e] || function(n) {
                            return n.fedops && n.fedops.apps && n.fedops.apps[t.appName] && n.fedops.apps[t.appName].interactions && n.fedops.apps[t.appName].interactions[e]
                        }(Object(r.a)()),
                        s = a ? Math.floor(p.now() - a.timestamp) : "";
                    K(i || this.endHook, {
                        name: e,
                        duration: s,
                        timeout: this._outgoingInteractions[e] && this._outgoingInteractions[e].timeout
                    });
                    var u = this.dataSource.addItem({
                        name: e
                    }).addItem({
                        duration: s
                    }).addItem(new W(this.sessionId));
                    delete this._outgoingInteractions[e], this._report(u)
                }, e.prototype.getLoggerForWidget = function(t) {
                    var n = t.appName,
                        r = t.appId,
                        o = t.widgetId,
                        i = t.version;
                    return new e(n || r + "_" + o, i || this.getAppVersion(), new u(this.reporter.factory), {
                        isServerSide: this.isServerSide,
                        appId: r,
                        widgetId: o,
                        sessionId: this.sessionId,
                        phasesConfig: Q.SEND_ON_APP_LOADED,
                        isPersistent: this.isPersistent
                    })
                }, J(e, [{
                    key: "dataSource",
                    get: function() {
                        return this.dataSourceBase.clone()
                    }
                }, {
                    key: "sessionId",
                    get: function() {
                        return this.getParam("sessionId")
                    }
                }]), e
            }(),
            Q = {
                SEND_ON_START: "SEND_ON_START",
                SEND_ON_FINISH: "SEND_ON_FINISH",
                SEND_ON_APP_LOADED: "SEND_ON_APP_LOADED"
            };
        n.d(t, "create", function() {
            return Z
        }), n.d(t, "setFactory", function() {
            return ee
        }), n.d(t, "reportAppLoadStarted", function() {
            return te
        }), n.d(t, "phasesConfig", function() {
            return ne
        });
        var Y = void 0;

        function Z(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!e) return null;
            Object(d.c)(e);
            var n = function(e) {
                var t = e.biLoggerFactory,
                    n = e.baseUrl,
                    r = e.endpoint;
                return Y ? Y({
                    biLoggerFactory: t,
                    baseUrl: n
                }) : new u({
                    biLoggerFactory: t,
                    baseUrl: n,
                    endpoint: r
                })
            }(t);
            return new $(e, Object(r.a)().__CI_APP_VERSION__ || a, n, t)
        }

        function ee(e) {
            Y = e
        }

        function te(e) {
            Object(d.c)(e), Object(d.e)(e, p.responseEndTime() || p.now());
            var t = q.getSessionId();
            Object(d.d)(t);
            var n = "//frog.wix.com/fed?appName=" + e + "&src=72&evid=14&session_id=" + t + "&_=" + Math.random();
            Object(r.b)() ? Object(r.c)(n) : (new Image).src = n
        }
        var ne = Q
    }, function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function(e, t, n) {
        "use strict";
        var r = n(13),
            o = n(7);
        e.exports.BiLoggerFactory = r, e.exports.BiLogger = o, e.exports.factory = function() {
            return new r
        }
    }, function(e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }();
        var i = n(6),
            a = n(7),
            s = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this._publishers = [], this._validators = [], this._defaults = {}, this._events = {}
                }
                return o(e, [{
                    key: "addPublisher",
                    value: function(e) {
                        return i.defined(e, "Publisher must be provided"), i.ok("function" == typeof e, "Expected a publisher function"), this._publishers.push(e), this
                    }
                }, {
                    key: "addValidator",
                    value: function(e) {
                        return i.defined(e, "Validator must be provided"), i.ok("object" === (void 0 === e ? "undefined" : r(e)) && e, "Expected a validator object"), i.ok(e.execute && e.match, "Provided validator does not match the interface"), this._validators.push(e), this
                    }
                }, {
                    key: "setDefaults",
                    value: function(e) {
                        return i.defined(e, "Defaults must be provided"), i.object(e, "Defaults must be an object"), this._defaults = e, this
                    }
                }, {
                    key: "updateDefaults",
                    value: function(e) {
                        return i.defined(e, "Defaults must be provided"), i.object(e, "Defaults must be an object"), Object.assign(this._defaults, e), this
                    }
                }, {
                    key: "setEvents",
                    value: function(e) {
                        return i.defined(e, "Events must be provided"), i.object(e, "Events must be an object"), this._events = e, this
                    }
                }, {
                    key: "setDefaultValueTimeout",
                    value: function(e) {
                        return i.defined(e, "Default Value Timeout must be provided"), this._defaultValueTimeout = e, this
                    }
                }, {
                    key: "setDefaultContinueOnFail",
                    value: function(e) {
                        return i.defined(e, "Default Continue On Fail must be provided"), this._defaultContinueOnFail = e, this
                    }
                }, {
                    key: "setPublisherFailHandler",
                    value: function(e) {
                        return i.defined(e, "Publisher Fail Handler must be provided"), this._onPublisherFailHandler = e, this
                    }
                }, {
                    key: "logger",
                    value: function(e) {
                        return new a({
                            publishers: this._publishers,
                            validators: this._validators,
                            defaults: this._defaults,
                            events: this._events,
                            defaultValueTimeout: this._defaultValueTimeout,
                            defaultContinueOnFail: this._defaultContinueOnFail,
                            onPublisherFailHandler: this._onPublisherFailHandler
                        }, e)
                    }
                }]), e
            }();
        e.exports = s
    }, function(e, t, n) {
        "use strict";
        e.exports.mapValues = function(e, t) {
            return e ? Object.keys(e).reduce(function(n, r) {
                return n[r] = t(e[r], r, e), n
            }, {}) : {}
        }
    }, function(e, t, n) {
        "use strict";
        e.exports.timedPromise = function(e, t) {
            var n = t.message,
                r = t.timeout,
                o = new Promise(function(e, t) {
                    setTimeout(t, r, n ? "Timeout: " + n : "Timeout")
                });
            return Promise.race([e, o])
        }, e.exports.allAsObject = function(e) {
            var t = Object.keys(e);
            return Promise.all(t.map(function(t) {
                return e[t]
            })).then(function(e) {
                return e.reduce(function(e, n, r) {
                    return e[t[r]] = n, e
                }, {})
            })
        }
    }, function(e, t, n) {
        "use strict";
        e.exports.log = {
            error: function() {
                var e;
                console && console.error && (e = console).error.apply(e, arguments)
            }
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(3);
        t.defined = function(e, t) {
            if (void 0 === e) throw new r.AssertionError(t)
        }, t.object = function(e, t) {
            if (void 0 !== e && ("object" != typeof e || Array.isArray(e) || null === e)) throw new r.AssertionError(t)
        }, t.ok = function(e, t) {
            if (!e) throw new r.AssertionError(t)
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(8),
            o = n(5),
            i = n(2),
            a = n(3),
            s = n(4),
            u = n(19),
            c = function(e, t) {
                var n;
                return t && ("function" == typeof t ? n = t : t.postMessage && e.publishMethod === i.PublishMethods.PostMessage && (n = t.postMessage)),
                    function(e) {
                        return e = function(e) {
                            return void 0 === e && (e = {}), e.ms = Math.round(s.now()), e._lv = i.LoggerVersion, e
                        }(e), n ? n(e) : e
                    }
            };

        function f(e) {
            return void 0 === e && (e = {}),
                function(t, n) {
                    void 0 === n && (n = {});
                    var o = r.buildBiUrl(e, t, n);
                    return u.beaconTransport(o).catch(function() {
                        return u.pixelTransport(o, n.image)
                    })
                }
        }

        function p(e) {
            return void 0 === e && (e = {}),
                function(t, n) {
                    void 0 === n && (n = {});
                    var o = r.buildBiUrl(e, t, n);
                    return u.fetchTransport(o).catch(function(e) {
                        return e instanceof a.APINotSupportedError ? u.xhrTransport(o) : Promise.reject(e)
                    })
                }
        }

        function d() {
            return function(e, t) {
                return void 0 === t && (t = {}), u.postMessageTransport(e, t)
            }
        }
        t.imagePublisher = function(e) {
            return void 0 === e && (e = {}),
                function(t, n) {
                    void 0 === n && (n = {});
                    var o = r.buildBiUrl(e, t, n);
                    return u.pixelTransport(o, n.image)
                }
        }, t.beaconPublisher = f, t.fetchPublisher = p, t.xhrPublisher = function(e) {
            return void 0 === e && (e = {}),
                function(t, n) {
                    void 0 === n && (n = {});
                    var o = r.buildBiUrl(e, t, n);
                    return u.xhrTransport(o)
                }
        }, t.postMessagePublisher = d, t.resolvePublisher = function(e) {
            return (e.publishMethod === i.PublishMethods.PostMessage ? d : o.isWebWorker() ? p : f)(e)
        }, t.getPublisher = function(e, n) {
            var r = t.resolvePublisher(e),
                o = c(e, n);
            return function(e, t) {
                return r(o(e), t)
            }
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(4),
            o = n(3);
        t.beaconTransport = function(e) {
            return new Promise(function(t, n) {
                return r.sendBeacon(e) ? t() : n(new Error("Transport Error: Cannot send bi using beacon"))
            })
        }, t.pixelTransport = function(e, t) {
            return new Promise(function(n, r) {
                var o = t || new window.Image(0, 0);
                o.onload = function() {
                    return n()
                }, o.onerror = function() {
                    return r(new Error("Transport Error: Cannot send bi using pixel"))
                }, o.src = e
            })
        }, t.fetchTransport = function(e) {
            return "undefined" == typeof fetch ? Promise.reject(new o.APINotSupportedError("fetch")) : fetch(e, {
                credentials: "include",
                keepalive: !0
            }).then(function(e) {
                if (!e.ok) throw Error("Transport Error: Cannot send bi using fetch. Status: " + e.status)
            })
        }, t.xhrTransport = function(e) {
            return new Promise(function(t, n) {
                var r = location.protocol + ":" + e,
                    o = new XMLHttpRequest;
                o.open("GET", r), o.onload = function() {
                    t()
                }, o.onerror = function() {
                    n(new Error("Transport Error: Cannot send bi using xhr."))
                }, o.withCredentials = !0, o.send()
            })
        }, t.postMessageTransport = function(e, t) {
            var n = [e];
            return "undefined" == typeof WorkerGlobalScope && n.push("*"), self.postMessage.apply(self, n)
        }
    }])
});
//# sourceMappingURL=fedops-logger.bundle.min.js.map