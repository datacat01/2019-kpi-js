/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e, t) {
    var n, r, i = typeof t,
        o = e.location,
        a = e.document,
        s = a.documentElement,
        l = e.jQuery,
        u = e.$,
        c = {},
        p = [],
        f = "1.10.2",
        d = p.concat,
        h = p.push,
        g = p.slice,
        m = p.indexOf,
        y = c.toString,
        v = c.hasOwnProperty,
        b = f.trim,
        x = function(e, t) {
            return new x.fn.init(e, t, r)
        },
        w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = /\S+/g,
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        E = /^[\],:{}\s]*$/,
        S = /(?:^|:|,)(?:\s*\[)+/g,
        A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        D = /^-ms-/,
        L = /-([\da-z])/gi,
        H = function(e, t) {
            return t.toUpperCase()
        },
        q = function(e) {
            (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
        },
        _ = function() {
            a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
        };
    x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n))
                        for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = a.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = a, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return g.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return x.each(this, e, t)
        },
        ready: function(e) {
            return x.ready.promise().done(e), this
        },
        slice: function() {
            return this.pushStack(g.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(x.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: h,
        sort: [].sort,
        splice: [].splice
    }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
            l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)
            if (null != (o = arguments[l]))
                for (i in o) e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? x.readyWait++ : x.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--x.readyWait : !x.isReady) {
                if (!a.body) return setTimeout(x.ready);
                x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === x.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === x.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
            try {
                if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (r) {
                return !1
            }
            if (x.support.ownLast)
                for (n in e) return v.call(e, n);
            for (n in e);
            return n === t || v.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || a;
            var r = k.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(t) {
            t && x.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(D, "ms-").replace(L, H)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++)
                        if (r = t.apply(e[i], n), r === !1) break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n), r === !1) break
            } else if (a) {
                for (; o > i; i++)
                    if (r = t.call(e[i], i, e[i]), r === !1) break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]), r === !1) break;
            return e
        },
        trim: b && !b.call("\ufeff\u00a0") ? function(e) {
            return null == e ? "" : b.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(C, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (m) return m.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r)
                for (; r > o; o++) e[i++] = n[o];
            else
                while (n[o] !== t) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e),
                s = [];
            if (a)
                for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
            else
                for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
            return d.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(g.call(arguments)))
            }, i.guid = e.guid = e.guid || x.guid++, i) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var l = 0,
                u = e.length,
                c = null == r;
            if ("object" === x.type(r)) {
                o = !0;
                for (l in r) x.access(e, n, l, r[l], !0, a, s)
            } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                    return c.call(x(e), n)
                })), n))
                for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), x.ready.promise = function(t) {
        if (!n)
            if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready);
            else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);
        else {
            a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
            var r = !1;
            try {
                r = null == e.frameElement && a.documentElement
            } catch (i) {}
            r && r.doScroll && function o() {
                if (!x.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    _(), x.ready()
                }
            }()
        }
        return n.promise(t)
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });

    function M(e) {
        var t = e.length,
            n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = x(a),
        function(e, t) {
            var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date,
                w = e.document,
                T = 0,
                C = 0,
                N = st(),
                k = st(),
                E = st(),
                S = !1,
                A = function(e, t) {
                    return e === t ? (S = !0, 0) : 0
                },
                j = typeof t,
                D = 1 << 31,
                L = {}.hasOwnProperty,
                H = [],
                q = H.pop,
                _ = H.push,
                M = H.push,
                O = H.slice,
                F = H.indexOf || function(e) {
                    var t = 0,
                        n = this.length;
                    for (; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                P = "[\\x20\\t\\r\\n\\f]",
                R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                W = R.replace("w", "w#"),
                $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
                I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
                z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                X = RegExp("^" + P + "*," + P + "*"),
                U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                V = RegExp(P + "*[+~]"),
                Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
                J = RegExp(I),
                G = RegExp("^" + W + "$"),
                Q = {
                    ID: RegExp("^#(" + R + ")"),
                    CLASS: RegExp("^\\.(" + R + ")"),
                    TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + $),
                    PSEUDO: RegExp("^" + I),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + B + ")$", "i"),
                    needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
                },
                K = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                et = /^(?:input|select|textarea|button)$/i,
                tt = /^h\d$/i,
                nt = /'|\\/g,
                rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
                it = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
                };
            try {
                M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
            } catch (ot) {
                M = {
                    apply: H.length ? function(e, t) {
                        _.apply(e, O.call(t))
                    } : function(e, t) {
                        var n = e.length,
                            r = 0;
                        while (e[n++] = t[r++]);
                        e.length = n - 1
                    }
                }
            }

            function at(e, t, n, i) {
                var o, a, s, l, u, c, d, m, y, x;
                if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (l = t.nodeType) && 9 !== l) return [];
                if (h && !i) {
                    if (o = Z.exec(e))
                        if (s = o[1]) {
                            if (9 === l) {
                                if (a = t.getElementById(s), !a || !a.parentNode) return n;
                                if (a.id === s) return n.push(a), n
                            } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n
                        } else {
                            if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
                            if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n
                        } if (r.qsa && (!g || !g.test(e))) {
                        if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                            c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
                            while (u--) c[u] = m + yt(c[u]);
                            y = V.test(e) && t.parentNode || t, x = c.join(",")
                        }
                        if (x) try {
                            return M.apply(n, y.querySelectorAll(x)), n
                        } catch (T) {} finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
                return kt(e.replace(z, "$1"), t, n, i)
            }

            function st() {
                var e = [];

                function t(n, r) {
                    return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
                }
                return t
            }

            function lt(e) {
                return e[b] = !0, e
            }

            function ut(e) {
                var t = f.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function ct(e, t) {
                var n = e.split("|"),
                    r = e.length;
                while (r--) o.attrHandle[n[r]] = t
            }

            function pt(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
                if (r) return r;
                if (n)
                    while (n = n.nextSibling)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function ft(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function dt(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function ht(e) {
                return lt(function(t) {
                    return t = +t, lt(function(n, r) {
                        var i, o = e([], n.length, t),
                            a = o.length;
                        while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }
            s = at.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, r = at.support = {}, p = at.setDocument = function(e) {
                var n = e ? e.ownerDocument || e : w,
                    i = n.defaultView;
                return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                    p()
                }), r.attributes = ut(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), r.getElementsByTagName = ut(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), r.getElementsByClassName = ut(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), r.getById = ut(function(e) {
                    return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
                }), r.getById ? (o.find.ID = function(e, t) {
                    if (typeof t.getElementById !== j && h) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, o.filter.ID = function(e) {
                    var t = e.replace(rt, it);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete o.find.ID, o.filter.ID = function(e) {
                    var t = e.replace(rt, it);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), o.find.TAG = r.getElementsByTagName ? function(e, n) {
                    return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, o.find.CLASS = r.getElementsByClassName && function(e, n) {
                    return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
                }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
                }), ut(function(e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(e) {
                    r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
                }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, A = d.compareDocumentPosition ? function(e, t) {
                    if (e === t) return S = !0, 0;
                    var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                    return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function(e, t) {
                    var r, i = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        s = [e],
                        l = [t];
                    if (e === t) return S = !0, 0;
                    if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
                    if (o === a) return pt(e, t);
                    r = e;
                    while (r = r.parentNode) s.unshift(r);
                    r = t;
                    while (r = r.parentNode) l.unshift(r);
                    while (s[i] === l[i]) i++;
                    return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
                }, n) : f
            }, at.matches = function(e, t) {
                return at(e, null, null, t)
            }, at.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
                    var n = y.call(e, t);
                    if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (i) {}
                return at(t, f, null, [e]).length > 0
            }, at.contains = function(e, t) {
                return (e.ownerDocument || e) !== f && p(e), v(e, t)
            }, at.attr = function(e, n) {
                (e.ownerDocument || e) !== f && p(e);
                var i = o.attrHandle[n.toLowerCase()],
                    a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
                return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
            }, at.error = function(e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }, at.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
                    while (t = e[o++]) t === e[o] && (i = n.push(o));
                    while (i--) e.splice(n[i], 1)
                }
                return e
            }, a = at.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += a(t);
                return n
            }, o = at.selectors = {
                cacheLength: 50,
                createPseudo: lt,
                match: Q,
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
                        return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var n, r = !e[5] && e[2];
                        return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(rt, it).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = N[e + " "];
                        return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = at.attr(r, e);
                            return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                y = s && t.nodeName.toLowerCase(),
                                v = !l && !s;
                            if (m) {
                                if (o) {
                                    while (g) {
                                        p = t;
                                        while (p = p[g])
                                            if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                    c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                        if (1 === p.nodeType && ++f && p === t) {
                                            c[e] = [T, d, f];
                                            break
                                        }
                                } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];
                                else
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                        if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break;
                                return f -= i, f === r || 0 === f % r && f / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                        return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function(e, n) {
                            var i, o = r(e, t),
                                a = o.length;
                            while (a--) i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: lt(function(e) {
                        var t = [],
                            n = [],
                            r = l(e.replace(z, "$1"));
                        return r[b] ? lt(function(e, t, n, i) {
                            var o, a = r(e, null, i, []),
                                s = e.length;
                            while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: lt(function(e) {
                        return function(t) {
                            return at(e, t).length > 0
                        }
                    }),
                    contains: lt(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                        }
                    }),
                    lang: lt(function(e) {
                        return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === d
                    },
                    focus: function(e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !o.pseudos.empty(e)
                    },
                    header: function(e) {
                        return tt.test(e.nodeName)
                    },
                    input: function(e) {
                        return et.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: ht(function() {
                        return [0]
                    }),
                    last: ht(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ht(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: ht(function(e, t) {
                        var n = 0;
                        for (; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: ht(function(e, t) {
                        var n = 1;
                        for (; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: ht(function(e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for (; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: ht(function(e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for (; t > ++r;) e.push(r);
                        return e
                    })
                }
            }, o.pseudos.nth = o.pseudos.eq;
            for (n in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) o.pseudos[n] = ft(n);
            for (n in {
                    submit: !0,
                    reset: !0
                }) o.pseudos[n] = dt(n);

            function gt() {}
            gt.prototype = o.filters = o.pseudos, o.setFilters = new gt;

            function mt(e, t) {
                var n, r, i, a, s, l, u, c = k[e + " "];
                if (c) return t ? 0 : c.slice(0);
                s = e, l = [], u = o.preFilter;
                while (s) {
                    (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(z, " ")
                    }), s = s.slice(n.length));
                    for (a in o.filter) !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
                        value: n,
                        type: a,
                        matches: r
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
            }

            function yt(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; n > t; t++) r += e[t].value;
                return r
            }

            function vt(e, t, n) {
                var r = t.dir,
                    o = n && "parentNode" === r,
                    a = C++;
                return t.first ? function(t, n, i) {
                    while (t = t[r])
                        if (1 === t.nodeType || o) return e(t, n, i)
                } : function(t, n, s) {
                    var l, u, c, p = T + " " + a;
                    if (s) {
                        while (t = t[r])
                            if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                    } else
                        while (t = t[r])
                            if (1 === t.nodeType || o)
                                if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
                                    if ((l = u[1]) === !0 || l === i) return l === !0
                                } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0
                }
            }

            function bt(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while (i--)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function xt(e, t, n, r, i) {
                var o, a = [],
                    s = 0,
                    l = e.length,
                    u = null != t;
                for (; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
                return a
            }

            function wt(e, t, n, r, i, o) {
                return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function(o, a, s, l) {
                    var u, c, p, f = [],
                        d = [],
                        h = a.length,
                        g = o || Nt(t || "*", s.nodeType ? [s] : s, []),
                        m = !e || !o && t ? g : xt(g, f, e, s, l),
                        y = n ? i || (o ? e : h || r) ? [] : a : m;
                    if (n && n(m, y, s, l), r) {
                        u = xt(y, d), r(u, [], s, l), c = u.length;
                        while (c--)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                    }
                    if (o) {
                        if (i || e) {
                            if (i) {
                                u = [], c = y.length;
                                while (c--)(p = y[c]) && u.push(m[c] = p);
                                i(null, y = [], u, l)
                            }
                            c = y.length;
                            while (c--)(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                        }
                    } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
                })
            }

            function Tt(e) {
                var t, n, r, i = e.length,
                    a = o.relative[e[0].type],
                    s = a || o.relative[" "],
                    l = a ? 1 : 0,
                    c = vt(function(e) {
                        return e === t
                    }, s, !0),
                    p = vt(function(e) {
                        return F.call(t, e) > -1
                    }, s, !0),
                    f = [function(e, n, r) {
                        return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                    }];
                for (; i > l; l++)
                    if (n = o.relative[e[l].type]) f = [vt(bt(f), n)];
                    else {
                        if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
                            for (r = ++l; i > r; r++)
                                if (o.relative[e[r].type]) break;
                            return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({
                                value: " " === e[l - 2].type ? "*" : ""
                            })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
                        }
                        f.push(n)
                    } return bt(f)
            }

            function Ct(e, t) {
                var n = 0,
                    r = t.length > 0,
                    a = e.length > 0,
                    s = function(s, l, c, p, d) {
                        var h, g, m, y = [],
                            v = 0,
                            b = "0",
                            x = s && [],
                            w = null != d,
                            C = u,
                            N = s || a && o.find.TAG("*", d && l.parentNode || l),
                            k = T += null == C ? 1 : Math.random() || .1;
                        for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
                            if (a && h) {
                                g = 0;
                                while (m = e[g++])
                                    if (m(h, l, c)) {
                                        p.push(h);
                                        break
                                    } w && (T = k, i = ++n)
                            }
                            r && ((h = !m && h) && v--, s && x.push(h))
                        }
                        if (v += b, r && b !== v) {
                            g = 0;
                            while (m = t[g++]) m(x, y, l, c);
                            if (s) {
                                if (v > 0)
                                    while (b--) x[b] || y[b] || (y[b] = q.call(p));
                                y = xt(y)
                            }
                            M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                        }
                        return w && (T = k, u = C), x
                    };
                return r ? lt(s) : s
            }
            l = at.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = E[e + " "];
                if (!o) {
                    t || (t = mt(e)), n = t.length;
                    while (n--) o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
                    o = E(e, Ct(i, r))
                }
                return o
            };

            function Nt(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; i > r; r++) at(e, t[r], n);
                return n
            }

            function kt(e, t, n, i) {
                var a, s, u, c, p, f = mt(e);
                if (!i && 1 === f.length) {
                    if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                        if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;
                        e = e.slice(s.shift().value.length)
                    }
                    a = Q.needsContext.test(e) ? 0 : s.length;
                    while (a--) {
                        if (u = s[a], o.relative[c = u.type]) break;
                        if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                            if (s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n;
                            break
                        }
                    }
                }
                return l(e, f)(i, t, !h, n, V.test(e)), n
            }
            r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function(e) {
                return 1 & e.compareDocumentPosition(f.createElement("div"))
            }), ut(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || ct("type|href|height|width", function(e, n, r) {
                return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
            }), r.attributes && ut(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || ct("value", function(e, n, r) {
                return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
            }), ut(function(e) {
                return null == e.getAttribute("disabled")
            }) || ct(B, function(e, n, r) {
                var i;
                return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
            }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
        }(e);
    var O = {};

    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [],
            u = !e.once && [],
            c = function(t) {
                for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++)
                    if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    } n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
            },
            p = {
                add: function() {
                    if (l) {
                        var t = l.length;
                        (function i(t) {
                            x.each(t, function(t, n) {
                                var r = x.type(n);
                                "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        })(arguments), n ? o = l.length : r && (s = t, c(r))
                    }
                    return this
                },
                remove: function() {
                    return l && x.each(arguments, function(e, t) {
                        var r;
                        while ((r = x.inArray(t, l, r)) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
                    }), this
                },
                has: function(e) {
                    return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], o = 0, this
                },
                disable: function() {
                    return l = u = r = t, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = t, r || p.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, t) {
                    return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return p
    }, x.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", x.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", x.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return x.Deferred(function(n) {
                            x.each(t, function(t, o) {
                                var a = o[0],
                                    s = x.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? x.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, x.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = g.call(arguments),
                r = n.length,
                i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
                o = 1 === i ? e : x.Deferred(),
                a = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                    }
                },
                s, l, u;
            if (r > 1)
                for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
            return i || o.resolveWith(u, n), o.promise()
        }
    }), x.support = function(t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in {
                submit: !0,
                change: !0,
                focusin: !0
            }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t)) break;
        return t.ownLast = "0" !== f, x(function() {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
        }), n = s = l = u = r = o = null, t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;

    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando,
                l = e.nodeType,
                u = l ? x.cache : e,
                c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {
                toJSON: x.noop
            }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
        }
    }

    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? x.cache : e,
                s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    while (i--) delete r[t[i]];
                    if (n ? !I(r) : !x.isEmptyObject(r)) return
                }(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    x.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e)
        },
        data: function(e, t, n) {
            return R(e, t, n)
        },
        removeData: function(e, t) {
            return W(e, t)
        },
        _data: function(e, t, n) {
            return R(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return W(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), x.fn.extend({
        data: function(e, n) {
            var r, i, o = null,
                a = 0,
                s = this[0];
            if (e === t) {
                if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > a; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
                    x._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                x.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                x.data(this, e, n)
            }) : s ? $(s, e, x.data(s, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                x.removeData(this, e)
            })
        }
    });

    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                } catch (o) {}
                x.data(e, n, r)
            } else r = t
        }
        return r
    }

    function I(e) {
        var t;
        for (t in e)
            if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    x.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = x._queueHooks(e, t),
                a = function() {
                    x.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return x._data(e, n) || x._data(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    x._removeData(e, t + "queue"), x._removeData(e, n)
                })
            })
        }
    }), x.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                o = x.Deferred(),
                a = this,
                s = this.length,
                l = function() {
                    --i || o.resolveWith(a, [a])
                };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--) r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var z, X, U = /[\t\r\n\f]/g,
        V = /\r/g,
        Y = /^(?:input|select|textarea|button|object)$/i,
        J = /^(?:a|area)$/i,
        G = /^(?:checked|selected)$/i,
        Q = x.support.getSetAttribute,
        K = x.support.input;
    x.fn.extend({
        attr: function(e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = x.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).addClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                        o = 0;
                        while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = x.trim(r)
                    } return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).removeClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                        o = 0;
                        while (i = t[o++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? x.trim(r) : ""
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) {
                    var t, r = 0,
                        o = x(this),
                        a = e.match(T) || [];
                    while (t = a[r++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = x.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
            }
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        o = "select-one" === e.type || 0 > i,
                        a = o ? null : [],
                        s = o ? i + 1 : r.length,
                        l = 0 > i ? s : o ? i : 0;
                    for (; s > l; l++)
                        if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(), o) return t;
                            a.push(t)
                        } return a
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = x.makeArray(t),
                        a = i.length;
                    while (a--) r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function(e, n, r) {
            var o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(T);
            if (o && 1 === e.nodeType)
                while (n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), X = {
        set: function(e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
            var o = x.expr.attrHandle[n],
                a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o, a
        } : function(e, n, r) {
            return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), K && Q || (x.attrHooks.value = {
        set: function(e, n, r) {
            return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
        }
    }), Q || (z = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, x.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: z.set
    }, x.attrHooks.contenteditable = {
        set: function(e, t, n) {
            z.set(e, "" === t ? !1 : t, n)
        }
    }, x.each(["width", "height"], function(e, n) {
        x.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        }
    })), x.support.hrefNormalized || x.each(["href", "src"], function(e, t) {
        x.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), x.support.style || (x.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), x.support.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            set: function(e, n) {
                return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
            }
        }, x.support.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() {
        return !0
    }

    function ot() {
        return !1
    }

    function at() {
        try {
            return a.activeElement
        } catch (e) {}
    }
    x.event = {
        global: {},
        add: function(e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
                    return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
                }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
                while (u--) s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
                    type: g,
                    origType: y,
                    data: o,
                    handler: r,
                    guid: r.guid,
                    selector: a,
                    needsContext: a && x.expr.match.needsContext.test(a),
                    namespace: m.join(".")
                }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(T) || [""], u = t.length;
                while (u--)
                    if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
                        while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                        l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
                    } else
                        for (d in c) x.event.remove(e, d + t[u], n, r, !0);
                x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var s, l, u, c, p, f, d, h = [i || a],
                g = v.call(n, "type") ? n.type : n,
                m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) h.push(u), f = u;
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
                if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l], f && (i[l] = null), x.event.triggered = g;
                    try {
                        i[g]()
                    } catch (y) {}
                    x.event.triggered = t, f && (i[l] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [],
                l = g.call(arguments),
                u = (x._data(this, "events") || {})[e.type] || [],
                c = x.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u), n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem, a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [],
                l = n.delegateCount,
                u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    } return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }), s
        },
        fix: function(e) {
            if (e[x.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
            while (t--) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
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
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, s = n.button,
                    l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== at() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === at() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                },
                _default: function(e) {
                    return x.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, x.removeEvent = a.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, x.Event = function(e, n) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
    }, x.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), x.support.submitBubbles || (x.event.special.submit = {
        setup: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                    r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), x._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
        }
    }), x.support.changeBubbles || (x.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), x.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
            })), !1) : (x.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
                }), x._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return x.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), x.support.focusinBubbles || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0,
            r = function(e) {
                x.event.simulate(t, e.target, x.event.fix(e), !0)
            };
        x.event.special[t] = {
            setup: function() {
                0 === n++ && a.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && a.removeEventListener(e, r, !0)
            }
        }
    }), x.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
            else if (!i) return this;
            return 1 === o && (s = i, i = function(e) {
                return x().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function() {
                x.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
                x.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? x.event.trigger(e, n, r, !0) : t
        }
    });
    var st = /^.[^:#\[\.,]*$/,
        lt = /^(?:parents|prev(?:Until|All))/,
        ut = x.expr.match.needsContext,
        ct = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    x.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (x.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) x.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function(e) {
            var t, n = x(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (x.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(ft(this, e || [], !1))
        },
        is: function(e) {
            return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    } return this.pushStack(o.length > 1 ? x.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
                r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function pt(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }
    x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return x.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x.dir(e, "parentNode", n)
        },
        next: function(e) {
            return pt(e, "nextSibling")
        },
        prev: function(e) {
            return pt(e, "previousSibling")
        },
        nextAll: function(e) {
            return x.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return x.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x.sibling(e.firstChild)
        },
        contents: function(e) {
            return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
        }
    }, function(e, t) {
        x.fn[e] = function(n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), x.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            var i = [],
                o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });

    function ft(e, t, n) {
        if (x.isFunction(t)) return x.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return x.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (st.test(t)) return x.filter(t, e, n);
            t = x.filter(t, e)
        }
        return x.grep(e, function(e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }

    function dt(e) {
        var t = ht.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gt = / jQuery\d+="(?:null|\d+)"/g,
        mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
        yt = /^\s+/,
        vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        xt = /<tbody/i,
        wt = /<|&#?\w+;/,
        Tt = /<(?:script|style|link)/i,
        Ct = /^(?:checkbox|radio)$/i,
        Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        kt = /^$|\/(?:java|ecma)script/i,
        Et = /^true\/(.*)/,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        At = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        jt = dt(a),
        Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
        text: function(e) {
            return x.access(this, function(e) {
                return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
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
            var n, r = e ? x.filter(e, this) : this,
                i = 0;
            for (; null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && x.cleanData(Ft(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && x.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return x.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = x.map(this, function(e) {
                    return [e.nextSibling, e.parentNode]
                }),
                t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = d.apply([], e);
            var r, i, o, a, s, l, u = 0,
                c = this.length,
                p = this,
                f = c - 1,
                h = e[0],
                g = x.isFunction(h);
            if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function(r) {
                var i = p.eq(r);
                g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
                if (o)
                    for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
                l = r = null
            }
            return this
        }
    });

    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
    }

    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _t(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
    }

    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e),
                a = x._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r])
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }

    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events) x.removeEvent(t, r, i.handle);
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        x.fn[e] = function(e) {
            var n, r = 0,
                i = [],
                o = x(e),
                a = o.length - 1;
            for (; a >= r; r++) n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
            return this.pushStack(i)
        }
    });

    function Ft(e, n) {
        var r, o, a = 0,
            s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)
            for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }

    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }
    x.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) r[a] && Ot(i, r[a]);
            if (t)
                if (n)
                    for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) Mt(i, r[a]);
                else Mt(e, o);
            return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length,
                f = dt(t),
                d = [],
                h = 0;
            for (; p > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);
                    else if (wt.test(o)) {
                s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                while (i--) s = s.lastChild;
                if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
                    o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                    while (i--) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
                }
                x.merge(d, s.childNodes), s.textContent = "";
                while (s.firstChild) s.removeChild(s.firstChild);
                s = f.lastChild
            } else d.push(t.createTextNode(o));
            s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
            while (o = d[h++])
                if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
                    i = 0;
                    while (o = s[i++]) kt.test(o.type || "") && n.push(o)
                } return s = null, f
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0,
                l = x.expando,
                u = x.cache,
                c = x.support.deleteExpando,
                f = x.event.special;
            for (; null != (n = e[s]); s++)
                if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
                    if (a.events)
                        for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                    u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
                }
        },
        _evalUrl: function(e) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), x.fn.extend({
        wrapAll: function(e) {
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return x.isFunction(e) ? this.each(function(t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = x(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = x.isFunction(e);
            return this.each(function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
        It = /opacity\s*=\s*([^)]*)/,
        zt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Ut = /^margin/,
        Vt = RegExp("^(" + w + ")(.*)$", "i"),
        Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
        Jt = RegExp("^([+-])=(" + w + ")", "i"),
        Gt = {
            BODY: "block"
        },
        Qt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Kt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--)
            if (t = en[i] + n, t in e) return t;
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, o = [],
            a = 0,
            s = e.length;
        for (; s > a; a++) r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    x.fn.extend({
        css: function(e, n) {
            return x.access(this, function(e, n, r) {
                var i, o, a = {},
                    s = 0;
                if (x.isArray(n)) {
                    for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = x.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? x.style(e, n, r) : x.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return rn(this, !0)
        },
        hide: function() {
            return rn(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                nn(this) ? x(this).show() : x(this).hide()
            })
        }
    }), x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
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
            "float": x.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n),
                    u = e.style;
                if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    u[n] = r
                } catch (c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, l = x.camelCase(n);
            return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
        }
    }), e.getComputedStyle ? (Rt = function(t) {
        return e.getComputedStyle(t, null)
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            l = s ? s.getPropertyValue(n) || s[n] : t,
            u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : a.documentElement.currentStyle && (Rt = function(e) {
        return e.currentStyle
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            l = s ? s[n] : t,
            u = e.style;
        return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    });

    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            a = 0;
        for (; 4 > o; o += 2) "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }

    function sn(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Rt(e),
            a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
            r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function ln(e) {
        var t = a,
            n = Gt[e];
        return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
    }

    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body),
            r = x.css(n[0], "display");
        return n.remove(), r
    }
    x.each(["height", "width"], function(e, n) {
        x.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), x.support.opacity || (x.cssHooks.opacity = {
        get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }), x(function() {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? x.swap(e, {
                    display: "inline-block"
                }, Wt, [e, "marginRight"]) : t
            }
        }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) {
            x.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
    }, x.expr.filters.visible = function(e) {
        return !x.expr.filters.hidden(e)
    }), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                    i = {},
                    o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g,
        pn = /\[\]$/,
        fn = /\r?\n/g,
        dn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                }
            }).get()
        }
    }), x.param = function(e, n) {
        var r, i = [],
            o = function(e, t) {
                t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (r in e) gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    };

    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t)) x.each(t, function(t, i) {
            n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== x.type(t)) r(e, t);
        else
            for (i in t) gn(e + "[" + i + "]", t[i], n, r)
    }
    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, yn, vn = x.now(),
        bn = /\?/,
        xn = /#.*$/,
        wn = /([?&])_=[^&]*/,
        Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Nn = /^(?:GET|HEAD)$/,
        kn = /^\/\//,
        En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Sn = x.fn.load,
        An = {},
        jn = {},
        Dn = "*/".concat("*");
    try {
        yn = o.href
    } catch (Ln) {
        yn = a.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];

    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n))
                while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, n, r, i) {
        var o = {},
            a = e === jn;

        function s(l) {
            var u;
            return o[l] = !0, x.each(e[l] || [], function(e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), u
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && x.extend(!0, e, r), e
    }
    x.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
        var i, o, a, s = this,
            l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Cn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
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
                "text json": x.parseJSON,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
                h = x.Deferred(),
                g = x.Callbacks("once memory"),
                m = p.statusCode || {},
                y = {},
                v = {},
                b = 0,
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c) {
                                c = {};
                                while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
                            }
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = v[n] = v[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else C.always(e[C.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return u && u.abort(t), k(0, t), this
                    }
                };
            if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C;
            l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) C.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();
            w = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) C[i](p[i]);
            if (u = qn(jn, p, n, C)) {
                C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, u.send(y, k)
                } catch (N) {
                    if (!(2 > b)) throw N;
                    k(-1, N)
                }
            } else k(-1, "No Transport");

            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return x.get(e, t, n, "script")
        }
    }), x.each(["get", "post"], function(e, n) {
        x[n] = function(e, r, i, o) {
            return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    });

    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in l)
                if (l[s] && l[s].test(o)) {
                    u.unshift(s);
                    break
                } if (u[0] in r) a = u[0];
        else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }

    function On(e, t, n, r) {
        var i, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)
                for (i in u)
                    if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    } if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (p) {
                    return {
                        state: "parsererror",
                        error: a ? p : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), x.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function(t, i) {
                    n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Fn = [],
        Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Fn.pop() || x.expando + "_" + vn++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || x.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0,
        $n = e.ActiveXObject && function() {
            var e;
            for (e in Pn) Pn[e](t, !0)
        };

    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    x.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && In() || zn()
    } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function(n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) l.setRequestHeader(s, i[s])
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState))
                                if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort();
                                else {
                                    p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                    try {
                                        c = l.statusText
                                    } catch (f) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, u)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
        Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/,
        Gn = [nr],
        Qn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Yn.exec(t),
                    o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
                    a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };

    function Kn() {
        return setTimeout(function() {
            Xn = t
        }), Xn = x.now()
    }

    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]),
            o = 0,
            a = i.length;
        for (; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function er(e, t, n) {
        var r, i, o = 0,
            a = Gn.length,
            s = x.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                var t = Xn || Kn(),
                    n = Math.max(0, u.startTime + u.duration - t),
                    r = n / u.duration || 0,
                    o = 1 - r,
                    a = 0,
                    l = u.tweens.length;
                for (; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Kn(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++)
            if (r = Gn[o].call(u, e, c, u.opts)) return r;
        return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }
    x.Animation = x.extend(er, {
        tweener: function(e, t) {
            x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });

    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this,
            c = {},
            p = e.style,
            f = e.nodeType && nn(e),
            d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, u.always(function() {
            u.always(function() {
                s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], Vn.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
                c[r] = d && d[r] || x.style(e, r)
            } if (!x.isEmptyObject(c)) {
            d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function() {
                x(e).hide()
            }), u.done(function() {
                var t;
                x._removeData(e, "fxshow");
                for (t in c) x.style(e, t, c[t])
            });
            for (r in c) a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }
    x.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.each(["toggle", "show", "hide"], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), x.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e),
                o = x.speed(t, n, r),
                a = function() {
                    var t = er(this, x.extend({}, e), o);
                    (i || x._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = x.timers,
                    a = x._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && x.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = x._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = x.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });

    function ir(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    x.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
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
        x.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
        }, r
    }, x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function() {
        var e, n = x.timers,
            r = 0;
        for (Xn = x.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || x.fx.stop(), Xn = t
    }, x.fx.timer = function(e) {
        e() && x.timers.push(e) && x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function() {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval))
    }, x.fx.stop = function() {
        clearInterval(Un), Un = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
        return x.grep(x.timers, function(t) {
            return e === t.elem
        }).length
    }), x.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            x.offset.setOffset(this, e, t)
        });
        var n, r, o = {
                top: 0,
                left: 0
            },
            a = this[0],
            s = a && a.ownerDocument;
        if (s) return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
            top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o
    }, x.offset = {
        setOffset: function(e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x(e),
                o = i.offset(),
                a = x.css(e, "top"),
                s = x.css(e, "left"),
                l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
                u = {},
                c = {},
                p, f;
            l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
        }
    }, x.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - x.css(r, "marginTop", !0),
                    left: t.left - n.left - x.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || s;
                while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent;
                return e || s
            })
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function(i) {
            return x.access(this, function(e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    });

    function or(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    x.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        x.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            x.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function(n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), x.fn.size = function() {
        return this.length
    }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    }))
})(window);; /**/
/* Source and licensing information for the line(s) below can be found at https://www.prestashop.com/misc/jquery.once.js. */
(function($) {
    var cache = {},
        uuid = 0;
    $.fn.once = function(id, fn) {
        if (typeof id != 'string') {
            if (!(id in cache)) cache[id] = ++uuid;
            if (!fn) fn = id;
            id = 'jquery-once-' + cache[id]
        };
        var name = id + '-processed',
            elements = this.not('.' + name).addClass(name);
        return $.isFunction(fn) ? elements.each(fn) : elements
    };
    $.fn.removeOnce = function(id, fn) {
        var name = id + '-processed',
            elements = this.filter('.' + name).removeClass(name);
        return $.isFunction(fn) ? elements.each(fn) : elements
    }
})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.prestashop.com/misc/jquery.once.js. */
/* Source and licensing information for the line(s) below can be found at https://www.prestashop.com/misc/drupal.js. */
var Drupal = Drupal || {
    settings: {},
    behaviors: {},
    locale: {}
};
jQuery.noConflict();
(function($) {
    var jquery_init = $.fn.init;
    $.fn.init = function(selector, context, rootjQuery) {
        if (selector && typeof selector === 'string') {
            var hash_position = selector.indexOf('#');
            if (hash_position >= 0) {
                var bracket_position = selector.indexOf('<');
                if (bracket_position > hash_position) throw 'Syntax error, unrecognized expression: ' + selector
            }
        };
        return jquery_init.call(this, selector, context, rootjQuery)
    };
    $.fn.init.prototype = jquery_init.prototype;
    if ($.ajaxPrefilter) {
        $.ajaxPrefilter(function(s) {
            if (s.crossDomain) s.contents.script = false
        })
    } else if ($.httpData) {
        var jquery_httpData = $.httpData;
        $.httpData = function(xhr, type, s) {
            if (!type && !Drupal.urlIsLocal(s.url)) {
                var content_type = xhr.getResponseHeader('content-type') || '';
                if (content_type.indexOf('javascript') >= 0) type = 'text'
            };
            return jquery_httpData.call(this, xhr, type, s)
        };
        $.httpData.prototype = jquery_httpData.prototype
    };
    Drupal.attachBehaviors = function(context, settings) {
        context = context || document;
        settings = settings || Drupal.settings;
        $.each(Drupal.behaviors, function() {
            if ($.isFunction(this.attach)) this.attach(context, settings)
        })
    };
    Drupal.detachBehaviors = function(context, settings, trigger) {
        context = context || document;
        settings = settings || Drupal.settings;
        trigger = trigger || 'unload';
        $.each(Drupal.behaviors, function() {
            if ($.isFunction(this.detach)) this.detach(context, settings, trigger)
        })
    };
    Drupal.checkPlain = function(str) {
        var character, regex, replace = {
            '&': '&amp;',
            "'": '&#39;',
            '"': '&quot;',
            '<': '&lt;',
            '>': '&gt;'
        };
        str = String(str);
        for (character in replace)
            if (replace.hasOwnProperty(character)) {
                regex = new RegExp(character, 'g');
                str = str.replace(regex, replace[character])
            };
        return str
    };
    Drupal.formatString = function(str, args) {
        for (var key in args)
            if (args.hasOwnProperty(key)) switch (key.charAt(0)) {
                case '@':
                    args[key] = Drupal.checkPlain(args[key]);
                    break;
                case '!':
                    break;
                default:
                    args[key] = Drupal.theme('placeholder', args[key]);
                    break
            };
        return Drupal.stringReplace(str, args, null)
    };
    Drupal.stringReplace = function(str, args, keys) {
        if (str.length === 0) return str;
        if (!$.isArray(keys)) {
            keys = [];
            for (var k in args)
                if (args.hasOwnProperty(k)) keys.push(k);
            keys.sort(function(a, b) {
                return a.length - b.length
            })
        };
        if (keys.length === 0) return str;
        var key = keys.pop(),
            fragments = str.split(key);
        if (keys.length)
            for (var i = 0; i < fragments.length; i++) fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
        return fragments.join(args[key])
    };
    Drupal.t = function(str, args, options) {
        options = options || {};
        options.context = options.context || '';
        if (Drupal.locale.strings && Drupal.locale.strings[options.context] && Drupal.locale.strings[options.context][str]) str = Drupal.locale.strings[options.context][str];
        if (args) str = Drupal.formatString(str, args);
        return str
    };
    Drupal.formatPlural = function(count, singular, plural, args, options) {
        args = args || {};
        args['@count'] = count;
        var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);
        if (index == 0) {
            return Drupal.t(singular, args, options)
        } else if (index == 1) {
            return Drupal.t(plural, args, options)
        } else {
            args['@count[' + index + ']'] = args['@count'];
            delete args['@count'];
            return Drupal.t(plural.replace('@count', '@count[' + index + ']'), args, options)
        }
    };
    Drupal.absoluteUrl = function(url) {
        var urlParsingNode = document.createElement('a');
        try {
            url = decodeURIComponent(url)
        } catch (e) {};
        urlParsingNode.setAttribute('href', url);
        return urlParsingNode.cloneNode(false).href
    };
    Drupal.urlIsLocal = function(url) {
        var absoluteUrl = Drupal.absoluteUrl(url),
            protocol = location.protocol;
        if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) protocol = 'https:';
        var baseUrl = protocol + '//' + location.host + Drupal.settings.basePath.slice(0, -1);
        try {
            absoluteUrl = decodeURIComponent(absoluteUrl)
        } catch (e) {};
        try {
            baseUrl = decodeURIComponent(baseUrl)
        } catch (e) {};
        return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0
    };
    Drupal.theme = function(func) {
        var args = Array.prototype.slice.apply(arguments, [1]);
        return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args)
    };
    Drupal.freezeHeight = function() {
        Drupal.unfreezeHeight();
        $('<div id="freeze-height"></div>').css({
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '1px',
            height: $('body').css('height')
        }).appendTo('body')
    };
    Drupal.unfreezeHeight = function() {
        $('#freeze-height').remove()
    };
    Drupal.encodePath = function(item, uri) {
        uri = uri || location.href;
        return encodeURIComponent(item).replace(/%2F/g, '/')
    };
    Drupal.getSelection = function(element) {
        if (typeof element.selectionStart != 'number' && document.selection) {
            var range1 = document.selection.createRange(),
                range2 = range1.duplicate();
            range2.moveToElementText(element);
            range2.setEndPoint('EndToEnd', range1);
            var start = range2.text.length - range1.text.length,
                end = start + range1.text.length;
            return {
                start: start,
                end: end
            }
        };
        return {
            start: element.selectionStart,
            end: element.selectionEnd
        }
    };
    Drupal.beforeUnloadCalled = false;
    $(window).bind('beforeunload pagehide', function() {
        Drupal.beforeUnloadCalled = true
    });
    Drupal.displayAjaxError = function(message) {
        if (!Drupal.beforeUnloadCalled) alert(message)
    };
    Drupal.ajaxError = function(xmlhttp, uri, customMessage) {
        var statusCode, statusText, pathText, responseText, readyStateText, message;
        if (xmlhttp.status) {
            statusCode = "\n" + Drupal.t("An AJAX HTTP error occurred.") + "\n" + Drupal.t("HTTP Result Code: !status", {
                '!status': xmlhttp.status
            })
        } else statusCode = "\n" + Drupal.t("An AJAX HTTP request terminated abnormally.");
        statusCode += "\n" + Drupal.t("Debugging information follows.");
        pathText = "\n" + Drupal.t("Path: !uri", {
            '!uri': uri
        });
        statusText = '';
        try {
            statusText = "\n" + Drupal.t("StatusText: !statusText", {
                '!statusText': $.trim(xmlhttp.statusText)
            })
        } catch (e) {};
        responseText = '';
        try {
            responseText = "\n" + Drupal.t("ResponseText: !responseText", {
                '!responseText': $.trim(xmlhttp.responseText)
            })
        } catch (e) {};
        responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, "");
        responseText = responseText.replace(/[\n]+\s+/g, "\n");
        readyStateText = xmlhttp.status == 0 ? ("\n" + Drupal.t("ReadyState: !readyState", {
            '!readyState': xmlhttp.readyState
        })) : "";
        customMessage = customMessage ? ("\n" + Drupal.t("CustomMessage: !customMessage", {
            '!customMessage': customMessage
        })) : "";
        message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;
        return message
    };
    $('html').addClass('js');
    document.cookie = 'has_js=1; path=/';
    $(function() {
        if (jQuery.support.positionFixed === undefined) {
            var el = $('<div style="position:fixed; top:10px" />').appendTo(document.body);
            jQuery.support.positionFixed = el[0].offsetTop === 10;
            el.remove()
        }
    });
    $(function() {
        Drupal.attachBehaviors(document, Drupal.settings)
    });
    Drupal.theme.prototype = {
        placeholder: function(str) {
            return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>'
        }
    }
})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.prestashop.com/misc/drupal.js. */
/*! jQuery UI - v1.10.2 - 2013-03-14
 * http://jqueryui.com
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e, t) {
    function i(t, i) {
        var a, n, r, o = t.nodeName.toLowerCase();
        return "area" === o ? (a = t.parentNode, n = a.name, t.href && n && "map" === a.nodeName.toLowerCase() ? (r = e("img[usemap=#" + n + "]")[0], !!r && s(r)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && s(t)
    }

    function s(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    var a = 0,
        n = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.10.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        focus: function(t) {
            return function(i, s) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), s && s.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        scrollParent: function() {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(i) {
            if (i !== t) return this.css("zIndex", i);
            if (this.length)
                for (var s, a, n = e(this[0]); n.length && n[0] !== document;) {
                    if (s = n.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (a = parseInt(n.css("zIndex"), 10), !isNaN(a) && 0 !== a)) return a;
                    n = n.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++a)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                n.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t)
            }
        }) : function(t, i, s) {
            return !!e.data(t, s[3])
        },
        focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var s = e.attr(t, "tabindex"),
                a = isNaN(s);
            return (a || s >= 0) && i(t, !a)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(i, s) {
        function a(t, i, s, a) {
            return e.each(n, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }
        var n = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
            r = s.toLowerCase(),
            o = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + s] = function(i) {
            return i === t ? o["inner" + s].call(this) : this.each(function() {
                e(this).css(r, a(this, i) + "px")
            })
        }, e.fn["outer" + s] = function(t, i) {
            return "number" != typeof t ? o["outer" + s].call(this, t) : this.each(function() {
                e(this).css(r, a(this, t, !0, i) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function(t, i, s) {
                var a, n = e.ui[t].prototype;
                for (a in s) n.plugins[a] = n.plugins[a] || [], n.plugins[a].push([i, s[a]])
            },
            call: function(e, t, i) {
                var s, a = e.plugins[t];
                if (a && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
                    for (s = 0; a.length > s; s++) e.options[a[s][0]] && a[s][1].apply(e.element, i)
            }
        },
        hasScroll: function(t, i) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                a = !1;
            return t[s] > 0 ? !0 : (t[s] = 1, a = t[s] > 0, t[s] = 0, a)
        }
    })
})(jQuery);; /**/
/*! jQuery UI - v1.10.2 - 2013-03-14
 * http://jqueryui.com
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e, t) {
    var i = 0,
        s = Array.prototype.slice,
        n = e.cleanData;
    e.cleanData = function(t) {
        for (var i, s = 0; null != (i = t[s]); s++) try {
            e(i).triggerHandler("remove")
        } catch (a) {}
        n(t)
    }, e.widget = function(i, s, n) {
        var a, r, o, h, l = {},
            u = i.split(".")[0];
        i = i.split(".")[1], a = u + "-" + i, n || (n = s, s = e.Widget), e.expr[":"][a.toLowerCase()] = function(t) {
            return !!e.data(t, a)
        }, e[u] = e[u] || {}, r = e[u][i], o = e[u][i] = function(e, i) {
            return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new o(e, i)
        }, e.extend(o, r, {
            version: n.version,
            _proto: e.extend({}, n),
            _childConstructors: []
        }), h = new s, h.options = e.widget.extend({}, h.options), e.each(n, function(i, n) {
            return e.isFunction(n) ? (l[i] = function() {
                var e = function() {
                        return s.prototype[i].apply(this, arguments)
                    },
                    t = function(e) {
                        return s.prototype[i].apply(this, e)
                    };
                return function() {
                    var i, s = this._super,
                        a = this._superApply;
                    return this._super = e, this._superApply = t, i = n.apply(this, arguments), this._super = s, this._superApply = a, i
                }
            }(), t) : (l[i] = n, t)
        }), o.prototype = e.widget.extend(h, {
            widgetEventPrefix: r ? h.widgetEventPrefix : i
        }, l, {
            constructor: o,
            namespace: u,
            widgetName: i,
            widgetFullName: a
        }), r ? (e.each(r._childConstructors, function(t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete r._childConstructors) : s._childConstructors.push(o), e.widget.bridge(i, o)
    }, e.widget.extend = function(i) {
        for (var n, a, r = s.call(arguments, 1), o = 0, h = r.length; h > o; o++)
            for (n in r[o]) a = r[o][n], r[o].hasOwnProperty(n) && a !== t && (i[n] = e.isPlainObject(a) ? e.isPlainObject(i[n]) ? e.widget.extend({}, i[n], a) : e.widget.extend({}, a) : a);
        return i
    }, e.widget.bridge = function(i, n) {
        var a = n.prototype.widgetFullName || i;
        e.fn[i] = function(r) {
            var o = "string" == typeof r,
                h = s.call(arguments, 1),
                l = this;
            return r = !o && h.length ? e.widget.extend.apply(null, [r].concat(h)) : r, o ? this.each(function() {
                var s, n = e.data(this, a);
                return n ? e.isFunction(n[r]) && "_" !== r.charAt(0) ? (s = n[r].apply(n, h), s !== n && s !== t ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : t) : e.error("no such method '" + r + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + r + "'")
            }) : this.each(function() {
                var t = e.data(this, a);
                t ? t.option(r || {})._init() : e.data(this, a, new n(r, this))
            }), l
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, s) {
            s = e(s || this.defaultElement || this)[0], this.element = e(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), s !== this && (e.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === s && this.destroy()
                }
            }), this.document = e(s.style ? s.ownerDocument : s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(i, s) {
            var n, a, r, o = i;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (o = {}, n = i.split("."), i = n.shift(), n.length) {
                    for (a = o[i] = e.widget.extend({}, this.options[i]), r = 0; n.length - 1 > r; r++) a[n[r]] = a[n[r]] || {}, a = a[n[r]];
                    if (i = n.pop(), s === t) return a[i] === t ? null : a[i];
                    a[i] = s
                } else {
                    if (s === t) return this.options[i] === t ? null : this.options[i];
                    o[i] = s
                } return this._setOptions(o), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(i, s, n) {
            var a, r = this;
            "boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = a = e(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, a = this.widget()), e.each(n, function(n, o) {
                function h() {
                    return i || r.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : t
                }
                "string" != typeof o && (h.guid = o.guid = o.guid || h.guid || e.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/),
                    u = l[1] + r.eventNamespace,
                    c = l[2];
                c ? a.delegate(c, u, h) : s.bind(u, h)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, s) {
            var n, a, r = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                for (n in a) n in i || (i[n] = a[n]);
            return this.element.trigger(i, s), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, i) {
        e.Widget.prototype["_" + t] = function(s, n, a) {
            "string" == typeof n && (n = {
                effect: n
            });
            var r, o = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {}, "number" == typeof n && (n = {
                duration: n
            }), r = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), r && e.effects && e.effects.effect[o] ? s[t](n) : o !== t && s[o] ? s[o](n.duration, n.easing, a) : s.queue(function(i) {
                e(this)[t](), a && a.call(s[0]), i()
            })
        }
    })
})(jQuery);; /**/
/*! jQuery UI - v1.10.2 - 2013-03-14
 * http://jqueryui.com
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t, e) {
    function i(t, e, i) {
        return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
    }

    function s(e, i) {
        return parseInt(t.css(e, i), 10) || 0
    }

    function n(e) {
        var i = e[0];
        return 9 === i.nodeType ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : t.isWindow(i) ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: e.scrollTop(),
                left: e.scrollLeft()
            }
        } : i.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: i.pageY,
                left: i.pageX
            }
        } : {
            width: e.outerWidth(),
            height: e.outerHeight(),
            offset: e.offset()
        }
    }
    t.ui = t.ui || {};
    var a, o = Math.max,
        r = Math.abs,
        h = Math.round,
        l = /left|center|right/,
        c = /top|center|bottom/,
        u = /[\+\-]\d+(\.[\d]+)?%?/,
        d = /^\w+/,
        p = /%$/,
        f = t.fn.position;
    t.position = {
            scrollbarWidth: function() {
                if (a !== e) return a;
                var i, s, n = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    o = n.children()[0];
                return t("body").append(n), i = o.offsetWidth, n.css("overflow", "scroll"), s = o.offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), a = i - s
            },
            getScrollInfo: function(e) {
                var i = e.isWindow ? "" : e.element.css("overflow-x"),
                    s = e.isWindow ? "" : e.element.css("overflow-y"),
                    n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                    a = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
                return {
                    width: a ? t.position.scrollbarWidth() : 0,
                    height: n ? t.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(e) {
                var i = t(e || window),
                    s = t.isWindow(i[0]);
                return {
                    element: i,
                    isWindow: s,
                    offset: i.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: s ? i.width() : i.outerWidth(),
                    height: s ? i.height() : i.outerHeight()
                }
            }
        }, t.fn.position = function(e) {
            if (!e || !e.of) return f.apply(this, arguments);
            e = t.extend({}, e);
            var a, p, m, g, v, _, b = t(e.of),
                y = t.position.getWithinInfo(e.within),
                w = t.position.getScrollInfo(y),
                x = (e.collision || "flip").split(" "),
                k = {};
            return _ = n(b), b[0].preventDefault && (e.at = "left top"), p = _.width, m = _.height, g = _.offset, v = t.extend({}, g), t.each(["my", "at"], function() {
                var t, i, s = (e[this] || "").split(" ");
                1 === s.length && (s = l.test(s[0]) ? s.concat(["center"]) : c.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = l.test(s[0]) ? s[0] : "center", s[1] = c.test(s[1]) ? s[1] : "center", t = u.exec(s[0]), i = u.exec(s[1]), k[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]
            }), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += m : "center" === e.at[1] && (v.top += m / 2), a = i(k.at, p, m), v.left += a[0], v.top += a[1], this.each(function() {
                var n, l, c = t(this),
                    u = c.outerWidth(),
                    d = c.outerHeight(),
                    f = s(this, "marginLeft"),
                    _ = s(this, "marginTop"),
                    D = u + f + s(this, "marginRight") + w.width,
                    T = d + _ + s(this, "marginBottom") + w.height,
                    C = t.extend({}, v),
                    M = i(k.my, c.outerWidth(), c.outerHeight());
                "right" === e.my[0] ? C.left -= u : "center" === e.my[0] && (C.left -= u / 2), "bottom" === e.my[1] ? C.top -= d : "center" === e.my[1] && (C.top -= d / 2), C.left += M[0], C.top += M[1], t.support.offsetFractions || (C.left = h(C.left), C.top = h(C.top)), n = {
                    marginLeft: f,
                    marginTop: _
                }, t.each(["left", "top"], function(i, s) {
                    t.ui.position[x[i]] && t.ui.position[x[i]][s](C, {
                        targetWidth: p,
                        targetHeight: m,
                        elemWidth: u,
                        elemHeight: d,
                        collisionPosition: n,
                        collisionWidth: D,
                        collisionHeight: T,
                        offset: [a[0] + M[0], a[1] + M[1]],
                        my: e.my,
                        at: e.at,
                        within: y,
                        elem: c
                    })
                }), e.using && (l = function(t) {
                    var i = g.left - C.left,
                        s = i + p - u,
                        n = g.top - C.top,
                        a = n + m - d,
                        h = {
                            target: {
                                element: b,
                                left: g.left,
                                top: g.top,
                                width: p,
                                height: m
                            },
                            element: {
                                element: c,
                                left: C.left,
                                top: C.top,
                                width: u,
                                height: d
                            },
                            horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
                            vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"
                        };
                    u > p && p > r(i + s) && (h.horizontal = "center"), d > m && m > r(n + a) && (h.vertical = "middle"), h.important = o(r(i), r(s)) > o(r(n), r(a)) ? "horizontal" : "vertical", e.using.call(this, t, h)
                }), c.offset(t.extend(C, {
                    using: l
                }))
            })
        }, t.ui.position = {
            fit: {
                left: function(t, e) {
                    var i, s = e.within,
                        n = s.isWindow ? s.scrollLeft : s.offset.left,
                        a = s.width,
                        r = t.left - e.collisionPosition.marginLeft,
                        h = n - r,
                        l = r + e.collisionWidth - a - n;
                    e.collisionWidth > a ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - a - n, t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left)
                },
                top: function(t, e) {
                    var i, s = e.within,
                        n = s.isWindow ? s.scrollTop : s.offset.top,
                        a = e.within.height,
                        r = t.top - e.collisionPosition.marginTop,
                        h = n - r,
                        l = r + e.collisionHeight - a - n;
                    e.collisionHeight > a ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - a - n, t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top)
                }
            },
            flip: {
                left: function(t, e) {
                    var i, s, n = e.within,
                        a = n.offset.left + n.scrollLeft,
                        o = n.width,
                        h = n.isWindow ? n.scrollLeft : n.offset.left,
                        l = t.left - e.collisionPosition.marginLeft,
                        c = l - h,
                        u = l + e.collisionWidth - o - h,
                        d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        f = -2 * e.offset[0];
                    0 > c ? (i = t.left + d + p + f + e.collisionWidth - o - a, (0 > i || r(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h, (s > 0 || u > r(s)) && (t.left += d + p + f))
                },
                top: function(t, e) {
                    var i, s, n = e.within,
                        a = n.offset.top + n.scrollTop,
                        o = n.height,
                        h = n.isWindow ? n.scrollTop : n.offset.top,
                        l = t.top - e.collisionPosition.marginTop,
                        c = l - h,
                        u = l + e.collisionHeight - o - h,
                        d = "top" === e.my[1],
                        p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        m = -2 * e.offset[1];
                    0 > c ? (s = t.top + p + f + m + e.collisionHeight - o - a, t.top + p + f + m > c && (0 > s || r(c) > s) && (t.top += p + f + m)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + m - h, t.top + p + f + m > u && (i > 0 || u > r(i)) && (t.top += p + f + m))
                }
            },
            flipfit: {
                left: function() {
                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                }
            }
        },
        function() {
            var e, i, s, n, a, o = document.getElementsByTagName("body")[0],
                r = document.createElement("div");
            e = document.createElement(o ? "div" : "body"), s = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, o && t.extend(s, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (a in s) e.style[a] = s[a];
            e.appendChild(r), i = o || document.documentElement, i.insertBefore(e, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = t(r).offset().left, t.support.offsetFractions = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e)
        }()
})(jQuery);; /**/
/*! jQuery UI - v1.10.2 - 2013-03-14
 * http://jqueryui.com
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t) {
    t.widget("ui.menu", {
        version: "1.10.2",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, t.proxy(function(t) {
                this.options.disabled && t.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item > a": function(t) {
                    t.preventDefault()
                },
                "click .ui-state-disabled > a": function(t) {
                    t.preventDefault()
                },
                "click .ui-menu-item:has(a)": function(e) {
                    var i = t(e.target).closest(".ui-menu-item");
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(e), i.has(".ui-menu").length ? this.expand(e) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(e) {
                    var i = t(e.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    e || this.focus(t, i)
                },
                blur: function(e) {
                    this._delay(function() {
                        t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(e) {
                    t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(e) {
            function i(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var s, n, a, o, r, h = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    h = !1, n = this.previousFilter || "", a = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), a === n ? o = !0 : a = n + a, r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return r.test(t(this).children("a").text())
                    }), s = o && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s, s.length || (a = String.fromCharCode(e.keyCode), r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return r.test(t(this).children("a").text())
                    })), s.length ? (this.focus(e, s), s.length > 1 ? (this.previousFilter = a, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            h && e.preventDefault()
        },
        _activate: function(t) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function() {
            var e, i = this.options.icons.submenu,
                s = this.element.find(this.options.menus);
            s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = t(this),
                    s = e.prev("a"),
                    n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                s.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", s.attr("id"))
            }), e = s.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), e.children(":not(.ui-menu-item)").each(function() {
                var e = t(this);
                /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
            }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            } [this.options.role]
        },
        _setOption: function(t, e) {
            "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e)
        },
        focus: function(t, e) {
            var i, s;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay), i = e.children(".ui-menu"), i.length && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                item: e
            })
        },
        _scrollIntoView: function(e) {
            var i, s, n, a, o, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = e.height(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                item: this.active
            }))
        },
        _startOpening: function(t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(t)
            }, this.delay))
        },
        _open: function(e) {
            var i = t.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s
            }, this.delay)
        },
        _close: function(t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            e && e.length && (this._open(e.parent()), this._delay(function() {
                this.focus(t, e)
            }))
        },
        next: function(t) {
            this._move("next", "first", t)
        },
        previous: function(t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, s)
        },
        nextPage: function(e) {
            var i, s, n;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return i = t(this), 0 > i.offset().top - s - n
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), undefined) : (this.next(e), undefined)
        },
        previousPage: function(e) {
            var i, s, n;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return i = t(this), i.offset().top - s + n > 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())), undefined) : (this.next(e), undefined)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        }
    })
})(jQuery);; /**/
/*! jQuery UI - v1.10.2 - 2013-03-14
 * http://jqueryui.com
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e) {
    var t = 0;
    e.widget("ui.autocomplete", {
        version: "1.10.2",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function() {
            var t, i, s, n = this.element[0].nodeName.toLowerCase(),
                a = "textarea" === n,
                o = "input" === n;
            this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(n) {
                    if (this.element.prop("readOnly")) return t = !0, s = !0, i = !0, undefined;
                    t = !1, s = !1, i = !1;
                    var a = e.ui.keyCode;
                    switch (n.keyCode) {
                        case a.PAGE_UP:
                            t = !0, this._move("previousPage", n);
                            break;
                        case a.PAGE_DOWN:
                            t = !0, this._move("nextPage", n);
                            break;
                        case a.UP:
                            t = !0, this._keyEvent("previous", n);
                            break;
                        case a.DOWN:
                            t = !0, this._keyEvent("next", n);
                            break;
                        case a.ENTER:
                        case a.NUMPAD_ENTER:
                            this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
                            break;
                        case a.TAB:
                            this.menu.active && this.menu.select(n);
                            break;
                        case a.ESCAPE:
                            this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(n)
                    }
                },
                keypress: function(s) {
                    if (t) return t = !1, s.preventDefault(), undefined;
                    if (!i) {
                        var n = e.ui.keyCode;
                        switch (s.keyCode) {
                            case n.PAGE_UP:
                                this._move("previousPage", s);
                                break;
                            case n.PAGE_DOWN:
                                this._move("nextPage", s);
                                break;
                            case n.UP:
                                this._keyEvent("previous", s);
                                break;
                            case n.DOWN:
                                this._keyEvent("next", s)
                        }
                    }
                },
                input: function(e) {
                    return s ? (s = !1, e.preventDefault(), undefined) : (this._searchTimeout(e), undefined)
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function(e) {
                    return this.cancelBlur ? (delete this.cancelBlur, undefined) : (clearTimeout(this.searching), this.close(e), this._change(e), undefined)
                }
            }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                input: e(),
                role: null
            }).hide().data("ui-menu"), this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                        var t = this;
                        this.document.one("mousedown", function(s) {
                            s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close()
                        })
                    })
                },
                menufocus: function(t, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(), this.document.one("mousemove", function() {
                        e(t.target).trigger(t.originalEvent)
                    }), undefined;
                    var s = i.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", t, {
                        item: s
                    }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
                },
                menuselect: function(e, t) {
                    var i = t.item.data("ui-autocomplete-item"),
                        s = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function() {
                        this.previous = s, this.selectedItem = i
                    })), !1 !== this._trigger("select", e, {
                        item: i
                    }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
                }
            }), this.liveRegion = e("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertAfter(this.element), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(e, t) {
            this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
        },
        _initSource: function() {
            var t, i, s = this;
            e.isArray(this.options.source) ? (t = this.options.source, this.source = function(i, s) {
                s(e.ui.autocomplete.filter(t, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(t, n) {
                s.xhr && s.xhr.abort(), s.xhr = e.ajax({
                    url: i,
                    data: t,
                    dataType: "json",
                    success: function(e) {
                        n(e)
                    },
                    error: function() {
                        n([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(e) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
            }, this.options.delay)
        },
        search: function(e, t) {
            return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : undefined
        },
        _search: function(e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: e
            }, this._response())
        },
        _response: function() {
            var e = this,
                i = ++t;
            return function(s) {
                i === t && e.__response(s), e.pending--, e.pending || e.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function(e) {
            e && (e = this._normalize(e)), this._trigger("response", null, {
                content: e
            }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
        },
        close: function(e) {
            this.cancelSearch = !0, this._close(e)
        },
        _close: function(e) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
        },
        _change: function(e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                return "string" == typeof t ? {
                    label: t,
                    value: t
                } : e.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function(t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, i) {
            var s = this;
            e.each(i, function(e, i) {
                s._renderItemData(t, i)
            })
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(t, i) {
            return e("<li>").append(e("<a>").text(i.label)).appendTo(t)
        },
        _move: function(e, t) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), this.menu.blur(), undefined) : (this.menu[e](t), undefined) : (this.search(null, t), undefined)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(e, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, i) {
            var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
            return e.grep(t, function(e) {
                return s.test(e.label || e.value || e)
            })
        }
    }), e.widget("ui.autocomplete", e.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(e) {
            var t;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.text(t))
        }
    })
})(jQuery);; /**/
/* Source and licensing information for the line(s) below can be found at https://www.prestashop.com/sites/all/modules/contrib/jquery_update/replace/ui/external/jquery.cookie.js. */
jQuery.cookie = function(key, value, options) {
    if (arguments.length > 1 && (value === null || typeof value !== "object")) {
        options = jQuery.extend({}, options);
        if (value === null) options.expires = -1;
        if (typeof options.expires === 'number') {
            var days = options.expires,
                t = options.expires = new Date();
            t.setDate(t.getDate() + days)
        };
        return (document.cookie = [encodeURIComponent(key), '=', options.raw ? String(value) : encodeURIComponent(String(value)), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''))
    };
    options = value || {};
    var result, decode = options.raw ? function(s) {
        return s
    } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null
};
/* Source and licensing information for the above line(s) can be found at https://www.prestashop.com/sites/all/modules/contrib/jquery_update/replace/ui/external/jquery.cookie.js. */
/*!
 * jQuery Form Plugin
 * version: 2.69 (06-APR-2011)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(a) {
    function b() {
        if (a.fn.ajaxSubmit.debug) {
            var b = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(b) : window.opera && window.opera.postError && window.opera.postError(b)
        }
    }
    a.fn.ajaxSubmit = function(c) {
        function r() {
            function t() {
                if (!j.aborted) {
                    var c = i.contentWindow ? i.contentWindow.document : i.contentDocument ? i.contentDocument : i.document;
                    if (!c || c.location.href == e.iframeSrc)
                        if (!m) return;
                    i.detachEvent ? i.detachEvent("onload", t) : i.removeEventListener("load", t, !1);
                    var d = !0;
                    try {
                        if (m) throw "timeout";
                        var f = e.dataType == "xml" || c.XMLDocument || a.isXMLDoc(c);
                        b("isXml=" + f);
                        if (!f && window.opera && (c.body == null || c.body.innerHTML == "") && --s) {
                            b("requeing onLoad callback, DOM not available"), setTimeout(t, 250);
                            return
                        }
                        j.responseText = c.body ? c.body.innerHTML : c.documentElement ? c.documentElement.innerHTML : null, j.responseXML = c.XMLDocument ? c.XMLDocument : c, j.getResponseHeader = function(a) {
                            var b = {
                                "content-type": e.dataType
                            };
                            return b[a]
                        };
                        var g = /(json|script)/.test(e.dataType);
                        if (g || e.textarea) {
                            var l = c.getElementsByTagName("textarea")[0];
                            if (l) j.responseText = l.value;
                            else if (g) {
                                var n = c.getElementsByTagName("pre")[0],
                                    o = c.getElementsByTagName("body")[0];
                                n ? j.responseText = n.textContent : o && (j.responseText = o.innerHTML)
                            }
                        } else e.dataType == "xml" && !j.responseXML && j.responseText != null && (j.responseXML = u(j.responseText));
                        q = w(j, e.dataType, e)
                    } catch (p) {
                        b("error caught:", p), d = !1, j.error = p, e.error && e.error.call(e.context, j, "error", p), k && a.event.trigger("ajaxError", [j, e, p])
                    }
                    j.aborted && (b("upload aborted"), d = !1), d && (e.success && e.success.call(e.context, q, "success", j), k && a.event.trigger("ajaxSuccess", [j, e])), k && a.event.trigger("ajaxComplete", [j, e]), k && !--a.active && a.event.trigger("ajaxStop"), e.complete && e.complete.call(e.context, j, d ? "success" : "error"), setTimeout(function() {
                        h.removeData("form-plugin-onload"), h.remove(), j.responseXML = null
                    }, 100)
                }
            }

            function p() {
                var b = l.attr("target"),
                    c = l.attr("action");
                d.setAttribute("target", f), d.getAttribute("method") != "POST" && d.setAttribute("method", "POST"), d.getAttribute("action") != e.url && d.setAttribute("action", e.url), e.skipEncodingOverride || l.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), e.timeout && setTimeout(function() {
                    m = !0, t()
                }, e.timeout);
                var g = [];
                try {
                    if (e.extraData)
                        for (var j in e.extraData) g.push(a('<input type="hidden" name="' + j + '" value="' + e.extraData[j] + '" />').appendTo(d)[0]);
                    h.appendTo("body"), i.attachEvent ? i.attachEvent("onload", t) : i.addEventListener("load", t, !1), d.submit()
                } finally {
                    d.setAttribute("action", c), b ? d.setAttribute("target", b) : l.removeAttr("target"), a(g).remove()
                }
            }
            var d = l[0];
            if (a(":input[name=submit],:input[id=submit]", d).length) alert('Error: Form elements must not have name or id of "submit".');
            else {
                var e = a.extend(!0, {}, a.ajaxSettings, c);
                e.context = e.context || e;
                var f = "jqFormIO" + (new Date).getTime(),
                    g = "_" + f,
                    h = a('<iframe id="' + f + '" name="' + f + '" src="' + e.iframeSrc + '" />'),
                    i = h[0];
                h.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                });
                var j = {
                        aborted: 0,
                        responseText: null,
                        responseXML: null,
                        status: 0,
                        statusText: "n/a",
                        getAllResponseHeaders: function() {},
                        getResponseHeader: function() {},
                        setRequestHeader: function() {},
                        abort: function() {
                            b("aborting upload...");
                            var c = "aborted";
                            this.aborted = 1, h.attr("src", e.iframeSrc), j.error = c, e.error && e.error.call(e.context, j, "error", c), k && a.event.trigger("ajaxError", [j, e, c]), e.complete && e.complete.call(e.context, j, "error")
                        }
                    },
                    k = e.global;
                k && !(a.active++) && a.event.trigger("ajaxStart"), k && a.event.trigger("ajaxSend", [j, e]);
                if (e.beforeSend && e.beforeSend.call(e.context, j, e) === !1) {
                    e.global && a.active--;
                    return
                }
                if (j.aborted) return;
                var m = 0,
                    n = d.clk;
                if (n) {
                    var o = n.name;
                    o && !n.disabled && (e.extraData = e.extraData || {}, e.extraData[o] = n.value, n.type == "image" && (e.extraData[o + ".x"] = d.clk_x, e.extraData[o + ".y"] = d.clk_y))
                }
                e.forceSync ? p() : setTimeout(p, 10);
                var q, r, s = 50,
                    u = a.parseXML || function(a, b) {
                        window.ActiveXObject ? (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a)) : b = (new DOMParser).parseFromString(a, "text/xml");
                        return b && b.documentElement && b.documentElement.nodeName != "parsererror" ? b : null
                    },
                    v = a.parseJSON || function(a) {
                        return window.eval("(" + a + ")")
                    },
                    w = function(b, c, d) {
                        var e = b.getResponseHeader("content-type") || "",
                            f = c === "xml" || !c && e.indexOf("xml") >= 0,
                            g = f ? b.responseXML : b.responseText;
                        f && g.documentElement.nodeName === "parsererror" && a.error && a.error("parsererror"), d && d.dataFilter && (g = d.dataFilter(g, c)), typeof g == "string" && (c === "json" || !c && e.indexOf("json") >= 0 ? g = v(g) : (c === "script" || !c && e.indexOf("javascript") >= 0) && a.globalEval(g));
                        return g
                    }
            }
        }
        if (!this.length) {
            b("ajaxSubmit: skipping submit process - no element selected");
            return this
        }
        typeof c == "function" && (c = {
            success: c
        });
        var d = this.attr("action"),
            e = typeof d == "string" ? a.trim(d) : "";
        e && (e = (e.match(/^([^#]+)/) || [])[1]), e = e || window.location.href || "", c = a.extend(!0, {
            url: e,
            success: a.ajaxSettings.success,
            type: this[0].getAttribute("method") || "GET",
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, c);
        var f = {};
        this.trigger("form-pre-serialize", [this, c, f]);
        if (f.veto) {
            b("ajaxSubmit: submit vetoed via form-pre-serialize trigger");
            return this
        }
        if (c.beforeSerialize && c.beforeSerialize(this, c) === !1) {
            b("ajaxSubmit: submit aborted via beforeSerialize callback");
            return this
        }
        var g, h, i = this.formToArray(c.semantic);
        if (c.data) {
            c.extraData = c.data;
            for (g in c.data)
                if (c.data[g] instanceof Array)
                    for (var j in c.data[g]) i.push({
                        name: g,
                        value: c.data[g][j]
                    });
                else h = c.data[g], h = a.isFunction(h) ? h() : h, i.push({
                    name: g,
                    value: h
                })
        }
        if (c.beforeSubmit && c.beforeSubmit(i, this, c) === !1) {
            b("ajaxSubmit: submit aborted via beforeSubmit callback");
            return this
        }
        this.trigger("form-submit-validate", [i, this, c, f]);
        if (f.veto) {
            b("ajaxSubmit: submit vetoed via form-submit-validate trigger");
            return this
        }
        var k = a.param(i);
        c.type.toUpperCase() == "GET" ? (c.url += (c.url.indexOf("?") >= 0 ? "&" : "?") + k, c.data = null) : c.data = k;
        var l = this,
            m = [];
        c.resetForm && m.push(function() {
            l.resetForm()
        }), c.clearForm && m.push(function() {
            l.clearForm()
        });
        if (!c.dataType && c.target) {
            var n = c.success || function() {};
            m.push(function(b) {
                var d = c.replaceTarget ? "replaceWith" : "html";
                a(c.target)[d](b).each(n, arguments)
            })
        } else c.success && m.push(c.success);
        c.success = function(a, b, d) {
            var e = c.context || c;
            for (var f = 0, g = m.length; f < g; f++) m[f].apply(e, [a, b, d || l, l])
        };
        var o = a("input:file", this).length > 0,
            p = "multipart/form-data",
            q = l.attr("enctype") == p || l.attr("encoding") == p;
        c.iframe !== !1 && (o || c.iframe || q) ? c.closeKeepAlive ? a.get(c.closeKeepAlive, r) : r() : a.ajax(c), this.trigger("form-submit-notify", [this, c]);
        return this
    }, a.fn.ajaxForm = function(c) {
        if (this.length === 0) {
            var d = {
                s: this.selector,
                c: this.context
            };
            if (!a.isReady && d.s) {
                b("DOM not ready, queuing ajaxForm"), a(function() {
                    a(d.s, d.c).ajaxForm(c)
                });
                return this
            }
            b("terminating; zero elements found by selector" + (a.isReady ? "" : " (DOM not ready)"));
            return this
        }
        return this.ajaxFormUnbind().bind("submit.form-plugin", function(b) {
            b.isDefaultPrevented() || (b.preventDefault(), a(this).ajaxSubmit(c))
        }).bind("click.form-plugin", function(b) {
            var c = b.target,
                d = a(c);
            if (!d.is(":submit,input:image")) {
                var e = d.closest(":submit");
                if (e.length == 0) return;
                c = e[0]
            }
            var f = this;
            f.clk = c;
            if (c.type == "image")
                if (b.offsetX != undefined) f.clk_x = b.offsetX, f.clk_y = b.offsetY;
                else if (typeof a.fn.offset == "function") {
                var g = d.offset();
                f.clk_x = b.pageX - g.left, f.clk_y = b.pageY - g.top
            } else f.clk_x = b.pageX - c.offsetLeft, f.clk_y = b.pageY - c.offsetTop;
            setTimeout(function() {
                f.clk = f.clk_x = f.clk_y = null
            }, 100)
        })
    }, a.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, a.fn.formToArray = function(b) {
        var c = [];
        if (this.length === 0) return c;
        var d = this[0],
            e = b ? d.getElementsByTagName("*") : d.elements;
        if (!e) return c;
        var f, g, h, i, j, k, l;
        for (f = 0, k = e.length; f < k; f++) {
            j = e[f], h = j.name;
            if (!h) continue;
            if (b && d.clk && j.type == "image") {
                !j.disabled && d.clk == j && (c.push({
                    name: h,
                    value: a(j).val()
                }), c.push({
                    name: h + ".x",
                    value: d.clk_x
                }, {
                    name: h + ".y",
                    value: d.clk_y
                }));
                continue
            }
            i = a.fieldValue(j, !0);
            if (i && i.constructor == Array)
                for (g = 0, l = i.length; g < l; g++) c.push({
                    name: h,
                    value: i[g]
                });
            else i !== null && typeof i != "undefined" && c.push({
                name: h,
                value: i
            })
        }
        if (!b && d.clk) {
            var m = a(d.clk),
                n = m[0];
            h = n.name, h && !n.disabled && n.type == "image" && (c.push({
                name: h,
                value: m.val()
            }), c.push({
                name: h + ".x",
                value: d.clk_x
            }, {
                name: h + ".y",
                value: d.clk_y
            }))
        }
        return c
    }, a.fn.formSerialize = function(b) {
        return a.param(this.formToArray(b))
    }, a.fn.fieldSerialize = function(b) {
        var c = [];
        this.each(function() {
            var d = this.name;
            if (!!d) {
                var e = a.fieldValue(this, b);
                if (e && e.constructor == Array)
                    for (var f = 0, g = e.length; f < g; f++) c.push({
                        name: d,
                        value: e[f]
                    });
                else e !== null && typeof e != "undefined" && c.push({
                    name: this.name,
                    value: e
                })
            }
        });
        return a.param(c)
    }, a.fn.fieldValue = function(b) {
        for (var c = [], d = 0, e = this.length; d < e; d++) {
            var f = this[d],
                g = a.fieldValue(f, b);
            if (g === null || typeof g == "undefined" || g.constructor == Array && !g.length) continue;
            g.constructor == Array ? a.merge(c, g) : c.push(g)
        }
        return c
    }, a.fieldValue = function(b, c) {
        var d = b.name,
            e = b.type,
            f = b.tagName.toLowerCase();
        c === undefined && (c = !0);
        if (c && (!d || b.disabled || e == "reset" || e == "button" || (e == "checkbox" || e == "radio") && !b.checked || (e == "submit" || e == "image") && b.form && b.form.clk != b || f == "select" && b.selectedIndex == -1)) return null;
        if (f == "select") {
            var g = b.selectedIndex;
            if (g < 0) return null;
            var h = [],
                i = b.options,
                j = e == "select-one",
                k = j ? g + 1 : i.length;
            for (var l = j ? g : 0; l < k; l++) {
                var m = i[l];
                if (m.selected) {
                    var n = m.value;
                    n || (n = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value);
                    if (j) return n;
                    h.push(n)
                }
            }
            return h
        }
        return a(b).val()
    }, a.fn.clearForm = function() {
        return this.each(function() {
            a("input,select,textarea", this).clearFields()
        })
    }, a.fn.clearFields = a.fn.clearInputs = function() {
        return this.each(function() {
            var a = this.type,
                b = this.tagName.toLowerCase();
            a == "text" || a == "password" || b == "textarea" ? this.value = "" : a == "checkbox" || a == "radio" ? this.checked = !1 : b == "select" && (this.selectedIndex = -1)
        })
    }, a.fn.resetForm = function() {
        return this.each(function() {
            (typeof this.reset == "function" || typeof this.reset == "object" && !this.reset.nodeType) && this.reset()
        })
    }, a.fn.enable = function(a) {
        a === undefined && (a = !0);
        return this.each(function() {
            this.disabled = !a
        })
    }, a.fn.selected = function(b) {
        b === undefined && (b = !0);
        return this.each(function() {
            var c = this.type;
            if (c == "checkbox" || c == "radio") this.checked = b;
            else if (this.tagName.toLowerCase() == "option") {
                var d = a(this).parent("select");
                b && d[0] && d[0].type == "select-one" && d.find("option").selected(!1), this.selected = b
            }
        })
    }
})(jQuery); /**/
/* Source and licensing information for the line(s) below can be found at https://www.prestashop.com/misc/ajax.js. */
(function($) {
    Drupal.ajax = Drupal.ajax || {};
    Drupal.settings.urlIsAjaxTrusted = Drupal.settings.urlIsAjaxTrusted || {};
    Drupal.behaviors.AJAX = {
        attach: function(context, settings) {
            for (var base in settings.ajax)
                if (!$('#' + base + '.ajax-processed').length) {
                    var element_settings = settings.ajax[base];
                    if (typeof element_settings.selector == 'undefined') element_settings.selector = '#' + base;
                    $(element_settings.selector).each(function() {
                        element_settings.element = this;
                        Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings)
                    });
                    $('#' + base).addClass('ajax-processed')
                };
            $('.use-ajax:not(.ajax-processed)').addClass('ajax-processed').each(function() {
                var element_settings = {};
                element_settings.progress = {
                    type: 'throbber'
                };
                if ($(this).attr('href')) {
                    element_settings.url = $(this).attr('href');
                    element_settings.event = 'click'
                };
                var base = $(this).attr('id');
                Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings)
            });
            $('.use-ajax-submit:not(.ajax-processed)').addClass('ajax-processed').each(function() {
                var element_settings = {};
                element_settings.url = $(this.form).attr('action');
                element_settings.setClick = true;
                element_settings.event = 'click';
                element_settings.progress = {
                    type: 'throbber'
                };
                var base = $(this).attr('id');
                Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings)
            })
        }
    };
    Drupal.ajax = function(base, element, element_settings) {
        var defaults = {
            url: 'system/ajax',
            event: 'mousedown',
            keypress: true,
            selector: '#' + base,
            effect: 'none',
            speed: 'none',
            method: 'replaceWith',
            progress: {
                type: 'throbber',
                message: Drupal.t('Please wait...')
            },
            submit: {
                js: true
            }
        };
        $.extend(this, defaults, element_settings);
        this.element = element;
        this.element_settings = element_settings;
        this.url = element_settings.url.replace(/\/nojs(\/|$|\?|&|#)/g, '/ajax$1');
        if (Drupal.settings.urlIsAjaxTrusted[element_settings.url]) Drupal.settings.urlIsAjaxTrusted[this.url] = true;
        this.wrapper = '#' + element_settings.wrapper;
        if (this.element.form) this.form = $(this.element.form);
        var ajax = this;
        ajax.options = {
            url: ajax.url,
            data: ajax.submit,
            beforeSerialize: function(element_settings, options) {
                return ajax.beforeSerialize(element_settings, options)
            },
            beforeSubmit: function(form_values, element_settings, options) {
                ajax.ajaxing = true;
                return ajax.beforeSubmit(form_values, element_settings, options)
            },
            beforeSend: function(xmlhttprequest, options) {
                ajax.ajaxing = true;
                return ajax.beforeSend(xmlhttprequest, options)
            },
            success: function(response, status, xmlhttprequest) {
                if (typeof response == 'string') response = $.parseJSON(response);
                if (response !== null && !Drupal.settings.urlIsAjaxTrusted[ajax.url])
                    if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
                        var customMessage = Drupal.t("The response failed verification so will not be processed.");
                        return ajax.error(xmlhttprequest, ajax.url, customMessage)
                    };
                return ajax.success(response, status)
            },
            complete: function(xmlhttprequest, status) {
                ajax.ajaxing = false;
                if (status == 'error' || status == 'parsererror') return ajax.error(xmlhttprequest, ajax.url)
            },
            dataType: 'json',
            type: 'POST'
        };
        $(ajax.element).bind(element_settings.event, function(event) {
            if (!Drupal.settings.urlIsAjaxTrusted[ajax.url] && !Drupal.urlIsLocal(ajax.url)) throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
                '!url': ajax.url
            }));
            return ajax.eventResponse(this, event)
        });
        if (element_settings.keypress) $(ajax.element).keypress(function(event) {
            return ajax.keypressResponse(this, event)
        });
        if (element_settings.prevent) $(ajax.element).bind(element_settings.prevent, false)
    };
    Drupal.ajax.prototype.keypressResponse = function(element, event) {
        var ajax = this;
        if (event.which == 13 || (event.which == 32 && element.type != 'text' && element.type != 'textarea')) {
            $(ajax.element_settings.element).trigger(ajax.element_settings.event);
            return false
        }
    };
    Drupal.ajax.prototype.eventResponse = function(element, event) {
        var ajax = this;
        if (ajax.ajaxing) return false;
        try {
            if (ajax.form) {
                if (ajax.setClick) element.form.clk = element;
                ajax.form.ajaxSubmit(ajax.options)
            } else {
                ajax.beforeSerialize(ajax.element, ajax.options);
                $.ajax(ajax.options)
            }
        } catch (e) {
            ajax.ajaxing = false;
            alert("An error occurred while attempting to process " + ajax.options.url + ": " + e.message)
        };
        if (typeof element.type != 'undefined' && (element.type == 'checkbox' || element.type == 'radio')) {
            return true
        } else return false
    };
    Drupal.ajax.prototype.beforeSerialize = function(element, options) {
        if (this.form) {
            var settings = this.settings || Drupal.settings;
            Drupal.detachBehaviors(this.form, settings, 'serialize')
        };
        options.data['ajax_html_ids[]'] = [];
        $('[id]').each(function() {
            options.data['ajax_html_ids[]'].push(this.id)
        });
        options.data['ajax_page_state[theme]'] = Drupal.settings.ajaxPageState.theme;
        options.data['ajax_page_state[theme_token]'] = Drupal.settings.ajaxPageState.theme_token;
        for (var key in Drupal.settings.ajaxPageState.css) options.data['ajax_page_state[css][' + key + ']'] = 1;
        for (var key in Drupal.settings.ajaxPageState.js) options.data['ajax_page_state[js][' + key + ']'] = 1
    };
    Drupal.ajax.prototype.beforeSubmit = function(form_values, element, options) {};
    Drupal.ajax.prototype.beforeSend = function(xmlhttprequest, options) {
        if (this.form) {
            options.extraData = options.extraData || {};
            options.extraData.ajax_iframe_upload = '1';
            var v = $.fieldValue(this.element);
            if (v !== null) options.extraData[this.element.name] = Drupal.checkPlain(v)
        };
        $(this.element).addClass('progress-disabled').attr('disabled', true);
        if (this.progress.type == 'bar') {
            var progressBar = new Drupal.progressBar('ajax-progress-' + this.element.id, eval(this.progress.update_callback), this.progress.method, eval(this.progress.error_callback));
            if (this.progress.message) progressBar.setProgress(-1, this.progress.message);
            if (this.progress.url) progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
            this.progress.element = $(progressBar.element).addClass('ajax-progress ajax-progress-bar');
            this.progress.object = progressBar;
            $(this.element).after(this.progress.element)
        } else if (this.progress.type == 'throbber') {
            this.progress.element = $('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');
            if (this.progress.message) $('.throbber', this.progress.element).after('<div class="message">' + this.progress.message + '</div>');
            $(this.element).after(this.progress.element)
        }
    };
    Drupal.ajax.prototype.success = function(response, status) {
        if (this.progress.element) $(this.progress.element).remove();
        if (this.progress.object) this.progress.object.stopMonitoring();
        $(this.element).removeClass('progress-disabled').removeAttr('disabled');
        Drupal.freezeHeight();
        for (var i in response)
            if (response.hasOwnProperty(i) && response[i]['command'] && this.commands[response[i]['command']]) this.commands[response[i]['command']](this, response[i], status);
        if (this.form) {
            var settings = this.settings || Drupal.settings;
            Drupal.attachBehaviors(this.form, settings)
        };
        Drupal.unfreezeHeight();
        this.settings = null
    };
    Drupal.ajax.prototype.getEffect = function(response) {
        var type = response.effect || this.effect,
            speed = response.speed || this.speed,
            effect = {};
        if (type == 'none') {
            effect.showEffect = 'show';
            effect.hideEffect = 'hide';
            effect.showSpeed = ''
        } else if (type == 'fade') {
            effect.showEffect = 'fadeIn';
            effect.hideEffect = 'fadeOut';
            effect.showSpeed = speed
        } else {
            effect.showEffect = type + 'Toggle';
            effect.hideEffect = type + 'Toggle';
            effect.showSpeed = speed
        };
        return effect
    };
    Drupal.ajax.prototype.error = function(xmlhttprequest, uri, customMessage) {
        Drupal.displayAjaxError(Drupal.ajaxError(xmlhttprequest, uri, customMessage));
        if (this.progress.element) $(this.progress.element).remove();
        if (this.progress.object) this.progress.object.stopMonitoring();
        $(this.wrapper).show();
        $(this.element).removeClass('progress-disabled').removeAttr('disabled');
        if (this.form) {
            var settings = this.settings || Drupal.settings;
            Drupal.attachBehaviors(this.form, settings)
        }
    };
    Drupal.ajax.prototype.commands = {
        insert: function(ajax, response, status) {
            var wrapper = response.selector ? $(response.selector) : $(ajax.wrapper),
                method = response.method || ajax.method,
                effect = ajax.getEffect(response),
                new_content_wrapped = $('<div></div>').html(response.data),
                new_content = new_content_wrapped.contents();
            if (new_content.length != 1 || new_content.get(0).nodeType != 1) new_content = new_content_wrapped;
            switch (method) {
                case 'html':
                case 'replaceWith':
                case 'replaceAll':
                case 'empty':
                case 'remove':
                    var settings = response.settings || ajax.settings || Drupal.settings;
                    Drupal.detachBehaviors(wrapper, settings)
            };
            wrapper[method](new_content);
            if (effect.showEffect != 'show') new_content.hide();
            if ($('.ajax-new-content', new_content).length > 0) {
                $('.ajax-new-content', new_content).hide();
                new_content.show();
                $('.ajax-new-content', new_content)[effect.showEffect](effect.showSpeed)
            } else if (effect.showEffect != 'show') new_content[effect.showEffect](effect.showSpeed);
            if (new_content.parents('html').length > 0) {
                var settings = response.settings || ajax.settings || Drupal.settings;
                Drupal.attachBehaviors(new_content, settings)
            }
        },
        remove: function(ajax, response, status) {
            var settings = response.settings || ajax.settings || Drupal.settings;
            Drupal.detachBehaviors($(response.selector), settings);
            $(response.selector).remove()
        },
        changed: function(ajax, response, status) {
            if (!$(response.selector).hasClass('ajax-changed')) {
                $(response.selector).addClass('ajax-changed');
                if (response.asterisk) $(response.selector).find(response.asterisk).append(' <span class="ajax-changed">*</span> ')
            }
        },
        alert: function(ajax, response, status) {
            alert(response.text, response.title)
        },
        css: function(ajax, response, status) {
            $(response.selector).css(response.argument)
        },
        settings: function(ajax, response, status) {
            if (response.merge) {
                $.extend(true, Drupal.settings, response.settings)
            } else ajax.settings = response.settings
        },
        data: function(ajax, response, status) {
            $(response.selector).data(response.name, response.value)
        },
        invoke: function(ajax, response, status) {
            var $element = $(response.selector);
            $element[response.method].apply($element, response.arguments)
        },
        restripe: function(ajax, response, status) {
            $('> tbody > tr:visible, > tr:visible', $(response.selector)).removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even')
        },
        add_css: function(ajax, response, status) {
            $('head').prepend(response.data);
            var match, importMatch = /^@import url\("(.*)"\);$/igm;
            if (document.styleSheets[0].addImport && importMatch.test(response.data)) {
                importMatch.lastIndex = 0;
                while (match = importMatch.exec(response.data)) document.styleSheets[0].addImport(match[1])
            }
        },
        updateBuildId: function(ajax, response, status) {
            $('input[name="form_build_id"][value="' + response.old + '"]').val(response['new'])
        }
    }
})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.prestashop.com/misc/ajax.js. */
/* Source and licensing information for the line(s) below can be found at https://www.prestashop.com/sites/all/modules/contrib/jquery_update/js/jquery_update.js. */
(function(D) {
    var beforeSerialize = D.ajax.prototype.beforeSerialize;
    D.ajax.prototype.beforeSerialize = function(element, options) {
        beforeSerialize.call(this, element, options);
        options.data['ajax_page_state[jquery_version]'] = D.settings.ajaxPageState.jquery_version
    }
})(Drupal);;
/* Source and licensing information for the above line(s) can be found at https://www.prestashop.com/sites/all/modules/contrib/jquery_update/js/jquery_update.js. */
/* Source and licensing information for the line(s) below can be found at https://www.prestashop.com/sites/all/modules/contrib/gss/scripts/autocomplete.js. */
(function($) {
    Drupal.behaviors.gssAutocomplete = {
        attach: function(context, settings) {
            if (settings.gss.key == undefined) return;
            $('.block-search .form-item-search-block-form input.form-text, .gss .form-item-keys input.form-text, .block-search .form-search input.form-text').focus(function() {
                this.select()
            }).mouseup(function(e) {
                e.preventDefault()
            }).autocomplete({
                position: {
                    my: "left top",
                    at: "left bottom",
                    offset: "0, 5",
                    collision: "none"
                },
                source: function(request, response) {
                    $.ajax({
                        url: "http://clients1.google.com/complete/search?q=" + request.term + "&hl=en&client=partner&source=gcsc&partnerid=" + settings.gss.key + "&ds=cse&nocache=" + Math.random().toString(),
                        dataType: "jsonp",
                        success: function(data) {
                            response($.map(data[1], function(item) {
                                return {
                                    label: item[0],
                                    value: item[0]
                                }
                            }))
                        }
                    })
                },
                autoFill: true,
                minChars: 0,
                select: function(event, ui) {
                    $(this).closest('input').val(ui.item.value);
                    $(this).closest('form').trigger('submit')
                }
            })
        }
    }
}(jQuery));;
/* Source and licensing information for the above line(s) can be found at https://www.prestashop.com/sites/all/modules/contrib/gss/scripts/autocomplete.js. */
/* Source and licensing information for the line(s) below can be found at https://www.prestashop.com/sites/all/modules/custom/ps_releases_api/js/ps_releases_prev_url.js. */
(function($) {
    Drupal.behaviors.prev_url_cookie = {
        attach: function(context, settings) {
            if (typeof(Drupal.settings.ps_releases_api) !== 'undefined' && Drupal.settings.ps_releases_api.is_download_page == 1) $('body').once(function() {
                $.ajax({
                    type: 'POST',
                    url: Drupal.settings.basePath + 'api/set_dl_prev_url_cookie',
                    dataType: 'json',
                    data: 'js=1&dl_prev_url=' + window.location.href
                })
            })
        }
    }
})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.prestashop.com/sites/all/modules/custom/ps_releases_api/js/ps_releases_prev_url.js. */
/* Source and licensing information for the line(s) below can be found at https://www.prestashop.com/sites/all/modules/features/prestashop_crowdin/js/prestashop_crowdin.js. */
function prestashop_crowdin_ajax(params) {
    jQuery.post("prestashop/post/crowdin", params, function(data) {
        if (data == 0) {
            jQuery('.autocomplete .error-alert').show();
            jQuery('.autocomplete .searchBar').addClass('error')
        } else {
            jQuery('.autocomplete .error-alert').hide();
            jQuery('.autocomplete .searchBar').removeClass('error');
            if (params.reset == true) {
                jQuery('#translation-list-table').html(data)
            } else jQuery('#translation-list-table').append(data)
        }
    })
};
/* Source and licensing information for the above line(s) can be found at https://www.prestashop.com/sites/all/modules/features/prestashop_crowdin/js/prestashop_crowdin.js. */
/* Source and licensing information for the line(s) below can be found at https://www.prestashop.com/sites/all/modules/features/prestashop_day_section/js/prestashop_day_section.js. */
function prestashop_day_section_ajax(params) {
    jQuery.post("prestashop/post/psdayForm", params, function(data) {
        jQuery('.form-prestashop .form-container').html(data)
    })
};
/* Source and licensing information for the above line(s) can be found at https://www.prestashop.com/sites/all/modules/features/prestashop_day_section/js/prestashop_day_section.js. */
/* Source and licensing information for the line(s) below can be found at https://www.prestashop.com/sites/all/modules/features/prestashop_day_section/js/countdown.js. */
function Countdown(target_date, current_date) {
    this.target_date = target_date;
    this.current_date = current_date
};
Countdown.prototype.countdown = function(callback) {
    var difference = this.target_date.getTime() - this.current_date.getTime(),
        runNext = (difference > 0) ? true : false;
    if (runNext) {
        var days = Math.floor(difference / (1e3 * 60 * 60 * 24));
        difference = difference - (days * 1e3 * 60 * 60 * 24);
        var hours = Math.floor(difference / (1e3 * 60 * 60));
        difference = difference - (hours * 1e3 * 60 * 60);
        var minutes = Math.floor(difference / (1e3 * 60));
        difference = difference - (minutes * 1e3 * 60);
        var seconds = Math.floor(difference / 1e3),
            differenceObject = {
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            }
    } else var differenceObject = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };
    callback(differenceObject);
    if (runNext) {
        this.current_date = new Date(this.current_date.getTime() + 1e3);
        var _this = this;
        setTimeout(function() {
            _this.countdown(callback)
        }, 1e3)
    }
};
/* Source and licensing information for the above line(s) can be found at https://www.prestashop.com/sites/all/modules/features/prestashop_day_section/js/countdown.js. */
/* Source and licensing information for the line(s) below can be found at https://www.prestashop.com/sites/all/modules/features/prestashop_showcase_section/js/prestashop_showcase_section.js. */
function prestashop_showcase_section_ajax_load(params) {
    jQuery.post("prestashop/post/showcase", params, function(data) {
        jQuery('#showcase-list-container').append(data);
        if (params.ids.length < (params.loadId + 1) * 9) jQuery('#showcase-more').hide()
    })
}

function prestashop_showcase_section_ajax_post(params) {
    jQuery.post("prestashop/post/showcaseForm", params, function(data) {
        window.location = data
    })
};
/* Source and licensing information for the above line(s) can be found at https://www.prestashop.com/sites/all/modules/features/prestashop_showcase_section/js/prestashop_showcase_section.js. */
/* Source and licensing information for the line(s) below can be found at https://www.prestashop.com/sites/all/modules/features/prestashop_training_section/js/prestashop_training_section.js. */
function prestashop_training_training_ajax_load(params) {
    jQuery.post("prestashop/post/training", params, function(data) {
        window.location = data
    })
};
/* Source and licensing information for the above line(s) can be found at https://www.prestashop.com/sites/all/modules/features/prestashop_training_section/js/prestashop_training_section.js. */
/* Source and licensing information for the line(s) below can be found at https://www.prestashop.com/misc/progress.js. */
(function($) {
    Drupal.progressBar = function(id, updateCallback, method, errorCallback) {
        var pb = this;
        this.id = id;
        this.method = method || 'GET';
        this.updateCallback = updateCallback;
        this.errorCallback = errorCallback;
        this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
        this.element.html('<div class="bar"><div class="filled"></div></div><div class="percentage"></div><div class="message">&nbsp;</div>')
    };
    Drupal.progressBar.prototype.setProgress = function(percentage, message) {
        if (percentage >= 0 && percentage <= 100) {
            $('div.filled', this.element).css('width', percentage + '%');
            $('div.percentage', this.element).html(percentage + '%')
        };
        $('div.message', this.element).html(message);
        if (this.updateCallback) this.updateCallback(percentage, message, this)
    };
    Drupal.progressBar.prototype.startMonitoring = function(uri, delay) {
        this.delay = delay;
        this.uri = uri;
        this.sendPing()
    };
    Drupal.progressBar.prototype.stopMonitoring = function() {
        clearTimeout(this.timer);
        this.uri = null
    };
    Drupal.progressBar.prototype.sendPing = function() {
        if (this.timer) clearTimeout(this.timer);
        if (this.uri) {
            var pb = this;
            $.ajax({
                type: this.method,
                url: this.uri,
                data: '',
                dataType: 'json',
                success: function(progress) {
                    if (progress.status == 0) {
                        pb.displayError(progress.data);
                        return
                    };
                    pb.setProgress(progress.percentage, progress.message);
                    pb.timer = setTimeout(function() {
                        pb.sendPing()
                    }, pb.delay)
                },
                error: function(xmlhttp) {
                    pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri))
                }
            })
        }
    };
    Drupal.progressBar.prototype.displayError = function(string) {
        var error = $('<div class="messages error"></div>').html(string);
        $(this.element).before(error).hide();
        if (this.errorCallback) this.errorCallback(this)
    }
})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.prestashop.com/misc/progress.js. */
/* Source and licensing information for the line(s) below can be found at https://www.prestashop.com/sites/all/modules/contrib/webform/js/webform.js. */
(function($) {
    "use strict";
    Drupal.behaviors.webform = Drupal.behaviors.webform || {};
    Drupal.behaviors.webform.attach = function(context) {
        Drupal.webform.datepicker(context);
        if (Drupal.settings.webform && Drupal.settings.webform.conditionals) Drupal.webform.conditional(context)
    };
    Drupal.webform = Drupal.webform || {};
    Drupal.webform.datepicker = function(context) {
        $('div.webform-datepicker').each(function() {
            var $webformDatepicker = $(this),
                $calendar = $webformDatepicker.find('input.webform-calendar');
            if ($calendar.length == 0) return;
            var startDate = $calendar[0].className.replace(/.*webform-calendar-start-(\d{4}-\d{2}-\d{2}).*/, '$1').split('-'),
                endDate = $calendar[0].className.replace(/.*webform-calendar-end-(\d{4}-\d{2}-\d{2}).*/, '$1').split('-'),
                firstDay = $calendar[0].className.replace(/.*webform-calendar-day-(\d).*/, '$1');
            startDate = new Date(startDate[0], startDate[1] - 1, startDate[2]);
            endDate = new Date(endDate[0], endDate[1] - 1, endDate[2]);
            if (startDate > endDate) {
                var laterDate = startDate;
                startDate = endDate;
                endDate = laterDate
            };
            var startYear = startDate.getFullYear(),
                endYear = endDate.getFullYear();
            $calendar.datepicker({
                dateFormat: 'yy-mm-dd',
                yearRange: startYear + ':' + endYear,
                firstDay: parseInt(firstDay),
                minDate: startDate,
                maxDate: endDate,
                onSelect: function(dateText, inst) {
                    var date = dateText.split('-');
                    $webformDatepicker.find('select.year, input.year').val(+date[0]).trigger('change');
                    $webformDatepicker.find('select.month').val(+date[1]).trigger('change');
                    $webformDatepicker.find('select.day').val(+date[2]).trigger('change')
                },
                beforeShow: function(input, inst) {
                    var year = $webformDatepicker.find('select.year, input.year').val(),
                        month = $webformDatepicker.find('select.month').val(),
                        day = $webformDatepicker.find('select.day').val(),
                        today = new Date();
                    year = year ? year : today.getFullYear();
                    month = month ? month : today.getMonth() + 1;
                    day = day ? day : today.getDate();
                    year = (year < startYear || year > endYear) ? startYear : year;
                    $(input).val(year + '-' + month + '-' + day)
                }
            });
            $calendar.click(function(event) {
                $(this).focus();
                event.preventDefault()
            })
        })
    };
    Drupal.webform.conditional = function(context) {
        $.each(Drupal.settings.webform.conditionals, function(formKey, settings) {
            var $form = $('.' + formKey + ':not(.webform-conditional-processed)');
            $form.each(function(index, currentForm) {
                var $currentForm = $(currentForm);
                $currentForm.addClass('webform-conditional-processed');
                $currentForm.bind('change', {
                    settings: settings
                }, Drupal.webform.conditionalCheck);
                Drupal.webform.doConditions($currentForm, settings)
            })
        })
    };
    Drupal.webform.conditionalCheck = function(e) {
        var $triggerElement = $(e.target).closest('.webform-component'),
            $form = $triggerElement.closest('form'),
            triggerElementKey = $triggerElement.attr('class').match(/webform-component--[^ ]+/)[0],
            settings = e.data.settings;
        if (settings.sourceMap[triggerElementKey]) Drupal.webform.doConditions($form, settings)
    };
    Drupal.webform.doConditions = function($form, settings) {
        var stackPointer, resultStack

        function executionStackInitialize(andor) {
            stackPointer = -1;
            resultStack = [];
            executionStackPush(andor)
        }

        function executionStackPush(andor) {
            resultStack[++stackPointer] = {
                results: [],
                andor: andor
            }
        }

        function executionStackAccumulate(result) {
            resultStack[stackPointer]['results'].push(result)
        }

        function executionStackPop() {
            var stackFrame = resultStack[stackPointer];
            stackPointer = Math.max(0, stackPointer - 1);
            var $conditionalResults = stackFrame.results,
                filteredResults = $.map($conditionalResults, function(val) {
                    return val ? val : null
                });
            return stackFrame.andor === 'or' ? filteredResults.length > 0 : filteredResults.length === $conditionalResults.length
        };
        var targetLocked = [];
        $.each(settings.ruleGroups, function(rgid_key, rule_group) {
            var ruleGroup = settings.ruleGroups[rgid_key];
            executionStackInitialize(ruleGroup.andor);
            $.each(ruleGroup.rules, function(m, rule) {
                switch (rule.source_type) {
                    case 'component':
                        var elementKey = rule.source,
                            element = $form.find('.' + elementKey)[0],
                            existingValue = settings.values[elementKey] ? settings.values[elementKey] : null;
                        executionStackAccumulate(window.Drupal['webform'][rule.callback](element, existingValue, rule.value));
                        break;
                    case 'conditional_start':
                        executionStackPush(rule.andor);
                        break;
                    case 'conditional_end':
                        executionStackAccumulate(executionStackPop());
                        break
                }
            });
            var conditionalResult = executionStackPop();
            $.each(ruleGroup.actions, function(aid, action) {
                var $target = $form.find('.' + action.target),
                    actionResult = action.invert ? !conditionalResult : conditionalResult;
                switch (action.action) {
                    case 'show':
                        if (actionResult != Drupal.webform.isVisible($target)) {
                            var $targetElements = actionResult ? $target.find('.webform-conditional-disabled').removeClass('webform-conditional-disabled') : $target.find(':input').addClass('webform-conditional-disabled');
                            $targetElements.webformProp('disabled', !actionResult);
                            $target.toggleClass('webform-conditional-hidden', !actionResult);
                            if (actionResult) {
                                $target.show()
                            } else {
                                $target.hide();
                                targetLocked[action.target] = 'hide'
                            };
                            if ($target.is('tr')) Drupal.webform.restripeTable($target.closest('table').first())
                        };
                        break;
                    case 'require':
                        var $requiredSpan = $target.find('.form-required, .form-optional').first();
                        if (actionResult != $requiredSpan.hasClass('form-required')) {
                            var $targetInputElements = $target.find("input:text,textarea,input[type='email'],select,input:radio,input:file");
                            Drupal.detachBehaviors($requiredSpan);
                            $targetInputElements.webformProp('required', actionResult).toggleClass('required', actionResult);
                            if (actionResult) {
                                $requiredSpan.replaceWith('<span class="form-required" title="' + Drupal.t('This field is required.') + '">*</span>')
                            } else $requiredSpan.replaceWith('<span class="form-optional"></span>');
                            Drupal.attachBehaviors($requiredSpan)
                        };
                        break;
                    case 'set':
                        var isLocked = targetLocked[action.target],
                            $texts = $target.find("input:text,textarea,input[type='email']"),
                            $selects = $target.find('select,select option,input:radio,input:checkbox'),
                            $markups = $target.filter('.webform-component-markup');
                        if (actionResult) {
                            var multiple = $.map(action.argument.split(','), $.trim);
                            $selects.webformVal(multiple);
                            $texts.val([action.argument]);
                            $markups.html(action.argument)
                        } else $markups.each(function() {
                            var $this = $(this),
                                original = $this.data('webform-markup');
                            if (original !== undefined) $this.html(original)
                        });
                        if (!isLocked) {
                            $selects.webformProp('disabled', actionResult);
                            $texts.webformProp('readonly', actionResult);
                            targetLocked[action.target] = actionResult ? 'set' : false
                        };
                        break
                }
            })
        })
    };
    Drupal.webform.stopEvent = function() {
        return false
    };
    Drupal.webform.conditionalOperatorStringEqual = function(element, existingValue, ruleValue) {
        var returnValue = false,
            currentValue = Drupal.webform.stringValue(element, existingValue);
        $.each(currentValue, function(n, value) {
            if (value.toLowerCase() === ruleValue.toLowerCase()) {
                returnValue = true;
                return false
            }
        });
        return returnValue
    };
    Drupal.webform.conditionalOperatorStringNotEqual = function(element, existingValue, ruleValue) {
        var found = false,
            currentValue = Drupal.webform.stringValue(element, existingValue);
        $.each(currentValue, function(n, value) {
            if (value.toLowerCase() === ruleValue.toLowerCase()) found = true
        });
        return !found
    };
    Drupal.webform.conditionalOperatorStringContains = function(element, existingValue, ruleValue) {
        var returnValue = false,
            currentValue = Drupal.webform.stringValue(element, existingValue);
        $.each(currentValue, function(n, value) {
            if (value.toLowerCase().indexOf(ruleValue.toLowerCase()) > -1) {
                returnValue = true;
                return false
            }
        });
        return returnValue
    };
    Drupal.webform.conditionalOperatorStringDoesNotContain = function(element, existingValue, ruleValue) {
        var found = false,
            currentValue = Drupal.webform.stringValue(element, existingValue);
        $.each(currentValue, function(n, value) {
            if (value.toLowerCase().indexOf(ruleValue.toLowerCase()) > -1) found = true
        });
        return !found
    };
    Drupal.webform.conditionalOperatorStringBeginsWith = function(element, existingValue, ruleValue) {
        var returnValue = false,
            currentValue = Drupal.webform.stringValue(element, existingValue);
        $.each(currentValue, function(n, value) {
            if (value.toLowerCase().indexOf(ruleValue.toLowerCase()) === 0) {
                returnValue = true;
                return false
            }
        });
        return returnValue
    };
    Drupal.webform.conditionalOperatorStringEndsWith = function(element, existingValue, ruleValue) {
        var returnValue = false,
            currentValue = Drupal.webform.stringValue(element, existingValue);
        $.each(currentValue, function(n, value) {
            if (value.toLowerCase().lastIndexOf(ruleValue.toLowerCase()) === value.length - ruleValue.length) {
                returnValue = true;
                return false
            }
        });
        return returnValue
    };
    Drupal.webform.conditionalOperatorStringEmpty = function(element, existingValue, ruleValue) {
        var currentValue = Drupal.webform.stringValue(element, existingValue),
            returnValue = true;
        $.each(currentValue, function(n, value) {
            if (value !== '') {
                returnValue = false;
                return false
            }
        });
        return returnValue
    };
    Drupal.webform.conditionalOperatorStringNotEmpty = function(element, existingValue, ruleValue) {
        return !Drupal.webform.conditionalOperatorStringEmpty(element, existingValue, ruleValue)
    };
    Drupal.webform.conditionalOperatorSelectGreaterThan = function(element, existingValue, ruleValue) {
        var currentValue = Drupal.webform.stringValue(element, existingValue);
        return Drupal.webform.compare_select(currentValue[0], ruleValue, element) > 0
    };
    Drupal.webform.conditionalOperatorSelectGreaterThanEqual = function(element, existingValue, ruleValue) {
        var currentValue = Drupal.webform.stringValue(element, existingValue),
            comparison = Drupal.webform.compare_select(currentValue[0], ruleValue, element);
        return comparison > 0 || comparison === 0
    };
    Drupal.webform.conditionalOperatorSelectLessThan = function(element, existingValue, ruleValue) {
        var currentValue = Drupal.webform.stringValue(element, existingValue);
        return Drupal.webform.compare_select(currentValue[0], ruleValue, element) < 0
    };
    Drupal.webform.conditionalOperatorSelectLessThanEqual = function(element, existingValue, ruleValue) {
        var currentValue = Drupal.webform.stringValue(element, existingValue),
            comparison = Drupal.webform.compare_select(currentValue[0], ruleValue, element);
        return comparison < 0 || comparison === 0
    };
    Drupal.webform.conditionalOperatorNumericEqual = function(element, existingValue, ruleValue) {
        var currentValue = Drupal.webform.stringValue(element, existingValue),
            epsilon = 0.000001;
        return currentValue[0] === '' ? false : (Math.abs(parseFloat(currentValue[0]) - parseFloat(ruleValue)) < epsilon)
    };
    Drupal.webform.conditionalOperatorNumericNotEqual = function(element, existingValue, ruleValue) {
        var currentValue = Drupal.webform.stringValue(element, existingValue),
            epsilon = 0.000001;
        return currentValue[0] === '' ? true : (Math.abs(parseFloat(currentValue[0]) - parseFloat(ruleValue)) >= epsilon)
    };
    Drupal.webform.conditionalOperatorNumericGreaterThan = function(element, existingValue, ruleValue) {
        var currentValue = Drupal.webform.stringValue(element, existingValue);
        return parseFloat(currentValue[0]) > parseFloat(ruleValue)
    };
    Drupal.webform.conditionalOperatorNumericGreaterThanEqual = function(element, existingValue, ruleValue) {
        return Drupal.webform.conditionalOperatorNumericGreaterThan(element, existingValue, ruleValue) || Drupal.webform.conditionalOperatorNumericEqual(element, existingValue, ruleValue)
    };
    Drupal.webform.conditionalOperatorNumericLessThan = function(element, existingValue, ruleValue) {
        var currentValue = Drupal.webform.stringValue(element, existingValue);
        return parseFloat(currentValue[0]) < parseFloat(ruleValue)
    };
    Drupal.webform.conditionalOperatorNumericLessThanEqual = function(element, existingValue, ruleValue) {
        return Drupal.webform.conditionalOperatorNumericLessThan(element, existingValue, ruleValue) || Drupal.webform.conditionalOperatorNumericEqual(element, existingValue, ruleValue)
    };
    Drupal.webform.conditionalOperatorDateEqual = function(element, existingValue, ruleValue) {
        var currentValue = Drupal.webform.dateValue(element, existingValue);
        return currentValue === ruleValue
    };
    Drupal.webform.conditionalOperatorDateNotEqual = function(element, existingValue, ruleValue) {
        return !Drupal.webform.conditionalOperatorDateEqual(element, existingValue, ruleValue)
    };
    Drupal.webform.conditionalOperatorDateBefore = function(element, existingValue, ruleValue) {
        var currentValue = Drupal.webform.dateValue(element, existingValue);
        return (currentValue !== false) && currentValue < ruleValue
    };
    Drupal.webform.conditionalOperatorDateBeforeEqual = function(element, existingValue, ruleValue) {
        var currentValue = Drupal.webform.dateValue(element, existingValue);
        return (currentValue !== false) && (currentValue < ruleValue || currentValue === ruleValue)
    };
    Drupal.webform.conditionalOperatorDateAfter = function(element, existingValue, ruleValue) {
        var currentValue = Drupal.webform.dateValue(element, existingValue);
        return (currentValue !== false) && currentValue > ruleValue
    };
    Drupal.webform.conditionalOperatorDateAfterEqual = function(element, existingValue, ruleValue) {
        var currentValue = Drupal.webform.dateValue(element, existingValue);
        return (currentValue !== false) && (currentValue > ruleValue || currentValue === ruleValue)
    };
    Drupal.webform.conditionalOperatorTimeEqual = function(element, existingValue, ruleValue) {
        var currentValue = Drupal.webform.timeValue(element, existingValue);
        return currentValue === ruleValue
    };
    Drupal.webform.conditionalOperatorTimeNotEqual = function(element, existingValue, ruleValue) {
        return !Drupal.webform.conditionalOperatorTimeEqual(element, existingValue, ruleValue)
    };
    Drupal.webform.conditionalOperatorTimeBefore = function(element, existingValue, ruleValue) {
        var currentValue = Drupal.webform.timeValue(element, existingValue);
        return (currentValue !== false) && (currentValue < ruleValue)
    };
    Drupal.webform.conditionalOperatorTimeBeforeEqual = function(element, existingValue, ruleValue) {
        var currentValue = Drupal.webform.timeValue(element, existingValue);
        return (currentValue !== false) && (currentValue < ruleValue || currentValue === ruleValue)
    };
    Drupal.webform.conditionalOperatorTimeAfter = function(element, existingValue, ruleValue) {
        var currentValue = Drupal.webform.timeValue(element, existingValue);
        return (currentValue !== false) && (currentValue > ruleValue)
    };
    Drupal.webform.conditionalOperatorTimeAfterEqual = function(element, existingValue, ruleValue) {
        var currentValue = Drupal.webform.timeValue(element, existingValue);
        return (currentValue !== false) && (currentValue > ruleValue || currentValue === ruleValue)
    };
    Drupal.webform.compare_select = function(a, b, element) {
        var optionList = [];
        $('option,input:radio,input:checkbox', element).each(function() {
            optionList.push($(this).val())
        });
        var a_position = optionList.indexOf(a),
            b_position = optionList.indexOf(b);
        return (a_position < 0 || b_position < 0) ? null : a_position - b_position
    };
    Drupal.webform.isVisible = function($element) {
        return $element.hasClass('webform-component-hidden') ? !$element.find('input').first().hasClass('webform-conditional-disabled') : $element.closest('.webform-conditional-hidden').length == 0
    };
    Drupal.webform.stringValue = function(element, existingValue) {
        var value = [];
        if (element) {
            var $element = $(element);
            if (Drupal.webform.isVisible($element)) {
                $element.find('input[type=checkbox]:checked,input[type=radio]:checked').each(function() {
                    value.push(this.value)
                });
                if (!value.length) {
                    var selectValue = $element.find('select').val();
                    if (selectValue)
                        if ($.isArray(selectValue)) {
                            value = selectValue
                        } else value.push(selectValue)
                };
                if (!value.length) $element.find('input:not([type=checkbox],[type=radio]),textarea').each(function() {
                    value.push(this.value)
                })
            }
        } else switch ($.type(existingValue)) {
            case 'array':
                value = existingValue;
                break;
            case 'string':
                value.push(existingValue);
                break
        };
        return value
    };
    Drupal.webform.dateValue = function(element, existingValue) {
        var value = false;
        if (element) {
            var $element = $(element);
            if (Drupal.webform.isVisible($element)) {
                var day = $element.find('[name*=day]').val(),
                    month = $element.find('[name*=month]').val(),
                    year = $element.find('[name*=year]').val();
                if (month) month--;
                if (year !== '' && month !== '' && day !== '') value = Date.UTC(year, month, day) / 1e3
            }
        } else {
            if ($.type(existingValue) === 'array' && existingValue.length) existingValue = existingValue[0];
            if ($.type(existingValue) === 'string') existingValue = existingValue.split('-');
            if (existingValue.length === 3) value = Date.UTC(existingValue[0], existingValue[1], existingValue[2]) / 1e3
        };
        return value
    };
    Drupal.webform.timeValue = function(element, existingValue) {
        var value = false;
        if (element) {
            var $element = $(element);
            if (Drupal.webform.isVisible($element)) {
                var hour = $element.find('[name*=hour]').val(),
                    minute = $element.find('[name*=minute]').val(),
                    ampm = $element.find('[name*=ampm]:checked').val();
                hour = (hour === '') ? hour : parseInt(hour);
                minute = (minute === '') ? minute : parseInt(minute);
                if (hour !== '') {
                    hour = (hour < 12 && ampm == 'pm') ? hour + 12 : hour;
                    hour = (hour === 12 && ampm == 'am') ? 0 : hour
                };
                if (hour !== '' && minute !== '') value = Date.UTC(1970, 0, 1, hour, minute) / 1e3
            }
        } else {
            if ($.type(existingValue) === 'array' && existingValue.length) existingValue = existingValue[0];
            if ($.type(existingValue) === 'string') existingValue = existingValue.split(':');
            if (existingValue.length >= 2) value = Date.UTC(1970, 0, 1, existingValue[0], existingValue[1]) / 1e3
        };
        return value
    };
    $.fn.webformProp = $.fn.webformProp || function(name, value) {
        if (value) {
            return $.fn.prop ? this.prop(name, true) : this.attr(name, true)
        } else return $.fn.prop ? this.prop(name, false) : this.removeAttr(name)
    };
    $.fn.webformVal = function(values) {
        this.each(function() {
            var $this = $(this),
                value = $this.val(),
                on = $.inArray($this.val(), values) != -1;
            if (this.nodeName == 'OPTION') {
                $this.webformProp('selected', on ? value : false)
            } else $this.val(on ? [value] : false)
        });
        return this
    };
    Drupal.webform.restripeTable = function(table) {
        $('> tbody > tr, > tr', table).filter(':visible:odd').filter('.odd').removeClass('odd').addClass('even').end().end().filter(':visible:even').filter('.even').removeClass('even').addClass('odd')
    }
})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.prestashop.com/sites/all/modules/contrib/webform/js/webform.js. */