define("@ta/social.link-preview", ["@ta/common.string", "@ta/media.image", "@ta/social.obfuscation", "@ta/styleguide.icon", "@ta/common.global"], function(e, n, t, i, r) {
    return function(e) {
        var n = {};

        function t(i) {
            if (n[i]) return n[i].exports;
            var r = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }
        return t.m = e, t.c = n, t.d = function(e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: i
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
            var i = Object.create(null);
            if (t.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var r in e) t.d(i, r, function(n) {
                    return e[n]
                }.bind(null, r));
            return i
        }, t.n = function(e) {
            var n = e && e.__esModule ? function n() {
                return e.default
            } : function n() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, t.p = "", t(t.s = "./packages/social/link-preview/link-preview.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, n, t) {
            "use strict";

            function i(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }
            t.d(n, "a", function() {
                return i
            })
        },
        "./node_modules/react/index.js": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/classnames/classnames.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/social/link-preview/link-preview.jsx": function(e, n, t) {
            "use strict";
            t.r(n);
            var i = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                r = t("./node_modules/react/index.js"),
                o = t("./packages/common/classnames/classnames.jsx"),
                a = t.n(o),
                l = t("@ta/social.obfuscation"),
                c = t("@ta/styleguide.icon"),
                s = t("@ta/common.string");

            function u(e, n) {
                if (Object(s.inputLength)(e) > n) {
                    var t = e.substr(0, n - 1).trim();
                    return "".concat(t.substr(0, t.lastIndexOf(" ")), "...")
                }
                return e
            }
            var m = function e(n) {
                var t, i, o = n.linkPreviewState,
                    a = n.isClickable,
                    l = n.className;
                return r.createElement("div", {
                    className: "".concat("social-link-preview-LinkPreviewContent__content--2G04l", " ").concat(l || "")
                }, (null == o ? void 0 : null === (t = o.title) || void 0 === t ? void 0 : t.length) > 0 && r.createElement("p", {
                    className: "ui_link ".concat("social-link-preview-LinkPreviewContent__title--25V-T")
                }, u(o.title, 105)), (null == o ? void 0 : null === (i = o.description) || void 0 === i ? void 0 : i.length) > 0 && !(null == o ? void 0 : o.imgSource) && r.createElement("p", {
                    className: "ui_link ".concat("social-link-preview-LinkPreviewContent__description--3rSJk")
                }, u(o.description, 150)), r.createElement("span", {
                    className: "social-link-preview-LinkPreviewContent__urlWrapper--2nmL_"
                }, r.createElement("p", {
                    className: "ui_link ".concat("social-link-preview-LinkPreviewContent__url--F-VF_")
                }, o.urlDomain), a && r.createElement(c.Icon, {
                    name: "external-link-no-box",
                    className: "social-link-preview-LinkPreviewContent__icon--std03"
                })))
            };
            m.defaultProps = {
                isClickable: !1,
                onClick: void 0,
                className: void 0
            };
            var d = m,
                p = t("@ta/media.image"),
                v = function e(n) {
                    var t = n.sources;
                    return r.createElement("div", {
                        className: "social-link-preview-LinkPreviewImage__imageWrapper--2a3Mr"
                    }, r.createElement(p.ResponsiveImage, {
                        sources: t,
                        width: "100%",
                        height: "100%"
                    }))
                },
                f = function e(n) {
                    var t, o = n.linkPreviewState,
                        c = n.onClick,
                        s = n.isClickable,
                        u = n.border,
                        m = n.delineateContent,
                        p = n.tightenContent,
                        f = r.createElement("div", {
                            className: a()("social-link-preview-LinkPreview__previewWrapper--n_n8T", Object(i.a)({}, "social-link-preview-LinkPreview__previewUploaderBorder--188o6", !s), Object(i.a)({}, "social-link-preview-LinkPreview__border--1jrDH", u))
                        }, o.imgSource && r.createElement(v, {
                            sources: o.imgSource
                        }), r.createElement(d, {
                            isClickable: s,
                            linkPreviewState: o,
                            onClick: c,
                            className: a()("social-link-preview-LinkPreview__contentWrapper--28S4F", (t = {}, Object(i.a)(t, "social-link-preview-LinkPreview__contentDelineation--12tPz", m), Object(i.a)(t, "social-link-preview-LinkPreview__tightenContentTags--fJJSe", "tighten_bottom" === p), Object(i.a)(t, "social-link-preview-LinkPreview__tightenContentNoTags--23P3R", "tighten" === p), t))
                        }));
                    return s ? r.createElement(l.ProtectedObfuscatedLink, {
                        className: "",
                        target: "_blank",
                        onClick: c,
                        encodedUrl: o.url
                    }, f) : f
                };
            f.defaultProps = {
                isClickable: !1,
                onClick: void 0,
                border: !0,
                delineateContent: !1,
                tightenContent: "none"
            };
            var k = f;
            t.d(n, "LinkPreview", function() {
                return k
            }), t.d(n, "LinkPreviewContent", function() {
                return d
            }), t.d(n, "LinkPreviewImage", function() {
                return v
            })
        },
        "@ta/common.string": function(n, t) {
            n.exports = e
        },
        "@ta/media.image": function(e, t) {
            e.exports = n
        },
        "@ta/social.obfuscation": function(e, n) {
            e.exports = t
        },
        "@ta/styleguide.icon": function(e, n) {
            e.exports = i
        },
        "dll-reference @ta/common.global": function(e, n) {
            e.exports = r
        }
    })
});
//# sourceMappingURL=social.link-preview.c4dd69b3eb.js.map