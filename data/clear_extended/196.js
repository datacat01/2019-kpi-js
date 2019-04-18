$_mod.main("/jquery$3.2.1", "dist/jquery");
$_mod.def("/jquery$3.2.1/dist/jquery", function(la, Gc, aa) {
    var B = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(p) {
            return typeof p
        } : function(p) {
            return p && "function" === typeof Symbol && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p
        },
        la = "undefined" !== typeof window ? window : this,
        ka = function(p, la) {
            function aa(c, d) {
                var d = d || r,
                    a = d.createElement("script");
                a.text = c;
                d.head.appendChild(a).parentNode.removeChild(a)
            }

            function ka(m) {
                var d = !!m && "length" in m && m.length,
                    a = c.type(m);
                return "function" === a || c.isWindow(m) ? !1 : "array" === a || 0 === d || "number" === typeof d && 0 < d && d - 1 in m
            }

            function P(c, d) {
                return c.nodeName && c.nodeName.toLowerCase() === d.toLowerCase()
            }

            function cb(m, d, a) {
                if (c.isFunction(d)) return c.grep(m, function(b, e) {
                    return !!d.call(b, e, b) !== a
                });
                if (d.nodeType) return c.grep(m, function(b) {
                    return b === d !== a
                });
                if ("string" !== typeof d) return c.grep(m, function(b) {
                    return -1 < va.call(d, b) !== a
                });
                if (Hc.test(d)) return c.filter(d, m, a);
                d = c.filter(d, m);
                return c.grep(m, function(b) {
                    return -1 < va.call(d,
                        b) !== a && 1 === b.nodeType
                })
            }

            function zb(c, d) {
                for (;
                    (c = c[d]) && 1 !== c.nodeType;);
                return c
            }

            function ma(c) {
                return c
            }

            function Fa(c) {
                throw c;
            }

            function Ab(m, d, a, b) {
                var e;
                try {
                    m && c.isFunction(e = m.promise) ? e.call(m).done(d).fail(a) : m && c.isFunction(e = m.then) ? e.call(m, d, a) : d.apply(void 0, [m].slice(b))
                } catch (f) {
                    a.apply(void 0, [f])
                }
            }

            function Ga() {
                r.removeEventListener("DOMContentLoaded", Ga);
                p.removeEventListener("load", Ga);
                c.ready()
            }

            function wa() {
                this.expando = c.expando + wa.uid++
            }

            function Bb(c, d, a) {
                if (void 0 === a && 1 ===
                    c.nodeType)
                    if (a = "data-" + d.replace(Ic, "-$&").toLowerCase(), a = c.getAttribute(a), "string" === typeof a) {
                        try {
                            a = "true" === a ? !0 : "false" === a ? !1 : "null" === a ? null : a === +a + "" ? +a : Jc.test(a) ? JSON.parse(a) : a
                        } catch (b) {}
                        D.set(c, d, a)
                    } else a = void 0;
                return a
            }

            function Cb(m, d, a, b) {
                var e, f = 1,
                    g = 20,
                    h = b ? function() {
                        return b.cur()
                    } : function() {
                        return c.css(m, d, "")
                    },
                    i = h(),
                    j = a && a[3] || (c.cssNumber[d] ? "" : "px"),
                    k = (c.cssNumber[d] || "px" !== j && +i) && xa.exec(c.css(m, d));
                if (k && k[3] !== j) {
                    j = j || k[3];
                    a = a || [];
                    k = +i || 1;
                    do f = f || ".5", k /= f, c.style(m,
                        d, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
                }
                a && (k = +k || +i || 0, e = a[1] ? k + (a[1] + 1) * a[2] : +a[2], b && (b.unit = j, b.start = k, b.end = e));
                return e
            }

            function na(m, d) {
                for (var a, b, e = [], f = 0, g = m.length; f < g; f++)
                    if (b = m[f], b.style)
                        if (a = b.style.display, d) {
                            if ("none" === a && (e[f] = s.get(b, "display") || null, e[f] || (b.style.display = "")), "" === b.style.display && Ha(b)) {
                                a = e;
                                var h = f;
                                var i = void 0,
                                    i = b.ownerDocument;
                                b = b.nodeName;
                                var j = Db[b];
                                j || (i = i.body.appendChild(i.createElement(b)), j = c.css(i, "display"), i.parentNode.removeChild(i), "none" === j &&
                                    (j = "block"), Db[b] = j);
                                b = j;
                                a[h] = b
                            }
                        } else "none" !== a && (e[f] = "none", s.set(b, "display", a));
                for (f = 0; f < g; f++) null != e[f] && (m[f].style.display = e[f]);
                return m
            }

            function C(m, d) {
                var a;
                a = "undefined" !== typeof m.getElementsByTagName ? m.getElementsByTagName(d || "*") : "undefined" !== typeof m.querySelectorAll ? m.querySelectorAll(d || "*") : [];
                return void 0 === d || d && P(m, d) ? c.merge([m], a) : a
            }

            function db(c, d) {
                for (var a = 0, b = c.length; a < b; a++) s.set(c[a], "globalEval", !d || s.get(d[a], "globalEval"))
            }

            function Eb(m, d, a, b, e) {
                for (var f, g, h,
                        i = d.createDocumentFragment(), j = [], k = 0, n = m.length; k < n; k++)
                    if ((f = m[k]) || 0 === f)
                        if ("object" === c.type(f)) c.merge(j, f.nodeType ? [f] : f);
                        else if (Kc.test(f)) {
                    g = g || i.appendChild(d.createElement("div"));
                    h = (Fb.exec(f) || ["", ""])[1].toLowerCase();
                    h = H[h] || H._default;
                    g.innerHTML = h[1] + c.htmlPrefilter(f) + h[2];
                    for (h = h[0]; h--;) g = g.lastChild;
                    c.merge(j, g.childNodes);
                    g = i.firstChild;
                    g.textContent = ""
                } else j.push(d.createTextNode(f));
                i.textContent = "";
                for (k = 0; f = j[k++];)
                    if (b && -1 < c.inArray(f, b)) e && e.push(f);
                    else if (m = c.contains(f.ownerDocument,
                        f), g = C(i.appendChild(f), "script"), m && db(g), a)
                    for (h = 0; f = g[h++];) Gb.test(f.type || "") && a.push(f);
                return i
            }

            function Ia() {
                return !0
            }

            function oa() {
                return !1
            }

            function Hb() {
                try {
                    return r.activeElement
                } catch (c) {}
            }

            function eb(m, d, a, b, e, f) {
                var g, h;
                if ("object" === ("undefined" === typeof d ? "undefined" : B(d))) {
                    "string" !== typeof a && (b = b || a, a = void 0);
                    for (h in d) eb(m, h, a, b, d[h], f);
                    return m
                }
                null == b && null == e ? (e = a, b = a = void 0) : null == e && ("string" === typeof a ? (e = b, b = void 0) : (e = b, b = a, a = void 0));
                if (!1 === e) e = oa;
                else if (!e) return m;
                1 === f && (g = e, e = function(a) {
                    c().off(a);
                    return g.apply(this, arguments)
                }, e.guid = g.guid || (g.guid = c.guid++));
                return m.each(function() {
                    c.event.add(this, d, e, b, a)
                })
            }

            function Ib(m, d) {
                return P(m, "table") && P(11 !== d.nodeType ? d : d.firstChild, "tr") ? c(">tbody", m)[0] || m : m
            }

            function Lc(c) {
                c.type = (null !== c.getAttribute("type")) + "/" + c.type;
                return c
            }

            function Mc(c) {
                var d = Nc.exec(c.type);
                d ? c.type = d[1] : c.removeAttribute("type");
                return c
            }

            function Jb(m, d) {
                var a, b, e, f;
                if (1 === d.nodeType) {
                    if (s.hasData(m) && (f = s.access(m), a = s.set(d,
                            f), f = f.events))
                        for (e in delete a.handle, a.events = {}, f) {
                            a = 0;
                            for (b = f[e].length; a < b; a++) c.event.add(d, e, f[e][a])
                        }
                    D.hasData(m) && (e = D.access(m), e = c.extend({}, e), D.set(d, e))
                }
            }

            function pa(m, d, a, b) {
                var d = Kb.apply([], d),
                    e, f, g, h, i = 0,
                    j = m.length,
                    k = j - 1,
                    n = d[0],
                    o = c.isFunction(n);
                if (o || 1 < j && "string" === typeof n && !u.checkClone && Oc.test(n)) return m.each(function(e) {
                    var f = m.eq(e);
                    o && (d[0] = n.call(this, e, f.html()));
                    pa(f, d, a, b)
                });
                if (j && (e = Eb(d, m[0].ownerDocument, !1, m, b), f = e.firstChild, 1 === e.childNodes.length && (e = f), f ||
                        b)) {
                    f = c.map(C(e, "script"), Lc);
                    for (g = f.length; i < j; i++) h = e, i !== k && (h = c.clone(h, !0, !0), g && c.merge(f, C(h, "script"))), a.call(m[i], h, i);
                    if (g) {
                        e = f[f.length - 1].ownerDocument;
                        c.map(f, Mc);
                        for (i = 0; i < g; i++)
                            if (h = f[i], Gb.test(h.type || "") && !s.access(h, "globalEval") && c.contains(e, h)) h.src ? c._evalUrl && c._evalUrl(h.src) : aa(h.textContent.replace(Pc, ""), e)
                    }
                }
                return m
            }

            function Lb(m, d, a) {
                for (var b = d ? c.filter(d, m) : m, e = 0; null != (d = b[e]); e++) !a && 1 === d.nodeType && c.cleanData(C(d)), d.parentNode && (a && c.contains(d.ownerDocument,
                    d) && db(C(d, "script")), d.parentNode.removeChild(d));
                return m
            }

            function ya(m, d, a) {
                var b, e, f = m.style;
                if (a = a || Ja(m)) e = a.getPropertyValue(d) || a[d], "" === e && !c.contains(m.ownerDocument, m) && (e = c.style(m, d)), !u.pixelMarginRight() && (fb.test(e) && Mb.test(d)) && (m = f.width, d = f.minWidth, b = f.maxWidth, f.minWidth = f.maxWidth = f.width = e, e = a.width, f.width = m, f.minWidth = d, f.maxWidth = b);
                return void 0 !== e ? e + "" : e
            }

            function Nb(c, d) {
                return {
                    get: function() {
                        if (c()) delete this.get;
                        else return (this.get = d).apply(this, arguments)
                    }
                }
            }

            function Ob(m) {
                var d =
                    c.cssProps[m];
                if (!d) {
                    var d = c.cssProps,
                        a;
                    a: if (a = m, !(a in Pb)) {
                        for (var b = a[0].toUpperCase() + a.slice(1), e = Qb.length; e--;)
                            if (a = Qb[e] + b, a in Pb) break a;
                        a = void 0
                    } d = d[m] = a || m
                }
                return d
            }

            function Rb(c, d, a) {
                return (c = xa.exec(d)) ? Math.max(0, c[2] - (a || 0)) + (c[3] || "px") : d
            }

            function Sb(m, d, a, b, e) {
                for (var f = 0, d = a === (b ? "border" : "content") ? 4 : "width" === d ? 1 : 0; 4 > d; d += 2) "margin" === a && (f += c.css(m, a + ba[d], !0, e)), b ? ("content" === a && (f -= c.css(m, "padding" + ba[d], !0, e)), "margin" !== a && (f -= c.css(m, "border" + ba[d] + "Width", !0, e))) : (f +=
                    c.css(m, "padding" + ba[d], !0, e), "padding" !== a && (f += c.css(m, "border" + ba[d] + "Width", !0, e)));
                return f
            }

            function Tb(m, d, a) {
                var b, e = Ja(m),
                    f = ya(m, d, e),
                    g = "border-box" === c.css(m, "boxSizing", !1, e);
                if (fb.test(f)) return f;
                b = g && (u.boxSizingReliable() || f === m.style[d]);
                "auto" === f && (f = m["offset" + d[0].toUpperCase() + d.slice(1)]);
                f = parseFloat(f) || 0;
                return f + Sb(m, d, a || (g ? "border" : "content"), b, e) + "px"
            }

            function E(c, d, a, b, e) {
                return new E.prototype.init(c, d, a, b, e)
            }

            function gb() {
                Ka && (!1 === r.hidden && p.requestAnimationFrame ?
                    p.requestAnimationFrame(gb) : p.setTimeout(gb, c.fx.interval), c.fx.tick())
            }

            function Ub() {
                p.setTimeout(function() {
                    qa = void 0
                });
                return qa = c.now()
            }

            function La(c, d) {
                for (var a, b = 0, e = {
                        height: c
                    }, d = d ? 1 : 0; 4 > b; b += 2 - d) a = ba[b], e["margin" + a] = e["padding" + a] = c;
                d && (e.opacity = e.width = c);
                return e
            }

            function Vb(c, d, a) {
                for (var b, e = (Q.tweeners[d] || []).concat(Q.tweeners["*"]), f = 0, g = e.length; f < g; f++)
                    if (b = e[f].call(a, d, c)) return b
            }

            function Q(m, d, a) {
                var b, e, f = 0,
                    g = Q.prefilters.length,
                    h = c.Deferred().always(function() {
                        delete i.elem
                    }),
                    i = function() {
                        if (e) return !1;
                        for (var a = qa || Ub(), a = Math.max(0, j.startTime + j.duration - a), b = 1 - (a / j.duration || 0), d = 0, f = j.tweens.length; d < f; d++) j.tweens[d].run(b);
                        h.notifyWith(m, [j, b, a]);
                        if (1 > b && f) return a;
                        f || h.notifyWith(m, [j, 1, 0]);
                        h.resolveWith(m, [j]);
                        return !1
                    },
                    j = h.promise({
                        elem: m,
                        props: c.extend({}, d),
                        opts: c.extend(!0, {
                            specialEasing: {},
                            easing: c.easing._default
                        }, a),
                        originalProperties: d,
                        originalOptions: a,
                        startTime: qa || Ub(),
                        duration: a.duration,
                        tweens: [],
                        createTween: function(a, b) {
                            var d = c.Tween(m, j.opts, a,
                                b, j.opts.specialEasing[a] || j.opts.easing);
                            j.tweens.push(d);
                            return d
                        },
                        stop: function(a) {
                            var b = 0,
                                d = a ? j.tweens.length : 0;
                            if (e) return this;
                            for (e = !0; b < d; b++) j.tweens[b].run(1);
                            a ? (h.notifyWith(m, [j, 1, 0]), h.resolveWith(m, [j, a])) : h.rejectWith(m, [j, a]);
                            return this
                        }
                    }),
                    d = j.props,
                    a = j.opts.specialEasing,
                    k, n, o, q;
                for (b in d)
                    if (k = c.camelCase(b), n = a[k], o = d[b], Array.isArray(o) && (n = o[1], o = d[b] = o[0]), b !== k && (d[k] = o, delete d[b]), (q = c.cssHooks[k]) && "expand" in q)
                        for (b in o = q.expand(o), delete d[k], o) b in d || (d[b] = o[b], a[b] =
                            n);
                    else a[k] = n;
                for (; f < g; f++)
                    if (b = Q.prefilters[f].call(j, m, d, j.opts)) return c.isFunction(b.stop) && (c._queueHooks(j.elem, j.opts.queue).stop = c.proxy(b.stop, b)), b;
                c.map(d, Vb, j);
                c.isFunction(j.opts.start) && j.opts.start.call(m, j);
                j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
                c.fx.timer(c.extend(i, {
                    elem: m,
                    anim: j,
                    queue: j.opts.queue
                }));
                return j
            }

            function ca(c) {
                return (c.match(F) || []).join(" ")
            }

            function da(c) {
                return c.getAttribute && c.getAttribute("class") ||
                    ""
            }

            function hb(m, d, a, b) {
                var e;
                if (Array.isArray(d)) c.each(d, function(d, e) {
                    a || Qc.test(m) ? b(m, e) : hb(m + "[" + ("object" === ("undefined" === typeof e ? "undefined" : B(e)) && null != e ? d : "") + "]", e, a, b)
                });
                else if (!a && "object" === c.type(d))
                    for (e in d) hb(m + "[" + e + "]", d[e], a, b);
                else b(m, d)
            }

            function Wb(m) {
                return function(d, a) {
                    "string" !== typeof d && (a = d, d = "*");
                    var b, e = 0,
                        f = d.toLowerCase().match(F) || [];
                    if (c.isFunction(a))
                        for (; b = f[e++];) "+" === b[0] ? (b = b.slice(1) || "*", (m[b] = m[b] || []).unshift(a)) : (m[b] = m[b] || []).push(a)
                }
            }

            function Xb(m,
                d, a, b) {
                function e(h) {
                    var i;
                    f[h] = !0;
                    c.each(m[h] || [], function(c, h) {
                        var n = h(d, a, b);
                        if ("string" === typeof n && !g && !f[n]) return d.dataTypes.unshift(n), e(n), !1;
                        if (g) return !(i = n)
                    });
                    return i
                }
                var f = {},
                    g = m === ib;
                return e(d.dataTypes[0]) || !f["*"] && e("*")
            }

            function jb(m, d) {
                var a, b, e = c.ajaxSettings.flatOptions || {};
                for (a in d) void 0 !== d[a] && ((e[a] ? m : b || (b = {}))[a] = d[a]);
                b && c.extend(!0, m, b);
                return m
            }
            var ea = [],
                r = p.document,
                Rc = Object.getPrototypeOf,
                fa = ea.slice,
                Kb = ea.concat,
                kb = ea.push,
                va = ea.indexOf,
                Ma = {},
                Yb = Ma.toString,
                Na = Ma.hasOwnProperty,
                Zb = Na.toString,
                Sc = Zb.call(Object),
                u = {},
                c = function d(a, b) {
                    return new d.fn.init(a, b)
                },
                Tc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                Uc = /^-ms-/,
                Vc = /-([a-z])/g,
                Wc = function(d, a) {
                    return a.toUpperCase()
                };
            c.fn = c.prototype = {
                jquery: "3.2.1",
                constructor: c,
                length: 0,
                toArray: function() {
                    return fa.call(this)
                },
                get: function(d) {
                    return null == d ? fa.call(this) : 0 > d ? this[d + this.length] : this[d]
                },
                pushStack: function(d) {
                    d = c.merge(this.constructor(), d);
                    d.prevObject = this;
                    return d
                },
                each: function(d) {
                    return c.each(this,
                        d)
                },
                map: function(d) {
                    return this.pushStack(c.map(this, function(a, b) {
                        return d.call(a, b, a)
                    }))
                },
                slice: function() {
                    return this.pushStack(fa.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(d) {
                    var a = this.length,
                        d = +d + (0 > d ? a : 0);
                    return this.pushStack(0 <= d && d < a ? [this[d]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: kb,
                sort: ea.sort,
                splice: ea.splice
            };
            c.extend = c.fn.extend = function() {
                var d, a, b, e, f, g = arguments[0] || {},
                    h = 1,
                    i = arguments.length,
                    j = !1;
                "boolean" === typeof g && (j = g, g = arguments[h] || {}, h++);
                if ("object" !== ("undefined" === typeof g ? "undefined" : B(g)) && !c.isFunction(g)) g = {};
                h === i && (g = this, h--);
                for (; h < i; h++)
                    if (null != (d = arguments[h]))
                        for (a in d) b = g[a], e = d[a], g !== e && (j && e && (c.isPlainObject(e) || (f = Array.isArray(e))) ? (f ? (f = !1, b = b && Array.isArray(b) ? b : []) : b = b && c.isPlainObject(b) ? b : {}, g[a] = c.extend(j, b, e)) : void 0 !== e && (g[a] = e));
                return g
            };
            c.extend({
                expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(d) {
                    throw Error(d);
                },
                noop: function() {},
                isFunction: function(d) {
                    return "function" === c.type(d)
                },
                isWindow: function(d) {
                    return null != d && d === d.window
                },
                isNumeric: function(d) {
                    var a = c.type(d);
                    return ("number" === a || "string" === a) && !isNaN(d - parseFloat(d))
                },
                isPlainObject: function(d) {
                    if (!d || "[object Object]" !== Yb.call(d)) return !1;
                    d = Rc(d);
                    if (!d) return !0;
                    d = Na.call(d, "constructor") && d.constructor;
                    return "function" === typeof d && Zb.call(d) === Sc
                },
                isEmptyObject: function(d) {
                    for (var a in d) return !1;
                    return !0
                },
                type: function(d) {
                    return null == d ? d +
                        "" : "object" === ("undefined" === typeof d ? "undefined" : B(d)) || "function" === typeof d ? Ma[Yb.call(d)] || "object" : "undefined" === typeof d ? "undefined" : B(d)
                },
                globalEval: function(d) {
                    aa(d)
                },
                camelCase: function(d) {
                    return d.replace(Uc, "ms-").replace(Vc, Wc)
                },
                each: function(d, a) {
                    var b, e = 0;
                    if (ka(d))
                        for (b = d.length; e < b && !1 !== a.call(d[e], e, d[e]); e++);
                    else
                        for (e in d)
                            if (!1 === a.call(d[e], e, d[e])) break;
                    return d
                },
                trim: function(d) {
                    return null == d ? "" : (d + "").replace(Tc, "")
                },
                makeArray: function(d, a) {
                    var b = a || [];
                    null != d && (ka(Object(d)) ?
                        c.merge(b, "string" === typeof d ? [d] : d) : kb.call(b, d));
                    return b
                },
                inArray: function(d, a, b) {
                    return null == a ? -1 : va.call(a, d, b)
                },
                merge: function(d, a) {
                    for (var b = +a.length, e = 0, f = d.length; e < b; e++) d[f++] = a[e];
                    d.length = f;
                    return d
                },
                grep: function(d, a, b) {
                    for (var e = [], f = 0, c = d.length, h = !b; f < c; f++) b = !a(d[f], f), b !== h && e.push(d[f]);
                    return e
                },
                map: function(d, a, b) {
                    var e, f, c = 0,
                        h = [];
                    if (ka(d))
                        for (e = d.length; c < e; c++) f = a(d[c], c, b), null != f && h.push(f);
                    else
                        for (c in d) f = a(d[c], c, b), null != f && h.push(f);
                    return Kb.apply([], h)
                },
                guid: 1,
                proxy: function(d, a) {
                    var b, e;
                    "string" === typeof a && (b = d[a], a = d, d = b);
                    if (c.isFunction(d)) return e = fa.call(arguments, 2), b = function() {
                        return d.apply(a || this, e.concat(fa.call(arguments)))
                    }, b.guid = d.guid = d.guid || c.guid++, b
                },
                now: Date.now,
                support: u
            });
            "function" === typeof Symbol && (c.fn[Symbol.iterator] = ea[Symbol.iterator]);
            c.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(d, a) {
                Ma["[object " + a + "]"] = a.toLowerCase()
            });
            var lb = p,
                z = function(d, a, b, e) {
                    var f, c, h, i, j, k = a &&
                        a.ownerDocument,
                        n = a ? a.nodeType : 9,
                        b = b || [];
                    if ("string" !== typeof d || !d || 1 !== n && 9 !== n && 11 !== n) return b;
                    if (!e && ((a ? a.ownerDocument || a : L) !== x && X(a), a = a || x, N)) {
                        if (11 !== n && (i = Xc.exec(d)))
                            if (f = i[1])
                                if (9 === n)
                                    if (c = a.getElementById(f)) {
                                        if (c.id === f) return b.push(c), b
                                    } else return b;
                        else {
                            if (k && (c = k.getElementById(f)) && za(a, c) && c.id === f) return b.push(c), b
                        } else {
                            if (i[2]) return Y.apply(b, a.getElementsByTagName(d)), b;
                            if ((f = i[3]) && w.getElementsByClassName && a.getElementsByClassName) return Y.apply(b, a.getElementsByClassName(f)),
                                b
                        }
                        if (w.qsa && !Oa[d + " "] && (!y || !y.test(d))) {
                            if (1 !== n) k = a, j = d;
                            else if ("object" !== a.nodeName.toLowerCase()) {
                                (h = a.getAttribute("id")) ? h = h.replace($b, ac): a.setAttribute("id", h = v);
                                c = Aa(d);
                                for (f = c.length; f--;) c[f] = "#" + h + " " + Pa(c[f]);
                                j = c.join(",");
                                k = mb.test(d) && nb(a.parentNode) || a
                            }
                            if (j) try {
                                return Y.apply(b, k.querySelectorAll(j)), b
                            } catch (o) {} finally {
                                h === v && a.removeAttribute("id")
                            }
                        }
                    }
                    return bc(d.replace(Qa, "$1"), a, b, e)
                },
                ob = function() {
                    function d(b, e) {
                        a.push(b + " ") > t.cacheLength && delete d[a.shift()];
                        return d[b +
                            " "] = e
                    }
                    var a = [];
                    return d
                },
                R = function(d) {
                    d[v] = !0;
                    return d
                },
                T = function(d) {
                    var a = x.createElement("fieldset");
                    try {
                        return !!d(a)
                    } catch (b) {
                        return !1
                    } finally {
                        a.parentNode && a.parentNode.removeChild(a)
                    }
                },
                pb = function(d, a) {
                    for (var b = d.split("|"), e = b.length; e--;) t.attrHandle[b[e]] = a
                },
                cc = function(d, a) {
                    var b = a && d,
                        e = b && 1 === d.nodeType && 1 === a.nodeType && d.sourceIndex - a.sourceIndex;
                    if (e) return e;
                    if (b)
                        for (; b = b.nextSibling;)
                            if (b === a) return -1;
                    return d ? 1 : -1
                },
                Yc = function(d) {
                    return function(a) {
                        return "input" === a.nodeName.toLowerCase() &&
                            a.type === d
                    }
                },
                Zc = function(d) {
                    return function(a) {
                        var b = a.nodeName.toLowerCase();
                        return ("input" === b || "button" === b) && a.type === d
                    }
                },
                dc = function(d) {
                    return function(a) {
                        return "form" in a ? a.parentNode && !1 === a.disabled ? "label" in a ? "label" in a.parentNode ? a.parentNode.disabled === d : a.disabled === d : a.isDisabled === d || a.isDisabled !== !d && $c(a) === d : a.disabled === d : "label" in a ? a.disabled === d : !1
                    }
                },
                ga = function(d) {
                    return R(function(a) {
                        a = +a;
                        return R(function(b, e) {
                            for (var c, g = d([], b.length, a), h = g.length; h--;)
                                if (b[c = g[h]]) b[c] = !(e[c] = b[c])
                        })
                    })
                },
                nb = function(d) {
                    return d && "undefined" !== typeof d.getElementsByTagName && d
                },
                ec = function() {},
                Pa = function(d) {
                    for (var a = 0, b = d.length, e = ""; a < b; a++) e += d[a].value;
                    return e
                },
                Ra = function(d, a, b) {
                    var e = a.dir,
                        c = a.next,
                        g = c || e,
                        h = b && "parentNode" === g,
                        i = ad++;
                    return a.first ? function(a, b, c) {
                        for (; a = a[e];)
                            if (1 === a.nodeType || h) return d(a, b, c);
                        return !1
                    } : function(a, b, n) {
                        var o, q, l = [U, i];
                        if (n)
                            for (; a = a[e];) {
                                if ((1 === a.nodeType || h) && d(a, b, n)) return !0
                            } else
                                for (; a = a[e];)
                                    if (1 === a.nodeType || h)
                                        if (q = a[v] || (a[v] = {}),
                                            q = q[a.uniqueID] || (q[a.uniqueID] = {}), c && c === a.nodeName.toLowerCase()) a = a[e] || a;
                                        else {
                                            if ((o = q[g]) && o[0] === U && o[1] === i) return l[2] = o[2];
                                            q[g] = l;
                                            if (l[2] = d(a, b, n)) return !0
                                        } return !1
                    }
                },
                qb = function(d) {
                    return 1 < d.length ? function(a, b, e) {
                        for (var c = d.length; c--;)
                            if (!d[c](a, b, e)) return !1;
                        return !0
                    } : d[0]
                },
                Sa = function(d, a, b, e, c) {
                    for (var g, h = [], i = 0, j = d.length, k = null != a; i < j; i++)
                        if (g = d[i])
                            if (!b || b(g, e, c)) h.push(g), k && a.push(i);
                    return h
                },
                rb = function(d, a, b, e, c, g) {
                    e && !e[v] && (e = rb(e));
                    c && !c[v] && (c = rb(c, g));
                    return R(function(g,
                        i, j, k) {
                        var n, o, q = [],
                            l = [],
                            I = i.length,
                            J;
                        if (!(J = g)) {
                            J = a || "*";
                            for (var G = j.nodeType ? [j] : j, p = [], s = 0, t = G.length; s < t; s++) z(J, G[s], p);
                            J = p
                        }
                        J = d && (g || !a) ? Sa(J, q, d, j, k) : J;
                        G = b ? c || (g ? d : I || e) ? [] : i : J;
                        b && b(J, G, j, k);
                        if (e) {
                            n = Sa(G, l);
                            e(n, [], j, k);
                            for (j = n.length; j--;)
                                if (o = n[j]) G[l[j]] = !(J[l[j]] = o)
                        }
                        if (g) {
                            if (c || d) {
                                if (c) {
                                    n = [];
                                    for (j = G.length; j--;)
                                        if (o = G[j]) n.push(J[j] = o);
                                    c(null, G = [], n, k)
                                }
                                for (j = G.length; j--;)
                                    if ((o = G[j]) && -1 < (n = c ? ha(g, o) : q[j])) g[n] = !(i[n] = o)
                            }
                        } else G = Sa(G === i ? G.splice(I, G.length) : G), c ? c(null, i, G, k) : Y.apply(i,
                            G)
                    })
                },
                sb = function(d) {
                    var a, b, e, c = d.length,
                        g = t.relative[d[0].type];
                    b = g || t.relative[" "];
                    for (var h = g ? 1 : 0, i = Ra(function(b) {
                            return b === a
                        }, b, !0), j = Ra(function(b) {
                            return -1 < ha(a, b)
                        }, b, !0), k = [function(b, d, e) {
                            b = !g && (e || d !== Ta) || ((a = d).nodeType ? i(b, d, e) : j(b, d, e));
                            a = null;
                            return b
                        }]; h < c; h++)
                        if (b = t.relative[d[h].type]) k = [Ra(qb(k), b)];
                        else {
                            b = t.filter[d[h].type].apply(null, d[h].matches);
                            if (b[v]) {
                                for (e = ++h; e < c && !t.relative[d[e].type]; e++);
                                return rb(1 < h && qb(k), 1 < h && Pa(d.slice(0, h - 1).concat({
                                    value: " " === d[h - 2].type ?
                                        "*" : ""
                                })).replace(Qa, "$1"), b, h < e && sb(d.slice(h, e)), e < c && sb(d = d.slice(e)), e < c && Pa(d))
                            }
                            k.push(b)
                        } return qb(k)
                },
                ra, w, t, Ua, fc, Aa, tb, bc, Ta, Z, sa, X, x, O, N, y, ia, Va, za, v = "sizzle" + 1 * new Date,
                L = lb.document,
                U = 0,
                ad = 0,
                gc = ob(),
                hc = ob(),
                Oa = ob(),
                ub = function(d, a) {
                    d === a && (sa = !0);
                    return 0
                },
                bd = {}.hasOwnProperty,
                ja = [],
                cd = ja.pop,
                dd = ja.push,
                Y = ja.push,
                ic = ja.slice,
                ha = function(d, a) {
                    for (var b = 0, e = d.length; b < e; b++)
                        if (d[b] === a) return b;
                    return -1
                },
                ed = /[\x20\t\r\n\f]+/g,
                Qa = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
                fd = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
                gd = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
                hd = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
                id = RegExp(":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
                jd = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
                Wa = {
                    ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                    CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                    TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
                    ATTR: RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]"),
                    PSEUDO: RegExp("^:((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                    bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
                    needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                        "i")
                },
                kd = /^(?:input|select|textarea|button)$/i,
                ld = /^h\d$/i,
                Ba = /^[^{]+\{\s*\[native \w/,
                Xc = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                mb = /[+~]/,
                V = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
                W = function(d, a, b) {
                    d = "0x" + a - 65536;
                    return d !== d || b ? a : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, d & 1023 | 56320)
                },
                $b = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ac = function(d, a) {
                    return a ? "\x00" === d ? "\ufffd" : d.slice(0, -1) + "\\" + d.charCodeAt(d.length - 1).toString(16) + " " : "\\" + d
                },
                jc = function() {
                    X()
                },
                $c = Ra(function(d) {
                    return !0 === d.disabled && ("form" in d || "label" in d)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                Y.apply(ja = ic.call(L.childNodes), L.childNodes), ja[L.childNodes.length].nodeType
            } catch (Gc) {
                Y = {
                    apply: ja.length ? function(d, a) {
                        dd.apply(d, ic.call(a))
                    } : function(d, a) {
                        for (var b = d.length, e = 0; d[b++] = a[e++];);
                        d.length = b - 1
                    }
                }
            }
            w = z.support = {};
            fc = z.isXML = function(d) {
                return (d = d && (d.ownerDocument || d).documentElement) ? "HTML" !== d.nodeName : !1
            };
            X = z.setDocument = function(d) {
                var a, d = d ? d.ownerDocument || d : L;
                if (d === x ||
                    9 !== d.nodeType || !d.documentElement) return x;
                x = d;
                O = x.documentElement;
                N = !fc(x);
                if (L !== x && (a = x.defaultView) && a.top !== a) a.addEventListener ? a.addEventListener("unload", jc, !1) : a.attachEvent && a.attachEvent("onunload", jc);
                w.attributes = T(function(a) {
                    a.className = "i";
                    return !a.getAttribute("className")
                });
                w.getElementsByTagName = T(function(a) {
                    a.appendChild(x.createComment(""));
                    return !a.getElementsByTagName("*").length
                });
                w.getElementsByClassName = Ba.test(x.getElementsByClassName);
                w.getById = T(function(a) {
                    O.appendChild(a).id =
                        v;
                    return !x.getElementsByName || !x.getElementsByName(v).length
                });
                w.getById ? (t.filter.ID = function(a) {
                    var d = a.replace(V, W);
                    return function(a) {
                        return a.getAttribute("id") === d
                    }
                }, t.find.ID = function(a, d) {
                    if ("undefined" !== typeof d.getElementById && N) {
                        var c = d.getElementById(a);
                        return c ? [c] : []
                    }
                }) : (t.filter.ID = function(a) {
                    var d = a.replace(V, W);
                    return function(a) {
                        return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === d
                    }
                }, t.find.ID = function(a, d) {
                    if ("undefined" !== typeof d.getElementById &&
                        N) {
                        var c, g, h, i = d.getElementById(a);
                        if (i) {
                            if ((c = i.getAttributeNode("id")) && c.value === a) return [i];
                            h = d.getElementsByName(a);
                            for (g = 0; i = h[g++];)
                                if ((c = i.getAttributeNode("id")) && c.value === a) return [i]
                        }
                        return []
                    }
                });
                t.find.TAG = w.getElementsByTagName ? function(a, d) {
                    if ("undefined" !== typeof d.getElementsByTagName) return d.getElementsByTagName(a);
                    if (w.qsa) return d.querySelectorAll(a)
                } : function(a, d) {
                    var c, g = [],
                        h = 0,
                        i = d.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = i[h++];) 1 === c.nodeType && g.push(c);
                        return g
                    }
                    return i
                };
                t.find.CLASS = w.getElementsByClassName && function(a, d) {
                    if ("undefined" !== typeof d.getElementsByClassName && N) return d.getElementsByClassName(a)
                };
                ia = [];
                y = [];
                if (w.qsa = Ba.test(x.querySelectorAll)) T(function(a) {
                    O.appendChild(a).innerHTML = "<a id='" + v + "'></a><select id='" + v + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                    a.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                    a.querySelectorAll("[selected]").length || y.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                    a.querySelectorAll("[id~=" + v + "-]").length || y.push("~=");
                    a.querySelectorAll(":checked").length || y.push(":checked");
                    a.querySelectorAll("a#" + v + "+*").length || y.push(".#.+[+~]")
                }), T(function(a) {
                    a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var d = x.createElement("input");
                    d.setAttribute("type", "hidden");
                    a.appendChild(d).setAttribute("name", "D");
                    a.querySelectorAll("[name=d]").length && y.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                    2 !== a.querySelectorAll(":enabled").length &&
                        y.push(":enabled", ":disabled");
                    O.appendChild(a).disabled = !0;
                    2 !== a.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled");
                    a.querySelectorAll("*,:x");
                    y.push(",.*:")
                });
                (w.matchesSelector = Ba.test(Va = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && T(function(a) {
                    w.disconnectedMatch = Va.call(a, "*");
                    Va.call(a, "[s!='']:x");
                    ia.push("!=", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
                });
                y = y.length && RegExp(y.join("|"));
                ia = ia.length && RegExp(ia.join("|"));
                za = (a = Ba.test(O.compareDocumentPosition)) || Ba.test(O.contains) ? function(a, d) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        g = d && d.parentNode;
                    return a === g || !(!g || !(1 === g.nodeType && (c.contains ? c.contains(g) : a.compareDocumentPosition && a.compareDocumentPosition(g) & 16)))
                } : function(a, d) {
                    if (d)
                        for (; d = d.parentNode;)
                            if (d === a) return !0;
                    return !1
                };
                ub = a ? function(a, d) {
                    if (a === d) return sa = !0, 0;
                    var c = !a.compareDocumentPosition - !d.compareDocumentPosition;
                    if (c) return c;
                    c = (a.ownerDocument || a) === (d.ownerDocument || d) ? a.compareDocumentPosition(d) : 1;
                    return c & 1 || !w.sortDetached && d.compareDocumentPosition(a) === c ? a === x || a.ownerDocument === L && za(L, a) ? -1 : d === x || d.ownerDocument === L && za(L, d) ? 1 : Z ? ha(Z, a) - ha(Z, d) : 0 : c & 4 ? -1 : 1
                } : function(a, d) {
                    if (a === d) return sa = !0, 0;
                    var c, g = 0;
                    c = a.parentNode;
                    var h = d.parentNode,
                        i = [a],
                        j = [d];
                    if (!c || !h) return a === x ? -1 : d === x ? 1 : c ? -1 : h ? 1 : Z ? ha(Z, a) - ha(Z, d) : 0;
                    if (c === h) return cc(a, d);
                    for (c = a; c = c.parentNode;) i.unshift(c);
                    for (c = d; c = c.parentNode;) j.unshift(c);
                    for (; i[g] === j[g];) g++;
                    return g ? cc(i[g], j[g]) : i[g] === L ? -1 : j[g] === L ? 1 : 0
                };
                return x
            };
            z.matches = function(d, a) {
                return z(d, null, null, a)
            };
            z.matchesSelector = function(d, a) {
                (d.ownerDocument || d) !== x && X(d);
                a = a.replace(hd, "='$1']");
                if (w.matchesSelector && N && !Oa[a + " "] && (!ia || !ia.test(a)) && (!y || !y.test(a))) try {
                    var b = Va.call(d, a);
                    if (b || w.disconnectedMatch || d.document && 11 !== d.document.nodeType) return b
                } catch (c) {}
                return 0 < z(a, x, null, [d]).length
            };
            z.contains = function(d, a) {
                (d.ownerDocument || d) !== x && X(d);
                return za(d, a)
            };
            z.attr = function(d, a) {
                (d.ownerDocument || d) !== x && X(d);
                var b = t.attrHandle[a.toLowerCase()],
                    b = b && bd.call(t.attrHandle, a.toLowerCase()) ? b(d, a, !N) : void 0;
                return void 0 !== b ? b : w.attributes || !N ? d.getAttribute(a) : (b = d.getAttributeNode(a)) && b.specified ? b.value : null
            };
            z.escape = function(d) {
                return (d + "").replace($b, ac)
            };
            z.error = function(d) {
                throw Error("Syntax error, unrecognized expression: " + d);
            };
            z.uniqueSort = function(d) {
                var a, b = [],
                    c = 0,
                    f = 0;
                sa = !w.detectDuplicates;
                Z = !w.sortStable && d.slice(0);
                d.sort(ub);
                if (sa) {
                    for (; a =
                        d[f++];) a === d[f] && (c = b.push(f));
                    for (; c--;) d.splice(b[c], 1)
                }
                Z = null;
                return d
            };
            Ua = z.getText = function(d) {
                var a, b = "",
                    c = 0;
                if (a = d.nodeType)
                    if (1 === a || 9 === a || 11 === a) {
                        if ("string" === typeof d.textContent) return d.textContent;
                        for (d = d.firstChild; d; d = d.nextSibling) b += Ua(d)
                    } else {
                        if (3 === a || 4 === a) return d.nodeValue
                    }
                else
                    for (; a = d[c++];) b += Ua(a);
                return b
            };
            t = z.selectors = {
                cacheLength: 50,
                createPseudo: R,
                match: Wa,
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
                    ATTR: function(d) {
                        d[1] = d[1].replace(V, W);
                        d[3] = (d[3] || d[4] || d[5] || "").replace(V, W);
                        "~=" === d[2] && (d[3] = " " + d[3] + " ");
                        return d.slice(0, 4)
                    },
                    CHILD: function(d) {
                        d[1] = d[1].toLowerCase();
                        "nth" === d[1].slice(0, 3) ? (d[3] || z.error(d[0]), d[4] = +(d[4] ? d[5] + (d[6] || 1) : 2 * ("even" === d[3] || "odd" === d[3])), d[5] = +(d[7] + d[8] || "odd" === d[3])) : d[3] && z.error(d[0]);
                        return d
                    },
                    PSEUDO: function(d) {
                        var a, b = !d[6] && d[2];
                        if (Wa.CHILD.test(d[0])) return null;
                        if (d[3]) d[2] = d[4] || d[5] || "";
                        else if (b &&
                            id.test(b) && (a = Aa(b, !0)) && (a = b.indexOf(")", b.length - a) - b.length)) d[0] = d[0].slice(0, a), d[2] = b.slice(0, a);
                        return d.slice(0, 3)
                    }
                },
                filter: {
                    TAG: function(d) {
                        var a = d.replace(V, W).toLowerCase();
                        return "*" === d ? function() {
                            return !0
                        } : function(b) {
                            return b.nodeName && b.nodeName.toLowerCase() === a
                        }
                    },
                    CLASS: function(d) {
                        var a = gc[d + " "];
                        return a || (a = RegExp("(^|[\\x20\\t\\r\\n\\f])" + d + "([\\x20\\t\\r\\n\\f]|$)")) && gc(d, function(b) {
                            return a.test("string" === typeof b.className && b.className || "undefined" !== typeof b.getAttribute &&
                                b.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(d, a, b) {
                        return function(c) {
                            c = z.attr(c, d);
                            if (null == c) return "!=" === a;
                            if (!a) return !0;
                            c += "";
                            return "=" === a ? c === b : "!=" === a ? c !== b : "^=" === a ? b && 0 === c.indexOf(b) : "*=" === a ? b && -1 < c.indexOf(b) : "$=" === a ? b && c.slice(-b.length) === b : "~=" === a ? -1 < (" " + c.replace(ed, " ") + " ").indexOf(b) : "|=" === a ? c === b || c.slice(0, b.length + 1) === b + "-" : !1
                        }
                    },
                    CHILD: function(d, a, b, c, f) {
                        var g = "nth" !== d.slice(0, 3),
                            h = "last" !== d.slice(-4),
                            i = "of-type" === a;
                        return 1 === c && 0 === f ? function(a) {
                                return !!a.parentNode
                            } :
                            function(a, b, n) {
                                var o, q, l, I, J, b = g !== h ? "nextSibling" : "previousSibling",
                                    p = a.parentNode,
                                    s = i && a.nodeName.toLowerCase(),
                                    n = !n && !i;
                                o = !1;
                                if (p) {
                                    if (g) {
                                        for (; b;) {
                                            for (l = a; l = l[b];)
                                                if (i ? l.nodeName.toLowerCase() === s : 1 === l.nodeType) return !1;
                                            J = b = "only" === d && !J && "nextSibling"
                                        }
                                        return !0
                                    }
                                    J = [h ? p.firstChild : p.lastChild];
                                    if (h && n) {
                                        l = p;
                                        q = l[v] || (l[v] = {});
                                        q = q[l.uniqueID] || (q[l.uniqueID] = {});
                                        o = q[d] || [];
                                        o = (I = o[0] === U && o[1]) && o[2];
                                        for (l = I && p.childNodes[I]; l = ++I && l && l[b] || (o = I = 0) || J.pop();)
                                            if (1 === l.nodeType && ++o && l === a) {
                                                q[d] = [U,
                                                    I, o
                                                ];
                                                break
                                            }
                                    } else if (n && (l = a, q = l[v] || (l[v] = {}), q = q[l.uniqueID] || (q[l.uniqueID] = {}), o = q[d] || [], o = I = o[0] === U && o[1]), !1 === o)
                                        for (; l = ++I && l && l[b] || (o = I = 0) || J.pop();)
                                            if ((i ? l.nodeName.toLowerCase() === s : 1 === l.nodeType) && ++o)
                                                if (n && (q = l[v] || (l[v] = {}), q = q[l.uniqueID] || (q[l.uniqueID] = {}), q[d] = [U, o]), l === a) break;
                                    o -= f;
                                    return o === c || 0 === o % c && 0 <= o / c
                                }
                            }
                    },
                    PSEUDO: function(d, a) {
                        var b, c = t.pseudos[d] || t.setFilters[d.toLowerCase()] || z.error("unsupported pseudo: " + d);
                        return c[v] ? c(a) : 1 < c.length ? (b = [d, d, "", a], t.setFilters.hasOwnProperty(d.toLowerCase()) ?
                            R(function(b, d) {
                                for (var h, i = c(b, a), j = i.length; j--;) h = ha(b, i[j]), b[h] = !(d[h] = i[j])
                            }) : function(a) {
                                return c(a, 0, b)
                            }) : c
                    }
                },
                pseudos: {
                    not: R(function(d) {
                        var a = [],
                            b = [],
                            c = tb(d.replace(Qa, "$1"));
                        return c[v] ? R(function(a, b, d, i) {
                            for (var i = c(a, null, i, []), j = a.length; j--;)
                                if (d = i[j]) a[j] = !(b[j] = d)
                        }) : function(d, g, h) {
                            a[0] = d;
                            c(a, null, h, b);
                            a[0] = null;
                            return !b.pop()
                        }
                    }),
                    has: R(function(d) {
                        return function(a) {
                            return 0 < z(d, a).length
                        }
                    }),
                    contains: R(function(d) {
                        d = d.replace(V, W);
                        return function(a) {
                            return -1 < (a.textContent || a.innerText ||
                                Ua(a)).indexOf(d)
                        }
                    }),
                    lang: R(function(d) {
                        jd.test(d || "") || z.error("unsupported lang: " + d);
                        d = d.replace(V, W).toLowerCase();
                        return function(a) {
                            var b;
                            do
                                if (b = N ? a.lang : a.getAttribute("xml:lang") || a.getAttribute("lang")) return b = b.toLowerCase(), b === d || 0 === b.indexOf(d + "-"); while ((a = a.parentNode) && 1 === a.nodeType);
                            return !1
                        }
                    }),
                    target: function(d) {
                        var a = lb.location && lb.location.hash;
                        return a && a.slice(1) === d.id
                    },
                    root: function(d) {
                        return d === O
                    },
                    focus: function(d) {
                        return d === x.activeElement && (!x.hasFocus || x.hasFocus()) &&
                            !(!d.type && !d.href && !~d.tabIndex)
                    },
                    enabled: dc(!1),
                    disabled: dc(!0),
                    checked: function(d) {
                        var a = d.nodeName.toLowerCase();
                        return "input" === a && !!d.checked || "option" === a && !!d.selected
                    },
                    selected: function(d) {
                        d.parentNode && d.parentNode.selectedIndex;
                        return !0 === d.selected
                    },
                    empty: function(d) {
                        for (d = d.firstChild; d; d = d.nextSibling)
                            if (6 > d.nodeType) return !1;
                        return !0
                    },
                    parent: function(d) {
                        return !t.pseudos.empty(d)
                    },
                    header: function(d) {
                        return ld.test(d.nodeName)
                    },
                    input: function(d) {
                        return kd.test(d.nodeName)
                    },
                    button: function(d) {
                        var a =
                            d.nodeName.toLowerCase();
                        return "input" === a && "button" === d.type || "button" === a
                    },
                    text: function(d) {
                        var a;
                        return "input" === d.nodeName.toLowerCase() && "text" === d.type && (null == (a = d.getAttribute("type")) || "text" === a.toLowerCase())
                    },
                    first: ga(function() {
                        return [0]
                    }),
                    last: ga(function(d, a) {
                        return [a - 1]
                    }),
                    eq: ga(function(d, a, b) {
                        return [0 > b ? b + a : b]
                    }),
                    even: ga(function(d, a) {
                        for (var b = 0; b < a; b += 2) d.push(b);
                        return d
                    }),
                    odd: ga(function(d, a) {
                        for (var b = 1; b < a; b += 2) d.push(b);
                        return d
                    }),
                    lt: ga(function(d, a, b) {
                        for (a = 0 > b ? b + a : b; 0 <= --a;) d.push(a);
                        return d
                    }),
                    gt: ga(function(d, a, b) {
                        for (b = 0 > b ? b + a : b; ++b < a;) d.push(b);
                        return d
                    })
                }
            };
            t.pseudos.nth = t.pseudos.eq;
            for (ra in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) t.pseudos[ra] = Yc(ra);
            for (ra in {
                    submit: !0,
                    reset: !0
                }) t.pseudos[ra] = Zc(ra);
            ec.prototype = t.filters = t.pseudos;
            t.setFilters = new ec;
            Aa = z.tokenize = function(d, a) {
                var b, c, f, g, h, i, j;
                if (h = hc[d + " "]) return a ? 0 : h.slice(0);
                h = d;
                i = [];
                for (j = t.preFilter; h;) {
                    if (!b || (c = fd.exec(h))) c && (h = h.slice(c[0].length) || h), i.push(f = []);
                    b = !1;
                    if (c = gd.exec(h)) b = c.shift(),
                        f.push({
                            value: b,
                            type: c[0].replace(Qa, " ")
                        }), h = h.slice(b.length);
                    for (g in t.filter)
                        if ((c = Wa[g].exec(h)) && (!j[g] || (c = j[g](c)))) b = c.shift(), f.push({
                            value: b,
                            type: g,
                            matches: c
                        }), h = h.slice(b.length);
                    if (!b) break
                }
                return a ? h.length : h ? z.error(d) : hc(d, i).slice(0)
            };
            tb = z.compile = function(d, a) {
                var b, c = [],
                    f = [],
                    g = Oa[d + " "];
                if (!g) {
                    a || (a = Aa(d));
                    for (b = a.length; b--;) g = sb(a[b]), g[v] ? c.push(g) : f.push(g);
                    b = Oa;
                    var h = 0 < c.length,
                        i = 0 < f.length,
                        g = function(a, b, d, g, q) {
                            var l, I, p, s = 0,
                                r = "0",
                                u = a && [],
                                v = [],
                                w = Ta,
                                y = a || i && t.find.TAG("*",
                                    q),
                                A = U += null == w ? 1 : Math.random() || 0.1,
                                B = y.length;
                            for (q && (Ta = b === x || b || q); r !== B && null != (l = y[r]); r++) {
                                if (i && l) {
                                    I = 0;
                                    !b && l.ownerDocument !== x && (X(l), d = !N);
                                    for (; p = f[I++];)
                                        if (p(l, b || x, d)) {
                                            g.push(l);
                                            break
                                        } q && (U = A)
                                }
                                h && ((l = !p && l) && s--, a && u.push(l))
                            }
                            s += r;
                            if (h && r !== s) {
                                for (I = 0; p = c[I++];) p(u, v, b, d);
                                if (a) {
                                    if (0 < s)
                                        for (; r--;) !u[r] && !v[r] && (v[r] = cd.call(g));
                                    v = Sa(v)
                                }
                                Y.apply(g, v);
                                q && (!a && 0 < v.length && 1 < s + c.length) && z.uniqueSort(g)
                            }
                            q && (U = A, Ta = w);
                            return u
                        },
                        g = h ? R(g) : g,
                        g = b(d, g);
                    g.selector = d
                }
                return g
            };
            bc = z.select = function(d,
                a, b, c) {
                var f, g, h, i, j = "function" === typeof d && d,
                    k = !c && Aa(d = j.selector || d),
                    b = b || [];
                if (1 === k.length) {
                    g = k[0] = k[0].slice(0);
                    if (2 < g.length && "ID" === (h = g[0]).type && 9 === a.nodeType && N && t.relative[g[1].type]) {
                        if (a = (t.find.ID(h.matches[0].replace(V, W), a) || [])[0]) j && (a = a.parentNode);
                        else return b;
                        d = d.slice(g.shift().value.length)
                    }
                    for (f = Wa.needsContext.test(d) ? 0 : g.length; f--;) {
                        h = g[f];
                        if (t.relative[i = h.type]) break;
                        if (i = t.find[i])
                            if (c = i(h.matches[0].replace(V, W), mb.test(g[0].type) && nb(a.parentNode) || a)) {
                                g.splice(f,
                                    1);
                                d = c.length && Pa(g);
                                if (!d) return Y.apply(b, c), b;
                                break
                            }
                    }
                }(j || tb(d, k))(c, a, !N, b, !a || mb.test(d) && nb(a.parentNode) || a);
                return b
            };
            w.sortStable = v.split("").sort(ub).join("") === v;
            w.detectDuplicates = !!sa;
            X();
            w.sortDetached = T(function(d) {
                return d.compareDocumentPosition(x.createElement("fieldset")) & 1
            });
            T(function(d) {
                d.innerHTML = "<a href='#'></a>";
                return "#" === d.firstChild.getAttribute("href")
            }) || pb("type|href|height|width", function(d, a, b) {
                if (!b) return d.getAttribute(a, "type" === a.toLowerCase() ? 1 : 2)
            });
            (!w.attributes ||
                !T(function(d) {
                    d.innerHTML = "<input/>";
                    d.firstChild.setAttribute("value", "");
                    return "" === d.firstChild.getAttribute("value")
                })) && pb("value", function(d, a, b) {
                if (!b && "input" === d.nodeName.toLowerCase()) return d.defaultValue
            });
            T(function(d) {
                return null == d.getAttribute("disabled")
            }) || pb("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(d, a, b) {
                var c;
                if (!b) return !0 === d[a] ? a.toLowerCase() : (c = d.getAttributeNode(a)) && c.specified ?
                    c.value : null
            });
            c.find = z;
            c.expr = z.selectors;
            c.expr[":"] = c.expr.pseudos;
            c.uniqueSort = c.unique = z.uniqueSort;
            c.text = z.getText;
            c.isXMLDoc = z.isXML;
            c.contains = z.contains;
            c.escapeSelector = z.escape;
            var ta = function(d, a, b) {
                    for (var e = [], f = void 0 !== b;
                        (d = d[a]) && 9 !== d.nodeType;)
                        if (1 === d.nodeType) {
                            if (f && c(d).is(b)) break;
                            e.push(d)
                        } return e
                },
                kc = function(d, a) {
                    for (var b = []; d; d = d.nextSibling) 1 === d.nodeType && d !== a && b.push(d);
                    return b
                },
                lc = c.expr.match.needsContext,
                mc = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
                Hc = /^.[^:#\[\.,]*$/;
            c.filter = function(d, a, b) {
                var e = a[0];
                b && (d = ":not(" + d + ")");
                return 1 === a.length && 1 === e.nodeType ? c.find.matchesSelector(e, d) ? [e] : [] : c.find.matches(d, c.grep(a, function(a) {
                    return 1 === a.nodeType
                }))
            };
            c.fn.extend({
                find: function(d) {
                    var a, b, e = this.length,
                        f = this;
                    if ("string" !== typeof d) return this.pushStack(c(d).filter(function() {
                        for (a = 0; a < e; a++)
                            if (c.contains(f[a], this)) return !0
                    }));
                    b = this.pushStack([]);
                    for (a = 0; a < e; a++) c.find(d, f[a], b);
                    return 1 < e ? c.uniqueSort(b) : b
                },
                filter: function(d) {
                    return this.pushStack(cb(this,
                        d || [], !1))
                },
                not: function(d) {
                    return this.pushStack(cb(this, d || [], !0))
                },
                is: function(d) {
                    return !!cb(this, "string" === typeof d && lc.test(d) ? c(d) : d || [], !1).length
                }
            });
            var nc, md = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (c.fn.init = function(d, a, b) {
                var e;
                if (!d) return this;
                b = b || nc;
                if ("string" === typeof d) {
                    if ((e = "<" === d[0] && ">" === d[d.length - 1] && 3 <= d.length ? [null, d, null] : md.exec(d)) && (e[1] || !a)) {
                        if (e[1]) {
                            if (a = a instanceof c ? a[0] : a, c.merge(this, c.parseHTML(e[1], a && a.nodeType ? a.ownerDocument || a : r, !0)), mc.test(e[1]) && c.isPlainObject(a))
                                for (e in a)
                                    if (c.isFunction(this[e])) this[e](a[e]);
                                    else this.attr(e, a[e])
                        } else if (d = r.getElementById(e[2])) this[0] = d, this.length = 1;
                        return this
                    }
                    return !a || a.jquery ? (a || b).find(d) : this.constructor(a).find(d)
                }
                return d.nodeType ? (this[0] = d, this.length = 1, this) : c.isFunction(d) ? void 0 !== b.ready ? b.ready(d) : d(c) : c.makeArray(d, this)
            }).prototype = c.fn;
            nc = c(r);
            var nd = /^(?:parents|prev(?:Until|All))/,
                od = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            c.fn.extend({
                has: function(d) {
                    var a = c(d, this),
                        b = a.length;
                    return this.filter(function() {
                        for (var d = 0; d < b; d++)
                            if (c.contains(this,
                                    a[d])) return !0
                    })
                },
                closest: function(d, a) {
                    var b, e = 0,
                        f = this.length,
                        g = [],
                        h = "string" !== typeof d && c(d);
                    if (!lc.test(d))
                        for (; e < f; e++)
                            for (b = this[e]; b && b !== a; b = b.parentNode)
                                if (11 > b.nodeType && (h ? -1 < h.index(b) : 1 === b.nodeType && c.find.matchesSelector(b, d))) {
                                    g.push(b);
                                    break
                                } return this.pushStack(1 < g.length ? c.uniqueSort(g) : g)
                },
                index: function(d) {
                    return !d ? this[0] && this[0].parentNode ? this.first().prevAll().length : -1 : "string" === typeof d ? va.call(c(d), this[0]) : va.call(this, d.jquery ? d[0] : d)
                },
                add: function(d, a) {
                    return this.pushStack(c.uniqueSort(c.merge(this.get(),
                        c(d, a))))
                },
                addBack: function(d) {
                    return this.add(null == d ? this.prevObject : this.prevObject.filter(d))
                }
            });
            c.each({
                parent: function(d) {
                    return (d = d.parentNode) && 11 !== d.nodeType ? d : null
                },
                parents: function(d) {
                    return ta(d, "parentNode")
                },
                parentsUntil: function(d, a, b) {
                    return ta(d, "parentNode", b)
                },
                next: function(d) {
                    return zb(d, "nextSibling")
                },
                prev: function(d) {
                    return zb(d, "previousSibling")
                },
                nextAll: function(d) {
                    return ta(d, "nextSibling")
                },
                prevAll: function(d) {
                    return ta(d, "previousSibling")
                },
                nextUntil: function(d, a, b) {
                    return ta(d,
                        "nextSibling", b)
                },
                prevUntil: function(d, a, b) {
                    return ta(d, "previousSibling", b)
                },
                siblings: function(d) {
                    return kc((d.parentNode || {}).firstChild, d)
                },
                children: function(d) {
                    return kc(d.firstChild)
                },
                contents: function(d) {
                    if (P(d, "iframe")) return d.contentDocument;
                    P(d, "template") && (d = d.content || d);
                    return c.merge([], d.childNodes)
                }
            }, function(d, a) {
                c.fn[d] = function(b, e) {
                    var f = c.map(this, a, b);
                    "Until" !== d.slice(-5) && (e = b);
                    e && "string" === typeof e && (f = c.filter(e, f));
                    1 < this.length && (od[d] || c.uniqueSort(f), nd.test(d) && f.reverse());
                    return this.pushStack(f)
                }
            });
            var F = /[^\x20\t\r\n\f]+/g;
            c.Callbacks = function(d) {
                var a;
                if ("string" === typeof d) {
                    var b = {};
                    c.each(d.match(F) || [], function(a, d) {
                        b[d] = !0
                    });
                    a = b
                } else a = c.extend({}, d);
                var d = a,
                    e, f, g, h, i = [],
                    j = [],
                    k = -1,
                    n = function() {
                        h = h || d.once;
                        for (g = e = !0; j.length; k = -1)
                            for (f = j.shift(); ++k < i.length;) !1 === i[k].apply(f[0], f[1]) && d.stopOnFalse && (k = i.length, f = !1);
                        d.memory || (f = !1);
                        e = !1;
                        h && (i = f ? [] : "")
                    },
                    o = {
                        add: function() {
                            i && (f && !e && (k = i.length - 1, j.push(f)), function l(a) {
                                c.each(a, function(a, b) {
                                    c.isFunction(b) ?
                                        (!d.unique || !o.has(b)) && i.push(b) : b && (b.length && "string" !== c.type(b)) && l(b)
                                })
                            }(arguments), f && !e && n());
                            return this
                        },
                        remove: function() {
                            c.each(arguments, function(a, b) {
                                for (var d; - 1 < (d = c.inArray(b, i, d));) i.splice(d, 1), d <= k && k--
                            });
                            return this
                        },
                        has: function(a) {
                            return a ? -1 < c.inArray(a, i) : 0 < i.length
                        },
                        empty: function() {
                            i && (i = []);
                            return this
                        },
                        disable: function() {
                            h = j = [];
                            i = f = "";
                            return this
                        },
                        disabled: function() {
                            return !i
                        },
                        lock: function() {
                            h = j = [];
                            !f && !e && (i = f = "");
                            return this
                        },
                        locked: function() {
                            return !!h
                        },
                        fireWith: function(a,
                            b) {
                            h || (b = b || [], b = [a, b.slice ? b.slice() : b], j.push(b), e || n());
                            return this
                        },
                        fire: function() {
                            o.fireWith(this, arguments);
                            return this
                        },
                        fired: function() {
                            return !!g
                        }
                    };
                return o
            };
            c.extend({
                Deferred: function(d) {
                    var a = [
                            ["notify", "progress", c.Callbacks("memory"), c.Callbacks("memory"), 2],
                            ["resolve", "done", c.Callbacks("once memory"), c.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", c.Callbacks("once memory"), c.Callbacks("once memory"), 1, "rejected"]
                        ],
                        b = "pending",
                        e = {
                            state: function() {
                                return b
                            },
                            always: function() {
                                f.done(arguments).fail(arguments);
                                return this
                            },
                            "catch": function(a) {
                                return e.then(null, a)
                            },
                            pipe: function() {
                                var b = arguments;
                                return c.Deferred(function(d) {
                                    c.each(a, function(a, e) {
                                        var k = c.isFunction(b[e[4]]) && b[e[4]];
                                        f[e[1]](function() {
                                            var a = k && k.apply(this, arguments);
                                            if (a && c.isFunction(a.promise)) a.promise().progress(d.notify).done(d.resolve).fail(d.reject);
                                            else d[e[0] + "With"](this, k ? [a] : arguments)
                                        })
                                    });
                                    b = null
                                }).promise()
                            },
                            then: function(b, d, e) {
                                function f(a, b, d, e) {
                                    return function() {
                                        var g = this,
                                            h = arguments,
                                            i = function() {
                                                var i, p;
                                                if (!(a < k)) {
                                                    i =
                                                        d.apply(g, h);
                                                    if (i === b.promise()) throw new TypeError("Thenable self-resolution");
                                                    p = i && ("object" === ("undefined" === typeof i ? "undefined" : B(i)) || "function" === typeof i) && i.then;
                                                    c.isFunction(p) ? e ? p.call(i, f(k, b, ma, e), f(k, b, Fa, e)) : (k++, p.call(i, f(k, b, ma, e), f(k, b, Fa, e), f(k, b, ma, b.notifyWith))) : (d !== ma && (g = void 0, h = [i]), (e || b.resolveWith)(g, h))
                                                }
                                            },
                                            s = e ? i : function() {
                                                try {
                                                    i()
                                                } catch (e) {
                                                    c.Deferred.exceptionHook && c.Deferred.exceptionHook(e, s.stackTrace), a + 1 >= k && (d !== Fa && (g = void 0, h = [e]), b.rejectWith(g, h))
                                                }
                                            };
                                        a ? s() :
                                            (c.Deferred.getStackHook && (s.stackTrace = c.Deferred.getStackHook()), p.setTimeout(s))
                                    }
                                }
                                var k = 0;
                                return c.Deferred(function(k) {
                                    a[0][3].add(f(0, k, c.isFunction(e) ? e : ma, k.notifyWith));
                                    a[1][3].add(f(0, k, c.isFunction(b) ? b : ma));
                                    a[2][3].add(f(0, k, c.isFunction(d) ? d : Fa))
                                }).promise()
                            },
                            promise: function(a) {
                                return null != a ? c.extend(a, e) : e
                            }
                        },
                        f = {};
                    c.each(a, function(d, c) {
                        var i = c[2],
                            j = c[5];
                        e[c[1]] = i.add;
                        j && i.add(function() {
                            b = j
                        }, a[3 - d][2].disable, a[0][2].lock);
                        i.add(c[3].fire);
                        f[c[0]] = function() {
                            f[c[0] + "With"](this === f ?
                                void 0 : this, arguments);
                            return this
                        };
                        f[c[0] + "With"] = i.fireWith
                    });
                    e.promise(f);
                    d && d.call(f, f);
                    return f
                },
                when: function(d) {
                    var a = arguments.length,
                        b = a,
                        e = Array(b),
                        f = fa.call(arguments),
                        g = c.Deferred(),
                        h = function(b) {
                            return function(d) {
                                e[b] = this;
                                f[b] = 1 < arguments.length ? fa.call(arguments) : d;
                                --a || g.resolveWith(e, f)
                            }
                        };
                    if (1 >= a && (Ab(d, g.done(h(b)).resolve, g.reject, !a), "pending" === g.state() || c.isFunction(f[b] && f[b].then))) return g.then();
                    for (; b--;) Ab(f[b], h(b), g.reject);
                    return g.promise()
                }
            });
            var pd = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            c.Deferred.exceptionHook = function(d, a) {
                p.console && (p.console.warn && d && pd.test(d.name)) && p.console.warn("jQuery.Deferred exception: " + d.message, d.stack, a)
            };
            c.readyException = function(d) {
                p.setTimeout(function() {
                    throw d;
                })
            };
            var vb = c.Deferred();
            c.fn.ready = function(d) {
                vb.then(d).catch(function(a) {
                    c.readyException(a)
                });
                return this
            };
            c.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(d) {
                    if (!(!0 === d ? --c.readyWait : c.isReady)) c.isReady = !0, !0 !== d && 0 < --c.readyWait || vb.resolveWith(r, [c])
                }
            });
            c.ready.then = vb.then;
            "complete" ===
            r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? p.setTimeout(c.ready) : (r.addEventListener("DOMContentLoaded", Ga), p.addEventListener("load", Ga));
            var $ = function a(b, e, f, g, h, i, j) {
                    var k = 0,
                        n = b.length,
                        o = null == f;
                    if ("object" === c.type(f))
                        for (k in h = !0, f) a(b, e, k, f[k], !0, i, j);
                    else if (void 0 !== g && (h = !0, c.isFunction(g) || (j = !0), o && (j ? (e.call(b, g), e = null) : (o = e, e = function(a, b, e) {
                            return o.call(c(a), e)
                        })), e))
                        for (; k < n; k++) e(b[k], f, j ? g : g.call(b[k], k, e(b[k], f)));
                    return h ? b : o ? e.call(b) : n ? e(b[0], f) :
                        i
                },
                Xa = function(a) {
                    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
                };
            wa.uid = 1;
            wa.prototype = {
                cache: function(a) {
                    var b = a[this.expando];
                    b || (b = {}, Xa(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                        value: b,
                        configurable: !0
                    })));
                    return b
                },
                set: function(a, b, e) {
                    var f, a = this.cache(a);
                    if ("string" === typeof b) a[c.camelCase(b)] = e;
                    else
                        for (f in b) a[c.camelCase(f)] = b[f];
                    return a
                },
                get: function(a, b) {
                    return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][c.camelCase(b)]
                },
                access: function(a,
                    b, c) {
                    if (void 0 === b || b && "string" === typeof b && void 0 === c) return this.get(a, b);
                    this.set(a, b, c);
                    return void 0 !== c ? c : b
                },
                remove: function(a, b) {
                    var e, f = a[this.expando];
                    if (void 0 !== f) {
                        if (void 0 !== b) {
                            Array.isArray(b) ? b = b.map(c.camelCase) : (b = c.camelCase(b), b = b in f ? [b] : b.match(F) || []);
                            for (e = b.length; e--;) delete f[b[e]]
                        }
                        if (void 0 === b || c.isEmptyObject(f)) a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]
                    }
                },
                hasData: function(a) {
                    a = a[this.expando];
                    return void 0 !== a && !c.isEmptyObject(a)
                }
            };
            var s = new wa,
                D = new wa,
                Jc = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Ic = /[A-Z]/g;
            c.extend({
                hasData: function(a) {
                    return D.hasData(a) || s.hasData(a)
                },
                data: function(a, b, c) {
                    return D.access(a, b, c)
                },
                removeData: function(a, b) {
                    D.remove(a, b)
                },
                _data: function(a, b, c) {
                    return s.access(a, b, c)
                },
                _removeData: function(a, b) {
                    s.remove(a, b)
                }
            });
            c.fn.extend({
                data: function(a, b) {
                    var e, f, g, h = this[0],
                        i = h && h.attributes;
                    if (void 0 === a) {
                        if (this.length && (g = D.get(h), 1 === h.nodeType && !s.get(h, "hasDataAttrs"))) {
                            for (e = i.length; e--;) i[e] && (f = i[e].name, 0 === f.indexOf("data-") &&
                                (f = c.camelCase(f.slice(5)), Bb(h, f, g[f])));
                            s.set(h, "hasDataAttrs", !0)
                        }
                        return g
                    }
                    return "object" === ("undefined" === typeof a ? "undefined" : B(a)) ? this.each(function() {
                        D.set(this, a)
                    }) : $(this, function(b) {
                        var c;
                        if (h && void 0 === b) {
                            c = D.get(h, a);
                            if (void 0 !== c) return c;
                            c = Bb(h, a);
                            if (void 0 !== c) return c
                        } else this.each(function() {
                            D.set(this, a, b)
                        })
                    }, null, b, 1 < arguments.length, null, !0)
                },
                removeData: function(a) {
                    return this.each(function() {
                        D.remove(this, a)
                    })
                }
            });
            c.extend({
                queue: function(a, b, e) {
                    var f;
                    if (a) return b = (b || "fx") +
                        "queue", f = s.get(a, b), e && (!f || Array.isArray(e) ? f = s.access(a, b, c.makeArray(e)) : f.push(e)), f || []
                },
                dequeue: function(a, b) {
                    var b = b || "fx",
                        e = c.queue(a, b),
                        f = e.length,
                        g = e.shift(),
                        h = c._queueHooks(a, b),
                        i = function() {
                            c.dequeue(a, b)
                        };
                    "inprogress" === g && (g = e.shift(), f--);
                    g && ("fx" === b && e.unshift("inprogress"), delete h.stop, g.call(a, i, h));
                    !f && h && h.empty.fire()
                },
                _queueHooks: function(a, b) {
                    var e = b + "queueHooks";
                    return s.get(a, e) || s.access(a, e, {
                        empty: c.Callbacks("once memory").add(function() {
                            s.remove(a, [b + "queue", e])
                        })
                    })
                }
            });
            c.fn.extend({
                queue: function(a, b) {
                    var e = 2;
                    "string" !== typeof a && (b = a, a = "fx", e--);
                    return arguments.length < e ? c.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                        var e = c.queue(this, a, b);
                        c._queueHooks(this, a);
                        "fx" === a && "inprogress" !== e[0] && c.dequeue(this, a)
                    })
                },
                dequeue: function(a) {
                    return this.each(function() {
                        c.dequeue(this, a)
                    })
                },
                clearQueue: function(a) {
                    return this.queue(a || "fx", [])
                },
                promise: function(a, b) {
                    var e, f = 1,
                        g = c.Deferred(),
                        h = this,
                        i = this.length,
                        j = function() {
                            --f || g.resolveWith(h, [h])
                        };
                    "string" !==
                    typeof a && (b = a, a = void 0);
                    for (a = a || "fx"; i--;)
                        if ((e = s.get(h[i], a + "queueHooks")) && e.empty) f++, e.empty.add(j);
                    j();
                    return g.promise(b)
                }
            });
            var oc = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                xa = RegExp("^(?:([+-])=|)(" + oc + ")([a-z%]*)$", "i"),
                ba = ["Top", "Right", "Bottom", "Left"],
                Ha = function(a, b) {
                    a = b || a;
                    return "none" === a.style.display || "" === a.style.display && c.contains(a.ownerDocument, a) && "none" === c.css(a, "display")
                },
                pc = function(a, b, c, f) {
                    var g, h = {};
                    for (g in b) h[g] = a.style[g], a.style[g] = b[g];
                    c = c.apply(a, f || []);
                    for (g in b) a.style[g] = h[g];
                    return c
                },
                Db = {};
            c.fn.extend({
                show: function() {
                    return na(this, !0)
                },
                hide: function() {
                    return na(this)
                },
                toggle: function(a) {
                    return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function() {
                        Ha(this) ? c(this).show() : c(this).hide()
                    })
                }
            });
            var qc = /^(?:checkbox|radio)$/i,
                Fb = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                Gb = /^$|\/(?:java|ecma)script/i,
                H = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2,
                        "<table><tbody>", "</tbody></table>"
                    ],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            H.optgroup = H.option;
            H.tbody = H.tfoot = H.colgroup = H.caption = H.thead;
            H.th = H.td;
            var Kc = /<|&#?\w+;/,
                Ya = r.createDocumentFragment().appendChild(r.createElement("div")),
                Za = r.createElement("input");
            Za.setAttribute("type", "radio");
            Za.setAttribute("checked", "checked");
            Za.setAttribute("name", "t");
            Ya.appendChild(Za);
            u.checkClone = Ya.cloneNode(!0).cloneNode(!0).lastChild.checked;
            Ya.innerHTML = "<textarea>x</textarea>";
            u.noCloneChecked = !!Ya.cloneNode(!0).lastChild.defaultValue;
            var $a = r.documentElement,
                qd = /^key/,
                rd = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                rc = /^([^.]*)(?:\.(.+)|)/;
            c.event = {
                global: {},
                add: function(a, b, e, f, g) {
                    var h, i, j, k, n, o, q, l, p;
                    if (n = s.get(a)) {
                        e.handler && (h = e, e = h.handler, g = h.selector);
                        g && c.find.matchesSelector($a, g);
                        e.guid || (e.guid = c.guid++);
                        if (!(k = n.events)) k = n.events = {};
                        if (!(i = n.handle)) i = n.handle = function(b) {
                            return "undefined" !== typeof c && c.event.triggered !== b.type ? c.event.dispatch.apply(a,
                                arguments) : void 0
                        };
                        b = (b || "").match(F) || [""];
                        for (n = b.length; n--;)
                            if (j = rc.exec(b[n]) || [], l = o = j[1], p = (j[2] || "").split(".").sort(), l) {
                                j = c.event.special[l] || {};
                                l = (g ? j.delegateType : j.bindType) || l;
                                j = c.event.special[l] || {};
                                o = c.extend({
                                    type: l,
                                    origType: o,
                                    data: f,
                                    handler: e,
                                    guid: e.guid,
                                    selector: g,
                                    needsContext: g && c.expr.match.needsContext.test(g),
                                    namespace: p.join(".")
                                }, h);
                                if (!(q = k[l])) q = k[l] = [], q.delegateCount = 0, (!j.setup || !1 === j.setup.call(a, f, p, i)) && a.addEventListener && a.addEventListener(l, i);
                                j.add && (j.add.call(a,
                                    o), o.handler.guid || (o.handler.guid = e.guid));
                                g ? q.splice(q.delegateCount++, 0, o) : q.push(o);
                                c.event.global[l] = !0
                            }
                    }
                },
                remove: function(a, b, e, f, g) {
                    var h, i, j, k, n, o, q, l, p, r, t, v = s.hasData(a) && s.get(a);
                    if (v && (k = v.events)) {
                        b = (b || "").match(F) || [""];
                        for (n = b.length; n--;)
                            if (j = rc.exec(b[n]) || [], p = t = j[1], r = (j[2] || "").split(".").sort(), p) {
                                q = c.event.special[p] || {};
                                p = (f ? q.delegateType : q.bindType) || p;
                                l = k[p] || [];
                                j = j[2] && RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)");
                                for (i = h = l.length; h--;)
                                    if (o = l[h], (g || t === o.origType) &&
                                        (!e || e.guid === o.guid) && (!j || j.test(o.namespace)) && (!f || f === o.selector || "**" === f && o.selector)) l.splice(h, 1), o.selector && l.delegateCount--, q.remove && q.remove.call(a, o);
                                i && !l.length && ((!q.teardown || !1 === q.teardown.call(a, r, v.handle)) && c.removeEvent(a, p, v.handle), delete k[p])
                            } else
                                for (p in k) c.event.remove(a, p + b[n], e, f, !0);
                        c.isEmptyObject(k) && s.remove(a, "handle events")
                    }
                },
                dispatch: function(a) {
                    var b = c.event.fix(a),
                        e, f, g, h, i, j = Array(arguments.length);
                    f = (s.get(this, "events") || {})[b.type] || [];
                    var k = c.event.special[b.type] || {};
                    j[0] = b;
                    for (e = 1; e < arguments.length; e++) j[e] = arguments[e];
                    b.delegateTarget = this;
                    if (!(k.preDispatch && !1 === k.preDispatch.call(this, b))) {
                        i = c.event.handlers.call(this, b, f);
                        for (e = 0;
                            (h = i[e++]) && !b.isPropagationStopped();) {
                            b.currentTarget = h.elem;
                            for (f = 0;
                                (g = h.handlers[f++]) && !b.isImmediatePropagationStopped();)
                                if (!b.rnamespace || b.rnamespace.test(g.namespace))
                                    if (b.handleObj = g, b.data = g.data, g = ((c.event.special[g.origType] || {}).handle || g.handler).apply(h.elem, j), void 0 !== g && !1 === (b.result = g)) b.preventDefault(),
                                        b.stopPropagation()
                        }
                        k.postDispatch && k.postDispatch.call(this, b);
                        return b.result
                    }
                },
                handlers: function(a, b) {
                    var e, f, g, h, i, j = [],
                        k = b.delegateCount,
                        n = a.target;
                    if (k && n.nodeType && !("click" === a.type && 1 <= a.button))
                        for (; n !== this; n = n.parentNode || this)
                            if (1 === n.nodeType && !("click" === a.type && !0 === n.disabled)) {
                                h = [];
                                i = {};
                                for (e = 0; e < k; e++) f = b[e], g = f.selector + " ", void 0 === i[g] && (i[g] = f.needsContext ? -1 < c(g, this).index(n) : c.find(g, this, null, [n]).length), i[g] && h.push(f);
                                h.length && j.push({
                                    elem: n,
                                    handlers: h
                                })
                            } k < b.length &&
                        j.push({
                            elem: this,
                            handlers: b.slice(k)
                        });
                    return j
                },
                addProp: function(a, b) {
                    Object.defineProperty(c.Event.prototype, a, {
                        enumerable: !0,
                        configurable: !0,
                        get: c.isFunction(b) ? function() {
                            if (this.originalEvent) return b(this.originalEvent)
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[a]
                        },
                        set: function(b) {
                            Object.defineProperty(this, a, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: b
                            })
                        }
                    })
                },
                fix: function(a) {
                    return a[c.expando] ? a : new c.Event(a)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !==
                                Hb() && this.focus) return this.focus(), !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === Hb() && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if ("checkbox" === this.type && this.click && P(this, "input")) return this.click(), !1
                        },
                        _default: function(a) {
                            return P(a.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(a) {
                            void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                        }
                    }
                }
            };
            c.removeEvent = function(a, b, c) {
                a.removeEventListener && a.removeEventListener(b,
                    c)
            };
            c.Event = function(a, b) {
                if (!(this instanceof c.Event)) return new c.Event(a, b);
                a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? Ia : oa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a;
                b && c.extend(this, b);
                this.timeStamp = a && a.timeStamp || c.now();
                this[c.expando] = !0
            };
            c.Event.prototype = {
                constructor: c.Event,
                isDefaultPrevented: oa,
                isPropagationStopped: oa,
                isImmediatePropagationStopped: oa,
                isSimulated: !1,
                preventDefault: function() {
                    var a = this.originalEvent;
                    this.isDefaultPrevented = Ia;
                    a && !this.isSimulated && a.preventDefault()
                },
                stopPropagation: function() {
                    var a = this.originalEvent;
                    this.isPropagationStopped = Ia;
                    a && !this.isSimulated && a.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var a = this.originalEvent;
                    this.isImmediatePropagationStopped = Ia;
                    a && !this.isSimulated && a.stopImmediatePropagation();
                    this.stopPropagation()
                }
            };
            c.each({
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
                "char": !0,
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
                which: function(a) {
                    var b = a.button;
                    return null == a.which && qd.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && rd.test(a.type) ? b & 1 ? 1 : b & 2 ? 3 : b &
                        4 ? 2 : 0 : a.which
                }
            }, c.event.addProp);
            c.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(a, b) {
                c.event.special[a] = {
                    delegateType: b,
                    bindType: b,
                    handle: function(a) {
                        var f, g = a.relatedTarget,
                            h = a.handleObj;
                        if (!g || g !== this && !c.contains(this, g)) a.type = h.origType, f = h.handler.apply(this, arguments), a.type = b;
                        return f
                    }
                }
            });
            c.fn.extend({
                on: function(a, b, c, f) {
                    return eb(this, a, b, c, f)
                },
                one: function(a, b, c, f) {
                    return eb(this, a, b, c, f, 1)
                },
                off: function(a, b, e) {
                    var f;
                    if (a && a.preventDefault && a.handleObj) return f = a.handleObj, c(a.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this;
                    if ("object" === ("undefined" === typeof a ? "undefined" : B(a))) {
                        for (f in a) this.off(f, b, a[f]);
                        return this
                    }
                    if (!1 === b || "function" === typeof b) e = b, b = void 0;
                    !1 === e && (e = oa);
                    return this.each(function() {
                        c.event.remove(this, a, e, b)
                    })
                }
            });
            var sd = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                td = /<script|<style|<link/i,
                Oc = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Nc = /^true\/(.*)/,
                Pc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            c.extend({
                htmlPrefilter: function(a) {
                    return a.replace(sd, "<$1></$2>")
                },
                clone: function(a, b, e) {
                    var f, g, h, i, j = a.cloneNode(!0),
                        k = c.contains(a.ownerDocument, a);
                    if (!u.noCloneChecked && (1 === a.nodeType || 11 === a.nodeType) && !c.isXMLDoc(a)) {
                        i = C(j);
                        h = C(a);
                        f = 0;
                        for (g = h.length; f < g; f++) {
                            var n = h[f],
                                o = i[f],
                                p = o.nodeName.toLowerCase();
                            if ("input" === p && qc.test(n.type)) o.checked = n.checked;
                            else if ("input" === p || "textarea" ===
                                p) o.defaultValue = n.defaultValue
                        }
                    }
                    if (b)
                        if (e) {
                            h = h || C(a);
                            i = i || C(j);
                            f = 0;
                            for (g = h.length; f < g; f++) Jb(h[f], i[f])
                        } else Jb(a, j);
                    i = C(j, "script");
                    0 < i.length && db(i, !k && C(a, "script"));
                    return j
                },
                cleanData: function(a) {
                    for (var b, e, f, g = c.event.special, h = 0; void 0 !== (e = a[h]); h++)
                        if (Xa(e)) {
                            if (b = e[s.expando]) {
                                if (b.events)
                                    for (f in b.events) g[f] ? c.event.remove(e, f) : c.removeEvent(e, f, b.handle);
                                e[s.expando] = void 0
                            }
                            e[D.expando] && (e[D.expando] = void 0)
                        }
                }
            });
            c.fn.extend({
                detach: function(a) {
                    return Lb(this, a, !0)
                },
                remove: function(a) {
                    return Lb(this,
                        a)
                },
                text: function(a) {
                    return $(this, function(a) {
                        return void 0 === a ? c.text(this) : this.empty().each(function() {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) this.textContent = a
                        })
                    }, null, a, arguments.length)
                },
                append: function() {
                    return pa(this, arguments, function(a) {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && Ib(this, a).appendChild(a)
                    })
                },
                prepend: function() {
                    return pa(this, arguments, function(a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = Ib(this, a);
                            b.insertBefore(a,
                                b.firstChild)
                        }
                    })
                },
                before: function() {
                    return pa(this, arguments, function(a) {
                        this.parentNode && this.parentNode.insertBefore(a, this)
                    })
                },
                after: function() {
                    return pa(this, arguments, function(a) {
                        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (c.cleanData(C(a, !1)), a.textContent = "");
                    return this
                },
                clone: function(a, b) {
                    a = null == a ? !1 : a;
                    b = null == b ? a : b;
                    return this.map(function() {
                        return c.clone(this, a, b)
                    })
                },
                html: function(a) {
                    return $(this,
                        function(a) {
                            var e = this[0] || {},
                                f = 0,
                                g = this.length;
                            if (void 0 === a && 1 === e.nodeType) return e.innerHTML;
                            if ("string" === typeof a && !td.test(a) && !H[(Fb.exec(a) || ["", ""])[1].toLowerCase()]) {
                                a = c.htmlPrefilter(a);
                                try {
                                    for (; f < g; f++) e = this[f] || {}, 1 === e.nodeType && (c.cleanData(C(e, !1)), e.innerHTML = a);
                                    e = 0
                                } catch (h) {}
                            }
                            e && this.empty().append(a)
                        }, null, a, arguments.length)
                },
                replaceWith: function() {
                    var a = [];
                    return pa(this, arguments, function(b) {
                        var e = this.parentNode;
                        0 > c.inArray(this, a) && (c.cleanData(C(this)), e && e.replaceChild(b,
                            this))
                    }, a)
                }
            });
            c.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(a, b) {
                c.fn[a] = function(a) {
                    for (var f = [], g = c(a), h = g.length - 1, i = 0; i <= h; i++) a = i === h ? this : this.clone(!0), c(g[i])[b](a), kb.apply(f, a.get());
                    return this.pushStack(f)
                }
            });
            var Mb = /^margin/,
                fb = RegExp("^(" + oc + ")(?!px)[a-z%]+$", "i"),
                Ja = function(a) {
                    var b = a.ownerDocument.defaultView;
                    if (!b || !b.opener) b = p;
                    return b.getComputedStyle(a)
                };
            var bb = function() {
                    if (S) {
                        S.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                        S.innerHTML = "";
                        $a.appendChild(ab);
                        var a = p.getComputedStyle(S);
                        sc = "1%" !== a.top;
                        tc = "2px" === a.marginLeft;
                        uc = "4px" === a.width;
                        S.style.marginRight = "50%";
                        vc = "4px" === a.marginRight;
                        $a.removeChild(ab);
                        S = null
                    }
                },
                sc, uc, vc, tc, ab = r.createElement("div"),
                S = r.createElement("div");
            S.style && (S.style.backgroundClip = "content-box", S.cloneNode(!0).style.backgroundClip = "", u.clearCloneStyle = "content-box" === S.style.backgroundClip, ab.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
                ab.appendChild(S), c.extend(u, {
                    pixelPosition: function() {
                        bb();
                        return sc
                    },
                    boxSizingReliable: function() {
                        bb();
                        return uc
                    },
                    pixelMarginRight: function() {
                        bb();
                        return vc
                    },
                    reliableMarginLeft: function() {
                        bb();
                        return tc
                    }
                }));
            var ud = /^(none|table(?!-c[ea]).+)/,
                wc = /^--/,
                vd = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                xc = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Qb = ["Webkit", "Moz", "ms"],
                Pb = r.createElement("div").style;
            c.extend({
                cssHooks: {
                    opacity: {
                        get: function(a, b) {
                            if (b) {
                                var c = ya(a, "opacity");
                                return "" === c ? "1" :
                                    c
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
                    "float": "cssFloat"
                },
                style: function(a, b, e, f) {
                    if (a && !(3 === a.nodeType || 8 === a.nodeType || !a.style)) {
                        var g, h, i, j = c.camelCase(b),
                            k = wc.test(b),
                            n = a.style;
                        k || (b = Ob(j));
                        i = c.cssHooks[b] || c.cssHooks[j];
                        if (void 0 !== e) {
                            h = "undefined" === typeof e ? "undefined" : B(e);
                            if ("string" === h && (g = xa.exec(e)) && g[1]) e = Cb(a, b, g), h = "number";
                            if (!(null == e || e !== e))
                                if ("number" === h && (e += g && g[3] || (c.cssNumber[j] ? "" : "px")), !u.clearCloneStyle && ("" === e && 0 === b.indexOf("background")) && (n[b] = "inherit"), !i || !("set" in i) || void 0 !== (e = i.set(a, e, f))) k ? n.setProperty(b, e) : n[b] = e
                        } else return i && "get" in i && void 0 !== (g = i.get(a, !1, f)) ? g : n[b]
                    }
                },
                css: function(a, b, e, f) {
                    var g, h;
                    h = c.camelCase(b);
                    wc.test(b) || (b = Ob(h));
                    (h = c.cssHooks[b] || c.cssHooks[h]) && "get" in h && (g = h.get(a, !0, e));
                    void 0 === g && (g = ya(a, b, f));
                    "normal" === g && b in xc && (g = xc[b]);
                    return "" === e || e ? (a = parseFloat(g),
                        !0 === e || isFinite(a) ? a || 0 : g) : g
                }
            });
            c.each(["height", "width"], function(a, b) {
                c.cssHooks[b] = {
                    get: function(a, f, g) {
                        if (f) return ud.test(c.css(a, "display")) && (!a.getClientRects().length || !a.getBoundingClientRect().width) ? pc(a, vd, function() {
                            return Tb(a, b, g)
                        }) : Tb(a, b, g)
                    },
                    set: function(a, f, g) {
                        var h, i = g && Ja(a);
                        if ((g = g && Sb(a, b, g, "border-box" === c.css(a, "boxSizing", !1, i), i)) && (h = xa.exec(f)) && "px" !== (h[3] || "px")) a.style[b] = f, f = c.css(a, b);
                        return Rb(a, f, g)
                    }
                }
            });
            c.cssHooks.marginLeft = Nb(u.reliableMarginLeft, function(a,
                b) {
                if (b) return (parseFloat(ya(a, "marginLeft")) || a.getBoundingClientRect().left - pc(a, {
                    marginLeft: 0
                }, function() {
                    return a.getBoundingClientRect().left
                })) + "px"
            });
            c.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(a, b) {
                c.cssHooks[a + b] = {
                    expand: function(c) {
                        for (var f = 0, g = {}, c = "string" === typeof c ? c.split(" ") : [c]; 4 > f; f++) g[a + ba[f] + b] = c[f] || c[f - 2] || c[0];
                        return g
                    }
                };
                Mb.test(a) || (c.cssHooks[a + b].set = Rb)
            });
            c.fn.extend({
                css: function(a, b) {
                    return $(this, function(a, b, g) {
                        var h, i = {},
                            j = 0;
                        if (Array.isArray(b)) {
                            g = Ja(a);
                            for (h = b.length; j < h; j++) i[b[j]] = c.css(a, b[j], !1, g);
                            return i
                        }
                        return void 0 !== g ? c.style(a, b, g) : c.css(a, b)
                    }, a, b, 1 < arguments.length)
                }
            });
            c.Tween = E;
            E.prototype = {
                constructor: E,
                init: function(a, b, e, f, g, h) {
                    this.elem = a;
                    this.prop = e;
                    this.easing = g || c.easing._default;
                    this.options = b;
                    this.start = this.now = this.cur();
                    this.end = f;
                    this.unit = h || (c.cssNumber[e] ? "" : "px")
                },
                cur: function() {
                    var a = E.propHooks[this.prop];
                    return a && a.get ? a.get(this) : E.propHooks._default.get(this)
                },
                run: function(a) {
                    var b, e = E.propHooks[this.prop];
                    this.pos =
                        this.options.duration ? b = c.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : b = a;
                    this.now = (this.end - this.start) * b + this.start;
                    this.options.step && this.options.step.call(this.elem, this.now, this);
                    e && e.set ? e.set(this) : E.propHooks._default.set(this);
                    return this
                }
            };
            E.prototype.init.prototype = E.prototype;
            E.propHooks = {
                _default: {
                    get: function(a) {
                        if (1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop]) return a.elem[a.prop];
                        a = c.css(a.elem, a.prop, "");
                        return !a || "auto" === a ? 0 :
                            a
                    },
                    set: function(a) {
                        if (c.fx.step[a.prop]) c.fx.step[a.prop](a);
                        else 1 === a.elem.nodeType && (null != a.elem.style[c.cssProps[a.prop]] || c.cssHooks[a.prop]) ? c.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                    }
                }
            };
            E.propHooks.scrollTop = E.propHooks.scrollLeft = {
                set: function(a) {
                    a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
                }
            };
            c.easing = {
                linear: function(a) {
                    return a
                },
                swing: function(a) {
                    return 0.5 - Math.cos(a * Math.PI) / 2
                },
                _default: "swing"
            };
            c.fx = E.prototype.init;
            c.fx.step = {};
            var qa, Ka, wd = /^(?:toggle|show|hide)$/,
                xd = /queueHooks$/;
            c.Animation = c.extend(Q, {
                tweeners: {
                    "*": [function(a, b) {
                        var c = this.createTween(a, b);
                        Cb(c.elem, a, xa.exec(b), c);
                        return c
                    }]
                },
                tweener: function(a, b) {
                    c.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(F);
                    for (var e, f = 0, g = a.length; f < g; f++) e = a[f], Q.tweeners[e] = Q.tweeners[e] || [], Q.tweeners[e].unshift(b)
                },
                prefilters: [function(a, b, e) {
                    var f, g, h, i, j, k, n;
                    n = "width" in b || "height" in b;
                    var o = this,
                        p = {},
                        l = a.style,
                        r = a.nodeType && Ha(a),
                        t = s.get(a, "fxshow");
                    e.queue || (i = c._queueHooks(a, "fx"), null == i.unqueued && (i.unqueued =
                        0, j = i.empty.fire, i.empty.fire = function() {
                            i.unqueued || j()
                        }), i.unqueued++, o.always(function() {
                        o.always(function() {
                            i.unqueued--;
                            c.queue(a, "fx").length || i.empty.fire()
                        })
                    }));
                    for (f in b)
                        if (g = b[f], wd.test(g)) {
                            delete b[f];
                            h = h || "toggle" === g;
                            if (g === (r ? "hide" : "show"))
                                if ("show" === g && t && void 0 !== t[f]) r = !0;
                                else continue;
                            p[f] = t && t[f] || c.style(a, f)
                        } if ((b = !c.isEmptyObject(b)) || !c.isEmptyObject(p)) {
                        if (n && 1 === a.nodeType && (e.overflow = [l.overflow, l.overflowX, l.overflowY], k = t && t.display, null == k && (k = s.get(a, "display")),
                                n = c.css(a, "display"), "none" === n && (k ? n = k : (na([a], !0), k = a.style.display || k, n = c.css(a, "display"), na([a]))), ("inline" === n || "inline-block" === n && null != k) && "none" === c.css(a, "float"))) b || (o.done(function() {
                            l.display = k
                        }), null == k && (n = l.display, k = "none" === n ? "" : n)), l.display = "inline-block";
                        e.overflow && (l.overflow = "hidden", o.always(function() {
                            l.overflow = e.overflow[0];
                            l.overflowX = e.overflow[1];
                            l.overflowY = e.overflow[2]
                        }));
                        b = !1;
                        for (f in p) b || (t ? "hidden" in t && (r = t.hidden) : t = s.access(a, "fxshow", {
                            display: k
                        }), h && (t.hidden = !r), r && na([a], !0), o.done(function() {
                            r || na([a]);
                            s.remove(a, "fxshow");
                            for (f in p) c.style(a, f, p[f])
                        })), b = Vb(r ? t[f] : 0, f, o), f in t || (t[f] = b.start, r && (b.end = b.start, b.start = 0))
                    }
                }],
                prefilter: function(a, b) {
                    b ? Q.prefilters.unshift(a) : Q.prefilters.push(a)
                }
            });
            c.speed = function(a, b, e) {
                var f = a && "object" === ("undefined" === typeof a ? "undefined" : B(a)) ? c.extend({}, a) : {
                    complete: e || !e && b || c.isFunction(a) && a,
                    duration: a,
                    easing: e && b || b && !c.isFunction(b) && b
                };
                c.fx.off ? f.duration = 0 : "number" !== typeof f.duration && (f.duration = f.duration in
                    c.fx.speeds ? c.fx.speeds[f.duration] : c.fx.speeds._default);
                if (null == f.queue || !0 === f.queue) f.queue = "fx";
                f.old = f.complete;
                f.complete = function() {
                    c.isFunction(f.old) && f.old.call(this);
                    f.queue && c.dequeue(this, f.queue)
                };
                return f
            };
            c.fn.extend({
                fadeTo: function(a, b, c, f) {
                    return this.filter(Ha).css("opacity", 0).show().end().animate({
                        opacity: b
                    }, a, c, f)
                },
                animate: function(a, b, e, f) {
                    var g = c.isEmptyObject(a),
                        h = c.speed(b, e, f),
                        b = function() {
                            var b = Q(this, c.extend({}, a), h);
                            (g || s.get(this, "finish")) && b.stop(!0)
                        };
                    b.finish =
                        b;
                    return g || !1 === h.queue ? this.each(b) : this.queue(h.queue, b)
                },
                stop: function(a, b, e) {
                    var f = function(a) {
                        var b = a.stop;
                        delete a.stop;
                        b(e)
                    };
                    "string" !== typeof a && (e = b, b = a, a = void 0);
                    b && !1 !== a && this.queue(a || "fx", []);
                    return this.each(function() {
                        var b = !0,
                            h = null != a && a + "queueHooks",
                            i = c.timers,
                            j = s.get(this);
                        if (h) j[h] && j[h].stop && f(j[h]);
                        else
                            for (h in j) j[h] && (j[h].stop && xd.test(h)) && f(j[h]);
                        for (h = i.length; h--;)
                            if (i[h].elem === this && (null == a || i[h].queue === a)) i[h].anim.stop(e), b = !1, i.splice(h, 1);
                        (b || !e) && c.dequeue(this,
                            a)
                    })
                },
                finish: function(a) {
                    !1 !== a && (a = a || "fx");
                    return this.each(function() {
                        var b, e = s.get(this),
                            f = e[a + "queue"];
                        b = e[a + "queueHooks"];
                        var g = c.timers,
                            h = f ? f.length : 0;
                        e.finish = !0;
                        c.queue(this, a, []);
                        b && b.stop && b.stop.call(this, !0);
                        for (b = g.length; b--;) g[b].elem === this && g[b].queue === a && (g[b].anim.stop(!0), g.splice(b, 1));
                        for (b = 0; b < h; b++) f[b] && f[b].finish && f[b].finish.call(this);
                        delete e.finish
                    })
                }
            });
            c.each(["toggle", "show", "hide"], function(a, b) {
                var e = c.fn[b];
                c.fn[b] = function(a, c, h) {
                    return null == a || "boolean" ===
                        typeof a ? e.apply(this, arguments) : this.animate(La(b, !0), a, c, h)
                }
            });
            c.each({
                slideDown: La("show"),
                slideUp: La("hide"),
                slideToggle: La("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(a, b) {
                c.fn[a] = function(a, c, g) {
                    return this.animate(b, a, c, g)
                }
            });
            c.timers = [];
            c.fx.tick = function() {
                var a, b = 0,
                    e = c.timers;
                for (qa = c.now(); b < e.length; b++) a = e[b], !a() && e[b] === a && e.splice(b--, 1);
                e.length || c.fx.stop();
                qa = void 0
            };
            c.fx.timer = function(a) {
                c.timers.push(a);
                c.fx.start()
            };
            c.fx.interval =
                13;
            c.fx.start = function() {
                Ka || (Ka = !0, gb())
            };
            c.fx.stop = function() {
                Ka = null
            };
            c.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            };
            c.fn.delay = function(a, b) {
                a = c.fx ? c.fx.speeds[a] || a : a;
                return this.queue(b || "fx", function(b, c) {
                    var g = p.setTimeout(b, a);
                    c.stop = function() {
                        p.clearTimeout(g)
                    }
                })
            };
            var ua = r.createElement("input"),
                yd = r.createElement("select").appendChild(r.createElement("option"));
            ua.type = "checkbox";
            u.checkOn = "" !== ua.value;
            u.optSelected = yd.selected;
            ua = r.createElement("input");
            ua.value = "t";
            ua.type = "radio";
            u.radioValue =
                "t" === ua.value;
            var yc, Ca = c.expr.attrHandle;
            c.fn.extend({
                attr: function(a, b) {
                    return $(this, c.attr, a, b, 1 < arguments.length)
                },
                removeAttr: function(a) {
                    return this.each(function() {
                        c.removeAttr(this, a)
                    })
                }
            });
            c.extend({
                attr: function(a, b, e) {
                    var f, g, h = a.nodeType;
                    if (!(3 === h || 8 === h || 2 === h)) {
                        if ("undefined" === typeof a.getAttribute) return c.prop(a, b, e);
                        if (1 !== h || !c.isXMLDoc(a)) g = c.attrHooks[b.toLowerCase()] || (c.expr.match.bool.test(b) ? yc : void 0);
                        if (void 0 !== e) {
                            if (null === e) {
                                c.removeAttr(a, b);
                                return
                            }
                            if (g && "set" in g &&
                                void 0 !== (f = g.set(a, e, b))) return f;
                            a.setAttribute(b, e + "");
                            return e
                        }
                        if (g && "get" in g && null !== (f = g.get(a, b))) return f;
                        f = c.find.attr(a, b);
                        return null == f ? void 0 : f
                    }
                },
                attrHooks: {
                    type: {
                        set: function(a, b) {
                            if (!u.radioValue && "radio" === b && P(a, "input")) {
                                var c = a.value;
                                a.setAttribute("type", b);
                                c && (a.value = c);
                                return b
                            }
                        }
                    }
                },
                removeAttr: function(a, b) {
                    var c, f = 0,
                        g = b && b.match(F);
                    if (g && 1 === a.nodeType)
                        for (; c = g[f++];) a.removeAttribute(c)
                }
            });
            yc = {
                set: function(a, b, e) {
                    !1 === b ? c.removeAttr(a, e) : a.setAttribute(e, e);
                    return e
                }
            };
            c.each(c.expr.match.bool.source.match(/\w+/g),
                function(a, b) {
                    var e = Ca[b] || c.find.attr;
                    Ca[b] = function(a, b, c) {
                        var i, j, k = b.toLowerCase();
                        c || (j = Ca[k], Ca[k] = i, i = null != e(a, b, c) ? k : null, Ca[k] = j);
                        return i
                    }
                });
            var zd = /^(?:input|select|textarea|button)$/i,
                Ad = /^(?:a|area)$/i;
            c.fn.extend({
                prop: function(a, b) {
                    return $(this, c.prop, a, b, 1 < arguments.length)
                },
                removeProp: function(a) {
                    return this.each(function() {
                        delete this[c.propFix[a] || a]
                    })
                }
            });
            c.extend({
                prop: function(a, b, e) {
                    var f, g, h = a.nodeType;
                    if (!(3 === h || 8 === h || 2 === h)) {
                        if (1 !== h || !c.isXMLDoc(a)) b = c.propFix[b] || b,
                            g = c.propHooks[b];
                        return void 0 !== e ? g && "set" in g && void 0 !== (f = g.set(a, e, b)) ? f : a[b] = e : g && "get" in g && null !== (f = g.get(a, b)) ? f : a[b]
                    }
                },
                propHooks: {
                    tabIndex: {
                        get: function(a) {
                            var b = c.find.attr(a, "tabindex");
                            return b ? parseInt(b, 10) : zd.test(a.nodeName) || Ad.test(a.nodeName) && a.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                }
            });
            u.optSelected || (c.propHooks.selected = {
                get: function(a) {
                    (a = a.parentNode) && a.parentNode && a.parentNode.selectedIndex;
                    return null
                },
                set: function(a) {
                    if (a = a.parentNode) a.selectedIndex,
                        a.parentNode && a.parentNode.selectedIndex
                }
            });
            c.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
                c.propFix[this.toLowerCase()] = this
            });
            c.fn.extend({
                addClass: function(a) {
                    var b, e, f, g, h, i, j = 0;
                    if (c.isFunction(a)) return this.each(function(b) {
                        c(this).addClass(a.call(this, b, da(this)))
                    });
                    if ("string" === typeof a && a)
                        for (b = a.match(F) || []; e = this[j++];)
                            if (g = da(e), f = 1 === e.nodeType && " " + ca(g) + " ") {
                                for (i = 0; h = b[i++];) 0 > f.indexOf(" " + h +
                                    " ") && (f += h + " ");
                                f = ca(f);
                                g !== f && e.setAttribute("class", f)
                            } return this
                },
                removeClass: function(a) {
                    var b, e, f, g, h, i, j = 0;
                    if (c.isFunction(a)) return this.each(function(b) {
                        c(this).removeClass(a.call(this, b, da(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" === typeof a && a)
                        for (b = a.match(F) || []; e = this[j++];)
                            if (g = da(e), f = 1 === e.nodeType && " " + ca(g) + " ") {
                                for (i = 0; h = b[i++];)
                                    for (; - 1 < f.indexOf(" " + h + " ");) f = f.replace(" " + h + " ", " ");
                                f = ca(f);
                                g !== f && e.setAttribute("class", f)
                            } return this
                },
                toggleClass: function(a,
                    b) {
                    var e = "undefined" === typeof a ? "undefined" : B(a);
                    return "boolean" === typeof b && "string" === e ? b ? this.addClass(a) : this.removeClass(a) : c.isFunction(a) ? this.each(function(e) {
                        c(this).toggleClass(a.call(this, e, da(this), b), b)
                    }) : this.each(function() {
                        var b, g, h, i;
                        if ("string" === e) {
                            g = 0;
                            h = c(this);
                            for (i = a.match(F) || []; b = i[g++];) h.hasClass(b) ? h.removeClass(b) : h.addClass(b)
                        } else if (void 0 === a || "boolean" === e)(b = da(this)) && s.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : s.get(this,
                            "__className__") || "")
                    })
                },
                hasClass: function(a) {
                    for (var b, c = 0, a = " " + a + " "; b = this[c++];)
                        if (1 === b.nodeType && -1 < (" " + ca(da(b)) + " ").indexOf(a)) return !0;
                    return !1
                }
            });
            var Bd = /\r/g;
            c.fn.extend({
                val: function(a) {
                    var b, e, f, g = this[0];
                    if (arguments.length) return f = c.isFunction(a), this.each(function(e) {
                        if (1 === this.nodeType && (e = f ? a.call(this, e, c(this).val()) : a, null == e ? e = "" : "number" === typeof e ? e += "" : Array.isArray(e) && (e = c.map(e, function(a) {
                                    return null == a ? "" : a + ""
                                })), b = c.valHooks[this.type] || c.valHooks[this.nodeName.toLowerCase()],
                                !b || !("set" in b) || void 0 === b.set(this, e, "value"))) this.value = e
                    });
                    if (g) {
                        if ((b = c.valHooks[g.type] || c.valHooks[g.nodeName.toLowerCase()]) && "get" in b && void 0 !== (e = b.get(g, "value"))) return e;
                        e = g.value;
                        return "string" === typeof e ? e.replace(Bd, "") : null == e ? "" : e
                    }
                }
            });
            c.extend({
                valHooks: {
                    option: {
                        get: function(a) {
                            var b = c.find.attr(a, "value");
                            return null != b ? b : ca(c.text(a))
                        }
                    },
                    select: {
                        get: function(a) {
                            for (var b, e = a.options, f = a.selectedIndex, g = "select-one" === a.type, h = g ? null : [], i = g ? f + 1 : e.length, a = 0 > f ? i : g ? f : 0; a < i; a++)
                                if (b =
                                    e[a], (b.selected || a === f) && !b.disabled && (!b.parentNode.disabled || !P(b.parentNode, "optgroup"))) {
                                    b = c(b).val();
                                    if (g) return b;
                                    h.push(b)
                                } return h
                        },
                        set: function(a, b) {
                            for (var e, f, g = a.options, h = c.makeArray(b), i = g.length; i--;)
                                if (f = g[i], f.selected = -1 < c.inArray(c.valHooks.option.get(f), h)) e = !0;
                            e || (a.selectedIndex = -1);
                            return h
                        }
                    }
                }
            });
            c.each(["radio", "checkbox"], function() {
                c.valHooks[this] = {
                    set: function(a, b) {
                        if (Array.isArray(b)) return a.checked = -1 < c.inArray(c(a).val(), b)
                    }
                };
                u.checkOn || (c.valHooks[this].get = function(a) {
                    return null ===
                        a.getAttribute("value") ? "on" : a.value
                })
            });
            var zc = /^(?:focusinfocus|focusoutblur)$/;
            c.extend(c.event, {
                trigger: function(a, b, e, f) {
                    var g, h, i, j, k, n, o = [e || r],
                        q = Na.call(a, "type") ? a.type : a;
                    n = Na.call(a, "namespace") ? a.namespace.split(".") : [];
                    h = g = e = e || r;
                    if (!(3 === e.nodeType || 8 === e.nodeType) && !zc.test(q + c.event.triggered))
                        if (-1 < q.indexOf(".") && (n = q.split("."), q = n.shift(), n.sort()), j = 0 > q.indexOf(":") && "on" + q, a = a[c.expando] ? a : new c.Event(q, "object" === ("undefined" === typeof a ? "undefined" : B(a)) && a), a.isTrigger = f ? 2 :
                            3, a.namespace = n.join("."), a.rnamespace = a.namespace ? RegExp("(^|\\.)" + n.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = e), b = null == b ? [a] : c.makeArray(b, [a]), n = c.event.special[q] || {}, f || !(n.trigger && !1 === n.trigger.apply(e, b))) {
                            if (!f && !n.noBubble && !c.isWindow(e)) {
                                i = n.delegateType || q;
                                zc.test(i + q) || (h = h.parentNode);
                                for (; h; h = h.parentNode) o.push(h), g = h;
                                if (g === (e.ownerDocument || r)) o.push(g.defaultView || g.parentWindow || p)
                            }
                            for (g = 0;
                                (h = o[g++]) && !a.isPropagationStopped();)
                                if (a.type = 1 < g ?
                                    i : n.bindType || q, (k = (s.get(h, "events") || {})[a.type] && s.get(h, "handle")) && k.apply(h, b), (k = j && h[j]) && k.apply && Xa(h)) a.result = k.apply(h, b), !1 === a.result && a.preventDefault();
                            a.type = q;
                            if (!f && !a.isDefaultPrevented() && (!n._default || !1 === n._default.apply(o.pop(), b)) && Xa(e) && j && c.isFunction(e[q]) && !c.isWindow(e))(g = e[j]) && (e[j] = null), c.event.triggered = q, e[q](), c.event.triggered = void 0, g && (e[j] = g);
                            return a.result
                        }
                },
                simulate: function(a, b, e) {
                    a = c.extend(new c.Event, e, {
                        type: a,
                        isSimulated: !0
                    });
                    c.event.trigger(a,
                        null, b)
                }
            });
            c.fn.extend({
                trigger: function(a, b) {
                    return this.each(function() {
                        c.event.trigger(a, b, this)
                    })
                },
                triggerHandler: function(a, b) {
                    var e = this[0];
                    if (e) return c.event.trigger(a, b, e, !0)
                }
            });
            c.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
                c.fn[b] = function(a, c) {
                    return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
                }
            });
            c.fn.extend({
                hover: function(a,
                    b) {
                    return this.mouseenter(a).mouseleave(b || a)
                }
            });
            u.focusin = "onfocusin" in p;
            u.focusin || c.each({
                focus: "focusin",
                blur: "focusout"
            }, function(a, b) {
                var e = function(a) {
                    c.event.simulate(b, a.target, c.event.fix(a))
                };
                c.event.special[b] = {
                    setup: function() {
                        var c = this.ownerDocument || this,
                            g = s.access(c, b);
                        g || c.addEventListener(a, e, !0);
                        s.access(c, b, (g || 0) + 1)
                    },
                    teardown: function() {
                        var c = this.ownerDocument || this,
                            g = s.access(c, b) - 1;
                        g ? s.access(c, b, g) : (c.removeEventListener(a, e, !0), s.remove(c, b))
                    }
                }
            });
            var Da = p.location,
                Ac = c.now(),
                wb = /\?/;
            c.parseXML = function(a) {
                var b;
                if (!a || "string" !== typeof a) return null;
                try {
                    b = (new p.DOMParser).parseFromString(a, "text/xml")
                } catch (e) {
                    b = void 0
                }(!b || b.getElementsByTagName("parsererror").length) && c.error("Invalid XML: " + a);
                return b
            };
            var Qc = /\[\]$/,
                Bc = /\r?\n/g,
                Cd = /^(?:submit|button|image|reset|file)$/i,
                Dd = /^(?:input|select|textarea|keygen)/i;
            c.param = function(a, b) {
                var e, f = [],
                    g = function(a, b) {
                        var e = c.isFunction(b) ? b() : b;
                        f[f.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == e ? "" : e)
                    };
                if (Array.isArray(a) ||
                    a.jquery && !c.isPlainObject(a)) c.each(a, function() {
                    g(this.name, this.value)
                });
                else
                    for (e in a) hb(e, a[e], b, g);
                return f.join("&")
            };
            c.fn.extend({
                serialize: function() {
                    return c.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var a = c.prop(this, "elements");
                        return a ? c.makeArray(a) : this
                    }).filter(function() {
                        var a = this.type;
                        return this.name && !c(this).is(":disabled") && Dd.test(this.nodeName) && !Cd.test(a) && (this.checked || !qc.test(a))
                    }).map(function(a, b) {
                        var e = c(this).val();
                        return null ==
                            e ? null : Array.isArray(e) ? c.map(e, function(a) {
                                return {
                                    name: b.name,
                                    value: a.replace(Bc, "\r\n")
                                }
                            }) : {
                                name: b.name,
                                value: e.replace(Bc, "\r\n")
                            }
                    }).get()
                }
            });
            var Ed = /%20/g,
                Fd = /#.*$/,
                Gd = /([?&])_=[^&]*/,
                Hd = /^(.*?):[ \t]*([^\r\n]*)$/mg,
                Id = /^(?:GET|HEAD)$/,
                Jd = /^\/\//,
                Cc = {},
                ib = {},
                Dc = "*/".concat("*"),
                xb = r.createElement("a");
            xb.href = Da.href;
            c.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Da.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Da.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Dc,
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
                        "text xml": c.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(a, b) {
                    return b ? jb(jb(a, c.ajaxSettings),
                        b) : jb(c.ajaxSettings, a)
                },
                ajaxPrefilter: Wb(Cc),
                ajaxTransport: Wb(ib),
                ajax: function(a, b) {
                    function e(a, b, e, i) {
                        var k, q, r, u;
                        u = b;
                        if (!n) {
                            n = !0;
                            j && p.clearTimeout(j);
                            f = void 0;
                            h = i || "";
                            A.readyState = 0 < a ? 4 : 0;
                            i = 200 <= a && 300 > a || 304 === a;
                            if (e) {
                                r = l;
                                for (var w = A, y, B, C, K, D = r.contents, E = r.dataTypes;
                                    "*" === E[0];) E.shift(), void 0 === y && (y = r.mimeType || w.getResponseHeader("Content-Type"));
                                if (y)
                                    for (B in D)
                                        if (D[B] && D[B].test(y)) {
                                            E.unshift(B);
                                            break
                                        } if (E[0] in e) C = E[0];
                                else {
                                    for (B in e) {
                                        if (!E[0] || r.converters[B + " " + E[0]]) {
                                            C = B;
                                            break
                                        }
                                        K ||
                                            (K = B)
                                    }
                                    C = C || K
                                }
                                C ? (C !== E[0] && E.unshift(C), r = e[C]) : r = void 0
                            }
                            a: {
                                e = l;y = r;B = A;C = i;
                                var H, M, F, w = {},
                                    D = e.dataTypes.slice();
                                if (D[1])
                                    for (M in e.converters) w[M.toLowerCase()] = e.converters[M];
                                for (K = D.shift(); K;)
                                    if (e.responseFields[K] && (B[e.responseFields[K]] = y), !F && (C && e.dataFilter) && (y = e.dataFilter(y, e.dataType)), F = K, K = D.shift())
                                        if ("*" === K) K = F;
                                        else if ("*" !== F && F !== K) {
                                    M = w[F + " " + K] || w["* " + K];
                                    if (!M)
                                        for (H in w)
                                            if (r = H.split(" "), r[1] === K && (M = w[F + " " + r[0]] || w["* " + r[0]])) {
                                                !0 === M ? M = w[H] : !0 !== w[H] && (K = r[0], D.unshift(r[1]));
                                                break
                                            } if (!0 !== M)
                                        if (M && e.throws) y = M(y);
                                        else try {
                                            y = M(y)
                                        } catch (L) {
                                            r = {
                                                state: "parsererror",
                                                error: M ? L : "No conversion from " + F + " to " + K
                                            };
                                            break a
                                        }
                                }
                                r = {
                                    state: "success",
                                    data: y
                                }
                            }
                            if (i) l.ifModified && ((u = A.getResponseHeader("Last-Modified")) && (c.lastModified[g] = u), (u = A.getResponseHeader("etag")) && (c.etag[g] = u)), 204 === a || "HEAD" === l.type ? u = "nocontent" : 304 === a ? u = "notmodified" : (u = r.state, k = r.data, q = r.error, i = !q);
                            else if (q = u, a || !u) u = "error", 0 > a && (a = 0);
                            A.status = a;
                            A.statusText = (b || u) + "";
                            i ? v.resolveWith(s, [k, u, A]) : v.rejectWith(s,
                                [A, u, q]);
                            A.statusCode(x);
                            x = void 0;
                            o && t.trigger(i ? "ajaxSuccess" : "ajaxError", [A, l, i ? k : q]);
                            z.fireWith(s, [A, u]);
                            o && (t.trigger("ajaxComplete", [A, l]), --c.active || c.event.trigger("ajaxStop"))
                        }
                    }
                    if ("object" === ("undefined" === typeof a ? "undefined" : B(a))) b = a, a = void 0;
                    var b = b || {},
                        f, g, h, i, j, k, n, o, q, l = c.ajaxSetup({}, b),
                        s = l.context || l,
                        t = l.context && (s.nodeType || s.jquery) ? c(s) : c.event,
                        v = c.Deferred(),
                        z = c.Callbacks("once memory"),
                        x = l.statusCode || {},
                        u = {},
                        w = {},
                        y = "canceled",
                        A = {
                            readyState: 0,
                            getResponseHeader: function(a) {
                                var b;
                                if (n) {
                                    if (!i)
                                        for (i = {}; b = Hd.exec(h);) i[b[1].toLowerCase()] = b[2];
                                    b = i[a.toLowerCase()]
                                }
                                return null == b ? null : b
                            },
                            getAllResponseHeaders: function() {
                                return n ? h : null
                            },
                            setRequestHeader: function(a, b) {
                                null == n && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, u[a] = b);
                                return this
                            },
                            overrideMimeType: function(a) {
                                null == n && (l.mimeType = a);
                                return this
                            },
                            statusCode: function(a) {
                                var b;
                                if (a)
                                    if (n) A.always(a[A.status]);
                                    else
                                        for (b in a) x[b] = [x[b], a[b]];
                                return this
                            },
                            abort: function(a) {
                                a = a || y;
                                f && f.abort(a);
                                e(0, a);
                                return this
                            }
                        };
                    v.promise(A);
                    l.url = ((a || l.url || Da.href) + "").replace(Jd, Da.protocol + "//");
                    l.type = b.method || b.type || l.method || l.type;
                    l.dataTypes = (l.dataType || "*").toLowerCase().match(F) || [""];
                    if (null == l.crossDomain) {
                        k = r.createElement("a");
                        try {
                            k.href = l.url, k.href = k.href, l.crossDomain = xb.protocol + "//" + xb.host !== k.protocol + "//" + k.host
                        } catch (D) {
                            l.crossDomain = !0
                        }
                    }
                    l.data && (l.processData && "string" !== typeof l.data) && (l.data = c.param(l.data, l.traditional));
                    Xb(Cc, l, b, A);
                    if (n) return A;
                    (o = c.event && l.global) && 0 === c.active++ && c.event.trigger("ajaxStart");
                    l.type = l.type.toUpperCase();
                    l.hasContent = !Id.test(l.type);
                    g = l.url.replace(Fd, "");
                    if (l.hasContent) {
                        if (l.data && l.processData && 0 === (l.contentType || "").indexOf("application/x-www-form-urlencoded")) l.data = l.data.replace(Ed, "+")
                    } else k = l.url.slice(g.length), l.data && (g += (wb.test(g) ? "&" : "?") + l.data, delete l.data), !1 === l.cache && (g = g.replace(Gd, "$1"), k = (wb.test(g) ? "&" : "?") + "_=" + Ac++ + k), l.url = g + k;
                    l.ifModified && (c.lastModified[g] && A.setRequestHeader("If-Modified-Since", c.lastModified[g]), c.etag[g] && A.setRequestHeader("If-None-Match",
                        c.etag[g]));
                    (l.data && l.hasContent && !1 !== l.contentType || b.contentType) && A.setRequestHeader("Content-Type", l.contentType);
                    A.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Dc + "; q=0.01" : "") : l.accepts["*"]);
                    for (q in l.headers) A.setRequestHeader(q, l.headers[q]);
                    if (l.beforeSend && (!1 === l.beforeSend.call(s, A, l) || n)) return A.abort();
                    y = "abort";
                    z.add(l.complete);
                    A.done(l.success);
                    A.fail(l.error);
                    if (f = Xb(ib, l, b, A)) {
                        A.readyState = 1;
                        o && t.trigger("ajaxSend",
                            [A, l]);
                        if (n) return A;
                        l.async && 0 < l.timeout && (j = p.setTimeout(function() {
                            A.abort("timeout")
                        }, l.timeout));
                        try {
                            n = !1, f.send(u, e)
                        } catch (C) {
                            if (n) throw C;
                            e(-1, C)
                        }
                    } else e(-1, "No Transport");
                    return A
                },
                getJSON: function(a, b, e) {
                    return c.get(a, b, e, "json")
                },
                getScript: function(a, b) {
                    return c.get(a, void 0, b, "script")
                }
            });
            c.each(["get", "post"], function(a, b) {
                c[b] = function(a, f, g, h) {
                    c.isFunction(f) && (h = h || g, g = f, f = void 0);
                    return c.ajax(c.extend({
                        url: a,
                        type: b,
                        dataType: h,
                        data: f,
                        success: g
                    }, c.isPlainObject(a) && a))
                }
            });
            c._evalUrl =
                function(a) {
                    return c.ajax({
                        url: a,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        "throws": !0
                    })
                };
            c.fn.extend({
                wrapAll: function(a) {
                    this[0] && (c.isFunction(a) && (a = a.call(this[0])), a = c(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && a.insertBefore(this[0]), a.map(function() {
                        for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                        return a
                    }).append(this));
                    return this
                },
                wrapInner: function(a) {
                    return c.isFunction(a) ? this.each(function(b) {
                        c(this).wrapInner(a.call(this, b))
                    }) : this.each(function() {
                        var b =
                            c(this),
                            e = b.contents();
                        e.length ? e.wrapAll(a) : b.append(a)
                    })
                },
                wrap: function(a) {
                    var b = c.isFunction(a);
                    return this.each(function(e) {
                        c(this).wrapAll(b ? a.call(this, e) : a)
                    })
                },
                unwrap: function(a) {
                    this.parent(a).not("body").each(function() {
                        c(this).replaceWith(this.childNodes)
                    });
                    return this
                }
            });
            c.expr.pseudos.hidden = function(a) {
                return !c.expr.pseudos.visible(a)
            };
            c.expr.pseudos.visible = function(a) {
                return !(!a.offsetWidth && !a.offsetHeight && !a.getClientRects().length)
            };
            c.ajaxSettings.xhr = function() {
                try {
                    return new p.XMLHttpRequest
                } catch (a) {}
            };
            var Kd = {
                    "0": 200,
                    1223: 204
                },
                Ea = c.ajaxSettings.xhr();
            u.cors = !!Ea && "withCredentials" in Ea;
            u.ajax = Ea = !!Ea;
            c.ajaxTransport(function(a) {
                var b, c;
                if (u.cors || Ea && !a.crossDomain) return {
                    send: function(f, g) {
                        var h, i = a.xhr();
                        i.open(a.type, a.url, a.async, a.username, a.password);
                        if (a.xhrFields)
                            for (h in a.xhrFields) i[h] = a.xhrFields[h];
                        a.mimeType && i.overrideMimeType && i.overrideMimeType(a.mimeType);
                        !a.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
                        for (h in f) i.setRequestHeader(h, f[h]);
                        b = function(a) {
                            return function() {
                                b &&
                                    (b = c = i.onload = i.onerror = i.onabort = i.onreadystatechange = null, "abort" === a ? i.abort() : "error" === a ? "number" !== typeof i.status ? g(0, "error") : g(i.status, i.statusText) : g(Kd[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" !== typeof i.responseText ? {
                                        binary: i.response
                                    } : {
                                        text: i.responseText
                                    }, i.getAllResponseHeaders()))
                            }
                        };
                        i.onload = b();
                        c = i.onerror = b("error");
                        void 0 !== i.onabort ? i.onabort = c : i.onreadystatechange = function() {
                            4 === i.readyState && p.setTimeout(function() {
                                b && c()
                            })
                        };
                        b = b("abort");
                        try {
                            i.send(a.hasContent && a.data || null)
                        } catch (j) {
                            if (b) throw j;
                        }
                    },
                    abort: function() {
                        b && b()
                    }
                }
            });
            c.ajaxPrefilter(function(a) {
                a.crossDomain && (a.contents.script = !1)
            });
            c.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(a) {
                        c.globalEval(a);
                        return a
                    }
                }
            });
            c.ajaxPrefilter("script", function(a) {
                void 0 === a.cache && (a.cache = !1);
                a.crossDomain && (a.type = "GET")
            });
            c.ajaxTransport("script",
                function(a) {
                    if (a.crossDomain) {
                        var b, e;
                        return {
                            send: function(f, g) {
                                b = c("<script>").prop({
                                    charset: a.scriptCharset,
                                    src: a.url
                                }).on("load error", e = function(a) {
                                    b.remove();
                                    e = null;
                                    a && g("error" === a.type ? 404 : 200, a.type)
                                });
                                r.head.appendChild(b[0])
                            },
                            abort: function() {
                                e && e()
                            }
                        }
                    }
                });
            var Ec = [],
                yb = /(=)\?(?=&|$)|\?\?/;
            c.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var a = Ec.pop() || c.expando + "_" + Ac++;
                    this[a] = !0;
                    return a
                }
            });
            c.ajaxPrefilter("json jsonp", function(a, b, e) {
                var f, g, h, i = !1 !== a.jsonp && (yb.test(a.url) ? "url" :
                    "string" === typeof a.data && 0 === (a.contentType || "").indexOf("application/x-www-form-urlencoded") && yb.test(a.data) && "data");
                if (i || "jsonp" === a.dataTypes[0]) return f = a.jsonpCallback = c.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, i ? a[i] = a[i].replace(yb, "$1" + f) : !1 !== a.jsonp && (a.url += (wb.test(a.url) ? "&" : "?") + a.jsonp + "=" + f), a.converters["script json"] = function() {
                    h || c.error(f + " was not called");
                    return h[0]
                }, a.dataTypes[0] = "json", g = p[f], p[f] = function() {
                    h = arguments
                }, e.always(function() {
                    void 0 ===
                        g ? c(p).removeProp(f) : p[f] = g;
                    a[f] && (a.jsonpCallback = b.jsonpCallback, Ec.push(f));
                    h && c.isFunction(g) && g(h[0]);
                    h = g = void 0
                }), "script"
            });
            var Ld = u,
                Fc = r.implementation.createHTMLDocument("").body;
            Fc.innerHTML = "<form></form><form></form>";
            Ld.createHTMLDocument = 2 === Fc.childNodes.length;
            c.parseHTML = function(a, b, e) {
                if ("string" !== typeof a) return [];
                "boolean" === typeof b && (e = b, b = !1);
                var f;
                b || (u.createHTMLDocument ? (b = r.implementation.createHTMLDocument(""), f = b.createElement("base"), f.href = r.location.href, b.head.appendChild(f)) :
                    b = r);
                f = mc.exec(a);
                e = !e && [];
                if (f) return [b.createElement(f[1])];
                f = Eb([a], b, e);
                e && e.length && c(e).remove();
                return c.merge([], f.childNodes)
            };
            c.fn.load = function(a, b, e) {
                var f, g, h, i = this,
                    j = a.indexOf(" "); - 1 < j && (f = ca(a.slice(j)), a = a.slice(0, j));
                if (c.isFunction(b)) e = b, b = void 0;
                else if (b && "object" === ("undefined" === typeof b ? "undefined" : B(b))) g = "POST";
                0 < i.length && c.ajax({
                    url: a,
                    type: g || "GET",
                    dataType: "html",
                    data: b
                }).done(function(a) {
                    h = arguments;
                    i.html(f ? c("<div>").append(c.parseHTML(a)).find(f) : a)
                }).always(e &&
                    function(a, b) {
                        i.each(function() {
                            e.apply(this, h || [a.responseText, b, a])
                        })
                    });
                return this
            };
            c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
                c.fn[b] = function(a) {
                    return this.on(b, a)
                }
            });
            c.expr.pseudos.animated = function(a) {
                return c.grep(c.timers, function(b) {
                    return a === b.elem
                }).length
            };
            c.offset = {
                setOffset: function(a, b, e) {
                    var f, g, h, i = c.css(a, "position"),
                        j = c(a),
                        k = {};
                    "static" === i && (a.style.position = "relative");
                    h = j.offset();
                    g = c.css(a, "top");
                    f = c.css(a, "left");
                    ("absolute" ===
                        i || "fixed" === i) && -1 < (g + f).indexOf("auto") ? (f = j.position(), g = f.top, f = f.left) : (g = parseFloat(g) || 0, f = parseFloat(f) || 0);
                    c.isFunction(b) && (b = b.call(a, e, c.extend({}, h)));
                    null != b.top && (k.top = b.top - h.top + g);
                    null != b.left && (k.left = b.left - h.left + f);
                    "using" in b ? b.using.call(a, k) : j.css(k)
                }
            };
            c.fn.extend({
                offset: function(a) {
                    if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                        c.offset.setOffset(this, a, b)
                    });
                    var b, e, f;
                    if (e = this[0]) {
                        if (!e.getClientRects().length) return {
                            top: 0,
                            left: 0
                        };
                        f = e.getBoundingClientRect();
                        b = e.ownerDocument;
                        e = b.documentElement;
                        b = b.defaultView;
                        return {
                            top: f.top + b.pageYOffset - e.clientTop,
                            left: f.left + b.pageXOffset - e.clientLeft
                        }
                    }
                },
                position: function() {
                    if (this[0]) {
                        var a, b, e = this[0],
                            f = {
                                top: 0,
                                left: 0
                            };
                        "fixed" === c.css(e, "position") ? b = e.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), P(a[0], "html") || (f = a.offset()), f = {
                            top: f.top + c.css(a[0], "borderTopWidth", !0),
                            left: f.left + c.css(a[0], "borderLeftWidth", !0)
                        });
                        return {
                            top: b.top - f.top - c.css(e, "marginTop", !0),
                            left: b.left - f.left - c.css(e, "marginLeft",
                                !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var a = this.offsetParent; a && "static" === c.css(a, "position");) a = a.offsetParent;
                        return a || $a
                    })
                }
            });
            c.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(a, b) {
                var e = "pageYOffset" === b;
                c.fn[a] = function(f) {
                    return $(this, function(a, f, i) {
                        var j;
                        c.isWindow(a) ? j = a : 9 === a.nodeType && (j = a.defaultView);
                        if (void 0 === i) return j ? j[b] : a[f];
                        j ? j.scrollTo(!e ? i : j.pageXOffset, e ? i : j.pageYOffset) : a[f] = i
                    }, a, f, arguments.length)
                }
            });
            c.each(["top", "left"], function(a,
                b) {
                c.cssHooks[b] = Nb(u.pixelPosition, function(a, f) {
                    if (f) return f = ya(a, b), fb.test(f) ? c(a).position()[b] + "px" : f
                })
            });
            c.each({
                Height: "height",
                Width: "width"
            }, function(a, b) {
                c.each({
                    padding: "inner" + a,
                    content: b,
                    "": "outer" + a
                }, function(e, f) {
                    c.fn[f] = function(g, h) {
                        var i = arguments.length && (e || "boolean" !== typeof g),
                            j = e || (!0 === g || !0 === h ? "margin" : "border");
                        return $(this, function(b, e, g) {
                            return c.isWindow(b) ? 0 === f.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                                Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === g ? c.css(b, e, j) : c.style(b, e, g, j)
                        }, b, i ? g : void 0, i)
                    }
                })
            });
            c.fn.extend({
                bind: function(a, b, c) {
                    return this.on(a, null, b, c)
                },
                unbind: function(a, b) {
                    return this.off(a, null, b)
                },
                delegate: function(a, b, c, f) {
                    return this.on(b, a, c, f)
                },
                undelegate: function(a, b, c) {
                    return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
                }
            });
            c.holdReady = function(a) {
                a ? c.readyWait++ : c.ready(!0)
            };
            c.isArray = Array.isArray;
            c.parseJSON =
                JSON.parse;
            c.nodeName = P;
            "function" === typeof define && define.amd && define("jquery", [], function() {
                return c
            });
            var Md = p.jQuery,
                Nd = p.$;
            c.noConflict = function(a) {
                p.$ === c && (p.$ = Nd);
                a && p.jQuery === c && (p.jQuery = Md);
                return c
            };
            la || (p.jQuery = p.$ = c);
            return c
        };
    "object" === ("undefined" === typeof aa ? "undefined" : B(aa)) && "object" === B(aa.exports) ? aa.exports = la.document ? ka(la, !0) : function(p) {
        if (!p.document) throw Error("jQuery requires a window with a document");
        return ka(p)
    } : ka(la)
}, {
    globals: ["$", "jQuery"]
});