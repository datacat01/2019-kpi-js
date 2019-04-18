(window.webpackJsonp = window.webpackJsonp || []).push([
    [116], {
        2465: function(e, t, r) {
            "use strict";
            var a = u(r(5)),
                n = u(r(6)),
                o = "function" == typeof n.default && "symbol" == typeof a.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof n.default && e.constructor === n.default && e !== n.default.prototype ? "symbol" : typeof e
                };

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ThreeUpStack = void 0;
            var i = _(r(3)),
                l = _(r(2)),
                s = _(r(7)),
                d = _(r(8)),
                c = _(r(9)),
                f = i.default || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                },
                p = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var a = t[r];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, l.default)(e, a.key, a)
                        }
                    }
                    return function(t, r, a) {
                        return r && e(t.prototype, r), a && e(t, a), t
                    }
                }(),
                h = r(1),
                b = _(h),
                y = _(r(0)),
                m = _(r(21)),
                v = _(r(376)),
                w = _(r(142)),
                T = _(r(2547));

            function _(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var k = r(2116),
                g = function(e) {
                    function t() {
                        return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t),
                            function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" !== (void 0 === t ? "undefined" : o(t)) && "function" != typeof t ? e : t
                            }(this, (t.__proto__ || (0, c.default)(t)).apply(this, arguments))
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : o(t)));
                        e.prototype = (0, d.default)(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (s.default ? (0, s.default)(e, t) : e.__proto__ = t)
                    }(t, h.Component), p(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.data,
                                r = e.attributes,
                                a = e.dataId,
                                n = r || {},
                                o = n.showBanner,
                                u = n.showBannerText,
                                i = n.shareThrough,
                                l = n.isLastModule;
                            if (!t || !Array.isArray(t.assets)) return b.default.createElement(m.default, {
                                data: {
                                    error: "ThreeUpStack query came back as null"
                                },
                                errorSource: "ThreeUpStack"
                            });
                            var s = t.assets.map(function(e) {
                                    var t = {
                                        id: e.id,
                                        title: e.headline,
                                        type: e.type,
                                        brand: e.brand,
                                        isLive: !1,
                                        isPro: Boolean(e.premium),
                                        image: (e.promoImage || {}).url,
                                        mediaType: "cnbcvideo" === e.type ? "video" : "",
                                        videoTime: w.default.secondsToFormattedTime(e.duration),
                                        formattedTimeStamp: e.dateLastPublishedSixHr,
                                        url: e.url,
                                        native: e.native || !1
                                    };
                                    return "webresource" === e.type ? t : f({}, t, {
                                        section: e.section,
                                        eyebrow: (e.section || {}).eyebrow || "",
                                        eyebrowUrl: (e.section || {}).url
                                    })
                                }),
                                d = null != r && null != r.displayThumbnailPreviews && r.displayThumbnailPreviews;
                            return i && s.length >= 2 && s.splice(2, 0, {}), !!s.length && b.default.createElement("div", {
                                id: a,
                                className: k.container
                            }, o && b.default.createElement(T.default, {
                                showBannerText: u,
                                sectionLabel: t.sectionLabel
                            }), b.default.createElement(v.default, {
                                brand: t.brand,
                                cards: s,
                                layoutType: l ? "three-up-stack-last" : "three-up-stack",
                                dataId: "ThreeUpStack-Layout-" + a,
                                hasShareThrough: i,
                                displayThumbnailPreviews: d
                            }))
                        }
                    }]), t
                }();
            g.defaultProps = {}, g.propTypes = {
                data: y.default.object.isRequired,
                dataId: y.default.oneOfType([y.default.string, y.default.number]).isRequired,
                attributes: y.default.object.isRequired
            }, t.ThreeUpStack = g, t.default = g
        },
        2547: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = o(r(1)),
                n = o(r(0));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = r(2115),
                i = function(e) {
                    var t = e.showBannerText,
                        r = e.sectionLabel;
                    return a.default.createElement("div", {
                        id: "ThreeUpStackBanner",
                        className: u.container
                    }, t && a.default.createElement("div", {
                        className: u.title
                    }, a.default.createElement("h2", null, "More in ", r)))
                };
            i.defaultProps = {
                showBannerText: !1,
                sectionLabel: ""
            }, i.propTypes = {
                showBannerText: n.default.bool,
                sectionLabel: n.default.string
            }, t.default = i
        }
    }
]);