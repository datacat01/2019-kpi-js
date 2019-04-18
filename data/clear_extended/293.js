define("@ta/social.scroll", ["@ta/overlays.shift", "@ta/styleguide.icon", "@ta/common.global"], function(e, t, n) {
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
        }, n.p = "", n(n.s = "./packages/social/scroll/scroll.jsx")
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
        "./node_modules/@babel/runtime/helpers/esm/extends.js": function(e, t, n) {
            "use strict";

            function o() {
                return (o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
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
        "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js": function(e, t, n) {
            "use strict";

            function o(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }
            n.d(t, "a", function() {
                return o
            })
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
        "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js": function(e, t, n) {
            "use strict";
            var o = n("./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");

            function r(e) {
                return function t(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                }(e) || Object(o.a)(e) || function n() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }
            n.d(t, "a", function() {
                return r
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

            function f(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            var d = function e(t, n) {
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
                        return n = o = f(this, e.call.apply(e, [this].concat(s))), o.onEnter = function(e, t) {
                            var n = o.getClassNames(t ? "appear" : "enter").className;
                            o.removeClasses(e, "exit"), d(e, n), o.props.onEnter && o.props.onEnter(e)
                        }, o.onEntering = function(e, t) {
                            var n = o.getClassNames(t ? "appear" : "enter").activeClassName;
                            o.reflowAndAddClass(e, n), o.props.onEntering && o.props.onEntering(e)
                        }, o.onEntered = function(e, t) {
                            var n = o.getClassNames("enter").doneClassName;
                            o.removeClasses(e, t ? "appear" : "enter"), d(e, n), o.props.onEntered && o.props.onEntered(e)
                        }, o.onExit = function(e) {
                            var t = o.getClassNames("exit").className;
                            o.removeClasses(e, "appear"), o.removeClasses(e, "enter"), d(e, t), o.props.onExit && o.props.onExit(e)
                        }, o.onExiting = function(e) {
                            var t = o.getClassNames("exit").activeClassName;
                            o.reflowAndAddClass(e, t), o.props.onExiting && o.props.onExiting(e)
                        }, o.onExited = function(e) {
                            var t = o.getClassNames("exit").doneClassName;
                            o.removeClasses(e, "exit"), d(e, t), o.props.onExited && o.props.onExited(e)
                        }, o.getClassNames = function(e) {
                            var t = o.props.classNames,
                                n = "string" != typeof t ? t[e] : t + "-" + e;
                            return {
                                className: n,
                                activeClassName: "string" != typeof t ? t[e + "Active"] : n + "-active",
                                doneClassName: "string" != typeof t ? t[e + "Done"] : n + "-done"
                            }
                        }, f(o, n)
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
                        t && t.scrollTop, d(t, n)
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
                f = t.EXITING = "exiting",
                d = function(e) {
                    function t(n, o) {
                        ! function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var i = function s(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, e.call(this, n, o)),
                            a = o.transitionGroup,
                            f = a && !a.isMounting ? n.enter : n.appear,
                            d = void 0;
                        return i.nextStatus = null, n.in ? f ? (d = c, i.nextStatus = u) : d = p : d = n.unmountOnExit || n.mountOnEnter ? l : c, i.state = {
                            status: d
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
                        }), n !== u && n !== p && (this.nextStatus = u)) : n !== u && n !== p || (this.nextStatus = f)
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
                            status: f
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
            d.contextTypes = {
                transitionGroup: o.object
            }, d.childContextTypes = {
                transitionGroup: function e() {}
            }, d.propTypes = {}, d.defaultProps = {
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
            }, d.UNMOUNTED = 0, d.EXITED = 1, d.ENTERING = 2, d.ENTERED = 3, d.EXITING = 4, t.default = d
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
        "./packages/social/scroll/scroll.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                p = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                f = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                d = n("./node_modules/react/index.js"),
                m = n("./node_modules/react-redux/es/index.js"),
                h = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                b = function e(t) {
                    return "object" === Object(h.a)(t) ? t : {
                        left: t,
                        right: t,
                        top: t,
                        bottom: t
                    }
                },
                y = {
                    top: 0,
                    left: 0
                },
                v = function e(t, n) {
                    var o = t.top,
                        r = t.left,
                        i = (n % 180 + 180) % 180 * Math.PI / 180;
                    return {
                        u: {
                            top: r * Math.sin(i) + o * Math.cos(i),
                            left: r * Math.cos(i) - o * Math.sin(i)
                        },
                        v: {
                            top: r * Math.sin(-i) + o * Math.cos(-i),
                            left: r * Math.cos(-i) - o * Math.sin(-i)
                        }
                    }
                },
                j = function e(t, n) {
                    var o = t.top;
                    return t.left * n.top - o * n.left
                },
                g = function e(t, n) {
                    var o = n.u,
                        r = n.v;
                    return j(o, t) * j(o, r) >= 0 && j(r, t) * j(r, o) >= 0
                },
                E = function(e) {
                    function t() {
                        var e, n;
                        Object(s.a)(this, t);
                        for (var a = arguments.length, u = new Array(a), m = 0; m < a; m++) u[m] = arguments[m];
                        return n = Object(l.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(u))), Object(f.a)(Object(p.a)(Object(p.a)(n)), "state", {
                            lastScrolled: [],
                            container: null,
                            child: {}
                        }), Object(f.a)(Object(p.a)(Object(p.a)(n)), "setChild", function(e) {
                            var t = Object(p.a)(Object(p.a)(n)).childRefs;
                            return t[e] = d.createRef(), t[e]
                        }), Object(f.a)(Object(p.a)(Object(p.a)(n)), "scroll", function(e) {
                            var t = n.props.isRtl,
                                s = n.containerRef.current,
                                a = e.behavior,
                                l = void 0 === a ? "auto" : a,
                                c = e.snapToEdge,
                                u = b(void 0 === c ? 0 : c);
                            if (s) {
                                var p = s.clientWidth,
                                    f = s.clientHeight,
                                    d = s.scrollTop,
                                    m = s.scrollLeft,
                                    h = s.scrollHeight,
                                    y = s.scrollWidth,
                                    j = function e(n, o) {
                                        var r = n.offsetTop,
                                            i = n.offsetLeft,
                                            s = o.top;
                                        return {
                                            dx: i - (o.left + m + (t ? p - y : 0)),
                                            dy: r - (s + d)
                                        }
                                    },
                                    E = function e(t, n, o) {
                                        var r = o.top,
                                            i = o.left,
                                            s = o.right,
                                            a = o.bottom,
                                            l = t,
                                            c = n;
                                        return t > 0 && p + m + t + s > y && (l = t + s), n > 0 && f + d + n + a > h && (c = n + a), t < 0 && m - t - i < 0 && (l = t - i), n < 0 && d - n - r < 0 && (c = n - r), {
                                            dx: l,
                                            dy: c
                                        }
                                    };
                                if ("scrollBy" === e.type) {
                                    var O = e.left,
                                        _ = e.top,
                                        x = Object(i.a)(Object.entries(n.childRefs)).map(function(e) {
                                            return {
                                                key: e[0],
                                                current: e[1].current
                                            }
                                        }).filter(function(e) {
                                            return e.current
                                        }).map(function e(t) {
                                            var n = t.key,
                                                o = t.current,
                                                r = o.scrollTop,
                                                i = o.scrollLeft,
                                                s = r - _,
                                                a = i - O;
                                            return {
                                                key: n,
                                                out: s <= 0 || a <= 0 || s >= f || a >= p
                                            }
                                        }).filter(function(e) {
                                            return e.out
                                        }).map(function(e) {
                                            return e.key
                                        });
                                    s.scrollBy({
                                        top: _,
                                        left: O,
                                        behavior: l
                                    }), n.setState({
                                        lastScrolled: x
                                    })
                                } else if ("scrollToChild" === e.type) {
                                    var S = e.key,
                                        C = n.childRefs[S].current;
                                    if (C) {
                                        var T = j(C, e.focus),
                                            w = E(T.dx, T.dy, u),
                                            N = w.dx,
                                            P = w.dy;
                                        s.scrollBy({
                                            top: P,
                                            left: N,
                                            behavior: l
                                        }), n.setState({
                                            lastScrolled: [S]
                                        })
                                    }
                                } else if ("scrollToNearestChild" === e.type) {
                                    var k = e.direction,
                                        A = e.scalarProjection,
                                        R = void 0 !== A && A,
                                        M = e.focus,
                                        D = e.scope,
                                        L = void 0 === D ? 90 : D,
                                        I = e.minDistance,
                                        G = void 0 === I ? 0 : I,
                                        W = null;
                                    k && (W = v(k, L));
                                    var U = Object(i.a)(Object.entries(n.childRefs)).map(function(e) {
                                        return {
                                            key: e[0],
                                            current: e[1].current
                                        }
                                    }).filter(function(e) {
                                        return e.current
                                    }).filter(function e(t) {
                                        var n = t.current;
                                        if (!W) return !0;
                                        var o = j(n, M),
                                            r = o.dx,
                                            i = o.dy;
                                        return g({
                                            top: i,
                                            left: r
                                        }, W)
                                    }).map(function e(t) {
                                        var n = t.current,
                                            i = Object(r.a)(t, ["current"]),
                                            s = j(n, M),
                                            a = s.dx,
                                            l = s.dy,
                                            c = a * a + l * l,
                                            u = 1 / 0;
                                        return k && (u = k.top * l + k.left * a), Object(o.a)({
                                            distance: c,
                                            product: u,
                                            dx: a,
                                            dy: l
                                        }, i)
                                    }).filter(function(e) {
                                        return e.distance > G * G
                                    }).sort(function e(t, n) {
                                        var o = t.distance - n.distance;
                                        return 0 !== o ? o : t.product - n.product
                                    });
                                    if (U[0]) {
                                        var V = U[0],
                                            F = V.dx,
                                            X = V.dy,
                                            B = V.key,
                                            Q = V.product;
                                        if (R) {
                                            if (k) {
                                                var z = k.top,
                                                    H = k.left,
                                                    J = Q / (z * z + H * H),
                                                    q = E(J * H, J * z, u),
                                                    $ = q.dx,
                                                    Z = q.dy;
                                                s.scrollBy({
                                                    top: Z,
                                                    left: $,
                                                    behavior: l
                                                })
                                            }
                                        } else {
                                            var K = E(F, X, u),
                                                Y = K.dx,
                                                ee = K.dy;
                                            s.scrollBy({
                                                top: ee,
                                                left: Y,
                                                behavior: l
                                            })
                                        }
                                        n.setState({
                                            lastScrolled: [B]
                                        })
                                    }
                                }
                            }
                        }), Object(f.a)(Object(p.a)(Object(p.a)(n)), "wasScrolled", function(e) {
                            return n.state.lastScrolled.includes("".concat(e))
                        }), Object(f.a)(Object(p.a)(Object(p.a)(n)), "containerRef", d.createRef()), Object(f.a)(Object(p.a)(Object(p.a)(n)), "childRefs", {}), n
                    }
                    return Object(u.a)(t, e), Object(a.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            var t = this.containerRef.current,
                                n = Object.entries(this.childRefs).map(function(e) {
                                    return {
                                        key: e[0],
                                        current: e[1].current
                                    }
                                }).filter(function(e) {
                                    return e.current
                                }).reduce(function(e, t) {
                                    return Object.assign(e, Object(f.a)({}, t.key, t.current)), e
                                }, {});
                            t ? this.setState({
                                container: t,
                                child: n
                            }) : this.setState({
                                child: n
                            })
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return (0, this.props.children)({
                                scroll: this.scroll,
                                setContainer: this.containerRef,
                                container: this.state.container,
                                setChild: this.setChild,
                                child: this.state.child,
                                wasScrolled: this.wasScrolled
                            })
                        }
                    }]), t
                }(d.Component),
                O = Object(m.connect)(function(e) {
                    return {
                        isRtl: e.i18n.isRtl
                    }
                })(E),
                _ = n("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                x = n("./node_modules/react-transition-group/index.js"),
                S = n("@ta/overlays.shift"),
                C = n.n(S),
                T = n("./packages/common/classnames/classnames.jsx"),
                w = n.n(T),
                N = n("@ta/styleguide.icon"),
                P = Object(m.connect)(function(e) {
                    return {
                        isRtl: e.i18n.isRtl
                    }
                })(function e(t) {
                    var n = t.direction,
                        o = t.onClick,
                        r = t.isRtl,
                        i = "single-chevron-right";
                    return "top" === n && (i = "single-chevron-up"), !r && "left" === n || r && "right" === n ? i = "single-chevron-left" : (!r && "right" === n || r && "left" === n) && (i = "single-chevron-right"), "bottom" === n && (i = "single-chevron-down"), d.createElement("div", {
                        className: "social-scroll-ScrollArrow__container--1iZzF",
                        onClick: o
                    }, d.createElement(N.Icon, {
                        name: i,
                        className: "social-scroll-ScrollArrow__arrow--Olh02"
                    }))
                }),
                k = function(e) {
                    function t() {
                        var e, n;
                        Object(s.a)(this, t);
                        for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                        return n = Object(l.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(i))), Object(f.a)(Object(p.a)(Object(p.a)(n)), "getDirections", function() {
                            var e = n.props,
                                r = e.top,
                                i = e.left,
                                s = e.right,
                                a = e.bottom,
                                l = e.container,
                                c = e.threshold,
                                u = b(c),
                                p = u.left,
                                f = u.right,
                                d = u.top,
                                m = u.bottom,
                                h = Object(o.a)({}, t.initialState);
                            if (l) {
                                var y = l.clientWidth,
                                    v = l.clientHeight,
                                    j = l.scrollLeft,
                                    g = l.scrollTop,
                                    E = l.scrollWidth,
                                    O = l.scrollHeight;
                                return j > p && i && (h.left = !0), g > d && r && (h.top = !0), y + j + f < E && s && (h.right = !0), v + g + m < O && a && (h.bottom = !0), h
                            }
                            return h
                        }), Object(f.a)(Object(p.a)(Object(p.a)(n)), "didChange", function(e) {
                            var t = e.top,
                                o = e.left,
                                r = e.right,
                                i = e.bottom,
                                s = n.directions,
                                a = s.top,
                                l = s.left,
                                c = s.right,
                                u = s.bottom;
                            return a !== t || l !== o || c !== r || u !== i
                        }), Object(f.a)(Object(p.a)(Object(p.a)(n)), "checkArrows", function() {
                            var e = n.getDirections();
                            n.didChange(e) && (n.directions = e, n.props.onDirectionChange(n.directions))
                        }), Object(f.a)(Object(p.a)(Object(p.a)(n)), "handleOnScroll", function(e) {
                            n.checkArrows(), n.props.onScroll && n.props.onScroll(e)
                        }), Object(f.a)(Object(p.a)(Object(p.a)(n)), "directions", Object(o.a)({}, t.initialState)), n
                    }
                    return Object(u.a)(t, e), Object(a.a)(t, [{
                        key: "componentDidUpdate",
                        value: function e(t) {
                            var n = t.container,
                                o = t.isActive;
                            (n !== this.props.container || this.props.isActive && !o) && (this.directions = this.getDirections(), this.props.onDirectionChange(this.directions))
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this.props,
                                n = t.forwardedRef,
                                r = t.children,
                                i = t.onClick,
                                s = t.className,
                                a = t.style;
                            return d.createElement("div", {
                                ref: n,
                                onScroll: this.handleOnScroll,
                                onClick: i,
                                className: s,
                                style: Object(o.a)({}, a, {
                                    position: "relative !important"
                                })
                            }, r)
                        }
                    }]), t
                }(d.Component);
            Object(f.a)(k, "defaultProps", {
                left: !0,
                bottom: !0,
                right: !0,
                top: !0
            }), Object(f.a)(k, "initialState", {
                top: !1,
                left: !1,
                right: !1,
                bottom: !1
            });
            var A = d.forwardRef(function(e, t) {
                    return d.createElement(k, Object(_.a)({}, e, {
                        forwardedRef: t
                    }))
                }),
                R = function e(t, n, o) {
                    return {
                        direction: {
                            top: t,
                            left: n
                        },
                        focus: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                            top: 0,
                            left: 0
                        },
                        scalarProjection: !0,
                        behavior: "smooth",
                        minDistance: o,
                        snapToEdge: arguments.length > 4 ? arguments[4] : void 0,
                        type: "scrollToNearestChild"
                    }
                },
                M = function(e) {
                    function t() {
                        var e, n;
                        Object(s.a)(this, t);
                        for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                        return n = Object(l.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(r))), Object(f.a)(Object(p.a)(Object(p.a)(n)), "state", {
                            top: !1,
                            right: !1,
                            left: !1,
                            bottom: !1
                        }), Object(f.a)(Object(p.a)(Object(p.a)(n)), "onDirectionChange", function(e) {
                            n.setState(e)
                        }), n
                    }
                    return Object(u.a)(t, e), Object(a.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this,
                                n = this.props,
                                i = n.children,
                                s = n.minDistance,
                                a = n.snapToEdge,
                                l = n.focus,
                                c = n.shift,
                                u = n.isRtl,
                                p = n.viewportCategory,
                                m = n.viewportCategories,
                                h = n.isActive,
                                v = Object(r.a)(n, ["children", "minDistance", "snapToEdge", "focus", "shift", "isRtl", "viewportCategory", "viewportCategories", "isActive"]),
                                j = this.props,
                                g = j.top,
                                E = j.left,
                                S = j.right,
                                T = j.bottom,
                                N = function e(t) {
                                    var n = b(t),
                                        r = n.top,
                                        i = n.left,
                                        s = n.bottom,
                                        a = n.right;
                                    return {
                                        top: null == r ? y : Object(o.a)({}, y, r),
                                        left: null == i ? y : Object(o.a)({}, y, i),
                                        right: null == a ? y : Object(o.a)({}, y, a),
                                        bottom: null == s ? y : Object(o.a)({}, y, s)
                                    }
                                }(c || 0),
                                k = N.top,
                                M = N.left,
                                D = N.right,
                                L = N.bottom;
                            return d.createElement(O, null, function(e) {
                                var n = e.scroll,
                                    o = e.setContainer,
                                    r = e.setChild,
                                    c = e.container,
                                    b = t.state,
                                    y = b.top,
                                    j = b.left,
                                    O = b.right,
                                    N = b.bottom,
                                    I = [];
                                if (c && m && m.includes(p)) {
                                    var G = {
                                        appear: "social-scroll-ScrollAffordance__appear--1PzSD",
                                        appearActive: "social-scroll-ScrollAffordance__appear_active--2ZuiU",
                                        enter: "social-scroll-ScrollAffordance__enter--2xaEQ",
                                        enterActive: "social-scroll-ScrollAffordance__enter_active--1_f77",
                                        exit: "social-scroll-ScrollAffordance__exit--1XWUW",
                                        exitActive: "social-scroll-ScrollAffordance__exit_active--2NueE"
                                    };
                                    if (j && E) {
                                        var W, U = function e() {
                                                n(R(0, -1, s, l, a))
                                            },
                                            V = w()("social-scroll-ScrollAffordance__position_absolute--3JmaP", (W = {}, Object(f.a)(W, "social-scroll-ScrollAffordance__left--2sQRX", !u), Object(f.a)(W, "social-scroll-ScrollAffordance__right--VuoQ5", u), W));
                                        "boolean" == typeof t.props.left ? I.push(d.createElement(x.CSSTransition, {
                                            key: "left",
                                            timeout: 300,
                                            classNames: G
                                        }, d.createElement("div", {
                                            className: V
                                        }, d.createElement(C.a, {
                                            x: -12 + M.left,
                                            y: M.top
                                        }, d.createElement(P, {
                                            direction: "left",
                                            onClick: U
                                        }))))) : I.push(d.createElement("div", {
                                            className: V,
                                            key: "left"
                                        }, d.createElement(C.a, {
                                            x: M.left,
                                            y: M.top
                                        }, d.createElement("div", {
                                            onClick: U
                                        }, j))))
                                    }
                                    if (O && S) {
                                        var F, X = function e() {
                                                n(R(0, 1, s, l, a))
                                            },
                                            B = w()("social-scroll-ScrollAffordance__position_absolute--3JmaP", (F = {}, Object(f.a)(F, "social-scroll-ScrollAffordance__right--VuoQ5", !u), Object(f.a)(F, "social-scroll-ScrollAffordance__left--2sQRX", u), F));
                                        "boolean" == typeof t.props.right ? I.push(d.createElement(x.CSSTransition, {
                                            key: "right",
                                            timeout: 300,
                                            classNames: G
                                        }, d.createElement("div", {
                                            className: B
                                        }, d.createElement(C.a, {
                                            x: 12 + D.left,
                                            y: D.top
                                        }, d.createElement(P, {
                                            direction: "right",
                                            onClick: X
                                        }))))) : I.push(d.createElement("div", {
                                            className: "".concat("social-scroll-ScrollAffordance__position_absolute--3JmaP", " ").concat("social-scroll-ScrollAffordance__right--VuoQ5"),
                                            key: "right"
                                        }, d.createElement(C.a, {
                                            x: D.left,
                                            y: D.top
                                        }, d.createElement("div", {
                                            onClick: X
                                        }, O))))
                                    }
                                    if (y && g) {
                                        var Q = function e() {
                                                n(R(-1, 0, s, l, a))
                                            },
                                            z = w()("social-scroll-ScrollAffordance__position_absolute--3JmaP", "social-scroll-ScrollAffordance__top--2TL1c");
                                        "boolean" == typeof t.props.top ? I.push(d.createElement(x.CSSTransition, {
                                            key: "top",
                                            timeout: 300,
                                            classNames: G
                                        }, d.createElement("div", {
                                            className: z,
                                            key: "top"
                                        }, d.createElement(C.a, {
                                            x: k.left,
                                            y: -16 + k.top
                                        }, d.createElement(P, {
                                            direction: "top",
                                            onClick: Q
                                        }))))) : I.push(d.createElement("div", {
                                            className: z,
                                            key: "top"
                                        }, d.createElement(C.a, {
                                            x: k.left,
                                            y: k.top
                                        }, d.createElement("div", {
                                            onClick: Q
                                        }, y))))
                                    }
                                    if (N && T) {
                                        var H = function e() {
                                                n(R(1, 0, s, l, a))
                                            },
                                            J = w()("social-scroll-ScrollAffordance__position_absolute--3JmaP", "social-scroll-ScrollAffordance__bottom--2p9R-");
                                        "boolean" == typeof t.props.bottom ? I.push(d.createElement(x.CSSTransition, {
                                            key: "bottom",
                                            timeout: 300,
                                            classNames: G
                                        }, d.createElement("div", {
                                            className: J
                                        }, d.createElement(C.a, {
                                            x: L.left,
                                            y: 16 + L.top
                                        }, d.createElement(P, {
                                            direction: "bottom",
                                            onClick: H
                                        }))))) : I.push(d.createElement("div", {
                                            className: J,
                                            key: "bottom"
                                        }, d.createElement(C.a, {
                                            x: L.left,
                                            y: L.top
                                        }, d.createElement("div", {
                                            onClick: H
                                        }, N))))
                                    }
                                }
                                return d.createElement(d.Fragment, null, d.createElement(x.TransitionGroup, {
                                    component: null
                                }, I), d.createElement(A, Object(_.a)({}, v, {
                                    ref: o,
                                    container: c,
                                    onDirectionChange: t.onDirectionChange,
                                    isActive: h
                                }), i(r)))
                            })
                        }
                    }]), t
                }(d.Component);
            Object(f.a)(M, "defaultProps", {
                left: !0,
                bottom: !0,
                right: !0,
                top: !0,
                threshold: 0,
                snapToEdge: 0,
                shift: void 0,
                focus: {
                    top: 0,
                    left: 0
                },
                className: void 0,
                onClick: void 0,
                onScroll: void 0,
                style: void 0,
                isActive: !0,
                viewportCategories: ["TABLET", "DESKTOP"]
            });
            var D = Object(m.connect)(function(e) {
                return {
                    viewportCategory: e.meta.device.viewportCategory,
                    isRtl: e.i18n.isRtl
                }
            })(M);
            n.d(t, "Scrollable", function() {
                return O
            }), n.d(t, "ScrollAffordance", function() {
                return D
            })
        },
        "@ta/overlays.shift": function(t, n) {
            t.exports = e
        },
        "@ta/styleguide.icon": function(e, n) {
            e.exports = t
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = n
        }
    })
});
//# sourceMappingURL=social.scroll.049a4c10b5.js.map