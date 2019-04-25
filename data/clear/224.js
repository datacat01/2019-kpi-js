(function() {
    function d(a, c, b) {
        !0 == b ? s(a) : t(a, c)
    }

    function s(a) {
        a.hover(function() {
            var a = $(this),
                b = a.find("img"),
                a = a.find(".story-title, .video-header");
            b.addClass("hover");
            a.addClass("hover")
        }, function() {
            var a = $(this),
                b = a.find("img"),
                a = a.find(".story-title, .video-header");
            b.removeClass("hover");
            a.removeClass("hover")
        })
    }

    function t(a, c) {
        a.find("img").hover(function() {
            var a = $(this),
                e = a.closest(c).find(".story-title, .video-header");
            a.addClass("hover");
            e.addClass("hover")
        }, function() {
            var a = $(this),
                e =
                a.closest(c).find(".story-title, .video-header");
            a.removeClass("hover");
            e.removeClass("hover")
        })
    }

    function u() {
        if (0 < h.length) {
            var a = $(".top-module .news-headline-list").find("article").first().find("p");
            heightDiff = $(".top-module .column1").height() - $(".top-module .column2").height();
            heightDiffAbs = Math.abs(heightDiff);
            blurbHeight = a.height();
            heightDiffAbs > blurbHeight && a.remove()
        }
    }

    function v() {
        if (0 < m.length) {
            var a = $(".featured-section .row");
            $.each(a, function(c, b) {
                var e = $(a[c]);
                0 == e.next().find(".module").length &&
                    e.css("margin-bottom", "0")
            })
        }
    }

    function n() {
        var a = $(".top-module").height(),
            c = window.innerWidth,
            b = f,
            e = $(".module.news-curation");
        1200 <= c && e.hasClass("col-4") ? b.height(a - 86) : b.height(a - 76)
    }

    function w() {
        f.on("mousewheel", function(a) {
            var c = $(this);
            return 0 > a.originalEvent.deltaY ? 0 < c.scrollTop() : c.scrollTop() + c.innerHeight() < c[0].scrollHeight
        })
    }

    function x() {
        if ($("section").hasClass("evergreenModule"))
            for (var a = 0, c = parseInt($(".evergreenModule").find($("[class*\x3dmodule-news-headline-row]")).last().attr("class").match(/\d+/)),
                    b = 1; b <= c; b++) 1 < $("#content section.module-news-headline-row" + b).length ? ($("#content section.module-news-headline-row" + b).first().css("cssText", "margin-left: 0px !important;"), $("#content section.module-news-headline-row" + b).last().css("cssText", "margin-left: 20px !important;")) : $("#content section.module-news-headline-row" + b).css("cssText", "margin-left: 0px !important;"), $("#content section.module-news-headline-row" + b).each(function() {
                a = Math.max(a, $(this).height())
            }).height(a)
    }

    function y() {
        var a =
            0;
        g.find("article").each(function() {
            a = Math.max(a, $(this).height())
        }).promise().done(function() {
            g.find("article").each(function() {
                var c = $(this).find(".story-content").text().trim(),
                    b = $(this).find(".story-photo");
                "" == c ? ($(this).css("padding-bottom", "0"), b.css("margin-bottom", "0")) : $(this).height(a)
            })
        })
    }

    function z() {
        $.each(g, function(a, c) {
            0 == a % 2 ? $(this).closest(".featured-module").addClass("left") : $(this).closest(".featured-module").addClass("right")
        })
    }

    function A() {
        $(window).load(function() {
            setTimeout(function() {
                var a =
                    $(".news-mod-wire .wire-fade-out");
                f.find("article").last().after("\x3cdiv class\x3d'loader-container loader-wire active'\x3e\x3cdiv class\x3d'loader'\x3e\x3cdiv class\x3d'loader-dot'\x3e\x3c/div\x3e\x3cdiv class\x3d'loader-dot'\x3e\x3c/div\x3e\x3cdiv class\x3d'loader-dot'\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e");
                $(".home .module-container-wire.wire-container").mCustomScrollbar({
                    theme: "dark",
                    callbacks: {
                        onTotalScroll: function() {
                            a.removeClass("active");
                            $(".wire-container").mCustomScrollbar("disable");
                            setTimeout(function() {
                                f.find("article").last().css("border-bottom", "10px solid #ddd");
                                Reuters.rcom.wire.ajaxCall(f);
                                a.addClass("active")
                            }, 1500);
                            setTimeout(function() {
                                $(".loader-container").remove()
                            }, 2E3);
                            setTimeout(function() {
                                f.find("article").last().after("\x3cdiv class\x3d'loader-container loader-wire active'\x3e\x3cdiv class\x3d'loader'\x3e\x3cdiv class\x3d'loader-dot'\x3e\x3c/div\x3e\x3cdiv class\x3d'loader-dot'\x3e\x3c/div\x3e\x3cdiv class\x3d'loader-dot'\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e");
                                $(".wire-container").mCustomScrollbar("update")
                            }, 2500)
                        },
                        whileScroll: function() {}
                    }
                })
            }, 900)
        })
    }

    function B() {
        $("img").reveal(15, function() {
            $(this).load(function() {
                this.style.opacity = 1
            })
        })
    }

    function p(a) {
        return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,50})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(a) && 64 >= a.split("@")[0].length && 63 >= a.split("@")[1].split(".")[0].length && 63 >= a.split("@")[1].split(".")[1].length && 254 >= a.length
    }

    function C() {
        var a = $(this).closest(".nl-buttons").find(".nl-input"),
            c = $(this).closest(".nl-buttons").find(".confirm-message"),
            b = $(this).closest(".nl-buttons").find(".error-message"),
            e = a.val();
        $(this).addClass("hidden");
        a.addClass("hidden");
        p(e) ? c.addClass("active") : (b.addClass("active"), b.find(".close-btn").bind("click", function() {
            var a = $(this).closest(".nl-buttons").find(".nl-input"),
                c = $(this).closest(".nl-buttons").find(".nl-signup"),
                b = $(this).closest(".nl-buttons").find(".error-message");
            a.removeClass("hidden");
            a.select();
            c.removeClass("hidden");
            b.removeClass("active")
        }))
    }

    function D() {
        $("#div_gpt_bi_video")[0] && "#hp-video .video-module" [0] &&
            $(document).ready(function() {
                $("#div_gpt_bi_video").appendTo($("#hp-video .video-module"))
            })
    }

    function E() {
        $(document).ready(function() {
            $('a[href*\x3d"reuters.tv"], a[href*\x3d"widerimage.reuters.com"] ').each(function() {
                $(this).attr("target", "_blank")
            })
        })
    }

    function F() {
        function a(a, b, e) {
            if ($(a).length) {
                var d = $(a),
                    f = $(a).height(),
                    g = d.offset().top,
                    k, l;
                $(window).scroll(function() {
                    var h = ".sticky-2" == a ? 10 : 66;
                    $("#breakingNewsContainer").hasClass("hidden") ? $(window).scrollTop() + 36 : k = $(window).scrollTop() +
                        66;
                    l = "noHeightDefined" == b ? $(a).closest("section").next().offset().top - f - 20 : $(e).offset().top + $(e).height() - f + h;
                    g < k ? $("#breakingNewsContainer").hasClass("hidden") ? d.css({
                        position: "fixed",
                        top: 40
                    }) : d.css({
                        position: "fixed",
                        top: 70
                    }) : d.css({
                        position: "static",
                        top: 0
                    });
                    l < k && d.css({
                        top: l - k
                    })
                })
            }
        }
        $(window).load(function() {
            setTimeout(function() {
                G.hasClass("BETAJP") ? ($(".sticky-1").length && a(".sticky-1", "noHeightDefined", null), $(".sticky-2").length && a(".sticky-2", "noHeightDefined", null)) : ($(".sticky-1").length &&
                    $(".stickyContainer1").length && a(".sticky-1", null, ".stickyContainer1"), $(".sticky-2").length && $(".stickyContainer2").length && a(".sticky-2", null, ".stickyContainer2"))
            }, 2E3)
        })
    }

    function H() {
        setTimeout(function() {
            if (0 < q.length && 0 < r.length) {
                var a = r.position().top + 110;
                q.bind("click", function() {
                    $("html, body").animate({
                        scrollTop: a + "px"
                    }, "fast")
                })
            }
        }, 800)
    }
    var h = $(".right-now-module"),
        I = $(".feature-curation article"),
        m = $(".featured-section"),
        J = $(".featured-un article"),
        K = $(".featured-story-trois article"),
        L = $(".news-headline-list article"),
        M = $(".evergreenModule article"),
        N = $(".pictures-module article"),
        O = $(".video-module .video"),
        f = $(".news-mod-wire .module-container-wire"),
        g = $(".featured-module .feature-col1"),
        G = $("body"),
        P = $(".nl-signup"),
        Q = $(".nl-buttons .nl-input"),
        q = $(".see-more-label"),
        r = $(".more-news");
    $(".stickyContainer_top");
    $(".stickyContainer_low");
    (function() {
        d(h, ".right-now-module");
        d(I.find(".story-photo"), ".story-photo", !0);
        d(J, "article", !0);
        d(K, "article", !0);
        d(L, "article");
        d(M, "article");
        d(N, "article", !0);
        d(O, "figure", !0);
        u();
        w();
        y();
        v();
        x();
        z();
        P.bind("click", C);
        Q.on("keyup", function() {
            var a = $(this).closest(".nl-buttons").find(".nl-signup");
            p(this.value) ? a.attr("type", "submit") : a.attr("type", "button")
        });
        setTimeout(function() {
            n();
            $(window).resize(function() {
                n()
            })
        }, 800);
        A();
        B();
        D();
        E();
        F();
        H();
        0 < m.length && 0 == $(".featured-section article").length && $(".featured-header, .featured-layout").addClass("hidden")
    })()
})(jQuery);