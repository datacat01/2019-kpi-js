function info_box_set_auto_height() {
    jQuery(".aio-icon-box.square_box-icon").each(function(i, t) {
        var e = jQuery(window).width() || "";
        if ("" != e)
            if (768 <= e) {
                var o = jQuery(this).attr("data-min-height") || "";
                "" != o && jQuery(this).css("min-height", o)
            } else jQuery(this).css("min-height", "initial")
    })
}
jQuery(window).load(function(i) {
    info_box_set_auto_height()
}), jQuery(document).ready(function(i) {
    info_box_set_auto_height(), jQuery(window).resize(function(i) {
        info_box_set_auto_height()
    })
});