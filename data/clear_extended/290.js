define("@ta/common.authz", ["@ta/social.feed", "@ta/common.global"], function(e, o) {
    return function(e) {
        var o = {};

        function r(n) {
            if (o[n]) return o[n].exports;
            var t = o[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(t.exports, t, t.exports, r), t.l = !0, t.exports
        }
        return r.m = e, r.c = o, r.d = function(e, o, n) {
            r.o(e, o) || Object.defineProperty(e, o, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, o) {
            if (1 & o && (e = r(e)), 8 & o) return e;
            if (4 & o && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & o && "string" != typeof e)
                for (var t in e) r.d(n, t, function(o) {
                    return e[o]
                }.bind(null, t));
            return n
        }, r.n = function(e) {
            var o = e && e.__esModule ? function o() {
                return e.default
            } : function o() {
                return e
            };
            return r.d(o, "a", o), o
        }, r.o = function(e, o) {
            return Object.prototype.hasOwnProperty.call(e, o)
        }, r.p = "", r(r.s = "./packages/common/authz/authz.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, o, r) {
            "use strict";

            function n(e, o, r) {
                return o in e ? Object.defineProperty(e, o, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[o] = r, e
            }
            r.d(o, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, o, r) {
            "use strict";
            r.d(o, "a", function() {
                return t
            });
            var n = r("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function t(e) {
                for (var o = 1; o < arguments.length; o++) {
                    var r = null != arguments[o] ? arguments[o] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), t.forEach(function(o) {
                        Object(n.a)(e, o, r[o])
                    })
                }
                return e
            }
        },
        "./node_modules/react-apollo/react-apollo.browser.umd.js": function(e, o, r) {
            e.exports = r("dll-reference @ta/common.global")("./node_modules/react-apollo/react-apollo.browser.umd.js")
        },
        "./node_modules/react-redux/es/index.js": function(e, o, r) {
            e.exports = r("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, o, r) {
            e.exports = r("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/authz/authz.jsx": function(e, o, r) {
            "use strict";
            r.r(o);
            var n = r("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                t = r("./node_modules/react/index.js"),
                l = r.n(t),
                u = r("./node_modules/react-redux/es/index.js"),
                a = r("./node_modules/react-apollo/react-apollo.browser.umd.js"),
                c = r("./packages/common/logging/logging.jsx"),
                i = r.n(c),
                d = r("@ta/social.feed"),
                s = function e(o) {
                    var r = o.children,
                        n = o.onError,
                        t = o.loggedInUserId;
                    return l.a.createElement(a.Query, {
                        errorPolicy: "all",
                        query: d.AuthZQuery,
                        skip: !t,
                        onError: n,
                        fetchPolicy: "network-only"
                    }, function(e) {
                        var o = e.data,
                            n = void 0 === o ? {} : o,
                            t = e.loading,
                            l = e.error;
                        l && i.a.error(l);
                        var u = n.authzInfo;
                        return r(void 0 === u ? {} : u, t)
                    })
                };
            s.defaultProps = {
                onError: void 0
            };
            var f = Object(u.connect)(function(e, o) {
                return Object(n.a)({}, o, {
                    loggedInUserId: e.auth.loggedInUserId
                })
            })(s);
            r.d(o, "WithAuthzInfo", function() {
                return f
            }), o.default = {}
        },
        "./packages/common/logging/logging.jsx": function(e, o, r) {
            e.exports = r("dll-reference @ta/common.global")("./packages/common/logging/logging.jsx")
        },
        "@ta/social.feed": function(o, r) {
            o.exports = e
        },
        "dll-reference @ta/common.global": function(e, r) {
            e.exports = o
        }
    })
});
//# sourceMappingURL=common.authz.a4c45f44f8.js.map