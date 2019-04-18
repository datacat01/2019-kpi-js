(window.webpackJsonp = window.webpackJsonp || []).push([
    [75, 116], {
        2465: function(e, t, n) {
            "use strict";
            var a = o(n(5)),
                r = o(n(6)),
                i = "function" == typeof r.default && "symbol" == typeof a.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
                };

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ThreeUpStack = void 0;
            var u = S(n(3)),
                s = S(n(2)),
                l = S(n(7)),
                d = S(n(8)),
                f = S(n(9)),
                c = u.default || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                },
                p = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, s.default)(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                h = n(1),
                b = S(h),
                y = S(n(0)),
                m = S(n(21)),
                v = S(n(376)),
                g = S(n(142)),
                w = S(n(2547));

            function S(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var T = n(2116),
                _ = function(e) {
                    function t() {
                        return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t),
                            function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" !== (void 0 === t ? "undefined" : i(t)) && "function" != typeof t ? e : t
                            }(this, (t.__proto__ || (0, f.default)(t)).apply(this, arguments))
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
                        }), t && (l.default ? (0, l.default)(e, t) : e.__proto__ = t)
                    }(t, h.Component), p(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.data,
                                n = e.attributes,
                                a = e.dataId,
                                r = n || {},
                                i = r.showBanner,
                                o = r.showBannerText,
                                u = r.shareThrough,
                                s = r.isLastModule;
                            if (!t || !Array.isArray(t.assets)) return b.default.createElement(m.default, {
                                data: {
                                    error: "ThreeUpStack query came back as null"
                                },
                                errorSource: "ThreeUpStack"
                            });
                            var l = t.assets.map(function(e) {
                                    var t = {
                                        id: e.id,
                                        title: e.headline,
                                        type: e.type,
                                        brand: e.brand,
                                        isLive: !1,
                                        isPro: Boolean(e.premium),
                                        image: (e.promoImage || {}).url,
                                        mediaType: "cnbcvideo" === e.type ? "video" : "",
                                        videoTime: g.default.secondsToFormattedTime(e.duration),
                                        formattedTimeStamp: e.dateLastPublishedSixHr,
                                        url: e.url,
                                        native: e.native || !1
                                    };
                                    return "webresource" === e.type ? t : c({}, t, {
                                        section: e.section,
                                        eyebrow: (e.section || {}).eyebrow || "",
                                        eyebrowUrl: (e.section || {}).url
                                    })
                                }),
                                d = null != n && null != n.displayThumbnailPreviews && n.displayThumbnailPreviews;
                            return u && l.length >= 2 && l.splice(2, 0, {}), !!l.length && b.default.createElement("div", {
                                id: a,
                                className: T.container
                            }, i && b.default.createElement(w.default, {
                                showBannerText: o,
                                sectionLabel: t.sectionLabel
                            }), b.default.createElement(v.default, {
                                brand: t.brand,
                                cards: l,
                                layoutType: s ? "three-up-stack-last" : "three-up-stack",
                                dataId: "ThreeUpStack-Layout-" + a,
                                hasShareThrough: u,
                                displayThumbnailPreviews: d
                            }))
                        }
                    }]), t
                }();
            _.defaultProps = {}, _.propTypes = {
                data: y.default.object.isRequired,
                dataId: y.default.oneOfType([y.default.string, y.default.number]).isRequired,
                attributes: y.default.object.isRequired
            }, t.ThreeUpStack = _, t.default = _
        },
        2547: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = i(n(1)),
                r = i(n(0));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = n(2115),
                u = function(e) {
                    var t = e.showBannerText,
                        n = e.sectionLabel;
                    return a.default.createElement("div", {
                        id: "ThreeUpStackBanner",
                        className: o.container
                    }, t && a.default.createElement("div", {
                        className: o.title
                    }, a.default.createElement("h2", null, "More in ", n)))
                };
            u.defaultProps = {
                showBannerText: !1,
                sectionLabel: ""
            }, u.propTypes = {
                showBannerText: r.default.bool,
                sectionLabel: r.default.string
            }, t.default = u
        },
        2610: function(e, t, n) {
            "use strict";
            var a = o(n(5)),
                r = o(n(6)),
                i = "function" == typeof r.default && "symbol" == typeof a.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
                };

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = S(n(2)),
                s = S(n(7)),
                l = S(n(8)),
                d = S(n(9)),
                f = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, u.default)(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                c = S(n(1)),
                p = S(n(0)),
                h = n(22),
                b = n(38),
                y = n(12),
                m = S(n(20)),
                v = S(n(37)),
                g = S(n(2465)),
                w = S(n(2851));

            function S(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var T = void 0,
                _ = {};
            _[y.CNBC] = n(2309), _[y.BUFFETT] = n(2852), _[y.DEAL_OR_NO_DEAL] = n(2853), _[y.MAKE_IT] = n(2854);
            var k = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (void 0 === t ? "undefined" : i(t)) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || (0, d.default)(t)).call(this, e));
                    return n.state = {
                        isSmallMobile: !0,
                        sixAssets: [],
                        page: 0
                    }, n.layoutCount = 1, n.visibilitySent = {}, n.handleLoadMoreClick = n.handleLoadMoreClick.bind(n), n.handleVisibilityChange = n.handleVisibilityChange.bind(n), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : i(t)));
                    e.prototype = (0, l.default)(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (s.default ? (0, s.default)(e, t) : e.__proto__ = t)
                }(t, c.default.Component), f(t, [{
                    key: "doQuery",
                    value: function() {
                        var e = this;
                        this.assetsReqeust = this.props.client.query({
                            query: w.default,
                            variables: {
                                id: this.props.source,
                                offset: this.nextOffSet()
                            }
                        }).then(function(t) {
                            console.log("*** Fetch dynamic threeup stack data: ", t), e.assetsReqeust = null;
                            var n = t.data.assetList;
                            e.setState(function(e) {
                                var t = n.assets.map(function(e, t) {
                                        return t % 6 == 0 ? n.assets.slice(t, t + 6) : null
                                    }).filter(function(e) {
                                        return e
                                    }),
                                    a = e.sixAssets.concat(t);
                                return {
                                    page: e.page + 1,
                                    sixAssets: a
                                }
                            })
                        }).catch(function() {
                            e.setState({
                                error: "There is an error to get assets data."
                            })
                        })
                    }
                }, {
                    key: "handleScroll",
                    value: function() {
                        var e = document.querySelector("body").clientHeight - window.pageYOffset;
                        this.layoutCount < 4 && (e < 1e3 || this.state.isSmallMobile && e < 1500) && this.doQuery()
                    }
                }, {
                    key: "handleResize",
                    value: function() {
                        v.default.refreshValue(), v.default.isSmallMobile() && !this.state.isSmallMobile ? this.setState({
                            isSmallMobile: !0
                        }) : !v.default.isSmallMobile() && this.state.isSmallMobile && this.setState({
                            isSmallMobile: !1
                        })
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        m.default.on("resize", this.handleResize.bind(this), "debounce"), this.handleResize(), this.props.isLazyLoad && m.default.on("scroll", this.handleScroll.bind(this), "throttle"), this.isTouch = "undefined" != typeof window && (!!("ontouchstart" in window) || window.navigator.msMaxTouchPoints > 0)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        m.default.remove("resize", this.handleResize, "debounce"), m.default.remove("scroll", this.handleScroll, "throttle")
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.loadMoreButton && this.loadMoreButton.blur()
                    }
                }, {
                    key: "handleLoadMoreClick",
                    value: function() {
                        var e = "DynamicThreeUpStackSection=" + this.state.sixAssets.length + "-" + this.props.dataId;
                        m.default.trigger("loadMore", {
                            dataId: e
                        }), this.doQuery()
                    }
                }, {
                    key: "handleVisibilityChange",
                    value: function(e, t) {
                        !this.visibilitySent[t] && e && (this.visibilitySent[t] = !0, m.default.trigger("impression", {
                            dataId: t
                        }))
                    }
                }, {
                    key: "nextOffSet",
                    value: function() {
                        var e = this.props.options.offset,
                            t = this.props.attributes.totalThreeUpStacks || 4;
                        return e + this.state.page * t * 6
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props.pageBrand || this.props.brand;
                        T = _[t] ? _[t] : _[y.CNBC];
                        var n = this.props.data.pagination.totalCount,
                            a = !(this.nextOffSet() > n),
                            r = c.default.createElement("button", {
                                onClick: this.handleLoadMoreClick,
                                className: this.isTouch ? T.touchButton : T.loadMore,
                                ref: function(t) {
                                    e.loadMoreButton = t
                                }
                            }, "Load More ", c.default.createElement("span", {
                                className: "icon-arrow-down-readmore"
                            }));
                        return c.default.createElement("div", {
                            id: this.props.dataId,
                            className: T.container
                        }, this.state.sixAssets.map(function(t, n) {
                            var a = e.props.data,
                                r = {
                                    sectionLabel: a.sectionLabel,
                                    assets: t,
                                    brand: a.brand
                                };
                            return c.default.createElement(g.default, {
                                data: r,
                                dataId: "ThreeUpStack-" + (e.props.dataCounter + n),
                                key: "ThreeUpStack-" + (e.props.dataCounter + n),
                                attributes: e.props.attributes
                            })
                        }), a && r)
                    }
                }]), t
            }();
            k.propTypes = {
                data: p.default.object.isRequired,
                options: p.default.object.isRequired,
                source: p.default.string.isRequired,
                dataCounter: p.default.number.isRequired,
                dataId: p.default.oneOfType([p.default.string, p.default.number]).isRequired,
                attributes: p.default.object,
                pageBrand: p.default.string,
                brand: p.default.string,
                isLazyLoad: p.default.bool,
                client: p.default.object
            }, k.defaultProps = {
                pageBrand: y.CNBC,
                brand: y.CNBC,
                attributes: {},
                isLazyLoad: !1,
                client: {}
            };
            var L = (0, b.withApollo)(k);
            t.default = (0, h.connect)(function(e) {
                return {
                    pageBrand: (e.page.page || {}).brand
                }
            })(L)
        },
        2851: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a, r, i = s(n(16)),
                o = s(n(17)),
                u = (a = ["\n  query getAssetList($id: Int!, $offset: Int!) {\n    assetList(id: $id, offset: $offset, pageSize: 24) {\n      pagination {\n        totalCount,\n          page,\n          pageSize\n      }\n      sectionLabel\n      brand\n      id\n      assets {\n        id\n        brand\n        type\n        url\n        native\n        datePublished\n        title\n        headline\n        premium\n        section {\n          eyebrow\n          type\n          url\n          subType\n        }\n        dateLastPublishedSixHr\n        promoImage {\n          id\n          url\n        }\n      }\n    }\n  }\n"], r = ["\n  query getAssetList($id: Int!, $offset: Int!) {\n    assetList(id: $id, offset: $offset, pageSize: 24) {\n      pagination {\n        totalCount,\n          page,\n          pageSize\n      }\n      sectionLabel\n      brand\n      id\n      assets {\n        id\n        brand\n        type\n        url\n        native\n        datePublished\n        title\n        headline\n        premium\n        section {\n          eyebrow\n          type\n          url\n          subType\n        }\n        dateLastPublishedSixHr\n        promoImage {\n          id\n          url\n        }\n      }\n    }\n  }\n"], (0, o.default)((0, i.default)(a, {
                    raw: {
                        value: (0, o.default)(r)
                    }
                })));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = (0, s(n(18)).default)(u);
            t.default = l
        }
    }
]);