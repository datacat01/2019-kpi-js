var Reuters = Reuters || {},
    registerNamespace = function(b) {
        b = b.split(".");
        for (var e = window, a = 0; a < b.length; a++) "undefined" == typeof e[b[a]] && (e[b[a]] = {}), e = e[b[a]]
    };
registerNamespace("Reuters.rcom");
Reuters.rcom.wire = {
    wireNewsTmpl: '\x3carticle class\x3d"article"\x3e\x3ctime class\x3d"article-time"\x3e\x3cspan class\x3d"ico ico-time"\x3e\x3c/span\x3e\x3cspan class\x3d"timestamp"/\x3e\x3c/time\x3e\x3ch3 class\x3d"article-heading"\x3e\x3ca\x3e\x3c/a\x3e\x3c/h3\x3e\x3c/article\x3e',
    wireSlideshowTmpl: '\x3cdiv class\x3d"photo-container"\x3e\x3ca class\x3d"thumb-link"\x3e\x3cdiv class\x3d"photo-thumb"\x3e\x3cdiv class\x3d"slideshow-marker"\x3e\x3c/div\x3e\x3cdiv class\x3d"slideshowOverlay"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/a\x3e\x3cheader class\x3d"photo-header"\x3e\x3ch3 class\x3d"photo-heading"\x3e\x3ca\x3e\x3c/a\x3e\x3c/h3\x3e\x3cp class\x3d"slide-blurb"\x3e\x3c/p\x3e\x3c/header\x3e\x3ctime class\x3d"article-time"\x3e\x3cspan class\x3d"time-icon"\x3e\x3c/span\x3e\x3cspan class\x3d"timestamp"/\x3e\x3c/time\x3e\x3c/div\x3e',
    formatDate: function(b,
        e) {
        var a = b.getTime() - e,
            c = "";
        36E5 > a ? (a = Math.floor(a / 6E4), 1 > a && (a = 1), c = Reuters.rcom.wire.lessThanHourFormat.replace("%d", a)) : 36E5 <= a && 864E5 > a && (a = Math.floor(a / 36E5), 0 > a && (a = 0), c = Reuters.rcom.wire.lessThanDayFormat.replace("%d", a));
        return c
    },
    drawWireNews: function(b, e, a) {
        for (var c = $("\x3cdiv/\x3e"), g = b.find("article:eq(0) .timestamp").data("time"), d, l = 0; l < e.headlines.length; l++) {
            var f = e.headlines[l];
            if (a && f.dateMillis < g) break;
            if (d && f.dateMillis > d) break;
            var k = f.id.replace(/\W/g, ""),
                h = b.find("article." +
                    k);
            0 < h.length ? (k = h.find(".timestamp").data("time"), f.dateMillis > k && (h.find(".timestamp").data("time", f.dateMillis), h.find(".timestamp").text(f.formattedDate), h.find("h3.article-heading a").text(f.headline), h.appendTo(c), d = f.dateMillis)) : (d = $(Reuters.rcom.wire.wireNewsTmpl).appendTo(c), d.addClass(k), d.find(".timestamp").data("time", f.dateMillis), d.find(".timestamp").text(f.formattedDate), d.find("h3.article-heading a").attr("href", f.url + "?il\x3d0").text(f.headline), d = f.dateMillis)
        }
        c = c.children();
        g =
            0 < b.find("article").length ? b.find("article").parent() : b;
        a ? (c.addClass("wire-fade"), c.hide().prependTo(g).fadeIn(1E3, function() {
            $(this).addClass("active")
        })) : c.appendTo(g);
        var n = new Date;
        b.find(".timestamp").each(function() {
            var a = $(this).data("time"),
                a = Reuters.rcom.wire.formatDate(n, a);
            if ("" == a) return !1;
            $(this).text(a)
        });
        a = c.find("a");
        var m = parseInt(c.find("h3").css("maxHeight"));
        isNaN(m) && (m = 56);
        var p = RegExp(/[\u3400-\u9FBF]/);
        a.each(function() {
            for (; $(this).outerHeight() > m;) {
                var a = $(this).text(),
                    a = a.replace("...", ""),
                    b = a.length,
                    a = p.test(a) ? a.slice(0, a.length - 1) : a.replace(/\W*\s(\S)*$/, ""),
                    c = a.length;
                $(this).text(a + "...");
                if (c >= b) break
            }
        });
        $("#div_gpt_native").insertAfter(".wire-module .article:eq(3)");
        e.headlines.length < b.data("ajax-data").limit && b.next(".load-more-link").addClass("load-more-hide");
        $(".load-more-link").find(".load-more-content").addClass("active");
        $(".load-more-link").find(".loader-wire").removeClass("active")
    },
    drawWireSlideshow: function(b, e) {
        for (var a = 0; a < e.headlines.length; a++) {
            var c =
                e.headlines[a],
                g = c.blurb.length,
                d = $(Reuters.rcom.wire.wireSlideshowTmpl).appendTo(b);
            d.addClass(c.id);
            d.data("time", c.dateMillis);
            d.find(".timestamp").text(c.formattedDate);
            d.find(".timestamp").data("time", c.dateMillis);
            c.photo ? d.find(".photo-thumb").append('\x3cimg src\x3d"' + c.photo + '" alt\x3d"photo" border\x3d"0"\x3e') : "" == c.photo && d.find(".photo-thumb .slideshowOverlay").css("display", "none");
            d.find("h3.photo-heading a").attr("href", c.url).text(c.headline);
            $("body").hasClass("BETAJP") || $("body").hasClass("BETACN") ?
                35 > g ? d.find("p.slide-blurb").text(c.blurb) : d.find("p.slide-blurb").text(c.blurb.substring(0, 35).trim() + "...") : 150 > g ? d.find("p.slide-blurb").text(c.blurb) : d.find("p.slide-blurb").text(c.blurb.substring(0, 150).trim() + "...");
            d.find(".thumb-link").attr("href", c.url);
            0 != a % 2 && d.prev().hasClass("left-slideshow") ? d.addClass("right-slideshow") : d.addClass("left-slideshow")
        }
        b.data("ajax-data").endTime = b.find(".photo-container").last().data("time");
        b.find(".photo-container").length >= b.data("max") && b.next(".load-more-link").addClass("load-more-hide");
        b.next(".load-more-link").find(".load-more-content").addClass("active");
        b.next(".load-more-link").find(".loader-wire").removeClass("active")
    },
    ajaxCall: function(b, e) {
        var a = $.extend(!0, {}, b.data("ajax-data"));
        e ? (a.startTime = b.find("article").last().find(".timestamp").data("time"), delete a.limit) : (b.find("article").length ? a.endTime = b.find("article").last().find(".timestamp").data("time") : b.find("photo-container").length && (a.endTime = b.data("ajax-data").endTime), $(".load-more-link").find(".load-more-content").removeClass("active"),
            $(".load-more-link").find(".loader-wire").addClass("active"));
        $.ajax({
            url: b.data("ajax-url"),
            data: a,
            dataType: "json",
            success: function(a) {
                var g = Reuters.rcom.wire[b.data("ajax-callback")];
                g ? g(b, a, e) : console.error("[Ajax Call Error] : Callback not found. Reuters.rcom.wire." + b.data("ajax-callback"))
            },
            error: function(a, b, d) {
                console.error("[Ajax Call Error] : " + b + "," + d)
            }
        })
    }
};
$(document).ready(function() {
    $(".wire-container ~ .load-more-link .load-more-content").on("click", function() {
        var b = $(this).parent().prevAll(".wire-container");
        Reuters.rcom.wire.ajaxCall(b)
    });
    $.each($(".wire-container"), function(b, e) {
        var a = $(e);
        a.data("loadonready") && Reuters.rcom.wire.ajaxCall(a);
        if (a.data("autorefresh")) {
            var c = a.data("refreshfrequency");
            c && setInterval(function() {
                Reuters.rcom.wire.ajaxCall(a, !0)
            }, 1E3 * c)
        }
    })
});