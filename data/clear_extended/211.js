(function(r, ga) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = r.document ? ga(r, true) : function(r) {
        if (!r.document) throw Error("jQuery requires a window with a document");
        return ga(r)
    } : ga(r)
})("undefined" != typeof window ? window : this, function(r, ga) {
    function Aa(a) {
        var b = !!a && "length" in a && a.length,
            c = d.type(a);
        return "function" === c || d.isWindow(a) ? false : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function Ba(a, b, c) {
        if (d.isFunction(b)) return d.grep(a, function(a, d) {
            return !!b.call(a,
                d, a) !== c
        });
        if (b.nodeType) return d.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (Jb.test(b)) return d.filter(b, a, c);
            b = d.filter(b, a)
        }
        return d.grep(a, function(a) {
            return pa.call(b, a) > -1 !== c
        })
    }

    function Ta(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function Kb(a) {
        var b = {};
        return d.each(a.match(G) || [], function(a, d) {
            b[d] = true
        }), b
    }

    function ha() {
        q.removeEventListener("DOMContentLoaded", ha);
        r.removeEventListener("load", ha);
        d.ready()
    }

    function ia() {
        this.expando = d.expando + ia.uid++
    }

    function Ua(a,
        b, c) {
        var e;
        if (void 0 === c && 1 === a.nodeType)
            if (e = "data-" + b.replace(Va, "-$&").toLowerCase(), c = a.getAttribute(e), "string" == typeof c) {
                try {
                    c = "true" === c ? true : "false" === c ? false : "null" === c ? null : +c + "" === c ? +c : Lb.test(c) ? d.parseJSON(c) : c
                } catch (f) {}
                C.set(a, b, c)
            } else c = void 0;
        return c
    }

    function Wa(a, b, c, e) {
        var f, g = 1,
            h = 20,
            i = e ? function() {
                return e.cur()
            } : function() {
                return d.css(a, b, "")
            },
            j = i(),
            l = c && c[3] || (d.cssNumber[b] ? "" : "px"),
            m = (d.cssNumber[b] || "px" !== l && +j) && ja.exec(d.css(a, b));
        if (m && m[3] !== l) {
            l = l || m[3];
            c = c || [];
            m = +j || 1;
            do g = g || ".5", m /= g, d.style(a, b, m + l); while (g !== (g = i() / j) && 1 !== g && --h)
        }
        return c && (m = +m || +j || 0, f = c[1] ? m + (c[1] + 1) * c[2] : +c[2], e && (e.unit = l, e.start = m, e.end = f)), f
    }

    function x(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && d.nodeName(a, b) ? d.merge([a], c) : c
    }

    function Ca(a, b) {
        for (var c = 0, d = a.length; d > c; c++) p.set(a[c], "globalEval", !b || p.get(b[c], "globalEval"))
    }

    function Xa(a, b,
        c, e, f) {
        for (var g, h, i, j, l, m, k = b.createDocumentFragment(), o = [], s = 0, p = a.length; p > s; s++)
            if (g = a[s], g || 0 === g)
                if ("object" === d.type(g)) d.merge(o, g.nodeType ? [g] : g);
                else if (Mb.test(g)) {
            for (h = h || k.appendChild(b.createElement("div")), i = (Ya.exec(g) || ["", ""])[1].toLowerCase(), j = D[i] || D._default, h.innerHTML = j[1] + d.htmlPrefilter(g) + j[2], m = j[0]; m--;) h = h.lastChild;
            d.merge(o, h.childNodes);
            h = k.firstChild;
            h.textContent = ""
        } else o.push(b.createTextNode(g));
        for (k.textContent = "", s = 0; g = o[s++];)
            if (e && d.inArray(g, e) > -1) f && f.push(g);
            else if (l = d.contains(g.ownerDocument, g), h = x(k.appendChild(g), "script"), l && Ca(h), c)
            for (m = 0; g = h[m++];) Za.test(g.type || "") && c.push(g);
        return k
    }

    function ra() {
        return true
    }

    function $() {
        return false
    }

    function $a() {
        try {
            return q.activeElement
        } catch (a) {}
    }

    function Da(a, b, c, e, f, g) {
        var h, i;
        if ("object" == typeof b) {
            "string" != typeof c && (e = e || c, c = void 0);
            for (i in b) Da(a, i, c, e, b[i], g);
            return a
        }
        if (null == e && null == f ? (f = c, e = c = void 0) : null == f && ("string" == typeof c ? (f = e, e = void 0) : (f = e, e = c, c = void 0)), f === false) f = $;
        else if (!f) return a;
        return 1 === g && (h = f, f = function(a) {
            return d().off(a), h.apply(this, arguments)
        }, f.guid = h.guid || (h.guid = d.guid++)), a.each(function() {
            d.event.add(this, b, f, e, c)
        })
    }

    function ab(a, b) {
        return d.nodeName(a, "table") && d.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function Nb(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function Ob(a) {
        var b = Pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
            a
    }

    function bb(a, b) {
        var c, e, f, g, h, i;
        if (1 === b.nodeType) {
            if (p.hasData(a) && (c = p.access(a), e = p.set(b, c), i = c.events))
                for (f in delete e.handle, e.events = {}, i)
                    for (c = 0, e = i[f].length; e > c; c++) d.event.add(b, f, i[f][c]);
            C.hasData(a) && (g = C.access(a), h = d.extend({}, g), C.set(b, h))
        }
    }

    function Q(a, b, c, e) {
        var b = cb.apply([], b),
            f, g, h, i, j = 0,
            l = a.length,
            m = l - 1,
            k = b[0],
            o = d.isFunction(k);
        if (o || l > 1 && "string" == typeof k && !t.checkClone && Qb.test(k)) return a.each(function(d) {
            var f = a.eq(d);
            o && (b[0] = k.call(this, d, f.html()));
            Q(f, b, c, e)
        });
        if (l && (f = Xa(b, a[0].ownerDocument, false, a, e), g = f.firstChild, 1 === f.childNodes.length && (f = g), g || e)) {
            for (h = d.map(x(f, "script"), Nb), g = h.length; l > j; j++) i = f, j !== m && (i = d.clone(i, true, true), g && d.merge(h, x(i, "script"))), c.call(a[j], i, j);
            if (g)
                for (f = h[h.length - 1].ownerDocument, d.map(h, Ob), j = 0; g > j; j++) i = h[j], Za.test(i.type || "") && !p.access(i, "globalEval") && d.contains(f, i) && (i.src ? d._evalUrl && d._evalUrl(i.src) : d.globalEval(i.textContent.replace(Rb, "")))
        }
        return a
    }

    function db(a, b, c) {
        for (var e = b ? d.filter(b, a) : a, f =
                0; null != (b = e[f]); f++) c || 1 !== b.nodeType || d.cleanData(x(b)), b.parentNode && (c && d.contains(b.ownerDocument, b) && Ca(x(b, "script")), b.parentNode.removeChild(b));
        return a
    }

    function eb(a, b) {
        var c = d(b.createElement(a)).appendTo(b.body),
            e = d.css(c[0], "display");
        return c.detach(), e
    }

    function Ea(a) {
        var b = q,
            c = fb[a];
        return c || (c = eb(a, b), "none" !== c && c || (sa = (sa || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = sa[0].contentDocument, b.write(), b.close(), c = eb(a, b), sa.detach()), fb[a] = c),
            c
    }

    function S(a, b, c) {
        var e, f, g, h, i = a.style;
        return c = c || ta(a), h = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== h && void 0 !== h || d.contains(a.ownerDocument, a) || (h = d.style(a, b)), c && !t.pixelMarginRight() && Fa.test(h) && gb.test(b) && (e = i.width, f = i.minWidth, g = i.maxWidth, i.minWidth = i.maxWidth = i.width = h, h = c.width, i.width = e, i.minWidth = f, i.maxWidth = g), void 0 !== h ? h + "" : h
    }

    function Ga(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function hb(a) {
        if (a in ib) return a;
        for (var b =
                a[0].toUpperCase() + a.slice(1), c = jb.length; c--;)
            if (a = jb[c] + b, a in ib) return a
    }

    function kb(a, b, c) {
        return (a = ja.exec(b)) ? Math.max(0, a[2] - (c || 0)) + (a[3] || "px") : b
    }

    function lb(a, b, c, e, f) {
        for (var b = c === (e ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > b; b += 2) "margin" === c && (g += d.css(a, c + T[b], true, f)), e ? ("content" === c && (g -= d.css(a, "padding" + T[b], true, f)), "margin" !== c && (g -= d.css(a, "border" + T[b] + "Width", true, f))) : (g += d.css(a, "padding" + T[b], true, f), "padding" !== c && (g += d.css(a, "border" + T[b] + "Width", true, f)));
        return g
    }

    function mb(a, b, c) {
        var e = true,
            f = "width" === b ? a.offsetWidth : a.offsetHeight,
            g = ta(a),
            h = "border-box" === d.css(a, "boxSizing", false, g);
        if (0 >= f || null == f) {
            if (f = S(a, b, g), (0 > f || null == f) && (f = a.style[b]), Fa.test(f)) return f;
            e = h && (t.boxSizingReliable() || f === a.style[b]);
            f = parseFloat(f) || 0
        }
        return f + lb(a, b, c || (h ? "border" : "content"), e, g) + "px"
    }

    function nb(a, b) {
        for (var c, e, f, g = [], h = 0, i = a.length; i > h; h++) e = a[h], e.style && (g[h] = p.get(e, "olddisplay"), c = e.style.display, b ? (g[h] || "none" !== c || (e.style.display = ""), "" === e.style.display &&
            aa(e) && (g[h] = p.access(e, "olddisplay", Ea(e.nodeName)))) : (f = aa(e), "none" === c && f || p.set(e, "olddisplay", f ? c : d.css(e, "display"))));
        for (h = 0; i > h; h++) e = a[h], e.style && (b && "none" !== e.style.display && "" !== e.style.display || (e.style.display = b ? g[h] || "" : "none"));
        return a
    }

    function y(a, b, c, d, f) {
        return new y.prototype.init(a, b, c, d, f)
    }

    function ob() {
        return r.setTimeout(function() {
            ba = void 0
        }), ba = d.now()
    }

    function ua(a, b) {
        for (var c, d = 0, f = {
                height: a
            }, b = b ? 1 : 0; 4 > d; d += 2 - b) c = T[d], f["margin" + c] = f["padding" + c] = a;
        return b && (f.opacity =
            f.width = a), f
    }

    function pb(a, b, c) {
        for (var d, f = (A.tweeners[b] || []).concat(A.tweeners["*"]), g = 0, h = f.length; h > g; g++)
            if (d = f[g].call(c, b, a)) return d
    }

    function Sb(a, b) {
        var i;
        var c, e, f, g, h;
        for (c in a)
            if (e = d.camelCase(c), f = b[e], g = a[c], d.isArray(g) && (f = g[1], i = a[c] = g[0], g = i), c !== e && (a[e] = g, delete a[c]), h = d.cssHooks[e], h && "expand" in h)
                for (c in g = h.expand(g), delete a[e], g) c in a || (a[c] = g[c], b[c] = f);
            else b[e] = f
    }

    function A(a, b, c) {
        var e, f = 0,
            g = A.prefilters.length,
            h = d.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return false;
                for (var b = ba || ob(), b = Math.max(0, j.startTime + j.duration - b), c = 1 - (b / j.duration || 0), d = 0, f = j.tweens.length; f > d; d++) j.tweens[d].run(c);
                return h.notifyWith(a, [j, c, b]), 1 > c && f ? b : (h.resolveWith(a, [j]), false)
            },
            j = h.promise({
                elem: a,
                props: d.extend({}, b),
                opts: d.extend(true, {
                    specialEasing: {},
                    easing: d.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: ba || ob(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var e = d.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(e),
                        e
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = true; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            c = j.props;
        for (Sb(c, j.opts.specialEasing); g > f; f++)
            if (b = A.prefilters[f].call(j, a, c, j.opts)) return d.isFunction(b.stop) && (d._queueHooks(j.elem, j.opts.queue).stop = d.proxy(b.stop, b)), b;
        return d.map(c, pb, j), d.isFunction(j.opts.start) && j.opts.start.call(a, j), d.fx.timer(d.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })),
            j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function B(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }

    function qb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var e, f = 0,
                g = b.toLowerCase().match(G) || [];
            if (d.isFunction(c))
                for (; e = g[f++];) "+" === e[0] ? (e = e.slice(1) || "*", (a[e] = a[e] || []).unshift(c)) : (a[e] = a[e] || []).push(c)
        }
    }

    function rb(a, b, c, e) {
        function f(i) {
            var j;
            return g[i] = true, d.each(a[i] || [], function(a, d) {
                var i = d(b, c, e);
                return "string" !=
                    typeof i || h || g[i] ? h ? !(j = i) : void 0 : (b.dataTypes.unshift(i), f(i), false)
            }), j
        }
        var g = {},
            h = a === Ha;
        return f(b.dataTypes[0]) || !g["*"] && f("*")
    }

    function Ia(a, b) {
        var c, e, f = d.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((f[c] ? a : e || (e = {}))[c] = b[c]);
        return e && d.extend(true, a, e), a
    }

    function Ja(a, b, c, e) {
        var f;
        if (d.isArray(b)) d.each(b, function(b, d) {
            c || Tb.test(a) ? e(a, d) : Ja(a + "[" + ("object" == typeof d && null != d ? b : "") + "]", d, c, e)
        });
        else if (c || "object" !== d.type(b)) e(a, b);
        else
            for (f in b) Ja(a + "[" + f + "]", b[f], c, e)
    }
    var U = [],
        q = r.document,
        K = U.slice,
        cb = U.concat,
        Ka = U.push,
        pa = U.indexOf,
        va = {},
        Ub = va.toString,
        R = va.hasOwnProperty,
        t = {},
        d = function(a, b) {
            return new d.fn.init(a, b)
        },
        Vb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Wb = /^-ms-/,
        Xb = /-([\da-z])/gi,
        Yb = function(a, b) {
            return b.toUpperCase()
        };
    d.fn = d.prototype = {
        jquery: "2.2.4",
        constructor: d,
        selector: "",
        length: 0,
        toArray: function() {
            return K.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : K.call(this)
        },
        pushStack: function(a) {
            a = d.merge(this.constructor(),
                a);
            return a.prevObject = this, a.context = this.context, a
        },
        each: function(a) {
            return d.each(this, a)
        },
        map: function(a) {
            return this.pushStack(d.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(K.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                a = +a + (0 > a ? b : 0);
            return this.pushStack(a >= 0 && b > a ? [this[a]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: Ka,
        sort: U.sort,
        splice: U.splice
    };
    d.extend = d.fn.extend = function() {
        var a, b, c, e, f, g, h = arguments[0] || {},
            i = 1,
            j = arguments.length,
            l = false;
        for ("boolean" == typeof h && (l = h, h = arguments[i] || {}, i++), "object" == typeof h || d.isFunction(h) || (h = {}), i === j && (h = this, i--); j > i; i++)
            if (null != (a = arguments[i]))
                for (b in a) c = h[b], e = a[b], h !== e && (l && e && (d.isPlainObject(e) || (f = d.isArray(e))) ? (f ? (f = false, g = c && d.isArray(c) ? c : []) : g = c && d.isPlainObject(c) ? c : {}, h[b] = d.extend(l, g, e)) : void 0 !== e && (h[b] = e));
        return h
    };
    d.extend({
        expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g,
            ""),
        isReady: true,
        error: function(a) {
            throw Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === d.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !d.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isPlainObject: function(a) {
            var b;
            if ("object" !== d.type(a) || a.nodeType || d.isWindow(a)) return false;
            if (a.constructor && !R.call(a, "constructor") && !R.call(a.constructor.prototype || {}, "isPrototypeOf")) return false;
            for (b in a);
            return void 0 === b || R.call(a, b)
        },
        isEmptyObject: function(a) {
            for (var b in a) return false;
            return true
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? va[Ub.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = d.trim(a);
            a && (1 === a.indexOf("use strict") ? (b = q.createElement("script"), b.text = a, q.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(Wb, "ms-").replace(Xb, Yb)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() ===
                b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (Aa(a))
                for (c = a.length; c > d; d++) {
                    if (b.call(a[d], d, a[d]) === false) break
                } else
                    for (d in a)
                        if (b.call(a[d], d, a[d]) === false) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(Vb, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (Aa(Object(a)) ? d.merge(c, "string" == typeof a ? [a] : a) : Ka.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : pa.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, f = a.length; c > d; d++) a[f++] = b[d];
            return a.length =
                f, a
        },
        grep: function(a, b, c) {
            for (var d, f = [], g = 0, h = a.length, c = !c; h > g; g++) d = !b(a[g], g), d !== c && f.push(a[g]);
            return f
        },
        map: function(a, b, c) {
            var d, f, g = 0,
                h = [];
            if (Aa(a))
                for (d = a.length; d > g; g++) f = b(a[g], g, c), null != f && h.push(f);
            else
                for (g in a) f = b(a[g], g, c), null != f && h.push(f);
            return cb.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), d.isFunction(a) ? (e = K.call(arguments, 2), f = function() {
                    return a.apply(b || this, e.concat(K.call(arguments)))
                }, f.guid = a.guid = a.guid || d.guid++,
                f) : void 0
        },
        now: Date.now,
        support: t
    });
    "function" == typeof Symbol && (d.fn[Symbol.iterator] = U[Symbol.iterator]);
    d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        va["[object " + b + "]"] = b.toLowerCase()
    });
    var O = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, k = b && b.ownerDocument,
                l = b ? b.nodeType : 9;
            if (c = c || [], "string" != typeof a || !a || 1 !== l && 9 !== l && 11 !== l) return c;
            if (!d && ((b ? b.ownerDocument || b : H) !== u && ca(b), b = b || u, M)) {
                if (11 !== l && (h = oa.exec(a)))
                    if (e = h[1])
                        if (9 ===
                            l) {
                            if (!(f = b.getElementById(e))) return c;
                            if (f.id === e) return c.push(f), c
                        } else {
                            if (k && (f = k.getElementById(e)) && E(b, f) && f.id === e) return c.push(f), c
                        }
                else {
                    if (h[2]) return da.apply(c, b.getElementsByTagName(a)), c;
                    if ((e = h[3]) && v.getElementsByClassName && b.getElementsByClassName) return da.apply(c, b.getElementsByClassName(e)), c
                }
                if (v.qsa && !F[a + " "] && (!z || !z.test(a))) {
                    if (1 !== l) k = b, j = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        for ((g = b.getAttribute("id")) ? g = g.replace(pa, "\\$&") : b.setAttribute("id", g = w), i = ea(a),
                            e = i.length, f = aa.test(g) ? "#" + g : "[id='" + g + "']"; e--;) i[e] = f + " " + o(i[e]);
                        j = i.join(",");
                        k = Z.test(a) && m(b.parentNode) || b
                    }
                    if (j) try {
                        return da.apply(c, k.querySelectorAll(j)), c
                    } catch (n) {} finally {
                        g === w && b.removeAttribute("id")
                    }
                }
            }
            return sb(a.replace(O, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > n.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[w] = true, a
        }

        function f(a) {
            var b = u.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return false
            } finally {
                b.parentNode &&
                    b.parentNode.removeChild(b)
            }
        }

        function g(a, b) {
            for (var c = a.split("|"), d = c.length; d--;) n.attrHandle[c[d]] = b
        }

        function h(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || Q) - (~a.sourceIndex || Q);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function i(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function j(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function l(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function m(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function k() {}

        function o(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function s(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Zb++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, V = [J, f];
                if (g)
                    for (; b = b[d];) {
                        if ((1 === b.nodeType || e) && a(b, c, g)) return true
                    } else
                        for (; b =
                            b[d];)
                            if (1 === b.nodeType || e) {
                                if (j = b[w] || (b[w] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === J && h[1] === f) return V[2] = h[2];
                                if (i[d] = V, V[2] = a(b, c, g)) return true
                            }
            }
        }

        function p(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return false;
                return true
            } : a[0]
        }

        function r(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function q(a, c, f, g, h, i) {
            return g && !g[w] && (g = q(g)), h && !h[w] && (h = q(h, i)), d(function(d,
                e, i, j) {
                var k, l, m = [],
                    La = [],
                    o = e.length,
                    n;
                if (!(n = d)) {
                    n = c || "*";
                    for (var p = i.nodeType ? [i] : i, s = [], q = 0, u = p.length; u > q; q++) b(n, p[q], s);
                    n = s
                }
                n = !a || !d && c ? n : r(n, m, a, i, j);
                p = f ? h || (d ? a : o || g) ? [] : e : n;
                if (f && f(n, p, i, j), g)
                    for (k = r(p, La), g(k, [], i, j), i = k.length; i--;)(l = k[i]) && (p[La[i]] = !(n[La[i]] = l));
                if (d) {
                    if (h || a) {
                        if (h) {
                            for (k = [], i = p.length; i--;)(l = p[i]) && k.push(n[i] = l);
                            h(null, p = [], k, j)
                        }
                        for (i = p.length; i--;)(l = p[i]) && (k = h ? ka(d, l) : m[i]) > -1 && (d[k] = !(e[k] = l))
                    }
                } else p = r(p === e ? p.splice(o, p.length) : p), h ? h(null, e, p, j) : da.apply(e,
                    p)
            })
        }

        function t(a) {
            var b, c, d, e = a.length,
                f = n.relative[a[0].type];
            c = f || n.relative[" "];
            for (var g = f ? 1 : 0, h = s(function(a) {
                    return a === b
                }, c, true), i = s(function(a) {
                    return ka(b, a) > -1
                }, c, true), j = [function(a, c, d) {
                    a = !f && (d || c !== wa) || ((b = c).nodeType ? h(a, c, d) : i(a, c, d));
                    return b = null, a
                }]; e > g; g++)
                if (c = n.relative[a[g].type]) j = [s(p(j), c)];
                else {
                    if (c = n.filter[a[g].type].apply(null, a[g].matches), c[w]) {
                        for (d = ++g; e > d; d++)
                            if (n.relative[a[d].type]) break;
                        return q(g > 1 && p(j), g > 1 && o(a.slice(0, g - 1).concat({
                            value: " " === a[g - 2].type ?
                                "*" : ""
                        })).replace(O, "$1"), c, d > g && t(a.slice(g, d)), e > d && t(a = a.slice(d)), e > d && o(a))
                    }
                    j.push(c)
                } return p(j)
        }

        function C(a, c) {
            var f = c.length > 0,
                g = a.length > 0,
                h = function(d, e, h, i, j) {
                    var k, l, m, o = 0,
                        W = "0",
                        p = d && [],
                        s = [],
                        q = wa,
                        ea = d || g && n.find.TAG("*", j),
                        w = J += null == q ? 1 : Math.random() || 0.1,
                        t = ea.length;
                    for (j && (wa = e === u || e || j); W !== t && null != (k = ea[W]); W++) {
                        if (g && k) {
                            for (l = 0, e || k.ownerDocument === u || (ca(k), h = !M); m = a[l++];)
                                if (m(k, e || u, h)) {
                                    i.push(k);
                                    break
                                } j && (J = w)
                        }
                        f && ((k = !m && k) && o--, d && p.push(k))
                    }
                    if (o += W, f && W !== o) {
                        for (l = 0; m = c[l++];) m(p,
                            s, e, h);
                        if (d) {
                            if (o > 0)
                                for (; W--;) p[W] || s[W] || (s[W] = U.call(i));
                            s = r(s)
                        }
                        da.apply(i, s);
                        j && !d && s.length > 0 && o + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (J = w, wa = q), p
                };
            return f ? d(h) : h
        }
        var I, v, n, x, y, ea, Ma, sb, wa, D, qa, ca, u, N, M, z, la, xa, E, w = "sizzle" + 1 * new Date,
            H = a.document,
            J = 0,
            Zb = 0,
            G = c(),
            A = c(),
            F = c(),
            K = function(a, b) {
                return a === b && (qa = true), 0
            },
            Q = -2147483648,
            T = {}.hasOwnProperty,
            B = [],
            U = B.pop,
            $ = B.push,
            da = B.push,
            S = B.slice,
            ka = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            ba = RegExp("[\\x20\\t\\r\\n\\f]+",
                "g"),
            O = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
            fa = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            ga = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            ia = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"),
            ja = RegExp(":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
            aa = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
            R = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
                ATTR: RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]"),
                PSEUDO: RegExp("^:((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
                needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                    "i")
            },
            ma = /^(?:input|select|textarea|button)$/i,
            na = /^h\d$/i,
            P = /^[^{]+\{\s*\[native \w/,
            oa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Z = /[+~]/,
            pa = /'|\\/g,
            X = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"),
            Y = function(a, b, c) {
                a = "0x" + b - 65536;
                return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
            },
            ha = function() {
                ca()
            };
        try {
            da.apply(B = S.call(H.childNodes), H.childNodes)
        } catch (ra) {
            da = {
                apply: B.length ? function(a, b) {
                    $.apply(a, S.call(b))
                } : function(a,
                    b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        v = b.support = {};
        y = b.isXML = function(a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : false
        };
        ca = b.setDocument = function(a) {
            var b, c, a = a ? a.ownerDocument || a : H;
            return a !== u && 9 === a.nodeType && a.documentElement ? (u = a, N = u.documentElement, M = !y(u), (c = u.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", ha, false) : c.attachEvent && c.attachEvent("onunload", ha)), v.attributes = f(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }),
                v.getElementsByTagName = f(function(a) {
                    return a.appendChild(u.createComment("")), !a.getElementsByTagName("*").length
                }), v.getElementsByClassName = P.test(u.getElementsByClassName), v.getById = f(function(a) {
                    return N.appendChild(a).id = w, !u.getElementsByName || !u.getElementsByName(w).length
                }), v.getById ? (n.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && M) {
                        var c = b.getElementById(a);
                        return c ? [c] : []
                    }
                }, n.filter.ID = function(a) {
                    var b = a.replace(X, Y);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) :
                (delete n.find.ID, n.filter.ID = function(a) {
                    var b = a.replace(X, Y);
                    return function(a) {
                        return (a = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
                    }
                }), n.find.TAG = v.getElementsByTagName ? function(a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
                } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, n.find.CLASS = v.getElementsByClassName && function(a,
                    b) {
                    return "undefined" != typeof b.getElementsByClassName && M ? b.getElementsByClassName(a) : void 0
                }, la = [], z = [], (v.qsa = P.test(u.querySelectorAll)) && (f(function(a) {
                    N.appendChild(a).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                    a.querySelectorAll("[msallowcapture^='']").length && z.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                    a.querySelectorAll("[selected]").length || z.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                    a.querySelectorAll("[id~=" + w + "-]").length || z.push("~=");
                    a.querySelectorAll(":checked").length || z.push(":checked");
                    a.querySelectorAll("a#" + w + "+*").length || z.push(".#.+[+~]")
                }), f(function(a) {
                    var b = u.createElement("input");
                    b.setAttribute("type", "hidden");
                    a.appendChild(b).setAttribute("name", "D");
                    a.querySelectorAll("[name=d]").length && z.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                    a.querySelectorAll(":enabled").length || z.push(":enabled", ":disabled");
                    a.querySelectorAll("*,:x");
                    z.push(",.*:")
                })), (v.matchesSelector =
                    P.test(xa = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && f(function(a) {
                    v.disconnectedMatch = xa.call(a, "div");
                    xa.call(a, "[s!='']:x");
                    la.push("!=", ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
                }),
                z = z.length && RegExp(z.join("|")), la = la.length && RegExp(la.join("|")), b = P.test(N.compareDocumentPosition), E = b || P.test(N.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return true;
                    return false
                }, K = b ? function(a, b) {
                    if (a === b) return qa = true, 0;
                    var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === u || a.ownerDocument === H && E(H, a) ? -1 : b === u || b.ownerDocument === H && E(H, b) ? 1 : D ? ka(D, a) - ka(D, b) : 0 : 4 & c ? -1 : 1)
                } : function(a, b) {
                    if (a === b) return qa = true, 0;
                    var c, d = 0;
                    c = a.parentNode;
                    var e = b.parentNode,
                        f = [a],
                        g = [b];
                    if (!c || !e) return a === u ? -1 : b === u ? 1 : c ? -1 : e ? 1 : D ? ka(D, a) - ka(D, b) : 0;
                    if (c === e) return h(a, b);
                    for (c = a; c = c.parentNode;) f.unshift(c);
                    for (c = b; c = c.parentNode;) g.unshift(c);
                    for (; f[d] === g[d];) d++;
                    return d ? h(f[d], g[d]) : f[d] === H ? -1 : g[d] === H ? 1 : 0
                }, u) : u
        };
        b.matches = function(a, c) {
            return b(a, null, null, c)
        };
        b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== u && ca(a), c = c.replace(ia, "='$1']"), v.matchesSelector && M && !F[c + " "] && (!la || !la.test(c)) && (!z || !z.test(c))) try {
                var d = xa.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return b(c, u, null, [a]).length > 0
        };
        b.contains = function(a, b) {
            return (a.ownerDocument || a) !== u && ca(a), E(a, b)
        };
        b.attr =
            function(a, b) {
                (a.ownerDocument || a) !== u && ca(a);
                var c = n.attrHandle[b.toLowerCase()],
                    c = c && T.call(n.attrHandle, b.toLowerCase()) ? c(a, b, !M) : void 0;
                return void 0 !== c ? c : v.attributes || !M ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null
            };
        b.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (qa = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(K), qa) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d],
                    1)
            }
            return D = null, a
        };
        x = b.getText = function(a) {
            var b, c = "",
                d = 0;
            if (b = a.nodeType)
                if (1 === b || 9 === b || 11 === b) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                } else {
                    if (3 === b || 4 === b) return a.nodeValue
                }
            else
                for (; b = a[d++];) c += x(b);
            return c
        };
        n = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: R,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] =
                        a[1].replace(X, Y), a[3] = (a[3] || a[4] || a[5] || "").replace(X, Y), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return R.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ja.test(c) && (b = ea(c, true)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0,
                        b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(X, Y).toLowerCase();
                    return "*" === a ? function() {
                        return true
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = G[a + " "];
                    return b || (b = RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && G(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        e = b.attr(e, a);
                        return null == e ? "!=" === c : c ? (e += "", "=" === c ? e === d : "!=" === c ? e !== d : "^=" === c ? d && 0 === e.indexOf(d) : "*=" === c ? d && e.indexOf(d) > -1 : "$=" === c ? d && e.slice(-d.length) === d : "~=" === c ? (" " + e.replace(ba, " ") + " ").indexOf(d) > -1 : "|=" === c ? e === d || e.slice(0, d.length + 1) === d + "-" : false) : true
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, o, n, c = f !== g ? "nextSibling" : "previousSibling",
                            V = b.parentNode,
                            p = h &&
                            b.nodeName.toLowerCase(),
                            i = !i && !h,
                            L = false;
                        if (V) {
                            if (f) {
                                for (; c;) {
                                    for (m = b; m = m[c];)
                                        if (h ? m.nodeName.toLowerCase() === p : 1 === m.nodeType) return false;
                                    n = c = "only" === a && !n && "nextSibling"
                                }
                                return true
                            }
                            if (n = [g ? V.firstChild : V.lastChild], g && i)
                                for (m = V, l = m[w] || (m[w] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], o = j[0] === J && j[1], L = o && j[2], m = o && V.childNodes[o]; m = ++o && m && m[c] || (L = o = 0) || n.pop();) {
                                    if (1 === m.nodeType && ++L && m === b) {
                                        k[a] = [J, o, L];
                                        break
                                    }
                                } else if (i && (m = b, l = m[w] || (m[w] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                        j = k[a] || [], o = j[0] === J && j[1], L = o), L === false)
                                    for (; m = ++o && m && m[c] || (L = o = 0) || n.pop();)
                                        if ((h ? m.nodeName.toLowerCase() === p : 1 === m.nodeType) && ++L && (i && (l = m[w] || (m[w] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [J, L]), m === b)) break;
                            return L -= e, L === d || L % d === 0 && L / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var f, g = n.pseudos[a] || n.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return g[w] ? g(c) : g.length > 1 ? (f = [a, a, "", c], n.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = g(a, c), f = e.length; f--;) d =
                            ka(a, e[f]), a[d] = !(b[d] = e[f])
                    }) : function(a) {
                        return g(a, 0, f)
                    }) : g
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        f = Ma(a.replace(O, "$1"));
                    return f[w] ? d(function(a, b, c, d) {
                        for (var e, c = f(a, null, d, []), d = a.length; d--;)(e = c[d]) && (a[d] = !(b[d] = e))
                    }) : function(a, d, e) {
                        return b[0] = a, f(b, null, e, c), b[0] = null, !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return a = a.replace(X, Y),
                        function(b) {
                            return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                        }
                }),
                lang: d(function(a) {
                    return aa.test(a ||
                            "") || b.error("unsupported lang: " + a), a = a.replace(X, Y).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = M ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return false
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === N
                },
                focus: function(a) {
                    return a === u.activeElement && (!u.hasFocus || u.hasFocus()) && !(!a.type && !a.href && !~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled ===
                        false
                },
                disabled: function(a) {
                    return a.disabled === true
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.selected === true
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return false;
                    return true
                },
                parent: function(a) {
                    return !n.pseudos.empty(a)
                },
                header: function(a) {
                    return na.test(a.nodeName)
                },
                input: function(a) {
                    return ma.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" ===
                        b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(a, b) {
                    return [b - 1]
                }),
                eq: l(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: l(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: l(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: l(function(a, b, c) {
                    for (b = 0 > c ? c + b : c; --b >= 0;) a.push(b);
                    return a
                }),
                gt: l(function(a, b, c) {
                    for (c =
                        0 > c ? c + b : c; ++c < b;) a.push(c);
                    return a
                })
            }
        };
        n.pseudos.nth = n.pseudos.eq;
        for (I in {
                radio: true,
                checkbox: true,
                file: true,
                password: true,
                image: true
            }) n.pseudos[I] = i(I);
        for (I in {
                submit: true,
                reset: true
            }) n.pseudos[I] = j(I);
        k.prototype = n.filters = n.pseudos;
        n.setFilters = new k;
        ea = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j;
            if (h = A[a + " "]) return c ? 0 : h.slice(0);
            for (h = a, i = [], j = n.preFilter; h;) {
                d && !(e = fa.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = []));
                d = false;
                (e = ga.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(O,
                        " ")
                }), h = h.slice(d.length));
                for (g in n.filter) !(e = R[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : A(a, i).slice(0)
        };
        return Ma = b.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = F[a + " "];
                if (!f) {
                    for (b || (b = ea(a)), c = b.length; c--;) f = t(b[c]), f[w] ? d.push(f) : e.push(f);
                    f = F(a, C(e, d));
                    f.selector = a
                }
                return f
            }, sb = b.select = function(a, b, c, d) {
                var e, f, g, h, i, j = "function" == typeof a && a,
                    k = !d && ea(a = j.selector || a);
                if (c = c || [], 1 === k.length) {
                    if (f =
                        k[0] = k[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && M && n.relative[f[1].type]) {
                        if (b = (n.find.ID(g.matches[0].replace(X, Y), b) || [])[0], !b) return c;
                        j && (b = b.parentNode);
                        a = a.slice(f.shift().value.length)
                    }
                    for (e = R.needsContext.test(a) ? 0 : f.length; e--;) {
                        if (g = f[e], n.relative[h = g.type]) break;
                        if ((i = n.find[h]) && (d = i(g.matches[0].replace(X, Y), Z.test(f[0].type) && m(b.parentNode) || b))) {
                            if (f.splice(e, 1), a = d.length && o(f), !a) return da.apply(c, d), c;
                            break
                        }
                    }
                }
                return (j || Ma(a, k))(d, b, !M, c, !b || Z.test(a) &&
                    m(b.parentNode) || b), c
            }, v.sortStable = w.split("").sort(K).join("") === w, v.detectDuplicates = !!qa, ca(), v.sortDetached = f(function(a) {
                return 1 & a.compareDocumentPosition(u.createElement("div"))
            }), f(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || g("type|href|height|width", function(a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), v.attributes && f(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) ||
            g("value", function(a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), f(function(a) {
                return null == a.getAttribute("disabled")
            }) || g("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(a, b, c) {
                var d;
                return c ? void 0 : a[b] === true ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), b
    }(r);
    d.find = O;
    d.expr = O.selectors;
    d.expr[":"] = d.expr.pseudos;
    d.uniqueSort = d.unique = O.uniqueSort;
    d.text =
        O.getText;
    d.isXMLDoc = O.isXML;
    d.contains = O.contains;
    var fa = function(a, b, c) {
            for (var e = [], f = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (f && d(a).is(c)) break;
                    e.push(a)
                } return e
        },
        tb = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        ub = d.expr.match.needsContext,
        vb = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Jb = /^.[^:#\[\.,]*$/;
    d.filter = function(a, b, c) {
        var e = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === e.nodeType ? d.find.matchesSelector(e, a) ? [e] : [] : d.find.matches(a,
            d.grep(b, function(a) {
                return 1 === a.nodeType
            }))
    };
    d.fn.extend({
        find: function(a) {
            var b, c = this.length,
                e = [],
                f = this;
            if ("string" != typeof a) return this.pushStack(d(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (d.contains(f[b], this)) return true
            }));
            for (b = 0; c > b; b++) d.find(a, f[b], e);
            return e = this.pushStack(c > 1 ? d.unique(e) : e), e.selector = this.selector ? this.selector + " " + a : a, e
        },
        filter: function(a) {
            return this.pushStack(Ba(this, a || [], false))
        },
        not: function(a) {
            return this.pushStack(Ba(this, a || [], true))
        },
        is: function(a) {
            return !!Ba(this,
                "string" == typeof a && ub.test(a) ? d(a) : a || [], false).length
        }
    });
    var wb, $b = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (d.fn.init = function(a, b, c) {
        var e, f;
        if (!a) return this;
        if (c = c || wb, "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : $b.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof d ? b[0] : b, d.merge(this, d.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : q, true)), vb.test(e[1]) && d.isPlainObject(b))
                    for (e in b) d.isFunction(this[e]) ?
                        this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            return f = q.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = q, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : d.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(d) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), d.makeArray(a, this))
    }).prototype = d.fn;
    wb = d(q);
    var ac = /^(?:parents|prev(?:Until|All))/,
        bc = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
    d.fn.extend({
        has: function(a) {
            var b =
                d(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (d.contains(this, b[a])) return true
            })
        },
        closest: function(a, b) {
            for (var c, e = 0, f = this.length, g = [], h = ub.test(a) || "string" != typeof a ? d(a, b || this.context) : 0; f > e; e++)
                for (c = this[e]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (h ? h.index(c) > -1 : 1 === c.nodeType && d.find.matchesSelector(c, a))) {
                        g.push(c);
                        break
                    } return this.pushStack(g.length > 1 ? d.uniqueSort(g) : g)
        },
        index: function(a) {
            return a ? "string" == typeof a ? pa.call(d(a), this[0]) : pa.call(this, a.jquery ?
                a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(d.uniqueSort(d.merge(this.get(), d(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    d.each({
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return fa(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return fa(a, "parentNode", c)
        },
        next: function(a) {
            return Ta(a, "nextSibling")
        },
        prev: function(a) {
            return Ta(a, "previousSibling")
        },
        nextAll: function(a) {
            return fa(a, "nextSibling")
        },
        prevAll: function(a) {
            return fa(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return fa(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return fa(a, "previousSibling", c)
        },
        siblings: function(a) {
            return tb((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return tb(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || d.merge([], a.childNodes)
        }
    }, function(a, b) {
        d.fn[a] = function(c, e) {
            var f = d.map(this, b, c);
            return "Until" !== a.slice(-5) && (e = c), e && "string" ==
                typeof e && (f = d.filter(e, f)), this.length > 1 && (bc[a] || d.uniqueSort(f), ac.test(a) && f.reverse()), this.pushStack(f)
        }
    });
    var G = /\S+/g;
    d.Callbacks = function(a) {
        var a = "string" == typeof a ? Kb(a) : d.extend({}, a),
            b, c, e, f, g = [],
            h = [],
            i = -1,
            j = function() {
                for (f = a.once, e = b = true; h.length; i = -1)
                    for (c = h.shift(); ++i < g.length;) g[i].apply(c[0], c[1]) === false && a.stopOnFalse && (i = g.length, c = false);
                a.memory || (c = false);
                b = false;
                f && (g = c ? [] : "")
            },
            l = {
                add: function() {
                    return g && (c && !b && (i = g.length - 1, h.push(c)), function k(b) {
                        d.each(b, function(b,
                            c) {
                            d.isFunction(c) ? a.unique && l.has(c) || g.push(c) : c && c.length && "string" !== d.type(c) && k(c)
                        })
                    }(arguments), c && !b && j()), this
                },
                remove: function() {
                    return d.each(arguments, function(a, b) {
                        for (var c;
                            (c = d.inArray(b, g, c)) > -1;) g.splice(c, 1), i >= c && i--
                    }), this
                },
                has: function(a) {
                    return a ? d.inArray(a, g) > -1 : g.length > 0
                },
                empty: function() {
                    return g && (g = []), this
                },
                disable: function() {
                    return f = h = [], g = c = "", this
                },
                disabled: function() {
                    return !g
                },
                lock: function() {
                    return f = h = [], c || (g = c = ""), this
                },
                locked: function() {
                    return !!f
                },
                fireWith: function(a,
                    c) {
                    return f || (c = c || [], c = [a, c.slice ? c.slice() : c], h.push(c), b || j()), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!e
                }
            };
        return l
    };
    d.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", d.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", d.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", d.Callbacks("memory")]
                ],
                c = "pending",
                e = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return f.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return d.Deferred(function(c) {
                            d.each(b, function(b, j) {
                                var l = d.isFunction(a[b]) && a[b];
                                f[j[1]](function() {
                                    var a = l && l.apply(this, arguments);
                                    a && d.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[j[0] + "With"](this === e ? c.promise() : this, l ? [a] : arguments)
                                })
                            });
                            a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? d.extend(a, e) : e
                    }
                },
                f = {};
            return e.pipe = e.then, d.each(b, function(a, d) {
                var i = d[2],
                    j = d[3];
                e[d[1]] = i.add;
                j && i.add(function() {
                    c = j
                }, b[1 ^ a][2].disable, b[2][2].lock);
                f[d[0]] =
                    function() {
                        return f[d[0] + "With"](this === f ? e : this, arguments), this
                    };
                f[d[0] + "With"] = i.fireWith
            }), e.promise(f), a && a.call(f, f), f
        },
        when: function(a) {
            var b = 0,
                c = K.call(arguments),
                e = c.length,
                f = 1 !== e || a && d.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : d.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this;
                        c[a] = arguments.length > 1 ? K.call(arguments) : d;
                        c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, l;
            if (e > 1)
                for (i = Array(e), j = Array(e), l = Array(e); e > b; b++) c[b] && d.isFunction(c[b].promise) ? c[b].promise().progress(h(b,
                    j, i)).done(h(b, l, c)).fail(g.reject) : --f;
            return f || g.resolveWith(l, c), g.promise()
        }
    });
    var ya;
    d.fn.ready = function(a) {
        return d.ready.promise().done(a), this
    };
    d.extend({
        isReady: false,
        readyWait: 1,
        holdReady: function(a) {
            a ? d.readyWait++ : d.ready(true)
        },
        ready: function(a) {
            (a === true ? --d.readyWait : d.isReady) || (d.isReady = true, a !== true && --d.readyWait > 0 || (ya.resolveWith(q, [d]), d.fn.triggerHandler && (d(q).triggerHandler("ready"), d(q).off("ready"))))
        }
    });
    d.ready.promise = function(a) {
        return ya || (ya = d.Deferred(), "complete" ===
            q.readyState || "loading" !== q.readyState && !q.documentElement.doScroll ? r.setTimeout(d.ready) : (q.addEventListener("DOMContentLoaded", ha), r.addEventListener("load", ha))), ya.promise(a)
    };
    d.ready.promise();
    var F = function(a, b, c, e, f, g, h) {
            var i = 0,
                j = a.length,
                l = null == c;
            if ("object" === d.type(c))
                for (i in f = true, c) F(a, b, i, c[i], true, g, h);
            else if (void 0 !== e && (f = true, d.isFunction(e) || (h = true), l && (h ? (b.call(a, e), b = null) : (l = b, b = function(a, b, c) {
                    return l.call(d(a), c)
                })), b))
                for (; j > i; i++) b(a[i], c, h ? e : e.call(a[i], i, b(a[i],
                    c)));
            return f ? a : l ? b.call(a) : j ? b(a[0], c) : g
        },
        ma = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };
    ia.uid = 1;
    ia.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: true,
                configurable: true
            }), a[this.expando]
        },
        cache: function(a) {
            if (!ma(a)) return {};
            var b = a[this.expando];
            return b || (b = {}, ma(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: true
            }))), b
        },
        set: function(a, b,
            c) {
            var d, a = this.cache(a);
            if ("string" == typeof b) a[b] = c;
            else
                for (d in b) a[d] = b[d];
            return a
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function(a, b, c) {
            var e;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (e = this.get(a, b), void 0 !== e ? e : this.get(a, d.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, e, f, g = a[this.expando];
            if (void 0 !== g) {
                if (void 0 === b) this.register(a);
                else {
                    d.isArray(b) ? e = b.concat(b.map(d.camelCase)) : (f = d.camelCase(b),
                        b in g ? e = [b, f] : (e = f, e = e in g ? [e] : e.match(G) || []));
                    c = e.length;
                    for (; c--;) delete g[e[c]]
                }(void 0 === b || d.isEmptyObject(g)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            a = a[this.expando];
            return void 0 !== a && !d.isEmptyObject(a)
        }
    };
    var p = new ia,
        C = new ia,
        Lb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Va = /[A-Z]/g;
    d.extend({
        hasData: function(a) {
            return C.hasData(a) || p.hasData(a)
        },
        data: function(a, b, c) {
            return C.access(a, b, c)
        },
        removeData: function(a, b) {
            C.remove(a, b)
        },
        _data: function(a, b, c) {
            return p.access(a,
                b, c)
        },
        _removeData: function(a, b) {
            p.remove(a, b)
        }
    });
    d.fn.extend({
        data: function(a, b) {
            var c, e, f, g = this[0],
                h = g && g.attributes;
            if (void 0 === a) {
                if (this.length && (f = C.get(g), 1 === g.nodeType && !p.get(g, "hasDataAttrs"))) {
                    for (c = h.length; c--;) h[c] && (e = h[c].name, 0 === e.indexOf("data-") && (e = d.camelCase(e.slice(5)), Ua(g, e, f[e])));
                    p.set(g, "hasDataAttrs", true)
                }
                return f
            }
            return "object" == typeof a ? this.each(function() {
                C.set(this, a)
            }) : F(this, function(b) {
                var c, e;
                if (g && void 0 === b) {
                    if (c = C.get(g, a) || C.get(g, a.replace(Va, "-$&").toLowerCase()),
                        void 0 !== c) return c;
                    if (e = d.camelCase(a), c = C.get(g, e), void 0 !== c) return c;
                    if (c = Ua(g, e, void 0), void 0 !== c) return c
                } else e = d.camelCase(a), this.each(function() {
                    var c = C.get(this, e);
                    C.set(this, e, b);
                    a.indexOf("-") > -1 && void 0 !== c && C.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, true)
        },
        removeData: function(a) {
            return this.each(function() {
                C.remove(this, a)
            })
        }
    });
    d.extend({
        queue: function(a, b, c) {
            var e;
            return a ? (b = (b || "fx") + "queue", e = p.get(a, b), c && (!e || d.isArray(c) ? e = p.access(a, b, d.makeArray(c)) : e.push(c)), e || []) :
                void 0
        },
        dequeue: function(a, b) {
            var b = b || "fx",
                c = d.queue(a, b),
                e = c.length,
                f = c.shift(),
                g = d._queueHooks(a, b),
                h = function() {
                    d.dequeue(a, b)
                };
            "inprogress" === f && (f = c.shift(), e--);
            f && ("fx" === b && c.unshift("inprogress"), delete g.stop, f.call(a, h, g));
            !e && g && g.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return p.get(a, c) || p.access(a, c, {
                empty: d.Callbacks("once memory").add(function() {
                    p.remove(a, [b + "queue", c])
                })
            })
        }
    });
    d.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--),
                arguments.length < c ? d.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = d.queue(this, a, b);
                    d._queueHooks(this, a);
                    "fx" === a && "inprogress" !== c[0] && d.dequeue(this, a)
                })
        },
        dequeue: function(a) {
            return this.each(function() {
                d.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, e = 1,
                f = d.Deferred(),
                g = this,
                h = this.length,
                i = function() {
                    --e || f.resolveWith(g, [g])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; h--;) c = p.get(g[h], a + "queueHooks"), c && c.empty && (e++,
                c.empty.add(i));
            return i(), f.promise(b)
        }
    });
    var xb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ja = RegExp("^(?:([+-])=|)(" + xb + ")([a-z%]*)$", "i"),
        T = ["Top", "Right", "Bottom", "Left"],
        aa = function(a, b) {
            return a = b || a, "none" === d.css(a, "display") || !d.contains(a.ownerDocument, a)
        },
        yb = /^(?:checkbox|radio)$/i,
        Ya = /<([\w:-]+)/,
        Za = /^$|\/(?:java|ecma)script/i,
        D = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>",
                "</tbody></table>"
            ],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    D.optgroup = D.option;
    D.tbody = D.tfoot = D.colgroup = D.caption = D.thead;
    D.th = D.td;
    var Mb = /<|&#?\w+;/;
    (function() {
        var a = q.createDocumentFragment().appendChild(q.createElement("div")),
            b = q.createElement("input");
        b.setAttribute("type", "radio");
        b.setAttribute("checked", "checked");
        b.setAttribute("name", "t");
        a.appendChild(b);
        t.checkClone = a.cloneNode(true).cloneNode(true).lastChild.checked;
        a.innerHTML = "<textarea>x</textarea>";
        t.noCloneChecked = !!a.cloneNode(true).lastChild.defaultValue
    })();
    var cc = /^key/,
        dc = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        zb = /^([^.]*)(?:\.(.+)|)/;
    d.event = {
        global: {},
        add: function(a, b, c, e, f) {
            var g, h, i, j, l, m, k, o, s, q, r;
            if (l = p.get(a))
                for (c.handler && (g = c, c = g.handler, f = g.selector), c.guid || (c.guid = d.guid++), (j = l.events) || (j = l.events = {}), (h = l.handle) || (h = l.handle = function(b) {
                        return "undefined" != typeof d && d.event.triggered !== b.type ? d.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(G) || [""],
                    l = b.length; l--;) i = zb.exec(b[l]) || [], s = r = i[1], q = (i[2] || "").split(".").sort(), s && (k = d.event.special[s] || {}, s = (f ? k.delegateType : k.bindType) || s, k = d.event.special[s] || {}, m = d.extend({
                        type: s,
                        origType: r,
                        data: e,
                        handler: c,
                        guid: c.guid,
                        selector: f,
                        needsContext: f && d.expr.match.needsContext.test(f),
                        namespace: q.join(".")
                    }, g), (o = j[s]) || (o = j[s] = [], o.delegateCount = 0, k.setup && k.setup.call(a, e, q, h) !== false || a.addEventListener && a.addEventListener(s, h)), k.add && (k.add.call(a, m), m.handler.guid || (m.handler.guid = c.guid)), f ?
                    o.splice(o.delegateCount++, 0, m) : o.push(m), d.event.global[s] = true)
        },
        remove: function(a, b, c, e, f) {
            var g, h, i, j, l, m, k, o, s, q, r, t = p.hasData(a) && p.get(a);
            if (t && (j = t.events)) {
                for (b = (b || "").match(G) || [""], l = b.length; l--;)
                    if (i = zb.exec(b[l]) || [], s = r = i[1], q = (i[2] || "").split(".").sort(), s) {
                        for (k = d.event.special[s] || {}, s = (e ? k.delegateType : k.bindType) || s, o = j[s] || [], i = i[2] && RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)"), h = g = o.length; g--;) m = o[g], !f && r !== m.origType || c && c.guid !== m.guid || i && !i.test(m.namespace) ||
                            e && e !== m.selector && ("**" !== e || !m.selector) || (o.splice(g, 1), m.selector && o.delegateCount--, k.remove && k.remove.call(a, m));
                        h && !o.length && (k.teardown && k.teardown.call(a, q, t.handle) !== false || d.removeEvent(a, s, t.handle), delete j[s])
                    } else
                        for (s in j) d.event.remove(a, s + b[l], c, e, true);
                d.isEmptyObject(j) && p.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            var a = d.event.fix(a),
                b, c, e, f, g, h = [],
                i = K.call(arguments);
            b = (p.get(this, "events") || {})[a.type] || [];
            var j = d.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget =
                this, !j.preDispatch || j.preDispatch.call(this, a) !== false) {
                for (h = d.event.handlers.call(this, a, b), b = 0;
                    (f = h[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = f.elem, c = 0;
                        (g = f.handlers[c++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, e = ((d.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === false && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a),
                    a.result
            }
        },
        handlers: function(a, b) {
            var c, e, f, g, h = [],
                i = b.delegateCount,
                j = a.target;
            if (i && j.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && (j.disabled !== true || "click" !== a.type)) {
                        for (e = [], c = 0; i > c; c++) g = b[c], f = g.selector + " ", void 0 === e[f] && (e[f] = g.needsContext ? d(f, this).index(j) > -1 : d.find(f, this, null, [j]).length), e[f] && e.push(g);
                        e.length && h.push({
                            elem: j,
                            handlers: e
                        })
                    } return i < b.length && h.push({
                elem: this,
                handlers: b.slice(i)
            }), h
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, f, g = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || q, d = c.documentElement, f = c.body, a.pageX = b.clientX + (d && d.scrollLeft || f && f.scrollLeft || 0) - (d && d.clientLeft || f && f.clientLeft ||
                    0), a.pageY = b.clientY + (d && d.scrollTop || f && f.scrollTop || 0) - (d && d.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[d.expando]) return a;
            var b, c, e;
            b = a.type;
            var f = a,
                g = this.fixHooks[b];
            for (g || (this.fixHooks[b] = g = dc.test(b) ? this.mouseHooks : cc.test(b) ? this.keyHooks : {}), e = g.props ? this.props.concat(g.props) : this.props, a = new d.Event(f), b = e.length; b--;) c = e[b], a[c] = f[c];
            return a.target || (a.target = q), 3 === a.target.nodeType && (a.target = a.target.parentNode),
                g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function() {
                    return this !== $a() && this.focus ? (this.focus(), false) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === $a() && this.blur ? (this.blur(), false) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && d.nodeName(this, "input") ? (this.click(), false) : void 0
                },
                _default: function(a) {
                    return d.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result &&
                        a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    };
    d.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    };
    d.Event = function(a, b) {
        return this instanceof d.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === false ? ra : $) : this.type = a, b && d.extend(this, b), this.timeStamp = a && a.timeStamp || d.now(), void(this[d.expando] = true)) : new d.Event(a, b)
    };
    d.Event.prototype = {
        constructor: d.Event,
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        isSimulated: false,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ra;
            a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ra;
            a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ra;
            a && !this.isSimulated && a.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    d.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        d.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var e, f = a.relatedTarget,
                    g = a.handleObj;
                return f && (f === this || d.contains(this, f)) || (a.type = g.origType, e = g.handler.apply(this, arguments), a.type = b), e
            }
        }
    });
    d.fn.extend({
        on: function(a, b, c, d) {
            return Da(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return Da(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e =
                a.handleObj, d(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, b, a[f]);
                return this
            }
            return b !== false && "function" != typeof b || (c = b, b = void 0), c === false && (c = $), this.each(function() {
                d.event.remove(this, a, c, b)
            })
        }
    });
    var ec = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        fc = /<script|<style|<link/i,
        Qb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Pb = /^true\/(.*)/,
        Rb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    d.extend({
        htmlPrefilter: function(a) {
            return a.replace(ec, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var e, f, g, h, i = a.cloneNode(true),
                j = d.contains(a.ownerDocument, a);
            if (!t.noCloneChecked && !(1 !== a.nodeType && 11 !== a.nodeType || d.isXMLDoc(a)))
                for (h = x(i), g = x(a), e = 0, f = g.length; f > e; e++) {
                    var l = g[e],
                        m = h[e],
                        k = m.nodeName.toLowerCase();
                    "input" === k && yb.test(l.type) ? m.checked = l.checked : "input" !== k && "textarea" !== k || (m.defaultValue = l.defaultValue)
                }
            if (b)
                if (c)
                    for (g = g || x(a), h = h || x(i), e = 0, f = g.length; f > e; e++) bb(g[e], h[e]);
                else bb(a,
                    i);
            return h = x(i, "script"), h.length > 0 && Ca(h, !j && x(a, "script")), i
        },
        cleanData: function(a) {
            for (var b, c, e, f = d.event.special, g = 0; void 0 !== (c = a[g]); g++)
                if (ma(c)) {
                    if (b = c[p.expando]) {
                        if (b.events)
                            for (e in b.events) f[e] ? d.event.remove(c, e) : d.removeEvent(c, e, b.handle);
                        c[p.expando] = void 0
                    }
                    c[C.expando] && (c[C.expando] = void 0)
                }
        }
    });
    d.fn.extend({
        domManip: Q,
        detach: function(a) {
            return db(this, a, true)
        },
        remove: function(a) {
            return db(this, a)
        },
        text: function(a) {
            return F(this, function(a) {
                return void 0 === a ? d.text(this) : this.empty().each(function() {
                    1 !==
                        this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return Q(this, arguments, function(a) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && ab(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return Q(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ab(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Q(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a,
                    this)
            })
        },
        after: function() {
            return Q(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (d.cleanData(x(a, false)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? false : a, b = null == b ? a : b, this.map(function() {
                return d.clone(this, a, b)
            })
        },
        html: function(a) {
            return F(this, function(a) {
                var c = this[0] || {},
                    e = 0,
                    f = this.length;
                if (void 0 === a && 1 === c.nodeType) return c.innerHTML;
                if ("string" ==
                    typeof a && !fc.test(a) && !D[(Ya.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = d.htmlPrefilter(a);
                    try {
                        for (; f > e; e++) c = this[e] || {}, 1 === c.nodeType && (d.cleanData(x(c, false)), c.innerHTML = a);
                        c = 0
                    } catch (g) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Q(this, arguments, function(b) {
                var c = this.parentNode;
                d.inArray(this, a) < 0 && (d.cleanData(x(this)), c && c.replaceChild(b, this))
            }, a)
        }
    });
    d.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        },
        function(a, b) {
            d.fn[a] = function(a) {
                for (var e, f = [], a = d(a), g = a.length - 1, h = 0; g >= h; h++) e = h === g ? this : this.clone(true), d(a[h])[b](e), Ka.apply(f, e.get());
                return this.pushStack(f)
            }
        });
    var sa, fb = {
            HTML: "block",
            BODY: "block"
        },
        gb = /^margin/,
        Fa = RegExp("^(" + xb + ")(?!px)[a-z%]+$", "i"),
        ta = function(a) {
            var b = a.ownerDocument.defaultView;
            return b && b.opener || (b = r), b.getComputedStyle(a)
        },
        Na = function(a, b, c, d) {
            var f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            c = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return c
        },
        na = q.documentElement;
    (function() {
        var a, b, c, e, f = q.createElement("div"),
            g = q.createElement("div");
        if (g.style) {
            g.style.backgroundClip = "content-box";
            g.cloneNode(true).style.backgroundClip = "";
            t.clearCloneStyle = "content-box" === g.style.backgroundClip;
            f.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
            f.appendChild(g);
            var h = function() {
                g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                g.innerHTML = "";
                na.appendChild(f);
                var d = r.getComputedStyle(g);
                a = "1%" !== d.top;
                e = "2px" === d.marginLeft;
                b = "4px" === d.width;
                g.style.marginRight = "50%";
                c = "4px" === d.marginRight;
                na.removeChild(f)
            };
            d.extend(t, {
                pixelPosition: function() {
                    return h(), a
                },
                boxSizingReliable: function() {
                    return null == b && h(), b
                },
                pixelMarginRight: function() {
                    return null == b && h(), c
                },
                reliableMarginLeft: function() {
                    return null == b && h(), e
                },
                reliableMarginRight: function() {
                    var a, b = g.appendChild(q.createElement("div"));
                    return b.style.cssText = g.style.cssText =
                        "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", b.style.marginRight = b.style.width = "0", g.style.width = "1px", na.appendChild(f), a = !parseFloat(r.getComputedStyle(b).marginRight), na.removeChild(f), g.removeChild(b), a
                }
            })
        }
    })();
    var gc = /^(none|table(?!-c[ea]).+)/,
        hc = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ab = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        jb = ["Webkit", "O", "Moz", "ms"],
        ib = q.createElement("div").style;
    d.extend({
        cssHooks: {
            opacity: {
                get: function(a,
                    b) {
                    if (b) {
                        var c = S(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: true,
            columnCount: true,
            fillOpacity: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = d.camelCase(b),
                    j = a.style;
                return b = d.cssProps[i] || (d.cssProps[i] = hb(i) || i), h = d.cssHooks[b] || d.cssHooks[i], void 0 === c ? h && "get" in h &&
                    void 0 !== (f = h.get(a, false, e)) ? f : j[b] : (g = typeof c, "string" === g && (f = ja.exec(c)) && f[1] && (c = Wa(a, b, f), g = "number"), null != c && c === c && ("number" === g && (c += f && f[3] || (d.cssNumber[i] ? "" : "px")), t.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), h && "set" in h && void 0 === (c = h.set(a, c, e)) || (j[b] = c)), void 0)
            }
        },
        css: function(a, b, c, e) {
            var f, g, h, i = d.camelCase(b);
            return b = d.cssProps[i] || (d.cssProps[i] = hb(i) || i), h = d.cssHooks[b] || d.cssHooks[i], h && "get" in h && (f = h.get(a, true, c)), void 0 === f && (f = S(a, b, e)),
                "normal" === f && b in Ab && (f = Ab[b]), "" === c || c ? (g = parseFloat(f), c === true || isFinite(g) ? g || 0 : f) : f
        }
    });
    d.each(["height", "width"], function(a, b) {
        d.cssHooks[b] = {
            get: function(a, e, f) {
                return e ? gc.test(d.css(a, "display")) && 0 === a.offsetWidth ? Na(a, hc, function() {
                    return mb(a, b, f)
                }) : mb(a, b, f) : void 0
            },
            set: function(a, e, f) {
                var g, h = f && ta(a),
                    f = f && lb(a, b, f, "border-box" === d.css(a, "boxSizing", false, h), h);
                return f && (g = ja.exec(e)) && "px" !== (g[3] || "px") && (a.style[b] = e, e = d.css(a, b)), kb(a, e, f)
            }
        }
    });
    d.cssHooks.marginLeft = Ga(t.reliableMarginLeft,
        function(a, b) {
            return b ? (parseFloat(S(a, "marginLeft")) || a.getBoundingClientRect().left - Na(a, {
                marginLeft: 0
            }, function() {
                return a.getBoundingClientRect().left
            })) + "px" : void 0
        });
    d.cssHooks.marginRight = Ga(t.reliableMarginRight, function(a, b) {
        return b ? Na(a, {
            display: "inline-block"
        }, S, [a, "marginRight"]) : void 0
    });
    d.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        d.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, f = {}, c = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) f[a + T[d] + b] = c[d] || c[d - 2] || c[0];
                return f
            }
        };
        gb.test(a) || (d.cssHooks[a + b].set = kb)
    });
    d.fn.extend({
        css: function(a, b) {
            return F(this, function(a, b, f) {
                var g, h = {},
                    i = 0;
                if (d.isArray(b)) {
                    for (f = ta(a), g = b.length; g > i; i++) h[b[i]] = d.css(a, b[i], false, f);
                    return h
                }
                return void 0 !== f ? d.style(a, b, f) : d.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return nb(this, true)
        },
        hide: function() {
            return nb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                aa(this) ? d(this).show() : d(this).hide()
            })
        }
    });
    d.Tween = y;
    y.prototype = {
        constructor: y,
        init: function(a, b, c, e, f, g) {
            this.elem = a;
            this.prop = c;
            this.easing = f || d.easing._default;
            this.options = b;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = g || (d.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = y.propHooks[this.prop];
            return a && a.get ? a.get(this) : y.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = y.propHooks[this.prop];
            return this.options.duration ? this.pos = b = d.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) *
                b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : y.propHooks._default.set(this), this
        }
    };
    y.prototype.init.prototype = y.prototype;
    y.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = d.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                d.fx.step[a.prop] ? d.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[d.cssProps[a.prop]] && !d.cssHooks[a.prop] ? a.elem[a.prop] =
                    a.now : d.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    };
    y.propHooks.scrollTop = y.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    d.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    };
    d.fx = y.prototype.init;
    d.fx.step = {};
    var ba, za, ic = /^(?:toggle|show|hide)$/,
        jc = /queueHooks$/;
    d.Animation = d.extend(A, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return Wa(c.elem, a, ja.exec(b), c), c
            }]
        },
        tweener: function(a,
            b) {
            d.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
            for (var c, e = 0, f = a.length; f > e; e++) c = a[e], A.tweeners[c] = A.tweeners[c] || [], A.tweeners[c].unshift(b)
        },
        prefilters: [function(a, b, c) {
            var e, f, g, h, i, j, l, m, k = this,
                o = {},
                s = a.style,
                q = a.nodeType && aa(a),
                r = p.get(a, "fxshow");
            c.queue || (i = d._queueHooks(a, "fx"), null == i.unqueued && (i.unqueued = 0, j = i.empty.fire, i.empty.fire = function() {
                i.unqueued || j()
            }), i.unqueued++, k.always(function() {
                k.always(function() {
                    i.unqueued--;
                    d.queue(a, "fx").length || i.empty.fire()
                })
            }));
            1 === a.nodeType &&
                ("height" in b || "width" in b) && (c.overflow = [s.overflow, s.overflowX, s.overflowY], l = d.css(a, "display"), m = "none" === l ? p.get(a, "olddisplay") || Ea(a.nodeName) : l, "inline" === m && "none" === d.css(a, "float") && (s.display = "inline-block"));
            c.overflow && (s.overflow = "hidden", k.always(function() {
                s.overflow = c.overflow[0];
                s.overflowX = c.overflow[1];
                s.overflowY = c.overflow[2]
            }));
            for (e in b)
                if (f = b[e], ic.exec(f)) {
                    if (delete b[e], g = g || "toggle" === f, f === (q ? "hide" : "show")) {
                        if ("show" !== f || !r || void 0 === r[e]) continue;
                        q = true
                    }
                    o[e] = r && r[e] ||
                        d.style(a, e)
                } else l = void 0;
            if (d.isEmptyObject(o)) "inline" === ("none" === l ? Ea(a.nodeName) : l) && (s.display = l);
            else
                for (e in r ? "hidden" in r && (q = r.hidden) : r = p.access(a, "fxshow", {}), g && (r.hidden = !q), q ? d(a).show() : k.done(function() {
                        d(a).hide()
                    }), k.done(function() {
                        var b;
                        p.remove(a, "fxshow");
                        for (b in o) d.style(a, b, o[b])
                    }), o) h = pb(q ? r[e] : 0, e, k), e in r || (r[e] = h.start, q && (h.end = h.start, h.start = "width" === e || "height" === e ? 1 : 0))
        }],
        prefilter: function(a, b) {
            b ? A.prefilters.unshift(a) : A.prefilters.push(a)
        }
    });
    d.speed = function(a,
        b, c) {
        var e = a && "object" == typeof a ? d.extend({}, a) : {
            complete: c || !c && b || d.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !d.isFunction(b) && b
        };
        return e.duration = d.fx.off ? 0 : "number" == typeof e.duration ? e.duration : e.duration in d.fx.speeds ? d.fx.speeds[e.duration] : d.fx.speeds._default, null != e.queue && e.queue !== true || (e.queue = "fx"), e.old = e.complete, e.complete = function() {
            d.isFunction(e.old) && e.old.call(this);
            e.queue && d.dequeue(this, e.queue)
        }, e
    };
    d.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(aa).css("opacity",
                0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, e) {
            var f = d.isEmptyObject(a),
                g = d.speed(b, c, e),
                b = function() {
                    var b = A(this, d.extend({}, a), g);
                    (f || p.get(this, "finish")) && b.stop(true)
                };
            return b.finish = b, f || g.queue === false ? this.each(b) : this.queue(g.queue, b)
        },
        stop: function(a, b, c) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop;
                b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== false && this.queue(a || "fx", []), this.each(function() {
                var b = true,
                    g = null != a && a + "queueHooks",
                    h = d.timers,
                    i = p.get(this);
                if (g) i[g] && i[g].stop && e(i[g]);
                else
                    for (g in i) i[g] && i[g].stop && jc.test(g) && e(i[g]);
                for (g = h.length; g--;) h[g].elem !== this || null != a && h[g].queue !== a || (h[g].anim.stop(c), b = false, h.splice(g, 1));
                !b && c || d.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== false && (a = a || "fx"), this.each(function() {
                var b, c = p.get(this),
                    e = c[a + "queue"];
                b = c[a + "queueHooks"];
                var f = d.timers,
                    g = e ? e.length : 0;
                for (c.finish = true, d.queue(this, a, []), b && b.stop && b.stop.call(this, true), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(true),
                    f.splice(b, 1));
                for (b = 0; g > b; b++) e[b] && e[b].finish && e[b].finish.call(this);
                delete c.finish
            })
        }
    });
    d.each(["toggle", "show", "hide"], function(a, b) {
        var c = d.fn[b];
        d.fn[b] = function(a, d, g) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(ua(b, true), a, d, g)
        }
    });
    d.each({
        slideDown: ua("show"),
        slideUp: ua("hide"),
        slideToggle: ua("toggle"),
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
        d.fn[a] = function(a, d, f) {
            return this.animate(b, a, d, f)
        }
    });
    d.timers = [];
    d.fx.tick = function() {
        var a, b = 0,
            c = d.timers;
        for (ba = d.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || d.fx.stop();
        ba = void 0
    };
    d.fx.timer = function(a) {
        d.timers.push(a);
        a() ? d.fx.start() : d.timers.pop()
    };
    d.fx.interval = 13;
    d.fx.start = function() {
        za || (za = r.setInterval(d.fx.tick, d.fx.interval))
    };
    d.fx.stop = function() {
        r.clearInterval(za);
        za = null
    };
    d.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    d.fn.delay = function(a, b) {
        return a = d.fx ? d.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, d) {
            var f =
                r.setTimeout(b, a);
            d.stop = function() {
                r.clearTimeout(f)
            }
        })
    };
    (function() {
        var a = q.createElement("input"),
            b = q.createElement("select"),
            c = b.appendChild(q.createElement("option"));
        a.type = "checkbox";
        t.checkOn = "" !== a.value;
        t.optSelected = c.selected;
        b.disabled = true;
        t.optDisabled = !c.disabled;
        a = q.createElement("input");
        a.value = "t";
        a.type = "radio";
        t.radioValue = "t" === a.value
    })();
    var Bb, P = d.expr.attrHandle;
    d.fn.extend({
        attr: function(a, b) {
            return F(this, d.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                d.removeAttr(this,
                    a)
            })
        }
    });
    d.extend({
        attr: function(a, b, c) {
            var e, f, g = a.nodeType;
            if (3 !== g && 8 !== g && 2 !== g) return "undefined" == typeof a.getAttribute ? d.prop(a, b, c) : (1 === g && d.isXMLDoc(a) || (b = b.toLowerCase(), f = d.attrHooks[b] || (d.expr.match.bool.test(b) ? Bb : void 0)), void 0 !== c ? null === c ? void d.removeAttr(a, b) : f && "set" in f && void 0 !== (e = f.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : f && "get" in f && null !== (e = f.get(a, b)) ? e : (e = d.find.attr(a, b), null == e ? void 0 : e))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!t.radioValue && "radio" === b && d.nodeName(a,
                            "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, e, f = 0,
                g = b && b.match(G);
            if (g && 1 === a.nodeType)
                for (; c = g[f++];) e = d.propFix[c] || c, d.expr.match.bool.test(c) && (a[e] = false), a.removeAttribute(c)
        }
    });
    Bb = {
        set: function(a, b, c) {
            return b === false ? d.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    };
    d.each(d.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = P[b] || d.find.attr;
        P[b] = function(a, b, d) {
            var h, i;
            return d || (i = P[b], P[b] = h, h = null != c(a, b, d) ? b.toLowerCase() :
                null, P[b] = i), h
        }
    });
    var kc = /^(?:input|select|textarea|button)$/i,
        lc = /^(?:a|area)$/i;
    d.fn.extend({
        prop: function(a, b) {
            return F(this, d.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[d.propFix[a] || a]
            })
        }
    });
    d.extend({
        prop: function(a, b, c) {
            var e, f, g = a.nodeType;
            if (3 !== g && 8 !== g && 2 !== g) return 1 === g && d.isXMLDoc(a) || (b = d.propFix[b] || b, f = d.propHooks[b]), void 0 !== c ? f && "set" in f && void 0 !== (e = f.set(a, c, b)) ? e : a[b] = c : f && "get" in f && null !== (e = f.get(a, b)) ? e : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b =
                        d.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : kc.test(a.nodeName) || lc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    t.optSelected || (d.propHooks.selected = {
        get: function() {
            return null
        },
        set: function() {}
    });
    d.each("tabIndex,readOnly,maxLength,cellSpacing,cellPadding,rowSpan,colSpan,useMap,frameBorder,contentEditable".split(","), function() {
        d.propFix[this.toLowerCase()] = this
    });
    var Oa = /[\t\r\n\f]/g;
    d.fn.extend({
        addClass: function(a) {
            var b, c, e, f, g, h, i, j = 0;
            if (d.isFunction(a)) return this.each(function(b) {
                d(this).addClass(a.call(this,
                    b, B(this)))
            });
            if ("string" == typeof a && a)
                for (b = a.match(G) || []; c = this[j++];)
                    if (f = B(c), e = 1 === c.nodeType && (" " + f + " ").replace(Oa, " ")) {
                        for (h = 0; g = b[h++];) e.indexOf(" " + g + " ") < 0 && (e += g + " ");
                        i = d.trim(e);
                        f !== i && c.setAttribute("class", i)
                    } return this
        },
        removeClass: function(a) {
            var b, c, e, f, g, h, i, j = 0;
            if (d.isFunction(a)) return this.each(function(b) {
                d(this).removeClass(a.call(this, b, B(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a)
                for (b = a.match(G) || []; c = this[j++];)
                    if (f = B(c), e =
                        1 === c.nodeType && (" " + f + " ").replace(Oa, " ")) {
                        for (h = 0; g = b[h++];)
                            for (; e.indexOf(" " + g + " ") > -1;) e = e.replace(" " + g + " ", " ");
                        i = d.trim(e);
                        f !== i && c.setAttribute("class", i)
                    } return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : d.isFunction(a) ? this.each(function(c) {
                d(this).toggleClass(a.call(this, c, B(this), b), b)
            }) : this.each(function() {
                var b, f, g, h;
                if ("string" === c)
                    for (f = 0, g = d(this), h = a.match(G) || []; b = h[f++];) g.hasClass(b) ? g.removeClass(b) :
                        g.addClass(b);
                else void 0 !== a && "boolean" !== c || (b = B(this), b && p.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === false ? "" : p.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            for (var b, c = 0, a = " " + a + " "; b = this[c++];)
                if (1 === b.nodeType && (" " + B(b) + " ").replace(Oa, " ").indexOf(a) > -1) return true;
            return false
        }
    });
    var mc = /\r/g,
        nc = /[\x20\t\r\n\f]+/g;
    d.fn.extend({
        val: function(a) {
            var b, c, e, f = this[0];
            if (arguments.length) return e = d.isFunction(a), this.each(function(c) {
                var f;
                1 ===
                    this.nodeType && (f = e ? a.call(this, c, d(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : d.isArray(f) && (f = d.map(f, function(a) {
                        return null == a ? "" : a + ""
                    })), b = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, f, "value") || (this.value = f))
            });
            if (f) return b = d.valHooks[f.type] || d.valHooks[f.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(f, "value")) ? c : (c = f.value, "string" == typeof c ? c.replace(mc, "") : null == c ? "" : c)
        }
    });
    d.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b =
                        d.find.attr(a, "value");
                    return null != b ? b : d.trim(d.text(a)).replace(nc, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : c.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (b = c[i], (b.selected || i === e) && (t.optDisabled ? !b.disabled : null === b.getAttribute("disabled")) && (!b.parentNode.disabled || !d.nodeName(b.parentNode, "optgroup"))) {
                            if (a = d(b).val(), f) return a;
                            g.push(a)
                        } return g
                },
                set: function(a, b) {
                    for (var c, e, f = a.options, g = d.makeArray(b), h = f.length; h--;) e =
                        f[h], (e.selected = d.inArray(d.valHooks.option.get(e), g) > -1) && (c = true);
                    return c || (a.selectedIndex = -1), g
                }
            }
        }
    });
    d.each(["radio", "checkbox"], function() {
        d.valHooks[this] = {
            set: function(a, b) {
                return d.isArray(b) ? a.checked = d.inArray(d(a).val(), b) > -1 : void 0
            }
        };
        t.checkOn || (d.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var Cb = /^(?:focusinfocus|focusoutblur)$/;
    d.extend(d.event, {
        trigger: function(a, b, c, e) {
            var f, g, h, i, j, l, m, k = [c || q],
                o = R.call(a, "type") ? a.type : a;
            f = R.call(a, "namespace") ?
                a.namespace.split(".") : [];
            if (g = h = c = c || q, 3 !== c.nodeType && 8 !== c.nodeType && !Cb.test(o + d.event.triggered) && (o.indexOf(".") > -1 && (f = o.split("."), o = f.shift(), f.sort()), j = o.indexOf(":") < 0 && "on" + o, a = a[d.expando] ? a : new d.Event(o, "object" == typeof a && a), a.isTrigger = e ? 2 : 3, a.namespace = f.join("."), a.rnamespace = a.namespace ? RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = c), b = null == b ? [a] : d.makeArray(b, [a]), m = d.event.special[o] || {}, e || !m.trigger || m.trigger.apply(c, b) !==
                    false)) {
                if (!e && !m.noBubble && !d.isWindow(c)) {
                    for (i = m.delegateType || o, Cb.test(i + o) || (g = g.parentNode); g; g = g.parentNode) k.push(g), h = g;
                    h === (c.ownerDocument || q) && k.push(h.defaultView || h.parentWindow || r)
                }
                for (f = 0;
                    (g = k[f++]) && !a.isPropagationStopped();) a.type = f > 1 ? i : m.bindType || o, l = (p.get(g, "events") || {})[a.type] && p.get(g, "handle"), l && l.apply(g, b), l = j && g[j], l && l.apply && ma(g) && (a.result = l.apply(g, b), a.result === false && a.preventDefault());
                return a.type = o, e || a.isDefaultPrevented() || m._default && m._default.apply(k.pop(),
                    b) !== false || !ma(c) || j && d.isFunction(c[o]) && !d.isWindow(c) && (h = c[j], h && (c[j] = null), d.event.triggered = o, c[o](), d.event.triggered = void 0, h && (c[j] = h)), a.result
            }
        },
        simulate: function(a, b, c) {
            a = d.extend(new d.Event, c, {
                type: a,
                isSimulated: true
            });
            d.event.trigger(a, null, b)
        }
    });
    d.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                d.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? d.event.trigger(a, b, c, true) : void 0
        }
    });
    d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function(a, b) {
            d.fn[b] = function(a, d) {
                return arguments.length > 0 ? this.on(b, null, a, d) : this.trigger(b)
            }
        });
    d.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    t.focusin = "onfocusin" in r;
    t.focusin || d.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            d.event.simulate(b, a.target, d.event.fix(a))
        };
        d.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    f = p.access(d, b);
                f || d.addEventListener(a, c, true);
                p.access(d, b, (f || 0) + 1)
            },
            teardown: function() {
                var d =
                    this.ownerDocument || this,
                    f = p.access(d, b) - 1;
                f ? p.access(d, b, f) : (d.removeEventListener(a, c, true), p.remove(d, b))
            }
        }
    });
    var oa = r.location,
        Pa = d.now(),
        Qa = /\?/;
    d.parseJSON = function(a) {
        return JSON.parse(a + "")
    };
    d.parseXML = function(a) {
        var b;
        if (!a || "string" != typeof a) return null;
        try {
            b = (new r.DOMParser).parseFromString(a, "text/xml")
        } catch (c) {
            b = void 0
        }
        return b && !b.getElementsByTagName("parsererror").length || d.error("Invalid XML: " + a), b
    };
    var oc = /#.*$/,
        Db = /([?&])_=[^&]*/,
        pc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        qc = /^(?:GET|HEAD)$/,
        rc = /^\/\//,
        Eb = {},
        Ha = {},
        Fb = "*/".concat("*"),
        Ra = q.createElement("a");
    Ra.href = oa.href;
    d.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: oa.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(oa.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Fb,
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
                "text html": true,
                "text json": d.parseJSON,
                "text xml": d.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Ia(Ia(a, d.ajaxSettings), b) : Ia(d.ajaxSettings, a)
        },
        ajaxPrefilter: qb(Eb),
        ajaxTransport: qb(Ha),
        ajax: function(a, b) {
            function c(a, b, c, h) {
                var j, m, q, u, v = b;
                if (2 !== I) {
                    I = 2;
                    i && r.clearTimeout(i);
                    e = void 0;
                    g = h || "";
                    n.readyState = a > 0 ? 4 : 0;
                    h = a >= 200 && 300 >
                        a || 304 === a;
                    if (c) {
                        q = k;
                        for (var x = n, z, y, B, E, w = q.contents, H = q.dataTypes;
                            "*" === H[0];) H.shift(), void 0 === z && (z = q.mimeType || x.getResponseHeader("Content-Type"));
                        if (z)
                            for (y in w)
                                if (w[y] && w[y].test(z)) {
                                    H.unshift(y);
                                    break
                                } if (H[0] in c) B = H[0];
                        else {
                            for (y in c) {
                                if (!H[0] || q.converters[y + " " + H[0]]) {
                                    B = y;
                                    break
                                }
                                E || (E = y)
                            }
                            B = B || E
                        }
                        q = B ? (B !== H[0] && H.unshift(B), c[B]) : void 0
                    }
                    var J;
                    a: {
                        c = k;z = q;y = n;B = h;
                        var A, G, F, x = {},
                            w = c.dataTypes.slice();
                        if (w[1])
                            for (A in c.converters) x[A.toLowerCase()] = c.converters[A];
                        for (E = w.shift(); E;)
                            if (c.responseFields[E] &&
                                (y[c.responseFields[E]] = z), !F && B && c.dataFilter && (z = c.dataFilter(z, c.dataType)), F = E, E = w.shift())
                                if ("*" === E) E = F;
                                else if ("*" !== F && F !== E) {
                            if (A = x[F + " " + E] || x["* " + E], !A)
                                for (J in x)
                                    if (G = J.split(" "), G[1] === E && (A = x[F + " " + G[0]] || x["* " + G[0]])) {
                                        A === true ? A = x[J] : x[J] !== true && (E = G[0], w.unshift(G[1]));
                                        break
                                    } if (A !== true)
                                if (A && c["throws"]) z = A(z);
                                else try {
                                    z = A(z)
                                } catch (K) {
                                    J = {
                                        state: "parsererror",
                                        error: A ? K : "No conversion from " + F + " to " + E
                                    };
                                    break a
                                }
                        }
                        J = {
                            state: "success",
                            data: z
                        }
                    }
                    q = J;
                    h ? (k.ifModified && (u = n.getResponseHeader("Last-Modified"),
                        u && (d.lastModified[f] = u), u = n.getResponseHeader("etag"), u && (d.etag[f] = u)), 204 === a || "HEAD" === k.type ? v = "nocontent" : 304 === a ? v = "notmodified" : (v = q.state, j = q.data, m = q.error, h = !m)) : (m = v, !a && v || (v = "error", 0 > a && (a = 0)));
                    n.status = a;
                    n.statusText = (b || v) + "";
                    h ? t.resolveWith(o, [j, v, n]) : t.rejectWith(o, [n, v, m]);
                    n.statusCode(C);
                    C = void 0;
                    l && p.trigger(h ? "ajaxSuccess" : "ajaxError", [n, k, h ? j : m]);
                    D.fireWith(o, [n, v]);
                    l && (p.trigger("ajaxComplete", [n, k]), --d.active || d.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (b = a, a = void 0);
            b = b || {};
            var e, f, g, h, i, j, l, m, k = d.ajaxSetup({}, b),
                o = k.context || k,
                p = k.context && (o.nodeType || o.jquery) ? d(o) : d.event,
                t = d.Deferred(),
                D = d.Callbacks("once memory"),
                C = k.statusCode || {},
                x = {},
                y = {},
                I = 0,
                v = "canceled",
                n = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === I) {
                            if (!h)
                                for (h = {}; b = pc.exec(g);) h[b[1].toLowerCase()] = b[2];
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === I ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return I || (a = y[c] = y[c] || a, x[a] =
                            b), this
                    },
                    overrideMimeType: function(a) {
                        return I || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > I)
                                for (b in a) C[b] = [C[b], a[b]];
                            else n.always(a[n.status]);
                        return this
                    },
                    abort: function(a) {
                        a = a || v;
                        return e && e.abort(a), c(0, a), this
                    }
                };
            if (t.promise(n).complete = D.add, n.success = n.done, n.error = n.fail, k.url = ((a || k.url || oa.href) + "").replace(oc, "").replace(rc, oa.protocol + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = d.trim(k.dataType || "*").toLowerCase().match(G) || [""], null == k.crossDomain) {
                j =
                    q.createElement("a");
                try {
                    j.href = k.url, j.href = j.href, k.crossDomain = Ra.protocol + "//" + Ra.host != j.protocol + "//" + j.host
                } catch (A) {
                    k.crossDomain = true
                }
            }
            if (k.data && k.processData && "string" != typeof k.data && (k.data = d.param(k.data, k.traditional)), rb(Eb, k, b, n), 2 === I) return n;
            l = d.event && k.global;
            l && 0 === d.active++ && d.event.trigger("ajaxStart");
            k.type = k.type.toUpperCase();
            k.hasContent = !qc.test(k.type);
            f = k.url;
            k.hasContent || (k.data && (f = k.url += (Qa.test(f) ? "&" : "?") + k.data, delete k.data), k.cache === false && (k.url = Db.test(f) ?
                f.replace(Db, "$1_=" + Pa++) : f + (Qa.test(f) ? "&" : "?") + "_=" + Pa++));
            k.ifModified && (d.lastModified[f] && n.setRequestHeader("If-Modified-Since", d.lastModified[f]), d.etag[f] && n.setRequestHeader("If-None-Match", d.etag[f]));
            (k.data && k.hasContent && k.contentType !== false || b.contentType) && n.setRequestHeader("Content-Type", k.contentType);
            n.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Fb + "; q=0.01" : "") : k.accepts["*"]);
            for (m in k.headers) n.setRequestHeader(m,
                k.headers[m]);
            if (k.beforeSend && (k.beforeSend.call(o, n, k) === false || 2 === I)) return n.abort();
            v = "abort";
            for (m in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) n[m](k[m]);
            if (e = rb(Ha, k, b, n)) {
                if (n.readyState = 1, l && p.trigger("ajaxSend", [n, k]), 2 === I) return n;
                k.async && k.timeout > 0 && (i = r.setTimeout(function() {
                    n.abort("timeout")
                }, k.timeout));
                try {
                    I = 1, e.send(x, c)
                } catch (B) {
                    if (!(2 > I)) throw B;
                    c(-1, B)
                }
            } else c(-1, "No Transport");
            return n
        },
        getJSON: function(a, b, c) {
            return d.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return d.get(a, void 0,
                b, "script")
        }
    });
    d.each(["get", "post"], function(a, b) {
        d[b] = function(a, e, f, g) {
            return d.isFunction(e) && (g = g || f, f = e, e = void 0), d.ajax(d.extend({
                url: a,
                type: b,
                dataType: g,
                data: e,
                success: f
            }, d.isPlainObject(a) && a))
        }
    });
    d._evalUrl = function(a) {
        return d.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: false,
            global: false,
            "throws": true
        })
    };
    d.fn.extend({
        wrapAll: function(a) {
            var b;
            return d.isFunction(a) ? this.each(function(b) {
                d(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = d(a, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode &&
                b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                    return a
                }).append(this)), this)
        },
        wrapInner: function(a) {
            return d.isFunction(a) ? this.each(function(b) {
                d(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = d(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = d.isFunction(a);
            return this.each(function(c) {
                d(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                d.nodeName(this, "body") ||
                    d(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    d.expr.filters.hidden = function(a) {
        return !d.expr.filters.visible(a)
    };
    d.expr.filters.visible = function(a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
    };
    var sc = /%20/g,
        Tb = /\[\]$/,
        Gb = /\r?\n/g,
        tc = /^(?:submit|button|image|reset|file)$/i,
        uc = /^(?:input|select|textarea|keygen)/i;
    d.param = function(a, b) {
        var c, e = [],
            f = function(a, b) {
                b = d.isFunction(b) ? b() : null == b ? "" : b;
                e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b &&
            (b = d.ajaxSettings && d.ajaxSettings.traditional), d.isArray(a) || a.jquery && !d.isPlainObject(a)) d.each(a, function() {
            f(this.name, this.value)
        });
        else
            for (c in a) Ja(c, a[c], b, f);
        return e.join("&").replace(sc, "+")
    };
    d.fn.extend({
        serialize: function() {
            return d.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = d.prop(this, "elements");
                return a ? d.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !d(this).is(":disabled") && uc.test(this.nodeName) && !tc.test(a) &&
                    (this.checked || !yb.test(a))
            }).map(function(a, b) {
                var c = d(this).val();
                return null == c ? null : d.isArray(c) ? d.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Gb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Gb, "\r\n")
                }
            }).get()
        }
    });
    d.ajaxSettings.xhr = function() {
        try {
            return new r.XMLHttpRequest
        } catch (a) {}
    };
    var vc = {
            "0": 200,
            1223: 204
        },
        Z = d.ajaxSettings.xhr();
    t.cors = !!Z && "withCredentials" in Z;
    t.ajax = Z = !!Z;
    d.ajaxTransport(function(a) {
        var b, c;
        return t.cors || Z && !a.crossDomain ? {
            send: function(d, f) {
                var g, h = a.xhr();
                if (h.open(a.type,
                        a.url, a.async, a.username, a.password), a.xhrFields)
                    for (g in a.xhrFields) h[g] = a.xhrFields[g];
                a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType);
                a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                for (g in d) h.setRequestHeader(g, d[g]);
                b = function(a) {
                    return function() {
                        b && (b = c = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(vc[h.status] || h.status, h.statusText,
                            "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                                binary: h.response
                            } : {
                                text: h.responseText
                            }, h.getAllResponseHeaders()))
                    }
                };
                h.onload = b();
                c = h.onerror = b("error");
                void 0 !== h.onabort ? h.onabort = c : h.onreadystatechange = function() {
                    4 === h.readyState && r.setTimeout(function() {
                        b && c()
                    })
                };
                b = b("abort");
                try {
                    h.send(a.hasContent && a.data || null)
                } catch (i) {
                    if (b) throw i;
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    });
    d.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return d.globalEval(a), a
            }
        }
    });
    d.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = false);
        a.crossDomain && (a.type = "GET")
    });
    d.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = d("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove();
                        c = null;
                        a && f("error" === a.type ? 404 : 200, a.type)
                    });
                    q.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Hb = [],
        Sa = /(=)\?(?=&|$)|\?\?/;
    d.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Hb.pop() || d.expando + "_" + Pa++;
            return this[a] = true, a
        }
    });
    d.ajaxPrefilter("json jsonp", function(a, b, c) {
        var e, f, g, h = a.jsonp !== false && (Sa.test(a.url) ? "url" : "string" == typeof a.data && 0 === (a.contentType || "").indexOf("application/x-www-form-urlencoded") && Sa.test(a.data) && "data");
        return h || "jsonp" === a.dataTypes[0] ? (e = a.jsonpCallback = d.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, h ? a[h] = a[h].replace(Sa,
            "$1" + e) : a.jsonp !== false && (a.url += (Qa.test(a.url) ? "&" : "?") + a.jsonp + "=" + e), a.converters["script json"] = function() {
            return g || d.error(e + " was not called"), g[0]
        }, a.dataTypes[0] = "json", f = r[e], r[e] = function() {
            g = arguments
        }, c.always(function() {
            void 0 === f ? d(r).removeProp(e) : r[e] = f;
            a[e] && (a.jsonpCallback = b.jsonpCallback, Hb.push(e));
            g && d.isFunction(f) && f(g[0]);
            g = f = void 0
        }), "script") : void 0
    });
    d.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = false);
        b = b || q;
        var e = vb.exec(a),
            c = !c && [];
        return e ? [b.createElement(e[1])] : (e = Xa([a], b, c), c && c.length && d(c).remove(), d.merge([], e.childNodes))
    };
    var Ib = d.fn.load;
    d.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
        var e, f, g, h = this,
            i = a.indexOf(" ");
        return i > -1 && (e = d.trim(a.slice(i)), a = a.slice(0, i)), d.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), h.length > 0 && d.ajax({
            url: a,
            type: f || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            g = arguments;
            h.html(e ? d("<div>").append(d.parseHTML(a)).find(e) :
                a)
        }).always(c && function(a, b) {
            h.each(function() {
                c.apply(this, g || [a.responseText, b, a])
            })
        }), this
    };
    d.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","), function(a, b) {
        d.fn[b] = function(a) {
            return this.on(b, a)
        }
    });
    d.expr.filters.animated = function(a) {
        return d.grep(d.timers, function(b) {
            return a === b.elem
        }).length
    };
    d.offset = {
        setOffset: function(a, b, c) {
            var e, f, g, h, i, j, l, m = d.css(a, "position"),
                k = d(a),
                o = {};
            "static" === m && (a.style.position = "relative");
            i = k.offset();
            g = d.css(a, "top");
            j = d.css(a,
                "left");
            l = ("absolute" === m || "fixed" === m) && (g + j).indexOf("auto") > -1;
            l ? (e = k.position(), h = e.top, f = e.left) : (h = parseFloat(g) || 0, f = parseFloat(j) || 0);
            d.isFunction(b) && (b = b.call(a, c, d.extend({}, i)));
            null != b.top && (o.top = b.top - i.top + h);
            null != b.left && (o.left = b.left - i.left + f);
            "using" in b ? b.using.call(a, o) : k.css(o)
        }
    };
    d.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                d.offset.setOffset(this, a, b)
            });
            var b, c, e = this[0],
                f = {
                    top: 0,
                    left: 0
                },
                g = e && e.ownerDocument;
            if (g) return b =
                g.documentElement, d.contains(b, e) ? (f = e.getBoundingClientRect(), c = d.isWindow(g) ? g : 9 === g.nodeType && g.defaultView, {
                    top: f.top + c.pageYOffset - b.clientTop,
                    left: f.left + c.pageXOffset - b.clientLeft
                }) : f
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    e = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === d.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), d.nodeName(a[0], "html") || (e = a.offset()), e.top += d.css(a[0], "borderTopWidth", true), e.left += d.css(a[0], "borderLeftWidth", true)), {
                    top: b.top - e.top -
                        d.css(c, "marginTop", true),
                    left: b.left - e.left - d.css(c, "marginLeft", true)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent; a && "static" === d.css(a, "position");) a = a.offsetParent;
                return a || na
            })
        }
    });
    d.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        d.fn[a] = function(e) {
            return F(this, function(a, e, h) {
                var i = d.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
                return void 0 === h ? i ? i[b] : a[e] : void(i ? i.scrollTo(c ? i.pageXOffset : h, c ? h : i.pageYOffset) :
                    a[e] = h)
            }, a, e, arguments.length)
        }
    });
    d.each(["top", "left"], function(a, b) {
        d.cssHooks[b] = Ga(t.pixelPosition, function(a, e) {
            return e ? (e = S(a, b), Fa.test(e) ? d(a).position()[b] + "px" : e) : void 0
        })
    });
    d.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        d.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, e) {
            d.fn[e] = function(e, g) {
                var h = arguments.length && (c || "boolean" != typeof e),
                    i = c || (e === true || g === true ? "margin" : "border");
                return F(this, function(b, c, e) {
                    var f;
                    return d.isWindow(b) ? b.document.documentElement["client" +
                        a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? d.css(b, c, i) : d.style(b, c, e, i)
                }, b, h ? e : void 0, h, null)
            }
        })
    });
    d.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        size: function() {
            return this.length
        }
    });
    d.fn.andSelf =
        d.fn.addBack;
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return d
    });
    var wc = r.jQuery,
        xc = r.$;
    return d.noConflict = function(a) {
        return r.$ === d && (r.$ = xc), a && r.jQuery === d && (r.jQuery = wc), d
    }, ga || (r.jQuery = r.$ = d), d
});