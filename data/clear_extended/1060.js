define("@ta/social.onboarding-utils", ["@ta/common.global"], function(e) {
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
        }, t.p = "", t(t.s = "./packages/social/onboarding-utils/OnboardingUtils.jsx")
    }({
        "./packages/common/features/features.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/features/features.jsx")
        },
        "./packages/social/onboarding-utils/OnboardingUtils.jsx": function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, "ScrollEntrypoints", function() {
                return r
            }), t.d(n, "isOnboardingDisabledThroughFeature", function() {
                return u
            });
            var o = t("./packages/common/features/features.jsx"),
                r = ["FOLLOW_ACTION", "LIKE_ACTION", "REPOST_ACTION", "SAVE_ACTION"],
                a = ["Home", "Profile"];

            function u(e, n, t) {
                return "DEFAULT" === e && (Object(o.featureIsEnabled)("disable_default_social_onboarding") || Object(o.featureIsEnabled)("disable_default_social_onboarding_and_brand_educator")) || Object(o.featureIsEnabled)("onboarding_use_recommended_follow_modal") && "DESKTOP" === n || r.includes(e) && (!Object(o.featureIsEnabled)("onboarding_new_entrypoints_test") || !a.includes(t)) || Object(o.featureIsEnabled)("onboarding_disable_on_non_component_header") && "MASTHEAD" === e && "Home" !== t
            }
        },
        "dll-reference @ta/common.global": function(n, t) {
            n.exports = e
        }
    })
});
//# sourceMappingURL=social.onboarding-utils.465997cf2c.js.map