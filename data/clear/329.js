define("brand.quick-link-tiles", ["@ta/brand.global-nav-state", "@ta/brand.trip-search-geopill-flyout", "@ta/events.lifecycle", "@ta/overlays.popover", "@ta/social.scroll", "@ta/styleguide.icon", "@ta/common.global"], function(e, n, t, i, r, o, a) {
    return function(e) {
        var n = {};

        function t(i) {
            if (n[i]) return n[i].exports;
            var r = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }
        return t.m = e, t.c = n, t.d = function(e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: i
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
            var i = Object.create(null);
            if (t.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var r in e) t.d(i, r, function(n) {
                    return e[n]
                }.bind(null, r));
            return i
        }, t.n = function(e) {
            var n = e && e.__esModule ? function n() {
                return e.default
            } : function n() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, t.p = "", t(t.s = "./roots/brand/quick-link-tiles/QuickLinkTilesContainer.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, n, t) {
            "use strict";

            function i(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            t.d(n, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, n, t) {
            "use strict";

            function i(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }
            t.d(n, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, n, t) {
            "use strict";

            function i(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function r(e, n, t) {
                return n && i(e.prototype, n), t && i(e, t), e
            }
            t.d(n, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, n, t) {
            "use strict";

            function i(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }
            t.d(n, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, n, t) {
            "use strict";

            function i(e) {
                return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function e(n) {
                    return n.__proto__ || Object.getPrototypeOf(n)
                })(e)
            }
            t.d(n, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return r
            });
            var i = t("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function r(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), n && Object(i.a)(e, n)
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return r
            });
            var i = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function r(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.forEach(function(n) {
                        Object(i.a)(e, n, t[n])
                    })
                }
                return e
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return o
            });
            var i = t("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                r = t("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function o(e, n) {
                return !n || "object" !== Object(i.a)(n) && "function" != typeof n ? Object(r.a)(e) : n
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, n, t) {
            "use strict";

            function i(e, n) {
                return (i = Object.setPrototypeOf || function e(n, t) {
                    return n.__proto__ = t, n
                })(e, n)
            }
            t.d(n, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, n, t) {
            "use strict";

            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(n) {
                    return typeof n
                } : function e(n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                })(e)
            }

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" === i(Symbol.iterator) ? function e(n) {
                    return i(n)
                } : function e(n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : i(n)
                })(e)
            }
            t.d(n, "a", function() {
                return r
            })
        },
        "./node_modules/react-redux/es/index.js": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./node_modules/webpack/buildin/global.js": function(e, n) {
            var t;
            t = function() {
                return this
            }();
            try {
                t = t || Function("return this")() || (0, eval)("this")
            } catch (e) {
                "object" == typeof window && (t = window)
            }
            e.exports = t
        },
        "./packages/brand/global-nav/GlobalNavApiBinding.jsx": function(e, n, t) {
            "use strict";
            var i = t("./packages/common/api/api.jsx"),
                r = t("./packages/common/data-cacher/DataCacher.jsx");
            t("./node_modules/react/index.js"), n.a = function e(n) {
                return Object(i.bind)(function(e, n) {
                    var t = n("/data/1.0/brand/navLinks?".concat(function e(n) {
                        var t = n.meta,
                            i = t.initialServletName,
                            r = t.device,
                            o = n.i18n.locale,
                            a = n.route,
                            s = a.latitude,
                            l = a.longitude,
                            c = a.searchNearby,
                            u = n.meta.forceFullSite ? "DESKTOP" : r.viewportCategory,
                            d = {
                                servlet: i,
                                locale: o,
                                geoId: n.route.geo ? n.route.geo : null,
                                detailId: n.route.detail ? n.route.detail : null,
                                viewportCategory: u,
                                latitude: s,
                                longitude: l,
                                searchNearby: c
                            },
                            m = {};
                        return Object.keys(d).forEach(function(e) {
                            null != d[e] && (m[e] = d[e])
                        }), new URLSearchParams(m)
                    }(e).toString()));
                    return function() {
                        var e = t.get(),
                            n = e.data,
                            i = e.loading,
                            r = n ? n.links : null,
                            o = n ? n.activeLinkId : null,
                            a = !!n && n.isGeoScoped;
                        return {
                            loading: i,
                            links: r,
                            activeLinkId: o,
                            extendedQuickLinks: !!n && n.isQuickLinksMoreNewLine,
                            isGeoScoped: a
                        }
                    }
                })(Object(r.b)()(n))
            }
        },
        "./packages/brand/global-nav/global-nav.jsx": function(e, n, t) {
            "use strict";
            var i = t("./packages/brand/global-nav/GlobalNavApiBinding.jsx");
            n.a = i.a
        },
        "./packages/brand/global-nav/menus/TopLevelNavLink.jsx": function(e, n, t) {
            "use strict";
            (function(e) {
                var i = t("./node_modules/react/index.js"),
                    r = t("./packages/common/tracking/tracking.jsx"),
                    o = t("./packages/common/i18n/i18n.jsx"),
                    a = t("@ta/styleguide.icon"),
                    s = function n(t) {
                        var s = "HelpDesk" === t.link.id,
                            l = function n(i) {
                                t.preventDefault && i.preventDefault(), "HelpDesk" === t.link.id && (i.preventDefault(), e.require(["trjs!brand/HelpCenterOverlay", "trcss!src/build/required/help_center_overlay"], function(e) {
                                    e.open(i.target, "/uvpages/helpCenterOverlay.html")
                                })), "tourism" === t.link.id && (i.preventDefault(), window.open(t.link.url, t.link.isNewWindow ? "_blank" : "_self"))
                            },
                            c = i.createElement(i.Fragment, null, t.showQuickLinkIcon && t.link.icon && i.createElement(a.Icon, {
                                name: t.link.icon,
                                className: t.quickLinkIconClasses
                            }), Object(o.unescaped)(t.link.text), t.extraLabel),
                            u = "tourism" === t.link.id ? i.createElement("span", {
                                ref: t.setTarget,
                                className: t.extraClasses,
                                onClick: l
                            }, c) : i.createElement("a", {
                                ref: t.setTarget,
                                className: t.extraClasses,
                                href: t.link.url,
                                target: t.link.isNewWindow ? "_blank" : null,
                                onClick: l
                            }, c);
                        return i.createElement(r.ClickTracker, {
                            module: t.trackingModule,
                            action: "click",
                            forceAjax: s || t.preventDefault,
                            context: t.link.trackingLabel
                        }, u)
                    };
                s.defaultProps = {
                    extraClasses: void 0,
                    setTarget: function e() {},
                    showQuickLinkIcon: !1,
                    trackingModule: "TopNav",
                    quickLinkIconClasses: void 0,
                    preventDefault: !1,
                    extraLabel: void 0
                }, n.a = s
            }).call(this, t("./node_modules/webpack/buildin/global.js"))
        },
        "./packages/brand/quick-links/QuickLinksMoreMenu.jsx": function(e, n, t) {
            "use strict";
            var i = t("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = t("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                o = t("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                a = t("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                s = t("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                l = t("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                c = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = t("./node_modules/react/index.js"),
                d = t("./node_modules/react-redux/es/index.js"),
                m = t("@ta/overlays.popover"),
                p = t.n(m),
                b = t("./packages/events/window-resize/WindowResize.jsx"),
                k = t("./packages/brand/global-nav/menus/TopLevelNavLink.jsx"),
                f = {
                    list: "brand-quick-links-QuickLinksMoreMenu__list--1xl7g",
                    item: "brand-quick-links-QuickLinksMoreMenu__item--2z1oA",
                    link: "brand-quick-links-QuickLinksMoreMenu__link--1m-j-",
                    hidden: "brand-quick-links-QuickLinksMoreMenu__hidden--1ua6B"
                },
                h = 8,
                j = function(e) {
                    function n(e) {
                        var t;
                        return Object(i.a)(this, n), t = Object(o.a)(this, Object(a.a)(n).call(this, e)), Object(c.a)(Object(l.a)(Object(l.a)(t)), "updateArrowPos", function() {
                            var e = t.wrapEl.current;
                            e && t.setState({
                                arrowShift: -1 * e.offsetWidth / 2 + 10 + h
                            })
                        }), Object(c.a)(Object(l.a)(Object(l.a)(t)), "menuContents", function() {
                            return t.props.collapsedData && u.createElement("ul", {
                                className: f.list
                            }, t.props.collapsedData.links.map(function(e) {
                                return u.createElement("li", {
                                    key: e.id,
                                    className: f.item
                                }, u.createElement(k.a, {
                                    link: e,
                                    extraClasses: f.link,
                                    trackingModule: "QuickLinks"
                                }))
                            }))
                        }), Object(c.a)(Object(l.a)(Object(l.a)(t)), "wrapEl", void 0), t.state = {
                            arrowShift: 0
                        }, t.wrapEl = u.createRef(), t
                    }
                    return Object(s.a)(n, e), Object(r.a)(n, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.updateArrowPos()
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var n = this,
                                t = this.props.alignToRightEdge && ("MOBILE" === this.props.viewport || "TABLET" === this.props.viewport);
                            return u.createElement(u.Fragment, null, u.createElement(p.a, {
                                below: !0,
                                closeButton: !1,
                                backdrop: "MOBILE" === this.props.viewport,
                                shiftX: t ? -1 * h : 0,
                                shiftY: -11,
                                shiftArrow: this.state.arrowShift,
                                fullBleed: !0,
                                fixed: this.props.fixedPopover,
                                alignEdge: t ? "right" : void 0,
                                contents: this.menuContents
                            }, function(e, t) {
                                return u.createElement("div", {
                                    ref: n.wrapEl
                                }, u.createElement("div", {
                                    ref: e,
                                    onClick: t
                                }, n.props.children))
                            }), u.createElement(b.a, {
                                callback: this.updateArrowPos
                            }), u.createElement("div", {
                                className: f.hidden
                            }, this.menuContents()))
                        }
                    }]), n
                }(u.Component);
            Object(c.a)(j, "defaultProps", {
                collapsedData: void 0,
                alignToRightEdge: !1,
                fixedPopover: !1
            }), n.a = Object(d.connect)(function(e) {
                return {
                    viewport: e.meta.device.viewportCategory
                }
            })(j)
        },
        "./packages/brand/quick-links/commonStyles.less": function(e, n, t) {
            "use strict";
            n.a = {
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
        "./packages/brand/quick-links/quick-links.jsx": function(e, n, t) {
            "use strict";
            var i = t("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = t("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                o = t("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                a = t("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                s = t("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                l = t("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                c = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = t("./node_modules/react/index.js"),
                d = t("./node_modules/react-redux/es/index.js"),
                m = t("./packages/common/classnames/classnames.jsx"),
                p = t.n(m),
                b = t("./packages/common/features/features.jsx"),
                k = t("./packages/common/is-visible/is-visible.jsx"),
                f = t("./packages/brand/global-nav/global-nav.jsx"),
                h = t("@ta/brand.global-nav-state"),
                j = t("@ta/events.lifecycle"),
                g = t("./packages/events/window-scroll/WindowScroll.jsx"),
                _ = t("./packages/common/i18n/i18n.jsx"),
                v = t("@ta/styleguide.icon"),
                y = t("./packages/common/tracking/tracking.jsx"),
                O = t("./packages/brand/global-nav/menus/TopLevelNavLink.jsx"),
                L = t("@ta/brand.trip-search-geopill-flyout"),
                x = t("./packages/brand/quick-links/QuickLinksMoreMenu.jsx"),
                E = t("./packages/brand/quick-links/commonStyles.less"),
                w = function e(n) {
                    var t, i, r = p()("ui_column", "is-4-mobile", "brand-quick-links-QuickLinkTileItem__quickLinkTileItem--zKAkR", (t = {}, Object(c.a)(t, "brand-quick-links-QuickLinkTileItem__customizedColForTablet--1ql_j", n.extendedQuickLinks), Object(c.a)(t, "is-2-tablet", !n.extendedQuickLinks), t)),
                        o = n.link,
                        a = p()("ui_column", "is-12-mobile", "brand-quick-links-QuickLinkTileItem__quickLinkTileItem--zKAkR", "brand-quick-links-QuickLinkTileItem__customizedColForTablet--1ql_j", "brand-quick-links-QuickLinkTileItem__quickLinkMoreItem--mhKEk");
                    o && o.icon && E.a["order-".concat(o.icon)] ? r = p()(r, E.a["order-".concat(o.icon)], Object(c.a)({}, "brand-quick-links-QuickLinkTileItem__active--3Kprp", n.isActive)) : n.isMoreTile ? r = p()(n.extendedQuickLinks ? a : r, E.a["order-more"]) : n.isPlaceholderTile && (r = p()(r, "brand-quick-links-QuickLinkTileItem__placeholderTile--2OrFe", E.a["order-more"]));
                    var s = p()("brand-quick-links-QuickLinkTileItem__icon--2iguo", "brand-quick-links-QuickLinkTileItem__moreHorizontal--3jcq3");
                    if (n.isMoreTile && n.collapsedData) i = u.createElement(x.a, {
                        collapsedData: n.collapsedData,
                        alignToRightEdge: n.alignMoreRight
                    }, u.createElement("div", {
                        className: "brand-quick-links-QuickLinkTileItem__link--1k5lE"
                    }, u.createElement(y.ClickTracker, {
                        module: "QuickLinksMore",
                        action: "click",
                        context: "open"
                    }, u.createElement(v.Icon, {
                        name: "more-horizontal",
                        className: s
                    }), u.createElement("span", {
                        className: n.extendedQuickLinks ? "brand-quick-links-QuickLinkTileItem__hideOnMobile--3skZi" : ""
                    }, Object(_.localize)("common_more_capital_ffffe27f"), " "))));
                    else if (o) {
                        var l = !(!o.urlWithGeoTemplate && !o.urlWithLatLngTemplate || n.isGeoScoped),
                            d = o.promoteAsNew && u.createElement("span", {
                                className: "brand-quick-links-QuickLinkTileItem__newLabel--3lSxD"
                            }, Object(_.localize)("common_NEW_1bd8"), " "),
                            m = function e(n) {
                                return u.createElement(O.a, {
                                    setTarget: n,
                                    preventDefault: l,
                                    link: o,
                                    extraClasses: "brand-quick-links-QuickLinkTileItem__link--1k5lE",
                                    showQuickLinkIcon: !0,
                                    quickLinkIconClasses: "brand-quick-links-QuickLinkTileItem__icon--2iguo",
                                    trackingModule: "QuickLinks",
                                    extraLabel: d
                                })
                            };
                        i = l ? u.createElement(L.GeoPillFlyout, {
                            latLngUrlTemplate: o.urlWithLatLngTemplate,
                            geoUrlTemplate: o.urlWithGeoTemplate,
                            trackingLabel: o.trackingLabel
                        }, function(e) {
                            return m(e)
                        }) : m()
                    } else i = null;
                    return u.createElement("span", {
                        className: r
                    }, i)
                };
            w.defaultProps = {
                isActive: !1,
                link: void 0,
                isMoreTile: !1,
                alignMoreRight: !1,
                isPlaceholderTile: !1,
                collapsedData: void 0,
                isGeoScoped: !1,
                extendedQuickLinks: !1
            };
            var T = w,
                S = t("@ta/social.scroll"),
                q = function e(n) {
                    var t, i, r = n.link;
                    if (n.collapsedData && n.isMoreTile) {
                        var o = n.collapsedData;
                        t = u.createElement(x.a, {
                            collapsedData: o,
                            alignToRightEdge: n.alignMoreRight
                        }, u.createElement("div", {
                            className: "brand-quick-links-QuickLinkGalleryItem__link--36fQa"
                        }, u.createElement(y.ClickTracker, {
                            module: "QuickLinksMore",
                            action: "click",
                            context: "open"
                        }, u.createElement(v.Icon, {
                            name: "more-horizontal",
                            className: p()("brand-quick-links-QuickLinkGalleryItem__icon--2boZU", "brand-quick-links-QuickLinkGalleryItem__moreHorizontal--2nsdA")
                        }), Object(_.localize)("common_more_capital_ffffe27f"), " ")))
                    } else if (r) {
                        var a = !(!r.urlWithGeoTemplate && !r.urlWithLatLngTemplate || n.isGeoScoped),
                            s = function e(n) {
                                return u.createElement(O.a, {
                                    setTarget: n,
                                    preventDefault: a,
                                    link: r,
                                    extraClasses: "brand-quick-links-QuickLinkGalleryItem__link--36fQa",
                                    showQuickLinkIcon: !0,
                                    quickLinkIconClasses: "brand-quick-links-QuickLinkGalleryItem__icon--2boZU",
                                    trackingModule: "QuickLinks"
                                })
                            };
                        t = a ? u.createElement(L.GeoPillFlyout, {
                            latLngUrlTemplate: r.urlWithLatLngTemplate,
                            geoUrlTemplate: r.urlWithGeoTemplate,
                            trackingLabel: r.trackingLabel
                        }, function(e) {
                            return s(e)
                        }) : s()
                    } else t = null;
                    return r && r.icon && E.a["order-".concat(r.icon)] ? i = E.a["order-".concat(r.icon)] : n.isMoreTile && (i = E.a["order-more"]), u.createElement("span", {
                        className: p()("brand-quick-links-QuickLinkGalleryItem__quickLinkGalleryItem--2AdRl", i)
                    }, t)
                };
            q.defaultProps = {
                isActive: !1,
                link: void 0,
                isMoreTile: !1,
                alignMoreRight: !1,
                collapsedData: void 0,
                isGeoScoped: !1
            };
            var C = q,
                I = function e(n) {
                    return u.createElement("div", {
                        className: p()("social_home_feed", "brand-quick-links-QuickLinksGallery__quickLinksShelf--3qq6z")
                    }, u.createElement("div", {
                        className: p()("brand-quick-links-QuickLinksGallery__header--3PY4p")
                    }, Object(_.localize)("in_dest_quicklinks_header"), " "), u.createElement(S.ScrollAffordance, {
                        className: p()("brand-quick-links-QuickLinksGallery__carousel--1iYID")
                    }, function(e) {
                        return u.createElement(u.Fragment, null, n.visibleLinks.map(function(t, i) {
                            return u.createElement("div", {
                                className: 0 === i ? "brand-quick-links-QuickLinksGallery__first--3Qej1" : void 0,
                                key: t.id
                            }, u.createElement("div", {
                                ref: e(i),
                                className: p()("brand-quick-links-QuickLinksGallery__item--3XHvV")
                            }, u.createElement(C, {
                                link: t,
                                isGeoScoped: n.isGeoScoped
                            })))
                        }), u.createElement("div", {
                            className: "brand-quick-links-QuickLinksGallery__last--2-Pru"
                        }, n.collapsedData.links && u.createElement("div", {
                            ref: e(n.visibleLinks.length),
                            className: "brand-quick-links-QuickLinksGallery__item--3XHvV"
                        }, u.createElement(C, {
                            isMoreTile: !0,
                            collapsedData: n.collapsedData,
                            alignMoreRight: n.alignMoreRight
                        }))))
                    }))
                },
                Q = function(e) {
                    function n(e) {
                        var t;
                        return Object(i.a)(this, n), t = Object(o.a)(this, Object(a.a)(n).call(this, e)), Object(c.a)(Object(l.a)(Object(l.a)(t)), "onVisible", function() {
                            t.props.brandHeaderMounted && t.props.setQuickLinksVisible(!0)
                        }), Object(c.a)(Object(l.a)(Object(l.a)(t)), "onInvisible", function() {
                            t.props.brandHeaderMounted && t.props.setQuickLinksVisible(!1)
                        }), Object(c.a)(Object(l.a)(Object(l.a)(t)), "containerEl", void 0), Object(c.a)(Object(l.a)(Object(l.a)(t)), "checkOffset", void 0), t.state = {
                            initialVisibilityChecked: !1
                        }, t.containerEl = u.createRef(), t.checkOffset = -1, t
                    }
                    return Object(s.a)(n, e), Object(r.a)(n, [{
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
                                var n = this.containerEl.current;
                                n && this.props.brandHeaderMounted && (n.getBoundingClientRect().bottom <= 0 && this.props.setQuickLinksVisible(!1), this.setState({
                                    initialVisibilityChecked: !0
                                }))
                            }
                        }
                    }, {
                        key: "shouldAutoScroll",
                        value: function e() {
                            return this.props.isGeoScoped && this.props.isMobileWeb && (Object(b.featureIsEnabled)("mw_no_hero_photo") || Object(b.featureIsEnabled)("mw_no_hero_photo_pinned_nav"))
                        }
                    }, {
                        key: "shouldPinnedTop",
                        value: function e() {
                            return this.shouldAutoScroll() && Object(b.featureIsEnabled)("mw_no_hero_photo_pinned_nav")
                        }
                    }, {
                        key: "scrollHandler",
                        value: function e() {
                            this.checkOffset > 0 && window.pageYOffset < this.checkOffset && (this.onVisible(), this.checkOffset = -1)
                        }
                    }, {
                        key: "autoScrollPage",
                        value: function e() {
                            var n = this,
                                t = function e() {
                                    if (n.containerEl && n.containerEl.current) {
                                        var t, i = n.containerEl.current.getBoundingClientRect(),
                                            r = !1;
                                        Object(b.featureIsEnabled)("mw_no_hero_photo") ? t = i.top - 50 : (r = !0, t = i.bottom - 100, n.checkOffset = t - 20), t += window.pageYOffset, setTimeout(function() {
                                            window.scrollTo({
                                                top: t,
                                                behavior: "instant"
                                            }), r && n.onInvisible()
                                        }, 0)
                                    }
                                };
                            this.shouldAutoScroll() && (this.containerEl && this.containerEl.current ? t() : setTimeout(t, 0))
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var n = this,
                                t = this.props.links;
                            if (!t) return null;
                            var i, r = t.filter(function(e) {
                                    return !e.forceCollapse
                                }),
                                o = {
                                    links: t.filter(function(e) {
                                        return e.forceCollapse
                                    }),
                                    activeLinkId: this.props.activeLinkId
                                },
                                a = r.length + 1,
                                s = r.length % 3 == 0 ? 0 : Math.max(0, (3 - a % 3) % 3),
                                l = p()("ui_columns", "is-mobile", "is-multiline", "is-gapless", "brand-quick-links-QuickLinkTiles__quickLinks--1hkcN");
                            return i = this.props.isMobileWeb && Object(b.featureIsEnabled)("quick_links_gallery_mw") ? u.createElement(I, {
                                visibleLinks: r,
                                isGeoScoped: this.props.isGeoScoped,
                                collapsedData: o,
                                alignMoreRight: !0
                            }) : u.createElement("div", {
                                className: l
                            }, r.map(function(e) {
                                return u.createElement(T, {
                                    link: e,
                                    isActive: !!n.props.activeLinkId && n.props.activeLinkId === e.id,
                                    key: e.id,
                                    isGeoScoped: n.props.isGeoScoped,
                                    extendedQuickLinks: n.props.extendedQuickLinks
                                })
                            }), u.createElement(T, {
                                isMoreTile: !0,
                                extendedQuickLinks: this.props.extendedQuickLinks,
                                collapsedData: o,
                                alignMoreRight: a % 3 == 0
                            }), Array.from(Array(s).keys(), function(e) {
                                return u.createElement(T, {
                                    key: e,
                                    isPlaceholderTile: !0
                                })
                            })), u.createElement(u.Fragment, null, this.shouldAutoScroll() && u.createElement(j.AfterPageLoad, {
                                callback: this.autoScrollPage,
                                identifier: "QuickLinkTiles"
                            }), this.shouldPinnedTop() && u.createElement(g.a, {
                                callback: this.scrollHandler
                            }), u.createElement(k.VisibilityObserver, {
                                onVisible: this.onVisible,
                                onInvisible: this.onInvisible,
                                node: this.containerEl,
                                rootMargin: "0px 0px 1000px 0px"
                            }, u.createElement("div", {
                                ref: this.containerEl
                            }, i)))
                        }
                    }]), n
                }(u.Component),
                M = Object(d.connect)(function(e) {
                    return {
                        brandHeaderMounted: Object(h.getState)(e).brandHeaderMounted,
                        isMobileWeb: "MOBILE" === e.meta.device.viewportCategory
                    }
                }, {
                    setQuickLinksVisible: h.ACTIONS.setQuickLinksVisible
                })(Object(f.a)(Q));
            n.a = M
        },
        "./packages/common/api/api.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/api/api.jsx")
        },
        "./packages/common/classnames/classnames.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/common/data-cacher/DataCacher.jsx": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return m
            });
            var i = t("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                r = t("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                o = t("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                a = t("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                s = t("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                l = t("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                c = t("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                u = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                d = t("./node_modules/react/index.js"),
                m = function e(n) {
                    return function(e, t) {
                        return n.reduce(function(n, i) {
                            return n || e[i] !== t[i]
                        }, !1)
                    }
                };
            n.b = function e(n) {
                return function(e) {
                    var t = function(t) {
                        function m() {
                            var e, n;
                            Object(r.a)(this, m);
                            for (var t = arguments.length, i = new Array(t), o = 0; o < t; o++) i[o] = arguments[o];
                            return n = Object(a.a)(this, (e = Object(s.a)(m)).call.apply(e, [this].concat(i))), Object(u.a)(Object(c.a)(Object(c.a)(n)), "oldProps", void 0), n
                        }
                        return Object(l.a)(m, t), Object(o.a)(m, [{
                            key: "render",
                            value: function t() {
                                var r = !this.oldProps || !this.props.loading || n && n(this.oldProps, this.props);
                                r && (this.oldProps = Object(i.a)({}, this.props, {
                                    loading: !0,
                                    cachedData: !0,
                                    newProps: this.props
                                }));
                                var o = Object(i.a)({}, this.props, {
                                    cachedData: !1
                                });
                                return d.createElement(e, r ? o : this.oldProps)
                            }
                        }]), m
                    }(d.Component);
                    return t.displayName = "DataCacher(".concat(e.displayName || e.name || "Unknown", ")"), t
                }
            }
        },
        "./packages/common/features/features.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/features/features.jsx")
        },
        "./packages/common/i18n/i18n.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/common/is-visible/is-visible.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/is-visible/is-visible.jsx")
        },
        "./packages/common/throttle/throttle.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/throttle/throttle.jsx")
        },
        "./packages/common/tracking/tracking.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/tracking/tracking.jsx")
        },
        "./packages/events/window-resize/WindowResize.jsx": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return p
            });
            var i = t("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = t("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                o = t("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                a = t("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                s = t("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                l = t("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                c = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = t("./node_modules/react/index.js"),
                d = t("./packages/common/throttle/throttle.jsx"),
                m = t.n(d),
                p = function(e) {
                    function n() {
                        var e, t;
                        Object(i.a)(this, n);
                        for (var r = arguments.length, s = new Array(r), u = 0; u < r; u++) s[u] = arguments[u];
                        return t = Object(o.a)(this, (e = Object(a.a)(n)).call.apply(e, [this].concat(s))), Object(c.a)(Object(l.a)(Object(l.a)(t)), "handleResize", m()(function() {
                            t.props.callback()
                        }, t.props.throttle || 0, t.props.useDebounce)), t
                    }
                    return Object(s.a)(n, e), Object(r.a)(n, [{
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
                    }]), n
                }(u.Component);
            Object(c.a)(p, "defaultProps", {
                throttle: 200,
                useDebounce: !1
            })
        },
        "./packages/events/window-scroll/WindowScroll.jsx": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return p
            });
            var i = t("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = t("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                o = t("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                a = t("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                s = t("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                l = t("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                c = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = t("./node_modules/react/index.js"),
                d = t("./packages/common/throttle/throttle.jsx"),
                m = t.n(d),
                p = function(e) {
                    function n() {
                        var e, t;
                        Object(i.a)(this, n);
                        for (var r = arguments.length, s = new Array(r), u = 0; u < r; u++) s[u] = arguments[u];
                        return t = Object(o.a)(this, (e = Object(a.a)(n)).call.apply(e, [this].concat(s))), Object(c.a)(Object(l.a)(Object(l.a)(t)), "handleScroll", t.props.throttle ? m()(function() {
                            t.props.callback()
                        }, t.props.throttle, t.props.useDebounce) : t.props.callback), t
                    }
                    return Object(s.a)(n, e), Object(r.a)(n, [{
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
                    }]), n
                }(u.Component);
            Object(c.a)(p, "defaultProps", {
                throttle: 200,
                useDebounce: !1,
                useCapture: !1
            })
        },
        "./roots/brand/quick-link-tiles/QuickLinkTilesContainer.jsx": function(e, n, t) {
            "use strict";
            t.r(n);
            var i = t("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                r = t("./node_modules/react/index.js"),
                o = t("./packages/common/api/api.jsx"),
                a = t("./packages/brand/quick-links/quick-links.jsx");
            n.default = Object(o.bind)(function(e, n) {
                return a.a.stage(e, n),
                    function(e, n) {
                        return Object(i.a)({}, n)
                    }
            })(function e() {
                return r.createElement("div", {
                    className: "brand-quick-link-tiles-QuickLinkTilesContainer__container--3oM_L"
                }, r.createElement(a.a, null))
            })
        },
        "@ta/brand.global-nav-state": function(n, t) {
            n.exports = e
        },
        "@ta/brand.trip-search-geopill-flyout": function(e, t) {
            e.exports = n
        },
        "@ta/events.lifecycle": function(e, n) {
            e.exports = t
        },
        "@ta/overlays.popover": function(e, n) {
            e.exports = i
        },
        "@ta/social.scroll": function(e, n) {
            e.exports = r
        },
        "@ta/styleguide.icon": function(e, n) {
            e.exports = o
        },
        "dll-reference @ta/common.global": function(e, n) {
            e.exports = a
        }
    })
});
//# sourceMappingURL=brand.quick-link-tiles.c7fc4f9367.js.map