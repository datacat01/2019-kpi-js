define("@ta/social.links", ["@ta/common.client", "@ta/social.obfuscation", "@ta/styleguide.icon", "@ta/tracking.interactions", "@ta/common.global"], function(e, n, t, r, o) {
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
        }, t.p = "", t(t.s = "./packages/social/links/links.jsx")
    }({
        "./node_modules/react/index.js": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/decode/decode.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/decode/decode.jsx")
        },
        "./packages/common/features/features.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/features/features.jsx")
        },
        "./packages/common/routing/routing.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/routing/routing.jsx")
        },
        "./packages/social/links/links.jsx": function(e, n, t) {
            "use strict";
            t.r(n);
            var r = t("./node_modules/react/index.js"),
                o = t("./packages/common/features/features.jsx"),
                c = t("./packages/common/routing/routing.jsx"),
                i = t("@ta/tracking.interactions"),
                a = function e(n) {
                    var t = n.text,
                        a = n.socialReferences,
                        s = n.useSpan,
                        l = n.trim,
                        u = n.onClick;
                    if (t && a) {
                        var f = [];
                        if (Object(o.featureIsEnabled)("social_at_referencing_profile_links") && a.userReferences && (f = f.concat(a.userReferences)), f.length) {
                            f.sort(function(e, n) {
                                return e.offset - n.offset
                            });
                            for (var m = 0, d = [], g = function e(n) {
                                    var o = f[n],
                                        a = o.offset,
                                        g = a + o.length,
                                        k = t.substring(m, a);
                                    if (l && 0 === n && (k = function e(n) {
                                            return n.replace(/^\s+/g, "")
                                        }(k)), d.push(k), m = a, g > t.length) return "break";
                                    var p, b = t.substring(a, g),
                                        _ = "linkified_text_item_".concat(n);
                                    p = "UserReference" === o.__typename && o.userName ? "/Profile/".concat(encodeURIComponent(o.userName)) : "#", s ? d.push(r.createElement(i.InteractionLogger, {
                                        key: _
                                    }, function(e) {
                                        return r.createElement("span", {
                                            className: "social-links-Linkify__link_user_reference--2Auh8",
                                            dir: "ltr",
                                            onClick: function n(t) {
                                                e(t, "userReferenceClick", {
                                                    targetUserId: o.userId
                                                }), u && u(t), t.preventDefault(), t.stopPropagation(), window.location.href = p
                                            }
                                        }, b)
                                    })) : d.push(r.createElement(i.InteractionLogger, {
                                        key: _
                                    }, function(e) {
                                        return r.createElement(c.Link, {
                                            href: p,
                                            className: "social-links-Linkify__link_user_reference--2Auh8",
                                            dir: "ltr",
                                            onClick: function n(t) {
                                                e(t, "userReferenceClick", {
                                                    targetUserId: o.userId
                                                }), u && u(t)
                                            }
                                        }, b)
                                    })), m = g
                                }, k = 0; k < f.length && "break" !== g(k); k++);
                            if (m < t.length) {
                                var p = t.substring(m);
                                l && (p = function e(n) {
                                    return n.replace(/\s+$/g, "")
                                }(p)), d.push(p)
                            }
                            return r.createElement(r.Fragment, null, d)
                        }
                    }
                    return r.createElement(r.Fragment, null, l ? t.trim() : t)
                };
            a.defaultProps = {
                text: "",
                socialReferences: {},
                useSpan: !1,
                trim: !1,
                onClick: void 0
            };
            var s = a,
                l = t("@ta/styleguide.icon"),
                u = t("@ta/social.obfuscation"),
                f = t("./packages/common/decode/decode.jsx"),
                m = t.n(f),
                d = t("@ta/common.client"),
                g = t.n(d),
                k = function e(n) {
                    var t = n.uri;
                    return t ? r.createElement(g.a, null, function(e) {
                        var n = e ? m()(t) : "";
                        return /^https?:\/\//.test(n) ? r.createElement(u.ProtectedObfuscatedLink, {
                            target: "_blank",
                            encodedUrl: t,
                            className: "ui_link ".concat("social-links-WebsiteLink__link--2j5lO")
                        }, r.createElement(l.Icon, {
                            name: "internet",
                            className: "social-links-WebsiteLink__icon--3OiCn"
                        }), n.replace(/(?:\w+:\/\/)?([\w.]+)(?:\/.*)?/, "$1")) : r.createElement(u.ProtectedObfuscatedLink, {
                            target: "_blank",
                            encodedUrl: t,
                            className: "ui_link ".concat("social-links-WebsiteLink__link--2j5lO"),
                            requiresHttp: !0
                        }, r.createElement(l.Icon, {
                            name: "internet",
                            className: "social-links-WebsiteLink__icon--3OiCn"
                        }), n.replace(/(?:\w+:\/\/)?([\w.]+)(?:\/.*)?/, "$1"))
                    }) : null
                };
            t.d(n, "Linkify", function() {
                return s
            }), t.d(n, "SocialReferences", function() {}), t.d(n, "WebsiteLink", function() {
                return k
            })
        },
        "@ta/common.client": function(n, t) {
            n.exports = e
        },
        "@ta/social.obfuscation": function(e, t) {
            e.exports = n
        },
        "@ta/styleguide.icon": function(e, n) {
            e.exports = t
        },
        "@ta/tracking.interactions": function(e, n) {
            e.exports = r
        },
        "dll-reference @ta/common.global": function(e, n) {
            e.exports = o
        }
    })
});
//# sourceMappingURL=social.links.cc42749b9b.js.map