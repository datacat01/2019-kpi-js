(window.webpackJsonp = window.webpackJsonp || []).push([
    [23, 123], {
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
            var s, o, u = T(a(2)),
                c = T(a(7)),
                d = T(a(8)),
                m = T(a(9)),
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
                p = T(a(1)),
                h = T(a(0)),
                g = T(a(105)),
                y = T(a(20)),
                v = T(a(143)),
                E = T(a(21)),
                w = a(114),
                b = T(a(19)),
                k = T(a(37)),
                N = T(a(106));

            function T(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function S(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : n(t)) && "function" != typeof t ? e : t
            }
            var M = a(2030),
                _ = (o = s = function(e) {
                    function t() {
                        var e, a, l;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                        return a = l = S(this, (e = t.__proto__ || (0, m.default)(t)).call.apply(e, [this].concat(n))), l.state = {
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
                            return (0, g.default)(e).format("MMM D, YYYY")
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
                            }, p.default.createElement(b.default, {
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
                            }, p.default.createElement(b.default, {
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
                                return p.default.createElement(N.default, null, p.default.createElement("div", {
                                    key: a,
                                    className: M.item,
                                    style: e.promoImage && {
                                        backgroundImage: "url(" + e.promoImage.url + "&w=" + l.sizeByBreakpoint() + "&h=" + Math.floor(l.sizeByBreakpoint() / 2) + ")"
                                    }
                                }, (-1 !== t.indexOf("show") || "video" === t) && p.default.createElement(v.default, {
                                    isFeatured: !0
                                }), l.getSlideTitle(e)))
                            })
                        }, S(l, a)
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : n(t)));
                        e.prototype = (0, d.default)(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (c.default ? (0, c.default)(e, t) : e.__proto__ = t)
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
                            if (!t) return p.default.createElement(E.default, {
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
                                c = t.type,
                                d = null != u && -1 !== u.indexOf("show");
                            return p.default.createElement("div", {
                                className: M.featuredBreaker,
                                id: a
                            }, p.default.createElement("div", {
                                className: M.wrapper
                            }, this.getBreakerTopSection({
                                logo: r,
                                url: n,
                                title: i,
                                displayShowTime: d,
                                showTime: o,
                                eventData: l,
                                type: c
                            }), this.getBreakerSlides(s, u)))
                        }
                    }]), t
                }(), s.propTypes = {
                    data: h.default.object.isRequired,
                    dataId: h.default.oneOfType([h.default.string, h.default.number]).isRequired
                }, o);
            t.FeaturedBreaker = _, t.default = _
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
            var s = h(a(2)),
                o = h(a(7)),
                u = h(a(8)),
                c = h(a(9)),
                d = function() {
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
                f = h(m),
                p = h(a(0));

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function g(e, t) {
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
                        return a = l = g(this, (e = t.__proto__ || (0, c.default)(t)).call.apply(e, [this].concat(n))), l.state = {
                            error: !1
                        }, l.handleImageError = function() {
                            return l.setState({
                                error: !0
                            })
                        }, g(l, a)
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
                    }(t, m.Component), d(t, [{
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
                c = function(e) {
                    var t = e.data,
                        a = e.dataId,
                        r = e.showEyeBrow,
                        o = e.truncate,
                        c = e.isProUser,
                        d = t.main.cards[0],
                        m = t.main.cards.slice(1),
                        f = t.isTwoUp,
                        p = t.main.taxonomyLink || "",
                        h = t.deck.taxonomyLink || "",
                        g = m.length > 1 && !f;
                    return l.default.createElement("section", {
                        className: u.container
                    }, l.default.createElement(i.default, {
                        leadItem: d,
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
                        smallerDeck: g,
                        taxonomyLink: h,
                        truncate: o
                    }), !c && l.default.createElement(n.default, {
                        dataId: "BoxInline-" + a,
                        className: u.adContainer
                    }))
                };
            c.propTypes = {
                data: r.default.object,
                dataId: r.default.string.isRequired,
                truncate: r.default.object.isRequired,
                showEyeBrow: r.default.bool,
                isProUser: r.default.bool.isRequired
            }, c.defaultProps = {
                data: {},
                showEyeBrow: !1
            }, t.default = c
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
            var c = a(2035),
                d = function(e) {
                    var t = e.leadItem,
                        a = e.title,
                        r = e.hasPackage,
                        u = e.packageItems,
                        d = e.isTwoUp,
                        m = e.taxonomyLink,
                        f = e.showEyeBrow,
                        p = e.truncate,
                        h = l.default.createElement("a", {
                            href: m,
                            className: c.eyebrow,
                            title: a
                        }, a),
                        g = l.default.createElement("span", {
                            className: c.proSmall
                        }, l.default.createElement("span", {
                            className: "icon-probug"
                        })),
                        y = l.default.createElement("p", {
                            className: c.description
                        }, t.description),
                        v = void 0;
                    v = d ? c.twoUpContainer : r ? c.containerWithPackage : c.container;
                    var E = t.imageUrl ? t.imageUrl.includes("?") ? "&" : "?" : "";
                    return l.default.createElement("div", {
                        className: v
                    }, l.default.createElement("div", {
                        className: c.imageMask
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
                        url: "" + t.imageUrl + E,
                        className: c.image,
                        alt: t.title
                    }) : null), l.default.createElement("div", {
                        className: r ? c.contentWithPackage : c.content,
                        id: "LeadStory-HeroModule"
                    }, f ? l.default.createElement("div", {
                        className: c.eyebrowDiv
                    }, t.premium ? g : null, a ? h : null) : null, l.default.createElement("h2", {
                        className: c.title
                    }, l.default.createElement(s.default, {
                        to: t.link,
                        title: t.title
                    }, (0, o.truncateString)(t.title, p.leadElement || 100))), !r && f ? y : null, r && f ? l.default.createElement(n.default, {
                        cards: u,
                        isTwoUp: d
                    }) : null))
                };
            d.propTypes = {
                leadItem: r.default.object.isRequired,
                truncate: r.default.object.isRequired,
                title: r.default.string,
                hasPackage: r.default.bool,
                packageItems: r.default.array,
                isTwoUp: r.default.bool,
                taxonomyLink: r.default.string,
                showEyeBrow: r.default.bool
            }, d.defaultProps = {
                title: "",
                hasPackage: !1,
                packageItems: [],
                isTwoUp: !1,
                taxonomyLink: "",
                showEyeBrow: !1
            }, t.default = d
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
                c = function(e) {
                    var t = e.cards,
                        a = e.title,
                        r = e.isTwoUp,
                        o = e.smallerDeck,
                        c = e.taxonomyLink,
                        d = e.truncate,
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
                            to: c,
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
                        h = m.map(function(e, t) {
                            return l.default.createElement("li", {
                                className: r ? u.twoUpStory : u.story,
                                key: t
                            }, l.default.createElement("div", {
                                className: e.premium ? u.pro : "",
                                id: "TopStory-HeroModule-" + t
                            }, e.premium ? p : null, l.default.createElement(i.default, {
                                to: e.link,
                                title: e.title
                            }, (0, s.truncateString)(e.title || "", e.premium ? d.deckPremiumElement || 100 : d.deckOtherElement || 100))))
                        });
                    return l.default.createElement("div", {
                        className: o ? u.smallerContainer : u.container
                    }, l.default.createElement("div", {
                        className: r ? u.twoUpStories : u.stories
                    }, r ? f : void 0, l.default.createElement("ul", null, t ? h : void 0)))
                };
            c.propTypes = {
                cards: r.default.array.isRequired,
                isTwoUp: r.default.bool,
                title: r.default.string,
                smallerDeck: r.default.bool,
                truncate: r.default.object.isRequired,
                taxonomyLink: r.default.string
            }, c.defaultProps = {
                title: "",
                isTwoUp: !1,
                smallerDeck: !1,
                taxonomyLink: ""
            }, t.default = c
        },
        2345: function(e, t, a) {
            e.exports = a.p + "6480138aaaad669fae1ce7d8e681981e.jpg"
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
        2470: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = s(a(2318)),
                r = s(a(2319)),
                n = s(a(2320)),
                i = s(a(2321));

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
                    image: i.default,
                    href: "/show"
                }, {
                    title: "Power Lunch",
                    time: "Weekdays 6:00AM ET",
                    image: n.default,
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
                    image: i.default,
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
        807: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = U(a(1)),
                r = a(693),
                n = U(a(1994)),
                i = U(a(1992)),
                s = U(a(2e3)),
                o = a(2314),
                u = a(2479),
                c = U(a(376)),
                d = U(a(2341)),
                m = U(a(1990)),
                f = U(a(692)),
                p = U(a(1989)),
                h = U(a(1991)),
                g = U(a(2471)),
                y = U(a(2470)),
                v = U(a(2412)),
                E = U(a(2420)),
                w = U(a(2001)),
                b = a(1997),
                k = a(2004),
                N = U(k),
                T = U(a(2018)),
                S = U(a(1998)),
                M = U(a(2002)),
                _ = a(2003),
                R = a(478);

            function U(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var I = a(1993);
            t.default = function() {
                return l.default.createElement(p.default, null, l.default.createElement(r.BaseMeta, {
                    key: "BaseMeta",
                    data: {
                        page: {
                            title: "Landing Business"
                        }
                    }
                }), l.default.createElement("div", {
                    className: I.page
                }, l.default.createElement("div", {
                    className: I.pageGrid
                }, l.default.createElement("div", {
                    className: I.pageWrapper
                }, l.default.createElement(b.MarketsBanner, {
                    selectedMarketBanner: N.default.selectedMarket,
                    marketData: N.default.marketData,
                    isFetching: !1,
                    lastUpdated: N.default.lastUpdated,
                    dispatch: function() {},
                    pollRate: 15e4,
                    parent: "MarketBanner",
                    data: N.default.data,
                    ad: k.marketBannerAd
                }), l.default.createElement("div", {
                    className: I.pageRow
                }, l.default.createElement("div", {
                    className: I["col-12"]
                }, l.default.createElement(n.default, {
                    landing: !0
                }))), l.default.createElement("div", {
                    className: I.pageRow
                }, l.default.createElement("div", {
                    className: I["col-12"]
                }, l.default.createElement(m.default, {
                    title: "Business News",
                    subNavLinks: T.default.subNavLinks
                }))), l.default.createElement("div", {
                    className: I.pageRow
                }, l.default.createElement("div", {
                    className: I["col-12"]
                }, l.default.createElement(d.default, {
                    data: E.default
                }))), l.default.createElement("div", {
                    className: I.pageRow
                }, l.default.createElement("div", {
                    className: I["col-8"]
                }, l.default.createElement(c.default, {
                    cards: R.dualLeadCardMocks,
                    layoutType: "dual-lead"
                })), l.default.createElement("div", {
                    className: I["col-4"]
                }, l.default.createElement(h.default, null))), l.default.createElement("div", {
                    className: I.pageRow
                }, l.default.createElement("div", {
                    className: I["col-12"]
                }, l.default.createElement(S.default, {
                    playlistItems: M.default,
                    sidebarItems: _.videoSidebarMock,
                    header: "Business News Video",
                    isSmall: !0
                }))), l.default.createElement("div", {
                    className: I.pageRow
                }, l.default.createElement("div", {
                    className: I["col-4"]
                }, l.default.createElement(h.default, null)), l.default.createElement("div", {
                    className: I["col-8"]
                }, l.default.createElement(f.default, {
                    title: "Economy"
                }, l.default.createElement(c.default, {
                    cards: R.dualLeadCardMocks,
                    layoutType: "mini-hero"
                }), l.default.createElement(c.default, {
                    cards: R.twoUpCardMocks,
                    layoutType: "two-up"
                })), l.default.createElement("div", {
                    style: {
                        height: "30px"
                    }
                }), l.default.createElement(f.default, {
                    title: "Finance"
                }, l.default.createElement(c.default, {
                    cards: R.threeUpCardMocks,
                    layoutType: "three-up"
                })))), l.default.createElement("div", {
                    className: I.pageRow
                }, l.default.createElement("div", {
                    className: I["col-12"]
                }, l.default.createElement(s.default, {
                    data: v.default
                }))), l.default.createElement("div", {
                    className: I.pageRow
                }, l.default.createElement("div", {
                    className: I["col-8"]
                }, l.default.createElement("div", {
                    style: {
                        height: "30px"
                    }
                }), l.default.createElement(f.default, {
                    title: "Real Estate",
                    titleColor: "#002d6d"
                }, l.default.createElement(c.default, {
                    cards: R.miniHeroCardMocks,
                    layoutType: "mini-hero"
                }))), l.default.createElement("div", {
                    className: I["col-4"]
                }, l.default.createElement(h.default, null))), l.default.createElement("div", {
                    className: I.pageRow
                }, l.default.createElement("div", {
                    className: I["col-12"]
                }, l.default.createElement(s.default, {
                    data: y.default
                }))), l.default.createElement("div", {
                    className: I.pageRow
                }, l.default.createElement("div", {
                    className: I["col-4"]
                }, l.default.createElement(h.default, null)), l.default.createElement("div", {
                    className: I["col-8"]
                }, l.default.createElement(f.default, {
                    title: "Energy"
                }, l.default.createElement(c.default, {
                    cards: R.threeUpCardMocks,
                    layoutType: "three-up"
                })), l.default.createElement("div", {
                    style: {
                        height: "30px"
                    }
                }), l.default.createElement(f.default, {
                    title: "Entertainment"
                }, l.default.createElement(c.default, {
                    cards: R.miniHeroPackageCardMocks,
                    layoutType: "mini-hero",
                    hasPackage: "right",
                    packageTitle: "package title"
                }), l.default.createElement("div", {
                    style: {
                        height: "30px"
                    }
                }), l.default.createElement(c.default, {
                    cards: R.twoUpCardMocks,
                    layoutType: "two-up"
                })))), l.default.createElement("div", {
                    className: I.pageRow
                }, l.default.createElement("div", {
                    className: I["col-12"]
                }, l.default.createElement(s.default, {
                    data: g.default
                }))), l.default.createElement("div", {
                    className: I.pageRow
                }, l.default.createElement("div", {
                    className: I["col-12"]
                }, l.default.createElement(o.FeaturedBreaker, {
                    data: u.breakerData
                }))), l.default.createElement("div", {
                    className: I.pageRow
                }, l.default.createElement("div", {
                    className: I["col-8"]
                }, l.default.createElement(i.default, {
                    cards: w.default
                })), l.default.createElement("div", {
                    className: I["col-4"]
                }, l.default.createElement(h.default, null)))))))
            }
        }
    }
]);