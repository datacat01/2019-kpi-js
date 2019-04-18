! function(e) {
    Drupal.behaviors.mobileMenu = {
        attach: function(n) {
            var i = e('<div id="mobile-nav" class="mobile-nav"></div>'),
                a = e('<div class="mobile-bar clearfix"><a class="menu-button" href="#mobile-links">Menu</a></div>'),
                t = e('<div id="mobile-links" class="mobile-links element-hidden"></div>'),
                l = e(".main-nav", n).find("> .nav__inner > .menu").clone();
            l.attr("class", "menu").find("ul").each(function() {
                e(this).attr("class", "menu sub-menu")
            }), l.find("ul").remove(), l.appendTo(t), a.prependTo(i), t.appendTo(i), e(".masthead", n).after(i);
            var s = e("#mobile-nav", n).find(".mobile-links"),
                d = s.find("a");
            d.attr("tabindex", -1), e(".mobile-bar .menu-button", n).click(function(n) {
                e(this).toggleClass("menu-button-active"), s.toggleClass("element-hidden"), s.hasClass("element-hidden") ? d.attr("tabindex", -1) : d.removeAttr("tabindex"), n.preventDefault()
            }), s.height(e(document).height())
        }
    }
}(jQuery);