function getScrollBarWidth() {
    var e = jQuery("<div>").css({
            visibility: "hidden",
            width: 100,
            overflow: "scroll"
        }).appendTo("body"),
        i = jQuery("<div>").css({
            width: "100%"
        }).appendTo(e).outerWidth();
    return e.remove(), 100 - i
}
jQuery(window).load(function() {
    var o = parseFloat(getScrollBarWidth());
    jQuery(".fusion-modal").each(function() {
        jQuery("body").append(jQuery(this))
    }), jQuery(".fusion-modal").bind("hidden.bs.modal", function() {
        jQuery("html").css("overflow", ""), 0 !== o && (jQuery("body").hasClass("layout-boxed-mode") && jQuery('#sliders-container .main-flex[data-parallax="1"]').css("margin-left", function(e, i) {
            return parseFloat(i) + o / 2 + "px"
        }), jQuery('body, .fusion-is-sticky .fusion-header, .fusion-is-sticky .fusion-secondary-main-menu, #sliders-container .main-flex[data-parallax="1"], #wpadminbar, .fusion-footer.fusion-footer-parallax').css("padding-right", ""))
    }), jQuery(".fusion-modal").bind("show.bs.modal", function() {
        var e, i = 'body, .fusion-is-sticky .fusion-header, .fusion-is-sticky .fusion-secondary-main-menu, #sliders-container .main-flex[data-parallax="1"], #wpadminbar, .fusion-footer.fusion-footer-parallax';
        jQuery("html").css("overflow", "visible"), 0 !== o && (jQuery("body").hasClass("layout-boxed-mode") && (i = "body, #wpadminbar", jQuery('#sliders-container .main-flex[data-parallax="1"]').css("margin-left", function(e, i) {
            return parseFloat(i) - o / 2 + "px"
        })), jQuery(i).css("padding-right", function(e, i) {
            return parseFloat(i) + o + "px"
        })), e = jQuery(this), setTimeout(function() {
            e.find(".fusion-youtube").find("iframe").each(function() {
                1 !== jQuery(this).parents(".fusion-video").data("autoplay") && "true" !== jQuery(this).parents(".fusion-video").data("autoplay") || (jQuery(this).parents(".fusion-video").data("autoplay", "false"), "playVideo", this.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*"))
            }), e.find(".fusion-vimeo").find("iframe").each(function() {
                1 !== jQuery(this).parents(".fusion-video").data("autoplay") && "true" !== jQuery(this).parents(".fusion-video").data("autoplay") || (jQuery(this).parents(".fusion-video").data("autoplay", "false"), new Vimeo.Player(jQuery(this)[0]).play())
            }), "function" == typeof jQuery.fn.reinitializeGoogleMap && e.find(".shortcode-map").each(function() {
                jQuery(this).reinitializeGoogleMap()
            }), e.find(".fusion-carousel").length && "function" == typeof generateCarousel && generateCarousel(), e.find(".fusion-portfolio").each(function() {
                jQuery(this).find(".fusion-portfolio-wrapper").isotope()
            }), e.find(".fusion-gallery").each(function() {
                jQuery(this).isotope()
            }), "function" == typeof jQuery.fn.fusionCalcFlipBoxesHeight && e.find(".flip-box-inner-wrapper").each(function() {
                jQuery(this).fusionCalcFlipBoxesHeight()
            }), "function" == typeof jQuery.fn.equalHeights && e.find(".fusion-fullwidth.fusion-equal-height-columns").each(function() {
                jQuery(this).find(".fusion-layout-column .fusion-column-wrapper").equalHeights()
            }), e.find(".crossfade-images").each(function() {
                fusionResizeCrossfadeImagesContainer(jQuery(this)), fusionResizeCrossfadeImages(jQuery(this))
            }), e.find(".fusion-blog-shortcode").each(function() {
                jQuery(this).find(".fusion-blog-layout-grid").isotope()
            }), e.find(".fusion-testimonials .reviews").each(function() {
                jQuery(this).css("height", jQuery(this).children(".active-testimonial").height())
            }), "function" == typeof calcSelectArrowDimensions && calcSelectArrowDimensions(), jQuery(window).trigger("resize", ["modal-open"])
        }, 350)
    }), 1 == jQuery("#sliders-container .tfs-slider").data("parallax") && jQuery(".fusion-modal").css("top", jQuery(".header-wrapper").height()), jQuery(".fusion-modal").each(function() {
        jQuery(this).on("hide.bs.modal", function() {
            jQuery(this).find(".fusion-youtube iframe").each(function() {
                this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            }), jQuery(this).find(".fusion-vimeo iframe").each(function() {
                new Vimeo.Player(this).pause()
            })
        })
    }), jQuery("[data-toggle=modal]").on("click", function(e) {
        e.preventDefault()
    }), jQuery(".fusion-modal-text-link").click(function(e) {
        e.preventDefault()
    })
}), jQuery(document).ready(function() {
    jQuery(".fusion-modal").on("shown.bs.modal", function() {
        jQuery(this).find(".shortcode-map").each(function() {
            jQuery(this).reinitializeGoogleMap()
        })
    })
});