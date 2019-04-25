/*
 ashiato_multireco-1.5.0.js
 Copyright (c) 2017 Rakuten.Inc
 Date: 2017-09-11 14:19:08
*/

! function(a, b, c) {
    "use strict";
    if (void 0 !== b) {
        b.noConflict();
        var d = b;
        if (d.RJS_Helpers && d().RJS_Slideshow) {
            (new function() {
                var b = this;
                d.extend(b, {
                    settings: {
                        common: {
                            noready: [0, "Int", "^[0-1]$"],
                            pagespeed: [100, "Range", "0,9999"],
                            opacityspeed: [100, "Range", "0,9999"],
                            autoslidetime: [2, "Range", "1,99"],
                            autoslideflag: ["next", "Str", "^(next|prev)$"],
                            autoslide: [0, "Int", "^[0-1]$"],
                            autoresize: [1, "Int", "^[0-1]$"],
                            impvar: ["", "Str", "^[a-zA-Z0-9_]{3,64}$"],
                            impdisp: ["", "Str", "^[a-zA-Z0-9_]{3,64}$"],
                            impnodisp: ["", "Str", "^[a-zA-Z0-9_]{3,64}$"],
                            verticalmode: [0, "Int", "^[1]$"],
                            ajaxtimer: [3, "Range", "1,99"],
                            recothreshold: [5, "Int", "^[1-9]$"],
                            rankingshuffle: [1, "Int", "^[0-1]$"],
                            requestwait: [500, "Range", "1,9999"],
                            checkinterval: [100, "Range", "1,9999"],
                            genrefilter: ["551169", "Str", "^[0-9,]{1,69}$"],
                            showonnodata: [0, "Int"]
                        },
                        ashiato: {
                            imagesize: ["80x80", "Str", "^[1-9][0-9]{1,2}[x:][1-9][0-9]{1,2}"],
                            omitname: [26, "Range", "0,100"],
                            maxitem: [1, "Int", "^[1-9]$"],
                            url: ["", "Str", "^(https?:)?//(?:[a-zA-Z0-9_\\-]+\\.)+rakuten\\.co\\.jp\\/[a-zA-Z0-9_&=\\?\\-\\.%:\\/]+$"],
                            sid: ["", "Str", "^[a-zA-Z0-9_\\-]{3,64}$"]
                        },
                        reco: {
                            imagesize: ["80x80", "Str", "^[1-9][0-9]{1,2}[x:][1-9][0-9]{1,2}"],
                            omitname: [26, "Range", "0,100"],
                            maxitem: [3, "Int", "^[1-9]$"],
                            url: ["", "Str", "^(https?:)?//(?:[a-zA-Z0-9_\\-]+\\.)+rakuten\\.co\\.jp\\/[a-zA-Z0-9_&=\\?\\-\\.%:\\/]+$"],
                            sid: ["", "Str", "^[a-zA-Z0-9_\\-]{3,64}$"]
                        },
                        ranking: {
                            url: ["", "Str", "^(https?:)?//(?:[a-zA-Z0-9_\\-]+\\.)+rakuten\\.co\\.jp\\/[a-zA-Z0-9_&=\\?\\-\\.%:\\/]+$"],
                            genrelayer: [2, "Int", "^[1-9]$"],
                            sid: ["", "Str", "^[a-zA-Z0-9_\\-]{3,64}$"]
                        }
                    },
                    eobj: {
                        common: {
                            config: d("#ashiatoRecoCommonConfig"),
                            existItem: d("#ashiatoRecoExistItemDisplay"),
                            altContents: d("#ashiatoRecoAlteredContents"),
                            recoSlider: d("#ashiatoRecoRecoSlider"),
                            loading: d("#ashiatoRecoLoading")
                        },
                        ashiato: {
                            config: d("#ashiatoRecoAshiatoConfig"),
                            prevButton: d("#ashiatoRecoCheckPrevButton"),
                            nextButton: d("#ashiatoRecoCheckNextButton"),
                            proto: d("#prototypeAshiatoRecoAshiatoItem"),
                            itemsDisplay: d("#ashiatoRecoAshiatoItemDisplay")
                        },
                        reco: {
                            config: d("#ashiatoRecoRecoConfig"),
                            prevButton: d("#ashiatoRecoPrevButton"),
                            nextButton: d("#ashiatoRecoNextButton"),
                            proto: d("#prototypeAshiatoRecoRecoItem"),
                            itemsDisplay: d("#ashiatoRecoRecoItemsDisplay"),
                            altContents: d("#ashiatoRecoRecoAlteredContents")
                        },
                        ranking: {
                            config: d("#ashiatoRecoRankingConfig")
                        }
                    },
                    status: {
                        error: !1,
                        isTimeout: !1
                    },
                    props: {
                        ashiato: {
                            items: [],
                            proto: {
                                html: "",
                                height: 0,
                                width: 0,
                                identifiers: {
                                    itemurl: ["", /\#ITEMURL\#/g, ""],
                                    imageele: ['<img src="#ITEMIMGURL#" alt="#ITEMIMGALT#" title="#ITEMIMGTITLE#">', /\#ITEMIMGELE\#/g, ""],
                                    imageurl: ["", /\#ITEMIMGURL\#/g, ""],
                                    imagealt: ["", /\#ITEMIMGALT\#/g, ""],
                                    imagetitle: ["", /\#ITEMIMGTITLE\#/g, ""],
                                    itemname: ["", /\#ITEMNAME\#/g, ""],
                                    itemprice: ["", /\#ITEMPRICE\#/g, ""]
                                }
                            }
                        },
                        reco: {
                            items: [],
                            visitedPages: [],
                            proto: {
                                html: "",
                                height: 0,
                                width: 0,
                                identifiers: {
                                    itemurl: ["", /\#ITEMURL\#/g, ""],
                                    imageele: ['<img src="#ITEMIMGURL#" alt="#ITEMIMGALT#" title="#ITEMIMGTITLE#">', /\#ITEMIMGELE\#/g, ""],
                                    imageurl: ["", /\#ITEMIMGURL\#/g, ""],
                                    imagealt: ["", /\#ITEMIMGALT\#/g, ""],
                                    imagetitle: ["", /\#ITEMIMGTITLE\#/g, ""],
                                    itemname: ["", /\#ITEMNAME\#/g, ""],
                                    itemprice: ["", /\#ITEMPRICE\#/g, ""]
                                }
                            }
                        },
                        currentAshiatoIndex: !1,
                        requestPermission: !0,
                        requestPermissionTimer: null,
                        checkWaitInterval: null,
                        initialized: !1
                    },
                    initialize: function() {
                        if (!b.loadSettings()) return void b.displayDefaultContents();
                        1 == b.settings.noReady ? b.begin() : d(document).ready(function() {
                            b.begin()
                        })
                    },
                    loadSettings: function() {
                        return b.eobj.ashiato.proto.hide(), b.eobj.reco.proto.hide(), b.settings.common = d.RJS_Helpers.readAttr(b.eobj.common.config, b.settings.common), b.settings.ashiato = d.RJS_Helpers.readAttr(b.eobj.ashiato.config, b.settings.ashiato), b.settings.reco = d.RJS_Helpers.readAttr(b.eobj.reco.config, b.settings.reco), b.settings.ranking = d.RJS_Helpers.readAttr(b.eobj.ranking.config, b.settings.ranking),
                            d.extend(b.settings.ashiato, b.settings.common, b.settings.ashiato), d.extend(b.settings.reco, b.settings.common, b.settings.reco), b.settings.ashiato.autoslide = 0, b.settings.ashiato.maxitem = 1, b.settings.reco.autoslide = 0,
                            !("" == b.settings.ashiato.url || b.settings.ashiato.url.length > 512) && (!("" == b.settings.reco.url || b.settings.reco.url.length > 512) && (!("" == b.settings.ranking.url || b.settings.ranking.url.length > 512) && (0 !== b.eobj.ashiato.proto.length && (0 !== b.eobj.reco.proto.length && (b.settings.common.autoslidetime *= 1e3, b.settings.common.ajaxtimer *= 1e3, b.eobj.common.config.remove(), b.eobj.ashiato.config.remove(), b.eobj.reco.config.remove(), !0)))))
                    },
                    displayDefaultContents: function(a) {
                        b.eobj.ashiato.proto.remove(),
                            b.eobj.reco.proto.remove(), b.eobj.common.altContents.show(), b.eobj.common.existItem.remove(), a && b.regImpressionCode(a)
                    },
                    displayRecoDefaultContents: function() {
                        b.eobj.common.loading.hide(), b.eobj.common.recoSlider.hide(), b.eobj.reco.altContents.show()
                    },
                    displayRecoLoading: function() {
                        b.eobj.reco.altContents.hide(), b.eobj.common.altContents.hide(), b.eobj.common.recoSlider.hide(), b.eobj.common.existItem.show(), b.eobj.common.loading.show()
                    },
                    begin: function() {
                        b.getAshiatoData()
                    },
                    getAshiatoData: function() {
                        function a(a) {
                            if (b.status.isTimeout) return b.displayDefaultContents(), !1;
                            if (clearTimeout(c), void 0 === a.code || void 0 === a.num) return b.displayDefaultContents(), !1;
                            if ("0" != a.code) return "1" != a.code && "8" != a.code || b.regImpressionCode(b.settings.common.impnodisp), b.displayDefaultContents(), !1;
                            if (a.items.length < 1) return b.displayDefaultContents(b.settings.common.impnodisp), !1;
                            for (var d = 0; d < a.items.length; d++) /^https?:\/\/item.rakuten.co.jp/.test(a.items[d].itemurlfull) && b.props.ashiato.items.push({
                                itemname: b.editItemname(a.items[d].itemname, b.settings.ashiato.omitname),
                                itemprice: b.editItemprice(a.items[d].itemprice),
                                itemurl: b.editItemurl(a.items[d].itemurlfull, b.settings.ashiato.sid),
                                imageele: "",
                                imageurl: "" != a.items[d].imageurl ? b.editImageurl(a.items[d].imageurl, b.settings.ashiato.imagesize) : a.items[d].imageurl64,
                                imagealt: b.editItemname(a.items[d].itemname, b.settings.ashiato.omitname),
                                imagetitle: b.editItemname(a.items[d].itemname, b.settings.ashiato.omitname),
                                mngnumber: a.items[d].mngnumber,
                                shopurl: a.items[d].shopurl,
                                itemid: a.items[d].itemid,
                                shopid: a.items[d].shopid,
                                genreidlist: a.items[d].genreidlist
                            });
                            return 0 === b.eobj.ashiato.proto.length ? (b.displayDefaultContents(), !1) : (b.props.ashiato.proto.width = b.eobj.ashiato.proto.outerWidth(), b.props.ashiato.proto.height = b.eobj.ashiato.proto.outerHeight(),
                                b.props.ashiato.proto.html = b.eobj.ashiato.proto.html(), "" == b.props.ashiato.proto.html ? (b.displayDefaultContents(), !1) : (b.eobj.ashiato.proto.remove(), b.eobj.ashiato.itemsDisplay.RJS_Slideshow(b, {
                                        settings: b.settings.ashiato,
                                        itemPrototype: b.props.ashiato.proto,
                                        eobj: b.eobj.ashiato,
                                        items: b.props.ashiato.items,
                                        events: {
                                            beforeFirstRender: function(a, b) {
                                                b.eobj.ashiato.itemsDisplay.show()
                                            },
                                            afterSlide: function(a, b) {
                                                b.props.reco.visitedPages = [], b.getCachedRecoData(a) || b.getRecoData(a)
                                            }
                                        }
                                    }),
                                    void b.getRecoData(0)))
                        }
                        var c;
                        b.status.isTimeout = !1;
                        try {
                            c = setTimeout(function() {
                                b.status.isTimeout = !0, b.displayDefaultContents()
                            }, b.settings.common.ajaxtimer), d.ajax({
                                url: b.settings.ashiato.url,
                                cache: !1,
                                dataType: "jsonp",
                                scriptCharset: "euc-jp",
                                timeout: b.settings.common.ajaxtimer,
                                success: function(b) {
                                    a(b)
                                },
                                error: function(a, c, d) {
                                    b.displayDefaultContents()
                                }
                            })
                        } catch (a) {
                            return b.displayDefaultContents(), !1
                        }
                        return !0
                    },
                    getCachedRecoData: function(a) {
                        if (a === !1 || 0 == b.props.reco.items.length) return !1;
                        var c = b.props.reco.items[a];
                        return void 0 != c && 0 != c.length && (b.displayRecoLoading(), b.displayRecoData(a), !0)
                    },
                    getRecoData: function(a) {
                        function c(a, c) {
                            var f, g, h, i, j, k = [],
                                l = {},
                                m = [],
                                n = b.props.ashiato.items[c];
                            if (b.status.isTimeout) return !1;
                            if (clearTimeout(e), void 0 === a.status || void 0 === a.item_count) return !1;
                            if ("Success" != a.status && "NotFound" != a.status) return !1;
                            for (h = 0, g = a.item.length; h < g; h++) f = a.item[h], i = b.editItemurl(f.item_url, b.settings.reco.sid),
                                a.tracking_tag && (i = d.RJS_Helpers.urlParameter(i, {
                                    rtg: a.tracking_tag
                                }, !1)), m.push(f.shop_id + "/" + f.item_id), k.push({
                                    itemname: b.editItemname(f.item_name, b.settings.reco.omitname),
                                    itemurl: i,
                                    imageele: "",
                                    imageurl: b.editImageurl(f.image_url_80, b.settings.reco.imagesize),
                                    imagealt: b.editItemname(f.item_name, b.settings.reco.omitname),
                                    imagetitle: b.editItemname(f.item_name, b.settings.reco.omitname),
                                    itemprice: b.editItemprice(f.item_price)
                                });
                            return l.pData = {
                                    itemid: [n.shopid + "/" + n.itemid],
                                    ritemid: m
                                },
                                a.tracking_tag && (l.pData.rtg = a.tracking_tag), j = d.RJS_Helpers.urlParameter(b.settings.reco.url), j && j.sid && (l.pData.rpl = j.sid), b.props.reco.items[c] = k, !(a.item_count < b.settings.common.recothreshold) && b.displayRecoData(c, l)
                        }
                        if (b.displayRecoLoading(), !b.props.requestPermission) return clearInterval(b.props.checkWaitInterval), void(b.props.checkWaitInterval = setInterval(function() {
                            b.props.requestPermission && (clearInterval(b.props.checkWaitInterval), b.getRecoData(a))
                        }, b.settings.common.checkinterval));
                        var e;
                        b.status.isTimeout = !1;
                        try {
                            e = setTimeout(function() {
                                b.status.isTimeout = !0, b.getRankingData(a)
                            }, b.settings.common.ajaxtimer);
                            var f = b.props.ashiato.items[a];
                            d.ajax({
                                url: b.settings.reco.url,
                                cache: !1,
                                dataType: "jsonp",
                                data: {
                                    item_id: f.shopid + "_" + f.itemid
                                },
                                scriptCharset: "euc-jp",
                                timeout: b.settings.common.ajaxtimer,
                                success: function(d) {
                                    c(d, a) || b.getRankingData(a)
                                },
                                error: function(c, d, e) {
                                    b.getRankingData(a)
                                }
                            })
                        } catch (c) {
                            return b.getRankingData(a), !1
                        }
                        return !0
                    },
                    getRankingData: function(a) {
                        function c(a, c) {
                            if (b.status.isTimeout) return !1;
                            if (clearTimeout(e), void 0 === a.status || void 0 === a.num) return !1;
                            if ("Success" != a.status && "GenreNotFound" != a.status) return !1;
                            if (a.num < b.settings.common.recothreshold) return b.regImpressionCode(b.settings.common.impnodisp), !1;
                            for (var f = b.props.ashiato.items[c], g = [], h = 0; h < a.items.length; h++) {
                                var i = (/R2=([^\&]+)/.exec(a.items[h].itemurl) || [])[1],
                                    j = !0;
                                void 0 === i && /^https?:\/\/item.rakuten.co.jp/.test(a.items[h].itemurl) && (j = !1, i = a.items[h].itemurl),
                                    void 0 !== i && (b.endsWith(i, f.shopurl + "/" + f.mngnumber + "/") || g.push({
                                        itemname: b.editItemname(a.items[h].itemname, b.settings.reco.omitname),
                                        itemurl: b.editItemurl(a.items[h].itemurl, b.settings.ranking.sid, j),
                                        imageele: "",
                                        imageurl: b.editImageurl(a.items[h].imageurl64, b.settings.reco.imagesize),
                                        imagealt: b.editItemname(a.items[h].itemname, b.settings.reco.omitname),
                                        imagetitle: b.editItemname(a.items[h].itemname, b.settings.reco.omitname),
                                        itemprice: b.editItemprice(a.items[h].price)
                                    }))
                            }
                            return g.length < b.settings.common.recothreshold ? (b.regImpressionCode(b.settings.common.impnodisp), !1) : (1 === b.settings.common.rankingshuffle && (g = b.shuffle(g)), void 0 == b.props.reco.items[c] && (b.props.reco.items[c] = []), b.props.reco.items[c] = d.merge(b.props.reco.items[c], g), b.displayRecoData(c))
                        }
                        var e;
                        b.status.isTimeout = !1;
                        try {
                            var f = b.props.ashiato.items[a],
                                g = f.genreidlist.replace(/^\//, "").split("/"),
                                h = b.settings.common.genrefilter.split(",");
                            for (var i in h)
                                if (d.inArray(h[i], g) != -1) return b.props.initialized = !0, b.props.reco.items[a].length > 0 ? b.displayRecoData(a) : b.displayRecoDefaultContents(), b.props.requestPermission = !1, b.props.requestPermissionTimer = setTimeout(function() {
                                    b.props.requestPermission = !0
                                }, b.settings.common.requestwait), !1;
                            g = g[b.settings.ranking.genrelayer], void 0 === g && (g = 0), e = setTimeout(function() {
                                b.status.isTimeout = !0,
                                    b.props.initialized || b.settings.common.showonnodata ? b.displayRecoDefaultContents() : b.displayDefaultContents()
                            }, b.settings.common.ajaxtimer), d.ajax({
                                url: b.settings.ranking.url,
                                cache: !0,
                                dataType: "jsonp",
                                data: {
                                    gid: g
                                },
                                jsonpCallback: "jsonp0123456789012",
                                scriptCharset: "euc-jp",
                                timeout: b.settings.common.ajaxtimer,
                                success: function(d) {
                                    c(d, a) || (b.props.initialized || b.settings.common.showonnodata ? b.displayRecoDefaultContents() : b.displayDefaultContents())
                                },
                                error: function(a, c, d) {
                                    b.props.initialized || b.settings.common.showonnodata ? b.displayRecoDefaultContents() : b.displayDefaultContents()
                                }
                            })
                        } catch (a) {
                            return b.props.initialized || b.settings.common.showonnodata ? b.displayRecoDefaultContents() : b.displayDefaultContents(), !1
                        }
                        return !0
                    },
                    displayRecoData: function(a, c) {
                        function e(a) {
                            var e;
                            c && d.inArray(a, b.props.reco.visitedPages) === -1 && (e = d.extend({}, c), e.pData.rpp = a, b.sendToRAT(e), b.props.reco.visitedPages.push(a))
                        }
                        return 0 !== b.eobj.reco.proto.length && (b.props.reco.proto.width = b.eobj.reco.proto.outerWidth(), b.props.reco.proto.height = b.eobj.reco.proto.outerHeight(), b.props.reco.proto.html = b.eobj.reco.proto.html(), "" != b.props.reco.proto.html && (b.eobj.reco.proto.hide(), b.eobj.reco.itemsDisplay.empty(), b.eobj.reco.prevButton.find("a").unbind("click"), b.eobj.reco.nextButton.find("a").unbind("click"), b.eobj.reco.altContents.hide(), b.eobj.common.loading.hide(), b.eobj.common.recoSlider.show(),
                            b.regImpressionCode(b.settings.common.impdisp), b.eobj.reco.itemsDisplay.RJS_Slideshow(b, {
                                settings: b.settings.reco,
                                itemPrototype: b.props.reco.proto,
                                eobj: b.eobj.reco,
                                items: b.props.reco.items[a],
                                events: {
                                    beforeFirstRender: function(a, b) {
                                        b.props.initialized = !0, b.eobj.reco.itemsDisplay.show()
                                    },
                                    afterFirstRender: function(a, b) {
                                        var c = b.eobj.reco.itemsDisplay.children().first().find(">div").length;
                                        b.props.requestPermission = !1, b.props.requestPermissionTimer = setTimeout(function() {
                                            b.props.requestPermission = !0
                                        }, b.settings.common.requestwait), e("[0, " + c + "]")
                                    },
                                    afterSlide: function(a, b) {
                                        e("[" + a + ", " + (a + b.eobj.reco.itemsDisplay.children().first().find(">div").length) + "]")
                                    }
                                }
                            }), !0))
                    },
                    regImpressionCode: function(c) {
                        return void 0 === a[b.settings.common.impvar] || "" == c ? "" : a[b.settings.common.impvar] = c
                    },
                    sendToRAT: function(b) {
                        var c = {
                            accountId: 470,
                            serviceId: 1,
                            options: ["url", "ua"],
                            pData: {
                                sid: "ichiba",
                                pgn: "top_page",
                                pgt: "top",
                                evn: "reco"
                            }
                        };
                        b && (c = d.extend(!0, {}, c, b)), d(document).ready(function() {
                            a.RAT && "function" == typeof RAT.addCustomEvent && a.RAT.addCustomEvent(c)
                        })
                    },
                    shuffle: function(a) {
                        for (var b = Array.apply(null, a), c = b.length; c;) {
                            var d = Math.floor(Math.random() * c),
                                e = b[--c];
                            b[c] = b[d], b[d] = e
                        }
                        return b
                    },
                    endsWith: function(a, b) {
                        var c = a.length - b.length;
                        return c >= 0 && a.lastIndexOf(b) === c
                    },
                    editItemname: function(a, b) {
                        return a = d.RJS_Helpers.omitStr(a, b, "\u2026"), d.browser.msie || (a = a.split("").join(String.fromCharCode(8203))), a
                    },
                    editItemprice: function(a) {
                        return "" != a && void 0 !== a ? String(a).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") : a
                    },
                    editImageurl: function(a, b) {
                        return "" != a && (a = d.RJS_Helpers.urlParameter(a, {
                            _ex: b.replace(":", "x"),
                            fitin: b.replace("x", ":")
                        })), a
                    },
                    editItemurl: function(a, b, c) {
                        return "" != b && (a = c ? d.RJS_Helpers.urlR2Parameter(a, {
                            "s-id": b
                        }, !1) : d.RJS_Helpers.urlParameter(a, {
                            "s-id": b
                        }, !1)), a
                    }
                })
            }).initialize()
        }
    }
}(this, window.jQuery);