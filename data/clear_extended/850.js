function send_genre(e) {
    $.ajax("nc.php?g=" + e, {
        method: "GET",
        contentType: !1,
        processData: !1,
        cache: !1,
        dataType: "json"
    })
}
window.goo || (window.goo = {}), goo.version = "0.8", goo.each = function(e, t) {
    if (e.length)
        for (var i = 0, n = e.length; i < n; i++) t.call(e[i], i, e[i]);
    else
        for (var a in e) t.call(e[a], a, e[a])
}, goo.cookie = function(e, t) {
    this.$name = e, this.day = t, this.path = "/", this.data = {}, this.existed = !1;
    var i, n, a = document.cookie + ";";
    if (-1 == (n = a.indexOf(e + "=", 0))) return !1;
    a = a.substring(n, a.length), n = a.indexOf("=", 0) + 1, i = a.substring(n, a.indexOf(";", n)), this.existed = !0;
    var s = i.split("&");
    _self = this, goo.each(s, function(e, t) {
        t = t.split(":"), _self.data[t[0]] = decodeURIComponent(t[1])
    })
}, goo.cookie.prototype.set = function(e, t) {
    "" === t ? this.data[e] && delete this.data[e] : this.data[e] = t;
    var i = "";
    if (goo.each(this.data, function(e, t) {
            "" != i && (i += "&"), i += e + ":" + encodeURIComponent(t)
        }), i = this.$name + "=" + i, this.day || 0 == this.day) {
        var n = new Date;
        if ("ie" == goo.getUA().split(" ")[0]) {
            n.setTime(n.getTime() + 864e5 * this.day + 2592e5);
            var a = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][n.getUTCDay()] + ", " + ("0" + n.getUTCDate()).slice(-2) + "-" + ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][n.getUTCMonth()] + "-" + n.getUTCFullYear() + " " + ("0" + n.getUTCHours()).slice(-2) + ":" + ("0" + n.getUTCMinutes()).slice(-2) + ":" + ("0" + n.getUTCSeconds()).slice(-2) + " GMT"
        } else {
            n.setTime(n.getTime() + 864e5 * this.day + 2592e5);
            var a = n.toUTCString().replace("UTC", "GMT")
        }
        i += "; expires=" + a
    }
    this.path && (i += "; path=" + this.path), document.cookie = i
}, goo.cookie.prototype.get = function(e) {
    return !!this.data[e] && this.data[e]
}, goo.cookieMap = {
    getNum: function(e) {
        var t = null;
        return goo.each(this.map, function(i, n) {
            e == n && (t = i)
        }), t
    },
    getVal: function(e) {
        return this.map[e]
    },
    initialize: function(e, t) {
        e.cookieMap = {}, e.cookieMap.map = t, e.cookieMap.getNum = goo.cookieMap.getNum, e.cookieMap.getVal = goo.cookieMap.getVal
    }
}, goo.getUA = function() {
    var e = window.navigator.userAgent.toLowerCase(),
        t = !1;
    if (-1 != e.indexOf("opera") || -1 != e.indexOf("opr")) t = "opera";
    else if (-1 != e.indexOf("msie") || -1 != e.indexOf("trident")) {
        var i, n;
        i = /(msie|rv:?)\s?([\d\.]+)/.exec(e), n = i ? i[2] : "", t = "ie " + n
    } else -1 != e.indexOf("chrome") ? t = "chrome" : -1 != e.indexOf("safari") ? t = "safari" : -1 != e.indexOf("firefox") && (t = "firefox");
    return t
};
var adLoad = new Array;
viewAd = function(e, t) {
    if (!adLoad[e]) {
        if (addiv = "gooad-tpxtext_" + e, addiv2 = "gooad-tpxtext_" + e + "_2", addiv3 = "gooad-tpxad_" + e + "_2", !(document.getElementById(addiv) && document.getElementById(addiv2) && document.getElementById(addiv3) && window.gooad)) return void setTimeout("viewAd(" + e + "," + t + ");", 30);
        window.gooad.render(addiv), window.gooad.render(addiv2), 1 == t ? window.gooad.insert_tpxad_tag_in_enhanced_mode() : window.gooad.render(addiv3), adLoad[e] = !0
    }
};
var get_newsarticle_line = function(e, t) {
        var i = '<li data-topicsid="' + e.news[t].topicsid + '">';
        if (i += '<a id="' + e.news[t].data_cid + '" data-cid="' + e.news[t].data_cid + '" href="' + e.news[t].link + '" data-genreid="' + e.news[t].genreid + '" ', i += ">", i += e.news[t].title + "</a>", void 0 !== e.news[t].topicsicon)
            for (j = 0; j < e.news[t].topicsicon.length; j++) "new" == e.news[t].topicsicon[j] && (i += '<span class="n-mark">N</span>'), "photo" == e.news[t].topicsicon[j] && (i += '<i class="fa fa-camera"></i>');
        return i += "</li>"
    },
    set_normal_newstab = function(e) {
        if ("" != $("#newsarticle_html_" + e).html()) return !1;
        $.ajax("/api/news.json?NTR=" + e + "&NE=0", {
            method: "GET",
            cache: !1,
            dataType: "json",
            success: function(t) {
                var n = "",
                    a = "",
                    s = "";
                for (n = "<ul>", i = 0; i < t.news.length; i++) n += get_newsarticle_line(t, i);
                for (n += "</ul>", $("#newsarticle_html_" + e).html(n), n = "", i = 0; i < t.news_article_img.length; i++) t.news_article_img[i].img_check && (a = ' style="border:#FFFFFF"', s = 'class="disable" '), n += '<div class="news-img">', 1 == i && ad_flag && (n += '<div id="gooad-tpxad_' + e + '_2" class="gooad-tpxad">'), n += '<span class="news-img-box"' + a + "><a " + s + 'id="' + t.news_article_img[i].data_cid_img + '" data-cid="' + t.news_article_img[i].data_cid_img + '" href="' + t.news_article_img[i].link + '">', void 0 !== t.news_article_img[i].enclosure2 ? n += '<img src="' + t.news_article_img[i].enclosure2 + '">' : n += '<img src="' + t.news_article_img[i].enclosure + '">', n += "</a></span>", n += '<p class="txt">', n += '<a id="' + t.news_article_img[i].data_cid_text + '" data-cid="' + t.news_article_img[i].data_cid_text + '" href="' + t.news_article_img[i].link + '">' + t.news_article_img[i].picture.picturetitle + "</a>", n += "</p>", 1 == i && ad_flag && (n += "</div>"), n += "</div>";
                $("#newsimg_html_" + e).replaceWith(n), ad_flag && viewAd(e, 0)
            }
        })
    },
    set_extension_newstab = function(e) {
        if ("" != $("#newsarticle_html_" + e).html()) return !1;
        $.ajax("/api/news.json?NTR=" + e + "&NE=1", {
            method: "GET",
            cache: !1,
            dataType: "json",
            success: function(t) {
                if (e <= 8) {
                    var n = "";
                    for (n = "<ul>", i = 0; i < t.news.length; i++) n += get_newsarticle_line(t, i);
                    for (n += "</ul>", $("#newsarticle_html_" + e).html(n), n = '<ol class="module-column-item">', i = 0; i < t.newsrank.length; i++) {
                        n += "<li>";
                        var a = "http://news.goo.ne.jp/article/" + t.newsrank[i].ip_group_id + "/" + t.newsrank[i].genre_id + "/" + t.newsrank[i].article_id + ".html";
                        n += '<a id="' + t.newsrank[i].data_cid + '" data-cid="' + t.newsrank[i].data_cid + '" href="' + a + '">', n += '<span class="news-ranking-number"><span>' + t.newsrank[i].rank + "</span></span>", n += '<span class="news-ranking-title">', n += '<span class="news-ranking-word">' + t.newsrank[i].title + '</span><span class="news-ranking-note">' + t.newsrank[i].ip_name + "</span>", n += "</span></a>", n += "</li>"
                    }
                    n += "</ol>", $("#newsranking_html_" + e).html(n)
                } else if (9 == e) {
                    for (n = "", i = 0; i < t.newsimg.item.length; i++) n += '<li class="module-column-item">', n += '<div class="news-img"><span class="news-img-box">', n += '<a id="' + t.newsimg.item[i].data_cid_img + '" data-cid="' + t.newsimg.item[i].data_cid_img + '" href="' + t.newsimg.item[i].link + '">', n += '<img src="' + t.newsimg.item[i].enclosure + '" alt="">', n += "</a></span>", n += '<p class="txt"><a id="' + t.newsimg.item[i].data_cid_text + '" data-cid="' + t.newsimg.item[i].data_cid_text + '" href="' + t.newsimg.item[i].link + '">' + t.newsimg.item[i].title + "</a>", n += "</p></div></li>";
                    $("#newsarticle_html_9").html(n)
                }
            }
        }), 1 <= e && e <= 8 && ad_flag && viewAd(e, 1)
    },
    clicklog_count = function(e) {
        if ("undefined" != typeof ClickLog4Pc) {
            var t = new ClickLog4Pc;
            e && t.cc(e, !1)
        }
    },
    getParam = function() {
        var e = location.href,
            t = e.split("?");
        if (!t[1]) return {};
        var i, n, a = t[1].split("&"),
            s = [];
        for (i = 0; i < a.length; i++) n = a[i].split("="), s.push(n[0]), s[n[0]] = n[1];
        return s
    };
jQuery(document).ready(function(e) {
    function t() {
        var e = l.get("NE");
        return 1 == e ? e : 0
    }

    function n() {
        var i, n = {
                mynews: {
                    intro: {},
                    list: {
                        close: function(e) {
                            e.preventDefault(), h.close()
                        }
                    },
                    loading: {
                        close: function(e) {
                            e.preventDefault(), h.close()
                        }
                    },
                    error: {
                        close: function(e) {
                            e.preventDefault(), h.close()
                        }
                    }
                }
            },
            a = {
                mynews: {
                    intro: {
                        close: function(e) {
                            e.preventDefault(), clicklog_count("pcnews-mynews-107"), h.close()
                        }
                    }
                }
            },
            s = {
                mynews: {
                    intro: {
                        close: function(e) {
                            e.preventDefault(), h.close()
                        }
                    }
                }
            };
        return i = t() ? s : a, e.extend(n.mynews.intro, i.mynews.intro), n
    }

    function a() {
        var t = e(".header-hot dd ul:first"),
            i = e(t).height();
        e(t).clone().insertAfter(e(".header-hot dd ul:last")), e(t).animate({
            marginTop: "-" + i + "px"
        }, {
            duration: 1e3,
            complete: function() {
                e(t).remove()
            }
        })
    }

    function s() {
        m = setInterval(a, 1e4)
    }

    function o(t) {
        var i = e(".news-nav-list"),
            n = t;
        n >= 5 && !i.hasClass("is-secondhalf") ? (newsSecondTabsPos = e(".news-nav-list.is-advance ul").outerWidth() - i.outerWidth(), e(".news-nav-list.is-advance ul").stop().animate({
            left: "-" + newsSecondTabsPos + "px"
        }), e(".news-nav-switch").toggleClass("is-disable"), i.addClass("is-secondhalf")) : n < 5 && i.hasClass("is-secondhalf") && (e(".news-nav-list.is-advance ul").stop().animate({
            left: "0px"
        }), e(".news-nav-switch").toggleClass("is-disable"), i.removeClass("is-secondhalf"));
        var a = /.+-.+-([0-9]+)/gm,
            s = a.exec(i.find("li").get(t).id);
        set_normal_newstab(s[1])
    }
    var l = new goo.cookie("gootop", 30),
        c = new goo.cookie("gtab", null),
        r = !1,
        d = (encodeURIComponent(location.href), "pc");
    is_green && (d = "gp");
    var g = function(t) {
        for (e("#blog_date").html(t.pvuu.str_date), e("#blog_pv").html(t.pvuu.ip_count), e("#blog_uu").html(t.pvuu.uu_count), html = "", list = t.comment.item, i = 0; i < list.length; i++) html += "<li><a href='" + list[i].link + "' id='pclogin-blog-" + (20 + i) + "' data-cid='pclogin-blog-" + (20 + i) + "'><span class='title'>" + list[i].title + "</span><span class='sender'>" + list[i].dc_creator + "</span><span class='date'>" + list[i].dc_m + "月" + list[i].dc_d + "日</span></a></li>";
        html || (html = "<p class='error'><span class='erlead'>コメント件数は0件です。</span></p>"), e("#blog_comment").html(html), e("#blog-hover").css("display", "block")
    };
    goo.each(c.data, function(e, t) {
        "ZM" != e && "ZR" != e && c.set(e, "")
    }), e(".button-service").on("click", function() {
        if (e(".button-more").toggleClass("on"), e(".button-more").hasClass("on") && clicklog_count(d + "menu-choise-100"), e(this).hasClass("close")) {
            var t = e(this).attr("data-cid") ? e(this).attr("data-cid") : "";
            clicklog_count(d + t)
        }
        return e(".category-list-wrap").toggle(), e(".category-list dd input").length && (e(".category-normal dd a").unwrap("<label></label>").siblings("input").remove(), e(".category-list-set p,.category-list-set li").toggle()), e("#servicemenu_error").empty(), !1
    }), e(".button-setting").on("click", function() {
        var t = e(this).children("a").attr("data-cid");
        if (clicklog_count(t), e(".category-list dd input").length) {
            var i = e(this).attr("class");
            if (e("#servicemenu_error").empty(), i.match(/^category-finish/)) {
                var n = e(".category-normal dd input").map(function() {
                        if (e(this).prop("checked")) return e(this).attr("name").replace(/svcheck_/, "")
                    }).get(),
                    a = n.length ? n.length : 0;
                if (n.length < 10) return e("#servicemenu_error").html("選択数が" + a + "件で、10件に足りません。再度、10件の選択をお願いいたします。"), !1;
                if (n.length > 10) return e("#servicemenu_error").html("選択数が" + a + "件で、10件を超えています。再度、10件の選択をお願いいたします。"), !1;
                e("#servicemenu_error").empty(), l.set("SL", n.join("_")), e.ajax({
                    type: "GET",
                    scriptCharset: "utf-8",
                    url: "/js/service_menu.json?20180308",
                    dataType: "json"
                }).done(function(t) {
                    e("#left_service_menu").empty(), idx = 1, jQuery.each(n, function(i, n) {
                        var a = l.get("NE"),
                            s = 1 == a ? a : 0,
                            o = i + 1;
                        0 == s ? e("#left_service_menu").append('<li><a data-cid="' + d + "menu-choise1-" + o + "," + d + t[n].clickid + '" href="' + t[n].link + '"><img src="' + t[n].iconurl + '" alt="' + t[n].name + '">' + t[n].name + "</a></li>") : e("#left_service_menu").append('<li><a data-cid="' + d + "menu-choise1-" + o + "," + d + t[n].clickid + '" href="' + t[n].link + '">' + t[n].name + "</a></li>")
                    })
                }).fail(function(e) {}), e(".button-more").removeClass("on"), e(".category-list-wrap").toggle()
            }
            e(".category-list-set p,.category-list-set li").toggle(), e(".category-normal dd a").unwrap("<label></label>").siblings("input").remove()
        } else {
            var s = l.get("SL"),
                o = s || "4_8_10_11_13_14_15_16_28_32",
                c = o.split("_");
            e(".category-normal dd a").map(function() {
                a_id = e(this).attr("id"), "undefined" != typeof a_id && a_id.length && (i = a_id.replace(/servicemenu_/, "svcheck_"), id = a_id.replace(/servicemenu_/, ""), checked = "", e.inArray(id, c) >= 0 && (checked = " checked"), e(this).wrap("<label></label>").before('<input type="checkbox" name="svcheck_' + id + '"' + checked + ">"))
            }), e(".category-list-set p,.category-list-set li").toggle()
        }
        return !1
    }), e(".category-normal dd a").on("click", function() {
        if (e(".category-normal dd input").length) return e(this).siblings("input:checkbox").prop("checked") ? e(this).siblings("input:checkbox").prop("checked", !1) : e(this).siblings("input:checkbox").prop("checked", !0), !1
    }), e(".module-paging li").on("click", function() {
        var t = e(this).index();
        e(this).parents(".module-paging").siblings(".module-paging-item").removeClass("active").eq(t).addClass("active"), e(this).addClass("on").siblings("li").removeClass("on");
        var i = (e(this).parents(".module-paging").attr("class"), e(this).parents(".module-paging").attr("id")),
            n = e(this).children("a").attr("data-cid");
        if ("undefined" !== n && clicklog_count(n), i.match(/news_area/)) {
            var a = /.+-.+-([0-9]+)/g,
                s = a.exec(this.id);
            l.set("NTR", s[1]), ne = l.get("NE") ? l.get("NE") : 0, 1 == ne ? set_extension_newstab(s[1]) : set_normal_newstab(s[1])
        }
        return void 0 !== i && (i.match("center-editor_pickup") && (l.set("ETR", t + 1), 0 == t | 1 == t ? l.set("ETRE", 1) : 3 == t || 4 == t ? l.set("ETRE", 2) : 5 != t && 6 != t || l.set("ETR", 1), l.set("EETR", t + 1), l.set("EETRE", Math.ceil((t + 1) / 2))), i.match("center-editor_pickup_expand") && (t + 1 <= 2 && l.set("ETRE", t + 1), l.set("EETRE", t + 1)), i.match("center-oshiete") && l.set("OSR", t + 1), i.match("center-column") && l.set("ICT", t + 1), i.match("center-ranking") && l.set("RKR", t + 1), i.match("center-sports-pickup") && l.set("TSP", t + 1), i.match("center-geinou-pickup") && l.set("TGP", t + 1), i.match("center-health") && l.set("THC", t + 1), i.match("center-cari") && l.set("TCI", t + 1), i.match("right-ocn") && l.set("RCO", t + 1), i.match("center-ocn") && l.set("CO", t + 1), i.match("news-today-pager") && (l.set("NTP", t + 1), p(t + 1)), (i.match("center-topics") || i.match("right-topics")) && l.set("TIT", t + 1)), !1
    });
    var p = function(t) {
        if ("" != e("#news-today-html-" + t).html()) return !1;
        ne = l.get("NE") ? l.get("NE") : 0, e.ajax("/api/news_today.json?p=" + t, {
            method: "GET",
            cache: !1,
            dataType: "json",
            success: function(n) {
                var a = "";
                for (i = 0; i < n.item.length; i++) {
                    var s = 1 == ne ? n.item[i].data_cid.replace("news-today-", "nenews-today-") : n.item[i].data_cid,
                        o = '<li><a id="' + s + '" data-cid="' + s + '" href="' + n.item[i].link + '">';
                    void 0 !== n.item[i].enclosure_sp && (o += '<div class="thumb"><img src="' + n.item[i].enclosure_sp + '"></div>'), o += '<span class="time">' + n.item[i].viewDateJ + "</span>", o += "<p>" + n.item[i].title + "</p>", o += "</a></li>", i % 4 == 0 && (a += '<ul class="lbnews">'), a += o, i % 4 == 3 && (a += "</ul>")
                }
                i % 4 != 3 && (a += "</ul>"), e("#news-today-html-" + t).html(a)
            }
        })
    };
    e(".module-paging .prev,.module-paging .next").on("click", function() {
        var t = e(this).siblings("ol").children("li.on").index(),
            i = e(this).siblings("ol").children("li:last-child").index();
        if (e(this).hasClass("prev")) var n = t - 1;
        else if (e(this).hasClass("next")) {
            var n = t + 1;
            n > i && (n = 0)
        }
        e(this).parents(".module-paging").siblings(".module-paging-item").removeClass("active").eq(n).addClass("active"), e(this).siblings("ol").children("li").removeClass("on").eq(n).addClass("on");
        var a = e(this).children("a").attr("data-cid");
        "undefined" !== a && clicklog_count(a);
        var s = e(this).parents(".module-paging").attr("id");
        return void 0 !== s && (s.match("news-today-pager") && (l.set("NTP", n + 1), p(n + 1)), s.match("center-sports-pickup") && l.set("TSP", n + 1), s.match("center-geinou-pickup") && l.set("TGP", n + 1), s.match("center-health") && l.set("THC", n + 1), s.match("center-cari") && l.set("TCI", n + 1)), !1
    }), e(".ttl-close").on("click", function() {
        return "open" == e(this).find("a").attr("class") ? (l.set("BB", "1"), clicklog_count(d + "sports-report-201")) : (l.set("BB", "0"), clicklog_count(d + "sports-report-200")), e(this).find("a").html("閉じる").toggleClass("open"), e(this).find("i").toggleClass("fa-chevron-down fa-chevron-up"), e(this).parent(".ttl-a").next(".module-inner").slideToggle(), e(this).parents(".module-frame").toggleClass("close"), e(this).find("a.open").html("開く"), !1
    });
    ! function() {
        e(".score > .unit a").each(function(t) {
            var i = e(this).attr("data-cid");
            e(this).attr("data-cid", d + i)
        })
    }(), e(".weather-list li").on("click", function() {
        var t = e(this).index();
        return e(this).children().replaceWith(function() {
            e(this).replaceWith("<span>" + e(this).text() + "</span>")
        }), e(this).siblings().each(function() {
            e(this).children().replaceWith(function() {
                var t = e(this).parent().index() + 6,
                    i = d + "region-weather-" + t;
                e(this).replaceWith("<a data-cid=" + i + ">" + e(this).text() + "</a>"), clicklog_count(i)
            })
        }), e(".weather-left .today-img").children().eq(t).show().siblings().hide(), !1
    }), e(".personal-hover-wrap").on("click", function() {
        if (1 != l.get("NE")) {
            if (e(this).siblings(".personal-hover-wrap").removeClass("on").find(".personal-hover").hide(), e(this).hasClass("blog") && !r && "0" == e(this).attr("data-blogstat")) clicklog_count("pclogin-blog-1"), e.ajax("blog_r", {
                method: "GET",
                cache: !1,
                dataType: "json",
                success: function(e) {
                    g(e), r = !0
                }
            });
            else if (e(this).hasClass("fortune-today")) clicklog_count("pclog-infortune-1"), "0" == e(this).attr("data-fortunestat") ? e("#fortune-hover-hide").toggle() : e("#fortune-hover-show").toggle();
            else if (e(this).hasClass("point")) {
                clicklog_count("pclog-point-2");
                var t = goo.getUA();
                if ("ie 7.0" == t || "ie 8.0" == t) return;
                e(this).toggleClass("on").find(".personal-hover").toggle()
            } else e(this).toggleClass("on").find(".personal-hover").toggle();
            return !1
        }
    }), e(".personal-hover .close").on("click", function() {
        return e(".personal-hover").hide(), e(".personal-hover-wrap").removeClass("on"), !1
    }), e(".point-swicth").on("click", function() {
        return e(this).hasClass("on") ? e(this).removeClass("on").siblings(".point-hover").hide() : (e(".point-swicth").removeClass("on").siblings(".point-hover").hide(), e(this).addClass("on").siblings(".point-hover").show(), mylogcal.display()), !1
    }), e(".point-hover .close").on("click", function() {
        return e(this).parents(".point-hover").hide().siblings(".point-swicth").removeClass("on"), !1
    }), e("#point_challenge_btn").on("click", function() {
        e("#point_challenge_box").css("display", "none"), e("#point_game_box").css("display", "block"), e("#point_game_frame").attr("src", "https://cmpweb.point-ad-game.com/index.php?tieup_tag_id=119&tieup_media_hash=7164520318d0367284a7569de3a00ea4ecbd39c6"), e("#point_game_frame").attr("load_stat", "0"), e("#point_game_frame").load(function() {
            e("#point_game_frame").attr("load_stat", "1")
        }), setTimeout(function() {
            0 == e("#point_game_frame").attr("load_stat") && e("#point_game_box").html('<p style="margin: 220px 10px;">読み込みに失敗しました。<br />しばらくしてからもう一度アクセスして下さい。</p>')
        }, 3e3)
    }), e(".custom-tab.mynews").on("click", function() {
        var t = e("#mynews").offset().top,
            i = t - 55;
        return e("html,body").animate({
            scrollTop: i
        }, "slow"), !1
    });
    var h = {};
    window.news_module = h, h.select_tab = 0, h.show_class = "", h.mynews_list_get = 0, h.init = function() {
        var t = (l.get("MNFL"), l.get("NECL")),
            i = l.get("NE");
        t || "1" == i || h.showAlert(11),
            function() {
                e("#news_module_box").on("click", "a[data-genreid]", function(t) {
                    var i = e(this).attr("data-genreid");
                    i && send_genre(i)
                })
            }(),
            function() {
                var t, i = n(),
                    a = i.mynews;
                t = "mynews-list_box", e("#" + t + " .custom-close a").on("click", a.list.close), t = "mynews-load_box", e("#" + t + " .custom-close a").on("click", a.loading.close), t = "mynews-error_box", e("#" + t + " .custom-close a").on("click", a.error.close)
            }()
    }, h.close = function() {
        var e = l.get("MFCL"),
            t = l.get("NECL"),
            i = l.get("NE");
        e ? t || "1" == i || h.showAlert(11) : (h.showAlert(9), "1" != i && h.showAlert(11)), l.set("MNFL", ""), l.set("MFCL", "1"), h.showAlert(0), h.showFloat("")
    }, h.showFloat = function(t) {
        var i = "",
            n = "";
        if (t.length && (i = "show-" + t, n = t + "_box"), h.show_class != i)
            if (h.show_class.length && e("#news_module_box").removeClass(h.show_class), t.length) {
                var a = e("#news-inner_box").height() - 7;
                e("#" + n + " .custom-inner").css("min-height", a), h.show_class = i, e("#news_module_box").addClass(h.show_class), h.hideAlert(9), h.hideAlert(10), h.hideAlert(11)
            } else h.show_class = ""
    }, h.showAlert = function(t) {
        if (10 == t) e("#alert_box_" + t).addClass("on"), setTimeout(function() {
            e("#alert_box_" + t).removeClass("on")
        }, 4e3);
        else if (11 == t) e("#alert_box_" + t).addClass("on");
        else {
            var i = e(".news").width(),
                n = e(".news").height();
            e(".custom-alert2").css({
                "min-height": n,
                width: i
            }), e("#alert_box_" + t).addClass("on fade");
            var a = e("#alert_box_" + t).children(".inner").outerHeight();
            e("#alert_box_" + t).find(".inner").css("margin-top", -a / 2), setTimeout(function() {
                e("#alert_box_" + t).removeClass("on fade")
            }, 1900)
        }
    }, h.hideAlert = function(t) {
        e("#alert_box_" + t).removeClass("on")
    }, h.showMynewsLoad = function() {
        var t = '<h2 class="ttl-a">マイニュース</h2>';
        t += '<div class="custom-loading">読込み中です</div>', e("#mynews").html(t)
    }, h.showMynewsError = function(t) {
        var i = '<h2 class="ttl-a">マイニュース</h2>';
        i += '<div class="custom-caution">', i += "<p>データの読込みに失敗しました。<br>大変お手数ですが、ページを再度読み込むか、<br>しばらく時間をおいてから再度お試しください。</p>", i += "</div>", e("#mynews").html(i)
    }, h.getMynewsImageUrl = function(t, i) {
        var n = {
                nation: 0,
                politics: 0,
                world: 0,
                business: 0,
                bizskills: 0,
                region: 0,
                life: 1,
                entertainment: 2,
                trend: 2,
                sports: 3
            },
            a = [
                ["22572516.jpg", "17388307.jpg", "1266914.jpg", "16047809.jpg", "22138734.jpg", "23239011.jpg", "19604070.jpg"],
                ["18037430.jpg", "19608205.jpg", "15120007.jpg", "22572516.jpg", "19487898.jpg", "23280909.jpg"],
                ["22109836.jpg", "18488653.jpg", "18037418.jpg", "21789853.jpg", "15977556.jpg"],
                ["22684405.jpg", "22769482.jpg", "19334658.jpg", "19001175.jpg"]
            ];
        if (t) return t;
        if (!e.inArray(i, n)) return "";
        var s = Math.floor(Math.random() * a[n[i]].length);
        return cdn_server + "/img/mynews/" + a[n[i]][s]
    }, h.setHtmlMynewsList = function(t) {
        var i, n, i, n, a = "",
            s = 0,
            o = [],
            c = [],
            s = 0,
            r = "",
            g = 1,
            p = l.get("MNTB");
        l.get("NE");
        for (p && (s = p), i = 0; i < t.length; i++)
            if (o.push(t[i]), o.length >= 8) {
                c.push(o), delete o;
                var o = []
            } for (o.length && (c.push(o), delete o), a += '<h2 class="ttl-a">マイニュース</h2>', i = 0; i < c.length; i++) {
            for (a += s == i ? '<div class="module-paging-item active">' : '<div class="module-paging-item">', a += '<ul class="module-inner module-column4 cx">', n = 0; n < c[i].length; n++) c[i][n].image_url.length ? '<i class="fa fa-camera"></i>' : "", a += '<li class="module-column-item"><a href="' + c[i][n].article_url + '?fr=topmynews" id="' + d + "news-mynews-" + g + '" data-cid="' + d + "news-mynews-" + g + '" class="module-thumb">', a += '<div class="module-thumb-image"><span class="thumb"><img class="lazy_mn" data-original="' + h.getMynewsImageUrl(c[i][n].image_url, c[i][n].genre_id) + '" src="' + cdn_server + '/img/img_dummy.png" alt=""></span></div>', a += '<p class="module-caption"><span class="module-caption-text">' + c[i][n].title + "</span></p>", a += "</a></li>", g++;
            for (; n < 8;) a += "<li></li>", n++;
            a += "</ul></div>"
        }
        for (a += '<div id="mynews_paging" class="module-paging bottom-paging">', c.length >= 2 && (a += '<span class="prev"><a href="javascript:void(0);" id="' + d + 'news-mynews-50" data-cid="' + d + 'news-mynews-50"><i class="fa fa-chevron-left"></i></a></span>'), a += "<ol>", g = 1, i = 0; i < c.length; i++) r = s == i ? ' class="on"' : "", a += "<li" + r + '><a href="javascript:void(0);" id="' + d + "news-mynews-" + (51 + g) + '" data-cid="' + d + "news-mynews-" + (51 + g) + '">' + (i + 1) + "</a></li>", g++;
        a += "</ol>", c.length >= 2 && (a += '<span class="next"><a href="javascript:void(0);" id="' + d + 'news-mynews-51" data-cid="' + d + 'news-mynews-51"><i class="fa fa-chevron-right"></i></a></span>'), a += "</div>", e("#mynews").html(a), h.setMynewsPagingEvent(), e("#mynews a").on("click", function(t) {
            var i = e(this).attr("data-cid");
            i && clicklog_count(i)
        })
    }, h.setHtmlMynewsListBTA = function(t) {
        var i, n, i, n, a = "",
            s = 0,
            o = [],
            c = [],
            s = 0,
            r = "",
            g = 1,
            p = l.get("MNBTB");
        l.get("NE");
        for (p && (s = p), i = 0; i < t.length; i++)
            if (o.push(t[i]), o.length >= 8) {
                c.push(o), delete o;
                var o = []
            } for (o.length && (c.push(o), delete o), a += '<h2 class="ttl-a">マイニュース</h2>', i = 0; i < c.length; i++) {
            for (a += s == i ? '<div class="module-paging-item active">' : '<div class="module-paging-item">', a += '<ul class="module-inner module-column4 cx">', n = 0; n < c[i].length; n++) c[i][n].image_url.length ? '<i class="fa fa-camera"></i>' : "", a += '<li class="module-column-item"><a href="' + c[i][n].article_url + '?fr=topmynews" id="' + d + "news-mynews-" + g + '" data-cid="' + d + "news-mynews-" + g + '" class="module-thumb">', a += '<div class="module-thumb-image"><span class="thumb"><img class="lazy_mn" data-original="' + h.getMynewsImageUrl(c[i][n].image_url, c[i][n].genre_id) + '" src="' + cdn_server + '/img/img_dummy.png" alt=""></span></div>', a += '<p class="module-caption"><span class="module-caption-text">' + c[i][n].title + "</span></p>", a += "</a></li>", g++;
            for (; n < 8;) a += "<li></li>", n++;
            a += "</ul></div>"
        }
        for (a += '<div id="mynews_bta_paging" class="module-paging bottom-paging">', c.length >= 2 && (a += '<span class="prev"><a href="javascript:void(0);" id="' + d + 'news-mynews-50" data-cid="' + d + 'news-mynews-50"><i class="fa fa-chevron-left"></i></a></span>'), a += "<ol>", g = 1, i = 0; i < c.length; i++) r = s == i ? ' class="on"' : "", a += "<li" + r + '><a href="javascript:void(0);" id="' + d + "news-mynews-" + (51 + g) + '" data-cid="' + d + "news-mynews-" + (51 + g) + '">' + (i + 1) + "</a></li>", g++;
        a += "</ol>", c.length >= 2 && (a += '<span class="next"><a href="javascript:void(0);" id="' + d + 'news-mynews-51" data-cid="' + d + 'news-mynews-51"><i class="fa fa-chevron-right"></i></a></span>'), a += "</div>", e("#mynews").html(a), h.setMynewsPagingEventBTA(), e(".custom-preview").on("click", function() {
            e(".custom-preview, .custom-preview-lead, .custom-preview-detail").toggleClass("on")
        }), e("#mynews a").on("click", function(t) {
            var i = e(this).attr("data-cid");
            i && clicklog_count(i)
        })
    }, h.setMynewsPagingEvent = function() {
        e("#mynews_paging li").on("click", function() {
            var t = e(this).index();
            return t ? l.set("MNTB", t) : l.set("MNTB", ""), e(this).parents(".module-paging").siblings(".module-paging-item").removeClass("active").eq(t).addClass("active"), e(this).addClass("on").siblings("li").removeClass("on"), e("html,body").trigger("scroll"), !1
        }), e("#mynews_paging .prev,#mynews_paging .next").on("click", function() {
            var t = e(this).siblings("ol").children("li.on").index(),
                i = e(this).siblings("ol").children("li:last-child").index();
            if (e(this).hasClass("prev")) var n = t - 1;
            else if (e(this).hasClass("next")) {
                var n = t + 1;
                n > i && (n = 0)
            }
            return n ? l.set("MNTB", n) : l.set("MNTB", ""), e(this).parents(".module-paging").siblings(".module-paging-item").removeClass("active").eq(n).addClass("active"), e(this).siblings("ol").children("li").removeClass("on").eq(n).addClass("on"), e("html,body").trigger("scroll"), !1
        })
    }, h.setMynewsPagingEventBTA = function() {
        e("#mynews_bta_paging li").on("click", function() {
            var t = e(this).index();
            return t ? l.set("MNBTB", t) : l.set("MNBTB", ""), e(this).parents(".module-paging").siblings(".module-paging-item").removeClass("active").eq(t).addClass("active"), e(this).addClass("on").siblings("li").removeClass("on"), e("html,body").trigger("scroll"), !1
        }), e("#mynews_bta_paging .prev,#mynews_bta_paging .next").on("click", function() {
            var t = e(this).siblings("ol").children("li.on").index(),
                i = e(this).siblings("ol").children("li:last-child").index();
            if (e(this).hasClass("prev")) var n = t - 1;
            else if (e(this).hasClass("next")) {
                var n = t + 1;
                n > i && (n = 0)
            }
            return n ? l.set("MNBTB", n) : l.set("MNBTB", ""), e(this).parents(".module-paging").siblings(".module-paging-item").removeClass("active").eq(n).addClass("active"), e(this).siblings("ol").children("li").removeClass("on").eq(n).addClass("on"), e("html,body").trigger("scroll"), !1
        })
    };
    h.init(),
        function() {
            for (window.ntr = l.get("NTR") ? l.get("NTR") : 1, ne = l.get("NE") ? l.get("NE") : 0, 1 == ne ? (set_extension_newstab(ntr), newstabmax = 10, pre_id = "pcnenews-tab-") : (o(e("#pcnews-tabval-" + ntr).prevAll().length), set_normal_newstab(ntr), newstabmax = 8, pre_id = "pcnews-tab-"), i = 0; i <= newstabmax; i++) i == ntr ? (e("#pcnews-tabval-" + i).addClass("on"), e("#" + pre_id + ntr).addClass("active")) : (e("#pcnews-tabval-" + i).removeClass("on"), e("#" + pre_id + i).removeClass("active"))
        }(),
        function() {
            if (ne = l.get("NE") ? l.get("NE") : 0, 1 == ne)
                if (is_green)
                    for (i = 1; i <= 4; i++) {
                        var t = l.get("EETRE") ? l.get("EETRE") : 1;
                        t == i ? (e("#gpcpick-tab-eco" + i).addClass("on"), e("#pcpick-tabval-" + i).addClass("active")) : (e("#gpcpick-tab-eco" + i).removeClass("on"), e("#pcpick-tabval-" + i).removeClass("active"))
                    } else
                        for (i = 1; i <= 2; i++) {
                            var n = l.get("ETRE") ? l.get("ETRE") : 1;
                            n == i ? (e("#pcpick-tab-" + i).addClass("on"), e("#pcpick-tabval-" + i).addClass("active")) : (e("#pcpick-tab-" + i).removeClass("on"), e("#pcpick-tabval-" + i).removeClass("active"))
                        } else if (is_green)
                            for (i = 1; i <= 7; i++) {
                                var a = l.get("EETR") ? l.get("EETR") : 1;
                                a == i ? (e("#gpcpick-tab-eco" + i).addClass("on"), e("#pcpick-tabval-" + i).addClass("active")) : (e("#gpcpick-tab-eco" + i).removeClass("on"), e("#pcpick-tabval-" + i).removeClass("active"))
                            } else
                                for (i = 1; i <= 5; i++) {
                                    var s = l.get("ETR") ? l.get("ETR") : 1;
                                    s == i ? (e("#pcpick-tab-" + i).addClass("on"), e("#pcpick-tabval-" + i).addClass("active")) : (e("#pcpick-tab-" + i).removeClass("on"), e("#pcpick-tabval-" + i).removeClass("active"))
                                }
        }(),
        function() {
            for (osr = l.get("OSR") ? l.get("OSR") : 1, i = 1; i <= 4; i++) osr == i ? (e("#pcqa-tab-" + i).addClass("on"), e("#pcqa-tabval-" + i).addClass("active")) : (e("#pcqa-tab-" + i).removeClass("on"), e("#pcqa-tabval-" + i).removeClass("active"))
        }(),
        function() {
            var t = l.get("ICT") && 2 != l.get("ICT") ? l.get("ICT") : 3;
            for (i = 1; i <= 4; i++) t == i ? (e("#pccolumn-tab-" + i).addClass("on"), e("#pccolumn-tabval-" + i).addClass("active")) : (e("#pccolumn-tab-" + i).removeClass("on"), e("#pccolumn-tabval-" + i).removeClass("active"))
        }(),
        function() {
            var t = l.get("TSP") ? l.get("TSP") : 1;
            for (i = 1; i <= 5; i++) t == i ? (e("#sports-link-10" + i).addClass("on"), e("#sports-linkval-10" + i).addClass("active")) : (e("#sports-link-10" + i).removeClass("on"), e("#sports-linkval-10" + i).removeClass("active"))
        }(),
        function() {
            var t = l.get("TGP") && l.get("TGP") <= 2 ? l.get("TGP") : 1;
            for (i = 1; i <= 2; i++) t == i ? (e("#entame-link-10" + i).addClass("on"), e("#entame-linkval-10" + i).addClass("active")) : (e("#entame-link-10" + i).removeClass("on"), e("#entame-linkval-10" + i).removeClass("active"))
        }(),
        function() {
            var t = l.get("THC") ? l.get("THC") : 1;
            for (i = 1; i <= 2; i++) t == i ? (e("#health-link-10" + i).addClass("on"), e("#health-linkval-10" + i).addClass("active")) : (e("#health-link-10" + i).removeClass("on"), e("#health-linkval-10" + i).removeClass("active"))
        }(),
        function() {
            var t = l.get("TCI") && l.get("TCI") <= 2 ? l.get("TCI") : 1;
            for (i = 1; i <= 2; i++) t == i ? (e("#cari-link-10" + i).addClass("on"), e("#cari-linkval-10" + i).addClass("active")) : (e("#cari-link-10" + i).removeClass("on"), e("#cari-linkval-10" + i).removeClass("active"))
        }(), null != document.getElementById("ocn-zoom-tab1") && function() {
            for (rco = l.get("RCO") ? l.get("RCO") : 1, i = 1; i <= 6; i++) rco == i ? (e("#ocn-zoom-tab" + i).addClass("on"), e("#ocn-zoom-tabval" + i).addClass("active")) : (e("#ocn-zoom-tab" + i).removeClass("on"), e("#ocn-zoom-tabval" + i).removeClass("active"))
        }(), null != document.getElementById("ocn-payon-tab1") && function() {
            for (co = l.get("CO") ? l.get("CO") : 1, i = 1; i <= 6; i++) co == i ? (e("#ocn-payon-tab" + i).addClass("on"), e("#ocn-payon-tabval" + i).addClass("active")) : (e("#ocn-payon-tab" + i).removeClass("on"), e("#ocn-payon-tabval" + i).removeClass("active"))
        }(), 10 == l.get("NTR") && function() {
            for (ntp = l.get("NTP") ? l.get("NTP") : 1, i = 1; i <= 20 && null != document.getElementById("pcnenews-today-tab" + i); i++) ntp == i ? (p(i), e("#pcnenews-today-tab" + i).addClass("on"), e("#pcnenews-today-tabval" + i).addClass("active")) : (e("#pcnenews-today-tab" + i).removeClass("on"), e("#pcnenews-today-tabval" + i).removeClass("active"))
        }(),
        function() {
            var t = l.get("TIT") && l.get("TIT") <= 2 ? l.get("TIT") : 1;
            for (i = 1; i <= 2; i++) t == i ? (e("#topics-tab-10" + i).addClass("on"), e("#topics-tabval-10" + i).addClass("active")) : (e("#topics-tab-10" + i).removeClass("on"), e("#topics-tabval-10" + i).removeClass("active"))
        }(), e("#alert_box_11").on("click", function() {
            e("#alert_box_11").removeClass("on"), l.set("NECL", "1")
        }), e("#NR-page").on("click", function() {}), e(document).on("click", function() {
            e(".category-list-wrap, .personal-hover, .point-hover").hide(), e(".button-more, .personal-hover-wrap, .point-swicth").removeClass("on setting"), h.close(), e("#servicemenu_error").empty()
        }), e(".category-list-wrap, .custom-news, .custom-alert1, .custom-alert2, .personal-hover, .point-hover").on("click", function(e) {
            e.stopPropagation()
        }), e("#NR-sub img.lazy").lazyload({
            threshold: 60,
            effect: "fadeIn",
            effectspeed: 1e3
        }), e("#NR-main img.lazy").lazyload({
            threshold: 60,
            effect: "fadeIn",
            effectspeed: 1e3
        }), e(".footer-btn a").on("click", function() {
            return e("html,body").animate({
                scrollTop: 0
            }, "slow"), !1
        });
    var m = null;
    setTimeout(function() {
        a(!0), s()
    }, 3e3), e(".header-hot").on({
        mouseenter: function() {
            null != m && clearInterval(m)
        },
        mouseleave: function() {
            null != m && (clearInterval(m), s())
        }
    }), 1 == l.get("NE") && l.get("NTR") <= 8 && ad_flag && window.gooad.insert_tpxad_tag_in_enhanced_mode(), e("a.disable").on("click", function(e) {
        e.stopPropagation()
    }), e(window).on("load scroll resize", function() {
        var t = e(this).scrollTop(),
            i = e("#NR-header-in").offset().top + e("#NR-header-in").outerHeight(),
            n = e("#NR-header");
        t > i ? (n.addClass("is-fixed"), e("#btnSearchTop").attr("data-cid", click_id_prefix + "search-button-2")) : (n.removeClass("is-fixed"), e("#btnSearchTop").attr("data-cid", click_id_prefix + "search-button-1"))
    });
    var u = e(".news-nav-list");
    if (e(".news-nav-switch").on("click", function() {
            if (!e(this).hasClass("is-disable")) {
                var t = e(this).hasClass("news-nav-next") ? 5 : 4;
                u.siblings(".module-paging-item").removeClass("active").eq(t).addClass("active"), u.find("li").removeClass("on").eq(t).addClass("on"), o(t)
            }
        }), e(".news-nav-list.is-advance li").on("click", function() {
            o(e(this).index())
        }), goo_login_flag && !today_point) {
        ! function() {
            function t() {
                o.css("display", "block"), c.css("display", "none"), r.css("display", "none"), d.css("display", "none"), g.css("display", "none")
            }

            function i() {
                o.css("display", "none"), c.css("display", "block"), r.css("display", "none"), d.css("display", "none"), g.css("display", "none")
            }

            function n() {
                o.css("display", "none"), c.css("display", "none"), r.css("display", "block"), d.css("display", "none"), g.css("display", "none")
            }

            function a() {
                o.css("display", "none"), c.css("display", "none"), r.css("display", "none"), d.css("display", "block"), g.css("display", "none")
            }

            function s() {
                o.css("display", "none"),
                    c.css("display", "none"), r.css("display", "none"), d.css("display", "none"), g.css("display", "block")
            }
            var o = e(".is-before"),
                c = e(".is-loading"),
                r = e(".is-action"),
                d = e(".is-after"),
                g = e(".is-alert");
            i();
            var p = 1e3 * server_time,
                h = function(e) {
                    var t = new Date(e),
                        i = t.getTime(),
                        n = 60 * t.getTimezoneOffset() * 1e3,
                        a = i + n + 324e5;
                    return new Date(a)
                }(p),
                m = h.getFullYear(),
                u = h.getMonth() + 1;
            h.getDate();
            ! function() {
                function i(e) {
                    0 == e.click ? t() : a()
                }
                var n = "/todaypoint?year=" + m + "&month=" + u + "&mode=" + device + "&code=" + code;
                e.ajax({
                    type: "GET",
                    url: n,
                    dataType: "json",
                    success: function(e) {
                        i(e)
                    },
                    error: function() {
                        s()
                    }
                })
            }(),
            function() {
                e(".point-card.is-before").click(function(t) {
                    t.preventDefault(), i(), e.get("/goopoint?mode=" + device + "&code=" + code, function() {}).success(function() {
                        var t = goo.getUA();
                        "ie 7.0" != t && "ie 8.0" != t && "ie 9.0" != t && n(), setTimeout(function() {
                            a()
                        }, 1500), e(".calendar-now-number").empty(), mylogcal.display(), first_access_date == "" + h.getFullYear() + ("0" + (h.getMonth() + 1)).slice(-2) + ("0" + h.getDate()).slice(-2) ? l.set("WS", "1") : first_access_date < "" + h.getFullYear() + ("0" + (h.getMonth() + 1)).slice(-2) + ("0" + h.getDate()).slice(-2) ? l.set("WS", "2") : l.set("WS", "0")
                    }).error(function() {
                        s()
                    })
                })
            }()
        }()
    }! function() {
        var t = {};
        e.extend(t, {
            extentionObj: {},
            deleteObj: {},
            parseObj: {},
            init: function() {
                if (!this.checkSessionStorage()) return void e(".google-extension-widget").css("display", "none");
                this.setLocalStorage(), this.loadSessionStorage(), this.loadLocalStorage(), this.parseObject(), this.setExtensionContent()
            },
            checkSessionStorage: function() {
                return !!sessionStorage.getItem("fromextension")
            },
            setLocalStorage: function() {
                localStorage.getItem("deleteextension") || localStorage.setItem("deleteextension", "{}")
            },
            loadSessionStorage: function() {
                this.extensionObj = JSON.parse(sessionStorage.getItem("fromextension"))
            },
            loadLocalStorage: function() {
                this.deleteObj = JSON.parse(localStorage.getItem("deleteextension"))
            },
            saveLocalStorage: function() {
                localStorage.setItem("deleteextension", JSON.stringify(this.deleteObj))
            },
            putLocalStorage: function(t) {
                var i = !1;
                e.each(this.deleteObj, function() {
                    this == t && (i = !0)
                }), i || (this.deleteObj[Object.keys(this.deleteObj).length] = t, this.saveLocalStorage())
            },
            parseObject: function() {
                var t = 0,
                    i = this,
                    n = this.deleteObj,
                    a = this.extensionObj;
                this.parseObj = {}, e.each(a, function() {
                    var a = !1,
                        s = this;
                    e.each(n, function() {
                        var e = this;
                        s.url == e && (a = !0)
                    }), a || (i.parseObj[Object.keys(i.parseObj).length] = s, t++)
                }), t <= 0 && e(".google-extension-widget").css("display", "none")
            },
            resetExtensionContent: function() {
                e(".gew-body li").html("").append(e("<a>").addClass("main blank"))
            },
            setExtensionContent: function() {
                var t = this;
                e.each(this.parseObj, function(i) {
                    var n = this.url.replace(/\\/g, "/").match(/\/\/([^\/]*)/),
                        a = e("<a>").attr({
                            href: "#"
                        }).addClass("close").on({
                            click: function() {
                                return t.putLocalStorage(n.input), t.parseObject(), t.resetExtensionContent(), t.setExtensionContent(), !1
                            }
                        }).html("閉じる"),
                        s = e("<img>").attr({
                            src: "https:" + n[0] + "/favicon.ico"
                        }).error(function() {
                            e(this).attr({
                                src: cdn_server + "/img/icn_internet.png"
                            })
                        }).css({
                            visibility: "hidden"
                        }).delay(600).queue(function() {
                            e(this).css({
                                visibility: "visible"
                            })
                        });
                    this.title = encodeURIComponent(this.title).replace(/%../g, "x").length < 14 ? this.title : t.substr(this.title, 10, "...");
                    var o = e("<span>").text(this.title),
                        l = e("<a>").attr({
                            href: this.url
                        }).addClass("main").append(s, o);
                    e(".gew-body li").eq(i).html("").append(l, a)
                })
            },
            substr: function(e, t, n) {
                void 0 === n && (n = "");
                var a = e.split(""),
                    s = 0,
                    o = "";
                for (i = 0; i < a.length; i++) {
                    if (escape(a[i]).length < 4 ? s++ : s += 2, s > t) return o + n;
                    o += e.charAt(i)
                }
                return e
            }
        }), t.init(), e(".gew-toggle-button").on({
            click: function() {
                e(this).parent().parent().parent().toggleClass("close"), e(this).parent().parent().next().slideToggle(), e(this).next().toggleClass("fa-chevron-up fa-chevron-down"), e(this).parent().parent().parent().hasClass("close") ? (e(this).text("開く"), l.set("PCE", "0")) : (e(this).text("閉じる"), l.set("PCE", "1"))
            }
        })
    }();
    var v = l.get("PCBL");
    v && "1" == v || function() {
        var t = window.navigator.userAgent.toLowerCase(); - 1 != t.indexOf("chrome") && -1 == t.indexOf("edge") && (e("body").animate({
            paddingTop: "50px"
        }, 1e3), e(".chrome-extension-banner").animate({
            top: "0"
        }, 1e3), e(".chrome-extension-banner .close").on({
            click: function() {
                return l.set("PCBL", "1"), e("body").animate({
                    paddingTop: "0"
                }, "fast"), e(".chrome-extension-banner").animate({
                    top: "-50px"
                }, "fast", function() {
                    e(this).hide()
                }), !1
            }
        }))
    }()
});