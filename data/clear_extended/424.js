! function() {
    function e(e, t, n) {
        return e.call.apply(e.bind, arguments)
    }

    function t(e, t, n) {
        if (!e) throw Error();
        if (2 < arguments.length) {
            var i = Array.prototype.slice.call(arguments, 2);
            return function() {
                var n = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(n, i), e.apply(t, n)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }

    function n(i, o, r) {
        return n = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? e : t, n.apply(null, arguments)
    }

    function i(e, t) {
        this.a = e, this.m = t || e, this.c = this.m.document
    }

    function o(e, t, n, i) {
        if (t = e.c.createElement(t), n)
            for (var o in n) n.hasOwnProperty(o) && ("style" == o ? t.style.cssText = n[o] : t.setAttribute(o, n[o]));
        return i && t.appendChild(e.c.createTextNode(i)), t
    }

    function r(e, t, n) {
        e = e.c.getElementsByTagName(t)[0], e || (e = document.documentElement), e.insertBefore(n, e.lastChild)
    }

    function s(e) {
        e.parentNode && e.parentNode.removeChild(e)
    }

    function a(e, t, n) {
        t = t || [], n = n || [];
        for (var i = e.className.split(/\s+/), o = 0; o < t.length; o += 1) {
            for (var r = !1, s = 0; s < i.length; s += 1)
                if (t[o] === i[s]) {
                    r = !0;
                    break
                } r || i.push(t[o])
        }
        for (t = [], o = 0; o < i.length; o += 1) {
            for (r = !1, s = 0; s < n.length; s += 1)
                if (i[o] === n[s]) {
                    r = !0;
                    break
                } r || t.push(i[o])
        }
        e.className = t.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function l(e, t) {
        for (var n = e.className.split(/\s+/), i = 0, o = n.length; o > i; i++)
            if (n[i] == t) return !0;
        return !1
    }

    function c(e) {
        if ("string" == typeof e.f) return e.f;
        var t = e.m.location.protocol;
        return "about:" == t && (t = e.a.location.protocol), "https:" == t ? "https:" : "http:"
    }

    function u(e) {
        return e.m.location.hostname || e.a.location.hostname
    }

    function d(e, t, n) {
        function i() {
            c && s && a && (c(l), c = null)
        }
        t = o(e, "link", {
            rel: "stylesheet",
            href: t,
            media: "all"
        });
        var s = !1,
            a = !0,
            l = null,
            c = n || null;
        ie ? (t.onload = function() {
            s = !0, i()
        }, t.onerror = function() {
            s = !0, l = Error("Stylesheet failed to load"), i()
        }) : setTimeout(function() {
            s = !0, i()
        }, 0), r(e, "head", t)
    }

    function h(e, t, n, i) {
        var r = e.c.getElementsByTagName("head")[0];
        if (r) {
            var s = o(e, "script", {
                    src: t
                }),
                a = !1;
            return s.onload = s.onreadystatechange = function() {
                a || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (a = !0, n && n(null), s.onload = s.onreadystatechange = null, "HEAD" == s.parentNode.tagName && r.removeChild(s))
            }, r.appendChild(s), setTimeout(function() {
                a || (a = !0, n && n(Error("Script load timeout")))
            }, i || 5e3), s
        }
        return null
    }

    function f() {
        this.a = 0, this.c = null
    }

    function p(e) {
        return e.a++,
            function() {
                e.a--, g(e)
            }
    }

    function m(e, t) {
        e.c = t, g(e)
    }

    function g(e) {
        0 == e.a && e.c && (e.c(), e.c = null)
    }

    function v(e) {
        this.a = e || "-"
    }

    function b(e, t) {
        this.c = e, this.f = 4, this.a = "n";
        var n = (t || "n4").match(/^([nio])([1-9])$/i);
        n && (this.a = n[1], this.f = parseInt(n[2], 10))
    }

    function y(e) {
        return x(e) + " " + (e.f + "00") + " 300px " + w(e.c)
    }

    function w(e) {
        var t = [];
        e = e.split(/,\s*/);
        for (var n = 0; n < e.length; n++) {
            var i = e[n].replace(/['"]/g, ""); - 1 != i.indexOf(" ") || /^\d/.test(i) ? t.push("'" + i + "'") : t.push(i)
        }
        return t.join(",")
    }

    function S(e) {
        return e.a + e.f
    }

    function x(e) {
        var t = "normal";
        return "o" === e.a ? t = "oblique" : "i" === e.a && (t = "italic"), t
    }

    function C(e) {
        var t = 4,
            n = "n",
            i = null;
        return e && ((i = e.match(/(normal|oblique|italic)/i)) && i[1] && (n = i[1].substr(0, 1).toLowerCase()), (i = e.match(/([1-9]00|normal|bold)/i)) && i[1] && (/bold/i.test(i[1]) ? t = 7 : /[1-9]00/.test(i[1]) && (t = parseInt(i[1].substr(0, 1), 10)))), n + t
    }

    function k(e, t) {
        this.c = e, this.f = e.m.document.documentElement, this.h = t, this.a = new v("-"), this.j = !1 !== t.events, this.g = !1 !== t.classes
    }

    function _(e) {
        e.g && a(e.f, [e.a.c("wf", "loading")]), j(e, "loading")
    }

    function T(e) {
        if (e.g) {
            var t = l(e.f, e.a.c("wf", "active")),
                n = [],
                i = [e.a.c("wf", "loading")];
            t || n.push(e.a.c("wf", "inactive")), a(e.f, n, i)
        }
        j(e, "inactive")
    }

    function j(e, t, n) {
        e.j && e.h[t] && (n ? e.h[t](n.c, S(n)) : e.h[t]())
    }

    function E() {
        this.c = {}
    }

    function $(e, t, n) {
        var i, o = [];
        for (i in t)
            if (t.hasOwnProperty(i)) {
                var r = e.c[i];
                r && o.push(r(t[i], n))
            } return o
    }

    function A(e, t) {
        this.c = e, this.f = t, this.a = o(this.c, "span", {
            "aria-hidden": "true"
        }, this.f)
    }

    function D(e) {
        r(e.c, "body", e.a)
    }

    function M(e) {
        return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + w(e.c) + ";" + ("font-style:" + x(e) + ";font-weight:" + (e.f + "00") + ";")
    }

    function N(e, t, n, i, o, r) {
        this.g = e, this.f = t, this.a = i, this.c = n, this.j = o || 3e3, this.h = r || void 0
    }

    function R(e, t, n, i, o, r, s) {
        this.v = e, this.B = t, this.c = n, this.a = i, this.s = s || "BESbswy", this.f = {}, this.w = o || 3e3, this.u = r || null, this.o = this.j = this.h = this.g = null, this.g = new A(this.c, this.s), this.h = new A(this.c, this.s), this.j = new A(this.c, this.s), this.o = new A(this.c, this.s), e = new b(this.a.c + ",serif", S(this.a)), e = M(e), this.g.a.style.cssText = e, e = new b(this.a.c + ",sans-serif", S(this.a)), e = M(e), this.h.a.style.cssText = e, e = new b("serif", S(this.a)), e = M(e), this.j.a.style.cssText = e, e = new b("sans-serif", S(this.a)), e = M(e), this.o.a.style.cssText = e, D(this.g), D(this.h), D(this.j), D(this.o)
    }

    function I() {
        if (null === re) {
            var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
            re = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))
        }
        return re
    }

    function P(e, t, n) {
        for (var i in oe)
            if (oe.hasOwnProperty(i) && t === e.f[oe[i]] && n === e.f[oe[i]]) return !0;
        return !1
    }

    function F(e) {
        var t, n = e.g.a.offsetWidth,
            i = e.h.a.offsetWidth;
        (t = n === e.f.serif && i === e.f["sans-serif"]) || (t = I() && P(e, n, i)), t ? ne() - e.A >= e.w ? I() && P(e, n, i) && (null === e.u || e.u.hasOwnProperty(e.a.c)) ? B(e, e.v) : B(e, e.B) : O(e) : B(e, e.v)
    }

    function O(e) {
        setTimeout(n(function() {
            F(this)
        }, e), 50)
    }

    function B(e, t) {
        setTimeout(n(function() {
            s(this.g.a), s(this.h.a), s(this.j.a), s(this.o.a), t(this.a)
        }, e), 0)
    }

    function L(e, t, n) {
        this.c = e, this.a = t, this.f = 0, this.o = this.j = !1, this.s = n
    }

    function H(e) {
        0 == --e.f && e.j && (e.o ? (e = e.a, e.g && a(e.f, [e.a.c("wf", "active")], [e.a.c("wf", "loading"), e.a.c("wf", "inactive")]), j(e, "active")) : T(e.a))
    }

    function U(e) {
        this.j = e, this.a = new E, this.h = 0, this.f = this.g = !0
    }

    function z(e, t, i, o, r) {
        var s = 0 == --e.h;
        (e.f || e.g) && setTimeout(function() {
            var e = r || null,
                l = o || null || {};
            if (0 === i.length && s) T(t.a);
            else {
                t.f += i.length, s && (t.j = s);
                var c, u = [];
                for (c = 0; c < i.length; c++) {
                    var d = i[c],
                        h = l[d.c],
                        f = t.a,
                        p = d;
                    f.g && a(f.f, [f.a.c("wf", p.c, S(p).toString(), "loading")]), j(f, "fontloading", p), f = null, null === se && (se = window.FontFace ? (p = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent)) ? 42 < parseInt(p[1], 10) : !0 : !1), f = se ? new N(n(t.g, t), n(t.h, t), t.c, d, t.s, h) : new R(n(t.g, t), n(t.h, t), t.c, d, t.s, e, h), u.push(f)
                }
                for (c = 0; c < u.length; c++) u[c].start()
            }
        }, 0)
    }

    function W(e, t, n) {
        var i = [],
            o = n.timeout;
        _(t);
        var i = $(e.a, n, e.c),
            r = new L(e.c, t, o);
        for (e.h = i.length, t = 0, n = i.length; n > t; t++) i[t].load(function(t, n, i) {
            z(e, r, t, n, i)
        })
    }

    function q(e, t) {
        this.c = e, this.a = t
    }

    function V(e, t, n) {
        var i = c(e.c);
        return e = (e.a.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, ""), i + "//" + e + "/" + t + ".js" + (n ? "?v=" + n : "")
    }

    function J(e, t) {
        this.c = e, this.a = t
    }

    function G(e, t, n) {
        e ? this.c = e : this.c = t + ae, this.a = [], this.f = [], this.g = n || ""
    }

    function Q(e, t) {
        for (var n = t.length, i = 0; n > i; i++) {
            var o = t[i].split(":");
            3 == o.length && e.f.push(o.pop());
            var r = "";
            2 == o.length && "" != o[1] && (r = ":"), e.a.push(o.join(r))
        }
    }

    function Y(e) {
        if (0 == e.a.length) throw Error("No fonts to load!");
        if (-1 != e.c.indexOf("kit=")) return e.c;
        for (var t = e.a.length, n = [], i = 0; t > i; i++) n.push(e.a[i].replace(/ /g, "+"));
        return t = e.c + "?family=" + n.join("%7C"), 0 < e.f.length && (t += "&subset=" + e.f.join(",")), 0 < e.g.length && (t += "&text=" + encodeURIComponent(e.g)), t
    }

    function X(e) {
        this.f = e, this.a = [], this.c = {}
    }

    function K(e) {
        for (var t = e.f.length, n = 0; t > n; n++) {
            var i = e.f[n].split(":"),
                o = i[0].replace(/\+/g, " "),
                r = ["n4"];
            if (2 <= i.length) {
                var s, a = i[1];
                if (s = [], a)
                    for (var a = a.split(","), l = a.length, c = 0; l > c; c++) {
                        var u;
                        if (u = a[c], u.match(/^[\w-]+$/)) {
                            var d = de.exec(u.toLowerCase());
                            if (null == d) u = "";
                            else {
                                if (u = d[2], u = null == u || "" == u ? "n" : ue[u], d = d[1], null == d || "" == d) d = "4";
                                else var h = ce[d],
                                    d = h ? h : isNaN(d) ? "4" : d.substr(0, 1);
                                u = [u, d].join("")
                            }
                        } else u = "";
                        u && s.push(u)
                    }
                0 < s.length && (r = s), 3 == i.length && (i = i[2], s = [], i = i ? i.split(",") : s, 0 < i.length && (i = le[i[0]]) && (e.c[o] = i))
            }
            for (e.c[o] || (i = le[o]) && (e.c[o] = i), i = 0; i < r.length; i += 1) e.a.push(new b(o, r[i]))
        }
    }

    function Z(e, t) {
        this.c = e, this.a = t
    }

    function ee(e, t) {
        this.c = e, this.a = t
    }

    function te(e, t) {
        this.c = e, this.f = t, this.a = []
    }
    var ne = Date.now || function() {
            return +new Date
        },
        ie = !!window.FontFace;
    v.prototype.c = function(e) {
        for (var t = [], n = 0; n < arguments.length; n++) t.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
        return t.join(this.a)
    }, N.prototype.start = function() {
        function e() {
            ne() - i >= n.j ? n.f(n.a) : t.fonts.load(y(n.a), n.h).then(function(t) {
                1 <= t.length ? n.g(n.a) : setTimeout(e, 25)
            }, function() {
                n.f(n.a)
            })
        }
        var t = this.c.m.document,
            n = this,
            i = ne();
        e()
    };
    var oe = {
            D: "serif",
            C: "sans-serif"
        },
        re = null;
    R.prototype.start = function() {
        this.f.serif = this.j.a.offsetWidth, this.f["sans-serif"] = this.o.a.offsetWidth, this.A = ne(), F(this)
    };
    var se = null;
    L.prototype.g = function(e) {
        var t = this.a;
        t.g && a(t.f, [t.a.c("wf", e.c, S(e).toString(), "active")], [t.a.c("wf", e.c, S(e).toString(), "loading"), t.a.c("wf", e.c, S(e).toString(), "inactive")]), j(t, "fontactive", e), this.o = !0, H(this)
    }, L.prototype.h = function(e) {
        var t = this.a;
        if (t.g) {
            var n = l(t.f, t.a.c("wf", e.c, S(e).toString(), "active")),
                i = [],
                o = [t.a.c("wf", e.c, S(e).toString(), "loading")];
            n || i.push(t.a.c("wf", e.c, S(e).toString(), "inactive")), a(t.f, i, o)
        }
        j(t, "fontinactive", e), H(this)
    }, U.prototype.load = function(e) {
        this.c = new i(this.j, e.context || this.j), this.g = !1 !== e.events, this.f = !1 !== e.classes, W(this, new k(this.c, e), e)
    }, q.prototype.load = function(e) {
        function t() {
            if (o["__mti_fntLst" + n]) {
                var i, r = o["__mti_fntLst" + n](),
                    s = [];
                if (r)
                    for (var a = 0; a < r.length; a++) {
                        var l = r[a].fontfamily;
                        void 0 != r[a].fontStyle && void 0 != r[a].fontWeight ? (i = r[a].fontStyle + r[a].fontWeight, s.push(new b(l, i))) : s.push(new b(l))
                    }
                e(s)
            } else setTimeout(function() {
                t()
            }, 50)
        }
        var n = this.a.projectId,
            i = this.a.version;
        if (n) {
            var o = this.c.m;
            h(this.c, V(this, n, i), function(n) {
                n ? e([]) : t()
            }).id = "__MonotypeAPIScript__" + n
        } else e([])
    }, J.prototype.load = function(e) {
        var t, n, i = this.a.urls || [],
            o = this.a.families || [],
            r = this.a.testStrings || {},
            s = new f;
        for (t = 0, n = i.length; n > t; t++) d(this.c, i[t], p(s));
        var a = [];
        for (t = 0, n = o.length; n > t; t++)
            if (i = o[t].split(":"), i[1])
                for (var l = i[1].split(","), c = 0; c < l.length; c += 1) a.push(new b(i[0], l[c]));
            else a.push(new b(i[0]));
        m(s, function() {
            e(a, r)
        })
    };
    var ae = "//fonts.googleapis.com/css",
        le = {
            latin: "BESbswy",
            cyrillic: "&#1081;&#1103;&#1046;",
            greek: "&#945;&#946;&#931;",
            khmer: "&#x1780;&#x1781;&#x1782;",
            Hanuman: "&#x1780;&#x1781;&#x1782;"
        },
        ce = {
            thin: "1",
            extralight: "2",
            "extra-light": "2",
            ultralight: "2",
            "ultra-light": "2",
            light: "3",
            regular: "4",
            book: "4",
            medium: "5",
            "semi-bold": "6",
            semibold: "6",
            "demi-bold": "6",
            demibold: "6",
            bold: "7",
            "extra-bold": "8",
            extrabold: "8",
            "ultra-bold": "8",
            ultrabold: "8",
            black: "9",
            heavy: "9",
            l: "3",
            r: "4",
            b: "7"
        },
        ue = {
            i: "i",
            italic: "i",
            n: "n",
            normal: "n"
        },
        de = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/,
        he = {
            Arimo: !0,
            Cousine: !0,
            Tinos: !0
        };
    Z.prototype.load = function(e) {
        var t = new f,
            n = this.c,
            i = new G(this.a.api, c(n), this.a.text),
            o = this.a.families;
        Q(i, o);
        var r = new X(o);
        K(r), d(n, Y(i), p(t)), m(t, function() {
            e(r.a, r.c, he)
        })
    }, ee.prototype.load = function(e) {
        var t = this.a.id,
            n = this.c.m;
        t ? h(this.c, (this.a.api || "https://use.typekit.net") + "/" + t + ".js", function(t) {
            if (t) e([]);
            else if (n.Typekit && n.Typekit.config && n.Typekit.config.fn) {
                t = n.Typekit.config.fn;
                for (var i = [], o = 0; o < t.length; o += 2)
                    for (var r = t[o], s = t[o + 1], a = 0; a < s.length; a++) i.push(new b(r, s[a]));
                try {
                    n.Typekit.load({
                        events: !1,
                        classes: !1,
                        async: !0
                    })
                } catch (l) {}
                e(i)
            }
        }, 2e3) : e([])
    }, te.prototype.load = function(e) {
        var t = this.f.id,
            n = this.c.m,
            i = this;
        t ? (n.__webfontfontdeckmodule__ || (n.__webfontfontdeckmodule__ = {}), n.__webfontfontdeckmodule__[t] = function(t, n) {
            for (var o = 0, r = n.fonts.length; r > o; ++o) {
                var s = n.fonts[o];
                i.a.push(new b(s.name, C("font-weight:" + s.weight + ";font-style:" + s.style)))
            }
            e(i.a)
        }, h(this.c, c(this.c) + (this.f.api || "//f.fontdeck.com/s/css/js/") + u(this.c) + "/" + t + ".js", function(t) {
            t && e([])
        })) : e([])
    };
    var fe = new U(window);
    fe.a.c.custom = function(e, t) {
        return new J(t, e)
    }, fe.a.c.fontdeck = function(e, t) {
        return new te(t, e)
    }, fe.a.c.monotype = function(e, t) {
        return new q(t, e)
    }, fe.a.c.typekit = function(e, t) {
        return new ee(t, e)
    }, fe.a.c.google = function(e, t) {
        return new Z(t, e)
    };
    var pe = {
        load: n(fe.load, fe)
    };
    "function" == typeof define && define.amd ? define(function() {
        return pe
    }) : "undefined" != typeof module && module.exports ? module.exports = pe : (window.WebFont = pe, window.WebFontConfig && fe.load(window.WebFontConfig))
}();