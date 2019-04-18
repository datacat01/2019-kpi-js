var generateCarousel = function() {
    jQuery().carouFredSel && jQuery(".fusion-carousel").each(function() {
        var a = jQuery(this).attr("data-imagesize") ? jQuery(this).data("imagesize") : "fixed",
            b = !jQuery(this).attr("data-metacontent") || "yes" !== jQuery(this).data("metacontent"),
            c = !(!jQuery(this).attr("data-autoplay") || "yes" !== jQuery(this).data("autoplay")),
            d = jQuery(this).parents(".related-posts").length ? fusionCarouselVars.related_posts_speed : fusionCarouselVars.carousel_speed,
            e = jQuery(this).attr("data-scrollfx") ? jQuery(this).data("scrollfx") : "scroll",
            f = jQuery(this).attr("data-scrollitems") ? jQuery(this).data("scrollitems") : null,
            g = !(!jQuery(this).attr("data-touchscroll") || "yes" !== jQuery(this).data("touchscroll")),
            h = g ? " fusion-carousel-swipe" : "",
            i = jQuery(this).attr("data-columns") ? jQuery(this).data("columns") : 6,
            j = jQuery(this).attr("data-itemmargin") ? parseInt(jQuery(this).data("itemmargin"), 10) : 44,
            k = jQuery(this).attr("data-itemwidth") ? parseInt(jQuery(this).data("itemwidth"), 10) + j : 180 + j,
            l = jQuery(this).parent().hasClass("fusion-image-carousel") && "fixed" === a ? "115px" : "variable";
        jQuery(this).find(".fusion-carousel-positioner").css("margin-left", "-" + j + "px"), jQuery(this).find(".fusion-carousel-item").css("margin-left", j + "px"), jQuery(this).find(".fusion-nav-prev").css("margin-left", j + "px"), jQuery(this).find("ul").carouFredSel({
            circular: !0,
            infinite: !0,
            responsive: !0,
            centerVertically: b,
            height: l,
            width: "100%",
            auto: {
                play: c,
                timeoutDuration: parseInt(d, 10)
            },
            items: {
                height: l,
                width: k,
                visible: {
                    min: 1,
                    max: i
                }
            },
            scroll: {
                pauseOnHover: !0,
                items: f,
                fx: e
            },
            swipe: {
                onTouch: g,
                onMouse: g,
                options: {
                    excludedElements: "button, input, select, textarea, a, .noSwipe"
                }
            },
            prev: jQuery(this).find(".fusion-nav-prev"),
            next: jQuery(this).find(".fusion-nav-next"),
            onCreate: function() {
                jQuery(this).find(".fusion-carousel-item-wrapper").css("visibility", "inherit"), jQuery(this).parents(".fusion-carousel").find(".fusion-carousel-nav").css("visibility", "inherit"), jQuery(this).parents(".fusion-woo-featured-products-slider").length && jQuery(this).parent().css("overflow", ""), b && jQuery(this).css("line-height", jQuery(this).parent().height() + "px"), jQuery(this).css("top", "auto"), jQuery(this).parents(".fusion-carousel").find(".fusion-nav-next").each(function() {
                    jQuery(this).css("left", jQuery(this).parents(".fusion-carousel").find(".fusion-carousel-wrapper").width() - jQuery(this).width())
                }), "fixed" === a && jQuery(this).find(".fusion-placeholder-image").each(function() {
                    jQuery(this).css("height", jQuery(this).parents(".fusion-carousel-item").siblings().first().find("img").height())
                }), jQuery(window).trigger("resize")
            },
            currentVisible: function(a) {
                return a
            }
        }, {
            wrapper: {
                classname: "fusion-carousel-wrapper" + h
            }
        })
    })
};
! function(a) {
    "use strict";
    a.fn.fusion_recalculate_carousel = function() {
        a(this).not(".fusion-woo-featured-products-slider").each(function() {
            var b, c, d = a(this),
                e = a(this).data("imagesize");
            setTimeout(function() {
                d.find(".fusion-nav-next").each(function() {
                    a(this).css("left", d.find(".fusion-carousel-wrapper").width() - a(this).width())
                }), "fixed" === e && (b = d.find(".fusion-carousel-item").map(function() {
                    return a(this).find("img").height()
                }).get(), c = Math.max.apply(null, b), d.find(".fusion-placeholder-image").each(function() {
                    a(this).css("height", c)
                }), 1 <= a(d).parents(".fusion-image-carousel").length && d.find(".fusion-image-wrapper").each(function() {
                    a(this).css("height", c), a(this).css("width", "100%"), a(this).find("> a").css("line-height", c - 2 + "px")
                }))
            }, 5)
        })
    }
}(jQuery), jQuery(window).load(function() {
    generateCarousel()
}), jQuery(document).ready(function() {
    jQuery(window).on("resize", function() {
        jQuery(".fusion-carousel").fusion_recalculate_carousel()
    })
});