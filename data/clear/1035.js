define("@ta/overlays.popover", ["@ta/events.event-boundary", "@ta/events.window", "@ta/overlays.attached-arrow-overlay", "@ta/overlays.managers", "@ta/overlays.pieces", "@ta/common.global"], function(e, t, o, n, r, s) {
    return function(e) {
        var t = {};

        function o(n) {
            if (t[n]) return t[n].exports;
            var r = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(r.exports, r, r.exports, o), r.l = !0, r.exports
        }
        return o.m = e, o.c = t, o.d = function(e, t, n) {
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
        }, o.t = function(e, t) {
            if (1 & t && (e = o(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (o.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var r in e) o.d(n, r, function(t) {
                    return e[t]
                }.bind(null, r));
            return n
        }, o.n = function(e) {
            var t = e && e.__esModule ? function t() {
                return e.default
            } : function t() {
                return e
            };
            return o.d(t, "a", t), t
        }, o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, o.p = "", o(o.s = "./packages/overlays/popover/Popover.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, t, o) {
            "use strict";

            function n(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            o.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, t, o) {
            "use strict";

            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            o.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, t, o) {
            "use strict";

            function n(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var n = t[o];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function r(e, t, o) {
                return t && n(e.prototype, t), o && n(e, o), e
            }
            o.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, t, o) {
            "use strict";

            function n(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            o.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, t, o) {
            "use strict";

            function n(e) {
                return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(e)
            }
            o.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, t, o) {
            "use strict";
            o.d(t, "a", function() {
                return r
            });
            var n = o("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function r(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Object(n.a)(e, t)
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, t, o) {
            "use strict";
            o.d(t, "a", function() {
                return s
            });
            var n = o("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                r = o("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function s(e, t) {
                return !t || "object" !== Object(n.a)(t) && "function" != typeof t ? Object(r.a)(e) : t
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, t, o) {
            "use strict";

            function n(e, t) {
                return (n = Object.setPrototypeOf || function e(t, o) {
                    return t.__proto__ = o, t
                })(e, t)
            }
            o.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, t, o) {
            "use strict";

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(e)
            }

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function e(t) {
                    return n(t)
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
                })(e)
            }
            o.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/react/index.js": function(e, t, o) {
            e.exports = o("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/classnames/classnames.jsx": function(e, t, o) {
            e.exports = o("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/overlays/popover/Popover.jsx": function(e, t, o) {
            "use strict";
            o.r(t);
            var n = o("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = o("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                s = o("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                a = o("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                l = o("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                u = o("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                i = o("./node_modules/react/index.js"),
                c = o("./packages/common/classnames/classnames.jsx"),
                p = o.n(c),
                f = o("@ta/events.event-boundary"),
                m = o.n(f),
                d = o("@ta/events.window"),
                b = o.n(d),
                v = o("@ta/overlays.attached-arrow-overlay"),
                y = o.n(v),
                h = o("@ta/overlays.managers"),
                j = o("@ta/overlays.pieces"),
                _ = function e(t) {
                    var o = t.name;
                    return i.createElement(h.Closer, {
                        name: o
                    }, function(e) {
                        return i.createElement("div", {
                            className: "".concat("overlays-popover-PopoverX__close--AKUEu"),
                            onClick: e
                        })
                    })
                };
            _.defaultProps = {
                name: void 0
            };
            var g = _;
            o.d(t, "getPosition", function() {
                return w
            });
            var O, w = function e(t) {
                    return void 0 !== t.above ? "above" : void 0 !== t.below ? "below" : void 0 !== t.leftOf ? "leftOf" : "rightOf"
                },
                x = (O = 0, function() {
                    return "popover_".concat(O += 1)
                }),
                P = function(e) {
                    function t(e) {
                        var o;
                        return Object(n.a)(this, t), (o = Object(s.a)(this, Object(a.a)(t).call(this, e))).state = {
                            name: x()
                        }, o
                    }
                    return Object(l.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this,
                                o = function e(o, n) {
                                    if (!n) return null;
                                    var r = p()("overlays-popover-Popover__popover--2R2s5", Object(u.a)({}, "overlays-popover-Popover__fullBleed--1KK8s", t.props.fullBleed)),
                                        s = i.createElement(m.a, {
                                            events: ["onClick", "onTouchStart"]
                                        }, i.createElement(y.a, {
                                            target: n,
                                            position: w(t.props),
                                            alignEdge: t.props.alignEdge,
                                            fixed: t.props.fixed,
                                            shiftX: t.props.shiftX,
                                            shiftY: t.props.shiftY,
                                            shiftArrow: t.props.shiftArrow,
                                            arrowType: t.props.arrowType
                                        }, i.createElement("div", {
                                            className: r,
                                            style: {
                                                minWidth: "".concat(t.props.minWidth || 0, "px")
                                            },
                                            onClick: t.props.onClick,
                                            onMouseLeave: t.props.onMouseLeave,
                                            onBlur: t.props.onMouseLeave
                                        }, t.props.contents(o), t.props.closeButton && i.createElement(g, {
                                            name: t.props.local ? t.state.name : void 0
                                        }))), i.createElement(b.a, {
                                            event: "click",
                                            callback: o
                                        }), i.createElement(b.a, {
                                            event: "touchstart",
                                            callback: o
                                        }));
                                    return t.props.backdrop ? i.createElement(j.Backdrop, {
                                        close: o,
                                        offsetTop: t.props.backdropOffset || 0
                                    }, s) : s
                                };
                            return i.createElement(h.Opener, {
                                name: this.state.name,
                                local: this.props.local
                            }, function(e, n) {
                                return i.createElement(h.Closer, {
                                    name: t.props.local ? t.state.name : void 0
                                }, function(r) {
                                    var s = function e() {
                                        r(), t.props.onClose && t.props.onClose()
                                    };
                                    return i.createElement(j.Target, null, function(a, l) {
                                        return i.createElement(i.Fragment, null, t.props.children(a, e, r, n), t.props.local ? i.createElement(h.Local, {
                                            name: t.state.name
                                        }, o(s, l)) : i.createElement(h.Global, {
                                            name: t.state.name
                                        }, o(s, l)))
                                    })
                                })
                            })
                        }
                    }]), t
                }(i.Component);
            Object(u.a)(P, "defaultProps", {
                above: void 0,
                below: void 0,
                rightOf: void 0,
                leftOf: void 0,
                alignEdge: void 0,
                local: !1,
                closeButton: !0,
                onClose: void 0,
                onClick: void 0,
                shiftX: 0,
                shiftY: 0,
                shiftArrow: 0,
                fixed: !1,
                arrowType: "large",
                backdrop: !1,
                fullBleed: !1,
                minWidth: 0
            }), t.default = P
        },
        "@ta/events.event-boundary": function(t, o) {
            t.exports = e
        },
        "@ta/events.window": function(e, o) {
            e.exports = t
        },
        "@ta/overlays.attached-arrow-overlay": function(e, t) {
            e.exports = o
        },
        "@ta/overlays.managers": function(e, t) {
            e.exports = n
        },
        "@ta/overlays.pieces": function(e, t) {
            e.exports = r
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = s
        }
    })
});
//# sourceMappingURL=overlays.popover.fed192e728.js.map