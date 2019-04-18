define("@ta/brand.trip-search-geopill-flyout", ["@ta/common.sessionstorage", "@ta/common.typeahead", "@ta/input.text-input", "@ta/list.navigable-list", "@ta/overlays.fullscreen-overlay", "@ta/overlays.managers", "@ta/overlays.pieces", "@ta/social.educational-tooltips", "@ta/styleguide.loading", "@ta/common.global"], function(e, t, n, o, a, r, i, c, s, l) {
    return function(e) {
        var t = {};

        function n(o) {
            if (t[o]) return t[o].exports;
            var a = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(a.exports, a, a.exports, n), a.l = !0, a.exports
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
                for (var a in e) n.d(o, a, function(t) {
                    return e[t]
                }.bind(null, a));
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
        }, n.p = "", n(n.s = "./packages/brand/trip-search-geopill-flyout/trip-search-geopill-flyout.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, t, n) {
            "use strict";

            function o(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, t, n) {
            "use strict";

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, t, n) {
            "use strict";

            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function a(e, t, n) {
                return t && o(e.prototype, t), n && o(e, n), e
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, t, n) {
            "use strict";

            function o(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, t, n) {
            "use strict";

            function o(e) {
                return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(e)
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Object(o.a)(e, t)
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), a.forEach(function(t) {
                        Object(o.a)(e, t, n[t])
                    })
                }
                return e
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function r(e, t) {
                return !t || "object" !== Object(o.a)(t) && "function" != typeof t ? Object(a.a)(e) : t
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, t, n) {
            "use strict";

            function o(e, t) {
                return (o = Object.setPrototypeOf || function e(t, n) {
                    return t.__proto__ = n, t
                })(e, t)
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, t, n) {
            "use strict";

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(e)
            }

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" === o(Symbol.iterator) ? function e(t) {
                    return o(t)
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : o(t)
                })(e)
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "./node_modules/react-redux/es/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/brand/geopill-util/legacyBuildUrl.jsx": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            });
            var o = n("./packages/common/features/features.jsx"),
                a = function e(t) {
                    var n = t.match(/(\/[\w_]+).*/);
                    return n && n.length > 1 ? n[1] : null
                },
                r = function e(t, n) {
                    var o, a = window.location.pathname,
                        r = window.location.search,
                        i = a.match(/\/(\w+)/)[1].replace("MobileRestaurantSearch", "Restaurants").replace("Attraction_Products", "Attractions").replace(/(Hotel|Attraction|Restaurant)_Review/, "$1s").replace(/(Restaurants|Attractions|Hotels)Near/, "$1").replace(/Mobile(Hotel|Restaurant)Search/, "$1s").replace(/(HotelHighlight|SmartDeals|HotelsList|MobileMetaHac|LastMinute)/, "Hotels");
                    return -1 !== i.indexOf("MobileNearby") ? o = "".concat(i, "?j=distLow") : ["Hotels", "Restaurants", "Attractions"].indexOf(i) >= 0 ? o = "/MobileNearby".concat(i, "?j=distLow") : ["VacationRentals", "MobileVacationRentalSearch"].indexOf(i) >= 0 ? o = "/MobileVacationRentalSearch?j=distLow" : "Search" === i && (o = "".concat((a + r).replace(/&?(latitude|longitude|searchNearby|geo)=[^&]*/g, ""), "&searchNearby=true")), o ? "".concat(o, "&latitude=").concat(t, "&longitude=").concat(n) : "/"
                };
            t.a = function e(t, n) {
                if (!t || 0 === t.length) return "/";
                var r = window.location.pathname,
                    i = a(r),
                    c = r.replace("_Review", "s").replace(/\/(ForumFAQAdmin|ForumItineraryAdmin|ShowTopic)-g\d+-.*/, "/ShowForum-g").replace(/-g.*/, "-g".concat(t)).replace(/\/(MobileRestaurantSearch).*/, "/$1-g".concat(t)).replace(/\/AttractionProductDetail.*/, "/Attraction_Products-g".concat(t)).replace(/\/HotelsList.*/, "/Hotels-g".concat(t)).replace(/\/MobileNearby(\w+).*/, "/$1-g".concat(t)).replace(/\/MobileMetaHac/, "/Hotels-g".concat(t)).replace(/\/Neighborhood-g.*/, "/NeighborhoodList-g".concat(t));
                "/Search" === i && (c = function e(t, n) {
                    var o = new URLSearchParams(document.location.search.substring(1)).get("q");
                    if (o) {
                        var a = new URLSearchParams({
                            q: o,
                            geo: n
                        }).toString();
                        return "/Search?".concat(a)
                    }
                    return t
                }(c, t));
                var s = a(c);
                return (c === r || Object(o.featureIsEnabled)("ml_home_tourism_about_tab") && i === s) && (c = n ? "".concat(n, "-g").concat(t) : "/Home-g".concat(t)), c
            }
        },
        "./packages/brand/trip-search-geopill-flyout/trip-search-geopill-flyout.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var o, a = n("./node_modules/react/index.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                p = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                d = n("./node_modules/react-redux/es/index.js"),
                m = n("@ta/overlays.fullscreen-overlay"),
                b = n.n(m),
                f = n("@ta/overlays.managers"),
                h = n("@ta/overlays.pieces"),
                g = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                y = n("./packages/events/keyboard-event-listener/KeyboardEventListener.jsx"),
                v = n("./packages/common/is-visible/is-visible.jsx"),
                j = function(e) {
                    function t(e) {
                        var n;
                        return Object(r.a)(this, t), n = Object(c.a)(this, Object(s.a)(t).call(this, e)), Object(p.a)(Object(u.a)(Object(u.a)(n)), "overlayProps", function() {
                            var e = n.props.target,
                                t = {
                                    transitionProperties: [{
                                        property: "top",
                                        timing: n.props.transitionTiming
                                    }, {
                                        property: "left",
                                        timing: n.props.transitionTiming
                                    }, {
                                        property: "transform",
                                        timing: n.props.transitionTiming
                                    }, {
                                        property: "opacity",
                                        timing: n.props.transitionTiming
                                    }]
                                };
                            if (("exited" === n.props.transitionStatus || "exiting" === n.props.transitionStatus) && e) {
                                var o = e.getBoundingClientRect();
                                return Object(g.a)({}, t, {
                                    opacity: "0",
                                    position: {
                                        position: "absolute",
                                        top: "".concat(o.top + window.pageYOffset + e.clientHeight / 2, "px"),
                                        left: "".concat(o.left + e.clientWidth / 2, "px"),
                                        transform: "translate(-10%, -10%) scale(.2, .2)",
                                        transformOrigin: "0 0"
                                    }
                                })
                            }
                            return Object(g.a)({}, t, {
                                opacity: "1",
                                position: {
                                    position: "absolute",
                                    top: "".concat(window.pageYOffset + n.props.offsetTop, "px"),
                                    left: "50%",
                                    transform: "translate(-50%, 0) scale(1, 1)",
                                    transformOrigin: "0 0"
                                }
                            })
                        }), Object(p.a)(Object(u.a)(Object(u.a)(n)), "checkIfScrolledAway", function() {
                            n.state.mounted && n.props.closeOnScrollAway && !n.state.closing && (n.props.close(), n.setState({
                                closing: !0
                            }))
                        }), Object(p.a)(Object(u.a)(Object(u.a)(n)), "contentsWrapRef", void 0), n.state = {
                            closing: !1,
                            mounted: !1
                        }, n.contentsWrapRef = a.createRef(), n
                    }
                    return Object(l.a)(t, e), Object(i.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.setState({
                                mounted: !0
                            })
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            this.setState({
                                mounted: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return a.createElement(h.Backdrop, {
                                close: this.props.close
                            }, a.createElement(h.Overlay, this.overlayProps(), a.createElement(v.VisibilityObserver, {
                                onInvisible: this.checkIfScrolledAway,
                                node: this.contentsWrapRef
                            }, a.createElement("div", {
                                ref: this.contentsWrapRef
                            }, this.props.overlayContents))), a.createElement(y.a, {
                                keyName: "Escape",
                                callback: this.props.close
                            }))
                        }
                    }]), t
                }(a.Component),
                O = Object(d.connect)(function(e) {
                    return {
                        closeOnScrollAway: "DESKTOP" === e.meta.device.viewportCategory && "DESKTOP" === e.meta.device.userAgentCategory
                    }
                })(j),
                S = {
                    container: "brand-trip-search-geopill-flyout-geoPillCommon__container--mKYqH",
                    overlayContents: "brand-trip-search-geopill-flyout-geoPillCommon__overlayContents--368d2"
                },
                k = (o = 0, function() {
                    return "targeted_flyout_".concat(o += 1)
                }),
                _ = function(e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
                        return n = Object(c.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(i))), Object(p.a)(Object(u.a)(Object(u.a)(n)), "state", {
                            name: k(),
                            openedAt: 0
                        }), Object(p.a)(Object(u.a)(Object(u.a)(n)), "overlayContent", function(e) {
                            return a.createElement("div", {
                                className: S.overlayContents
                            }, n.props.overlayContents, a.createElement(h.CloseX, {
                                close: e
                            }))
                        }), n
                    }
                    return Object(l.a)(t, e), Object(i.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this,
                                n = this.props.animate ? 150 : 0;
                            return a.createElement(f.Opener, {
                                name: this.state.name
                            }, function(e, o) {
                                var r = function n() {
                                    t.setState({
                                        openedAt: window.pageYOffset
                                    }), e()
                                };
                                return a.createElement(f.Closer, null, function(e) {
                                    return a.createElement(h.Target, null, function(i, c) {
                                        return a.createElement(a.Fragment, null, a.createElement("div", {
                                            onClick: o ? e : r
                                        }, t.props.children(i)), t.props.fullscreen ? a.createElement(f.Global, {
                                            name: t.state.name
                                        }, a.createElement(a.Fragment, null, a.createElement(b.a, null, t.overlayContent(e)))) : a.createElement(f.Global, {
                                            name: t.state.name,
                                            transitionDuration: n
                                        }, a.createElement(h.OverlayConsumer, null, function(o) {
                                            return a.createElement(O, {
                                                offsetTop: t.props.offsetTop,
                                                transitionStatus: o.transitionStatus,
                                                close: e,
                                                target: c,
                                                overlayContents: t.overlayContent(e),
                                                openedAt: t.state.openedAt,
                                                transitionTiming: n
                                            })
                                        })))
                                    })
                                })
                            })
                        }
                    }]), t
                }(a.Component);
            Object(p.a)(_, "defaultProps", {
                animate: !0
            });
            var w = Object(d.connect)(function(e) {
                    return {
                        fullscreen: "MOBILE" === e.meta.device.viewportCategory,
                        animate: "DESKTOP" === e.meta.device.userAgentCategory
                    }
                })(_),
                C = n("./packages/common/i18n/i18n.jsx"),
                E = n("./packages/common/features/features.jsx"),
                x = n("./packages/common/tracking/tracking.jsx"),
                T = n("./packages/common/geolocation/geolocation.jsx"),
                L = n("@ta/styleguide.loading"),
                R = n("@ta/input.text-input"),
                P = n("@ta/common.typeahead"),
                I = n("./packages/brand/geopill-util/legacyBuildUrl.jsx"),
                N = n("@ta/list.navigable-list"),
                A = {
                    loading: "brand-trip-search-geopill-flyout-GeoScopedResults__loading--2fbr6",
                    topSeparator: "brand-trip-search-geopill-flyout-GeoScopedResults__topSeparator--3gjtC"
                },
                M = function(e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
                        return n = Object(c.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(i))), Object(p.a)(Object(u.a)(Object(u.a)(n)), "createResultItems", function() {
                            var e = [],
                                t = n.props.results[P.GeoNaviFetcherId],
                                o = n.props.results[P.TypeaheadJsonFetcherId],
                                r = n.props.results[P.RecentlyViewedFetcherId],
                                i = n.props.results[P.GeoThemeFetcherId];
                            return n.props.enableGeoLocation && !o && e.push(function(e, t) {
                                return a.createElement(P.GoNearbyResult, {
                                    onSelection: n.props.onSelection,
                                    onMouseMove: t,
                                    active: e,
                                    key: "go_nearby"
                                })
                            }), n.props.enableWorldwide && !o && e.push(function(e, t) {
                                return a.createElement(P.GoWorldwideResult, {
                                    onSelection: n.props.onSelection,
                                    onMouseMove: t,
                                    active: e,
                                    key: "go_worldwide"
                                })
                            }), o && o.length ? e = e.concat(o.map(function(e) {
                                return function(t, o) {
                                    return "SEARCH" === e.data_type ? a.createElement(P.RescueResult, {
                                        result: e,
                                        tracker: n.props.tracker,
                                        onSelection: n.props.onSelection,
                                        onMouseMove: o,
                                        active: t,
                                        key: "typeahead_rescue"
                                    }) : a.createElement(P.TypeaheadJsonResult, {
                                        result: e,
                                        tracker: n.props.tracker,
                                        onSelection: n.props.onSelection,
                                        onMouseMove: o,
                                        active: t,
                                        key: "typeahead_".concat(e.value)
                                    })
                                }
                            })) : (t && t.length > 0 && (e = e.concat(t.map(function(e) {
                                return function(t, o) {
                                    return a.createElement(P.GeoNaviResult, {
                                        result: e,
                                        onSelection: n.props.onSelection,
                                        onMouseMove: o,
                                        active: t,
                                        key: "geonavi_".concat(e.geoId)
                                    })
                                }
                            }))), r ? r.length > 0 ? (e.push(function() {
                                return a.createElement("div", {
                                    className: A.topSeparator,
                                    key: "recent_section_title"
                                }, a.createElement(P.SectionTitle, {
                                    title: Object(C.localize)("dual_search_recently_viewed_all_caps")
                                }))
                            }), e = e.concat(r.map(function(e) {
                                return function(t, o) {
                                    return a.createElement("div", {
                                        "data-test-geopill-result": !0,
                                        key: "recent_".concat(e.location_id)
                                    }, a.createElement(P.RecentlyViewedResult, {
                                        result: e,
                                        tracker: n.props.tracker,
                                        onSelection: n.props.onSelection,
                                        onMouseMove: o,
                                        active: t
                                    }))
                                }
                            }))) : 0 === r.length && i && i.length && (e.push(function() {
                                return a.createElement("div", {
                                    className: A.topSeparator,
                                    key: "popular_section_title"
                                }, a.createElement(P.SectionTitle, {
                                    title: Object(C.localize)("mx_geo_picker_popular_destinations")
                                }))
                            }), e = e.concat(i.map(function(e) {
                                return function(t, o) {
                                    return a.createElement("div", {
                                        "data-test-geopill-result": !0,
                                        key: "popular_".concat(e.location_id)
                                    }, a.createElement(P.GeoThemeResult, {
                                        result: e,
                                        tracker: n.props.tracker,
                                        onSelection: n.props.onSelection,
                                        onMouseMove: o,
                                        active: t
                                    }))
                                }
                            }))) : e.push(function() {
                                return a.createElement("div", {
                                    className: A.loading,
                                    key: "recent_loader"
                                }, a.createElement(L.LoadingSpinner, {
                                    size: "small"
                                }))
                            })), e
                        }), n
                    }
                    return Object(l.a)(t, e), Object(i.a)(t, [{
                        key: "render",
                        value: function e() {
                            return a.createElement(N.NavigableList, null, this.createResultItems())
                        }
                    }]), t
                }(a.Component);
            Object(p.a)(M, "defaultProps", {
                onSelection: void 0,
                enableGeoLocation: void 0
            });
            var G = M,
                U = function e(t) {
                    return function(e) {
                        var n = e.value;
                        return n || (n = e.location_id), Number(n) !== t
                    }
                },
                D = function(e) {
                    function t(e) {
                        var n;
                        return Object(r.a)(this, t), n = Object(c.a)(this, Object(s.a)(t).call(this, e)), Object(p.a)(Object(u.a)(Object(u.a)(n)), "onInteractionStart", function() {
                            var e = Date.now();
                            n.typeaheadJsonFetcher.setAdditionalParams({
                                startTime: String(e)
                            }), n.typeaheadTracking.setInteractionStart(e), n.typeaheadTracking.trackInteractionStart()
                        }), Object(p.a)(Object(u.a)(Object(u.a)(n)), "onSelection", function(e, t) {
                            if (n.props.onSelection && n.props.onSelection(e, t), !(e.isDefaultPrevented && "function" == typeof e.isDefaultPrevented && e.isDefaultPrevented() || e.defaultPrevented)) {
                                var o = function e(t, o, a, r) {
                                        var i = "click" === t ? "click" : "enter",
                                            c = a ? "QuickLinks" : "HomeNav_".concat(n.props.pageName || ""),
                                            s = function e(t) {
                                                return "recent_location_id" === t ? "submit_recent" : "geo_theme_location_id" === t ? "submit_popular" : "worldwide" === t ? "submit_worldwide" : "rescue" === t ? "submit_search" : "nearby" === t ? "submit_nearby" : "submit"
                                            }(o),
                                            l = a ? "GeoPicker | ".concat(a, " | ").concat(i) : "GeoPicker | ".concat(i),
                                            u = r || "/Home";
                                        Object(x.trackEventCookie)({
                                            module: c,
                                            action: s,
                                            context: l,
                                            value: 0,
                                            destinationUrl: u
                                        })
                                    },
                                    a = e.type,
                                    r = function e() {
                                        n.props.pageTransitionCallback && n.props.pageTransitionCallback(), o(a, "worldwide", n.props.trackingLabel, "/Home"), window.location = "/Home"
                                    };
                                if ("location_id" === t.type || ["recent_location_id", "geo_theme_location_id"].includes(t.type) && t.value) {
                                    n.props.pageTransitionCallback && n.props.pageTransitionCallback();
                                    var i = String(t.value);
                                    if (n.props.geoUrlTemplate) {
                                        var c = encodeURI(n.props.geoUrlTemplate.replace(/\$\{geoId\}/, encodeURIComponent(i)));
                                        return o(a, t.type, n.props.trackingLabel, c), void(window.location = c)
                                    }
                                    var s = Object(I.a)(i, "/Home");
                                    o(a, t.type, n.props.trackingLabel, s), window.location = s
                                } else if ("nearby" === t.type) n.props.pageTransitionCallback && n.props.pageTransitionCallback(), Object(T.c)(function(e, r) {
                                    if (n.props.latLngUrlTemplate) {
                                        var i = encodeURI(n.props.latLngUrlTemplate.replace(/\$\{latitude\}/, encodeURIComponent("".concat(e))).replace(/\$\{longitude\}/, encodeURIComponent("".concat(r))));
                                        return o(a, t.type, n.props.trackingLabel, i), void(window.location = i)
                                    }
                                    var c = "/?latitude=".concat(encodeURIComponent("".concat(e)), "&longitude=").concat(encodeURIComponent("".concat(r)));
                                    o(a, t.type, n.props.trackingLabel, c), window.location = c
                                }, function() {
                                    alert(Object(C.localize)("mw_js_positionPermissionDenied")), r()
                                });
                                else if ("worldwide" === t.type) r();
                                else if ("geonavi" === t.type && t.value) n.setState({
                                    typeaheadContext: {
                                        geoNaviId: String(t.value)
                                    }
                                });
                                else if ("rescue" === t.type) {
                                    n.props.pageTransitionCallback && n.props.pageTransitionCallback();
                                    var l = function e(t, n, o) {
                                        if (!t) return "/Home";
                                        var a = "".concat(t, "&searchSessionId=").concat(String(o));
                                        return n ? "".concat(a, "&geo=").concat(String(n)) : a
                                    }(t.value, n.props.geoId, n.props.searchSessionId);
                                    o(a, t.type, n.props.trackingLabel, l), window.location = l
                                }
                            }
                        }), Object(p.a)(Object(u.a)(Object(u.a)(n)), "typeaheadTracking", void 0), Object(p.a)(Object(u.a)(Object(u.a)(n)), "recentlyViewedFetcher", new P.RecentlyViewedFetcher({
                            categories: ["geos"],
                            limit: 7
                        })), Object(p.a)(Object(u.a)(Object(u.a)(n)), "geoThemeFetcher", new P.GeoThemeFetcher({
                            theme: 0,
                            limit: 7
                        })), Object(p.a)(Object(u.a)(Object(u.a)(n)), "typeaheadJsonFetcher", new P.TypeaheadJsonFetcher({
                            types: ["geo"],
                            name_depth: 1,
                            details: !0,
                            legacy_format: !0,
                            urlList: !1,
                            rescue: !0,
                            max: 8,
                            uiOrigin: n.props.uiOrigin,
                            source: n.props.uiOrigin,
                            searchSessionId: n.props.searchSessionId
                        })), Object(p.a)(Object(u.a)(Object(u.a)(n)), "geoNaviFetcher", n.props.enableGeoNavi ? new P.GeoNaviFetcher({}) : void 0), Object(p.a)(Object(u.a)(Object(u.a)(n)), "fetchers", void 0), Object(p.a)(Object(u.a)(Object(u.a)(n)), "filters", [U(n.props.geoId)]), n.typeaheadTracking = new P.TypeaheadTracking(e.uiOrigin, e.searchSessionId), n.fetchers = [n.recentlyViewedFetcher, n.geoThemeFetcher, n.typeaheadJsonFetcher], n.geoNaviFetcher && n.fetchers.unshift(n.geoNaviFetcher), n.state = {
                            typeaheadContext: {
                                geoNaviId: "1"
                            }
                        }, n
                    }
                    return Object(l.a)(t, e), Object(i.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this;
                            return a.createElement(P.Typeahead, {
                                fetchers: this.fetchers,
                                filters: this.filters,
                                context: this.state.typeaheadContext,
                                runOnInit: !0
                            }, function(e, n) {
                                return a.createElement(a.Fragment, null, a.createElement("div", {
                                    className: "brand-trip-search-geopill-flyout-GeoScopedTypeahead__input_container--1YGE6"
                                }, a.createElement(P.TypeaheadTextInput, {
                                    inputComponentType: R.UnderlinedTextInput,
                                    placeholder: t.props.placeholder,
                                    searchDelay: 50,
                                    onQueryChange: n,
                                    onInteractionStart: t.onInteractionStart,
                                    focusOnMount: !0,
                                    fontSize: t.props.smallInputText ? "18px" : "24px",
                                    lineHeight: "1.7em"
                                })), a.createElement(G, {
                                    results: e,
                                    tracker: t.typeaheadTracking,
                                    onSelection: t.onSelection,
                                    enableGeoLocation: t.props.enableGeoLocation,
                                    enableWorldwide: t.props.enableWorldwide
                                }))
                            })
                        }
                    }]), t
                }(a.Component);
            Object(p.a)(D, "defaultProps", {
                placeholder: void 0,
                uiOrigin: void 0,
                enableGeoLocation: !1,
                enableWorldwide: !1,
                enableGeoNavi: !1
            });
            var H = Object(d.connect)(function(e) {
                    return {
                        pageName: e.meta.initialServletName,
                        smallInputText: "MOBILE" === e.meta.device.viewportCategory
                    }
                })(D),
                F = function(e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
                        return n = Object(c.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(a))), Object(p.a)(Object(u.a)(Object(u.a)(n)), "state", {
                            isTransitioning: !1
                        }), Object(p.a)(Object(u.a)(Object(u.a)(n)), "onSelection", function(e, t) {
                            if (("url" === t.type || "recent_url" === t.type) && t.value) {
                                var o = "url" === t.type ? "submit" : "submit_recent",
                                    a = "string" == typeof t.value ? t.value : "";
                                Object(x.trackEventCookie)({
                                    module: "HomeNav_".concat(n.props.servletName || ""),
                                    action: o,
                                    context: "GeoPicker",
                                    value: 0,
                                    destinationUrl: a
                                })
                            }
                            n.props.onSelection && n.props.onSelection()
                        }), n
                    }
                    return Object(l.a)(t, e), Object(i.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this;
                            return a.createElement(a.Fragment, null, a.createElement(H, {
                                placeholder: Object(C.localize)("mobile_discovery_where_to"),
                                geoId: this.props.geo,
                                searchSessionId: this.props.searchSessionId,
                                uiOrigin: this.props.uiOrigin,
                                onSelection: this.onSelection,
                                enableGeoLocation: this.props.enableGeoLocation && Object(T.a)(),
                                enableWorldwide: this.props.enableWorldwide,
                                enableGeoNavi: Object(E.featureIsEnabled)("mobile_web_feature_dual_search_geo_navi"),
                                latLngUrlTemplate: this.props.latLngUrlTemplate,
                                geoUrlTemplate: this.props.geoUrlTemplate,
                                trackingLabel: this.props.trackingLabel,
                                pageTransitionCallback: function e() {
                                    return t.setState({
                                        isTransitioning: !0
                                    })
                                }
                            }), this.state.isTransitioning && a.createElement("div", {
                                className: "brand-trip-search-geopill-flyout-GeoPillSearch__transitionLoadingOverlay--2Mkn5"
                            }, a.createElement(L.LoadingSpinner, null)))
                        }
                    }]), t
                }(a.Component);
            Object(p.a)(F, "defaultProps", {
                enableGeoLocation: !0,
                onSelection: void 0
            });
            var W = Object(d.connect)(function(e) {
                    var t = e.route.geo,
                        n = (e.tracking || {}).searchSessionId,
                        o = e.meta,
                        a = o.initialRelativeUrl,
                        r = o.initialServletName,
                        i = o.device.viewportCategory;
                    return {
                        geo: t,
                        searchSessionId: n,
                        uiOrigin: a ? a.substring(1).trim() ? a.substring(1).replace(/-.*/, "_geopicker") : "Home_geopicker" : "geopicker",
                        servletName: r,
                        viewportCategory: i,
                        enableWorldwide: void 0 !== e.route.latitude || t
                    }
                })(F),
                z = function e(t) {
                    return a.createElement(w, {
                        overlayContents: a.createElement("div", {
                            className: S.container,
                            "data-test-geopill-contents": !0
                        }, a.createElement(W, {
                            offsetTop: 150,
                            latLngUrlTemplate: t.latLngUrlTemplate,
                            geoUrlTemplate: t.geoUrlTemplate,
                            enableGeoLocation: t.enableGeoLocation || !t.trackingLabel || "vp" !== t.trackingLabel,
                            trackingLabel: t.trackingLabel
                        })),
                        offsetTop: 150
                    }, function(e) {
                        return t.children(e)
                    })
                };
            z.defaultProps = {
                latLngUrlTemplate: void 0,
                geoUrlTemplate: void 0,
                trackingLabel: void 0,
                enableGeoLocation: !1
            };
            var B = z,
                V = n("@ta/social.educational-tooltips"),
                $ = n("@ta/common.sessionstorage"),
                K = n.n($),
                J = n("./packages/events/window-resize/WindowResize.jsx"),
                Y = n("./packages/events/window-scroll/WindowScroll.jsx"),
                q = {
                    overlayContents: "brand-trip-search-geopill-flyout-GeoPillRedCarpetContents__overlayContents--MBsrM"
                },
                Q = 300,
                X = 150,
                Z = 74,
                ee = 150,
                te = function(e) {
                    function t(e) {
                        var n;
                        return Object(r.a)(this, t), n = Object(c.a)(this, Object(s.a)(t).call(this, e)), Object(p.a)(Object(u.a)(Object(u.a)(n)), "overlayContent", function(e, t) {
                            return a.createElement("div", {
                                className: q.overlayContents,
                                style: {
                                    height: n.state.height
                                }
                            }, a.createElement("div", {
                                ref: n.innerContentsRef
                            }, n.props.overlayContents, t && a.createElement(h.CloseX, {
                                close: e,
                                testAttribute: "geopill-red-carpet-close"
                            })))
                        }), Object(p.a)(Object(u.a)(Object(u.a)(n)), "overlayProps", function(e, t) {
                            if (!t || !document || !document.documentElement) return {
                                position: {}
                            };
                            var o = {
                                transitionProperties: [{
                                    property: "right",
                                    timing: X,
                                    delay: "exiting" === e || "entered" === e ? Q : 0
                                }, {
                                    property: "left",
                                    timing: X,
                                    delay: "exiting" === e || "entered" === e ? Q : 0
                                }, {
                                    property: "opacity",
                                    timing: X,
                                    delay: "exiting" === e || "entered" === e ? Q : 0
                                }]
                            };
                            return "exited" === e || "exiting" === e ? Object(g.a)({}, o, {
                                opacity: "0",
                                position: {
                                    position: "absolute",
                                    top: "".concat(ee, "px"),
                                    left: n.state.offsetLeft,
                                    right: n.state.offsetRight,
                                    transform: "translate(0%, 0) scale(1, 1)"
                                }
                            }) : Object(g.a)({}, o, {
                                opacity: "1",
                                position: {
                                    position: "absolute",
                                    top: "".concat(ee, "px"),
                                    left: n.state.offsetLeft,
                                    right: n.state.offsetRight,
                                    transform: "translate(0%, 0) scale(1, 1)"
                                }
                            })
                        }), Object(p.a)(Object(u.a)(Object(u.a)(n)), "innerContentsRef", void 0), Object(p.a)(Object(u.a)(Object(u.a)(n)), "timer", void 0), Object(p.a)(Object(u.a)(Object(u.a)(n)), "bodyEl", void 0), n.bodyEl = document && document.documentElement ? document.documentElement : null, n.state = {
                            height: "".concat(Z, "px"),
                            readyToShrink: !1,
                            closing: !1,
                            offsetLeft: "50vw",
                            offsetRight: "50vw",
                            mounted: !1
                        }, n.innerContentsRef = a.createRef(), n.timer = null, n
                    }
                    return Object(l.a)(t, e), Object(i.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.setState({
                                mounted: !0
                            })
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function e(t, n) {
                            var o = this,
                                a = this.innerContentsRef.current;
                            "exited" === t.transitionStatus && "entering" === this.props.transitionStatus && a && (this.setLeftRightOffsetState(), this.timer = setTimeout(function() {
                                o.setState({
                                    height: "".concat(a.clientHeight, "px")
                                })
                            }, Q)), "entering" === t.transitionStatus && "entered" === this.props.transitionStatus && this.setState({
                                height: "auto"
                            }), "entered" === t.transitionStatus && "exiting" === this.props.transitionStatus && !n.readyToShrink && a && (this.setState({
                                height: "".concat(a.clientHeight, "px"),
                                readyToShrink: !0
                            }), this.setLeftRightOffsetState()), this.state.readyToShrink && "exiting" === this.props.transitionStatus && this.state.readyToShrink && !n.readyToShrink && this.setState({
                                height: "".concat(Z, "px"),
                                readyToShrink: !1
                            })
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            this.setState({
                                mounted: !1
                            }), this.timer && (clearTimeout(this.timer), this.timer = null)
                        }
                    }, {
                        key: "setLeftRightOffsetState",
                        value: function e() {
                            var t = this.getLeftRightOffset(),
                                n = t.offsetLeft,
                                o = t.offsetRight;
                            this.setState({
                                offsetLeft: n,
                                offsetRight: o
                            })
                        }
                    }, {
                        key: "getLeftRightOffset",
                        value: function e() {
                            if (!this.props.target || !document || !document.documentElement) return {
                                offsetLeft: "auto",
                                offsetRight: "auto"
                            };
                            var t = document.documentElement,
                                n = this.props,
                                o = n.target,
                                a = n.transitionStatus,
                                r = o.getBoundingClientRect();
                            if ("exited" === a || "exiting" === a) {
                                var i = r.left,
                                    c = t.clientWidth - o.clientWidth - r.left;
                                return {
                                    offsetLeft: "".concat(i, "px"),
                                    offsetRight: "".concat(c, "px")
                                }
                            }
                            var s = t.clientWidth / 2 - 250;
                            return {
                                offsetLeft: "".concat(s, "px"),
                                offsetRight: "".concat(s, "px")
                            }
                        }
                    }, {
                        key: "checkIfScrolledAway",
                        value: function e() {
                            if (this.state.mounted) {
                                var t = this.innerContentsRef.current,
                                    n = document.documentElement;
                                !this.state.closing && t && n && window.pageYOffset > t.getBoundingClientRect().top - n.getBoundingClientRect().top + t.offsetHeight - 100 && (this.props.close(), this.setState({
                                    closing: !0
                                }))
                            }
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this;
                            return a.createElement(a.Fragment, null, a.createElement(h.Overlay, this.overlayProps(this.props.transitionStatus, this.props.target), this.overlayContent(this.props.close, "entered" === this.props.transitionStatus)), a.createElement(J.a, {
                                callback: function e() {
                                    return t.setLeftRightOffsetState()
                                },
                                throttle: 0
                            }), a.createElement(Y.a, {
                                callback: function e() {
                                    return t.checkIfScrolledAway()
                                },
                                throttle: 50
                            }))
                        }
                    }]), t
                }(a.Component),
                ne = function() {
                    var e = 0;
                    return function() {
                        return "redcarpet_".concat(e += 1)
                    }
                }(),
                oe = "show_scoped_home_scroll_prompt",
                ae = "show_scoped_home_login_bar",
                re = "has_autopopped",
                ie = function(e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
                        return n = Object(c.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(i))), Object(p.a)(Object(u.a)(Object(u.a)(n)), "state", {
                            name: ne(),
                            isDelayedAfterMount: !1
                        }), Object(p.a)(Object(u.a)(Object(u.a)(n)), "onClose", function() {
                            n.shouldPopScrollTooltipOnClose() && (n.popScrollTooltipViaRedux(), n.popLoginBarViaRedux())
                        }), Object(p.a)(Object(u.a)(Object(u.a)(n)), "onSelection", function() {
                            n.shouldPopScrollTooltipOnClose() && (n.popScrollTooltipViaSessionStorage(), n.popLoginBarViaSessionStorage())
                        }), Object(p.a)(Object(u.a)(Object(u.a)(n)), "hasAutoPopped", function() {
                            return K.a.has(re)
                        }), Object(p.a)(Object(u.a)(Object(u.a)(n)), "suppressAutoPop", function() {
                            K.a.set(re, !0)
                        }), Object(p.a)(Object(u.a)(Object(u.a)(n)), "shouldOpenOnLoad", function() {
                            return Object(E.featureIsEnabled)("social_homepage_autopop_geopill") && !n.hasAutoPopped() && !n.props.isGeoScoped && !n.props.isNearby && n.props.isDesktop
                        }), Object(p.a)(Object(u.a)(Object(u.a)(n)), "shouldPopScrollTooltipOnClose", function() {
                            return (Object(E.featureIsEnabled)("social_homepage_autopop_geopill") || Object(E.featureIsEnabled)("social_homepage_new_headline")) && !n.props.isGeoScoped && !n.props.isNearby && n.props.isDesktop
                        }), Object(p.a)(Object(u.a)(Object(u.a)(n)), "popScrollTooltipViaRedux", function() {
                            return n.props.showScrollTooltip()
                        }), Object(p.a)(Object(u.a)(Object(u.a)(n)), "popLoginBarViaRedux", function() {
                            return n.props.showLoginBar()
                        }), Object(p.a)(Object(u.a)(Object(u.a)(n)), "popScrollTooltipViaSessionStorage", function() {
                            return K.a.set(oe, !0)
                        }), Object(p.a)(Object(u.a)(Object(u.a)(n)), "popLoginBarViaSessionStorage", function() {
                            return K.a.set(ae, !0)
                        }), Object(p.a)(Object(u.a)(Object(u.a)(n)), "overlayContents", function() {
                            return a.createElement("div", {
                                className: S.container,
                                "data-test-geopill-contents": !0
                            }, a.createElement(W, {
                                onSelection: n.onSelection
                            }))
                        }), n
                    }
                    return Object(l.a)(t, e), Object(i.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            var t = this;
                            setTimeout(function() {
                                t.setState({
                                    isDelayedAfterMount: !0
                                })
                            }, 500)
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this;
                            return a.createElement(f.Opener, {
                                name: this.state.name
                            }, function(e, n) {
                                return a.createElement(f.Closer, null, function(o) {
                                    var r = function e() {
                                        o(), t.onClose()
                                    };
                                    return a.createElement(a.Fragment, null, t.state.isDelayedAfterMount && t.shouldOpenOnLoad() && a.createElement(x.Track, {
                                        mount: {
                                            module: t.props.isGeoScoped || t.props.isNearby ? "HomeScoped" : "HomeUnscoped",
                                            action: "home_geopill_autopop",
                                            nonInteraction: !0
                                        }
                                    }, a.createElement(f.AutoOpener, {
                                        name: t.state.name,
                                        markAsCheckedCallback: t.suppressAutoPop,
                                        openLayerCheck: function e() {
                                            return !0
                                        }
                                    })), a.createElement(h.Target, null, function(i, c) {
                                        return a.createElement(a.Fragment, null, a.createElement("div", {
                                            onClick: n ? o : e
                                        }, t.props.children(i)), t.props.fullscreen ? a.createElement(f.Global, {
                                            name: t.state.name
                                        }, a.createElement(b.a, null, a.createElement("div", {
                                            className: S.overlayContents
                                        }, a.createElement("div", null, t.overlayContents(), a.createElement(h.CloseX, {
                                            close: r,
                                            testAttribute: "geopill-red-carpet-close"
                                        }))))) : a.createElement(f.Global, {
                                            name: t.state.name,
                                            transitionDuration: 450
                                        }, a.createElement(h.OverlayConsumer, null, function(e) {
                                            return a.createElement(h.Backdrop, {
                                                close: r
                                            }, a.createElement(te, {
                                                target: c,
                                                transitionStatus: e.transitionStatus,
                                                close: r,
                                                overlayContents: t.overlayContents()
                                            }), a.createElement(y.a, {
                                                keyName: "Escape",
                                                callback: r
                                            }))
                                        })))
                                    }))
                                })
                            })
                        }
                    }]), t
                }(a.Component),
                ce = Object(d.connect)(function(e) {
                    return {
                        fullscreen: "MOBILE" === e.meta.device.viewportCategory,
                        isDesktop: "DESKTOP" === e.meta.device.viewportCategory
                    }
                }, {
                    showScrollTooltip: V.ACTIONS.showScrollTooltip,
                    showLoginBar: V.ACTIONS.showLoginBar
                })(ie);
            n.d(t, "GeoPillFlyout", function() {
                return B
            }), n.d(t, "GeoPillRedCarpet", function() {
                return ce
            })
        },
        "./packages/common/features/features.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/features/features.jsx")
        },
        "./packages/common/geolocation/geolocation.jsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "d", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            });
            var o = function e() {
                    return "undefined" != typeof navigator && void 0 !== navigator.geolocation
                },
                a = function e(t, n) {
                    return t && "function" == typeof t ? o() ? navigator.geolocation.watchPosition(function(e) {
                        t(e.coords.latitude, e.coords.longitude)
                    }, function(e) {
                        "function" == typeof n && n(e)
                    }, {
                        maximumAge: 0,
                        timeout: 1 / 0,
                        enableHighAccuracy: !1
                    }) : (n && "function" == typeof n && n(new Error("Location services not available")), null) : null
                },
                r = function e(t) {
                    o() && navigator.geolocation.clearWatch(t)
                };
            t.c = function e(t, n) {
                t && "function" == typeof t && (o() ? navigator.geolocation.getCurrentPosition(function(e) {
                    t(e.coords.latitude, e.coords.longitude)
                }, function(e) {
                    "function" == typeof n && n(e)
                }) : n && "function" == typeof n && n(new Error("Location services not available")))
            }
        },
        "./packages/common/i18n/i18n.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/common/is-visible/is-visible.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/is-visible/is-visible.jsx")
        },
        "./packages/common/throttle/throttle.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/throttle/throttle.jsx")
        },
        "./packages/common/tracking/tracking.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/tracking/tracking.jsx")
        },
        "./packages/events/keyboard-event-listener/KeyboardEventListener.jsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = function(e) {
                    function t(e) {
                        var n;
                        return Object(o.a)(this, t), n = Object(r.a)(this, Object(i.a)(t).call(this, e)), Object(l.a)(Object(s.a)(Object(s.a)(n)), "keyNames", void 0), Object(l.a)(Object(s.a)(Object(s.a)(n)), "handleEvent", function(e) {
                            var t = e.key;
                            t && -1 !== n.keyNames.indexOf(t) && n.props.callback(e)
                        }), n.keyNames = Array.isArray(e.keyName) ? e.keyName : [e.keyName], n
                    }
                    return Object(c.a)(t, e), Object(a.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            window.addEventListener(this.props.eventType, this.handleEvent)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            window.removeEventListener(this.props.eventType, this.handleEvent)
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return null
                        }
                    }]), t
                }(n("./node_modules/react/index.js").Component);
            Object(l.a)(u, "defaultProps", {
                eventType: "keydown"
            })
        },
        "./packages/events/window-resize/WindowResize.jsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return m
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = n("./node_modules/react/index.js"),
                p = n("./packages/common/throttle/throttle.jsx"),
                d = n.n(p),
                m = function(e) {
                    function t() {
                        var e, n;
                        Object(o.a)(this, t);
                        for (var a = arguments.length, c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u];
                        return n = Object(r.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(c))), Object(l.a)(Object(s.a)(Object(s.a)(n)), "handleResize", d()(function() {
                            n.props.callback()
                        }, n.props.throttle || 0, n.props.useDebounce)), n
                    }
                    return Object(c.a)(t, e), Object(a.a)(t, [{
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
            Object(l.a)(m, "defaultProps", {
                throttle: 200,
                useDebounce: !1
            })
        },
        "./packages/events/window-scroll/WindowScroll.jsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return m
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = n("./node_modules/react/index.js"),
                p = n("./packages/common/throttle/throttle.jsx"),
                d = n.n(p),
                m = function(e) {
                    function t() {
                        var e, n;
                        Object(o.a)(this, t);
                        for (var a = arguments.length, c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u];
                        return n = Object(r.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(c))), Object(l.a)(Object(s.a)(Object(s.a)(n)), "handleScroll", n.props.throttle ? d()(function() {
                            n.props.callback()
                        }, n.props.throttle, n.props.useDebounce) : n.props.callback), n
                    }
                    return Object(c.a)(t, e), Object(a.a)(t, [{
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
            Object(l.a)(m, "defaultProps", {
                throttle: 200,
                useDebounce: !1,
                useCapture: !1
            })
        },
        "@ta/common.sessionstorage": function(t, n) {
            t.exports = e
        },
        "@ta/common.typeahead": function(e, n) {
            e.exports = t
        },
        "@ta/input.text-input": function(e, t) {
            e.exports = n
        },
        "@ta/list.navigable-list": function(e, t) {
            e.exports = o
        },
        "@ta/overlays.fullscreen-overlay": function(e, t) {
            e.exports = a
        },
        "@ta/overlays.managers": function(e, t) {
            e.exports = r
        },
        "@ta/overlays.pieces": function(e, t) {
            e.exports = i
        },
        "@ta/social.educational-tooltips": function(e, t) {
            e.exports = c
        },
        "@ta/styleguide.loading": function(e, t) {
            e.exports = s
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = l
        }
    })
});
//# sourceMappingURL=brand.trip-search-geopill-flyout.1e39a4079b.js.map