var googletag = googletag || {};
googletag.cmd = googletag.cmd || [], googletag.cmd.push(function() {
    googletag.pubads().disableInitialLoad();
});
try {
    window.an_wsj_template = document.getElementsByName('article.template')[0].content;
    if (window.an_wsj_template.indexOf('immersive') > -1) {
        window.an_wsj_template = "immersive";
    }
} catch (e) {}

/* Generated from hbw: 1.5.0 */
var pbjs = window.pbjs || {};
pbjs.que = pbjs.que || [];
var googletag = window.googletag || {};
googletag.cmd = googletag.cmd || [];
var PREBID_TIMEOUT = 750,
    REQUEST_BIDS_ON_PAGE_LOAD = !0,
    SHOW_ADS_ON_PAGE_LOAD = {};
SHOW_ADS_ON_PAGE_LOAD.INITIALIZE_TARGETING_DATA = !1, SHOW_ADS_ON_PAGE_LOAD.ALLOW = !1;
var IS_PREBID_LEGACY = !1;
! function() {
    function e(e) {
        var a = !1,
            d = e.on_page_var.name.split(".");
        return e.on_page_var.value.forEach(function(n) {
            for (var r = window, i = 0; i <= d.length; i++) r[d[i]] && (r[d[i]] === n && (s("var", e.on_page_var.name, n), a = !0), r = r[d[i]])
        }), a
    }

    function a(e) {
        return window.googletag.pubads().getSlots().filter(function(a) {
            return b(e, a.getAdUnitPath()) || b(e, a.getSlotElementId())
        })
    }

    function d(e, d) {
        function n() {
            var n = pbjs.adUnits.filter(function(a) {
                return e.some(function(e) {
                    return a.code === e
                })
            });
            n.filter(m).forEach(function(e) {
                I(e)
            });
            var r = n.filter(function(e) {
                return !m(e)
            }).map(c);
            r.length > 0 && googletag.cmd.push(function() {
                pbjs.setTargetingForGPTAsync(r)
            });
            var i = e.filter(function(e) {
                    return !b(n.map(c), e)
                }),
                s = r.concat(i);
            s.length > 0 && googletag.cmd.push(function() {
                window.googletag.pubads().refresh(a(s), d)
            })
        }
        pbjs.initAdserverSet = !0, pbjs.requestBids({
            adUnitCodes: e,
            bidsBackHandler: n
        })
    }

    function n(e, a) {
        var d = [],
            n = w,
            r = {};
        if (e.length > 0) {
            for (var i = 0; i < e.length; i++) r[e[i].targetAdUnitCode] = e[i].newAdUnitCode, d.push(e[i].newAdUnitCode);
            for (var i = 0; i < n.length; i++) val = r[n[i].code], "undefined" != typeof val && (pbjs.removeAdUnit(n[i].code), n[i].code = r[n[i].code]);
            pbjs.addAdUnits(n)
        }
        pbjs.refreshAds(d, a)
    }

    function r() {
        if (!pbjs.initAdserverSet) {
            if (!SHOW_ADS_ON_PAGE_LOAD.ALLOW) return SHOW_ADS_ON_PAGE_LOAD.INITIALIZE_TARGETING_DATA && i(), void(pbjs.initAdserverSet = !0);
            if (!googletag.pubadsReady && _ <= k) return setTimeout(r, 75), void _++;
            u(w), i(), googletag.cmd.push(function() {
                googletag.pubads().refresh()
            }), pbjs.initAdserverSet = !0
        }
    }

    function i() {
        googletag.cmd.push(function() {
            pbjs.que.push(function() {
                pbjs.setTargetingForGPTAsync()
            })
        })
    }

    function s(e, a, d) {
        o("url" === e ? 'configuration matched for type: "url" Matched key: ' + a : 'configuration matched for type: "var" Matched var name: ' + a + " matched value: " + d)
    }

    function p() {
        var e = "";
        try {
            e = window.location.host + window.location.pathname
        } catch (e) {
            o(e)
        }
        return e
    }

    function t(e) {
        for (var a = e.split("/"), d = [], n = 0; n < a.length; n++) {
            for (var r = "", i = 0; i < a.length - n; i++) r += "/" + a[i];
            r = r.substr(1, r.length), d.push(r), d.push(r + "/")
        }
        return d
    }

    function o() {
        A.push(arguments), y && window.console.log.apply(null, arguments)
    }

    function b(e, a) {
        return -1 !== e.indexOf(a)
    }

    function c(e) {
        return e.code
    }

    function m(e, a) {
        var d = a || "instream";
        return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === d
    }

    function l(e) {
        var a = !1;
        return e.forEach(function(e) {
            e && e.mediaTypes && e.mediaTypes.video && "outstream" !== e.mediaTypes.video.context && (a = !0)
        }), a
    }

    function u(e) {
        e && e.forEach && e.forEach(function(e) {
            if (e.mediaTypes && e.mediaTypes.video && "outstream" !== e.mediaTypes.video.context && I(e), e.mediaTypes && e.mediaTypes.video && "outstream" === e.mediaTypes.video.context) {
                var a = pbjs.getAdserverTargetingForAdUnitCode(e.code);
                pbjs.renderAd(document, a.hb_adid)
            }
        })
    }

    function I(e) {
        var a = {
                adUnit: {
                    code: e.code,
                    sizes: e.sizes
                },
                params: {
                    iu: e.mediaTypes.video.code || e.code
                }
            },
            d = e.mediaTypes.video.url;
        d && (a.url = d);
        var n = pbjs.adServers.dfp.buildVideoUrl(a);
        if (e.mediaTypes.video.callback) {
            new Function(["videoUrl"], "(" + e.mediaTypes.video.callback + ")(videoUrl)")(n)
        }
    }
    var w, A = [],
        y = function() {
            return -1 !== window.location.search.toLowerCase().indexOf("pbjs_debug=true")
        }(),
        _ = 0,
        k = 40,
        U = [{
            url: ["www.wsj.com/news/politics"],
            adUnits: [{
                labelAny: ["native"],
                code: "AD_NATIVE",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 13677595
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 13650471
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    native: {
                        body: {
                            required: !0
                        },
                        title: {
                            required: !0
                        },
                        image: {
                            required: !0
                        },
                        clickUrl: {
                            required: !0
                        },
                        sponsoredBy: {
                            required: !0
                        },
                        cta: {
                            required: !1
                        },
                        icon: {
                            required: !0
                        }
                    }
                },
                sizes: [
                    [1, 1]
                ]
            }]
        }, {
            url: ["www.wsj.com/news"],
            adUnits: [{
                labelAny: ["mobile_web"],
                code: "AD_G",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085358
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668341,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668340,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085396
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 306554,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_G",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085346
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668345,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085384
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_wide"],
                code: "AD_R",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085349
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668346,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668350,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085387
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [970, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_Z",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085353
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668345,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085391
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }]
        }, {
            url: ["jp.wsj.com/news"],
            adUnits: [{
                labelAny: ["mobile_web"],
                code: "AD_G",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085358
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668341,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668340,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085396
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 306554,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["mobile_web"],
                code: "AD_Z",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085361
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668341,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668340,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085399
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 306554,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_G",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085346
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668345,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085384
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_wide"],
                code: "AD_L",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085347
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668346,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668350,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085385
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [970, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_Z",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085353
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668345,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085391
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }]
        }, {
            url: ["www.wsj.com/news/opinion"],
            adUnits: [{
                labelAny: ["native"],
                code: "AD_NATIVE",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 13677603
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 13650479
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    native: {
                        body: {
                            required: !0
                        },
                        title: {
                            required: !0
                        },
                        image: {
                            required: !0
                        },
                        clickUrl: {
                            required: !0
                        },
                        sponsoredBy: {
                            required: !0
                        },
                        cta: {
                            required: !1
                        },
                        icon: {
                            required: !0
                        }
                    }
                },
                sizes: [
                    [1, 1]
                ]
            }]
        }, {
            url: ["www.wsj.com/news/science"],
            adUnits: [{
                labelAny: ["mobile_web"],
                code: "AD_RAIL1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085359
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668341,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668340,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085397
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 306554,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_RAIL1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085350
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668345,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085388
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_RAIL2",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085351
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668345,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085389
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_wide"],
                code: "AD_PUSH",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085348
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668346,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668350,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085386
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [970, 250]
                        ]
                    }
                }
            }]
        }, {
            url: ["www.wsj.com/news/markets"],
            adUnits: [{
                labelAny: ["mobile_web"],
                code: "AD_RAIL1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085359
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668341,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668340,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085397
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 306554,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_RAIL1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085350
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668345,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085388
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_RAIL3",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085352
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668345,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085390
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_wide"],
                code: "AD_PUSH",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085348
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668346,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668350,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085386
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [970, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["native"],
                code: "AD_NATIVEBUCKET",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 13677602
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 13650478
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    native: {
                        body: {
                            required: !0
                        },
                        title: {
                            required: !0
                        },
                        image: {
                            required: !0
                        },
                        clickUrl: {
                            required: !0
                        },
                        sponsoredBy: {
                            required: !0
                        },
                        cta: {
                            required: !1
                        },
                        icon: {
                            required: !0
                        }
                    }
                },
                sizes: [
                    [1, 1]
                ]
            }]
        }, {
            url: ["www.wsj.com/europe"],
            adUnits: [{
                labelAny: ["mobile_web"],
                code: "AD_RAIL1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085359
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668341,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668340,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085397
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 306554,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_RAIL1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085350
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668345,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085388
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_RAIL2",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085351
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668345,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085389
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_RAIL3",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085352
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668345,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085390
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_wide"],
                code: "AD_PUSH",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085348
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668346,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668350,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085386
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [970, 250]
                        ]
                    }
                }
            }]
        }, {
            url: ["www.wsj.com/news/realestate"],
            adUnits: [{
                labelAny: ["native"],
                code: "AD_NATIVE",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 13677605
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 13650484
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    native: {
                        body: {
                            required: !0
                        },
                        title: {
                            required: !0
                        },
                        image: {
                            required: !0
                        },
                        clickUrl: {
                            required: !0
                        },
                        sponsoredBy: {
                            required: !0
                        },
                        cta: {
                            required: !1
                        },
                        icon: {
                            required: !0
                        }
                    }
                },
                sizes: [
                    [1, 1]
                ]
            }]
        }, {
            url: ["www.wsj.com/news/economy"],
            adUnits: [{
                labelAny: ["native"],
                code: "AD_NATIVE",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 13677597
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 13650475
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    native: {
                        body: {
                            required: !0
                        },
                        title: {
                            required: !0
                        },
                        image: {
                            required: !0
                        },
                        clickUrl: {
                            required: !0
                        },
                        sponsoredBy: {
                            required: !0
                        },
                        cta: {
                            required: !1
                        },
                        icon: {
                            required: !0
                        }
                    }
                },
                sizes: [
                    [1, 1]
                ]
            }]
        }, {
            url: ["www.wsj.com/livecoverage"],
            adUnits: [{
                labelAny: ["mobile_web"],
                code: "AD_RAIL1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085359
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668341,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668340,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085397
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 306554,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_RAIL1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085350
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668345,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085388
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }]
        }, {
            url: ["www.wsj.com/asia"],
            adUnits: [{
                labelAny: ["mobile_web"],
                code: "AD_RAIL1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085359
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668341,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668340,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085397
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 306554,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_RAIL1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085350
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668345,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085388
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_RAIL2",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085351
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668345,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085389
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_RAIL3",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085352
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668345,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085390
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_wide"],
                code: "AD_PUSH",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085348
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668346,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668350,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085386
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [970, 250]
                        ]
                    }
                }
            }]
        }, {
            url: ["www.wsj.com/news/business/management"],
            adUnits: [{
                labelAny: ["mobile_web"],
                code: "AD_RAIL1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085359
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668341,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668340,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085397
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 306554,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["mobile_web"],
                code: "AD_RAIL3",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085360
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668341,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668340,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085398
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 306554,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_RAIL1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085350
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668345,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085388
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_RAIL3",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085352
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668345,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085390
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_wide"],
                code: "AD_PUSH",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085348
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668346,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668350,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085386
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [970, 250]
                        ]
                    }
                }
            }]
        }, {
            url: ["jp.wsj.com"],
            adUnits: [{
                labelAny: ["mobile_web"],
                code: "AD_G",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085344
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668343,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668342,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085497
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 306546,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_G",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085336
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668349,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668348,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085490
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253396,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_Z",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085343
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668349,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668348,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085496
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253396,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_wide"],
                code: "AD_L",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085337
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668351,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668352,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085491
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253396,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [970, 250]
                        ]
                    }
                }
            }]
        }, {
            url: ["www.wsj.com/news/life-arts"],
            adUnits: [{
                labelAny: ["native"],
                code: "AD_NATIVE",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 13677604
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 13650483
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    native: {
                        body: {
                            required: !0
                        },
                        title: {
                            required: !0
                        },
                        image: {
                            required: !0
                        },
                        clickUrl: {
                            required: !0
                        },
                        sponsoredBy: {
                            required: !0
                        },
                        cta: {
                            required: !1
                        },
                        icon: {
                            required: !0
                        }
                    }
                },
                sizes: [
                    [1, 1]
                ]
            }]
        }, {
            url: ["www.wsj.com/articles"],
            adUnits: [{
                labelAny: ["mobile_web"],
                code: "wsj-body-AD_G",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085366
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668341,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085404
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 306554,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["mobile_web"],
                code: "wsj-body-AD_M2",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085367
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668341,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085405
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 306554,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["mobile_web"],
                code: "wsj-body-AD_M3",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085368
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668341,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085406
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 306554,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_G",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085346
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668345,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085384
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_Z",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085353
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668345,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085391
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_wide"],
                code: "AD_L",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085347
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668346,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668350,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085385
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [970, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_wide"],
                code: "Ad_G2",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085346
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668345,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085384
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [970, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["native"],
                code: "google_ads_iframe_/2/interactive.wsj.com/articles_native_whattoreadnext_0",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 13677607
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 13650480
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    native: {
                        body: {
                            required: !0
                        },
                        title: {
                            required: !0
                        },
                        image: {
                            required: !0
                        },
                        clickUrl: {
                            required: !0
                        },
                        sponsoredBy: {
                            required: !0
                        },
                        cta: {
                            required: !1
                        },
                        icon: {
                            required: !0
                        }
                    }
                },
                sizes: [
                    [1, 1]
                ]
            }]
        }, {
            url: ["www.wsj.com/news/technology"],
            adUnits: [{
                labelAny: ["mobile_web"],
                code: "AD_RAIL1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085359
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668341,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668340,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085397
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 306554,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_RAIL1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085350
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668345,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085388
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_RAIL2",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085351
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668345,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085389
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_wide"],
                code: "AD_PUSH",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085348
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668346,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668350,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085386
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [970, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["native"],
                code: "AD_NATIVE",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 13677600
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 13650476
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    native: {
                        body: {
                            required: !0
                        },
                        title: {
                            required: !0
                        },
                        image: {
                            required: !0
                        },
                        clickUrl: {
                            required: !0
                        },
                        sponsoredBy: {
                            required: !0
                        },
                        cta: {
                            required: !1
                        },
                        icon: {
                            required: !0
                        }
                    }
                },
                sizes: [
                    [1, 1]
                ]
            }]
        }, {
            url: ["www.wsj.com/news/world"],
            adUnits: [{
                labelAny: ["native"],
                code: "AD_NATIVE",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 13677590
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 13650468
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    native: {
                        body: {
                            required: !0
                        },
                        title: {
                            required: !0
                        },
                        image: {
                            required: !0
                        },
                        clickUrl: {
                            required: !0
                        },
                        sponsoredBy: {
                            required: !0
                        },
                        cta: {
                            required: !1
                        },
                        icon: {
                            required: !0
                        }
                    }
                },
                sizes: [
                    [1, 1]
                ]
            }]
        }, {
            url: ["www.wsj.com/news/magazine"],
            adUnits: [{
                labelAny: ["native"],
                code: "AD_NATIVE",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 13677606
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 13650485
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    native: {
                        body: {
                            required: !0
                        },
                        title: {
                            required: !0
                        },
                        image: {
                            required: !0
                        },
                        clickUrl: {
                            required: !0
                        },
                        sponsoredBy: {
                            required: !0
                        },
                        cta: {
                            required: !1
                        },
                        icon: {
                            required: !0
                        }
                    }
                },
                sizes: [
                    [1, 1]
                ]
            }]
        }, {
            on_page_var: {
                name: "an_wsj_template",
                value: ["immersive"]
            },
            adUnits: [{
                labelAny: ["mobile_web"],
                code: "imm_ad_1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085362
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668341,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085400
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 306554,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["mobile_web"],
                code: "imm_ad_2",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085363
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668341,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085401
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 306554,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["mobile_web"],
                code: "imm_ad_3",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085364
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668341,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085402
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 306554,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["mobile_web"],
                code: "imm_ad_4",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085365
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668341,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085403
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 306554,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "imm_ad_1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085354
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085392
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "imm_ad_2",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085355
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085393
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "imm_ad_3",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085356
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085394
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "imm_ad_4",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085357
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668347,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085395
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253356,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250]
                        ]
                    }
                }
            }]
        }, {
            url: ["www.wsj.com"],
            adUnits: [{
                labelAny: ["mobile_web"],
                code: "AD_RAIL1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085345
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668343,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668342,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085498
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 306546,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_RAIL1",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085339
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668349,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668348,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085493
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253396,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_RAIL2",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085341
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668349,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668348,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085494
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253396,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_narrow"],
                code: "AD_RAIL3",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085342
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668349,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668348,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085495
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253396,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["desktop_wide"],
                code: "AD_PUSH",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 12085338
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668351,
                        network: "11067.1"
                    }
                }, {
                    bidder: "aol",
                    params: {
                        placement: 4668352,
                        network: "11067.1"
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 12085492
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        zoneId: 253396,
                        siteId: 17647,
                        accountId: 9673
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [970, 250]
                        ]
                    }
                }
            }, {
                labelAny: ["native"],
                code: "AD_NATIVESTRIPA",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 13677584
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 13650464
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    native: {
                        body: {
                            required: !0
                        },
                        title: {
                            required: !0
                        },
                        image: {
                            required: !0
                        },
                        clickUrl: {
                            required: !0
                        },
                        sponsoredBy: {
                            required: !0
                        },
                        cta: {
                            required: !1
                        },
                        icon: {
                            required: !0
                        }
                    }
                },
                sizes: [
                    [1, 1]
                ]
            }, {
                labelAny: ["native"],
                code: "AD_NATIVESTRIPB",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 13677587
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 13650465
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    native: {
                        body: {
                            required: !0
                        },
                        title: {
                            required: !0
                        },
                        image: {
                            required: !0
                        },
                        clickUrl: {
                            required: !0
                        },
                        sponsoredBy: {
                            required: !0
                        },
                        cta: {
                            required: !1
                        },
                        icon: {
                            required: !0
                        }
                    }
                },
                sizes: [
                    [1, 1]
                ]
            }, {
                labelAny: ["native"],
                code: "AD_NATIVESTRIPC",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 13677588
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 13650466
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    native: {
                        body: {
                            required: !0
                        },
                        title: {
                            required: !0
                        },
                        image: {
                            required: !0
                        },
                        clickUrl: {
                            required: !0
                        },
                        sponsoredBy: {
                            required: !0
                        },
                        cta: {
                            required: !1
                        },
                        icon: {
                            required: !0
                        }
                    }
                },
                sizes: [
                    [1, 1]
                ]
            }, {
                labelAny: ["native"],
                code: "AD_NATIVEBUCKET",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 13677589
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 13650467
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    native: {
                        body: {
                            required: !0
                        },
                        title: {
                            required: !0
                        },
                        image: {
                            required: !0
                        },
                        clickUrl: {
                            required: !0
                        },
                        sponsoredBy: {
                            required: !0
                        },
                        cta: {
                            required: !1
                        },
                        icon: {
                            required: !0
                        }
                    }
                },
                sizes: [
                    [1, 1]
                ]
            }]
        }, {
            url: ["www.wsj.com/news/business"],
            adUnits: [{
                labelAny: ["native"],
                code: "AD_NATIVE",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 13677599
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 13650473
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    native: {
                        body: {
                            required: !0
                        },
                        title: {
                            required: !0
                        },
                        image: {
                            required: !0
                        },
                        clickUrl: {
                            required: !0
                        },
                        sponsoredBy: {
                            required: !0
                        },
                        cta: {
                            required: !1
                        },
                        icon: {
                            required: !0
                        }
                    }
                },
                sizes: [
                    [1, 1]
                ]
            }]
        }, {
            url: ["www.wsj.com/news/us"],
            adUnits: [{
                labelAny: ["native"],
                code: "AD_NATIVEBUCKET",
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 13677591
                    }
                }, {
                    bidder: "newsconnect",
                    params: {
                        placementId: 13650469
                    }
                }, {
                    bidder: "ias",
                    params: {
                        adUnitPath: "na",
                        pubId: 928642
                    },
                    labelAny: ["ias"]
                }],
                mediaTypes: {
                    native: {
                        body: {
                            required: !0
                        },
                        title: {
                            required: !0
                        },
                        image: {
                            required: !0
                        },
                        clickUrl: {
                            required: !0
                        },
                        sponsoredBy: {
                            required: !0
                        },
                        cta: {
                            required: !1
                        },
                        icon: {
                            required: !0
                        }
                    }
                },
                sizes: [
                    [1, 1]
                ]
            }]
        }];
    if (o("Running HBW: 1.5.0 and prebid.js: 1.30.0"), U.forEach(function(a) {
            if (a.on_page_var) try {
                e(a) && (w = a.adUnits)
            } catch (e) {}
        }), w || (w = function(e) {
            if (e) {
                var a, d = p(),
                    n = t(d);
                return n.some(function(d) {
                    return e.some(function(e) {
                        if (e && e.url) return e.url.forEach(function(n) {
                            n === d && (a = e.adUnits, s("url", d))
                        }), !!a
                    })
                }), a
            }
        }(U)), !w) return o("Error: No valid configuration found for site"), void r();
    pbjs.refreshAds = d, pbjs.infiniteScroll = n, pbjs.que.push(function() {
        if (pbjs.setConfig({
                sizeConfig: [{
                    mediaQuery: "(min-width: 960px)",
                    labels: ["desktop_narrow"],
                    sizesSupported: [
                        [300, 250],
                        [300, 600]
                    ]
                }, {
                    mediaQuery: "(min-width: 960px)",
                    labels: ["desktop_wide"],
                    sizesSupported: [
                        [728, 90],
                        [970, 250]
                    ]
                }, {
                    mediaQuery: "(min-width: 0px) and (max-width: 959px)",
                    labels: ["mobile_web"],
                    sizesSupported: [
                        [300, 250],
                        [300, 600]
                    ]
                }, {
                    mediaQuery: "(min-width: 0px)",
                    labels: ["ias"],
                    sizesSupported: [
                        [100, 200]
                    ]
                }, {
                    mediaQuery: "(min-width: 0px)",
                    labels: ["native"],
                    sizesSupported: [
                        [1, 1]
                    ]
                }]
            }), pbjs.enableAnalytics([{
                provider: "appnexus",
                options: {
                    memberId: 7214
                }
            }]), pbjs.setConfig({
                priceGranularity: {
                    buckets: [{
                        max: 10,
                        cap: "False",
                        increment: .01,
                        min: .01
                    }, {
                        max: 20,
                        cap: "False",
                        increment: .05,
                        min: 10
                    }, {
                        max: 95,
                        cap: "True",
                        increment: .5,
                        min: 20
                    }],
                    precision: "2"
                }
            }), pbjs.onEvent("requestBids", function() {
                var e = Object.assign || function(e) {
                        for (var a = 1; a < arguments.length; a++) {
                            var d = arguments[a];
                            for (var n in d) Object.prototype.hasOwnProperty.call(d, n) && (e[n] = d[n])
                        }
                        return e
                    },
                    a = function(e) {
                        var a = new RegExp("(?:^" + e + "|; *" + e + ")=(.*?)(?:;|$)", "g"),
                            d = a.exec(document.cookie);
                        return null === d ? null : d[1]
                    }("_ncg_id_");
                pbjs.adUnits.map(function(e) {
                    return e.bids.filter(function(e) {
                        return "newsconnect" === e.bidder
                    })
                }).reduce(function(e, a) {
                    return e.concat(a)
                }).forEach(function(d) {
                    return d.params.user = e({}, d.params.user, {
                        external_uid: a
                    })
                })
            }), pbjs.onEvent("requestBids", function() {
                window.pbjs.ready = !1
            }), pbjs.onEvent("setTargeting", function() {
                window.pbjs.ready = !0
            }), pbjs.onEvent("addAdUnits", function() {
                pbjs.bidderSettings = {
                    ias: {
                        alwaysUseBid: !0,
                        sendStandardTargeting: !1,
                        suppressEmptyKeys: !0,
                        adserverTargeting: [{
                            key: "adt",
                            val: function(e) {
                                return e.adt
                            }
                        }, {
                            key: "alc",
                            val: function(e) {
                                return e.alc
                            }
                        }, {
                            key: "dlm",
                            val: function(e) {
                                return e.dlm
                            }
                        }, {
                            key: "drg",
                            val: function(e) {
                                return e.drg
                            }
                        }, {
                            key: "hat",
                            val: function(e) {
                                return e.hat
                            }
                        }, {
                            key: "off",
                            val: function(e) {
                                return e.off
                            }
                        }, {
                            key: "vio",
                            val: function(e) {
                                return e.vio
                            }
                        }, {
                            key: "fr",
                            val: function(e) {
                                return e.fr
                            }
                        }, {
                            key: "id",
                            val: function(e) {
                                return e.slots[e.adUnitCode].id
                            }
                        }, {
                            key: "vw",
                            val: function(e) {
                                return e.slots[e.adUnitCode].vw
                            }
                        }, {
                            key: "grm",
                            val: function(e) {
                                return e.slots[e.adUnitCode].grm
                            }
                        }, {
                            key: "pub",
                            val: function(e) {
                                return e.slots[e.adUnitCode].pub
                            }
                        }]
                    }
                }
            }), pbjs.aliasBidder("appnexus", "newsconnect"), l(w)) {
            var e = {
                cache: {
                    url: "https://prebid.adnxs.com/pbc/v1/cache"
                }
            };
            IS_PREBID_LEGACY && (e.usePrebidCache = !0), pbjs.setConfig(e)
        }
        pbjs.addAdUnits(w), REQUEST_BIDS_ON_PAGE_LOAD && pbjs.requestBids({
            bidsBackHandler: function(e) {
                r()
            }
        })
    }), pbjs.debugReplayLogs = function() {
        for (var e = 0; e < A.length; e++) window.console.log.apply(null, A[e])
    }, (!0 === REQUEST_BIDS_ON_PAGE_LOAD || !0 === SHOW_ADS_ON_PAGE_LOAD.ALLOW && !1 === REQUEST_BIDS_ON_PAGE_LOAD) && setTimeout(r, PREBID_TIMEOUT)
}();
/* prebid.js v1.30.0
Updated : 2018-12-21 */
!(function(u) {
    var f = window.pbjsChunk;
    window.pbjsChunk = function(e, t, r) {
        for (var i, n, o, s = 0, a = []; s < e.length; s++) n = e[s], l[n] && a.push(l[n][0]), l[n] = 0;
        for (i in t) Object.prototype.hasOwnProperty.call(t, i) && (u[i] = t[i]);
        for (f && f(e, t, r); a.length;) a.shift()();
        if (r)
            for (s = 0; s < r.length; s++) o = d(d.s = r[s]);
        return o
    };
    var r = {},
        l = {
            182: 0
        };

    function d(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return u[e].call(t.exports, t, t.exports, d), t.l = !0, t.exports
    }
    d.m = u, d.c = r, d.d = function(e, t, r) {
        d.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, d.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return d.d(t, "a", t), t
    }, d.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, d.p = "", d.oe = function(e) {
        throw console.error(e), e
    }, d(d.s = 609)
})({
    0: function(e, s, t) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        }), s.getLatestHighestCpmBid = s.getOldestHighestCpmBid = s.getHighestCpm = void 0;
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                }
                return e
            },
            a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        s.getAdUnitSizes = function(e) {
            if (!e) return;
            var t = [];
            if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                var r = e.mediaTypes.banner.sizes;
                Array.isArray(r[0]) ? t = r : t.push(r)
            } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
            return t
        }, s.parseSizesInput = function(e) {
            var t = [];
            if ("string" == typeof e) {
                var r = e.split(","),
                    i = /^(\d)+x(\d)+$/i;
                if (r)
                    for (var n in r) _(r, n) && r[n].match(i) && t.push(r[n])
            } else if ("object" === (void 0 === e ? "undefined" : a(e))) {
                var o = e.length;
                if (0 < o)
                    if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(T(e));
                    else
                        for (var s = 0; s < o; s++) t.push(T(e[s]))
            }
            return t
        }, s.parseGPTSingleSizeArray = T, s.uniques = R, s.flatten = O, s.getBidRequest = function(r, e) {
            var i = void 0;
            return e.some((function(e) {
                var t = (0, o.default)(e.bids, (function(t) {
                    return ["bidId", "adId", "bid_id"].some((function(e) {
                        return t[e] === r
                    }))
                }));
                return t && (i = t), t
            })), i
        }, s.getKeys = P, s.getValue = B, s.getBidderCodes = function() {
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map((function(e) {
                return e.bids.map((function(e) {
                    return e.bidder
                })).reduce(O, [])
            })).reduce(O).filter(R)
        }, s.isGptPubadsDefined = function() {
            if (window.googletag && s.isFn(window.googletag.pubads) && s.isFn(window.googletag.pubads().getSlots)) return !0
        }, s.shuffle = function(e) {
            var t = e.length;
            for (; 0 < t;) {
                var r = Math.floor(Math.random() * t),
                    i = e[--t];
                e[t] = e[r], e[r] = i
            }
            return e
        }, s.adUnitsFilter = function(e, t) {
            return (0, u.default)(e, t && t.adUnitCode)
        }, s.isSrcdocSupported = function(e) {
            return e.defaultView && e.defaultView.frameElement && "srcdoc" in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent)
        }, s.deepClone = function(e) {
            return (0, n.default)(e)
        }, s.inIframe = function() {
            try {
                return s.getWindowSelf() !== s.getWindowTop()
            } catch (e) {
                return !0
            }
        }, s.isSafariBrowser = function() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        }, s.replaceAuctionPrice = function(e, t) {
            if (!e) return;
            return e.replace(/\$\{AUCTION_PRICE\}/g, t)
        }, s.timestamp = function() {
            return (new Date).getTime()
        }, s.checkCookieSupport = function() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0
        }, s.cookiesAreEnabled = function() {
            if (s.checkCookieSupport()) return !0;
            return window.document.cookie = "prebid.cookieTest", -1 != window.document.cookie.indexOf("prebid.cookieTest")
        }, s.delayExecution = function(e, t) {
            if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got " + t);
            var r = 0;
            return function() {
                ++r === t && e.apply(null, arguments)
            }
        }, s.groupBy = function(e, r) {
            return e.reduce((function(e, t) {
                return (e[t[r]] = e[t[r]] || []).push(t), e
            }), {})
        }, s.deepAccess = function(e, t) {
            if (!e) return;
            t = String(t).split(".");
            for (var r = 0; r < t.length; r++)
                if (void 0 === (e = e[t[r]])) return;
            return e
        }, s.createContentToExecuteExtScriptInFriendlyFrame = function(e) {
            return e ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="' + e + '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>' : ""
        }, s.getDefinedParams = function(r, e) {
            return e.filter((function(e) {
                return r[e]
            })).reduce((function(e, t) {
                return i(e, (function(e, t, r) {
                    t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r;
                    return e
                })({}, t, r[t]))
            }), {})
        }, s.isValidMediaTypes = function(e) {
            var t = ["banner", "native", "video"];
            if (!Object.keys(e).every((function(e) {
                    return (0, u.default)(t, e)
                }))) return !1;
            if (e.video && e.video.context) return (0, u.default)(["instream", "outstream"], e.video.context);
            return !0
        }, s.getBidderRequest = function(e, t, r) {
            return (0, o.default)(e, (function(e) {
                return 0 < e.bids.filter((function(e) {
                    return e.bidder === t && e.adUnitCode === r
                })).length
            })) || {
                start: null,
                auctionId: null
            }
        }, s.getUserConfiguredParams = function(e, t, r) {
            return e.filter((function(e) {
                return e.code === t
            })).map((function(e) {
                return e.bids
            })).reduce(O, []).filter((function(e) {
                return e.bidder === r
            })).map((function(e) {
                return e.params || {}
            }))
        }, s.getOrigin = function() {
            return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
        }, s.getDNT = function() {
            return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
        }, s.isAdUnitCodeMatchingSlot = function(t) {
            return function(e) {
                return U(t, e)
            }
        }, s.isSlotMatchingAdUnitCode = function(t) {
            return function(e) {
                return U(e, t)
            }
        }, s.unsupportedBidderMessage = function(e, t) {
            var r = Object.keys(e.mediaTypes || {
                banner: "banner"
            }).join(", ");
            return "\n    " + e.code + " is a " + r + " ad unit\n    containing bidders that don't support " + r + ": " + t + ".\n    This bidder won't fetch demand.\n  "
        }, s.deletePropertyFromObject = function(e, t) {
            var r = i({}, e);
            return delete r[t], r
        }, s.removeRequestId = function(e) {
            return s.deletePropertyFromObject(e, "requestId")
        }, s.isInteger = function(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }, s.convertCamelToUnderscore = function(e) {
            return e.replace(/(?:^|\.?)([A-Z])/g, (function(e, t) {
                return "_" + t.toLowerCase()
            })).replace(/^_/, "")
        }, s.transformBidderParamKeywords = function(e) {
            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords",
                n = [];
            return s._each(e, (function(e, t) {
                if (s.isArray(e)) {
                    var r = [];
                    s._each(e, (function(e) {
                        (e = s.getValueString(i + "." + t, e)) && r.push(e)
                    })), e = r
                } else {
                    if (e = s.getValueString(i + "." + t, e), !s.isStr(e)) return;
                    e = [e]
                }
                n.push({
                    key: t,
                    value: e
                })
            })), n
        }, s.convertTypes = function(i, n) {
            return Object.keys(i).forEach((function(e) {
                var t, r;
                n[e] && (s.isFn(i[e]) ? n[e] = i[e](n[e]) : n[e] = (t = i[e], r = n[e], "string" === t ? r && r.toString() : "number" === t ? Number(r) : r), isNaN(n[e]) && delete n.key)
            })), n
        };
        var r = t(3),
            n = l(t(68)),
            o = l(t(10)),
            u = l(t(7)),
            f = t(11);

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = t(4),
            c = !1,
            h = Object.prototype.toString,
            g = Boolean(window.console),
            p = Boolean(g && window.console.log),
            y = Boolean(g && window.console.info),
            v = Boolean(g && window.console.warn),
            m = Boolean(g && window.console.error);
        s.replaceTokenInString = function(n, e, o) {
            return s._each(e, (function(e, t) {
                e = void 0 === e ? "" : e;
                var r = o + t.toUpperCase() + o,
                    i = new RegExp(r, "g");
                n = n.replace(i, e)
            })), n
        };
        var b, E = (b = 0, function() {
            return ++b
        });

        function w() {
            return E() + Math.random().toString(16).substr(2)
        }

        function T(e) {
            if (s.isArray(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])) return e[0] + "x" + e[1]
        }

        function S(e, t) {
            return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cPrebid"), e
        }
        s.getUniqueIdentifierStr = w, s.generateUUID = function e(t) {
            return t ? (t ^ (window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()) >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
        }, s.getBidIdParameter = function(e, t) {
            return t && t[e] ? t[e] : ""
        }, s.tryAppendQueryString = function(e, t, r) {
            return r ? e + (t + "=") + encodeURIComponent(r) + "&" : e
        }, s.parseQueryStringParameters = function(e) {
            var t = "";
            for (var r in e) e.hasOwnProperty(r) && (t += r + "=" + encodeURIComponent(e[r]) + "&");
            return t
        }, s.transformAdServerTargetingObj = function(t) {
            return t && 0 < Object.getOwnPropertyNames(t).length ? P(t).map((function(e) {
                return e + "=" + encodeURIComponent(B(t, e))
            })).join("&") : ""
        }, s.getTopWindowLocation = function() {
            if (s.inIframe()) {
                var e = void 0;
                try {
                    e = s.getAncestorOrigins() || s.getTopFrameReferrer()
                } catch (e) {
                    logInfo("could not obtain top window location", e)
                }
                if (e) return (0, f.parse)(e, {
                    decodeSearchAsString: !0
                })
            }
            return s.getWindowLocation()
        }, s.getTopFrameReferrer = function() {
            try {
                window.top.location.toString();
                for (var e = "", t = void 0;
                    (t = t ? t.parent : window).document && t.document.referrer && (e = t.document.referrer), t !== window.top;);
                return e
            } catch (e) {
                return window.document.referrer
            }
        }, s.getAncestorOrigins = function() {
            if (window.document.location && window.document.location.ancestorOrigins && 1 <= window.document.location.ancestorOrigins.length) return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1]
        }, s.getWindowTop = function() {
            return window.top
        }, s.getWindowSelf = function() {
            return window.self
        }, s.getWindowLocation = function() {
            return window.location
        }, s.getTopWindowUrl = function() {
            var t = void 0;
            try {
                t = s.getTopWindowLocation().href
            } catch (e) {
                t = ""
            }
            return t
        }, s.getTopWindowReferrer = function() {
            try {
                return window.top.document.referrer
            } catch (e) {
                return document.referrer
            }
        }, s.logMessage = function() {
            I() && p && console.log.apply(console, S(arguments, "MESSAGE:"))
        }, s.logInfo = function() {
            I() && y && console.info.apply(console, S(arguments, "INFO:"))
        }, s.logWarn = function() {
            I() && v && console.warn.apply(console, S(arguments, "WARNING:"))
        }, s.logError = function() {
            I() && m && console.error.apply(console, S(arguments, "ERROR:"))
        }, s.hasConsoleLogger = function() {
            return p
        };
        var I = function() {
            if (!1 === r.config.getConfig("debug") && !1 === c) {
                var e = "TRUE" === A(d.DEBUG_MODE).toUpperCase();
                r.config.setConfig({
                    debug: e
                }), c = !0
            }
            return !!r.config.getConfig("debug")
        };
        s.debugTurnedOn = I, s.createInvisibleIframe = function() {
            var e = document.createElement("iframe");
            return e.id = w(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
        };
        var A = function(e) {
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
            return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
        };
        s.getParameterByName = A, s.hasValidBidRequest = function(e, r, t) {
            var i = !1;

            function n(e, t) {
                t === r[o] && (i = !0)
            }
            for (var o = 0; o < r.length; o++)
                if (i = !1, s._each(e, n), !i) return s.logError("Params are missing for bid request. One of these required paramaters are missing: " + r, t), !1;
            return !0
        }, s.addEventHandler = function(e, t, r) {
            e.addEventListener ? e.addEventListener(t, r, !0) : e.attachEvent && e.attachEvent("on" + t, r)
        }, s.isA = function(e, t) {
            return h.call(e) === "[object " + t + "]"
        }, s.isFn = function(e) {
            return s.isA(e, "Function")
        }, s.isStr = function(e) {
            return s.isA(e, "String")
        }, s.isArray = function(e) {
            return s.isA(e, "Array")
        }, s.isNumber = function(e) {
            return s.isA(e, "Number")
        }, s.isPlainObject = function(e) {
            return s.isA(e, "Object")
        }, s.isBoolean = function(e) {
            return s.isA(e, "Boolean")
        }, s.isEmpty = function(e) {
            if (!e) return !0;
            if (s.isArray(e) || s.isStr(e)) return !(0 < e.length);
            for (var t in e)
                if (hasOwnProperty.call(e, t)) return !1;
            return !0
        }, s.isEmptyStr = function(e) {
            return s.isStr(e) && (!e || 0 === e.length)
        }, s._each = function(e, t) {
            if (!s.isEmpty(e)) {
                if (s.isFn(e.forEach)) return e.forEach(t, this);
                var r = 0,
                    i = e.length;
                if (0 < i)
                    for (; r < i; r++) t(e[r], r, e);
                else
                    for (r in e) hasOwnProperty.call(e, r) && t.call(this, e[r], r)
            }
        }, s.contains = function(e, t) {
            if (s.isEmpty(e)) return !1;
            if (s.isFn(e.indexOf)) return -1 !== e.indexOf(t);
            for (var r = e.length; r--;)
                if (e[r] === t) return !0;
            return !1
        }, s.indexOf = (function() {
            if (Array.prototype.indexOf) return Array.prototype.indexOf
        })(), s._map = function(r, i) {
            if (s.isEmpty(r)) return [];
            if (s.isFn(r.map)) return r.map(i);
            var n = [];
            return s._each(r, (function(e, t) {
                n.push(i(e, t, r))
            })), n
        };
        var _ = function(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
        };

        function R(e, t, r) {
            return r.indexOf(e) === t
        }

        function O(e, t) {
            return e.concat(t)
        }

        function P(e) {
            return Object.keys(e)
        }

        function B(e, t) {
            return e[t]
        }
        s.insertElement = function(e, t, r) {
            t = t || document;
            var i = void 0;
            i = r ? t.getElementsByTagName(r) : t.getElementsByTagName("head");
            try {
                (i = i.length ? i : t.getElementsByTagName("body")).length && (i = i[0]).insertBefore(e, i.firstChild)
            } catch (e) {}
        }, s.triggerPixel = function(e) {
            (new Image).src = e
        }, s.callBurl = function(e) {
            var t = e.source,
                r = e.burl;
            t === d.S2S.SRC && r && s.triggerPixel(r)
        }, s.insertHtmlIntoIframe = function(e) {
            if (e) {
                var t = document.createElement("iframe");
                t.id = s.getUniqueIdentifierStr(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", s.insertElement(t, document, "body"), t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close()
            }
        }, s.insertUserSyncIframe = function(e) {
            var t = s.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                r = document.createElement("div");
            r.innerHTML = t;
            var i = r.firstChild;
            s.insertElement(i)
        }, s.createTrackPixelHtml = function(e) {
            if (!e) return "";
            var t = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return t += '<img src="' + encodeURI(e) + '"></div>'
        }, s.createTrackPixelIframeHtml = function(e) {
            var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? (t && (e = encodeURI(e)), r && (r = 'sandbox="' + r + '"'), "<iframe " + r + ' id="' + s.getUniqueIdentifierStr() + '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="' + e + '">\n    </iframe>') : ""
        }, s.getIframeDocument = function(e) {
            if (e) {
                var t = void 0;
                try {
                    t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument
                } catch (e) {
                    s.logError("Cannot get iframe document", e)
                }
                return t
            }
        }, s.getValueString = function(e, t, r) {
            return null == t ? r : s.isStr(t) ? t : s.isNumber(t) ? t.toString() : void s.logWarn("Unsuported type for param: " + e + " required type: String")
        };
        s.getHighestCpm = N("timeToRespond", (function(e, t) {
            return t < e
        })), s.getOldestHighestCpmBid = N("responseTimestamp", (function(e, t) {
            return t < e
        })), s.getLatestHighestCpmBid = N("responseTimestamp", (function(e, t) {
            return e < t
        }));

        function N(r, i) {
            return function(e, t) {
                return e.cpm === t.cpm ? i(e[r], t[r]) ? t : e : e.cpm < t.cpm ? t : e
            }
        }
        var U = function(e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t
        }
    },
    1: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return (function(e, t) {
                    var r = [],
                        i = !0,
                        n = !1,
                        o = void 0;
                    try {
                        for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (r.push(s.value), !t || r.length !== t); i = !0);
                    } catch (e) {
                        n = !0, o = e
                    } finally {
                        try {
                            !i && a.return && a.return()
                        } finally {
                            if (n) throw o
                        }
                    }
                    return r
                })(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            p = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                }
                return e
            };
        t.registerBidder = function(t) {
            var r = Array.isArray(t.supportedMediaTypes) ? {
                supportedMediaTypes: t.supportedMediaTypes
            } : void 0;

            function i(e) {
                var t = h(e);
                n.default.registerBidAdapter(t, e.code, r)
            }
            i(t), Array.isArray(t.aliases) && t.aliases.forEach((function(e) {
                n.default.aliasRegistry[e] = t.code, i(p({}, t, {
                    code: e
                }))
            }))
        }, t.newBidder = h, t.isValid = E;
        var i = d(r(29)),
            n = d(r(8)),
            o = r(3),
            y = d(r(16)),
            s = r(18),
            a = r(17),
            u = r(42),
            v = d(r(4)),
            m = d(r(9)),
            f = d(r(7)),
            b = r(0);

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"];

        function h(d) {
            return p(new i.default(d.code), {
                getSpec: function() {
                    return Object.freeze(d)
                },
                registerSyncs: c,
                callBids: function(o, s, t, r) {
                    if (Array.isArray(o.bids)) {
                        var a = {},
                            u = [],
                            e = o.bids.filter(h);
                        if (0 !== e.length) {
                            var f = {};
                            e.forEach((function(e) {
                                (f[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
                            }));
                            var i = d.buildRequests(e, o);
                            if (i && 0 !== i.length) {
                                Array.isArray(i) || (i = [i]);
                                var l = (0, b.delayExecution)(n, i.length);
                                i.forEach((function(n) {
                                    switch (n.method) {
                                        case "GET":
                                            r("" + n.url + (function(e) {
                                                if (e) return "?" + ("object" === (void 0 === e ? "undefined" : g(e)) ? (0, b.parseQueryStringParameters)(e) : e);
                                                return ""
                                            })(n.data), {
                                                success: e,
                                                error: t
                                            }, void 0, p({
                                                method: "GET",
                                                withCredentials: !0
                                            }, n.options));
                                            break;
                                        case "POST":
                                            r(n.url, {
                                                success: e,
                                                error: t
                                            }, "string" == typeof n.data ? n.data : JSON.stringify(n.data), p({
                                                method: "POST",
                                                contentType: "text/plain",
                                                withCredentials: !0
                                            }, n.options));
                                            break;
                                        default:
                                            (0, b.logWarn)("Skipping invalid request from " + d.code + ". Request type " + n.type + " must be GET or POST"), l()
                                    }

                                    function e(e, t) {
                                        try {
                                            e = JSON.parse(e)
                                        } catch (e) {}
                                        e = {
                                            body: e,
                                            headers: {
                                                get: t.getResponseHeader.bind(t)
                                            }
                                        }, u.push(e);
                                        var r = void 0;
                                        try {
                                            r = d.interpretResponse(e, n)
                                        } catch (e) {
                                            return (0, b.logError)("Bidder " + d.code + " failed to interpret the server's response. Continuing without bids", null, e), void l()
                                        }

                                        function i(e) {
                                            var t, r, i = f[e.requestId];
                                            if (i) {
                                                var n = p(y.default.createBid(v.default.STATUS.GOOD, i), e);
                                                t = i.adUnitCode, r = n, a[t] = !0, E(t, r, [o]) && s(t, r)
                                            } else(0, b.logWarn)("Bidder " + d.code + " made bid for unknown request ID: " + e.requestId + ". Ignoring.")
                                        }
                                        r && (r.forEach ? r.forEach(i) : i(r)), l(r)
                                    }

                                    function t(e) {
                                        (0, b.logError)("Server call for " + d.code + " failed: " + e + ". Continuing without bids."), l()
                                    }
                                }))
                            } else n()
                        } else n()
                    }

                    function n(e) {
                        t(), m.default.emit(v.default.EVENTS.BIDDER_DONE, o), c(u, o.gdprConsent)
                    }
                }
            });

            function c(e, t) {
                if (d.getUserSyncs) {
                    var r = o.config.getConfig("userSync.filterSettings"),
                        i = d.getUserSyncs({
                            iframeEnabled: !!(o.config.getConfig("userSync.iframeEnabled") || r && (r.iframe || r.all)),
                            pixelEnabled: !!(o.config.getConfig("userSync.pixelEnabled") || r && (r.image || r.all))
                        }, e, t);
                    i && (Array.isArray(i) || (i = [i]), i.forEach((function(e) {
                        s.userSync.registerSync(e.type, d.code, e.url)
                    })))
                }
            }

            function h(e) {
                return !!d.isBidRequestValid(e) || ((0, b.logWarn)("Invalid bid sent to bidder " + d.code + ": " + JSON.stringify(e)), !1)
            }
        }

        function E(e, t, r) {
            function i(e) {
                return "Invalid bid from " + t.bidderCode + ". Ignoring bid: " + e
            }
            return e ? t ? (n = Object.keys(t), c.every((function(e) {
                return (0, f.default)(n, e) && !(0, f.default)([void 0, null], t[e])
            })) ? "native" !== t.mediaType || (0, a.nativeBidIsValid)(t, r) ? "video" !== t.mediaType || (0, u.isValidVideoBid)(t, r) ? !("banner" === t.mediaType && !(function(e, t, r) {
                if ((t.width || 0 === t.width) && (t.height || 0 === t.height)) return !0;
                var i = (0, b.getBidderRequest)(r, t.bidderCode, e),
                    n = i && i.bids && i.bids[0] && i.bids[0].sizes,
                    o = (0, b.parseSizesInput)(n);
                if (1 !== o.length) return !1;
                var s = o[0].split("x"),
                    a = l(s, 2),
                    u = a[0],
                    f = a[1];
                return t.width = u, t.height = f, !0
            })(e, t, r)) || ((0, b.logError)(i("Banner bids require a width and height")), !1) : ((0, b.logError)(i("Video bid does not have required vastUrl or renderer property")), !1) : ((0, b.logError)(i("Native bid missing some required properties.")), !1) : ((0, b.logError)(i("Bidder " + t.bidderCode + " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.")), !1)) : ((0, b.logWarn)("Some adapter tried to add an undefined bid for " + e + "."), !1) : ((0, b.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
            var n
        }
    },
    10: function(e, t, r) {
        r(48), e.exports = r(13).Array.find
    },
    11: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return (function(e, t) {
                var r = [],
                    i = !0,
                    n = !1,
                    o = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (r.push(s.value), !t || r.length !== t); i = !0);
                } catch (e) {
                    n = !0, o = e
                } finally {
                    try {
                        !i && a.return && a.return()
                    } finally {
                        if (n) throw o
                    }
                }
                return r
            })(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        };

        function n(e) {
            return e ? e.replace(/^\?/, "").split("&").reduce((function(e, t) {
                var r = t.split("="),
                    i = s(r, 2),
                    n = i[0],
                    o = i[1];
                return /\[\]$/.test(n) ? (e[n = n.replace("[]", "")] = e[n] || [], e[n].push(o)) : e[n] = o || "", e
            }), {}) : {}
        }

        function i(e) {
            return Object.keys(e).map((function(t) {
                return Array.isArray(e[t]) ? e[t].map((function(e) {
                    return t + "[]=" + e
                })).join("&") : t + "=" + e[t]
            })).join("&")
        }
        t.parseQS = n, t.formatQS = i, t.parse = function(e, t) {
            var r = document.createElement("a");
            t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? r.href = e : r.href = decodeURIComponent(e);
            var i = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
            return {
                href: r.href,
                protocol: (r.protocol || "").replace(/:$/, ""),
                hostname: r.hostname,
                port: +r.port,
                pathname: r.pathname.replace(/^(?!\/)/, "/"),
                search: i ? r.search : n(r.search || ""),
                hash: (r.hash || "").replace(/^#/, ""),
                host: r.host || window.location.host
            }
        }, t.format = function(e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":" + e.port : "")) + (e.pathname || "") + (e.search ? "?" + i(e.search || "") : "") + (e.hash ? "#" + e.hash : "")
        }
    },
    118: function(e, t, r) {
        "use strict";
        var i = r(14),
            n = r(35)(6),
            o = "findIndex",
            s = !0;
        o in [] && Array(1)[o]((function() {
            s = !1
        })), i(i.P + i.F * s, "Array", {
            findIndex: function(e) {
                return n(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), r(28)(o)
    },
    12: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Renderer = i, t.isRendererRequired = function(e) {
            return !(!e || !e.url)
        }, t.executeRenderer = function(e, t) {
            e.render(t)
        };
        var a = r(30),
            u = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }
            })(r(0));

        function i(e) {
            var t = this,
                r = e.url,
                i = e.config,
                n = e.id,
                o = e.callback,
                s = e.loaded;
            this.url = r, this.config = i, this.handlers = {}, this.id = n, this.loaded = s, this.cmd = [], this.push = function(e) {
                "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : u.logError("Commands given to Renderer.push must be wrapped in a function")
            }, this.callback = o || function() {
                t.loaded = !0, t.process()
            }, (0, a.loadScript)(r, this.callback, !0)
        }
        i.install = function(e) {
            return new i({
                url: e.url,
                config: e.config,
                id: e.id,
                callback: e.callback,
                loaded: e.loaded
            })
        }, i.prototype.getConfig = function() {
            return this.config
        }, i.prototype.setRender = function(e) {
            this.render = e
        }, i.prototype.setEventHandlers = function(e) {
            this.handlers = e
        }, i.prototype.handleVideoEvent = function(e) {
            var t = e.id,
                r = e.eventName;
            "function" == typeof this.handlers[r] && this.handlers[r](), u.logMessage("Prebid Renderer event for id " + t + " type " + r)
        }, i.prototype.process = function() {
            for (; 0 < this.cmd.length;) try {
                this.cmd.shift().call()
            } catch (e) {
                u.logError("Error processing Renderer command: ", e)
            }
        }
    },
    13: function(e, t) {
        var r = e.exports = {
            version: "2.5.7"
        };
        "number" == typeof __e && (__e = r)
    },
    14: function(e, t, r) {
        var p = r(19),
            y = r(13),
            v = r(33),
            m = r(50),
            b = r(57),
            E = "prototype",
            w = function(e, t, r) {
                var i, n, o, s = e & w.F,
                    a = e & w.G,
                    u = e & w.S,
                    f = e & w.P,
                    l = e & w.B,
                    d = e & w.W,
                    c = a ? y : y[t] || (y[t] = {}),
                    h = c[E],
                    g = a ? p : u ? p[t] : (p[t] || {})[E];
                for (i in a && (r = t), r)(n = !s && g && void 0 !== g[i]) && b(c, i) || (o = n ? g[i] : r[i], c[i] = a && "function" != typeof g[i] ? r[i] : l && n ? v(o, p) : d && g[i] == o ? (function(i) {
                    var e = function(e, t, r) {
                        if (this instanceof i) {
                            switch (arguments.length) {
                                case 0:
                                    return new i;
                                case 1:
                                    return new i(e);
                                case 2:
                                    return new i(e, t)
                            }
                            return new i(e, t, r)
                        }
                        return i.apply(this, arguments)
                    };
                    return e[E] = i[E], e
                })(o) : f && "function" == typeof o ? v(Function.call, o) : o, f && ((c.virtual || (c.virtual = {}))[i] = o, e & w.R && h && !h[i] && m(h, i, o)))
            };
        w.F = 1, w.G = 2, w.S = 4, w.P = 8, w.B = 16, w.W = 32, w.U = 64, w.R = 128, e.exports = w
    },
    15: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    16: function(e, t, r) {
        "use strict";
        var o = r(0);

        function i(e, t) {
            var r = t && t.bidId || o.getUniqueIdentifierStr(),
                i = t && t.src || "client",
                n = e || 0;
            this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = (function() {
                switch (n) {
                    case 0:
                        return "Pending";
                    case 1:
                        return "Bid available";
                    case 2:
                        return "Bid returned empty or error response";
                    case 3:
                        return "Bid timed out"
                }
            })(), this.adId = r, this.mediaType = "banner", this.source = i, this.getStatusCode = function() {
                return n
            }, this.getSize = function() {
                return this.width + "x" + this.height
            }
        }
        t.createBid = function(e, t) {
            return new i(e, t)
        }
    },
    17: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hasNonNativeBidder = t.nativeBidder = t.nativeAdUnit = t.NATIVE_TARGETING_KEYS = t.nativeAdapters = void 0;
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        t.processNativeAdUnitParams = function(e) {
            if (e && e.type && (t = e.type, t && (0, a.default)(Object.keys(l), t) || ((0, s.logError)(t + " nativeParam is not supported"), 0))) return l[e.type];
            var t;
            return e
        }, t.nativeBidIsValid = function(t, e) {
            var r = (0, s.getBidRequest)(t.adId, e);
            if (!r) return !1;
            if (!(0, s.deepAccess)(t, "native.clickUrl")) return !1;
            if ((0, s.deepAccess)(t, "native.image") && (!(0, s.deepAccess)(t, "native.image.height") || !(0, s.deepAccess)(t, "native.image.width"))) return !1;
            if ((0, s.deepAccess)(t, "native.icon") && (!(0, s.deepAccess)(t, "native.icon.height") || !(0, s.deepAccess)(t, "native.icon.width"))) return !1;
            var i = r.nativeParams;
            if (!i) return !0;
            var n = Object.keys(i).filter((function(e) {
                    return i[e].required
                })),
                o = Object.keys(t.native).filter((function(e) {
                    return t.native[e]
                }));
            return n.every((function(e) {
                return (0, a.default)(o, e)
            }))
        }, t.fireNativeTrackers = function(e, t) {
            var r = void 0;
            "click" === e.action ? r = t.native && t.native.clickTrackers : (r = t.native && t.native.impressionTrackers, t.native && t.native.javascriptTrackers && (0, s.insertHtmlIntoIframe)(t.native.javascriptTrackers));
            (r || []).forEach(s.triggerPixel)
        }, t.getNativeTargeting = function(i) {
            var n = {};
            return Object.keys(i.native).forEach((function(e) {
                var t = u.NATIVE_KEYS[e],
                    r = i.native[e];
                "object" === (void 0 === r ? "undefined" : o(r)) && r.url && (r = r.url), t && r && (n[t] = r)
            })), n
        };
        var i, s = r(0),
            n = r(7),
            a = (i = n) && i.__esModule ? i : {
                default: i
            };
        var u = r(4),
            f = t.nativeAdapters = [],
            l = (t.NATIVE_TARGETING_KEYS = Object.keys(u.NATIVE_KEYS).map((function(e) {
                return u.NATIVE_KEYS[e]
            })), {
                image: {
                    image: {
                        required: !0
                    },
                    title: {
                        required: !0
                    },
                    sponsoredBy: {
                        required: !0
                    },
                    clickUrl: {
                        required: !0
                    },
                    body: {
                        required: !1
                    },
                    icon: {
                        required: !1
                    }
                }
            });
        t.nativeAdUnit = function(e) {
            var t = "native" === e.mediaType,
                r = (0, s.deepAccess)(e, "mediaTypes.native");
            return t || r
        };
        var d = t.nativeBidder = function(e) {
            return (0, a.default)(f, e.bidder)
        };
        t.hasNonNativeBidder = function(e) {
            return e.bids.filter((function(e) {
                return !d(e)
            })).length
        }
    },
    18: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.userSync = void 0;
        var n = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return (function(e, t) {
                    var r = [],
                        i = !0,
                        n = !1,
                        o = void 0;
                    try {
                        for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (r.push(s.value), !t || r.length !== t); i = !0);
                    } catch (e) {
                        n = !0, o = e
                    } finally {
                        try {
                            !i && a.return && a.return()
                        } finally {
                            if (n) throw o
                        }
                    }
                    return r
                })(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            f = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                }
                return e
            };
        t.newUserSync = s;
        var i, l = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }
            })(r(0)),
            d = r(3),
            o = r(7),
            c = (i = o) && i.__esModule ? i : {
                default: i
            };

        function s(e) {
            var t = {},
                o = {
                    image: [],
                    iframe: []
                },
                r = !1,
                s = {},
                a = {
                    image: !1,
                    iframe: !1
                },
                u = e.config;

            function i() {
                if (u.syncEnabled && e.browserSupportsCookies && !r) {
                    try {
                        !(function() {
                            if (!u.pixelEnabled && !a.image) return;
                            l.shuffle(o.image).forEach((function(e) {
                                var t = n(e, 2),
                                    r = t[0],
                                    i = t[1];
                                l.logMessage("Invoking image pixel user sync for bidder: " + r), l.triggerPixel(i)
                            }))
                        })(), (function() {
                            if (!u.iframeEnabled && !a.iframe) return;
                            l.shuffle(o.iframe).forEach((function(e) {
                                var t = n(e, 2),
                                    r = t[0],
                                    i = t[1];
                                l.logMessage("Invoking iframe user sync for bidder: " + r), l.insertUserSyncIframe(i)
                            }))
                        })()
                    } catch (e) {
                        return l.logError("Error firing user syncs", e)
                    }
                    o = {
                        image: [],
                        iframe: []
                    }, r = !0
                }
            }
            return d.config.getConfig("userSync", (function(e) {
                u = f(u, e.userSync)
            })), t.registerSync = function(e, t, r) {
                if (!u.syncEnabled || !l.isArray(o[e])) return l.logWarn('User sync type "' + e + '" not supported');
                if (!t) return l.logWarn("Bidder is required for registering sync");
                if (Number(s[t]) >= u.syncsPerBidder) return l.logWarn('Number of user syncs exceeded for "' + t + '"');
                if (u.filterSettings) {
                    if (function(e, t) {
                            var r = u.filterSettings;
                            if (function(e, t) {
                                    if (e.all && e[t]) return l.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.' + t + '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.'), !1;
                                    var r = e.all ? e.all : e[t],
                                        i = e.all ? "all" : t;
                                    if (!r) return !1;
                                    var n = r.filter,
                                        o = r.bidders;
                                    if (n && "include" !== n && "exclude" !== n) return l.logWarn('UserSync "filterSettings.' + i + ".filter\" setting '" + n + "' is not a valid option; use either 'include' or 'exclude'."), !1;
                                    return !!("*" === o || Array.isArray(o) && 0 < o.length && o.every((function(e) {
                                        return l.isStr(e) && "*" !== e
                                    }))) || (l.logWarn('Detected an invalid setup in userSync "filterSettings.' + i + ".bidders\"; use either '*' (to represent all bidders) or an array of bidders."), !1)
                                }(r, e)) {
                                a[e] = !0;
                                var i = r.all ? r.all : r[e],
                                    n = "*" === i.bidders ? [t] : i.bidders,
                                    o = i.filter || "include",
                                    s = {
                                        include: function(e, t) {
                                            return !(0, c.default)(e, t)
                                        },
                                        exclude: function(e, t) {
                                            return (0, c.default)(e, t)
                                        }
                                    };
                                return s[o](n, t)
                            }
                            return !1
                        }(e, t)) return l.logWarn("Bidder '" + t + "' is not permitted to register their userSync " + e + " pixels as per filterSettings config.")
                } else if (u.enabledBidders && u.enabledBidders.length && u.enabledBidders.indexOf(t) < 0) return l.logWarn('Bidder "' + t + '" not permitted to register their userSync pixels.');
                var i, n;
                o[e].push([t, r]), (i = s)[n = t] ? i[n] += 1 : i[n] = 1, s = i
            }, t.syncUsers = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                if (e) return setTimeout(i, Number(e));
                i()
            }, t.triggerUserSyncs = function() {
                u.enableOverride && t.syncUsers()
            }, t
        }
        d.config.setDefaults({
            userSync: {
                syncEnabled: !0,
                pixelEnabled: !0,
                syncsPerBidder: 5,
                syncDelay: 3e3
            }
        });
        var a = !l.isSafariBrowser() && l.cookiesAreEnabled();
        t.userSync = s({
            config: d.config.getConfig("userSync"),
            browserSupportsCookies: a
        })
    },
    19: function(e, t) {
        var r = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = r)
    },
    2: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.NATIVE = "native", t.VIDEO = "video", t.BANNER = "banner"
    },
    20: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                }
                return e
            },
            u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        t.createHook = function(i, n, e) {
            var a = [{
                    fn: n,
                    priority: 0
                }],
                o = {
                    sync: function() {
                        for (var t = this, e = arguments.length, r = Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                        a.forEach((function(e) {
                            e.fn.apply(t, r)
                        }))
                    },
                    asyncSeries: function() {
                        for (var o = this, e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        var s = 0;
                        return a[s].fn.apply(this, t.concat((function e() {
                            for (var t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                            var n = a[++s];
                            if ("object" === (void 0 === n ? "undefined" : u(n)) && "function" == typeof n.fn) return n.fn.apply(o, r.concat(e))
                        })))
                    }
                };
            if (!o[i]) throw "invalid hook type";
            var t = {
                addHook: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 10;
                    "function" == typeof e && (a.push({
                        fn: e,
                        priority: t
                    }), a.sort((function(e, t) {
                        return t.priority - e.priority
                    })))
                },
                removeHook: function(t) {
                    a = a.filter((function(e) {
                        return e.fn === n || e.fn !== t
                    }))
                },
                hasHook: function(t) {
                    return a.some((function(e) {
                        return e.fn === t
                    }))
                }
            };
            "string" == typeof e && (f[e] = t);
            return s((function() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return 1 !== a.length || a[0].fn !== n ? o[i].apply(this, t) : n.apply(this, t)
            }), t)
        };
        var f = t.hooks = {}
    },
    21: function(e, t, r) {
        r(118), e.exports = r(13).Array.findIndex
    },
    22: function(Gn, Hn) {
        var In;
        In = (function() {
            return this
        })();
        try {
            In = In || Function("return this")() || eval("this")
        } catch (e) {
            "object" == typeof window && (In = window)
        }
        Gn.exports = In
    },
    226: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.store = function(e, t) {
            var r = {
                puts: e.map(s)
            };
            (0, n.ajax)(o.config.getConfig("cache.url"), (i = t, {
                success: function(e) {
                    var t = void 0;
                    try {
                        t = JSON.parse(e).responses
                    } catch (e) {
                        return void i(e, [])
                    }
                    t ? i(null, t) : i(new Error("The cache server didn't respond with a responses property."), [])
                },
                error: function(e, t) {
                    i(new Error("Error storing video ad in the cache: " + e + ": " + JSON.stringify(t)), [])
                }
            }), JSON.stringify(r), {
                contentType: "text/plain",
                withCredentials: !0
            });
            var i
        }, t.getCacheUrl = function(e) {
            return o.config.getConfig("cache.url") + "?uuid=" + e
        };
        var n = r(6),
            o = r(3);

        function s(e) {
            var t, r;
            return {
                type: "xml",
                value: e.vastXml ? e.vastXml : (t = e.vastUrl, r = e.vastImpUrl, '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[' + t + "]]></VASTAdTagURI>\n        <Impression>" + (r ? "<![CDATA[" + r + "]]>" : "") + "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>"),
                ttlseconds: Number(e.ttl)
            }
        }
    },
    23: function(e, t) {},
    24: function(e, t, r) {
        e.exports = !r(34)((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    25: function(e, t) {
        var r = {}.toString;
        e.exports = function(e) {
            return r.call(e).slice(8, -1)
        }
    },
    26: function(e, t) {
        e.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    },
    27: function(e, t, r) {
        var i = r(61)("wks"),
            n = r(63),
            o = r(19).Symbol,
            s = "function" == typeof o;
        (e.exports = function(e) {
            return i[e] || (i[e] = s && o[e] || (s ? o : n)("Symbol." + e))
        }).store = i
    },
    28: function(e, t) {
        e.exports = function() {}
    },
    29: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            var t = e;
            return {
                callBids: function() {},
                setBidderCode: function(e) {
                    t = e
                },
                getBidderCode: function() {
                    return t
                }
            }
        }
    },
    3: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.config = t.RANDOM = void 0;
        var u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                }
                return e
            },
            f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        t.newConfig = a;
        var i = r(32),
            l = o(r(10)),
            d = o(r(7)),
            n = r(20);

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = r(0),
            h = !1,
            g = 3e3,
            p = window.location.origin,
            y = !0,
            v = !1,
            m = 200,
            s = t.RANDOM = "random",
            b = {};
        b[s] = !0, b.fixed = !0;
        var E = s,
            w = {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            T = "*";

        function a() {
            var o = [],
                s = void 0,
                a = void 0;

            function e() {
                function n(t) {
                    return (0, l.default)(Object.keys(w), (function(e) {
                        return t === w[e]
                    }))
                }

                function o(e) {
                    if (!e) return c.logError("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
                    if ("string" == typeof e) n(e) || c.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                    else if ("object" === (void 0 === e ? "undefined" : f(e)) && !(0, i.isValidPriceConfig)(e)) return c.logError("Invalid custom price value passed to `setPriceGranularity()`"), !1;
                    return !0
                }
                s = {}, a = {
                    _debug: h,
                    get debug() {
                        return this._debug
                    },
                    set debug(e) {
                        this._debug = e
                    },
                    _bidderTimeout: g,
                    get bidderTimeout() {
                        return this._bidderTimeout
                    },
                    set bidderTimeout(e) {
                        this._bidderTimeout = e
                    },
                    _publisherDomain: p,
                    get publisherDomain() {
                        return this._publisherDomain
                    },
                    set publisherDomain(e) {
                        this._publisherDomain = e
                    },
                    _priceGranularity: w.MEDIUM,
                    set priceGranularity(e) {
                        o(e) && ("string" == typeof e ? this._priceGranularity = n(e) ? e : w.MEDIUM : "object" === (void 0 === e ? "undefined" : f(e)) && (this._customPriceBucket = e, this._priceGranularity = w.CUSTOM, c.logMessage("Using custom price granularity")))
                    },
                    get priceGranularity() {
                        return this._priceGranularity
                    },
                    _customPriceBucket: {},
                    get customPriceBucket() {
                        return this._customPriceBucket
                    },
                    _mediaTypePriceGranularity: {},
                    get mediaTypePriceGranularity() {
                        return this._mediaTypePriceGranularity
                    },
                    set mediaTypePriceGranularity(r) {
                        var i = this;
                        this._mediaTypePriceGranularity = Object.keys(r).reduce((function(e, t) {
                            return o(r[t]) ? "string" == typeof r ? e[t] = n(r[t]) ? r[t] : i._priceGranularity : "object" === (void 0 === r ? "undefined" : f(r)) && (e[t] = r[t], c.logMessage("Using custom price granularity for " + t)) : c.logWarn("Invalid price granularity for media type: " + t), e
                        }), {})
                    },
                    _sendAllBids: y,
                    get enableSendAllBids() {
                        return this._sendAllBids
                    },
                    set enableSendAllBids(e) {
                        this._sendAllBids = e
                    },
                    _bidderSequence: E,
                    get bidderSequence() {
                        return this._bidderSequence
                    },
                    set bidderSequence(e) {
                        b[e] ? this._bidderSequence = e : c.logWarn("Invalid order: " + e + ". Bidder Sequence was not set.")
                    },
                    _timoutBuffer: m,
                    get timeoutBuffer() {
                        return this._timoutBuffer
                    },
                    set timeoutBuffer(e) {
                        this._timoutBuffer = e
                    },
                    _disableAjaxTimeout: v,
                    get disableAjaxTimeout() {
                        return this._disableAjaxTimeout
                    },
                    set disableAjaxTimeout(e) {
                        this._disableAjaxTimeout = e
                    }
                }
            }
            var t = (0, n.createHook)("asyncSeries", (function(r) {
                if ("object" === (void 0 === r ? "undefined" : f(r))) {
                    var n, t, e = Object.keys(r),
                        i = {};
                    e.forEach((function(e) {
                        var t = r[e];
                        "object" === f(s[e]) && "object" === (void 0 === t ? "undefined" : f(t)) && (t = u({}, s[e], t)), i[e] = a[e] = t
                    })), n = i, t = Object.keys(n), o.filter((function(e) {
                        return (0, d.default)(t, e.topic)
                    })).forEach((function(e) {
                        var t, r, i;
                        e.callback((t = {}, r = e.topic, i = n[e.topic], r in t ? Object.defineProperty(t, r, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[r] = i, t))
                    })), o.filter((function(e) {
                        return e.topic === T
                    })).forEach((function(e) {
                        return e.callback(n)
                    }))
                } else c.logError("setConfig options must be an object")
            }));
            return e(), {
                getConfig: function() {
                    if (arguments.length <= 1 && "function" != typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
                        var e = arguments.length <= 0 ? void 0 : arguments[0];
                        return e ? c.deepAccess(a, e) : a
                    }
                    return function(e, t) {
                        var r = t;
                        return "string" != typeof e && (r = e, e = T), "function" == typeof r ? (o.push({
                            topic: e,
                            callback: r
                        }), function() {
                            o.splice(o.indexOf(t), 1)
                        }) : void c.logError("listener must be a function")
                    }.apply(void 0, arguments)
                },
                setConfig: t,
                setDefaults: function(e) {
                    "object" === (void 0 === s ? "undefined" : f(s)) ? (u(s, e), u(a, e)) : c.logError("defaults must be an object")
                },
                resetConfig: e
            }
        }
        t.config = a()
    },
    30: function(e, t, r) {
        "use strict";
        var i, n = r(7),
            o = (i = n) && i.__esModule ? i : {
                default: i
            },
            s = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }
            })(r(0));
        var a = {},
            u = ["criteo"];

        function f(e, t) {
            var r = document.createElement("script");
            r.type = "text/javascript", r.async = !0, t && "function" == typeof t && (r.readyState ? r.onreadystatechange = function() {
                "loaded" !== r.readyState && "complete" !== r.readyState || (r.onreadystatechange = null, t())
            } : r.onload = function() {
                t()
            }), r.src = e;
            var i = document.getElementsByTagName("head");
            (i = i.length ? i : document.getElementsByTagName("body")).length && (i = i[0]).insertBefore(r, i.firstChild)
        }
        t.loadExternalScript = function(e, t) {
            if (t && e)
                if ((0, o.default)(u, t)) {
                    if (!a[e]) {
                        s.logWarn("module " + t + " is loading external JavaScript");
                        var r = document.createElement("script");
                        r.type = "text/javascript", r.async = !0, r.src = e, s.insertElement(r), a[e] = !0
                    }
                } else s.logError(t + " not whitelisted for loading external JavaScript");
            else s.logError("cannot load external script without url and moduleCode")
        }, t.loadScript = function(t, e, r) {
            t ? r ? a[t] ? e && "function" == typeof e && (a[t].loaded ? e() : a[t].callbacks.push(e)) : (a[t] = {
                loaded: !1,
                callbacks: []
            }, e && "function" == typeof e && a[t].callbacks.push(e), f(t, (function() {
                a[t].loaded = !0;
                try {
                    for (var e = 0; e < a[t].callbacks.length; e++) a[t].callbacks[e]()
                } catch (e) {
                    s.logError("Error executing callback", "adloader.js:loadScript", e)
                }
            }))) : f(t, e) : s.logError("Error attempting to request empty URL", "adloader.js:loadScript")
        }
    },
    31: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.auctionManager = void 0, t.newAuctionManager = u;
        var i, n = r(0),
            f = r(45),
            o = r(10),
            s = (i = o) && i.__esModule ? i : {
                default: i
            };
        var a = r(4);

        function u() {
            var u = [],
                i = {};
            return i.addWinningBid = function(t) {
                var e = (0, s.default)(u, (function(e) {
                    return e.getAuctionId() === t.auctionId
                }));
                e ? e.addWinningBid(t) : utils.logWarn("Auction not found when adding winning bid")
            }, i.getAllWinningBids = function() {
                return u.map((function(e) {
                    return e.getWinningBids()
                })).reduce(n.flatten, [])
            }, i.getBidsRequested = function() {
                return u.map((function(e) {
                    return e.getBidRequests()
                })).reduce(n.flatten, [])
            }, i.getBidsReceived = function() {
                return u.map((function(e) {
                    if (e.getAuctionStatus() === f.AUCTION_COMPLETED) return e.getBidsReceived()
                })).reduce(n.flatten, []).filter((function(e) {
                    return e
                }))
            }, i.getAdUnits = function() {
                return u.map((function(e) {
                    return e.getAdUnits()
                })).reduce(n.flatten, [])
            }, i.getAdUnitCodes = function() {
                return u.map((function(e) {
                    return e.getAdUnitCodes()
                })).reduce(n.flatten, []).filter(n.uniques)
            }, i.createAuction = function(e) {
                var t, r = e.adUnits,
                    i = e.adUnitCodes,
                    n = e.callback,
                    o = e.cbTimeout,
                    s = e.labels,
                    a = (0, f.newAuction)({
                        adUnits: r,
                        adUnitCodes: i,
                        callback: n,
                        cbTimeout: o,
                        labels: s
                    });
                return t = a, u.push(t), a
            }, i.findBidByAdId = function(t) {
                return (0, s.default)(u.map((function(e) {
                    return e.getBidsReceived()
                })).reduce(n.flatten, []), (function(e) {
                    return e.adId === t
                }))
            }, i.getStandardBidderAdServerTargeting = function() {
                return (0, f.getStandardBidderSettings)()[a.JSON_MAPPING.ADSERVER_TARGETING]
            }, i.setStatusForBids = function(e, t) {
                var r = i.findBidByAdId(e);
                r && (r.status = t)
            }, i
        }
        t.auctionManager = u()
    },
    32: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isValidPriceConfig = t.getPriceBucketString = void 0;
        var i, n = r(10),
            p = (i = n) && i.__esModule ? i : {
                default: i
            };
        var o = r(0),
            y = 2,
            s = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .5
                }]
            },
            a = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .1
                }]
            },
            u = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .01
                }]
            },
            f = {
                buckets: [{
                    min: 0,
                    max: 3,
                    increment: .01
                }, {
                    min: 3,
                    max: 8,
                    increment: .05
                }, {
                    min: 8,
                    max: 20,
                    increment: .5
                }]
            },
            l = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .05
                }, {
                    min: 5,
                    max: 10,
                    increment: .1
                }, {
                    min: 10,
                    max: 20,
                    increment: .5
                }]
            };

        function d(r, e, i) {
            var n = "";
            if (!v(e)) return n;
            var t, o, s, a, u, f, l, d, c, h = e.buckets.reduce((function(e, t) {
                    return e.max > t.max ? e : t
                }), {
                    max: 0
                }),
                g = (0, p.default)(e.buckets, (function(e) {
                    if (r > h.max * i) {
                        var t = e.precision;
                        void 0 === t && (t = y), n = (e.max * i).toFixed(t)
                    } else if (r <= e.max * i && r >= e.min * i) return e
                }));
            return g && (t = r, s = i, a = void 0 !== (o = g).precision ? o.precision : y, u = o.increment * s, f = o.min * s, l = Math.pow(10, a + 2), d = (t * l - f * l) / (u * l), c = Math.floor(d) * u + f, n = (c = Number(c.toFixed(10))).toFixed(a)), n
        }

        function v(e) {
            if (o.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
            var t = !0;
            return e.buckets.forEach((function(e) {
                void 0 !== e.min && e.max && e.increment || (t = !1)
            })), t
        }
        t.getPriceBucketString = function(e, t) {
            var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
                i = parseFloat(e);
            return isNaN(i) && (i = ""), {
                low: "" === i ? "" : d(e, s, r),
                med: "" === i ? "" : d(e, a, r),
                high: "" === i ? "" : d(e, u, r),
                auto: "" === i ? "" : d(e, l, r),
                dense: "" === i ? "" : d(e, f, r),
                custom: "" === i ? "" : d(e, t, r)
            }
        }, t.isValidPriceConfig = v
    },
    33: function(e, t, r) {
        var o = r(49);
        e.exports = function(i, n, e) {
            if (o(i), void 0 === n) return i;
            switch (e) {
                case 1:
                    return function(e) {
                        return i.call(n, e)
                    };
                case 2:
                    return function(e, t) {
                        return i.call(n, e, t)
                    };
                case 3:
                    return function(e, t, r) {
                        return i.call(n, e, t, r)
                    }
            }
            return function() {
                return i.apply(n, arguments)
            }
        }
    },
    34: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    35: function(e, t, r) {
        var b = r(33),
            E = r(36),
            w = r(58),
            T = r(37),
            i = r(59);
        e.exports = function(d, e) {
            var c = 1 == d,
                h = 2 == d,
                g = 3 == d,
                p = 4 == d,
                y = 6 == d,
                v = 5 == d || y,
                m = e || i;
            return function(e, t, r) {
                for (var i, n, o = w(e), s = E(o), a = b(t, r, 3), u = T(s.length), f = 0, l = c ? m(e, u) : h ? m(e, 0) : void 0; f < u; f++)
                    if ((v || f in s) && (n = a(i = s[f], f, o), d))
                        if (c) l[f] = n;
                        else if (n) switch (d) {
                    case 3:
                        return !0;
                    case 5:
                        return i;
                    case 6:
                        return f;
                    case 2:
                        l.push(i)
                } else if (p) return !1;
                return y ? -1 : g || p ? p : l
            }
        }
    },
    36: function(e, t, r) {
        var i = r(25);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == i(e) ? e.split("") : Object(e)
        }
    },
    37: function(e, t, r) {
        var i = r(38),
            n = Math.min;
        e.exports = function(e) {
            return 0 < e ? n(i(e), 9007199254740991) : 0
        }
    },
    38: function(e, t) {
        var r = Math.ceil,
            i = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? i : r)(e)
        }
    },
    39: function(e, t, r) {
        var i = r(25);
        e.exports = Array.isArray || function(e) {
            return "Array" == i(e)
        }
    },
    4: function(e, t) {
        e.exports = {
            JSON_MAPPING: {
                PL_CODE: "code",
                PL_SIZE: "sizes",
                PL_BIDS: "bids",
                BD_BIDDER: "bidder",
                BD_ID: "paramsd",
                BD_PL_ID: "placementId",
                ADSERVER_TARGETING: "adserverTargeting",
                BD_SETTING_STANDARD: "standard"
            },
            REPO_AND_VERSION: "prebid_prebid_1.30.0",
            DEBUG_MODE: "pbjs_debug",
            STATUS: {
                GOOD: 1,
                NO_BID: 2
            },
            CB: {
                TYPE: {
                    ALL_BIDS_BACK: "allRequestedBidsBack",
                    AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                    BID_WON: "bidWon",
                    REQUEST_BIDS: "requestBids"
                }
            },
            EVENTS: {
                AUCTION_INIT: "auctionInit",
                AUCTION_END: "auctionEnd",
                BID_ADJUSTMENT: "bidAdjustment",
                BID_TIMEOUT: "bidTimeout",
                BID_REQUESTED: "bidRequested",
                BID_RESPONSE: "bidResponse",
                BID_WON: "bidWon",
                BIDDER_DONE: "bidderDone",
                SET_TARGETING: "setTargeting",
                REQUEST_BIDS: "requestBids",
                ADD_AD_UNITS: "addAdUnits",
                AD_RENDER_FAILED: "adRenderFailed"
            },
            AD_RENDER_FAILED_REASON: {
                PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocuemnt",
                NO_AD: "noAd",
                EXCEPTION: "exception",
                CANNOT_FIND_AD: "cannotFindAd",
                MISSING_DOC_OR_ADID: "missingDocOrAdid"
            },
            EVENT_ID_PATHS: {
                bidWon: "adUnitCode"
            },
            GRANULARITY_OPTIONS: {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            TARGETING_KEYS: {
                BIDDER: "hb_bidder",
                AD_ID: "hb_adid",
                PRICE_BUCKET: "hb_pb",
                SIZE: "hb_size",
                DEAL: "hb_deal",
                SOURCE: "hb_source",
                FORMAT: "hb_format"
            },
            NATIVE_KEYS: {
                title: "hb_native_title",
                body: "hb_native_body",
                sponsoredBy: "hb_native_brand",
                image: "hb_native_image",
                icon: "hb_native_icon",
                clickUrl: "hb_native_linkurl",
                cta: "hb_native_cta"
            },
            S2S: {
                SRC: "s2s",
                DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                SYNCED_BIDDERS_KEY: "pbjsSyncs"
            }
        }
    },
    40: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        t.setSizeConfig = a, t.getLabels = function(e, t) {
            if (e.labelAll) return {
                labelAll: !0,
                labels: e.labelAll,
                activeLabels: t
            };
            return {
                labelAll: !1,
                labels: e.labelAny,
                activeLabels: t
            }
        }, t.sizeSupported = function(e) {
            var t = y(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : p);
            return !t.shouldFilter || !!t.sizesSupported[e]
        }, t.resolveStatus = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.labels,
                r = void 0 === t ? [] : t,
                i = e.labelAll,
                n = void 0 !== i && i,
                o = e.activeLabels,
                s = void 0 === o ? [] : o,
                a = arguments[1],
                u = arguments[2],
                f = y(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : p);
            a = (0, h.isPlainObject)(a) ? (0, h.deepClone)(a) : {};
            u && (a.banner ? a.banner.sizes || (a.banner.sizes = u) : a.banner = {
                sizes: u
            });
            var l = (0, h.deepAccess)(a, "banner.sizes");
            f.shouldFilter && l && (a.banner.sizes = l.filter((function(e) {
                return f.sizesSupported[e]
            })));
            var d = Object.keys(a),
                c = {
                    active: 1 < d.length || 1 === d.length && "banner" !== d[0] || "banner" === d[0] && 0 < (0, h.deepAccess)(a, "banner.sizes.length") && (0 === r.length || !n && (r.some((function(e) {
                        return f.labels[e]
                    })) || r.some((function(e) {
                        return (0, g.default)(s, e)
                    }))) || n && r.reduce((function(e, t) {
                        return e ? f.labels[t] || (0, g.default)(s, t) : e
                    }), !0)),
                    mediaTypes: a
                };
            l && l.length !== a.banner.sizes.length && (c.filterResults = {
                before: l,
                after: a.banner.sizes
            });
            return c
        };
        var n, o = r(3),
            h = r(0),
            s = r(7),
            g = (n = s) && n.__esModule ? n : {
                default: n
            };
        var p = [];

        function a(e) {
            p = e
        }

        function y(e) {
            return e.reduce((function(r, e) {
                return "object" === (void 0 === e ? "undefined" : i(e)) && "string" == typeof e.mediaQuery ? matchMedia(e.mediaQuery).matches && (Array.isArray(e.sizesSupported) && (r.shouldFilter = !0), ["labels", "sizesSupported"].forEach((function(t) {
                    return (e[t] || []).forEach((function(e) {
                        return r[t][e] = !0
                    }))
                }))) : (0, h.logWarn)('sizeConfig rule missing required property "mediaQuery"'), r
            }), {
                labels: {},
                sizesSupported: {},
                shouldFilter: !1
            })
        }
        o.config.getConfig("sizeConfig", (function(e) {
            return a(e.sizeConfig)
        }))
    },
    41: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.adunitCounter = void 0;
        var i = r(0),
            n = {};
        var o = {
            incrementCounter: function(e) {
                return n[e] = n[e] || {}, n[e].counter = (0, i.deepAccess)(n, e + ".counter") + 1 || 1, n[e].counter
            },
            getCounter: function(e) {
                return (0, i.deepAccess)(n, e + ".counter") || 0
            }
        };
        t.adunitCounter = o
    },
    42: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hasNonVideoBidder = t.videoBidder = t.videoAdUnit = t.OUTSTREAM = void 0, t.isValidVideoBid = function(e, t) {
            var r = (0, o.getBidRequest)(e.adId, t),
                i = r && (0, o.deepAccess)(r, "mediaTypes.video"),
                n = i && (0, o.deepAccess)(i, "context");
            if (!r || i && n !== f) return s.config.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : ((0, o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1);
            return n !== f || !(!e.renderer && !r.renderer)
        };
        var i, n = r(8),
            o = r(0),
            s = r(3),
            a = r(7),
            u = (i = a) && i.__esModule ? i : {
                default: i
            };
        var f = t.OUTSTREAM = "outstream",
            l = (t.videoAdUnit = function(e) {
                var t = "video" === e.mediaType,
                    r = (0, o.deepAccess)(e, "mediaTypes.video");
                return t || r
            }, t.videoBidder = function(e) {
                return (0, u.default)(n.videoAdapters, e.bidder)
            });
        t.hasNonVideoBidder = function(e) {
            return e.bids.filter((function(e) {
                return !l(e)
            })).length
        }
    },
    43: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getGlobal = function() {
            return window.pbjs
        }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || []
    },
    44: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.targeting = t.isBidNotExpired = t.TARGETING_KEYS = t.RENDERED = t.BID_TARGETING_SET = void 0;
        var b = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
            }
            return e
        };
        t.getHighestCpmBidsFromBidPool = N, t.newTargeting = d;
        var i, E = r(0),
            w = r(3),
            T = r(17),
            n = r(31),
            s = r(40),
            o = r(7),
            S = (i = o) && i.__esModule ? i : {
                default: i
            };

        function I(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                return r
            }
            return Array.from(e)
        }

        function A(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }
        var _ = r(0),
            R = r(4),
            O = [],
            a = t.BID_TARGETING_SET = "targetingSet",
            u = t.RENDERED = "rendered",
            P = 20,
            B = t.TARGETING_KEYS = Object.keys(R.TARGETING_KEYS).map((function(e) {
                return R.TARGETING_KEYS[e]
            })),
            f = (t.isBidNotExpired = function(e) {
                return e.responseTimestamp + 1e3 * e.ttl + 1e3 > (0, E.timestamp)()
            }, function(e) {
                return e && (e.status && !(0, S.default)([a, u], e.status) || !e.status)
            });

        function N(e, r) {
            var i = [],
                n = (0, E.groupBy)(e, "adUnitCode");
            return Object.keys(n).forEach((function(e) {
                var t = (0, E.groupBy)(n[e], "bidderCode");
                Object.keys(t).forEach((function(e) {
                    return i.push(t[e].reduce(r, l()))
                }))
            })), i
        }

        function l(e) {
            return {
                adUnitCode: e,
                cpm: 0,
                adserverTargeting: {},
                timeToRespond: 0
            }
        }

        function d(r) {
            var h = {};

            function g(e) {
                return "string" == typeof e ? [e] : _.isArray(e) ? e : r.getAdUnitCodes() || []
            }

            function p() {
                return N(r.getBidsReceived().filter((function(e) {
                    return "banner" !== e.mediaType || (0, s.sizeSupported)([e.width, e.height])
                })).filter(f).filter(t.isBidNotExpired), E.getOldestHighestCpmBid)
            }

            function y() {
                return r.getStandardBidderAdServerTargeting().map((function(e) {
                    return e.key
                })).concat(B).filter(E.uniques)
            }

            function v(i, n, e, t) {
                return Object.keys(n.adserverTargeting).filter(o()).forEach((function(e) {
                    var t, r;
                    i.length && i.filter((r = e, function(e) {
                        return e.adUnitCode === n.adUnitCode && e.adserverTargeting[r]
                    })).forEach((t = e, function(e) {
                        _.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]), e.adserverTargeting[t] = e.adserverTargeting[t].concat(n.adserverTargeting[t]).filter(E.uniques), delete n.adserverTargeting[t]
                    }))
                })), i.push(n), i
            }

            function o() {
                var t = y();
                return function(e) {
                    return -1 === t.indexOf(e)
                }
            }

            function m(t) {
                return A({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(o()).map((function(e) {
                    return A({}, e.substring(0, P), [t.adserverTargeting[e]])
                })))
            }
            return h.resetPresetTargeting = function(e) {
                if ((0, E.isGptPubadsDefined)()) {
                    var t = g(e),
                        i = r.getAdUnits().filter((function(e) {
                            return (0, S.default)(t, e.code)
                        }));
                    window.googletag.pubads().getSlots().forEach((function(r) {
                        O.forEach((function(t) {
                            i.forEach((function(e) {
                                e.code !== r.getAdUnitPath() && e.code !== r.getSlotElementId() || r.setTargeting(t, null)
                            }))
                        }))
                    }))
                }
            }, h.getAllTargeting = function(e) {
                var i, t, n, r, o, s, a, u, f, l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : p(),
                    d = g(e),
                    c = (s = d, a = l, u = h.getWinningBids(s, a), f = y(), u = u.map((function(o) {
                        return A({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter((function(e) {
                            return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === f.indexOf(e)
                        })).reduce((function(e, t) {
                            var r = [o.adserverTargeting[t]],
                                i = A({}, t.substring(0, P), r);
                            if (t !== R.TARGETING_KEYS.DEAL) return [].concat(I(e), [i]);
                            var n = A({}, (t + "_" + o.bidderCode).substring(0, P), r);
                            return [].concat(I(e), [i, n])
                        }), []))
                    }))).concat((r = d, o = l, o.filter((function(e) {
                        return (0, S.default)(r, e.adUnitCode)
                    })).map((function(e) {
                        return b({}, e)
                    })).reduce(v, []).map(m).filter((function(e) {
                        return e
                    })))).concat(w.config.getConfig("enableSendAllBids") ? (i = d, t = l, n = B.concat(T.NATIVE_TARGETING_KEYS), N(t, E.getHighestCpm).map((function(t) {
                        if (t.adserverTargeting && i && (_.isArray(i) && (0, S.default)(i, t.adUnitCode) || "string" == typeof i && t.adUnitCode === i)) return A({}, t.adUnitCode, (r = t, n.filter((function(e) {
                            return void 0 !== t.adserverTargeting[e]
                        })).map((function(e) {
                            return A({}, (e + "_" + r.bidderCode).substring(0, P), [r.adserverTargeting[e]])
                        }))));
                        var r
                    })).filter((function(e) {
                        return e
                    }))) : []);
                return c.map((function(t) {
                    Object.keys(t).map((function(e) {
                        t[e].map((function(e) {
                            -1 === O.indexOf(Object.keys(e)[0]) && (O = Object.keys(e).concat(O))
                        }))
                    }))
                })), c = c.map((function(e) {
                    return A({}, Object.keys(e)[0], e[Object.keys(e)[0]].map((function(e) {
                        return A({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                    })).reduce((function(e, t) {
                        return b(t, e)
                    }), {}))
                })).reduce((function(e, t) {
                    var r = Object.keys(t)[0];
                    return e[r] = b({}, e[r], t[r]), e
                }), {}), d.forEach((function(e) {
                    c[e] || (c[e] = {})
                })), c
            }, h.setTargetingForGPT = function(n, e) {
                window.googletag.pubads().getSlots().forEach((function(i) {
                    Object.keys(n).filter(e ? e(i) : (0, E.isAdUnitCodeMatchingSlot)(i)).forEach((function(r) {
                        return Object.keys(n[r]).forEach((function(t) {
                            var e = n[r][t].split(",");
                            (e = 1 < e.length ? [e] : e).map((function(e) {
                                return _.logMessage("Attempting to set key value for slot: " + i.getSlotElementId() + " key: " + t + " value: " + e), e
                            })).forEach((function(e) {
                                i.setTargeting(t, e)
                            }))
                        }))
                    }))
                }))
            }, h.getWinningBids = function(e) {
                var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : p(),
                    t = g(e);
                return r.filter((function(e) {
                    return (0, S.default)(t, e.adUnitCode)
                })).filter((function(e) {
                    return 0 < e.cpm
                })).map((function(e) {
                    return e.adUnitCode
                })).filter(E.uniques).map((function(t) {
                    return r.filter((function(e) {
                        return e.adUnitCode === t ? e : null
                    })).reduce(E.getHighestCpm, l(t))
                }))
            }, h.setTargetingForAst = function() {
                var i = h.getAllTargeting();
                Object.keys(i).forEach((function(r) {
                    return Object.keys(i[r]).forEach((function(e) {
                        if (_.logMessage("Attempting to set targeting for targetId: " + r + " key: " + e + " value: " + i[r][e]), _.isStr(i[r][e]) || _.isArray(i[r][e])) {
                            var t = {};
                            e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = i[r][e] : t[e] = i[r][e], window.apntag.setKeywords(r, t)
                        }
                    }))
                }))
            }, h.isApntagDefined = function() {
                if (window.apntag && _.isFn(window.apntag.setKeywords)) return !0
            }, h
        }
        t.targeting = d(n.auctionManager)
    },
    45: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.addBidResponse = t.AUCTION_COMPLETED = t.AUCTION_IN_PROGRESS = t.AUCTION_STARTED = void 0;
        var v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            m = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                }
                return e
            };
        t.newAuction = function(e) {
            var d = e.adUnits,
                t = e.adUnitCodes,
                r = e.callback,
                i = e.cbTimeout,
                n = e.labels,
                f = d,
                l = n,
                c = t,
                h = [],
                g = [],
                p = void 0,
                y = void 0,
                v = P.generateUUID(),
                m = void 0,
                b = r,
                E = void 0,
                w = i,
                o = [];

            function T() {
                return {
                    auctionId: v,
                    timestamp: p,
                    auctionEnd: y,
                    auctionStatus: m,
                    adUnits: f,
                    adUnitCodes: c,
                    labels: l,
                    bidderRequests: h,
                    bidsReceived: g,
                    winningBids: o,
                    timeout: w
                }
            }

            function S(e, t) {
                if (t && clearTimeout(E), null != b) {
                    var r = [];
                    e && (P.logMessage("Auction " + v + " timedOut"), a = g, u = (s = h).filter((function(e) {
                        return !e.doneCbCallCount
                    })).map((function(e) {
                        return e.bidderCode
                    })).filter(A.uniques), f = a.map((function(e) {
                        return e.bidder
                    })).filter(A.uniques), l = u.filter((function(e) {
                        return !(0, R.default)(f, e)
                    })), (r = s.map((function(e) {
                        return (e.bids || []).filter((function(e) {
                            return (0, R.default)(l, e.bidder)
                        }))
                    })).reduce(A.flatten, []).map((function(e) {
                        return {
                            bidId: e.bidId,
                            bidder: e.bidder,
                            adUnitCode: e.adUnitCode,
                            auctionId: e.auctionId
                        }
                    }))).length && N.emit(U.EVENTS.BID_TIMEOUT, r));
                    try {
                        m = k, y = Date.now(), N.emit(U.EVENTS.AUCTION_END, T());
                        var i = c,
                            n = g.filter(A.adUnitsFilter.bind(this, i)).reduce(G, {});
                        b.apply(pbjs, [n, e])
                    } catch (e) {
                        P.logError("Error executing bidsBackHandler", null, e)
                    } finally {
                        r.length && B.callTimedOutBidders(d, r, w);
                        var o = _.config.getConfig("userSync") || {};
                        o.enableOverride || O(o.syncDelay)
                    }
                    b = null
                }
                var s, a, u, f, l
            }

            function I(e) {
                P.logInfo("Bids Received for Auction with id: " + v, g), m = k, S(!1, !0)
            }
            return {
                addBidReceived: function(e) {
                    g = g.concat(e)
                },
                executeCallback: S,
                callBids: function() {
                    var n = this;
                    m = C, p = Date.now();
                    var o = B.makeBidRequests(f, p, v, w, l);
                    P.logInfo("Bids Requested for Auction with id: " + v, o), o.forEach((function(e) {
                        var t;
                        t = e, h = h.concat(t)
                    }));
                    var s = {};
                    if (o.length < 1) P.logWarn("No valid bid requests returned for auction"), I();
                    else {
                        var e = {
                            bidRequests: o,
                            run: function() {
                                var e, t;
                                e = S.bind(null, !0), t = setTimeout(e, w), E = t, m = x, N.emit(U.EVENTS.AUCTION_INIT, T());
                                var r = Y(I, n),
                                    i = {
                                        auctionAddBidResponse: r.addBidResponse
                                    };
                                B.callBids(f, o, V.bind(i), r.adapterDone, {
                                    request: function(e, t) {
                                        u(j, t), u(s, e), M[e] || (M[e] = {
                                            SRA: !0,
                                            origin: t
                                        }), 1 < s[e] && (M[e].SRA = !1)
                                    },
                                    done: function(e) {
                                        j[e]--, D[0] && a(D[0]) && D.shift()
                                    }
                                }, w)
                            }
                        };
                        a(e) || (P.logWarn("queueing auction due to limited endpoint capacity"), D.push(e))
                    }

                    function a(e) {
                        var i = !0,
                            n = _.config.getConfig("maxRequestsPerOrigin") || L;
                        return e.bidRequests.some((function(e) {
                            var t = 1,
                                r = void 0 !== e.src && e.src === U.S2S.SRC ? "s2s" : e.bidderCode;
                            return M[r] && (!1 === M[r].SRA && (t = Math.min(e.bids.length, n)), j[M[r].origin] + t > n && (i = !1)), !i
                        })), i && e.run(), i
                    }

                    function u(e, t) {
                        void 0 === e[t] ? e[t] = 1 : e[t]++
                    }
                },
                addWinningBid: function(e) {
                    o = o.concat(e), B.callBidWonBidder(e.bidder, e, d)
                },
                getWinningBids: function() {
                    return o
                },
                getTimeout: function() {
                    return w
                },
                getAuctionId: function() {
                    return v
                },
                getAuctionStatus: function() {
                    return m
                },
                getAdUnits: function() {
                    return f
                },
                getAdUnitCodes: function() {
                    return c
                },
                getBidRequests: function() {
                    return h
                },
                getBidsReceived: function() {
                    return g
                }
            }
        }, t.auctionCallbacks = Y, t.getStandardBidderSettings = a, t.getKeyValueTargetingPairs = F, t.adjustBids = f;
        var A = r(0),
            b = r(32),
            n = r(17),
            E = r(226),
            w = r(12),
            _ = r(3),
            i = r(18),
            o = r(20),
            T = s(r(10)),
            R = s(r(7)),
            S = r(42);

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var O = i.userSync.syncUsers,
            P = r(0),
            B = r(8),
            N = r(9),
            U = r(4),
            C = t.AUCTION_STARTED = "started",
            x = t.AUCTION_IN_PROGRESS = "inProgress",
            k = t.AUCTION_COMPLETED = "completed";
        N.on(U.EVENTS.BID_ADJUSTMENT, (function(e) {
            f(e)
        }));
        var L = 4,
            j = {},
            M = {},
            D = [];
        var V = t.addBidResponse = (0, o.createHook)("asyncSeries", (function(e, t) {
            this.auctionAddBidResponse(e, t)
        }), "addBidResponse");

        function Y(e, g) {
            var p = 0,
                t = !1,
                r = (0, A.delayExecution)((function() {
                    t = !0
                }), g.getBidRequests().length);

            function y() {
                p--, t && 0 === p && e()
            }
            return {
                addBidResponse: function(e, t) {
                    p++;
                    var r = g.getBidRequests(),
                        i = g.getAuctionId(),
                        n = (0, A.getBidderRequest)(r, t.bidderCode, e),
                        o = (function(e) {
                            var t = e.adUnitCode,
                                r = e.bid,
                                i = e.bidRequest,
                                n = e.auctionId,
                                o = i.start,
                                s = m({}, r, {
                                    auctionId: n,
                                    responseTimestamp: (0, A.timestamp)(),
                                    requestTimestamp: o,
                                    cpm: parseFloat(r.cpm) || 0,
                                    bidder: r.bidderCode,
                                    adUnitCode: t
                                });
                            s.timeToRespond = s.responseTimestamp - s.requestTimestamp, N.emit(U.EVENTS.BID_ADJUSTMENT, s);
                            var a = i.bids && (0, T.default)(i.bids, (function(e) {
                                    return e.adUnitCode == t
                                })),
                                u = a && a.renderer;
                            u && u.url && (s.renderer = w.Renderer.install({
                                url: u.url
                            }), s.renderer.setRender(u.render));
                            var f, l = _.config.getConfig("mediaTypePriceGranularity." + r.mediaType),
                                d = (0, b.getPriceBucketString)(s.cpm, "object" === (void 0 === l ? "undefined" : v(l)) ? l : _.config.getConfig("customPriceBucket"), _.config.getConfig("currency.granularityMultiplier"));
                            return s.pbLg = d.low, s.pbMg = d.med, s.pbHg = d.high, s.pbAg = d.auto, s.pbDg = d.dense, s.pbCg = d.custom, s.bidderCode && (0 < s.cpm || s.dealId) && (f = F(s.bidderCode, s)), s.adserverTargeting = m(s.adserverTargeting || {}, f), s
                        })({
                            adUnitCode: e,
                            bid: t,
                            bidRequest: n,
                            auctionId: i
                        });
                    "video" === o.mediaType ? (s = g, a = o, u = n, f = y, l = !0, d = (0, A.getBidRequest)(a.adId, [u]), c = d && (0, A.deepAccess)(d, "mediaTypes.video"), h = c && (0, A.deepAccess)(c, "context"), _.config.getConfig("cache.url") && h !== S.OUTSTREAM && (a.videoCacheKey ? a.vastUrl || (P.logError("videoCacheKey specified but not required vastUrl for video bid"), l = !1) : (l = !1, (0, E.store)([a], (function(e, t) {
                        e ? (P.logWarn("Failed to save to the video cache: " + e + ". Video bid must be discarded."), I(s, a)) : (a.videoCacheKey = t[0].uuid, a.vastUrl || (a.vastUrl = (0, E.getCacheUrl)(a.videoCacheKey)), q(s, a), f())
                    })))), l && (q(s, a), f())) : (q(g, o), y());
                    var s, a, u, f, l, d, c, h
                },
                adapterDone: function() {
                    r(), t && 0 === p && e()
                }
            }
        }

        function I(e, t) {
            t.timeToRespond > e.getTimeout() + _.config.getConfig("timeoutBuffer") && e.executeCallback(!0)
        }

        function q(e, t) {
            N.emit(U.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), I(e, t)
        }

        function a(e) {
            var t = _.config.getConfig("mediaTypePriceGranularity." + e),
                r = "string" == typeof e && t ? "string" == typeof t ? t : "custom" : _.config.getConfig("priceGranularity"),
                i = pbjs.bidderSettings;
            return i[U.JSON_MAPPING.BD_SETTING_STANDARD] || (i[U.JSON_MAPPING.BD_SETTING_STANDARD] = {}), i[U.JSON_MAPPING.BD_SETTING_STANDARD][U.JSON_MAPPING.ADSERVER_TARGETING] || (i[U.JSON_MAPPING.BD_SETTING_STANDARD][U.JSON_MAPPING.ADSERVER_TARGETING] = [{
                key: U.TARGETING_KEYS.BIDDER,
                val: function(e) {
                    return e.bidderCode
                }
            }, {
                key: U.TARGETING_KEYS.AD_ID,
                val: function(e) {
                    return e.adId
                }
            }, {
                key: U.TARGETING_KEYS.PRICE_BUCKET,
                val: function(e) {
                    return r === U.GRANULARITY_OPTIONS.AUTO ? e.pbAg : r === U.GRANULARITY_OPTIONS.DENSE ? e.pbDg : r === U.GRANULARITY_OPTIONS.LOW ? e.pbLg : r === U.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : r === U.GRANULARITY_OPTIONS.HIGH ? e.pbHg : r === U.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
                }
            }, {
                key: U.TARGETING_KEYS.SIZE,
                val: function(e) {
                    return e.size
                }
            }, {
                key: U.TARGETING_KEYS.DEAL,
                val: function(e) {
                    return e.dealId
                }
            }, {
                key: U.TARGETING_KEYS.SOURCE,
                val: function(e) {
                    return e.source
                }
            }, {
                key: U.TARGETING_KEYS.FORMAT,
                val: function(e) {
                    return e.mediaType
                }
            }]), i[U.JSON_MAPPING.BD_SETTING_STANDARD]
        }

        function F(e, t) {
            if (!t) return {};
            var r = {},
                i = pbjs.bidderSettings;
            i && (u(r, a(t.mediaType), t), e && i[e] && i[e][U.JSON_MAPPING.ADSERVER_TARGETING] && (u(r, i[e], t), t.sendStandardTargeting = i[e].sendStandardTargeting));
            return t.native && (r = m({}, r, (0, n.getNativeTargeting)(t))), r
        }

        function u(i, n, o) {
            var e = n[U.JSON_MAPPING.ADSERVER_TARGETING];
            return o.size = o.getSize(), P._each(e, (function(e) {
                var t = e.key,
                    r = e.val;
                if (i[t] && P.logWarn("The key: " + t + " is getting ovewritten"), P.isFn(r)) try {
                    r = r(o)
                } catch (e) {
                    P.logError("bidmanager", "ERROR", e)
                }(void 0 === n.suppressEmptyKeys || !0 !== n.suppressEmptyKeys) && t !== U.TARGETING_KEYS.DEAL || !P.isEmptyStr(r) && null != r ? i[t] = r : P.logInfo("suppressing empty key '" + t + "' from adserver targeting")
            })), i
        }

        function f(e) {
            var t = e.bidderCode,
                r = e.cpm,
                i = void 0;
            if (pbjs.bidderSettings && (t && pbjs.bidderSettings[t] && "function" == typeof pbjs.bidderSettings[t].bidCpmAdjustment ? i = pbjs.bidderSettings[t].bidCpmAdjustment : pbjs.bidderSettings[U.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[U.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (i = pbjs.bidderSettings[U.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), i)) try {
                r = i(e.cpm, m({}, e))
            } catch (e) {
                P.logError("Error during bid adjustment", "bidmanager.js", e)
            }
            0 <= r && (e.cpm = r)
        }

        function G(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }), e[t.adUnitCode].bids.push(t), e
        }
    },
    48: function(e, t, r) {
        "use strict";
        var i = r(14),
            n = r(35)(5),
            o = "find",
            s = !0;
        o in [] && Array(1)[o]((function() {
            s = !1
        })), i(i.P + i.F * s, "Array", {
            find: function(e) {
                return n(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), r(28)(o)
    },
    49: function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    },
    50: function(e, t, r) {
        var i = r(51),
            n = r(56);
        e.exports = r(24) ? function(e, t, r) {
            return i.f(e, t, n(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        }
    },
    51: function(e, t, r) {
        var i = r(52),
            n = r(53),
            o = r(55),
            s = Object.defineProperty;
        t.f = r(24) ? Object.defineProperty : function(e, t, r) {
            if (i(e), t = o(t, !0), i(r), n) try {
                return s(e, t, r)
            } catch (e) {}
            if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
            return "value" in r && (e[t] = r.value), e
        }
    },
    52: function(e, t, r) {
        var i = r(15);
        e.exports = function(e) {
            if (!i(e)) throw TypeError(e + " is not an object!");
            return e
        }
    },
    53: function(e, t, r) {
        e.exports = !r(24) && !r(34)((function() {
            return 7 != Object.defineProperty(r(54)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    54: function(e, t, r) {
        var i = r(15),
            n = r(19).document,
            o = i(n) && i(n.createElement);
        e.exports = function(e) {
            return o ? n.createElement(e) : {}
        }
    },
    55: function(e, t, r) {
        var n = r(15);
        e.exports = function(e, t) {
            if (!n(e)) return e;
            var r, i;
            if (t && "function" == typeof(r = e.toString) && !n(i = r.call(e))) return i;
            if ("function" == typeof(r = e.valueOf) && !n(i = r.call(e))) return i;
            if (!t && "function" == typeof(r = e.toString) && !n(i = r.call(e))) return i;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    56: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    57: function(e, t) {
        var r = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return r.call(e, t)
        }
    },
    58: function(e, t, r) {
        var i = r(26);
        e.exports = function(e) {
            return Object(i(e))
        }
    },
    59: function(e, t, r) {
        var i = r(60);
        e.exports = function(e, t) {
            return new(i(e))(t)
        }
    },
    6: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ajax = void 0;
        var c = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                }
                return e
            },
            h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        t.ajaxBuilder = i;
        var g = r(11),
            p = r(3),
            y = r(0),
            v = 4;
        t.ajax = i();

        function i() {
            var f = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3,
                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                l = e.request,
                d = e.done;
            return function(e, t, r) {
                var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                try {
                    var n = void 0,
                        o = i.method || (r ? "POST" : "GET"),
                        s = document.createElement("a");
                    s.href = e;
                    var a = "object" === (void 0 === t ? "undefined" : h(t)) && null !== t ? t : {
                        success: function() {
                            y.logMessage("xhr success")
                        },
                        error: function(e) {
                            y.logError("xhr error", null, e)
                        }
                    };
                    if ("function" == typeof t && (a.success = t), (n = new window.XMLHttpRequest).onreadystatechange = function() {
                            if (n.readyState === v) {
                                "function" == typeof d && d(s.origin);
                                var e = n.status;
                                200 <= e && e < 300 || 304 === e ? a.success(n.responseText, n) : a.error(n.statusText, n)
                            }
                        }, p.config.getConfig("disableAjaxTimeout") || (n.ontimeout = function() {
                            y.logError("  xhr timeout after ", n.timeout, "ms")
                        }), "GET" === o && r) {
                        var u = (0, g.parse)(e, i);
                        c(u.search, r), e = (0, g.format)(u)
                    }
                    n.open(o, e, !0), p.config.getConfig("disableAjaxTimeout") || (n.timeout = f), i.withCredentials && (n.withCredentials = !0), y._each(i.customHeaders, (function(e, t) {
                        n.setRequestHeader(t, e)
                    })), i.preflight && n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.setRequestHeader("Content-Type", i.contentType || "text/plain"), "function" == typeof l && l(s.origin), "POST" === o && r ? n.send(r) : n.send()
                } catch (e) {
                    y.logError("xhr construction", e)
                }
            }
        }
    },
    60: function(e, t, r) {
        var i = r(15),
            n = r(39),
            o = r(27)("species");
        e.exports = function(e) {
            var t;
            return n(e) && ("function" != typeof(t = e.constructor) || t !== Array && !n(t.prototype) || (t = void 0), i(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
        }
    },
    609: function(e, t, r) {
        r(610), e.exports = r(618)
    },
    61: function(e, t, r) {
        var i = r(13),
            n = r(19),
            o = "__core-js_shared__",
            s = n[o] || (n[o] = {});
        (e.exports = function(e, t) {
            return s[e] || (s[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: i.version,
            mode: r(62) ? "pure" : "global",
            copyright: " 2018 Denis Pushkarev (zloirock.ru)"
        })
    },
    610: function(e, t, r) {
        "use strict";
        var i, n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                }
                return e
            },
            o = r(611),
            s = (i = o) && i.__esModule ? i : {
                default: i
            },
            a = r(616);
        var u = r(617),
            f = s.default.loadJson(u).build("LogPrebidEvents"),
            l = f.Auction,
            d = (0, a.debounce)((function() {
                y("Q:", g);
                var e = n({}, h, {
                        timestamp: Math.floor(Date.now() / 1e3),
                        auctions: g.map((function(e) {
                            return new l(e)
                        }))
                    }),
                    t = new f(e).toArrayBuffer();
                (0, a.ajax)("https://rb.adnxs.com/pack?log=log_prebid_events&format=protobuf", t, (function(e) {
                    return y("Sent Prebid Analytics:", e)
                })), p = p.concat(g), g = []
            }), 100),
            c = {
                BID_RECEIVED: 9,
                BID_WON: 10,
                BID_LOST: 11,
                NO_BID: 12,
                BID_TIMEOUT: 13
            },
            h = {},
            g = [],
            p = [];

        function y() {
            pbjs.getConfig("debug") && window.console.log.apply(null, arguments)
        }
        window.AppNexusPrebidAnalytics = function(e, t, r) {
            !(function(e) {
                switch (e.eventType) {
                    case "auctionInit":
                        (function(e) {
                            var t = e.data;
                            h = {
                                referer_url: document.referrer,
                                seller_member_id: t.config ? t.config.memberId : void 0
                            }, g.push({
                                auction_init_timestamp: t.timestamp,
                                prebid_auction_id: t.auctionId,
                                configured_timeout_ms: t.timeout,
                                version: pbjs.version
                            })
                        }).apply(void 0, arguments);
                        break;
                    case "bidRequested":
                        (function(e) {
                            var t = e.data;
                            g.push({
                                prebid_auction_id: t.auctionId,
                                ad_units: t.bids.map((function(e) {
                                    return {
                                        ad_unit_code: e.adUnitCode,
                                        bids: [{
                                            bid_id: e.bidId,
                                            bidder_code: e.bidder,
                                            request_timestamp: t.start
                                        }]
                                    }
                                }))
                            })
                        }).apply(void 0, arguments);
                        break;
                    case "bidResponse":
                        (function(e) {
                            var t = e.data;
                            if (!t.adUnitCode) return;
                            if (!t.requestTimestamp) return;
                            if (t.cpm === 1 / 0) return;
                            var r = {
                                prebid_auction_id: t.auctionId,
                                ad_units: [{
                                    ad_unit_code: t.adUnitCode,
                                    bids: [{
                                        bid_id: t.adId,
                                        bidder_code: t.bidder,
                                        price: t.cpm,
                                        status_code: c.BID_RECEIVED,
                                        bidder_ad_unit_id: t.adUnitCode,
                                        request_timestamp: t.requestTimestamp,
                                        response_timestamp: t.responseTimestamp,
                                        creative: {
                                            creative_id: t.creative_id && String(t.creative_id),
                                            height: t.height && +t.height,
                                            width: t.width && +t.width,
                                            brand: t.brand
                                        }
                                    }]
                                }]
                            };
                            0 === t.cpm && (r.ad_units[0].bids[0].status_code = c.NO_BID);
                            t.source && (r.ad_units[0].bids[0].source = t.source);
                            g.push(r)
                        }).apply(void 0, arguments);
                        break;
                    case "bidWon":
                        (function(e) {
                            var t = e.data;
                            if (!t.adUnitCode) return;
                            if (t.cpm === 1 / 0) return;
                            g.push({
                                prebid_auction_id: t.auctionId,
                                ad_units: [{
                                    ad_unit_code: t.adUnitCode,
                                    bids: [{
                                        bid_id: t.adId,
                                        bidder_code: t.bidder,
                                        price: t.cpm,
                                        status_code: c.BID_WON
                                    }]
                                }]
                            }), g = g.concat(pbjs.getBidResponsesForAdUnitCode(t.adUnitCode).bids.filter((function(e) {
                                return e !== t && e.adUnitCode === t.adUnitCode
                            })).map((function(e) {
                                return {
                                    prebid_auction_id: e.auctionId,
                                    ad_units: [{
                                        ad_unit_code: e.adUnitCode,
                                        bids: [{
                                            bid_id: e.adId,
                                            bidder_code: e.bidder,
                                            status_code: c.BID_LOST
                                        }]
                                    }]
                                }
                            })))
                        }).apply(void 0, arguments);
                        break;
                    case "bidTimeout":
                        (function(e) {
                            var t = e.data,
                                r = void 0 === t ? [] : t;
                            g = g.concat(r.map((function(e) {
                                return {
                                    prebid_auction_id: e.auctionId,
                                    ad_units: [{
                                        ad_unit_code: e.adUnitCode,
                                        bids: [{
                                            bid_id: e.bidId,
                                            bidder_code: e.bidder,
                                            status_code: c.BID_TIMEOUT
                                        }]
                                    }]
                                }
                            })))
                        }).apply(void 0, arguments)
                }
            })({
                eventType: t,
                data: r
            }), d()
        }
    },
    611: function(a, u, l) {
        "use strict";
        (function(t, i) {
            var e, r, n, o, m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                s = {
                    scope: {}
                };
            s.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, r) {
                if (r.get || r.set) throw new TypeError("ES3 does not support getters and setters.");
                e != Array.prototype && e != Object.prototype && (e[t] = r.value)
            }, s.getGlobal = function(e) {
                return "undefined" != typeof window && window === e ? e : void 0 !== t && null != t ? t : e
            }, s.global = s.getGlobal(void 0), s.SYMBOL_PREFIX = "jscomp_symbol_", s.initSymbol = function() {
                s.initSymbol = function() {}, s.global.Symbol || (s.global.Symbol = s.Symbol)
            }, s.symbolCounter_ = 0, s.Symbol = function(e) {
                return s.SYMBOL_PREFIX + (e || "") + s.symbolCounter_++
            }, s.initSymbolIterator = function() {
                s.initSymbol();
                var e = s.global.Symbol.iterator;
                e || (e = s.global.Symbol.iterator = s.global.Symbol("iterator")), "function" != typeof Array.prototype[e] && s.defineProperty(Array.prototype, e, {
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        return s.arrayIterator(this)
                    }
                }), s.initSymbolIterator = function() {}
            }, s.arrayIterator = function(e) {
                var t = 0;
                return s.iteratorPrototype((function() {
                    return t < e.length ? {
                        done: !1,
                        value: e[t++]
                    } : {
                        done: !0
                    }
                }))
            }, s.iteratorPrototype = function(e) {
                return s.initSymbolIterator(), (e = {
                    next: e
                })[s.global.Symbol.iterator] = function() {
                    return this
                }, e
            }, s.array = s.array || {}, s.iteratorFromArray = function(t, r) {
                s.initSymbolIterator(), t instanceof String && (t += "");
                var i = 0,
                    n = {
                        next: function() {
                            if (i < t.length) {
                                var e = i++;
                                return {
                                    value: r(e, t[e]),
                                    done: !1
                                }
                            }
                            return n.next = function() {
                                return {
                                    done: !0,
                                    value: void 0
                                }
                            }, n.next()
                        }
                    };
                return n[Symbol.iterator] = function() {
                    return n
                }, n
            }, s.polyfill = function(e, t, r, i) {
                if (t) {
                    for (r = s.global, e = e.split("."), i = 0; i < e.length - 1; i++) {
                        var n = e[i];
                        n in r || (r[n] = {}), r = r[n]
                    }(t = t(i = r[e = e[e.length - 1]])) != i && null != t && s.defineProperty(r, e, {
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            }, s.polyfill("Array.prototype.keys", (function(e) {
                return e || function() {
                    return s.iteratorFromArray(this, (function(e) {
                        return e
                    }))
                }
            }), "es6-impl", "es3"), s.polyfill("Array.prototype.entries", (function(e) {
                return e || function() {
                    return s.iteratorFromArray(this, (function(e, t) {
                        return [e, t]
                    }))
                }
            }), "es6-impl", "es3"), s.polyfill("Array.prototype.values", (function(e) {
                return e || function() {
                    return s.iteratorFromArray(this, (function(e, t) {
                        return t
                    }))
                }
            }), "es6", "es3"), o = function(v, e) {
                var n, f, t, s, a, r, o = {};
                return o.ByteBuffer = v, o.Long = v.Long || null, o.VERSION = "5.0.3", o.WIRE_TYPES = {}, o.WIRE_TYPES.VARINT = 0, o.WIRE_TYPES.BITS64 = 1, o.WIRE_TYPES.LDELIM = 2, o.WIRE_TYPES.STARTGROUP = 3, o.WIRE_TYPES.ENDGROUP = 4, o.WIRE_TYPES.BITS32 = 5, o.PACKABLE_WIRE_TYPES = [o.WIRE_TYPES.VARINT, o.WIRE_TYPES.BITS64, o.WIRE_TYPES.BITS32], o.TYPES = {
                    int32: {
                        name: "int32",
                        wireType: o.WIRE_TYPES.VARINT,
                        defaultValue: 0
                    },
                    uint32: {
                        name: "uint32",
                        wireType: o.WIRE_TYPES.VARINT,
                        defaultValue: 0
                    },
                    sint32: {
                        name: "sint32",
                        wireType: o.WIRE_TYPES.VARINT,
                        defaultValue: 0
                    },
                    int64: {
                        name: "int64",
                        wireType: o.WIRE_TYPES.VARINT,
                        defaultValue: o.Long ? o.Long.ZERO : void 0
                    },
                    uint64: {
                        name: "uint64",
                        wireType: o.WIRE_TYPES.VARINT,
                        defaultValue: o.Long ? o.Long.UZERO : void 0
                    },
                    sint64: {
                        name: "sint64",
                        wireType: o.WIRE_TYPES.VARINT,
                        defaultValue: o.Long ? o.Long.ZERO : void 0
                    },
                    bool: {
                        name: "bool",
                        wireType: o.WIRE_TYPES.VARINT,
                        defaultValue: !1
                    },
                    double: {
                        name: "double",
                        wireType: o.WIRE_TYPES.BITS64,
                        defaultValue: 0
                    },
                    string: {
                        name: "string",
                        wireType: o.WIRE_TYPES.LDELIM,
                        defaultValue: ""
                    },
                    bytes: {
                        name: "bytes",
                        wireType: o.WIRE_TYPES.LDELIM,
                        defaultValue: null
                    },
                    fixed32: {
                        name: "fixed32",
                        wireType: o.WIRE_TYPES.BITS32,
                        defaultValue: 0
                    },
                    sfixed32: {
                        name: "sfixed32",
                        wireType: o.WIRE_TYPES.BITS32,
                        defaultValue: 0
                    },
                    fixed64: {
                        name: "fixed64",
                        wireType: o.WIRE_TYPES.BITS64,
                        defaultValue: o.Long ? o.Long.UZERO : void 0
                    },
                    sfixed64: {
                        name: "sfixed64",
                        wireType: o.WIRE_TYPES.BITS64,
                        defaultValue: o.Long ? o.Long.ZERO : void 0
                    },
                    float: {
                        name: "float",
                        wireType: o.WIRE_TYPES.BITS32,
                        defaultValue: 0
                    },
                    enum: {
                        name: "enum",
                        wireType: o.WIRE_TYPES.VARINT,
                        defaultValue: 0
                    },
                    message: {
                        name: "message",
                        wireType: o.WIRE_TYPES.LDELIM,
                        defaultValue: null
                    },
                    group: {
                        name: "group",
                        wireType: o.WIRE_TYPES.STARTGROUP,
                        defaultValue: null
                    }
                }, o.MAP_KEY_TYPES = [o.TYPES.int32, o.TYPES.sint32, o.TYPES.sfixed32, o.TYPES.uint32, o.TYPES.fixed32, o.TYPES.int64, o.TYPES.sint64, o.TYPES.sfixed64, o.TYPES.uint64, o.TYPES.fixed64, o.TYPES.bool, o.TYPES.string, o.TYPES.bytes], o.ID_MIN = 1, o.ID_MAX = 536870911, o.convertFieldsToCamelCase = !1, o.populateAccessors = !0, o.populateDefaults = !0, o.Util = ((n = {}).IS_NODE = !("object" !== (void 0 === i ? "undefined" : m(i)) || "[object process]" != i + "" || i.browser), n.XHR = function() {
                    for (var e = [function() {
                            return new XMLHttpRequest
                        }, function() {
                            return new ActiveXObject("Msxml2.XMLHTTP")
                        }, function() {
                            return new ActiveXObject("Msxml3.XMLHTTP")
                        }, function() {
                            return new ActiveXObject("Microsoft.XMLHTTP")
                        }], t = null, r = 0; r < e.length; r++) {
                        try {
                            t = e[r]()
                        } catch (e) {
                            continue
                        }
                        break
                    }
                    if (!t) throw Error("XMLHttpRequest is not supported");
                    return t
                }, n.fetch = function(e, r) {
                    if (r && "function" != typeof r && (r = null), n.IS_NODE) {
                        var t = l(615);
                        if (r) t.readFile(e, (function(e, t) {
                            r(e ? null : "" + t)
                        }));
                        else try {
                            return t.readFileSync(e)
                        } catch (e) {
                            return null
                        }
                    } else {
                        var i = n.XHR();
                        if (i.open("GET", e, !!r), i.setRequestHeader("Accept", "text/plain"), "function" == typeof i.overrideMimeType && i.overrideMimeType("text/plain"), !r) return i.send(null), 200 == i.status || 0 == i.status && "string" == typeof i.responseText ? i.responseText : null;
                        i.onreadystatechange = function() {
                            4 == i.readyState && (200 == i.status || 0 == i.status && "string" == typeof i.responseText ? r(i.responseText) : r(null))
                        }, 4 != i.readyState && i.send(null)
                    }
                }, n.toCamelCase = function(e) {
                    return e.replace(/_([a-zA-Z])/g, (function(e, t) {
                        return t.toUpperCase()
                    }))
                }, n), o.Lang = {
                    DELIM: /[\s\{\}=;:\[\],'"\(\)<>]/g,
                    RULE: /^(?:required|optional|repeated|map)$/,
                    TYPE: /^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/,
                    NAME: /^[a-zA-Z_][a-zA-Z_0-9]*$/,
                    TYPEDEF: /^[a-zA-Z][a-zA-Z_0-9]*$/,
                    TYPEREF: /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
                    FQTYPEREF: /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/,
                    NUMBER: /^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/,
                    NUMBER_DEC: /^(?:[1-9][0-9]*|0)$/,
                    NUMBER_HEX: /^0[xX][0-9a-fA-F]+$/,
                    NUMBER_OCT: /^0[0-7]+$/,
                    NUMBER_FLT: /^([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/,
                    BOOL: /^(?:true|false)$/i,
                    ID: /^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
                    NEGID: /^\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
                    WHITESPACE: /\s/,
                    STRING: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
                    STRING_DQ: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
                    STRING_SQ: /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g
                }, o.Reflect = (function(l) {
                    function o(e, t) {
                        if (e && "number" == typeof e.low && "number" == typeof e.high && "boolean" == typeof e.unsigned && e.low == e.low && e.high == e.high) return new l.Long(e.low, e.high, void 0 === t ? e.unsigned : t);
                        if ("string" == typeof e) return l.Long.fromString(e, t || !1, 10);
                        if ("number" == typeof e) return l.Long.fromNumber(e, t || !1);
                        throw Error("not convertible to Long")
                    }

                    function u(e, t) {
                        var r = 7 & (i = t.readVarint32()),
                            i = i >>> 3;
                        switch (r) {
                            case l.WIRE_TYPES.VARINT:
                                for (; 128 == (128 & (i = t.readUint8())););
                                break;
                            case l.WIRE_TYPES.BITS64:
                                t.offset += 8;
                                break;
                            case l.WIRE_TYPES.LDELIM:
                                i = t.readVarint32(), t.offset += i;
                                break;
                            case l.WIRE_TYPES.STARTGROUP:
                                u(i, t);
                                break;
                            case l.WIRE_TYPES.ENDGROUP:
                                if (i === e) return !1;
                                throw Error("Illegal GROUPEND after unknown group: " + i + " (" + e + " expected)");
                            case l.WIRE_TYPES.BITS32:
                                t.offset += 4;
                                break;
                            default:
                                throw Error("Illegal wire type in unknown group " + e + ": " + r)
                        }
                        return !0
                    }
                    var s = {},
                        d = function(e, t, r) {
                            this.builder = e, this.parent = t, this.name = r
                        };
                    (e = d.prototype).fqn = function() {
                        for (var e = this.name, t = this;;) {
                            if (null == (t = t.parent)) break;
                            e = t.name + "." + e
                        }
                        return e
                    }, e.toString = function(e) {
                        return (e ? this.className + " " : "") + this.fqn()
                    }, e.build = function() {
                        throw Error(this.toString(!0) + " cannot be built directly")
                    }, s.T = d;
                    var e, a = function(e, t, r, i, n) {
                        d.call(this, e, t, r), this.className = "Namespace", this.children = [], this.options = i || {}, this.syntax = n || "proto2"
                    };
                    (e = a.prototype = Object.create(d.prototype)).getChildren = function(e) {
                        if (null == (e = e || null)) return this.children.slice();
                        for (var t = [], r = 0, i = this.children.length; r < i; ++r) this.children[r] instanceof e && t.push(this.children[r]);
                        return t
                    }, e.addChild = function(e) {
                        var t;
                        if (t = this.getChild(e.name))
                            if (t instanceof c.Field && t.name !== t.originalName && null === this.getChild(t.originalName)) t.name = t.originalName;
                            else {
                                if (!(e instanceof c.Field && e.name !== e.originalName && null === this.getChild(e.originalName))) throw Error("Duplicate name in namespace " + this.toString(!0) + ": " + e.name);
                                e.name = e.originalName
                            } this.children.push(e)
                    }, e.getChild = function(e) {
                        for (var t = "number" == typeof e ? "id" : "name", r = 0, i = this.children.length; r < i; ++r)
                            if (this.children[r][t] === e) return this.children[r];
                        return null
                    }, e.resolve = function(e, t) {
                        var r = "string" == typeof e ? e.split(".") : e,
                            i = this,
                            n = 0;
                        if ("" === r[n]) {
                            for (; null !== i.parent;) i = i.parent;
                            n++
                        }
                        do {
                            do {
                                if (!(i instanceof s.Namespace)) {
                                    i = null;
                                    break
                                }
                                if (!((i = i.getChild(r[n])) && i instanceof s.T) || t && !(i instanceof s.Namespace)) {
                                    i = null;
                                    break
                                }
                                n++
                            } while (n < r.length);
                            if (null != i) break;
                            if (null !== this.parent) return this.parent.resolve(e, t)
                        } while (null != i);
                        return i
                    }, e.qn = function(e) {
                        for (var t = [], r = e; t.unshift(r.name), null !== (r = r.parent););
                        for (r = 1; r <= t.length; r++) {
                            var i = t.slice(t.length - r);
                            if (e === this.resolve(i, e instanceof s.Namespace)) return i.join(".")
                        }
                        return e.fqn()
                    }, e.build = function() {
                        for (var e, t = {}, r = this.children, i = 0, n = r.length; i < n; ++i)(e = r[i]) instanceof a && (t[e.name] = e.build());
                        return Object.defineProperty && Object.defineProperty(t, "$options", {
                            value: this.buildOpt()
                        }), t
                    }, e.buildOpt = function() {
                        for (var e = {}, t = Object.keys(this.options), r = 0, i = t.length; r < i; ++r) e[t[r]] = this.options[t[r]];
                        return e
                    }, e.getOption = function(e) {
                        return void 0 === e ? this.options : void 0 !== this.options[e] ? this.options[e] : null
                    }, s.Namespace = a;
                    var f = function(e, t, r, i, n) {
                            if (this.type = e, this.resolvedType = t, this.isMapKey = r, this.syntax = i, this.name = n, r && l.MAP_KEY_TYPES.indexOf(e) < 0) throw Error("Invalid map key type: " + e.name)
                        },
                        t = f.prototype;
                    f.defaultFieldValue = function(e) {
                        if ("string" == typeof e && (e = l.TYPES[e]), void 0 === e.defaultValue) throw Error("default value for type " + e.name + " is not supported");
                        return e == l.TYPES.bytes ? new v(0) : e.defaultValue
                    }, t.toString = function() {
                        return (this.name || "") + (this.isMapKey ? "map" : "value") + " element"
                    }, t.verifyValue = function(t) {
                        function r(e, t) {
                            throw Error("Illegal value for " + i.toString(!0) + " of type " + i.type.name + ": " + e + " (" + t + ")")
                        }
                        var i = this;
                        switch (this.type) {
                            case l.TYPES.int32:
                            case l.TYPES.sint32:
                            case l.TYPES.sfixed32:
                                return ("number" != typeof t || t == t && 0 != t % 1) && r(void 0 === t ? "undefined" : m(t), "not an integer"), 4294967295 < t ? 0 | t : t;
                            case l.TYPES.uint32:
                            case l.TYPES.fixed32:
                                return ("number" != typeof t || t == t && 0 != t % 1) && r(void 0 === t ? "undefined" : m(t), "not an integer"), t < 0 ? t >>> 0 : t;
                            case l.TYPES.int64:
                            case l.TYPES.sint64:
                            case l.TYPES.sfixed64:
                                if (l.Long) try {
                                    return o(t, !1)
                                } catch (e) {
                                    r(void 0 === t ? "undefined" : m(t), e.message)
                                } else r(void 0 === t ? "undefined" : m(t), "requires Long.js");
                            case l.TYPES.uint64:
                            case l.TYPES.fixed64:
                                if (l.Long) try {
                                    return o(t, !0)
                                } catch (e) {
                                    r(void 0 === t ? "undefined" : m(t), e.message)
                                } else r(void 0 === t ? "undefined" : m(t), "requires Long.js");
                            case l.TYPES.bool:
                                return "boolean" != typeof t && r(void 0 === t ? "undefined" : m(t), "not a boolean"), t;
                            case l.TYPES.float:
                            case l.TYPES.double:
                                return "number" != typeof t && r(void 0 === t ? "undefined" : m(t), "not a number"), t;
                            case l.TYPES.string:
                                return "string" == typeof t || t && t instanceof String || r(void 0 === t ? "undefined" : m(t), "not a string"), "" + t;
                            case l.TYPES.bytes:
                                return v.isByteBuffer(t) ? t : v.wrap(t, "base64");
                            case l.TYPES.enum:
                                for (var e = this.resolvedType.getChildren(l.Reflect.Enum.Value), n = 0; n < e.length; n++)
                                    if (e[n].name == t || e[n].id == t) return e[n].id;
                                if ("proto3" === this.syntax) return ("number" != typeof t || t == t && 0 != t % 1) && r(void 0 === t ? "undefined" : m(t), "not an integer"), (4294967295 < t || t < 0) && r(void 0 === t ? "undefined" : m(t), "not in range for uint32"), t;
                                r(t, "not a valid enum value");
                            case l.TYPES.group:
                            case l.TYPES.message:
                                if (t && "object" === (void 0 === t ? "undefined" : m(t)) || r(void 0 === t ? "undefined" : m(t), "object expected"), t instanceof this.resolvedType.clazz) return t;
                                if (t instanceof l.Builder.Message) {
                                    e = {};
                                    for (n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                                    t = e
                                }
                                return new this.resolvedType.clazz(t)
                        }
                        throw Error("[INTERNAL] Illegal value for " + this.toString(!0) + ": " + t + " (undefined type " + this.type + ")")
                    }, t.calculateLength = function(e, t) {
                        if (null === t) return 0;
                        var r;
                        switch (this.type) {
                            case l.TYPES.int32:
                                return t < 0 ? v.calculateVarint64(t) : v.calculateVarint32(t);
                            case l.TYPES.uint32:
                                return v.calculateVarint32(t);
                            case l.TYPES.sint32:
                                return v.calculateVarint32(v.zigZagEncode32(t));
                            case l.TYPES.fixed32:
                            case l.TYPES.sfixed32:
                            case l.TYPES.float:
                                return 4;
                            case l.TYPES.int64:
                            case l.TYPES.uint64:
                                return v.calculateVarint64(t);
                            case l.TYPES.sint64:
                                return v.calculateVarint64(v.zigZagEncode64(t));
                            case l.TYPES.fixed64:
                            case l.TYPES.sfixed64:
                                return 8;
                            case l.TYPES.bool:
                                return 1;
                            case l.TYPES.enum:
                                return v.calculateVarint32(t);
                            case l.TYPES.double:
                                return 8;
                            case l.TYPES.string:
                                return r = v.calculateUTF8Bytes(t), v.calculateVarint32(r) + r;
                            case l.TYPES.bytes:
                                if (t.remaining() < 0) throw Error("Illegal value for " + this.toString(!0) + ": " + t.remaining() + " bytes remaining");
                                return v.calculateVarint32(t.remaining()) + t.remaining();
                            case l.TYPES.message:
                                return r = this.resolvedType.calculate(t), v.calculateVarint32(r) + r;
                            case l.TYPES.group:
                                return (r = this.resolvedType.calculate(t)) + v.calculateVarint32(e << 3 | l.WIRE_TYPES.ENDGROUP)
                        }
                        throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + t + " (unknown type)")
                    }, t.encodeValue = function(e, t, r) {
                        if (null === t) return r;
                        switch (this.type) {
                            case l.TYPES.int32:
                                t < 0 ? r.writeVarint64(t) : r.writeVarint32(t);
                                break;
                            case l.TYPES.uint32:
                                r.writeVarint32(t);
                                break;
                            case l.TYPES.sint32:
                                r.writeVarint32ZigZag(t);
                                break;
                            case l.TYPES.fixed32:
                                r.writeUint32(t);
                                break;
                            case l.TYPES.sfixed32:
                                r.writeInt32(t);
                                break;
                            case l.TYPES.int64:
                            case l.TYPES.uint64:
                                r.writeVarint64(t);
                                break;
                            case l.TYPES.sint64:
                                r.writeVarint64ZigZag(t);
                                break;
                            case l.TYPES.fixed64:
                                r.writeUint64(t);
                                break;
                            case l.TYPES.sfixed64:
                                r.writeInt64(t);
                                break;
                            case l.TYPES.bool:
                                "string" == typeof t ? r.writeVarint32("false" === t.toLowerCase() ? 0 : !!t) : r.writeVarint32(t ? 1 : 0);
                                break;
                            case l.TYPES.enum:
                                r.writeVarint32(t);
                                break;
                            case l.TYPES.float:
                                r.writeFloat32(t);
                                break;
                            case l.TYPES.double:
                                r.writeFloat64(t);
                                break;
                            case l.TYPES.string:
                                r.writeVString(t);
                                break;
                            case l.TYPES.bytes:
                                if (t.remaining() < 0) throw Error("Illegal value for " + this.toString(!0) + ": " + t.remaining() + " bytes remaining");
                                e = t.offset, r.writeVarint32(t.remaining()), r.append(t), t.offset = e;
                                break;
                            case l.TYPES.message:
                                e = (new v).LE(), this.resolvedType.encode(t, e), r.writeVarint32(e.offset), r.append(e.flip());
                                break;
                            case l.TYPES.group:
                                this.resolvedType.encode(t, r), r.writeVarint32(e << 3 | l.WIRE_TYPES.ENDGROUP);
                                break;
                            default:
                                throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + t + " (unknown type)")
                        }
                        return r
                    }, t.decode = function(e, t, r) {
                        if (t != this.type.wireType) throw Error("Unexpected wire type for element");
                        switch (this.type) {
                            case l.TYPES.int32:
                                return 0 | e.readVarint32();
                            case l.TYPES.uint32:
                                return e.readVarint32() >>> 0;
                            case l.TYPES.sint32:
                                return 0 | e.readVarint32ZigZag();
                            case l.TYPES.fixed32:
                                return e.readUint32() >>> 0;
                            case l.TYPES.sfixed32:
                                return 0 | e.readInt32();
                            case l.TYPES.int64:
                                return e.readVarint64();
                            case l.TYPES.uint64:
                                return e.readVarint64().toUnsigned();
                            case l.TYPES.sint64:
                                return e.readVarint64ZigZag();
                            case l.TYPES.fixed64:
                                return e.readUint64();
                            case l.TYPES.sfixed64:
                                return e.readInt64();
                            case l.TYPES.bool:
                                return !!e.readVarint32();
                            case l.TYPES.enum:
                                return e.readVarint32();
                            case l.TYPES.float:
                                return e.readFloat();
                            case l.TYPES.double:
                                return e.readDouble();
                            case l.TYPES.string:
                                return e.readVString();
                            case l.TYPES.bytes:
                                if (r = e.readVarint32(), e.remaining() < r) throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + r + " required but got only " + e.remaining());
                                return (t = e.clone()).limit = t.offset + r, e.offset += r, t;
                            case l.TYPES.message:
                                return r = e.readVarint32(), this.resolvedType.decode(e, r);
                            case l.TYPES.group:
                                return this.resolvedType.decode(e, -1, r)
                        }
                        throw Error("[INTERNAL] Illegal decode type")
                    }, t.valueFromString = function(e) {
                        if (!this.isMapKey) throw Error("valueFromString() called on non-map-key element");
                        switch (this.type) {
                            case l.TYPES.int32:
                            case l.TYPES.sint32:
                            case l.TYPES.sfixed32:
                            case l.TYPES.uint32:
                            case l.TYPES.fixed32:
                                return this.verifyValue(parseInt(e));
                            case l.TYPES.int64:
                            case l.TYPES.sint64:
                            case l.TYPES.sfixed64:
                            case l.TYPES.uint64:
                            case l.TYPES.fixed64:
                                return this.verifyValue(e);
                            case l.TYPES.bool:
                                return "true" === e;
                            case l.TYPES.string:
                                return this.verifyValue(e);
                            case l.TYPES.bytes:
                                return v.fromBinary(e)
                        }
                    }, t.valueToString = function(e) {
                        if (!this.isMapKey) throw Error("valueToString() called on non-map-key element");
                        return this.type === l.TYPES.bytes ? e.toString("binary") : e.toString()
                    }, s.Element = f;
                    var c = function(e, t, r, i, n, o) {
                        a.call(this, e, t, r, i, o), this.className = "Message", this.extensions = void 0, this.clazz = null, this.isGroup = !!n, this._fieldsByName = this._fieldsById = this._fields = null
                    };
                    (t = c.prototype = Object.create(a.prototype)).build = function(e) {
                        if (this.clazz && !e) return this.clazz;
                        e = (function(u, s) {
                            function f(e, r, i, n) {
                                if (null === e || "object" !== (void 0 === e ? "undefined" : m(e))) {
                                    if (n && n instanceof u.Reflect.Enum)
                                        if (null !== (a = u.Reflect.Enum.getName(n.object, e))) return a;
                                    return e
                                }
                                if (v.isByteBuffer(e)) return r ? e.toBase64() : e.toBuffer();
                                if (u.Long.isLong(e)) return i ? e.toString() : u.Long.fromValue(e);
                                var o;
                                if (Array.isArray(e)) return o = [], e.forEach((function(e, t) {
                                    o[t] = f(e, r, i, n)
                                })), o;
                                if (o = {}, e instanceof u.Map) {
                                    for (var t = (a = e.entries()).next(); !t.done; t = a.next()) o[e.keyElem.valueToString(t.value[0])] = f(t.value[1], r, i, e.valueElem.resolvedType);
                                    return o
                                }
                                var s, a = e.$type;
                                t = void 0;
                                for (s in e) e.hasOwnProperty(s) && (a && (t = a.getChild(s)) ? o[s] = f(e[s], r, i, t.resolvedType) : o[s] = f(e[s], r, i));
                                return o
                            }
                            var a = s.getChildren(u.Reflect.Message.Field),
                                l = s.getChildren(u.Reflect.Message.OneOf),
                                i = function e(t, r) {
                                    u.Builder.Message.call(this);
                                    for (var i = 0, n = l.length; i < n; ++i) this[l[i].name] = null;
                                    for (i = 0, n = a.length; i < n; ++i) {
                                        var o = a[i];
                                        this[o.name] = o.repeated ? [] : o.map ? new u.Map(o) : null, !o.required && "proto3" !== s.syntax || null === o.defaultValue || (this[o.name] = o.defaultValue)
                                    }
                                    if (0 < arguments.length)
                                        if (1 !== arguments.length || null === t || "object" !== (void 0 === t ? "undefined" : m(t)) || !("function" != typeof t.encode || t instanceof e) || Array.isArray(t) || t instanceof u.Map || v.isByteBuffer(t) || t instanceof ArrayBuffer || u.Long && t instanceof u.Long)
                                            for (i = 0, n = arguments.length; i < n; ++i) void 0 !== (o = arguments[i]) && this.$set(a[i].name, o);
                                        else this.$set(t)
                                },
                                o = i.prototype = Object.create(u.Builder.Message.prototype);
                            o.add = function(e, t, r) {
                                var i = s._fieldsByName[e];
                                if (!r) {
                                    if (!i) throw Error(this + "#" + e + " is undefined");
                                    if (!(i instanceof u.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + i.toString(!0));
                                    if (!i.repeated) throw Error(this + "#" + e + " is not a repeated field");
                                    t = i.verifyValue(t, !0)
                                }
                                return null === this[e] && (this[e] = []), this[e].push(t), this
                            }, o.$add = o.add, o.set = function(e, t, r) {
                                if (e && "object" === (void 0 === e ? "undefined" : m(e))) {
                                    for (var i in r = t, e) e.hasOwnProperty(i) && void 0 !== (t = e[i]) && void 0 === s._oneofsByName[i] && this.$set(i, t, r);
                                    return this
                                }
                                if (i = s._fieldsByName[e], r) this[e] = t;
                                else {
                                    if (!i) throw Error(this + "#" + e + " is not a field: undefined");
                                    if (!(i instanceof u.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + i.toString(!0));
                                    this[i.name] = t = i.verifyValue(t)
                                }
                                return i && i.oneof && (r = this[i.oneof.name], null !== t ? (null !== r && r !== i.name && (this[r] = null), this[i.oneof.name] = i.name) : r === e && (this[i.oneof.name] = null)), this
                            }, o.$set = o.set, o.get = function(e, t) {
                                if (t) return this[e];
                                var r = s._fieldsByName[e];
                                if (!(r && r instanceof u.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: undefined");
                                if (!(r instanceof u.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + r.toString(!0));
                                return this[r.name]
                            }, o.$get = o.get;
                            for (var e = 0; e < a.length; e++) {
                                var t = a[e];
                                t instanceof u.Reflect.Message.ExtensionField || s.builder.options.populateAccessors && (function(r) {
                                    var e = (e = r.originalName.replace(/(_[a-zA-Z])/g, (function(e) {
                                            return e.toUpperCase().replace("_", "")
                                        }))).substring(0, 1).toUpperCase() + e.substring(1),
                                        t = r.originalName.replace(/([A-Z])/g, (function(e) {
                                            return "_" + e
                                        })),
                                        i = function(e, t) {
                                            return this[r.name] = t ? e : r.verifyValue(e), this
                                        },
                                        n = function() {
                                            return this[r.name]
                                        };
                                    null === s.getChild("set" + e) && (o["set" + e] = i), null === s.getChild("set_" + t) && (o["set_" + t] = i), null === s.getChild("get" + e) && (o["get" + e] = n), null === s.getChild("get_" + t) && (o["get_" + t] = n)
                                })(t)
                            }
                            return o.encode = function(t, e) {
                                "boolean" == typeof t && (e = t, t = void 0);
                                var r = !1;
                                t || (t = new v, r = !0);
                                var i = t.littleEndian;
                                try {
                                    return s.encode(this, t.LE(), e), (r ? t.flip() : t).LE(i)
                                } catch (e) {
                                    throw t.LE(i), e
                                }
                            }, i.encode = function(e, t, r) {
                                return new i(e).encode(t, r)
                            }, o.calculate = function() {
                                return s.calculate(this)
                            }, o.encodeDelimited = function(e, t) {
                                var r = !1;
                                e || (e = new v, r = !0);
                                var i = (new v).LE();
                                return s.encode(this, i, t).flip(), e.writeVarint32(i.remaining()), e.append(i), r ? e.flip() : e
                            }, o.encodeAB = function() {
                                try {
                                    return this.encode().toArrayBuffer()
                                } catch (e) {
                                    throw e.encoded && (e.encoded = e.encoded.toArrayBuffer()), e
                                }
                            }, o.toArrayBuffer = o.encodeAB, o.encodeNB = function() {
                                try {
                                    return this.encode().toBuffer()
                                } catch (e) {
                                    throw e.encoded && (e.encoded = e.encoded.toBuffer()), e
                                }
                            }, o.toBuffer = o.encodeNB, o.encode64 = function() {
                                try {
                                    return this.encode().toBase64()
                                } catch (e) {
                                    throw e.encoded && (e.encoded = e.encoded.toBase64()), e
                                }
                            }, o.toBase64 = o.encode64, o.encodeHex = function() {
                                try {
                                    return this.encode().toHex()
                                } catch (e) {
                                    throw e.encoded && (e.encoded = e.encoded.toHex()), e
                                }
                            }, o.toHex = o.encodeHex, o.toRaw = function(e, t) {
                                return f(this, !!e, !!t, this.$type)
                            }, o.encodeJSON = function() {
                                return JSON.stringify(f(this, !0, !0, this.$type))
                            }, i.decode = function(t, e, r) {
                                "string" == typeof e && (r = e, e = -1), "string" == typeof t ? t = v.wrap(t, r || "base64") : v.isByteBuffer(t) || (t = v.wrap(t)), r = t.littleEndian;
                                try {
                                    var i = s.decode(t.LE(), e);
                                    return t.LE(r), i
                                } catch (e) {
                                    throw t.LE(r), e
                                }
                            }, i.decodeDelimited = function(t, e) {
                                if ("string" == typeof t ? t = v.wrap(t, e || "base64") : v.isByteBuffer(t) || (t = v.wrap(t)), t.remaining() < 1) return null;
                                var r = t.offset,
                                    i = t.readVarint32();
                                if (t.remaining() < i) return t.offset = r, null;
                                try {
                                    var n = s.decode(t.slice(t.offset, t.offset + i).LE());
                                    return t.offset += i, n
                                } catch (e) {
                                    throw t.offset += i, e
                                }
                            }, i.decode64 = function(e) {
                                return i.decode(e, "base64")
                            }, i.decodeHex = function(e) {
                                return i.decode(e, "hex")
                            }, i.decodeJSON = function(e) {
                                return new i(JSON.parse(e))
                            }, o.toString = function() {
                                return s.toString()
                            }, Object.defineProperty && (Object.defineProperty(i, "$options", {
                                value: s.buildOpt()
                            }), Object.defineProperty(o, "$options", {
                                value: i.$options
                            }), Object.defineProperty(i, "$type", {
                                value: s
                            }), Object.defineProperty(o, "$type", {
                                value: s
                            })), i
                        })(l, this), this._fields = [], this._fieldsById = {}, this._fieldsByName = {}, this._oneofsByName = {};
                        for (var t, r = 0, i = this.children.length; r < i; r++)
                            if ((t = this.children[r]) instanceof n || t instanceof c || t instanceof p) {
                                if (e.hasOwnProperty(t.name)) throw Error("Illegal reflect child of " + this.toString(!0) + ": " + t.toString(!0) + " cannot override static property '" + t.name + "'");
                                e[t.name] = t.build()
                            } else if (t instanceof c.Field) t.build(), this._fields.push(t), this._fieldsById[t.id] = t, this._fieldsByName[t.name] = t;
                        else if (t instanceof c.OneOf) this._oneofsByName[t.name] = t;
                        else if (!(t instanceof c.OneOf || t instanceof g)) throw Error("Illegal reflect child of " + this.toString(!0) + ": " + this.children[r].toString(!0));
                        return this.clazz = e
                    }, t.encode = function(e, t, r) {
                        for (var i, n, o = null, s = 0, a = this._fields.length; s < a; ++s) n = e[(i = this._fields[s]).name], i.required && null === n ? null === o && (o = i) : i.encode(r ? n : i.verifyValue(n), t, e);
                        if (null !== o) throw (e = Error("Missing at least one required field for " + this.toString(!0) + ": " + o)).encoded = t, e;
                        return t
                    }, t.calculate = function(e) {
                        for (var t, r, i = 0, n = 0, o = this._fields.length; n < o; ++n) {
                            if (r = e[(t = this._fields[n]).name], t.required && null === r) throw Error("Missing at least one required field for " + this.toString(!0) + ": " + t);
                            i += t.calculate(r, e)
                        }
                        return i
                    }, t.decode = function(e, t, r) {
                        "number" != typeof t && (t = -1);
                        for (var i, n, o, s = e.offset, a = new this.clazz; e.offset < s + t || -1 === t && 0 < e.remaining();) {
                            if (o = (i = e.readVarint32()) >>> 3, (n = 7 & i) === l.WIRE_TYPES.ENDGROUP) {
                                if (o !== r) throw Error("Illegal group end indicator for " + this.toString(!0) + ": " + o + " (" + (r ? r + " expected" : "not a group") + ")");
                                break
                            }
                            if (i = this._fieldsById[o]) i.repeated && !i.options.packed ? a[i.name].push(i.decode(n, e)) : i.map ? (n = i.decode(n, e), a[i.name].set(n[0], n[1])) : (a[i.name] = i.decode(n, e), i.oneof && (null !== (n = a[i.oneof.name]) && n !== i.name && (a[n] = null), a[i.oneof.name] = i.name));
                            else switch (n) {
                                case l.WIRE_TYPES.VARINT:
                                    e.readVarint32();
                                    break;
                                case l.WIRE_TYPES.BITS32:
                                    e.offset += 4;
                                    break;
                                case l.WIRE_TYPES.BITS64:
                                    e.offset += 8;
                                    break;
                                case l.WIRE_TYPES.LDELIM:
                                    i = e.readVarint32(), e.offset += i;
                                    break;
                                case l.WIRE_TYPES.STARTGROUP:
                                    for (; u(o, e););
                                    break;
                                default:
                                    throw Error("Illegal wire type for unknown field " + o + " in " + this.toString(!0) + "#decode: " + n)
                            }
                        }
                        for (e = 0, t = this._fields.length; e < t; ++e)
                            if (null === a[(i = this._fields[e]).name])
                                if ("proto3" === this.syntax) a[i.name] = i.defaultValue;
                                else {
                                    if (i.required) throw (e = Error("Missing at least one required field for " + this.toString(!0) + ": " + i.name)).decoded = a, e;
                                    l.populateDefaults && null !== i.defaultValue && (a[i.name] = i.defaultValue)
                                } return a
                    }, s.Message = c;
                    var h = function(e, t, r, i, n, o, s, a, u, f) {
                        d.call(this, e, t, o), this.className = "Message.Field", this.required = "required" === r, this.repeated = "repeated" === r, this.map = "map" === r, this.keyType = i || null, this.type = n, this.resolvedType = null, this.id = s, this.options = a || {}, this.defaultValue = null, this.oneof = u || null, this.syntax = f || "proto2", this.originalName = this.name, this.keyElement = this.element = null, !this.builder.options.convertFieldsToCamelCase || this instanceof c.ExtensionField || (this.name = l.Util.toCamelCase(this.name))
                    };
                    (t = h.prototype = Object.create(d.prototype)).build = function() {
                        this.element = new f(this.type, this.resolvedType, !1, this.syntax, this.name), this.map && (this.keyElement = new f(this.keyType, void 0, !0, this.syntax, this.name)), "proto3" !== this.syntax || this.repeated || this.map ? void 0 !== this.options.default && (this.defaultValue = this.verifyValue(this.options.default)) : this.defaultValue = f.defaultFieldValue(this.type)
                    }, t.verifyValue = function(e, t) {
                        function r(e, t) {
                            throw Error("Illegal value for " + n.toString(!0) + " of type " + n.type.name + ": " + e + " (" + t + ")")
                        }
                        t = t || !1;
                        var i, n = this;
                        if (null === e) return this.required && r(void 0 === e ? "undefined" : m(e), "required"), "proto3" === this.syntax && this.type !== l.TYPES.message && r(void 0 === e ? "undefined" : m(e), "proto3 field without field presence cannot be null"), null;
                        if (!this.repeated || t) return this.map && !t ? e instanceof l.Map ? e : (e instanceof Object || r(void 0 === e ? "undefined" : m(e), "expected ProtoBuf.Map or raw object for map field"), new l.Map(this, e)) : (!this.repeated && Array.isArray(e) && r(void 0 === e ? "undefined" : m(e), "no array expected"), this.element.verifyValue(e));
                        Array.isArray(e) || (e = [e]);
                        var o = [];
                        for (i = 0; i < e.length; i++) o.push(this.element.verifyValue(e[i]));
                        return o
                    }, t.hasWirePresence = function(e, t) {
                        if ("proto3" !== this.syntax) return null !== e;
                        if (this.oneof && t[this.oneof.name] === this.name) return !0;
                        switch (this.type) {
                            case l.TYPES.int32:
                            case l.TYPES.sint32:
                            case l.TYPES.sfixed32:
                            case l.TYPES.uint32:
                            case l.TYPES.fixed32:
                                return 0 !== e;
                            case l.TYPES.int64:
                            case l.TYPES.sint64:
                            case l.TYPES.sfixed64:
                            case l.TYPES.uint64:
                            case l.TYPES.fixed64:
                                return 0 !== e.low || 0 !== e.high;
                            case l.TYPES.bool:
                                return e;
                            case l.TYPES.float:
                            case l.TYPES.double:
                                return 0 !== e;
                            case l.TYPES.string:
                                return 0 < e.length;
                            case l.TYPES.bytes:
                                return 0 < e.remaining();
                            case l.TYPES.enum:
                                return 0 !== e;
                            case l.TYPES.message:
                                return null !== e;
                            default:
                                return !0
                        }
                    }, t.encode = function(t, i, e) {
                        if (null === this.type || "object" !== m(this.type)) throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
                        if (null === t || this.repeated && 0 == t.length) return i;
                        try {
                            var r;
                            if (this.repeated)
                                if (this.options.packed && 0 <= l.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType)) {
                                    i.writeVarint32(this.id << 3 | l.WIRE_TYPES.LDELIM), i.ensureCapacity(i.offset += 1);
                                    var n = i.offset;
                                    for (r = 0; r < t.length; r++) this.element.encodeValue(this.id, t[r], i);
                                    var o = i.offset - n,
                                        s = v.calculateVarint32(o);
                                    if (1 < s) {
                                        var a = i.slice(n, i.offset);
                                        n = n + (s - 1);
                                        i.offset = n, i.append(a)
                                    }
                                    i.writeVarint32(o, n - s)
                                } else
                                    for (r = 0; r < t.length; r++) i.writeVarint32(this.id << 3 | this.type.wireType), this.element.encodeValue(this.id, t[r], i);
                            else this.map ? t.forEach((function(e, t, r) {
                                r = v.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, t) + v.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, e), i.writeVarint32(this.id << 3 | l.WIRE_TYPES.LDELIM), i.writeVarint32(r), i.writeVarint32(8 | this.keyType.wireType), this.keyElement.encodeValue(1, t, i), i.writeVarint32(16 | this.type.wireType), this.element.encodeValue(2, e, i)
                            }), this) : this.hasWirePresence(t, e) && (i.writeVarint32(this.id << 3 | this.type.wireType), this.element.encodeValue(this.id, t, i))
                        } catch (e) {
                            throw Error("Illegal value for " + this.toString(!0) + ": " + t + " (" + e + ")")
                        }
                        return i
                    }, t.calculate = function(t, e) {
                        if (t = this.verifyValue(t), null === this.type || "object" !== m(this.type)) throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
                        if (null === t || this.repeated && 0 == t.length) return 0;
                        var i = 0;
                        try {
                            var r, n;
                            if (this.repeated)
                                if (this.options.packed && 0 <= l.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType)) {
                                    for (i += v.calculateVarint32(this.id << 3 | l.WIRE_TYPES.LDELIM), r = n = 0; r < t.length; r++) n += this.element.calculateLength(this.id, t[r]);
                                    i += v.calculateVarint32(n), i += n
                                } else
                                    for (r = 0; r < t.length; r++) i += v.calculateVarint32(this.id << 3 | this.type.wireType), i += this.element.calculateLength(this.id, t[r]);
                            else this.map ? t.forEach((function(e, t, r) {
                                e = v.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, t) + v.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, e), i += v.calculateVarint32(this.id << 3 | l.WIRE_TYPES.LDELIM), i += v.calculateVarint32(e), i += e
                            }), this) : this.hasWirePresence(t, e) && (i += v.calculateVarint32(this.id << 3 | this.type.wireType), i += this.element.calculateLength(this.id, t))
                        } catch (e) {
                            throw Error("Illegal value for " + this.toString(!0) + ": " + t + " (" + e + ")")
                        }
                        return i
                    }, t.decode = function(e, t, r) {
                        if (!(!this.map && e == this.type.wireType || !r && this.repeated && this.options.packed && e == l.WIRE_TYPES.LDELIM || this.map && e == l.WIRE_TYPES.LDELIM)) throw Error("Illegal wire type for field " + this.toString(!0) + ": " + e + " (" + this.type.wireType + " expected)");
                        if (e == l.WIRE_TYPES.LDELIM && this.repeated && this.options.packed && 0 <= l.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) && !r) {
                            for (e = t.readVarint32(), e = t.offset + e, r = []; t.offset < e;) r.push(this.decode(this.type.wireType, t, !0));
                            return r
                        }
                        if (this.map) {
                            var i = f.defaultFieldValue(this.keyType);
                            if (r = f.defaultFieldValue(this.type), e = t.readVarint32(), t.remaining() < e) throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + e + " required but got only " + t.remaining());
                            var n = t.clone();
                            for (n.limit = n.offset + e, t.offset += e; 0 < n.remaining();)
                                if (e = 7 & (t = n.readVarint32()), 1 === (t >>>= 3)) i = this.keyElement.decode(n, e, t);
                                else {
                                    if (2 !== t) throw Error("Unexpected tag in map field key/value submessage");
                                    r = this.element.decode(n, e, t)
                                } return [i, r]
                        }
                        return this.element.decode(t, e, this.id)
                    }, s.Message.Field = h, (t = function(e, t, r, i, n, o, s) {
                        h.call(this, e, t, r, null, i, n, o, s)
                    }).prototype = Object.create(h.prototype), s.Message.ExtensionField = t, s.Message.OneOf = function(e, t, r) {
                        d.call(this, e, t, r), this.fields = []
                    };
                    var n = function(e, t, r, i, n) {
                        a.call(this, e, t, r, i, n), this.className = "Enum", this.object = null
                    };
                    n.getName = function(e, t) {
                        for (var r, i = Object.keys(e), n = 0; n < i.length; ++n)
                            if (e[r = i[n]] === t) return r;
                        return null
                    }, (n.prototype = Object.create(a.prototype)).build = function(e) {
                        if (this.object && !e) return this.object;
                        e = new l.Builder.Enum;
                        for (var t = this.getChildren(n.Value), r = 0, i = t.length; r < i; ++r) e[t[r].name] = t[r].id;
                        return Object.defineProperty && Object.defineProperty(e, "$options", {
                            value: this.buildOpt(),
                            enumerable: !1
                        }), this.object = e
                    }, s.Enum = n, (t = function(e, t, r, i) {
                        d.call(this, e, t, r), this.className = "Enum.Value", this.id = i
                    }).prototype = Object.create(d.prototype), s.Enum.Value = t;
                    var g = function(e, t, r, i) {
                        d.call(this, e, t, r), this.field = i
                    };
                    g.prototype = Object.create(d.prototype), s.Extension = g;
                    var p = function(e, t, r, i) {
                        a.call(this, e, t, r, i), this.className = "Service", this.clazz = null
                    };
                    (p.prototype = Object.create(a.prototype)).build = function(e) {
                        return this.clazz && !e ? this.clazz : this.clazz = (function(t, n) {
                            for (var o = function(e) {
                                    t.Builder.Service.call(this), this.rpcImpl = e || function(e, t, r) {
                                        setTimeout(r.bind(this, Error("Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services")), 0)
                                    }
                                }, e = o.prototype = Object.create(t.Builder.Service.prototype), r = n.getChildren(t.Reflect.Service.RPCMethod), i = 0; i < r.length; i++) !(function(i) {
                                e[i.name] = function(e, r) {
                                    try {
                                        try {
                                            e = i.resolvedRequestType.clazz.decode(v.wrap(e))
                                        } catch (e) {
                                            if (!(e instanceof TypeError)) throw e
                                        }
                                        if (null === e || "object" !== (void 0 === e ? "undefined" : m(e))) throw Error("Illegal arguments");
                                        e instanceof i.resolvedRequestType.clazz || (e = new i.resolvedRequestType.clazz(e)), this.rpcImpl(i.fqn(), e, (function(e, t) {
                                            if (e) r(e);
                                            else {
                                                null === t && (t = "");
                                                try {
                                                    t = i.resolvedResponseType.clazz.decode(t)
                                                } catch (e) {}
                                                t && t instanceof i.resolvedResponseType.clazz ? r(null, t) : r(Error("Illegal response type received in service method " + n.name + "#" + i.name))
                                            }
                                        }))
                                    } catch (e) {
                                        setTimeout(r.bind(this, e), 0)
                                    }
                                }, o[i.name] = function(e, t, r) {
                                    new o(e)[i.name](t, r)
                                }, Object.defineProperty && (Object.defineProperty(o[i.name], "$options", {
                                    value: i.buildOpt()
                                }), Object.defineProperty(e[i.name], "$options", {
                                    value: o[i.name].$options
                                }))
                            })(r[i]);
                            return Object.defineProperty && (Object.defineProperty(o, "$options", {
                                value: n.buildOpt()
                            }), Object.defineProperty(e, "$options", {
                                value: o.$options
                            }), Object.defineProperty(o, "$type", {
                                value: n
                            }), Object.defineProperty(e, "$type", {
                                value: n
                            })), o
                        })(l, this)
                    }, s.Service = p;
                    var y = function(e, t, r, i) {
                        d.call(this, e, t, r), this.className = "Service.Method", this.options = i || {}
                    };
                    return (y.prototype = Object.create(d.prototype)).buildOpt = e.buildOpt, s.Service.Method = y, (e = function(e, t, r, i, n, o, s, a) {
                        y.call(this, e, t, r, a), this.className = "Service.RPCMethod", this.requestName = i, this.responseName = n, this.requestStream = o, this.responseStream = s, this.resolvedResponseType = this.resolvedRequestType = null
                    }).prototype = Object.create(y.prototype), s.Service.RPCMethod = e, s
                })(o), o.Builder = (t = (f = o).Lang, s = o.Reflect, r = (a = function(e) {
                    this.ptr = this.ns = new s.Namespace(this, null, ""), this.resolved = !1, this.result = null, this.files = {}, this.importRoot = null, this.options = e || {}
                }).prototype, a.isMessage = function(e) {
                    return "string" == typeof e.name && void 0 === e.values && void 0 === e.rpc
                }, a.isMessageField = function(e) {
                    return "string" == typeof e.rule && "string" == typeof e.name && "string" == typeof e.type && void 0 !== e.id
                }, a.isEnum = function(e) {
                    return !("string" != typeof e.name || void 0 === e.values || !Array.isArray(e.values) || 0 === e.values.length)
                }, a.isService = function(e) {
                    return !("string" != typeof e.name || "object" !== m(e.rpc) || !e.rpc)
                }, a.isExtend = function(e) {
                    return "string" == typeof e.ref
                }, r.reset = function() {
                    return this.ptr = this.ns, this
                }, r.define = function(e) {
                    if ("string" != typeof e || !t.TYPEREF.test(e)) throw Error("illegal namespace: " + e);
                    return e.split(".").forEach((function(e) {
                        var t = this.ptr.getChild(e);
                        null === t && this.ptr.addChild(t = new s.Namespace(this, this.ptr, e)), this.ptr = t
                    }), this), this
                }, r.create = function(e) {
                    if (!e) return this;
                    if (Array.isArray(e)) {
                        if (0 === e.length) return this;
                        e = e.slice()
                    } else e = [e];
                    for (var t = [e]; 0 < t.length;) {
                        if (e = t.pop(), !Array.isArray(e)) throw Error("not a valid namespace: " + JSON.stringify(e));
                        for (; 0 < e.length;) {
                            var r = e.shift();
                            if (a.isMessage(r)) {
                                var n = new s.Message(this, this.ptr, r.name, r.options, r.isGroup, r.syntax),
                                    i = {};
                                r.oneofs && Object.keys(r.oneofs).forEach((function(e) {
                                    n.addChild(i[e] = new s.Message.OneOf(this, n, e))
                                }), this), r.fields && r.fields.forEach((function(e) {
                                    if (null !== n.getChild(0 | e.id)) throw Error("duplicate or invalid field id in " + n.name + ": " + e.id);
                                    if (e.options && "object" !== m(e.options)) throw Error("illegal field options in " + n.name + "#" + e.name);
                                    var t = null;
                                    if ("string" == typeof e.oneof && !(t = i[e.oneof])) throw Error("illegal oneof in " + n.name + "#" + e.name + ": " + e.oneof);
                                    e = new s.Message.Field(this, n, e.rule, e.keytype, e.type, e.name, e.id, e.options, t, r.syntax), t && t.fields.push(e), n.addChild(e)
                                }), this);
                                var o = [];
                                if (r.enums && r.enums.forEach((function(e) {
                                        o.push(e)
                                    })), r.messages && r.messages.forEach((function(e) {
                                        o.push(e)
                                    })), r.services && r.services.forEach((function(e) {
                                        o.push(e)
                                    })), r.extensions && (n.extensions = "number" == typeof r.extensions[0] ? [r.extensions] : r.extensions), this.ptr.addChild(n), 0 < o.length) {
                                    t.push(e), e = o, o = null, this.ptr = n, n = null;
                                    continue
                                }
                                o = null
                            } else if (a.isEnum(r)) n = new s.Enum(this, this.ptr, r.name, r.options, r.syntax), r.values.forEach((function(e) {
                                n.addChild(new s.Enum.Value(this, n, e.name, e.id))
                            }), this), this.ptr.addChild(n);
                            else if (a.isService(r)) n = new s.Service(this, this.ptr, r.name, r.options), Object.keys(r.rpc).forEach((function(e) {
                                var t = r.rpc[e];
                                n.addChild(new s.Service.RPCMethod(this, n, e, t.request, t.response, !!t.request_stream, !!t.response_stream, t.options))
                            }), this), this.ptr.addChild(n);
                            else {
                                if (!a.isExtend(r)) throw Error("not a valid definition: " + JSON.stringify(r));
                                if (n = this.ptr.resolve(r.ref, !0)) r.fields.forEach((function(t) {
                                    if (null !== n.getChild(0 | t.id)) throw Error("duplicate extended field id in " + n.name + ": " + t.id);
                                    if (n.extensions) {
                                        var r = !1;
                                        if (n.extensions.forEach((function(e) {
                                                t.id >= e[0] && t.id <= e[1] && (r = !0)
                                            })), !r) throw Error("illegal extended field id in " + n.name + ": " + t.id + " (not within valid ranges)")
                                    }
                                    var e = t.name;
                                    this.options.convertFieldsToCamelCase && (e = f.Util.toCamelCase(e)), e = new s.Message.ExtensionField(this, n, t.rule, t.type, this.ptr.fqn() + "." + e, t.id, t.options);
                                    var i = new s.Extension(this, this.ptr, t.name, e);
                                    e.extension = i, this.ptr.addChild(i), n.addChild(e)
                                }), this);
                                else if (!/\.?google\.protobuf\./.test(r.ref)) throw Error("extended message " + r.ref + " is not defined")
                            }
                            n = r = null
                        }
                        e = null, this.ptr = this.ptr.parent
                    }
                    return this.resolved = !1, this.result = null, this
                }, r.import = function(t, e) {
                    var r = "/";
                    if ("string" == typeof e) {
                        if (f.Util.IS_NODE && (e = l(23).resolve(e)), !0 === this.files[e]) return this.reset();
                        this.files[e] = !0
                    } else if ("object" === (void 0 === e ? "undefined" : m(e))) {
                        var i = e.root;
                        if (f.Util.IS_NODE && (i = l(23).resolve(i)), (0 <= i.indexOf("\\") || 0 <= e.file.indexOf("\\")) && (r = "\\"), i = f.Util.IS_NODE ? l(23).join(i, e.file) : i + r + e.file, !0 === this.files[i]) return this.reset();
                        this.files[i] = !0
                    }
                    if (t.imports && 0 < t.imports.length) {
                        var n = !1;
                        "object" === (void 0 === e ? "undefined" : m(e)) ? (this.importRoot = e.root, n = !0, i = this.importRoot, e = e.file, (0 <= i.indexOf("\\") || 0 <= e.indexOf("\\")) && (r = "\\")) : "string" == typeof e ? this.importRoot ? i = this.importRoot : 0 <= e.indexOf("/") ? "" === (i = e.replace(/\/[^\/]*$/, "")) && (i = "/") : 0 <= e.indexOf("\\") ? (i = e.replace(/\\[^\\]*$/, ""), r = "\\") : i = "." : i = null;
                        for (var o = 0; o < t.imports.length; o++)
                            if ("string" == typeof t.imports[o]) {
                                if (!i) throw Error("cannot determine import root");
                                var s = t.imports[o];
                                if ("google/protobuf/descriptor.proto" !== s && (s = f.Util.IS_NODE ? l(23).join(i, s) : i + r + s, !0 !== this.files[s])) {
                                    /\.proto$/i.test(s) && !f.DotProto && (s = s.replace(/\.proto$/, ".json"));
                                    var a = f.Util.fetch(s);
                                    if (null === a) throw Error("failed to import '" + s + "' in '" + e + "': file not found");
                                    /\.json$/i.test(s) ? this.import(JSON.parse(a + ""), s) : this.import(f.DotProto.Parser.parse(a), s)
                                }
                            } else e ? /\.(\w+)$/.test(e) ? this.import(t.imports[o], e.replace(/^(.+)\.(\w+)$/, (function(e, t, r) {
                                return t + "_import" + o + "." + r
                            }))) : this.import(t.imports[o], e + "_import" + o) : this.import(t.imports[o]);
                        n && (this.importRoot = null)
                    }
                    t.package && this.define(t.package), t.syntax && (function t(r) {
                        r.messages && r.messages.forEach((function(e) {
                            e.syntax = r.syntax, t(e)
                        })), r.enums && r.enums.forEach((function(e) {
                            e.syntax = r.syntax
                        }))
                    })(t);
                    var u = this.ptr;
                    return t.options && Object.keys(t.options).forEach((function(e) {
                        u.options[e] = t.options[e]
                    })), t.messages && (this.create(t.messages), this.ptr = u), t.enums && (this.create(t.enums), this.ptr = u), t.services && (this.create(t.services), this.ptr = u), t.extends && this.create(t.extends), this.reset()
                }, r.resolveAll = function() {
                    var e;
                    if (null == this.ptr || "object" === m(this.ptr.type)) return this;
                    if (this.ptr instanceof s.Namespace) this.ptr.children.forEach((function(e) {
                        this.ptr = e, this.resolveAll()
                    }), this);
                    else if (this.ptr instanceof s.Message.Field) {
                        if (t.TYPE.test(this.ptr.type)) this.ptr.type = f.TYPES[this.ptr.type];
                        else {
                            if (!t.TYPEREF.test(this.ptr.type)) throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                            if (!(e = (this.ptr instanceof s.Message.ExtensionField ? this.ptr.extension.parent : this.ptr.parent).resolve(this.ptr.type, !0))) throw Error("unresolvable type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                            if ((this.ptr.resolvedType = e) instanceof s.Enum) {
                                if (this.ptr.type = f.TYPES.enum, "proto3" === this.ptr.syntax && "proto3" !== e.syntax) throw Error("proto3 message cannot reference proto2 enum")
                            } else {
                                if (!(e instanceof s.Message)) throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                                this.ptr.type = e.isGroup ? f.TYPES.group : f.TYPES.message
                            }
                        }
                        if (this.ptr.map) {
                            if (!t.TYPE.test(this.ptr.keyType)) throw Error("illegal key type for map field in " + this.ptr.toString(!0) + ": " + this.ptr.keyType);
                            this.ptr.keyType = f.TYPES[this.ptr.keyType]
                        }
                        "proto3" === this.ptr.syntax && this.ptr.repeated && void 0 === this.ptr.options.packed && -1 !== f.PACKABLE_WIRE_TYPES.indexOf(this.ptr.type.wireType) && (this.ptr.options.packed = !0)
                    } else if (this.ptr instanceof f.Reflect.Service.Method) {
                        if (!(this.ptr instanceof f.Reflect.Service.RPCMethod)) throw Error("illegal service type in " + this.ptr.toString(!0));
                        if (!((e = this.ptr.parent.resolve(this.ptr.requestName, !0)) && e instanceof f.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.requestName);
                        if (this.ptr.resolvedRequestType = e, !((e = this.ptr.parent.resolve(this.ptr.responseName, !0)) && e instanceof f.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.responseName);
                        this.ptr.resolvedResponseType = e
                    } else if (!(this.ptr instanceof f.Reflect.Message.OneOf || this.ptr instanceof f.Reflect.Extension || this.ptr instanceof f.Reflect.Enum.Value)) throw Error("illegal object in namespace: " + m(this.ptr) + ": " + this.ptr);
                    return this.reset()
                }, r.build = function(e) {
                    if (this.reset(), this.resolved || (this.resolveAll(), this.resolved = !0, this.result = null), null === this.result && (this.result = this.ns.build()), !e) return this.result;
                    e = "string" == typeof e ? e.split(".") : e;
                    for (var t = this.result, r = 0; r < e.length; r++) {
                        if (!t[e[r]]) {
                            t = null;
                            break
                        }
                        t = t[e[r]]
                    }
                    return t
                }, r.lookup = function(e, t) {
                    return e ? this.ns.resolve(e, t) : this.ns
                }, r.toString = function() {
                    return "Builder"
                }, a.Message = function() {}, a.Enum = function() {}, a.Service = function() {}, a), o.Map = (function(e, s) {
                    function n(e) {
                        var t = 0;
                        return {
                            next: function() {
                                return t < e.length ? {
                                    done: !1,
                                    value: e[t++]
                                } : {
                                    done: !0
                                }
                            }
                        }
                    }
                    var t = function(e, t) {
                            if (!e.map) throw Error("field is not a map");
                            if (this.field = e, this.keyElem = new s.Element(e.keyType, null, !0, e.syntax), this.valueElem = new s.Element(e.type, e.resolvedType, !1, e.syntax), this.map = {}, Object.defineProperty(this, "size", {
                                    get: function() {
                                        return Object.keys(this.map).length
                                    }
                                }), t)
                                for (var r = Object.keys(t), i = 0; i < r.length; i++) {
                                    var n = this.keyElem.valueFromString(r[i]),
                                        o = this.valueElem.verifyValue(t[r[i]]);
                                    this.map[this.keyElem.valueToString(n)] = {
                                        key: n,
                                        value: o
                                    }
                                }
                        },
                        r = t.prototype;
                    return r.clear = function() {
                        this.map = {}
                    }, r.delete = function(e) {
                        var t = (e = this.keyElem.valueToString(this.keyElem.verifyValue(e))) in this.map;
                        return delete this.map[e], t
                    }, r.entries = function() {
                        for (var e, t = [], r = Object.keys(this.map), i = 0; i < r.length; i++) t.push([(e = this.map[r[i]]).key, e.value]);
                        return n(t)
                    }, r.keys = function() {
                        for (var e = [], t = Object.keys(this.map), r = 0; r < t.length; r++) e.push(this.map[t[r]].key);
                        return n(e)
                    }, r.values = function() {
                        for (var e = [], t = Object.keys(this.map), r = 0; r < t.length; r++) e.push(this.map[t[r]].value);
                        return n(e)
                    }, r.forEach = function(e, t) {
                        for (var r, i = Object.keys(this.map), n = 0; n < i.length; n++) e.call(t, (r = this.map[i[n]]).value, r.key, this)
                    }, r.set = function(e, t) {
                        var r = this.keyElem.verifyValue(e),
                            i = this.valueElem.verifyValue(t);
                        return this.map[this.keyElem.valueToString(r)] = {
                            key: r,
                            value: i
                        }, this
                    }, r.get = function(e) {
                        if ((e = this.keyElem.valueToString(this.keyElem.verifyValue(e))) in this.map) return this.map[e].value
                    }, r.has = function(e) {
                        return this.keyElem.valueToString(this.keyElem.verifyValue(e)) in this.map
                    }, t
                })(0, o.Reflect), o.newBuilder = function(e) {
                    return void 0 === (e = e || {}).convertFieldsToCamelCase && (e.convertFieldsToCamelCase = o.convertFieldsToCamelCase), void 0 === e.populateAccessors && (e.populateAccessors = o.populateAccessors), new o.Builder(e)
                }, o.loadJson = function(e, t, r) {
                    return ("string" == typeof t || t && "string" == typeof t.file && "string" == typeof t.root) && (r = t, t = null), t && "object" === (void 0 === t ? "undefined" : m(t)) || (t = o.newBuilder()), "string" == typeof e && (e = JSON.parse(e)), t.import(e, r), t.resolveAll(), t
                }, o.loadJsonFile = function(t, r, i) {
                    if (r && "object" === (void 0 === r ? "undefined" : m(r)) ? (i = r, r = null) : r && "function" == typeof r || (r = null), r) return o.Util.fetch("string" == typeof t ? t : t.root + "/" + t.file, (function(e) {
                        if (null === e) r(Error("Failed to fetch file"));
                        else try {
                            r(null, o.loadJson(JSON.parse(e), i, t))
                        } catch (e) {
                            r(e)
                        }
                    }));
                    var e = o.Util.fetch("object" === (void 0 === t ? "undefined" : m(t)) ? t.root + "/" + t.file : t);
                    return null === e ? null : o.loadJson(JSON.parse(e), i, t)
                }, o
            }, r = [l(613)], void 0 === (n = "function" == typeof(e = o) ? e.apply(u, r) : e) || (a.exports = n)
        }).call(u, l(22), l(612))
    },
    612: function(e, t) {
        var r, i, n = e.exports = {};

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function s() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(t) {
            if (r === setTimeout) return setTimeout(t, 0);
            if ((r === o || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0);
            try {
                return r(t, 0)
            } catch (e) {
                try {
                    return r.call(null, t, 0)
                } catch (e) {
                    return r.call(this, t, 0)
                }
            }
        }!(function() {
            try {
                r = "function" == typeof setTimeout ? setTimeout : o
            } catch (e) {
                r = o
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (e) {
                i = s
            }
        })();
        var u, f = [],
            l = !1,
            d = -1;

        function c() {
            l && u && (l = !1, u.length ? f = u.concat(f) : d = -1, f.length && h())
        }

        function h() {
            if (!l) {
                var e = a(c);
                l = !0;
                for (var t = f.length; t;) {
                    for (u = f, f = []; ++d < t;) u && u[d].run();
                    d = -1, t = f.length
                }
                u = null, l = !1, (function(t) {
                    if (i === clearTimeout) return clearTimeout(t);
                    if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t);
                    try {
                        i(t)
                    } catch (e) {
                        try {
                            return i.call(null, t)
                        } catch (e) {
                            return i.call(this, t)
                        }
                    }
                })(e)
            }
        }

        function g(e, t) {
            this.fun = e, this.array = t
        }

        function p() {}
        n.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (1 < arguments.length)
                for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            f.push(new g(e, t)), 1 !== f.length || l || a(h)
        }, g.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, n.listeners = function(e) {
            return []
        }, n.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, n.cwd = function() {
            return "/"
        }, n.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, n.umask = function() {
            return 0
        }
    },
    613: function(e, t, r) {
        "use strict";
        var i, n, o, s, h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        s = function(u) {
            var g = function e(t, r, i) {
                if (void 0 === t && (t = e.DEFAULT_CAPACITY), void 0 === r && (r = e.DEFAULT_ENDIAN), void 0 === i && (i = e.DEFAULT_NOASSERT), !i) {
                    if ((t |= 0) < 0) throw RangeError("Illegal capacity");
                    r = !!r, i = !!i
                }
                this.buffer = 0 === t ? o : new ArrayBuffer(t), this.view = 0 === t ? null : new Uint8Array(this.buffer), this.offset = 0, this.markedOffset = -1, this.limit = t, this.littleEndian = r, this.noAssert = i
            };
            g.VERSION = "5.0.1", g.LITTLE_ENDIAN = !0, g.BIG_ENDIAN = !1, g.DEFAULT_CAPACITY = 16, g.DEFAULT_ENDIAN = g.BIG_ENDIAN, g.DEFAULT_NOASSERT = !1, g.Long = u || null;
            var s = g.prototype;
            s.__isByteBuffer__, Object.defineProperty(s, "__isByteBuffer__", {
                value: !0,
                enumerable: !1,
                configurable: !1
            });
            var o = new ArrayBuffer(0),
                r = String.fromCharCode;

            function a(e) {
                var t = 0;
                return function() {
                    return t < e.length ? e.charCodeAt(t++) : null
                }
            }

            function f() {
                var e = [],
                    t = [];
                return function() {
                    if (0 === arguments.length) return t.join("") + r.apply(String, e);
                    1024 < e.length + arguments.length && (t.push(r.apply(String, e)), e.length = 0), Array.prototype.push.apply(e, arguments)
                }
            }

            function i(e, t, r, i, n) {
                var o, s, a = 8 * n - i - 1,
                    u = (1 << a) - 1,
                    f = u >> 1,
                    l = -7,
                    d = r ? n - 1 : 0,
                    c = r ? -1 : 1,
                    h = e[t + d];
                for (d += c, o = h & (1 << -l) - 1, h >>= -l, l += a; 0 < l; o = 256 * o + e[t + d], d += c, l -= 8);
                for (s = o & (1 << -l) - 1, o >>= -l, l += i; 0 < l; s = 256 * s + e[t + d], d += c, l -= 8);
                if (0 === o) o = 1 - f;
                else {
                    if (o === u) return s ? NaN : 1 / 0 * (h ? -1 : 1);
                    s += Math.pow(2, i), o -= f
                }
                return (h ? -1 : 1) * s * Math.pow(2, o - i)
            }

            function n(e, t, r, i, n, o) {
                var s, a, u, f = 8 * o - n - 1,
                    l = (1 << f) - 1,
                    d = l >> 1,
                    c = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    h = i ? 0 : o - 1,
                    g = i ? 1 : -1,
                    p = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), 2 <= (t += 1 <= s + d ? c / u : c * Math.pow(2, 1 - d)) * u && (s++, u /= 2), l <= s + d ? (a = 0, s = l) : 1 <= s + d ? (a = (t * u - 1) * Math.pow(2, n), s += d) : (a = t * Math.pow(2, d - 1) * Math.pow(2, n), s = 0)); 8 <= n; e[r + h] = 255 & a, h += g, a /= 256, n -= 8);
                for (s = s << n | a, f += n; 0 < f; e[r + h] = 255 & s, h += g, s /= 256, f -= 8);
                e[r + h - g] |= 128 * p
            }
            g.accessor = function() {
                return Uint8Array
            }, g.allocate = function(e, t, r) {
                return new g(e, t, r)
            }, g.concat = function(e, t, r, i) {
                "boolean" != typeof t && "string" == typeof t || (i = r, r = t, t = void 0);
                for (var n, o = 0, s = 0, a = e.length; s < a; ++s) g.isByteBuffer(e[s]) || (e[s] = g.wrap(e[s], t)), 0 < (n = e[s].limit - e[s].offset) && (o += n);
                if (0 === o) return new g(0, r, i);
                var u, f = new g(o, r, i);
                for (s = 0; s < a;)(n = (u = e[s++]).limit - u.offset) <= 0 || (f.view.set(u.view.subarray(u.offset, u.limit), f.offset), f.offset += n);
                return f.limit = f.offset, f.offset = 0, f
            }, g.isByteBuffer = function(e) {
                return !0 === (e && e.__isByteBuffer__)
            }, g.type = function() {
                return ArrayBuffer
            }, g.wrap = function(e, t, r, i) {
                if ("string" != typeof t && (i = r, r = t, t = void 0), "string" == typeof e) switch (void 0 === t && (t = "utf8"), t) {
                    case "base64":
                        return g.fromBase64(e, r);
                    case "hex":
                        return g.fromHex(e, r);
                    case "binary":
                        return g.fromBinary(e, r);
                    case "utf8":
                        return g.fromUTF8(e, r);
                    case "debug":
                        return g.fromDebug(e, r);
                    default:
                        throw Error("Unsupported encoding: " + t)
                }
                if (null === e || "object" !== (void 0 === e ? "undefined" : h(e))) throw TypeError("Illegal buffer");
                var n;
                if (g.isByteBuffer(e)) return (n = s.clone.call(e)).markedOffset = -1, n;
                if (e instanceof Uint8Array) n = new g(0, r, i), 0 < e.length && (n.buffer = e.buffer, n.offset = e.byteOffset, n.limit = e.byteOffset + e.byteLength, n.view = new Uint8Array(e.buffer));
                else if (e instanceof ArrayBuffer) n = new g(0, r, i), 0 < e.byteLength && (n.buffer = e, n.offset = 0, n.limit = e.byteLength, n.view = 0 < e.byteLength ? new Uint8Array(e) : null);
                else {
                    if ("[object Array]" !== Object.prototype.toString.call(e)) throw TypeError("Illegal buffer");
                    (n = new g(e.length, r, i)).limit = e.length;
                    for (var o = 0; o < e.length; ++o) n.view[o] = e[o]
                }
                return n
            }, s.writeBitSet = function(e, t) {
                var r = void 0 === t;
                if (r && (t = this.offset), !this.noAssert) {
                    if (!(e instanceof Array)) throw TypeError("Illegal BitSet: Not an array");
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                var i, n = t,
                    o = e.length,
                    s = o >> 3,
                    a = 0;
                for (t += this.writeVarint32(o, t); s--;) i = 1 & !!e[a++] | (1 & !!e[a++]) << 1 | (1 & !!e[a++]) << 2 | (1 & !!e[a++]) << 3 | (1 & !!e[a++]) << 4 | (1 & !!e[a++]) << 5 | (1 & !!e[a++]) << 6 | (1 & !!e[a++]) << 7, this.writeByte(i, t++);
                if (a < o) {
                    var u = 0;
                    for (i = 0; a < o;) i |= (1 & !!e[a++]) << u++;
                    this.writeByte(i, t++)
                }
                return r ? (this.offset = t, this) : t - n
            }, s.readBitSet = function(e) {
                var t = void 0 === e;
                t && (e = this.offset);
                var r, i = this.readVarint32(e),
                    n = i.value,
                    o = n >> 3,
                    s = 0,
                    a = [];
                for (e += i.length; o--;) r = this.readByte(e++), a[s++] = !!(1 & r), a[s++] = !!(2 & r), a[s++] = !!(4 & r), a[s++] = !!(8 & r), a[s++] = !!(16 & r), a[s++] = !!(32 & r), a[s++] = !!(64 & r), a[s++] = !!(128 & r);
                if (s < n) {
                    var u = 0;
                    for (r = this.readByte(e++); s < n;) a[s++] = !!(r >> u++ & 1)
                }
                return t && (this.offset = e), a
            }, s.readBytes = function(e, t) {
                var r = void 0 === t;
                if (r && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + e > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+" + e + ") <= " + this.buffer.byteLength)
                }
                var i = this.slice(t, t + e);
                return r && (this.offset += e), i
            }, s.writeBytes = s.append, s.writeInt8 = function(e, t) {
                var r = void 0 === t;
                if (r && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                    if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 1;
                var i = this.buffer.byteLength;
                return i < t && this.resize((i *= 2) > t ? i : t), t -= 1, this.view[t] = e, r && (this.offset += 1), this
            }, s.writeByte = s.writeInt8, s.readInt8 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                }
                var r = this.view[e];
                return 128 == (128 & r) && (r = -(255 - r + 1)), t && (this.offset += 1), r
            }, s.readByte = s.readInt8, s.writeUint8 = function(e, t) {
                var r = void 0 === t;
                if (r && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                    if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 1;
                var i = this.buffer.byteLength;
                return i < t && this.resize((i *= 2) > t ? i : t), t -= 1, this.view[t] = e, r && (this.offset += 1), this
            }, s.writeUInt8 = s.writeUint8, s.readUint8 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                }
                var r = this.view[e];
                return t && (this.offset += 1), r
            }, s.readUInt8 = s.readUint8, s.writeInt16 = function(e, t) {
                var r = void 0 === t;
                if (r && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                    if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 2;
                var i = this.buffer.byteLength;
                return i < t && this.resize((i *= 2) > t ? i : t), t -= 2, this.littleEndian ? (this.view[t + 1] = (65280 & e) >>> 8, this.view[t] = 255 & e) : (this.view[t] = (65280 & e) >>> 8, this.view[t + 1] = 255 & e), r && (this.offset += 2), this
            }, s.writeShort = s.writeInt16, s.readInt16 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength)
                }
                var r = 0;
                return this.littleEndian ? (r = this.view[e], r |= this.view[e + 1] << 8) : (r = this.view[e] << 8, r |= this.view[e + 1]), 32768 == (32768 & r) && (r = -(65535 - r + 1)), t && (this.offset += 2), r
            }, s.readShort = s.readInt16, s.writeUint16 = function(e, t) {
                var r = void 0 === t;
                if (r && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                    if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 2;
                var i = this.buffer.byteLength;
                return i < t && this.resize((i *= 2) > t ? i : t), t -= 2, this.littleEndian ? (this.view[t + 1] = (65280 & e) >>> 8, this.view[t] = 255 & e) : (this.view[t] = (65280 & e) >>> 8, this.view[t + 1] = 255 & e), r && (this.offset += 2), this
            }, s.writeUInt16 = s.writeUint16, s.readUint16 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength)
                }
                var r = 0;
                return this.littleEndian ? (r = this.view[e], r |= this.view[e + 1] << 8) : (r = this.view[e] << 8, r |= this.view[e + 1]), t && (this.offset += 2), r
            }, s.readUInt16 = s.readUint16, s.writeInt32 = function(e, t) {
                var r = void 0 === t;
                if (r && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                    if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 4;
                var i = this.buffer.byteLength;
                return i < t && this.resize((i *= 2) > t ? i : t), t -= 4, this.littleEndian ? (this.view[t + 3] = e >>> 24 & 255, this.view[t + 2] = e >>> 16 & 255, this.view[t + 1] = e >>> 8 & 255, this.view[t] = 255 & e) : (this.view[t] = e >>> 24 & 255, this.view[t + 1] = e >>> 16 & 255, this.view[t + 2] = e >>> 8 & 255, this.view[t + 3] = 255 & e), r && (this.offset += 4), this
            }, s.writeInt = s.writeInt32, s.readInt32 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                }
                var r = 0;
                return this.littleEndian ? (r = this.view[e + 2] << 16, r |= this.view[e + 1] << 8, r |= this.view[e], r += this.view[e + 3] << 24 >>> 0) : (r = this.view[e + 1] << 16, r |= this.view[e + 2] << 8, r |= this.view[e + 3], r += this.view[e] << 24 >>> 0), r |= 0, t && (this.offset += 4), r
            }, s.readInt = s.readInt32, s.writeUint32 = function(e, t) {
                var r = void 0 === t;
                if (r && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                    if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 4;
                var i = this.buffer.byteLength;
                return i < t && this.resize((i *= 2) > t ? i : t), t -= 4, this.littleEndian ? (this.view[t + 3] = e >>> 24 & 255, this.view[t + 2] = e >>> 16 & 255, this.view[t + 1] = e >>> 8 & 255, this.view[t] = 255 & e) : (this.view[t] = e >>> 24 & 255, this.view[t + 1] = e >>> 16 & 255, this.view[t + 2] = e >>> 8 & 255, this.view[t + 3] = 255 & e), r && (this.offset += 4), this
            }, s.writeUInt32 = s.writeUint32, s.readUint32 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                }
                var r = 0;
                return this.littleEndian ? (r = this.view[e + 2] << 16, r |= this.view[e + 1] << 8, r |= this.view[e], r += this.view[e + 3] << 24 >>> 0) : (r = this.view[e + 1] << 16, r |= this.view[e + 2] << 8, r |= this.view[e + 3], r += this.view[e] << 24 >>> 0), t && (this.offset += 4), r
            }, s.readUInt32 = s.readUint32, u && (s.writeInt64 = function(e, t) {
                var r = void 0 === t;
                if (r && (t = this.offset), !this.noAssert) {
                    if ("number" == typeof e) e = u.fromNumber(e);
                    else if ("string" == typeof e) e = u.fromString(e);
                    else if (!(e && e instanceof u)) throw TypeError("Illegal value: " + e + " (not an integer or Long)");
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                "number" == typeof e ? e = u.fromNumber(e) : "string" == typeof e && (e = u.fromString(e)), t += 8;
                var i = this.buffer.byteLength;
                i < t && this.resize((i *= 2) > t ? i : t), t -= 8;
                var n = e.low,
                    o = e.high;
                return this.littleEndian ? (this.view[t + 3] = n >>> 24 & 255, this.view[t + 2] = n >>> 16 & 255, this.view[t + 1] = n >>> 8 & 255, this.view[t] = 255 & n, t += 4, this.view[t + 3] = o >>> 24 & 255, this.view[t + 2] = o >>> 16 & 255, this.view[t + 1] = o >>> 8 & 255, this.view[t] = 255 & o) : (this.view[t] = o >>> 24 & 255, this.view[t + 1] = o >>> 16 & 255, this.view[t + 2] = o >>> 8 & 255, this.view[t + 3] = 255 & o, t += 4, this.view[t] = n >>> 24 & 255, this.view[t + 1] = n >>> 16 & 255, this.view[t + 2] = n >>> 8 & 255, this.view[t + 3] = 255 & n), r && (this.offset += 8), this
            }, s.writeLong = s.writeInt64, s.readInt64 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength)
                }
                var r = 0,
                    i = 0;
                this.littleEndian ? (r = this.view[e + 2] << 16, r |= this.view[e + 1] << 8, r |= this.view[e], r += this.view[e + 3] << 24 >>> 0, e += 4, i = this.view[e + 2] << 16, i |= this.view[e + 1] << 8, i |= this.view[e], i += this.view[e + 3] << 24 >>> 0) : (i = this.view[e + 1] << 16, i |= this.view[e + 2] << 8, i |= this.view[e + 3], i += this.view[e] << 24 >>> 0, e += 4, r = this.view[e + 1] << 16, r |= this.view[e + 2] << 8, r |= this.view[e + 3], r += this.view[e] << 24 >>> 0);
                var n = new u(r, i, !1);
                return t && (this.offset += 8), n
            }, s.readLong = s.readInt64, s.writeUint64 = function(e, t) {
                var r = void 0 === t;
                if (r && (t = this.offset), !this.noAssert) {
                    if ("number" == typeof e) e = u.fromNumber(e);
                    else if ("string" == typeof e) e = u.fromString(e);
                    else if (!(e && e instanceof u)) throw TypeError("Illegal value: " + e + " (not an integer or Long)");
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                "number" == typeof e ? e = u.fromNumber(e) : "string" == typeof e && (e = u.fromString(e)), t += 8;
                var i = this.buffer.byteLength;
                i < t && this.resize((i *= 2) > t ? i : t), t -= 8;
                var n = e.low,
                    o = e.high;
                return this.littleEndian ? (this.view[t + 3] = n >>> 24 & 255, this.view[t + 2] = n >>> 16 & 255, this.view[t + 1] = n >>> 8 & 255, this.view[t] = 255 & n, t += 4, this.view[t + 3] = o >>> 24 & 255, this.view[t + 2] = o >>> 16 & 255, this.view[t + 1] = o >>> 8 & 255, this.view[t] = 255 & o) : (this.view[t] = o >>> 24 & 255, this.view[t + 1] = o >>> 16 & 255, this.view[t + 2] = o >>> 8 & 255, this.view[t + 3] = 255 & o, t += 4, this.view[t] = n >>> 24 & 255, this.view[t + 1] = n >>> 16 & 255, this.view[t + 2] = n >>> 8 & 255, this.view[t + 3] = 255 & n), r && (this.offset += 8), this
            }, s.writeUInt64 = s.writeUint64, s.readUint64 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength)
                }
                var r = 0,
                    i = 0;
                this.littleEndian ? (r = this.view[e + 2] << 16, r |= this.view[e + 1] << 8, r |= this.view[e], r += this.view[e + 3] << 24 >>> 0, e += 4, i = this.view[e + 2] << 16, i |= this.view[e + 1] << 8, i |= this.view[e], i += this.view[e + 3] << 24 >>> 0) : (i = this.view[e + 1] << 16, i |= this.view[e + 2] << 8, i |= this.view[e + 3], i += this.view[e] << 24 >>> 0, e += 4, r = this.view[e + 1] << 16, r |= this.view[e + 2] << 8, r |= this.view[e + 3], r += this.view[e] << 24 >>> 0);
                var n = new u(r, i, !0);
                return t && (this.offset += 8), n
            }, s.readUInt64 = s.readUint64), s.writeFloat32 = function(e, t) {
                var r = void 0 === t;
                if (r && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof e) throw TypeError("Illegal value: " + e + " (not a number)");
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 4;
                var i = this.buffer.byteLength;
                return i < t && this.resize((i *= 2) > t ? i : t), t -= 4, n(this.view, e, t, this.littleEndian, 23, 4), r && (this.offset += 4), this
            }, s.writeFloat = s.writeFloat32, s.readFloat32 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                }
                var r = i(this.view, e, this.littleEndian, 23, 4);
                return t && (this.offset += 4), r
            }, s.readFloat = s.readFloat32, s.writeFloat64 = function(e, t) {
                var r = void 0 === t;
                if (r && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof e) throw TypeError("Illegal value: " + e + " (not a number)");
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 8;
                var i = this.buffer.byteLength;
                return i < t && this.resize((i *= 2) > t ? i : t), t -= 8, n(this.view, e, t, this.littleEndian, 52, 8), r && (this.offset += 8), this
            }, s.writeDouble = s.writeFloat64, s.readFloat64 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength)
                }
                var r = i(this.view, e, this.littleEndian, 52, 8);
                return t && (this.offset += 8), r
            }, s.readDouble = s.readFloat64, g.MAX_VARINT32_BYTES = 5, g.calculateVarint32 = function(e) {
                return (e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 1 << 21 ? 3 : e < 1 << 28 ? 4 : 5
            }, g.zigZagEncode32 = function(e) {
                return ((e |= 0) << 1 ^ e >> 31) >>> 0
            }, g.zigZagDecode32 = function(e) {
                return e >>> 1 ^ -(1 & e) | 0
            }, s.writeVarint32 = function(e, t) {
                var r = void 0 === t;
                if (r && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                    if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                var i, n = g.calculateVarint32(e);
                t += n;
                var o = this.buffer.byteLength;
                for (o < t && this.resize((o *= 2) > t ? o : t), t -= n, e >>>= 0; 128 <= e;) i = 127 & e | 128, this.view[t++] = i, e >>>= 7;
                return this.view[t++] = e, r ? (this.offset = t, this) : n
            }, s.writeVarint32ZigZag = function(e, t) {
                return this.writeVarint32(g.zigZagEncode32(e), t)
            }, s.readVarint32 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                }
                var r, i = 0,
                    n = 0;
                do {
                    if (!this.noAssert && e > this.limit) {
                        var o = Error("Truncated");
                        throw o.truncated = !0, o
                    }
                    r = this.view[e++], i < 5 && (n |= (127 & r) << 7 * i), ++i
                } while (0 != (128 & r));
                return n |= 0, t ? (this.offset = e, n) : {
                    value: n,
                    length: i
                }
            }, s.readVarint32ZigZag = function(e) {
                var t = this.readVarint32(e);
                return "object" === (void 0 === t ? "undefined" : h(t)) ? t.value = g.zigZagDecode32(t.value) : t = g.zigZagDecode32(t), t
            }, u && (g.MAX_VARINT64_BYTES = 10, g.calculateVarint64 = function(e) {
                "number" == typeof e ? e = u.fromNumber(e) : "string" == typeof e && (e = u.fromString(e));
                var t = e.toInt() >>> 0,
                    r = e.shiftRightUnsigned(28).toInt() >>> 0,
                    i = e.shiftRightUnsigned(56).toInt() >>> 0;
                return 0 == i ? 0 == r ? t < 16384 ? t < 128 ? 1 : 2 : t < 1 << 21 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 1 << 21 ? 7 : 8 : i < 128 ? 9 : 10
            }, g.zigZagEncode64 = function(e) {
                return "number" == typeof e ? e = u.fromNumber(e, !1) : "string" == typeof e ? e = u.fromString(e, !1) : !1 !== e.unsigned && (e = e.toSigned()), e.shiftLeft(1).xor(e.shiftRight(63)).toUnsigned()
            }, g.zigZagDecode64 = function(e) {
                return "number" == typeof e ? e = u.fromNumber(e, !1) : "string" == typeof e ? e = u.fromString(e, !1) : !1 !== e.unsigned && (e = e.toSigned()), e.shiftRightUnsigned(1).xor(e.and(u.ONE).toSigned().negate()).toSigned()
            }, s.writeVarint64 = function(e, t) {
                var r = void 0 === t;
                if (r && (t = this.offset), !this.noAssert) {
                    if ("number" == typeof e) e = u.fromNumber(e);
                    else if ("string" == typeof e) e = u.fromString(e);
                    else if (!(e && e instanceof u)) throw TypeError("Illegal value: " + e + " (not an integer or Long)");
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                "number" == typeof e ? e = u.fromNumber(e, !1) : "string" == typeof e ? e = u.fromString(e, !1) : !1 !== e.unsigned && (e = e.toSigned());
                var i = g.calculateVarint64(e),
                    n = e.toInt() >>> 0,
                    o = e.shiftRightUnsigned(28).toInt() >>> 0,
                    s = e.shiftRightUnsigned(56).toInt() >>> 0;
                t += i;
                var a = this.buffer.byteLength;
                switch (a < t && this.resize((a *= 2) > t ? a : t), t -= i, i) {
                    case 10:
                        this.view[t + 9] = s >>> 7 & 1;
                    case 9:
                        this.view[t + 8] = 9 !== i ? 128 | s : 127 & s;
                    case 8:
                        this.view[t + 7] = 8 !== i ? o >>> 21 | 128 : o >>> 21 & 127;
                    case 7:
                        this.view[t + 6] = 7 !== i ? o >>> 14 | 128 : o >>> 14 & 127;
                    case 6:
                        this.view[t + 5] = 6 !== i ? o >>> 7 | 128 : o >>> 7 & 127;
                    case 5:
                        this.view[t + 4] = 5 !== i ? 128 | o : 127 & o;
                    case 4:
                        this.view[t + 3] = 4 !== i ? n >>> 21 | 128 : n >>> 21 & 127;
                    case 3:
                        this.view[t + 2] = 3 !== i ? n >>> 14 | 128 : n >>> 14 & 127;
                    case 2:
                        this.view[t + 1] = 2 !== i ? n >>> 7 | 128 : n >>> 7 & 127;
                    case 1:
                        this.view[t] = 1 !== i ? 128 | n : 127 & n
                }
                return r ? (this.offset += i, this) : i
            }, s.writeVarint64ZigZag = function(e, t) {
                return this.writeVarint64(g.zigZagEncode64(e), t)
            }, s.readVarint64 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                }
                var r = e,
                    i = 0,
                    n = 0,
                    o = 0,
                    s = 0;
                if (i = 127 & (s = this.view[e++]), 128 & s && (i |= (127 & (s = this.view[e++])) << 7, (128 & s || this.noAssert && void 0 === s) && (i |= (127 & (s = this.view[e++])) << 14, (128 & s || this.noAssert && void 0 === s) && (i |= (127 & (s = this.view[e++])) << 21, (128 & s || this.noAssert && void 0 === s) && (n = 127 & (s = this.view[e++]), (128 & s || this.noAssert && void 0 === s) && (n |= (127 & (s = this.view[e++])) << 7, (128 & s || this.noAssert && void 0 === s) && (n |= (127 & (s = this.view[e++])) << 14, (128 & s || this.noAssert && void 0 === s) && (n |= (127 & (s = this.view[e++])) << 21, (128 & s || this.noAssert && void 0 === s) && (o = 127 & (s = this.view[e++]), (128 & s || this.noAssert && void 0 === s) && (o |= (127 & (s = this.view[e++])) << 7, 128 & s || this.noAssert && void 0 === s)))))))))) throw Error("Buffer overrun");
                var a = u.fromBits(i | n << 28, n >>> 4 | o << 24, !1);
                return t ? (this.offset = e, a) : {
                    value: a,
                    length: e - r
                }
            }, s.readVarint64ZigZag = function(e) {
                var t = this.readVarint64(e);
                return t && t.value instanceof u ? t.value = g.zigZagDecode64(t.value) : t = g.zigZagDecode64(t), t
            }), s.writeCString = function(e, t) {
                var r = void 0 === t;
                r && (t = this.offset);
                var i, n = e.length;
                if (!this.noAssert) {
                    if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                    for (i = 0; i < n; ++i)
                        if (0 === e.charCodeAt(i)) throw RangeError("Illegal str: Contains NULL-characters");
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                n = c.calculateUTF16asUTF8(a(e))[1], t += n + 1;
                var o = this.buffer.byteLength;
                return o < t && this.resize((o *= 2) > t ? o : t), t -= n + 1, c.encodeUTF16toUTF8(a(e), function(e) {
                    this.view[t++] = e
                }.bind(this)), this.view[t++] = 0, r ? (this.offset = t, this) : n
            }, s.readCString = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                }
                var r, i = e,
                    n = -1;
                return c.decodeUTF8toUTF16(function() {
                    if (0 === n) return null;
                    if (e >= this.limit) throw RangeError("Illegal range: Truncated data, " + e + " < " + this.limit);
                    return 0 === (n = this.view[e++]) ? null : n
                }.bind(this), r = f(), !0), t ? (this.offset = e, r()) : {
                    string: r(),
                    length: e - i
                }
            }, s.writeIString = function(e, t) {
                var r = void 0 === t;
                if (r && (t = this.offset), !this.noAssert) {
                    if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                var i, n = t;
                i = c.calculateUTF16asUTF8(a(e), this.noAssert)[1], t += 4 + i;
                var o = this.buffer.byteLength;
                if (o < t && this.resize((o *= 2) > t ? o : t), t -= 4 + i, this.littleEndian ? (this.view[t + 3] = i >>> 24 & 255, this.view[t + 2] = i >>> 16 & 255, this.view[t + 1] = i >>> 8 & 255, this.view[t] = 255 & i) : (this.view[t] = i >>> 24 & 255, this.view[t + 1] = i >>> 16 & 255, this.view[t + 2] = i >>> 8 & 255, this.view[t + 3] = 255 & i), t += 4, c.encodeUTF16toUTF8(a(e), function(e) {
                        this.view[t++] = e
                    }.bind(this)), t !== n + 4 + i) throw RangeError("Illegal range: Truncated data, " + t + " == " + (t + 4 + i));
                return r ? (this.offset = t, this) : t - n
            }, s.readIString = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                }
                var r = e,
                    i = this.readUint32(e),
                    n = this.readUTF8String(i, g.METRICS_BYTES, e += 4);
                return e += n.length, t ? (this.offset = e, n.string) : {
                    string: n.string,
                    length: e - r
                }
            }, g.METRICS_CHARS = "c", g.METRICS_BYTES = "b", s.writeUTF8String = function(e, t) {
                var r, i = void 0 === t;
                if (i && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                var n = t;
                r = c.calculateUTF16asUTF8(a(e))[1], t += r;
                var o = this.buffer.byteLength;
                return o < t && this.resize((o *= 2) > t ? o : t), t -= r, c.encodeUTF16toUTF8(a(e), function(e) {
                    this.view[t++] = e
                }.bind(this)), i ? (this.offset = t, this) : t - n
            }, s.writeString = s.writeUTF8String, g.calculateUTF8Chars = function(e) {
                return c.calculateUTF16asUTF8(a(e))[0]
            }, g.calculateString = g.calculateUTF8Bytes = function(e) {
                return c.calculateUTF16asUTF8(a(e))[1]
            }, s.readUTF8String = function(e, t, r) {
                "number" == typeof t && (r = t, t = void 0);
                var i = void 0 === r;
                if (i && (r = this.offset), void 0 === t && (t = g.METRICS_CHARS), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal length: " + e + " (not an integer)");
                    if (e |= 0, "number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                    if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
                }
                var n, o = 0,
                    s = r;
                if (t === g.METRICS_CHARS) {
                    if (n = f(), c.decodeUTF8(function() {
                            return o < e && r < this.limit ? this.view[r++] : null
                        }.bind(this), (function(e) {
                            ++o, c.UTF8toUTF16(e, n)
                        })), o !== e) throw RangeError("Illegal range: Truncated data, " + o + " == " + e);
                    return i ? (this.offset = r, n()) : {
                        string: n(),
                        length: r - s
                    }
                }
                if (t !== g.METRICS_BYTES) throw TypeError("Unsupported metrics: " + t);
                if (!this.noAssert) {
                    if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                    if ((r >>>= 0) < 0 || r + e > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+" + e + ") <= " + this.buffer.byteLength)
                }
                var a = r + e;
                if (c.decodeUTF8toUTF16(function() {
                        return r < a ? this.view[r++] : null
                    }.bind(this), n = f(), this.noAssert), r !== a) throw RangeError("Illegal range: Truncated data, " + r + " == " + a);
                return i ? (this.offset = r, n()) : {
                    string: n(),
                    length: r - s
                }
            }, s.readString = s.readUTF8String, s.writeVString = function(e, t) {
                var r = void 0 === t;
                if (r && (t = this.offset), !this.noAssert) {
                    if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                var i, n, o = t;
                i = c.calculateUTF16asUTF8(a(e), this.noAssert)[1], n = g.calculateVarint32(i), t += n + i;
                var s = this.buffer.byteLength;
                if (s < t && this.resize((s *= 2) > t ? s : t), t -= n + i, t += this.writeVarint32(i, t), c.encodeUTF16toUTF8(a(e), function(e) {
                        this.view[t++] = e
                    }.bind(this)), t !== o + i + n) throw RangeError("Illegal range: Truncated data, " + t + " == " + (t + i + n));
                return r ? (this.offset = t, this) : t - o
            }, s.readVString = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                }
                var r = e,
                    i = this.readVarint32(e),
                    n = this.readUTF8String(i.value, g.METRICS_BYTES, e += i.length);
                return e += n.length, t ? (this.offset = e, n.string) : {
                    string: n.string,
                    length: e - r
                }
            }, s.append = function(e, t, r) {
                "number" != typeof t && "string" == typeof t || (r = t, t = void 0);
                var i = void 0 === r;
                if (i && (r = this.offset), !this.noAssert) {
                    if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                    if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
                }
                e instanceof g || (e = g.wrap(e, t));
                var n = e.limit - e.offset;
                if (n <= 0) return this;
                r += n;
                var o = this.buffer.byteLength;
                return o < r && this.resize((o *= 2) > r ? o : r), r -= n, this.view.set(e.view.subarray(e.offset, e.limit), r), e.offset += n, i && (this.offset += n), this
            }, s.appendTo = function(e, t) {
                return e.append(this, t), this
            }, s.assert = function(e) {
                return this.noAssert = !e, this
            }, s.capacity = function() {
                return this.buffer.byteLength
            }, s.clear = function() {
                return this.offset = 0, this.limit = this.buffer.byteLength, this.markedOffset = -1, this
            }, s.clone = function(e) {
                var t = new g(0, this.littleEndian, this.noAssert);
                return t.view = e ? (t.buffer = new ArrayBuffer(this.buffer.byteLength), new Uint8Array(t.buffer)) : (t.buffer = this.buffer, this.view), t.offset = this.offset, t.markedOffset = this.markedOffset, t.limit = this.limit, t
            }, s.compact = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                    if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                    if (t >>>= 0, e < 0 || t < e || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                }
                if (0 === e && t === this.buffer.byteLength) return this;
                var r = t - e;
                if (0 === r) return this.buffer = o, this.view = null, 0 <= this.markedOffset && (this.markedOffset -= e), this.offset = 0, this.limit = 0, this;
                var i = new ArrayBuffer(r),
                    n = new Uint8Array(i);
                return n.set(this.view.subarray(e, t)), this.buffer = i, this.view = n, 0 <= this.markedOffset && (this.markedOffset -= e), this.offset = 0, this.limit = r, this
            }, s.copy = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                    if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                    if (t >>>= 0, e < 0 || t < e || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                }
                if (e === t) return new g(0, this.littleEndian, this.noAssert);
                var r = t - e,
                    i = new g(r, this.littleEndian, this.noAssert);
                return i.offset = 0, i.limit = r, 0 <= i.markedOffset && (i.markedOffset -= e), this.copyTo(i, 0, e, t), i
            }, s.copyTo = function(e, t, r, i) {
                var n, o;
                if (!this.noAssert && !g.isByteBuffer(e)) throw TypeError("Illegal target: Not a ByteBuffer");
                if (t = (o = void 0 === t) ? e.offset : 0 | t, r = (n = void 0 === r) ? this.offset : 0 | r, i = void 0 === i ? this.limit : 0 | i, t < 0 || t > e.buffer.byteLength) throw RangeError("Illegal target range: 0 <= " + t + " <= " + e.buffer.byteLength);
                if (r < 0 || i > this.buffer.byteLength) throw RangeError("Illegal source range: 0 <= " + r + " <= " + this.buffer.byteLength);
                var s = i - r;
                return 0 === s ? e : (e.ensureCapacity(t + s), e.view.set(this.view.subarray(r, i), t), n && (this.offset += s), o && (e.offset += s), this)
            }, s.ensureCapacity = function(e) {
                var t = this.buffer.byteLength;
                return t < e ? this.resize((t *= 2) > e ? t : e) : this
            }, s.fill = function(e, t, r) {
                var i = void 0 === t;
                if (i && (t = this.offset), "string" == typeof e && 0 < e.length && (e = e.charCodeAt(0)), void 0 === t && (t = this.offset), void 0 === r && (r = this.limit), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                    if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                    if (t >>>= 0, "number" != typeof r || r % 1 != 0) throw TypeError("Illegal end: Not an integer");
                    if (r >>>= 0, t < 0 || r < t || r > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + r + " <= " + this.buffer.byteLength)
                }
                if (r <= t) return this;
                for (; t < r;) this.view[t++] = e;
                return i && (this.offset = t), this
            }, s.flip = function() {
                return this.limit = this.offset, this.offset = 0, this
            }, s.mark = function(e) {
                if (e = void 0 === e ? this.offset : e, !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
                }
                return this.markedOffset = e, this
            }, s.order = function(e) {
                if (!this.noAssert && "boolean" != typeof e) throw TypeError("Illegal littleEndian: Not a boolean");
                return this.littleEndian = !!e, this
            }, s.LE = function(e) {
                return this.littleEndian = void 0 === e || !!e, this
            }, s.BE = function(e) {
                return this.littleEndian = void 0 !== e && !e, this
            }, s.prepend = function(e, t, r) {
                "number" != typeof t && "string" == typeof t || (r = t, t = void 0);
                var i = void 0 === r;
                if (i && (r = this.offset), !this.noAssert) {
                    if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                    if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
                }
                e instanceof g || (e = g.wrap(e, t));
                var n = e.limit - e.offset;
                if (n <= 0) return this;
                var o = n - r;
                if (0 < o) {
                    var s = new ArrayBuffer(this.buffer.byteLength + o),
                        a = new Uint8Array(s);
                    a.set(this.view.subarray(r, this.buffer.byteLength), n), this.buffer = s, this.view = a, this.offset += o, 0 <= this.markedOffset && (this.markedOffset += o), this.limit += o, r += o
                } else new Uint8Array(this.buffer);
                return this.view.set(e.view.subarray(e.offset, e.limit), r - n), e.offset = e.limit, i && (this.offset -= n), this
            }, s.prependTo = function(e, t) {
                return e.prepend(this, t), this
            }, s.printDebug = function(e) {
                "function" != typeof e && (e = console.log.bind(console)), e(this.toString() + "\n-------------------------------------------------------------------\n" + this.toDebug(!0))
            }, s.remaining = function() {
                return this.limit - this.offset
            }, s.reset = function() {
                return 0 <= this.markedOffset ? (this.offset = this.markedOffset, this.markedOffset = -1) : this.offset = 0, this
            }, s.resize = function(e) {
                if (!this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal capacity: " + e + " (not an integer)");
                    if ((e |= 0) < 0) throw RangeError("Illegal capacity: 0 <= " + e)
                }
                if (this.buffer.byteLength < e) {
                    var t = new ArrayBuffer(e),
                        r = new Uint8Array(t);
                    r.set(this.view), this.buffer = t, this.view = r
                }
                return this
            }, s.reverse = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                    if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                    if (t >>>= 0, e < 0 || t < e || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                }
                return e === t || Array.prototype.reverse.call(this.view.subarray(e, t)), this
            }, s.skip = function(e) {
                if (!this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal length: " + e + " (not an integer)");
                    e |= 0
                }
                var t = this.offset + e;
                if (!this.noAssert && (t < 0 || t > this.buffer.byteLength)) throw RangeError("Illegal length: 0 <= " + this.offset + " + " + e + " <= " + this.buffer.byteLength);
                return this.offset = t, this
            }, s.slice = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                    if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                    if (t >>>= 0, e < 0 || t < e || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                }
                var r = this.clone();
                return r.offset = e, r.limit = t, r
            }, s.toBuffer = function(e) {
                var t = this.offset,
                    r = this.limit;
                if (!this.noAssert) {
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: Not an integer");
                    if (t >>>= 0, "number" != typeof r || r % 1 != 0) throw TypeError("Illegal limit: Not an integer");
                    if (r >>>= 0, t < 0 || r < t || r > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + r + " <= " + this.buffer.byteLength)
                }
                if (!e && 0 === t && r === this.buffer.byteLength) return this.buffer;
                if (t === r) return o;
                var i = new ArrayBuffer(r - t);
                return new Uint8Array(i).set(new Uint8Array(this.buffer).subarray(t, r), 0), i
            }, s.toArrayBuffer = s.toBuffer, s.toString = function(e, t, r) {
                if (void 0 === e) return "ByteBufferAB(offset=" + this.offset + ",markedOffset=" + this.markedOffset + ",limit=" + this.limit + ",capacity=" + this.capacity() + ")";
                switch ("number" == typeof e && (r = t = e = "utf8"), e) {
                    case "utf8":
                        return this.toUTF8(t, r);
                    case "base64":
                        return this.toBase64(t, r);
                    case "hex":
                        return this.toHex(t, r);
                    case "binary":
                        return this.toBinary(t, r);
                    case "debug":
                        return this.toDebug();
                    case "columns":
                        return this.toColumns();
                    default:
                        throw Error("Unsupported encoding: " + e)
                }
            };
            var l = (function() {
                for (var e = {}, n = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47], s = [], t = 0, r = n.length; t < r; ++t) s[n[t]] = t;
                return e.encode = function(e, t) {
                    for (var r, i; null !== (r = e());) t(n[r >> 2 & 63]), i = (3 & r) << 4, null !== (r = e()) ? (t(n[63 & ((i |= r >> 4 & 15) | r >> 4 & 15)]), i = (15 & r) << 2, null !== (r = e()) ? (t(n[63 & (i | r >> 6 & 3)]), t(n[63 & r])) : (t(n[63 & i]), t(61))) : (t(n[63 & i]), t(61), t(61))
                }, e.decode = function(e, t) {
                    var r, i, n;

                    function o(e) {
                        throw Error("Illegal character code: " + e)
                    }
                    for (; null !== (r = e());)
                        if (void 0 === (i = s[r]) && o(r), null !== (r = e()) && (void 0 === (n = s[r]) && o(r), t(i << 2 >>> 0 | (48 & n) >> 4), null !== (r = e()))) {
                            if (void 0 === (i = s[r])) {
                                if (61 === r) break;
                                o(r)
                            }
                            if (t((15 & n) << 4 >>> 0 | (60 & i) >> 2), null !== (r = e())) {
                                if (void 0 === (n = s[r])) {
                                    if (61 === r) break;
                                    o(r)
                                }
                                t((3 & i) << 6 >>> 0 | n)
                            }
                        }
                }, e.test = function(e) {
                    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)
                }, e
            })();
            s.toBase64 = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), t |= 0, (e |= 0) < 0 || t > this.capacity || t < e) throw RangeError("begin, end");
                var r;
                return l.encode(function() {
                    return e < t ? this.view[e++] : null
                }.bind(this), r = f()), r()
            }, g.fromBase64 = function(e, t) {
                if ("string" != typeof e) throw TypeError("str");
                var r = new g(e.length / 4 * 3, t),
                    i = 0;
                return l.decode(a(e), (function(e) {
                    r.view[i++] = e
                })), r.limit = i, r
            }, g.btoa = function(e) {
                return g.fromBinary(e).toBase64()
            }, g.atob = function(e) {
                return g.fromBase64(e).toBinary()
            }, s.toBinary = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), t |= 0, (e |= 0) < 0 || t > this.capacity() || t < e) throw RangeError("begin, end");
                if (e === t) return "";
                for (var r = [], i = []; e < t;) r.push(this.view[e++]), 1024 <= r.length && (i.push(String.fromCharCode.apply(String, r)), r = []);
                return i.join("") + String.fromCharCode.apply(String, r)
            }, g.fromBinary = function(e, t) {
                if ("string" != typeof e) throw TypeError("str");
                for (var r, i = 0, n = e.length, o = new g(n, t); i < n;) {
                    if (255 < (r = e.charCodeAt(i))) throw RangeError("illegal char code: " + r);
                    o.view[i++] = r
                }
                return o.limit = n, o
            }, s.toDebug = function(e) {
                for (var t, r = -1, i = this.buffer.byteLength, n = "", o = "", s = ""; r < i;) {
                    if (-1 !== r && (n += (t = this.view[r]) < 16 ? "0" + t.toString(16).toUpperCase() : t.toString(16).toUpperCase(), e && (o += 32 < t && t < 127 ? String.fromCharCode(t) : ".")), ++r, e && 0 < r && r % 16 == 0 && r !== i) {
                        for (; n.length < 51;) n += " ";
                        s += n + o + "\n", n = o = ""
                    }
                    r === this.offset && r === this.limit ? n += r === this.markedOffset ? "!" : "|" : r === this.offset ? n += r === this.markedOffset ? "[" : "<" : r === this.limit ? n += r === this.markedOffset ? "]" : ">" : n += r === this.markedOffset ? "'" : e || 0 !== r && r !== i ? " " : ""
                }
                if (e && " " !== n) {
                    for (; n.length < 51;) n += " ";
                    s += n + o + "\n"
                }
                return e ? s : n
            }, g.fromDebug = function(e, t, r) {
                for (var i, n, o = e.length, s = new g((o + 1) / 3 | 0, t, r), a = 0, u = 0, f = !1, l = !1, d = !1, c = !1, h = !1; a < o;) {
                    switch (i = e.charAt(a++)) {
                        case "!":
                            if (!r) {
                                if (l || d || c) {
                                    h = !0;
                                    break
                                }
                                l = d = c = !0
                            }
                            s.offset = s.markedOffset = s.limit = u, f = !1;
                            break;
                        case "|":
                            if (!r) {
                                if (l || c) {
                                    h = !0;
                                    break
                                }
                                l = c = !0
                            }
                            s.offset = s.limit = u, f = !1;
                            break;
                        case "[":
                            if (!r) {
                                if (l || d) {
                                    h = !0;
                                    break
                                }
                                l = d = !0
                            }
                            s.offset = s.markedOffset = u, f = !1;
                            break;
                        case "<":
                            if (!r) {
                                if (l) {
                                    h = !0;
                                    break
                                }
                                l = !0
                            }
                            s.offset = u, f = !1;
                            break;
                        case "]":
                            if (!r) {
                                if (c || d) {
                                    h = !0;
                                    break
                                }
                                c = d = !0
                            }
                            s.limit = s.markedOffset = u, f = !1;
                            break;
                        case ">":
                            if (!r) {
                                if (c) {
                                    h = !0;
                                    break
                                }
                                c = !0
                            }
                            s.limit = u, f = !1;
                            break;
                        case "'":
                            if (!r) {
                                if (d) {
                                    h = !0;
                                    break
                                }
                                d = !0
                            }
                            s.markedOffset = u, f = !1;
                            break;
                        case " ":
                            f = !1;
                            break;
                        default:
                            if (!r && f) {
                                h = !0;
                                break
                            }
                            if (n = parseInt(i + e.charAt(a++), 16), !r && (isNaN(n) || n < 0 || 255 < n)) throw TypeError("Illegal str: Not a debug encoded string");
                            s.view[u++] = n, f = !0
                    }
                    if (h) throw TypeError("Illegal str: Invalid symbol at " + a)
                }
                if (!r) {
                    if (!l || !c) throw TypeError("Illegal str: Missing offset or limit");
                    if (u < s.buffer.byteLength) throw TypeError("Illegal str: Not a debug encoded string (is it hex?) " + u + " < " + o)
                }
                return s
            }, s.toHex = function(e, t) {
                if (e = void 0 === e ? this.offset : e, t = void 0 === t ? this.limit : t, !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                    if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                    if (t >>>= 0, e < 0 || t < e || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                }
                for (var r, i = new Array(t - e); e < t;)(r = this.view[e++]) < 16 ? i.push("0", r.toString(16)) : i.push(r.toString(16));
                return i.join("")
            }, g.fromHex = function(e, t, r) {
                if (!r) {
                    if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                    if (e.length % 2 != 0) throw TypeError("Illegal str: Length not a multiple of 2")
                }
                for (var i, n = e.length, o = new g(n / 2 | 0, t), s = 0, a = 0; s < n; s += 2) {
                    if (i = parseInt(e.substring(s, s + 2), 16), !r && (!isFinite(i) || i < 0 || 255 < i)) throw TypeError("Illegal str: Contains non-hex characters");
                    o.view[a++] = i
                }
                return o.limit = a, o
            };
            var d, c = d = {
                MAX_CODEPOINT: 1114111,
                encodeUTF8: function(e, t) {
                    var r = null;
                    for ("number" == typeof e && (r = e, e = function() {
                            return null
                        }); null !== r || null !== (r = e());) r < 128 ? t(127 & r) : (r < 2048 ? t(r >> 6 & 31 | 192) : (r < 65536 ? t(r >> 12 & 15 | 224) : (t(r >> 18 & 7 | 240), t(r >> 12 & 63 | 128)), t(r >> 6 & 63 | 128)), t(63 & r | 128)), r = null
                },
                decodeUTF8: function(e, t) {
                    for (var r, i, n, o, s = function(e) {
                            e = e.slice(0, e.indexOf(null));
                            var t = Error(e.toString());
                            throw t.name = "TruncatedError", t.bytes = e, t
                        }; null !== (r = e());)
                        if (0 == (128 & r)) t(r);
                        else if (192 == (224 & r)) null === (i = e()) && s([r, i]), t((31 & r) << 6 | 63 & i);
                    else if (224 == (240 & r))(null === (i = e()) || null === (n = e())) && s([r, i, n]), t((15 & r) << 12 | (63 & i) << 6 | 63 & n);
                    else {
                        if (240 != (248 & r)) throw RangeError("Illegal starting byte: " + r);
                        (null === (i = e()) || null === (n = e()) || null === (o = e())) && s([r, i, n, o]), t((7 & r) << 18 | (63 & i) << 12 | (63 & n) << 6 | 63 & o)
                    }
                },
                UTF16toUTF8: function(e, t) {
                    for (var r, i = null; null !== (r = null !== i ? i : e());) 55296 <= r && r <= 57343 && null !== (i = e()) && 56320 <= i && i <= 57343 ? (t(1024 * (r - 55296) + i - 56320 + 65536), i = null) : t(r);
                    null !== i && t(i)
                },
                UTF8toUTF16: function(e, t) {
                    var r = null;
                    for ("number" == typeof e && (r = e, e = function() {
                            return null
                        }); null !== r || null !== (r = e());) r <= 65535 ? t(r) : (t(55296 + ((r -= 65536) >> 10)), t(r % 1024 + 56320)), r = null
                },
                encodeUTF16toUTF8: function(e, t) {
                    d.UTF16toUTF8(e, (function(e) {
                        d.encodeUTF8(e, t)
                    }))
                },
                decodeUTF8toUTF16: function(e, t) {
                    d.decodeUTF8(e, (function(e) {
                        d.UTF8toUTF16(e, t)
                    }))
                },
                calculateCodePoint: function(e) {
                    return e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4
                },
                calculateUTF8: function(e) {
                    for (var t, r = 0; null !== (t = e());) r += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
                    return r
                },
                calculateUTF16asUTF8: function(e) {
                    var t = 0,
                        r = 0;
                    return d.UTF16toUTF8(e, (function(e) {
                        ++t, r += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4
                    })), [t, r]
                }
            };
            return s.toUTF8 = function(t, r) {
                if (void 0 === t && (t = this.offset), void 0 === r && (r = this.limit), !this.noAssert) {
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                    if (t >>>= 0, "number" != typeof r || r % 1 != 0) throw TypeError("Illegal end: Not an integer");
                    if (r >>>= 0, t < 0 || r < t || r > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + r + " <= " + this.buffer.byteLength)
                }
                var e;
                try {
                    c.decodeUTF8toUTF16(function() {
                        return t < r ? this.view[t++] : null
                    }.bind(this), e = f())
                } catch (e) {
                    if (t !== r) throw RangeError("Illegal range: Truncated data, " + t + " != " + r)
                }
                return e()
            }, g.fromUTF8 = function(e, t, r) {
                if (!r && "string" != typeof e) throw TypeError("Illegal str: Not a string");
                var i = new g(c.calculateUTF16asUTF8(a(e), !0)[1], t, r),
                    n = 0;
                return c.encodeUTF16toUTF8(a(e), (function(e) {
                    i.view[n++] = e
                })), i.limit = n, i
            }, g
        }, n = [r(614)], void 0 === (o = "function" == typeof(i = s) ? i.apply(t, n) : i) || (e.exports = o)
    },
    614: function(e, t, r) {
        "use strict";
        var i, n, o;
        "function" == typeof Symbol && Symbol.iterator;
        n = [], void 0 === (o = "function" == typeof(i = function() {
            function i(e, t, r) {
                this.low = 0 | e, this.high = 0 | t, this.unsigned = !!r
            }

            function h(e) {
                return !0 === (e && e.__isLong__)
            }
            Object.defineProperty(i.prototype, "__isLong__", {
                value: !0,
                enumerable: !1,
                configurable: !1
            }), i.isLong = h;
            var o = {},
                s = {};

            function e(e, t) {
                var r, i, n;
                return t ? (n = 0 <= (e >>>= 0) && e < 256) && (i = s[e]) ? i : (r = p(e, (0 | e) < 0 ? -1 : 0, !0), n && (s[e] = r), r) : (n = -128 <= (e |= 0) && e < 128) && (i = o[e]) ? i : (r = p(e, e < 0 ? -1 : 0, !1), n && (o[e] = r), r)
            }

            function g(e, t) {
                if (isNaN(e) || !isFinite(e)) return t ? u : m;
                if (t) {
                    if (e < 0) return u;
                    if (n <= e) return w
                } else {
                    if (e <= -a) return T;
                    if (a <= e + 1) return E
                }
                return e < 0 ? g(-e, t).neg() : p(e % r | 0, e / r | 0, t)
            }

            function p(e, t, r) {
                return new i(e, t, r)
            }
            i.fromInt = e, i.fromNumber = g, i.fromBits = p;
            var l = Math.pow;

            function d(e, t, r) {
                if (0 === e.length) throw Error("empty string");
                if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) return m;
                if (t = "number" == typeof t ? (r = t, !1) : !!t, (r = r || 10) < 2 || 36 < r) throw RangeError("radix");
                var i;
                if (0 < (i = e.indexOf("-"))) throw Error("interior hyphen");
                if (0 === i) return d(e.substring(1), t, r).neg();
                for (var n = g(l(r, 8)), o = m, s = 0; s < e.length; s += 8) {
                    var a = Math.min(8, e.length - s),
                        u = parseInt(e.substring(s, s + a), r);
                    if (a < 8) {
                        var f = g(l(r, a));
                        o = o.mul(f).add(g(u))
                    } else o = (o = o.mul(n)).add(g(u))
                }
                return o.unsigned = t, o
            }

            function y(e) {
                return e instanceof i ? e : "number" == typeof e ? g(e) : "string" == typeof e ? d(e) : p(e.low, e.high, e.unsigned)
            }
            i.fromString = d, i.fromValue = y;
            var r = 4294967296,
                n = r * r,
                a = n / 2,
                v = e(1 << 24),
                m = e(0);
            i.ZERO = m;
            var u = e(0, !0);
            i.UZERO = u;
            var f = e(1);
            i.ONE = f;
            var c = e(1, !0);
            i.UONE = c;
            var b = e(-1);
            i.NEG_ONE = b;
            var E = p(-1, 2147483647, !1);
            i.MAX_VALUE = E;
            var w = p(-1, -1, !0);
            i.MAX_UNSIGNED_VALUE = w;
            var T = p(0, -2147483648, !1);
            i.MIN_VALUE = T;
            var t = i.prototype;
            return t.toInt = function() {
                return this.unsigned ? this.low >>> 0 : this.low
            }, t.toNumber = function() {
                return this.unsigned ? (this.high >>> 0) * r + (this.low >>> 0) : this.high * r + (this.low >>> 0)
            }, t.toString = function(e) {
                if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
                if (this.isZero()) return "0";
                if (this.isNegative()) {
                    if (this.eq(T)) {
                        var t = g(e),
                            r = this.div(t),
                            i = r.mul(t).sub(this);
                        return r.toString(e) + i.toInt().toString(e)
                    }
                    return "-" + this.neg().toString(e)
                }
                for (var n = g(l(e, 6), this.unsigned), o = this, s = "";;) {
                    var a = o.div(n),
                        u = (o.sub(a.mul(n)).toInt() >>> 0).toString(e);
                    if ((o = a).isZero()) return u + s;
                    for (; u.length < 6;) u = "0" + u;
                    s = "" + u + s
                }
            }, t.getHighBits = function() {
                return this.high
            }, t.getHighBitsUnsigned = function() {
                return this.high >>> 0
            }, t.getLowBits = function() {
                return this.low
            }, t.getLowBitsUnsigned = function() {
                return this.low >>> 0
            }, t.getNumBitsAbs = function() {
                if (this.isNegative()) return this.eq(T) ? 64 : this.neg().getNumBitsAbs();
                for (var e = 0 != this.high ? this.high : this.low, t = 31; 0 < t && 0 == (e & 1 << t); t--);
                return 0 != this.high ? t + 33 : t + 1
            }, t.isZero = function() {
                return 0 === this.high && 0 === this.low
            }, t.isNegative = function() {
                return !this.unsigned && this.high < 0
            }, t.isPositive = function() {
                return this.unsigned || 0 <= this.high
            }, t.isOdd = function() {
                return 1 == (1 & this.low)
            }, t.isEven = function() {
                return 0 == (1 & this.low)
            }, t.equals = function(e) {
                return h(e) || (e = y(e)), (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && (this.high === e.high && this.low === e.low)
            }, t.eq = t.equals, t.notEquals = function(e) {
                return !this.eq(e)
            }, t.neq = t.notEquals, t.lessThan = function(e) {
                return this.comp(e) < 0
            }, t.lt = t.lessThan, t.lessThanOrEqual = function(e) {
                return this.comp(e) <= 0
            }, t.lte = t.lessThanOrEqual, t.greaterThan = function(e) {
                return 0 < this.comp(e)
            }, t.gt = t.greaterThan, t.greaterThanOrEqual = function(e) {
                return 0 <= this.comp(e)
            }, t.gte = t.greaterThanOrEqual, t.compare = function(e) {
                if (h(e) || (e = y(e)), this.eq(e)) return 0;
                var t = this.isNegative(),
                    r = e.isNegative();
                return t && !r ? -1 : !t && r ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1
            }, t.comp = t.compare, t.negate = function() {
                return !this.unsigned && this.eq(T) ? T : this.not().add(f)
            }, t.neg = t.negate, t.add = function(e) {
                h(e) || (e = y(e));
                var t = this.high >>> 16,
                    r = 65535 & this.high,
                    i = this.low >>> 16,
                    n = 65535 & this.low,
                    o = e.high >>> 16,
                    s = 65535 & e.high,
                    a = e.low >>> 16,
                    u = 0,
                    f = 0,
                    l = 0,
                    d = 0;
                return l += (d += n + (65535 & e.low)) >>> 16, f += (l += i + a) >>> 16, u += (f += r + s) >>> 16, u += t + o, p((l &= 65535) << 16 | (d &= 65535), (u &= 65535) << 16 | (f &= 65535), this.unsigned)
            }, t.subtract = function(e) {
                return h(e) || (e = y(e)), this.add(e.neg())
            }, t.sub = t.subtract, t.multiply = function(e) {
                if (this.isZero()) return m;
                if (h(e) || (e = y(e)), e.isZero()) return m;
                if (this.eq(T)) return e.isOdd() ? T : m;
                if (e.eq(T)) return this.isOdd() ? T : m;
                if (this.isNegative()) return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
                if (e.isNegative()) return this.mul(e.neg()).neg();
                if (this.lt(v) && e.lt(v)) return g(this.toNumber() * e.toNumber(), this.unsigned);
                var t = this.high >>> 16,
                    r = 65535 & this.high,
                    i = this.low >>> 16,
                    n = 65535 & this.low,
                    o = e.high >>> 16,
                    s = 65535 & e.high,
                    a = e.low >>> 16,
                    u = 65535 & e.low,
                    f = 0,
                    l = 0,
                    d = 0,
                    c = 0;
                return d += (c += n * u) >>> 16, l += (d += i * u) >>> 16, d &= 65535, l += (d += n * a) >>> 16, f += (l += r * u) >>> 16, l &= 65535, f += (l += i * a) >>> 16, l &= 65535, f += (l += n * s) >>> 16, f += t * u + r * a + i * s + n * o, p((d &= 65535) << 16 | (c &= 65535), (f &= 65535) << 16 | (l &= 65535), this.unsigned)
            }, t.mul = t.multiply, t.divide = function(e) {
                if (h(e) || (e = y(e)), e.isZero()) throw Error("division by zero");
                if (this.isZero()) return this.unsigned ? u : m;
                var t, r, i;
                if (this.unsigned) {
                    if (e.unsigned || (e = e.toUnsigned()), e.gt(this)) return u;
                    if (e.gt(this.shru(1))) return c;
                    i = u
                } else {
                    if (this.eq(T)) return e.eq(f) || e.eq(b) ? T : e.eq(T) ? f : (t = this.shr(1).div(e).shl(1)).eq(m) ? e.isNegative() ? f : b : (r = this.sub(e.mul(t)), i = t.add(r.div(e)));
                    else if (e.eq(T)) return this.unsigned ? u : m;
                    if (this.isNegative()) return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
                    if (e.isNegative()) return this.div(e.neg()).neg();
                    i = m
                }
                for (r = this; r.gte(e);) {
                    t = Math.max(1, Math.floor(r.toNumber() / e.toNumber()));
                    for (var n = Math.ceil(Math.log(t) / Math.LN2), o = n <= 48 ? 1 : l(2, n - 48), s = g(t), a = s.mul(e); a.isNegative() || a.gt(r);) a = (s = g(t -= o, this.unsigned)).mul(e);
                    s.isZero() && (s = f), i = i.add(s), r = r.sub(a)
                }
                return i
            }, t.div = t.divide, t.modulo = function(e) {
                return h(e) || (e = y(e)), this.sub(this.div(e).mul(e))
            }, t.mod = t.modulo, t.not = function() {
                return p(~this.low, ~this.high, this.unsigned)
            }, t.and = function(e) {
                return h(e) || (e = y(e)), p(this.low & e.low, this.high & e.high, this.unsigned)
            }, t.or = function(e) {
                return h(e) || (e = y(e)), p(this.low | e.low, this.high | e.high, this.unsigned)
            }, t.xor = function(e) {
                return h(e) || (e = y(e)), p(this.low ^ e.low, this.high ^ e.high, this.unsigned)
            }, t.shiftLeft = function(e) {
                return h(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? p(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : p(0, this.low << e - 32, this.unsigned)
            }, t.shl = t.shiftLeft, t.shiftRight = function(e) {
                return h(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? p(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : p(this.high >> e - 32, 0 <= this.high ? 0 : -1, this.unsigned)
            }, t.shr = t.shiftRight, t.shiftRightUnsigned = function(e) {
                if (h(e) && (e = e.toInt()), 0 === (e &= 63)) return this;
                var t = this.high;
                return e < 32 ? p(this.low >>> e | t << 32 - e, t >>> e, this.unsigned) : p(32 === e ? t : t >>> e - 32, 0, this.unsigned)
            }, t.shru = t.shiftRightUnsigned, t.toSigned = function() {
                return this.unsigned ? p(this.low, this.high, !1) : this
            }, t.toUnsigned = function() {
                return this.unsigned ? this : p(this.low, this.high, !0)
            }, t.toBytes = function(e) {
                return e ? this.toBytesLE() : this.toBytesBE()
            }, t.toBytesLE = function() {
                var e = this.high,
                    t = this.low;
                return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255]
            }, t.toBytesBE = function() {
                var e = this.high,
                    t = this.low;
                return [e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t]
            }, i
        }) ? i.apply(t, n) : i) || (e.exports = o)
    },
    615: function(e, t) {},
    616: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.debounce = function(i, n, o) {
            var s;
            return function() {
                var e = this,
                    t = arguments,
                    r = o && !s;
                clearTimeout(s), s = setTimeout((function() {
                    s = null, o || i.apply(e, t)
                }), n), r && i.apply(e, t)
            }
        }, t.ajax = function(e, t, r) {
            try {
                var i = void 0;
                window.XMLHttpRequest ? i = new window.XMLHttpRequest : window.ActiveXObject && (i = new window.ActiveXObject("MSXML2.XMLHTTP.3.0")), i.open(t ? "POST" : "GET", e, !0), i.setRequestHeader("Content-Type", "text/plain;charset=utf8"), i.onreadystatechange = function() {
                    3 < i.readyState && r && r(i)
                }, i.send(t)
            } catch (e) {
                console.log(e)
            }
        }
    },
    617: function(e, t) {
        e.exports = {
            package: null,
            messages: [{
                name: "LogPrebidEvents",
                fields: [{
                    rule: "optional",
                    type: "fixed64",
                    name: "timestamp",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "remote_addr_macro",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "user_agent_macro",
                    id: 3
                }, {
                    rule: "optional",
                    type: "string",
                    name: "referer_url",
                    id: 4
                }, {
                    rule: "optional",
                    type: "uint32",
                    name: "seller_member_id",
                    id: 5
                }, {
                    rule: "repeated",
                    type: "Auction",
                    name: "auctions",
                    id: 6
                }],
                messages: [{
                    name: "Auction",
                    fields: [{
                        rule: "optional",
                        type: "string",
                        name: "version",
                        id: 1
                    }, {
                        rule: "optional",
                        type: "fixed64",
                        name: "auction_init_timestamp",
                        id: 2
                    }, {
                        rule: "optional",
                        type: "string",
                        name: "prebid_auction_id",
                        id: 3
                    }, {
                        rule: "optional",
                        type: "uint32",
                        name: "configured_timeout_ms",
                        id: 4
                    }, {
                        rule: "repeated",
                        type: "AdUnit",
                        name: "ad_units",
                        id: 5
                    }],
                    messages: [{
                        name: "AdUnit",
                        fields: [{
                            rule: "optional",
                            type: "string",
                            name: "ad_unit_code",
                            id: 1
                        }, {
                            rule: "repeated",
                            type: "Bid",
                            name: "bids",
                            id: 2
                        }],
                        messages: [{
                            name: "Bid",
                            fields: [{
                                rule: "optional",
                                type: "string",
                                name: "bid_id",
                                id: 1
                            }, {
                                rule: "optional",
                                type: "double",
                                name: "price",
                                id: 2
                            }, {
                                rule: "optional",
                                type: "string",
                                name: "bidder_code",
                                id: 3
                            }, {
                                rule: "optional",
                                type: "string",
                                name: "bidder_ad_unit_id",
                                id: 4
                            }, {
                                rule: "optional",
                                type: "fixed64",
                                name: "request_timestamp",
                                id: 5
                            }, {
                                rule: "optional",
                                type: "fixed64",
                                name: "response_timestamp",
                                id: 6
                            }, {
                                rule: "optional",
                                type: "uint32",
                                name: "status_code",
                                id: 7
                            }, {
                                rule: "optional",
                                type: "string",
                                name: "source",
                                id: 9
                            }, {
                                rule: "optional",
                                type: "Creative",
                                name: "creative",
                                id: 8
                            }],
                            messages: [{
                                name: "Creative",
                                fields: [{
                                    rule: "optional",
                                    type: "string",
                                    name: "creative_id",
                                    id: 1
                                }, {
                                    rule: "optional",
                                    type: "uint32",
                                    name: "width",
                                    id: 2
                                }, {
                                    rule: "optional",
                                    type: "uint32",
                                    name: "height",
                                    id: 3
                                }, {
                                    rule: "optional",
                                    type: "string",
                                    name: "brand",
                                    id: 4
                                }]
                            }]
                        }]
                    }]
                }]
            }]
        }
    },
    618: function(e, t, r) {
        "use strict";
        var i, n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                }
                return e
            },
            s = r(43),
            a = r(0),
            u = r(619),
            f = r(18),
            l = r(30),
            d = r(3),
            c = r(31),
            h = r(44),
            g = r(20),
            p = r(620),
            y = r(7),
            v = (i = y) && i.__esModule ? i : {
                default: i
            },
            m = r(41),
            b = r(12);
        var E = (0, s.getGlobal)(),
            w = r(4),
            T = r(0),
            S = r(8),
            I = r(16),
            A = r(9),
            _ = f.userSync.triggerUserSyncs,
            R = w.EVENTS,
            O = R.ADD_AD_UNITS,
            P = R.BID_WON,
            B = R.REQUEST_BIDS,
            N = R.SET_TARGETING,
            U = R.AD_RENDER_FAILED,
            C = w.AD_RENDER_FAILED_REASON,
            x = C.PREVENT_WRITING_ON_MAIN_DOCUMENT,
            k = C.NO_AD,
            L = C.EXCEPTION,
            j = C.CANNOT_FIND_AD,
            M = C.MISSING_DOC_OR_ADID,
            D = {
                bidWon: function(e) {
                    var t = c.auctionManager.getBidsRequested().map((function(e) {
                        return e.bids.map((function(e) {
                            return e.adUnitCode
                        }))
                    })).reduce(a.flatten).filter(a.uniques);
                    return !!T.contains(t, e) || void T.logError('The "' + e + '" placement is not defined.')
                }
            };

        function V(e, t, r) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = r)
        }

        function Y(e, t, r) {
            var i = {};
            i.reason = e, i.message = t, r && (i.bid = r), T.logError(t), A.emit(U, i)
        }

        function q(e) {
            e.forEach((function(e) {
                if (void 0 === e.called) try {
                    e.call(), e.called = !0
                } catch (e) {
                    T.logError("Error processing command :", "prebid.js", e)
                }
            }))
        }(0, p.sessionLoader)(), E.bidderSettings = E.bidderSettings || {}, E.libLoaded = !0, E.version = "v1.30.0", T.logInfo("Prebid.js v1.30.0 loaded"), E.adUnits = E.adUnits || [], E.triggerUserSyncs = _, E.getAdserverTargetingForAdUnitCodeStr = function(e) {
            if (T.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                var t = E.getAdserverTargetingForAdUnitCode(e);
                return T.transformAdServerTargetingObj(t)
            }
            T.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
        }, E.getAdserverTargetingForAdUnitCode = function(e) {
            return E.getAdserverTargeting(e)[e]
        }, E.getAdserverTargeting = function(e) {
            return T.logInfo("Invoking pbjs.getAdserverTargeting", arguments), h.targeting.getAllTargeting(e)
        }, E.getBidResponses = function() {
            T.logInfo("Invoking pbjs.getBidResponses", arguments);
            var e = c.auctionManager.getBidsReceived().filter(a.adUnitsFilter.bind(this, c.auctionManager.getAdUnitCodes())),
                r = e && e.length && e[e.length - 1].auctionId;
            return e.map((function(e) {
                return e.adUnitCode
            })).filter(a.uniques).map((function(t) {
                return e.filter((function(e) {
                    return e.auctionId === r && e.adUnitCode === t
                }))
            })).filter((function(e) {
                return e && e[0] && e[0].adUnitCode
            })).map((function(e) {
                return t = {}, r = e[0].adUnitCode, i = {
                    bids: e.map(a.removeRequestId)
                }, r in t ? Object.defineProperty(t, r, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[r] = i, t;
                var t, r, i
            })).reduce((function(e, t) {
                return o(e, t)
            }), {})
        }, E.getBidResponsesForAdUnitCode = function(t) {
            return {
                bids: c.auctionManager.getBidsReceived().filter((function(e) {
                    return e.adUnitCode === t
                })).map(a.removeRequestId)
            }
        }, E.setTargetingForGPTAsync = function(e, t) {
            if (T.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), (0, a.isGptPubadsDefined)()) {
                var r = h.targeting.getAllTargeting(e);
                h.targeting.resetPresetTargeting(e), h.targeting.setTargetingForGPT(r, t), Object.keys(r).forEach((function(t) {
                    Object.keys(r[t]).forEach((function(e) {
                        "hb_adid" === e && c.auctionManager.setStatusForBids(r[t][e], h.BID_TARGETING_SET)
                    }))
                })), A.emit(N, r)
            } else T.logError("window.googletag is not defined on the page")
        }, E.setTargetingForAst = function() {
            T.logInfo("Invoking pbjs.setTargetingForAn", arguments), h.targeting.isApntagDefined() ? (h.targeting.setTargetingForAst(), A.emit(N, h.targeting.getAllTargeting())) : T.logError("window.apntag is not defined on the page")
        }, E.renderAd = function(e, t) {
            if (T.logInfo("Invoking pbjs.renderAd", arguments), T.logMessage("Calling renderAd with adId :" + t), e && t) try {
                var r = c.auctionManager.findBidByAdId(t);
                if (r) {
                    r.status = h.RENDERED, r.ad = T.replaceAuctionPrice(r.ad, r.cpm), r.adUrl = T.replaceAuctionPrice(r.adUrl, r.cpm), c.auctionManager.addWinningBid(r), A.emit(P, r);
                    var i = r.height,
                        n = r.width,
                        o = r.ad,
                        s = r.mediaType,
                        a = r.adUrl,
                        u = r.renderer,
                        f = document.createComment("Creative " + r.creativeId + " served by " + r.bidder + " Prebid.js Header Bidding");
                    if (T.insertElement(f, e, "body"), (0, b.isRendererRequired)(u))(0, b.executeRenderer)(u, r);
                    else if (e === document && !T.inIframe() || "video" === s) {
                        Y(x, "Error trying to write ad. Ad render call ad id " + t + " was prevented from writing to the main document.", r)
                    } else if (o) e.write(o), e.close(), V(e, n, i), T.callBurl(r);
                    else if (a) {
                        var l = T.createInvisibleIframe();
                        l.height = i, l.width = n, l.style.display = "inline", l.style.overflow = "hidden", l.src = a, T.insertElement(l, e, "body"), V(e, n, i), T.callBurl(r)
                    } else {
                        Y(k, "Error trying to write ad. No ad for bid response id: " + t, r)
                    }
                } else {
                    Y(j, "Error trying to write ad. Cannot find ad by given id : " + t)
                }
            } catch (e) {
                var d = "Error trying to write ad Id :" + t + " to the page:" + e.message;
                Y(L, d)
            } else Y(M, "Error trying to write ad Id :" + t + " to the page. Missing document or adId")
        }, E.removeAdUnit = function(e) {
            if (T.logInfo("Invoking pbjs.removeAdUnit", arguments), e)
                for (var t = 0; t < E.adUnits.length; t++) E.adUnits[t].code === e && E.adUnits.splice(t, 1)
        }, E.requestBids = (0, g.createHook)("asyncSeries", (function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.bidsBackHandler,
                r = e.timeout,
                i = e.adUnits,
                n = e.adUnitCodes,
                o = e.labels;
            A.emit(B);
            var s = r || d.config.getConfig("bidderTimeout");
            if (i = i || E.adUnits, T.logInfo("Invoking pbjs.requestBids", arguments), n && n.length ? i = i.filter((function(e) {
                    return (0, v.default)(n, e.code)
                })) : n = i && i.map((function(e) {
                    return e.code
                })), i.forEach((function(n) {
                    var o = Object.keys(n.mediaTypes || {
                            banner: "banner"
                        }),
                        e = n.bids.map((function(e) {
                            return e.bidder
                        })),
                        s = S.bidderRegistry,
                        t = d.config.getConfig("s2sConfig"),
                        r = t && t.bidders,
                        i = r ? e.filter((function(e) {
                            return !(0, v.default)(r, e)
                        })) : e;
                    n.transactionId || (n.transactionId = T.generateUUID()), i.forEach((function(t) {
                        var e = s[t],
                            r = e && e.getSpec && e.getSpec(),
                            i = r && r.supportedMediaTypes || ["banner"];
                        o.some((function(e) {
                            return (0, v.default)(i, e)
                        })) || (T.logWarn(T.unsupportedBidderMessage(n, t)), n.bids = n.bids.filter((function(e) {
                            return e.bidder !== t
                        })))
                    })), m.adunitCounter.incrementCounter(n.code)
                })), i && 0 !== i.length) {
                var a = c.auctionManager.createAuction({
                    adUnits: i,
                    adUnitCodes: n,
                    callback: t,
                    cbTimeout: s,
                    labels: o
                });
                return a.callBids(), a
            }
            if (T.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
                t()
            } catch (e) {
                T.logError("Error executing bidsBackHandler", null, e)
            }
        })), E.addAdUnits = function(e) {
            T.logInfo("Invoking pbjs.addAdUnits", arguments), T.isArray(e) ? E.adUnits.push.apply(E.adUnits, e) : "object" === (void 0 === e ? "undefined" : n(e)) && E.adUnits.push(e), A.emit(O)
        }, E.onEvent = function(e, t, r) {
            T.logInfo("Invoking pbjs.onEvent", arguments), T.isFn(t) ? !r || D[e].call(null, r) ? A.on(e, t, r) : T.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : T.logError('The event handler provided is not a function and was not set on event "' + e + '".')
        }, E.offEvent = function(e, t, r) {
            T.logInfo("Invoking pbjs.offEvent", arguments), r && !D[e].call(null, r) || A.off(e, t, r)
        }, E.registerBidAdapter = function(e, t) {
            T.logInfo("Invoking pbjs.registerBidAdapter", arguments);
            try {
                S.registerBidAdapter(e(), t)
            } catch (e) {
                T.logError("Error registering bidder adapter : " + e.message)
            }
        }, E.registerAnalyticsAdapter = function(e) {
            T.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
            try {
                S.registerAnalyticsAdapter(e)
            } catch (e) {
                T.logError("Error registering analytics adapter : " + e.message)
            }
        }, E.createBid = function(e) {
            return T.logInfo("Invoking pbjs.createBid", arguments), I.createBid(e)
        }, E.loadScript = function(e, t, r) {
            T.logInfo("Invoking pbjs.loadScript", arguments), (0, l.loadScript)(e, t, r)
        }, E.enableAnalytics = function(e) {
            e && !T.isEmpty(e) ? (T.logInfo("Invoking pbjs.enableAnalytics for: ", e), S.enableAnalytics(e)) : T.logError("pbjs.enableAnalytics should be called with option {}")
        }, E.aliasBidder = function(e, t) {
            T.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? S.aliasBidAdapter(e, t) : T.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
        }, E.getAllWinningBids = function() {
            return c.auctionManager.getAllWinningBids().map(a.removeRequestId)
        }, E.getAllPrebidWinningBids = function() {
            return c.auctionManager.getBidsReceived().filter((function(e) {
                return e.status === h.BID_TARGETING_SET
            })).map(a.removeRequestId)
        }, E.getHighestCpmBids = function(e) {
            var t = (0, h.getHighestCpmBidsFromBidPool)(c.auctionManager.getBidsReceived(), a.getLatestHighestCpmBid);
            return h.targeting.getWinningBids(e, t).map(a.removeRequestId)
        }, E.markWinningBidAsUsed = function(t) {
            var e = [];
            t.adUnitCode && t.adId ? e = c.auctionManager.getBidsReceived().filter((function(e) {
                return e.adId === t.adId && e.adUnitCode === t.adUnitCode
            })) : t.adUnitCode ? e = h.targeting.getWinningBids(t.adUnitCode) : t.adId ? e = c.auctionManager.getBidsReceived().filter((function(e) {
                return e.adId === t.adId
            })) : T.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."), 0 < e.length && (e[0].status = h.RENDERED)
        }, E.getConfig = d.config.getConfig, E.setConfig = d.config.setConfig, E.que.push((function() {
            return (0, u.listenMessagesFromCreative)()
        })), E.cmd.push = function(e) {
            if ("function" == typeof e) try {
                e.call()
            } catch (e) {
                T.logError("Error processing command :", e.message, e.stack)
            } else T.logError("Commands written into pbjs.cmd.push must be wrapped in a function")
        }, E.que.push = E.cmd.push, E.processQueue = function() {
            q(E.que), q(E.cmd)
        }
    },
    619: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.listenMessagesFromCreative = function() {
            addEventListener("message", o, !1)
        };
        var v = n(r(9)),
            m = r(17),
            i = r(4),
            b = r(0),
            E = r(31),
            w = n(r(10)),
            T = r(12);

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var S = i.EVENTS.BID_WON;

        function o(e) {
            var t, r, i, n, o, s, a, u, f, l, d, c, h, g = e.message ? "message" : "data",
                p = {};
            try {
                p = JSON.parse(e[g])
            } catch (e) {
                return
            }
            if (p && p.adId) {
                var y = (0, w.default)(E.auctionManager.getBidsReceived(), (function(e) {
                    return e.adId === p.adId
                }));
                "Prebid Request" === p.message && (t = y, r = p.adServerDomain, i = e.source, n = t.adId, o = t.ad, s = t.adUrl, a = t.width, u = t.height, f = t.renderer, (0, T.isRendererRequired)(f) ? (0, T.executeRenderer)(f, t) : n && (d = (l = t).adUnitCode, c = l.width, h = l.height, ["div", "iframe"].forEach((function(e) {
                    var t, r = (t = e, document.getElementById((0, w.default)(window.googletag.pubads().getSlots().filter((0, b.isSlotMatchingAdUnitCode)(d)), (function(e) {
                        return e
                    })).getSlotElementId()).querySelector(t)).style;
                    r.width = c + "px", r.height = h + "px"
                })), i.postMessage(JSON.stringify({
                    message: "Prebid Response",
                    ad: o,
                    adUrl: s,
                    adId: n,
                    width: a,
                    height: u
                }), r)), E.auctionManager.addWinningBid(y), v.default.emit(S, y)), "Prebid Native" === p.message && ((0, m.fireNativeTrackers)(p, y), E.auctionManager.addWinningBid(y), v.default.emit(S, y))
            }
        }
    },
    62: function(e, t) {
        e.exports = !0
    },
    620: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.boundHook = void 0;
        var o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
            }
            return e
        };
        r.disableOverrides = d, r.addBidResponseHook = c, r.getConfig = h, r.sessionLoader = function(e) {
            var t = void 0;
            try {
                e = e || window.sessionStorage, t = JSON.parse(e.getItem(a))
            } catch (e) {}
            t && l(t, !0)
        };
        var i = t(3),
            s = t(0),
            n = t(45),
            a = "pbjs:debugging",
            u = r.boundHook = void 0;

        function f(e) {
            (0, s.logMessage)("DEBUG: " + e)
        }

        function l(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            i.config.setConfig({
                debug: !0
            }), f("bidder overrides enabled" + (t ? " from session" : "")), u && n.addBidResponse.removeHook(u), r.boundHook = u = c.bind(null, e), n.addBidResponse.addHook(u, 5)
        }

        function d() {
            u && (n.addBidResponse.removeHook(u), f("bidder overrides disabled"))
        }

        function c(e, i, n, t) {
            if (Array.isArray(e.bidders) && -1 === e.bidders.indexOf(n.bidderCode)) return r = "bidder '" + n.bidderCode + "' excluded from auction by bidder overrides", void(0, s.logWarn)("DEBUG: " + r);
            var r;
            Array.isArray(e.bids) && e.bids.forEach((function(r) {
                r.bidder && r.bidder !== n.bidderCode || r.adUnitCode && r.adUnitCode !== i || (n = o({}, n), Object.keys(r).filter((function(e) {
                    return -1 === ["bidder", "adUnitCode"].indexOf(e)
                })).forEach((function(e) {
                    var t = r[e];
                    f("bidder overrides changed '" + i + "/" + n.bidderCode + "' bid." + e + " from '" + n[e] + "' to '" + t + "'"), n[e] = t
                })))
            })), t(i, n)
        }

        function h(e) {
            if (e.enabled) {
                try {
                    window.sessionStorage.setItem(a, JSON.stringify(e))
                } catch (e) {}
                l(e)
            } else {
                d();
                try {
                    window.sessionStorage.removeItem(a)
                } catch (e) {}
            }
        }
        i.config.getConfig("debugging", (function(e) {
            return h(e.debugging)
        }))
    },
    63: function(e, t) {
        var r = 0,
            i = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + i).toString(36))
        }
    },
    64: function(e, t, r) {
        "use strict";
        var i = r(14),
            n = r(65)(!0);
        i(i.P, "Array", {
            includes: function(e) {
                return n(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), r(28)("includes")
    },
    65: function(e, t, r) {
        var u = r(66),
            f = r(37),
            l = r(67);
        e.exports = function(a) {
            return function(e, t, r) {
                var i, n = u(e),
                    o = f(n.length),
                    s = l(r, o);
                if (a && t != t) {
                    for (; s < o;)
                        if ((i = n[s++]) != i) return !0
                } else
                    for (; s < o; s++)
                        if ((a || s in n) && n[s] === t) return a || s || 0;
                return !a && -1
            }
        }
    },
    66: function(e, t, r) {
        var i = r(36),
            n = r(26);
        e.exports = function(e) {
            return i(n(e))
        }
    },
    67: function(e, t, r) {
        var i = r(38),
            n = Math.max,
            o = Math.min;
        e.exports = function(e, t) {
            return (e = i(e)) < 0 ? n(e + t, 0) : o(e, t)
        }
    },
    68: function(e, t) {
        e.exports = function e(t) {
            var r = Array.isArray(t) ? [] : {};
            for (var i in t) {
                var n = t[i];
                r[i] = n && "object" == typeof n ? e(n) : n
            }
            return r
        }
    },
    69: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getRefererInfo = void 0, t.detectReferer = i;
        var s = r(0);

        function i(n) {
            function o() {
                var e = (function() {
                        var t = [],
                            r = void 0;
                        do {
                            try {
                                r = r ? r.parent : n;
                                try {
                                    t.push({
                                        referrer: r.document.referrer || null,
                                        location: r.location.href || null,
                                        isTop: r == n.top
                                    })
                                } catch (e) {
                                    t.push({
                                        referrer: null,
                                        location: null,
                                        isTop: r == n.top
                                    }), (0, s.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location")
                                }
                            } catch (e) {
                                return t.push({
                                    referrer: null,
                                    location: null,
                                    isTop: !1
                                }), t
                            }
                        } while (r != n.top);
                        return t
                    })(),
                    t = (function() {
                        try {
                            if (!n.location.ancestorOrigins) return;
                            return n.location.ancestorOrigins
                        } catch (e) {}
                    })();
                if (t)
                    for (var r = 0, i = t.length; r < i; r++) e[r].ancestor = t[r];
                return e
            }
            return function() {
                try {
                    var e = o(),
                        t = e.length - 1,
                        r = null !== e[t].location || 0 < t && null !== e[t - 1].referrer,
                        i = (function(e) {
                            var t = [],
                                r = null,
                                i = null,
                                n = null,
                                o = null,
                                s = null,
                                a = void 0;
                            for (a = e.length - 1; 0 <= a; a--) {
                                try {
                                    r = e[a].location
                                } catch (e) {}
                                if (r) t.push(r), s || (s = r);
                                else if (0 !== a) {
                                    i = e[a - 1];
                                    try {
                                        n = i.referrer, o = i.ancestor
                                    } catch (e) {}
                                    n ? (t.push(n), s || (s = n)) : o ? (t.push(o), s || (s = o)) : t.push(null)
                                } else t.push(null)
                            }
                            return {
                                stack: t,
                                detectedRefererUrl: s
                            }
                        })(e);
                    return {
                        referer: i.detectedRefererUrl,
                        reachedTop: r,
                        numIframes: t,
                        stack: i.stack
                    }
                } catch (e) {}
            }
        }
        t.getRefererInfo = i(window)
    },
    7: function(e, t, r) {
        r(64), e.exports = r(13).Array.includes
    },
    8: function(e, b, t) {
        "use strict";
        var m = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return (function(e, t) {
                    var r = [],
                        i = !0,
                        n = !1,
                        o = void 0;
                    try {
                        for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (r.push(s.value), !t || r.length !== t); i = !0);
                    } catch (e) {
                        n = !0, o = e
                    } finally {
                        try {
                            !i && a.return && a.return()
                        } finally {
                            if (n) throw o
                        }
                    }
                    return r
                })(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            h = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                }
                return e
            },
            E = t(0),
            g = t(40),
            p = t(17),
            l = t(1),
            w = t(6),
            T = t(3),
            S = r(t(7)),
            I = r(t(10)),
            y = t(41),
            A = t(69);

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var _ = t(0),
            R = t(4),
            O = t(9),
            P = void 0,
            B = {};
        b.bidderRegistry = B, b.aliasRegistry = {};
        var N = {};
        T.config.getConfig("s2sConfig", (function(e) {
            N = e.s2sConfig
        }));
        var i = {};

        function U(e) {
            var n = e.bidderCode,
                f = e.auctionId,
                l = e.bidderRequestId,
                t = e.adUnits,
                d = e.labels,
                c = e.src;
            return t.reduce((function(e, a) {
                var t = (0, g.resolveStatus)((0, g.getLabels)(a, d), a.mediaTypes, a.sizes),
                    r = t.active,
                    u = t.mediaTypes,
                    i = t.filterResults;
                return r ? i && _.logInfo('Size mapping filtered adUnit "' + a.code + '" banner sizes from ', i.before, "to ", i.after) : _.logInfo('Size mapping disabled adUnit "' + a.code + '"'), r && e.push(a.bids.filter((function(e) {
                    return e.bidder === n
                })).reduce((function(e, t) {
                    var r = a.nativeParams || _.deepAccess(a, "mediaTypes.native");
                    r && (t = h({}, t, {
                        nativeParams: (0, p.processNativeAdUnitParams)(r)
                    })), t = h({}, t, (0, E.getDefinedParams)(a, ["mediaType", "renderer"]));
                    var i = (0, g.resolveStatus)((0, g.getLabels)(t, d), u),
                        n = i.active,
                        o = i.mediaTypes,
                        s = i.filterResults;
                    return n ? s && _.logInfo('Size mapping filtered adUnit "' + a.code + '" bidder "' + t.bidder + '" banner sizes from ', s.before, "to ", s.after) : _.logInfo('Size mapping deactivated adUnit "' + a.code + '" bidder "' + t.bidder + '"'), _.isValidMediaTypes(o) ? t = h({}, t, {
                        mediaTypes: o
                    }) : _.logError("mediaTypes is not correctly configured for adunit " + a.code), n && e.push(h({}, t, {
                        adUnitCode: a.code,
                        transactionId: a.transactionId,
                        sizes: _.deepAccess(o, "banner.sizes") || [],
                        bidId: t.bid_id || _.getUniqueIdentifierStr(),
                        bidderRequestId: l,
                        auctionId: f,
                        src: c,
                        bidRequestsCount: y.adunitCounter.getCounter(a.code)
                    })), e
                }), [])), e
            }), []).reduce(E.flatten, []).filter((function(e) {
                return "" !== e
            }))
        }

        function C() {
            return N && N.enabled && N.testing && P
        }

        function n(t, r, e) {
            try {
                var i = B[t].getSpec();
                i && i[r] && "function" == typeof i[r] && (_.logInfo("Invoking " + t + "." + r), i[r](e))
            } catch (e) {
                _.logWarn("Error calling " + r + " of " + t)
            }
        }
        b.gdprDataHandler = {
            consentData: null,
            setConsentData: function(e) {
                this.consentData = e
            },
            getConsentData: function() {
                return this.consentData
            }
        }, b.makeBidRequests = function(e, n, o, s, a) {
            var u = [];
            e = b.checkBidRequestSizes(e);
            var t = (0, E.getBidderCodes)(e);
            T.config.getConfig("bidderSequence") === T.RANDOM && (t = (0, E.shuffle)(t));
            var r, i, f, l = (0, A.getRefererInfo)(),
                d = t,
                c = [];
            if (N.enabled) {
                C() && (c = P.getSourceBidderMap(e)[P.CLIENT]);
                var h = N.bidders;
                d = t.filter((function(e) {
                    return !(0, S.default)(h, e) || (0, S.default)(c, e)
                }));
                var g = (r = e, i = N.bidders, (f = _.deepClone(r)).forEach((function(e) {
                        e.bids = e.bids.filter((function(e) {
                            return (0, S.default)(i, e.bidder) && (!C() || e.finalSource !== P.CLIENT)
                        })).map((function(e) {
                            return e.bid_id = _.getUniqueIdentifierStr(), e
                        }))
                    })), f = f.filter((function(e) {
                        return 0 !== e.bids.length
                    }))),
                    p = _.generateUUID();
                h.forEach((function(e) {
                    var t = _.getUniqueIdentifierStr(),
                        r = {
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            tid: p,
                            bids: U({
                                bidderCode: e,
                                auctionId: o,
                                bidderRequestId: t,
                                adUnits: _.deepClone(g),
                                labels: a,
                                src: R.S2S.SRC
                            }),
                            auctionStart: n,
                            timeout: N.timeout,
                            src: R.S2S.SRC,
                            refererInfo: l
                        };
                    0 !== r.bids.length && u.push(r)
                })), g.forEach((function(e) {
                    var t = e.bids.filter((function(t) {
                        return (0, I.default)(u, (function(e) {
                            return (0, I.default)(e.bids, (function(e) {
                                return e.bidId === t.bid_id
                            }))
                        }))
                    }));
                    e.bids = t
                })), u.forEach((function(e) {
                    e.adUnitsS2SCopy = g.filter((function(e) {
                        return 0 < e.bids.length
                    }))
                }))
            }
            var y, v, m = (y = e, (v = _.deepClone(y)).forEach((function(e) {
                e.bids = e.bids.filter((function(e) {
                    return !C() || e.finalSource !== P.SERVER
                }))
            })), v = v.filter((function(e) {
                return 0 !== e.bids.length
            })));
            return d.forEach((function(e) {
                var t = _.getUniqueIdentifierStr(),
                    r = {
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        bids: U({
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            adUnits: _.deepClone(m),
                            labels: a,
                            src: "client"
                        }),
                        auctionStart: n,
                        timeout: s,
                        refererInfo: l
                    },
                    i = B[e];
                i || _.logError("Trying to make a request for bidder that does not exist: " + e), i && r.bids && 0 !== r.bids.length && u.push(r)
            })), b.gdprDataHandler.getConsentData() && u.forEach((function(e) {
                e.gdprConsent = b.gdprDataHandler.getConsentData()
            })), u
        }, b.checkBidRequestSizes = function(e) {
            function a(e) {
                return Array.isArray(e) && 2 === e.length && _.isInteger(e[0]) && _.isInteger(e[1])
            }
            return e.forEach((function(e) {
                var t = e.mediaTypes,
                    r = _.getAdUnitSizes(e);
                if (t && t.banner) {
                    var i = t.banner;
                    i.sizes ? (i.sizes = r, e.sizes = r) : (_.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."), delete e.mediaTypes.banner)
                } else e.sizes && (_.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes)."), e.sizes = r);
                if (t && t.video) {
                    var n = t.video;
                    if (n.playerSize)
                        if (Array.isArray(n.playerSize) && 1 === n.playerSize.length && n.playerSize.every(a)) e.sizes = n.playerSize;
                        else if (a(n.playerSize)) {
                        var o = [];
                        o.push(n.playerSize), _.logInfo("Transforming video.playerSize from " + n.playerSize + " to " + o + " so it's in the proper format."), e.sizes = n.playerSize = o
                    } else _.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete e.mediaTypes.video.playerSize
                }
                if (t && t.native) {
                    var s = t.native;
                    s.image && s.image.sizes && !Array.isArray(s.image.sizes) && (_.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete e.mediaTypes.native.image.sizes), s.image && s.image.aspect_ratios && !Array.isArray(s.image.aspect_ratios) && (_.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete e.mediaTypes.native.image.aspect_ratios), s.icon && s.icon.sizes && !Array.isArray(s.icon.sizes) && (_.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete e.mediaTypes.native.icon.sizes)
                }
            })), e
        }, b.callBids = function(e, t, i, n, o, s) {
            if (t.length) {
                var r = t.reduce((function(e, t) {
                        return e[Number(void 0 !== t.src && t.src === R.S2S.SRC)].push(t), e
                    }), [
                        [],
                        []
                    ]),
                    a = m(r, 2),
                    u = a[0],
                    f = a[1];
                if (f.length) {
                    var l = (0, w.ajaxBuilder)(s, o ? {
                            request: o.request.bind(null, "s2s"),
                            done: o.done
                        } : void 0),
                        d = N.bidders,
                        c = B[N.adapter],
                        h = f[0].tid,
                        g = f[0].adUnitsS2SCopy;
                    if (c) {
                        var p = {
                            tid: h,
                            ad_units: g
                        };
                        if (p.ad_units.length) {
                            var y = f.map((function(e) {
                                    return e.start = (0, E.timestamp)(), n
                                })),
                                v = p.ad_units.reduce((function(e, t) {
                                    return e.concat((t.bids || []).reduce((function(e, t) {
                                        return e.concat(t.bidder)
                                    }), []))
                                }), []);
                            _.logMessage("CALLING S2S HEADER BIDDERS ==== " + d.filter((function(e) {
                                return (0, S.default)(v, e)
                            })).join(",")), f.forEach((function(e) {
                                O.emit(R.EVENTS.BID_REQUESTED, e)
                            })), c.callBids(p, f, i, (function() {
                                return y.forEach((function(e) {
                                    return e()
                                }))
                            }), l)
                        }
                    }
                }
                u.forEach((function(e) {
                    e.start = (0, E.timestamp)();
                    var t = B[e.bidderCode];
                    _.logMessage("CALLING BIDDER ======= " + e.bidderCode), O.emit(R.EVENTS.BID_REQUESTED, e);
                    var r = (e.doneCbCallCount = 0, w.ajaxBuilder)(s, o ? {
                        request: o.request.bind(null, e.bidderCode),
                        done: o.done
                    } : void 0);
                    t.callBids(e, i, n, r)
                }))
            } else _.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
        }, b.videoAdapters = [], b.registerBidAdapter = function(e, t) {
            var r = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
                i = void 0 === r ? [] : r;
            e && t ? "function" == typeof e.callBids ? (B[t] = e, (0, S.default)(i, "video") && b.videoAdapters.push(t), (0, S.default)(i, "native") && p.nativeAdapters.push(t)) : _.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : _.logError("bidAdaptor or bidderCode not specified")
        }, b.aliasBidAdapter = function(t, e) {
            var r, i;
            if (void 0 === B[e]) {
                var n = B[t];
                if (void 0 === n) {
                    var o = T.config.getConfig("s2sConfig"),
                        s = o && o.bidders;
                    s && (0, S.default)(s, e) ? b.aliasRegistry[e] = t : _.logError('bidderCode "' + t + '" is not an existing bidder.', "adaptermanager.aliasBidAdapter")
                } else try {
                    var a = void 0,
                        u = (r = t, i = [], (0, S.default)(b.videoAdapters, r) && i.push("video"), (0, S.default)(p.nativeAdapters, r) && i.push("native"), i);
                    if (n.constructor.prototype != Object.prototype)(a = new n.constructor).setBidderCode(e);
                    else {
                        var f = n.getSpec();
                        a = (0, l.newBidder)(h({}, f, {
                            code: e
                        })), b.aliasRegistry[e] = t
                    }
                    this.registerBidAdapter(a, e, {
                        supportedMediaTypes: u
                    })
                } catch (e) {
                    _.logError(t + " bidder does not currently support aliasing.", "adaptermanager.aliasBidAdapter")
                }
            } else _.logMessage('alias name "' + e + '" has been already specified.')
        }, b.registerAnalyticsAdapter = function(e) {
            var t = e.adapter,
                r = e.code;
            t && r ? "function" == typeof t.enableAnalytics ? (t.code = r, i[r] = t) : _.logError('Prebid Error: Analytics adaptor error for analytics "' + r + '"\n        analytics adapter must implement an enableAnalytics() function') : _.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
        }, b.enableAnalytics = function(e) {
            _.isArray(e) || (e = [e]), _._each(e, (function(e) {
                var t = i[e.provider];
                t ? t.enableAnalytics(e) : _.logError("Prebid Error: no analytics adapter found in registry for\n        " + e.provider + ".")
            }))
        }, b.getBidAdapter = function(e) {
            return B[e]
        }, b.setS2STestingModule = function(e) {
            P = e
        }, b.callTimedOutBidders = function(t, r, i) {
            r = r.map((function(e) {
                return e.params = _.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = i, e
            })), r = _.groupBy(r, "bidder"), Object.keys(r).forEach((function(e) {
                n(e, "onTimeout", r[e])
            }))
        }, b.callBidWonBidder = function(e, t, r) {
            t.params = _.getUserConfiguredParams(r, t.adUnitCode, t.bidder), n(e, "onBidWon", t)
        }
    },
    9: function(e, t, r) {
        "use strict";
        var a, i, n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                }
                return e
            },
            u = r(0),
            o = r(4),
            s = Array.prototype.slice,
            f = Array.prototype.push,
            l = u._map(o.EVENTS, (function(e) {
                return e
            })),
            d = o.EVENT_ID_PATHS,
            c = [];
        e.exports = (a = {}, (i = {}).on = function(e, t, r) {
            if (n = e, u.contains(l, n)) {
                var i = a[e] || {
                    que: []
                };
                r ? (i[r] = i[r] || {
                    que: []
                }, i[r].que.push(t)) : i.que.push(t), a[e] = i
            } else u.logError("Wrong event name : " + e + " Valid event names :" + l);
            var n
        }, i.emit = function(e) {
            !(function(e, t) {
                u.logMessage("Emitting event for: " + e);
                var r = t[0] || {},
                    i = r[d[e]],
                    n = a[e] || {
                        que: []
                    },
                    o = u._map(n, (function(e, t) {
                        return t
                    })),
                    s = [];
                c.push({
                    eventType: e,
                    args: r,
                    id: i
                }), i && u.contains(o, i) && f.apply(s, n[i].que), f.apply(s, n.que), u._each(s, (function(e) {
                    if (e) try {
                        e.apply(null, t)
                    } catch (e) {
                        u.logError("Error executing handler:", "events.js", e)
                    }
                }))
            })(e, s.call(arguments, 1))
        }, i.off = function(e, r, i) {
            var n = a[e];
            u.isEmpty(n) || u.isEmpty(n.que) && u.isEmpty(n[i]) || i && (u.isEmpty(n[i]) || u.isEmpty(n[i].que)) || (i ? u._each(n[i].que, (function(e) {
                var t = n[i].que;
                e === r && t.splice(u.indexOf.call(t, e), 1)
            })) : u._each(n.que, (function(e) {
                var t = n.que;
                e === r && t.splice(u.indexOf.call(t, e), 1)
            })), a[e] = n)
        }, i.get = function() {
            return a
        }, i.getEvents = function() {
            var r = [];
            return u._each(c, (function(e) {
                var t = n({}, e);
                r.push(t)
            })), r
        }, i)
    }
});
pbjsChunk([149], {
    146: function(e, r, t) {
        t(147), e.exports = t(148)
    },
    147: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = void 0;
        var n = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            },
            i = u(["//", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", ";misc=", ";", ""], ["//", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", ";misc=", ";", ""]),
            a = u(["//", "/bidRequest?"], ["//", "/bidRequest?"]),
            o = u(["dcn=", "&pos=", "&cmd=bid", ""], ["dcn=", "&pos=", "&cmd=bid", ""]),
            s = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var r = {};
                    if (null != e)
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                    return r.default = e, r
                }
            })(t(0)),
            d = t(1),
            c = t(2);

        function u(e, r) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(r)
                }
            }))
        }
        var p = {
                AOL: "aol",
                ONEMOBILE: "onemobile",
                ONEDISPLAY: "onedisplay"
            },
            l = {
                GET: "display-get"
            },
            m = {
                GET: "mobile-get",
                POST: "mobile-post"
            },
            f = {
                TAG: "iframe",
                TYPE: "iframe"
            },
            b = {
                TAG: "img",
                TYPE: "image"
            },
            v = E(i, "host", "network", "placement", "pageid", "sizeid", "alias", "misc", "dynamicParams"),
            h = E(a, "host"),
            g = E(o, "dcn", "pos", "dynamicParams"),
            O = {
                us: "adserver-us.adtech.advertising.com",
                eu: "adserver-eu.adtech.advertising.com",
                as: "adserver-as.adtech.advertising.com"
            },
            y = 1;

        function E(o) {
            for (var e = arguments.length, t = Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) t[r - 1] = arguments[r];
            return function() {
                for (var e = arguments.length, i = Array(e), r = 0; r < e; r++) i[r] = arguments[r];
                var n = i[i.length - 1] || {},
                    a = [o[0]];
                return t.forEach((function(e, r) {
                    var t = s.isInteger(e) ? i[e] : n[e];
                    a.push(t, o[r + 1])
                })), a.join("")
            }
        }

        function P(e) {
            return e === p.AOL || e === p.ONEMOBILE
        }

        function T(e) {
            if (P(e.bidder) && e.params.id && e.params.imp && e.params.imp[0]) {
                var r = e.params.imp[0];
                return r.id && r.tagid && (r.banner && r.banner.w && r.banner.h || r.video && r.video.mimes && r.video.minduration && r.video.maxduration)
            }
        }

        function I(e) {
            return P(e.bidder) && e.params.dcn && e.params.pos
        }

        function R(e) {
            return ((r = e.bidder) === p.AOL || r === p.ONEDISPLAY) && e.params.placement && e.params.network;
            var r
        }
        var S = r.spec = {
            code: p.AOL,
            aliases: [p.ONEMOBILE, p.ONEDISPLAY],
            supportedMediaTypes: [c.BANNER],
            isBidRequestValid: function(e) {
                return R(e) || (I(r = e) || T(r));
                var r
            },
            buildRequests: function(e, r) {
                var i = this,
                    n = r ? r.gdprConsent : null;
                return e.map((function(e) {
                    var r, t = I(r = e) ? m.GET : T(r) ? m.POST : R(r) ? l.GET : void 0;
                    if (t) return i.formatBidRequest(t, e, n)
                }))
            },
            interpretResponse: function(e, r) {
                var t = e.body;
                if (t) {
                    var i = this._parseBidResponse(t, r);
                    if (i) return i
                } else s.logError("Empty bid response", r.bidderCode, t)
            },
            getUserSyncs: function(e, r) {
                var t = !s.isEmpty(r) && r[0].body;
                return t && t.ext && t.ext.pixels ? this.parsePixelItems(t.ext.pixels) : []
            },
            formatBidRequest: function(e, r, t) {
                var i = void 0;
                switch (e) {
                    case l.GET:
                        i = {
                            url: this.buildMarketplaceUrl(r, t),
                            method: "GET",
                            ttl: 60
                        };
                        break;
                    case m.GET:
                        i = {
                            url: this.buildOneMobileGetUrl(r, t),
                            method: "GET",
                            ttl: 3600
                        };
                        break;
                    case m.POST:
                        i = {
                            url: this.buildOneMobileBaseUrl(r),
                            method: "POST",
                            ttl: 3600,
                            data: this.buildOpenRtbRequestData(r, t),
                            options: {
                                contentType: "application/json",
                                customHeaders: {
                                    "x-openrtb-version": "2.2"
                                }
                            }
                        }
                }
                return i.bidderCode = r.bidder, i.bidId = r.bidId, i.userSyncOn = r.params.userSyncOn, i
            },
            buildMarketplaceUrl: function(e, r) {
                var t = e.params,
                    i = t.server,
                    n = t.region || "us",
                    a = void 0;
                return O.hasOwnProperty(n) || (s.logWarn("Unknown region '" + n + "' for AOL bidder."), n = "us"), a = i || O[n], t.region = n, v({
                    host: a,
                    network: t.network,
                    placement: parseInt(t.placement),
                    pageid: t.pageId || 0,
                    sizeid: t.sizeId || 0,
                    alias: t.alias || s.getUniqueIdentifierStr(),
                    misc: (new Date).getTime(),
                    dynamicParams: this.formatMarketplaceDynamicParams(t, r)
                })
            },
            buildOneMobileGetUrl: function(e, r) {
                var t = e.params,
                    i = t.dcn,
                    n = t.pos,
                    a = t.ext,
                    o = this.buildOneMobileBaseUrl(e);
                if (i && n) {
                    var s = this.formatOneMobileDynamicParams(a, r);
                    o += g({
                        dcn: i,
                        pos: n,
                        dynamicParams: s
                    })
                }
                return o
            },
            buildOneMobileBaseUrl: function(e) {
                return h({
                    host: e.params.host || "hb.nexage.com"
                })
            },
            formatMarketplaceDynamicParams: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    r = arguments[1],
                    t = {};
                e.bidFloor && (t.bidfloor = e.bidFloor), n(t, this.formatKeyValues(e.keyValues)), n(t, this.formatConsentData(r));
                var i = "";
                return s._each(t, (function(e, r) {
                    i += r + "=" + encodeURIComponent(e) + ";"
                })), i
            },
            formatOneMobileDynamicParams: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    r = arguments[1];
                this.isSecureProtocol() && (e.secure = y), n(e, this.formatConsentData(r));
                var t = "";
                return s._each(e, (function(e, r) {
                    t += "&" + r + "=" + encodeURIComponent(e)
                })), t
            },
            buildOpenRtbRequestData: function(e, r) {
                var t = {
                    id: e.params.id,
                    imp: e.params.imp
                };
                return this.isConsentRequired(r) && (t.regs = {
                    ext: {
                        gdpr: y
                    }
                }, r.consentString && (t.user = {
                    ext: {
                        consent: r.consentString
                    }
                })), t
            },
            isConsentRequired: function(e) {
                return !(!e || !e.gdprApplies)
            },
            formatKeyValues: function(e) {
                var t = {};
                return s._each(e, (function(e, r) {
                    t["kv" + r] = e
                })), t
            },
            formatConsentData: function(e) {
                var r = {};
                return this.isConsentRequired(e) && (r.gdpr = y, e.consentString && (r.euconsent = e.consentString)), r
            },
            parsePixelItems: function(e) {
                var i = /\w*(?=\s)/,
                    n = /src=("|')(.*?)\1/,
                    a = [];
                if (e) {
                    var r = e.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi);
                    r && r.forEach((function(e) {
                        var r = e.match(i)[0],
                            t = e.match(n)[2];
                        r && r && a.push({
                            type: r === b.TAG ? b.TYPE : f.TYPE,
                            url: t
                        })
                    }))
                }
                return a
            },
            _parseBidResponse: function(e, r) {
                var t = void 0;
                try {
                    t = e.seatbid[0].bid[0]
                } catch (e) {
                    return
                }
                var i = void 0;
                if (t.ext && t.ext.encp) i = t.ext.encp;
                else if (null === (i = t.price) || isNaN(i)) return void s.logError("Invalid price in bid response", p.AOL, bid);
                return {
                    bidderCode: r.bidderCode,
                    requestId: r.bidId,
                    ad: t.adm,
                    cpm: i,
                    width: t.w,
                    height: t.h,
                    creativeId: t.crid || 0,
                    pubapiId: e.id,
                    currency: e.cur || "USD",
                    dealId: t.dealid,
                    netRevenue: !0,
                    ttl: r.ttl
                }
            },
            isOneMobileBidder: P,
            isSecureProtocol: function() {
                return "https:" === document.location.protocol
            }
        };
        (0, d.registerBidder)(S)
    },
    148: function(e, r) {}
}, [146]);
pbjsChunk([148], {
    149: function(e, n, t) {
        e.exports = t(150)
    },
    150: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = u(t(5)),
            r = u(t(8));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = (0, a.default)({
            global: "AppNexusPrebidAnalytics",
            handler: "on",
            analyticsType: "bundle"
        });
        r.default.registerAnalyticsAdapter({
            adapter: o,
            code: "appnexus"
        }), n.default = o
    },
    5: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        n.default = function(e) {
            var r, u = e.url,
                n = e.analyticsType,
                o = e.global,
                a = e.handler,
                i = [],
                s = 0,
                t = !0;
            (n === m || S) && (function() {
                if (t) {
                    for (var e = 0; e < i.length; e++) i[e]();
                    i.push = function(e) {
                        e()
                    }, t = !1
                }
                g.logMessage("event count sent to " + o + ": " + s)
            })();
            return {
                track: function(e) {
                    var n = e.eventType,
                        t = e.args;
                    this.getAdapterType() === S && window[o](a, n, t);
                    this.getAdapterType() === m && function(e) {
                        var n = e.eventType,
                            t = e.args,
                            a = e.callback;
                        (0, p.ajax)(u, a, JSON.stringify({
                            eventType: n,
                            args: t
                        }))
                    }.apply(void 0, arguments)
                },
                enqueue: l,
                enableAnalytics: c,
                disableAnalytics: function() {
                    g._each(r, (function(e, n) {
                        d.off(n, e)
                    })), this.enableAnalytics = this._oldEnable ? this._oldEnable : c
                },
                getAdapterType: function() {
                    return n
                },
                getGlobal: function() {
                    return o
                },
                getHandler: function() {
                    return a
                },
                getUrl: function() {
                    return u
                }
            };

            function l(e) {
                var n = e.eventType,
                    t = e.args,
                    a = this;
                o && window[o] && n && t ? this.track({
                    eventType: n,
                    args: t
                }) : i.push((function() {
                    s++, a.track({
                        eventType: n,
                        args: t
                    })
                }))
            }

            function c(n) {
                var e, t = this,
                    a = this;
                "object" !== (void 0 === n ? "undefined" : f(n)) || "object" !== f(n.options) || (void 0 === n.options.sampling || Math.random() < parseFloat(n.options.sampling)) ? (d.getEvents().forEach((function(e) {
                    if (e) {
                        var n = e.eventType,
                            t = e.args;
                        n !== _ && l.call(a, {
                            eventType: n,
                            args: t
                        })
                    }
                })), y(e = {}, T, (function(e) {
                    return t.enqueue({
                        eventType: T,
                        args: e
                    })
                })), y(e, h, (function(e) {
                    return t.enqueue({
                        eventType: h,
                        args: e
                    })
                })), y(e, _, (function(e) {
                    return t.enqueue({
                        eventType: _,
                        args: e
                    })
                })), y(e, E, (function(e) {
                    return t.enqueue({
                        eventType: E,
                        args: e
                    })
                })), y(e, A, (function(e) {
                    return t.enqueue({
                        eventType: A,
                        args: e
                    })
                })), y(e, D, (function(e) {
                    return t.enqueue({
                        eventType: D,
                        args: e
                    })
                })), y(e, I, (function(e) {
                    return t.enqueue({
                        eventType: I,
                        args: e
                    })
                })), y(e, b, (function(e) {
                    return t.enqueue({
                        eventType: b,
                        args: e
                    })
                })), y(e, N, (function(e) {
                    return t.enqueue({
                        eventType: N,
                        args: e
                    })
                })), y(e, v, (function(e) {
                    e.config = "object" === (void 0 === n ? "undefined" : f(n)) && n.options || {}, t.enqueue({
                        eventType: v,
                        args: e
                    })
                })), r = e, g._each(r, (function(e, n) {
                    d.on(n, e)
                }))) : g.logMessage('Analytics adapter for "' + o + '" disabled by sampling');
                this._oldEnable = this.enableAnalytics, this.enableAnalytics = function() {
                    return g.logMessage('Analytics adapter for "' + o + '" already enabled, unnecessary call to `enableAnalytics`.')
                }
            }
        };
        var a, r = t(4),
            u = (a = r) && a.__esModule ? a : {
                default: a
            },
            p = t(6);

        function y(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e
        }
        var d = t(9),
            g = t(0),
            o = u.default.EVENTS,
            v = o.AUCTION_INIT,
            b = o.AUCTION_END,
            T = o.BID_REQUESTED,
            _ = o.BID_TIMEOUT,
            h = o.BID_RESPONSE,
            E = o.BID_WON,
            A = o.BID_ADJUSTMENT,
            D = o.BIDDER_DONE,
            I = o.SET_TARGETING,
            N = o.AD_RENDER_FAILED,
            m = "endpoint",
            S = "bundle"
    }
}, [149]);
pbjsChunk([147], {
    151: function(e, r, a) {
        a(152), e.exports = a(153)
    },
    152: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = void 0;
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var a = arguments[r];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            },
            p = a(12),
            u = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var r = {};
                    if (null != e)
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
                    return r.default = e, r
                }
            })(a(0)),
            t = a(1),
            m = a(2),
            l = s(a(10)),
            f = s(a(7));

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = ["id", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playback_method", "frameworks"],
            y = ["age", "external_uid", "segments", "gender", "dnt", "language"],
            v = ["geo", "device_id"],
            b = {
                body: "description",
                cta: "ctatext",
                image: {
                    serverName: "main_image",
                    requiredParams: {
                        required: !0
                    },
                    minimumParams: {
                        sizes: [{}]
                    }
                },
                icon: {
                    serverName: "icon",
                    requiredParams: {
                        required: !0
                    },
                    minimumParams: {
                        sizes: [{}]
                    }
                },
                sponsoredBy: "sponsored_by"
            },
            i = r.spec = {
                code: "appnexus",
                aliases: ["appnexusAst", "brealtime", "emxdigital", "pagescience", "defymedia", "gourmetads", "matomy", "featureforward", "oftmedia", "districtm"],
                supportedMediaTypes: [m.BANNER, m.VIDEO, m.NATIVE],
                isBidRequestValid: function(e) {
                    return !!(e.params.placementId || e.params.member && e.params.invCode)
                },
                buildRequests: function(e, r) {
                    var a = e.map(g),
                        t = (0, l.default)(e, h),
                        s = void 0;
                    t && (s = {}, Object.keys(t.params.user).filter((function(e) {
                        return (0, f.default)(y, e)
                    })).forEach((function(e) {
                        return s[e] = t.params.user[e]
                    })));
                    var n = (0, l.default)(e, E),
                        i = void 0;
                    n && n.params && n.params.app && (i = {}, Object.keys(n.params.app).filter((function(e) {
                        return (0, f.default)(v, e)
                    })).forEach((function(e) {
                        return i[e] = n.params.app[e]
                    })));
                    var d = (0, l.default)(e, k),
                        o = void 0;
                    d && d.params && n.params.app && n.params.app.id && (o = {
                        appid: d.params.app.id
                    });
                    var p = (0, l.default)(e, I),
                        u = p ? parseInt(p.params.member, 10) : 0,
                        m = {
                            tags: [].concat(function(e) {
                                if (Array.isArray(e)) {
                                    for (var r = 0, a = Array(e.length); r < e.length; r++) a[r] = e[r];
                                    return a
                                }
                                return Array.from(e)
                            }(a)),
                            user: s,
                            sdk: {
                                source: "pbjs",
                                version: "1.30.0"
                            }
                        };
                    if (0 < u && (m.member_id = u), n && (m.device = i), d && (m.app = o), r && r.gdprConsent && (m.gdpr_consent = {
                            consent_string: r.gdprConsent.consentString,
                            consent_required: r.gdprConsent.gdprApplies
                        }), r && r.refererInfo) {
                        var c = {
                            rd_ref: encodeURIComponent(r.refererInfo.referer),
                            rd_top: r.refererInfo.reachedTop,
                            rd_ifs: r.refererInfo.numIframes,
                            rd_stk: r.refererInfo.stack.map((function(e) {
                                return encodeURIComponent(e)
                            })).join(",")
                        };
                        m.referrer_detection = c
                    }
                    return {
                        method: "POST",
                        url: "//ib.adnxs.com/ut/v3/prebid",
                        data: JSON.stringify(m),
                        bidderRequest: r
                    }
                },
                interpretResponse: function(e, r) {
                    var n = this,
                        i = r.bidderRequest;
                    e = e.body;
                    var d = [];
                    if (e && !e.error) return e.tags && e.tags.forEach((function(e) {
                        var r, a, t = (r = e) && r.ads && r.ads.length && (0, l.default)(r.ads, (function(e) {
                            return e.rtb
                        }));
                        if (t && 0 !== t.cpm && (0, f.default)(n.supportedMediaTypes, t.ad_type)) {
                            var s = (function(e, r, a) {
                                var t = {
                                    requestId: e.uuid,
                                    cpm: r.cpm,
                                    creativeId: r.creative_id,
                                    dealId: r.deal_id,
                                    currency: "USD",
                                    netRevenue: !0,
                                    ttl: 300,
                                    appnexus: {
                                        buyerMemberId: r.buyer_member_id,
                                        dealPriority: r.deal_priority,
                                        dealCode: r.deal_code
                                    }
                                };
                                if (r.rtb.video) {
                                    if (o(t, {
                                            width: r.rtb.video.player_width,
                                            height: r.rtb.video.player_height,
                                            vastUrl: r.rtb.video.asset_url,
                                            vastImpUrl: r.notify_url,
                                            ttl: 3600
                                        }), r.renderer_url) {
                                        var s = u.deepAccess(a.bids[0], "renderer.options");
                                        o(t, {
                                            adResponse: e,
                                            renderer: (function(e, r) {
                                                var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                                    t = p.Renderer.install({
                                                        id: r.renderer_id,
                                                        url: r.renderer_url,
                                                        config: a,
                                                        loaded: !1
                                                    });
                                                try {
                                                    t.setRender(T)
                                                } catch (e) {
                                                    u.logWarn("Prebid Error calling setRender on renderer", e)
                                                }
                                                return t.setEventHandlers({
                                                    impression: function() {
                                                        return u.logMessage("AppNexus outstream video impression event")
                                                    },
                                                    loaded: function() {
                                                        return u.logMessage("AppNexus outstream video loaded event")
                                                    },
                                                    ended: function() {
                                                        u.logMessage("AppNexus outstream renderer video event"), document.querySelector("#" + e).style.display = "none"
                                                    }
                                                }), t
                                            })(t.adUnitCode, r, s)
                                        }), t.adResponse.ad = t.adResponse.ads[0], t.adResponse.ad.video = t.adResponse.ad.rtb.video
                                    }
                                } else if (r.rtb[m.NATIVE]) {
                                    var n = r.rtb[m.NATIVE];
                                    t[m.NATIVE] = {
                                        title: n.title,
                                        body: n.desc,
                                        cta: n.ctatext,
                                        sponsoredBy: n.sponsored,
                                        clickUrl: n.link.url,
                                        clickTrackers: n.link.click_trackers,
                                        impressionTrackers: n.impression_trackers,
                                        javascriptTrackers: n.javascript_trackers
                                    }, n.main_img && (t.native.image = {
                                        url: n.main_img.url,
                                        height: n.main_img.height,
                                        width: n.main_img.width
                                    }), n.icon && (t.native.icon = {
                                        url: n.icon.url,
                                        height: n.icon.height,
                                        width: n.icon.width
                                    })
                                } else {
                                    o(t, {
                                        width: r.rtb.banner.width,
                                        height: r.rtb.banner.height,
                                        ad: r.rtb.banner.content
                                    });
                                    try {
                                        var i = r.rtb.trackers[0].impression_urls[0],
                                            d = u.createTrackPixelHtml(i);
                                        t.ad += d
                                    } catch (e) {
                                        u.logError("Error appending tracking pixel", e)
                                    }
                                }
                                return t
                            })(e, t, i);
                            s.mediaType = (a = t.ad_type) === m.VIDEO ? m.VIDEO : a === m.NATIVE ? m.NATIVE : m.BANNER, d.push(s)
                        }
                    })), d;
                    var a = "in response for " + i.bidderCode + " adapter";
                    return e && e.error && (a += ": " + e.error), u.logError(a), d
                },
                getUserSyncs: function(e) {
                    if (e.iframeEnabled) return [{
                        type: "iframe",
                        url: "//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"
                    }]
                },
                transformBidParams: function(a, e) {
                    return a = u.convertTypes({
                        member: "string",
                        invCode: "string",
                        placementId: "number",
                        keywords: u.transformBidderParamKeywords
                    }, a), e && (a.use_pmt_rule = "boolean" == typeof a.usePaymentRule && a.usePaymentRule, a.usePaymentRule && delete a.usePaymentRule, Object.keys(a).forEach((function(e) {
                        var r = u.convertCamelToUnderscore(e);
                        r !== e && (a[r] = a[e], delete a[e])
                    }))), a
                }
            };

        function g(r) {
            var i, d, a = {};
            if (a.sizes = _(r.sizes), a.primary_size = a.sizes[0], a.ad_types = [], a.uuid = r.bidId, r.params.placementId ? a.id = parseInt(r.params.placementId, 10) : a.code = r.params.invCode, a.allow_smaller_sizes = r.params.allowSmallerSizes || !1, a.use_pmt_rule = r.params.usePaymentRule || !1, a.prebid = !0, a.disable_psa = !0, r.params.reserve && (a.reserve = r.params.reserve), r.params.position && (a.position = {
                    above: 1,
                    below: 2
                } [r.params.position] || 0), r.params.trafficSourceCode && (a.traffic_source_code = r.params.trafficSourceCode), r.params.privateSizes && (a.private_sizes = _(r.params.privateSizes)), r.params.supplyType && (a.supply_type = r.params.supplyType), r.params.pubClick && (a.pubclick = r.params.pubClick), r.params.extInvCode && (a.ext_inv_code = r.params.extInvCode), r.params.externalImpId && (a.external_imp_id = r.params.externalImpId), u.isEmpty(r.params.keywords) || (a.keywords = u.transformBidderParamKeywords(r.params.keywords)), (r.mediaType === m.NATIVE || u.deepAccess(r, "mediaTypes." + m.NATIVE)) && (a.ad_types.push(m.NATIVE), r.nativeParams)) {
                var e = (i = r.nativeParams, d = {}, Object.keys(i).forEach((function(e) {
                    var r = b[e] && b[e].serverName || b[e] || e,
                        a = b[e] && b[e].requiredParams;
                    d[r] = o({}, a, i[e]);
                    var t = b[e] && b[e].minimumParams;
                    if (a && t) {
                        var s = Object.keys(i[e]),
                            n = Object.keys(a);
                        0 === s.filter((function(e) {
                            return !(0, f.default)(n, e)
                        })).length && (d[r] = o({}, d[r], t))
                    }
                })), d);
                a[m.NATIVE] = {
                    layouts: [e]
                }
            }
            var t = u.deepAccess(r, "mediaTypes." + m.VIDEO),
                s = u.deepAccess(r, "mediaTypes.video.context");
            return (r.mediaType === m.VIDEO || t) && a.ad_types.push(m.VIDEO), (r.mediaType === m.VIDEO || t && "outstream" !== s) && (a.require_asset_url = !0), r.params.video && (a.video = {}, Object.keys(r.params.video).filter((function(e) {
                return (0, f.default)(c, e)
            })).forEach((function(e) {
                return a.video[e] = r.params.video[e]
            }))), (u.isEmpty(r.mediaType) && u.isEmpty(r.mediaTypes) || r.mediaType === m.BANNER || r.mediaTypes && r.mediaTypes[m.BANNER]) && a.ad_types.push(m.BANNER), a
        }

        function _(e) {
            var r = [],
                a = {};
            if (u.isArray(e) && 2 === e.length && !u.isArray(e[0])) a.width = parseInt(e[0], 10), a.height = parseInt(e[1], 10), r.push(a);
            else if ("object" === (void 0 === e ? "undefined" : n(e)))
                for (var t = 0; t < e.length; t++) {
                    var s = e[t];
                    (a = {}).width = parseInt(s[0], 10), a.height = parseInt(s[1], 10), r.push(a)
                }
            return r
        }

        function h(e) {
            return !!e.params.user
        }

        function I(e) {
            return !!parseInt(e.params.member, 10)
        }

        function E(e) {
            if (e.params) return !!e.params.app
        }

        function k(e) {
            return e.params && e.params.app ? !!e.params.app.id : !!e.params.app
        }

        function T(e) {
            e.renderer.push((function() {
                window.ANOutstreamVideo.renderAd({
                    tagId: e.adResponse.tag_id,
                    sizes: [e.getSize().split("x")],
                    targetId: e.adUnitCode,
                    uuid: e.adResponse.uuid,
                    adResponse: e.adResponse,
                    rendererOptions: e.renderer.getConfig()
                }, function(e, r, a) {
                    e.renderer.handleVideoEvent({
                        id: r,
                        eventName: a
                    })
                }.bind(null, e))
            }))
        }(0, t.registerBidder)(i)
    },
    153: function(e, r) {}
}, [151]);
pbjsChunk([107], {
    298: function(e, n, r) {
        r(299), e.exports = r(300)
    },
    299: function(e, n, r) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.spec = void 0;
        var s = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = arguments[n];
                    for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
                }
                return e
            },
            i = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var n = {};
                    if (null != e)
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return n.default = e, n
                }
            })(r(0)),
            t = r(1);
        var d = [];

        function u(e) {
            var n, r, t = {
                id: e.adUnitCode,
                ss: (n = e.sizes, r = "", i.isArray(n) && (r = "[" + (r = n.reduce((function(e, n) {
                    return e.push(n.join(".")), e
                }), [])).join(",") + "]"), r),
                p: e.params.adUnitPath
            };
            return "{" + i.getKeys(t).map((function(e) {
                return [e, t[e]].join(":")
            })).join(",") + "}"
        }

        function a(e, r) {
            i.getKeys(r).reduce((function(e, n) {
                return e[n] = r[n], e
            }), e)
        }
        var o = n.spec = {
            code: "ias",
            aliases: [],
            isBidRequestValid: function(e) {
                var n = e.params,
                    r = n.pubId,
                    t = n.adUnitPath;
                return !(!r || !t)
            },
            buildRequests: function(n) {
                var e = n[0].params.pubId,
                    r = [];
                r.push(["anId", e]), (r = r.concat(n.reduce((function(e, n) {
                    return e.push(["slot", u(n)]), e
                }), []))).push(["wr", [window.innerWidth || -1, window.innerHeight || -1].join(".")]), r.push(["sr", [window.screen && window.screen.width || -1, window.screen && window.screen.height || -1].join(".")]);
                var t = encodeURI(r.map((function(e) {
                    return e.join("=")
                })).join("&"));
                return n.forEach((function(e) {
                    n[0].bidId != e.bidId && d.push(e.bidId)
                })), {
                    method: "GET",
                    url: "//pixel.adsafeprotected.com/services/pub",
                    data: t,
                    bidRequest: n[0]
                }
            },
            interpretResponse: function(e, n) {
                var r, t, i = e.body,
                    u = [],
                    o = {
                        requestId: n.bidRequest.bidId,
                        cpm: .01,
                        width: 100,
                        height: 200,
                        creativeId: 434,
                        dealId: 42,
                        currency: "usd",
                        netRevenue: !0,
                        ttl: 360
                    };
                return a(o, (a(t = {}, (r = i).brandSafety), t.fr = r.fr, t)), o.slots = i.slots, u.push(o), d.forEach((function(e) {
                    var n = s({}, o);
                    n.requestId = e, u.push(n)
                })), u
            }
        };
        (0, t.registerBidder)(o)
    },
    300: function(e, n) {}
}, [298]);
pbjsChunk([49], {
    480: function(e, r, t) {
        t(481), e.exports = t(482)
    },
    481: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = r.SYNC_ENDPOINT = r.VIDEO_ENDPOINT = r.FASTLANE_ENDPOINT = void 0;
        var u = function(e, r) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return (function(e, r) {
                    var t = [],
                        i = !0,
                        n = !1,
                        o = void 0;
                    try {
                        for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (t.push(s.value), !r || t.length !== r); i = !0);
                    } catch (e) {
                        n = !0, o = e
                    } finally {
                        try {
                            !i && a.return && a.return()
                        } finally {
                            if (n) throw o
                        }
                    }
                    return t
                })(e, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        r.hasVideoMediaType = c, r.masSizeOrdering = h, r.resetUserSync = function() {
            A = !1
        };
        var l = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var r = {};
                    if (null != e)
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                    return r.default = e, r
                }
            })(t(0)),
            i = t(1),
            f = t(3),
            v = t(2);
        var y = "pbjs_lite_v1.30.0";
        var s = r.FASTLANE_ENDPOINT = "//fastlane.rubiconproject.com/a/api/fastlane.json",
            a = r.VIDEO_ENDPOINT = "//fastlane-adv.rubiconproject.com/v1/auction/video",
            n = r.SYNC_ENDPOINT = "https://eus.rubiconproject.com/usync.html",
            g = {
                1: "468x60",
                2: "728x90",
                5: "120x90",
                8: "120x600",
                9: "160x600",
                10: "300x600",
                13: "200x200",
                14: "250x250",
                15: "300x250",
                16: "336x280",
                19: "300x100",
                31: "980x120",
                32: "250x360",
                33: "180x500",
                35: "980x150",
                37: "468x400",
                38: "930x180",
                39: "750x100",
                40: "750x200",
                41: "750x300",
                43: "320x50",
                44: "300x50",
                48: "300x300",
                53: "1024x768",
                54: "300x1050",
                55: "970x90",
                57: "970x250",
                58: "1000x90",
                59: "320x80",
                60: "320x150",
                61: "1000x1000",
                64: "580x500",
                65: "640x480",
                67: "320x480",
                68: "1800x1000",
                72: "320x320",
                73: "320x160",
                78: "980x240",
                79: "980x300",
                80: "980x400",
                83: "480x300",
                94: "970x310",
                96: "970x210",
                101: "480x320",
                102: "768x1024",
                103: "480x280",
                108: "320x240",
                113: "1000x300",
                117: "320x100",
                125: "800x250",
                126: "200x600",
                144: "980x600",
                159: "320x250",
                195: "600x300",
                199: "640x200",
                213: "1030x590",
                214: "980x360",
                229: "320x180",
                232: "580x400",
                257: "400x600"
            };
        l._each(g, (function(e, r) {
            return g[e] = r
        }));
        var d = r.spec = {
            code: "rubicon",
            aliases: ["rubiconLite"],
            supportedMediaTypes: [v.BANNER, v.VIDEO],
            isBidRequestValid: function(e) {
                return "object" === p(e.params) && (!!/^\d+$/.test(e.params.accountId) && !!x(e, !0))
            },
            buildRequests: function(e, o) {
                var r = [],
                    t = e.filter((function(e) {
                        return "video" === x(e)
                    })).map((function(e) {
                        e.startTime = (new Date).getTime();
                        var r = e.params,
                            t = _(e, "video"),
                            i = {
                                page_url: b(e, o),
                                resolution: m(),
                                account_id: r.accountId,
                                integration: y,
                                "x_source.tid": e.transactionId,
                                timeout: o.timeout - (Date.now() - o.auctionStart + 500),
                                stash_creatives: !0,
                                slots: []
                            },
                            n = {
                                site_id: r.siteId,
                                zone_id: r.zoneId,
                                position: "atf" === r.position || "btf" === r.position ? r.position : "unknown",
                                floor: .01 < parseFloat(r.floor) ? r.floor : .01,
                                element_id: e.adUnitCode,
                                name: e.adUnitCode,
                                width: t[0],
                                height: t[1],
                                size_id: "outstream" === l.deepAccess(e, "mediaTypes." + v.VIDEO + ".context") ? 203 : r.video.size_id
                            };
                        return r.video && (i.ae_pass_through_parameters = r.video.aeParams, n.language = r.video.language), r.inventory && "object" === p(r.inventory) && (n.inventory = r.inventory), r.keywords && Array.isArray(r.keywords) && (n.keywords = r.keywords), r.visitor && "object" === p(r.visitor) && (n.visitor = r.visitor), i.slots.push(n), o.gdprConsent && ("boolean" == typeof o.gdprConsent.gdprApplies && (i.gdpr = Number(o.gdprConsent.gdprApplies)), i.gdpr_consent = o.gdprConsent.consentString), {
                            method: "POST",
                            url: a,
                            data: i,
                            bidRequest: e
                        }
                    }));
                if (!0 !== f.config.getConfig("rubicon.singleRequest")) r = t.concat(e.filter((function(e) {
                    return "banner" === x(e)
                })).map((function(e) {
                    var i = d.createSlotParams(e, o);
                    return {
                        method: "GET",
                        url: s,
                        data: d.getOrderedParams(i).reduce((function(e, r) {
                            var t = i[r];
                            return l.isStr(t) && "" !== t || l.isNumber(t) ? "" + e + r + "=" + encodeURIComponent(t) + "&" : e
                        }), "") + "slots=1&rand=" + Math.random(),
                        bidRequest: e
                    }
                })));
                else {
                    var n = e.filter((function(e) {
                        return "banner" === x(e)
                    })).reduce((function(e, r) {
                        return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e
                    }), {});
                    r = t.concat(Object.keys(n).map((function(e) {
                        var r = n[e];
                        10 < r.length && (l.logWarn("Rubicon bid adapter Warning: single request mode has a limit of 10 bids: " + (r.length - 10) + " bids were not sent"), r = r.slice(0, 10));
                        var i = d.combineSlotUrlParams(r.map((function(e) {
                            return d.createSlotParams(e, o)
                        })));
                        return {
                            method: "GET",
                            url: s,
                            data: d.getOrderedParams(i).reduce((function(e, r) {
                                var t = i[r];
                                return l.isStr(t) && "" !== t || l.isNumber(t) ? "" + e + r + "=" + encodeURIComponent(t) + "&" : e
                            }), "") + "slots=" + r.length + "&rand=" + Math.random(),
                            bidRequest: r
                        }
                    })))
                }
                return r
            },
            getOrderedParams: function(e) {
                var r = /^tg_v/,
                    t = /^tg_i/,
                    i = ["account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "rf", "dt.id", "dt.keyv", "dt.pref", "p_geo.latitude", "p_geo.longitude", "kw"].concat(Object.keys(e).filter((function(e) {
                        return r.test(e)
                    }))).concat(Object.keys(e).filter((function(e) {
                        return t.test(e)
                    }))).concat(["tk_flint", "x_source.tid", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
                return i.concat(Object.keys(e).filter((function(e) {
                    return -1 === i.indexOf(e)
                })))
            },
            combineSlotUrlParams: function(n) {
                if (1 === n.length) return n[0];
                var i = n.reduce((function(r, t, i) {
                        return Object.keys(t).forEach((function(e) {
                            r.hasOwnProperty(e) || (r[e] = new Array(n.length)), r[e].splice(i, 1, t[e])
                        })), r
                    }), {}),
                    o = new RegExp("^([^;]*)(;\\1)+$");
                return Object.keys(i).forEach((function(e) {
                    var r = i[e].join(";"),
                        t = r.match(o);
                    i[e] = t ? t[1] : r
                })), i
            },
            createSlotParams: function(e, r) {
                e.startTime = (new Date).getTime();
                var t = e.params,
                    i = _(e, "banner"),
                    n = t.latLong || [],
                    o = u(n, 2),
                    s = o[0],
                    a = o[1],
                    d = {
                        account_id: t.accountId,
                        site_id: t.siteId,
                        zone_id: t.zoneId,
                        size_id: i[0],
                        alt_size_ids: i.slice(1).join(",") || void 0,
                        p_pos: "atf" === t.position || "btf" === t.position ? t.position : "unknown",
                        rp_floor: .01 < (t.floor = parseFloat(t.floor)) ? t.floor : .01,
                        rp_secure: "https:" === location.protocol ? "1" : "0",
                        tk_flint: y,
                        "x_source.tid": e.transactionId,
                        p_screen_res: m(),
                        kw: Array.isArray(t.keywords) ? t.keywords.join(",") : "",
                        tk_user_key: t.userId,
                        "p_geo.latitude": isNaN(parseFloat(s)) ? void 0 : parseFloat(s).toFixed(4),
                        "p_geo.longitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                        "tg_fl.eid": e.code,
                        rf: b(e, r)
                    };
                r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (d.gdpr = Number(r.gdprConsent.gdprApplies)), d.gdpr_consent = r.gdprConsent.consentString), null !== t.visitor && "object" === p(t.visitor) && Object.keys(t.visitor).forEach((function(e) {
                    null != t.visitor[e] && (d["tg_v." + e] = t.visitor[e].toString())
                })), null !== t.inventory && "object" === p(t.inventory) && Object.keys(t.inventory).forEach((function(e) {
                    null != t.inventory[e] && (d["tg_i." + e] = t.inventory[e].toString())
                }));
                var c = (function() {
                    var e = (r = window.DigiTrust && (f.config.getConfig("digiTrustId") || window.DigiTrust.getUser({
                        member: "T9QSFKPDN9"
                    })), r && r.success && r.identity || null);
                    var r;
                    if (!e || e.privacy && e.privacy.optout) return [];
                    return {
                        "dt.id": e.id,
                        "dt.keyv": e.keyv,
                        "dt.pref": 0
                    }
                })();
                return Object.keys(c).forEach((function(e) {
                    d[e] = c[e]
                })), d
            },
            interpretResponse: function(d, e) {
                var c = e.bidRequest;
                if (!(d = d.body) || "object" !== (void 0 === d ? "undefined" : p(d))) return [];
                var r = d.ads;
                return "object" !== (void 0 === c ? "undefined" : p(c)) || Array.isArray(c) || "video" !== x(c) || "object" !== (void 0 === r ? "undefined" : p(r)) || (r = r[c.adUnitCode]), !Array.isArray(r) || r.length < 1 ? [] : r.reduce((function(e, r, t) {
                    if ("ok" !== r.status) return e;
                    var i, n = Array.isArray(c) ? c[t] : c;
                    if (n && "object" === (void 0 === n ? "undefined" : p(n))) {
                        var o = {
                            requestId: n.bidId,
                            currency: "USD",
                            creativeId: r.creative_id || (r.network || "") + "-" + (r.advertiser || ""),
                            cpm: r.cpm || 0,
                            dealId: r.deal,
                            ttl: 300,
                            netRevenue: f.config.getConfig("rubicon.netRevenue") || !1,
                            rubicon: {
                                advertiserId: r.advertiser,
                                networkId: r.network
                            }
                        };
                        if (r.creative_type && (o.mediaType = r.creative_type), r.creative_type === v.VIDEO) o.width = n.params.video.playerWidth, o.height = n.params.video.playerHeight, o.vastUrl = r.creative_depot_url, o.impression_id = r.impression_id, o.videoCacheKey = r.impression_id;
                        else {
                            o.ad = (i = r.script, "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='" + r.impression_id + "'>\n<script type='text/javascript'>" + i + "<\/script>\n</div>\n</body>\n</html>");
                            var s = g[r.size_id].split("x").map((function(e) {
                                    return Number(e)
                                })),
                                a = u(s, 2);
                            o.width = a[0], o.height = a[1]
                        }
                        o.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce((function(e, r) {
                            return e[r.key] = r.values[0], e
                        }), {
                            rpfl_elemid: n.adUnitCode
                        }), e.push(o)
                    } else l.logError("Rubicon bid adapter Error: bidRequest undefined at index position:" + t, c, d);
                    return e
                }), []).sort((function(e, r) {
                    return (r.cpm || 0) - (e.cpm || 0)
                }))
            },
            getUserSyncs: function(e, r, t) {
                if (!A && e.iframeEnabled) {
                    var i = "";
                    return t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? i += "?gdpr=" + Number(t.gdprApplies) + "&gdpr_consent=" + t.consentString : i += "?gdpr_consent=" + t.consentString), A = !0, {
                        type: "iframe",
                        url: n + i
                    }
                }
            },
            transformBidParams: function(e, r) {
                return l.convertTypes({
                    accountId: "number",
                    siteId: "number",
                    zoneId: "number"
                }, e)
            }
        };

        function m() {
            return [window.screen.width, window.screen.height].join("x")
        }

        function b(e, r) {
            var t = f.config.getConfig("pageUrl");
            return e.params.referrer ? t = e.params.referrer : t || (t = r.refererInfo.referer), e.params.secure ? t.replace(/^http:/i, "https:") : t
        }

        function _(e, r) {
            var t = e.params;
            if ("video" === r) {
                var i = [];
                return t.video && t.video.playerWidth && t.video.playerHeight ? i = [t.video.playerWidth, t.video.playerHeight] : Array.isArray(l.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? i = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (i = e.sizes[0]), i
            }
            var n = [];
            return Array.isArray(t.sizes) ? n = t.sizes : void 0 !== l.deepAccess(e, "mediaTypes.banner.sizes") ? n = o(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? n = o(e.sizes) : l.logWarn("Warning: no sizes are setup or found"), h(n)
        }

        function o(e) {
            return l.parseSizesInput(e).reduce((function(e, r) {
                var t = parseInt(g[r], 10);
                return t && e.push(t), e
            }), [])
        }

        function c(e) {
            return (void 0 !== l.deepAccess(e, "params.video") || !Array.isArray(l.deepAccess(e, "params.sizes"))) && (e.mediaType === v.VIDEO || void 0 !== l.deepAccess(e, "mediaTypes." + v.VIDEO))
        }

        function x(e) {
            var r = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                t = void 0;
            if (c(e)) {
                if (t = !0, "instream" === l.deepAccess(e, "mediaTypes." + v.VIDEO + ".context") || e.mediaType === v.VIDEO ? void 0 === l.deepAccess(e, "params.video.size_id") && (r && l.logError("Rubicon bid adapter Error: size id is missing for instream video request."), t = !1) : "outstream" === l.deepAccess(e, "mediaTypes." + v.VIDEO + ".context") ? 203 !== l.deepAccess(e, "params.video.size_id") && r && l.logWarn("Rubicon bid adapter Warning: outstream video is sending invalid size id, converting size id to 203.") : (r && l.logError("Rubicon bid adapter Error: no instream or outstream context defined in mediaTypes."), t = !1), t) return void 0 !== l.deepAccess(e, "mediaTypes." + v.BANNER) && r && l.logWarn("Rubicon bid adapter Warning: video and banner requested for same adUnit, continuing with video request, multi-format request is not supported by rubicon yet."), "video";
                if (void 0 === l.deepAccess(e, "mediaTypes." + v.BANNER)) return
            }
            if (0 < _(e, "banner").length) return r && !1 === t && l.logWarn("Rubicon bid adapter Warning: invalid video requested for adUnit, continuing with banner request."), "banner"
        }

        function h(e) {
            var n = [15, 2, 9];
            return e.sort((function(e, r) {
                var t = n.indexOf(e),
                    i = n.indexOf(r);
                return -1 < t || -1 < i ? -1 === t ? 1 : -1 === i ? -1 : t - i : e - r
            }))
        }
        var A = !1;
        (0, i.registerBidder)(d)
    },
    482: function(e, r) {}
}, [480]);
pbjs.processQueue();