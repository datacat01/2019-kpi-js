! function(a) {
    "use strict";
    a.fn.equalHeights = function(b, c) {
        var d;
        a(this).parents().find(".fusion-portfolio-wrapper");
        return !Modernizr.mq("only screen and (min-width: " + fusionEqualHeightVars.content_break_point + "px)") && !Modernizr.mq("only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait)") || a("body").hasClass("tax-portfolio_category") ? this.each(function() {
            a(this).css("min-height", "0"), a(this).css("height", "auto"), a(this).find(".fusion-column-content-centered").css("min-height", "0"), a(this).find(".fusion-column-content-centered").css("height", "auto")
        }) : (d = b || 0, this.each(function() {
            a(this).css("min-height", "0"), a(this).css("height", "auto"), a(this).find(".fusion-column-content-centered").css("min-height", "0"), a(this).find(".fusion-column-content-centered").css("height", "auto"), a(this).outerHeight() > d && (d = a(this).outerHeight())
        }), c && d > c && (d = c), this.each(function() {
            var b = d;
            0 === parseInt(b, 10) && a(this).attr("data-empty-column", "true"), a(this).children(".fusion-column-content-centered").length && (b = d - (a(this).outerHeight() - a(this).height())), a(this).css("min-height", b), a(this).find(".fusion-column-content-centered").css("min-height", b), 8 < cssua.ua.ie && a(this).find(".fusion-column-content-centered").css("height", b)
        }))
    }
}(jQuery);