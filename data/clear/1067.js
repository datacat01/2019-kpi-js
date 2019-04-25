define("brand.footer", ["@ta/overlays.headers", "@ta/overlays.managers", "@ta/overlays.responsive-attached-overlay", "@ta/styleguide.loading", "@ta/common.global", "ta/popups/CookieSettingsPanel", "ta/util/Currency"], function(e, t, n, o, r, a, c) {
    return function(e) {
        var t = {};

        function n(o) {
            if (t[o]) return t[o].exports;
            var r = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
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
                for (var r in e) n.d(o, r, function(t) {
                    return e[t]
                }.bind(null, r));
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
        }, n.p = "", n(n.s = "./roots/brand/footer/FooterContainer.jsx")
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

            function r(e, t, n) {
                return t && o(e.prototype, t), n && o(e, n), e
            }
            n.d(t, "a", function() {
                return r
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
        "./node_modules/@babel/runtime/helpers/esm/extends.js": function(e, t, n) {
            "use strict";

            function o() {
                return (o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
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
                return r
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function r(e, t) {
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
                return r
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        Object(o.a)(e, t, n[t])
                    })
                }
                return e
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function a(e, t) {
                return !t || "object" !== Object(o.a)(t) && "function" != typeof t ? Object(r.a)(e) : t
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

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" === o(Symbol.iterator) ? function e(t) {
                    return o(t)
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : o(t)
                })(e)
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/js-cookie/src/js.cookie.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/js-cookie/src/js.cookie.js")
        },
        "./node_modules/react-redux/es/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./node_modules/webpack/buildin/global.js": function(e, t) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || Function("return this")() || (0, eval)("this")
            } catch (e) {
                "object" == typeof window && (n = window)
            }
            e.exports = n
        },
        "./packages/common/api/api.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/api/api.jsx")
        },
        "./packages/common/data-cacher/DataCacher.jsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return d
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                m = n("./node_modules/react/index.js"),
                d = function e(t) {
                    return function(e, n) {
                        return t.reduce(function(t, o) {
                            return t || e[o] !== n[o]
                        }, !1)
                    }
                };
            t.b = function e(t) {
                return function(e) {
                    var n = function(n) {
                        function d() {
                            var e, t;
                            Object(r.a)(this, d);
                            for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                            return t = Object(c.a)(this, (e = Object(i.a)(d)).call.apply(e, [this].concat(o))), Object(u.a)(Object(s.a)(Object(s.a)(t)), "oldProps", void 0), t
                        }
                        return Object(l.a)(d, n), Object(a.a)(d, [{
                            key: "render",
                            value: function n() {
                                var r = !this.oldProps || !this.props.loading || t && t(this.oldProps, this.props);
                                r && (this.oldProps = Object(o.a)({}, this.props, {
                                    loading: !0,
                                    cachedData: !0,
                                    newProps: this.props
                                }));
                                var a = Object(o.a)({}, this.props, {
                                    cachedData: !1
                                });
                                return m.createElement(e, r ? a : this.oldProps)
                            }
                        }]), d
                    }(m.Component);
                    return n.displayName = "DataCacher(".concat(e.displayName || e.name || "Unknown", ")"), n
                }
            }
        },
        "./packages/common/i18n/i18n.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/common/routing/routing.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/routing/routing.jsx")
        },
        "./packages/common/tracking/tracking.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/tracking/tracking.jsx")
        },
        "./roots/brand/footer/ExploreLinksSection.jsx": function(e, t, n) {
            "use strict";
            var o = n("./node_modules/react/index.js"),
                r = n("./roots/brand/footer/SimpleLinkSection.jsx");
            t.a = function e(t) {
                var n = t.links;
                return o.createElement("div", null, o.createElement(r.a, {
                    links: n
                }))
            }
        },
        "./roots/brand/footer/FooterContainer.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("./node_modules/react/index.js"),
                r = n("./packages/common/api/api.jsx"),
                a = n("@ta/styleguide.loading"),
                c = n("./packages/common/data-cacher/DataCacher.jsx"),
                i = n("./packages/common/i18n/i18n.jsx"),
                l = n("./roots/brand/footer/SectionTitle.jsx"),
                s = n("./roots/brand/footer/SimpleLinkSection.jsx"),
                u = n("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                m = n("./packages/common/routing/routing.jsx"),
                d = n("./packages/common/tracking/tracking.jsx"),
                p = function e(t) {
                    var n = t.socialLinks,
                        r = {
                            module: "Footer",
                            action: "click"
                        },
                        a = n.map(function(e) {
                            return o.createElement("li", {
                                key: e.url
                            }, o.createElement(d.ClickTracker, Object(u.a)({}, r, {
                                context: e.trackAction
                            }), o.createElement(m.Link, {
                                href: e.url,
                                className: "ui_link ".concat("brand-footer-SocialLinksSection__socialLink--2Ap2s")
                            }, o.createElement("img", {
                                src: e.iconUrl,
                                alt: "{text}",
                                className: "brand-footer-SocialLinksSection__socialIcon--1S9y9"
                            }), o.createElement("span", {
                                className: "brand-footer-SocialLinksSection__socialText--3fKs7"
                            }, e.text))))
                        });
                    return o.createElement("ul", null, a)
                },
                f = function e(t) {
                    var n = t.partnerLinks,
                        r = {
                            module: "Footer",
                            action: "click"
                        };
                    return o.createElement("ul", null, n.map(function(e) {
                        return o.createElement(d.ClickTracker, Object(u.a)({}, r, {
                            context: e.trackAction,
                            key: e.link
                        }), o.createElement("li", {
                            className: "brand-footer-PartnerSitesSection__partnerLink--29JM1",
                            dangerouslySetInnerHTML: {
                                __html: e.link
                            }
                        }))
                    }))
                },
                b = function e(t) {
                    var n = t.logoData,
                        r = n.resize_logo ? "brand-footer-LogoSlogan__resizeImg--TLaZQ" : "";
                    return o.createElement("div", {
                        className: "brand-footer-LogoSlogan__logoWithSlogan--1p9JS"
                    }, o.createElement("img", {
                        className: r,
                        src: n.primary_logo_svg,
                        alt: Object(i.localize)("common_TripAdvisor")
                    }), o.createElement("span", {
                        className: "brand-footer-LogoSlogan__footerTagLine--1U_Rr"
                    }, Object(i.unescaped)(Object(i.localize)("footer_tag_line_rebrand_v2"))))
                },
                _ = n("./roots/brand/footer/Legal.jsx"),
                v = function e(t) {
                    var n = t.legalData,
                        r = t.logoData;
                    return o.createElement("div", null, o.createElement(b, {
                        logoData: r
                    }), o.createElement(_.a, {
                        legalData: n
                    }))
                },
                y = n("./roots/brand/footer/PickerSection.jsx"),
                g = n("./roots/brand/footer/ExploreLinksSection.jsx"),
                k = n("./roots/brand/footer/layouts/layoutCommon.less"),
                E = function e(t) {
                    var n = t.footerData,
                        r = t.logoData;
                    return o.createElement("div", {
                        className: k.a.footerContainer
                    }, o.createElement("div", {
                        className: "ui_container"
                    }, o.createElement("div", {
                        className: "ui_columns is-multiline is-mobile"
                    }, o.createElement("div", {
                        className: "ui_column is-2-tablet is-6-mobile"
                    }, o.createElement("div", {
                        className: k.a.footerSection
                    }, o.createElement(l.a, {
                        text: Object(i.localize)("footer_about_ta")
                    }), o.createElement(s.a, {
                        links: n.links.aboutLinks
                    })), o.createElement("div", {
                        className: k.a.footerSection
                    }, o.createElement(l.a, {
                        text: Object(i.localize)("footer_do_business")
                    }), o.createElement(s.a, {
                        links: n.links.businessLinks
                    }))), o.createElement("div", {
                        className: "ui_column is-2-tablet is-6-mobile"
                    }, o.createElement("div", {
                        className: k.a.footerSection
                    }, o.createElement(l.a, {
                        text: Object(i.localize)("footer_explore")
                    }), o.createElement(g.a, {
                        links: n.links.exploreLinks
                    })), o.createElement("div", {
                        className: k.a.footerSection
                    }, o.createElement(l.a, {
                        text: Object(i.localize)("footer_get_app")
                    }), o.createElement(s.a, {
                        links: n.links.appLinks
                    }))), o.createElement("div", {
                        className: "ui_column ".concat(k.a.topOnMobile, " is-3-tablet is-12-mobile")
                    }, o.createElement("div", {
                        className: "".concat(k.a.footerSection, " ").concat(k.a.sectionWithBorderSeparatorMobileOnly)
                    }, o.createElement(l.a, {
                        text: Object(i.localize)("footer_currency_country")
                    }), o.createElement(y.a, {
                        currencyPreview: n.currencyPreview,
                        posPreview: n.posPreview
                    })), o.createElement("div", {
                        className: "".concat(k.a.footerSection, " is-hidden-mobile")
                    }, o.createElement(l.a, {
                        text: Object(i.localize)("footer_follow")
                    }), o.createElement(p, {
                        socialLinks: n.links.socialLinks
                    }))), n.links.partnerLinks.length ? o.createElement("div", {
                        className: "ui_column is-5-tablet is-hidden-mobile"
                    }, o.createElement("div", {
                        className: "".concat(k.a.footerSection, " ").concat(k.a.sectionWithBorderSeparator)
                    }, o.createElement(l.a, {
                        text: Object(i.localize)("footer_ta_sites")
                    }), o.createElement(f, {
                        partnerLinks: n.links.partnerLinks
                    }))) : null, o.createElement("div", {
                        className: "ui_column is-12-tablet is-12-mobile ".concat(k.a.homepageBottom)
                    }, o.createElement(v, {
                        logoData: r,
                        legalData: n.legal
                    })))))
                },
                j = function e(t) {
                    var n = t.footerData,
                        r = t.logoData;
                    return o.createElement("div", {
                        className: k.a.footerContainer
                    }, o.createElement("div", {
                        className: "ui_container"
                    }, o.createElement("div", {
                        className: "ui_columns is-multiline is-mobile"
                    }, o.createElement("div", {
                        className: "ui_column ".concat(k.a.bottomOnMobile, " ").concat(k.a.bottomOnTablet, " is-6-desktop is-12-tablet is-12-mobile")
                    }, o.createElement(v, {
                        logoData: r,
                        legalData: n.legal
                    })), o.createElement("div", {
                        className: "ui_column is-6-mobile"
                    }, o.createElement("div", {
                        className: k.a.footerSection
                    }, o.createElement(l.a, {
                        text: Object(i.localize)("footer_explore")
                    }), o.createElement(g.a, {
                        links: n.links.exploreLinks
                    }))), o.createElement("div", {
                        className: "ui_column is-6-mobile"
                    }, o.createElement("div", {
                        className: k.a.footerSection
                    }, o.createElement(l.a, {
                        text: Object(i.localize)("footer_get_app")
                    }), o.createElement(s.a, {
                        links: n.links.appLinks
                    }))), o.createElement("div", {
                        className: "ui_column ".concat(k.a.topOnMobile, " is-12-mobile")
                    }, o.createElement("div", {
                        className: "".concat(k.a.footerSection, " ").concat(k.a.sectionWithBorderSeparatorMobileOnly)
                    }, o.createElement(l.a, {
                        text: Object(i.localize)("footer_currency_country")
                    }), o.createElement(y.a, {
                        currencyPreview: n.currencyPreview,
                        posPreview: n.posPreview
                    }))))))
                },
                h = function e(t) {
                    var n = t.footerData,
                        r = t.logoData,
                        a = t.includeLogo,
                        c = t.noPadding;
                    return o.createElement("div", {
                        className: "".concat(k.a.footerContainer, " ").concat(c ? "brand-footer-layouts-MobileMinimalLayout__noPadding--35RQd" : "")
                    }, o.createElement("div", {
                        className: "ui_container"
                    }, o.createElement("div", {
                        className: "ui_columns is-multiline is-mobile"
                    }, o.createElement("div", {
                        className: "ui_column ".concat(k.a.bottomOnMobile, " ").concat(k.a.bottomOnTablet, " is-6-desktop is-12-tablet is-12-mobile")
                    }, a ? o.createElement(v, {
                        logoData: r,
                        legalData: n.legal
                    }) : o.createElement(_.a, {
                        legalData: n.legal
                    })))))
                };
            h.defaultProps = {
                includeLogo: !1,
                noPadding: !1
            };
            var O = h,
                x = function e(t) {
                    var n = t.footerData,
                        r = t.logoData;
                    return o.createElement("div", {
                        className: k.a.footerContainer
                    }, o.createElement("div", {
                        className: "ui_container"
                    }, o.createElement("div", {
                        className: "ui_columns is-multiline is-mobile"
                    }, o.createElement("div", {
                        className: "ui_column ".concat(k.a.bottomOnMobile, " is-7-tablet is-12-mobile")
                    }, o.createElement(v, {
                        logoData: r,
                        legalData: n.legal
                    })), o.createElement("div", {
                        className: "ui_column is-2-tablet is-12-mobile"
                    }, o.createElement("div", {
                        className: k.a.footerSection
                    }, o.createElement(l.a, {
                        text: Object(i.localize)("footer_explore")
                    }), o.createElement(g.a, {
                        links: n.links.exploreLinks
                    }))), o.createElement("div", {
                        className: "ui_column ".concat(k.a.topOnMobile, " is-3-tablet is-12-mobile")
                    }, o.createElement("div", {
                        className: "".concat(k.a.footerSection, " ").concat(k.a.sectionWithBorderSeparatorMobileOnly)
                    }, o.createElement(l.a, {
                        text: Object(i.localize)("footer_currency_country")
                    }), o.createElement(y.a, {
                        currencyPreview: n.currencyPreview,
                        posPreview: n.posPreview
                    }))))))
                },
                S = function e(t) {
                    var n = t.footerData,
                        r = t.logoData;
                    return o.createElement("div", {
                        className: k.a.footerContainer
                    }, o.createElement("div", {
                        className: "ui_container"
                    }, o.createElement("div", {
                        className: "".concat(k.a.bottomOnMobile, " ").concat(k.a.bottomOnTablet)
                    }, o.createElement(v, {
                        logoData: r,
                        legalData: n.legal
                    }))))
                },
                C = ["Home"],
                L = ["LocalMapsRedesign"],
                P = Object(r.bind)(function(e, t) {
                    var n = t("/data/1.0/brand/footer?".concat(function e(t) {
                            var n = t.meta,
                                o = n.initialServletName,
                                r = n.device,
                                a = t.i18n,
                                c = a.locale,
                                i = a.currencyCode,
                                l = t.tracking.mcid,
                                s = t.meta.forceFullSite ? "DESKTOP" : r.viewportCategory,
                                u = {
                                    servlet: o,
                                    locale: c,
                                    currencyCode: i,
                                    mcid: l,
                                    geoId: t.route.geo ? t.route.geo : null,
                                    detailId: t.route.detail ? t.route.detail : null,
                                    viewportCategory: s
                                },
                                m = {};
                            return Object.keys(u).forEach(function(e) {
                                null != u[e] && (m[e] = u[e])
                            }), new URLSearchParams(m)
                        }(e).toString())),
                        o = t("/data/1.0/brand/logo?".concat(function e(t) {
                            var n = {
                                    servletName: t.meta.initialServletName,
                                    locale: t.i18n.locale
                                },
                                o = {};
                            return Object.keys(n).forEach(function(e) {
                                null != n[e] && (o[e] = n[e])
                            }), new URLSearchParams(o)
                        }(e).toString()));
                    return function(e) {
                        return {
                            footerApi: n.get(),
                            logoApi: o.get(),
                            servletName: e.meta.initialServletName,
                            viewportCategory: e.meta.device.viewportCategory,
                            forceFullSite: e.meta.forceFullSite
                        }
                    }
                })(Object(c.b)()(function e(t) {
                    var n = t.footerApi,
                        r = t.logoApi,
                        c = t.servletName,
                        i = t.viewportCategory,
                        l = t.forceFullSite,
                        s = n.data,
                        u = r.data;
                    return s && u ? L.includes(c) ? o.createElement(S, {
                        footerData: s,
                        logoData: u
                    }) : "MobileLocalMaps" === c || "TabletLocalMaps" === c ? o.createElement(O, {
                        footerData: s,
                        logoData: u,
                        noPadding: !0
                    }) : "MOBILE" !== i || l ? C.includes(c) ? o.createElement(E, {
                        footerData: s,
                        logoData: u
                    }) : o.createElement(x, {
                        footerData: s,
                        logoData: u
                    }) : "MobileVacationRentalInquiry" === c ? o.createElement(O, {
                        footerData: s,
                        logoData: u,
                        includeLogo: !0
                    }) : o.createElement(j, {
                        footerData: s,
                        logoData: u
                    }) : o.createElement(a.LoadingSpinner, null)
                }));
            t.default = P
        },
        "./roots/brand/footer/Legal.jsx": function(e, t, n) {
            "use strict";
            var o = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = n("./node_modules/react/index.js"),
                m = n("./packages/common/i18n/i18n.jsx"),
                d = n("./packages/common/routing/routing.jsx"),
                p = n("ta/popups/CookieSettingsPanel"),
                f = n.n(p),
                b = n("./packages/common/tracking/tracking.jsx"),
                _ = (new Date).getFullYear(),
                v = function(e) {
                    function t() {
                        var e, n;
                        Object(o.a)(this, t);
                        for (var r = arguments.length, i = new Array(r), u = 0; u < r; u++) i[u] = arguments[u];
                        return n = Object(a.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(i))), Object(s.a)(Object(l.a)(Object(l.a)(n)), "state", {
                            disclaimerExpanded: !1
                        }), Object(s.a)(Object(l.a)(Object(l.a)(n)), "expandDisclaimer", function() {
                            n.setState({
                                disclaimerExpanded: !0
                            })
                        }), Object(s.a)(Object(l.a)(Object(l.a)(n)), "handleJsClick", function(e, t) {
                            e.persist(), "cookie-consent" === t.idForJS && f()()
                        }), n
                    }
                    return Object(i.a)(t, e), Object(r.a)(t, [{
                        key: "disclaimerTextChunk",
                        value: function e() {
                            return this.state.disclaimerExpanded ? u.createElement("span", {
                                className: "is-hidden-mobile"
                            }, Object(m.unescaped)(Object(m.localize)("footer_disclaimer_full_text_v3"))) : u.createElement("div", {
                                className: "is-hidden-mobile"
                            }, Object(m.localize)("footer_26ed"), " ", u.createElement("span", {
                                id: "TERMS",
                                className: "ui_link ".concat("brand-footer-Legal__expandLink--1gpBv"),
                                onClick: this.expandDisclaimer
                            }, Object(m.localize)("common_more_ffffe87d")))
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this;
                            return u.createElement("div", {
                                className: "brand-footer-Legal__container--1Doud"
                            }, Object(m.localize)("common_26ec", {
                                0: _
                            }), " ", Object(m.localize)("common_Allrightsreserved"), u.createElement("div", {
                                className: "brand-footer-Legal__miscLinksContainer--1oR5w"
                            }, this.props.legalData.miscLinks.map(function(e, n) {
                                return u.createElement("span", {
                                    key: e.url
                                }, n > 0 ? " | " : "", u.createElement(b.ClickTracker, {
                                    module: "Footer",
                                    action: "click",
                                    context: e.trackAction,
                                    useSpan: !0
                                }, e.idForJS ? u.createElement("span", {
                                    onClick: function n(o) {
                                        return t.handleJsClick(o, e)
                                    },
                                    className: "ui_link ".concat("brand-footer-Legal__miscLink--1ndK-")
                                }, e.text) : u.createElement(d.Link, {
                                    href: e.url,
                                    className: "ui_link ".concat("brand-footer-Legal__miscLink--1ndK-"),
                                    target: e.newWindow ? "_blank" : void 0
                                }, e.text)))
                            })), this.props.legalData.showVfmText ? u.createElement("div", null, Object(m.localize)("photos_provided_by_2_1bed", {
                                0: "VFM Leonardo"
                            })) : "", this.props.legalData.showDisclaimerText ? this.disclaimerTextChunk() : null, u.createElement("div", {
                                className: "is-hidden-mobile"
                            }, Object(m.localize)("footer_extended_248")))
                        }
                    }]), t
                }(u.Component);
            t.a = v
        },
        "./roots/brand/footer/PickerSection.jsx": function(e, t, n) {
            "use strict";
            var o = n("./node_modules/react/index.js"),
                r = n("./node_modules/react-redux/es/index.js"),
                a = n("./packages/common/tracking/tracking.jsx"),
                c = n.n(a),
                i = n("@ta/overlays.managers"),
                l = n("@ta/overlays.responsive-attached-overlay"),
                s = n.n(l),
                u = function e(t) {
                    var n = t.children,
                        r = t.opened;
                    return o.createElement("div", {
                        className: "brand-footer-pickers-PickerPreview__container--1B1FW"
                    }, n, r ? o.createElement("span", {
                        className: "ui_icon caret-up ".concat("brand-footer-pickers-PickerPreview__closeIcon--2qm2d")
                    }) : o.createElement("span", {
                        className: "ui_icon caret-down ".concat("brand-footer-pickers-PickerPreview__openIcon--UOg6M")
                    }))
                },
                m = function e(t) {
                    var n = t.preview;
                    return o.createElement("div", null, o.createElement("span", {
                        className: "brand-footer-pickers-CurrencyPreviewContents__symbol--3xPOs"
                    }, n.symbol), n.code)
                },
                d = n("./packages/common/api/api.jsx"),
                p = n("./packages/common/i18n/i18n.jsx"),
                f = n("@ta/overlays.headers"),
                b = n("@ta/styleguide.loading"),
                _ = n("ta/util/Currency"),
                v = n.n(_),
                y = function e(t) {
                    var n = t.currency,
                        r = t.currentCurrencyCode,
                        a = t.selected;
                    return o.createElement("li", {
                        className: "".concat("brand-footer-pickers-CurrencyListItem__currencyItem--_J2xZ", " ui_link ").concat(a ? "brand-footer-pickers-CurrencyListItem__selected--1zT-X" : ""),
                        onClick: function e() {
                            return v.a.setCurrencyAndReload(n.code, r)
                        },
                        key: n.code
                    }, o.createElement("div", {
                        className: "brand-footer-pickers-CurrencyListItem__currencySymbol--3LqBL"
                    }, n.symbol), o.createElement("div", {
                        className: "brand-footer-pickers-CurrencyListItem__currencyCode--2M7-E"
                    }, n.code), o.createElement("div", {
                        className: "brand-footer-pickers-CurrencyListItem__currencyName--2qbQ5"
                    }, n.name))
                };
            y.defaultProps = {
                selected: !1
            };
            var g = y,
                k = Object(d.bind)(function(e, t) {
                    var n = e.i18n,
                        o = n.currencyCode,
                        r = n.locale,
                        a = new URLSearchParams({
                            currencyCode: o,
                            locale: r
                        }),
                        c = t("/data/1.0/currency/list?".concat(a.toString()));
                    return function(e, t) {
                        return {
                            currentCurrencyCode: t.currentCurrencyCode,
                            apiResponse: c.get(),
                            showHeader: "MOBILE" === e.meta.device.viewportCategory
                        }
                    }
                })(function e(t) {
                    var n = t.apiResponse,
                        r = t.currentCurrencyCode,
                        a = t.showHeader;
                    return o.createElement("div", {
                        className: "brand-footer-pickers-CurrencyOverlayContents__overlayContents--CSY7S"
                    }, a ? o.createElement(f.TitleBar, null, Object(p.localize)("common_9bc")) : null, n.loading || !n.data ? o.createElement("div", {
                        className: "brand-footer-pickers-CurrencyOverlayContents__loaderWrap--Ybedt"
                    }, o.createElement(b.LoadingSpinner, null)) : o.createElement("ul", {
                        className: "brand-footer-pickers-CurrencyOverlayContents__currencyList--cUE0x"
                    }, o.createElement(g, {
                        currency: n.data.currentCurrency,
                        currentCurrencyCode: r,
                        selected: !0
                    }), n.data.majorCurrencies.map(function(e) {
                        return o.createElement(g, {
                            key: e.code,
                            currency: e,
                            currentCurrencyCode: r
                        })
                    }), o.createElement("li", {
                        className: "brand-footer-pickers-CurrencyOverlayContents__pickerDivider--2ExMe"
                    }), n.data.allCurrencies.map(function(e) {
                        return o.createElement(g, {
                            key: e.code,
                            currency: e,
                            currentCurrencyCode: r
                        })
                    })))
                }),
                E = Object(r.connect)(function(e) {
                    return {
                        currentLocale: e.i18n.locale,
                        isOpened: "currency-picker" === e.overlays.global,
                        srcServlet: e.tracking.analytics ? e.tracking.analytics.url : ""
                    }
                })(function e(t) {
                    var n = t.currencyPreview,
                        r = t.currentLocale,
                        c = t.isOpened,
                        l = t.srcServlet;
                    return o.createElement(s.a, {
                        name: "currency-picker",
                        position: "above",
                        alignEdge: "right",
                        contents: function e() {
                            return o.createElement(k, {
                                currentCurrencyCode: n && n.code
                            })
                        }
                    }, function(e) {
                        return o.createElement(i.Opener, {
                            name: "currency-picker"
                        }, function(t) {
                            return o.createElement("div", {
                                ref: e,
                                onClick: function e() {
                                    k.load(), t()
                                }
                            }, o.createElement(a.ClickTracker, {
                                module: "CURRENCY_PICKER",
                                action: "Open",
                                context: r,
                                srcServlet: l
                            }, o.createElement(u, {
                                opened: c
                            }, o.createElement(m, {
                                preview: n
                            }))))
                        })
                    })
                }),
                j = function e(t) {
                    var n = t.preview;
                    return o.createElement("div", null, n.country)
                },
                h = n("./node_modules/js-cookie/src/js.cookie.js"),
                O = n.n(h),
                x = Object(r.connect)(function(e) {
                    return {
                        cookieDomain: e.tracking.cookieDomain
                    }
                })(function e(t) {
                    return o.createElement("li", {
                        className: "".concat("brand-footer-pickers-PosListItem__posItem--32nNZ", " ").concat(t.pos.isCurrentPointOfSale ? "brand-footer-pickers-PosListItem__selected--OzXYp" : ""),
                        ref: function e(n) {
                            n && t.pos.isCurrentPointOfSale && n.scrollIntoView()
                        }
                    }, o.createElement("a", {
                        className: "".concat("brand-footer-pickers-PosListItem__posLink--2klWn", " ui_link"),
                        hrefLang: t.pos.headerContentLanguage,
                        title: t.pos.countryInLang,
                        href: t.pos.url,
                        onClick: function e() {
                            return function e(n) {
                                var o = {
                                    module: "POS_PICKER",
                                    action: "SELECT",
                                    context: "".concat(n.locale, "_FROM_").concat(t.currentLocale)
                                };
                                c()(o), O.a.remove("TAPD", {
                                    path: "/",
                                    domain: t.cookieDomain
                                })
                            }(t.pos)
                        }
                    }, o.createElement("span", null, t.pos.country)))
                }),
                S = function e(t) {
                    var n = t.region,
                        r = t.currentLocale;
                    return o.createElement("li", null, o.createElement("div", {
                        className: "brand-footer-pickers-PosRegion__regionHeading--1DGK8"
                    }, n.name), o.createElement("ul", null, n.pointOfSales.map(function(e) {
                        return o.createElement(x, {
                            pos: e,
                            key: e.url,
                            currentLocale: r
                        })
                    })))
                },
                C = Object(d.bind)(function(e, t) {
                    var n = e.meta.initialServletName,
                        o = e.i18n.locale,
                        r = new URLSearchParams({
                            servlet: n || "",
                            locale: o
                        }),
                        a = t("/data/1.0/pos/list?".concat(r.toString()));
                    return function(e) {
                        return {
                            apiResponse: a.get(),
                            showHeader: "MOBILE" === e.meta.device.viewportCategory,
                            currentLocale: e.i18n.locale
                        }
                    }
                })(function e(t) {
                    var n = t.apiResponse,
                        r = t.showHeader,
                        a = t.currentLocale;
                    return o.createElement("div", {
                        className: "brand-footer-pickers-PosOverlayContents__overlayContents--2ISS8"
                    }, r ? o.createElement(f.TitleBar, null, Object(p.localize)("footer_region")) : null, n.loading ? o.createElement("div", {
                        className: "brand-footer-pickers-PosOverlayContents__loaderWrap--3WDV5"
                    }, o.createElement(b.LoadingSpinner, null)) : o.createElement("ul", {
                        className: "brand-footer-pickers-PosOverlayContents__posRegions--2pjJI"
                    }, n.data && n.data.regions.map(function(e) {
                        return o.createElement(S, {
                            region: e,
                            key: e.region,
                            currentLocale: a
                        })
                    })))
                }),
                L = Object(r.connect)(function(e) {
                    return {
                        currentLocale: e.i18n.locale,
                        srcServlet: e.tracking.analytics ? e.tracking.analytics.url : ""
                    }
                })(function e(t) {
                    var n = t.posPreview,
                        r = t.currentLocale,
                        c = t.srcServlet;
                    return o.createElement(s.a, {
                        name: "pos-picker",
                        position: "above",
                        alignEdge: "right",
                        contents: function e() {
                            return o.createElement(C, null)
                        }
                    }, function(e) {
                        return o.createElement(i.Opener, {
                            name: "pos-picker"
                        }, function(t, i) {
                            return o.createElement("div", {
                                ref: e,
                                onClick: function e() {
                                    C.load(), t()
                                }
                            }, o.createElement(a.ClickTracker, {
                                module: "POS_PICKER",
                                action: "Open",
                                context: r,
                                srcServlet: c
                            }, o.createElement(u, {
                                opened: i
                            }, o.createElement(j, {
                                preview: n
                            }))))
                        })
                    })
                });
            t.a = function e(t) {
                var n = t.currencyPreview,
                    r = t.posPreview;
                return o.createElement("div", null, o.createElement("div", {
                    className: "brand-footer-PickerSection__pickerEntrypointWrap--1PSVX"
                }, o.createElement(E, {
                    currencyPreview: n
                })), o.createElement("div", {
                    className: "brand-footer-PickerSection__pickerEntrypointWrap--1PSVX"
                }, o.createElement(L, {
                    posPreview: r
                })))
            }
        },
        "./roots/brand/footer/SectionTitle.jsx": function(e, t, n) {
            "use strict";
            var o = n("./node_modules/react/index.js");
            t.a = function e(t) {
                var n = t.text;
                return o.createElement("div", {
                    className: "brand-footer-SectionTitle__sectionHeader--brZm6"
                }, n)
            }
        },
        "./roots/brand/footer/SimpleLinkSection.jsx": function(e, t, n) {
            "use strict";
            (function(e) {
                var o = n("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                    r = n("./node_modules/react/index.js"),
                    a = n("./node_modules/react-redux/es/index.js"),
                    c = n("./node_modules/js-cookie/src/js.cookie.js"),
                    i = n.n(c),
                    l = n("./packages/common/routing/routing.jsx"),
                    s = n("./packages/common/tracking/tracking.jsx"),
                    u = n("./roots/brand/footer/SimpleLinkSection.less");
                t.a = Object(a.connect)(function(e) {
                    return {
                        cookieDomain: e.meta.cookieDomain
                    }
                })(function t(n) {
                    var a = n.links,
                        c = n.cookieDomain,
                        m = {
                            module: "Footer",
                            action: "click"
                        },
                        d = a.map(function(t) {
                            return r.createElement("li", {
                                key: t.url
                            }, r.createElement(s.ClickTracker, Object(o.a)({}, m, {
                                context: t.trackAction,
                                forceAjax: t.forceAjaxTrack,
                                dstServlet: t.servletNameOverride || void 0
                            }), t.idForJS ? r.createElement("span", {
                                onClick: function n(o) {
                                    return function t(n, o) {
                                        n.persist(), "help_center" === o.idForJS && e.require(["trjs!brand/HelpCenterOverlay", "trcss!src/build/required/help_center_overlay"], function(e) {
                                            e.open(n.target, o.url)
                                        })
                                    }(o, t)
                                },
                                className: "ui_link ".concat(u.a.simpleFooterLink)
                            }, t.text) : r.createElement(l.Link, {
                                href: t.url,
                                className: "ui_link ".concat(u.a.simpleFooterLink),
                                target: t.newWindow ? "_blank" : void 0,
                                onClick: function e() {
                                    return function e(t) {
                                        if (t.pid) {
                                            var n = new Date((new Date).getTime() + 5e3);
                                            i.a.set("NPID", t.pid, {
                                                expires: n,
                                                path: "/",
                                                domain: c
                                            })
                                        }
                                    }(t)
                                }
                            }, t.text)))
                        });
                    return r.createElement("ul", null, d)
                })
            }).call(this, n("./node_modules/webpack/buildin/global.js"))
        },
        "./roots/brand/footer/SimpleLinkSection.less": function(e, t, n) {
            "use strict";
            t.a = {
                simpleFooterLink: "brand-footer-SimpleLinkSection__simpleFooterLink--2XVyA"
            }
        },
        "./roots/brand/footer/layouts/layoutCommon.less": function(e, t, n) {
            "use strict";
            t.a = {
                footerSection: "brand-footer-layouts-layoutCommon__footerSection--JoHHp",
                sectionWithBorderSeparator: "brand-footer-layouts-layoutCommon__sectionWithBorderSeparator--26f6a",
                footerContainer: "brand-footer-layouts-layoutCommon__footerContainer--2uNpx",
                pickerEntrypointWrap: "brand-footer-layouts-layoutCommon__pickerEntrypointWrap--1IP1x",
                homepageBottom: "brand-footer-layouts-layoutCommon__homepageBottom--ISdxW",
                bottomOnTablet: "brand-footer-layouts-layoutCommon__bottomOnTablet--h8VDN",
                sectionWithBorderSeparatorMobileOnly: "brand-footer-layouts-layoutCommon__sectionWithBorderSeparatorMobileOnly--wvQvB",
                topOnMobile: "brand-footer-layouts-layoutCommon__topOnMobile--1iyTt",
                bottomOnMobile: "brand-footer-layouts-layoutCommon__bottomOnMobile--1raPu"
            }
        },
        "@ta/overlays.headers": function(t, n) {
            t.exports = e
        },
        "@ta/overlays.managers": function(e, n) {
            e.exports = t
        },
        "@ta/overlays.responsive-attached-overlay": function(e, t) {
            e.exports = n
        },
        "@ta/styleguide.loading": function(e, t) {
            e.exports = o
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = r
        },
        "ta/popups/CookieSettingsPanel": function(e, t) {
            e.exports = a
        },
        "ta/util/Currency": function(e, t) {
            e.exports = c
        }
    })
});
//# sourceMappingURL=brand.footer.d87d1636a8.js.map