define("@ta/social.review-info", ["@ta/common.global"], function(e) {
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
        }, n.p = "", n(n.s = "./packages/social/review-info/EventDate.jsx")
    }({
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/i18n/i18n.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/social/review-info/EventDate.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("./node_modules/react/index.js"),
                o = n("./packages/common/i18n/i18n.jsx");
            t.default = function e(t) {
                var n = t.stayDate,
                    a = t.placeType;
                if (n) {
                    var c = function e(t, n) {
                        switch (t) {
                            case "ACCOMMODATION":
                                return Object(o.localize)("Date_of_stay", n);
                            case "AIRLINE":
                                return Object(o.localize)("Date_of_travel", n);
                            case "ACTIVITY":
                            case "ATTRACTION":
                                return Object(o.localize)("Date_of_experience", n);
                            case "EATERY":
                                return Object(o.localize)("Date_of_visit", n);
                            case "SHIP":
                                return Object(o.localize)("cruise_review_sail_date", n)
                        }
                        return ""
                    }(a, {
                        0: "social-review-info-EventDate__bold--1Z_d8",
                        1: o.globalize.formatDate("date_full_month_year", new Date(n))
                    });
                    return r.createElement("div", {
                        className: "social-review-info-EventDate__event_date--2d3vn"
                    }, Object(o.unescaped)(c))
                }
                return null
            }
        },
        "dll-reference @ta/common.global": function(t, n) {
            t.exports = e
        }
    })
});
//# sourceMappingURL=social.review-info.37fba580dc.js.map