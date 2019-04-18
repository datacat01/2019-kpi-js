define("@ta/styleguide.button", ["@ta/common.global"], function(e) {
    return function(e) {
        var n = {};

        function t(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }
        return t.m = e, t.c = n, t.d = function(e, n, o) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: o
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
            var o = Object.create(null);
            if (t.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var r in e) t.d(o, r, function(n) {
                    return e[n]
                }.bind(null, r));
            return o
        }, t.n = function(e) {
            var n = e && e.__esModule ? function n() {
                return e.default
            } : function n() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, t.p = "", t(t.s = "./packages/styleguide/button/Button.jsx")
    }({
        "./node_modules/react/index.js": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/classnames/classnames.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/styleguide/button/Button.jsx": function(e, n, t) {
            "use strict";
            t.r(n);
            var o = t("./node_modules/react/index.js"),
                r = t("./packages/common/classnames/classnames.jsx"),
                l = t.n(r),
                a = function e(n) {
                    var t = n.children,
                        r = n.size,
                        a = n.type,
                        u = n.chevron,
                        c = n.loading,
                        s = n.disabled,
                        i = n.onClick;
                    return o.createElement("button", {
                        className: l()("ui_button", "none" !== a ? a : "", "default" !== r ? r : "", {
                            chevron: u,
                            disabled: s,
                            loading: c
                        }),
                        disabled: s,
                        onClick: i
                    }, t)
                };
            a.defaultProps = {
                children: null,
                onClick: function e() {},
                type: "original",
                size: "default",
                chevron: !1,
                loading: !1,
                disabled: !1
            }, n.default = a
        },
        "dll-reference @ta/common.global": function(n, t) {
            n.exports = e
        }
    })
});
//# sourceMappingURL=styleguide.button.6eb477b174.js.map