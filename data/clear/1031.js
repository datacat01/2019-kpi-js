define("@ta/overlays.headers", ["@ta/common.cdn", "@ta/styleguide.icon", "@ta/common.global"], function(e, r, a) {
    return function(e) {
        var r = {};

        function a(n) {
            if (r[n]) return r[n].exports;
            var t = r[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(t.exports, t, t.exports, a), t.l = !0, t.exports
        }
        return a.m = e, a.c = r, a.d = function(e, r, n) {
            a.o(e, r) || Object.defineProperty(e, r, {
                enumerable: !0,
                get: n
            })
        }, a.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, a.t = function(e, r) {
            if (1 & r && (e = a(e)), 8 & r) return e;
            if (4 & r && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (a.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & r && "string" != typeof e)
                for (var t in e) a.d(n, t, function(r) {
                    return e[r]
                }.bind(null, t));
            return n
        }, a.n = function(e) {
            var r = e && e.__esModule ? function r() {
                return e.default
            } : function r() {
                return e
            };
            return a.d(r, "a", r), r
        }, a.o = function(e, r) {
            return Object.prototype.hasOwnProperty.call(e, r)
        }, a.p = "", a(a.s = "./packages/overlays/headers/index.jsx")
    }({
        "./node_modules/react/index.js": function(e, r, a) {
            e.exports = a("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/classnames/classnames.jsx": function(e, r, a) {
            e.exports = a("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/overlays/headers/index.jsx": function(e, r, a) {
            "use strict";
            a.r(r);
            var n = a("./node_modules/react/index.js"),
                t = a("./packages/common/classnames/classnames.jsx"),
                o = a.n(t),
                s = a("@ta/common.cdn"),
                c = function e(r) {
                    var a, t;
                    switch (r.branding) {
                        case "TA_WHITE":
                            a = "/img2/branding/rebrand/TA_logo_primary.svg", t = "overlays-headers-BrandedHeader__brandedWhite--1Tixu";
                            break;
                        case "TA_GREEN":
                        default:
                            a = "/img2/branding/rebrand/TA_logo_secondary.svg", t = "overlays-headers-BrandedHeader__brandedGreen--3AHqp"
                    }
                    return t = o()("overlays-headers-BrandedHeader__header--1bnQY", t), n.createElement("div", {
                        className: t
                    }, n.createElement(s.CdnImage, {
                        className: "overlays-headers-BrandedHeader__logo--3CoLA",
                        src: a,
                        alt: "TripAdvisor"
                    }))
                };
            c.defaultProps = {
                branding: "TA_GREEN"
            };
            var d = c,
                l = a("@ta/styleguide.icon"),
                i = function e(r) {
                    var a;
                    switch (r.displayType) {
                        case "LEFT_ALIGN_GRAY":
                            a = "overlays-headers-TitleBar__leftAlignedGray--rQs7c";
                            break;
                        case "CENTERED_WHITE":
                        default:
                            a = "overlays-headers-TitleBar__centeredWhite--ENGay"
                    }
                    return a += " ".concat("overlays-headers-TitleBar__titleContainer--TnfOA"), r.iconName && (a += " ".concat("overlays-headers-TitleBar__hasIcon--1iwC0")), n.createElement("div", {
                        className: a
                    }, r.iconName && n.createElement(l.Icon, {
                        name: r.iconName,
                        className: "overlays-headers-TitleBar__headerIcon--1dNpz"
                    }), r.children)
                };
            i.defaultProps = {
                displayType: "CENTERED_WHITE",
                iconName: void 0
            };
            var u = i;
            a.d(r, "BrandedHeader", function() {
                return d
            }), a.d(r, "TitleBar", function() {
                return u
            })
        },
        "@ta/common.cdn": function(r, a) {
            r.exports = e
        },
        "@ta/styleguide.icon": function(e, a) {
            e.exports = r
        },
        "dll-reference @ta/common.global": function(e, r) {
            e.exports = a
        }
    })
});
//# sourceMappingURL=overlays.headers.d36d042edd.js.map