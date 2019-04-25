define("brand.header", ["@ta/brand.global-nav-context", "@ta/brand.global-nav-state", "@ta/brand.trip-search-geopill-flyout", "@ta/common.cdn", "@ta/events.event-boundary", "@ta/overlays.attached-arrow-overlay", "@ta/overlays.fullscreen-overlay", "@ta/overlays.managers", "@ta/overlays.modal", "@ta/overlays.pieces", "@ta/overlays.popover", "@ta/overlays.responsive-attached-overlay", "@ta/overlays.slide-in", "@ta/social.login-gate", "@ta/social.onboarding-state", "@ta/styleguide.avatar", "@ta/styleguide.button", "@ta/styleguide.icon", "@ta/styleguide.loading", "@ta/tracking.interactions", "common/Radio", "@ta/common.global"], function(e, t, a, n, r, o, i, l, s, c, u, d, m, b, p, g, v, f, h, _, j, k) {
    return function(e) {
        function t(t) {
            for (var a, r, o = t[0], i = t[1], l = 0, c = []; l < o.length; l++) r = o[l], n[r] && c.push(n[r][0]), n[r] = 0;
            for (a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
            for (s && s(t); c.length;) c.shift()()
        }
        var a = {},
            n = {
                "brand.header": 0
            };

        function r(t) {
            if (a[t]) return a[t].exports;
            var n = a[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports
        }
        r.e = function e(t) {
            var a = [],
                r = n[t];
            if (0 !== r)
                if (r) a.push(r[2]);
                else {
                    var o = new Promise(function(e, a) {
                        r = n[t] = [e, a]
                    });
                    window.require("@ta/platform.runtime").importBundle(t), a.push(r[2] = o)
                } return Promise.all(a)
        }, r.m = e, r.c = a, r.d = function(e, t, a) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: a
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var a = Object.create(null);
            if (r.r(a), Object.defineProperty(a, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var n in e) r.d(a, n, function(t) {
                    return e[t]
                }.bind(null, n));
            return a
        }, r.n = function(e) {
            var t = e && e.__esModule ? function t() {
                return e.default
            } : function t() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r.oe = function(e) {
            throw console.error(e), e
        };
        var o = window.__wp__ = window.__wp__ || [],
            i = o.push.bind(o);
        o.push = t, o = o.slice();
        for (var l = 0; l < o.length; l++) t(o[l]);
        var s = i;
        return r(r.s = "./roots/brand/header/GlobalNav.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, t, a) {
            "use strict";

            function n(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            a.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, t, a) {
            "use strict";

            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            a.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, t, a) {
            "use strict";

            function n(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function r(e, t, a) {
                return t && n(e.prototype, t), a && n(e, a), e
            }
            a.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, t, a) {
            "use strict";

            function n(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            a.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/extends.js": function(e, t, a) {
            "use strict";

            function n() {
                return (n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            a.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, t, a) {
            "use strict";

            function n(e) {
                return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(e)
            }
            a.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return r
            });
            var n = a("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function r(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Object(n.a)(e, t)
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js": function(e, t, a) {
            "use strict";

            function n(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }
            a.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return r
            });
            var n = a("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(a);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(a, e).enumerable
                    }))), r.forEach(function(t) {
                        Object(n.a)(e, t, a[t])
                    })
                }
                return e
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return o
            });
            var n = a("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                r = a("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function o(e, t) {
                return !t || "object" !== Object(n.a)(t) && "function" != typeof t ? Object(r.a)(e) : t
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, t, a) {
            "use strict";

            function n(e, t) {
                return (n = Object.setPrototypeOf || function e(t, a) {
                    return t.__proto__ = a, t
                })(e, t)
            }
            a.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js": function(e, t, a) {
            "use strict";
            var n = a("./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");

            function r(e) {
                return function t(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, a = new Array(e.length); t < e.length; t++) a[t] = e[t];
                        return a
                    }
                }(e) || Object(n.a)(e) || function a() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }
            a.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, t, a) {
            "use strict";

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(e)
            }

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function e(t) {
                    return n(t)
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
                })(e)
            }
            a.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/react-apollo/react-apollo.browser.umd.js": function(e, t, a) {
            e.exports = a("dll-reference @ta/common.global")("./node_modules/react-apollo/react-apollo.browser.umd.js")
        },
        "./node_modules/react-redux/es/index.js": function(e, t, a) {
            e.exports = a("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, t, a) {
            e.exports = a("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./node_modules/webpack/buildin/global.js": function(e, t) {
            var a;
            a = function() {
                return this
            }();
            try {
                a = a || Function("return this")() || (0, eval)("this")
            } catch (e) {
                "object" == typeof window && (a = window)
            }
            e.exports = a
        },
        "./packages/brand/geopill-util/TripSearchGeoPillBinding.jsx": function(e, t, a) {
            "use strict";
            var n = a("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                r = a("./packages/common/api/api.jsx"),
                o = a("./packages/common/data-cacher/DataCacher.jsx");
            a("./node_modules/react/index.js"), t.a = function e(t) {
                return Object(r.bind)(function(e, t) {
                    var a = t("/data/1.0/brand/geopill?".concat(function e(t) {
                        var a = {
                                servlet: t.route.page,
                                geoId: t.route.geo,
                                latitude: t.route.latitude,
                                searchNearby: t.route.searchNearby
                            },
                            n = {};
                        return Object.keys(a).forEach(function(e) {
                            null != a[e] && (n[e] = a[e])
                        }), new URLSearchParams(n)
                    }(e).toString()));
                    return function(e) {
                        var t, r = a.get();
                        return t = r.data ? {
                            geoName: r.data.geoName,
                            isGeoScoped: r.data.isGeoScoped,
                            isNearby: r.data.isNearby
                        } : {
                            geoName: void 0,
                            isGeoScoped: !1,
                            isNearby: !1
                        }, Object(n.a)({
                            loading: r.loading,
                            servletName: e.meta.initialServletName
                        }, t)
                    }
                })(Object(o.b)()(t))
            }
        },
        "./packages/brand/global-nav-geopill/GeoPill.jsx": function(e, t, a) {
            "use strict";
            var n = a("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = a("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                o = a("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                i = a("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                l = a("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                s = a("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                c = a("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = a("./node_modules/react/index.js"),
                d = a("./packages/common/api/api.jsx"),
                m = a("@ta/brand.global-nav-context"),
                b = a.n(m),
                p = a("./packages/common/i18n/i18n.jsx"),
                g = a("./packages/common/tracking/tracking.jsx"),
                v = a.n(g),
                f = a("@ta/styleguide.icon"),
                h = a("@ta/overlays.managers"),
                _ = a("@ta/overlays.responsive-attached-overlay"),
                j = a.n(_),
                k = a("./packages/common/classnames/classnames.jsx"),
                O = a.n(k),
                y = a("./node_modules/react-redux/es/index.js"),
                E = a("./packages/common/imports/imports.jsx"),
                w = a("./packages/common/features/features.jsx"),
                N = a("./packages/common/geolocation/geolocation.jsx"),
                C = a("@ta/styleguide.loading"),
                x = function(e) {
                    function t() {
                        var e, a;
                        Object(n.a)(this, t);
                        for (var r = arguments.length, l = new Array(r), u = 0; u < r; u++) l[u] = arguments[u];
                        return a = Object(o.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(l))), Object(c.a)(Object(s.a)(Object(s.a)(a)), "onSelection", function(e, t) {
                            if (("url" === t.type || "recent_url" === t.type) && t.value) {
                                var n = "url" === t.type ? "submit" : "submit_recent",
                                    r = "string" == typeof t.value ? t.value : "";
                                Object(g.trackEventCookie)({
                                    module: "TopNav_".concat(a.props.servletName || ""),
                                    action: n,
                                    context: "GeoPicker",
                                    value: 0,
                                    destinationUrl: r
                                })
                            }
                        }), a
                    }
                    return Object(l.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t, n = this;
                            return u.createElement(E.Load, {
                                component: (t = function e() {
                                    return a.e("@ta/brand.global-nav-geopill/GeoScopedTypeahead.demand").then(a.bind(null, "./packages/brand/global-nav-geopill/GeoScopedTypeahead.jsx"))
                                }, t.__PACKAGE__ = "@ta/brand.global-nav-geopill", t.__MODULE_ID__ = "./packages/brand/global-nav-geopill/GeoScopedTypeahead.jsx", t.__MODULE_NAME__ = "GeoScopedTypeahead", t.__GET_SYNC__ = function() {
                                    return a.m["./packages/brand/global-nav-geopill/GeoScopedTypeahead.jsx"] ? a("./packages/brand/global-nav-geopill/GeoScopedTypeahead.jsx") : null
                                }, t.__IS_LOADED__ = function() {
                                    return void 0 !== a.m["./packages/brand/global-nav-geopill/GeoScopedTypeahead.jsx"]
                                }, t)
                            }, function(e) {
                                var t = e.Component;
                                if (e.loading) return u.createElement("div", {
                                    className: "brand-global-nav-geopill-GeoPillSearch__loading--F-8xM"
                                }, u.createElement(C.LoadingSpinner, null));
                                if (t) {
                                    var a = "MOBILE" === n.props.viewportCategory && (!n.props.servletName || -1 === n.props.servletName.indexOf("Tourism")) && Object(N.a)();
                                    return u.createElement(t, {
                                        placeholder: Object(p.localize)("mobile_discovery_where_to"),
                                        geoId: n.props.geoId,
                                        searchSessionId: n.props.searchSessionId,
                                        uiOrigin: n.props.uiOrigin,
                                        onSelection: n.onSelection,
                                        enableGeoLocation: a,
                                        enableGeoNavi: Object(w.featureIsEnabled)("mobile_web_feature_dual_search_geo_navi")
                                    })
                                }
                                return null
                            })
                        }
                    }]), t
                }(u.Component),
                L = Object(y.connect)(function(e) {
                    var t = (e.page || {}).geoId,
                        a = (e.tracking || {}).searchSessionId,
                        n = e.meta,
                        r = n.initialRelativeUrl,
                        o = n.initialServletName,
                        i = n.device.viewportCategory;
                    return {
                        geoId: t,
                        searchSessionId: a,
                        uiOrigin: r ? r.substring(1).trim() ? r.substring(1).replace(/-.*/, "_geopicker") : "Home_geopicker" : "geopicker",
                        servletName: o,
                        viewportCategory: i
                    }
                })(x),
                S = function(e) {
                    function t() {
                        var e, a;
                        Object(n.a)(this, t);
                        for (var r = arguments.length, l = new Array(r), u = 0; u < r; u++) l[u] = arguments[u];
                        return a = Object(o.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(l))), Object(c.a)(Object(s.a)(Object(s.a)(a)), "state", {
                            hasBeenOpened: !1
                        }), Object(c.a)(Object(s.a)(Object(s.a)(a)), "openSearch", function(e) {
                            a.state.hasBeenOpened || (v()({
                                module: "TopNav_".concat(a.props.servletName || ""),
                                action: "click",
                                context: "GeoPicker"
                            }), a.setState({
                                hasBeenOpened: !0
                            })), e()
                        }), a
                    }
                    return Object(l.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this;
                            return u.createElement(b.a.Consumer, null, function(e) {
                                var a = O()("brand-global-nav-geopill-GeoPill__wrapper--3SDoz", Object(c.a)({}, "brand-global-nav-geopill-GeoPill__persistentIcons--19sQQ", e.usePersistentIcons));
                                return u.createElement(j.a, {
                                    name: "geo_pill_overlay",
                                    position: "below",
                                    alignEdge: "left",
                                    contents: function e() {
                                        return u.createElement(L, null)
                                    }
                                }, function(e) {
                                    return u.createElement(h.Opener, {
                                        name: "geo_pill_overlay"
                                    }, function(n, r) {
                                        return u.createElement("div", {
                                            ref: e,
                                            className: a,
                                            onClick: function e() {
                                                return t.openSearch(n)
                                            }
                                        }, u.createElement("div", {
                                            className: "brand-global-nav-geopill-GeoPill__global_nav_geopill--_b_ER"
                                        }, u.createElement("span", {
                                            className: "".concat("brand-global-nav-geopill-GeoPill__pill--3spqt", " ui_pill inverted")
                                        }, t.props.label, u.createElement(f.Icon, {
                                            name: r ? "caret-up" : "caret-down",
                                            className: "brand-global-nav-geopill-GeoPill__icon--3Uykj"
                                        }))))
                                    })
                                })
                            })
                        }
                    }]), t
                }(u.Component);
            t.a = Object(d.bind)(function(e, t) {
                var a, n = e.meta && e.meta.initialServletName ? e.meta.initialServletName : "",
                    r = "Search" === n,
                    o = e.page,
                    i = o.geoId ? o.geoId : o.detailId,
                    l = null !== i && (r || 1 !== i),
                    s = e.page && e.page.geoPoint,
                    c = -1 !== n.indexOf("Nearby") || s && (r || "MobileVacationRentalSearch" === n);
                return !c && l && (a = t("/data/1.0/location/".concat(i))),
                    function() {
                        var e, t = (a ? a.get() : {}).data;
                        return c ? e = Object(p.localize)("mx_nearby") : l && t && (e = t.category && t.category.key && "geographic" === t.category.key ? t.name : t.parent_display_name), e || (e = Object(p.localize)("dual_search_worldwide")), {
                            label: e,
                            servletName: n
                        }
                    }
            })(S)
        },
        "./packages/brand/global-nav/GlobalNavApiBinding.jsx": function(e, t, a) {
            "use strict";
            var n = a("./packages/common/api/api.jsx"),
                r = a("./packages/common/data-cacher/DataCacher.jsx");
            a("./node_modules/react/index.js"), t.a = function e(t) {
                return Object(n.bind)(function(e, t) {
                    var a = t("/data/1.0/brand/navLinks?".concat(function e(t) {
                        var a = t.meta,
                            n = a.initialServletName,
                            r = a.device,
                            o = t.i18n.locale,
                            i = t.route,
                            l = i.latitude,
                            s = i.longitude,
                            c = i.searchNearby,
                            u = t.meta.forceFullSite ? "DESKTOP" : r.viewportCategory,
                            d = {
                                servlet: n,
                                locale: o,
                                geoId: t.route.geo ? t.route.geo : null,
                                detailId: t.route.detail ? t.route.detail : null,
                                viewportCategory: u,
                                latitude: l,
                                longitude: s,
                                searchNearby: c
                            },
                            m = {};
                        return Object.keys(d).forEach(function(e) {
                            null != d[e] && (m[e] = d[e])
                        }), new URLSearchParams(m)
                    }(e).toString()));
                    return function() {
                        var e = a.get(),
                            t = e.data,
                            n = e.loading,
                            r = t ? t.links : null,
                            o = t ? t.activeLinkId : null,
                            i = !!t && t.isGeoScoped;
                        return {
                            loading: n,
                            links: r,
                            activeLinkId: o,
                            extendedQuickLinks: !!t && t.isQuickLinksMoreNewLine,
                            isGeoScoped: i
                        }
                    }
                })(Object(r.b)()(t))
            }
        },
        "./packages/brand/global-nav/global-nav.jsx": function(e, t, a) {
            "use strict";
            var n = a("./packages/brand/global-nav/GlobalNavApiBinding.jsx");
            t.a = n.a
        },
        "./packages/brand/global-nav/menus/NavLinks.jsx": function(e, t, a) {
            "use strict";
            var n = a("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
                r = a("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                o = a("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                i = a("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                l = a("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                s = a("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                c = a("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                u = a("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                d = a("./node_modules/react/index.js"),
                m = a("./packages/styleguide/nav-tabs/NavTabs.jsx"),
                b = a("@ta/styleguide.icon"),
                p = a("./node_modules/react-redux/es/index.js"),
                g = a("@ta/overlays.managers"),
                v = a("@ta/overlays.pieces"),
                f = function e(t) {
                    for (var a = t; a;) {
                        if (a.hovered) return !0;
                        a = a.child
                    }
                    return !1
                },
                h = function e(t) {
                    for (var a = t; a;) null !== a.timer && void 0 !== a.timer && (clearTimeout(a.timer), a.timer = null), a = a.parent
                },
                _ = function(e) {
                    function t(e) {
                        var a;
                        Object(r.a)(this, t), a = Object(i.a)(this, Object(l.a)(t).call(this, e)), Object(u.a)(Object(c.a)(Object(c.a)(a)), "setTarget", function(e) {
                            a.renderTimeTarget = e
                        }), Object(u.a)(Object(c.a)(Object(c.a)(a)), "tapTargetHandler", function(e) {
                            e.stopPropagation()
                        }), Object(u.a)(Object(c.a)(Object(c.a)(a)), "tapWindowHandler", function() {
                            a.mouseOutHandler()
                        }), Object(u.a)(Object(c.a)(Object(c.a)(a)), "mouseOverHandler", function() {
                            a.renderTimeTarget && a.renderTimeTarget.addEventListener("touchstart", a.tapTargetHandler), setTimeout(function() {
                                window.addEventListener("touchstart", a.tapWindowHandler)
                            }, 0), null !== a.hoverChainNode.timer && void 0 !== a.hoverChainNode.timer && clearTimeout(a.hoverChainNode.timer), h(a.hoverChainNode), a.hoverChainNode.hovered = !0, a.hoverChainNode.pendingMouseOut = !0, a.props.mouseOverHandler && a.props.mouseOverHandler(a.hoverChainNode)
                        }), Object(u.a)(Object(c.a)(Object(c.a)(a)), "mouseOutHandler", function() {
                            a.hoverChainNode.hovered = !1, a.hoverChainNode.timer = setTimeout(function() {
                                if (a.hoverChainNode.timer = null, !f(a.hoverChainNode)) {
                                    a.renderTimeTarget && a.renderTimeTarget.removeEventListener("touchstart", a.tapTargetHandler), window.removeEventListener("touchstart", a.tapWindowHandler), a.props.mouseOutHandler && a.props.mouseOutHandler(), a.hoverChainNode.pendingMouseOut = !1;
                                    var e = a.hoverChainNode.parent;
                                    e && !e.hovered && e.mouseOutCallback()
                                }
                            }, a.props.mouseOutTimeout)
                        }), Object(u.a)(Object(c.a)(Object(c.a)(a)), "hoverChainNode", void 0), Object(u.a)(Object(c.a)(Object(c.a)(a)), "renderTimeTarget", void 0);
                        var n = {
                            parent: void 0,
                            child: void 0,
                            hovered: !1,
                            mouseOutCallback: function e() {
                                return a.mouseOutHandler()
                            },
                            pendingMouseOut: !1,
                            timer: null
                        };
                        return e.hoverChainParent && (n.parent = e.hoverChainParent, n.parent.child = n), a.hoverChainNode = n, a
                    }
                    return Object(s.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.renderTimeTarget && (this.renderTimeTarget.addEventListener("mouseenter", this.mouseOverHandler), this.renderTimeTarget.addEventListener("touchstart", this.mouseOverHandler), this.renderTimeTarget.addEventListener("mouseleave", this.mouseOutHandler))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            null !== this.hoverChainNode.timer && void 0 !== this.hoverChainNode.timer && clearTimeout(this.hoverChainNode.timer), this.hoverChainNode.pendingMouseOut && this.props.mouseOutHandler && this.props.mouseOutHandler(), window.removeEventListener("touchstart", this.mouseOutHandler)
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return this.props.children(this.setTarget, this.hoverChainNode)
                        }
                    }]), t
                }(d.Component);
            Object(u.a)(_, "defaultProps", {
                mouseOutTimeout: 0
            });
            var j = _,
                k = a("./packages/common/classnames/classnames.jsx"),
                O = a.n(k),
                y = a("./packages/brand/global-nav/menus/TopLevelNavLink.jsx"),
                E = function e(t) {
                    var a, n = O()("ui_tab", "brand-global-nav-menus-MenuTab__menuTab--CMVUJ", (a = {}, Object(u.a)(a, "brand-global-nav-menus-MenuTab__hovering--RFGIQ", t.hovering), Object(u.a)(a, "brand-global-nav-menus-MenuTab__unscoped--2p3rM", !t.isGeoScoped), Object(u.a)(a, "active", t.active), a));
                    return "link" === t.tabType && t.link ? d.createElement(y.a, {
                        link: t.link,
                        setTarget: t.setHoverTarget,
                        extraClasses: n
                    }) : "nonlink" === t.tabType && t.nonLinkContents ? d.createElement("span", {
                        className: n,
                        ref: t.setHoverTarget
                    }, t.nonLinkContents) : null
                };
            E.defaultProps = {
                active: !1,
                hovering: !1,
                setHoverTarget: function e() {},
                tabType: "link",
                link: void 0,
                nonLinkContents: void 0
            };
            var w, N = Object(p.connect)(function(e) {
                    return {
                        isGeoScoped: !!e.route.geo
                    }
                })(E),
                C = function(e) {
                    function t(e) {
                        var a;
                        return Object(r.a)(this, t), a = Object(i.a)(this, Object(l.a)(t).call(this, e)), Object(u.a)(Object(c.a)(Object(c.a)(a)), "mouseOverHandler", function() {
                            a.setState({
                                hovering: !0
                            })
                        }), Object(u.a)(Object(c.a)(Object(c.a)(a)), "mouseOutHandler", function() {
                            a.setState({
                                hovering: !1
                            })
                        }), Object(u.a)(Object(c.a)(Object(c.a)(a)), "triggerWrapRef", void 0), a.triggerWrapRef = null, a.state = {
                            hovering: !1
                        }, a
                    }
                    return Object(s.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this;
                            return d.createElement(g.Opener, {
                                name: this.props.name,
                                local: !0
                            }, function(e) {
                                return d.createElement(g.Closer, {
                                    name: t.props.name
                                }, function(a) {
                                    return d.createElement(j, {
                                        mouseOutTimeout: 0,
                                        mouseOverHandler: function a() {
                                            e(), t.mouseOverHandler()
                                        },
                                        mouseOutHandler: function e() {
                                            a(), t.mouseOutHandler()
                                        }
                                    }, function(e, a) {
                                        return d.createElement(d.Fragment, null, d.createElement("div", {
                                            ref: function e(a) {
                                                t.triggerWrapRef = a
                                            }
                                        }, d.createElement(N, {
                                            setHoverTarget: e,
                                            hovering: t.state.hovering,
                                            active: t.props.triggerActive,
                                            tabType: t.props.tabType,
                                            link: t.props.link,
                                            nonLinkContents: t.props.nonLinkContents
                                        })), t.props.children(t.triggerWrapRef, a))
                                    })
                                })
                            })
                        }
                    }]), t
                }(d.Component),
                x = (w = 0, function() {
                    return "nav_menu_".concat(w += 1)
                }),
                L = function(e) {
                    function t(e) {
                        var a;
                        return Object(r.a)(this, t), a = Object(i.a)(this, Object(l.a)(t).call(this, e)), Object(u.a)(Object(c.a)(Object(c.a)(a)), "getOverlayPosition", function(e) {
                            var t, n, r = e,
                                o = r ? "".concat(r.getBoundingClientRect().top + r.offsetHeight + window.scrollY, "px") : "0px";
                            if (a.props.isRtl) {
                                t = "auto";
                                var i = document && document.documentElement ? document.documentElement.clientWidth : 0;
                                n = r ? "".concat(i - r.getBoundingClientRect().right - window.scrollX, "px") : "0px"
                            } else t = r ? "".concat(r.getBoundingClientRect().left + window.scrollX, "px") : "0px", n = "auto";
                            return {
                                position: "absolute",
                                top: o,
                                left: t,
                                right: n
                            }
                        }), Object(u.a)(Object(c.a)(Object(c.a)(a)), "name", void 0), a.name = x(), a
                    }
                    return Object(s.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this;
                            return d.createElement(C, {
                                name: this.name,
                                tabType: this.props.tabType,
                                link: this.props.link,
                                nonLinkContents: this.props.nonLinkContents,
                                triggerActive: this.props.triggerActive
                            }, function(e, a) {
                                return d.createElement(d.Fragment, null, d.createElement("div", {
                                    className: "brand-global-nav-menus-Menu__dropdownContents--1_QtR"
                                }, t.props.children), d.createElement(g.Local, {
                                    name: t.name
                                }, d.createElement(j, {
                                    hoverChainParent: a,
                                    mouseOutTimeout: 0
                                }, function(a) {
                                    return d.createElement(v.Overlay, {
                                        position: t.getOverlayPosition(e)
                                    }, d.createElement("div", {
                                        ref: a,
                                        className: "brand-global-nav-menus-Menu__overlayWrap--31AWC"
                                    }, d.createElement(v.ShadowBox, null, d.createElement("div", {
                                        className: "brand-global-nav-menus-Menu__menuContentsWrap--3H-1Q"
                                    }, t.props.children))))
                                })))
                            })
                        }
                    }]), t
                }(d.Component);
            Object(u.a)(L, "defaultProps", {
                triggerActive: !1
            });
            var S = Object(p.connect)(function(e) {
                    return {
                        isRtl: e.i18n.isRtl
                    }
                })(L),
                T = function e(t) {
                    return d.createElement("ul", {
                        className: "".concat("brand-global-nav-menus-MenuList__menuList--3fbpS", " ").concat(t.fixedWidth ? "brand-global-nav-menus-MenuList__fixedWidth--1BuQq" : "")
                    }, t.children)
                };
            T.defaultProps = {
                fixedWidth: !1,
                children: void 0
            };
            var P = T,
                I = function e(t) {
                    return d.createElement("ul", {
                        className: "brand-global-nav-menus-CollapsedMenu__collapsedMenuListWrap--3nP89"
                    }, d.createElement("li", null, d.createElement(S, {
                        triggerActive: !1,
                        tabType: "nonlink",
                        nonLinkContents: d.createElement(b.Icon, {
                            name: "more-horizontal",
                            className: "brand-global-nav-menus-CollapsedMenu__moreIcon--2JTiD"
                        })
                    }, d.createElement(P, null, t.items && t.items.map(function(e) {
                        return e.contents
                    })))))
                };
            I.defaultProps = {
                items: []
            };
            var M = I,
                R = a("./packages/events/window-resize/WindowResize.jsx"),
                B = function(e) {
                    function t(e) {
                        var a;
                        return Object(r.a)(this, t), a = Object(i.a)(this, Object(l.a)(t).call(this, e)), Object(u.a)(Object(c.a)(Object(c.a)(a)), "checkIfOverflowed", function() {
                            if (a.listItemRef.current) {
                                var e = a.listItemRef.current.offsetTop;
                                void 0 !== e && (e > 0 && !a.state.isCollapsed ? a.setState({
                                    isCollapsed: !0
                                }, a.props.collapsedCallback) : 0 === e && a.state.isCollapsed && a.setState({
                                    isCollapsed: !1
                                }, a.props.uncollapsedCallback))
                            }
                        }), Object(u.a)(Object(c.a)(Object(c.a)(a)), "listItemRef", void 0), a.listItemRef = d.createRef(), a.state = {
                            isCollapsed: !1
                        }, a
                    }
                    return Object(s.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.checkIfOverflowed()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            this.props.uncollapsedCallback()
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return d.createElement(d.Fragment, null, d.createElement("li", {
                                ref: this.listItemRef
                            }, this.props.children), d.createElement(R.a, {
                                callback: this.checkIfOverflowed
                            }))
                        }
                    }]), t
                }(d.Component),
                D = function e(t) {
                    return d.createElement("li", null, d.createElement(y.a, {
                        link: t.link,
                        extraClasses: "brand-global-nav-menus-MenuListItem__menuListItem--2ZG-3"
                    }))
                },
                H = function(e) {
                    function t() {
                        var e, a;
                        Object(r.a)(this, t);
                        for (var o = arguments.length, s = new Array(o), m = 0; m < o; m++) s[m] = arguments[m];
                        return a = Object(i.a)(this, (e = Object(l.a)(t)).call.apply(e, [this].concat(s))), Object(u.a)(Object(c.a)(Object(c.a)(a)), "state", {
                            collapsedItems: []
                        }), Object(u.a)(Object(c.a)(Object(c.a)(a)), "getForcedCollapsedLinks", function() {
                            return a.props.links.filter(function(e) {
                                return e.forceCollapse
                            }).map(function(e) {
                                return {
                                    order: 0,
                                    name: e.id,
                                    contents: d.createElement(D, {
                                        link: e,
                                        key: e.id
                                    })
                                }
                            })
                        }), Object(u.a)(Object(c.a)(Object(c.a)(a)), "collapsedHandler", function(e, t, r) {
                            a.state.collapsedItems.filter(function(e) {
                                return e.name === t
                            }).length > 0 || a.setState(function(a) {
                                return {
                                    collapsedItems: [{
                                        order: e,
                                        name: t,
                                        contents: r
                                    }].concat(Object(n.a)(a.collapsedItems)).sort(function(e, t) {
                                        return e.order - t.order
                                    })
                                }
                            })
                        }), Object(u.a)(Object(c.a)(Object(c.a)(a)), "uncollapsedHandler", function(e) {
                            a.setState(function(t) {
                                return {
                                    collapsedItems: t.collapsedItems.filter(function(t) {
                                        return t.name !== e
                                    })
                                }
                            })
                        }), Object(u.a)(Object(c.a)(Object(c.a)(a)), "createCollapsibleListItem", function(e, t, n, r) {
                            return d.createElement(B, {
                                collapsedCallback: function r() {
                                    return a.collapsedHandler(e, t, n)
                                },
                                uncollapsedCallback: function e() {
                                    return a.uncollapsedHandler(t)
                                },
                                key: t
                            }, r)
                        }), a
                    }
                    return Object(s.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this,
                                a = this.props.links,
                                n = this.getForcedCollapsedLinks(),
                                r = -1,
                                o = a.filter(function(e) {
                                    return !e.forceCollapse
                                }).map(function(e) {
                                    var a = d.createElement(D, {
                                        link: e,
                                        key: e.id
                                    });
                                    return r += 1, t.createCollapsibleListItem(r, e.id, a, d.createElement(N, {
                                        link: e,
                                        active: !(!t.props.activeLinkId || e.id !== t.props.activeLinkId)
                                    }))
                                }),
                                i = n.map(function(e) {
                                    return e.name
                                }),
                                l = this.state.collapsedItems.filter(function(e) {
                                    return -1 === i.indexOf(e.name)
                                }).concat(n);
                            return d.createElement("div", {
                                className: this.props.sourceOnly ? "brand-global-nav-menus-NavLinks__hidden--2P6Fz" : null
                            }, d.createElement(m.b, {
                                className: "brand-global-nav-menus-NavLinks__navMenuContainer--1Kp_c"
                            }, d.createElement("ul", {
                                className: "brand-global-nav-menus-NavLinks__navMenuList--1Lb3s"
                            }, o), d.createElement(M, {
                                items: l
                            })))
                        }
                    }]), t
                }(d.Component);
            Object(u.a)(H, "defaultProps", {
                sourceOnly: !1
            }), t.a = H
        },
        "./packages/brand/global-nav/menus/TopLevelNavLink.jsx": function(e, t, a) {
            "use strict";
            (function(e) {
                var n = a("./node_modules/react/index.js"),
                    r = a("./packages/common/tracking/tracking.jsx"),
                    o = a("./packages/common/i18n/i18n.jsx"),
                    i = a("@ta/styleguide.icon"),
                    l = function t(a) {
                        var l = "HelpDesk" === a.link.id,
                            s = function t(n) {
                                a.preventDefault && n.preventDefault(), "HelpDesk" === a.link.id && (n.preventDefault(), e.require(["trjs!brand/HelpCenterOverlay", "trcss!src/build/required/help_center_overlay"], function(e) {
                                    e.open(n.target, "/uvpages/helpCenterOverlay.html")
                                })), "tourism" === a.link.id && (n.preventDefault(), window.open(a.link.url, a.link.isNewWindow ? "_blank" : "_self"))
                            },
                            c = n.createElement(n.Fragment, null, a.showQuickLinkIcon && a.link.icon && n.createElement(i.Icon, {
                                name: a.link.icon,
                                className: a.quickLinkIconClasses
                            }), Object(o.unescaped)(a.link.text), a.extraLabel),
                            u = "tourism" === a.link.id ? n.createElement("span", {
                                ref: a.setTarget,
                                className: a.extraClasses,
                                onClick: s
                            }, c) : n.createElement("a", {
                                ref: a.setTarget,
                                className: a.extraClasses,
                                href: a.link.url,
                                target: a.link.isNewWindow ? "_blank" : null,
                                onClick: s
                            }, c);
                        return n.createElement(r.ClickTracker, {
                            module: a.trackingModule,
                            action: "click",
                            forceAjax: l || a.preventDefault,
                            context: a.link.trackingLabel
                        }, u)
                    };
                l.defaultProps = {
                    extraClasses: void 0,
                    setTarget: function e() {},
                    showQuickLinkIcon: !1,
                    trackingModule: "TopNav",
                    quickLinkIconClasses: void 0,
                    preventDefault: !1,
                    extraLabel: void 0
                }, t.a = l
            }).call(this, a("./node_modules/webpack/buildin/global.js"))
        },
        "./packages/brand/global-nav/sidebar/SideBarNavLinks.jsx": function(e, t, a) {
            "use strict";
            var n = a("./node_modules/react/index.js"),
                r = a("./node_modules/react-redux/es/index.js"),
                o = a("./packages/brand/global-nav/GlobalNavApiBinding.jsx"),
                i = a("./packages/common/classnames/classnames.jsx"),
                l = a.n(i),
                s = a("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                c = a("./packages/common/i18n/i18n.jsx"),
                u = a.n(c),
                d = a("./packages/brand/global-nav/menus/TopLevelNavLink.jsx"),
                m = function e(t) {
                    var a, r, o = t.link,
                        i = t.noBorder,
                        u = t.showIcon,
                        m = t.hasWhiteText,
                        b = t.servletName,
                        p = l()("brand-global-nav-sidebar-SideBarNavItem__navItem--nkpJZ", (a = {}, Object(s.a)(a, "brand-global-nav-sidebar-SideBarNavItem__noBorder--2rdUk", i), Object(s.a)(a, "brand-global-nav-sidebar-SideBarNavItem__hasWhiteText--1KHbI", m), a)),
                        g = l()("brand-global-nav-sidebar-SideBarNavItem__link--28NNF", (r = {}, Object(s.a)(r, "brand-global-nav-sidebar-SideBarNavItem__collapsedLink--3Xfet", o.forceCollapse), Object(s.a)(r, "brand-global-nav-sidebar-SideBarNavItem__hasWhiteText--1KHbI", m), r)),
                        v = "TopNav_".concat(b),
                        f = o.promoteAsNew && n.createElement("span", {
                            className: "brand-global-nav-sidebar-SideBarNavItem__newLabel--v2yNh"
                        }, Object(c.localize)("common_NEW_1bd8"));
                    return n.createElement("li", {
                        className: p
                    }, n.createElement(d.a, {
                        link: o,
                        extraClasses: g,
                        quickLinkIconClasses: "brand-global-nav-sidebar-SideBarNavItem__navIcon--2WGlr",
                        showQuickLinkIcon: u,
                        trackingModule: v,
                        extraLabel: f
                    }))
                };
            m.defaultProps = {
                noBorder: !1,
                showIcon: !1,
                hasWhiteText: !1
            };
            var b = Object(r.connect)(function(e) {
                    return {
                        servletName: e.meta.initialServletName
                    }
                })(m),
                p = function e(t) {
                    var a = t.links,
                        r = l()("ui_container", "brand-global-nav-sidebar-VisibleLinks__visibleLinksContainer--1Sjcn");
                    return n.createElement("ul", {
                        className: r
                    }, a.map(function(e, t) {
                        return n.createElement(b, {
                            key: e.id,
                            link: e,
                            noBorder: 0 === t,
                            showIcon: !0
                        })
                    }))
                },
                g = a("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                v = a("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                f = a("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                h = a("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                _ = a("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                j = a("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                k = a("@ta/styleguide.icon"),
                O = function(e) {
                    function t() {
                        var e, a;
                        Object(g.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return a = Object(f.a)(this, (e = Object(h.a)(t)).call.apply(e, [this].concat(r))), Object(s.a)(Object(j.a)(Object(j.a)(a)), "state", {
                            isCollapsed: !0
                        }), Object(s.a)(Object(j.a)(Object(j.a)(a)), "toggleCollapsed", function() {
                            a.setState({
                                isCollapsed: !a.state.isCollapsed
                            })
                        }), a
                    }
                    return Object(_.a)(t, e), Object(v.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = l()("brand-global-nav-sidebar-SideBarCollapsedMenu__collapsedLinksContainer--tAI1I", Object(s.a)({}, "brand-global-nav-sidebar-SideBarCollapsedMenu__expanded--2lBg2", !this.state.isCollapsed));
                            return n.createElement("div", {
                                className: t
                            }, n.createElement("div", {
                                onClick: this.toggleCollapsed,
                                className: "brand-global-nav-sidebar-SideBarCollapsedMenu__toggleMoreLinks--3dRm6"
                            }, u()("common_more_capital_ffffe27f"), n.createElement(k.Icon, {
                                name: "single-chevron-down",
                                className: "brand-global-nav-sidebar-SideBarCollapsedMenu__singleChevronDown--2mW_S"
                            })), n.createElement("ul", {
                                className: "brand-global-nav-sidebar-SideBarCollapsedMenu__collapsedLinks--2YxmI"
                            }, this.props.collapsedLinks.map(function(e) {
                                return n.createElement(b, {
                                    key: e.id,
                                    link: e
                                })
                            })))
                        }
                    }]), t
                }(n.Component),
                y = function e() {
                    var t = {
                            id: "settings",
                            text: Object(c.localize)("mem_settings"),
                            url: "/MobileNativeSettings",
                            forceCollapse: !1,
                            trackingLabel: "UserProfile_settings",
                            isNewWindow: !1,
                            urlWithGeoTemplate: null,
                            urlWithLatLngTemplate: null,
                            icon: null,
                            isNoFollow: !0,
                            hideFromSidebar: !1,
                            sidebarPostCollapsed: !0,
                            promoteAsNew: !1,
                            subList: {}
                        },
                        a = {
                            id: "signout",
                            text: Object(c.localize)("common_Signout"),
                            url: "/RegistrationController?flow=sign_out&pid=1&returnTo=%2F&fullscreen=true",
                            forceCollapse: !1,
                            trackingLabel: "UserProfile_signout",
                            isNewWindow: !1,
                            urlWithGeoTemplate: null,
                            urlWithLatLngTemplate: null,
                            icon: null,
                            isNoFollow: !0,
                            hideFromSidebar: !1,
                            sidebarPostCollapsed: !0,
                            promoteAsNew: !1,
                            subList: {}
                        },
                        r = l()("ui_container", "brand-global-nav-sidebar-SideBarSettingsLinks__container--Mrsc7");
                    return n.createElement("ul", {
                        className: r
                    }, n.createElement(b, {
                        key: t.id,
                        link: t,
                        noBorder: !0,
                        hasWhiteText: !0
                    }), n.createElement(b, {
                        key: a.id,
                        link: a,
                        hasWhiteText: !0
                    }))
                },
                E = Object(r.connect)(function(e) {
                    return {
                        displaySettingsLinks: !!e.auth.isMember
                    }
                })(function e(t) {
                    var a = t.links,
                        r = t.displaySettingsLinks;
                    if (null == a) return null;
                    var o = function e(t) {
                            return t.filter(function(e) {
                                return !e.hideFromSidebar
                            })
                        }(a),
                        i = function e(t) {
                            return t.filter(function(e) {
                                return !e.forceCollapse && !e.sidebarPostCollapsed
                            })
                        }(o),
                        l = function e(t) {
                            return t.filter(function(e) {
                                return e.forceCollapse
                            })
                        }(o),
                        s = function e(t) {
                            return t.filter(function(e) {
                                return !e.forceCollapse && e.sidebarPostCollapsed
                            })
                        }(o);
                    return n.createElement(n.Fragment, null, n.createElement(p, {
                        links: i
                    }), n.createElement(O, {
                        collapsedLinks: l
                    }), n.createElement("ul", null, s.map(function(e) {
                        return n.createElement(b, {
                            key: e.id,
                            link: e
                        })
                    })), r ? n.createElement(y, null) : null)
                }),
                w = Object(o.a)(E);
            t.a = w
        },
        "./packages/brand/quick-links/QuickLinksLite.jsx": function(e, t, a) {
            "use strict";
            var n = a("./node_modules/react/index.js"),
                r = a("./packages/common/classnames/classnames.jsx"),
                o = a.n(r),
                i = a("./packages/brand/global-nav/global-nav.jsx"),
                l = a("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                s = a("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                c = a("./packages/common/i18n/i18n.jsx"),
                u = a("@ta/styleguide.icon"),
                d = a("./packages/common/tracking/tracking.jsx"),
                m = a("./packages/brand/global-nav/menus/TopLevelNavLink.jsx"),
                b = a("@ta/brand.trip-search-geopill-flyout"),
                p = a("./packages/brand/quick-links/QuickLinksMoreMenu.jsx"),
                g = a("./packages/brand/quick-links/commonStyles.less"),
                v = function e(t) {
                    var a, r, i = o()("ui_column", "brand-quick-links-QuickLinksLiteItem__item--Uebgr", Object(s.a)({}, "brand-quick-links-QuickLinksLiteItem__extendedQuickLinks--G5ykY", t.extendedQuickLinks)),
                        v = t.link,
                        f = "ICON" === t.displayMode;
                    if (v && v.icon && g.a["order-".concat(v.icon)] ? i = o()(i, g.a["order-".concat(v.icon)], (a = {}, Object(s.a)(a, "brand-quick-links-QuickLinksLiteItem__active--2mPqW", t.isActive), Object(s.a)(a, "brand-quick-links-QuickLinksLiteItem__iconOnly--25tiH", f), a)) : t.isMoreTrigger && (i = o()(i, g.a["order-more"], Object(s.a)({}, "brand-quick-links-QuickLinksLiteItem__iconOnly--25tiH", f))), t.isMoreTrigger && t.collapsedData) r = n.createElement(p.a, {
                        collapsedData: t.collapsedData,
                        fixedPopover: t.morePopoverFixed
                    }, n.createElement("div", {
                        className: "brand-quick-links-QuickLinksLiteItem__link--1K8SS"
                    }, n.createElement(d.ClickTracker, {
                        module: "QuickLinksMore",
                        action: "click",
                        context: "open"
                    }, f ? n.createElement(u.Icon, {
                        name: "more-horizontal"
                    }) : Object(c.localize)("common_more_capital_ffffe27f"))));
                    else if (v) {
                        var h = !(!v.urlWithGeoTemplate && !v.urlWithLatLngTemplate || t.isGeoScoped),
                            _ = v.promoteAsNew && n.createElement("span", {
                                className: "brand-quick-links-QuickLinksLiteItem__newLabel--2O83L"
                            }, Object(c.localize)("common_NEW_1bd8")),
                            j = function e(t) {
                                return n.createElement(m.a, {
                                    setTarget: t,
                                    preventDefault: h,
                                    link: f ? Object(l.a)({}, v, {
                                        text: ""
                                    }) : v,
                                    showQuickLinkIcon: f,
                                    extraClasses: o()("brand-quick-links-QuickLinksLiteItem__link--1K8SS", Object(s.a)({}, "brand-quick-links-QuickLinksLiteItem__withNewLabel--2a6zm", v.promoteAsNew)),
                                    trackingModule: "QuickLinks",
                                    extraLabel: _
                                })
                            };
                        r = h ? n.createElement(b.GeoPillFlyout, {
                            latLngUrlTemplate: v.urlWithLatLngTemplate,
                            geoUrlTemplate: v.urlWithGeoTemplate
                        }, function(e) {
                            return j(e)
                        }) : j()
                    } else r = null;
                    return n.createElement("span", {
                        className: i
                    }, r)
                };
            v.defaultProps = {
                isActive: !1,
                link: void 0,
                isMoreTrigger: !1,
                morePopoverFixed: !1,
                collapsedData: void 0,
                isGeoScoped: !1,
                extendedQuickLinks: !1
            };
            var f = v,
                h = function e(t) {
                    var a = t.links,
                        r = t.activeLinkId,
                        i = t.isGeoScoped,
                        l = t.extendedQuickLinks,
                        s = t.displayMode;
                    if (!a) return null;
                    var c = a.filter(function(e) {
                            return !e.forceCollapse
                        }),
                        u = {
                            links: a.filter(function(e) {
                                return e.forceCollapse
                            }),
                            activeLinkId: r
                        },
                        d = o()("ui_columns", "is-mobile", "is-multiline", "is-gapless", "brand-quick-links-QuickLinksLite__quickLinks--2A99K");
                    return n.createElement("div", {
                        className: d,
                        "data-test-quick-links-lite": !0
                    }, c.map(function(e) {
                        return n.createElement(f, {
                            link: e,
                            isActive: !!r && r === e.id,
                            key: e.id,
                            isGeoScoped: i,
                            displayMode: "ICONS" === s ? "ICON" : "TEXT",
                            extendedQuickLinks: l
                        })
                    }), n.createElement(f, {
                        isMoreTrigger: !0,
                        morePopoverFixed: !0,
                        collapsedData: u,
                        displayMode: "ICONS" === s ? "ICON" : "TEXT",
                        extendedQuickLinks: l
                    }))
                };
            h.defaultProps = {
                displayMode: "ICONS"
            }, t.a = Object(i.a)(h)
        },
        "./packages/brand/quick-links/QuickLinksMoreMenu.jsx": function(e, t, a) {
            "use strict";
            var n = a("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = a("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                o = a("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                i = a("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                l = a("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                s = a("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                c = a("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = a("./node_modules/react/index.js"),
                d = a("./node_modules/react-redux/es/index.js"),
                m = a("@ta/overlays.popover"),
                b = a.n(m),
                p = a("./packages/events/window-resize/WindowResize.jsx"),
                g = a("./packages/brand/global-nav/menus/TopLevelNavLink.jsx"),
                v = {
                    list: "brand-quick-links-QuickLinksMoreMenu__list--1xl7g",
                    item: "brand-quick-links-QuickLinksMoreMenu__item--2z1oA",
                    link: "brand-quick-links-QuickLinksMoreMenu__link--1m-j-",
                    hidden: "brand-quick-links-QuickLinksMoreMenu__hidden--1ua6B"
                },
                f = 8,
                h = function(e) {
                    function t(e) {
                        var a;
                        return Object(n.a)(this, t), a = Object(o.a)(this, Object(i.a)(t).call(this, e)), Object(c.a)(Object(s.a)(Object(s.a)(a)), "updateArrowPos", function() {
                            var e = a.wrapEl.current;
                            e && a.setState({
                                arrowShift: -1 * e.offsetWidth / 2 + 10 + f
                            })
                        }), Object(c.a)(Object(s.a)(Object(s.a)(a)), "menuContents", function() {
                            return a.props.collapsedData && u.createElement("ul", {
                                className: v.list
                            }, a.props.collapsedData.links.map(function(e) {
                                return u.createElement("li", {
                                    key: e.id,
                                    className: v.item
                                }, u.createElement(g.a, {
                                    link: e,
                                    extraClasses: v.link,
                                    trackingModule: "QuickLinks"
                                }))
                            }))
                        }), Object(c.a)(Object(s.a)(Object(s.a)(a)), "wrapEl", void 0), a.state = {
                            arrowShift: 0
                        }, a.wrapEl = u.createRef(), a
                    }
                    return Object(l.a)(t, e), Object(r.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.updateArrowPos()
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this,
                                a = this.props.alignToRightEdge && ("MOBILE" === this.props.viewport || "TABLET" === this.props.viewport);
                            return u.createElement(u.Fragment, null, u.createElement(b.a, {
                                below: !0,
                                closeButton: !1,
                                backdrop: "MOBILE" === this.props.viewport,
                                shiftX: a ? -1 * f : 0,
                                shiftY: -11,
                                shiftArrow: this.state.arrowShift,
                                fullBleed: !0,
                                fixed: this.props.fixedPopover,
                                alignEdge: a ? "right" : void 0,
                                contents: this.menuContents
                            }, function(e, a) {
                                return u.createElement("div", {
                                    ref: t.wrapEl
                                }, u.createElement("div", {
                                    ref: e,
                                    onClick: a
                                }, t.props.children))
                            }), u.createElement(p.a, {
                                callback: this.updateArrowPos
                            }), u.createElement("div", {
                                className: v.hidden
                            }, this.menuContents()))
                        }
                    }]), t
                }(u.Component);
            Object(c.a)(h, "defaultProps", {
                collapsedData: void 0,
                alignToRightEdge: !1,
                fixedPopover: !1
            }), t.a = Object(d.connect)(function(e) {
                return {
                    viewport: e.meta.device.viewportCategory
                }
            })(h)
        },
        "./packages/brand/quick-links/commonStyles.less": function(e, t, a) {
            "use strict";
            t.a = {
                "order-hotels": "brand-quick-links-commonStyles__order-hotels--2paOG",
                "order-vacation-rentals": "brand-quick-links-commonStyles__order-vacation-rentals--2DfHW",
                "order-travelers-choice-badge": "brand-quick-links-commonStyles__order-travelers-choice-badge--XjaA4",
                "order-restaurants": "brand-quick-links-commonStyles__order-restaurants--3elHI",
                "order-attractions": "brand-quick-links-commonStyles__order-attractions--2jENs",
                "order-flights": "brand-quick-links-commonStyles__order-flights--3Ww9c",
                "order-airlines": "brand-quick-links-commonStyles__order-airlines--2Hbnf",
                "order-forums": "brand-quick-links-commonStyles__order-forums--23pjK",
                "order-shopping-bag-fill": "brand-quick-links-commonStyles__order-shopping-bag-fill--1Jt0S",
                "order-cruises": "brand-quick-links-commonStyles__order-cruises--Yb67K",
                "order-parking": "brand-quick-links-commonStyles__order-parking--2uQ3D",
                "order-on-the-beach": "brand-quick-links-commonStyles__order-on-the-beach--2obSS",
                "order-more": "brand-quick-links-commonStyles__order-more--1oBYS"
            }
        },
        "./packages/common/api/api.jsx": function(e, t, a) {
            e.exports = a("dll-reference @ta/common.global")("./packages/common/api/api.jsx")
        },
        "./packages/common/classnames/classnames.jsx": function(e, t, a) {
            e.exports = a("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/common/data-cacher/DataCacher.jsx": function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return m
            });
            var n = a("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                r = a("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                o = a("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                i = a("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                l = a("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                s = a("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                c = a("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                u = a("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                d = a("./node_modules/react/index.js"),
                m = function e(t) {
                    return function(e, a) {
                        return t.reduce(function(t, n) {
                            return t || e[n] !== a[n]
                        }, !1)
                    }
                };
            t.b = function e(t) {
                return function(e) {
                    var a = function(a) {
                        function m() {
                            var e, t;
                            Object(r.a)(this, m);
                            for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++) n[o] = arguments[o];
                            return t = Object(i.a)(this, (e = Object(l.a)(m)).call.apply(e, [this].concat(n))), Object(u.a)(Object(c.a)(Object(c.a)(t)), "oldProps", void 0), t
                        }
                        return Object(s.a)(m, a), Object(o.a)(m, [{
                            key: "render",
                            value: function a() {
                                var r = !this.oldProps || !this.props.loading || t && t(this.oldProps, this.props);
                                r && (this.oldProps = Object(n.a)({}, this.props, {
                                    loading: !0,
                                    cachedData: !0,
                                    newProps: this.props
                                }));
                                var o = Object(n.a)({}, this.props, {
                                    cachedData: !1
                                });
                                return d.createElement(e, r ? o : this.oldProps)
                            }
                        }]), m
                    }(d.Component);
                    return a.displayName = "DataCacher(".concat(e.displayName || e.name || "Unknown", ")"), a
                }
            }
        },
        "./packages/common/features/features.jsx": function(e, t, a) {
            e.exports = a("dll-reference @ta/common.global")("./packages/common/features/features.jsx")
        },
        "./packages/common/geolocation/geolocation.jsx": function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            }), a.d(t, "d", function() {
                return r
            }), a.d(t, "b", function() {
                return o
            });
            var n = function e() {
                    return "undefined" != typeof navigator && void 0 !== navigator.geolocation
                },
                r = function e(t, a) {
                    return t && "function" == typeof t ? n() ? navigator.geolocation.watchPosition(function(e) {
                        t(e.coords.latitude, e.coords.longitude)
                    }, function(e) {
                        "function" == typeof a && a(e)
                    }, {
                        maximumAge: 0,
                        timeout: 1 / 0,
                        enableHighAccuracy: !1
                    }) : (a && "function" == typeof a && a(new Error("Location services not available")), null) : null
                },
                o = function e(t) {
                    n() && navigator.geolocation.clearWatch(t)
                };
            t.c = function e(t, a) {
                t && "function" == typeof t && (n() ? navigator.geolocation.getCurrentPosition(function(e) {
                    t(e.coords.latitude, e.coords.longitude)
                }, function(e) {
                    "function" == typeof a && a(e)
                }) : a && "function" == typeof a && a(new Error("Location services not available")))
            }
        },
        "./packages/common/i18n/i18n.jsx": function(e, t, a) {
            e.exports = a("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/common/imports/imports.jsx": function(e, t, a) {
            e.exports = a("dll-reference @ta/common.global")("./packages/common/imports/imports.jsx")
        },
        "./packages/common/logging/logging.jsx": function(e, t, a) {
            e.exports = a("dll-reference @ta/common.global")("./packages/common/logging/logging.jsx")
        },
        "./packages/common/routing/routing.jsx": function(e, t, a) {
            e.exports = a("dll-reference @ta/common.global")("./packages/common/routing/routing.jsx")
        },
        "./packages/common/state/state.jsx": function(e, t, a) {
            e.exports = a("dll-reference @ta/common.global")("./packages/common/state/state.jsx")
        },
        "./packages/common/throttle/throttle.jsx": function(e, t, a) {
            e.exports = a("dll-reference @ta/common.global")("./packages/common/throttle/throttle.jsx")
        },
        "./packages/common/tracking/tracking.jsx": function(e, t, a) {
            e.exports = a("dll-reference @ta/common.global")("./packages/common/tracking/tracking.jsx")
        },
        "./packages/events/window-resize/WindowResize.jsx": function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return b
            });
            var n = a("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = a("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                o = a("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                i = a("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                l = a("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                s = a("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                c = a("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = a("./node_modules/react/index.js"),
                d = a("./packages/common/throttle/throttle.jsx"),
                m = a.n(d),
                b = function(e) {
                    function t() {
                        var e, a;
                        Object(n.a)(this, t);
                        for (var r = arguments.length, l = new Array(r), u = 0; u < r; u++) l[u] = arguments[u];
                        return a = Object(o.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(l))), Object(c.a)(Object(s.a)(Object(s.a)(a)), "handleResize", m()(function() {
                            a.props.callback()
                        }, a.props.throttle || 0, a.props.useDebounce)), a
                    }
                    return Object(l.a)(t, e), Object(r.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            window.addEventListener("resize", this.handleResize)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            window.removeEventListener("resize", this.handleResize)
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return null
                        }
                    }]), t
                }(u.Component);
            Object(c.a)(b, "defaultProps", {
                throttle: 200,
                useDebounce: !1
            })
        },
        "./packages/events/window-scroll/WindowScroll.jsx": function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return b
            });
            var n = a("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = a("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                o = a("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                i = a("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                l = a("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                s = a("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                c = a("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = a("./node_modules/react/index.js"),
                d = a("./packages/common/throttle/throttle.jsx"),
                m = a.n(d),
                b = function(e) {
                    function t() {
                        var e, a;
                        Object(n.a)(this, t);
                        for (var r = arguments.length, l = new Array(r), u = 0; u < r; u++) l[u] = arguments[u];
                        return a = Object(o.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(l))), Object(c.a)(Object(s.a)(Object(s.a)(a)), "handleScroll", a.props.throttle ? m()(function() {
                            a.props.callback()
                        }, a.props.throttle, a.props.useDebounce) : a.props.callback), a
                    }
                    return Object(l.a)(t, e), Object(r.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            window.addEventListener("scroll", this.handleScroll, this.props.useCapture), window.addEventListener("resize", this.handleScroll, this.props.useCapture)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            this.disableListeners()
                        }
                    }, {
                        key: "disableListeners",
                        value: function e() {
                            window.removeEventListener("scroll", this.handleScroll, this.props.useCapture), window.removeEventListener("resize", this.handleScroll, this.props.useCapture)
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return null
                        }
                    }]), t
                }(u.Component);
            Object(c.a)(b, "defaultProps", {
                throttle: 200,
                useDebounce: !1,
                useCapture: !1
            })
        },
        "./packages/failover/readonly/HideOnReadonly.jsx": function(e, t, a) {
            "use strict";
            a("./node_modules/react/index.js");
            var n = a("./node_modules/react-redux/es/index.js");
            t.a = Object(n.connect)(function(e) {
                return {
                    isReadonlyMode: e.meta.readonlyMode
                }
            })(function e(t) {
                var a = t.isReadonlyMode,
                    n = t.replaceWith,
                    r = t.children;
                return a ? void 0 !== n ? n : null : r
            })
        },
        "./packages/styleguide/nav-tabs/NavTabs.jsx": function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return l
            });
            var n = a("./node_modules/react/index.js"),
                r = a("./packages/common/classnames/classnames.jsx"),
                o = a.n(r),
                i = function e(t) {
                    var a = o()("ui_tabs", t.className, {
                        inverted: t.inverted,
                        centered: t.centered,
                        small: "small" === t.size,
                        medium: "medium" === t.size,
                        large: "large" === t.size
                    });
                    return n.createElement("div", {
                        className: a
                    }, t.children)
                };
            i.defaultProps = {
                inverted: !1,
                centered: !1,
                size: "medium",
                className: void 0
            };
            var l = function e(t) {
                var a = o()("ui_tab", {
                    active: t.active
                });
                return n.createElement(t.tagName, {
                    className: a,
                    "data-tab-name": t.tabNameAttr
                }, t.children)
            };
            l.defaultProps = {
                active: !1,
                tagName: "span",
                tabNameAttr: null
            }, t.b = i
        },
        "./packages/trips/states/LoggedOut.jsx": function(e, t, a) {
            "use strict";
            var n = a("./node_modules/react/index.js"),
                r = a("./packages/common/i18n/i18n.jsx"),
                o = a("@ta/common.cdn"),
                i = a("./packages/common/classnames/classnames.jsx"),
                l = a.n(i),
                s = a("@ta/styleguide.button"),
                c = a.n(s),
                u = a("@ta/social.login-gate");
            a.d(t, "a", function() {
                return b
            }), a.d(t, "b", function() {
                return d
            }), a.d(t, "c", function() {
                return m
            });
            var d = function e(t) {
                    var a = t.onLoginClicked,
                        i = t.onLoginFlowComplete,
                        s = t.joinGate,
                        u = t.loginGate;
                    return n.createElement("div", {
                        className: "trips-states-LoggedOut__logged_out_container--F5Lt3"
                    }, n.createElement("div", {
                        className: "trips-states-LoggedOut__section_one--1KfiC"
                    }, n.createElement(o.CdnImage, {
                        className: "trips-states-LoggedOut__ta_logo--1W_4f",
                        src: "/img2/branding/rebrand/TA_logo_primary.svg"
                    }), n.createElement("div", {
                        className: l()("trips-states-LoggedOut__say_hello--3GwZQ", "trips-states-LoggedOut__header--3O85O")
                    }, Object(r.localize)("logged_out_home_hello_trips")), n.createElement("div", {
                        className: "trips-states-LoggedOut__text--2jEJn"
                    }, Object(r.localize)("logged_out_home_trips_give")), n.createElement(c.a, {
                        type: "primary",
                        size: "fullwidth",
                        onClick: function e() {
                            a && a(), s().then(i)
                        }
                    }, Object(r.localize)("empty_trip_home_get_started")), n.createElement("a", {
                        className: l()("trips-states-LoggedOut__log_in--2BMVJ", "ui_link"),
                        onClick: function e() {
                            a && a(), u().then(i)
                        }
                    }, Object(r.localize)("trips_log_in_now"))), n.createElement("div", {
                        className: "trips-states-LoggedOut__section_two--3OHWQ"
                    }))
                },
                m = function e(t) {
                    var a = t.onLoginSuccess,
                        r = t.children;
                    return n.createElement(u.SocialLoginGate, {
                        flowOrigin: "login",
                        pid: 40439,
                        onLoginSuccess: a
                    }, function(e) {
                        return n.createElement(u.SocialLoginGate, {
                            flowOrigin: "join",
                            pid: 40439,
                            onLoginSuccess: a
                        }, function(t) {
                            return r(t, e)
                        })
                    })
                },
                b = function e(t) {
                    var a = t.onLoginFlowComplete;
                    return n.createElement(m, null, function(e, t) {
                        return n.createElement(d, {
                            onLoginFlowComplete: a,
                            joinGate: e,
                            loginGate: t
                        })
                    })
                },
                p = {
                    onLoginClicked: void 0,
                    onLoginFlowComplete: void 0
                };
            b.defaultProps = p, d.defaultProps = p, m.defaultProps = {
                onLoginSuccess: void 0
            }
        },
        "./packages/trips/states/TripsLink.jsx": function(e, t, a) {
            "use strict";
            var n = a("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                r = a("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                o = a("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                i = a("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                l = a("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                s = a("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                c = a("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                u = a("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                d = a("./node_modules/react/index.js"),
                m = a("./node_modules/react-redux/es/index.js"),
                b = a("@ta/overlays.fullscreen-overlay"),
                p = a.n(b),
                g = a("@ta/overlays.modal"),
                v = a("@ta/overlays.managers"),
                f = a("./packages/trips/tracking/interactions.jsx"),
                h = a("./packages/common/routing/routing.jsx"),
                _ = a("./packages/trips/states/LoggedOut.jsx"),
                j = function(e) {
                    function t() {
                        var e, a;
                        Object(r.a)(this, t);
                        for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
                        return a = Object(i.a)(this, (e = Object(l.a)(t)).call.apply(e, [this].concat(o))), Object(u.a)(Object(c.a)(Object(c.a)(a)), "state", {
                            show: !1
                        }), a
                    }
                    return Object(s.a)(t, e), Object(o.a)(t, [{
                        key: "renderInner",
                        value: function e(t, a) {
                            var n = this,
                                r = this.props,
                                o = r.isLoggedIn,
                                i = r.isMobile,
                                l = r.loggedInElement,
                                s = r.loggedOutElement;
                            return d.createElement(f.a, {
                                source: "trips"
                            }, function(e) {
                                var r = function t() {
                                    return e({
                                        elementClick: {
                                            element: i ? "mw_trips" : "mastheadCta"
                                        }
                                    })
                                };
                                if (o) return d.createElement("span", {
                                    onClick: r
                                }, l);
                                var c = d.createElement("div", {
                                    className: "modal-container"
                                }, d.createElement(h.RouteConsumer, null, function(e) {
                                    var n = e.navigate;
                                    return d.createElement(_.b, {
                                        joinGate: t,
                                        loginGate: a,
                                        onLoginFlowComplete: function e() {
                                            return n({
                                                page: "Trips",
                                                login: !0
                                            })
                                        }
                                    })
                                }));
                                return d.createElement(d.Fragment, null, i ? d.createElement(d.Fragment, null, s(function() {
                                    r(), n.setState({
                                        show: !0
                                    })
                                }), n.state.show && d.createElement(p.a, {
                                    closeButton: !0,
                                    onClose: function e() {
                                        return n.setState({
                                            show: !1
                                        })
                                    }
                                }, c)) : d.createElement(d.Fragment, null, d.createElement(v.Opener, {
                                    name: "trip-link-widget-modal"
                                }, function(e) {
                                    return s(function() {
                                        r(), e()
                                    })
                                }), d.createElement(g.Modal, {
                                    name: "trip-link-widget-modal",
                                    isFullBleed: !0,
                                    closeXColorVariant: "WHITE"
                                }, c)))
                            })
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this;
                            return d.createElement(_.c, null, function(e, a) {
                                return t.renderInner(e, a)
                            })
                        }
                    }]), t
                }(d.Component);
            t.a = Object(m.connect)(function(e, t) {
                return Object(n.a)({
                    isLoggedIn: e.auth.isMember,
                    isMobile: "MOBILE" === e.meta.device.viewportCategory
                }, t)
            })(j)
        },
        "./packages/trips/tracking/interactions.jsx": function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return m
            });
            var n = a("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                r = a("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                o = a("./node_modules/react/index.js"),
                i = a("./packages/common/tracking/tracking.jsx"),
                l = a("@ta/tracking.interactions"),
                s = a("./packages/common/routing/routing.jsx"),
                c = a("./node_modules/react-apollo/react-apollo.browser.umd.js"),
                u = {
                    Home: "HomeFeed",
                    Profile: "ProfileFeed",
                    Attractions: "AttractionList",
                    Attraction_Review: "AttractionDetail",
                    Attraction_Products: "AttractionList",
                    AttractionProductDetail: "AttractionProductDetail",
                    Hotels: "HotelList",
                    SmartDeals: "HotelList",
                    HotelHighlight: "HotelList",
                    HotelsList: "HotelList",
                    HotelsNear: "HotelList",
                    Vacation_Packages: "HotelList",
                    Hotel_Review: "HotelDetail",
                    Restaurants: "RestaurantList",
                    Restaurant_Review: "RestaurantDetail",
                    ShowUserReviews: "ShowUserReview",
                    Recent: "Recent",
                    Forums: "Forums",
                    ShowTopic: "Forums",
                    ShowForum: "Forums",
                    Trips: "Trips",
                    Map: "Map",
                    LastMinute: "HotelList",
                    LocalMaps: "Map",
                    LocalMapsRedesign: "Map",
                    VacationRentalReview: "VacationRentalDetail"
                },
                d = function e(t) {
                    return t && u[t] ? u[t].toUpperCase() : void 0
                },
                m = function e(t) {
                    return d(t) || d(t.replace(/^Mobile/, ""))
                },
                b = function e(t) {
                    var a = t.children,
                        u = t.source,
                        d = t.pageAsContext,
                        b = t.saveObject,
                        p = t.trackingContext;
                    return o.createElement(s.RouteConsumer, null, function(e) {
                        var t = e.route;
                        return o.createElement(i.TrackingImpressionContext, null, function(e) {
                            var i = e.impressionId || "",
                                s = p || d && t && t.page || void 0,
                                g = {
                                    detailId: b ? "".concat(b.id) : void 0,
                                    saveType: b ? b.type : void 0
                                };
                            return o.createElement(c.Mutation, {
                                mutation: l.LogInteractionV4,
                                ignoreResults: !0
                            }, function(e) {
                                return a(function(t) {
                                    var a = {
                                            elementClick: t.elementClick && Object(r.a)({
                                                puid: i
                                            }, g, {
                                                context: s
                                            }, t.elementClick),
                                            filterClick: t.filterClick && Object(r.a)({
                                                puid: i
                                            }, t.filterClick),
                                            modalSuccess: t.modalSuccess && Object(r.a)({
                                                puid: i
                                            }, g, {
                                                context: s
                                            }, t.modalSuccess),
                                            overflowClick: t.overflowClick && Object(r.a)({
                                                puid: i
                                            }, t.overflowClick),
                                            overflowSuccess: t.overflowSuccess && Object(r.a)({
                                                puid: i
                                            }, t.overflowSuccess)
                                        },
                                        o = Object(n.a)({}, u, function l(e) {
                                            var t = e;
                                            return ["elementClick", "modalSuccess"].forEach(function(e) {
                                                t[e] && t[e].context && (t[e].context = m(t[e].context) || null), t[e] && t[e].saveType && (t[e].saveType = t[e].saveType.toUpperCase())
                                            }), ["elementClick", "filterClick", "modalSuccess", "overflowClick", "overflowSuccess"].forEach(function(e) {
                                                t[e] && t[e].element && (t[e].element = t[e].element.toUpperCase())
                                            }), ["modalSuccess"].forEach(function(e) {
                                                t[e] && t[e].fields && (t[e].fields = t[e].fields.map(function(e) {
                                                    return e.toUpperCase()
                                                }))
                                            }), t
                                        }(a));
                                    e({
                                        variables: {
                                            interaction: o
                                        }
                                    })
                                }, i)
                            })
                        })
                    })
                };
            b.defaultProps = {
                pageAsContext: !1,
                saveObject: void 0,
                trackingContext: void 0
            }, t.a = b
        },
        "./roots/brand/header/GlobalNav.jsx": function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                r = a("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                o = a("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                i = a("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                l = a("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                s = a("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                c = a("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                u = a("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                d = a("./node_modules/react/index.js"),
                m = a("./packages/common/api/api.jsx"),
                b = a("./packages/common/features/features.jsx"),
                p = a("./packages/common/classnames/classnames.jsx"),
                g = a.n(p),
                v = a("./packages/common/data-cacher/DataCacher.jsx"),
                f = a("@ta/brand.global-nav-context"),
                h = a.n(f),
                _ = a("./packages/brand/global-nav-geopill/GeoPill.jsx"),
                j = a("./packages/common/i18n/i18n.jsx"),
                k = a("@ta/styleguide.icon"),
                O = a("./packages/common/tracking/tracking.jsx"),
                y = a.n(O),
                E = a("./packages/brand/geopill-util/TripSearchGeoPillBinding.jsx"),
                w = a("@ta/brand.trip-search-geopill-flyout"),
                N = function e(t) {
                    var a;
                    return a = t.isNearby ? Object(j.localize)("mx_nearby") : t.isGeoScoped ? t.geoName : Object(j.localize)("mobile_discovery_where_to"), d.createElement(w.GeoPillFlyout, null, function(e) {
                        return d.createElement("div", {
                            ref: e,
                            className: "brand-global-nav-satellite-geopill-SatelliteGeoPill__pillWrap--1dnnB",
                            "data-test-satellite-geopill": !0
                        }, d.createElement(O.ClickTracker, {
                            module: "HomeNav_".concat(t.servletName),
                            action: "click",
                            context: "GeoPicker"
                        }, d.createElement("div", {
                            className: "ui_pill ".concat("brand-global-nav-satellite-geopill-SatelliteGeoPill__pill--CI8IJ")
                        }, a, d.createElement(k.Icon, {
                            name: "single-chevron-down",
                            className: "brand-global-nav-satellite-geopill-SatelliteGeoPill__icon--1Xvax"
                        }))))
                    })
                };
            N.defaultProps = {
                geoName: void 0
            };
            var C = Object(E.a)(N),
                x = a("@ta/overlays.pieces"),
                L = a("@ta/overlays.attached-arrow-overlay"),
                S = a.n(L),
                T = a("@ta/overlays.managers"),
                P = a("@ta/events.event-boundary"),
                I = a.n(P),
                M = a("./packages/common/state/state.jsx"),
                R = function(e) {
                    function t() {
                        var e, a;
                        Object(r.a)(this, t);
                        for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
                        return a = Object(i.a)(this, (e = Object(l.a)(t)).call.apply(e, [this].concat(o))), Object(u.a)(Object(c.a)(Object(c.a)(a)), "dismissModal", function() {
                            y()({
                                module: a.props.pageProperty,
                                action: "close"
                            }), a.props.showModal(null)
                        }), a
                    }
                    return Object(s.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.props.showModal("shopping_cart_recapture"), fetch("/AttractionCommerceAjax?a=".concat(this.props.cookieId), {
                                credentials: "same-origin"
                            }), this.props.onShow && this.props.onShow()
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this;
                            if (!this.props.below) return null;
                            var a = this.props.below;
                            return d.createElement(h.a.Consumer, null, function(e) {
                                return d.createElement(T.Global, {
                                    name: "shopping_cart_recapture"
                                }, d.createElement(I.a, {
                                    events: ["onClick"]
                                }, d.createElement("div", {
                                    onClick: t.dismissModal
                                }, d.createElement(S.a, {
                                    target: a,
                                    position: "below",
                                    shiftY: 4,
                                    fixed: e.usePersistentIcons
                                }, d.createElement("div", {
                                    className: "brand-global-nav-action-shopping-cart-ShoppingCartRecapture__inner--1avdb"
                                }, d.createElement("div", {
                                    className: "brand-global-nav-action-shopping-cart-ShoppingCartRecapture__header_text--gfg5T"
                                }, t.props.headerText), d.createElement("div", {
                                    className: "brand-global-nav-action-shopping-cart-ShoppingCartRecapture__body_text--3CuJ1"
                                }, t.props.bodyText), d.createElement(T.Closer, null, function(e) {
                                    return d.createElement(x.CloseX, {
                                        close: e
                                    })
                                }))))))
                            })
                        }
                    }]), t
                }(d.Component);
            Object(u.a)(R, "defaultProps", {
                onShow: void 0
            });
            var B = Object(m.bind)({
                    data: function e(t, a) {
                        var n = a("/data/1.0/cart/recaptureAlertType");
                        return function(e, t) {
                            var a = (n.get().data || {
                                    type: "none"
                                }).type,
                                r = void 0 === a ? "none" : a,
                                o = (t || {
                                    below: null
                                }).below;
                            return {
                                recaptureType: r,
                                below: void 0 === o ? null : o
                            }
                        }
                    },
                    actions: {
                        showModal: M.actions.overlays.showGlobalOverlay
                    }
                })(function e(t) {
                    switch (t.recaptureType) {
                        case "abandoned":
                            return d.createElement(R, {
                                below: t.below,
                                showModal: t.showModal,
                                headerText: Object(j.localize)("abandon_cart_home_banner_2350"),
                                bodyText: Object(j.localize)("attractions.cart_recapture.abandoned_cart_overlay_cta"),
                                cookieId: "rso",
                                pageProperty: "cart_recapture"
                            });
                        case "education":
                            return d.createElement(R, {
                                below: t.below,
                                showModal: t.showModal,
                                headerText: Object(j.localize)("attractions.cart_recapture.alert.headline"),
                                bodyText: Object(j.localize)("attractions.cart_recapture.alert_body"),
                                cookieId: "rsa",
                                pageProperty: "cart_education"
                            });
                        default:
                            return null
                    }
                }),
                D = function(e) {
                    function t() {
                        var e, a;
                        Object(r.a)(this, t);
                        for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
                        return a = Object(i.a)(this, (e = Object(l.a)(t)).call.apply(e, [this].concat(o))), Object(u.a)(Object(c.a)(Object(c.a)(a)), "state", {
                            animated: !1
                        }), Object(u.a)(Object(c.a)(Object(c.a)(a)), "animate", function() {
                            a.setState({
                                animated: !0
                            })
                        }), a
                    }
                    return Object(s.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this;
                            if (!this.props.show) return this.props.children ? this.props.children(null) : null;
                            var a = this.props.count ? d.createElement("span", {
                                    className: "shopping-cart-size ui_jewel ".concat("brand-global-nav-action-shopping-cart-ShoppingCart__jewel--G-x1t")
                                }, this.props.count) : null,
                                n = {
                                    module: "TopNav_".concat(this.props.servletName || ""),
                                    action: "click",
                                    context: "Shopping_Cart"
                                };
                            return d.createElement(h.a.Consumer, null, function(e) {
                                var r, o = g()("brand-global-nav-action-shopping-cart-ShoppingCart__shoppingCartLink--1jRbu", (r = {}, Object(u.a)(r, "brand-global-nav-action-shopping-cart-ShoppingCart__animated--2su9s", t.state.animated), Object(u.a)(r, "brand-global-nav-action-shopping-cart-ShoppingCart__onDarkBg--3zz4h", "dark" === e.theme), r));
                                return d.createElement(x.Target, null, function(e, r) {
                                    var i = t.props.count && t.props.isDesktop && r ? d.createElement(B, {
                                            below: r,
                                            onShow: t.animate
                                        }) : null,
                                        l = d.createElement(O.ClickTracker, n, d.createElement("a", {
                                            ref: e,
                                            href: "/ShoppingCart",
                                            className: o,
                                            title: Object(j.localize)("utility_nav_cart")
                                        }, d.createElement(k.Icon, {
                                            name: "empty-cart",
                                            className: "brand-global-nav-action-shopping-cart-ShoppingCart__icon--6GVUG"
                                        }), d.createElement("span", {
                                            className: "brand-global-nav-action-shopping-cart-ShoppingCart__label--IShRV"
                                        }, Object(j.localize)("attractions.cart_button_acc"), " ")), a, i);
                                    return t.props.children ? t.props.children(l) : l
                                })
                            })
                        }
                    }]), t
                }(d.Component);
            Object(u.a)(D, "defaultProps", {
                count: 0,
                show: !0
            });
            var H = Object(m.bind)(function(e, t) {
                    var a = e.meta,
                        n = a && a.initialServletName || "",
                        r = t("/data/1.0/cart/info?servletName=".concat(n));
                    return B.stage(e, t),
                        function() {
                            var t = r.get().data || {
                                    count: 0,
                                    show: !1
                                },
                                a = t.count,
                                n = void 0 === a ? 0 : a,
                                o = t.show;
                            return {
                                count: n,
                                show: void 0 !== o && o,
                                servletName: e.meta.initialServletName,
                                isDesktop: "DESKTOP" === e.meta.device.viewportCategory
                            }
                        }
                })(D),
                A = a("./packages/common/logging/logging.jsx"),
                G = a.n(A),
                U = a("./packages/failover/readonly/HideOnReadonly.jsx"),
                z = a("common/Radio"),
                F = a.n(z),
                W = 100,
                q = function(e) {
                    function t(e) {
                        var a;
                        return Object(r.a)(this, t), a = Object(i.a)(this, Object(l.a)(t).call(this, e)), Object(u.a)(Object(c.a)(Object(c.a)(a)), "clickHandler", function() {
                            var e = a.containerEl.current;
                            if (a.props.showDropdown) window.location = "/Inbox";
                            else if (e) {
                                var t;
                                t = a.props.isTablet ? [-5, 21] : [3, 11], a.lastOpenRequestReceived = !1, F()("global-nav-inbox").emit("open", {
                                    el: a.containerEl.current,
                                    bottomLeftOffset: t,
                                    receivedCallback: function e() {
                                        a.lastOpenRequestReceived = !0
                                    }
                                }), setTimeout(a.checkOpenRequestReceived, W)
                            }
                        }), Object(u.a)(Object(c.a)(Object(c.a)(a)), "checkOpenRequestReceived", function() {
                            a.lastOpenRequestReceived || (G.a.error("Inbox placement global_nav_action_inbox:empty did not respond back about receiving the inbox dropdown open request via Radio. Redirecting to /Inbox as a fallback."), window.location = "/Inbox")
                        }), Object(u.a)(Object(c.a)(Object(c.a)(a)), "containerEl", void 0), Object(u.a)(Object(c.a)(Object(c.a)(a)), "lastOpenRequestReceived", void 0), Object(u.a)(Object(c.a)(Object(c.a)(a)), "lastOpenRequestTimer", void 0), a.containerEl = d.createRef(), a.lastOpenRequestReceived = !1, a.lastOpenRequestTimer = null, a
                    }
                    return Object(s.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this,
                                a = g()("ui_jewel", "brand-global-nav-action-inbox-InboxTrigger__jewel--3cuzr", Object(u.a)({}, "brand-global-nav-action-inbox-InboxTrigger__hidden--J1m6y", !this.props.jewel));
                            return d.createElement(U.a, null, d.createElement(h.a.Consumer, null, function(e) {
                                var n = "dark" === e.theme,
                                    r = g()("brand-global-nav-action-inbox-InboxTrigger__container--19kWZ", Object(u.a)({}, "brand-global-nav-action-inbox-InboxTrigger__onDarkBg--Q_XeJ", n));
                                return d.createElement("div", {
                                    title: Object(j.localize)("inbox_title"),
                                    className: r,
                                    onClick: t.clickHandler,
                                    ref: t.containerEl
                                }, " ", d.createElement("div", {
                                    className: "".concat("brand-global-nav-action-inbox-InboxTrigger__inboxIcon--bEUUA", " ui_icon comments")
                                }, d.createElement("div", {
                                    className: "brand-global-nav-action-inbox-InboxTrigger__label--CfcOl"
                                }, Object(j.localize)("inbox_title"))), d.createElement("div", {
                                    className: a
                                }))
                            }))
                        }
                    }]), t
                }(d.Component),
                Q = Object(m.bind)(function(e, t) {
                    var a = t("/data/1.0/inbox/navAction?".concat(function e(t) {
                        var a = t.auth.isMember ? "true" : "false";
                        return new URLSearchParams({
                            isMember: a
                        })
                    }(e).toString()));
                    return function(e) {
                        return {
                            jewel: (a.get().data || {}).hasUnreadConvos || !1,
                            showDropdown: "Inbox" === !e.route.page,
                            isTablet: "TABLET" === e.meta.device.viewportCategory
                        }
                    }
                })(q),
                V = a("./packages/common/routing/routing.jsx"),
                K = a("@ta/overlays.popover"),
                Y = a.n(K),
                J = a("@ta/styleguide.avatar"),
                X = a("@ta/social.onboarding-state"),
                Z = function e() {
                    return Object(b.featureIsEnabled)("social_2018") || Object(b.featureIsEnabled)("unified_reg_ui_dt") || Object(b.featureIsEnabled)("unified_reg_ui_mw") ? {
                        flowName: "core_combined",
                        joinPid: "40487",
                        loginPid: "40486"
                    } : Object(b.featureIsEnabled)("growth_reg_flow_dt") || Object(b.featureIsEnabled)("growth_reg_flow_mw") ? {
                        flowName: "core_reg_growth",
                        joinPid: "40375",
                        loginPid: "40375"
                    } : Object(b.featureIsEnabled)("viator_login_global_nav") ? {
                        flowName: "attraction_product_combined",
                        joinPid: "427",
                        loginPid: "427"
                    } : Object(b.featureIsEnabled)("brand_login_callout_rollout") ? {
                        flowName: "brand_signup_core_combined",
                        joinPid: "427",
                        loginPid: "427"
                    } : {
                        flowName: "core_combined",
                        joinPid: "427",
                        loginPid: "427"
                    }
                },
                $ = function e(t) {
                    return "/RegistrationController?flow=".concat(t.flowName, "&pid=").concat(t.loginPid, "&returnTo=%2F&fullscreen=true&flowOrigin=login&hideNavigation=true")
                },
                ee = function e(t) {
                    return "/RegistrationController?flow=".concat(t.flowName, "&pid=").concat(t.joinPid, "&returnTo=%2F&fullscreen=true&flowOrigin=join&hideNavigation=true")
                },
                te = function e(t) {
                    var a = t.member;
                    return d.createElement("ul", {
                        className: "brand-global-nav-action-profile-Profile__menu--YoKlH"
                    }, d.createElement("li", null, d.createElement(O.ClickTracker, {
                        module: "UtilityNav",
                        action: "click",
                        context: "UserProfile_viewProfile",
                        value: 0,
                        destinationUrl: a.profile
                    }, d.createElement("a", {
                        href: a.profile
                    }, Object(j.localize)("ip_view_profile_1cf1")))), a.isOwner && d.createElement("li", null, d.createElement(O.ClickTracker, {
                        module: "UtilityNav",
                        action: "click",
                        context: "UserProfile_ManagementCenter",
                        value: 0,
                        destinationUrl: "/Owners"
                    }, d.createElement(V.Link, {
                        to: {
                            page: "Owners"
                        }
                    }, Object(j.localize)("global_nav_profile_my_business")))), Object(b.featureIsEnabled)("member_profile_bookings") && d.createElement("li", {
                        className: "brand-global-nav-action-profile-Profile__rule--pLD_U"
                    }, d.createElement(O.ClickTracker, {
                        module: "UtilityNav",
                        action: "click",
                        context: "UserProfile_bookings",
                        value: 0,
                        destinationUrl: "/Bookings"
                    }, d.createElement("a", {
                        href: "/Bookings",
                        className: "subLink global-nav-submenu-divided"
                    }, Object(j.localize)("my_bookings_headtext_fffff9b3")))), d.createElement("li", null, d.createElement(O.ClickTracker, {
                        module: "UtilityNav",
                        action: "click",
                        context: "UserProfile_settings",
                        value: 0,
                        destinationUrl: "/Settings-cp"
                    }, d.createElement("a", {
                        href: "/Settings-cp"
                    }, Object(j.localize)("mem_account_info")))), d.createElement("li", null, d.createElement(O.ClickTracker, {
                        module: "UtilityNav",
                        action: "click",
                        context: "UserProfile_signout",
                        value: 0,
                        destinationUrl: "/NewsletterSignOut-e__2F__"
                    }, d.createElement("a", {
                        href: "/NewsletterSignOut-e__2F__"
                    }, Object(j.localize)("common_Signout")))))
                },
                ae = function e(t) {
                    return g()("brand-global-nav-action-profile-Profile__loggedInIconWrap--12hkZ", Object(u.a)({}, "brand-global-nav-action-profile-Profile__open--1m3xz", t))
                },
                ne = Object(m.bind)({
                    data: function e(t, a) {
                        var n = null,
                            r = t.auth,
                            o = r.loggedInUserId;
                        return r.isMember && (n = a("/data/1.0/member/self?userId=".concat(o))),
                            function(e) {
                                return {
                                    member: n ? n.get().data : null,
                                    isTablet: "TABLET" === e.meta.device.viewportCategory,
                                    geoId: e.page.geoId,
                                    avatarSize: "DESKTOP" === e.meta.device.viewportCategory ? "small" : "xtra-small",
                                    pageEligibleForOnboarding: "Home" === e.meta.initialServletName || "Profile" === e.meta.initialServletName
                                }
                            }
                    },
                    actions: {
                        setFireOnboarding: X.ACTIONS.setShouldFire
                    }
                })(function e(t) {
                    var a = Z(),
                        n = $(a),
                        r = ee(a),
                        o = function e(a, n, r) {
                            return function(e) {
                                window.require("ta/registration/RegOverlay").show(e, e.target, {
                                    flow: a,
                                    pid: n,
                                    userRequestedForce: "true",
                                    locationId: t.geoId,
                                    extraQueryParams: {
                                        flowOrigin: r,
                                        social: "true"
                                    },
                                    onSuccess: function e(a) {
                                        ! function e(a) {
                                            if (t.pageEligibleForOnboarding && t.setFireOnboarding) {
                                                var n = a && (a.hasCreatedMember || !a.hasAcceptedTermsOfUse);
                                                t.setFireOnboarding(n, "MASTHEAD")
                                            }
                                        }(a)
                                    }
                                }), e.preventDefault()
                            }
                        };
                    return d.createElement(h.a.Consumer, null, function(e) {
                        var i = "light" === e.theme;
                        return d.createElement("div", {
                            className: "".concat("brand-global-nav-action-profile-Profile__container--3inu_").concat(i ? " ".concat("brand-global-nav-action-profile-Profile__white--21kMu") : "")
                        }, t.member ? d.createElement(Y.a, {
                            below: !0,
                            alignEdge: "right",
                            contents: function e() {
                                return d.createElement(te, {
                                    member: t.member
                                })
                            },
                            closeButton: !1,
                            shiftArrow: t.isTablet ? -13 : -19,
                            shiftY: t.isTablet ? 3 : 2,
                            arrowType: "small",
                            fixed: !0
                        }, function(e, a, n, r) {
                            return d.createElement(O.ClickTracker, {
                                module: "UtilityNav",
                                action: "open",
                                context: "Signed_in_profile_dropdown"
                            }, d.createElement("div", {
                                title: Object(j.localize)("utility_nav_profile"),
                                ref: e,
                                onClick: a,
                                className: ae(r)
                            }, t.member.avatar ? d.createElement("span", {
                                className: "brand-global-nav-action-profile-Profile__avatar--3Qu81"
                            }, d.createElement(J.Avatar, {
                                photoUrl: t.member.avatar,
                                withBorder: !0,
                                size: t.avatarSize
                            })) : d.createElement(k.Icon, {
                                name: "member",
                                className: "brand-global-nav-action-profile-Profile__noAvatarIcon--8qSkz"
                            })))
                        }) : d.createElement(d.Fragment, null, d.createElement("a", {
                            href: n,
                            title: Object(j.localize)("utility_nav_profile"),
                            onClick: o(a.flowName, a.loginPid, "login"),
                            className: "brand-global-nav-action-profile-Profile__loggedOutIconWrap--1Gjms"
                        }, d.createElement(k.Icon, {
                            name: "friend",
                            className: "brand-global-nav-action-profile-Profile__loggedOutIcon--YhUxY"
                        }), d.createElement("span", {
                            className: "brand-global-nav-action-profile-Profile__label--3BJYs"
                        }, Object(j.localize)("utility_nav_profile")), " "), d.createElement("a", {
                            href: r,
                            className: "ui_button ".concat(i ? "primary" : "secondary", " small ").concat("brand-global-nav-action-profile-Profile__loginButton--2fZJK"),
                            "data-flow-name": a.flowName,
                            title: Object(j.localize)("utility_nav_join"),
                            onClick: o(a.flowName, a.joinPid, "join")
                        }, Object(j.localize)("reg_and_join"))))
                    })
                }),
                re = a("./packages/events/window-scroll/WindowScroll.jsx"),
                oe = a("./packages/brand/quick-links/QuickLinksLite.jsx"),
                ie = a("./packages/brand/global-nav/menus/NavLinks.jsx"),
                le = a("./packages/brand/global-nav/global-nav.jsx"),
                se = function e(t) {
                    return t.links ? d.createElement(ie.a, {
                        links: t.links,
                        activeLinkId: t.activeLinkId,
                        sourceOnly: t.sourceOnly
                    }) : null
                };
            se.defaultProps = {
                sourceOnly: !1
            };
            var ce, ue = Object(le.a)(se),
                de = a("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
                me = a("./node_modules/react-redux/es/index.js"),
                be = a("@ta/brand.global-nav-state"),
                pe = a("./packages/styleguide/nav-tabs/NavTabs.jsx"),
                ge = a("@ta/overlays.slide-in"),
                ve = a.n(ge),
                fe = a("./packages/brand/global-nav/sidebar/SideBarNavLinks.jsx"),
                he = a("@ta/styleguide.button"),
                _e = a.n(he),
                je = Object(me.connect)(function(e) {
                    return {
                        geoId: e.page.geoId,
                        pageEligibleForOnboarding: "Home" === e.meta.initialServletName || "Profile" === e.meta.initialServletName
                    }
                }, {
                    setFireOnboarding: X.ACTIONS.setShouldFire
                })(function e(t) {
                    var a = t.memberData;
                    if (null != a) {
                        var n = a.avatarUrl ? d.createElement(J.Avatar, {
                            photoUrl: a.avatarUrl,
                            className: "ui_icon"
                        }) : d.createElement(k.Icon, {
                            name: "member"
                        });
                        return d.createElement("div", {
                            className: "brand-header-ProfileDataCell__profileDataCell--3_iv0"
                        }, d.createElement(V.Link, {
                            href: a.profileUrl
                        }, d.createElement("div", {
                            className: "brand-header-ProfileDataCell__profileDataContainer--1RJks"
                        }, n, d.createElement("div", {
                            className: "brand-header-ProfileDataCell__profileData--1JVG0"
                        }, d.createElement("div", {
                            className: "brand-header-ProfileDataCell__profileName--FfiZC"
                        }, a.userName), d.createElement("div", {
                            className: "brand-header-ProfileDataCell__viewProfileText--35E8y"
                        }, Object(j.localize)("ip_view_profile_1cf1"))))))
                    }
                    var r = Z(),
                        o = $(r),
                        i = ee(r),
                        l = "Reg Form | ".concat(r.flowName),
                        s = function e(a, n, r) {
                            return function(e) {
                                window.require("ta/registration/RegOverlay").showForMobile(e, e.target, {
                                    flow: a,
                                    pid: n,
                                    userRequestedForce: "true",
                                    locationId: t.geoId,
                                    extraQueryParams: {
                                        flowOrigin: r,
                                        social: "true"
                                    },
                                    onSuccess: function e(a) {
                                        ! function e(a) {
                                            if (t.pageEligibleForOnboarding && t.setFireOnboarding) {
                                                var n = a && (a.hasCreatedMember || !a.hasAcceptedTermsOfUse);
                                                t.setFireOnboarding(n, "MASTHEAD")
                                            }
                                        }(a)
                                    }
                                }), e.preventDefault()
                            }
                        };
                    return d.createElement("div", {
                        className: "brand-header-ProfileDataCell__profileDataCellNotLoggedIn--31KFY"
                    }, d.createElement(O.ClickTracker, {
                        action: "prod_view",
                        module: "reg_trigger",
                        context: l
                    }, d.createElement(V.Link, {
                        href: o,
                        onClick: s(r.flowName, r.loginPid, "login")
                    }, d.createElement(_e.a, {
                        size: "fullwidth",
                        type: "secondary"
                    }, Object(j.localize)("alerts_center_log_in")))), d.createElement(O.ClickTracker, {
                        action: "prod_view",
                        module: "reg_trigger",
                        context: l
                    }, d.createElement(V.Link, {
                        href: i,
                        onClick: s(r.flowName, r.joinPid, "join")
                    }, d.createElement(_e.a, {
                        size: "fullwidth",
                        type: "primary"
                    }, Object(j.localize)("utility_nav_join")))))
                }),
                ke = a("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                Oe = a("./packages/trips/states/TripsLink.jsx"),
                ye = function e(t, a) {
                    return {
                        context: t,
                        action: "click",
                        module: "UtilityNav_".concat(a)
                    }
                },
                Ee = Object(me.connect)(function(e) {
                    return {
                        servletName: e.meta.initialServletName
                    }
                })(function e(t) {
                    var a = g()("brand-header-ProfileSubLinks__profileSubLink--2Ust3", "brand-header-ProfileSubLinks__noBorder--sSYka"),
                        n = t.isOwner ? "brand-header-ProfileSubLinks__profileSubLink--2Ust3" : a,
                        r = g()("ui_jewel", "brand-header-ProfileSubLinks__jewel--3P-Bf"),
                        o = t.isOwner ? d.createElement("li", null, d.createElement(O.ClickTracker, ye("UserProfile_ManagementCenter", t.servletName), d.createElement(V.Link, {
                            to: {
                                page: "Owners"
                            },
                            className: a
                        }, Object(j.localize)("global_nav_profile_my_business")))) : null,
                        i = t.displayInboxIcon ? d.createElement("div", {
                            className: "brand-header-ProfileSubLinks__inboxIconAndJewel--vw7wg"
                        }, d.createElement(k.Icon, {
                            name: "comments"
                        }), d.createElement("div", {
                            className: r
                        })) : null;
                    return d.createElement("ul", null, o, d.createElement("li", null, d.createElement(Oe.a, {
                        loggedInElement: d.createElement(O.ClickTracker, ye("My_trips", t.servletName), d.createElement(V.Link, {
                            href: "/Trips",
                            className: n
                        }, Object(j.localize)("trips_product_name"))),
                        loggedOutElement: function e(a) {
                            return d.createElement(O.ClickTracker, ye("My_trips", t.servletName), d.createElement(V.Link, {
                                className: n,
                                onClick: a
                            }, Object(j.localize)("trips_product_name")))
                        }
                    })), d.createElement("li", null, d.createElement(O.ClickTracker, Object(ke.a)({
                        dstServlet: "MobileSaves"
                    }, ye("Recently_viewed", t.servletName)), d.createElement(V.Link, {
                        href: "/Recent",
                        className: "brand-header-ProfileSubLinks__profileSubLink--2Ust3"
                    }, Object(j.localize)("rebrand_recently_viewed_shelf_title")))), d.createElement("li", null, d.createElement(O.ClickTracker, ye("UserProfile_ManagementCenter", t.servletName), d.createElement(V.Link, {
                        href: "/Bookings",
                        className: "brand-header-ProfileSubLinks__profileSubLink--2Ust3"
                    }, Object(j.localize)("my_bookings_headtext_fffff9b3")))), d.createElement(U.a, null, d.createElement("li", null, d.createElement(O.ClickTracker, ye("UserProfile_inbox", t.servletName), d.createElement(V.Link, {
                        href: "/Inbox",
                        className: "brand-header-ProfileSubLinks__profileSubLink--2Ust3"
                    }, Object(j.localize)("inbox_title"), i)))))
                }),
                we = Object(m.bind)(function(e, t) {
                    var a = e.auth,
                        n = a.loggedInUserId,
                        r = a.isMember ? t("/data/1.0/member/self?userId=".concat(n)) : null;
                    return function(e) {
                        var t = (r ? r.get() : {}).data;
                        return {
                            memberData: null == t ? null : {
                                profileUrl: t.profile,
                                userName: t.name,
                                avatarUrl: t.avatar
                            },
                            isOwner: !!t && t.isOwner,
                            servletName: e.meta.initialServletName
                        }
                    }
                })(function e(t) {
                    return d.createElement(d.Fragment, null, d.createElement(je, {
                        memberData: t.memberData
                    }), d.createElement(Ee, {
                        displayInboxIcon: t.displayInboxIcon,
                        isOwner: t.isOwner
                    }))
                }),
                Ne = a("@ta/styleguide.loading"),
                Ce = a("./packages/common/imports/imports.jsx"),
                xe = new Ce.Loadable(((ce = function e() {
                    return a.e("brand.header/t4b.t4b-header.demand").then(a.bind(null, "./roots/t4b/t4b_header/T4BHeader.jsx"))
                }).__PACKAGE__ = "brand.header", ce.__MODULE_ID__ = "./roots/t4b/t4b_header/T4BHeader.jsx", ce.__MODULE_NAME__ = "t4b.t4b-header", ce.__GET_SYNC__ = function() {
                    return a.m["./roots/t4b/t4b_header/T4BHeader.jsx"] ? a("./roots/t4b/t4b_header/T4BHeader.jsx") : null
                }, ce.__IS_LOADED__ = function() {
                    return void 0 !== a.m["./roots/t4b/t4b_header/T4BHeader.jsx"]
                }, ce)),
                Le = new Ce.Loadable(function() {
                    var e = function e() {
                        return a.e("brand.header/t4b.t4b-header-mw.demand").then(a.bind(null, "./roots/t4b/t4b_header_mw/T4BHeaderMW.jsx"))
                    };
                    return e.__PACKAGE__ = "brand.header", e.__MODULE_ID__ = "./roots/t4b/t4b_header_mw/T4BHeaderMW.jsx", e.__MODULE_NAME__ = "t4b.t4b-header-mw", e.__GET_SYNC__ = function() {
                        return a.m["./roots/t4b/t4b_header_mw/T4BHeaderMW.jsx"] ? a("./roots/t4b/t4b_header_mw/T4BHeaderMW.jsx") : null
                    }, e.__IS_LOADED__ = function() {
                        return void 0 !== a.m["./roots/t4b/t4b_header_mw/T4BHeaderMW.jsx"]
                    }, e
                }()),
                Se = ["Owners", "BrandOwners", "ManageShopping", "HotelsManagementCenter"],
                Te = function e(t) {
                    var a = t.isT4BNavPage,
                        n = t.isMobileNav,
                        r = t.isMobileViewport;
                    return a && n === r ? d.createElement(Ce.Load, {
                        component: n ? Le : xe
                    }) : null
                };
            Te.defaultProps = {
                isMobileNav: !1
            };
            var Pe = function e(t) {
                    var a = t.meta,
                        n = t.route;
                    return {
                        isT4BNavPage: Se.includes(n.page),
                        isMobileViewport: "DESKTOP" !== a.device.viewportCategory
                    }
                },
                Ie = Object(m.bind)(function(e, t) {
                    var a = Pe(e),
                        n = a.isT4BNavPage,
                        r = a.isMobileViewport;
                    return n && (r ? Le.stage(e, t) : xe.stage(e, t)), Pe
                })(Te),
                Me = function e(t) {
                    return t.loaded ? d.createElement(h.a.Consumer, null, function(e) {
                        var a, n = function e(t, a, n, r) {
                                return t ? "lightTheme" === t ? a : n : "light" === r ? a : n
                            }(t.logoThemeOverride, t.primaryLogoSvg, t.secondaryLogoSvg, e.theme),
                            r = g()("brand-header-Logo__logoContainer--2lBDe", (a = {}, Object(u.a)(a, "brand-header-Logo__centerLogo--5EjAV", t.isMobileBreakpoint), Object(u.a)(a, "brand-header-Logo__obsoleteBrowser--1dn64", t.isObsoleteBrowser), a)),
                            o = t.resizeLogo ? "brand-header-Logo__resizeImg--15ZcW" : "",
                            i = "TopNav_".concat(t.trackingUrl),
                            l = d.createElement("img", {
                                className: o,
                                src: n,
                                alt: Object(j.localize)("common_TripAdvisor")
                            });
                        return d.createElement("div", {
                            className: r
                        }, d.createElement(O.ClickTracker, {
                            action: "click",
                            module: i,
                            context: "TAlogo"
                        }, t.isT4BNavPage ? d.createElement(V.Link, {
                            to: {
                                page: "Owners"
                            },
                            className: "brand-header-Logo__logo--x3aMw"
                        }, l) : d.createElement(V.Link, {
                            href: "/",
                            className: "brand-header-Logo__logo--x3aMw",
                            onClick: function e(a) {
                                window.open(t.logoLink, "_self"), a.preventDefault()
                            }
                        }, l)))
                    }) : d.createElement(Ne.LoadingSpinner, null)
                };
            Me.defaultProps = {
                logoThemeOverride: void 0,
                logoLink: "/"
            };
            var Re = Object(m.bind)(function(e, t) {
                    var a = t("/data/1.0/brand/logo?".concat(function e(t) {
                        var a = {
                                servlet: t.meta.initialServletName,
                                locale: t.i18n.locale,
                                geoId: t.route.geo,
                                viewportCategory: t.meta.device.viewportCategory,
                                latitude: t.route.latitude,
                                longitude: t.route.longitude
                            },
                            n = {};
                        return Object.keys(a).forEach(function(e) {
                            null != a[e] && (n[e] = a[e])
                        }), new URLSearchParams(n)
                    }(e).toString()));
                    return function(e, t) {
                        var r = a.get();
                        return r.loading || void 0 === r.data || null === r.data ? {
                            loading: !0,
                            loaded: !1
                        } : Object(n.a)({}, t, {
                            loading: !1,
                            loaded: !0,
                            primaryLogoSvg: r.data.primary_logo_svg,
                            secondaryLogoSvg: r.data.secondary_logo_svg,
                            resizeLogo: r.data.resize_logo,
                            logoLink: r.data.logoLink,
                            isMobileBreakpoint: "MOBILE" === e.meta.device.viewportCategory && !1 === e.meta.forceFullSite,
                            isObsoleteBrowser: "IE" === e.meta.device.browser.family && e.meta.device.browser.majorVersion <= 10,
                            isT4BNavPage: Se.includes(e.route.page),
                            trackingUrl: e.tracking.analytics.url ? e.tracking.analytics.url.substring(1) : ""
                        })
                    }
                })(Object(v.b)()(Me)),
                Be = function(e) {
                    function t() {
                        var e, a;
                        Object(r.a)(this, t);
                        for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
                        return a = Object(i.a)(this, (e = Object(l.a)(t)).call.apply(e, [this].concat(o))), Object(u.a)(Object(c.a)(Object(c.a)(a)), "trackOnCloseEvent", function() {
                            var e = {
                                module: "TopNav_".concat(a.props.servletName),
                                action: "close",
                                context: "sideBar"
                            };
                            y()(e)
                        }), a
                    }
                    return Object(s.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this;
                            return d.createElement(h.a.Consumer, null, function(e) {
                                var a = g()(Object(u.a)({}, "brand-header-SideBar__onDarkBg--2b7rB", "dark" === e.theme)),
                                    n = g()("brand-header-SideBar__sideBarContainer--PgU0u", "ui_container"),
                                    r = "TopNav_".concat(t.props.servletName),
                                    o = g()("ui_jewel", "brand-header-SideBar__jewel--32h5y"),
                                    i = t.props.displayJewel ? d.createElement("div", {
                                        className: o
                                    }) : null;
                                return d.createElement(d.Fragment, null, d.createElement(T.Opener, {
                                    name: "headerHamburgerMenu"
                                }, function(e) {
                                    return d.createElement("div", {
                                        className: a,
                                        onClick: e
                                    }, d.createElement(O.ClickTracker, {
                                        action: "open",
                                        module: r,
                                        context: "sidebar"
                                    }, d.createElement(k.Icon, {
                                        name: "menu-bars"
                                    }), i))
                                }), d.createElement(ve.a, {
                                    name: "headerHamburgerMenu",
                                    slideFrom: "left",
                                    onClose: t.trackOnCloseEvent,
                                    header: d.createElement("div", {
                                        className: "ui_container"
                                    }, d.createElement(Re, {
                                        logoThemeOverride: "lightTheme"
                                    }))
                                }, function() {
                                    return d.createElement("div", {
                                        className: n
                                    }, d.createElement(we, {
                                        displayInboxIcon: t.props.displayJewel
                                    }), d.createElement(fe.a, null))
                                }))
                            })
                        }
                    }]), t
                }(d.Component),
                De = Object(m.bind)(function(e, t) {
                    we.stage(e, t), fe.a.stage(e, t);
                    var a = t("/data/1.0/inbox/navAction?".concat(function e(t) {
                        var a = t.auth.isMember ? "true" : "false";
                        return new URLSearchParams({
                            isMember: a
                        })
                    }(e).toString()));
                    return function(e) {
                        var t = a.get().data || {};
                        return {
                            displayJewel: !e.meta.readOnlyMode && t.hasUnreadConvos,
                            servletName: e.meta.initialServletName
                        }
                    }
                })(Be),
                He = function e() {
                    return d.createElement(h.a.Consumer, null, function(e) {
                        var t = g()("brand-global-nav-action-search-Search__icon--2DVjd", Object(u.a)({}, "brand-global-nav-action-search-Search__onDarkBg--1r8m1", "dark" === e.theme));
                        return d.createElement("div", {
                            className: "brand-global-nav-action-search-Search__searchButton--b9-IK",
                            onClick: function e() {
                                return F()("masthead_search").emit("open")
                            },
                            title: Object(j.localize)("utility_nav_search")
                        }, d.createElement(k.Icon, {
                            name: "search",
                            className: t
                        }), d.createElement("span", {
                            className: "brand-global-nav-action-search-Search__label--3PRUD"
                        }, Object(j.localize)("common_Search")), " ")
                    })
                },
                Ae = function e() {
                    return d.createElement(h.a.Consumer, null, function(e) {
                        var t = g()("brand-global-nav-action-trips-Trips__tripsIcon--25Wn0", Object(u.a)({}, "brand-global-nav-action-trips-Trips__onDarkBg--2UJ7K", "dark" === e.theme));
                        return d.createElement(Oe.a, {
                            loggedInElement: d.createElement(V.Link, {
                                href: "/Trips",
                                className: t,
                                title: Object(j.localize)("trips_product_name")
                            }, d.createElement("span", {
                                className: "ui_icon suitcase"
                            }), d.createElement("span", {
                                className: "brand-global-nav-action-trips-Trips__label--1YhSm"
                            }, Object(j.localize)("trips_product_name"))),
                            loggedOutElement: function e(a) {
                                return d.createElement(V.Link, {
                                    className: t,
                                    title: Object(j.localize)("trips_product_name"),
                                    onClick: a
                                }, d.createElement("span", {
                                    className: "ui_icon suitcase"
                                }), d.createElement("span", {
                                    className: "brand-global-nav-action-trips-Trips__label--1YhSm"
                                }, Object(j.localize)("trips_product_name")))
                            }
                        })
                    })
                },
                Ge = "brand-header-GlobalNavActions__navAction--WyZSa",
                Ue = ["Search", "MobileFlightSearchResults"].concat(Object(de.a)(Se)),
                ze = Object(me.connect)(function(e) {
                    return {
                        isLoggedIn: e.auth.isMember,
                        readOnlyMode: e.meta.readOnlyMode,
                        isMobile: "MOBILE" === e.meta.device.viewportCategory,
                        extraShoppingCartPredicates: !["ShowUserReviews", "MobileShowUserReviews"].includes(e.route.page),
                        extraSearchPredicates: !(Ue.includes(e.route.page) || "FlightSearchResults" === e.route.page && "MOBILE" === e.meta.device.viewportCategory)
                    }
                })(function e(t) {
                    return d.createElement(h.a.Consumer, null, function(e) {
                        var a = g()("brand-header-GlobalNavActions__separator--23vfq", Object(u.a)({}, "brand-header-GlobalNavActions__onDarkBg--2H8tq", "dark" === e.theme));
                        return d.createElement(d.Fragment, null, !t.liteHeader && d.createElement(d.Fragment, null, Object(b.featureIsEnabled)("shopping_cart_desktop") && t.extraShoppingCartPredicates && d.createElement(H, null, function(e) {
                            return e && d.createElement(d.Fragment, null, d.createElement("div", {
                                className: Ge
                            }, e), d.createElement("div", {
                                className: a
                            }))
                        }), (Object(b.featureIsEnabled)("saves") || Object(b.featureIsEnabled)("trips_2018")) && !t.isMobile && d.createElement(d.Fragment, null, d.createElement("div", {
                            className: Ge
                        }, d.createElement(Ae, null)), d.createElement("div", {
                            className: a
                        })), !t.readOnlyMode && Object(b.featureIsEnabled)("unified_inbox_v2") && d.createElement("div", {
                            className: "".concat(Ge, " ").concat("brand-header-GlobalNavActions__hiddenOnMobile--2rrAA")
                        }, d.createElement(Q, null)), d.createElement("div", {
                            className: a
                        }), d.createElement("div", {
                            className: "".concat(Ge, " ").concat("brand-header-GlobalNavActions__hiddenOnMobile--2rrAA")
                        }, d.createElement(ne, null))), Object(b.featureIsEnabled)("rebrand_masthead_search") && t.extraSearchPredicates && d.createElement(d.Fragment, null, d.createElement("div", {
                            className: "".concat(a, " ").concat("brand-header-GlobalNavActions__tabletOnly--2v-D5")
                        }), d.createElement("div", {
                            className: "brand-header-GlobalNavActions__searchWrap--2XBZ1"
                        }, d.createElement(He, null))))
                    })
                }),
                Fe = {
                    globalNavBar: "brand-header-GlobalNavBar__globalNavBar--2X2Qr",
                    globalNavWhite: "brand-header-GlobalNavBar__globalNavWhite--bmx9q",
                    globalNavActions: "brand-header-GlobalNavBar__globalNavActions--v4YAh",
                    persistentIcons: "brand-header-GlobalNavBar__persistentIcons--3DFRm",
                    sideBarTrigger: "brand-header-GlobalNavBar__sideBarTrigger--3Vjki",
                    globalNavBarContainer: "brand-header-GlobalNavBar__globalNavBarContainer--A9HGZ",
                    globalNavMobileWebRollout: "brand-header-GlobalNavBar__globalNavMobileWebRollout--2UThr",
                    adjustHeightForTablet: "brand-header-GlobalNavBar__adjustHeightForTablet--1HyO0",
                    singleLineNavLinks: "brand-header-GlobalNavBar__singleLineNavLinks--3H0UU",
                    obsoleteBrowser: "brand-header-GlobalNavBar__obsoleteBrowser--1wQpO",
                    secondLineNavLinks: "brand-header-GlobalNavBar__secondLineNavLinks--1EW-Y",
                    isQuickLinks: "brand-header-GlobalNavBar__isQuickLinks--25wbt",
                    secondLineContainer: "brand-header-GlobalNavBar__secondLineContainer--2kVhJ",
                    satelliteGeoPillWrap: "brand-header-GlobalNavBar__satelliteGeoPillWrap--yoSSp"
                },
                We = function(e) {
                    function t() {
                        var e;
                        return Object(r.a)(this, t), e = Object(i.a)(this, Object(l.a)(t).call(this)), Object(u.a)(Object(c.a)(Object(c.a)(e)), "willRenderNavLinksMultiLine", function() {
                            return e.props.displayMultiLine && "DEFAULT" === e.props.navLinksDisplayType
                        }), Object(u.a)(Object(c.a)(Object(c.a)(e)), "willRenderQuickLinksMultiLine", function() {
                            return e.props.displayMultiLine && "QUICK_LINKS_LITE" === e.props.navLinksDisplayType && !e.props.isQuickLinksTilesVisible && (!e.props.isMobile || !Object(b.featureIsEnabled)("ml_home_sticky_tab_2_rows") && (!Object(b.featureIsEnabled)("ml_home_sticky_tab_mixed") || e.state.isScrollingUp || 1 === e.props.locationId))
                        }), Object(u.a)(Object(c.a)(Object(c.a)(e)), "secondLineNavLinkClasses", function() {
                            return g()(Fe.secondLineNavLinks, Object(u.a)({}, Fe.isQuickLinks, "QUICK_LINKS_LITE" === e.props.navLinksDisplayType))
                        }), Object(u.a)(Object(c.a)(Object(c.a)(e)), "handleScroll", function() {
                            var t = window.pageYOffset,
                                a = e.previousPosition > t;
                            e.previousPosition = t;
                            var n = e.state.iconPosition.top,
                                r = e.state.iconPosition.bottom,
                                o = a !== e.state.isScrollingUp;
                            if (e.iconsCanMove) {
                                var i = e.props.navHeight,
                                    l = i - (e.sideBarTriggerRef.current ? e.sideBarTriggerRef.current.clientHeight : i / 2),
                                    s = window.pageYOffset;
                                s <= 0 ? (n = "0px", r = "auto") : i - s > 0 && s > 0 && s <= l ? (n = "".concat(s, "px"), r = "auto") : (n = "auto", r = "0px"), n === e.state.iconPosition.top && r === e.state.iconPosition.bottom || (o = !0)
                            }
                            o && e.setState({
                                isScrollingUp: a,
                                iconPosition: {
                                    top: n,
                                    bottom: r
                                }
                            })
                        }), Object(u.a)(Object(c.a)(Object(c.a)(e)), "iconsCanMove", !1), Object(u.a)(Object(c.a)(Object(c.a)(e)), "previousPosition", -1), Object(u.a)(Object(c.a)(Object(c.a)(e)), "sideBarTriggerRef", void 0), Object(u.a)(Object(c.a)(Object(c.a)(e)), "renderLogo", function() {
                            return e.props.wrapLogoWithH1 ? d.createElement("h1", null, d.createElement(Re, null)) : d.createElement(Re, null)
                        }), Object(u.a)(Object(c.a)(Object(c.a)(e)), "renderGeoPill", function() {
                            if (e.props.hasGeopill && Object(b.featureIsEnabled)("global_nav_geopill") && e.props.extraGeoPillPredicates) {
                                if (e.props.hasSatelliteGeoPill && !e.props.isTripSearchGeoPillVisible) return d.createElement("div", {
                                    className: Fe.satelliteGeoPillWrap
                                }, d.createElement(C, null));
                                if (!e.props.hasSatelliteGeoPill) return d.createElement(_.a, null)
                            }
                            return null
                        }), e.state = {
                            isScrollingUp: !1,
                            iconPosition: {
                                top: "0px",
                                bottom: "auto"
                            }
                        }, e.sideBarTriggerRef = d.createRef(), e
                    }
                    return Object(s.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.props.setBrandHeaderMounted()
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this;
                            return d.createElement(h.a.Consumer, null, function(e) {
                                t.iconsCanMove = e.usePersistentIcons && !t.props.isStickyHeader;
                                var a = g()(Fe.sideBarTrigger, Object(u.a)({}, Fe.persistentIcons, e.usePersistentIcons)),
                                    n = g()(Fe.globalNavActions, Object(u.a)({}, Fe.persistentIcons, e.usePersistentIcons)),
                                    r = {
                                        adjustHeightForTablet: 1 === e.numLines && "DEFAULT" === t.props.navLinksDisplayType,
                                        usePersistentIcons: e.usePersistentIcons
                                    },
                                    o = function e(t) {
                                        return g()(Fe.globalNavBar, Object(u.a)({}, Fe.globalNavWhite, t))
                                    }("light" === e.theme),
                                    i = function e(t, a) {
                                        var n;
                                        return a ? g()("ui_container", Fe.obsoleteBrowser, Fe.globalNavBarContainer) : g()("ui_container", Fe.globalNavBarContainer, Fe.globalNavMobileWebRollout, (n = {}, Object(u.a)(n, Fe.adjustHeightForTablet, t.adjustHeightForTablet), Object(u.a)(n, Fe.persistentIcons, t.usePersistentIcons), n))
                                    }(r, t.props.isObsoleteBrowser),
                                    l = e.usePersistentIcons ? t.state.iconPosition : null;
                                return d.createElement(d.Fragment, null, d.createElement("div", {
                                    className: o
                                }, d.createElement("div", {
                                    className: i
                                }, "T4B" === t.props.navLinksDisplayType ? d.createElement(Ie, {
                                    isMobileNav: !0
                                }) : t.props.isMobile && d.createElement("div", {
                                    ref: t.sideBarTriggerRef,
                                    style: l,
                                    className: a
                                }, d.createElement(De, null), d.createElement(ue, {
                                    sourceOnly: !0
                                })), !(!t.props.isTripSearchGeoPillVisible && t.props.isMobile) && t.renderLogo(), t.renderGeoPill(), !t.props.displayMultiLine && !t.props.isMobile && "DEFAULT" === t.props.navLinksDisplayType && d.createElement("div", {
                                    className: "is-hidden-mobile ".concat(Fe.singleLineNavLinks)
                                }, d.createElement(ue, null)), d.createElement("div", {
                                    style: l,
                                    className: n
                                }, d.createElement(ze, {
                                    liteHeader: t.props.liteHeader
                                })))), "T4B" === t.props.navLinksDisplayType ? d.createElement(Ie, null) : (!t.props.isMobile && t.willRenderNavLinksMultiLine() || t.willRenderQuickLinksMultiLine()) && d.createElement(pe.b, null, d.createElement("div", {
                                    className: t.secondLineNavLinkClasses()
                                }, d.createElement("div", {
                                    className: "ui_container ui_columns is-gapless ".concat(Fe.secondLineContainer)
                                }, d.createElement("div", {
                                    className: "ui_column is-11"
                                }, t.willRenderNavLinksMultiLine() && d.createElement(ue, null), t.willRenderQuickLinksMultiLine() && d.createElement(oe.a, {
                                    displayMode: t.props.isMobile ? "ICONS" : "TEXT"
                                })), d.createElement("div", {
                                    className: "ui_column is-1"
                                })))), d.createElement(re.a, {
                                    callback: t.handleScroll,
                                    throttle: 0
                                }))
                            })
                        }
                    }]), t
                }(d.Component),
                qe = ["HomeRebranded", "UserReviewEdit", "RentalCars", "FlightSearchResults", "CheapFlightsSearchResults", "MobileFlightSearchResults", "AirportDetail", "MobileAirportDetail", "MobileFlights", "MobileAirlineDetail", "SearchForums", "UserListDetail", "Travel", "AttractionProductDetail", "MobileAttractionProductDetail", "MobileAccommodationReviewSearch", "MobileFilters", "MobileAccommodationDetail", "MobileVacationRentalDetail", "MobileAttractionDetail", "MobileHotel_Review", "MobileShowUserReviews", "MobileShowForum", "MobileShowTopic", "MobileNewTopic", "MobileShowSpecialOffer", "MobileLocationPhotoDirectLink", "MobileReservation", "MobileRoadTrip", "MobileRoadTripGuide", "MobileGuideOverview", "MobileShowAnswersList", "MobileEateryReviewSearch", "MobileGuideDetail", "MobileRestaurantMenu", "MobileUserReview", "MobileWebUpload", "MobileQueryBBox", "MobileOpeningHours", "MobileAttractionReviewSearch", "ShoppingCoupon", "Search", "RoadTrip", "RoadTripGuide", "Vacation_Packages", "MobileVacation_Packages"].concat(Object(de.a)(Se)),
                Qe = ["Hotel_Review", "VacationRentalReview", "Restaurant_Review", "Attraction_Review", "AttractionOperatorReview"],
                Ve = Object(me.connect)(function(e) {
                    return {
                        locationId: e.page.geoId,
                        isMobile: "MOBILE" === e.meta.device.viewportCategory,
                        wrapLogoWithH1: "Home" === e.meta.initialServletName || "Tourism" === e.meta.initialServletName || "MobileTourism" === e.meta.initialServletName,
                        hasSatelliteGeoPill: "Home" === e.meta.initialServletName || "Tourism" === e.meta.initialServletName || "MobileTourism" === e.meta.initialServletName,
                        extraGeoPillPredicates: !(qe.includes(e.route.page) || Qe.includes(e.route.page) && "MOBILE" === e.meta.device.viewportCategory),
                        isQuickLinksTilesVisible: Object(be.getState)(e).quickLinkTilesVisible,
                        isTripSearchGeoPillVisible: Object(be.getState)(e).tripSearchGeoPillVisible
                    }
                }, {
                    setBrandHeaderMounted: be.ACTIONS.setBrandHeaderMounted
                })(We),
                Ke = function(e) {
                    function t(e) {
                        var a;
                        return Object(r.a)(this, t), a = Object(i.a)(this, Object(l.a)(t).call(this, e)), Object(u.a)(Object(c.a)(Object(c.a)(a)), "setHeight", function() {
                            var e = a.heightDiv.current;
                            a.setState({
                                height: e ? e.clientHeight : 0
                            })
                        }), Object(u.a)(Object(c.a)(Object(c.a)(a)), "topDiv", void 0), Object(u.a)(Object(c.a)(Object(c.a)(a)), "heightDiv", void 0), Object(u.a)(Object(c.a)(Object(c.a)(a)), "handleScroll", function() {
                            var e = a.topDiv.current;
                            e && window.pageYOffset > e.getBoundingClientRect().top + window.pageYOffset !== a.state.scrolledPastTop && a.setState({
                                scrolledPastTop: !a.state.scrolledPastTop
                            })
                        }), Object(u.a)(Object(c.a)(Object(c.a)(a)), "smartBannerDidClose", function() {
                            return a.setState({
                                hasSmartBanner: !1
                            })
                        }), a.state = {
                            scrolledPastTop: !1,
                            hasSmartBanner: !e.loading && !e.error && e.adjustForSmartBanner,
                            height: 0,
                            heightInitiallySet: !1
                        }, a.topDiv = d.createRef(), a.heightDiv = d.createRef(), a
                    }
                    return Object(s.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            F()("global-nav-component").on("smart-banner-did-close", this.smartBannerDidClose), this.props.hideLogo, this.handleScroll()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function e() {
                            this.state.heightInitiallySet || (this.setHeight(), this.setState({
                                heightInitiallySet: !0
                            }))
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t, a = this,
                                n = function e(t, a, n) {
                                    return {
                                        theme: t ? "light" : "dark",
                                        numLines: a,
                                        usePersistentIcons: n
                                    }
                                }(this.props.hasWhiteBackground, this.props.numLines, this.props.usePersistentIcons),
                                r = function e(t, a, n, r, o, i) {
                                    var l;
                                    return g()((l = {}, Object(u.a)(l, "brand-header-GlobalNav__globalNavHome--3Ezzs", i), Object(u.a)(l, "brand-header-GlobalNav__globalNavPersistent--DaPKG", t), Object(u.a)(l, "brand-header-GlobalNav__globalNavScrolling--35eFe", !t && r), Object(u.a)(l, "brand-header-GlobalNav__smartBannerTop--14k0u", a && n), Object(u.a)(l, "brand-header-GlobalNav__fixed--j3Toz", t && o), Object(u.a)(l, "brand-header-GlobalNav__scrolledToTop--3___y", t && !o), l))
                                }(this.props.isPersistentHeader, this.props.adjustForSmartBanner, this.state.hasSmartBanner, this.props.isMobileBreakpoint, this.state.scrolledPastTop, this.props.hasHeroImage);
                            return this.props.isPersistentHeader && (t = this.props.isMobileBreakpoint ? 50 : 60), d.createElement(h.a.Provider, {
                                value: n
                            }, d.createElement("div", {
                                ref: this.topDiv,
                                style: {
                                    height: t
                                }
                            }, d.createElement("div", {
                                className: r
                            }, d.createElement("div", {
                                ref: this.heightDiv
                            }, d.createElement(Ve, {
                                navLinksDisplayType: this.props.navLinksDisplayType,
                                isObsoleteBrowser: this.props.isObsoleteBrowser,
                                navHeight: this.state.height,
                                hasGeopill: this.props.showGeopill,
                                displayMultiLine: this.props.numLines >= 2,
                                liteHeader: this.props.liteHeader,
                                isStickyHeader: this.props.isPersistentHeader
                            })))), d.createElement(re.a, {
                                callback: function e() {
                                    a.handleScroll(), a.setHeight()
                                }
                            }))
                        }
                    }]), t
                }(d.Component),
                Ye = ["AddListing", "RegistrationController", "Search", "UpdateListing", "UserReview", "UserReviewEdit", "UserReviewEdit"];
            t.default = Object(m.bind)(function(e, t) {
                var a = t("/data/1.0/brand/header?".concat(function e(t) {
                    var a = t.meta,
                        n = a.initialServletName,
                        r = a.device,
                        o = {
                            servlet: n,
                            viewportCategory: t.meta.forceFullSite ? "DESKTOP" : r.viewportCategory,
                            geoId: t.route.geo ? t.route.geo : null,
                            pageName: t.route.page,
                            isTaReferrer: t.meta.isTaReferrer ? "true" : "false",
                            latitude: t.route.latitude,
                            longitude: t.route.longitude
                        },
                        i = {};
                    return Object.keys(o).forEach(function(e) {
                        null != o[e] && (i[e] = o[e])
                    }), new URLSearchParams(i)
                }(e).toString()));
                return Re.stage(e, t), ue.stage(e, t), oe.a.stage(e, t), _.a.stage(e, t), C.stage(e, t), Object(b.featureIsEnabled)("shopping_cart_desktop") && H.stage(e, t), ne.stage(e, t), Q.stage(e, t), De.stage(e, t), Ie.stage(e, t),
                    function(e) {
                        var t, r = a.get(),
                            o = "IE" === e.meta.device.browser.family && e.meta.device.browser.majorVersion <= 10;
                        t = "Home" === e.route.page ? "QUICK_LINKS_LITE" : Se.includes(e.route.page) ? "T4B" : Ye.includes(e.route.page) ? "NONE" : "DEFAULT";
                        var i = {};
                        return r.data && (i = {
                            showGeopill: r.data.showGeopill,
                            numLines: r.data.numLines,
                            isPersistentHeader: r.data.isPersistentHeader && !("MOBILE" === e.meta.device.viewportCategory && "Home" !== e.meta.initialServletName && "MobileTourism" !== e.meta.initialServletName) && r.data.socialEnabled,
                            navLinksDisplayType: t,
                            usePersistentIcons: r.data.usePersistentIcons,
                            adjustForSmartBanner: r.data.adjustForSmartBanner,
                            hideLogo: r.data.hideLogo,
                            liteHeader: r.data.liteHeader
                        }), Object(n.a)({
                            loading: r.loading,
                            hasWhiteBackground: "Home" === e.route.page,
                            hasHeroImage: "Home" === e.route.page,
                            isMobileBreakpoint: "MOBILE" === e.meta.device.viewportCategory,
                            error: r.error,
                            isObsoleteBrowser: o
                        }, i)
                    }
            })(Object(v.b)()(Ke))
        },
        "@ta/brand.global-nav-context": function(t, a) {
            t.exports = e
        },
        "@ta/brand.global-nav-state": function(e, a) {
            e.exports = t
        },
        "@ta/brand.trip-search-geopill-flyout": function(e, t) {
            e.exports = a
        },
        "@ta/common.cdn": function(e, t) {
            e.exports = n
        },
        "@ta/events.event-boundary": function(e, t) {
            e.exports = r
        },
        "@ta/overlays.attached-arrow-overlay": function(e, t) {
            e.exports = o
        },
        "@ta/overlays.fullscreen-overlay": function(e, t) {
            e.exports = i
        },
        "@ta/overlays.managers": function(e, t) {
            e.exports = l
        },
        "@ta/overlays.modal": function(e, t) {
            e.exports = s
        },
        "@ta/overlays.pieces": function(e, t) {
            e.exports = c
        },
        "@ta/overlays.popover": function(e, t) {
            e.exports = u
        },
        "@ta/overlays.responsive-attached-overlay": function(e, t) {
            e.exports = d
        },
        "@ta/overlays.slide-in": function(e, t) {
            e.exports = m
        },
        "@ta/social.login-gate": function(e, t) {
            e.exports = b
        },
        "@ta/social.onboarding-state": function(e, t) {
            e.exports = p
        },
        "@ta/styleguide.avatar": function(e, t) {
            e.exports = g
        },
        "@ta/styleguide.button": function(e, t) {
            e.exports = v
        },
        "@ta/styleguide.icon": function(e, t) {
            e.exports = f
        },
        "@ta/styleguide.loading": function(e, t) {
            e.exports = h
        },
        "@ta/tracking.interactions": function(e, t) {
            e.exports = _
        },
        "common/Radio": function(e, t) {
            e.exports = j
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = k
        }
    })
});
//# sourceMappingURL=brand.header.8df2ce2792.js.map