(window.webpackJsonp = window.webpackJsonp || []).push([
    [143], {
        2599: function(e, t, a) {
            "use strict";
            var n = l(a(5)),
                i = l(a(6)),
                r = "function" == typeof i.default && "symbol" == typeof n.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : typeof e
                };

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TwoColumnImageDense = void 0;
            var o = g(a(2)),
                u = g(a(7)),
                d = g(a(8)),
                s = g(a(9)),
                f = function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), (0, o.default)(e, n.key, n)
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t
                    }
                }(),
                c = g(a(1)),
                p = g(a(0)),
                m = g(a(376)),
                b = g(a(692)),
                h = a(114),
                v = g(a(37)),
                y = g(a(20));

            function g(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function w(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : r(t)) && "function" != typeof t ? e : t
            }
            var k = a(2302),
                T = function(e) {
                    function t() {
                        var e, a, n;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var i = arguments.length, r = Array(i), l = 0; l < i; l++) r[l] = arguments[l];
                        return a = n = w(this, (e = t.__proto__ || (0, s.default)(t)).call.apply(e, [this].concat(r))), n.state = {
                            isSmallMobile: !1
                        }, n.handleBreakpointChange = function() {
                            v.default.refreshValue(), n.setState({
                                isSmallMobile: v.default.isSmallMobile()
                            }), n.forceUpdate()
                        }, w(n, a)
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : r(t)));
                        e.prototype = (0, d.default)(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (u.default ? (0, u.default)(e, t) : e.__proto__ = t)
                    }(t, c.default.Component), f(t, [{
                        key: "componentDidMount",
                        value: function() {
                            y.default.on("breakpointChange", this.handleBreakpointChange), v.default.monitorBreakpoints(), this.state.isSmallMobile !== v.default.isSmallMobile() && this.handleBreakpointChange()
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
                                t = e.pageBrand,
                                a = e.data,
                                n = e.dataId,
                                i = e.template,
                                r = e.displayThumbnailPreviews,
                                l = e.truncate,
                                o = void 0 === l ? {} : l,
                                u = a || {},
                                d = u.assets,
                                s = void 0 === d ? [] : d,
                                f = u.eyebrow,
                                p = void 0 === f ? "" : f;
                            if (!s || !Array.isArray(s) || !s.length) return null;
                            var v = s.reduce(function(e, a, n) {
                                    var i = a.url,
                                        r = void 0 === i ? "" : i,
                                        l = a.type,
                                        u = void 0 === l ? "" : l,
                                        d = a.linkHeadline,
                                        s = void 0 === d ? "" : d,
                                        f = a.premium,
                                        c = void 0 === f ? "" : f,
                                        p = a.promoImage,
                                        m = a.author,
                                        b = void 0 === m ? [] : m,
                                        v = a.id,
                                        y = void 0 === v ? 0 : v,
                                        g = a.section,
                                        w = a.creatorOverwrite,
                                        k = void 0 === w ? "" : w,
                                        T = a.sourceOrganization,
                                        _ = void 0 === T ? [] : T,
                                        S = a.datePublished,
                                        C = void 0 === S ? "" : S,
                                        E = a.dateLastPublishedSixHr,
                                        P = a.native,
                                        M = void 0 !== P && P,
                                        B = a.title,
                                        I = void 0 === B ? "" : B,
                                        L = (p || {}).url,
                                        R = void 0 === L ? "" : L,
                                        A = b && b.length > 0 ? b[0].name : "",
                                        q = b && b.length > 0 ? b[0].url : "",
                                        D = A,
                                        H = q;
                                    if (Array.isArray(_) && _.length) {
                                        var j = _.find(function(e) {
                                            return (e.name || "").includes("CNBC")
                                        });
                                        D = j ? k || A : _[0].name, H = j ? q || "#" : _[0].url
                                    }
                                    var x = {
                                        title: I = (0, h.truncateString)(s || I, 1 === n ? o.firstElement || 100 : o.otherElements || 100),
                                        isLive: !1,
                                        type: u,
                                        isPro: c,
                                        image: R,
                                        id: y,
                                        url: r || "#",
                                        byline: D || "",
                                        bylineUrl: H || "",
                                        timestamp: C,
                                        formattedTimeStamp: E,
                                        brand: t,
                                        imageDense: !0,
                                        section: g,
                                        native: M
                                    };
                                    return e.cards.push(x), e
                                }, {
                                    cards: []
                                }),
                                y = "homepage" === i,
                                g = "homepage" === i || "Home Page International" === i,
                                w = "Section" === i;
                            return c.default.createElement("div", {
                                className: k.pageRow + " " + k.imageDense,
                                id: n
                            }, c.default.createElement(b.default, {
                                title: p,
                                titleLink: a.url || "#",
                                dataId: "SectionWrapper-" + n,
                                hasLogoAd: y,
                                brand: t,
                                isHomepage: g,
                                noHeader: w
                            }, this.state.isSmallMobile ? c.default.createElement(m.default, {
                                brand: t,
                                cards: v.cards,
                                layoutType: "image-dense-mod-mobile",
                                flexibleLabels: [null]
                            }) : c.default.createElement("div", null, c.default.createElement(m.default, {
                                brand: t,
                                cards: v.cards.slice(0, 2),
                                layoutType: "image-dense-mod",
                                flexibleLabels: [null],
                                displayThumbnailPreviews: r
                            }), c.default.createElement(m.default, {
                                brand: t,
                                cards: v.cards.slice(2, 5),
                                layoutType: "ultra-dense-three-up",
                                dataId: "Layout-2",
                                displayThumbnailPreviews: r
                            }))))
                        }
                    }]), t
                }();
            t.TwoColumnImageDense = T, T.propTypes = {
                pageBrand: p.default.string.isRequired,
                data: p.default.object.isRequired,
                dataId: p.default.oneOfType([p.default.string, p.default.number]).isRequired,
                template: p.default.string.isRequired,
                truncate: p.default.object.isRequired,
                displayThumbnailPreviews: p.default.bool
            }, T.defaultProps = {
                displayThumbnailPreviews: !1
            }, t.default = T
        }
    }
]);