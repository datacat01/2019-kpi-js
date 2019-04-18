(window.webpackJsonp = window.webpackJsonp || []).push([
    [96], {
        2340: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = s(a(1)),
                i = s(a(0)),
                r = s(a(19)),
                l = a(12);

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = {};
            d[l.CNBC] = a(2033), d[l.MAKE_IT] = a(2455);
            var o = function(e) {
                var t = e.brand,
                    a = e.stories,
                    i = d[t] || d[l.CNBC],
                    s = a.map(function(e, t) {
                        var a = e.url,
                            l = e.title,
                            s = e.fallbackTitle,
                            d = e.assetType,
                            o = e.premium;
                        return n.default.createElement("li", {
                            key: t,
                            className: i.storyItem
                        }, n.default.createElement("div", {
                            className: i.number
                        }, t + 1), n.default.createElement(r.default, {
                            to: a || "#",
                            assetType: d,
                            premium: o,
                            className: i.title
                        }, l || s))
                    });
                return n.default.createElement("div", {
                    className: i.container
                }, n.default.createElement("div", {
                    className: i.divider
                }), n.default.createElement("h1", {
                    className: i.heading
                }, "Trending Now"), n.default.createElement("ul", {
                    className: i.storyContainer
                }, s))
            };
            o.propTypes = {
                brand: i.default.string.isRequired,
                stories: i.default.array.isRequired
            }, t.default = o
        },
        2600: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TrendingNowBreaker = void 0;
            var n = d(a(1)),
                i = d(a(0)),
                r = a(12),
                l = d(a(2340)),
                s = d(a(2832));

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = void 0,
                c = r.CNBC,
                u = {};
            u[r.CNBC] = a(2303), u[r.MAKE_IT] = a(2833);
            var m = function(e) {
                var t = e.data,
                    a = e.dataId,
                    i = t || {},
                    r = i.assets,
                    s = i.brand;
                if (o = u[s] || u[c], !r || !Array.isArray(r) || !r.length) return null;
                var d = r.map(function(e) {
                    return {
                        title: e.linkHeadline,
                        url: e.url,
                        fallbackTitle: e.title
                    }
                });
                return n.default.createElement("div", {
                    className: o.pageRow,
                    id: a
                }, n.default.createElement("div", {
                    className: o["col-12"]
                }, n.default.createElement(l.default, {
                    stories: d,
                    brand: s || e.brand
                })))
            };
            m.propTypes = {
                data: i.default.object,
                dataId: i.default.oneOfType([i.default.string, i.default.number]).isRequired,
                brand: i.default.string
            }, m.defaultProps = {
                data: s.default,
                dataId: 0,
                brand: c
            }, t.TrendingNowBreaker = m, t.default = m
        },
        2832: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = {
                assets: [{
                    title: "Morgan Stanley chief says bitcoin 'doesn't quite deserve the attention it's getting'",
                    linkHeadline: "this is coming from mock linkHeadline 1",
                    url: "https://qa-aws01web.cnbc.com/2017/11/15/morgan-stanley-chairman-james-gorman-cryptocurrencies.html"
                }, {
                    title: "CFPB director Richard Cordray to step down at the end of November",
                    linkHeadline: "this is coming from mock linkHeadline 2",
                    url: "http://qa-aws01web.cnbc.com/2017/11/15/cfpb-director-richard-cordray-to-step-down-at-the-end-of-november.html"
                }, {
                    title: "American Express, Santander team up with Ripple for cross-border payments via blockchain",
                    linkHeadline: "this is coming from mock linkHeadline 3",
                    url: "/2017/11/16/american-express-santander-team-up-with-ripple-on-blockchain-platform.html"
                }, {
                    title: "Pursuits: Tasting Victorian London, One Eel at a Time",
                    linkHeadline: "this is coming from mock linkHeadline 4",
                    url: "https://qa-aws01make-it.cnbc.com/2017/11/16/new-york-times-digital-pursuits-tasting-victorian-london-one-eel-at-a-time.html"
                }, {
                    title: "John Malone says Disney-Fox deal makes sense and benefits both sides",
                    linkHeadline: "this is coming from mock linkHeadline 5",
                    url: "https://qa-aws01web.cnbc.com/2017/11/16/john-malone-says-disney-fox-deal-makes-sense-and-benefits-both-sides.html"
                }]
            }
        }
    }
]);