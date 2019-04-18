function labnolThumb(t) {
    return '<img class="youtube-thumb" src="//i.ytimg.com/vi/' + t + '/hqdefault.jpg"><div class="play-button"></div>'
}

function labnolIframe() {
    var t = document.createElement("iframe");
    t.setAttribute("src", "//www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&allowfullscreen=1"), t.setAttribute("allowfullscreen", "allowfullscreen"), t.setAttribute("frameborder", "0"), t.setAttribute("id", "youtube-iframe"), this.parentNode.replaceChild(t, this)
}! function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    "use strict";

    function n(t, e) {
        e = e || et;
        var n = e.createElement("script");
        n.text = t, e.head.appendChild(n).parentNode.removeChild(n)
    }

    function i(t) {
        var e = !!t && "length" in t && t.length,
            n = ft.type(t);
        return "function" !== n && !ft.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function o(t, e, n) {
        return ft.isFunction(e) ? ft.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        }) : e.nodeType ? ft.grep(t, function(t) {
            return t === e !== n
        }) : "string" != typeof e ? ft.grep(t, function(t) {
            return at.call(e, t) > -1 !== n
        }) : Tt.test(e) ? ft.filter(e, t, n) : (e = ft.filter(e, t), ft.grep(t, function(t) {
            return at.call(e, t) > -1 !== n && 1 === t.nodeType
        }))
    }

    function r(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function a(t) {
        var e = {};
        return ft.each(t.match(Pt) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function s(t) {
        return t
    }

    function l(t) {
        throw t
    }

    function c(t, e, n) {
        var i;
        try {
            t && ft.isFunction(i = t.promise) ? i.call(t).done(e).fail(n) : t && ft.isFunction(i = t.then) ? i.call(t, e, n) : e.call(void 0, t)
        } catch (t) {
            n.call(void 0, t)
        }
    }

    function u() {
        et.removeEventListener("DOMContentLoaded", u), t.removeEventListener("load", u), ft.ready()
    }

    function p() {
        this.expando = ft.expando + p.uid++
    }

    function d(t) {
        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Rt.test(t) ? JSON.parse(t) : t)
    }

    function h(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(Ft, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                try {
                    n = d(n)
                } catch (t) {}
                Mt.set(t, e, n)
            } else n = void 0;
        return n
    }

    function f(t, e, n, i) {
        var o, r = 1,
            a = 20,
            s = i ? function() {
                return i.cur()
            } : function() {
                return ft.css(t, e, "")
            },
            l = s(),
            c = n && n[3] || (ft.cssNumber[e] ? "" : "px"),
            u = (ft.cssNumber[e] || "px" !== c && +l) && Ht.exec(ft.css(t, e));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do {
                r = r || ".5", u /= r, ft.style(t, e, u + c)
            } while (r !== (r = s() / l) && 1 !== r && --a)
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }

    function m(t) {
        var e, n = t.ownerDocument,
            i = t.nodeName,
            o = Wt[i];
        return o || (e = n.body.appendChild(n.createElement(i)), o = ft.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), Wt[i] = o, o)
    }

    function g(t, e) {
        for (var n, i, o = [], r = 0, a = t.length; r < a; r++) i = t[r], i.style && (n = i.style.display, e ? ("none" === n && (o[r] = Ot.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Bt(i) && (o[r] = m(i))) : "none" !== n && (o[r] = "none", Ot.set(i, "display", n)));
        for (r = 0; r < a; r++) null != o[r] && (t[r].style.display = o[r]);
        return t
    }

    function v(t, e) {
        var n;
        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && ft.nodeName(t, e) ? ft.merge([t], n) : n
    }

    function y(t, e) {
        for (var n = 0, i = t.length; n < i; n++) Ot.set(t[n], "globalEval", !e || Ot.get(e[n], "globalEval"))
    }

    function w(t, e, n, i, o) {
        for (var r, a, s, l, c, u, p = e.createDocumentFragment(), d = [], h = 0, f = t.length; h < f; h++)
            if ((r = t[h]) || 0 === r)
                if ("object" === ft.type(r)) ft.merge(d, r.nodeType ? [r] : r);
                else if (Vt.test(r)) {
            for (a = a || p.appendChild(e.createElement("div")), s = (Ut.exec(r) || ["", ""])[1].toLowerCase(), l = Zt[s] || Zt._default, a.innerHTML = l[1] + ft.htmlPrefilter(r) + l[2], u = l[0]; u--;) a = a.lastChild;
            ft.merge(d, a.childNodes), a = p.firstChild, a.textContent = ""
        } else d.push(e.createTextNode(r));
        for (p.textContent = "", h = 0; r = d[h++];)
            if (i && ft.inArray(r, i) > -1) o && o.push(r);
            else if (c = ft.contains(r.ownerDocument, r), a = v(p.appendChild(r), "script"), c && y(a), n)
            for (u = 0; r = a[u++];) Kt.test(r.type || "") && n.push(r);
        return p
    }

    function b() {
        return !0
    }

    function x() {
        return !1
    }

    function k() {
        try {
            return et.activeElement
        } catch (t) {}
    }

    function S(t, e, n, i, o, r) {
        var a, s;
        if ("object" == typeof e) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (s in e) S(t, s, n, i, e[s], r);
            return t
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = x;
        else if (!o) return t;
        return 1 === r && (a = o, o = function(t) {
            return ft().off(t), a.apply(this, arguments)
        }, o.guid = a.guid || (a.guid = ft.guid++)), t.each(function() {
            ft.event.add(this, e, o, i, n)
        })
    }

    function T(t, e) {
        return ft.nodeName(t, "table") && ft.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t
    }

    function _(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function C(t) {
        var e = ne.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function E(t, e) {
        var n, i, o, r, a, s, l, c;
        if (1 === e.nodeType) {
            if (Ot.hasData(t) && (r = Ot.access(t), a = Ot.set(e, r), c = r.events)) {
                delete a.handle, a.events = {};
                for (o in c)
                    for (n = 0, i = c[o].length; n < i; n++) ft.event.add(e, o, c[o][n])
            }
            Mt.hasData(t) && (s = Mt.access(t), l = ft.extend({}, s), Mt.set(e, l))
        }
    }

    function A(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && zt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
    }

    function P(t, e, i, o) {
        e = ot.apply([], e);
        var r, a, s, l, c, u, p = 0,
            d = t.length,
            h = d - 1,
            f = e[0],
            m = ft.isFunction(f);
        if (m || d > 1 && "string" == typeof f && !dt.checkClone && ee.test(f)) return t.each(function(n) {
            var r = t.eq(n);
            m && (e[0] = f.call(this, n, r.html())), P(r, e, i, o)
        });
        if (d && (r = w(e, t[0].ownerDocument, !1, t, o), a = r.firstChild, 1 === r.childNodes.length && (r = a), a || o)) {
            for (s = ft.map(v(r, "script"), _), l = s.length; p < d; p++) c = r, p !== h && (c = ft.clone(c, !0, !0), l && ft.merge(s, v(c, "script"))), i.call(t[p], c, p);
            if (l)
                for (u = s[s.length - 1].ownerDocument, ft.map(s, C), p = 0; p < l; p++) c = s[p], Kt.test(c.type || "") && !Ot.access(c, "globalEval") && ft.contains(u, c) && (c.src ? ft._evalUrl && ft._evalUrl(c.src) : n(c.textContent.replace(ie, ""), u))
        }
        return t
    }

    function N(t, e, n) {
        for (var i, o = e ? ft.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || ft.cleanData(v(i)), i.parentNode && (n && ft.contains(i.ownerDocument, i) && y(v(i, "script")), i.parentNode.removeChild(i));
        return t
    }

    function D(t, e, n) {
        var i, o, r, a, s = t.style;
        return n = n || ae(t), n && (a = n.getPropertyValue(e) || n[e], "" !== a || ft.contains(t.ownerDocument, t) || (a = ft.style(t, e)), !dt.pixelMarginRight() && re.test(a) && oe.test(e) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a
    }

    function I(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function L(t) {
        if (t in pe) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = ue.length; n--;)
            if ((t = ue[n] + e) in pe) return t
    }

    function O(t, e, n) {
        var i = Ht.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function M(t, e, n, i, o) {
        var r, a = 0;
        for (r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0; r < 4; r += 2) "margin" === n && (a += ft.css(t, n + $t[r], !0, o)), i ? ("content" === n && (a -= ft.css(t, "padding" + $t[r], !0, o)), "margin" !== n && (a -= ft.css(t, "border" + $t[r] + "Width", !0, o))) : (a += ft.css(t, "padding" + $t[r], !0, o), "padding" !== n && (a += ft.css(t, "border" + $t[r] + "Width", !0, o)));
        return a
    }

    function R(t, e, n) {
        var i, o = !0,
            r = ae(t),
            a = "border-box" === ft.css(t, "boxSizing", !1, r);
        if (t.getClientRects().length && (i = t.getBoundingClientRect()[e]), i <= 0 || null == i) {
            if (i = D(t, e, r), (i < 0 || null == i) && (i = t.style[e]), re.test(i)) return i;
            o = a && (dt.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
        }
        return i + M(t, e, n || (a ? "border" : "content"), o, r) + "px"
    }

    function F(t, e, n, i, o) {
        return new F.prototype.init(t, e, n, i, o)
    }

    function j() {
        he && (t.requestAnimationFrame(j), ft.fx.tick())
    }

    function H() {
        return t.setTimeout(function() {
            de = void 0
        }), de = ft.now()
    }

    function $(t, e) {
        var n, i = 0,
            o = {
                height: t
            };
        for (e = e ? 1 : 0; i < 4; i += 2 - e) n = $t[i], o["margin" + n] = o["padding" + n] = t;
        return e && (o.opacity = o.width = t), o
    }

    function B(t, e, n) {
        for (var i, o = (z.tweeners[e] || []).concat(z.tweeners["*"]), r = 0, a = o.length; r < a; r++)
            if (i = o[r].call(n, e, t)) return i
    }

    function q(t, e, n) {
        var i, o, r, a, s, l, c, u, p = "width" in e || "height" in e,
            d = this,
            h = {},
            f = t.style,
            m = t.nodeType && Bt(t),
            v = Ot.get(t, "fxshow");
        n.queue || (a = ft._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
            a.unqueued || s()
        }), a.unqueued++, d.always(function() {
            d.always(function() {
                a.unqueued--, ft.queue(t, "fx").length || a.empty.fire()
            })
        }));
        for (i in e)
            if (o = e[i], fe.test(o)) {
                if (delete e[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                    if ("show" !== o || !v || void 0 === v[i]) continue;
                    m = !0
                }
                h[i] = v && v[i] || ft.style(t, i)
            } if ((l = !ft.isEmptyObject(e)) || !ft.isEmptyObject(h)) {
            p && 1 === t.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = v && v.display, null == c && (c = Ot.get(t, "display")), u = ft.css(t, "display"), "none" === u && (c ? u = c : (g([t], !0), c = t.style.display || c, u = ft.css(t, "display"), g([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === ft.css(t, "float") && (l || (d.done(function() {
                f.display = c
            }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", d.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            })), l = !1;
            for (i in h) l || (v ? "hidden" in v && (m = v.hidden) : v = Ot.access(t, "fxshow", {
                display: c
            }), r && (v.hidden = !m), m && g([t], !0), d.done(function() {
                m || g([t]), Ot.remove(t, "fxshow");
                for (i in h) ft.style(t, i, h[i])
            })), l = B(m ? v[i] : 0, i, d), i in v || (v[i] = l.start, m && (l.end = l.start, l.start = 0))
        }
    }

    function W(t, e) {
        var n, i, o, r, a;
        for (n in t)
            if (i = ft.camelCase(n), o = e[i], r = t[n], ft.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (a = ft.cssHooks[i]) && "expand" in a) {
                r = a.expand(r), delete t[i];
                for (n in r) n in t || (t[n] = r[n], e[n] = o)
            } else e[i] = o
    }

    function z(t, e, n) {
        var i, o, r = 0,
            a = z.prefilters.length,
            s = ft.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var e = de || H(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, r = 1 - i, a = 0, l = c.tweens.length; a < l; a++) c.tweens[a].run(r);
                return s.notifyWith(t, [c, r, n]), r < 1 && l ? n : (s.resolveWith(t, [c]), !1)
            },
            c = s.promise({
                elem: t,
                props: ft.extend({}, e),
                opts: ft.extend(!0, {
                    specialEasing: {},
                    easing: ft.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: de || H(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = ft.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) c.tweens[n].run(1);
                    return e ? (s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c, e])) : s.rejectWith(t, [c, e]), this
                }
            }),
            u = c.props;
        for (W(u, c.opts.specialEasing); r < a; r++)
            if (i = z.prefilters[r].call(c, t, u, c.opts)) return ft.isFunction(i.stop) && (ft._queueHooks(c.elem, c.opts.queue).stop = ft.proxy(i.stop, i)), i;
        return ft.map(u, B, c), ft.isFunction(c.opts.start) && c.opts.start.call(t, c), ft.fx.timer(ft.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function U(t) {
        return (t.match(Pt) || []).join(" ")
    }

    function K(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function Z(t, e, n, i) {
        var o;
        if (ft.isArray(e)) ft.each(e, function(e, o) {
            n || _e.test(t) ? i(t, o) : Z(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
        });
        else if (n || "object" !== ft.type(e)) i(t, e);
        else
            for (o in e) Z(t + "[" + o + "]", e[o], n, i)
    }

    function V(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, o = 0,
                r = e.toLowerCase().match(Pt) || [];
            if (ft.isFunction(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function X(t, e, n, i) {
        function o(s) {
            var l;
            return r[s] = !0, ft.each(t[s] || [], function(t, s) {
                var c = s(e, n, i);
                return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var r = {},
            a = t === Fe;
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }

    function G(t, e) {
        var n, i, o = ft.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
        return i && ft.extend(!0, t, i), t
    }

    function Y(t, e, n) {
        for (var i, o, r, a, s = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (o in s)
                if (s[o] && s[o].test(i)) {
                    l.unshift(o);
                    break
                } if (l[0] in n) r = l[0];
        else {
            for (o in n) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                a || (a = o)
            }
            r = r || a
        }
        if (r) return r !== l[0] && l.unshift(r), n[r]
    }

    function Q(t, e, n, i) {
        var o, r, a, s, l, c = {},
            u = t.dataTypes.slice();
        if (u[1])
            for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
        for (r = u.shift(); r;)
            if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (!(a = c[l + " " + r] || c["* " + r]))
                for (o in c)
                    if (s = o.split(" "), s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                        !0 === a ? a = c[o] : !0 !== c[o] && (r = s[0], u.unshift(s[1]));
                        break
                    } if (!0 !== a)
                if (a && t.throws) e = a(e);
                else try {
                    e = a(e)
                } catch (t) {
                    return {
                        state: "parsererror",
                        error: a ? t : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function J(t) {
        return ft.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var tt = [],
        et = t.document,
        nt = Object.getPrototypeOf,
        it = tt.slice,
        ot = tt.concat,
        rt = tt.push,
        at = tt.indexOf,
        st = {},
        lt = st.toString,
        ct = st.hasOwnProperty,
        ut = ct.toString,
        pt = ut.call(Object),
        dt = {},
        ht = "3.1.1",
        ft = function(t, e) {
            return new ft.fn.init(t, e)
        },
        mt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        gt = /^-ms-/,
        vt = /-([a-z])/g,
        yt = function(t, e) {
            return e.toUpperCase()
        };
    ft.fn = ft.prototype = {
        jquery: ht,
        constructor: ft,
        length: 0,
        toArray: function() {
            return it.call(this)
        },
        get: function(t) {
            return null == t ? it.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            var e = ft.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function(t) {
            return ft.each(this, t)
        },
        map: function(t) {
            return this.pushStack(ft.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(it.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: rt,
        sort: tt.sort,
        splice: tt.splice
    }, ft.extend = ft.fn.extend = function() {
        var t, e, n, i, o, r, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || ft.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (t = arguments[s]))
                for (e in t) n = a[e], i = t[e], a !== i && (c && i && (ft.isPlainObject(i) || (o = ft.isArray(i))) ? (o ? (o = !1, r = n && ft.isArray(n) ? n : []) : r = n && ft.isPlainObject(n) ? n : {}, a[e] = ft.extend(c, r, i)) : void 0 !== i && (a[e] = i));
        return a
    }, ft.extend({
        expando: "jQuery" + (ht + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === ft.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = ft.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        },
        isPlainObject: function(t) {
            var e, n;
            return !(!t || "[object Object]" !== lt.call(t) || (e = nt(t)) && ("function" != typeof(n = ct.call(e, "constructor") && e.constructor) || ut.call(n) !== pt))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? st[lt.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            n(t)
        },
        camelCase: function(t) {
            return t.replace(gt, "ms-").replace(vt, yt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var n, o = 0;
            if (i(t))
                for (n = t.length; o < n && !1 !== e.call(t[o], o, t[o]); o++);
            else
                for (o in t)
                    if (!1 === e.call(t[o], o, t[o])) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(mt, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? ft.merge(n, "string" == typeof t ? [t] : t) : rt.call(n, t)), n
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : at.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
            return t.length = o, t
        },
        grep: function(t, e, n) {
            for (var i = [], o = 0, r = t.length, a = !n; o < r; o++) !e(t[o], o) !== a && i.push(t[o]);
            return i
        },
        map: function(t, e, n) {
            var o, r, a = 0,
                s = [];
            if (i(t))
                for (o = t.length; a < o; a++) null != (r = e(t[a], a, n)) && s.push(r);
            else
                for (a in t) null != (r = e(t[a], a, n)) && s.push(r);
            return ot.apply([], s)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, o;
            if ("string" == typeof e && (n = t[e], e = t, t = n), ft.isFunction(t)) return i = it.call(arguments, 2), o = function() {
                return t.apply(e || this, i.concat(it.call(arguments)))
            }, o.guid = t.guid = t.guid || ft.guid++, o
        },
        now: Date.now,
        support: dt
    }), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = tt[Symbol.iterator]), ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        st["[object " + e + "]"] = e.toLowerCase()
    });
    var wt = function(t) {
        function e(t, e, n, i) {
            var o, r, a, s, l, u, d, h = e && e.ownerDocument,
                f = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return n;
            if (!i && ((e ? e.ownerDocument || e : H) !== D && N(e), e = e || D, L)) {
                if (11 !== f && (l = mt.exec(t)))
                    if (o = l[1]) {
                        if (9 === f) {
                            if (!(a = e.getElementById(o))) return n;
                            if (a.id === o) return n.push(a), n
                        } else if (h && (a = h.getElementById(o)) && F(e, a) && a.id === o) return n.push(a), n
                    } else {
                        if (l[2]) return G.apply(n, e.getElementsByTagName(t)), n;
                        if ((o = l[3]) && b.getElementsByClassName && e.getElementsByClassName) return G.apply(n, e.getElementsByClassName(o)), n
                    } if (b.qsa && !z[t + " "] && (!O || !O.test(t))) {
                    if (1 !== f) h = e, d = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((s = e.getAttribute("id")) ? s = s.replace(wt, bt) : e.setAttribute("id", s = j), u = T(t), r = u.length; r--;) u[r] = "#" + s + " " + p(u[r]);
                        d = u.join(","), h = gt.test(t) && c(e.parentNode) || e
                    }
                    if (d) try {
                        return G.apply(n, h.querySelectorAll(d)), n
                    } catch (t) {} finally {
                        s === j && e.removeAttribute("id")
                    }
                }
            }
            return C(t.replace(rt, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[j] = !0, t
        }

        function o(t) {
            var e = D.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function r(t, e) {
            for (var n = t.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = e
        }

        function a(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function s(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && kt(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function l(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var o, r = t([], n.length, e), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function c(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }

        function u() {}

        function p(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
        }

        function d(t, e, n) {
            var i = e.dir,
                o = e.next,
                r = o || i,
                a = n && "parentNode" === r,
                s = B++;
            return e.first ? function(e, n, o) {
                for (; e = e[i];)
                    if (1 === e.nodeType || a) return t(e, n, o);
                return !1
            } : function(e, n, l) {
                var c, u, p, d = [$, s];
                if (l) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || a) && t(e, n, l)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || a)
                            if (p = e[j] || (e[j] = {}), u = p[e.uniqueID] || (p[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[i] || e;
                            else {
                                if ((c = u[r]) && c[0] === $ && c[1] === s) return d[2] = c[2];
                                if (u[r] = d, d[2] = t(e, n, l)) return !0
                            } return !1
            }
        }

        function h(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var o = t.length; o--;)
                    if (!t[o](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function f(t, n, i) {
            for (var o = 0, r = n.length; o < r; o++) e(t, n[o], i);
            return i
        }

        function m(t, e, n, i, o) {
            for (var r, a = [], s = 0, l = t.length, c = null != e; s < l; s++)(r = t[s]) && (n && !n(r, i, o) || (a.push(r), c && e.push(s)));
            return a
        }

        function g(t, e, n, o, r, a) {
            return o && !o[j] && (o = g(o)), r && !r[j] && (r = g(r, a)), i(function(i, a, s, l) {
                var c, u, p, d = [],
                    h = [],
                    g = a.length,
                    v = i || f(e || "*", s.nodeType ? [s] : s, []),
                    y = !t || !i && e ? v : m(v, d, t, s, l),
                    w = n ? r || (i ? t : g || o) ? [] : a : y;
                if (n && n(y, w, s, l), o)
                    for (c = m(w, h), o(c, [], s, l), u = c.length; u--;)(p = c[u]) && (w[h[u]] = !(y[h[u]] = p));
                if (i) {
                    if (r || t) {
                        if (r) {
                            for (c = [], u = w.length; u--;)(p = w[u]) && c.push(y[u] = p);
                            r(null, w = [], c, l)
                        }
                        for (u = w.length; u--;)(p = w[u]) && (c = r ? Q(i, p) : d[u]) > -1 && (i[c] = !(a[c] = p))
                    }
                } else w = m(w === a ? w.splice(g, w.length) : w), r ? r(null, a, w, l) : G.apply(a, w)
            })
        }

        function v(t) {
            for (var e, n, i, o = t.length, r = x.relative[t[0].type], a = r || x.relative[" "], s = r ? 1 : 0, l = d(function(t) {
                    return t === e
                }, a, !0), c = d(function(t) {
                    return Q(e, t) > -1
                }, a, !0), u = [function(t, n, i) {
                    var o = !r && (i || n !== E) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                    return e = null, o
                }]; s < o; s++)
                if (n = x.relative[t[s].type]) u = [d(h(u), n)];
                else {
                    if (n = x.filter[t[s].type].apply(null, t[s].matches), n[j]) {
                        for (i = ++s; i < o && !x.relative[t[i].type]; i++);
                        return g(s > 1 && h(u), s > 1 && p(t.slice(0, s - 1).concat({
                            value: " " === t[s - 2].type ? "*" : ""
                        })).replace(rt, "$1"), n, s < i && v(t.slice(s, i)), i < o && v(t = t.slice(i)), i < o && p(t))
                    }
                    u.push(n)
                } return h(u)
        }

        function y(t, n) {
            var o = n.length > 0,
                r = t.length > 0,
                a = function(i, a, s, l, c) {
                    var u, p, d, h = 0,
                        f = "0",
                        g = i && [],
                        v = [],
                        y = E,
                        w = i || r && x.find.TAG("*", c),
                        b = $ += null == y ? 1 : Math.random() || .1,
                        k = w.length;
                    for (c && (E = a === D || a || c); f !== k && null != (u = w[f]); f++) {
                        if (r && u) {
                            for (p = 0, a || u.ownerDocument === D || (N(u), s = !L); d = t[p++];)
                                if (d(u, a || D, s)) {
                                    l.push(u);
                                    break
                                } c && ($ = b)
                        }
                        o && ((u = !d && u) && h--, i && g.push(u))
                    }
                    if (h += f, o && f !== h) {
                        for (p = 0; d = n[p++];) d(g, v, a, s);
                        if (i) {
                            if (h > 0)
                                for (; f--;) g[f] || v[f] || (v[f] = V.call(l));
                            v = m(v)
                        }
                        G.apply(l, v), c && !i && v.length > 0 && h + n.length > 1 && e.uniqueSort(l)
                    }
                    return c && ($ = b, E = y), g
                };
            return o ? i(a) : a
        }
        var w, b, x, k, S, T, _, C, E, A, P, N, D, I, L, O, M, R, F, j = "sizzle" + 1 * new Date,
            H = t.document,
            $ = 0,
            B = 0,
            q = n(),
            W = n(),
            z = n(),
            U = function(t, e) {
                return t === e && (P = !0), 0
            },
            K = {}.hasOwnProperty,
            Z = [],
            V = Z.pop,
            X = Z.push,
            G = Z.push,
            Y = Z.slice,
            Q = function(t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e) return n;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            tt = "[\\x20\\t\\r\\n\\f]",
            et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
            it = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)",
            ot = new RegExp(tt + "+", "g"),
            rt = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
            at = new RegExp("^" + tt + "*," + tt + "*"),
            st = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
            lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
            ct = new RegExp(it),
            ut = new RegExp("^" + et + "$"),
            pt = {
                ID: new RegExp("^#(" + et + ")"),
                CLASS: new RegExp("^\\.(" + et + ")"),
                TAG: new RegExp("^(" + et + "|[*])"),
                ATTR: new RegExp("^" + nt),
                PSEUDO: new RegExp("^" + it),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
            },
            dt = /^(?:input|select|textarea|button)$/i,
            ht = /^h\d$/i,
            ft = /^[^{]+\{\s*\[native \w/,
            mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            gt = /[+~]/,
            vt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
            yt = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            wt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            bt = function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            xt = function() {
                N()
            },
            kt = d(function(t) {
                return !0 === t.disabled && ("form" in t || "label" in t)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            G.apply(Z = Y.call(H.childNodes), H.childNodes), Z[H.childNodes.length].nodeType
        } catch (t) {
            G = {
                apply: Z.length ? function(t, e) {
                    X.apply(t, Y.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        b = e.support = {}, S = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, N = e.setDocument = function(t) {
            var e, n, i = t ? t.ownerDocument || t : H;
            return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, I = D.documentElement, L = !S(D), H !== D && (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xt, !1) : n.attachEvent && n.attachEvent("onunload", xt)), b.attributes = o(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), b.getElementsByTagName = o(function(t) {
                return t.appendChild(D.createComment("")), !t.getElementsByTagName("*").length
            }), b.getElementsByClassName = ft.test(D.getElementsByClassName), b.getById = o(function(t) {
                return I.appendChild(t).id = j, !D.getElementsByName || !D.getElementsByName(j).length
            }), b.getById ? (x.filter.ID = function(t) {
                var e = t.replace(vt, yt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }, x.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && L) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }) : (x.filter.ID = function(t) {
                var e = t.replace(vt, yt);
                return function(t) {
                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }, x.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && L) {
                    var n, i, o, r = e.getElementById(t);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
                        for (o = e.getElementsByName(t), i = 0; r = o[i++];)
                            if ((n = r.getAttributeNode("id")) && n.value === t) return [r]
                    }
                    return []
                }
            }), x.find.TAG = b.getElementsByTagName ? function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var n, i = [],
                    o = 0,
                    r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, x.find.CLASS = b.getElementsByClassName && function(t, e) {
                if (void 0 !== e.getElementsByClassName && L) return e.getElementsByClassName(t)
            }, M = [], O = [], (b.qsa = ft.test(D.querySelectorAll)) && (o(function(t) {
                I.appendChild(t).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || O.push("\\[" + tt + "*(?:value|" + J + ")"), t.querySelectorAll("[id~=" + j + "-]").length || O.push("~="), t.querySelectorAll(":checked").length || O.push(":checked"), t.querySelectorAll("a#" + j + "+*").length || O.push(".#.+[+~]")
            }), o(function(t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = D.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && O.push("name" + tt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && O.push(":enabled", ":disabled"), I.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && O.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), O.push(",.*:")
            })), (b.matchesSelector = ft.test(R = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && o(function(t) {
                b.disconnectedMatch = R.call(t, "*"), R.call(t, "[s!='']:x"), M.push("!=", it)
            }), O = O.length && new RegExp(O.join("|")), M = M.length && new RegExp(M.join("|")), e = ft.test(I.compareDocumentPosition), F = e || ft.test(I.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, U = e ? function(t, e) {
                if (t === e) return P = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === D || t.ownerDocument === H && F(H, t) ? -1 : e === D || e.ownerDocument === H && F(H, e) ? 1 : A ? Q(A, t) - Q(A, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e) return P = !0, 0;
                var n, i = 0,
                    o = t.parentNode,
                    r = e.parentNode,
                    s = [t],
                    l = [e];
                if (!o || !r) return t === D ? -1 : e === D ? 1 : o ? -1 : r ? 1 : A ? Q(A, t) - Q(A, e) : 0;
                if (o === r) return a(t, e);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (; s[i] === l[i];) i++;
                return i ? a(s[i], l[i]) : s[i] === H ? -1 : l[i] === H ? 1 : 0
            }, D) : D
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== D && N(t), n = n.replace(lt, "='$1']"), b.matchesSelector && L && !z[n + " "] && (!M || !M.test(n)) && (!O || !O.test(n))) try {
                var i = R.call(t, n);
                if (i || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (t) {}
            return e(n, D, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== D && N(t), F(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== D && N(t);
            var n = x.attrHandle[e.toLowerCase()],
                i = n && K.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !L) : void 0;
            return void 0 !== i ? i : b.attributes || !L ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.escape = function(t) {
            return (t + "").replace(wt, bt)
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [],
                i = 0,
                o = 0;
            if (P = !b.detectDuplicates, A = !b.sortStable && t.slice(0), t.sort(U), P) {
                for (; e = t[o++];) e === t[o] && (i = n.push(o));
                for (; i--;) t.splice(n[i], 1)
            }
            return A = null, t
        }, k = e.getText = function(t) {
            var e, n = "",
                i = 0,
                o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += k(t)
                } else if (3 === o || 4 === o) return t.nodeValue
            } else
                for (; e = t[i++];) n += k(e);
            return n
        }, x = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(vt, yt), t[3] = (t[3] || t[4] || t[5] || "").replace(vt, yt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ct.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(vt, yt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = q[t + " "];
                    return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && q(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(o) {
                        var r = e.attr(o, t);
                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ot, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(t, e, n, i, o) {
                    var r = "nth" !== t.slice(0, 3),
                        a = "last" !== t.slice(-4),
                        s = "of-type" === e;
                    return 1 === i && 0 === o ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, l) {
                        var c, u, p, d, h, f, m = r !== a ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            v = s && e.nodeName.toLowerCase(),
                            y = !l && !s,
                            w = !1;
                        if (g) {
                            if (r) {
                                for (; m;) {
                                    for (d = e; d = d[m];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [a ? g.firstChild : g.lastChild], a && y) {
                                for (d = g, p = d[j] || (d[j] = {}), u = p[d.uniqueID] || (p[d.uniqueID] = {}), c = u[t] || [], h = c[0] === $ && c[1], w = h && c[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (w = h = 0) || f.pop();)
                                    if (1 === d.nodeType && ++w && d === e) {
                                        u[t] = [$, h, w];
                                        break
                                    }
                            } else if (y && (d = e, p = d[j] || (d[j] = {}), u = p[d.uniqueID] || (p[d.uniqueID] = {}), c = u[t] || [], h = c[0] === $ && c[1], w = h), !1 === w)
                                for (;
                                    (d = ++h && d && d[m] || (w = h = 0) || f.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++w || (y && (p = d[j] || (d[j] = {}), u = p[d.uniqueID] || (p[d.uniqueID] = {}), u[t] = [$, w]), d !== e)););
                            return (w -= o) === i || w % i == 0 && w / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var o, r = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[j] ? r(n) : r.length > 1 ? (o = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, o = r(t, n), a = o.length; a--;) i = Q(t, o[a]), t[i] = !(e[i] = o[a])
                    }) : function(t) {
                        return r(t, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [],
                        n = [],
                        o = _(t.replace(rt, "$1"));
                    return o[j] ? i(function(t, e, n, i) {
                        for (var r, a = o(t, null, i, []), s = t.length; s--;)(r = a[s]) && (t[s] = !(e[s] = r))
                    }) : function(t, i, r) {
                        return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return t = t.replace(vt, yt),
                        function(e) {
                            return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                        }
                }),
                lang: i(function(t) {
                    return ut.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(vt, yt).toLowerCase(),
                        function(e) {
                            var n;
                            do {
                                if (n = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === I
                },
                focus: function(t) {
                    return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: s(!1),
                disabled: s(!0),
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !x.pseudos.empty(t)
                },
                header: function(t) {
                    return ht.test(t.nodeName)
                },
                input: function(t) {
                    return dt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(t, e) {
                    return [e - 1]
                }),
                eq: l(function(t, e, n) {
                    return [n < 0 ? n + e : n]
                }),
                even: l(function(t, e) {
                    for (var n = 0; n < e; n += 2) t.push(n);
                    return t
                }),
                odd: l(function(t, e) {
                    for (var n = 1; n < e; n += 2) t.push(n);
                    return t
                }),
                lt: l(function(t, e, n) {
                    for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: l(function(t, e, n) {
                    for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[w] = function(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }(w);
        for (w in {
                submit: !0,
                reset: !0
            }) x.pseudos[w] = function(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }(w);
        return u.prototype = x.filters = x.pseudos, x.setFilters = new u, T = e.tokenize = function(t, n) {
            var i, o, r, a, s, l, c, u = W[t + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = t, l = [], c = x.preFilter; s;) {
                i && !(o = at.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = st.exec(s)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(rt, " ")
                }), s = s.slice(i.length));
                for (a in x.filter) !(o = pt[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: a,
                    matches: o
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? e.error(t) : W(t, l).slice(0)
        }, _ = e.compile = function(t, e) {
            var n, i = [],
                o = [],
                r = z[t + " "];
            if (!r) {
                for (e || (e = T(t)), n = e.length; n--;) r = v(e[n]), r[j] ? i.push(r) : o.push(r);
                r = z(t, y(o, i)), r.selector = t
            }
            return r
        }, C = e.select = function(t, e, n, i) {
            var o, r, a, s, l, u = "function" == typeof t && t,
                d = !i && T(t = u.selector || t);
            if (n = n || [], 1 === d.length) {
                if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && 9 === e.nodeType && L && x.relative[r[1].type]) {
                    if (!(e = (x.find.ID(a.matches[0].replace(vt, yt), e) || [])[0])) return n;
                    u && (e = e.parentNode), t = t.slice(r.shift().value.length)
                }
                for (o = pt.needsContext.test(t) ? 0 : r.length; o-- && (a = r[o], !x.relative[s = a.type]);)
                    if ((l = x.find[s]) && (i = l(a.matches[0].replace(vt, yt), gt.test(r[0].type) && c(e.parentNode) || e))) {
                        if (r.splice(o, 1), !(t = i.length && p(r))) return G.apply(n, i), n;
                        break
                    }
            }
            return (u || _(t, d))(i, e, !L, n, !e || gt.test(t) && c(e.parentNode) || e), n
        }, b.sortStable = j.split("").sort(U).join("") === j, b.detectDuplicates = !!P, N(), b.sortDetached = o(function(t) {
            return 1 & t.compareDocumentPosition(D.createElement("fieldset"))
        }), o(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), b.attributes && o(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || r("value", function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), o(function(t) {
            return null == t.getAttribute("disabled")
        }) || r(J, function(t, e, n) {
            var i;
            if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    ft.find = wt, ft.expr = wt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = wt.uniqueSort, ft.text = wt.getText, ft.isXMLDoc = wt.isXML, ft.contains = wt.contains, ft.escapeSelector = wt.escape;
    var bt = function(t, e, n) {
            for (var i = [], o = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (o && ft(t).is(n)) break;
                    i.push(t)
                } return i
        },
        xt = function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        kt = ft.expr.match.needsContext,
        St = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Tt = /^.[^:#\[\.,]*$/;
    ft.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ft.find.matchesSelector(i, t) ? [i] : [] : ft.find.matches(t, ft.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, ft.fn.extend({
        find: function(t) {
            var e, n, i = this.length,
                o = this;
            if ("string" != typeof t) return this.pushStack(ft(t).filter(function() {
                for (e = 0; e < i; e++)
                    if (ft.contains(o[e], this)) return !0
            }));
            for (n = this.pushStack([]), e = 0; e < i; e++) ft.find(t, o[e], n);
            return i > 1 ? ft.uniqueSort(n) : n
        },
        filter: function(t) {
            return this.pushStack(o(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(o(this, t || [], !0))
        },
        is: function(t) {
            return !!o(this, "string" == typeof t && kt.test(t) ? ft(t) : t || [], !1).length
        }
    });
    var _t, Ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ft.fn.init = function(t, e, n) {
        var i, o;
        if (!t) return this;
        if (n = n || _t, "string" == typeof t) {
            if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Ct.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : et, !0)), St.test(i[1]) && ft.isPlainObject(e))
                    for (i in e) ft.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            return o = et.getElementById(i[2]), o && (this[0] = o, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : ft.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(ft) : ft.makeArray(t, this)
    }).prototype = ft.fn, _t = ft(et);
    var Et = /^(?:parents|prev(?:Until|All))/,
        At = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ft.fn.extend({
        has: function(t) {
            var e = ft(t, this),
                n = e.length;
            return this.filter(function() {
                for (var t = 0; t < n; t++)
                    if (ft.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            var n, i = 0,
                o = this.length,
                r = [],
                a = "string" != typeof t && ft(t);
            if (!kt.test(t))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ft.find.matchesSelector(n, t))) {
                            r.push(n);
                            break
                        } return this.pushStack(r.length > 1 ? ft.uniqueSort(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? at.call(ft(t), this[0]) : at.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ft.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return bt(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return bt(t, "parentNode", n)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return bt(t, "nextSibling")
        },
        prevAll: function(t) {
            return bt(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return bt(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return bt(t, "previousSibling", n)
        },
        siblings: function(t) {
            return xt((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return xt(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || ft.merge([], t.childNodes)
        }
    }, function(t, e) {
        ft.fn[t] = function(n, i) {
            var o = ft.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = ft.filter(i, o)), this.length > 1 && (At[t] || ft.uniqueSort(o), Et.test(t) && o.reverse()), this.pushStack(o)
        }
    });
    var Pt = /[^\x20\t\r\n\f]+/g;
    ft.Callbacks = function(t) {
        t = "string" == typeof t ? a(t) : ft.extend({}, t);
        var e, n, i, o, r = [],
            s = [],
            l = -1,
            c = function() {
                for (o = t.once, i = e = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < r.length;) !1 === r[l].apply(n[0], n[1]) && t.stopOnFalse && (l = r.length, n = !1);
                t.memory || (n = !1), e = !1, o && (r = n ? [] : "")
            },
            u = {
                add: function() {
                    return r && (n && !e && (l = r.length - 1, s.push(n)), function e(n) {
                        ft.each(n, function(n, i) {
                            ft.isFunction(i) ? t.unique && u.has(i) || r.push(i) : i && i.length && "string" !== ft.type(i) && e(i)
                        })
                    }(arguments), n && !e && c()), this
                },
                remove: function() {
                    return ft.each(arguments, function(t, e) {
                        for (var n;
                            (n = ft.inArray(e, r, n)) > -1;) r.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(t) {
                    return t ? ft.inArray(t, r) > -1 : r.length > 0
                },
                empty: function() {
                    return r && (r = []), this
                },
                disable: function() {
                    return o = s = [], r = n = "", this
                },
                disabled: function() {
                    return !r
                },
                lock: function() {
                    return o = s = [], n || e || (r = n = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(t, n) {
                    return o || (n = n || [], n = [t, n.slice ? n.slice() : n], s.push(n), e || c()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return u
    }, ft.extend({
        Deferred: function(e) {
            var n = [
                    ["notify", "progress", ft.Callbacks("memory"), ft.Callbacks("memory"), 2],
                    ["resolve", "done", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                o = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    catch: function(t) {
                        return o.then(null, t)
                    },
                    pipe: function() {
                        var t = arguments;
                        return ft.Deferred(function(e) {
                            ft.each(n, function(n, i) {
                                var o = ft.isFunction(t[i[4]]) && t[i[4]];
                                r[i[1]](function() {
                                    var t = o && o.apply(this, arguments);
                                    t && ft.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, o ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    then: function(e, i, o) {
                        function r(e, n, i, o) {
                            return function() {
                                var c = this,
                                    u = arguments,
                                    p = function() {
                                        var t, p;
                                        if (!(e < a)) {
                                            if ((t = i.apply(c, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            p = t && ("object" == typeof t || "function" == typeof t) && t.then, ft.isFunction(p) ? o ? p.call(t, r(a, n, s, o), r(a, n, l, o)) : (a++, p.call(t, r(a, n, s, o), r(a, n, l, o), r(a, n, s, n.notifyWith))) : (i !== s && (c = void 0, u = [t]), (o || n.resolveWith)(c, u))
                                        }
                                    },
                                    d = o ? p : function() {
                                        try {
                                            p()
                                        } catch (t) {
                                            ft.Deferred.exceptionHook && ft.Deferred.exceptionHook(t, d.stackTrace), e + 1 >= a && (i !== l && (c = void 0, u = [t]), n.rejectWith(c, u))
                                        }
                                    };
                                e ? d() : (ft.Deferred.getStackHook && (d.stackTrace = ft.Deferred.getStackHook()), t.setTimeout(d))
                            }
                        }
                        var a = 0;
                        return ft.Deferred(function(t) {
                            n[0][3].add(r(0, t, ft.isFunction(o) ? o : s, t.notifyWith)), n[1][3].add(r(0, t, ft.isFunction(e) ? e : s)), n[2][3].add(r(0, t, ft.isFunction(i) ? i : l))
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? ft.extend(t, o) : o
                    }
                },
                r = {};
            return ft.each(n, function(t, e) {
                var a = e[2],
                    s = e[5];
                o[e[1]] = a.add, s && a.add(function() {
                    i = s
                }, n[3 - t][2].disable, n[0][2].lock), a.add(e[3].fire), r[e[0]] = function() {
                    return r[e[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[e[0] + "With"] = a.fireWith
            }), o.promise(r), e && e.call(r, r), r
        },
        when: function(t) {
            var e = arguments.length,
                n = e,
                i = Array(n),
                o = it.call(arguments),
                r = ft.Deferred(),
                a = function(t) {
                    return function(n) {
                        i[t] = this, o[t] = arguments.length > 1 ? it.call(arguments) : n, --e || r.resolveWith(i, o)
                    }
                };
            if (e <= 1 && (c(t, r.done(a(n)).resolve, r.reject), "pending" === r.state() || ft.isFunction(o[n] && o[n].then))) return r.then();
            for (; n--;) c(o[n], a(n), r.reject);
            return r.promise()
        }
    });
    var Nt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ft.Deferred.exceptionHook = function(e, n) {
        t.console && t.console.warn && e && Nt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }, ft.readyException = function(e) {
        t.setTimeout(function() {
            throw e
        })
    };
    var Dt = ft.Deferred();
    ft.fn.ready = function(t) {
        return Dt.then(t).catch(function(t) {
            ft.readyException(t)
        }), this
    }, ft.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? ft.readyWait++ : ft.ready(!0)
        },
        ready: function(t) {
            (!0 === t ? --ft.readyWait : ft.isReady) || (ft.isReady = !0, !0 !== t && --ft.readyWait > 0 || Dt.resolveWith(et, [ft]))
        }
    }), ft.ready.then = Dt.then, "complete" === et.readyState || "loading" !== et.readyState && !et.documentElement.doScroll ? t.setTimeout(ft.ready) : (et.addEventListener("DOMContentLoaded", u), t.addEventListener("load", u));
    var It = function(t, e, n, i, o, r, a) {
            var s = 0,
                l = t.length,
                c = null == n;
            if ("object" === ft.type(n)) {
                o = !0;
                for (s in n) It(t, e, s, n[s], !0, r, a)
            } else if (void 0 !== i && (o = !0, ft.isFunction(i) || (a = !0), c && (a ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                    return c.call(ft(t), n)
                })), e))
                for (; s < l; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
            return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
        },
        Lt = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
    p.uid = 1, p.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {}, Lt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, n) {
            var i, o = this.cache(t);
            if ("string" == typeof e) o[ft.camelCase(e)] = n;
            else
                for (i in e) o[ft.camelCase(i)] = e[i];
            return o
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][ft.camelCase(e)]
        },
        access: function(t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    ft.isArray(e) ? e = e.map(ft.camelCase) : (e = ft.camelCase(e), e = e in i ? [e] : e.match(Pt) || []), n = e.length;
                    for (; n--;) delete i[e[n]]
                }(void 0 === e || ft.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !ft.isEmptyObject(e)
        }
    };
    var Ot = new p,
        Mt = new p,
        Rt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ft = /[A-Z]/g;
    ft.extend({
        hasData: function(t) {
            return Mt.hasData(t) || Ot.hasData(t)
        },
        data: function(t, e, n) {
            return Mt.access(t, e, n)
        },
        removeData: function(t, e) {
            Mt.remove(t, e)
        },
        _data: function(t, e, n) {
            return Ot.access(t, e, n)
        },
        _removeData: function(t, e) {
            Ot.remove(t, e)
        }
    }), ft.fn.extend({
        data: function(t, e) {
            var n, i, o, r = this[0],
                a = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = Mt.get(r), 1 === r.nodeType && !Ot.get(r, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = ft.camelCase(i.slice(5)), h(r, i, o[i])));
                    Ot.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                Mt.set(this, t)
            }) : It(this, function(e) {
                var n;
                if (r && void 0 === e) {
                    if (void 0 !== (n = Mt.get(r, t))) return n;
                    if (void 0 !== (n = h(r, t))) return n
                } else this.each(function() {
                    Mt.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                Mt.remove(this, t)
            })
        }
    }), ft.extend({
        queue: function(t, e, n) {
            var i;
            if (t) return e = (e || "fx") + "queue", i = Ot.get(t, e), n && (!i || ft.isArray(n) ? i = Ot.access(t, e, ft.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = ft.queue(t, e),
                i = n.length,
                o = n.shift(),
                r = ft._queueHooks(t, e),
                a = function() {
                    ft.dequeue(t, e)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, a, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return Ot.get(t, n) || Ot.access(t, n, {
                empty: ft.Callbacks("once memory").add(function() {
                    Ot.remove(t, [e + "queue", n])
                })
            })
        }
    }), ft.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ft.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = ft.queue(this, t, e);
                ft._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ft.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                ft.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                o = ft.Deferred(),
                r = this,
                a = this.length,
                s = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(n = Ot.get(r[a], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), o.promise(e)
        }
    });
    var jt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ht = new RegExp("^(?:([+-])=|)(" + jt + ")([a-z%]*)$", "i"),
        $t = ["Top", "Right", "Bottom", "Left"],
        Bt = function(t, e) {
            return t = e || t, "none" === t.style.display || "" === t.style.display && ft.contains(t.ownerDocument, t) && "none" === ft.css(t, "display")
        },
        qt = function(t, e, n, i) {
            var o, r, a = {};
            for (r in e) a[r] = t.style[r], t.style[r] = e[r];
            o = n.apply(t, i || []);
            for (r in e) t.style[r] = a[r];
            return o
        },
        Wt = {};
    ft.fn.extend({
        show: function() {
            return g(this, !0)
        },
        hide: function() {
            return g(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Bt(this) ? ft(this).show() : ft(this).hide()
            })
        }
    });
    var zt = /^(?:checkbox|radio)$/i,
        Ut = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Kt = /^$|\/(?:java|ecma)script/i,
        Zt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td;
    var Vt = /<|&#?\w+;/;
    ! function() {
        var t = et.createDocumentFragment(),
            e = t.appendChild(et.createElement("div")),
            n = et.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), dt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", dt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Xt = et.documentElement,
        Gt = /^key/,
        Yt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Qt = /^([^.]*)(?:\.(.+)|)/;
    ft.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, a, s, l, c, u, p, d, h, f, m, g = Ot.get(t);
            if (g)
                for (n.handler && (r = n, n = r.handler, o = r.selector), o && ft.find.matchesSelector(Xt, o), n.guid || (n.guid = ft.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function(e) {
                        return void 0 !== ft && ft.event.triggered !== e.type ? ft.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(Pt) || [""], c = e.length; c--;) s = Qt.exec(e[c]) || [], h = m = s[1], f = (s[2] || "").split(".").sort(), h && (p = ft.event.special[h] || {}, h = (o ? p.delegateType : p.bindType) || h, p = ft.event.special[h] || {}, u = ft.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && ft.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, r), (d = l[h]) || (d = l[h] = [], d.delegateCount = 0, p.setup && !1 !== p.setup.call(t, i, f, a) || t.addEventListener && t.addEventListener(h, a)), p.add && (p.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, u) : d.push(u), ft.event.global[h] = !0)
        },
        remove: function(t, e, n, i, o) {
            var r, a, s, l, c, u, p, d, h, f, m, g = Ot.hasData(t) && Ot.get(t);
            if (g && (l = g.events)) {
                for (e = (e || "").match(Pt) || [""], c = e.length; c--;)
                    if (s = Qt.exec(e[c]) || [], h = m = s[1], f = (s[2] || "").split(".").sort(), h) {
                        for (p = ft.event.special[h] || {}, h = (i ? p.delegateType : p.bindType) || h, d = l[h] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = d.length; r--;) u = d[r], !o && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(r, 1), u.selector && d.delegateCount--, p.remove && p.remove.call(t, u));
                        a && !d.length && (p.teardown && !1 !== p.teardown.call(t, f, g.handle) || ft.removeEvent(t, h, g.handle), delete l[h])
                    } else
                        for (h in l) ft.event.remove(t, h + e[c], n, i, !0);
                ft.isEmptyObject(l) && Ot.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, n, i, o, r, a, s = ft.event.fix(t),
                l = new Array(arguments.length),
                c = (Ot.get(this, "events") || {})[s.type] || [],
                u = ft.event.special[s.type] || {};
            for (l[0] = s, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                for (a = ft.event.handlers.call(this, s, c), e = 0;
                    (o = a[e++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (i = ((ft.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(t, e) {
            var n, i, o, r, a, s = [],
                l = e.delegateCount,
                c = t.target;
            if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                        for (r = [], a = {}, n = 0; n < l; n++) i = e[n], o = i.selector + " ", void 0 === a[o] && (a[o] = i.needsContext ? ft(o, this).index(c) > -1 : ft.find(o, this, null, [c]).length), a[o] && r.push(i);
                        r.length && s.push({
                            elem: c,
                            handlers: r
                        })
                    } return c = this, l < e.length && s.push({
                elem: c,
                handlers: e.slice(l)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(ft.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: ft.isFunction(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(t) {
            return t[ft.expando] ? t : new ft.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== k() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === k() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && ft.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(t) {
                    return ft.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, ft.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, ft.Event = function(t, e) {
        return this instanceof ft.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? b : x, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || ft.now(), void(this[ft.expando] = !0)) : new ft.Event(t, e)
    }, ft.Event.prototype = {
        constructor: ft.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = b, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = b, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = b, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ft.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(t) {
            var e = t.button;
            return null == t.which && Gt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Yt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, ft.event.addProp), ft.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        ft.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    o = t.relatedTarget,
                    r = t.handleObj;
                return o && (o === i || ft.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), ft.fn.extend({
        on: function(t, e, n, i) {
            return S(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return S(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, o;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ft(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = x), this.each(function() {
                ft.event.remove(this, t, n, e)
            })
        }
    });
    var Jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        te = /<script|<style|<link/i,
        ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ne = /^true\/(.*)/,
        ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ft.extend({
        htmlPrefilter: function(t) {
            return t.replace(Jt, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var i, o, r, a, s = t.cloneNode(!0),
                l = ft.contains(t.ownerDocument, t);
            if (!(dt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t)))
                for (a = v(s), r = v(t), i = 0, o = r.length; i < o; i++) A(r[i], a[i]);
            if (e)
                if (n)
                    for (r = r || v(t), a = a || v(s), i = 0, o = r.length; i < o; i++) E(r[i], a[i]);
                else E(t, s);
            return a = v(s, "script"), a.length > 0 && y(a, !l && v(t, "script")), s
        },
        cleanData: function(t) {
            for (var e, n, i, o = ft.event.special, r = 0; void 0 !== (n = t[r]); r++)
                if (Lt(n)) {
                    if (e = n[Ot.expando]) {
                        if (e.events)
                            for (i in e.events) o[i] ? ft.event.remove(n, i) : ft.removeEvent(n, i, e.handle);
                        n[Ot.expando] = void 0
                    }
                    n[Mt.expando] && (n[Mt.expando] = void 0)
                }
        }
    }), ft.fn.extend({
        detach: function(t) {
            return N(this, t, !0)
        },
        remove: function(t) {
            return N(this, t)
        },
        text: function(t) {
            return It(this, function(t) {
                return void 0 === t ? ft.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return P(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    T(this, t).appendChild(t)
                }
            })
        },
        prepend: function() {
            return P(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = T(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return P(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return P(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ft.cleanData(v(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return ft.clone(this, t, e)
            })
        },
        html: function(t) {
            return It(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !te.test(t) && !Zt[(Ut.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ft.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) e = this[n] || {}, 1 === e.nodeType && (ft.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return P(this, arguments, function(e) {
                var n = this.parentNode;
                ft.inArray(this, t) < 0 && (ft.cleanData(v(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), ft.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        ft.fn[t] = function(t) {
            for (var n, i = [], o = ft(t), r = o.length - 1, a = 0; a <= r; a++) n = a === r ? this : this.clone(!0), ft(o[a])[e](n), rt.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var oe = /^margin/,
        re = new RegExp("^(" + jt + ")(?!px)[a-z%]+$", "i"),
        ae = function(e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t), n.getComputedStyle(e)
        };
    ! function() {
        function e() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Xt.appendChild(a);
                var e = t.getComputedStyle(s);
                n = "1%" !== e.top, r = "2px" === e.marginLeft, i = "4px" === e.width, s.style.marginRight = "50%", o = "4px" === e.marginRight, Xt.removeChild(a), s = null
            }
        }
        var n, i, o, r, a = et.createElement("div"),
            s = et.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", dt.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), ft.extend(dt, {
            pixelPosition: function() {
                return e(), n
            },
            boxSizingReliable: function() {
                return e(), i
            },
            pixelMarginRight: function() {
                return e(), o
            },
            reliableMarginLeft: function() {
                return e(), r
            }
        }))
    }();
    var se = /^(none|table(?!-c[ea]).+)/,
        le = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ce = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ue = ["Webkit", "Moz", "ms"],
        pe = et.createElement("div").style;
    ft.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = D(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, a, s = ft.camelCase(e),
                    l = t.style;
                return e = ft.cssProps[s] || (ft.cssProps[s] = L(s) || s), a = ft.cssHooks[e] || ft.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (o = a.get(t, !1, i)) ? o : l[e] : (r = typeof n, "string" === r && (o = Ht.exec(n)) && o[1] && (n = f(t, e, o), r = "number"), void(null != n && n === n && ("number" === r && (n += o && o[3] || (ft.cssNumber[s] ? "" : "px")), dt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, i)) || (l[e] = n))))
            }
        },
        css: function(t, e, n, i) {
            var o, r, a, s = ft.camelCase(e);
            return e = ft.cssProps[s] || (ft.cssProps[s] = L(s) || s), a = ft.cssHooks[e] || ft.cssHooks[s], a && "get" in a && (o = a.get(t, !0, n)), void 0 === o && (o = D(t, e, i)), "normal" === o && e in ce && (o = ce[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }), ft.each(["height", "width"], function(t, e) {
        ft.cssHooks[e] = {
            get: function(t, n, i) {
                if (n) return !se.test(ft.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? R(t, e, i) : qt(t, le, function() {
                    return R(t, e, i)
                })
            },
            set: function(t, n, i) {
                var o, r = i && ae(t),
                    a = i && M(t, e, i, "border-box" === ft.css(t, "boxSizing", !1, r), r);
                return a && (o = Ht.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = ft.css(t, e)), O(t, n, a)
            }
        }
    }), ft.cssHooks.marginLeft = I(dt.reliableMarginLeft, function(t, e) {
        if (e) return (parseFloat(D(t, "marginLeft")) || t.getBoundingClientRect().left - qt(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px"
    }), ft.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        ft.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + $t[i] + e] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, oe.test(t) || (ft.cssHooks[t + e].set = O)
    }), ft.fn.extend({
        css: function(t, e) {
            return It(this, function(t, e, n) {
                var i, o, r = {},
                    a = 0;
                if (ft.isArray(e)) {
                    for (i = ae(t), o = e.length; a < o; a++) r[e[a]] = ft.css(t, e[a], !1, i);
                    return r
                }
                return void 0 !== n ? ft.style(t, e, n) : ft.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), ft.Tween = F, F.prototype = {
        constructor: F,
        init: function(t, e, n, i, o, r) {
            this.elem = t, this.prop = n, this.easing = o || ft.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ft.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = F.propHooks[this.prop];
            return t && t.get ? t.get(this) : F.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = F.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
        }
    }, F.prototype.init.prototype = F.prototype, F.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function(t) {
                ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ft.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, ft.fx = F.prototype.init, ft.fx.step = {};
    var de, he, fe = /^(?:toggle|show|hide)$/,
        me = /queueHooks$/;
    ft.Animation = ft.extend(z, {
            tweeners: {
                "*": [function(t, e) {
                    var n = this.createTween(t, e);
                    return f(n.elem, t, Ht.exec(e), n), n
                }]
            },
            tweener: function(t, e) {
                ft.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Pt);
                for (var n, i = 0, o = t.length; i < o; i++) n = t[i], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(e)
            },
            prefilters: [q],
            prefilter: function(t, e) {
                e ? z.prefilters.unshift(t) : z.prefilters.push(t)
            }
        }), ft.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? ft.extend({}, t) : {
                complete: n || !n && e || ft.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !ft.isFunction(e) && e
            };
            return ft.fx.off || et.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in ft.fx.speeds ? i.duration = ft.fx.speeds[i.duration] : i.duration = ft.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ft.isFunction(i.old) && i.old.call(this), i.queue && ft.dequeue(this, i.queue)
            }, i
        }, ft.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(Bt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var o = ft.isEmptyObject(t),
                    r = ft.speed(e, n, i),
                    a = function() {
                        var e = z(this, ft.extend({}, t), r);
                        (o || Ot.get(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        o = null != t && t + "queueHooks",
                        r = ft.timers,
                        a = Ot.get(this);
                    if (o) a[o] && a[o].stop && i(a[o]);
                    else
                        for (o in a) a[o] && a[o].stop && me.test(o) && i(a[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                    !e && n || ft.dequeue(this, t)
                })
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"), this.each(function() {
                    var e, n = Ot.get(this),
                        i = n[t + "queue"],
                        o = n[t + "queueHooks"],
                        r = ft.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, ft.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; e < a; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), ft.each(["toggle", "show", "hide"], function(t, e) {
            var n = ft.fn[e];
            ft.fn[e] = function(t, i, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate($(e, !0), t, i, o)
            }
        }), ft.each({
            slideDown: $("show"),
            slideUp: $("hide"),
            slideToggle: $("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            ft.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), ft.timers = [], ft.fx.tick = function() {
            var t, e = 0,
                n = ft.timers;
            for (de = ft.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || ft.fx.stop(), de = void 0
        }, ft.fx.timer = function(t) {
            ft.timers.push(t), t() ? ft.fx.start() : ft.timers.pop()
        }, ft.fx.interval = 13, ft.fx.start = function() {
            he || (he = t.requestAnimationFrame ? t.requestAnimationFrame(j) : t.setInterval(ft.fx.tick, ft.fx.interval))
        }, ft.fx.stop = function() {
            t.cancelAnimationFrame ? t.cancelAnimationFrame(he) : t.clearInterval(he), he = null
        }, ft.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ft.fn.delay = function(e, n) {
            return e = ft.fx ? ft.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
                var o = t.setTimeout(n, e);
                i.stop = function() {
                    t.clearTimeout(o)
                }
            })
        },
        function() {
            var t = et.createElement("input"),
                e = et.createElement("select"),
                n = e.appendChild(et.createElement("option"));
            t.type = "checkbox", dt.checkOn = "" !== t.value, dt.optSelected = n.selected, t = et.createElement("input"), t.value = "t", t.type = "radio", dt.radioValue = "t" === t.value
        }();
    var ge, ve = ft.expr.attrHandle;
    ft.fn.extend({
        attr: function(t, e) {
            return It(this, ft.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                ft.removeAttr(this, t)
            })
        }
    }), ft.extend({
        attr: function(t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? ft.prop(t, e, n) : (1 === r && ft.isXMLDoc(t) || (o = ft.attrHooks[e.toLowerCase()] || (ft.expr.match.bool.test(e) ? ge : void 0)), void 0 !== n ? null === n ? void ft.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : (i = ft.find.attr(t, e), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!dt.radioValue && "radio" === e && ft.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i = 0,
                o = e && e.match(Pt);
            if (o && 1 === t.nodeType)
                for (; n = o[i++];) t.removeAttribute(n)
        }
    }), ge = {
        set: function(t, e, n) {
            return !1 === e ? ft.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, ft.each(ft.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = ve[e] || ft.find.attr;
        ve[e] = function(t, e, i) {
            var o, r, a = e.toLowerCase();
            return i || (r = ve[a], ve[a] = o, o = null != n(t, e, i) ? a : null, ve[a] = r), o
        }
    });
    var ye = /^(?:input|select|textarea|button)$/i,
        we = /^(?:a|area)$/i;
    ft.fn.extend({
        prop: function(t, e) {
            return It(this, ft.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[ft.propFix[t] || t]
            })
        }
    }), ft.extend({
        prop: function(t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, o = ft.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = ft.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ye.test(t.nodeName) || we.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), dt.optSelected || (ft.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ft.propFix[this.toLowerCase()] = this
    }), ft.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, a, s, l = 0;
            if (ft.isFunction(t)) return this.each(function(e) {
                ft(this).addClass(t.call(this, e, K(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(Pt) || []; n = this[l++];)
                    if (o = K(n), i = 1 === n.nodeType && " " + U(o) + " ") {
                        for (a = 0; r = e[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        s = U(i), o !== s && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, a, s, l = 0;
            if (ft.isFunction(t)) return this.each(function(e) {
                ft(this).removeClass(t.call(this, e, K(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(Pt) || []; n = this[l++];)
                    if (o = K(n), i = 1 === n.nodeType && " " + U(o) + " ") {
                        for (a = 0; r = e[a++];)
                            for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                        s = U(i), o !== s && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ft.isFunction(t) ? this.each(function(n) {
                ft(this).toggleClass(t.call(this, n, K(this), e), e)
            }) : this.each(function() {
                var e, i, o, r;
                if ("string" === n)
                    for (i = 0, o = ft(this), r = t.match(Pt) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else void 0 !== t && "boolean" !== n || (e = K(this), e && Ot.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Ot.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + U(K(n)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var be = /\r/g;
    ft.fn.extend({
        val: function(t) {
            var e, n, i, o = this[0];
            return arguments.length ? (i = ft.isFunction(t), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = i ? t.call(this, n, ft(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : ft.isArray(o) && (o = ft.map(o, function(t) {
                    return null == t ? "" : t + ""
                })), (e = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
            })) : o ? (e = ft.valHooks[o.type] || ft.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(be, "") : null == n ? "" : n)) : void 0
        }
    }), ft.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = ft.find.attr(t, "value");
                    return null != e ? e : U(ft.text(t))
                }
            },
            select: {
                get: function(t) {
                    var e, n, i, o = t.options,
                        r = t.selectedIndex,
                        a = "select-one" === t.type,
                        s = a ? null : [],
                        l = a ? r + 1 : o.length;
                    for (i = r < 0 ? l : a ? r : 0; i < l; i++)
                        if (n = o[i], (n.selected || i === r) && !n.disabled && (!n.parentNode.disabled || !ft.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ft(n).val(), a) return e;
                            s.push(e)
                        } return s
                },
                set: function(t, e) {
                    for (var n, i, o = t.options, r = ft.makeArray(e), a = o.length; a--;) i = o[a], (i.selected = ft.inArray(ft.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), r
                }
            }
        }
    }), ft.each(["radio", "checkbox"], function() {
        ft.valHooks[this] = {
            set: function(t, e) {
                if (ft.isArray(e)) return t.checked = ft.inArray(ft(t).val(), e) > -1
            }
        }, dt.checkOn || (ft.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var xe = /^(?:focusinfocus|focusoutblur)$/;
    ft.extend(ft.event, {
        trigger: function(e, n, i, o) {
            var r, a, s, l, c, u, p, d = [i || et],
                h = ct.call(e, "type") ? e.type : e,
                f = ct.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = s = i = i || et, 3 !== i.nodeType && 8 !== i.nodeType && !xe.test(h + ft.event.triggered) && (h.indexOf(".") > -1 && (f = h.split("."), h = f.shift(), f.sort()), c = h.indexOf(":") < 0 && "on" + h, e = e[ft.expando] ? e : new ft.Event(h, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : ft.makeArray(n, [e]), p = ft.event.special[h] || {}, o || !p.trigger || !1 !== p.trigger.apply(i, n))) {
                if (!o && !p.noBubble && !ft.isWindow(i)) {
                    for (l = p.delegateType || h, xe.test(l + h) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
                    s === (i.ownerDocument || et) && d.push(s.defaultView || s.parentWindow || t)
                }
                for (r = 0;
                    (a = d[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? l : p.bindType || h, u = (Ot.get(a, "events") || {})[e.type] && Ot.get(a, "handle"), u && u.apply(a, n), (u = c && a[c]) && u.apply && Lt(a) && (e.result = u.apply(a, n), !1 === e.result && e.preventDefault());
                return e.type = h, o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(d.pop(), n) || !Lt(i) || c && ft.isFunction(i[h]) && !ft.isWindow(i) && (s = i[c], s && (i[c] = null), ft.event.triggered = h, i[h](), ft.event.triggered = void 0, s && (i[c] = s)), e.result
            }
        },
        simulate: function(t, e, n) {
            var i = ft.extend(new ft.Event, n, {
                type: t,
                isSimulated: !0
            });
            ft.event.trigger(i, null, e)
        }
    }), ft.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                ft.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n) return ft.event.trigger(t, e, n, !0)
        }
    }), ft.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
        ft.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), ft.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), dt.focusin = "onfocusin" in t, dt.focusin || ft.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            ft.event.simulate(e, t.target, ft.event.fix(t))
        };
        ft.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = Ot.access(i, e);
                o || i.addEventListener(t, n, !0), Ot.access(i, e, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = Ot.access(i, e) - 1;
                o ? Ot.access(i, e, o) : (i.removeEventListener(t, n, !0), Ot.remove(i, e))
            }
        }
    });
    var ke = t.location,
        Se = ft.now(),
        Te = /\?/;
    ft.parseXML = function(e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + e), n
    };
    var _e = /\[\]$/,
        Ce = /\r?\n/g,
        Ee = /^(?:submit|button|image|reset|file)$/i,
        Ae = /^(?:input|select|textarea|keygen)/i;
    ft.param = function(t, e) {
        var n, i = [],
            o = function(t, e) {
                var n = ft.isFunction(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (ft.isArray(t) || t.jquery && !ft.isPlainObject(t)) ft.each(t, function() {
            o(this.name, this.value)
        });
        else
            for (n in t) Z(n, t[n], e, o);
        return i.join("&")
    }, ft.fn.extend({
        serialize: function() {
            return ft.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = ft.prop(this, "elements");
                return t ? ft.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !ft(this).is(":disabled") && Ae.test(this.nodeName) && !Ee.test(t) && (this.checked || !zt.test(t))
            }).map(function(t, e) {
                var n = ft(this).val();
                return null == n ? null : ft.isArray(n) ? ft.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ce, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Ce, "\r\n")
                }
            }).get()
        }
    });
    var Pe = /%20/g,
        Ne = /#.*$/,
        De = /([?&])_=[^&]*/,
        Ie = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Le = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Oe = /^(?:GET|HEAD)$/,
        Me = /^\/\//,
        Re = {},
        Fe = {},
        je = "*/".concat("*"),
        He = et.createElement("a");
    He.href = ke.href, ft.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ke.href,
            type: "GET",
            isLocal: Le.test(ke.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": je,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": ft.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? G(G(t, ft.ajaxSettings), e) : G(ft.ajaxSettings, t)
        },
        ajaxPrefilter: V(Re),
        ajaxTransport: V(Fe),
        ajax: function(e, n) {
            function i(e, n, i, s) {
                var c, d, h, b, x, k = n;
                u || (u = !0, l && t.clearTimeout(l), o = void 0, a = s || "", S.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, i && (b = Y(f, S, i)), b = Q(f, b, S, c), c ? (f.ifModified && (x = S.getResponseHeader("Last-Modified"), x && (ft.lastModified[r] = x), (x = S.getResponseHeader("etag")) && (ft.etag[r] = x)), 204 === e || "HEAD" === f.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = b.state, d = b.data, h = b.error, c = !h)) : (h = k, !e && k || (k = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (n || k) + "", c ? v.resolveWith(m, [d, k, S]) : v.rejectWith(m, [S, k, h]), S.statusCode(w), w = void 0, p && g.trigger(c ? "ajaxSuccess" : "ajaxError", [S, f, c ? d : h]), y.fireWith(m, [S, k]), p && (g.trigger("ajaxComplete", [S, f]), --ft.active || ft.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var o, r, a, s, l, c, u, p, d, h, f = ft.ajaxSetup({}, n),
                m = f.context || f,
                g = f.context && (m.nodeType || m.jquery) ? ft(m) : ft.event,
                v = ft.Deferred(),
                y = ft.Callbacks("once memory"),
                w = f.statusCode || {},
                b = {},
                x = {},
                k = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (u) {
                            if (!s)
                                for (s = {}; e = Ie.exec(a);) s[e[1].toLowerCase()] = e[2];
                            e = s[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return u ? a : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == u && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, b[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return null == u && (f.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (u) S.always(t[S.status]);
                            else
                                for (e in t) w[e] = [w[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        var e = t || k;
                        return o && o.abort(e), i(0, e), this
                    }
                };
            if (v.promise(S), f.url = ((e || f.url || ke.href) + "").replace(Me, ke.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Pt) || [""], null == f.crossDomain) {
                c = et.createElement("a");
                try {
                    c.href = f.url, c.href = c.href, f.crossDomain = He.protocol + "//" + He.host != c.protocol + "//" + c.host
                } catch (t) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = ft.param(f.data, f.traditional)), X(Re, f, n, S), u) return S;
            p = ft.event && f.global, p && 0 == ft.active++ && ft.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Oe.test(f.type), r = f.url.replace(Ne, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Pe, "+")) : (h = f.url.slice(r.length), f.data && (r += (Te.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(De, "$1"), h = (Te.test(r) ? "&" : "?") + "_=" + Se++ + h), f.url = r + h), f.ifModified && (ft.lastModified[r] && S.setRequestHeader("If-Modified-Since", ft.lastModified[r]), ft.etag[r] && S.setRequestHeader("If-None-Match", ft.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && S.setRequestHeader("Content-Type", f.contentType), S.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + je + "; q=0.01" : "") : f.accepts["*"]);
            for (d in f.headers) S.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, S, f) || u)) return S.abort();
            if (k = "abort", y.add(f.complete), S.done(f.success), S.fail(f.error), o = X(Fe, f, n, S)) {
                if (S.readyState = 1, p && g.trigger("ajaxSend", [S, f]), u) return S;
                f.async && f.timeout > 0 && (l = t.setTimeout(function() {
                    S.abort("timeout")
                }, f.timeout));
                try {
                    u = !1, o.send(b, i)
                } catch (t) {
                    if (u) throw t;
                    i(-1, t)
                }
            } else i(-1, "No Transport");
            return S
        },
        getJSON: function(t, e, n) {
            return ft.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return ft.get(t, void 0, e, "script")
        }
    }), ft.each(["get", "post"], function(t, e) {
        ft[e] = function(t, n, i, o) {
            return ft.isFunction(n) && (o = o || i, i = n, n = void 0), ft.ajax(ft.extend({
                url: t,
                type: e,
                dataType: o,
                data: n,
                success: i
            }, ft.isPlainObject(t) && t))
        }
    }), ft._evalUrl = function(t) {
        return ft.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, ft.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (ft.isFunction(t) && (t = t.call(this[0])), e = ft(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function(t) {
            return ft.isFunction(t) ? this.each(function(e) {
                ft(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = ft(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = ft.isFunction(t);
            return this.each(function(n) {
                ft(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                ft(this).replaceWith(this.childNodes)
            }), this
        }
    }), ft.expr.pseudos.hidden = function(t) {
        return !ft.expr.pseudos.visible(t)
    }, ft.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, ft.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    };
    var $e = {
            0: 200,
            1223: 204
        },
        Be = ft.ajaxSettings.xhr();
    dt.cors = !!Be && "withCredentials" in Be, dt.ajax = Be = !!Be, ft.ajaxTransport(function(e) {
        var n, i;
        if (dt.cors || Be && !e.crossDomain) return {
            send: function(o, r) {
                var a, s = e.xhr();
                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (a in e.xhrFields) s[a] = e.xhrFields[a];
                e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (a in o) s.setRequestHeader(a, o[a]);
                n = function(t) {
                    return function() {
                        n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r($e[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                    4 === s.readyState && t.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    s.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (n) throw t
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), ft.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }), ft.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return ft.globalEval(t), t
            }
        }
    }), ft.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), ft.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function(i, o) {
                    e = ft("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                    }), et.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var qe = [],
        We = /(=)\?(?=&|$)|\?\?/;
    ft.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = qe.pop() || ft.expando + "_" + Se++;
            return this[t] = !0, t
        }
    }), ft.ajaxPrefilter("json jsonp", function(e, n, i) {
        var o, r, a, s = !1 !== e.jsonp && (We.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && We.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = ft.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(We, "$1" + o) : !1 !== e.jsonp && (e.url += (Te.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
            return a || ft.error(o + " was not called"), a[0]
        }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
            a = arguments
        }, i.always(function() {
            void 0 === r ? ft(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, qe.push(o)), a && ft.isFunction(r) && r(a[0]), a = r = void 0
        }), "script"
    }), dt.createHTMLDocument = function() {
        var t = et.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), ft.parseHTML = function(t, e, n) {
        if ("string" != typeof t) return [];
        "boolean" == typeof e && (n = e, e = !1);
        var i, o, r;
        return e || (dt.createHTMLDocument ? (e = et.implementation.createHTMLDocument(""), i = e.createElement("base"), i.href = et.location.href, e.head.appendChild(i)) : e = et), o = St.exec(t), r = !n && [], o ? [e.createElement(o[1])] : (o = w([t], e, r), r && r.length && ft(r).remove(), ft.merge([], o.childNodes))
    }, ft.fn.load = function(t, e, n) {
        var i, o, r, a = this,
            s = t.indexOf(" ");
        return s > -1 && (i = U(t.slice(s)), t = t.slice(0, s)), ft.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && ft.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments, a.html(i ? ft("<div>").append(ft.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            a.each(function() {
                n.apply(this, r || [t.responseText, e, t])
            })
        }), this
    }, ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        ft.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), ft.expr.pseudos.animated = function(t) {
        return ft.grep(ft.timers, function(e) {
            return t === e.elem
        }).length
    }, ft.offset = {
        setOffset: function(t, e, n) {
            var i, o, r, a, s, l, c, u = ft.css(t, "position"),
                p = ft(t),
                d = {};
            "static" === u && (t.style.position = "relative"), s = p.offset(), r = ft.css(t, "top"), l = ft.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (i = p.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), ft.isFunction(e) && (e = e.call(t, n, ft.extend({}, s))), null != e.top && (d.top = e.top - s.top + a), null != e.left && (d.left = e.left - s.left + o), "using" in e ? e.using.call(t, d) : p.css(d)
        }
    }, ft.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                ft.offset.setOffset(this, t, e)
            });
            var e, n, i, o, r = this[0];
            return r ? r.getClientRects().length ? (i = r.getBoundingClientRect(), i.width || i.height ? (o = r.ownerDocument, n = J(o), e = o.documentElement, {
                top: i.top + n.pageYOffset - e.clientTop,
                left: i.left + n.pageXOffset - e.clientLeft
            }) : i) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ft.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ft.nodeName(t[0], "html") || (i = t.offset()), i = {
                    top: i.top + ft.css(t[0], "borderTopWidth", !0),
                    left: i.left + ft.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: e.top - i.top - ft.css(n, "marginTop", !0),
                    left: e.left - i.left - ft.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === ft.css(t, "position");) t = t.offsetParent;
                return t || Xt
            })
        }
    }), ft.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = "pageYOffset" === e;
        ft.fn[t] = function(i) {
            return It(this, function(t, i, o) {
                var r = J(t);
                return void 0 === o ? r ? r[e] : t[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o)
            }, t, i, arguments.length)
        }
    }), ft.each(["top", "left"], function(t, e) {
        ft.cssHooks[e] = I(dt.pixelPosition, function(t, n) {
            if (n) return n = D(t, e), re.test(n) ? ft(t).position()[e] + "px" : n
        })
    }), ft.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        ft.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            ft.fn[i] = function(o, r) {
                var a = arguments.length && (n || "boolean" != typeof o),
                    s = n || (!0 === o || !0 === r ? "margin" : "border");
                return It(this, function(e, n, o) {
                    var r;
                    return ft.isWindow(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? ft.css(e, n, s) : ft.style(e, n, o, s)
                }, e, a ? o : void 0, a)
            }
        })
    }), ft.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }), ft.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ft
    });
    var ze = t.jQuery,
        Ue = t.$;
    return ft.noConflict = function(e) {
        return t.$ === ft && (t.$ = Ue), e && t.jQuery === ft && (t.jQuery = ze), ft
    }, e || (t.jQuery = t.$ = ft), ft
}),
function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Clipboard = t()
    }
}(function() {
    var t;
    return function t(e, n, i) {
        function o(a, s) {
            if (!n[a]) {
                if (!e[a]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(a, !0);
                    if (r) return r(a, !0);
                    var c = new Error("Cannot find module '" + a + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = n[a] = {
                    exports: {}
                };
                e[a][0].call(u.exports, function(t) {
                    var n = e[a][1][t];
                    return o(n || t)
                }, u, u.exports, t, e, n, i)
            }
            return n[a].exports
        }
        for (var r = "function" == typeof require && require, a = 0; a < i.length; a++) o(i[a]);
        return o
    }({
        1: [function(t, e, n) {
            function i(t, e) {
                for (; t && t !== document;) {
                    if (t.matches(e)) return t;
                    t = t.parentNode
                }
            }
            if (Element && !Element.prototype.matches) {
                var o = Element.prototype;
                o.matches = o.matchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector || o.webkitMatchesSelector
            }
            e.exports = i
        }, {}],
        2: [function(t, e, n) {
            function i(t, e, n, i, r) {
                var a = o.apply(this, arguments);
                return t.addEventListener(n, a, r), {
                    destroy: function() {
                        t.removeEventListener(n, a, r)
                    }
                }
            }

            function o(t, e, n, i) {
                return function(n) {
                    n.delegateTarget = r(n.target, e), n.delegateTarget && i.call(t, n)
                }
            }
            var r = t("./closest");
            e.exports = i
        }, {
            "./closest": 1
        }],
        3: [function(t, e, n) {
            n.node = function(t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
            }, n.nodeList = function(t) {
                var e = Object.prototype.toString.call(t);
                return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]))
            }, n.string = function(t) {
                return "string" == typeof t || t instanceof String
            }, n.fn = function(t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            }
        }, {}],
        4: [function(t, e, n) {
            function i(t, e, n) {
                if (!t && !e && !n) throw new Error("Missing required arguments");
                if (!s.string(e)) throw new TypeError("Second argument must be a String");
                if (!s.fn(n)) throw new TypeError("Third argument must be a Function");
                if (s.node(t)) return o(t, e, n);
                if (s.nodeList(t)) return r(t, e, n);
                if (s.string(t)) return a(t, e, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }

            function o(t, e, n) {
                return t.addEventListener(e, n), {
                    destroy: function() {
                        t.removeEventListener(e, n)
                    }
                }
            }

            function r(t, e, n) {
                return Array.prototype.forEach.call(t, function(t) {
                    t.addEventListener(e, n)
                }), {
                    destroy: function() {
                        Array.prototype.forEach.call(t, function(t) {
                            t.removeEventListener(e, n)
                        })
                    }
                }
            }

            function a(t, e, n) {
                return l(document.body, t, e, n)
            }
            var s = t("./is"),
                l = t("delegate");
            e.exports = i
        }, {
            "./is": 3,
            delegate: 2
        }],
        5: [function(t, e, n) {
            function i(t) {
                var e;
                if ("SELECT" === t.nodeName) t.focus(), e = t.value;
                else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) t.focus(), t.setSelectionRange(0, t.value.length), e = t.value;
                else {
                    t.hasAttribute("contenteditable") && t.focus();
                    var n = window.getSelection(),
                        i = document.createRange();
                    i.selectNodeContents(t), n.removeAllRanges(), n.addRange(i), e = n.toString()
                }
                return e
            }
            e.exports = i
        }, {}],
        6: [function(t, e, n) {
            function i() {}
            i.prototype = {
                on: function(t, e, n) {
                    var i = this.e || (this.e = {});
                    return (i[t] || (i[t] = [])).push({
                        fn: e,
                        ctx: n
                    }), this
                },
                once: function(t, e, n) {
                    function i() {
                        o.off(t, i), e.apply(n, arguments)
                    }
                    var o = this;
                    return i._ = e, this.on(t, i, n)
                },
                emit: function(t) {
                    var e = [].slice.call(arguments, 1),
                        n = ((this.e || (this.e = {}))[t] || []).slice(),
                        i = 0,
                        o = n.length;
                    for (i; i < o; i++) n[i].fn.apply(n[i].ctx, e);
                    return this
                },
                off: function(t, e) {
                    var n = this.e || (this.e = {}),
                        i = n[t],
                        o = [];
                    if (i && e)
                        for (var r = 0, a = i.length; r < a; r++) i[r].fn !== e && i[r].fn._ !== e && o.push(i[r]);
                    return o.length ? n[t] = o : delete n[t], this
                }
            }, e.exports = i
        }, {}],
        7: [function(e, n, i) {
            ! function(o, r) {
                if ("function" == typeof t && t.amd) t(["module", "select"], r);
                else if (void 0 !== i) r(n, e("select"));
                else {
                    var a = {
                        exports: {}
                    };
                    r(a, o.select), o.clipboardAction = a.exports
                }
            }(this, function(t, e) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                var i = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(e),
                    o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    r = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                            }
                        }
                        return function(e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e
                        }
                    }(),
                    a = function() {
                        function t(e) {
                            n(this, t), this.resolveOptions(e), this.initSelection()
                        }
                        return r(t, [{
                            key: "resolveOptions",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = t.action, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
                            }
                        }, {
                            key: "initSelection",
                            value: function() {
                                this.text ? this.selectFake() : this.target && this.selectTarget()
                            }
                        }, {
                            key: "selectFake",
                            value: function() {
                                var t = this,
                                    e = "rtl" == document.documentElement.getAttribute("dir");
                                this.removeFake(), this.fakeHandlerCallback = function() {
                                    return t.removeFake()
                                }, this.fakeHandler = document.body.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                                var n = window.pageYOffset || document.documentElement.scrollTop;
                                this.fakeElem.addEventListener("focus", window.scrollTo(0, n)), this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, document.body.appendChild(this.fakeElem), this.selectedText = (0, i.default)(this.fakeElem), this.copyText()
                            }
                        }, {
                            key: "removeFake",
                            value: function() {
                                this.fakeHandler && (document.body.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                            }
                        }, {
                            key: "selectTarget",
                            value: function() {
                                this.selectedText = (0, i.default)(this.target), this.copyText()
                            }
                        }, {
                            key: "copyText",
                            value: function() {
                                var t = void 0;
                                try {
                                    t = document.execCommand(this.action)
                                } catch (e) {
                                    t = !1
                                }
                                this.handleResult(t)
                            }
                        }, {
                            key: "handleResult",
                            value: function(t) {
                                this.emitter.emit(t ? "success" : "error", {
                                    action: this.action,
                                    text: this.selectedText,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                })
                            }
                        }, {
                            key: "clearSelection",
                            value: function() {
                                this.target && this.target.blur(), window.getSelection().removeAllRanges()
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.removeFake()
                            }
                        }, {
                            key: "action",
                            set: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                                if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                            },
                            get: function() {
                                return this._action
                            }
                        }, {
                            key: "target",
                            set: function(t) {
                                if (void 0 !== t) {
                                    if (!t || "object" !== (void 0 === t ? "undefined" : o(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                    if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    this._target = t
                                }
                            },
                            get: function() {
                                return this._target
                            }
                        }]), t
                    }();
                t.exports = a
            })
        }, {
            select: 5
        }],
        8: [function(e, n, i) {
            ! function(o, r) {
                if ("function" == typeof t && t.amd) t(["module", "./clipboard-action", "tiny-emitter", "good-listener"], r);
                else if (void 0 !== i) r(n, e("./clipboard-action"), e("tiny-emitter"), e("good-listener"));
                else {
                    var a = {
                        exports: {}
                    };
                    r(a, o.clipboardAction, o.tinyEmitter, o.goodListener), o.clipboard = a.exports
                }
            }(this, function(t, e, n, i) {
                "use strict";

                function o(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function r(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function s(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function l(t, e) {
                    var n = "data-clipboard-" + t;
                    if (e.hasAttribute(n)) return e.getAttribute(n)
                }
                var c = o(e),
                    u = o(n),
                    p = o(i),
                    d = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                            }
                        }
                        return function(e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e
                        }
                    }(),
                    h = function(t) {
                        function e(t, n) {
                            r(this, e);
                            var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                            return i.resolveOptions(n), i.listenClick(t), i
                        }
                        return s(e, t), d(e, [{
                            key: "resolveOptions",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText
                            }
                        }, {
                            key: "listenClick",
                            value: function(t) {
                                var e = this;
                                this.listener = (0, p.default)(t, "click", function(t) {
                                    return e.onClick(t)
                                })
                            }
                        }, {
                            key: "onClick",
                            value: function(t) {
                                var e = t.delegateTarget || t.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new c.default({
                                    action: this.action(e),
                                    target: this.target(e),
                                    text: this.text(e),
                                    trigger: e,
                                    emitter: this
                                })
                            }
                        }, {
                            key: "defaultAction",
                            value: function(t) {
                                return l("action", t)
                            }
                        }, {
                            key: "defaultTarget",
                            value: function(t) {
                                var e = l("target", t);
                                if (e) return document.querySelector(e)
                            }
                        }, {
                            key: "defaultText",
                            value: function(t) {
                                return l("text", t)
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                            }
                        }]), e
                    }(u.default);
                t.exports = h
            })
        }, {
            "./clipboard-action": 7,
            "good-listener": 4,
            "tiny-emitter": 6
        }]
    }, {}, [8])(8)
}),
function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Handlebars = e() : t.Handlebars = e()
}(this, function() {
    return function(t) {
        function e(i) {
            if (n[i]) return n[i].exports;
            var o = n[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return t[i].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0)
    }([function(t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o() {
            var t = v();
            return t.compile = function(e, n) {
                return u.compile(e, n, t)
            }, t.precompile = function(e, n) {
                return u.precompile(e, n, t)
            }, t.AST = l.default, t.Compiler = u.Compiler, t.JavaScriptCompiler = d.default, t.Parser = c.parser, t.parse = c.parse, t
        }
        e.__esModule = !0;
        var r = n(1),
            a = i(r),
            s = n(19),
            l = i(s),
            c = n(20),
            u = n(25),
            p = n(26),
            d = i(p),
            h = n(23),
            f = i(h),
            m = n(18),
            g = i(m),
            v = a.default.create,
            y = o();
        y.create = o, g.default(y), y.Visitor = f.default, y.default = y, e.default = y, t.exports = e.default
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t, e
        }

        function r() {
            var t = new s.HandlebarsEnvironment;
            return h.extend(t, s), t.SafeString = c.default, t.Exception = p.default, t.Utils = h, t.escapeExpression = h.escapeExpression, t.VM = m, t.template = function(e) {
                return m.template(e, t)
            }, t
        }
        e.__esModule = !0;
        var a = n(2),
            s = o(a),
            l = n(16),
            c = i(l),
            u = n(4),
            p = i(u),
            d = n(3),
            h = o(d),
            f = n(17),
            m = o(f),
            g = n(18),
            v = i(g),
            y = r();
        y.create = r, v.default(y), y.default = y, e.default = y, t.exports = e.default
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e, n) {
            this.helpers = t || {}, this.partials = e || {}, this.decorators = n || {}, l.registerDefaultHelpers(this), c.registerDefaultDecorators(this)
        }
        e.__esModule = !0, e.HandlebarsEnvironment = o;
        var r = n(3),
            a = n(4),
            s = i(a),
            l = n(5),
            c = n(13),
            u = n(15),
            p = i(u);
        e.VERSION = "4.0.10";
        e.COMPILER_REVISION = 7;
        var d = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: "== 1.x.x",
            5: "== 2.0.0-alpha.x",
            6: ">= 2.0.0-beta.1",
            7: ">= 4.0.0"
        };
        e.REVISION_CHANGES = d;
        var h = "[object Object]";
        o.prototype = {
            constructor: o,
            logger: p.default,
            log: p.default.log,
            registerHelper: function(t, e) {
                if (r.toString.call(t) === h) {
                    if (e) throw new s.default("Arg not supported with multiple helpers");
                    r.extend(this.helpers, t)
                } else this.helpers[t] = e
            },
            unregisterHelper: function(t) {
                delete this.helpers[t]
            },
            registerPartial: function(t, e) {
                if (r.toString.call(t) === h) r.extend(this.partials, t);
                else {
                    if (void 0 === e) throw new s.default('Attempting to register a partial called "' + t + '" as undefined');
                    this.partials[t] = e
                }
            },
            unregisterPartial: function(t) {
                delete this.partials[t]
            },
            registerDecorator: function(t, e) {
                if (r.toString.call(t) === h) {
                    if (e) throw new s.default("Arg not supported with multiple decorators");
                    r.extend(this.decorators, t)
                } else this.decorators[t] = e
            },
            unregisterDecorator: function(t) {
                delete this.decorators[t]
            }
        };
        var f = p.default.log;
        e.log = f, e.createFrame = r.createFrame, e.logger = p.default
    }, function(t, e) {
        "use strict";

        function n(t) {
            return l[t]
        }

        function i(t) {
            for (var e = 1; e < arguments.length; e++)
                for (var n in arguments[e]) Object.prototype.hasOwnProperty.call(arguments[e], n) && (t[n] = arguments[e][n]);
            return t
        }

        function o(t, e) {
            for (var n = 0, i = t.length; n < i; n++)
                if (t[n] === e) return n;
            return -1
        }

        function r(t) {
            if ("string" != typeof t) {
                if (t && t.toHTML) return t.toHTML();
                if (null == t) return "";
                if (!t) return t + "";
                t = "" + t
            }
            return u.test(t) ? t.replace(c, n) : t
        }

        function a(t) {
            return !t && 0 !== t || !(!h(t) || 0 !== t.length)
        }

        function s(t) {
            var e = i({}, t);
            return e._parent = t, e
        }
        e.__esModule = !0, e.extend = i, e.indexOf = o, e.escapeExpression = r, e.isEmpty = a, e.createFrame = s;
        var l = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;",
                "=": "&#x3D;"
            },
            c = /[&<>"'`=]/g,
            u = /[&<>"'`=]/,
            p = Object.prototype.toString;
        e.toString = p;
        var d = function(t) {
            return "function" == typeof t
        };
        d(/x/) && (e.isFunction = d = function(t) {
            return "function" == typeof t && "[object Function]" === p.call(t)
        }), e.isFunction = d;
        var h = Array.isArray || function(t) {
            return !(!t || "object" != typeof t) && "[object Array]" === p.call(t)
        };
        e.isArray = h
    }, function(t, e) {
        "use strict";

        function n(t, e) {
            var o = e && e.loc,
                r = void 0,
                a = void 0;
            o && (r = o.start.line, a = o.start.column, t += " - " + r + ":" + a);
            for (var s = Error.prototype.constructor.call(this, t), l = 0; l < i.length; l++) this[i[l]] = s[i[l]];
            Error.captureStackTrace && Error.captureStackTrace(this, n);
            try {
                o && (this.lineNumber = r, Object.defineProperty ? Object.defineProperty(this, "column", {
                    value: a,
                    enumerable: !0
                }) : this.column = a)
            } catch (t) {}
        }
        e.__esModule = !0;
        var i = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        n.prototype = new Error, e.default = n, t.exports = e.default
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t) {
            a.default(t), l.default(t), u.default(t), d.default(t), f.default(t), g.default(t), y.default(t)
        }
        e.__esModule = !0, e.registerDefaultHelpers = o;
        var r = n(6),
            a = i(r),
            s = n(7),
            l = i(s),
            c = n(8),
            u = i(c),
            p = n(9),
            d = i(p),
            h = n(10),
            f = i(h),
            m = n(11),
            g = i(m),
            v = n(12),
            y = i(v)
    }, function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(3);
        e.default = function(t) {
            t.registerHelper("blockHelperMissing", function(e, n) {
                var o = n.inverse,
                    r = n.fn;
                return !0 === e ? r(this) : !1 === e || null == e ? o(this) : i.isArray(e) ? e.length > 0 ? t.helpers.each(e, n) : o(this) : r(e, n)
            })
        }, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(3),
            o = n(4),
            r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(o);
        e.default = function(t) {
            t.registerHelper("each", function(t, e) {
                function n(e, n, i) {
                    c && (c.key = e, c.index = n, c.first = 0 === n, c.last = !!i), l += o(t[e], {
                        data: c,
                        blockParams: [t[e], e]
                    })
                }
                if (!e) throw new r.default("Must pass iterator to #each");
                var o = e.fn,
                    a = e.inverse,
                    s = 0,
                    l = "",
                    c = void 0;
                if (i.isFunction(t) && (t = t.call(this)), e.data && (c = i.createFrame(e.data)), t && "object" == typeof t)
                    if (i.isArray(t))
                        for (var u = t.length; s < u; s++) s in t && n(s, s, s === t.length - 1);
                    else {
                        var p = void 0;
                        for (var d in t) t.hasOwnProperty(d) && (void 0 !== p && n(p, s - 1), p = d, s++);
                        void 0 !== p && n(p, s - 1, !0)
                    } return 0 === s && (l = a(this)), l
            })
        }, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(4),
            o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i);
        e.default = function(t) {
            t.registerHelper("helperMissing", function() {
                if (1 !== arguments.length) throw new o.default('Missing helper: "' + arguments[arguments.length - 1].name + '"')
            })
        }, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(3);
        e.default = function(t) {
            t.registerHelper("if", function(t, e) {
                return i.isFunction(t) && (t = t.call(this)), !e.hash.includeZero && !t || i.isEmpty(t) ? e.inverse(this) : e.fn(this)
            }), t.registerHelper("unless", function(e, n) {
                return t.helpers.if.call(this, e, {
                    fn: n.inverse,
                    inverse: n.fn,
                    hash: n.hash
                })
            })
        }, t.exports = e.default
    }, function(t, e) {
        "use strict";
        e.__esModule = !0, e.default = function(t) {
            t.registerHelper("log", function() {
                for (var e = [void 0], n = arguments[arguments.length - 1], i = 0; i < arguments.length - 1; i++) e.push(arguments[i]);
                var o = 1;
                null != n.hash.level ? o = n.hash.level : n.data && null != n.data.level && (o = n.data.level), e[0] = o, t.log.apply(t, e)
            })
        }, t.exports = e.default
    }, function(t, e) {
        "use strict";
        e.__esModule = !0, e.default = function(t) {
            t.registerHelper("lookup", function(t, e) {
                return t && t[e]
            })
        }, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(3);
        e.default = function(t) {
            t.registerHelper("with", function(t, e) {
                i.isFunction(t) && (t = t.call(this));
                var n = e.fn;
                return i.isEmpty(t) ? e.inverse(this) : n(t, {
                    data: e.data,
                    blockParams: [t]
                })
            })
        }, t.exports = e.default
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            r.default(t)
        }
        e.__esModule = !0, e.registerDefaultDecorators = i;
        var o = n(14),
            r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(o)
    }, function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(3);
        e.default = function(t) {
            t.registerDecorator("inline", function(t, e, n, o) {
                var r = t;
                return e.partials || (e.partials = {}, r = function(o, r) {
                    var a = n.partials;
                    n.partials = i.extend({}, a, e.partials);
                    var s = t(o, r);
                    return n.partials = a, s
                }), e.partials[o.args[0]] = o.fn, r
            })
        }, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(3),
            o = {
                methodMap: ["debug", "info", "warn", "error"],
                level: "info",
                lookupLevel: function(t) {
                    if ("string" == typeof t) {
                        var e = i.indexOf(o.methodMap, t.toLowerCase());
                        t = e >= 0 ? e : parseInt(t, 10)
                    }
                    return t
                },
                log: function(t) {
                    if (t = o.lookupLevel(t), "undefined" != typeof console && o.lookupLevel(o.level) <= t) {
                        var e = o.methodMap[t];
                        console[e] || (e = "log");
                        for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                        console[e].apply(console, i)
                    }
                }
            };
        e.default = o, t.exports = e.default
    }, function(t, e) {
        "use strict";

        function n(t) {
            this.string = t
        }
        e.__esModule = !0, n.prototype.toString = n.prototype.toHTML = function() {
            return "" + this.string
        }, e.default = n, t.exports = e.default
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            var e = t && t[0] || 1,
                n = m.COMPILER_REVISION;
            if (e !== n) {
                if (e < n) {
                    var i = m.REVISION_CHANGES[n],
                        o = m.REVISION_CHANGES[e];
                    throw new f.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + i + ") or downgrade your runtime to an older version (" + o + ").")
                }
                throw new f.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + t[1] + ").")
            }
        }

        function o(t, e) {
            function n(n, i, o) {
                o.hash && (i = d.extend({}, i, o.hash)), n = e.VM.resolvePartial.call(this, n, i, o);
                var r = e.VM.invokePartial.call(this, n, i, o);
                if (null == r && e.compile && (o.partials[o.name] = e.compile(n, t.compilerOptions, e), r = o.partials[o.name](i, o)), null != r) {
                    if (o.indent) {
                        for (var a = r.split("\n"), s = 0, l = a.length; s < l && (a[s] || s + 1 !== l); s++) a[s] = o.indent + a[s];
                        r = a.join("\n")
                    }
                    return r
                }
                throw new f.default("The partial " + o.name + " could not be compiled when running in runtime-only mode")
            }

            function i(e) {
                function n(e) {
                    return "" + t.main(a, e, a.helpers, a.partials, r, l, s)
                }
                var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    r = i.data;
                o(i), !i.partial && t.useData && (r = c(e, r));
                var s = void 0,
                    l = t.useBlockParams ? [] : void 0;
                return t.useDepths && (s = i.depths ? e != i.depths[0] ? [e].concat(i.depths) : i.depths : [e]), (n = u(t.main, n, a, i.depths || [], r, l))(e, i)
            }

            function o(n) {
                n.partial ? (a.helpers = n.helpers, a.partials = n.partials, a.decorators = n.decorators) : (a.helpers = a.merge(n.helpers, e.helpers), t.usePartial && (a.partials = a.merge(n.partials, e.partials)), (t.usePartial || t.useDecorators) && (a.decorators = a.merge(n.decorators, e.decorators)))
            }
            if (!e) throw new f.default("No environment passed to template");
            if (!t || !t.main) throw new f.default("Unknown template object: " + typeof t);
            t.main.decorator = t.main_d, e.VM.checkRevision(t.compiler);
            var a = {
                strict: function(t, e) {
                    if (!(e in t)) throw new f.default('"' + e + '" not defined in ' + t);
                    return t[e]
                },
                lookup: function(t, e) {
                    for (var n = t.length, i = 0; i < n; i++)
                        if (t[i] && null != t[i][e]) return t[i][e]
                },
                lambda: function(t, e) {
                    return "function" == typeof t ? t.call(e) : t
                },
                escapeExpression: d.escapeExpression,
                invokePartial: n,
                fn: function(e) {
                    var n = t[e];
                    return n.decorator = t[e + "_d"], n
                },
                programs: [],
                program: function(t, e, n, i, o) {
                    var a = this.programs[t],
                        s = this.fn(t);
                    return e || o || i || n ? a = r(this, t, s, e, n, i, o) : a || (a = this.programs[t] = r(this, t, s)), a
                },
                data: function(t, e) {
                    for (; t && e--;) t = t._parent;
                    return t
                },
                merge: function(t, e) {
                    var n = t || e;
                    return t && e && t !== e && (n = d.extend({}, e, t)), n
                },
                nullContext: Object.seal({}),
                noop: e.VM.noop,
                compilerInfo: t.compiler
            };
            return i.isTop = !0, i
        }

        function r(t, e, n, i, o, r, a) {
            function s(e) {
                var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    s = a;
                return !a || e == a[0] || e === t.nullContext && null === a[0] || (s = [e].concat(a)), n(t, e, t.helpers, t.partials, o.data || i, r && [o.blockParams].concat(r), s)
            }
            return s = u(n, s, t, a, i, r), s.program = e, s.depth = a ? a.length : 0, s.blockParams = o || 0, s
        }

        function a(t, e, n) {
            return t ? t.call || n.name || (n.name = t, t = n.partials[t]) : t = "@partial-block" === n.name ? n.data["partial-block"] : n.partials[n.name], t
        }

        function s(t, e, n) {
            var i = n.data && n.data["partial-block"];
            n.partial = !0;
            var o = void 0;
            if (n.fn && n.fn !== l && function() {
                    n.data = m.createFrame(n.data);
                    var t = n.fn;
                    o = n.data["partial-block"] = function(e) {
                        var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                        return n.data = m.createFrame(n.data), n.data["partial-block"] = i, t(e, n)
                    }, t.partials && (n.partials = d.extend({}, n.partials, t.partials))
                }(), void 0 === t && o && (t = o), void 0 === t) throw new f.default("The partial " + n.name + " could not be found");
            if (t instanceof Function) return t(e, n)
        }

        function l() {
            return ""
        }

        function c(t, e) {
            return e && "root" in e || (e = e ? m.createFrame(e) : {}, e.root = t), e
        }

        function u(t, e, n, i, o, r) {
            if (t.decorator) {
                var a = {};
                e = t.decorator(e, a, n, i && i[0], o, r, i), d.extend(e, a)
            }
            return e
        }
        e.__esModule = !0, e.checkRevision = i, e.template = o, e.wrapProgram = r, e.resolvePartial = a, e.invokePartial = s, e.noop = l;
        var p = n(3),
            d = function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t, e
            }(p),
            h = n(4),
            f = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(h),
            m = n(2)
    }, function(t, e) {
        (function(n) {
            "use strict";
            e.__esModule = !0, e.default = function(t) {
                var e = void 0 !== n ? n : window,
                    i = e.Handlebars;
                t.noConflict = function() {
                    return e.Handlebars === t && (e.Handlebars = i), t
                }
            }, t.exports = e.default
        }).call(e, function() {
            return this
        }())
    }, function(t, e) {
        "use strict";
        e.__esModule = !0;
        var n = {
            helpers: {
                helperExpression: function(t) {
                    return "SubExpression" === t.type || ("MustacheStatement" === t.type || "BlockStatement" === t.type) && !!(t.params && t.params.length || t.hash)
                },
                scopedId: function(t) {
                    return /^\.|this\b/.test(t.original)
                },
                simpleId: function(t) {
                    return 1 === t.parts.length && !n.helpers.scopedId(t) && !t.depth
                }
            }
        };
        e.default = n, t.exports = e.default
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            return "Program" === t.type ? t : (a.default.yy = d, d.locInfo = function(t) {
                return new d.SourceLocation(e && e.srcName, t)
            }, new l.default(e).accept(a.default.parse(t)))
        }
        e.__esModule = !0, e.parse = o;
        var r = n(21),
            a = i(r),
            s = n(22),
            l = i(s),
            c = n(24),
            u = function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t, e
            }(c),
            p = n(3);
        e.parser = a.default;
        var d = {};
        p.extend(d, u)
    }, function(t, e) {
        "use strict";
        e.__esModule = !0;
        var n = function() {
            function t() {
                this.yy = {}
            }
            var e = function(t, e, n, i) {
                    for (n = n || {}, i = t.length; i--; n[t[i]] = e);
                    return n
                },
                n = [2, 46],
                i = [1, 20],
                o = [5, 14, 15, 19, 29, 34, 39, 44, 47, 48, 51, 55, 60],
                r = [1, 35],
                a = [1, 28],
                s = [1, 29],
                l = [1, 30],
                c = [1, 31],
                u = [1, 32],
                p = [1, 34],
                d = [14, 15, 19, 29, 34, 39, 44, 47, 48, 51, 55, 60],
                h = [14, 15, 19, 29, 34, 44, 47, 48, 51, 55, 60],
                f = [1, 44],
                m = [14, 15, 19, 29, 34, 47, 48, 51, 55, 60],
                g = [33, 65, 72, 80, 81, 82, 83, 84, 85],
                v = [23, 33, 54, 65, 68, 72, 75, 80, 81, 82, 83, 84, 85],
                y = [1, 51],
                w = [23, 33, 54, 65, 68, 72, 75, 80, 81, 82, 83, 84, 85, 87],
                b = [2, 45],
                x = [54, 65, 72, 80, 81, 82, 83, 84, 85],
                k = [1, 58],
                S = [1, 59],
                T = [15, 18],
                _ = [1, 67],
                C = [33, 65, 72, 75, 80, 81, 82, 83, 84, 85],
                E = [23, 65, 72, 80, 81, 82, 83, 84, 85],
                A = [1, 79],
                P = [65, 68, 72, 80, 81, 82, 83, 84, 85],
                N = [33, 75],
                D = [23, 33, 54, 68, 72, 75],
                I = [1, 109],
                L = [1, 121],
                O = [72, 77],
                M = {
                    trace: function() {},
                    yy: {},
                    symbols_: {
                        error: 2,
                        root: 3,
                        program: 4,
                        EOF: 5,
                        program_repetition0: 6,
                        statement: 7,
                        mustache: 8,
                        block: 9,
                        rawBlock: 10,
                        partial: 11,
                        partialBlock: 12,
                        content: 13,
                        COMMENT: 14,
                        CONTENT: 15,
                        openRawBlock: 16,
                        rawBlock_repetition_plus0: 17,
                        END_RAW_BLOCK: 18,
                        OPEN_RAW_BLOCK: 19,
                        helperName: 20,
                        openRawBlock_repetition0: 21,
                        openRawBlock_option0: 22,
                        CLOSE_RAW_BLOCK: 23,
                        openBlock: 24,
                        block_option0: 25,
                        closeBlock: 26,
                        openInverse: 27,
                        block_option1: 28,
                        OPEN_BLOCK: 29,
                        openBlock_repetition0: 30,
                        openBlock_option0: 31,
                        openBlock_option1: 32,
                        CLOSE: 33,
                        OPEN_INVERSE: 34,
                        openInverse_repetition0: 35,
                        openInverse_option0: 36,
                        openInverse_option1: 37,
                        openInverseChain: 38,
                        OPEN_INVERSE_CHAIN: 39,
                        openInverseChain_repetition0: 40,
                        openInverseChain_option0: 41,
                        openInverseChain_option1: 42,
                        inverseAndProgram: 43,
                        INVERSE: 44,
                        inverseChain: 45,
                        inverseChain_option0: 46,
                        OPEN_ENDBLOCK: 47,
                        OPEN: 48,
                        mustache_repetition0: 49,
                        mustache_option0: 50,
                        OPEN_UNESCAPED: 51,
                        mustache_repetition1: 52,
                        mustache_option1: 53,
                        CLOSE_UNESCAPED: 54,
                        OPEN_PARTIAL: 55,
                        partialName: 56,
                        partial_repetition0: 57,
                        partial_option0: 58,
                        openPartialBlock: 59,
                        OPEN_PARTIAL_BLOCK: 60,
                        openPartialBlock_repetition0: 61,
                        openPartialBlock_option0: 62,
                        param: 63,
                        sexpr: 64,
                        OPEN_SEXPR: 65,
                        sexpr_repetition0: 66,
                        sexpr_option0: 67,
                        CLOSE_SEXPR: 68,
                        hash: 69,
                        hash_repetition_plus0: 70,
                        hashSegment: 71,
                        ID: 72,
                        EQUALS: 73,
                        blockParams: 74,
                        OPEN_BLOCK_PARAMS: 75,
                        blockParams_repetition_plus0: 76,
                        CLOSE_BLOCK_PARAMS: 77,
                        path: 78,
                        dataName: 79,
                        STRING: 80,
                        NUMBER: 81,
                        BOOLEAN: 82,
                        UNDEFINED: 83,
                        NULL: 84,
                        DATA: 85,
                        pathSegments: 86,
                        SEP: 87,
                        $accept: 0,
                        $end: 1
                    },
                    terminals_: {
                        2: "error",
                        5: "EOF",
                        14: "COMMENT",
                        15: "CONTENT",
                        18: "END_RAW_BLOCK",
                        19: "OPEN_RAW_BLOCK",
                        23: "CLOSE_RAW_BLOCK",
                        29: "OPEN_BLOCK",
                        33: "CLOSE",
                        34: "OPEN_INVERSE",
                        39: "OPEN_INVERSE_CHAIN",
                        44: "INVERSE",
                        47: "OPEN_ENDBLOCK",
                        48: "OPEN",
                        51: "OPEN_UNESCAPED",
                        54: "CLOSE_UNESCAPED",
                        55: "OPEN_PARTIAL",
                        60: "OPEN_PARTIAL_BLOCK",
                        65: "OPEN_SEXPR",
                        68: "CLOSE_SEXPR",
                        72: "ID",
                        73: "EQUALS",
                        75: "OPEN_BLOCK_PARAMS",
                        77: "CLOSE_BLOCK_PARAMS",
                        80: "STRING",
                        81: "NUMBER",
                        82: "BOOLEAN",
                        83: "UNDEFINED",
                        84: "NULL",
                        85: "DATA",
                        87: "SEP"
                    },
                    productions_: [0, [3, 2],
                        [4, 1],
                        [7, 1],
                        [7, 1],
                        [7, 1],
                        [7, 1],
                        [7, 1],
                        [7, 1],
                        [7, 1],
                        [13, 1],
                        [10, 3],
                        [16, 5],
                        [9, 4],
                        [9, 4],
                        [24, 6],
                        [27, 6],
                        [38, 6],
                        [43, 2],
                        [45, 3],
                        [45, 1],
                        [26, 3],
                        [8, 5],
                        [8, 5],
                        [11, 5],
                        [12, 3],
                        [59, 5],
                        [63, 1],
                        [63, 1],
                        [64, 5],
                        [69, 1],
                        [71, 3],
                        [74, 3],
                        [20, 1],
                        [20, 1],
                        [20, 1],
                        [20, 1],
                        [20, 1],
                        [20, 1],
                        [20, 1],
                        [56, 1],
                        [56, 1],
                        [79, 2],
                        [78, 1],
                        [86, 3],
                        [86, 1],
                        [6, 0],
                        [6, 2],
                        [17, 1],
                        [17, 2],
                        [21, 0],
                        [21, 2],
                        [22, 0],
                        [22, 1],
                        [25, 0],
                        [25, 1],
                        [28, 0],
                        [28, 1],
                        [30, 0],
                        [30, 2],
                        [31, 0],
                        [31, 1],
                        [32, 0],
                        [32, 1],
                        [35, 0],
                        [35, 2],
                        [36, 0],
                        [36, 1],
                        [37, 0],
                        [37, 1],
                        [40, 0],
                        [40, 2],
                        [41, 0],
                        [41, 1],
                        [42, 0],
                        [42, 1],
                        [46, 0],
                        [46, 1],
                        [49, 0],
                        [49, 2],
                        [50, 0],
                        [50, 1],
                        [52, 0],
                        [52, 2],
                        [53, 0],
                        [53, 1],
                        [57, 0],
                        [57, 2],
                        [58, 0],
                        [58, 1],
                        [61, 0],
                        [61, 2],
                        [62, 0],
                        [62, 1],
                        [66, 0],
                        [66, 2],
                        [67, 0],
                        [67, 1],
                        [70, 1],
                        [70, 2],
                        [76, 1],
                        [76, 2]
                    ],
                    performAction: function(t, e, n, i, o, r, a) {
                        var s = r.length - 1;
                        switch (o) {
                            case 1:
                                return r[s - 1];
                            case 2:
                                this.$ = i.prepareProgram(r[s]);
                                break;
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 20:
                            case 27:
                            case 28:
                            case 33:
                            case 34:
                            case 40:
                            case 41:
                                this.$ = r[s];
                                break;
                            case 9:
                                this.$ = {
                                    type: "CommentStatement",
                                    value: i.stripComment(r[s]),
                                    strip: i.stripFlags(r[s], r[s]),
                                    loc: i.locInfo(this._$)
                                };
                                break;
                            case 10:
                                this.$ = {
                                    type: "ContentStatement",
                                    original: r[s],
                                    value: r[s],
                                    loc: i.locInfo(this._$)
                                };
                                break;
                            case 11:
                                this.$ = i.prepareRawBlock(r[s - 2], r[s - 1], r[s], this._$);
                                break;
                            case 12:
                                this.$ = {
                                    path: r[s - 3],
                                    params: r[s - 2],
                                    hash: r[s - 1]
                                };
                                break;
                            case 13:
                                this.$ = i.prepareBlock(r[s - 3], r[s - 2], r[s - 1], r[s], !1, this._$);
                                break;
                            case 14:
                                this.$ = i.prepareBlock(r[s - 3], r[s - 2], r[s - 1], r[s], !0, this._$);
                                break;
                            case 15:
                                this.$ = {
                                    open: r[s - 5],
                                    path: r[s - 4],
                                    params: r[s - 3],
                                    hash: r[s - 2],
                                    blockParams: r[s - 1],
                                    strip: i.stripFlags(r[s - 5], r[s])
                                };
                                break;
                            case 16:
                            case 17:
                                this.$ = {
                                    path: r[s - 4],
                                    params: r[s - 3],
                                    hash: r[s - 2],
                                    blockParams: r[s - 1],
                                    strip: i.stripFlags(r[s - 5], r[s])
                                };
                                break;
                            case 18:
                                this.$ = {
                                    strip: i.stripFlags(r[s - 1], r[s - 1]),
                                    program: r[s]
                                };
                                break;
                            case 19:
                                var l = i.prepareBlock(r[s - 2], r[s - 1], r[s], r[s], !1, this._$),
                                    c = i.prepareProgram([l], r[s - 1].loc);
                                c.chained = !0, this.$ = {
                                    strip: r[s - 2].strip,
                                    program: c,
                                    chain: !0
                                };
                                break;
                            case 21:
                                this.$ = {
                                    path: r[s - 1],
                                    strip: i.stripFlags(r[s - 2], r[s])
                                };
                                break;
                            case 22:
                            case 23:
                                this.$ = i.prepareMustache(r[s - 3], r[s - 2], r[s - 1], r[s - 4], i.stripFlags(r[s - 4], r[s]), this._$);
                                break;
                            case 24:
                                this.$ = {
                                    type: "PartialStatement",
                                    name: r[s - 3],
                                    params: r[s - 2],
                                    hash: r[s - 1],
                                    indent: "",
                                    strip: i.stripFlags(r[s - 4], r[s]),
                                    loc: i.locInfo(this._$)
                                };
                                break;
                            case 25:
                                this.$ = i.preparePartialBlock(r[s - 2], r[s - 1], r[s], this._$);
                                break;
                            case 26:
                                this.$ = {
                                    path: r[s - 3],
                                    params: r[s - 2],
                                    hash: r[s - 1],
                                    strip: i.stripFlags(r[s - 4], r[s])
                                };
                                break;
                            case 29:
                                this.$ = {
                                    type: "SubExpression",
                                    path: r[s - 3],
                                    params: r[s - 2],
                                    hash: r[s - 1],
                                    loc: i.locInfo(this._$)
                                };
                                break;
                            case 30:
                                this.$ = {
                                    type: "Hash",
                                    pairs: r[s],
                                    loc: i.locInfo(this._$)
                                };
                                break;
                            case 31:
                                this.$ = {
                                    type: "HashPair",
                                    key: i.id(r[s - 2]),
                                    value: r[s],
                                    loc: i.locInfo(this._$)
                                };
                                break;
                            case 32:
                                this.$ = i.id(r[s - 1]);
                                break;
                            case 35:
                                this.$ = {
                                    type: "StringLiteral",
                                    value: r[s],
                                    original: r[s],
                                    loc: i.locInfo(this._$)
                                };
                                break;
                            case 36:
                                this.$ = {
                                    type: "NumberLiteral",
                                    value: Number(r[s]),
                                    original: Number(r[s]),
                                    loc: i.locInfo(this._$)
                                };
                                break;
                            case 37:
                                this.$ = {
                                    type: "BooleanLiteral",
                                    value: "true" === r[s],
                                    original: "true" === r[s],
                                    loc: i.locInfo(this._$)
                                };
                                break;
                            case 38:
                                this.$ = {
                                    type: "UndefinedLiteral",
                                    original: void 0,
                                    value: void 0,
                                    loc: i.locInfo(this._$)
                                };
                                break;
                            case 39:
                                this.$ = {
                                    type: "NullLiteral",
                                    original: null,
                                    value: null,
                                    loc: i.locInfo(this._$)
                                };
                                break;
                            case 42:
                                this.$ = i.preparePath(!0, r[s], this._$);
                                break;
                            case 43:
                                this.$ = i.preparePath(!1, r[s], this._$);
                                break;
                            case 44:
                                r[s - 2].push({
                                    part: i.id(r[s]),
                                    original: r[s],
                                    separator: r[s - 1]
                                }), this.$ = r[s - 2];
                                break;
                            case 45:
                                this.$ = [{
                                    part: i.id(r[s]),
                                    original: r[s]
                                }];
                                break;
                            case 46:
                            case 50:
                            case 58:
                            case 64:
                            case 70:
                            case 78:
                            case 82:
                            case 86:
                            case 90:
                            case 94:
                                this.$ = [];
                                break;
                            case 47:
                            case 49:
                            case 51:
                            case 59:
                            case 65:
                            case 71:
                            case 79:
                            case 83:
                            case 87:
                            case 91:
                            case 95:
                            case 99:
                            case 101:
                                r[s - 1].push(r[s]);
                                break;
                            case 48:
                            case 98:
                            case 100:
                                this.$ = [r[s]]
                        }
                    },
                    table: [e([5, 14, 15, 19, 29, 34, 48, 51, 55, 60], n, {
                        3: 1,
                        4: 2,
                        6: 3
                    }), {
                        1: [3]
                    }, {
                        5: [1, 4]
                    }, e([5, 39, 44, 47], [2, 2], {
                        7: 5,
                        8: 6,
                        9: 7,
                        10: 8,
                        11: 9,
                        12: 10,
                        13: 11,
                        24: 15,
                        27: 16,
                        16: 17,
                        59: 19,
                        14: [1, 12],
                        15: i,
                        19: [1, 23],
                        29: [1, 21],
                        34: [1, 22],
                        48: [1, 13],
                        51: [1, 14],
                        55: [1, 18],
                        60: [1, 24]
                    }), {
                        1: [2, 1]
                    }, e(o, [2, 47]), e(o, [2, 3]), e(o, [2, 4]), e(o, [2, 5]), e(o, [2, 6]), e(o, [2, 7]), e(o, [2, 8]), e(o, [2, 9]), {
                        20: 25,
                        72: r,
                        78: 26,
                        79: 27,
                        80: a,
                        81: s,
                        82: l,
                        83: c,
                        84: u,
                        85: p,
                        86: 33
                    }, {
                        20: 36,
                        72: r,
                        78: 26,
                        79: 27,
                        80: a,
                        81: s,
                        82: l,
                        83: c,
                        84: u,
                        85: p,
                        86: 33
                    }, e(d, n, {
                        6: 3,
                        4: 37
                    }), e(h, n, {
                        6: 3,
                        4: 38
                    }), {
                        13: 40,
                        15: i,
                        17: 39
                    }, {
                        20: 42,
                        56: 41,
                        64: 43,
                        65: f,
                        72: r,
                        78: 26,
                        79: 27,
                        80: a,
                        81: s,
                        82: l,
                        83: c,
                        84: u,
                        85: p,
                        86: 33
                    }, e(m, n, {
                        6: 3,
                        4: 45
                    }), e([5, 14, 15, 18, 19, 29, 34, 39, 44, 47, 48, 51, 55, 60], [2, 10]), {
                        20: 46,
                        72: r,
                        78: 26,
                        79: 27,
                        80: a,
                        81: s,
                        82: l,
                        83: c,
                        84: u,
                        85: p,
                        86: 33
                    }, {
                        20: 47,
                        72: r,
                        78: 26,
                        79: 27,
                        80: a,
                        81: s,
                        82: l,
                        83: c,
                        84: u,
                        85: p,
                        86: 33
                    }, {
                        20: 48,
                        72: r,
                        78: 26,
                        79: 27,
                        80: a,
                        81: s,
                        82: l,
                        83: c,
                        84: u,
                        85: p,
                        86: 33
                    }, {
                        20: 42,
                        56: 49,
                        64: 43,
                        65: f,
                        72: r,
                        78: 26,
                        79: 27,
                        80: a,
                        81: s,
                        82: l,
                        83: c,
                        84: u,
                        85: p,
                        86: 33
                    }, e(g, [2, 78], {
                        49: 50
                    }), e(v, [2, 33]), e(v, [2, 34]), e(v, [2, 35]), e(v, [2, 36]), e(v, [2, 37]), e(v, [2, 38]), e(v, [2, 39]), e(v, [2, 43], {
                        87: y
                    }), {
                        72: r,
                        86: 52
                    }, e(w, b), e(x, [2, 82], {
                        52: 53
                    }), {
                        25: 54,
                        38: 56,
                        39: k,
                        43: 57,
                        44: S,
                        45: 55,
                        47: [2, 54]
                    }, {
                        28: 60,
                        43: 61,
                        44: S,
                        47: [2, 56]
                    }, {
                        13: 63,
                        15: i,
                        18: [1, 62]
                    }, e(T, [2, 48]), e(g, [2, 86], {
                        57: 64
                    }), e(g, [2, 40]), e(g, [2, 41]), {
                        20: 65,
                        72: r,
                        78: 26,
                        79: 27,
                        80: a,
                        81: s,
                        82: l,
                        83: c,
                        84: u,
                        85: p,
                        86: 33
                    }, {
                        26: 66,
                        47: _
                    }, e(C, [2, 58], {
                        30: 68
                    }), e(C, [2, 64], {
                        35: 69
                    }), e(E, [2, 50], {
                        21: 70
                    }), e(g, [2, 90], {
                        61: 71
                    }), {
                        20: 75,
                        33: [2, 80],
                        50: 72,
                        63: 73,
                        64: 76,
                        65: f,
                        69: 74,
                        70: 77,
                        71: 78,
                        72: A,
                        78: 26,
                        79: 27,
                        80: a,
                        81: s,
                        82: l,
                        83: c,
                        84: u,
                        85: p,
                        86: 33
                    }, {
                        72: [1, 80]
                    }, e(v, [2, 42], {
                        87: y
                    }), {
                        20: 75,
                        53: 81,
                        54: [2, 84],
                        63: 82,
                        64: 76,
                        65: f,
                        69: 83,
                        70: 77,
                        71: 78,
                        72: A,
                        78: 26,
                        79: 27,
                        80: a,
                        81: s,
                        82: l,
                        83: c,
                        84: u,
                        85: p,
                        86: 33
                    }, {
                        26: 84,
                        47: _
                    }, {
                        47: [2, 55]
                    }, e(d, n, {
                        6: 3,
                        4: 85
                    }), {
                        47: [2, 20]
                    }, {
                        20: 86,
                        72: r,
                        78: 26,
                        79: 27,
                        80: a,
                        81: s,
                        82: l,
                        83: c,
                        84: u,
                        85: p,
                        86: 33
                    }, e(m, n, {
                        6: 3,
                        4: 87
                    }), {
                        26: 88,
                        47: _
                    }, {
                        47: [2, 57]
                    }, e(o, [2, 11]), e(T, [2, 49]), {
                        20: 75,
                        33: [2, 88],
                        58: 89,
                        63: 90,
                        64: 76,
                        65: f,
                        69: 91,
                        70: 77,
                        71: 78,
                        72: A,
                        78: 26,
                        79: 27,
                        80: a,
                        81: s,
                        82: l,
                        83: c,
                        84: u,
                        85: p,
                        86: 33
                    }, e(P, [2, 94], {
                        66: 92
                    }), e(o, [2, 25]), {
                        20: 93,
                        72: r,
                        78: 26,
                        79: 27,
                        80: a,
                        81: s,
                        82: l,
                        83: c,
                        84: u,
                        85: p,
                        86: 33
                    }, e(N, [2, 60], {
                        78: 26,
                        79: 27,
                        86: 33,
                        20: 75,
                        64: 76,
                        70: 77,
                        71: 78,
                        31: 94,
                        63: 95,
                        69: 96,
                        65: f,
                        72: A,
                        80: a,
                        81: s,
                        82: l,
                        83: c,
                        84: u,
                        85: p
                    }), e(N, [2, 66], {
                        78: 26,
                        79: 27,
                        86: 33,
                        20: 75,
                        64: 76,
                        70: 77,
                        71: 78,
                        36: 97,
                        63: 98,
                        69: 99,
                        65: f,
                        72: A,
                        80: a,
                        81: s,
                        82: l,
                        83: c,
                        84: u,
                        85: p
                    }), {
                        20: 75,
                        22: 100,
                        23: [2, 52],
                        63: 101,
                        64: 76,
                        65: f,
                        69: 102,
                        70: 77,
                        71: 78,
                        72: A,
                        78: 26,
                        79: 27,
                        80: a,
                        81: s,
                        82: l,
                        83: c,
                        84: u,
                        85: p,
                        86: 33
                    }, {
                        20: 75,
                        33: [2, 92],
                        62: 103,
                        63: 104,
                        64: 76,
                        65: f,
                        69: 105,
                        70: 77,
                        71: 78,
                        72: A,
                        78: 26,
                        79: 27,
                        80: a,
                        81: s,
                        82: l,
                        83: c,
                        84: u,
                        85: p,
                        86: 33
                    }, {
                        33: [1, 106]
                    }, e(g, [2, 79]), {
                        33: [2, 81]
                    }, e(v, [2, 27]), e(v, [2, 28]), e([23, 33, 54, 68, 75], [2, 30], {
                        71: 107,
                        72: [1, 108]
                    }), e(D, [2, 98]), e(w, b, {
                        73: I
                    }), e(w, [2, 44]), {
                        54: [1, 110]
                    }, e(x, [2, 83]), {
                        54: [2, 85]
                    }, e(o, [2, 13]), {
                        38: 56,
                        39: k,
                        43: 57,
                        44: S,
                        45: 112,
                        46: 111,
                        47: [2, 76]
                    }, e(C, [2, 70], {
                        40: 113
                    }), {
                        47: [2, 18]
                    }, e(o, [2, 14]), {
                        33: [1, 114]
                    }, e(g, [2, 87]), {
                        33: [2, 89]
                    }, {
                        20: 75,
                        63: 116,
                        64: 76,
                        65: f,
                        67: 115,
                        68: [2, 96],
                        69: 117,
                        70: 77,
                        71: 78,
                        72: A,
                        78: 26,
                        79: 27,
                        80: a,
                        81: s,
                        82: l,
                        83: c,
                        84: u,
                        85: p,
                        86: 33
                    }, {
                        33: [1, 118]
                    }, {
                        32: 119,
                        33: [2, 62],
                        74: 120,
                        75: L
                    }, e(C, [2, 59]), e(N, [2, 61]), {
                        33: [2, 68],
                        37: 122,
                        74: 123,
                        75: L
                    }, e(C, [2, 65]), e(N, [2, 67]), {
                        23: [1, 124]
                    }, e(E, [2, 51]), {
                        23: [2, 53]
                    }, {
                        33: [1, 125]
                    }, e(g, [2, 91]), {
                        33: [2, 93]
                    }, e(o, [2, 22]), e(D, [2, 99]), {
                        73: I
                    }, {
                        20: 75,
                        63: 126,
                        64: 76,
                        65: f,
                        72: r,
                        78: 26,
                        79: 27,
                        80: a,
                        81: s,
                        82: l,
                        83: c,
                        84: u,
                        85: p,
                        86: 33
                    }, e(o, [2, 23]), {
                        47: [2, 19]
                    }, {
                        47: [2, 77]
                    }, e(N, [2, 72], {
                        78: 26,
                        79: 27,
                        86: 33,
                        20: 75,
                        64: 76,
                        70: 77,
                        71: 78,
                        41: 127,
                        63: 128,
                        69: 129,
                        65: f,
                        72: A,
                        80: a,
                        81: s,
                        82: l,
                        83: c,
                        84: u,
                        85: p
                    }), e(o, [2, 24]), {
                        68: [1, 130]
                    }, e(P, [2, 95]), {
                        68: [2, 97]
                    }, e(o, [2, 21]), {
                        33: [1, 131]
                    }, {
                        33: [2, 63]
                    }, {
                        72: [1, 133],
                        76: 132
                    }, {
                        33: [1, 134]
                    }, {
                        33: [2, 69]
                    }, {
                        15: [2, 12]
                    }, e(m, [2, 26]), e(D, [2, 31]), {
                        33: [2, 74],
                        42: 135,
                        74: 136,
                        75: L
                    }, e(C, [2, 71]), e(N, [2, 73]), e(v, [2, 29]), e(d, [2, 15]), {
                        72: [1, 138],
                        77: [1, 137]
                    }, e(O, [2, 100]), e(h, [2, 16]), {
                        33: [1, 139]
                    }, {
                        33: [2, 75]
                    }, {
                        33: [2, 32]
                    }, e(O, [2, 101]), e(d, [2, 17])],
                    defaultActions: {
                        4: [2, 1],
                        55: [2, 55],
                        57: [2, 20],
                        61: [2, 57],
                        74: [2, 81],
                        83: [2, 85],
                        87: [2, 18],
                        91: [2, 89],
                        102: [2, 53],
                        105: [2, 93],
                        111: [2, 19],
                        112: [2, 77],
                        117: [2, 97],
                        120: [2, 63],
                        123: [2, 69],
                        124: [2, 12],
                        136: [2, 75],
                        137: [2, 32]
                    },
                    parseError: function(t, e) {
                        if (!e.recoverable) {
                            var n = function(t, e) {
                                this.message = t, this.hash = e
                            };
                            throw n.prototype = new Error, new n(t, e)
                        }
                        this.trace(t)
                    },
                    parse: function(t) {
                        var e = this,
                            n = [0],
                            i = [null],
                            o = [],
                            r = this.table,
                            a = "",
                            s = 0,
                            l = 0,
                            c = 0,
                            u = o.slice.call(arguments, 1),
                            p = Object.create(this.lexer),
                            d = {
                                yy: {}
                            };
                        for (var h in this.yy) Object.prototype.hasOwnProperty.call(this.yy, h) && (d.yy[h] = this.yy[h]);
                        p.setInput(t, d.yy), d.yy.lexer = p, d.yy.parser = this, void 0 === p.yylloc && (p.yylloc = {});
                        var f = p.yylloc;
                        o.push(f);
                        var m = p.options && p.options.ranges;
                        "function" == typeof d.yy.parseError ? this.parseError = d.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
                        for (var g, v, y, w, b, x, k, S, T, _ = {};;) {
                            if (y = n[n.length - 1], this.defaultActions[y] ? w = this.defaultActions[y] : (null !== g && void 0 !== g || (g = function() {
                                    var t;
                                    return t = p.lex() || 1, "number" != typeof t && (t = e.symbols_[t] || t), t
                                }()), w = r[y] && r[y][g]), void 0 === w || !w.length || !w[0]) {
                                var C = "";
                                T = [];
                                for (x in r[y]) this.terminals_[x] && x > 2 && T.push("'" + this.terminals_[x] + "'");
                                C = p.showPosition ? "Parse error on line " + (s + 1) + ":\n" + p.showPosition() + "\nExpecting " + T.join(", ") + ", got '" + (this.terminals_[g] || g) + "'" : "Parse error on line " + (s + 1) + ": Unexpected " + (1 == g ? "end of input" : "'" + (this.terminals_[g] || g) + "'"), this.parseError(C, {
                                    text: p.match,
                                    token: this.terminals_[g] || g,
                                    line: p.yylineno,
                                    loc: f,
                                    expected: T
                                })
                            }
                            if (w[0] instanceof Array && w.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + y + ", token: " + g);
                            switch (w[0]) {
                                case 1:
                                    n.push(g), i.push(p.yytext), o.push(p.yylloc), n.push(w[1]), g = null, v ? (g = v, v = null) : (l = p.yyleng, a = p.yytext, s = p.yylineno, f = p.yylloc, c > 0 && c--);
                                    break;
                                case 2:
                                    if (k = this.productions_[w[1]][1], _.$ = i[i.length - k], _._$ = {
                                            first_line: o[o.length - (k || 1)].first_line,
                                            last_line: o[o.length - 1].last_line,
                                            first_column: o[o.length - (k || 1)].first_column,
                                            last_column: o[o.length - 1].last_column
                                        }, m && (_._$.range = [o[o.length - (k || 1)].range[0], o[o.length - 1].range[1]]), void 0 !== (b = this.performAction.apply(_, [a, l, s, d.yy, w[1], i, o].concat(u)))) return b;
                                    k && (n = n.slice(0, -1 * k * 2), i = i.slice(0, -1 * k), o = o.slice(0, -1 * k)), n.push(this.productions_[w[1]][0]), i.push(_.$), o.push(_._$), S = r[n[n.length - 2]][n[n.length - 1]], n.push(S);
                                    break;
                                case 3:
                                    return !0
                            }
                        }
                        return !0
                    }
                },
                R = function() {
                    return {
                        EOF: 1,
                        parseError: function(t, e) {
                            if (!this.yy.parser) throw new Error(t);
                            this.yy.parser.parseError(t, e)
                        },
                        setInput: function(t, e) {
                            return this.yy = e || this.yy || {}, this._input = t, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                                first_line: 1,
                                first_column: 0,
                                last_line: 1,
                                last_column: 0
                            }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                        },
                        input: function() {
                            var t = this._input[0];
                            return this.yytext += t, this.yyleng++, this.offset++, this.match += t, this.matched += t, t.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), t
                        },
                        unput: function(t) {
                            var e = t.length,
                                n = t.split(/(?:\r\n?|\n)/g);
                            this._input = t + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - e), this.offset -= e;
                            var i = this.match.split(/(?:\r\n?|\n)/g);
                            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
                            var o = this.yylloc.range;
                            return this.yylloc = {
                                first_line: this.yylloc.first_line,
                                last_line: this.yylineno + 1,
                                first_column: this.yylloc.first_column,
                                last_column: n ? (n.length === i.length ? this.yylloc.first_column : 0) + i[i.length - n.length].length - n[0].length : this.yylloc.first_column - e
                            }, this.options.ranges && (this.yylloc.range = [o[0], o[0] + this.yyleng - e]), this.yyleng = this.yytext.length, this
                        },
                        more: function() {
                            return this._more = !0, this
                        },
                        reject: function() {
                            return this.options.backtrack_lexer ? (this._backtrack = !0, this) : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
                                text: "",
                                token: null,
                                line: this.yylineno
                            })
                        },
                        less: function(t) {
                            this.unput(this.match.slice(t))
                        },
                        pastInput: function() {
                            var t = this.matched.substr(0, this.matched.length - this.match.length);
                            return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "")
                        },
                        upcomingInput: function() {
                            var t = this.match;
                            return t.length < 20 && (t += this._input.substr(0, 20 - t.length)), (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "")
                        },
                        showPosition: function() {
                            var t = this.pastInput(),
                                e = new Array(t.length + 1).join("-");
                            return t + this.upcomingInput() + "\n" + e + "^"
                        },
                        test_match: function(t, e) {
                            var n, i, o;
                            if (this.options.backtrack_lexer && (o = {
                                    yylineno: this.yylineno,
                                    yylloc: {
                                        first_line: this.yylloc.first_line,
                                        last_line: this.last_line,
                                        first_column: this.yylloc.first_column,
                                        last_column: this.yylloc.last_column
                                    },
                                    yytext: this.yytext,
                                    match: this.match,
                                    matches: this.matches,
                                    matched: this.matched,
                                    yyleng: this.yyleng,
                                    offset: this.offset,
                                    _more: this._more,
                                    _input: this._input,
                                    yy: this.yy,
                                    conditionStack: this.conditionStack.slice(0),
                                    done: this.done
                                }, this.options.ranges && (o.yylloc.range = this.yylloc.range.slice(0))), i = t[0].match(/(?:\r\n?|\n).*/g), i && (this.yylineno += i.length), this.yylloc = {
                                    first_line: this.yylloc.last_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.last_column,
                                    last_column: i ? i[i.length - 1].length - i[i.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
                                }, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], n = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), n) return n;
                            if (this._backtrack) {
                                for (var r in o) this[r] = o[r];
                                return !1
                            }
                            return !1
                        },
                        next: function() {
                            if (this.done) return this.EOF;
                            this._input || (this.done = !0);
                            var t, e, n, i;
                            this._more || (this.yytext = "", this.match = "");
                            for (var o = this._currentRules(), r = 0; r < o.length; r++)
                                if ((n = this._input.match(this.rules[o[r]])) && (!e || n[0].length > e[0].length)) {
                                    if (e = n, i = r,
                                        this.options.backtrack_lexer) {
                                        if (!1 !== (t = this.test_match(n, o[r]))) return t;
                                        if (this._backtrack) {
                                            e = !1;
                                            continue
                                        }
                                        return !1
                                    }
                                    if (!this.options.flex) break
                                } return e ? !1 !== (t = this.test_match(e, o[i])) && t : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                text: "",
                                token: null,
                                line: this.yylineno
                            })
                        },
                        lex: function() {
                            var t = this.next();
                            return t || this.lex()
                        },
                        begin: function(t) {
                            this.conditionStack.push(t)
                        },
                        popState: function() {
                            return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0]
                        },
                        _currentRules: function() {
                            return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules
                        },
                        topState: function(t) {
                            return t = this.conditionStack.length - 1 - Math.abs(t || 0), t >= 0 ? this.conditionStack[t] : "INITIAL"
                        },
                        pushState: function(t) {
                            this.begin(t)
                        },
                        stateStackSize: function() {
                            return this.conditionStack.length
                        },
                        options: {},
                        performAction: function(t, e, n, i) {
                            function o(t, n) {
                                return e.yytext = e.yytext.substr(t, e.yyleng - n)
                            }
                            switch (n) {
                                case 0:
                                    if ("\\\\" === e.yytext.slice(-2) ? (o(0, 1), this.begin("mu")) : "\\" === e.yytext.slice(-1) ? (o(0, 1), this.begin("emu")) : this.begin("mu"), e.yytext) return 15;
                                    break;
                                case 1:
                                    return 15;
                                case 2:
                                    return this.popState(), 15;
                                case 3:
                                    return this.begin("raw"), 15;
                                case 4:
                                    return this.popState(), "raw" === this.conditionStack[this.conditionStack.length - 1] ? 15 : (e.yytext = e.yytext.substr(5, e.yyleng - 9), 18);
                                case 5:
                                    return 15;
                                case 6:
                                    return this.popState(), 14;
                                case 7:
                                    return 65;
                                case 8:
                                    return 68;
                                case 9:
                                    return 19;
                                case 10:
                                    return this.popState(), this.begin("raw"), 23;
                                case 11:
                                    return 55;
                                case 12:
                                    return 60;
                                case 13:
                                    return 29;
                                case 14:
                                    return 47;
                                case 15:
                                case 16:
                                    return this.popState(), 44;
                                case 17:
                                    return 34;
                                case 18:
                                    return 39;
                                case 19:
                                    return 51;
                                case 20:
                                    return 48;
                                case 21:
                                    this.unput(e.yytext), this.popState(), this.begin("com");
                                    break;
                                case 22:
                                    return this.popState(), 14;
                                case 23:
                                    return 48;
                                case 24:
                                    return 73;
                                case 25:
                                case 26:
                                    return 72;
                                case 27:
                                    return 87;
                                case 28:
                                    break;
                                case 29:
                                    return this.popState(), 54;
                                case 30:
                                    return this.popState(), 33;
                                case 31:
                                    return e.yytext = o(1, 2).replace(/\\"/g, '"'), 80;
                                case 32:
                                    return e.yytext = o(1, 2).replace(/\\'/g, "'"), 80;
                                case 33:
                                    return 85;
                                case 34:
                                case 35:
                                    return 82;
                                case 36:
                                    return 83;
                                case 37:
                                    return 84;
                                case 38:
                                    return 81;
                                case 39:
                                    return 75;
                                case 40:
                                    return 77;
                                case 41:
                                    return 72;
                                case 42:
                                    return e.yytext = e.yytext.replace(/\\([\\\]])/g, "$1"), 72;
                                case 43:
                                    return "INVALID";
                                case 44:
                                    return 5
                            }
                        },
                        rules: [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/],
                        conditions: {
                            mu: {
                                rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
                                inclusive: !1
                            },
                            emu: {
                                rules: [2],
                                inclusive: !1
                            },
                            com: {
                                rules: [6],
                                inclusive: !1
                            },
                            raw: {
                                rules: [3, 4, 5],
                                inclusive: !1
                            },
                            INITIAL: {
                                rules: [0, 1, 44],
                                inclusive: !0
                            }
                        }
                    }
                }();
            return M.lexer = R, t.prototype = M, M.Parser = t, new t
        }();
        e.default = n, t.exports = e.default
    }, function(t, e, n) {
        "use strict";

        function i() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            this.options = t
        }

        function o(t, e, n) {
            void 0 === e && (e = t.length);
            var i = t[e - 1],
                o = t[e - 2];
            return i ? "ContentStatement" === i.type ? (o || !n ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(i.original) : void 0 : n
        }

        function r(t, e, n) {
            void 0 === e && (e = -1);
            var i = t[e + 1],
                o = t[e + 2];
            return i ? "ContentStatement" === i.type ? (o || !n ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(i.original) : void 0 : n
        }

        function a(t, e, n) {
            var i = t[null == e ? 0 : e + 1];
            if (i && "ContentStatement" === i.type && (n || !i.rightStripped)) {
                var o = i.value;
                i.value = i.value.replace(n ? /^\s+/ : /^[ \t]*\r?\n?/, ""), i.rightStripped = i.value !== o
            }
        }

        function s(t, e, n) {
            var i = t[null == e ? t.length - 1 : e - 1];
            if (i && "ContentStatement" === i.type && (n || !i.leftStripped)) {
                var o = i.value;
                return i.value = i.value.replace(n ? /\s+$/ : /[ \t]+$/, ""), i.leftStripped = i.value !== o, i.leftStripped
            }
        }
        e.__esModule = !0;
        var l = n(23),
            c = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(l);
        i.prototype = new c.default, i.prototype.Program = function(t) {
            var e = !this.options.ignoreStandalone,
                n = !this.isRootSeen;
            this.isRootSeen = !0;
            for (var i = t.body, l = 0, c = i.length; l < c; l++) {
                var u = i[l],
                    p = this.accept(u);
                if (p) {
                    var d = o(i, l, n),
                        h = r(i, l, n),
                        f = p.openStandalone && d,
                        m = p.closeStandalone && h,
                        g = p.inlineStandalone && d && h;
                    p.close && a(i, l, !0), p.open && s(i, l, !0), e && g && (a(i, l), s(i, l) && "PartialStatement" === u.type && (u.indent = /([ \t]+$)/.exec(i[l - 1].original)[1])), e && f && (a((u.program || u.inverse).body), s(i, l)), e && m && (a(i, l), s((u.inverse || u.program).body))
                }
            }
            return t
        }, i.prototype.BlockStatement = i.prototype.DecoratorBlock = i.prototype.PartialBlockStatement = function(t) {
            this.accept(t.program), this.accept(t.inverse);
            var e = t.program || t.inverse,
                n = t.program && t.inverse,
                i = n,
                l = n;
            if (n && n.chained)
                for (i = n.body[0].program; l.chained;) l = l.body[l.body.length - 1].program;
            var c = {
                open: t.openStrip.open,
                close: t.closeStrip.close,
                openStandalone: r(e.body),
                closeStandalone: o((i || e).body)
            };
            if (t.openStrip.close && a(e.body, null, !0), n) {
                var u = t.inverseStrip;
                u.open && s(e.body, null, !0), u.close && a(i.body, null, !0), t.closeStrip.open && s(l.body, null, !0), !this.options.ignoreStandalone && o(e.body) && r(i.body) && (s(e.body), a(i.body))
            } else t.closeStrip.open && s(e.body, null, !0);
            return c
        }, i.prototype.Decorator = i.prototype.MustacheStatement = function(t) {
            return t.strip
        }, i.prototype.PartialStatement = i.prototype.CommentStatement = function(t) {
            var e = t.strip || {};
            return {
                inlineStandalone: !0,
                open: e.open,
                close: e.close
            }
        }, e.default = i, t.exports = e.default
    }, function(t, e, n) {
        "use strict";

        function i() {
            this.parents = []
        }

        function o(t) {
            this.acceptRequired(t, "path"), this.acceptArray(t.params), this.acceptKey(t, "hash")
        }

        function r(t) {
            o.call(this, t), this.acceptKey(t, "program"), this.acceptKey(t, "inverse")
        }

        function a(t) {
            this.acceptRequired(t, "name"), this.acceptArray(t.params), this.acceptKey(t, "hash")
        }
        e.__esModule = !0;
        var s = n(4),
            l = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(s);
        i.prototype = {
            constructor: i,
            mutating: !1,
            acceptKey: function(t, e) {
                var n = this.accept(t[e]);
                if (this.mutating) {
                    if (n && !i.prototype[n.type]) throw new l.default('Unexpected node type "' + n.type + '" found when accepting ' + e + " on " + t.type);
                    t[e] = n
                }
            },
            acceptRequired: function(t, e) {
                if (this.acceptKey(t, e), !t[e]) throw new l.default(t.type + " requires " + e)
            },
            acceptArray: function(t) {
                for (var e = 0, n = t.length; e < n; e++) this.acceptKey(t, e), t[e] || (t.splice(e, 1), e--, n--)
            },
            accept: function(t) {
                if (t) {
                    if (!this[t.type]) throw new l.default("Unknown type: " + t.type, t);
                    this.current && this.parents.unshift(this.current), this.current = t;
                    var e = this[t.type](t);
                    return this.current = this.parents.shift(), !this.mutating || e ? e : !1 !== e ? t : void 0
                }
            },
            Program: function(t) {
                this.acceptArray(t.body)
            },
            MustacheStatement: o,
            Decorator: o,
            BlockStatement: r,
            DecoratorBlock: r,
            PartialStatement: a,
            PartialBlockStatement: function(t) {
                a.call(this, t), this.acceptKey(t, "program")
            },
            ContentStatement: function() {},
            CommentStatement: function() {},
            SubExpression: o,
            PathExpression: function() {},
            StringLiteral: function() {},
            NumberLiteral: function() {},
            BooleanLiteral: function() {},
            UndefinedLiteral: function() {},
            NullLiteral: function() {},
            Hash: function(t) {
                this.acceptArray(t.pairs)
            },
            HashPair: function(t) {
                this.acceptRequired(t, "value")
            }
        }, e.default = i, t.exports = e.default
    }, function(t, e, n) {
        "use strict";

        function i(t, e) {
            if (e = e.path ? e.path.original : e, t.path.original !== e) {
                var n = {
                    loc: t.path.loc
                };
                throw new m.default(t.path.original + " doesn't match " + e, n)
            }
        }

        function o(t, e) {
            this.source = t, this.start = {
                line: e.first_line,
                column: e.first_column
            }, this.end = {
                line: e.last_line,
                column: e.last_column
            }
        }

        function r(t) {
            return /^\[.*\]$/.test(t) ? t.substr(1, t.length - 2) : t
        }

        function a(t, e) {
            return {
                open: "~" === t.charAt(2),
                close: "~" === e.charAt(e.length - 3)
            }
        }

        function s(t) {
            return t.replace(/^\{\{~?\!-?-?/, "").replace(/-?-?~?\}\}$/, "")
        }

        function l(t, e, n) {
            n = this.locInfo(n);
            for (var i = t ? "@" : "", o = [], r = 0, a = 0, s = e.length; a < s; a++) {
                var l = e[a].part,
                    c = e[a].original !== l;
                if (i += (e[a].separator || "") + l, c || ".." !== l && "." !== l && "this" !== l) o.push(l);
                else {
                    if (o.length > 0) throw new m.default("Invalid path: " + i, {
                        loc: n
                    });
                    ".." === l && r++
                }
            }
            return {
                type: "PathExpression",
                data: t,
                depth: r,
                parts: o,
                original: i,
                loc: n
            }
        }

        function c(t, e, n, i, o, r) {
            var a = i.charAt(3) || i.charAt(2),
                s = "{" !== a && "&" !== a;
            return {
                type: /\*/.test(i) ? "Decorator" : "MustacheStatement",
                path: t,
                params: e,
                hash: n,
                escaped: s,
                strip: o,
                loc: this.locInfo(r)
            }
        }

        function u(t, e, n, o) {
            i(t, n), o = this.locInfo(o);
            var r = {
                type: "Program",
                body: e,
                strip: {},
                loc: o
            };
            return {
                type: "BlockStatement",
                path: t.path,
                params: t.params,
                hash: t.hash,
                program: r,
                openStrip: {},
                inverseStrip: {},
                closeStrip: {},
                loc: o
            }
        }

        function p(t, e, n, o, r, a) {
            o && o.path && i(t, o);
            var s = /\*/.test(t.open);
            e.blockParams = t.blockParams;
            var l = void 0,
                c = void 0;
            if (n) {
                if (s) throw new m.default("Unexpected inverse block on decorator", n);
                n.chain && (n.program.body[0].closeStrip = o.strip), c = n.strip, l = n.program
            }
            return r && (r = l, l = e, e = r), {
                type: s ? "DecoratorBlock" : "BlockStatement",
                path: t.path,
                params: t.params,
                hash: t.hash,
                program: e,
                inverse: l,
                openStrip: t.strip,
                inverseStrip: c,
                closeStrip: o && o.strip,
                loc: this.locInfo(a)
            }
        }

        function d(t, e) {
            if (!e && t.length) {
                var n = t[0].loc,
                    i = t[t.length - 1].loc;
                n && i && (e = {
                    source: n.source,
                    start: {
                        line: n.start.line,
                        column: n.start.column
                    },
                    end: {
                        line: i.end.line,
                        column: i.end.column
                    }
                })
            }
            return {
                type: "Program",
                body: t,
                strip: {},
                loc: e
            }
        }

        function h(t, e, n, o) {
            return i(t, n), {
                type: "PartialBlockStatement",
                name: t.path,
                params: t.params,
                hash: t.hash,
                program: e,
                openStrip: t.strip,
                closeStrip: n && n.strip,
                loc: this.locInfo(o)
            }
        }
        e.__esModule = !0, e.SourceLocation = o, e.id = r, e.stripFlags = a, e.stripComment = s, e.preparePath = l, e.prepareMustache = c, e.prepareRawBlock = u, e.prepareBlock = p, e.prepareProgram = d, e.preparePartialBlock = h;
        var f = n(4),
            m = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(f)
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o() {}

        function r(t, e, n) {
            void 0 === e && (e = {}), s(t, e);
            var i = l(t, e, n);
            return (new n.JavaScriptCompiler).compile(i, e)
        }

        function a(t, e, n) {
            function i() {
                var i = l(t, e, n),
                    o = (new n.JavaScriptCompiler).compile(i, e, void 0, !0);
                return n.template(o)
            }
            void 0 === e && (e = {}), e = h.extend({}, e), s(t, e);
            var o = void 0;
            return function(t, e) {
                return o || (o = i()), o.call(this, t, e)
            }
        }

        function s(t, e) {
            if (null == t || "string" != typeof t && "Program" !== t.type) throw new d.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + t);
            if (e.trackIds || e.stringParams) throw new d.default("TrackIds and stringParams are no longer supported. See Github #1145");
            "data" in e || (e.data = !0), e.compat && (e.useDepths = !0)
        }

        function l(t, e, n) {
            var i = n.parse(t, e);
            return (new n.Compiler).compile(i, e)
        }

        function c(t, e) {
            if (t === e) return !0;
            if (h.isArray(t) && h.isArray(e) && t.length === e.length) {
                for (var n = 0; n < t.length; n++)
                    if (!c(t[n], e[n])) return !1;
                return !0
            }
        }

        function u(t) {
            if (!t.path.parts) {
                var e = t.path;
                t.path = {
                    type: "PathExpression",
                    data: !1,
                    depth: 0,
                    parts: [e.original + ""],
                    original: e.original + "",
                    loc: e.loc
                }
            }
        }
        e.__esModule = !0, e.Compiler = o, e.precompile = r, e.compile = a;
        var p = n(4),
            d = i(p),
            h = n(3),
            f = n(19),
            m = i(f),
            g = [].slice;
        o.prototype = {
            compiler: o,
            equals: function(t) {
                var e = this.opcodes.length;
                if (t.opcodes.length !== e) return !1;
                for (var n = 0; n < e; n++) {
                    var i = this.opcodes[n],
                        o = t.opcodes[n];
                    if (i.opcode !== o.opcode || !c(i.args, o.args)) return !1
                }
                e = this.children.length;
                for (var n = 0; n < e; n++)
                    if (!this.children[n].equals(t.children[n])) return !1;
                return !0
            },
            guid: 0,
            compile: function(t, e) {
                this.sourceNode = [], this.opcodes = [], this.children = [], this.options = e, e.blockParams = e.blockParams || [];
                var n = e.knownHelpers;
                if (e.knownHelpers = {
                        helperMissing: !0,
                        blockHelperMissing: !0,
                        each: !0,
                        if: !0,
                        unless: !0,
                        with: !0,
                        log: !0,
                        lookup: !0
                    }, n)
                    for (var i in n) i in n && (this.options.knownHelpers[i] = n[i]);
                return this.accept(t)
            },
            compileProgram: function(t) {
                var e = new this.compiler,
                    n = e.compile(t, this.options),
                    i = this.guid++;
                return this.usePartial = this.usePartial || n.usePartial, this.children[i] = n, this.useDepths = this.useDepths || n.useDepths, i
            },
            accept: function(t) {
                if (!this[t.type]) throw new d.default("Unknown type: " + t.type, t);
                this.sourceNode.unshift(t);
                var e = this[t.type](t);
                return this.sourceNode.shift(), e
            },
            Program: function(t) {
                this.options.blockParams.unshift(t.blockParams);
                for (var e = t.body, n = e.length, i = 0; i < n; i++) this.accept(e[i]);
                return this.options.blockParams.shift(), this.isSimple = 1 === n, this.blockParams = t.blockParams ? t.blockParams.length : 0, this
            },
            BlockStatement: function(t) {
                u(t);
                var e = t.program,
                    n = t.inverse;
                e = e && this.compileProgram(e), n = n && this.compileProgram(n);
                var i = this.classifySexpr(t);
                "helper" === i ? this.helperSexpr(t, e, n) : "simple" === i ? (this.simpleSexpr(t), this.opcode("pushProgram", e), this.opcode("pushProgram", n), this.opcode("emptyHash"), this.opcode("blockValue", t.path.original)) : (this.ambiguousSexpr(t, e, n), this.opcode("pushProgram", e), this.opcode("pushProgram", n), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
            },
            DecoratorBlock: function(t) {
                var e = t.program && this.compileProgram(t.program),
                    n = this.setupFullMustacheParams(t, e, void 0),
                    i = t.path;
                this.useDecorators = !0, this.opcode("registerDecorator", n.length, i.original)
            },
            PartialStatement: function(t) {
                this.usePartial = !0;
                var e = t.program;
                e && (e = this.compileProgram(t.program));
                var n = t.params;
                if (n.length > 1) throw new d.default("Unsupported number of partial arguments: " + n.length, t);
                n.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : n.push({
                    type: "PathExpression",
                    parts: [],
                    depth: 0
                }));
                var i = t.name.original,
                    o = "SubExpression" === t.name.type;
                o && this.accept(t.name), this.setupFullMustacheParams(t, e, void 0, !0);
                var r = t.indent || "";
                this.options.preventIndent && r && (this.opcode("appendContent", r), r = ""), this.opcode("invokePartial", o, i, r), this.opcode("append")
            },
            PartialBlockStatement: function(t) {
                this.PartialStatement(t)
            },
            MustacheStatement: function(t) {
                this.SubExpression(t), t.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
            },
            Decorator: function(t) {
                this.DecoratorBlock(t)
            },
            ContentStatement: function(t) {
                t.value && this.opcode("appendContent", t.value)
            },
            CommentStatement: function() {},
            SubExpression: function(t) {
                u(t);
                var e = this.classifySexpr(t);
                "simple" === e ? this.simpleSexpr(t) : "helper" === e ? this.helperSexpr(t) : this.ambiguousSexpr(t)
            },
            ambiguousSexpr: function(t, e, n) {
                var i = t.path,
                    o = i.parts[0],
                    r = null != e || null != n;
                this.opcode("getContext", i.depth), this.opcode("pushProgram", e), this.opcode("pushProgram", n), i.strict = !0, this.accept(i), this.opcode("invokeAmbiguous", o, r)
            },
            simpleSexpr: function(t) {
                var e = t.path;
                e.strict = !0, this.accept(e), this.opcode("resolvePossibleLambda")
            },
            helperSexpr: function(t, e, n) {
                var i = this.setupFullMustacheParams(t, e, n),
                    o = t.path,
                    r = o.parts[0];
                if (this.options.knownHelpers[r]) this.opcode("invokeKnownHelper", i.length, r);
                else {
                    if (this.options.knownHelpersOnly) throw new d.default("You specified knownHelpersOnly, but used the unknown helper " + r, t);
                    o.strict = !0, o.falsy = !0, this.accept(o), this.opcode("invokeHelper", i.length, o.original, m.default.helpers.simpleId(o))
                }
            },
            PathExpression: function(t) {
                this.addDepth(t.depth), this.opcode("getContext", t.depth);
                var e = t.parts[0],
                    n = m.default.helpers.scopedId(t),
                    i = !t.depth && !n && this.blockParamIndex(e);
                i ? this.opcode("lookupBlockParam", i, t.parts) : e ? t.data ? (this.options.data = !0, this.opcode("lookupData", t.depth, t.parts, t.strict)) : this.opcode("lookupOnContext", t.parts, t.falsy, t.strict, n) : this.opcode("pushContext")
            },
            StringLiteral: function(t) {
                this.opcode("pushString", t.value)
            },
            NumberLiteral: function(t) {
                this.opcode("pushLiteral", t.value)
            },
            BooleanLiteral: function(t) {
                this.opcode("pushLiteral", t.value)
            },
            UndefinedLiteral: function() {
                this.opcode("pushLiteral", "undefined")
            },
            NullLiteral: function() {
                this.opcode("pushLiteral", "null")
            },
            Hash: function(t) {
                var e = t.pairs,
                    n = 0,
                    i = e.length;
                for (this.opcode("pushHash"); n < i; n++) this.pushParam(e[n].value);
                for (; n--;) this.opcode("assignToHash", e[n].key);
                this.opcode("popHash")
            },
            opcode: function(t) {
                this.opcodes.push({
                    opcode: t,
                    args: g.call(arguments, 1),
                    loc: this.sourceNode[0].loc
                })
            },
            addDepth: function(t) {
                t && (this.useDepths = !0)
            },
            classifySexpr: function(t) {
                var e = m.default.helpers.simpleId(t.path),
                    n = e && !!this.blockParamIndex(t.path.parts[0]),
                    i = !n && m.default.helpers.helperExpression(t),
                    o = !n && (i || e);
                if (o && !i) {
                    var r = t.path.parts[0],
                        a = this.options;
                    a.knownHelpers[r] ? i = !0 : a.knownHelpersOnly && (o = !1)
                }
                return i ? "helper" : o ? "ambiguous" : "simple"
            },
            pushParams: function(t) {
                for (var e = 0, n = t.length; e < n; e++) this.pushParam(t[e])
            },
            pushParam: function(t) {
                this.accept(t)
            },
            setupFullMustacheParams: function(t, e, n, i) {
                var o = t.params;
                return this.pushParams(o), this.opcode("pushProgram", e), this.opcode("pushProgram", n), t.hash ? this.accept(t.hash) : this.opcode("emptyHash", i), o
            },
            blockParamIndex: function(t) {
                for (var e = 0, n = this.options.blockParams.length; e < n; e++) {
                    var i = this.options.blockParams[e],
                        o = i && h.indexOf(i, t);
                    if (i && o >= 0) return [e, o]
                }
            }
        }
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t) {
            this.value = t
        }

        function r() {}

        function a(t, e, n, i) {
            var o = e.popStack(),
                r = 0,
                a = n.length;
            for (t && a--; r < a; r++) o = e.nameLookup(o, n[r], i);
            return t ? [e.aliasable("container.strict"), "(", o, ", ", e.quotedString(n[r]), ")"] : o
        }
        e.__esModule = !0;
        var s = n(2),
            l = n(4),
            c = i(l),
            u = n(3),
            p = n(27),
            d = i(p);
        r.prototype = {
                nameLookup: function(t, e) {
                    return r.isValidJavaScriptVariableName(e) ? [t, ".", e] : [t, "[", JSON.stringify(e), "]"]
                },
                depthedLookup: function(t) {
                    return [this.aliasable("container.lookup"), '(depths, "', t, '")']
                },
                compilerInfo: function() {
                    var t = s.COMPILER_REVISION;
                    return [t, s.REVISION_CHANGES[t]]
                },
                appendToBuffer: function(t, e, n) {
                    return u.isArray(t) || (t = [t]), t = this.source.wrap(t, e), this.environment.isSimple ? ["return ", t, ";"] : n ? ["buffer += ", t, ";"] : (t.appendToBuffer = !0, t)
                },
                initializeBuffer: function() {
                    return this.quotedString("")
                },
                compile: function(t, e, n, i) {
                    this.environment = t, this.options = e, this.precompile = !i, this.name = this.environment.name, this.isChild = !!n, this.context = n || {
                        decorators: [],
                        programs: [],
                        environments: []
                    }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = {
                        list: []
                    }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(t, e), this.useDepths = this.useDepths || t.useDepths || t.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || t.useBlockParams;
                    var o = t.opcodes,
                        r = void 0,
                        a = void 0,
                        s = void 0,
                        l = void 0;
                    for (s = 0, l = o.length; s < l; s++) r = o[s], this.source.currentLocation = r.loc, a = a || r.loc, this[r.opcode].apply(this, r.args);
                    if (this.source.currentLocation = a, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new c.default("Compile completed with content left on stack");
                    this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend("var decorators = container.decorators;\n"), this.decorators.push("return fn;"), i ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"), this.decorators.push("}\n"), this.decorators = this.decorators.merge()));
                    var u = this.createFunctionContext(i);
                    if (this.isChild) return u;
                    var p = {
                        compiler: this.compilerInfo(),
                        main: u
                    };
                    this.decorators && (p.main_d = this.decorators, p.useDecorators = !0);
                    var d = this.context,
                        h = d.programs,
                        f = d.decorators;
                    for (s = 0, l = h.length; s < l; s++) h[s] && (p[s] = h[s], f[s] && (p[s + "_d"] = f[s], p.useDecorators = !0));
                    return this.environment.usePartial && (p.usePartial = !0), this.options.data && (p.useData = !0), this.useDepths && (p.useDepths = !0), this.useBlockParams && (p.useBlockParams = !0), this.options.compat && (p.compat = !0), i ? p.compilerOptions = this.options : (p.compiler = JSON.stringify(p.compiler), this.source.currentLocation = {
                        start: {
                            line: 1,
                            column: 0
                        }
                    }, p = this.objectLiteral(p), e.srcName ? (p = p.toStringWithSourceMap({
                        file: e.destName
                    }), p.map = p.map && p.map.toString()) : p = p.toString()), p
                },
                preamble: function() {
                    this.lastContext = 0, this.source = new d.default(this.options.srcName), this.decorators = new d.default(this.options.srcName)
                },
                createFunctionContext: function(t) {
                    var e = "",
                        n = this.stackVars.concat(this.registers.list);
                    n.length > 0 && (e += ", " + n.join(", "));
                    var i = 0;
                    for (var o in this.aliases) {
                        var r = this.aliases[o];
                        this.aliases.hasOwnProperty(o) && r.children && r.referenceCount > 1 && (e += ", alias" + ++i + "=" + o, r.children[0] = "alias" + i)
                    }
                    var a = ["container", "depth0", "helpers", "partials", "data"];
                    (this.useBlockParams || this.useDepths) && a.push("blockParams"), this.useDepths && a.push("depths");
                    var s = this.mergeSource(e);
                    return t ? (a.push(s), Function.apply(this, a)) : this.source.wrap(["function(", a.join(","), ") {\n  ", s, "}"])
                },
                mergeSource: function(t) {
                    var e = this.environment.isSimple,
                        n = !this.forceBuffer,
                        i = void 0,
                        o = void 0,
                        r = void 0,
                        a = void 0;
                    return this.source.each(function(t) {
                        t.appendToBuffer ? (r ? t.prepend("  + ") : r = t, a = t) : (r && (o ? r.prepend("buffer += ") : i = !0, a.add(";"), r = a = void 0), o = !0, e || (n = !1))
                    }), n ? r ? (r.prepend("return "), a.add(";")) : o || this.source.push('return "";') : (t += ", buffer = " + (i ? "" : this.initializeBuffer()), r ? (r.prepend("return buffer + "), a.add(";")) : this.source.push("return buffer;")), t && this.source.prepend("var " + t.substring(2) + (i ? "" : ";\n")), this.source.merge()
                },
                blockValue: function(t) {
                    var e = this.aliasable("helpers.blockHelperMissing"),
                        n = [this.contextName(0)];
                    this.setupHelperArgs(t, 0, n);
                    var i = this.popStack();
                    n.splice(1, 0, i), this.push(this.source.functionCall(e, "call", n))
                },
                ambiguousBlockValue: function() {
                    var t = this.aliasable("helpers.blockHelperMissing"),
                        e = [this.contextName(0)];
                    this.setupHelperArgs("", 0, e, !0), this.flushInline();
                    var n = this.topStack();
                    e.splice(1, 0, n), this.pushSource(["if (!", this.lastHelper, ") { ", n, " = ", this.source.functionCall(t, "call", e), "}"])
                },
                appendContent: function(t) {
                    this.pendingContent ? t = this.pendingContent + t : this.pendingLocation = this.source.currentLocation, this.pendingContent = t
                },
                append: function() {
                    if (this.isInline()) this.replaceStack(function(t) {
                        return [" != null ? ", t, ' : ""']
                    }), this.pushSource(this.appendToBuffer(this.popStack()));
                    else {
                        var t = this.popStack();
                        this.pushSource(["if (", t, " != null) { ", this.appendToBuffer(t, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"])
                    }
                },
                appendEscaped: function() {
                    this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]))
                },
                getContext: function(t) {
                    this.lastContext = t
                },
                pushContext: function() {
                    this.pushStackLiteral(this.contextName(this.lastContext))
                },
                lookupOnContext: function(t, e, n, i) {
                    var o = 0;
                    i || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(t[o++])), this.resolvePath("context", t, o, e, n)
                },
                lookupBlockParam: function(t, e) {
                    this.useBlockParams = !0, this.push(["blockParams[", t[0], "][", t[1], "]"]), this.resolvePath("context", e, 1)
                },
                lookupData: function(t, e, n) {
                    t ? this.pushStackLiteral("container.data(data, " + t + ")") : this.pushStackLiteral("data"), this.resolvePath("data", e, 0, !0, n)
                },
                resolvePath: function(t, e, n, i, o) {
                    var r = this;
                    if (this.options.strict || this.options.assumeObjects) return void this.push(a(this.options.strict && o, this, e, t));
                    for (var s = e.length; n < s; n++) this.replaceStack(function(o) {
                        var a = r.nameLookup(o, e[n], t);
                        return i ? [" && ", a] : [" != null ? ", a, " : ", o]
                    })
                },
                resolvePossibleLambda: function() {
                    this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"])
                },
                emptyHash: function(t) {
                    this.pushStackLiteral(t ? "undefined" : "{}")
                },
                pushHash: function() {
                    this.hash && this.hashes.push(this.hash), this.hash = {
                        values: {}
                    }
                },
                popHash: function() {
                    var t = this.hash;
                    this.hash = this.hashes.pop(), this.push(this.objectLiteral(t.values))
                },
                pushString: function(t) {
                    this.pushStackLiteral(this.quotedString(t))
                },
                pushLiteral: function(t) {
                    this.pushStackLiteral(t)
                },
                pushProgram: function(t) {
                    null != t ? this.pushStackLiteral(this.programExpression(t)) : this.pushStackLiteral(null)
                },
                registerDecorator: function(t, e) {
                    var n = this.nameLookup("decorators", e, "decorator"),
                        i = this.setupHelperArgs(e, t);
                    this.decorators.push(["fn = ", this.decorators.functionCall(n, "", ["fn", "props", "container", i]), " || fn;"])
                },
                invokeHelper: function(t, e, n) {
                    var i = this.popStack(),
                        o = this.setupHelper(t, e),
                        r = n ? [o.name, " || "] : "",
                        a = ["("].concat(r, i);
                    this.options.strict || a.push(" || ", this.aliasable("helpers.helperMissing")), a.push(")"), this.push(this.source.functionCall(a, "call", o.callParams))
                },
                invokeKnownHelper: function(t, e) {
                    var n = this.setupHelper(t, e);
                    this.push(this.source.functionCall(n.name, "call", n.callParams))
                },
                invokeAmbiguous: function(t, e) {
                    this.useRegister("helper");
                    var n = this.popStack();
                    this.emptyHash();
                    var i = this.setupHelper(0, t, e),
                        o = this.lastHelper = this.nameLookup("helpers", t, "helper"),
                        r = ["(", "(helper = ", o, " || ", n, ")"];
                    this.options.strict || (r[0] = "(helper = ", r.push(" != null ? helper : ", this.aliasable("helpers.helperMissing"))), this.push(["(", r, i.paramsInit ? ["),(", i.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", i.callParams), " : helper))"])
                },
                invokePartial: function(t, e, n) {
                    var i = [],
                        o = this.setupParams(e, 1, i);
                    t && (e = this.popStack(), delete o.name), n && (o.indent = JSON.stringify(n)), o.helpers = "helpers", o.partials = "partials", o.decorators = "container.decorators", t ? i.unshift(e) : i.unshift(this.nameLookup("partials", e, "partial")), this.options.compat && (o.depths = "depths"), o = this.objectLiteral(o), i.push(o), this.push(this.source.functionCall("container.invokePartial", "", i))
                },
                assignToHash: function(t) {
                    this.hash.values[t] = this.popStack()
                },
                compiler: r,
                compileChildren: function(t, e) {
                    for (var n = t.children, i = void 0, o = void 0, r = 0, a = n.length; r < a; r++) {
                        i = n[r], o = new this.compiler;
                        var s = this.matchExistingProgram(i);
                        if (null == s) {
                            this.context.programs.push("");
                            var l = this.context.programs.length;
                            i.index = l, i.name = "program" + l, this.context.programs[l] = o.compile(i, e, this.context, !this.precompile), this.context.decorators[l] = o.decorators, this.context.environments[l] = i, this.useDepths = this.useDepths || o.useDepths, this.useBlockParams = this.useBlockParams || o.useBlockParams, i.useDepths = this.useDepths, i.useBlockParams = this.useBlockParams
                        } else i.index = s.index, i.name = "program" + s.index, this.useDepths = this.useDepths || s.useDepths, this.useBlockParams = this.useBlockParams || s.useBlockParams
                    }
                },
                matchExistingProgram: function(t) {
                    for (var e = 0, n = this.context.environments.length; e < n; e++) {
                        var i = this.context.environments[e];
                        if (i && i.equals(t)) return i
                    }
                },
                programExpression: function(t) {
                    var e = this.environment.children[t],
                        n = [e.index, "data", e.blockParams];
                    return (this.useBlockParams || this.useDepths) && n.push("blockParams"), this.useDepths && n.push("depths"), "container.program(" + n.join(", ") + ")"
                },
                useRegister: function(t) {
                    this.registers[t] || (this.registers[t] = !0, this.registers.list.push(t))
                },
                push: function(t) {
                    return t instanceof o || (t = this.source.wrap(t)), this.inlineStack.push(t), t
                },
                pushStackLiteral: function(t) {
                    this.push(new o(t))
                },
                pushSource: function(t) {
                    this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), t && this.source.push(t)
                },
                replaceStack: function(t) {
                    var e = ["("],
                        n = void 0,
                        i = void 0,
                        r = void 0;
                    if (!this.isInline()) throw new c.default("replaceStack on non-inline");
                    var a = this.popStack(!0);
                    if (a instanceof o) n = [a.value], e = ["(", n], r = !0;
                    else {
                        i = !0;
                        var s = this.incrStack();
                        e = ["((", this.push(s), " = ", a, ")"], n = this.topStack()
                    }
                    var l = t.call(this, n);
                    r || this.popStack(), i && this.stackSlot--, this.push(e.concat(l, ")"))
                },
                incrStack: function() {
                    return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
                },
                topStackName: function() {
                    return "stack" + this.stackSlot
                },
                flushInline: function() {
                    var t = this.inlineStack;
                    this.inlineStack = [];
                    for (var e = 0, n = t.length; e < n; e++) {
                        var i = t[e];
                        if (i instanceof o) this.compileStack.push(i);
                        else {
                            var r = this.incrStack();
                            this.pushSource([r, " = ", i, ";"]), this.compileStack.push(r)
                        }
                    }
                },
                isInline: function() {
                    return this.inlineStack.length
                },
                popStack: function(t) {
                    var e = this.isInline(),
                        n = (e ? this.inlineStack : this.compileStack).pop();
                    if (!t && n instanceof o) return n.value;
                    if (!e) {
                        if (!this.stackSlot) throw new c.default("Invalid stack pop");
                        this.stackSlot--
                    }
                    return n
                },
                topStack: function() {
                    var t = this.isInline() ? this.inlineStack : this.compileStack,
                        e = t[t.length - 1];
                    return e instanceof o ? e.value : e
                },
                contextName: function(t) {
                    return this.useDepths && t ? "depths[" + t + "]" : "depth" + t
                },
                quotedString: function(t) {
                    return this.source.quotedString(t)
                },
                objectLiteral: function(t) {
                    return this.source.objectLiteral(t)
                },
                aliasable: function(t) {
                    var e = this.aliases[t];
                    return e ? (e.referenceCount++, e) : (e = this.aliases[t] = this.source.wrap(t), e.aliasable = !0, e.referenceCount = 1, e)
                },
                setupHelper: function(t, e, n) {
                    var i = [];
                    return {
                        params: i,
                        paramsInit: this.setupHelperArgs(e, t, i, n),
                        name: this.nameLookup("helpers", e, "helper"),
                        callParams: [this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})")].concat(i)
                    }
                },
                setupParams: function(t, e, n) {
                    var i = {},
                        o = !n,
                        r = void 0;
                    o && (n = []), i.name = this.quotedString(t), i.hash = this.popStack();
                    var a = this.popStack(),
                        s = this.popStack();
                    (s || a) && (i.fn = s || "container.noop", i.inverse = a || "container.noop");
                    for (var l = e; l--;) r = this.popStack(), n[l] = r;
                    return o && (i.args = this.source.generateArray(n)), this.options.data && (i.data = "data"), this.useBlockParams && (i.blockParams = "blockParams"), i
                },
                setupHelperArgs: function(t, e, n, i) {
                    var o = this.setupParams(t, e, n);
                    return o = this.objectLiteral(o), i ? (this.useRegister("options"), n.push("options"), ["options=", o]) : n ? (n.push(o), "") : o
                }
            },
            function() {
                for (var t = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), e = r.RESERVED_WORDS = {}, n = 0, i = t.length; n < i; n++) e[t[n]] = !0
            }(), r.isValidJavaScriptVariableName = function(t) {
                return !r.RESERVED_WORDS[t] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)
            }, e.default = r, t.exports = e.default
    }, function(t, e, n) {
        "use strict";

        function i(t, e, n) {
            if (r.isArray(t)) {
                for (var i = [], o = 0, a = t.length; o < a; o++) i.push(e.wrap(t[o], n));
                return i
            }
            return "boolean" == typeof t || "number" == typeof t ? t + "" : t
        }

        function o(t) {
            this.srcFile = t, this.source = []
        }
        e.__esModule = !0;
        var r = n(3),
            a = void 0;
        a || (a = function(t, e, n, i) {
            this.src = "", i && this.add(i)
        }, a.prototype = {
            add: function(t) {
                r.isArray(t) && (t = t.join("")), this.src += t
            },
            prepend: function(t) {
                r.isArray(t) && (t = t.join("")), this.src = t + this.src
            },
            toStringWithSourceMap: function() {
                return {
                    code: this.toString()
                }
            },
            toString: function() {
                return this.src
            }
        }), o.prototype = {
            isEmpty: function() {
                return !this.source.length
            },
            prepend: function(t, e) {
                this.source.unshift(this.wrap(t, e))
            },
            push: function(t, e) {
                this.source.push(this.wrap(t, e))
            },
            merge: function() {
                var t = this.empty();
                return this.each(function(e) {
                    t.add(["  ", e, "\n"])
                }), t
            },
            each: function(t) {
                for (var e = 0, n = this.source.length; e < n; e++) t(this.source[e])
            },
            empty: function() {
                var t = this.currentLocation || {
                    start: {}
                };
                return new a(t.start.line, t.start.column, this.srcFile)
            },
            wrap: function(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? this.currentLocation || {
                    start: {}
                } : arguments[1];
                return t instanceof a ? t : (t = i(t, this, e), new a(e.start.line, e.start.column, this.srcFile, t))
            },
            functionCall: function(t, e, n) {
                return n = this.generateList(n), this.wrap([t, e ? "." + e + "(" : "(", n, ")"])
            },
            quotedString: function(t) {
                return '"' + (t + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
            },
            objectLiteral: function(t) {
                var e = [];
                for (var n in t)
                    if (t.hasOwnProperty(n)) {
                        var o = i(t[n], this);
                        "undefined" !== o && e.push([this.quotedString(n), ":", o])
                    } var r = this.generateList(e);
                return r.prepend("{"), r.add("}"), r
            },
            generateList: function(t) {
                for (var e = this.empty(), n = 0, o = t.length; n < o; n++) n && e.add(","), e.add(i(t[n], this));
                return e
            },
            generateArray: function(t) {
                var e = this.generateList(t);
                return e.prepend("["), e.add("]"), e
            }
        }, e.default = o, t.exports = e.default
    }])
}),
function(t) {
    "use strict";

    function e() {
        var t = window.getComputedStyle(document.body, ":after").getPropertyValue("content");
        return '"' === t.charAt(0) && (t = t.substring(1, t.length - 1)), t
    }

    function n() {
        var n = e();
        n !== i && (t(document).trigger("breakpointchange", [n]), i = n)
    }
    var i = null;
    t.fn.getBreakpoint = function() {
        return e() || null
    }, t(function() {
        t(window).on("load orientationchange resize", n).trigger("resize")
    })
}(jQuery),
function(t) {
    "use strict";
    t.fn.fitVids = function(e) {
        var n = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var i = document.head || document.getElementsByTagName("head")[0],
                o = document.createElement("div");
            o.innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>', i.appendChild(o.childNodes[1])
        }
        return e && t.extend(n, e), this.each(function() {
            var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="hulu.com"]', 'iframe[src*="embeds.vice.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', 'iframe[src*="facebook.com/plugins/video"]', "object", "embed"];
            n.customSelector && e.push(n.customSelector);
            var i = ".fitvidsignore";
            n.ignore && (i = i + ", " + n.ignore);
            var o = t(this).find(e.join(","));
            o = o.not("object object"), o = o.not(i), o.each(function() {
                var e = t(this);
                if (!(e.parents(i).length > 0 || "embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                    e.css("height") || e.css("width") || !isNaN(e.attr("height")) && !isNaN(e.attr("width")) || (e.attr("height", 9), e.attr("width", 16));
                    var n = "object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height(),
                        o = isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10),
                        r = n / o;
                    if (!e.attr("name")) {
                        var a = "fitvid" + t.fn.fitVids._count;
                        e.attr("name", a), t.fn.fitVids._count++
                    }
                    e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * r + "%"), e.removeAttr("height").removeAttr("width")
                }
            })
        })
    }, t.fn.fitVids._count = 0
}(window.jQuery || window.Zepto),
function(t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(t.jQuery)
}(this, function(t) {
    "use strict";
    var e, n;
    n = {
        classNameModal: "modal",
        classNameShow: "is-visible"
    }, e = function(e, i) {
        this.$el = t(e), this.options = t.extend(!0, {}, n, i), this.init()
    }, e.prototype = {
        constructor: e,
        hide: function() {
            this.$el.trigger("modal.hide").removeClass(this.options.classNameShow), t("body").removeClass("has-modal")
        },
        init: function() {
            this.id = this.$el.attr("id"), t(document).on("click", '[data-modal="' + this.id + '"]', t.proxy(this, "onClick")), t(document).on("keydown", t.proxy(this, "onKeyDown")), t('a[href^="#close"]', this.$el).on("click", t.proxy(this, "onClickClose"))
        },
        onClick: function(e) {
            t(this.options.classNameModal).removeClass(this.options.classNameShow), this.show(), e.preventDefault()
        },
        onClickClose: function(t) {
            dataLayer.push({
                event: "email",
                eventCategory: "Email",
                eventAction: "Close",
                eventLabel: "Modal",
                eventNonInteraction: 1
            }), this.hide(), t.preventDefault()
        },
        onKeyDown: function(e) {
            27 === e.keyCode && (t(".is-visible").length > 0 && dataLayer.push({
                event: "email",
                eventCategory: "Email",
                eventAction: "Close",
                eventLabel: "Modal",
                eventNonInteraction: 1
            }), this.hide())
        },
        show: function(e) {
            dataLayer.push({
                event: "email",
                eventCategory: "Email",
                eventAction: "Impression",
                eventLabel: "Modal",
                eventNonInteraction: 1
            }), this.$el.addClass(this.options.classNameShow), t("body").addClass("has-modal"), setTimeout(function() {
                this.$el.trigger("modal.show")
            }.bind(this), 5)
        }
    }, t.fn.modal = function(n) {
        return this.each(function() {
            var i;
            if (t.data(this, "modal")) {
                if ("string" == typeof n) switch (i = t.data(this, "modal"), n) {
                    case "hide":
                        i.hide();
                        break;
                    case "show":
                        i.show()
                }
            } else t.data(this, "modal", new e(this, n))
        })
    }, t.fn.modal.defaults = n, t.fn.modal.Modal = e
}),
function(t) {
    "use strict";

    function e(e, i) {
        this.$el = t(e), this.isTouchDevice = window.hasOwnProperty("ontouchstart") || navigator.msMaxTouchPoints, this.options = t.extend({}, n, i), this.init()
    }
    var n = {
        classNameActiveTab: "is-active",
        classNameActiveTabPanel: "is-active"
    };
    e.prototype = {
        init: function() {
            this.$tabs = t('[role="tab"]', this.$el), this.$tabActive = this.$tabs.filter("." + this.options.classNameActiveTab), this.$tabPanels = t('[role="tabpanel"]', this.$el), this.$tabActive.length || (this.$tabActive = this.$tabs.first()), this.$tabActive.addClass(this.options.classNameActiveTab), this.showActiveTabContent(), this.$tabs.on(this.isTouchDevice ? "touchstart" : "click", t.proxy(this, "onClick"))
        },
        onClick: function(e) {
            this.$tabActive = t(e.currentTarget), this.$tabs.removeClass(this.options.classNameActiveTab), this.$tabActive.addClass(this.options.classNameActiveTab), this.$tabPanels.removeClass(this.options.classNameActiveTabPanel), t("#" + this.$tabActive.attr("aria-controls")).addClass(this.options.classNameActiveTabPanel), this.showActiveTabContent(), e.preventDefault()
        },
        showActiveTabContent: function() {
            this.$tabPanels.removeClass(this.options.classNameActiveTabPanel), t("#" + this.$tabActive.attr("aria-controls")).addClass(this.options.classNameActiveTabPanel)
        }
    }, t.fn.tabs = function(n) {
        return this.each(function() {
            t.data(this, "tabs") || t.data(this, "tabs", new e(this, n))
        })
    }
}($),
function() {
    "use strict";

    function t(i) {
        if (!i) throw new Error("No options passed to Waypoint constructor");
        if (!i.element) throw new Error("No element option passed to Waypoint constructor");
        if (!i.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, i), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = i.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), n[this.key] = this, e += 1
    }
    var e = 0,
        n = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete n[this.key]
    }, t.prototype.disable = function() {
        return this.enabled = !1, this
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function() {
        return this.group.next(this)
    }, t.prototype.previous = function() {
        return this.group.previous(this)
    }, t.invokeAll = function(t) {
        var e = [];
        for (var i in n) e.push(n[i]);
        for (var o = 0, r = e.length; o < r; o++) e[o][t]()
    }, t.destroyAll = function() {
        t.invokeAll("destroy")
    }, t.disableAll = function() {
        t.invokeAll("disable")
    }, t.enableAll = function() {
        t.Context.refreshAll();
        for (var e in n) n[e].enabled = !0;
        return this
    }, t.refreshAll = function() {
        t.Context.refreshAll()
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = o.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, i[t.waypointContextKey] = this, n += 1, o.windowContext || (o.windowContext = !0, o.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var n = 0,
        i = {},
        o = window.Waypoint,
        r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical),
            n = this.element == this.element.window;
        t && e && !n && (this.adapter.off(".waypoints"), delete i[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(), e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0, o.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            e.didScroll && !o.isTouch || (e.didScroll = !0, o.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function() {
        o.Context.refreshAll()
    }, e.prototype.handleScroll = function() {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var n in e) {
            var i = e[n],
                o = i.newScroll > i.oldScroll,
                r = o ? i.forward : i.backward;
            for (var a in this.waypoints[n]) {
                var s = this.waypoints[n][a];
                if (null !== s.triggerPoint) {
                    var l = i.oldScroll < s.triggerPoint,
                        c = i.newScroll >= s.triggerPoint,
                        u = l && c,
                        p = !l && !c;
                    (u || p) && (s.queueTrigger(r), t[s.group.id] = s.group)
                }
            }
        }
        for (var d in t) t[d].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, e.prototype.innerHeight = function() {
        return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function() {
        return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var n in this.waypoints[e]) t.push(this.waypoints[e][n]);
        for (var i = 0, o = t.length; i < o; i++) t[i].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            n = e ? void 0 : this.adapter.offset(),
            i = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : n.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : n.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var r in t) {
            var a = t[r];
            for (var s in this.waypoints[r]) {
                var l, c, u, p, d, h = this.waypoints[r][s],
                    f = h.options.offset,
                    m = h.triggerPoint,
                    g = 0,
                    v = null == m;
                h.element !== h.element.window && (g = h.adapter.offset()[a.offsetProp]), "function" == typeof f ? f = f.apply(h) : "string" == typeof f && (f = parseFloat(f), h.options.offset.indexOf("%") > -1 && (f = Math.ceil(a.contextDimension * f / 100))), l = a.contextScroll - a.contextOffset, h.triggerPoint = Math.floor(g + l - f), c = m < a.oldScroll, u = h.triggerPoint >= a.oldScroll, p = c && u, d = !c && !u, !v && p ? (h.queueTrigger(a.backward), i[h.group.id] = h.group) : !v && d ? (h.queueTrigger(a.forward), i[h.group.id] = h.group) : v && a.oldScroll >= h.triggerPoint && (h.queueTrigger(a.forward), i[h.group.id] = h.group)
            }
        }
        return o.requestAnimationFrame(function() {
            for (var t in i) i[t].flushTriggers()
        }), this
    }, e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function() {
        for (var t in i) i[t].refresh()
    }, e.findByElement = function(t) {
        return i[t.waypointContextKey]
    }, window.onload = function() {
        r && r(), e.refreshAll()
    }, o.requestAnimationFrame = function(e) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
    }, o.Context = e
}(),
function() {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function n(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
    }
    var i = {
            vertical: {},
            horizontal: {}
        },
        o = window.Waypoint;
    n.prototype.add = function(t) {
        this.waypoints.push(t)
    }, n.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, n.prototype.flushTriggers = function() {
        for (var n in this.triggerQueues) {
            var i = this.triggerQueues[n],
                o = "up" === n || "left" === n;
            i.sort(o ? e : t);
            for (var r = 0, a = i.length; r < a; r += 1) {
                var s = i[r];
                (s.options.continuous || r === i.length - 1) && s.trigger([n])
            }
        }
        this.clearTriggerQueues()
    }, n.prototype.next = function(e) {
        this.waypoints.sort(t);
        var n = o.Adapter.inArray(e, this.waypoints);
        return n === this.waypoints.length - 1 ? null : this.waypoints[n + 1]
    }, n.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var n = o.Adapter.inArray(e, this.waypoints);
        return n ? this.waypoints[n - 1] : null
    }, n.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }, n.prototype.remove = function(t) {
        var e = o.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, n.prototype.first = function() {
        return this.waypoints[0]
    }, n.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, n.findOrCreate = function(t) {
        return i[t.axis][t.name] || new n(t)
    }, o.Group = n
}(),
function() {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }
    var e = window.jQuery,
        n = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, n) {
        t.prototype[n] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[n].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function(n, i) {
        t[i] = e[i]
    }), n.adapters.push({
        name: "jquery",
        Adapter: t
    }), n.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var n = [],
                i = arguments[0];
            return t.isFunction(arguments[0]) && (i = t.extend({}, arguments[1]), i.handler = arguments[0]), this.each(function() {
                var o = t.extend({}, i, {
                    element: this
                });
                "string" == typeof o.context && (o.context = t(this).closest(o.context)[0]), n.push(new e(o))
            }), n
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}(),
function() {
    for (var t = document.getElementsByClassName("youtube-player"), e = 0; e < t.length; e++) {
        var n = document.createElement("div");
        n.innerHTML = labnolThumb(t[e].dataset.id), n.onclick = labnolIframe, t[e].appendChild(n)
    }
}(), window.Modernizr = function(t, e, n) {
        function i(t) {
            p.cssText = t
        }

        function o(t, e) {
            return typeof t === e
        }
        var r, a, s = {},
            l = e.documentElement,
            c = "modernizr",
            u = e.createElement(c),
            p = u.style,
            d = " -webkit- -moz- -o- -ms- ".split(" "),
            h = {},
            f = [],
            m = f.slice,
            g = function(t, n, i, o) {
                var r, a, s, u, p = e.createElement("div"),
                    d = e.body,
                    h = d || e.createElement("body");
                if (parseInt(i, 10))
                    for (; i--;) s = e.createElement("div"), s.id = o ? o[i] : c + (i + 1), p.appendChild(s);
                return r = ["&#173;", '<style id="s', c, '">', t, "</style>"].join(""), p.id = c, (d ? p : h).innerHTML += r, h.appendChild(p), d || (h.style.background = "", h.style.overflow = "hidden", u = l.style.overflow, l.style.overflow = "hidden", l.appendChild(h)), a = n(p, t), d ? p.parentNode.removeChild(p) : (h.parentNode.removeChild(h), l.style.overflow = u), !!a
            },
            v = {}.hasOwnProperty;
        a = o(v, "undefined") || o(v.call, "undefined") ? function(t, e) {
            return e in t && o(t.constructor.prototype[e], "undefined")
        } : function(t, e) {
            return v.call(t, e)
        }, Function.prototype.bind || (Function.prototype.bind = function(t) {
            var e = this;
            if ("function" != typeof e) throw new TypeError;
            var n = m.call(arguments, 1),
                i = function() {
                    if (this instanceof i) {
                        var o = function() {};
                        o.prototype = e.prototype;
                        var r = new o,
                            a = e.apply(r, n.concat(m.call(arguments)));
                        return Object(a) === a ? a : r
                    }
                    return e.apply(t, n.concat(m.call(arguments)))
                };
            return i
        }), h.touch = function() {
            var n;
            return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? n = !0 : g(["@media (", d.join("touch-enabled),("), c, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
                n = 9 === t.offsetTop
            }), n
        };
        for (var y in h) a(h, y) && (r = y.toLowerCase(), s[r] = h[y](), f.push((s[r] ? "" : "no-") + r));
        return s.addTest = function(t, e) {
            if ("object" == typeof t)
                for (var i in t) a(t, i) && s.addTest(i, t[i]);
            else {
                if (t = t.toLowerCase(), s[t] !== n) return s;
                e = "function" == typeof e ? e() : e, l.className += " " + (e ? "" : "no-") + t, s[t] = e
            }
            return s
        }, i(""), u = null, s._version = "2.8.3", s._prefixes = d, s.testStyles = g, l.className = l.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + f.join(" "), s
    }(this, this.document),
    function(t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.PhotoSwipe = e()
    }(this, function() {
        "use strict";
        return function(t, e, n, i) {
            var o = {
                features: null,
                bind: function(t, e, n, i) {
                    var o = (i ? "remove" : "add") + "EventListener";
                    e = e.split(" ");
                    for (var r = 0; r < e.length; r++) e[r] && t[o](e[r], n, !1)
                },
                isArray: function(t) {
                    return t instanceof Array
                },
                createEl: function(t, e) {
                    var n = document.createElement(e || "div");
                    return t && (n.className = t), n
                },
                getScrollY: function() {
                    var t = window.pageYOffset;
                    return void 0 !== t ? t : document.documentElement.scrollTop
                },
                unbind: function(t, e, n) {
                    o.bind(t, e, n, !0)
                },
                removeClass: function(t, e) {
                    var n = new RegExp("(\\s|^)" + e + "(\\s|$)");
                    t.className = t.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                },
                addClass: function(t, e) {
                    o.hasClass(t, e) || (t.className += (t.className ? " " : "") + e)
                },
                hasClass: function(t, e) {
                    return t.className && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
                },
                getChildByClass: function(t, e) {
                    for (var n = t.firstChild; n;) {
                        if (o.hasClass(n, e)) return n;
                        n = n.nextSibling
                    }
                },
                arraySearch: function(t, e, n) {
                    for (var i = t.length; i--;)
                        if (t[i][n] === e) return i;
                    return -1
                },
                extend: function(t, e, n) {
                    for (var i in e)
                        if (e.hasOwnProperty(i)) {
                            if (n && t.hasOwnProperty(i)) continue;
                            t[i] = e[i]
                        }
                },
                easing: {
                    sine: {
                        out: function(t) {
                            return Math.sin(t * (Math.PI / 2))
                        },
                        inOut: function(t) {
                            return -(Math.cos(Math.PI * t) - 1) / 2
                        }
                    },
                    cubic: {
                        out: function(t) {
                            return --t * t * t + 1
                        }
                    }
                },
                detectFeatures: function() {
                    if (o.features) return o.features;
                    var t = o.createEl(),
                        e = t.style,
                        n = "",
                        i = {};
                    if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
                        var r = navigator.userAgent;
                        if (/iP(hone|od)/.test(navigator.platform)) {
                            var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            a && a.length > 0 && (a = parseInt(a[1], 10)) >= 1 && 8 > a && (i.isOldIOSPhone = !0)
                        }
                        var s = r.match(/Android\s([0-9\.]*)/),
                            l = s ? s[1] : 0;
                        l = parseFloat(l), l >= 1 && (4.4 > l && (i.isOldAndroid = !0), i.androidVersion = l), i.isMobileOpera = /opera mini|opera mobi/i.test(r)
                    }
                    for (var c, u, p = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], h = 0; 4 > h; h++) {
                        n = d[h];
                        for (var f = 0; 3 > f; f++) c = p[f], u = n + (n ? c.charAt(0).toUpperCase() + c.slice(1) : c), !i[c] && u in e && (i[c] = u);
                        n && !i.raf && (n = n.toLowerCase(), i.raf = window[n + "RequestAnimationFrame"], i.raf && (i.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]))
                    }
                    if (!i.raf) {
                        var m = 0;
                        i.raf = function(t) {
                            var e = (new Date).getTime(),
                                n = Math.max(0, 16 - (e - m)),
                                i = window.setTimeout(function() {
                                    t(e + n)
                                }, n);
                            return m = e + n, i
                        }, i.caf = function(t) {
                            clearTimeout(t)
                        }
                    }
                    return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = i, i
                }
            };
            o.detectFeatures(), o.features.oldIE && (o.bind = function(t, e, n, i) {
                e = e.split(" ");
                for (var o, r = (i ? "detach" : "attach") + "Event", a = function() {
                        n.handleEvent.call(n)
                    }, s = 0; s < e.length; s++)
                    if (o = e[s])
                        if ("object" == typeof n && n.handleEvent) {
                            if (i) {
                                if (!n["oldIE" + o]) return !1
                            } else n["oldIE" + o] = a;
                            t[r]("on" + o, n["oldIE" + o])
                        } else t[r]("on" + o, n)
            });
            var r = this,
                a = {
                    allowPanToNext: !0,
                    spacing: .12,
                    bgOpacity: 1,
                    mouseUsed: !1,
                    loop: !0,
                    pinchToClose: !0,
                    closeOnScroll: !0,
                    closeOnVerticalDrag: !0,
                    verticalDragRange: .75,
                    hideAnimationDuration: 333,
                    showAnimationDuration: 333,
                    showHideOpacity: !1,
                    focus: !0,
                    escKey: !0,
                    arrowKeys: !0,
                    mainScrollEndFriction: .35,
                    panEndFriction: .35,
                    isClickableElement: function(t) {
                        return "A" === t.tagName
                    },
                    getDoubleTapZoom: function(t, e) {
                        return t ? 1 : e.initialZoomLevel < .7 ? 1 : 1.33
                    },
                    maxSpreadZoom: 1.33,
                    modal: !0,
                    scaleMode: "fit"
                };
            o.extend(a, i);
            var s, l, c, u, p, d, h, f, m, g, v, y, w, b, x, k, S, T, _, C, E, A, P, N, D, I, L, O, M, R, F, j, H, $, B, q, W, z, U, K, Z, V, X, G, Y, Q, J, tt, et, nt, it, ot, rt, at, st, lt, ct = function() {
                    return {
                        x: 0,
                        y: 0
                    }
                },
                ut = ct(),
                pt = ct(),
                dt = ct(),
                ht = {},
                ft = 0,
                mt = {},
                gt = ct(),
                vt = 0,
                yt = !0,
                wt = [],
                bt = {},
                xt = !1,
                kt = function(t, e) {
                    o.extend(r, e.publicMethods), wt.push(t)
                },
                St = function(t) {
                    var e = Xe();
                    return t > e - 1 ? t - e : 0 > t ? e + t : t
                },
                Tt = {},
                _t = function(t, e) {
                    return Tt[t] || (Tt[t] = []), Tt[t].push(e)
                },
                Ct = function(t) {
                    var e = Tt[t];
                    if (e) {
                        var n = Array.prototype.slice.call(arguments);
                        n.shift();
                        for (var i = 0; i < e.length; i++) e[i].apply(r, n)
                    }
                },
                Et = function() {
                    return (new Date).getTime()
                },
                At = function(t) {
                    at = t, r.bg.style.opacity = t * a.bgOpacity
                },
                Pt = function(t, e, n, i, o) {
                    (!xt || o && o !== r.currItem) && (i /= o ? o.fitRatio : r.currItem.fitRatio), t[A] = y + e + "px, " + n + "px" + w + " scale(" + i + ")"
                },
                Nt = function(t) {
                    et && (t && (g > r.currItem.fitRatio ? xt || (ln(r.currItem, !1, !0), xt = !0) : xt && (ln(r.currItem), xt = !1)), Pt(et, dt.x, dt.y, g))
                },
                Dt = function(t) {
                    t.container && Pt(t.container.style, t.initialPosition.x, t.initialPosition.y, t.initialZoomLevel, t)
                },
                It = function(t, e) {
                    e[A] = y + t + "px, 0px" + w
                },
                Lt = function(t, e) {
                    if (!a.loop && e) {
                        var n = u + (gt.x * ft - t) / gt.x,
                            i = Math.round(t - fe.x);
                        (0 > n && i > 0 || n >= Xe() - 1 && 0 > i) && (t = fe.x + i * a.mainScrollEndFriction)
                    }
                    fe.x = t, It(t, p)
                },
                Ot = function(t, e) {
                    var n = me[t] - mt[t];
                    return pt[t] + ut[t] + n - n * (e / v)
                },
                Mt = function(t, e) {
                    t.x = e.x, t.y = e.y, e.id && (t.id = e.id)
                },
                Rt = function(t) {
                    t.x = Math.round(t.x), t.y = Math.round(t.y)
                },
                Ft = null,
                jt = function() {
                    Ft && (o.unbind(document, "mousemove", jt), o.addClass(t, "pswp--has_mouse"), a.mouseUsed = !0, Ct("mouseUsed")), Ft = setTimeout(function() {
                        Ft = null
                    }, 100)
                },
                Ht = function() {
                    o.bind(document, "keydown", r), F.transform && o.bind(r.scrollWrap, "click", r), a.mouseUsed || o.bind(document, "mousemove", jt), o.bind(window, "resize scroll", r), Ct("bindEvents")
                },
                $t = function() {
                    o.unbind(window, "resize", r), o.unbind(window, "scroll", m.scroll), o.unbind(document, "keydown", r), o.unbind(document, "mousemove", jt), F.transform && o.unbind(r.scrollWrap, "click", r), z && o.unbind(window, h, r), Ct("unbindEvents")
                },
                Bt = function(t, e) {
                    var n = on(r.currItem, ht, t);
                    return e && (tt = n), n
                },
                qt = function(t) {
                    return t || (t = r.currItem), t.initialZoomLevel
                },
                Wt = function(t) {
                    return t || (t = r.currItem), t.w > 0 ? a.maxSpreadZoom : 1
                },
                zt = function(t, e, n, i) {
                    return i === r.currItem.initialZoomLevel ? (n[t] = r.currItem.initialPosition[t], !0) : (n[t] = Ot(t, i), n[t] > e.min[t] ? (n[t] = e.min[t], !0) : n[t] < e.max[t] && (n[t] = e.max[t], !0))
                },
                Ut = function() {
                    if (A) {
                        var e = F.perspective && !N;
                        return y = "translate" + (e ? "3d(" : "("), void(w = F.perspective ? ", 0px)" : ")")
                    }
                    A = "left", o.addClass(t, "pswp--ie"), It = function(t, e) {
                        e.left = t + "px"
                    }, Dt = function(t) {
                        var e = t.fitRatio > 1 ? 1 : t.fitRatio,
                            n = t.container.style,
                            i = e * t.w,
                            o = e * t.h;
                        n.width = i + "px", n.height = o + "px", n.left = t.initialPosition.x + "px", n.top = t.initialPosition.y + "px"
                    }, Nt = function() {
                        if (et) {
                            var t = et,
                                e = r.currItem,
                                n = e.fitRatio > 1 ? 1 : e.fitRatio,
                                i = n * e.w,
                                o = n * e.h;
                            t.width = i + "px", t.height = o + "px", t.left = dt.x + "px", t.top = dt.y + "px"
                        }
                    }
                },
                Kt = function(t) {
                    var e = "";
                    a.escKey && 27 === t.keyCode ? e = "close" : a.arrowKeys && (37 === t.keyCode ? e = "prev" : 39 === t.keyCode && (e = "next")), e && (t.ctrlKey || t.altKey || t.shiftKey || t.metaKey || (t.preventDefault ? t.preventDefault() : t.returnValue = !1, r[e]()))
                },
                Zt = function(t) {
                    t && (Z || K || nt || q) && (t.preventDefault(), t.stopPropagation())
                },
                Vt = function() {
                    r.setScrollOffset(0, o.getScrollY())
                },
                Xt = {},
                Gt = 0,
                Yt = function(t) {
                    Xt[t] && (Xt[t].raf && I(Xt[t].raf), Gt--, delete Xt[t])
                },
                Qt = function(t) {
                    Xt[t] && Yt(t), Xt[t] || (Gt++, Xt[t] = {})
                },
                Jt = function() {
                    for (var t in Xt) Xt.hasOwnProperty(t) && Yt(t)
                },
                te = function(t, e, n, i, o, r, a) {
                    var s, l = Et();
                    Qt(t);
                    var c = function() {
                        if (Xt[t]) {
                            if ((s = Et() - l) >= i) return Yt(t), r(n), void(a && a());
                            r((n - e) * o(s / i) + e), Xt[t].raf = D(c)
                        }
                    };
                    c()
                },
                ee = {
                    shout: Ct,
                    listen: _t,
                    viewportSize: ht,
                    options: a,
                    isMainScrollAnimating: function() {
                        return nt
                    },
                    getZoomLevel: function() {
                        return g
                    },
                    getCurrentIndex: function() {
                        return u
                    },
                    isDragging: function() {
                        return z
                    },
                    isZooming: function() {
                        return Y
                    },
                    setScrollOffset: function(t, e) {
                        mt.x = t, R = mt.y = e, Ct("updateScrollOffset", mt)
                    },
                    applyZoomPan: function(t, e, n, i) {
                        dt.x = e, dt.y = n, g = t, Nt(i)
                    },
                    init: function() {
                        if (!s && !l) {
                            var n;
                            r.framework = o, r.template = t, r.bg = o.getChildByClass(t, "pswp__bg"), L = t.className, s = !0, F = o.detectFeatures(), D = F.raf, I = F.caf, A = F.transform, M = F.oldIE, r.scrollWrap = o.getChildByClass(t, "pswp__scroll-wrap"), r.container = o.getChildByClass(r.scrollWrap, "pswp__container"), p = r.container.style, r.itemHolders = k = [{
                                el: r.container.children[0],
                                wrap: 0,
                                index: -1
                            }, {
                                el: r.container.children[1],
                                wrap: 0,
                                index: -1
                            }, {
                                el: r.container.children[2],
                                wrap: 0,
                                index: -1
                            }], k[0].el.style.display = k[2].el.style.display = "none", Ut(), m = {
                                resize: r.updateSize,
                                scroll: Vt,
                                keydown: Kt,
                                click: Zt
                            };
                            var i = F.isOldIOSPhone || F.isOldAndroid || F.isMobileOpera;
                            for (F.animationName && F.transform && !i || (a.showAnimationDuration = a.hideAnimationDuration = 0), n = 0; n < wt.length; n++) r["init" + wt[n]]();
                            if (e) {
                                (r.ui = new e(r, o)).init()
                            }
                            Ct("firstUpdate"), u = u || a.index || 0, (isNaN(u) || 0 > u || u >= Xe()) && (u = 0), r.currItem = Ve(u), (F.isOldIOSPhone || F.isOldAndroid) && (yt = !1), t.setAttribute("aria-hidden", "false"), a.modal && (yt ? t.style.position = "fixed" : (t.style.position = "absolute", t.style.top = o.getScrollY() + "px")), void 0 === R && (Ct("initialLayout"), R = O = o.getScrollY());
                            var c = "pswp--open ";
                            for (a.mainClass && (c += a.mainClass + " "), a.showHideOpacity && (c += "pswp--animate_opacity "), c += N ? "pswp--touch" : "pswp--notouch", c += F.animationName ? " pswp--css_animation" : "", c += F.svg ? " pswp--svg" : "", o.addClass(t, c), r.updateSize(), d = -1, vt = null, n = 0; 3 > n; n++) It((n + d) * gt.x, k[n].el.style);
                            M || o.bind(r.scrollWrap, f, r), _t("initialZoomInEnd", function() {
                                r.setContent(k[0], u - 1), r.setContent(k[2], u + 1), k[0].el.style.display = k[2].el.style.display = "block", a.focus && t.focus(), Ht()
                            }), r.setContent(k[1], u), r.updateCurrItem(), Ct("afterInit"), yt || (b = setInterval(function() {
                                Gt || z || Y || g !== r.currItem.initialZoomLevel || r.updateSize()
                            }, 1e3)), o.addClass(t, "pswp--visible")
                        }
                    },
                    close: function() {
                        s && (s = !1, l = !0, Ct("close"), $t(), Ye(r.currItem, null, !0, r.destroy))
                    },
                    destroy: function() {
                        Ct("destroy"), ze && clearTimeout(ze), t.setAttribute("aria-hidden", "true"), t.className = L, b && clearInterval(b), o.unbind(r.scrollWrap, f, r), o.unbind(window, "scroll", r), be(), Jt(), Tt = null
                    },
                    panTo: function(t, e, n) {
                        n || (t > tt.min.x ? t = tt.min.x : t < tt.max.x && (t = tt.max.x), e > tt.min.y ? e = tt.min.y : e < tt.max.y && (e = tt.max.y)), dt.x = t, dt.y = e, Nt()
                    },
                    handleEvent: function(t) {
                        t = t || window.event, m[t.type] && m[t.type](t)
                    },
                    goTo: function(t) {
                        t = St(t);
                        var e = t - u;
                        vt = e, u = t, r.currItem = Ve(u), ft -= e, Lt(gt.x * ft), Jt(), nt = !1, r.updateCurrItem()
                    },
                    next: function() {
                        r.goTo(u + 1)
                    },
                    prev: function() {
                        r.goTo(u - 1)
                    },
                    updateCurrZoomItem: function(t) {
                        if (t && Ct("beforeChange", 0), k[1].el.children.length) {
                            var e = k[1].el.children[0];
                            et = o.hasClass(e, "pswp__zoom-wrap") ? e.style : null
                        } else et = null;
                        tt = r.currItem.bounds, v = g = r.currItem.initialZoomLevel, dt.x = tt.center.x, dt.y = tt.center.y, t && Ct("afterChange")
                    },
                    invalidateCurrItems: function() {
                        x = !0;
                        for (var t = 0; 3 > t; t++) k[t].item && (k[t].item.needsUpdate = !0)
                    },
                    updateCurrItem: function(t) {
                        if (0 !== vt) {
                            var e, n = Math.abs(vt);
                            if (!(t && 2 > n)) {
                                r.currItem = Ve(u), xt = !1, Ct("beforeChange", vt), n >= 3 && (d += vt + (vt > 0 ? -3 : 3), n = 3);
                                for (var i = 0; n > i; i++) vt > 0 ? (e = k.shift(), k[2] = e, d++, It((d + 2) * gt.x, e.el.style), r.setContent(e, u - n + i + 1 + 1)) : (e = k.pop(), k.unshift(e), d--, It(d * gt.x, e.el.style), r.setContent(e, u + n - i - 1 - 1));
                                if (et && 1 === Math.abs(vt)) {
                                    var o = Ve(S);
                                    o.initialZoomLevel !== g && (on(o, ht), ln(o), Dt(o))
                                }
                                vt = 0, r.updateCurrZoomItem(), S = u, Ct("afterChange")
                            }
                        }
                    },
                    updateSize: function(e) {
                        if (!yt && a.modal) {
                            var n = o.getScrollY();
                            if (R !== n && (t.style.top = n + "px", R = n), !e && bt.x === window.innerWidth && bt.y === window.innerHeight) return;
                            bt.x = window.innerWidth, bt.y = window.innerHeight, t.style.height = bt.y + "px"
                        }
                        if (ht.x = r.scrollWrap.clientWidth, ht.y = r.scrollWrap.clientHeight, Vt(), gt.x = ht.x + Math.round(ht.x * a.spacing), gt.y = ht.y, Lt(gt.x * ft), Ct("beforeResize"), void 0 !== d) {
                            for (var i, s, l, c = 0; 3 > c; c++) i = k[c], It((c + d) * gt.x, i.el.style), l = u + c - 1, a.loop && Xe() > 2 && (l = St(l)), s = Ve(l), s && (x || s.needsUpdate || !s.bounds) ? (r.cleanSlide(s), r.setContent(i, l), 1 === c && (r.currItem = s, r.updateCurrZoomItem(!0)), s.needsUpdate = !1) : -1 === i.index && l >= 0 && r.setContent(i, l), s && s.container && (on(s, ht), ln(s), Dt(s));
                            x = !1
                        }
                        v = g = r.currItem.initialZoomLevel, tt = r.currItem.bounds, tt && (dt.x = tt.center.x, dt.y = tt.center.y, Nt(!0)), Ct("resize")
                    },
                    zoomTo: function(t, e, n, i, r) {
                        e && (v = g, me.x = Math.abs(e.x) - dt.x, me.y = Math.abs(e.y) - dt.y, Mt(pt, dt));
                        var a = Bt(t, !1),
                            s = {};
                        zt("x", a, s, t), zt("y", a, s, t);
                        var l = g,
                            c = {
                                x: dt.x,
                                y: dt.y
                            };
                        Rt(s);
                        var u = function(e) {
                            1 === e ? (g = t, dt.x = s.x, dt.y = s.y) : (g = (t - l) * e + l, dt.x = (s.x - c.x) * e + c.x, dt.y = (s.y - c.y) * e + c.y), r && r(e), Nt(1 === e)
                        };
                        n ? te("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, u) : u(1)
                    }
                },
                ne = {},
                ie = {},
                oe = {},
                re = {},
                ae = {},
                se = [],
                le = {},
                ce = [],
                ue = {},
                pe = 0,
                de = ct(),
                he = 0,
                fe = ct(),
                me = ct(),
                ge = ct(),
                ve = function(t, e) {
                    return t.x === e.x && t.y === e.y
                },
                ye = function(t, e) {
                    return Math.abs(t.x - e.x) < 25 && Math.abs(t.y - e.y) < 25
                },
                we = function(t, e) {
                    return ue.x = Math.abs(t.x - e.x), ue.y = Math.abs(t.y - e.y), Math.sqrt(ue.x * ue.x + ue.y * ue.y)
                },
                be = function() {
                    V && (I(V), V = null)
                },
                xe = function() {
                    z && (V = D(xe), Fe())
                },
                ke = function() {
                    return !("fit" === a.scaleMode && g === r.currItem.initialZoomLevel)
                },
                Se = function(t, e) {
                    return !(!t || t === document) && (!(t.getAttribute("class") && t.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (e(t) ? t : Se(t.parentNode, e)))
                },
                Te = {},
                _e = function(t, e) {
                    return Te.prevent = !Se(t.target, a.isClickableElement), Ct("preventDragEvent", t, e, Te), Te.prevent
                },
                Ce = function(t, e) {
                    return e.x = t.pageX, e.y = t.pageY, e.id = t.identifier, e
                },
                Ee = function(t, e, n) {
                    n.x = .5 * (t.x + e.x), n.y = .5 * (t.y + e.y)
                },
                Ae = function(t, e, n) {
                    if (t - H > 50) {
                        var i = ce.length > 2 ? ce.shift() : {};
                        i.x = e, i.y = n, ce.push(i), H = t
                    }
                },
                Pe = function() {
                    var t = dt.y - r.currItem.initialPosition.y;
                    return 1 - Math.abs(t / (ht.y / 2))
                },
                Ne = {},
                De = {},
                Ie = [],
                Le = function(t) {
                    for (; Ie.length > 0;) Ie.pop();
                    return P ? (lt = 0, se.forEach(function(t) {
                        0 === lt ? Ie[0] = t : 1 === lt && (Ie[1] = t), lt++
                    })) : t.type.indexOf("touch") > -1 ? t.touches && t.touches.length > 0 && (Ie[0] = Ce(t.touches[0], Ne), t.touches.length > 1 && (Ie[1] = Ce(t.touches[1], De))) : (Ne.x = t.pageX, Ne.y = t.pageY, Ne.id = "", Ie[0] = Ne), Ie
                },
                Oe = function(t, e) {
                    var n, i, o, s, l = dt[t] + e[t],
                        c = e[t] > 0,
                        u = fe.x + e.x,
                        p = fe.x - le.x;
                    return n = l > tt.min[t] || l < tt.max[t] ? a.panEndFriction : 1, l = dt[t] + e[t] * n, !a.allowPanToNext && g !== r.currItem.initialZoomLevel || (et ? "h" !== it || "x" !== t || K || (c ? (l > tt.min[t] && (n = a.panEndFriction, tt.min[t] - l, i = tt.min[t] - pt[t]), (0 >= i || 0 > p) && Xe() > 1 ? (s = u, 0 > p && u > le.x && (s = le.x)) : tt.min.x !== tt.max.x && (o = l)) : (l < tt.max[t] && (n = a.panEndFriction, l - tt.max[t], i = pt[t] - tt.max[t]), (0 >= i || p > 0) && Xe() > 1 ? (s = u, p > 0 && u < le.x && (s = le.x)) : tt.min.x !== tt.max.x && (o = l))) : s = u, "x" !== t) ? void(nt || X || g > r.currItem.fitRatio && (dt[t] += e[t] * n)) : (void 0 !== s && (Lt(s, !0), X = s !== le.x), tt.min.x !== tt.max.x && (void 0 !== o ? dt.x = o : X || (dt.x += e.x * n)), void 0 !== s)
                },
                Me = function(t) {
                    if (!("mousedown" === t.type && t.button > 0)) {
                        if (Ze) return void t.preventDefault();
                        if (!W || "mousedown" !== t.type) {
                            if (_e(t, !0) && t.preventDefault(), Ct("pointerDown"), P) {
                                var e = o.arraySearch(se, t.pointerId, "id");
                                0 > e && (e = se.length), se[e] = {
                                    x: t.pageX,
                                    y: t.pageY,
                                    id: t.pointerId
                                }
                            }
                            var n = Le(t),
                                i = n.length;
                            G = null, Jt(), z && 1 !== i || (z = ot = !0, o.bind(window, h, r), B = st = rt = q = X = Z = U = K = !1, it = null, Ct("firstTouchStart", n), Mt(pt, dt), ut.x = ut.y = 0, Mt(re, n[0]), Mt(ae, re), le.x = gt.x * ft, ce = [{
                                x: re.x,
                                y: re.y
                            }], H = j = Et(), Bt(g, !0), be(), xe()), !Y && i > 1 && !nt && !X && (v = g, K = !1, Y = U = !0, ut.y = ut.x = 0, Mt(pt, dt), Mt(ne, n[0]), Mt(ie, n[1]), Ee(ne, ie, ge), me.x = Math.abs(ge.x) - dt.x, me.y = Math.abs(ge.y) - dt.y, Q = J = we(ne, ie))
                        }
                    }
                },
                Re = function(t) {
                    if (t.preventDefault(), P) {
                        var e = o.arraySearch(se, t.pointerId, "id");
                        if (e > -1) {
                            var n = se[e];
                            n.x = t.pageX, n.y = t.pageY
                        }
                    }
                    if (z) {
                        var i = Le(t);
                        if (it || Z || Y) G = i;
                        else if (fe.x !== gt.x * ft) it = "h";
                        else {
                            var r = Math.abs(i[0].x - re.x) - Math.abs(i[0].y - re.y);
                            Math.abs(r) >= 10 && (it = r > 0 ? "h" : "v", G = i)
                        }
                    }
                },
                Fe = function() {
                    if (G) {
                        var t = G.length;
                        if (0 !== t)
                            if (Mt(ne, G[0]), oe.x = ne.x - re.x, oe.y = ne.y - re.y, Y && t > 1) {
                                if (re.x = ne.x, re.y = ne.y, !oe.x && !oe.y && ve(G[1], ie)) return;
                                Mt(ie, G[1]), K || (K = !0, Ct("zoomGestureStarted"));
                                var e = we(ne, ie),
                                    n = qe(e);
                                n > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (st = !0);
                                var i = 1,
                                    o = qt(),
                                    s = Wt();
                                if (o > n)
                                    if (a.pinchToClose && !st && v <= r.currItem.initialZoomLevel) {
                                        var l = o - n,
                                            c = 1 - l / (o / 1.2);
                                        At(c), Ct("onPinchClose", c), rt = !0
                                    } else i = (o - n) / o, i > 1 && (i = 1), n = o - i * (o / 3);
                                else n > s && (i = (n - s) / (6 * o), i > 1 && (i = 1), n = s + i * o);
                                0 > i && (i = 0), Q = e, Ee(ne, ie, de), ut.x += de.x - ge.x, ut.y += de.y - ge.y, Mt(ge, de), dt.x = Ot("x", n), dt.y = Ot("y", n), B = n > g, g = n, Nt()
                            } else {
                                if (!it) return;
                                if (ot && (ot = !1, Math.abs(oe.x) >= 10 && (oe.x -= G[0].x - ae.x), Math.abs(oe.y) >= 10 && (oe.y -= G[0].y - ae.y)), re.x = ne.x, re.y = ne.y, 0 === oe.x && 0 === oe.y) return;
                                if ("v" === it && a.closeOnVerticalDrag && !ke()) {
                                    ut.y += oe.y, dt.y += oe.y;
                                    var u = Pe();
                                    return q = !0, Ct("onVerticalDrag", u), At(u), void Nt()
                                }
                                Ae(Et(), ne.x, ne.y), Z = !0, tt = r.currItem.bounds;
                                var p = Oe("x", oe);
                                p || (Oe("y", oe), Rt(dt), Nt())
                            }
                    }
                },
                je = function(t) {
                    if (F.isOldAndroid) {
                        if (W && "mouseup" === t.type) return;
                        t.type.indexOf("touch") > -1 && (clearTimeout(W), W = setTimeout(function() {
                            W = 0
                        }, 600))
                    }
                    Ct("pointerUp"), _e(t, !1) && t.preventDefault();
                    var e;
                    if (P) {
                        var n = o.arraySearch(se, t.pointerId, "id");
                        if (n > -1)
                            if (e = se.splice(n, 1)[0], navigator.pointerEnabled) e.type = t.pointerType || "mouse";
                            else {
                                var i = {
                                    4: "mouse",
                                    2: "touch",
                                    3: "pen"
                                };
                                e.type = i[t.pointerType], e.type || (e.type = t.pointerType || "mouse")
                            }
                    }
                    var s, l = Le(t),
                        c = l.length;
                    if ("mouseup" === t.type && (c = 0), 2 === c) return G = null, !0;
                    1 === c && Mt(ae, l[0]), 0 !== c || it || nt || (e || ("mouseup" === t.type ? e = {
                        x: t.pageX,
                        y: t.pageY,
                        type: "mouse"
                    } : t.changedTouches && t.changedTouches[0] && (e = {
                        x: t.changedTouches[0].pageX,
                        y: t.changedTouches[0].pageY,
                        type: "touch"
                    })), Ct("touchRelease", t, e));
                    var u = -1;
                    if (0 === c && (z = !1, o.unbind(window, h, r), be(), Y ? u = 0 : -1 !== he && (u = Et() - he)), he = 1 === c ? Et() : -1, s = -1 !== u && 150 > u ? "zoom" : "swipe", Y && 2 > c && (Y = !1, 1 === c && (s = "zoomPointerUp"), Ct("zoomGestureEnded")), G = null, Z || K || nt || q)
                        if (Jt(), $ || ($ = He()), $.calculateSwipeSpeed("x"), q) {
                            var p = Pe();
                            if (p < a.verticalDragRange) r.close();
                            else {
                                var d = dt.y,
                                    f = at;
                                te("verticalDrag", 0, 1, 300, o.easing.cubic.out, function(t) {
                                    dt.y = (r.currItem.initialPosition.y - d) * t + d, At((1 - f) * t + f), Nt()
                                }), Ct("onVerticalDrag", 1)
                            }
                        } else {
                            if ((X || nt) && 0 === c) {
                                var m = Be(s, $);
                                if (m) return;
                                s = "zoomPointerUp"
                            }
                            if (!nt) return "swipe" !== s ? void We() : void(!X && g > r.currItem.fitRatio && $e($))
                        }
                },
                He = function() {
                    var t, e, n = {
                        lastFlickOffset: {},
                        lastFlickDist: {},
                        lastFlickSpeed: {},
                        slowDownRatio: {},
                        slowDownRatioReverse: {},
                        speedDecelerationRatio: {},
                        speedDecelerationRatioAbs: {},
                        distanceOffset: {},
                        backAnimDestination: {},
                        backAnimStarted: {},
                        calculateSwipeSpeed: function(i) {
                            ce.length > 1 ? (t = Et() - H + 50, e = ce[ce.length - 2][i]) : (t = Et() - j, e = ae[i]), n.lastFlickOffset[i] = re[i] - e, n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]), n.lastFlickDist[i] > 20 ? n.lastFlickSpeed[i] = n.lastFlickOffset[i] / t : n.lastFlickSpeed[i] = 0, Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0), n.slowDownRatio[i] = .95, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatio[i] = 1
                        },
                        calculateOverBoundsAnimOffset: function(t, e) {
                            n.backAnimStarted[t] || (dt[t] > tt.min[t] ? n.backAnimDestination[t] = tt.min[t] : dt[t] < tt.max[t] && (n.backAnimDestination[t] = tt.max[t]), void 0 !== n.backAnimDestination[t] && (n.slowDownRatio[t] = .7, n.slowDownRatioReverse[t] = 1 - n.slowDownRatio[t], n.speedDecelerationRatioAbs[t] < .05 && (n.lastFlickSpeed[t] = 0, n.backAnimStarted[t] = !0, te("bounceZoomPan" + t, dt[t], n.backAnimDestination[t], e || 300, o.easing.sine.out, function(e) {
                                dt[t] = e, Nt()
                            }))))
                        },
                        calculateAnimOffset: function(t) {
                            n.backAnimStarted[t] || (n.speedDecelerationRatio[t] = n.speedDecelerationRatio[t] * (n.slowDownRatio[t] + n.slowDownRatioReverse[t] - n.slowDownRatioReverse[t] * n.timeDiff / 10), n.speedDecelerationRatioAbs[t] = Math.abs(n.lastFlickSpeed[t] * n.speedDecelerationRatio[t]), n.distanceOffset[t] = n.lastFlickSpeed[t] * n.speedDecelerationRatio[t] * n.timeDiff, dt[t] += n.distanceOffset[t])
                        },
                        panAnimLoop: function() {
                            return Xt.zoomPan && (Xt.zoomPan.raf = D(n.panAnimLoop), n.now = Et(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), Nt(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05) ? (dt.x = Math.round(dt.x), dt.y = Math.round(dt.y), Nt(), void Yt("zoomPan")) : void 0
                        }
                    };
                    return n
                },
                $e = function(t) {
                    return t.calculateSwipeSpeed("y"), tt = r.currItem.bounds, t.backAnimDestination = {}, t.backAnimStarted = {}, Math.abs(t.lastFlickSpeed.x) <= .05 && Math.abs(t.lastFlickSpeed.y) <= .05 ? (t.speedDecelerationRatioAbs.x = t.speedDecelerationRatioAbs.y = 0, t.calculateOverBoundsAnimOffset("x"), t.calculateOverBoundsAnimOffset("y"), !0) : (Qt("zoomPan"), t.lastNow = Et(), void t.panAnimLoop())
                },
                Be = function(t, e) {
                    var n;
                    nt || (pe = u);
                    var i;
                    if ("swipe" === t) {
                        var s = re.x - ae.x,
                            l = e.lastFlickDist.x < 10;
                        s > 30 && (l || e.lastFlickOffset.x > 20) ? i = -1 : -30 > s && (l || e.lastFlickOffset.x < -20) && (i = 1)
                    }
                    var c;
                    i && (u += i, 0 > u ? (u = a.loop ? Xe() - 1 : 0, c = !0) : u >= Xe() && (u = a.loop ? 0 : Xe() - 1, c = !0), (!c || a.loop) && (vt += i, ft -= i, n = !0));
                    var p, d = gt.x * ft,
                        h = Math.abs(d - fe.x);
                    return n || d > fe.x == e.lastFlickSpeed.x > 0 ? (p = Math.abs(e.lastFlickSpeed.x) > 0 ? h / Math.abs(e.lastFlickSpeed.x) : 333, p = Math.min(p, 400), p = Math.max(p, 250)) : p = 333, pe === u && (n = !1), nt = !0, Ct("mainScrollAnimStart"), te("mainScroll", fe.x, d, p, o.easing.cubic.out, Lt, function() {
                        Jt(), nt = !1, pe = -1, (n || pe !== u) && r.updateCurrItem(), Ct("mainScrollAnimComplete")
                    }), n && r.updateCurrItem(!0), n
                },
                qe = function(t) {
                    return 1 / J * t * v
                },
                We = function() {
                    var t = g,
                        e = qt(),
                        n = Wt();
                    e > g ? t = e : g > n && (t = n);
                    var i, a = at;
                    return rt && !B && !st && e > g ? (r.close(), !0) : (rt && (i = function(t) {
                        At((1 - a) * t + a)
                    }), r.zoomTo(t, 0, 200, o.easing.cubic.out, i), !0)
                };
            kt("Gestures", {
                publicMethods: {
                    initGestures: function() {
                        var t = function(t, e, n, i, o) {
                            T = t + e, _ = t + n, C = t + i, E = o ? t + o : ""
                        };
                        P = F.pointerEvent, P && F.touch && (F.touch = !1), P ? navigator.pointerEnabled ? t("pointer", "down", "move", "up", "cancel") : t("MSPointer", "Down", "Move", "Up", "Cancel") : F.touch ? (t("touch", "start", "move", "end", "cancel"), N = !0) : t("mouse", "down", "move", "up"), h = _ + " " + C + " " + E, f = T, P && !N && (N = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), r.likelyTouchDevice = N, m[T] = Me, m[_] = Re, m[C] = je, E && (m[E] = m[C]), F.touch && (f += " mousedown", h += " mousemove mouseup", m.mousedown = m[T], m.mousemove = m[_], m.mouseup = m[C]), N || (a.allowPanToNext = !1)
                    }
                }
            });
            var ze, Ue, Ke, Ze, Ve, Xe, Ge, Ye = function(e, n, i, s) {
                    ze && clearTimeout(ze), Ze = !0, Ke = !0;
                    var l;
                    e.initialLayout ? (l = e.initialLayout, e.initialLayout = null) : l = a.getThumbBoundsFn && a.getThumbBoundsFn(u);
                    var p = i ? a.hideAnimationDuration : a.showAnimationDuration,
                        d = function() {
                            Yt("initialZoom"), i ? (r.template.removeAttribute("style"), r.bg.removeAttribute("style")) : (At(1), n && (n.style.display = "block"), o.addClass(t, "pswp--animated-in"), Ct("initialZoom" + (i ? "OutEnd" : "InEnd"))), s && s(), Ze = !1
                        };
                    if (!p || !l || void 0 === l.x) return Ct("initialZoom" + (i ? "Out" : "In")), g = e.initialZoomLevel, Mt(dt, e.initialPosition), Nt(), t.style.opacity = i ? 0 : 1, At(1), void(p ? setTimeout(function() {
                        d()
                    }, p) : d());
                    ! function() {
                        var n = c,
                            s = !r.currItem.src || r.currItem.loadError || a.showHideOpacity;
                        e.miniImg && (e.miniImg.style.webkitBackfaceVisibility = "hidden"), i || (g = l.w / e.w, dt.x = l.x, dt.y = l.y - O, r[s ? "template" : "bg"].style.opacity = .001, Nt()), Qt("initialZoom"), i && !n && o.removeClass(t, "pswp--animated-in"), s && (i ? o[(n ? "remove" : "add") + "Class"](t, "pswp--animate_opacity") : setTimeout(function() {
                            o.addClass(t, "pswp--animate_opacity")
                        }, 30)), ze = setTimeout(function() {
                            if (Ct("initialZoom" + (i ? "Out" : "In")), i) {
                                var r = l.w / e.w,
                                    a = {
                                        x: dt.x,
                                        y: dt.y
                                    },
                                    c = g,
                                    u = at,
                                    h = function(e) {
                                        1 === e ? (g = r, dt.x = l.x, dt.y = l.y - R) : (g = (r - c) * e + c, dt.x = (l.x - a.x) * e + a.x, dt.y = (l.y - R - a.y) * e + a.y), Nt(), s ? t.style.opacity = 1 - e : At(u - e * u)
                                    };
                                n ? te("initialZoom", 0, 1, p, o.easing.cubic.out, h, d) : (h(1), ze = setTimeout(d, p + 20))
                            } else g = e.initialZoomLevel, Mt(dt, e.initialPosition), Nt(), At(1), s ? t.style.opacity = 1 : At(1), ze = setTimeout(d, p + 20)
                        }, i ? 25 : 90)
                    }()
                },
                Qe = {},
                Je = [],
                tn = {
                    index: 0,
                    errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                    forceProgressiveLoading: !1,
                    preload: [1, 1],
                    getNumItemsFn: function() {
                        return Ue.length
                    }
                },
                en = function() {
                    return {
                        center: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        },
                        min: {
                            x: 0,
                            y: 0
                        }
                    }
                },
                nn = function(t, e, n) {
                    var i = t.bounds;
                    i.center.x = Math.round((Qe.x - e) / 2), i.center.y = Math.round((Qe.y - n) / 2) + t.vGap.top, i.max.x = e > Qe.x ? Math.round(Qe.x - e) : i.center.x, i.max.y = n > Qe.y ? Math.round(Qe.y - n) + t.vGap.top : i.center.y, i.min.x = e > Qe.x ? 0 : i.center.x, i.min.y = n > Qe.y ? t.vGap.top : i.center.y
                },
                on = function(t, e, n) {
                    if (t.src && !t.loadError) {
                        var i = !n;
                        if (i && (t.vGap || (t.vGap = {
                                top: 0,
                                bottom: 0
                            }), Ct("parseVerticalMargin", t)), Qe.x = e.x, Qe.y = e.y - t.vGap.top - t.vGap.bottom, i) {
                            var o = Qe.x / t.w,
                                r = Qe.y / t.h;
                            t.fitRatio = r > o ? o : r;
                            var s = a.scaleMode;
                            "orig" === s ? n = 1 : "fit" === s && (n = t.fitRatio), n > 1 && (n = 1), t.initialZoomLevel = n, t.bounds || (t.bounds = en())
                        }
                        if (!n) return;
                        return nn(t, t.w * n, t.h * n), i && n === t.initialZoomLevel && (t.initialPosition = t.bounds.center), t.bounds
                    }
                    return t.w = t.h = 0, t.initialZoomLevel = t.fitRatio = 1, t.bounds = en(), t.initialPosition = t.bounds.center, t.bounds
                },
                rn = function(t, e, n, i, o, a) {
                    e.loadError || i && (e.imageAppended = !0, ln(e, i, e === r.currItem && xt), n.appendChild(i), a && setTimeout(function() {
                        e && e.loaded && e.placeholder && (e.placeholder.style.display = "none", e.placeholder = null)
                    }, 500))
                },
                an = function(t) {
                    t.loading = !0, t.loaded = !1;
                    var e = t.img = o.createEl("pswp__img", "img"),
                        n = function() {
                            t.loading = !1, t.loaded = !0, t.loadComplete ? t.loadComplete(t) : t.img = null, e.onload = e.onerror = null, e = null
                        };
                    return e.onload = n, e.onerror = function() {
                        t.loadError = !0, n()
                    }, e.src = t.src, e
                },
                sn = function(t, e) {
                    return t.src && t.loadError && t.container ? (e && (t.container.innerHTML = ""), t.container.innerHTML = a.errorMsg.replace("%url%", t.src), !0) : void 0
                },
                ln = function(t, e, n) {
                    if (t.src) {
                        e || (e = t.container.lastChild);
                        var i = n ? t.w : Math.round(t.w * t.fitRatio),
                            o = n ? t.h : Math.round(t.h * t.fitRatio);
                        t.placeholder && !t.loaded && (t.placeholder.style.width = i + "px", t.placeholder.style.height = o + "px"), e.style.width = i + "px", e.style.height = o + "px"
                    }
                },
                cn = function() {
                    if (Je.length) {
                        for (var t, e = 0; e < Je.length; e++) t = Je[e], t.holder.index === t.index && rn(t.index, t.item, t.baseDiv, t.img, 0, t.clearPlaceholder);
                        Je = []
                    }
                };
            kt("Controller", {
                publicMethods: {
                    lazyLoadItem: function(t) {
                        t = St(t);
                        var e = Ve(t);
                        e && (!e.loaded && !e.loading || x) && (Ct("gettingData", t, e), e.src && an(e))
                    },
                    initController: function() {
                        o.extend(a, tn, !0), r.items = Ue = n, Ve = r.getItemAt, Xe = a.getNumItemsFn, Ge = a.loop, Xe() < 3 && (a.loop = !1), _t("beforeChange", function(t) {
                            var e, n = a.preload,
                                i = null === t || t >= 0,
                                o = Math.min(n[0], Xe()),
                                s = Math.min(n[1], Xe());
                            for (e = 1;
                                (i ? s : o) >= e; e++) r.lazyLoadItem(u + e);
                            for (e = 1;
                                (i ? o : s) >= e; e++) r.lazyLoadItem(u - e)
                        }), _t("initialLayout", function() {
                            r.currItem.initialLayout = a.getThumbBoundsFn && a.getThumbBoundsFn(u)
                        }), _t("mainScrollAnimComplete", cn), _t("initialZoomInEnd", cn), _t("destroy", function() {
                            for (var t, e = 0; e < Ue.length; e++) t = Ue[e], t.container && (t.container = null), t.placeholder && (t.placeholder = null), t.img && (t.img = null), t.preloader && (t.preloader = null), t.loadError && (t.loaded = t.loadError = !1);
                            Je = null
                        })
                    },
                    getItemAt: function(t) {
                        return t >= 0 && void 0 !== Ue[t] && Ue[t]
                    },
                    allowProgressiveImg: function() {
                        return a.forceProgressiveLoading || !N || a.mouseUsed || screen.width > 1200
                    },
                    setContent: function(t, e) {
                        a.loop && (e = St(e));
                        var n = r.getItemAt(t.index);
                        n && (n.container = null);
                        var i, l = r.getItemAt(e);
                        if (!l) return void(t.el.innerHTML = "");
                        Ct("gettingData", e, l), t.index = e, t.item = l;
                        var c = l.container = o.createEl("pswp__zoom-wrap");
                        if (!l.src && l.html && (l.html.tagName ? c.appendChild(l.html) : c.innerHTML = l.html), sn(l), on(l, ht), !l.src || l.loadError || l.loaded) l.src && !l.loadError && (i = o.createEl("pswp__img", "img"), i.style.opacity = 1, i.src = l.src, ln(l, i), rn(0, l, c, i));
                        else {
                            if (l.loadComplete = function(n) {
                                    if (s) {
                                        if (t && t.index === e) {
                                            if (sn(n, !0)) return n.loadComplete = n.img = null, on(n, ht), Dt(n), void(t.index === u && r.updateCurrZoomItem());
                                            n.imageAppended ? !Ze && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : F.transform && (nt || Ze) ? Je.push({
                                                item: n,
                                                baseDiv: c,
                                                img: n.img,
                                                index: e,
                                                holder: t,
                                                clearPlaceholder: !0
                                            }) : rn(0, n, c, n.img, 0, !0)
                                        }
                                        n.loadComplete = null, n.img = null, Ct("imageLoadComplete", e, n)
                                    }
                                }, o.features.transform) {
                                var p = "pswp__img pswp__img--placeholder";
                                p += l.msrc ? "" : " pswp__img--placeholder--blank";
                                var d = o.createEl(p, l.msrc ? "img" : "");
                                l.msrc && (d.src = l.msrc), ln(l, d), c.appendChild(d), l.placeholder = d
                            }
                            l.loading || an(l), r.allowProgressiveImg() && (!Ke && F.transform ? Je.push({
                                item: l,
                                baseDiv: c,
                                img: l.img,
                                index: e,
                                holder: t
                            }) : rn(0, l, c, l.img, 0, !0))
                        }
                        Ke || e !== u ? Dt(l) : (et = c.style, Ye(l, i || l.img)), t.el.innerHTML = "", t.el.appendChild(c)
                    },
                    cleanSlide: function(t) {
                        t.img && (t.img.onload = t.img.onerror = null), t.loaded = t.loading = t.img = t.imageAppended = !1
                    }
                }
            });
            var un, pn = {},
                dn = function(t, e, n) {
                    var i = document.createEvent("CustomEvent"),
                        o = {
                            origEvent: t,
                            target: t.target,
                            releasePoint: e,
                            pointerType: n || "touch"
                        };
                    i.initCustomEvent("pswpTap", !0, !0, o), t.target.dispatchEvent(i)
                };
            kt("Tap", {
                publicMethods: {
                    initTap: function() {
                        _t("firstTouchStart", r.onTapStart), _t("touchRelease", r.onTapRelease), _t("destroy", function() {
                            pn = {}, un = null
                        })
                    },
                    onTapStart: function(t) {
                        t.length > 1 && (clearTimeout(un), un = null)
                    },
                    onTapRelease: function(t, e) {
                        if (e && !Z && !U && !Gt) {
                            var n = e;
                            if (un && (clearTimeout(un), un = null, ye(n, pn))) return void Ct("doubleTap", n);
                            if ("mouse" === e.type) return void dn(t, e, "mouse");
                            if ("BUTTON" === t.target.tagName.toUpperCase() || o.hasClass(t.target, "pswp__single-tap")) return void dn(t, e);
                            Mt(pn, n), un = setTimeout(function() {
                                dn(t, e), un = null
                            }, 300)
                        }
                    }
                }
            });
            var hn;
            kt("DesktopZoom", {
                publicMethods: {
                    initDesktopZoom: function() {
                        M || (N ? _t("mouseUsed", function() {
                            r.setupDesktopZoom()
                        }) : r.setupDesktopZoom(!0))
                    },
                    setupDesktopZoom: function(e) {
                        hn = {};
                        var n = "wheel mousewheel DOMMouseScroll";
                        _t("bindEvents", function() {
                            o.bind(t, n, r.handleMouseWheel)
                        }), _t("unbindEvents", function() {
                            hn && o.unbind(t, n, r.handleMouseWheel)
                        }), r.mouseZoomedIn = !1;
                        var i, a = function() {
                                r.mouseZoomedIn && (o.removeClass(t, "pswp--zoomed-in"), r.mouseZoomedIn = !1), 1 > g ? o.addClass(t, "pswp--zoom-allowed") : o.removeClass(t, "pswp--zoom-allowed"), s()
                            },
                            s = function() {
                                i && (o.removeClass(t, "pswp--dragging"), i = !1)
                            };
                        _t("resize", a), _t("afterChange", a), _t("pointerDown", function() {
                            r.mouseZoomedIn && (i = !0, o.addClass(t, "pswp--dragging"))
                        }), _t("pointerUp", s), e || a()
                    },
                    handleMouseWheel: function(t) {
                        if (g <= r.currItem.fitRatio) return a.modal && (!a.closeOnScroll || Gt || z ? t.preventDefault() : A && Math.abs(t.deltaY) > 2 && (c = !0, r.close())), !0;
                        if (t.stopPropagation(), hn.x = 0, "deltaX" in t) 1 === t.deltaMode ? (hn.x = 18 * t.deltaX, hn.y = 18 * t.deltaY) : (hn.x = t.deltaX, hn.y = t.deltaY);
                        else if ("wheelDelta" in t) t.wheelDeltaX && (hn.x = -.16 * t.wheelDeltaX), t.wheelDeltaY ? hn.y = -.16 * t.wheelDeltaY : hn.y = -.16 * t.wheelDelta;
                        else {
                            if (!("detail" in t)) return;
                            hn.y = t.detail
                        }
                        Bt(g, !0);
                        var e = dt.x - hn.x,
                            n = dt.y - hn.y;
                        (a.modal || e <= tt.min.x && e >= tt.max.x && n <= tt.min.y && n >= tt.max.y) && t.preventDefault(), r.panTo(e, n)
                    },
                    toggleDesktopZoom: function(e) {
                        e = e || {
                            x: ht.x / 2 + mt.x,
                            y: ht.y / 2 + mt.y
                        };
                        var n = a.getDoubleTapZoom(!0, r.currItem),
                            i = g === n;
                        r.mouseZoomedIn = !i, r.zoomTo(i ? r.currItem.initialZoomLevel : n, e, 333), o[(i ? "remove" : "add") + "Class"](t, "pswp--zoomed-in")
                    }
                }
            });
            var fn, mn, gn, vn, yn, wn, bn, xn, kn, Sn, Tn, _n, Cn = {
                    history: !0,
                    galleryUID: 1
                },
                En = function() {
                    return Tn.hash.substring(1)
                },
                An = function() {
                    fn && clearTimeout(fn), gn && clearTimeout(gn)
                },
                Pn = function() {
                    var t = En(),
                        e = {};
                    if (t.length < 5) return e;
                    var n, i = t.split("&");
                    for (n = 0; n < i.length; n++)
                        if (i[n]) {
                            var o = i[n].split("=");
                            o.length < 2 || (e[o[0]] = o[1])
                        } if (a.galleryPIDs) {
                        var r = e.pid;
                        for (e.pid = 0, n = 0; n < Ue.length; n++)
                            if (Ue[n].pid === r) {
                                e.pid = n;
                                break
                            }
                    } else e.pid = parseInt(e.pid, 10) - 1;
                    return e.pid < 0 && (e.pid = 0), e
                },
                Nn = function() {
                    if (gn && clearTimeout(gn), Gt || z) return void(gn = setTimeout(Nn, 500));
                    vn ? clearTimeout(mn) : vn = !0;
                    var t = u + 1,
                        e = Ve(u);
                    e.hasOwnProperty("pid") && (t = e.pid);
                    var n = bn + "&gid=" + a.galleryUID + "&pid=" + t;
                    xn || -1 === Tn.hash.indexOf(n) && (Sn = !0);
                    var i = Tn.href.split("#")[0] + "#" + n;
                    _n ? "#" + n !== window.location.hash && history[xn ? "replaceState" : "pushState"]("", document.title, i) : xn ? Tn.replace(i) : Tn.hash = n, xn = !0, mn = setTimeout(function() {
                        vn = !1
                    }, 60)
                };
            kt("History", {
                publicMethods: {
                    initHistory: function() {
                        if (o.extend(a, Cn, !0), a.history) {
                            Tn = window.location, Sn = !1, kn = !1, xn = !1, bn = En(), _n = "pushState" in history, bn.indexOf("gid=") > -1 && (bn = bn.split("&gid=")[0], bn = bn.split("?gid=")[0]), _t("afterChange", r.updateURL), _t("unbindEvents", function() {
                                o.unbind(window, "hashchange", r.onHashChange)
                            });
                            var t = function() {
                                wn = !0, kn || (Sn ? history.back() : bn ? Tn.hash = bn : _n ? history.pushState("", document.title, Tn.pathname + Tn.search) : Tn.hash = ""), An()
                            };
                            _t("unbindEvents", function() {
                                c && t()
                            }), _t("destroy", function() {
                                wn || t()
                            }), _t("firstUpdate", function() {
                                u = Pn().pid
                            });
                            var e = bn.indexOf("pid=");
                            e > -1 && (bn = bn.substring(0, e), "&" === bn.slice(-1) && (bn = bn.slice(0, -1))), setTimeout(function() {
                                s && o.bind(window, "hashchange", r.onHashChange)
                            }, 40)
                        }
                    },
                    onHashChange: function() {
                        return En() === bn ? (kn = !0, void r.close()) : void(vn || (yn = !0, r.goTo(Pn().pid), yn = !1))
                    },
                    updateURL: function() {
                        An(), yn || (xn ? fn = setTimeout(Nn, 800) : Nn())
                    }
                }
            }), o.extend(r, ee)
        }
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.PhotoSwipeUI_Default = e()
    }(this, function() {
        "use strict";
        return function(t, e) {
            var n, i, o, r, a, s, l, c, u, p, d, h, f, m, g, v, y, w, b, x = this,
                k = !1,
                S = !0,
                T = !0,
                _ = {
                    barsSize: {
                        top: 44,
                        bottom: "auto"
                    },
                    closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                    timeToIdle: 4e3,
                    timeToIdleOutside: 1e3,
                    loadingIndicatorDelay: 1e3,
                    addCaptionHTMLFn: function(t, e) {
                        return t.title ? (e.children[0].innerHTML = t.title, !0) : (e.children[0].innerHTML = "", !1)
                    },
                    closeEl: !0,
                    captionEl: !0,
                    fullscreenEl: !0,
                    zoomEl: !0,
                    shareEl: !0,
                    counterEl: !0,
                    arrowEl: !0,
                    preloaderEl: !0,
                    tapToClose: !1,
                    tapToToggleControls: !0,
                    clickToCloseNonZoomable: !0,
                    shareButtons: [{
                        id: "facebook",
                        label: "Share on Facebook",
                        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                    }, {
                        id: "twitter",
                        label: "Tweet",
                        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                    }, {
                        id: "pinterest",
                        label: "Pin it",
                        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                    }, {
                        id: "download",
                        label: "Download image",
                        url: "{{raw_image_url}}",
                        download: !0
                    }],
                    getImageURLForShare: function() {
                        return t.currItem.src || ""
                    },
                    getPageURLForShare: function() {
                        return window.location.href
                    },
                    getTextForShare: function() {
                        return t.currItem.title || ""
                    },
                    indexIndicatorSep: " / ",
                    fitControlsWidth: 1200
                },
                C = function(t) {
                    if (v) return !0;
                    t = t || window.event, g.timeToIdle && g.mouseUsed && !u && R();
                    for (var n, i, o = t.target || t.srcElement, r = o.getAttribute("class") || "", a = 0; a < z.length; a++) n = z[a], n.onTap && r.indexOf("pswp__" + n.name) > -1 && (n.onTap(), i = !0);
                    if (i) {
                        t.stopPropagation && t.stopPropagation(), v = !0;
                        var s = e.features.isOldAndroid ? 600 : 30;
                        y = setTimeout(function() {
                            v = !1
                        }, s)
                    }
                },
                E = function() {
                    return !t.likelyTouchDevice || g.mouseUsed || screen.width > g.fitControlsWidth
                },
                A = function(t, n, i) {
                    e[(i ? "add" : "remove") + "Class"](t, "pswp__" + n)
                },
                P = function() {
                    var t = 1 === g.getNumItemsFn();
                    t !== m && (A(i, "ui--one-slide", t), m = t)
                },
                N = function() {
                    A(l, "share-modal--hidden", T)
                },
                D = function() {
                    return T = !T, T ? (e.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function() {
                        T && N()
                    }, 300)) : (N(), setTimeout(function() {
                        T || e.addClass(l, "pswp__share-modal--fade-in")
                    }, 30)), T || L(), !1
                },
                I = function(e) {
                    e = e || window.event;
                    var n = e.target || e.srcElement;
                    return t.shout("shareLinkClick", e, n), !!n.href && (!!n.hasAttribute("download") || (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), T || D(), !1))
                },
                L = function() {
                    for (var t, e, n, i, o, r = "", a = 0; a < g.shareButtons.length; a++) t = g.shareButtons[a], n = g.getImageURLForShare(t), i = g.getPageURLForShare(t), o = g.getTextForShare(t), e = t.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(o)), r += '<a href="' + e + '" target="_blank" class="pswp__share--' + t.id + '"' + (t.download ? "download" : "") + ">" + t.label + "</a>", g.parseShareButtonOut && (r = g.parseShareButtonOut(t, r));
                    l.children[0].innerHTML = r, l.children[0].onclick = I
                },
                O = function(t) {
                    for (var n = 0; n < g.closeElClasses.length; n++)
                        if (e.hasClass(t, "pswp__" + g.closeElClasses[n])) return !0
                },
                M = 0,
                R = function() {
                    clearTimeout(b), M = 0, u && x.setIdle(!1)
                },
                F = function(t) {
                    t = t || window.event;
                    var e = t.relatedTarget || t.toElement;
                    e && "HTML" !== e.nodeName || (clearTimeout(b), b = setTimeout(function() {
                        x.setIdle(!0)
                    }, g.timeToIdleOutside))
                },
                j = function() {
                    g.fullscreenEl && !e.features.isOldAndroid && (n || (n = x.getFullscreenAPI()), n ? (e.bind(document, n.eventK, x.updateFullscreen), x.updateFullscreen(), e.addClass(t.template, "pswp--supports-fs")) : e.removeClass(t.template, "pswp--supports-fs"))
                },
                H = function() {
                    g.preloaderEl && ($(!0), p("beforeChange", function() {
                        clearTimeout(f), f = setTimeout(function() {
                            t.currItem && t.currItem.loading ? (!t.allowProgressiveImg() || t.currItem.img && !t.currItem.img.naturalWidth) && $(!1) : $(!0)
                        }, g.loadingIndicatorDelay)
                    }), p("imageLoadComplete", function(e, n) {
                        t.currItem === n && $(!0)
                    }))
                },
                $ = function(t) {
                    h !== t && (A(d, "preloader--active", !t), h = t)
                },
                B = function(t) {
                    var n = t.vGap;
                    if (E()) {
                        var a = g.barsSize;
                        if (g.captionEl && "auto" === a.bottom)
                            if (r || (r = e.createEl("pswp__caption pswp__caption--fake"), r.appendChild(e.createEl("pswp__caption__center")), i.insertBefore(r, o), e.addClass(i, "pswp__ui--fit")), g.addCaptionHTMLFn(t, r, !0)) {
                                var s = r.clientHeight;
                                n.bottom = parseInt(s, 10) || 44
                            } else n.bottom = a.top;
                        else n.bottom = "auto" === a.bottom ? 0 : a.bottom;
                        n.top = a.top
                    } else n.top = n.bottom = 0
                },
                q = function() {
                    g.timeToIdle && p("mouseUsed", function() {
                        e.bind(document, "mousemove", R), e.bind(document, "mouseout", F), w = setInterval(function() {
                            2 === ++M && x.setIdle(!0)
                        }, g.timeToIdle / 2)
                    })
                },
                W = function() {
                    p("onVerticalDrag", function(t) {
                        S && .95 > t ? x.hideControls() : !S && t >= .95 && x.showControls()
                    });
                    var t;
                    p("onPinchClose", function(e) {
                        S && .9 > e ? (x.hideControls(), t = !0) : t && !S && e > .9 && x.showControls()
                    }), p("zoomGestureEnded", function() {
                        (t = !1) && !S && x.showControls()
                    })
                },
                z = [{
                    name: "caption",
                    option: "captionEl",
                    onInit: function(t) {
                        o = t
                    }
                }, {
                    name: "share-modal",
                    option: "shareEl",
                    onInit: function(t) {
                        l = t
                    },
                    onTap: function() {
                        D()
                    }
                }, {
                    name: "button--share",
                    option: "shareEl",
                    onInit: function(t) {
                        s = t
                    },
                    onTap: function() {
                        D()
                    }
                }, {
                    name: "button--zoom",
                    option: "zoomEl",
                    onTap: t.toggleDesktopZoom
                }, {
                    name: "counter",
                    option: "counterEl",
                    onInit: function(t) {
                        a = t
                    }
                }, {
                    name: "button--close",
                    option: "closeEl",
                    onTap: t.close
                }, {
                    name: "button--arrow--left",
                    option: "arrowEl",
                    onTap: t.prev
                }, {
                    name: "button--arrow--right",
                    option: "arrowEl",
                    onTap: t.next
                }, {
                    name: "button--fs",
                    option: "fullscreenEl",
                    onTap: function() {
                        n.isFullscreen() ? n.exit() : n.enter()
                    }
                }, {
                    name: "preloader",
                    option: "preloaderEl",
                    onInit: function(t) {
                        d = t
                    }
                }],
                U = function() {
                    var t, n, o, r = function(i) {
                        if (i)
                            for (var r = i.length, a = 0; r > a; a++) {
                                t = i[a], n = t.className;
                                for (var s = 0; s < z.length; s++) o = z[s], n.indexOf("pswp__" + o.name) > -1 && (g[o.option] ? (e.removeClass(t, "pswp__element--disabled"), o.onInit && o.onInit(t)) : e.addClass(t, "pswp__element--disabled"))
                            }
                    };
                    r(i.children);
                    var a = e.getChildByClass(i, "pswp__top-bar");
                    a && r(a.children)
                };
            x.init = function() {
                e.extend(t.options, _, !0), g = t.options, i = e.getChildByClass(t.scrollWrap, "pswp__ui"), p = t.listen, W(), p("beforeChange", x.update), p("doubleTap", function(e) {
                    var n = t.currItem.initialZoomLevel;
                    t.getZoomLevel() !== n ? t.zoomTo(n, e, 333) : t.zoomTo(g.getDoubleTapZoom(!1, t.currItem), e, 333)
                }), p("preventDragEvent", function(t, e, n) {
                    var i = t.target || t.srcElement;
                    i && i.getAttribute("class") && t.type.indexOf("mouse") > -1 && (i.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent = !1)
                }), p("bindEvents", function() {
                    e.bind(i, "pswpTap click", C), e.bind(t.scrollWrap, "pswpTap", x.onGlobalTap), t.likelyTouchDevice || e.bind(t.scrollWrap, "mouseover", x.onMouseOver)
                }), p("unbindEvents", function() {
                    T || D(), w && clearInterval(w), e.unbind(document, "mouseout", F), e.unbind(document, "mousemove", R), e.unbind(i, "pswpTap click", C), e.unbind(t.scrollWrap, "pswpTap", x.onGlobalTap), e.unbind(t.scrollWrap, "mouseover", x.onMouseOver), n && (e.unbind(document, n.eventK, x.updateFullscreen), n.isFullscreen() && (g.hideAnimationDuration = 0, n.exit()), n = null)
                }), p("destroy", function() {
                    g.captionEl && (r && i.removeChild(r), e.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), e.removeClass(i, "pswp__ui--over-close"), e.addClass(i, "pswp__ui--hidden"), x.setIdle(!1)
                }), g.showAnimationDuration || e.removeClass(i, "pswp__ui--hidden"), p("initialZoomIn", function() {
                    g.showAnimationDuration && e.removeClass(i, "pswp__ui--hidden")
                }), p("initialZoomOut", function() {
                    e.addClass(i, "pswp__ui--hidden")
                }), p("parseVerticalMargin", B), U(), g.shareEl && s && l && (T = !0), P(), q(), j(), H()
            }, x.setIdle = function(t) {
                u = t, A(i, "ui--idle", t)
            }, x.update = function() {
                S && t.currItem ? (x.updateIndexIndicator(), g.captionEl && (g.addCaptionHTMLFn(t.currItem, o), A(o, "caption--empty", !t.currItem.title)), k = !0) : k = !1, T || D(), P()
            }, x.updateFullscreen = function(i) {
                i && setTimeout(function() {
                    t.setScrollOffset(0, e.getScrollY())
                }, 50), e[(n.isFullscreen() ? "add" : "remove") + "Class"](t.template, "pswp--fs")
            }, x.updateIndexIndicator = function() {
                g.counterEl && (a.innerHTML = t.getCurrentIndex() + 1 + g.indexIndicatorSep + g.getNumItemsFn())
            }, x.onGlobalTap = function(n) {
                n = n || window.event;
                var i = n.target || n.srcElement;
                if (!v)
                    if (n.detail && "mouse" === n.detail.pointerType) {
                        if (O(i)) return void t.close();
                        e.hasClass(i, "pswp__img") && (1 === t.getZoomLevel() && t.getZoomLevel() <= t.currItem.fitRatio ? g.clickToCloseNonZoomable && t.close() : t.toggleDesktopZoom(n.detail.releasePoint))
                    } else if (g.tapToToggleControls && (S ? x.hideControls() : x.showControls()), g.tapToClose && (e.hasClass(i, "pswp__img") || O(i))) return void t.close()
            }, x.onMouseOver = function(t) {
                t = t || window.event;
                var e = t.target || t.srcElement;
                A(i, "ui--over-close", O(e))
            }, x.hideControls = function() {
                e.addClass(i, "pswp__ui--hidden"), S = !1
            }, x.showControls = function() {
                S = !0, k || x.update(), e.removeClass(i, "pswp__ui--hidden")
            }, x.supportsFullscreen = function() {
                var t = document;
                return !!(t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen || t.msExitFullscreen)
            }, x.getFullscreenAPI = function() {
                var e, n = document.documentElement,
                    i = "fullscreenchange";
                return n.requestFullscreen ? e = {
                    enterK: "requestFullscreen",
                    exitK: "exitFullscreen",
                    elementK: "fullscreenElement",
                    eventK: i
                } : n.mozRequestFullScreen ? e = {
                    enterK: "mozRequestFullScreen",
                    exitK: "mozCancelFullScreen",
                    elementK: "mozFullScreenElement",
                    eventK: "moz" + i
                } : n.webkitRequestFullscreen ? e = {
                    enterK: "webkitRequestFullscreen",
                    exitK: "webkitExitFullscreen",
                    elementK: "webkitFullscreenElement",
                    eventK: "webkit" + i
                } : n.msRequestFullscreen && (e = {
                    enterK: "msRequestFullscreen",
                    exitK: "msExitFullscreen",
                    elementK: "msFullscreenElement",
                    eventK: "MSFullscreenChange"
                }), e && (e.enter = function() {
                    return c = g.closeOnScroll, g.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? t.template[this.enterK]() : void t.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                }, e.exit = function() {
                    return g.closeOnScroll = c, document[this.exitK]()
                }, e.isFullscreen = function() {
                    return document[this.elementK]
                }), e
            }
        }
    }),
    function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.postscribe = e() : t.postscribe = e()
    }(this, function() {
        return function(t) {
            function e(i) {
                if (n[i]) return n[i].exports;
                var o = n[i] = {
                    exports: {},
                    id: i,
                    loaded: !1
                };
                return t[i].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
            }
            var n = {};
            return e.m = t, e.c = n, e.p = "", e(0)
        }([function(t, e, n) {
            "use strict";
            var i = n(1),
                o = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(i);
            t.exports = o.default
        }, function(t, e, n) {
            "use strict";

            function i() {}

            function o() {
                var t = f.shift();
                if (t) {
                    var e = p.last(t);
                    e.afterDequeue(), t.stream = r.apply(void 0, t), e.afterStreamStart()
                }
            }

            function r(t, e, n) {
                function r(t) {
                    t = n.beforeWrite(t), m.write(t), n.afterWrite(t)
                }
                m = new c.default(t, n), m.id = h++, m.name = n.name || m.id, a.streams[m.name] = m;
                var l = t.ownerDocument,
                    u = {
                        close: l.close,
                        open: l.open,
                        write: l.write,
                        writeln: l.writeln
                    };
                s(l, {
                    close: i,
                    open: i,
                    write: function() {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        return r(e.join(""))
                    },
                    writeln: function() {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        return r(e.join("") + "\n")
                    }
                });
                var p = m.win.onerror || i;
                return m.win.onerror = function(t, e, i) {
                    n.error({
                        msg: t + " - " + e + ": " + i
                    }), p.apply(m.win, [t, e, i])
                }, m.write(e, function() {
                    s(l, u), m.win.onerror = p, n.done(), m = null, o()
                }), m
            }

            function a(t, e, n) {
                if (p.isFunction(n)) n = {
                    done: n
                };
                else if ("clear" === n) return f = [], m = null, void(h = 0);
                n = p.defaults(n, d), t = /^#/.test(t) ? window.document.getElementById(t.substr(1)) : t.jquery ? t[0] : t;
                var r = [t, e, n];
                return t.postscribe = {
                    cancel: function() {
                        r.stream ? r.stream.abort() : r[1] = i
                    }
                }, n.beforeEnqueue(r), f.push(r), m || o(), t.postscribe
            }
            e.__esModule = !0;
            var s = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            };
            e.default = a;
            var l = n(2),
                c = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(l),
                u = n(4),
                p = function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e.default = t, e
                }(u),
                d = {
                    afterAsync: i,
                    afterDequeue: i,
                    afterStreamStart: i,
                    afterWrite: i,
                    autoFix: !0,
                    beforeEnqueue: i,
                    beforeWriteToken: function(t) {
                        return t
                    },
                    beforeWrite: function(t) {
                        return t
                    },
                    done: i,
                    error: function(t) {
                        throw new Error(t.msg)
                    },
                    releaseAsync: !1
                },
                h = 0,
                f = [],
                m = null;
            s(a, {
                streams: {},
                queue: f,
                WriteStream: c.default
            })
        }, function(t, e, n) {
            "use strict";

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function o(t, e) {
                var n = p + e,
                    i = t.getAttribute(n);
                return u.existy(i) ? String(i) : i
            }

            function r(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    i = p + e;
                u.existy(n) && "" !== n ? t.setAttribute(i, n) : t.removeAttribute(i)
            }
            e.__esModule = !0;
            var a = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                    }
                    return t
                },
                s = n(3),
                l = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(s),
                c = n(4),
                u = function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e.default = t, e
                }(c),
                p = "data-ps-",
                d = "ps-style",
                h = "ps-script",
                f = function() {
                    function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        i(this, t), this.root = e, this.options = n, this.doc = e.ownerDocument, this.win = this.doc.defaultView || this.doc.parentWindow, this.parser = new l.default("", {
                            autoFix: n.autoFix
                        }), this.actuals = [e], this.proxyHistory = "", this.proxyRoot = this.doc.createElement(e.nodeName), this.scriptStack = [], this.writeQueue = [], r(this.proxyRoot, "proxyof", 0)
                    }
                    return t.prototype.write = function() {
                        var t;
                        for ((t = this.writeQueue).push.apply(t, arguments); !this.deferredRemote && this.writeQueue.length;) {
                            var e = this.writeQueue.shift();
                            u.isFunction(e) ? this._callFunction(e) : this._writeImpl(e)
                        }
                    }, t.prototype._callFunction = function(t) {
                        var e = {
                            type: "function",
                            value: t.name || t.toString()
                        };
                        this._onScriptStart(e), t.call(this.win, this.doc), this._onScriptDone(e)
                    }, t.prototype._writeImpl = function(t) {
                        this.parser.append(t);
                        for (var e = void 0, n = void 0, i = void 0, o = [];
                            (e = this.parser.readToken()) && !(n = u.isScript(e)) && !(i = u.isStyle(e));)(e = this.options.beforeWriteToken(e)) && o.push(e);
                        o.length > 0 && this._writeStaticTokens(o), n && this._handleScriptToken(e), i && this._handleStyleToken(e)
                    }, t.prototype._writeStaticTokens = function(t) {
                        var e = this._buildChunk(t);
                        return e.actual ? (e.html = this.proxyHistory + e.actual, this.proxyHistory += e.proxy, this.proxyRoot.innerHTML = e.html, this._walkChunk(), e) : null
                    }, t.prototype._buildChunk = function(t) {
                        for (var e = this.actuals.length, n = [], i = [], o = [], r = t.length, a = 0; a < r; a++) {
                            var s = t[a],
                                l = s.toString();
                            if (n.push(l), s.attrs) {
                                if (!/^noscript$/i.test(s.tagName)) {
                                    var c = e++;
                                    i.push(l.replace(/(\/?>)/, " " + p + "id=" + c + " $1")), s.attrs.id !== h && s.attrs.id !== d && o.push("atomicTag" === s.type ? "" : "<" + s.tagName + " " + p + "proxyof=" + c + (s.unary ? " />" : ">"))
                                }
                            } else i.push(l), o.push("endTag" === s.type ? l : "")
                        }
                        return {
                            tokens: t,
                            raw: n.join(""),
                            actual: i.join(""),
                            proxy: o.join("")
                        }
                    }, t.prototype._walkChunk = function() {
                        for (var t = void 0, e = [this.proxyRoot]; u.existy(t = e.shift());) {
                            var n = 1 === t.nodeType;
                            if (!(n && o(t, "proxyof"))) {
                                n && (this.actuals[o(t, "id")] = t, r(t, "id"));
                                var i = t.parentNode && o(t.parentNode, "proxyof");
                                i && this.actuals[i].appendChild(t)
                            }
                            e.unshift.apply(e, u.toArray(t.childNodes))
                        }
                    }, t.prototype._handleScriptToken = function(t) {
                        var e = this,
                            n = this.parser.clear();
                        n && this.writeQueue.unshift(n), t.src = t.attrs.src || t.attrs.SRC, (t = this.options.beforeWriteToken(t)) && (t.src && this.scriptStack.length ? this.deferredRemote = t : this._onScriptStart(t), this._writeScriptToken(t, function() {
                            e._onScriptDone(t)
                        }))
                    }, t.prototype._handleStyleToken = function(t) {
                        var e = this.parser.clear();
                        e && this.writeQueue.unshift(e), t.type = t.attrs.type || t.attrs.TYPE || "text/css", t = this.options.beforeWriteToken(t), t && this._writeStyleToken(t), e && this.write()
                    }, t.prototype._writeStyleToken = function(t) {
                        var e = this._buildStyle(t);
                        this._insertCursor(e, d),
                            t.content && (e.styleSheet && !e.sheet ? e.styleSheet.cssText = t.content : e.appendChild(this.doc.createTextNode(t.content)))
                    }, t.prototype._buildStyle = function(t) {
                        var e = this.doc.createElement(t.tagName);
                        return e.setAttribute("type", t.type), u.eachKey(t.attrs, function(t, n) {
                            e.setAttribute(t, n)
                        }), e
                    }, t.prototype._insertCursor = function(t, e) {
                        this._writeImpl('<span id="' + e + '"/>');
                        var n = this.doc.getElementById(e);
                        n && n.parentNode.replaceChild(t, n)
                    }, t.prototype._onScriptStart = function(t) {
                        t.outerWrites = this.writeQueue, this.writeQueue = [], this.scriptStack.unshift(t)
                    }, t.prototype._onScriptDone = function(t) {
                        return t !== this.scriptStack[0] ? void this.options.error({
                            msg: "Bad script nesting or script finished twice"
                        }) : (this.scriptStack.shift(), this.write.apply(this, t.outerWrites), void(!this.scriptStack.length && this.deferredRemote && (this._onScriptStart(this.deferredRemote), this.deferredRemote = null)))
                    }, t.prototype._writeScriptToken = function(t, e) {
                        var n = this._buildScript(t),
                            i = this._shouldRelease(n),
                            o = this.options.afterAsync;
                        t.src && (n.src = t.src, this._scriptLoadHandler(n, i ? o : function() {
                            e(), o()
                        }));
                        try {
                            this._insertCursor(n, h), n.src && !i || e()
                        } catch (t) {
                            this.options.error(t), e()
                        }
                    }, t.prototype._buildScript = function(t) {
                        var e = this.doc.createElement(t.tagName);
                        return u.eachKey(t.attrs, function(t, n) {
                            e.setAttribute(t, n)
                        }), t.content && (e.text = t.content), e
                    }, t.prototype._scriptLoadHandler = function(t, e) {
                        function n() {
                            t = t.onload = t.onreadystatechange = t.onerror = null
                        }

                        function i() {
                            n(), null != e && e(), e = null
                        }

                        function o(t) {
                            n(), s(t), null != e && e(), e = null
                        }

                        function r(t, e) {
                            var n = t["on" + e];
                            null != n && (t["_on" + e] = n)
                        }
                        var s = this.options.error;
                        r(t, "load"), r(t, "error"), a(t, {
                            onload: function() {
                                if (t._onload) try {
                                    t._onload.apply(this, Array.prototype.slice.call(arguments, 0))
                                } catch (e) {
                                    o({
                                        msg: "onload handler failed " + e + " @ " + t.src
                                    })
                                }
                                i()
                            },
                            onerror: function() {
                                if (t._onerror) try {
                                    t._onerror.apply(this, Array.prototype.slice.call(arguments, 0))
                                } catch (e) {
                                    return void o({
                                        msg: "onerror handler failed " + e + " @ " + t.src
                                    })
                                }
                                o({
                                    msg: "remote script failed " + t.src
                                })
                            },
                            onreadystatechange: function() {
                                /^(loaded|complete)$/.test(t.readyState) && i()
                            }
                        })
                    }, t.prototype._shouldRelease = function(t) {
                        return !/^script$/i.test(t.nodeName) || !!(this.options.releaseAsync && t.src && t.hasAttribute("async"))
                    }, t
                }();
            e.default = f
        }, function(t, e, n) {
            ! function(e, n) {
                t.exports = function() {
                    return function(t) {
                        function e(i) {
                            if (n[i]) return n[i].exports;
                            var o = n[i] = {
                                exports: {},
                                id: i,
                                loaded: !1
                            };
                            return t[i].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
                        }
                        var n = {};
                        return e.m = t, e.c = n, e.p = "", e(0)
                    }([function(t, e, n) {
                        "use strict";
                        var i = n(1),
                            o = function(t) {
                                return t && t.__esModule ? t : {
                                    default: t
                                }
                            }(i);
                        t.exports = o.default
                    }, function(t, e, n) {
                        "use strict";

                        function i(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            return e.default = t, e
                        }

                        function o(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }
                        e.__esModule = !0;
                        var r = n(2),
                            a = i(r),
                            s = n(3),
                            l = i(s),
                            c = n(6),
                            u = function(t) {
                                return t && t.__esModule ? t : {
                                    default: t
                                }
                            }(c),
                            p = n(5),
                            d = {
                                comment: /^<!--/,
                                endTag: /^<\//,
                                atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                                startTag: /^</,
                                chars: /^[^<]/
                            },
                            h = function() {
                                function t() {
                                    var e = this,
                                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    o(this, t), this.stream = n;
                                    var r = !1,
                                        s = {};
                                    for (var l in a) a.hasOwnProperty(l) && (i.autoFix && (s[l + "Fix"] = !0), r = r || s[l + "Fix"]);
                                    r ? (this._readToken = (0, u.default)(this, s, function() {
                                        return e._readTokenImpl()
                                    }), this._peekToken = (0, u.default)(this, s, function() {
                                        return e._peekTokenImpl()
                                    })) : (this._readToken = this._readTokenImpl, this._peekToken = this._peekTokenImpl)
                                }
                                return t.prototype.append = function(t) {
                                    this.stream += t
                                }, t.prototype.prepend = function(t) {
                                    this.stream = t + this.stream
                                }, t.prototype._readTokenImpl = function() {
                                    var t = this._peekTokenImpl();
                                    if (t) return this.stream = this.stream.slice(t.length), t
                                }, t.prototype._peekTokenImpl = function() {
                                    for (var t in d)
                                        if (d.hasOwnProperty(t) && d[t].test(this.stream)) {
                                            var e = l[t](this.stream);
                                            if (e) return "startTag" === e.type && /script|style/i.test(e.tagName) ? null : (e.text = this.stream.substr(0, e.length), e)
                                        }
                                }, t.prototype.peekToken = function() {
                                    return this._peekToken()
                                }, t.prototype.readToken = function() {
                                    return this._readToken()
                                }, t.prototype.readTokens = function(t) {
                                    for (var e = void 0; e = this.readToken();)
                                        if (t[e.type] && !1 === t[e.type](e)) return
                                }, t.prototype.clear = function() {
                                    var t = this.stream;
                                    return this.stream = "", t
                                }, t.prototype.rest = function() {
                                    return this.stream
                                }, t
                            }();
                        e.default = h, h.tokenToString = function(t) {
                            return t.toString()
                        }, h.escapeAttributes = function(t) {
                            var e = {};
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = (0, p.escapeQuotes)(t[n], null));
                            return e
                        }, h.supports = a;
                        for (var f in a) a.hasOwnProperty(f) && (h.browserHasFlaw = h.browserHasFlaw || !a[f] && f)
                    }, function(t, e) {
                        "use strict";
                        e.__esModule = !0;
                        var n = !1,
                            i = !1,
                            o = window.document.createElement("div");
                        try {
                            var r = "<P><I></P></I>";
                            o.innerHTML = r, e.tagSoup = n = o.innerHTML !== r
                        } catch (t) {
                            e.tagSoup = n = !1
                        }
                        try {
                            o.innerHTML = "<P><i><P></P></i></P>", e.selfClose = i = 2 === o.childNodes.length
                        } catch (t) {
                            e.selfClose = i = !1
                        }
                        o = null, e.tagSoup = n, e.selfClose = i
                    }, function(t, e, n) {
                        "use strict";

                        function i(t) {
                            var e = t.indexOf("--\x3e");
                            if (e >= 0) return new c.CommentToken(t.substr(4, e - 1), e + 3)
                        }

                        function o(t) {
                            var e = t.indexOf("<");
                            return new c.CharsToken(e >= 0 ? e : t.length)
                        }

                        function r(t) {
                            if (-1 !== t.indexOf(">")) {
                                var e = t.match(u.startTag);
                                if (e) {
                                    var n = function() {
                                        var t = {},
                                            n = {},
                                            i = e[2];
                                        return e[2].replace(u.attr, function(e, o) {
                                            arguments[2] || arguments[3] || arguments[4] || arguments[5] ? arguments[5] ? (t[arguments[5]] = "", n[arguments[5]] = !0) : t[o] = arguments[2] || arguments[3] || arguments[4] || u.fillAttr.test(o) && o || "" : t[o] = "", i = i.replace(e, "")
                                        }), {
                                            v: new c.StartTagToken(e[1], e[0].length, t, n, !!e[3], i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""))
                                        }
                                    }();
                                    if ("object" === (void 0 === n ? "undefined" : l(n))) return n.v
                                }
                            }
                        }

                        function a(t) {
                            var e = r(t);
                            if (e) {
                                var n = t.slice(e.length);
                                if (n.match(new RegExp("</\\s*" + e.tagName + "\\s*>", "i"))) {
                                    var i = n.match(new RegExp("([\\s\\S]*?)</\\s*" + e.tagName + "\\s*>", "i"));
                                    if (i) return new c.AtomicTagToken(e.tagName, i[0].length + e.length, e.attrs, e.booleanAttrs, i[1])
                                }
                            }
                        }

                        function s(t) {
                            var e = t.match(u.endTag);
                            if (e) return new c.EndTagToken(e[1], e[0].length)
                        }
                        e.__esModule = !0;
                        var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        };
                        e.comment = i, e.chars = o, e.startTag = r, e.atomicTag = a, e.endTag = s;
                        var c = n(4),
                            u = {
                                startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                                endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                                attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                                fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i
                            }
                    }, function(t, e, n) {
                        "use strict";

                        function i(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }
                        e.__esModule = !0, e.EndTagToken = e.AtomicTagToken = e.StartTagToken = e.TagToken = e.CharsToken = e.CommentToken = e.Token = void 0;
                        var o = n(5),
                            r = (e.Token = function t(e, n) {
                                i(this, t), this.type = e, this.length = n, this.text = ""
                            }, e.CommentToken = function() {
                                function t(e, n) {
                                    i(this, t), this.type = "comment", this.length = n || (e ? e.length : 0), this.text = "", this.content = e
                                }
                                return t.prototype.toString = function() {
                                    return "\x3c!--" + this.content
                                }, t
                            }(), e.CharsToken = function() {
                                function t(e) {
                                    i(this, t), this.type = "chars", this.length = e, this.text = ""
                                }
                                return t.prototype.toString = function() {
                                    return this.text
                                }, t
                            }(), e.TagToken = function() {
                                function t(e, n, o, r, a) {
                                    i(this, t), this.type = e, this.length = o, this.text = "", this.tagName = n, this.attrs = r, this.booleanAttrs = a, this.unary = !1, this.html5Unary = !1
                                }
                                return t.formatTag = function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                        n = "<" + t.tagName;
                                    for (var i in t.attrs)
                                        if (t.attrs.hasOwnProperty(i)) {
                                            n += " " + i;
                                            var r = t.attrs[i];
                                            void 0 !== t.booleanAttrs && void 0 !== t.booleanAttrs[i] || (n += '="' + (0, o.escapeQuotes)(r) + '"')
                                        } return t.rest && (n += " " + t.rest), n += t.unary && !t.html5Unary ? "/>" : ">", void 0 !== e && null !== e && (n += e + "</" + t.tagName + ">"), n
                                }, t
                            }());
                        e.StartTagToken = function() {
                            function t(e, n, o, r, a, s) {
                                i(this, t), this.type = "startTag", this.length = n, this.text = "", this.tagName = e, this.attrs = o, this.booleanAttrs = r, this.html5Unary = !1, this.unary = a, this.rest = s
                            }
                            return t.prototype.toString = function() {
                                return r.formatTag(this)
                            }, t
                        }(), e.AtomicTagToken = function() {
                            function t(e, n, o, r, a) {
                                i(this, t), this.type = "atomicTag", this.length = n, this.text = "", this.tagName = e, this.attrs = o, this.booleanAttrs = r, this.unary = !1, this.html5Unary = !1, this.content = a
                            }
                            return t.prototype.toString = function() {
                                return r.formatTag(this, this.content)
                            }, t
                        }(), e.EndTagToken = function() {
                            function t(e, n) {
                                i(this, t), this.type = "endTag", this.length = n, this.text = "", this.tagName = e
                            }
                            return t.prototype.toString = function() {
                                return "</" + this.tagName + ">"
                            }, t
                        }()
                    }, function(t, e) {
                        "use strict";

                        function n(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            return t ? t.replace(/([^"]*)"/g, function(t, e) {
                                return /\\/.test(e) ? e + '"' : e + '\\"'
                            }) : e
                        }
                        e.__esModule = !0, e.escapeQuotes = n
                    }, function(t, e) {
                        "use strict";

                        function n(t) {
                            return t && "startTag" === t.type && (t.unary = s.test(t.tagName) || t.unary, t.html5Unary = !/\/>$/.test(t.text)), t
                        }

                        function i(t, e) {
                            var i = t.stream,
                                o = n(e());
                            return t.stream = i, o
                        }

                        function o(t, e) {
                            var n = e.pop();
                            t.prepend("</" + n.tagName + ">")
                        }

                        function r() {
                            var t = [];
                            return t.last = function() {
                                return this[this.length - 1]
                            }, t.lastTagNameEq = function(t) {
                                var e = this.last();
                                return e && e.tagName && e.tagName.toUpperCase() === t.toUpperCase()
                            }, t.containsTagName = function(t) {
                                for (var e, n = 0; e = this[n]; n++)
                                    if (e.tagName === t) return !0;
                                return !1
                            }, t
                        }

                        function a(t, e, a) {
                            function s() {
                                var e = i(t, a);
                                e && u[e.type] && u[e.type](e)
                            }
                            var c = r(),
                                u = {
                                    startTag: function(n) {
                                        var i = n.tagName;
                                        "TR" === i.toUpperCase() && c.lastTagNameEq("TABLE") ? (t.prepend("<TBODY>"), s()) : e.selfCloseFix && l.test(i) && c.containsTagName(i) ? c.lastTagNameEq(i) ? o(t, c) : (t.prepend("</" + n.tagName + ">"), s()) : n.unary || c.push(n)
                                    },
                                    endTag: function(n) {
                                        c.last() ? e.tagSoupFix && !c.lastTagNameEq(n.tagName) ? o(t, c) : c.pop() : e.tagSoupFix && (a(), s())
                                    }
                                };
                            return function() {
                                return s(), n(a())
                            }
                        }
                        e.__esModule = !0, e.default = a;
                        var s = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                            l = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i
                    }])
                }()
            }()
        }, function(t, e) {
            "use strict";

            function n(t) {
                return void 0 !== t && null !== t
            }

            function i(t) {
                return "function" == typeof t
            }

            function o(t, e, n) {
                var i = void 0,
                    o = t && t.length || 0;
                for (i = 0; i < o; i++) e.call(n, t[i], i)
            }

            function r(t, e, n) {
                for (var i in t) t.hasOwnProperty(i) && e.call(n, i, t[i])
            }

            function a(t, e) {
                return t = t || {}, r(e, function(e, i) {
                    n(t[e]) || (t[e] = i)
                }), t
            }

            function s(t) {
                try {
                    return Array.prototype.slice.call(t)
                } catch (n) {
                    var e = function() {
                        var e = [];
                        return o(t, function(t) {
                            e.push(t)
                        }), {
                            v: e
                        }
                    }();
                    if ("object" === (void 0 === e ? "undefined" : d(e))) return e.v
                }
            }

            function l(t) {
                return t[t.length - 1]
            }

            function c(t, e) {
                return !(!t || "startTag" !== t.type && "atomicTag" !== t.type || !("tagName" in t) || !~t.tagName.toLowerCase().indexOf(e))
            }

            function u(t) {
                return c(t, "script")
            }

            function p(t) {
                return c(t, "style")
            }
            e.__esModule = !0;
            var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };
            e.existy = n, e.isFunction = i, e.each = o, e.eachKey = r, e.defaults = a, e.toArray = s, e.last = l, e.isTag = c, e.isScript = u, e.isStyle = p
        }])
    }),
    function() {
        "use strict";

        function t(i) {
            this.options = e.extend({}, t.defaults, i), this.container = this.options.element, "auto" !== this.options.container && (this.container = this.options.container), this.$container = e(this.container), this.$more = e(this.options.more), this.$more.length && (this.setupHandler(), this.waypoint = new n(this.options))
        }
        var e = window.jQuery,
            n = window.Waypoint;
        t.prototype.setupHandler = function() {
            this.options.handler = e.proxy(function() {
                this.options.onBeforePageLoad(), this.destroy(), this.$container.addClass(this.options.loadingClass), e.get(e(this.options.more).attr("href"), e.proxy(function(t) {
                    var i = e(e.parseHTML(t)),
                        o = i.find(this.options.more),
                        r = i.find(this.options.items);
                    r.length || (r = i.filter(this.options.items)), this.$container.append(r), this.$container.removeClass(this.options.loadingClass), o.length || (o = i.filter(this.options.more)), o.length ? (this.$more.replaceWith(o), this.$more = o, this.waypoint = new n(this.options)) : this.$more.remove(), this.options.onAfterPageLoad(r)
                }, this))
            }, this)
        }, t.prototype.destroy = function() {
            this.waypoint && this.waypoint.destroy()
        }, t.defaults = {
            container: "auto",
            items: ".infinite-item",
            more: ".infinite-more-link",
            offset: "bottom-in-view",
            loadingClass: "infinite-loading",
            onBeforePageLoad: e.noop,
            onAfterPageLoad: e.noop
        }, n.Infinite = t
    }(),
    function() {
        "use strict";

        function t() {}

        function e(t) {
            this.options = n.Adapter.extend({}, e.defaults, t), this.axis = this.options.horizontal ? "horizontal" : "vertical", this.waypoints = [], this.element = this.options.element, this.createWaypoints()
        }
        var n = window.Waypoint;
        e.prototype.createWaypoints = function() {
            for (var t = {
                    vertical: [{
                        down: "enter",
                        up: "exited",
                        offset: "100%"
                    }, {
                        down: "entered",
                        up: "exit",
                        offset: "bottom-in-view"
                    }, {
                        down: "exit",
                        up: "entered",
                        offset: 0
                    }, {
                        down: "exited",
                        up: "enter",
                        offset: function() {
                            return -this.adapter.outerHeight()
                        }
                    }],
                    horizontal: [{
                        right: "enter",
                        left: "exited",
                        offset: "100%"
                    }, {
                        right: "entered",
                        left: "exit",
                        offset: "right-in-view"
                    }, {
                        right: "exit",
                        left: "entered",
                        offset: 0
                    }, {
                        right: "exited",
                        left: "enter",
                        offset: function() {
                            return -this.adapter.outerWidth()
                        }
                    }]
                }, e = 0, n = t[this.axis].length; e < n; e++) {
                var i = t[this.axis][e];
                this.createWaypoint(i)
            }
        }, e.prototype.createWaypoint = function(t) {
            var e = this;
            this.waypoints.push(new n({
                context: this.options.context,
                element: this.options.element,
                enabled: this.options.enabled,
                handler: function(t) {
                    return function(n) {
                        e.options[t[n]].call(e, n)
                    }
                }(t),
                offset: t.offset,
                horizontal: this.options.horizontal
            }))
        }, e.prototype.destroy = function() {
            for (var t = 0, e = this.waypoints.length; t < e; t++) this.waypoints[t].destroy();
            this.waypoints = []
        }, e.prototype.disable = function() {
            for (var t = 0, e = this.waypoints.length; t < e; t++) this.waypoints[t].disable()
        }, e.prototype.enable = function() {
            for (var t = 0, e = this.waypoints.length; t < e; t++) this.waypoints[t].enable()
        }, e.defaults = {
            context: window,
            enabled: !0,
            enter: t,
            entered: t,
            exit: t,
            exited: t
        }, n.Inview = e
    }(),
    function() {
        "use strict";

        function t(i) {
            this.options = e.extend({}, n.defaults, t.defaults, i), this.element = this.options.element, this.$element = e(this.element), this.createWrapper(), this.createWaypoint()
        }
        var e = window.jQuery,
            n = window.Waypoint;
        t.prototype.createWaypoint = function() {
            var t = this.options.handler;
            this.waypoint = new n(e.extend({}, this.options, {
                element: this.wrapper,
                handler: e.proxy(function(e) {
                    var n = this.options.direction.indexOf(e) > -1,
                        i = n ? this.$element.outerHeight(!0) : "";
                    this.$wrapper.height(i), this.$element.toggleClass(this.options.stuckClass, n), t && t.call(this, e)
                }, this)
            }))
        }, t.prototype.createWrapper = function() {
            this.options.wrapper && this.$element.wrap(this.options.wrapper), this.$wrapper = this.$element.parent(), this.wrapper = this.$wrapper[0]
        }, t.prototype.destroy = function() {
            this.$element.parent()[0] === this.wrapper && (this.waypoint.destroy(), this.$element.removeClass(this.options.stuckClass), this.options.wrapper && this.$element.unwrap())
        }, t.defaults = {
            wrapper: '<div class="sticky-wrapper" />',
            stuckClass: "stuck",
            direction: "down right"
        }, n.Sticky = t
    }(), $.ajaxSetup({
        cache: !0
    });
var app = {};
! function(t, e, n) {
    "use strict";
    e.env = {}, e.modules = {}, e.init = function() {
        e.env = n || e.env, e.coreElements(), e.initModules(), t(window).trigger("tnw-initialLoad"), t(window).trigger("tnw-loadAds", [0]), e.log("Welcome to TNW")
    }, e.coreElements = function() {
        e.$body = t("body"), e.$nav = t("nav.nav"), e.$main = t("main.main")
    }, e.initModules = function(n) {
        n = n || e.$body, void 0 !== e.cookie && e.cookie.read("tnw_auth_cookie") && e.loadModule("wp-user-admin", null, null, "170512"), n.find(".load-modules").each(function() {
            t(this).data("modules").split("|").forEach(function(t) {
                e.loadModule(t)
            })
        })
    }, e.getActivePost = function() {
        return e.env.activePostIdx || 0
    }, e.setActivePost = function(t) {
        e.env.activePostIdx = t
    }, e.getPostData = function(t) {
        return t = "number" == typeof t ? t : e.getActivePost(), e.env.postRack[t] ? e.env.postRack[t] : e.env.postRack[0]
    }, e.hasSeenCanvas = function() {
        return null !== e.cookie.read("tnwc")
    }, e.setCanvasSeen = function() {}, e.loadModule = function(n, i, o, r) {
        i = i || function() {}, o = o || this, r = r && r.length ? "?" + r : "", e.modules[n] ? i(o) : t.getScript(e.env.paths.assets + "js/modules/" + n + ".js" + r).done(function() {
            i(o)
        }).fail(function() {
            console.error("Could not load: " + n)
        })
    }, e.log = function(t, e, n) {
        console && console.log && (e = e || "", t = t || "", n = n || "#FF4422", console.log("%c " + t + " ", "border-left: 5px solid " + n + "; color: #f3f6f8; background: #2a3b44; font-family: Monaco; padding: 0 2px 1px; border-radius: 3px;", e))
    }, e.debug = function() {}, e.components = {}
}($, app, APP_ENV), $(app.init),
    function(t, n) {
        "use strict";
        n.pubmatic = {
            units: {
                TNW_DSKT_HOME_LB: {
                    id: 10004556,
                    mobile: !1,
                    requestType: 194,
                    sizes: ["728x90", "970x250"]
                },
                TNW_DSKT_ARTL_BB: {
                    id: 10004559,
                    mobile: !1,
                    requestType: 194,
                    sizes: ["1x1", "970x250"]
                },
                TNW_DSKT_ARTL_BB_INFTSCR: {
                    id: 10004576,
                    mobile: !1,
                    requestType: 194,
                    sizes: ["970x250"],
                    lazyload: !0
                },
                TNW_DSKT_ARTL_LB_ATF: {
                    id: 10004560,
                    mobile: !1,
                    requestType: 194,
                    sizes: ["728x90"],
                    lazyload: !0
                },
                TNW_DSKT_ARTL_MPU_ATF: {
                    id: 10004561,
                    mobile: !1,
                    requestType: 194,
                    sizes: ["300x250", "300x600"],
                    lazyload: !0
                },
                TNW_DSKT_ARTL_MPU_BTF: {
                    id: 10004562,
                    mobile: !1,
                    requestType: 194,
                    sizes: ["300x250", "300x600", "300x1050"],
                    lazyload: !0,
                    sticky: !0
                },
                TNW_DSKT_ARTL_LB_BTF: {
                    id: 10004563,
                    mobile: !1,
                    requestType: 194,
                    sizes: ["728x90"],
                    lazyload: !0
                },
                TNW_DSKT_SCTN_LB_ATF: {
                    id: 10004573,
                    mobile: !1,
                    requestType: 194,
                    sizes: ["728x90", "970x250"]
                },
                TNW_DSKT_SCTN_LB_BTF: {
                    id: 10004574,
                    mobile: !1,
                    requestType: 194,
                    sizes: ["728x90", "970x250"],
                    lazyload: !0
                },
                TNW_MS_HOME_MPU_ATF: {
                    id: 10004565,
                    mobile: !0,
                    requestType: 194,
                    sizes: ["300x250", "320x50", "300x50"]
                },
                TNW_MS_HOME_MPU_BTF: {
                    id: 100045194,
                    mobile: !0,
                    requestType: 194,
                    sizes: ["300x250", "320x50", "300x50"],
                    lazyload: !0
                },
                TNW_MS_ARTL_RM: {
                    id: 10004649,
                    mobile: !0,
                    requestType: 194,
                    sizes: ["1x1"]
                },
                TNW_MS_ARTL_MPU_ATF: {
                    id: 10004568,
                    mobile: !0,
                    requestType: 194,
                    sizes: ["300x250", "320x50"],
                    lazyload: !0
                },
                TNW_MS_ARTL_MPU_BTF: {
                    id: 10004570,
                    mobile: !0,
                    requestType: 194,
                    sizes: ["300x250", "320x50"],
                    lazyload: !0
                },
                TNW_DSKT_ARTL_NLIFT: {
                    id: 10004577,
                    mobile: !1,
                    native: !0,
                    requestType: 4,
                    extra: "&ntid=209",
                    lazyload: !1,
                    template: "tmpl_TNW_DSKT_ARTL_NLIFT"
                },
                TNW_DSKT_ARTL_WIH: {
                    id: 10004604,
                    mobile: !1,
                    native: !0,
                    requestType: 4,
                    extra: "&ntid=117",
                    lazyload: !1,
                    template: "tmpl_TNW_DSKT_ARTL_WIH"
                },
                TNW_DSKT_ARTL_WIH_2: {
                    id: 10004590,
                    mobile: !1,
                    native: !0,
                    requestType: 4,
                    extra: "&ntid=117",
                    lazyload: !1,
                    template: "tmpl_TNW_DSKT_ARTL_WIH"
                }
            },
            init: function() {
                t(".tnw-ad").each(function(i, o) {
                    if (void 0 !== n.helpers.queryString.getParam("nocanvas") && (-1 !== e.className.indexOf("TNW_DSKT_ARTL_BB") || -1 !== e.className.indexOf("TNW_MS_ARTL_RM"))) return !0;
                    o.classList.remove("tnw-ad");
                    var r = n.pubmatic.units[o.className];
                    IS_MOBILE == r.mobile && r && (r.lazyload ? t(o).waypoint(function() {
                        n.pubmatic.load(o, r)
                    }, {
                        offset: "bottom-in-view"
                    }) : n.pubmatic.load(o, r), r.sticky && n.pubmatic.makeSticky(o))
                })
            },
            load: function(t, e) {
                t.classList.contains("tnw-ad-loaded") || (e.native ? n.pubmatic.requestNativeAd(t, e) : "" != t.id ? n.pubmatic.requestOpenWrapAd(t, e) : n.pubmatic.requestAd(t, e), t.classList.add("tnw-ad-loaded"))
            },
            getEnvParams: function() {
                return encodeURIComponent(t.param(n.pubmatic.getPostTargeting()))
            },
            getPostTargeting: function() {
                var t = n.env.postRack[n.getActivePost()];
                return void 0 !== t ? t.adTargeting : n.env.adTargeting
            },
            getWindowSize: function() {
                var t = window,
                    e = document,
                    n = e.documentElement,
                    i = e.getElementsByTagName("body")[0],
                    o = t.innerWidth || n.clientWidth || i.clientWidth;
                return {
                    width: o,
                    resolution: o + "x" + (t.innerHeight || n.clientHeight || i.clientHeight)
                }
            },
            requestNativeAd: function(e, i) {
                if (i) {
                    var o = "article" == n.env.template ? n.env.postRack[n.env.postRack.length - 1].permalink : n.env.permalink,
                        r = "?au=" + i.id,
                        a = "&rndn=" + Math.random(),
                        s = "&req_type=" + i.requestType,
                        l = "&purl=" + encodeURI(o),
                        c = "&dpurl=" + encodeURI(o),
                        u = "&slt_kv=" + n.pubmatic.getEnvParams(),
                        p = "https://ae.pubmatic.com/ad" + r + "&iid=1&res_format=2" + a + s + "&sec=1" + l + c + u + i.extra + "&slt_param=pmZoneId%3DTNW";
                    t.ajax({
                        url: p,
                        xhrFields: {
                            withCredentials: !0
                        }
                    }).done(function(t) {
                        n.pubmatic.callbackNativeAd(e, i, t)
                    })
                }
            },
            requestAd: function(e, i) {
                if (i) {
                    var o = "article" == n.env.template ? n.env.postRack[n.env.postRack.length - 1].permalink : n.env.permalink,
                        r = "?au=" + i.id,
                        a = "&rndn=" + Math.random(),
                        s = "&req_type=" + i.requestType,
                        l = "&asz=" + i.sizes.join(),
                        c = "&scrn=" + n.pubmatic.getWindowSize().resolution,
                        u = "&purl=" + encodeURI(o),
                        p = "&dpurl=" + encodeURI(o),
                        d = "&slt_kv=" + n.pubmatic.getEnvParams(),
                        h = "https://ae.pubmatic.com/ad" + r + "&iid=DIV1" + a + "&res_format=2" + s + l + c + "&sec=1" + u + p + d + "&slt_param=pmZoneId%3DTNW";
                    t.ajax({
                        url: h,
                        xhrFields: {
                            withCredentials: !0
                        }
                    }).done(function(t) {
                        n.pubmatic.callbackAd(e, i, t)
                    })
                }
            },
            requestOpenWrapAd: function(t, e) {
                Phoenix.EQ.push(function() {
                    Phoenix.defineAdSlot(e.id, n.pubmatic.transformSizesToOW(e.sizes), t.id).setExtraParameters("pmZoneId", ["tnw-openwrap"])
                }), Phoenix.EQ.push(function() {
                    Phoenix.display(t.id)
                })
            },
            callbackAd: function(e, i, o) {
                var r = (n.pubmatic.getSpotXScript(), n.pubmatic.getEnvParams(), !1);
                o.bids && o.bids.length ? (r = o.bids[0].ct, postscribe(e, decodeURIComponent(r)), n.pubmatic.triggerTracking(o.bids[0].tr)) : t(e).hide(), n.pubmatic.shouldLoadSpotX(e, r) && n.pubmatic.loadSpotX()
            },
            shouldLoadSpotX: function(e, i) {
                var o = n.pubmatic.getPostTargeting();
                return (t(e).hasClass("TNW_DSKT_ARTL_BB") || t(e).hasClass("TNW_MS_ARTL_RM")) && "No" == o.isSponsoredCategory && "No" == o.isSponsoredPost && (!1 === i || !1 !== i && -1 === i.indexOf("weborama"))
            },
            loadSpotX: function() {
                n.pubmatic.getSpotXScript()
            },
            getSpotXScript: function() {
                var t = ['type="text/javascript" spotx_content_container_id="spotxvideo" data-spotx_ad_unit="incontent" data-spotx_collapse="1" data-spotx_ad_volume="0" data-spotx_autoplay="1" data-spotx_https="1"'];
                IS_MOBILE ? (t.push('src="https://js.spotx.tv/easi/v1/204767.js"'), t.push('data-spotx_channel_id="204767"'), t.push('data-spotx_content_width="320"'), t.push('data-spotx_content_height="180"')) : (t.push('src="https://js.spotx.tv/easi/v1/204764.js"'), t.push('data-spotx_channel_id="204764"'), t.push('data-spotx_content_width="512"'), t.push('data-spotx_content_height="288"'), t.push('data-spotx_unmute_on_mouse="1"'));
                var e = ["'content_id':" + n.env.currentPost];
                return e.push("'country':" + APP_LOCALE.country), e.push("'region':" + APP_LOCALE.region), ["category", "section"].forEach(function(t) {
                    void 0 !== n.env.adTargeting[t] && n.env.adTargeting[t].split(",").forEach(function(n) {
                        e.push("'" + t + "[]':" + n)
                    })
                }), t.push('data-custom="' + encodeURIComponent(e.join()) + '"'), "<script " + t.join(" ") + "><\/script>"
            },
            callbackNativeAd: function(e, i, o) {
                if (t(e).addClass("tnw-ad-native").html(t("#" + i.template).html()), o.bids && o.bids.length) {
                    var r = JSON.parse(decodeURIComponent(o.bids[0].ct)).native,
                        a = t("#" + i.template).html(),
                        s = Handlebars.compile(a);
                    Handlebars.compile(a), "tmpl_TNW_DSKT_ARTL_NLIFT" == i.template ? t(e).addClass("tnw-ad-native").html(s({
                        linkUrl: r.link.url,
                        linkTracker: r.link.clicktrackers[0],
                        imgUrl: r.assets[1].img.url,
                        title: r.assets[0].title.text,
                        author: r.assets[3].data.value
                    })) : "tmpl_TNW_DSKT_ARTL_WIH" == i.template && t(e).addClass("tnw-ad-native").html(s({
                        linkUrl: r.link.url,
                        linkTracker: r.link.clicktrackers[0],
                        titleText: r.assets[0].title.text,
                        imgUrl: r.assets[1].img.url,
                        title: r.assets[2].data.value
                    })), n.pubmatic.triggerTracking(r.imptrackers)
                } else t(e).hide()
            },
            triggerTracking: function(e) {
                e.forEach(function(e) {
                    var n = t("<iframe>");
                    n.attr("name", "pbeacon"), n.attr("allowtransparency", "true"), n.attr("hspace", "0"), n.attr("vspace", "0"), n.attr("marginheight", "0"), n.attr("marginwidth", "0"), n.attr("height", "0"), n.attr("width", "0"), n.attr("frameborder", "0"), n.attr("scrolling", "no"), n.attr("style", "position:absolute;top:-20000px;"), n.attr("src", e), n.appendTo("body")
                })
            },
            refreshAds: function() {
                t(".tnw-ad-loaded").each(function() {
                    t(this).removeClass("tnw-ad-loaded").addClass("tnw-ad"), n.pubmatic.init()
                })
            },
            makeSticky: function(e) {
                var n = new Waypoint.Sticky({
                    element: e,
                    offset: 70
                });
                t(window).on("tnw-newPageLoaded", function() {
                    n.destroy()
                })
            },
            transformSizesToOW: function(t) {
                var e = [];
                return t.forEach(function(t) {
                    e.push(t.split("x").map(Number))
                }), e
            }
        }
    }($, app), $(window).on("tnw-loadAds", app.pubmatic.init), $(window).on("tnw-refreshAds", app.pubmatic.refreshAds),
    function(t, e) {
        "use strict";
        e.cookie = {
            create: function(t, e, n) {
                var i;
                if (n) {
                    var o = new Date;
                    o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3), i = "; expires=" + o.toGMTString()
                } else i = "";
                document.cookie = t + "=" + e + i + "; path=/"
            },
            read: function(t) {
                for (var e = t + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                    for (var o = n[i];
                        " " === o.charAt(0);) o = o.substring(1, o.length);
                    if (0 === o.indexOf(e)) return o.substring(e.length, o.length)
                }
                return null
            },
            remove: function(t) {
                e.cookie.create(t, "", -1)
            }
        }
    }($, app),
    function(t) {
        "use strict";
        app.hovercard = function(e) {
            var n = this,
                i = function() {
                    var e, i = function(t, e, n) {
                            return Math.floor(Math.sqrt(Math.pow(e - (t.offset().left + t.width() / 2), 2) + Math.pow(n - (t.offset().top + t.height() / 2), 2)))
                        },
                        o = 0,
                        r = n.getElement();
                    t(document).on("mousemove.popoverCloser", function(a) {
                        var s = i(r, a.pageX, a.pageY);
                        s = Math.round(s / 5), 0 === o ? o = s : o - s < -4 && !r.is(t(a.target)) && !r.has(t(a.target)).length > 0 && (e = setTimeout(function() {
                            n.remove()
                        }, 100))
                    }), r.on("mouseenter.popoverCloser", function(t) {
                        try {
                            clearTimeout(e)
                        } catch (t) {}
                    }), r.on("mouseleave.popoverCloser", function(t) {
                        e = setTimeout(function() {
                            n.remove()
                        }, 300)
                    })
                },
                o = t("<div></div>").attr("class", e.prefix + "hovercard");
            return o.html(e.html), n.place = function() {
                o.css({
                    visibility: "hidden"
                }), t("body").append(o);
                var n;
                o.outerWidth() / 2 + e.left > t(document).width() ? (n = t(document).width() - o.outerWidth() - 5, o.attr("data-beak", "right")) : n = e.left - o.outerWidth() / 2, n < 0 && (n = 5, o.attr("data-beak", "left")), o.css({
                    top: e.top - o.outerHeight() - 5,
                    left: n,
                    visibility: "visible"
                }), o.addClass(e.prefix + "hovercard--in"), o.one("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd", function() {
                    o.removeClass(e.prefix + "hovercard--in")
                }), i()
            }, n.remove = function() {
                o.addClass(e.prefix + "hovercard--out"), o.one("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd", function() {
                    o.remove(), n._onClosecallback()
                })
            }, n.getElement = function() {
                return o
            }, n._onClosecallback = function() {}, n.onClose = function(t) {
                n._onClosecallback = t
            }, n
        }
    }($),
    function(t, e) {
        "use strict";
        var n = +new Date,
            i = function(n) {
                var i, o;
                i = t(this), o = t.ajax({
                    cache: !1,
                    data: i.serialize(),
                    dataType: "json",
                    method: i.attr("method").toUpperCase(),
                    url: i.attr("action")
                }), t.when(o).then(function(t) {
                    var n = i.attr("data-xhr-success");
                    e.forms && "function" == typeof e.forms[n] && e.forms[n](i, t)
                }, function(t) {
                    var n = i.attr("data-xhr-fail");
                    e.forms && "function" == typeof e.forms[n] && e.forms[n](i, t.responseJSON)
                }), n.preventDefault()
            },
            o = function(e) {
                e.attr("src", "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"), e.waypoint(function(n) {
                    var i, o;
                    i = e.attr("data-src"), void 0 === i || IS_MOBILE && !e.is(":visible") || t("<img/>").attr("src", i).on("load", function() {
                        t(this).remove(), "IMG" === e.get(0).tagName ? (e.attr("src", i), void 0 !== (o = e.attr("data-srcset")) && e.attr("srcset", o)) : e.css("background-image", 'url("' + i + '")'), e.removeAttr("data-src data-srcset"), e.addClass("lazyLoaded"), Waypoint.refreshAll()
                    }), this.destroy()
                }, {
                    offset: "115%"
                })
            },
            r = function(t) {
                t.on("click", function(e) {
                    e.preventDefault();
                    var n, i = t.attr("data-width"),
                        o = t.attr("data-height"),
                        r = void 0 != window.screenLeft ? window.screenLeft : screen.left,
                        a = void 0 != window.screenTop ? window.screenTop : screen.top,
                        s = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                        l = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
                        c = s / 2 - i / 2 + r,
                        u = l / 2 - o / 2 + a;
                    n = window.open(t.attr("data-url"), t.attr("data-title"), "scrollbars=yes, width=" + i + ", height=" + o + ", top=" + u + ", left=" + c), window.focus && n && n.focus()
                })
            },
            a = function(t) {
                var e;
                return t < 60 ? e = "second" : t < 3600 ? (t /= 60, e = "minute") : t < 86400 ? (t /= 3600, e = "hour") : t < 2592e3 ? (t /= 86400, e = "day") : t < 7862400 ? (t /= 604800, e = "week") : t < 31536e3 ? (t /= 2592e3, e = "month") : (t /= 31536e3, e = "year"), t = Math.floor(t), {
                    diff: t,
                    scale: e
                }
            },
            s = function(t) {
                var n = a(t);
                return n.diff + " " + e.helpers.pluralizeStr(n.scale, n.diff) + " ago"
            },
            l = function(t) {
                return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][t.getMonth()] + " " + t.getDate() + ", " + t.getFullYear()
            },
            c = function(t) {
                return l(t) + " - " + ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2)
            },
            u = function(t) {
                var e = new Date(t.attr("datetime")),
                    i = (n - +e) / 1e3;
                t.text(i < 3456e4 ? s(i) : l(e)), t.attr("data-full-date", c(e))
            };
        e.core = {
            init: function() {
                e.core.initHomepage();
                var n = t("form[data-xhr]");
                n.length > 0 && e.helpers.attachOnce(n, "xhr-form", function(t) {
                    t.on("submit", i)
                }), e.helpers.attachOnce(t(".lazy"), "lazy", o), e.helpers.attachOnce(t("time.timeago"), "timeago", u), e.helpers.attachOnce(t("a.popitup"), "popitup", r), t(".js-modal").modal()
            },
            initHomepage: function() {
                "home" === e.env.template && t("#coverDate").html(e.helpers.prettyDate())
            }
        }
    }($, app), $(window).on("tnw-initialLoad tnw-DOMChange", app.core.init),
    function(t, e) {
        "use strict";
        e.forms = {
            newsletterSuccess: function(t, e) {
                t.addClass("is-subscribed")
            },
            newsletterFail: function(t, e) {}
        }
    }($, app),
    function(t, e) {
        "use strict";
        window.debounceTimer = [], e.helpers = {
            attachOnce: function(e, n, i) {
                var o = "tnw-attached",
                    r = "string" == typeof e ? t(e) : e;
                "function" == typeof n ? i = n : o += "-" + n, r.each(function() {
                    t(this).data(o) || (t(this).data(o, !0), i(t(this)))
                })
            },
            debounce: function(t, e, n) {
                var i;
                n = n || "default", i = window.debounceTimer[n], i && window.clearTimeout(i), window.debounceTimer[n] = window.setTimeout(t, e)
            },
            requestAnimationFrame: function(t) {
                return window.requestAnimationFrame ? window.requestAnimationFrame(t) : window.webkitRequestAnimationFrame ? window.webkitRequestAnimationFrame(t) : window.mozRequestAnimationFrame ? window.mozRequestAnimationFrame(t) : window.setTimeout(t, 1e3 / 60)
            },
            removeClassRoot: function(t, e) {
                var n = new RegExp("(^|\\s)" + e + "\\S+", "g");
                t.removeClass(function(t, e) {
                    return (e.match(n) || []).join(" ")
                })
            },
            pluralizeStr: function(t, e) {
                return 1 == +e ? t : t + "s"
            },
            queryString: {
                getParams: function() {
                    var t = {};
                    return window.location.search.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function(e, n, i, o) {
                        t[n] = void 0 !== o ? o : null
                    }), t
                },
                getParam: function(t) {
                    return e.helpers.queryString.getParams()[t]
                },
                update: function(n, i) {
                    var o = window.location,
                        r = (o.search, e.helpers.queryString.getParams()),
                        a = {},
                        s = [],
                        l = "";
                    t.each(r, function(t, e) {
                        t != n ? a[t] = e : i.length && (a[t] = i)
                    }), void 0 === a[n] && i.length && (a[n] = i), t.each(a, function(t, e) {
                        var n = null !== e ? t + "=" + encodeURIComponent(e) : t;
                        s.push(n)
                    }), l = s.length ? "?" + s.join("&") : "", history.replaceState({}, "", o.origin + o.pathname + l + o.hash)
                }
            },
            prettyDate: function(t) {
                var e = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    n = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                return t = t || new Date, e[t.getDay()] + " &mdash; " + n[t.getMonth()] + " " + t.getDate() + ", " + t.getFullYear()
            },
            isSafari: function() {
                var t = navigator.userAgent.toLowerCase();
                return -1 != t.indexOf("safari") && t.indexOf("chrome") <= -1
            }
        }
    }($, app),
    function(t, e) {
        "use strict";
        e.nav = {
            init: function() {
                var n = t("#modalStayTuned");
                e.$nav.find(".nav-follow-toggle").on("click touchstart", function(t) {
                    e.$body.toggleClass("is-showNavFollow"), t.preventDefault()
                }), e.$nav.find(".nav-mob-toggle").on("click touchstart", function(t) {
                    e.$body.toggleClass("is-showNavMob"), t.preventDefault()
                }), e.$nav.find(".nav-sections-dropdown-toggle a").on("click touchstart", function(t) {
                    t.preventDefault()
                }), n.on("modal.show", function() {
                    e.social.loadFb(function() {
                        FB.XFBML.parse(n[0])
                    }), e.social.loadTwitter(function(t) {
                        t.widgets.load(n[0])
                    })
                }), e.$body.waypoint(function(n) {
                    -1 === ["xs", "s"].indexOf(t(document).getBreakpoint()) && ("down" === n ? e.$body.addClass("is-navSticky") : e.$body.removeClass("is-navSticky"))
                }, {
                    offset: -32
                })
            }
        }
    }($, app), $(window).on("tnw-initialLoad", app.nav.init),
    function(t, e) {
        "use strict";
        e.pagination = {
            articleBody: [],
            prevPageLink: [],
            nextPageLink: [],
            nPages: 0,
            pages: [],
            currentPage: 1,
            articleOffsetTop: 0,
            wrapper: void 0,
            postBody: void 0,
            firstLoad: !0,
            blocking: !0,
            init: function() {
                if ("article" === e.env.template && (e.pagination.reset(), e.pagination.wrapper = t("article.post"), e.pagination.postBody = t(".post-body"), !(e.pagination.postBody.length < 1))) {
                    var n = e.pagination.postBody.html().split("\x3c!--nextpage--\x3e");
                    n.length > 1 && e.pagination.paginate(n)
                }
            },
            paginate: function(n) {
                this.pages = n, this.nPages = n.length, void 0 !== e.env.currentPage && (this.currentPage = e.env.currentPage), e.pagination.postBody.after("<ul class='u-row post-share'><li class='u-col-xs-6'><a href='#' rel='prev' class='button prev-page' style='width: 100%;'>Previous Page</a></li> <li class='u-col-xs-6'><a href='#' rel='next' class='button next-page' style='width: 100%;'>Next Page</a></li></ul>");
                var i = window.location.pathname,
                    o = i.split("/");
                isNaN(o[o.length - 2]) ? e.pagination.updateUI(1) : e.pagination.updateUI(parseInt(o[o.length - 2])), e.pagination.wrapper.on("click", ".next-page, .prev-page", function(n) {
                    e.pagination.prevNextPage(t(this), n)
                })
            },
            reset: function() {
                this.nPages = 1, this.pages = [], this.currentPage = 1, "object" == typeof e.pagination.wrapper && null !== e.pagination.wrapper && e.pagination.wrapper.off("click", ".next-page, .prev-page")
            },
            prevNextPage: function(t, n) {
                n.preventDefault(), t.hasClass("button--disabled") || (t.hasClass("next-page") ? e.pagination.nextPage() : e.pagination.prevPage())
            },
            nextPage: function() {
                this.currentPage - 1 != this.pages.length && (e.pagination.wrapper.find(".prev-page").show(), e.pagination.updateUI(this.currentPage + 1))
            },
            prevPage: function() {
                this.currentPage - 1 != 0 && (e.pagination.wrapper.find(".next-page").show(), e.pagination.updateUI(this.currentPage - 1))
            },
            updateUI: function(n) {
                this.currentPage = n, e.pagination.postBody.html(this.pages[n - 1]), n <= 1 ? e.pagination.wrapper.find(".prev-page").addClass("button--disabled") : e.pagination.wrapper.find(".prev-page").removeClass("button--disabled"), n >= this.nPages ? e.pagination.wrapper.find(".next-page").addClass("button--disabled") : e.pagination.wrapper.find(".next-page").removeClass("button--disabled"), t(window).trigger("tnw-DOMChange"), t(window).trigger("tnw-refreshAds"), e.pagination.firstLoad ? e.pagination.firstLoad = !1 : (e.pagination.updateHistory(n), t("html,body").animate({
                    scrollTop: e.pagination.postBody.offset().top - 120 + "px"
                }, 300))
            },
            updateHistory: function(t) {
                if (this.blocking) this.blocking = !1;
                else {
                    var e = window.location.pathname,
                        n = e.split("/");
                    1 !== t || isNaN(n[n.length - 2]) ? isNaN(n[n.length - 2]) ? n.splice(n.length - 1, 0, t) : n[n.length - 2] = t : (n.splice(n.length - 2, 1), history.pushState("", document.title, window.location.pathname + window.location.search)), history.pushState(null, null, n.join("/") + window.location.search)
                }
            }
        }
    }($, app), $(window).on("tnw-initialLoad", app.pagination.init),
    function(t, e) {
        "use strict";
        e.page = {
            $pageHeader: t("#page-header"),
            $pageHeaderVisual: t("#page-header-visual"),
            maxScale: 1.15,
            pageHeaderBottomY: 0,
            init: function() {
                t(".page-tabs").tabs(), e.page.$pageHeaderVisual.length && (e.page.pageHeaderBottomY = e.page.$pageHeader.offset().top + e.page.$pageHeader.height(), t(window).on("orientationchange resize", function() {
                    e.page.pageHeaderBottomY = e.page.$pageHeader.offset().top + e.page.$pageHeader.height()
                }).trigger("resize"), e.page.animate())
            },
            animate: function(n) {
                var i, o, r;
                r = t(window).scrollTop(), i = r / e.page.pageHeaderBottomY, i >= 0 && i <= 1 && (o = 1 + i * (e.page.maxScale - 1), e.page.$pageHeaderVisual.css({
                    "-webkit-transform": "scale(" + o + ")",
                    "-moz-transform": "scale(" + o + ")",
                    "-ms-transform": "scale(" + o + ")",
                    transform: "scale(" + o + ")"
                })), window.requestAnimationFrame(e.page.animate)
            }
        }
    }($, app), $(window).on("tnw-initialLoad", app.page.init),
    function(t, e) {
        "use strict";
        var n = {},
            i = !1,
            o = function(i, o) {
                var r = t(i.html);
                r.insertAfter(e.$main.find(".sheet").last()), e.post.pushToRack(i.data), e.post.initSheet(o + 1, r), t(window).trigger("tnw-DOMChange"), e.helpers.debounce(c.bind(r, o), 100, "sheet-" + o + "-url-beacon"), e.initModules(r), n[o] = !0, dataLayer.push(i.dataLayer)
            },
            r = function(i) {
                var o = t(e.$main.find("#sheet-next-article-btn").html());
                o.find("a").attr("href", n[i].data.permalink), o.find(".sheet-next-article-title").text(n[i].data.title), o.appendTo(e.$main)
            },
            a = function(n) {
                var i = t.Deferred();
                t.ajax({
                    type: "GET",
                    url: e.env.paths.base + "ajax/partials/article-sheet.php",
                    data: {
                        frstPostId: e.getPostData(0).id,
                        idx: n
                    },
                    dataType: "json",
                    cache: !1,
                    success: i.resolve,
                    error: i.reject
                }), i.promise().then(s.bind(n)).fail(function() {})
            },
            s = function(t) {
                n[this] = t, i && (i = !1, l(this))
            },
            l = function(t) {
                var e = n[t];
                void 0 !== e ? t < 6 ? o(e, t) : r(t) : i = !0
            },
            c = function(t) {
                this.waypoint(function(n) {
                    var i = "up" === n ? t : t + 1;
                    history.replaceState({}, "", e.getPostData(i).permalink), document.title = e.getPostData(i).title, e.post.handleActivePost(i)
                }, {
                    offset: "66%"
                })
            },
            u = function(t, n) {
                e.setActivePost(n + 1), l(n), this.destroy()
            };
        e.postInfiniteScroll = {
            attachArticle: function(n) {
                var i = e.$main.find(".sheet").length,
                    o = i - 1;
                i >= 8 || (a(o), n.find("article.post").waypoint(function(i) {
                    e.helpers.debounce(u.bind(this, n, o), 100, "sheet-" + o + "-load"), t(window).trigger("tnw-newPageLoaded")
                }, {
                    offset: "bottom-in-view"
                }))
            }
        }
    }($, app),
    function(t, e) {
        "use strict";
        var n = null,
            i = null,
            o = function(t) {
                return {
                    src: t.attr("src"),
                    w: +t.attr("width"),
                    h: +t.attr("height")
                }
            },
            r = function(e) {
                var r = e.closest(".photos-wrap"),
                    a = 0,
                    s = [];
                if (n = n || t(".pswp"), n.length) {
                    r.length ? r.find(".photo img").each(function(n) {
                        s.push(o(t(this))), t(this).attr("src") == e.attr("src") && (a = n)
                    }) : s = [o(e)];
                    var l = {
                        index: a,
                        closeOnScroll: !1,
                        history: !1
                    };
                    i = new PhotoSwipe(n[0], PhotoSwipeUI_Default, s, l), i.init()
                }
            },
            a = function(n, i) {
                n = n || 0;
                var o = null,
                    a = function() {
                        var t = i.find(".fb-save");
                        t.length && e.helpers.debounce(function() {
                            e.social.loadFb(function() {
                                FB.XFBML.parse(t.parent()[0])
                            })
                        }, 2e3, "fb-sharing")
                    },
                    s = function(t) {
                        t.setSelectionRange(0, t.value.length)
                    },
                    l = function(e) {
                        e.toggleClass("with-tooltip", !1), e.find(".shortUrl").on("touchend", function(e) {
                            s(t(this)[0])
                        })
                    },
                    c = function(t) {
                        if (t.length && window.Clipboard) {
                            new Clipboard(t[0]).on("success", function(n) {
                                t.toggleClass("with-tooltip--success", !0), e.helpers.debounce(function() {
                                    t.toggleClass("with-tooltip--success", !1)
                                }, 1600, "clipboard-success-message")
                            }).on("error", function(n) {
                                var i = t.find(".shortUrl")[0],
                                    o = e.helpers.isSafari() ? "Cmd (⌘) + C to copy" : "Ctrl + C to copy";
                                t.attr("data-tooltip-success", o), t.toggleClass("with-tooltip--success", !0), s(i), e.helpers.debounce(function() {
                                    t.toggleClass("with-tooltip--success", !1)
                                }, 3e3, "clipboard-success-message")
                            })
                        }
                    };
                o = i.find(".post-actions-shortUrl"), e.helpers.attachOnce(i, "fb-sharing-opts", a), e.postInfiniteScroll.attachArticle(i), t("html").hasClass("touch") ? e.helpers.attachOnce(o, "short-url-select", l) : e.helpers.attachOnce(o, "copy-to-clipboard", c), i.find(".post-actions-dropdown-toggle").on("click", function(e) {
                    e.stopPropagation();
                    var n = t(this);
                    n.find(".post-actions-dropdown").toggleClass("shown", !0), t(document).one("click", function() {
                        n.find(".post-actions-dropdown").toggleClass("shown", !1)
                    })
                }), i.find(".gallery .photos-wrap").on("click", ".photo--active a", function(e) {
                    e.preventDefault(), r(t(this).find("img").eq(0))
                }), i.find("article.post").fitVids(), n > 0 && t(window).trigger("tnw-loadAds", [n])
            };
        e.post = {
            init: function() {
                "article" === e.env.template && e.post.initSheet(0, e.$main.find(".sheet").eq(0))
            },
            initSheet: function(t, e) {
                a(t, e)
            },
            pushToRack: function(t) {
                e.env.postRack.push(t)
            },
            handleActivePost: function(n) {
                dataLayer.push({
                    event: "VirtualPageview",
                    virtualPageURL: "/" + e.getPostData(n).permalink.replace(e.env.paths.site, ""),
                    virtualPageTitle: e.getPostData(n).title
                }), e.$main.find(".sheet").each(function(e, i) {
                    t(i).find("video.gifsnomore").each(function() {
                        t(this)[0][n === e ? "play" : "pause"]()
                    })
                })
            }
        }
    }($, app), $(window).on("tnw-initialLoad", app.post.init),
    function(t, e) {
        "use strict";
        var n, i = null,
            o = null,
            r = "",
            a = {
                outer: 0,
                scroll: 0
            },
            s = function(t) {
                t.on("click", function(t) {
                    t.preventDefault(), c()
                })
            },
            l = function(t) {
                t.on("click", function(t) {
                    t.preventDefault(), u()
                })
            },
            c = function() {
                e.$body.toggleClass("show-search", !0), e.helpers.attachOnce(o, "search-keystroke", d), e.helpers.attachOnce(i.find("#search--close"), "close-search", l), e.helpers.attachOnce(i.find("form"), "search-form", g), e.helpers.attachOnce(i.find("#search-clear"), "search-form", p), "" == r && o.val().length && m(o.val()), x(r), f(), o.focus()
            },
            u = function() {
                e.$body.toggleClass("show-search", !1), o.blur(), x(""), t(document).off("keyup.search")
            },
            p = function(t) {
                t.on("click", function(t) {
                    t.preventDefault(), o.val(""), o.focus()
                })
            },
            d = function(t) {
                t.on("keyup", function(t) {
                    e.helpers.debounce(h, 400, "search-keystroke")
                })
            },
            h = function() {
                var t = o.val();
                t != r && m(t)
            },
            f = function() {
                t(document).on("keyup.search", function(e) {
                    e.preventDefault();
                    var n = e.keyCode;
                    t("html").hasClass("touch") ? 13 == n && o.blur() : 27 == n ? u() : 38 == n || 40 == n ? y(n) : 13 == n ? (o.blur(), w()) : 191 == n && b()
                })
            },
            m = function(o) {
                n && "pending" === n.state() && n.abort && n.abort(), r = o, n = t.Deferred(), i.toggleClass("is-searching", !0), t.ajax({
                    type: "GET",
                    url: e.env.paths.base + "ajax/partials/search.php",
                    data: {
                        q: o
                    },
                    dataType: "html",
                    success: n.resolve,
                    error: n.reject
                }), n.promise().always(function() {
                    i.toggleClass("is-searching", !1)
                }).then(function(t) {
                    var e = i.find("#searchResults");
                    e.html(t), a = {
                        outer: e.outerHeight(),
                        scroll: e.prop("scrollHeight")
                    }, v(), x(o)
                })
            },
            g = function(t) {
                t.on("submit", function(t) {
                    t.preventDefault()
                })
            },
            v = function(t, e) {
                t = t || 0, e = e || "up", i.find("li.search-result.search-result--active").removeClass("search-result--active"), i.find("li.search-result").eq(t).addClass("search-result--active");
                var n = i.find("li.search-result").eq(t).position().top,
                    o = 0;
                "down" == e && n > a.outer / 2 ? o = n - a.outer / 2 : "up" == e && (o = n < a.scroll - a.outer / 2 ? n - a.outer / 2 : a.scroll), i.find("#searchResults").scrollTop(o)
            },
            y = function(t) {
                var e, n = i.find(".search-result--active").index();
                o.blur(), 38 == t ? (e = "up", n <= 0 ? (o.focus(), n = 0) : n -= 1) : (e = "down", n = n >= i.find(".search-result").length - 1 ? i.find(".search-result").length - 1 : n + 1), v(n, e)
            },
            w = function() {
                var t = i.find("li.search-result.search-result--active").eq(0).find(".search-result-title a");
                t.length && t[0].click()
            },
            b = function() {
                o.focus(), o[0].setSelectionRange(0, o.val().length)
            },
            x = function(t) {
                e.helpers.queryString.update("q", t)
            };
        e.search = {
            init: function() {
                i = i || t("#search"), o = o || i.find("input#search-input"), e.helpers.attachOnce(e.$nav.find("#search--open"), "open-search", s), o.val().length && c()
            }
        }
    }($, app), $(window).on("tnw-initialLoad", app.search.init),
    function(t, e) {
        "use strict";
        var n = function(e) {
                "undefined" == typeof FB ? t.getScript("//connect.facebook.net/en_US/sdk.js", function() {
                    FB.init({
                        appId: "237724236390598",
                        version: "v2.6"
                    }), e()
                }) : e()
            },
            i = function(t) {
                void 0 === window.twttr ? (window.twttr = function(t, e, n) {
                    var i, o = t.getElementsByTagName(e)[0],
                        r = window.twttr || {};
                    return t.getElementById(n) ? r : (i = t.createElement(e), i.id = n, i.src = "https://platform.twitter.com/widgets.js", o.parentNode.insertBefore(i, o), r._e = [], r.ready = function(t) {
                        r._e.push(t)
                    }, r)
                }(document, "script", "twitter-wjs"), twttr.ready(t)) : t(twttr)
            };
        e.social = {
            loadFb: function(t) {
                t = t || function() {}, n(t)
            },
            loadTwitter: function(t) {
                t = t || function() {}, i(t)
            }
        }
    }($, app);
var cyberdelia = {};
! function(t, e) {
    e.knock = function() {
        t.loadModule("cyberdelia")
    }
}(app, cyberdelia),
function(t, e) {
    "use strict";
    var n = function(t) {
            var e = 1e3 * t - +new Date,
                n = Math.floor(e / 1e3 % 60),
                i = Math.floor(e / 1e3 / 60 % 60),
                o = Math.floor(e / 36e5 % 24);
            return {
                total: e,
                d: Math.floor(e / 864e5),
                h: o,
                m: i,
                s: n
            }
        },
        i = function(t) {
            return +t >= 0 && +t < 10 ? "0" + t : t
        },
        o = function(t, e) {
            t.find(".countdown-timer-unit-d .countdown-timer-count").text(i(e.d)), t.find(".countdown-timer-unit-h .countdown-timer-count").text(i(e.h)), t.find(".countdown-timer-unit-m .countdown-timer-count").text(i(e.m)), t.find(".countdown-timer-unit-s .countdown-timer-count").text(i(e.s))
        },
        r = function(t, e) {
            var i = setInterval(function() {
                var r = n(e);
                if (r.total <= 0) return void clearInterval(i);
                o(t, r)
            }, 1e3)
        },
        a = function(t) {
            var e = t.attr("data-deadline");
            e && r(t, +e)
        };
    e.components.tnwCountdown = {
        init: function() {
            e.helpers.attachOnce(e.$body.find(".tnw-countdown"), "tnw-countdown", a)
        }
    }
}($, app), $(app.components.tnwCountdown.init),
    function(t, e, n) {
        console.log("Hi cyber-space traveller. Maybe you want to see our cyberdelia.menu().");
        var i = function() {
            var t = ["Are you looking for a job?", " 1) Yes... and I'm the ninja unicorn you are looking for", "", "Nope, I was...", " 2) ... just curious", " 3) ... trying to hack into your system", "---", "Try cyberdelia.menu(option)"];
            console.log(t.join("\n"))
        };
        n.menu = function(t) {
            if (t) switch (t) {
                case 1:
                    console.log("Interesting. Please tell us more jobs@thenextweb.com");
                    break;
                case 2:
                    console.log("Nice! Aren't you curious about this https://youtu.be/dQw4w9WgXcQ ?");
                    break;
                case 3:
                    console.log("Well... enjoy! http://hackertyper.com/");
                    break;
                default:
                    console.log("Meeeeh")
            } else i()
        }
    }($, 0, cyberdelia),
    function(t, e) {
        "use strict";
        e.jwplayerAd = {
            show: function() {
                var e = Math.floor(100 * Math.random()) + 1,
                    n = t(".jwplayer-placeholder");
                e <= 40 && (jwplayer("jwplayerInlineAd").setup({
                    playlist: "https://cdn.jwplayer.com/v2/playlists/" + window.jwLibrary
                }), n.show())
            }
        }
    }($, app), $(window).on("tnw-loadAds", app.jwplayerAd.show),
    function(t, e) {
        "use strict";
        e.modules.gallery = {};
        var n = function(e) {
            if (e.attr("id") && 0 !== e.find(".photo--active").length) {
                var n = function(e) {
                    t(".photo-credit").remove();
                    var n = e.attr("data-photographer-name");
                    "" !== n.trim() && e.append("<div class='photo-credit'>" + n + "</div>")
                };
                e.addClass("is-attached");
                var i = e.find(".photo--active"),
                    o = i.index(),
                    r = e.find(".photos .photos-wrap .photo").length - 1;
                n(i);
                var a = function(t) {
                    if (!(t === o || t < 0 || t > r)) {
                        var i, a;
                        t > o ? (i = "right", a = "left") : (i = "left", a = "right"), o = t;
                        var s = e.find(".photo--active"),
                            l = e.find(".photos .photo#photo_" + (t + 1));
                        n(l), s.removeClass("photo--active").addClass("photo--out-" + a), s.one("webkitAnimationEnd animationend", function() {
                            s.removeClass("photo--out-" + a)
                        }), l.addClass("photo--active photo--in-" + i), l.one("webkitAnimationEnd animationend", function() {
                            l.removeClass("photo--in-" + i)
                        }), e.trigger("tnw-galleryphotochanged", o)
                    }
                };
                e.on("click", ".thumbs a", function(e) {
                    e.preventDefault();
                    var n = t(this).parent().index();
                    a(n)
                }), e.on("tnw-galleryphotochanged", function(t, n) {
                    e.find(".thumbs a.selected").removeClass("selected"), e.find(".thumbs li:nth-child(" + (n + 1) + ") a").addClass("selected")
                });
                var s = t('<a class="photos-navigate photos-navigate--prev"></a>'),
                    l = t('<a class="photos-navigate photos-navigate--next"></a>');
                s.on("click", function(t) {
                    t.preventDefault(), a(o - 1)
                }), l.on("click", function(t) {
                    t.preventDefault(), a(o + 1)
                }), e.find(".photos").append(s).append(l), e.on("tnw-galleryphotochanged", function(t, e) {
                    e < 1 ? s.addClass("photos-navigate--hide") : s.removeClass("photos-navigate--hide"), e >= r ? l.addClass("photos-navigate--hide") : l.removeClass("photos-navigate--hide")
                }), t(window).on("keydown.tnw-gallerykeydown", function(t) {
                    37 === t.keyCode && (t.preventDefault(), a(o - 1)), 39 === t.keyCode && (t.preventDefault(), a(o + 1))
                }), e.trigger("tnw-galleryphotochanged", o)
            }
        };
        e.modules.gallery.init = function() {
            e.helpers.attachOnce(".gallery", "photo-gallery", n)
        }, t(window).on("tnw-DOMChange", e.modules.gallery.init)
    }($, app), $(app.modules.gallery.init),
    function(t, e) {
        "use strict";
        var n = null,
            i = 4,
            o = function() {
                n.find(".page-beacon").each(function() {
                    var n = t(this);
                    e.helpers.attachOnce(n, "page-beacon", function() {
                        r(n)
                    })
                })
            },
            r = function(t) {
                var e = t.data("page-idx");
                t.waypoint(function() {
                    t.data("page-loaded") ? s(e) : (u(e + 1), t.data("page-loaded", !0))
                }, {
                    offset: "bottom-in-view"
                })
            },
            a = function(t) {
                var n, i = /page\/[\d]+\//;
                return t = t || e.env.pageIdx, n = t <= 1 ? "" : "page/" + t + "/", (null !== window.location.pathname.match(i) ? window.location.pathname.replace(i, n) : window.location.pathname + n) + window.location.search
            },
            s = function(t) {
                e.env.pageIdx = t, history.replaceState({}, "", a(t))
            },
            l = function(e, r) {
                n.append(e), s(r), r < i ? o() : t(".pager-next").attr("href", a(r + 1)).addClass("shown"), t(window).trigger("tnw-DOMChange")
            },
            c = function(t) {
                var n = {
                    page: t
                };
                switch (e.env.template) {
                    case "author":
                        n.author = e.env.author;
                        break;
                    case "post_type":
                        n.post_type = e.env.post_type;
                        break;
                    case "category":
                    case "archive":
                    case "tag":
                    default:
                        n.slug = e.env.slug, n.taxo = e.env.taxo
                }
                return n
            },
            u = function(n) {
                var i = t.Deferred();
                p(), d(1e4), n = n || e.env.pageIdx + 1, t.ajax({
                    type: "GET",
                    url: e.env.paths.base + "ajax/partials/grid-pager.php",
                    data: c(n),
                    dataType: "html",
                    success: i.resolve,
                    error: i.reject
                }), i.promise().done(function(t) {
                    t.length > 0 && l(t, n)
                }).always(function() {
                    d()
                })
            },
            p = function() {
                n.toggleClass("is-loading-page", !0)
            },
            d = function(t) {
                t = t || 1, e.helpers.debounce(function() {
                    n.toggleClass("is-loading-page", !1)
                }, t, "loading-page")
            };
        e.modules.gridPager = {
            init: function() {
                n = e.$main.find(".wrapper section.channel"), i += e.env.pageIdx, e.helpers.attachOnce(n, "grid-pager", function() {
                    o()
                })
            }
        }
    }($, app), $(app.modules.gridPager.init),
    function(t, e) {
        "use strict";
        e.modules.popupCenter = function(t, e, n, i) {
            var o, r = void 0 != window.screenLeft ? window.screenLeft : screen.left,
                a = void 0 != window.screenTop ? window.screenTop : screen.top,
                s = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                l = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
                c = s / 2 - n / 2 + r,
                u = l / 2 - i / 2 + a;
            o = window.open(t, e, "scrollbars=yes, width=" + n + ", height=" + i + ", top=" + u + ", left=" + c), window.focus && o && o.focus()
        }
    }($, app),
    function(t, e) {
        "use strict";
        var n, i = null,
            o = null,
            r = null,
            a = null,
            s = null,
            l = "";
        e.modules.wpUserAdmin = {}, e.modules.wpUserAdmin.coverEditor = {
            init: function() {
                var n = t('<li class="nav-tnw-right"><a href="#"><b>Edit homepage</b></a></li>');
                n.on("click", function(t) {
                    n.remove(), t.preventDefault(), e.modules.wpUserAdmin.coverEditor.load()
                }), t(".nav-tnw").append(n)
            },
            load: function() {
                null === i && (e.$body.wrapInner('<div class="homepageEditor-canvas-wrap"><div class="homepageEditor-canvas"></div></div>'), i = e.$body.find(".homepageEditor-canvas"), r = e.$body.find(".cover"), i.css({
                    padding: e.$body.css("margin")
                }), o = t('<form class="homepageEditor" method="post" action="' + e.env.paths.base + "ajax/editor/homepage.php?" + +new Date + '"><div class="header"><button class="button" type="submit">Save</button><span>Edit homepage</span></div><div class="content"></div></form>'), o.appendTo(e.$body)), o.find(".content").html('<br><br><br><center><img src="https://i.imgur.com/RhsS6ci.gif"/>'), t.get(e.env.paths.base + "ajax/editor/homepage.php", function(n) {
                    o.find(".content").html(n), a = a || t("#homepageEditorPosts"), s = s || a.find("input#slugsInput"), e.modules.wpUserAdmin.coverEditor.search()
                }), e.modules.wpUserAdmin.coverEditor.controls(), e.modules.wpUserAdmin.coverEditor.posts(), e.modules.wpUserAdmin.coverEditor.cover(), setTimeout(function() {
                    e.$body.toggleClass("homepage-editor-on", !0)
                }, 60)
            },
            unload: function() {
                window.location.reload()
            },
            cover: function() {
                o.on("change", ".multi[data-for=hp_cover_layout]", function(t, e) {
                    r.attr("class", "cover").addClass("cover--grid" + e)
                })
            },
            controls: function() {
                o.on("change", ".multi", function(e, n) {
                    var i = t(this);
                    o.find('*[name="' + i.data("for") + '"]').val(n), i.find(".is-active").removeClass("is-active"), i.find('*[data-value="' + n + '"]').addClass("is-active")
                }), o.on("click", ".multi > *[data-value]", function() {
                    t(this).parent().trigger("change", [t(this).data("value")])
                })
            },
            posts: function() {
                var n = function(e, n) {
                        if (!n.id) throw "No post ID";
                        var a;
                        try {
                            a = JSON.parse(o.find('*[name="hp_cover_post_ids"]').val())
                        } catch (t) {
                            a = []
                        }(!a || a.length < 4) && (a = [i(r.find(".cover-story:nth-child(1)")).id, i(r.find(".cover-story:nth-child(2)")).id, i(r.find(".cover-story:nth-child(3)")).id, i(r.find(".cover-story:nth-child(4)")).id]), a[e] = n.id, o.find('*[name="hp_cover_post_ids"]').val(JSON.stringify(a));
                        var s = t(r.find(".cover-story")[e]);
                        s.data("postId", n.id), s.find(".cover-image").css("background-image", n.image), s.find(".cover-header .cover-title").html("<a>" + n.title + "</a>"), s.find(".cover-header .cover-section, .cover-header .cover-byline").hide()
                    },
                    i = function(t) {
                        return {
                            id: t.data("postId"),
                            title: t.find(".cover-header .cover-title").text(),
                            image: t.find(".cover-image").css("background-image")
                        }
                    },
                    a = function(t) {
                        return {
                            id: t.data("postId"),
                            title: t.find(".title .text").text(),
                            image: t.find(".image").css("background-image")
                        }
                    };
                r.find(".cover-story").add(o.find(".post-row")).attr("draggable", "draggable"), e.$body.on("dragstart", ".cover .cover-story", function(e) {
                    e.originalEvent.dataTransfer.effectAllowed = "move", e.originalEvent.dataTransfer.setData("text/plain", JSON.stringify({
                        swap: t(this).index(),
                        post: i(t(this))
                    }))
                }), e.$body.on("dragstart", ".homepageEditor .post-row", function(e) {
                    e.originalEvent.dataTransfer.effectAllowed = "move", e.originalEvent.dataTransfer.setData("text/plain", JSON.stringify({
                        post: a(t(this))
                    }))
                }), r.find(".cover-story").on("drop", function(e) {
                    console.log(e);
                    var o = JSON.parse(e.originalEvent.dataTransfer.getData("text/plain"));
                    void 0 !== o.swap && n(o.swap, i(t(this))), n(t(this).index(), o.post)
                }), r.find(".cover-story").on("dragover", function(t) {
                    t.preventDefault()
                }), o.on("click", ".reset", function() {
                    n(0, a(o.find(".post-row:nth-child(1)"))), n(1, a(o.find(".post-row:nth-child(2)"))), n(2, a(o.find(".post-row:nth-child(3)"))), n(3, a(o.find(".post-row:nth-child(4)"))), o.find('*[name="hp_cover_post_ids"]').val("[]")
                })
            },
            search: function() {
                var i = function(t) {
                        t.on("keyup", function(t) {
                            e.helpers.debounce(o, 400, "posts-keystroke")
                        })
                    },
                    o = function() {
                        var t = s.val();
                        t != l && c(t)
                    },
                    r = function(t) {
                        t.on("submit", function(t) {
                            t.preventDefault()
                        })
                    };
                e.helpers.attachOnce(a.find("form#slugsForm"), r), e.helpers.attachOnce(s, "posts-keystroke", i);
                var c = function(i) {
                    n && "pending" === n.state() && n.abort && n.abort(), l = i, n = t.Deferred(), a.toggleClass("is-searching", !0), t.ajax({
                        type: "GET",
                        url: e.env.paths.base + "ajax/partials/homepage-editor-posts.php",
                        data: {
                            slug: i
                        },
                        dataType: "html",
                        success: n.resolve,
                        error: n.reject
                    }), n.promise().always(function() {
                        a.toggleClass("is-searching", !1)
                    }).then(function(t) {
                        a.find("#postsEditor").html(t)
                    })
                };
                c("")
            }
        };
        var c = function() {
                var n = t("<a>").attr("href", "/wp-admin/post.php?post=" + e.env.currentPost + "&action=edit").attr("target", "_blank").text("Edit this post");
                t(".post-header .post-section").after(t("<span>").text(" — "), n)
            },
            u = function() {
                if (e.cookie.read("tnw_auth_cookie")) var t = JSON.parse(decodeURIComponent(e.cookie.read("tnw_auth_cookie")));
                t && t.canEditPosts && "article" === e.env.template && c(), t && t.canEditCover && "home" === e.env.template && e.modules.wpUserAdmin.coverEditor.init()
            };
        e.modules.wpUserAdmin.init = function() {
            e.helpers.attachOnce(e.$body, "wp-user-admin", u)
        }
    }($, app), $(app.modules.wpUserAdmin.init),
    function(t) {
        var e = function(e) {
                if (!e || !e.profile || !e.info) throw "BAD_STRUCTURE";
                var n = t("<div></div>").addClass("idc-card-header");
                n.append(t("<img></img>").attr({
                    src: e.profile.avatar,
                    class: "idc-card-header-avatar"
                })), n.append(t("<h2></h2>").attr({
                    class: "idc-card-header-title"
                }).text(e.profile.name));
                var i = t("<ul></ul>").attr({
                    class: "idc-card-header-tags"
                });
                e.info.market && i.append(t("<li></li>").text(e.info.market)), e.info.country && i.append(t("<li></li>").text(e.info.country)), n.append(i);
                var o = t("<div></div>").addClass("idc-card-facts"),
                    r = t("<ul></ul>").attr({
                        class: "idc-card-facts-tags"
                    });
                e.info.founded && r.append(t("<li></li>").text("Founded in " + e.info.founded)), e.info.raised && r.append(t("<li></li>").text("Raised " + e.info.raised)), e.info.employees && r.append(t("<li></li>").text(e.info.employees + " employees")), o.append(r);
                var a = t("<div></div>").addClass("idc-card-footer").html("<p>Click the icon below to view profile</p>");
                return t("<div></div>").addClass("idc-card").append(n).append(o).append(a)
            },
            n = function(n) {
                var i = document.createElement("a");
                i.href = n.attr("href");
                var o, r, a = i.pathname.split("/")[2],
                    s = "https://index.co/api/company/" + a + "?version=0.0.2";
                n.attr("target", "_blank").attr("href", i.href + "?utm_source=thenextweb.com&utm_medium=referral&utm_campaign=hover-" + a), n.on("mouseover", function(i) {
                    !0 == !n.data("idc-hasIndexPopover") && (n.data("idc-hasIndexPopover", !0), o = t.ajax({
                        dataType: "json",
                        type: "GET",
                        url: s
                    }), o.done(function(t) {
                        try {
                            r = new app.hovercard({
                                prefix: "idc-",
                                html: e(t),
                                top: n.offset().top,
                                left: n.offset().left + n.outerWidth() / 2
                            }), r.onClose(function() {
                                n.data("idc-hasIndexPopover", !1)
                            }), r.place()
                        } catch (t) {
                            console.error("[index hovercards] parsing error (" + t + ') loading hovercard for "' + a + '" at endpoint "' + s + '"')
                        }
                    }), o.fail(function(t, e) {
                        "abort" !== e && console.error("[index hovercards] http error (" + e + ') loading hovercard for "' + a + '" at endpoint "' + s + '"')
                    }))
                }), n.on("mouseout", function(t) {
                    "resolved" !== o.state() && (n.data("idc-hasIndexPopover", !1), o.abort())
                })
            };
        t(function() {
            t("a.idc-hasIcon").each(function() {
                n(t(this))
            })
        })
    }(jQuery);