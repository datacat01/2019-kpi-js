function wrapGravitySelects() {
    jQuery(".gform_wrapper select:not([multiple])").filter(":visible").each(function() {
        var a = jQuery(this);
        setTimeout(function() {
            var b;
            a.siblings(".chosen-container").length || a.parent(".gravity-select-parent").length || (b = a.css("width"), a.wrap('<div class="gravity-select-parent"></div>'), a.parent().width(b), a.css("cssText", "width: 100% !important;"), jQuery('<div class="select-arrow">&#xe61f;</div>').appendTo(a.parent(".gravity-select-parent"))), calcSelectArrowDimensions()
        }, 50)
    })
}

function recursiveGFormSubmissionHandler() {
    jQuery(".gform_wrapper").find("form").attr("target") && -1 < jQuery(".gform_wrapper").find("form").attr("target").indexOf("gform_ajax_frame") && jQuery(".gform_wrapper").find("form").submit(function() {
        setTimeout(function() {
            wrapGravitySelects(), calcSelectArrowDimensions(), recursiveGFormSubmissionHandler()
        }, 800)
    })
}
jQuery(document).bind("gform_post_conditional_logic", function() {
    var a = jQuery(".gform_wrapper select");
    jQuery(a).each(function() {
        jQuery(this).hasClass("chzn-done") && jQuery(this).parent().hasClass("gravity-select-parent") && (jQuery(this).parent().find(".select-arrow").remove(), jQuery(this).unwrap('<div class="gravity-select-parent"></div>'))
    })
}), recursiveGFormSubmissionHandler(), jQuery(window).load(function() {
    jQuery(".gform_wrapper").each(function() {
        jQuery(this).removeClass("gf_browser_ie")
    }), wrapGravitySelects(), "undefined" != typeof gform && gform && gform.addAction("gform_post_conditional_logic_field_action", function(a, b, c, d, e) {
        "show" !== b || e || setTimeout(function() {
            calcSelectArrowDimensions(), wrapGravitySelects()
        }, 50)
    })
});