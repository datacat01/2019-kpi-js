define("@ta/social.profile", ["@ta/public.iap-reporting", "@ta/social.blocks", "@ta/social.overflow-ui", "@ta/styleguide.button", "@ta/styleguide.icon", "@ta/common.global"], function(e, t, n, o, r, l) {
    return function(e) {
        var t = {};

        function n(o) {
            if (t[o]) return t[o].exports;
            var r = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var r in e) n.d(o, r, function(t) {
                    return e[t]
                }.bind(null, r));
            return o
        }, n.n = function(e) {
            var t = e && e.__esModule ? function t() {
                return e.default
            } : function t() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = "./packages/social/profile/profile.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/extends.js": function(e, t, n) {
            "use strict";

            function o() {
                return (o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/react-redux/es/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/features/features.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/features/features.jsx")
        },
        "./packages/common/i18n/i18n.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/social/profile/profile.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("./node_modules/react/index.js"),
                r = n("@ta/social.overflow-ui"),
                l = n("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                a = n("./node_modules/react-redux/es/index.js"),
                i = n("./packages/common/i18n/i18n.jsx"),
                c = n("./packages/common/features/features.jsx"),
                s = n("@ta/social.blocks"),
                u = n("@ta/public.iap-reporting"),
                f = function e(t) {
                    var n = t.displayName,
                        l = t.isMe,
                        a = t.isBlocking,
                        s = t.openMemberInteractionModal,
                        u = t.openReportModal,
                        f = t.overrideItems,
                        p = void 0 === f ? {} : f,
                        d = t.children,
                        m = [];
                    return !Object(c.featureIsEnabled)("social_block_enabled") || !1 === p.BLOCK || !p.BLOCK && l || (a ? m.push(o.createElement(r.OverflowUIListItem, {
                        key: "unblock",
                        onClick: function e() {
                            s("UNBLOCK")
                        }
                    }, Object(i.localize)("social_unblock_username_overflow", {
                        displayName: n
                    }))) : m.push(o.createElement(r.OverflowUIListItem, {
                        key: "block",
                        onClick: function e() {
                            s("BLOCK")
                        }
                    }, Object(i.localize)("social_block_username_overflow", {
                        displayName: n
                    }))), !Object(c.featureIsEnabled)("social_report_profile_iap_enabled") || !1 === p.REPORT || !p.REPORT && l || m.push(o.createElement(r.OverflowUIListItem, {
                        key: "report",
                        onClick: u
                    }, Object(i.localize)("social_report_profile")))), m.length > 0 ? o.createElement(o.Fragment, null, [], d(m)) : null
                },
                p = Object(a.connect)(function(e, t) {
                    return {
                        isMe: t.profileUserId === e.auth.loggedInUserId
                    }
                })(function e(t) {
                    var n = "reportProfile".concat(t.profileUserId);
                    return o.createElement(s.MemberInteractionConsumer, null, function(e) {
                        return o.createElement(u.ReportModalOpener, {
                            name: n
                        }, function(r) {
                            return o.createElement(o.Fragment, null, o.createElement(u.ReportMemberModal, {
                                contentId: t.profileUserId,
                                modalName: n
                            }), o.createElement(f, Object(l.a)({}, t, {
                                openMemberInteractionModal: e,
                                openReportModal: r
                            })))
                        })
                    })
                }),
                d = function e(t) {
                    var n = t.profileUserId,
                        l = t.displayName,
                        a = t.isBlocking,
                        i = t.className;
                    return o.createElement(p, {
                        profileUserId: n,
                        displayName: l,
                        isBlocking: a
                    }, function(e) {
                        return e.length > 0 ? o.createElement(r.OverflowUI, {
                            className: i
                        }, o.createElement(r.OverflowUIList, null, e)) : null
                    })
                };
            d.defaultProps = {
                className: void 0
            };
            var m = d,
                b = n("@ta/styleguide.icon"),
                g = n("@ta/styleguide.button"),
                v = n.n(g),
                O = function e(t) {
                    var n = t.profileUserId,
                        l = t.displayName,
                        a = t.isBlocking;
                    return o.createElement(p, {
                        profileUserId: n,
                        displayName: l,
                        isBlocking: a
                    }, function(e) {
                        return e.length > 0 ? o.createElement("span", null, o.createElement(r.OverflowOpener, {
                            overflowList: o.createElement(r.OverflowUIList, null, e),
                            shiftX: 40,
                            shiftArrow: 32,
                            shiftY: 10
                        }, function(e, t) {
                            return o.createElement(o.Fragment, null, o.createElement("span", {
                                ref: e
                            }), o.createElement(v.a, {
                                onClick: t,
                                type: "secondary"
                            }, o.createElement(b.Icon, {
                                name: "more-horizontal",
                                className: "social-profile-ProfileOverflowButton__icon--1V_os"
                            })))
                        })) : null
                    })
                };
            n.d(t, "ProfileOverflowMenu", function() {
                return m
            }), n.d(t, "ProfileOverflowButton", function() {
                return O
            })
        },
        "@ta/public.iap-reporting": function(t, n) {
            t.exports = e
        },
        "@ta/social.blocks": function(e, n) {
            e.exports = t
        },
        "@ta/social.overflow-ui": function(e, t) {
            e.exports = n
        },
        "@ta/styleguide.button": function(e, t) {
            e.exports = o
        },
        "@ta/styleguide.icon": function(e, t) {
            e.exports = r
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = l
        }
    })
});
//# sourceMappingURL=social.profile.3d4b8104ef.js.map