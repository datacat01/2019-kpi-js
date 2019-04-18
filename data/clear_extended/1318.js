function fusionSetOriginalTypographyData(a) {
    jQuery(a).each(function() {
        jQuery(this).parents(".rev_slider").length || jQuery(this).parents("#layerslider-container").length || (jQuery(this).prop("style")["font-size"] && jQuery(this).attr("data-inline-fontsize", !0), jQuery(this).prop("style")["font-size"] && jQuery(this).attr("data-inline-lineheight", !0), jQuery(this).attr("data-fontsize", parseInt(jQuery(this).css("font-size"), 10)), jQuery(this).attr("data-lineheight", parseInt(jQuery(this).css("line-height"), 10)))
    })
}
var fusionCalculateResponsiveTypeValues = function(a, b, c, d) {
    var e, f, g = a || 1,
        h = b || 1.5,
        i = parseInt(jQuery("body").css("font-size"), 10),
        j = i * h,
        k = c || 0 === c ? c : 800,
        l = function() {
            var a;
            a = jQuery(window).width() >= k ? fusionTypographyVars.site_width.indexOf("px") ? parseInt(fusionTypographyVars.site_width, 10) : 1100 : k, e = jQuery(window).width() / a, f = 1 - (1 - e) * g, jQuery(window).width() <= a ? jQuery(d).each(function() {
                jQuery(this).parents(".rev_slider").length || jQuery(this).parents("#layerslider-container").length || (jQuery(this).data("fontsize") * f > j ? jQuery(this).css({
                    "font-size": Math.round(jQuery(this).data("fontsize") * f * 1e3) / 1e3,
                    "line-height": Math.round(jQuery(this).data("lineheight") * f * 1e3) / 1e3 + "px"
                }) : jQuery(this).data("fontsize") > j && jQuery(this).css({
                    "font-size": j,
                    "line-height": Math.round(jQuery(this).data("lineheight") * j / jQuery(this).data("fontsize") * 1e3) / 1e3 + "px"
                }))
            }) : jQuery(d).each(function() {
                jQuery(this).parents(".rev_slider").length || jQuery(this).parents("#layerslider-container").length || (jQuery(this).data("inline-fontsize") ? jQuery(this).css("font-size", jQuery(this).data("fontsize")) : jQuery(this).css("font-size", ""), jQuery(this).data("inline-lineheight") ? jQuery(this).css("line-height", jQuery(this).data("lineheight") + "px") : jQuery(this).css("line-height", ""))
            })
        };
    l(), jQuery(window).on("resize orientationchange", l)
};
jQuery(document).ready(function() {
    window.responsiveTypeElements = fusionTypographyVars.elements, Boolean(fusionTypographyVars.typography_responsive) && (fusionSetOriginalTypographyData(window.responsiveTypeElements), fusionCalculateResponsiveTypeValues(fusionTypographyVars.typography_sensitivity, fusionTypographyVars.typography_factor, 800, window.responsiveTypeElements))
}), jQuery(document).ajaxComplete(function() {
    Boolean(fusionTypographyVars.typography_responsive) && fusionSetOriginalTypographyData(window.responsiveTypeElements)
});