/*
 sd_ads_updater-1.4.0.js
 Copyright (c) 2015 Rakuten.Inc
 Date : 2015-10-29 11:44:55
*/
(function() {
    if (void 0 !== window.jQuery) {
        var g = jQuery,
            p = function(a, b) {
                var c = this;
                this.isAppView = /IchibaApp-jp.co.rakuten.superdeal/.test(navigator.userAgent);
                this.$config = a;
                this.$sharedConfig = b || g("");
                this.priceSourceSelector = this.$config.attr("data-priceSourceSelector") || this.defaults.selectors.priceSource;
                this.pointBackSourceSelector = this.$config.attr("data-pointBackSourceSelector") || this.defaults.selectors.pointBackSource;
                this.updatedRateSelector = this.$config.attr("data-updatedRateSelector") || this.defaults.selectors.updatedRate;
                this.updatedPriceSelector = this.$config.attr("data-updatedPriceSelector") || this.defaults.selectors.updatedPrice;
                this.startDateSelector = this.$config.attr("data-startDateSelector") || this.defaults.selectors.startDate;
                this.endDateSelector = this.$config.attr("data-endDateSelector") || this.defaults.selectors.endDate;
                this.radTableSelector = this.$config.attr("data-radTableSelector") || this.defaults.selectors.radTable;
                this.radTableConfigSelector = this.$config.attr("data-radTableConfigSelector") || this.defaults.selectors.radTableConfig;
                this.radTableBodySelector = this.$config.attr("data-radTableBodySelector") || this.defaults.selectors.radTableBody;
                this.sliderWrapSelector = this.$config.attr("data-sliderWrap") || "";
                this.sliderType = this.$config.attr("data-sliderType") || "";
                this.wrapSelector = this.$config.attr("data-wrap") || "";
                this.itemWrapSelector = this.$config.attr("data-itemWrap") || "";
                this.itemSelector = this.$config.attr("data-item") || "";
                this.dateSourceSelector = this.$config.attr("data-dateSource") || "";
                this.pointUpRate = function() {
                    var a = +c.$config.attr("data-pointUpRate"),
                        b = +c.$sharedConfig.attr("data-pointUpRate");
                    return isNaN(a) ? isNaN(b) ? 0 : b : a
                }();
                this.appRate = function() {
                    if (!c.isAppView) return 0;
                    var a = +c.$config.attr("data-appRate"),
                        b = +c.$sharedConfig.attr("data-appRate");
                    return isNaN(a) ? isNaN(b) ? 0 : b : a
                }();
                this.pointUpRate += this.appRate;
                this.campaign = function() {
                    if (c.isAppView) return !1;
                    var a = c.$config.attr("data-campaign"),
                        b = c.$sharedConfig.attr("data-campaign");
                    return "true" === a || "false" === a ? "true" === a : "true" === b || "false" === b ? "true" === b : !1
                }();
                this.addOriginalPriceComma =
                    "true" === this.$config.attr("data-addOriginalPriceComma");
                this.allUpdatedEventTargetSelector = this.$config.attr("data-allUpdatedEventTarget") || "body";
                this.dateText = this.$config.attr("data-dateText") || this.defaults.texts.date;
                this.endDate = this.startDate = "";
                this.adsUpdated = 0
            };
        p.prototype = {
            defaults: {
                selectors: {
                    priceSource: ".riSDAdTxtTp > span",
                    pointBackSource: ".riSDAdPntBk > span",
                    updatedRate: ".percentWrap > .number",
                    updatedPrice: ".pntBkPrice",
                    startDate: ".riSDAdDateStart",
                    endDate: ".riSDAdDateEnd",
                    radTable: ".rad-table-existItemDisplay, .radTableContainer",
                    radTableConfig: ".rad-table-config, .radConfig",
                    radTableBody: ".rad-table-body, .radItemsDisplay"
                },
                texts: {
                    date: "#MONTH#��#DATE#�� #HOUR#:#MINUTE#"
                },
                events: {
                    SD_ADS_UPDATED: "sdadsupdated",
                    SD_ALL_ADS_UPDATED: "sdalladsupdated"
                }
            },
            initialize: function() {
                var a = this;
                this.sliderWrapSelector && ("sp" === this.sliderType ? this.initializeSPSlider() : "pc" === this.sliderType && this.initializePCSlider());
                if (this.wrapSelector && this.itemWrapSelector && this.itemSelector) this.$wraps = g(this.wrapSelector), this.$allUpdatedEventTarget =
                    g(this.allUpdatedEventTargetSelector), this.$wraps.bind("sdadsupdated", function() {
                        ++a.adsUpdated === a.$wraps.length && a.$allUpdatedEventTarget.trigger(a.defaults.events.SD_ALL_ADS_UPDATED)
                    }).each(function(b) {
                        var c = a.$wraps.eq(b),
                            f = c.find(a.itemWrapSelector),
                            e, d, g = c.find(a.radTableSelector),
                            h = g.find(a.radTableConfigSelector),
                            k = g.find(a.radTableBodySelector),
                            i = a.wrapSelector + ":eq(" + b + ")",
                            j = a.wrapSelector.replace(/(\s|\.|#|>)/g, "") + b,
                            n = "",
                            o = "",
                            m = 0;
                        0 < g.length ? g.each(function(b) {
                            h.eq(b).attr("event_target",
                                i).attr("event_name", j + b);
                            c.bind(j + b, function() {
                                ++m === g.length && (k.each(function(a) {
                                    k.eq(a).children().appendTo(f)
                                }), e = f.find(a.itemSelector), a.dateSourceSelector && (d = c.prev(a.dateSourceSelector), 0 === d.length && (d = c.find(a.dateSourceSelector)), 0 < d.length && (n = d.attr("data-startDate"), o = d.attr("data-endDate"))), a.updateItems(c, e, a.pointUpRate, n, o, a.addOriginalPriceComma, a.campaign))
                            })
                        }) : (e = f.find(a.itemSelector), a.dateSourceSelector && (d = c.prev(a.dateSourceSelector), 0 === d.length && (d = c.find(a.dateSourceSelector)),
                            0 < d.length && (n = d.attr("data-startDate"), o = d.attr("data-endDate"))), a.updateItems(c, e, a.pointUpRate, n, o, a.addOriginalPriceComma, a.campaign))
                    })
            },
            initializeSPSlider: function() {
                var a = this,
                    b = g(this.sliderWrapSelector),
                    c = b.find(".sdBanner"),
                    f = b.find(".sdBannerList > ul"),
                    e = b.find(this.radTableSelector),
                    d = e.find(this.radTableConfigSelector),
                    l = e.find(this.radTableBodySelector),
                    h, e = this.sliderWrapSelector,
                    k = this.sliderWrapSelector.replace(/(\s|\.|#|>)/g, "");
                d.attr("event_target", e).attr("event_name", k);
                b.bind(k,
                    function() {
                        h = l.children();
                        0 !== h.length && (b.show(), a.updateItems(b, h, a.pointUpRate, "", "", a.addOriginalPriceComma, a.campaign), f.append(h), (new r).initialize(c))
                    })
            },
            initializePCSlider: function() {
                var a = this,
                    b = g(this.sliderWrapSelector),
                    c = b.find(".sdLiquidBanner"),
                    f = b.find(".sdLiquidBanner-list > ul"),
                    e = b.find(this.radTableSelector),
                    d = e.find(this.radTableConfigSelector),
                    l = e.find(this.radTableBodySelector),
                    h, e = this.sliderWrapSelector,
                    k = this.sliderWrapSelector.replace(/(\s|\.|#|>)/g, "");
                d.attr("event_target",
                    e).attr("event_name", k);
                b.bind(k, function() {
                    h = l.children();
                    0 !== h.length && (b.show(), a.updateItems(b, h, a.pointUpRate, "", "", a.addOriginalPriceComma, a.campaign), f.append(h), (new s(c)).initialize())
                })
            },
            updateItems: function(a, b, c, f, e, d, g) {
                var h = this;
                0 < b.eq(0).find("img[data-original]").length && this.loadLazyLoading(b.find("img"));
                b.each(function(a) {
                    a = b.eq(a);
                    g && a.addClass("campaign");
                    var i = a.find(h.priceSourceSelector),
                        j;
                    0 < i.length && (j = parseInt(i.html().replace(/��|,/g, ""), 10));
                    d && i.html(h.addDigitComma(j) +
                        "��");
                    i = a.find(h.pointBackSourceSelector);
                    0 < i.length && (i = parseInt(i.html().replace(/%|��/g, ""), 10) + c, a.find(h.updatedRateSelector).html(i + ""), (j = parseInt(j * i / 100, 10)) && a.find(h.updatedPriceSelector).html(h.addDigitComma(j)));
                    if (f) j = f.split(/-|:|\s/), i = h.dateText, i = i.replace("#MONTH#", j[1]).replace("#DATE#", j[2]).replace("#HOUR#", j[3]).replace("#MINUTE#", j[4]), a.find(h.startDateSelector).html(i);
                    if (e) j = e.split(/-|:|\s/), i = h.dateText, i = i.replace("#MONTH#", j[1]).replace("#DATE#", j[2]).replace("#HOUR#",
                        j[3]).replace("#MINUTE#", j[4]), a.find(h.endDateSelector).html(i)
                });
                a.trigger(this.defaults.events.SD_ADS_UPDATED)
            },
            loadLazyLoading: function(a) {
                a.each(function(b) {
                    a.eq(b).attr("src", a.eq(b).attr("data-original")).removeAttr("data-original")
                })
            },
            addDigitComma: function(a) {
                return ("" + a).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
            }
        };
        var r = function() {
                var a = this;
                g.extend(a, {
                    settings: {
                        noready: [1, "Int", "^[0-1]$"],
                        maxitem: [3, "Int", "^[1-9]$"],
                        minitem: [1, "Int", "^[1-9]$"],
                        autoresize: [1, "Int", "^[0-1]$"],
                        slidespeed: [500,
                            "Range", "1,9999"
                        ],
                        flickmove: [30, "Range", "1,99"],
                        nodisplaywords: ["", "Str", "^.{1,256}$"],
                        noslidewords: ["", "Str", "^.{1,256}$"],
                        noflickwords: ["", "Str", "^.{1,256}$"],
                        slide: [1, "Int", "^[0-1]$"],
                        flick: [1, "Int", "^[0-1]$"],
                        disablebutton: [1, "Int", "^[0-1]$"]
                    },
                    eobj: {
                        banner: null,
                        loading: null,
                        config: null,
                        existItem: null,
                        prototypeItem: null,
                        prevButton: null,
                        nextButton: null,
                        itemsDisplay: null,
                        pageIndicators: null
                    },
                    status: {
                        error: !1
                    },
                    props: {
                        items: [],
                        itemEvents: {},
                        itemPrototype: {
                            html: "",
                            height: 0,
                            width: 0,
                            identifiers: {
                                banner: ["",
                                    "#BANNER#", ""
                                ]
                            }
                        }
                    },
                    initialize: function(b) {
                        a.eobj.banner = b;
                        a.eobj.loading = a.eobj.banner.find(".sdBannerLoading");
                        a.eobj.config = a.eobj.banner.find(".sdBannerConfig");
                        a.eobj.list = a.eobj.banner.find(".sdBannerList");
                        a.eobj.prototypeItem = a.eobj.banner.find(".sdBannerPrototype");
                        a.eobj.existItem = a.eobj.banner.find(".sdBannerExistItemDisplay");
                        a.eobj.itemsDisplay = a.eobj.banner.find(".sdBannerItemsDisplay");
                        a.eobj.prevButton = a.eobj.banner.find(".sdBannerPrevButton");
                        a.eobj.nextButton = a.eobj.banner.find(".sdBannerNextButton");
                        a.eobj.pageIndicators = a.eobj.banner.find(".sdBannerPageIndicators");
                        0 !== a.eobj.list.length && a.loadSettings() && (1 === a.settings.noready ? a.begin() : g(function() {
                            a.begin()
                        }))
                    },
                    loadSettings: function() {
                        a.settings = g.RJS_Helpers.readAttr(a.eobj.config, a.settings);
                        if ("" !== a.settings.nodisplaywords) {
                            var b, c = a.settings.nodisplaywords.split(",");
                            for (b in c)
                                if (navigator.userAgent.match(c[b])) return !1
                        }
                        0 !== a.settings.slidespeed && (a.settings.slidespeed /= 1E3);
                        a.eobj.config.remove();
                        return !0
                    },
                    begin: function() {
                        a.status.error = !a.getPrototype();
                        a.getData()
                    },
                    getData: function() {
                        var b = a.eobj.list.find("li", ".sdBannerItems");
                        if (0 === b.length) a.eobj.banner.remove();
                        else return b.each(function() {
                            a.props.items.push({
                                banner: g(this).html()
                            })
                        }), a.startSlideshow(), !0
                    },
                    getPrototype: function() {
                        var b = a.eobj.prototypeItem,
                            c = a.props.itemPrototype;
                        if (0 === b.length) return !1;
                        c.width = b.outerWidth();
                        c.height = b.outerHeight();
                        c.html = b.html();
                        if ("" === c.html) return !1;
                        b.remove();
                        return !0
                    },
                    startSlideshow: function() {
                        a.eobj.existItem.show();
                        a.eobj.itemsDisplay.RJS_Slideshow(a, {
                            settings: a.settings,
                            itemPrototype: a.props.itemPrototype,
                            eobj: a.eobj,
                            items: a.props.items,
                            itemEvents: a.props.itemEvents,
                            events: {
                                afterFirstRender: a.afterFirstRender,
                                beforeFirstRender: a.beforeFirstRender
                            }
                        })
                    },
                    afterFirstRender: function() {},
                    beforeFirstRender: function(a, c) {
                        c.eobj.loading.remove();
                        c.eobj.itemsDisplay.show()
                    }
                })
            },
            s = function(a) {
                var b = this;
                g.extend(b, {
                    slideshow: null,
                    settings: {
                        autoslidetime: [7E3, "Range", "0,9999"],
                        autoslideflag: ["next", "Str", "^(next|prev)$"],
                        autoslide: [1, "Int", "^[0-1]$"],
                        maxitem: [2,
                            "Int", "^[1-9]$"
                        ],
                        pagespeed: [50, "Range", "0,9999"],
                        opacityspeed: [200, "Range", "0,9999"],
                        verticalmode: [0, "Int", "^[1]$"],
                        autoresize: [1, "Int", "^[0-1]$"],
                        pagenumber: [0, "Int", "^[0-1]$"],
                        indicator: [1, "Int", "^[0-1]$"],
                        indicatoralign: [0, "Int", "^[0-1]$"],
                        singlemode: [0, "Int", "^[0-1]$"],
                        defaultcontent: [".flashcontent", "Str", "^[a-zA-Z0-9_-]{3,32}$"]
                    },
                    eobj: {
                        config: a.find(".sdLiquidBanner-config"),
                        frame: a.find(".sdLiquidBanner-frame"),
                        prototypeItem: a.find(".sdLiquidBanner-item"),
                        itemsDisplay: a.find(".sdLiquidBanner-body"),
                        prevButton: a.find(".sdLiquidBanner-prev"),
                        nextButton: a.find(".sdLiquidBanner-next"),
                        backButton: a.find(".sdLiquidBanner-back"),
                        nowPage: a.find(".sdLiquidBanner-nowPage"),
                        maxPage: a.find(".sdLiquidBanner-maxPage"),
                        indicatorDisplay: a.find(".sdLiquidBanner-indicatorArea"),
                        prototypeIndicator: a.find(".prototypeIndicator")
                    },
                    status: {
                        error: !1,
                        isTimeout: !1
                    },
                    props: {
                        items: [],
                        itemPrototype: {
                            html: "",
                            height: 0,
                            width: 0,
                            identifiers: {
                                banner1: ["", /\#BANNER1\#/g, ""],
                                banner2: ["", /\#BANNER2\#/g, ""]
                            }
                        },
                        indicatorPrototype: {
                            html: "",
                            width: 0,
                            height: 0
                        }
                    },
                    initialize: function() {
                        b.loadSettings();
                        b.begin()
                    },
                    loadSettings: function() {
                        b.settings = g.RJS_Helpers.readAttr(b.eobj.config, b.settings);
                        b.eobj.config.remove();
                        return !0
                    },
                    begin: function() {
                        b.status.error = !b.getPrototype();
                        b.getData()
                    },
                    getData: function() {
                        var c, f, e, d = a.find(".sdLiquidBanner-list li");
                        c = a.find(".liquidBanner-cBanner");
                        if (1 > d.length) return !1;
                        if (1 === b.settings.singlemode) {
                            e = d.length;
                            for (c = 0; c < e; c++) b.props.items[c] = [], b.props.items[c].banner1 = g(d[c]).html()
                        } else {
                            e = Math.ceil(d.length /
                                2);
                            var l = d[0] ? g(d[0]).html() : "";
                            0 < c.length && 1 == d.length % 2 && (l = c.html());
                            for (c = 0, f = 0; c < e; c++) b.props.items[c] = [], b.props.items[c].banner1 = d[f] ? g(d[f++]).html() : l, b.props.items[c].banner2 = d[f] ? g(d[f++]).html() : l
                        }
                        b.startSlideshow();
                        b.eobj.backButton.bind("click", function(a) {
                            a.preventDefault();
                            b.slideshow.changePage(1);
                            return !1
                        });
                        return !0
                    },
                    getPrototype: function() {
                        var a = b.eobj.prototypeItem,
                            f = b.props.itemPrototype;
                        if (0 === a.length) return !1;
                        f.width = a.outerWidth();
                        f.height = a.outerHeight();
                        f.html = a.html();
                        if ("" === f.html) return !1;
                        a.remove();
                        if (1 == b.settings.indicator) {
                            a = b.eobj.prototypeIndicator;
                            f = b.props.indicatorPrototype;
                            if (0 === a.length) return !1;
                            f.width = a.outerWidth();
                            f.height = a.outerHeight();
                            f.html = a.html();
                            if ("" === f.html) return !1;
                            a.remove()
                        }
                        return !0
                    },
                    startSlideshow: function() {
                        a.find(b.settings.defaultcontent).hide();
                        b.eobj.frame.show();
                        b.eobj.itemsDisplay.RJS_Slideshow(b, {
                            settings: b.settings,
                            itemPrototype: b.props.itemPrototype,
                            indicatorPrototype: b.props.indicatorPrototype,
                            eobj: b.eobj,
                            items: b.props.items,
                            events: {
                                beforeFirstRender: b.beforeFirstRender,
                                changePageNumber: 1 == b.settings.pagenumber ? b.changePageNumber : !1
                            }
                        })
                    },
                    beforeFirstRender: function(a, b) {
                        b.eobj.itemsDisplay.show()
                    },
                    changePageNumber: function(a, b, e) {
                        e.eobj.nowPage.text(a);
                        e.eobj.maxPage.text(b);
                        1 == a ? e.eobj.backButton.hide() : e.eobj.backButton.show()
                    }
                })
            },
            m = g("#RJSSDAdsUpdaterConfig");
        if (0 !== m.length) {
            var t = m.find(".sharedConfig"),
                q = m.children().not(".sharedConfig");
            q.each(function(a) {
                (new p(q.eq(a), t)).initialize()
            })
        }
    }
})();