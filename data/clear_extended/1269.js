! function(a) {
    "use strict";
    a.fn.fusion_set_bg_img_dims = function() {
        a(this).each(function() {
            var t, i, s;
            '<div class="fusion-clearfix"></div>' !== a.trim(a(this).html()) && '<div class="fusion-column-content-centered"><div class="fusion-column-content"></div></div><div class="fusion-clearfix"></div>' !== a.trim(a(this).html().replace(/\s/g, "")) && "" !== a.trim(a(this).html()) || !a(this).data("bg-url") || ((t = new Image).src = a(this).data("bg-url"), i = parseInt(t.naturalHeight, 10), s = parseInt(t.naturalWidth, 10), a(this).attr("data-bg-height", i), a(this).attr("data-bg-width", s))
        })
    }, a.fn.fusion_calculate_empty_column_height = function() {
        a(this).each(function() {
            var t, i, s;
            (a(this).parents(".fusion-equal-height-columns").length && (Modernizr.mq("only screen and (max-width: " + fusionBgImageVars.content_break_point + "px)") || !0 === a(this).data("empty-column")) || !a(this).parents(".fusion-equal-height-columns").length) && ((!a(this).parent().hasClass("fusion-column-wrapper") || 2 !== a(this).parent().children().length) && a(this).parent().hasClass("fusion-column-wrapper") || '<div class="fusion-clearfix"></div>' !== a.trim(a(this).html()) && "" !== a.trim(a(this).html()) || (t = a(this).data("bg-height"), i = a(this).data("bg-width"), s = t * (a(this).outerWidth() / i), a(this).height(s), (a("html").hasClass("ua-edge") || a("html").hasClass("ua-ie")) && a(this).parent().height(s)))
        })
    }
}(jQuery);