! function(a) {
    "use strict";
    a.fn.fusionScroller = function(b) {
        var c = a.extend({
            type: "opacity",
            offset: 0,
            endOffset: ""
        }, b);
        a(this).each(function() {
            var b, d, e, f = this;
            a(window).on("scroll", function() {
                var g, h, i, j, k;
                b = a(f).offset().top, a("body").hasClass("admin-bar") && (b = a(f).offset().top - a("#wpadminbar").outerHeight()), 0 < c.offset && (b = a(f).offset().top - c.offset), d = a(f).outerHeight(), e = b + d, c.endOffset && a(c.endOffset).length && (e = a(c.endOffset).offset().top), g = a(this).scrollTop(), g >= b && g <= e && (h = e - g, i = h / d * 100, "opacity" === c.type ? (j = i / 100 * 1, a(f).css({
                    opacity: j
                })) : "blur" === c.type ? (i = 100 - i, k = "blur(" + i / 100 * 50 + "px)", a(f).css({
                    "-webkit-filter": k,
                    "-ms-filter": k,
                    "-o-filter": k,
                    "-moz-filter": k,
                    filter: k
                })) : "fading_blur" === c.type && (j = i / 100 * 1, i = 100 - i, k = "blur(" + i / 100 * 50 + "px)", a(f).css({
                    "-webkit-filter": k,
                    "-ms-filter": k,
                    "-o-filter": k,
                    "-moz-filter": k,
                    filter: k,
                    opacity: j
                }))), g < b && ("opacity" === c.type ? a(f).css({
                    opacity: 1
                }) : "blur" === c.type ? (k = "blur(0px)", a(f).css({
                    "-webkit-filter": k,
                    "-ms-filter": k,
                    "-o-filter": k,
                    "-moz-filter": k,
                    filter: k
                })) : "fading_blur" === c.type && (k = "blur(0px)", a(f).css({
                    opacity: 1,
                    "-webkit-filter": k,
                    "-ms-filter": k,
                    "-o-filter": k,
                    "-moz-filter": k,
                    filter: k
                })))
            })
        })
    }
}(jQuery);