define("@ta/loading.error", ["@ta/overlays.managers", "@ta/styleguide.button", "@ta/common.global"], function(e, r, n) {
    return function(e) {
        var r = {};

        function n(o) {
            if (r[o]) return r[o].exports;
            var t = r[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(t.exports, t, t.exports, n), t.l = !0, t.exports
        }
        return n.m = e, n.c = r, n.d = function(e, r, o) {
            n.o(e, r) || Object.defineProperty(e, r, {
                enumerable: !0,
                get: o
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, r) {
            if (1 & r && (e = n(e)), 8 & r) return e;
            if (4 & r && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & r && "string" != typeof e)
                for (var t in e) n.d(o, t, function(r) {
                    return e[r]
                }.bind(null, t));
            return o
        }, n.n = function(e) {
            var r = e && e.__esModule ? function r() {
                return e.default
            } : function r() {
                return e
            };
            return n.d(r, "a", r), r
        }, n.o = function(e, r) {
            return Object.prototype.hasOwnProperty.call(e, r)
        }, n.p = "", n(n.s = "./packages/loading/error/index.js")
    }({
        "./node_modules/react/index.js": function(e, r, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/i18n/i18n.jsx": function(e, r, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/loading/error/index.js": function(e, r, n) {
            "use strict";
            n.r(r);
            var o = n("./node_modules/react/index.js"),
                t = n("@ta/styleguide.button"),
                a = n.n(t),
                l = n("./packages/common/i18n/i18n.jsx"),
                i = function e(r) {
                    return o.createElement("div", {
                        className: "loading-error-LoadingErrorMessage__error_block--3EMwD"
                    }, o.createElement("p", {
                        className: "loading-error-LoadingErrorMessage__error_heading--aYyYz"
                    }, Object(l.localize)("social_loading_error_1"), " "), o.createElement("p", {
                        className: "loading-error-LoadingErrorMessage__error_body--1-Lfo"
                    }, Object(l.localize)("soical_loading_error_2"), " "), o.createElement(a.a, {
                        onClick: function e() {
                            return r.refetch()
                        },
                        type: "primary",
                        size: "large"
                    }, o.createElement("span", null, Object(l.localize)("mobile_try_again"), " ")))
                },
                c = n("@ta/overlays.managers"),
                u = function e(r) {
                    var n = r.children;
                    return o.createElement(c.Opener, {
                        name: "__ERROR__",
                        local: !0
                    }, n)
                },
                d = function e(r) {
                    var n = r.refetch;
                    return o.createElement(c.Local, {
                        name: "__ERROR__"
                    }, o.createElement("div", {
                        className: "".concat("loading-error-LoadingErrorBanner__error_block--36B8-", " ui_card")
                    }, o.createElement("div", {
                        className: "loading-error-LoadingErrorBanner__error_heading--21NVA"
                    }, Object(l.localize)("social_loading_error_1"), " ", Object(l.localize)("soical_loading_error_2"), " "), o.createElement(a.a, {
                        onClick: function e() {
                            n && n()
                        },
                        type: "primary",
                        size: "default"
                    }, Object(l.localize)("mobile_try_again"), " ")))
                };
            d.defaultProps = {
                refetch: function e() {
                    window.location.reload()
                }
            };
            var s = d;
            n.d(r, "LoadingErrorMessage", function() {
                return i
            }), n.d(r, "LoadingErrorBanner", function() {
                return s
            }), n.d(r, "RenderErrorBanner", function() {
                return u
            })
        },
        "@ta/overlays.managers": function(r, n) {
            r.exports = e
        },
        "@ta/styleguide.button": function(e, n) {
            e.exports = r
        },
        "dll-reference @ta/common.global": function(e, r) {
            e.exports = n
        }
    })
});
//# sourceMappingURL=loading.error.519487ae3d.js.map