define("@ta/common.error-handling", ["@ta/common.global"], function(e) {
    return function(e) {
        var r = {};

        function t(n) {
            if (r[n]) return r[n].exports;
            var o = r[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }
        return t.m = e, t.c = r, t.d = function(e, r, n) {
            t.o(e, r) || Object.defineProperty(e, r, {
                enumerable: !0,
                get: n
            })
        }, t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, t.t = function(e, r) {
            if (1 & r && (e = t(e)), 8 & r) return e;
            if (4 & r && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (t.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & r && "string" != typeof e)
                for (var o in e) t.d(n, o, function(r) {
                    return e[r]
                }.bind(null, o));
            return n
        }, t.n = function(e) {
            var r = e && e.__esModule ? function r() {
                return e.default
            } : function r() {
                return e
            };
            return t.d(r, "a", r), r
        }, t.o = function(e, r) {
            return Object.prototype.hasOwnProperty.call(e, r)
        }, t.p = "", t(t.s = "./packages/common/error-handling/index.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, r, t) {
            "use strict";

            function n(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            t.d(r, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, r, t) {
            "use strict";

            function n(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }
            t.d(r, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, r, t) {
            "use strict";

            function n(e, r) {
                for (var t = 0; t < r.length; t++) {
                    var n = r[t];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function o(e, r, t) {
                return r && n(e.prototype, r), t && n(e, t), e
            }
            t.d(r, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, r, t) {
            "use strict";

            function n(e, r, t) {
                return r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t, e
            }
            t.d(r, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, r, t) {
            "use strict";

            function n(e) {
                return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function e(r) {
                    return r.__proto__ || Object.getPrototypeOf(r)
                })(e)
            }
            t.d(r, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, r, t) {
            "use strict";
            t.d(r, "a", function() {
                return o
            });
            var n = t("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function o(e, r) {
                if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(r && r.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), r && Object(n.a)(e, r)
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, r, t) {
            "use strict";
            t.d(r, "a", function() {
                return u
            });
            var n = t("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                o = t("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function u(e, r) {
                return !r || "object" !== Object(n.a)(r) && "function" != typeof r ? Object(o.a)(e) : r
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, r, t) {
            "use strict";

            function n(e, r) {
                return (n = Object.setPrototypeOf || function e(r, t) {
                    return r.__proto__ = t, r
                })(e, r)
            }
            t.d(r, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, r, t) {
            "use strict";

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(r) {
                    return typeof r
                } : function e(r) {
                    return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
                })(e)
            }

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function e(r) {
                    return n(r)
                } : function e(r) {
                    return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : n(r)
                })(e)
            }
            t.d(r, "a", function() {
                return o
            })
        },
        "./node_modules/react-redux/es/index.js": function(e, r, t) {
            e.exports = t("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, r, t) {
            e.exports = t("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/error-handling/index.jsx": function(e, r, t) {
            "use strict";
            t.r(r);
            var n = t("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                o = t("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                u = t("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                s = t("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                i = t("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                l = t("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                c = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                a = t("./node_modules/react/index.js"),
                d = t("./node_modules/react-redux/es/index.js"),
                f = t("./packages/common/logging/logging.jsx"),
                m = function(e) {
                    function r(e) {
                        var t;
                        return Object(n.a)(this, r), t = Object(u.a)(this, Object(s.a)(r).call(this, e)), Object(c.a)(Object(l.a)(Object(l.a)(t)), "logError", function(e) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ErrorBoundary";
                            if (t.props.shouldRecord) {
                                var n = t.props.isLoggedInMember;
                                Object(f.logToSentry)({
                                    error: e,
                                    tags: {
                                        logger: r
                                    },
                                    extraData: {
                                        isLoggedInMember: n
                                    }
                                })
                            }
                        }), t.state = {
                            caughtError: !1,
                            error: null,
                            info: null
                        }, t
                    }
                    return Object(i.a)(r, e), Object(o.a)(r, [{
                        key: "componentDidCatch",
                        value: function e(r, t) {
                            try {
                                this.setState({
                                    caughtError: !0,
                                    error: r,
                                    info: t
                                }), this.logError(r)
                            } catch (e) {
                                this.logError(e, "ErrorBoundaryCatchFail")
                            }
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            try {
                                var r = this.props.errorRenderer,
                                    t = this.state,
                                    n = t.caughtError,
                                    o = t.error,
                                    u = t.info;
                                return n ? r ? r(o, u) : null : this.props.children
                            } catch (e) {
                                return this.logError(e, "ErrorBoundaryRenderFail"), null
                            }
                        }
                    }]), r
                }(a.Component);
            Object(c.a)(m, "defaultProps", {
                errorRenderer: void 0,
                shouldRecord: !0
            });
            var b = Object(d.connect)(function(e) {
                return {
                    isLoggedInMember: e.auth.isMember
                }
            })(m);
            t.d(r, "ErrorBoundary", function() {
                return b
            })
        },
        "./packages/common/logging/logging.jsx": function(e, r, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/logging/logging.jsx")
        },
        "dll-reference @ta/common.global": function(r, t) {
            r.exports = e
        }
    })
});
//# sourceMappingURL=common.error-handling.cf383303de.js.map