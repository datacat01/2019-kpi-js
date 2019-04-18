jQuery(window).load(function() {
    jQuery(".fusion-recent-posts-infinite .fusion-columns").each(function() {
        var i, n = jQuery(this),
            s = n.parent(),
            e = "." + s.attr("class").replace(/\ /g, ".") + " ",
            t = jQuery(this).find(".fusion-column");
        jQuery(n).infinitescroll({
            navSelector: e + ".fusion-infinite-scroll-trigger",
            nextSelector: e + "a.pagination-next",
            itemSelector: e + "div.pagination .current, " + e + "article.post",
            loading: {
                finishedMsg: fusionRecentPostsVars.infinite_finished_msg,
                msg: jQuery('<div class="fusion-loading-container fusion-clearfix"><div class="fusion-loading-spinner"><div class="fusion-spinner-1"></div><div class="fusion-spinner-2"></div><div class="fusion-spinner-3"></div></div><div class="fusion-loading-msg">' + fusionRecentPostsVars.infinite_loading_text + "</div>")
            },
            maxPage: s.data("pages") ? s.data("pages") : void 0,
            errorCallback: function() {}
        }, function(e) {
            jQuery(e).hide(), imagesLoaded(e, function() {
                jQuery(e).fadeIn()
            }), jQuery(n).find(".flexslider").flexslider({
                slideshow: Boolean(Number(fusionRecentPostsVars.slideshow_autoplay)),
                slideshowSpeed: fusionRecentPostsVars.slideshow_speed,
                video: !0,
                smoothHeight: !1,
                pauseOnHover: !1,
                useCSS: !1,
                prevText: "&#xf104;",
                nextText: "&#xf105;",
                start: function(e) {
                    e.removeClass("fusion-flexslider-loading"), void 0 !== e.slides && 0 !== e.slides.eq(e.currentSlide).find("iframe").length ? (Number(fusionRecentPostsVars.pagination_video_slide) ? jQuery(e).find(".flex-control-nav").css("bottom", "-20px") : jQuery(e).find(".flex-control-nav").hide(), Number(fusionRecentPostsVars.status_yt) && !0 === window.yt_vid_exists && window.YTReady(function() {
                        new YT.Player(e.slides.eq(e.currentSlide).find("iframe").attr("id"), {
                            events: {
                                onStateChange: onPlayerStateChange(e.slides.eq(e.currentSlide).find("iframe").attr("id"), e)
                            }
                        })
                    })) : Number(fusionRecentPostsVars.pagination_video_slide) ? jQuery(e).find(".flex-control-nav").css("bottom", "0px") : jQuery(e).find(".flex-control-nav").show(), jQuery.waypoints("viewportHeight"), jQuery.waypoints("refresh")
                },
                before: function(e) {
                    0 !== e.slides.eq(e.currentSlide).find("iframe").length && (Number(fusionRecentPostsVars.status_vimeo) && -1 !== e.slides.eq(e.currentSlide).find("iframe")[0].src.indexOf("vimeo") && new Vimeo.Player(e.slides.eq(e.currentSlide).find("iframe")[0]).pause(), Number(fusionRecentPostsVars.status_yt) && !0 === window.yt_vid_exists && window.YTReady(function() {
                        new YT.Player(e.slides.eq(e.currentSlide).find("iframe").attr("id"), {
                            events: {
                                onStateChange: onPlayerStateChange(e.slides.eq(e.currentSlide).find("iframe").attr("id"), e)
                            }
                        })
                    }))
                },
                after: function(e) {
                    0 !== e.slides.eq(e.currentSlide).find("iframe").length ? (Number(fusionRecentPostsVars.pagination_video_slide) ? jQuery(e).find(".flex-control-nav").css("bottom", "-20px") : jQuery(e).find(".flex-control-nav").hide(), Number(fusionRecentPostsVars.status_yt) && !0 === window.yt_vid_exists && window.YTReady(function() {
                        new YT.Player(e.slides.eq(e.currentSlide).find("iframe").attr("id"), {
                            events: {
                                onStateChange: onPlayerStateChange(e.slides.eq(e.currentSlide).find("iframe").attr("id"), e)
                            }
                        })
                    })) : Number(fusionRecentPostsVars.pagination_video_slide) ? jQuery(e).find(".flex-control-nav").css("bottom", "0px") : jQuery(e).find(".flex-control-nav").show(), jQuery('[data-spy="scroll"]').each(function() {
                        jQuery(this).scrollspy("refresh")
                    })
                }
            }), jQuery(e).each(function() {
                jQuery(this).find(".full-video, .video-shortcode, .wooslider .slide-content").fitVids()
            }), i = s.find(".current").html(), s.find(".current").remove(), s.data("pages") == i && (s.find(".fusion-loading-container").hide(), s.find(".fusion-load-more-button").hide()), "individual" !== fusionRecentPostsVars.lightbox_behavior && t.find(".fusion-post-slideshow").length || (window.avadaLightBox.activate_lightbox(jQuery(e)), t = n.find(".post")), window.avadaLightBox.refresh_lightbox(), jQuery(window).trigger("resize", [!1]), setTimeout(function() {
                jQuery(window).trigger("resize", [!1])
            }, 500), jQuery.isFunction(jQuery.fn.initWaypoint) && jQuery(window).initWaypoint(), "undefined" != typeof niceScrollReInit && niceScrollReInit()
        }), jQuery(s).hasClass("fusion-recent-posts-load-more") && (jQuery(n).infinitescroll("unbind"), jQuery(s).find(".fusion-load-more-button").on("click", function(e) {
            e.preventDefault(), jQuery(n).infinitescroll("retrieve")
        })), 1 === parseInt(s.data("pages"), 10) && (s.find(".fusion-loading-container").hide(), s.find(".fusion-load-more-button").hide())
    })
});