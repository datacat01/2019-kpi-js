define("@ta/brand.global-nav-state", ["@ta/common.global"], function(e) {
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
        }, n.p = "", n(n.s = "./packages/brand/global-nav-state/GlobalNavState.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), o.forEach(function(t) {
                        Object(r.a)(e, t, n[t])
                    })
                }
                return e
            }
        },
        "./packages/brand/global-nav-state/GlobalNavState.jsx": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "getState", function() {
                return a
            }), n.d(t, "ACTIONS", function() {
                return i
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                o = new(n("./packages/common/state/state.jsx").PrivateStateAccessor)("global-nav", {
                    quickLinkTilesVisible: !0,
                    tripSearchGeoPillVisible: !0,
                    brandHeaderMounted: !1
                }),
                a = function e(t) {
                    return o.getFrom(t)
                },
                i = {
                    setQuickLinksVisible: function e(t) {
                        return o.action({
                            type: "SET_QUICK_LINKS_VISIBLE",
                            isVisible: t
                        })
                    },
                    setTripSearchGeoPillVisible: function e(t) {
                        return o.action({
                            type: "SET_TRIP_SEARCH_GEOPILL_VISIBLE",
                            isVisible: t
                        })
                    },
                    setBrandHeaderMounted: function e() {
                        return o.action({
                            type: "SET_BRAND_HEADER_MOUNTED"
                        })
                    }
                };
            o.setReducer(function(e, t) {
                switch (t.type) {
                    case "SET_QUICK_LINKS_VISIBLE":
                        return Object(r.a)({}, e, {
                            quickLinkTilesVisible: t.isVisible
                        });
                    case "SET_TRIP_SEARCH_GEOPILL_VISIBLE":
                        return Object(r.a)({}, e, {
                            tripSearchGeoPillVisible: t.isVisible
                        });
                    case "SET_BRAND_HEADER_MOUNTED":
                        return Object(r.a)({}, e, {
                            brandHeaderMounted: !0
                        });
                    default:
                        return e
                }
            })
        },
        "./packages/common/state/state.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/state/state.jsx")
        },
        "dll-reference @ta/common.global": function(t, n) {
            t.exports = e
        }
    })
});
//# sourceMappingURL=brand.global-nav-state.8aac06f9e9.js.map