! function(s) {
    "use strict";
    s.fn.fusion_responsive_title_shortcode = function() {
        s(this).each(function() {
            var t = s(this),
                e = t.find("h1, h2, h3, h4, h5, h6"),
                i = e.data("min-width") ? e.data("min-width") : e.outerWidth(),
                n = t.parent(),
                o = t.parents(".slide-content").length ? n.width() : n.outerWidth();
            (0 !== i && !1 !== i && "0" !== i || 0 !== o && !1 !== o && "0" !== o) && o <= i + 100 ? (t.addClass("fusion-border-below-title"), e.data("min-width", i)) : t.removeClass("fusion-border-below-title")
        })
    }
}(jQuery), jQuery(document).ready(function() {
    jQuery(".fusion-title").fusion_responsive_title_shortcode(), jQuery(window).on("resize", function() {
        jQuery(".fusion-title").fusion_responsive_title_shortcode()
    })
});