define("@ta/overlays.attached-overlay", ["@ta/overlays.pieces", "@ta/common.global"], function(e, t) {
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
        }, n.p = "", n(n.s = "./packages/overlays/attached-overlay/AttachedOverlay.jsx")
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
                return i
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function i(e, t) {
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
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/throttle/throttle.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/throttle/throttle.jsx")
        },
        "./packages/events/window-resize/WindowResize.jsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return f
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                c = n("./node_modules/react/index.js"),
                d = n("./packages/common/throttle/throttle.jsx"),
                p = n.n(d),
                f = function(e) {
                    function t() {
                        var e, n;
                        Object(o.a)(this, t);
                        for (var r = arguments.length, l = new Array(r), c = 0; c < r; c++) l[c] = arguments[c];
                        return n = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(l))), Object(a.a)(Object(u.a)(Object(u.a)(n)), "handleResize", p()(function() {
                            n.props.callback()
                        }, n.props.throttle || 0, n.props.useDebounce)), n
                    }
                    return Object(l.a)(t, e), Object(r.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            window.addEventListener("resize", this.handleResize)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            window.removeEventListener("resize", this.handleResize)
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return null
                        }
                    }]), t
                }(c.Component);
            Object(a.a)(f, "defaultProps", {
                throttle: 200,
                useDebounce: !1
            })
        },
        "./packages/overlays/attached-overlay/AttachedOverlay.jsx": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "WindowPadding", function() {
                return f
            }), n.d(t, "getPosition", function() {
                return b
            }), n.d(t, "getPositionForProps", function() {
                return h
            }), n.d(t, "default", function() {
                return j
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                c = n("./node_modules/react/index.js"),
                d = n("./packages/events/window-resize/WindowResize.jsx"),
                p = n("@ta/overlays.pieces"),
                f = 20,
                m = function e(t, n, o, r) {
                    var i = document && (r ? document.documentElement : document.body) || {},
                        s = i.clientHeight,
                        l = void 0 === s ? 0 : s,
                        u = i.clientWidth,
                        a = void 0 === u ? 0 : u,
                        c = window,
                        d = c.innerHeight,
                        p = void 0 === d ? 0 : d,
                        f = c.innerWidth,
                        m = void 0 === f ? 0 : f;
                    return "right" !== t || "right" !== n && "left" !== n ? "bottom" !== t || "top" !== n && "bottom" !== n ? o : r ? Math.max(l, p) - o : l - o : r ? Math.min(m, a) - o : a - o
                },
                b = function e(t, n, o, r, i) {
                    var s = t.getBoundingClientRect(),
                        l = window || {},
                        u = l.pageXOffset,
                        c = void 0 === u ? 0 : u,
                        d = l.pageYOffset,
                        p = void 0 === d ? 0 : d,
                        b = {
                            top: s.top + (r ? 0 : p),
                            left: s.left + (r ? 0 : c),
                            right: s.right + (r ? 0 : c),
                            bottom: s.bottom + (r ? 0 : p)
                        },
                        h = Object(a.a)({
                            position: r ? "fixed" : "absolute"
                        }, o, "".concat(m(o, n, b[n], r), "px"));
                    return i && "windowX" === i ? (h.left = "".concat(f, "px"), h.right = "".concat(f, "px")) : i ? h[i] = "".concat(m(i, i, b[i], r), "px") : "top" === n || "bottom" === n ? (h.left = "".concat(b.left + s.width / 2, "px"), h.transform = "translate(-50%)") : (h.top = "".concat(b.top + s.height / 2, "px"), h.transform = "translate(0,-50%)"), h
                },
                h = function e(t) {
                    return "above" === t.position ? b(t.target, "top", "bottom", t.fixed, t.alignEdge) : "leftOf" === t.position ? b(t.target, "left", "right", t.fixed, t.alignEdge) : "rightOf" === t.position ? b(t.target, "right", "left", t.fixed, t.alignEdge) : b(t.target, "bottom", "top", t.fixed, t.alignEdge)
                },
                y = [{
                    property: "left",
                    timing: 250
                }, {
                    property: "top",
                    timing: 250
                }],
                j = function(e) {
                    function t(e) {
                        var n;
                        return Object(o.a)(this, t), n = Object(r.a)(this, Object(i.a)(t).call(this, e)), Object(a.a)(Object(u.a)(Object(u.a)(n)), "setPosition", function() {
                            n.setState({
                                position: h(n.props)
                            })
                        }), n.state = {
                            position: h(e)
                        }, n
                    }
                    return Object(l.a)(t, e), Object(s.a)(t, null, [{
                        key: "getDerivedStateFromProps",
                        value: function e(t) {
                            return t.position ? {
                                position: h(t)
                            } : null
                        }
                    }]), Object(s.a)(t, [{
                        key: "render",
                        value: function e() {
                            return this.state && null !== this.state.position ? c.createElement(p.Overlay, {
                                position: this.state.position,
                                transitionProperties: this.props.animated ? y : [],
                                overlayType: this.props.overlayType
                            }, this.props.children, c.createElement(d.a, {
                                callback: this.setPosition,
                                throttle: 100
                            })) : null
                        }
                    }]), t
                }(c.Component);
            Object(a.a)(j, "defaultProps", {
                alignEdge: void 0,
                fixed: !1,
                animated: !1,
                overlayType: "modal"
            })
        },
        "@ta/overlays.pieces": function(t, n) {
            t.exports = e
        },
        "dll-reference @ta/common.global": function(e, n) {
            e.exports = t
        }
    })
});
//# sourceMappingURL=overlays.attached-overlay.2e9d34d400.js.map