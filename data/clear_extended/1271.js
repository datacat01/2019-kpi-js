function fusionCalcColumnEqualHeights() {
    jQuery(".fusion-fullwidth.fusion-equal-height-columns").each(function() {
        jQuery(this).find(".fusion-layout-column .fusion-column-wrapper").not(function(u, n) {
            return jQuery(n).parents(".fusion-column-wrapper").length ? 1 : 0
        }).equalHeights()
    }), jQuery(".fusion-fullwidth.fusion-equal-height-columns .fusion-builder-row").each(function() {
        jQuery(this).find(".fusion-layout-column .fusion-column-wrapper").not(function(u, n) {
            return jQuery(n).parent(".fusion-column-wrapper").length || jQuery(n).parents(".fusion-events-shortcode").length ? 1 : 0
        }).equalHeights()
    }), jQuery(".fusion-layout-column > .fusion-column-wrapper > .fusion-column-wrapper").length ? jQuery(".fusion-layout-column > .fusion-column-wrapper > .fusion-column-wrapper").fusion_calculate_empty_column_height() : jQuery(".fusion-layout-column > .fusion-column-wrapper").fusion_calculate_empty_column_height()
}
jQuery(window).load(function() {
    jQuery(".fusion-fullwidth.fusion-equal-height-columns").each(function() {
        jQuery(this).find(".fusion-layout-column .fusion-column-wrapper").not(function(u, n) {
            return jQuery(n).parents(".fusion-column-wrapper").length ? 1 : 0
        }).equalHeights()
    }), jQuery(".fusion-fullwidth.fusion-equal-height-columns .fusion-builder-row").each(function() {
        jQuery(this).find(".fusion-layout-column .fusion-column-wrapper").not(function(u, n) {
            return jQuery(n).parent(".fusion-column-wrapper").length || jQuery(n).parents(".fusion-events-shortcode").length ? 1 : 0
        }).equalHeights()
    }), jQuery(".fusion-layout-column .fusion-column-wrapper").fusion_set_bg_img_dims(), jQuery(".fusion-layout-column > .fusion-column-wrapper > .fusion-column-wrapper").length ? jQuery(".fusion-layout-column > .fusion-column-wrapper > .fusion-column-wrapper").fusion_calculate_empty_column_height() : jQuery(".fusion-layout-column > .fusion-column-wrapper").fusion_calculate_empty_column_height(), jQuery(window).on("resize", function() {
        fusionCalcColumnEqualHeights(), setTimeout(function() {
            fusionCalcColumnEqualHeights()
        }, 500)
    })
});