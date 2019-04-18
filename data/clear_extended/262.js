define("@ta/social.onboarding-state", ["@ta/common.global"], function(e) {
    return function(e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
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
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) n.d(r, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return r
        }, n.n = function(e) {
            var t = e && e.__esModule ? function t() {
                return e.default
            } : function t() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = "./packages/social/onboarding-state/onboardingState.jsx")
    }({
        "./packages/common/state/state.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/state/state.jsx")
        },
        "./packages/social/onboarding-state/onboardingState.jsx": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "STATE_ACCESS", function() {
                return r
            }), n.d(t, "getState", function() {
                return o
            }), n.d(t, "ACTIONS", function() {
                return a
            });
            var r = new(n("./packages/common/state/state.jsx").PrivateStateAccessor)("onboarding-state", {
                    shouldFire: !1,
                    immediateLoad: !1,
                    entryPoint: "DEFAULT"
                }),
                o = function e(t) {
                    return r.getFrom(t)
                },
                a = {
                    setShouldFire: function e(t, n) {
                        return r.action({
                            type: "FIRE_ONBOARDING",
                            immediateLoad: t || !1,
                            entryPoint: n || "UNKNOWN"
                        })
                    },
                    resetShouldFire: function e() {
                        return r.action({
                            type: "RESET"
                        })
                    }
                };
            r.setReducer(function(e, t) {
                switch (t.type) {
                    case "FIRE_ONBOARDING":
                        return {
                            shouldFire: !0,
                            immediateLoad: t.immediateLoad,
                            entryPoint: t.entryPoint
                        };
                    case "RESET":
                        return {
                            shouldFire: !1,
                            immediateLoad: !1,
                            entryPoint: "DEFAULT"
                        };
                    default:
                        return e
                }
            })
        },
        "dll-reference @ta/common.global": function(t, n) {
            t.exports = e
        }
    })
});
//# sourceMappingURL=social.onboarding-state.d1a0fec9cf.js.map