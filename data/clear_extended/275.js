define("@ta/overlays.managers", ["@ta/overlays.pieces", "@ta/common.global"], function(e, t) {
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
        }, n.p = "", n(n.s = "./packages/overlays/managers/managers.jsx")
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
        "./node_modules/dom-helpers/class/addClass.js": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function o(e, t) {
                e.classList ? e.classList.add(t) : (0, r.default)(e, t) || ("string" == typeof e.className ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t))
            };
            var r = function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n("./node_modules/dom-helpers/class/hasClass.js"));
            e.exports = t.default
        },
        "./node_modules/dom-helpers/class/hasClass.js": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function o(e, t) {
                return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
            }, e.exports = t.default
        },
        "./node_modules/dom-helpers/class/removeClass.js": function(e, t, n) {
            "use strict";

            function o(e, t) {
                return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
            }
            e.exports = function e(t, n) {
                t.classList ? t.classList.remove(n) : "string" == typeof t.className ? t.className = o(t.className, n) : t.setAttribute("class", o(t.className && t.className.baseVal || "", n))
            }
        },
        "./node_modules/fbjs/lib/emptyFunction.js": function(e, t, n) {
            "use strict";

            function o(e) {
                return function() {
                    return e
                }
            }
            var r = function e() {};
            r.thatReturns = o, r.thatReturnsFalse = o(!1), r.thatReturnsTrue = o(!0), r.thatReturnsNull = o(null), r.thatReturnsThis = function() {
                return this
            }, r.thatReturnsArgument = function(e) {
                return e
            }, e.exports = r
        },
        "./node_modules/fbjs/lib/invariant.js": function(e, t, n) {
            "use strict";
            e.exports = function o(e, t, n, r, s, i, a, l) {
                if (!e) {
                    var u;
                    if (void 0 === t) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var c = [n, r, s, i, a, l],
                            p = 0;
                        (u = new Error(t.replace(/%s/g, function() {
                            return c[p++]
                        }))).name = "Invariant Violation"
                    }
                    throw u.framesToPop = 1, u
                }
            }
        },
        "./node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
            "use strict";
            var o = n("./node_modules/fbjs/lib/emptyFunction.js"),
                r = n("./node_modules/fbjs/lib/invariant.js"),
                s = n("./node_modules/prop-types/lib/ReactPropTypesSecret.js");
            e.exports = function() {
                function e(e, t, n, o, i, a) {
                    a !== s && r(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t
                };
                return n.checkPropTypes = o, n.PropTypes = n, n
            }
        },
        "./node_modules/prop-types/index.js": function(e, t, n) {
            e.exports = n("./node_modules/prop-types/factoryWithThrowingShims.js")()
        },
        "./node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, n) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        "./node_modules/react-dom/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react-dom/index.js")
        },
        "./node_modules/react-redux/es/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react-transition-group/CSSTransition.js": function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
                r = function s(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n("./node_modules/prop-types/index.js")),
                i = p(n("./node_modules/dom-helpers/class/addClass.js")),
                a = p(n("./node_modules/dom-helpers/class/removeClass.js")),
                l = p(n("./node_modules/react/index.js")),
                u = p(n("./node_modules/react-transition-group/Transition.js")),
                c = n("./node_modules/react-transition-group/utils/PropTypes.js");

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function d(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            var f = function e(t, n) {
                    return t && n && n.split(" ").forEach(function(e) {
                        return (0, i.default)(t, e)
                    })
                },
                m = function e(t, n) {
                    return t && n && n.split(" ").forEach(function(e) {
                        return (0, a.default)(t, e)
                    })
                },
                h = (o({}, u.default.propTypes, {
                    classNames: c.classNamesShape,
                    onEnter: r.func,
                    onEntering: r.func,
                    onEntered: r.func,
                    onExit: r.func,
                    onExiting: r.func,
                    onExited: r.func
                }), function(e) {
                    function t() {
                        var n, o;
                        ! function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var s = arguments.length, i = Array(s), a = 0; a < s; a++) i[a] = arguments[a];
                        return n = o = d(this, e.call.apply(e, [this].concat(i))), o.onEnter = function(e, t) {
                            var n = o.getClassNames(t ? "appear" : "enter").className;
                            o.removeClasses(e, "exit"), f(e, n), o.props.onEnter && o.props.onEnter(e)
                        }, o.onEntering = function(e, t) {
                            var n = o.getClassNames(t ? "appear" : "enter").activeClassName;
                            o.reflowAndAddClass(e, n), o.props.onEntering && o.props.onEntering(e)
                        }, o.onEntered = function(e, t) {
                            var n = o.getClassNames("enter").doneClassName;
                            o.removeClasses(e, t ? "appear" : "enter"), f(e, n), o.props.onEntered && o.props.onEntered(e)
                        }, o.onExit = function(e) {
                            var t = o.getClassNames("exit").className;
                            o.removeClasses(e, "appear"), o.removeClasses(e, "enter"), f(e, t), o.props.onExit && o.props.onExit(e)
                        }, o.onExiting = function(e) {
                            var t = o.getClassNames("exit").activeClassName;
                            o.reflowAndAddClass(e, t), o.props.onExiting && o.props.onExiting(e)
                        }, o.onExited = function(e) {
                            var t = o.getClassNames("exit").doneClassName;
                            o.removeClasses(e, "exit"), f(e, t), o.props.onExited && o.props.onExited(e)
                        }, o.getClassNames = function(e) {
                            var t = o.props.classNames,
                                n = "string" != typeof t ? t[e] : t + "-" + e;
                            return {
                                className: n,
                                activeClassName: "string" != typeof t ? t[e + "Active"] : n + "-active",
                                doneClassName: "string" != typeof t ? t[e + "Done"] : n + "-done"
                            }
                        }, d(o, n)
                    }
                    return function n(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.removeClasses = function e(t, n) {
                        var o = this.getClassNames(n),
                            r = o.className,
                            s = o.activeClassName,
                            i = o.doneClassName;
                        r && m(t, r), s && m(t, s), i && m(t, i)
                    }, t.prototype.reflowAndAddClass = function e(t, n) {
                        t && t.scrollTop, f(t, n)
                    }, t.prototype.render = function e() {
                        var t = o({}, this.props);
                        return delete t.classNames, l.default.createElement(u.default, o({}, t, {
                            onEnter: this.onEnter,
                            onEntered: this.onEntered,
                            onEntering: this.onEntering,
                            onExit: this.onExit,
                            onExiting: this.onExiting,
                            onExited: this.onExited
                        }))
                    }, t
                }(l.default.Component));
            h.propTypes = {}, t.default = h, e.exports = t.default
        },
        "./node_modules/react-transition-group/ReplaceTransition.js": function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o = a(n("./node_modules/prop-types/index.js")),
                r = a(n("./node_modules/react/index.js")),
                s = n("./node_modules/react-dom/index.js"),
                i = a(n("./node_modules/react-transition-group/TransitionGroup.js"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            o.default.bool.isRequired;
            var u = function(e) {
                    function t() {
                        var n, o;
                        ! function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var s = arguments.length, i = Array(s), a = 0; a < s; a++) i[a] = arguments[a];
                        return n = o = l(this, e.call.apply(e, [this].concat(i))), c.call(o), l(o, n)
                    }
                    return function n(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.handleLifecycle = function e(t, n, o) {
                        var i, a = this.props.children,
                            l = r.default.Children.toArray(a)[n];
                        l.props[t] && (i = l.props)[t].apply(i, o), this.props[t] && this.props[t]((0, s.findDOMNode)(this))
                    }, t.prototype.render = function e() {
                        var t = this.props,
                            n = t.children,
                            o = t.in,
                            s = function a(e, t) {
                                var n = {};
                                for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                                return n
                            }(t, ["children", "in"]),
                            l = r.default.Children.toArray(n),
                            u = l[0],
                            c = l[1];
                        return delete s.onEnter, delete s.onEntering, delete s.onEntered, delete s.onExit, delete s.onExiting, delete s.onExited, r.default.createElement(i.default, s, o ? r.default.cloneElement(u, {
                            key: "first",
                            onEnter: this.handleEnter,
                            onEntering: this.handleEntering,
                            onEntered: this.handleEntered
                        }) : r.default.cloneElement(c, {
                            key: "second",
                            onEnter: this.handleExit,
                            onEntering: this.handleExiting,
                            onEntered: this.handleExited
                        }))
                    }, t
                }(r.default.Component),
                c = function e() {
                    var t = this;
                    this.handleEnter = function() {
                        for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                        return t.handleLifecycle("onEnter", 0, n)
                    }, this.handleEntering = function() {
                        for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                        return t.handleLifecycle("onEntering", 0, n)
                    }, this.handleEntered = function() {
                        for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                        return t.handleLifecycle("onEntered", 0, n)
                    }, this.handleExit = function() {
                        for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                        return t.handleLifecycle("onExit", 1, n)
                    }, this.handleExiting = function() {
                        for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                        return t.handleLifecycle("onExiting", 1, n)
                    }, this.handleExited = function() {
                        for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                        return t.handleLifecycle("onExited", 1, n)
                    }
                };
            u.propTypes = {}, t.default = u, e.exports = t.default
        },
        "./node_modules/react-transition-group/Transition.js": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.EXITING = t.ENTERED = t.ENTERING = t.EXITED = t.UNMOUNTED = void 0;
            var o = function r(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n("./node_modules/prop-types/index.js")),
                s = a(n("./node_modules/react/index.js")),
                i = a(n("./node_modules/react-dom/index.js"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            n("./node_modules/react-transition-group/utils/PropTypes.js");
            var l = t.UNMOUNTED = "unmounted",
                u = t.EXITED = "exited",
                c = t.ENTERING = "entering",
                p = t.ENTERED = "entered",
                d = t.EXITING = "exiting",
                f = function(e) {
                    function t(n, o) {
                        ! function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var s = function i(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, e.call(this, n, o)),
                            a = o.transitionGroup,
                            d = a && !a.isMounting ? n.enter : n.appear,
                            f = void 0;
                        return s.nextStatus = null, n.in ? d ? (f = u, s.nextStatus = c) : f = p : f = n.unmountOnExit || n.mountOnEnter ? l : u, s.state = {
                            status: f
                        }, s.nextCallback = null, s
                    }
                    return function n(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.getChildContext = function e() {
                        return {
                            transitionGroup: null
                        }
                    }, t.prototype.componentDidMount = function e() {
                        this.updateStatus(!0)
                    }, t.prototype.componentWillReceiveProps = function e(t) {
                        var n = (this.pendingState || this.state).status;
                        t.in ? (n === l && this.setState({
                            status: u
                        }), n !== c && n !== p && (this.nextStatus = c)) : n !== c && n !== p || (this.nextStatus = d)
                    }, t.prototype.componentDidUpdate = function e() {
                        this.updateStatus()
                    }, t.prototype.componentWillUnmount = function e() {
                        this.cancelNextCallback()
                    }, t.prototype.getTimeouts = function e() {
                        var t = this.props.timeout,
                            n = void 0,
                            o = void 0,
                            r = void 0;
                        return n = o = r = t, null != t && "number" != typeof t && (n = t.exit, o = t.enter, r = t.appear), {
                            exit: n,
                            enter: o,
                            appear: r
                        }
                    }, t.prototype.updateStatus = function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            n = this.nextStatus;
                        if (null !== n) {
                            this.nextStatus = null, this.cancelNextCallback();
                            var o = i.default.findDOMNode(this);
                            n === c ? this.performEnter(o, t) : this.performExit(o)
                        } else this.props.unmountOnExit && this.state.status === u && this.setState({
                            status: l
                        })
                    }, t.prototype.performEnter = function e(t, n) {
                        var o = this,
                            r = this.props.enter,
                            s = this.context.transitionGroup ? this.context.transitionGroup.isMounting : n,
                            i = this.getTimeouts();
                        n || r ? (this.props.onEnter(t, s), this.safeSetState({
                            status: c
                        }, function() {
                            o.props.onEntering(t, s), o.onTransitionEnd(t, i.enter, function() {
                                o.safeSetState({
                                    status: p
                                }, function() {
                                    o.props.onEntered(t, s)
                                })
                            })
                        })) : this.safeSetState({
                            status: p
                        }, function() {
                            o.props.onEntered(t)
                        })
                    }, t.prototype.performExit = function e(t) {
                        var n = this,
                            o = this.props.exit,
                            r = this.getTimeouts();
                        o ? (this.props.onExit(t), this.safeSetState({
                            status: d
                        }, function() {
                            n.props.onExiting(t), n.onTransitionEnd(t, r.exit, function() {
                                n.safeSetState({
                                    status: u
                                }, function() {
                                    n.props.onExited(t)
                                })
                            })
                        })) : this.safeSetState({
                            status: u
                        }, function() {
                            n.props.onExited(t)
                        })
                    }, t.prototype.cancelNextCallback = function e() {
                        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                    }, t.prototype.safeSetState = function e(t, n) {
                        var o = this;
                        this.pendingState = t, n = this.setNextCallback(n), this.setState(t, function() {
                            o.pendingState = null, n()
                        })
                    }, t.prototype.setNextCallback = function e(t) {
                        var n = this,
                            o = !0;
                        return this.nextCallback = function(e) {
                            o && (o = !1, n.nextCallback = null, t(e))
                        }, this.nextCallback.cancel = function() {
                            o = !1
                        }, this.nextCallback
                    }, t.prototype.onTransitionEnd = function e(t, n, o) {
                        this.setNextCallback(o), t ? (this.props.addEndListener && this.props.addEndListener(t, this.nextCallback), null != n && setTimeout(this.nextCallback, n)) : setTimeout(this.nextCallback, 0)
                    }, t.prototype.render = function e() {
                        var t = this.state.status;
                        if (t === l) return null;
                        var n = this.props,
                            o = n.children,
                            r = function i(e, t) {
                                var n = {};
                                for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                                return n
                            }(n, ["children"]);
                        if (delete r.in, delete r.mountOnEnter, delete r.unmountOnExit, delete r.appear, delete r.enter, delete r.exit, delete r.timeout, delete r.addEndListener, delete r.onEnter, delete r.onEntering, delete r.onEntered, delete r.onExit, delete r.onExiting, delete r.onExited, "function" == typeof o) return o(t, r);
                        var a = s.default.Children.only(o);
                        return s.default.cloneElement(a, r)
                    }, t
                }(s.default.Component);

            function m() {}
            f.contextTypes = {
                transitionGroup: o.object
            }, f.childContextTypes = {
                transitionGroup: function e() {}
            }, f.propTypes = {}, f.defaultProps = {
                in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: m,
                onEntering: m,
                onEntered: m,
                onExit: m,
                onExiting: m,
                onExited: m
            }, f.UNMOUNTED = 0, f.EXITED = 1, f.ENTERING = 2, f.ENTERED = 3, f.EXITING = 4, t.default = f
        },
        "./node_modules/react-transition-group/TransitionGroup.js": function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
                r = l(n("./node_modules/prop-types/index.js")),
                s = n("./node_modules/react/index.js"),
                i = l(s),
                a = n("./node_modules/react-transition-group/utils/ChildMapping.js");

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = Object.values || function(e) {
                    return Object.keys(e).map(function(t) {
                        return e[t]
                    })
                },
                c = (r.default.any, r.default.node, r.default.bool, r.default.bool, r.default.bool, r.default.func, function(e) {
                    function t(n, o) {
                        ! function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var i = function l(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, e.call(this, n, o));
                        return i.state = {
                            children: (0, a.getChildMapping)(n.children, function(e) {
                                return (0, s.cloneElement)(e, {
                                    onExited: i.handleExited.bind(i, e),
                                    in: !0,
                                    appear: i.getProp(e, "appear"),
                                    enter: i.getProp(e, "enter"),
                                    exit: i.getProp(e, "exit")
                                })
                            })
                        }, i
                    }
                    return function n(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.getChildContext = function e() {
                        return {
                            transitionGroup: {
                                isMounting: !this.appeared
                            }
                        }
                    }, t.prototype.getProp = function e(t, n) {
                        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.props;
                        return null != o[n] ? o[n] : t.props[n]
                    }, t.prototype.componentDidMount = function e() {
                        this.appeared = !0
                    }, t.prototype.componentWillReceiveProps = function e(t) {
                        var n = this,
                            o = this.state.children,
                            r = (0, a.getChildMapping)(t.children),
                            i = (0, a.mergeChildMappings)(o, r);
                        Object.keys(i).forEach(function(e) {
                            var a = i[e];
                            if ((0, s.isValidElement)(a)) {
                                var l = e in o,
                                    u = e in r,
                                    c = o[e],
                                    p = (0, s.isValidElement)(c) && !c.props.in;
                                !u || l && !p ? u || !l || p ? u && l && (0, s.isValidElement)(c) && (i[e] = (0, s.cloneElement)(a, {
                                    onExited: n.handleExited.bind(n, a),
                                    in: c.props.in,
                                    exit: n.getProp(a, "exit", t),
                                    enter: n.getProp(a, "enter", t)
                                })) : i[e] = (0, s.cloneElement)(a, {
                                    in: !1
                                }) : i[e] = (0, s.cloneElement)(a, {
                                    onExited: n.handleExited.bind(n, a),
                                    in: !0,
                                    exit: n.getProp(a, "exit", t),
                                    enter: n.getProp(a, "enter", t)
                                })
                            }
                        }), this.setState({
                            children: i
                        })
                    }, t.prototype.handleExited = function e(t, n) {
                        var r = (0, a.getChildMapping)(this.props.children);
                        t.key in r || (t.props.onExited && t.props.onExited(n), this.setState(function(e) {
                            var n = o({}, e.children);
                            return delete n[t.key], {
                                children: n
                            }
                        }))
                    }, t.prototype.render = function e() {
                        var t = this.props,
                            n = t.component,
                            o = t.childFactory,
                            r = function s(e, t) {
                                var n = {};
                                for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                                return n
                            }(t, ["component", "childFactory"]),
                            a = u(this.state.children).map(o);
                        return delete r.appear, delete r.enter, delete r.exit, null === n ? a : i.default.createElement(n, r, a)
                    }, t
                }(i.default.Component));
            c.childContextTypes = {
                transitionGroup: r.default.object.isRequired
            }, c.propTypes = {}, c.defaultProps = {
                component: "div",
                childFactory: function e(t) {
                    return t
                }
            }, t.default = c, e.exports = t.default
        },
        "./node_modules/react-transition-group/index.js": function(e, t, n) {
            "use strict";
            var o = a(n("./node_modules/react-transition-group/CSSTransition.js")),
                r = a(n("./node_modules/react-transition-group/ReplaceTransition.js")),
                s = a(n("./node_modules/react-transition-group/TransitionGroup.js")),
                i = a(n("./node_modules/react-transition-group/Transition.js"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = {
                Transition: i.default,
                TransitionGroup: s.default,
                ReplaceTransition: r.default,
                CSSTransition: o.default
            }
        },
        "./node_modules/react-transition-group/utils/ChildMapping.js": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.getChildMapping = function o(e, t) {
                var n = Object.create(null);
                return e && s.Children.map(e, function(e) {
                    return e
                }).forEach(function(e) {
                    n[e.key] = function e(n) {
                        return t && (0, s.isValidElement)(n) ? t(n) : n
                    }(e)
                }), n
            }, t.mergeChildMappings = function r(e, t) {
                function n(n) {
                    return n in t ? t[n] : e[n]
                }
                e = e || {}, t = t || {};
                var o = Object.create(null),
                    r = [];
                for (var s in e) s in t ? r.length && (o[s] = r, r = []) : r.push(s);
                var i = void 0,
                    a = {};
                for (var l in t) {
                    if (o[l])
                        for (i = 0; i < o[l].length; i++) {
                            var u = o[l][i];
                            a[o[l][i]] = n(u)
                        }
                    a[l] = n(l)
                }
                for (i = 0; i < r.length; i++) a[r[i]] = n(r[i]);
                return a
            };
            var s = n("./node_modules/react/index.js")
        },
        "./node_modules/react-transition-group/utils/PropTypes.js": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.classNamesShape = t.timeoutsShape = void 0, t.transitionTimeout = function o(e) {
                var t = "transition" + e + "Timeout",
                    n = "transition" + e;
                return function(e) {
                    if (e[n]) {
                        if (null == e[t]) return new Error(t + " wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");
                        if ("number" != typeof e[t]) return new Error(t + " must be a number (in milliseconds)")
                    }
                    return null
                }
            };
            var r = function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n("./node_modules/prop-types/index.js"));
            t.timeoutsShape = r.default.oneOfType([r.default.number, r.default.shape({
                enter: r.default.number,
                exit: r.default.number
            }).isRequired]), t.classNamesShape = r.default.oneOfType([r.default.string, r.default.shape({
                enter: r.default.string,
                exit: r.default.string,
                active: r.default.string
            }), r.default.shape({
                enter: r.default.string,
                enterDone: r.default.string,
                enterActive: r.default.string,
                exit: r.default.string,
                exitDone: r.default.string,
                exitActive: r.default.string
            })])
        },
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/logging/logging.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/logging/logging.jsx")
        },
        "./packages/common/state/state.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/state/state.jsx")
        },
        "./packages/overlays/managers/managers.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                r = n("./node_modules/react/index.js"),
                s = n("./node_modules/react-redux/es/index.js"),
                i = n("./packages/common/state/state.jsx"),
                a = function e(t) {
                    var n = t.name,
                        o = t.showGlobal,
                        r = t.hideLocal,
                        s = t.isOpen,
                        i = t.children,
                        a = null !== n ? r : o;
                    return i(function() {
                        return a(n)
                    }, s)
                };
            a.defaultProps = {
                name: null
            };
            var l = Object(s.connect)(function(e, t) {
                    return Object(o.a)({}, t, {
                        isOpen: t.local ? e.overlays.locals[t.name] : e.overlays.global === t.name
                    })
                }, {
                    showGlobal: i.actions.overlays.showGlobalOverlay,
                    hideLocal: i.actions.overlays.hideLocalOverlay
                })(a),
                u = function e(t) {
                    var n = t.name,
                        o = t.local,
                        r = t.showGlobal,
                        s = t.showLocal,
                        i = t.isOpen,
                        a = t.children,
                        l = o ? s : r;
                    return a(function() {
                        return l(n)
                    }, i)
                };
            u.defaultProps = {
                local: !1
            };
            var c = Object(s.connect)(function(e, t) {
                    return Object(o.a)({}, t, {
                        isOpen: t.local ? e.overlays.locals[t.name] : e.overlays.global === t.name
                    })
                }, {
                    showGlobal: i.actions.overlays.showGlobalOverlay,
                    showLocal: i.actions.overlays.showLocalOverlay
                })(u),
                p = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                d = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                f = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                m = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                h = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                y = n("./node_modules/react-transition-group/index.js"),
                b = n("@ta/overlays.pieces"),
                g = n("./packages/common/logging/logging.jsx"),
                v = n.n(g),
                E = new Map,
                x = function(e) {
                    function t() {
                        return Object(p.a)(this, t), Object(f.a)(this, Object(m.a)(t).apply(this, arguments))
                    }
                    return Object(h.a)(t, e), Object(d.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            var t = this.props.name;
                            if (E.has(t)) {
                                var n = E.get(t) + 1;
                                E.set(t, n), v.a.error("Global overlay with name: ".concat(t, " found ").concat(n, " times, please use another alias"))
                            } else E.set(t, 1)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            var t = this.props.name;
                            E.delete(t)
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this.props,
                                n = t.show,
                                o = t.name,
                                s = t.children,
                                i = t.transitionDuration;
                            return r.createElement(y.Transition, {
                                in: n,
                                timeout: i || 0,
                                mountOnEnter: !0,
                                unmountOnExit: !0
                            }, function(e) {
                                return r.createElement(b.OverlayProvider, {
                                    value: {
                                        parent: o,
                                        after: null,
                                        transitionStatus: e
                                    }
                                }, s)
                            })
                        }
                    }]), t
                }(r.Component),
                j = Object(s.connect)(function(e, t) {
                    return {
                        show: t.name === e.overlays.global
                    }
                })(x),
                _ = new Map,
                O = function(e) {
                    function t() {
                        return Object(p.a)(this, t), Object(f.a)(this, Object(m.a)(t).apply(this, arguments))
                    }
                    return Object(h.a)(t, e), Object(d.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            var t = this.props.name;
                            if (_.has(t)) {
                                var n = _.get(t) + 1;
                                _.set(t, n), v.a.error("Local overlay with name: ".concat(t, " found ").concat(n, " times, please use another alias"))
                            } else _.set(t, 1)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            var t = this.props.name;
                            _.delete(t)
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this.props,
                                n = t.show,
                                o = t.name,
                                s = t.children,
                                i = t.transitionDuration;
                            return r.createElement(y.Transition, {
                                in: n,
                                timeout: i || 0,
                                mountOnEnter: !0,
                                unmountOnExit: !0
                            }, function(e) {
                                return r.createElement(b.OverlayProvider, {
                                    value: {
                                        parent: o,
                                        after: null,
                                        transitionStatus: e
                                    }
                                }, s)
                            })
                        }
                    }]), t
                }(r.Component),
                C = Object(s.connect)(function(e, t) {
                    var n = t.name;
                    return {
                        show: !!e.overlays.locals[n]
                    }
                })(O),
                T = function(e) {
                    function t() {
                        return Object(p.a)(this, t), Object(f.a)(this, Object(m.a)(t).apply(this, arguments))
                    }
                    return Object(h.a)(t, e), Object(d.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.props.openLayerCheck() && this.props.openLayer(), this.props.markAsCheckedCallback()
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return null
                        }
                    }]), t
                }(r.Component),
                w = function e(t) {
                    return r.createElement(c, {
                        name: t.name,
                        local: t.local
                    }, function(e) {
                        return r.createElement(T, {
                            openLayer: e,
                            markAsCheckedCallback: t.markAsCheckedCallback,
                            openLayerCheck: t.openLayerCheck
                        })
                    })
                };
            w.defaultProps = {
                local: !1
            };
            var S = w;
            n.d(t, "Closer", function() {
                return l
            }), n.d(t, "Opener", function() {
                return c
            }), n.d(t, "Global", function() {
                return j
            }), n.d(t, "Local", function() {
                return C
            }), n.d(t, "AutoOpener", function() {
                return S
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
//# sourceMappingURL=overlays.managers.36960eb162.js.map