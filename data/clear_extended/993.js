define("@ta/social.failover", ["@ta/common.global"], function(e) {
    return function(e) {
        var n = {};

        function o(r) {
            if (n[r]) return n[r].exports;
            var t = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(t.exports, t, t.exports, o), t.l = !0, t.exports
        }
        return o.m = e, o.c = n, o.d = function(e, n, r) {
            o.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: r
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
            var r = Object.create(null);
            if (o.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var t in e) o.d(r, t, function(n) {
                    return e[n]
                }.bind(null, t));
            return r
        }, o.n = function(e) {
            var n = e && e.__esModule ? function n() {
                return e.default
            } : function n() {
                return e
            };
            return o.d(n, "a", n), n
        }, o.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, o.p = "", o(o.s = "./packages/social/failover/index.jsx")
    }({
        "./node_modules/react/index.js": function(e, n, o) {
            e.exports = o("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/i18n/i18n.jsx": function(e, n, o) {
            e.exports = o("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/social/failover/index.jsx": function(e, n, o) {
            "use strict";
            o.r(n);
            var r = o("./node_modules/react/index.js"),
                t = o("./packages/common/i18n/i18n.jsx"),
                a = function e() {
                    return r.createElement("div", {
                        className: "social-failover-FailoverMessage__container--xbwK6"
                    }, r.createElement("p", {
                        className: "social-failover-FailoverMessage__heading--JoRxo"
                    }, Object(t.localize)("social_readonly_message_main"), " "), r.createElement("p", {
                        className: "social-failover-FailoverMessage__body--2JHAz"
                    }, Object(t.localize)("social_readonly_message_subtext"), " "))
                };
            o.d(n, "FailoverMessage", function() {
                return a
            })
        },
        "dll-reference @ta/common.global": function(n, o) {
            n.exports = e
        }
    })
});
//# sourceMappingURL=social.failover.46bff1c02d.js.map