(window.webpackJsonp = window.webpackJsonp || []).push([
    [12, 93, 123], {
        2314: function(e, t, a) {
            "use strict";
            var l = n(a(5)),
                r = n(a(6)),
                i = "function" == typeof r.default && "symbol" == typeof l.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
                };

            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FeaturedBreaker = void 0;
            var s, o, d = T(a(2)),
                u = T(a(7)),
                c = T(a(8)),
                f = T(a(9)),
                m = function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var l = t[a];
                            l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), (0, d.default)(e, l.key, l)
                        }
                    }
                    return function(t, a, l) {
                        return a && e(t.prototype, a), l && e(t, l), t
                    }
                }(),
                p = T(a(1)),
                g = T(a(0)),
                h = T(a(105)),
                v = T(a(20)),
                E = T(a(143)),
                y = T(a(21)),
                w = a(114),
                b = T(a(19)),
                k = T(a(37)),
                N = T(a(106));

            function T(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function M(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : i(t)) && "function" != typeof t ? e : t
            }
            var R = a(2030),
                _ = (o = s = function(e) {
                    function t() {
                        var e, a, l;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var r = arguments.length, i = Array(r), n = 0; n < r; n++) i[n] = arguments[n];
                        return a = l = M(this, (e = t.__proto__ || (0, f.default)(t)).call.apply(e, [this].concat(i))), l.state = {
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
                            return 0 === l.state.currentSlide ? R.prevArrowInactive : R.prevArrow
                        }, l.setNextArrowStyle = function() {
                            var e = l.props.data;
                            if (e) {
                                var t = l.ifArray(e.assets) ? e.assets.length - 1 : 0;
                                return l.state.currentSlide >= t ? R.nextArrowInactive : R.nextArrow
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
                            return e ? p.default.createElement(b.default, {
                                to: e,
                                brand: l.brand,
                                assetType: l.type,
                                premium: l.premium,
                                sectionSubType: l.section && l.section.subType,
                                native: l.native
                            }, p.default.createElement("div", {
                                className: a
                            }, (0, w.truncateString)(t, 100))) : p.default.createElement("div", {
                                className: a
                            }, t)
                        }, l.getSlideTitle = function(e) {
                            return p.default.createElement("div", {
                                className: R.itemWrapper
                            }, e.linkHeadline && l.getItemTitle(e.url, e.linkHeadline, R.itemTitle, e), !e.linkHeadline && e.shorterHeadline && l.getItemTitle(e.url, e.shorterHeadline, R.itemTitle, e), !e.linkHeadline && !e.shorterHeadline && l.getItemTitle(e.url, e.title, R.itemTitle, e), e.author && e.sourceOrganization && l.getAuthorSource(e.sourceOrganization, e.author, e.creatorOverwrite, e))
                        }, l.getAuthorSource = function(e, t, a) {
                            if (e.length) {
                                if ("CNBC.com" !== e[0].name) return p.default.createElement("div", {
                                    className: R.itemAuthor
                                }, e[0].name);
                                if (t.length) {
                                    var l = t.map(function(e) {
                                        return e.name
                                    }).join(", ");
                                    return a ? (l = l + ", " + a, p.default.createElement("div", {
                                        className: R.itemAuthor
                                    }, l)) : p.default.createElement("div", {
                                        className: R.itemAuthor
                                    }, l)
                                }
                            }
                            if (t.length) {
                                var r = t.map(function(e) {
                                    return e.name
                                }).join(",");
                                return p.default.createElement("div", {
                                    className: R.itemAuthor
                                }, r)
                            }
                            if (a) return p.default.createElement("div", {
                                className: R.itemAuthor
                            }, a)
                        }, l.getBreakerTopSection = function(e) {
                            var t = e.logo,
                                a = e.url,
                                r = e.title,
                                i = e.displayShowTime,
                                n = e.showTime,
                                s = e.eventData,
                                o = e.type;
                            return p.default.createElement("div", null, p.default.createElement("div", {
                                className: R.heading
                            }, t && (a ? p.default.createElement("div", {
                                className: R.headingImage
                            }, p.default.createElement(b.default, {
                                to: a
                            }, p.default.createElement("img", {
                                src: t.url,
                                alt: t.title
                            }))) : p.default.createElement("div", {
                                className: R.headingImage
                            }, p.default.createElement("img", {
                                src: t.url,
                                alt: t.title
                            }))), !t && (a && "collection" !== o ? p.default.createElement("h3", {
                                className: R.headingText
                            }, p.default.createElement(b.default, {
                                className: R.headingLink,
                                to: a
                            }, r)) : p.default.createElement("h3", {
                                className: R.headingText
                            }, r)), i && n && p.default.createElement("time", {
                                className: R.airTime
                            }, n), 0 !== s.length && p.default.createElement("p", {
                                className: R.eventTime
                            }, p.default.createElement("time", null, l.convertDate(s[0].startDate)), " - ", s[0].location)), p.default.createElement("div", {
                                className: R.arrowContainer
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
                                className: R.slideContainer
                            }, p.default.createElement("div", {
                                className: R.leftSlide
                            }, p.default.createElement("div", {
                                className: R.slideRail,
                                style: l.slideRailStylesLeft()
                            }, l.getSlides(e, t))), p.default.createElement("div", {
                                className: R.rightSlide
                            }, p.default.createElement("div", {
                                className: R.slideRail,
                                style: l.slideRailStylesRight()
                            }, l.getSlides(e, t))))
                        }, l.getSlides = function(e, t) {
                            return e.map(function(e, a) {
                                return p.default.createElement(N.default, null, p.default.createElement("div", {
                                    key: a,
                                    className: R.item,
                                    style: e.promoImage && {
                                        backgroundImage: "url(" + e.promoImage.url + "&w=" + l.sizeByBreakpoint() + "&h=" + Math.floor(l.sizeByBreakpoint() / 2) + ")"
                                    }
                                }, (-1 !== t.indexOf("show") || "video" === t) && p.default.createElement(E.default, {
                                    isFeatured: !0
                                }), l.getSlideTitle(e)))
                            })
                        }, M(l, a)
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : i(t)));
                        e.prototype = (0, c.default)(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (u.default ? (0, u.default)(e, t) : e.__proto__ = t)
                    }(t, p.default.Component), m(t, [{
                        key: "componentDidMount",
                        value: function() {
                            v.default.on("breakpointChange", this.handleBreakpointChange)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            v.default.remove("breakpointChange", this.handleBreakpointChange)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.data,
                                a = e.dataId;
                            if (!t) return p.default.createElement(y.default, {
                                data: {
                                    error: "section query came back as null"
                                },
                                errorSource: "FeaturedBreaker",
                                errorProps: this.props
                            });
                            if (!Array.isArray(t.assets) || 0 === t.assets.length) return null;
                            var l = this.getEvent(t.assets),
                                r = t.logo,
                                i = t.url,
                                n = t.title,
                                s = t.assets,
                                o = t.showTime,
                                d = t.subType,
                                u = t.type,
                                c = null != d && -1 !== d.indexOf("show");
                            return p.default.createElement("div", {
                                className: R.featuredBreaker,
                                id: a
                            }, p.default.createElement("div", {
                                className: R.wrapper
                            }, this.getBreakerTopSection({
                                logo: r,
                                url: i,
                                title: n,
                                displayShowTime: c,
                                showTime: o,
                                eventData: l,
                                type: u
                            }), this.getBreakerSlides(s, d)))
                        }
                    }]), t
                }(), s.propTypes = {
                    data: g.default.object.isRequired,
                    dataId: g.default.oneOfType([g.default.string, g.default.number]).isRequired
                }, o);
            t.FeaturedBreaker = _, t.default = _
        },
        2317: function(e, t, a) {
            "use strict";
            var l = n(a(5)),
                r = n(a(6)),
                i = "function" == typeof r.default && "symbol" == typeof l.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
                };

            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = g(a(2)),
                o = g(a(7)),
                d = g(a(8)),
                u = g(a(9)),
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
                f = a(1),
                m = g(f),
                p = g(a(0));

            function g(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function h(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : i(t)) && "function" != typeof t ? e : t
            }
            var v = {
                    m: 760,
                    l: 1020,
                    xl: 1340
                },
                E = function(e) {
                    function t() {
                        var e, a, l;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var r = arguments.length, i = Array(r), n = 0; n < r; n++) i[n] = arguments[n];
                        return a = l = h(this, (e = t.__proto__ || (0, u.default)(t)).call.apply(e, [this].concat(i))), l.state = {
                            error: !1
                        }, l.handleImageError = function() {
                            return l.setState({
                                error: !0
                            })
                        }, h(l, a)
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : i(t)));
                        e.prototype = (0, d.default)(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (o.default ? (0, o.default)(e, t) : e.__proto__ = t)
                    }(t, f.Component), c(t, [{
                        key: "srcSet",
                        value: function(e) {
                            var t = this.getSrc(e),
                                a = "(min-width: " + v[e] + "px)";
                            return t ? m.default.createElement("source", {
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
                                i = l[e] || {},
                                n = i.width,
                                s = i.height;
                            if (!n && !s) return a;
                            if (n && s) return a + (a.includes("?") ? "&" : "?") + "w=" + n + "&h=" + s;
                            if (!n && s) {
                                var o = Math.round(s * r);
                                return a + (a.includes("?") ? "&" : "?") + "w=" + o + "&h=" + s
                            }
                            var d = Math.round(n / r);
                            return a + (a.includes("?") ? "&" : "?") + "w=" + n + "&h=" + d
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
                            return m.default.createElement("picture", {
                                style: l
                            }, this.srcSet("xl"), this.srcSet("l"), this.srcSet("m"), m.default.createElement("img", {
                                src: this.getSrc("s"),
                                alt: t,
                                className: a,
                                onError: this.handleImageError
                            }))
                        }
                    }]), t
                }();
            E.defaultProps = {
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
            }, E.propTypes = {
                url: p.default.string.isRequired,
                alt: p.default.string,
                viewportSizes: p.default.object,
                aspectRatio: p.default.number,
                className: p.default.string
            }, t.default = E
        },
        2318: function(e, t, a) {
            e.exports = a.p + "a395b49ad7b909cde5b315b8ef0a3d20.jpg"
        },
        2319: function(e, t, a) {
            e.exports = a.p + "b039155ed8999ef89337dba86ed55050.jpg"
        },
        2320: function(e, t, a) {
            e.exports = a.p + "497aa752e22d00bbceccf2602b0b5ff0.jpg"
        },
        2321: function(e, t, a) {
            e.exports = a.p + "290d4ece49dbb78da291b27d8d795ae5.jpg"
        },
        2322: function(e, t, a) {
            e.exports = a.p + "77bc147dfbcb3027a4b00e11b5699df7.jpg"
        },
        2323: function(e, t, a) {
            e.exports = a.p + "3b03827561ccb8fcea12337089a03771.jpg"
        },
        2324: function(e, t, a) {
            e.exports = a.p + "8dc3be0f6d5686afd130abb05ac2d5e2.jpg"
        },
        2325: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.aboutRailMock = {
                title: "About Trading Nation",
                content: "Trading Nation is a multimedia financial news program that shows investors and traders how to use the news of the day to their advantage. This is where experts from across the financial world – including macro strategists, technical analysts, stock-pickers, and traders who specialize in options, currencies, and fixed income – come together to find the best ways to capitalize on recent developments in the market. Trading Nation: Where headlines become opportunities.",
                themeColor: "#1FF1C8"
            }, t.aboutShowRailMock = {
                title: "About Mad Money",
                content: "Trading Nation is a multimedia financial news program that shows investors and traders how to use the news of the day to their advantage. This is where experts from across the financial world – including macro strategists, technical analysts, stock-pickers, and traders who specialize in options, currencies, and fixed income – come together to find the best ways to capitalize on recent developments in the market. Trading Nation: Where headlines become opportunities.",
                linkText: "More About the Show",
                link: "#",
                themeColor: "#c13126"
            }, t.makeItAboutRailMock = {
                title: "About Make It New Grads",
                content: "Entrepreneurs, makers, and doers will find instrumental insights, tools and stories for starting, managing and growing your business."
            }
        },
        2338: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MarketsModule = void 0;
            var l = f(a(1)),
                r = f(a(0)),
                i = f(a(2346)),
                n = f(a(694)),
                s = f(a(382)),
                o = f(a(19)),
                d = f(a(15)),
                u = f(a(700)),
                c = f(a(2347));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var m = d.default.getProperties().CNBC_BASE,
                p = a(2039),
                g = t.MarketsModule = function(e) {
                    var t = e.data,
                        a = e.pollRate,
                        r = e.dataId,
                        d = e.hasHeader;
                    if (!t) return null;
                    var f = Array.isArray(t.relatedContent) && t.relatedContent.length && t.relatedContent[0];
                    return l.default.createElement("section", {
                        className: p.container,
                        id: "HP-MarketsModule"
                    }, l.default.createElement("section", {
                        className: p.top
                    }, d && l.default.createElement("div", {
                        className: p.title
                    }, l.default.createElement("h2", null, l.default.createElement(o.default, {
                        to: m + "/us-market-movers/"
                    }, "Markets")), l.default.createElement(s.default, {
                        id: "SponsorLogo-" + r,
                        target: "module=MarketsModule"
                    })), l.default.createElement(u.default, {
                        data: f
                    })), l.default.createElement("section", {
                        className: p.row
                    }, l.default.createElement("section", {
                        className: p.leftColumn
                    }, l.default.createElement("div", {
                        className: p.marketTable
                    }, l.default.createElement(n.default, {
                        title: "Most Active"
                    }), l.default.createElement(i.default, {
                        headers: ["Name", "Price", "CHG", "%CHG", "Vol"],
                        moduleType: "VOLUME",
                        pollRate: a,
                        tableType: "market"
                    })), l.default.createElement("div", {
                        className: p.marketTable
                    }, l.default.createElement(n.default, {
                        title: "Unusual Volume"
                    }), l.default.createElement(i.default, {
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
        2340: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = s(a(1)),
                r = s(a(0)),
                i = s(a(19)),
                n = a(12);

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = {};
            o[n.CNBC] = a(2033), o[n.MAKE_IT] = a(2455);
            var d = function(e) {
                var t = e.brand,
                    a = e.stories,
                    r = o[t] || o[n.CNBC],
                    s = a.map(function(e, t) {
                        var a = e.url,
                            n = e.title,
                            s = e.fallbackTitle,
                            o = e.assetType,
                            d = e.premium;
                        return l.default.createElement("li", {
                            key: t,
                            className: r.storyItem
                        }, l.default.createElement("div", {
                            className: r.number
                        }, t + 1), l.default.createElement(i.default, {
                            to: a || "#",
                            assetType: o,
                            premium: d,
                            className: r.title
                        }, n || s))
                    });
                return l.default.createElement("div", {
                    className: r.container
                }, l.default.createElement("div", {
                    className: r.divider
                }), l.default.createElement("h1", {
                    className: r.heading
                }, "Trending Now"), l.default.createElement("ul", {
                    className: r.storyContainer
                }, s))
            };
            d.propTypes = {
                brand: r.default.string.isRequired,
                stories: r.default.array.isRequired
            }, t.default = d
        },
        2341: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = o(a(1)),
                r = o(a(0)),
                i = o(a(699)),
                n = o(a(2342)),
                s = o(a(2344));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = a(2037),
                u = function(e) {
                    var t = e.data,
                        a = e.dataId,
                        r = e.showEyeBrow,
                        o = e.truncate,
                        u = e.isProUser,
                        c = t.main.cards[0],
                        f = t.main.cards.slice(1),
                        m = t.isTwoUp,
                        p = t.main.taxonomyLink || "",
                        g = t.deck.taxonomyLink || "",
                        h = f.length > 1 && !m;
                    return l.default.createElement("section", {
                        className: d.container
                    }, l.default.createElement(n.default, {
                        leadItem: c,
                        title: t.main.title,
                        hasPackage: f.length > 1 || !1,
                        packageItems: f,
                        isTwoUp: m,
                        taxonomyLink: p,
                        showEyeBrow: r,
                        truncate: o
                    }), l.default.createElement(s.default, {
                        cards: t.deck.cards,
                        title: t.deck.title,
                        isTwoUp: m,
                        smallerDeck: h,
                        taxonomyLink: g,
                        truncate: o
                    }), !u && l.default.createElement(i.default, {
                        dataId: "BoxInline-" + a,
                        className: d.adContainer
                    }))
                };
            u.propTypes = {
                data: r.default.object,
                dataId: r.default.string.isRequired,
                truncate: r.default.object.isRequired,
                showEyeBrow: r.default.bool,
                isProUser: r.default.bool.isRequired
            }, u.defaultProps = {
                data: {},
                showEyeBrow: !1
            }, t.default = u
        },
        2342: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = d(a(1)),
                r = d(a(0)),
                i = d(a(2343)),
                n = d(a(2317)),
                s = d(a(19)),
                o = a(114);

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = a(2035),
                c = function(e) {
                    var t = e.leadItem,
                        a = e.title,
                        r = e.hasPackage,
                        d = e.packageItems,
                        c = e.isTwoUp,
                        f = e.taxonomyLink,
                        m = e.showEyeBrow,
                        p = e.truncate,
                        g = l.default.createElement("a", {
                            href: f,
                            className: u.eyebrow,
                            title: a
                        }, a),
                        h = l.default.createElement("span", {
                            className: u.proSmall
                        }, l.default.createElement("span", {
                            className: "icon-probug"
                        })),
                        v = l.default.createElement("p", {
                            className: u.description
                        }, t.description),
                        E = void 0;
                    E = c ? u.twoUpContainer : r ? u.containerWithPackage : u.container;
                    var y = t.imageUrl ? t.imageUrl.includes("?") ? "&" : "?" : "";
                    return l.default.createElement("div", {
                        className: E
                    }, l.default.createElement("div", {
                        className: u.imageMask
                    }, t.imageUrl ? l.default.createElement(n.default, {
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
                        url: "" + t.imageUrl + y,
                        className: u.image,
                        alt: t.title
                    }) : null), l.default.createElement("div", {
                        className: r ? u.contentWithPackage : u.content,
                        id: "LeadStory-HeroModule"
                    }, m ? l.default.createElement("div", {
                        className: u.eyebrowDiv
                    }, t.premium ? h : null, a ? g : null) : null, l.default.createElement("h2", {
                        className: u.title
                    }, l.default.createElement(s.default, {
                        to: t.link,
                        title: t.title
                    }, (0, o.truncateString)(t.title, p.leadElement || 100))), !r && m ? v : null, r && m ? l.default.createElement(i.default, {
                        cards: d,
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
            var l = n(a(1)),
                r = n(a(0)),
                i = n(a(19));

            function n(e) {
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
                            }, l.default.createElement(i.default, {
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
                i = o(a(2345)),
                n = o(a(19)),
                s = a(114);

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = a(2036),
                u = function(e) {
                    var t = e.cards,
                        a = e.title,
                        r = e.isTwoUp,
                        o = e.smallerDeck,
                        u = e.taxonomyLink,
                        c = e.truncate,
                        f = r ? t.slice(1) : t,
                        m = l.default.createElement("div", {
                            className: d.leadItem
                        }, l.default.createElement("div", {
                            className: d.imageMask
                        }, l.default.createElement("img", {
                            src: i.default,
                            alt: t[0].title
                        })), l.default.createElement("div", {
                            className: d.leadItemContent,
                            id: "LeadStory-Deck"
                        }, l.default.createElement("span", {
                            className: d.eyebrow
                        }, l.default.createElement(n.default, {
                            to: u,
                            title: a
                        }, a)), l.default.createElement(n.default, {
                            to: t[0].link,
                            title: t[0].title,
                            className: d.leadItemTitle
                        }, t[0].title))),
                        p = l.default.createElement("span", {
                            className: d.proSmall
                        }, l.default.createElement("span", {
                            className: "icon-probug"
                        })),
                        g = f.map(function(e, t) {
                            return l.default.createElement("li", {
                                className: r ? d.twoUpStory : d.story,
                                key: t
                            }, l.default.createElement("div", {
                                className: e.premium ? d.pro : "",
                                id: "TopStory-HeroModule-" + t
                            }, e.premium ? p : null, l.default.createElement(n.default, {
                                to: e.link,
                                title: e.title
                            }, (0, s.truncateString)(e.title || "", e.premium ? c.deckPremiumElement || 100 : c.deckOtherElement || 100))))
                        });
                    return l.default.createElement("div", {
                        className: o ? d.smallerContainer : d.container
                    }, l.default.createElement("div", {
                        className: r ? d.twoUpStories : d.stories
                    }, r ? m : void 0, l.default.createElement("ul", null, t ? g : void 0)))
                };
            u.propTypes = {
                cards: r.default.array.isRequired,
                isTwoUp: r.default.bool,
                title: r.default.string,
                smallerDeck: r.default.bool,
                truncate: r.default.object.isRequired,
                taxonomyLink: r.default.string
            }, u.defaultProps = {
                title: "",
                isTwoUp: !1,
                smallerDeck: !1,
                taxonomyLink: ""
            }, t.default = u
        },
        2345: function(e, t, a) {
            e.exports = a.p + "6480138aaaad669fae1ce7d8e681981e.jpg"
        },
        2346: function(e, t, a) {
            "use strict";
            var l = n(a(5)),
                r = n(a(6)),
                i = "function" == typeof r.default && "symbol" == typeof l.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
                };

            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GdsMarketTable = void 0;
            var s = E(a(2)),
                o = E(a(7)),
                d = E(a(8)),
                u = E(a(9)),
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
                f = a(1),
                m = E(f),
                p = E(a(0)),
                g = a(22),
                h = a(146),
                v = E(a(489));

            function E(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function y(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : i(t)) && "function" != typeof t ? e : t
            }
            var w = t.GdsMarketTable = function(e) {
                function t() {
                    var e, a, l;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var r = arguments.length, i = Array(r), n = 0; n < r; n++) i[n] = arguments[n];
                    return a = l = y(this, (e = t.__proto__ || (0, u.default)(t)).call.apply(e, [this].concat(i))), l.startPollingArticle = function() {
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
                    }, y(l, a)
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : i(t)));
                    e.prototype = (0, d.default)(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (o.default ? (0, o.default)(e, t) : e.__proto__ = t)
                }(t, f.Component), c(t, [{
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
                            i = a.map(function(e) {
                                return e.toUpperCase()
                            }),
                            n = {
                                NAME: ["cnbcSymbol"],
                                PRICE: ["symbolData", "lastPrice"],
                                "%CHG": ["symbolData", "changePct"],
                                CHG: ["symbolData", "change"],
                                VOLUME: ["symbolData", "volume"],
                                VOL: ["symbolData", "volume"],
                                "% 10 DAY VOL": ["symbolData", "pctTenDayVol"],
                                "X10 DAY VOL": ["symbolData", "pctTenDayVol"]
                            };
                        i.includes("SYMBOL") && (n.NAME = ["symbolData", "name"]);
                        var s = i;
                        r && (s = ["TICKER", "COMPANY"].concat(s)), s.includes("FAIR VALUE") && s.splice(s.indexOf("FAIR VALUE"), s.indexOf("FAIR VALUE") + 1);
                        var o = t.map(function(e, a) {
                                return s.map(function(e) {
                                    var l = t[a];
                                    return n[e] ? (n[e].forEach(function(e) {
                                        return l[e] ? l = l[e] : (l = "changePct" === e ? "0%" : 0, "--")
                                    }), l) : "--"
                                })
                            }),
                            d = {
                                rows: [s].concat(o),
                                rowHeader: !0,
                                columnHeader: !1
                            };
                        return m.default.createElement(v.default, {
                            themeColor: this.props.themeColor,
                            data: d,
                            isSortable: l,
                            isArticle: r,
                            tableType: this.props.tableType
                        })
                    }
                }]), t
            }();
            w.defaultProps = {
                pollRate: 1e4,
                isFetching: !1,
                marketData: [],
                isSortable: !1,
                isArticle: !1,
                themeColor: null,
                moduleType: "",
                tableType: ""
            }, w.propTypes = {
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
            })(w)
        },
        2347: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MarketNews = void 0;
            var l = s(a(1)),
                r = s(a(0)),
                i = s(a(331)),
                n = a(114);

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = a(2038),
                d = t.MarketNews = function(e) {
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
                            return l.default.createElement(i.default, {
                                type: e.type,
                                key: e.id + t,
                                title: (0, n.truncateString)(e.title || "", 100),
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
            d.defaultProps = {
                data: []
            }, d.propTypes = {
                data: r.default.array.isRequired
            }, t.default = d
        },
        2348: function(e, t, a) {
            e.exports = a.p + "d19f78d83fae718a3e20005201e191a9.png"
        },
        2411: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = n(a(1)),
                r = n(a(0)),
                i = n(a(19));

            function n(e) {
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
                            }, l.default.createElement(i.default, {
                                to: e.link,
                                title: e.title
                            }, e.title))
                        }),
                        n = t.map(function(e, t) {
                            return l.default.createElement("li", {
                                className: s.listItem,
                                key: t
                            }, e.title)
                        });
                    return l.default.createElement("ul", {
                        className: "bullet" === a ? s.bulletList : s.articleList
                    }, "bullet" === a ? n : r)
                };
            o.propTypes = {
                items: r.default.array.isRequired,
                listType: r.default.string
            }, o.defaultProps = {
                listType: "bullet"
            }, t.default = o
        },
        2412: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = n(a(2322)),
                r = n(a(2323)),
                i = n(a(2324));

            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = {
                breakerType: "special",
                title: "Related Special Reports",
                slides: [{
                    title: "Tech Drivers",
                    image: l.default,
                    description: "Holograms helping to breathe new life into deceased musicians"
                }, {
                    title: "Tech Disruptors",
                    image: r.default,
                    description: "China’s blueprint to crush the US robotics industry"
                }, {
                    title: "Tech Transformers",
                    image: i.default,
                    description: "Bitcoin drops 8% after JPMorgan's Jamie Dimon calls it a fraud"
                }, {
                    title: "Tech Drivers",
                    image: l.default,
                    description: "Holograms helping to breathe new life into deceased musicians"
                }, {
                    title: "Tech Drivers",
                    image: l.default,
                    description: "Holograms helping to breathe new life into deceased musicians"
                }]
            };
            t.default = s
        },
        2413: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = o(a(2414)),
                r = o(a(2415)),
                i = o(a(2416)),
                n = o(a(2417)),
                s = o(a(2418));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = {
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
                    image: i.default,
                    title: "AAPL",
                    description: "Why Apple saved its cheapest iPhone"
                }, {
                    image: n.default,
                    title: "GOOGL",
                    description: "EU set to demand Internet firms act faster to remove illegal content"
                }, {
                    image: s.default,
                    title: "GOOGL",
                    description: "Tesla’s vice president of business development leaves"
                }]
            };
            t.default = d
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
        2419: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = [{
                title: "Trump at UN: 'Rocket Man' Kim Jon Un 'is on a suicide mission'",
                url: "https://www.cnbc.com"
            }, {
                title: "Kohl's opens its doors to Amazon's returns",
                url: "https://www.cnbc.com"
            }, {
                title: "T-Mobile and Sprint are in active talks about a merger",
                url: "https://www.cnbc.com"
            }, {
                title: "Toys R Us files for Chapter 1  bankruptcy protection",
                url: "https://www.cnbc.com"
            }, {
                title: "The first iPhone 8 reviews are out, and here's what is being said",
                url: "https://www.cnbc.com"
            }]
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
                i = s(a(2467)),
                n = s(a(2468));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = a(2080),
                d = function(e) {
                    var t = e.data,
                        a = t.type;
                    return l.default.createElement("section", {
                        className: "video" !== a ? o.container : o.videoContainer
                    }, "article" === a ? l.default.createElement(i.default, {
                        data: t
                    }) : void 0, "video" === a ? l.default.createElement(n.default, {
                        data: t
                    }) : void 0)
                };
            d.propTypes = {
                data: r.default.object
            }, d.defaultProps = {
                data: {}
            }, t.default = d
        },
        2467: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = s(a(1)),
                r = s(a(0)),
                i = s(a(2411)),
                n = s(a(19));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = a(2078),
                d = function(e) {
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
                    }, l.default.createElement(n.default, {
                        to: t.taxonomyLink || null,
                        className: o.eyebrow
                    }, t.taxonomy), l.default.createElement("h1", {
                        className: o.title
                    }, l.default.createElement(n.default, {
                        to: t.mainLink || null,
                        title: t.title
                    }, t.title)), a && l.default.createElement(i.default, {
                        items: t.cards,
                        listType: a
                    })))
                };
            d.propTypes = {
                data: r.default.object
            }, d.defaultProps = {
                data: {}
            }, t.default = d
        },
        2468: function(e, t, a) {
            "use strict";
            var l = n(a(5)),
                r = n(a(6)),
                i = "function" == typeof r.default && "symbol" == typeof l.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
                };

            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = E(a(2)),
                o = E(a(7)),
                d = E(a(8)),
                u = E(a(9)),
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
                f = E(a(1)),
                m = E(a(0)),
                p = E(a(2411)),
                g = E(a(143)),
                h = E(a(736)),
                v = E(a(19));

            function E(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function y(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : i(t)) && "function" != typeof t ? e : t
            }
            var w = a(2079),
                b = function(e) {
                    function t() {
                        var e, a, l;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var r = arguments.length, i = Array(r), n = 0; n < r; n++) i[n] = arguments[n];
                        return a = l = y(this, (e = t.__proto__ || (0, u.default)(t)).call.apply(e, [this].concat(i))), l.state = {
                            isLive: "bullet" !== l.props.data.listType
                        }, y(l, a)
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : i(t)));
                        e.prototype = (0, d.default)(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (o.default ? (0, o.default)(e, t) : e.__proto__ = t)
                    }(t, f.default.Component), c(t, [{
                        key: "render",
                        value: function() {
                            return f.default.createElement("section", {
                                className: this.state.isLive ? w.liveContainer : w.container
                            }, f.default.createElement("div", {
                                className: w.playerWrapper
                            }, f.default.createElement("div", {
                                className: w.playerContainer
                            }, f.default.createElement("img", {
                                src: this.props.data.thumbnail,
                                alt: "for placement only"
                            }), !this.state.isLive && f.default.createElement(h.default, {
                                isLoggedIn: !0
                            }), f.default.createElement("button", {
                                className: w.playButton
                            }, this.state.isLive && f.default.createElement(g.default, {
                                isFeatured: !0
                            })))), f.default.createElement("div", {
                                className: w.contentContainer
                            }, f.default.createElement("div", {
                                className: w.content
                            }, this.state.isLive && f.default.createElement("span", {
                                className: w.eyebrow + " icon-livebug"
                            }, "Live"), f.default.createElement("h1", {
                                className: w.title
                            }, f.default.createElement(v.default, {
                                to: this.props.data.mainLink
                            }, this.props.data.title))), this.props.data.listType && f.default.createElement(p.default, {
                                listType: this.props.data.listType,
                                items: this.props.data.cards
                            })))
                        }
                    }]), t
                }();
            b.propTypes = {
                data: m.default.object
            }, b.defaultProps = {
                data: {}
            }, t.default = b
        },
        2469: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l, r = a(2348),
                i = (l = r) && l.__esModule ? l : {
                    default: l
                };
            var n = {
                breakerType: "people",
                title: "Investors",
                slides: [{
                    name: "Jim Cramer",
                    image: i.default,
                    description: "Host of “Mad Money” and co-anchor of Squawk on the Street",
                    href: "/bio"
                }, {
                    name: "Carl Quintanilla",
                    image: i.default,
                    description: "Host of “Mad Money” and co-anchor of Squawk on the Street",
                    href: "/bio"
                }, {
                    name: "Sara Eisen",
                    image: i.default,
                    description: "Host of “Mad Money” and co-anchor of Squawk on the Street",
                    href: "/bio"
                }, {
                    name: "Deidre Bosa",
                    image: i.default,
                    description: "Host of “Mad Money” and co-anchor of Squawk on the Street",
                    href: "/bio"
                }, {
                    name: "Jim Cramer",
                    image: i.default,
                    description: "Host of “Mad Money” and co-anchor of Squawk on the Street",
                    href: "/bio"
                }]
            };
            t.default = n
        },
        2470: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = s(a(2318)),
                r = s(a(2319)),
                i = s(a(2320)),
                n = s(a(2321));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = {
                breakerType: "shows",
                title: "Related Shows",
                slides: [{
                    title: "Squawk Box",
                    time: "Weekdays 6:00AM ET",
                    image: n.default,
                    href: "/show"
                }, {
                    title: "Power Lunch",
                    time: "Weekdays 6:00AM ET",
                    image: i.default,
                    href: "/show"
                }, {
                    title: "Fast Money",
                    time: "Weekdays 6:00AM ET",
                    image: l.default,
                    href: "/show"
                }, {
                    title: "Futures Now",
                    time: "Weekdays 6:00AM ET",
                    image: r.default,
                    href: "/show"
                }, {
                    title: "Squawk Box",
                    time: "Weekdays 6:00AM ET",
                    image: n.default,
                    href: "/show"
                }]
            };
            t.default = o
        },
        2471: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = {
                breakerType: "market",
                title: "Related Markets",
                slides: ["5093159", "72887506", "36276", "50666486", "258981"]
            }
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
            var l = i(a(2475)),
                r = i(a(2476));

            function i(e) {
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
                i = (l = r) && l.__esModule ? l : {
                    default: l
                };
            t.worldOnFireVideoBulletList = {
                taxonomy: "Politics",
                type: "video",
                title: "Trump says he is under investigation, lashes out at Justice Department",
                mainLink: "#",
                thumbnail: i.default,
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
                thumbnail: i.default,
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
        770: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = Y(a(1)),
                r = a(693),
                i = Y(a(1994)),
                n = Y(a(1992)),
                s = Y(a(2e3)),
                o = Y(a(2314)),
                d = Y(a(480)),
                u = Y(a(2340)),
                c = Y(a(376)),
                f = Y(a(2024)),
                m = Y(a(2341)),
                p = Y(a(2466)),
                g = Y(a(2338)),
                h = Y(a(1990)),
                v = a(1997),
                E = a(2004),
                y = Y(E),
                w = Y(a(1998)),
                b = Y(a(1991)),
                k = Y(a(692)),
                N = Y(a(2025)),
                T = Y(a(2469)),
                M = Y(a(2470)),
                R = Y(a(2412)),
                _ = Y(a(2413)),
                C = Y(a(2471)),
                S = a(2325),
                L = Y(a(2419)),
                P = Y(a(2472)),
                A = Y(a(2473)),
                j = Y(a(2420)),
                U = a(2474),
                x = a(2477),
                B = Y(a(2001)),
                F = Y(a(2421)),
                I = Y(a(2018)),
                D = Y(a(2002)),
                H = a(2003),
                O = Y(a(2026)),
                q = Y(a(2027)),
                W = Y(a(739)),
                V = a(478),
                G = a(698),
                z = Y(a(2021)),
                J = Y(a(2028));

            function Y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var K = a(1993);
            t.default = function() {
                return l.default.createElement("div", {
                    className: K.page
                }, l.default.createElement(r.BaseMeta, {
                    key: "BaseMeta",
                    data: {
                        page: {
                            title: "Component Example Page"
                        }
                    }
                }), l.default.createElement("div", {
                    className: K.pageGrid
                }, l.default.createElement("div", {
                    className: K.pageWrapper
                }, l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(z.default, J.default))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-8"]
                }, l.default.createElement(z.default, J.default))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(v.MarketsBanner, {
                    selectedMarketBanner: y.default.selectedMarket,
                    marketData: y.default.marketData,
                    isFetching: !1,
                    lastUpdated: y.default.lastUpdated,
                    dispatch: function() {},
                    pollRate: 15e4,
                    parent: "MarketBanner",
                    data: y.default.data,
                    ad: E.marketBannerAd
                }), l.default.createElement(v.MarketsBanner, {
                    selectedMarketBanner: y.default.selectedMarket,
                    marketData: y.default.marketData,
                    isFetching: !1,
                    lastUpdated: y.default.lastUpdated,
                    dispatch: function() {},
                    pollRate: 15e4,
                    parent: "MarketBanner",
                    data: y.default.data
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(i.default, {
                    landing: !0
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(N.default, {
                    regions: q.default,
                    data: O.default,
                    isLive: !0
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(N.default, {
                    regions: q.default,
                    data: O.default,
                    isLoggedIn: !0,
                    isLive: !0
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(N.default, {
                    regions: q.default,
                    data: O.default,
                    isLoggedIn: !0
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(p.default, {
                    data: U.breaking
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(p.default, {
                    data: U.bulletList
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(p.default, {
                    data: U.articleList
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(p.default, {
                    data: x.worldOnFireVideoBulletList
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(p.default, {
                    data: x.worldOnFireVideoArticleList
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(w.default, {
                    playlistItems: D.default,
                    sidebarItems: H.videoSidebarMock,
                    header: "CNBC TV"
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(w.default, {
                    playlistItems: D.default,
                    sidebarItems: H.videoSidebarMock,
                    header: "Technology Video",
                    isSmall: !0
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(m.default, {
                    data: P.default
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(m.default, {
                    data: A.default
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(m.default, {
                    data: j.default
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(s.default, {
                    data: _.default,
                    themeColor: "#ff69b4"
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(s.default, {
                    data: T.default,
                    themeColor: "hotpink"
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(s.default, {
                    data: M.default
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(s.default, {
                    data: R.default
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(s.default, {
                    data: C.default
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(o.default, {
                    id: 102
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(d.default, {
                    item1: G.cnbcProHalfBreaker,
                    item2: G.watchlistHalfBreaker
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(d.default, {
                    item1: G.watchlistHalfBreaker,
                    item2: G.newslettersHalfBreaker
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(d.default, {
                    item1: G.newslettersHalfBreaker,
                    item2: G.cnbcProHalfBreaker
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-8"]
                }, l.default.createElement(g.default, {
                    pollRate: 15e4,
                    news: F.default,
                    sponsorLogo: W.default,
                    hasHeader: !0
                }))), l.default.createElement("h1", null, "Dual lead"), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-4"]
                }, l.default.createElement(f.default, {
                    rails: {
                        socialRail: !0
                    },
                    themeColor: "#1FF1C8"
                }), l.default.createElement(b.default, null)), l.default.createElement("div", {
                    className: K["col-8"]
                }, l.default.createElement(k.default, {
                    title: "Business News",
                    titleLink: "#"
                }, l.default.createElement(c.default, {
                    cards: V.dualLeadCardMocks,
                    layoutType: "dual-lead"
                })))), l.default.createElement("h1", null, "Dual Lead Package Left"), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-4"]
                }, l.default.createElement(f.default, {
                    rails: {
                        socialRail: !0
                    }
                })), l.default.createElement("div", {
                    className: K["col-8"]
                }, l.default.createElement(k.default, {
                    title: "Business News",
                    titleLink: "#"
                }, l.default.createElement(c.default, {
                    cards: V.dualLeadCardMocks,
                    layoutType: "dual-lead",
                    hasPackage: "left",
                    packageTitle: "package title"
                })))), l.default.createElement("h1", null, "Dual Lead Package Right"), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-4"]
                }, l.default.createElement(f.default, {
                    rails: {
                        socialRail: !0
                    },
                    themeColor: "#1FF1C8"
                })), l.default.createElement("div", {
                    className: K["col-8"]
                }, l.default.createElement(c.default, {
                    cards: V.dualLeadCardMocks,
                    layoutType: "dual-lead",
                    hasPackage: "right",
                    packageTitle: "package title"
                }))), l.default.createElement("h1", null, "Single Lead"), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-4"]
                }, l.default.createElement(f.default, {
                    rails: {
                        socialRail: !0
                    }
                }), l.default.createElement(b.default, null)), l.default.createElement("div", {
                    className: K["col-8"]
                }, l.default.createElement(c.default, {
                    cards: V.singleLeadCardMocks,
                    layoutType: "single-lead"
                }))), l.default.createElement("h1", null, "Single Lead Package Left"), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-4"]
                }, l.default.createElement(f.default, {
                    rails: {
                        socialRail: !0
                    },
                    themeColor: "#1FF1C8"
                }), l.default.createElement(b.default, null)), l.default.createElement("div", {
                    className: K["col-8"]
                }, l.default.createElement(c.default, {
                    cards: V.singleLeadCardMocks,
                    layoutType: "single-lead",
                    hasPackage: "left",
                    packageTitle: "package title"
                }))), l.default.createElement("h1", null, "Single Lead Package Right"), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-4"]
                }, l.default.createElement(f.default, {
                    rails: {
                        socialRail: !0
                    },
                    themeColor: "#1FF1C8"
                }), l.default.createElement(b.default, null)), l.default.createElement("div", {
                    className: K["col-8"]
                }, l.default.createElement(c.default, {
                    cards: V.singleLeadCardMocks,
                    layoutType: "single-lead",
                    hasPackage: "right",
                    packageTitle: "package title"
                }))), l.default.createElement("h1", null, "Square Lead"), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-4"]
                }, l.default.createElement(f.default, {
                    rails: {
                        socialRail: !0
                    },
                    themeColor: "#1FF1C8"
                }), l.default.createElement(b.default, null)), l.default.createElement("div", {
                    className: K["col-8"]
                }, "square lead")), l.default.createElement("h1", null, "Two Up"), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-4"]
                }, l.default.createElement(f.default, {
                    rails: {
                        socialRail: !0
                    },
                    themeColor: "#1FF1C8"
                }), l.default.createElement(b.default, null)), l.default.createElement("div", {
                    className: K["col-8"]
                }, l.default.createElement(c.default, {
                    cards: V.twoUpCardMocks,
                    layoutType: "two-up"
                }))), l.default.createElement("h1", null, "Three Up"), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-4"]
                }, l.default.createElement(f.default, {
                    rails: {
                        socialRail: !0
                    },
                    themeColor: "#1FF1C8"
                })), l.default.createElement("div", {
                    className: K["col-8"]
                }, l.default.createElement(c.default, {
                    cards: V.threeUpCardMocks,
                    layoutType: "three-up"
                }))), l.default.createElement("h1", null, "Dense No Labels"), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-4"]
                }, l.default.createElement(f.default, {
                    rails: {
                        socialRail: !0
                    },
                    themeColor: "#1FF1C8"
                })), l.default.createElement("div", {
                    className: K["col-8"]
                }, l.default.createElement(c.default, {
                    cards: V.denseCardMocks,
                    layoutType: "dense"
                }))), l.default.createElement("h1", null, "Dense Flexible Label 1 "), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-4"]
                }, l.default.createElement(f.default, {
                    rails: {
                        socialRail: !0
                    },
                    themeColor: "#1FF1C8"
                })), l.default.createElement("div", {
                    className: K["col-8"]
                }, l.default.createElement(c.default, {
                    cards: V.denseCardMocks,
                    layoutType: "dense",
                    flexibleLabels: ["flexible label 1", null, null]
                }))), l.default.createElement("h1", null, "Dense Flexible Label 1 & 2"), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-4"]
                }, l.default.createElement(f.default, {
                    rails: {
                        socialRail: !0
                    },
                    themeColor: "#1FF1C8"
                })), l.default.createElement("div", {
                    className: K["col-8"]
                }, l.default.createElement(c.default, {
                    cards: V.denseCardMocks,
                    layoutType: "dense",
                    flexibleLabels: ["flexible label 1", "flexible label 2", null]
                }))), l.default.createElement("h1", null, "Image Dense without Label"), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-4"]
                }, l.default.createElement(f.default, {
                    rails: {
                        socialRail: !0
                    },
                    themeColor: "#1FF1C8"
                })), l.default.createElement("div", {
                    className: K["col-8"]
                }, l.default.createElement(c.default, {
                    cards: V.imageDenseCardMocks,
                    layoutType: "image-dense",
                    flexibleLabels: [null]
                }))), l.default.createElement("h1", null, "Image Dense with Label"), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-4"]
                }, l.default.createElement(f.default, {
                    rails: {
                        socialRail: !0
                    },
                    themeColor: "#1FF1C8"
                }), l.default.createElement(b.default, null)), l.default.createElement("div", {
                    className: K["col-8"]
                }, l.default.createElement(c.default, {
                    cards: V.imageDenseCardMocks,
                    layoutType: "image-dense",
                    flexibleLabels: ["flexible label 1"]
                }))), l.default.createElement("h1", null, "Mini Hero"), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-4"]
                }, l.default.createElement(f.default, {
                    rails: {
                        socialRail: !0
                    },
                    themeColor: "#1FF1C8"
                })), l.default.createElement("div", {
                    className: K["col-8"]
                }, l.default.createElement(c.default, {
                    cards: V.miniHeroCardMocks,
                    layoutType: "mini-hero"
                }))), l.default.createElement("h1", null, "Mini Hero Package"), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-4"]
                }, l.default.createElement(f.default, {
                    rails: {
                        socialRail: !0
                    },
                    themeColor: "#1FF1C8"
                })), l.default.createElement("div", {
                    className: K["col-8"]
                }, l.default.createElement(c.default, {
                    cards: V.miniHeroPackageCardMocks,
                    layoutType: "mini-hero",
                    hasPackage: "right",
                    packageTitle: "package title"
                }))), l.default.createElement("h1", null, "Standard Landing Page Header -- title only"), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(h.default, {
                    title: I.default.title
                }))), l.default.createElement("h1", null, "Standard Landing Page Header -- title and eyebrow"), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(h.default, {
                    title: I.default.title,
                    eyebrow: I.default.eyebrow
                }))), l.default.createElement("h1", null, "Standard Landing Page Header -- title, eyebrow and subnav"), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(h.default, {
                    title: I.default.title,
                    eyebrow: I.default.eyebrow,
                    subNavLinks: I.default.subNavLinks
                }))), l.default.createElement("h1", null, "Special Report, text only -- background image and theme color defined"), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(h.default, {
                    title: I.default.title,
                    eyebrow: I.default.eyebrow,
                    subNavLinks: I.default.subNavLinks
                }))), l.default.createElement("h1", null, "Special Report, text only -- with sponsor. Default color and no background image"), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(h.default, {
                    title: I.default.title,
                    eyebrow: I.default.eyebrow,
                    subNavLinks: I.default.subNavLinks
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(h.default, {
                    title: I.default.title,
                    eyebrow: I.default.eyebrow,
                    subNavLinks: I.default.subNavLinks
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(h.default, {
                    title: I.default.title,
                    eyebrow: I.default.eyebrow,
                    subNavLinks: I.default.subNavLinks
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(h.default, {
                    title: I.default.title,
                    eyebrow: I.default.eyebrow,
                    subNavLinks: I.default.subNavLinks
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(h.default, {
                    title: I.default.title,
                    eyebrow: I.default.eyebrow,
                    subNavLinks: I.default.subNavLinks
                }))), l.default.createElement("h1", null, "Special Report with logo -- no sponsor, color theme or background"), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(h.default, {
                    title: I.default.title,
                    eyebrow: I.default.eyebrow,
                    subNavLinks: I.default.subNavLinks
                }))), l.default.createElement("h1", null, "Special Report with logo -- sponsored, with defined background image and theme color"), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(h.default, {
                    title: I.default.title,
                    eyebrow: I.default.eyebrow,
                    subNavLinks: I.default.subNavLinks
                }))), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-12"]
                }, l.default.createElement(u.default, {
                    stories: L.default
                }))), l.default.createElement("h1", null, "Dynamic Content Feed"), l.default.createElement("div", {
                    className: K.pageRow
                }, l.default.createElement("div", {
                    className: K["col-8"]
                }, l.default.createElement(n.default, {
                    cards: B.default,
                    isLazyLoad: !0
                })), l.default.createElement("div", {
                    className: K["col-4"]
                }, l.default.createElement(f.default, {
                    rails: {
                        aboutRail: S.aboutRailMock,
                        themeColor: "#1FF1C8",
                        socialRail: !0
                    }
                }), l.default.createElement(b.default, null))))))
            }
        }
    }
]);