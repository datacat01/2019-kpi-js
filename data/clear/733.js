(window.webpackJsonp = window.webpackJsonp || []).push([
    [18, 93, 123], {
        2314: function(e, t, a) {
            "use strict";
            var l = i(a(5)),
                r = i(a(6)),
                n = "function" == typeof r.default && "symbol" == typeof l.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
                };

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FeaturedBreaker = void 0;
            var s, o, u = N(a(2)),
                d = N(a(7)),
                c = N(a(8)),
                m = N(a(9)),
                f = function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var l = t[a];
                            l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), (0, u.default)(e, l.key, l)
                        }
                    }
                    return function(t, a, l) {
                        return a && e(t.prototype, a), l && e(t, l), t
                    }
                }(),
                p = N(a(1)),
                g = N(a(0)),
                h = N(a(105)),
                y = N(a(20)),
                v = N(a(143)),
                b = N(a(21)),
                E = a(114),
                w = N(a(19)),
                k = N(a(37)),
                T = N(a(106));

            function N(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function _(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : n(t)) && "function" != typeof t ? e : t
            }
            var M = a(2030),
                S = (o = s = function(e) {
                    function t() {
                        var e, a, l;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                        return a = l = _(this, (e = t.__proto__ || (0, m.default)(t)).call.apply(e, [this].concat(n))), l.state = {
                            currentSlide: 0,
                            currentBreakpoint: ""
                        }, l.handleBreakpointChange = function() {
                            var e = k.default.current();
                            l.setState({
                                currentBreakpoint: e
                            })
                        }, l.ifArray = function(e) {
                            return Array.isArray(e)
                        }, l.slideToPrev = function() {
                            l.state.currentSlide > 0 && l.setState({
                                currentSlide: l.state.currentSlide - 1
                            })
                        }, l.slideToNext = function() {
                            var e = l.props.data;
                            if (e) {
                                var t = l.ifArray(e.assets) ? e.assets.length - 1 : 0;
                                l.state.currentSlide < t && l.setState({
                                    currentSlide: l.state.currentSlide + 1
                                })
                            }
                        }, l.slideRailStylesLeft = function() {
                            return {
                                transform: "translateX(-" + 100 * l.state.currentSlide + "%)"
                            }
                        }, l.slideRailStylesRight = function() {
                            var e = l.props.data;
                            if (e) {
                                var t = l.ifArray(e.assets) ? e.assets.length - 1 : 0;
                                return l.state.currentSlide === t ? {
                                    transform: "translateX(-" + 100 * (l.state.currentSlide + 1.1) + "%)"
                                } : {
                                    transform: "translateX(-" + 100 * (l.state.currentSlide + 1) + "%)"
                                }
                            }
                        }, l.setPrevArrowStyle = function() {
                            return 0 === l.state.currentSlide ? M.prevArrowInactive : M.prevArrow
                        }, l.setNextArrowStyle = function() {
                            var e = l.props.data;
                            if (e) {
                                var t = l.ifArray(e.assets) ? e.assets.length - 1 : 0;
                                return l.state.currentSlide >= t ? M.nextArrowInactive : M.nextArrow
                            }
                        }, l.sizeByBreakpoint = function() {
                            var e = void 0;
                            switch (l.state.currentBreakpoint) {
                                case "mobile":
                                    e = 275;
                                    break;
                                case "tablet":
                                case "small_desktop":
                                    e = 515;
                                    break;
                                default:
                                    e = 735
                            }
                            return e
                        }, l.getEvent = function(e) {
                            return (e || []).filter(function(e) {
                                return "event" === (e || {}).type
                            })
                        }, l.convertDate = function(e) {
                            return (0, h.default)(e).format("MMM D, YYYY")
                        }, l.getItemTitle = function(e, t, a, l) {
                            return e ? p.default.createElement(w.default, {
                                to: e,
                                brand: l.brand,
                                assetType: l.type,
                                premium: l.premium,
                                sectionSubType: l.section && l.section.subType,
                                native: l.native
                            }, p.default.createElement("div", {
                                className: a
                            }, (0, E.truncateString)(t, 100))) : p.default.createElement("div", {
                                className: a
                            }, t)
                        }, l.getSlideTitle = function(e) {
                            return p.default.createElement("div", {
                                className: M.itemWrapper
                            }, e.linkHeadline && l.getItemTitle(e.url, e.linkHeadline, M.itemTitle, e), !e.linkHeadline && e.shorterHeadline && l.getItemTitle(e.url, e.shorterHeadline, M.itemTitle, e), !e.linkHeadline && !e.shorterHeadline && l.getItemTitle(e.url, e.title, M.itemTitle, e), e.author && e.sourceOrganization && l.getAuthorSource(e.sourceOrganization, e.author, e.creatorOverwrite, e))
                        }, l.getAuthorSource = function(e, t, a) {
                            if (e.length) {
                                if ("CNBC.com" !== e[0].name) return p.default.createElement("div", {
                                    className: M.itemAuthor
                                }, e[0].name);
                                if (t.length) {
                                    var l = t.map(function(e) {
                                        return e.name
                                    }).join(", ");
                                    return a ? (l = l + ", " + a, p.default.createElement("div", {
                                        className: M.itemAuthor
                                    }, l)) : p.default.createElement("div", {
                                        className: M.itemAuthor
                                    }, l)
                                }
                            }
                            if (t.length) {
                                var r = t.map(function(e) {
                                    return e.name
                                }).join(",");
                                return p.default.createElement("div", {
                                    className: M.itemAuthor
                                }, r)
                            }
                            if (a) return p.default.createElement("div", {
                                className: M.itemAuthor
                            }, a)
                        }, l.getBreakerTopSection = function(e) {
                            var t = e.logo,
                                a = e.url,
                                r = e.title,
                                n = e.displayShowTime,
                                i = e.showTime,
                                s = e.eventData,
                                o = e.type;
                            return p.default.createElement("div", null, p.default.createElement("div", {
                                className: M.heading
                            }, t && (a ? p.default.createElement("div", {
                                className: M.headingImage
                            }, p.default.createElement(w.default, {
                                to: a
                            }, p.default.createElement("img", {
                                src: t.url,
                                alt: t.title
                            }))) : p.default.createElement("div", {
                                className: M.headingImage
                            }, p.default.createElement("img", {
                                src: t.url,
                                alt: t.title
                            }))), !t && (a && "collection" !== o ? p.default.createElement("h3", {
                                className: M.headingText
                            }, p.default.createElement(w.default, {
                                className: M.headingLink,
                                to: a
                            }, r)) : p.default.createElement("h3", {
                                className: M.headingText
                            }, r)), n && i && p.default.createElement("time", {
                                className: M.airTime
                            }, i), 0 !== s.length && p.default.createElement("p", {
                                className: M.eventTime
                            }, p.default.createElement("time", null, l.convertDate(s[0].startDate)), " - ", s[0].location)), p.default.createElement("div", {
                                className: M.arrowContainer
                            }, p.default.createElement("button", {
                                className: l.setPrevArrowStyle(),
                                onClick: l.slideToPrev,
                                "aria-label": "previous-button"
                            }, p.default.createElement("span", {
                                className: "icon-arrow-left"
                            })), p.default.createElement("button", {
                                className: l.setNextArrowStyle(),
                                onClick: l.slideToNext,
                                "aria-label": "next-button"
                            }, p.default.createElement("span", {
                                className: "icon-arrow-right"
                            }))))
                        }, l.getBreakerSlides = function(e, t) {
                            return Array.isArray(e) && p.default.createElement("div", {
                                className: M.slideContainer
                            }, p.default.createElement("div", {
                                className: M.leftSlide
                            }, p.default.createElement("div", {
                                className: M.slideRail,
                                style: l.slideRailStylesLeft()
                            }, l.getSlides(e, t))), p.default.createElement("div", {
                                className: M.rightSlide
                            }, p.default.createElement("div", {
                                className: M.slideRail,
                                style: l.slideRailStylesRight()
                            }, l.getSlides(e, t))))
                        }, l.getSlides = function(e, t) {
                            return e.map(function(e, a) {
                                return p.default.createElement(T.default, null, p.default.createElement("div", {
                                    key: a,
                                    className: M.item,
                                    style: e.promoImage && {
                                        backgroundImage: "url(" + e.promoImage.url + "&w=" + l.sizeByBreakpoint() + "&h=" + Math.floor(l.sizeByBreakpoint() / 2) + ")"
                                    }
                                }, (-1 !== t.indexOf("show") || "video" === t) && p.default.createElement(v.default, {
                                    isFeatured: !0
                                }), l.getSlideTitle(e)))
                            })
                        }, _(l, a)
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : n(t)));
                        e.prototype = (0, c.default)(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (d.default ? (0, d.default)(e, t) : e.__proto__ = t)
                    }(t, p.default.Component), f(t, [{
                        key: "componentDidMount",
                        value: function() {
                            y.default.on("breakpointChange", this.handleBreakpointChange)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            y.default.remove("breakpointChange", this.handleBreakpointChange)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.data,
                                a = e.dataId;
                            if (!t) return p.default.createElement(b.default, {
                                data: {
                                    error: "section query came back as null"
                                },
                                errorSource: "FeaturedBreaker",
                                errorProps: this.props
                            });
                            if (!Array.isArray(t.assets) || 0 === t.assets.length) return null;
                            var l = this.getEvent(t.assets),
                                r = t.logo,
                                n = t.url,
                                i = t.title,
                                s = t.assets,
                                o = t.showTime,
                                u = t.subType,
                                d = t.type,
                                c = null != u && -1 !== u.indexOf("show");
                            return p.default.createElement("div", {
                                className: M.featuredBreaker,
                                id: a
                            }, p.default.createElement("div", {
                                className: M.wrapper
                            }, this.getBreakerTopSection({
                                logo: r,
                                url: n,
                                title: i,
                                displayShowTime: c,
                                showTime: o,
                                eventData: l,
                                type: d
                            }), this.getBreakerSlides(s, u)))
                        }
                    }]), t
                }(), s.propTypes = {
                    data: g.default.object.isRequired,
                    dataId: g.default.oneOfType([g.default.string, g.default.number]).isRequired
                }, o);
            t.FeaturedBreaker = S, t.default = S
        },
        2317: function(e, t, a) {
            "use strict";
            var l = i(a(5)),
                r = i(a(6)),
                n = "function" == typeof r.default && "symbol" == typeof l.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
                };

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = g(a(2)),
                o = g(a(7)),
                u = g(a(8)),
                d = g(a(9)),
                c = function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var l = t[a];
                            l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), (0, s.default)(e, l.key, l)
                        }
                    }
                    return function(t, a, l) {
                        return a && e(t.prototype, a), l && e(t, l), t
                    }
                }(),
                m = a(1),
                f = g(m),
                p = g(a(0));

            function g(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function h(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : n(t)) && "function" != typeof t ? e : t
            }
            var y = {
                    m: 760,
                    l: 1020,
                    xl: 1340
                },
                v = function(e) {
                    function t() {
                        var e, a, l;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                        return a = l = h(this, (e = t.__proto__ || (0, d.default)(t)).call.apply(e, [this].concat(n))), l.state = {
                            error: !1
                        }, l.handleImageError = function() {
                            return l.setState({
                                error: !0
                            })
                        }, h(l, a)
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : n(t)));
                        e.prototype = (0, u.default)(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (o.default ? (0, o.default)(e, t) : e.__proto__ = t)
                    }(t, m.Component), c(t, [{
                        key: "srcSet",
                        value: function(e) {
                            var t = this.getSrc(e),
                                a = "(min-width: " + y[e] + "px)";
                            return t ? f.default.createElement("source", {
                                srcSet: t,
                                media: a
                            }) : null
                        }
                    }, {
                        key: "getSrc",
                        value: function(e) {
                            var t = this.props,
                                a = t.url,
                                l = t.viewportSizes,
                                r = t.aspectRatio,
                                n = l[e] || {},
                                i = n.width,
                                s = n.height;
                            if (!i && !s) return a;
                            if (i && s) return a + (a.includes("?") ? "&" : "?") + "w=" + i + "&h=" + s;
                            if (!i && s) {
                                var o = Math.round(s * r);
                                return a + (a.includes("?") ? "&" : "?") + "w=" + o + "&h=" + s
                            }
                            var u = Math.round(i / r);
                            return a + (a.includes("?") ? "&" : "?") + "w=" + i + "&h=" + u
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.alt,
                                a = e.className,
                                l = this.state.error ? {
                                    visibility: "hidden"
                                } : {};
                            return f.default.createElement("picture", {
                                style: l
                            }, this.srcSet("xl"), this.srcSet("l"), this.srcSet("m"), f.default.createElement("img", {
                                src: this.getSrc("s"),
                                alt: t,
                                className: a,
                                onError: this.handleImageError
                            }))
                        }
                    }]), t
                }();
            v.defaultProps = {
                alt: "",
                viewportSizes: {
                    s: {
                        width: 0
                    },
                    m: {
                        width: 0
                    },
                    l: {
                        width: 0
                    },
                    xl: {
                        width: 0
                    }
                },
                aspectRatio: 2,
                className: ""
            }, v.propTypes = {
                url: p.default.string.isRequired,
                alt: p.default.string,
                viewportSizes: p.default.object,
                aspectRatio: p.default.number,
                className: p.default.string
            }, t.default = v
        },
        2338: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MarketsModule = void 0;
            var l = m(a(1)),
                r = m(a(0)),
                n = m(a(2346)),
                i = m(a(694)),
                s = m(a(382)),
                o = m(a(19)),
                u = m(a(15)),
                d = m(a(700)),
                c = m(a(2347));

            function m(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var f = u.default.getProperties().CNBC_BASE,
                p = a(2039),
                g = t.MarketsModule = function(e) {
                    var t = e.data,
                        a = e.pollRate,
                        r = e.dataId,
                        u = e.hasHeader;
                    if (!t) return null;
                    var m = Array.isArray(t.relatedContent) && t.relatedContent.length && t.relatedContent[0];
                    return l.default.createElement("section", {
                        className: p.container,
                        id: "HP-MarketsModule"
                    }, l.default.createElement("section", {
                        className: p.top
                    }, u && l.default.createElement("div", {
                        className: p.title
                    }, l.default.createElement("h2", null, l.default.createElement(o.default, {
                        to: f + "/us-market-movers/"
                    }, "Markets")), l.default.createElement(s.default, {
                        id: "SponsorLogo-" + r,
                        target: "module=MarketsModule"
                    })), l.default.createElement(d.default, {
                        data: m
                    })), l.default.createElement("section", {
                        className: p.row
                    }, l.default.createElement("section", {
                        className: p.leftColumn
                    }, l.default.createElement("div", {
                        className: p.marketTable
                    }, l.default.createElement(i.default, {
                        title: "Most Active"
                    }), l.default.createElement(n.default, {
                        headers: ["Name", "Price", "CHG", "%CHG", "Vol"],
                        moduleType: "VOLUME",
                        pollRate: a,
                        tableType: "market"
                    })), l.default.createElement("div", {
                        className: p.marketTable
                    }, l.default.createElement(i.default, {
                        title: "Unusual Volume"
                    }), l.default.createElement(n.default, {
                        headers: ["Name", "Price", "CHG", "%CHG", "x10 Day Vol"],
                        moduleType: "PCT_10_VOL",
                        pollRate: a,
                        tableType: "market"
                    }))), l.default.createElement("section", {
                        className: p.rightColumn
                    }, l.default.createElement(c.default, {
                        data: t.assets,
                        dataId: "MarketNews-" + r
                    }))))
                };
            g.defaultProps = {
                hasHeader: !1
            }, g.propTypes = {
                data: r.default.object.isRequired,
                pollRate: r.default.number.isRequired,
                hasHeader: r.default.bool,
                dataId: r.default.string.isRequired
            }, t.default = g
        },
        2341: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = o(a(1)),
                r = o(a(0)),
                n = o(a(699)),
                i = o(a(2342)),
                s = o(a(2344));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = a(2037),
                d = function(e) {
                    var t = e.data,
                        a = e.dataId,
                        r = e.showEyeBrow,
                        o = e.truncate,
                        d = e.isProUser,
                        c = t.main.cards[0],
                        m = t.main.cards.slice(1),
                        f = t.isTwoUp,
                        p = t.main.taxonomyLink || "",
                        g = t.deck.taxonomyLink || "",
                        h = m.length > 1 && !f;
                    return l.default.createElement("section", {
                        className: u.container
                    }, l.default.createElement(i.default, {
                        leadItem: c,
                        title: t.main.title,
                        hasPackage: m.length > 1 || !1,
                        packageItems: m,
                        isTwoUp: f,
                        taxonomyLink: p,
                        showEyeBrow: r,
                        truncate: o
                    }), l.default.createElement(s.default, {
                        cards: t.deck.cards,
                        title: t.deck.title,
                        isTwoUp: f,
                        smallerDeck: h,
                        taxonomyLink: g,
                        truncate: o
                    }), !d && l.default.createElement(n.default, {
                        dataId: "BoxInline-" + a,
                        className: u.adContainer
                    }))
                };
            d.propTypes = {
                data: r.default.object,
                dataId: r.default.string.isRequired,
                truncate: r.default.object.isRequired,
                showEyeBrow: r.default.bool,
                isProUser: r.default.bool.isRequired
            }, d.defaultProps = {
                data: {},
                showEyeBrow: !1
            }, t.default = d
        },
        2342: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = u(a(1)),
                r = u(a(0)),
                n = u(a(2343)),
                i = u(a(2317)),
                s = u(a(19)),
                o = a(114);

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = a(2035),
                c = function(e) {
                    var t = e.leadItem,
                        a = e.title,
                        r = e.hasPackage,
                        u = e.packageItems,
                        c = e.isTwoUp,
                        m = e.taxonomyLink,
                        f = e.showEyeBrow,
                        p = e.truncate,
                        g = l.default.createElement("a", {
                            href: m,
                            className: d.eyebrow,
                            title: a
                        }, a),
                        h = l.default.createElement("span", {
                            className: d.proSmall
                        }, l.default.createElement("span", {
                            className: "icon-probug"
                        })),
                        y = l.default.createElement("p", {
                            className: d.description
                        }, t.description),
                        v = void 0;
                    v = c ? d.twoUpContainer : r ? d.containerWithPackage : d.container;
                    var b = t.imageUrl ? t.imageUrl.includes("?") ? "&" : "?" : "";
                    return l.default.createElement("div", {
                        className: v
                    }, l.default.createElement("div", {
                        className: d.imageMask
                    }, t.imageUrl ? l.default.createElement(i.default, {
                        viewportSizes: {
                            s: {
                                width: 320
                            },
                            m: {
                                width: 640
                            },
                            l: {
                                width: 660
                            },
                            xl: {
                                width: 690
                            }
                        },
                        url: "" + t.imageUrl + b,
                        className: d.image,
                        alt: t.title
                    }) : null), l.default.createElement("div", {
                        className: r ? d.contentWithPackage : d.content,
                        id: "LeadStory-HeroModule"
                    }, f ? l.default.createElement("div", {
                        className: d.eyebrowDiv
                    }, t.premium ? h : null, a ? g : null) : null, l.default.createElement("h2", {
                        className: d.title
                    }, l.default.createElement(s.default, {
                        to: t.link,
                        title: t.title
                    }, (0, o.truncateString)(t.title, p.leadElement || 100))), !r && f ? y : null, r && f ? l.default.createElement(n.default, {
                        cards: u,
                        isTwoUp: c
                    }) : null))
                };
            c.propTypes = {
                leadItem: r.default.object.isRequired,
                truncate: r.default.object.isRequired,
                title: r.default.string,
                hasPackage: r.default.bool,
                packageItems: r.default.array,
                isTwoUp: r.default.bool,
                taxonomyLink: r.default.string,
                showEyeBrow: r.default.bool
            }, c.defaultProps = {
                title: "",
                hasPackage: !1,
                packageItems: [],
                isTwoUp: !1,
                taxonomyLink: "",
                showEyeBrow: !1
            }, t.default = c
        },
        2343: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = i(a(1)),
                r = i(a(0)),
                n = i(a(19));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = a(2034),
                o = function(e) {
                    var t = e.cards,
                        a = e.isTwoUp,
                        r = t.map(function(e, t) {
                            return l.default.createElement("li", {
                                className: s.item,
                                key: t
                            }, l.default.createElement(n.default, {
                                to: e.link || "",
                                title: e.title
                            }, e.title))
                        });
                    return l.default.createElement("div", {
                        className: a ? s.containerTwoUp : s.container
                    }, l.default.createElement("ul", {
                        className: s.items
                    }, r))
                };
            o.propTypes = {
                cards: r.default.array.isRequired,
                isTwoUp: r.default.bool
            }, o.defaultProps = {
                isTwoUp: !1
            }, t.default = o
        },
        2344: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = o(a(1)),
                r = o(a(0)),
                n = o(a(2345)),
                i = o(a(19)),
                s = a(114);

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = a(2036),
                d = function(e) {
                    var t = e.cards,
                        a = e.title,
                        r = e.isTwoUp,
                        o = e.smallerDeck,
                        d = e.taxonomyLink,
                        c = e.truncate,
                        m = r ? t.slice(1) : t,
                        f = l.default.createElement("div", {
                            className: u.leadItem
                        }, l.default.createElement("div", {
                            className: u.imageMask
                        }, l.default.createElement("img", {
                            src: n.default,
                            alt: t[0].title
                        })), l.default.createElement("div", {
                            className: u.leadItemContent,
                            id: "LeadStory-Deck"
                        }, l.default.createElement("span", {
                            className: u.eyebrow
                        }, l.default.createElement(i.default, {
                            to: d,
                            title: a
                        }, a)), l.default.createElement(i.default, {
                            to: t[0].link,
                            title: t[0].title,
                            className: u.leadItemTitle
                        }, t[0].title))),
                        p = l.default.createElement("span", {
                            className: u.proSmall
                        }, l.default.createElement("span", {
                            className: "icon-probug"
                        })),
                        g = m.map(function(e, t) {
                            return l.default.createElement("li", {
                                className: r ? u.twoUpStory : u.story,
                                key: t
                            }, l.default.createElement("div", {
                                className: e.premium ? u.pro : "",
                                id: "TopStory-HeroModule-" + t
                            }, e.premium ? p : null, l.default.createElement(i.default, {
                                to: e.link,
                                title: e.title
                            }, (0, s.truncateString)(e.title || "", e.premium ? c.deckPremiumElement || 100 : c.deckOtherElement || 100))))
                        });
                    return l.default.createElement("div", {
                        className: o ? u.smallerContainer : u.container
                    }, l.default.createElement("div", {
                        className: r ? u.twoUpStories : u.stories
                    }, r ? f : void 0, l.default.createElement("ul", null, t ? g : void 0)))
                };
            d.propTypes = {
                cards: r.default.array.isRequired,
                isTwoUp: r.default.bool,
                title: r.default.string,
                smallerDeck: r.default.bool,
                truncate: r.default.object.isRequired,
                taxonomyLink: r.default.string
            }, d.defaultProps = {
                title: "",
                isTwoUp: !1,
                smallerDeck: !1,
                taxonomyLink: ""
            }, t.default = d
        },
        2345: function(e, t, a) {
            e.exports = a.p + "6480138aaaad669fae1ce7d8e681981e.jpg"
        },
        2346: function(e, t, a) {
            "use strict";
            var l = i(a(5)),
                r = i(a(6)),
                n = "function" == typeof r.default && "symbol" == typeof l.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
                };

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GdsMarketTable = void 0;
            var s = v(a(2)),
                o = v(a(7)),
                u = v(a(8)),
                d = v(a(9)),
                c = function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var l = t[a];
                            l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), (0, s.default)(e, l.key, l)
                        }
                    }
                    return function(t, a, l) {
                        return a && e(t.prototype, a), l && e(t, l), t
                    }
                }(),
                m = a(1),
                f = v(m),
                p = v(a(0)),
                g = a(22),
                h = a(146),
                y = v(a(489));

            function v(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function b(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : n(t)) && "function" != typeof t ? e : t
            }
            var E = t.GdsMarketTable = function(e) {
                function t() {
                    var e, a, l;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return a = l = b(this, (e = t.__proto__ || (0, d.default)(t)).call.apply(e, [this].concat(n))), l.startPollingArticle = function() {
                        var e = l.props,
                            t = e.dispatch,
                            a = e.pollRate,
                            r = e.moduleType;
                        l.timeout = setTimeout(function() {
                            t((0, h.invalidateMarketTable)(r)), t((0, h.fetchMarketTableDataIfNeeded)(r))
                        }, a)
                    }, l.startPolling = function() {
                        var e = l.props,
                            t = e.dispatch,
                            a = e.pollRate,
                            r = e.moduleType;
                        l.timeout = setTimeout(function() {
                            t((0, h.invalidateMarketTable)(r)), t((0, h.fetchMarketTableDataIfNeeded)(r))
                        }, a)
                    }, b(l, a)
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : n(t)));
                    e.prototype = (0, u.default)(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (o.default ? (0, o.default)(e, t) : e.__proto__ = t)
                }(t, m.Component), c(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this.props,
                            t = e.dispatch,
                            a = e.moduleType;
                        t && a && this.props.dispatch((0, h.fetchMarketTableDataIfNeeded)(a))
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        this.props.marketData !== e.marketData && (clearTimeout(this.timeout), e.isFetching || (this.props.isArticle ? this.startPollingArticle() : this.startPolling()))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.timeout)
                    }
                }, {
                    key: "getIssuerIdsFromDetails",
                    value: function(e) {
                        return e.map(function(e) {
                            return e.issueId
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.marketData,
                            a = e.headers,
                            l = e.isSortable,
                            r = e.isArticle,
                            n = a.map(function(e) {
                                return e.toUpperCase()
                            }),
                            i = {
                                NAME: ["cnbcSymbol"],
                                PRICE: ["symbolData", "lastPrice"],
                                "%CHG": ["symbolData", "changePct"],
                                CHG: ["symbolData", "change"],
                                VOLUME: ["symbolData", "volume"],
                                VOL: ["symbolData", "volume"],
                                "% 10 DAY VOL": ["symbolData", "pctTenDayVol"],
                                "X10 DAY VOL": ["symbolData", "pctTenDayVol"]
                            };
                        n.includes("SYMBOL") && (i.NAME = ["symbolData", "name"]);
                        var s = n;
                        r && (s = ["TICKER", "COMPANY"].concat(s)), s.includes("FAIR VALUE") && s.splice(s.indexOf("FAIR VALUE"), s.indexOf("FAIR VALUE") + 1);
                        var o = t.map(function(e, a) {
                                return s.map(function(e) {
                                    var l = t[a];
                                    return i[e] ? (i[e].forEach(function(e) {
                                        return l[e] ? l = l[e] : (l = "changePct" === e ? "0%" : 0, "--")
                                    }), l) : "--"
                                })
                            }),
                            u = {
                                rows: [s].concat(o),
                                rowHeader: !0,
                                columnHeader: !1
                            };
                        return f.default.createElement(y.default, {
                            themeColor: this.props.themeColor,
                            data: u,
                            isSortable: l,
                            isArticle: r,
                            tableType: this.props.tableType
                        })
                    }
                }]), t
            }();
            E.defaultProps = {
                pollRate: 1e4,
                isFetching: !1,
                marketData: [],
                isSortable: !1,
                isArticle: !1,
                themeColor: null,
                moduleType: "",
                tableType: ""
            }, E.propTypes = {
                marketData: p.default.array,
                isFetching: p.default.bool,
                dispatch: p.default.func.isRequired,
                pollRate: p.default.number,
                themeColor: p.default.string,
                headers: p.default.array.isRequired,
                isSortable: p.default.bool,
                isArticle: p.default.bool,
                moduleType: p.default.string,
                tableType: p.default.string
            }, t.default = (0, g.connect)(function(e, t) {
                var a = t.moduleType,
                    l = e.dataByGDSMarketTable[a] || {
                        isFetching: !0,
                        marketData: []
                    },
                    r = l.isFetching;
                return {
                    marketData: l.marketData,
                    isFetching: r
                }
            })(E)
        },
        2347: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MarketNews = void 0;
            var l = s(a(1)),
                r = s(a(0)),
                n = s(a(331)),
                i = a(114);

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = a(2038),
                u = t.MarketNews = function(e) {
                    var t = e.data,
                        a = Array.isArray(t) ? t : [],
                        r = ["title-byline-no-border", "title-only", "title-only", "title-only", "title-only"],
                        s = a.map(function(e, t) {
                            var a = 0 === t ? e.author.map(function(e) {
                                    return e.name
                                }).join("|") : "",
                                s = 0 === t ? e.author.map(function(e) {
                                    return e.url
                                }).join("|") : "",
                                o = e.dateLastPublishedSixHr || "";
                            return l.default.createElement(n.default, {
                                type: e.type,
                                key: e.id + t,
                                title: (0, i.truncateString)(e.title || "", 100),
                                isPro: e.premium,
                                isLive: e.isLive,
                                image: e.image,
                                byline: a,
                                bylineUrl: s,
                                timestamp: e.date,
                                url: e.url,
                                cardType: r[t],
                                formattedTimeStamp: o,
                                id: "MarketNewsStory-" + t
                            })
                        });
                    return l.default.createElement("section", {
                        className: o.container
                    }, l.default.createElement("h3", {
                        className: o.title
                    }, "Latest Market News"), s)
                };
            u.defaultProps = {
                data: []
            }, u.propTypes = {
                data: r.default.array.isRequired
            }, t.default = u
        },
        2411: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = i(a(1)),
                r = i(a(0)),
                n = i(a(19));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = a(2077),
                o = function(e) {
                    var t = e.items,
                        a = e.listType,
                        r = t.map(function(e, t) {
                            return l.default.createElement("li", {
                                className: s.listItem,
                                key: t
                            }, l.default.createElement(n.default, {
                                to: e.link,
                                title: e.title
                            }, e.title))
                        }),
                        i = t.map(function(e, t) {
                            return l.default.createElement("li", {
                                className: s.listItem,
                                key: t
                            }, e.title)
                        });
                    return l.default.createElement("ul", {
                        className: "bullet" === a ? s.bulletList : s.articleList
                    }, "bullet" === a ? i : r)
                };
            o.propTypes = {
                items: r.default.array.isRequired,
                listType: r.default.string
            }, o.defaultProps = {
                listType: "bullet"
            }, t.default = o
        },
        2413: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = o(a(2414)),
                r = o(a(2415)),
                n = o(a(2416)),
                i = o(a(2417)),
                s = o(a(2418));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = {
                breakerType: "personalized",
                title: "For You",
                slides: [{
                    image: l.default,
                    title: "AAPL",
                    description: "Here are the chip stock winners from the new iPhones: Cowen"
                }, {
                    image: r.default,
                    title: "DIS",
                    description: "Irma wrecks tourist spots in Caribbean, spares Disney"
                }, {
                    image: n.default,
                    title: "AAPL",
                    description: "Why Apple saved its cheapest iPhone"
                }, {
                    image: i.default,
                    title: "GOOGL",
                    description: "EU set to demand Internet firms act faster to remove illegal content"
                }, {
                    image: s.default,
                    title: "GOOGL",
                    description: "Tesla’s vice president of business development leaves"
                }]
            };
            t.default = u
        },
        2414: function(e, t, a) {
            e.exports = a.p + "917eb979015fb4040f647f350fc10aa4.jpg"
        },
        2415: function(e, t, a) {
            e.exports = a.p + "6f24dc35494b9c8f72031c79038f956d.jpg"
        },
        2416: function(e, t, a) {
            e.exports = a.p + "305dc22b641c4212addd3e8f3fe39ad7.jpg"
        },
        2417: function(e, t, a) {
            e.exports = a.p + "e8abbf11ecf7e16a67aa3cf17b5ab3fb.jpg"
        },
        2418: function(e, t, a) {
            e.exports = a.p + "a36295f4c46553f4288eef683939f6e8.jpg"
        },
        2420: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = {
                truncate: {
                    leadElement: 100,
                    deckPremiumElement: 90,
                    deckOtherElement: 100
                },
                isTwoUp: !0,
                main: {
                    title: "HURRICANE IRMA",
                    cards: [{
                        title: "Hurricane Irma will ‘devastate’ parts of the United States, FEMA chief says",
                        description: "The head of the Federal Emergency Management Agency said U.S. officials were preparing a massive response to Hurricane Irma",
                        link: "https://www.cnbc.com/",
                        imageUrl: "../../../assets/images/fpo/video.jpg"
                    }, {
                        title: "A staggering swath of newly built Florida homes lay in Irma’s path",
                        description: null,
                        link: "https://www.cnbc.com/",
                        imageUrl: null
                    }, {
                        title: "After hitting Florida, Hurricane Irma on track to strike world's busiest airport",
                        description: null,
                        link: "https://www.cnbc.com/",
                        imageUrl: null
                    }, {
                        title: "President Trump: 'Hurricane Irma is of epic proportion,' but the government 'is ready'",
                        description: null,
                        link: "https://www.cnbc.com/",
                        imageUrl: null
                    }]
                },
                deck: {
                    title: "Toys R Us",
                    cards: [{
                        title: "Toys R Us seeks bankruptcy to survive retail upheaval",
                        description: null,
                        link: "http://www.google.com",
                        imageUrl: null
                    }, {
                        title: "Here's what a Toys R Us bankruptcy means for toymakers: More clarity ahead of the holidays",
                        description: null,
                        link: "http://www.google.com",
                        imageUrl: null
                    }, {
                        title: "Toys R Us files for Chapter 11 bankruptcy protection",
                        description: null,
                        link: "http://www.google.com",
                        imageUrl: null
                    }, {
                        title: "What next after online competitors crushed Toys R Us?",
                        description: null,
                        link: "http://www.google.com",
                        imageUrl: null
                    }]
                }
            }
        },
        2421: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = [{
                title: "Snapchat shares downgraded by Morgan Stanley, a rare rebuke by a firm that helped bring it public",
                isLive: !1,
                isPro: !1,
                byline: "Todd Hassleton",
                timestamp: new Date("2015-03-25")
            }, {
                title: "North Korea renews Guam threat: Only one market move to make when 'Rocket Man' launches a missile",
                isLive: !1,
                isPro: !1,
                byline: "Jeff Daniels",
                timestamp: new Date("2015-03-25")
            }, {
                title: "A Politician Said Something",
                isLive: !1,
                isPro: !1,
                byline: "Daniel Jeffs",
                timestamp: new Date("2015-03-25")
            }, {
                title: "A Politician Said Something",
                isLive: !1,
                isPro: !1,
                byline: "Daniel Jeffs",
                timestamp: new Date("2015-03-25")
            }, {
                title: "Biggest bear on Wall Street Tom Lee throws in the towel",
                isLive: !1,
                isPro: !1,
                byline: "Jeff Daniels",
                timestamp: new Date("2015-03-25")
            }];
            t.default = l
        },
        2466: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = s(a(1)),
                r = s(a(0)),
                n = s(a(2467)),
                i = s(a(2468));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = a(2080),
                u = function(e) {
                    var t = e.data,
                        a = t.type;
                    return l.default.createElement("section", {
                        className: "video" !== a ? o.container : o.videoContainer
                    }, "article" === a ? l.default.createElement(n.default, {
                        data: t
                    }) : void 0, "video" === a ? l.default.createElement(i.default, {
                        data: t
                    }) : void 0)
                };
            u.propTypes = {
                data: r.default.object
            }, u.defaultProps = {
                data: {}
            }, t.default = u
        },
        2467: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = s(a(1)),
                r = s(a(0)),
                n = s(a(2411)),
                i = s(a(19));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = a(2078),
                u = function(e) {
                    var t = e.data,
                        a = t.listType || void 0;
                    return l.default.createElement("div", {
                        className: a ? o.listContainer : o.container
                    }, l.default.createElement("div", {
                        className: o.imageMask
                    }, l.default.createElement("img", {
                        src: t.img,
                        alt: t.title
                    })), l.default.createElement("div", {
                        className: o.content
                    }, l.default.createElement(i.default, {
                        to: t.taxonomyLink || null,
                        className: o.eyebrow
                    }, t.taxonomy), l.default.createElement("h1", {
                        className: o.title
                    }, l.default.createElement(i.default, {
                        to: t.mainLink || null,
                        title: t.title
                    }, t.title)), a && l.default.createElement(n.default, {
                        items: t.cards,
                        listType: a
                    })))
                };
            u.propTypes = {
                data: r.default.object
            }, u.defaultProps = {
                data: {}
            }, t.default = u
        },
        2468: function(e, t, a) {
            "use strict";
            var l = i(a(5)),
                r = i(a(6)),
                n = "function" == typeof r.default && "symbol" == typeof l.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
                };

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = v(a(2)),
                o = v(a(7)),
                u = v(a(8)),
                d = v(a(9)),
                c = function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var l = t[a];
                            l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), (0, s.default)(e, l.key, l)
                        }
                    }
                    return function(t, a, l) {
                        return a && e(t.prototype, a), l && e(t, l), t
                    }
                }(),
                m = v(a(1)),
                f = v(a(0)),
                p = v(a(2411)),
                g = v(a(143)),
                h = v(a(736)),
                y = v(a(19));

            function v(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function b(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : n(t)) && "function" != typeof t ? e : t
            }
            var E = a(2079),
                w = function(e) {
                    function t() {
                        var e, a, l;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                        return a = l = b(this, (e = t.__proto__ || (0, d.default)(t)).call.apply(e, [this].concat(n))), l.state = {
                            isLive: "bullet" !== l.props.data.listType
                        }, b(l, a)
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : n(t)));
                        e.prototype = (0, u.default)(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (o.default ? (0, o.default)(e, t) : e.__proto__ = t)
                    }(t, m.default.Component), c(t, [{
                        key: "render",
                        value: function() {
                            return m.default.createElement("section", {
                                className: this.state.isLive ? E.liveContainer : E.container
                            }, m.default.createElement("div", {
                                className: E.playerWrapper
                            }, m.default.createElement("div", {
                                className: E.playerContainer
                            }, m.default.createElement("img", {
                                src: this.props.data.thumbnail,
                                alt: "for placement only"
                            }), !this.state.isLive && m.default.createElement(h.default, {
                                isLoggedIn: !0
                            }), m.default.createElement("button", {
                                className: E.playButton
                            }, this.state.isLive && m.default.createElement(g.default, {
                                isFeatured: !0
                            })))), m.default.createElement("div", {
                                className: E.contentContainer
                            }, m.default.createElement("div", {
                                className: E.content
                            }, this.state.isLive && m.default.createElement("span", {
                                className: E.eyebrow + " icon-livebug"
                            }, "Live"), m.default.createElement("h1", {
                                className: E.title
                            }, m.default.createElement(y.default, {
                                to: this.props.data.mainLink
                            }, this.props.data.title))), this.props.data.listType && m.default.createElement(p.default, {
                                listType: this.props.data.listType,
                                items: this.props.data.cards
                            })))
                        }
                    }]), t
                }();
            w.propTypes = {
                data: f.default.object
            }, w.defaultProps = {
                data: {}
            }, t.default = w
        },
        2472: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = {
                truncate: {
                    leadElement: 100,
                    deckPremiumElement: 90,
                    deckOtherElement: 100
                },
                main: {
                    title: "HURRICANE IRMA",
                    cards: [{
                        title: "Hurricane Irma will ‘devastate’ parts of the United States, FEMA chief says",
                        description: "The head of the Federal Emergency Management Agency said U.S. officials were preparing a massive response to Hurricane Irma",
                        link: "http://www.yahoo.com",
                        img: null,
                        imageUrl: "../../../assets/images/fpo/video.jpg"
                    }]
                },
                deck: {
                    cards: [{
                        title: "The truth is finally starting to emerge about socially responsible investing",
                        description: "this is just a test 1",
                        link: "http://www.google.com",
                        img: null,
                        imageUrl: "../../../assets/images/fpo/video.jpg"
                    }, {
                        title: "World offers cautionary tale for Trump’s infrastructure plan",
                        description: "this is just a test 2",
                        link: "http://www.google.com",
                        img: null,
                        imageUrl: "../../../assets/images/fpo/video.jpg"
                    }, {
                        title: "GOP senator's 'Plan B' for tax reform may work for Democrats",
                        description: "this is just a test 3",
                        link: "http://www.google.com",
                        img: null,
                        imageUrl: "../../../assets/images/fpo/video.jpg"
                    }, {
                        title: "US housing starts drop for a 3rd straight month and the market is responding",
                        description: "this is just a test 4",
                        link: "http://www.google.com",
                        img: null,
                        imageUrl: "../../../assets/images/fpo/video.jpg"
                    }, {
                        title: "The truth is finally starting to emerge about socially responsible investing",
                        description: "this is just a test 5",
                        link: "http://www.google.com",
                        img: null,
                        imageUrl: "../../../assets/images/fpo/video.jpg"
                    }]
                }
            }
        },
        2473: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = {
                truncate: {
                    leadElement: 100,
                    deckPremiumElement: 90,
                    deckOtherElement: 100
                },
                main: {
                    title: "HURRICANE IRMA",
                    cards: [{
                        title: "Hurricane Irma will ‘devastate’ parts of the United States, FEMA chief says",
                        description: "The head of the Federal Emergency Management Agency said U.S. officials were preparing a massive response to Hurricane Irma",
                        link: "https://www.cnbc.com/",
                        img: "../../../assets/images/fpo/video.jpg",
                        imageUrl: "https://qa-aws02capi-img-origin.cnbc.com/image/100400864-jamie-dimon-with-CNBC-logo-WEF.jpeg?v=1361375828"
                    }, {
                        title: "A staggering swath of newly built Florida homes lay in Irma’s path",
                        description: null,
                        link: "https://www.cnbc.com/",
                        img: null,
                        imageUrl: "https://qa-aws02capi-img-origin.cnbc.com/image/100400864-jamie-dimon-with-CNBC-logo-WEF.jpeg?v=1361375828"
                    }, {
                        title: "After hitting Florida, Hurricane Irma on track to strike world's busiest airport",
                        description: null,
                        link: "https://www.cnbc.com/",
                        img: null,
                        imageUrl: "https://qa-aws02capi-img-origin.cnbc.com/image/100400864-jamie-dimon-with-CNBC-logo-WEF.jpeg?v=1361375828"
                    }, {
                        title: "President Trump: 'Hurricane Irma is of epic proportion,' but the government 'is ready'",
                        description: null,
                        link: "https://www.cnbc.com/",
                        img: null,
                        imageUrl: "https://qa-aws02capi-img-origin.cnbc.com/image/100400864-jamie-dimon-with-CNBC-logo-WEF.jpeg?v=1361375828"
                    }]
                },
                deck: {
                    title: "Top Stories",
                    cards: [{
                        title: "The truth is finally starting to emerge about socially responsible investing",
                        description: null,
                        link: "http://www.google.com",
                        img: null,
                        imageUrl: "https://qa-aws02capi-img-origin.cnbc.com/image/100400864-jamie-dimon-with-CNBC-logo-WEF.jpeg?v=1361375828"
                    }, {
                        title: "World offers cautionary tale for Trump’s infrastructure plan",
                        description: null,
                        link: "http://www.google.com",
                        img: null,
                        imageUrl: "https://qa-aws02capi-img-origin.cnbc.com/image/100400864-jamie-dimon-with-CNBC-logo-WEF.jpeg?v=1361375828"
                    }, {
                        title: "GOP senator's 'Plan B' for tax reform may work for Democrats",
                        description: null,
                        link: "http://www.google.com",
                        img: null,
                        imageUrl: "https://qa-aws02capi-img-origin.cnbc.com/image/100400864-jamie-dimon-with-CNBC-logo-WEF.jpeg?v=1361375828"
                    }, {
                        title: "US housing starts drop for a 3rd straight month and the market is responding",
                        description: null,
                        link: "http://www.google.com",
                        img: null,
                        imageUrl: "https://qa-aws02capi-img-origin.cnbc.com/image/100400864-jamie-dimon-with-CNBC-logo-WEF.jpeg?v=1361375828"
                    }, {
                        title: "The truth is finally starting to emerge about socially responsible investing",
                        description: null,
                        link: "http://www.google.com",
                        img: null,
                        imageUrl: "https://qa-aws02capi-img-origin.cnbc.com/image/100400864-jamie-dimon-with-CNBC-logo-WEF.jpeg?v=1361375828"
                    }]
                }
            }
        },
        2474: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.articleList = t.bulletList = t.breaking = void 0;
            var l = n(a(2475)),
                r = n(a(2476));

            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.breaking = {
                taxonomy: "Politics",
                taxonomyLink: "#",
                title: "BANNON OUT",
                type: "article",
                img: l.default,
                mainLink: "#"
            }, t.bulletList = {
                taxonomy: "Politics",
                taxonomyLink: "#",
                title: "Trump chief strategist Steve Bannon is out at the White House",
                type: "article",
                listType: "bullet",
                img: r.default,
                mainLink: "#",
                cards: [{
                    title: "Friday will be Bannon’s last day in the White House.",
                    description: null,
                    link: "#",
                    img: null
                }, {
                    title: "Bannon helped to fuel Trump's rise to the presidency.",
                    description: null,
                    link: "#",
                    img: null
                }, {
                    title: "Markets like seeing Bannon go, but he’s not the only problem",
                    description: null,
                    link: "#",
                    img: null
                }]
            }, t.articleList = {
                taxonomy: "Politics",
                taxonomyLink: "#",
                title: "Trump chief strategist Steve Bannon is out at the White House",
                type: "article",
                listType: "articles",
                img: r.default,
                mainLink: "#",
                cards: [{
                    title: "Traders cheer news of Bannon’s White House exit",
                    description: null,
                    link: "#",
                    img: null
                }, {
                    title: "Bannon helped to fuel Trump's rise to the presidency.",
                    description: null,
                    link: "#",
                    img: null
                }, {
                    title: "Markets like seeing Bannon go, but he’s not the only problem",
                    description: null,
                    link: "#",
                    img: null
                }]
            }
        },
        2475: function(e, t, a) {
            e.exports = a.p + "41e38fa2d071422deedd67dbad564e61.jpg"
        },
        2476: function(e, t, a) {
            e.exports = a.p + "7cee2c593250db1259caa9b86b8df050.jpg"
        },
        2477: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.worldOnFireVideoArticleList = t.worldOnFireVideoBulletList = void 0;
            var l, r = a(2478),
                n = (l = r) && l.__esModule ? l : {
                    default: l
                };
            t.worldOnFireVideoBulletList = {
                taxonomy: "Politics",
                type: "video",
                title: "Trump says he is under investigation, lashes out at Justice Department",
                mainLink: "#",
                thumbnail: n.default,
                listType: "bullet",
                cards: [{
                    title: "Trump appeared to confirm in a tweet that he is under investigation in the probe into Russia.",
                    link: "#"
                }, {
                    title: "Sources close to the president's outside legal counsel later told NBC News about Trump.",
                    link: "#"
                }, {
                    title: "Trump also appeared to take a swipe that appeared to be directed at Deputy Attorney General Rod Rosenstein.",
                    link: "#"
                }]
            }, t.worldOnFireVideoArticleList = {
                taxonomy: "Politics",
                type: "video",
                title: "Trump says he is under investigation, lashes out at Justice Department",
                mainLink: "#",
                thumbnail: n.default,
                listType: "article",
                cards: [{
                    title: "Trump appeared to confirm in a tweet that he is under investigation in the probe into Russia.",
                    link: "#"
                }, {
                    title: "Sources close to the president's outside legal counsel later told NBC News about Trump.",
                    link: "#"
                }, {
                    title: "Trump also appeared to take a swipe that appeared to be directed at Deputy Attorney General Rod Rosenstein.",
                    link: "#"
                }]
            }
        },
        2478: function(e, t, a) {
            e.exports = a.p + "e2ffd70199d06d5e588f51668300cf77.jpg"
        },
        2479: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.breakerData = {
                url: "https://qa-aws01web.cnbc.com/davos-world-economic-forum/",
                type: "franchise",
                title: "Davos - World Economic Forum",
                subType: "special_report",
                sectionLabel: "Davos WEF",
                logo: null,
                shorterHeadline: null,
                assets: [{
                    startDate: "2018-01-23T05:00:00+0000",
                    location: "Davos-Klosters, Switzerland",
                    id: "104847465",
                    type: "event",
                    url: "/2018/01/19/davos-2018.html",
                    datePublished: "2018-01-19T17:26:57+0000",
                    title: "Davos 2018",
                    linkHeadline: null,
                    shorterHeadline: null,
                    slug: "event_davos2018",
                    subType: null,
                    sectionHierarchy: [{
                        tagName: "Special Reports"
                    }, {
                        tagName: "Events"
                    }],
                    promoImage: {
                        url: "https://qa-aws02capi-img-origin.cnbc.com/image/104847463-imag4.jpg?v=1518202759"
                    },
                    author: null,
                    sourceOrganization: null
                }, {
                    id: "104231365",
                    type: "cnbcnewsstory",
                    url: "http://qa-aws01web.cnbc.com/2017/01/20/kissinger-says-a-creative-brexit-could-link-europe-back-with-america-and-redefine-the-west.html",
                    datePublished: "2017-01-20T17:52:33+0000",
                    title: "Kissinger says a 'creative' Brexit could link Europe back with America and redefine the West",
                    linkHeadline: "Kissinger says a 'creative' Brexit could link Europe back with America and redefine the West",
                    shorterHeadline: "Kissinger says a 'creative' Brexit could link Europe back with America and redefine the West",
                    slug: "KissingerBrexit ClinchKharpal 170120 EU",
                    subType: null,
                    sectionHierarchy: [{
                        tagName: "Economy"
                    }, {
                        tagName: "World Economy"
                    }, {
                        tagName: "Davos WEF"
                    }],
                    promoImage: {
                        url: "https://qa-aws02capi-img-origin.cnbc.com/image/104231487-GettyImages-501878200.jpg?v=1484931361"
                    },
                    author: [{
                        name: "Matt Clinch"
                    }, {
                        name: "Arjun Kharpal"
                    }],
                    sourceOrganization: null
                }, {
                    id: "104230855",
                    type: "cnbcnewsstory",
                    url: "/2017/01/20/co-chairs-of-the-world-economic-forum-annual-meeting-at-davos-discuss-responsible-leadership.html",
                    datePublished: "2017-01-20T17:02:58+0000",
                    title: "In defense of Davos: Global leaders say it's not all about champagne",
                    linkHeadline: "In defense of Davos: Global leaders say it's not all about champagne",
                    shorterHeadline: "In defense of Davos: Global leaders say it's not all about champagne",
                    slug: "170120 Geoff Cutmore WEF panel CLINCH EU",
                    subType: null,
                    sectionHierarchy: [{
                        tagName: "Economy"
                    }, {
                        tagName: "World Economy"
                    }, {
                        tagName: "Davos WEF"
                    }],
                    promoImage: null,
                    author: [{
                        name: "Arjun Kharpal"
                    }],
                    sourceOrganization: null
                }, {
                    id: "104231052",
                    type: "cnbcnewsstory",
                    url: "http://qa-aws01web.cnbc.com/2017/01/20/trump-must-address-obamas-withdrawal-from-world-stage-says-kissinger.html",
                    datePublished: "2017-01-20T16:28:06+0000",
                    title: "Trump must address Obama's withdrawal from world stage, says Kissinger",
                    linkHeadline: null,
                    shorterHeadline: null,
                    slug: "Kissinger Acton 170120 EU",
                    subType: null,
                    sectionHierarchy: [{
                        tagName: "Economy"
                    }, {
                        tagName: "World Economy"
                    }, {
                        tagName: "Davos WEF"
                    }],
                    promoImage: {
                        url: "https://qa-aws02capi-img-origin.cnbc.com/image/104231085-GettyImages-462469904.jpg?v=1484924722"
                    },
                    author: [{
                        name: "Gemma Acton"
                    }],
                    sourceOrganization: null
                }, {
                    id: "104230743",
                    type: "cnbcnewsstory",
                    url: "http://qa-aws01web.cnbc.com/2017/01/20/davos-elites-give-trump-a-uneasy-reception.html",
                    datePublished: "2017-01-20T11:03:06+0000",
                    title: "Davos elites give Trump an uneasy reception",
                    linkHeadline: "Davos elites give Trump an uneasy reception",
                    shorterHeadline: "Davos elites give Trump an uneasy reception",
                    slug: "TrumpDavos Clinch 170120 EU",
                    subType: null,
                    sectionHierarchy: [{
                        tagName: "Economy"
                    }, {
                        tagName: "World Economy"
                    }, {
                        tagName: "Davos WEF"
                    }],
                    promoImage: {
                        url: "https://qa-aws02capi-img-origin.cnbc.com/image/104226095-GettyImages-631862230.jpg?v=1484764554"
                    },
                    author: [{
                        name: "Matt Clinch"
                    }],
                    sourceOrganization: null
                }, {
                    id: "104220537",
                    type: "slideshow",
                    url: "https://qa-aws01buffett.cnbc.com/2017/01/20/overheard-at-davos-world-leaders-speak-out-at-the-world-economic-forum-2017.html",
                    datePublished: "2017-01-20T10:59:41+0000",
                    title: "Who said what at Davos: World leaders speak out at 2017's WEF annual meeting ",
                    linkHeadline: "Who said what at Davos: World leaders speak out at 2017's WEF annual meeting ",
                    shorterHeadline: "Who said what at Davos: World leaders speak out at 2017's WEF annual meeting ",
                    slug: "Davos quotes Gibbs 170120 EU",
                    subType: null,
                    sectionHierarchy: [{
                        tagName: null
                    }],
                    promoImage: {
                        url: "https://qa-aws02capi-img-origin.cnbc.com/image/104225514-RTSW154.jpg?v=1484751459"
                    },
                    author: [{
                        name: "Alexandra Gibbs"
                    }],
                    sourceOrganization: null
                }, {
                    id: "104230992",
                    type: "cnbcnewsstory",
                    url: "http://qa-aws01web.cnbc.com/2017/01/20/oil-shortage-could-hit-by-2020-if-investment-doesnt-pick-up-saudi-energy-minister.html",
                    datePublished: "2017-01-20T13:10:24+0000",
                    title: "Oil shortage could hit by 2020 if investment doesn't pick up: Saudi Energy Minister",
                    linkHeadline: "Oil shortage could hit by 2020 if investment doesn't pick up: Saudi Energy Minister",
                    shorterHeadline: "Oil shortage could hit by 2020 if investment doesn't pick up: Saudi Minister",
                    slug: "Saudi Energy Min Gilchrist 170120 EU",
                    subType: null,
                    sectionHierarchy: [{
                        tagName: "Economy"
                    }, {
                        tagName: "World Economy"
                    }, {
                        tagName: "Davos WEF"
                    }],
                    promoImage: {
                        url: "https://qa-aws02capi-img-origin.cnbc.com/image/104137172-RTSTYS4.jpg?v=1480537027"
                    },
                    author: null,
                    sourceOrganization: null
                }, {
                    id: "104230822",
                    type: "cnbcnewsstory",
                    url: "http://qa-aws01web.cnbc.com/2017/01/20/blackrocks-fink-predicts-trump-fed-fallout.html",
                    datePublished: "2017-01-20T11:39:26+0000",
                    title: "BlackRock’s Fink predicts Trump-Fed fallout",
                    linkHeadline: "BlackRock’s Fink predicts Trump-Fed fallout",
                    shorterHeadline: "BlackRock’s Fink predicts Trump-Fed fallout",
                    slug: "Fink ACTON 170120 EU",
                    subType: null,
                    sectionHierarchy: [{
                        tagName: "Economy"
                    }, {
                        tagName: "World Economy"
                    }, {
                        tagName: "Davos WEF"
                    }],
                    promoImage: null,
                    author: [{
                        name: "Gemma Acton"
                    }],
                    sourceOrganization: null
                }]
            }
        },
        2480: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.savedSearches = [{
                symbol: "VIX",
                name: "CBOE Volatility Index",
                change: -.16,
                change_pct: -1.64,
                url: "#"
            }, {
                symbol: "KR",
                name: "Kroger Co | US",
                change: 0,
                change_pct: 0,
                url: "#"
            }, {
                symbol: "ADR",
                name: "AMEX Internatinal Market Index",
                change: .44,
                change_pct: .05,
                url: "#"
            }, {
                symbol: "DAL",
                name: "Delta Air Lines Inc | US",
                change: 0,
                change_pct: 0,
                url: "#"
            }, {
                symbol: "APC-DE",
                name: "Apple Inc | DE",
                change: .3,
                change_pct: .24,
                url: "#"
            }, {
                symbol: "NOSHOW",
                name: "Data should not visible, inc.",
                change: .3,
                change_pct: .24,
                url: "#"
            }], t.recentSearches = [{
                symbol: "AAPL",
                name: "Apple Inc | US",
                change: 1.95,
                change_pct: 1.25,
                url: "#"
            }, {
                symbol: "IXIC",
                name: "NASDAQ Composite",
                change: 0,
                change_pct: 0,
                url: "#"
            }, {
                symbol: "FTSE",
                name: "AT FTSE ATF LCID IDX",
                change: -.04,
                change_pct: -.21,
                url: "#"
            }, {
                symbol: "HD",
                name: "Home Depot Inc | US",
                change: 0,
                change_pct: 0,
                url: "#"
            }, {
                symbol: "DOWB11BF-BR",
                name: "Dow Chemical Co | BR",
                change: .3,
                change_pct: .23,
                url: "#"
            }, {
                symbol: "NOSHOW",
                name: "Data should not visible, inc.",
                change: .3,
                change_pct: .24,
                url: "#"
            }], t.trendingSearches = [{
                symbol: "TSN",
                name: "Tyson Foods Inc. | US",
                change: 1.95,
                change_pct: 1.25,
                url: "#"
            }, {
                symbol: "MU",
                name: "Micron Technology Inc. | US",
                change: 0,
                change_pct: 0,
                url: "#"
            }, {
                symbol: "INCY",
                name: "Incyte Corp | US",
                change: -.04,
                change_pct: -.21,
                url: "#"
            }, {
                symbol: "WYNN",
                name: "Wynn Resorts Ltd | US",
                change: 0,
                change_pct: 0,
                url: "#"
            }, {
                symbol: "MAT",
                name: "Mattel Inc | US",
                change: .3,
                change_pct: .23,
                url: "#"
            }, {
                symbol: "NOSHOW",
                name: "Data should not visible, inc.",
                change: .3,
                change_pct: .24,
                url: "#"
            }], t.popularSearches = [{
                name: "AAPL",
                label: "quote",
                url: "#"
            }, {
                name: "Apple",
                label: "company",
                url: "#"
            }, {
                name: "Tesla",
                label: "company",
                url: "#"
            }, {
                name: "Amazon",
                label: "company",
                url: "#"
            }, {
                name: "Google",
                label: "company",
                url: "#"
            }, {
                name: "Not Visible",
                label: "article",
                url: "#"
            }]
        },
        805: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = B(a(1)),
                r = B(a(0)),
                n = a(693),
                i = B(a(1994)),
                s = B(a(2e3)),
                o = a(2314),
                u = a(2479),
                d = B(a(480)),
                c = B(a(376)),
                m = B(a(2341)),
                f = B(a(2338)),
                p = B(a(692)),
                g = B(a(2466)),
                h = B(a(2025)),
                y = B(a(1989)),
                v = B(a(2413)),
                b = B(a(2472)),
                E = B(a(2473)),
                w = B(a(2420)),
                k = a(1997),
                T = B(a(1991)),
                N = B(a(2421)),
                _ = B(a(1998)),
                M = B(a(2002)),
                S = a(2003),
                C = a(2474),
                A = a(2477),
                P = B(a(2026)),
                R = B(a(2027)),
                D = a(2004),
                I = B(D),
                L = B(a(739)),
                U = a(698),
                x = a(478),
                j = a(2480);

            function B(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var O = a(1993),
                H = function(e) {
                    var t = e.match,
                        a = void 0 !== t.params.id ? {
                            savedSearch: t.params.id % 2 ? null : j.savedSearches,
                            trendingQuotes: j.trendingSearches,
                            recentSearches: t.params.id % 2 ? j.recentSearches : null,
                            popularSearches: j.popularSearches
                        } : {};
                    return l.default.createElement(y.default, {
                        searchData: a
                    }, l.default.createElement(n.BaseMeta, {
                        key: "BaseMeta",
                        data: {
                            page: {
                                title: "US Homepage"
                            }
                        }
                    }), l.default.createElement("div", {
                        className: O.page
                    }, l.default.createElement("div", {
                        className: O.pageGrid
                    }, l.default.createElement("div", {
                        className: O.pageWrapper
                    }, l.default.createElement(k.MarketsBanner, {
                        selectedMarketBanner: I.default.selectedMarket,
                        marketData: I.default.marketData,
                        isFetching: !1,
                        lastUpdated: I.default.lastUpdated,
                        dispatch: function() {},
                        pollRate: 15e4,
                        parent: "MarketBanner",
                        data: I.default.data,
                        ad: D.marketBannerAd
                    }), l.default.createElement("div", {
                        className: O.pageRow
                    }, l.default.createElement("div", {
                        className: O["col-12"]
                    }, l.default.createElement(i.default, {
                        landing: !0
                    }))), l.default.createElement("div", {
                        className: O.pageRow
                    }, l.default.createElement("div", {
                        className: O["col-12"]
                    }, void 0 === t.params.id && l.default.createElement(m.default, {
                        data: b.default
                    }), "1" === t.params.id && l.default.createElement(m.default, {
                        data: b.default
                    }), "2" === t.params.id && l.default.createElement(m.default, {
                        data: E.default
                    }), "3" === t.params.id && l.default.createElement(m.default, {
                        data: w.default
                    }), "4" === t.params.id && l.default.createElement(g.default, {
                        data: C.breaking
                    }), "5" === t.params.id && l.default.createElement(g.default, {
                        data: C.bulletList
                    }), "6" === t.params.id && l.default.createElement(g.default, {
                        data: C.articleList
                    }), "7" === t.params.id && l.default.createElement(g.default, {
                        data: C.breaking
                    }), "8" === t.params.id && l.default.createElement(g.default, {
                        data: C.breaking
                    }), "9" === t.params.id && l.default.createElement(h.default, {
                        regions: R.default,
                        data: P.default,
                        isLoggedIn: !0,
                        isLive: !0
                    }), "10" === t.params.id && l.default.createElement(g.default, {
                        data: A.worldOnFireVideoBulletList
                    }), "11" === t.params.id && l.default.createElement(g.default, {
                        data: A.worldOnFireVideoArticleList
                    }))), void 0 === t.params.id && l.default.createElement("div", {
                        className: O.pageRow
                    }, l.default.createElement("div", {
                        className: O["col-8"]
                    }, l.default.createElement(c.default, {
                        cards: x.denseCardMocks,
                        layoutType: "dense",
                        flexibleLabels: [null, null, "TAX REFORM"]
                    }), l.default.createElement("div", {
                        style: {
                            height: "20px",
                            borderTop: "1px dashed #8b8b8b"
                        }
                    }), l.default.createElement(c.default, {
                        cards: x.threeUpCardMocks,
                        layoutType: "three-up"
                    })), l.default.createElement("div", {
                        className: O["col-4"]
                    }, l.default.createElement(T.default, null))), "1" === t.params.id && l.default.createElement("div", {
                        className: O.pageRow
                    }, l.default.createElement("div", {
                        className: O["col-8"]
                    }, l.default.createElement(c.default, {
                        cards: x.denseCardMocks,
                        layoutType: "dense",
                        flexibleLabels: ["flexible label 1", "flexible label 2", "flexible label 3"]
                    }), l.default.createElement("div", {
                        style: {
                            height: "20px",
                            borderTop: "1px dashed #8b8b8b"
                        }
                    }), l.default.createElement(c.default, {
                        cards: x.threeUpCardMocks,
                        layoutType: "three-up"
                    })), l.default.createElement("div", {
                        className: O["col-4"]
                    }, l.default.createElement(T.default, null))), "2" === t.params.id && l.default.createElement("div", {
                        className: O.pageRow
                    }, l.default.createElement("div", {
                        className: O["col-8"]
                    }, l.default.createElement(c.default, {
                        cards: x.denseCardMocks,
                        layoutType: "dense",
                        flexibleLabels: ["flexible label 1", "flexible label 2", null]
                    }), l.default.createElement("div", {
                        style: {
                            height: "20px",
                            borderTop: "1px dashed #8b8b8b"
                        }
                    }), l.default.createElement(c.default, {
                        cards: x.threeUpCardMocks,
                        layoutType: "three-up"
                    })), l.default.createElement("div", {
                        className: O["col-4"]
                    }, l.default.createElement(T.default, null))), "3" === t.params.id && l.default.createElement("div", {
                        className: O.pageRow
                    }, l.default.createElement("div", {
                        className: O["col-8"]
                    }, l.default.createElement(c.default, {
                        cards: x.denseCardMocks,
                        layoutType: "dense",
                        flexibleLabels: ["flexible label 1", "flexible label 2", null]
                    }), l.default.createElement("div", {
                        style: {
                            height: "20px",
                            borderTop: "1px dashed #8b8b8b"
                        }
                    }), l.default.createElement(c.default, {
                        cards: x.threeUpCardMocks,
                        layoutType: "three-up"
                    })), l.default.createElement("div", {
                        className: O["col-4"]
                    }, l.default.createElement(T.default, null))), "4" === t.params.id && l.default.createElement("div", {
                        className: O.pageRow
                    }, l.default.createElement("div", {
                        className: O["col-8"]
                    }, l.default.createElement(c.default, {
                        cards: x.imageDenseCardMocks,
                        layoutType: "image-dense",
                        flexibleLabels: [null]
                    })), l.default.createElement("div", {
                        className: O["col-4"]
                    }, l.default.createElement(T.default, null))), "5" === t.params.id && l.default.createElement("div", {
                        className: O.pageRow
                    }, l.default.createElement("div", {
                        className: O["col-8"]
                    }, l.default.createElement(c.default, {
                        cards: x.imageDenseCardMocks,
                        layoutType: "image-dense",
                        flexibleLabels: [null]
                    })), l.default.createElement("div", {
                        className: O["col-4"]
                    }, l.default.createElement(T.default, null))), "6" === t.params.id && l.default.createElement("div", {
                        className: O.pageRow
                    }, l.default.createElement("div", {
                        className: O["col-8"]
                    }, l.default.createElement(c.default, {
                        cards: x.imageDenseCardMocks,
                        layoutType: "image-dense",
                        flexibleLabels: [null]
                    })), l.default.createElement("div", {
                        className: O["col-4"]
                    }, l.default.createElement(T.default, null))), "7" === t.params.id && l.default.createElement("div", {
                        className: O.pageRow
                    }, l.default.createElement("div", {
                        className: O["col-8"]
                    }, l.default.createElement(c.default, {
                        cards: x.imageDenseCardMocks,
                        layoutType: "image-dense",
                        flexibleLabels: ["Flexible Label"]
                    })), l.default.createElement("div", {
                        className: O["col-4"]
                    }, l.default.createElement(T.default, null))), "8" === t.params.id && l.default.createElement("div", {
                        className: O.pageRow
                    }, l.default.createElement("div", {
                        className: O["col-8"]
                    }, l.default.createElement(c.default, {
                        cards: x.imageDenseCardMocks,
                        layoutType: "image-dense",
                        flexibleLabels: ["Flexible Label"]
                    })), l.default.createElement("div", {
                        className: O["col-4"]
                    }, l.default.createElement(T.default, null))), "9" === t.params.id && l.default.createElement("div", null, l.default.createElement("div", {
                        className: O.pageRow
                    }, l.default.createElement("div", {
                        className: O["col-12"]
                    }, l.default.createElement(m.default, {
                        data: b.default
                    }))), l.default.createElement("div", {
                        className: O.pageRow
                    }, l.default.createElement("div", {
                        className: O["col-8"]
                    }, l.default.createElement(c.default, {
                        cards: x.denseCardMocks,
                        layoutType: "dense",
                        flexibleLabels: [null, null, "Tax Reform"]
                    }), l.default.createElement("div", {
                        style: {
                            height: "20px",
                            borderTop: "1px dashed #8b8b8b"
                        }
                    }), l.default.createElement(c.default, {
                        cards: x.threeUpCardMocks,
                        layoutType: "three-up"
                    })), l.default.createElement("div", {
                        className: O["col-4"]
                    }, l.default.createElement(T.default, null)))), l.default.createElement("div", {
                        className: O.pageRow
                    }, l.default.createElement("div", {
                        className: O["col-12"]
                    }, l.default.createElement(_.default, {
                        playlistItems: M.default,
                        sidebarItems: S.videoSidebarMock,
                        header: "CNBC TV"
                    }))), l.default.createElement("div", {
                        className: O.pageRow
                    }, l.default.createElement("div", {
                        className: O["col-12"]
                    }, l.default.createElement(s.default, {
                        data: v.default
                    }))), l.default.createElement("div", {
                        className: O.pageRow
                    }, l.default.createElement("div", {
                        className: O["col-4"]
                    }, l.default.createElement(T.default, null)), l.default.createElement("div", {
                        className: O["col-8"]
                    }, l.default.createElement(f.default, {
                        pollRate: 15e4,
                        news: N.default,
                        sponsorLogo: L.default,
                        hasHeader: !0
                    }))), l.default.createElement("div", {
                        className: O.pageRow
                    }, l.default.createElement(o.FeaturedBreaker, {
                        data: u.breakerData
                    })), l.default.createElement("div", {
                        className: O.pageRow
                    }, l.default.createElement("div", {
                        className: O["col-8"]
                    }, l.default.createElement(p.default, {
                        title: "Business News"
                    }, l.default.createElement(c.default, {
                        cards: x.dualLeadCardMocks,
                        layoutType: "dual-lead"
                    })), l.default.createElement("div", {
                        style: {
                            height: "30px"
                        }
                    }), l.default.createElement(p.default, {
                        title: "Politics"
                    }, l.default.createElement(c.default, {
                        cards: x.singleLeadCardMocks,
                        layoutType: "single-lead"
                    }))), l.default.createElement("div", {
                        className: O["col-4"]
                    }, l.default.createElement(T.default, null))), l.default.createElement("div", {
                        className: O.pageRow
                    }, l.default.createElement("div", {
                        className: O["col-12"]
                    }, l.default.createElement(d.default, {
                        item1: U.cnbcProHalfBreaker,
                        item2: U.newslettersHalfBreaker
                    }))), l.default.createElement("div", {
                        className: O.pageRow
                    }, l.default.createElement("div", {
                        className: O["col-4"]
                    }, l.default.createElement(T.default, null)), l.default.createElement("div", {
                        className: O["col-8"]
                    }, l.default.createElement(p.default, {
                        title: "Investing"
                    }, l.default.createElement(c.default, {
                        cards: x.dualLeadCardMocks,
                        layoutType: "dual-lead",
                        packageTitle: "package title"
                    })), l.default.createElement("div", {
                        style: {
                            height: "30px"
                        }
                    }), l.default.createElement(p.default, {
                        title: "Tech"
                    }, l.default.createElement(c.default, {
                        cards: x.miniHeroPackageCardMocks,
                        layoutType: "mini-hero",
                        hasPackage: "right",
                        packageTitle: "package title"
                    }), l.default.createElement("div", {
                        style: {
                            height: "30px"
                        }
                    }), l.default.createElement(c.default, {
                        cards: x.singleLeadCardMocks,
                        layoutType: "single-lead"
                    })))), l.default.createElement("div", {
                        className: O.pageRow
                    }, l.default.createElement("div", {
                        className: O["col-8"]
                    }, l.default.createElement(p.default, {
                        title: "Make It"
                    }, l.default.createElement(c.default, {
                        cards: x.largeSquareLeadCardMocks,
                        layoutType: "square-lead"
                    }))), l.default.createElement("div", {
                        className: O["col-4"]
                    }, l.default.createElement(T.default, null)))))))
                };
            H.propTypes = {
                match: r.default.object
            }, H.defaultProps = {
                match: ""
            }, t.default = H
        }
    }
]);