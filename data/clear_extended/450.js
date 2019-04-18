/*
 smart_coupon-1.0.0.js
 Copyright (c) 2015 Rakuten.Inc
 Date : 2015-12-09 19:27:37
*/
(function(i, k) {
    function j(c) {
        c.css("cssText", (c.css("cssText") || "") + "; display:none!important;")
    }
    var c = i.jQuery;
    if (!("function" !== typeof c || !c.RJS_Helpers || !c.fn.RJS_Slideshow)) {
        var l = "��,��,��,��,��,��,��".split(","),
            o = function(e) {
                var b = this;
                c.extend(b, {
                    slideshow: null,
                    settings: {
                        rjs: {
                            maxitem: [4, "Int"],
                            pagespeed: [100, "Range", "0,9999"],
                            opacityspeed: [100, "Range", "0,9999"],
                            autoslidetime: [2, "Range", "1,10000"],
                            autoslideflag: ["next", "Str", "^(next|prev)$"],
                            autoslide: [0, "Int", "^[0-1]$"],
                            autoresize: [1, "Int", "^[0-1]$"],
                            verticalmode: [0, "Int", "^[0-1]$"],
                            indicator: [0, "Int", "^[0-1]$"],
                            indicatoralign: [0, "Int", "^[0-1]$"]
                        },
                        common: {
                            noready: [0, "Int", "^[0-1]$"],
                            url: ["", "Str", "^https?.*$"],
                            maxcount: [1E3, "Range", "1,10000"],
                            mincount: [3, "Range", "1,10000"],
                            ajaxtimer: [3, "Range", "1,99"],
                            pagenumber: [0, "Int", "^[0-1]$"],
                            sid: ["", "Str", "^[a-zA-Z0-9_\\-]{3,64}$"],
                            impvar: ["", "Str", "^[a-zA-Z0-9_]{3,64}$"],
                            impdisp: ["", "Str", "^[a-zA-Z0-9_]{3,64}$"],
                            impnodisp: ["", "Str", "^[a-zA-Z0-9_]{3,64}$"],
                            rataccountid: [456, "Int"],
                            ratserviceid: [1, "Int"],
                            ratpagetype: ["", "Str"],
                            ratoptions: ["url,ua", "Str"],
                            shoplogo: [1, "Int", "^[0-2]$"],
                            shoplogosize: ["130x28", "Str", "^[1-9][0-9]{1,2}x[1-9][0-9]{1,2}"],
                            keywordid: ["", "Str"],
                            imagesize: ["80x80", "Str", "^[1-9][0-9]{1,2}x[1-9][0-9]{1,2}"],
                            omitname: [20, "Range", "0,100"]
                        }
                    },
                    eobj: {
                        reco: {
                            config: e.find(".smart-coupon-slideshow-config"),
                            prevButton: e.find(".smart-coupon-slideshow-prev"),
                            nextButton: e.find(".smart-coupon-slideshow-next"),
                            proto: e.find(".smart-coupon-slideshow-proto"),
                            frame: e.find(".smart-coupon-slideshow-frame"),
                            existItem: e,
                            itemsDisplay: e.find(".smart-coupon-slideshow-body"),
                            altContents: e.find(".smart-coupon-slideshow-altered-contents"),
                            loadingContents: e.find(".smart-coupon-slideshow-loading"),
                            indicatorDisplay: e.find(".smart-coupon-slideshow-indicator-area"),
                            endTimeDisplay: e.find(".smart-coupon-slideshow-endtime-area")
                        },
                        indicator: {
                            proto: e.find(".smart-coupon-slideshow-indicator-proto")
                        }
                    },
                    props: {
                        reco: {
                            items: [],
                            proto: {
                                html: "",
                                height: 0,
                                width: 0,
                                identifiers: {
                                    itemImage: ['<img src="', /#ITEMIMAGE#/g, '" alt="#ITEMNAME#">'],
                                    itemName: ["", /#ITEMNAME#/g, ""],
                                    itemPrice: ["", /#ITEMPRICE#/g, ""],
                                    itemUrl: ["", /#ITEMURL#/g, ""],
                                    discountAmount: ["", /#DISCOUNTAMOUNT#/g, ""],
                                    discountType: ["", /#DISCOUNTTYPE#/g, ""],
                                    discountPrice: ["", /#DISCOUNTPRICE#/g, ""],
                                    discountClass: ["", /#DISCOUNTCLASS#/g, ""],
                                    shopName: ["", /#SHOPNAME#/g, ""],
                                    shopUrl: ["", /#SHOPURL#/g, ""],
                                    shopImage: ["", /#SHOPIMAGE#/g, ""],
                                    shopImageClass: ["", /#SHOPIMAGECLASS#/g, ""],
                                    endMonth: ["", /#MON#/g, ""],
                                    endDate: ["", /#DATE#/g, ""],
                                    endWeekDay: ["", /#WDAY#/g, ""],
                                    endHour: ["", /#HOUR#/g, ""],
                                    endMinute: ["",
                                        /#MIN#/g, ""
                                    ]
                                }
                            }
                        },
                        indicator: {
                            proto: {
                                html: "",
                                width: 0,
                                height: 0
                            }
                        }
                    },
                    loadSettings: function() {
                        j(b.eobj.reco.proto);
                        if (1 > b.eobj.reco.config.size()) return !1;
                        b.settings.rjs = c.RJS_Helpers.readAttr(b.eobj.reco.config, b.settings.rjs);
                        b.settings.common = c.RJS_Helpers.readAttr(b.eobj.reco.config, b.settings.common);
                        if ("" === b.settings.common.url || 0 === b.eobj.reco.proto.length) return !1;
                        b.eobj.reco.config.remove();
                        return !0
                    },
                    initialize: function() {
                        if (!b.loadSettings()) return !1;
                        if (function(a) {
                                for (var a = a.split(/; */), b = 0; a.length >
                                    b; b++) {
                                    var c = a[b].split("=");
                                    if ("Rz" === c[0] && "" !== c[1]) return !0
                                }
                                return !1
                            }(document.cookie)) {
                            var a = function() {
                                var a = b.settings.common.keywordid,
                                    a = c("" === a ? null : "#" + a).val(),
                                    m = null != a ? {
                                        query: a
                                    } : {};
                                b.RAT.setCommonParams(a);
                                var e = setTimeout(function() {
                                    e = null
                                }, 1E3 * b.settings.common.ajaxtimer);
                                c.ajax({
                                    url: b.settings.common.url,
                                    cache: !1,
                                    data: m,
                                    dataType: "jsonp",
                                    scriptCharset: "utf-8",
                                    success: function(a) {
                                        e && (clearTimeout(e), b.prepareData(a))
                                    },
                                    error: function() {}
                                })
                            };
                            1 == b.settings.common.noready ? a() : c(a)
                        } else b.addImpressionCode(b.settings.common.impnodisp)
                    },
                    prepareData: function(a) {
                        if (!a || "ok" !== a.status || !a.items) return !1;
                        var d = b.settings.common;
                        b.RAT.setItemParams(a.items);
                        var c = a.items.length;
                        if (c < d.mincount) return b.addImpressionCode(d.impnodisp), b.RAT.send(), !1;
                        for (var c = Math.min(c, d.maxcount), e = [], n = 0, f = function() {
                                var a = this.item;
                                e[this.i] = {
                                    itemName: b.editItemName(a.item_name, d.omitname),
                                    itemPrice: b.editItemPrice(a.item_price),
                                    itemImage: b.editImageUrl(a.item_image_url, d.imagesize),
                                    itemUrl: b.editItemUrl(a.redirect_url, d.sid),
                                    discountAmount: b.editItemPrice(a.discount_amount),
                                    discountType: b.editDiscountType(a.discount_type),
                                    discountPrice: 1 == a.discount_type ? b.editItemPrice(a.item_price - a.discount_amount) : "",
                                    discountClass: 1 == a.discount_type ? "smart-coupon-discount-yes" : "smart-coupon-discount-no",
                                    shopName: b.editItemName(a.shop_name, d.omitname),
                                    shopUrl: b.editShopUrl(a.shop_mng_id),
                                    shopImage: 1 >= this.width ? a.shop_name : b.editShopImage(this.src, a.shop_name),
                                    shopImageClass: 1 >= this.width ? "smart-coupon-shop-text" : "smart-coupon-shop-image"
                                };
                                if (++n == c) b.props.reco.items = e, b.props.recoItemNum =
                                    c, b.displayData(b.props, b.eobj, b.settings.rjs)
                            }, h = [], g = 0; c > g; g++) {
                            var i = a.items[g];
                            h[g] = new Image;
                            h[g].onload = h[g].onerror = f;
                            h[g].item = i;
                            h[g].i = g;
                            e[g] = null;
                            2 == d.shoplogo ? (h[g].width = 1, h[g].onload()) : h[g].src = "//thumbnail.image.rakuten.co.jp/@0_mall/" + i.shop_mng_id + "/logo/logo2" + (1 == d.shoplogo ? "n" : "") + ".jpg?_ex=" + d.shoplogosize
                        }
                        f = b.eobj.reco.endTimeDisplay.html();
                        a.items[0] && a.items[0].end_time && f ? (a = a.items[0].end_time.split(/\D/), h = l[(new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5])).getDay()], f = f.replace(/#MON#/g,
                            +a[1]), f = f.replace(/#DATE#/g, +a[2]), f = f.replace(/#HOUR#/g, +a[3]), f = f.replace(/#MIN#/g, a[4]), f = f.replace(/#WDAY#/g, h)) : f = "";
                        b.eobj.reco.endTimeDisplay.html(f)
                    },
                    displayData: function(a, d, c) {
                        if (0 === d.reco.proto.length) return !1;
                        a.reco.proto.width = d.reco.proto.outerWidth();
                        if (0 == a.reco.proto.width) a.reco.proto.width = d.reco.proto.css("width").replace("px", "");
                        a.reco.proto.height = d.reco.proto.outerHeight();
                        a.reco.proto.html = d.reco.proto.html();
                        if ("" == a.reco.proto.html) return !1;
                        j(d.reco.proto);
                        d.reco.itemsDisplay.empty();
                        if (c.indicator) {
                            if (0 === d.indicator.proto.length) return !1;
                            a.indicator.proto.width = d.indicator.proto.outerWidth();
                            if (0 == a.indicator.proto.width) a.indicator.proto.width = d.indicator.proto.css("width").replace("px", "");
                            a.indicator.proto.height = d.indicator.proto.outerHeight();
                            a.indicator.proto.html = d.indicator.proto.html();
                            if ("" == a.indicator.proto.html) return !1;
                            j(d.indicator.proto);
                            d.reco.indicatorDisplay.empty()
                        }
                        j(d.reco.altContents);
                        b.eobj.reco.loadingContents.show();
                        b.eobj.reco.existItem.show();
                        d.reco.itemsDisplay.RJS_Slideshow(b, {
                            settings: c,
                            itemPrototype: a.reco.proto,
                            indicatorPrototype: a.indicator.proto,
                            eobj: d.reco,
                            items: a.reco.items,
                            events: {
                                beforeFirstRender: function(a, b) {
                                    b.eobj.reco.prevButton.show();
                                    b.eobj.reco.nextButton.show()
                                },
                                afterFirstRender: function(a, b) {
                                    b.eobj.reco.loadingContents.hide();
                                    b.eobj.reco.existItem.show();
                                    b.eobj.reco.itemsDisplay.show();
                                    b.eobj.reco.frame.show()
                                }
                            }
                        });
                        b.addImpressionCode(b.settings.common.impdisp);
                        b.RAT.send()
                    },
                    addImpressionCode: function(a) {
                        return i[b.settings.common.impvar] === k || "" == a ?
                            "" : i[b.settings.common.impvar] = a
                    },
                    editItemName: function(a, b) {
                        return c.RJS_Helpers.omitStr(a, b, "��")
                    },
                    editItemPrice: function(a) {
                        return "number" === typeof a ? (a + "").replace(/(\d)(?=(?:\d\d\d)+$)/g, "$1,") : ""
                    },
                    editImageUrl: function(a, b) {
                        return a ? c.RJS_Helpers.urlParameter(a, {
                            _ex: b
                        }) : ""
                    },
                    editItemUrl: function(a, b, e) {
                        "" != b && (a = e ? c.RJS_Helpers.urlR2Parameter(a, {
                            "s-id": b
                        }, !1) : c.RJS_Helpers.urlParameter(a, {
                            "s-id": b
                        }, !1));
                        return a
                    },
                    editDiscountType: function(a) {
                        return ["��", "%", "P", "��"][a - 1] || ""
                    },
                    editShopUrl: function(a) {
                        return "http://www.rakuten.co.jp/" +
                            a + "/"
                    },
                    editShopImage: function(a, b) {
                        return '<img src="' + a + '" alt="' + b + '">'
                    },
                    RAT: {
                        pData: {},
                        setCommonParams: function(a) {
                            if (null != a) b.RAT.pData.sq = a;
                            if ("" !== b.settings.common.ratpagetype) b.RAT.pData.pgt = b.settings.common.ratpagetype
                        },
                        setItemParams: function(a) {
                            for (var d = [], c = 0; a.length > c; c++) d.push(a[c].shop_id + "/" + a[c].item_id);
                            b.RAT.pData.itemid = d;
                            if (a[0] && null != a[0].sc_clid) b.RAT.pData.cc = a[0].sc_clid
                        },
                        send: function() {
                            c(function() {
                                var a = i.RAT,
                                    c = b.settings.common;
                                a && "function" === typeof a.addCustomEvent &&
                                    a.addCustomEvent({
                                        accountId: c.rataccountid,
                                        serviceId: c.ratserviceid,
                                        options: c.ratoptions.split(","),
                                        pData: b.RAT.pData
                                    })
                            })
                        }
                    }
                })
            };
        c("#smart-coupon").find("div.smart-coupon-slideshow-display").each(function() {
            (new o(c(this))).initialize()
        })
    }
})(this);