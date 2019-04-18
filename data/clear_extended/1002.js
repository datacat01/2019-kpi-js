define("@ta/events.event-boundary", ["@ta/common.global"], function(e) {
    return function(e) {
        var n = {};

        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }
        return t.m = e, t.c = n, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: r
            })
        }, t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, t.t = function(e, n) {
            if (1 & n && (e = t(e)), 8 & n) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (t.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var o in e) t.d(r, o, function(n) {
                    return e[n]
                }.bind(null, o));
            return r
        }, t.n = function(e) {
            var n = e && e.__esModule ? function n() {
                return e.default
            } : function n() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, t.p = "", t(t.s = "./packages/events/event-boundary/EventBoundary.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, n, t) {
            "use strict";

            function r(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }
            t.d(n, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/extends.js": function(e, n, t) {
            "use strict";

            function r() {
                return (r = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            t.d(n, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return o
            });
            var r = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function o(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        o = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), o.forEach(function(n) {
                        Object(r.a)(e, n, t[n])
                    })
                }
                return e
            }
        },
        "./node_modules/react/index.js": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/events/event-boundary/EventBoundary.jsx": function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, "stopPropagation", function() {
                return s
            });
            var r = t("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                o = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = t("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                a = t("./node_modules/react/index.js"),
                s = function e(n) {
                    n.stopPropagation()
                },
                c = function e(n) {
                    var t = n.events,
                        c = n.className,
                        l = n.children;
                    return a.createElement("div", Object(r.a)({
                        className: c
                    }, t.reduce(function(e, n) {
                        return Object(u.a)({}, e, Object(o.a)({}, n, s))
                    }, {})), l)
                };
            c.defaultProps = {
                className: void 0
            }, n.default = c
        },
        "dll-reference @ta/common.global": function(n, t) {
            n.exports = e
        }
    })
});
//# sourceMappingURL=events.event-boundary.bf1db0e61e.js.map