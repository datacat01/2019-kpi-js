(window.webpackJsonp = window.webpackJsonp || []).push([
    [38, 123], {
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
            var s, u, d = S(a(2)),
                c = S(a(7)),
                o = S(a(8)),
                f = S(a(9)),
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
                p = S(a(1)),
                v = S(a(0)),
                g = S(a(105)),
                h = S(a(20)),
                E = S(a(143)),
                y = S(a(21)),
                b = a(114),
                N = S(a(19)),
                w = S(a(37)),
                k = S(a(106));

            function S(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function T(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : n(t)) && "function" != typeof t ? e : t
            }
            var A = a(2030),
                _ = (u = s = function(e) {
                    function t() {
                        var e, a, l;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                        return a = l = T(this, (e = t.__proto__ || (0, f.default)(t)).call.apply(e, [this].concat(n))), l.state = {
                            currentSlide: 0,
                            currentBreakpoint: ""
                        }, l.handleBreakpointChange = function() {
                            var e = w.default.current();
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
                            return 0 === l.state.currentSlide ? A.prevArrowInactive : A.prevArrow
                        }, l.setNextArrowStyle = function() {
                            var e = l.props.data;
                            if (e) {
                                var t = l.ifArray(e.assets) ? e.assets.length - 1 : 0;
                                return l.state.currentSlide >= t ? A.nextArrowInactive : A.nextArrow
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
                            return (0, g.default)(e).format("MMM D, YYYY")
                        }, l.getItemTitle = function(e, t, a, l) {
                            return e ? p.default.createElement(N.default, {
                                to: e,
                                brand: l.brand,
                                assetType: l.type,
                                premium: l.premium,
                                sectionSubType: l.section && l.section.subType,
                                native: l.native
                            }, p.default.createElement("div", {
                                className: a
                            }, (0, b.truncateString)(t, 100))) : p.default.createElement("div", {
                                className: a
                            }, t)
                        }, l.getSlideTitle = function(e) {
                            return p.default.createElement("div", {
                                className: A.itemWrapper
                            }, e.linkHeadline && l.getItemTitle(e.url, e.linkHeadline, A.itemTitle, e), !e.linkHeadline && e.shorterHeadline && l.getItemTitle(e.url, e.shorterHeadline, A.itemTitle, e), !e.linkHeadline && !e.shorterHeadline && l.getItemTitle(e.url, e.title, A.itemTitle, e), e.author && e.sourceOrganization && l.getAuthorSource(e.sourceOrganization, e.author, e.creatorOverwrite, e))
                        }, l.getAuthorSource = function(e, t, a) {
                            if (e.length) {
                                if ("CNBC.com" !== e[0].name) return p.default.createElement("div", {
                                    className: A.itemAuthor
                                }, e[0].name);
                                if (t.length) {
                                    var l = t.map(function(e) {
                                        return e.name
                                    }).join(", ");
                                    return a ? (l = l + ", " + a, p.default.createElement("div", {
                                        className: A.itemAuthor
                                    }, l)) : p.default.createElement("div", {
                                        className: A.itemAuthor
                                    }, l)
                                }
                            }
                            if (t.length) {
                                var r = t.map(function(e) {
                                    return e.name
                                }).join(",");
                                return p.default.createElement("div", {
                                    className: A.itemAuthor
                                }, r)
                            }
                            if (a) return p.default.createElement("div", {
                                className: A.itemAuthor
                            }, a)
                        }, l.getBreakerTopSection = function(e) {
                            var t = e.logo,
                                a = e.url,
                                r = e.title,
                                n = e.displayShowTime,
                                i = e.showTime,
                                s = e.eventData,
                                u = e.type;
                            return p.default.createElement("div", null, p.default.createElement("div", {
                                className: A.heading
                            }, t && (a ? p.default.createElement("div", {
                                className: A.headingImage
                            }, p.default.createElement(N.default, {
                                to: a
                            }, p.default.createElement("img", {
                                src: t.url,
                                alt: t.title
                            }))) : p.default.createElement("div", {
                                className: A.headingImage
                            }, p.default.createElement("img", {
                                src: t.url,
                                alt: t.title
                            }))), !t && (a && "collection" !== u ? p.default.createElement("h3", {
                                className: A.headingText
                            }, p.default.createElement(N.default, {
                                className: A.headingLink,
                                to: a
                            }, r)) : p.default.createElement("h3", {
                                className: A.headingText
                            }, r)), n && i && p.default.createElement("time", {
                                className: A.airTime
                            }, i), 0 !== s.length && p.default.createElement("p", {
                                className: A.eventTime
                            }, p.default.createElement("time", null, l.convertDate(s[0].startDate)), " - ", s[0].location)), p.default.createElement("div", {
                                className: A.arrowContainer
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
                                className: A.slideContainer
                            }, p.default.createElement("div", {
                                className: A.leftSlide
                            }, p.default.createElement("div", {
                                className: A.slideRail,
                                style: l.slideRailStylesLeft()
                            }, l.getSlides(e, t))), p.default.createElement("div", {
                                className: A.rightSlide
                            }, p.default.createElement("div", {
                                className: A.slideRail,
                                style: l.slideRailStylesRight()
                            }, l.getSlides(e, t))))
                        }, l.getSlides = function(e, t) {
                            return e.map(function(e, a) {
                                return p.default.createElement(k.default, null, p.default.createElement("div", {
                                    key: a,
                                    className: A.item,
                                    style: e.promoImage && {
                                        backgroundImage: "url(" + e.promoImage.url + "&w=" + l.sizeByBreakpoint() + "&h=" + Math.floor(l.sizeByBreakpoint() / 2) + ")"
                                    }
                                }, (-1 !== t.indexOf("show") || "video" === t) && p.default.createElement(E.default, {
                                    isFeatured: !0
                                }), l.getSlideTitle(e)))
                            })
                        }, T(l, a)
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : n(t)));
                        e.prototype = (0, o.default)(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (c.default ? (0, c.default)(e, t) : e.__proto__ = t)
                    }(t, p.default.Component), m(t, [{
                        key: "componentDidMount",
                        value: function() {
                            h.default.on("breakpointChange", this.handleBreakpointChange)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            h.default.remove("breakpointChange", this.handleBreakpointChange)
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
                                n = t.url,
                                i = t.title,
                                s = t.assets,
                                u = t.showTime,
                                d = t.subType,
                                c = t.type,
                                o = null != d && -1 !== d.indexOf("show");
                            return p.default.createElement("div", {
                                className: A.featuredBreaker,
                                id: a
                            }, p.default.createElement("div", {
                                className: A.wrapper
                            }, this.getBreakerTopSection({
                                logo: r,
                                url: n,
                                title: i,
                                displayShowTime: o,
                                showTime: u,
                                eventData: l,
                                type: c
                            }), this.getBreakerSlides(s, d)))
                        }
                    }]), t
                }(), s.propTypes = {
                    data: v.default.object.isRequired,
                    dataId: v.default.oneOfType([v.default.string, v.default.number]).isRequired
                }, u);
            t.FeaturedBreaker = _, t.default = _
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
        2412: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = i(a(2322)),
                r = i(a(2323)),
                n = i(a(2324));

            function i(e) {
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
                    image: n.default,
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
            var l = u(a(2414)),
                r = u(a(2415)),
                n = u(a(2416)),
                i = u(a(2417)),
                s = u(a(2418));

            function u(e) {
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
        806: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = k(a(1)),
                r = a(693),
                n = k(a(1994)),
                i = k(a(1992)),
                s = k(a(2e3)),
                u = k(a(376)),
                d = k(a(2024)),
                c = k(a(1990)),
                o = k(a(1989)),
                f = k(a(1991)),
                m = k(a(2412)),
                p = k(a(2413)),
                v = k(a(2001)),
                g = k(a(2018)),
                h = k(a(692)),
                E = k(a(1998)),
                y = k(a(2002)),
                b = a(2003),
                N = k(a(2314)),
                w = a(478);

            function k(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var S = a(1993);
            t.default = function() {
                return l.default.createElement(o.default, null, l.default.createElement(r.BaseMeta, {
                    key: "BaseMeta",
                    data: {
                        page: {
                            title: "Landing Tech"
                        }
                    }
                }), l.default.createElement("div", {
                    className: S.page
                }, l.default.createElement("div", {
                    className: S.pageGrid
                }, l.default.createElement("div", {
                    className: S.pageWrapper
                }, l.default.createElement("div", {
                    className: S.pageRow
                }, l.default.createElement("div", {
                    className: S["col-12"]
                }, l.default.createElement(n.default, {
                    landing: !0
                }))), l.default.createElement("div", {
                    className: S.pageRow
                }, l.default.createElement("div", {
                    className: S["col-12"]
                }, l.default.createElement(c.default, {
                    title: "TECHNOLOGY",
                    subNavLinks: g.default.subNavLinks
                }))), l.default.createElement("div", {
                    className: S.pageRow
                }, l.default.createElement("div", {
                    className: S["col-8"]
                }, l.default.createElement(h.default, {
                    title: "Tech"
                }, l.default.createElement(u.default, {
                    cards: w.miniHeroPackageCardMocks,
                    layoutType: "mini-hero",
                    hasPackage: "right"
                }), l.default.createElement("div", {
                    style: {
                        height: "30px"
                    }
                }), l.default.createElement(u.default, {
                    cards: w.threeUpCardMocks,
                    layoutType: "three-up"
                }))), l.default.createElement("div", {
                    className: S["col-4"]
                }, l.default.createElement(d.default, {
                    rails: {
                        socialRail: !0
                    }
                }), l.default.createElement(f.default, null))), l.default.createElement("div", {
                    className: S.pageRow
                }, l.default.createElement("div", {
                    className: S["col-12"]
                }, l.default.createElement(E.default, {
                    playlistItems: y.default,
                    sidebarItems: b.videoSidebarMock,
                    header: "Technology Video",
                    isSmall: !0
                }))), l.default.createElement("div", {
                    className: S.pageRow
                }, l.default.createElement("div", {
                    className: S["col-12"]
                }, l.default.createElement(s.default, {
                    data: m.default
                }))), l.default.createElement("div", {
                    className: S.pageRow
                }, l.default.createElement("div", {
                    className: S["col-12"]
                }, l.default.createElement(N.default, {
                    id: 102
                }))), l.default.createElement("div", {
                    className: S.pageRow
                }, l.default.createElement("div", {
                    className: S["col-12"]
                }, l.default.createElement(N.default, {
                    id: 15838459
                }))), l.default.createElement("div", {
                    className: S.pageRow
                }, l.default.createElement("div", {
                    className: S["col-12"]
                }, l.default.createElement(N.default, {
                    id: 102314545
                }))), l.default.createElement("div", {
                    className: S.pageRow
                }, l.default.createElement("div", {
                    className: S["col-12"]
                }, l.default.createElement(s.default, {
                    data: p.default
                }))), l.default.createElement("div", {
                    className: S.pageRow
                }, l.default.createElement("div", {
                    className: S["col-4"]
                }, l.default.createElement(f.default, null)), l.default.createElement("div", {
                    className: S["col-8"]
                }, l.default.createElement(i.default, {
                    cards: v.default
                })))))))
            }
        }
    }
]);