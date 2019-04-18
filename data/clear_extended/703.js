! function(n) {
    Drupal.behaviors.dropDownMenu = {
        attach: function(e) {
            var t = n(".main-nav", e).find("> .nav__inner > .menu"),
                a = t.find("> .menu-item"),
                r = a.find("> .menu-link"),
                u = a.find("> .menu > .menu-item > .menu-link");
            t.attr("role", "menu"), a.attr("role", "presentation"), r.attr("role", "menuitem"), r.focusin(function() {
                n(this).parent().addClass("show-menu")
            }), r.focusout(function() {
                n(this).parent().removeClass("show-menu")
            }), u.focusin(function() {
                n(this).parent().parent().parent().addClass("show-menu")
            }), u.focusout(function() {
                n(this).parent().parent().parent().removeClass("show-menu")
            })
        }
    }, Drupal.behaviors.epaHoverIntent = {
        attach: function(e, t) {
            if (n().hoverIntent) {
                var a = {
                    sensitivity: 7,
                    interval: 200,
                    over: Drupal.epa.epaHoverIntentOver,
                    timeout: 250,
                    out: Drupal.epa.epaHoverIntentOut
                };
                n(".main-nav > .nav__inner > .menu > .menu-item").hoverIntent(a)
            }
        }
    }, Drupal.epa = Drupal.epa || {}, Drupal.epa.epaHoverIntentOver = function() {
        "use strict";
        n(this).addClass("show-menu")
    }, Drupal.epa.epaHoverIntentOut = function() {
        "use strict";
        n(this).removeClass("show-menu")
    }
}(jQuery);