jQuery(window).load(function() {
    jQuery('[data-toggle="tooltip"]').each(function() {
        var a;
        a = jQuery(this).parents(".fusion-header-wrapper").length ? ".fusion-header-wrapper" : jQuery(this).parents("#side-header").length ? "#side-header" : "body", (!cssua.ua.mobile || cssua.ua.mobile && "_blank" !== jQuery(this).attr("target")) && jQuery(this).tooltip({
            container: a
        })
    }), jQuery(".fusion-tooltip").hover(function() {
        var a = jQuery(this).attr("title");
        jQuery(this).attr("data-title", a), jQuery(this).attr("title", "")
    }), jQuery(".fusion-tooltip").click(function() {
        var a = jQuery(this).attr("data-title");
        jQuery(this).attr("title", a), jQuery(this).blur()
    })
}), jQuery(document).ready(function() {
    jQuery(".tooltip-shortcode, .fusion-secondary-header .fusion-social-networks li, .fusion-author-social .fusion-social-networks li, .fusion-footer-copyright-area .fusion-social-networks li, .fusion-footer-widget-area .fusion-social-networks li, .sidebar .fusion-social-networks li, .social_links_shortcode li, .share-box li, .social-icon, .social li").mouseenter(function(a) {
        jQuery(this).find(".popup").hoverFlow(a.type, {
            opacity: "show"
        })
    }), jQuery(".tooltip-shortcode, .fusion-secondary-header .fusion-social-networks li, .fusion-author-social .fusion-social-networks li, .fusion-footer-copyright-area .fusion-social-networks li, .fusion-footer-widget-area .fusion-social-networks li, .sidebar .fusion-social-networks li, .social_links_shortcode li, .share-box li, .social-icon, .social li").mouseleave(function(a) {
        jQuery(this).find(".popup").hoverFlow(a.type, {
            opacity: "hide"
        })
    })
});