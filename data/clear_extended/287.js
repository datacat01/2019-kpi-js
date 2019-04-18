define("@ta/common.indicator-dots", ["@ta/common.global"], function(e) {
    return function(e) {
        var t = {};

        function n(o) {
            if (t[o]) return t[o].exports;
            var r = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
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
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var r in e) n.d(o, r, function(t) {
                    return e[t]
                }.bind(null, r));
            return o
        }, n.n = function(e) {
            var t = e && e.__esModule ? function t() {
                return e.default
            } : function t() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = "./packages/common/indicator-dots/IndicatorDots.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, t, n) {
            "use strict";

            function o(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, t, n) {
            "use strict";

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, t, n) {
            "use strict";

            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function r(e, t, n) {
                return t && o(e.prototype, t), n && o(e, n), e
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, t, n) {
            "use strict";

            function o(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, t, n) {
            "use strict";

            function o(e) {
                return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(e)
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function r(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Object(o.a)(e, t)
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function s(e, t) {
                return !t || "object" !== Object(o.a)(t) && "function" != typeof t ? Object(r.a)(e) : t
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, t, n) {
            "use strict";

            function o(e, t) {
                return (o = Object.setPrototypeOf || function e(t, n) {
                    return t.__proto__ = n, t
                })(e, t)
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, t, n) {
            "use strict";

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(e)
            }

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" === o(Symbol.iterator) ? function e(t) {
                    return o(t)
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : o(t)
                })(e)
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/react-redux/es/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/classnames/classnames.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/common/indicator-dots/IndicatorDots.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                a = n("./node_modules/react/index.js"),
                l = n("./node_modules/react-redux/es/index.js"),
                m = n("./packages/common/classnames/classnames.jsx"),
                d = n.n(m);
            n.d(t, "getDotRange", function() {
                return f
            }), n.d(t, "DOT_SPACING", function() {
                return b
            }), n.d(t, "ACTIVE_DOT_SCALE", function() {
                return p
            }), n.d(t, "BOOKEND_DOT_SCALE", function() {
                return y
            }), n.d(t, "getDotStyle", function() {
                return j
            }), n.d(t, "IndicatorDotsUnconnected", function() {
                return _
            });
            var f = function e(t, n, o, r) {
                    var s = n - t,
                        u = r ? 0 : -.5,
                        c = Math.floor((t + u) / 2),
                        i = t - 1,
                        a = n - 1,
                        l = r ? -.5 : 0,
                        m = Math.floor((t + l) / 2),
                        d = Math.max(0, Math.min(s, o - c)),
                        f = Math.min(a, Math.max(i, o + m));
                    return Array(f - d + 1).fill().map(function(e, t) {
                        return d + t
                    })
                },
                b = 20,
                p = 1.3,
                y = 0,
                j = function e(t, n, o, r) {
                    var s, u = "".concat(r ? "-" : "").concat(b * t, "px");
                    return s = 0 === t || t === n + 1 ? y : o ? p : 1, {
                        transform: "translate3d(".concat(u, ", 0, 0) scale3d(").concat(s, ", ").concat(s, ", 1)")
                    }
                },
                _ = function(e) {
                    function t(e) {
                        var n;
                        return Object(o.a)(this, t), (n = Object(r.a)(this, Object(s.a)(t).call(this, e))).state = {
                            directionUp: !0,
                            numDots: e.numItems < e.numDots ? e.numItems : e.numDots,
                            currentIndex: e.currentIndex
                        }, n
                    }
                    return Object(c.a)(t, e), Object(u.a)(t, null, [{
                        key: "getDerivedStateFromProps",
                        value: function e(t, n) {
                            return {
                                directionUp: t.currentIndex >= n.currentIndex,
                                numDots: t.numItems < t.numDots ? t.numItems : t.numDots,
                                currentIndex: t.currentIndex
                            }
                        }
                    }]), Object(u.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this.props,
                                n = t.numItems,
                                o = t.rtl,
                                r = this.state,
                                s = r.numDots,
                                u = r.currentIndex,
                                c = r.directionUp;
                            if (s <= 1) return null;
                            var i = f(s, n, u, c);
                            i.unshift(i[0] - 1), i.push(i[s] + 1);
                            var l = i.map(function(e, t) {
                                var n = e === u;
                                return a.createElement("div", {
                                    key: "indicator-dot-".concat(e),
                                    className: d()("common-indicator-dots-IndicatorDots__dot--2HS5R", n ? "common-indicator-dots-IndicatorDots__active--1yzoF" : null),
                                    style: j(t, s, n, o)
                                })
                            });
                            return a.createElement("div", {
                                className: "common-indicator-dots-IndicatorDots__indicatorDots--28RDk"
                            }, a.createElement("div", {
                                className: "common-indicator-dots-IndicatorDots__dotWrapper--2hRVV",
                                style: {
                                    width: "".concat((s + 1) * b + 6, "px")
                                },
                                "data-clicksource": "IndicatorDot"
                            }, l))
                        }
                    }]), t
                }(a.PureComponent);
            Object(i.a)(_, "defaultProps", {
                rtl: !1
            }), t.default = Object(l.connect)(function(e) {
                return {
                    rtl: e.i18n.isRtl
                }
            })(_)
        },
        "dll-reference @ta/common.global": function(t, n) {
            t.exports = e
        }
    })
});
//# sourceMappingURL=common.indicator-dots.714ea74555.js.map