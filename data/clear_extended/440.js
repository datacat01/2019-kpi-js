/*
 ppf-3.2.0.js
 Copyright (c) 2018 Rakuten.Inc
 Date: 2018-12-14 18:38:40
*/

"function" == typeof Rmodules.define && Rmodules.define("R.api.top.wrapped", "1.0.0", ["jQuery", "R^1", "R.api^1", "R.api.top^1"], function(a, b, c) {
    return function(b) {
        "use strict";
        b.api.ppfBanner = {
            StatusCode: {
                SUCCESS: 91,
                NO_DATA: 92,
                MAINTENANCE: 81,
                ERROR: 11,
                PARAMETER_ERROR: 21
            },
            TargetPage: {
                PC_TOP: 2,
                SP_TOP: 4
            },
            DeviceType: {
                PC: "pc",
                SP: "sp",
                SPI: "spi",
                TABI: "tabi",
                TABA: "taba",
                SPIA: "spia",
                SPAA: "spaa",
                TABIA: "tabia",
                TABAA: "tabaa"
            },
            ChannelType: {
                WEB: "web",
                MAIL: "mail"
            }
        };
        var c = {
            source_id: 2,
            device_type: b.api.ppfBanner.DeviceType.PC,
            channel_type: b.api.ppfBanner.ChannelType.WEB
        };
        b.api.ppfBanner.ResponseData = function(c) {
                this._data = {
                    statusCode: c.s,
                    revision: c.r
                };
                var d, e, f = {},
                    g = c.c || [];
                a.each(g, function(c, g) {
                    f[g.i] = [], d = g.c || [], a.each(d, function(a, c) {
                        e = b.getUrlParams(c.l), f[g.i].push({
                            landingUrl: c.l,
                            bannerUrl: c.b,
                            altString: c.a,
                            offerId: e.ppo,
                            contentId: e.ppc
                        })
                    })
                }), this._data.items = f
            }, b.api.ppfBanner.ResponseData.prototype.getStatusCode = function() {
                return this._data.statusCode
            },
            b.api.ppfBanner.ResponseData.prototype.getRevision = function() {
                return this._data.revision
            }, b.api.ppfBanner.ResponseData.prototype.getItems = function(a) {
                return this._data.items[a] || []
            }, b.api.ppfBanner.ResponseData.prototype.getTargetId = function() {
                return this._data.targetId
            }, b.api.ppfBanner.loadBannerItems = function(d, e) {
                var f = a.Deferred(),
                    g = {};
                for (var h in c) g[h] = e && e.hasOwnProperty(h) ? e[h] : c[h];
                var i = b.extendApiSettings({
                    url: "https://scview-content-high.api.rakuten.co.jp/eh-cont/v2/ichiba",
                    data: g
                }, d || {});
                return b.requestData(i).fail(f.reject).done(function(a) {
                    return a && a.s === b.api.ppfBanner.StatusCode.SUCCESS ? f.resolve(new b.api.ppfBanner.ResponseData(a)) : f.reject(a)
                }), f.promise()
            }
    }(b), c
}), "function" == typeof Rmodules.define && Rmodules.define(["jQuery", "R^1", "R.ui^1", "R.api.top.wrapped^1"], function(a, b) {
    "use strict";

    function c() {
        var c;
        a(B.config.configSelector).each(function(d, e) {
            var f, g, h, i, j = a(e.innerHTML);
            if (j.length) {
                switch (f = function() {
                    var a = j.find(B.config.settingsSelector);
                    return {
                        global: b.readSettings(a, B.global),
                        api: b.readApiSettings(a, B.api),
                        rat: b.readSettings(a, B.rat),
                        shisa: b.readSettings(a, B.shisa),
                        mock: b.readApiSettings(a.find(B.config.mockSettingsSelector))
                    }
                }(), f.api.deviceType) {
                    case b.api.ppfBanner.DeviceType.TABA:
                    case b.api.ppfBanner.DeviceType.TABAA:
                    case b.api.ppfBanner.DeviceType.TABI:
                    case b.api.ppfBanner.DeviceType.TABIA:
                        f.global.itemWidth = A, h = u.TB, i = z;
                        break;
                    default:
                        f.api.deviceType = b.api.ppfBanner.DeviceType.PC, h = u.PC, i = f.api.deviceType.toUpperCase()
                }
                f.global.device = h, f.rat.ratPageType = i, a.map(f.global.defaultContent, function(a, c) {
                    var d;
                    a.altString = a.altString || a.a, a.bannerUrl = a.bannerUrl || a.b, a.landingUrl = a.landingUrl || a.l, a.offerId && a.contentId || (d = b.getUrlParams(a.landingUrl), a.offerId = d.ppo, a.contentId = d.ppc)
                }), D = D || f.global.waitDom, window.Shisa && f.shisa.shisaEnabled && (c = {}, f.shisa.shisaUrl && (c.url = f.shisa.shisaUrl), f.shisa.shisaGroup && (c.group = f.shisa.shisaGroup),
                    f.shisa.shisaSendPercentage && (c.sendPercentage = f.shisa.shisaSendPercentage), g = new window.Shisa(c)), C.push({
                    $config: j,
                    options: f,
                    shisa: g
                })
            }
        })
    }

    function d() {
        0 === C.length && c(), e()
    }

    function e() {
        a.each(C, function(c, d) {
            d.options.global && d.options.global.enabled && b.api.ppfBanner.loadBannerItems(a.extend({}, d.options.mock), {
                device_type: d.options.api.deviceType,
                source_id: d.options.api.sourceId,
                channel_type: d.options.api.channelType
            }).fail(function(a) {
                var b, c = x.API_ERROR_MESSAGE;
                a.code && (c += " [" + a.code + "]"), c += " on " + d.options.global.target, a.message && (c += " (" + a.message + ")"), b = {
                    fileUrl: x.FILE_URL,
                    type: x.API_ERROR_TYPE,
                    msg: c
                }, r(d.shisa, b)
            }).done(function(a) {
                s = a
            }).always(function() {
                f(d)
            })
        })
    }

    function f(b) {
        var c = s && s.getItems(b.options.global.targetId);
        if (!c || 0 === c.length) {
            if (!b.options.global.defaultContent) return;
            c = b.options.global.defaultContent
        }
        b.items = c.slice(0, b.options.global.maxItems || c.length),
            b.options.global.mode === t.SLIDESHOW || b.options.global.mode === t.BIGBANNER ? g(b.items, a(b.options.global.target).html(b.$config.find(B.config.slideshowTemplateSelector).html()).show(), a(b.$config.find(B.config.slideshowItemTemplateSelector)).remove(), b.options) : h(b.items, b.$config.find(B.config.bannerItemTemplateSelector).html(), b.options)
    }

    function g(a, c, d, e) {
        var f;
        return e.global.device === u.TB && (c.addClass(B.css.tabletClass), f = 2), new b.ui.Slideshow(c, l(j(a, f), d, e), m(c, a, e))
    }

    function h(c, d, e) {
        var f = "";
        d && (a.map(c, function(a, c) {
            f += b.applyTemplate(d, k(a))
        }), a(e.global.target).html(f).show(), b.imageLazyLoad(a(e.global.target)), p(v.APPEAR, e))
    }

    function i(b, c) {
        var d, e, f = [],
            g = 0;
        if (a.each(b, function(b, e) {
                d = a.extend(d, k(e, "_" + g)), (g += 1) === c && (f.push(d), d = {}, g = 0)
            }), !a.isEmptyObject(d)) {
            for (e = 0; g < c; e += 1, g += 1) d = a.extend(d, k(b[e], "_" + g));
            f.push(d)
        }
        return f
    }

    function j(b, c) {
        return c > 1 ? i(b, c) : a.map(b, function(a, b) {
            return k(a)
        })
    }

    function k(a, b) {
        var c = {};
        return b = b || "",
            c["#ALT_STRING" + b + "#"] = a.altString, c["#BANNER_URL" + b + "#"] = a.bannerUrl, c["#LANDING_URL" + b + "#"] = a.landingUrl, c
    }

    function l(a, b, c) {
        return {
            itemWidth: parseInt(b.attr("width"), 10) || c.global.itemWidth,
            itemTemplate: {
                html: b.html(),
                data: a
            }
        }
    }

    function m(c, d, e) {
        return a.extend({}, b.ui.Slideshow.getPcOptions(), {
            hideOnEmpty: c,
            onScrollEnd: function(a, b, c) {
                n(a, d, e, v.IMPRESSION)
            },
            afterFirstRender: function(a, b, c) {
                n(a, d, e, v.APPEAR)
            },
            onResize: function(a, b, c) {
                n(a, d, e, v.RESIZE)
            },
            onOrientationChange: function(a, b, c) {
                n(a, d, e, v.RESIZE)
            },
            autoScroll: e.global.autoPlay,
            autoScrollDelay: e.global.autoPlayDelay,
            autoScrollPauseOnBg: e.global.autoPlayPauseOnBg,
            autoScrollPauseOnHover: e.global.autoPlayPauseOnHover
        }, y[e.global.mode])
    }

    function n(a, b, c, d) {
        o(d, c, b, a.getVisibleIndexes())
    }

    function o(a, b, c, d, e) {
        q(t.SLIDESHOW, a, b, c, d, e)
    }

    function p(a, b) {
        q(t.BANNER, a, b)
    }

    function q(c, d, e, f, g, h) {
        var i = d === v.CLICK ? w.CLICK : w.IMPRESSION,
            j = [],
            k = [],
            l = {
                pgn: e.rat.ratPageName,
                pgl: e.rat.ratPageType
            },
            m = {},
            n = {
                eventType: d,
                accountId: e.rat.ratAccountId,
                serviceId: e.rat.ratServiceId
            };
        e.rat.ratComponent && (l.compid = [e.rat.ratComponent]), n.pData = l, e.rat.ratWidget && (m.widget = e.rat.ratWidget), c === t.SLIDESHOW && (a.each(g, function(a, b) {
                void 0 !== f[b] && (j.push(f[b].offerId), k.push(f[b].contentId))
            }), m.targeting = e.global.targetId, m.device = e.api.deviceType, m.channel = e.api.channelType, m.source = e.api.sourceId, m.kpi_type = i, m.page_layer = e.rat.ratLayer, m.positions = g, m.offers = j, m.contents = k, n.options = ["url", "ua"]), n.cpData = m,
            b.sendToRat(n, h, e.rat.ratTimeout)
    }

    function r(a, b) {
        a && a.log(b)
    }
    var s, t = {
            SLIDESHOW: "SLIDESHOW",
            BANNER: "BANNER",
            BIGBANNER: "BIGBANNER"
        },
        u = {
            PC: 0,
            TB: 1
        },
        v = {
            APPEAR: "appear",
            CLICK: "click",
            IMPRESSION: "imp",
            LANDING: "landing",
            RESIZE: "resize"
        },
        w = {
            CLICK: "click",
            IMPRESSION: "imp"
        },
        x = {
            API_ERROR_TYPE: "PpfApiError",
            API_ERROR_MESSAGE: "PPF API error",
            FILE_URL: "ppf.js"
        },
        y = {
            SLIDESHOW: {
                itemStyle: b.ui.Slideshow.ItemStyle.FLOW,
                itemsPerPage: void 0,
                scrollEffect: b.ui.Slideshow.ScrollEffect.ALPHA
            },
            BIGBANNER: {
                itemStyle: b.ui.Slideshow.ItemStyle.FIXED,
                itemsPerPage: 1,
                scrollEffect: b.ui.Slideshow.ScrollEffect.SLIDE
            }
        },
        z = "TB",
        A = 157,
        B = {
            config: {
                configSelector: ".ppfConfig",
                slideshowTemplateSelector: ".ppfSlideshowTemplate",
                slideshowItemTemplateSelector: ".ppfSlideshowItemTemplate",
                bannerItemTemplateSelector: ".ppfBannerItemTemplate",
                settingsSelector: ".settings",
                mockSettingsSelector: ".mock"
            },
            css: {
                tabletClass: "ppf-slideshow-tb"
            },
            global: {
                enabled: [!0, "bool"],
                waitDom: [!1, "bool"],
                target: [void 0, "str"],
                targetId: [void 0, "int"],
                mode: [t.SLIDESHOW, "enumValue", t],
                autoPlay: [!1, "bool"],
                autoPlayDelay: [4e3, "int"],
                autoPlayPauseOnBg: [!0, "bool"],
                autoPlayPauseOnHover: [!0, "bool"],
                itemWidth: [170, "int"],
                maxItems: [100, "int"],
                defaultContent: [void 0, "json"]
            },
            api: {
                sourceId: [b.api.ppfBanner.TargetPage.PC_TOP, "enumValue", b.api.ppfBanner.TargetPage],
                deviceType: [b.api.ppfBanner.DeviceType.PC, "enumValue", b.api.ppfBanner.DeviceType],
                channelType: [b.api.ppfBanner.ChannelType.WEB, "enumValue", b.api.ppfBanner.ChannelType]
            },
            rat: {
                ratEnabled: [!0, "bool"],
                ratAccountId: [1088, "int"],
                ratServiceId: [b.api.browsingHistory.ServiceId.ICHIBA_TOP, "enumValue", b.api.browsingHistory.ServiceId],
                ratComponent: [void 0, "str"],
                ratWidget: [void 0, "str"],
                ratLayer: ["none", "str"],
                ratPageName: ["top", "str"],
                ratPageType: [void 0, "str"],
                ratTimeout: [void 0, "int"]
            },
            shisa: {
                shisaEnabled: [!0, "bool"],
                shisaUrl: [void 0, "str"],
                shisaGroup: [void 0, "str"],
                shisaSendPercentage: [void 0, "int"]
            }
        },
        C = [],
        D = !1;
    c(), D ? a(d) : d()
});