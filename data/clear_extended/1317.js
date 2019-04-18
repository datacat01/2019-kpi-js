! function(a) {
    "use strict";
    a.fn.fusion_scroll_to_anchor_target = function() {
        var b, c, d, e, f, g, h, i = a(this).attr("href"),
            j = i.substr(i.indexOf("#")).slice(1),
            k = a("#" + j);
        if (k.length && "" !== j) {
            if ((k.parents(".hundred-percent-height-scrolling").length || k.find(".hundred-percent-height-scrolling").length) && (0 != fusionScrollToAnchorVars.container_hundred_percent_height_mobile || !Modernizr.mq("only screen and (max-width: " + fusionScrollToAnchorVars.content_break_point + "px)"))) {
                if (h = k.hasClass("fusion-scroll-section-element") ? k : k.parents(".fusion-scroll-section-element"), h.hasClass("active") && h.offset().top >= a(window).scrollTop() && h.offset().top < a(window).scrollTop() + a(window).height()) return !1;
                if (location.hash && "#_" === location.hash.substring(0, 2) && a(".fusion-page-load-link").addClass("fusion-page.load-scroll-section-link"), k.parents(".fusion-scroll-section").length) return k.parents(".fusion-scroll-section").hasClass("active") ? k.parents(".fusion-scroll-section").find(".fusion-scroll-section-nav").find(".fusion-scroll-section-link[data-element=" + h.data("element") + "]").trigger("click") : (g = k.parents(".fusion-scroll-section").offset().top, a("html, body").animate({
                    scrollTop: g
                }, {
                    duration: 400,
                    easing: "easeInExpo",
                    complete: function() {
                        setTimeout(function() {
                            k.parents(".fusion-scroll-section").find(".fusion-scroll-section-nav").find(".fusion-scroll-section-link[data-element=" + h.data("element") + "]").trigger("click"), location.hash && "#_" === location.hash.substring(0, 2) && ("history" in window && "replaceState" in history && history.replaceState("", window.location.href.replace("#_", "#"), window.location.href.replace("#_", "#")), a(".fusion-page-load-link").removeClass("fusion-page.load-scroll-section-link"))
                        }, 100)
                    }
                })), !1
            }
            return b = "function" == typeof getAdminbarHeight ? getAdminbarHeight() : 0, c = "function" == typeof getStickyHeaderHeight ? getStickyHeaderHeight() : 0, d = a(document).scrollTop(), e = k.offset().top - b - c, f = Math.abs(d - e) / 2, g = d > e ? d - f : d + f, a("html, body").animate({
                scrollTop: g
            }, {
                duration: 400,
                easing: "easeInExpo",
                complete: function() {
                    b = "function" == typeof getAdminbarHeight ? getAdminbarHeight() : 0, c = "function" == typeof getStickyHeaderHeight ? getStickyHeaderHeight() : 0, e = k.offset().top - b - c, a("html, body").animate({
                        scrollTop: e
                    }, 450, "easeOutExpo", function() {
                        location.hash && "#_" === location.hash.substring(0, 2) && "history" in window && "replaceState" in history && history.replaceState("", window.location.href.replace("#_", "#"), window.location.href.replace("#_", "#"))
                    })
                }
            }), (k.hasClass("tab-pane") || k.hasClass("tab-link")) && "function" == typeof a.fn.fusionSwitchTabOnLinkClick && setTimeout(function() {
                k.parents(".fusion-tabs").fusionSwitchTabOnLinkClick()
            }, 100), !1
        }
    }
}(jQuery), jQuery(document).ready(function() {
    jQuery('.fusion-menu a:not([href="#"], .fusion-megamenu-widgets-container a, .search-link), .fusion-mobile-nav-item a:not([href="#"], .search-link), .fusion-button:not([href="#"], input, button), .fusion-one-page-text-link:not([href="#"]), .fusion-content-boxes .fusion-read-more:not([href="#"])').click(function(a) {
        var b, c, d, e, f, g, h, i;
        if (jQuery(this).hasClass("avada-noscroll") || jQuery(this).parent().hasClass("avada-noscroll") || jQuery(this).is(".fusion-content-box-button, .fusion-tagline-button") && jQuery(this).parents(".avada-noscroll").length) return !0;
        if (this.hash) {
            if (b = window.location.href.split("#"), "/" === b[0].charAt(b[0].length - 1) ? b[0] : b[0] + "/", i = jQuery(this).attr("target") ? jQuery(this).attr("target") : "_self", c = jQuery(this).attr("href"), d = c.split("#"), e = void 0 !== d[1] ? d[1] : "", f = e.substring(0, 1), g = d[0], h = g.substring(g.length - 1, g.length), "/" !== h && (g += "/"), "!" === f || "/" === f) return;
            a.preventDefault(), location.pathname.replace(/^\//, "") != this.pathname.replace(/^\//, "") && "#" !== c.charAt(0) || "" !== location.search && -1 === location.search.indexOf("lang=") && !jQuery(this).hasClass("tfs-scroll-down-indicator") ? ("/" === g && "" !== location.search && (g = location.href.replace(location.search, "")), window.open(g + "#_" + e, i)) : (jQuery(this).fusion_scroll_to_anchor_target(), "history" in window && "replaceState" in history && history.replaceState("", c, c), jQuery(this).parents(".fusion-flyout-menu").length && jQuery(".fusion-flyout-menu-toggle").trigger("click"))
        }
    })
}), location.hash && "#_" === location.hash.substring(0, 2) && (jQuery(".fusion-page-load-link").attr("href", decodeURIComponent("#" + location.hash.substring(2))), jQuery(window).load(function() {
    jQuery(".fusion-blog-shortcode").length ? setTimeout(function() {
        jQuery(".fusion-page-load-link").fusion_scroll_to_anchor_target()
    }, 300) : jQuery(".fusion-page-load-link").fusion_scroll_to_anchor_target()
}));