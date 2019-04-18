jQuery(window).load(function() {
    var a, b, c, d;
    jQuery().flexslider && (Number(fusionFlexSliderVars.status_vimeo) && jQuery(".flexslider").find("iframe").each(function() {
        var a = jQuery(this).attr("id"),
            b = jQuery(this).attr("src");
        a && -1 !== b.indexOf("vimeo") && (c = new Vimeo.Player(a), d = jQuery("#" + a).parents("li"), c.on("play", function() {
            jQuery("#" + a).parents("li").parent().parent().flexslider("pause")
        }), c.on("pause", function() {
            "yes" === jQuery(d).attr("data-loop") ? jQuery("#" + a).parents("li").parent().parent().flexslider("pause") : jQuery("#" + a).parents("li").parent().parent().flexslider("play")
        }))
    }), a = "false" !== fusionFlexSliderVars.page_smoothHeight, jQuery(".fusion-blog-layout-grid .flexslider").flexslider({
        slideshow: Boolean(Number(fusionFlexSliderVars.slideshow_autoplay)),
        slideshowSpeed: Number(fusionFlexSliderVars.slideshow_speed),
        video: !0,
        smoothHeight: a,
        pauseOnHover: !1,
        useCSS: !1,
        prevText: "&#xf104;",
        nextText: "&#xf105;",
        start: function(a) {
            jQuery(a).removeClass("fusion-flexslider-loading"), void 0 !== a.slides && 0 !== a.slides.eq(a.currentSlide).find("iframe").length ? (Number(fusionFlexSliderVars.pagination_video_slide) ? jQuery(a).find(".flex-control-nav").css("bottom", "-20px") : jQuery(a).find(".flex-control-nav").hide(), Number(fusionFlexSliderVars.status_yt) && !0 === window.yt_vid_exists && window.YTReady(function() {
                new YT.Player(a.slides.eq(a.currentSlide).find("iframe").attr("id"), {
                    events: {
                        onStateChange: onPlayerStateChange(a.slides.eq(a.currentSlide).find("iframe").attr("id"), a)
                    }
                })
            })) : Number(fusionFlexSliderVars.pagination_video_slide) ? jQuery(a).find(".flex-control-nav").css("bottom", "0px") : jQuery(a).find(".flex-control-nav").show(), jQuery.waypoints("viewportHeight"), jQuery.waypoints("refresh")
        },
        before: function(a) {
            0 !== a.slides.eq(a.currentSlide).find("iframe").length && (Number(fusionFlexSliderVars.status_vimeo) && -1 !== a.slides.eq(a.currentSlide).find("iframe")[0].src.indexOf("vimeo") && new Vimeo.Player(a.slides.eq(a.currentSlide).find("iframe")[0]).pause(), Number(fusionFlexSliderVars.status_yt) && !0 === window.yt_vid_exists && window.YTReady(function() {
                new YT.Player(a.slides.eq(a.currentSlide).find("iframe").attr("id"), {
                    events: {
                        onStateChange: onPlayerStateChange(a.slides.eq(a.currentSlide).find("iframe").attr("id"), a)
                    }
                })
            }), playVideoAndPauseOthers(a))
        },
        after: function(a) {
            0 !== a.slides.eq(a.currentSlide).find("iframe").length ? (Number(fusionFlexSliderVars.pagination_video_slide) ? jQuery(a).find(".flex-control-nav").css("bottom", "-20px") : jQuery(a).find(".flex-control-nav").hide(), Number(fusionFlexSliderVars.status_yt) && !0 === window.yt_vid_exists && window.YTReady(function() {
                new YT.Player(a.slides.eq(a.currentSlide).find("iframe").attr("id"), {
                    events: {
                        onStateChange: onPlayerStateChange(a.slides.eq(a.currentSlide).find("iframe").attr("id"), a)
                    }
                })
            })) : Number(fusionFlexSliderVars.pagination_video_slide) ? jQuery(a).find(".flex-control-nav").css("bottom", "0px") : jQuery(a).find(".flex-control-nav").show(), jQuery('[data-spy="scroll"]').each(function() {
                jQuery(this).scrollspy("refresh")
            })
        }
    }), b = "false" !== fusionFlexSliderVars.flex_smoothHeight, jQuery(".fusion-flexslider").not(".woocommerce .images #slider").flexslider({
        slideshow: Boolean(Number(fusionFlexSliderVars.slideshow_autoplay)),
        slideshowSpeed: fusionFlexSliderVars.slideshow_speed,
        video: !0,
        smoothHeight: b,
        pauseOnHover: !1,
        useCSS: !1,
        prevText: "&#xf104;",
        nextText: "&#xf105;",
        start: function(a) {
            a.removeClass("fusion-flexslider-loading"), jQuery(window).trigger("resize"), void 0 !== a.slides && 0 !== a.slides.eq(a.currentSlide).find("iframe").length ? (Number(fusionFlexSliderVars.pagination_video_slide) ? jQuery(a).find(".flex-control-nav").css("bottom", "-20px") : jQuery(a).find(".flex-control-nav").hide(), Number(fusionFlexSliderVars.status_yt) && !0 === window.yt_vid_exists && window.YTReady(function() {
                new YT.Player(a.slides.eq(a.currentSlide).find("iframe").attr("id"), {
                    events: {
                        onStateChange: onPlayerStateChange(a.slides.eq(a.currentSlide).find("iframe").attr("id"), a)
                    }
                })
            })) : Number(fusionFlexSliderVars.pagination_video_slide) ? jQuery(a).find(".flex-control-nav").css("bottom", "0px") : jQuery(a).find(".flex-control-nav").show(), jQuery.waypoints("viewportHeight"), jQuery.waypoints("refresh")
        },
        before: function(a) {
            0 !== a.slides.eq(a.currentSlide).find("iframe").length && (Number(fusionFlexSliderVars.status_vimeo) && -1 !== a.slides.eq(a.currentSlide).find("iframe")[0].src.indexOf("vimeo") && new Vimeo.Player(a.slides.eq(a.currentSlide).find("iframe")[0]).pause(), Number(fusionFlexSliderVars.status_yt) && !0 === window.yt_vid_exists && window.YTReady(function() {
                new YT.Player(a.slides.eq(a.currentSlide).find("iframe").attr("id"), {
                    events: {
                        onStateChange: onPlayerStateChange(a.slides.eq(a.currentSlide).find("iframe").attr("id"), a)
                    }
                })
            }), playVideoAndPauseOthers(a))
        },
        after: function(a) {
            0 !== a.slides.eq(a.currentSlide).find("iframe").length ? (Number(fusionFlexSliderVars.pagination_video_slide) ? jQuery(a).find(".flex-control-nav").css("bottom", "-20px") : jQuery(a).find(".flex-control-nav").hide(), Number(fusionFlexSliderVars.status_yt) && !0 === window.yt_vid_exists && window.YTReady(function() {
                new YT.Player(a.slides.eq(a.currentSlide).find("iframe").attr("id"), {
                    events: {
                        onStateChange: onPlayerStateChange(a.slides.eq(a.currentSlide).find("iframe").attr("id"), a)
                    }
                })
            })) : Number(fusionFlexSliderVars.pagination_video_slide) ? jQuery(a).find(".flex-control-nav").css("bottom", "0px") : jQuery(a).find(".flex-control-nav").show(), jQuery('[data-spy="scroll"]').each(function() {
                jQuery(this).scrollspy("refresh")
            })
        }
    }), jQuery(".flexslider:not(.tfs-slider)").flexslider({
        slideshow: Boolean(Number(fusionFlexSliderVars.slideshow_autoplay)),
        slideshowSpeed: fusionFlexSliderVars.slideshow_speed,
        video: !0,
        smoothHeight: b,
        pauseOnHover: !1,
        useCSS: !1,
        prevText: "&#xf104;",
        nextText: "&#xf105;",
        start: function(a) {
            a.removeClass("fusion-flexslider-loading"), void 0 !== a.slides && 0 !== a.slides.eq(a.currentSlide).find("iframe").length ? (Number(fusionFlexSliderVars.pagination_video_slide) ? jQuery(a).find(".flex-control-nav").css("bottom", "-20px") : jQuery(a).find(".flex-control-nav").hide(), Number(fusionFlexSliderVars.status_yt) && !0 === window.yt_vid_exists && window.YTReady(function() {
                new YT.Player(a.slides.eq(a.currentSlide).find("iframe").attr("id"), {
                    events: {
                        onStateChange: onPlayerStateChange(a.slides.eq(a.currentSlide).find("iframe").attr("id"), a)
                    }
                })
            })) : Number(fusionFlexSliderVars.pagination_video_slide) ? jQuery(a).find(".flex-control-nav").css("bottom", "0px") : jQuery(a).find(".flex-control-nav").show(), jQuery.waypoints("viewportHeight"), jQuery.waypoints("refresh")
        },
        before: function(a) {
            0 !== a.slides.eq(a.currentSlide).find("iframe").length && (Number(fusionFlexSliderVars.status_vimeo) && -1 !== a.slides.eq(a.currentSlide).find("iframe")[0].src.indexOf("vimeo") && new Vimeo.Player(a.slides.eq(a.currentSlide).find("iframe")[0]).pause(), Number(fusionFlexSliderVars.status_yt) && !0 === window.yt_vid_exists && window.YTReady(function() {
                new YT.Player(a.slides.eq(a.currentSlide).find("iframe").attr("id"), {
                    events: {
                        onStateChange: onPlayerStateChange(a.slides.eq(a.currentSlide).find("iframe").attr("id"), a)
                    }
                })
            }), playVideoAndPauseOthers(a))
        },
        after: function(a) {
            0 !== a.slides.eq(a.currentSlide).find("iframe").length ? (Number(fusionFlexSliderVars.pagination_video_slide) ? jQuery(a).find(".flex-control-nav").css("bottom", "-20px") : jQuery(a).find(".flex-control-nav").hide(), Number(fusionFlexSliderVars.status_yt) && !0 === window.yt_vid_exists && window.YTReady(function() {
                new YT.Player(a.slides.eq(a.currentSlide).find("iframe").attr("id"), {
                    events: {
                        onStateChange: onPlayerStateChange(a.slides.eq(a.currentSlide).find("iframe").attr("id"), a)
                    }
                })
            })) : Number(fusionFlexSliderVars.pagination_video_slide) ? jQuery(a).find(".flex-control-nav").css("bottom", "0px") : jQuery(a).find(".flex-control-nav").show(), jQuery('[data-spy="scroll"]').each(function() {
                jQuery(this).scrollspy("refresh")
            })
        }
    }), 1 <= jQuery(".flexslider-attachments").length && (void 0 !== jQuery(".flexslider-attachments").data("flexslider") && jQuery(".flexslider-attachments").flexslider("destroy"), jQuery(".flexslider-attachments").flexslider({
        slideshow: Boolean(Number(fusionFlexSliderVars.slideshow_autoplay)),
        slideshowSpeed: fusionFlexSliderVars.slideshow_speed,
        video: !1,
        smoothHeight: b,
        pauseOnHover: !1,
        useCSS: !1,
        prevText: "&#xf104;",
        nextText: "&#xf105;",
        controlNav: "thumbnails",
        start: function(a) {
            jQuery(a).find(".fusion-slider-loading").remove(), a.removeClass("fusion-flexslider-loading")
        }
    }), b && jQuery(".flexslider-attachments .flex-control-nav").css("position", "absolute")))
});