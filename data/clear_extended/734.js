(window.webpackJsonp = window.webpackJsonp || []).push([
    [68, 93], {
        2338: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MarketsModule = void 0;
            var l = f(a(1)),
                r = f(a(0)),
                n = f(a(2346)),
                i = f(a(694)),
                u = f(a(382)),
                o = f(a(19)),
                s = f(a(15)),
                d = f(a(700)),
                c = f(a(2347));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var m = s.default.getProperties().CNBC_BASE,
                p = a(2039),
                y = t.MarketsModule = function(e) {
                    var t = e.data,
                        a = e.pollRate,
                        r = e.dataId,
                        s = e.hasHeader;
                    if (!t) return null;
                    var f = Array.isArray(t.relatedContent) && t.relatedContent.length && t.relatedContent[0];
                    return l.default.createElement("section", {
                        className: p.container,
                        id: "HP-MarketsModule"
                    }, l.default.createElement("section", {
                        className: p.top
                    }, s && l.default.createElement("div", {
                        className: p.title
                    }, l.default.createElement("h2", null, l.default.createElement(o.default, {
                        to: m + "/us-market-movers/"
                    }, "Markets")), l.default.createElement(u.default, {
                        id: "SponsorLogo-" + r,
                        target: "module=MarketsModule"
                    })), l.default.createElement(d.default, {
                        data: f
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
            y.defaultProps = {
                hasHeader: !1
            }, y.propTypes = {
                data: r.default.object.isRequired,
                pollRate: r.default.number.isRequired,
                hasHeader: r.default.bool,
                dataId: r.default.string.isRequired
            }, t.default = y
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
            var u = b(a(2)),
                o = b(a(7)),
                s = b(a(8)),
                d = b(a(9)),
                c = function() {
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
                f = a(1),
                m = b(f),
                p = b(a(0)),
                y = a(22),
                h = a(146),
                v = b(a(489));

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function E(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : n(t)) && "function" != typeof t ? e : t
            }
            var k = t.GdsMarketTable = function(e) {
                function t() {
                    var e, a, l;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return a = l = E(this, (e = t.__proto__ || (0, d.default)(t)).call.apply(e, [this].concat(n))), l.startPollingArticle = function() {
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
                    }, E(l, a)
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : n(t)));
                    e.prototype = (0, s.default)(t && t.prototype, {
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
                        var u = n;
                        r && (u = ["TICKER", "COMPANY"].concat(u)), u.includes("FAIR VALUE") && u.splice(u.indexOf("FAIR VALUE"), u.indexOf("FAIR VALUE") + 1);
                        var o = t.map(function(e, a) {
                                return u.map(function(e) {
                                    var l = t[a];
                                    return i[e] ? (i[e].forEach(function(e) {
                                        return l[e] ? l = l[e] : (l = "changePct" === e ? "0%" : 0, "--")
                                    }), l) : "--"
                                })
                            }),
                            s = {
                                rows: [u].concat(o),
                                rowHeader: !0,
                                columnHeader: !1
                            };
                        return m.default.createElement(v.default, {
                            themeColor: this.props.themeColor,
                            data: s,
                            isSortable: l,
                            isArticle: r,
                            tableType: this.props.tableType
                        })
                    }
                }]), t
            }();
            k.defaultProps = {
                pollRate: 1e4,
                isFetching: !1,
                marketData: [],
                isSortable: !1,
                isArticle: !1,
                themeColor: null,
                moduleType: "",
                tableType: ""
            }, k.propTypes = {
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
            }, t.default = (0, y.connect)(function(e, t) {
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
            })(k)
        },
        2347: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MarketNews = void 0;
            var l = u(a(1)),
                r = u(a(0)),
                n = u(a(331)),
                i = a(114);

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = a(2038),
                s = t.MarketNews = function(e) {
                    var t = e.data,
                        a = Array.isArray(t) ? t : [],
                        r = ["title-byline-no-border", "title-only", "title-only", "title-only", "title-only"],
                        u = a.map(function(e, t) {
                            var a = 0 === t ? e.author.map(function(e) {
                                    return e.name
                                }).join("|") : "",
                                u = 0 === t ? e.author.map(function(e) {
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
                                bylineUrl: u,
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
                    }, "Latest Market News"), u)
                };
            s.defaultProps = {
                data: []
            }, s.propTypes = {
                data: r.default.array.isRequired
            }, t.default = s
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
        853: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = g(a(1)),
                r = g(a(1989)),
                n = a(693),
                i = a(1997),
                u = g(a(2338)),
                o = g(a(1995)),
                s = g(a(1990)),
                d = g(a(704)),
                c = g(a(694)),
                f = g(a(480)),
                m = g(a(692)),
                p = g(a(1992)),
                y = g(a(1991)),
                h = a(2004),
                v = g(h),
                b = g(a(2421)),
                E = a(698),
                k = g(a(2001));

            function g(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var M = a(1993),
                N = [{
                    text: "U.S. Market Movers",
                    url: "#"
                }, {
                    text: "DOW 30",
                    url: "#"
                }, {
                    text: "NASDAQ 100",
                    url: "#"
                }, {
                    text: "IQ 100",
                    url: "#"
                }, {
                    text: "Sectors",
                    url: "#"
                }];
            t.default = function() {
                return l.default.createElement(r.default, null, l.default.createElement(n.BaseMeta, {
                    key: "BaseMeta",
                    data: {
                        page: {
                            title: "US Markets"
                        }
                    }
                }), l.default.createElement("div", {
                    className: M.page
                }, l.default.createElement("div", {
                    className: M.pageGrid
                }, l.default.createElement("div", {
                    className: M.pageWrapper
                }, l.default.createElement(i.MarketsBanner, {
                    selectedMarketBanner: v.default.selectedMarket,
                    marketData: v.default.marketData,
                    isFetching: !1,
                    lastUpdated: v.default.lastUpdated,
                    dispatch: function() {},
                    pollRate: 15e4,
                    parent: "MarketBanner",
                    data: v.default.data,
                    ad: h.marketBannerAd
                }), l.default.createElement("div", {
                    className: M.pageRow
                }, l.default.createElement(o.default, {
                    landing: !0
                })), l.default.createElement("div", {
                    className: M.pageRow
                }, l.default.createElement("div", {
                    className: M["col-12"]
                }, l.default.createElement(s.default, {
                    title: "US Markets",
                    eyebrow: {
                        url: "https://www.cnbc.com/us-markets/",
                        text: "Markets"
                    },
                    subNavLinks: N
                }))), l.default.createElement("div", {
                    className: M.rowUnderAd,
                    style: {
                        marginTop: "-25px"
                    }
                }, l.default.createElement("div", {
                    className: M["col-8"]
                }, l.default.createElement(c.default, null), l.default.createElement(d.default, {
                    pollRate: 15e4,
                    isSortable: !0,
                    issueIds: ["bby", "esrx", "evhc", "azo", "orly"],
                    headers: ["name", "price", "%chg", "chg"]
                }), l.default.createElement("div", {
                    className: M.columnPadder
                }), l.default.createElement(u.default, {
                    pollRate: 15e4,
                    news: b.default
                }), l.default.createElement("div", {
                    className: M.columnPadder
                }), l.default.createElement(c.default, {
                    title: "Stock Indexes"
                }), l.default.createElement(d.default, {
                    pollRate: 15e4,
                    isSortable: !0,
                    issueIds: [".djia", "esrx", "evhc", "azo", "orly"],
                    headers: ["name", "price", "%chg", "chg"]
                })), l.default.createElement("div", {
                    className: M["col-4"]
                }, l.default.createElement(y.default, null))), l.default.createElement("div", {
                    className: M.pageRow
                }, l.default.createElement("div", {
                    className: M["col-4"]
                }, l.default.createElement(y.default, null)), l.default.createElement("div", {
                    className: M["col-8"]
                }, l.default.createElement(c.default, {
                    title: "Commodities"
                }), l.default.createElement(d.default, {
                    pollRate: 15e4,
                    isSortable: !0,
                    issueIds: [".djia", "esrx", "evhc", "azo", "orly", ".djia", "esrx", "evhc", "azo", "orly"],
                    headers: ["name", "price", "%chg", "chg"]
                }), l.default.createElement("div", {
                    className: M.columnPadder
                }), l.default.createElement(c.default, {
                    title: "Treasurys"
                }), l.default.createElement(d.default, {
                    pollRate: 15e4,
                    isSortable: !0,
                    issueIds: [".djia", "esrx", "evhc", "azo", "orly", ".djia", "esrx", "evhc", "azo", "orly"],
                    headers: ["name", "price", "%chg", "chg"]
                }), l.default.createElement("div", {
                    className: M.columnPadder
                }), l.default.createElement(c.default, {
                    title: "Currencies"
                }), l.default.createElement(d.default, {
                    pollRate: 15e4,
                    isSortable: !0,
                    issueIds: [".djia", "esrx", "evhc", "azo", "orly", ".djia", "esrx", "evhc", "azo", "orly"],
                    headers: ["name", "price", "%chg", "chg"]
                }))), l.default.createElement("div", {
                    className: M.pageRow
                }, l.default.createElement("div", {
                    className: M["col-12"]
                }, l.default.createElement(f.default, {
                    item1: E.watchlistHalfBreaker,
                    item2: E.newslettersHalfBreaker
                }))), l.default.createElement("div", {
                    className: M.pageRow + " " + M.flipRowOrder
                }, l.default.createElement("div", {
                    className: M["col-8"]
                }, l.default.createElement(m.default, {
                    title: "Latest Markets News"
                }, l.default.createElement(p.default, {
                    cards: k.default,
                    isLazyLoad: !0
                }))), l.default.createElement("div", {
                    className: M["col-4"]
                }, l.default.createElement(y.default, null)))))))
            }
        }
    }
]);