(window.webpackJsonp = window.webpackJsonp || []).push([
    [123], {
        2314: function(e, t, a) {
            "use strict";
            var r = i(a(5)),
                n = i(a(6)),
                l = "function" == typeof n.default && "symbol" == typeof r.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof n.default && e.constructor === n.default && e !== n.default.prototype ? "symbol" : typeof e
                };

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FeaturedBreaker = void 0;
            var u, o, s = N(a(2)),
                c = N(a(7)),
                d = N(a(8)),
                f = N(a(9)),
                m = function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, s.default)(e, r.key, r)
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t
                    }
                }(),
                p = N(a(1)),
                v = N(a(0)),
                h = N(a(105)),
                y = N(a(20)),
                g = N(a(143)),
                E = N(a(21)),
                S = a(114),
                k = N(a(19)),
                b = N(a(37)),
                w = N(a(106));

            function N(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function T(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : l(t)) && "function" != typeof t ? e : t
            }
            var A = a(2030),
                B = (o = u = function(e) {
                    function t() {
                        var e, a, r;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var n = arguments.length, l = Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                        return a = r = T(this, (e = t.__proto__ || (0, f.default)(t)).call.apply(e, [this].concat(l))), r.state = {
                            currentSlide: 0,
                            currentBreakpoint: ""
                        }, r.handleBreakpointChange = function() {
                            var e = b.default.current();
                            r.setState({
                                currentBreakpoint: e
                            })
                        }, r.ifArray = function(e) {
                            return Array.isArray(e)
                        }, r.slideToPrev = function() {
                            r.state.currentSlide > 0 && r.setState({
                                currentSlide: r.state.currentSlide - 1
                            })
                        }, r.slideToNext = function() {
                            var e = r.props.data;
                            if (e) {
                                var t = r.ifArray(e.assets) ? e.assets.length - 1 : 0;
                                r.state.currentSlide < t && r.setState({
                                    currentSlide: r.state.currentSlide + 1
                                })
                            }
                        }, r.slideRailStylesLeft = function() {
                            return {
                                transform: "translateX(-" + 100 * r.state.currentSlide + "%)"
                            }
                        }, r.slideRailStylesRight = function() {
                            var e = r.props.data;
                            if (e) {
                                var t = r.ifArray(e.assets) ? e.assets.length - 1 : 0;
                                return r.state.currentSlide === t ? {
                                    transform: "translateX(-" + 100 * (r.state.currentSlide + 1.1) + "%)"
                                } : {
                                    transform: "translateX(-" + 100 * (r.state.currentSlide + 1) + "%)"
                                }
                            }
                        }, r.setPrevArrowStyle = function() {
                            return 0 === r.state.currentSlide ? A.prevArrowInactive : A.prevArrow
                        }, r.setNextArrowStyle = function() {
                            var e = r.props.data;
                            if (e) {
                                var t = r.ifArray(e.assets) ? e.assets.length - 1 : 0;
                                return r.state.currentSlide >= t ? A.nextArrowInactive : A.nextArrow
                            }
                        }, r.sizeByBreakpoint = function() {
                            var e = void 0;
                            switch (r.state.currentBreakpoint) {
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
                        }, r.getEvent = function(e) {
                            return (e || []).filter(function(e) {
                                return "event" === (e || {}).type
                            })
                        }, r.convertDate = function(e) {
                            return (0, h.default)(e).format("MMM D, YYYY")
                        }, r.getItemTitle = function(e, t, a, r) {
                            return e ? p.default.createElement(k.default, {
                                to: e,
                                brand: r.brand,
                                assetType: r.type,
                                premium: r.premium,
                                sectionSubType: r.section && r.section.subType,
                                native: r.native
                            }, p.default.createElement("div", {
                                className: a
                            }, (0, S.truncateString)(t, 100))) : p.default.createElement("div", {
                                className: a
                            }, t)
                        }, r.getSlideTitle = function(e) {
                            return p.default.createElement("div", {
                                className: A.itemWrapper
                            }, e.linkHeadline && r.getItemTitle(e.url, e.linkHeadline, A.itemTitle, e), !e.linkHeadline && e.shorterHeadline && r.getItemTitle(e.url, e.shorterHeadline, A.itemTitle, e), !e.linkHeadline && !e.shorterHeadline && r.getItemTitle(e.url, e.title, A.itemTitle, e), e.author && e.sourceOrganization && r.getAuthorSource(e.sourceOrganization, e.author, e.creatorOverwrite, e))
                        }, r.getAuthorSource = function(e, t, a) {
                            if (e.length) {
                                if ("CNBC.com" !== e[0].name) return p.default.createElement("div", {
                                    className: A.itemAuthor
                                }, e[0].name);
                                if (t.length) {
                                    var r = t.map(function(e) {
                                        return e.name
                                    }).join(", ");
                                    return a ? (r = r + ", " + a, p.default.createElement("div", {
                                        className: A.itemAuthor
                                    }, r)) : p.default.createElement("div", {
                                        className: A.itemAuthor
                                    }, r)
                                }
                            }
                            if (t.length) {
                                var n = t.map(function(e) {
                                    return e.name
                                }).join(",");
                                return p.default.createElement("div", {
                                    className: A.itemAuthor
                                }, n)
                            }
                            if (a) return p.default.createElement("div", {
                                className: A.itemAuthor
                            }, a)
                        }, r.getBreakerTopSection = function(e) {
                            var t = e.logo,
                                a = e.url,
                                n = e.title,
                                l = e.displayShowTime,
                                i = e.showTime,
                                u = e.eventData,
                                o = e.type;
                            return p.default.createElement("div", null, p.default.createElement("div", {
                                className: A.heading
                            }, t && (a ? p.default.createElement("div", {
                                className: A.headingImage
                            }, p.default.createElement(k.default, {
                                to: a
                            }, p.default.createElement("img", {
                                src: t.url,
                                alt: t.title
                            }))) : p.default.createElement("div", {
                                className: A.headingImage
                            }, p.default.createElement("img", {
                                src: t.url,
                                alt: t.title
                            }))), !t && (a && "collection" !== o ? p.default.createElement("h3", {
                                className: A.headingText
                            }, p.default.createElement(k.default, {
                                className: A.headingLink,
                                to: a
                            }, n)) : p.default.createElement("h3", {
                                className: A.headingText
                            }, n)), l && i && p.default.createElement("time", {
                                className: A.airTime
                            }, i), 0 !== u.length && p.default.createElement("p", {
                                className: A.eventTime
                            }, p.default.createElement("time", null, r.convertDate(u[0].startDate)), " - ", u[0].location)), p.default.createElement("div", {
                                className: A.arrowContainer
                            }, p.default.createElement("button", {
                                className: r.setPrevArrowStyle(),
                                onClick: r.slideToPrev,
                                "aria-label": "previous-button"
                            }, p.default.createElement("span", {
                                className: "icon-arrow-left"
                            })), p.default.createElement("button", {
                                className: r.setNextArrowStyle(),
                                onClick: r.slideToNext,
                                "aria-label": "next-button"
                            }, p.default.createElement("span", {
                                className: "icon-arrow-right"
                            }))))
                        }, r.getBreakerSlides = function(e, t) {
                            return Array.isArray(e) && p.default.createElement("div", {
                                className: A.slideContainer
                            }, p.default.createElement("div", {
                                className: A.leftSlide
                            }, p.default.createElement("div", {
                                className: A.slideRail,
                                style: r.slideRailStylesLeft()
                            }, r.getSlides(e, t))), p.default.createElement("div", {
                                className: A.rightSlide
                            }, p.default.createElement("div", {
                                className: A.slideRail,
                                style: r.slideRailStylesRight()
                            }, r.getSlides(e, t))))
                        }, r.getSlides = function(e, t) {
                            return e.map(function(e, a) {
                                return p.default.createElement(w.default, null, p.default.createElement("div", {
                                    key: a,
                                    className: A.item,
                                    style: e.promoImage && {
                                        backgroundImage: "url(" + e.promoImage.url + "&w=" + r.sizeByBreakpoint() + "&h=" + Math.floor(r.sizeByBreakpoint() / 2) + ")"
                                    }
                                }, (-1 !== t.indexOf("show") || "video" === t) && p.default.createElement(g.default, {
                                    isFeatured: !0
                                }), r.getSlideTitle(e)))
                            })
                        }, T(r, a)
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : l(t)));
                        e.prototype = (0, d.default)(t && t.prototype, {
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
                            var r = this.getEvent(t.assets),
                                n = t.logo,
                                l = t.url,
                                i = t.title,
                                u = t.assets,
                                o = t.showTime,
                                s = t.subType,
                                c = t.type,
                                d = null != s && -1 !== s.indexOf("show");
                            return p.default.createElement("div", {
                                className: A.featuredBreaker,
                                id: a
                            }, p.default.createElement("div", {
                                className: A.wrapper
                            }, this.getBreakerTopSection({
                                logo: n,
                                url: l,
                                title: i,
                                displayShowTime: d,
                                showTime: o,
                                eventData: r,
                                type: c
                            }), this.getBreakerSlides(u, s)))
                        }
                    }]), t
                }(), u.propTypes = {
                    data: v.default.object.isRequired,
                    dataId: v.default.oneOfType([v.default.string, v.default.number]).isRequired
                }, o);
            t.FeaturedBreaker = B, t.default = B
        }
    }
]);