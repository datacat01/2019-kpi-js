(window.webpackJsonp = window.webpackJsonp || []).push([
    [93], {
        2338: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MarketsModule = void 0;
            var r = f(a(1)),
                l = f(a(0)),
                n = f(a(2346)),
                o = f(a(694)),
                u = f(a(382)),
                i = f(a(19)),
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
                        l = e.dataId,
                        s = e.hasHeader;
                    if (!t) return null;
                    var f = Array.isArray(t.relatedContent) && t.relatedContent.length && t.relatedContent[0];
                    return r.default.createElement("section", {
                        className: p.container,
                        id: "HP-MarketsModule"
                    }, r.default.createElement("section", {
                        className: p.top
                    }, s && r.default.createElement("div", {
                        className: p.title
                    }, r.default.createElement("h2", null, r.default.createElement(i.default, {
                        to: m + "/us-market-movers/"
                    }, "Markets")), r.default.createElement(u.default, {
                        id: "SponsorLogo-" + l,
                        target: "module=MarketsModule"
                    })), r.default.createElement(d.default, {
                        data: f
                    })), r.default.createElement("section", {
                        className: p.row
                    }, r.default.createElement("section", {
                        className: p.leftColumn
                    }, r.default.createElement("div", {
                        className: p.marketTable
                    }, r.default.createElement(o.default, {
                        title: "Most Active"
                    }), r.default.createElement(n.default, {
                        headers: ["Name", "Price", "CHG", "%CHG", "Vol"],
                        moduleType: "VOLUME",
                        pollRate: a,
                        tableType: "market"
                    })), r.default.createElement("div", {
                        className: p.marketTable
                    }, r.default.createElement(o.default, {
                        title: "Unusual Volume"
                    }), r.default.createElement(n.default, {
                        headers: ["Name", "Price", "CHG", "%CHG", "x10 Day Vol"],
                        moduleType: "PCT_10_VOL",
                        pollRate: a,
                        tableType: "market"
                    }))), r.default.createElement("section", {
                        className: p.rightColumn
                    }, r.default.createElement(c.default, {
                        data: t.assets,
                        dataId: "MarketNews-" + l
                    }))))
                };
            y.defaultProps = {
                hasHeader: !1
            }, y.propTypes = {
                data: l.default.object.isRequired,
                pollRate: l.default.number.isRequired,
                hasHeader: l.default.bool,
                dataId: l.default.string.isRequired
            }, t.default = y
        },
        2346: function(e, t, a) {
            "use strict";
            var r = o(a(5)),
                l = o(a(6)),
                n = "function" == typeof l.default && "symbol" == typeof r.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof l.default && e.constructor === l.default && e !== l.default.prototype ? "symbol" : typeof e
                };

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GdsMarketTable = void 0;
            var u = v(a(2)),
                i = v(a(7)),
                s = v(a(8)),
                d = v(a(9)),
                c = function() {
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
                f = a(1),
                m = v(f),
                p = v(a(0)),
                y = a(22),
                b = a(146),
                h = v(a(489));

            function v(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function k(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : n(t)) && "function" != typeof t ? e : t
            }
            var T = t.GdsMarketTable = function(e) {
                function t() {
                    var e, a, r;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var l = arguments.length, n = Array(l), o = 0; o < l; o++) n[o] = arguments[o];
                    return a = r = k(this, (e = t.__proto__ || (0, d.default)(t)).call.apply(e, [this].concat(n))), r.startPollingArticle = function() {
                        var e = r.props,
                            t = e.dispatch,
                            a = e.pollRate,
                            l = e.moduleType;
                        r.timeout = setTimeout(function() {
                            t((0, b.invalidateMarketTable)(l)), t((0, b.fetchMarketTableDataIfNeeded)(l))
                        }, a)
                    }, r.startPolling = function() {
                        var e = r.props,
                            t = e.dispatch,
                            a = e.pollRate,
                            l = e.moduleType;
                        r.timeout = setTimeout(function() {
                            t((0, b.invalidateMarketTable)(l)), t((0, b.fetchMarketTableDataIfNeeded)(l))
                        }, a)
                    }, k(r, a)
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
                    }), t && (i.default ? (0, i.default)(e, t) : e.__proto__ = t)
                }(t, f.Component), c(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this.props,
                            t = e.dispatch,
                            a = e.moduleType;
                        t && a && this.props.dispatch((0, b.fetchMarketTableDataIfNeeded)(a))
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
                            r = e.isSortable,
                            l = e.isArticle,
                            n = a.map(function(e) {
                                return e.toUpperCase()
                            }),
                            o = {
                                NAME: ["cnbcSymbol"],
                                PRICE: ["symbolData", "lastPrice"],
                                "%CHG": ["symbolData", "changePct"],
                                CHG: ["symbolData", "change"],
                                VOLUME: ["symbolData", "volume"],
                                VOL: ["symbolData", "volume"],
                                "% 10 DAY VOL": ["symbolData", "pctTenDayVol"],
                                "X10 DAY VOL": ["symbolData", "pctTenDayVol"]
                            };
                        n.includes("SYMBOL") && (o.NAME = ["symbolData", "name"]);
                        var u = n;
                        l && (u = ["TICKER", "COMPANY"].concat(u)), u.includes("FAIR VALUE") && u.splice(u.indexOf("FAIR VALUE"), u.indexOf("FAIR VALUE") + 1);
                        var i = t.map(function(e, a) {
                                return u.map(function(e) {
                                    var r = t[a];
                                    return o[e] ? (o[e].forEach(function(e) {
                                        return r[e] ? r = r[e] : (r = "changePct" === e ? "0%" : 0, "--")
                                    }), r) : "--"
                                })
                            }),
                            s = {
                                rows: [u].concat(i),
                                rowHeader: !0,
                                columnHeader: !1
                            };
                        return m.default.createElement(h.default, {
                            themeColor: this.props.themeColor,
                            data: s,
                            isSortable: r,
                            isArticle: l,
                            tableType: this.props.tableType
                        })
                    }
                }]), t
            }();
            T.defaultProps = {
                pollRate: 1e4,
                isFetching: !1,
                marketData: [],
                isSortable: !1,
                isArticle: !1,
                themeColor: null,
                moduleType: "",
                tableType: ""
            }, T.propTypes = {
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
                    r = e.dataByGDSMarketTable[a] || {
                        isFetching: !0,
                        marketData: []
                    },
                    l = r.isFetching;
                return {
                    marketData: r.marketData,
                    isFetching: l
                }
            })(T)
        },
        2347: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MarketNews = void 0;
            var r = u(a(1)),
                l = u(a(0)),
                n = u(a(331)),
                o = a(114);

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = a(2038),
                s = t.MarketNews = function(e) {
                    var t = e.data,
                        a = Array.isArray(t) ? t : [],
                        l = ["title-byline-no-border", "title-only", "title-only", "title-only", "title-only"],
                        u = a.map(function(e, t) {
                            var a = 0 === t ? e.author.map(function(e) {
                                    return e.name
                                }).join("|") : "",
                                u = 0 === t ? e.author.map(function(e) {
                                    return e.url
                                }).join("|") : "",
                                i = e.dateLastPublishedSixHr || "";
                            return r.default.createElement(n.default, {
                                type: e.type,
                                key: e.id + t,
                                title: (0, o.truncateString)(e.title || "", 100),
                                isPro: e.premium,
                                isLive: e.isLive,
                                image: e.image,
                                byline: a,
                                bylineUrl: u,
                                timestamp: e.date,
                                url: e.url,
                                cardType: l[t],
                                formattedTimeStamp: i,
                                id: "MarketNewsStory-" + t
                            })
                        });
                    return r.default.createElement("section", {
                        className: i.container
                    }, r.default.createElement("h3", {
                        className: i.title
                    }, "Latest Market News"), u)
                };
            s.defaultProps = {
                data: []
            }, s.propTypes = {
                data: l.default.array.isRequired
            }, t.default = s
        }
    }
]);