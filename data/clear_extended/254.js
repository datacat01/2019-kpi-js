define("@ta/list.navigable-list", ["@ta/common.global"], function(e) {
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
        }, n.p = "", n(n.s = "./packages/list/navigable-list/index.jsx")
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
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function s(e, t) {
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
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/throttle/throttle.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/throttle/throttle.jsx")
        },
        "./packages/events/keyboard-event-listener/KeyboardEventListener.jsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                c = function(e) {
                    function t(e) {
                        var n;
                        return Object(r.a)(this, t), n = Object(s.a)(this, Object(a.a)(t).call(this, e)), Object(l.a)(Object(u.a)(Object(u.a)(n)), "keyNames", void 0), Object(l.a)(Object(u.a)(Object(u.a)(n)), "handleEvent", function(e) {
                            var t = e.key;
                            t && -1 !== n.keyNames.indexOf(t) && n.props.callback(e)
                        }), n.keyNames = Array.isArray(e.keyName) ? e.keyName : [e.keyName], n
                    }
                    return Object(i.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            window.addEventListener(this.props.eventType, this.handleEvent)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            window.removeEventListener(this.props.eventType, this.handleEvent)
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return null
                        }
                    }]), t
                }(n("./node_modules/react/index.js").Component);
            Object(l.a)(c, "defaultProps", {
                eventType: "keydown"
            })
        },
        "./packages/list/navigable-list/index.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                c = n("./node_modules/react/index.js"),
                b = n("./packages/common/throttle/throttle.jsx"),
                p = n.n(b),
                d = n("./packages/events/keyboard-event-listener/KeyboardEventListener.jsx"),
                m = ["ArrowUp", "ArrowDown", "Up", "Down"],
                f = "NonNavigableItem",
                y = function(e) {
                    function t(e) {
                        var n;
                        return Object(r.a)(this, t), n = Object(s.a)(this, Object(a.a)(t).call(this, e)), Object(l.a)(Object(u.a)(Object(u.a)(n)), "onKeyDown", function(e) {
                            var t = n.state.navigableIndices.indexOf(n.state.activeIndex);
                            t = -1 === t ? 0 : -1 !== e.key.indexOf("Up") ? Math.max(t - 1, 0) : Math.min(t + 1, n.state.navigableIndices.length - 1), n.props.onKeyDown && n.props.onKeyDown(e);
                            var r = n.state.navigableIndices[t];
                            n.setState(n.stateFromProps(n.props, r)), e.preventDefault()
                        }), Object(l.a)(Object(u.a)(Object(u.a)(n)), "stateFromProps", function(e, t) {
                            var r = 0,
                                o = t,
                                s = [];
                            return {
                                children: e.children.map(function(e) {
                                    var t = r === o,
                                        a = e(t, n.newMouseMoveCallback(r));
                                    return a && a.type && void 0 !== a.type[f] ? t && (o += 1) : s.push(r), r += 1, a
                                }),
                                activeIndex: o,
                                navigableIndices: s
                            }
                        }), Object(l.a)(Object(u.a)(Object(u.a)(n)), "newMouseMoveCallback", function(e) {
                            var t = e;
                            return p()(function() {
                                -1 !== n.state.navigableIndices.indexOf(t) && n.setState(n.stateFromProps(n.props, t))
                            }, 100)
                        }), n.state = n.stateFromProps(e, 0), n
                    }
                    return Object(i.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidUpdate",
                        value: function e(t) {
                            t !== this.props && this.setState(this.stateFromProps(this.props, this.state.activeIndex))
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return c.createElement(c.Fragment, null, c.createElement(d.a, {
                                keyName: m,
                                callback: this.onKeyDown
                            }), this.state.children)
                        }
                    }]), t
                }(c.Component),
                j = function(e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++) i[c] = arguments[c];
                        return n = Object(s.a)(this, (e = Object(a.a)(t)).call.apply(e, [this].concat(i))), Object(l.a)(Object(u.a)(Object(u.a)(n)), "onEnter", function(e) {
                            n.props.active && n.props.onSelection && n.props.onSelection(e)
                        }), n
                    }
                    return Object(i.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function e() {
                            return c.createElement("div", {
                                onClick: this.props.onSelection,
                                onMouseMove: this.props.onMouseMove
                            }, this.props.children, c.createElement(d.a, {
                                keyName: "Enter",
                                callback: this.onEnter
                            }))
                        }
                    }]), t
                }(c.Component);
            Object(l.a)(j, "defaultProps", {
                onSelection: void 0,
                children: void 0
            });
            var h = j;
            n.d(t, "NavigableList", function() {
                return y
            }), n.d(t, "NonNavigableItem", function() {
                return f
            }), n.d(t, "NavigableListItem", function() {
                return h
            })
        },
        "dll-reference @ta/common.global": function(t, n) {
            t.exports = e
        }
    })
});
//# sourceMappingURL=list.navigable-list.fc9650b61f.js.map