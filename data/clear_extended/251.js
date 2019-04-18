define("@ta/styleguide.icon", ["@ta/common.global"], function(e) {
    return function(e) {
        var n = {};

        function t(c) {
            if (n[c]) return n[c].exports;
            var o = n[c] = {
                i: c,
                l: !1,
                exports: {}
            };
            return e[c].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }
        return t.m = e, t.c = n, t.d = function(e, n, c) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: c
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
            var c = Object.create(null);
            if (t.r(c), Object.defineProperty(c, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var o in e) t.d(c, o, function(n) {
                    return e[n]
                }.bind(null, o));
            return c
        }, t.n = function(e) {
            var n = e && e.__esModule ? function n() {
                return e.default
            } : function n() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, t.p = "", t(t.s = "./packages/styleguide/icon/index.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, n, t) {
            "use strict";

            function c(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }
            t.d(n, "a", function() {
                return c
            })
        },
        "./node_modules/react/index.js": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/classnames/classnames.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/styleguide/icon/index.jsx": function(e, n, t) {
            "use strict";
            t.r(n);
            var c = t("./node_modules/react/index.js"),
                o = function e(n) {
                    var t = n.name,
                        o = n.className,
                        a = n.children;
                    return c.createElement("span", {
                        className: "ui_icon ".concat(t, " ").concat(o)
                    }, a)
                };
            o.defaultProps = {
                className: "",
                children: void 0
            };
            var a = o,
                r = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                s = t("./packages/common/classnames/classnames.jsx"),
                i = t.n(s),
                u = function e(n) {
                    var t = n.innerIcon,
                        o = n.outerIcon,
                        s = n.hover,
                        u = n.active;
                    return c.createElement("span", {
                        className: i()("ui_icon_stacked", "styleguide-icon-IconStacked__ui_icon_stacked--3-Z0a", Object(r.a)({}, "styleguide-icon-IconStacked__hover--1H_k_", s))
                    }, c.createElement("span", {
                        className: "styleguide-icon-IconStacked__ui_icon_stacked_inner--1Q9Mh"
                    }, c.createElement(a, {
                        name: t,
                        className: i()("stacked", "styleguide-icon-IconStacked__innerIcon--HUV1T", Object(r.a)({}, "styleguide-icon-IconStacked__active--3zJoA", u))
                    }), c.createElement(a, {
                        name: o,
                        className: i()("stacked", "styleguide-icon-IconStacked__outerIcon--7s7FA")
                    })))
                };
            u.defaultProps = {
                hover: !1,
                active: !1
            };
            var l = u,
                d = function e(n) {
                    var t = n.name,
                        o = n.className;
                    return c.createElement("span", {
                        className: "t4b_ui_icon ".concat(t, " ").concat(o)
                    })
                };
            d.defaultProps = {
                className: ""
            };
            var m = d;
            t.d(n, "Icon", function() {
                return a
            }), t.d(n, "IconStacked", function() {
                return l
            }), t.d(n, "T4BIcon", function() {
                return m
            })
        },
        "dll-reference @ta/common.global": function(n, t) {
            n.exports = e
        }
    })
});
//# sourceMappingURL=styleguide.icon.19ea8e4572.js.map