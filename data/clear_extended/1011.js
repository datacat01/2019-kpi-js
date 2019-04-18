define("@ta/input.text-area", ["@ta/common.global"], function(e) {
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
        }, n.p = "", n(n.s = "./packages/input/text-area/index.jsx")
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
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        Object(o.a)(e, t, n[t])
                    })
                }
                return e
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
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/classnames/classnames.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/input/text-area/index.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                l = n("./node_modules/react/index.js"),
                p = function(e) {
                    function t(e) {
                        var n;
                        return Object(o.a)(this, t), n = Object(s.a)(this, Object(i.a)(t).call(this, e)), Object(c.a)(Object(u.a)(Object(u.a)(n)), "newListener", function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return function(o) {
                                n.props.onInteractionStart && !n.state.interactionStarted && n.props.onInteractionStart(o), n.setState({
                                    composing: t
                                });
                                var r = o.currentTarget.value;
                                n.props[e] && n.props[e](o, r, n.state.composing), n.setState({
                                    interactionStarted: !0
                                })
                            }
                        }), Object(c.a)(Object(u.a)(Object(u.a)(n)), "onFocus", n.newListener("onFocus")), Object(c.a)(Object(u.a)(Object(u.a)(n)), "onBlur", n.newListener("onBlur")), Object(c.a)(Object(u.a)(Object(u.a)(n)), "onChange", n.newListener("onChange")), Object(c.a)(Object(u.a)(Object(u.a)(n)), "onKeyUp", n.newListener("onKeyUp")), Object(c.a)(Object(u.a)(Object(u.a)(n)), "onKeyDown", n.newListener("onKeyDown")), Object(c.a)(Object(u.a)(Object(u.a)(n)), "onCompositionStart", n.newListener("onCompositionStart", !0)), Object(c.a)(Object(u.a)(Object(u.a)(n)), "onCompositionEnd", n.newListener("onCompositionEnd")), Object(c.a)(Object(u.a)(Object(u.a)(n)), "inputElem", void 0), n.state = {
                            interactionStarted: !1,
                            composing: !1
                        }, n
                    }
                    return Object(a.a)(t, e), Object(r.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.props.focusOnMount && this.inputElem && this.inputElem.focus()
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this,
                                n = this.props.fontSize ? {
                                    fontSize: this.props.fontSize
                                } : void 0;
                            return l.createElement("textarea", {
                                type: "text",
                                id: this.props.id,
                                name: this.props.name,
                                rows: this.props.rows,
                                cols: this.props.cols,
                                value: this.props.value,
                                maxLength: this.props.maxLength,
                                className: this.props.className,
                                style: n,
                                placeholder: this.props.placeholder,
                                disabled: this.props.disabled,
                                onFocus: this.onFocus,
                                onBlur: this.onBlur,
                                onChange: this.onChange,
                                onKeyUp: this.onKeyUp,
                                onKeyDown: this.onKeyDown,
                                onCompositionStart: this.onCompositionStart,
                                onCompositionEnd: this.onCompositionEnd,
                                ref: function e(n) {
                                    t.inputElem = n, t.props.onRef && t.props.onRef(n)
                                }
                            })
                        }
                    }]), t
                }(l.Component);
            Object(c.a)(p, "defaultProps", {
                id: void 0,
                name: void 0,
                value: void 0,
                className: void 0,
                placeholder: void 0,
                disabled: !1,
                focusOnMount: !1,
                onFocus: void 0,
                onBlur: void 0,
                onChange: void 0,
                onKeyUp: void 0,
                onKeyDown: void 0,
                onCompositionStart: void 0,
                onCompositionEnd: void 0,
                onInteractionStart: void 0,
                onRef: void 0
            });
            var m = p,
                b = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                d = n("./packages/common/classnames/classnames.jsx"),
                f = n.n(d),
                j = function e(t) {
                    var n = f()("input-text-area-TextArea__inputElement--9wSKB", t.className),
                        o = Object(b.a)({}, t, {
                            className: n
                        });
                    return l.createElement(m, o)
                };
            n.d(t, "ManagedTextArea", function() {
                return m
            }), n.d(t, "TextArea", function() {
                return j
            })
        },
        "dll-reference @ta/common.global": function(t, n) {
            t.exports = e
        }
    })
});
//# sourceMappingURL=input.text-area.4646311673.js.map