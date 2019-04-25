define("@ta/social.member-common", ["@ta/styleguide.icon", "@ta/common.global"], function(e, n) {
    return function(e) {
        var n = {};

        function o(a) {
            if (n[a]) return n[a].exports;
            var m = n[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return e[a].call(m.exports, m, m.exports, o), m.l = !0, m.exports
        }
        return o.m = e, o.c = n, o.d = function(e, n, a) {
            o.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: a
            })
        }, o.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, o.t = function(e, n) {
            if (1 & n && (e = o(e)), 8 & n) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var a = Object.create(null);
            if (o.r(a), Object.defineProperty(a, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var m in e) o.d(a, m, function(n) {
                    return e[n]
                }.bind(null, m));
            return a
        }, o.n = function(e) {
            var n = e && e.__esModule ? function n() {
                return e.default
            } : function n() {
                return e
            };
            return o.d(n, "a", n), n
        }, o.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, o.p = "", o(o.s = "./packages/social/member-common/member-common.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, n, o) {
            "use strict";

            function a(e, n, o) {
                return n in e ? Object.defineProperty(e, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = o, e
            }
            o.d(n, "a", function() {
                return a
            })
        },
        "./node_modules/react/index.js": function(e, n, o) {
            e.exports = o("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/classnames/classnames.jsx": function(e, n, o) {
            e.exports = o("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/common/i18n/i18n.jsx": function(e, n, o) {
            e.exports = o("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/common/routing/routing.jsx": function(e, n, o) {
            e.exports = o("dll-reference @ta/common.global")("./packages/common/routing/routing.jsx")
        },
        "./packages/social/member-common/member-common.jsx": function(e, n, o) {
            "use strict";
            o.r(n);
            var a = o("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                m = o("./node_modules/react/index.js"),
                t = o("./packages/common/classnames/classnames.jsx"),
                r = o.n(t),
                c = o("./packages/common/i18n/i18n.jsx"),
                l = o("@ta/styleguide.icon"),
                s = function e(n) {
                    return n && (n.locationId || n.fallbackString)
                },
                i = function e(n) {
                    var o = n.hometown,
                        t = n.size,
                        i = n.singleLine;
                    if (s(o)) {
                        var u, b = o;
                        b.locationId ? 1 === b.locationId ? u = Object(c.localize)("dual_search_worldwide") : b.location && b.location.additionalNames && b.location.additionalNames.long && (u = b.location.additionalNames.long) : b.fallbackString && (u = b.fallbackString);
                        var d = i ? "default" : "social-member-common-MemberHometown__member_info--yYJTE",
                            f = t || "default";
                        return m.createElement("span", {
                            className: r()(Object(a.a)({}, d, d), "social-member-common-MemberHometown__hometown--3kM9S", Object(a.a)({}, f, t))
                        }, m.createElement(l.Icon, {
                            name: "map-pin-fill",
                            className: "social-member-common-MemberHometown__icon--3WpeC"
                        }), u)
                    }
                    return null
                };
            i.defaultProps = {
                size: "default",
                singleLine: !1
            };
            var u = i,
                b = o("./packages/common/routing/routing.jsx"),
                d = function e(n) {
                    var o, t = n.profile,
                        c = n.memberInfo,
                        s = n.largeMobileUserName,
                        i = n.responsive,
                        u = n.displayNameClassName,
                        d = n.usernameClassName,
                        f = n.addProfileLink,
                        _ = n.singleLine,
                        p = n.useH1,
                        g = n.socialConnection,
                        N = "Unknown user" !== t.displayName ? t.displayName : "New User",
                        j = m.createElement(m.Fragment, null, m.createElement("span", {
                            className: r()("social-member-common-MemberName__display_name--2GJkA", Object(a.a)({}, "".concat("social-member-common-MemberName__verified--2y7aU", " verified"), t.isVerified), u)
                        }, c && c.preferredDisplayname ? c.preferredDisplayname : N), g && g.includes("FACEBOOK") && m.createElement(l.Icon, {
                            name: "facebook",
                            className: "social-member-common-MemberName__facebook--EbpgB"
                        })),
                        M = m.createElement("span", {
                            className: r()("social-member-common-MemberName__container--Xctoo", Object(a.a)({}, "social-member-common-MemberName__responsive--3IK75", i), Object(a.a)({}, "social-member-common-MemberName__single_line--13Zc9", _))
                        }, m.createElement("span", {
                            className: "social-member-common-MemberName__display_name_container--3-kmb"
                        }, p ? m.createElement("h1", null, j) : j), t.username && m.createElement("span", {
                            className: r()("social-member-common-MemberName__user_name--1tM7R", d, Object(a.a)({}, "social-member-common-MemberName__large_mobile_user_name--35DMp", s))
                        }, t.username));
                    return f ? m.createElement(b.Link, {
                        href: null == t ? void 0 : null === (o = t.route) || void 0 === o ? void 0 : o.url
                    }, M) : M
                };
            d.defaultProps = {
                memberInfo: void 0,
                largeMobileUserName: !1,
                responsive: !1,
                displayNameClassName: "",
                usernameClassName: "",
                addProfileLink: !0,
                singleLine: !1,
                useH1: !1,
                socialConnection: ""
            };
            var f = d,
                _ = function e(n) {
                    var o, t = n.type,
                        c = n.reason,
                        s = n.singleLine,
                        i = n.className,
                        u = n.lightText;
                    return c ? m.createElement("div", {
                        className: r()("social-member-common-MemberReasonWhy__reason_why_container--GDhYK", i, (o = {}, Object(a.a)(o, "social-member-common-MemberReasonWhy__single_line--3DOGP", s), Object(a.a)(o, "social-member-common-MemberReasonWhy__light_text--NnFvj", u), o)),
                        title: c
                    }, t && "FACEBOOK_FRIENDS" === t && m.createElement(l.Icon, {
                        name: "facebook",
                        className: "social-member-common-MemberReasonWhy__facebook--19ura"
                    }), c) : null
                };
            _.defaultProps = {
                type: null,
                singleLine: !1,
                className: "",
                lightText: !1
            };
            var p = _,
                g = function e(n) {
                    var o = n.profile,
                        t = n.singleLine,
                        l = s(null == o ? void 0 : o.hometown) ? m.createElement(u, {
                            hometown: o.hometown,
                            size: "small"
                        }) : null;
                    return m.createElement(m.Fragment, null, !t && l && m.createElement("div", {
                        className: "social-member-common-MemberStatsBasic__stat_item--GZAbX"
                    }, l), m.createElement("div", {
                        className: r()("social-member-common-MemberStatsBasic__together--2bxuG", Object(a.a)({}, "social-member-common-MemberStatsBasic__secondLine--18mfE", l && !t))
                    }, t && l && m.createElement("span", {
                        className: "".concat("social-member-common-MemberStatsBasic__stat_item--GZAbX", " ").concat("social-member-common-MemberStatsBasic__left_stat_item--16ol5")
                    }, l), (null == o ? void 0 : o.contributionCounts) ? m.createElement("span", {
                        className: "".concat("social-member-common-MemberStatsBasic__stat_item--GZAbX", " ").concat("social-member-common-MemberStatsBasic__left_stat_item--16ol5")
                    }, Object(c.unescaped)(Object(c.localize)("social_n_contributions_plural", {
                        0: "social-member-common-MemberStatsBasic__bold--HjcZP",
                        1: c.globalize.formatNumber("integer", o.contributionCounts.sumAllUgc)
                    }))) : null, (null == o ? void 0 : o.followerCount) ? m.createElement("span", {
                        className: "social-member-common-MemberStatsBasic__stat_item--GZAbX"
                    }, Object(c.unescaped)(Object(c.localize)("social_n_followers_plural", {
                        0: "social-member-common-MemberStatsBasic__bold--HjcZP",
                        1: c.globalize.formatNumber("integer", o.followerCount)
                    }))) : null))
                };
            g.defaultProps = {
                singleLine: !1
            };
            var N = g;
            o.d(n, "MemberHometown", function() {
                return u
            }), o.d(n, "canRenderHometown", function() {
                return s
            }), o.d(n, "MemberName", function() {
                return f
            }), o.d(n, "MemberReasonWhy", function() {
                return p
            }), o.d(n, "MemberStatsBasic", function() {
                return N
            })
        },
        "@ta/styleguide.icon": function(n, o) {
            n.exports = e
        },
        "dll-reference @ta/common.global": function(e, o) {
            e.exports = n
        }
    })
});
//# sourceMappingURL=social.member-common.520e2a9ca2.js.map