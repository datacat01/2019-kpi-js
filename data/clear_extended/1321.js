jQuery(document).ready(function() {
    jQuery(".fusion-footer .fusion-footer-widget-area .fusion-column").each(function() {
        jQuery(this).is(":empty") && jQuery(this).css("margin-bottom", "0")
    }), jQuery(".fusion-social-links-footer").find(".fusion-social-networks").children().length || (jQuery(".fusion-social-links-footer").hide(), jQuery(".fusion-footer-copyright-area .fusion-copyright-notice").css("padding-bottom", "0")), jQuery(".avada-footer-fx-sticky").fusionFooterSticky(), jQuery(window).on("resize", function() {
        jQuery(".avada-footer-fx-sticky").fusionFooterSticky()
    })
}), jQuery(document).ajaxComplete(function() {
    jQuery(".avada-footer-fx-sticky").fusionFooterSticky()
}), jQuery.fn.fusionFooterSticky = function() {
    var a;
    jQuery("#wrapper").css("height", "auto"), a = jQuery("#wrapper").height(), a > jQuery(window).height() ? (jQuery("#wrapper").css("height", "auto"), jQuery("body").css("height", "auto")) : (jQuery("#wrapper").css("height", ""), jQuery("body").css("height", ""))
};