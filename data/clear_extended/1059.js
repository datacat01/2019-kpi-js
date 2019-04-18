define("brand.trip-search-geopill", ["@ta/brand.global-nav-state", "@ta/brand.trip-search-geopill-flyout", "@ta/styleguide.icon", "@ta/common.global"], function(e, t, n, r) {
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
        }, n.p = "", n(n.s = "./roots/brand/trip-search-geopill/TripSearchGeoPill.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, t, n) {
            "use strict";

            function r(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function o(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), e
            }
            n.d(t, "a", function() {
                return o
            })
        },
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
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(e)
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function o(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Object(r.a)(e, t)
            }
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
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function i(e, t) {
                return !t || "object" !== Object(r.a)(t) && "function" != typeof t ? Object(o.a)(e) : t
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, t, n) {
            "use strict";

            function r(e, t) {
                return (r = Object.setPrototypeOf || function e(t, n) {
                    return t.__proto__ = n, t
                })(e, t)
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(e)
            }

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function e(t) {
                    return r(t)
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : r(t)
                })(e)
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
        "./packages/brand/geopill-util/TripSearchGeoPillBinding.jsx": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                o = n("./packages/common/api/api.jsx"),
                i = n("./packages/common/data-cacher/DataCacher.jsx");
            n("./node_modules/react/index.js"), t.a = function e(t) {
                return Object(o.bind)(function(e, t) {
                    var n = t("/data/1.0/brand/geopill?".concat(function e(t) {
                        var n = {
                                servlet: t.route.page,
                                geoId: t.route.geo,
                                latitude: t.route.latitude,
                                searchNearby: t.route.searchNearby
                            },
                            r = {};
                        return Object.keys(n).forEach(function(e) {
                            null != n[e] && (r[e] = n[e])
                        }), new URLSearchParams(r)
                    }(e).toString()));
                    return function(e) {
                        var t, o = n.get();
                        return t = o.data ? {
                            geoName: o.data.geoName,
                            isGeoScoped: o.data.isGeoScoped,
                            isNearby: o.data.isNearby
                        } : {
                            geoName: void 0,
                            isGeoScoped: !1,
                            isNearby: !1
                        }, Object(r.a)({
                            loading: o.loading,
                            servletName: e.meta.initialServletName
                        }, t)
                    }
                })(Object(i.b)()(t))
            }
        },
        "./packages/common/api/api.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/api/api.jsx")
        },
        "./packages/common/data-cacher/DataCacher.jsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return d
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                p = n("./node_modules/react/index.js"),
                d = function e(t) {
                    return function(e, n) {
                        return t.reduce(function(t, r) {
                            return t || e[r] !== n[r]
                        }, !1)
                    }
                };
            t.b = function e(t) {
                return function(e) {
                    var n = function(n) {
                        function d() {
                            var e, t;
                            Object(o.a)(this, d);
                            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                            return t = Object(a.a)(this, (e = Object(s.a)(d)).call.apply(e, [this].concat(r))), Object(u.a)(Object(c.a)(Object(c.a)(t)), "oldProps", void 0), t
                        }
                        return Object(l.a)(d, n), Object(i.a)(d, [{
                            key: "render",
                            value: function n() {
                                var o = !this.oldProps || !this.props.loading || t && t(this.oldProps, this.props);
                                o && (this.oldProps = Object(r.a)({}, this.props, {
                                    loading: !0,
                                    cachedData: !0,
                                    newProps: this.props
                                }));
                                var i = Object(r.a)({}, this.props, {
                                    cachedData: !1
                                });
                                return p.createElement(e, o ? i : this.oldProps)
                            }
                        }]), d
                    }(p.Component);
                    return n.displayName = "DataCacher(".concat(e.displayName || e.name || "Unknown", ")"), n
                }
            }
        },
        "./packages/common/i18n/i18n.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/common/is-visible/is-visible.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/is-visible/is-visible.jsx")
        },
        "./packages/common/routing/routing.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/routing/routing.jsx")
        },
        "./packages/common/tracking/tracking.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/tracking/tracking.jsx")
        },
        "./roots/brand/trip-search-geopill/TripSearchGeoPill.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = n("./node_modules/react/index.js"),
                p = n("./node_modules/react-redux/es/index.js"),
                d = n("./packages/common/i18n/i18n.jsx"),
                b = n("./packages/common/is-visible/is-visible.jsx"),
                m = n("./packages/common/routing/routing.jsx"),
                f = n("@ta/styleguide.icon"),
                h = n("./packages/common/tracking/tracking.jsx"),
                j = n("@ta/brand.global-nav-state"),
                g = n("./packages/brand/geopill-util/TripSearchGeoPillBinding.jsx"),
                y = n("@ta/brand.trip-search-geopill-flyout"),
                O = function(e) {
                    function t(e) {
                        var n;
                        return Object(r.a)(this, t), n = Object(i.a)(this, Object(a.a)(t).call(this, e)), Object(c.a)(Object(l.a)(Object(l.a)(n)), "onVisible", function() {
                            n.props.brandHeaderMounted && n.props.setTripSearchGeoPillVisible(!0)
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "onInvisible", function() {
                            n.props.brandHeaderMounted && n.props.setTripSearchGeoPillVisible(!1)
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "containerEl", void 0), n.state = {
                            initialVisibilityChecked: !1
                        }, n.containerEl = u.createRef(), n
                    }
                    return Object(s.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.checkVisibilityOnInit()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function e() {
                            this.checkVisibilityOnInit()
                        }
                    }, {
                        key: "checkVisibilityOnInit",
                        value: function e() {
                            if (!this.state.initialVisibilityChecked) {
                                var t = this.containerEl.current;
                                t && this.props.brandHeaderMounted && (t.getBoundingClientRect().bottom <= 0 && this.props.setTripSearchGeoPillVisible(!1), this.setState({
                                    initialVisibilityChecked: !0
                                }))
                            }
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t;
                            return t = this.props.isNearby ? Object(d.localize)("mx_nearby") : this.props.isGeoScoped ? this.props.geoName : Object(d.localize)("mobile_discovery_where_to"), u.createElement(b.VisibilityObserver, {
                                onVisible: this.onVisible,
                                onInvisible: this.onInvisible,
                                node: this.containerEl,
                                rootMargin: "0px 0px 1000px 0px"
                            }, u.createElement("div", {
                                className: "brand-trip-search-geopill-TripSearchGeoPill__container--1pxWN",
                                ref: this.containerEl,
                                "data-test-tripsearch-geopill": !0
                            }, u.createElement(h.ClickTracker, {
                                module: "HomeNav_".concat(this.props.servletName),
                                action: "click",
                                context: "GeoPicker"
                            }, u.createElement(y.GeoPillRedCarpet, {
                                isGeoScoped: this.props.isGeoScoped,
                                isNearby: this.props.isNearby
                            }, function(e) {
                                return u.createElement("div", {
                                    ref: e,
                                    className: "brand-trip-search-geopill-TripSearchGeoPill__pillWrap--2_fwr"
                                }, u.createElement("div", {
                                    className: "ui_pill ".concat("brand-trip-search-geopill-TripSearchGeoPill__pill--2CF8h")
                                }, t, u.createElement(f.Icon, {
                                    name: "single-chevron-down",
                                    className: "brand-trip-search-geopill-TripSearchGeoPill__icon--2YqBV"
                                })))
                            })), (this.props.isGeoScoped || this.props.isNearby) && u.createElement(m.Link, {
                                href: "/"
                            }, u.createElement("div", {
                                className: "brand-trip-search-geopill-TripSearchGeoPill__unscopeX--I6KUD"
                            }, u.createElement(f.Icon, {
                                name: "times",
                                className: "brand-trip-search-geopill-TripSearchGeoPill__icon--2YqBV"
                            })))))
                        }
                    }]), t
                }(u.Component);
            Object(c.a)(O, "defaultProps", {
                geoName: void 0
            }), t.default = Object(p.connect)(function(e) {
                return {
                    brandHeaderMounted: Object(j.getState)(e).brandHeaderMounted
                }
            }, {
                setTripSearchGeoPillVisible: j.ACTIONS.setTripSearchGeoPillVisible
            })(Object(g.a)(O))
        },
        "@ta/brand.global-nav-state": function(t, n) {
            t.exports = e
        },
        "@ta/brand.trip-search-geopill-flyout": function(e, n) {
            e.exports = t
        },
        "@ta/styleguide.icon": function(e, t) {
            e.exports = n
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = r
        }
    })
});
//# sourceMappingURL=brand.trip-search-geopill.d43fb581f5.js.map