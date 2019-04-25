define("@ta/social.overflow-ui", ["@ta/overlays.popover", "@ta/styleguide.icon", "@ta/common.global"], function(e, t, o) {
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
        }, o.p = "", o(o.s = "./packages/social/overflow-ui/index.jsx")
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
                return l
            });
            var n = o("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                r = o("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function l(e, t) {
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
        "./packages/common/throttle/throttle.jsx": function(e, t, o) {
            e.exports = o("dll-reference @ta/common.global")("./packages/common/throttle/throttle.jsx")
        },
        "./packages/events/window-scroll/WindowScroll.jsx": function(e, t, o) {
            "use strict";
            o.d(t, "a", function() {
                return d
            });
            var n = o("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = o("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                l = o("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                s = o("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                i = o("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                c = o("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                u = o("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                a = o("./node_modules/react/index.js"),
                f = o("./packages/common/throttle/throttle.jsx"),
                m = o.n(f),
                d = function(e) {
                    function t() {
                        var e, o;
                        Object(n.a)(this, t);
                        for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                        return o = Object(l.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(i))), Object(u.a)(Object(c.a)(Object(c.a)(o)), "handleScroll", o.props.throttle ? m()(function() {
                            o.props.callback()
                        }, o.props.throttle, o.props.useDebounce) : o.props.callback), o
                    }
                    return Object(i.a)(t, e), Object(r.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            window.addEventListener("scroll", this.handleScroll, this.props.useCapture), window.addEventListener("resize", this.handleScroll, this.props.useCapture)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            this.disableListeners()
                        }
                    }, {
                        key: "disableListeners",
                        value: function e() {
                            window.removeEventListener("scroll", this.handleScroll, this.props.useCapture), window.removeEventListener("resize", this.handleScroll, this.props.useCapture)
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return null
                        }
                    }]), t
                }(a.Component);
            Object(u.a)(d, "defaultProps", {
                throttle: 200,
                useDebounce: !1,
                useCapture: !1
            })
        },
        "./packages/social/overflow-ui/index.jsx": function(e, t, o) {
            "use strict";
            o.r(t);
            var n = o("./node_modules/react/index.js"),
                r = o("@ta/overlays.popover"),
                l = o.n(r),
                s = o("./packages/events/window-scroll/WindowScroll.jsx"),
                i = function e(t) {
                    var o = t.children,
                        r = t.close;
                    return n.createElement("ul", {
                        className: "social-overflow-ui-OverflowUIList__list--3bf2V"
                    }, o ? n.Children.map(o, function(e) {
                        return e ? n.cloneElement(e, {
                            close: r
                        }) : e
                    }) : null)
                };
            i.defaultProps = {
                children: void 0,
                close: function e() {}
            };
            var c = i,
                u = function e(t) {
                    var o = t.children,
                        r = t.overflowList,
                        i = t.closeOnScroll,
                        c = t.shiftX,
                        u = t.shiftY,
                        a = t.shiftArrow,
                        f = t.overflowDirection;
                    return n.createElement(l.a, {
                        below: "below" === f || void 0,
                        above: "above" === f || void 0,
                        alignEdge: "right",
                        shiftX: 10 + c,
                        shiftArrow: 10 + a,
                        shiftY: u,
                        arrowType: "small",
                        contents: function e(t) {
                            return r ? n.cloneElement(r, {
                                close: t
                            }) : null
                        },
                        closeButton: !1,
                        local: !0
                    }, function(e, t, r, l) {
                        return n.createElement(n.Fragment, null, o(e, function() {
                            l ? r() : t()
                        }), i && l && n.createElement(s.a, {
                            callback: r,
                            useCapture: !0
                        }))
                    })
                };
            u.defaultProps = {
                children: function e() {
                    return null
                },
                closeOnScroll: !1,
                overflowList: n.createElement(c, null),
                shiftX: 0,
                shiftY: 0,
                shiftArrow: 0,
                overflowDirection: "below"
            };
            var a = u,
                f = o("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                m = o("./packages/common/classnames/classnames.jsx"),
                d = o.n(m),
                p = o("@ta/styleguide.icon"),
                b = n.forwardRef(function(e, t) {
                    var o, r = e.onClick,
                        l = e.color,
                        s = void 0 === l ? "GRAY" : l;
                    return n.createElement("span", {
                        className: d()("social-overflow-ui-OverflowIcon__icon--3GiBe", (o = {}, Object(f.a)(o, "social-overflow-ui-OverflowIcon__green--1vak3", "GREEN" === s), Object(f.a)(o, "social-overflow-ui-OverflowIcon__gray--1tTeZ", "GRAY" === s), o)),
                        ref: t,
                        onClick: r
                    }, n.createElement(p.Icon, {
                        name: "more-horizontal"
                    }))
                }),
                v = function e(t) {
                    var o = t.children,
                        r = t.className,
                        l = t.closeOnScroll,
                        s = t.onClick,
                        i = t.popoverShiftX,
                        c = t.popoverShiftY,
                        u = t.popoverShiftArrow,
                        f = t.overflowDirection;
                    return n.createElement("div", {
                        className: "overflow ".concat(r || "")
                    }, n.createElement(a, {
                        overflowList: o,
                        closeOnScroll: l,
                        shiftX: i,
                        shiftY: c,
                        shiftArrow: u,
                        overflowDirection: f
                    }, function(e, t) {
                        return n.createElement(b, {
                            ref: e,
                            onClick: function e(o) {
                                t(), s && s(o)
                            }
                        })
                    }))
                };
            v.defaultProps = {
                className: void 0,
                children: void 0,
                closeOnScroll: !1,
                onClick: void 0,
                popoverShiftX: 0,
                popoverShiftY: 0,
                popoverShiftArrow: 0,
                overflowDirection: void 0
            };
            var h = v,
                y = function e(t) {
                    var o = t.children,
                        r = t.icon,
                        l = t.close,
                        s = t.onClick,
                        i = t.active;
                    return n.createElement("li", {
                        className: d()("ui_link", "social-overflow-ui-OverflowUIListItem__item--3ncmO", Object(f.a)({}, "social-overflow-ui-OverflowUIListItem__inactive--1_oAr", !i)),
                        onClick: function e(t) {
                            return i && s({
                                event: t,
                                close: l
                            })
                        }
                    }, r && n.createElement(p.Icon, {
                        name: r,
                        className: "social-overflow-ui-OverflowUIListItem__icon--1Hci-"
                    }), o)
                };
            y.defaultProps = {
                children: void 0,
                icon: void 0,
                close: function e() {},
                active: !0
            };
            var w = y;
            o.d(t, "OverflowUI", function() {
                return h
            }), o.d(t, "OverflowUIList", function() {
                return c
            }), o.d(t, "OverflowUIListItem", function() {
                return w
            }), o.d(t, "OverflowOpener", function() {
                return a
            }), o.d(t, "OverflowIcon", function() {
                return b
            })
        },
        "@ta/overlays.popover": function(t, o) {
            t.exports = e
        },
        "@ta/styleguide.icon": function(e, o) {
            e.exports = t
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = o
        }
    })
});
//# sourceMappingURL=social.overflow-ui.2662836a05.js.map