! function(e) {
    function t(n) {
        if (i[n]) return i[n].exports;
        var r = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    var n = window.webpackJsonp;
    window.webpackJsonp = function(t, i, o) {
        for (var a, s, c = 0, l = []; c < t.length; c++) s = t[c], r[s] && l.push(r[s][0]), r[s] = 0;
        for (a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
        for (n && n(t, i, o); l.length;) l.shift()()
    };
    var i = {},
        r = {
            11: 0
        },
        o = {
            0: "sha256-F6BAgDojiC9KjniToVdjQG8um1FIBSm1kJc71iB+Nh8= sha384-8s/UxDyQg3fmpXSzAFT/ZJ1LvfHsf/x916hwUvrXEc4xT5g+Au75bivVg8Hvkh9P",
            1: "sha256-Sd0t2QzgyTlYu872P6b5eVzZxiqD8H7yYPM/yKOlskY= sha384-A3L71UZOR+4oh1pxDBMJuzxE2lb90H1/r0PaTuvn5JA06gKkSNILkuJTDBH77Ndt",
            2: "sha256-nzaL+kginx5tt/QnGHJukKvS4JBfefSM7z4KoANuK9k= sha384-AWWu/4MGcQIEqoTdJjKy9MJ5WVwo4N0eYmb9U+deE90vUH8SiY6rfPxkZMRHC7Ti",
            3: "sha256-mPXgpsBY56UZxD1trfOTyK8SUYntSiNJ+7B3fDE69yE= sha384-vdggWsRI3dHFZSUYDHDKTgy2jlpWMw7gmcbIFw8HIdQHPsxEAAv9PEWhxdrigedw",
            4: "sha256-aOsBNvdL47KR7qYUbEu/do0ZKvCSBfVfxfXqj7JvyVI= sha384-XmfVDbG/ZRIvSzRxS+g1Vmnu/5YrigTifIc7sukOwfsNyrqyaju4gyN7yw2WKYk3",
            5: "sha256-pXf65pK3HWhdMtgX4cQEMr41h2uQloFVJs4fr+73tok= sha384-IihTwayE3QfSQB0GvR4rlAmJbJyLR1ISbEuQqF6ckhHUXblPwqg1H6hKhqmooRjH",
            6: "sha256-G0nyzHyQzN2K6bTuMpewcEznZBX8QOTYO/kQ8CEEGJE= sha384-/lyJjW8ID5pKj9YQAV3Uhww2XNsc1CWLRaZQLqUn0fzgIbHqSn/BTplIspnbbv5O",
            7: "sha256-AYcABBSTzWoQ66QXCSwVt5RmjOEGRQr5uHWPgsl/hBo= sha384-SKCKyJqOtHWDoQaGLpVqp3UtyYFsKVoIFHvtZQDIY8WnOsopDD9GZqlMSMkQpNoD",
            8: "sha256-r1LvX/+//ZS/z21GUcFwdsnCbtaJiw6S39dQ/eibVoQ= sha384-otP6zCZcJEggHIP0vf7Wuox7O12zb+4ya+VDO0YJKzgt32Rg8Uwffs8iUt4RRvrF",
            9: "sha256-Uwl7J+nn2Lnux1vtH/faBQnuqODPGvB5hW4KMjtSvMY= sha384-0Zn6Hwbgh9rn+8KoQ1RlKGYnZ0TeY+66Tww7HM5ar7W3TNCbyFBxWCMtuGnGw1Cr",
            10: "sha256-Cpo2o7exFYMQGsgU7UFErprdNnkW34RJZPkXUAqotDw= sha384-wRdPKjrcSqq36wNP7eQlnO4vqzoJCPCKQh3Ov/K1Ear04ByoI8AUbhU+X904bZIi"
        };
    t.e = function(e) {
        function n() {
            c.onerror = c.onload = null, clearTimeout(l);
            var t = r[e];
            0 !== t && (t && t[1](new Error("Loading chunk " + e + " failed.")), r[e] = void 0)
        }
        var i = r[e];
        if (0 === i) return new Promise(function(e) {
            e()
        });
        if (i) return i[2];
        var a = new Promise(function(t, n) {
            i = r[e] = [t, n]
        });
        i[2] = a;
        var s = document.getElementsByTagName("head")[0],
            c = document.createElement("script");
        c.type = "text/javascript", c.charset = "utf-8", c.async = !0, c.timeout = 12e4, c.crossOrigin = "anonymous", t.nc && c.setAttribute("nonce", t.nc), c.src = t.p + "" + ({
            0: "app-auth",
            1: "app-comments",
            4: "snippet-anim",
            8: "app-scoreboard",
            9: "app-poll",
            10: "app-table"
        } [e] || e) + "-" + {
            0: "7aeb1a59c584fe60b759",
            1: "dfc917474fee4bf527b1",
            2: "d26e97a1228437aac5fe",
            3: "00acafafc89b8e651316",
            4: "e5a4d854badc01f141e8",
            5: "e80c1e9f18b2b10ef899",
            6: "aff4b8712a96145d39d9",
            7: "44bcd72112b31081fd55",
            8: "d8e82378f19e33bef1c3",
            9: "60fd192f059f4d6e087b",
            10: "19ca279faa9ad956daa1"
        } [e] + ".chunk.js";
        var l = setTimeout(n, 12e4);
        return c.onerror = c.onload = n, c.integrity = o[e], s.appendChild(c), a
    }, t.m = e, t.c = i, t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "https://cdn.vox-cdn.com/packs/", t.oe = function(e) {
        throw console.error(e), e
    }, t(t.s = 120)
}([function(e, t, n) {
    var i, r;
    ! function(t, n) {
        "object" === typeof e && "object" === typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" !== typeof window ? window : this, function(n, o) {
        function a(e) {
            var t = "length" in e && e.length,
                n = ne.type(e);
            return "function" !== n && !ne.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" === typeof t && t > 0 && t - 1 in e))
        }

        function s(e, t, n) {
            if (ne.isFunction(t)) return ne.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return ne.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" === typeof t) {
                if (ue.test(t)) return ne.filter(t, e, n);
                t = ne.filter(t, e)
            }
            return ne.grep(e, function(e) {
                return Z.call(t, e) >= 0 !== n
            })
        }

        function c(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function l(e) {
            var t = me[e] = {};
            return ne.each(e.match(ge) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function u() {
            te.removeEventListener("DOMContentLoaded", u, !1), n.removeEventListener("load", u, !1), ne.ready()
        }

        function d() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = ne.expando + d.uid++
        }

        function f(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(Ae, "-$1").toLowerCase(), "string" === typeof(n = e.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : we.test(n) ? ne.parseJSON(n) : n)
                    } catch (e) {}
                    _e.set(e, t, n)
                } else n = void 0;
            return n
        }

        function h() {
            return !0
        }

        function p() {
            return !1
        }

        function g() {
            try {
                return te.activeElement
            } catch (e) {}
        }

        function m(e, t) {
            return ne.nodeName(e, "table") && ne.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function v(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function y(e) {
            var t = $e.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function b(e, t) {
            for (var n = 0, i = e.length; n < i; n++) be.set(e[n], "globalEval", !t || be.get(t[n], "globalEval"))
        }

        function _(e, t) {
            var n, i, r, o, a, s, c, l;
            if (1 === t.nodeType) {
                if (be.hasData(e) && (o = be.access(e), a = be.set(t, o), l = o.events)) {
                    delete a.handle, a.events = {};
                    for (r in l)
                        for (n = 0, i = l[r].length; n < i; n++) ne.event.add(t, r, l[r][n])
                }
                _e.hasData(e) && (s = _e.access(e), c = ne.extend({}, s), _e.set(t, c))
            }
        }

        function w(e, t) {
            var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && ne.nodeName(e, t) ? ne.merge([e], n) : n
        }

        function A(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Te.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function x(e, t) {
            var i, r = ne(t.createElement(e)).appendTo(t.body),
                o = n.getDefaultComputedStyle && (i = n.getDefaultComputedStyle(r[0])) ? i.display : ne.css(r[0], "display");
            return r.detach(), o
        }

        function k(e) {
            var t = te,
                n = Be[e];
            return n || (n = x(e, t), "none" !== n && n || (He = (He || ne("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = He[0].contentDocument, t.write(), t.close(), n = x(e, t), He.detach()), Be[e] = n), n
        }

        function C(e, t, n) {
            var i, r, o, a, s = e.style;
            return n = n || ze(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || ne.contains(e.ownerDocument, e) || (a = ne.style(e, t)), Ve.test(a) && qe.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
        }

        function T(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function E(e, t) {
            if (t in e) return t;
            for (var n = t[0].toUpperCase() + t.slice(1), i = t, r = Ze.length; r--;)
                if ((t = Ze[r] + n) in e) return t;
            return i
        }

        function j(e, t, n) {
            var i = We.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function S(e, t, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += ne.css(e, n + ke[o], !0, r)), i ? ("content" === n && (a -= ne.css(e, "padding" + ke[o], !0, r)), "margin" !== n && (a -= ne.css(e, "border" + ke[o] + "Width", !0, r))) : (a += ne.css(e, "padding" + ke[o], !0, r), "padding" !== n && (a += ne.css(e, "border" + ke[o] + "Width", !0, r)));
            return a
        }

        function M(e, t, n) {
            var i = !0,
                r = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = ze(e),
                a = "border-box" === ne.css(e, "boxSizing", !1, o);
            if (r <= 0 || null == r) {
                if (r = C(e, t, o), (r < 0 || null == r) && (r = e.style[t]), Ve.test(r)) return r;
                i = a && (ee.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + S(e, t, n || (a ? "border" : "content"), i, o) + "px"
        }

        function O(e, t) {
            for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++) i = e[a], i.style && (o[a] = be.get(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ce(i) && (o[a] = be.access(i, "olddisplay", k(i.nodeName)))) : (r = Ce(i), "none" === n && r || be.set(i, "olddisplay", r ? n : ne.css(i, "display"))));
            for (a = 0; a < s; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
            return e
        }

        function P(e, t, n, i, r) {
            return new P.prototype.init(e, t, n, i, r)
        }

        function N() {
            return setTimeout(function() {
                Je = void 0
            }), Je = ne.now()
        }

        function I(e, t) {
            var n, i = 0,
                r = {
                    height: e
                };
            for (t = t ? 1 : 0; i < 4; i += 2 - t) n = ke[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function L(e, t, n) {
            for (var i, r = (it[t] || []).concat(it["*"]), o = 0, a = r.length; o < a; o++)
                if (i = r[o].call(n, t, e)) return i
        }

        function R(e, t, n) {
            var i, r, o, a, s, c, l, u = this,
                d = {},
                f = e.style,
                h = e.nodeType && Ce(e),
                p = be.get(e, "fxshow");
            n.queue || (s = ne._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, c = s.empty.fire, s.empty.fire = function() {
                s.unqueued || c()
            }), s.unqueued++, u.always(function() {
                u.always(function() {
                    s.unqueued--, ne.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], l = ne.css(e, "display"), "inline" === ("none" === l ? be.get(e, "olddisplay") || k(e.nodeName) : l) && "none" === ne.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", u.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (r = t[i], Ke.exec(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                        if ("show" !== r || !p || void 0 === p[i]) continue;
                        h = !0
                    }
                    d[i] = p && p[i] || ne.style(e, i)
                } else l = void 0;
            if (ne.isEmptyObject(d)) "inline" === ("none" === l ? k(e.nodeName) : l) && (f.display = l);
            else {
                p ? "hidden" in p && (h = p.hidden) : p = be.access(e, "fxshow", {}), o && (p.hidden = !h), h ? ne(e).show() : u.done(function() {
                    ne(e).hide()
                }), u.done(function() {
                    var t;
                    be.remove(e, "fxshow");
                    for (t in d) ne.style(e, t, d[t])
                });
                for (i in d) a = L(h ? p[i] : 0, i, u), i in p || (p[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function $(e, t) {
            var n, i, r, o, a;
            for (n in e)
                if (i = ne.camelCase(n), r = t[i], o = e[n], ne.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = ne.cssHooks[i]) && "expand" in a) {
                    o = a.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = r)
                } else t[i] = r
        }

        function D(e, t, n) {
            var i, r, o = 0,
                a = nt.length,
                s = ne.Deferred().always(function() {
                    delete c.elem
                }),
                c = function() {
                    if (r) return !1;
                    for (var t = Je || N(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, o = 1 - i, a = 0, c = l.tweens.length; a < c; a++) l.tweens[a].run(o);
                    return s.notifyWith(e, [l, o, n]), o < 1 && c ? n : (s.resolveWith(e, [l]), !1)
                },
                l = s.promise({
                    elem: e,
                    props: ne.extend({}, t),
                    opts: ne.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Je || N(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = ne.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? l.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < i; n++) l.tweens[n].run(1);
                        return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                    }
                }),
                u = l.props;
            for ($(u, l.opts.specialEasing); o < a; o++)
                if (i = nt[o].call(l, e, u, l.opts)) return i;
            return ne.map(u, L, l), ne.isFunction(l.opts.start) && l.opts.start.call(e, l), ne.fx.timer(ne.extend(c, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }

        function F(e) {
            return function(t, n) {
                "string" !== typeof t && (n = t, t = "*");
                var i, r = 0,
                    o = t.toLowerCase().match(ge) || [];
                if (ne.isFunction(n))
                    for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function H(e, t, n, i) {
            function r(s) {
                var c;
                return o[s] = !0, ne.each(e[s] || [], function(e, s) {
                    var l = s(t, n, i);
                    return "string" !== typeof l || a || o[l] ? a ? !(c = l) : void 0 : (t.dataTypes.unshift(l), r(l), !1)
                }), c
            }
            var o = {},
                a = e === bt;
            return r(t.dataTypes[0]) || !o["*"] && r("*")
        }

        function B(e, t) {
            var n, i, r = ne.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && ne.extend(!0, e, i), e
        }

        function q(e, t, n) {
            for (var i, r, o, a, s = e.contents, c = e.dataTypes;
                "*" === c[0];) c.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (r in s)
                    if (s[r] && s[r].test(i)) {
                        c.unshift(r);
                        break
                    } if (c[0] in n) o = c[0];
            else {
                for (r in n) {
                    if (!c[0] || e.converters[r + " " + c[0]]) {
                        o = r;
                        break
                    }
                    a || (a = r)
                }
                o = o || a
            }
            if (o) return o !== c[0] && c.unshift(o), n[o]
        }

        function V(e, t, n, i) {
            var r, o, a, s, c, l = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
            for (o = u.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = o, o = u.shift())
                    if ("*" === o) o = c;
                    else if ("*" !== c && c !== o) {
                if (!(a = l[c + " " + o] || l["* " + o]))
                    for (r in l)
                        if (s = r.split(" "), s[1] === o && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
                            !0 === a ? a = l[r] : !0 !== l[r] && (o = s[0], u.unshift(s[1]));
                            break
                        } if (!0 !== a)
                    if (a && e.throws) t = a(t);
                    else try {
                        t = a(t)
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: a ? e : "No conversion from " + c + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function z(e, t, n, i) {
            var r;
            if (ne.isArray(t)) ne.each(t, function(t, r) {
                n || kt.test(e) ? i(e, r) : z(e + "[" + ("object" === typeof r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== ne.type(t)) i(e, t);
            else
                for (r in t) z(e + "[" + r + "]", t[r], n, i)
        }

        function U(e) {
            return ne.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var W = [],
            G = W.slice,
            Q = W.concat,
            Y = W.push,
            Z = W.indexOf,
            J = {},
            X = J.toString,
            K = J.hasOwnProperty,
            ee = {},
            te = n.document,
            ne = function(e, t) {
                return new ne.fn.init(e, t)
            },
            ie = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            re = /^-ms-/,
            oe = /-([\da-z])/gi,
            ae = function(e, t) {
                return t.toUpperCase()
            };
        ne.fn = ne.prototype = {
            jquery: "2.1.4",
            constructor: ne,
            selector: "",
            length: 0,
            toArray: function() {
                return G.call(this)
            },
            get: function(e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : G.call(this)
            },
            pushStack: function(e) {
                var t = ne.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return ne.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(ne.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(G.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: Y,
            sort: W.sort,
            splice: W.splice
        }, ne.extend = ne.fn.extend = function() {
            var e, t, n, i, r, o, a = arguments[0] || {},
                s = 1,
                c = arguments.length,
                l = !1;
            for ("boolean" === typeof a && (l = a, a = arguments[s] || {}, s++), "object" === typeof a || ne.isFunction(a) || (a = {}), s === c && (a = this, s--); s < c; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = a[t], i = e[t], a !== i && (l && i && (ne.isPlainObject(i) || (r = ne.isArray(i))) ? (r ? (r = !1, o = n && ne.isArray(n) ? n : []) : o = n && ne.isPlainObject(n) ? n : {}, a[t] = ne.extend(l, o, i)) : void 0 !== i && (a[t] = i));
            return a
        }, ne.extend({
            expando: "jQuery" + ("2.1.4" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === ne.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                return !ne.isArray(e) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(e) {
                return "object" === ne.type(e) && !e.nodeType && !ne.isWindow(e) && !(e.constructor && !K.call(e.constructor.prototype, "isPrototypeOf"))
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" === typeof e || "function" === typeof e ? J[X.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                var t, n = eval;
                (e = ne.trim(e)) && (1 === e.indexOf("use strict") ? (t = te.createElement("script"), t.text = e, te.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function(e) {
                return e.replace(re, "ms-").replace(oe, ae)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, n) {
                var i = 0,
                    r = e.length,
                    o = a(e);
                if (n) {
                    if (o)
                        for (; i < r && !1 !== t.apply(e[i], n); i++);
                    else
                        for (i in e)
                            if (!1 === t.apply(e[i], n)) break
                } else if (o)
                    for (; i < r && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ie, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (a(Object(e)) ? ne.merge(n, "string" === typeof e ? [e] : e) : Y.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : Z.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
                return i
            },
            map: function(e, t, n) {
                var i, r = 0,
                    o = e.length,
                    s = a(e),
                    c = [];
                if (s)
                    for (; r < o; r++) null != (i = t(e[r], r, n)) && c.push(i);
                else
                    for (r in e) null != (i = t(e[r], r, n)) && c.push(i);
                return Q.apply([], c)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                if ("string" === typeof t && (n = e[t], t = e, e = n), ne.isFunction(e)) return i = G.call(arguments, 2), r = function() {
                    return e.apply(t || this, i.concat(G.call(arguments)))
                }, r.guid = e.guid = e.guid || ne.guid++, r
            },
            now: Date.now,
            support: ee
        }), ne.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            J["[object " + t + "]"] = t.toLowerCase()
        });
        var se = function(e) {
            function t(e, t, n, i) {
                var r, o, a, s, l, d, f, h, p, g;
                if ((t ? t.ownerDocument || t : D) !== M && S(t), t = t || M, n = n || [], s = t.nodeType, "string" !== typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
                if (!i && P) {
                    if (11 !== s && (r = me.exec(e)))
                        if (a = r[1]) {
                            if (9 === s) {
                                if (!(o = t.getElementById(a)) || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && R(t, o) && o.id === a) return n.push(o), n
                        } else {
                            if (r[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = r[3]) && b.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)), n
                        } if (b.qsa && (!N || !N.test(e))) {
                        if (h = f = $, p = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (d = x(e), (f = t.getAttribute("id")) ? h = f.replace(ye, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", l = d.length; l--;) d[l] = h + u(d[l]);
                            p = ve.test(e) && c(t.parentNode) || t, g = d.join(",")
                        }
                        if (g) try {
                            return Z.apply(n, p.querySelectorAll(g)), n
                        } catch (e) {} finally {
                            f || t.removeAttribute("id")
                        }
                    }
                }
                return C(e.replace(ae, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > _.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[$] = !0, e
            }

            function r(e) {
                var t = M.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), i = e.length; i--;) _.attrHandle[n[i]] = t
            }

            function a(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function c(e) {
                return e && "undefined" !== typeof e.getElementsByTagName && e
            }

            function l() {}

            function u(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function d(e, t, n) {
                var i = t.dir,
                    r = n && "parentNode" === i,
                    o = H++;
                return t.first ? function(t, n, o) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) return e(t, n, o)
                } : function(t, n, a) {
                    var s, c, l = [F, o];
                    if (a) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) {
                                if (c = t[$] || (t[$] = {}), (s = c[i]) && s[0] === F && s[1] === o) return l[2] = s[2];
                                if (c[i] = l, l[2] = e(t, n, a)) return !0
                            }
                }
            }

            function f(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function h(e, n, i) {
                for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
                return i
            }

            function p(e, t, n, i, r) {
                for (var o, a = [], s = 0, c = e.length, l = null != t; s < c; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), l && t.push(s)));
                return a
            }

            function g(e, t, n, r, o, a) {
                return r && !r[$] && (r = g(r)), o && !o[$] && (o = g(o, a)), i(function(i, a, s, c) {
                    var l, u, d, f = [],
                        g = [],
                        m = a.length,
                        v = i || h(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || !i && t ? v : p(v, f, e, s, c),
                        b = n ? o || (i ? e : m || r) ? [] : a : y;
                    if (n && n(y, b, s, c), r)
                        for (l = p(b, g), r(l, [], s, c), u = l.length; u--;)(d = l[u]) && (b[g[u]] = !(y[g[u]] = d));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (l = [], u = b.length; u--;)(d = b[u]) && l.push(y[u] = d);
                                o(null, b = [], l, c)
                            }
                            for (u = b.length; u--;)(d = b[u]) && (l = o ? X(i, d) : f[u]) > -1 && (i[l] = !(a[l] = d))
                        }
                    } else b = p(b === a ? b.splice(m, b.length) : b), o ? o(null, a, b, c) : Z.apply(a, b)
                })
            }

            function m(e) {
                for (var t, n, i, r = e.length, o = _.relative[e[0].type], a = o || _.relative[" "], s = o ? 1 : 0, c = d(function(e) {
                        return e === t
                    }, a, !0), l = d(function(e) {
                        return X(t, e) > -1
                    }, a, !0), h = [function(e, n, i) {
                        var r = !o && (i || n !== T) || ((t = n).nodeType ? c(e, n, i) : l(e, n, i));
                        return t = null, r
                    }]; s < r; s++)
                    if (n = _.relative[e[s].type]) h = [d(f(h), n)];
                    else {
                        if (n = _.filter[e[s].type].apply(null, e[s].matches), n[$]) {
                            for (i = ++s; i < r && !_.relative[e[i].type]; i++);
                            return g(s > 1 && f(h), s > 1 && u(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(ae, "$1"), n, s < i && m(e.slice(s, i)), i < r && m(e = e.slice(i)), i < r && u(e))
                        }
                        h.push(n)
                    } return f(h)
            }

            function v(e, n) {
                var r = n.length > 0,
                    o = e.length > 0,
                    a = function(i, a, s, c, l) {
                        var u, d, f, h = 0,
                            g = "0",
                            m = i && [],
                            v = [],
                            y = T,
                            b = i || o && _.find.TAG("*", l),
                            w = F += null == y ? 1 : Math.random() || .1,
                            A = b.length;
                        for (l && (T = a !== M && a); g !== A && null != (u = b[g]); g++) {
                            if (o && u) {
                                for (d = 0; f = e[d++];)
                                    if (f(u, a, s)) {
                                        c.push(u);
                                        break
                                    } l && (F = w)
                            }
                            r && ((u = !f && u) && h--, i && m.push(u))
                        }
                        if (h += g, r && g !== h) {
                            for (d = 0; f = n[d++];) f(m, v, a, s);
                            if (i) {
                                if (h > 0)
                                    for (; g--;) m[g] || v[g] || (v[g] = Q.call(c));
                                v = p(v)
                            }
                            Z.apply(c, v), l && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(c)
                        }
                        return l && (F = w, T = y), m
                    };
                return r ? i(a) : a
            }
            var y, b, _, w, A, x, k, C, T, E, j, S, M, O, P, N, I, L, R, $ = "sizzle" + 1 * new Date,
                D = e.document,
                F = 0,
                H = 0,
                B = n(),
                q = n(),
                V = n(),
                z = function(e, t) {
                    return e === t && (j = !0), 0
                },
                U = 1 << 31,
                W = {}.hasOwnProperty,
                G = [],
                Q = G.pop,
                Y = G.push,
                Z = G.push,
                J = G.slice,
                X = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ee = "[\\x20\\t\\r\\n\\f]",
                te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ne = te.replace("w", "w#"),
                ie = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ee + "*\\]",
                re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
                oe = new RegExp(ee + "+", "g"),
                ae = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                se = new RegExp("^" + ee + "*," + ee + "*"),
                ce = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
                le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
                ue = new RegExp(re),
                de = new RegExp("^" + ne + "$"),
                fe = {
                    ID: new RegExp("^#(" + te + ")"),
                    CLASS: new RegExp("^\\.(" + te + ")"),
                    TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ie),
                    PSEUDO: new RegExp("^" + re),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + K + ")$", "i"),
                    needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
                },
                he = /^(?:input|select|textarea|button)$/i,
                pe = /^h\d$/i,
                ge = /^[^{]+\{\s*\[native \w/,
                me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ve = /[+~]/,
                ye = /'|\\/g,
                be = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
                _e = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                we = function() {
                    S()
                };
            try {
                Z.apply(G = J.call(D.childNodes), D.childNodes), G[D.childNodes.length].nodeType
            } catch (e) {
                Z = {
                    apply: G.length ? function(e, t) {
                        Y.apply(e, J.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            b = t.support = {}, A = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, S = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : D;
                return i !== M && 9 === i.nodeType && i.documentElement ? (M = i, O = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), P = !A(i), b.attributes = r(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), b.getElementsByTagName = r(function(e) {
                    return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
                }), b.getElementsByClassName = ge.test(i.getElementsByClassName), b.getById = r(function(e) {
                    return O.appendChild(e).id = $, !i.getElementsByName || !i.getElementsByName($).length
                }), b.getById ? (_.find.ID = function(e, t) {
                    if ("undefined" !== typeof t.getElementById && P) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, _.filter.ID = function(e) {
                    var t = e.replace(be, _e);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete _.find.ID, _.filter.ID = function(e) {
                    var t = e.replace(be, _e);
                    return function(e) {
                        var n = "undefined" !== typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), _.find.TAG = b.getElementsByTagName ? function(e, t) {
                    return "undefined" !== typeof t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, _.find.CLASS = b.getElementsByClassName && function(e, t) {
                    if (P) return t.getElementsByClassName(e)
                }, I = [], N = [], (b.qsa = ge.test(i.querySelectorAll)) && (r(function(e) {
                    O.appendChild(e).innerHTML = "<a id='" + $ + "'></a><select id='" + $ + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || N.push("\\[" + ee + "*(?:value|" + K + ")"), e.querySelectorAll("[id~=" + $ + "-]").length || N.push("~="), e.querySelectorAll(":checked").length || N.push(":checked"), e.querySelectorAll("a#" + $ + "+*").length || N.push(".#.+[+~]")
                }), r(function(e) {
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && N.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), N.push(",.*:")
                })), (b.matchesSelector = ge.test(L = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && r(function(e) {
                    b.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), I.push("!=", re)
                }), N = N.length && new RegExp(N.join("|")), I = I.length && new RegExp(I.join("|")), t = ge.test(O.compareDocumentPosition), R = t || ge.test(O.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, z = t ? function(e, t) {
                    if (e === t) return j = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === D && R(D, e) ? -1 : t === i || t.ownerDocument === D && R(D, t) ? 1 : E ? X(E, e) - X(E, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return j = !0, 0;
                    var n, r = 0,
                        o = e.parentNode,
                        s = t.parentNode,
                        c = [e],
                        l = [t];
                    if (!o || !s) return e === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : E ? X(E, e) - X(E, t) : 0;
                    if (o === s) return a(e, t);
                    for (n = e; n = n.parentNode;) c.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; c[r] === l[r];) r++;
                    return r ? a(c[r], l[r]) : c[r] === D ? -1 : l[r] === D ? 1 : 0
                }, i) : M
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== M && S(e), n = n.replace(le, "='$1']"), b.matchesSelector && P && (!I || !I.test(n)) && (!N || !N.test(n))) try {
                    var i = L.call(e, n);
                    if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return t(n, M, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== M && S(e), R(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== M && S(e);
                var n = _.attrHandle[t.toLowerCase()],
                    i = n && W.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
                return void 0 !== i ? i : b.attributes || !P ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (j = !b.detectDuplicates, E = !b.sortStable && e.slice(0), e.sort(z), j) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return E = null, e
            }, w = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" === typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += w(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += w(t);
                return n
            }, _ = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: fe,
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
                    ATTR: function(e) {
                        return e[1] = e[1].replace(be, _e), e[3] = (e[3] || e[4] || e[5] || "").replace(be, _e), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = x(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(be, _e).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = B[e + " "];
                        return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && B(e, function(e) {
                            return t.test("string" === typeof e.className && e.className || "undefined" !== typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(r) {
                            var o = t.attr(r, e);
                            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, c) {
                            var l, u, d, f, h, p, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !c && !s;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (d = t; d = d[g];)
                                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (u = m[$] || (m[$] = {}), l = u[e] || [], h = l[0] === F && l[1], f = l[0] === F && l[2], d = h && m.childNodes[h]; d = ++h && d && d[g] || (f = h = 0) || p.pop();)
                                        if (1 === d.nodeType && ++f && d === t) {
                                            u[e] = [F, h, f];
                                            break
                                        }
                                } else if (y && (l = (t[$] || (t[$] = {}))[e]) && l[0] === F) f = l[1];
                                else
                                    for (;
                                        (d = ++h && d && d[g] || (f = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[$] || (d[$] = {}))[e] = [F, f]), d !== t)););
                                return (f -= r) === i || f % i === 0 && f / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var r, o = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[$] ? o(n) : o.length > 1 ? (r = [e, e, "", n], _.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, r = o(e, n), a = r.length; a--;) i = X(e, r[a]), e[i] = !(t[i] = r[a])
                        }) : function(e) {
                            return o(e, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            r = k(e.replace(ae, "$1"));
                        return r[$] ? i(function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(be, _e),
                            function(t) {
                                return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function(e) {
                        return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, _e).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === O
                    },
                    focus: function(e) {
                        return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !_.pseudos.empty(e)
                    },
                    header: function(e) {
                        return pe.test(e.nodeName)
                    },
                    input: function(e) {
                        return he.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: s(function() {
                        return [0]
                    }),
                    last: s(function(e, t) {
                        return [t - 1]
                    }),
                    eq: s(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: s(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: s(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: s(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: s(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, _.pseudos.nth = _.pseudos.eq;
            for (y in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) _.pseudos[y] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(y);
            for (y in {
                    submit: !0,
                    reset: !0
                }) _.pseudos[y] = function(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }(y);
            return l.prototype = _.filters = _.pseudos, _.setFilters = new l, x = t.tokenize = function(e, n) {
                var i, r, o, a, s, c, l, u = q[e + " "];
                if (u) return n ? 0 : u.slice(0);
                for (s = e, c = [], l = _.preFilter; s;) {
                    i && !(r = se.exec(s)) || (r && (s = s.slice(r[0].length) || s), c.push(o = [])), i = !1, (r = ce.exec(s)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(ae, " ")
                    }), s = s.slice(i.length));
                    for (a in _.filter) !(r = fe[a].exec(s)) || l[a] && !(r = l[a](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: a,
                        matches: r
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length : s ? t.error(e) : q(e, c).slice(0)
            }, k = t.compile = function(e, t) {
                var n, i = [],
                    r = [],
                    o = V[e + " "];
                if (!o) {
                    for (t || (t = x(e)), n = t.length; n--;) o = m(t[n]), o[$] ? i.push(o) : r.push(o);
                    o = V(e, v(r, i)), o.selector = e
                }
                return o
            }, C = t.select = function(e, t, n, i) {
                var r, o, a, s, l, d = "function" === typeof e && e,
                    f = !i && x(e = d.selector || e);
                if (n = n || [], 1 === f.length) {
                    if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && b.getById && 9 === t.nodeType && P && _.relative[o[1].type]) {
                        if (!(t = (_.find.ID(a.matches[0].replace(be, _e), t) || [])[0])) return n;
                        d && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !_.relative[s = a.type]);)
                        if ((l = _.find[s]) && (i = l(a.matches[0].replace(be, _e), ve.test(o[0].type) && c(t.parentNode) || t))) {
                            if (o.splice(r, 1), !(e = i.length && u(o))) return Z.apply(n, i), n;
                            break
                        }
                }
                return (d || k(e, f))(i, t, !P, n, ve.test(e) && c(t.parentNode) || t), n
            }, b.sortStable = $.split("").sort(z).join("") === $, b.detectDuplicates = !!j, S(), b.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(M.createElement("div"))
            }), r(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), b.attributes && r(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), r(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(K, function(e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(n);
        ne.find = se, ne.expr = se.selectors, ne.expr[":"] = ne.expr.pseudos, ne.unique = se.uniqueSort, ne.text = se.getText, ne.isXMLDoc = se.isXML, ne.contains = se.contains;
        var ce = ne.expr.match.needsContext,
            le = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ue = /^.[^:#\[\.,]*$/;
        ne.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ne.find.matchesSelector(i, e) ? [i] : [] : ne.find.matches(e, ne.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, ne.fn.extend({
            find: function(e) {
                var t, n = this.length,
                    i = [],
                    r = this;
                if ("string" !== typeof e) return this.pushStack(ne(e).filter(function() {
                    for (t = 0; t < n; t++)
                        if (ne.contains(r[t], this)) return !0
                }));
                for (t = 0; t < n; t++) ne.find(e, r[t], i);
                return i = this.pushStack(n > 1 ? ne.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
            },
            filter: function(e) {
                return this.pushStack(s(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(s(this, e || [], !0))
            },
            is: function(e) {
                return !!s(this, "string" === typeof e && ce.test(e) ? ne(e) : e || [], !1).length
            }
        });
        var de, fe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (ne.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" === typeof e) {
                if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : fe.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || de).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof ne ? t[0] : t, ne.merge(this, ne.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), le.test(n[1]) && ne.isPlainObject(t))
                        for (n in t) ne.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return i = te.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = te, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ne.isFunction(e) ? "undefined" !== typeof de.ready ? de.ready(e) : e(ne) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ne.makeArray(e, this))
        }).prototype = ne.fn, de = ne(te);
        var he = /^(?:parents|prev(?:Until|All))/,
            pe = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ne.extend({
            dir: function(e, t, n) {
                for (var i = [], r = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && ne(e).is(n)) break;
                        i.push(e)
                    } return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), ne.fn.extend({
            has: function(e) {
                var t = ne(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (ne.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, o = [], a = ce.test(e) || "string" !== typeof e ? ne(e, t || this.context) : 0; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ne.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? ne.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" === typeof e ? Z.call(ne(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(ne.unique(ne.merge(this.get(), ne(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), ne.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return ne.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return ne.dir(e, "parentNode", n)
            },
            next: function(e) {
                return c(e, "nextSibling")
            },
            prev: function(e) {
                return c(e, "previousSibling")
            },
            nextAll: function(e) {
                return ne.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return ne.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return ne.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return ne.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return ne.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return ne.sibling(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || ne.merge([], e.childNodes)
            }
        }, function(e, t) {
            ne.fn[e] = function(n, i) {
                var r = ne.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" === typeof i && (r = ne.filter(i, r)), this.length > 1 && (pe[e] || ne.unique(r), he.test(e) && r.reverse()), this.pushStack(r)
            }
        });
        var ge = /\S+/g,
            me = {};
        ne.Callbacks = function(e) {
            e = "string" === typeof e ? me[e] || l(e) : ne.extend({}, e);
            var t, n, i, r, o, a, s = [],
                c = !e.once && [],
                u = function(l) {
                    for (t = e.memory && l, n = !0, a = r || 0, r = 0, o = s.length, i = !0; s && a < o; a++)
                        if (!1 === s[a].apply(l[0], l[1]) && e.stopOnFalse) {
                            t = !1;
                            break
                        } i = !1, s && (c ? c.length && u(c.shift()) : t ? s = [] : d.disable())
                },
                d = {
                    add: function() {
                        if (s) {
                            var n = s.length;
                            ! function t(n) {
                                ne.each(n, function(n, i) {
                                    var r = ne.type(i);
                                    "function" === r ? e.unique && d.has(i) || s.push(i) : i && i.length && "string" !== r && t(i)
                                })
                            }(arguments), i ? o = s.length : t && (r = n, u(t))
                        }
                        return this
                    },
                    remove: function() {
                        return s && ne.each(arguments, function(e, t) {
                            for (var n;
                                (n = ne.inArray(t, s, n)) > -1;) s.splice(n, 1), i && (n <= o && o--, n <= a && a--)
                        }), this
                    },
                    has: function(e) {
                        return e ? ne.inArray(e, s) > -1 : !(!s || !s.length)
                    },
                    empty: function() {
                        return s = [], o = 0, this
                    },
                    disable: function() {
                        return s = c = t = void 0, this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return c = void 0, t || d.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(e, t) {
                        return !s || n && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? c.push(t) : u(t)), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return d
        }, ne.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", ne.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ne.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ne.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return ne.Deferred(function(n) {
                                ne.each(t, function(t, o) {
                                    var a = ne.isFunction(e[t]) && e[t];
                                    r[o[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && ne.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? ne.extend(e, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, ne.each(t, function(e, o) {
                    var a = o[2],
                        s = o[3];
                    i[o[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = a.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t, n, i, r = 0,
                    o = G.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && ne.isFunction(e.promise) ? a : 0,
                    c = 1 === s ? e : ne.Deferred(),
                    l = function(e, n, i) {
                        return function(r) {
                            n[e] = this, i[e] = arguments.length > 1 ? G.call(arguments) : r, i === t ? c.notifyWith(n, i) : --s || c.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), i = new Array(a); r < a; r++) o[r] && ne.isFunction(o[r].promise) ? o[r].promise().done(l(r, i, o)).fail(c.reject).progress(l(r, n, t)) : --s;
                return s || c.resolveWith(i, o), c.promise()
            }
        });
        var ve;
        ne.fn.ready = function(e) {
            return ne.ready.promise().done(e), this
        }, ne.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? ne.readyWait++ : ne.ready(!0)
            },
            ready: function(e) {
                (!0 === e ? --ne.readyWait : ne.isReady) || (ne.isReady = !0, !0 !== e && --ne.readyWait > 0 || (ve.resolveWith(te, [ne]), ne.fn.triggerHandler && (ne(te).triggerHandler("ready"), ne(te).off("ready"))))
            }
        }), ne.ready.promise = function(e) {
            return ve || (ve = ne.Deferred(), "complete" === te.readyState ? setTimeout(ne.ready) : (te.addEventListener("DOMContentLoaded", u, !1), n.addEventListener("load", u, !1))), ve.promise(e)
        }, ne.ready.promise();
        var ye = ne.access = function(e, t, n, i, r, o, a) {
            var s = 0,
                c = e.length,
                l = null == n;
            if ("object" === ne.type(n)) {
                r = !0;
                for (s in n) ne.access(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== i && (r = !0, ne.isFunction(i) || (a = !0), l && (a ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(ne(e), n)
                })), t))
                for (; s < c; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : l ? t.call(e) : c ? t(e[0], n) : o
        };
        ne.acceptData = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }, d.uid = 1, d.accepts = ne.acceptData, d.prototype = {
            key: function(e) {
                if (!d.accepts(e)) return 0;
                var t = {},
                    n = e[this.expando];
                if (!n) {
                    n = d.uid++;
                    try {
                        t[this.expando] = {
                            value: n
                        }, Object.defineProperties(e, t)
                    } catch (i) {
                        t[this.expando] = n, ne.extend(e, t)
                    }
                }
                return this.cache[n] || (this.cache[n] = {}), n
            },
            set: function(e, t, n) {
                var i, r = this.key(e),
                    o = this.cache[r];
                if ("string" === typeof t) o[t] = n;
                else if (ne.isEmptyObject(o)) ne.extend(this.cache[r], t);
                else
                    for (i in t) o[i] = t[i];
                return o
            },
            get: function(e, t) {
                var n = this.cache[this.key(e)];
                return void 0 === t ? n : n[t]
            },
            access: function(e, t, n) {
                var i;
                return void 0 === t || t && "string" === typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, ne.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i, r, o = this.key(e),
                    a = this.cache[o];
                if (void 0 === t) this.cache[o] = {};
                else {
                    ne.isArray(t) ? i = t.concat(t.map(ne.camelCase)) : (r = ne.camelCase(t), t in a ? i = [t, r] : (i = r, i = i in a ? [i] : i.match(ge) || [])), n = i.length;
                    for (; n--;) delete a[i[n]]
                }
            },
            hasData: function(e) {
                return !ne.isEmptyObject(this.cache[e[this.expando]] || {})
            },
            discard: function(e) {
                e[this.expando] && delete this.cache[e[this.expando]]
            }
        };
        var be = new d,
            _e = new d,
            we = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ae = /([A-Z])/g;
        ne.extend({
            hasData: function(e) {
                return _e.hasData(e) || be.hasData(e)
            },
            data: function(e, t, n) {
                return _e.access(e, t, n)
            },
            removeData: function(e, t) {
                _e.remove(e, t)
            },
            _data: function(e, t, n) {
                return be.access(e, t, n)
            },
            _removeData: function(e, t) {
                be.remove(e, t)
            }
        }), ne.fn.extend({
            data: function(e, t) {
                var n, i, r, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = _e.get(o), 1 === o.nodeType && !be.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = ne.camelCase(i.slice(5)), f(o, i, r[i])));
                        be.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" === typeof e ? this.each(function() {
                    _e.set(this, e)
                }) : ye(this, function(t) {
                    var n, i = ne.camelCase(e);
                    if (o && void 0 === t) {
                        if (void 0 !== (n = _e.get(o, e))) return n;
                        if (void 0 !== (n = _e.get(o, i))) return n;
                        if (void 0 !== (n = f(o, i, void 0))) return n
                    } else this.each(function() {
                        var n = _e.get(this, i);
                        _e.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && _e.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    _e.remove(this, e)
                })
            }
        }), ne.extend({
            queue: function(e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = be.get(e, t), n && (!i || ne.isArray(n) ? i = be.access(e, t, ne.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = ne.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = ne._queueHooks(e, t),
                    a = function() {
                        ne.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return be.get(e, n) || be.access(e, n, {
                    empty: ne.Callbacks("once memory").add(function() {
                        be.remove(e, [t + "queue", n])
                    })
                })
            }
        }), ne.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" !== typeof e && (t = e, e = "fx", n--), arguments.length < n ? ne.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = ne.queue(this, e, t);
                    ne._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ne.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    ne.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    r = ne.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" !== typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = be.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t)
            }
        });
        var xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ke = ["Top", "Right", "Bottom", "Left"],
            Ce = function(e, t) {
                return e = t || e, "none" === ne.css(e, "display") || !ne.contains(e.ownerDocument, e)
            },
            Te = /^(?:checkbox|radio)$/i;
        ! function() {
            var e = te.createDocumentFragment(),
                t = e.appendChild(te.createElement("div")),
                n = te.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ee.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ee.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        ee.focusinBubbles = "onfocusin" in n;
        var Ee = /^key/,
            je = /^(?:mouse|pointer|contextmenu)|click/,
            Se = /^(?:focusinfocus|focusoutblur)$/,
            Me = /^([^.]*)(?:\.(.+)|)$/;
        ne.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var o, a, s, c, l, u, d, f, h, p, g, m = be.get(e);
                if (m)
                    for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = ne.guid++), (c = m.events) || (c = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                            return "undefined" !== typeof ne && ne.event.triggered !== t.type ? ne.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(ge) || [""], l = t.length; l--;) s = Me.exec(t[l]) || [], h = g = s[1], p = (s[2] || "").split(".").sort(), h && (d = ne.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = ne.event.special[h] || {}, u = ne.extend({
                        type: h,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && ne.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, o), (f = c[h]) || (f = c[h] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, a) || e.addEventListener && e.addEventListener(h, a, !1)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), ne.event.global[h] = !0)
            },
            remove: function(e, t, n, i, r) {
                var o, a, s, c, l, u, d, f, h, p, g, m = be.hasData(e) && be.get(e);
                if (m && (c = m.events)) {
                    for (t = (t || "").match(ge) || [""], l = t.length; l--;)
                        if (s = Me.exec(t[l]) || [], h = g = s[1], p = (s[2] || "").split(".").sort(), h) {
                            for (d = ne.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, f = c[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) u = f[o], !r && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                            a && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || ne.removeEvent(e, h, m.handle), delete c[h])
                        } else
                            for (h in c) ne.event.remove(e, h + t[l], n, i, !0);
                    ne.isEmptyObject(c) && (delete m.handle, be.remove(e, "events"))
                }
            },
            trigger: function(e, t, i, r) {
                var o, a, s, c, l, u, d, f = [i || te],
                    h = K.call(e, "type") ? e.type : e,
                    p = K.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = s = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !Se.test(h + ne.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), l = h.indexOf(":") < 0 && "on" + h, e = e[ne.expando] ? e : new ne.Event(h, "object" === typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : ne.makeArray(t, [e]), d = ne.event.special[h] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, t))) {
                    if (!r && !d.noBubble && !ne.isWindow(i)) {
                        for (c = d.delegateType || h, Se.test(c + h) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
                        s === (i.ownerDocument || te) && f.push(s.defaultView || s.parentWindow || n)
                    }
                    for (o = 0;
                        (a = f[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? c : d.bindType || h, u = (be.get(a, "events") || {})[e.type] && be.get(a, "handle"), u && u.apply(a, t), (u = l && a[l]) && u.apply && ne.acceptData(a) && (e.result = u.apply(a, t), !1 === e.result && e.preventDefault());
                    return e.type = h, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), t) || !ne.acceptData(i) || l && ne.isFunction(i[h]) && !ne.isWindow(i) && (s = i[l], s && (i[l] = null), ne.event.triggered = h, i[h](), ne.event.triggered = void 0, s && (i[l] = s)), e.result
                }
            },
            dispatch: function(e) {
                e = ne.event.fix(e);
                var t, n, i, r, o, a = [],
                    s = G.call(arguments),
                    c = (be.get(this, "events") || {})[e.type] || [],
                    l = ne.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                    for (a = ne.event.handlers.call(this, e, c), t = 0;
                        (r = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, n = 0;
                            (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (i = ((ne.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, o, a = [],
                    s = t.delegateCount,
                    c = e.target;
                if (s && c.nodeType && (!e.button || "click" !== e.type))
                    for (; c !== this; c = c.parentNode || this)
                        if (!0 !== c.disabled || "click" !== e.type) {
                            for (i = [], n = 0; n < s; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? ne(r, this).index(c) >= 0 : ne.find(r, this, null, [c]).length), i[r] && i.push(o);
                            i.length && a.push({
                                elem: c,
                                handlers: i
                            })
                        } return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }), a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, r, o = t.button;
                    return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || te, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[ne.expando]) return e;
                var t, n, i, r = e.type,
                    o = e,
                    a = this.fixHooks[r];
                for (a || (this.fixHooks[r] = a = je.test(r) ? this.mouseHooks : Ee.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new ne.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
                return e.target || (e.target = te), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== g() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === g() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && ne.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function(e) {
                        return ne.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var r = ne.extend(new ne.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? ne.event.trigger(r, null, t) : ne.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, ne.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        }, ne.Event = function(e, t) {
            if (!(this instanceof ne.Event)) return new ne.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? h : p) : this.type = e, t && ne.extend(this, t), this.timeStamp = e && e.timeStamp || ne.now(), this[ne.expando] = !0
        }, ne.Event.prototype = {
            isDefaultPrevented: p,
            isPropagationStopped: p,
            isImmediatePropagationStopped: p,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = h, e && e.preventDefault && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = h, e && e.stopPropagation && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = h, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ne.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            ne.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        o = e.handleObj;
                    return r && (r === i || ne.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ee.focusinBubbles || ne.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                ne.event.simulate(t, e.target, ne.event.fix(e), !0)
            };
            ne.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = be.access(i, t);
                    r || i.addEventListener(e, n, !0), be.access(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = be.access(i, t) - 1;
                    r ? be.access(i, t, r) : (i.removeEventListener(e, n, !0), be.remove(i, t))
                }
            }
        }), ne.fn.extend({
            on: function(e, t, n, i, r) {
                var o, a;
                if ("object" === typeof e) {
                    "string" !== typeof t && (n = n || t, t = void 0);
                    for (a in e) this.on(a, t, n, e[a], r);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" === typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = p;
                else if (!i) return this;
                return 1 === r && (o = i, i = function(e) {
                    return ne().off(e), o.apply(this, arguments)
                }, i.guid = o.guid || (o.guid = ne.guid++)), this.each(function() {
                    ne.event.add(this, e, i, n, t)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ne(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" === typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return !1 !== t && "function" !== typeof t || (n = t, t = void 0), !1 === n && (n = p), this.each(function() {
                    ne.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    ne.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return ne.event.trigger(e, t, n, !0)
            }
        });
        var Oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Pe = /<([\w:]+)/,
            Ne = /<|&#?\w+;/,
            Ie = /<(?:script|style|link)/i,
            Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Re = /^$|\/(?:java|ecma)script/i,
            $e = /^true\/(.*)/,
            De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Fe = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Fe.optgroup = Fe.option, Fe.tbody = Fe.tfoot = Fe.colgroup = Fe.caption = Fe.thead, Fe.th = Fe.td, ne.extend({
            clone: function(e, t, n) {
                var i, r, o, a, s = e.cloneNode(!0),
                    c = ne.contains(e.ownerDocument, e);
                if (!ee.noCloneChecked && (1 === e.nodeType || 11 === e.nodeType) && !ne.isXMLDoc(e))
                    for (a = w(s), o = w(e), i = 0, r = o.length; i < r; i++) A(o[i], a[i]);
                if (t)
                    if (n)
                        for (o = o || w(e), a = a || w(s), i = 0, r = o.length; i < r; i++) _(o[i], a[i]);
                    else _(e, s);
                return a = w(s, "script"), a.length > 0 && b(a, !c && w(e, "script")), s
            },
            buildFragment: function(e, t, n, i) {
                for (var r, o, a, s, c, l, u = t.createDocumentFragment(), d = [], f = 0, h = e.length; f < h; f++)
                    if ((r = e[f]) || 0 === r)
                        if ("object" === ne.type(r)) ne.merge(d, r.nodeType ? [r] : r);
                        else if (Ne.test(r)) {
                    for (o = o || u.appendChild(t.createElement("div")), a = (Pe.exec(r) || ["", ""])[1].toLowerCase(), s = Fe[a] || Fe._default, o.innerHTML = s[1] + r.replace(Oe, "<$1></$2>") + s[2], l = s[0]; l--;) o = o.lastChild;
                    ne.merge(d, o.childNodes), o = u.firstChild, o.textContent = ""
                } else d.push(t.createTextNode(r));
                for (u.textContent = "", f = 0; r = d[f++];)
                    if ((!i || -1 === ne.inArray(r, i)) && (c = ne.contains(r.ownerDocument, r), o = w(u.appendChild(r), "script"), c && b(o), n))
                        for (l = 0; r = o[l++];) Re.test(r.type || "") && n.push(r);
                return u
            },
            cleanData: function(e) {
                for (var t, n, i, r, o = ne.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                    if (ne.acceptData(n) && (r = n[be.expando]) && (t = be.cache[r])) {
                        if (t.events)
                            for (i in t.events) o[i] ? ne.event.remove(n, i) : ne.removeEvent(n, i, t.handle);
                        be.cache[r] && delete be.cache[r]
                    }
                    delete _e.cache[n[_e.expando]]
                }
            }
        }), ne.fn.extend({
            text: function(e) {
                return ye(this, function(e) {
                    return void 0 === e ? ne.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        m(this, e).appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = m(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? ne.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || ne.cleanData(w(n)), n.parentNode && (t && ne.contains(n.ownerDocument, n) && b(w(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ne.cleanData(w(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return ne.clone(this, e, t)
                })
            },
            html: function(e) {
                return ye(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" === typeof e && !Ie.test(e) && !Fe[(Pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(Oe, "<$1></$2>");
                        try {
                            for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (ne.cleanData(w(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode, ne.cleanData(w(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = Q.apply([], e);
                var n, i, r, o, a, s, c = 0,
                    l = this.length,
                    u = this,
                    d = l - 1,
                    f = e[0],
                    h = ne.isFunction(f);
                if (h || l > 1 && "string" === typeof f && !ee.checkClone && Le.test(f)) return this.each(function(n) {
                    var i = u.eq(n);
                    h && (e[0] = f.call(this, n, i.html())), i.domManip(e, t)
                });
                if (l && (n = ne.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                    for (r = ne.map(w(n, "script"), v), o = r.length; c < l; c++) a = n, c !== d && (a = ne.clone(a, !0, !0), o && ne.merge(r, w(a, "script"))), t.call(this[c], a, c);
                    if (o)
                        for (s = r[r.length - 1].ownerDocument, ne.map(r, y), c = 0; c < o; c++) a = r[c], Re.test(a.type || "") && !be.access(a, "globalEval") && ne.contains(s, a) && (a.src ? ne._evalUrl && ne._evalUrl(a.src) : ne.globalEval(a.textContent.replace(De, "")))
                }
                return this
            }
        }), ne.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            ne.fn[e] = function(e) {
                for (var n, i = [], r = ne(e), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), ne(r[a])[t](n), Y.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var He, Be = {},
            qe = /^margin/,
            Ve = new RegExp("^(" + xe + ")(?!px)[a-z%]+$", "i"),
            ze = function(e) {
                return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : n.getComputedStyle(e, null)
            };
        ! function() {
            function e() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", r.appendChild(o);
                var e = n.getComputedStyle(a, null);
                t = "1%" !== e.top, i = "4px" === e.width, r.removeChild(o)
            }
            var t, i, r = te.documentElement,
                o = te.createElement("div"),
                a = te.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ee.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), n.getComputedStyle && ne.extend(ee, {
                pixelPosition: function() {
                    return e(), t
                },
                boxSizingReliable: function() {
                    return null == i && e(), i
                },
                reliableMarginRight: function() {
                    var e, t = a.appendChild(te.createElement("div"));
                    return t.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", a.style.width = "1px", r.appendChild(o), e = !parseFloat(n.getComputedStyle(t, null).marginRight), r.removeChild(o), a.removeChild(t), e
                }
            }))
        }(), ne.swap = function(e, t, n, i) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = a[o];
            return r
        };
        var Ue = /^(none|table(?!-c[ea]).+)/,
            We = new RegExp("^(" + xe + ")(.*)$", "i"),
            Ge = new RegExp("^([+-])=(" + xe + ")", "i"),
            Qe = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ye = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Ze = ["Webkit", "O", "Moz", "ms"];
        ne.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = C(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
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
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, a, s = ne.camelCase(t),
                        c = e.style;
                    if (t = ne.cssProps[s] || (ne.cssProps[s] = E(c, s)), a = ne.cssHooks[t] || ne.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : c[t];
                    o = typeof n, "string" === o && (r = Ge.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(ne.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || ne.cssNumber[s] || (n += "px"), ee.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (c[t] = n))
                }
            },
            css: function(e, t, n, i) {
                var r, o, a, s = ne.camelCase(t);
                return t = ne.cssProps[s] || (ne.cssProps[s] = E(e.style, s)), a = ne.cssHooks[t] || ne.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = C(e, t, i)), "normal" === r && t in Ye && (r = Ye[t]), "" === n || n ? (o = parseFloat(r), !0 === n || ne.isNumeric(o) ? o || 0 : r) : r
            }
        }), ne.each(["height", "width"], function(e, t) {
            ne.cssHooks[t] = {
                get: function(e, n, i) {
                    if (n) return Ue.test(ne.css(e, "display")) && 0 === e.offsetWidth ? ne.swap(e, Qe, function() {
                        return M(e, t, i)
                    }) : M(e, t, i)
                },
                set: function(e, n, i) {
                    var r = i && ze(e);
                    return j(e, n, i ? S(e, t, i, "border-box" === ne.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }), ne.cssHooks.marginRight = T(ee.reliableMarginRight, function(e, t) {
            if (t) return ne.swap(e, {
                display: "inline-block"
            }, C, [e, "marginRight"])
        }), ne.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            ne.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" === typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ke[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, qe.test(e) || (ne.cssHooks[e + t].set = j)
        }), ne.fn.extend({
            css: function(e, t) {
                return ye(this, function(e, t, n) {
                    var i, r, o = {},
                        a = 0;
                    if (ne.isArray(t)) {
                        for (i = ze(e), r = t.length; a < r; a++) o[t[a]] = ne.css(e, t[a], !1, i);
                        return o
                    }
                    return void 0 !== n ? ne.style(e, t, n) : ne.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return O(this, !0)
            },
            hide: function() {
                return O(this)
            },
            toggle: function(e) {
                return "boolean" === typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Ce(this) ? ne(this).show() : ne(this).hide()
                })
            }
        }), ne.Tween = P, P.prototype = {
            constructor: P,
            init: function(e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ne.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = P.propHooks[this.prop];
                return e && e.get ? e.get(this) : P.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = P.propHooks[this.prop];
                return this.options.duration ? this.pos = t = ne.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
            }
        }, P.prototype.init.prototype = P.prototype, P.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ne.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    ne.fx.step[e.prop] ? ne.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ne.cssProps[e.prop]] || ne.cssHooks[e.prop]) ? ne.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ne.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, ne.fx = P.prototype.init, ne.fx.step = {};
        var Je, Xe, Ke = /^(?:toggle|show|hide)$/,
            et = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$", "i"),
            tt = /queueHooks$/,
            nt = [R],
            it = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        r = et.exec(t),
                        o = r && r[3] || (ne.cssNumber[e] ? "" : "px"),
                        a = (ne.cssNumber[e] || "px" !== o && +i) && et.exec(ne.css(n.elem, e)),
                        s = 1,
                        c = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], r = r || [], a = +i || 1;
                        do {
                            s = s || ".5", a /= s, ne.style(n.elem, e, a + o)
                        } while (s !== (s = n.cur() / i) && 1 !== s && --c)
                    }
                    return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
                }]
            };
        ne.Animation = ne.extend(D, {
                tweener: function(e, t) {
                    ne.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, i = 0, r = e.length; i < r; i++) n = e[i], it[n] = it[n] || [], it[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? nt.unshift(e) : nt.push(e)
                }
            }), ne.speed = function(e, t, n) {
                var i = e && "object" === typeof e ? ne.extend({}, e) : {
                    complete: n || !n && t || ne.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !ne.isFunction(t) && t
                };
                return i.duration = ne.fx.off ? 0 : "number" === typeof i.duration ? i.duration : i.duration in ne.fx.speeds ? ne.fx.speeds[i.duration] : ne.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    ne.isFunction(i.old) && i.old.call(this), i.queue && ne.dequeue(this, i.queue)
                }, i
            }, ne.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(Ce).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var r = ne.isEmptyObject(e),
                        o = ne.speed(t, n, i),
                        a = function() {
                            var t = D(this, ne.extend({}, e), o);
                            (r || be.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" !== typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            o = ne.timers,
                            a = be.get(this);
                        if (r) a[r] && a[r].stop && i(a[r]);
                        else
                            for (r in a) a[r] && a[r].stop && tt.test(r) && i(a[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                        !t && n || ne.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t, n = be.get(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            o = ne.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, ne.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), ne.each(["toggle", "show", "hide"], function(e, t) {
                var n = ne.fn[t];
                ne.fn[t] = function(e, i, r) {
                    return null == e || "boolean" === typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, i, r)
                }
            }), ne.each({
                slideDown: I("show"),
                slideUp: I("hide"),
                slideToggle: I("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                ne.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), ne.timers = [], ne.fx.tick = function() {
                var e, t = 0,
                    n = ne.timers;
                for (Je = ne.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || ne.fx.stop(), Je = void 0
            }, ne.fx.timer = function(e) {
                ne.timers.push(e), e() ? ne.fx.start() : ne.timers.pop()
            }, ne.fx.interval = 13, ne.fx.start = function() {
                Xe || (Xe = setInterval(ne.fx.tick, ne.fx.interval))
            }, ne.fx.stop = function() {
                clearInterval(Xe), Xe = null
            }, ne.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ne.fn.delay = function(e, t) {
                return e = ne.fx ? ne.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            function() {
                var e = te.createElement("input"),
                    t = te.createElement("select"),
                    n = t.appendChild(te.createElement("option"));
                e.type = "checkbox", ee.checkOn = "" !== e.value, ee.optSelected = n.selected, t.disabled = !0, ee.optDisabled = !n.disabled, e = te.createElement("input"), e.value = "t", e.type = "radio", ee.radioValue = "t" === e.value
            }();
        var rt, ot = ne.expr.attrHandle;
        ne.fn.extend({
            attr: function(e, t) {
                return ye(this, ne.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    ne.removeAttr(this, e)
                })
            }
        }), ne.extend({
            attr: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o) return "undefined" === typeof e.getAttribute ? ne.prop(e, t, n) : (1 === o && ne.isXMLDoc(e) || (t = t.toLowerCase(), i = ne.attrHooks[t] || (ne.expr.match.bool.test(t) ? rt : void 0)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = ne.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void ne.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, i, r = 0,
                    o = t && t.match(ge);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) i = ne.propFix[n] || n, ne.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ee.radioValue && "radio" === t && ne.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), rt = {
            set: function(e, t, n) {
                return !1 === t ? ne.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, ne.each(ne.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = ot[t] || ne.find.attr;
            ot[t] = function(e, t, i) {
                var r, o;
                return i || (o = ot[t], ot[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, ot[t] = o), r
            }
        });
        var at = /^(?:input|select|textarea|button)$/i;
        ne.fn.extend({
            prop: function(e, t) {
                return ye(this, ne.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[ne.propFix[e] || e]
                })
            }
        }), ne.extend({
            propFix: {
                for: "htmlFor",
                class: "className"
            },
            prop: function(e, t, n) {
                var i, r, o, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !ne.isXMLDoc(e), o && (t = ne.propFix[t] || t, r = ne.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1
                    }
                }
            }
        }), ee.optSelected || (ne.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }
        }), ne.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ne.propFix[this.toLowerCase()] = this
        });
        var st = /[\t\r\n\f]/g;
        ne.fn.extend({
            addClass: function(e) {
                var t, n, i, r, o, a, s = "string" === typeof e && e,
                    c = 0,
                    l = this.length;
                if (ne.isFunction(e)) return this.each(function(t) {
                    ne(this).addClass(e.call(this, t, this.className))
                });
                if (s)
                    for (t = (e || "").match(ge) || []; c < l; c++)
                        if (n = this[c], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : " ")) {
                            for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            a = ne.trim(i), n.className !== a && (n.className = a)
                        } return this
            },
            removeClass: function(e) {
                var t, n, i, r, o, a, s = 0 === arguments.length || "string" === typeof e && e,
                    c = 0,
                    l = this.length;
                if (ne.isFunction(e)) return this.each(function(t) {
                    ne(this).removeClass(e.call(this, t, this.className))
                });
                if (s)
                    for (t = (e || "").match(ge) || []; c < l; c++)
                        if (n = this[c], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : "")) {
                            for (o = 0; r = t[o++];)
                                for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                            a = e ? ne.trim(i) : "", n.className !== a && (n.className = a)
                        } return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" === typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ne.isFunction(e) ? this.each(function(n) {
                    ne(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var t, i = 0, r = ne(this), o = e.match(ge) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else "undefined" !== n && "boolean" !== n || (this.className && be.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : be.get(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(st, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        });
        var ct = /\r/g;
        ne.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0]; {
                    if (arguments.length) return i = ne.isFunction(e), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? e.call(this, n, ne(this).val()) : e, null == r ? r = "" : "number" === typeof r ? r += "" : ne.isArray(r) && (r = ne.map(r, function(e) {
                            return null == e ? "" : e + ""
                        })), (t = ne.valHooks[this.type] || ne.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return (t = ne.valHooks[r.type] || ne.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" === typeof n ? n.replace(ct, "") : null == n ? "" : n)
                }
            }
        }), ne.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = ne.find.attr(e, "value");
                        return null != t ? t : ne.trim(ne.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, c = r < 0 ? s : o ? r : 0; c < s; c++)
                            if (n = i[c], (n.selected || c === r) && (ee.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ne.nodeName(n.parentNode, "optgroup"))) {
                                if (t = ne(n).val(), o) return t;
                                a.push(t)
                            } return a
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, o = ne.makeArray(t), a = r.length; a--;) i = r[a], (i.selected = ne.inArray(i.value, o) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), ne.each(["radio", "checkbox"], function() {
            ne.valHooks[this] = {
                set: function(e, t) {
                    if (ne.isArray(t)) return e.checked = ne.inArray(ne(e).val(), t) >= 0
                }
            }, ee.checkOn || (ne.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), ne.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            ne.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), ne.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var lt = ne.now(),
            ut = /\?/;
        ne.parseJSON = function(e) {
            return JSON.parse(e + "")
        }, ne.parseXML = function(e) {
            var t, n;
            if (!e || "string" !== typeof e) return null;
            try {
                n = new DOMParser, t = n.parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || ne.error("Invalid XML: " + e), t
        };
        var dt = /#.*$/,
            ft = /([?&])_=[^&]*/,
            ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            gt = /^(?:GET|HEAD)$/,
            mt = /^\/\//,
            vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            yt = {},
            bt = {},
            _t = "*/".concat("*"),
            wt = n.location.href,
            At = vt.exec(wt.toLowerCase()) || [];
        ne.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: wt,
                type: "GET",
                isLocal: pt.test(At[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": _t,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ne.parseJSON,
                    "text xml": ne.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? B(B(e, ne.ajaxSettings), t) : B(ne.ajaxSettings, e)
            },
            ajaxPrefilter: F(yt),
            ajaxTransport: F(bt),
            ajax: function(e, t) {
                function n(e, t, n, a) {
                    var c, u, v, y, _, A = t;
                    2 !== b && (b = 2, s && clearTimeout(s), i = void 0, o = a || "", w.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, n && (y = q(d, w, n)), y = V(d, y, w, c), c ? (d.ifModified && (_ = w.getResponseHeader("Last-Modified"), _ && (ne.lastModified[r] = _), (_ = w.getResponseHeader("etag")) && (ne.etag[r] = _)), 204 === e || "HEAD" === d.type ? A = "nocontent" : 304 === e ? A = "notmodified" : (A = y.state, u = y.data, v = y.error, c = !v)) : (v = A, !e && A || (A = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || A) + "", c ? p.resolveWith(f, [u, A, w]) : p.rejectWith(f, [w, A, v]), w.statusCode(m), m = void 0, l && h.trigger(c ? "ajaxSuccess" : "ajaxError", [w, d, c ? u : v]), g.fireWith(f, [w, A]), l && (h.trigger("ajaxComplete", [w, d]), --ne.active || ne.event.trigger("ajaxStop")))
                }
                "object" === typeof e && (t = e, e = void 0), t = t || {};
                var i, r, o, a, s, c, l, u, d = ne.ajaxSetup({}, t),
                    f = d.context || d,
                    h = d.context && (f.nodeType || f.jquery) ? ne(f) : ne.event,
                    p = ne.Deferred(),
                    g = ne.Callbacks("once memory"),
                    m = d.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    _ = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!a)
                                    for (a = {}; t = ht.exec(o);) a[t[1].toLowerCase()] = t[2];
                                t = a[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? o : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = y[n] = y[n] || e, v[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return b || (d.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (b < 2)
                                    for (t in e) m[t] = [m[t], e[t]];
                                else w.always(e[w.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || _;
                            return i && i.abort(t), n(0, t), this
                        }
                    };
                if (p.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || wt) + "").replace(dt, "").replace(mt, At[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ne.trim(d.dataType || "*").toLowerCase().match(ge) || [""], null == d.crossDomain && (c = vt.exec(d.url.toLowerCase()), d.crossDomain = !(!c || c[1] === At[1] && c[2] === At[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (At[3] || ("http:" === At[1] ? "80" : "443")))), d.data && d.processData && "string" !== typeof d.data && (d.data = ne.param(d.data, d.traditional)), H(yt, d, t, w), 2 === b) return w;
                l = ne.event && d.global, l && 0 === ne.active++ && ne.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !gt.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (ut.test(r) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = ft.test(r) ? r.replace(ft, "$1_=" + lt++) : r + (ut.test(r) ? "&" : "?") + "_=" + lt++)), d.ifModified && (ne.lastModified[r] && w.setRequestHeader("If-Modified-Since", ne.lastModified[r]), ne.etag[r] && w.setRequestHeader("If-None-Match", ne.etag[r])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : d.accepts["*"]);
                for (u in d.headers) w.setRequestHeader(u, d.headers[u]);
                if (d.beforeSend && (!1 === d.beforeSend.call(f, w, d) || 2 === b)) return w.abort();
                _ = "abort";
                for (u in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[u](d[u]);
                if (i = H(bt, d, t, w)) {
                    w.readyState = 1, l && h.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                        w.abort("timeout")
                    }, d.timeout));
                    try {
                        b = 1, i.send(v, n)
                    } catch (e) {
                        if (!(b < 2)) throw e;
                        n(-1, e)
                    }
                } else n(-1, "No Transport");
                return w
            },
            getJSON: function(e, t, n) {
                return ne.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return ne.get(e, void 0, t, "script")
            }
        }), ne.each(["get", "post"], function(e, t) {
            ne[t] = function(e, n, i, r) {
                return ne.isFunction(n) && (r = r || i, i = n, n = void 0), ne.ajax({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                })
            }
        }), ne._evalUrl = function(e) {
            return ne.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, ne.fn.extend({
            wrapAll: function(e) {
                var t;
                return ne.isFunction(e) ? this.each(function(t) {
                    ne(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = ne(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this)
            },
            wrapInner: function(e) {
                return ne.isFunction(e) ? this.each(function(t) {
                    ne(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = ne(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = ne.isFunction(e);
                return this.each(function(n) {
                    ne(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ne.nodeName(this, "body") || ne(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ne.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0
        }, ne.expr.filters.visible = function(e) {
            return !ne.expr.filters.hidden(e)
        };
        var xt = /%20/g,
            kt = /\[\]$/,
            Ct = /\r?\n/g,
            Tt = /^(?:submit|button|image|reset|file)$/i,
            Et = /^(?:input|select|textarea|keygen)/i;
        ne.param = function(e, t) {
            var n, i = [],
                r = function(e, t) {
                    t = ne.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = ne.ajaxSettings && ne.ajaxSettings.traditional), ne.isArray(e) || e.jquery && !ne.isPlainObject(e)) ne.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (n in e) z(n, e[n], t, r);
            return i.join("&").replace(xt, "+")
        }, ne.fn.extend({
            serialize: function() {
                return ne.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = ne.prop(this, "elements");
                    return e ? ne.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !ne(this).is(":disabled") && Et.test(this.nodeName) && !Tt.test(e) && (this.checked || !Te.test(e))
                }).map(function(e, t) {
                    var n = ne(this).val();
                    return null == n ? null : ne.isArray(n) ? ne.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Ct, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Ct, "\r\n")
                    }
                }).get()
            }
        }), ne.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (e) {}
        };
        var jt = 0,
            St = {},
            Mt = {
                0: 200,
                1223: 204
            },
            Ot = ne.ajaxSettings.xhr();
        n.attachEvent && n.attachEvent("onunload", function() {
            for (var e in St) St[e]()
        }), ee.cors = !!Ot && "withCredentials" in Ot, ee.ajax = Ot = !!Ot, ne.ajaxTransport(function(e) {
            var t;
            if (ee.cors || Ot && !e.crossDomain) return {
                send: function(n, i) {
                    var r, o = e.xhr(),
                        a = ++jt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (r in e.xhrFields) o[r] = e.xhrFields[r];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n) o.setRequestHeader(r, n[r]);
                    t = function(e) {
                        return function() {
                            t && (delete St[a], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? i(o.status, o.statusText) : i(Mt[o.status] || o.status, o.statusText, "string" === typeof o.responseText ? {
                                text: o.responseText
                            } : void 0, o.getAllResponseHeaders()))
                        }
                    }, o.onload = t(), o.onerror = t("error"), t = St[a] = t("abort");
                    try {
                        o.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        }), ne.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return ne.globalEval(e), e
                }
            }
        }), ne.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), ne.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(i, r) {
                        t = ne("<script>").prop({
                            async: !0,
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                        }), te.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Pt = [],
            Nt = /(=)\?(?=&|$)|\?\?/;
        ne.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Pt.pop() || ne.expando + "_" + lt++;
                return this[e] = !0, e
            }
        }), ne.ajaxPrefilter("json jsonp", function(e, t, i) {
            var r, o, a, s = !1 !== e.jsonp && (Nt.test(e.url) ? "url" : "string" === typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Nt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = ne.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Nt, "$1" + r) : !1 !== e.jsonp && (e.url += (ut.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return a || ne.error(r + " was not called"), a[0]
            }, e.dataTypes[0] = "json", o = n[r], n[r] = function() {
                a = arguments
            }, i.always(function() {
                n[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, Pt.push(r)), a && ne.isFunction(o) && o(a[0]), a = o = void 0
            }), "script"
        }), ne.parseHTML = function(e, t, n) {
            if (!e || "string" !== typeof e) return null;
            "boolean" === typeof t && (n = t, t = !1), t = t || te;
            var i = le.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = ne.buildFragment([e], t, r), r && r.length && ne(r).remove(), ne.merge([], i.childNodes))
        };
        var It = ne.fn.load;
        ne.fn.load = function(e, t, n) {
            if ("string" !== typeof e && It) return It.apply(this, arguments);
            var i, r, o, a = this,
                s = e.indexOf(" ");
            return s >= 0 && (i = ne.trim(e.slice(s)), e = e.slice(0, s)), ne.isFunction(t) ? (n = t, t = void 0) : t && "object" === typeof t && (r = "POST"), a.length > 0 && ne.ajax({
                url: e,
                type: r,
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, a.html(i ? ne("<div>").append(ne.parseHTML(e)).find(i) : e)
            }).complete(n && function(e, t) {
                a.each(n, o || [e.responseText, t, e])
            }), this
        }, ne.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            ne.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), ne.expr.filters.animated = function(e) {
            return ne.grep(ne.timers, function(t) {
                return e === t.elem
            }).length
        };
        var Lt = n.document.documentElement;
        ne.offset = {
            setOffset: function(e, t, n) {
                var i, r, o, a, s, c, l, u = ne.css(e, "position"),
                    d = ne(e),
                    f = {};
                "static" === u && (e.style.position = "relative"), s = d.offset(), o = ne.css(e, "top"), c = ne.css(e, "left"), l = ("absolute" === u || "fixed" === u) && (o + c).indexOf("auto") > -1, l ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(c) || 0), ne.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
            }
        }, ne.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    ne.offset.setOffset(this, e, t)
                });
                var t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    },
                    o = i && i.ownerDocument;
                if (o) return t = o.documentElement, ne.contains(t, i) ? ("undefined" !== typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = U(o), {
                    top: r.top + n.pageYOffset - t.clientTop,
                    left: r.left + n.pageXOffset - t.clientLeft
                }) : r
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === ne.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ne.nodeName(e[0], "html") || (i = e.offset()), i.top += ne.css(e[0], "borderTopWidth", !0), i.left += ne.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - i.top - ne.css(n, "marginTop", !0),
                        left: t.left - i.left - ne.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || Lt; e && !ne.nodeName(e, "html") && "static" === ne.css(e, "position");) e = e.offsetParent;
                    return e || Lt
                })
            }
        }), ne.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var i = "pageYOffset" === t;
            ne.fn[e] = function(r) {
                return ye(this, function(e, r, o) {
                    var a = U(e);
                    if (void 0 === o) return a ? a[t] : e[r];
                    a ? a.scrollTo(i ? n.pageXOffset : o, i ? o : n.pageYOffset) : e[r] = o
                }, e, r, arguments.length, null)
            }
        }), ne.each(["top", "left"], function(e, t) {
            ne.cssHooks[t] = T(ee.pixelPosition, function(e, n) {
                if (n) return n = C(e, t), Ve.test(n) ? ne(e).position()[t] + "px" : n
            })
        }), ne.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            ne.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                ne.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" !== typeof i),
                        a = n || (!0 === i || !0 === r ? "margin" : "border");
                    return ye(this, function(t, n, i) {
                        var r;
                        return ne.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? ne.css(t, n, a) : ne.style(t, n, i, a)
                    }, t, o ? i : void 0, o, null)
                }
            })
        }), ne.fn.size = function() {
            return this.length
        }, ne.fn.andSelf = ne.fn.addBack, i = [], void 0 !== (r = function() {
            return ne
        }.apply(t, i)) && (e.exports = r);
        var Rt = n.jQuery,
            $t = n.$;
        return ne.noConflict = function(e) {
            return n.$ === ne && (n.$ = $t), e && n.jQuery === ne && (n.jQuery = Rt), ne
        }, "undefined" === typeof o && (n.jQuery = n.$ = ne), ne
    })
}, function(e, t, n) {
    var i = n(0);
    Function.prototype.bind = Function.prototype.bind || function(e) {
            var t = this;
            return function() {
                return t.apply(e, arguments)
            }
        },
        function(e, n) {
            e.Backbone = function(e, t, n, i) {
                "use strict";
                var r = e.Backbone,
                    o = e.Exoskeleton,
                    a = t.utils = n = n || {};
                t.$ = i;
                var s = [],
                    c = s.push,
                    l = s.slice,
                    u = {}.toString;
                t.noConflict = function() {
                    return e.Backbone = r, e.Exoskeleton = o, this
                }, t.extend = function(e, t) {
                    var i, r = this;
                    i = e && n.has(e, "constructor") ? e.constructor : function() {
                        return r.apply(this, arguments)
                    }, n.extend(i, r, t);
                    var o = function() {
                        this.constructor = i
                    };
                    return o.prototype = r.prototype, i.prototype = new o, e && n.extend(i.prototype, e), i.__super__ = r.prototype, i
                };
                var d = function() {
                        throw new Error('A "url" property or function must be specified')
                    },
                    f = function(e, t) {
                        var n = t.error;
                        t.error = function(i) {
                            n && n(e, i, t), e.trigger("error", e, i, t)
                        }
                    },
                    h = function(e) {
                        return "function" === typeof n[e]
                    };
                a.result = function(e, t) {
                    var n = e ? e[t] : void 0;
                    return "function" === typeof n ? e[t]() : n
                }, a.defaults = function(e) {
                    return l.call(arguments, 1).forEach(function(t) {
                        for (var n in t) void 0 === e[n] && (e[n] = t[n])
                    }), e
                }, a.extend = function(e) {
                    return l.call(arguments, 1).forEach(function(t) {
                        for (var n in t) e[n] = t[n]
                    }), e
                };
                var p = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                };
                a.escape = function(e) {
                    return null == e ? "" : String(e).replace(/[&<>"']/g, function(e) {
                        return p[e]
                    })
                }, a.sortBy = function(e, t, n) {
                    var i = "function" === typeof t ? t : function(e) {
                        return e[t]
                    };
                    return e.map(function(e, t, r) {
                        return {
                            value: e,
                            index: t,
                            criteria: i.call(n, e, t, r)
                        }
                    }).sort(function(e, t) {
                        var n = e.criteria,
                            i = t.criteria;
                        if (n !== i) {
                            if (n > i || void 0 === n) return 1;
                            if (n < i || void 0 === i) return -1
                        }
                        return e.index - t.index
                    }).map(function(e) {
                        return e.value
                    })
                };
                var g = 0;
                a.uniqueId = function(e) {
                    var t = ++g + "";
                    return e ? e + t : t
                }, a.has = function(e, t) {
                    return Object.hasOwnProperty.call(e, t)
                };
                var m = function(e, t, i, r) {
                    if (e === t) return 0 !== e || 1 / e == 1 / t;
                    if (null == e || null == t) return e === t;
                    var o = u.call(e);
                    if (o != u.call(t)) return !1;
                    switch (o) {
                        case "[object String]":
                            return e == String(t);
                        case "[object Number]":
                            return e !== +e ? t !== +t : 0 === e ? 1 / e === 1 / t : e === +t;
                        case "[object Date]":
                        case "[object Boolean]":
                            return +e == +t;
                        case "[object RegExp]":
                            return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
                    }
                    if ("object" != typeof e || "object" != typeof t) return !1;
                    for (var a = i.length; a--;)
                        if (i[a] == e) return r[a] == t;
                    var s = e.constructor,
                        c = t.constructor;
                    if (s !== c && !("function" === typeof s && s instanceof s && "function" === typeof c && c instanceof c)) return !1;
                    i.push(e), r.push(t);
                    var l = 0,
                        d = !0;
                    if ("[object Array]" === o) {
                        if (l = e.length, d = l === t.length)
                            for (; l-- && (d = m(e[l], t[l], i, r)););
                    } else {
                        for (var f in e)
                            if (n.has(e, f) && (l++, !(d = n.has(t, f) && m(e[f], t[f], i, r)))) break;
                        if (d) {
                            for (f in t)
                                if (n.has(t, f) && !l--) break;
                            d = !l
                        }
                    }
                    return i.pop(), r.pop(), d
                };
                a.isEqual = function(e, t) {
                    return m(e, t, [], [])
                };
                var v = t.Events = {
                        on: function(e, t, n) {
                            return b(this, "on", e, [t, n]) && t ? (this._events || (this._events = {}), (this._events[e] || (this._events[e] = [])).push({
                                callback: t,
                                context: n,
                                ctx: n || this
                            }), this) : this
                        },
                        once: function(e, t, n) {
                            if (!b(this, "once", e, [t, n]) || !t) return this;
                            var i, r = this,
                                o = function() {
                                    i || (i = !0, r.off(e, o), t.apply(this, arguments))
                                };
                            return o._callback = t, this.on(e, o, n)
                        },
                        off: function(e, t, n) {
                            var i, r, o, a, s, c, l, u;
                            if (!this._events || !b(this, "off", e, [t, n])) return this;
                            if (!e && !t && !n) return this._events = void 0, this;
                            for (a = e ? [e] : Object.keys(this._events), s = 0, c = a.length; s < c; s++)
                                if (e = a[s], o = this._events[e]) {
                                    if (this._events[e] = i = [], t || n)
                                        for (l = 0, u = o.length; l < u; l++) r = o[l], (t && t !== r.callback && t !== r.callback._callback || n && n !== r.context) && i.push(r);
                                    i.length || delete this._events[e]
                                } return this
                        },
                        trigger: function(e) {
                            if (!this._events) return this;
                            var t = l.call(arguments, 1);
                            if (!b(this, "trigger", e, t)) return this;
                            var n = this._events[e],
                                i = this._events.all;
                            return n && _(n, t), i && _(i, arguments), this
                        },
                        stopListening: function(e, t, n) {
                            var i = this._listeningTo;
                            if (!i) return this;
                            var r = !t && !n;
                            n || "object" !== typeof t || (n = this), e && ((i = {})[e._listenId] = e);
                            for (var o in i) e = i[o], e.off(t, n, this), !r && Object.keys(e._events).length || delete this._listeningTo[o];
                            return this
                        }
                    },
                    y = /\s+/,
                    b = function(e, t, n, i) {
                        if (!n) return !0;
                        var r;
                        if ("object" === typeof n) {
                            for (var o in n) r = [o, n[o]], c.apply(r, i), e[t].apply(e, r);
                            return !1
                        }
                        if (y.test(n)) {
                            for (var a = n.split(y), s = 0, l = a.length; s < l; s++) r = [a[s]], c.apply(r, i), e[t].apply(e, r);
                            return !1
                        }
                        return !0
                    },
                    _ = function(e, t) {
                        var n, i = -1,
                            r = e.length,
                            o = t[0],
                            a = t[1],
                            s = t[2];
                        switch (t.length) {
                            case 0:
                                for (; ++i < r;)(n = e[i]).callback.call(n.ctx);
                                return;
                            case 1:
                                for (; ++i < r;)(n = e[i]).callback.call(n.ctx, o);
                                return;
                            case 2:
                                for (; ++i < r;)(n = e[i]).callback.call(n.ctx, o, a);
                                return;
                            case 3:
                                for (; ++i < r;)(n = e[i]).callback.call(n.ctx, o, a, s);
                                return;
                            default:
                                for (; ++i < r;)(n = e[i]).callback.apply(n.ctx, t)
                        }
                    },
                    w = {
                        listenTo: "on",
                        listenToOnce: "once"
                    };
                Object.keys(w).forEach(function(e) {
                    var t = w[e];
                    v[e] = function(e, i, r) {
                        return (this._listeningTo || (this._listeningTo = {}))[e._listenId || (e._listenId = n.uniqueId("l"))] = e, r || "object" !== typeof i || (r = this), e[t](i, r, this), this
                    }
                }), v.bind = v.on, v.unbind = v.off;
                var A = t.Model = function(e, t) {
                    var i = e || {};
                    t || (t = {}), this.cid = n.uniqueId("c"), this.attributes = Object.create(null), t.collection && (this.collection = t.collection), t.parse && (i = this.parse(i, t) || {}), i = n.defaults({}, i, n.result(this, "defaults")), this.set(i, t), this.changed = Object.create(null), this.initialize.apply(this, arguments)
                };
                if (n.extend(A.prototype, v, {
                        changed: null,
                        validationError: null,
                        idAttribute: "id",
                        initialize: function() {},
                        toJSON: function(e) {
                            return n.extend({}, this.attributes)
                        },
                        sync: function() {
                            return t.sync.apply(this, arguments)
                        },
                        get: function(e) {
                            return this.attributes[e]
                        },
                        escape: function(e) {
                            return n.escape(this.get(e))
                        },
                        has: function(e) {
                            return null != this.get(e)
                        },
                        set: function(e, t, i) {
                            var r, o, a, s, c, l, u, d;
                            if (null == e) return this;
                            if ("object" === typeof e ? (o = e, i = t) : (o = {})[e] = t, i || (i = {}), !this._validate(o, i)) return !1;
                            a = i.unset, c = i.silent, s = [], l = this._changing, this._changing = !0, l || (this._previousAttributes = n.extend(Object.create(null), this.attributes), this.changed = {}), d = this.attributes, u = this._previousAttributes, this.idAttribute in o && (this.id = o[this.idAttribute]);
                            for (r in o) t = o[r], n.isEqual(d[r], t) || s.push(r), n.isEqual(u[r], t) ? delete this.changed[r] : this.changed[r] = t, a ? delete d[r] : d[r] = t;
                            if (!c) {
                                s.length && (this._pending = i);
                                for (var f = 0, h = s.length; f < h; f++) this.trigger("change:" + s[f], this, d[s[f]], i)
                            }
                            if (l) return this;
                            if (!c)
                                for (; this._pending;) i = this._pending, this._pending = !1, this.trigger("change", this, i);
                            return this._pending = !1, this._changing = !1, this
                        },
                        unset: function(e, t) {
                            return this.set(e, void 0, n.extend({}, t, {
                                unset: !0
                            }))
                        },
                        clear: function(e) {
                            var t = {};
                            for (var i in this.attributes) t[i] = void 0;
                            return this.set(t, n.extend({}, e, {
                                unset: !0
                            }))
                        },
                        hasChanged: function(e) {
                            return null == e ? !!Object.keys(this.changed).length : n.has(this.changed, e)
                        },
                        changedAttributes: function(e) {
                            if (!e) return !!this.hasChanged() && n.extend(Object.create(null), this.changed);
                            var t, i = !1,
                                r = this._changing ? this._previousAttributes : this.attributes;
                            for (var o in e) n.isEqual(r[o], t = e[o]) || ((i || (i = {}))[o] = t);
                            return i
                        },
                        previous: function(e) {
                            return null != e && this._previousAttributes ? this._previousAttributes[e] : null
                        },
                        previousAttributes: function() {
                            return n.extend(Object.create(null), this._previousAttributes)
                        },
                        fetch: function(e) {
                            e = e ? n.extend({}, e) : {}, void 0 === e.parse && (e.parse = !0);
                            var t = this,
                                i = e.success;
                            return e.success = function(n) {
                                if (!t.set(t.parse(n, e), e)) return !1;
                                i && i(t, n, e), t.trigger("sync", t, n, e)
                            }, f(this, e), this.sync("read", this, e)
                        },
                        save: function(e, t, i) {
                            var r, o, a, s = this.attributes;
                            if (null == e || "object" === typeof e ? (r = e, i = t) : (r = {})[e] = t, i = n.extend({
                                    validate: !0
                                }, i), r && !i.wait) {
                                if (!this.set(r, i)) return !1
                            } else if (!this._validate(r, i)) return !1;
                            r && i.wait && (this.attributes = n.extend(Object.create(null), s, r)), void 0 === i.parse && (i.parse = !0);
                            var c = this,
                                l = i.success;
                            return i.success = function(e) {
                                c.attributes = s;
                                var t = c.parse(e, i);
                                if (i.wait && (t = n.extend(r || {}, t)), t && "object" === typeof t && !c.set(t, i)) return !1;
                                l && l(c, e, i), c.trigger("sync", c, e, i)
                            }, f(this, i), o = this.isNew() ? "create" : i.patch ? "patch" : "update", "patch" === o && (i.attrs = r), a = this.sync(o, this, i), r && i.wait && (this.attributes = s), a
                        },
                        destroy: function(e) {
                            e = e ? n.extend({}, e) : {};
                            var t = this,
                                i = e.success,
                                r = function() {
                                    t.trigger("destroy", t, t.collection, e)
                                };
                            if (e.success = function(n) {
                                    (e.wait || t.isNew()) && r(), i && i(t, n, e), t.isNew() || t.trigger("sync", t, n, e)
                                }, this.isNew()) return e.success(), !1;
                            f(this, e);
                            var o = this.sync("delete", this, e);
                            return e.wait || r(), o
                        },
                        url: function() {
                            var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || d();
                            return this.isNew() ? e : e.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
                        },
                        parse: function(e, t) {
                            return e
                        },
                        clone: function() {
                            return new this.constructor(this.attributes)
                        },
                        isNew: function() {
                            return !this.has(this.idAttribute)
                        },
                        isValid: function(e) {
                            return this._validate({}, n.extend(e || {}, {
                                validate: !0
                            }))
                        },
                        _validate: function(e, t) {
                            if (!t.validate || !this.validate) return !0;
                            e = n.extend(Object.create(null), this.attributes, e);
                            var i = this.validationError = this.validate(e, t) || null;
                            return !i || (this.trigger("invalid", this, i, n.extend(t, {
                                validationError: i
                            })), !1)
                        }
                    }), n.keys) {
                    ["keys", "values", "pairs", "invert", "pick", "omit"].filter(h).forEach(function(e) {
                        A.prototype[e] = function() {
                            var t = l.call(arguments);
                            return t.unshift(this.attributes), n[e].apply(n, t)
                        }
                    })
                }
                var x = t.Collection = function(e, t) {
                        t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({
                            silent: !0
                        }, t))
                    },
                    k = {
                        add: !0,
                        remove: !0,
                        merge: !0
                    },
                    C = {
                        add: !0,
                        remove: !1
                    };
                if (n.extend(x.prototype, v, {
                        model: "undefined" === typeof A ? null : A,
                        initialize: function() {},
                        toJSON: function(e) {
                            return this.map(function(t) {
                                return t.toJSON(e)
                            })
                        },
                        sync: function() {
                            return t.sync.apply(this, arguments)
                        },
                        add: function(e, t) {
                            return this.set(e, n.extend({
                                merge: !1
                            }, t, C))
                        },
                        remove: function(e, t) {
                            var n = !Array.isArray(e);
                            e = n ? [e] : e.slice(), t || (t = {});
                            var i, r, o, a;
                            for (i = 0, r = e.length; i < r; i++)(a = e[i] = this.get(e[i])) && (delete this._byId[a.id], delete this._byId[a.cid], o = this.indexOf(a), this.models.splice(o, 1), this.length--, t.silent || (t.index = o, a.trigger("remove", a, this, t)), this._removeReference(a, t));
                            return n ? e[0] : e
                        },
                        set: function(e, t) {
                            t = n.defaults({}, t, k), t.parse && (e = this.parse(e, t));
                            var i = !Array.isArray(e);
                            e = i ? e ? [e] : [] : e.slice();
                            var r, o, a, s, c, l, u, d = t.at,
                                f = this.model,
                                h = this.comparator && null == d && !1 !== t.sort,
                                p = "string" === typeof this.comparator ? this.comparator : null,
                                g = [],
                                m = [],
                                v = {},
                                y = t.add,
                                b = t.merge,
                                _ = t.remove,
                                w = !(h || !y || !_) && [];
                            for (r = 0, o = e.length; r < o; r++) {
                                if (c = e[r] || {}, a = c instanceof A ? s = c : c[f.prototype.idAttribute || "id"], l = this.get(a)) _ && (v[l.cid] = !0), b && (c = c === s ? s.attributes : c, t.parse && (c = l.parse(c, t)), l.set(c, t), h && !u && l.hasChanged(p) && (u = !0)), e[r] = l;
                                else if (y) {
                                    if (!(s = e[r] = this._prepareModel(c, t))) continue;
                                    g.push(s), this._addReference(s, t)
                                }
                                s = l || s, !w || !s.isNew() && v[s.id] || w.push(s), v[s.id] = !0
                            }
                            if (_) {
                                for (r = 0, o = this.length; r < o; ++r) v[(s = this.models[r]).cid] || m.push(s);
                                m.length && this.remove(m, t)
                            }
                            if (g.length || w && w.length)
                                if (h && (u = !0), this.length += g.length, null != d)
                                    for (r = 0, o = g.length; r < o; r++) this.models.splice(d + r, 0, g[r]);
                                else {
                                    w && (this.models.length = 0);
                                    var x = w || g;
                                    for (r = 0, o = x.length; r < o; r++) this.models.push(x[r])
                                } if (u && this.sort({
                                    silent: !0
                                }), !t.silent) {
                                for (r = 0, o = g.length; r < o; r++)(s = g[r]).trigger("add", s, this, t);
                                (u || w && w.length) && this.trigger("sort", this, t)
                            }
                            return i ? e[0] : e
                        },
                        reset: function(e, t) {
                            t || (t = {});
                            for (var i = 0, r = this.models.length; i < r; i++) this._removeReference(this.models[i], t);
                            return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({
                                silent: !0
                            }, t)), t.silent || this.trigger("reset", this, t), e
                        },
                        push: function(e, t) {
                            return this.add(e, n.extend({
                                at: this.length
                            }, t))
                        },
                        pop: function(e) {
                            var t = this.at(this.length - 1);
                            return this.remove(t, e), t
                        },
                        unshift: function(e, t) {
                            return this.add(e, n.extend({
                                at: 0
                            }, t))
                        },
                        shift: function(e) {
                            var t = this.at(0);
                            return this.remove(t, e), t
                        },
                        slice: function() {
                            return l.apply(this.models, arguments)
                        },
                        get: function(e) {
                            if (null != e) return this._byId[e] || this._byId[e.id] || this._byId[e.cid]
                        },
                        at: function(e) {
                            return this.models[e]
                        },
                        where: function(e, t) {
                            return e && Object.keys(e).length ? this[t ? "find" : "filter"](function(t) {
                                for (var n in e)
                                    if (e[n] !== t.get(n)) return !1;
                                return !0
                            }) : t ? void 0 : []
                        },
                        findWhere: function(e) {
                            return this.where(e, !0)
                        },
                        sort: function(e) {
                            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                            return e || (e = {}), "string" === typeof this.comparator || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(this.comparator.bind(this)), e.silent || this.trigger("sort", this, e), this
                        },
                        pluck: function(e) {
                            return this.models.map(function(t) {
                                return t.get(e)
                            })
                        },
                        fetch: function(e) {
                            e = e ? n.extend({}, e) : {}, void 0 === e.parse && (e.parse = !0);
                            var t = e.success,
                                i = this;
                            return e.success = function(n) {
                                var r = e.reset ? "reset" : "set";
                                i[r](n, e), t && t(i, n, e), i.trigger("sync", i, n, e)
                            }, f(this, e), this.sync("read", this, e)
                        },
                        create: function(e, t) {
                            if (t = t ? n.extend({}, t) : {}, !(e = this._prepareModel(e, t))) return !1;
                            t.wait || this.add(e, t);
                            var i = this,
                                r = t.success;
                            return t.success = function(e, n) {
                                t.wait && i.add(e, t), r && r(e, n, t)
                            }, e.save(null, t), e
                        },
                        parse: function(e, t) {
                            return e
                        },
                        clone: function() {
                            return new this.constructor(this.models)
                        },
                        _reset: function() {
                            this.length = 0, this.models = [], this._byId = Object.create(null)
                        },
                        _prepareModel: function(e, t) {
                            if (e instanceof A) return e;
                            t = n.extend({}, t), t.collection = this;
                            var i = new this.model(e, t);
                            return i.validationError ? (this.trigger("invalid", this, i.validationError, t), !1) : i
                        },
                        _addReference: function(e, t) {
                            this._byId[e.cid] = e, null != e.id && (this._byId[e.id] = e), e.collection || (e.collection = this), e.on("all", this._onModelEvent, this)
                        },
                        _removeReference: function(e, t) {
                            this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
                        },
                        _onModelEvent: function(e, t, n, i) {
                            ("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, i), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
                        }
                    }), h("each")) {
                    ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"].filter(h).forEach(function(e) {
                        x.prototype[e] = function() {
                            var t = l.call(arguments);
                            return t.unshift(this.models), n[e].apply(n, t)
                        }
                    });
                    ["groupBy", "countBy", "sortBy"].filter(h).forEach(function(e) {
                        x.prototype[e] = function(t, i) {
                            var r = "function" === typeof t ? t : function(e) {
                                return e.get(t)
                            };
                            return n[e](this.models, r, i)
                        }
                    })
                } else ["forEach", "map", "filter", "some", "every", "reduce", "reduceRight", "indexOf", "lastIndexOf"].forEach(function(e) {
                    x.prototype[e] = function(t, n) {
                        return this.models[e](t, n)
                    }
                }), x.prototype.find = function(e, t) {
                    var n;
                    return this.some(function(i, r, o) {
                        if (e.call(t, i, r, o)) return n = i, !0
                    }), n
                }, ["sortBy"].forEach(function(e) {
                    x.prototype[e] = function(t, i) {
                        var r = "function" === typeof t ? t : function(e) {
                            return e.get(t)
                        };
                        return n[e](this.models, r, i)
                    }
                });
                var T = t.View = function(e) {
                        this.cid = n.uniqueId("view"), e && Object.keys(e).forEach(function(t) {
                            -1 !== j.indexOf(t) && (this[t] = e[t])
                        }, this), this._ensureElement(), this.initialize.apply(this, arguments)
                    },
                    E = /^(\S+)\s*(.*)$/,
                    j = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
                n.extend(T.prototype, v, {
                    tagName: "div",
                    $: function(e) {
                        return this.$el.find(e)
                    },
                    initialize: function() {},
                    render: function() {
                        return this
                    },
                    remove: function() {
                        return this._removeElement(), this.stopListening(), this
                    },
                    _removeElement: function() {
                        this.$el.remove()
                    },
                    setElement: function(e) {
                        return this.undelegateEvents(), this._setElement(e), this.delegateEvents(), this
                    },
                    _setElement: function(e) {
                        this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0]
                    },
                    delegateEvents: function(e) {
                        if (!e && !(e = n.result(this, "events"))) return this;
                        this.undelegateEvents();
                        for (var t in e) {
                            var i = e[t];
                            "function" !== typeof i && (i = this[e[t]]);
                            var r = t.match(E);
                            this.delegate(r[1], r[2], i.bind(this))
                        }
                        return this
                    },
                    delegate: function(e, t, n) {
                        this.$el.on(e + ".delegateEvents" + this.cid, t, n)
                    },
                    undelegateEvents: function() {
                        return this.$el && this.$el.off(".delegateEvents" + this.cid), this
                    },
                    undelegate: function(e, t, n) {
                        this.$el.off(e + ".delegateEvents" + this.cid, t, n)
                    },
                    _createElement: function(e) {
                        return document.createElement(e)
                    },
                    _ensureElement: function() {
                        if (this.el) this.setElement(n.result(this, "el"));
                        else {
                            var e = n.extend({}, n.result(this, "attributes"));
                            this.id && (e.id = n.result(this, "id")), this.className && (e.class = n.result(this, "className")), this.setElement(this._createElement(n.result(this, "tagName"))), this._setAttributes(e)
                        }
                    },
                    _setAttributes: function(e) {
                        this.$el.attr(e)
                    }
                }), t.sync = function(e, i, r) {
                    r || (r = {});
                    var o = S[e],
                        a = {
                            type: o,
                            dataType: "json"
                        };
                    r.url || (a.url = n.result(i, "url") || d()), null != r.data || !i || "create" !== e && "update" !== e && "patch" !== e || (a.contentType = "application/json", a.data = JSON.stringify(r.attrs || i.toJSON(r))), "GET" !== a.type && (a.processData = !1);
                    var s = r.xhr = t.ajax(n.extend(a, r));
                    return i.trigger("request", i, s, r), s
                };
                var S = {
                    create: "POST",
                    update: "PUT",
                    patch: "PATCH",
                    delete: "DELETE",
                    read: "GET"
                };
                t.ajax = function() {
                    return t.$.ajax.apply(t.$, arguments)
                };
                var M = t.Router = function(e) {
                        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
                    },
                    O = /\((.*?)\)/g,
                    P = /(\(\?)?:\w+/g,
                    N = /\*\w+/g,
                    I = /[\-{}\[\]+?.,\\\^$|#\s]/g,
                    L = function(e) {
                        return !!e && ("object" === typeof e && "[object RegExp]" === u.call(e))
                    };
                n.extend(M.prototype, v, {
                    initialize: function() {},
                    route: function(e, n, i) {
                        L(e) || (e = this._routeToRegExp(e)), "function" === typeof n && (i = n, n = ""), i || (i = this[n]);
                        var r = this;
                        return t.history.route(e, function(o) {
                            var a = r._extractParameters(e, o);
                            r.execute(i, a), r.trigger.apply(r, ["route:" + n].concat(a)), r.trigger("route", n, a), t.history.trigger("route", r, n, a)
                        }), this
                    },
                    execute: function(e, t) {
                        e && e.apply(this, t)
                    },
                    navigate: function(e, n) {
                        return t.history.navigate(e, n), this
                    },
                    _bindRoutes: function() {
                        if (this.routes) {
                            this.routes = n.result(this, "routes");
                            for (var e, t = Object.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
                        }
                    },
                    _routeToRegExp: function(e) {
                        return e = e.replace(I, "\\$&").replace(O, "(?:$1)?").replace(P, function(e, t) {
                            return t ? e : "([^/?]+)"
                        }).replace(N, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
                    },
                    _extractParameters: function(e, t) {
                        var n = e.exec(t).slice(1);
                        return n.map(function(e, t) {
                            return t === n.length - 1 ? e || null : e ? decodeURIComponent(e) : null
                        })
                    }
                });
                var R = t.History = function() {
                        this.handlers = [], this.checkUrl = this.checkUrl.bind(this), "undefined" !== typeof window && (this.location = window.location, this.history = window.history)
                    },
                    $ = /^[#\/]|\s+$/g,
                    D = /^\/+|\/+$/g,
                    F = /\/$/,
                    H = /[#].*$/;
                return R.started = !1, n.extend(R.prototype, v, {
                    atRoot: function() {
                        return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
                    },
                    getHash: function(e) {
                        var t = (e || this).location.href.match(/#(.*)$/);
                        return t ? t[1] : ""
                    },
                    getFragment: function(e, t) {
                        if (null == e)
                            if (this._wantsPushState || !this._wantsHashChange) {
                                e = decodeURI(this.location.pathname + this.location.search);
                                var n = this.root.replace(F, "");
                                e.indexOf(n) || (e = e.slice(n.length))
                            } else e = this.getHash();
                        return e.replace($, "")
                    },
                    start: function(e) {
                        if (R.started) throw new Error("Backbone.history has already been started");
                        R.started = !0, this.options = n.extend({
                            root: "/"
                        }, this.options, e), this.root = this.options.root, this._wantsHashChange = !1 !== this.options.hashChange, this._wantsPushState = !!this.options.pushState;
                        var t = this.getFragment();
                        this.root = ("/" + this.root + "/").replace(D, "/"), this._wantsPushState ? window.addEventListener("popstate", this.checkUrl, !1) : this._wantsHashChange && window.addEventListener("hashchange", this.checkUrl, !1), this.fragment = t;
                        var i = this.location;
                        if (this._wantsHashChange && this._wantsPushState && this.atRoot() && i.hash && (this.fragment = this.getHash().replace($, ""), this.history.replaceState({}, document.title, this.root + this.fragment)), !this.options.silent) return this.loadUrl()
                    },
                    stop: function() {
                        window.removeEventListener("popstate", this.checkUrl), window.removeEventListener("hashchange", this.checkUrl), R.started = !1
                    },
                    route: function(e, t) {
                        this.handlers.unshift({
                            route: e,
                            callback: t
                        })
                    },
                    checkUrl: function() {
                        if (this.getFragment() === this.fragment) return !1;
                        this.loadUrl()
                    },
                    loadUrl: function(e) {
                        return e = this.fragment = this.getFragment(e), this.handlers.some(function(t) {
                            if (t.route.test(e)) return t.callback(e), !0
                        })
                    },
                    navigate: function(e, t) {
                        if (!R.started) return !1;
                        t && !0 !== t || (t = {
                            trigger: !!t
                        });
                        var n = this.root + (e = this.getFragment(e || ""));
                        if (e = e.replace(H, ""), this.fragment !== e) {
                            if (this.fragment = e, "" === e && "/" !== n && (n = n.slice(0, -1)), this._wantsPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                            else {
                                if (!this._wantsHashChange) return this.location.assign(n);
                                this._updateHash(this.location, e, t.replace)
                            }
                            return t.trigger ? this.loadUrl(e) : void 0
                        }
                    },
                    _updateHash: function(e, t, n) {
                        if (n) {
                            var i = e.href.replace(/(javascript:|#).*$/, "");
                            e.replace(i + "#" + t)
                        } else e.hash = "#" + t
                    }
                }), ["Model", "Collection", "Router", "View", "History"].forEach(function(e) {
                    var n = t[e];
                    n && (n.extend = t.extend)
                }), n.extend(t, v), R && (t.history = new R), t
            }(e, t, null, i)
        }(this)
}, function(e, t, n) {
    "use strict";
    var i = n(0),
        r = n.n(i),
        o = {
            "&": ["&amp;", "&AMP;", "&#x00026;", "&#x0026;", "&#x026;", "&#x26;", "&#38;"],
            "<": ["&lt;", "&LT;", "&#x0003C;", "&#x003C;", "&#x03C;", "&#x3C;", "&#60;"],
            ">": ["&gt;", "&GT;", "&#x0003E;", "&#x003E;", "&#x03E;", "&#x3E;", "&#62;"],
            '"': ["&quot;", "&QUOT;", "&#x00022;", "&#x0022;", "&#x022;", "&#x22;", "&#34;"],
            "'": ["&#x27;", "&apos;", "&#x00027;", "&#x0027;", "&#x027;", "&#39;"],
            "`": ["&#x60;", "&grave;", "&DiacriticalGrave;", "&#x00060;", "&#x0060;", "&#x060;", "&#96;"]
        },
        a = {
            extend: function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i])
                }
                return e
            },
            all: function() {
                function e() {
                    s.length === a ? o.resolve(s) : s.length + c.length === a && o.reject(c, s)
                }
                for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                n[0] instanceof Array && (n = n[0]);
                for (var o = r.a.Deferred(), a = n.length, s = [], c = [], l = 0; l < a; l++) n[l] && n[l].then(function(t) {
                    s.push(t), e()
                }, function(t) {
                    c.push(t), e()
                });
                return o.promise()
            },
            pick: function(e) {
                for (var t = {}, n = 1; n < arguments.length; n++) t[arguments[n]] = e[arguments[n]];
                return t
            },
            debounce: function(e, t, n) {
                var i;
                return function() {
                    var r = n || this,
                        o = arguments;
                    clearTimeout(i), i = setTimeout(function() {
                        e.apply(r, o)
                    }, t)
                }
            },
            throttle: function(e, t, n) {
                var i = null,
                    r = !1;
                return function o() {
                    if (i) return void(r = !0);
                    n = n || this, e.call(n), i = setTimeout(function() {
                        var e = r;
                        i = null, r = !1, e && o.call(n)
                    }, t)
                }
            },
            get: function(e, t, n) {
                var i = 0;
                for (t = t.replace(/\]/g, "").split(/[\[\.]/); null != e && i < t.length;) e = e[t[i++]];
                return i && i === t.length && void 0 !== e ? e : n
            },
            paramitize: function(e) {
                var t = [];
                for (var n in e) e.hasOwnProperty(n) && t.push(n + "=" + e[n]);
                return t.join("&")
            },
            deparamitize: function(e) {
                var t = {};
                e = (e || "").replace(/^(\?|\&)/, "").split("&");
                for (var n = 0; n < e.length; n++) {
                    var i = e[n].split(/=(.+)?/);
                    i.length > 1 && (t[i[0]] = i[1] || "")
                }
                return t
            },
            currentUrl: function() {
                return window.location.href.split(/\?|#/)[0]
            },
            loadScript: function(e, t) {
                var n = document.createElement("script");
                "function" === typeof t && (n.onload = t), n.async = !0, n.src = e;
                var i = document.getElementsByTagName("script")[0];
                return i.parentNode.insertBefore(n, i), n
            },
            escape: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = function(e) {
                        return o[e][0]
                    },
                    n = "(?:" + Object.keys(o).join("|") + ")",
                    i = RegExp(n, "g");
                return e.replace(i, t)
            },
            unescape: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                for (var t in o) {
                    var n = "(?:" + o[t].join("|") + ")",
                        i = RegExp(n, "g");
                    e = e.replace(i, t)
                }
                return e
            }
        };
    t.a = a
}, function(e, t, n) {
    "use strict";

    function i(e, t, n, i) {
        return function() {
            try {
                var r = performance.now();
                t(e, JSON.parse(e.getAttribute("data-cdata") || "{}"));
                var o = l.com[n] = performance.now() - r;
                l.uri[i] = (l.uri[i] || 0) + o
            } catch (e) {
                console.log("presto: error initializing " + n, e)
            }
        }
    }

    function r() {
        var e = this;
        this._c = {}, this._cinit = {}, this._buffer = [], this._queue = [], this._running = !1, this.perf = l, this._ready = a.a.Deferred(), this._consent = a.a.Deferred(), this.domReady(function() {
            e._ready.resolve(), e.run()
        })
    }
    n.d(t, "a", function() {
        return d
    });
    var o = n(0),
        a = n.n(o),
        s = n(2),
        c = window;
    c.requestIdleCallback = c.requestIdleCallback || function(e) {
        function t() {
            var t = Date.now();
            e({
                didTimeout: !1,
                timeRemaining: function() {
                    return Math.max(0, 50 - (Date.now() - t))
                }
            })
        }
        return c.requestAnimationFrame ? c.requestAnimationFrame(t) : setTimeout(t, 1)
    }, "undefined" === typeof performance && (performance = Date);
    var l = {
        uri: {},
        com: {}
    };
    r.prototype = {
        domReady: a.a,
        LOW: 0,
        MEDIUM: 50,
        HIGH: 100,
        isReady: function() {
            return "resolved" === this._ready.state()
        },
        hasConsent: function() {
            return "resolved" === this._consent.state()
        },
        consent: function() {
            var e = this;
            this._ready.then(function() {
                return e._consent.resolve()
            })
        },
        registerComponent: function(e, t, n) {
            "function" !== typeof t && (n = t, t = function() {}), n = n || {};
            var i = n.waitForConsent || !1;
            this._c[e] = {
                fn: t,
                ex: n,
                priority: "number" === typeof n.priority ? n.priority : this.MEDIUM,
                consent: i
            }, (i && this.hasConsent() || !i && this.isReady()) && this.run()
        },
        get: function(e) {
            if (!this._c.hasOwnProperty(e)) throw 'Component "' + e + '" is not defined. Add it as a dependency of the getter.';
            return this._c[e].ex
        },
        run: s.a.debounce(function(e) {
            var t = this,
                n = (e || document).querySelectorAll("[data-cid]");
            [].slice.call(n).forEach(function(e) {
                var n = e.getAttribute("data-cid"),
                    r = n.split("-")[0],
                    o = t._c[r];
                if (!t._cinit[n] && o) {
                    t._cinit[n] = !0;
                    var a = {
                        priority: o.priority
                    };
                    o.consent ? t.consentTask(i(e, o.fn, n, r), a) : t.readyTask(i(e, o.fn, n, r), a)
                }
            })
        }, 10),
        readyTask: function(e, t) {
            var n = this;
            this._ready.then(function() {
                return n.task(e, t)
            })
        },
        consentTask: function(e, t) {
            var n = this;
            this._consent.then(function() {
                return n.task(e, t)
            })
        },
        task: function(e, t) {
            var n = this,
                i = {};
            for (var r in t) i[r] = t[r];
            if (i.fn = e, void 0 === i.priority && (i.priority = this.MEDIUM), this._buffer.push(i), !this._running) {
                ! function e() {
                    n._running = !0, c.requestIdleCallback(function(t) {
                        for (n._queue = n._queue.concat(n._buffer).sort(function(e, t) {
                                return e.priority - t.priority
                            }), n._buffer.length = 0; n._queue.length && t.timeRemaining() > 0;) n._queue.pop().fn();
                        n._queue.length || n._buffer.length ? e() : n._running = !1
                    }, {
                        timeout: 35
                    })
                }()
            }
        },
        report: function() {
            var e = this,
                t = {};
            Object.keys(this.perf.com).forEach(function(e) {
                var n = e.split("-").shift();
                t[n] = (t[n] || 0) + 1
            });
            var n = Object.keys(this.perf.uri).map(function(n) {
                var i = e.perf.uri[n],
                    r = t[n];
                return {
                    uri: n,
                    total_time: i,
                    average_time: i / r,
                    count: r
                }
            }).sort(function(e, t) {
                return t.total_time - e.total_time
            });
            return console.table ? (console.table(n.reduce(function(e, t) {
                return e[t.uri] = t, delete t.uri, e
            }, {})), "Total milliseconds: " + n.reduce(function(e, t) {
                return e + t.total_time
            }, 0)) : n
        }
    };
    var u = window.Initializer = new r;
    t.b = u;
    var d = r
}, function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
        return v
    }), n.d(t, "b", function() {
        return y
    }), n.d(t, "a", function() {
        return b
    }), n.d(t, "c", function() {
        return _
    });
    var i = n(1),
        r = n.n(i),
        o = n(0),
        a = n.n(o),
        s = n(2),
        c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        l = document.querySelector("#privacy-consent"),
        u = {
            fetch: function(e) {
                return this.ctx._fetch(e)
            },
            reset: function() {
                this.set(this.defaults, {
                    silent: !0
                })
            }
        },
        d = r.a.Model.extend(s.a.extend({
            url: "/services/user_context" + (l ? "?privacy=true" : ""),
            log: [],
            defaults: {
                auth_url: "",
                env: null,
                messaging: "",
                privacy: l,
                tos_notifications: []
            },
            initialize: function() {
                var e, t, n, i;
                this.currentUser = e = new f, this.currentMember = t = new h, this.currentCommunity = n = new g, this.currentNetwork = i = new p, e.ctx = t.ctx = n.ctx = i.ctx = this.ctx = this
            },
            parse: function(e) {
                if (l && (e.user = e.member = {}), this.currentUser.set(e.user || {}), this.currentMember.set(e.member || {}), this.currentCommunity.set(e.community || {}), this.currentNetwork.set(e.network || {}), ["user", "member", "community", "network"].forEach(function(t) {
                        delete e[t]
                    }), e.tos_notifications) {
                    var t = {};
                    e.tos_notifications = e.tos_notifications.filter(function(e) {
                        var n = !t[e.id];
                        return n && e.geo_continent_constraint && (n = document.cookie.indexOf("_chorus_geoip_continent=" + e.geo_continent_constraint) >= 0), n && (t[e.id] = !0), n
                    })
                }
                return e
            },
            _fetch: function(e) {
                var t = this;
                return this._ajax || (this.log.push("fetch"), this._ajax = r.a.Model.prototype.fetch.call(this, e).done(function() {
                    return t.log.push("fetch complete")
                })), this._ajax
            },
            fetchUser: function(e) {
                var t = this;
                if (e && e.refresh && (this.currentUser.reset(), this._user = null, "object" === ("undefined" === typeof Chorus ? "undefined" : c(Chorus)) && (Chorus.ssoLogin = null)), !this._user) {
                    var n = this._user = a.a.Deferred();
                    this.log.push("Fetching Primary Context"), this._fetch().done(function() {
                        if (t.log.push("Primary complete, with user: " + t.currentUser.get("id")), t.currentUser.get("id") || l) return n.resolve();
                        var i = t.get("auth_url") + "/sso/unison_request?community_id=" + t.currentCommunity.get("id") + "&t=" + Date.now();
                        t.log.push("Fetching SSO-1: " + i), s.a.loadScript(i, function() {
                            if (t.log.push("SSO-1 complete, with status: " + Chorus.ssoLogin), !Chorus.ssoLogin) return n.resolve();
                            var i = Chorus.ssoLogin;
                            Chorus.ssoLogin = null, t.log.push("Fetching SSO-2: " + i), s.a.loadScript(i, function() {
                                if (t.log.push("SSO-2 complete, with status: " + Chorus.ssoLogin), !Chorus.ssoLogin) return n.resolve();
                                t.log.push("Fetching Secondary Context"), t.url += "?t=" + Date.now(), r.a.Model.prototype.fetch.call(t, e).done(function() {
                                    t.log.push("Secondary complete, with user: " + t.currentUser.get("id")), n.resolve()
                                })
                            })
                        })
                    })
                }
                return this._user.promise()
            },
            isProd: function() {
                return "production" === this.get("env")
            }
        }, u)),
        f = r.a.Model.extend(s.a.extend(u, {
            defaults: {
                account_settings_url: null,
                ban_acknowledgement_needed: !1,
                can_edit: !1,
                contributor_agreement_accepted: !1,
                country: null,
                edit_profile_url: null,
                email: null,
                first_name: null,
                id: null,
                is_network_member: !1,
                is_community_member: !1,
                last_login: null,
                last_name: null,
                network_admin: !1,
                profile_image_url: null,
                profile_url: null,
                status: null,
                time_zone: null,
                username: null,
                geo: null
            },
            fetch: function(e) {
                return this.ctx.fetchUser(e)
            },
            isLoggedIn: function() {
                return !!this.get("id")
            }
        })),
        h = r.a.Model.extend(s.a.extend(u, {
            defaults: {
                ban_acknowledgement_needed: !1,
                community_id: null,
                comment_count: null,
                display_on_masthead: !1,
                favorite: !1,
                last_visited_on: null,
                legacy_nickname: null,
                legacy_user_id: null,
                short_bio: null,
                status: null,
                user_id: null
            },
            fetch: function(e) {
                return this.ctx.fetchUser(e)
            }
        })),
        p = r.a.Model.extend(s.a.extend({
            defaults: {
                domain: null,
                id: !1,
                name: null,
                primary_community_url: "",
                primary_community_id: null
            }
        }, u)),
        g = r.a.Model.extend(s.a.extend({
            defaults: {
                domain: null,
                id: !1,
                name: null,
                terms_of_agreement: "",
                community_guidelines_url: null
            }
        }, u)),
        m = window.Context = new d;
    t.e = m;
    var v = m.currentUser,
        y = m.currentMember,
        b = m.currentCommunity,
        _ = m.currentNetwork
}, function(e, t, n) {
    "use strict";
    var i = n(0),
        r = n.n(i),
        o = n(9),
        a = n(2),
        s = n(6),
        c = (n.n(s), {
            isTouch: function() {
                return void 0 === this._touch && (this._touch = "ontouchstart" in window || navigator.msMaxTouchPoints > 0), this._touch
            },
            isSmallWindow: function(e) {
                e = e || 600;
                var t = document.documentElement;
                return (window.innerWidth || t && t.clientWidth || document.body.clientWidth) <= e
            },
            isSmallScreen: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 600,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 800,
                    n = 0;
                isNaN(parseInt(window.orientation)) ? isNaN(a.a.get(window, "screen.orientation.angle", NaN)) || (n = window.screen.orientation.angle) : n = window.orientation;
                var i = 90 == n || -90 == n || 270 == n;
                return (i ? screen.height : screen.width) <= (i ? t : e)
            },
            isMobile: function() {
                return this.isTouch() && this.isSmallScreen()
            },
            isFullScreen: function() {
                return document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen
            },
            isCORSEnabled: function() {
                return !window.navigator.userAgent.match(/MSIE (6|7|8|9)/)
            },
            isITPEnabled: function() {
                var e = window.navigator.userAgent.match(/(\d+(?:\.\d+)?) Safari/i);
                return e && parseFloat(e[1]) >= 11
            },
            breakpoint: function() {
                for (var e = [{
                        name: "xsmall",
                        min: 0,
                        max: 400
                    }, {
                        name: "small",
                        min: 401,
                        max: 600
                    }, {
                        name: "medium_small",
                        min: 601,
                        max: 728
                    }, {
                        name: "medium",
                        min: 749,
                        max: 880
                    }, {
                        name: "large_medium",
                        min: 881,
                        max: 950
                    }, {
                        name: "large",
                        min: 956,
                        max: 1080
                    }, {
                        name: "xlarge_large",
                        min: 1081,
                        max: 1200
                    }, {
                        name: "xlarge",
                        min: 1201,
                        max: 1500
                    }, {
                        name: "xxlarge",
                        min: 1501,
                        max: 1 / 0
                    }], t = e.length - 1; t >= 0; t--) {
                    var n = e[t],
                        i = screen.width;
                    if (i >= n.min && i <= n.max) return n.name
                }
                return n.name
            },
            browser: function() {
                if (!this._browser) {
                    var e = navigator.userAgent.toLowerCase(),
                        t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || /(firefox)[ \/]([\w.]+)/.exec(e) || /(trident)[ \/]([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [],
                        n = t[1] || "",
                        i = t[2] || "0",
                        r = this._browser = {};
                    n && (r[n] = !0, r.version = i, "Netscape" === navigator.appName && "trident" === n && (r.msie = !0, r.version = "11")), r.chrome ? r.webkit = !0 : r.webkit && (r.safari = !0)
                }
                return this._browser
            },
            iOSversion: function() {
                if (/iP(hone|od|ad)/.test(navigator.appVersion)) {
                    var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                    return {
                        iOS: !0,
                        majorVersion: parseInt(e[1], 10),
                        minorVersion: parseInt(e[2], 10)
                    }
                }
                return {
                    iOS: !1
                }
            },
            imageFormats: function() {
                if (!this._imgs) {
                    var e = this,
                        t = this._imgs = r.a.Deferred(),
                        n = o.b.get("chorus-imgs-v1"),
                        i = ["webp"];
                    if (n && n.hasOwnProperty(i[0])) t.resolve(n);
                    else {
                        var a = {
                                webp: "data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoBAAEAAIAOJaQAA3AA/v89WAAAAA=="
                            },
                            s = Object.keys(a),
                            c = 0,
                            l = function() {
                                (c += 1) === s.length && (a.preferred = i.filter(function(e) {
                                    return a[e]
                                })[0], e.isTouch() && (a.preferred = null), o.b.set("chorus-imgs-v1", a), t.resolve(a))
                            };
                        s.forEach(function(e) {
                            var t = new Image;
                            t.onload = function() {
                                a[e] = t.height > 0 && t.width > 0, l()
                            }, t.onerror = function() {
                                a[e] = !1, l()
                            }, t.src = a[e]
                        })
                    }
                }
                return this._imgs.promise()
            },
            supportsPictureElement: function() {
                var e = navigator.userAgent,
                    t = /(webkit)[ \/]([\w.]+)/.exec(e.toLowerCase()),
                    n = /(chrome)[ \/]([\w.]+)/.exec(e.toLowerCase()),
                    i = /(Edge)[ \/]([\w.]+)/.exec(e),
                    r = /MSIE|Trident/.test(e);
                return !(!n && t && parseFloat(t[2]) < 601.6 || r || i && parseFloat(i[2]) < 13.10547 || /Opera Mobi/.test(e))
            },
            supportsAutoplayVideo: function() {
                return new Promise(function(e, t) {
                    function n(c) {
                        r++, clearTimeout(i);
                        var l = c && "playing" === c.type || 0 !== s.currentTime;
                        if (!l && r < o) return void(i = setTimeout(n, a));
                        s.parentNode && s.parentNode.removeChild(s), l ? e() : t()
                    }
                    var i = void 0,
                        r = 0,
                        o = 5,
                        a = 200,
                        s = document.createElement("video");
                    s.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, "") ? s.src = "data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A" : s.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, "") ? s.src = "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ==" : t(), s.style.position = "absolute", s.style.height = 0, s.style.width = 0, s.setAttribute("muted", ""), s.setAttribute("playsinline", ""), s.setAttribute("autoplay", ""), s.style.display = "none", document.documentElement.appendChild(s), setTimeout(function() {
                        s.play(), s.addEventListener("playing", n, !1), i = setTimeout(n, a)
                    }, 0)
                })
            },
            supportsObjectFit: function() {
                return "objectFit" in document.documentElement.style
            },
            supportsIntersectionObserver: function() {
                return !!window.IntersectionObserver
            }
        });
    t.a = c
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e) {
            d.push(e), 1 == d.length && u()
        }

        function t() {
            for (; d.length;) d[0](), d.shift()
        }

        function n(e) {
            this.a = f, this.b = void 0, this.f = [];
            var t = this;
            try {
                e(function(e) {
                    o(t, e)
                }, function(e) {
                    a(t, e)
                })
            } catch (e) {
                a(t, e)
            }
        }

        function i(e) {
            return new n(function(t, n) {
                n(e)
            })
        }

        function r(e) {
            return new n(function(t) {
                t(e)
            })
        }

        function o(e, t) {
            if (e.a == f) {
                if (t == e) throw new TypeError;
                var n = !1;
                try {
                    var i = t && t.then;
                    if (null != t && "object" == typeof t && "function" == typeof i) return void i.call(t, function(t) {
                        n || o(e, t), n = !0
                    }, function(t) {
                        n || a(e, t), n = !0
                    })
                } catch (t) {
                    return void(n || a(e, t))
                }
                e.a = 0, e.b = t, s(e)
            }
        }

        function a(e, t) {
            if (e.a == f) {
                if (t == e) throw new TypeError;
                e.a = 1, e.b = t, s(e)
            }
        }

        function s(t) {
            e(function() {
                if (t.a != f)
                    for (; t.f.length;) {
                        var e = t.f.shift(),
                            n = e[0],
                            i = e[1],
                            r = e[2],
                            e = e[3];
                        try {
                            0 == t.a ? r("function" == typeof n ? n.call(void 0, t.b) : t.b) : 1 == t.a && ("function" == typeof i ? r(i.call(void 0, t.b)) : e(t.b))
                        } catch (t) {
                            e(t)
                        }
                    }
            })
        }

        function c(e) {
            return new n(function(t, n) {
                var i = 0,
                    o = [];
                0 == e.length && t(o);
                for (var a = 0; a < e.length; a += 1) r(e[a]).c(function(n) {
                    return function(r) {
                        o[n] = r, (i += 1) == e.length && t(o)
                    }
                }(a), n)
            })
        }

        function l(e) {
            return new n(function(t, n) {
                for (var i = 0; i < e.length; i += 1) r(e[i]).c(t, n)
            })
        }
        var u, d = [];
        u = function() {
            setTimeout(t)
        };
        var f = 2;
        n.prototype.g = function(e) {
            return this.c(void 0, e)
        }, n.prototype.c = function(e, t) {
            var i = this;
            return new n(function(n, r) {
                i.f.push([e, t, n, r]), s(i)
            })
        }, window.Promise || (window.Promise = n, window.Promise.resolve = r, window.Promise.reject = i, window.Promise.race = l, window.Promise.all = c, window.Promise.prototype.then = n.prototype.c, window.Promise.prototype.catch = n.prototype.g)
    }()
}, function(e, t, n) {
    "use strict";
    var i = n(2),
        r = {
            els: [],
            _h: null,
            _t: null,
            _b: null,
            callElementsInViewport: function() {
                for (var e = this.els.length - 1; e >= 0; e--) {
                    var t = this.els[e];
                    if (this.testElementInViewport(t.el, t.t)) {
                        t.fn.call(null, t.el) || this.els.splice(e, 1)
                    }
                }
            },
            testElementInViewport: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = this._h;
                n || (n = this._h = window.innerHeight || document.documentElement.clientHeight);
                var i = this._t = t * n,
                    r = this._b = n - i,
                    o = e.getBoundingClientRect();
                return o.top >= i && o.top <= r || o.bottom >= i && o.bottom <= r
            },
            trackElement: function(e, t, n) {
                var r = !0;
                this.testElementInViewport(e, n) && (r = t(e)), r && (this.els.push({
                    el: e,
                    fn: t,
                    t: n
                }), this._init || (this._init = !0, window.addEventListener("scroll", i.a.throttle(this.callElementsInViewport, 200, this)), window.addEventListener("resize", i.a.throttle(this.refresh, 200, this))))
            },
            refresh: function() {
                this._h = null, this.callElementsInViewport()
            }
        };
    t.a = r
}, function(e, t, n) {
    "use strict";

    function i() {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "dataLayer";
        this.dataLayer = window[t] || [], this.depths = [25, 50, 75, 90], this.onReady(function() {
            e.trackImpressions(), e.trackScrollDepth(!0)
        })
    }

    function r(e, t, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return function() {
            for (var r = arguments.length, o = Array(r), a = 0; a < r; a++) o[a] = arguments[a];
            o[0] instanceof Array && (o = o[0]), "string" === typeof o[0] && o[0].match(/send|_track/) && o.shift(), o[0] === e.toLowerCase() && o.shift();
            for (var s = 0, c = {}, l = 0; l < o.length || s < n.length; l++) {
                var u = o[l];
                if ("function" === typeof u) c.eventCallback = u;
                else if ("boolean" === typeof u) u && (c.eventNonInt = u);
                else if ("object" === ("undefined" === typeof u ? "undefined" : f(u)))
                    for (var d in u) u.hasOwnProperty(d) && (c[i[d] || d] = u[d]);
                else if (n[s]) {
                    var h = n[s++];
                    c.hasOwnProperty(h) || (c[h] = u)
                }
            }
            return c.event = t, c
        }
    }
    n.d(t, "a", function() {
        return h
    });
    var o = n(0),
        a = n.n(o),
        s = n(4),
        c = n(2),
        l = n(5),
        u = n(7),
        d = n(12),
        f = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    i.prototype = {
        onReady: a.a,
        push: function(e) {
            this.dataLayer.push(e)
        },
        formatEvent: r("event", "analyticsEvent", ["eventCategory", "eventAction", "eventLabel", "eventValue", "eventNonInt"], {
            nonInteraction: "eventNonInt",
            hitCallback: "eventCallback"
        }),
        formatSocial: r("social", "social", ["socialNetwork", "socialAction", "socialTarget", "socialPagePath"], {
            page: "socialPagePath",
            hitCallback: "eventCallback"
        }),
        formatPageview: r("pageview", "virtualPageView", ["virtualPagePath", "virtualPageTitle"], {
            page: "virtualPagePath",
            title: "virtualPageTitle",
            hitCallback: "eventCallback"
        }),
        event: function() {
            this.push(this.formatEvent.apply(this, arguments))
        },
        social: function() {
            this.push(this.formatSocial.apply(this, arguments))
        },
        pageview: function() {
            this.push(this.formatPageview.apply(this, arguments))
        },
        nav: function(e, t, n) {
            e = [e, this.contentType(), this.contentFormat()].join(":"), this.push(this.formatEvent("navigation", e, t, n))
        },
        eventAutoFormat: function(e, t, n) {
            var i = [e, t].join(":"),
                r = [e, this.contentType(), t].join(":");
            return this.event(e, i, r, n)
        },
        trackElementView: function(e, t) {
            var n = this;
            /analytics-viewport=false/.test(location.search) || ("string" === typeof e ? e = [].slice.call((t || document).querySelectorAll(e)) : Array.isArray(e) || (e = [e]), e.filter(function(e) {
                return "video" !== e.getAttribute("data-analytics-viewport")
            }).forEach(function(e) {
                e.__analytics_vpt__ || (e.__analytics_vpt__ = !0, u.a.trackElement(e, function(e) {
                    return n.push({
                        event: "elementView",
                        "gtm.element": e
                    }, 0)
                }))
            }))
        },
        trackImpressions: function(e) {
            this.trackElementView("[data-analytics-viewport]", e, 0)
        },
        trackScrollDepth: function(e) {
            e && e.hasOwnProperty("disable") && (this._noSD = e.disable), this._noSD && (e = !1);
            var t = a()(window).off("scroll.scrolldepth");
            e && (t.on("scroll.scrolldepth", c.a.throttle(this._depth, 100, this)), this._depth(!0))
        },
        _depth: function(e, t, n, i) {
            var r = this.depths;
            i = i || window.pageYOffset, t = t || window.innerHeight, n = n || document.body.scrollHeight;
            for (var o = i / n * 100, a = (i + t) / n * 100, s = r.length - 1; s >= 0; s--) {
                var c = r[s];
                if ((c >= o && c <= a || e && c <= a) && (this.eventAutoFormat("interaction", c, !0), r.splice(s, 1), e)) return
            }
            r.length || this.trackScrollDepth(!1)
        },
        getVariable: function(e) {
            for (var t = this.dataLayer, n = t.length - 1; n >= 0; n--)
                if (t[n].hasOwnProperty(e)) return t[n][e]
        },
        contentType: function() {
            return this.getVariable("Content Type") || "other"
        },
        contentFormat: function() {
            return /small|medium/.test(l.a.breakpoint()) || l.a.isSmallWindow(600) ? "mobile" : "desktop"
        },
        sendContext: function() {
            var e = this;
            s.d.fetch().then(function() {
                var t = d.a.server(d.a.EST);
                e.push({
                    "Hour of Day": t.getHours(),
                    "Day of Week": d.a.nameOfDay(t.getDay()).toLowerCase(),
                    "Logged in Status": s.d.get("id") || "Logged Out",
                    Breakpoint: l.a.breakpoint()
                })
            })
        }
    }, t.b = new i;
    var h = i
}, function(e, t, n) {
    "use strict";

    function i() {}
    n.d(t, "a", function() {
        return o
    });
    var r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    i.prototype = {
        _enabled: null,
        enabled: function() {
            if (null === this._enabled) {
                try {
                    localStorage.setItem("vox", "vox"), localStorage.removeItem("vox"), this._enabled = !0
                } catch (e) {
                    this._enabled = !1
                }
            }
            return this._enabled
        },
        get: function(e) {
            if (this.enabled()) {
                var t = localStorage.getItem(e);
                if (t && ("{" === t[0] || "[" === t[0])) return JSON.parse(t);
                if ("string" === typeof t) {
                    if (/^(true|false)$/i.test(t)) return "true" === t.toLowerCase();
                    if (/^\d+$/.test(t)) return parseInt(t);
                    if (/^\d+\.\d+$/.test(t)) return parseFloat(t)
                }
            }
            return t || null
        },
        set: function(e, t) {
            this.enabled() && ("object" === ("undefined" === typeof t ? "undefined" : r(t)) && (t = JSON.stringify(t)), localStorage.setItem(e, t))
        },
        remove: function(e) {
            this.enabled() && localStorage.removeItem(e)
        },
        clear: function() {
            this.enabled() && localStorage.clear()
        }
    }, t.b = new i;
    var o = i
}, function(e, t, n) {
    "use strict";

    function i(e, t, n) {
        !t && n && (t = n), t = r.a.extend({}, i.settings, t);
        var o = RegExp([(t.escape || a).source, (t.interpolate || a).source, (t.evaluate || a).source].join("|") + "|$", "g"),
            s = 0,
            u = "__p+='";
        e.replace(o, function(t, n, i, r, o) {
            return u += e.slice(s, o).replace(c, l), s = o + t.length, n ? u += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? u += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : r && (u += "';\n" + r + "\n__p+='"), t
        }), u += "';\n", t.variable || (u = "with(obj||{}){\n" + u + "}\n"), u = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + u + "return __p;\n";
        var d;
        try {
            d = new Function(t.variable || "obj", "_", u)
        } catch (e) {
            throw e.source = u, e
        }
        var f = function(e) {
            return d.call(this, e, r.a)
        };
        return f.source = "function(" + (t.variable || "obj") + "){\n" + u + "}", f
    }
    var r = n(2);
    r.a.escape = function() {
        var e = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            t = function(t) {
                return e[t]
            },
            n = "(?:" + Object.keys(e).join("|") + ")",
            i = RegExp(n),
            r = RegExp(n, "g");
        return function(e) {
            return e = null == e ? "" : "" + e, i.test(e) ? e.replace(r, t) : e
        }
    }();
    var o = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g,
            variable: "data"
        },
        a = /(.)^/,
        s = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        c = /\\|'|\r|\n|\u2028|\u2029/g,
        l = function(e) {
            return "\\" + s[e]
        };
    i.settings = o, t.a = i
}, , function(e, t, n) {
    "use strict";

    function i(e) {
        return "number" === typeof e ? e = new Date(e) : "string" === typeof e ? e = new Date(e).getTime() : e instanceof Date && (e = e.getTime()), e
    }

    function r(e, t, n) {
        return (1 === e ? n || "A" : e) + " " + t + (1 === e ? "" : "s") + " ago"
    }
    var o = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        a = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    t.a = {
        EST: -5,
        relative: function(e, t) {
            t = i(t || Date.now()), e = i(e || t);
            var n = t - e;
            if (n < 1e3) return "Now";
            if (n < 6e4) return r(Math.round(n / 1e3), "second");
            if (n < 36e5) return r(Math.round(n / 6e4), "minute");
            if (n < 864e5) return r(Math.round(n / 36e5), "hour", "An");
            if (n < 6048e5) return r(Math.round(n / 864e5), "day");
            var o = new Date(t),
                a = new Date(e),
                s = o.getMonth() - a.getMonth() + 12 * (o.getFullYear() - a.getFullYear());
            return n < 24192e5 || 0 === s ? r(Math.round(n / 6048e5), "week") : n < 31536e6 ? r(s, "month") : r(Math.round(n / 31536e6), "year")
        },
        absolute: function(e) {
            var t = e instanceof Date ? e : new Date(e),
                n = (t.getHours() + 11) % 12 + 1,
                i = t.getHours() < 12 ? "AM" : "PM",
                r = ("00" + t.getMinutes()).slice(-2);
            return o[t.getMonth()] + " " + t.getDate() + ", " + t.getFullYear() + " | " + n + ":" + r + " " + i
        },
        recentRelative: function(e, t, n) {
            return n = i(n || Date.now()), t = i(n - (t || 864e5)), e = i(e || n), e > t ? this.relative(e, n) : this.absolute(e)
        },
        server: function(e, t) {
            var n = new Date(i(t || Date.now())),
                r = n.getTime() + 6e4 * n.getTimezoneOffset();
            return new Date(r + 36e5 * e)
        },
        nameOfMonth: function(e) {
            return o[e]
        },
        nameOfDay: function(e) {
            return a[e]
        },
        relativeToToday: function(e, t) {
            if (!e || "number" == typeof e && e < 1) throw "'timestamp' parameter '" + e + "' is invalid";
            if (t = new Date(i(t || Date.now())), e = new Date(i(e || t)), e.toDateString() !== t.toDateString()) return null;
            var n = e.toTimeString(),
                r = n.split(" ")[0],
                o = parseInt(r.split(":")[0]) >= 12 ? "pm" : "am",
                a = parseInt(r.split(":")[0]) % 12;
            0 === a && (a = 12);
            var s = r.split(":")[1],
                c = /\((.+)\)/.exec(n),
                l = "";
            if (c && c[1]) {
                l = {
                    "Eastern Daylight Time": "EDT",
                    "Eastern Standard Time": "EST",
                    "Central Daylight Time": "CDT",
                    "Central Standard Time": "CST",
                    "Mountain Daylight Time": "MDT",
                    "Mountain Standard Time": "MST",
                    "Pacific Daylight Time": "PDT",
                    "Pacific Standard Time": "PST"
                } [c[1]] || c[1].split(" ")[0]
            }
            return ("Today at " + a + ":" + s + o + " " + l).trim()
        },
        combinedRelative: function(e, t) {
            return t = new Date(i(t || Date.now())), Math.floor((t - e) / 1e3 / 60) <= 120 ? this.relative(e, t) : this.relativeToToday(e, t)
        }
    }
}, function(e, t, n) {
    "use strict";
    var i = n(3),
        r = n(1),
        o = n.n(r),
        a = n(0),
        s = n.n(a),
        c = n(2),
        l = n(17),
        u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        d = c.a.extend({
            $el: null,
            dialog: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this._open(e, t)
            },
            overlay: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this._open(e, c.a.extend(t, {
                    fixedSize: !0
                }))
            },
            parse: function(e) {
                var t = this,
                    n = "object" === ("undefined" === typeof e ? "undefined" : u(e));
                return n && e.iframe ? '<iframe src="' + e.iframe + '" width="100%" height="100%"></iframe>' : n && e.ajax ? (s.a.ajax({
                    url: e.ajax,
                    success: function(e) {
                        t.$el && t.$el.find("#modal-ajax").html(e), i.b.run()
                    },
                    error: function() {
                        t.close()
                    }
                }), '<div id="modal-ajax"><div class="p-modal__loading">Loading...</div></div>') : e || ""
            },
            _open: function(e, t) {
                var n = this;
                return this.close(), this.$el = s()('<div class="p-modal__window" id="modal-window"></div>').addClass(t && t.fixedSize ? "fixed-size" : "auto-size").addClass(t && t.className ? t.className : "").html(this.parse(e)).append('<button class="p-modal__close" id="modal-close">\xd7</button>'), this.trigger("before:open"), setTimeout(function() {
                    var e = s()("body");
                    e.append(n.$el).addClass("modal-active").off("click.modal").on("click.modal", function(e) {
                        var t = s()(e.target);
                        t.closest(n.$el).length && !t.is("#modal-close") || (e.stopImmediatePropagation(), n.close())
                    }), setTimeout(function() {
                        e.addClass("modal-open")
                    }, 0), n.trigger("open")
                }, 0), this
            },
            close: function() {
                var e = this;
                if (this.$el) {
                    this.trigger("before:close");
                    var t = s()("body").off("click.modal"),
                        n = function() {
                            e.$el.remove(), e.$el = null, t.removeClass("modal-active modal-open p-modal__loading"), e.trigger("close")
                        };
                    return l.a && "fixed" === t.css("position") ? (this.$el.one(l.a, n), t.removeClass("modal-open")) : n(), this
                }
            },
            ajaxForms: function() {
                var e = this,
                    t = s.a.Deferred();
                return this.$el && this.$el.on("submit", function(n) {
                    n.preventDefault();
                    var i = s()(n.target);
                    s.a.ajax({
                        url: i.attr("action"),
                        data: i.serialize(),
                        method: "post",
                        success: function() {
                            e.close(), t.resolve()
                        },
                        error: function() {
                            t.reject()
                        }
                    })
                }), t.promise()
            }
        }, o.a.Events);
    t.a = d
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return new o(e)
    }

    function r(e) {
        for (var t; !t && e && e.getAttribute;) {
            if (t = e.getAttribute("data-analytics-placement")) return t;
            e = e.parentNode
        }
        return "other"
    }

    function o(e) {
        if (!a) throw "volume is not installed";
        this.el = a.src(e)
    }
    var a, s = n(19),
        c = n.n(s),
        l = n(4),
        u = n(8),
        d = n(7),
        f = n(2);
    i.embedHost = window.volume_embed_host || "https://volume.vox-cdn.com", i.selectAllEmbeds = function() {
        return document.querySelectorAll('iframe[src^="' + this.embedHost + '/embed"]')
    }, i.install = function(e) {
        if (e && (this.embedHost = e), l.e.get("privacy")) return this;
        this.log("install " + this.embedHost);
        var t, n = this.selectAllEmbeds(),
            r = document.querySelectorAll(".volume-video");
        for (a ? a.host = this.embedHost : a = c.a.create("volume", this.embedHost).on("analytics", function(e, t) {
                i.reportEvent(t)
            }).on("pauseOthers", function(e, t) {
                i.postToAll("pause", null, e.source)
            }).on("host", function(e, t) {
                return {
                    url: location.href,
                    origin: location.origin,
                    referrer: document.referrer,
                    title: document.title,
                    api: !0
                }
            }).listen(), t = 0; t < n.length; t += 1) this.trackView(n[t]);
        for (t = 0; t < r.length; t += 1) this.embedVideo(r[t]);
        return this
    }, i.uninstall = function() {
        a && (a.dispose(), a = null)
    }, i.reportEvent = function(e) {
        u.b.event(e), this.log(e)
    }, i.log = function(e) {
        window.volume_debug && console.log("volume: ", e)
    }, i.embedVideo = function(e, t) {
        var n = this,
            o = e.getAttribute("data-volume-uuid");
        if (o) {
            t = f.a.extend({
                autoplay: e.getAttribute("data-volume-autoplay"),
                autoplay_with_sound: e.getAttribute("data-volume-autoplay-with-sound"),
                placement: e.getAttribute("data-volume-placement"),
                player_type: e.getAttribute("data-volume-player-choice"),
                start_time: e.getAttribute("data-volume-start-time"),
                mask_text: e.getAttribute("data-mask-text"),
                tracking: r(e)
            }, t || {});
            var a = "data-volume-trigger",
                s = e.getAttribute(a) || "",
                c = /^(true|1)$/.test(t.autoplay);
            if (e.setAttribute(a, "none"), /^(lazy|click|embed|none)$/.test(s) || (s = "lazy"), this.log("embedVideo [" + s + "] " + o + "-" + t.tracking), "lazy" === s) {
                var l = c ? 0 : -.5;
                d.a.trackElement(e, function() {
                    e.setAttribute(a, "embed"), n.embedVideo(e)
                }, l)
            } else if ("click" === s) e.addEventListener("click", function t(n) {
                n.preventDefault(), e.removeEventListener("click", t), e.setAttribute(a, "embed"), i.embedVideo(e, {
                    autoplay: !0
                })
            }), this.trackView(e, t.tracking);
            else if ("embed" === s) {
                var u = Object.keys(t).filter(function(e) {
                    return !!t[e]
                }).map(function(e) {
                    return e + "=" + t[e]
                });
                e.className = e.className.replace(/volume-video|p-scalable-video/g, "") + " p-scalable-video", e.innerHTML = '<iframe src="' + this.embedHost + "/embed/" + o + "?" + u.join("&") + '" frameborder="0" allow="autoplay" allowfullscreen></iframe>' + this.contentMask(t.mask_text), this.trackView(e, t.tracking)
            }
        }
    }, i.trackView = function(e, t) {
        var n = this._sku = this._sku || {};
        t = t || r(e);
        var o = /embed\/([^\/\?]+)/,
            a = function() {
                var t = /iframe/i.test(e.tagName) ? e : e.querySelector("iframe");
                return t && o.test(t.src) ? t : null
            },
            s = a(),
            c = s ? s.src.match(o)[1] : e.getAttribute("data-volume-uuid"),
            l = c + "-" + t;
        this.log("trackView " + l), c && !n[l] && (n[l] = !0, this.log("[tracking] " + l), d.a.trackElement(e, function() {
            s = s || a(), s ? (i.log("[view] " + l), setTimeout(function() {
                i(s).request("view", document.title)
            }, 100)) : (i.log("[view fallback] " + l), i.reportEvent({
                eventCategory: "video",
                eventAction: ["volume", "view", t].join(":"),
                eventLabel: [document.title, e.getAttribute("data-volume-id") || c].join(" | "),
                nonInteraction: !0
            }))
        }, .1))
    }, i.postToAll = function(e, t, n) {
        for (var i = this.selectAllEmbeds(), r = 0; r < i.length; r++) {
            var o = a.src(i[r]);
            o !== n && a.post(o, e, t)
        }
    }, i.stopAll = function() {
        this.postToAll("pause")
    }, i.contentMask = function(e) {
        return e ? '<div class="c-image-mask" onclick="this.parentNode.removeChild(this);return false;"><div>' + e + "</div><b>Tap to display</b></div>" : ""
    }, o.prototype = {
        play: function(e) {
            return e && e.request ? this.request("play") : this.post("play")
        },
        pause: function(e) {
            return e && e.request ? this.request("pause") : this.post("pause")
        },
        post: function(e, t) {
            return a && a.post(this.el, e, t), this
        },
        request: function(e, t, n) {
            return a && a.request(this.el, e, t, n), this
        }
    }, t.a = i
}, function(e, t, n) {
    "use strict";
    var i = n(0),
        r = n.n(i),
        o = n(2),
        a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        s = {
            ajaxOptions: {},
            urls: {},
            urlFor: function(e) {
                var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = this.urls[e];
                if (i && (i = i.replace(/:([^\d\/\.]+)/g, function(e, n) {
                        return "function" === typeof t.get ? t.get(n) : t[n]
                    }), n)) {
                    var r = /^(https?:)?\/\//;
                    i = i.replace(r, "https://"), r.test(i) || (i = location.origin.replace(r, "https://") + "/" + i.replace(/^\//, ""))
                }
                return i
            },
            ajax: function(e, t) {
                var n = this,
                    i = r.a.Deferred(),
                    s = o.a.extend({
                        method: "get",
                        dataType: "json",
                        timeout: 15e3
                    }, this.ajaxOptions, t || {});
                s.url = s.url || this.urlFor(e, s.https), "object" !== a(s.data) || "post" !== String(s.method).toLowerCase() || s.contentType || (s.data = JSON.stringify(s.data), s.contentType = "application/json", s.processData = !1), s.success = function(e, r, o) {
                    t && "function" === typeof t.success && t.success.call(n, e, o), i.resolve(e)
                }, s.error = function(e, r, o) {
                    o = e.responseJSON && e.responseJSON.message || o, t && "function" === typeof t.error && t.error.call(n, o, e), i.reject(o)
                };
                var c = r.a.ajax(s),
                    l = i.promise();
                return l.cancel = function() {
                    "pending" === c.state() && c.abort()
                }, l
            },
            ajaxStub: function(e) {
                return r.a.Deferred()[e.success ? "resolve" : "reject"](e.message).promise()
            },
            extend: function(e) {
                for (var t in this) !this.hasOwnProperty(t) || t in e || "extend" === t || (e[t] = this[t]);
                return e
            }
        };
    t.a = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(66),
        r = (n.n(i), n(3)),
        o = n(26);
    r.b.registerComponent("site/dynamic_size_image", function(e, t) {
        o.a.addEl(e, t)
    }, {
        priority: r.b.HIGH
    }), window.chorus_lazy_assets = function() {
        for (var e = document.querySelectorAll(".vox-lazy-load"), t = 0; t < e.length; t++) {
            var n = e[t];
            o.a.addEl(n, {
                image_id: n.getAttribute("data-imgkey") || null,
                asset_id: n.getAttribute("data-chorus-asset-id") || null,
                ratio: n.getAttribute("data-ratio") || "*"
            })
        }
    }, window.DynamicImages = o.a, window.chorus_lazy_assets()
}, function(e, t, n) {
    "use strict";

    function i(e) {
        for (var t in e)
            if (document.body && "undefined" != typeof document.body.style[t]) return e[t]
    }
    n.d(t, "a", function() {
        return r
    });
    var r = i({
        transition: "transitionend",
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend"
    });
    i({
        animation: "animationend",
        WebkitAnimation: "webkitAnimationEnd",
        msAnimation: "MSAnimationEnd",
        OAnimation: "oAnimationEnd"
    })
}, function(e, t, n) {
    "use strict";
    var i = n(1),
        r = n.n(i),
        o = n(15),
        a = n(2),
        s = r.a.Model.extend(o.a.extend({
            defaults: {
                comment_count: null,
                comment_unreads: 0,
                id: null,
                recommended_count: null,
                recommended_by_user: !1,
                url: null
            },
            ajaxOptions: {
                method: "post"
            },
            urls: {
                rec: "/flags/recommend/:id.json",
                unrec: "/flags/unflag/:id.json"
            },
            reload: function() {
                this._req = !1, this.collection.load()
            },
            isRecommendedByUser: function() {
                return !!this.get("recommended_by_user")
            },
            recommend: function(e) {
                var t = this,
                    n = this.isRecommendedByUser(),
                    i = this.get("recommended_count");
                return e = void 0 === e ? !n : e, n === e ? this._rec || this.ajaxStub({
                    success: !0
                }) : (this._rec && this._rec.cancel(), this.set({
                    recommended_count: Math.max(0, i + (e ? 1 : -1)),
                    recommended_by_user: e
                }), this._rec = this.ajax(e ? "rec" : "unrec", {
                    error: function() {
                        t.set({
                            recommended_count: i,
                            recommended_by_user: n
                        })
                    }
                }), this._rec)
            }
        })),
        c = r.a.Collection.extend({
            model: s,
            endpoint: "/services/entry_stats?id=",
            initialize: function() {
                this.listenTo(this, "add", this.load)
            },
            load: a.a.debounce(function() {
                for (var e = this.models.filter(function(e) {
                        return !e._req
                    }).map(function(e) {
                        return e._req = !0, e.id
                    }).sort(function(e, t) {
                        return Number(t) - Number(e)
                    }), t = e.length - 1; t >= 0; t -= 1) e[t] !== e[t - 1] && e[t] || e.splice(t, 1);
                e.length && (this.url = this.endpoint + e.join(","), this.fetch())
            }, 250),
            parse: function(e) {
                return e = e.reduce(function(e, t) {
                    return e[t.id] = t, e
                }, {}), this.models.map(function(t) {
                    return a.a.extend(t.toJSON(), e[t.id] || {})
                })
            }
        });
    t.a = new c
}, function(e, t) {
    ! function(t, n) {
        var i = {
            debug: !1,
            create: function(e, i) {
                return n(this, e, i, t)
            },
            isInIframe: function() {
                try {
                    return t.parent && t.self !== t.top
                } catch (e) {
                    return !0
                }
            },
            error: function(e) {
                if (this.debug) throw e
            }
        };
        "object" === typeof e && e.exports ? e.exports = i : t.IframeClient = i
    }(window, function(e, t, n, i) {
        function r() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        var o = r() + r() + "-" + r() + "-" + r() + "-" + r() + "-" + r() + r() + r(),
            a = t || "xframe",
            s = 200,
            c = [],
            l = {},
            u = {},
            d = 0,
            f = null,
            h = null;
        return {
            host: n || "*",
            get id() {
                return o
            },
            src: function(e) {
                return "string" === typeof e && (e = document.querySelector(e)), e && e instanceof Element && e.contentWindow && (e = e.contentWindow), e && "function" === typeof e.postMessage ? e : null
            },
            post: function(t, n, i) {
                if (!(t = this.src(t)) || !n) return e.error("invalid post");
                var r = "string" === typeof n ? {
                    message: n
                } : n;
                if (void 0 !== i && (r.value = i), r.message) {
                    r["@app"] = a;
                    try {
                        t.postMessage(JSON.stringify(r), this.host)
                    } catch (t) {
                        e.error(t)
                    }
                }
            },
            request: function(t, n, i, r, a) {
                function c() {
                    var e = !1;
                    for (var t in l)
                        if (l.hasOwnProperty(t)) {
                            var n = l[t];
                            n.attempts++ < n.timeout / s ? (u.post(n.src, n.data), e = !0) : u.end(t, new Error("request timeout"))
                        } f = e ? setTimeout(c, s) : null
                }
                if (!(t = this.src(t)) || !n) return e.error("invalid request");
                var u = this,
                    h = o + "-" + ("0000" + d++).slice(-4),
                    p = l[h] = {
                        timeout: a || 15e3,
                        attempts: 0,
                        src: t,
                        cb: r,
                        data: {
                            message: n,
                            value: i,
                            id: h
                        }
                    };
                return f ? this.post(t, p.data) : c(), h
            },
            end: function(e, t) {
                var n = e.id || e,
                    i = t && t.abort;
                if (l.hasOwnProperty(n)) {
                    var r = l[n];
                    delete l[n], i || "function" !== typeof r.cb || r.cb(t || null, e.value)
                }
            },
            on: function(e, t, n) {
                return c.push({
                    message: e,
                    fn: t,
                    ctx: n
                }), this
            },
            listen: function() {
                function e(e, t) {
                    for (var n, i = 0; i < c.length; i++) {
                        var r = c[i];
                        r.message === t.message && (n = r.fn.call(r.ctx, e, t.value))
                    }
                    return n
                }
                if (!h) {
                    var t = this;
                    h = function(n) {
                        var i, r = "*" === t.host || String(n.origin).indexOf(t.host) >= 0;
                        if (r && /^\{.*\}$/.test(n.data)) try {
                            i = JSON.parse(n.data)
                        } catch (e) {
                            i = null
                        }
                        if (r && i && i["@app"] === a)
                            if (i.id) {
                                var o = "@res" === i.message;
                                o && l.hasOwnProperty(i.id) ? t.end(i) : o || u.hasOwnProperty(i.id) || (u[i.id] = !0, t.post(n.source, {
                                    message: "@res",
                                    value: e(n, i) || "success",
                                    id: i.id
                                }))
                            } else e(n, i)
                    }, i.addEventListener("message", h)
                }
                return this
            },
            stopListening: function() {
                return h && (i.removeEventListener("message", h), h = null), this
            },
            dispose: function() {
                clearInterval(f), this.stopListening()
            }
        }
    })
}, function(e, t, n) {
    "use strict";

    function i(e) {
        n.e(0).then(n.bind(null, 92)).then(function(t) {
            return e(t.default)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(41),
        o = (n.n(r), n(6)),
        a = (n.n(o), n(3)),
        s = !1;
    a.b.registerComponent("apps/auth", function(e, t) {
        i(function(n) {
            s || (s = !0, new n(e, t))
        })
    }, {
        open: function(e) {
            i(function(t) {
                return t.modal(e)
            })
        }
    })
}, function(e, t, n) {
    "use strict";
    var i, r = n(0),
        o = n.n(r),
        a = n(17),
        s = n(13),
        c = {
            INFO: "info",
            SUCCESS: "success",
            WARNING: "warning",
            ERROR: "error",
            HAT: "hat",
            $el: null,
            notify: function(e, t, n) {
                return this._open(e, null, t, n)
            },
            hat: function(e, t, n) {
                return this._open(e, this.HAT, t, n)
            },
            info: function(e, t, n) {
                return this._open(e, this.INFO, t, n)
            },
            success: function(e, t, n) {
                return this._open(e, this.SUCCESS, t, n)
            },
            warning: function(e, t, n) {
                return this._open(e, this.WARNING, t, n)
            },
            error: function(e, t, n) {
                return this._open(e, this.ERROR, t, n)
            },
            parse: function(e) {
                var t = e.trim().match(/^<(?:div|span)[^>]*class=['"]([\s\w-]+)['"][^>]*>([\S\s]+)<\/(?:div|span)>$/);
                return {
                    message: t ? t[2] : e,
                    classes: t ? t[1] : ""
                }
            },
            _open: function(e, t) {
                var n = this,
                    r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                if (e) {
                    var c = this.parse(e);
                    if (!t) {
                        if (/__modal/.test(c.classes)) return s.a.dialog(c.message);
                        t = /__error/.test(c.classes) ? this.ERROR : /__hat/.test(c.classes) ? this.HAT : this.INFO
                    }
                    if (null === this.$el) {
                        var l = o()("body > *:first-child").first();
                        [".c-global-header", ".c-masthead"].forEach(function(e) {
                            var t = o()(e);
                            t.length > 0 && (l = t.first())
                        }), this.$el = o()('<div id="chorus_notifiations"/>'), this.$el.insertBefore(l)
                    }
                    var u = o()('<div class="p-notice" id="notice"></div>').html(c.message).append(a ? '<button class="p-notice-dismiss" id="notice-dismiss">\xd7</button>' : "").addClass("p-notice-" + t).on("click", "#notice-dismiss", function() {
                        n.close(u)
                    }).appendTo(this.$el);
                    return setTimeout(function() {
                        u.css("top", "0")
                    }, 0), r && a && (clearTimeout(i), i = setTimeout(function() {
                        n.close(u)
                    }, 2e3 + 25 * e.length)), u
                }
            },
            close: function(e) {
                return e ? a.a ? e.one(a.a, function() {
                    e.remove()
                }).css("top", "") : e.remove() : this.$el && (a.a ? this.$el.children().one(a.a, function(e) {
                    o()(e.target).remove()
                }).css("top", "") : this.$el.empty()), this
            }
        };
    t.a = c
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" === typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(45), n(62), n(3)),
        r = n(1),
        o = n.n(r),
        a = n(0),
        s = n.n(a),
        c = [".c-read-more__intro"],
        l = o.a.View.extend({
            initialize: function(e) {
                var t = e.data;
                s()(c).length && t.url && s()(c).each(function() {
                    s()(this).html("Read more from").append('<img src="' + t.url + '" alt="' + t.alt + '" />')
                })
            }
        }),
        u = l;
    i.b.registerComponent("site/disclaimer/header", function(e, t) {
        new u({
            el: e,
            data: t
        })
    })
}, function(e, t, n) {
    "use strict";
    t.a = {
        hasLightBackground: function(e, t) {
            var n = this.closestBackgroundColorToElement(e, t);
            return this.brightness(n) > 128
        },
        closestBackgroundColorToElement: function(e, t) {
            for (var n; e instanceof Element && (n = this.parseRGBA(window.getComputedStyle(e, t).backgroundColor), 0 === n.a);) n = t = void 0, e = e.parentNode;
            return n || this.parseRGBA("#FFFFFF")
        },
        parseRGBA: function(e) {
            var t = /^rgba?\(([\d\.\s]+),([\d\.\s]+),([\d\.\s]+)(?:,([\d\.\s]+))?\)$/i,
                n = [];
            if ("transparent" === e) n = [0, 0, 0, 0, 0];
            else if (t.test(e)) n = e.match(t);
            else {
                var i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                    r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                i.test(e) && (e = e.replace(i, function(e, t, n, i) {
                    return t + t + n + n + i + i
                })), r.test(e) && (n = (e.match(r) || []).map(function(e, t) {
                    return t ? parseInt(e, 16) : e
                }))
            }
            return {
                r: parseFloat(n[1] || 0),
                g: parseFloat(n[2] || 0),
                b: parseFloat(n[3] || 0),
                a: parseFloat(0 === n[4] ? 0 : n[4] || 1)
            }
        },
        brightness: function(e) {
            return "string" === typeof e && (e = this.parseRGBA(e)), (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
        }
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        o = o || new MutationObserver(function(e) {
            e.forEach(function(e) {
                r(e.target.querySelector("img.native-ad-logo"))
            })
        }), o.observe(e, {
            attributes: !0,
            childList: !0,
            characterData: !0
        })
    }

    function r(e) {
        if (e) {
            var t = e.offsetWidth;
            if (t < 120) {
                var n = 30 / t,
                    i = 12 + 18 * n;
                e.style.height = Math.round(Math.min(i, 30)) + "px"
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o, a = n(63),
        s = (n.n(a), n(3)),
        c = n(24);
    s.b.registerComponent("site/entry_sponsorship", function(e, t) {
        if (r(e.querySelector("img")), "cover" === t.placement && c.a.hasLightBackground(e)) {
            var n = e.querySelector(".c-entry-sponsorship--logo");
            n.src = n.getAttribute("data-contrast") || n.src
        }
    }), s.b.registerComponent("site/entry_sponsorship/native_ad", function(e) {
        var t = e.querySelector("img.native-ad-logo");
        t ? t.onload = function() {
            r(t)
        } : i(e)
    })
}, function(e, t, n) {
    "use strict";
    var i = n(1),
        r = n.n(i),
        o = n(5),
        a = n(7),
        s = n(2),
        c = 0,
        l = r.a.Model.extend({
            el: null,
            defaults: {
                image_id: null,
                asset_id: null,
                lazy: !0,
                lazy_ready: !1,
                placement_id: "default",
                ratio: "*",
                variation: 1,
                url: null,
                format: "jpg",
                height: null,
                width: null
            },
            initialize: function(e, t) {
                var n = this;
                this.el = t && t.el, this.set("id", c++, {
                    silent: !0
                }), this.el && this.isLazy() && (this.el.className += " lazy-image", a.a.trackElement(this.el, function() {
                    n.set("lazy_ready", !0), n.render()
                }, -.5)), this.listenTo(this, "change:url", this.render), this.listenTo(this, "change:image_id change:asset_id", this.reload)
            },
            render: function() {
                var e = this.get("url");
                this.el && e && (!this.isLazy() || this.get("lazy_ready")) && (0 === this.el.offsetWidth && 0 === this.el.offsetHeight || (this.isImage() ? this.el.src = e : this.el.style.backgroundImage = 'url("' + e + '")', this.isLazy() && (this.el.className += " lazy-loaded")))
            },
            reload: function() {
                this.el && (this.el.className = this.el.className.replace(/\s?\blazy-loaded\b/, "")), this.requestKey = null, this.collection.load()
            },
            aspectRatio: function() {
                var e = this.get("ratio");
                switch (e) {
                    case "cinema":
                        return 16 / 9;
                    case "portrait":
                        return .75;
                    case "standard":
                        return 1.5;
                    case "*":
                        return 1
                }
                return "number" === typeof e ? e : String(e).indexOf(":") > 0 ? (e = e.split(":"), Number(e[0]) / Number(e[1])) : parseFloat(e)
            },
            width: function() {
                var e = window.devicePixelRatio || 1;
                return (this.get("width") || this.el.offsetWidth || arguments[0] || this.height(440) * this.aspectRatio()) * e
            },
            height: function() {
                var e = window.devicePixelRatio || 1;
                return (this.get("height") || this.el.offsetHeight || arguments[0] || this.width(780) / this.aspectRatio()) * e
            },
            isImage: function() {
                return !(!this.el || "img" !== this.el.tagName.toLowerCase())
            },
            isLazy: function() {
                return !!this.get("lazy")
            },
            setRequestKey: function(e) {
                return this.requestKey || (e && this.set({
                    format: e
                }), this.requestKey = this._imageKey() || this._assetKey()), this.requestKey
            },
            _imageKey: function() {
                var e = this.get("image_id");
                return e && [e, this.get("ratio"), this.get("variation"), this.width() + "x" + this.height(), this.get("format")].join(":")
            },
            _assetKey: function() {
                var e = this.get("asset_id");
                return e && [e, this.width(), this.height()].join(":")
            }
        }),
        u = r.a.Collection.extend({
            model: l,
            initialize: function() {
                this.listenTo(this, "add", this.load), o.a.imageFormats()
            },
            endpoint: function(e, t) {
                return "/services/optimally_sized_images?imgkeys=" + e.join(",") + "&asset_keys=" + t.join(",")
            },
            load: s.a.debounce(function() {
                var e = this;
                o.a.imageFormats().then(function(t) {
                    for (var n = e.models.filter(function(e) {
                            return !e.requestKey
                        }).map(function(e) {
                            return e.setRequestKey(t.preferred)
                        }).sort(), i = n.length - 1; i >= 0; i -= 1) n[i] !== n[i - 1] && n[i] || n.splice(i, 1);
                    if (n.length) {
                        var r = n.filter(function(e) {
                                return e.indexOf("x") > 0
                            }),
                            o = n.filter(function(e) {
                                return e.indexOf("x") < 0
                            });
                        e.url = e.endpoint(r, o), e.fetch()
                    }
                })
            }, 250),
            parse: function(e) {
                var t = e.urls || {};
                return this.models.map(function(e) {
                    return {
                        id: e.id,
                        url: t[e.requestKey] || e.get("url")
                    }
                })
            },
            addRect: function(e, t, n) {
                return n.width = e, n.height = t, this.add(n)
            },
            addEl: function(e, t) {
                if (e instanceof r.a.$ && (e = e[0]), !(e instanceof Element)) throw "An element is required.";
                var n = this.findByElement(e);
                return n && n.set(t), n || this.add(t, {
                    el: e
                })
            },
            findByElement: function(e) {
                for (var t = 0; t < this.length; t += 1)
                    if (this.models[t].el === e) return this.models[t];
                return null
            }
        });
    t.a = new u
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(46), n(47), n(0)),
        r = n.n(i),
        o = n(2),
        a = n(3),
        s = n(59);
    r.a.fn.playGIF = function(e) {
        var t = r.a.extend({
                on: "touchstart mouseenter",
                off: "touchstart mouseleave",
                autoResize: !1,
                enable: !0,
                circleBackgroundColor: "rgba(255,255,255,0.9)",
                circleTextColor: "#4C4E4D",
                gifText: "GIF",
                removeAnchor: !0
            }, e),
            n = function(e, n, i) {
                n = Math.floor(n), i = Math.floor(i);
                e.fillStyle = t.circleBackgroundColor, e.beginPath(), e.arc(n, i, 35, 0, 2 * Math.PI, !0), e.closePath(), e.fill(), e.fillStyle = t.circleTextColor, e.font = "15px Helvetica,sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText(t.gifText, n, i)
            },
            i = function(e, n) {
                n.off().on(t.off, function() {
                    o(e, n)
                });
                var i = n.attr("src");
                n.attr("src", "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), n.css({
                    width: e.attr("width"),
                    height: e.attr("height")
                }), setTimeout(function() {
                    n.attr("src", i)
                }, 0), e.replaceWith(n)
            },
            o = function(e, n) {
                e.off().on(t.on, function() {
                    i(e, n)
                }), n.replaceWith(e)
            };
        return this.each(function() {
            if (!1 !== t.enable) {
                var e = r()(this);
                if (!/img/i.test(this.tagName) || !/\.gif$/i.test(this.src)) return !0;
                var o = document.createElement("canvas");
                if ("undefined" === typeof o.getContext) return !0;
                var a = o.getContext("2d"),
                    s = new Image;
                s.onload = function() {
                    var c = o.width = e.width(),
                        l = o.height = e.height();
                    a.drawImage(s, 0, 0, c, l), s = null;
                    var u = r()(o);
                    if (!0 === t.autoResize) {
                        o.setAttribute("data-src", e.attr("src")), o.setAttribute("class", "gif");
                        var d = r()('<span class="faux-image">');
                        d.css({
                            float: e.css("float"),
                            margin: e.css("margin"),
                            padding: e.css("padding"),
                            "max-width": "100%",
                            position: "relative",
                            display: "block",
                            height: o.height
                        }), u.css({
                            position: "absolute",
                            top: 0,
                            left: 0
                        }), u = d.append(u)
                    } else u.css({
                        float: e.css("float"),
                        margin: e.css("margin"),
                        padding: e.css("padding"),
                        display: e.css("display")
                    });
                    e.replaceWith(u);
                    var f = u.parent();
                    f.is("p") || "none" === f.css("max-width") && "none" === f.css("max-height") || (c = f.width(), l = f.height()), t.removeAnchor && f.is("a") && /\.gif$/i.test(f.attr("href")) && f.replaceWith(u), c > 150 && l > 150 && n(a, c / 2, l / 2), u.on(t.on, function() {
                        i(u, e)
                    })
                }, s.src = e.attr("src")
            }
        })
    };
    var c = n(28),
        l = {
            embedSanitizer: function(e) {
                var t = ['iframe[src*="youtube.com"]', 'iframe[src*="vine.co"]', 'iframe[src*="ooyala.com"]', 'iframe[src*="gfycat.com"]', 'iframe[src*="giphy.com"]', 'iframe[src*="theplatform.com"]', 'iframe[src*="twitch.tv"]', 'div[id*="ooyalaPlayer"]', 'iframe[src*="watchable.com"]'].join(", ");
                e.find(t).each(function(e, t) {
                    var n = r()(t);
                    n.find("object, embed, video").attr("width", "100%").attr("height", "100%"), n.find(".OoyalaHtml5VideoPlayer, .oo_promoImag").css({
                        width: "100%",
                        height: "100%"
                    }), n.find("table").addBack().removeAttr("width height style"), n.parents(".p-scalable-video").length < 1 && ("0px" !== n.parent().css("padding-bottom") && (n.parent().css("padding-bottom", 0), n.parent().css("height", "auto")), n.wrap('<div class="p-scalable-video"></div>'))
                });
                var n = ['iframe[src*="mlb.com"][data-aspect][data-src]'].join(", ");
                e.find(n).each(function(e, t) {
                    var n = r()(t),
                        i = n.width(),
                        o = Math.round(i / parseFloat(n.attr("data-aspect")));
                    n.attr("src", n.attr("data-src") + "width=" + i + "&height=" + o).css({
                        height: o + "px"
                    })
                });
                var i = [".fb-video", 'iframe[src*="facebook.com"]'].join(", ");
                e.find(i).each(function(e, t) {
                    var n = r()(t);
                    n.parents(".c-video-embed").removeClass("c-video-embed").addClass("c-video-embed--self-sizing"), n.parents(".p-modal__window").css("max-width", .75 * window.screen.height + "px"), n.parents(".p-scalable-video").children().unwrap()
                });
                var o = [".instagram-media", 'iframe[src*="imgur.com"]', 'iframe[src*="embed.tumblr.com"]'].join(", ");
                e.find(o).each(function(e, t) {
                    r()(t).css({
                        marginLeft: "auto",
                        marginRight: "auto",
                        position: "relative"
                    })
                })
            },
            hrIllo: function(e) {
                var t = r()("#svg_hr_illustration").html();
                t && e.find("hr.p-entry-hr").each(function(e, n) {
                    var i = r()(n);
                    i.replaceWith('<div class="p-hr-illo"><span class="p-hr-illo__box">' + t + "</span>" + i[0].outerHTML + "</div>")
                })
            },
            dropCap: function(e) {
                e.andSelf().find(".p--has-dropcap").each(function(e, t) {
                    var n = r()(t);
                    if ("createTreeWalker" in document) {
                        for (var i, o = document.createTreeWalker(n[0], NodeFilter.SHOW_TEXT, null, !1), a = n[0].querySelector(".p-anthem-selection"), s = []; i = o.nextNode();) i.nodeValue.trim().length > 0 && (a ? i.parentNode.classList.contains(".p-anthem-selection") || null !== function(e, t) {
                            for (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector); e && e !== document; e = e.parentNode)
                                if (e.matches(t)) return e;
                            return null
                        }(i.parentNode, ".p-anthem-selection") || s.push(i) : s.push(i));
                        if (s.length) {
                            var c = s[0],
                                l = c.nodeValue.replace(/^\s+/, ""),
                                u = l.split(" ")[0],
                                d = l.substring(u.length),
                                f = new RegExp("^[^a-zA-Z\xc0-\u017f]*([a-zA-Z\xc0-\u017f])[^a-zA-Z\xc0-\u017f]*"),
                                h = u.match(f);
                            if (h.length) {
                                var p = h[0],
                                    g = h[1],
                                    m = "word-first--" + e,
                                    v = r()('<span aria-labelledby="' + m + '" role="text"></span>'),
                                    y = r()('<span aria-hidden="true" role="presentation"><span class="dropcap">' + p + "</span>" + u.substring(p.length) + "</span>"),
                                    b = r()('<span id="' + m + '" class="squelch">' + u + "</span>");
                                c.nodeValue = d, v.append(y, b), c.parentNode.insertBefore(v[0], c), n.addClass(" drop-letter-" + g.toLowerCase())
                            }
                        }
                    }
                })
            },
            captionSpacingNormalizer: function(e) {
                e.find(".caption").each(function(e, t) {
                    var n = r()(t);
                    n.prevUntil("figure, img, .p-fullbleed-block, .wide-image-block, .c-wide-block, div[data-volume-uuid], .p-scalable-video", "p:empty").remove();
                    var i = n.prev(".e-image").find(".e-image__meta");
                    i.length > 0 && (i.prepend("<figcaption>" + n.text() + "</figcaption>"), n.remove()), n.prev(".p-fullbleed-block, .wide-image-block, .c-wide-block").find(".e-image").length > 0 && n.addClass("offset")
                })
            },
            imageEnlarge: function(e) {
                var t = e.find(".e-image__image");
                t.length < 1 || t.each(function(e, t) {
                    a.b.get("site/image_enlarge").build(r()(t))
                })
            },
            dataTables: function(e) {
                var t = e.find("table:not([class]), .sbn-boxscore-table").addClass("p-data-table");
                e.find("table.zebra").addClass("p-striped-table");
                var n = e.width();
                t.each(function(e, t) {
                    var i = r()(t);
                    r()(t).width() > n && i.wrap('<div class="p-overflow-wrapper"></div>')
                })
            },
            ratingsSnippet: function(e) {
                e.find(".ratingbox .rating-number").each(function(e, t) {
                    r()(t).html(r()("<span>").width(25 * r()(t).text()))
                })
            },
            shareQuote: function(e) {
                var t = r()('meta[property="og:url"]').attr("content");
                e.find(".s-share-quote").each(function() {
                    var e = encodeURIComponent(r()(this).find(".s-share-quote__text").html()),
                        n = c.a.formatSharer(t, "facebook"),
                        i = c.a.formatSharer(t, "twitter", {
                            text: e
                        });
                    r()(this).append('<ul class="c-social-buttons c-social-buttons--bright">\n        <li class="c-social-buttons__item"><a class="c-social-buttons__item-link c-social-buttons__twitter" href="' + i + '" data-analytics-social="twitter"><svg class="p-svg-icon c-social-buttons__svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-twitter"></use></svg><span class="c-social-buttons__text">tweet</span></a></li>\n        <li class="c-social-buttons__item"><a class="c-social-buttons__item-link c-social-buttons__facebook" href="' + n + '" data-analytics-social="facebook"><svg class="p-svg-icon c-social-buttons__svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-facebook"></use></svg><span class="c-social-buttons__text">share</span></a></li>\n      </ul>')
                })
            },
            snippetAnimations: function(e) {
                var t = e.find("[data-animated]");
                t.length < 1 || t.each(function(e, t) {
                    a.b.get("site/snippet_animation").build(t)
                })
            },
            listicleSharing: function(e) {
                if (!(e.find(".js-social-item").length < 1)) {
                    var t = r()('meta[property="og:url"]').attr("content");
                    r()("body").on("click", ".js-social-item a[data-analytics-social]", function(e) {
                        e.preventDefault();
                        var n = r()(this).closest(".js-social-item").attr("id"),
                            i = t + "#" + n,
                            o = r()(this).attr("data-analytics-social");
                        c.a.share(i, o)
                    })
                }
            },
            refreshTwitterEmbeds: function() {
                o.a.get(window, "twttr.widgets.load", r.a.noop)()
            },
            refreshInstagramEmbeds: function() {
                o.a.get(window, "instgrm.Embeds.process", r.a.noop)()
            },
            legacyVoxmediaToolsSupprt: function(e) {
                e.find('script[src*="//apps.voxmedia.com/tools"], script[src*="footnote-script"]').each(function(e, t) {
                    o.a.loadScript(r()(t).attr("src"))
                })
            },
            gifs: function(e) {
                e.find('img[src$=".gif"]').playGIF()
            },
            pinterestEmbeds: function() {
                r()("*[data-pin-do]").length > 0 && r()('script[src*="pinit.js"]').length < 1 && o.a.loadScript("https://assets.pinterest.com/js/pinit.js")
            },
            wideImageCompensation: function(e) {
                e.find(".c-wide-block, .wide-image-block").each(function(e, t) {
                    var n = r()(t),
                        i = n.find("img");
                    i.length < 1 || !i.hasClass("lazy-image") || (i.hasClass("lazy-loaded") ? n.addClass("is-loaded") : i.on("load", function() {
                        n.addClass("is-loaded")
                    }))
                })
            },
            narrowImageWidth: function(e) {
                var t = e.width();
                e.find(".c-picture img").each(function(e, n) {
                    var i = r()(n);
                    i.width() < t && i.attr("data-upload-width") && i.css({
                        width: i.attr("data-upload-width") + "px"
                    })
                })
            }
        },
        u = l,
        d = n(14),
        f = document.querySelector(".l-feature .c-entry-content, .l-page .c-entry-content");
    s.a.loadTwitter(), f && (s.a.fullBleed(f), r()(window).on("resize", o.a.throttle(function() {
        s.a.fullBleed(f, 1e3)
    }))), a.b.registerComponent("site/entry_formatter", function(e, t) {
        function n() {
            var e = r()(".c-mapstack__card, .c-entry-content, .c-entry-intro, .l-col__main > .c-video-embed--media");
            if (e.length > 0) {
                var t = {
                    priority: a.b.LOW
                };
                a.b.task(function() {
                    u.embedSanitizer(e)
                }, t), a.b.task(function() {
                    u.gifs(e)
                }, t), a.b.task(function() {
                    u.hrIllo(e)
                }, t), a.b.task(function() {
                    u.dropCap(e)
                }, t), a.b.task(function() {
                    u.imageEnlarge(e)
                }, t), a.b.task(function() {
                    u.dataTables(e)
                }, t), a.b.task(function() {
                    u.ratingsSnippet(e)
                }, t), a.b.task(function() {
                    u.shareQuote(e)
                }, t), a.b.task(function() {
                    u.snippetAnimations(e)
                }, t), a.b.task(function() {
                    u.captionSpacingNormalizer(e)
                }, t), a.b.task(function() {
                    u.listicleSharing(e)
                }, t), a.b.task(function() {
                    u.refreshTwitterEmbeds(e)
                }, t), a.b.task(function() {
                    u.refreshInstagramEmbeds(e)
                }, t), a.b.task(function() {
                    u.legacyVoxmediaToolsSupprt(e)
                }, t), a.b.task(function() {
                    u.pinterestEmbeds(e)
                }, t), a.b.task(function() {
                    u.wideImageCompensation(e)
                }, t), a.b.task(function() {
                    u.narrowImageWidth(e)
                }, t), a.b.task(function() {
                    d.a.install()
                }, t), e.each(function() {
                    a.b.run(this)
                }), f && s.a.fullBleed(f)
            }
        }
        document.addEventListener("anthem.preview-updated", n), n()
    });
    t.default = {
        formatVideoEmbeds: function(e) {
            u.embedSanitizer(e)
        },
        formatGIFs: function(e) {
            u.gifs(e)
        }
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var i, r = n(2),
            o = {
                campaign: null,
                content: null,
                medium: null,
                sources: {
                    facebook: "http://www.facebook.com/sharer.php?u=",
                    twitter: "https://twitter.com/intent/tweet?url=",
                    pinterest: "https://www.pinterest.com/pin/create/button/?url=",
                    linkedin: "https://www.linkedin.com/shareArticle?url=",
                    flipboard: "https://share.flipboard.com/bookmarklet/popout?v=2&url=",
                    pocket: "https://getpocket.com/save?url=",
                    reddit: "https://reddit.com/submit?url="
                },
                share: function(t, n, r) {
                    n = n.toLowerCase();
                    var o = 570,
                        a = 570;
                    switch (n) {
                        case "facebook":
                        case "twitter":
                            a = 279;
                            break;
                        case "linkedin":
                            a = 520;
                            break;
                        case "pinterest":
                            o = a = 750;
                            break;
                        case "pocket":
                            a = 615;
                            break;
                        case "reddit":
                            o = 850
                    }
                    if ("#" !== t[0] && this.sources[n]) {
                        i && i.close && i.close();
                        var s = screen.width / 2 - o / 2,
                            c = screen.height / 2 - a / 2;
                        if (i = window.open(this.formatSharer(t, n, r), "", "width=" + o + ", height=" + a + ", top=" + c + ", left=" + s), e.twttr && "twitter" === n) {
                            var l = window.open;
                            window.open = function() {}, setTimeout(function() {
                                window.open = l
                            }, 0)
                        }
                    }
                },
                sharePage: function(e) {
                    this.share(location.href, e)
                },
                formatSharer: function(e, t, n) {
                    var i = this.parseLink(e),
                        o = i.hostname.replace(/.*(twitter|facebook|pinterest|linkedin|flipboard|pocket|reddit).*/, "$1");
                    if (o === t || !t && this.sources[o]) {
                        var a = "facebook" === o ? "u" : "url",
                            s = r.a.deparamitize(i.search);
                        if (s.hasOwnProperty(a)) return e = decodeURIComponent(s[a]), s[a] = encodeURIComponent(this.formatLink(e, o)), [this.sources[o].split("?")[0], "?", r.a.paramitize(r.a.extend(s, n || {})), i.hash].join("")
                    }
                    var c = this.sources[t] + encodeURIComponent(this.formatLink(e, t));
                    return n && (c = c + "&" + r.a.paramitize(n)), c
                },
                formatLink: function(e, t) {
                    var n = this.parseLink(e),
                        i = r.a.extend({
                            utm_campaign: encodeURIComponent(this.campaign || location.hostname.replace(/(www\.)?(.+)\.com/, "$2")),
                            utm_content: encodeURIComponent(this.content || "entry"),
                            utm_medium: encodeURIComponent(this.medium || "social"),
                            utm_source: t
                        }, r.a.deparamitize(n.search)),
                        o = [n.protocol, "//", n.hostname].join("");
                    return o = o.replace(/\/?$/, "/"), e = [o, n.pathname.replace(/(^\/|\/$)/g, ""), "?", r.a.paramitize(i), n.hash].join("")
                },
                parseLink: function(e) {
                    var t = document.createElement("a");
                    return t.href = e, t
                }
            };
        t.a = o
    }).call(t, n(22))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(39), n(16), n(40), n(25), n(30), n(96), n(135), n(0)),
        r = n.n(i),
        o = n(3),
        a = n(5),
        s = n(12),
        c = n(1),
        l = n.n(c),
        u = n(2),
        d = l.a.View.extend({
            events: {
                'click [data-ui="next-entry"]': "onNextClick",
                'click [data-ui="prev-entry"]': "onPrevClick",
                'click [data-ui="pager-button"]': "onPagerClick"
            },
            initialize: function() {
                var e = this;
                this.$entries = this.$el.find(".c-entry-box-group__entries"), this.entryNumber = this.$entries.children().length, this.i = 0, this.applyMobileStyles(), this.$el.addClass("js-active"), r()(window).on("resize", u.a.throttle(function() {
                    e.applyMobileStyles()
                }, 150))
            },
            applyMobileStyles: function() {
                r()(window).width() > 600 ? (this.$entries.removeAttr("style"), this.$entries.find("li").removeAttr("style")) : (this.$entries.width(100 * this.entryNumber + "%"), this.$entries.find("li").width(100 / this.entryNumber + "%"))
            },
            positionEntry: function(e) {
                var t = -100 * e + "%";
                this.$('[data-ui="pager-button"][data-index="' + e + '"]').addClass("active").siblings().removeClass("active"), this.$entries.css("left", t)
            },
            onNextClick: function() {
                this.i < this.entryNumber - 1 && (this.i += 1, this.positionEntry(this.i))
            },
            onPrevClick: function() {
                this.i > 0 && (this.i -= 1, this.positionEntry(this.i))
            },
            onPagerClick: function(e) {
                this.i = this.$(e.currentTarget).data("index"), this.positionEntry(this.i)
            }
        }),
        f = d;
    o.b.registerComponent("site/entry_box/entry_group", function(e) {
        new f({
            el: e
        })
    }), o.b.registerComponent("site/entry_box/compact_video_entry", function(e, t) {
        if (a.a.isMobile()) {
            var n = r()(e).find(".c-entry-box--compact__image-wrapper");
            n.removeAttr("src"), o.b.get("site/video_embed").embed(n[0], t)
        } else r()(e).on("click", ".c-entry-box--compact__image-wrapper", function(e) {
            e.preventDefault(), o.b.get("site/video_embed").modal(t)
        })
    }, {
        waitForConsent: !0
    }), o.b.registerComponent("site/entry_box/stream_item", function(e, t) {
        var n = s.a.combinedRelative(1e3 * t.timestamp);
        n && r()(e).find("[data-relative-timestamp]").text(n)
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(20), n(132), n(3)),
        r = n(18),
        o = n(1),
        a = n.n(o),
        s = n(4),
        c = n(21),
        l = a.a.View.extend({
            initialize: function() {
                this.listenTo(this.model, "change", this.render)
            },
            render: function() {
                (this.model.hasChanged("recommended_by_user") || this.model.hasChanged("recommended_count")) && this.renderRecs(), (this.model.hasChanged("comment_unreads") || this.model.hasChanged("comment_count")) && this.renderComments()
            },
            renderRecs: function() {
                var e = this.model.isRecommendedByUser(),
                    t = this.model.get("recommended_count");
                this.$('[data-ui="rec-data"]').text(t), this.$('[data-ui="rec"]').toggleClass("is-recced", e).toggleClass("has-content", !!t && !e)
            },
            renderComments: function() {
                var e = this.model.get("comment_unreads"),
                    t = this.model.get("comment_count"),
                    n = this.$('[data-ui="comment-data"]');
                this.$('[data-ui="comment"]').toggleClass("has-unread", !!e).toggleClass("has-content", !!t && !e), n.text(t);
                var i = this.$('[data-ui="unread"]');
                i && i.toggle(e > 0).find('[data-ui="unread-data"]').text(e)
            },
            events: {
                'click [data-ui="rec"]': "onRec"
            },
            onRec: function() {
                var e = this;
                s.d.fetch().then(function() {
                    if (s.d.isLoggedIn()) {
                        var t = !e.model.isRecommendedByUser();
                        e.model.recommend(t).done(function() {
                            t && c.a.success("Recommendation added.")
                        }).fail(function(e) {
                            c.a.error(e)
                        })
                    } else i.b.get("apps/auth").open()
                })
            }
        }),
        u = l;
    i.b.registerComponent("site/entry_stat", function(e, t) {
        var n = r.a.add(t);
        new u({
            el: e,
            model: n
        })
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(20), n(78), n(3)),
        r = n(1),
        o = n.n(r),
        a = n(0),
        s = n.n(a),
        c = n(4),
        l = n(18),
        u = n(32),
        d = n(28),
        f = n(21),
        h = n(5),
        p = o.a.View.extend({
            initialize: function(e) {
                var t = this;
                this.url = e.base_url, e.entry_id && (this.entry = l.a.add({
                    id: e.entry_id
                }), this.listenTo(this.entry, "change", this.renderRecs), this.renderRecs()), setTimeout(function() {
                    u.a.fetch(e.services).always(function() {
                        t.render()
                    })
                }, 1500)
            },
            renderRecs: function() {
                var e = this.entry.isRecommendedByUser(),
                    t = this.entry.get("recommended_count");
                this.entry && this.$('[data-analytics-social="rec"]').toggleClass("is-recced", e).toggleClass("has-content", !!t && !e).find('[data-ui="count"]').text(t ? " (" + t + ")" : "")
            },
            render: function() {
                this.$("[data-analytics-social]").each(function() {
                    var e = s()(this),
                        t = e.data("analytics-social");
                    u.a.hasCount(t) && u.a.get(t) > 0 && e.find('[data-ui="count"]').text(" (" + u.a.get(t) + ")")
                })
            },
            events: {
                "click [data-analytics-social]": "onService"
            },
            onService: function(e) {
                var t = this.$(e.currentTarget).data("analytics-social");
                if ("email" === t) return void(h.a.browser().safari && (window.location.href = this.$(e.currentTarget).attr("href"), e.preventDefault()));
                e.preventDefault();
                var n = e.currentTarget.href || this.url;
                "rec" === t ? this.onRec() : d.a.share(n, t)
            },
            onRec: function() {
                var e = this;
                c.d.fetch().then(function() {
                    if (c.d.isLoggedIn())
                        if (c.b.get("id")) {
                            if (!e.entry) return;
                            var t = !e.entry.isRecommendedByUser();
                            e.entry.recommend(t).done(function() {
                                t && f.a.success("Recommended.")
                            }).fail(function(e) {
                                f.a.error(e)
                            })
                        } else f.a.error("You must be a member of " + c.a.get("name") + " to recommend.");
                    else i.b.get("apps/auth").open()
                })
            }
        }),
        g = p,
        m = "mousemove.social-popover",
        v = g.extend({
            close: function() {
                var e = this.$popover;
                e && (s()(document).off(["click.social-popover", m].join(" ")), e.hide())
            },
            events: {
                "click [data-analytics-social]": "social",
                'click [data-ui="more"]': "onMore"
            },
            onMore: function(e) {
                var t = this;
                e.preventDefault();
                var n = this.$popover = this.$popover || this.$('[data-ui="popover"]');
                n.is(":visible") || requestAnimationFrame(function() {
                    var i = s()(e.currentTarget),
                        r = i.offset(),
                        o = i.parent().offset(),
                        a = n.outerHeight(),
                        c = n.outerWidth(),
                        l = a > r.top - 20 - document.documentElement.scrollTop,
                        u = l ? "calc(100% + 5px)" : i.position().top - (a + 5),
                        d = Math.min(r.left + c - 20, window.innerWidth - 20) - c - o.left,
                        f = r.left - o.left;
                    n.toggleClass("below", l).find('[data-ui="caret"]').css({
                        left: Math.round(f - d + 10)
                    }), n.css({
                        top: u,
                        left: d
                    }).show(), requestAnimationFrame(function() {
                        var e = n[0].getBoundingClientRect();
                        s()(document).off(["click.social-popover", m].join(" ")).on("click.social-popover", function(e) {
                            !s()(e.target).closest(n).length > 0 && t.close()
                        }).on(m, function(n) {
                            var i = n.clientX,
                                r = n.clientY,
                                o = e.y - 50 - (l ? 20 : 0),
                                a = e.y + e.height + 50 + (l ? 0 : 20);
                            (i < e.x - 50 || i > e.x + e.width + 50 || r < o || r > a) && t.close()
                        })
                    })
                })
            },
            social: function(e) {
                var t = this;
                this.onService(e), setTimeout(function() {
                    return t.close()
                }, 250)
            }
        }),
        y = v;
    i.b.registerComponent("site/social_buttons_list", function(e, t) {
        t.el = e, new g(t)
    }), i.b.registerComponent("site/social_buttons_list/popover", function(e, t) {
        t.el = e, new y(t)
    })
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return new c({
            url: e
        })
    }
    t.b = i;
    var r = n(1),
        o = n.n(r),
        a = n(15),
        s = n(2),
        c = o.a.Model.extend(a.a.extend({
            urls: {
                facebook: "https://api.facebook.com/method/links.getStats",
                linkedin: "https://www.linkedin.com/countserv/count/share",
                pinterest: "https://widgets.pinterest.com/v1/urls/count.json"
            },
            ajaxOptions: {
                method: "get"
            },
            defaults: {
                url: location.href.split("?")[0],
                twitter: null,
                facebook: null,
                facebook_shares: null,
                facebook_likes: null,
                linkedin: null,
                pinterest: null
            },
            hasCount: function(e) {
                return "number" === typeof this.get(e)
            },
            fetch: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                t[0] instanceof Array && (t = t[0]);
                for (var i = this._c = this._c || {}, r = [], o = 0; o < t.length; o++) {
                    var a = t[o];
                    this.urls[a] && (i[a] || (i[a] = this["facebook" === a ? "_fb" : "_other"](a)), r.push(i[a]))
                }
                return s.a.all(r)
            },
            _fb: function(e) {
                var t = this;
                return this.ajax(e, {
                    data: {
                        urls: this.get("url"),
                        format: "json"
                    },
                    success: function(e) {
                        e && e.length && t.set({
                            facebook: e[0].share_count,
                            facebook_shares: e[0].share_count,
                            facebook_likes: e[0].like_count
                        })
                    }
                })
            },
            _other: function(e) {
                var t = this;
                return this.ajax(e, {
                    dataType: "jsonp",
                    data: {
                        url: this.get("url"),
                        format: "jsonp"
                    },
                    success: function(n) {
                        t.set(e, n.count)
                    }
                })
            }
        }));
    t.a = new c
}, , function(e, t, n) {
    "use strict";

    function i() {
        if (!a.e.get("privacy")) {
            var e = function() {
                s.a.notify(a.e.get("messaging"))
            };
            o.b.consent(), a.e.on("change:messaging", e), e(), a.e.fetch().then(function() {
                l.a.install(a.e.get("volume").embed_host), c.b.sendContext()
            })
        }
    }

    function r() {
        function e(e) {
            if ("function" === typeof e) try {
                e.call(null, d.a)
            } catch (e) {
                console.error("chorusInitQueue: error processing command :" + e.message)
            }
        }
        var t = window.chorusInitQueue = window.chorusInitQueue || [];
        t.forEach(e), t.push = e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = (n(35), n(36), n(37), n(38), n(3)),
        a = n(4),
        s = n(21),
        c = n(8),
        l = n(14),
        u = n(0),
        d = n.n(u);
    o.b.readyTask(i, {
        priority: o.b.HIGH
    }), o.b.readyTask(r, {
        priority: o.b.LOW
    }), a.e.fetch()
}, function(e, t) {}, function(e, t, n) {
    e.exports = n.p + "stable/components/foundation/base/assets/polygon_badge-9af0b16f5b13a9a02573cff2d7cd457b.svg"
}, function(e, t, n) {
    e.exports = n.p + "stable/components/foundation/base/assets/polygon_badge_hover-6521888a20ba7dced8bf2f3769c62587.svg"
}, function(e, t, n) {
    e.exports = n.p + "stable/components/foundation/base/assets/polygon_badge_review-e3d01cb6fd97ad5e146507cad1c39dd6.svg"
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(65),
        r = (n.n(i), n(3)),
        o = n(0),
        a = n.n(o),
        s = n(12);
    r.b.registerComponent("site/byline", function(e, t) {
        if (t.timestamp) {
            var n = s.a.combinedRelative(1e3 * t.timestamp);
            n && a()(e).find("[data-relative-timestamp]").text(n)
        }
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(131);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    (function(e) {
        function i(e) {
            var t = {
                    callback: "_googleMapsAPILoaded",
                    libraries: e.libs || "places,geometry",
                    sensor: !1,
                    v: 3
                },
                n = c.c.get("google_maps_api_key");
            return n && (t.key = n), t
        }

        function r(e) {
            var t = i(e),
                n = [];
            for (var r in t) n.push(r + "=" + t[r]);
            return "https://maps.googleapis.com/maps/api/js?" + n.join("&")
        }
        var o, a = n(0),
            s = n.n(a),
            c = n(4);
        t.a = function(t) {
            return t = t || {}, o || (o = s.a.Deferred(), e.google && e.google.maps ? o.resolve(google.maps) : c.c.fetch().done(function() {
                e._googleMapsAPILoaded = function() {
                    o.resolve(google.maps)
                }, s.a.getScript(r(t))
            })), o.promise()
        }
    }).call(t, n(22))
}, function(e, t, n) {
    "use strict";

    function i() {
        function e(e) {
            var t = document.createElement("div");
            t.className = e.cssClass, t.setAttribute("data-marker", e.slug);
            var n = e.html || '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">\n        <path d="M10,0.5c2.7-0.1,6.6,1.8,7.1,7c0.4,5.2-7.1,11.6-7.1,11.6l0,0c0,0-7.5-6.4-7.1-11.6C3.4,2.3,7.2,0.5,10,0.5"/>\n      </svg><span>' + e.label + "</span>";
            t.innerHTML = n, this.el = t, this.latlng = new google.maps.LatLng(e.lat, e.lon)
        }
        if ("undefined" === typeof google || !google.maps) throw "googleMapsLoader must be run before requesting a googleMapsMarker";
        var t = new google.maps.OverlayView;
        return e.prototype = o.a.extend(t || {}, {
            onAdd: function() {
                this.getPanes().overlayMouseTarget.appendChild(this.el)
            },
            onRemove: function() {
                this.el.parentNode.removeChild(this.el), this.el = null
            },
            draw: function() {
                var e = this.getProjection().fromLatLngToDivPixel(this.latlng);
                this.el.style.left = e.x + "px", this.el.style.top = e.y + "px"
            },
            isHilited: function() {
                return /\bhilite\b/.test(this.el.className)
            },
            hilite: function() {
                this.isHilited() || (this.el.className += " hilite", this.el.parentNode.appendChild(this.el))
            },
            unhilite: function() {
                this.isHilited() && (this.el.className = this.el.className.replace(/\shilite\b/, ""))
            }
        }), e
    }
    var r, o = n(2);
    t.a = function(e) {
        return new(r = r || i())(e)
    }
}, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(61), n(3)),
        r = n(1),
        o = n.n(r),
        a = n(0),
        s = n.n(a),
        c = n(2),
        l = n(24),
        u = o.a.View.extend({
            initialize: function(e) {
                var t = this;
                this.data = e.data || {}, this.backgroundEl = this.getBackgroundElement(), this.displayImageType(), s()(window).on("resize", c.a.throttle(function() {
                    return t.displayImageType()
                }, 150))
            },
            displayImageType: function() {
                var e = l.a.hasLightBackground(this.backgroundEl, this.getPseudoSelector()) ? "dark" : "light",
                    t = this.data[e + "_url"];
                if (t && this.$el.attr("src") !== t) {
                    var n = new Image,
                        i = this;
                    n.onload = function() {
                        i.$el.attr("src", t), i.data.is_header && s()(window).trigger("resize")
                    }, n.src = t
                }
            },
            getBackgroundElement: function() {
                return this.parseBackgroundSelector() ? document.querySelector(this.parseBackgroundSelector()[0]) : this.$el[0].parentNode
            },
            getPseudoSelector: function() {
                var e;
                return this.parseBackgroundSelector() && (e = this.parseBackgroundSelector()[1]), e
            },
            parseBackgroundSelector: function() {
                var e;
                return this.data.background_selector && (e = this.data.background_selector.replace("::", ":").split(":")), e
            }
        }),
        d = u;
    i.b.registerComponent("site/disclaimer_image", function(e, t) {
        new d({
            el: e,
            data: t
        })
    })
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e.which > 1 || e.ctrlKey || e.metaKey
    }

    function r(e) {
        return e.parents(".is-not-enlargeable").length > 0
    }

    function o(e) {
        return e.height() > window.innerHeight
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = (n(67), n(3)),
        s = n(0),
        c = n.n(s),
        l = n(10),
        u = n(1),
        d = n.n(u),
        f = Object(l.a)(n(68)),
        h = d.a.View.extend({
            className: "is-enlargeable",
            $enlargedOverlay: null,
            $body: c()("body"),
            enlarge: function() {
                this._boundClick = this.handleEnlargedClick.bind(this), this._boundKeyPress = this.handleKeypress.bind(this), this.$enlargedOverlay = c()(f({
                    original: this.$el.data("original")
                })), this.$enlargedOverlay.on("click", this._boundClick), this.$body.addClass("enlarged-image-active"), this.$body.on("keydown", this._boundKeyPress), this.$body.append(this.$enlargedOverlay)
            },
            removeEnlargedImage: function() {
                this.$enlargedOverlay && (this.$enlargedOverlay.remove(), this.$enlargedOverlay.off("click", this._boundClick), this.$enlargedOverlay = null, this.$body.removeClass("enlarged-image-active"), this.$body.off("keydown", this._boundKeyPress))
            },
            toggleNoMax: function() {
                this.$enlargedOverlay.toggleClass("no-max")
            },
            events: {
                click: "handleImageClick"
            },
            handleEnlargedClick: function(e) {
                i(e) || ("img" !== e.target.nodeName.toLowerCase() || this.$enlargedOverlay.hasClass("no-max") ? this.removeEnlargedImage() : this.toggleNoMax())
            },
            handleKeypress: function(e) {
                27 === e.keyCode && this.removeEnlargedImage()
            },
            handleImageClick: function(e) {
                i(e) || o(this.$el) || r(this.$el) || this.enlarge()
            }
        }),
        p = h;
    a.b.registerComponent("site/image_enlarge", {
        build: function(e) {
            return new p({
                el: e
            })
        }
    })
}, function(e, t, n) {
    "use strict";

    function i() {
        return r = r || n.e(4).then(n.bind(null, 117))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o = n(6),
        a = (n.n(o), n(3));
    a.b.registerComponent("site/snippet_animation", {
        build: function(e) {
            i().then(function(t) {
                return new t.default({
                    el: e
                })
            })
        }
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(16), n(49), n(70));
    n.n(i)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(69);
    n.n(i)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(20), n(51), n(23), n(52), n(75), n(3)),
        r = n(1),
        o = n.n(r),
        a = n(4),
        s = n(0),
        c = n.n(s),
        l = n(2),
        u = n(8),
        d = n(5),
        f = i.b.get("apps/auth"),
        h = o.a.View.extend({
            initialize: function(e) {
                var t = this;
                this.listenTo(a.d, "change", this.render), this.render(), i.b.get("site/font_loader").load().then(function() {
                    t.setNavItemsDisplay()
                }), this.setupIndicies(), c()(window).on("resize", l.a.debounce(this.setNavItemsDisplay.bind(this), 200)), !0 === d.a.browser().safari && this.$body.addClass("safari")
            },
            $body: c()("body"),
            render: function() {
                var e = this;
                a.d.fetch().then(function() {
                    if (a.d.isLoggedIn()) {
                        var t = a.d.toJSON();
                        t.logout_url = a.e.get("auth_url") + "/logout";
                        var n = '\n          <li class="c-global-header__login-menu-item logged_in_item"><a href="' + t.profile_url + '">' + t.username + '</a></li>\n          <li class="c-global-header__login-menu-item logged_in_item"><a href="' + t.edit_profile_url + '">Edit Profile</a></li>\n          <li class="c-global-header__login-menu-item logged_in_item"><a href="' + t.logout_url + '" data-ui="logout">Log out</a></li>\n        ';
                        e.$('[data-ui="menu"] .logged_out_item, [data-ui="menu"] .logged_in_item').remove(), e.$('[data-ui="menu"]').append(n), e.$('[data-ui="icon"]').attr("href", a.d.get("profile_url")).html('<span class="u-hidden-text">View Profile</span><img src="' + t.profile_image_url + '" alt="">'), e.$body.addClass("chorus-logged-in")
                    }
                })
            },
            events: {
                "click [data-ui-signin]": "onSignin",
                'click [data-ui="icon"]': "onIcon",
                'click [data-ui="logout"]': "onLogout",
                "mouseenter .c-global-header__login": "onLoginEnter",
                "mouseleave .c-global-header__login": "onLoginLeave",
                "focus .c-global-header__login": "onLoginEnter",
                "blur .c-global-header__login": "onLoginLeave",
                "click .c-global-header__search-trigger": "onSearchToggleClick",
                "click .c-global-header__search": "onSearchAreaClick",
                "click .c-global-header__link": "onLinkClick",
                "click .c-global-header__link-more": "onLinkClick",
                "click .c-global-header__link-communities": "onLinkClick",
                site_sponsorship_logo_color_rendered: "onSiteSponsorshipLogoRender",
                site_sponsorship_logo_mobile_color_rendered: "onSiteSponsorshipLogoRender",
                site_sponsorship_logo_white_rendered: "onSiteSponsorshipLogoRender",
                site_sponsorship_logo_mobile_white_rendered: "onSiteSponsorshipLogoRender"
            },
            setNavItemsDisplay: function() {
                var e, t = this.$(".c-global-header__link-more"),
                    n = 0,
                    i = 0,
                    r = [];
                n += c()(".c-global-header__links").width(), t.hasClass("hidden") || (i += t.width()), this.$(".c-global-header__link.is-pinned").each(function() {
                    r.push(this)
                }), this.$(".c-global-header__link").not(".is-pinned").each(function() {
                    r.push(this)
                }), r.forEach(function(e) {
                    var t = c()(e);
                    i += t.width();
                    var r = t.attr("data-nav-item-id"),
                        o = c()(".c-nav-list").find("[data-nav-item-id=" + r + "]");
                    i > n ? (t.addClass("hidden"), o.removeClass("hidden")) : (t.removeClass("hidden"), o.addClass("hidden"))
                });
                var o = encodeURI(window.location.href);
                this.$(".c-global-header__login a").each(function() {
                    this.search = "?return_to=" + o
                }), e = c()(".c-global-header__link.hidden[data-nav-list-trigger]"), e.length > 0 ? (c()(".c-nav-list").addClass("use-fixed-dropdown"), t.addClass("use-fixed-dropdown")) : (c()(".c-nav-list").removeClass("use-fixed-dropdown"), t.removeClass("use-fixed-dropdown")), t.toggleClass("hidden", i <= n)
            },
            onLoginEnter: function() {
                this.$el.addClass("is-login-active"), this.action_to = null
            },
            onLoginLeave: function() {
                var e = this;
                this.action_to = setTimeout(function() {
                    null !== e.action_to && e.$el.removeClass("is-login-active")
                }, 200)
            },
            onSearchAreaClick: function(e) {
                e.stopPropagation()
            },
            onSearchToggleClick: function(e) {
                var t = this;
                e.preventDefault(), e.stopPropagation();
                var n = this.$el.hasClass("is-search-active");
                if (n) this.$body.off("click.search-bar");
                else {
                    var i = this.$(".c-global-header__search-menu");
                    this.$el.find('input[name="q"]').focus(), this.$body.on("click.search-bar", function(e) {
                        c()(e.target).closest(i).length || (t.$el.removeClass("is-search-active"), t.$body.off("click.search-bar"))
                    })
                }
                this.$el.toggleClass("is-search-active", !n)
            },
            onSignin: function(e) {
                e.preventDefault();
                var t = this.$(e.currentTarget).data("ui-signin");
                f.open({
                    action: t
                })
            },
            onIcon: function(e) {
                a.d.isLoggedIn() || this.onSignin(e)
            },
            onLogout: function(e) {
                e.preventDefault(), f.open({
                    action: "logout"
                })
            },
            onLinkClick: function(e) {
                u.b.nav("click", e.currentTarget.innerText.trim())
            },
            onSiteSponsorshipLogoRender: function(e) {
                var t = this;
                this.$el.addClass("has-site-sponsorship-logo"), setTimeout(function() {
                    t.setNavItemsDisplay()
                }, 1e3)
            },
            setupIndicies: function() {
                var e = this,
                    t = null;
                this.$el.find("a, button").each(function(n, i) {
                    var r = c()(i),
                        o = r.parent(),
                        a = o.attr("data-nav-list-trigger");
                    null == t && (t = parseInt(r.attr("tabindex"))), r.attr("tabIndex", t), t += 1, a && "more" !== a ? e.$body.find("[data-nav-list-id=" + a + "] a").each(function(e, n) {
                        c()(n).attr("tabindex", t), t += 1
                    }) : "more" === a ? e.$body.find("[data-nav-list-id=" + a + "] > li").each(function(e, n) {
                        c()(n).hasClass("hidden") || c()(n).find("a").each(function(e, n) {
                            c()(n).attr("tabindex", t), t += 1
                        })
                    }) : o.addClass("has-no-sublist")
                })
            }
        }),
        p = h;
    i.b.registerComponent("site/global_header", function(e, t) {
        new p({
            el: e,
            data: t
        })
    }, {
        priority: i.b.HIGH
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(73), n(3)),
        r = n(1),
        o = n.n(r),
        a = n(0),
        s = n.n(a),
        c = n(5),
        l = n(8),
        u = null,
        d = o.a.View.extend({
            $body: s()("body"),
            events: {
                'click [data-ui="close-nav"]': "closeLists",
                "click a": "trackClick"
            },
            closeLists: function() {
                this.handleListLeave(), this.detachLists()
            },
            handleTriggerClick: function(e) {
                e.preventDefault(), s()(e.currentTarget).hasClass("is-attached") ? this.closeLists() : this.handleTriggerEnter(e, !0)
            },
            handleTriggerEnter: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                e.preventDefault(), clearTimeout(u);
                var n = s()(e.currentTarget);
                !t && "more" === n.data("nav-list-trigger") && n.hasClass("use-fixed-dropdown") || this.attachList(n.data("nav-list-trigger"), n, t || c.a.isTouch())
            },
            handleNavListClick: function(e) {
                e.preventDefault();
                var t = e.data.tabId;
                this.$body.find("[data-nav-list-id=" + t + "]").toggleClass("show-sub-items")
            },
            handleListEnter: function() {
                clearTimeout(u)
            },
            handleListLeave: function(e) {
                if (e) {
                    var t = s()(e.currentTarget);
                    if ("more" === t.data("nav-list-trigger") && t.hasClass("use-fixed-dropdown")) return
                }
                c.a.isSmallWindow(600) || (clearTimeout(u), u = setTimeout(s.a.proxy(this.detachLists, this), 200))
            },
            handleStumpEnter: function() {
                clearTimeout(u), this.detachLists()
            },
            trackClick: function(e) {
                l.b.nav("click", e.currentTarget.innerText.trim())
            },
            attachList: function(e, t, n) {
                var i = this;
                this.detachLists();
                var r = t.offset();
                if (this.$el.addClass("is-active"), t.addClass("is-attached"), t.height(), "more" === e) {
                    this.$el.addClass("show-more-menu");
                    var o = this.$el.find(".c-nav-list__main")
                } else this.$el.removeClass("show-more-menu"), o = this.$el.find("[data-nav-list-id=" + e + "]").andSelf().filter("[data-nav-list-id=" + e + "]").find("> .c-nav-list__inner > .c-nav-list__sub-items, > .c-nav-list__sub-items").first();
                o.addClass("is-attached");
                var a = s()(".c-nav-list").hasClass("show-more-menu") && s()(".c-nav-list").hasClass("use-fixed-dropdown");
                if (window.innerWidth >= 600 && !a) this.$el.find(".c-nav-list__inner").css({
                    top: r.top + t.height() + "px",
                    left: "auto",
                    right: "auto"
                }), this.$el.find(".c-nav-list__main").off("mouseleave"), this.$el.find(".c-nav-list__main").on("mouseleave", s.a.proxy(this.handleListLeave, this)), r.left + o.width() >= window.innerWidth ? o.css({
                    right: this.$body.width() - (r.left + t.outerWidth()) + "px",
                    left: "auto"
                }) : o.css({
                    left: r.left + "px",
                    right: "auto"
                });
                else if (window.innerWidth >= 600 && a) {
                    var c = s()(".c-masthead").offset();
                    this.$el.find(".c-nav-list__main").off("mouseleave"), this.$el.find(".c-nav-list__inner").css({
                        top: (c ? c.top : r.top) - s()(window).scrollTop() + "px",
                        right: "0",
                        left: "auto"
                    })
                } else this.$el.find(".c-nav-list__inner").css({
                    top: r.top + t.height() - this.$body.scrollTop() + "px",
                    left: "auto",
                    right: "auto"
                });
                (window.innerWidth <= 600 || a) && s()("html").addClass("is-nav-list-active"), window.innerWidth >= 600 && this.$body.off("click.navList touchstart.navList").on("click.navList touchstart.navList", function(e) {
                    var t = s()(e.target);
                    t.closest(".c-nav-list__inner").length || t.is(".c-nav-list__inner") || (e.preventDefault(), i.closeLists())
                }), l.b.nav("expand", t.text().trim(), !n)
            },
            detachLists: function() {
                this.$body.find("[data-nav-list-trigger].is-attached, [data-nav-list-id].is-attached, [data-nav-list-id] .is-attached").removeClass("is-attached").removeAttr("style"), this.$body.find(".c-nav-list").removeClass("is-active").removeClass("show-more-menu"), this.$el.find("[data-nav-list-id] .is-active").removeClass("is-active"), s()("html").removeClass("is-nav-list-active"), this.$body.off("click.navList touchstart.navList")
            },
            listenFor: function(e) {
                this.$body.on("click", "*[data-nav-list-trigger=" + e + "]", s.a.proxy(this.handleTriggerClick, this)), this.$body.on("click", ".c-nav-list__main [data-nav-list-id=" + e + "] .c-nav-list__label", {
                    tabId: e
                }, s.a.proxy(this.handleNavListClick, this)), c.a.isTouch() || "more" === e && s()(".c-nav-list").hasClass("use-fixed-dropdown") || (this.$body.on("mouseenter.navTrigger", "*[data-nav-list-trigger=" + e + "]", s.a.proxy(this.handleTriggerEnter, this)), this.$body.on("mouseleave.navTrigger", "*[data-nav-list-trigger=" + e + "]", s.a.proxy(this.handleListLeave, this)))
            },
            initialize: function(e) {
                var t = this;
                this.data = e.data, this.$el.find("*[data-nav-list-id]").each(function(e, n) {
                    t.listenFor(n.getAttribute("data-nav-list-id"))
                }), this.$body.find(".has-no-sublist a").on("mouseenter focus", s.a.proxy(this.handleStumpEnter, this)), this.$el.find(".c-nav-list__main").on("mouseenter", s.a.proxy(this.handleListEnter, this)), this.$el.find(".c-nav-list__main").on("mouseleave", s.a.proxy(this.handleListLeave, this))
            }
        }),
        f = d;
    i.b.registerComponent("site/nav_list", function(e, t) {
        new f({
            el: e,
            data: t
        })
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(74);
    n.n(i)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(81);
    n.n(i)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(20), n(86)),
        r = (n.n(i), n(6)),
        o = (n.n(r), n(3)),
        a = n(7),
        s = n(4);
    o.b.registerComponent("apps/comment_forum", function(e, t) {
        function i() {
            i.called || (i.called = !0, window.removeEventListener("keydown", r), s.d.fetch().then(function() {
                n.e(1).then(n.bind(null, 118)).then(function(n) {
                    return new n.default(e, t)
                })
            }))
        }

        function r(e) {
            var n;
            if (!/textarea|input/i.test(document.activeElement.tagName) && !e.ctrlKey && !e.metaKey) switch (e.which) {
                case 67:
                    n = "c";
                    break;
                case 90:
                    n = "z"
            }
            n && (document.body.scrollTop = document.getElementById("comments").offsetTop - .3 * window.innerHeight, t.launchKey = n, i())
        }
        window.addEventListener("keydown", r);
        var o = location.hash.slice(1);
        "comments" == o ? i() : /^\d+$/.test(o) ? (t.selection = Number(o), i()) : a.a.trackElement(e, i)
    }, {
        priority: o.b.HIGH
    })
}, , , , , function(e, t, n) {
    "use strict";
    var i = {
        loadTwitter: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            window.twttr || (document.querySelector('[class^="twitter-"]') || e) && (window.twttr = function(e, t, n) {
                var i, r = e.getElementsByTagName(t)[0],
                    o = window.twttr || {};
                return e.getElementById(n) ? o : (i = e.createElement(t), i.id = n, i.src = "https://platform.twitter.com/widgets.js", r.parentNode.insertBefore(i, r), o._e = [], o.ready = function(e) {
                    o._e.push(e)
                }, o)
            }(document, "script", "twitter-wjs"))
        },
        fullBleed: function(e) {
            if (e) {
                var t = document.getElementById("full-bleed-style"),
                    n = e.offsetLeft,
                    i = document.createElement("style");
                i.id = "full-bleed-style", i.innerHTML = ".fullbleed-block, .p-fullbleed-block{max-width:none !important;margin-left:-" + n + "px !important;width:" + window.innerWidth + "px !important;}", t ? t.parentNode.replaceChild(i, t) : document.head.appendChild(i)
            }
        }
    };
    t.a = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(23), n(25), n(64));
    n.n(i)
}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {
    e.exports = '<div class="c-image-enlarge__overlay">\n  <img src="<%= data.original %>" />\n</div>\n'
}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(6), n(0)),
        r = n.n(i),
        o = n(3),
        a = [],
        s = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            if (e ? c(e) : a = document.querySelectorAll(".balance-text"), "number" != typeof(t = +t) || isNaN(t)) t = 1;
            else if (0 == (t = Math.max(0, Math.min(1, t)))) return;
            u(t);
            var n = l(function() {
                u(t)
            }, 100);
            window.addEventListener("resize", n)
        },
        c = function(e) {
            for (var t = e.split(","), n = 0; n < t.length; n += 1)
                for (var i = document.querySelectorAll(t[n].trim()), r = 0; r < i.length; r += 1) {
                    var o = i[r];
                    a.push(o)
                }
        },
        l = function(e, t, n) {
            var i;
            return function() {
                var r = this,
                    o = arguments,
                    a = function() {
                        i = null, n || e.apply(r, o)
                    },
                    s = n && !i;
                clearTimeout(i), i = setTimeout(a, t), s && e.apply(r, o)
            }
        },
        u = function(e) {
            var t, n;
            for (n = 0; n < a.length; n += 1) {
                t = a[n], t.style.maxWidth = "";
                if ("start" === getComputedStyle(t, null).textAlign) {
                    var i = Math.max(50, t.offsetWidth / 2 - 10);
                    d(t, t.clientHeight, t.offsetWidth, i, t.clientWidth, e)
                }
            }
        },
        d = function e(t, n, i, r, o, a) {
            if (r + 5 >= o) return void(t.style.maxWidth = Math.round(i - a * (i - o)).toString() + "px");
            var s = (r + o) / 2;
            t.style.maxWidth = s + "px", t.clientHeight > n ? e(t, n, i, s + 1, o, a) : e(t, n, i, r, s, a)
        },
        f = s,
        h = r.a.Deferred();
    o.b.registerComponent("site/font_loader", function(e, t) {
        function i() {
            t.headline_balance_div_classes && t.headline_balance_fraction && t.headline_balance_fraction > 0 && f(t.headline_balance_div_classes, t.headline_balance_fraction)
        }
        var o = document.documentElement;
        if (document.fonts) h.resolve(), i();
        else {
            var a = function() {
                    o.classList.add("fonts-loaded"), r()(o).trigger("fontsloaded", {}), i(), h.resolve()
                },
                s = function() {
                    o.classList.add("fonts-loaded"), h.reject()
                };
            n.e(3).then(n.bind(null, 724)).then(function(e) {
                return e.loadFonts(t)
            }).then(a, s)
        }
    }, {
        priority: o.b.HIGH,
        load: function() {
            return h.promise()
        }
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i, r = n(3),
        o = n(1),
        a = n.n(o),
        s = n(4),
        c = n(0),
        l = n.n(c),
        u = function() {
            var e = this;
            return i || (i = l.a.Deferred(), s.e.fetch().then(function() {
                e.networkFoursquareUserID = s.c.get("foursquare_user_id"), window.___fourSq = {
                    uid: e.networkFoursquareUserID,
                    explicit: !1,
                    secure: !0,
                    onReady: function() {
                        i.resolve()
                    }
                }, l.a.getScript("https://platform-s.foursquare.com/js/widgets.js")
            })), i.promise()
        },
        d = a.a.View.extend({
            initialize: function() {
                var e = this;
                u().then(function() {
                    new fourSq.widget.SaveTo({
                        vid: e.$el.data("foursquare-id")
                    }).attach(e.el), e.$el.on("click", function(e) {
                        e.preventDefault()
                    })
                })
            }
        }),
        f = d;
    r.b.registerComponent("site/foursquare_button", function(e, t) {
        new f({
            el: e
        })
    })
}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(77);
    n.n(i)
}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(80);
    n.n(i), n(53)
}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(3),
        r = n(1),
        o = n.n(r),
        a = n(4),
        s = n(0),
        c = n.n(s),
        l = o.a.View.extend({
            initialize: function() {
                var e = this;
                a.e.fetch().then(function() {
                    e.opentableRefID = a.c.get("opentable_ref_id"), e.$el.on("click", function(t) {
                        e.handleClick(t)
                    })
                })
            },
            handleClick: function(e) {
                e.preventDefault();
                var t = {
                        rid: e.currentTarget.getAttribute("data-opentable-id"),
                        ref: this.opentableRefID
                    },
                    n = "http://www.opentable.com/single.aspx?" + c.a.param(t);
                window.open(n, "_blank")
            }
        }),
        u = l;
    i.b.registerComponent("site/opentable_button", function(e, t) {
        new u({
            el: e
        })
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(84),
        r = (n.n(i), n(3)),
        o = n(27),
        a = n(0),
        s = n.n(a);
    r.b.registerComponent("site/related_list", function(e) {
        o.default.formatVideoEmbeds(s()(e))
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    var i = n(1),
        r = n.n(i),
        o = n(26),
        a = r.a.Model.extend({
            defaults: {
                slug: "",
                asset_id: null,
                image_id: null,
                image_url: "",
                thumb_url: ""
            },
            requestSize: function(e, t) {
                this._dyn = o.a.addRect(e, t, this.toJSON())
            },
            fullsizeURL: function() {
                return this._dyn && this._dyn.get("url") || this.get("image_url")
            }
        }),
        s = r.a.Collection.extend({
            model: a,
            _selection: 0,
            selectedIndex: function() {
                return this.length < 1 ? -1 : Math.max(0, Math.min(this._selection, this.length - 1))
            },
            selectedImage: function() {
                return this.length < 1 ? null : this.at(this.selectedIndex())
            },
            selectedSlug: function() {
                var e = this.selectedImage();
                return e ? e.get("slug") : null
            },
            next: function() {
                if (!(this.length < 1)) {
                    var e = this._selection + 1;
                    this.selectByIndex(e < this.length ? e : 0)
                }
            },
            previous: function() {
                if (!(this.length < 1)) {
                    var e = this._selection - 1;
                    this.selectByIndex(e >= 0 ? e : this.length - 1)
                }
            },
            selectByIndex: function(e) {
                return e >= 0 && e < this.length && e != this._selection && (this._selection = e, this.trigger("selection"), !0)
            },
            selectBySlug: function(e) {
                for (var t = 0; t < this.length; t++)
                    if (this.at(t).get("slug") === e) return this.selectByIndex(t), !0;
                return !1
            }
        });
    t.a = s
}, function(e, t) {}, function(e, t, n) {
    "use strict";

    function i() {
        var e = document.querySelector('meta[name="style-tools"]'),
            t = document.createElement("link");
        t.rel = "stylesheet", t.media = "all", t.href = e ? e.content : "/style/" + Date.now() + "/tools.css", document.head.appendChild(t), n.e(2).then(n.bind(null, 119)).then(function() {
            return o.b.run()
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(6),
        o = (n.n(r), n(3)),
        a = n(4);
    o.b.readyTask(function() {
        a.d.fetch().then(function() {
            (a.d.get("can_edit") || a.d.get("can_admin")) && i()
        })
    })
}, , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(16), n(29), n(30), n(136));
    n.n(i)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(133), n(0)),
        r = n.n(i),
        o = n(2),
        a = n(13),
        s = n(3),
        c = n(27),
        l = n(1),
        u = n.n(l),
        d = n(10),
        f = n(134),
        h = n.n(f),
        p = n(14),
        g = n(5),
        m = "webkitfullscreenchange.videoPlayer mozfullscreenchange.videoPlayer fullscreenchange.videoPlayer MSFullscreenChange",
        v = u.a.View.extend({
            _opts: {},
            template: Object(d.a)(h.a),
            className: "c-video-embed__on-demand",
            initialize: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this._opts = e, this.render()
            },
            render: function() {
                var e = o.a.extend({
                    id_uid: (new Date).getTime(),
                    volume_autoplay: "true",
                    volume_autoplay_with_sound: "false",
                    volume_trigger: "embed"
                }, this._opts);
                e.video_embed_code = this.addAutoPlayToEmbed(e.video_embed_code), this.$el.html(this.template(e))
            },
            embed: function() {
                var e = this;
                try {
                    p.a.embedVideo(this.$(".c-video-embed")[0])
                } catch (e) {
                    console.log(e)
                }
                setTimeout(function() {
                    return c.default.formatVideoEmbeds(e.$el)
                }, 600)
            },
            play: function() {
                var e = this;
                try {
                    var t = this.$(".c-video-embed iframe")[0];
                    this.$el.addClass("activated");
                    var n = Object(p.a)(t);
                    if (n.play(), g.a.isMobile() && !g.a.iOSversion().ios) {
                        var i = this.$(document),
                            r = function(t) {
                                g.a.isFullScreen() || (setTimeout(function() {
                                    return n.pause()
                                }, 1e3), e.$el.removeClass("activated"), i.off(m))
                            };
                        t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullScreen && t.webkitRequestFullScreen(), i.off(m).on(m, r)
                    }
                } catch (e) {
                    console.log(e)
                }
            },
            addAutoPlayToEmbed: function(e) {
                var t = document.createElement("html");
                t.innerHTML = e;
                var n = t.getElementsByTagName("iframe")[0];
                if (n) {
                    var i = (n.getAttribute("allow") || "").split(";").concat("autoplay");
                    i = r.a.unique(i).filter(function(e) {
                        return e && e.length > 0
                    }).join(";"), n.setAttribute("allow", i);
                    var o = n.getAttribute("src");
                    /youtube\.com/i.test(o) && (/\?$/.test(o) || (o += "?"), /&autoplay=1$/i.test(o) || (o += "autoplay=1"), n.setAttribute("src", o))
                }
                return t.innerHTML
            }
        }),
        y = v;
    s.b.registerComponent("site/video_embed", function() {}, {
        modal: function(e) {
            try {
                var t = new y(o.a.extend(e, {
                    include_cta: !0,
                    volume_autoplay: !0,
                    volume_autoplay_with_sound: !0
                }));
                a.a.overlay(t.el, {
                    className: "video-embed-modal"
                }), setTimeout(function() {
                    return t.embed()
                }, 1e3)
            } catch (t) {
                e.url && (window.location = e.url)
            }
        },
        embed: function(e, t) {
            try {
                var n = new y(o.a.extend(t, {
                    volume_autoplay: !1
                }));
                r()(e).append(n.$el), r()(e).on("click", function(e) {
                    e.preventDefault(), e.stopPropagation(), n.play()
                }), requestAnimationFrame(function() {
                    return n.embed()
                })
            } catch (e) {}
        }
    }), s.b.registerComponent("site/video_embed/sanitize", function(e) {
        var t = r()(e);
        c.default.formatVideoEmbeds(t), new MutationObserver(function(e) {
            e.forEach(function() {
                return c.default.formatVideoEmbeds(t)
            })
        }).observe(e, {
            childList: !0,
            subtree: !0
        })
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(142);
    n.n(i)
}, , , , , function(e, t, n) {
    "use strict";
    var i, r = n(0),
        o = n.n(r);
    window.__handleRecaptchaLoad = function() {
        for (var e = document.querySelectorAll(".g-recaptcha"), t = 0; t < e.length; t++) window.grecaptcha.render(e[t], {
            sitekey: e[t].getAttribute("data-sitekey")
        });
        i.resolve()
    }, t.a = function() {
        return i || (i = o.a.Deferred(), o.a.getScript("https://www.google.com/recaptcha/api.js?onload=__handleRecaptchaLoad&render=explicit")), i.promise()
    }
}, , , , , , , , , , , , , , , , , , function(e, t, n) {
    n(34), n(121), n(60), n(123), n(125), n(39), n(127), n(129), n(45), n(23), n(16), n(95), n(29), n(137), n(139), n(27), n(40), n(141), n(48), n(144), n(146), n(25), n(30), n(148), n(150), n(152), n(71), n(72), n(154), n(156), n(50), n(158), n(76), n(160), n(162), n(164), n(46), n(49), n(52), n(166), n(168), n(51), n(79), n(53), n(82), n(170), n(172), n(174), n(176), n(97), n(178), n(180), n(182), n(184), n(186), n(190), n(192), n(83), n(194), n(196), n(199), n(201), n(203), n(209), n(211), n(214), n(47), n(31), n(216), n(218), n(220), n(222), n(224), n(227), n(229), n(231), n(96), n(233), n(235), n(237), n(239), n(241), n(243), n(245), n(247), n(249), n(251), n(253), n(255), n(257), n(259), n(261), n(263), n(265), n(267), n(269), n(271), n(273), n(275), n(277), n(279), n(281), n(283), n(286), n(288), n(290), n(292), n(294), n(296), n(298), n(300), n(302), n(304), n(306), n(308), n(310), n(312), n(314), n(316), n(318), n(320), n(322), n(324), n(326), n(328), n(330), n(332), n(334), n(336), n(339), n(54), n(342), n(345), n(347), n(349), n(351), n(353), n(87), e.exports = n(355)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function r() {
        return new Promise(function(e, t) {
            u.e.fetch().then(function() {
                var t = u.c.get("slug") || "";
                e(t)
            })
        })
    }

    function o(e) {
        "object" === v(window.phonographEvents) && r().then(function(t) {
            return window.phonographEvents.push(["rev_whitelist", m({}, e, {
                network: t
            })])
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = (n(122), n(2)),
        s = n(3),
        c = {
            checkForAdblock: function() {
                return new Promise(function(e, t) {
                    window.setTimeout(function() {
                        e(window.ConcertAds && window.ConcertAds.adsBlocked || !window.ConcertAds && !(window.Scroll && window.Scroll.config.detected))
                    }, 1500)
                })
            }
        },
        l = n(9),
        u = n(4),
        d = new Date,
        f = "whitelist_adblock_conversion",
        h = {},
        p = {
            whitelistView: function() {
                l.b.set("whitelist_shown_pvs", this.getWhitelistViews() + 1)
            },
            getWhitelistViews: function() {
                return Number(l.b.get("whitelist_shown_pvs")) || 0
            },
            sessionPageview: function() {
                sessionStorage.setItem("whitelist_session_pvs_1", this.getSessionPageviews() + 1)
            },
            getSessionPageviews: function() {
                return Number(sessionStorage.getItem("whitelist_session_pvs_1")) || 0
            },
            conversion: function() {
                this.isConverted() || (h[f] = "true", l.b.set("dfp_variables", h), l.b.set(f, !0), _.logConversion())
            },
            lostConversion: function() {
                this.isLostConversion() || (this.clearDfpVariables(), l.b.set("whitelist_lost_conversion", !0), _.logLostConversion())
            },
            isConverted: function() {
                return l.b.get(f) || !1
            },
            isLostConversion: function() {
                return l.b.get("whitelist_lost_conversion") || !1
            },
            clearDfpVariables: function() {
                l.b.set("dfp_variables", {})
            },
            setupPageviewLengthTracking: function() {
                var e = this;
                window.addEventListener("beforeunload", function() {
                    e.setPageviewLength(), _.logAvgPageviewTime()
                })
            },
            setPageviewLength: function() {
                var e = Math.round((new Date - d) / 1e3),
                    t = this.getPageviewLengths();
                l.b.set("whitelist_pageview_lengths_1", [].concat(i(t), [e]))
            },
            getPageviewLengths: function() {
                return l.b.get("whitelist_pageview_lengths_1") || []
            },
            clearPageviewArray: function() {
                l.b.set("whitelist_pageview_lengths_1", [])
            }
        },
        g = p,
        m = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        },
        v = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        y = {
            adblockPvs: "adblock_total_pageviews_1",
            conversion: "conversion_1",
            lostConversion: "lost_conversion_1",
            averagePageviewLength: "average_pageview_length_1",
            whitelistPvs: "total_messaging_pageviews",
            pvsByMessagingVariant: "messaging_variant_pageviews"
        },
        b = {
            logAdBlockPageview: function() {
                o({
                    category: y.adblockPvs,
                    count: 1
                })
            },
            logWhitelistView: function() {
                o({
                    category: y.whitelistPvs,
                    count: 1
                })
            },
            logWhitelistViewByMessagingVariant: function() {
                o({
                    category: y.pvsByMessagingVariant,
                    messaging_variant: A.getMessagingVariant(),
                    count: 1
                })
            },
            logConversion: function() {
                o({
                    category: y.conversion,
                    whitelist_pageviews: g.getWhitelistViews(),
                    messaging_variant: A.getMessagingVariant(),
                    count: 1
                })
            },
            logLostConversion: function() {
                o({
                    category: y.lostConversion,
                    whitelist_pageviews: g.getWhitelistViews(),
                    messaging_variant: A.getMessagingVariant(),
                    count: 1
                })
            },
            logAvgPageviewTime: function() {
                var e = g.getPageviewLengths(),
                    t = {
                        category: y.averagePageviewLength
                    };
                if (e.length > 3) {
                    var n = e.reduce(function(e, t) {
                        return e + t
                    }) / e.length;
                    t.length_in_seconds = n, o(t), g.clearPageviewArray()
                }
            }
        },
        _ = b,
        w = {
            displayMessaging: function(e, t) {
                if (!this.checkForFeatureLayout()) {
                    var n = t[this.getMessagingVariant()] || this.chooseMessagingVariant(t);
                    g.whitelistView(), _.logWhitelistView(), _.logWhitelistViewByMessagingVariant(), this.appendMessaging(e, n)
                }
            },
            chooseMessagingVariant: function(e) {
                var t = Math.floor(Math.random() * e.length);
                return l.b.set("whitelist_messaging_variant", t), e[t]
            },
            getMessagingVariant: function() {
                return l.b.get("whitelist_messaging_variant")
            },
            checkForFeatureLayout: function() {
                if (document.querySelector(".entry_template_minimal")) return !0
            },
            checkForArticlePage: function() {
                if (document.querySelector(".entry_template_standard")) return !0
            },
            appendMessaging: function(e, t, n) {
                if (n) {
                    var i = document.querySelector(".m-ad__desktop_leaderboard_variable");
                    i && (i.innerHTML = "", i.style.display = "none")
                }
                var r = document.querySelector(e),
                    o = this.createIframeWrapper(),
                    a = this.createIframe(t);
                o.appendChild(a), r.appendChild(o)
            },
            createIframeWrapper: function() {
                var e = document.createElement("div");
                return e.className = this.checkForArticlePage() ? "adblock-whitelist-messaging__article-wrapper" : "adblock-whitelist-messaging__wrapper", e
            },
            createIframe: function(e) {
                var t = document.createElement("iframe");
                return t.className = "adblock-whitelist-messaging__iframe", t.src = e, t.scrolling = "no", t.frameBorder = 0, t.title = "Adblock Whitelist Instructions", t
            }
        },
        A = w;
    s.b.registerComponent("site/ad_whitelist", function(e, t) {
        if (a.a.deparamitize(location.search).whitelist_test) return A.appendMessaging(t.selector, t.messaging_urls[0], !0);
        t.adblocker_whitelist_prompt_enabled && c.checkForAdblock().then(function(e) {
            return g.getWhitelistViews() > 0 && !e ? g.conversion() : g.isConverted() && e ? g.lostConversion() : void(e && (g.sessionPageview(), g.setupPageviewLengthTracking(), _.logAdBlockPageview(), A.displayMessaging(t.selector, t.messaging_urls)))
        })
    }, {
        waitForConsent: !0
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(124), n(3)),
        r = n(1),
        o = n.n(r),
        a = n(0),
        s = n.n(a),
        c = o.a.View.extend({
            events: {
                "click .c-archives-load-more__button": "handleClick"
            },
            initialize: function(e) {
                this.$button = this.$(".c-archives-load-more__button"), this.hasMoreEntries = !0, this.currentPage = 1, this.resultsHTML = "", this.$resultsContainer = this.$(".c-archives-load-more__results")
            },
            handleClick: function() {
                var e = this;
                this.$button.prop("disabled", !0), this.fetch().then(function() {
                    e.$resultsContainer.append(e.resultsHTML), e.hasMoreEntries ? e.$button.prop("disabled", !1) : e.$button.remove()
                })
            },
            fetch: function() {
                var e = this;
                if (!this._load) {
                    this._load = s.a.Deferred();
                    var t = "/fetch" + window.location.pathname + "/" + ++this.currentPage;
                    s.a.ajax({
                        url: t,
                        method: "get",
                        format: "json",
                        complete: function(t) {
                            var n = JSON.parse(t.responseText);
                            e.resultsHTML = n.html, e.hasMoreEntries = n.has_more, e._load.resolve(), e._load = null
                        },
                        error: function() {
                            delete e._load
                        }
                    })
                }
                return this._load.promise()
            }
        }),
        l = c;
    i.b.registerComponent("site/archives_load_more", function(e) {
        new l({
            el: e
        })
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(126),
        r = (n.n(i), n(0)),
        o = n.n(r),
        a = n(3),
        s = n(9);
    a.b.registerComponent("site/breaking_news", function(e, t) {
        s.b.get("breaking-news") !== t.title && o()('[data-ui="breaking-news"]').addClass("visible"), o()('[data-ui="close-breaking-news"]').on("click", function() {
            o()('[data-ui="breaking-news"]').removeClass("visible"), s.b.set("breaking-news", t.title)
        })
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(128);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(130), n(3)),
        r = n(1),
        o = n.n(r),
        a = n(0),
        s = n.n(a),
        c = o.a.View.extend({
            initialize: function() {
                var e = this;
                setTimeout(function() {
                    e.handleHashChange()
                }, 500), s()(window).on("hashchange", function() {
                    e.handleHashChange()
                })
            },
            handleHashChange: function() {
                var e = window.location.hash.slice(1);
                e ? this.showSection(e) : this.resetList()
            },
            handleResetClick: function() {
                this.resetList()
            },
            resetList: function() {
                this.$el.removeClass("is-section-active").find(".is-active-section").removeClass("is-active-section")
            },
            showSection: function(e) {
                this.$el.find(".level-idx-1").text(this.$el.find('h2[data-section-title="' + e + '"]').text() + " Neighborhoods"), this.$el.find("is-active-section").removeClass("is-active-section"), this.$el.addClass("is-section-active").find('.c-directory__extended-body[data-body-for="' + e + '"]').addClass("is-active-section"), s()("html, body").animate({
                    scrollTop: this.$el.offset().top
                }, 500)
            },
            events: {
                "click .level-idx-0": "handleResetClick"
            }
        }),
        l = c;
    i.b.registerComponent("site/directory", function(e) {
        new l({
            el: e
        })
    })
}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {
    e.exports = '<% if (data.volume_uuid) { %>\n  <div class="c-video-embed volume-video" id="volume-placement-<%= data.id_uid %>"\n    data-volume-id="<%= data.volume_id %>"\n    data-volume-uuid="<%= data.volume_uuid %>"\n    data-volume-placement="<%= data.volume_placement %>"\n    data-volume-autoplay="<%= data.volume_autoplay %>"\n    data-volume-autoplay-with-sound="<%= data.volume_autoplay_with_sound %>"\n    data-volume-trigger="<%= data.volume_trigger %>"\n    data-volume-player-choice="<%= data.player_choice %>"\n    data-volume-start-time="<%= data.start_time %>"\n    data-analytics-placement="<%= data.analytics_placement %>">\n  </div>\n<% } else if (data.video_embed_code) { %>\n  <div class="p-scalable-video">\n    <%= data.video_embed_code %>\n  </div>\n<% } %>\n<% if (data.include_cta) { %>\n  <% if (data.facebook_video_url && data.facebook_video_url.length > 0) { %>\n    <a class="c-video-embed__subscribe" href="<%= data.facebook_video_url %>">For more videos, follow us on Facebook.</a>\n  <% } else if (data.youtube_url &&  data.youtube_url.length > 0) { %>\n    <a class="c-video-embed__subscribe" href="<%= data.youtube_url %>">Like this video? Subscribe on YouTube.</a>\n  <% } %>\n  <% if (data.title && data.title.length > 0 && data.url && data.url.length > 0) { %>\n    <div class="c-video-embed__cta">\n      <a href="<%= data.url %>">Read more:&nbsp;<%= data.title %></a>\n    </div>\n  <% } %>\n  <div class="c-video-embed__ad-slot"></div>\n<% } %>\n'
}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(138),
        r = (n.n(i), n(3)),
        o = n(0),
        a = n.n(o);
    r.b.registerComponent("site/entry_correction", function(e) {
        a()(e).find("[data-toggle]").on("click", function(t) {
            t.preventDefault(), a()(e).toggleClass("expanded")
        })
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(140);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(16), n(40), n(48), n(25), n(30), n(97), n(143));
    n.n(i)
}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(145);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(147);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(149);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(151);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(153), n(3)),
        r = n(1),
        o = n.n(r),
        a = n(0),
        s = n.n(a),
        c = o.a.View.extend({
            preventDefaultEvents: !1,
            handleSelectChange: function(e) {
                if (this.preventDefaultEvents) {
                    e.preventDefault();
                    var t = s()(e.currentTarget).attr("value");
                    this.selectItem(t)
                } else window.location = e.currentTarget.value
            },
            handleClick: function(e) {
                if (this.preventDefaultEvents) {
                    e.preventDefault();
                    var t = s()(e.currentTarget).attr("href");
                    this.selectItem(t)
                }
            },
            selectItem: function(e) {
                this.$el.trigger("filter", e), this.$(".is-selected").removeClass("is-selected"), this.$('option[selected="selected"]').removeAttr("selected"), this.$('*[data-slug="' + e + '"]').addClass("is-selected"), this.$('option[value="' + e + '"]').attr("selected", "selected")
            },
            events: {
                "change select": "handleSelectChange",
                "click a": "handleClick"
            },
            initialize: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.$el.addClass("js-active"), this.preventDefaultEvents = e.prevent_default_events || !1
            }
        }),
        l = c;
    i.b.registerComponent("site/filter_list", function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        new l({
            el: e,
            prevent_default_events: t.prevent_default_events
        })
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i, r, o = n(155),
        a = (n.n(o), n(6)),
        s = (n.n(a), n(0)),
        c = n.n(s),
        l = n(2),
        u = n(3),
        d = n(5),
        f = function() {
            function e(e, t) {
                var n = [],
                    i = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                } catch (e) {
                    r = !0, o = e
                } finally {
                    try {
                        !i && s.return && s.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        h = .25,
        p = 200,
        g = d.a.iOSversion().iOS,
        m = "objectFit" in document.documentElement.style,
        v = d.a.supportsPictureElement(),
        y = !!window.IntersectionObserver,
        b = [],
        _ = [],
        w = [],
        A = [];
    u.b.registerComponent("site/gifv", function(e, t) {
        function o() {
            b.push(S), k(S, t), r || (r = new IntersectionObserver(s, {
                threshold: [0, .25, .5, .75, 1]
            }), r.POLL_INTERVAL = p), r.observe(S), j = l.a.debounce(function() {
                k(S, t)
            }, p), c()(window).on("resize orientationchange", j)
        }

        function a(e) {
            r.unobserve(e), c()(window).off("resize orientationchange", j), b = b.filter(function(t) {
                return t !== e
            }), w = w.filter(function(t) {
                return t !== e
            }), A = A.filter(function(t) {
                return t !== e
            }), _ = _.filter(function(t) {
                return t.target !== e
            }), C(e)
        }

        function s(e) {
            if (e.forEach(function(e) {
                    _ = _.filter(function(t) {
                        return t.target !== e.target
                    }), e.intersectionRatio >= h && _.push(e)
                }), g) {
                var t = [u(_)].filter(function(e) {
                    return e
                });
                w = x(t)
            } else w = x(_);
            A = b.filter(function(e) {
                return w.indexOf(e) < 0
            }), d(A, w)
        }

        function u(e) {
            var t = e.sort(function(e, t) {
                    return t.intersectionRatio - e.intersectionRatio
                }),
                n = t.filter(function(e) {
                    return e.intersectionRatio === t[0].intersectionRatio
                });
            return n.length > 1 && (t = n.sort(function(e, t) {
                return e.boundingClientRect.top - t.boundingClientRect.top
            })), t.length ? t[0] : null
        }

        function d(e, t) {
            e.forEach(function(e) {
                e.paused || e.pause()
            }), t.forEach(function(e) {
                if (e.paused) {
                    e.play().then(function() {}).catch(function() {
                        a(e)
                    })
                }
            })
        }

        function x(e) {
            return e.map(function(e) {
                return e.target
            })
        }

        function k(e, t) {
            var n = !e.paused,
                i = T(e, t);
            e.getAttribute("src") !== i && (e.removeAttribute("src"), e.load(), e.setAttribute("src", i), e.load()), n && e.play()
        }

        function C(e) {
            var t = e.parentNode,
                n = e.querySelector("script"),
                i = n.innerHTML;
            return e.outerHTML = i, {
                picture: t.querySelector("picture"),
                img: t.querySelector("img")
            }
        }

        function T(e, t) {
            var n = {};
            if (t.art_directed.length)
                for (var i = 0; i < t.art_directed.length; i++) {
                    var r = t.art_directed[i];
                    if (window.matchMedia(r.media).matches) {
                        n = r.urls;
                        break
                    }
                }
            Object.keys(n).length || (n = t.default);
            var o = e.offsetWidth * (window.devicePixelRatio || 1),
                a = E(o, Object.keys(n));
            return n[parseInt(a)]
        }

        function E(e, t) {
            for (var n = t[0], i = Math.abs(e - n), r = 0; r < t.length; r++) {
                var o = Math.abs(e - t[r]);
                o < i && (i = o, n = t[r])
            }
            return n
        }
        var j, S = e;
        if (void 0 === i) {
            var M = S.play();
            i = !(!M || !M.then)
        }
        if (!i) return v || m ? m ? v ? void C(S) : n.e(6).then(n.bind(null, 93)).then(function(e) {
            e({
                elements: [C(S).img]
            })
        }) : n.e(5).then(n.bind(null, 33)).then(function(e) {
            e(C(S).img)
        }) : Promise.all([n.e(5).then(n.bind(null, 33)), n.e(6).then(n.bind(null, 93))]).then(function(e) {
            var t = f(e, 2),
                n = t[0],
                i = t[1],
                r = C(S);
            n(r.img), i({
                elements: [r.img]
            })
        });
        y || m ? m ? y ? o() : n.e(7).then(n.bind(null, 94)).then(o) : n.e(5).then(n.bind(null, 33)).then(function(e) {
            o(), e(S)
        }) : Promise.all([n.e(5).then(n.bind(null, 33)), n.e(7).then(n.bind(null, 94))]).then(function(e) {
            var t = f(e, 1),
                n = t[0];
            o(), n(S)
        })
    }, {
        priority: u.b.HIGH
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(157);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(159);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(25), n(31), n(161));
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(163),
        r = (n.n(i), n(3)),
        o = n(0),
        a = n.n(o),
        s = n(2);
    r.b.registerComponent("site/group_subnav", function(e, t) {
        var n = a()(e);
        n.on("click", ".c-group-subnav__see-all", function() {
            n.toggleClass("mobile-all-exposed"), n.find(".c-group-subnav__see-all span").text(n.hasClass("mobile-all-exposed") ? "collapse" : "see all")
        });
        var i = function() {
            if (a()(window).width() >= 1024) {
                var e = n.find(".c-group-subnav__item").not(".c-group-subnav__see-all"),
                    t = n.height(),
                    i = 0;
                e.each(function(n) {
                    var r = a()(e[n]),
                        o = t - (r.position().top + r.outerHeight());
                    r.toggleClass("c-group-subnav__item--last-row", o < 10), r.toggleClass("c-group-subnav__item--row-break", o != i), i = o
                })
            }
        };
        a()(window).on("resize orientationchange fontsloaded", s.a.debounce(i, 500)), i()
    }, {
        priority: r.b.HIGH
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(165);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(167),
        r = (n.n(i), n(3)),
        o = n(0),
        a = n.n(o);
    r.b.registerComponent("site/lifetime_view", function(e, t) {
        ! function() {
            var e = a()(".c-lifetime-view__info-icon"),
                t = a()(".c-lifetime-view__tooltip--wrap");
            e.click(function() {
                t.toggle()
            })
        }()
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(169),
        r = (n.n(i), n(3)),
        o = n(0),
        a = n.n(o);
    r.b.registerComponent("site/masthead", function(e, t) {
        var n = a()(e);
        n.on("site_sponsorship_logo_rendered site_sponsorship_logo_mobile_rendered", function(e) {
            n.addClass("has-site-sponsorship-logo")
        })
    }, {
        priority: r.b.HIGH
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(171);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(173);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(175),
        r = (n.n(i), n(3)),
        o = n(0),
        a = n.n(o),
        s = n(2);
    r.b.registerComponent("site/package_cover", function(e, t) {
        a()(e).hasClass("c-package-cover--overlay-nav") && a()(".c-overlay-nav").addClass("package-content-layout-overlay");
        var n = function(e) {
                var t = e.find(".c-package-cover__horizontal .c-package-cover__entry");
                t.removeClass("c-package-cover__entry--space-left c-package-cover__entry--space-right");
                for (var n = 0; n < t.length; n += 1) {
                    var i = function(e, t) {
                            for (var n = {}, i = 0; i < e.length; i += 1) {
                                var r = a()(e[i]),
                                    o = "top_position_" + 10 * Math.ceil((r.position().top + 1) / 10);
                                n[o] ? n[o].push(r) : n[o] = [r], n.firstRow || (n.firstRow = n[o]), e[i] === t && (n.active = n[o]), n.lastRow = n[o]
                            }
                            return n
                        }(t, t[n]),
                        r = i.active;
                    if (r[0].removeClass("c-package-cover__entry--space-right"), function(e, t) {
                            var n = e.length;
                            if (2 == n && 1 === e.filter(function(e) {
                                    return e.hasClass("c-package-cover__entry--single")
                                }).length) return !0;
                            if (3 == n) {
                                if (!t && (e[1].hasClass("c-package-cover__entry--pullquote") || e[1].hasClass("c-package-cover__entry--embedded-video") || e[1].hasClass("c-package-cover__entry--featured"))) return !0;
                                if (3 === e.filter(function(e) {
                                        return e.hasClass("c-package-cover__entry--single")
                                    }).length && 0 == e.filter(function(e) {
                                        return e.hasClass("c-package-cover__entry--space-left") || e.hasClass("c-package-cover__entry--space-right")
                                    }).length) return !0
                            }
                            return !t && 4 == n
                        }(r, i.lastRow === r || i.firstRow === r)) {
                        var o = r[0].prev();
                        o && o.hasClass("c-package-cover__entry--space-right") ? r[0].addClass("c-package-cover__entry--space-left") : 4 === r.length ? r[r.length - 2].addClass("c-package-cover__entry--space-right") : r[r.length - 1].addClass("c-package-cover__entry--space-right")
                    }
                }
            },
            i = function(e) {
                var t = e.find(".c-package-cover__entry--pullquote"),
                    n = .5 * e.find(".c-package-cover__horizontal").width() || e.width();
                t.each(function(e) {
                    var i = a()(t[e]);
                    setTimeout(function() {
                        i.toggleClass("align-right", i.position().left < n)
                    }, 1e3)
                })
            },
            r = function() {
                n(a()(e)), i(a()(e))
            };
        a()(window).on("resize orientationchange", s.a.debounce(r, 500)), r()
    }, {
        priority: r.b.HIGH
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(177),
        r = (n.n(i), n(3)),
        o = n(0),
        a = n.n(o),
        s = n(5);
    r.b.registerComponent("site/package_subnav", function(e) {
        var t = a()(e);
        t.find(".collapsible").on("click", '*[data-ui-action="collapse-toggle"]', function(e) {
            a()(e.delegateTarget).hasClass("collapsible-mobile-only") && !s.a.isSmallWindow() || (e.preventDefault(), a()(e.delegateTarget).toggleClass("collapsed"))
        }), t.find(".expandable").on("click", '*[data-ui-action="expand"]', function(e) {
            e.preventDefault(), a()(e.delegateTarget).removeClass("expandable"), a()(e.currentTarget).remove()
        }), t.find('*[data-ui-action="collapse-all"]').on("click", function() {
            t.find(".collapsible").addClass("collapsed")
        }), t.find('*[data-ui-action="uncollapse-all"]').on("click", function() {
            t.find(".collapsible").removeClass("collapsed")
        }), e.querySelectorAll("ul ul a").forEach(function(e) {
            var t = e.textContent,
                n = t.match(/(^\d{1,3}\.)/);
            if (n && n.length > 0) {
                var i = n[0];
                e.classList.add("list-indexed"), e.innerHTML = '<span class="list-index">' + i + "</span>" + t.replace(i, "")
            }
        })
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(179);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(181);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(183), n(3)),
        r = n(1),
        o = n.n(r),
        a = n(0),
        s = n.n(a),
        c = n(2),
        l = c.a.extend(o.a.Events, {
            _pending: null,
            _data: {},
            pullAccount: function() {
                var e = this;
                if (!this._pending) {
                    this._pending = s.a.Deferred();
                    var t = window.tp || [];
                    t.push(["setUsePianoIdUserProvider", !0]), t.pianoId && t.pianoId.init({
                        loginFailed: function() {
                            e._data = {}, e._pending.resolve(e._data), e.trigger("change", {
                                data: c.a.extend(e._data, {})
                            }), s()("body").removeClass("piano-logged-in")
                        },
                        loggedIn: function(t) {
                            e._data = t, e._pending.resolve(e._data), e.trigger("change", {
                                data: c.a.extend(e._data, {})
                            }), s()("body").addClass("piano-logged-in")
                        },
                        loggedOut: function() {
                            e._data = {}, e._pending.resolve(e._data), e.trigger("change", {
                                data: c.a.extend(e._data, {})
                            }), s()("body").removeClass("piano-logged-in")
                        }
                    })
                }
                return this._pending.promise()
            },
            showRegister: function() {
                var e = this,
                    t = window.tp || [];
                t.pianoId && t.pianoId.show({
                    screen: "register",
                    loggedIn: function(t) {
                        e._data = t, e.trigger("change", {
                            data: c.a.extend(e._data, {})
                        }), s()("body").addClass("piano-logged-in")
                    },
                    loggedOut: function() {
                        e._data = {}, e.trigger("change", {
                            data: c.a.extend(e._data, {})
                        }), s()("body").removeClass("piano-logged-in")
                    }
                })
            },
            showLogin: function() {
                var e = this,
                    t = window.tp || [];
                t.pianoId && t.pianoId.show({
                    screen: "login",
                    loggedIn: function(t) {
                        e._data = t, e.trigger("change", {
                            data: c.a.extend(e._data, {})
                        }), s()("body").addClass("piano-logged-in")
                    },
                    loggedOut: function() {
                        e._data = {}, e.trigger("change", {
                            data: c.a.extend(e._data, {})
                        }), s()("body").removeClass("piano-logged-in")
                    }
                })
            },
            logout: function() {
                var e = this,
                    t = window.tp || [];
                t.pianoId && t.pianoId.logout(function() {
                    e._data = {}, e.trigger("change", {
                        data: c.a.extend(e._data, {})
                    }), s()("body").removeClass("piano-logged-in")
                })
            }
        }),
        u = l,
        d = o.a.View.extend({
            manageAccountUrl: null,
            initialize: function(e) {
                var t = this;
                this.manageAccountUrl = e.data.manageAccountUrl, u.pullAccount().then(function(e) {
                    e.token ? t.pianoLogIn(e) : t.pianoLogOut()
                }), u.on("change", function(e) {
                    e.data.token ? t.pianoLogIn(e.data) : t.pianoLogOut()
                })
            },
            events: {
                'click [data-ui="piano_subscribe"]': "onPianoAction",
                'click [data-ui="piano_login"]': "onPianoAction",
                'click [data-ui="piano_logout"]': "onPianoAction",
                'click [data-ui="piano_manage_account"]': "onPianoAction"
            },
            pianoLogIn: function(e) {
                var t = e.user || {};
                this.$el.addClass("logged-in"), this.$(".c-piano__login-controls_logged-status").html("\n      " + t.firstName + " " + t.lastName + ' | <a href="#" data-ui="piano_logout">Sign Out</a> |  <a href="' + this.manageAccountUrl + '">Manage Account</a>\n    ')
            },
            pianoLogOut: function() {
                this.$el.removeClass("logged-in"), this.$(".c-piano__login-controls_logged-status").empty()
            },
            onPianoAction: function(e) {
                e.preventDefault(), e.stopPropagation();
                var t = s()(e.currentTarget).attr("data-ui");
                if ((window.tp || []).pianoId) switch (t) {
                    case "piano_subscribe":
                        u.showRegister();
                        break;
                    case "piano_login":
                        u.showLogin();
                        break;
                    case "piano_logout":
                        u.logout()
                }
            }
        }),
        f = d;
    i.b.registerComponent("site/piano/login_controls", function(e, t) {
        new f({
            el: e,
            data: t
        })
    }, {
        priority: i.b.HIGH
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i, r, o, a = n(185),
        s = (n.n(a), n(6)),
        c = (n.n(s), n(0)),
        l = n.n(c),
        u = n(2),
        d = n(5),
        f = n(3),
        h = function() {
            function e(e, t) {
                var n = [],
                    i = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                } catch (e) {
                    r = !0, o = e
                } finally {
                    try {
                        !i && s.return && s.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        p = d.a.supportsPictureElement(),
        g = d.a.supportsObjectFit(),
        m = d.a.supportsIntersectionObserver(),
        v = [];
    f.b.registerComponent("site/picture_element", function(e, t) {
        function a() {
            r || (r = new IntersectionObserver(s, {
                threshold: [.25, .5, .75, 1],
                rootMargin: "0px"
            }), r.POLL_INTERVAL = 200), r.observe(e)
        }

        function s(e) {
            e.forEach(function(e) {
                if (e.intersectionRatio >= .25) {
                    r.unobserve(e.target);
                    var t = c(e.target);
                    o && (v.push(t), o(t))
                }
            })
        }

        function c(e) {
            var t = l()(e).find("script[type='text/template-picture']"),
                n = t.html(),
                i = t.parent();
            return t.replaceWith(n), i[0]
        }

        function f(e) {
            n.e(5).then(n.bind(null, 33)).then(function(t) {
                t(e.getElementsByTagName("img")[0])
            })
        }

        function y(e) {
            Promise.all([n.e(6).then(n.bind(null, 93)), n.e(5).then(n.bind(null, 33))]).then(function(t) {
                var n = h(t, 2),
                    i = n[0],
                    r = n[1];
                i({
                    elements: [e]
                }), r(e.getElementsByTagName("img")[0])
            })
        }
        if (p || g ? g || (o = f) : o = y, o && !t.lazy && (v.push(e), o(e)), !i && o) {
            i = !0;
            var b = function() {
                return v.forEach(o)
            };
            l()(window).on("resize orientationchange", u.a.debounce(b, 200)), d.a.browser().msie && function(e, t) {
                t(),
                    function n() {
                        setTimeout(function() {
                            t(), e += e || 1e3, n(e)
                        }, e)
                    }()
            }(3e3, b)
        }
        t.lazy && (m ? a() : n.e(7).then(n.bind(null, 94)).then(a))
    }, {
        priority: f.b.HIGH
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(187),
        r = (n.n(i), n(188)),
        o = (n.n(r), n(189));
    n.n(o)
}, function(e, t, n) {
    e.exports = n.p + "stable/components/site/place_hero/assets/curbed-bcaa0e9121613b6cd1ff12bac87e06b3.png"
}, function(e, t, n) {
    e.exports = n.p + "stable/components/site/place_hero/assets/eater-3fb79704bf68de38080dd7bef010ec53.jpg"
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(191);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(193);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(195), n(3)),
        r = n(1),
        o = n.n(r),
        a = n(0),
        s = n.n(a),
        c = n(102),
        l = n(13),
        u = o.a.View.extend({
            events: {
                "click .c-resend-confirmation__button": "handleClick"
            },
            initialize: function(e) {
                this.$button = this.$(".c-resend-confirmation__button"), this.$message = this.$(".c-auth__message"), Object(c.a)()
            },
            handleClick: function() {
                var e = this;
                this.$button.prop("disabled", !0);
                var t = {
                    "g-recaptcha-response": this.$('[name="g-recaptcha-response"]').val()
                };
                this.fetch(t).then(function() {
                    "success" == e.messageType ? (e.$message.text("").hide(), l.a.overlay(e.message), window.setTimeout(function() {
                        window.location = "/"
                    }, 5e3)) : (e.$button.prop("disabled", !1), e.$message.text(e.message).show())
                })
            },
            fetch: function(e) {
                var t = this;
                return this._load || (this._load = s.a.Deferred(), s.a.ajax({
                    url: "/chorus_auth/initiate_resend_confirmation",
                    method: "post",
                    data: e,
                    format: "json",
                    complete: function(e) {
                        var n = JSON.parse(e.responseText);
                        t.message = n.message, t.messageType = n.message_type, t._load.resolve(), t._load = null
                    },
                    error: function() {
                        delete t._load
                    }
                })), this._load.promise()
            }
        }),
        d = u;
    i.b.registerComponent("site/resend_confirmation", function(e) {
        new d({
            el: e
        })
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(197),
        r = (n.n(i), n(198));
    n.n(r)
}, function(e, t) {}, function(e, t, n) {
    e.exports = n.p + "stable/components/site/review_label/assets/rating_star-34fd003affb080fbec576983af03cd49.svg"
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(200);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(29), n(40), n(30), n(16), n(202));
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(204),
        r = (n.n(i), n(205)),
        o = (n.n(r), n(206)),
        a = (n.n(o), n(207)),
        s = (n.n(a), n(208));
    n.n(s)
}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    e.exports = n.p + "stable/components/site/scorecard/assets/decagon-823729dd64d746d2b422f8f64b3176ba.svg"
}, function(e, t, n) {
    e.exports = n.p + "stable/components/site/scorecard/assets/venue-b010ff681f09320ec4577062349bc6b0.svg"
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(210);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(212),
        r = (n.n(i), n(213));
    n.n(r)
}, function(e, t) {}, function(e, t, n) {
    e.exports = n.p + "stable/components/site/shoppable/assets/local-asset-link-e3310ecb7c7e7b2a1d903819f3de9d45.svg"
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(215), n(3)),
        r = n(1),
        o = n.n(r),
        a = n(42),
        s = n(43),
        c = n(2),
        l = o.a.View.extend({
            initialize: function(e) {
                var t = this;
                this.opts = e, e = c.a.extend({
                    lat: 0,
                    lon: 0,
                    slug: "",
                    label: "",
                    cssClass: "c-simple-map__marker"
                }, e), Object(a.a)().then(function() {
                    t.map = new google.maps.Map(t.el, {
                        center: new google.maps.LatLng(e.lat, e.lon),
                        mapTypeControl: !1,
                        panControl: !1,
                        scrollwheel: !1,
                        streetViewControl: !1,
                        zoom: 14,
                        zoomControl: !0,
                        zoomControlOptions: {
                            position: google.maps.ControlPosition.RIGHT_CENTER
                        }
                    });
                    var n = Object(s.a)(e);
                    t.frame = n, n.setMap(t.map)
                })
            }
        }),
        u = l;
    i.b.registerComponent("site/simple_map", function(e, t) {
        new u({
            el: e,
            lat: t.lat,
            lon: t.lon
        })
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(217), n(3)),
        r = n(1),
        o = n.n(r),
        a = n(0),
        s = n.n(a),
        c = o.a.View.extend({
            currentTopic: null,
            initialize: function() {
                this.$headers = this.$(".c-sports-blog-directory__main").find("h2, h3, h4"), this.$entries = this.$(".c-sports-blog-directory__item"), this.$filter = this.$(".c-filter-list"), this.$textInput = this.$(".c-filter-list__search-input")
            },
            handleFilterChange: function(e, t) {
                var n = t.replace("#", "");
                this.$textInput.val(""), "all" === n ? this.showAll() : this.filterByTopic(n)
            },
            handleInputTextChange: function(e) {
                var t = this.$textInput.val();
                t.length < 3 ? this.currentTopic && "all" != this.currentTopic ? this.filterByTopic(this.currentTopic) : this.showAll() : this.filterByText(t)
            },
            showAll: function() {
                this.$filter.removeClass("disabled"), this.$headers.show(), this.$entries.show()
            },
            filterByTopic: function(e) {
                this.$filter.removeClass("disabled"), this.$headers.hide(), this.$entries.hide(), this.currentTopic = e, this.$("#" + e).show().nextUntil("h2").show()
            },
            filterByText: function(e) {
                this.$headers.hide(), this.$filter.addClass("disabled"), this.$entries.each(function(t, n) {
                    var i = n.hasAttribute("data-featured"),
                        r = n.innerText.toUpperCase().indexOf(e.toUpperCase()) >= 0;
                    s()(n).toggle(r && !i)
                })
            },
            events: {
                "filter .c-filter-list": "handleFilterChange",
                "keyup .c-filter-list__search-input": "handleInputTextChange"
            }
        }),
        l = c;
    i.b.registerComponent("site/sports_blog_directory", function(e, t) {
        new l({
            el: e
        })
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(29), n(40), n(16), n(219));
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(31), n(221), n(3)),
        r = n(4),
        o = n(1),
        a = n.n(o),
        s = n(0),
        c = n.n(s),
        l = n(2),
        u = a.a.View.extend({
            events: {
                site_sponsorship_logo_color_rendered: "onSiteSponsorshipLogoRender",
                site_sponsorship_logo_mobile_color_rendered: "onSiteSponsorshipLogoRender"
            },
            initialize: function() {
                var e = this,
                    t = c()(".main-social"),
                    n = c()(".c-entry-content"),
                    i = !1,
                    r = !1;
                document.addEventListener("unisonTabBarOverride", function(t) {
                    t.detail.hasOwnProperty("visibility") ? (r = !0, i = t.detail.visibility, e.toggleBarVisibility(i)) : t.detail.reset && (r = !1)
                });
                var o = c()(window).on("scroll", l.a.throttle(function() {
                    var a = o.scrollTop(),
                        s = i;
                    if (r) return !0;
                    if (window.Scroll && window.Scroll.config && window.Scroll.config.detected) return s && (i = !1, e.toggleBarVisibility(i)), !0;
                    var c = t.length ? t.offset().top : 500,
                        l = n.offset().top + n.height() - o.height();
                    i = a >= c && a <= l, s !== i && e.toggleBarVisibility(i)
                }, 400))
            },
            toggleBarVisibility: function(e) {
                this.$el.toggleClass("tab-bar-fixed", e), document.dispatchEvent(new Event("unisonTabBarVisibility", {
                    bubbles: !0,
                    detail: {
                        visible: e
                    }
                }))
            },
            onSiteSponsorshipLogoRender: function() {
                this.$el.addClass("has-site-sponsorship-logo")
            }
        }),
        d = u;
    i.b.registerComponent("site/tab_bar/index", function(e) {
        r.d.fetch().done(function() {
            new d({
                el: e
            })
        })
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(223);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(225), n(3)),
        r = n(4),
        o = n(9),
        a = n(1),
        s = n.n(a),
        c = n(226),
        l = n.n(c),
        u = n(10),
        d = n(21),
        f = n(8),
        h = s.a.View.extend({
            tos_update_id: null,
            notice_type: "privacy_policy",
            notice_element: null,
            initialize: function(e) {
                var t = this;
                this.tos_update_id = e.tos_update_id, "hat" == e.ui_format ? this.notice_element = d.a.hat(Object(u.a)(l.a)(e), !1, !1) : this.notice_element = d.a.notify(Object(u.a)(l.a)(e), !1, !1), this.notice_element.find("a, .p-button, .p-notice-dismiss").on("click", function(e) {
                    t.handleClick(e)
                })
            },
            remember: function() {
                o.b.set(this.tos_update_id, "1")
            },
            track: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : close;
                f.b.event("ppalert:click", "view", e)
            },
            handleClick: function(e) {
                e.preventDefault(), e.target.getAttribute("href") ? setTimeout(function() {
                    window.location = e.target.getAttribute("href")
                }, 100) : (this.track("privacy-agree"), this.remember(), d.a.close(this.notice_element))
            }
        }),
        p = h,
        g = "1";
    i.b.readyTask(function() {
        r.e.fetch().then(function() {
            r.e.get("tos_notifications").forEach(function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = "tos-accepted-" + e.id;
                (function() {
                    return !(!r.d.get("id") && e.applies_only_to_registered_users) && o.b.get(t) != g
                })() && (e.tos_update_id = t, e.text || (e.text = 'By clicking, you agree to the Vox Media  <a href="https://www.voxmedia.com/pages/privacy-policy">Privacy Policy</a> and <a href="https://www.voxmedia.com/pages/terms-of-use">Terms of Use</a>.'), new p(e))
            })
        })
    }, {
        priority: i.b.LOW
    })
}, function(e, t) {}, function(e, t) {
    e.exports = '<div>\n  <div class="c-privacy-policy-notification">\n    <%= data.text %> <button class="p-button" data-ui-action="privacy-agree">I agree</button>\n  </div>\n<div>\n'
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(16), n(29), n(228)),
        r = (n.n(i), n(3)),
        o = n(12);
    r.b.registerComponent("site/user_activity", function(e, t) {
        function n() {
            for (var t = e.querySelectorAll("[data-timestamp]"), n = 0; n < t.length; n++) {
                var i = t[n];
                i.innerText = o.a.relative(Number(i.getAttribute("data-timestamp")))
            }
        }
        setInterval(n, 6e4)
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(31), n(230));
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(232),
        r = (n.n(i), n(3)),
        o = n(0),
        a = n.n(o);
    r.b.registerComponent("site/user_membership_list", function(e) {
        a()(e).on("click", "[data-leave]", function(e) {
            e.preventDefault(), e.stopPropagation();
            var t = a()(e.currentTarget);
            window.confirm("Are you sure you want to leave " + t.attr("data-leave") + "?") && t.closest("form").submit()
        })
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(234),
        r = (n.n(i), n(3)),
        o = n(5),
        a = n(2),
        s = n(0),
        c = n.n(s);
    r.b.registerComponent("site/video_preview", function(e, t) {
        if (o.a.isMobile()) {
            var n = c()(e).find(".c-video-preview__image-wrapper");
            n.removeAttr("src"), r.b.get("site/video_embed").embed(n[0], t)
        } else c()(e).on("click", function(e) {
            e.preventDefault(), r.b.get("site/video_embed").modal(a.a.extend(t, {
                include_cta: !1
            }))
        })
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(236);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(238);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(240);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(242);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(244);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(246);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(248);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(250), n(3)),
        r = n(1),
        o = n.n(r),
        a = n(0),
        s = n.n(a),
        c = n(10),
        l = o.a.Collection.extend({
            reload: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (this.q !== e.q || this.community_id !== e.community_id) {
                    this.q = e.q, this.community_id = e.community_id;
                    var t = "?" + s.a.param(e);
                    history.replaceState({}, "", t), this.url = "/maps/search.json" + t, this.fetch({
                        reset: !0
                    })
                }
            }
        }),
        u = l,
        d = o.a.View.extend({
            initialize: function() {
                this.items = new u, this.listenTo(this.items, "reset", this.render)
            },
            render: function() {
                var e = this.tmpl = this.tmpl || Object(c.a)(this.$("#maps-hub-item-tmpl").html(), {
                        variable: "data"
                    }),
                    t = "";
                this.items.models.length > 0 ? this.items.models.forEach(function(n) {
                    t += e(n.attributes)
                }, this) : t = '<div class="c-maps-hub__none">No results found.</div>', this.$('[data-ui="map-items"]').html(t), s()(".c-pagination").remove()
            },
            events: {
                "submit form": "reload",
                "change select": "reload"
            },
            reload: function(e) {
                e.preventDefault();
                var t = {},
                    n = this.$('[data-ui="query"]').val(),
                    i = this.$('[data-ui="community"]').val();
                n && (t.q = n), i && (t.community_id = i), this.items.reload(t)
            }
        }),
        f = d;
    i.b.registerComponent("hub_zones/maps_hub", function(e) {
        new f({
            el: e
        })
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(252);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(254);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(256);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(258);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(260);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(262);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(264);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(266);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(268);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(270);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(272);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(274);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(276);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(278);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(280);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(282);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(284),
        r = (n.n(i), n(0)),
        o = n.n(r),
        a = n(3),
        s = n(10);
    a.b.registerComponent("snippets/jobs_list", function(e, t) {
        function i(e) {
            for (var t = [], n = 0; n < d.length; n++) d[n].test.test(e) && t.push(d[n].label);
            return t.length ? t.join(", ") : e.replace(/\sOffice/gi, "")
        }

        function r(e) {
            var t = document.location.search;
            return t.length && (e = e + (e.indexOf("?") > -1 ? "&" : "?") + t.slice(1)), e
        }

        function a(t) {
            function n(e, i) {
                if (null == e.parent_id) return e;
                var r = t.departments.find(function(t) {
                    return e.parent_id == t.id
                });
                return r && null == r.parent_id ? r : n(r, i)
            }
            var a = [];
            t.departments.forEach(function(e) {
                var o = n(e, t.departments),
                    s = (o ? o.name : e.name).trim();
                if ("Editorial" == s && (s = e.name.trim()), (!l.length || l.indexOf(s) > -1) && e.jobs.length) {
                    var c = e.jobs.map(function(e) {
                            return {
                                title: e.title,
                                location: i(e.location.name),
                                url: r(e.absolute_url)
                            }
                        }),
                        d = a.map(function(e) {
                            return e.name
                        }).indexOf(s);
                    d >= 0 ? a[d].jobs = a[d].jobs.concat(c) : a.push({
                        id: s.replace(".com", "dot com").split(/\W+/).join("-").toLowerCase(),
                        name: s,
                        promote: u.indexOf(s) > -1,
                        jobs: c
                    })
                }
            }), a.sort(function(e, t) {
                return e.promote && !t.promote ? -1 : !e.promote && t.promote ? 1 : e.name.localeCompare(t.name)
            }), o()(e).find("#jobs-list").html(Object(s.a)(c)({
                departments: a
            })), requestAnimationFrame(function() {
                var e = o()(location.hash);
                e.length && o()("html,body").animate({
                    scrollTop: e.offset().top
                }, 1e3)
            })
        }
        var c = n(285),
            l = t.filter || [],
            u = t.promote || [],
            d = [{
                test: /New York|\bNYC?\b/,
                label: "NY"
            }, {
                test: /Washington|\bDC\b/,
                label: "DC"
            }, {
                test: /San Francisco|\bSF\b/,
                label: "SF"
            }, {
                test: /Los Angeles|\bLA\b/,
                label: "LA"
            }, {
                test: /Austin/,
                label: "Austin"
            }, {
                test: /Chicago/,
                label: "Chicago"
            }, {
                test: /Remote/i,
                label: "Remote"
            }];
        o.a.getJSON("https://api.greenhouse.io/v1/boards/voxmedia/embed/departments?callback=?", a)
    })
}, function(e, t) {}, function(e, t) {
    e.exports = '<% data.departments.forEach(function(department) { %>\n<h2 id="<%= department.id %>"><%= department.name %></h2>\n<ul class="c-jobs__list">\n  <% department.jobs.forEach(function(job) { %>\n  <li>\n    <a href="<%= job.url %>"><%= job.title %></a>\n    <span><%= job.location %></span>\n  </li>\n  <% }) %>\n</ul>\n<% }) %>\n'
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(287);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(289), n(3)),
        r = n(1),
        o = n.n(r),
        a = n(17),
        s = o.a.View.extend({
            index: 0,
            inTransition: !1,
            timer: null,
            cycleInterval: 8e3,
            initialize: function() {
                this.$items = this.$("li"), this.$pager = this.$('[data-ui="pager"]');
                var e = "";
                this.$items.each(function(t) {
                    e += '<span data-to="' + t + '"></span>'
                }), this.$pager.html(e), this.updatePage();
                var t = this,
                    n = setTimeout(function() {
                        t.setMinHeight(), clearTimeout(n)
                    }, 500);
                this.timer = setTimeout(function() {
                    t.advance(1)
                }, this.cycleInterval), this.startTimer()
            },
            stopTimer: function() {
                clearTimeout(this.timer)
            },
            startTimer: function() {
                this.stopTimer();
                var e = this;
                this.timer = setTimeout(function() {
                    e.advance(1)
                }, this.cycleInterval)
            },
            advance: function(e) {
                if (e && !this.inTransition) {
                    this.stopTimer();
                    var t = this.index,
                        n = t + e,
                        i = this.$items.length - 1,
                        r = e < 0,
                        o = ["offscreen-left", "offscreen-right"],
                        s = r ? o[0] : o[1],
                        c = r ? o[1] : o[0],
                        l = this;
                    n > i ? n = 0 : n < 0 && (n = i);
                    var u = this.$items.eq(t),
                        d = this.$items.eq(n).addClass(s).css("display", "block");
                    setTimeout(function() {
                        d.removeClass(s), u.one(a.a, function() {
                            u.hide().removeClass(c), l.inTransition = !1
                        }).addClass(c), l.setMinHeight(d)
                    }, 0), this.inTransition = !0, this.index = n, this.updatePage(), this.startTimer()
                }
            },
            setMinHeight: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                e || (e = this.$el.find(".c-pullquotes-list__quote").first());
                var t = e.height() + 100;
                this.$el.height() < t && this.$el.height(t)
            },
            to: function(e) {
                this.advance(e - this.index)
            },
            updatePage: function() {
                this.$pager.children().removeClass("active").eq(this.index).addClass("active")
            },
            events: {
                "click [data-advance]": "onAdvance",
                "click [data-to]": "onTo"
            },
            onAdvance: function(e) {
                e.preventDefault(), this.advance(this.$(e.currentTarget).data("advance"))
            },
            onTo: function(e) {
                e.preventDefault(), this.to(this.$(e.currentTarget).data("to"))
            }
        }),
        c = s;
    i.b.registerComponent("snippets/pullquote_list", function(e) {
        new c({
            el: e
        })
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(291);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(293);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(295);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(297), n(3)),
        r = n(1),
        o = n.n(r),
        a = o.a.View.extend({
            initialize: function() {
                this.index = 0
            },
            toggleMedia: function(e) {
                this.$(e.currentTarget).addClass("active").siblings().removeClass("active"), this.index = this.$(e.currentTarget).data("index"), this.$('[data-media="' + this.index + '"]').addClass("visible").siblings().removeClass("visible")
            },
            events: {
                'click [data-ui="toggle_media"]': "toggleMedia"
            }
        }),
        s = a;
    i.b.registerComponent("snippets/showcase", function(e) {
        new s({
            el: e
        })
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(299);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(301);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(303);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(305);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(307);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(16), n(309)),
        r = (n.n(i), n(3)),
        o = n(5),
        a = n(0),
        s = n.n(a);
    r.b.registerComponent("sidebar_rocks/link_list/video_entry", function(e, t) {
        if (o.a.isMobile()) {
            var n = s()(e).find(".c-rock-list__image");
            n.removeAttr("src"), r.b.get("site/video_embed").embed(n[0], t)
        } else s()(e).on("click", ".c-rock-list__image", function(e) {
            e.preventDefault(), r.b.get("site/video_embed").modal(t)
        })
    }, {
        waitForConsent: !0
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(311);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(313);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(315);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(16), n(29), n(30), n(95), n(317));
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(319);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(321);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(323);
    n.n(i);
    n(3).b.registerComponent("breakers/podcast_player", function(e) {
        ! function() {
            function t() {
                o.classList.remove("c-podcast-player__title-subscribe--popover-hidden")
            }

            function n() {
                o.classList.add("c-podcast-player__title-subscribe--popover-hidden")
            }

            function i() {
                o.classList.contains("c-podcast-player__title-subscribe--popover-hidden") ? t() : n()
            }
            var r = e.querySelector(".c-podcast-player__title-subscribe"),
                o = e.querySelector(".c-podcast-player__title-subscribe--popover");
            r.addEventListener("click", i)
        }()
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(325);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(327);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(16), n(39), n(329));
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(331);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(333);
    n.n(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(335), n(3)),
        r = n(1),
        o = n.n(r),
        a = n(0),
        s = n.n(a),
        c = o.a.View.extend({
            initialize: function() {
                var e = this;
                if (!(this.$el.prev(".c-place-embed").length > 0)) {
                    var t = this.adjacentSiblings();
                    if (!(t.length < 3)) {
                        var n = s()('<div class="c-place-embed__carousel"><div class="c-place-embed__carousel-next"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-right"></use></svg></div><div class="c-place-embed__carousel-prev"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-left"></use></svg></div></div>');
                        n.on("click", ".c-place-embed__carousel-next", function() {
                            e.moveCarousel(n, 1)
                        }), n.on("click", ".c-place-embed__carousel-prev", function() {
                            e.moveCarousel(n, -1)
                        }), this.$el.before(n), n.append(t), n.data({
                            "carousel-panes": t.length,
                            "carousel-current": 1
                        })
                    }
                }
            },
            moveCarousel: function(e, t) {
                var n = e.data("carousel-panes"),
                    i = parseInt(e.data("carousel-current")),
                    r = i + t;
                r < 1 && (r = n), r > n && (r = 1), e.data("carousel-current", r), e.find(".c-place-embed").css({
                    transform: "translateX(-" + 100 * (r - 1) + "%)"
                })
            },
            adjacentSiblings: function() {
                for (var e = s()().add(this.$el), t = this.$el.next(".c-place-embed"); t.length > 0;) e = e.add(t), t = t.next(".c-place-embed");
                return e
            }
        }),
        l = c;
    i.b.registerComponent("embeds/place", function(e, t) {
        new l({
            el: e
        })
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        this.model = new g(t), this.surveyFormView = new h({
            el: e,
            model: this.model
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = (n(337), n(3)),
        o = n(1),
        a = n.n(o),
        s = {
            isAdBlockEnabled: function() {
                var e = document.createElement("div");
                return e.innerHTML = "&nbsp;", e.className = "adsbox", document.body.appendChild(e), this._isAdBlockEnabled = 0 === e.offsetHeight, e.parentNode.removeChild(e), this._isAdBlockEnabled
            }
        },
        c = n(9),
        l = n(10),
        u = n(338),
        d = n.n(u),
        f = a.a.View.extend({
            template: Object(l.a)(d.a),
            html: "",
            events: {
                'click input[type="submit"]': "submit"
            },
            storageKey: "ad-survey-taken",
            initialize: function(e) {
                this.model = e.model, "yes" !== c.b.get(this.storageKey) && s.isAdBlockEnabled() && this.render()
            },
            render: function() {
                return this.$el.html(this.template({
                    responses: this.model.responses
                })), this.$el
            },
            submit: function(e) {
                c.b.set(this.storageKey, "yes"), this.$el.remove()
            }
        }),
        h = f,
        p = a.a.Model.extend({
            responses: [],
            initialize: function(e) {
                if (e.ad_survey_running)
                    for (var t, n = e.responses || [], i = 0; i < n.length; i++) t = n[i], this.responses.push({
                        text: t,
                        value: this.parameterize(t)
                    })
            },
            parameterize: function(e) {
                return e.trim().replace(/[^a-zA-Z0-9-\s]/g, "").replace(/[^a-zA-Z0-9-]/g, "-").toLowerCase()
            }
        }),
        g = p,
        m = i;
    r.b.registerComponent("apps/ad_survey", function(e, t) {
        new m(e, t)
    })
}, function(e, t) {}, function(e, t) {
    e.exports = '<div class="c-ad-survey__form">\n  <div class="c-ad-survey__form-intro">\n    <p class="c-ad-survey__form-logo">Vox Media User Survey</p>\n    <h2 class="c-ad-survey__form-header">Help us improve our ads by sharing the primary reason(s) you use an ad blocker:</h2>\n    <p class="c-ad-survey__form-help">Check all that apply</p>\n  </div>\n\n  <div class="c-ad-survey__form-body">\n    <form method="post" action="/surveys/ad">\n      <% data.responses.forEach(function(response, index) { %>\n        <label class="c-ad-survey__form-label">\n          <input class="c-ad-survey__form-checkbox p-checkbox" type="checkbox" name="reason_<%= index %>" id="reason_<%= index %>" value="<%= response.value %>"/>\n          <%= response.text %>\n        </label>\n      <% }) %>\n\n      <label class="c-ad-survey__form-label">\n        <input class="c-ad-survey__form-checkbox p-checkbox" type="checkbox" name="reason_6" id="reason_6" value="other"/>\n        Other\n      </label>\n\n      <textarea class="c-ad-survey__form-textarea p-textarea" name="details" placeholder="Type your reason(s) here"></textarea>\n\n      <input class="c-ad-survey__form-submit p-button" type="submit" value="Submit Response">\n      <p class="c-ad-survey__form-help u-centered">All responses are anonymous</p>\n    </form>\n  </div>\n\n</div>\n'
}, function(e, t, n) {
    "use strict";

    function i(e) {
        this.app = e.app, c()(window).on("resize", f.a.debounce(this.update.bind(this), 200)).on("orientationchange", this.update.bind(this))
    }

    function r(e) {
        this.app = e.app, this.enable()
    }

    function o(e, t) {
        var n = {
            app: this
        };
        this.images = new l.a(this.collectImageData(e)), t.routing && (this.router = new C(n)), t.keyboard && (this.keyboard = new T(n)), this.resizer = new x(n), this.galleryView = new A({
            el: e,
            app: this
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = (n(340), n(3)),
        s = n(0),
        c = n.n(s),
        l = n(85),
        u = n(1),
        d = n.n(u),
        f = n(2),
        h = n(17),
        p = n(7),
        g = n(13),
        m = n(10),
        v = n(341),
        y = n.n(v),
        b = d.a.View.extend({
            className: "c-image-gallery__grid",
            render: function() {
                return this.tmpl = this.tmpl || Object(m.a)(y.a), this.$el.html(this.tmpl({
                    images: this.collection.toJSON(),
                    index: 0
                })), this.$el.find('[data-index="' + this.collection.selectedIndex() + '"]').addClass("active"), this.$el
            },
            events: {
                "click [data-index]": "thumb"
            },
            thumb: function(e) {
                e.preventDefault();
                var t = this.$(e.currentTarget).data("index");
                this.collection.selectByIndex(t), g.a.close()
            }
        }),
        _ = b,
        w = d.a.View.extend({
            initialize: function(e) {
                var t = this;
                this.app = e.app, this.images = e.app.images, this.requestSizedImages(), this.$scroller = this.$('[data-ui="scroller"]').removeClass("noscript-accessible"), this.$thumbs = this.$('[data-ui="thumb"]'), this.$thumb = this.$thumbs.eq(0).closest("li"), this.$reel = this.$thumb.closest("ul"), p.a.trackElement(this.el, function() {
                    t.loadThumbs(), t.render()
                }, -.5), this.listenTo(this.images, "selection", this.render)
            },
            requestSizedImages: function() {
                var e = this.$('[data-ui="viewer"]'),
                    t = e.width(),
                    n = e.height();
                this.images.models.forEach(function(e) {
                    e.requestSize(t, n)
                })
            },
            loadThumbs: function() {
                var e = this;
                this.$thumbs.each(function(t, n) {
                    n.style.backgroundImage = "url(" + e.images.at(t).get("thumb_url") + ")"
                })
            },
            wait: function(e) {
                e && !this.$loader ? (this.$loader = c()('<div class="p-loader"></div>'), this.$('[data-ui="viewer"]').append(this.$loader)) : !e && this.$loader && (this.$loader.remove(), this.$loader = null)
            },
            render: f.a.debounce(function() {
                function e() {
                    if (!(++i < 2)) {
                        var e = c()(o);
                        n.replaceWith(e), setTimeout(function() {
                            e.addClass("present"), r.wait(!1)
                        }, 0)
                    }
                }
                var t = this.images.selectedImage();
                if (t) {
                    var n = this.$('[data-ui="viewer"] img'),
                        i = 0,
                        r = this,
                        o = new Image;
                    return o.onload = e, o.src = t.fullsizeURL(), h.a && n.hasClass("present") ? n.one(h.a, e).removeClass("present") : e(), this.wait(!0), this.renderMeta(), this.renderThumbs(), this.$el
                }
            }, 25),
            renderMeta: function() {
                this.$i = this.$i || this.$('[data-ui="index"]'), this.$c = this.$c || this.$('[data-ui="caption"]');
                var e = this.images.selectedIndex() + 1,
                    t = this.images.length;
                this.$i.html(e + " of " + t);
                var n = this.images.selectedImage(),
                    i = "";
                if (n) {
                    var r = n.get("title"),
                        o = n.get("caption");
                    r && (i += '<span class="c-image-gallery__caption--title">' + r + "</span> "), o && (i += o)
                }
                this.$c.html(i)
            },
            renderThumbs: function() {
                var e, t = this.images.selectedIndex(),
                    n = parseInt(this.$thumb.css("marginRight")),
                    i = this.$thumb.width() + n,
                    r = this.$thumbs.length * i - n,
                    o = this.$scroller.width(),
                    a = r - o;
                this.$thumbs.each(function() {
                    var e = c()(this);
                    e.toggleClass("active", e.data("index") == t)
                }), r < o ? e = (o - r) / 2 : (e = t * i + i / 2 - o / 2, e = -Math.round(Math.max(0, Math.min(e, a)))), this.$reel.width(r).css("transform", "translateX(" + e + "px)"), this._x = e, this.setThumbPage({
                    extent: r,
                    range: o
                })
            },
            setThumbPage: function(e) {
                var t = e.extent || this.$reel.width(),
                    n = e.range || this.$scroller.width(),
                    i = t - n,
                    r = Math.abs(this._x || 0),
                    o = this.$('[data-ui="prev-page"]'),
                    a = this.$('[data-ui="next-page"]');
                if (t < n) return o.prop("disabled", !0), void a.prop("disabled", !0);
                if (e.page) {
                    r = Math.max(0, Math.min(r + n / 1.25 * e.page, i));
                    var s = this.$thumb.width();
                    e.page < 0 && r < s ? r = 0 : e.page > 0 && i - r < s && (r = i), this.$reel.css("transform", "translateX(-" + r + "px)"), this._x = -r
                }
                o.prop("disabled", 0 === r), a.prop("disabled", r === i)
            },
            events: {
                'click [data-ui="prev-image"]': "prevImg",
                'click [data-ui="next-image"]': "nextImg",
                'click [data-ui="prev-page"]': "prevPage",
                'click [data-ui="next-page"]': "nextPage",
                'click [data-ui="expand"]': "toggleFullScreen",
                'click [data-ui="thumb"]': "thumb",
                'click [data-ui="grid"]': "grid"
            },
            prevImg: function(e) {
                e.preventDefault(), this.images.previous()
            },
            nextImg: function(e) {
                e.preventDefault(), this.images.next()
            },
            prevPage: function(e) {
                e.preventDefault(), this.setThumbPage({
                    page: -1
                })
            },
            nextPage: function(e) {
                e.preventDefault(), this.setThumbPage({
                    page: 1
                })
            },
            thumb: function(e) {
                e.preventDefault();
                var t = c()(e.currentTarget).data("index");
                this.images.selectByIndex(t)
            },
            grid: function(e) {
                e.preventDefault();
                var t = new _({
                    collection: this.images
                });
                g.a.dialog(t.render())
            },
            toggleFullScreen: function(e) {
                e.preventDefault();
                var t = !this.$el.hasClass("full-screen");
                this.$(".c-image-gallery__viewer-expand svg use").attr("xlink:href", t ? "#icon-full-screen-exit" : "#icon-full-screen"), this.$(".c-image-gallery__viewer-expand-text").html(t ? "collapse" : "expand"), this.$el.toggleClass("full-screen expanded", t), c()("body").toggleClass("gallery-full-screen", t)
            }
        }),
        A = w;
    i.prototype = {
        update: function() {
            this.app.galleryView.renderThumbs()
        }
    };
    var x = i,
        k = d.a.Router.extend({
            initialize: function(e) {
                var t = this;
                this.app = e.app, this.listenTo(this.app.images, "selection", this.push), setTimeout(function() {
                    t.push()
                }, 1e3), window.top !== window || d.a.History.started || d.a.history.start()
            },
            routes: {
                ":slug": "pull"
            },
            pull: function(e) {
                this.app.images.selectBySlug(e)
            },
            push: function() {
                var e = this.app.images.selectedImage();
                this.navigate(e.get("slug"))
            }
        }),
        C = k;
    r.prototype = {
        ns: "keydown.gallery",
        enable: function() {
            var e = this;
            this.disable().on(this.ns, function(t) {
                switch (t.keyCode) {
                    case 37:
                        return e.app.images.previous();
                    case 39:
                        return e.app.images.next()
                }
            })
        },
        disable: function() {
            return c()(document).off(this.ns)
        }
    };
    var T = r;
    o.prototype = {
        collectImageData: function(e) {
            var t = [];
            return c()(e).find('[data-ui="thumb"]').each(function() {
                var e = c()(this),
                    n = e.find("noscript").text();
                t.push({
                    asset_id: e.data("asset"),
                    slug: e.attr("data-slug"),
                    caption: f.a.unescape(e.find(".c-image-gallery__thumb-desc").html()),
                    title: f.a.unescape(e.find(".c-image-gallery__thumb-title").html()),
                    thumb_url: n.replace(/.*src="([^"]*)".*/, "$1"),
                    image_url: e.find("a").first().attr("href")
                })
            }), t
        }
    };
    var E = o;
    a.b.registerComponent("apps/image_gallery", function(e, t) {
        new E(e, t)
    })
}, function(e, t) {}, function(e, t) {
    e.exports = '<ul>\n  <% data.images.forEach(function(image) { %>\n  <li>\n    <a href="<%= image.image_url %>" data-ui="thumb" data-index="<%= data.index++ %>">\n      <img src="<%= image.thumb_url %>" alt="">\n    </a>\n  </li>\n  <% }) %>\n</ul>\n'
}, function(e, t, n) {
    "use strict";

    function i(e) {
        var t = this,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.model = new l, this.view = new v({
            el: e,
            model: this.model
        }), x(n, e).then(function(e) {
            e && e.links && e.links.length > 0 ? (t.model.head = e.head, t.model.reset(e.links)) : e && e.length > 0 && t.model.reset(e)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = (n(343), n(3)),
        o = n(1),
        a = n.n(o),
        s = a.a.Model.extend({
            defaults: {
                title: null,
                url: null
            }
        }),
        c = a.a.Collection.extend({
            model: s,
            initialize: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.head = t.head || null, e && e.links && this.reset(e.links)
            }
        }),
        l = c,
        u = n(10),
        d = n(344),
        f = n.n(d),
        h = n(8),
        p = n(0),
        g = n.n(p),
        m = a.a.View.extend({
            template: Object(u.a)(f.a),
            initialize: function(e) {
                var t = this;
                this.model = e.model, this.listenTo(this.model, "reset", function() {
                    t.render()
                })
            },
            render: function() {
                return this.$(".c-related-list ul .dynamically-inserted").remove(), this.model.head && this.$("h2.c-related-list__head").html(this.model.head), this.$(".c-related-list ul").prepend(this.template(this.model.toJSON())), this.$(".c-related-list ul a[data-delayed-analytics-link], .c-related-list ul a[data-delayed-analytics-viewport], .c-related-list ul a[data-vars-analytics-link-title]").each(function(e) {
                    var t = g()(e);
                    t.attr("data-analytics-link", t.attr("data-delayed-analytics-link")), t.attr("data-analytics-viewport", t.attr("data-delayed-analytics-viewport")), t.attr("data-vars-analytics-link-title", t.attr("data-delayed-vars-analytics-link-title"))
                }), h.b.trackImpressions(this.el), this.el
            }
        }),
        v = m,
        y = (n(6), n(4)),
        b = g.a.Deferred(),
        _ = function(e) {
            return "" + e.experiment_base_url + e.experiment_id + "/" + y.a.get("id") + "/" + e.variant_id + "/" + e.entry_id + ".json"
        },
        w = function(e, t) {
            var n = g()(t);
            y.a.fetch().then(function() {
                var t = window.setTimeout(function() {
                        return clearInterval(i), A(e)
                    }, 4e3),
                    i = window.setInterval(function() {
                        var r = n.attr("data-experiment-alt"),
                            o = window.dataLayer.hide.end;
                        if (r || null === o) return clearTimeout(t), clearInterval(i), e.variant_id = r, A(e)
                    }, 100)
            })
        },
        A = function(e) {
            if (!e.experiment_id || !e.variant_id) return void b.resolve(e.dynamic_links);
            g.a.ajax({
                url: _(e),
                method: "get",
                format: "json",
                complete: function(t) {
                    if (!t.responseText) return void b.resolve(e.dynamic_links);
                    try {
                        b.resolve(JSON.parse(t.responseText))
                    } catch (t) {
                        b.resolve(e.dynamic_links), console.error(t)
                    }
                },
                error: function() {
                    b.resolve(e.dynamic_links)
                }
            })
        },
        x = function(e, t) {
            return w(e, t), b.promise()
        },
        k = i;
    r.b.registerComponent("apps/nextclick", function(e, t) {
        new k(e, t)
    })
}, function(e, t) {}, function(e, t) {
    e.exports = '<% data.forEach(function(link) { %>\n<li>\n  <% if (link.cross_community_label) { %>\n    <span class="c-related-list__eyebrow">\n      <%= data.cross_community_label %>\n    </span>\n  <% } %>\n  <a\n    data-analytics-link="<%= link["data-analytics-link"] %>"\n    data-analytics-viewport="<%= link["data-analytics-viewport"] %>"\n    data-vars-analytics-link-title="<%= link["data-vars-analytics-link-title"] %>"\n    href="<%= link.url %>">\n    <%= link.title %>\n  </a>\n</li>\n<% }) %>\n'
}, function(e, t, n) {
    "use strict";

    function i() {
        return r = r || n.e(9).then(n.bind(null, 693))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o = n(346),
        a = (n.n(o), n(6)),
        s = (n.n(a), n(3));
    s.b.registerComponent("apps/poll", function(e, t) {
        i().then(function(n) {
            return new n.default(e, t)
        })
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";

    function i() {
        return r = r || n.e(8).then(n.bind(null, 694))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o = n(348),
        a = (n.n(o), n(6)),
        s = (n.n(a), n(3));
    s.b.registerComponent("apps/scoreboard", function(e, t) {
        i().then(function(n) {
            return new n.default(e, t)
        })
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";

    function i() {
        return r = r || n.e(10).then(n.bind(null, 695))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o = n(350),
        a = (n.n(o), n(6)),
        s = (n.n(a), n(3));
    s.b.registerComponent("apps/interactive_table", function(e, t) {
        i().then(function(n) {
            return new n.default({
                el: e,
                opts: t
            })
        })
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (n(352), n(3)),
        r = n(1),
        o = n.n(r),
        a = n(2),
        s = n(0),
        c = n.n(s),
        l = n(4),
        u = n(7),
        d = n(13),
        f = o.a.View.extend({
            initialize: function() {
                l.d.fetch().then(function() {
                    l.d.get("can_admin") && c()(".c-buying-guide__item_title").each(function(e) {
                        c()(this).append('<a data-entry-admin="' + e + '" href=""><svg class="is-active"><use xlink:href="#icon-settings"></use></svg></a>')
                    })
                }), this.pullUrl(), this.applyFilters(), this.showModal()
            },
            showModal: function() {
                var e = a.a.deparamitize(location.search);
                "item" in e && null != e.item && d.a.dialog(c()("#buying_guide_item_" + e.item))
            },
            pullUrl: function() {
                var e = this;
                this.filters = {};
                var t = a.a.deparamitize(location.search);
                Object.keys(t).forEach(function(n) {
                    var i = t[n].split("+").map(decodeURIComponent);
                    /^filter/.test(n) && i.length && (e.filters[n] = i)
                })
            },
            pushUrl: function() {
                var e = this,
                    t = Object.keys(this.filters).map(function(t) {
                        return e.filters[t].length ? t + "=" + e.filters[t].map(encodeURIComponent).join("+") : null
                    }).filter(function(e) {
                        return !!e
                    });
                t = t.length ? "?" + t.join("&") : "", history.replaceState(this.filters, document.title, location.href.split("?")[0] + t)
            },
            applyFilters: a.a.debounce(function() {
                var e = this.filters,
                    t = this.$(".c-buying-guide__items"),
                    n = t.children().get().map(function(e) {
                        return e.id
                    }),
                    i = 0;
                Object.keys(e).forEach(function(r) {
                    if (i += e[r].length, e[r].length) {
                        var o = e[r].map(function(e) {
                                return "[data-" + r + "~='" + e + "']"
                            }).join(","),
                            a = t.find(o).get().map(function(e) {
                                return e.id
                            });
                        n = n.filter(function(e) {
                            return a.indexOf(e) > -1
                        })
                    }
                }), i ? t.children().hide().filter(n.map(function(e) {
                    return "#" + e
                }).join(",")).show() : t.children().show(), this.$("[data-filter-id]").each(function() {
                    var t = c()(this),
                        n = t.data("filter-id"),
                        i = t.data("filter-value"),
                        r = e[n] && e[n].indexOf(i) > -1;
                    t.toggleClass("selected", !!r)
                }), requestAnimationFrame(function() {
                    return u.a.callElementsInViewport()
                }), this.pushUrl()
            }, 50),
            events: {
                "click [data-filter-id]": "onFilter",
                "click [data-entry-admin]": "shareLink"
            },
            onFilter: function(e) {
                var t = e.currentTarget,
                    n = t.getAttribute("data-filter-id"),
                    i = this.filters[n] = this.filters[n] || [],
                    r = t.getAttribute("data-filter-value"),
                    o = i.indexOf(r);
                o > -1 ? i.splice(o, 1) : i.push(r), this.applyFilters()
            },
            shareLink: function(e) {
                e.preventDefault(), d.a.dialog('<h4>Sharing URL</h4><input disabled="disabled" readonly type="text" size="75" value="' + window.location.href.split("?")[0] + "?item=" + e.currentTarget.getAttribute("data-entry-admin") + '"/>')
            }
        }),
        h = f;
    i.b.registerComponent("apps/buying_guide", function(e, t) {
        new h({
            el: e
        })
    })
}, function(e, t) {}, function(e, t, n) {
    "use strict";

    function i(e) {
        this.el = e, e.addEventListener("mousemove", r.bind(this)), e.addEventListener("touchstart", r.bind(this)), e.addEventListener("touchmove", r.bind(this))
    }

    function r(e) {
        var t = this.el.querySelector(".c-imageslider__image--right"),
            n = t.getBoundingClientRect(),
            i = n.left,
            r = n.width,
            o = "mousemove" == e.type ? e.pageX : e.changedTouches[0].pageX,
            a = (o - i) / r * 100;
        a < 100 && a > 0 && (this.el.querySelector(".c-imageslider__image--left").style.width = a + "%", this.el.querySelector(".c-imageslider__handle").style.left = a + "%")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    n(354);
    n(3).b.registerComponent("apps/imageslider", function(e) {
        new i(e)
    })
}, function(e, t) {}, function(e, t) {}]);
//# sourceMappingURL=chorus-753a948b363e90a9b825.js.map