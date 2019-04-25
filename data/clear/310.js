define("@ta/social.educational-tooltips", ["@ta/common.localstorage", "@ta/common.sessionstorage", "@ta/overlays.managers", "@ta/overlays.pieces", "@ta/social.feed", "@ta/social.feed-filter", "@ta/social.login-gate", "@ta/styleguide.button", "@ta/styleguide.icon", "@ta/common.global"], function(e, t, n, o, r, i, a, s, l, c) {
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
        }, n.p = "", n(n.s = "./packages/social/educational-tooltips/index.jsx")
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
        "./node_modules/dom-helpers/class/addClass.js": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function o(e, t) {
                e.classList ? e.classList.add(t) : (0, r.default)(e, t) || ("string" == typeof e.className ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t))
            };
            var r = function i(e) {
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
            e.exports = function o(e, t, n, r, i, a, s, l) {
                if (!e) {
                    var c;
                    if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var u = [n, r, i, a, s, l],
                            d = 0;
                        (c = new Error(t.replace(/%s/g, function() {
                            return u[d++]
                        }))).name = "Invariant Violation"
                    }
                    throw c.framesToPop = 1, c
                }
            }
        },
        "./node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
            "use strict";
            var o = n("./node_modules/fbjs/lib/emptyFunction.js"),
                r = n("./node_modules/fbjs/lib/invariant.js"),
                i = n("./node_modules/prop-types/lib/ReactPropTypesSecret.js");
            e.exports = function() {
                function e(e, t, n, o, a, s) {
                    s !== i && r(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
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
        "./node_modules/react-apollo/react-apollo.browser.umd.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react-apollo/react-apollo.browser.umd.js")
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
                r = function i(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n("./node_modules/prop-types/index.js")),
                a = d(n("./node_modules/dom-helpers/class/addClass.js")),
                s = d(n("./node_modules/dom-helpers/class/removeClass.js")),
                l = d(n("./node_modules/react/index.js")),
                c = d(n("./node_modules/react-transition-group/Transition.js")),
                u = n("./node_modules/react-transition-group/utils/PropTypes.js");

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function p(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            var f = function e(t, n) {
                    return t && n && n.split(" ").forEach(function(e) {
                        return (0, a.default)(t, e)
                    })
                },
                m = function e(t, n) {
                    return t && n && n.split(" ").forEach(function(e) {
                        return (0, s.default)(t, e)
                    })
                },
                h = (o({}, c.default.propTypes, {
                    classNames: u.classNamesShape,
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
                        for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
                        return n = o = p(this, e.call.apply(e, [this].concat(a))), o.onEnter = function(e, t) {
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
                        }, p(o, n)
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
                            i = o.activeClassName,
                            a = o.doneClassName;
                        r && m(t, r), i && m(t, i), a && m(t, a)
                    }, t.prototype.reflowAndAddClass = function e(t, n) {
                        t && t.scrollTop, f(t, n)
                    }, t.prototype.render = function e() {
                        var t = o({}, this.props);
                        return delete t.classNames, l.default.createElement(c.default, o({}, t, {
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
            var o = s(n("./node_modules/prop-types/index.js")),
                r = s(n("./node_modules/react/index.js")),
                i = n("./node_modules/react-dom/index.js"),
                a = s(n("./node_modules/react-transition-group/TransitionGroup.js"));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            o.default.bool.isRequired;
            var c = function(e) {
                    function t() {
                        var n, o;
                        ! function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
                        return n = o = l(this, e.call.apply(e, [this].concat(a))), u.call(o), l(o, n)
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
                        var a, s = this.props.children,
                            l = r.default.Children.toArray(s)[n];
                        l.props[t] && (a = l.props)[t].apply(a, o), this.props[t] && this.props[t]((0, i.findDOMNode)(this))
                    }, t.prototype.render = function e() {
                        var t = this.props,
                            n = t.children,
                            o = t.in,
                            i = function s(e, t) {
                                var n = {};
                                for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                                return n
                            }(t, ["children", "in"]),
                            l = r.default.Children.toArray(n),
                            c = l[0],
                            u = l[1];
                        return delete i.onEnter, delete i.onEntering, delete i.onEntered, delete i.onExit, delete i.onExiting, delete i.onExited, r.default.createElement(a.default, i, o ? r.default.cloneElement(c, {
                            key: "first",
                            onEnter: this.handleEnter,
                            onEntering: this.handleEntering,
                            onEntered: this.handleEntered
                        }) : r.default.cloneElement(u, {
                            key: "second",
                            onEnter: this.handleExit,
                            onEntering: this.handleExiting,
                            onEntered: this.handleExited
                        }))
                    }, t
                }(r.default.Component),
                u = function e() {
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
            c.propTypes = {}, t.default = c, e.exports = t.default
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
                i = s(n("./node_modules/react/index.js")),
                a = s(n("./node_modules/react-dom/index.js"));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            n("./node_modules/react-transition-group/utils/PropTypes.js");
            var l = t.UNMOUNTED = "unmounted",
                c = t.EXITED = "exited",
                u = t.ENTERING = "entering",
                d = t.ENTERED = "entered",
                p = t.EXITING = "exiting",
                f = function(e) {
                    function t(n, o) {
                        ! function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var i = function a(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, e.call(this, n, o)),
                            s = o.transitionGroup,
                            p = s && !s.isMounting ? n.enter : n.appear,
                            f = void 0;
                        return i.nextStatus = null, n.in ? p ? (f = c, i.nextStatus = u) : f = d : f = n.unmountOnExit || n.mountOnEnter ? l : c, i.state = {
                            status: f
                        }, i.nextCallback = null, i
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
                            status: c
                        }), n !== u && n !== d && (this.nextStatus = u)) : n !== u && n !== d || (this.nextStatus = p)
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
                            var o = a.default.findDOMNode(this);
                            n === u ? this.performEnter(o, t) : this.performExit(o)
                        } else this.props.unmountOnExit && this.state.status === c && this.setState({
                            status: l
                        })
                    }, t.prototype.performEnter = function e(t, n) {
                        var o = this,
                            r = this.props.enter,
                            i = this.context.transitionGroup ? this.context.transitionGroup.isMounting : n,
                            a = this.getTimeouts();
                        n || r ? (this.props.onEnter(t, i), this.safeSetState({
                            status: u
                        }, function() {
                            o.props.onEntering(t, i), o.onTransitionEnd(t, a.enter, function() {
                                o.safeSetState({
                                    status: d
                                }, function() {
                                    o.props.onEntered(t, i)
                                })
                            })
                        })) : this.safeSetState({
                            status: d
                        }, function() {
                            o.props.onEntered(t)
                        })
                    }, t.prototype.performExit = function e(t) {
                        var n = this,
                            o = this.props.exit,
                            r = this.getTimeouts();
                        o ? (this.props.onExit(t), this.safeSetState({
                            status: p
                        }, function() {
                            n.props.onExiting(t), n.onTransitionEnd(t, r.exit, function() {
                                n.safeSetState({
                                    status: c
                                }, function() {
                                    n.props.onExited(t)
                                })
                            })
                        })) : this.safeSetState({
                            status: c
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
                            r = function a(e, t) {
                                var n = {};
                                for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                                return n
                            }(n, ["children"]);
                        if (delete r.in, delete r.mountOnEnter, delete r.unmountOnExit, delete r.appear, delete r.enter, delete r.exit, delete r.timeout, delete r.addEndListener, delete r.onEnter, delete r.onEntering, delete r.onEntered, delete r.onExit, delete r.onExiting, delete r.onExited, "function" == typeof o) return o(t, r);
                        var s = i.default.Children.only(o);
                        return i.default.cloneElement(s, r)
                    }, t
                }(i.default.Component);

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
                i = n("./node_modules/react/index.js"),
                a = l(i),
                s = n("./node_modules/react-transition-group/utils/ChildMapping.js");

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = Object.values || function(e) {
                    return Object.keys(e).map(function(t) {
                        return e[t]
                    })
                },
                u = (r.default.any, r.default.node, r.default.bool, r.default.bool, r.default.bool, r.default.func, function(e) {
                    function t(n, o) {
                        ! function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var a = function l(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, e.call(this, n, o));
                        return a.state = {
                            children: (0, s.getChildMapping)(n.children, function(e) {
                                return (0, i.cloneElement)(e, {
                                    onExited: a.handleExited.bind(a, e),
                                    in: !0,
                                    appear: a.getProp(e, "appear"),
                                    enter: a.getProp(e, "enter"),
                                    exit: a.getProp(e, "exit")
                                })
                            })
                        }, a
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
                            r = (0, s.getChildMapping)(t.children),
                            a = (0, s.mergeChildMappings)(o, r);
                        Object.keys(a).forEach(function(e) {
                            var s = a[e];
                            if ((0, i.isValidElement)(s)) {
                                var l = e in o,
                                    c = e in r,
                                    u = o[e],
                                    d = (0, i.isValidElement)(u) && !u.props.in;
                                !c || l && !d ? c || !l || d ? c && l && (0, i.isValidElement)(u) && (a[e] = (0, i.cloneElement)(s, {
                                    onExited: n.handleExited.bind(n, s),
                                    in: u.props.in,
                                    exit: n.getProp(s, "exit", t),
                                    enter: n.getProp(s, "enter", t)
                                })) : a[e] = (0, i.cloneElement)(s, {
                                    in: !1
                                }) : a[e] = (0, i.cloneElement)(s, {
                                    onExited: n.handleExited.bind(n, s),
                                    in: !0,
                                    exit: n.getProp(s, "exit", t),
                                    enter: n.getProp(s, "enter", t)
                                })
                            }
                        }), this.setState({
                            children: a
                        })
                    }, t.prototype.handleExited = function e(t, n) {
                        var r = (0, s.getChildMapping)(this.props.children);
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
                            r = function i(e, t) {
                                var n = {};
                                for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                                return n
                            }(t, ["component", "childFactory"]),
                            s = c(this.state.children).map(o);
                        return delete r.appear, delete r.enter, delete r.exit, null === n ? s : a.default.createElement(n, r, s)
                    }, t
                }(a.default.Component));
            u.childContextTypes = {
                transitionGroup: r.default.object.isRequired
            }, u.propTypes = {}, u.defaultProps = {
                component: "div",
                childFactory: function e(t) {
                    return t
                }
            }, t.default = u, e.exports = t.default
        },
        "./node_modules/react-transition-group/index.js": function(e, t, n) {
            "use strict";
            var o = s(n("./node_modules/react-transition-group/CSSTransition.js")),
                r = s(n("./node_modules/react-transition-group/ReplaceTransition.js")),
                i = s(n("./node_modules/react-transition-group/TransitionGroup.js")),
                a = s(n("./node_modules/react-transition-group/Transition.js"));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = {
                Transition: a.default,
                TransitionGroup: i.default,
                ReplaceTransition: r.default,
                CSSTransition: o.default
            }
        },
        "./node_modules/react-transition-group/utils/ChildMapping.js": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.getChildMapping = function o(e, t) {
                var n = Object.create(null);
                return e && i.Children.map(e, function(e) {
                    return e
                }).forEach(function(e) {
                    n[e.key] = function e(n) {
                        return t && (0, i.isValidElement)(n) ? t(n) : n
                    }(e)
                }), n
            }, t.mergeChildMappings = function r(e, t) {
                function n(n) {
                    return n in t ? t[n] : e[n]
                }
                e = e || {}, t = t || {};
                var o = Object.create(null),
                    r = [];
                for (var i in e) i in t ? r.length && (o[i] = r, r = []) : r.push(i);
                var a = void 0,
                    s = {};
                for (var l in t) {
                    if (o[l])
                        for (a = 0; a < o[l].length; a++) {
                            var c = o[l][a];
                            s[o[l][a]] = n(c)
                        }
                    s[l] = n(l)
                }
                for (a = 0; a < r.length; a++) s[r[a]] = n(r[a]);
                return s
            };
            var i = n("./node_modules/react/index.js")
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
            var r = function i(e) {
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
        "./packages/common/classnames/classnames.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/common/features/features.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/features/features.jsx")
        },
        "./packages/common/i18n/i18n.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/common/routing/routing.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/routing/routing.jsx")
        },
        "./packages/common/state/state.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/state/state.jsx")
        },
        "./packages/common/throttle/throttle.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/throttle/throttle.jsx")
        },
        "./packages/common/tracking/tracking.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/tracking/tracking.jsx")
        },
        "./packages/events/window-scroll/WindowScroll.jsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return f
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = n("./node_modules/react/index.js"),
                d = n("./packages/common/throttle/throttle.jsx"),
                p = n.n(d),
                f = function(e) {
                    function t() {
                        var e, n;
                        Object(o.a)(this, t);
                        for (var r = arguments.length, s = new Array(r), u = 0; u < r; u++) s[u] = arguments[u];
                        return n = Object(i.a)(this, (e = Object(a.a)(t)).call.apply(e, [this].concat(s))), Object(c.a)(Object(l.a)(Object(l.a)(n)), "handleScroll", n.props.throttle ? p()(function() {
                            n.props.callback()
                        }, n.props.throttle, n.props.useDebounce) : n.props.callback), n
                    }
                    return Object(s.a)(t, e), Object(r.a)(t, [{
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
                }(u.Component);
            Object(c.a)(f, "defaultProps", {
                throttle: 200,
                useDebounce: !1,
                useCapture: !1
            })
        },
        "./packages/social/educational-tooltips/index.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = n("./node_modules/react/index.js"),
                d = n("./node_modules/react-redux/es/index.js"),
                p = n("./node_modules/react-apollo/react-apollo.browser.umd.js"),
                f = n("./packages/common/i18n/i18n.jsx"),
                m = n("./packages/events/window-scroll/WindowScroll.jsx"),
                h = n("./packages/common/classnames/classnames.jsx"),
                b = n.n(h),
                g = n("@ta/common.localstorage"),
                v = n.n(g),
                y = n("./packages/common/tracking/tracking.jsx"),
                j = n.n(y),
                _ = n("./packages/common/features/features.jsx"),
                O = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                k = new(n("./packages/common/state/state.jsx").PrivateStateAccessor)("social-scroll-tooltip", {
                    onboardingClosed: !1,
                    forceShowScrollTooltip: !1,
                    forceShowLoginBar: !1
                }),
                x = function e(t) {
                    return k.getFrom(t)
                },
                S = {
                    onboardingDone: function e() {
                        return k.action({
                            type: "DONE_ONBOARDING"
                        })
                    },
                    showScrollTooltip: function e() {
                        return k.action({
                            type: "SHOW_TOOLTIP"
                        })
                    },
                    showLoginBar: function e() {
                        return k.action({
                            type: "SHOW_LOGIN_BAR"
                        })
                    }
                };
            k.setReducer(function(e, t) {
                switch (t.type) {
                    case "DONE_ONBOARDING":
                        return Object(O.a)({}, e, {
                            onboardingClosed: !0
                        });
                    case "SHOW_TOOLTIP":
                        return Object(O.a)({}, e, {
                            forceShowScrollTooltip: !0
                        });
                    case "SHOW_LOGIN_BAR":
                        return Object(O.a)({}, e, {
                            forceShowLoginBar: !0
                        });
                    default:
                        return e
                }
            });
            var E = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "LocationName"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "locationIds"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "ListType",
                                type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "Int"
                                        }
                                    }
                                }
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "locations"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "locationIds"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "locationIds"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "name"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 100
                }
            };
            E.loc.source = {
                body: "98f9aeb38ed9"
            };
            var w = E,
                N = 1,
                T = "social_tooltip",
                C = "social_onboarding_done_reload",
                I = function e() {
                    var t = "no-fid";
                    return window.location.search.substr(1).split("&").forEach(function(e) {
                        var n = e.split("=");
                        "fid" === n[0] && (t = decodeURIComponent(n[1]))
                    }), t
                },
                P = function(e) {
                    function t() {
                        var e, n;
                        Object(o.a)(this, t);
                        for (var r = arguments.length, s = new Array(r), u = 0; u < r; u++) s[u] = arguments[u];
                        return n = Object(i.a)(this, (e = Object(a.a)(t)).call.apply(e, [this].concat(s))), Object(c.a)(Object(l.a)(Object(l.a)(n)), "state", {
                            hasScrolled: !1,
                            isHalfSecondAfterMount: !1
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "onScroll", function() {
                            if (n.shouldShow() && !n.state.hasScrolled) {
                                n.setState({
                                    hasScrolled: !0
                                });
                                var e = I();
                                j()({
                                    module: T,
                                    action: "discover_your_feed_scrolled",
                                    context: e,
                                    value: n.props.locationId
                                }), v.a.remove(C)
                            }
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "shouldShow", function() {
                            if (Object(_.featureIsEnabled)("social_scoped_home_scrolling_tooltip")) return !1;
                            var e = v.a.get("maxTASocialScroll"),
                                t = !n.state.hasScrolled && n.state.isHalfSecondAfterMount && (!e || e < 3);
                            if (Object(_.featureIsEnabled)("ml_more_visible_scroll_tooltip")) return t;
                            if (t) {
                                var o = I();
                                j()({
                                    module: T,
                                    action: "discover_your_feed_control_ghost_impression",
                                    context: o,
                                    value: n.props.locationId
                                })
                            }
                            return (n.props.hasClosedOnboarding || n.foundOnPageReload()) && n.props.locationId === N && null !== n.props.loggedInUserId && !n.state.hasScrolled && n.state.isHalfSecondAfterMount
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "foundOnPageReload", function() {
                            return !!v.a.get(C)
                        }), n
                    }
                    return Object(s.a)(t, e), Object(r.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            var t = this;
                            setTimeout(function() {
                                t.setState({
                                    isHalfSecondAfterMount: !0
                                })
                            }, 500)
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this,
                                n = u.createElement("div", {
                                    className: "social-educational-tooltips-ScrollFeedTooltip__toolTip--1Tvoz",
                                    onClick: function e() {
                                        var n = I();
                                        j()({
                                            module: T,
                                            action: "discover_your_feed_click",
                                            context: n,
                                            value: t.props.locationId
                                        });
                                        var o = window.pageYOffset;
                                        window.scrollTo({
                                            top: t.props.elementToScrollTo.current.getBoundingClientRect().top + o - 54,
                                            behavior: "smooth"
                                        })
                                    }
                                }, u.createElement(y.Track, {
                                    visible: {
                                        module: T,
                                        action: "discover_your_feed_shown",
                                        context: "",
                                        value: this.props.locationId
                                    }
                                }, u.createElement("div", {
                                    className: "social-educational-tooltips-ScrollFeedTooltip__toolTipText--3xx78"
                                }, this.props.locationId === N ? Object(f.localize)("tooltips_scroll_travel_feed_1") : u.createElement(p.Query, {
                                    query: w,
                                    variables: {
                                        locationIds: [this.props.locationId]
                                    }
                                }, function(e) {
                                    var t = e.loading,
                                        n = e.data;
                                    return t ? null : Object(f.localize)("tooltips_geo_updated_1", {
                                        Geo: n.locations[0].name
                                    })
                                })), u.createElement("div", {
                                    className: b()("ui_icon", "single-chevron-down", "social-educational-tooltips-ScrollFeedTooltip__arrow--6gtry", "social-educational-tooltips-ScrollFeedTooltip__bounce--seRaj")
                                })));
                            return u.createElement(u.Fragment, null, u.createElement(m.a, {
                                callback: this.onScroll,
                                throttle: 600
                            }), this.shouldShow() && n)
                        }
                    }]), t
                }(u.Component),
                F = Object(d.connect)(function(e) {
                    return {
                        locationId: e.page.geoId,
                        loggedInUserId: e.auth.loggedInUserId,
                        hasClosedOnboarding: x(e).onboardingClosed
                    }
                })(P),
                R = n("@ta/overlays.managers"),
                V = n("@ta/common.sessionstorage"),
                M = n.n(V),
                D = n("@ta/styleguide.icon"),
                L = function e(t) {
                    var n = t.onClick,
                        o = t.isGhost;
                    return u.createElement("div", {
                        className: b()("social-educational-tooltips-ImprovedScrollFeedToolTip__container--2oz1A", n ? "social-educational-tooltips-ImprovedScrollFeedToolTip__clickable--21gHw" : "", o ? "social-educational-tooltips-ImprovedScrollFeedToolTip__ghost--1PjhC" : ""),
                        onClick: n
                    }, u.createElement(D.Icon, {
                        name: "arrow-down",
                        className: "social-educational-tooltips-ImprovedScrollFeedToolTip__downArrow--w8Kl5"
                    }), Object(f.localize)("scroll_tooltip_variant_1"))
                };
            L.defaultProps = {
                onClick: function e() {},
                isGhost: !1
            };
            var A = L,
                G = 54,
                U = "maxTASocialScroll",
                B = 150,
                H = function(e) {
                    function t() {
                        var e, n;
                        Object(o.a)(this, t);
                        for (var r = arguments.length, s = new Array(r), u = 0; u < r; u++) s[u] = arguments[u];
                        return n = Object(i.a)(this, (e = Object(a.a)(t)).call.apply(e, [this].concat(s))), Object(c.a)(Object(l.a)(Object(l.a)(n)), "state", {
                            isDelayedAfterMount: !1,
                            clickedTooltip: !1,
                            hasScrolled: !1,
                            shouldForceShowViaSessionStorage: !1
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "onClick", function() {
                            n.props.elementToScrollTo && window.scrollTo({
                                top: n.props.elementToScrollTo.current.getBoundingClientRect().top + window.pageYOffset - G,
                                behavior: "smooth"
                            }), n.setState({
                                clickedTooltip: !0
                            })
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "onScroll", function() {
                            n.state.hasScrolled || n.setState({
                                hasScrolled: !0
                            })
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "isGhost", function() {
                            return !n.props.shouldForceShowViaRedux && !n.state.shouldForceShowViaSessionStorage && !Object(_.featureIsEnabled)("social_scoped_home_scrolling_tooltip")
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "hasNotScrolled", function() {
                            return !n.state.hasScrolled && window.pageYOffset < B
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "shouldShow", function(e) {
                            var t = v.a.get(U);
                            return !e && n.state.isDelayedAfterMount && n.hasNotScrolled() && !n.state.clickedTooltip && (!t || t < 3 || n.props.shouldForceShowViaRedux || n.state.shouldForceShowViaSessionStorage)
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "timeoutId", void 0), n
                    }
                    return Object(s.a)(t, e), Object(r.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            var t = this;
                            this.timeoutId = setTimeout(function() {
                                t.setState({
                                    isDelayedAfterMount: !0
                                })
                            }, 500), M.a.has("show_scoped_home_scroll_prompt") && (this.setState({
                                shouldForceShowViaSessionStorage: !0
                            }), M.a.remove("show_scoped_home_scroll_prompt"))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = null)
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this;
                            return u.createElement(R.Opener, {
                                name: "onboarding-interstitial"
                            }, function(e, n) {
                                return t.shouldShow(n) ? u.createElement(y.Track, {
                                    mount: t.isGhost() ? {
                                        module: "social_tooltip | discover_your_feed_ghost",
                                        action: "impression",
                                        context: t.props.feedImpressionId ? t.props.feedImpressionId : "",
                                        parentUid: t.props.puid
                                    } : {
                                        module: "social_tooltip | discover_your_feed",
                                        action: "impression",
                                        context: t.props.feedImpressionId ? t.props.feedImpressionId : "",
                                        parentUid: t.props.puid
                                    },
                                    click: {
                                        module: "social_tooltip | discover_your_feed",
                                        action: "click",
                                        context: t.props.feedImpressionId ? t.props.feedImpressionId : "",
                                        parentUid: t.props.puid
                                    }
                                }, u.createElement(A, {
                                    onClick: t.onClick,
                                    isGhost: t.isGhost()
                                }), u.createElement(m.a, {
                                    callback: t.onScroll,
                                    throttle: 600
                                })) : null
                            })
                        }
                    }]), t
                }(u.Component);
            Object(c.a)(H, "defaultProps", {
                elementToScrollTo: void 0
            });
            var z = Object(d.connect)(function(e) {
                    return {
                        puid: e.tracking.uid,
                        shouldForceShowViaRedux: x(e).forceShowScrollTooltip
                    }
                })(H),
                W = n("./packages/common/routing/routing.jsx"),
                q = n("./node_modules/react-transition-group/index.js"),
                X = n("@ta/social.login-gate"),
                Y = n("@ta/styleguide.button"),
                J = n.n(Y),
                K = function e(t) {
                    var n = t.shouldShow,
                        o = t.trackingOnLoginClick,
                        r = t.trackingOnJoinClick,
                        i = t.trackingOnShow,
                        a = t.isGhost,
                        s = t.productId;
                    return u.createElement(q.CSSTransition, {
                        timeout: 500,
                        classNames: {
                            enter: "social-educational-tooltips-LoginBar__slideInEnter--TgokM",
                            enterActive: "social-educational-tooltips-LoginBar__slideInEnterActive--2Kxix"
                        },
                        in: n,
                        unmountOnExit: !0
                    }, u.createElement("div", {
                        className: "".concat("social-educational-tooltips-LoginBar__container--3yd2r", " ").concat(a ? "social-educational-tooltips-LoginBar__ghost--3ORLB" : "")
                    }, u.createElement(y.Track, {
                        mount: Object(O.a)({
                            once: !0
                        }, i)
                    }, u.createElement("span", {
                        className: "social-educational-tooltips-LoginBar__leftText--3gOCI"
                    }, Object(f.localize)("social_bar_prompt"))), u.createElement("div", {
                        className: "social-educational-tooltips-LoginBar__rightSide--6yHke"
                    }, u.createElement(X.SocialLoginGate, {
                        flowOrigin: "login",
                        pid: s
                    }, function(e) {
                        return u.createElement("div", {
                            className: "social-educational-tooltips-LoginBar__loginButton--3t91a"
                        }, u.createElement(y.Track, {
                            click: Object(O.a)({
                                once: !1
                            }, o)
                        }, u.createElement(J.a, {
                            onClick: function t() {
                                e()
                            },
                            type: "none",
                            size: "large"
                        }, u.createElement("span", null, Object(f.localize)("social_bar_log_in")))))
                    }), u.createElement(X.SocialLoginGate, {
                        flowOrigin: "join",
                        pid: s
                    }, function(e) {
                        return u.createElement(y.Track, {
                            click: Object(O.a)({
                                once: !1
                            }, r)
                        }, u.createElement(J.a, {
                            onClick: function t() {
                                e()
                            },
                            type: "secondary",
                            size: "large"
                        }, u.createElement("span", null, Object(f.localize)("social_bar_join"))))
                    }))))
                };
            K.defaultProps = {
                trackingOnLoginClick: void 0,
                trackingOnJoinClick: void 0,
                trackingOnShow: void 0,
                isGhost: !1,
                productId: void 0
            };
            var $ = K,
                Q = 300,
                Z = function(e) {
                    function t() {
                        var e, n;
                        Object(o.a)(this, t);
                        for (var r = arguments.length, s = new Array(r), u = 0; u < r; u++) s[u] = arguments[u];
                        return n = Object(i.a)(this, (e = Object(a.a)(t)).call.apply(e, [this].concat(s))), Object(c.a)(Object(l.a)(Object(l.a)(n)), "state", {
                            hasScrolledPastSecondSection: !1,
                            shouldForceShowViaSessionStorage: !1
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "onScroll", function() {
                            !n.state.hasScrolledPastSecondSection && n.props.topOfFeed.current.getBoundingClientRect().top + Q < 0 && n.setState({
                                hasScrolledPastSecondSection: !0
                            })
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "getProductId", function() {
                            return n.props.shouldForceShowViaRedux || n.state.shouldForceShowViaSessionStorage ? 40510 : -1
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "isScopedHome", function(e) {
                            return "latitude" in e || "longitude" in e || "geo" in e
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "isGhost", function() {
                            return !n.props.shouldForceShowViaRedux && !n.state.shouldForceShowViaSessionStorage && !Object(_.featureIsEnabled)("social_scoped_home_login_bar")
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "shouldBeOnPage", function(e) {
                            return !n.props.isUserLoggedIn && "DESKTOP" === n.props.viewportCategory && (n.isScopedHome(e) || n.props.shouldForceShowViaRedux || n.state.shouldForceShowViaSessionStorage)
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "shouldBeVisible", function(e) {
                            return n.shouldBeOnPage(e) && n.state.hasScrolledPastSecondSection
                        }), n
                    }
                    return Object(s.a)(t, e), Object(r.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            M.a.has("show_scoped_home_login_bar") && (this.setState({
                                shouldForceShowViaSessionStorage: !0
                            }), M.a.remove("show_scoped_home_login_bar"))
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this;
                            return u.createElement(W.RouteConsumer, null, function(e) {
                                var n = e.route;
                                return t.shouldBeOnPage(n) && u.createElement(u.Fragment, null, u.createElement(m.a, {
                                    callback: t.onScroll,
                                    throttle: 600
                                }), u.createElement($, {
                                    shouldShow: t.shouldBeVisible(n),
                                    trackingOnLoginClick: {
                                        module: "social_tooltip | login_bar_login",
                                        action: "click",
                                        context: t.props.feedImpressionId ? t.props.feedImpressionId : "",
                                        parentUid: t.props.puid
                                    },
                                    trackingOnJoinClick: {
                                        module: "social_tooltip | login_bar_join",
                                        action: "click",
                                        context: t.props.feedImpressionId ? t.props.feedImpressionId : "",
                                        parentUid: t.props.puid
                                    },
                                    trackingOnShow: t.isGhost() ? {
                                        module: "social_tooltip | login_bar_ghost",
                                        action: "impression",
                                        context: t.props.feedImpressionId ? t.props.feedImpressionId : "",
                                        parentUid: t.props.puid
                                    } : {
                                        module: "social_tooltip | login_bar",
                                        action: "impression",
                                        context: t.props.feedImpressionId ? t.props.feedImpressionId : "",
                                        parentUid: t.props.puid
                                    },
                                    isGhost: t.isGhost(),
                                    productId: t.getProductId()
                                }))
                            })
                        }
                    }]), t
                }(u.Component),
                ee = Object(d.connect)(function(e) {
                    return {
                        isUserLoggedIn: !!e.auth.loggedInUserId,
                        puid: e.tracking.uid,
                        viewportCategory: e.meta.device.viewportCategory,
                        shouldForceShowViaRedux: x(e).forceShowLoginBar
                    }
                })(Z),
                te = n("@ta/social.feed"),
                ne = n("@ta/social.feed-filter"),
                oe = n("@ta/overlays.pieces"),
                re = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "FeedHasNewContent"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "locationId"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Int"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "placement"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "PlacementEnumInput"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "puid"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "sessionType"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "SessionTypeEnumInput"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "allowedTypes"
                                }
                            },
                            type: {
                                kind: "ListType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "FeedSectionItemTypeInput"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "latitude"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Float"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "longitude"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Float"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "restoreFromFeedId"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "ipGeo"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Int"
                                    }
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "socialFeedHasNewContent"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "feedRequest"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "placement"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "placement"
                                                }
                                            }
                                        }, {
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "puid"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "puid"
                                                }
                                            }
                                        }, {
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "sessionType"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "sessionType"
                                                }
                                            }
                                        }, {
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "context"
                                            },
                                            value: {
                                                kind: "ObjectValue",
                                                fields: [{
                                                    kind: "ObjectField",
                                                    name: {
                                                        kind: "Name",
                                                        value: "location"
                                                    },
                                                    value: {
                                                        kind: "Variable",
                                                        name: {
                                                            kind: "Name",
                                                            value: "locationId"
                                                        }
                                                    }
                                                }]
                                            }
                                        }, {
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "limit"
                                            },
                                            value: {
                                                kind: "IntValue",
                                                value: "20"
                                            }
                                        }, {
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "allowedTypes"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "allowedTypes"
                                                }
                                            }
                                        }, {
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "latitude"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "latitude"
                                                }
                                            }
                                        }, {
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "longitude"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "longitude"
                                                }
                                            }
                                        }, {
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "restoreFromUid"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "restoreFromFeedId"
                                                }
                                            }
                                        }, {
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "ipGeo"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "ipGeo"
                                                }
                                            }
                                        }]
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasNewContent"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "impressionId"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 646
                    }
                };
            re.loc.source = {
                body: "c1e78e96e7b9"
            };
            var ie = re,
                ae = function(e) {
                    function t() {
                        var e, n;
                        Object(o.a)(this, t);
                        for (var r = arguments.length, s = new Array(r), d = 0; d < r; d++) s[d] = arguments[d];
                        return n = Object(i.a)(this, (e = Object(a.a)(t)).call.apply(e, [this].concat(s))), Object(c.a)(Object(l.a)(Object(l.a)(n)), "state", {
                            checkNewFeed: !1,
                            promptStyle: {
                                top: 0,
                                left: 0
                            }
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "promptRef", u.createRef()), n
                    }
                    return Object(s.a)(t, e), Object(r.a)(t, [{
                        key: "componentDidUpdate",
                        value: function e(t) {
                            t.loggedInUserId || !this.props.loggedInUserId || this.state.checkNewFeed || this.setState({
                                checkNewFeed: !0,
                                promptStyle: this.calcPromptPosition()
                            })
                        }
                    }, {
                        key: "calcPromptPosition",
                        value: function e() {
                            var t = this.props.topOfFeed.current.getBoundingClientRect(),
                                n = t.top,
                                o = t.right - t.left;
                            return {
                                top: n > 50 ? n + 50 : 120,
                                left: t.left + o / 2
                            }
                        }
                    }, {
                        key: "refreshFeed",
                        value: function e() {
                            var t = this;
                            this.setState({
                                checkNewFeed: !1
                            }, function() {
                                t.props.reloadFeedCallback(), t.props.topOfFeed.current.getBoundingClientRect().top < 0 && window.scrollTo({
                                    top: t.props.topOfFeed.current.getBoundingClientRect().top,
                                    behavior: "smooth"
                                })
                            })
                        }
                    }, {
                        key: "updatePromptPosition",
                        value: function e() {
                            if (this.state.checkNewFeed) {
                                var t = this.calcPromptPosition();
                                t.left === this.state.promptStyle.left && t.top === this.state.promptStyle.top || this.setState({
                                    promptStyle: this.calcPromptPosition()
                                })
                            }
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this,
                                n = Object(ne.getAllowedTypes)(this.props.allowedTypes);
                            return this.state.checkNewFeed ? u.createElement(p.Query, {
                                query: ie,
                                variables: {
                                    placement: this.props.placement,
                                    locationId: "".concat(this.props.locationId),
                                    sessionType: Object(te.sessionType)(this.props.viewportCategory),
                                    puid: this.props.puid,
                                    allowedTypes: n,
                                    latitude: this.props.latitude || null,
                                    longitude: this.props.longitude || null,
                                    restoreFromFeedId: this.props.feedIdToRestore,
                                    ipGeo: "".concat(this.props.ipGeo)
                                }
                            }, function(e) {
                                var n = e.loading,
                                    o = e.data;
                                if (!n && o && o.socialFeedHasNewContent && o.socialFeedHasNewContent.hasNewContent) {
                                    var r = {
                                        position: "fixed",
                                        top: "".concat(t.state.promptStyle.top, "px"),
                                        left: "".concat(t.state.promptStyle.left, "px"),
                                        transform: "translateX(-50%)"
                                    };
                                    return u.createElement(u.Fragment, null, u.createElement(oe.Overlay, {
                                        overlayType: "background",
                                        position: r
                                    }, u.createElement("a", {
                                        ref: t.promptRef,
                                        className: "social-educational-tooltips-CheckNewFeed__text_container--1MiI4",
                                        onClick: function e() {
                                            t.refreshFeed()
                                        }
                                    }, u.createElement(D.Icon, {
                                        name: "arrow-up",
                                        className: "social-educational-tooltips-CheckNewFeed__icon--3usVd"
                                    }), u.createElement("span", {
                                        className: "social-educational-tooltips-CheckNewFeed__text--1M1Pi"
                                    }, Object(f.localize)("social_feed_prompt_refresh")))), u.createElement(m.a, {
                                        callback: function e() {
                                            t.updatePromptPosition()
                                        },
                                        throttle: 50
                                    }))
                                }
                                return null
                            }) : null
                        }
                    }]), t
                }(u.Component),
                se = Object(d.connect)(function(e) {
                    return {
                        viewportCategory: e.meta.device.viewportCategory,
                        loggedInUserId: e.auth.loggedInUserId
                    }
                })(ae);
            n.d(t, "ScrollFeedTooltip", function() {
                return F
            }), n.d(t, "OnboardingCompleteReload", function() {
                return C
            }), n.d(t, "HomeFeedScrollPrompt", function() {
                return z
            }), n.d(t, "ScopedHomeLoggedOutUsersLoginBar", function() {
                return ee
            }), n.d(t, "CheckNewFeed", function() {
                return se
            }), n.d(t, "getState", function() {
                return x
            }), n.d(t, "ACTIONS", function() {
                return S
            })
        },
        "@ta/common.localstorage": function(t, n) {
            t.exports = e
        },
        "@ta/common.sessionstorage": function(e, n) {
            e.exports = t
        },
        "@ta/overlays.managers": function(e, t) {
            e.exports = n
        },
        "@ta/overlays.pieces": function(e, t) {
            e.exports = o
        },
        "@ta/social.feed": function(e, t) {
            e.exports = r
        },
        "@ta/social.feed-filter": function(e, t) {
            e.exports = i
        },
        "@ta/social.login-gate": function(e, t) {
            e.exports = a
        },
        "@ta/styleguide.button": function(e, t) {
            e.exports = s
        },
        "@ta/styleguide.icon": function(e, t) {
            e.exports = l
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = c
        }
    })
});
//# sourceMappingURL=social.educational-tooltips.6793b032c8.js.map