define("@ta/events.window", ["@ta/common.global"], function(e) {
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
        }, n.p = "", n(n.s = "./packages/events/window/Window.jsx")
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
                return u
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function u(e, t) {
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
        "./packages/events/window/Window.jsx": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", function() {
                return a
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                l = n("./node_modules/react/index.js"),
                c = function e(t) {
                    var n = t.event,
                        o = t.callback;
                    setTimeout(function() {
                        window.removeEventListener(n, o)
                    }, 0)
                },
                a = function(e) {
                    function t() {
                        return Object(o.a)(this, t), Object(u.a)(this, Object(s.a)(t).apply(this, arguments))
                    }
                    return Object(i.a)(t, e), Object(r.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.addListener()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function e(t) {
                            c(t), this.addListener()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            c(this.props)
                        }
                    }, {
                        key: "addListener",
                        value: function e() {
                            var t = this.props,
                                n = t.event,
                                o = t.callback;
                            setTimeout(function() {
                                window.addEventListener(n, o)
                            }, 0)
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return null
                        }
                    }]), t
                }(l.Component)
        },
        "dll-reference @ta/common.global": function(t, n) {
            t.exports = e
        }
    })
});
//# sourceMappingURL=events.window.0db2d5f945.js.map