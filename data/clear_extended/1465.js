"use strict";
! function(e) {
    e(window).load(function() {
        if (window.document.getElementsByClassName("mobile-nav")) {
            var t = window.document.getElementsByClassName("submenu-title")[0],
                n = window.document.getElementsByClassName("mobile-nav")[0];
            window.document.getElementById("show_more_experts"), window.document.getElementsByClassName("expert-container")[0];
            t && t.addEventListener("click", function(e) {
                function t() {
                    n.style.height = "6em", n.dataset.menu = "open"
                }

                function a() {
                    n.style.height = "0em", n.dataset.menu = "closed"
                }
                e.preventDefault();
                var o = "open" === n.dataset.menu;
                o ? a() : t()
            })
        }
        var a = e("article[data-partner-name]").data("partner-name");
        a && window.whenDefined(window, "jstag", function() {
            a && !window.awJstagPartnerExpertSent && (jstag.send({
                attr_partner_expert: a
            }), window.awJstagPartnerExpertSent = !0)
        })
    })
}(jQuery);