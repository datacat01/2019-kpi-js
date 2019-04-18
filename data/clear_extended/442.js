/*
 buy_again-1.2.0.js
 Copyright (c) 2018 Rakuten.Inc
 Date: 2018-03-23 15:25:55
*/

"function" == typeof Rmodules.define && Rmodules.define(["jQuery", "R^1", "R.api^1", "R.ui^1"], function(a, b) {
    "use strict";

    function c() {
        j = a(".buyagain-recommend-widget-container"), i = a(".buyagain-recommend-widget"), i.length && (k = function() {
                var c = i.find(".buyagain-recommend-settings"),
                    d = {
                        global: b.readSettings(c, m.global),
                        css: b.readSettings(c.find(".buyagain-recommend-settings-css"), m.css),
                        recommend: b.readApiSettings(c.find(".buyagain-recommend-settings-recommend"), m.recommend)
                    };
                return d.updater = b.readSettings(a(d.css.updaterConfigSelector), m.updater), void 0 === d.global.mobile && (d.global.mobile = b.browser.isMobile || b.browser.isIchibaApp), d.global.sid || (b.browser.isIchibaApp ? d.global.sid = "buyagain_app" : d.global.mobile ? d.global.sid = "buyagain_sp" : d.global.sid = "buyagain_pc"), d.global.rat || (b.browser.isIchibaApp ? d.global.rat = "buyagain-app" : d.global.mobile ? d.global.rat = "buyagain-sp" : d.global.rat = "buyagain-pc"), d.recommend.encoding = b.api.itemRecommendation.Encoding.EUC_JP, d
            }(),
            l = i.find(k.css.itemTemplateSelector).removeClass(k.css.itemTemplateSelector.substring(1)).remove())
    }

    function d(a, c) {
        var d, e, f, g = [],
            h = k.global,
            i = h.maxItems ? Math.min(h.maxItems, a.length) : a.length;
        for (e = 0; e < i; e++) d = a[e], f = b.getTrackingLinks(d.getItemUrl(), h), c.tracking_tag && (f = b.addUrlParams(f, {
            rtg: c.tracking_tag
        })), g.push({
            "#ITEM_NAME#": b.truncate(d.getItemName(), h.itemNameMaxLength, b.enums.Html.ELLIPSIS).split("").join(b.enums.Html.INV_LINE_SPLIT),
            "#ITEM_URL#": f,
            "#ITEM_IMG#": d.getItemImageUrl(h.itemWidth, h.itemHeight),
            "#ITEM_PRICE#": b.display.formatPrice(d.getItemPrice()),
            "#ITEM_POINT_PERCENTAGE#": parseInt(d.getItemPointBackPercentage(), 10) + (k.updater["data-pointuprate"] || 0)
        });
        return {
            itemWidth: parseInt(l.attr("width"), 10) || h.itemWidth,
            itemTemplate: {
                html: l.html(),
                data: g
            }
        }
    }

    function e(a, c) {
        var d, e, f = [],
            g = k.global,
            h = g.maxItems ? Math.min(g.maxItems, a.length) : a.length;
        if (g.rat) {
            for (d = 0; d < h; d++) f.push(a[d].getShopId() + "/" + a[d].getItemId());
            e = {
                accountId: g.ratAccId,
                serviceId: g.ratServiceId,
                options: ["url", "ua"],
                pData: {
                    pgn: g.rat,
                    ritemid: f,
                    rpl: k.recommend.sid,
                    pgt: g.pageType
                }
            }, c.tracking_tag && (e.pData.rtg = c.tracking_tag), c.rpp && (e.pData.rpp = c.rpp), b.sendToRat(e)
        }
    }

    function f(c, f) {
        function g(b, d) {
            var g = b.getElements(d || 0),
                h = [g[0], g[g.length - 1] + 1],
                i = h.join(","); - 1 === a.inArray(i, o) && (e(c, a.extend({}, {
                rpp: h
            }, f)), o.push(i))
        }
        var h, j = i.find(k.css.slideshowSelector),
            l = d(c, f),
            m = k.global;
        h = {
            hideOnEmpty: i,
            hideOnMin: m.minItems,
            imageLazyLoad: "data-src"
        }, h.afterFirstRender = function(a, b) {
            m.pagination ? g(a, b) : e(c, f)
        }, m.pagination ? h.onScrollEnd = g : (h.noPagination = !0, h.scrollMode = b.ui.Slideshow.ScrollMode.SIMPLE), m.mobile && (h = a.extend(!0, b.ui.Slideshow.getSpOptions(), h)), new b.ui.Slideshow(j.show(), l, h)
    }

    function g() {
        k || c(), k && k.global.enabled && h()
    }

    function h() {
        b.user.isLogged(k.global.userLogin) && b.onLazyLoad(function() {
            b.offLazyLoad(n), b.api.itemRecommendation.loadUserBasedRecommendedItems(k.recommend).done(f)
        }, n, j)
    }
    var i, j, k, l, m = {
            global: {
                enabled: [!0, "bool"],
                waitDom: [!1, "bool"],
                itemWidth: [130, "int"],
                itemHeight: [130, "int"],
                itemNameMaxLength: [42, "int"],
                minItems: [2, "int"],
                maxItems: [void 0, "int"],
                userLogin: [void 0, "bool"],
                mobile: [void 0, "bool"],
                sid: [void 0, "str"],
                rat: [void 0, "str"],
                ratAccId: [470, "int"],
                ratServiceId: [1, "int"],
                pageType: ["event", "str"],
                pagination: [!0, "bool"]
            },
            css: {
                updaterConfigSelector: ["#RJSSDBuyAgainAdsUpdaterConfig div", "str"],
                slideshowSelector: [".buyagain-recommend-slideshow"],
                itemTemplateSelector: [".buyagain-recommend-item-template"]
            },
            recommend: {
                sid: [void 0, "str"],
                genre: [void 0, "int"]
            },
            updater: {
                "data-pointuprate": [0, "int"]
            }
        },
        n = "lazilyLoadSlideshow",
        o = [];
    c(), !k || k.global.waitDom ? a(g) : g()
});