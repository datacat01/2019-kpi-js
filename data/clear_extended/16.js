! function(e) {
    var s, a, t, n, l, o;
    if ((s = document.getElementById("wporg-header")) && void 0 !== (a = document.getElementById("mobile-menu-button")))
        if (void 0 !== (t = document.getElementById("wporg-header-menu"))) {
            for (-1 === t.className.indexOf("nav-menu") && (t.className += " nav-menu"), a.onclick = function() {
                    -1 !== t.className.indexOf("toggled") ? (t.className = t.className.replace(" toggled", ""), a.setAttribute("aria-expanded", "false")) : (t.className += " toggled", a.setAttribute("aria-expanded", "true"))
                }, l = 0, o = (n = t.getElementsByTagName("a")).length; l < o; l++) n[l].addEventListener("focus", c, !0), n[l].addEventListener("blur", c, !0);
            ! function(e) {
                var a, t, n = s.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");
                if ("ontouchstart" in window)
                    for (a = function(e) {
                            var a, t = this.parentNode;
                            if (t.classList.contains("focus")) t.classList.remove("focus");
                            else {
                                for (e.preventDefault(), a = 0; a < t.parentNode.children.length; ++a) t !== t.parentNode.children[a] && t.parentNode.children[a].classList.remove("focus");
                                t.classList.add("focus")
                            }
                        }, t = 0; t < n.length; ++t) n[t].addEventListener("touchstart", a, !1)
            }()
        } else a.style.display = "none";

    function c() {
        for (var e = this; - 1 === e.className.indexOf("nav-menu");) "li" === e.tagName.toLowerCase() && (-1 !== e.className.indexOf("focus") ? e.className = e.className.replace(" focus", "") : e.className += " focus"), e = e.parentElement
    }
}();