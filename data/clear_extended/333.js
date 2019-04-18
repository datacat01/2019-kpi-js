define("@ta/platform.rum", ["@ta/common.global"], function(e) {
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
            var t = e && e.__esModule ? function t() {
                return e.default
            } : function t() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = "./packages/platform/rum/rum.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, t, n) {
            "use strict";

            function r(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function o(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), e
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(e)
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function o(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Object(r.a)(e, t)
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), o.forEach(function(t) {
                        Object(r.a)(e, t, n[t])
                    })
                }
                return e
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function i(e, t) {
                return !t || "object" !== Object(r.a)(t) && "function" != typeof t ? Object(o.a)(e) : t
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, t, n) {
            "use strict";

            function r(e, t) {
                return (r = Object.setPrototypeOf || function e(t, n) {
                    return t.__proto__ = n, t
                })(e, t)
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(e)
            }

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function e(t) {
                    return r(t)
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : r(t)
                })(e)
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/react-redux/es/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./node_modules/tti-polyfill/tti-polyfill.js": function(e, t, n) {
            (function(n) {
                var r;
                ! function() {
                    var o = "undefined" != typeof window && window === this ? this : void 0 !== n && null != n ? n : this,
                        i = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
                            e != Array.prototype && e != Object.prototype && (e[t] = n.value)
                        };

                    function a() {
                        a = function() {}, o.Symbol || (o.Symbol = u)
                    }
                    var s = 0;

                    function u(e) {
                        return "jscomp_symbol_" + (e || "") + s++
                    }

                    function c() {
                        a();
                        var e = o.Symbol.iterator;
                        e || (e = o.Symbol.iterator = o.Symbol("iterator")), "function" != typeof Array.prototype[e] && i(Array.prototype, e, {
                            configurable: !0,
                            writable: !0,
                            value: function() {
                                return l(this)
                            }
                        }), c = function() {}
                    }

                    function l(e) {
                        var t = 0;
                        return function n(e) {
                            return c(), (e = {
                                next: e
                            })[o.Symbol.iterator] = function() {
                                return this
                            }, e
                        }(function() {
                            return t < e.length ? {
                                done: !1,
                                value: e[t++]
                            } : {
                                done: !0
                            }
                        })
                    }

                    function f(e) {
                        c();
                        var t = e[Symbol.iterator];
                        return t ? t.call(e) : l(e)
                    }

                    function d(e) {
                        if (!(e instanceof Array)) {
                            e = f(e);
                            for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                            e = n
                        }
                        return e
                    }
                    var m = 0,
                        p = "img script iframe link audio video source".split(" ");

                    function b(e, t) {
                        for (var n = (e = f(e)).next(); !n.done; n = e.next())
                            if (n = n.value, t.includes(n.nodeName.toLowerCase()) || b(n.children, t)) return !0;
                        return !1
                    }

                    function y(e, t) {
                        if (2 < e.length) return performance.now();
                        for (var n = [], r = (t = f(t)).next(); !r.done; r = t.next()) r = r.value, n.push({
                            timestamp: r.start,
                            type: "requestStart"
                        }), n.push({
                            timestamp: r.end,
                            type: "requestEnd"
                        });
                        for (r = (t = f(e)).next(); !r.done; r = t.next()) n.push({
                            timestamp: r.value,
                            type: "requestStart"
                        });
                        for (n.sort(function(e, t) {
                                return e.timestamp - t.timestamp
                            }), e = e.length, t = n.length - 1; 0 <= t; t--) switch (r = n[t], r.type) {
                            case "requestStart":
                                e--;
                                break;
                            case "requestEnd":
                                if (2 < ++e) return r.timestamp;
                                break;
                            default:
                                throw Error("Internal Error: This should never happen")
                        }
                        return 0
                    }

                    function h(e) {
                        e = e || {}, this.w = !!e.useMutationObserver, this.u = e.minValue || null, e = window.__tti && window.__tti.e;
                        var t = window.__tti && window.__tti.o;
                        this.a = e ? e.map(function(e) {
                                return {
                                    start: e.startTime,
                                    end: e.startTime + e.duration
                                }
                            }) : [], t && t.disconnect(), this.b = [], this.f = new Map, this.j = null, this.v = -1 / 0, this.i = !1, this.h = this.c = this.s = null,
                            function n(e, t) {
                                var n = XMLHttpRequest.prototype.send,
                                    r = m++;
                                XMLHttpRequest.prototype.send = function(o) {
                                    for (var i = [], a = 0; a < arguments.length; ++a) i[a - 0] = arguments[a];
                                    var s = this;
                                    return e(r), this.addEventListener("readystatechange", function() {
                                        4 === s.readyState && t(r)
                                    }), n.apply(this, i)
                                }
                            }(this.m.bind(this), this.l.bind(this)),
                            function r(e, t) {
                                var n = fetch;
                                fetch = function(r) {
                                    for (var o = [], i = 0; i < arguments.length; ++i) o[i - 0] = arguments[i];
                                    return new Promise(function(r, i) {
                                        var a = m++;
                                        e(a), n.apply(null, [].concat(d(o))).then(function(e) {
                                            t(a), r(e)
                                        }, function(e) {
                                            t(e), i(e)
                                        })
                                    })
                                }
                            }(this.m.bind(this), this.l.bind(this)),
                            function o(e) {
                                e.c = new PerformanceObserver(function(t) {
                                    for (var n = (t = f(t.getEntries())).next(); !n.done; n = t.next())
                                        if ("resource" === (n = n.value).entryType && (e.b.push({
                                                start: n.fetchStart,
                                                end: n.responseEnd
                                            }), g(e, y(e.g, e.b) + 5e3)), "longtask" === n.entryType) {
                                            var r = n.startTime + n.duration;
                                            e.a.push({
                                                start: n.startTime,
                                                end: r
                                            }), g(e, r + 5e3)
                                        }
                                }), e.c.observe({
                                    entryTypes: ["longtask", "resource"]
                                })
                            }(this), this.w && (this.h = function i(e) {
                                var t = new MutationObserver(function(t) {
                                    for (var n = (t = f(t)).next(); !n.done; n = t.next()) "childList" == (n = n.value).type && b(n.addedNodes, p) ? e(n) : "attributes" == n.type && p.includes(n.target.tagName.toLowerCase()) && e(n)
                                });
                                return t.observe(document, {
                                    attributes: !0,
                                    childList: !0,
                                    subtree: !0,
                                    attributeFilter: ["href", "src"]
                                }), t
                            }(this.B.bind(this)))
                    }

                    function v(e) {
                        e.i = !0;
                        var t = 0 < e.a.length ? e.a[e.a.length - 1].end : 0,
                            n = y(e.g, e.b);
                        g(e, Math.max(n + 5e3, t))
                    }

                    function g(e, t) {
                        !e.i || e.v > t || (clearTimeout(e.j), e.j = setTimeout(function() {
                            var t = performance.timing.navigationStart,
                                n = y(e.g, e.b);
                            if (t = (window.a && window.a.A ? 1e3 * window.a.A().C - t : 0) || performance.timing.domContentLoadedEventEnd - t, e.u) var r = e.u;
                            else r = performance.timing.domContentLoadedEventEnd ? (r = performance.timing).domContentLoadedEventEnd - r.navigationStart : null;
                            var o = performance.now();
                            null === r && g(e, Math.max(n + 5e3, o + 1e3));
                            var i = e.a;
                            (n = 5e3 > o - n ? null : 5e3 > o - (n = i.length ? i[i.length - 1].end : t) ? null : Math.max(n, r)) && (e.s(n), clearTimeout(e.j), e.i = !1, e.c && e.c.disconnect(), e.h && e.h.disconnect()), g(e, performance.now() + 1e3)
                        }, t - performance.now()), e.v = t)
                    }
                    h.prototype.getFirstConsistentlyInteractive = function() {
                        var e = this;
                        return new Promise(function(t) {
                            e.s = t, "complete" == document.readyState ? v(e) : window.addEventListener("load", function() {
                                v(e)
                            })
                        })
                    }, h.prototype.m = function(e) {
                        this.f.set(e, performance.now())
                    }, h.prototype.l = function(e) {
                        this.f.delete(e)
                    }, h.prototype.B = function() {
                        g(this, performance.now() + 5e3)
                    }, o.Object.defineProperties(h.prototype, {
                        g: {
                            configurable: !0,
                            enumerable: !0,
                            get: function() {
                                return [].concat(d(this.f.values()))
                            }
                        }
                    });
                    var w = {
                        getFirstConsistentlyInteractive: function(e) {
                            return e = e || {}, "PerformanceLongTaskTiming" in window ? new h(e).getFirstConsistentlyInteractive() : Promise.resolve(null)
                        }
                    };
                    e.exports ? e.exports = w : void 0 === (r = function() {
                        return w
                    }.apply(t, [])) || (e.exports = r)
                }()
            }).call(this, n("./node_modules/webpack/buildin/global.js"))
        },
        "./node_modules/webpack/buildin/global.js": function(e, t) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || Function("return this")() || (0, eval)("this")
            } catch (e) {
                "object" == typeof window && (n = window)
            }
            e.exports = n
        },
        "./packages/common/features/features.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/features/features.jsx")
        },
        "./packages/platform/rum/rum.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                f = n("./node_modules/react/index.js"),
                d = n("./node_modules/react-redux/es/index.js"),
                m = n("./packages/common/features/features.jsx"),
                p = n("./node_modules/tti-polyfill/tti-polyfill.js"),
                b = n.n(p),
                y = new Set(["time-to-interactive", "first-paint", "first-contentful-paint", "load"]),
                h = function e(t, n) {
                    var r = n.filter(function(e) {
                        if ("resource" === e.entryType) {
                            if (Object(m.featureIsEnabled)("web_performance_rum_resource_logging")) {
                                if (e.name.includes("components/dist")) return !0;
                                if (Object(m.featureIsEnabled)("web_performance_rum_media_logging") && function e(t) {
                                        return !!t.includes("media-cdn.tripadvisor.com/media/") || !!t.includes("video-direct-tacdn-com.global.ssl.fastly.net/media/") || !!t.includes("static.tacdn.com/img2/")
                                    }(e.name)) return !0
                            }
                            return !1
                        }
                        return y.has(e.name) || "measure" === e.entryType && e.name.startsWith("👷") || "navigation" === e.entryType
                    });
                    return r.length > 0 ? r.map(function(e) {
                        return "navigation" === e.entryType ? function e(t, n) {
                            return {
                                puid: t,
                                name: n.name,
                                dns: Math.round(n.domainLookupEnd - n.domainLookupStart),
                                ttfb: Math.round(n.responseStart - n.requestStart),
                                download: Math.round(n.responseEnd - n.responseStart),
                                size: n.transferSize
                            }
                        }(t, e) : "resource" === e.entryType ? function e(t, n) {
                            return {
                                puid: t,
                                name: n.name.substring(n.name.indexOf("/", "https://".length)),
                                initiator: n.initiatorType,
                                blocked: Math.round(n.requestStart - n.connectEnd),
                                ttfb: Math.round(n.responseStart - n.requestStart),
                                download: Math.round(n.responseEnd - n.responseStart),
                                size: n.transferSize,
                                start: Math.round(n.startTime)
                            }
                        }(t, e) : function e(t, n) {
                            return {
                                puid: t,
                                name: n.name,
                                type: n.entryType,
                                start: Math.round(n.startTime),
                                duration: Math.round(n.duration)
                            }
                        }(t, e)
                    }) : []
                },
                v = function(e) {
                    function t() {
                        var e, n;
                        Object(o.a)(this, t);
                        for (var r = arguments.length, i = new Array(r), u = 0; u < r; u++) i[u] = arguments[u];
                        return n = Object(a.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(i))), Object(l.a)(Object(c.a)(Object(c.a)(n)), "state", {
                            pageLoad: null,
                            navigations: [],
                            resources: [],
                            timings: []
                        }), Object(l.a)(Object(c.a)(Object(c.a)(n)), "addEntriesToBuffer", function(e) {
                            var t = h(n.props.uid, e);
                            window.performance && window.performance.clearResourceTimings && window.performance.clearResourceTimings(), t.length > 0 && n.setState(function(e) {
                                return {
                                    navigations: e.navigations.concat(t.filter(function(e) {
                                        return "dns" in e
                                    })),
                                    resources: e.resources.concat(t.filter(function(e) {
                                        return "initiator" in e
                                    })),
                                    timings: e.timings.concat(t.filter(function(e) {
                                        return "duration" in e
                                    }))
                                }
                            })
                        }), n
                    }
                    return Object(u.a)(t, e), Object(i.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            var t = this;
                            this.setState({
                                pageLoad: Object(r.a)({}, this.props, {
                                    user_agent: window.navigator && window.navigator.userAgent ? window.navigator.userAgent : "unknown",
                                    connection_type: window.navigator && window.navigator.connection && window.navigator.connection.effectiveType ? window.navigator.connection.effectiveType : "unknown"
                                })
                            }), window.performance && window.performance.getEntries && this.addEntriesToBuffer(window.performance.getEntries());
                            var n = null;
                            "undefined" != typeof PerformanceObserver && (n = new PerformanceObserver(function(e) {
                                t.addEntriesToBuffer(e.getEntries())
                            })).observe({
                                entryTypes: ["paint", "resource", "mark", "measure"]
                            }), b.a.getFirstConsistentlyInteractive({}).then(function(e) {
                                e && window.performance && window.performance.mark && (window.performance.mark("time-to-interactive"), null !== n && n.disconnect())
                            }), window.navigator && window.navigator.sendBeacon && window.addEventListener("unload", function() {
                                window.navigator.sendBeacon("/data/1.0/rum", JSON.stringify(t.state))
                            }, !1)
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return null
                        }
                    }]), t
                }(f.Component);
            t.default = Object(d.connect)(function(e) {
                return {
                    uid: e.tracking.uid,
                    page: e.route.page,
                    locale: e.i18n.locale,
                    revision: "".concat(e.tracking.vcsBranch, "|").concat(e.tracking.vcsRevision),
                    is_logged_in: e.auth.isMember,
                    viewport_category: e.meta.device.viewportCategory,
                    is_webview: e.meta.isNativeWebview
                }
            }, {})(v)
        },
        "dll-reference @ta/common.global": function(t, n) {
            t.exports = e
        }
    })
});
//# sourceMappingURL=platform.rum.a6632da99a.js.map