(window.webpackJsonp = window.webpackJsonp || []).push([
    [109], {
        2602: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.VideoBreakerFeatured = void 0;
            var r = s(a(3)).default || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
                    }
                    return e
                },
                d = s(a(1)),
                i = s(a(0)),
                o = s(a(1998)),
                n = s(a(2834)),
                u = s(a(142)),
                l = s(a(776));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var f = a(2305),
                c = function(e) {
                    var t = e.data,
                        a = e.attributes,
                        i = e.dataId,
                        s = (t || {}).assets,
                        c = void 0 === s ? [] : s,
                        p = a || {},
                        m = p.numberOfPlaylistItems,
                        b = void 0 === m ? 3 : m,
                        v = p.numberOfSideBarItems,
                        h = void 0 === v ? 2 : v,
                        y = p.brand,
                        g = void 0 === y ? "cnbc" : y,
                        T = p.headerTitle,
                        w = void 0 === T ? "" : T,
                        k = p.isTwoColumn,
                        _ = void 0 !== k && k,
                        E = p.hasBackground,
                        V = void 0 !== E && E;
                    if (!c || !Array.isArray(c) || c.length < b + h) return null;
                    var I = c.slice(0, b),
                        C = c.slice(b, b + h),
                        M = I.map(function(e) {
                            var t = (e.promoImage || {}).url,
                                a = void 0 === t ? "" : t;
                            return r({}, e, {
                                title: e.title || "",
                                image: a,
                                time: e.duration || "",
                                url: e.url || ""
                            })
                        }),
                        R = C.map(function(e) {
                            var t = (e.promoImage || {}).url,
                                a = void 0 === t ? "" : t;
                            return r({}, e, {
                                title: e.title || "",
                                image: a,
                                time: e.duration || "",
                                url: e.url || "",
                                isPro: e.premium,
                                videoTime: "cnbcvideo" === e.type ? u.default.secondsToFormattedTime(e.duration) : "",
                                mediaType: "cnbcvideo" === e.type ? "video" : ""
                            })
                        }),
                        P = {
                            watchLive: {
                                title: "WATCH LIVE",
                                supportingText: "Watch our live broadcast or subscribe to CNBC PRO!",
                                image: l.default,
                                url: "http://www.cnbc.com/live-tv/"
                            },
                            videoTout: R
                        };
                    return _ ? d.default.createElement(n.default, {
                        header: w,
                        featuredVideo: M[0],
                        cards: R,
                        brand: g,
                        attributes: a,
                        dataId: i,
                        hasBackground: V
                    }) : d.default.createElement("div", {
                        className: f["col-full"],
                        id: i
                    }, d.default.createElement(o.default, {
                        playlistItems: M,
                        sidebarItems: P,
                        header: "CNBC TV",
                        inlineVideoComponent: !0,
                        dataId: i,
                        videoAttributes: a
                    }))
                };
            t.VideoBreakerFeatured = c, c.propTypes = {
                data: i.default.object.isRequired,
                attributes: i.default.object.isRequired,
                dataId: i.default.oneOfType([i.default.string, i.default.number]).isRequired
            }, t.default = c
        },
        2834: function(e, t, a) {
            "use strict";
            var r = o(a(5)),
                d = o(a(6)),
                i = "function" == typeof d.default && "symbol" == typeof r.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof d.default && e.constructor === d.default && e !== d.default.prototype ? "symbol" : typeof e
                };

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = E(a(3)),
                u = E(a(2)),
                l = E(a(7)),
                s = E(a(8)),
                f = E(a(9)),
                c = n.default || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
                    }
                    return e
                },
                p = function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, u.default)(e, r.key, r)
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t
                    }
                }(),
                m = E(a(1)),
                b = E(a(0)),
                v = a(12),
                h = E(a(277)),
                y = E(a(20)),
                g = E(a(37)),
                T = E(a(710)),
                w = E(a(144)),
                k = E(a(388)),
                _ = E(a(2e3));

            function E(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function V(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : i(t)) && "function" != typeof t ? e : t
            }
            var I = v.MAKE_IT,
                C = {};
            C[v.MAKE_IT] = a(2835);
            var M = function(e) {
                function t() {
                    var e, a, r;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var d = arguments.length, i = Array(d), o = 0; o < d; o++) i[o] = arguments[o];
                    return a = r = V(this, (e = t.__proto__ || (0, f.default)(t)).call.apply(e, [this].concat(i))), r.state = {
                        isSmallMobile: !1
                    }, V(r, a)
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : i(t)));
                    e.prototype = (0, s.default)(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (l.default ? (0, l.default)(e, t) : e.__proto__ = t)
                }(t, m.default.Component), p(t, [{
                    key: "componentDidMount",
                    value: function() {
                        y.default.on("resize", this.handleResize.bind(this), "debounce"), this.handleResize()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        y.default.remove("resize", this.handleResize, "debounce")
                    }
                }, {
                    key: "handleResize",
                    value: function() {
                        g.default.refreshValue(), g.default.isSmallMobile() && !this.state.isSmallMobile ? this.setState({
                            isSmallMobile: !0
                        }) : !g.default.isSmallMobile() && this.state.isSmallMobile && this.setState({
                            isSmallMobile: !1
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.header,
                            a = e.featuredVideo,
                            r = e.cards,
                            d = e.attributes,
                            i = e.brand,
                            o = e.dataId,
                            n = e.hasBackground,
                            u = i && C[i] ? C[i] : C[I],
                            l = {
                                slides: r,
                                breakerType: "featuredVideo"
                            },
                            s = c({}, d, {
                                endCard: "REC_OR_REPLAY",
                                showPlayerMetadata: !0,
                                autoPlay: !1
                            });
                        return m.default.createElement("section", {
                            className: u.container,
                            id: "FeaturedVideoTwoColumn"
                        }, n && m.default.createElement("span", {
                            className: u.background,
                            "aria-hidden": !0
                        }, m.default.createElement(w.default, {
                            type: "singleWave",
                            width: "500",
                            height: "500",
                            patternID: "collapsibleFeatureHeader"
                        })), m.default.createElement("div", {
                            className: u.mainWrapper
                        }, m.default.createElement(T.default, {
                            text: t,
                            brand: "makeit"
                        }), m.default.createElement("div", {
                            className: u.videoFeaturedWrapper
                        }, m.default.createElement("div", {
                            className: u.videoFeaturedTwoColumnLeft
                        }, m.default.createElement(h.default, {
                            isLive: !1,
                            isPackage: !1,
                            cardType: "featured-rectangle-media",
                            packageTitle: "",
                            brand: a.brand,
                            videoData: a,
                            inlineVideoPlayback: !0,
                            inlineVideoComponent: !0,
                            attributes: s,
                            isFeaturedBreakerVideo: !0,
                            id: "FeaturedVideoTwoColumn-featuredVideo-" + a.id,
                            dataId: "FeaturedVideoTwoColumn-featuredVideo-" + a.id
                        })), this.state.isSmallMobile ? m.default.createElement(_.default, {
                            data: l,
                            brand: i,
                            carouselType: "promoCarousel",
                            dataId: o
                        }) : m.default.createElement(k.default, {
                            colType: "video-featured",
                            cardTypes: ["featured-video-rectangle-media", "featured-video-rectangle-media"],
                            cards: r,
                            brand: i,
                            dataId: o,
                            inlineVideoPlayback: !1,
                            layoutType: "video-featured"
                        }))))
                    }
                }]), t
            }();
            M.propTypes = {
                header: b.default.string,
                featuredVideo: b.default.object.isRequired,
                cards: b.default.array.isRequired,
                brand: b.default.string,
                attributes: b.default.object,
                dataId: b.default.oneOfType([b.default.string, b.default.number]).isRequired,
                hasBackground: b.default.bool
            }, M.defaultProps = {
                header: "",
                featuredVideo: {},
                cards: [],
                brand: "makeit",
                attributes: {},
                dataId: "featuredVideoTwoColumn-fallback",
                hasBackground: !1
            }, t.default = M
        }
    }
]);