if (void 0 === Mozilla) var Mozilla = {};
Mozilla.Modal = function(i, s) {
        "use strict";
        var r, c, u = !1,
            f = s("body"),
            m = s("html"),
            v = {},
            w = s(i.document),
            p = "moz-modal",
            g = "undefined" == typeof Mozilla.Utils ? "Close" : Mozilla.Utils.trans("global-close"),
            b = function(o) {
                o && o.preventDefault(), r.append(c), s("#modal").remove(), m.removeClass("noscroll"), s(".modal-origin").trigger("focus").removeClass("modal-origin"), u = !1, w.off("." + p), v && "function" == typeof v.onDestroy && v.onDestroy(), v = {}
            };
        return {
            createModal: function(o, e, t) {
                ! function(o, e, t) {
                    v = t;
                    var l = s(i).width() < 760;
                    u && b();
                    var a = v && v.title ? v.title : "",
                        n = v && v.className ? v.className : "",
                        d = s('<div id="modal" class="modal ' + n + '" role="dialog" aria-labelledby="' + o.getAttribute("id") + '" tabindex="-1">  <div class="window">    <div class="inner">      <header>' + a + '</header>      <div id="modal-close">        <a href="#close-modal" class="modal-close-text"> ' + g + '</a>        <button type="button" class="button" data-button-name="Close Modal">×</button>      </div>    </div>  </div></div>');
                    v && !v.allowScroll || l ? m.addClass("noscroll") : m.removeClass("noscroll"), f.append(d), r = (c = e).parent(), s("#modal-close").before(c), c.addClass("overlay-contents"), s("#modal-close").on("click", b).attr("title", g), s("#modal .window").on("click", function(o) {
                        o.target === this && b()
                    }), d.trigger("focus"), w.on("keyup." + p, function(o) {
                        27 === o.keyCode && u && b()
                    }), w.on("focus." + p, "body", function(o) {
                        u && !d[0].contains(o.target) && (o.stopPropagation(), d.trigger("focus"))
                    }), s(o).addClass("modal-origin"), u = !0, v && "function" == typeof v.onCreate && v.onCreate()
                }(o, e, t)
            },
            closeModal: function() {
                b()
            }
        }
    }(window, window.jQuery),
    function(a) {
        "use strict";
        for (var o = document.querySelectorAll('.download-link[data-download-os="Desktop"]'), e = 0; e < o.length; e++) o[e].setAttribute("role", "button"), o[e].addEventListener("click", function(o) {
            o.preventDefault(), a.Modal.createModal(this, $(".pre-download-newsletter"))
        }, !1);
        $(document).ajaxSuccess(function(o, e, t, l) {
            -1 < t.url.indexOf("/newsletter/") && l.success && (a.Modal.closeModal(), window.location.href = document.querySelector(".pre-download-continue a").href)
        })
    }(window.Mozilla);