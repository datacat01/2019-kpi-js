jQuery(document).ready(function() {
    var a, b, c, d;
    if (jQuery(".comment-respond .comment-reply-title").length && !jQuery(".comment-respond .comment-reply-title").parents(".woocommerce-tabs").length) {
        for (a = avadaCommentVars.title_style_type.split(" "), b = "", "", d = 0; d < a.length; d++) b += " sep-" + a[d]; - 1 < b.indexOf("underline") && b, jQuery("body").hasClass("rtl") ? jQuery(".comment-respond .comment-reply-title").addClass("title-heading-right") : jQuery(".comment-respond .comment-reply-title").addClass("title-heading-left"), c = ' style="margin-top:' + avadaCommentVars.title_margin_top + ";margin-bottom:" + avadaCommentVars.title_margin_bottom + ';"', jQuery(".comment-respond .comment-reply-title").wrap('<div class="fusion-title title fusion-title-size-three' + b + '"' + c + "></div>"), -1 === b.indexOf("underline") && jQuery(".comment-respond .comment-reply-title").parent().append('<div class="title-sep-container"><div class="title-sep' + b + ' "></div></div>')
    }
    jQuery(".textarea-comment").each(function() {
        jQuery(this).css("max-width", jQuery("#content").width())
    }), jQuery(window).on("resize", function() {
        jQuery(".textarea-comment").each(function() {
            jQuery(this).css("max-width", jQuery("#content").width())
        })
    })
});