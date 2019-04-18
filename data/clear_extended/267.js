define("@ta/social.feed-filter", ["@ta/common.global"], function(e) {
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
        }, n.p = "", n(n.s = "./packages/social/feed-filter/feed-filter.jsx")
    }({
        "./packages/common/features/features.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/features/features.jsx")
        },
        "./packages/social/feed-filter/feed-filter.jsx": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "Types", function() {
                return f
            }), n.d(t, "TourismTypes", function() {
                return i
            }), n.d(t, "getAllowedTypes", function() {
                return l
            }), n.d(t, "getAllowedTourismTypes", function() {
                return a
            });
            var r = n("./packages/common/features/features.jsx"),
                o = function e() {
                    return !0
                },
                u = {
                    CRUISE_SEARCH_ITEM: o,
                    DMO_ITEM: function e() {
                        return Object(r.featureIsEnabled)("allow_dmo_shelf_web")
                    },
                    ENGAGEMENT: o,
                    LINK_POST: o,
                    LOCATION: o,
                    MEMBER: o,
                    PHOTO: o,
                    MEDIA_BATCH: o,
                    REPOST: o,
                    REVIEW: o,
                    TRIP: function e() {
                        return Object(r.featureIsEnabled)("trips_2018_home_profile")
                    },
                    VIDEO: o,
                    FLIGHTS_DESTINATION_ITEM: o,
                    GEO_OVERVIEW: o,
                    RECOMMENDED_LOCATION: o,
                    HEADER: function e() {
                        return Object(r.featureIsEnabled)("social_in_destination_feed")
                    }
                },
                f = Object.keys(u),
                c = {
                    CRUISE_SEARCH_ITEM: o,
                    DMO_ITEM: function e() {
                        return Object(r.featureIsEnabled)("allow_dmo_shelf_web")
                    },
                    ENGAGEMENT: o,
                    LINK_POST: o,
                    LOCATION: o,
                    MEMBER: o,
                    PHOTO: o,
                    MEDIA_BATCH: o,
                    REPOST: o,
                    REVIEW: o,
                    TRIP: function e() {
                        return Object(r.featureIsEnabled)("trips_2018_home_profile")
                    },
                    VIDEO: o,
                    FLIGHTS_DESTINATION_ITEM: o,
                    GEO_OVERVIEW: o,
                    FILTER: o
                },
                i = Object.keys(c),
                l = function e(t) {
                    return Object.keys(u).filter(function(e) {
                        return u[e]() && (!t || t.includes(e))
                    })
                },
                a = function e(t) {
                    return Object.keys(c).filter(function(e) {
                        return c[e]() && (!t || t.includes(e))
                    })
                }
        },
        "dll-reference @ta/common.global": function(t, n) {
            t.exports = e
        }
    })
});
//# sourceMappingURL=social.feed-filter.a63c0a6af7.js.map