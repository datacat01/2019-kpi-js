! function(e) {
    "use strict";
    e.fn.fusionSwitchTabOnLinkClick = function(i) {
        var t, n;
        n = "#_" === (t = i || ("#_" === document.location.hash.substring(0, 2) ? document.location.hash.replace("#_", "#") : document.location.hash)).substring(0, 2) ? t.split("#_")[1] : t.split("#")[1], t && e(this).find('.nav-tabs li a[href="' + t + '"]').length && (e(this).find(".nav-tabs li").removeClass("active"), e(this).find('.nav-tabs li a[href="' + t + '"]').parent().addClass("active"), e(this).find(".tab-content .tab-pane").removeClass("in").removeClass("active"), e(this).find('.tab-content .tab-pane[id="' + n + '"]').addClass("in").addClass("active")), t && e(this).find('.nav-tabs li a[id="' + n + '"]').length && (e(this).find(".nav-tabs li").removeClass("active"), e(this).find('.nav-tabs li a[id="' + n + '"]').parent().addClass("active"), e(this).find(".tab-content .tab-pane").removeClass("in").removeClass("active"), e(this).find('.tab-content .tab-pane[id="' + e(this).find('.nav-tabs li a[id="' + n + '"]').attr("href").split("#")[1] + '"]').addClass("in").addClass("active"))
    }
}(jQuery), jQuery(document).ready(function() {
    jQuery(".fusion-tabs").each(function() {
        jQuery(this).fusionSwitchTabOnLinkClick()
    }), jQuery(".nav-tabs li").click(function(i) {
        var t, n = jQuery(this),
            e = n.find("a").attr("href");
        n.parents(".fusion-tabs").find(".nav li").removeClass("active"), n.parents(".fusion-tabs").find(e).find(".fusion-woo-slider").length && (t = 0, n.parents(".fusion-tabs").hasClass("horizontal-tabs") && (t = n.parents(".fusion-tabs").find(".nav").height()), n.parents(".fusion-tabs").height(n.parents(".fusion-tabs").find(".tab-content").outerHeight(!0) + t)), setTimeout(function() {
            "function" == typeof jQuery.fn.reinitializeGoogleMap && n.parents(".fusion-tabs").find(e).find(".shortcode-map").each(function() {
                jQuery(this).reinitializeGoogleMap()
            }), n.parents(".fusion-tabs").find(e).find(".fusion-carousel").length && "function" == typeof generateCarousel && generateCarousel(), n.parents(".fusion-tabs").find(e).find(".fusion-portfolio").each(function() {
                var i = jQuery(this).find(".fusion-portfolio-wrapper"),
                    t = i.attr("id");
                t && (i = jQuery("#" + t)), i.isotope()
            }), n.parents(".fusion-tabs").find(e).find(".fusion-gallery").each(function() {
                jQuery(this).isotope()
            }), "function" == typeof jQuery.fn.fusionCalcFlipBoxesHeight && n.parents(".fusion-tabs").find(e).find(".flip-box-inner-wrapper").each(function() {
                jQuery(this).fusionCalcFlipBoxesHeight()
            }), "function" == typeof jQuery.fn.equalHeights && n.parents(".fusion-tabs").find(e).find(".fusion-fullwidth.fusion-equal-height-columns").each(function() {
                jQuery(this).find(".fusion-layout-column .fusion-column-wrapper").equalHeights()
            }), n.parents(".fusion-tabs").find(e).find(".fusion-woo-slider").length && n.parents(".fusion-tabs").css("height", ""), n.parents(".fusion-tabs").find(e).find(".crossfade-images").each(function() {
                fusionResizeCrossfadeImagesContainer(jQuery(this)), fusionResizeCrossfadeImages(jQuery(this))
            }), n.parents(".fusion-tabs").find(e).find(".fusion-blog-shortcode").each(function() {
                jQuery(this).find(".fusion-blog-layout-grid").isotope()
            }), n.parents(".fusion-tabs").find(e).find(".fusion-testimonials .reviews").each(function() {
                jQuery(this).css("height", jQuery(this).children(".active-testimonial").height())
            }), "function" == typeof calcSelectArrowDimensions && calcSelectArrowDimensions(), jQuery(window).trigger("resize")
        }, 350), i.preventDefault()
    }), Modernizr.mq("only screen and (max-width: " + fusionTabVars.content_break_point + "px)") && jQuery(".tabs-vertical").addClass("tabs-horizontal").removeClass("tabs-vertical"), jQuery(window).on("resize", function() {
        Modernizr.mq("only screen and (max-width: " + fusionTabVars.content_break_point + "px)") ? (jQuery(".tabs-vertical").addClass("tabs-original-vertical"), jQuery(".tabs-vertical").addClass("tabs-horizontal").removeClass("tabs-vertical")) : jQuery(".tabs-original-vertical").removeClass("tabs-horizontal").addClass("tabs-vertical")
    })
}), jQuery(window).load(function() {
    jQuery(".vertical-tabs").length && jQuery(".vertical-tabs .tab-content .tab-pane").each(function() {
        var i;
        jQuery(this).parents(".vertical-tabs").hasClass("clean") ? jQuery(this).css("min-height", jQuery(".vertical-tabs .nav-tabs").outerHeight() - 10) : jQuery(this).css("min-height", jQuery(".vertical-tabs .nav-tabs").outerHeight()), jQuery(this).find(".video-shortcode").length && (i = parseInt(jQuery(this).find(".fusion-video").css("max-width").replace("px", ""), 10), jQuery(this).css({
            float: "none",
            "max-width": i + 60
        }))
    }), jQuery(window).on("resize", function() {
        jQuery(".vertical-tabs").length && jQuery(".vertical-tabs .tab-content .tab-pane").css("min-height", jQuery(".vertical-tabs .nav-tabs").outerHeight())
    })
});