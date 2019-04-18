(function(a) {
    function b() {
        var m, e, b;
        a(".nav-item").hover(function() {
            e = a(this).find(".subnav");
            m = a(this).find(".subnav-inset");
            0 != m.length && (b = m.height() + 12, d.height(b + 6), d.addClass("open"), e.addClass("open"))
        }, function() {
            d.height(0);
            d.removeClass("open");
            e.removeClass("open")
        })
    }

    function c() {
        a("input#searchfield")[0].disabled = !1;
        var b = a(".header-mini-logo"),
            e = a("#headerNav"),
            c = a("#searchBar");
        f.addClass("nav-hide");
        d.addClass("hidden");
        c.addClass("active");
        e.hasClass("fixed") && b.removeClass("active");
        a("body").css("overflow", "hidden");
        a("#overlayForSearch").css("display", "block");
        setTimeout(function() {
            a("body").hasClass("BETACN") ? a("input#searchfield").attr("placeholder", "\u68c0\u7d22\u8def\u900f\u7f51\u7ad9") : a("body").hasClass("BETAJP") ? a("input#searchfield").attr("placeholder", "\u30ed\u30a4\u30bf\u30fc.co.jp\u3067\u691c\u7d22") : a("body").hasClass("BETADE") ? a("input#searchfield").attr("placeholder", "Suche bei Reuters") : a("body").hasClass("BETALTA") ? a("input#searchfield").attr("placeholder",
                "Buscar Reuters") : a("input#searchfield").attr("placeholder", "Search Reuters")
        }, 800)
    }

    function n() {
        a(this).toggleClass("active");
        g.toggleClass("active");
        f.toggleClass("nav-hide");
        a("#overlayForSearch").toggle();
        g.hasClass("active") ? a("body").css("overflow", "hidden") : a("body").css("overflow", "auto")
    }

    function h() {
        var b = a(".header-mini-logo"),
            e = a("#headerNav"),
            c = a("#searchBar");
        f.removeClass("nav-hide");
        d.removeClass("hidden");
        c.removeClass("active");
        k.removeClass("active");
        g.removeClass("active");
        e.hasClass("fixed") &&
            b.addClass("active");
        a("#breakingNewsContainer").hasClass("hidden") || a(".edition-container").css("padding-top", "");
        a("body").css("overflow", "auto");
        a("#overlayForSearch").css("display", "none");
        a("#searchfield").val("");
        a("#suggestedSearch").empty()
    }

    function p() {
        a(window).scroll(function() {
            var b = a("#headerMain").height(),
                e = a(window).scrollTop(),
                c = a("nav"),
                d = a(".nav-white-space"),
                f = a("#content"),
                g = a(".header-mini-logo"),
                h = a(".nav-item.home-tab"),
                k = a(".nav-item.pictures-tab"),
                l = a(".nav-item.video-tab"),
                n = a("#searchBar");
            e >= b ? (c.addClass("fixed"), d.addClass("fixed"), f.addClass("fixed-header"), n.hasClass("active") || g.addClass("active"), k.removeClass("active-text"), l.removeClass("active-text"), h.removeClass("active-icon")) : (c.removeClass("fixed"), d.removeClass("fixed"), f.removeClass("fixed-header"), g.removeClass("active"), k.addClass("active-text"), l.addClass("active-text"), h.addClass("active-icon"))
        })
    }

    function l() {
        var a = window.innerWidth;
        1100 <= a ? document.getElementsByTagName("body")[0].setAttribute("data-rcom-width",
            "1100") : 1200 > a && document.getElementsByTagName("body")[0].setAttribute("data-rcom-width", "940");
        return !1
    }
    a("html,body");
    a("#content");
    var k = a(".edition-container"),
        g = a(".edition-header"),
        f = a("nav .nav-list"),
        d = a(".nav-white-space");
    window.Reuters = window.Reuters || {};
    Reuters.info = Reuters.info || {};
    Reuters.info.edition = Reuters.info.edition || a("body").attr("class").split(" ")[0];
    (function() {
        a(".close-btn").on("click", function() {
            a("#breakingNewsContainer").addClass("hidden");
            var b = a("#breakingNewsContainer").data("breakingNewsJson");
            saveClosedBreakingNews(b)
        });
        Reuters.utils.loadScript("breakingNewsAjax", "/assets/breakingNews?view\x3djson\x26sp\x3ddrawBreakingNews")
    })();
    (function() {
        b();
        a("input#searchfield")[0].disabled = !0;
        a(window).bind("pageshow", function(a) {
            a.originalEvent.persisted && window.location.reload()
        });
        a(window).bind("keydown", function(b) {
            27 === b.keyCode && a("#searchBar").hasClass("active") && (Screen.lockCursor != Screen.lockCursor, h())
        });
        a(".search-tab").bind("click touchend", function() {
            c();
            a("input#searchfield").focus()
        });
        a(".search-close-button").bind("click touchend", function() {
            h();
            a("input#searchfield").blur()
        });
        a("input#searchfield").bind("focusin focus", function(a) {
            a.preventDefault()
        });
        a("#overlayForSearch").bind("click touchend", h);
        k.bind("click", n);
        p();
        if ("ontouchstart" in document.getElementsByClassName("nav-link-sec")[0]) {
            var d = f.find(".subnav").closest(".nav-item").find("a.nav-link-sec");
            d.bind("click", function(b) {
                d.not(this).removeClass("clicked");
                a(this).toggleClass("clicked");
                a(this).hasClass("clicked") &&
                    b.preventDefault()
            })
        }
    })();
    (function() {
        a(document).ready(function() {
            l();
            a(window).resize(function() {
                l()
            })
        })
    })()
})(jQuery);

function drawBreakingNews(a) {
    if ("undefined" !== typeof a && !$.isEmptyObject(a) && !isClosedBreakingNews(a)) {
        if ("" !== a.type) {
            var b = a.label + ":",
                b = "" == a.label ? a.label : b;
            $(".breaking-news-type").text(b);
            b = a.type
        } else b = "happening";
        $("#breakingNewsContainer").addClass(b);
        "" != a.url && $("\x3ca\x3e").attr("href", a.url).html(a.headline);
        $(".breaking-news-content").html(a.headline);
        "" != a.url && (b = document.body.classList.contains("BETALTA") ? "VER M\u00c1S" : "VIEW MORE", a.actionCall && "" != a.actionCall && (b = a.actionCall),
            b = $("\x3ca\x3e").attr({
                href: a.url,
                id: "breaking-news-link",
                onClick: "linkCloseBreakingNews()"
            }).html(b), $(".breaking-news-content").append(b));
        $("#breakingNewsContainer").data("breakingNewsJson", a);
        $("#breakingNewsContainer").removeClass("hidden");
        $("#headerMain, .edition-header").css("padding-top", "30px");
        $(".edition-selector, .edition-label").click(function() {
            setTimeout(function() {
                $(".edition-container").hasClass("active") && "30px" !== $(".edition-container").css("padding-top") && !$("#breakingNewsContainer").hasClass("hidden") ?
                    $(".edition-container").css("padding-top", "30px") : $(".edition-container").hasClass("active") || $(".edition-container").css("padding-top", "")
            }, 1)
        });
        $(window).scroll(function() {
            $("#breakingNewsContainer").hasClass("hidden") || ($("#headerNav").hasClass("fixed") && "30px" !== $("#headerNav").css("top") ? $("#headerNav").css("top", "30px") : $("#headerNav").hasClass("fixed") || $("#headerNav").css("top", ""));
            $(".nav-white-space").hasClass("fixed") && !$("#breakingNewsContainer").hasClass("hidden") ? $(".nav-white-space").css("padding-top",
                "30px") : $(".nav-white-space").hasClass("fixed") || $(".nav-white-space").css("padding-top", "")
        });
        $("#breakingNewsContainer .close-btn").click(function() {
            $("#headerMain, .edition-container, .edition-header, .nav-white-space").css("padding-top", "");
            $("#headerNav").css("top", "")
        })
    }
}

function isClosedBreakingNews(a) {
    var b = !1,
        c = Reuters.utils.getFromLocalStorage("lastclose.breakingnews");
    c && a.headline === c.headline && a.url === c.url && a.type === c.type && (b = !0);
    return b
}

function saveClosedBreakingNews(a) {
    Reuters.utils.setToLocalStorage("lastclose.breakingnews", a)
}

function linkCloseBreakingNews() {
    var a = $("#breakingNewsContainer").data("breakingNewsJson");
    saveClosedBreakingNews(a)
};