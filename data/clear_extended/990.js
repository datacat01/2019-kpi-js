define("@ta/social.place-type", ["@ta/styleguide.icon", "@ta/common.global"], function(e, t) {
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
        }, n.p = "", n(n.s = "./packages/social/place-type/index.jsx")
    }({
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/social/place-type/index.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("./node_modules/react/index.js"),
                o = n("@ta/styleguide.icon"),
                a = function e(t) {
                    var n = t.placeType,
                        a = t.className,
                        c = function e(t) {
                            switch (t) {
                                case "ACCOMMODATION":
                                    return "hotels";
                                case "ATTRACTION":
                                    return "attractions";
                                case "ACTIVITY":
                                    return "activities";
                                case "CITY":
                                    return "globe-world";
                                case "EATERY":
                                    return "restaurants";
                                case "AIRLINE":
                                    return "flights";
                                case "SHIP":
                                    return "cruises";
                                default:
                                    return null
                            }
                        }(n);
                    return c && r.createElement(o.Icon, {
                        name: c,
                        className: a
                    })
                };
            a.defaultProps = {
                className: void 0
            };
            var c = a,
                l = function e(t) {
                    var n = t.location;
                    return r.createElement("div", {
                        className: "social-place-type-NoPhotoAvailableByPlaceType__no_photo_available--3wDoR"
                    }, r.createElement(c, {
                        placeType: n.placeType,
                        className: "social-place-type-NoPhotoAvailableByPlaceType__icon--3T-1p"
                    }))
                };
            n.d(t, "NoPhotoAvailableByPlaceType", function() {
                return l
            }), n.d(t, "PlaceTypeIcon", function() {
                return c
            })
        },
        "@ta/styleguide.icon": function(t, n) {
            t.exports = e
        },
        "dll-reference @ta/common.global": function(e, n) {
            e.exports = t
        }
    })
});
//# sourceMappingURL=social.place-type.aa3439d4f6.js.map