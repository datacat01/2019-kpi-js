define("@ta/social.ugc-actions", ["@ta/overlays.pieces", "@ta/social.login-gate", "@ta/styleguide.icon", "@ta/tracking.interactions", "@ta/common.global"], function(e, t, n, o, r) {
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
        }, n.p = "", n(n.s = "./packages/social/ugc-actions/index.jsx")
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
        "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js": function(e, t, n) {
            "use strict";

            function o(e, t) {
                if (null == e) return {};
                var n, o, r = function i(e, t) {
                    if (null == e) return {};
                    var n, o, r = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < s.length; o++) n = s[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }
            n.d(t, "a", function() {
                return o
            })
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
            e.exports = function o(e, t, n, r, i, s, a, l) {
                if (!e) {
                    var c;
                    if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var u = [n, r, i, s, a, l],
                            p = 0;
                        (c = new Error(t.replace(/%s/g, function() {
                            return u[p++]
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
                function e(e, t, n, o, s, a) {
                    a !== i && r(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
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
                r = function i(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n("./node_modules/prop-types/index.js")),
                s = p(n("./node_modules/dom-helpers/class/addClass.js")),
                a = p(n("./node_modules/dom-helpers/class/removeClass.js")),
                l = p(n("./node_modules/react/index.js")),
                c = p(n("./node_modules/react-transition-group/Transition.js")),
                u = n("./node_modules/react-transition-group/utils/PropTypes.js");

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
                        return (0, s.default)(t, e)
                    })
                },
                m = function e(t, n) {
                    return t && n && n.split(" ").forEach(function(e) {
                        return (0, a.default)(t, e)
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
                        for (var i = arguments.length, s = Array(i), a = 0; a < i; a++) s[a] = arguments[a];
                        return n = o = d(this, e.call.apply(e, [this].concat(s))), o.onEnter = function(e, t) {
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
                            i = o.activeClassName,
                            s = o.doneClassName;
                        r && m(t, r), i && m(t, i), s && m(t, s)
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
            var o = a(n("./node_modules/prop-types/index.js")),
                r = a(n("./node_modules/react/index.js")),
                i = n("./node_modules/react-dom/index.js"),
                s = a(n("./node_modules/react-transition-group/TransitionGroup.js"));

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
            var c = function(e) {
                    function t() {
                        var n, o;
                        ! function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var i = arguments.length, s = Array(i), a = 0; a < i; a++) s[a] = arguments[a];
                        return n = o = l(this, e.call.apply(e, [this].concat(s))), u.call(o), l(o, n)
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
                        var s, a = this.props.children,
                            l = r.default.Children.toArray(a)[n];
                        l.props[t] && (s = l.props)[t].apply(s, o), this.props[t] && this.props[t]((0, i.findDOMNode)(this))
                    }, t.prototype.render = function e() {
                        var t = this.props,
                            n = t.children,
                            o = t.in,
                            i = function a(e, t) {
                                var n = {};
                                for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                                return n
                            }(t, ["children", "in"]),
                            l = r.default.Children.toArray(n),
                            c = l[0],
                            u = l[1];
                        return delete i.onEnter, delete i.onEntering, delete i.onEntered, delete i.onExit, delete i.onExiting, delete i.onExited, r.default.createElement(s.default, i, o ? r.default.cloneElement(c, {
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
                i = a(n("./node_modules/react/index.js")),
                s = a(n("./node_modules/react-dom/index.js"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            n("./node_modules/react-transition-group/utils/PropTypes.js");
            var l = t.UNMOUNTED = "unmounted",
                c = t.EXITED = "exited",
                u = t.ENTERING = "entering",
                p = t.ENTERED = "entered",
                d = t.EXITING = "exiting",
                f = function(e) {
                    function t(n, o) {
                        ! function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var i = function s(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, e.call(this, n, o)),
                            a = o.transitionGroup,
                            d = a && !a.isMounting ? n.enter : n.appear,
                            f = void 0;
                        return i.nextStatus = null, n.in ? d ? (f = c, i.nextStatus = u) : f = p : f = n.unmountOnExit || n.mountOnEnter ? l : c, i.state = {
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
                        }), n !== u && n !== p && (this.nextStatus = u)) : n !== u && n !== p || (this.nextStatus = d)
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
                            var o = s.default.findDOMNode(this);
                            n === u ? this.performEnter(o, t) : this.performExit(o)
                        } else this.props.unmountOnExit && this.state.status === c && this.setState({
                            status: l
                        })
                    }, t.prototype.performEnter = function e(t, n) {
                        var o = this,
                            r = this.props.enter,
                            i = this.context.transitionGroup ? this.context.transitionGroup.isMounting : n,
                            s = this.getTimeouts();
                        n || r ? (this.props.onEnter(t, i), this.safeSetState({
                            status: u
                        }, function() {
                            o.props.onEntering(t, i), o.onTransitionEnd(t, s.enter, function() {
                                o.safeSetState({
                                    status: p
                                }, function() {
                                    o.props.onEntered(t, i)
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
                            r = function s(e, t) {
                                var n = {};
                                for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                                return n
                            }(n, ["children"]);
                        if (delete r.in, delete r.mountOnEnter, delete r.unmountOnExit, delete r.appear, delete r.enter, delete r.exit, delete r.timeout, delete r.addEndListener, delete r.onEnter, delete r.onEntering, delete r.onEntered, delete r.onExit, delete r.onExiting, delete r.onExited, "function" == typeof o) return o(t, r);
                        var a = i.default.Children.only(o);
                        return i.default.cloneElement(a, r)
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
                s = l(i),
                a = n("./node_modules/react-transition-group/utils/ChildMapping.js");

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
                        var s = function l(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, e.call(this, n, o));
                        return s.state = {
                            children: (0, a.getChildMapping)(n.children, function(e) {
                                return (0, i.cloneElement)(e, {
                                    onExited: s.handleExited.bind(s, e),
                                    in: !0,
                                    appear: s.getProp(e, "appear"),
                                    enter: s.getProp(e, "enter"),
                                    exit: s.getProp(e, "exit")
                                })
                            })
                        }, s
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
                            s = (0, a.mergeChildMappings)(o, r);
                        Object.keys(s).forEach(function(e) {
                            var a = s[e];
                            if ((0, i.isValidElement)(a)) {
                                var l = e in o,
                                    c = e in r,
                                    u = o[e],
                                    p = (0, i.isValidElement)(u) && !u.props.in;
                                !c || l && !p ? c || !l || p ? c && l && (0, i.isValidElement)(u) && (s[e] = (0, i.cloneElement)(a, {
                                    onExited: n.handleExited.bind(n, a),
                                    in: u.props.in,
                                    exit: n.getProp(a, "exit", t),
                                    enter: n.getProp(a, "enter", t)
                                })) : s[e] = (0, i.cloneElement)(a, {
                                    in: !1
                                }) : s[e] = (0, i.cloneElement)(a, {
                                    onExited: n.handleExited.bind(n, a),
                                    in: !0,
                                    exit: n.getProp(a, "exit", t),
                                    enter: n.getProp(a, "enter", t)
                                })
                            }
                        }), this.setState({
                            children: s
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
                            r = function i(e, t) {
                                var n = {};
                                for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                                return n
                            }(t, ["component", "childFactory"]),
                            a = c(this.state.children).map(o);
                        return delete r.appear, delete r.enter, delete r.exit, null === n ? a : s.default.createElement(n, r, a)
                    }, t
                }(s.default.Component));
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
            var o = a(n("./node_modules/react-transition-group/CSSTransition.js")),
                r = a(n("./node_modules/react-transition-group/ReplaceTransition.js")),
                i = a(n("./node_modules/react-transition-group/TransitionGroup.js")),
                s = a(n("./node_modules/react-transition-group/Transition.js"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = {
                Transition: s.default,
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
                var s = void 0,
                    a = {};
                for (var l in t) {
                    if (o[l])
                        for (s = 0; s < o[l].length; s++) {
                            var c = o[l][s];
                            a[o[l][s]] = n(c)
                        }
                    a[l] = n(l)
                }
                for (s = 0; s < r.length; s++) a[r[s]] = n(r[s]);
                return a
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
                s = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = n("./node_modules/react/index.js"),
                p = n("./packages/common/throttle/throttle.jsx"),
                d = n.n(p),
                f = function(e) {
                    function t() {
                        var e, n;
                        Object(o.a)(this, t);
                        for (var r = arguments.length, a = new Array(r), u = 0; u < r; u++) a[u] = arguments[u];
                        return n = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(a))), Object(c.a)(Object(l.a)(Object(l.a)(n)), "handleScroll", n.props.throttle ? d()(function() {
                            n.props.callback()
                        }, n.props.throttle, n.props.useDebounce) : n.props.callback), n
                    }
                    return Object(a.a)(t, e), Object(r.a)(t, [{
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
        "./packages/social/ugc-actions/index.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("./node_modules/react/index.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                p = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                d = n("./node_modules/react-redux/es/index.js"),
                f = n("./node_modules/react-transition-group/index.js"),
                m = n("./packages/common/state/state.jsx"),
                h = n("./packages/common/routing/routing.jsx"),
                b = n("./packages/common/classnames/classnames.jsx"),
                g = n.n(b),
                y = n("./packages/common/tracking/tracking.jsx"),
                v = n.n(y),
                E = n("@ta/social.login-gate"),
                j = n("@ta/tracking.interactions"),
                x = n("@ta/overlays.pieces"),
                _ = function e(t) {
                    return o.createElement("div", {
                        className: "social-ugc-actions-Backdrop__backdrop--3colg",
                        onClick: t.onClick
                    })
                };
            _.defaultProps = {
                onClick: void 0
            };
            var O = _,
                C = n("@ta/styleguide.icon"),
                w = function e(t) {
                    var n = t.icon,
                        r = t.className,
                        i = t.onClick,
                        s = t.invert;
                    return o.createElement("span", {
                        className: g()("social-ugc-actions-SocialActionButton__action_button--3fJPk", r, Object(p.a)({}, "social-ugc-actions-SocialActionButton__invert--N_kIO", s)),
                        onClick: i
                    }, o.createElement(C.Icon, {
                        name: n
                    }))
                };
            w.defaultProps = {
                className: void 0,
                onClick: void 0,
                invert: !1
            };
            var k = w,
                S = {
                    enter: "social-ugc-actions-UploaderActionButton__enter--1nYyi",
                    enterActive: "social-ugc-actions-UploaderActionButton__enter_active--3BGws",
                    exit: "social-ugc-actions-UploaderActionButton__exit--17Ec8",
                    exitActive: "social-ugc-actions-UploaderActionButton__exit_active--3UCJx"
                },
                T = function(e) {
                    function t() {
                        var e, n;
                        Object(i.a)(this, t);
                        for (var o = arguments.length, r = new Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                        return n = Object(a.a)(this, (e = Object(l.a)(t)).call.apply(e, [this].concat(r))), Object(p.a)(Object(u.a)(Object(u.a)(n)), "state", {
                            show: !1
                        }), Object(p.a)(Object(u.a)(Object(u.a)(n)), "onClick", function(e) {
                            n.props.onClick && n.props.onClick(e), n.toggle()
                        }), Object(p.a)(Object(u.a)(Object(u.a)(n)), "toggle", function(e) {
                            n.setState(function(t) {
                                return {
                                    show: null != e ? e : !t.show
                                }
                            }, function() {
                                n.props.onChange && n.props.onChange(n.state.show)
                            })
                        }), n
                    }
                    return Object(c.a)(t, e), Object(s.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this,
                                n = this.props,
                                i = n.className,
                                s = n.style,
                                a = n.showGlobalOverlay,
                                l = n.page,
                                c = n.isMember,
                                u = this.props.actions.slice(0, 10),
                                d = this.state.show,
                                m = 300 + 30 * u.length + 50;
                            return u.length > 0 && o.createElement(o.Fragment, null, u.map(function(e) {
                                return e.overlay ? o.createElement(o.Fragment, {
                                    key: e.name
                                }, e.overlay()) : null
                            }), this.state.show && o.createElement(o.Fragment, null, o.createElement(O, {
                                onClick: function e() {
                                    t.toggle(!1)
                                }
                            }), o.createElement(x.BlockScroll, {
                                iOS11BugFix: !1
                            })), o.createElement(E.SocialLoginGate, null, function(e) {
                                return o.createElement("div", {
                                    className: g()("social-ugc-actions-UploaderActionButton__upload_container--1wUKt", i),
                                    style: s
                                }, o.createElement(j.InteractionLogger, null, function(e) {
                                    return o.createElement(k, {
                                        invert: d,
                                        className: g()("social-ugc-actions-UploaderActionButton__primary_button--14j2-", Object(p.a)({}, "social-ugc-actions-UploaderActionButton__show--QDvjj", d)),
                                        icon: "plus",
                                        onClick: function n(o) {
                                            e(o, "postContentCtaClick", {
                                                action: "NO_SELECTION",
                                                entrypoint: "FAB",
                                                isMemberSignedIn: c
                                            }), v()({
                                                module: "postContentCtaClick",
                                                action: "NO_SELECTION",
                                                context: "FAB|".concat(l),
                                                isMemberSignedIn: c
                                            }), t.onClick(o)
                                        }
                                    })
                                }), o.createElement(f.TransitionGroup, {
                                    component: null
                                }, d && u.map(function(n) {
                                    var i = n.label,
                                        s = n.icon,
                                        u = n.onClick,
                                        p = Object(r.a)(n, ["label", "icon", "onClick"]);
                                    return o.createElement(f.CSSTransition, {
                                        classNames: S,
                                        timeout: m,
                                        unmountOnExit: !0,
                                        key: i
                                    }, o.createElement(p.url ? h.Link : "span", {
                                        className: "social-ugc-actions-UploaderActionButton__upload_item--23jkb",
                                        onClick: u,
                                        href: p.url
                                    }, o.createElement(j.InteractionLogger, null, function(n) {
                                        return o.createElement(o.Fragment, null, o.createElement(k, {
                                            icon: s,
                                            onClick: function o(r) {
                                                void 0 !== p.trackingName && (n(r, "postContentCtaClick", {
                                                    action: p.trackingName,
                                                    entrypoint: "FAB",
                                                    isMemberSignedIn: c
                                                }), v()({
                                                    module: "postContentCtaClick",
                                                    action: p.trackingName,
                                                    context: "FAB|".concat(l),
                                                    isMemberSignedIn: c
                                                })), p.url && r.preventDefault(), e(p.pid).then(function() {
                                                    var e;
                                                    p.name && a(p.name), u && u(r), p.url && (null === (e = window) || void 0 === e ? void 0 : e.location) && (window.location.href = p.url)
                                                }), t.toggle(!1)
                                            }
                                        }), i)
                                    })))
                                })))
                            }))
                        }
                    }]), t
                }(o.Component);
            Object(p.a)(T, "defaultProps", {
                actions: [],
                onClick: void 0,
                onChange: void 0,
                className: void 0,
                style: void 0
            });
            var N = Object(d.connect)(function(e) {
                    return {
                        page: e.route.page,
                        isMember: e.auth.isMember
                    }
                }, {
                    showGlobalOverlay: m.actions.overlays.showGlobalOverlay
                })(T),
                P = n("./packages/events/window-scroll/WindowScroll.jsx"),
                M = function e() {
                    var t, n, o, r = null === (t = document) || void 0 === t ? void 0 : null === (n = t.documentElement) || void 0 === n ? void 0 : n.clientWidth,
                        i = null === (o = window) || void 0 === o ? void 0 : o.innerWidth;
                    return r && i ? r / i : 1
                },
                A = function(e) {
                    function t() {
                        var e, n;
                        Object(i.a)(this, t);
                        for (var o = arguments.length, r = new Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                        return n = Object(a.a)(this, (e = Object(l.a)(t)).call.apply(e, [this].concat(r))), Object(p.a)(Object(u.a)(Object(u.a)(n)), "state", {
                            bottomOffset: 0
                        }), Object(p.a)(Object(u.a)(Object(u.a)(n)), "reposition", function() {
                            if (document && document.documentElement && window && window.innerHeight > window.innerWidth) {
                                var e = document.documentElement.clientHeight - (M() || 1) * window.innerHeight,
                                    t = e > 0 ? e : 0;
                                n.setState({
                                    bottomOffset: t
                                })
                            }
                        }), n
                    }
                    return Object(c.a)(t, e), Object(s.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this.props,
                                n = t.bottom,
                                r = t.right,
                                i = t.isRTL,
                                s = n + this.state.bottomOffset,
                                a = Object(p.a)({
                                    bottom: s
                                }, i ? "left" : "right", r);
                            return o.createElement(o.Fragment, null, this.props.children(a), this.props.isIOSSafari && o.createElement(P.a, {
                                callback: this.reposition,
                                throttle: 500
                            }))
                        }
                    }]), t
                }(o.PureComponent),
                R = Object(d.connect)(function(e) {
                    return {
                        isIOSSafari: "IOS" === e.meta.device.os.family && "SAFARI" === e.meta.device.browser.family && !e.meta.isNativeWebview,
                        isRTL: e.i18n.isRtl
                    }
                })(A),
                I = function e(t) {
                    var n = t.actions,
                        r = t.onClick,
                        i = t.onChange,
                        s = t.bottom,
                        a = t.right;
                    return o.createElement(R, {
                        bottom: s,
                        right: a
                    }, function(e) {
                        return o.createElement(N, {
                            actions: n,
                            onClick: r,
                            onChange: i,
                            className: "social-ugc-actions-SocialFab__overlay--31Qvx",
                            style: e
                        })
                    })
                };
            I.defaultProps = {
                actions: [],
                onClick: void 0,
                onChange: void 0,
                bottom: 12,
                right: 8
            };
            var L = I,
                D = n("./packages/common/i18n/i18n.jsx"),
                G = {
                    Photo: 40467,
                    Review: 40468
                },
                U = function(e) {
                    var t = G[e];
                    switch (e) {
                        case "Feedback":
                            var n = Object(D.localize)("mobile_feedback_subject"),
                                o = Object(D.localize)("mobile_feedback_body_info"),
                                r = "mailto:".concat("userfeedback-svc@tripadvisor.com", "?subject=").concat(n, "&body=").concat(o);
                            return {
                                label: Object(D.localize)("mobile_feedback_title"),
                                icon: "email-fill",
                                url: r,
                                pid: t
                            };
                        case "Review":
                            return {
                                label: Object(D.localize)("ugc_uploader_review_v2"),
                                icon: "pencil-paper",
                                trackingName: "WRITE_REVIEW",
                                url: "/UserReview",
                                pid: t
                            };
                        case "Photo":
                            throw new Error("Default photo option is no longer supported.");
                        case "Video":
                            throw new Error("Default video option is no longer supported.");
                        case "LinkPost":
                            throw new Error("Default link post option is no longer supported.");
                        case "Trip":
                            return {
                                label: Object(D.localize)("ugc_uploader_trip_v2"),
                                icon: "my-trips",
                                pid: t,
                                url: "/Profile"
                            };
                        default:
                            throw new Error("".concat(e, " is not a valid ActionType"))
                    }
                };
            n.d(t, "SocialFab", function() {
                return L
            }), n.d(t, "ugcActionMapper", function() {
                return U
            }), n.d(t, "LoginPID", function() {
                return G
            })
        },
        "@ta/overlays.pieces": function(t, n) {
            t.exports = e
        },
        "@ta/social.login-gate": function(e, n) {
            e.exports = t
        },
        "@ta/styleguide.icon": function(e, t) {
            e.exports = n
        },
        "@ta/tracking.interactions": function(e, t) {
            e.exports = o
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = r
        }
    })
});
//# sourceMappingURL=social.ugc-actions.777c6c4d69.js.map