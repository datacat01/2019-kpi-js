! function(e) {
    function n(n) {
        for (var a, u, i = n[0], l = n[1], d = n[2], s = 0, f = []; s < i.length; s++) u = i[s], r[u] && f.push(r[u][0]), r[u] = 0;
        for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
        for (c && c(n); f.length;) f.shift()();
        return o.push.apply(o, d || []), t()
    }

    function t() {
        for (var e, n = 0; n < o.length; n++) {
            for (var t = o[n], a = !0, i = 1; i < t.length; i++) {
                var l = t[i];
                0 !== r[l] && (a = !1)
            }
            a && (o.splice(n--, 1), e = u(u.s = t[0]))
        }
        return e
    }
    var a = {},
        r = {
            9: 0
        },
        o = [];

    function u(n) {
        if (a[n]) return a[n].exports;
        var t = a[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(t.exports, t, t.exports, u), t.l = !0, t.exports
    }
    u.e = function(e) {
        var n = [],
            t = r[e];
        if (0 !== t)
            if (t) n.push(t[2]);
            else {
                var a = new Promise(function(n, a) {
                    t = r[e] = [n, a]
                });
                n.push(t[2] = a);
                var o, i = document.createElement("script");
                i.charset = "utf-8", i.timeout = 120, u.nc && i.setAttribute("nonce", u.nc), i.src = function(e) {
                    return u.p + "" + ({
                        1: "commons",
                        2: "cnbc",
                        4: "makeit",
                        5: "dealornodeal",
                        6: "buffett"
                    } [e] || e) + "-" + {
                        1: "f264becca00d8d89fcf8",
                        2: "f49404a94f73885a2c6a",
                        4: "3eb57c42ccb0191af16c",
                        5: "7ace09e85b09f3220829",
                        6: "ff6f72746b12275a1592",
                        12: "da610dcc54fc7cf4024f",
                        13: "b3df5e8393761bc30055",
                        14: "cb713a3700fdf6e4c033",
                        15: "62df91a41e1c00050d90",
                        16: "862811c3eabf0fe9bfac",
                        17: "f82095a69b7cda1e344e",
                        18: "a7d46ab9c19f4a035fa5",
                        19: "6c9cce03cde4bb5dd990",
                        20: "9829fc589f3c96d5d82f",
                        21: "a6ea5746d7dafff7f1ac",
                        23: "6d7f604bbb61837c1697",
                        26: "5db5d5ef09335f29bbb2",
                        27: "0397467f1a7914f0a653",
                        28: "4662ec5beb0d12870ecc",
                        29: "f5e2f7c563b16dc7c04b",
                        30: "66041e561b7f5387e9b9",
                        31: "e78f9f9a461e2543bb47",
                        32: "4e1ec4e81ed0005047a3",
                        33: "c0ff815dca117dbf70d2",
                        34: "ae06c7a8614ca8953e0e",
                        35: "b1448adf3339357bc1ec",
                        36: "08d919ac322e9a951bf3",
                        37: "effca359eaf7afaccc6c",
                        38: "c5400269ebf59d25b2bf",
                        39: "e2ba3ee624612dd02c95",
                        40: "42df9edc305e1f4c3c5c",
                        41: "3c12e86a334636d8292a",
                        42: "9dcb135fd155505a19a3",
                        43: "f507bd4ecb6d66630dd9",
                        44: "4784276173d455446c93",
                        45: "93e304595007c5e8c206",
                        46: "a1327ba0ec492da8a7b5",
                        47: "d1c2c93793f13980f7a1",
                        48: "71c42de8d156b27cb68e",
                        49: "078ef23267de3991f08b",
                        50: "1e444f201f5aebdb95ca",
                        51: "b820a59d20c4c79c7285",
                        52: "420deb1e501e46c58ba7",
                        53: "22e898b061c4fc8eb52e",
                        54: "51e3c45c7debfffd6cce",
                        55: "fff669165163c4beaaa8",
                        56: "706b20a924ced906106f",
                        57: "f2ced8941e18c25980d3",
                        58: "fb64349a8a2bbf125df9",
                        59: "1797e9ef748988ff5754",
                        60: "e3df7a55e26295d86a29",
                        61: "077f9f3f40e0f1918551",
                        62: "6fbcc8a13f4b7aad69eb",
                        63: "1a13e8df0446d6ad4c04",
                        64: "3e37888a6a17b233598c",
                        65: "cb47e6b47c00d90d1389",
                        66: "b7345c88db2dfe1e88a5",
                        67: "20ac600561164d78408e",
                        68: "8a1baf82221b224b9d68",
                        69: "3310c563ec947eb04007",
                        70: "7fb1e371520926c34b62",
                        71: "a73bf2216e8245295627",
                        72: "6985104c2652a1aae5f6",
                        73: "a0de803a903921a22e0e",
                        74: "46fea2a59ec2eec7e77e",
                        75: "e2d7d84dff5b2c8af408",
                        76: "16255c8a0ffc371ec141",
                        77: "8423c9ae619af8ec7bbd",
                        78: "f835b8b0cd974943260a",
                        79: "4816b8c23fd4a4157719",
                        80: "9e54acc640759376f333",
                        81: "fbebf41cee04aaec795a",
                        82: "cf404388a2a5b3d4a582",
                        83: "697cfdce5118a59e050d",
                        84: "d0d95a992c02229be4f5",
                        85: "6aef13484a93f175548a",
                        86: "84b404b57901bedf93e0",
                        87: "7b4979444800eccf3e0a",
                        88: "824494e8d6e365283d14",
                        89: "a2c122d377d55daca1c1",
                        90: "04a4e6c07af40cde6e34",
                        91: "f3e7f9cf1b069ecd4fb9",
                        92: "bf5c8cdaf2abdce1f0e8",
                        93: "11ee823f4b011034ad5d",
                        94: "c6d466830ef4452d297e",
                        95: "10c864d65393e8841723",
                        96: "56d3b41c77bae8d73c18",
                        97: "a0d69f6fdb4755681ebd",
                        98: "251d22a6f4feaa557db2",
                        99: "4d947aed7a1a8858fbe3",
                        100: "59519aac7c142e1d4afc",
                        101: "faf1e571fa050f034f39",
                        102: "6a31d23af778a5fdb2bf",
                        103: "08481b545b6b9ccfc42e",
                        104: "98dd3240a1a852ddef09",
                        105: "9b61fa9f498a02164323",
                        106: "993bb3c0d16699647dfc",
                        107: "2eac30e86045d116b3b6",
                        108: "8ca748d8e8483266a55b",
                        109: "01234ef5b265cfdef3bb",
                        110: "6b76bd4e9c4d77aa1c22",
                        111: "b78657c79b308844c1e9",
                        112: "e147f0cab4bff0304d17",
                        113: "30a68bbf1a9c3732e484",
                        114: "dd963cf9f7aedaef9776",
                        115: "049740a20624b45559ab",
                        116: "d03edc95452d4d47f01a",
                        117: "e7ce471d3d20e57f9286",
                        118: "035a3cb86332b45d6a55",
                        119: "91a88e5545ba40ca36a0",
                        120: "3db3c37ab8ee38317a01",
                        121: "e8fb14cb0c1c56bb2310",
                        122: "d8984f05188dad43a38b",
                        123: "7a3591f6df06a98073d9",
                        124: "f78a80fee4c92505fc90",
                        125: "94fd1f6939edee71aa30",
                        126: "1d9466cefd90b14b5678",
                        127: "b85ad579f0f8f8ecaf07",
                        128: "9f73ddb42a8a1c793805",
                        129: "3391f7d7fce5ed2baf59",
                        130: "2e39ac5cd3469bc59c20",
                        131: "bb67bb9d1e9e8923fc21",
                        132: "1b61fdece9b7d53edec2",
                        133: "abfbf4e1d70d2d21bc3c",
                        134: "a34e050b78aadcb78dbb",
                        135: "ce442a027c8f90c42fcb",
                        136: "ba80a9fc9d0c2cd6d3cb",
                        137: "2ba8a4b08700dfecd7ff",
                        138: "06418034d36cf91dae69",
                        139: "fb88a0b53f12d7f5b4f2",
                        140: "499e900a59a62071902a",
                        141: "a51bd6d058d6799155e0",
                        142: "3ad40406048afc3ebd4f",
                        143: "7609506196bf5f41e7ec",
                        144: "f8b4ea20a4ffdeefac5b",
                        145: "9eb04fef0d027e77a44d",
                        146: "a9f4466694cb1a4c4e4e",
                        147: "e0e410fd581c8c23e403",
                        148: "ac53d6c9e27cfd205862",
                        149: "a0de42e1bdfc1294000f",
                        150: "e6f1773e952cc97f744c",
                        151: "64268210103b9366863d",
                        152: "298ff8e246f3c243a60e",
                        153: "4cf71a608e631e99e08b",
                        154: "c0bf38d5135b71ac85e8",
                        155: "7127c4f3b88629a046c7",
                        156: "61b94f71bae24585e8ed"
                    } [e] + ".js"
                }(e), o = function(n) {
                    i.onerror = i.onload = null, clearTimeout(l);
                    var t = r[e];
                    if (0 !== t) {
                        if (t) {
                            var a = n && ("load" === n.type ? "missing" : n.type),
                                o = n && n.target && n.target.src,
                                u = new Error("Loading chunk " + e + " failed.\n(" + a + ": " + o + ")");
                            u.type = a, u.request = o, t[1](u)
                        }
                        r[e] = void 0
                    }
                };
                var l = setTimeout(function() {
                    o({
                        type: "timeout",
                        target: i
                    })
                }, 12e4);
                i.onerror = i.onload = o, document.head.appendChild(i)
            } return Promise.all(n)
    }, u.m = e, u.c = a, u.d = function(e, n, t) {
        u.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: t
        })
    }, u.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, u.t = function(e, n) {
        if (1 & n && (e = u(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (u.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var a in e) u.d(t, a, function(n) {
                return e[n]
            }.bind(null, a));
        return t
    }, u.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return u.d(n, "a", n), n
    }, u.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, u.p = "https://static-redesign.cnbcfm.com/dist/", u.oe = function(e) {
        throw console.error(e), e
    };
    var i = window.webpackJsonp = window.webpackJsonp || [],
        l = i.push.bind(i);
    i.push = n, i = i.slice();
    for (var d = 0; d < i.length; d++) n(i[d]);
    var c = l;
    o.push([867, 0, 3]), t()
}({
    10: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\nid\ntype\ntitle\nseoTitle\npremium\nnative\nheadline\nshorterHeadline\ntagName\ntagNameFormatted\ntagNameFormattedFull\nslug\nurl\ndescription\nauthor {\n  id\n  name\n  tagName\n  tagNameFormatted\n}\nsourceOrganization {\n  id\n  slug\n  tagName\n  tagNameFormatted\n  tagNameFormattedFull\n}\nprojectTeamContent {\n  id\n  headline\n  tagName\n  tagNameFormatted\n  tagNameFormattedFull\n}\nrelatedTags: relatedTagsFiltered {\n  id\n  headline\n  tagName\n  tagNameFormatted\n  tagNameFormattedFull\n  type\n}\nrelatedTagsFilteredFormatted(isTruncated: true)\nrelatedTagsFilteredFormattedFull: relatedTagsFilteredFormatted\nadditionalSectionContent {\n  id\n  headline\n  tagName\n  tagNameFormatted\n  tagNameFormattedFull\n  type\n}\nadditionalSectionContentFormatted(isTruncated: true)\nadditionalSectionContentFormattedFull: additionalSectionContentFormatted\nrelatedVideoContent: relatedContentFiltered {\n  id\n  headline\n  tagName\n  tagNameFormatted\n  tagNameFormattedFull\n  type\n}\ndatePublished\ndateLastPublished\nsectionHierarchy(isFiltered: true) {\n  id\n  tagName\n  tagNameFormatted\n  tagNameFormattedFull\n  order\n}\nsectionHierarchyFormatted(isFiltered: true, isTruncated: true)\nsectionHierarchyFormattedFull: sectionHierarchyFormatted(isFiltered: true)\ncreatorOverwrite\nprojectContent {\n  id\n  headline\n  tagName\n  tagNameFormatted\n  tagNameFormattedFull\n}\npromoImage {\n  id\n  url\n}\nimage {\n  url\n  id\n}\nsection{\n  headline\n  id\n  subType\n  tagName\n  tagNameFormatted\n  tagNameFormattedFull\n  title\n  url\n}\nprojectTeamContentFormatted(isTruncated: true)\nprojectTeamContentFormattedFull: projectTeamContentFormatted\nprojectContentFormatted(isTruncated: true)\nprojectContentFormattedFull: projectContentFormatted\ncreatorOverwriteFormatted\nsourceOrganizationFormatted(isTruncated: true)\nsourceOrganizationFormattedFull: sourceOrganizationFormatted\nauthorFormatted(isTruncated: true)\nauthorFormattedFull: authorFormatted\ndateFirstPublished\nsubDomain\nliveURL\npageName\nshortDatePublished\nshortDateLastPublished\nshortDateFirstPublished\nairDate\nbrand\ncomScoreC2\ncomScoreC3\ncomScoreC4\ncomScoreC6\ndayPart\nduration\nid\nnetwork\nplatform\nplaybackURL\nplayerConfig\nplayerTech\nsubType\ntitle\ntranscript {\n  duration\n  cues\n  chapters {\n    in\n    out\n    title\n    chapter\n    keyChapter\n    transcript\n  }\n}\nthumbnail\nusageRule\nvcpsId\nvideoStatus\n"
    },
    1069: function(e, n, t) {
        "use strict";
        var a = u(t(1070)),
            r = u(t(1354)),
            o = u(t(15));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(0, a.default)(o.default, "root", r.default)
    },
    1070: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = p(t(1)),
            r = p(t(90)),
            o = t(1988),
            u = t(754),
            i = t(115),
            l = p(t(294)),
            d = p(t(164)),
            c = p(t(268)),
            s = p(t(274)),
            f = p(t(20)),
            _ = p(t(37));

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        n.default = function(e, n, t) {
            var p = document.getElementById(n),
                E = c.default.createClient(e);
            l.default.preloadReady().then(function() {
                r.default.hydrate(a.default.createElement(s.default, {
                    store: (0, d.default)(),
                    client: E
                }, a.default.createElement(o.BrowserRouter, null, a.default.createElement(i.CookiesProvider, null, (0, u.renderRoutes)(t)))), p)
            }), e.get("host.isPreRelease") && (window.React = a.default, p && p.firstChild && p.firstChild.attributes && p.firstChild.attributes["data-reactroot"] || console.error("Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.")), window && (window.__EventBus__ = f.default, void 0 !== window.mps && "function" == typeof window.mps.responsiveApply && (_.default.monitorBreakpoints(), window.setTimeout(function() {
                return window.addEventListener("breakpointChange", function() {
                    return window.mps.responsiveApply()
                })
            }, 2e3)))
        }
    },
    112: function(e) {
        e.exports = {
            __schema: {
                types: [{
                    kind: "UNION",
                    name: "featuredMedia",
                    possibleTypes: [{
                        name: "image"
                    }, {
                        name: "cnbcvideo"
                    }]
                }, {
                    kind: "UNION",
                    name: "assetUnion",
                    possibleTypes: [{
                        name: "blogpost"
                    }, {
                        name: "cnbcnewsstory"
                    }, {
                        name: "partnerstory"
                    }, {
                        name: "pressrelease"
                    }, {
                        name: "slideshow"
                    }, {
                        name: "sponsored"
                    }, {
                        name: "wirestory"
                    }, {
                        name: "collection"
                    }, {
                        name: "cnbcvideo"
                    }, {
                        name: "event"
                    }, {
                        name: "image"
                    }, {
                        name: "person"
                    }, {
                        name: "section"
                    }, {
                        name: "security"
                    }, {
                        name: "webservice"
                    }, {
                        name: "wildcard"
                    }]
                }]
            }
        }
    },
    113: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.BREAKPOINT_RANGES = n.BREAKPOINT_NAMES = n.BREAKPOINT_LARGE_DESKTOP = n.BREAKPOINT_MEDIUM_DESKTOP = n.BREAKPOINT_SMALL_DESKTOP = n.BREAKPOINT_TABLET = n.BREAKPOINT_MOBILE = void 0;
        var a, r, o = t(2),
            u = (a = o) && a.__esModule ? a : {
                default: a
            };

        function i(e, n, t) {
            return n in e ? (0, u.default)(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e
        }
        var l = n.BREAKPOINT_MOBILE = "mobile",
            d = n.BREAKPOINT_TABLET = "tablet",
            c = n.BREAKPOINT_SMALL_DESKTOP = "small_desktop",
            s = n.BREAKPOINT_MEDIUM_DESKTOP = "medium_desktop",
            f = n.BREAKPOINT_LARGE_DESKTOP = "large_desktop";
        n.BREAKPOINT_NAMES = [l, d, c, s, f], n.BREAKPOINT_RANGES = (i(r = {}, l, {
            min: 1,
            max: 759
        }), i(r, d, {
            min: 760,
            max: 1019
        }), i(r, c, {
            min: 1020,
            max: 1179
        }), i(r, s, {
            min: 1180,
            max: 1339
        }), i(r, f, {
            min: 1340,
            max: 999999
        }), r)
    },
    116: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.fetchBatchedQuoteDataIfNeeded = n.fetchQuoteDataIfNeeded = n.invalidateBatchedQuote = n.invalidateQuote = n.INVALIDATE_BATCHED_QUOTE_DATA = n.RECEIVE_BATCHED_QUOTE_DATA = n.INVALIDATE_QUOTE_DATA = n.RECEIVE_QUOTE_DATA = n.REQUEST_QUOTE_DATA = void 0;
        var a, r = t(57),
            o = (a = r) && a.__esModule ? a : {
                default: a
            };
        var u = n.REQUEST_QUOTE_DATA = "REQUEST_QUOTE_DATA",
            i = n.RECEIVE_QUOTE_DATA = "RECEIVE_QUOTE_DATA",
            l = n.INVALIDATE_QUOTE_DATA = "INVALIDATE_QUOTE_DATA",
            d = n.RECEIVE_BATCHED_QUOTE_DATA = "RECEIVE_BATCHED_QUOTE_DATA",
            c = n.INVALIDATE_BATCHED_QUOTE_DATA = "INVALIDATE_BATCHED_QUOTE_DATA",
            s = (n.invalidateQuote = o.default.makeBasicAction(l), n.invalidateBatchedQuote = o.default.makeBasicAction(c), o.default.makeBasicAction(u)),
            f = o.default.makeReceiveAction(i, "quote"),
            _ = o.default.makeReceiveAction(d, "quote"),
            p = o.default.makeFetchAction(s, f, !0),
            E = o.default.makeFetchAction(s, _, !0, "issue_id"),
            h = o.default.makeShouldFetchAction("dataByQuote"),
            m = o.default.makeShouldFetchBatchedAction("dataByQuote");
        n.fetchQuoteDataIfNeeded = o.default.makeFetchIfNeededAction(h, p), n.fetchBatchedQuoteDataIfNeeded = o.default.makeFetchIfNeededAction(m, E)
    },
    125: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.fetchMarketBannerDataIfNeeded = n.invalidateMarketBanner = n.selectMarketBanner = n.INVALIDATE_MARKET_BANNER = n.SELECT_MARKET_BANNER = n.RECEIVE_MARKET_BANNER_DATA = n.REQUEST_MARKET_BANNER_DATA = void 0;
        var a, r = t(57),
            o = (a = r) && a.__esModule ? a : {
                default: a
            };
        var u = n.REQUEST_MARKET_BANNER_DATA = "REQUEST_MARKET_BANNER_DATA",
            i = n.RECEIVE_MARKET_BANNER_DATA = "RECEIVE_MARKET_BANNER_DATA",
            l = n.SELECT_MARKET_BANNER = "SELECT_MARKET_BANNER",
            d = n.INVALIDATE_MARKET_BANNER = "INVALIDATE_MARKET_BANNER",
            c = (n.selectMarketBanner = o.default.makeBasicAction(l), n.invalidateMarketBanner = o.default.makeBasicAction(d), o.default.makeBasicAction(u)),
            s = o.default.makeReceiveAction(i, "quick"),
            f = o.default.makeFetchAction(c, s),
            _ = o.default.makeShouldFetchAction("dataByMarketBanner");
        n.fetchMarketBannerDataIfNeeded = o.default.makeFetchIfNeededAction(_, f)
    },
    126: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.fetchMarketMoverDataIfNeeded = n.invalidateMarketModule = n.selectExchangeModule = n.INVALIDATE_MARKET_MODULE = n.SELECT_EXCHANGE_NAME = n.RECEIVE_MARKET_MOVER_DATA = n.REQUEST_MARKET_MOVER_DATA = void 0;
        var a, r = t(170),
            o = (a = r) && a.__esModule ? a : {
                default: a
            };
        var u = n.REQUEST_MARKET_MOVER_DATA = "REQUEST_MARKET_MOVER_DATA",
            i = n.RECEIVE_MARKET_MOVER_DATA = "RECEIVE_MARKET_MOVER_DATA",
            l = n.SELECT_EXCHANGE_NAME = "SELECT_EXCHANGE_NAME",
            d = n.INVALIDATE_MARKET_MODULE = "INVALIDATE_MARKET_MODULE",
            c = (n.selectExchangeModule = o.default.makeBasicAction(l), n.invalidateMarketModule = o.default.makeBasicAction(d), o.default.makeBasicAction(u)),
            s = o.default.makeReceiveAction(i),
            f = o.default.makeFetchAction(c, s),
            _ = o.default.makeShouldFetchAction("dataByMarketMover");
        n.fetchMarketMoverDataIfNeeded = o.default.makeFetchIfNeededAction(_, f)
    },
    127: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.fetchMarketTableDataIfNeeded = n.invalidateMarketTable = n.INVALIDATE_MARKET_TABLE_DATA = n.RECEIVE_MARKET_TABLE_DATA = n.REQUEST_MARKET_TABLE_DATA = void 0;
        var a, r = t(57),
            o = (a = r) && a.__esModule ? a : {
                default: a
            };
        var u = n.REQUEST_MARKET_TABLE_DATA = "REQUEST_MARKET_TABLE_DATA",
            i = n.RECEIVE_MARKET_TABLE_DATA = "RECEIVE_MARKET_TABLE_DATA",
            l = n.INVALIDATE_MARKET_TABLE_DATA = "INVALIDATE_MARKET_TABLE_DATA",
            d = (n.invalidateMarketTable = o.default.makeBasicAction(l), o.default.makeBasicAction(u)),
            c = o.default.makeReceiveAction(i, "table"),
            s = o.default.makeFetchAction(d, c),
            f = o.default.makeShouldFetchAction("dataByMarketTable");
        n.fetchMarketTableDataIfNeeded = o.default.makeFetchIfNeededAction(f, s)
    },
    128: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = n.XFINITY_EXPERIENCE = "XFINITY_EXPERIENCE";
        n.setXfinityExperience = function() {
            return {
                type: a
            }
        }
    },
    130: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(10);
        var o = "\n  ...on articleBody {\n    id\n    type\n    brand\n    premium\n    section {\n      id\n      color\n    }\n    native\n    creatorOverwrite\n    sourceOrganization {\n      id\n      url\n      name\n      logo\n      creatorOverwrite\n      linkHeadline\n    }\n    body {\n      content {\n        tagName\n        attributes\n        data {\n          ... on cnbcvideo {\n            " + ((a = r) && a.__esModule ? a : {
            default: a
        }).default+"\n          }\n        }\n        children\n      }\n    }\n    shortestHeadline\n    featuredMedia {\n      id\n      ... on image {\n        caption\n        copyrightHolder\n        isHighTouch\n      }\n    }\n  }\n";
        n.default = o
    },
    131: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(10);
        var o = "\n  ...on articleHeader {\n    id\n    brand\n    contentClassification\n    type\n    url\n    native\n    premium\n    datePublished\n    dateModified\n    dateLastPublished\n    datePublishedFormatted\n    dateLastPublishedFormatted\n    description\n    socialtoolsEnabled\n    shortestHeadline\n    headline\n    title\n    jobTitle\n    native\n    socialMediaInfo {\n      type\n      url\n      displayText\n    }\n    sourceOrganization {\n      id\n      type\n      url\n      name\n      logo\n      creatorOverwrite\n    }\n    creatorOverwrite\n    author {\n      id\n      name\n      url\n      image\n      sameAs\n      socialMediaInfo {\n        url\n        displayText\n        type\n      }\n    }\n    promoImage {\n      id\n      url\n      caption\n    }\n    featuredMedia {\n      id\n      url\n      ... on image {\n        id\n        type\n        caption\n        headline\n        copyrightHolder\n        url\n        datePublished\n        isHighTouch\n      }\n      ... on cnbcvideo {\n        " + ((a = r) && a.__esModule ? a : {
            default: a
        }).default+"\n      }\n    }\n    publisher {\n      name\n      logo\n    }\n    section {\n      id\n      brand\n      type\n      color\n      name\n      eyebrow\n      shortestHeadline\n      url\n      subType\n      section {\n        subType\n      }\n      image {\n        id\n        url\n      }\n      logo {\n        id\n        url\n      }\n    }\n  }\n";
        n.default = o
    },
    132: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(10);
        var o = "\n  ...on articleInlineMedia {\n    id\n    brand\n    section {\n      id\n      color\n    }\n    featuredMedia {\n      ... on image {\n        id\n        type\n        caption\n        headline\n        creatorOverwrite\n        copyrightHolder\n        url\n        datePublished\n        isHighTouch\n      }\n      ... on cnbcvideo {\n        " + ((a = r) && a.__esModule ? a : {
            default: a
        }).default+"\n      }\n    }\n  }\n";
        n.default = o
    },
    133: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  id,\n  type,\n  description,\n  url,\n  title,\n  seoTitle\n  author {\n    id\n    name\n  }\n  promoImage {\n    id\n    url\n  },\n  featuredMedia {\n    ... on image {\n      id\n      type\n      url\n    }\n    ... on cnbcvideo {\n      id\n      type\n      url\n      image {\n        url\n        id\n      }\n    }\n  }\n  datePublished,\n  dateFirstPublished,\n  dateLastPublished,\n  relatedTagsFiltered {\n    id\n    headline\n    tagName\n    type\n  }\n  native,\n"
    },
    134: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on keyPoints {\n    id\n    brand\n    keyPoints\n    section {\n      id\n      color\n    }\n  }\n"
    },
    135: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on mostPopular {\n    brand\n    assets {\n      id\n      headline\n      slug\n      title\n      url\n      promoImage {\n        id\n        url\n        caption\n        type\n      }\n    }\n  }\n"
    },
    1354: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = i(t(23)),
            r = i(t(1)),
            o = i(t(294)),
            u = i(t(333));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(0), t.e(3), t.e(1), t.e(17)]).then(function(n) {
                            e(t(761))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/App"],
                webpack: function() {
                    return [761]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            d = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(122)]).then(function(n) {
                            e(t(762))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/NotFound"],
                webpack: function() {
                    return [762]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            c = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(12)]).then(function(n) {
                            e(t(770))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/Landing"],
                webpack: function() {
                    return [770]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            s = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(39)]).then(function(n) {
                            e(t(777))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/Navigator"],
                webpack: function() {
                    return [777]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            f = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(147)]).then(function(n) {
                            e(t(783))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/EmbedPlayer"],
                webpack: function() {
                    return [783]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            _ = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(0), t.e(3), t.e(1), t.e(16)]).then(function(n) {
                            e(t(784))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/VideoDemo"],
                webpack: function() {
                    return [784]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            p = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(0), t.e(3), t.e(1), t.e(15)]).then(function(n) {
                            e(t(785))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/Video/Testing"],
                webpack: function() {
                    return [785]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            E = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(56)]).then(function(n) {
                            e(t(786))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/Video/Refactor"],
                webpack: function() {
                    return [786]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            h = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(35)]).then(function(n) {
                            e(t(787))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/ArticlePage"],
                webpack: function() {
                    return [787]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            m = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(41)]).then(function(n) {
                            e(t(790))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/ArticleMockPages/ArticleLow"],
                webpack: function() {
                    return [790]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            T = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(57)]).then(function(n) {
                            e(t(795))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/ArticleMockPages/ArticleMed"],
                webpack: function() {
                    return [795]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            v = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(66)]).then(function(n) {
                            e(t(796))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/ArticleMockPages/ArticleHigh"],
                webpack: function() {
                    return [796]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            A = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(72)]).then(function(n) {
                            e(t(797))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/ArticleMockPages/ArticlePro"],
                webpack: function() {
                    return [797]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            b = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(85)]).then(function(n) {
                            e(t(798))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/ArticleMockPages/Sponsored"],
                webpack: function() {
                    return [798]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            y = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(84)]).then(function(n) {
                            e(t(799))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/ArticleMockPages/SpecialReport"],
                webpack: function() {
                    return [799]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            I = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(86)]).then(function(n) {
                            e(t(800))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/ArticleMockPages/ArticleBranded"],
                webpack: function() {
                    return [800]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            g = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(36)]).then(function(n) {
                            e(t(801))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/ArticleMockPages/SpecialReportLow"],
                webpack: function() {
                    return [801]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            O = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(37)]).then(function(n) {
                            e(t(802))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/ArticleMockPages/SpecialReportMed"],
                webpack: function() {
                    return [802]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            S = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(42)]).then(function(n) {
                            e(t(803))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/ArticleMockPages/SpecialReportHigh"],
                webpack: function() {
                    return [803]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            N = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(70)]).then(function(n) {
                            e(t(804))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/ArticleMockPages/Scrollshow"],
                webpack: function() {
                    return [804]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            P = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(18)]).then(function(n) {
                            e(t(805))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/LandingMockPages/Homepage"],
                webpack: function() {
                    return [805]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            L = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(38)]).then(function(n) {
                            e(t(806))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/LandingMockPages/LandingTech"],
                webpack: function() {
                    return [806]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            R = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(23)]).then(function(n) {
                            e(t(807))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/LandingMockPages/LandingBusiness"],
                webpack: function() {
                    return [807]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            M = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(151)]).then(function(n) {
                            e(t(808))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/LandingMockPages/LandingDynamicTag"],
                webpack: function() {
                    return [808]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            D = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(115)]).then(function(n) {
                            e(t(809))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/LandingMockPages/LandingSpReport"],
                webpack: function() {
                    return [809]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            w = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(152)]).then(function(n) {
                            e(t(810))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/LandingMockPages/LandingPro"],
                webpack: function() {
                    return [810]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            k = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(154)]).then(function(n) {
                            e(t(811))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/LandingMockPages/LandingProGate"],
                webpack: function() {
                    return [811]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            C = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(153)]).then(function(n) {
                            e(t(812))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/LandingMockPages/LandingProEnded"],
                webpack: function() {
                    return [812]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            F = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(14)]).then(function(n) {
                            e(t(813))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/VideoPage"],
                webpack: function() {
                    return [813]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            U = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(13)]).then(function(n) {
                            e(t(814))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/VideoDetail"],
                webpack: function() {
                    return [814]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            B = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(40)]).then(function(n) {
                            e(t(815))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/SchedulePage"],
                webpack: function() {
                    return [815]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            V = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(5), t.e(0), t.e(1), t.e(82)]).then(function(n) {
                            e(t(816))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/WildCardPage"],
                webpack: function() {
                    return [816]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            H = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(31)]).then(function(n) {
                            e(t(817))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/ShowMockPages/ShowHigh"],
                webpack: function() {
                    return [817]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            x = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(26)]).then(function(n) {
                            e(t(818))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/ShowMockPages/ShowLow"],
                webpack: function() {
                    return [818]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            j = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(33)]).then(function(n) {
                            e(t(819))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/TVLandingPage"],
                webpack: function() {
                    return [819]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            K = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(44)]).then(function(n) {
                            e(t(820))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/ShowHub"],
                webpack: function() {
                    return [820]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            G = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(81)]).then(function(n) {
                            e(t(821))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/PeopleHub"],
                webpack: function() {
                    return [821]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            Y = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(21)]).then(function(n) {
                            e(t(822))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/SearchResults"],
                webpack: function() {
                    return [822]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            Q = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(43)]).then(function(n) {
                            e(t(823))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/SearchNoResults"],
                webpack: function() {
                    return [823]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            z = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(45)]).then(function(n) {
                            e(t(824))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/BuffettDemoPage"],
                webpack: function() {
                    return [824]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            W = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(55)]).then(function(n) {
                            e(t(825))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/BuffettDemoVideoPage"],
                webpack: function() {
                    return [825]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            q = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(0), t.e(156)]).then(function(n) {
                            e(t(826))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/StandAloneComponentApp"],
                webpack: function() {
                    return [826]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            $ = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(121)]).then(function(n) {
                            e(t(827))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/GlobalHeaderContainer"],
                webpack: function() {
                    return [827]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            X = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(0), t.e(1), t.e(120)]).then(function(n) {
                            e(t(722))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/GlobalFooterContainer"],
                webpack: function() {
                    return [722]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            J = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(94)]).then(function(n) {
                            e(t(828))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/VideoStates"],
                webpack: function() {
                    return [828]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            Z = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(119)]).then(function(n) {
                            e(t(829))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/BuffettNotFound"],
                webpack: function() {
                    return [829]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            ee = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(80)]).then(function(n) {
                            e(t(830))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/BuffettSlideshow"],
                webpack: function() {
                    return [830]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            ne = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(34)]).then(function(n) {
                            e(t(831))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/BuffettSlideshow2"],
                webpack: function() {
                    return [831]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            te = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(74)]).then(function(n) {
                            e(t(832))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/Buffett"],
                webpack: function() {
                    return [832]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            ae = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(60)]).then(function(n) {
                            e(t(833))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/BuffettSearchResults"],
                webpack: function() {
                    return [833]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            re = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(59)]).then(function(n) {
                            e(t(834))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/BuffettNoSearchResults"],
                webpack: function() {
                    return [834]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            oe = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(62)]).then(function(n) {
                            e(t(835))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/BuffettClipPlayer"],
                webpack: function() {
                    return [835]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            ue = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(19)]).then(function(n) {
                            e(t(836))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/BuffettLongFormPlayer"],
                webpack: function() {
                    return [836]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            ie = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(63)]).then(function(n) {
                            e(t(837))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/BuffettLongFormPlayerNoTranscript"],
                webpack: function() {
                    return [837]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            le = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(20)]).then(function(n) {
                            e(t(838))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/BuffettLongFormPlayerJumped"],
                webpack: function() {
                    return [838]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            de = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(32)]).then(function(n) {
                            e(t(839))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/BuffettArticle"],
                webpack: function() {
                    return [839]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            ce = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(104)]).then(function(n) {
                            e(t(840))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/BuffettLongFormPlayerDetail"],
                webpack: function() {
                    return [840]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            se = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(114)]).then(function(n) {
                            e(t(841))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/BuffettVideoStates"],
                webpack: function() {
                    return [841]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            fe = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(29)]).then(function(n) {
                            e(t(842))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/BuffettAbout"],
                webpack: function() {
                    return [842]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            _e = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(0), t.e(3), t.e(1), t.e(54)]).then(function(n) {
                            e(t(843))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/Newsletters"],
                webpack: function() {
                    return [843]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            pe = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(0), t.e(3), t.e(1), t.e(148)]).then(function(n) {
                            e(t(844))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/HalfHalfBreakerContainer"],
                webpack: function() {
                    return [844]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            Ee = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(0), t.e(3), t.e(1), t.e(149)]).then(function(n) {
                            e(t(845))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/HalfHalfBreakerContainerCNBC"],
                webpack: function() {
                    return [845]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            he = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(111)]).then(function(n) {
                            e(t(846))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/InfoPage/InfoPageTOS"],
                webpack: function() {
                    return [846]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            me = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(150)]).then(function(n) {
                            e(t(847))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/InfoPage/InfoPageNewsTips"],
                webpack: function() {
                    return [847]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            Te = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(91)]).then(function(n) {
                            e(t(848))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/InfoPage/InfoPageLicensing"],
                webpack: function() {
                    return [848]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            ve = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(155)]).then(function(n) {
                            e(t(849))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/MarketsMockPages/MarketETFs"],
                webpack: function() {
                    return [849]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            Ae = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(105)]).then(function(n) {
                            e(t(850))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/MarketsMockPages/MarketMovers"],
                webpack: function() {
                    return [850]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            be = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(30)]).then(function(n) {
                            e(t(851))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/MarketsMockPages/MarketDashboard"],
                webpack: function() {
                    return [851]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            ye = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(27)]).then(function(n) {
                            e(t(852))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/MarketsMockPages/MarketDashboardWatchlist"],
                webpack: function() {
                    return [852]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            Ie = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(68)]).then(function(n) {
                            e(t(853))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/MarketsMockPages/USMarkets"],
                webpack: function() {
                    return [853]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            ge = (0, o.default)({
                loader: function() {
                    return new a.default(function(e) {
                        Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(65)]).then(function(n) {
                            e(t(854))
                        }.bind(null, t)).catch(t.oe)
                    })
                },
                modules: ["../containers/MockPages/MarketsMockPages/PreMarkets"],
                webpack: function() {
                    return [854]
                },
                loading: function() {
                    return r.default.createElement(u.default, null)
                }
            }),
            Oe = [{
                path: "/component",
                component: q,
                routes: [{
                    path: "/component/footer/:brand/:product",
                    exact: !0,
                    component: X
                }, {
                    path: "/component/header/:brand/:product",
                    exact: !0,
                    component: $
                }, {
                    path: "/component/promo_breaker_buffett/:brand/:product",
                    exact: !0,
                    component: pe
                }, {
                    path: "/component/promo_breaker_cnbc/:brand/:product",
                    exact: !0,
                    component: Ee
                }]
            }, {
                component: l,
                routes: [{
                    path: "/mockz/info-page-licensing",
                    exact: !0,
                    component: Te
                }, {
                    path: "/mockz/info-page-tos",
                    exact: !0,
                    component: he
                }, {
                    path: "/mockz/info-page-news-tips",
                    exact: !0,
                    component: me
                }, {
                    path: "/mockz/article",
                    exact: !0,
                    component: h
                }, {
                    path: "/mockz/article-low",
                    exact: !0,
                    component: m
                }, {
                    path: "/mockz/article-med",
                    exact: !0,
                    component: T
                }, {
                    path: "/mockz/article-high",
                    exact: !0,
                    component: v
                }, {
                    path: "/mockz/article-branded",
                    exact: !0,
                    component: I
                }, {
                    path: "/mockz/article-pro",
                    exact: !0,
                    component: A
                }, {
                    path: "/mockz/special-report",
                    exact: !0,
                    component: y
                }, {
                    path: "/mockz/special-report-low",
                    exact: !0,
                    component: g
                }, {
                    path: "/mockz/special-report-med",
                    exact: !0,
                    component: O
                }, {
                    path: "/mockz/special-report-high",
                    exact: !0,
                    component: S
                }, {
                    path: "/mockz/sponsored",
                    exact: !0,
                    component: b
                }, {
                    path: "/mockz/scrollshow",
                    exact: !0,
                    component: N
                }, {
                    path: "/mockz/us-homepage-mock/:id",
                    component: P
                }, {
                    path: "/mockz/us-homepage-mock",
                    component: P
                }, {
                    path: "/mockz/landing",
                    exact: !0,
                    component: c
                }, {
                    path: "/mockz/landing-tech",
                    exact: !0,
                    component: L
                }, {
                    path: "/mockz/landing-business",
                    exact: !0,
                    component: R
                }, {
                    path: "/mockz/landing-dynamictag",
                    exact: !0,
                    component: M
                }, {
                    path: "/mockz/landing-spreport",
                    exact: !0,
                    component: D
                }, {
                    path: "/mockz/landing-pro",
                    exact: !0,
                    component: w
                }, {
                    path: "/mockz/landing-progate",
                    exact: !0,
                    component: k
                }, {
                    path: "/mockz/landing-proended",
                    exact: !0,
                    component: C
                }, {
                    path: "/mockz/video",
                    exact: !0,
                    component: F
                }, {
                    path: "/mockz/video-detail/:version",
                    component: U
                }, {
                    path: "/mockz/video-detail",
                    exact: !0,
                    component: U
                }, {
                    path: "/mockz/vidlanding",
                    exact: !0,
                    component: _
                }, {
                    path: "/mockz/videotesting",
                    exact: !0,
                    component: p
                }, {
                    path: "/mockz/videorefactor",
                    exact: !0,
                    component: E
                }, {
                    path: "/mockz/schedule",
                    exact: !0,
                    component: B
                }, {
                    path: "/mockz/wildcard",
                    exact: !0,
                    component: V
                }, {
                    path: "/mockz/show-high/:version",
                    exact: !0,
                    component: H
                }, {
                    path: "/mockz/show-high",
                    exact: !0,
                    component: H
                }, {
                    path: "/mockz/show-low",
                    exact: !0,
                    component: x
                }, {
                    path: "/mockz/tv-landing/:version",
                    exact: !0,
                    component: j
                }, {
                    path: "/mockz/tv-landing",
                    exact: !0,
                    component: j
                }, {
                    path: "/mockz/show-hub",
                    exact: !0,
                    component: K
                }, {
                    path: "/mockz/people-hub",
                    exact: !0,
                    component: G
                }, {
                    path: "/mockz/buffett",
                    exact: !0,
                    component: te
                }, {
                    path: "/mockz/search-results",
                    exact: !0,
                    component: Y
                }, {
                    path: "/mockz/search-no-results",
                    exact: !0,
                    component: Q
                }, {
                    path: "/mockz/buffett-slideshow",
                    exact: !0,
                    component: ee
                }, {
                    path: "/mockz/buffett-slideshow2",
                    exact: !0,
                    component: ne
                }, {
                    path: "/mockz/buffett-search-results",
                    exact: !0,
                    component: ae
                }, {
                    path: "/mockz/buffett-no-search-results",
                    exact: !0,
                    component: re
                }, {
                    path: "/mockz/buffett-clip-player",
                    exact: !0,
                    component: oe
                }, {
                    path: "/mockz/buffett-long-form-player",
                    exact: !0,
                    component: ue
                }, {
                    path: "/mockz/buffett-long-form-player-no-transcript",
                    exact: !0,
                    component: ie
                }, {
                    path: "/mockz/buffett-long-form-player-jumped",
                    exact: !0,
                    component: le
                }, {
                    path: "/mockz/buffett-article",
                    exact: !0,
                    component: de
                }, {
                    path: "/mockz/buffett-about",
                    exact: !0,
                    component: fe
                }, {
                    path: "/mockz/buffett-long-form-player-detail",
                    exact: !0,
                    component: ce
                }, {
                    path: "/mockz/buffett-video-states",
                    exact: !0,
                    component: se
                }, {
                    path: "/mockz/makeit-video-states",
                    exact: !0,
                    component: (0, o.default)({
                        loader: function() {
                            return new a.default(function(e) {
                                Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(50)]).then(function(n) {
                                    e(t(855))
                                }.bind(null, t)).catch(t.oe)
                            })
                        },
                        modules: ["../containers/MockPages/MakeItVideoStates"],
                        webpack: function() {
                            return [855]
                        },
                        loading: function() {
                            return r.default.createElement(u.default, null)
                        }
                    })
                }, {
                    path: "/mockz/video-states",
                    exact: !0,
                    component: J
                }, {
                    path: "/mockz/embed-player/:vid",
                    exact: !0,
                    component: f
                }, {
                    path: "/mockz/newsletters/:results",
                    component: _e
                }, {
                    path: "/mockz/newsletters",
                    exact: !0,
                    component: _e
                }, {
                    path: "/notfound",
                    exact: !0,
                    component: d
                }, {
                    path: "/buffett-not-found",
                    exact: !0,
                    component: Z
                }, {
                    path: "/mockz/buffett-demo",
                    exact: !0,
                    component: z
                }, {
                    path: "/mockz/buffett-video-demo",
                    exact: !0,
                    component: W
                }, {
                    path: "/mockz/buffett-homepage",
                    exact: !0,
                    component: te
                }, {
                    path: "/mockz/market-movers",
                    exact: !0,
                    component: Ae
                }, {
                    path: "/mockz/market-etfs",
                    exact: !0,
                    component: ve
                }, {
                    path: "/mockz/market-dashboard",
                    exact: !0,
                    component: be
                }, {
                    path: "/mockz/market-dashboard-watchlist",
                    exact: !0,
                    component: ye
                }, {
                    path: "/mockz/us-markets",
                    exact: !0,
                    component: Ie
                }, {
                    path: "/mockz/pre-markets",
                    exact: !0,
                    component: ge
                }, {
                    path: "/mockz/make-it-tos",
                    exact: !0,
                    component: (0, o.default)({
                        loader: function() {
                            return new a.default(function(e) {
                                Promise.all([t.e(2), t.e(4), t.e(5), t.e(6), t.e(0), t.e(3), t.e(1), t.e(64)]).then(function(n) {
                                    e(t(856))
                                }.bind(null, t)).catch(t.oe)
                            })
                        },
                        modules: ["../containers/MockPages/MakeItTerms"],
                        webpack: function() {
                            return [856]
                        },
                        loading: function() {
                            return r.default.createElement(u.default, null)
                        }
                    })
                }, {
                    path: "/pro-live-player",
                    exact: !0,
                    component: (0, o.default)({
                        loader: function() {
                            return new a.default(function(e) {
                                Promise.all([t.e(2), t.e(0), t.e(3), t.e(1), t.e(83)]).then(function(n) {
                                    e(t(857))
                                }.bind(null, t)).catch(t.oe)
                            })
                        },
                        modules: ["../containers/ProLivePlayer"],
                        webpack: function() {
                            return [857]
                        },
                        loading: function() {
                            return r.default.createElement(u.default, null)
                        }
                    })
                }, {
                    path: "*",
                    component: s
                }]
            }];
        n.default = Oe
    },
    136: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  id\n  brand\n  template\n  layout {\n    editable\n    columns {\n      span\n      editable\n      modules {\n        name\n        source\n        canChangeLayout\n        canChangeSource\n        serverRenderPolicy\n      }\n    }\n  }\n  type\n  title\n  seoTitle\n  premium\n  native\n  headline\n  tagName\n  tagNameFormatted\n  tagNameFormattedFull\n  slug\n  url\n  description\n  author {\n    id\n    name\n    tagName\n    tagNameFormatted\n  }\n  sourceOrganization {\n    id\n    slug\n    tagName\n    tagNameFormatted\n    tagNameFormattedFull\n  }\n  section {\n    id\n    headline\n    tagName\n    tagNameFormatted\n    tagNameFormattedFull\n    url\n    title\n    subType\n  }\n  projectTeamContent {\n    id\n    headline\n    tagName\n    tagNameFormatted\n    tagNameFormattedFull\n  }\n  relatedTagsFiltered {\n    id\n    headline\n    tagName\n    tagNameFormatted\n    tagNameFormattedFull\n    type\n  }\n  relatedTagsFilteredFormatted(isTruncated: true)\n  relatedTagsFilteredFormattedFull: relatedTagsFilteredFormatted\n  additionalSectionContent {\n    id\n    headline\n    tagName\n    tagNameFormatted\n    tagNameFormattedFull\n    type\n  }\n  additionalSectionContentFormatted(isTruncated: true)\n  additionalSectionContentFormattedFull: additionalSectionContentFormatted\n  relatedContent: relatedContentFiltered {\n    id\n    headline\n    tagName\n    tagNameFormatted\n    tagNameFormattedFull\n    type\n  }\n  datePublished\n  dateLastPublished\n  sectionHierarchy(isFiltered: true) {\n    id\n    tagName\n    tagNameFormatted\n    tagNameFormattedFull\n    order\n  }\n  sectionHierarchyFormatted(isFiltered: true, isTruncated: true)\n  sectionHierarchyFormattedFull: sectionHierarchyFormatted(isFiltered: true)\n  creatorOverwrite\n  projectContent {\n    id\n    headline\n    tagName\n    tagNameFormatted\n    tagNameFormattedFull\n  }\n  promoImage {\n    id\n    url\n  }\n  featuredMedia {\n    ... on image {\n      id\n      type\n      url\n    }\n    ... on cnbcvideo {\n      id\n      type\n      url\n      image {\n        url\n        id\n      }\n    }\n  }\n  projectTeamContentFormatted(isTruncated: true)\n  projectTeamContentFormattedFull: projectTeamContentFormatted\n  projectContentFormatted(isTruncated: true)\n  projectContentFormattedFull: projectContentFormatted\n  creatorOverwriteFormatted\n  sourceOrganizationFormatted(isTruncated: true)\n  sourceOrganizationFormattedFull: sourceOrganizationFormatted\n  authorFormatted(isTruncated: true)\n  authorFormattedFull: authorFormatted\n  dateFirstPublished\n  subDomain\n  liveURL\n  pageName\n  shortDatePublished\n  shortDateLastPublished\n  shortDateFirstPublished\n  vcpsId\n"
    },
    137: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on relatedTags {\n    id\n    native\n    relatedTags(count: 5) {\n      id\n      name\n      url\n    }\n    section {\n      id\n      color\n    }\n  }\n"
    },
    138: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  url\n  description\n  datePublished\n  dateLastPublished\n  headline\n  title\n  tagName\n  brand\n  sectionHierarchy(isFiltered: true) {\n    id\n    order\n    tagName\n  }\n  relatedTagsFiltered {\n    id\n    name\n    tagName\n  }\n  author {\n    id\n    name\n    tagName\n  }\n  publisher {\n    name\n    logo\n  }\n  additionalSectionContent {\n    id\n    type\n    tagName\n  }\n  promoImage {\n    id\n    url\n    height\n    width\n  }\n"
    },
    14: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.getVideoDataWithPosition = function(e) {
            return {
                type: a,
                payload: e
            }
        }, n.getVideoIsPreloader = function(e) {
            return {
                type: r,
                payload: e
            }
        }, n.setPlayerInfo = function(e) {
            return {
                type: o,
                payload: e
            }
        }, n.setEventsInfo = function(e) {
            return {
                type: u,
                payload: e
            }
        }, n.setTranscriptInfo = function(e) {
            return {
                type: i,
                payload: e
            }
        }, n.setPlaceholderState = function(e) {
            return {
                type: l,
                payload: e
            }
        }, n.setVideoRecommendationState = function(e) {
            return {
                type: d,
                payload: e
            }
        }, n.setVideoEndCardState = function(e) {
            return {
                type: c,
                payload: e
            }
        }, n.continuousPlayState = function(e) {
            return {
                type: s,
                payload: e
            }
        }, n.setVideoPlayBackInitiative = function(e) {
            return {
                type: f,
                payload: e
            }
        }, n.addVideoNIDs = function(e) {
            return {
                type: _,
                id: e
            }
        };
        var a = n.videoDataWithPosition = "VideoDataWithPosition",
            r = n.videoIsPreloader = "VideoIsPreloader",
            o = n.SET_PLAYER_INFO = "SET_PLAYER_INFO",
            u = n.SET_EVENTS_INFO = "SET_EVENTS_INFO",
            i = n.SET_TRANSCRIPT_INFO = "SET_TRANSCRIPT_INFO",
            l = n.SET_PLACEHOLDER_STATE = "SET_PLACEHOLDER_STATE",
            d = (n.SET_ENDCARD_STATE = "SET_ENDCARD_STATE", n.SET_VIDEO_RECOMMENDATION_STATE = "SET_VIDEO_RECOMMENDATION_STATE"),
            c = n.SET_VIDEO_ENDCARD_STATE = "SET_VIDEO_ENDCARD_STATE",
            s = n.SET_CONTINUOUS_PLAY_STATE = "SET_CONTINUOUS_PLAY_STATE",
            f = n.SET_VIDEO_PLAYBACK_INITIATIVE = "SET_VIDEO_PLAYBACK_INITIATIVE",
            _ = n.ADD_VIDEO_NIDS = "ADD_VIDEO_NIDS";
        n.playerLayoutStates = {
            UNDEFINED: "UNDEFINED",
            HIDDEN: "HIDDEN",
            INLINE: "INLINE",
            INLINE_TO_STICKY_1_INLINE_FIXED: "INLINE_TO_STICKY_1_INLINE_FIXED",
            INLINE_TO_STICKY_2_TRANSITION: "INLINE_TO_STICKY_2_TRANSITION",
            INLINE_END_CARD_WITH_TIMER: "INLINE_END_CARD_WITH_TIMER",
            STICKY: "STICKY",
            STICKY_END_CARD: "STICKY_END_CARD",
            INLINE_END_CARD_TIMER_DISMISSED: "INLINE_END_CARD_TIMER_DISMISSED",
            STICKY_TO_INLINE_1_STICKY_FADE_OUT: "STICKY_TO_INLINE_1_STICKY_FADE_OUT",
            STICKY_TO_INLINE_2_INLINE_TRANSPARENT: "STICKY_TO_INLINE_2_INLINE_TRANSPARENT",
            STICKY_TO_INLINE_SCROLL: "STICKY_TO_INLINE_SCROLL",
            STICKY_TO_INLINE_PAUSED_1_SLIDE_OUT: "STICKY_TO_INLINE_PAUSED_1_SLIDE_OUT",
            STICKY_TO_INLINE_PAUSED_2_INLINE_FADE_IN: "STICKY_TO_INLINE_PAUSED_2_INLINE_FADE_IN",
            ABOVE_FOOTER: "ABOVE_FOOTER",
            ABOVE_FOOTER_END_CARD: "ABOVE_FOOTER_END_CARD",
            ABOVE_FOOTER_TO_DISMISS_1_ABSOLUTE: "ABOVE_FOOTER_TO_DISMISS_1_ABSOLUTE",
            ABOVE_FOOTER_TO_DISMISS_2_SLIDE_OUT: "ABOVE_FOOTER_TO_DISMISS_2_SLIDE_OUT"
        }, n.playerLayoutActions = {
            START_PLAYBACK: "START_PLAYBACK",
            LEAVE_VIEWPORT: "LEAVE_VIEWPORT",
            ENTER_VIEWPORT: "ENTER_VIEWPORT",
            TRANSITION_BEGIN: "TRANSITION_BEGIN",
            TRANSITION_COMPLETE: "TRANSITION_COMPLETE",
            BACK_TO_TOP: "BACK_TO_TOP",
            DISMISS: "DISMISS",
            COMPLETE_PLAYBACK: "COMPLETE_PLAYBACK",
            ATTACH_TO_FOOTER: "ATTACH_TO_FOOTER",
            DETACH_FROM_FOOTER: "DETACH_FROM_FOOTER"
        }, n.placeholderStates = {
            INITIAL: "INITIAL",
            PLAYBACK: "PLAYBACK",
            END_CARD: "END_CARD"
        }, n.recommendationWorkflowStates = {
            UNDEFINED: "UNDEFINED",
            INITIAL: "INITIAL",
            REQUEST_IN_PROGRESS: "REQUEST_IN_PROGRESS",
            REQUEST_ERROR: "REQUEST_ERROR",
            REQUEST_COMPLETE: "REQUEST_COMPLETE",
            RECOMMENDATION_OFFERED: "RECOMMENDATION_OFFERED",
            RECOMMENDATION_ACCEPTED: "RECOMMENDATION_ACCEPTED",
            RECOMMENDATION_DISMISSED: "RECOMMENDATION_DISMISSED",
            RECOMMENDATION_INACTIVE: "RECOMMENDATION_INACTIVE"
        }, n.recommendationWorkflowActions = {
            SUBMIT_REQUEST: "SUBMIT_REQUEST",
            RECEIVE_ERROR: "RECEIVE_ERROR",
            RECEIVE_RESPONSE: "RECEIVE_RESPONSE",
            OFFER_RECOMMENDED_VIDEO: "OFFER_RECOMMENDED_VIDEO",
            PLAY_RECOMMENDED_VIDEO: "PLAY_RECOMMENDED_VIDEO",
            DISMISS_RECOMMENDED_VIDEO: "DISMISS_RECOMMENDED_VIDEO",
            RESET_RECOMMENDATION: "RESET_RECOMMENDATION",
            RELOAD_RECOMMENDATION: "RELOAD_RECOMMENDATION"
        }
    },
    140: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(28),
            o = (a = r) && a.__esModule ? a : {
                default: a
            };
        n.isEmptyObject = function(e) {
            return !(0, o.default)(e || {}).length
        }, n.subclass = function(e, n) {
            function t() {}
            t.prototype = e.prototype, n.prototype = new t, t.prototype = null, n.prototype.constructor = n, n.prototype.super = e
        }
    },
    146: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.fetchMarketTableDataIfNeeded = n.invalidateMarketTable = n.INVALIDATE_GDS_MARKET_TABLE_DATA = n.RECEIVE_GDS_MARKET_TABLE_DATA = n.REQUEST_GDS_MARKET_TABLE_DATA = void 0;
        var a, r = t(191),
            o = (a = r) && a.__esModule ? a : {
                default: a
            };
        var u = n.REQUEST_GDS_MARKET_TABLE_DATA = "REQUEST_GDS_MARKET_TABLE_DATA",
            i = n.RECEIVE_GDS_MARKET_TABLE_DATA = "RECEIVE_GDS_MARKET_TABLE_DATA",
            l = n.INVALIDATE_GDS_MARKET_TABLE_DATA = "INVALIDATE_GDS_MARKET_TABLE_DATA",
            d = (n.invalidateMarketTable = o.default.makeBasicAction(l), o.default.makeBasicAction(u)),
            c = o.default.makeReceiveAction(i, "table"),
            s = o.default.makeFetchAction(d, c),
            f = o.default.makeShouldFetchAction("dataByGDSMarketTable");
        n.fetchMarketTableDataIfNeeded = o.default.makeFetchIfNeededAction(f, s)
    },
    147: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = n.ADD_QUOTE_SEARCH = "ADD_QUOTE_SEARCH";
        n.addQuoteSearch = function(e) {
            return {
                type: a,
                quote: e
            }
        }
    },
    148: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.PROGRESS_CONSTANTS = n.PLAYER_EVENT_NAMES = n.PLAYBACK_STATUS = n.LOADING_STATUS = n.VIDEO_PLACEHOLDER_ACTIONS = void 0, n.setActiveVideoPlaceholder = function(e) {
            return {
                type: r.SET_ACTIVE_PLACEHOLDER,
                videoPlaceholderKey: e
            }
        }, n.setVideoPlaceholderXyPosition = function(e, n) {
            return {
                type: r.SET_XY_POSITION,
                videoPlaceholderKey: e,
                xyPosition: n
            }
        }, n.setVideoPlaceholderPlaybackPosition = function(e, n) {
            return {
                type: r.SET_PLAYBACK_POSITION,
                videoPlaceholderKey: e,
                playbackPosition: n
            }
        }, n.setVideoPlaceholderPlaybackStatus = function(e, n) {
            return {
                type: r.SET_PLAYBACK_STATUS,
                videoPlaceholderKey: e,
                playbackStatus: n
            }
        }, n.setVideoPlaceholderDocked = function(e, n) {
            return {
                type: r.SET_DOCKED,
                videoPlaceholderKey: e,
                docked: n
            }
        }, n.setVideoPlaceholderVideo = u, n.loadVideoPlaceholderVideo = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.loadVideoById,
                t = e.videoPlaceholderKey,
                r = e.videoId,
                l = e.gqlClient;
            return function(e) {
                return e(i(t, o.IN_PROGRESS)), n(r, l).then(function(n) {
                    e(i(t, o.COMPLETE)), e(u(t, n))
                }).catch(function(n) {
                    e(i(t, o.ERROR)), e(u(t, n))
                })
            }
        };
        var a = t(266),
            r = n.VIDEO_PLACEHOLDER_ACTIONS = {
                SET_ACTIVE_PLACEHOLDER: "SET_ACTIVE_PLACEHOLDER",
                SET_VIDEO: "PLACEHOLDER_SET_VIDEO",
                SET_LOADING_STATUS: "PLACEHOLDER_SET_LOADING_STATUS",
                SET_XY_POSITION: "PLACEHOLDER_SET_XY_POSITION",
                SET_PLAYBACK_POSITION: "PLACEHOLDER_SET_PLAYBACK_POSITION",
                SET_PLAYBACK_STATUS: "PLACEHOLDER_SET_PLAYBACK_STATUS",
                SET_DOCKED: "PLACEHOLDER_SET_DOCKED"
            },
            o = n.LOADING_STATUS = {
                IN_PROGRESS: "IN_PROGRESS",
                ERROR: "ERROR",
                COMPLETE: "COMPLETE"
            };
        n.PLAYBACK_STATUS = {
            PLAYING: "PLAYING",
            COMPLETE: "COMPLETE"
        }, n.PLAYER_EVENT_NAMES = {
            AD_COMPLETE: "videoAdComplete",
            AD_PAUSE: "videoAdPause",
            AD_PLAY: "videoAdStart",
            VIDEO_BEFORE_PLAY: "",
            VIDEO_BUFFERING: "videoBuffer",
            VIDEO_COMPLETE: "videoComplete",
            VIDEO_FIRST_FRAME: "videoStart",
            VIDEO_FULLSCREEN: "videoFullscreen",
            VIDEO_PAUSE: "videoPause",
            VIDEO_PAUSE_EXTERNAL: "videoPauseExternal",
            VIDEO_PLAY: "videoResume",
            VIDEO_SEEK: "videoSeek",
            VIDEO_SEEKED: "videoSeek",
            VIDEO_TIME25: "videoClip25",
            VIDEO_TIME50: "videoClip50",
            VIDEO_TIME75: "videoClip75"
        }, n.PROGRESS_CONSTANTS = {
            IS25: "is25",
            IS50: "is50",
            IS75: "is75"
        };

        function u(e, n) {
            return {
                type: r.SET_VIDEO,
                videoPlaceholderKey: e,
                video: n
            }
        }

        function i(e, n) {
            return {
                type: r.SET_LOADING_STATUS,
                videoPlaceholderKey: e,
                loadingStatus: n
            }
        }
    },
    149: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.LOADING_STATUS = n.relatedVideosActions = void 0, n.loadRelatedVideos = function(e, n) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.getRecommendations,
                i = n.provider,
                l = n.count,
                d = n.id,
                c = n.url,
                s = n.gqlClient;
            return function(n) {
                return n(u(e, o.IN_PROGRESS)), t({
                    count: l,
                    id: d,
                    url: c,
                    provider: i
                }, {
                    gqlClient: s
                }).then(function(t) {
                    n(u(e, o.COMPLETE)), n(function(e, n) {
                        return {
                            type: r.SET_RELATED_VIDEOS,
                            queryKey: e,
                            videos: n
                        }
                    }(e, t))
                }).catch(function(t) {
                    n(u(e, o.ERROR)), n(function(e, n) {
                        return {
                            type: r.SET_RELATED_VIDEOS_ERROR,
                            queryKey: e,
                            error: n
                        }
                    }(e, t))
                })
            }
        };
        var a = t(260),
            r = n.relatedVideosActions = {
                SET_RELATED_VIDEOS_STATUS: "SET_RELATED_VIDEOS_STATUS",
                SET_RELATED_VIDEOS: "SET_RELATED_VIDEOS",
                SET_RELATED_VIDEOS_ERROR: "SET_RELATED_VIDEOS_ERROR"
            },
            o = n.LOADING_STATUS = {
                IN_PROGRESS: "IN_PROGRESS",
                ERROR: "ERROR",
                COMPLETE: "COMPLETE"
            };

        function u(e, n) {
            return {
                type: r.SET_RELATED_VIDEOS_STATUS,
                queryKey: e,
                status: n
            }
        }
    },
    15: function(e, n, t) {
        "use strict";
        var a = u(t(5)),
            r = u(t(6)),
            o = "function" == typeof r.default && "symbol" == typeof a.default ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
            };

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.PhoenixConfig = n.default = void 0;
        var i, l, d = _(t(7)),
            c = _(t(8)),
            s = _(t(9)),
            f = _(t(171));

        function _(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var p = 3e3,
            E = f.default.HOST_TIER,
            h = {
                ADUNITS: {
                    client: !0
                },
                AD_VIEWABILITY_TIMEOUT: {
                    client: !0
                },
                ALERTS_POLL_INTERVAL: {
                    client: !0
                },
                BOXINLINE_INSERT_AT: {
                    client: !0
                },
                BOXINLINE_LIMIT: {
                    client: !0
                },
                BRAND_DOMAIN_WHITELIST: {},
                BUFFETT_BASE: {
                    client: !0
                },
                BUFFETT_404_PATH: {},
                CNBC_BASE: {
                    client: !0
                },
                CNBC_404_PATH: {},
                DEAL_OR_NO_DEAL_BASE: {
                    client: !0
                },
                DEAL_OR_NO_DEAL_404_PATH: {},
                DEFAULT_BUFFETT_FALLBACK_IMAGE: {
                    client: !0
                },
                DEFAULT_CNBC_FALLBACK_IMAGE: {
                    client: !0
                },
                DEFAULT_IMAGE: {
                    client: !0
                },
                DEFAULT_LOGO: {
                    client: !0
                },
                DEFAULT_META_KEYWORDS: {
                    client: !0
                },
                "env.config": {},
                GDS_API_URLS: {
                    client: !0
                },
                GIGYA_APIKEY: {
                    client: !0
                },
                GIGYA_SOCIALIZE_URL: {
                    client: !0
                },
                GRAPHQL_CACHING: {},
                HOMEPAGE_REFRESH_RATE_IN_MINUTES: {
                    client: !0
                },
                JSON_LD_CONFIG: {
                    client: !0
                },
                JW_COMSCORE_PLUGIN_URL: {
                    client: !0
                },
                JW_LIB_URL: {
                    client: !0
                },
                JW_NEWRELIC_PLUGIN_URL: {
                    client: !0
                },
                LEGACY_LIVESTREAM_URL: {
                    client: !0
                },
                LOG_TYPES_ENABLED: {},
                MAKEIT_BASE: {
                    client: !0
                },
                MAKEIT_HOSTNAME_PREFIX: {},
                MAKEIT_LIVE: {
                    client: !0
                },
                MARKET_MOVER_API: {
                    client: !0
                },
                MIDRESPONSIVE_INSERT_AT: {
                    client: !0
                },
                MIDRESPONSIVE_LIMIT: {
                    client: !0
                },
                MPS_BRAND_SITES: {
                    client: !0
                },
                MPS_HOST: {
                    client: !0
                },
                NODE_ENV: {
                    client: !0
                },
                PATH_OVERRIDE: {
                    client: !0
                },
                PHOENIXQL_PERQ: {
                    client: !0
                },
                PHOENIXQL_URI: {
                    client: !0
                },
                PIANO_AID: {
                    client: !0
                },
                PIANO_URI: {
                    client: !0
                },
                PORT: {},
                QUOTES_URL: {
                    client: !0
                },
                QUERYLY_URI: {
                    client: !0
                },
                REDIS_AUTH: {
                    protected: !0
                },
                REDIS_DATABASE_INDEX: {},
                REDIS_HOST: {},
                REDIS_PORT: {},
                REDIS_SENTINEL: {
                    protected: !0
                },
                REDIS_REFETCHING_FLAG_IN_CACHE: {},
                REDIS_SOFT_TTL_DURATION: {},
                REDIS_TTL: {},
                REGISTER_BASE: {
                    client: !0
                },
                STATIC_HOST: {
                    client: !0
                },
                SURF_KEY: {
                    protected: !0,
                    client: !0
                },
                SURF_URI: {
                    client: !0
                },
                SPOTLIGHT_ID: {
                    client: !0
                },
                VIDEO_RECOMMEDATION_ENDCARD_ENGINE: {
                    client: !0
                },
                WEBPACK_HOST: {},
                WEBPACK_PORT: {}
            },
            m = (l = i = function(e) {
                function n(e) {
                    ! function(e, n) {
                        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var t = function(e, n) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !n || "object" !== (void 0 === n ? "undefined" : o(n)) && "function" != typeof n ? e : n
                    }(this, (n.__proto__ || (0, s.default)(n)).call(this, e, h));
                    return t.get("PORT") || (t.properties.PORT = p), t
                }
                return function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === n ? "undefined" : o(n)));
                    e.prototype = (0, c.default)(n && n.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), n && (d.default ? (0, d.default)(e, n) : e.__proto__ = n)
                }(n, f.default), n
            }(), i.HOST_TIER = E, l),
            T = new m(Object({
                ADUNITS: "Top Banner|Box Rail|Box Inline|Logo|Mid Responsive|Countdown Clock|Sponsor Logo|Native Ultra Dense|Native Three Up|Native Ticker|Box Search",
                AD_VIEWABILITY_TIMEOUT: "2000",
                ALERTS_POLL_INTERVAL: "15000",
                BOXINLINE_INSERT_AT: "2",
                BOXINLINE_LIMIT: "3",
                BUFFETT_BASE: "//buffett.cnbc.com",
                CNBC_BASE: "//www.cnbc.com",
                DEAL_OR_NO_DEAL_BASE: "//dealornodeal.cnbc.com",
                DEFAULT_BUFFETT_FALLBACK_IMAGE: "https://image.cnbcfm.com/api/v1/image/105092273-_Y2A4445.JPG?v=1522164661&w=600",
                DEFAULT_CNBC_FALLBACK_IMAGE: "https://image.cnbcfm.com/api/v1/image/105092322-CNBC-missing-img.jpg?v=1522165093",
                DEFAULT_IMAGE: "https://sc.cnbcfm.com/applications/cnbc.com/resources/img/editorial/2015/03/30/102546467-Most-Popular--Image-Placeholder-Large.jpg",
                DEFAULT_LOGO: '{"cnbc":"https://sc.cnbcfm.com/applications/cnbc.com/staticcontent/img/cnbc_logo.gif?v=1524171804","makeit":"https://sc.cnbcfm.com/applications/cnbc.com/staticcontent/img/cnbc_logo.gif?v=1524171804","buffett":"https://image.cnbcfm.com/api/v1/image/105144400-WBA-OG-Tag.jpg?v=1524171804"}',
                DEFAULT_META_KEYWORDS: '["business news"]',
                GDS_API_URLS: '{"VOLUME" : "//gdsapi.cnbc.com/market-mover/groupMover/EXCH_US/VOLUME/TOP/5.json?delayed=false&partnerId=2","PCT_10_VOL": "//gdsapi.cnbc.com/market-mover/groupMover/EXCH_US/PCT_10_VOL/TOP/5.json?delayed=false&filterProperty=VOLUME&filterValue=1000000&filterOperator=GREATER&partnerId=2"}',
                GIGYA_APIKEY: "2_Jx5rsFp18pauXYlKGzHQVpbahcR1iJ30bbyfqZsn69A6vbt3dQ7gYFCESWKMM1sP",
                GIGYA_SOCIALIZE_URL: "//cdns.gigya.com/JS/socialize.js",
                HOMEPAGE_REFRESH_RATE_IN_MINUTES: "0",
                JSON_LD_CONFIG: '{"404":{"schemaType":"WebPage","keywords":["404"]},"405":{"schemaType":"WebPage","keywords":["404"]},"cnbcnewsstory":{"schemaType":"NewsArticle","keywords":["Articles"]},"sponsored":{"schemaType":"NewsArticle","keywords":["Articles","Sponsored"]},"blogpost":{"schemaType":"NewsArticle","keywords":["Articles"]},"wirestory":{"schemaType":"NewsArticle","keywords":["Articles"]},"partnerstory":{"schemaType":"NewsArticle","keywords":["Articles"]},"pressrelease":{"schemaType":"NewsArticle","keywords":["Articles"]},"slideshow":{"schemaType":"NewsArticle","keywords":["Articles"]},"cnbcvideo":{"schemaType": "NewsArticle","keywords": ["Videos"]},"franchise":{"schemaType":"WebPage"},"section":{"schemaType":"WebPage"}}',
                JW_COMSCORE_PLUGIN_URL: "https://sb.scorecardresearch.com/c2/plugins/streamingtag_plugin_jwplayer.js",
                JW_LIB_URL: "https://sc.cnbcfm.com/applications/cnbc.com/staticcontent/scripts/libraries/JW/jwplayer-unlimited-8.2.3/jwplayer.js",
                JW_NEWRELIC_PLUGIN_URL: "https://sc.cnbcfm.com/applications/cnbc.com/staticcontent/scripts/libraries/JW/newrelic-video-jwplayer.min.js",
                LEGACY_LIVESTREAM_URL: "https://www.cnbc.com/plain-live-player",
                MAKEIT_BASE: "//makeit.cnbc.com",
                MAKEIT_LIVE: "on",
                MARKET_MOVER_API: "https://gdsapi.cnbc.com/market-mover/groupMover",
                MIDRESPONSIVE_INSERT_AT: "7",
                MIDRESPONSIVE_LIMIT: "8",
                MPS_BRAND_SITES: '{"cnbc":"cnbc-web","buffett":"cnbc-buffett","dealornodeal":"cnbc-web","makeit":"cnbc-web"}',
                MPS_HOST: "mps.cnbc.com",
                NODE_ENV: "production",
                PATH_OVERRIDE: '{"/":{"cnbc":"/us-top-news-and-analysis/","buffett":"/warren-buffett-archive/","dealornodeal":"/deal-or-no-deal-homepage/","makeit":"/makeit/"},"/world/": {"cnbc":"/world-top-news/"}}',
                PHOENIXQL_PERQ: "on",
                PHOENIXQL_URI: "//webql-redesign.cnbcfm.com/graphql",
                PIANO_AID: "o19WonOrHQ",
                PIANO_URI: "https://dashboard.tinypass.com",
                QUOTES_URL: "https://www.cnbc.com/quotes/?symbol=",
                QUERYLY_URI: '{"cnbc": "//fm.cnbc.com/applications/cnbc.com/resources/search/cnbc-search-v2.js", "buffett": "//fm.cnbc.com/applications/cnbc.com/resources/search/buffett-search-prod.js?v=1", "makeit": "//www.queryly.com/js/cnbcbuffett_queryly_search_prod.js"}',
                REGISTER_BASE: "https://register.cnbc.com",
                STATIC_HOST: "https://static-redesign.cnbcfm.com",
                SURF_KEY: "cnbc",
                SURF_URI: "https://surf.nbcuni.com/rdk/surf.js.php",
                SPOTLIGHT_ID: "105230164",
                VIDEO_RECOMMEDATION_ENDCARD_ENGINE: "vilynx"
            }));
        n.default = T, n.PhoenixConfig = m
    },
    150: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.FETCH_MENU_ERROR = n.FETCH_MENU_SUCCESS = n.FETCH_MENU_START = void 0;
        var a = i(t(23)),
            r = i(t(35));
        n.fetchMenu = function() {
            var e = this,
                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = n.client,
                i = n.brand,
                d = n.region,
                f = void 0 === d ? "USA" : d;
            return _ = r.default.mark(function n(a) {
                    var d, _, p, E;
                    return r.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a({
                                    type: l
                                }), e.prev = 1, "web", d = {
                                    brand: i,
                                    product: "web",
                                    region: f
                                }, e.next = 6, u.default.getQueryData({
                                    client: t,
                                    query: o.default,
                                    type: "menu",
                                    variables: d
                                });
                            case 6:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 9;
                                    break
                                }
                                e.t0 = {};
                            case 9:
                                return _ = e.t0, p = _.data || {}, E = p.menu, e.abrupt("return", a(s({
                                    menu: E
                                })));
                            case 14:
                                return e.prev = 14, e.t1 = e.catch(1), console.log("ERROR FETCHING MENU:: ", e.t1), e.abrupt("return", a((n = {
                                    errors: e.t1.graphQLErrors
                                }, r = void 0, r = n.errors, {
                                    type: c,
                                    errors: r
                                })));
                            case 18:
                            case "end":
                                return e.stop()
                        }
                        var n, r
                    }, n, e, [
                        [1, 14]
                    ])
                }), p = function() {
                    var e = _.apply(this, arguments);
                    return new a.default(function(n, t) {
                        return function r(o, u) {
                            try {
                                var i = e[o](u),
                                    l = i.value
                            } catch (e) {
                                return void t(e)
                            }
                            if (!i.done) return a.default.resolve(l).then(function(e) {
                                r("next", e)
                            }, function(e) {
                                r("throw", e)
                            });
                            n(l)
                        }("next")
                    })
                },
                function(e) {
                    return p.apply(this, arguments)
                };
            var _, p
        };
        var o = i(t(255)),
            u = i(t(87));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = n.FETCH_MENU_START = "FETCH_MENU_START",
            d = n.FETCH_MENU_SUCCESS = "FETCH_MENU_SUCCESS",
            c = n.FETCH_MENU_ERROR = "FETCH_MENU_ERROR";

        function s(e) {
            var n = e.menu;
            return {
                type: d,
                menu: n
            }
        }
    },
    151: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = n.SAILTHRU_LOADED = "SAILTHRU_LOADED";
        n.sailthruLoaded = function() {
            return {
                type: a
            }
        }
    },
    164: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t(79),
            r = i(t(299)),
            o = i(t(165)),
            u = t(88);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = "undefined" != typeof window;
            return (0, a.createStore)(o.default, n && window[u.WINDOW_STORE_VAR] || e, (0, a.compose)((0, a.applyMiddleware)(r.default), n && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : function(e) {
                return e
            }))
        }
    },
    165: function(e, n, t) {
        "use strict";
        var a = t(79),
            r = t(300),
            o = t(166),
            u = t(169),
            i = D(t(172)),
            l = D(t(173)),
            d = D(t(174)),
            c = D(t(175)),
            s = D(t(176)),
            f = D(t(177)),
            _ = D(t(178)),
            p = D(t(179)),
            E = D(t(180)),
            h = D(t(181)),
            m = D(t(182)),
            T = D(t(183)),
            v = D(t(184)),
            A = D(t(185)),
            b = D(t(186)),
            y = D(t(187)),
            I = D(t(188)),
            g = D(t(190)),
            O = D(t(192)),
            S = D(t(254)),
            N = D(t(256)),
            P = D(t(257)),
            L = D(t(258)),
            R = D(t(259)),
            M = D(t(265));

        function D(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = (0, a.combineReducers)({
            routing: r.routerReducer,
            navStatus: A.default,
            dataByMarketBanner: o.dataByMarketBanner,
            selectedMarketBanner: o.selectedMarketBanner,
            dataByMarketMover: u.dataByMarketMover,
            videoDataWithPosition: i.default,
            videoIsPreloader: l.default,
            videoPlayerInfo: d.default,
            videoEventsInfo: c.default,
            videoTranscriptInfo: s.default,
            placeholderInfo: f.default,
            videoRecommendationInfo: _.default,
            videoEndCardInfo: p.default,
            continuousPlayInfo: E.default,
            playBackInitiativeInfo: h.default,
            dataByMarketTable: m.default,
            dataByQuote: T.default,
            quoteSearches: v.default,
            xfinity: b.default,
            authentication: y.default,
            metaTags: I.default,
            dataByGDSMarketTable: g.default,
            page: O.default,
            menu: S.default,
            request: N.default,
            sailthru: P.default,
            viewMode: L.default,
            relatedVideos: R.default,
            videoPlaceholders: M.default
        })
    },
    166: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = u(t(2)),
            r = u(t(3));
        n.selectedMarketBanner = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                n = arguments[1];
            switch (n.type) {
                case o.SELECT_MARKET_BANNER:
                    return n.market;
                default:
                    return e
            }
        }, n.marketBannerData = i, n.dataByMarketBanner = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = arguments[1];
            switch (n.type) {
                case o.INVALIDATE_MARKET_BANNER:
                case o.RECEIVE_MARKET_BANNER_DATA:
                case o.REQUEST_MARKET_BANNER_DATA:
                    return (0, r.default)({}, e, function(e, n, t) {
                        n in e ? (0, a.default)(e, n, {
                            value: t,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = t;
                        return e
                    }({}, n.market, i(e[n.market], n)));
                default:
                    return e
            }
        };
        var o = t(125);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    isFetching: !1,
                    didInvalidate: !1,
                    data: []
                },
                n = arguments[1];
            switch (n.type) {
                case o.INVALIDATE_MARKET_BANNER:
                    return (0, r.default)({}, e, {
                        didInvalidate: !0
                    });
                case o.REQUEST_MARKET_BANNER_DATA:
                    return (0, r.default)({}, e, {
                        isFetching: !0,
                        didInvalidate: !1
                    });
                case o.RECEIVE_MARKET_BANNER_DATA:
                    return (0, r.default)({}, e, {
                        isFetching: !1,
                        didInvalidate: !1,
                        data: n.marketData,
                        lastUpdated: n.receivedAt
                    });
                default:
                    return e
            }
        }
    },
    169: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = u(t(2)),
            r = u(t(3));
        n.selectedExchangeModule = l, n.dataByMarketMover = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = arguments[1];
            switch (n.type) {
                case o.INVALIDATE_MARKET_MODULE:
                case o.RECEIVE_MARKET_MOVER_DATA:
                case o.REQUEST_MARKET_MOVER_DATA:
                    return (0, r.default)({}, e, function(e, n, t) {
                        n in e ? (0, a.default)(e, n, {
                            value: t,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = t;
                        return e
                    }({}, n.exchangeSymbol, function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                isFetching: !1,
                                didInvalidate: !1,
                                data: {
                                    gainers: [],
                                    decliners: []
                                }
                            },
                            n = arguments[1];
                        switch (n.type) {
                            case o.INVALIDATE_MARKET_MODULE:
                                return (0, r.default)({}, e, {
                                    didInvalidate: !0
                                });
                            case o.REQUEST_MARKET_MOVER_DATA:
                                return (0, r.default)({}, e, {
                                    isFetching: !0,
                                    didInvalidate: !1
                                });
                            case o.RECEIVE_MARKET_MOVER_DATA:
                                return (0, r.default)({}, e, {
                                    isFetching: !1,
                                    didInvalidate: !1,
                                    data: {
                                        gainers: n.marketData.TOP || [],
                                        decliners: n.marketData.BOTTOM || []
                                    },
                                    lastUpdated: n.receivedAt,
                                    exchangeSymbol: n.exchangeSymbol
                                });
                            default:
                                return e
                        }
                    }(e[n.exchangeSymbol], n)));
                case o.SELECT_EXCHANGE_NAME:
                    return (0, r.default)({}, e, {
                        exchangeSymbol: l(e, n)
                    });
                default:
                    return e
            }
        };
        var o = t(126);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = "SP500";

        function l() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
                n = arguments[1];
            switch (n.type) {
                case o.SELECT_EXCHANGE_NAME:
                    return n.exchangeSymbol;
                default:
                    return e
            }
        }
    },
    170: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = r(t(64));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = r(t(15)).default.getProperties().MARKET_MOVER_API;
        n.default = {
            makeBasicAction: function(e) {
                return function(n) {
                    return {
                        type: e,
                        exchangeSymbol: n
                    }
                }
            },
            makeReceiveAction: function(e) {
                return function(n) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        a = n && n.rankedSymbolList || [],
                        r = {};
                    a.forEach(function(e) {
                        r[e.rankOrder] = e.rankedSymbols
                    });
                    var o = {
                        type: e,
                        marketData: r,
                        receivedAt: Date.now()
                    };
                    return t && (o.exchangeSymbol = t), o
                }
            },
            makeFetchAction: function(e, n) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "SP500",
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5;
                    return function(u) {
                        u(e(t));
                        var i = o + "/" + t + "/CHANGE_PCT/BOTH/" + r + ".json?partnerId=2";
                        return (0, a.default)(i).then(function(e) {
                            return e.json()
                        }).then(function(e) {
                            return u(n(e, t))
                        })
                    }
                }
            },
            makeShouldFetchAction: function(e) {
                return function(n) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (t) {
                        var a = n[e][t];
                        return !a || !a.isFetching
                    }
                    return !n[e] || !n[e].isFetching
                }
            },
            makeFetchIfNeededAction: function(e, n) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5;
                    return function(r, o) {
                        return !!e(o(), t) && r(t ? n(t, a) : n(a))
                    }
                }
            }
        }
    },
    171: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r, o = s(t(2)),
            u = s(t(40)),
            i = s(t(3)),
            l = s(t(28)),
            d = function() {
                function e(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var a = n[t];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, o.default)(e, a.key, a)
                    }
                }
                return function(n, t, a) {
                    return t && e(n.prototype, t), a && e(n, a), n
                }
            }(),
            c = i.default || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            };

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var f = {
                dev: "development",
                qa: "qa",
                stage: "staging",
                prod: "production"
            },
            _ = function(e, n) {
                return (0, l.default)(n).reduce(function(n, t) {
                    return n[t] = e[t], n
                }, {})
            },
            p = function(e, n, t) {
                return (0, l.default)(n).reduce(function(a, r) {
                    var o = c({}, n[r]);
                    return t && !t(e, r, o) || (a[r] = o), a
                }, {})
            },
            E = (r = a = function() {
                function e(n, t) {
                    ! function(e, n) {
                        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.properties = {}, this.propertiesMeta = {};
                    var a = n || {};
                    this.propertiesMeta = p(a, t), this.properties = _(a, this.propertiesMeta);
                    var r, o = (r = a.HOST_TIER || a.NODE_ENV, /^prod/i.test(r) ? f.prod : /^sta?g/i.test(r) ? f.stage : /^adops/i.test(r) ? f.stage : /^qa/i.test(r) ? f.qa : f.dev);
                    this.properties["host.tier"] = o, this.properties["host.isSplunkEnv"] = Boolean(this.get("SPLUNK_TOKEN")) && Boolean(this.get("SPLUNK_HOST")), this.properties["host.isPreRelease"] = o !== e.HOST_TIER.prod
                }
                return d(e, [{
                    key: "get",
                    value: function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            t = e in this.properties ? this.properties[e] : null;
                        return null != t ? t : n
                    }
                }, {
                    key: "getProperties",
                    value: function(e) {
                        if (!e) return (0, i.default)({}, this.properties);
                        var n = this.properties,
                            t = this.propertiesMeta;
                        return (0, l.default)(n).reduce(function(a, r) {
                            var o = e(r, n[r], t[r]);
                            return o && (a[o.name] = o.value), a
                        }, {})
                    }
                }]), e
            }(), a.HOST_TIER = f, a.createFilterToRedact = function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return function(n, t, a) {
                    var r = null == t ? "" : t;
                    if ("" === r) return e ? null : {
                        name: n,
                        value: t
                    };
                    var o = null != a && a.protected;
                    return o && (r = "function" == typeof o ? o(r) : "[NOT SHOWN]"), {
                        name: n,
                        value: r
                    }
                }
            }, a.filterForClientProperties = function(e, n, t) {
                if (null != t && "client" in t && Boolean(t.client)) {
                    var a = null == n ? "" : n;
                    return {
                        name: e,
                        value: (0, u.default)(a)
                    }
                }
                return null
            }, r);
        n.default = E
    },
    172: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(3),
            o = ((a = r) && a.__esModule ? a : {
                default: a
            }).default || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            };
        n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
                n = arguments[1];
            switch (n.type) {
                case u.videoDataWithPosition:
                    return o({}, e, n.payload);
                default:
                    return e
            }
        };
        var u = t(14);
        var i = {
            top: "-3000px",
            left: "-3000px",
            data: {},
            videoAttributes: {}
        }
    },
    173: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(3),
            o = ((a = r) && a.__esModule ? a : {
                default: a
            }).default || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            };
        n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
                n = arguments[1];
            switch (n.type) {
                case u.videoIsPreloader:
                    return o({}, e, n.payload);
                default:
                    return e
            }
        };
        var u = t(14);
        var i = {
            isPreloader: !0,
            autoPlay: !1,
            firstVideoClickedOnPage: !0
        }
    },
    174: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(3),
            o = ((a = r) && a.__esModule ? a : {
                default: a
            }).default || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            };
        n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
                n = arguments[1];
            switch (n.type) {
                case u.SET_PLAYER_INFO:
                    var t = void 0;
                    if (n.payload.trigger) {
                        var a = n.payload.trigger,
                            r = e.layout;
                        switch (e.layout) {
                            case u.playerLayoutStates.HIDDEN:
                                switch (a) {
                                    case u.playerLayoutActions.START_PLAYBACK:
                                        r = u.playerLayoutStates.INLINE
                                }
                                break;
                            case u.playerLayoutStates.INLINE_END_CARD_WITH_TIMER:
                                switch (a) {
                                    case u.playerLayoutActions.START_PLAYBACK:
                                    case u.playerLayoutActions.TRANSITION_COMPLETE:
                                        r = u.playerLayoutStates.INLINE;
                                        break;
                                    case u.playerLayoutActions.DISMISS:
                                        r = u.playerLayoutStates.INLINE_END_CARD_TIMER_DISMISSED;
                                        break;
                                    case u.playerLayoutActions.LEAVE_VIEWPORT:
                                        r = u.playerLayoutStates.STICKY_END_CARD
                                }
                                break;
                            case u.playerLayoutStates.STICKY_END_CARD:
                                switch (a) {
                                    case u.playerLayoutActions.START_PLAYBACK:
                                        r = u.playerLayoutStates.STICKY;
                                        break;
                                    case u.playerLayoutActions.ENTER_VIEWPORT:
                                        r = u.playerLayoutStates.INLINE_END_CARD_WITH_TIMER;
                                        break;
                                    case u.playerLayoutActions.ATTACH_TO_FOOTER:
                                        r = u.playerLayoutStates.ABOVE_FOOTER_END_CARD;
                                        break;
                                    case u.playerLayoutActions.DISMISS:
                                        r = u.playerLayoutStates.INLINE_END_CARD_TIMER_DISMISSED
                                }
                                break;
                            case u.playerLayoutStates.INLINE_END_CARD_TIMER_DISMISSED:
                                switch (a) {
                                    case u.playerLayoutActions.START_PLAYBACK:
                                        r = u.playerLayoutStates.INLINE
                                }
                                break;
                            case u.playerLayoutStates.ABOVE_FOOTER_END_CARD:
                                switch (a) {
                                    case u.playerLayoutActions.START_PLAYBACK:
                                        r = u.playerLayoutStates.ABOVE_FOOTER;
                                        break;
                                    case u.playerLayoutActions.DETACH_FROM_FOOTER:
                                        r = u.playerLayoutStates.STICKY_END_CARD;
                                        break;
                                    case u.playerLayoutActions.ENTER_VIEWPORT:
                                        r = u.playerLayoutStates.INLINE_END_CARD_WITH_TIMER;
                                        break;
                                    case u.playerLayoutActions.DISMISS:
                                        r = u.playerLayoutStates.INLINE_END_CARD_TIMER_DISMISSED
                                }
                                break;
                            case u.playerLayoutStates.INLINE:
                                switch (a) {
                                    case u.playerLayoutActions.LEAVE_VIEWPORT:
                                        r = u.playerLayoutStates.INLINE_TO_STICKY_1_INLINE_FIXED, t = u.playerLayoutStates.INLINE_TO_STICKY_2_TRANSITION;
                                        break;
                                    case u.playerLayoutActions.TRANSITION_COMPLETE:
                                        r = u.playerLayoutStates.INLINE;
                                        break;
                                    case u.playerLayoutActions.COMPLETE_PLAYBACK:
                                        r = u.playerLayoutStates.INLINE_END_CARD_WITH_TIMER;
                                        break;
                                    case u.playerLayoutActions.START_PLAYBACK:
                                        r = u.playerLayoutStates.INLINE
                                }
                                break;
                            case u.playerLayoutStates.INLINE_TO_STICKY_1_INLINE_FIXED:
                                switch (a) {
                                    case u.playerLayoutActions.TRANSITION_BEGIN:
                                        r = u.playerLayoutStates.INLINE_TO_STICKY_2_TRANSITION, t = u.playerLayoutStates.STICKY;
                                        break;
                                    case u.playerLayoutActions.COMPLETE_PLAYBACK:
                                        r = u.playerLayoutStates.STICKY_END_CARD;
                                        break;
                                    default:
                                        r = u.playerLayoutStates.STICKY
                                }
                                break;
                            case u.playerLayoutStates.INLINE_TO_STICKY_2_TRANSITION:
                                switch (a) {
                                    case u.playerLayoutActions.TRANSITION_COMPLETE:
                                        r = u.playerLayoutStates.STICKY;
                                        break;
                                    case u.playerLayoutActions.COMPLETE_PLAYBACK:
                                        r = u.playerLayoutStates.STICKY_END_CARD;
                                        break;
                                    default:
                                        r = u.playerLayoutStates.STICKY
                                }
                                break;
                            case u.playerLayoutStates.STICKY:
                                switch (a) {
                                    case u.playerLayoutActions.TRANSITION_COMPLETE:
                                        r = u.playerLayoutStates.STICKY;
                                        break;
                                    case u.playerLayoutActions.ENTER_VIEWPORT:
                                        r = u.playerLayoutStates.STICKY_TO_INLINE_1_STICKY_FADE_OUT, t = u.playerLayoutStates.STICKY_TO_INLINE_2_INLINE_TRANSPARENT;
                                        break;
                                    case u.playerLayoutActions.BACK_TO_TOP:
                                        r = u.playerLayoutStates.STICKY_TO_INLINE_SCROLL;
                                        break;
                                    case u.playerLayoutActions.DISMISS:
                                        r = u.playerLayoutStates.STICKY_TO_INLINE_PAUSED_1_SLIDE_OUT, t = u.playerLayoutStates.INLINE;
                                        break;
                                    case u.playerLayoutActions.COMPLETE_PLAYBACK:
                                        r = u.playerLayoutStates.STICKY_END_CARD;
                                        break;
                                    case u.playerLayoutActions.ATTACH_TO_FOOTER:
                                        r = u.playerLayoutStates.ABOVE_FOOTER
                                }
                                break;
                            case u.playerLayoutStates.STICKY_TO_INLINE_SCROLL:
                                switch (a) {
                                    case u.playerLayoutActions.ENTER_VIEWPORT:
                                        r = u.playerLayoutStates.STICKY_TO_INLINE_1_STICKY_FADE_OUT, t = u.playerLayoutStates.STICKY_TO_INLINE_2_INLINE_TRANSPARENT;
                                        break;
                                    case u.playerLayoutActions.TRANSITION_COMPLETE:
                                        r = u.playerLayoutStates.STICKY_TO_INLINE_SCROLL;
                                        break;
                                    case u.playerLayoutActions.COMPLETE_PLAYBACK:
                                        r = u.playerLayoutStates.INLINE_END_CARD_WITH_TIMER;
                                        break;
                                    default:
                                        r = u.playerLayoutStates.INLINE
                                }
                                break;
                            case u.playerLayoutStates.STICKY_TO_INLINE_1_STICKY_FADE_OUT:
                                switch (a) {
                                    case u.playerLayoutActions.TRANSITION_COMPLETE:
                                        r = u.playerLayoutStates.STICKY_TO_INLINE_2_INLINE_TRANSPARENT, t = u.playerLayoutStates.INLINE;
                                        break;
                                    case u.playerLayoutActions.DISMISS:
                                        r = u.playerLayoutStates.STICKY_TO_INLINE_1_STICKY_FADE_OUT, t = u.playerLayoutStates.STICKY_TO_INLINE_2_INLINE_TRANSPARENT;
                                        break;
                                    case u.playerLayoutActions.COMPLETE_PLAYBACK:
                                        r = u.playerLayoutStates.INLINE_END_CARD_WITH_TIMER;
                                        break;
                                    default:
                                        r = u.playerLayoutStates.INLINE
                                }
                                break;
                            case u.playerLayoutStates.STICKY_TO_INLINE_2_INLINE_TRANSPARENT:
                            case u.playerLayoutStates.STICKY_TO_INLINE_PAUSED_1_SLIDE_OUT:
                                switch (a) {
                                    case u.playerLayoutActions.TRANSITION_COMPLETE:
                                        r = u.playerLayoutStates.INLINE;
                                        break;
                                    case u.playerLayoutActions.COMPLETE_PLAYBACK:
                                        r = u.playerLayoutStates.INLINE_END_CARD_WITH_TIMER;
                                        break;
                                    default:
                                        r = u.playerLayoutStates.INLINE
                                }
                                break;
                            case u.playerLayoutStates.ABOVE_FOOTER:
                                switch (a) {
                                    case u.playerLayoutActions.DETACH_FROM_FOOTER:
                                        r = u.playerLayoutStates.STICKY;
                                        break;
                                    case u.playerLayoutActions.BACK_TO_TOP:
                                        r = u.playerLayoutStates.STICKY_TO_INLINE_SCROLL;
                                        break;
                                    case u.playerLayoutActions.DISMISS:
                                        r = u.playerLayoutStates.ABOVE_FOOTER_TO_DISMISS_1_ABSOLUTE, t = u.playerLayoutStates.ABOVE_FOOTER_TO_DISMISS_2_SLIDE_OUT;
                                        break;
                                    case u.playerLayoutActions.COMPLETE_PLAYBACK:
                                        r = u.playerLayoutStates.ABOVE_FOOTER_END_CARD
                                }
                                break;
                            case u.playerLayoutStates.ABOVE_FOOTER_TO_DISMISS_1_ABSOLUTE:
                                switch (a) {
                                    case u.playerLayoutActions.TRANSITION_BEGIN:
                                        r = u.playerLayoutStates.ABOVE_FOOTER_TO_DISMISS_2_SLIDE_OUT, t = u.playerLayoutStates.INLINE;
                                        break;
                                    case u.playerLayoutActions.COMPLETE_PLAYBACK:
                                        r = u.playerLayoutStates.INLINE_END_CARD_WITH_TIMER;
                                        break;
                                    default:
                                        r = u.playerLayoutStates.INLINE
                                }
                                break;
                            case u.playerLayoutStates.ABOVE_FOOTER_TO_DISMISS_2_SLIDE_OUT:
                                switch (a) {
                                    case u.playerLayoutActions.TRANSITION_COMPLETE:
                                        r = u.playerLayoutStates.INLINE;
                                        break;
                                    case u.playerLayoutActions.COMPLETE_PLAYBACK:
                                        r = u.playerLayoutStates.INLINE_END_CARD_WITH_TIMER;
                                        break;
                                    default:
                                        r = u.playerLayoutStates.INLINE
                                }
                        }
                        var d = r;
                        l = o({}, e, n.payload, {
                            layout: d,
                            trigger: "",
                            targetLayout: t
                        })
                    } else l = o({}, e, n.payload);
                    break;
                default:
                    l = e
            }
            return l
        };
        var u = t(14);
        var i = {
                position: "0",
                layout: u.playerLayoutStates.HIDDEN,
                playback: !1,
                adPlayback: !1
            },
            l = void 0
    },
    175: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(3),
            o = ((a = r) && a.__esModule ? a : {
                default: a
            }).default || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            };
        n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
                n = arguments[1];
            switch (n.type) {
                case u.SET_EVENTS_INFO:
                    return o({}, e, n.payload);
                default:
                    return e
            }
        };
        var u = t(14);
        var i = {
            position: 0
        }
    },
    176: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(3),
            o = ((a = r) && a.__esModule ? a : {
                default: a
            }).default || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            };
        n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
                n = arguments[1];
            switch (n.type) {
                case u.SET_TRANSCRIPT_INFO:
                    return o({}, e, n.payload);
                default:
                    return e
            }
        };
        var u = t(14);
        var i = {
            position: 0,
            transcript: null,
            shouldTranscriptScrollToView: !1,
            syncedByUserAction: !1
        }
    },
    177: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(3),
            o = ((a = r) && a.__esModule ? a : {
                default: a
            }).default || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            };
        n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
                n = arguments[1];
            switch (n.type) {
                case u.SET_PLACEHOLDER_STATE:
                    return o({}, e, n.payload);
                case u.ADD_VIDEO_NIDS:
                    return e.trackedIDs.push(n.id), e;
                default:
                    return e
            }
        };
        var u = t(14);
        var i = {
            placeholderState: u.placeholderStates.INITIAL,
            replayVideo: !1,
            trackedIDs: []
        }
    },
    178: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(3),
            o = ((a = r) && a.__esModule ? a : {
                default: a
            }).default || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            };
        n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
                n = arguments[1];
            switch (n.type) {
                case u.SET_VIDEO_RECOMMENDATION_STATE:
                    return o({}, e, n.payload);
                default:
                    return e
            }
        };
        var u = t(14);
        var i = {
            videoRecommendation: !1
        }
    },
    179: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(3),
            o = ((a = r) && a.__esModule ? a : {
                default: a
            }).default || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            };
        n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = arguments[1];
            switch (n.type) {
                case u.SET_VIDEO_ENDCARD_STATE:
                    return o({}, e, n.payload);
                default:
                    return e
            }
        };
        var u = t(14)
    },
    180: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(3),
            o = ((a = r) && a.__esModule ? a : {
                default: a
            }).default || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            };
        n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
                n = arguments[1];
            switch (n.type) {
                case u.SET_CONTINUOUS_PLAY_STATE:
                    return o({}, e, n.payload);
                default:
                    return e
            }
        };
        var u = t(14);
        var i = {
            continuousToNextVideo: !1,
            playingIdx: 0
        }
    },
    181: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(3),
            o = ((a = r) && a.__esModule ? a : {
                default: a
            }).default || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            };
        n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
                n = arguments[1];
            switch (n.type) {
                case u.SET_VIDEO_PLAYBACK_INITIATIVE:
                    return o({}, e, n.payload);
                default:
                    return e
            }
        };
        var u = t(14);
        var i = {
            playBackInitiative: "Manual",
            isPlaylist: !1
        }
    },
    182: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = u(t(2)),
            r = u(t(3));
        n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = arguments[1],
                t = void 0;
            switch (n.type) {
                case o.INVALIDATE_MARKET_TABLE_DATA:
                    return t = i({}, n.market, {
                        didInvalidate: !0
                    }), (0, r.default)({}, e, t);
                case o.REQUEST_MARKET_TABLE_DATA:
                    return t = i({}, n.market, {
                        isFetching: !0,
                        marketData: [],
                        didInvalidate: !1
                    }), (0, r.default)({}, e, t);
                case o.RECEIVE_MARKET_TABLE_DATA:
                    return t = i({}, n.market, {
                        isFetching: !1,
                        didInvalidate: !1,
                        marketData: n.marketData,
                        lastUpdated: n.receivedAt
                    }), (0, r.default)({}, e, t);
                default:
                    return e
            }
        };
        var o = t(127);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, n, t) {
            return n in e ? (0, a.default)(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e
        }
    },
    183: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = i(t(2)),
            r = i(t(3)),
            o = r.default || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            };
        n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = arguments[1],
                t = void 0;
            switch (n.type) {
                case u.INVALIDATE_QUOTE_DATA:
                    return t = l({}, n.market, o({}, e[n.market], {
                        didInvalidate: !0
                    })), (0, r.default)({}, e, t);
                case u.INVALIDATE_BATCHED_QUOTE_DATA:
                    var a = n.market.split("|").filter(function(e) {
                        return e.length > 0
                    });
                    return t = e, a.map(function(e) {
                        return t[e] ? t[e].didInvalidate = !0 : ""
                    }), t;
                case u.REQUEST_QUOTE_DATA:
                    return t = l({}, n.market, o({}, e[n.market], {
                        isFetching: !0,
                        didInvalidate: !1
                    })), (0, r.default)({}, e, t);
                case u.RECEIVE_QUOTE_DATA:
                    return t = l({}, n.market, {
                        isFetching: !1,
                        didInvalidate: !1,
                        marketData: n.marketData,
                        lastUpdated: n.receivedAt
                    }), (0, r.default)({}, e, t);
                case u.RECEIVE_BATCHED_QUOTE_DATA:
                    t = {};
                    var i = n.marketData,
                        d = n.tickerProperty,
                        c = n.receivedAt;
                    return i.map(function(e) {
                        return t[e[d]] = {
                            isFetching: !1,
                            didInvalidate: !1,
                            marketData: e,
                            lastUpdated: c
                        }
                    }), (0, r.default)({}, e, t);
                default:
                    return e
            }
        };
        var u = t(116);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function l(e, n, t) {
            return n in e ? (0, a.default)(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e
        }
    },
    184: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                n = arguments[1],
                t = e;
            switch (n.type) {
                case a.ADD_QUOTE_SEARCH:
                    return t.unshift(n.quote.toUpperCase()), e.length > 3 && t.pop(), t;
                default:
                    return e
            }
        };
        var a = t(147)
    },
    185: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(3),
            o = (a = r) && a.__esModule ? a : {
                default: a
            };
        n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    pageType: i,
                    articleTitle: "",
                    hasNewsAlert: !1,
                    hasLiveAlert: !1,
                    hasCountDownClock: !1,
                    hasPartnerExp: !1,
                    articleSettings: {},
                    megaMenuToggleFlag: !1,
                    isExpanded: !1,
                    isIntraSiteLink: !1
                },
                n = arguments[1];
            switch (n.type) {
                case u.SET_NAV_PAGE_TYPE:
                    return (0, o.default)({}, e, {
                        pageType: n.pageType
                    });
                case u.SET_NAV_ARTICLE_TITLE:
                    return (0, o.default)({}, e, {
                        articleTitle: n.articleTitle
                    });
                case u.SET_NAV_NEWS:
                    return (0, o.default)({}, e, {
                        hasNewsAlert: n.hasNewsAlert
                    });
                case u.SET_NAV_LIVE:
                    return (0, o.default)({}, e, {
                        hasLiveAlert: n.hasLiveAlert
                    });
                case u.SET_NAV_COUNT_DOWN_CLOCK:
                    return (0, o.default)({}, e, {
                        hasCountDownClock: n.hasCountDownClock
                    });
                case u.SET_NAV_PARTNER_EXP:
                    return (0, o.default)({}, e, {
                        hasPartnerExp: n.hasPartnerExp
                    });
                case u.SET_NAV_ARTICLE_SETTINGS:
                    return (0, o.default)({}, e, {
                        articleSettings: n.articleSettings
                    });
                case u.SET_MEGA_MENU_TOGGLE_FLAG:
                    return (0, o.default)({}, e, {
                        megaMenuToggleFlag: n.shouldToggle
                    });
                case u.SET_MEGA_MENU_EXPANDED_FLAG:
                    return (0, o.default)({}, e, {
                        isExpanded: n.isExpanded
                    });
                case u.SET_INTRA_NAVIGATION_FLAG:
                    return (0, o.default)({}, e, {
                        isIntraSiteLink: n.isIntraSiteLink
                    });
                default:
                    return e
            }
        };
        var u = t(53);
        var i = "page"
    },
    186: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(3),
            o = (a = r) && a.__esModule ? a : {
                default: a
            };
        n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                isXfinity: !1
            };
            switch (arguments[1].type) {
                case u.XFINITY_EXPERIENCE:
                    return (0, o.default)({}, e, {
                        isXfinity: !0
                    });
                default:
                    return e
            }
        };
        var u = t(128)
    },
    187: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(3),
            o = ((a = r) && a.__esModule ? a : {
                default: a
            }).default || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            },
            u = t(71);
        var i = {
            user: null,
            popupVisible: !1,
            surfSessionToken: "Not Logged In",
            signInOutCaption: "SIGN IN",
            tpToken: "",
            message: "",
            logInMode: null,
            uid: "Not Logged In",
            isAuthenticated: !1,
            isLoggedIn: !1,
            isNewProUser: !1
        };
        n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
                n = arguments[1];
            switch (n.type) {
                case u.TOGGLE_LOGIN_POPUP:
                case u.TOGGLE_SIGNUP_POPUP:
                    return o({}, e, {
                        popupVisible: !e.popupVisible,
                        message: n.message
                    });
                case u.LOGIN_MODE:
                    return o({}, e, {
                        logInMode: n.logInMode
                    });
                case u.USER_SIGNED_IN:
                    return o({}, e, {
                        popupVisible: !1,
                        signInOutCaption: "SIGN OUT",
                        user: n.user,
                        uid: n.uid,
                        surfSessionToken: n.surfSessionToken,
                        isLoggedIn: n.isLoggedIn
                    });
                case u.LOG_OUT_USER:
                    return e;
                case u.USER_SIGNED_OUT:
                    return o({}, e, {
                        signInOutCaption: "SIGN IN",
                        isLoggedIn: !1,
                        user: n.user,
                        surfSessionToken: n.surfSessionToken,
                        message: n.message,
                        uid: n.uid,
                        tpToken: n.tpToken
                    });
                case u.PIANO_USERREF:
                    return o({}, e, {
                        tpToken: n.tpToken
                    });
                case u.IS_AUTHENTICATED:
                    return o({}, e, {
                        isAuthenticated: n.isAuthenticated
                    });
                case u.IS_NEW_PRO_USER:
                    return o({}, e, {
                        isNewProUser: n.newProUser
                    });
                default:
                    return e
            }
        }
    },
    188: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(3),
            o = (a = r) && a.__esModule ? a : {
                default: a
            };
        n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    articleData: {},
                    pageData: {}
                },
                n = arguments[1];
            switch (n.type) {
                case u.SET_ARTICLE_DATA:
                    return (0, o.default)({}, e, {
                        articleData: n.articleData
                    });
                case u.SET_PAGE_DATA:
                    return (0, o.default)({}, e, {
                        pageData: n.pageData
                    });
                default:
                    return e
            }
        };
        var u = t(189)
    },
    189: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = n.SET_ARTICLE_DATA = "SET_ARTICLE_DATA",
            r = n.SET_PAGE_DATA = "SET_PAGE_DATA";
        n.setArticleData = function(e) {
            return {
                type: a,
                articleData: e
            }
        }, n.setPageData = function(e) {
            return {
                type: r,
                pageData: e
            }
        }
    },
    190: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = u(t(2)),
            r = u(t(3));
        n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = arguments[1],
                t = void 0;
            switch (n.type) {
                case o.REQUEST_GDS_MARKET_TABLE_DATA:
                    return t = i({}, n.moduleType, {
                        isFetching: !0,
                        marketData: []
                    }), (0, r.default)({}, e, t);
                case o.RECEIVE_GDS_MARKET_TABLE_DATA:
                    return t = i({}, n.moduleType, {
                        isFetching: !1,
                        marketData: n.marketData,
                        lastUpdated: n.receivedAt
                    }), (0, r.default)({}, e, t);
                default:
                    return e
            }
        };
        var o = t(146);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, n, t) {
            return n in e ? (0, a.default)(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e
        }
    },
    191: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(15),
            o = (a = r) && a.__esModule ? a : {
                default: a
            };
        var u = "string" == typeof o.default.getProperties().GDS_API_URLS ? JSON.parse(o.default.getProperties().GDS_API_URLS) : o.default.getProperties().GDS_API_URLS;
        n.default = {
            makeBasicAction: function(e) {
                return function(n) {
                    return {
                        type: e,
                        moduleType: n
                    }
                }
            },
            makeReceiveAction: function(e) {
                return function(n, t) {
                    var a = n.rankedSymbolList[0].rankedSymbols;
                    return {
                        type: e,
                        marketData: a,
                        receivedAt: Date.now(),
                        moduleType: t
                    }
                }
            },
            makeFetchAction: function(e, n) {
                return function(t) {
                    return function(a) {
                        a(e(t));
                        var r = u[t];
                        return fetch(r).then(function(e) {
                            return e.json()
                        }).then(function(e) {
                            var r = n(e, t);
                            a(r)
                        })
                    }
                }
            },
            makeShouldFetchAction: function(e) {
                return function(n) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (t) {
                        var a = n[e][t];
                        return !a || !a.isFetching && a.didInvalidate
                    }
                    return !n[e] || !n[e].isFetching
                }
            },
            makeFetchIfNeededAction: function(e, n) {
                return function(t) {
                    return function(a, r) {
                        return !(!e(r(), t) || !t) && a(n(t))
                    }
                }
            }
        }
    },
    192: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = u(t(3)).default || function(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
            }
            return e
        };
        n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    loading: !1,
                    page: null,
                    errors: null
                },
                n = arguments[1];
            switch (n.type) {
                case o.FETCH_PAGE_START:
                    return a({}, e, {
                        loading: !0,
                        error: null
                    });
                case o.FETCH_PAGE_SUCCESS:
                    return a({}, e, {
                        loading: !1,
                        page: n.page,
                        error: null
                    });
                case o.FETCH_PAGE_ERROR:
                    return a({}, e, {
                        loading: !1,
                        page: n.page,
                        errors: n.errors
                    });
                case o.UPDATE_STORY:
                    var t = (0, r.default)(e.page);
                    try {
                        var u = n.data,
                            i = u.column,
                            l = u.module,
                            d = u.row,
                            c = u.storyid,
                            s = u.story,
                            f = t.layout[d].columns[i].modules[l].data.assets,
                            _ = f.findIndex(function(e) {
                                return e.id === c
                            });
                        f[_] = s
                    } catch (e) {}
                    return a({}, e, {
                        page: t
                    });
                case o.UPDATE_PAGE_DATA:
                    var p = (0, r.default)(e.page);
                    try {
                        var E = n.data;
                        E.forEach(function(e) {
                            var n = e.column,
                                t = e.module,
                                a = e.row,
                                r = e.assets;
                            p.layout[a].columns[n].modules[t].data.assets = r
                        })
                    } catch (e) {}
                    return a({}, e, {
                        page: p
                    });
                case o.UPDATE_MODULE_SOURCE:
                    var h = (0, r.default)(e.page);
                    try {
                        var m = n.data,
                            T = m.column,
                            v = m.module,
                            A = m.row,
                            b = m.sourceData;
                        h.layout[A].columns[T].modules[v].data = b
                    } catch (e) {}
                    return a({}, e, {
                        page: h
                    });
                case o.CHANGE_LAYOUT:
                    var y = (0, r.default)(e.page);
                    try {
                        var I = n.data,
                            g = I.column,
                            O = I.module,
                            S = I.row,
                            N = I.moduleId,
                            P = I.modulePointer,
                            L = I.attributes,
                            R = P || N;
                        y.layout[S].columns[g].modules[O].name = R, y.layout[S].columns[g].modules[O].attributes = L
                    } catch (e) {}
                    return a({}, e, {
                        page: y
                    });
                case o.UPDATE_PAGE_TEMPLATE:
                    var M = (0, r.default)(e.page || {});
                    return M.layout = n.data, a({}, e, {
                        page: M
                    });
                default:
                    return e
            }
        };
        var r = u(t(278)),
            o = t(81);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    195: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r, o = Ae(t(16)),
            u = Ae(t(17)),
            i = (a = ["\n  query page($path: String, $product: product, $hostname: String, $mode: String) {\n    page(path: $path, product: $product, hostname: $hostname, mode: $mode) {\n      id\n      brand\n      template\n      ", "\n      type\n      title\n      premium\n      native\n      section {\n        id\n        headline\n        tagName\n        url\n        type\n        title\n        eyebrow\n        subType\n      }\n      ", "\n      ", "\n      ", "\n      ", "\n    }\n  }\n"], r = ["\n  query page($path: String, $product: product, $hostname: String, $mode: String) {\n    page(path: $path, product: $product, hostname: $hostname, mode: $mode) {\n      id\n      brand\n      template\n      ", "\n      type\n      title\n      premium\n      native\n      section {\n        id\n        headline\n        tagName\n        url\n        type\n        title\n        eyebrow\n        subType\n      }\n      ", "\n      ", "\n      ", "\n      ", "\n    }\n  }\n"], (0, u.default)((0, o.default)(a, {
                raw: {
                    value: (0, u.default)(r)
                }
            }))),
            l = Ae(t(18)),
            d = Ae(t(130)),
            c = Ae(t(131)),
            s = Ae(t(132)),
            f = Ae(t(196)),
            _ = Ae(t(197)),
            p = Ae(t(133)),
            E = Ae(t(198)),
            h = Ae(t(199)),
            m = Ae(t(200)),
            T = Ae(t(201)),
            v = Ae(t(202)),
            A = Ae(t(203)),
            b = Ae(t(204)),
            y = Ae(t(205)),
            I = Ae(t(206)),
            g = Ae(t(207)),
            O = Ae(t(208)),
            S = Ae(t(209)),
            N = Ae(t(210)),
            P = Ae(t(211)),
            L = Ae(t(212)),
            R = Ae(t(213)),
            M = Ae(t(214)),
            D = Ae(t(215)),
            w = Ae(t(216)),
            k = Ae(t(134)),
            C = Ae(t(217)),
            F = Ae(t(218)),
            U = Ae(t(219)),
            B = Ae(t(220)),
            V = Ae(t(221)),
            H = Ae(t(222)),
            x = Ae(t(223)),
            j = Ae(t(224)),
            K = Ae(t(135)),
            G = Ae(t(136)),
            Y = Ae(t(225)),
            Q = Ae(t(137)),
            z = Ae(t(226)),
            W = Ae(t(227)),
            q = Ae(t(228)),
            $ = Ae(t(229)),
            X = Ae(t(138)),
            J = Ae(t(230)),
            Z = Ae(t(231)),
            ee = Ae(t(232)),
            ne = Ae(t(233)),
            te = Ae(t(234)),
            ae = Ae(t(235)),
            re = Ae(t(236)),
            oe = Ae(t(237)),
            ue = Ae(t(238)),
            ie = Ae(t(239)),
            le = Ae(t(240)),
            de = Ae(t(241)),
            ce = Ae(t(242)),
            se = Ae(t(243)),
            fe = Ae(t(244)),
            _e = Ae(t(245)),
            pe = Ae(t(246)),
            Ee = Ae(t(247)),
            he = Ae(t(248)),
            me = Ae(t(249)),
            Te = Ae(t(250)),
            ve = Ae(t(251));

        function Ae(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var be = "\n  layout {\n    editable\n    columns {\n      span\n      editable\n      modules {\n        name\n        source\n        canChangeLayout\n        canChangeSource\n        serverRenderPolicy\n        attributes\n        options\n        data (mode: $mode) {\n          " + d.default+"\n          " + c.default+"\n          " + s.default+"\n          " + _.default+"\n          " + h.default+"\n          " + E.default+"\n          " + m.default+"\n          " + T.default+"\n          " + v.default+"\n          " + A.default+"\n          " + b.default+"\n          " + y.default+"\n          " + I.default+"\n          " + g.default+"\n          " + O.default+"\n          " + S.default+"\n          " + N.default+"\n          " + P.default+"\n          " + L.default+"\n          " + B.default+"\n          " + R.default+"\n          " + M.default+"\n          " + D.default+"\n          " + w.default+"\n          " + k.default+"\n          " + C.default+"\n          " + F.default+"\n          " + U.default+"\n          " + V.default+"\n          " + H.default+"\n          " + x.default+"\n          " + j.default+"\n          " + K.default+"\n          " + Y.default+"\n          " + Q.default+"\n          " + z.default+"\n          " + W.default+"\n          " + q.default+"\n          " + $.default+"\n          " + J.default+"\n          " + Z.default+"\n          " + ee.default+"\n          " + ne.default+"\n          " + te.default+"\n          " + ae.default+"\n          " + ce.default+"\n          " + re.default+"\n          " + oe.default+"\n          " + ue.default+"\n          " + ie.default+"\n          " + le.default+"\n          " + de.default+"\n          " + se.default+"\n          " + fe.default+"\n          " + _e.default+"\n          " + pe.default+"\n          " + Ee.default+"\n          " + he.default+"\n          " + me.default+"\n          " + Te.default+"\n          " + ve.default+"\n        }\n      }\n    }\n  }\n",
            ye = (0, l.default)(i, be, f.default, p.default, G.default, X.default);
        n.default = ye
    },
    196: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  id\n  title\n  type\n  description\n  url\n  datePublished\n  creatorOverwrite\n  native\n  expires\n  brand\n  section {\n    id\n    title\n    tagName\n  }\n  promoImage {\n    id\n    url\n  }\n  relatedTags {\n    id\n    name\n    tagName\n  }\n  author {\n    id\n    name\n    url\n    image\n    socialMediaInfo {\n      url\n      displayText\n      type\n    }\n  }\n  featuredMedia {\n    ... on image {\n      id\n      type\n      url\n    }\n    ... on cnbcvideo {\n      id\n      type\n      url\n      image {\n        url\n        id\n      }\n    }\n  }\n"
    },
    197: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on articleTicker {\n    assets {\n      shorterHeadline\n      id\n      headline\n      description\n      url\n      brand\n      promoImage {\n        id\n        url\n      }\n      section {\n        id\n        title\n        url\n      }\n      native\n      premium\n      title\n    }\n  }\n"
    },
    198: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on bioDetails {\n    id\n    brand\n    type\n    url\n    native\n    premium\n    datePublished\n    dateModified\n    dateLastPublished\n    datePublishedFormatted\n    dateLastPublishedFormatted\n    description\n    socialtoolsEnabled\n    shortestHeadline\n    headline\n    title\n    jobTitle\n    native\n    body {\n      content{\n        tagName\n        children\n      }\n    }    \n    socialMediaInfo {\n      type\n      url\n      displayText\n    }\n    sourceOrganization {\n      id\n      type\n      url\n      name\n      logo\n      creatorOverwrite\n    }\n    creatorOverwrite\n    author {\n      id\n      name\n      url\n      image\n      sameAs\n      socialMediaInfo {\n        url\n        displayText\n        type\n      }\n    }\n    promoImage {\n      id\n      url\n      caption\n    }\n    featuredMedia {\n      id\n      url\n      ... on image {\n        id\n        type\n        caption\n        headline\n        copyrightHolder\n        url\n        datePublished\n        isHighTouch\n      }\n      ... on cnbcvideo {\n        id\n        type\n        url\n        datePublished\n      }\n    }\n    publisher {\n      name\n      logo\n    }\n    section {\n      id\n      brand\n      type\n      color\n      name\n      eyebrow\n      shortestHeadline\n      url\n      subType\n      section {\n        subType\n      }\n      image {\n        id\n        url\n      }\n      logo {\n        id\n        url\n      }\n    }\n  }\n"
    },
    199: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on buffettAbout {\n    contentText\n    title\n    url\n    featuredMedia {\n      id\n      url\n    }\n  }\n"
    },
    20: function(e, n, t) {
        "use strict";
        var a = u(t(5)),
            r = u(t(6)),
            o = "function" == typeof r.default && "symbol" == typeof a.default ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
            };

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i, l = E(t(2)),
            d = E(t(5)),
            c = E(t(50)),
            s = E(t(6)),
            f = "function" == typeof s.default && "symbol" === o(d.default) ? function(e) {
                return void 0 === e ? "undefined" : o(e)
            } : function(e) {
                return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : void 0 === e ? "undefined" : o(e)
            },
            _ = t(89),
            p = E(t(78));

        function E(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function h(e, n, t) {
            return n in e ? (0, l.default)(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e
        }
        var m = (0, s.default)("MONITORING_SCROLL"),
            T = (0, s.default)("HANDLE_DEBOUNCE_SCROLL"),
            v = (0, s.default)("HANDLE_THROTTLE_SCROLL"),
            A = (0, s.default)("HANDLE_SCROLL"),
            b = (0, s.default)("MONITORING_RESIZE"),
            y = (0, s.default)("HANDLE_DEBOUNCE_RESIZE"),
            I = (0, s.default)("MONITORING_BODY_RESIZE"),
            g = (0, s.default)("HANDLE_DEBOUNCE_BODY_RESIZE"),
            O = (0, s.default)("MONITORING_CLICK"),
            S = (0, s.default)("HANDLE_CLICK"),
            N = (0, s.default)("MONITORING_MOUSEUP"),
            P = (0, s.default)("HANDLE_MOUSEUP"),
            L = (0, s.default)("MONITORING_TOUCHEND"),
            R = (0, s.default)("HANDLE_TOUCHEND"),
            M = (0, s.default)("MONITORING_MOUSEMOVE"),
            D = (0, s.default)("HANDLE_MOUSEMOVE"),
            w = (0, s.default)("MONITORING_MOUSEOVER"),
            k = (0, s.default)("HANDLE_MOUSEOVER"),
            C = (0, s.default)("MONITORING_KEYUP"),
            F = (0, s.default)("HANDLE_KEYUP"),
            U = (0, s.default)("MONITORING_IMAGES_LOAD"),
            B = (0, s.default)("HANDLE_IMAGES_LOAD"),
            V = (0, s.default)("IMAGES_TRACKED"),
            H = (0, s.default)("IMAGES_LOADED"),
            x = (0, s.default)("MONITORING_ROUTE"),
            j = (0, s.default)("HANDLE_ROUTE"),
            K = (0, s.default)("MONITORING_SAILTHRU_LOAD"),
            G = (0, s.default)("SAILTHRU_LOAD"),
            Y = function(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                    a = null,
                    r = function() {
                        return e.apply(t, null)
                    };
                return function() {
                    clearTimeout(a), a = setTimeout(r, n)
                }
            },
            Q = {
                ticking: !1,
                request: function(e) {
                    var n = this;
                    return function() {
                        n.ticking || requestAnimationFrame(function() {
                            return n.update(e)
                        }), n.ticking = !0
                    }
                },
                update: function(e) {
                    e(), this.ticking = !1
                }
            },
            z = {},
            W = void 0,
            q = void 0,
            $ = void 0,
            X = void 0,
            J = function(e) {
                var n = e.target || null,
                    t = [n];
                if (!n || !n.parentElement) return [];
                for (; n.parentElement;) n = n.parentElement, t.unshift(n);
                return t.reverse()
            },
            Z = (h(i = {
                ROUTE_EVENT: "object" === ("undefined" == typeof window ? "undefined" : f(window)) && p.default.createNewEvent("route") || ""
            }, m, !1), h(i, b, !1), h(i, I, !1), h(i, U, !1), h(i, O, !1), h(i, N, !1), h(i, M, !1), h(i, w, !1), h(i, L, !1), h(i, C, !1), h(i, T, Y(function() {
                Z.trigger("scroll", {
                    pageNodeId: W,
                    pageYOffset: window.pageYOffset
                }, "debounce")
            }, 100)), h(i, v, Q.request(function() {
                Z.trigger("scroll", {
                    pageNodeId: W,
                    pageYOffset: window.pageYOffset
                }, "throttle")
            })), h(i, A, function() {
                Z.trigger("scroll", {
                    pageNodeId: W,
                    pageYOffset: window.pageYOffset
                }, "none")
            }), h(i, "dispatchRouteEvent", function(e) {
                "object" === ("undefined" == typeof window ? "undefined" : f(window)) && (e && this.setPageNodeId(e), window.dispatchEvent(this.ROUTE_EVENT))
            }), h(i, "monitorScroll", function() {
                this[m] || (window.addEventListener("scroll", this[T], !1), window.addEventListener("scroll", this[v], !1), window.addEventListener("scroll", this[A], !1), this[m] = !0)
            }), h(i, "deregisterScroll", function() {
                this[m] && (window.removeEventListener("scroll", this[T]), window.removeEventListener("scroll", this[v]), window.removeEventListener("scroll", this[A]), this[m] = !1)
            }), h(i, y, Y(function() {
                var e = Z.getBreakpoints();
                Z.trigger("resize", {
                    pageNodeId: W,
                    breakpoints: e,
                    width: window.innerWidth,
                    height: window.innerHeight
                }, "debounce")
            })), h(i, "monitorResize", function() {
                this[b] || (window.addEventListener("resize", this[y], !1), this[b] = !0)
            }), h(i, "deregisterResize", function() {
                this[b] && (window.removeEventListener("resize", this[y]), this[b] = !1)
            }), h(i, g, Y(function() {
                Z.trigger("bodyResize", null, "debounce")
            })), h(i, "monitorBodyResize", function() {
                var e = this;
                if (!this[I]) {
                    var n = void 0,
                        t = void 0;
                    (X = new MutationObserver(function() {
                        document.body.offsetWidth === n && document.body.offsetHeight === t || (n = document.body.offsetWidth, t = document.body.offsetHeight, e[g]())
                    })).observe(document.body, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0
                    }), this[I] = !0
                }
            }), h(i, "deregisterBodyResize", function() {
                this[I] && (X.disconnect(), this[I] = !1)
            }), h(i, D, function(e) {
                Z.trigger("mousemove", {
                    pageNodeId: W,
                    eventObject: e.target ? e.target : e.srcElement,
                    x: e.clientX,
                    y: e.clientY
                }, "none")
            }), h(i, "monitorMouseMove", function() {
                this[M] || (window.addEventListener("mousemove", this[D], !1), this[M] = !0)
            }), h(i, "deregisterMouseMove", function() {
                this[M] && (window.removeEventListener("mousemove", this[D]), this[M] = !1)
            }), h(i, k, function(e) {
                Z.trigger("mouseover", {
                    pageNodeId: W,
                    componentDataId: e.composedPath ? (0, _.findId)(e.composedPath()) : (0, _.findId)(J(e)),
                    eventObject: e.target ? e.target : e.srcElement
                }, "throttle")
            }), h(i, "monitorMouseOver", function(e) {
                this[w] || (void 0 !== e ? document.getElementById(e).addEventListener("mouseover", this[k], !1) : window.addEventListener("mouseover", this[k], !1), this[w] = !0)
            }), h(i, "deregisterMouseOver", function() {
                this[w] && (window.removeEventListener("mouseover", this[k]), this[w] = !1)
            }), h(i, R, function(e) {
                Z.trigger("touchend", {
                    pageNodeId: W,
                    componentDataId: e.composedPath ? (0, _.findId)(e.composedPath()) : (0, _.findId)(J(e)),
                    eventObject: e.target ? e.target : e.srcElement
                }, "throttle")
            }), h(i, "monitorTouchEnd", function(e) {
                this[L] || (void 0 !== e ? document.getElementById(e).addEventListener("touchend", this[R], !1) : window.addEventListener("touchend", this[R], !1), this[L] = !0)
            }), h(i, "deregisterTouchEnd", function() {
                this[L] && (window.removeEventListener("touchend", this[R]), this[L] = !1)
            }), h(i, P, function(e) {
                Z.trigger("mouseup", e, "none")
            }), h(i, "monitorMouseup", function() {
                this[N] || (window.addEventListener("mouseup", this[P], !1), this[N] = !0)
            }), h(i, "deregisterMouseup", function() {
                this[N] && (window.removeEventListener("mouseup", this[P]), this[N] = !1)
            }), h(i, S, function(e) {
                Z.trigger("click", {
                    pageNodeId: W,
                    componentDataId: e.composedPath ? (0, _.findId)(e.composedPath()) : (0, _.findId)(J(e)),
                    eventObject: e.target ? e.target : e.srcElement,
                    x: e.clientX,
                    y: e.clientY
                }, "throttle")
            }), h(i, "monitorClick", function() {
                this[O] || (window.addEventListener("click", this[S], !1), this[O] = !0)
            }), h(i, "deregisterClick", function() {
                this[O] && (window.removeEventListener("click", this[S]), this[O] = !1)
            }), h(i, F, function(e) {
                Z.trigger("keyup", e, "none")
            }), h(i, "monitorKeyup", function() {
                this[C] || (window.addEventListener("keyup", this[F], !1), this[C] = !0)
            }), h(i, "deregisterKeyup", function() {
                this[C] && (window.removeEventListener("keyup", this[F]), this[C] = !1)
            }), h(i, j, function() {
                Z.trigger("route", {
                    pageNodeId: W,
                    currentPath: q,
                    newPath: $
                }, "throttle")
            }), h(i, "monitorRoute", function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                this[x] || (this.setRoutePaths(e, n), window.addEventListener("route", this[j], !1), this[x] = !0)
            }), h(i, "deregisterRoute", function() {
                this[x] && (window.removeEventListener("route", this[j]), this[x] = !1)
            }), h(i, "getBreakpoints", function() {
                return {
                    s: window.matchMedia("(max-width: 677px)").matches,
                    m: window.matchMedia("(min-width: 678px) and (max-width: 959px)").matches,
                    l: window.matchMedia("(min-width: 960px) and (max-width: 1289px)").matches,
                    xl: window.matchMedia("(min-width: 1290px)").matches
                }
            }), h(i, G, function(e) {
                Z.trigger("sailthruLoaded", {
                    data: e
                }, "none")
            }), h(i, "monitorSailthruLoad", function() {
                this[K] || (window.addEventListener("sailthruLoaded", this[G], !1), this[K] = !0)
            }), h(i, "onSailthruLoaded", function(e) {
                this[K] && (this[G](e), this[K] = !1, window.removeEventListener("sailthruLoaded", this[G]))
            }), h(i, H, 0), h(i, V, []), h(i, B, function() {
                Z.trigger("imagesLoaded", void 0, "throttle"), Z[U] = !1
            }), h(i, "monitorImagesLoad", function() {
                var e = (0, c.default)(document.getElementsByTagName("img")),
                    n = e.filter(function(e) {
                        return e.complete
                    });
                this[V] = e, this[H] = n.length, this[U] = !0
            }), h(i, "onImagesLoaded", function() {
                if (this[U]) {
                    var e = this[V].filter(function(e) {
                        return e.complete
                    });
                    this[H] = e.length, this[H] === this[V].length && this[B]()
                }
            }), h(i, "setPageNodeId", function(e) {
                W = e
            }), h(i, "getPageNodeId", function() {
                return W
            }), h(i, "setRoutePaths", function(e, n) {
                q = e, $ = n
            }), h(i, "on", function(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "throttle",
                    a = "resize" !== e ? e + "_" + t : e + "_debounce";
                z[a] || (z[a] = []), z[a] = [].concat(function(e) {
                    if (Array.isArray(e)) {
                        for (var n = 0, t = Array(e.length); n < e.length; n++) t[n] = e[n];
                        return t
                    }
                    return (0, c.default)(e)
                }(z[a]), [n])
            }), h(i, "remove", function(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "throttle",
                    a = "resize" !== e ? e + "_" + t : e + "_debounce";
                z[a] && (z[a] = z[a].filter(function(e) {
                    return e !== n
                }))
            }), h(i, "trigger", function(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "throttle",
                    a = "resize" !== e ? e + "_" + t : e + "_debounce";
                z[a] && z[a].forEach(function(e) {
                    "function" == typeof e && e(n)
                })
            }), i);
        n.default = Z
    },
    200: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(10);
        var o = "\n  ...on buffettArticleBody {\n    id\n    body {\n      content {\n        tagName\n        attributes\n        data {\n          ... on cnbcvideo {\n            " + ((a = r) && a.__esModule ? a : {
            default: a
        }).default+"\n          }\n        }\n        children  \n      }\n    }\n  }\n";
        n.default = o
    },
    201: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on buffettArticleHeaderEyebrow {\n    id\n    headline\n    url\n    promoImage{\n      id\n      url\n    }\n    author {\n      id\n      name\n      url\n    }\n    datePublished\n  }\n"
    },
    202: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on buffettArticleHeader {\n    id\n    title\n    datePublished\n    summary\n    author {\n      id\n      url\n      name\n    }\n    promoImage {\n      id\n      url\n    }\n    featuredMedia {\n      id\n      url\n    }\n  }\n"
    },
    203: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on buffettClipDark {\n    id\n    carousel {\n      id\n      assets(includeContentTypes: [cnbcvideo]) {\n        id\n        type\n        title\n        headline\n        url\n        datePublished\n        promoImage {\n          id\n          url\n        }\n        ... on cnbcvideo {\n          duration\n        }\n      }\n    }\n  }\n"
    },
    204: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on buffettClip {\n    id\n    carousel {\n      id\n      assets(includeContentTypes: [cnbcvideo]) {\n        id\n        type\n        title\n        headline\n        url\n        datePublished\n        promoImage {\n          id\n          url\n        }\n        ... on cnbcvideo {\n          duration\n        }\n      }\n    }\n  }\n"
    },
    205: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(10);
        var o = "\n  ...on buffettDynamicContentFeedContainer {\n    id\n    sectionLabel\n    assets {\n      id\n      type\n      brand\n      url\n      datePublished\n      title\n      headline\n      promoImage {\n        id\n        url\n      }\n      ... on cnbcvideo {\n        " + ((a = r) && a.__esModule ? a : {
            default: a
        }).default+"\n      }\n    }\n  }\n";
        n.default = o
    },
    206: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on buffettQuote {\n    link\n    label\n    text\n    date\n  }\n"
    },
    207: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on cardCollection {\n    brand\n    title\n    headline\n    assets {\n      id\n      brand\n      type\n      url\n      title\n      headline\n      promoImage {\n        id\n        url\n      }\n    }\n  }\n"
    },
    208: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on carousel {\n    id\n    title\n    type\n    brand\n    more {\n      liveURL\n    }\n    assets {\n      id\n      type\n      premium\n      title\n      headline\n      shorterHeadline\n      url\n      datePublished,\n      featuredMedia{\n        url\n      }\n      promoImage {\n        id\n        url\n      }\n      ... on cnbcvideo {\n        duration\n      }\n      ... on webresource {\n        linkText\n        href\n      }\n    }\n  }\n"
    },
    209: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(10),
            o = (a = r) && a.__esModule ? a : {
                default: a
            };
        var u = "\n  ...on clipPlayer {\n      " + o.default+"\n      section {\n        id\n        sectionLabel\n        tabLabel\n        title\n        url\n        section {\n          id\n          url\n          title\n        }\n      }\n  }\n  ... on sectionVideoPlayer {\n    assets {\n      ... on cnbcvideo {\n        " + o.default+"\n        section {\n          tagName\n          tagNameFormatted\n        }\n      }\n    }\n  }\n";
        n.default = u
    },
    210: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on videoHero {\n    id\n    eyebrow\n    headline\n    callout {\n      url\n      text\n    }\n    featuredMedia {\n      id\n      ... on cnbcvideo {\n        promoImage {\n          id\n          url\n        }\n        encodings {\n          url\n          encodingFormat\n          bitrate\n          formatName\n        }\n      }\n    }\n  }\n"
    },
    211: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on dynamicContentFeed {\n    url\n    title\n    brand\n    assets {\n      id\n      type\n      url\n      datePublished\n      title\n      premium\n      headline\n      promoImage {\n        id\n        url\n      }\n      author {\n        id\n        name\n        url\n      }\n      dateLastPublishedSixHr\n      section {\n        sectionLabel\n        url\n      }\n      ... on cnbcvideo {\n        duration\n      }\n    }\n  }\n"
    },
    212: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on featuredBreaker {\n    url\n    type\n    title: eyebrow\n    subType\n    sectionLabel\n    showTime\n    logo {\n      url\n    }\n    shorterHeadline\n    assets(count: 8, promoted: true) {\n      ... on event {\n        startDate\n        location\n      }\n      id\n      brand\n      type\n      premium\n      native\n      url\n      datePublished\n      title\n      linkHeadline\n      shorterHeadline\n      slug\n      subType\n      section {\n        subType\n      }\n      sectionHierarchy {\n        tagName\n      }\n      promoImage {\n        id\n        url\n      }\n      author {\n        name\n      }\n      sourceOrganization {\n        name\n      }\n      creatorOverwrite\n    }\n  }\n"
    },
    213: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on fourUp {\n    brand\n    assets {\n      id\n      type\n      brand\n      title\n      headline\n      shorterDescription\n      section {\n        eyebrow\n        url\n      }\n      url\n      premium\n      creatorOverwrite\n      dateLastPublishedSixHr\n      promoImage {\n        id\n        url\n      }\n    }\n  }\n"
    },
    214: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(10);
        var o = "\n  ...on hero {\n    id\n    summary\n    title\n    featuredMedia {\n      type\n      premium\n      headline\n      id\n      ... on cnbcvideo {\n        " + ((a = r) && a.__esModule ? a : {
            default: a
        }).default+"\n        image {\n          id\n          url\n        }\n        encodings {\n          url\n          encodingFormat\n          bitrate\n          formatName\n        }\n      }\n    }\n    promoBucket(type: franchise) {\n      id\n      url\n      headline\n    }\n  }\n";
        n.default = o
    },
    215: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on heroLedePlusThree {\n    id\n    assets(mode: $mode) {\n      id\n      type\n      premium\n      description\n      brand\n      title\n      headline\n      shorterDescription\n      section {\n        eyebrow\n        url\n      }\n      url\n      promoImage {\n        id\n        url\n      }\n      premium\n      dateLastPublishedSixHr\n    }\n  }\n"
    },
    216: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on imageDenseWithoutLabels {\n    id\n    eyebrow\n    brand\n    url\n    assets(count: 8, mode: $mode, promoted:true) {\n      id\n      title\n      brand\n      linkHeadline: headline\n      premium\n      promoImage {\n        id\n        url\n      }\n      author {\n        id\n        name\n        url\n      }\n      url\n      creatorOverwrite\n      datePublished\n      dateLastPublishedSixHr\n      sourceOrganization {\n        id\n        name\n        url\n      }\n      ... on collection {\n        assets(count: 1, mode: $mode, promoted:true) {\n          id\n          title\n          linkHeadline: headline\n          premium\n          promoImage {\n            id\n            url\n          }\n          author {\n            id\n            name\n            url\n          }\n          url\n          creatorOverwrite\n          datePublished\n          dateLastPublishedSixHr\n          sourceOrganization {\n            id\n            name\n            url\n          }\n          type\n        }\n      }\n      type\n    }\n  }\n"
    },
    217: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(10);
        var o = "\n  ...on longFormFeaturedVideos {\n    id\n    sectionLabel\n    summary\n    assets(count: 3) {\n      ... on cnbcvideo  {\n        " + ((a = r) && a.__esModule ? a : {
            default: a
        }).default+"\n      }\n    }\n  }\n";
        n.default = o
    },
    218: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(10);
        var o = "\n  ...on longFormPlayer {\n      " + ((a = r) && a.__esModule ? a : {
            default: a
        }).default+"\n      section {\n        id\n        sectionLabel\n        tabLabel\n        title\n        url\n        section {\n          id\n          url\n          title\n        }\n      }\n  }\n";
        n.default = o
    },
    219: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on longFormSectionIntro {\n    id\n    sectionLabel\n    summary\n    webresource {\n      id\n      headline\n      summary\n      href\n      linkText\n    }\n  }\n"
    },
    220: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on featuredStories {\n    id\n    brand\n    assets {\n      id\n      brand\n      headline\n      section {\n        id\n        name\n        url\n      }\n      url\n      datePublished\n      dateLastPublishedSixHr\n      type\n      premium\n      title\n      shorterHeadline\n      promoImage {\n        id\n        url\n      }\n      author {\n        id\n        name\n        url\n      }\n      ... on cnbcvideo {\n        duration\n      }\n      ... on cnbcnewsstory {\n        id\n      }\n      ... on wirestory {\n       \tid\n      }\n      ... on pressrelease {\n        id\n      }\n      ... on partnerstory {\n        id\n      }\n      ... on sponsored {\n        id\n      }\n      ... on slideshow {\n        id\n      }\n      ... on blogpost {\n        id\n      }\n    }\n  }\n"
    },
    221: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on makeItAbout {\n    contentText\n    title\n    url\n    featuredMedia {\n      id\n      url\n    }\n  }\n"
    },
    222: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on makeItRelatedVideo {\n    id\n    url\n    relatedVideo: relatedContent {\n      id\n      type\n    }\n  }\n"
    },
    223: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on marketsBanner {\n    markets {\n      id\n      tabLabel\n      securities {\n        id\n        url\n        symbol\n      }\n      articles {\n        id\n        headline\n        url\n      }\n    }\n  }\n"
    },
    224: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on marketsModule {\n    id\n    relatedContent {\n      ...on webservice {\n        widget\n      }\n    }\n    assets(count: 4) {\n      id\n      headline\n      slug\n      url\n      datePublished\n      dateLastPublishedSixHr\n      type\n      author {\n        id\n        name\n        url\n      }\n      title\n      premium\n    }\n  }\n"
    },
    225: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on pageTitle {\n    title\n    section {\n      title\n    }\n  }\n"
    },
    226: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(10),
            o = (a = r) && a.__esModule ? a : {
                default: a
            };
        var u = "\n  ...on relatedVideos {\n    " + o.default+"\n  }\n  ...on sectionRelatedVideos {\n    assets {\n      ... on cnbcvideo {\n        " + o.default+"\n      }\n    }\n  }\n";
        n.default = u
    },
    227: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ... on search {\n    id\n    assets {\n      ...on collection {\n        id\n        shorterHeadline\n        assets {\n          id\n          title\n          type\n          url\n        }\n      }\n    }\n  }\n"
    },
    228: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n...on sectionHeader {\n  id\n  brand\n  eyebrow\n  logo {\n    url\n  }\n  headerImage {\n    url\n  }\n  color\n  type\n  subType\n  parent {\n    id\n    url\n  }\n  navigation {\n    id\n    name\n    path\n  }\n  section {\n    id\n    color\n    name\n    eyebrow\n    headerImage {\n      url\n      id\n    }\n    title\n    tabLabel\n    url\n    image {\n      id\n      url\n    }\n    logo {\n      id\n      url\n    }\n  }\n  featuredMedia {\n    ... on image {\n      id\n      type\n      caption\n      copyrightHolder\n      url\n      datePublished\n      isHighTouch\n    }\n    ... on cnbcvideo {\n      id\n      url\n      datePublished\n    }\n  }\n}\n"
    },
    229: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on sectionIntro {\n    id\n    title\n    summary\n    brand\n    featuredMedia {\n      ... on image {\n        url\n        headline\n      }\n    }\n  }\n"
    },
    230: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on sectionTiles {\n    brand\n    assets {\n      id\n      brand\n      ... on franchise {\n        tabLabel\n        title\n        shorterDescription\n        url\n      }\n    }\n  }\n"
    },
    231: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on singleStoryHeroWithTopStoriesTitle {\n    id\n    assets(mode: $mode) {\n      id\n      type\n      brand\n      title\n      headline\n      shorterDescription\n      url\n      promoImage {\n        id\n        url\n      }\n      premium\n      ... on collection {\n        assets(count: 4, mode: $mode) {\n          id\n          type\n          brand\n          title\n          headline\n          shorterDescription\n          url\n          promoImage {\n            id\n            url\n          }\n        }\n      }\n    }\n  }\n"
    },
    232: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on slideshowGrid {\n    brand\n    assets {\n      type\n      ... on slideshow {\n        id\n        shorterHeadline\n        shorterDescription\n        url\n        promoImage {\n          id\n          url\n        }\n      }\n    }\n  }\n"
    },
    233: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on slideshowHighlight {\n    id\n    title\n    brand\n    summary\n    assets {\n      id\n      shorterDescription\n      headline\n      shorterHeadline\n      url\n      promoImage {\n        id\n        url\n      }\n    }\n  }\n"
    },
    234: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on slideshowIntro {\n    id\n    summary\n  }\n"
    },
    235: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on storiesTwoThird {\n    sectionLabel\n    shorterHeadline\n    assets {\n      id\n      type\n      url\n      datePublished\n      title\n      headline\n      promoImage {\n        id\n        url\n      }\n      ... on cnbcvideo {\n        duration\n        brand\n      }\n    }\n  }\n"
    },
    236: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on threeUp {\n    brand\n    assets {\n      id\n      brand\n      type\n      url\n      native\n      datePublished\n      title\n      headline\n      section {\n        eyebrow\n        type\n        url\n        subType\n      }\n      sourceOrganization {\n        id\n        name\n        url\n      }\n      author {\n        id\n        name\n        url\n      }\n      creatorOverwrite\n      dateLastPublishedSixHr\n      promoImage {\n        id\n        url\n      }\n      ... on cnbcvideo {\n        duration\n        brand\n      }\n      ... on collection {\n        id\n        type\n        url\n        native\n        datePublished\n        title\n        headline\n        section {\n          eyebrow\n          type\n          url\n        }\n        sourceOrganization {\n          id\n          name\n          url\n        }\n        author {\n          id\n          name\n          url\n        }\n        creatorOverwrite\n        dateLastPublishedSixHr\n        promoImage {\n          id\n          url\n        }\n        assets(count: 1, mode: $mode) {\n          ... on cnbcvideo {\n            duration\n            brand\n          }\n        }\n      }\n    }\n  }\n"
    },
    237: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on threeUpStack {\n    sectionLabel\n    brand\n    assets {\n      id\n      brand\n      type\n      url\n      native\n      datePublished\n      title\n      headline\n      premium\n      section {\n        eyebrow\n        type\n        url\n        subType\n      }\n      dateLastPublishedSixHr\n      promoImage {\n        id\n        url\n      }\n      ... on cnbcvideo {\n        duration\n        brand\n      }\n    }\n  }\n"
    },
    238: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n...on buffettTimeline {\n  slides {\n    type\n    body\n    title\n    subtitle\n    quote\n    author\n    quoteLinkUrl\n    quoteLinkText\n    imageCaption\n    imageurl\n    card {\n      title\n      image\n      videoTime\n      videoUrl\n    }\n  }\n}\n...on timeline {\n  slides {\n    type\n    body\n    title\n    subtitle\n    quote\n    author\n    quoteLinkUrl\n    quoteLinkText\n    imageCaption\n    imageurl\n    card {\n      title\n      image\n      videoTime\n      videoUrl\n    }\n  }\n}\n"
    },
    239: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on transporterArticle {\n    id\n    url\n    title\n    relatedArticle: relatedContent {\n      id\n    }\n    section {\n      id\n      color\n    }\n  }\n"
    },
    240: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on transporterSection {\n    id\n    brand\n    assets {\n      id\n      brand\n      headline\n      slug\n      url\n      native\n      datePublished\n      dateModified\n      dateLastPublishedSixHr\n      type\n      promoImage {\n        id\n        url\n      }\n      section {\n        subType\n      }\n      ... on cnbcvideo {\n        duration\n        brand\n      }\n      creatorOverwrite\n      author {\n        id\n        name\n        url\n      }\n      title\n    }\n  }\n"
    },
    241: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on trendingNowBreaker {\n    brand\n    assets {\n      title\n      url\n      linkHeadline\n    }\n  }\n"
    },
    242: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on makeItTwoColumn {\n    url\n    title\n    brand\n    assets {\n      id\n      type\n      url\n      datePublished\n      title\n      premium\n      headline\n      promoImage {\n        id\n        url\n      }\n      author {\n        id\n        name\n        url\n      }\n      dateLastPublishedSixHr\n      section {\n        sectionLabel\n        url\n      }\n      ... on cnbcvideo {\n        duration\n      }\n    }\n  }\n"
    },
    243: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on twoColumnImageDense {\n    id\n    brand\n    eyebrow\n    url\n    assets {\n      id\n      title\n      type\n      brand\n      linkHeadline: headline\n      premium\n      native\n      promoImage {\n        id\n        url\n      }\n      author {\n        id\n        name\n        url\n      }\n      url\n      creatorOverwrite\n      datePublished\n      dateLastPublishedSixHr\n      sourceOrganization {\n        id\n        name\n        url\n      }\n    }\n  }\n"
    },
    244: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(10);
        var o = "\n  ...on ultraDenseDefault {\n    id\n    brand,\n    assets(mode: $mode) {\n      id\n      brand\n      title\n      headline\n      premium\n      native\n      promoImage {\n        id\n        url\n      }\n      author {\n        id\n        name\n        url\n      }\n      section {\n        subType\n      }\n      url\n      creatorOverwrite\n      datePublished\n      dateLastPublishedSixHr\n      sourceOrganization {\n        id\n        name\n        url\n      }\n      type\n      ... on cnbcvideo {\n        " + ((a = r) && a.__esModule ? a : {
            default: a
        }).default+"\n      }\n      ... on collection {\n        assets(count: 1, mode: $mode) {\n          id\n          brand\n          title\n          linkHeadline: headline\n          premium\n          native\n          promoImage {\n            id\n            url\n          }\n          author {\n            id\n            name\n          }\n          section {\n            subType\n          }\n          url\n          creatorOverwrite\n          datePublished\n          dateLastPublishedSixHr\n          sourceOrganization {\n            id\n            name\n          }\n          type\n        }\n      }\n    }\n  }\n";
        n.default = o
    },
    245: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(10);
        var o = "\n  ...on videoBreakerFeatured {\n    id\n    assets {\n      id\n      ... on cnbcvideo {\n        " + ((a = r) && a.__esModule ? a : {
            default: a
        }).default+"\n      }\n    }\n  }\n";
        n.default = o
    },
    246: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on videoGridDate {\n    assets {\n      id\n      type\n      url\n      datePublished\n      title\n      headline\n      promoImage {\n        id\n        url\n      }\n      ... on cnbcvideo {\n        duration\n        linkHeadline\n        brand\n        relatedTags (count:3) {\n          id\n          title\n          headline\n        }\n      }\n    }\n  }\n"
    },
    247: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on videoIntro {\n    id\n    section {\n      sectionLabel\n    }\n    title\n    shorterHeadline\n    url\n    datePublished\n    summary\n  }\n  ... on sectionVideoIntro {\n    assets {\n      ... on cnbcvideo {\n        id\n        section {\n          sectionLabel\n        }\n        title\n        shorterHeadline\n        url\n        datePublished\n        summary\n      }\n    }\n  }\n"
    },
    248: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(10);
        var o = "\n  ...on videoTranscript {\n    " + ((a = r) && a.__esModule ? a : {
            default: a
        }).default+"\n    section {\n      id\n      sectionLabel\n    }\n  }\n";
        n.default = o
    },
    249: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on WildcardPage {\n    brand\n    contentText\n  }\n"
    },
    250: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ... on featuredPerson {\n    eyebrow\n    headline\n    description\n    callout {\n      url\n      text\n    }\n    featuredMedia {\n      url\n    }\n  }\n"
    },
    251: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.default = "\n  ...on dynamicThreeUpStack {\n    sectionLabel\n    brand\n    pagination {\n        totalCount\n        page\n        pageSize\n    }\n  }\n"
    },
    252: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = i(t(15)),
            r = i(t(59)),
            o = t(253),
            u = i(o);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = a.default.getProperties(),
            d = l.GRAPHQL_CACHING,
            c = l.REDIS_SENTINEL,
            s = l.REDIS_HOST,
            f = void 0,
            _ = {
                setBase: function(e) {
                    f = e
                },
                set: function(e, n, t) {
                    return f.set(e, n, t)
                },
                get: function(e, n, t) {
                    return f.get(e, n, t)
                }
            },
            p = {},
            E = {
                get: function(e, n) {
                    var t = (0, r.default)(e, n);
                    return p[t]
                },
                set: function(e, n, t) {
                    var a = (0, r.default)(e, n);
                    p[a] = t
                }
            },
            h = {
                get: function() {},
                set: function() {}
            },
            m = c || s ? u.default : E;
        _.setBase("true" === d ? m : h), (0, o.setRedisCacheErrorHandler)(function() {
            _.setBase(h)
        }), n.default = _
    },
    253: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.setLogger = n.setRedisCacheErrorHandler = void 0;
        var a, r, o = p(t(3)),
            u = p(t(23)),
            i = p(t(99)),
            l = p(t(35)),
            d = o.default || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            },
            c = (a = E(l.default.mark(function e(n, t, a) {
                var r;
                return l.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, a(n);
                        case 2:
                            return e.next = 4, t();
                        case 4:
                            if (!(r = e.sent)) {
                                e.next = 11;
                                break
                            }
                            if (r.errors) {
                                e.next = 10;
                                break
                            }
                            return e.next = 9, a(r);
                        case 9:
                            return e.abrupt("return", r);
                        case 10:
                            console.log("Failed fetching data", {
                                errors: r.errors
                            });
                        case 11:
                            return e.abrupt("return", n);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            })), function(e, n, t) {
                return a.apply(this, arguments)
            }),
            s = (r = E(l.default.mark(function e(n) {
                var t, a = n.type,
                    r = n.key,
                    o = n.data,
                    u = n.fetch,
                    i = n.setData;
                return l.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (t = function(e) {
                                    return e && e.hardTTL - M() <= L(a)
                                }, !o || !t(o) || D(r, o)) {
                                e.next = 15;
                                break
                            }
                            return g && R.add(r), o.refetching = 1, e.prev = 4, e.next = 7, c(o, u, i);
                        case 7:
                            o = e.sent, e.next = 12;
                            break;
                        case 10:
                            e.prev = 10, e.t0 = e.catch(4);
                        case 12:
                            return e.prev = 12, R.delete(r), e.finish(12);
                        case 15:
                            return e.abrupt("return", o);
                        case 16:
                        case "end":
                            return e.stop()
                    }
                }, e, this, [
                    [4, 10, 12, 15]
                ])
            })), function(e) {
                return r.apply(this, arguments)
            }),
            f = p(t(15)),
            _ = p(t(59));

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function E(e) {
            return function() {
                var n = e.apply(this, arguments);
                return new u.default(function(e, t) {
                    return function a(r, o) {
                        try {
                            var i = n[r](o),
                                l = i.value
                        } catch (e) {
                            return void t(e)
                        }
                        if (!i.done) return u.default.resolve(l).then(function(e) {
                            a("next", e)
                        }, function(e) {
                            a("throw", e)
                        });
                        e(l)
                    }("next")
                })
            }
        }
        var h, m, T = f.default.getProperties(),
            v = T.REDIS_TTL,
            A = T.REDIS_SOFT_TTL_DURATION,
            b = T.REDIS_REFETCHING_FLAG_IN_CACHE,
            y = {
                info: function(e) {
                    console.log(e)
                },
                error: function(e) {
                    console.log(e)
                }
            },
            I = {
                get: (m = E(l.default.mark(function e() {
                    return l.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                })), function() {
                    return m.apply(this, arguments)
                }),
                set: (h = E(l.default.mark(function e() {
                    return l.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                })), function() {
                    return h.apply(this, arguments)
                }),
                dummy: function() {}
            };
        "undefined" == typeof window && (I = t(! function() {
            var e = new Error("Cannot find module './redisClient'");
            throw e.code = "MODULE_NOT_FOUND", e
        }()));
        var g = "true" !== b,
            O = function(e, n) {
                return e && JSON.parse(e) || n
            },
            S = O(v, {
                menu: 3600,
                page: 120
            }),
            N = O(A, {
                menu: 300,
                page: 60
            }),
            P = function(e) {
                return S[e]
            },
            L = function(e) {
                return N[e]
            },
            R = new i.default,
            M = function() {
                return Math.floor(Date.now() / 1e3)
            };

        function D(e, n) {
            return g ? R.has(e) : n && void 0 !== n.refetching
        }
        var w, k, C = function() {},
            F = {
                get: (k = E(l.default.mark(function e(n, t, a) {
                    var r, o, u;
                    return l.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = function(e) {
                                    return F.set(n, t, e)
                                }, o = null, e.prev = 2, u = (0, _.default)(n, t), e.next = 6, I.get(u);
                            case 6:
                                return o = e.sent, e.next = 9, s({
                                    type: n,
                                    key: u,
                                    data: o,
                                    fetch: a,
                                    setData: r
                                });
                            case 9:
                                o = e.sent, e.next = 17;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(2), console.log("RedisCache.get() stopped working....", {
                                    e: e.t0
                                }), y.error({
                                    err: e.t0.message,
                                    msg: "RedisCache.get() stopped working...."
                                }), C();
                            case 17:
                                return e.abrupt("return", o);
                            case 18:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0, [
                        [2, 12]
                    ])
                })), function(e, n, t) {
                    return k.apply(this, arguments)
                }),
                set: (w = E(l.default.mark(function e(n, t, a) {
                    var r, o, u, i;
                    return l.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = null, e.prev = 1, o = (0, _.default)(n, t), u = P(n), i = d({}, a, {
                                    hardTTL: M() + u
                                }), e.next = 7, I.set(o, i, u);
                            case 7:
                                r = e.sent, e.next = 15;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(1), console.log("RedisCache.set() stopped working....", {
                                    e: e.t0
                                }), y.error({
                                    err: e.t0.message,
                                    msg: "RedisCache.get() stopped working...."
                                }), C();
                            case 15:
                                return e.abrupt("return", r);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0, [
                        [1, 10]
                    ])
                })), function(e, n, t) {
                    return w.apply(this, arguments)
                })
            };
        n.setRedisCacheErrorHandler = function(e) {
            C = e
        }, n.setLogger = function(e) {
            y = e
        };
        n.default = F
    },
    254: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(3),
            o = ((a = r) && a.__esModule ? a : {
                default: a
            }).default || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            };
        n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    loading: !1,
                    menu: null,
                    errors: null
                },
                n = arguments[1];
            switch (n.type) {
                case u.FETCH_MENU_START:
                    return o({}, e, {
                        loading: !0,
                        error: null
                    });
                case u.FETCH_MENU_SUCCESS:
                    return o({}, e, {
                        loading: !1,
                        menu: n.menu,
                        error: null
                    });
                case u.FETCH_MENU_ERROR:
                    return o({}, e, {
                        loading: !1,
                        menu: null,
                        errors: n.errors
                    });
                default:
                    return e
            }
        };
        var u = t(150)
    },
    255: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r, o = l(t(16)),
            u = l(t(17)),
            i = (a = ["\n  query menu($brand: brand!, $product: product!, $region: region!) {\n    menu(brand: $brand, product: $product, region: $region) {\n      header\n      footer\n    }\n  }\n"], r = ["\n  query menu($brand: brand!, $product: product!, $region: region!) {\n    menu(brand: $brand, product: $product, region: $region) {\n      header\n      footer\n    }\n  }\n"], (0, u.default)((0, o.default)(a, {
                raw: {
                    value: (0, u.default)(r)
                }
            })));

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = (0, l(t(18)).default)(i);
        n.default = d
    },
    256: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = function() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a
        };
        var a = {
            hostname: null
        }
    },
    257: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(3),
            o = ((a = r) && a.__esModule ? a : {
                default: a
            }).default || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            };
        n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                sailthruLoaded: !1
            };
            switch (arguments[1].type) {
                case u.SAILTHRU_LOADED:
                    return o({}, e, {
                        sailthruLoaded: !0
                    });
                default:
                    return e
            }
        };
        var u = t(151)
    },
    258: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    mode: ""
                },
                n = arguments[1];
            switch (n.type) {
                case a.PAGE_MODE:
                    return {
                        mode: n.mode
                    };
                default:
                    return e
            }
        };
        var a = t(81)
    },
    259: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = u(t(2)),
            r = u(t(3)).default || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            };
        n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                n = arguments[1];
            switch (n.type) {
                case i:
                    return f(e, n, {
                        status: n.status
                    });
                case l:
                    return f(e, n, {
                        videos: n.videos
                    });
                case d:
                    return f(e, n, {
                        error: n.error
                    });
                default:
                    return e
            }
        };
        var o = t(149);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = o.relatedVideosActions.SET_RELATED_VIDEOS_STATUS,
            l = o.relatedVideosActions.SET_RELATED_VIDEOS,
            d = o.relatedVideosActions.SET_RELATED_VIDEOS_ERROR,
            c = {},
            s = {
                videos: [],
                status: null,
                error: null
            };

        function f(e, n, t) {
            var o, u, i, l = n.queryKey,
                d = e[l],
                c = r({}, s, d, t);
            return r({}, e, (i = c, (u = l) in (o = {}) ? (0, a.default)(o, u, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : o[u] = i, o))
        }
    },
    260: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.getProvider = u, n.getRecommendations = function(e, n) {
            var t = e.provider,
                a = function(e, n) {
                    var t = {};
                    for (var a in e) n.indexOf(a) >= 0 || Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                    return t
                }(e, ["provider"]);
            return u(t).getRecommendations(a, n)
        };
        var a = r(t(261));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = {
            vilynx: r(t(263)).default,
            parsely: a.default
        };

        function u(e) {
            var n = o[e];
            if (!n) throw new Error("Provider not found.");
            return n
        }
    },
    261: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = u(t(23));
        n.getRecommendations = i;
        var r = t(152),
            o = u(t(262));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, n) {
            var t = e.id,
                u = e.count,
                i = void 0 === u ? 1 : u,
                l = e.url,
                d = n.gqlClient;
            return d ? (0, r.isNumber)(t) ? l ? d.query({
                query: o.default,
                variables: {
                    id: t,
                    count: i,
                    url: l
                },
                fetchPolicy: "network-only"
            }).then(function(e) {
                return e.data.videoRecommendations
            }) : a.default.reject(new Error("Invalid URL.")) : a.default.reject(new Error("Invalid ID.")) : a.default.reject(new Error("gqlClient required."))
        }
        n.default = {
            getRecommendations: i
        }
    },
    262: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r, o = c(t(16)),
            u = c(t(17)),
            i = (a = ["\n  query($id: Int!, $count: Int, $url: String!) {\n    videoRecommendations(id: $id, count: $count, url: $url) {\n      ", "\n    }\n  }\n"], r = ["\n  query($id: Int!, $count: Int, $url: String!) {\n    videoRecommendations(id: $id, count: $count, url: $url) {\n      ", "\n    }\n  }\n"], (0, u.default)((0, o.default)(a, {
                raw: {
                    value: (0, u.default)(r)
                }
            }))),
            l = c(t(18)),
            d = c(t(10));

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = (0, l.default)(i, d.default);
        n.default = s
    },
    263: function(e, n, t) {
        "use strict";
        var a = u(t(5)),
            r = u(t(6)),
            o = "function" == typeof r.default && "symbol" == typeof a.default ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
            };

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = f(t(5)),
            l = f(t(6)),
            d = f(t(23)),
            c = "function" == typeof l.default && "symbol" === o(i.default) ? function(e) {
                return void 0 === e ? "undefined" : o(e)
            } : function(e) {
                return e && "function" == typeof l.default && e.constructor === l.default && e !== l.default.prototype ? "symbol" : void 0 === e ? "undefined" : o(e)
            };
        n.getVilynxRecommendations = m, n.getVideosFromIds = T, n.getRecommendations = v;
        var s = f(t(264));

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var _ = 50,
            p = 5e3;

        function E(e) {
            return "object" === ("undefined" == typeof vilynxRecommendations ? "undefined" : c(vilynxRecommendations)) ? d.default.resolve(vilynxRecommendations) : e > p ? d.default.reject(new Error("Timeout waiting for vilynx rec module.")) : (n = _, new d.default(function(e) {
                setTimeout(function() {
                    e()
                }, n)
            })).then(function() {
                return E(e + _)
            });
            var n
        }

        function h() {
            return E(0)
        }

        function m(e, n, t) {
            if (!e) return d.default.reject(new Error("url required."));
            if (!t) return d.default.reject(new Error("Vilynx library is required."));
            var a = {
                limit: n,
                type: ["video"],
                retrieveguid: !0
            };
            return new d.default(function(n, r) {
                t.get(e, function(e) {
                    if (e && e.length) {
                        var t = e.map(function(e) {
                            return parseInt(e, 10)
                        });
                        return n(t)
                    }
                    return r(new Error("No recommendations found."))
                }, a)
            })
        }

        function T(e, n) {
            return e && Array.isArray(e) ? n ? n.query({
                query: s.default,
                variables: {
                    ids: e
                },
                fetchPolicy: "network-only"
            }).then(function(e) {
                return e.data.videos
            }) : d.default.reject(new Error("gqlClient requied")) : d.default.reject(new Error("ids must be an array"))
        }

        function v(e, n) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h,
                a = e.url,
                r = e.count,
                o = void 0 === r ? 1 : r,
                u = n.gqlClient;
            return t().then(function(e) {
                return m(a, o, e).then(function(e) {
                    return T(e, u)
                })
            })
        }
        n.default = {
            getRecommendations: v
        }
    },
    264: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r, o = c(t(16)),
            u = c(t(17)),
            i = (a = ["\n  query($ids: [Int!]!){\n    videos(ids: $ids) {\n      ", "\n    }\n  }\n"], r = ["\n  query($ids: [Int!]!){\n    videos(ids: $ids) {\n      ", "\n    }\n  }\n"], (0, u.default)((0, o.default)(a, {
                raw: {
                    value: (0, u.default)(r)
                }
            }))),
            l = c(t(18)),
            d = c(t(10));

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = (0, l.default)(i, d.default);
        n.default = s
    },
    265: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = i(t(2)),
            r = i(t(3)),
            o = r.default || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            };
        n.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
                n = arguments[1];
            switch (n.type) {
                case l:
                    var t = n.videoPlaceholderKey;
                    return o({}, e, {
                        activeVideoPlaceholderKey: t
                    });
                case d:
                    var a = n.video;
                    return h(e, n, {
                        video: a
                    });
                case c:
                    var r = n.loadingStatus;
                    return h(e, n, {
                        loadingStatus: r
                    });
                case _:
                    var u = n.playbackStatus;
                    return h(e, n, {
                        playbackStatus: u
                    });
                case s:
                    var i = n.xyPosition;
                    return h(e, n, {
                        xyPosition: i
                    });
                case p:
                    var m = n.docked;
                    return h(e, n, {
                        docked: m
                    });
                case f:
                    var T = n.playbackPosition;
                    return h(e, n, {
                        playbackPosition: T
                    });
                default:
                    return e
            }
        };
        var u = t(148);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = u.VIDEO_PLACEHOLDER_ACTIONS.SET_ACTIVE_PLACEHOLDER,
            d = u.VIDEO_PLACEHOLDER_ACTIONS.SET_VIDEO,
            c = u.VIDEO_PLACEHOLDER_ACTIONS.SET_LOADING_STATUS,
            s = u.VIDEO_PLACEHOLDER_ACTIONS.SET_XY_POSITION,
            f = u.VIDEO_PLACEHOLDER_ACTIONS.SET_PLAYBACK_POSITION,
            _ = u.VIDEO_PLACEHOLDER_ACTIONS.SET_PLAYBACK_STATUS,
            p = u.VIDEO_PLACEHOLDER_ACTIONS.SET_DOCKED,
            E = {
                activeVideoPlaceholderKey: null,
                placeholders: {}
            },
            h = function(e, n, t) {
                var u, i, l, d = e.placeholders,
                    c = n.videoPlaceholderKey,
                    s = d[c] || {},
                    f = (0, r.default)({}, s, t),
                    _ = (0, r.default)({}, d, (l = f, (i = c) in (u = {}) ? (0, a.default)(u, i, {
                        value: l,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : u[i] = l, u));
                return o({}, e, {
                    placeholders: _
                })
            }
    },
    266: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.loadVideoById = function(e, n) {
            return n.query({
                query: o.default,
                variables: {
                    videoId: e
                },
                fetchPolicy: "network-only"
            }).then(function(e) {
                return e.data.video
            })
        };
        var a, r = t(267),
            o = (a = r) && a.__esModule ? a : {
                default: a
            }
    },
    267: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r, o = c(t(16)),
            u = c(t(17)),
            i = (a = ["\n  query($videoId: Int!){\n    video(id: $videoId) {\n      ", "\n    }\n  }\n"], r = ["\n  query($videoId: Int!){\n    video(id: $videoId) {\n      ", "\n    }\n  }\n"], (0, u.default)((0, o.default)(a, {
                raw: {
                    value: (0, u.default)(r)
                }
            }))),
            l = c(t(18)),
            d = c(t(10));

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = (0, l.default)(i, d.default);
        n.default = s
    },
    268: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = T(t(23)),
            r = T(t(28)),
            o = T(t(35)),
            u = t(292),
            i = t(30),
            l = t(328),
            d = t(310),
            c = t(327),
            s = t(311),
            f = T(t(60)),
            _ = T(t(271)),
            p = T(t(272)),
            E = T(t(112)),
            h = t(88),
            m = T(t(273));

        function T(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function v(e) {
            return function() {
                var n = e.apply(this, arguments);
                return new a.default(function(e, t) {
                    return function r(o, u) {
                        try {
                            var i = n[o](u),
                                l = i.value
                        } catch (e) {
                            return void t(e)
                        }
                        if (!i.done) return a.default.resolve(l).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(l)
                    }("next")
                })
            }
        }
        var A, b, y = "undefined" == typeof window,
            I = {
                catchServerRenderErrors: function(e, n) {
                    return (n.queryErrors && n.queryErrors.length ? n.queryErrors : [n]).forEach(function(n) {
                        var t = n.networkError,
                            a = n.graphQLErrors || [];
                        if (n instanceof p.default) e.addUnique(n);
                        else if (t) {
                            if (e.hasError(t)) return;
                            e.add(a.length ? new p.default(n).useStack(!1) : t)
                        } else a.length ? e.add(new p.default(n).useStack(!1)) : e.add((n instanceof f.default ? n : new f.default(n)).useStack(!0))
                    }), e
                },
                createClient: function(e) {
                    var n = new c.IntrospectionFragmentMatcher({
                            introspectionQueryResultData: E.default
                        }),
                        t = new c.InMemoryCache({
                            fragmentMatcher: n,
                            dataIdFromObject: function() {
                                return null
                            }
                        });
                    return t.restore(window[h.WINDOW_CACHE_VAR] || {}), new u.ApolloClient({
                        cache: t,
                        ssrMode: !1,
                        link: i.ApolloLink.from(I.createLinksForUserAgent(e)),
                        connectToDevTools: "production" !== e.get("host.tier", "")
                    })
                },
                createClientForServer: function(e, n, t) {
                    var a = new c.IntrospectionFragmentMatcher({
                            introspectionQueryResultData: E.default
                        }),
                        r = new c.InMemoryCache({
                            fragmentMatcher: a,
                            dataIdFromObject: function() {
                                return null
                            }
                        });
                    return new u.ApolloClient({
                        cache: r,
                        ssrMode: !0,
                        link: i.ApolloLink.from(I.createLinksForServer(e, n, t)),
                        connectToDevTools: "production" !== e.get("host.tier", "")
                    })
                },
                createErrorLinkForServer: function(e, n) {
                    return (0, d.onError)(function(t) {
                        var a = (t.operation.getContext().fetchOptions || {}).fetchCapture;
                        return a && (a.response || (a.response = {
                            error: (t.networkError || {}).message || "Network Error",
                            status: -1
                        }), n.push(a)), e.addUnique(new p.default(t).useStack(!1)), t
                    })
                },
                createErrorLinkForUserAgent: function() {
                    return (0, d.onError)(function(e) {
                        return console.error(new p.default(e).useStack(!1).getAsObject()), e
                    })
                },
                createFetchForServer: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        fetch: m.default
                    };
                    return function(n, t) {
                        var a = I.onFetchResponse,
                            r = (t || {}).fetchCapture;
                        if (r) {
                            var o = new Date;
                            r.request = I.getFetchRequestInfo(n, t, o), a = I.onFetchResponseCapture.bind(null, r, o)
                        }
                        return e.fetch(n, t).then(a).catch(I.onFetchError)
                    }
                },
                createFetchForUserAgent: function() {
                    return m.default.apply(void 0, arguments).then(I.onFetchResponse).catch(I.onFetchError)
                },
                createLinkForCapture: function(e) {
                    return new i.ApolloLink(function(n, t) {
                        var a = {};
                        return n.setContext({
                            fetchOptions: {
                                fetchCapture: a
                            }
                        }), t(n).map(function(n) {
                            return a.response && (a.response.data = n.data), e.push(a), n
                        })
                    })
                },
                createLinksForServer: function(e, n, t) {
                    var a = [];
                    n && a.push(I.createErrorLinkForServer(n, t)), I.usesPersistedQueries(e) && a.push((0, s.createPersistedQueryLink)({
                        useGETForHashedQueries: !0
                    }));
                    var r = {
                        fetch: I.createFetchForServer(),
                        uri: e.get("PHOENIXQL_URI")
                    };
                    return t && a.push(I.createLinkForCapture(t)), a.push((0, l.createHttpLink)(r)), a
                },
                createLinksForUserAgent: function(e) {
                    var n = [];
                    return n.push(I.createErrorLinkForUserAgent()), I.usesPersistedQueries(e) && n.push((0, s.createPersistedQueryLink)({
                        useGETForHashedQueries: !0
                    })), n.push((0, l.createHttpLink)({
                        uri: e.get("PHOENIXQL_URI"),
                        fetch: I.createFetchForUserAgent
                    })), n
                },
                getFetchRequestInfo: function(e, n, t) {
                    var a = {
                        request: e,
                        method: n.method,
                        headers: n.headers,
                        body: n.body,
                        sent: t
                    };
                    try {
                        a.body = JSON.parse(a.body)
                    } catch (e) {}
                    return a
                },
                onFetchError: function(e) {
                    var n = e instanceof _.default ? e : new _.default(e).describe("Network error during GraphQL request").useStack(!1);
                    if (y) throw n;
                    console.error(n.getAsObject())
                },
                onFetchResponse: (b = v(o.default.mark(function e(n) {
                    return o.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", n);
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                })), function(e) {
                    return b.apply(this, arguments)
                }),
                onFetchResponseCapture: (A = v(o.default.mark(function e(n, t, a) {
                    var u, i;
                    return o.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return u = a.headers.raw(), i = {
                                    redirected: a.redirected,
                                    status: a.status,
                                    statusText: a.statusText,
                                    type: a.type,
                                    duration: Date.now() - t.getTime(),
                                    headers: (0, r.default)(u).reduce(function(e, n) {
                                        return e[n] = u[n][0], e
                                    }, {})
                                }, n.response = i, e.abrupt("return", a);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                })), function(e, n, t) {
                    return A.apply(this, arguments)
                }),
                usesPersistedQueries: function(e) {
                    switch (e.get("PHOENIXQL_PERQ", "").toLowerCase()) {
                        case "":
                        case "0":
                        case "n":
                        case "no":
                        case "off":
                        case "false":
                        case "disable":
                        case "disabled":
                            return !1;
                        default:
                            return !0
                    }
                }
            };
        n.default = I
    },
    270: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function(e) {
            Object.defineProperty(this, "name", {
                value: this.constructor.name
            });
            var n = e || {},
                t = n.message,
                a = n.stack;
            a ? this.stack = a : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), null == e ? this.message = "" : e instanceof Error ? this.message = t : this.message = String(e)
        };
        (0, t(140).subclass)(Error, a), n.default = a
    },
    271: function(e, n, t) {
        "use strict";
        var a = u(t(5)),
            r = u(t(6)),
            o = "function" == typeof r.default && "symbol" == typeof a.default ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
            };

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = p(t(2)),
            l = p(t(102)),
            d = p(t(7)),
            c = p(t(8)),
            s = p(t(9)),
            f = function() {
                function e(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var a = n[t];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, i.default)(e, a.key, a)
                    }
                }
                return function(n, t, a) {
                    return t && e(n.prototype, t), a && e(n, a), n
                }
            }(),
            _ = p(t(60));

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var E = function(e) {
            function n() {
                return function(e, n) {
                        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, n),
                    function(e, n) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !n || "object" !== (void 0 === n ? "undefined" : o(n)) && "function" != typeof n ? e : n
                    }(this, (n.__proto__ || (0, s.default)(n)).apply(this, arguments))
            }
            return function(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === n ? "undefined" : o(n)));
                e.prototype = (0, c.default)(n && n.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), n && (d.default ? (0, d.default)(e, n) : e.__proto__ = n)
            }(n, _.default), f(n, [{
                key: "describe",
                value: function(e) {
                    return this.addFields({
                        DESC: e ? String(e) : null
                    }), this
                }
            }, {
                key: "getAsObject",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.isStackEnabled(),
                        t = function e(n, t, a) {
                            null === n && (n = Function.prototype);
                            var r = (0, l.default)(n, t);
                            if (void 0 === r) {
                                var o = (0, s.default)(n);
                                return null === o ? void 0 : e(o, t, a)
                            }
                            if ("value" in r) return r.value;
                            var u = r.get;
                            return void 0 !== u ? u.call(a) : void 0
                        }(n.prototype.__proto__ || (0, s.default)(n.prototype), "getAsObject", this).call(this, e),
                        a = this.message,
                        r = this.fields;
                    return r && r.DESC ? (t.ERROR = r.DESC, delete t.DESC, a && (t.DETAILS = a)) : a && (t.ERROR = a), t
                }
            }]), n
        }();
        n.default = E
    },
    272: function(e, n, t) {
        "use strict";
        var a = u(t(5)),
            r = u(t(6)),
            o = "function" == typeof r.default && "symbol" == typeof a.default ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
            };

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = h(t(2)),
            l = h(t(102)),
            d = h(t(7)),
            c = h(t(8)),
            s = h(t(40)),
            f = h(t(28)),
            _ = h(t(9)),
            p = function() {
                function e(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var a = n[t];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, i.default)(e, a.key, a)
                    }
                }
                return function(n, t, a) {
                    return t && e(n.prototype, t), a && e(n, a), n
                }
            }(),
            E = h(t(60));

        function h(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var m = function(e) {
            function n(e) {
                ! function(e, n) {
                    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                }(this, n);
                var t = e || {},
                    a = t.networkError,
                    r = t.graphQLErrors,
                    u = t.message,
                    i = t.operation,
                    l = function(e, n) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !n || "object" !== (void 0 === n ? "undefined" : o(n)) && "function" != typeof n ? e : n
                    }(this, (n.__proto__ || (0, _.default)(n)).call(this));
                return l.originalError = e, l.operation = i || (a ? a.operation : null), l.networkError = a, l.graphQLErrors = r, l.message = u, l
            }
            return function(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === n ? "undefined" : o(n)));
                e.prototype = (0, c.default)(n && n.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), n && (d.default ? (0, d.default)(e, n) : e.__proto__ = n)
            }(n, E.default), p(n, [{
                key: "getAsObject",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.isStackEnabled(),
                        t = function e(n, t, a) {
                            null === n && (n = Function.prototype);
                            var r = (0, l.default)(n, t);
                            if (void 0 === r) {
                                var o = (0, _.default)(n);
                                return null === o ? void 0 : e(o, t, a)
                            }
                            if ("value" in r) return r.value;
                            var u = r.get;
                            return void 0 !== u ? u.call(a) : void 0
                        }(n.prototype.__proto__ || (0, _.default)(n.prototype), "getAsObject", this).call(this, e),
                        a = [],
                        r = this.operation,
                        o = this.networkError,
                        u = this.graphQLErrors,
                        i = r || {},
                        d = i.operationName,
                        c = i.variables,
                        p = r && r.getContext && r.getContext(),
                        h = p && p.response || o && o.response || {},
                        m = h.url,
                        T = h.headers,
                        v = h.status,
                        A = h.statusText,
                        b = {};
                    m && m.href && (b.URL = m.href), d && (b.OPERATION = d, a.push(d)), c && (b.VARIABLES = c, a.push(c)), (0, f.default)(b).length && (t.REQUEST = b);
                    var y = {};
                    if (v) {
                        var I = [v];
                        A && I.push(A), y.STATUS = I.join(" ")
                    }
                    if (T) {
                        var g = "function" == typeof T.raw ? T.raw() : T,
                            O = {};
                        g.date && (O.DATE = g.date), g["content-type"] && (O["CONTENT TYPE"] = g["content-type"]), g["access-control-allow-origin"] && (O["ALLOW ORIGIN"] = g["access-control-allow-origin"]), g["x-aicache-os"] && (O["AICACHE OS"] = g["x-aicache-os"]), (0, f.default)(O).length && (y.HEADERS = O)
                    }(0, f.default)(y).length && (t.RESPONSE = y);
                    var S = {};
                    if (o) {
                        var N = {},
                            P = [];
                        if (o instanceof E.default)(N = o.getAsObject(e)).HASH ? P.push(N.HASH) : N.MESSAGE && P.push(N.MESSAGE);
                        else {
                            if ("message" in o && (N.MESSAGE = o.message, P.push(o.message)), "stack" in o) {
                                var L = String(o.stack).split(/\s*\n\s*/);
                                N.TRACE = L.length > 1 ? L : o.stack
                            }
                            N.length || (N.MESSAGE = String(o), P.push(N.MESSAGE))
                        }(0, f.default)(N).length && (P.length && (N.HASH = E.default.getHashDigest((0, s.default)(P)), a.push(N.HASH)), S["NETWORK ERROR"] = N)
                    }
                    var R = [];
                    return (u || []).forEach(function(e) {
                        var n = {},
                            t = [],
                            r = e.message,
                            o = e.locations,
                            u = e.path;
                        r && (n.MESSAGE = r, t.push(r)), o && (n.LOCATION = o, t.push(o)), u && (n.PATH = u, t.push(u)), (0, f.default)(n).length && t.length && (n.HASH = E.default.getHashDigest((0, s.default)(t)), a.push(n.HASH), R.push(n))
                    }), R.length && (S["GRAPHQL ERRORS"] = R), (0, f.default)(S).length && (t.ERRORS = S), a.length && (t.HASH = E.default.getHashDigest((0, s.default)(a))), t
                }
            }, {
                key: "hasError",
                value: function(e) {
                    if (!e) return !1;
                    var n = this.originalError,
                        t = this.networkError,
                        a = this.graphQLErrors;
                    if (e === n || e === t) return !0;
                    var r = (a || []).length,
                        o = void 0;
                    for (o = 0; o < r; o += 1)
                        if (e === a[o]) return !0;
                    return !1
                }
            }]), n
        }();
        n.default = m
    },
    273: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = d(t(3)),
            r = a.default || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            },
            o = t(120),
            u = d(t(64)),
            i = d(t(322)),
            l = t(325);

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function c(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                t = /^[\/][\/]/.test(e) ? "https:" + e : e,
                d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        n = (0, o.parse)(e) || {},
                        t = String(n.protocol).replace(":", ""),
                        a = (0, l.getProxyForUrl)(e);
                    if (!a) return {
                        proxy: null,
                        url: null,
                        method: "noProxy"
                    };
                    var r, u = (0, o.parse)(a) || {},
                        i = String(u.protocol).replace(":", ""),
                        d = u.port || ("https" === i ? 443 : 80);
                    return u.port = d, {
                        proxy: u,
                        target: n,
                        method: t.concat("Over").concat((r = i).charAt(0).toUpperCase() + r.slice(1))
                    }
                }(t),
                c = d.proxy,
                s = d.target,
                f = d.method;
            if ("noProxy" === f || n.agent) return (0, u.default)(t, n);
            if (f.startsWith("httpOver")) {
                var _ = s.hostname;
                s.path = s.protocol.concat("//").concat(s.host).concat(s.path), s.port = c.port, s.host = c.host, s.hostname = c.hostname, s.auth = c.auth;
                var p = (n || {}).headers || {};
                return (0, u.default)(s, r({}, n, {
                    headers: r({}, p, {
                        Host: _
                    })
                }))
            }
            var E = i.default[f]((0, a.default)({
                    proxy: {
                        port: c.port,
                        host: c.hostname,
                        proxyAuth: c.auth
                    }
                })),
                h = E ? {
                    agent: E
                } : {};
            return (0, u.default)(t, r({}, n, h))
        }
        c.default = c, n.default = c
    },
    274: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = i(t(1)),
            r = i(t(0)),
            o = t(38),
            u = t(22);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = function(e) {
            var n = e.children,
                t = e.store,
                r = e.client;
            return a.default.createElement(o.ApolloProvider, {
                client: r
            }, a.default.createElement(u.Provider, {
                store: t
            }, n))
        };
        l.propTypes = {
            children: r.default.node.isRequired,
            store: r.default.object.isRequired,
            client: r.default.object.isRequired
        }, n.default = l
    },
    315: function(e, n) {},
    318: function(e, n) {},
    319: function(e, n) {},
    323: function(e, n) {},
    324: function(e, n) {},
    333: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = o(t(1)),
            r = o(t(0));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = t(645),
            i = function(e) {
                return e.showSpinner ? a.default.createElement("div", {
                    className: u.spinnerParent
                }, a.default.createElement("div", {
                    className: u.spinner,
                    style: {
                        width: e.spinnerSize,
                        height: e.spinnerSize
                    }
                })) : a.default.createElement("div", null)
            };
        i.propTypes = {
            showSpinner: r.default.bool,
            spinnerSize: r.default.number
        }, i.defaultProps = {
            showSpinner: !1,
            spinnerSize: 40
        }, n.default = i
    },
    37: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = u(t(20)),
            r = u(t(78)),
            o = t(113);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = {
            _current: null,
            monitorBreakpoints: function() {
                var e = this;
                "undefined" != typeof window && (void 0 !== window.mps && "function" == typeof window.mps.responsiveApply && window.addEventListener("breakpointChange", function() {
                    return window.mps.responsiveApply()
                }), a.default.on("resize", function() {
                    return e.refreshValue()
                }), setTimeout(function() {
                    a.default.trigger("resize")
                }, 200))
            },
            refreshTO: null,
            maxRecursiveRefresh: 100,
            currentRecursiveRefresh: 0,
            refreshValue: function() {
                var e = this;
                if ("undefined" != typeof window) {
                    var n = window.getComputedStyle(document.querySelector("body"), ":after").getPropertyValue("content"),
                        t = String(n).replace(/\"/g, "");
                    if ("none" === t && (t = this.getBreakpointNameFromViewportWidth()), null === this._current && t.length < 1) clearTimeout(this.refreshTO), this.currentRecursiveRefresh <= this.maxRecursiveRefresh && (this.refreshTO = setTimeout(function() {
                        e.currentRecursiveRefresh += 1, e.refreshValue()
                    }, 500));
                    else if (t !== this._current && t.length > 0) {
                        this._current = t, a.default.trigger("breakpointChange", {
                            newBreakpoint: t
                        });
                        var o = r.default.createNewEvent("breakpointChange");
                        window.dispatchEvent(o)
                    }
                }
            },
            getBreakpointNameFromViewportWidth: function() {
                var e = window.innerWidth;
                return e ? o.BREAKPOINT_NAMES.reduce(function(n, t) {
                    return n || (e <= o.BREAKPOINT_RANGES[t].max ? t : null)
                }, null) : o.BREAKPOINT_NAMES[o.BREAKPOINT_NAMES.length - 1]
            },
            current: function() {
                return this._current
            },
            isMobile: function() {
                return "mobile" === this._current || "tablet" === this._current
            },
            isSmallMobile: function() {
                return "mobile" === this._current
            },
            isDesktop: function() {
                return "mobile" !== this._current && "tablet" !== this._current
            },
            isSmallDesktop: function() {
                return "small_desktop" === this._current
            },
            isLargeDesktop: function() {
                return "large_desktop" === this._current
            }
        };
        n.default = i
    },
    53: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = n.SET_NAV_PAGE_TYPE = "SET_NAV_PAGE_TYPE",
            r = n.SET_NAV_ARTICLE_TITLE = "SET_NAV_ARTICLE_TITLE",
            o = n.SET_NAV_NEWS = "SET_NAV_NEWS",
            u = n.SET_NAV_LIVE = "SET_NAV_LIVE",
            i = n.SET_NAV_COUNT_DOWN_CLOCK = "SET_NAV_COUNT_DOWN_CLOCK",
            l = n.SET_NAV_PARTNER_EXP = "SET_NAV_PARTNER_EXP",
            d = n.SET_NAV_ARTICLE_SETTINGS = "SET_NAV_ARTICLE_SETTINGS",
            c = n.SET_MEGA_MENU_EXPANDED_FLAG = "SET_MEGA_MENU_EXPANDED_FLAG",
            s = n.SET_MEGA_MENU_TOGGLE_FLAG = "SET_MEGA_MENU_TOGGLE_FLAG",
            f = n.SET_INTRA_NAVIGATION_FLAG = "SET_INBOUND_NAVIGATION_FLAG";
        n.setNavPageType = function(e) {
            return {
                type: a,
                pageType: e
            }
        }, n.setNavArticleTitle = function(e) {
            return {
                type: r,
                articleTitle: e
            }
        }, n.setNavNews = function(e) {
            return {
                type: o,
                hasNewsAlert: e
            }
        }, n.setNavLive = function(e) {
            return {
                type: u,
                hasLiveAlert: e
            }
        }, n.setNavCountDownClock = function(e) {
            return {
                type: i,
                hasCountDownClock: e
            }
        }, n.setNavPartnerExp = function(e) {
            return {
                type: l,
                hasParterExp: e
            }
        }, n.setNavArticleSettings = function(e) {
            return {
                type: d,
                articleSettings: e
            }
        }, n.setMegaMenuToggleFlag = function(e) {
            return {
                type: s,
                shouldToggle: e
            }
        }, n.setMegaMenuExpandedFlag = function(e) {
            return {
                type: c,
                isExpanded: e
            }
        }, n.setIntraNavigationFlag = function(e) {
            return {
                type: f,
                isIntraSiteLink: e
            }
        }
    },
    57: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = "https://quote.cnbc.com/quote-html-webservice/quote.htm?",
            r = "noform=1&partnerId=2&fund=1&exthrs=0&output=json";
        n.default = {
            makeBasicAction: function(e) {
                return function(n, t) {
                    return {
                        type: e,
                        market: n,
                        requestMethod: t
                    }
                }
            },
            makeReceiveAction: function(e) {
                return function(n) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        a = arguments[2],
                        r = arguments[3],
                        o = void 0;
                    return o = "quick" === a || "ltvQuote" === a ? n.QuickQuoteResult.QuickQuote : "extended" === a ? n.ExtendedQuoteResult.ExtendedQuote : n.FastQuoteResult.FastQuote, t ? {
                        type: e,
                        marketData: o,
                        market: t,
                        receivedAt: Date.now(),
                        tickerProperty: r
                    } : {
                        type: e,
                        marketData: o,
                        receivedAt: Date.now(),
                        tickerProperty: r
                    }
                }
            },
            makeFetchAction: function(e, n) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "nvda|amzn|hd|brk.a|pnk",
                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "extended",
                        u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "issue_id";
                    return function(l) {
                        l(e(t, o));
                        var d = "" + a + r + "&symbols=" + t + "&requestMethod=" + o;
                        return u && (d = "" + a + r + "&symbolType=issue&symbols=" + t + "&requestMethod=" + o), fetch(d).then(function(e) {
                            return e.json()
                        }).then(function(e) {
                            return l(n(e, t, o, i))
                        })
                    }
                }
            },
            makeShouldFetchAction: function(e) {
                return function(n) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (t) {
                        var a = n[e][t];
                        return !a || !a.isFetching && a.didInvalidate
                    }
                    return !n[e] || !n[e].isFetching
                }
            },
            makeFetchIfNeededAction: function(e, n) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "extended",
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "issue_id";
                    return function(u, i) {
                        return !!e(i(), t, a) && u(t ? n(t, a, r, o) : n())
                    }
                }
            },
            makeShouldFetchBatchedAction: function(e) {
                return function(n) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (t) {
                        var a = t.split("|").filter(function(e) {
                                return e.length > 0
                            }),
                            r = !1,
                            o = !1,
                            u = !1;
                        return a.forEach(function(t) {
                            var a = n[e][t];
                            a ? a.isFetching ? o = !0 : u = a.didInvalidate : r = !0
                        }), !!r || !o && u
                    }
                    return !n[e] || !n[e].isFetching
                }
            }
        }
    },
    59: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t(28),
            o = (a = r) && a.__esModule ? a : {
                default: a
            };
        n.default = function(e, n) {
            if (n.path) {
                var t = n.path,
                    a = void 0 === t ? "" : t;
                n.path = function(e) {
                    return e && e.indexOf("?") > 0 ? e.substr(0, e.indexOf("?")) : e
                }(a)
            }
            var r, u;
            n.mode = "", n.hostname = "", r = n, u = {}, (0, o.default)(r).forEach(function(e) {
                var n = r[e];
                "" !== n && null !== n && (u[e] = n)
            }), n = u;
            var i = (0, o.default)(n).sort(),
                l = "[type:" + e;
            return i.forEach(function(e) {
                l += "," + e + ":" + n[e]
            }), (l = (l += "]").replace(/\s/g, "")).toLowerCase()
        }
    },
    60: function(e, n, t) {
        "use strict";
        var a = u(t(5)),
            r = u(t(6)),
            o = "function" == typeof r.default && "symbol" == typeof a.default ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
            };

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = b(t(5)),
            l = b(t(6)),
            d = b(t(2)),
            c = b(t(7)),
            s = b(t(8)),
            f = b(t(28)),
            _ = b(t(40)),
            p = b(t(3)),
            E = b(t(9)),
            h = "function" == typeof l.default && "symbol" === o(i.default) ? function(e) {
                return void 0 === e ? "undefined" : o(e)
            } : function(e) {
                return e && "function" == typeof l.default && e.constructor === l.default && e !== l.default.prototype ? "symbol" : void 0 === e ? "undefined" : o(e)
            },
            m = function() {
                function e(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var a = n[t];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, d.default)(e, a.key, a)
                    }
                }
                return function(n, t, a) {
                    return t && e(n.prototype, t), a && e(n, a), n
                }
            }(),
            T = b(t(313)),
            v = b(t(105)),
            A = b(t(270));

        function b(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var y = function(e) {
            function n(e) {
                ! function(e, n) {
                    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                }(this, n);
                var t = function(e, n) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !n || "object" !== (void 0 === n ? "undefined" : o(n)) && "function" != typeof n ? e : n
                    }(this, (n.__proto__ || (0, E.default)(n)).call(this, e)),
                    a = e || {},
                    r = a.dateTimeCreated,
                    u = a.stackEnabled,
                    i = a.fields;
                return t.dateTimeCreated = r || Date.now(), t.useStack(u), t.setFields(i), t
            }
            return function(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === n ? "undefined" : o(n)));
                e.prototype = (0, s.default)(n && n.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), n && (c.default ? (0, c.default)(e, n) : e.__proto__ = n)
            }(n, A.default), m(n, [{
                key: "addFields",
                value: function(e) {
                    return e && (this.fields || (this.fields = {}), (0, p.default)(this.fields, e)), this
                }
            }, {
                key: "format",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.isStackEnabled();
                    return (0, _.default)(this.getAsObject(e))
                }
            }, {
                key: "getAsObject",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.isStackEnabled(),
                        t = {
                            TIME: this.getFormattedDateTime()
                        },
                        a = [],
                        r = this.message,
                        o = this.stack,
                        u = this.fields;
                    if (r && (t.ERROR = r, a.push(r)), e && o) {
                        var i = String(o).split(/\s*\n\s*/);
                        t.TRACE = i.length > 1 ? i : o, a.push(o)
                    }
                    return u && (0, f.default)(u).forEach(function(a) {
                        var r = u[a];
                        null != r && (t[a] = "object" === (void 0 === r ? "undefined" : h(r)) && r instanceof n ? r.getAsObject(e) : r)
                    }), a.length && (t.HASH = n.getHashDigest((0, _.default)(a))), t
                }
            }, {
                key: "getFormattedDateTime",
                value: function() {
                    return this.dateTimeCreated ? n.getFormattedDateTime(this.dateTimeCreated) : null
                }
            }, {
                key: "isStackEnabled",
                value: function() {
                    return null == this.stackEnabled || this.stackEnabled
                }
            }, {
                key: "setFields",
                value: function(e) {
                    return this.fields = e ? (0, p.default)({}, e) : null, this
                }
            }, {
                key: "useStack",
                value: function(e) {
                    return this.stackEnabled = e, this
                }
            }], [{
                key: "getFormattedDateTime",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
                    return (0, v.default)(e).format()
                }
            }, {
                key: "getHashDigest",
                value: function(e) {
                    return e ? T.default.createHash("md5").update(e).digest("hex").substring(0, 10) : null
                }
            }]), n
        }();
        n.default = y
    },
    71: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = n.PIANO_USERREF = "PIANO_USERREF",
            r = n.LOGIN_MODE = "LOGIN_MODE",
            o = n.USER_SIGNED_OUT = "USER_SIGNED_OUT",
            u = n.USER_SIGNED_IN = "USER_SIGNED_IN",
            i = n.TOGGLE_LOGIN_POPUP = "TOGGLE_LOGIN_POPUP",
            l = n.TOGGLE_SIGNUP_POPUP = "TOGGLE_SIGNUP_POPUP",
            d = n.LOG_OUT_USER = "LOG_OUT_USER",
            c = n.IS_AUTHENTICATED = "IS_AUTHENTICATED",
            s = n.IS_NEW_PRO_USER = "IS_NEW_PRO_USER";

        function f(e, n, t) {
            var a = new Date;
            a.setTime(a.getTime() + 24 * t * 60 * 60 * 1e3);
            var r = "expires=" + a.toUTCString();
            document.cookie = e + "=" + n + ";" + r + ";path=/;domain=.cnbc.com"
        }
        n.onUserLoggedIn = function() {
            f("c_to", "YES!", 1);
            var e = (window.SURF || {}).globals;
            return {
                type: u,
                user: e.user,
                uid: e.session.uid,
                surfSessionToken: e.session.session_token,
                isLoggedIn: !0
            }
        }, n.tpUserRef = function(e) {
            return {
                type: a,
                tpToken: e
            }
        }, n.logInType = function(e) {
            return {
                type: r,
                logInMode: e
            }
        }, n.onUserSignedOut = function() {
            return f("c_to", "no", 1), {
                type: o,
                user: null,
                surfSessionToken: null,
                uid: "Not Logged In",
                message: "",
                isLoggedIn: !1,
                tpToken: "",
                isAuthenticated: !1
            }
        }, n.MenuActions = {
            toggleLogInPopupWindow: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return {
                    type: i,
                    message: e
                }
            },
            toggleSignUpPopupWindow: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return {
                    type: l,
                    message: e
                }
            },
            logOutUser: function() {
                return window.SURF.signout({}), {
                    type: d
                }
            }
        }, n.setIsAuthenticated = function(e) {
            return {
                type: c,
                isAuthenticated: e
            }
        }, n.isNewProUser = function(e) {
            return {
                type: s,
                newProUser: e
            }
        }
    },
    78: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = {
            createNewEvent: function(e) {
                var n = "";
                return "function" == typeof Event ? n = new Event(e) : (n = document.createEvent("Event")).initEvent(e, !0, !0), n
            }
        };
        n.default = a
    },
    81: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.UPDATE_PAGE_TEMPLATE = n.CHANGE_LAYOUT = n.UPDATE_MODULE_SOURCE = n.UPDATE_PAGE_DATA = n.UPDATE_STORY = n.PAGE_MODE = n.FETCH_PAGE_ERROR = n.FETCH_PAGE_SUCCESS = n.FETCH_PAGE_START = void 0;
        var a = i(t(23)),
            r = i(t(35));
        n.updateStory = function(e) {
            return {
                type: f,
                data: e
            }
        }, n.updatePageData = function(e) {
            return {
                type: _,
                data: e
            }
        }, n.updateModuleSource = function(e) {
            return {
                type: p,
                data: e
            }
        }, n.changeLayout = function(e) {
            return {
                type: E,
                data: e
            }
        }, n.updateTemplate = function(e) {
            return {
                type: h,
                data: e
            }
        }, n.isHomePage = b, n.fetchPage = function() {
            var e = this,
                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = n.client,
                i = n.path,
                d = n.hostname,
                c = n.mode;
            return s = r.default.mark(function n(a) {
                    var s, f, _, p, E, h, A;
                    return r.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a({
                                    type: l
                                }), a(v(c)), e.prev = 2, "web", s = {
                                    path: i,
                                    product: "web",
                                    hostname: d,
                                    mode: c
                                }, f = b(i) ? "network-only" : "cache-first", "all", e.next = 9, u.default.getQueryData({
                                    client: t,
                                    query: o.default,
                                    type: "page",
                                    variables: s,
                                    fetchPolicy: f,
                                    errorPolicy: "all"
                                });
                            case 9:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 12;
                                    break
                                }
                                e.t0 = {};
                            case 12:
                                if (_ = e.t0, E = (p = _ || {}).data, h = p.errors, A = (E || {}).page, !Array.isArray(h) || !h.length) {
                                    e.next = 17;
                                    break
                                }
                                return e.abrupt("return", a(T({
                                    page: A,
                                    errors: h
                                })));
                            case 17:
                                return e.abrupt("return", a(m({
                                    page: A
                                })));
                            case 20:
                                return e.prev = 20, e.t1 = e.catch(2), console.log("Page fetching errors::", e.t1.graphQLErrors), e.abrupt("return", a(T({
                                    errors: e.t1.graphQLErrors
                                })));
                            case 24:
                            case "end":
                                return e.stop()
                        }
                    }, n, e, [
                        [2, 20]
                    ])
                }), f = function() {
                    var e = s.apply(this, arguments);
                    return new a.default(function(n, t) {
                        return function r(o, u) {
                            try {
                                var i = e[o](u),
                                    l = i.value
                            } catch (e) {
                                return void t(e)
                            }
                            if (!i.done) return a.default.resolve(l).then(function(e) {
                                r("next", e)
                            }, function(e) {
                                r("throw", e)
                            });
                            n(l)
                        }("next")
                    })
                },
                function(e) {
                    return f.apply(this, arguments)
                };
            var s, f
        };
        var o = i(t(195)),
            u = i(t(87));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = n.FETCH_PAGE_START = "FETCH_PAGE_START",
            d = n.FETCH_PAGE_SUCCESS = "FETCH_PAGE_SUCCESS",
            c = n.FETCH_PAGE_ERROR = "FETCH_PAGE_ERROR",
            s = n.PAGE_MODE = "PAGE_MODE",
            f = n.UPDATE_STORY = "UPDATE_STORY",
            _ = n.UPDATE_PAGE_DATA = "UPDATE_PAGE_DATA",
            p = n.UPDATE_MODULE_SOURCE = "UPDATE_MODULE_SOURCE",
            E = n.CHANGE_LAYOUT = "CHANGE_LAYOUT",
            h = n.UPDATE_PAGE_TEMPLATE = "UPDATE_PAGE_TEMPLATE";

        function m(e) {
            var n = e.page;
            return {
                type: d,
                page: n
            }
        }

        function T(e) {
            var n = e.page,
                t = e.errors;
            return {
                type: c,
                page: n,
                errors: t
            }
        }

        function v(e) {
            return {
                type: s,
                mode: e
            }
        }
        var A = ["/", "/us-top-news-and-analysis/", "/world/", "/world-top-news/"];

        function b(e) {
            return A.includes(e)
        }
    },
    867: function(e, n, t) {
        t(514), e.exports = t(1069)
    },
    87: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r, o, u = _(t(23)),
            i = _(t(35)),
            l = (a = p(i.default.mark(function e(n) {
                var t, a, r = n.client,
                    o = n.query,
                    u = n.type,
                    l = n.variables,
                    d = n.fetchPolicy,
                    c = void 0 === d ? E : d,
                    f = n.errorPolicy,
                    _ = void 0 === f ? h : f;
                return i.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (t = function() {
                                    return r.query({
                                        query: o,
                                        variables: l,
                                        fetchPolicy: c,
                                        errorPolicy: _
                                    })
                                }, a = void 0, !v && !A(l)) {
                                e.next = 8;
                                break
                            }
                            return e.next = 5, t();
                        case 5:
                            a = e.sent, e.next = 18;
                            break;
                        case 8:
                            return e.next = 10, s.default.get(u, l, t);
                        case 10:
                            if (a = e.sent) {
                                e.next = 18;
                                break
                            }
                            return e.next = 14, t();
                        case 14:
                            if (!(a = e.sent) || a.errors) {
                                e.next = 18;
                                break
                            }
                            return e.next = 18, s.default.set(u, l, a);
                        case 18:
                            return e.abrupt("return", a);
                        case 19:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            })), function(e) {
                return a.apply(this, arguments)
            }),
            d = (r = p(i.default.mark(function e(n, t) {
                var a, r, o;
                return i.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return a = {
                                brand: t.brand || "cnbc",
                                product: t.product || "web",
                                region: t.region || "USA",
                                path: t.url || t.path || "/us-top-news-and-analysis/"
                            }, r = b(n, a), o = void 0, e.prev = 3, e.next = 6, m.del(r);
                        case 6:
                            o = e.sent, e.next = 12;
                            break;
                        case 9:
                            e.prev = 9, e.t0 = e.catch(3), o = e.t0;
                        case 12:
                            return e.abrupt("return", {
                                input: {
                                    type: n,
                                    key: r
                                },
                                result: o
                            });
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }, e, this, [
                    [3, 9]
                ])
            })), function(e, n) {
                return r.apply(this, arguments)
            }),
            c = (o = p(i.default.mark(function e() {
                var n;
                return i.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return n = void 0, e.prev = 1, e.next = 4, m.flushdb();
                        case 4:
                            n = e.sent, e.next = 10;
                            break;
                        case 7:
                            e.prev = 7, e.t0 = e.catch(1), n = e.t0;
                        case 10:
                            return e.abrupt("return", {
                                input: {
                                    type: "flushdb"
                                },
                                result: n
                            });
                        case 11:
                        case "end":
                            return e.stop()
                    }
                }, e, this, [
                    [1, 7]
                ])
            })), function() {
                return o.apply(this, arguments)
            }),
            s = _(t(252)),
            f = _(t(59));

        function _(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function p(e) {
            return function() {
                var n = e.apply(this, arguments);
                return new u.default(function(e, t) {
                    return function a(r, o) {
                        try {
                            var i = n[r](o),
                                l = i.value
                        } catch (e) {
                            return void t(e)
                        }
                        if (!i.done) return u.default.resolve(l).then(function(e) {
                            a("next", e)
                        }, function(e) {
                            a("throw", e)
                        });
                        e(l)
                    }("next")
                })
            }
        }
        var E = "cache-first",
            h = "none",
            m = void 0,
            T = "undefined" == typeof window;
        T && (m = t(! function() {
            var e = new Error("Cannot find module './redisClient'");
            throw e.code = "MODULE_NOT_FOUND", e
        }()));
        var v = !T,
            A = function(e) {
                var n = e.mode;
                return "pcmpreview" === (void 0 === n ? null : n)
            };

        function b(e, n) {
            var t = n.brand,
                a = n.product,
                r = n.region,
                o = n.path,
                u = n.hostname;
            return "menu" === e ? (0, f.default)(e, {
                brand: t,
                product: a,
                region: r
            }) : "page" === e ? (0, f.default)(e, {
                path: o,
                product: a,
                hostname: u
            }) : {}
        }
        var y = {
            getQueryData: l,
            flushData: function(e) {
                if (!m) return {
                    error: "No Redis client"
                };
                var n = e.type || "page";
                return "all" === n ? c() : d(n, e)
            }
        };
        n.default = y
    },
    88: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.WINDOW_STORE_VAR = "__s_data", n.WINDOW_CACHE_VAR = "__c_data"
    },
    89: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = o(t(50)),
            r = o(t(99));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        n.flattenDeep = function e(n) {
            return n.reduce(function(n, t) {
                return n.concat(Array.isArray(t) ? e(t) : t)
            }, [])
        }, n.removeDuplicates = function(e) {
            return [].concat(function(e) {
                if (Array.isArray(e)) {
                    for (var n = 0, t = Array(e.length); n < e.length; n++) t[n] = e[n];
                    return t
                }
                return (0, a.default)(e)
            }(new r.default(e)))
        }, n.findId = function() {
            return ((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).find(function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return e.id && "" !== e.id
            }) || {}).id
        }
    }
});