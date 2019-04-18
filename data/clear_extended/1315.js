function getStickyHeaderHeight(a) {
    var b = 1,
        c = 0,
        d = Modernizr.mq("only screen and (min-device-width: 768px) and (max-device-width: 1366px) and (orientation: portrait)") || Modernizr.mq("only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)");
    return a = a || !1, (jQuery(".fusion-header-v4").length || jQuery(".fusion-header-v5").length) && (b = 2), jQuery("#side-header").length && (b = "side"), "1" == avadaHeaderVars.header_sticky && (jQuery(".fusion-header-wrapper").length || jQuery("#side-header").length) && (1 == b ? (c = jQuery(".fusion-header").outerHeight(), a && 1 == avadaHeaderVars.sticky_header_shrinkage && (c = 64)) : 2 == b && (c = jQuery(".fusion-secondary-main-menu").outerHeight(), "menu_and_logo" === avadaHeaderVars.header_sticky_type2_layout && (c += jQuery(".fusion-header").outerHeight())), Modernizr.mq("only screen and (max-width: " + avadaHeaderVars.side_header_break_point + "px)") && ("1" == avadaHeaderVars.header_sticky_mobile ? (c = jQuery(".fusion-header").outerHeight(), "side" === b && (c = jQuery("#side-header").outerHeight())) : c = 0), "1" != avadaHeaderVars.header_sticky_tablet && d && (c = 0)), c
}

function getWaypointTopOffset() {
    var a = 0,
        b = Modernizr.mq("only screen and (min-device-width: 768px) and (max-device-width: 1366px) and (orientation: portrait)") || Modernizr.mq("only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)"),
        c = 1;
    return (jQuery(".fusion-header-v4").length || jQuery(".fusion-header-v5").length) && (c = 2), jQuery("#side-header").length && (c = "side"), "1" == avadaHeaderVars.header_sticky && (jQuery(".fusion-header-wrapper").length || jQuery("#side-header").length) && (1 == c ? a = jQuery(".fusion-header").outerHeight() - 1 : 2 == c && (a = jQuery(".fusion-secondary-main-menu").outerHeight(), "menu_and_logo" === avadaHeaderVars.header_sticky_type2_layout && (a += jQuery(".fusion-header").outerHeight() - 1)), Modernizr.mq("only screen and (max-width: " + avadaHeaderVars.side_header_break_point + "px)") && ("1" == avadaHeaderVars.header_sticky_mobile ? (a = jQuery(".fusion-header").outerHeight() - 1, "side" === c && (a = jQuery("#side-header").outerHeight() - 1)) : a = 0), "1" != avadaHeaderVars.header_sticky_tablet && b && (a = 0)), a
}
jQuery(window).load(function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n = !0,
        o = 0;
    jQuery(window).scroll(function() {
        jQuery("#sliders-container .tfs-slider").data("parallax") && "wide" !== avadaHeaderVars.layout_mode && !cssua.ua.tablet_pc && !cssua.ua.mobile && Modernizr.mq("only screen and (min-width: " + avadaHeaderVars.side_header_break_point + "px)") && "full" === avadaHeaderVars.offset_scroll ? (k = jQuery("#sliders-container .tfs-slider"), j = jQuery(window).scrollTop(), m = 0, l = jQuery("body").css("marginTop"), l = parseInt(l, 10), "1" == avadaHeaderVars.header_sticky && (1 <= jQuery(".fusion-header-wrapper").length || 1 <= jQuery("#side-header").length) ? (c = parseInt(jQuery(".fusion-header").height(), 10), m = 0) : (c = l, m = parseInt(avadaHeaderVars.nav_height, 10), 1 > jQuery("#side-header").length && (c = 0)), j >= jQuery("#wpadminbar").height() + l + m ? (k.css("top", 0), k.addClass("fusion-fixed-slider")) : (k.css("top", 0), k.removeClass("fusion-fixed-slider"))) : jQuery("#sliders-container .tfs-slider.fusion-fixed-slider").length && jQuery("#sliders-container .tfs-slider.fusion-fixed-slider").removeClass("fusion-fixed-slider")
    }), "1" == avadaHeaderVars.header_sticky && (1 <= jQuery(".fusion-header-wrapper").length || 1 <= jQuery("#side-header").length) && (a = 300, "0" == avadaHeaderVars.sticky_header_shrinkage && (a = 0), b = jQuery(".fusion-header").parent(), window.$headerParentHeight = b.outerHeight(), window.$headerHeight = jQuery(".fusion-header").outerHeight(), c = parseInt(avadaHeaderVars.nav_height, 10), window.$menuHeight = c, d = parseInt(avadaHeaderVars.nav_highlight_border, 10), window.$scrolled_header_height = 65, e = jQuery(".fusion-logo img:visible").length ? jQuery(".fusion-logo img:visible") : "", f = !1, window.$stickyTrigger = jQuery(".fusion-header"), window.$wpadminbarHeight = jQuery("#wpadminbar").length ? jQuery("#wpadminbar").height() : 0, window.$stickyTrigger_position = window.$stickyTrigger.length ? Math.round(window.$stickyTrigger.offset().top) - window.$wpadminbarHeight - window.$woo_store_notice - window.$top_frame : 0, window.$woo_store_notice = jQuery(".woocommerce-store-notice").length && jQuery(".woocommerce-store-notice").is(":visible") ? jQuery(".woocommerce-store-notice").outerHeight() : 0, window.$top_frame = jQuery(".fusion-top-frame").length ? jQuery(".fusion-top-frame").outerHeight() - window.$woo_store_notice : 0, window.$sticky_header_type = 1, window.$slider_offset = 0, window.$site_width = jQuery("#wrapper").outerWidth(), window.$media_query_test_1 = Modernizr.mq("only screen and (min-device-width: 768px) and (max-device-width: 1366px) and (orientation: portrait)") || Modernizr.mq("only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)"), window.$media_query_test_2 = Modernizr.mq("screen and (max-width: " + avadaHeaderVars.side_header_break_point + "px)"), window.$media_query_test_3 = Modernizr.mq("screen and (max-width: " + avadaHeaderVars.side_header_break_point + "px)"), window.$media_query_test_4 = Modernizr.mq("only screen and (max-width: " + avadaHeaderVars.side_header_break_point + "px)"), window.$standardLogoHeight = jQuery(".fusion-standard-logo").height() + parseInt(jQuery(".fusion-logo").data("margin-top"), 10) + parseInt(jQuery(".fusion-logo").data("margin-bottom"), 10), window.$initial_desktop_header_height = Math.max(window.$headerHeight, Math.round(Math.max(window.$menuHeight, window.$standardLogoHeight) + parseFloat(jQuery(".fusion-header").find(".fusion-row").css("padding-top")) + parseFloat(jQuery(".fusion-header").find(".fusion-row").css("padding-bottom")))), window.$initial_sticky_header_shrinkage = avadaHeaderVars.sticky_header_shrinkage, window.$sticky_can_be_shrinked = !0, "0" == avadaHeaderVars.sticky_header_shrinkage && (a = 0, window.$scrolled_header_height = window.$headerHeight), e && (0 < e.attr("retina_logo_url").length ? (g = new Image, g.src = e.attr("retina_logo_url"), window.original_logo_height = parseInt(e.height(), 10) + parseInt(avadaHeaderVars.logo_margin_top, 10) + parseInt(avadaHeaderVars.logo_margin_bottom, 10)) : (g = new Image, g.src = e.attr("src"), window.original_logo_height = parseInt(g.naturalHeight, 10) + parseInt(avadaHeaderVars.logo_margin_top, 10) + parseInt(avadaHeaderVars.logo_margin_bottom, 10))), (1 <= jQuery(".fusion-header-v4").length || 1 <= jQuery(".fusion-header-v5").length) && (window.$sticky_header_type = 2, "menu_and_logo" === avadaHeaderVars.header_sticky_type2_layout || Modernizr.mq("only screen and (max-width: " + avadaHeaderVars.side_header_break_point + "px)") && "modern" === avadaHeaderVars.mobile_menu_design ? window.$stickyTrigger = jQuery(".fusion-sticky-header-wrapper") : window.$stickyTrigger = jQuery(".fusion-secondary-main-menu"), window.$stickyTrigger_position = Math.round(window.$stickyTrigger.offset().top) - window.$wpadminbarHeight - window.$woo_store_notice - window.$top_frame), 1 == window.$sticky_header_type ? Modernizr.mq("only screen and (max-width: " + avadaHeaderVars.side_header_break_point + "px)") ? window.$scrolled_header_height = window.$headerHeight : window.$original_sticky_trigger_height = jQuery(window.$stickyTrigger).outerHeight() : 2 == window.$sticky_header_type && ("classic" === avadaHeaderVars.mobile_menu_design && jQuery(b).height(window.$headerParentHeight), Modernizr.mq("only screen and (max-width: " + avadaHeaderVars.side_header_break_point + "px)") ? window.$scrolled_header_height = window.$headerParentHeight : jQuery(b).height(window.$headerParentHeight)), 1 <= jQuery("#side-header").length && (window.$sticky_header_type = 3), jQuery(".fusion-secondary-header").length && (o = jQuery(".fusion-secondary-header").outerHeight()), jQuery(document).height() - (window.$initial_desktop_header_height + o + window.$wpadminbarHeight - window.$scrolled_header_height) < jQuery(window).height() && 1 == avadaHeaderVars.sticky_header_shrinkage ? (window.$sticky_can_be_shrinked = !1, jQuery(".fusion-header-wrapper").removeClass("fusion-is-sticky")) : window.$sticky_can_be_shrinked = !0, h = jQuery(window).width(), i = jQuery(window).height(), jQuery(window).resize(function() {
        var c, d, f, g, j, k, l, m;
        window.$media_query_test_1 = Modernizr.mq("only screen and (min-device-width: 768px) and (max-device-width: 1366px) and (orientation: portrait)") || Modernizr.mq("only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)"), window.$media_query_test_2 = Modernizr.mq("screen and (max-width: " + avadaHeaderVars.side_header_break_point + "px)"), window.$media_query_test_3 = Modernizr.mq("screen and (max-width: " + avadaHeaderVars.side_header_break_point + "px)"), window.$media_query_test_4 = Modernizr.mq("only screen and (max-width: " + avadaHeaderVars.side_header_break_point + "px)"), !Modernizr.mq("only screen and (min-width: " + avadaHeaderVars.side_header_break_point + "px)") || -1 === avadaHeaderVars.header_padding_top.indexOf("%") && -1 === avadaHeaderVars.header_padding_bottom.indexOf("%") || jQuery(".fusion-is-sticky").length || (window.$headerHeight = Math.round(Math.max(window.$menuHeight, window.$standardLogoHeight) + parseFloat(jQuery(".fusion-header").find(".fusion-row").css("padding-top")) + parseFloat(jQuery(".fusion-header").find(".fusion-row").css("padding-bottom"))), jQuery(".fusion-header, .fusion-header-sticky-height").height(window.$headerHeight), "0" == avadaHeaderVars.sticky_header_shrinkage && (window.$scrolled_header_height = window.$headerHeight)), (-1 !== avadaHeaderVars.header_padding_top.indexOf("%") || -1 !== avadaHeaderVars.header_padding_bottom.indexOf("%") && !jQuery(".fusion-is-sticky").length) && (window.$initial_desktop_header_height = Math.max(window.$headerHeight, Math.round(Math.max(window.$menuHeight, window.$standardLogoHeight) + parseFloat(jQuery(".fusion-header").find(".fusion-row").css("padding-top")) + parseFloat(jQuery(".fusion-header").find(".fusion-row").css("padding-bottom"))))), "1" != avadaHeaderVars.header_sticky_tablet && window.$media_query_test_1 ? (jQuery(".fusion-header-wrapper, .fusion-header-sticky-height, .fusion-header, .fusion-logo, .fusion-header-wrapper .fusion-main-menu > li a, .fusion-header-wrapper .fusion-secondary-main-menu").attr("style", ""), jQuery(".fusion-header-wrapper").removeClass("fusion-is-sticky")) : "1" == avadaHeaderVars.header_sticky_tablet && window.$media_query_test_1 && (a = 0), "1" != avadaHeaderVars.header_sticky_mobile && window.$media_query_test_2 && !window.$media_query_test_1 ? (jQuery(".fusion-header-wrapper, .fusion-header-sticky-height, .fusion-header, .fusion-logo, .fusion-header-wrapper .fusion-main-menu > li a, .fusion-header-wrapper .fusion-secondary-main-menu").attr("style", ""), jQuery(".fusion-header-wrapper").removeClass("fusion-is-sticky")) : "1" == avadaHeaderVars.header_sticky_mobile && window.$media_query_test_2 && !window.$media_query_test_1 && (a = 0), h && i && (jQuery(window).width() != h || jQuery(window).height() != i) && n && (c = parseInt(avadaHeaderVars.nav_height, 10), d = parseInt(avadaHeaderVars.nav_highlight_border, 10), jQuery("#wpadminbar").length ? window.$wpadminbarHeight = jQuery("#wpadminbar").height() : window.$wpadminbarHeight = 0, window.$woo_store_notice = jQuery(".woocommerce-store-notice").length && jQuery(".woocommerce-store-notice").is(":visible") ? jQuery(".woocommerce-store-notice").outerHeight() : 0, jQuery(".fusion-is-sticky").length && (f = jQuery(".fusion-header"), 2 == window.$sticky_header_type && (f = "menu_only" !== avadaHeaderVars.header_sticky_type2_layout || "classic" !== avadaHeaderVars.mobile_menu_design && window.$media_query_test_4 ? jQuery(".fusion-sticky-header-wrapper") : jQuery(".fusion-secondary-main-menu")), jQuery("#wpadminbar").length && (jQuery(".fusion-header, .fusion-sticky-header-wrapper, .fusion-secondary-main-menu").css("top", ""), jQuery(f).css("top", window.$wpadminbarHeight + window.$woo_store_notice + window.$top_frame)), "boxed" === avadaHeaderVars.layout_mode && jQuery(f).css("max-width", jQuery("#wrapper").outerWidth() + "px")), 1 == window.$sticky_header_type && (avadaHeaderVars.sticky_header_shrinkage = window.$initial_sticky_header_shrinkage, jQuery(".fusion-secondary-header").length ? window.$stickyTrigger_position = Math.round(jQuery(".fusion-secondary-header").offset().top) - window.$wpadminbarHeight - window.$woo_store_notice - window.$top_frame + jQuery(".fusion-secondary-header").outerHeight() : window.$stickyTrigger_position = Math.round(jQuery(".fusion-header").offset().top) - window.$wpadminbarHeight - window.$woo_store_notice - window.$top_frame, Modernizr.mq("only screen and (max-width: " + avadaHeaderVars.side_header_break_point + "px)") || (g = jQuery(".fusion-logo img:visible").outerHeight() + parseInt(avadaHeaderVars.logo_margin_top, 10) + parseInt(avadaHeaderVars.logo_margin_bottom, 10), j = 0, jQuery(".fusion-main-menu > ul > li").each(function() {
            j += jQuery(this).outerWidth()
        }), jQuery(".fusion-header-v6").length && (j = 0), jQuery(".fusion-is-sticky").length ? (j > jQuery(".fusion-header .fusion-row").width() - jQuery(".fusion-logo img:visible").outerWidth() ? (window.$headerHeight = jQuery(".fusion-main-menu").outerHeight() + g, jQuery(".fusion-header-v7").length && (window.$headerHeight = jQuery(".fusion-middle-logo-menu").height()), (jQuery(".fusion-header-v2").length || jQuery(".fusion-header-v3").length) && (window.$headerHeight += 1)) : "0" == avadaHeaderVars.sticky_header_shrinkage ? (window.original_logo_height > c ? window.$headerHeight = window.original_logo_height : window.$headerHeight = c, window.$headerHeight += parseFloat(jQuery(".fusion-header > .fusion-row").css("padding-top")) + parseFloat(jQuery(".fusion-header > .fusion-row").css("padding-bottom")), window.$headerHeight = Math.round(window.$headerHeight), (jQuery(".fusion-header-v2").length || jQuery(".fusion-header-v3").length) && (window.$headerHeight += 1)) : window.$headerHeight = 65, window.$scrolled_header_height = window.$headerHeight, jQuery(".fusion-header-sticky-height").css("height", window.$headerHeight), jQuery(".fusion-header").css("height", window.$headerHeight)) : (k = jQuery(".fusion-header .fusion-row").width() - jQuery(".fusion-logo img:visible").outerWidth(), jQuery(".fusion-header-v7").length && (k = jQuery(".fusion-header .fusion-row").width()), j > k ? (window.$headerHeight = jQuery(".fusion-main-menu").outerHeight() + g, jQuery(".fusion-header-v7").length && (window.$headerHeight = jQuery(".fusion-middle-logo-menu").height()), avadaHeaderVars.sticky_header_shrinkage = "0") : (window.original_logo_height > c ? window.$headerHeight = window.original_logo_height : window.$headerHeight = c, jQuery(".fusion-header-v7").length && (window.$headerHeight = jQuery(".fusion-main-menu").outerHeight())), window.$headerHeight += parseFloat(jQuery(".fusion-header > .fusion-row").css("padding-top")) + parseFloat(jQuery(".fusion-header > .fusion-row").css("padding-bottom")), window.$headerHeight = Math.round(window.$headerHeight), (jQuery(".fusion-header-v2").length || jQuery(".fusion-header-v3").length) && (window.$headerHeight += 1), window.$scrolled_header_height = 65, "0" == avadaHeaderVars.sticky_header_shrinkage && (window.$scrolled_header_height = window.$headerHeight), jQuery(".fusion-header-sticky-height").css("height", window.$headerHeight), jQuery(".fusion-header").css("height", window.$headerHeight))), Modernizr.mq("only screen and (max-width: " + avadaHeaderVars.side_header_break_point + "px)") && (jQuery(".fusion-header").css("height", ""), window.$headerHeight = jQuery(".fusion-header").outerHeight(), window.$scrolled_header_height = window.$headerHeight, jQuery(".fusion-header-sticky-height").css("height", window.$scrolled_header_height))), 2 == window.$sticky_header_type && ("modern" === avadaHeaderVars.mobile_menu_design && (!Modernizr.mq("only screen and (max-width: " + avadaHeaderVars.side_header_break_point + "px)") && jQuery(".fusion-is-sticky").length && "menu_only" === avadaHeaderVars.header_sticky_type2_layout ? window.$headerParentHeight = jQuery(".fusion-header").parent().outerHeight() + jQuery(".fusion-secondary-main-menu").outerHeight() : window.$headerParentHeight = jQuery(".fusion-header").parent().outerHeight(), window.$scrolled_header_height = window.header_parent_height, Modernizr.mq("only screen and (max-width: " + avadaHeaderVars.side_header_break_point + "px)") || (window.$headerParentHeight = jQuery(".fusion-header").outerHeight() + jQuery(".fusion-secondary-main-menu").outerHeight(), window.$stickyTrigger_position = Math.round(jQuery(".fusion-header").offset().top) - window.$wpadminbarHeight - window.$woo_store_notice - window.$top_frame + jQuery(".fusion-header").outerHeight(), jQuery(b).height(window.$headerParentHeight), jQuery(".fusion-header-sticky-height").css("height", "")), Modernizr.mq("only screen and (max-width: " + avadaHeaderVars.side_header_break_point + "px)") && (jQuery(".fusion-secondary-header").length ? window.$stickyTrigger_position = Math.round(jQuery(".fusion-secondary-header").offset().top) - window.$wpadminbarHeight - window.$woo_store_notice - window.$top_frame + jQuery(".fusion-secondary-header").outerHeight() : window.$stickyTrigger_position = Math.round(jQuery(".fusion-header").offset().top) - window.$wpadminbarHeight - window.$woo_store_notice - window.$top_frame, jQuery(b).height(""), jQuery(".fusion-header-sticky-height").css("height", jQuery(".fusion-sticky-header-wrapper").outerHeight()).hide())), "classic" === avadaHeaderVars.mobile_menu_design && (window.$headerParentHeight = jQuery(".fusion-header").outerHeight() + jQuery(".fusion-secondary-main-menu").outerHeight(), window.$stickyTrigger_position = Math.round(jQuery(".fusion-header").offset().top) - window.$wpadminbarHeight - window.$woo_store_notice - window.$top_frame + jQuery(".fusion-header").outerHeight(), jQuery(b).height(window.$headerParentHeight))), 3 == window.$sticky_header_type && ("", Modernizr.mq("only screen and (max-width:" + avadaHeaderVars.side_header_break_point + "px)") || (jQuery("#side-header-sticky").css({
            height: "",
            top: ""
        }), jQuery("#side-header").hasClass("fusion-is-sticky") && (jQuery("#side-header").css({
            top: "",
            position: ""
        }), jQuery("#side-header").removeClass("fusion-is-sticky")))), jQuery(document).height() - (window.$initial_desktop_header_height - window.$scrolled_header_height) < jQuery(window).height() && 1 == avadaHeaderVars.sticky_header_shrinkage ? (window.$sticky_can_be_shrinked = !1, jQuery(".fusion-header-wrapper").removeClass("fusion-is-sticky"), jQuery(".fusion-header-sticky-height").hide(), jQuery(".fusion-header").css("height", ""), jQuery(".fusion-logo").css({
            "margin-top": "",
            "margin-bottom": ""
        }), jQuery(".fusion-main-menu > ul > li > a").css({
            height: "",
            "line-height": ""
        }), jQuery(".fusion-logo img").css("height", "")) : (window.$sticky_can_be_shrinked = !0, 1 <= jQuery(".fusion-is-sticky").length && (1 != window.$sticky_header_type || Modernizr.mq("only screen and (max-width: " + avadaHeaderVars.side_header_break_point + "px)") || (Modernizr.mq("only screen and (max-width: " + avadaHeaderVars.side_header_break_point + "px)") ? jQuery(".fusion-header-sticky-height").css("height", window.$scrolled_header_height).show() : window.$headerHeight == window.$initial_desktop_header_height ? (jQuery(window.$stickyTrigger).stop(!0, !0).animate({
            height: window.$scrolled_header_height
        }, {
            queue: !1,
            duration: a,
            easing: "easeOutCubic",
            complete: function() {
                jQuery(this).css("overflow", "visible")
            }
        }), jQuery(".fusion-header-sticky-height").show(), jQuery(".fusion-header-sticky-height").stop(!0, !0).animate({
            height: window.$scrolled_header_height
        }, {
            queue: !1,
            duration: a,
            easing: "easeOutCubic",
            complete: function() {
                jQuery(this).css("overflow", "visible")
            }
        })) : jQuery(".fusion-header-sticky-height").show(), "1" == avadaHeaderVars.sticky_header_shrinkage && window.$headerHeight == window.$initial_desktop_header_height && (e && (l = e.height(), l < window.$scrolled_header_height - 10 ? m = (window.$scrolled_header_height - l) / 2 : (l = window.$scrolled_header_height - 10, m = 5), e.stop(!0, !0).animate({
            height: l
        }, {
            queue: !1,
            duration: a,
            easing: "easeOutCubic",
            complete: function() {
                jQuery(this).css("display", "")
            },
            step: function() {
                jQuery(this).css("display", "")
            }
        })), jQuery(".fusion-logo").stop(!0, !0).animate({
            "margin-top": m,
            "margin-bottom": m
        }, {
            queue: !1,
            duration: a,
            easing: "easeOutCubic"
        }), jQuery(".fusion-header-v6").length || jQuery(".fusion-main-menu > ul > li").not(".fusion-middle-logo-menu-logo").find("> a").stop(!0, !0).animate({
            height: window.$scrolled_header_height,
            "line-height": window.$scrolled_header_height - d
        }, {
            queue: !1,
            duration: a,
            easing: "easeOutCubic"
        }))))), h = jQuery(window).width(), i = jQuery(window).height())
    }), jQuery(window).scroll(function() {
        var b, g;
        if (window.$sticky_can_be_shrinked) {
            if ("1" != avadaHeaderVars.header_sticky_tablet && window.$media_query_test_1) return;
            if ("1" == avadaHeaderVars.header_sticky_tablet && window.$media_query_test_1 && (a = 0), "1" != avadaHeaderVars.header_sticky_mobile && window.$media_query_test_2 && !window.$media_query_test_1) return;
            if ("1" == avadaHeaderVars.header_sticky_mobile && window.$media_query_test_2 && (a = 0), 3 == window.$sticky_header_type && "1" != avadaHeaderVars.header_sticky_mobile) return;
            if (3 == window.$sticky_header_type && "1" == avadaHeaderVars.header_sticky_mobile && !window.$media_query_test_3) return;
            0 === jQuery(".fusion-is-sticky").length && jQuery(".fusion-header, .fusion-secondary-main-menu, #side-header").find(".fusion-mobile-nav-holder > ul").is(":visible") && (jQuery(".fusion-header-has-flyout-menu-content").length ? window.$stickyTrigger_position = Math.round(jQuery(".fusion-header, .fusion-sticky-header-wrapper, #side-header").find(".fusion-header-has-flyout-menu-content").offset().top) - window.$wpadminbarHeight - window.$woo_store_notice - window.$top_frame + jQuery(".fusion-header, .fusion-sticky-header-wrapper, #side-header").find(".fusion-header-has-flyout-menu-content").height() : window.$stickyTrigger_position = Math.round(jQuery(".fusion-header, .fusion-sticky-header-wrapper, #side-header").find(".fusion-mobile-nav-holder:visible").offset().top) - window.$wpadminbarHeight - window.$woo_store_notice - window.$top_frame + jQuery(".fusion-header, .fusion-sticky-header-wrapper, #side-header").find(".fusion-mobile-nav-holder:visible").height()), 3 == window.$sticky_header_type || 0 !== jQuery(".fusion-is-sticky").length || jQuery(".fusion-header, .fusion-secondary-main-menu").find(".fusion-mobile-nav-holder > ul").is(":visible") || (window.$stickyTrigger = jQuery(".fusion-header"), window.$stickyTrigger_position = Math.round(window.$stickyTrigger.offset().top) - window.$wpadminbarHeight - window.$woo_store_notice - window.$top_frame, 2 == window.$sticky_header_type && ("menu_and_logo" === avadaHeaderVars.header_sticky_type2_layout || window.$media_query_test_4 && "modern" === avadaHeaderVars.mobile_menu_design ? window.$stickyTrigger = jQuery(".fusion-sticky-header-wrapper") : window.$stickyTrigger = jQuery(".fusion-secondary-main-menu"), window.$stickyTrigger_position = Math.round(window.$stickyTrigger.offset().top) - window.$wpadminbarHeight - window.$woo_store_notice - window.$top_frame), "modern" !== avadaHeaderVars.mobile_menu_design || 2 != window.$sticky_header_type || !window.$media_query_test_4 && "menu_and_logo" !== avadaHeaderVars.header_sticky_type2_layout || (window.$headerHeight = jQuery(window.$stickyTrigger).outerHeight(), window.$scrolled_header_height = window.$headerHeight, jQuery(".fusion-header-sticky-height").css("height", window.$scrolled_header_height).show())), 3 != window.$sticky_header_type || 0 !== jQuery(".fusion-is-sticky").length || jQuery("#side-header").find(".fusion-mobile-nav-holder > ul").is(":visible") || (window.$stickyTrigger = jQuery("#side-header"), window.$stickyTrigger_position = Math.round(window.$stickyTrigger.offset().top) - window.$wpadminbarHeight - window.$woo_store_notice - window.$top_frame), jQuery(window).scrollTop() > window.$stickyTrigger_position ? !1 === f && (window.$woo_store_notice = jQuery(".woocommerce-store-notice").length && jQuery(".woocommerce-store-notice").is(":visible") ? jQuery(".woocommerce-store-notice").outerHeight() : 0, jQuery(".fusion-header-wrapper").addClass("fusion-is-sticky"), jQuery(window.$stickyTrigger).css("top", window.$wpadminbarHeight + window.$woo_store_notice + window.$top_frame), e = jQuery(".fusion-logo img:visible"), "modern" === avadaHeaderVars.mobile_menu_design ? (jQuery(".fusion-header, .fusion-secondary-main-menu, #side-header").find(".fusion-mobile-nav-holder").hide(), jQuery(".fusion-secondary-main-menu .fusion-main-menu-search .fusion-custom-menu-item-contents").hide(), jQuery(".fusion-mobile-menu-search").hide()) : "classic" === avadaHeaderVars.mobile_menu_design && (jQuery(".fusion-header, .fusion-secondary-main-menu, #side-header").find(".fusion-mobile-nav-holder > ul").hide(), jQuery(".fusion-mobile-menu-search").hide()), "modern" === avadaHeaderVars.mobile_menu_design && 1 <= jQuery(".fusion-is-sticky").length && 1 <= jQuery(".fusion-mobile-sticky-nav-holder").length && jQuery(".fusion-mobile-nav-holder").is(":visible") && jQuery(".fusion-mobile-nav-holder").not(".fusion-mobile-sticky-nav-holder").hide(), "boxed" === avadaHeaderVars.layout_mode && jQuery(window.$stickyTrigger).css("max-width", jQuery("#wrapper").outerWidth()), 1 == window.$sticky_header_type && (Modernizr.mq("only screen and (max-width: " + avadaHeaderVars.side_header_break_point + "px)") ? jQuery(".fusion-header-sticky-height").css("height", window.$scrolled_header_height).show() : window.$headerHeight == window.$initial_desktop_header_height ? (jQuery(window.$stickyTrigger).stop(!0, !0).animate({
                height: window.$scrolled_header_height
            }, {
                queue: !1,
                duration: a,
                easing: "easeOutCubic",
                complete: function() {
                    jQuery(this).css("overflow", "visible")
                }
            }), jQuery(".fusion-header-sticky-height").show(), jQuery(".fusion-header-sticky-height").stop(!0, !0).animate({
                height: window.$scrolled_header_height
            }, {
                queue: !1,
                duration: a,
                easing: "easeOutCubic",
                complete: function() {
                    jQuery(this).css("overflow", "visible")
                }
            })) : jQuery(".fusion-header-sticky-height").show(), setTimeout(function() {
                jQuery(".fusion-header").addClass("fusion-sticky-shadow")
            }, 150), "1" == avadaHeaderVars.sticky_header_shrinkage && window.$headerHeight == window.$initial_desktop_header_height && (jQuery(window.$stickyTrigger).find(".fusion-row").stop(!0, !0).animate({
                "padding-top": 0,
                "padding-bottom": 0
            }, {
                queue: !1,
                duration: a,
                easing: "easeOutCubic"
            }), e && (b = e.height(), e.attr("data-logo-height", e.height()), e.attr("data-logo-width", e.width()), b < window.$scrolled_header_height - 10 ? g = (window.$scrolled_header_height - b) / 2 : (b = window.$scrolled_header_height - 10, g = 5), e.stop(!0, !0).animate({
                height: b
            }, {
                queue: !1,
                duration: a,
                easing: "easeOutCubic",
                complete: function() {
                    jQuery(this).css("display", "")
                },
                step: function() {
                    jQuery(this).css("display", "")
                }
            })), jQuery(".fusion-logo").stop(!0, !0).animate({
                "margin-top": g,
                "margin-bottom": g
            }, {
                queue: !1,
                duration: a,
                easing: "easeOutCubic"
            }), jQuery(".fusion-header-v6").length || jQuery(".fusion-main-menu > ul > li").not(".fusion-middle-logo-menu-logo").find("> a").stop(!0, !0).animate({
                height: window.$scrolled_header_height,
                "line-height": window.$scrolled_header_height - d
            }, {
                queue: !1,
                duration: a,
                easing: "easeOutCubic"
            }))), 2 == window.$sticky_header_type && ("menu_and_logo" === avadaHeaderVars.header_sticky_type2_layout && (jQuery(window.$stickyTrigger).css("height", ""), window.$headerHeight = jQuery(window.$stickyTrigger).outerHeight(), window.$scrolled_header_height = window.$headerHeight, jQuery(window.$stickyTrigger).css("height", window.$scrolled_header_height), jQuery(".fusion-header-sticky-height").css("height", window.$scrolled_header_height)), jQuery(".fusion-header-sticky-height").show()), 3 == window.$sticky_header_type && Modernizr.mq("only screen and (max-width:" + avadaHeaderVars.side_header_break_point + "px)") && (jQuery("#side-header-sticky").css({
                height: jQuery("#side-header").outerHeight()
            }), jQuery("#side-header").css({
                position: "fixed",
                top: window.$wpadminbarHeight + window.$woo_store_notice + window.$top_frame
            }).addClass("fusion-is-sticky")), f = !0) : jQuery(window).scrollTop() <= window.$stickyTrigger_position && (jQuery(".fusion-header-wrapper").removeClass("fusion-is-sticky"), jQuery(".fusion-header").removeClass("fusion-sticky-shadow"), e = jQuery(".fusion-logo img:visible"), "modern" === avadaHeaderVars.mobile_menu_design && 0 === jQuery(".fusion-is-sticky").length && 1 <= jQuery(".fusion-mobile-sticky-nav-holder").length && jQuery(".fusion-mobile-nav-holder").is(":visible") && jQuery(".fusion-mobile-sticky-nav-holder").hide(), 1 == window.$sticky_header_type && (Modernizr.mq("only screen and (max-width: " + avadaHeaderVars.side_header_break_point + "px)") ? jQuery(".fusion-header-sticky-height").hide().css("height", window.$headerHeight) : (1 == window.$sticky_header_type && 65 == window.$headerHeight && (window.$headerHeight = window.$initial_desktop_header_height), window.$headerHeight == window.$initial_desktop_header_height ? (jQuery(window.$stickyTrigger).stop(!0, !0).animate({
                height: window.$headerHeight
            }, {
                queue: !1,
                duration: a,
                easing: "easeOutCubic",
                complete: function() {
                    jQuery(this).css("overflow", "visible")
                },
                step: function() {
                    jQuery(this).css("overflow", "visible")
                }
            }), jQuery(".fusion-header-sticky-height").stop(!0, !0).animate({
                height: window.$headerHeight
            }, {
                queue: !1,
                duration: a,
                easing: "easeOutCubic",
                complete: function() {
                    jQuery(this).css("overflow", "visible")
                },
                step: function() {
                    jQuery(this).css("overflow", "visible")
                }
            })) : jQuery(".fusion-header-v7").length && (jQuery(".fusion-header-sticky-height").css("height", jQuery(".fusion-middle-logo-menu").height()), jQuery(".fusion-header").css("height", jQuery(".fusion-middle-logo-menu").height())), jQuery(".fusion-header-sticky-height").hide()), "1" == avadaHeaderVars.sticky_header_shrinkage && window.$headerHeight == window.$initial_desktop_header_height && (jQuery(window.$stickyTrigger).find(".fusion-row").stop(!0, !0).animate({
                "padding-top": avadaHeaderVars.header_padding_top,
                "padding-bottom": avadaHeaderVars.header_padding_bottom
            }, {
                queue: !1,
                duration: a,
                easing: "easeOutCubic"
            }), e && e.stop(!0, !0).animate({
                height: e.data("logo-height")
            }, {
                queue: !1,
                duration: a,
                easing: "easeOutCubic",
                complete: function() {
                    jQuery(this).css("display", ""), jQuery(".fusion-sticky-logo").css("height", "")
                }
            }), jQuery(".fusion-logo").stop(!0, !0).animate({
                "margin-top": jQuery(".fusion-logo").data("margin-top"),
                "margin-bottom": jQuery(".fusion-logo").data("margin-bottom")
            }, {
                queue: !1,
                duration: a,
                easing: "easeOutCubic"
            }), jQuery(".fusion-header-v6").length || jQuery(".fusion-main-menu > ul > li").not(".fusion-middle-logo-menu-logo").find("> a").stop(!0, !0).animate({
                height: c,
                "line-height": c - d
            }, {
                queue: !1,
                duration: a,
                easing: "easeOutCubic"
            }))), 2 == window.$sticky_header_type && (jQuery(".fusion-header-sticky-height").hide(), "menu_and_logo" === avadaHeaderVars.header_sticky_type2_layout && (jQuery(window.$stickyTrigger).css("height", ""), window.$headerHeight = jQuery(window.$stickyTrigger).outerHeight(), window.$scrolled_header_height = window.$headerHeight, jQuery(window.$stickyTrigger).css("height", window.$scrolled_header_height), jQuery(".fusion-header-sticky-height").css("height", window.$scrolled_header_height))), 3 == window.$sticky_header_type && Modernizr.mq("only screen and (max-width:" + avadaHeaderVars.side_header_break_point + "px)") && (jQuery("#side-header-sticky").css({
                height: ""
            }), jQuery("#side-header").css({
                position: ""
            }).removeClass("fusion-is-sticky")), f = !1)
        }
    }), jQuery(window).trigger("scroll")), setTimeout(function() {
        n = !1, jQuery(window).trigger("resize"), n = !0
    }, 10), jQuery(window).on("resize", function() {
        jQuery(".woocommerce-store-notice").length && jQuery(".woocommerce-store-notice").is(":visible") && !jQuery(".fusion-top-frame").length && (jQuery("#wrapper").css("margin-top", jQuery(".woocommerce-store-notice").outerHeight()), jQuery(".sticky-header").length && jQuery(".sticky-header").css("margin-top", jQuery(".woocommerce-store-notice").outerHeight())), jQuery(".sticky-header").length && (765 > jQuery(window).width() ? jQuery("body.admin-bar #header-sticky.sticky-header").css("top", "46px") : jQuery("body.admin-bar #header-sticky.sticky-header").css("top", "32px"))
    })
}), jQuery(document).ajaxComplete(function() {
    var a, b, c, d;
    jQuery(window).trigger("scroll"), 1 <= jQuery(".fusion-is-sticky").length && window.$stickyTrigger && 3 != window.$sticky_header_type && !jQuery(".fusion-header-v6").length && "background" !== avadaHeaderVars.nav_highlight_style && (a = 1 >= Math.abs(jQuery(window.$stickyTrigger).height() - jQuery(".fusion-is-sticky .fusion-header > .fusion-row").outerHeight()) ? jQuery(".fusion-is-sticky .fusion-header > .fusion-row") : jQuery(window.$stickyTrigger), b = parseInt(avadaHeaderVars.nav_highlight_border, 10), c = a.height(), d = a.height() - b, 2 == window.$sticky_header_type && (a = jQuery(".fusion-secondary-main-menu"), c = a.find(".fusion-main-menu > ul > li > a").outerHeight(), d = c - b), jQuery(".fusion-main-menu > ul > li").not(".fusion-middle-logo-menu-logo").find("> a").css({
        height: c + "px",
        "line-height": d + "px"
    }))
});