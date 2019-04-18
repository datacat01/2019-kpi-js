! function(o) {
    "use strict";
    Drupal.behaviors.addDefinitions = {
        attach: function(t, i) {
            function e() {
                o("a.termlookup-js-tooltip").off(".mobile").on("click.desktop", function() {
                    "true" !== this.getAttribute("data-popup-lock") && p(this)
                }).on("mouseleave.desktop", function() {
                    "true" !== this.getAttribute("data-popup-lock") && r(this)
                }).on("click.desktop", function() {
                    u(this)
                })
            }

            function n() {
                o("a.termlookup-js-tooltip").off(".desktop").on("click.mobile", function(t) {
                    t.preventDefault(), s(o(this))
                }), o("body").on("click.mobile", ".definition-modal", function() {
                    a()
                })
            }

            function s(t) {
                o(".definition-modal").length || o("body").append(o('<div class="definition-modal hidden" />')).append(o('<div class="modal-overlay"/>'));
                var i = t.find(".termlookup-js-custom").html(),
                    e = o(".definition-modal"),
                    n = o(".modal-overlay");
                e.html(i), e.addClass("is-active"), n.addClass("is-active")
            }

            function a() {
                var t = o(".definition-modal"),
                    i = o(".modal-overlay");
                t.removeClass("is-active"), i.removeClass("is-active")
            }

            function u(i) {
                o(i).find("span.termlookup-js-custom", t).is(":visible") || d(i), "true" !== i.getAttribute("data-popup-lock") ? (f(), l(i)) : (c(i), f())
            }

            function l(o) {
                o.className = v, o.setAttribute("data-popup-lock", "true"), o.style.zIndex = ++k
            }

            function c(t) {
                o(t).removeAttr("data-popup-lock"), r(t)
            }

            function p(i) {
                o(i).find("span.termlookup-js-custom", t).fadeOut(0, function() {
                    d(i)
                })
            }

            function d(t) {
                t.className = "termlookup-js-tooltip-hover", t.style.zIndex = ++k, o(t).find("span.termlookup-js-custom").fadeIn(m)
            }

            function r(i) {
                o(i).find("span.termlookup-js-custom", t).fadeOut(m, function() {
                    i.className = "termlookup-js-tooltip"
                })
            }

            function f() {
                c(o("a.termlookup-js-tooltip-locked", t))
            }
            var m = 100,
                k = 100,
                v = "termlookup-js-tooltip-hover termlookup-js-tooltip-locked";
            o("span.termlookup-custom", t).each(function() {
                this.className = "termlookup-js-custom", this.parentNode.className = "termlookup-js-tooltip"
            });
            var h = function() {
                    return o(window).width() < 800
                },
                j = function() {
                    h() ? n() : (e(), a())
                },
                b = function(o, t, i) {
                    var e;
                    return function() {
                        var n = this,
                            s = arguments,
                            a = function() {
                                e = null, i || o.apply(n, s)
                            },
                            u = i && !e;
                        clearTimeout(e), e = setTimeout(a, t), u && o.apply(n, s)
                    }
                }(function() {
                    j()
                }, 250);
            window.addEventListener("resize", b), j()
        }
    }
}(jQuery);