! function e(t, n) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = n();
    else if ("function" == typeof define && define.amd) define([], n);
    else {
        var r = n();
        for (var o in r)("object" == typeof exports ? exports : t)[o] = r[o]
    }
}(this, function() {
    return function(n) {
        var r = {};

        function o(e) {
            if (r[e]) return r[e].exports;
            var t = r[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
        }
        return o.m = n, o.c = r, o.d = function(e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, o.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, o.t = function(t, e) {
            if (1 & e && (t = o(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (o.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var r in t) o.d(n, r, function(e) {
                    return t[e]
                }.bind(null, r));
            return n
        }, o.n = function(t) {
            var e = t && t.__esModule ? function e() {
                return t.default
            } : function e() {
                return t
            };
            return o.d(e, "a", e), e
        }, o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, o.p = "", o(o.s = 846)
    }({
        117: function(e, t) {
            function n(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            e.exports = n
        },
        280: function(e, t, n) {
            var o = n(117);

            function r(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(e) {
                        o(t, e, n[e])
                    })
                }
                return t
            }
            e.exports = r
        },
        50: function(e, t) {
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
        },
        580: function(e, t) {
            e.exports = function e(t, n) {
                var r = "000000000" + t;
                return r.substr(r.length - n)
            }
        },
        610: function(e, t, n) {
            var i = n(678),
                a = n(580),
                r = 0,
                u = 4,
                c = 36,
                o = Math.pow(c, u);

            function s() {
                return a((Math.random() * o << 0).toString(c), u)
            }

            function p() {
                return r = r < o ? r : 0, ++r - 1
            }

            function f() {
                var e, t, n, r, o;
                return "c" + (new Date).getTime().toString(c) + a(p().toString(c), u) + i() + (s() + s())
            }
            f.slug = function e() {
                var t = (new Date).getTime().toString(36),
                    n = p().toString(36).slice(-4),
                    r = i().slice(0, 1) + i().slice(-1),
                    o = s().slice(-2);
                return t.slice(-2) + n + r + o
            }, f.isCuid = function e(t) {
                return "string" == typeof t && !!t.startsWith("c")
            }, f.isSlug = function e(t) {
                if ("string" != typeof t) return !1;
                var n = t.length;
                return 7 <= n && n <= 10
            }, f.fingerprint = i, e.exports = f
        },
        611: function(S, P, e) {
            (function(E) {
                var O, T;
                ! function() {
                    var t = "undefined" != typeof window && window === this ? this : void 0 !== E && null != E ? E : this,
                        n = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
                            e != Array.prototype && e != Object.prototype && (e[t] = n.value)
                        };

                    function r() {
                        r = function() {}, t.Symbol || (t.Symbol = e)
                    }
                    var o = 0;

                    function e(e) {
                        return "jscomp_symbol_" + (e || "") + o++
                    }

                    function i() {
                        r();
                        var e = t.Symbol.iterator;
                        e || (e = t.Symbol.iterator = t.Symbol("iterator")), "function" != typeof Array.prototype[e] && n(Array.prototype, e, {
                            configurable: !0,
                            writable: !0,
                            value: function() {
                                return a(this)
                            }
                        }), i = function() {}
                    }

                    function a(e) {
                        var t = 0;
                        return u(function() {
                            return t < e.length ? {
                                done: !1,
                                value: e[t++]
                            } : {
                                done: !0
                            }
                        })
                    }

                    function u(e) {
                        return i(), (e = {
                            next: e
                        })[t.Symbol.iterator] = function() {
                            return this
                        }, e
                    }

                    function c(e) {
                        i();
                        var t = e[Symbol.iterator];
                        return t ? t.call(e) : a(e)
                    }

                    function s(e) {
                        if (!(e instanceof Array)) {
                            e = c(e);
                            for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                            e = n
                        }
                        return e
                    }
                    var p = 0;

                    function f(o, i) {
                        var a = XMLHttpRequest.prototype.send,
                            u = p++;
                        XMLHttpRequest.prototype.send = function(e) {
                            for (var t = [], n = 0; n < arguments.length; ++n) t[n - 0] = arguments[n];
                            var r = this;
                            return o(u), this.addEventListener("readystatechange", function() {
                                4 === r.readyState && i(u)
                            }), a.apply(this, t)
                        }
                    }

                    function d(i, a) {
                        var u = fetch;
                        fetch = function(e) {
                            for (var o = [], t = 0; t < arguments.length; ++t) o[t - 0] = arguments[t];
                            return new Promise(function(t, n) {
                                var r = p++;
                                i(r), u.apply(null, [].concat(s(o))).then(function(e) {
                                    a(r), t(e)
                                }, function(e) {
                                    a(e), n(e)
                                })
                            })
                        }
                    }
                    var l = "img script iframe link audio video source".split(" ");

                    function v(e, t) {
                        for (var n = (e = c(e)).next(); !n.done; n = e.next())
                            if (n = n.value, t.includes(n.nodeName.toLowerCase()) || v(n.children, t)) return !0;
                        return !1
                    }

                    function y(n) {
                        var e = new MutationObserver(function(e) {
                            for (var t = (e = c(e)).next(); !t.done; t = e.next()) "childList" == (t = t.value).type && v(t.addedNodes, l) ? n(t) : "attributes" == t.type && l.includes(t.target.tagName.toLowerCase()) && n(t)
                        });
                        return e.observe(document, {
                            attributes: !0,
                            childList: !0,
                            subtree: !0,
                            attributeFilter: ["href", "src"]
                        }), e
                    }

                    function h(e, t) {
                        if (2 < e.length) return performance.now();
                        for (var n = [], r = (t = c(t)).next(); !r.done; r = t.next()) r = r.value, n.push({
                            timestamp: r.start,
                            type: "requestStart"
                        }), n.push({
                            timestamp: r.end,
                            type: "requestEnd"
                        });
                        for (r = (t = c(e)).next(); !r.done; r = t.next()) n.push({
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

                    function m(e) {
                        e = e || {}, this.w = !!e.useMutationObserver, this.u = e.minValue || null, e = window.__tti && window.__tti.e;
                        var t = window.__tti && window.__tti.o;
                        this.a = e ? e.map(function(e) {
                            return {
                                start: e.startTime,
                                end: e.startTime + e.duration
                            }
                        }) : [], t && t.disconnect(), this.b = [], this.f = new Map, this.j = null, this.v = -1 / 0, this.i = !1, this.h = this.c = this.s = null, f(this.m.bind(this), this.l.bind(this)), d(this.m.bind(this), this.l.bind(this)), b(this), this.w && (this.h = y(this.B.bind(this)))
                    }

                    function w(e) {
                        e.i = !0;
                        var t = 0 < e.a.length ? e.a[e.a.length - 1].end : 0,
                            n = h(e.g, e.b);
                        g(e, Math.max(n + 5e3, t))
                    }

                    function g(i, e) {
                        !i.i || i.v > e || (clearTimeout(i.j), i.j = setTimeout(function() {
                            var e = performance.timing.navigationStart,
                                t = h(i.g, i.b),
                                e = (window.a && window.a.A ? 1e3 * window.a.A().C - e : 0) || performance.timing.domContentLoadedEventEnd - e;
                            if (i.u) var n = i.u;
                            else n = performance.timing.domContentLoadedEventEnd ? (n = performance.timing).domContentLoadedEventEnd - n.navigationStart : null;
                            var r = performance.now();
                            null === n && g(i, Math.max(t + 5e3, r + 1e3));
                            var o = i.a;
                            (t = r - t < 5e3 ? null : r - (t = o.length ? o[o.length - 1].end : e) < 5e3 ? null : Math.max(t, n)) && (i.s(t), clearTimeout(i.j), i.i = !1, i.c && i.c.disconnect(), i.h && i.h.disconnect()), g(i, performance.now() + 1e3)
                        }, e - performance.now()), i.v = e)
                    }

                    function b(r) {
                        r.c = new PerformanceObserver(function(e) {
                            for (var t = (e = c(e.getEntries())).next(); !t.done; t = e.next())
                                if ("resource" === (t = t.value).entryType && (r.b.push({
                                        start: t.fetchStart,
                                        end: t.responseEnd
                                    }), g(r, h(r.g, r.b) + 5e3)), "longtask" === t.entryType) {
                                    var n = t.startTime + t.duration;
                                    r.a.push({
                                        start: t.startTime,
                                        end: n
                                    }), g(r, n + 5e3)
                                }
                        }), r.c.observe({
                            entryTypes: ["longtask", "resource"]
                        })
                    }
                    m.prototype.getFirstConsistentlyInteractive = function() {
                        var t = this;
                        return new Promise(function(e) {
                            t.s = e, "complete" == document.readyState ? w(t) : window.addEventListener("load", function() {
                                w(t)
                            })
                        })
                    }, m.prototype.m = function(e) {
                        this.f.set(e, performance.now())
                    }, m.prototype.l = function(e) {
                        this.f.delete(e)
                    }, m.prototype.B = function() {
                        g(this, performance.now() + 5e3)
                    }, t.Object.defineProperties(m.prototype, {
                        g: {
                            configurable: !0,
                            enumerable: !0,
                            get: function() {
                                return [].concat(s(this.f.values()))
                            }
                        }
                    });
                    var _ = {
                        getFirstConsistentlyInteractive: function(e) {
                            return e = e || {}, "PerformanceLongTaskTiming" in window ? new m(e).getFirstConsistentlyInteractive() : Promise.resolve(null)
                        }
                    };
                    S.exports ? S.exports = _ : void 0 === (T = function() {
                        return _
                    }.apply(P, O = [])) || (S.exports = T)
                }()
            }).call(this, e(50))
        },
        678: function(e, t, n) {
            var r = n(580),
                o = "object" == typeof window ? window : self,
                i = Object.keys(o).length,
                a, u = r(((navigator.mimeTypes ? navigator.mimeTypes.length : 0) + navigator.userAgent.length).toString(36) + i.toString(36), 4);
            e.exports = function e() {
                return u
            }
        },
        846: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(280),
                o = n.n(r),
                i = n(610),
                v = n.n(i),
                a = "/api/1/wp-rum",
                u = a + "/record",
                c = a + "/records",
                s = a + "/error",
                p = a + "/settings",
                f = function(e) {
                    return {
                        app: "a",
                        data: {
                            __encoding_action__: e,
                            __encoding_key__: "d"
                        },
                        event: "e",
                        pageLoadId: "pl",
                        ts: "t"
                    }
                },
                d, l, y = {
                    abTest: "ab",
                    connection: {
                        __encoding_action__: {
                            downlink: "do",
                            effectiveType: "ef",
                            rtt: "rtt",
                            saveData: "sd"
                        },
                        __encoding_key__: "con"
                    },
                    context: "ctx",
                    display: {
                        __encoding_action__: {
                            devicePixelRatio: "dpr",
                            screenHeight: "sh",
                            screenWidth: "sw",
                            viewportHeight: "vh",
                            viewportWidth: "vw"
                        },
                        __encoding_key__: "disp"
                    },
                    hash: "h",
                    mid: "mid",
                    pathname: "p"
                },
                h = {
                    delay: "d",
                    eventType: "et"
                },
                m = {
                    eventTime: "t",
                    eventType: "et"
                },
                w = {
                    connectEnd: "ce",
                    connectStart: "c",
                    decodedBodySize: "db",
                    domComplete: "dc",
                    domContentLoadedEventEnd: "de",
                    domContentLoadedEventStart: "ds",
                    domInteractive: "di",
                    domLoading: "d",
                    domainLookupEnd: "dle",
                    domainLookupStart: "dl",
                    encodedBodySize: "eb",
                    fetchStart: "f",
                    loadEventEnd: "le",
                    loadEventStart: "l",
                    navigationStart: "n",
                    navigationType: "nt",
                    nextHopProtocol: "nh",
                    redirectCount: "rc",
                    redirectEnd: "rde",
                    redirectStart: "rd",
                    requestStart: "r",
                    responseEnd: "re",
                    responseStart: "rs",
                    secureConnectionStart: "s",
                    supportLevel: "sl",
                    transferSize: "t",
                    unloadEventEnd: "ue",
                    unloadEventStart: "u",
                    visibilityStateOnDCL: "v"
                },
                g = {
                    duration: "d",
                    name: "n",
                    startTime: "st"
                },
                b = {
                    tti: "t"
                },
                _ = {
                    firstContentfulPaint: "fcp",
                    firstPaint: "fp"
                },
                E = {
                    eventType: "et",
                    resourceTiming: "r"
                },
                O = Object.keys(h),
                T = Object.keys(m),
                S = Object.keys(y),
                P = Object.keys(w),
                x = Object.keys(g),
                j = Object.keys(_),
                L = Object.keys(b),
                k = Object.keys(E),
                M = "userTiming",
                C = ["click", "mousedown", "keydown", "touchstart", "pointerdown"],
                N, B = "load",
                I = ["DOMContentLoaded", B],
                D = "beforeunload",
                A, q = ["first-paint", "first-contentful-paint"],
                R = [B, D, "resourcetimingbufferfull"],
                H = [B, D],
                F = "ss_ab",
                U = "SS_MID",
                z = 2e3,
                W = 3e4,
                J;

            function X(e) {
                return "number" == typeof e ? Math.round(e) : e
            }

            function G() {
                return !!(window.performance && window.performance.now && window.addEventListener)
            }

            function Z() {
                return !!(window.PerformanceMeasure && window.PerformanceMark && window.performance && window.performance.mark && window.performance.measure)
            }

            function V(e, t) {
                "function" == typeof window.dispatchEvent && "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent(e, {
                    detail: t
                }))
            }

            function Q(e, t) {
                var n = {};
                for (var r in e)
                    if (r in t) {
                        var o = e[r],
                            i = t[r],
                            a = void 0;
                        if ("object" == typeof o) {
                            var u = o.__encoding_action__;
                            if (o = o.__encoding_key__, "object" == typeof u) a = Q(u, i);
                            else {
                                if ("function" != typeof u) throw new Error("Invalid encoding map");
                                a = u(i)
                            }
                        } else a = Number.isInteger(i) ? i.toString(36) : i;
                        n["" + o] = a
                    } return n
            }
            Number.isInteger = Number.isInteger || function(e) {
                return "number" == typeof e && isFinite(e) && Math.floor(e) === e
            };
            var K = {};

            function Y(e, t) {
                try {
                    var n;
                    if ("function" == typeof navigator.sendBeacon)
                        if (navigator.sendBeacon(e, t)) return;
                    var r = new XMLHttpRequest;
                    r.open("POST", e, !0), r.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), r.send(t)
                } catch (e) {}
            }

            function $() {
                H.forEach(function(e) {
                    window.addEventListener(e, function() {
                        e === B ? J = window.setTimeout(te, W) : "number" == typeof J && (window.clearTimeout(J), J = void 0), te()
                    })
                })
            }

            function ee(e, t) {
                K.hasOwnProperty(e) || (K[e] = []), K[e].push(t)
            }

            function te() {
                for (var e in K) K.hasOwnProperty(e) && K[e].length && (Y(e, JSON.stringify(K[e])), K[e] = [])
            }

            function ne(e) {
                Y(s, e)
            }

            function re(e, t) {
                V("onRumCollectorData", t);
                var n = Q(e, t);
                if (!n) throw new Error("Data is empty");
                ee(c, n)
            }
            var oe = [];

            function ie() {
                return oe
            }

            function ae(e) {
                oe.push(e)
            }

            function ue(e, t, n, r) {
                var o = Object.freeze({
                    app: e,
                    data: r,
                    event: t,
                    pageLoadId: n,
                    ts: Date.now()
                });
                return ae(o), o
            }
            var ce, se = function() {
                    function e() {
                        this.requiresContext = !1, this.context = {}, this.deliveryBuffer = [], this.entryType = e.eventName, this.fireOnce = !1, this.gatherEvents = [], this.supportType = "PerformanceObserver" in window ? "observe" : "gather", this.encodeMap = f({}), this.appName = "", this.pageLoadId = ""
                    }
                    return e.prototype.getDeliveryBuffer = function() {
                        return this.deliveryBuffer
                    }, e.prototype.getEventName = function() {
                        return this.constructor.eventName
                    }, e.prototype.getEntryType = function() {
                        return this.entryType
                    }, e.prototype.getGatherEvents = function() {
                        return this.gatherEvents
                    }, e.prototype.getSupportType = function() {
                        return this.supportType
                    }, e.prototype.shouldFireOnce = function() {
                        return this.fireOnce
                    }, e.prototype.observerParse = function(e) {
                        return this.deliveryBuffer.push(e), !0
                    }, e.prototype.gather = function(e) {
                        return e
                    }, e.prototype.gatherParse = function(e) {
                        return this.deliveryBuffer.push(e), !0
                    }, e.prototype.deliver = function() {
                        for (; this.deliveryBuffer.length;) {
                            var e = this.deliveryBuffer.shift();
                            if (e) {
                                var t = ue(this.appName, this.getEventName(), this.pageLoadId, e);
                                re(this.getEncodeMap(), t)
                            }
                        }
                        this.deliveryBuffer = []
                    }, e.prototype.getEncodeMap = function() {
                        return this.encodeMap
                    }, e.prototype.setApp = function(e) {
                        return this.appName = e, this
                    }, e.prototype.setId = function(e) {
                        return this.pageLoadId = e, this
                    }, e.eventName = "", e
                }(),
                pe = (fe = function(e, t) {
                    return (fe = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    function n() {
                        this.constructor = e
                    }
                    fe(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                fe, de, le = function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e.gatherEvents = C, e.fireOnce = !0, e.encodeMap = f(h), G() ? e.supportType = "gather" : e.supportType = "", e
                    }
                    return pe(e, t), e.prototype.gather = function(e) {
                        var t = e.timeStamp,
                            n = 1e12 < t ? +new Date : window.performance.now(),
                            r, o;
                        return {
                            delay: Math.max(n - t, 0),
                            eventType: e.type
                        }
                    }, e.prototype.gatherParse = function(n) {
                        return this.deliveryBuffer.push(O.reduce(function(e, t) {
                            return t in n && (e[t] = X(n[t])), e
                        }, {})), !0
                    }, e.eventName = "firstInputDelay", e
                }(se),
                ve = (ye = function(e, t) {
                    return (ye = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    function n() {
                        this.constructor = e
                    }
                    ye(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                ye, he, me = function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e.gatherEvents = C, e.fireOnce = !0, e.encodeMap = f(m), G() ? e.supportType = "gather" : e.supportType = "", e
                    }
                    return ve(e, t), e.prototype.gather = function(e) {
                        var t, n;
                        return {
                            eventTime: window.performance.now(),
                            eventType: e.type
                        }
                    }, e.prototype.gatherParse = function(n) {
                        return this.deliveryBuffer.push(T.reduce(function(e, t) {
                            return t in n && (e[t] = X(n[t])), e
                        }, {})), !0
                    }, e.eventName = "firstInteraction", e
                }(se);

            function we(e) {
                var t = {};
                for (var n in e) n in e && (t[n] = e[n]);
                return t
            }
            var ge = (be = function(e, t) {
                    return (be = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    function n() {
                        this.constructor = e
                    }
                    be(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                be, _e, Ee = function(r) {
                    function e() {
                        var e, t = r.call(this) || this;
                        t.entryType = "navigation", t.gatherEvents = [B], t.encodeMap = f(w), t.supportLevel = -1, t.visibilityStateOnDCL = "", e = t.getNavigationLevel(), t.supportType = e[0], t.supportLevel = e[1];
                        var n = function() {
                            t.visibilityStateOnDCL = document.visibilityState || ""
                        };
                        return window.addEventListener("DOMContentLoaded", n, {
                            once: !0
                        }), t
                    }
                    return ge(e, r), e.prototype.observerParse = function(e) {
                        return this.parse(e)
                    }, e.prototype.gather = function() {
                        var e;
                        return we(e = 1 === this.supportLevel ? window.performance.timing : performance.getEntriesByType("navigation")[0])
                    }, e.prototype.gatherParse = function(e) {
                        return this.parse(e)
                    }, e.prototype.parse = function(n) {
                        "navigation" in performance && (n.navigationType = performance.navigation.type, n.redirectCount = performance.navigation.redirectCount), n.supportLevel = this.supportLevel;
                        var e = P.reduce(function(e, t) {
                            return t in n && ("number" == typeof n[t] && "navigationStart" !== t && n[t] >= n.navigationStart ? e[t] = X(n[t] - n.navigationStart) : e[t] = X(n[t])), e
                        }, {});
                        return e.visibilityStateOnDCL = this.visibilityStateOnDCL, this.deliveryBuffer.push(e), !0
                    }, e.prototype.getNavigationLevel = function() {
                        if (window.performance) {
                            if (window.performance.getEntriesByType && void 0 !== window.PerformanceNavigationTiming && window.performance.getEntriesByType(this.entryType)[0] instanceof PerformanceNavigationTiming) return [this.supportType, 2];
                            if (window.performance.timing) return ["gather", 1]
                        }
                        return ["", -1]
                    }, e.eventName = "navigation", e
                }(se);

            function Oe(e) {
                var t = new RegExp("(^| )" + e + "=([^;]+)"),
                    n = document.cookie.match(t);
                return n ? n[2] : ""
            }

            function Te(e) {
                return window.localStorage && window.localStorage.getItem ? window.localStorage.getItem(e) : null
            }
            var Se = (Pe = function(e, t) {
                    return (Pe = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    function n() {
                        this.constructor = e
                    }
                    Pe(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                Pe;

            function xe() {
                if (!window.atob) return null;
                var e = Te(F);
                if (e) try {
                    return JSON.parse(window.atob(e))
                } catch (e) {
                    return null
                }
                return null
            }

            function je() {
                var e = {},
                    t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                if (t) {
                    var n = (1e3 * t.downlink).toString();
                    e = {
                        downlink: parseInt(n, 10),
                        effectiveType: t.effectiveType,
                        rtt: t.rtt,
                        saveData: t.saveData
                    }
                }
                return e
            }

            function Le() {
                var e = window.devicePixelRatio,
                    t = window.screen,
                    n = t.width,
                    r = t.height,
                    o = document.documentElement,
                    i, a, u;
                return {
                    devicePixelRatio: e,
                    screenHeight: r,
                    screenWidth: n,
                    viewportHeight: o.clientHeight,
                    viewportWidth: o.clientWidth
                }
            }
            var ke, Me = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.requiresContext = !0, e.gatherEvents = [B], e.supportType = "gather", e.encodeMap = f(y), e
                    }
                    return Se(e, t), e.prototype.gather = function() {
                        var e = je(),
                            t = Le();
                        return {
                            abTest: xe(),
                            connection: e,
                            context: this.context,
                            display: t,
                            hash: window.location.hash || "",
                            mid: Oe(U),
                            pathname: window.location.pathname || ""
                        }
                    }, e.prototype.gatherParse = function(n) {
                        return this.deliveryBuffer.push(S.reduce(function(e, t) {
                            return t in n && (e[t] = n[t]), e
                        }, {})), !0
                    }, e.eventName = "pageLoad", e
                }(se),
                Ce = (Ne = function(e, t) {
                    return (Ne = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    function n() {
                        this.constructor = e
                    }
                    Ne(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                Ne, Be, Ie = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.entryType = "paint", e.supportType = "observe", e.encodeMap = f(_), e.paintsRetrieved = [], e
                    }
                    return Ce(e, t), e.prototype.observerParse = function(n) {
                        var e = n.name,
                            t = n.startTime;
                        if (q.indexOf(e) < 0) return !1;
                        this.paintsRetrieved.push(e), 0 === this.deliveryBuffer.length && this.deliveryBuffer.push(j.reduce(function(e, t) {
                            return t in n && (e[t] = n[t]), e
                        }, {}));
                        var r = e.replace(/-([a-zA-Z])/g, function(e, t) {
                            var n;
                            return t && t.toUpperCase() || e
                        });
                        return this.deliveryBuffer[0][r] = X(t), !(this.paintsRetrieved.length < q.length)
                    }, e.eventName = "paint", e
                }(se),
                De = n(611),
                Ae = (qe = function(e, t) {
                    return (qe = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    function n() {
                        this.constructor = e
                    }
                    qe(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                qe, Re = function(e) {
                    function t() {
                        var t = e.call(this) || this;
                        return t.entryType = "longtask", t.supportType = "observe", t.encodeMap = f(b), t.fireOnce = !0, window.PerformanceLongTaskTiming && window.PerformanceObserver ? (window.__tti = {
                            e: []
                        }, Object(De.getFirstConsistentlyInteractive)().then(function(e) {
                            t.parse({
                                tti: e
                            }), t.deliver()
                        })) : t.supportType = "", t
                    }
                    return Ae(t, e), t.prototype.observerParse = function(e) {
                        return window.__tti && (window.__tti.e = window.__tti.e.concat(e)), !1
                    }, t.prototype.parse = function(n) {
                        this.deliveryBuffer.push(L.reduce(function(e, t) {
                            return t in n && (e[t] = X(n[t])), e
                        }, {}))
                    }, t.eventName = "tti", t
                }(se),
                He, Fe = (Ue = function(e, t) {
                    return (Ue = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    function n() {
                        this.constructor = e
                    }
                    Ue(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                Ue, ze, We, Je = [le, me, Ee, Me, Ie, Re, function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e.entryType = "measure", e.gatherEvents = [M], e.encodeMap = f(g), Z() || (e.supportType = ""), e
                    }
                    return Fe(e, t), e.prototype.observerParse = function(e) {
                        return this.parse(e)
                    }, e.prototype.gather = function() {
                        var e;
                        return {
                            userTimingMeasures: window.performance.getEntriesByType("measure").filter(function(e) {
                                return e.name.substr && "rum-" === e.name.substr(0, 4)
                            }).map(function(e) {
                                return window.performance.clearMeasures(e.name), we(e)
                            })
                        }
                    }, e.prototype.gatherParse = function(e) {
                        var t = this,
                            n;
                        return e.userTimingMeasures.forEach(function(e) {
                            t.parse(e)
                        }), !0
                    }, e.prototype.parse = function(n) {
                        if (n.name.substr && "rum-" === n.name.substr(0, 4)) {
                            var e = x.reduce(function(e, t) {
                                return t in n && (e[t] = X(n[t])), e
                            }, {});
                            return this.deliveryBuffer.push(e), !0
                        }
                        return !1
                    }, e.eventName = "user", e
                }(se)];

            function Xe(e, t, n) {
                throw "object" == typeof e && "name" in e && (e.name = "RUMError[" + t + "]"), "object" == typeof e && "message" in e && (e.message += ": " + JSON.stringify(n)), e
            }

            function Ge(e, t) {
                var n = {
                    passive: !0,
                    capture: !0
                };

                function r() {
                    t(e), i()
                }

                function o() {
                    i()
                }

                function i() {
                    removeEventListener("pointerup", r, n), removeEventListener("pointercancel", o, n)
                }
                addEventListener("pointerup", r, n), addEventListener("pointercancel", o, n)
            }
            var Ze = function(i, a, u, c) {
                    return new(u || (u = Promise))(function(e, t) {
                        function n(e) {
                            try {
                                o(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function r(e) {
                            try {
                                o(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(t) {
                            t.done ? e(t.value) : new u(function(e) {
                                e(t.value)
                            }).then(n, r)
                        }
                        o((c = c.apply(i, a || [])).next())
                    })
                },
                Ve = function(e, n) {
                    var r = {
                            label: 0,
                            sent: function() {
                                if (1 & a[0]) throw a[1];
                                return a[1]
                            },
                            trys: [],
                            ops: []
                        },
                        o, i, a, t;
                    return t = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                        return this
                    }), t;

                    function u(t) {
                        return function(e) {
                            return c([t, e])
                        }
                    }

                    function c(t) {
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; r;) try {
                            if (o = 1, i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
                            switch (i = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return r.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++, i = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = r.ops.pop(), r.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = r.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        r.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && r.label < a[1]) {
                                        r.label = a[1], a = t;
                                        break
                                    }
                                    if (a && r.label < a[2]) {
                                        r.label = a[2], r.ops.push(t);
                                        break
                                    }
                                    a[2] && r.ops.pop(), r.trys.pop();
                                    continue
                            }
                            t = n.call(e, r)
                        } catch (e) {
                            t = [6, e], i = 0
                        } finally {
                            o = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }
                };

            function Qe(e) {
                return e + "-observer"
            }
            var Ke = [],
                Ye, $e = 2e3;

            function et(e) {
                Ke.push(e), Ye || (Ye = window.requestIdleCallback(tt, {
                    timeout: $e
                }))
            }

            function tt(e) {
                for (;
                    (0 < e.timeRemaining() || e.didTimeout) && Ke.length;) {
                    var t = Ke.shift();
                    t && t.deliver()
                }
                Ye = Ke.length ? window.requestIdleCallback(tt, {
                    timeout: $e
                }) : void 0
            }

            function nt(e) {
                window.requestIdleCallback ? et(e) : e.deliver()
            }

            function rt(t) {
                return Ze(this, void 0, void 0, function() {
                    var o;
                    return Ve(this, function(e) {
                        return o = t.appName, [2, new Promise(function(t, n) {
                            var r = new XMLHttpRequest;
                            r.timeout = z, r.onreadystatechange = function(e) {
                                4 === r.readyState && (200 === r.status ? t(JSON.parse(r.response)) : n(r.status))
                            }, r.ontimeout = function() {
                                n("Metric settings request timeout")
                            }, r.open("GET", p + "/" + o, !0), r.send()
                        })]
                    })
                })
            }

            function ot() {
                return "complete" === document.readyState
            }

            function it(l) {
                return Ze(this, void 0, void 0, function() {
                    var t, n, a, u, c, s, r, p, o, i, f, d;
                    return Ve(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return t = l.enabled, (n = void 0 === t || t) ? ($(), [4, rt(l).catch(function(e) {
                                    return {}
                                })]) : [2];
                            case 1:
                                if (a = e.sent(), u = l.appName || "", c = l.context || {}, s = v()(), r = Je.reduce(function(e, t) {
                                        var n, r = (a[t.eventName] || {}).enabled,
                                            o;
                                        if (void 0 === r || r) {
                                            var i = (new t).setApp(u).setId(s);
                                            i.requiresContext && (i.context = c), e.push(i)
                                        }
                                        return e
                                    }, []), p = [], r.forEach(function(i) {
                                        var e = i.getSupportType();
                                        if ("observe" === e) {
                                            var t = i.getEntryType(),
                                                a = Qe(t);
                                            p.push(t), window.addEventListener(a, function(e) {
                                                var t = e.detail,
                                                    n;
                                                try {
                                                    (n = i.observerParse(t)) && nt(i)
                                                } catch (e) {
                                                    var r = i.getDeliveryBuffer(),
                                                        o;
                                                    Xe(e, a, r || t || {})
                                                }
                                            })
                                        } else if ("gather" === e) {
                                            var o = i.getGatherEvents(),
                                                u = i.getEventName(),
                                                c = function(e) {
                                                    var t;
                                                    i.gatherParse(e) && nt(i)
                                                },
                                                s = function(e) {
                                                    var t;
                                                    try {
                                                        "pointerdown" === (t = i.gather(e)).eventType ? Ge(t, c) : c(t)
                                                    } catch (e) {
                                                        var n = i.getDeliveryBuffer(),
                                                            r;
                                                        Xe(e, u, n || t || {})
                                                    }
                                                    i.shouldFireOnce() && o.forEach(function(e) {
                                                        window.removeEventListener(e, s)
                                                    })
                                                };
                                            o.forEach(function(e) {
                                                -1 < I.indexOf(e) && ot() ? s({}) : window.addEventListener(e, s)
                                            })
                                        }
                                    }), "PerformanceObserver" in window && (i = function(e) {
                                        var t = e.entryType;
                                        return -1 < p.indexOf(t)
                                    }, f = function(e) {
                                        var t;
                                        return "navigation" === e.entryType
                                    }, (o = function(e) {
                                        e.forEach(function(e) {
                                            var t = new CustomEvent(Qe(e.entryType), {
                                                detail: e.toJSON()
                                            });
                                            window.dispatchEvent(t)
                                        })
                                    })(performance.getEntries().filter(function(e) {
                                        return i(e) && !f(e) || ot() && f(e)
                                    })), d = new window.PerformanceObserver(function(e) {
                                        o(e.getEntries())
                                    }), 0 < p.length)) try {
                                    d.observe({
                                        entryTypes: p
                                    })
                                } catch (e) {}
                                return [2]
                        }
                    })
                })
            }

            function at(e) {
                try {
                    if (!st()) return;
                    var t = "rum-start-" + e;
                    window.performance.mark(t)
                } catch (e) {
                    ne("RUMError[mark]: " + e)
                }
            }

            function ut(e) {
                try {
                    if (!st() || !ct()) return;
                    var t = "rum-start-" + e,
                        n = "rum-end-" + e,
                        r = "rum-" + e;
                    window.performance.mark(n);
                    try {
                        window.performance.measure(r, t, n)
                    } catch (e) {
                        if (!(e instanceof DOMException)) throw e;
                        window.performance.measure(r, "navigationStart", n)
                    }
                    var o = window.performance.getEntriesByName(r),
                        i = o[o.length - 1];
                    return V(M, i), i
                } catch (e) {
                    ne("RUMError[measure]: " + e)
                }
            }

            function ct() {
                return "performance" in window && "getEntries" in window.performance && "getEntriesByType" in window.performance && "getEntriesByName" in window.performance
            }

            function st() {
                return "mark" in window.performance && "measure" in window.performance
            }
            var pt = window.Static && window.Static.SQUARESPACE_CONTEXT;

            function ft() {
                return {
                    templateId: pt.templateId || ""
                }
            }

            function dt() {
                var e = pt.website,
                    t = void 0 === e ? {} : e;
                return {
                    authenticUrl: t.authenticUrl || "",
                    cloneable: t.cloneable || !1,
                    developerMode: t.developerMode || !1,
                    isHstsEnabled: t.isHstsEnabled || !1,
                    language: t.language || "",
                    timeZone: t.timeZone || "",
                    websiteId: t.id || "",
                    websiteType: t.websiteType || -1
                }
            }

            function lt() {
                var e = pt.websiteSettings,
                    t;
                return {
                    ampEnabled: (void 0 === e ? {} : e).ampEnabled || !1
                }
            }

            function vt() {
                var e = pt.collection,
                    t;
                return {
                    collectionType: (void 0 === e ? {} : e).type || -1
                }
            }

            function yt() {
                if (pt && window.blockedAssets && window.blockedAssets.length) {
                    var e = pt.impersonatedSession,
                        t = void 0 !== e && e,
                        n = pt.pageType;
                    it({
                        appName: "v7-user-sites",
                        context: o()({
                            impersonatedSession: t,
                            pageType: "number" == typeof n ? n : -1
                        }, ft(), dt(), lt(), vt())
                    })
                }
            }
            window.__DEV__ || yt()
        }
    })
});