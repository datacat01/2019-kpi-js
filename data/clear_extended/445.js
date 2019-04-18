/*
 recommend_light_box-1.3.1.js
 Copyright (c) 2017 Rakuten.Inc
 Date: 2017-04-18 11:27:49
*/
! function(a, b, c) {
    "use strict";
    if (b !== c) {
        b.noConflict();
        var d = b;
        d.extend({
            recommend_light_box: {
                itemClicked: "",
                clickCount: 0,
                status: {
                    isTimeout: !1
                },
                identifiers: {
                    itemName: ["#ITEMNAME#"],
                    itemPrice: ["#ITEMPRICE#"],
                    shopid: ["#shopid#"],
                    itemid: ["#itemid#"],
                    index1: ["#index1#"],
                    index2: ["#index2#"],
                    index3: ["#index3#"]
                },
                settings: {
                    genrefilter: ["551169", "Str", "^[0-9,]{1,69}$"],
                    recommend_layer_url: ["", "Str", "^^(https?:)?//(?:[a-zA-Z0-9_\\-]+\\.)+rakuten\\.co\\.jp\\/[a-zA-Z0-9_&=\\?\\-\\.%:\\/]+$"],
                    lightbox_imgsize: ["160x160", "Str", "^[1-9][0-9]{1,2}[x:][1-9][0-9]{1,2}"],
                    recommend_items_number: [12, "Int", "^[0-9][0-9]$"],
                    omitname_lightbox: [63, "Range", "0,100"],
                    recommend_sid: ["", "Str", "^[a-zA-Z0-9_\\-]{3,64}$"],
                    ranking_url: ["", "Str", "^^(https?:)?//(?:[a-zA-Z0-9_\\-]+\\.)+rakuten\\.co\\.jp\\/[a-zA-Z0-9_&=\\?\\-\\.%:\\/]+$"],
                    ranking_sid: ["", "Str", "^[a-zA-Z0-9_\\-]{3,64}$"],
                    ranking_genrelayer: [1, "Int", "^[1-5]$"],
                    ajaxtimer: [3, "Range", "1,99"],
                    rankingshuffle: [1, "Int", "^[0-1]$"],
                    sc_displayed_prop18: ["", "Str", "^[a-zA-Z0-9_]{3,64}$"],
                    sc_displayed_flag: [1, "Int", "^[0-1]$"],
                    sc_relateditem_prop18: ["", "Str", "^[a-zA-Z0-9_]{3,64}$"],
                    sc_relateditem_flag: [1, "Int", "^[0-1]$"],
                    sid_clickcount_flag: [1, "Int", "^[0-1]$"],
                    recommend_shopitem_url: ["", "Str", "^^(https?:)?//(?:[a-zA-Z0-9_\\-]+\\.)+rakuten\\.co\\.jp\\/[a-zA-Z0-9_&=\\?\\-\\.%:\\/]+$"],
                    event: ["", "Str", "^[a-zA-Z0-9_]{3,64}$"],
                    eventtimer: [0, "Range", "0,9999"],
                    inshop_sid: ["", "Str", "^[a-zA-Z0-9_\\-]{3,64}$"]
                },
                eobj: {
                    config: d("#lightBoxConfig")
                },
                props: {
                    recommendLayer: {
                        items: []
                    }
                },
                initLightBox: function(a) {
                    function b(a, b, c, f, g) {
                        e.prototypeLightBox.empty(), e.loading.show(), d.recommend_light_box.openRecoPopLightBox(e, a, b, c, f, g);
                    }
                    d.recommend_light_box.settings = d.RJS_Helpers.readAttr(d.recommend_light_box.eobj.config, d.recommend_light_box.settings), d.recommend_light_box.settings.ajaxtimer = 1e3 * d.recommend_light_box.settings.ajaxtimer;
                    var c, e = {
                            lightBoxModal: d("#lightBox_ModalWindow"),
                            lightBoxDialog: d("#lightBox_DialogBox"),
                            prototypeErrorLightBox: d("#lightBox_prototypeError"),
                            prototypeLightBox: d("#lightBox_prototype"),
                            closeButtonLightBox: d("#lightBox_closeButton"),
                            closeButtonErrorLightBox: d("#lightBox_closeButtonError"),
                            loading: d("#lightBox_loading_Image"),
                            prototypeLightBoxFrame: d("#lightBox_frame")
                        },
                        f = d.recommend_light_box.settings.event;
                    d(a.eTarget).delegate(".lightBox_recommendLink", f, function() {
                        var a = d(this),
                            e = a.attr("item_id"),
                            g = a.attr("shop_id"),
                            h = a.attr("genre_id"),
                            i = a.attr("shop_url"),
                            j = a.attr("mng_number");
                        "mouseover" === f ? (clearTimeout(c), c = setTimeout(function() {
                            b(e, g, h, i, j)
                        }, d.recommend_light_box.settings.eventtimer)) : "click" === f && b(e, g, h, i, j)
                    })
                },
                openRecoPopLightBox: function(b, c, e, f, g, h) {
                    b.lightBoxModal.fadeIn(100), d.recommend_light_box.alignLightBox(),
                        d.recommend_light_box.itemClicked = "", d.recommend_light_box.clickCount = 0, b.prototypeErrorLightBox.hide(), d.recommend_light_box.disable(b), a.SC && "function" == typeof a.SC.sendSTL && "1" == d.recommend_light_box.settings.sc_displayed_flag && a.SC.sendSTL({
                            prop18: d.recommend_light_box.settings.sc_displayed_prop18
                        }), d.recommend_light_box.getRecommendDataLayer(b, c, e, f, g, h, !1, 0)
                },
                alignLightBox: function() {
                    var b = d(a).height(),
                        c = d(a).width(),
                        e = d("#lightBox_DialogBox");
                    e.css("top", b / 2 - e.height() / 2), e.css("left", c / 2 - e.width() / 2);
                },
                displayErrorMessage: function(a) {
                    return a.loading.hide(), a.prototypeErrorLightBox.show(), a.prototypeLightBox.empty(), !1
                },
                updateLinkAreaOnError: function(a, b) {
                    var c = a.prototypeLightBox.find(".lightBox_Content[index1=" + b + "]");
                    c.find(".lightBox_LinkArea").hide(), c.find(".lightBox_LinkAreaError").show()
                },
                updateItemURL: function(a) {
                    "1" == d.recommend_light_box.settings.sid_clickcount_flag && a.prototypeLightBox.find(".lightBox_Content").each(function() {
                        var a = d(this).find(".lightBox_imageEle"),
                            b = a.attr("url");
                        if (b) {
                            var c = b.lastIndexOf("_"),
                                e = b.substring(0, c + 1) + d.recommend_light_box.clickCount;
                            a.attr("url", e)
                        }
                    })
                },
                getRecommendDataLayer: function(a, b, e, f, g, h, i, j) {
                    function k(a, f, g, h, i, j, k) {
                        if (d.recommend_light_box.status.isTimeout) return !1;
                        if (clearTimeout(l), f.status === c || f.item_count === c) return d.recommend_light_box.displayErrorMessage(a), !1;
                        if ("Success" != f.status && "NotFound" != f.status) return d.recommend_light_box.displayErrorMessage(a), !1;
                        if (g && 0 === f.item.length) return d.recommend_light_box.updateLinkAreaOnError(a, h),
                            d.recommend_light_box.updateItemURL(a), !1;
                        for (var m = [], n = d.recommend_light_box.props.recommendLayer.items[0], o = 0; o < f.item.length; o++) m.push({
                            itemname: d.recommend_light_box.editItemnameLightBox(d.recommend_light_box, f.item[o].item_name),
                            itemurl: "1" == d.recommend_light_box.settings.sid_clickcount_flag ? d.recommend_light_box.editItemurl(f.item[o].item_url, d.recommend_light_box.settings.recommend_sid + "_" + d.recommend_light_box.clickCount) : d.recommend_light_box.editItemurl(f.item[o].item_url, d.recommend_light_box.settings.recommend_sid),
                            itemprice: d.recommend_light_box.editItemprice(f.item[o].item_price),
                            imageele: "",
                            imageurl: d.recommend_light_box.editImageurl(f.item[o].small_image_url, d.recommend_light_box.settings.lightbox_imgsize),
                            imagealt: d.recommend_light_box.editItemnameLightBox(d.recommend_light_box, f.item[o].item_name),
                            imagetitle: d.recommend_light_box.editItemnameLightBox(d.recommend_light_box, f.item[o].item_name),
                            shopid: f.item[o].shop_id,
                            itemid: f.item[o].item_id
                        });
                        return n != c && g && (n = n[h], m.length >= d.recommend_light_box.settings.recommend_items_number && (h < m.length ? m.splice(h, 0, n) : m[h] = n)),
                            d.recommend_light_box.props.recommendLayer.items[0] = m, m.length < d.recommend_light_box.settings.recommend_items_number ? g ? d.recommend_light_box.getShopRecommendData(a, f.item.length, g, e, b, h, n) : d.recommend_light_box.getRankingDataLayer(a, f.item.length, g, i, j, k) : d.recommend_light_box.prepareRecommendItems(a, m, g, h), !0
                    }
                    var l, m = [],
                        n = 0;
                    if (d.recommend_light_box.status.isTimeout = !1, i) {
                        if (d.recommend_light_box.itemClicked = j, m = d.recommend_light_box.props.recommendLayer.items[0], m[j] == c) return d.recommend_light_box.displayErrorMessage(a),
                            !1;
                        e = m[j].shopid, b = m[j].itemid, l = setTimeout(function() {
                            d.recommend_light_box.status.isTimeout = !0, d.recommend_light_box.updateLinkAreaOnError(a, j)
                        }, d.recommend_light_box.settings.ajaxtimer)
                    } else l = setTimeout(function() {
                        d.recommend_light_box.status.isTimeout = !0, d.recommend_light_box.displayErrorMessage(a)
                    }, d.recommend_light_box.settings.ajaxtimer);
                    try {
                        d.ajax({
                            url: d.recommend_light_box.settings.recommend_layer_url,
                            cache: !1,
                            dataType: "jsonp",
                            data: {
                                item_id: e + "_" + b
                            },
                            scriptCharset: "euc-jp",
                            timeout: d.recommend_light_box.settings.ajaxtimer,
                            success: function(b) {
                                k(a, b, i, j, f, g, h)
                            },
                            error: function(b, c, e) {
                                i ? d.recommend_light_box.updateLinkAreaOnError(a, j) : d.recommend_light_box.getRankingDataLayer(a, n, i, genreidlist, g, h)
                            }
                        })
                    } catch (o) {
                        i ? d.recommend_light_box.updateLinkAreaOnError(a, j) : d.recommend_light_box.getRankingDataLayer(a, n, i, genreidlist, g, h)
                    }
                },
                getShopRecommendData: function(a, b, e, f, g, h, i) {
                    function j(a, b, e, f, g) {
                        if (d.recommend_light_box.status.isTimeout) return !1;
                        if (clearTimeout(k), b.num === c) return 0 == e && d.recommend_light_box.updateLinkAreaOnError(a, g),
                            !1;
                        if ("0" != b.code) return 0 == e && d.recommend_light_box.updateLinkAreaOnError(a, g), !1;
                        if (0 == b.num || 0 == b.items.length) return 0 == e && d.recommend_light_box.updateLinkAreaOnError(a, g), !1;
                        var h = [],
                            i = d.recommend_light_box.settings.inshop_sid;
                        "1" == d.recommend_light_box.settings.sid_clickcount_flag && (i = d.recommend_light_box.settings.inshop_sid + "_" + d.recommend_light_box.clickCount);
                        for (var j = 0; j < b.items.length; j++) h.push({
                            itemname: d.recommend_light_box.editItemnameLightBox(d.recommend_light_box, b.items[j].itemname),
                            itemurl: d.recommend_light_box.editItemurl(b.items[j].itemurlfull, i),
                            itemprice: d.recommend_light_box.editItemprice(b.items[j].itemprice),
                            imageele: "",
                            imageurl: d.recommend_light_box.editImageurl(b.items[j].imageurl64, d.recommend_light_box.settings.lightbox_imgsize),
                            imagealt: d.recommend_light_box.editItemnameLightBox(d.recommend_light_box, b.items[j].itemname),
                            imagetitle: d.recommend_light_box.editItemnameLightBox(d.recommend_light_box, b.items[j].itemname),
                            shopid: b.items[j].shopid,
                            itemid: b.items[j].itemid
                        });
                        var l = d.recommend_light_box.props.recommendLayer.items[0];
                        return l == c && (l = []), l = d.merge(l, h), g < l.length ? l.splice(g, 0, f) : l[g] = f, d.recommend_light_box.props.recommendLayer.items[0] = l, !0
                    }
                    var k;
                    d.recommend_light_box.status.isTimeout = !1;
                    try {
                        k = setTimeout(function() {
                            d.recommend_light_box.status.isTimeout = !0, d.recommend_light_box.prepareRecommendItems(a, d.recommend_light_box.props.recommendLayer.items[0], !0, h)
                        }, d.recommend_light_box.settings.ajaxtimer), d.ajax({
                            url: d.recommend_light_box.settings.recommend_shopitem_url,
                            cache: !1,
                            dataType: "jsonp",
                            data: {
                                shop_id: f,
                                item_ids: g
                            },
                            scriptCharset: "euc-jp",
                            timeout: d.recommend_light_box.settings.ajaxtimer,
                            success: function(c) {
                                j(a, c, b, i, h), d.recommend_light_box.prepareRecommendItems(a, d.recommend_light_box.props.recommendLayer.items[0], !0, h)
                            },
                            error: function(b, c, e) {
                                d.recommend_light_box.prepareRecommendItems(a, d.recommend_light_box.props.recommendLayer.items[0], !0, h)
                            }
                        })
                    } catch (l) {
                        d.recommend_light_box.prepareRecommendItems(a, d.recommend_light_box.props.recommendLayer.items[0], !0, h);
                    }
                },
                prepareRecommendItems: function(b, e, f, g) {
                    function h(a) {
                        if (a != c) {
                            for (var e = 0; k > e; e++) {
                                var f = b.prototypeLightBox.find(".lightBox_Content[index1=" + e + "]");
                                if (e != a) {
                                    var g = d.recommend_light_box.prepareElement(b, m, e, l);
                                    f.replaceWith(g)
                                } else if (e == a && "1" == d.recommend_light_box.settings.sid_clickcount_flag) {
                                    var h = f.find(".lightBox_imageEle"),
                                        j = h.attr("url");
                                    if (j) {
                                        var n = j.lastIndexOf("_"),
                                            o = j.substring(0, n + 1) + d.recommend_light_box.clickCount;
                                        h.attr("url", o)
                                    }
                                }
                            }
                            i()
                        }
                    }

                    function i() {
                        try {
                            var c = b.prototypeLightBox.find(".lightBox_Content");
                            c.each(function() {
                                var c = d(this),
                                    e = c.find(".lightBox_prototypeItemImage"),
                                    f = e.find(".lightBox_imageEle"),
                                    g = c.find(".lightBox_hoverEle"),
                                    h = c.find(".lightBox_textArea"),
                                    i = h.find(".lightBox_LinkAreaError").is(":visible"),
                                    j = c.attr("index1"),
                                    k = h.find(".lightBox_LinkArea"),
                                    l = h.find(".lightBox_ItemNameArea"),
                                    m = h.find(".lightBox_ItemName"),
                                    n = h.find(".lightBox_PrototypeItemPrice"),
                                    o = (h.find(".lightBox_NameArea"), k.find(".lightBox_Link"));
                                j % 4 != 3 && b.prototypeLightBox.find(".lightBox_Content[index1=" + j + "]").addClass("lightBox_NotLastItem"),
                                    8 > j && b.prototypeLightBox.find(".lightBox_Content[index1=" + j + "]").addClass("lightBox_NotBottomItem"), k.click(function() {
                                        if (!i) {
                                            var c = e.attr("index2");
                                            if (c != d.recommend_light_box.itemClicked) {
                                                var f = d(this),
                                                    g = f.attr("itemid"),
                                                    h = f.attr("shopid");
                                                d.recommend_light_box.clickCount++, a.SC && "function" == typeof a.SC.sendSTL && "1" == d.recommend_light_box.settings.sc_relateditem_flag && a.SC.sendSTL({
                                                    prop18: d.recommend_light_box.settings.sc_relateditem_prop18 + "_" + d.recommend_light_box.clickCount
                                                }), d.recommend_light_box.getRecommendDataLayer(b, g, h, "", "", "", !0, c);
                                            }
                                        }
                                    }), c.unbind("mousemove").unbind("mouseleave").mousemove(function(a) {
                                        var b = d(this);
                                        if (0 != b.contents().length) {
                                            var c = b.attr("itemid"),
                                                e = b.find(".lightBox_anchor"),
                                                i = f.attr("url");
                                            e.mousedown(function(a) {
                                                1 === a.which && e.attr({
                                                    href: i,
                                                    target: "_self"
                                                }), 3 === a.which && e.attr({
                                                    href: i,
                                                    target: "_blank"
                                                })
                                            }), c && (g.css({
                                                display: "block"
                                            }), h.css({
                                                display: "block"
                                            }))
                                        }
                                    }).mouseleave(function() {
                                        0 != d(this).contents().length && (h.css({
                                            display: "none"
                                        }), g.css({
                                            display: "none"
                                        }))
                                    }), l.unbind("mousemove").unbind("mouseleave").mousemove(function(a) {
                                        d(this).addClass("lightBox_linkHover"), m.addClass("lightBox_itemNameHover"), n.addClass("lightBox_itemNameHover")
                                    }).mouseleave(function() {
                                        d(this).removeClass("lightBox_linkHover"), m.removeClass("lightBox_itemNameHover"), n.removeClass("lightBox_itemNameHover")
                                    }), k.unbind("mousemove").unbind("mouseleave").mousemove(function(a) {
                                        i ? o.removeClass("lightBox_linkHover") : o.addClass("lightBox_linkHover")
                                    }).mouseleave(function() {
                                        o.removeClass("lightBox_linkHover")
                                    })
                            })
                        } catch (e) {
                            return !1
                        }
                    }
                    var j = [],
                        k = d.recommend_light_box.settings.recommend_items_number,
                        l = e.length > k ? e.slice(0, k) : e,
                        m = b.prototypeLightBoxFrame;
                    if (l != c && l.length > 0) {
                        if (f) h(g);
                        else {
                            b.prototypeLightBox.empty();
                            for (var n = 0; k > n; n++) {
                                var o = d.recommend_light_box.prepareElement(b, m, n, l);
                                j.push(o)
                            }
                            b.prototypeLightBox.append(j.join("")), i(), b.loading.hide(), b.prototypeLightBox.show()
                        }
                        7 === d.recommend_light_box.detectBrowser() && d(".lightBox_itemImage").each(function(a, b) {
                            var c = d(this),
                                e = c.attr("src"),
                                f = e.lastIndexOf("http"),
                                g = e.substring(f);
                            c.attr("src", g)
                        })
                    }
                },
                prepareElement: function(a, b, c, e) {
                    var f = [],
                        g = 0,
                        h = "",
                        i = b.find(".lightBox_imageEle");
                    if ("undefined" != typeof e[c]) {
                        f.push({
                            itemName: e[c].itemname
                        }), f.push({
                            itemPrice: e[c].itemprice
                        }), f.push({
                            shopid: e[c].shopid
                        }), f.push({
                            itemid: e[c].itemid
                        }), f.push({
                            index1: c
                        }), f.push({
                            index2: c
                        }), f.push({
                            index3: c
                        }), i.attr({
                            src: e[c].imageurl,
                            alt: e[c].itemname,
                            url: e[c].itemurl
                        }), h = b.html(), i.removeAttr("src"), i.removeAttr("alt"), i.removeAttr("url");
                        for (var j in d.recommend_light_box.identifiers) h = h.replace(d.recommend_light_box.identifiers[j], f[g][j]), g++
                    } else h = d("#lightBox_frame_noimg").html(), h = h.replace(d.recommend_light_box.identifiers.index1, c);
                    return h
                },
                getRankingDataLayer: function(a, b, e, f, g, h) {
                    function i(a, b, e, f, g, h) {
                        if (d.recommend_light_box.status.isTimeout) return !1;
                        if (clearTimeout(j), b.status === c || b.num === c) return 0 == e && d.recommend_light_box.displayErrorMessage(a), !1;
                        if ("Success" != b.status) return 0 == e && d.recommend_light_box.displayErrorMessage(a), !1;
                        if (!f && b.items != c && 0 == b.items.length) return 0 == e && d.recommend_light_box.displayErrorMessage(a), !1;
                        if (a.prototypeErrorLightBox.hide(), 0 == b.num) return 0 == e && d.recommend_light_box.displayErrorMessage(a),
                            !1;
                        for (var i = [], k = 0; k < b.items.length; k++) {
                            var l = (/R2=([^\&]+)/.exec(b.items[k].itemurl) || [])[1];
                            l === c && /^https?:\/\/item\.rakuten\.co\.jp/.test(b.items[k].itemurl) && (l = b.items[k].itemurl), l !== c && (d.recommend_light_box.endsWith(l, g + "/" + h + "/") || i.push({
                                itemname: d.recommend_light_box.editItemnameLightBox(d.recommend_light_box, b.items[k].itemname),
                                itemurl: "1" == d.recommend_light_box.settings.sid_clickcount_flag ? d.recommend_light_box.editItemurl(b.items[k].itemurl, d.recommend_light_box.settings.ranking_sid + "_" + d.recommend_light_box.clickCount) : d.recommend_light_box.editItemurl(b.items[k].itemurl, d.recommend_light_box.settings.ranking_sid),
                                itemprice: d.recommend_light_box.editItemprice(b.items[k].price),
                                imageele: "",
                                imageurl: d.recommend_light_box.editImageurl(b.items[k].imageurl64, d.recommend_light_box.settings.lightbox_imgsize),
                                imagealt: d.recommend_light_box.editItemnameLightBox(d.recommend_light_box, b.items[k].itemname),
                                imagetitle: d.recommend_light_box.editItemnameLightBox(d.recommend_light_box, b.items[k].itemname),
                                shopid: b.items[k].shopid,
                                itemid: b.items[k].itemid
                            }))
                        }
                        1 === d.recommend_light_box.settings.rankingshuffle && (i = d.recommend_light_box.shuffle(i));
                        var m = d.recommend_light_box.props.recommendLayer.items[0];
                        return m == c && (m = []), m = d.merge(m, i), d.recommend_light_box.props.recommendLayer.items[0] = m, !0
                    }
                    var j;
                    d.recommend_light_box.status.isTimeout = !1;
                    try {
                        var k = f.replace(/^\//, "").split("/"),
                            l = d.recommend_light_box.settings.genrefilter.split(",");
                        for (var m in l)
                            if (-1 != d.inArray(l[m], k)) return 0 != b ? d.recommend_light_box.prepareRecommendItems(a, d.recommend_light_box.props.recommendLayer.items[0], !1) : d.recommend_light_box.displayErrorMessage(a), !1;
                        k = k[d.recommend_light_box.settings.ranking_genrelayer],
                            k === c && (k = 0), j = setTimeout(function() {
                                d.recommend_light_box.status.isTimeout = !0, d.recommend_light_box.prepareRecommendItems(a, d.recommend_light_box.props.recommendLayer.items[0], !1)
                            }, d.recommend_light_box.settings.ajaxtimer), d.ajax({
                                url: d.recommend_light_box.settings.ranking_url,
                                cache: !0,
                                dataType: "jsonp",
                                data: {
                                    gid: k
                                },
                                jsonpCallback: "jsonp0123456789012",
                                scriptCharset: "euc-jp",
                                timeout: d.recommend_light_box.settings.ajaxtimer,
                                success: function(c) {
                                    i(a, c, b, e, g, h), d.recommend_light_box.prepareRecommendItems(a, d.recommend_light_box.props.recommendLayer.items[0], !1);
                                },
                                error: function(a, b, c) {}
                            })
                    } catch (n) {
                        d.recommend_light_box.prepareRecommendItems(a, d.recommend_light_box.props.recommendLayer.items[0], !1)
                    }
                },
                disable: function(a) {
                    d(document).unbind("click").bind("click", function(b) {
                        var c = b.target.id;
                        ("lightBox_closeButtonError" == c || "lightBox_closeButton" == c || "lightBox_ModalWindow" == c) && (a.prototypeLightBox.empty(), a.lightBoxModal.hide())
                    })
                },
                editItemnameLightBox: function(a, b) {
                    return b = d.RJS_Helpers.omitStr(b, a.settings.omitname_lightbox, "\u2026")
                },
                detectBrowser: function() {
                    var b = a.navigator.userAgent,
                        c = b.indexOf("MSIE ");
                    return c > 0 ? parseInt(b.substring(c + 5, b.indexOf(".", c)), 10) : 0
                },
                editItemurl: function(a, b, c) {
                    return "" != b && (a = c ? d.RJS_Helpers.urlR2Parameter(a, {
                        "s-id": b
                    }, !1) : d.RJS_Helpers.urlParameter(a, {
                        "s-id": b
                    }, !1)), a
                },
                editItemprice: function(a) {
                    return "" != a && a !== c ? String(a).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") : a
                },
                editImageurl: function(a, b) {
                    return "" != a && b !== c && (a = d.RJS_Helpers.urlParameter(a, {
                        _ex: b.replace(":", "x"),
                        fitin: b.replace("x", ":")
                    })), a
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
                }
            }
        })
    }
}(window, window.jQuery);