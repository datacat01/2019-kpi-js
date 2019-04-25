$(function() {
    $('a[href^="#"]').on("click", function(t) {
        var e = $(this).attr("href"),
            n = $("#" == e || "" == e ? "html" : e),
            a = n.offset().top,
            i = 39,
            r = $(".js-cms-header");
        a -= i, r.size() && (a -= r.height()), $("body, html").animate({
            scrollTop: a
        }, 250, "swing"), t.preventDefault()
    })
}), ! function(t, e) {
    var n = e(t, t.document);
    t.lazySizes = n, "object" == typeof module && module.exports && (module.exports = n)
}(window, function(t, e) {
    "use strict";
    if (e.getElementsByClassName) {
        var n, a = e.documentElement,
            i = t.Date,
            r = t.HTMLPictureElement,
            o = "addEventListener",
            s = "getAttribute",
            l = t[o],
            c = t.setTimeout,
            u = t.requestAnimationFrame || c,
            d = t.requestIdleCallback,
            f = /^picture$/i,
            m = ["load", "error", "lazyincluded", "_lazyloaded"],
            g = {},
            v = Array.prototype.forEach,
            z = function(t, e) {
                return g[e] || (g[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")), g[e].test(t[s]("class") || "") && g[e]
            },
            h = function(t, e) {
                z(t, e) || t.setAttribute("class", (t[s]("class") || "").trim() + " " + e)
            },
            y = function(t, e) {
                var n;
                (n = z(t, e)) && t.setAttribute("class", (t[s]("class") || "").replace(n, " "))
            },
            p = function(t, e, n) {
                var a = n ? o : "removeEventListener";
                n && p(t, e), m.forEach(function(n) {
                    t[a](n, e)
                })
            },
            C = function(t, n, a, i, r) {
                var o = e.createEvent("CustomEvent");
                return o.initCustomEvent(n, !i, !r, a || {}), t.dispatchEvent(o), o
            },
            b = function(e, a) {
                var i;
                !r && (i = t.picturefill || n.pf) ? i({
                    reevaluate: !0,
                    elements: [e]
                }) : a && a.src && (e.src = a.src)
            },
            A = function(t, e) {
                return (getComputedStyle(t, null) || {})[e]
            },
            E = function(t, e, a) {
                for (a = a || t.offsetWidth; a < n.minSize && e && !t._lazysizesWidth;) a = e.offsetWidth, e = e.parentNode;
                return a
            },
            w = function() {
                var t, n, a = [],
                    i = function() {
                        var e;
                        for (t = !0, n = !1; a.length;) e = a.shift(), e[0].apply(e[1], e[2]);
                        t = !1
                    };
                return function(r) {
                    t ? r.apply(this, arguments) : (a.push([r, this, arguments]), n || (n = !0, (e.hidden ? c : u)(i)))
                }
            }(),
            N = function(t, e) {
                return e ? function() {
                    w(t)
                } : function() {
                    var e = this,
                        n = arguments;
                    w(function() {
                        t.apply(e, n)
                    })
                }
            },
            M = function(t) {
                var e, n = 0,
                    a = 125,
                    r = 999,
                    o = r,
                    s = function() {
                        e = !1, n = i.now(), t()
                    },
                    l = d ? function() {
                        d(s, {
                            timeout: o
                        }), o !== r && (o = r)
                    } : N(function() {
                        c(s)
                    }, !0);
                return function(t) {
                    var r;
                    (t = t === !0) && (o = 66), e || (e = !0, r = a - (i.now() - n), 0 > r && (r = 0), t || 9 > r && d ? l() : c(l, r))
                }
            },
            _ = function(t) {
                var e, n, a = 99,
                    r = function() {
                        e = null, t()
                    },
                    o = function() {
                        var t = i.now() - n;
                        a > t ? c(o, a - t) : (d || r)(r)
                    };
                return function() {
                    n = i.now(), e || (e = c(o, a))
                }
            },
            $ = function() {
                var r, u, d, m, g, E, $, B, W, k, L, S, R, F, T, D = /^img$/i,
                    O = /^iframe$/i,
                    P = "onscroll" in t && !/glebot/.test(navigator.userAgent),
                    I = 0,
                    H = 0,
                    j = 0,
                    q = -1,
                    G = function(t) {
                        j--, t && t.target && p(t.target, G), (!t || 0 > j || !t.target) && (j = 0)
                    },
                    J = function(t, n) {
                        var i, r = t,
                            o = "hidden" == A(e.body, "visibility") || "hidden" != A(t, "visibility");
                        for (W -= n, S += n, k -= n, L += n; o && (r = r.offsetParent) && r != e.body && r != a;) o = (A(r, "opacity") || 1) > 0, o && "visible" != A(r, "overflow") && (i = r.getBoundingClientRect(), o = L > i.left && k < i.right && S > i.top - 1 && W < i.bottom + 1);
                        return o
                    },
                    K = function() {
                        var t, i, o, l, c, f, m, v, z;
                        if ((g = n.loadMode) && 8 > j && (t = r.length)) {
                            i = 0, q++, null == F && ("expand" in n || (n.expand = a.clientHeight > 500 ? 500 : 400), R = n.expand, F = R * n.expFactor), F > H && 1 > j && q > 2 && g > 2 && !e.hidden ? (H = F, q = 0) : H = g > 1 && q > 1 && 6 > j ? R : I;
                            for (; t > i; i++)
                                if (r[i] && !r[i]._lazyRace)
                                    if (P)
                                        if ((v = r[i][s]("data-expand")) && (f = 1 * v) || (f = H), z !== f && ($ = innerWidth + f * T, B = innerHeight + f, m = -1 * f, z = f), o = r[i].getBoundingClientRect(), (S = o.bottom) >= m && (W = o.top) <= B && (L = o.right) >= m * T && (k = o.left) <= $ && (S || L || k || W) && (d && 3 > j && !v && (3 > g || 4 > q) || J(r[i], f))) {
                                            if (et(r[i]), c = !0, j > 9) break
                                        } else !c && d && !l && 4 > j && 4 > q && g > 2 && (u[0] || n.preloadAfterLoad) && (u[0] || !v && (S || L || k || W || "auto" != r[i][s](n.sizesAttr))) && (l = u[0] || r[i]);
                            else et(r[i]);
                            l && !c && et(l)
                        }
                    },
                    Q = M(K),
                    U = function(t) {
                        h(t.target, n.loadedClass), y(t.target, n.loadingClass), p(t.target, X)
                    },
                    V = N(U),
                    X = function(t) {
                        V({
                            target: t.target
                        })
                    },
                    Y = function(t, e) {
                        try {
                            t.contentWindow.location.replace(e)
                        } catch (n) {
                            t.src = e
                        }
                    },
                    Z = function(t) {
                        var e, a, i = t[s](n.srcsetAttr);
                        (e = n.customMedia[t[s]("data-media") || t[s]("media")]) && t.setAttribute("media", e), i && t.setAttribute("srcset", i), e && (a = t.parentNode, a.insertBefore(t.cloneNode(), t), a.removeChild(t))
                    },
                    tt = N(function(t, e, a, i, r) {
                        var o, l, u, d, g, z;
                        (g = C(t, "lazybeforeunveil", e)).defaultPrevented || (i && (a ? h(t, n.autosizesClass) : t.setAttribute("sizes", i)), l = t[s](n.srcsetAttr), o = t[s](n.srcAttr), r && (u = t.parentNode, d = u && f.test(u.nodeName || "")), z = e.firesLoad || "src" in t && (l || o || d), g = {
                            target: t
                        }, z && (p(t, G, !0), clearTimeout(m), m = c(G, 2500), h(t, n.loadingClass), p(t, X, !0)), d && v.call(u.getElementsByTagName("source"), Z), l ? t.setAttribute("srcset", l) : o && !d && (O.test(t.nodeName) ? Y(t, o) : t.src = o), (l || d) && b(t, {
                            src: o
                        })), w(function() {
                            t._lazyRace && delete t._lazyRace, y(t, n.lazyClass), (!z || t.complete) && (z ? G(g) : j--, U(g))
                        })
                    }),
                    et = function(t) {
                        var e, a = D.test(t.nodeName),
                            i = a && (t[s](n.sizesAttr) || t[s]("sizes")),
                            r = "auto" == i;
                        (!r && d || !a || !t.src && !t.srcset || t.complete || z(t, n.errorClass)) && (e = C(t, "lazyunveilread").detail, r && x.updateElem(t, !0, t.offsetWidth), t._lazyRace = !0, j++, tt(t, e, r, i, a))
                    },
                    nt = function() {
                        if (!d) {
                            if (i.now() - E < 999) return void c(nt, 999);
                            var t = _(function() {
                                n.loadMode = 3, Q()
                            });
                            d = !0, n.loadMode = 3, Q(), l("scroll", function() {
                                3 == n.loadMode && (n.loadMode = 2), t()
                            }, !0)
                        }
                    };
                return {
                    _: function() {
                        E = i.now(), r = e.getElementsByClassName(n.lazyClass), u = e.getElementsByClassName(n.lazyClass + " " + n.preloadClass), T = n.hFac, l("scroll", Q, !0), l("resize", Q, !0), t.MutationObserver ? new MutationObserver(Q).observe(a, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (a[o]("DOMNodeInserted", Q, !0), a[o]("DOMAttrModified", Q, !0), setInterval(Q, 999)), l("hashchange", Q, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(t) {
                            e[o](t, Q, !0)
                        }), /d$|^c/.test(e.readyState) ? nt() : (l("load", nt), e[o]("DOMContentLoaded", Q), c(nt, 2e4)), Q(r.length > 0)
                    },
                    checkElems: Q,
                    unveil: et
                }
            }(),
            x = function() {
                var t, a = N(function(t, e, n, a) {
                        var i, r, o;
                        if (t._lazysizesWidth = a, a += "px", t.setAttribute("sizes", a), f.test(e.nodeName || ""))
                            for (i = e.getElementsByTagName("source"), r = 0, o = i.length; o > r; r++) i[r].setAttribute("sizes", a);
                        n.detail.dataAttr || b(t, n.detail)
                    }),
                    i = function(t, e, n) {
                        var i, r = t.parentNode;
                        r && (n = E(t, r, n), i = C(t, "lazybeforesizes", {
                            width: n,
                            dataAttr: !!e
                        }), i.defaultPrevented || (n = i.detail.width, n && n !== t._lazysizesWidth && a(t, r, i, n)))
                    },
                    r = function() {
                        var e, n = t.length;
                        if (n)
                            for (e = 0; n > e; e++) i(t[e])
                    },
                    o = _(r);
                return {
                    _: function() {
                        t = e.getElementsByClassName(n.autosizesClass), l("resize", o)
                    },
                    checkElems: o,
                    updateElem: i
                }
            }(),
            B = function() {
                B.i || (B.i = !0, x._(), $._())
            };
        return function() {
            var e, a = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: .8,
                loadMode: 2
            };
            n = t.lazySizesConfig || t.lazysizesConfig || {};
            for (e in a) e in n || (n[e] = a[e]);
            t.lazySizesConfig = n, c(function() {
                n.init && B()
            })
        }(), {
            cfg: n,
            autoSizer: x,
            loader: $,
            init: B,
            uP: b,
            aC: h,
            rC: y,
            hC: z,
            fire: C,
            gW: E,
            rAF: w
        }
    }
}), document.addEventListener("lazybeforeunveil", function(t) {
    var e = t.target.getAttribute("data-bg");
    e && (t.target.style.backgroundImage = "url(" + e + ")")
});