! function() {
    if (window && window.addEventListener) {
        var e, t, n = Object.create(null),
            o = function() {
                clearTimeout(t), t = setTimeout(e, 100)
            },
            i = function() {},
            r = function() {
                var e;
                window.addEventListener("resize", o, !1), window.addEventListener("orientationchange", o, !1), window.MutationObserver ? (e = new MutationObserver(o), e.observe(document.documentElement, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0
                }), i = function() {
                    try {
                        e.disconnect(), window.removeEventListener("resize", o, !1), window.removeEventListener("orientationchange", o, !1)
                    } catch (t) {}
                }) : (document.documentElement.addEventListener("DOMSubtreeModified", o, !1), i = function() {
                    document.documentElement.removeEventListener("DOMSubtreeModified", o, !1), window.removeEventListener("resize", o, !1), window.removeEventListener("orientationchange", o, !1)
                })
            };
        e = function() {
            function e() {
                --m, 0 === m && r()
            }

            function t(e) {
                return function() {
                    !0 !== n[e.base] && e.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + e.hash)
                }
            }

            function o(t) {
                return function() {
                    var n = document.body,
                        o = document.createElement("x");
                    t.onload = null, o.innerHTML = t.responseText, (o = o.getElementsByTagName("svg")[0]) && (o.setAttribute("aria-hidden", "true"), o.style.position = "absolute", o.style.width = 0, o.style.height = 0, o.style.overflow = "hidden", n.insertBefore(o, n.firstChild)), e()
                }
            }

            function d(t) {
                return function() {
                    t.onerror = null, t.ontimeout = null, e()
                }
            }
            var u, s, a, l, c, w, v, m = 0;
            if (window.XMLHttpRequest && (c = new XMLHttpRequest, c = void 0 !== c.withCredentials ? XMLHttpRequest : XDomainRequest || void 0), void 0 !== c) {
                for (i(), v = document.getElementsByTagName("use"), l = 0; l < v.length; l += 1) {
                    try {
                        s = v[l].getBoundingClientRect()
                    } catch (h) {
                        s = !1
                    }
                    a = v[l].getAttributeNS("http://www.w3.org/1999/xlink", "href").split("#"), u = a[0], a = a[1], w = s && 0 === s.left && 0 === s.right && 0 === s.top && 0 === s.bottom, s && 0 === s.width && 0 === s.height && !w ? u.length && (w = n[u], !0 !== w && setTimeout(t({
                        useEl: v[l],
                        base: u,
                        hash: a
                    }), 0), void 0 === w && (w = new c, n[u] = w, w.onload = o(w), w.onerror = d(w), w.ontimeout = d(w), w.open("GET", u), w.send(), m += 1)) : w || (void 0 === n[u] ? n[u] = !0 : n[u].onload && (n[u].abort(), n[u].onload = void 0, n[u] = !0))
                }
                v = "", m += 1, e()
            }
        }, window.addEventListener("load", function d() {
            window.removeEventListener("load", d, !1), t = setTimeout(e, 0)
        }, !1)
    }
}();