! function(a, b, c) {
    function d() {
        var b = a(this),
            c = b.is(":visible") && e(this);
        c ? (b.trigger(u), c != b.data(s) && b.trigger(t)) : c != b.data(s) && b.trigger(v), b.data(s, c)
    }

    function e(a) {
        var b = a.getBoundingClientRect();
        return (b.top >= 0 && b.top <= q || b.bottom >= 0 && b.bottom <= q) && (b.left >= 0 && b.left <= r || b.right >= 0 && b.right <= r)
    }

    function f() {
        q = b.innerHeight || c.documentElement.clientHeight, r = b.innerWidth || c.documentElement.clientWidth, I()
    }

    function g() {
        a(this).find(x).each(d)
    }

    function h() {
        var b = a(this);
        j(b) | k(b) && (b.data(A) || (b.data(A, 1), H = H.add(b)))
    }

    function i() {
        var b = a(this);
        b.data(A) && 0 === b.find(x).length && (b.removeData(y).removeData(z).removeData(A), b.unbind("scroll", g)._unbindShow(g))
    }

    function j(a) {
        if (a.data(y)) return !1;
        var b = a.css("overflow");
        return ("scroll" == b || "auto" == b) && (a.data(y, 1), a.bind("scroll", g), !0)
    }

    function k(a) {
        if (!C && !a.data(z)) {
            if ("none" == a.css("display")) return a.data(z, 1), a._bindShow(g), !0
        }
    }

    function l(e) {
        var g = a(this);
        if (!g.is(x)) {
            if (!F && (F = !0, f(), a(c).ready(function() {
                    a(b).on("resize", f).on("scroll", I), a(c.body).on(D + " " + E, I)
                }), C)) {
                new MutationObserver(I).observe(c, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })
            }
            g.data(s, !1), g.parents().each(h), setTimeout(function() {
                d.call(g[0])
            }, 1), G = G.add(this)
        }
    }

    function m(b) {
        var c = a(this);
        setTimeout(function() {
            for (var b = a._data(c[0], "events") || {}, d = !1, e = 0; e < w.length; ++e)
                if (b[w[e]]) {
                    d = !0;
                    break
                } d && (c.removeData(s), H = H.filter(B), H.each(i))
        }, 1)
    }

    function n(b) {
        (void 0 === b ? G : a(b)).each(function() {
            var b = a(this);
            b.is(x) && b.parents().each(h)
        })
    }

    function o() {
        for (var b = 0; b < w.length; ++b) a.event.special[w[b]] = {
            add: l,
            remove: m
        }
    }

    function p(b) {
        for (var c = 0; c < w.length; ++c) delete a.event.special[w[c]];
        t = b + "appear", u = b + "appearing", v = b + "disappear", w = [t, u, v], o()
    }
    var q, r, s = "jquery-appear",
        t = "appear",
        u = "appearing",
        v = "disappear",
        w = [t, u, v],
        x = ":" + s,
        y = s + "-scroller",
        z = s + "-display",
        A = s + "-watch",
        B = ":" + A,
        C = void 0 !== b.MutationObserver,
        D = "animationend webkitAnimationEnd oAnimationEnd",
        E = "transitionend webkitTransitionEnd oTransitionEnd",
        F = !1,
        G = a(),
        H = a();
    a.expr[":"][s] = function(b) {
        return void 0 !== a(b).data(s)
    }, a.expr[":"][A] = function(b) {
        return void 0 !== a(b).data(A)
    };
    var I = function(a) {
        var b, c = 0;
        return function() {
            var d = this,
                e = arguments,
                f = function() {
                    c = new Date, a.apply(d, e)
                };
            b && (clearTimeout(b), b = null);
            var g = new Date - c;
            g > 10 ? f() : b = setTimeout(f, 10 - g)
        }
    }(function() {
        G = G.filter(x), G.each(d)
    });
    a.appear = {
            check: I,
            refresh: n,
            setEventPrefix: p
        }, o(),
        function() {
            function b() {
                var b = a(this),
                    c = "none" != b.css("display");
                b.data(f) != c && (b.data(f, c), c && b.trigger(e))
            }

            function c() {
                i = i.filter(g), i.each(b), 0 === i.length && (d = clearInterval(d))
            }
            var d, e = "jquery-appear-show",
                f = s + "-" + e,
                g = ":" + f,
                h = 50,
                i = a();
            a.expr[":"][f] = function(b) {
                return void 0 !== a(b).data(f)
            }, a.fn._bindShow = function(a) {
                this.bind(e, a), this.data(f, "none" != this.css("display")), i = i.add(this), h && !d && (d = setInterval(c, h))
            }, a.fn._unbindShow = function(a) {
                this.unbind(e, a), this.removeData(f)
            }, a.appear.setInterval = function(b) {
                b == h || !a.isNumeric(b) || b < 0 || (h = b, d = clearInterval(d), h > 0 && (d = setInterval(c, h)))
            }
        }()
}(jQuery, window, document);