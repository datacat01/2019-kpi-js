define("@ta/social.show-more", ["@ta/styleguide.button", "@ta/styleguide.icon", "@ta/common.global"], function(e, t, o) {
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
        }, o.p = "", o(o.s = "./packages/social/show-more/show-more.jsx")
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
        "./packages/common/i18n/i18n.jsx": function(e, t, o) {
            e.exports = o("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/social/show-more/show-more.jsx": function(e, t, o) {
            "use strict";
            o.r(t);
            var n = o("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = o("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                s = o("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                u = o("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                i = o("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                l = o("./node_modules/react/index.js"),
                c = o("./packages/common/i18n/i18n.jsx"),
                a = o("@ta/styleguide.icon"),
                m = o("@ta/styleguide.button"),
                f = o.n(m),
                p = function(e) {
                    function t() {
                        return Object(n.a)(this, t), Object(s.a)(this, Object(u.a)(t).apply(this, arguments))
                    }
                    return Object(i.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this;
                            if (!this.props.hasMore) return null;
                            var o = this.props.goingBackwards ? "single-chevron-up" : "single-chevron-down";
                            return this.props.showButton ? l.createElement("div", {
                                className: "social-show-more-ShowMore__show_more--1oZl9"
                            }, l.createElement(f.a, {
                                type: "primary",
                                size: "large",
                                onClick: function e(o) {
                                    t.props.onClick && t.props.onClick(o)
                                }
                            }, l.createElement("div", {
                                className: "social-show-more-ShowMore__button_contents--1djai"
                            }, l.createElement("span", {
                                className: "social-show-more-ShowMore__button_text--uxMCG"
                            }, Object(c.localize)("airm_mobile_show_more")), l.createElement(a.Icon, {
                                name: o,
                                className: "social-show-more-ShowMore__button_icon--18ava"
                            })))) : this.props.children || null
                        }
                    }]), t
                }(l.Component);
            o.d(t, "ShowMore", function() {
                return p
            }), t.default = {}
        },
        "@ta/styleguide.button": function(t, o) {
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
//# sourceMappingURL=social.show-more.8c15c666df.js.map