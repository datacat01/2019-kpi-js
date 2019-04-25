function tmgAdsInit() {
    try {
        tmgAdsEvent("tmggpt-init:start"), tmgAds.log = tmgAds.log || [], tmgAds.ads = {}, tmgAds.adslots = {}, tmgAds.errors = [], tmgAds.data = {
            metatags: {},
            metrics: {},
            ads: {}
        }, tmgAds.performance = {}, tmgAds.refreshTimers = {}, tmgAds.plugins = {
            gpt: {
                networkid: 6582,
                servername: "ad.doubleclick.net",
                async: !0,
                enableSingleRequest: !1,
                enableAsyncRendering: !0,
                collapseEmptyDivs: !0,
                setLocation: !1,
                vastOutputVersion: "xml_vast3",
                url: "https://www.googletagservices.com/tag/js/gpt.js",
                ooyalaCMSID: 5694,
                geoapi: {
                    precision: 2e4,
                    watching: !1,
                    test: "string"
                },
                useppid: !0,
                preload: function() {
                    return null
                },
                callback: function() {
                    return null
                }
            },
            blockdomain: ["chase.telegraph.co.uk", "cms1.aem-dev1.awspreprod.telegraph.co.uk", "cms1.aem-dev2.awspreprod.telegraph.co.uk", "cms1.aem-dev3.awspreprod.telegraph.co.uk", "cms1.aem-dev4.awspreprod.telegraph.co.uk", "cms1.aem-dev5.awspreprod.telegraph.co.uk", "cms1.aem-dev6.awspreprod.telegraph.co.uk", "cms1.aem-dev7.awspreprod.telegraph.co.uk", "cms1.aem-dev8.awspreprod.telegraph.co.uk", "cms1.aem-dev9.awspreprod.telegraph.co.uk", "cms1.aem-dev10.awspreprod.telegraph.co.uk", "cms1.aem-dev11.awspreprod.telegraph.co.uk", "cms1.aem-dev12.awspreprod.telegraph.co.uk", "cms1.aem-test1.awspreprod.telegraph.co.uk", "cms1.aem-test2.awspreprod.telegraph.co.uk", "cms1.aem-test3.awspreprod.telegraph.co.uk", "cms1.aem-test4.awspreprod.telegraph.co.uk", "cms1.aem-test5.awspreprod.telegraph.co.uk", "cms1.aem-test6.awspreprod.telegraph.co.uk", "cms1.aem-editorial1.awspreprod.telegraph.co.uk", "cms1.aem-editorial2.awspreprod.telegraph.co.uk", "cms1.aem-nitro1.awspreprod.telegraph.co.uk", "cms1.aem-demo.awspreprod.telegraph.co.uk", "cms1.aem-perf1.awspreprod.telegraph.co.uk", "cms1.aem-perf2.awspreprod.telegraph.co.uk"],
            test: {
                active: !1,
                status: !1,
                async: !1,
                url: "//adtools.telegraph.co.uk/tools/delay/?delay=4&type=js"
            },
            refurl: {
                active: !0
            },
            sizemapping: {
                x: {
                    size: [1368, 768],
                    ban: [
                        [970, 250],
                        [970, 90],
                        [970, 66],
                        [940, 250],
                        [900, 250],
                        [728, 90],
                        [468, 60],
                        [1, 1], "fluid"
                    ],
                    bin: [
                        [970, 250],
                        [970, 90],
                        [970, 66],
                        [940, 250],
                        [900, 250],
                        [728, 90],
                        [1, 1], "fluid"
                    ],
                    bbt: [
                        [970, 250],
                        [970, 90],
                        [970, 66],
                        [940, 250],
                        [900, 250],
                        [728, 90],
                        [1, 1], "fluid"
                    ],
                    bbb: [
                        [970, 250],
                        [970, 90],
                        [970, 66],
                        [940, 250],
                        [900, 250],
                        [728, 90],
                        [1, 1], "fluid"
                    ],
                    myb: [
                        [970, 250],
                        [970, 90],
                        [970, 66],
                        [940, 250],
                        [900, 250],
                        [728, 90],
                        [1, 1], "fluid"
                    ],
                    mpu: [
                        [300, 600],
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [1, 1], "fluid"
                    ],
                    hpg: [
                        [300, 600],
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [160, 600],
                        [120, 600],
                        [1, 1], "fluid"
                    ],
                    mob: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 100],
                        [320, 50],
                        [300, 50],
                        [1, 1], "fluid"
                    ],
                    dyn: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 50],
                        [300, 50],
                        [1, 1], "fluid"
                    ],
                    lmpu: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [1, 1], "fluid"
                    ],
                    nat: [
                        [1, 1], "fluid"
                    ],
                    yel: [3, 3],
                    inr: [1, 1],
                    tmg: [1, 1],
                    ftr: [1, 1],
                    vid: "620x415"
                },
                l: {
                    size: [1008, 768],
                    ban: [
                        [970, 250],
                        [970, 90],
                        [970, 66],
                        [940, 250],
                        [900, 250],
                        [728, 90],
                        [468, 60],
                        [1, 1], "fluid"
                    ],
                    bin: [
                        [970, 250],
                        [970, 90],
                        [970, 66],
                        [940, 250],
                        [900, 250],
                        [728, 90],
                        [1, 1], "fluid"
                    ],
                    bbt: [
                        [970, 250],
                        [970, 90],
                        [970, 66],
                        [940, 250],
                        [900, 250],
                        [728, 90],
                        [1, 1], "fluid"
                    ],
                    bbb: [
                        [970, 250],
                        [970, 90],
                        [970, 66],
                        [940, 250],
                        [900, 250],
                        [728, 90],
                        [1, 1], "fluid"
                    ],
                    myb: [
                        [970, 250],
                        [970, 90],
                        [970, 66],
                        [940, 250],
                        [900, 250],
                        [728, 90],
                        [1, 1], "fluid"
                    ],
                    mpu: [
                        [300, 600],
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [1, 1], "fluid"
                    ],
                    hpg: [
                        [300, 600],
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [160, 600],
                        [120, 600],
                        [1, 1], "fluid"
                    ],
                    mob: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 100],
                        [320, 50],
                        [300, 50],
                        [1, 1], "fluid"
                    ],
                    dyn: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 50],
                        [300, 50],
                        [1, 1], "fluid"
                    ],
                    lmpu: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [1, 1], "fluid"
                    ],
                    nat: [
                        [1, 1], "fluid"
                    ],
                    yel: [3, 3],
                    inr: [1, 1],
                    tmg: [1, 1],
                    ftr: [1, 1],
                    vid: "620x415"
                },
                m: {
                    size: [730, 480],
                    ban: [
                        [728, 90],
                        [468, 60],
                        [1, 1], "fluid"
                    ],
                    bin: [
                        [728, 90],
                        [468, 60],
                        [1, 1], "fluid"
                    ],
                    bbt: [
                        [728, 90],
                        [468, 60],
                        [1, 1], "fluid"
                    ],
                    bbb: [
                        [728, 90],
                        [468, 60],
                        [1, 1], "fluid"
                    ],
                    myb: [
                        [728, 90],
                        [468, 60],
                        [1, 1], "fluid"
                    ],
                    mpu: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [1, 1], "fluid"
                    ],
                    hpg: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [1, 1], "fluid"
                    ],
                    mob: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 100],
                        [320, 50],
                        [300, 50],
                        [1, 1], "fluid"
                    ],
                    dyn: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 50],
                        [300, 50],
                        [1, 1], "fluid"
                    ],
                    lmpu: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [1, 1], "fluid"
                    ],
                    nat: [
                        [1, 1], "fluid"
                    ],
                    yel: [3, 3],
                    inr: [1, 1],
                    tmg: [1, 1],
                    ftr: [1, 1],
                    vid: "620x415"
                },
                s: {
                    size: [480, 320],
                    ban: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 100],
                        [320, 50],
                        [300, 50],
                        [468, 60],
                        [1, 1], "fluid"
                    ],
                    bin: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 100],
                        [320, 50],
                        [300, 50],
                        [468, 60],
                        [1, 1], "fluid"
                    ],
                    bbt: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 100],
                        [320, 50],
                        [300, 50],
                        [468, 60],
                        [1, 1], "fluid"
                    ],
                    bbb: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 100],
                        [320, 50],
                        [300, 50],
                        [468, 60],
                        [1, 1], "fluid"
                    ],
                    myb: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 100],
                        [320, 50],
                        [300, 50],
                        [468, 60],
                        [1, 1], "fluid"
                    ],
                    mpu: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 100],
                        [320, 50],
                        [300, 50],
                        [468, 60],
                        [1, 1], "fluid"
                    ],
                    hpg: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 100],
                        [320, 50],
                        [300, 50],
                        [468, 60],
                        [1, 1], "fluid"
                    ],
                    mob: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 100],
                        [320, 50],
                        [300, 50],
                        [468, 60],
                        [1, 1], "fluid"
                    ],
                    dyn: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [1, 1], "fluid"
                    ],
                    lmpu: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [1, 1], "fluid"
                    ],
                    nat: [
                        [1, 1], "fluid"
                    ],
                    yel: [3, 3],
                    inr: [1, 1],
                    tmg: [1, 1],
                    ftr: [1, 1],
                    vid: "300x235"
                },
                xs: {
                    size: [0, 0],
                    ban: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 100],
                        [320, 50],
                        [300, 50],
                        [1, 1], "fluid"
                    ],
                    bin: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 100],
                        [320, 50],
                        [300, 50],
                        [1, 1], "fluid"
                    ],
                    bbt: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 100],
                        [320, 50],
                        [300, 50],
                        [1, 1], "fluid"
                    ],
                    bbb: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 100],
                        [320, 50],
                        [300, 50],
                        [1, 1], "fluid"
                    ],
                    myb: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 100],
                        [320, 50],
                        [300, 50],
                        [1, 1], "fluid"
                    ],
                    mpu: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 100],
                        [320, 50],
                        [300, 50],
                        [1, 1], "fluid"
                    ],
                    hpg: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 100],
                        [320, 50],
                        [300, 50],
                        [1, 1], "fluid"
                    ],
                    mob: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 100],
                        [320, 50],
                        [300, 50],
                        [1, 1], "fluid"
                    ],
                    dyn: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 50],
                        [300, 50],
                        [1, 1], "fluid"
                    ],
                    lmpu: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [1, 1], "fluid"
                    ],
                    nat: [
                        [1, 1], "fluid"
                    ],
                    yel: [3, 3],
                    inr: [1, 1],
                    tmg: [1, 1],
                    ftr: [1, 1],
                    vid: "300x235"
                },
                default: {
                    size: [0, 0],
                    ban: [
                        [970, 250],
                        [970, 90],
                        [970, 66],
                        [940, 250],
                        [900, 250],
                        [728, 90],
                        [468, 60],
                        [1, 1], "fluid"
                    ],
                    bin: [
                        [970, 250],
                        [970, 90],
                        [970, 66],
                        [940, 250],
                        [900, 250],
                        [728, 90],
                        [468, 60],
                        [1, 1], "fluid"
                    ],
                    bbt: [
                        [970, 250],
                        [970, 90],
                        [970, 66],
                        [940, 250],
                        [900, 250],
                        [728, 90],
                        [468, 60],
                        [1, 1], "fluid"
                    ],
                    bbb: [
                        [970, 250],
                        [970, 90],
                        [970, 66],
                        [940, 250],
                        [900, 250],
                        [728, 90],
                        [468, 60],
                        [1, 1], "fluid"
                    ],
                    mpu: [
                        [300, 600],
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [1, 1], "fluid"
                    ],
                    hpg: [
                        [300, 600],
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [160, 600],
                        [120, 600],
                        [1, 1], "fluid"
                    ],
                    mob: [
                        [300, 250],
                        [320, 100],
                        [300, 215],
                        [300, 189],
                        [320, 50],
                        [300, 50],
                        [1, 1], "fluid"
                    ],
                    dyn: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [320, 50],
                        [300, 50],
                        [1, 1], "fluid"
                    ],
                    lmpu: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [1, 1], "fluid"
                    ],
                    nat: [
                        [1, 1], "fluid"
                    ],
                    yel: [3, 3],
                    inr: [1, 1],
                    tmg: [1, 1],
                    ftr: [1, 1],
                    vid: "620x415"
                }
            },
            adiesticky: tmgAdsGetURLParam("adiesticky", window.location.search),
            adtest: tmgAdsGetURLParam("adtest", window.location.search),
            adteston: tmgAdsGetURLParam("adteston", window.location.search),
            adconsole: tmgAdsGetURLParam("adconsole", window.location.search),
            adkill: tmgAdsGetURLParam("adkill", window.location.search),
            adgptoff: tmgAdsGetURLParam("adgptoff", window.location.search),
            adviewability: tmgAdsGetURLParam("adviewability", window.location.search),
            advast4: tmgAdsGetURLParam("advast4", window.location.search),
            adscroll: tmgAdsGetURLParam("adscroll", window.location.search),
            adscrollon: tmgAdsGetURLParam("adscrollon", window.location.search),
            adscrolloff: tmgAdsGetURLParam("adscrolloff", window.location.search),
            adgrapeshoton: tmgAdsGetURLParam("adgrapeshoton", window.location.search),
            adgrapeshotoff: tmgAdsGetURLParam("adgrapeshotoff", window.location.search),
            adevidonon: tmgAdsGetURLParam("adevidonon", window.location.search),
            adevidonoff: tmgAdsGetURLParam("adevidonoff", window.location.search),
            adbeemrayon: tmgAdsGetURLParam("adbeemrayon", window.location.search),
            adbeemrayoff: tmgAdsGetURLParam("adbeemrayoff", window.location.search),
            adbeemraytest: tmgAdsGetURLParam("adbeemraytest", window.location.search),
            adlotameon: tmgAdsGetURLParam("adlotameon", window.location.search),
            adlotameoff: tmgAdsGetURLParam("adlotameoff", window.location.search),
            adhbon: tmgAdsGetURLParam("adhbon", window.location.search),
            adhboff: tmgAdsGetURLParam("adhboff", window.location.search),
            adpermutiveon: tmgAdsGetURLParam("adpermutiveon", window.location.search),
            adpermutiveoff: tmgAdsGetURLParam("adpermutiveoff", window.location.search),
            adprebidon: tmgAdsGetURLParam("adprebidon", window.location.search),
            adprebidoff: tmgAdsGetURLParam("adprebidoff", window.location.search),
            adprebidtest: tmgAdsGetURLParam("adprebidtest", window.location.search),
            adixon: tmgAdsGetURLParam("adixon", window.location.search),
            adixoff: tmgAdsGetURLParam("adixoff", window.location.search),
            adixvidon: tmgAdsGetURLParam("adixvidon", window.location.search),
            adixvidoff: tmgAdsGetURLParam("adixvidoff", window.location.search),
            adixtest: tmgAdsGetURLParam("adixtest", window.location.search),
            adamazonon: tmgAdsGetURLParam("adamazonon", window.location.search),
            adamazonoff: tmgAdsGetURLParam("adamazonoff", window.location.search),
            adamazona9deals: tmgAdsGetURLParam("adamazondeals", window.location.search),
            admytoff: tmgAdsGetURLParam("admytoff", window.location.search),
            adstickyon: tmgAdsGetURLParam("adstickyon", window.location.search),
            adstickyoff: tmgAdsGetURLParam("adstickyoff", window.location.search),
            adnativeon: tmgAdsGetURLParam("adnativeon", window.location.search),
            adnativeoff: tmgAdsGetURLParam("adnativeoff", window.location.search),
            dnt: {
                active: !0,
                state: tmgAdsGetDoNotTrack()
            },
            counters: 20,
            tmgcookies: {
                active: !0
            },
            performance: {
                active: !0,
                supported: "unknown"
            },
            chartbeat: {
                active: !1
            },
            quantcast: {
                active: !0,
                maxSegs: 10
            },
            lazyLoad: {
                xs: {
                    active: !0,
                    offset: -250,
                    delayCall: 150,
                    geo: [],
                    channels: [],
                    lazy: ["lmpu", "myb", "nat", "bin", "dyn", "bbt", "bbb"],
                    exempt: ["advert_tmg_nat_story_outbrain"]
                },
                s: {
                    active: !0,
                    offset: -250,
                    delayCall: 150,
                    geo: [],
                    channels: [],
                    lazy: ["lmpu", "myb", "nat", "bin", "dyn", "bbt", "bbb"],
                    exempt: ["advert_tmg_nat_story_outbrain"]
                },
                m: {
                    active: !0,
                    offset: -250,
                    delayCall: 150,
                    geo: [],
                    channels: [],
                    lazy: ["lmpu", "myb", "nat", "bin", "dyn", "bbt", "bbb"],
                    exempt: ["advert_tmg_nat_story_outbrain"]
                },
                l: {
                    active: !0,
                    offset: -750,
                    delayCall: 150,
                    geo: [],
                    channels: [],
                    lazy: ["lmpu", "myb", "nat", "bin", "dyn", "bbt", "bbb"],
                    exempt: ["advert_tmg_nat_story_outbrain"]
                },
                x: {
                    active: !0,
                    offset: -750,
                    delayCall: 150,
                    geo: [],
                    channels: [],
                    lazy: ["lmpu", "myb", "nat", "bin", "dyn", "bbt", "bbb"],
                    exempt: ["advert_tmg_nat_story_outbrain"]
                }
            },
            dynad: {
                active: !0,
                viewports: ["xs", "s", "m"],
                config: {
                    story: {
                        x: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        l: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        m: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        s: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        xs: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        }
                    },
                    live: {
                        x: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        l: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        m: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        s: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        xs: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        }
                    },
                    video: {
                        x: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        l: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        m: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        s: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        xs: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        }
                    },
                    "video-play": {
                        x: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        l: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        m: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        s: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        xs: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        }
                    },
                    gallery: {
                        x: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        l: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        m: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        s: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        xs: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        }
                    },
                    "travel-product": {
                        x: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        l: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        m: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        s: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        xs: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        }
                    },
                    "travel-product-listing": {
                        x: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        l: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        m: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        s: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        xs: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        }
                    },
                    "travel-destinations": {
                        x: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        l: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        m: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        s: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        xs: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        }
                    },
                    "travel-review": {
                        x: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        l: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        m: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        s: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        xs: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        }
                    },
                    bare: {
                        x: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        l: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        m: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        s: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        xs: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        }
                    },
                    unset: {
                        x: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        l: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        m: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        s: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        xs: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        }
                    },
                    default: {
                        x: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        l: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        m: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        s: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        },
                        xs: {
                            firstAd: 850,
                            otherAd: 1e3,
                            minParaChars: 150
                        }
                    }
                }
            },
            newadtests: [],
            mytelegraph: {
                isActive: !0,
                isApplied: !1,
                isPlatform: "unknown",
                active: function() {
                    return void 0 !== tmgAds.mytelegraph && tmgAds.mytelegraph
                },
                exempt: ["sponsored", "commerce", "about-us", "events", "financial-services", "promotions"],
                refreshPeriod: 20,
                refreshLimit: 2e3,
                refreshCount: 0
            },
            adobe: {
                active: !0
            },
            adomik: {
                active: !0,
                getAdGroup: function() {
                    var e = Math.random();
                    switch (!1) {
                        case !(e < .09):
                            return "ad_ex" + Math.floor(100 * e);
                        case !(e < .1):
                            return "ad_bc";
                        default:
                            return "ad_opt"
                    }
                }
            },
            adSlotRefresh: {
                active: !0,
                retryPeriod: 200,
                retryLimit: 60,
                retryCount: 0,
                exemptAdSlots: ["nat", "bbt", "bbb", "dyn", "tmg", "inr", "opt", "ftr"],
                pagetypes: ["index", "topic", "story", "live", "video", "gallery"]
            },
            oopunits: ["tmg", "inr", "int", "opt", "ftr"],
            evidon: {
                name: "evidon",
                id: 1926,
                active: !0,
                status: "init",
                rootDomain: "telegraph",
                cdn: "https://c.evidon.com/",
                noticecdn: "https://c.evidon.com/sitenotice/",
                urlNotice: "https://c.evidon.com/sitenotice/evidon-sitenotice-tag.js",
                urlThemes: null,
                urlLocation: null,
                urlSettings: null,
                daisyBit: null,
                exemptDoms: ["secure.telegraph.co.uk", "premium.telegraph.co.uk"],
                getConsentData: null,
                getVendorConsents: null,
                preload: function() {
                    tmgAds.plugins.evidon.getConsent(), window.evidon = {}, window.evidon.id = tmgAds.plugins.evidon.id, tmgAds.plugins.evidon.urlLocation = tmgAds.plugins.evidon.cdn + "geo/country.js", tmgAds.plugins.evidon.urlThemes = tmgAds.plugins.evidon.noticecdn + tmgAds.plugins.evidon.id + "/snthemes.js", tmgAds.plugins.evidon.urlSettings = tmgAds.plugins.evidon.noticecdn + tmgAds.plugins.evidon.id + "/telegraph/settings.js", __cmp("getConsentData", {}, function(e) {
                        tmgAds.metrics.evidon_cmp_loaded = tmgAdsTimer(), tmgAds.plugins.evidon.getConsent(), localStorage.setItem("tmgAdsCmpDaisyBit", tmgAds.plugins.evidon.getConsentData.consentData)
                    }), window.evidon.priorConsentCallback = function() {
                        var e = new CustomEvent("gdpr:priorConsent");
                        document.dispatchEvent(e)
                    }
                },
                getConsent: function() {
                    window.__cmp("getConsentData", {}, function(e) {
                        tmgAds.plugins.evidon.getConsentData = e
                    }), window.__cmp("getVendorConsents", {}, function(e) {
                        tmgAds.plugins.evidon.getVendorConsents = e
                    })
                },
                callback: function() {
                    var e, t;
                    tmgAdsLoadJS("evidon-location", tmgAds.plugins.evidon.urlLocation, function() {}), tmgAdsLoadJS("evidon-themes", tmgAds.plugins.evidon.urlThemes, function() {}), tmgAdsLoadJS("evidon-settings", tmgAds.plugins.evidon.urlSettings, function() {}), t = 10,
                        function s() {
                            clearTimeout(e), t *= 2, void 0 !== tmgAds.config && void 0 !== tmgAds.config.deliveryModel ? (-1 == document.cookie.indexOf("_evidon_consent_cookie") && document.body.classList.add("gdprConsentNotice"), document.addEventListener("gdpr:priorConsent", function() {
                                document.body.classList.remove("gdprConsentNotice")
                            })) : e = setTimeout(function() {
                                s()
                            }, t)
                        }()
                }
            },
            beemray: {
                name: "beemray",
                active: !0,
                status: "init",
                id: "5e463430-b036-4755-ac9a-233b7a357002",
                url: "https://telegraph.sdk.beemray.com/content/websdk/5e463430-b036-4755-ac9a-233b7a357002?source=" + btoa(location.href),
                testurl: "https://stage.sdk.beemray.com/content/websdk/5e463430-b036-4755-ac9a-233b7a357002?source=" + btoa(location.href),
                dfp: [],
                segments: [],
                timeout: 800,
                preload: function() {
                    tmgAds.plugins.beemray.status = "requested", tmgAds.plugins.beemray.dfp.push(tmgAds.plugins.beemray.status), window.addEventListener("br_sdkload", function() {
                        tmgAds.plugins.beemray.dfp = [], tmgAds.plugins.beemray.status = "received", tmgAds.plugins.beemray.dfp.push(tmgAds.plugins.beemray.status), beemray.EventApi.create("WebSDK", "/rest/event/web/plain").send(function(e) {
                            if (tmgAds.plugins.beemray.dfp = [], null === e) return tmgAds.plugins.beemray.status = "received-null", void tmgAds.plugins.beemray.dfp.push(tmgAds.plugins.beemray.status);
                            for (var t in tmgAds.plugins.beemray.response = e, tmgAds.plugins.beemray.status = "received-segments", tmgAds.plugins.beemray.dfp.push(tmgAds.plugins.beemray.status), e.list) tmgAds.plugins.beemray.dfp.push(e.list[t].id), tmgAds.plugins.beemray.dfp.push(e.list[t].place.id);
                            if (e.hasOwnProperty("stand") && e.stand.hasOwnProperty("userPlaceInfo") && e.stand.userPlaceInfo.hasOwnProperty("state"))
                                for (t = 0; t <= e.stand.userPlaceInfo.state.length - 1; t++) tmgAds.plugins.beemray.dfp.push(e.stand.userPlaceInfo.state[t]);
                            tmgAdsUpdateDFPCustomVars()
                        }, tmgAds.plugins.beemray.timeout)
                    })
                },
                callback: function() {
                    tmgAdsLog("tmgAds.plugins.beemray.callback()")
                }
            },
            permutive: {
                name: "permutive",
                id: "e8eaf546-a7b4-4d26-bc0a-3a71131d21c3",
                active: !1,
                data: null,
                status: "init",
                url: "https://cdn.permutive.com/e8eaf546-a7b4-4d26-bc0a-3a71131d21c3-web.js",
                preload: function() {
                    ! function(e, t, s, d, i) {
                        if (!t) {
                            t = t || {}, window.permutive = t, t.q = [], t.config = {} || {}, t.config.projectId = "e8eaf546-a7b4-4d26-bc0a-3a71131d21c3", t.config.apiKey = "d0ad7082-d741-4059-848f-e8d3a8aae2f0", t.config.environment = t.config.environment || "production";
                            for (var a = ["addon", "identify", "track", "trigger", "query", "segment", "segments", "ready", "on", "once", "user", "consent"], n = 0; n < a.length; n++) {
                                var r = a[n];
                                t[r] = function(e) {
                                    return function() {
                                        var s = Array.prototype.slice.call(arguments, 0);
                                        t.q.push({
                                            functionName: e,
                                            arguments: s
                                        })
                                    }
                                }(r)
                            }
                        }
                    }(document, window.permutive), tmgAds.plugins.permutive.status = "preload"
                },
                callback: function() {
                    tmgAds.plugins.permutive.status = "loaded"
                }
            },
            lotame: {
                name: "lotame",
                id: "LOTCC_12639",
                active: !0,
                data: null,
                status: "init",
                url: "https://tags.crwdcntrl.net/c/12639/cc.js?ns=_cc12639",
                url_api: "https://ad.crwdcntrl.net/5/c=13271/pe=y/callback=tmgAds.plugins.lotame.data_extract",
                preload: function() {
                    tmgAds.plugins.lotame.status = "preload"
                },
                callback: function() {
                    tmgAds.plugins.lotame.status = "loaded", _cc12639.bcp();
                    LOTCC.setConsent(function(e) {}, 12639, {
                        analytics: !0,
                        crossdevice: !0,
                        datasharing: !0,
                        targeting: !0
                    }), tmgAdsLoadJS("lotame-api", tmgAds.plugins.lotame.url_api, function() {}, "loatame-api")
                },
                data_extract: function(e) {
                    tmgAds.plugins.lotame.data = e
                }
            },
            scroll: {
                name: "scroll",
                active: !1,
                status: "init",
                url: "https://static.scroll.com/js/scroll.js",
                preload: function() {
                    tmgAdsLog("tmgAds.plugins.scroll.preload()"),
                        function(e, t, s, d) {
                            if (!e[t]) {
                                var i = e[t] = {};
                                i._q = [], i.do = function(e) {
                                    i._q.push(e)
                                }
                            }
                        }(window, "Scroll"), Scroll.config = {
                            detected: document.cookie.indexOf("scroll0=") > -1
                        }
                },
                callback: function() {
                    tmgAdsLog("tmgAds.plugins.scroll.callback()")
                }
            },
            grapeshot: {
                name: "grapeshot",
                active: !0,
                status: "init",
                maxSegs: 20,
                retryPeriod: 200,
                retryLimit: 10,
                retryCount: 0,
                loadStatus: !1,
                url: "https://telegraph.grapeshot.co.uk/main/channels.cgi?url=" + location.protocol + "//" + location.host + location.pathname,
                preload: function() {
                    tmgAdsLog("tmgAds.plugins.grapeshot.preload()")
                },
                callback: function() {
                    tmgAdsLog("tmgAds.plugins.grapeshot.callback()"), tmgAds.grapeshot = {
                        raw: null,
                        dfp: []
                    }, void 0 !== window.gs_channels ? (tmgAds.grapeshot = {
                        raw: window.gs_channels,
                        dfp: window.gs_channels.split(",")
                    }, tmgAdsLog("GRAPESHOT: window.gs_channels exists :: Num of channls =" + tmgAds.grapeshot.dfp.length + " :: Content = " + tmgAds.grapeshot.dfp.toString())) : tmgAdsLog("GRAPESHOT: window.gs_channels does not exist:"), tmgAdsInitData(), tmgAdsInitDFP()
                }
            },
            nativeads: {
                active: !0,
                counters: {},
                config: {
                    name: "Native advert configuration",
                    version: "1.2",
                    date: "2018-07-25",
                    active: !0,
                    exclude: ["subscriptions", "rewards"],
                    pagetype: {
                        index: {
                            adverts: [{
                                id: "nat_index_logo",
                                active: !1,
                                include: [],
                                exclude: [],
                                selector: ".header-breadcrumbs__list",
                                position: "after",
                                poscount: 0,
                                viewports: ["xs", "s", "m", "l", "x"]
                            }, {
                                id: "nat_index_sidebar",
                                active: !0,
                                include: [],
                                exclude: [],
                                selector: "aside.social-follow",
                                position: "after",
                                poscount: 0,
                                viewports: ["l", "x"]
                            }, {
                                id: "nat_index_mob_portal_newsfeed",
                                active: !0,
                                include: [],
                                exclude: [],
                                selector: ".splitter__slot .splitter__slot--2",
                                position: "after",
                                poscount: 0,
                                viewports: ["xs", "s"]
                            }, {
                                id: "nat_index_firstlist_mob",
                                active: !0,
                                include: [],
                                exclude: ["sport", "opinion", "fashion", "luxury", "portal"],
                                selector: ".js-list-of-entities__container",
                                position: "after",
                                poscount: 0,
                                viewports: ["xs", "s"]
                            }, {
                                id: "nat_index_multilist_mob",
                                active: !1,
                                include: [],
                                exclude: [],
                                selector: ".js-list-of-entities__container",
                                list: {
                                    position: 5,
                                    repeat: !0
                                },
                                viewports: ["xs", "s", "m"]
                            }, {
                                id: "nat_index_sponsored_list_item",
                                active: !0,
                                include: ["portal"],
                                exclude: [],
                                selector: ".sponsored-list-item",
                                position: "replace",
                                poscount: 0,
                                viewports: ["xs", "s", "m", "l", "x"]
                            }, {
                                id: "nat_index_sparkbrain_1",
                                active: !0,
                                include: [],
                                exclude: [],
                                selector: ".curatedList.version-6.version-6--sponsored.section",
                                position: "replace",
                                poscount: 0,
                                viewports: ["xs", "s", "m", "l", "x"]
                            }, {
                                id: "nat_index_sparkbrain_2",
                                active: !0,
                                include: [],
                                exclude: [],
                                selector: ".curatedList.version-6.version-6--sponsored.section",
                                position: "replace",
                                poscount: 1,
                                viewports: ["xs", "s", "m", "l", "x"]
                            }]
                        },
                        story: {
                            adverts: [{
                                id: "nat_story_logo",
                                active: !1,
                                include: [],
                                exclude: [],
                                selector: ".header-breadcrumbs__list",
                                position: "after",
                                poscount: 0,
                                viewports: ["xs", "s", "m", "l", "x"]
                            }, {
                                id: "nat_story_sidebar",
                                active: !0,
                                include: [],
                                exclude: [],
                                selector: ".article__sidebar .social-follow",
                                position: "before",
                                poscount: 0,
                                viewports: ["l", "x"]
                            }, {
                                id: "nat_story_top",
                                active: !0,
                                include: [],
                                exclude: [],
                                selector: ".hero-area-wrapper",
                                position: "after",
                                poscount: 0,
                                viewports: ["xs", "s", "m", "l", "x"]
                            }, {
                                id: "nat_story_sparkbrain_1",
                                active: !0,
                                include: [],
                                exclude: [],
                                selector: ".article__spark #polar-ad-article-bottom",
                                position: "before",
                                poscount: 0,
                                viewports: ["xs", "s", "m", "l", "x"]
                            }, {
                                id: "nat_story_outbrain",
                                active: !0,
                                include: [],
                                exclude: [],
                                selector: ".article__spark #polar-ad-article-bottom",
                                position: "before",
                                poscount: 0,
                                viewports: ["xs", "s", "m", "l", "x"]
                            }, {
                                id: "nat_story_sparkbrain_2",
                                active: !0,
                                include: [],
                                exclude: [],
                                selector: ".article__spark #polar-ad-article-bottom",
                                position: "after",
                                poscount: 0,
                                viewports: ["xs", "s", "m", "l", "x"]
                            }, {
                                id: "bbt",
                                active: !1,
                                include: [],
                                exclude: [],
                                selector: ".snippet-onward-journey",
                                position: "before",
                                poscount: 0,
                                style: "padding-left:16px; padding-right:16px",
                                viewports: ["l", "x"]
                            }, {
                                id: "bbb",
                                active: !0,
                                include: [],
                                exclude: [],
                                selector: ".snippet-onward-journey",
                                position: "after",
                                poscount: 0,
                                style: "padding-left:16px; padding-right:16px",
                                viewports: ["xs", "s", "l", "x"]
                            }, {
                                id: "nat_story_list_onward_mob",
                                active: !0,
                                include: [],
                                exclude: [],
                                selector: ".article__related .list:last-child .list-of-entities__container",
                                list: {
                                    position: 6,
                                    repeat: !0
                                },
                                viewports: ["xs", "s"]
                            }, {
                                id: "nat_story_bottom",
                                active: !0,
                                include: [],
                                exclude: [],
                                selector: ".listOfTags",
                                position: "before",
                                viewports: ["xs", "s", "m", "l", "x"]
                            }]
                        },
                        gallery: {
                            adverts: [{
                                id: "nat_story_sparkbrain_1",
                                active: !0,
                                include: [],
                                exclude: [],
                                selector: ".article__spark #polar-ad-article-bottom",
                                position: "before",
                                poscount: 0,
                                viewports: ["xs", "s", "m", "l", "x"]
                            }, {
                                id: "nat_story_outbrain",
                                active: !0,
                                include: [],
                                exclude: [],
                                selector: ".article__spark #polar-ad-article-bottom",
                                position: "before",
                                poscount: 0,
                                viewports: ["xs", "s", "m", "l", "x"]
                            }, {
                                id: "nat_story_sparkbrain_2",
                                active: !0,
                                include: [],
                                exclude: [],
                                selector: ".article__spark #polar-ad-article-bottom",
                                position: "after",
                                poscount: 0,
                                viewports: ["xs", "s", "m", "l", "x"]
                            }]
                        }
                    }
                }
            },
            models: {
                story: [{
                    viewport: "x",
                    ruleName: "Default",
                    model: "mpu",
                    minHeight: 900,
                    refreshRate: 11e3,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "l",
                    ruleName: "Default",
                    model: "mpu",
                    minHeight: 900,
                    refreshRate: 11e3,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "m",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 0,
                    refreshRate: 15e3,
                    refreshCycle: 2,
                    exempt: ["nat"]
                }, {
                    viewport: "s",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 0,
                    refreshRate: 15e3,
                    refreshCycle: 2,
                    exempt: ["nat", "bbt", "bbb"]
                }, {
                    viewport: "xs",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 0,
                    refreshRate: 15e3,
                    refreshCycle: 2,
                    exempt: ["nat", "bbt", "bbb"]
                }],
                live: [{
                    viewport: "x",
                    ruleName: "Default",
                    model: "mpu",
                    minHeight: 900,
                    refreshRate: 11e3,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "l",
                    ruleName: "Default",
                    model: "mpu",
                    minHeight: 900,
                    refreshRate: 11e3,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "m",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 0,
                    refreshRate: 15e3,
                    refreshCycle: 2,
                    exempt: ["nat"]
                }, {
                    viewport: "s",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 0,
                    refreshRate: 15e3,
                    refreshCycle: 2,
                    exempt: ["nat", "bbt", "bbb"]
                }, {
                    viewport: "xs",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 0,
                    refreshRate: 15e3,
                    refreshCycle: 2,
                    exempt: ["nat", "bbt", "bbb"]
                }],
                video: [{
                    viewport: "x",
                    ruleName: "Default",
                    model: "mpu",
                    minHeight: 900,
                    refreshRate: 11e3,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "l",
                    ruleName: "Default",
                    model: "mpu",
                    minHeight: 900,
                    refreshRate: 11e3,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "m",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 0,
                    refreshRate: 15e3,
                    refreshCycle: 2,
                    exempt: ["nat"]
                }, {
                    viewport: "s",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 0,
                    refreshRate: 15e3,
                    refreshCycle: 2,
                    exempt: ["nat", "bbt", "bbb"]
                }, {
                    viewport: "xs",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 0,
                    refreshRate: 15e3,
                    refreshCycle: 2,
                    exempt: ["nat", "bbt", "bbb"]
                }],
                "video-play": [{
                    viewport: "x",
                    ruleName: "Default",
                    model: "mpu",
                    minHeight: 900,
                    refreshRate: 11e3,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "l",
                    ruleName: "Default",
                    model: "mpu",
                    minHeight: 900,
                    refreshRate: 11e3,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "m",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 0,
                    refreshRate: 15e3,
                    refreshCycle: 2,
                    exempt: ["nat"]
                }, {
                    viewport: "s",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 0,
                    refreshRate: 15e3,
                    refreshCycle: 2,
                    exempt: ["nat", "bbt", "bbb"]
                }, {
                    viewport: "xs",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 0,
                    refreshRate: 15e3,
                    refreshCycle: 2,
                    exempt: ["nat", "bbt", "bbb"]
                }],
                index: [{
                    viewport: "x",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 900,
                    refreshRate: 11e3,
                    refreshCycle: 1,
                    exempt: ["nat", "mpu", "hpg", "bin", "lmpu"]
                }, {
                    viewport: "l",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 900,
                    refreshRate: 11e3,
                    refreshCycle: 1,
                    exempt: ["nat", "mpu", "hpg", "bin", "lmpu"]
                }, {
                    viewport: "m",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 0,
                    refreshRate: 11e3,
                    refreshCycle: 1,
                    exempt: ["nat", "mpu", "hpg", "bin", "lmpu"]
                }, {
                    viewport: "s",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 0,
                    refreshRate: 11e3,
                    refreshCycle: 1,
                    exempt: ["nat", "mpu", "hpg", "bin", "lmpu"]
                }, {
                    viewport: "xs",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 0,
                    refreshRate: 11e3,
                    refreshCycle: 1,
                    exempt: ["nat", "mpu", "hpg", "bin", "lmpu"]
                }],
                topic: [{
                    viewport: "x",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 900,
                    refreshRate: 11e3,
                    refreshCycle: 1,
                    exempt: ["nat", "mpu", "hpg", "bin", "lmpu"]
                }, {
                    viewport: "l",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 900,
                    refreshRate: 11e3,
                    refreshCycle: 1,
                    exempt: ["nat", "mpu", "hpg", "bin", "lmpu"]
                }, {
                    viewport: "m",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 0,
                    refreshRate: 11e3,
                    refreshCycle: 1,
                    exempt: ["nat", "mpu", "hpg", "bin", "lmpu"]
                }, {
                    viewport: "s",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 0,
                    refreshRate: 11e3,
                    refreshCycle: 1,
                    exempt: ["nat", "mpu", "hpg", "bin", "lmpu"]
                }, {
                    viewport: "xs",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 0,
                    refreshRate: 11e3,
                    refreshCycle: 1,
                    exempt: ["nat", "mpu", "hpg", "bin", "lmpu"]
                }],
                "video-index": [{
                    viewport: "x",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "l",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "m",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "s",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "xs",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }],
                gallery: [{
                    viewport: "x",
                    ruleName: "Default",
                    model: "mpu",
                    minHeight: 900,
                    refreshRate: 11e3,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "l",
                    ruleName: "Default",
                    model: "mpu",
                    minHeight: 900,
                    refreshRate: 11e3,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "m",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 0,
                    refreshRate: 15e3,
                    refreshCycle: 2,
                    exempt: ["nat"]
                }, {
                    viewport: "s",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 0,
                    refreshRate: 15e3,
                    refreshCycle: 2,
                    exempt: ["nat", "mpu"]
                }, {
                    viewport: "xs",
                    ruleName: "Default",
                    model: "ban",
                    minHeight: 0,
                    refreshRate: 15e3,
                    refreshCycle: 2,
                    exempt: ["nat", "mpu"]
                }],
                "travel-product": [{
                    viewport: "x",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "l",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "m",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "s",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "xs",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }],
                "travel-product-listing": [{
                    viewport: "x",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "l",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "m",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "s",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "xs",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }],
                "travel-destinations": [{
                    viewport: "x",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "l",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "m",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "s",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "xs",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }],
                "travel-review": [{
                    viewport: "x",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "l",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "m",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "s",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "xs",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }],
                "rewards-offers-detail": [{
                    viewport: "x",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "l",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "m",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "s",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "xs",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }],
                bare: [{
                    viewport: "x",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "l",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "m",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "s",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "xs",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }],
                unset: [{
                    viewport: "x",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "l",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "m",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "s",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "xs",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }],
                default: [{
                    viewport: "x",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "l",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "m",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "s",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }, {
                    viewport: "xs",
                    ruleName: "Default",
                    model: "none",
                    minHeight: 0,
                    refreshRate: 0,
                    refreshCycle: 0,
                    exempt: ["nat"]
                }]
            }
        }, tmgAds.layout = {
            viewport: "u",
            viewportWidth: "",
            getBreakpoint: function(e) {
                var t = "xs";
                return e >= tmgAds.plugins.sizemapping.s.size[0] && (t = "s"), e >= tmgAds.plugins.sizemapping.m.size[0] && (t = "m"), e >= tmgAds.plugins.sizemapping.l.size[0] && (t = "l"), e >= tmgAds.plugins.sizemapping.x.size[0] && (t = "x"), tmgAdsLog("tmgAds.layout.getBreakpoint -> width:" + tmgAds.layout.viewportWidth + " height:" + tmgAds.layout.viewportHeight + " size:" + tmgAds.layout.viewport), t
            },
            getViewportWidth: function() {
                return document.documentElement.clientWidth >= 0 ? document.documentElement.clientWidth : document.body && document.body.clientWidth >= 0 ? document.body.clientWidth : window.innerWidth >= 0 ? window.innerWidth : 0
            },
            getViewportHeight: function() {
                return document.documentElement.clientHeight >= 0 ? document.documentElement.clientHeight : document.body && document.body.clientHeight >= 0 ? document.body.clientHeight : window.innerHeight >= 0 ? window.innerHeight : 0
            },
            onresize: function() {
                tmgAds.layout.viewportHeight = tmgAds.layout.getViewportHeight(), tmgAds.layout.viewportWidth = tmgAds.layout.getViewportWidth(), tmgAds.layout.viewport = tmgAds.layout.getBreakpoint(tmgAds.layout.viewportWidth), "xs" == tmgAds.layout.viewport || "s" == tmgAds.layout.viewport || "m" == tmgAds.layout.viewport ? tmgAds.layout.platform = "mobile" : tmgAds.layout.platform = "desktop"
            },
            addEvent: function(e, t, s) {
                null !== e && "undefined" != e && (e.addEventListener ? e.addEventListener(t, s, !1) : e.attachEvent ? e.attachEvent("on" + t, s) : e["on" + t] = s)
            }
        }, tmgAds.page = tmgAdsGetPageData(), tmgAds.layout.onresize(), tmgAdsLog("Current viewport now: " + tmgAds.layout.viewport), tmgAdsLog("Creating an event handler for dealing with page layout changes ie; viewport change"), tmgAds.layout.addEvent(window, "resize", tmgAds.layout.onresize), tmgAds.plugins.headerBidders = {
            auctionID: !1,
            active: !0,
            wrappers: ["prebid", "ix", "amazon"],
            delayed: 0,
            timeout: 2e3,
            checkFreq: 100,
            excludeZones: [],
            amendprice: function(e) {
                var t = 100 * parseFloat(e);
                return ((t >= 1 && t <= 299 ? t : t >= 300 && t <= 2e3 ? 5 * Math.floor(t / 5) : t >= 2001 ? 100 * Math.floor(t / 100) : 0) / 100).toFixed(2)
            },
            ix: {
                name: "ix",
                active: !0,
                bidstatus: "config",
                local: !1,
                async: !1,
                excludeZones: [],
                jsloc: function() {
                    return !1
                },
                jsprod: "https://js-sec.indexww.com/ht/p/184224-249976729910975.js",
                jstest: "https://js-sec.indexww.com/ht/p/184224-249976729910975-stage.js",
                jsurl: "",
                loc: "head",
                exempt: ["nat", "tmg", "inr", "ftr"],
                siteId: 888888,
                timeout: 800,
                timeoutCount: 0,
                timeoutHit: !1,
                video: {
                    active: !1,
                    url: "https://as-sec.casalemedia.com/playlist?ix_id=%5Bindex_epr%5D&ix_v=8&ix_s=208024&ix_ms=208154&ix_vt="
                },
                partners: {
                    INDX: {
                        targetingType: "slot",
                        timeout: 150
                    }
                },
                preload: function() {
                    tmgAds.plugins.headerBidders.ix.bidstatus = "sent", tmgAdsPerf("mark", ["ix_preload"]), window.headertag = {}, window.headertagconfig = {
                        siteId: tmgAds.plugins.headerBidders.ix.siteId,
                        timeout: tmgAds.plugins.headerBidders.ix.timeout,
                        partners: {
                            INDX: {
                                targetingType: tmgAds.plugins.headerBidders.ix.partners.INDX.targetingType,
                                timeout: tmgAds.plugins.headerBidders.ix.partners.INDX.timeout
                            }
                        },
                        callbackFn: tmgAds.plugins.headerBidders.ix.callback
                    }
                },
                callback: function() {
                    "timeout" != tmgAds.plugins.headerBidders.ix.bidstatus && (tmgAds.plugins.headerBidders.ix.bidstatus = "received"), tmgAdsPerf("mark", ["ix_callback"]), tmgAds.performance.ix.bidsReceived = Math.round(tmgAdsTimer()), tmgAds.performance.ix.timeToLoad = Math.round(tmgAds.performance.ix.bidsReceived - tmgAds.performance.ix.requested), tmgAdsLog("IX: headerbidding bids returned"), void 0 !== typeof window.headertag && !0 === window.headertag.apiReady || (window.headertag = googletag, tmgAdsLog("IX: SUCCESS: window.headertag.apiReady is true - headertag object exists"))
                }
            },
            prebid: {
                name: "prebid",
                active: !0,
                version: "2",
                bidstatus: "config",
                local: !0,
                async: !1,
                excludeZones: [],
                jsloc: function() {
                    return !1
                },
                jsprod: "https://static.telegraph.co.uk/telegraph-advertising/prebid/prebid2.8.0.33ac.aol.appnxs.fban.criteo.ix.openx.ozone.rubicon.sharethru.teads.triplelift.ga.gdpr.adomik.commonid.js",
                jstest: "https://adtools.telegraph.co.uk/tmg/gpt/prebid-test.js",
                jsurl: "",
                loc: "head",
                zerorated: ["appnexusgmsmprm", "appnexusgmsmstd"],
                exempt: ["tmg", "inr", "ftr"],
                keynames: ["hb_data", "hb_bids", "hb_dealId"],
                timeout: 1e3,
                timeoutCount: 0,
                timeoutHit: !1,
                rubiconSReq: !0,
                commonId: {
                    enable: !0,
                    expInterval: 525600,
                    optout: tmgAdsGetCookie("_pubcid_optout"),
                    _pubcid: tmgAdsGetCookie("_pubcid")
                },
                cmp: {
                    active: !0,
                    type: "iab",
                    timeout: 800
                },
                preload: function() {
                    tmgAdsPerf("mark", ["prebid_preload"]), window.location.search.indexOf("pbcidtest") >= 0 && (console.log("PREBID: Common ID turned on via URL."), tmgAds.plugins.headerBidders.prebid.commonId.enable = !0), window.pbjs = {}, window.pbjs.cmd = [], window.pbjs.que = [], window.PREBID_TIMEOUT = tmgAds.plugins.headerBidders.prebid.timeout, tmgAds.performance.prebid = {}, pbjs.que.push(function() {
                        tmgAds.plugins.headerBidders.prebid.cmp.active ? pbjs.que.push(function() {
                            pbjs.setConfig({
                                consentManagement: {
                                    cmpApi: tmgAds.plugins.headerBidders.prebid.cmp.type,
                                    timeout: tmgAds.plugins.headerBidders.prebid.cmp.timeout,
                                    allowAuctionWithoutConsent: !0
                                }
                            })
                        }) : console.log("ADTECH: Prebid CMP -> INACTIVE"), tmgAds.plugins.headerBidders.prebid.commonId.active && pbjs.que.push(function() {
                            pbjs.setConfig({
                                pubcid: {
                                    enable: tmgAds.plugins.headerBidders.prebid.commonId.enable,
                                    expInterval: tmgAds.plugins.headerBidders.prebid.commonId.expInterval
                                }
                            })
                        }), pbjs.setConfig({
                            rubicon: {
                                singleRequest: tmgAds.plugins.headerBidders.prebid.rubiconSReq
                            }
                        }), pbjs.onEvent("auctionInit", function() {
                            tmgAdsPerf("mark", ["prebid_auctionInit"])
                        }), pbjs.onEvent("auctionEnd", function() {
                            tmgAdsPerf("mark", ["prebid_auctionEnd"])
                        }), pbjs.onEvent("bidAdjustment", function() {
                            tmgAdsPerf("mark", ["prebid_bidAdjustment"])
                        }), pbjs.onEvent("bidTimeout", function() {
                            tmgAdsPerf("mark", ["prebid_bidTimeout"])
                        }), pbjs.onEvent("bidRequested", function() {
                            tmgAdsPerf("mark", ["prebid_bidRequested"])
                        }), pbjs.onEvent("bidResponse", function() {
                            tmgAdsPerf("mark", ["prebid_bidResponse"])
                        }), pbjs.onEvent("bidWon", function() {
                            tmgAdsPerf("mark", ["prebid_bidWon"])
                        }), pbjs.onEvent("setTargeting", function() {
                            tmgAdsPerf("mark", ["prebid_setTargeting"])
                        }), pbjs.onEvent("requestBids", function() {
                            tmgAdsPerf("mark", ["prebid_requestBids"])
                        }), tmgAds.plugins.headerBidders.prebid.bids = tmgAdsPrebidReturnAdUnits(), pbjs.addAdUnits(tmgAds.plugins.headerBidders.prebid.bids), pbjs.aliasBidder("appnexus", "appnexusclient"), pbjs.aliasBidder("appnexus", "appnexusgmsmprm"), pbjs.aliasBidder("appnexus", "appnexusgmsmstd"), pbjs.aliasBidder("openx", "openxclient"), pbjs.aliasBidder("teads", "teadsclient"), pbjs.aliasBidder("rubicon", "rubiconclient"), pbjs.aliasBidder("criteo", "criteoclient"), pbjs.aliasBidder("aol", "aolclient"), pbjs.aliasBidder("triplelift", "tripleliftclient"), tmgAds.plugins.headerBidders.prebid.bidstatus = "sent", pbjs.requestBids(tmgAds.plugins.headerBidders.prebid.bidsBackHandler)
                    }), tmgAds.plugins.headerBidders.prebid.pbversion = pbjs.version, tmgAds.plugins.headerBidders.prebid.ozversion = "pending"
                },
                bidsBackHandler: {
                    bidsBackHandler: function(e) {
                        tmgAdsPerf("mark", ["prebid_bidsBackHandler"]), tmgAds.performance.prebid.bidsReceived = tmgAdsTimer();
                        var t = [];
                        for (var s in e) {
                            if (1 != e[s].bids[0].getStatusCode()) switch (e[s].bids[0].adserverTargeting = e[s].bids[0].adserverTargeting || {
                                hb_adid: "",
                                hb_pb: ""
                            }, e[s].bids[0].adserverTargeting.hb_adid = "none", e[s].bids[0].getStatusCode()) {
                                case 0:
                                    e[s].bids[0].adserverTargeting.hb_pb = "pending";
                                    break;
                                case 2:
                                    e[s].bids[0].adserverTargeting.hb_pb = "nobid";
                                    break;
                                case 3:
                                    e[s].bids[0].adserverTargeting.hb_pb = "timeout"
                            }
                            "s2s" == e[s].bids[0].source ? e[s].bids[0].adBidder = e[s].bids[0].bidder + e[s].bids[0].source : e[s].bids[0].adBidder = e[s].bids[0].bidderCode;
                            var d = s.split("-");
                            e[s].bids[0].adserverTargeting.hb_pborigin = e[s].bids[0].adserverTargeting.hb_pb, e[s].bids[0].adserverTargeting.hb_pb = tmgAds.plugins.headerBidders.amendprice(e[s].bids[0].adserverTargeting.hb_pb), tmgAds.plugins.headerBidders.prebid.zerorated.indexOf(e[s].bids[0].adBidder) > -1 && (e[s].bids[0].adserverTargeting.hb_pb = 0), e[s].bids[0].adSlot = d[0], e[s].bids[0].adType = d[0].split("_")[2], e[s].bids[0].placementId = d[1] || "none", tmgAds.performance.prebid["timeToRespond_" + e[s].bids[0].adSlot + "_" + e[s].bids[0].adBidder + "_" + e[s].bids[0].placementId] = e[s].bids[0].timeToRespond, e[s].bids[0].bidData = e[s].bids[0].adBidder + "_" + e[s].bids[0].adserverTargeting.hb_pb + "_" + e[s].bids[0].size + "_" + e[s].bids[0].adType + "_" + e[s].bids[0].adserverTargeting.hb_adid + "_" + e[s].bids[0].placementId + "_" + e[s].bids[0].timeToRespond + "_" + e[s].bids[0].requestId, e[s].bids[0].bidID = e[s].bids[0].adBidder + "_" + e[s].bids[0].adserverTargeting.hb_pb + "_" + e[s].bids[0].size, t[e[s].bids[0].adSlot] = t[e[s].bids[0].adSlot] || {
                                bids: []
                            }, t[e[s].bids[0].adSlot].bids.push(e[s].bids[0])
                        }
                        tmgAds.plugins.headerBidders.prebid.bidResponse = t, "timeout" != tmgAds.plugins.headerBidders.prebid.bidstatus && (tmgAds.plugins.headerBidders.prebid.bidstatus = "received"), tmgAds.performance.prebid.bidsReceived = Math.round(tmgAdsTimer()), tmgAds.performance.prebid.timeToLoad = Math.round(tmgAds.performance.prebid.bidsReceived - tmgAds.performance.prebid.requested), tmgAds.plugins.headerBidders.prebid.callback(e)
                    }
                },
                callback: function() {
                    tmgAdsPerf("mark", ["prebid_callback"])
                }
            },
            amazon: {
                name: "amazon",
                active: !0,
                bidstatus: "config",
                local: !1,
                async: !1,
                excludeZones: [],
                jsloc: function() {
                    return !1
                },
                jsprod: "https://c.amazon-adsystem.com/aax2/apstag.js",
                jstest: "http://adtools.telegraph.co.uk/tmg/gpt/prebid/prebid-test.js",
                jsurl: "",
                loc: "head",
                exempt: ["nat", "tmg", "inr", "ftr"],
                adserver: "googletag",
                siteId: 3461,
                keynames: ["amznbid", "amzniid", "amznp", "amznsz", "amznresp"],
                timeout: 2e3,
                timeoutCount: 0,
                timeoutHit: !1,
                ssp: {
                    "1yj0n4": "amazon",
                    "1yu87wg": "pubmatic",
                    "210wzk": "openx",
                    jsaxhc: "rubicon",
                    awnx8g: "districtm"
                },
                deals: !0,
                preload: function() {
                    tmgAds.plugins.adamazona9deals && (tmgAds.plugins.headerBidders.amazon.deals ? tmgAds.plugins.headerBidders.amazon.deals = !1 : tmgAds.plugins.headerBidders.amazon.deals = !0), tmgAds.plugins.headerBidders.amazon.bidstatus = "sent", tmgAdsPerf("mark", ["amazon_preload"]), window.amznads = {}, window.amznads.asyncParams = {
                        id: tmgAds.plugins.headerBidders.amazon.siteId,
                        callbackFn: tmgAds.plugins.headerBidders.amazon.callback
                    }
                },
                callback: function() {
                    tmgAdsPerf("mark", ["amazon_callback"]), apstag.init({
                        pubID: tmgAds.plugins.headerBidders.amazon.siteId,
                        adServer: tmgAds.plugins.headerBidders.amazon.adserver,
                        deals: tmgAds.plugins.headerBidders.amazon.deals,
                        si_section: tmgAds.page.site
                    }), tmgAds.plugins.headerBidders.amazon.fetchBids()
                },
                fetchBids: function() {
                    apstag.fetchBids(tmgAdsGetAmazonSlots(tmgAds), function(e) {
                        tmgAdsPerf("mark", ["amazon_fetchBidsReceived"]), "timeout" != tmgAds.plugins.headerBidders.amazon.bidstatus && (tmgAds.plugins.headerBidders.amazon.bidstatus = "received"), tmgAds.performance.amazon.bidsReceived = tmgAdsTimer(), tmgAds.performance.amazon.timeToLoad = tmgAds.performance.amazon.bidsReceived - tmgAds.performance.amazon.requested, tmgAds.plugins.headerBidders.amazon.bids = e;
                        for (var t = 0; t < e.length; t++);
                    })
                }
            }
        }, tmgAdsLog("TMG-GPT-" + tmgAds.about.version + " - " + tmgAds.about.date), tmgAdsLog("SUCCESS: tmgAdsInit() initialisation"), tmgAdsLog("##################################################################################################################"), tmgAdsEvent("tmggpt-init:end")
    } catch (e) {
        tmgAdsLog("ERROR: tmgAdsInit() failed -> error=" + e.message, tmgAds)
    }
}

function tmgAdsPrebidReturnAdUnits() {
    var e = {
        adUnits: [],
        adSlots: document.querySelectorAll(".js-advert"),
        dynmax: 5,
        dyncount: 0
    };
    for (i in e.adSlots) "object" == typeof e.adSlots[i] && (e.adSlots[i].setAttribute("data-adtype", e.adSlots[i].id.split("_")[2]), "nat" == e.adSlots[i].id.split("_")[2] && e.adSlots[i].setAttribute("data-adtype", e.adSlots[i].id.substring(11)));
    for (i in e.adSlots) "object" == typeof e.adSlots[i] && "dyn" == e.adSlots[i].getAttribute("data-adtype").substring(0, 3) && e.dyncount++;
    if (e.dyncount > e.dynmax && (e.count = e.dynmax), "x" != tmgAds.layout.viewport && "l" != tmgAds.layout.viewport || ("index" == tmgAds.page.pagetype || "topic" == tmgAds.page.pagetype || "video-index" == tmgAds.page.pagetype || "travel-destinations" == tmgAds.page.pagetype ? (tmgAds.layout.viewportHeight < tmgAds.config.deliveryModel.minHeight ? e.adUnits.push({
            code: "advert_tmg_ban-0420420601",
            mediaTypes: {
                banner: {
                    sizes: [
                        [970, 90],
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "ozone",
                params: {
                    publisherId: "OZONETMG0001",
                    siteId: "4204204210",
                    placementId: "0420420601",
                    lotameData: tmgAds.plugins.lotame.data,
                    customData: tmgAds.dfp.customvars
                }
            }]
        }) : e.adUnits.push({
            code: "advert_tmg_ban-0420420601",
            mediaTypes: {
                banner: {
                    sizes: [
                        [970, 250],
                        [970, 90],
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "ozone",
                params: {
                    publisherId: "OZONETMG0001",
                    siteId: "4204204210",
                    placementId: "0420420601",
                    lotameData: tmgAds.plugins.lotame.data,
                    customData: tmgAds.dfp.customvars
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_hpg-0420420602",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [300, 600],
                        [160, 600],
                        [120, 600]
                    ]
                }
            },
            bids: [{
                bidder: "ozone",
                params: {
                    publisherId: "OZONETMG0001",
                    siteId: "4204204210",
                    placementId: "0420420602",
                    lotameData: tmgAds.plugins.lotame.data,
                    customData: tmgAds.dfp.customvars
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-0420420600",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [300, 600]
                    ]
                }
            },
            bids: [{
                bidder: "ozone",
                params: {
                    publisherId: "OZONETMG0001",
                    siteId: "4204204210",
                    placementId: "0420420600",
                    lotameData: tmgAds.plugins.lotame.data,
                    customData: tmgAds.dfp.customvars
                }
            }]
        }), tmgAds.layout.viewportHeight < tmgAds.config.deliveryModel.minHeight || e.adUnits.push({
            code: "advert_tmg_ban-12618727",
            mediaTypes: {
                banner: {
                    sizes: [
                        [970, 250]
                    ]
                }
            },
            bids: [{
                bidder: "appnexusgmsmprm",
                params: {
                    placementId: "12618727"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-12427874",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 600]
                    ]
                }
            },
            bids: [{
                bidder: "appnexusgmsmprm",
                params: {
                    placementId: "12427874"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_ban-12536288",
            mediaTypes: {
                banner: {
                    sizes: [
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "appnexusgmsmstd",
                params: {
                    placementId: "12536288"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-12536287",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250]
                    ]
                }
            },
            bids: [{
                bidder: "appnexusgmsmstd",
                params: {
                    placementId: "12536287"
                }
            }]
        }), tmgAds.layout.viewportHeight < tmgAds.config.deliveryModel.minHeight ? e.adUnits.push({
            code: "advert_tmg_ban-9979466",
            mediaTypes: {
                banner: {
                    sizes: [
                        [970, 90],
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "appnexusclient",
                params: {
                    placementId: "9979466"
                }
            }]
        }) : e.adUnits.push({
            code: "advert_tmg_ban-9979466",
            mediaTypes: {
                banner: {
                    sizes: [
                        [970, 250],
                        [970, 90],
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "appnexusclient",
                params: {
                    placementId: "9979466"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_hpg-9979468",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [300, 600],
                        [160, 600],
                        [120, 600]
                    ]
                }
            },
            bids: [{
                bidder: "appnexusclient",
                params: {
                    placementId: "9979468"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-9979467",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [300, 600]
                    ]
                }
            },
            bids: [{
                bidder: "appnexusclient",
                params: {
                    placementId: "9979467"
                }
            }]
        }), tmgAds.layout.viewportHeight < tmgAds.config.deliveryModel.minHeight ? e.adUnits.push({
            code: "advert_tmg_ban-540231754",
            mediaTypes: {
                banner: {
                    sizes: [
                        [970, 90],
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "openxclient",
                params: {
                    unit: "540231754",
                    delDomain: "telegraph-d.openx.net"
                }
            }]
        }) : e.adUnits.push({
            code: "advert_tmg_ban-540231754",
            mediaTypes: {
                banner: {
                    sizes: [
                        [970, 250],
                        [970, 90],
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "openxclient",
                params: {
                    unit: "540231754",
                    delDomain: "telegraph-d.openx.net"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_hpg-540231755",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [300, 600],
                        [160, 600],
                        [120, 600]
                    ]
                }
            },
            bids: [{
                bidder: "openxclient",
                params: {
                    unit: "540231755",
                    delDomain: "telegraph-d.openx.net"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-540231756",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [300, 600]
                    ]
                }
            },
            bids: [{
                bidder: "openxclient",
                params: {
                    unit: "540231756",
                    delDomain: "telegraph-d.openx.net"
                }
            }]
        }), window.location.search.indexOf("33acrosstest") >= 0 && (console.log("ADTECH: Prebid - 33Across turned on"), tmgAds.layout.viewportHeight < tmgAds.config.deliveryModel.minHeight ? (console.log("ADTECH: tmgAds.layout.viewportHeight < tmgAds.config.deliveryModel.minHeight - not supporting 970x250 - 33across"), e.adUnits.push({
            code: "advert_tmg_ban-bXwYkQ8Amr6iXiaKkGJozW",
            mediaTypes: {
                banner: {
                    sizes: [
                        [970, 90],
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "33across",
                params: {
                    siteId: "bXwYkQ8Amr6iXiaKkGJozW",
                    productId: "siab"
                }
            }]
        })) : e.adUnits.push({
            code: "advert_tmg_ban-bXwYkQ8Amr6iXiaKkGJozW",
            mediaTypes: {
                banner: {
                    sizes: [
                        [970, 250],
                        [970, 90],
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "33across",
                params: {
                    siteId: "bXwYkQ8Amr6iXiaKkGJozW",
                    productId: "siab"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_hpg-dzjfWW8Amr6jeUaKlId8sQ",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [300, 600]
                    ]
                }
            },
            bids: [{
                bidder: "33across",
                params: {
                    siteId: "dzjfWW8Amr6jeUaKlId8sQ",
                    productId: "siab"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-dX8Axe8Amr6l04aKkv7mNO",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [300, 600]
                    ]
                }
            },
            bids: [{
                bidder: "33across",
                params: {
                    siteId: "dX8Axe8Amr6l04aKkv7mNO",
                    productId: "siab"
                }
            }]
        })), window.location.search.indexOf("rubicontest") >= 0 && (console.log("ADTECH: Prebid - Rubicon turned on"), tmgAds.layout.viewportHeight < tmgAds.config.deliveryModel.minHeight ? (console.log("ADTECH: tmgAds.layout.viewportHeight < tmgAds.config.deliveryModel.minHeight - not supporting 970x250 - Rubicon"), e.adUnits.push({
            code: "advert_tmg_ban-1110732",
            mediaTypes: {
                banner: {
                    sizes: [
                        [970, 90],
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "rubiconclient",
                params: {
                    accountId: "8560",
                    siteId: "226006",
                    zoneId: "1110732",
                    position: "atf"
                }
            }]
        })) : e.adUnits.push({
            code: "advert_tmg_ban-1110732",
            mediaTypes: {
                banner: {
                    sizes: [
                        [970, 250],
                        [970, 90],
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "rubiconclient",
                params: {
                    accountId: "8560",
                    siteId: "226006",
                    zoneId: "1110732",
                    position: "atf"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_hpg-1110738",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [300, 600]
                    ]
                }
            },
            bids: [{
                bidder: "rubiconclient",
                params: {
                    accountId: "8560",
                    siteId: "226006",
                    zoneId: "1110738",
                    position: "btf"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-1110740",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [300, 600]
                    ]
                }
            },
            bids: [{
                bidder: "rubiconclient",
                params: {
                    accountId: "8560",
                    siteId: "226006",
                    zoneId: "1110740",
                    position: "atf"
                }
            }]
        })), tmgAds.layout.viewportHeight < tmgAds.config.deliveryModel.minHeight ? (console.log("ADTECH: tmgAds.layout.viewportHeight < tmgAds.config.deliveryModel.minHeight - not supporting 970x250 - Criteo"), e.adUnits.push({
            code: "advert_tmg_ban-1359746",
            mediaTypes: {
                banner: {
                    sizes: [
                        [970, 90]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_ban-1359738",
            mediaTypes: {
                banner: {
                    sizes: [
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        })) : (e.adUnits.push({
            code: "advert_tmg_ban-1359736",
            mediaTypes: {
                banner: {
                    sizes: [
                        [970, 250]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_ban-1359746",
            mediaTypes: {
                banner: {
                    sizes: [
                        [970, 90]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_ban-1359738",
            mediaTypes: {
                banner: {
                    sizes: [
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        })), e.adUnits.push({
            code: "advert_tmg_hpg-1359740",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-1359740",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_hpg-1359730",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 600]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-1359730",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 600]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), window.location.search.indexOf("oathtest") >= 0 && console.log("ADTECH: Prebid - Oath/AOL turned on")) : (e.adUnits.push({
            code: "advert_tmg_bbb-0420420603",
            mediaTypes: {
                banner: {
                    sizes: [
                        [970, 250],
                        [970, 90],
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "ozone",
                params: {
                    publisherId: "OZONETMG0001",
                    siteId: "4204204210",
                    placementId: "0420420603",
                    lotameData: tmgAds.plugins.lotame.data,
                    customData: tmgAds.dfp.customvars
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-0420420600",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [300, 600]
                    ]
                }
            },
            bids: [{
                bidder: "ozone",
                params: {
                    publisherId: "OZONETMG0001",
                    siteId: "4204204210",
                    placementId: "0420420600",
                    lotameData: tmgAds.plugins.lotame.data,
                    customData: tmgAds.dfp.customvars
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-12427874",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 600]
                    ]
                }
            },
            bids: [{
                bidder: "appnexusgmsmprm",
                params: {
                    placementId: "12427874"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-12536287",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250]
                    ]
                }
            },
            bids: [{
                bidder: "appnexusgmsmstd",
                params: {
                    placementId: "12536287"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_bbb-11679937",
            mediaTypes: {
                banner: {
                    sizes: [
                        [970, 250],
                        [970, 90],
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "appnexusclient",
                params: {
                    placementId: "11679937"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-9979467",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [300, 600]
                    ]
                }
            },
            bids: [{
                bidder: "appnexusclient",
                params: {
                    placementId: "9979467"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_bbb-540231758",
            mediaTypes: {
                banner: {
                    sizes: [
                        [970, 250],
                        [970, 90],
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "openxclient",
                params: {
                    unit: "540231758",
                    delDomain: "telegraph-d.openx.net"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-540231756",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [300, 600]
                    ]
                }
            },
            bids: [{
                bidder: "openxclient",
                params: {
                    unit: "540231756",
                    delDomain: "telegraph-d.openx.net"
                }
            }]
        }), window.location.search.indexOf("33acrosstest") >= 0 && (console.log("ADTECH: Prebid - 33Across turned on"), e.adUnits.push({
            code: "advert_tmg_mpu-dX8Axe8Amr6l04aKkv7mNO",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250]
                    ]
                }
            },
            bids: [{
                bidder: "33across",
                params: {
                    siteId: "dX8Axe8Amr6l04aKkv7mNO",
                    productId: "siab"
                }
            }]
        })), window.location.search.indexOf("rubicontest") >= 0 && (console.log("ADTECH: Prebid - Rubicon turned on"), e.adUnits.push({
            code: "advert_tmg_bbb-1110734",
            mediaTypes: {
                banner: {
                    sizes: [
                        [970, 250],
                        [970, 90],
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "rubiconclient",
                params: {
                    accountId: "8560",
                    siteId: "226006",
                    zoneId: "1110734",
                    position: "btf"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-1110740",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [300, 600]
                    ]
                }
            },
            bids: [{
                bidder: "rubiconclient",
                params: {
                    accountId: "8560",
                    siteId: "226006",
                    zoneId: "1110740",
                    position: "atf"
                }
            }]
        })), e.adUnits.push({
            code: "advert_tmg_bbb-1359736",
            mediaTypes: {
                banner: {
                    sizes: [
                        [970, 250]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_bbb-1359746",
            mediaTypes: {
                banner: {
                    sizes: [
                        [970, 90]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_bbb-1359738",
            mediaTypes: {
                banner: {
                    sizes: [
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-1359730",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 600]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-1359740",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), window.location.search.indexOf("oathtest") >= 0 && console.log("ADTECH: Prebid - Oath/AOL turned on"), e.adUnits.push({
            code: "advert_tmg_nat_story_top-12347",
            mediaTypes: {
                banner: {
                    sizes: [
                        [1, 1]
                    ]
                }
            },
            bids: [{
                bidder: "tripleliftclient",
                params: {
                    inventoryCode: "12347"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_nat_story_sidebar-12357",
            mediaTypes: {
                banner: {
                    sizes: [
                        [1, 1]
                    ]
                }
            },
            bids: [{
                bidder: "tripleliftclient",
                params: {
                    inventoryCode: "12357"
                }
            }]
        }))), "m" == tmgAds.layout.viewport)
        if ("index" == tmgAds.page.pagetype || "topic" == tmgAds.page.pagetype || "video-index" == tmgAds.page.pagetype || "travel-destinations" == tmgAds.page.pagetype) e.adUnits.push({
            code: "advert_tmg_ban-0420420611",
            mediaTypes: {
                banner: {
                    sizes: [
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "ozone",
                params: {
                    publisherId: "OZONETMG0001",
                    siteId: "4204204210",
                    placementId: "0420420611",
                    lotameData: tmgAds.plugins.lotame.data,
                    customData: tmgAds.dfp.customvars
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_hpg-0420420613",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [320, 50],
                        [300, 50]
                    ]
                }
            },
            bids: [{
                bidder: "ozone",
                params: {
                    publisherId: "OZONETMG0001",
                    siteId: "4204204210",
                    placementId: "0420420613",
                    lotameData: tmgAds.plugins.lotame.data,
                    customData: tmgAds.dfp.customvars
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-0420420612",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [320, 50],
                        [300, 50]
                    ]
                }
            },
            bids: [{
                bidder: "ozone",
                params: {
                    publisherId: "OZONETMG0001",
                    siteId: "4204204210",
                    placementId: "0420420612",
                    lotameData: tmgAds.plugins.lotame.data,
                    customData: tmgAds.dfp.customvars
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-12674818",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250]
                    ]
                }
            },
            bids: [{
                bidder: "appnexusgmsmprm",
                params: {
                    placementId: "12674818"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_ban-9979546",
            mediaTypes: {
                banner: {
                    sizes: [
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "appnexusclient",
                params: {
                    placementId: "9979546"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_hpg-9979587",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [320, 50],
                        [300, 50]
                    ]
                }
            },
            bids: [{
                bidder: "appnexusclient",
                params: {
                    placementId: "9979587"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-9979611",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [320, 50],
                        [300, 50]
                    ]
                }
            },
            bids: [{
                bidder: "appnexusclient",
                params: {
                    placementId: "9979611"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_ban-540231754",
            mediaTypes: {
                banner: {
                    sizes: [
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "openxclient",
                params: {
                    unit: "540231754",
                    delDomain: "telegraph-d.openx.net"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_hpg-540231755",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250]
                    ]
                }
            },
            bids: [{
                bidder: "openxclient",
                params: {
                    unit: "540231755",
                    delDomain: "telegraph-d.openx.net"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-540231756",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250]
                    ]
                }
            },
            bids: [{
                bidder: "openxclient",
                params: {
                    unit: "540231756",
                    delDomain: "telegraph-d.openx.net"
                }
            }]
        }), window.location.search.indexOf("33acrosstest") >= 0 && (console.log("ADTECH: Prebid - 33Across turned on"), e.adUnits.push({
            code: "advert_tmg_ban-awqLOI8Aqr6jb9aKkv7mNO",
            mediaTypes: {
                banner: {
                    sizes: [
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "33across",
                params: {
                    siteId: "awqLOI8Aqr6jb9aKkv7mNO",
                    productId: "siab"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_hpg-bEtIAy8Aqr6jb9aKkv7mNO",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [320, 50],
                        [300, 50]
                    ]
                }
            },
            bids: [{
                bidder: "33across",
                params: {
                    siteId: "bEtIAy8Aqr6jb9aKkv7mNO",
                    productId: "siab"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-b_QU348Aqr6jeUaKlId8sQ",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [320, 50],
                        [300, 50]
                    ]
                }
            },
            bids: [{
                bidder: "33across",
                params: {
                    siteId: "b_QU348Aqr6jeUaKlId8sQ",
                    productId: "siab"
                }
            }]
        })), window.location.search.indexOf("rubicontest") >= 0 && (console.log("ADTECH: Prebid - Rubicon turned on"), e.adUnits.push({
            code: "advert_tmg_ban-1110742",
            mediaTypes: {
                banner: {
                    sizes: [
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "rubiconclient",
                params: {
                    accountId: "8560",
                    siteId: "226006",
                    zoneId: "1110742",
                    position: "atf"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_hpg-1110750",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250]
                    ]
                }
            },
            bids: [{
                bidder: "rubiconclient",
                params: {
                    accountId: "8560",
                    siteId: "226006",
                    zoneId: "1110750",
                    position: "btf"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-1110752",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250]
                    ]
                }
            },
            bids: [{
                bidder: "rubiconclient",
                params: {
                    accountId: "8560",
                    siteId: "226006",
                    zoneId: "1110752",
                    position: "atf"
                }
            }]
        })), e.adUnits.push({
            code: "advert_tmg_ban-1359738",
            mediaTypes: {
                banner: {
                    sizes: [
                        [728, 90]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_hpg-1359740",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_hpg-1359730",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 600]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-1359740",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-1359730",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 600]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_hpg",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [1, 1]
                    ]
                }
            },
            bids: [{
                bidder: "teadsclient",
                params: {
                    placementId: "101187",
                    pageId: "93421"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [1, 1]
                    ]
                }
            },
            bids: [{
                bidder: "teadsclient",
                params: {
                    placementId: "99349",
                    pageId: "91662"
                }
            }]
        }), window.location.search.indexOf("oathtest") >= 0 && console.log("ADTECH: Prebid - Oath/AOL turned on");
        else {
            for (e.adUnits.push({
                    code: "advert_tmg_ban-0420420611",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [728, 90]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "ozone",
                        params: {
                            publisherId: "OZONETMG0001",
                            siteId: "4204204210",
                            placementId: "0420420611",
                            lotameData: tmgAds.plugins.lotame.data,
                            customData: tmgAds.dfp.customvars
                        }
                    }]
                }), i = 0; i <= e.dyncount - 1; i++) e.adUnits.push({
                code: "advert_tmg_dyn_" + i + "-0420420616",
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250],
                            [320, 50],
                            [300, 50]
                        ]
                    }
                },
                bids: [{
                    bidder: "ozone",
                    params: {
                        publisherId: "OZONETMG0001",
                        siteId: "4204204210",
                        placementId: "0420420616",
                        lotameData: tmgAds.plugins.lotame.data,
                        customData: tmgAds.dfp.customvars
                    }
                }]
            });
            for (e.adUnits.push({
                    code: "advert_tmg_mpu-12674818",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "appnexusgmsmprm",
                        params: {
                            placementId: "12674818"
                        }
                    }]
                }), e.adUnits.push({
                    code: "advert_tmg_ban-9979546",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [728, 90]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "appnexusclient",
                        params: {
                            placementId: "9979546"
                        }
                    }]
                }), i = 0; i <= e.dyncount - 1; i++) e.adUnits.push({
                code: "advert_tmg_dyn_" + i + "-13862909",
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250],
                            [320, 50],
                            [300, 50]
                        ]
                    }
                },
                bids: [{
                    bidder: "appnexusclient",
                    params: {
                        placementId: "13862909"
                    }
                }]
            });
            for (e.adUnits.push({
                    code: "advert_tmg_ban-540231754",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [728, 90]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "openxclient",
                        params: {
                            unit: "540231754",
                            delDomain: "telegraph-d.openx.net"
                        }
                    }]
                }), i = 0; i <= e.dyncount - 1; i++) e.adUnits.push({
                code: "advert_tmg_dyn_" + i + "-540272932",
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250],
                            [320, 50],
                            [300, 50]
                        ]
                    }
                },
                bids: [{
                    bidder: "openxclient",
                    params: {
                        unit: "540272932",
                        delDomain: "telegraph-d.openx.net"
                    }
                }]
            });
            if (window.location.search.indexOf("33acrosstest") >= 0)
                for (console.log("ADTECH: Prebid - 33Across turned on"), e.adUnits.push({
                        code: "advert_tmg_ban-awqLOI8Aqr6jb9aKkv7mNO",
                        mediaTypes: {
                            banner: {
                                sizes: [
                                    [728, 90]
                                ]
                            }
                        },
                        bids: [{
                            bidder: "33across",
                            params: {
                                siteId: "awqLOI8Aqr6jb9aKkv7mNO",
                                productId: "siab"
                            }
                        }]
                    }), i = 0; i <= e.dyncount - 1; i++) e.adUnits.push({
                    code: "advert_tmg_dyn_" + i + "-ctzqwK8Aqr6jb9aKkv7mNO",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250],
                                [320, 50],
                                [300, 50]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "33across",
                        params: {
                            siteId: "ctzqwK8Aqr6jb9aKkv7mNO",
                            productId: "siab"
                        }
                    }]
                });
            for (window.location.search.indexOf("rubicontest") >= 0 && (console.log("ADTECH: Prebid - Rubicon turned on"), e.adUnits.push({
                    code: "advert_tmg_ban-1110742",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [728, 90]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "rubiconclient",
                        params: {
                            accountId: "8560",
                            siteId: "226006",
                            zoneId: "1110742",
                            position: "atf"
                        }
                    }]
                }), e.adUnits.push({
                    code: "advert_tmg_dyn_0-1110754",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250],
                                [320, 50],
                                [300, 50]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "rubiconclient",
                        params: {
                            accountId: "8560",
                            siteId: "226006",
                            zoneId: "1110754",
                            position: "btf"
                        }
                    }]
                })), e.adUnits.push({
                    code: "advert_tmg_ban-1359738",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [728, 90]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "criteoclient",
                        params: {
                            networkId: "502"
                        }
                    }]
                }), i = 0; i <= e.dyncount - 1; i++) e.adUnits.push({
                code: "advert_tmg_dyn_" + i + "-1359740",
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250]
                        ]
                    }
                },
                bids: [{
                    bidder: "criteoclient",
                    params: {
                        networkId: "502"
                    }
                }]
            });
            for (i = 0; i <= e.dyncount - 1; i++) e.adUnits.push({
                code: "advert_tmg_dyn_" + i,
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250],
                            [300, 215],
                            [300, 189],
                            [1, 1]
                        ]
                    }
                },
                bids: [{
                    bidder: "teadsclient",
                    params: {
                        placementId: "99348",
                        pageId: "91661"
                    }
                }]
            });
            window.location.search.indexOf("oathtest") >= 0 && console.log("ADTECH: Prebid - Oath/AOL turned on"), e.adUnits.push({
                code: "advert_tmg_nat_story_top-12348",
                mediaTypes: {
                    banner: {
                        sizes: [
                            [1, 1]
                        ]
                    }
                },
                bids: [{
                    bidder: "tripleliftclient",
                    params: {
                        inventoryCode: "12348"
                    }
                }]
            })
        } if ("xs" == tmgAds.layout.viewport || "s" == tmgAds.layout.viewport)
        if ("index" == tmgAds.page.pagetype || "topic" == tmgAds.page.pagetype || "video-index" == tmgAds.page.pagetype || "travel-destinations" == tmgAds.page.pagetype) e.adUnits.push({
            code: "advert_tmg_ban-0420420607",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [320, 100],
                        [320, 50],
                        [300, 50]
                    ]
                }
            },
            bids: [{
                bidder: "ozone",
                params: {
                    publisherId: "OZONETMG0001",
                    siteId: "4204204210",
                    placementId: "0420420607",
                    lotameData: tmgAds.plugins.lotame.data,
                    customData: tmgAds.dfp.customvars
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_hpg-0420420609",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [320, 100],
                        [320, 50],
                        [300, 50]
                    ]
                }
            },
            bids: [{
                bidder: "ozone",
                params: {
                    publisherId: "OZONETMG0001",
                    siteId: "4204204210",
                    placementId: "0420420609",
                    lotameData: tmgAds.plugins.lotame.data,
                    customData: tmgAds.dfp.customvars
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-0420420608",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [320, 100],
                        [320, 50],
                        [300, 50]
                    ]
                }
            },
            bids: [{
                bidder: "ozone",
                params: {
                    publisherId: "OZONETMG0001",
                    siteId: "4204204210",
                    placementId: "0420420608",
                    lotameData: tmgAds.plugins.lotame.data,
                    customData: tmgAds.dfp.customvars
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-12674818",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250]
                    ]
                }
            },
            bids: [{
                bidder: "appnexusgmsmprm",
                params: {
                    placementId: "12674818"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_ban-9979622",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [320, 100],
                        [320, 50],
                        [300, 50]
                    ]
                }
            },
            bids: [{
                bidder: "appnexusclient",
                params: {
                    placementId: "9979622"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_hpg-9979665",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [320, 100],
                        [320, 50],
                        [300, 50]
                    ]
                }
            },
            bids: [{
                bidder: "appnexusclient",
                params: {
                    placementId: "9979665"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-9979654",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [320, 100],
                        [320, 50],
                        [300, 50]
                    ]
                }
            },
            bids: [{
                bidder: "appnexusclient",
                params: {
                    placementId: "9979654"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_ban-540231759",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [320, 100],
                        [320, 50],
                        [300, 50]
                    ]
                }
            },
            bids: [{
                bidder: "openxclient",
                params: {
                    unit: "540231759",
                    delDomain: "telegraph-d.openx.net"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_hpg-540231761",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [320, 100],
                        [320, 50],
                        [300, 50]
                    ]
                }
            },
            bids: [{
                bidder: "openxclient",
                params: {
                    unit: "540231761",
                    delDomain: "telegraph-d.openx.net"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-540231760",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [320, 100],
                        [320, 50],
                        [300, 50]
                    ]
                }
            },
            bids: [{
                bidder: "openxclient",
                params: {
                    unit: "540231760",
                    delDomain: "telegraph-d.openx.net"
                }
            }]
        }), window.location.search.indexOf("33acrosstest") >= 0 && (console.log("ADTECH: Prebid - 33Across turned on"), e.adUnits.push({
            code: "advert_tmg_ban-c0knue8Aqr6ikQaKlId8sQ",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [320, 100],
                        [320, 50],
                        [300, 50]
                    ]
                }
            },
            bids: [{
                bidder: "33across",
                params: {
                    siteId: "c0knue8Aqr6ikQaKlId8sQ",
                    productId: "siab"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_hpg-dLWe6Y8Aqr6iXiaKkGJozW",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [320, 100],
                        [320, 50],
                        [300, 50]
                    ]
                }
            },
            bids: [{
                bidder: "33across",
                params: {
                    siteId: "dLWe6Y8Aqr6iXiaKkGJozW",
                    productId: "siab"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-aedfwQ8Aur6ikPaKkGJozW",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [320, 100],
                        [320, 50],
                        [300, 50]
                    ]
                }
            },
            bids: [{
                bidder: "33across",
                params: {
                    siteId: "aedfwQ8Aur6ikPaKkGJozW",
                    productId: "siab"
                }
            }]
        })), window.location.search.indexOf("rubicontest") >= 0 && (console.log("ADTECH: Prebid - Rubicon turned on"), e.adUnits.push({
            code: "advert_tmg_ban-1110756",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [320, 100],
                        [320, 50],
                        [300, 50]
                    ]
                }
            },
            bids: [{
                bidder: "rubiconclient",
                params: {
                    accountId: "8560",
                    siteId: "226006",
                    zoneId: "1110756",
                    position: "atf"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_hpg-1110760",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [320, 100],
                        [320, 50],
                        [300, 50]
                    ]
                }
            },
            bids: [{
                bidder: "rubiconclient",
                params: {
                    accountId: "8560",
                    siteId: "226006",
                    zoneId: "1110760",
                    position: "btf"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-1110762",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [320, 100],
                        [320, 50],
                        [300, 50]
                    ]
                }
            },
            bids: [{
                bidder: "rubiconclient",
                params: {
                    accountId: "8560",
                    siteId: "226006",
                    zoneId: "1110762",
                    position: "atf"
                }
            }]
        })), e.adUnits.push({
            code: "advert_tmg_hpg-1359745",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 50]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-1359745",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 50]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_hpg-1359744",
            mediaTypes: {
                banner: {
                    sizes: [
                        [320, 50]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-1359744",
            mediaTypes: {
                banner: {
                    sizes: [
                        [320, 50]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_hpg-1359743",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 100]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-1359743",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 100]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_hpg-1359740",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu-1359740",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250]
                    ]
                }
            },
            bids: [{
                bidder: "criteoclient",
                params: {
                    networkId: "502"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_hpg",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [1, 1]
                    ]
                }
            },
            bids: [{
                bidder: "teadsclient",
                params: {
                    placementId: "101185",
                    pageId: "93419"
                }
            }]
        }), e.adUnits.push({
            code: "advert_tmg_mpu",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [300, 215],
                        [300, 189],
                        [1, 1]
                    ]
                }
            },
            bids: [{
                bidder: "teadsclient",
                params: {
                    placementId: "99344",
                    pageId: "91657"
                }
            }]
        }), window.location.search.indexOf("oathtest") >= 0 && console.log("ADTECH: Prebid - Oath/AOL turned on");
        else {
            for (e.adUnits.push({
                    code: "advert_tmg_ban-0420420607",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250],
                                [320, 100],
                                [320, 50],
                                [300, 50]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "ozone",
                        params: {
                            publisherId: "OZONETMG0001",
                            siteId: "4204204210",
                            placementId: "0420420607",
                            lotameData: tmgAds.plugins.lotame.data,
                            customData: tmgAds.dfp.customvars
                        }
                    }]
                }), e.adUnits.push({
                    code: "advert_tmg_hpg-0420420609",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250],
                                [320, 100],
                                [320, 50],
                                [300, 50]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "ozone",
                        params: {
                            publisherId: "OZONETMG0001",
                            siteId: "4204204210",
                            placementId: "0420420609",
                            lotameData: tmgAds.plugins.lotame.data,
                            customData: tmgAds.dfp.customvars
                        }
                    }]
                }), e.adUnits.push({
                    code: "advert_tmg_mpu-0420420608",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250],
                                [320, 100],
                                [320, 50],
                                [300, 50]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "ozone",
                        params: {
                            publisherId: "OZONETMG0001",
                            siteId: "4204204210",
                            placementId: "0420420608",
                            lotameData: tmgAds.plugins.lotame.data,
                            customData: tmgAds.dfp.customvars
                        }
                    }]
                }), i = 0; i <= e.dyncount - 1; i++) e.adUnits.push({
                code: "advert_tmg_dyn_" + i + "-0420420610",
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250],
                            [320, 100],
                            [320, 50],
                            [300, 50]
                        ]
                    }
                },
                bids: [{
                    bidder: "ozone",
                    params: {
                        publisherId: "OZONETMG0001",
                        siteId: "4204204210",
                        placementId: "0420420610",
                        lotame: tmgAds.plugins.lotame.data,
                        customData: tmgAds.dfp.customvars
                    }
                }]
            });
            for (e.adUnits.push({
                    code: "advert_tmg_mpu-12674818",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "appnexusgmsmprm",
                        params: {
                            placementId: "12674818"
                        }
                    }]
                }), e.adUnits.push({
                    code: "advert_tmg_hpg-9979665",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250],
                                [320, 100],
                                [320, 50],
                                [300, 50]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "appnexusclient",
                        params: {
                            placementId: "9979665"
                        }
                    }]
                }), e.adUnits.push({
                    code: "advert_tmg_mpu-9979654",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250],
                                [320, 100],
                                [320, 50],
                                [300, 50]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "appnexusclient",
                        params: {
                            placementId: "9979654"
                        }
                    }]
                }), i = 0; i <= e.dyncount - 1; i++) e.adUnits.push({
                code: "advert_tmg_dyn_" + i + "-11433632",
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250],
                            [320, 100],
                            [320, 50],
                            [300, 50]
                        ]
                    }
                },
                bids: [{
                    bidder: "appnexusclient",
                    params: {
                        placementId: "11433632"
                    }
                }]
            });
            for (e.adUnits.push({
                    code: "advert_tmg_hpg-540231761",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250],
                                [320, 100],
                                [320, 50],
                                [300, 50]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "openxclient",
                        params: {
                            unit: "540231761",
                            delDomain: "telegraph-d.openx.net"
                        }
                    }]
                }), e.adUnits.push({
                    code: "advert_tmg_mpu-540231760",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250],
                                [320, 100],
                                [320, 50],
                                [300, 50]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "openxclient",
                        params: {
                            unit: "540231760",
                            delDomain: "telegraph-d.openx.net"
                        }
                    }]
                }), i = 0; i <= e.dyncount - 1; i++) e.adUnits.push({
                code: "advert_tmg_dyn_" + i + "-540231763",
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250],
                            [320, 100],
                            [320, 50],
                            [300, 50]
                        ]
                    }
                },
                bids: [{
                    bidder: "openxclient",
                    params: {
                        unit: "540231763",
                        delDomain: "telegraph-d.openx.net"
                    }
                }]
            });
            if (window.location.search.indexOf("33acrosstest") >= 0)
                for (console.log("ADTECH: Prebid - 33Across turned on"), e.adUnits.push({
                        code: "advert_tmg_hpg-dLWe6Y8Aqr6iXiaKkGJozW",
                        mediaTypes: {
                            banner: {
                                sizes: [
                                    [300, 250],
                                    [320, 100],
                                    [320, 50],
                                    [300, 50]
                                ]
                            }
                        },
                        bids: [{
                            bidder: "33across",
                            params: {
                                siteId: "dLWe6Y8Aqr6iXiaKkGJozW",
                                productId: "siab"
                            }
                        }]
                    }), e.adUnits.push({
                        code: "advert_tmg_mpu-aedfwQ8Aur6ikPaKkGJozW",
                        mediaTypes: {
                            banner: {
                                sizes: [
                                    [300, 250],
                                    [320, 100],
                                    [320, 50],
                                    [300, 50]
                                ]
                            }
                        },
                        bids: [{
                            bidder: "33across",
                            params: {
                                siteId: "aedfwQ8Aur6ikPaKkGJozW",
                                productId: "siab"
                            }
                        }]
                    }), i = 0; i <= e.dyncount - 1; i++) e.adUnits.push({
                    code: "advert_tmg_dyn_" + i + "-dmM_mY8Aqr6iiWaKkv7mNO",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250],
                                [320, 100],
                                [320, 50],
                                [300, 50]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "33across",
                        params: {
                            siteId: "dmM_mY8Aqr6iiWaKkv7mNO",
                            productId: "siab"
                        }
                    }]
                });
            for (window.location.search.indexOf("rubicontest") >= 0 && (console.log("ADTECH: Prebid - Rubicon turned on"), e.adUnits.push({
                    code: "advert_tmg_hpg-1110760",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250],
                                [320, 100],
                                [320, 50],
                                [300, 50]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "rubiconclient",
                        params: {
                            accountId: "8560",
                            siteId: "226006",
                            zoneId: "1110760",
                            position: "btf"
                        }
                    }]
                }), e.adUnits.push({
                    code: "advert_tmg_mpu-1110762",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250],
                                [320, 100],
                                [320, 50],
                                [300, 50]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "rubiconclient",
                        params: {
                            accountId: "8560",
                            siteId: "226006",
                            zoneId: "1110762",
                            position: "atf"
                        }
                    }]
                }), e.adUnits.push({
                    code: "advert_tmg_dyn_0-1110758",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250],
                                [320, 100],
                                [320, 50],
                                [300, 50]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "rubiconclient",
                        params: {
                            accountId: "8560",
                            siteId: "226006",
                            zoneId: "1110758",
                            position: "btf"
                        }
                    }]
                })), e.adUnits.push({
                    code: "advert_tmg_hpg-1359724",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "criteoclient",
                        params: {
                            networkId: "502"
                        }
                    }]
                }), e.adUnits.push({
                    code: "advert_tmg_mpu-1359725",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "criteoclient",
                        params: {
                            networkId: "502"
                        }
                    }]
                }), i = 0; i <= e.dyncount - 1; i++) e.adUnits.push({
                code: "advert_tmg_dyn_" + i + "-1359744",
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 50]
                        ]
                    }
                },
                bids: [{
                    bidder: "criteoclient",
                    params: {
                        networkId: "502"
                    }
                }]
            }), e.adUnits.push({
                code: "advert_tmg_dyn_" + i + "-1359744",
                mediaTypes: {
                    banner: {
                        sizes: [
                            [320, 50]
                        ]
                    }
                },
                bids: [{
                    bidder: "criteoclient",
                    params: {
                        networkId: "502"
                    }
                }]
            }), e.adUnits.push({
                code: "advert_tmg_dyn_" + i + "-1359743",
                mediaTypes: {
                    banner: {
                        sizes: [
                            [320, 100]
                        ]
                    }
                },
                bids: [{
                    bidder: "criteoclient",
                    params: {
                        networkId: "502"
                    }
                }]
            }), e.adUnits.push({
                code: "advert_tmg_dyn_" + i + "-1359740",
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250]
                        ]
                    }
                },
                bids: [{
                    bidder: "criteoclient",
                    params: {
                        networkId: "502"
                    }
                }]
            });
            for (e.adUnits.push({
                    code: "advert_tmg_mpu",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250],
                                [300, 215],
                                [300, 189],
                                [1, 1]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "teadsclient",
                        params: {
                            placementId: "99344",
                            pageId: "91657"
                        }
                    }]
                }), e.adUnits.push({
                    code: "advert_tmg_bbb",
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250],
                                [300, 215],
                                [300, 189],
                                [1, 1]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "teadsclient",
                        params: {
                            placementId: "102335",
                            pageId: "94519"
                        }
                    }]
                }), i = 0; i <= e.dyncount - 1; i++) e.adUnits.push({
                code: "advert_tmg_dyn_" + i,
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250],
                            [300, 215],
                            [300, 189],
                            [1, 1]
                        ]
                    }
                },
                bids: [{
                    bidder: "teadsclient",
                    params: {
                        placementId: "99345",
                        pageId: "91658"
                    }
                }]
            });
            window.location.search.indexOf("oathtest") >= 0 && console.log("ADTECH: Prebid - Oath/AOL turned on"), e.adUnits.push({
                code: "advert_tmg_nat_story_top-12346",
                mediaTypes: {
                    banner: {
                        sizes: [
                            [1, 1]
                        ]
                    }
                },
                bids: [{
                    bidder: "tripleliftclient",
                    params: {
                        inventoryCode: "12346"
                    }
                }]
            })
        } return e.adUnits
}

function tmgAdsGetAmazonSlots() {
    var e = {
        viewport: tmgAds.layout.viewport,
        sizemap: tmgAds.plugins.sizemapping[tmgAds.layout.viewport],
        adunit: tmgAds.dfp.adunit
    };
    "index" == tmgAds.page.pagetype || "topic" == tmgAds.page.pagetype || "video-index" == tmgAds.page.pagetype ? e.slots = {
        x: ["advert_tmg_ban", "advert_tmg_mpu", "advert_tmg_hpg"],
        l: ["advert_tmg_ban", "advert_tmg_mpu", "advert_tmg_hpg"],
        m: ["advert_tmg_ban", "advert_tmg_mpu", "advert_tmg_hpg"],
        s: ["advert_tmg_ban", "advert_tmg_mpu", "advert_tmg_hpg", "advert_tmg_dyn_0", "advert_tmg_dyn_1", "advert_tmg_dyn_2"],
        xs: ["advert_tmg_ban", "advert_tmg_mpu", "advert_tmg_hpg", "advert_tmg_dyn_0", "advert_tmg_dyn_1", "advert_tmg_dyn_2"]
    } : "story" == tmgAds.page.pagetype || "live" == tmgAds.page.pagetype || "video" == tmgAds.page.pagetype || "gallery" == tmgAds.page.pagetype ? e.slots = {
        x: ["advert_tmg_mpu"],
        l: ["advert_tmg_mpu"],
        m: ["advert_tmg_ban", "advert_tmg_mpu", "advert_tmg_hpg"],
        s: ["advert_tmg_ban", "advert_tmg_mpu", "advert_tmg_hpg", "advert_tmg_dyn_0", "advert_tmg_dyn_1", "advert_tmg_dyn_2"],
        xs: ["advert_tmg_ban", "advert_tmg_mpu", "advert_tmg_hpg", "advert_tmg_dyn_0", "advert_tmg_dyn_1", "advert_tmg_dyn_2"]
    } : e.slots = {
        x: ["advert_tmg_ban", "advert_tmg_mpu", "advert_tmg_hpg"],
        l: ["advert_tmg_ban", "advert_tmg_mpu", "advert_tmg_hpg"],
        m: ["advert_tmg_ban", "advert_tmg_mpu", "advert_tmg_hpg"],
        s: ["advert_tmg_ban", "advert_tmg_mpu", "advert_tmg_hpg", "advert_tmg_dyn_0", "advert_tmg_dyn_1", "advert_tmg_dyn_2"],
        xs: ["advert_tmg_ban", "advert_tmg_mpu", "advert_tmg_hpg", "advert_tmg_dyn_0", "advert_tmg_dyn_1", "advert_tmg_dyn_2"]
    }, e.adslots = e.slots[e.viewport], e.outputArray = [];
    for (var t = 0; t < e.adslots.length; t++) {
        tmgAdsLog("Adding this slot to the bids requested from Amazon: " + e.adslots[t]);
        var s = e.adslots[t].split("_")[2];
        e.item = {
            slotID: e.adslots[t],
            slotName: e.adunit,
            sizes: e.sizemap[s]
        }, e.outputArray.push(e.item)
    }
    return e.output = {
        slots: e.outputArray
    }, e.output
}

function tmgAdsPerf(e, t) {
    if (void 0 !== window.RUM) {
        if (tmgAdsLog("SUCCESS: RUM installed.... go go go go! - " + e + " - " + t[0]), "now" == e) return RUM.now();
        if ("mark" == e) return tmgAds.metrics[t[0]] = tmgAdsTimer(), RUM.mark(t[0]);
        if ("measure" == e) return RUM.measure(t[0], t[1], t[2])
    } else if (void 0 !== window.performance) {
        if (tmgAdsLog("WARNING: RUM NOT installed.... using window.performance API instead! - " + e + " - " + t[0]), tmgAds.log.push("Performance: RUM Not installed, using performance API - " + e + " - " + t[0]), "now" == e) return window.performance.now();
        if ("mark" == e) return tmgAds.metrics[t[0]] = tmgAdsTimer(), window.performance.mark(t[0]);
        if ("measure" == e) return window.performance.measure(t[0], t[1], t[2])
    } else {
        if (tmgAdsLog("WARNING: RUM NOT installed AND window.performance not supported... - " + e + " - " + t[0]), tmgAds.log.push("Performance: No RUM, No perrformance API - " + e + " - " + t[0]), "now" == e) return RUM.now();
        if ("mark" == e) return void(tmgAds.metrics[t[0]] = tmgAdsTimer());
        if ("measure" == e) return
    }
}

function tmgAdsGetObj(e) {
    return window[e]
}

function tmgAdsInitConfig() {
    try {
        tmgAdsEvent("tmggpt-init-conf:start"), tmgAds.config = {
            viewportstatus: !0,
            refurl: !0
        }, tmgAds.config.deliveryModels = tmgAds.model, tmgAdsLog("SUCCESS: tmgAdsInitConfig() initialisation"), tmgAdsLog("##################################################################################################################"), tmgAdsEvent("tmggpt-init-conf:end")
    } catch (e) {
        tmgAdsLog("ERROR: tmgAdsInitConfig() failed -> error=" + e.message), tmgAdsEvent("tmggpt-init-conf:end")
    }
}

function tmgAdsInitData() {
    for (var e in tmgAdsEvent("tmggpt-init-data:start"), tmgAds.counters = {}, tmgAds.metatags = {}, tmgAds.page = tmgAdsGetPageData(), tmgAds.tmg = tmgAdsGetTMGUserData(), tmgAds.google = tmgAdsGetGoogleData(), tmgAds.adobe = tmgAdsGetAdobe(), tmgAds.browser = tmgAdsGetBrowserData(), tmgAds.flash = tmgAdsFlashDetect(), tmgAds.cookies = {
            all: document.cookie
        }, tmgAds.cookies.adops = tmgAdsGetTMGCookies("adops"), tmgAds.page.cms = tmgAdsGetCMS(), tmgAds.plugins.blockdomain) tmgAds.plugins.blockdomain.hasOwnProperty(e) && tmgAds.page.domain == tmgAds.plugins.blockdomain[e] && (tmgAds.plugins.adkill = !0, tmgAdsLog("tmgAdsInitConfig: This page is being viewed through one of our AEM preview instances, turning ads off in: " + tmgAds.plugins.blockdomain[e]));
    void 0 === window.optimize ? (tmgAdsLog("OPTIMIZELY: WARNING -> window.optimize is not defined, creating empty obj"), window.optimize = window.optimize || {
        activeExperiments: []
    }) : tmgAdsLog("OPTIMIZELY: window.optimize is defined"), tmgAds.optimizely = window.optimize.activeExperiments, tmgAdsLog("SUCCESS: tmgAdsInitData() initialisation"), tmgAdsLog("##################################################################################################################"), tmgAdsEvent("tmggpt-init-data:end")
}

function tmgAdsInitDFP() {
    tmgAdsEvent("tmggpt-init-dfp:start"), tmgAds.dfp = tmgAdsGetDFPData(), tmgAdsUpdateDFPCustomVars(), tmgAds.dfp.gpt = tmgAdsGetGPTSetup(tmgAds.dfp.gpt), tmgAds.dfp.adunit = "/" + tmgAds.dfp.networkid + "/" + tmgAds.dfp.sitezone, tmgAdsLog("AdUnit set to: " + tmgAds.dfp.adunit), tmgAds.geo = tmgAdsGetGeoAPI(), tmgAdsAdjustSizeMapping(), tmgAds.adCount = 0, tmgAds.dynCount = 0, tmgAdsEvent("tmggpt-init-dfp:end")
}

function tmgAdsInitEventHandlers() {
    tmgAdsLog("Called: tmgAdsInitEventHandlers()");
    try {
        googletag.cmd.push(function() {
            googletag.pubads().addEventListener("slotRenderEnded", function(e) {
                tmgAdsActionEventHandler("slotRenderEnded", e)
            }), googletag.pubads().addEventListener("impressionViewable", function(e) {
                tmgAdsActionEventHandler("impressionViewable", e)
            }), googletag.pubads().addEventListener("slotVisibilityChanged", function(e) {
                tmgAdsActionEventHandler("slotVisibilityChanged", e)
            })
        }), document.addEventListener("tmg:init-ads", function(e) {
            for (var t in tmgAdsEvent("tmggpt-init-ads:start"), tmgAdsInitData(), tmgAdsInitDFP(tmgAds), tmgAds.ads) tmgAds.ads.hasOwnProperty(t) && (googletag.destroySlots([tmgAds.ads[t].adslot]), googletag.cmd.push(tmgAdsBuildAd(tmgAds.ads[t].div, "", "").display()));
            tmgAdsEvent("tmggpt-init-ads:end")
        }), document.addEventListener("tmgAds:tmggpt-revertStickyBanner", function(e) {
            tmgAdsActionEventHandler("tmgAds_tmggpt-revertStickyBanner")
        }), document.addEventListener("tmgAds:tmggpt-collapseStickyAdslot", function(e) {
            tmgAdsActionEventHandler("tmgAds_tmggpt-collapseStickyAdslot")
        }), document.addEventListener("tmgAds:tmggpt:initstart", function(e) {
            tmgAdsPerf("mark", ["adverts_tmggpt_start"])
        }), document.addEventListener("tmgAds:tmggpt:initend", function(e) {
            tmgAdsPerf("mark", ["adverts_tmggpt_end"]), tmgAdsPerf("measure", ["adverts_tmggpt_loadtime", "adverts_tmggpt_start", "adverts_tmggpt_end"])
        }), document.addEventListener("tmgAds:tmggpt:pageload", function(e) {
            tmgAdsPerf("mark", ["adverts_tmggpt_pageload"]), tmgAdsPerf("mark", ["adverts_page_end"])
        }), document.addEventListener("tmgAds:headerbid:reload", function(e) {
            tmgAdsPerf("mark", ["adverts_headerbid_reload"]), tmgAdsInitHeaderBidders()
        })
    } catch (e) {
        tmgAdsLog("ERROR: tmgAdsInitEventHandlers() - failed -> error=" + e.message)
    }
}

function tmgAdsActionEventHandler(e, t) {
    try {
        switch (e) {
            case "tmgAds_tmggpt-revertStickyBanner":
                tmgAdsLog("tmgAds_tmggpt-revertStickyBanner: removing is-sticky class from advert_tmg_ban"), document.querySelector(".is-sticky").classList.remove("is-sticky"), tmgAds.plugins.mytelegraph.isApplied && (document.getElementsByClassName("my-telegraph")[0].style.top = "0px");
                break;
            case "tmgAds_tmggpt-collapseStickyAdslot":
                tmgAdsLog("We will now close down the sticky ad for the this adunit: " + tmgAds.config.deliveryModel.model), document.getElementById("advert_tmg_" + tmgAds.config.deliveryModel.model).style.height = "0px", setTimeout(function() {
                    document.getElementsByClassName("is-sticky")[0].style.height = "0px"
                }, 1e3);
                break;
            case "slotRenderEnded":
                var s = {
                    event: t,
                    timestamp: tmgAdsTimer(),
                    advertiserId: t.advertiserId,
                    campaignId: t.campaignId,
                    lineItemId: t.lineItemId,
                    creativeId: t.creativeId,
                    sourceAgnosticCreativeId: t.sourceAgnosticCreativeId,
                    sourceAgnosticLineItemId: t.sourceAgnosticLineItemId,
                    esid: null,
                    epid: null,
                    moat: "https://z.moatads.com/telegraphdfp799172313855/moatad.js#moatClientLevel1=" + t.advertiserId + "&moatClientLevel2=" + t.camapignId + "&moatClientLevel3=" + t.lineItemId + "&moatClientLevel4=" + t.creativeId + "&moatClientSlicer1=null&moatClientSlicer2=null&zMoatPS=" + String(t.slot.getTargeting("at")) + "&zMoatSZ=" + String(t.size[0] + "x" + t.size[1]) + "&zMoatPT=" + String(t.slot.getTargeting("pt")) + "&zMoatVP=" + String(t.slot.getTargeting("vp")) + "&zMoatOP=null&zMoatST=" + String(t.slot.getTargeting("sc")),
                    sz: String(t.size[0] + "x" + t.size[1]),
                    natid: String(t.slot.getTargeting("natid")),
                    nattype: String(t.slot.getTargeting("nattype")),
                    div: String(t.slot.getTargeting("div")),
                    pos: String(t.slot.getTargeting("pos")),
                    at: String(t.slot.getTargeting("at")),
                    pt: String(t.slot.getTargeting("pt")),
                    vp: String(t.slot.getTargeting("vp")),
                    sc: String(t.slot.getTargeting("sc"))
                };
                tmgAds.data.ads[s.div] = tmgAds.data.ads[s.div] || [], tmgAds.data.ads[s.div].push(s), tmgAdsLog("EVENT: " + e + " lineItemId:" + t.lineItemId + "  -  creativeId:" + t.creativeId + " - size:" + t.size + " - isEmpty:" + t.isEmpty + " - slotContentChanged:" + t.slotContentChanged, t), void 0 === tmgAds.metrics.tmggptAdFirstAdRendered && (tmgAdsLog("tmgAds.metrics.tmggptAdFirstAdRendered is not defined, setting this now"), tmgAdsPerf("mark", ["adverts_metrics_firstadloaded"]), tmgAds.metrics.tmggptAdFirstAdRendered = s.timestamp, tmgAds.metrics.metricTimeToRenderFirstAd = tmgAds.metrics.tmggptAdFirstAdRendered), tmgAdsPerf("mark", ["adverts_loaded_" + s.at]), tmgAds.metrics.tmggptAdLastAdRendered = s.timestamp, tmgAds.metrics.metricTimeToRenderAllAds = tmgAds.metrics.tmggptAdLastAdRendered - tmgAds.metrics.tmggptAdFirstAdQueued;
                var d = document.getElementById(s.div);
                if (t.isEmpty) d.classList.add("is-empty"), d.classList.remove("is-loaded"), d.style.height = 0, d.style.opacity = 0, tmgAdsLog("Ad is EMPTY we have nothing to transition - " + s.div);
                else {
                    if (d.classList.add("is-loaded"), d.classList.remove("is-empty"), "nat" == s.at ? (-1 != s.natid.indexOf("nat_story_list_onward_mob") && (d.style.marginTop = "-16px", d.style.marginBottom = "-16px"), "nat_story_sparkbrain_1" != s.natid && "nat_story_sparkbrain_2" != s.natid && "nat_story_outbrain" != s.natid || (("x" == s.vp || "l" == s.vp || "m" == s.vp) && (s.marginBottom = "0px"), ("xs" == s.vp || "s" == s.vp) && (s.marginBottom = "0px"), d.style.marginBottom = s.marginBottom, tmgAdsLog("NATIVE:: " + s.natid + " :: vp=" + s.vp + " :: setting marginBottom = " + s.marginBottom)), d.style.height = "auto") : d.style.height = t.size[1] + "px", d.style.opacity = 1, "mpu" != s.at && "hpg" != s.at || "x" != s.vp && "l" != s.vp || (d.style.width = t.size[0] + "px"), "mytelegraph" == tmgAds.page.businessseg && ("x" == s.vp || "l" == s.vp || "m" == s.vp ? d.style.height = t.size[1] + 15 + "px" : (d.style.height = t.size[1] + 30 + "px", d.style.paddingTop = "15px")), tmgAds.plugins.mytelegraph.isApplied && "desktop" == tmgAds.plugins.mytelegraph.isPlatform && ("ban" == s.at || "mpu" == s.at)) {
                        if ("mpu" == s.at && ("story" == tmgAds.page.pagetype || "live" == tmgAds.page.pagetype || "video" == tmgAds.page.pagetype)) {
                            d.style.paddingTop = "25px", d.style.height = t.size[1] + 25 + "px"
                        }
                        "ban" != s.at || "index" != tmgAds.page.pagetype && "topic" != tmgAds.page.pagetype || "m" != tmgAds.layout.viewport && "ban" == tmgAds.config.deliveryModel.activityStatus && (document.getElementsByClassName("my-telegraph")[0].style.top = t.size[1] + 16 + "px")
                    }
                    tmgAdsLog("Ad is rendered, transition height/opacity")
                }
                void 0 !== tmgAds.metrics.ads[s.at] && (tmgAds.metrics.ads[s.at].rendered = tmgAdsTimer(), tmgAds.metrics.ads[s.at].rendertime = Number((tmgAds.metrics.ads[s.at].rendered - tmgAds.metrics.ads[s.at].queued).toFixed(3))), tmgAds.plugins.adviewability && (console.log("VIEWABILITY: we are testing non-creative-wrapper delivered "), tmgAdsLoadJS("moat-" + s.div, s.moat, {}, function() {
                    console.log("VIEWABILITY: Moat")
                }), tmgAdsLoadJS("ias-" + s.div, s.ias, {}, function() {
                    console.log("VIEWABILITY: IAS")
                }));
                break;
            case "impressionViewable":
                tmgAds.metrics.ads[t.slot.getTargeting("at")].viewable = !0;
                break;
            case "slotVisibilityChanged":
                tmgAdsLog("EVENT: " + e + " lineItemId:" + t.lineItemId + "  -  creativeId:" + t.creativeId + " - size:" + t.size + " - isEmpty:" + t.isEmpty + " - slotContentChanged:" + t.slotContentChanged, t), tmgAds.metrics.ads[t.slot.getTargeting("at")].viewability = t.inViewPercentage, tmgAds.metrics.ads[t.slot.getTargeting("at")].creativeId = t.creativeId, t.inViewPercentage < 100 && tmgAds.config.deliveryModel.sticky && t.slot.getTargeting("at") == tmgAds.config.deliveryModel.model && (tmgAds.config.viewportstatus = !1, tmgAdsLog("EVENT: Viewability Changed - " + t.inViewPercentage), tmgAdsLog("PAUSE ad due to viewability < 100% - [" + t.inViewPercentage + "]")), 100 == t.inViewPercentage && tmgAds.config.deliveryModel.sticky && t.slot.getTargeting("at") == tmgAds.config.deliveryModel.model && (tmgAds.config.viewportstatus = !0, tmgAdsLog("EVENT: Viewability Changed - " + t.inViewPercentage), tmgAdsLog("START ad has returned to 100%"));
                break;
            case "impressionViewable":
                tmgAdsLog("EVENT: " + e + " lineItemId:" + t.lineItemId + "  -  creativeId:" + t.creativeId + " - size:" + t.size + " - isEmpty:" + t.isEmpty + " - slotContentChanged:" + t.slotContentChanged, t)
        }
    } catch (e) {
        tmgAdsLog("ERROR: tmgAdsActionEventHandler() - failed -> error=" + e.message, t)
    }
}

function tmgAdsInitGeoAPIStatus() {
    try {
        void 0 !== window.googletag ? tmgAds.plugins.gpt.setLocation ? (tmgAdsLog("tmgAdsGeoAPIStatus: obj.plugins.gpt.setLocation is ACTIVATED for this site - now lets check if the browsers currently supports the Geo-API feature"), 1 == tmgAds.geo.supported ? (tmgAdsLog("tmgAdsGeoAPIStatus: obj.geo.supported IS supported - now lets check if the browser supports this feature"), 1 == tmgAds.geo.available ? (tmgAdsLog("tmgAdsGeoAPIStatus: obj.geo.available IS available - setting the following: googletag.setLocation(" + tmgAds.geo.api.longitude + ", " + tmgAds.geo.api.latitude + ", " + tmgAds.geo.api.accuracy + ") [longitude,latitude,accuracy]"), googletag.cmd.push(function() {
            googletag.setLocation(tmgAds.geo.api.longitude, tmgAds.geo.api.latitude, tmgAds.geo.api.accuracy)
        })) : tmgAdsLog("tmgAdsGeoAPIStatus: obj.geo.available IS NOT available")) : tmgAdsLog("tmgAdsGeoAPIStatus: obj.geo.supported IS NOT supported.")) : tmgAdsLog("tmgAdsGeoAPIStatus: obj.plugins.gpt.setLocation is NOT ACTIVATED for this site.") : tmgAdsLog("tmgAdsGeoAPIStatus: WARNING: googletag obj does not exist")
    } catch (e) {
        tmgAdsLog("ERROR: tmgAdsInitGeoAPIStatus() - failed -> error=" + e.message, event)
    }
}

function tmgAdsGetSizeMatrix() {
    tmgAdsLog("Called");
    return {
        ban: [
            [970, 250],
            [970, 90],
            [970, 66],
            [940, 250],
            [900, 250],
            [728, 90],
            [468, 60]
        ],
        mpu: [
            [300, 1050],
            [300, 600],
            [300, 250]
        ],
        sky: [
            [300, 1050],
            [300, 600],
            [300, 250],
            [160, 600],
            [120, 600]
        ],
        hpg: [
            [300, 1050],
            [300, 600],
            [300, 250],
            [160, 600],
            [120, 600]
        ],
        mob: [
            [300, 250],
            [320, 100],
            [320, 50],
            [300, 50]
        ],
        nat: "fluid",
        com: [300, 260],
        car: [300, 250],
        pp: [7, 7],
        ins: "5x5",
        yel: [3, 3],
        inr: [1, 1],
        tmg: [1, 1],
        ftr: [1, 1],
        vid: "620x415"
    }
}

function tmgAdsGetDFPData() {
    var e = {
        pos: 0,
        tile: 0,
        adserver: tmgAds.plugins.gpt.servername,
        networkid: tmgAds.plugins.gpt.networkid,
        site: tmgAds.page.site,
        sitename: "tmg.telegraph." + tmgAds.page.site,
        zonename: tmgAds.page.zone.substr(0, 100),
        sitezone: "tmg.telegraph." + tmgAds.page.site + "/" + tmgAds.page.zone.substr(0, 100),
        ord: Number(new Date)
    };
    return tmgAds.plugins.adteston && (console.log("tmgAdsGetDFPData: adteston has been declared, we now change adunits to tmg.telegraph.test/test"), e.site = "test", e.sitename = "tmg.telegraph.test", e.zonename = "tmg.telegraph.test/test", e.sitezone = "tmg.telegraph.test/test"), tmgAdsLog("tmgads.dfp.site     = " + e.site), tmgAdsLog("tmgads.dfp.sitename = " + e.sitename), tmgAdsLog("tmgads.dfp.zonename = " + e.zonename), tmgAdsLog("tmgads.dfp.sitezone = " + e.sitezone), e
}

function tmgAdsAdjustSizeMapping() {
    tmgAdsLog("Called"), "puzzles" == tmgAds.dfp.site && (tmgAdsLog("ALERT: site is not covered by default sizeing values, we are resetting these now -> at=ban -> site=" + tmgAds.dfp.site), tmgAds.config.adsizematrix.ban = [
        [468, 60],
        [728, 90],
        [900, 250],
        [940, 250]
    ], tmgAds.plugins.sizemapping.x.ban = [
        [468, 60],
        [728, 90],
        [900, 250],
        [940, 250]
    ], tmgAds.plugins.sizemapping.l.ban = [
        [468, 60],
        [728, 90],
        [900, 250],
        [940, 250]
    ], tmgAds.plugins.sizemapping.m.ban = [
        [468, 60],
        [728, 90],
        [900, 250],
        [940, 250]
    ], tmgAds.plugins.sizemapping.s.ban = [
        [468, 60],
        [728, 90],
        [900, 250],
        [940, 250]
    ], tmgAds.plugins.sizemapping.xs.ban = [
        [468, 60],
        [728, 90],
        [900, 250],
        [940, 250]
    ]), "fantasyfootball" == tmgAds.dfp.site && (tmgAdsLog("ALERT: site is not covered by default sizing values, we are resetting these now -> site=" + tmgAds.dfp.site), tmgAds.config.adsizematrix.ban = [728, 90], tmgAds.plugins.sizemapping.x.ban = [728, 90], tmgAds.plugins.sizemapping.l.ban = [728, 90], tmgAds.plugins.sizemapping.m.ban = [728, 90], tmgAds.plugins.sizemapping.s.ban = [320, 50], tmgAds.plugins.sizemapping.xs.ban = [320, 50], tmgAds.config.adsizematrix.mpu = [
        [300, 250],
        [300, 600]
    ], tmgAds.plugins.sizemapping.x.mpu = [
        [300, 250],
        [300, 600]
    ], tmgAds.plugins.sizemapping.l.mpu = [
        [300, 250],
        [300, 600]
    ], tmgAds.plugins.sizemapping.m.mpu = [
        [300, 250],
        [300, 600]
    ], tmgAds.plugins.sizemapping.s.mpu = [300, 250], tmgAds.plugins.sizemapping.xs.mpu = [300, 250]), "courses" != tmgAds.dfp.site && "clearing" != tmgAds.dfp.site || (tmgAds.config.adsizematrix.mpu = [300, 250], tmgAds.plugins.sizemapping.x.mpu = [300, 250], tmgAds.plugins.sizemapping.l.mpu = [300, 250], tmgAds.plugins.sizemapping.m.mpu = [300, 250], tmgAds.plugins.sizemapping.s.mpu = [300, 250], tmgAds.plugins.sizemapping.xs.mpu = [300, 250])
}

function tmgAdsGetCMS() {
    tmgAdsLog("Called:");
    var e = "unknown";
    return tmgAdsLog("ascertaining which CMS is being used"), tmgAdsLog("tmgAds.page.businessseg=" + tmgAds.page.businessseg), null === tmgAds.page.businessseg || void 0 === tmgAds.page.businessseg ? (tmgAdsLog("would appear we are using eScenic"), e = "escenic") : (tmgAdsLog("would appear we are using AEM"), e = "aem"), tmgAdsLog("returning the following values cms=" + e), e
}

function tmgAdsGetAdobe() {
    var e = {
        amcv: "unavailable",
        aam_uuid: "unavailable"
    };
    return void 0 !== window._satellite ? (e.amcv = window._satellite.getVisitorId().getMarketingCloudVisitorID(), e.aam_uuid = tmgAdsGetCookie("aam_uuid")) : tmgAdsLog("WARNING:: Adobe _satellite object no available...."), e
}

function tmgAdsGetGoogleData() {
    tmgAdsLog("Called:");
    return {}
}

function tmgAdsGetTMGUserData() {
    tmgAdsLog("Called:");
    var e = {
        premt: tmgAdsGetMetaTag("DCSext.pd"),
        premo: tmgAds.page.dataLayer.premiumOverride,
        premc: tmgAds.page.dataLayer.premiumContent,
        session: tmgAdsGetCookie("tmg_session"),
        rem: tmgAdsGetCookie("tmg_rem"),
        pid: tmgAdsGetCookie("tmg_pid"),
        p13n: tmgAdsGetCookie("tmg_p13n"),
        tmg_subs_referer: tmgAdsGetCookie("tmg_subs_referer"),
        tmg_authz_session: tmgAdsGetCookie("tmg_authz_session"),
        tmg_meter_count: tmgAdsCsvToObj(tmgAdsGetCookie("tmg_meter_count"), ",", ":"),
        tmg_web_trends: tmgAdsCsvToObj(tmgAdsGetCookie("tmg_web_trends"), ",", ":")
    };
    if ("object" == typeof window.tmg)
        if (tmg.hasOwnProperty("user")) {
            tmg.user.hasOwnProperty("isSubscriber") && (e.isSubscriber = tmg.user.isSubscriber()), tmg.user.hasOwnProperty("isRegistered") && (e.isRegistered = tmg.user.isRegistered()), tmg.user.hasOwnProperty("isLoggedIn") && (e.isLoggedIn = tmg.user.isLoggedIn());
            try {
                tmg.user.hasOwnProperty("getProfile") && (e.profile = tmg.user.getProfile())
            } catch (e) {
                console.log("tmgAdsGetTMGUserData: Error accessing tmg.user.getProfile() (prob single quotes in JSON object parsing on tmg.user.getProfile() ) -> " + e)
            }
        } else e.isSubscriber = null, e.isRegistered = null, e.isLoggedIn = null, e.profile = null;
    else "mytelegraph" == tmgAds.page.businessseg ? (e.isSubscriber = "unknown", e.isRegistered = !0, e.isLoggedIn = !0, e.profile = {}) : (e.isSubscriber = "unknown", e.isRegistered = "unknown", e.isLoggedIn = "unknown", e.profile = {});
    return 0 == e.premt ? e.premt = !0 : e.premt = !1, window.JSON && void 0 !== e.tmg_subs_referer ? (tmgAdsLog("window.JSON supported AND tmg_subs_referer cookie exists"), "undefined" != e.tmg_subs_referer && (e.tmg_subs_referer = JSON.parse(e.tmg_subs_referer), tmgAdsLog("JSON.parse(tmp.tmg_subs_referer)=" + e.tmg_subs_referer))) : tmgAdsLog("either window.JSON not supported or no tmg_subs_referer cookie"), e
}

function tmgAdsGetGPTSetup(e) {
    tmgAdsLog("Called:");
    var t = e || {};
    if (t.setTargeting = [], t.setTargetingStr = [], t.customvarstr = "", void 0 !== tmgAds.dfp.customvars)
        for (var s in tmgAdsLog("tmgAds.dfp.customvars exists - iterating through tmgAds.dfp.customvars"), tmgAds.dfp.customvars) tmgAds.dfp.customvars.hasOwnProperty(s) && "" !== tmgAds.dfp.customvars[s] && (tmgAds.dfp.customvars[s] instanceof Array ? (tmgAdsLog("adding tmgAds.dfp.customvars[" + s + "] as Array()"), t.setTargeting.push(".setTargeting('" + s + "',tmgAds.dfp.customvars['" + s + "'])"), t.setTargetingStr += ".setTargeting('" + s + "',tmgAds.dfp.customvars['" + s + "'])") : null !== tmgAds.dfp.customvars[s] ? (tmgAdsLog("adding tmgAds.dfp.customvars[" + s + "]=" + tmgAds.dfp.customvars[s]), t.setTargeting.push(".setTargeting('" + s + "','" + tmgAds.dfp.customvars[s] + "')"), t.setTargetingStr += ".setTargeting('" + s + "','" + tmgAds.dfp.customvars[s] + "')") : tmgAdsLog("tmgAds.dfp.customvars[" + s + "] is null, omitting from tag"), t.customvarstr += "&" + s + "=" + tmgAds.dfp.customvars[s]);
    else tmgAdsLog("tmgAds.dfp.customvars does not exist");
    return t.customvarstr = t.customvarstr.substring(1), t
}

function tmgAdsUpdateDFPCustomVars() {
    function e(e) {
        var t = "unknown";
        return !0 === e && (t = "yes"), !1 === e && (t = "no"), t
    }
    var t = {};
    void 0 !== tmgAds.about.version && (t.ver = tmgAds.about.version), void 0 !== tmgAds.page.section && (t.sc = tmgAds.page.section), void 0 !== tmgAds.page.pagetype && (t.pt = tmgAds.page.pagetype);
    try {
        tmgAds.page.dataLayer && (t.pr = tmgAds.page.dataLayer.pageType.toLowerCase())
    } catch (e) {
        console.log("ADTECH: page rendered not available -> tmgAds.page.dataLayer.pageType")
    }
    return void 0 !== tmgAds.page.level && (t.lvl = tmgAds.page.level), void 0 !== tmgAds.browser.biw && (t.biw = tmgAds.browser.biw), void 0 !== tmgAds.browser.bih && (t.bih = tmgAds.browser.bih), void 0 !== tmgAds.browser.language && (t.lang = tmgAds.browser.language.toLowerCase()), void 0 !== tmgAds.flash.versionMaj && (t.fv = tmgAds.flash.versionMaj), void 0 !== tmgAds.plugins.dnt.active && (t.dnt = tmgAds.plugins.dnt.state), void 0 !== tmgAds.page.protocol && (t.protocol = tmgAds.page.protocol.substring(0, tmgAds.page.protocol.length - 1)), void 0 !== tmgAds.page.domain && (t.rd = tmgAds.page.domain), void 0 !== tmgAds.page.topdom && (t.topdom = tmgAds.page.topdom), void 0 !== tmgAds.page.cms && (t.cms = tmgAds.page.cms), void 0 !== tmgAds.page.keywords && (t.kw = tmgAds.page.keywords), void 0 !== tmgAds.page.geo && (t.geo = tmgAds.page.geo), void 0 !== tmgAds.page.editorschoice && (t.ec = tmgAds.page.editorschoice), void 0 !== tmgAds.page.mostviewed && (t.mv = tmgAds.page.mostviewed), void 0 !== tmgAds.page.mostshared && (t.ms = tmgAds.page.mostshared), void 0 !== tmgAds.page.videosrc && (t.vidsrc = tmgAds.page.videosrc), void 0 !== tmgAds.page.articleid && (t.pg = tmgAds.page.articleid), void 0 !== tmgAds.page.gamp && (t.gamp = tmgAds.page.gamp), void 0 !== tmgAds.page.refresh ? t.refresh = tmgAds.page.refresh : t.refresh = 0, void 0 !== tmgAds.page.instanceId && (t.pvid = tmgAds.page.instanceId), void 0 !== tmgAds.page.premadexp ? t.premadexp = !0 : t.premadexp = !1, void 0 !== tmgAds.page.docdom && (t.docdom = tmgAds.page.docdom), void 0 !== tmgAds.grapeshot && (t.gs = tmgAds.grapeshot.dfp), void 0 !== tmgAds.layout.platform && (t.platform = tmgAds.layout.platform), void 0 !== tmgAds.layout.viewport && (t.vp = tmgAds.layout.viewport), void 0 !== tmgAds.page.keywords && (t.kw = tmgAds.page.keywords), tmgAds.page.dataLayer.premiumContent ? t.premc = tmgAds.page.dataLayer.premiumContent : t.premc = "false", tmgAds.page.dataLayer.premiumOverride ? t.premo = tmgAds.page.dataLayer.premiumOverride : t.premo = "false", tmgAds.tmg.premt ? t.premt = tmgAds.tmg.premt : t.premt = "false", void 0 !== tmgAds.tmg.tmg_meter_count ? t.tmgmvc = tmgAds.tmg.tmg_meter_count.vars.meter_viewed_count : t.tmgmvc = "none", void 0 !== tmgAds.tmg.tmg_meter_count ? t.tmgmu = tmgAds.tmg.tmg_meter_count.vars.meter_user_viewed : t.tmgmu = "none", null !== typeof tmgAds.tmg.isSubscriber && (t.tmgsub = e(tmgAds.tmg.isSubscriber)), null !== typeof tmgAds.tmg.isRegistered && (t.tmgreg = e(tmgAds.tmg.isRegistered)), null !== typeof tmgAds.tmg.isLoggedIn && (t.tmglin = e(tmgAds.tmg.isLoggedIn)), void 0 !== tmgAds.tmg.pid && (t.tmgpid = tmgAds.tmg.pid), tmgAds.page.evidon && (t.evidon = tmgAds.page.evidon), void 0 !== tmgAds.plugins.beemray.dfp ? t.beemray = tmgAds.plugins.beemray.dfp : t.beemray = "none", void 0 !== tmgAds.adobe.amcv ? t.amcv = tmgAds.adobe.amcv : t.amcv = "none", void 0 !== tmgAds.adobe.aam_uuid ? t.aam = tmgAds.adobe.aam_uuid : t.aam = "none", window.location.search.indexOf("pbcidtest") >= 0 && (console.log("ADTECH: Prebid _pubcid is ACTIVE, injecting into DFP call."), void 0 !== tmgAds.plugins.headerBidders.prebid.commonId._pubcid ? t.pubcid = tmgAds.plugins.headerBidders.prebid.commonId._pubcid : t.pubcid = "none"), !1 !== typeof tmgAds.plugins.adtest && (t.test = tmgAds.plugins.adtest), tmgAds.plugins.adtest && (t.test = tmgAds.plugins.adtest), tmgAds.plugins.refurl ? t.refurl = tmgAds.page.url : t.refurl = "inactive", tmgAds.plugins.donottrack ? t.dnt = tmgAds.plugins.donottrack : t.dnt = "inactive", void 0 !== tmgAds.target.targetID && (t.adbtargettid = tmgAds.target.targetID), void 0 !== tmgAds.target.segments && (t.adbtargetsid = tmgAds.target.segments), t.admodel = tmgAds.config.deliveryModel.activityStatus + "-" + tmgAds.config.deliveryModel.minHeight + "-" + tmgAds.config.deliveryModel.refreshRate + "-" + tmgAds.config.deliveryModel.refreshCycle, t.sticky = 0, "default" !== tmgAds.config.deliveryModel.activityStatus && "none" !== tmgAds.config.deliveryModel.activityStatus && (t.sticky = 1), tmgAds.dfp.customvars = t, t
}

function tmgAdsLog(e, t) {
    if ("undefined" != typeof tmgAds && void 0 !== tmgAds.plugins && void 0 !== tmgAds.plugins.adconsole && !0 === tmgAds.plugins.adconsole) {
        var s = {
            time: ("00" + (tmgAdsTimer() / 1e3).toFixed(5)).slice(-9),
            callee: null,
            extra: t,
            styling: "",
            css: {
                none: "background: #FFFFFF; color: #000000",
                alert: "background: #D4A6A6; color: #000000",
                success: "background: #B2D8B2; color: #000000",
                error: "background: #FFB2B2; color: #000000",
                warning: "background: #FFE4B2; color: #000000",
                optimizely: "background: #FFDD37: color: #000000",
                event: "background: #C0CEDC; color: #000000"
            },
            msg: e
        };
        arguments.callee.caller && (s.callee = arguments.callee.caller.name), s.msg = "%c[TMG-GPT][" + s.time + "][" + (s.callee + "                         ").substr(0, 25) + "]: " + s.msg, s.styling = s.css.none, "ALERT" == e.substr(0, 5) && (s.styling = s.css.alert), "OPTIMIZELY" == e.substr(0, 10) && (s.styling = s.css.optimizely), "SUCCESS" == e.substr(0, 7) && (s.styling = s.css.success), "ERROR" == e.substr(0, 5) && (s.styling = s.css.error), "WARNING" == e.substr(0, 7) && (s.styling = s.css.warning), "EVENT" == e.substr(0, 5) && (s.styling = s.css.event), "INFO" == e.substr(0, 4) && (s.styling = s.css.info), tmgAds.log.push(s.msg), console.log(s.msg, s.styling)
    }
}

function tmgAdsGetObjSize(e) {
    for (var t = [], s = [e], d = 0; s.length;) {
        var i = s.pop();
        if ("boolean" == typeof i) d += 4;
        else if ("string" == typeof i) d += 2 * i.length;
        else if ("number" == typeof i) d += 8;
        else if ("object" == typeof i && -1 === t.indexOf(i))
            for (var a in t.push(i), i) s.push(i[a])
    }
    return d / 1024
}

function tmgAdsGetGeoAPI() {
    tmgAdsLog("Called:");
    var e = {
        available: 0,
        supported: 0,
        api: {},
        position: {}
    };
    return tmgAds.plugins.gpt.setLocation ? (navigator.geolocation.getCurrentPosition(function(t) {
        e.api = t.coords, e.position = t.coords, e.available = 1, e.supported = 1, tmgAdsLog("GeoAPI success -> position.coords=" + t.coords)
    }, function(t) {
        e.available = 0, e.supported = -1, tmgAdsLog("GeoAPI failed: " + t)
    }), tmgAdsLog("navigator.geolocation supported in this browser")) : tmgAdsLog("navigator.geolocation not supported in this browser"), e
}

function tmgAdsGetMetaTag(e) {
    try {
        var t = null;
        if (null !== document.getElementsByName(e)[0] && void 0 !== document.getElementsByName(e)[0]) {
            if (tmgAdsLog("tmgAdsGetMetaTag(" + e + "): document.getElementsByName('" + e + "')[0] exists"), document.getElementsByName(e)[0].content.length > 0 && (t = document.getElementsByName(e)[0].content.toLowerCase(), tmgAdsLog("tmgAdsGetMetaTag(" + e + '): "' + (t = "tmgads.articleid" == e ? decodeURIComponent(document.getElementsByName(e)[0].content) : decodeURIComponent(document.getElementsByName(e)[0].content.toLowerCase())) + '"')), "tmgads.keywords" == e)
                if (null !== t) {
                    t = t.split(",");
                    for (var s = 0; s < t.length; s++) String.prototype.trim ? t[s] = t[s].trim() : null !== typeof t[s] ? t[s] = t[s].replace(/^\s\s*/, "").replace(/\s\s*$/, "") : tmgAdsLog("tmgAdsGetMetaTag(" + e + '): tmp[i] is null -> "' + t[s] + '"'), tmgAdsLog("tmgAdsGetMetaTag(" + e + '): tmgads.keywords -> "' + t[s] + '"')
                } else tmgAdsLog("tmgAdsGetMetaTag(" + e + "): tmgads.keywords -> tmgads.keywords content is not set")
        } else tmgAdsLog("tmgAdsGetMetaTag(" + e + "): document.getElementsByName('" + e + "')[0] does not exist -> " + t);
        return tmgAds.data.metatags[e] = t, t
    } catch (t) {
        tmgAdsLog("ERROR: tmgAdsGetMetTag(" + e + ") failed -> error=" + t.message)
    }
}

function tmgAdsGetPageData() {
    try {
        tmgAdsLog("Called:");
        var e = {
            zone: "unknown",
            url: location.protocol + "//" + location.host + location.pathname,
            url_full: location.href,
            referrer: document.referrer,
            docdom: document.domain,
            domain: location.hostname,
            protocol: location.protocol,
            search: location.search,
            topdom: top.location.hostname,
            gamp: "0",
            environment: "-"
        };
        return "refresh" === tmgAdsGetURLParam("source", window.location.href) ? (e.refresh = 1, tmgAdsLog("tmgAdsGetPageData: page is a refreshed page")) : tmgAdsLog("tmgAdsGetPageData: page is not refreshed"), "mobile" == tmgAdsGetMetaTag("DCSext.Platform") ? e.platform = "mobile" : e.platform = "desktop", tmgAdsLog("tmgAdsGetPageData: platform is: " + e.platform), "mobile" == e.platform ? e.pagetype = tmgAdsGetMetaTag("DCSext.Content_Type") : e.pagetype = tmgAdsGetMetaTag("tmgads.pagetype"), tmgAdsLog("tmgAdsGetPageData: pagetype is: " + e.pagetype), "mobile" == e.platform ? e.articleid = tmgAdsGetMetaTag("DCSext.articleId") : e.articleid = tmgAdsGetMetaTag("tmgads.articleid"), tmgAdsLog("tmgAdsGetPageData: articleid is: " + e.articleid), "mobile" == e.platform ? e.geo = tmgAdsGetMetaTag("DCSext.akamaigeo") : e.geo = tmgAdsGetMetaTag("tmgads.geo"), tmgAdsLog("tmgAdsGetPageData; geo is: " + e.geo), null === e.pagetype && (e.pagetype = "unset"), "mobile" == e.platform ? e.zone = tmgAdsGetMetaTag("DCSext.MLC").substring(1, tmgAdsGetMetaTag("DCSext.MLC").length) : e.zone = tmgAdsGetMetaTag("tmgads.zone"), null !== typeof e.zone ? e.zone = e.zone.replace(/\//g, ".").replace(/-/g, "").replace(/_/g, "") : (e.zone = "unknown", tmgAdsLog("WARNING:::: tmgAdsGetPageData: zone is null, setting to unknown")), null !== e.zone.match(/(\d{4})\.(\d{2})\.(\d{2})$/) && (e.zone = e.zone.substring(0, e.zone.length - 11)), tmgAdsLog("tmgAdsGetPageData: zone is: " + e.zone), e.businessseg = tmgAdsGetMetaTag("tmgads.businessSegment"), tmgAdsLog("tmgAdsGetPageData: bsuinessSeg is: " + e.businesssegm), tmgAdsLog("tmgAdsGetMetaTag: Fixing broken classifications"), "lifestyle/puzzles" == e.zone && (e.zone = "puzzles", tmgAdsLog("tmgAdsGetPageData: changed lifestlye/puzzles to puzzles")), null === e.businessseg ? tmgAdsLog("tmgAdsGetMetaTag: tmp.businessseg is null, use the zone data in it's entirety, NB: we set businesssseg to the site value after this script.") : (tmgAdsLog("tmgAdsGetMetaTag: tmp.businessseg not null, work out if we need to prepend the businessSeg value to the start of the zone value (only do this if the businessSeg is different from th first zone array value: "), tmgAdsLog("tmgAdsGetMetaTag: tmp.businessseg = " + e.businessseg), tmgAdsLog("tmgAdsGetMetaTag; tmp.zone = " + e.zone), e.businessseg == e.zone.split(".")[0] ? tmgAdsLog("tmgAdsGetMetaTag: tmp.zone first element is same as the businessseg so don't do anything to the zone:") : (tmgAdsLog("tmgAdsGetMetaTag: tmp.zone first element is different from businessseg so prepend this to the zone:"), e.zone = e.businessseg + "." + e.zone), tmgAdsLog("tmgAdsGetMetaTag: tmp.zone value: " + e.zone)), e.zonedata = e.zone.split("."), e.level = e.zonedata.length, e.section = e.zone.replace(/\./g, "-").replace(/_/g, ""), e.site = e.zonedata[0], e.businessseg, e.site, e.otherdata = "", e.keywords = tmgAdsGetMetaTag("tmgads.keywords"), e.mostshared = tmgAdsGetMetaTag("tmgads.mostshared"), e.mostviewed = tmgAdsGetMetaTag("tmgads.mostviewed"), e.parentid = tmgAdsGetMetaTag("tmgads.parentid"), e.product = tmgAdsGetMetaTag("tmgads.product"), e.sensitive = tmgAdsGetMetaTag("tmgads.sensitive"), e.videosrc = tmgAdsGetMetaTag("tmgads.videosrc"), e.sponsor = tmgAdsGetMetaTag("tmgads.sponsor"), e.evidon = "-1", -1 == document.cookie.indexOf("_evidon_consent_cookie") ? e.evidon = "0" : e.evidon = "1", tmgAdsLog("tmgAdsGetMetaTag: Fixing bad page classifications/taxonomies"), ("ece_frontpage" == e.section || "ecefrontpage" == e.section) && (e.section = "portal"), ("food_and_drink" == e.section || "food-and-drink" == e.section) && (e.section = "foodanddrink"), ("food_and_drink" == e.site || "food-and-drink" == e.site) && (e.site = "foodanddrink"), e.dataLayer = window.dataLayer || ["UNSET"], e.pageData = window.pageData || ["UNSET"], e.instanceId = tmgAdsUUID(), e
    } catch (e) {
        tmgAdsLog("ERROR: tmgAdsGetPageData() failed -> error=" + e.message)
    }
}

function tmgAdsGetURLParam(e, t) {
    tmgAdsLog('Called: tmgAdsGetUrlParam("' + e + '","' + t + '")');
    var s = !1;
    return "adtest" == e ? tmgAdsLog("Setting ADTEST to: " + (s = decodeURI((RegExp(e + "=(.+?)(&|$)").exec(t) || [, null])[1]))) : s = window.location.search.indexOf(e) > 0, tmgAdsLog("Checking for url-switch [" + e + "] :" + s), s
}

function tmgAdsGetTMGCookies(e) {
    tmgAdsLog("Called:"), tmgAdsLog("tmgAds.plugins.tmgcookies.active = " + tmgAds.plugins.tmgcookies.active);
    var t, s = "";
    if (tmgAds.plugins.tmgcookies.active) {
        tmgAdsLog("Adding any tmgcookies");
        for (var d = document.cookie.split("; "), i = 0; i < d.length; i++) d[i].hasOwnProperty(i) && "tmgads_" === (t = d[i].split("="))[0].substr(0, 7) && t[0].length > 0 && (s += ";ck_" + t[0].substr(7, t[0].length - 7) + "=" + t[1])
    }
    return s
}

function tmgAdsLoadJS(e, t, s, d) {
    var i = {
        name: e,
        status: "init",
        id: d,
        type: "text/javascript",
        performance: {
            url: t,
            init: Math.round(tmgAdsTimer()),
            requested: 0,
            received: 0,
            latency: -1
        }
    };
    tmgAdsEvent(e + ":" + i.status);
    var a = document.createElement("script");
    d && (a.id = i.id), a.type = "text/javascript", a.async = !0, a.onload = function() {
        for (var t in i.status = "received", tmgAdsEvent(e + ":" + i.status), i.performance.received = Math.round(tmgAdsTimer()), i.performance.latency = Math.round(parseFloat((i.performance.received - i.performance.init).toFixed(3))), tmgAds.performance[e] = {}, i.performance) tmgAds.performance[e][t] = i.performance[t];
        "function" == typeof s && s()
    }, i.performance.requested = Math.round(tmgAdsTimer()), i.status = "requested", tmgAdsEvent(e + ":" + i.status), a.src = i.performance.url;
    var n = document.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(a, n)
}

function tmgAdsGetBrowserData() {
    tmgAdsLog("Called:");
    var e, t = {};
    for (var s in navigator)
        if (navigator.hasOwnProperty(s)) {
            var d = navigator[s];
            "object" != typeof d && (t[s] = d)
        } return document.all ? (tmgAdsLog("document.all exists"), t.biw = document.documentElement.offsetWidth, t.bih = document.documentElement.offsetHeight) : (tmgAdsLog("document.all does not exists"), t.biw = window.innerWidth, t.bih = window.innerHeight), t.isIE = function() {
        var e = window.navigator.userAgent,
            t = e.indexOf("MSIE ");
        if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
        if (e.indexOf("Trident/") > 0) {
            var s = e.indexOf("rv:");
            return parseInt(e.substring(s + 3, e.indexOf(".", s)), 10)
        }
        var d = e.indexOf("Edge/");
        return d > 0 && parseInt(e.substring(d + 5, e.indexOf(".", d)), 10)
    }(), t.chromeVer = !!(e = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)) && parseInt(e[2], 10), t.chromeVer ? t.isChrome = !0 : t.isChrome = !1, t
}

function tmgAdsFlashDetect() {
    tmgAdsLog("Called:");
    return FlashDetect = new function() {
        var e = this;
        e.installed = !1, e.raw = "", e.major = -1, e.minor = -1, e.revision = -1, e.revisionStr = "";
        var t = [{
                name: "ShockwaveFlash.ShockwaveFlash.7",
                version: function(e) {
                    return s(e)
                }
            }, {
                name: "ShockwaveFlash.ShockwaveFlash.6",
                version: function(e) {
                    var t = "6,0,21";
                    try {
                        e.AllowScriptAccess = "always", t = s(e)
                    } catch (e) {}
                    return t
                }
            }, {
                name: "ShockwaveFlash.ShockwaveFlash",
                version: function(e) {
                    return s(e)
                }
            }],
            s = function(e) {
                var t = -1;
                try {
                    t = e.GetVariable("$version")
                } catch (e) {}
                return t
            },
            d = function(e) {
                var t = -1;
                try {
                    t = new ActiveXObject(e)
                } catch (e) {
                    t = {
                        activeXError: !0
                    }
                }
                return t
            },
            a = function(e) {
                var t = e.split(",");
                return {
                    raw: e,
                    major: parseInt(t[0].split(" ")[1], 10),
                    minor: parseInt(t[1], 10),
                    revision: parseInt(t[2], 10),
                    revisionStr: t[2]
                }
            },
            n = function(t) {
                return parseInt(t.replace(/[a-zA-Z]/g, ""), 10) || e.revision
            };
        e.majorAtLeast = function(t) {
            return e.major >= t
        }, e.minorAtLeast = function(t) {
            return e.minor >= t
        }, e.revisionAtLeast = function(t) {
            return e.revision >= t
        }, e.versionAtLeast = function(t) {
            var s = [e.major, e.minor, e.revision],
                d = Math.min(s.length, arguments.length);
            for (i = 0; i < d; i++) {
                if (s[i] >= arguments[i]) {
                    if (i + 1 < d && s[i] == arguments[i]) continue;
                    return !0
                }
                return !1
            }
        }, e.FlashDetect = function() {
            if (navigator.plugins && navigator.plugins.length > 0) {
                var s = "application/x-shockwave-flash",
                    i = navigator.mimeTypes;
                if (i && i[s] && i[s].enabledPlugin && i[s].enabledPlugin.description) {
                    var r = i[s].enabledPlugin.description,
                        o = (p = (l = r).split(/ +/), u = p[2].split(/\./), c = p[3], {
                            raw: l,
                            major: parseInt(u[0], 10),
                            minor: parseInt(u[1], 10),
                            revisionStr: c,
                            revision: n(c)
                        });
                    e.raw = o.raw, e.major = o.major, e.minor = o.minor, e.revisionStr = o.revisionStr, e.revision = o.revision, e.installed = !0
                }
            } else if (-1 == navigator.appVersion.indexOf("Mac") && window.execScript) {
                r = -1;
                for (var m = 0; m < t.length && -1 == r; m++) {
                    var g = d(t[m].name);
                    if (!g.activeXError && (e.installed = !0, -1 != (r = t[m].version(g)))) {
                        o = a(r);
                        e.raw = o.raw, e.major = o.major, e.minor = o.minor, e.revision = o.revision, e.revisionStr = o.revisionStr
                    }
                }
            }
            var l, p, u, c
        }()
    }, FlashDetect.installed ? {
        versionMaj: FlashDetect.major,
        versionMin: FlashDetect.minor,
        versionRev: FlashDetect.revision,
        versionRaw: FlashDetect.raw
    } : {
        versionMaj: 0,
        versionMin: 0,
        versionRev: 0,
        versionRaw: "none"
    }
}

function tmgAdsGetCookie(e) {
    tmgAdsLog("Called: tmgAdsGetCookie(" + e + "): Called");
    var t, s, d, i, a = document.cookie.split(";");
    for (s = 0; s < a.length; s++) d = a[s].substr(0, a[s].indexOf("=")), i = a[s].substr(a[s].indexOf("=") + 1), (d = d.replace(/^\s+|\s+$/g, "")) == e && (t = decodeURIComponent(i));
    return t
}

function tmgAdsSetCookie(e, t, s, d) {
    tmgAdsLog('Called: tmgAdsSetCookie("' + e + '","' + t + '","' + s + '","' + d + '"): Called');
    var i, a, n, r, o = e + "=" + encodeURIComponent(t);
    s ? (a = (i = new Date).getTime(), a += 3600 * s * 1e3, i.setTime(a), n = ";expires=" + i.toGMTString()) : n = "", r = o + n + ";path=/" + (void 0 === d ? "" : ";domain=" + d), document.cookie = r
}

function tmgAdsTimer() {
    var e = !1;
    return e = void 0 !== window.RUM && void 0 !== window.RUM.now ? window.RUM.now() : void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(), parseFloat(e.toFixed(0))
}

function tmgAdsGetDoNotTrack() {
    var e;
    return tmgAdsLog("Called:"), "unspecified" != navigator.doNotTrack && 1 != navigator.doNotTrack && "yes" != navigator.doNotTrack || (tmgAdsLog("using the navigator.doNotTrack method"), e = navigator.doNotTrack), navigator.msDoNotTrack && (tmgAdsLog("using the navigator.msDoNotTrack method"), e = navigator.msDoNotTrack), void 0 === e && (e = "0"), "unspecified" == e && (e = "0"), "inactive" == e && (e = "0"), "no" == e && (e = "0"), "yes" == e && (e = "1"), e
}

function tmgAdsCsvToObj(e, t, s) {
    var d;
    if (tmgAdsLog('Called: data="' + e + '" delimiter="' + t + '" assignment=' + s), s = s || "=", void 0 !== e)
        for (var i in (d = {
                dfplegacy: "",
                raw: e,
                vars: {}
            }).data = e.split(t), d.data)
            if (d.data[i].length > 0 && "string" == typeof d.data[i]) {
                var a = d.data[i].split(s);
                d.vars[a[0]] = a[1], d.dfplegacy += "&" + a[0] + "=" + a[1], tmgAdsLog("extra custVars set in function call, creating them now -> " + a[0] + s + a[1])
            } return d
}

function tmgAdsBuildAd(e, t, s) {
    tmgAdsLog("#####################################################################################"), tmgAdsLog('### tmgAdsBuildAd("' + e + '","' + t + '","' + s + '")'), ++tmgAds.dfp.tile;
    var d = {
        adunit: tmgAds.dfp.adunit,
        altsizes: s,
        outofpage: !1,
        arguments: arguments,
        slot: e.split("_"),
        size: [],
        slotid: e,
        prebid: {
            hb_data: [],
            hb_adid: [],
            hb_size: [],
            hb_pb: [],
            hb_rid: [],
            hb_ttr: [],
            hb_pid: []
        },
        customvars: tmgAds.dfp.customvars,
        customvarstr: "",
        refreshable: !1,
        dynmpu: !1,
        block: !1,
        div: e,
        vidid: null,
        pos: tmgAds.dfp.tile,
        tile: tmgAds.dfp.tile,
        ord: Number(new Date),
        extra: tmgAdsCsvToObj(t, ";")
    };
    for (var i in "none" != tmgAds.config.deliveryModel.activityStatus ? d.adcount = 1 : d.adcount = 0, tmgAds.ads[d.pos] = {}, d.adloc = d.slot[1], d.adtype = d.slot[2], d.slot[3] && (d.adpos = d.slot[3], d.dynid = d.adpos), void 0 !== window.martech ? void 0 !== window.martech.activities ? d.customvars.martech = window.martech.activities : d.customvars.martech = ["none"] : d.customvars.martech = ["unset"], "nat" == d.adtype && (d.natid = d.div.substring(11), d.nattype = "unclassified", "nat_index_sparkbrain" == d.natid.substring(0, 20) && (d.nattype = d.customvars.nattype = "sparkbrain"), "nat_index_sidebar" == d.natid.substring(0, 17) && (d.nattype = d.customvars.nattype = "sidebar"), "nat_index_logo" == d.natid.substring(0, 14) && (d.nattype = d.customvars.nattype = "logo"), "nat_index_mob_portal_newsfeed" == d.natid.substring(0, 29) && (d.nattype = d.customvars.nattype = "newsfeeed"), "nat_index_firstlist_mob" == d.natid.substring(0, 23) && (d.nattype = d.customvars.nattype = "firstllist"), "nat_index_multilist_mob" == d.natid.substring(0, 23) && (d.nattype = d.customvars.nattype = "multilist"), "nat_index_sponsored_list_item" == d.natid.substring(0, 29) && (d.nattype = d.customvars.nattype = "sponsored"), "nat_story_sparkbrain" == d.natid.substring(0, 20) && (d.nattype = d.customvars.nattype = "sparkbrain"), "nat_story_outbrain" == d.natid.substring(0, 18) && (d.nattype = d.customvars.nattype = "outbrain"), "nat_story_sidebar" == d.natid.substring(0, 17) && (d.nattype = d.customvars.nattype = "sidebar"), "nat_story_logo" == d.natid.substring(0, 14) && (d.nattype = d.customvars.nattype = "logo"), d.customvars.nattype = d.nattype), (tmgAds.plugins.oopunits.indexOf(d.adtype) > -1 || "oop" == d.adpos) && (d.outofpage = !0), void 0 === tmgAds.metrics.tmggptAdFirstAdQueued && (tmgAdsLog("TMG-ADTECH: First Ad Requested"), tmgAds.metrics.tmggptAdFirstAdQueued = tmgAdsTimer(), tmgAds.metrics.metricTimeToQueueFirstAd = tmgAds.metrics.tmggptAdFirstAdQueued), tmgAds.metrics.tmggptAdLastAdQueued = tmgAdsTimer(), tmgAds.metrics.ads[d.adtype] = {
            queued: tmgAds.metrics.tmggptAdLastAdQueued,
            viewable: !1,
            archive: []
        }, !1 !== typeof tmgAds.plugins.adomik.active && (d.customvars.ad_group = tmgAds.plugins.adomik.getAdGroup(), d.customvars.ad_h = (new Date).getUTCHours()), d.customvars) d.customvars.hasOwnProperty(i) && (d.customvarstr += "&" + i + "=" + d.customvars[i], tmgAdsLog("KVPs: " + i + "=" + d.customvars[i]));
    if (d.altsizes.length > 0) {
        for (tmgAdsLog("Altsizes have been chosen - over-riding the defaults and setting them to: " + d.altsizes), d.oldsizes = d.altsizes.split(","), tmgAdsLog("Altsizes set: "), d.newsizes = [], i = 0; i < d.oldsizes.length; i++) "" !== d.oldsizes[i] && d.oldsizes[i].length >= 3 ? (tmgAdsLog("Altsizes: using this value " + d.oldsizes[i]), d.newsizes.push(d.oldsizes[i])) : tmgAdsLog('Altsizes: not using this value "' + d.oldsizes[i] + '"');
        for (i in d.sizes = d.newsizes, tmgAdsLog("Altsizes set: "), d.sizes) d.sizes.hasOwnProperty(i) && d.size.push([Number(d.sizes[i].split("x")[0]), Number(d.sizes[i].split("x")[1])])
    } else d.size = tmgAds.plugins.sizemapping[tmgAds.layout.viewport][d.adtype], tmgAdsLog("default sizes have been chosen - sizes are:" + d.size), d.sizemapping = googletag.cmd.push(function() {
        googletag.sizeMapping().addSize(tmgAds.plugins.sizemapping.x.size, tmgAds.plugins.sizemapping.x[d.adtype]).addSize(tmgAds.plugins.sizemapping.l.size, tmgAds.plugins.sizemapping.l[d.adtype]).addSize(tmgAds.plugins.sizemapping.m.size, tmgAds.plugins.sizemapping.m[d.adtype]).addSize(tmgAds.plugins.sizemapping.s.size, tmgAds.plugins.sizemapping.s[d.adtype]).addSize(tmgAds.plugins.sizemapping.xs.size, tmgAds.plugins.sizemapping.xs[d.adtype]).build()
    });
    if ("vid" == d.adtype || "ins" == d.adtype || "int" == d.adtype) return "vid" == d.adtype && (d.tmpsize = tmgAds.plugins.sizemapping[tmgAds.layout.viewport].vid, d.vidslot = d.slotid + "_" + d.pos, tmgAds.plugins.advast4 && (tmgAds.plugins.gpt.vastOutputVersion = "xml_vast4"), d.url = "https://securepubads.g.doubleclick.net/gampad/ads?env=vp&sz=" + d.tmpsize + "&cmsid=" + tmgAds.plugins.gpt.ooyalaCMSID + "&vid=" + d.vidid + "&gdfp_req=1&impl=s&unviewed_position_start=1&output=" + tmgAds.plugins.gpt.vastOutputVersion + "&iu=" + d.adunit + "&hl=en&cust_params=" + encodeURIComponent(d.customvarstr + "&vidslot=" + d.vidslot + "&at=" + d.adtype + "&pos=" + d.pos + "&adcount=" + d.adcount + d.extra.dfplegacy) + "&description_url=" + encodeURIComponent(tmgAds.page.url) + "&url=" + encodeURIComponent(tmgAds.page.url) + "&ciu_szs=&scp=&scor=" + d.pos + "&correlator=" + tmgAds.dfp.ord, tmgAds.plugins.headerBidders.ix.active && tmgAds.plugins.headerBidders.ix.video.active || tmgAds.plugins.adindexvidon ? (tmgAds.plugins.adindexvidon && console.log("VIDEO:: adindexvidon has been turned on via the url"), tmgAds.plugins.adindexvidon && console.log("VIDEO:: IndexExchange HeaderBidding turned ON"), tmgAds.plugins.adindexvidon && console.log("VIDEO:: initial ad-request - " + d.url), d.url = tmgAds.plugins.headerBidders.ix.video.url + encodeURIComponent(d.url), tmgAds.plugins.adindexvidon && console.log("VIDEO:: amended ad-request - " + d.url)) : tmgAds.plugins.adindexvidon && console.log("VIDEO::  IndexExchange HeaderBidding turned OFF"), tmgAdsLog("VIDEO:: AD-URL - " + d.url)), "ins" == d.adtype && (d.tmpsize = d.size[0][0] + "x" + d.size[0][1], d.url = "https://securepubads.g.doubleclick.net/gampad/adx?sz=" + d.tmpsize + "&iu=" + tmgAds.dfp.adunit + "&url=" + encodeURIComponent(tmgAds.page.url) + "&t=" + encodeURIComponent(d.customvarstr + "&at=" + d.thisad + "&pos=" + d.pos + "&acount=" + d.adcount) + "&m=application/javascript&tile=" + d.pos + "&c=" + tmgAds.dfp.ord, tmgAdsLog("InSkin Ad Request - URL=" + d.url)), "int" == d.adtype && (d.tmpsize = d.size[0][0] + "x" + d.size[0][1], d.url = "https://securepubads.g.doubleclick.net/gampad/adx?sz=" + d.tmpsize + "&iu=" + tmgAds.dfp.adunit + "&url=" + encodeURIComponent(tmgAds.page.url) + "&t=" + encodeURIComponent(d.customvarstr + "&at=" + d.thisad + "&pos=" + d.pos + "&acount=" + d.adcount) + "&m=application/javascript&tile=" + d.pos + "&c=" + tmgAds.dfp.ord, tmgAdsLog("Luxury Interstitial Ad Request - URL=" + d.url)), d.fetchUrl = function() {
        return tmgAds.plugins.adkill ? (tmgAdsLog('ALERT: .fetchURL() "adkill" has been selectedi'), "") : (tmgAdsLog(".fetchUrl() called for: " + d.slotid + " -> " + d.url), d.url)
    }, d.display = function() {
        d.fetchUrl()
    }, d;
    if ("m" != tmgAds.layout.viewport && "s" != tmgAds.layout.viewport && "xs" != tmgAds.layout.viewport || "story" != tmgAds.page.pagetype && "video" != tmgAds.page.pagetype && "live" != tmgAds.page.pagetype || "mpu" != d.adtype ? d.block = !1 : d.block = !0, tmgAds.plugins.adSlotRefresh.exemptAdSlots.indexOf(d.adtype) > -1 || tmgAds.config.deliveryModel.activityStatus == d.adtype || "none" == tmgAds.config.deliveryModel.activityStatus || tmgAds.config.deliveryModel.exempt.indexOf(d.adtype) > -1) {
        if ("dyn" == d.adtype && tmgAds.plugins.dynad.active && -1 == tmgAds.plugins.dynad.viewports.indexOf(tmgAds.layout.viewport)) return tmgAdsLog("ALERT: Dynamic MPU slot not rendered as has not met criteria: adpos=" + d.pos + " - adtype=" + d.adtype + " - viewport=" + tmgAds.layout.viewport + " - tmgAds.plugins.dynad.viewports.indexOf(tmgAds.layout.viewport)=" + tmgAds.plugins.dynad.viewports.indexOf(tmgAds.layout.viewport)), d.refresh = function() {
            return d
        }, d.display = function() {
            return d
        }, d.fetchUrl = function() {
            return d
        }, d;
        for ("ban" == tmgAds.config.deliveryModel.activityStatus && "ban" == d.adtype && (tmgAds.layout.viewportHeight < tmgAds.config.deliveryModel.minHeight && (d.size = [
                [970, 90],
                [970, 66],
                [728, 90],
                [468, 60],
                [1, 1], "fluid"
            ]), "m" == tmgAds.layout.viewport && (d.size = [
                [728, 90],
                [1, 1], "fluid"
            ]), "s" == tmgAds.layout.viewport && (d.size = [
                [300, 50],
                [320, 50],
                [1, 1], "fluid"
            ]), "xs" == tmgAds.layout.viewport && (d.size = [
                [300, 50],
                [320, 50],
                [1, 1], "fluid"
            ])), "mpu" == tmgAds.config.deliveryModel.activityStatus && "mpu" == d.adtype && tmgAds.layout.viewportHeight < tmgAds.config.deliveryModel.minHeight && (tmgAdsLog("tmgAds.layout.viewportHeight is less thean the minHeight for certain sticky ads/mpus on this page, restricting to only 300x250"), d.size = [
                [300, 250],
                [300, 215],
                [300, 189],
                [1, 1], "fluid"
            ]), d.rawsizes = [], i = 0; i < d.size.length; i++) d.rawsizes.push(d.size[i][0] + "x" + d.size[i][1]);
        return googletag.cmd.push(function() {
            var e;
            for (e in !0 === d.outofpage ? (tmgAdsLog("OutOfPage unit chosen for: " + d.slotid), d.adslot = googletag.defineOutOfPageSlot(d.adunit, d.div).addService(googletag.pubads())) : (tmgAdsLog("Standard Display unit chosen for: " + d.slotid + " sizes: " + d.size), d.adslot = googletag.defineSlot(d.adunit, d.size, d.div).addService(googletag.pubads())), "dyn" == d.adtype && d.adslot.setTargeting("dynid", d.dynid), "nat" == d.adtype && d.adslot.setTargeting("natid", d.natid), d.adslot.setTargeting("div", d.div), d.adslot.setTargeting("at", d.adtype), d.adslot.setTargeting("pos", d.pos), d.adslot.setTargeting("adcount", String(d.adcount)), d.adslot.setTargeting("tsor", tmgAdsTimer()), d.adslot.setTargeting("tsfa", tmgAds.metrics.metricTimeToQueueFirstAd), d.adslot.setTargeting("tsfg", Math.floor(tmgAds.metrics.metricTimeToQueueFirstAd / 1e3)), tmgAds.plugins.gpt.useppid && void 0 !== tmgAds.tmg.pid && googletag.pubads().setPublisherProvidedId(tmgAds.tmg.pid), d = tmgAdsUpdateHeaderBidderData(d), tmgAds.dfp.customvars) null !== typeof tmgAds.dfp.customvars[e] && d.adslot.setTargeting(e, tmgAds.dfp.customvars[e]);
            for (e in d.extras) null !== typeof d.extras[e] && d.adslot.setTargeting(e, d.extras[e]);
            for (e in d.extra.vars) tmgAdsLog('extra vars have been set, itterating through them now. Adding extra vars: ["' + e + '","' + d.extra.vars[e] + '"]'), d.adslot.setTargeting(e, d.extra.vars[e]);
            if (1 == tmgAds.plugins.gpt.collapseEmptyDivs && (tmgAdsLog("setCollapseEmptyDiv is active for: " + d.slotid), d.adslot.setCollapseEmptyDiv(!0)), tmgAds.plugins.permutive.active || tmgAds.plugins.adpermutiveon) try {
                var t = window.localStorage.getItem("_pdfps");
                d.adslot.setTargeting("permutive", t ? JSON.parse(t) : [])
            } catch (e) {
                console.log("PERMUTIVE: error -> " + e)
            }
            googletag.enableServices()
        }), tmgAds.ads[d.pos] = d, d.display = function() {
            return googletag.cmd.push(function() {
                "vid" !== d.adtype ? tmgAds.plugins.headerBidders.active && "vid" !== d.adtype && void 0 !== window.headertag ? tmgAds.plugins.headerBidders.ix.active && void 0 !== window.headertag && !0 === window.headertag.apiReady ? (tmgAdsLog("headertag.display exists:"), headertag.display(d.slotid)) : (tmgAdsLog("headertag.display does not yet exist... reverting to googletag.display()"), googletag.display(d.slotid), tmgAds.errors.push("INDEX-EXCHANGE: headertag.apiReady = false: " + e)) : (googletag.display(d.slotid), tmgAds.plugins.headerBidders.active && tmgAds.plugins.headerBidders.ix.active && void 0 === window.headertag && !tmgAds.plugins.adhboff && console.log("::::WARNING:::: headertag not defined!")) : tmgAdsLog('.display() method called on "vid" adtype... ignoring')
            }), d
        }, d.refresh = function() {
            console.log(".refresh() called for slotid :" + d.slotid), googletag.cmd.push(function() {
                tmgAds.plugins.headerBidders.active ? tmgAds.plugins.headerBidders.ix.active ? headertag.pubads().refresh([d.adslot]) : googletag.pubads().refresh([d.adslot]) : googletag.display(d.slotid)
            })
        }, tmgAds.adslots[d.slotid] = d, !0 === tmgAds.plugins.adkill ? (tmgAdsLog('ALERT: "adkill" has been selected, so bailing here and not sending you an ad...'), d.refresh = function() {
            return d
        }, d.display = function() {
            return d
        }, d.fetchUrl = function() {
            return d
        }, d) : d
    }
    return tmgAds.config.deliveryModel.activityStatus != d.adtype && tmgAdsLog("ALERT: not matched - tmgAds.config.deliveryModel.activityStatus=" + tmgAds.config.deliveryModel.activityStatus + "  --\x3e  tmp.adtype=" + d.adtype + " so we did not call this ad."), tmgAds.plugins.dynad.active && -1 == tmgAds.plugins.dynad.viewports.indexOf(tmgAds.layout.viewport) && tmgAdsLog("ALERT: Dynmic MPU not called - not matched viewport"), d.refresh = function() {
        return d
    }, d.display = function() {
        return d
    }, d.fetchUrl = function() {
        return d
    }, d
}

function tmgAdsBuildAdTag(e, t, s, d, i, a, n) {
    tmgAdsLog("-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="), tmgAdsLog('WARNING: DEPRECATED tmgAdsBuildAdTag("' + e + '","' + t + '","' + s + '","' + d + '","' + i + '")');
    var r = {
        tile: (++tmgAds.dfp.tile, tmgAds.dfp.tile),
        adslot: e.split(","),
        sizes: t.split(","),
        thisad: e.split(",")[0].substr(0, 3),
        sz: [],
        type: s,
        extra: {
            data: d,
            vars: {},
            dfp: ""
        },
        style: i,
        refresh: a,
        refreshtime: n
    };
    if ("mob" == r.thisad && (r.thisad = "ban"), r.id_div = "tmgads_legacy_" + r.thisad + "_" + r.tile, r.extra.data.length > 0)
        for (var o in r.extra.tmp = r.extra.data.split(";"), r.extra.tmp)
            if (r.extra.tmp[o].length > 0) {
                var m = r.extra.tmp[o].split("=");
                r.extra.vars[m[0]] = m[1], r.extra.dfp += "&" + m[0] + "=" + m[1], tmgAdsLog("extra custVars set in function call, creating them now -> " + m[0] + "=" + m[1])
            } return "ins" != r.thisad && "vid" != r.thisad && "int" != r.thisad ? r.output = '<div id="' + r.id_div + '"><script type="text/javascript">tmgAds.cmd.push(function(){var ' + r.id_div + ' = tmgAdsBuildAd("' + r.id_div + '","' + r.extra.data + '","' + t + '","0").display();});<\/script></div>\n' : r.output = googletag.cmd.push(tmgAdsBuildAd(r.id_div, r.extra.data, t, 0).fetchUrl()), --tmgAds.dfp.tile, r.output
}

function tmgAdsUpdateHeaderBidderData(e) {
    if ((tmgAds.plugins.headerBidders.amazon.active || tmgAds.plugins.amazonon) && !tmgAds.plugins.amazonoff)
        if (tmgAdsLog("AMAZON: Active"), tmgAds.plugins.headerBidders.amazon.exempt.indexOf(e.adtype) > -1) tmgAdsLog("AMAZON: This adtype is NOT supported (exempted): " + e.adtype);
        else {
            for (s = 0; s <= tmgAds.plugins.headerBidders.amazon.keynames.length - 1; s++) tmgAdsLog("Deleting tmgAds.plugins.headerBidders.amazon.keynames[" + tmgAds.plugins.headerBidders.amazon.keynames[s] + "] - was = " + e.adslot.getTargeting(tmgAds.plugins.headerBidders.amazon.keynames[s])), e.adslot.clearTargeting(tmgAds.plugins.headerBidders.amazon.keynames[s]);
            if (tmgAds.plugins.headerBidders.amazon.hasOwnProperty("bids"))
                if (tmgAds.plugins.headerBidders.amazon.bids.length > 0) {
                    for (s = 0; s < tmgAds.plugins.headerBidders.amazon.bids.length; s++)
                        if (tmgAds.plugins.headerBidders.amazon.status = "Bids returned", e.div == tmgAds.plugins.headerBidders.amazon.bids[s].slotID && e.rawsizes.indexOf(tmgAds.plugins.headerBidders.amazon.bids[s].size) > -1) {
                            if (tmgAds.plugins.headerBidders.amazon.deals) {
                                if (tmgAds.plugins.headerBidders.amazon.bids[s].helpers.targetingKeys)
                                    for (d = 0; d <= tmgAds.plugins.headerBidders.amazon.bids[s].helpers.targetingKeys.length - 1; d++) _id = tmgAds.plugins.headerBidders.amazon.bids[s].helpers.targetingKeys[d], e.adslot.setTargeting(_id, tmgAds.plugins.headerBidders.amazon.bids[s].targeting[_id])
                            } else e.adslot.setTargeting("amznbid", tmgAds.plugins.headerBidders.amazon.bids[s].amznbid), e.adslot.setTargeting("amzniid", tmgAds.plugins.headerBidders.amazon.bids[s].amzniid), e.adslot.setTargeting("amznp", tmgAds.plugins.headerBidders.amazon.bids[s].amznp), e.adslot.setTargeting("amznsz", tmgAds.plugins.headerBidders.amazon.bids[s].size);
                            e.adslot.setTargeting("amznresp", "bids")
                        }
                } else tmgAds.plugins.headerBidders.amazon.status = "No bids returned", e.adslot.setTargeting("amznresp", "nobids"), console.log("AMAZON: WARNING - Auction completed but Bids array is empty -> " + e.div);
            else tmgAds.plugins.adhboff || (tmgAds.plugins.headerBidders.amazon.status = "Failed to return bids in time", e.adslot.setTargeting("amznresp", "fail"), console.log("AMAZON: WARNING - Bids array does not exist, auction may not have returned in time -> " + e.div))
        } if ((tmgAds.plugins.headerBidders.prebid.active || tmgAds.plugins.adprebidon) && !tmgAds.plugins.adprebidoff && -1 == tmgAds.plugins.headerBidders.prebid.exempt.indexOf(e.adtype)) {
        var t = tmgAds.plugins.headerBidders.prebid.bidResponse;
        for (a = 0; a <= tmgAds.plugins.headerBidders.prebid.keynames.length - 1; a++) {
            e.prebid[tmgAds.plugins.headerBidders.prebid.keynames[a]];
            e.prebid[tmgAds.plugins.headerBidders.prebid.keynames[a]] = []
        }
        if (tmgAdsObjSz(t) >= 1) {
            for (var s in t)
                if (e.div == s)
                    for (var d in t[s].bids)
                        if ("1" == t[s].bids[d].getStatusCode()) {
                            if (void 0 !== t[s].bids[0].adserverTargeting.hb_size);
                            else
                                for (o in t[s].bids[0].adserverTargeting);
                            if (e.rawsizes.indexOf(t[s].bids[d].getSize()) >= 0) {
                                for (ozonekey in e.prebid.hasAds = !0, e.prebid.bidID = t[s].bids[d].bidID, e.prebid.bidData = t[s].bids[d].bidData, e.prebid.hb_data.push(e.prebid.bidData), e.prebid.hb_bids.push(e.prebid.bidID), void 0 !== t[s].bids[d].dealId && (e.prebid.hb_dealId = e.prebid.hb_dealId || [], e.prebid.hb_dealId.push(t[s].bids[d].dealId)), e.prebid.ozoneTargeting = e.prebid.ozoneTargeting || {}, t[s].bids[d].adserverTargeting) - 1 == ozonekey.indexOf("hb_") && (e.prebid[ozonekey] = t[s].bids[d].adserverTargeting[ozonekey], e.adslot.setTargeting(ozonekey, t[s].bids[d].adserverTargeting[ozonekey]));
                                tmgAds.plugins.headerBidders.prebid.commonId.active && (console.log("PREBID: tmgAds.plugins.headerBidders.prebid.commonId.active ACTIVE"), t[s].bids[d].id)
                            }
                        } else e.prebid.hb_pid.push(t[s].bids[d].placementId + "_nobids")
        } else tmgAds.plugins.adhboff || console.log("PREBID: HeaderBidding turned off throughb url-param - no bids. ", t);
        for (s = 0; s <= tmgAds.plugins.headerBidders.prebid.keynames.length - 1; s++) e.adslot.setTargeting(tmgAds.plugins.headerBidders.prebid.keynames[s], e.prebid[tmgAds.plugins.headerBidders.prebid.keynames[s]]);
        e.adslot.setTargeting("hb_auction", tmgAds.plugins.headerBidders.auctionID)
    }
    return e
}

function tmgAdsRefreshAd(e) {
    e.slot = tmgAdsUpdateHeaderBidderData(e.slot);
    var t = {};
    tmgAdsLog("Called: Refreshing ad[" + e.adID + "]: " + e.slot.adtype), tmgAds.ads[e.adID].hasOwnProperty("adslot") ? (tmgAdsLog("Refreshing ad: googletag.pubads().refresh([" + e.slot + "]);"), googletag.cmd.push(function() {
        for (var s in tmgAdsLog("Updating setTargeting values:"), e.slot.adslot.setTargeting("adcount", [tmgAds.refreshTimers[e.slot.adtype].adcount]), tmgAdsLog("Updating setTargeting values-> adcount=" + tmgAds.refreshTimers[e.slot.adtype].adcount), tmgAds.dfp.customvars) null !== typeof tmgAds.dfp.customvars[s] && (e.slot.adslot.setTargeting(s, tmgAds.dfp.customvars[s]), tmgAdsLog("Updating setTargeting values -> " + s + "=" + tmgAds.dfp.customvars[s]));
        for (s in tmgAds.metrics.ads[e.slot.adtype]) "object" != typeof tmgAds.metrics.ads[e.slot.adtype][s] && (t[s] = tmgAds.metrics.ads[e.slot.adtype][s], delete tmgAds.metrics.ads[e.slot.adtype][s]);
        tmgAds.metrics.ads[e.slot.adtype].archive.push(t), tmgAds.metrics.ads[e.slot.adtype].queued = tmgAdsTimer(), tmgAds.plugins.headerBidders.active ? (tmgAdsLog("tmgAds.plugins.headerBidders.active is ON"), tmgAds.plugins.headerBidders.ix.active ? headertag.pubads().refresh([e.slot.adslot]) : googletag.pubads().refresh([e.slot.adslot])) : (tmgAdsLog("tmgAds.plugins.headerBidders.active is OFF"), googletag.pubads().refresh([e.slot.adslot]))
    })) : tmgAdsLog("adslot does not exist: googletag.pubads().refresh([" + e.slot.adslot + "]);")
}

function tmgAdsCountdown(e) {
    tmgAds.refreshTimers[e.adtype].currentCount > 0 ? !0 === tmgAds.config.viewportstatus ? (tmgAdsLog("Countdown not finished, reducing countdown by 1s :: adtype:" + e.adtype + "  viewportstatus:" + tmgAds.config.viewportstatus + "  countdownID:" + tmgAds.refreshTimers[e.adtype].countdownID + "  timeOutstanding:" + tmgAds.refreshTimers[e.adtype].currentCount + "  adcount:" + tmgAds.refreshTimers[e.adtype].adcount), 2 == tmgAds.refreshTimers[e.adtype].currentCount && (0 === tmgAds.config.deliveryModel.refreshCycle || tmgAds.config.deliveryModel.refreshCycle > tmgAds.refreshTimers[e.adtype].adcount) && tmgAdsEvent("headerbid:reload"), --tmgAds.refreshTimers[e.adtype].currentCount) : tmgAdsLog("tmgAds.config.viewportstatus=" + tmgAds.config.viewportstatus + " - window is not active, so countdown remains at " + tmgAds.refreshTimers[e.adtype].currentCount + "s") : tmgAdsLog("Countdown finished, - ad is ready to refresh - waiting for the user to interact with the page before we refresh ads.")
}

function tmgAdsScheduleRefreshableAds(e) {
    function t(t) {
        0 === tmgAds.refreshTimers[e.adtype].currentCount && !1 === tmgAds.refreshTimers[e.adtype].refreshStatus ? (tmgAds.refreshTimers[e.adtype].refreshStatus = !0, tmgAdsLog("REFRESH: Refreshing: " + e.div), (0 === tmgAds.config.deliveryModel.refreshCycle || tmgAds.config.deliveryModel.refreshCycle > tmgAds.refreshTimers[e.adtype].adcount) && (document.getElementById(e.div).style.opacity = "0"), setTimeout(function() {
            tmgAdsLog("User has interacted with page and therefore is now active - event.type=" + t.type + "  -  count is 0... lets refrsh some ads:"), tmgAdsLog("Firstly, lets remove the existing countdownID: " + tmgAds.refreshTimers[e.adtype].countdownID), window.clearInterval(tmgAds.refreshTimers[e.adtype].countdownID), 0 === tmgAds.config.deliveryModel.refreshCycle || tmgAds.config.deliveryModel.refreshCycle > tmgAds.refreshTimers[e.adtype].adcount ? (tmgAdsLog("SUCCESS: We can refresh this ad as there is either no limit on number of refreshed ads or we have delivered less than the current limit"), tmgAdsLog("tmgAds.config.deliveryModel.refreshCycle = " + tmgAds.config.deliveryModel.refreshCycle), ++tmgAds.refreshTimers[e.adtype].adcount, tmgAdsLog("Incrementing tmgAds.refreshTimers[" + e.adtype + "].adcount to: " + tmgAds.refreshTimers[e.adtype].adcount), tmgAdsLog("Creating a new countdownID"), tmgAds.refreshTimers[e.adtype].countdownID = setInterval(function() {
                tmgAdsCountdown(e)
            }, 1e3), tmgAdsLog("CSS transitions fadeout - Countdown has reached 1s to go... we need to start transitioning the look/feel of this unit by fading out the ad..."), tmgAdsLog("Resetting the countdown"), tmgAds.refreshTimers[e.adtype].currentCount = tmgAds.config.deliveryModel.refreshRate / 1e3, tmgAdsLog("Requesting Ad refresh - adtype:" + e.adtype + " countdownID:" + tmgAds.refreshTimers[e.adtype].countdownID + " ad.adID=" + e.adID), tmgAds.refreshTimers[e.adtype].refreshStatus = !1, "click" != t.type ? (tmgAdsLog("Event is NOT a click event, so we can happily refresh this ad now."), tmgAdsRefreshAd(tmgAds.refreshTimers[e.adtype])) : tmgAdsLog("Event is a CLICK event, we do not refresh based on these as they can overinflate delivery attempts.")) : (tmgAdsLog("ALERT: tmgAds.config.deliveryModel.refreshCycle has been met."), tmgAdsLog("ALERT: tmgAds.config.deliveryModel.refreshCycle = " + tmgAds.config.deliveryModel.refreshCycle), tmgAdsLog("ALERT: tmgAds.refreshTimers[" + e.adtype + "].adcount = " + tmgAds.refreshTimers[e.adtype].adcount), "ban" != e.adtype || "index" != tmgAds.page.pagetype && "topic" != tmgAds.page.pagetype ? tmgAdsEvent("tmggpt-collapseStickyad") : tmgAdsEvent("tmggpt-revertStickyBanner"))
        }, 1e3)) : 0 == tmgAds.refreshTimers[e.adtype].currentCount ? tmgAdsLog("User has interacted with page: event.type=" + t.type + " : tmgAds.refreshTimers[ad.adtype].currentCount=" + tmgAds.refreshTimers[e.adtype].currentCount + "  -  BUT sticky-ad refresh has now been disabled due to hitting refreshlimits") : tmgAdsLog("User has interacted with page: event.type=" + t.type + " : tmgAds.refreshTimers[ad.adtype].currentCount=" + tmgAds.refreshTimers[e.adtype].currentCount + "s")
    }
    tmgAds.refreshTimers[e.adtype] = {
        adID: e.adID,
        slot: tmgAds.ads[e.adID],
        duration: tmgAds.config.deliveryModel.refreshRate / 1e3,
        currentCount: tmgAds.config.deliveryModel.refreshRate / 1e3,
        refreshStatus: !1,
        adcount: 1,
        countdownID: setInterval(function() {
            tmgAdsCountdown(e)
        }, 1e3)
    }, document.addEventListener("focus", function(e) {
        t(e)
    }), document.addEventListener("orientationchange", function(e) {
        t(e)
    }), document.addEventListener("keydown", function(e) {
        t(e)
    }), document.addEventListener("scroll", function(e) {
        t(e)
    }), document.addEventListener("resize", function(e) {
        t(e)
    }), document.addEventListener("mousemove", function(e) {
        t(e)
    }), document.addEventListener("mousewheel", function(e) {
        t(e)
    }, {
        passive: !0
    }), document.addEventListener("DOMMouseScroll", function(e) {
        t(e)
    }, {
        passive: !0
    })
}

function tmgAdsSetAdSlotToRefresh(e) {
    if (tmgAds.counters = tmgAds.counters || {}, tmgAds.counters.hasOwnProperty(e) || (tmgAds.counters[e] = 0), Object.keys(tmgAds.ads).length > 0 && tmgAds.plugins.adSlotRefresh.active && tmgAds.plugins.adSlotRefresh.retryCount <= tmgAds.plugins.adSlotRefresh.retryLimit) {
        tmgAdsLog("SUCCESS: Ads seem to have been defined AND retryCount <= retryLimit: tmgAds.plugins.stadSlotRefresh.retryCount=" + tmgAds.plugins.adSlotRefresh.retryCount + "   tmgAds.plugins.adSlotRefresh.retryLimit=" + tmgAds.plugins.adSlotRefresh.retryLimit);
        var t = "none";
        for (var s in tmgAds.ads)
            if (tmgAds.ads.hasOwnProperty(s)) {
                if (tmgAds.ads[s].adtype == e) {
                    tmgAdsLog("SUCCESS: tmgads.ads[" + s + "].adtype = " + e), tmgAds.ads[s].adID = t = s;
                    break
                }
                tmgAdsLog("FAILURE: tmgads.ads[" + s + "].adtype != " + e)
            } else tmgAdsLog("FAILURE: tmgads.hasOwnProperty(" + s + ") - no hasOwnProperty exixts");
        "none" == t ? (tmgAdsLog("Ad not found [" + e + "] perhaps its not beeing created yet. Number of times this script has been run for this ad -> " + tmgAds.counters[e]), tmgAds.counters[e] < tmgAds.plugins.counters ? (++tmgAds.counters[e], console.log("REFRESH: Refresh count limit not hit lets call this script again"), window.setTimeout(function() {
            tmgAdsSetAdSlotToRefresh(e)
        }, tmgAds.plugins.adSlotRefresh.retryPeriod)) : console.log("REFRESH: Refresh count limit hit, stop trying to fill this slot and stop running this script.")) : tmgAds.ads[t].adtype == e && ("object" == typeof tmgAds.ads[t].adslot ? (tmgAdsLog("SUCCESS: calling tmgAdsScheduleRefreshableAds(" + e + ")"), tmgAdsScheduleRefreshableAds(tmgAds.ads[t])) : (tmgAdsLog("ALERT: delaying implementing refreshables until the adslots are available - recalling tmgAdsSetAdSlotToRefresh(" + e + ") in " + tmgAds.plugins.adSlotRefresh.retryPeriod + "ms - retryCount:" + tmgAds.plugins.adSlotRefresh.retryCount + " of " + tmgAds.plugins.adSlotRefresh.retryLimit), tmgAds.plugins.adSlotRefresh.retryCount <= tmgAds.plugins.adSlotRefresh.retryLimit ? (++tmgAds.plugins.adSlotRefresh.retryCount, window.setTimeout(function() {
            tmgAdsSetAdSlotToRefresh(e)
        }, tmgAds.plugins.adSlotRefresh.retryPeriod)) : tmgAdsLog("ALERT: tmgAdsSetAdSlotToRefresh request limit hit")))
    } else ++tmgAds.plugins.adSlotRefresh.retryCount, tmgAdsLog("ALERT: the tmgAds.ads object does not exist or is empty, ads have not been created yet - recalling tmgAdsSetAdSlotToRefresh(" + e + ") in " + tmgAds.plugins.adSlotRefresh.retryPeriod + "ms - incrementing count to: " + tmgAds.plugins.adSlotRefresh.retryCount), tmgAds.plugins.adSlotRefresh.retryCount <= tmgAds.plugins.adSlotRefresh.retryLimit && window.setTimeout(function() {
        tmgAdsSetAdSlotToRefresh(e)
    }, tmgAds.plugins.adSlotRefresh.retryPeriod)
}

function tmgAdsOnPageLoad() {
    for (tmgAdsEvent("tmggpt:pageload"), tmgAdsLog("##################################################################################################################"), tmgAdsLog("P A G E   L  O A D E D "), tmgAdsLog("##################################################################################################################"), window.addEventListener("focus", function() {
            tmgAds.config.viewportstatus = !0, tmgAdsLog("AutoRefresh Event: window.onfocus - tmgAds.config.viewportstatus=" + tmgAds.config.viewportstatus)
        }), window.addEventListener("blur", function() {
            tmgAds.config.viewportstatus = !1, tmgAdsLog("AutoRefresh Event: window.onblur - tmgAds.config.viewportstatus=" + tmgAds.config.viewportstatus)
        }), tmgAdsLog("Executing tmgAds.cmd queue:"), tmgAdsEvent("tmggpt:commandqueue"); tmgAds.cmd.length > 0;) tmgAdsLog("Executing tmgAds.cmd queue: " + tmgAds.cmd.slice(0, 1)), tmgAds.cmd.shift()();
    return !0
}

function tmgAdsEvent(e, t) {
    var s = new CustomEvent("tmgAds:" + e);
    document.dispatchEvent(s)
}

function tmgAdsInitDeliveryModel() {
    try {
        if (tmgAdsLog("Called tmgAdsInitDeliveryModel"), tmgAds.config.deliveryModel = tmgAds.plugins.models.default, tmgAds.config.deliveryModel.matched = !1, tmgAds.plugins.adstickyon && (tmgAds.sticky = !0), tmgAds.plugins.adstickyoff && (tmgAds.sticky = !1), tmgAds.plugins.mytelegraph.isActive && !tmgAds.plugins.admytoff && -1 == tmgAds.plugins.mytelegraph.exempt.indexOf(tmgAds.page.businessseg) && ("xs" == tmgAds.layout.viewport || "s" == tmgAds.layout.viewport ? (tmgAds.tmg.isRegistered || !document.getElementById("advert_tmg_ban") || "story" != tmgAds.page.pagetype && "live" != tmgAds.page.pagetype && "video" != tmgAds.page.pagetype ? document.getElementById("advert_tmg_ban") && (document.getElementById("advert_tmg_ban").outerHTML = "\x3c!--// advert_tmg_ban has been removed due to the MyTelegraph rules on Mobile that requires no banner slots to show  - user is registered//--\x3e") : document.getElementById("advert_tmg_ban").outerHTML += "\x3c!--// advert_tmg_ban has been retained //--\x3e", tmgAds.tmg.isRegistered ? "story" != tmgAds.page.pagetype && "live" != tmgAds.page.pagetype && "video" != tmgAds.page.pagetype && "index" != tmgAds.page.pagetype && "topic" != tmgAds.page.pagetype || (tmgAds.sticky = !1, tmgAds.plugins.mytelegraph.isApplied = !0, tmgAds.plugins.mytelegraph.isPlatform = "mobile") : "index" != tmgAds.page.pagetype && "topic" != tmgAds.page.pagetype || (tmgAds.sticky = !1)) : (tmgAds.plugins.mytelegraph.isApplied = !0, tmgAds.plugins.mytelegraph.isPlatform = "desktop")), tmgAds.sticky) {
            for (var e in tmgAdsLog("tmgAdsInitDeliveryModel: tmgAds.sticky is TRUE"), tmgAds.plugins.models)
                if (tmgAds.plugins.models.hasOwnProperty(e) && tmgAds.page.pagetype == e)
                    for (var t in tmgAdsLog("tmgAdsInitDeliveryModel: matched pagetype -> " + e), tmgAds.plugins.models[e]) tmgAds.plugins.models[e][t].hasOwnProperty("viewport") && tmgAds.plugins.models[e][t].viewport == tmgAds.layout.viewport && (tmgAds.config.deliveryModel = tmgAds.plugins.models[e][t], tmgAds.config.deliveryModel.matched = !0, tmgAdsLog("tmgAdsInitDeliveryModel: matched viewport -> " + tmgAds.plugins.models[e][t].viewport), "none" != tmgAds.config.deliveryModel.model ? tmgAds.plugins.adSlotRefresh.pagetypes.indexOf(tmgAds.page.pagetype) > -1 ? "ban" == tmgAds.config.deliveryModel.model && tmgAds.browser.isIE && !tmgAds.plugins.adiesticky ? tmgAds.config.deliveryModel.activityStatus = "none" : "ban" == tmgAds.config.deliveryModel.model && tmgAds.browser.isChrome && tmgAds.browser.chromeVer <= 55 ? tmgAds.config.deliveryModel.activityStatus = "none" : (tmgAdsLog("tmgAdsInitDeliveryModel: page is sutiable for sticky ad model, setting vars now."), tmgAds.config.deliveryModel.ruleName = tmgAds.page.pagetype + "-" + tmgAds.config.deliveryModel.model + "-" + tmgAds.config.deliveryModel.minHeight + "-" + tmgAds.config.deliveryModel.refreshRate + "-" + tmgAds.config.deliveryModel.refreshCycle, tmgAds.config.deliveryModel.sticky = !0, tmgAds.config.deliveryModel.activityStatus = tmgAds.config.deliveryModel.model, tmgAdsSetAdSlotToRefresh(tmgAds.config.deliveryModel.activityStatus)) : (tmgAdsLog('ALERT: tmgAdsInitDeliveryModel: page is exempted from sticky ads in the tmgAds.config.models. tmgAds.plugins.adSlotRefresh.pagetypes.indexOf("' + tmgAds.page.pagetype + '");'), tmgAds.config.deliveryModel.activityStatus = "none") : (tmgAdsLog("ALERT: tmgAdsInitDeliveryModel: tmgAds.page.pagetype is not suitable for sticky ads -> setting tmgAds.config.deliveryModel.activityStatus = none"), tmgAds.config.deliveryModel.activityStatus = "none"))
        } else tmgAds.config.deliveryModel = {
            activityStatus: "none",
            exempt: []
        }
    } catch (e) {
        tmgAdsLog("ERROR: tmgAdsInitDeliveryModel failed -> error=" + e.message, tmgAds)
    }
    tmgAdsLog("tmgAdsInitDeliveryModel = ", tmgAds.config.deliveryModel)
}

function tmgAdsInitHeaderBidders() {
    if (tmgAdsEvent("headerbid:start"), tmgAds.plugins.headerBidders.auctionID = tmgAdsUUID(), !tmgAds.plugins.headerBidders.active && !tmgAds.plugins.adhbon || tmgAds.plugins.adhboff) tmgAds.plugins.adhboff;
    else
        for (wrapper in tmgAds.metrics.headerbidding = tmgAds.metrics.headerbidding || {}, tmgAds.metrics.headerbidding.initiated = tmgAdsTimer(), tmgAds.plugins.headerBidders.wrappers) bidder = tmgAds.plugins.headerBidders.wrappers[wrapper], adon = "ad" + bidder + "on", adoff = "ad" + bidder + "off", adtest = "ad" + bidder + "test", !tmgAds.plugins.headerBidders[bidder].active && !tmgAds.plugins[adon] || tmgAds.plugins[adoff] ? tmgAds.plugins[adoff] ? console.log("HEADERBIDDING [" + bidder + "]: bidder = INACTIVE - turned off url-param") : console.log("HEADERBIDDING [" + bidder + "]: bidder = INACTIVE - due to config") : (tmgAds.plugins[adon] && console.log("BIDDER [" + bidder + "]: has been manually turned on"), "config" == tmgAds.plugins.headerBidders[bidder].bidstatus && (-1 == window.location.search.indexOf(adtest) ? tmgAds.plugins.headerBidders[bidder].jsurl = tmgAds.plugins.headerBidders[bidder].jsprod : tmgAds.plugins.headerBidders[bidder].jsurl = tmgAds.plugins.headerBidders[bidder].jstest, tmgAds.plugins.headerBidders[bidder].bidstatus, tmgAds.plugins.headerBidders[bidder].preload(), tmgAdsLoadJS(tmgAds.plugins.headerBidders[bidder].name, tmgAds.plugins.headerBidders[bidder].jsurl, tmgAds.plugins.headerBidders[bidder].callback)));
    tmgAdsEvent("headerbid:end")
}

function tmgAdsThrottle(e, t) {
    var s, d;
    return t = t || tmgAds.plugins.lazyLoad.delayCall,
        function() {
            var i = this,
                a = +new Date,
                n = arguments;
            s && a < s + t ? (clearTimeout(d), d = setTimeout(function() {
                s = a, e.apply(i, n)
            }, t)) : (s = a, e.apply(i, n))
        }
}

function tmgAdsElementIsInView(e, t) {
    var s = [{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, t].reduce(function(e, t) {
            return Object.keys(t).forEach(function(s) {
                e[s] = t[s]
            }), e
        }, {}),
        d = e.getBoundingClientRect(),
        i = window.innerHeight,
        a = window.innerWidth,
        n = d.top + s.top,
        r = d.bottom - s.bottom,
        o = d.left - s.left,
        m = d.right + s.right;
    return n < i && r > 0 && (o < a && m > 0)
}

function tmgAdsElementInView(e, t, s) {
    var d = e.id.split("_"),
        i = "unknown";
    i = "dyn" == d[2] ? d[2] + d[3] : d[2];
    var a = !1;
    tmgAdsElementIsInView(e, s) && !a && (a = !0, "dyn" == d[2] && d[3] > 0 && (googletag.pubads().updateCorrelator(), console.log("tmgAdsElementInView: UPDATE CORRELATOR: " + i)), googletag.cmd.push(tmgAdsBuildAd(e.id, "lazy=true", "").display()), tmgAdsPerf("mark", ["adverts_create_" + i])), t.addEventListener("scroll", tmgAdsThrottle(function() {
        tmgAdsElementIsInView(e, s) && !a && (a = !0, "dyn" == d[2] && d[3] > 0 && (googletag.pubads().updateCorrelator(), console.log("tmgAdsElementInView: UPDATE CORRELATOR: " + i)), googletag.cmd.push(tmgAdsBuildAd(e.id, "", "").display()), tmgAdsPerf("mark", ["adverts_create_" + i]))
    }, tmgAds.plugins.lazyLoad.delayCall))
}

function createAdvert(e, t, s, d) {
    var i;
    return (i = document.createElement("div")).classList.add("js-advert", "advert"), i.id = void 0 !== t ? "advert_tmg_" + e + "_" + t : "advert_tmg_" + e, i.id = void 0 !== s && s ? i.id + "_" + s : i.id, i.setAttribute("data-adtype", e), i
}

function tmgAdsGetTitleForInjected(e) {
    var t;
    return traverse() ? t = e : tmgAdsGetTitleForInjected(e.parentNode), t.parentNode.querySelector(".component-heading").childNodes[0].textContent.trim().replace(/ /g, "_").toLowerCase()
}

function traverse(e) {
    return e.parentNode.classList.contains("list-of-entities")
}

function tmgAdsNativeInject(e, t, s, d, i, a) {
    void 0 !== i ? i.multiList && void 0 !== i.multiList ? document.querySelectorAll(e).forEach(function(e, t) {
        tmgAdsInjectList(e, i, d, t)
    }) : tmgAdsInjectList(document.querySelector(e), i, d) : (void 0 === s && (s = 0), tmgAdsInjectAdvert(document.querySelectorAll(e)[s], t, d, a))
}

function tmgAdsInjectList(e, t, s, d) {
    var i, a, n, r = e.children.length,
        o = [];
    d = d;
    tmgSetAdvertPositions(t.repeat, o, t, r), o.forEach(function(t, o) {
        n = createAdvert(s, o, d), (i = document.createElement("li")).classList.add("list-of-entities__item"), i.appendChild(n), a = t <= r ? t : r, tmgAdsCreateItem(e.children[a - 1], i, a >= r ? "afterend" : "beforebegin", n.id, "list")
    }, d)
}

function tmgSetAdvertPositions(e, t, s, d) {
    if (e)
        for (var i = Math.floor(d / s.position) > 0 ? Math.floor(d / s.position) : 1, a = 1; a <= i; a++) a > 1 ? t.push(s.position * a - (a - 1)) : t.push(s.position * a);
    else t.push(s.position)
}

function tmgAdsInjectAdvert(e, t, s, d) {
    var i = createAdvert(s, void 0, void 0, d),
        a = "before" === t ? "beforebegin" : "afterend";
    "before" === t && (a = "beforebegin"), "after" === t && (a = "afterend"), "replace" === t && (a = "replace"), tmgAdsCreateItem(e, i, a, i.id, "std")
}

function tmgAdsCreateItem(e, t, s, d, i) {
    requestAnimationFrame(function() {
        "beforebegin" == s || "afterend" == s ? e.insertAdjacentHTML(s, t.outerHTML) : "object" == typeof e ? (e.innerHTML = "", e.appendChild(t)) : console.warn("WARNING: native ad placement selector not found [" + d + "]")
    })
}

function tmgAdsCreateNativeSlots(e) {
    var t = {
        vp: tmgAds.layout.viewport,
        pt: tmgAds.page.pagetype,
        data: tmgAds.plugins.nativeads.config
    };
    ("live" !== t.pt && "video" !== t.pt || (t.pt = "story"), -1 === tmgAds.plugins.nativeads.config.exclude.indexOf(tmgAds.page.businessseg)) ? (tmgAdsLog("tmgAdsCreateNativeSlots: Channel/BusinessSeg supported - " + tmgAds.page.businessseg), t.data.pagetype[t.pt] ? t.data.pagetype[t.pt].adverts.forEach(function(e) {
        if (e.active)
            if (-1 === e.exclude.indexOf(tmgAds.page.businessseg) && e.include.indexOf(tmgAds.page.businessseg) >= 0 || 0 == e.exclude.length && 0 == e.include) {
                tmgAdsLog("tmgAdsCreateNativeSlots: " + e.id + " - MATCHED");
                var s = e.id,
                    d = e.selector,
                    i = e.position,
                    a = e.poscount,
                    n = e.list,
                    r = e.viewports,
                    o = e.style,
                    m = document.querySelector(d);
                r.forEach(function(e) {
                    e === t.vp && document.body.contains(m) && tmgAdsNativeInject(d, i, a, s, n, o)
                })
            } else tmgAdsLog("tmgAdsCreateNativeSlots: " + e.id + " - BLOCKED due to businessSegment over-ride [" + tmgAds.page.businessseg + "]");
        else tmgAdsLog("tmgAdsCreateNativeSlots: " + e.id + " - inactive")
    }) : tmgAdsLog("tmgAdsCreateNativeSlots: Page template not supported - " + tmgAds.page.pagetype)) : tmgAdsLog("tmgAdsCreateNativeSlots: Channel/BusinessSegment NOT supported - " + tmgAds.page.businessseg)
}

function tmgAdsCreate(e) {
    tmgAds.metrics.timings_tmgAdsCreate = tmgAdsTimer();
    var t = {
        bidders: ["ix", "prebid", "amazon"]
    };
    if (tmgAds.plugins.adhboff) console.log("HEADERBIDDING: turned off by url-param.");
    else {
        for (i in tmgAds.plugins.headerBidders.wrappers) {
            var s = t.bidders[i];
            if (t.adon = "ad" + s + "on", t.adoff = "ad" + s + "off", !tmgAds.plugins.headerBidders[s].active && !tmgAds.plugins[t.adon] || tmgAds.plugins[t.adoff]) console.log("HEADERBIDDING: " + s + " turned off by url-param.");
            else if ("received" == tmgAds.plugins.headerBidders[s].bidstatus || "timeout" == tmgAds.plugins.headerBidders[s].bidstatus);
            else {
                if (tmgAds.plugins.headerBidders[s].timeoutCount <= tmgAds.plugins.headerBidders[s].timeout) return void setTimeout(function() {
                    tmgAds.plugins.headerBidders[s].timeoutCount += tmgAds.plugins.headerBidders.checkFreq, tmgAdsCreate("tmgAds.plugins.headerBidders." + s + ".bidstatus not received [" + tmgAds.plugins.headerBidders[s].bidstatus + "] retrying -> " + tmgAds.plugins.headerBidders[s].timeoutCount)
                }, tmgAds.plugins.headerBidders.checkFreq);
                tmgAds.plugins.headerBidders[s].timeoutHit = !0
            }
        }
        tmgAds.plugins.adprebidoff && console.log("PREBID: Prebid.js turned off via url-param"), tmgAds.plugins.adamazonoff && console.log("AMAZON: Amazon A9 turned off via url-param"), tmgAds.plugins.adixoff && console.log("INDEXCH: IndexExchange turned off via url-param")
    }
    if (document.querySelector(".advert-banner") && document.querySelector(".container-fluid") && 0 == tmgAds.sticky) {
        var d = document.querySelector(".advert-banner"),
            a = document.querySelector(".container-fluid");
        a.parentNode.insertBefore(d, a.nextSibling), d.style.paddingBottom = "10px", d.style.borderBottom = 0
    }
    tmgAds.sticky && ("ban" == tmgAds.config.deliveryModel.activityStatus || "mpu" == tmgAds.config.deliveryModel.activityStatus ? ("ban" == tmgAds.config.deliveryModel.activityStatus && document.getElementsByClassName("js-advert-banner")[0].classList.add("is-sticky"), "mpu" == tmgAds.config.deliveryModel.activityStatus && (-1 == tmgAds.config.deliveryModel.exempt.indexOf("ban") ? document.getElementsByClassName("js-advert-banner")[0] && (document.getElementsByClassName("js-advert-banner")[0].style.display = "none") : console.log("ADTECH: Exempting ban slot from being collapsed as this has been added to the exempted as in tmgAds.config.deliveryModel.exempt"), "gallery" == tmgAds.page.pagetype ? document.getElementsByClassName("article__sidebar-inner")[0] ? document.getElementsByClassName("article__sidebar-inner")[0].classList.add("is-sticky") : document.getElementsByClassName("gallery__sidebar")[0].classList.add("is-sticky") : document.getElementsByClassName("js-sidebar")[0] && document.getElementsByClassName("js-sidebar")[0].classList.add("is-sticky"))) : console.log("NO MODEL TO SET ON THIS PAGE")), t.isLazyLoad = function(e, t) {
        return tmgAds.plugins.lazyLoad[tmgAds.layout.viewport].active ? (tmgAdsLog("LazyLoad-Check: PASS: viewport -> " + tmgAds.layout.viewport), null !== typeof tmgAds.dfp.customvars.geo && (tmgAds.plugins.lazyLoad[tmgAds.layout.viewport].geo.indexOf(tmgAds.dfp.customvars.geo) > -1 || 0 == tmgAds.plugins.lazyLoad[tmgAds.layout.viewport].geo.length) ? (tmgAdsLog("LazyLoad-Check: PASS: geo -> " + tmgAds.dfp.customvars.geo), tmgAds.plugins.lazyLoad[tmgAds.layout.viewport].channels.indexOf(tmgAds.dfp.site) > -1 || 0 == tmgAds.plugins.lazyLoad[tmgAds.layout.viewport].channels.length ? (tmgAdsLog("LazyLoad-Check: PASS: site -> " + tmgAds.dfp.site), tmgAds.plugins.lazyLoad[tmgAds.layout.viewport].lazy.indexOf(e) > -1 ? (tmgAdsLog("LazyLoad-Check: PASS: adtype -> " + e), !(tmgAds.plugins.lazyLoad[tmgAds.layout.viewport].exempt.indexOf(t) > -1)) : (tmgAdsLog("LazyLoad-Check: FAIL: adtype -> " + e), !1)) : (tmgAdsLog("LazyLoad-Check: FAIL: site -> " + tmgAds.dfp.site, tmgAds.plugins.lazyLoad[tmgAds.layout.viewport].channels.indexOf(tmgAds.dfp.site)), !1)) : (tmgAdsLog("LazyLoad-Check: FAIL: geo -> " + tmgAds.dfp.customvars.geo), !1)) : (tmgAdsLog("LazyLoad-Check: FAIL: viewport -> " + tmgAds.layout.viewport), !1)
    }, t.fetchAds = function() {
        for (var e = 0; e < t.adverts.length; ++e) t.adtype = t.adverts[e].id.split("_")[2], t.isLazyLoad(t.adtype, t.adverts[e].id) ? tmgAdsElementInView(t.adverts[e], window, {
            top: tmgAds.plugins.lazyLoad[tmgAds.layout.viewport].offset
        }) : googletag.cmd.push(tmgAdsBuildAd(t.adverts[e].id, "", "").display())
    }, t.adverts = document.querySelectorAll(".js-advert:not(.is-loaded)"), document.hasFocus() ? requestAnimationFrame(function() {
        t.fetchAds()
    }) : t.fetchAds()
}

function tmgAdsObjSz(e) {
    var t = 0;
    if ("object" == typeof e)
        if (Object.keys) t = Object.keys(e).length;
        else if (window._) t = _.keys(e).length;
    else if (window.$) t = $.map(e, function() {
        return 1
    }).length;
    else
        for (var s in e) e.hasOwnProperty(s) && t++;
    return t
}

function tmgAdsInit3rdParties() {
    tmgAds.plugins.adevidonoff ? console.log("EVIDON: Turned off by url-param.") : tmgAds.plugins.evidon.active || tmgAds.plugins.adevidonon ? (tmgAds.plugins.adevidonon && console.log("EVIDON: Turned on by url-param"), tmgAds.plugins.evidon.preload(), tmgAdsLoadJS("evidon-notice", tmgAds.plugins.evidon.urlNotice, tmgAds.plugins.evidon.callback)) : tmgAdsLog("EVIDON: Not active"), tmgAds.plugins.adbeemrayoff ? console.log("BEEMRAY: Turned off by url-param.") : tmgAds.plugins.beemray.active || tmgAds.plugins.adbeemrayon ? (tmgAds.plugins.adbeemrayon && console.log("BEEMRAY: Turned on by url-param"), tmgAds.plugins.beemray.preload(), tmgAds.plugins.adbeemraytest ? (console.log("BEEMRAY: loading staging version of the SDK"), tmgAdsLoadJS("beemray", tmgAds.plugins.beemray.testurl, tmgAds.plugins.beemray.callback)) : tmgAdsLoadJS("beemray", tmgAds.plugins.beemray.url, tmgAds.plugins.beemray.callback)) : tmgAdsLog("BEEMRAY: Not active"), tmgAds.plugins.adlotameoff ? console.log("LOTAME: Turned off by url-param.") : tmgAds.plugins.lotame.active || tmgAds.plugins.adlotameon ? (tmgAds.plugins.adlotameon && console.log("GRAPESHOT: Turned on by url-param"), tmgAds.plugins.lotame.preload(), tmgAdsLoadJS("lotame", tmgAds.plugins.lotame.url, tmgAds.plugins.lotame.callback, tmgAds.plugins.lotame.id)) : tmgAdsLog("LOTAME: Not active"), tmgAds.plugins.adpermutiveoff ? console.log("PERMUTIVE: Turned off by url-param.") : tmgAds.plugins.permutive.active || tmgAds.plugins.adpermutiveon ? (tmgAds.plugins.adpermutiveeon && console.log("GRAPESHOT: Turned on by url-param"), tmgAds.plugins.permutive.preload(), tmgAdsLoadJS("permutive", tmgAds.plugins.permutive.url, tmgAds.plugins.permutive.callback, tmgAds.plugins.permutive.id)) : tmgAdsLog("PERMUTIVE: Not active"), tmgAds.plugins.adgrapeshotoff ? console.log("GRAPESHOT: Turned off by url-param.") : tmgAds.plugins.grapeshot.active || tmgAds.plugins.adgrapeshoton ? (tmgAds.plugins.adgrapeshoton && console.log("GRAPESHOT: Turned on by url-param"), tmgAds.plugins.grapeshot.preload(), tmgAdsLoadJS("grapeshot", tmgAds.plugins.grapeshot.url, tmgAds.plugins.grapeshot.callback)) : tmgAdsLog("GRAPESHOT: Not active"), tmgAds.plugins.adscrolloff ? console.log("SCROLL: Turned off by url-param.") : tmgAds.plugins.scroll.active || tmgAds.plugins.adscrollon ? (tmgAds.plugins.adscrollon && console.log("SCROLL: Turned on by url-param"), tmgAds.plugins.scroll.preload(), tmgAdsLoadJS("scroll", tmgAds.plugins.scroll.url, tmgAds.plugins.scroll.callback)) : tmgAdsLog("SCROLL: Not active"), tmgAds.plugins.adgptoff ? console.log("GPT: DFP/GPT turned off by url-param") : (tmgAds.plugins.gpt.preload(), tmgAdsLoadJS("gptjs", tmgAds.plugins.gpt.url, tmgAds.plugins.gpt.callback))
}

function tmgAdsUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
        var t = 16 * Math.random() | 0;
        return ("x" == e ? t : 3 & t | 8).toString(16)
    })
}

function tmgAdsCustomCode() {
    if ("undefined" != typeof martech)
        if (void 0 !== martech.utils)
            if (void 0 !== martech.utils.activities) {
                if ((window.location.search.indexOf("2019_04_desktop_dyn") >= 0 || martech.utils.activities.indexOf("199390") >= 0) && (tmgAds.plugins.dynad.viewports.push("l"), tmgAds.plugins.dynad.viewports.push("x")), window.location.search.indexOf("2019_04_stickyban") >= 0 || martech.utils.activities.indexOf("199390") >= 0) {
                    console.log("ADTECH: 2019_04_stickyban - ACTIVE"), tmgAds.config.deliveryModel.exempt.push("ban"), document.getElementById("advert_tmg_ban").parentNode.classList.add("is-sticky"), document.getElementsByClassName("my-telegraph")[0].classList.add("is-sticky");
                    var e = -1 * (document.getElementById("advert_tmg_mpu").getBoundingClientRect().top - document.getElementById("advert_tmg_ban").getBoundingClientRect().bottom) + 50 + "px 0px 0px 0px",
                        t = document.getElementsByClassName("snippet-header")[0],
                        s = document.getElementById("advert_tmg_ban");
                    new IntersectionObserver(e => {
                        console.log(e[0]), console.log(e[0].intersectionRatio), e[0].intersectionRatio > 0 ? (document.getElementById("advert_tmg_ban").parentNode.classList.add("is-sticky"), "undefined" == typeof slotOrigHeight ? (console.log("ADTECH: 2019_04_stickyban - IntersectionObserver - ADDING banner slot - UNDEFINED"), s.style.height = "auto") : (s.style.marginBottom = "8px", s.style.marginHeight = "8px", s.style.height = slotOrigHeight, console.log("ADTECH: 2019_04_stickyban - IntersectionObserver - ADDING banner slot - DEFINED - " + slotOrigHeight))) : (setTimeout(function() {
                            document.getElementById("advert_tmg_ban").parentNode.classList.remove("is-sticky")
                        }, 1e3), "undefined" == typeof slotOrigHeight && (slotOrigHeight = s.style.height), s.style.height = "0px", s.style.marginBottom = "0px", s.style.marginHeight = "0px", console.log("ADTECH: 2019_04_stickyban - IntersectionObserver - REMOVING banner slot - " + slotOrigHeight))
                    }, {
                        root: null,
                        rootMargin: e,
                        threshold: [0]
                    }).observe(t), console.log("ADTECH: 2019_04_stickyban - Making the banner sticky on article pages (desktop)")
                }
            } else console.log("ADTECH: tmgAdsInjectDynamicAds() -> martech.utils.activities object not available... timestamp=" + tmgAdsTimer());
    else console.log("ADTECH: tmgAdsCustomCode() -> martech.utils object not available... timestamp=" + tmgAdsTimer());
    else console.log("ADTECH: tmgAdsCustomCode() -> martech object not available... timestamp=" + tmgAdsTimer())
}

function tmgAdsInjectDynamicAds() {
    if ("undefined" != typeof martech)
        if (void 0 !== martech.utils)
            if (void 0 !== martech.utils.activities) {
                function e(e) {
                    function t(e) {
                        console.log("ADTECH: addAdTitles().injectAdTitles()", e);
                        var t = {};
                        t.sp1 = document.createElement("div"), t.sp1.innerText = "Advertisement", t.sp1.style.backgroundColor = "#EEEEEE", t.sp1.classList.add("premium_ads_text"), t.sp1.classList.add("dynMpuAdTitle"), t.sp1.style.marginTop = "0", t.sp1.style.marginBottom = "0", t.sp1.style.fontFamily = '"Telesans Text Regular", Arial,sans-serif', t.sp1.style.fontSize = "11px", t.sp1.style.color = "#6f6f6f", t.sp1.style.flex = "1", t.sp1.style.padding = "0px", t.sp1.style.textAlign = "center", t.sp2 = e, t.parentDiv = t.sp2.parentNode, t.parentDiv.insertBefore(t.sp1, t.sp2)
                    }
                    for (nodes = document.getElementsByClassName("premium_ads_text"); nodes.length > 0;) console.log("ADTECH: addAdTitles() - removing old premium_ads_text ad-titles", nodes[0]), nodes[0].parentNode.removeChild(nodes[0]);
                    nodes = document.getElementsByClassName(e);
                    for (var s = 0; s < nodes.length; s++) t(nodes[s])
                }
                if (window.location.search.indexOf("2019_04_desktop_dyn") >= 0 || window.location.search.indexOf("2019_04_mob_dyn") >= 0 || martech.utils.activities.indexOf("199390") >= 0) {
                    function t(e, t) {
                        console.log("ADTECH: 2019_04_desktop_dyn - tmgAdsInjectDynamicAds().injectAd()", t, e);
                        var s = {};
                        s.sp1 = document.createElement("div"), s.sp1.style.backgroundColor = "#EEEEEE", s.sp1.id = "advert_tmg_dyn_" + t, s.sp1.setAttribute("data-adType", "dyn_" + t), s.sp1.classList.add("js-advert"), s.sp1.classList.add("advert"), s.sp1.classList.add("dynamicMpu"), s.sp2 = e, s.parentDiv = s.sp2.parentNode, s.parentDiv.insertBefore(s.sp1, s.sp2)
                    }
                    for (console.log("ADTECH: 2019_04_desktop_dyn - ACTIVE"), console.log("ADTECH: 2019_04_desktop_dyn - tmgAdsInjectDynamicAds() -> Story page"), (s = {
                            charCount: 0,
                            lastBlockWasTxt: !1,
                            dynCount: 0,
                            hasFirstAd: !1,
                            adFreq: {}
                        }).article = document.getElementsByTagName("article")[0], s.dyns = s.article.getElementsByClassName("dynamicMpu"); s.dyns.length > 0;) s.dyns[0].parentNode.removeChild(s.dyns[0]);
                    if (tmgAds.plugins.dynad.config.hasOwnProperty(tmgAds.page.pagetype)) {
                        for (console.log("ADTECH: 2019_04_desktop_dyn - Config for this is available"), s.adFreq = tmgAds.plugins.dynad.config[tmgAds.page.pagetype][tmgAds.layout.viewport], s.nodes = s.article.getElementsByClassName("articleBodyText"), i = 0; i < s.nodes.length; i++)
                            for (s.lastBlockWasTxt = !1, s.paras = s.nodes[i].getElementsByClassName("article-body-text")[0].getElementsByClassName("component-content")[0].getElementsByTagName("p"), n = 0; n < s.paras.length; n++) s.lastBlockWasTxt && (s.hasFirstAd ? s.charCount >= s.adFreq.otherAd && s.paras[n].innerText.length > s.adFreq.minParaChars ? (t(s.paras[n], s.dynCount), s.dynCount++, s.charCount = 0) : (s.paras[n].innerText.length, s.adFreq.minParaChars) : s.charCount >= s.adFreq.firstAd && s.paras[n].innerText.length > s.adFreq.minParaChars ? (t(s.paras[n], s.dynCount), s.dynCount++, s.hasFirstAd = !0, s.charCount = 0) : (s.paras[n].innerText.length, s.adFreq.minParaChars)), s.charCount += s.paras[n].innerText.length, s.lastBlockWasTxt = !0;
                        e("dynamicMpu"), "x" == tmgAds.layout.viewport || "l" == tmgAds.layout.viewport ? tmgAdsEvent("adtest_2019_04_desktop_dyn") : tmgAdsEvent("adtest_2019_04_mob_dyn")
                    } else console.log("ADTECH: 2019_04_desktop_dyn/2019_04_mob_dyn - Config for this NOT matched")
                }
                if (window.location.search.indexOf("2019_04_mob_index") >= 0 || martech.utils.activities.indexOf("199390") >= 0) {
                    if (console.log("ADTECH: 2019_04_mob_index - ACTIVE"), "index" != tmgAds.page.pagetype || "indexRenderer" != tmgAds.page.dataLayer.pageType || "xs" != tmgAds.layout.viewport && "s" != tmgAds.layout.viewport && "m" != tmgAds.layout.viewport) console.log("ADTECH: 2019_04_mob_index - tmgAdsInjectDynamicAds() - FAIL"), console.log("ADTECH: 2019_04_mob_index - tmgAdsInjectDynamicAds() - tmgAds.page.pagetype                = " + tmgAds.page.pagetype), console.log("ADTECH: 2019_04_mob_index - tmgAdsInjectDynamicAds() - tmgAds.page.dataLayer.pageType      = " + tmgAds.page.dataLayer.pageType), console.log("ADTECH: 2019_04_mob_index - tmgAdsInjectDynamicAds() - tmgAds.layout.viewport              = " + tmgAds.layout.viewport), console.log('ADTECH: 2019_04_mob_index - tmgAdsInjectDynamicAds() - location.search.indexOf("mobindex") = ' + window.location.search.indexOf("2019_04_mob_index"));
                    else {
                        function t(e, t) {
                            console.log("ADTECH: 2019_04_mob_index - tmgAdsInjectDynamicAds().injectAd()", e, t);
                            var s = {};
                            s.sp1 = document.createElement("div"), s.sp1.style.backgroundColor = "#EEEEEE", s.sp1.id = "advert_tmg_bin_" + t, s.sp1.setAttribute("data-adType", "bin_" + t), s.sp1.classList.add("js-advert"), s.sp1.classList.add("advert"), s.sp1.classList.add("dynamicBin"), s.sp1.style.paddingBottom = "10px", s.sp2 = e, s.parentDiv = s.sp2.parentNode, s.parentDiv.insertBefore(s.sp1, s.sp2)
                        }
                        var s;
                        for (console.log("ADTECH: 2019_04_mob_index - tmgAdsInjectDynamicAds() -> PASS"), (s = {
                                block: 1,
                                binCount: 0,
                                blockCount: 0,
                                firstAd: 1,
                                adFreq: 2,
                                hasFirstAd: !1
                            }).article = document.getElementsByTagName("main")[0], s.slots = s.article.getElementsByClassName("commercialUnit"); s.slots.length > 0;) console.log('ADTECH: 2019_04_mob_index - tmgAdsInjectDynamicAds() - Removing existing "bin" AdSlot: ', s.slots[0]), s.slots[0].parentNode.removeChild(s.slots[0]);
                        var d = document.getElementsByClassName("js-advert");
                        for (console.log("ADTECH:: ", d), i = 0; i < d.length; i++) d[i].id.indexOf("_lmpu_") > 0 && (d[i].parentNode.removeChild(d[i]), console.log("ADTECH:: LMPU " + d[i].id));
                        for (s.slots = document.getElementsByClassName("js-advert"), i = 0; i < s.slots; i++) console.log("ADTECH: 2019_04_mob_index - checking slot ", s.slots[i]), "lmpu" == s.slots[0].getAttribute("data-adtype") && (console.log('ADTECH: 2019_04_mob_index - Removing existing "LMPU" slot: ', s.slots[i]), s.slots[i].parentNode.removeChild(s.slots[i])), s.slots = document.getElementsByClassName("js-advert");
                        for (s.nodes = s.article.getElementsByClassName("articleList"), i = 0; i < s.nodes.length; i++) s.hasFirstAd ? s.block == s.adFreq ? (t(s.nodes[i], s.binCount), s.binCount++, s.block = 1) : s.block++ : s.blockCount == s.firstAd && (t(s.nodes[i], s.binCount), s.binCount++, s.hasFirstAd = !0), s.blockCount++
                    }
                    e("dynamicBin"), tmgAdsEvent("adtest_2019_04_mob_index")
                }
            } else console.log("ADTECH: tmgAdsInjectDynamicAds() -> martech.utils.activities object not available... timestamp=" + tmgAdsTimer());
    else console.log("ADTECH: tmgAdsInjectDynamicAds() -> martech.utils object not available... timestamp=" + tmgAdsTimer());
    else console.log("ADTECH: tmgAdsInjectDynamicAds() -> martech object not available... timestamp=" + tmgAdsTimer())
}
window.tmgAds = window.tmgAds || {}, window.tmgAds.dfp = window.tmgAds.dfp || {}, window.tmgAds.adobe = window.tmgAds.adobe || {}, window.tmgAds.target = window.tmgAds.target || {}, window.tmgAds.cmd = window.tmgAds.cmd || [], window.tmgAds.log = window.tmgAds.log || [], window.tmgAds.sticky = window.tmgAds.sticky || !1, window.tmgAds.metrics = window.tmgAds.metrics || {
        ads: {},
        readyState: {}
    }, window.tmgAds.about = {
        version: "6.00.00.0900",
        date: "2019-04-11",
        company: "Telegraph Media Group",
        author: "Sean Dillon - sean@telegraph.co.uk"
    }, window.tmgAds.mytelegraph = window.tmgAds.mytelegraph || null, window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [],
    function() {
        if ("function" == typeof window.CustomEvent) return !1;

        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var s = document.createEvent("CustomEvent");
            return s.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), s
        }
        e.prototype = window.Event.prototype, window.CustomEvent = e
    }(),
    function() {
        function e(e) {
            var t = "string" == typeof e.data,
                s = e.data;
            if ("object" != typeof s) try {
                s = JSON.parse(s)
            } catch (s) {
                return
            }
            if (s.__cmpCall) {
                var d = s.__cmpCall;
                window.__cmp(d.command, d.parameter, function(s, i) {
                    var a = {
                        __cmpReturn: {
                            returnValue: s,
                            success: i,
                            callId: d.callId
                        }
                    };
                    e.source.postMessage(t ? JSON.stringify(a) : a, "*")
                })
            }
        }! function e() {
            if (!window.frames.__cmpLocator)
                if (document.body) {
                    var t = document.body,
                        s = document.createElement("iframe");
                    s.style.cssText = "display:none", s.name = "__cmpLocator", t.appendChild(s)
                } else setTimeout(e, 5)
        }(), "function" != typeof __cmp && (window.__cmp = function() {
            var e = arguments;
            if (__cmp.a = __cmp.a || [], !e.length) return __cmp.a;
            "ping" === e[0] ? e[2]({
                gdprAppliesGlobally: !1,
                cmpLoaded: !1
            }, !0) : __cmp.a.push([].slice.apply(e))
        }, __cmp.msgHandler = e, window.addEventListener ? window.addEventListener("message", e, !1) : window.attachEvent("onmessage", e))
    }(), 0 == document.location.pathname.indexOf("/mytelegraph/") && (console.log("ADTECH: my.telegraph.co.uk - adding tmg.pubsub polyfill"), function(e) {
        function t(t) {
            for (var d, i, r = t[0], o = t[1], m = t[2], l = 0, p = []; l < r.length; l++) i = r[l], a[i] && p.push(a[i][0]), a[i] = 0;
            for (d in o) Object.prototype.hasOwnProperty.call(o, d) && (e[d] = o[d]);
            for (g && g(t); p.length;) p.shift()();
            return n.push.apply(n, m || []), s()
        }

        function s() {
            for (var e, t = 0; t < n.length; t++) {
                for (var s = n[t], i = !0, r = 1; r < s.length; r++) 0 !== a[s[r]] && (i = !1);
                i && (n.splice(t--, 1), e = d(d.s = s[0]))
            }
            return e
        }

        function d(t) {
            if (i[t]) return i[t].exports;
            var s = i[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(s.exports, s, s.exports, d), s.l = !0, s.exports
        }
        var i = {},
            a = {
                1: 0
            },
            n = [];
        d.m = e, d.c = i, d.d = function(e, t, s) {
            d.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: s
            })
        }, d.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, d.t = function(e, t) {
            if (1 & t && (e = d(e)), 8 & t || 4 & t && "object" == typeof e && e && e.__esModule) return e;
            var s = Object.create(null);
            if (d.r(s), Object.defineProperty(s, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var i in e) d.d(s, i, function(t) {
                    return e[t]
                }.bind(null, i));
            return s
        }, d.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return d.d(t, "a", t), t
        }, d.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, d.p = "";
        var r = window["tmg.build"] = window["tmg.build"] || [],
            o = r.push.bind(r);
        r.push = t, r = r.slice();
        for (var m = 0; m < r.length; m++) t(r[m]);
        var g = o;
        s()
    }([]), (window["tmg.build"] = window["tmg.build"] || []).push([
        [0], {
            0: function(e, t, s) {
                var d, i;
                void 0 === (i = "function" == typeof(d = function(e) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), window.tmg = window.tmg || {};
                    var t = function(e) {
                        try {
                            var t = tmg,
                                s = e.split(".");
                            return "tmg" === s[0] && (s = s.slice(1)), s.forEach(function(e) {
                                void 0 === t[e] && (t[e] = {}), t = t[e]
                            }), t
                        } catch (t) {
                            console.warn("couldn't create namespace:", e)
                        }
                    };
                    window.tmg.createNamespace = t, e.default = {
                        create: t
                    }
                }) ? d.apply(t, [t]) : d) || (e.exports = i)
            },
            17: function(e, t, s) {
                var d, i;
                s = [t, s(0), s(2)], void 0 === (i = "function" == typeof(d = function(e, t, s) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var d = t && t.__esModule ? t : {
                            default: t
                        },
                        i = s && s.__esModule ? s : {
                            default: s
                        },
                        a = function() {
                            function e(e, t) {
                                for (var s = 0; s < t.length; s++) {
                                    var d = t[s];
                                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(e, d.key, d)
                                }
                            }
                            return function(t, s, d) {
                                return s && e(t.prototype, s), d && e(t, d), t
                            }
                        }();
                    s = new(t = function() {
                        function e() {
                            if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                            d.default.create("tmg.polyfill"), this.race()
                        }
                        return a(e, [{
                            key: "race",
                            value: function() {
                                return setTimeout(function() {
                                    window.tmg.polyfill.complete()
                                }, 3e3)
                            }
                        }], [{
                            key: "complete",
                            value: function() {
                                window.tmg.polyfill.complete = function() {}, i.default.publish({
                                    topic: "tmg.polyfill.ready"
                                })
                            }
                        }]), e
                    }()), window.tmg.polyfill = {
                        complete: t.complete
                    }, e.default = s
                }) ? d.apply(t, s) : d) || (e.exports = i)
            },
            18: function(e, t, s) {
                var d, i;
                void 0 === (i = "function" == typeof(d = function(e) {
                    function t(e) {
                        e: {
                            for (var t = s(), d = t.length - 1; 0 <= d; d--) {
                                var i = t[d];
                                if (e === i.name) {
                                    e = i;
                                    break e
                                }
                            }
                            e = void 0
                        }
                        return e
                    }

                    function s() {
                        if (a) {
                            if (a.getEntriesByType) return a.getEntriesByType("mark");
                            if (a.webkitGetEntriesByType) return a.webkitGetEntriesByType("mark")
                        }
                        return d
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var d = [],
                        i = [],
                        a = window.performance || {},
                        n = Date.now ? Date.now() : +new Date,
                        r = function() {
                            return a && (a.now || a.webkitNow || a.msNow || a.mozNow) ? a.now() : (Date.now ? Date.now() : +new Date) - n
                        },
                        o = {
                            now: r,
                            mark: function(e) {
                                if (a) {
                                    if (a.mark) return a.mark(e);
                                    if (a.webkitMark) return a.webkitMark(e)
                                }
                                d.push({
                                    name: e,
                                    entryType: "mark",
                                    startTime: r(),
                                    duration: 0
                                })
                            },
                            measure: function(e, s, d) {
                                var n = 0,
                                    o = r();
                                if (void 0 === s && t("RUM_start") && (s = "RUM_start"), a) {
                                    if (a.measure) return s ? d ? a.measure(e, s, d) : a.measure(e, s) : a.measure(e);
                                    if (a.webkitMeasure) return a.webkitMeasure(e, s, d)
                                }
                                if (s)
                                    if (n = t(s)) n = n.startTime;
                                    else {
                                        if (!(a && a.timing && a.timing[s])) return;
                                        n = a.timing[s] - a.timing.navigationStart
                                    } if (d)
                                    if (s = t(d)) o = s.startTime;
                                    else {
                                        if (!(a && a.timing && a.timing[d])) return;
                                        o = a.timing[d] - a.timing.navigationStart
                                    } i.push({
                                    name: e,
                                    entryType: "measure",
                                    startTime: n,
                                    duration: o - n
                                })
                            },
                            marks: d,
                            measures: i
                        };
                    window.RUM = o, a && a.timing && a.timing.navigationStart && (n = a.timing.navigationStart), window.addEventListener("beforeunload", function() {
                        var e = document.cookie.match("(^|;)\\s*AMCV_2C7336C753C676BA0A490D4B%40AdobeOrg\\s*=\\s*([^;]+)"),
                            t = e ? decodeURIComponent(e.pop()).split("|")[4] : "";
                        if (e = s(), t && "ga" in window)
                            for (t = e.length - 1; 0 <= t; t--) {
                                var d = e[t],
                                    i = d.name.split("_"),
                                    a = i[0],
                                    n = i[1];
                                i = i[2], d = Math.round(d.startTime), a && n && i && d && ga("send", {
                                    hitType: "timing",
                                    timingCategory: a,
                                    timingVar: n,
                                    timingValue: d,
                                    timingLabel: i
                                })
                            }
                    }), e.default = o
                }) ? d.apply(t, [t]) : d) || (e.exports = i)
            },
            19: function(e, t, s) {
                var d, i;
                s = [s(0), s(2)], void 0 === (i = "function" == typeof(d = function(e, t) {
                    var s = e && e.__esModule ? e : {
                        default: e
                    };
                    e = t && t.__esModule ? t : {
                        default: t
                    };
                    var d = function() {
                            function e(e, t) {
                                for (var s = 0; s < t.length; s++) {
                                    var d = t[s];
                                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(e, d.key, d)
                                }
                            }
                            return function(t, s, d) {
                                return s && e(t.prototype, s), d && e(t, d), t
                            }
                        }(),
                        i = function() {
                            function e(t) {
                                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                                this.elements = (Array.isArray(t) ? t : [t]).filter(this.isValid)
                            }
                            return d(e, [{
                                key: "init",
                                value: function() {
                                    var e = this.createObserver();
                                    this.elements.forEach(function(t) {
                                        e.observe(t)
                                    })
                                }
                            }, {
                                key: "createObserver",
                                value: function() {
                                    return new IntersectionObserver(this.observerCallback.bind(this), {
                                        rootMargin: "100px 0px",
                                        threshold: .1
                                    })
                                }
                            }, {
                                key: "observerCallback",
                                value: function(e, t) {
                                    var s = this;
                                    e.forEach(function(e) {
                                        e.isIntersecting && (e = e.target, s.createImage(e), t.unobserve(e))
                                    })
                                }
                            }, {
                                key: "isValid",
                                value: function(e) {
                                    return !!e.dataset.src
                                }
                            }, {
                                key: "createImage",
                                value: function(e) {
                                    var t = document.createElement("img");
                                    t.setAttribute("height", 0), t.onload = this.displayImage(e, t), "id srcset sizes alt title src".split(" ").forEach(function(s) {
                                        e.dataset[s] && (t.setAttribute(s, e.dataset[s]), e.removeAttribute("data-" + s))
                                    }), t.classList.add("is-loading"), e.appendChild(t)
                                }
                            }, {
                                key: "displayImage",
                                value: function(e, t) {
                                    return function() {
                                        t.removeAttribute("height"), e.style.height = null, e.style.paddingTop = null, t.classList.add("is-loaded"), t.classList.remove("is-loading"), e.classList.add("is-ready")
                                    }
                                }
                            }]), e
                        }();
                    e.default.subscribe({
                        topic: "tmg.page.ready",
                        func: function() {
                            var e = [].concat(function(e) {
                                    if (Array.isArray(e)) {
                                        for (var t = 0, s = Array(e.length); t < e.length; t++) s[t] = e[t];
                                        return s
                                    }
                                    return Array.from(e)
                                }(document.querySelectorAll('[data-js="LazyImage"]'))),
                                t = {
                                    createImage: (e = new i(e)).createImage,
                                    displayImage: e.displayImage
                                };
                            s.default.create("tmg.lazyImage"), tmg.lazyImage = t, e.init()
                        },
                        runIfAlreadyPublished: !0
                    })
                }) ? d.apply(t, s) : d) || (e.exports = i)
            },
            2: function(e, t, s) {
                var d, i;
                s = [t, s(0)], void 0 === (i = "function" == typeof(d = function(e, t) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), t = t && t.__esModule ? t : {
                        default: t
                    };
                    var s = function() {
                            function e(e, t) {
                                for (var s = 0; s < t.length; s++) {
                                    var d = t[s];
                                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(e, d.key, d)
                                }
                            }
                            return function(t, s, d) {
                                return s && e(t.prototype, s), d && e(t, d), t
                            }
                        }(),
                        d = new(function() {
                            function e() {
                                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                                this.topics = [], this.publishedTopics = [], this.UID = -1
                            }
                            return s(e, [{
                                key: "subscribe",
                                value: function(e) {
                                    var t = e.topic,
                                        s = e.func;
                                    if ("function" != typeof s) return !1;
                                    if (e.runIfAlreadyPublished)
                                        for (e = 0; e < this.publishedTopics.length; e++) this.publishedTopics[e] === t && s.call();
                                    return e = (this.UID += 1).toString(), this.topics.push({
                                        token: e,
                                        topic: t,
                                        func: s
                                    }), e
                                }
                            }, {
                                key: "unsubscribe",
                                value: function(e) {
                                    e = e.topic;
                                    for (var t = 0; t < this.topics.length; t++) this.topics[t].topic === e && this.topics.splice(t, 1)
                                }
                            }, {
                                key: "publish",
                                value: function(e) {
                                    e = e.topic, this.publishedTopics.push(e);
                                    for (var t = 0; t < this.topics.length; t++) this.topics[t].topic === e && this.topics[t].func.call()
                                }
                            }]), e
                        }());
                    t.default.create("tmg.pubsub"), window.tmg.pubsub = d, e.default = d
                }) ? d.apply(t, s) : d) || (e.exports = i)
            },
            20: function(e, t, s) {
                var d, i;
                s = [s(2)], void 0 === (i = "function" == typeof(d = function(e) {
                    var t = e && e.__esModule ? e : {
                        default: e
                    };
                    t.default.subscribe({
                        topic: "tmg.polyfill.ready",
                        func: function() {
                            t.default.publish({
                                topic: "tmg.page.ready"
                            })
                        },
                        runIfAlreadyPublished: !0
                    })
                }) ? d.apply(t, s) : d) || (e.exports = i)
            },
            45: function(e, t, s) {
                var d, i;
                s = [t, s(0), s(2), s(17), s(18), s(19), s(20)], void 0 === (i = "function" == typeof(d = function(e, t, s, d, i, a, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), t = r(t), s = r(s), d = r(d), i = r(i), a = r(a), n = r(n), e.default = {
                        namespace: t.default,
                        pubsub: s.default,
                        polyfill: d.default,
                        rum: i.default,
                        pageReady: n.default,
                        lazyimage: a.default
                    }
                }) ? d.apply(t, s) : d) || (e.exports = i)
            }
        }
    ]), (window["tmg.build"] = window["tmg.build"] || []).push([
        [6],
        [],
        [
            [45, 1, 0]
        ]
    ])), document.addEventListener("readystatechange", function(e) {
        tmgAds.metrics.readyState[document.readyState] = tmgAdsTimer()
    }), document.addEventListener("DOMContentLoaded", function(e) {
        tmgAds.metrics.readyState.DOMContentLoaded = tmgAdsTimer()
    }),
    function(e) {
        tmgAdsLog("##############################################################################"), tmgAdsLog("#                        TMG-GPT.JS  INITIALISATION                          #"), tmgAdsLog("##############################################################################"), tmgAdsInitEventHandlers(), tmgAdsEvent("tmggpt:initstart"), tmgAdsInit(), tmgAdsInitConfig(), tmgAdsInitGeoAPIStatus(), tmgAdsInitData(), tmgAdsInitDeliveryModel(), tmgAdsInit3rdParties(), tmgAdsEvent("tmggpt:initend"), -1 == document.cookie.indexOf("_evidon_consent_cookie") || e.plugins.adevidonoff ? (tmgAdsInitHeaderBidders(), tmgAdsInitDFP(), tmg.pubsub.subscribe({
            topic: "tmg.page.ready",
            func: tmgAdsOnPageLoad,
            runIfAlreadyPublished: !0
        }), e.plugins.dynad.active && tmg.pubsub.subscribe({
            topic: "tmg.page.ready",
            func: tmgAdsInjectDynamicAds,
            runIfAlreadyPublished: !0
        }), tmg.pubsub.subscribe({
            topic: "tmg.page.ready",
            func: tmgAdsCreateNativeSlots,
            runIfAlreadyPublished: !0
        }), tmg.pubsub.subscribe({
            topic: "tmg.page.ready",
            func: tmgAdsCustomCode,
            runIfAlreadyPublished: !0
        }), tmg.pubsub.subscribe({
            topic: "tmg.page.ready",
            func: tmgAdsCreate,
            runIfAlreadyPublished: !0
        })) : __cmp("getConsentData", {}, function(t) {
            e.metrics.evidon_getConsentData = tmgAdsTimer(), tmgAdsInitHeaderBidders(), tmgAdsInitDFP(), setTimeout(function() {
                tmg.pubsub.subscribe({
                    topic: "tmg.page.ready",
                    func: tmgAdsOnPageLoad,
                    runIfAlreadyPublished: !0
                }), e.plugins.dynad.active && tmg.pubsub.subscribe({
                    topic: "tmg.page.ready",
                    func: tmgAdsInjectDynamicAds,
                    runIfAlreadyPublished: !0
                }), tmg.pubsub.subscribe({
                    topic: "tmg.page.ready",
                    func: tmgAdsCreateNativeSlots,
                    runIfAlreadyPublished: !0
                }), tmg.pubsub.subscribe({
                    topic: "tmg.page.ready",
                    func: tmgAdsCustomCode,
                    runIfAlreadyPublished: !0
                }), tmg.pubsub.subscribe({
                    topic: "tmg.page.ready",
                    func: tmgAdsCreate,
                    runIfAlreadyPublished: !0
                })
            }, 100)
        })
    }(tmgAds);