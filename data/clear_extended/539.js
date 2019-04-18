/* @preserve
 * jQuery JavaScript Library v1.11.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:19Z
 */
! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(h, e) {
    var f = [],
        c = f.slice,
        m = f.concat,
        s = f.push,
        i = f.indexOf,
        n = {},
        t = n.toString,
        g = n.hasOwnProperty,
        v = {},
        r = "1.11.3",
        C = function(e, t) {
            return new C.fn.init(e, t)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        a = /^-ms-/,
        u = /-([\da-z])/gi,
        l = function(e, t) {
            return t.toUpperCase()
        };

    function d(e) {
        var t = "length" in e && e.length,
            n = C.type(e);
        if ("function" === n || C.isWindow(e)) return !1;
        if (1 === e.nodeType && t) return !0;
        return "array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e
    }
    C.fn = C.prototype = {
        jquery: r,
        constructor: C,
        selector: "",
        length: 0,
        toArray: function() {
            return c.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
        },
        pushStack: function(e) {
            var t = C.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return C.each(this, e, t)
        },
        map: function(n) {
            return this.pushStack(C.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(c.apply(this, arguments))
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
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: s,
        sort: f.sort,
        splice: f.splice
    }, C.extend = C.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || C.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (i = arguments[s]))
                for (r in i) {
                    if (e = a[r], a === (n = i[r])) continue;
                    l && n && (C.isPlainObject(n) || (t = C.isArray(n))) ? (t ? (t = !1, o = e && C.isArray(e) ? e : []) : o = e && C.isPlainObject(e) ? e : {}, a[r] = C.extend(l, o, n)) : void 0 !== n && (a[r] = n)
                }
        return a
    }, C.extend({
        expando: "jQuery" + (r + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === C.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === C.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !C.isArray(e) && 0 <= e - parseFloat(e) + 1
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== C.type(e) || e.nodeType || C.isWindow(e)) return !1;
            try {
                if (e.constructor && !g.call(e, "constructor") && !g.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (v.ownLast)
                for (t in e) return g.call(e, t);
            for (t in e);
            return void 0 === t || g.call(e, t)
        },
        type: function(e) {
            if (null == e) return e + "";
            return "object" == typeof e || "function" == typeof e ? n[t.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            e && C.trim(e) && (h.execScript || function(e) {
                h.eval.call(h, e)
            })(e)
        },
        camelCase: function(e) {
            return e.replace(a, "ms-").replace(u, l)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r = 0,
                i = e.length,
                o = d(e);
            if (n) {
                if (o)
                    for (; r < i && !1 !== t.apply(e[r], n); r++);
                else
                    for (r in e)
                        if (!1 === t.apply(e[r], n)) break
            } else if (o)
                for (; r < i && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(o, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (i) return i.call(t, e, n);
                for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n;) e[i++] = t[r++];
            if (n != n)
                for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = [];
            if (d(e))
                for (; i < o; i++) null != (r = t(e[i], i, n)) && a.push(r);
            else
                for (i in e) null != (r = t(e[i], i, n)) && a.push(r);
            return m.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (i = e[t], t = e, e = i), !C.isFunction(e)) return;
            return n = c.call(arguments, 2), (r = function() {
                return e.apply(t || this, n.concat(c.call(arguments)))
            }).guid = e.guid = e.guid || C.guid++, r
        },
        now: function() {
            return +new Date
        },
        support: v
    }), C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p =
        /* @preserve
         * Sizzle CSS Selector Engine v2.2.0-pre
         * http://sizzlejs.com/
         *
         * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2014-12-16
         */
        function(n) {
            var e, h, x, o, r, m, f, g, w, l, c, v, T, i, y, b, a, s, C, N = "sizzle" + 1 * new Date,
                E = n.document,
                k = 0,
                d = 0,
                u = oe(),
                p = oe(),
                S = oe(),
                j = function(e, t) {
                    return e === t && (c = !0), 0
                },
                A = {}.hasOwnProperty,
                t = [],
                D = t.pop,
                L = t.push,
                H = t.push,
                _ = t.slice,
                q = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                O = "[\\x20\\t\\r\\n\\f]",
                F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                B = F.replace("w", "w#"),
                P = "\\[" + O + "*(" + F + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + O + "*\\]",
                R = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
                W = new RegExp(O + "+", "g"),
                $ = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
                z = new RegExp("^" + O + "*," + O + "*"),
                I = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
                X = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
                Q = new RegExp(R),
                U = new RegExp("^" + B + "$"),
                J = {
                    ID: new RegExp("^#(" + F + ")"),
                    CLASS: new RegExp("^\\.(" + F + ")"),
                    TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + P),
                    PSEUDO: new RegExp("^" + R),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + M + ")$", "i"),
                    needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
                },
                V = /^(?:input|select|textarea|button)$/i,
                Y = /^h\d$/i,
                G = /^[^{]+\{\s*\[native \w/,
                K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Z = /[+~]/,
                ee = /'|\\/g,
                te = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
                ne = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                re = function() {
                    v()
                };
            try {
                H.apply(t = _.call(E.childNodes), E.childNodes), t[E.childNodes.length].nodeType
            } catch (e) {
                H = {
                    apply: t.length ? function(e, t) {
                        L.apply(e, _.call(t))
                    } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }

            function ie(e, t, n, r) {
                var i, o, a, s, u, l, c, f, d, p;
                if ((t ? t.ownerDocument || t : E) !== T && v(t), n = n || [], s = (t = t || T).nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
                if (!r && y) {
                    if (11 !== s && (i = K.exec(e)))
                        if (a = i[1]) {
                            if (9 === s) {
                                if (!(o = t.getElementById(a)) || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && C(t, o) && o.id === a) return n.push(o), n
                        } else {
                            if (i[2]) return H.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = i[3]) && h.getElementsByClassName) return H.apply(n, t.getElementsByClassName(a)), n
                        } if (h.qsa && (!b || !b.test(e))) {
                        if (f = c = N, d = t, p = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (l = m(e), (c = t.getAttribute("id")) ? f = c.replace(ee, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", u = l.length; u--;) l[u] = f + me(l[u]);
                            d = Z.test(e) && pe(t.parentNode) || t, p = l.join(",")
                        }
                        if (p) try {
                            return H.apply(n, d.querySelectorAll(p)), n
                        } catch (e) {} finally {
                            c || t.removeAttribute("id")
                        }
                    }
                }
                return g(e.replace($, "$1"), t, n, r)
            }

            function oe() {
                var r = [];
                return function e(t, n) {
                    return r.push(t + " ") > x.cacheLength && delete e[r.shift()], e[t + " "] = n
                }
            }

            function ae(e) {
                return e[N] = !0, e
            }

            function se(e) {
                var t = T.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function ue(e, t) {
                for (var n = e.split("|"), r = e.length; r--;) x.attrHandle[n[r]] = t
            }

            function le(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function ce(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function fe(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }

            function de(a) {
                return ae(function(o) {
                    return o = +o, ae(function(e, t) {
                        for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                    })
                })
            }

            function pe(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (e in h = ie.support = {}, r = ie.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, v = ie.setDocument = function(e) {
                    var t, n, u = e ? e.ownerDocument || e : E;
                    if (u === T || 9 !== u.nodeType || !u.documentElement) return T;
                    return i = (T = u).documentElement, (n = u.defaultView) && n !== n.top && (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)), y = !r(u), h.attributes = se(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), h.getElementsByTagName = se(function(e) {
                        return e.appendChild(u.createComment("")), !e.getElementsByTagName("*").length
                    }), h.getElementsByClassName = G.test(u.getElementsByClassName), h.getById = se(function(e) {
                        return i.appendChild(e).id = N, !u.getElementsByName || !u.getElementsByName(N).length
                    }), h.getById ? (x.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && y) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, x.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete x.find.ID, x.filter.ID = function(e) {
                        var n = e.replace(te, ne);
                        return function(e) {
                            var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return t && t.value === n
                        }
                    }), x.find.TAG = h.getElementsByTagName ? function(e, t) {
                        if (void 0 !== t.getElementsByTagName) return t.getElementsByTagName(e);
                        if (h.qsa) return t.querySelectorAll(e)
                    } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, x.find.CLASS = h.getElementsByClassName && function(e, t) {
                        if (y) return t.getElementsByClassName(e)
                    }, a = [], b = [], (h.qsa = G.test(u.querySelectorAll)) && (se(function(e) {
                        i.appendChild(e).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && b.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || b.push("\\[" + O + "*(?:value|" + M + ")"), e.querySelectorAll("[id~=" + N + "-]").length || b.push("~="), e.querySelectorAll(":checked").length || b.push(":checked"), e.querySelectorAll("a#" + N + "+*").length || b.push(".#.+[+~]")
                    }), se(function(e) {
                        var t = u.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && b.push("name" + O + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || b.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), b.push(",.*:")
                    })), (h.matchesSelector = G.test(s = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.oMatchesSelector || i.msMatchesSelector)) && se(function(e) {
                        h.disconnectedMatch = s.call(e, "div"), s.call(e, "[s!='']:x"), a.push("!=", R)
                    }), b = b.length && new RegExp(b.join("|")), a = a.length && new RegExp(a.join("|")), t = G.test(i.compareDocumentPosition), C = t || G.test(i.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, j = t ? function(e, t) {
                        if (e === t) return c = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        if (n) return n;
                        if (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n) {
                            if (e === u || e.ownerDocument === E && C(E, e)) return -1;
                            if (t === u || t.ownerDocument === E && C(E, t)) return 1;
                            return l ? q(l, e) - q(l, t) : 0
                        }
                        return 4 & n ? -1 : 1
                    } : function(e, t) {
                        if (e === t) return c = !0, 0;
                        var n, r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            s = [t];
                        if (!i || !o) return e === u ? -1 : t === u ? 1 : i ? -1 : o ? 1 : l ? q(l, e) - q(l, t) : 0;
                        if (i === o) return le(e, t);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (; a[r] === s[r];) r++;
                        return r ? le(a[r], s[r]) : a[r] === E ? -1 : s[r] === E ? 1 : 0
                    }, u
                }, ie.matches = function(e, t) {
                    return ie(e, null, null, t)
                }, ie.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== T && v(e), t = t.replace(X, "='$1']"), h.matchesSelector && y && (!a || !a.test(t)) && (!b || !b.test(t))) try {
                        var n = s.call(e, t);
                        if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                    } catch (e) {}
                    return 0 < ie(t, T, null, [e]).length
                }, ie.contains = function(e, t) {
                    return (e.ownerDocument || e) !== T && v(e), C(e, t)
                }, ie.attr = function(e, t) {
                    (e.ownerDocument || e) !== T && v(e);
                    var n = x.attrHandle[t.toLowerCase()],
                        r = n && A.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !y) : void 0;
                    return void 0 !== r ? r : h.attributes || !y ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, ie.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, ie.uniqueSort = function(e) {
                    var t, n = [],
                        r = 0,
                        i = 0;
                    if (c = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(j), c) {
                        for (; t = e[i++];) t === e[i] && (r = n.push(i));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return l = null, e
                }, o = ie.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                        } else if (3 === i || 4 === i) return e.nodeValue
                    } else
                        for (; t = e[r++];) n += o(t);
                    return n
                }, (x = ie.selectors = {
                    cacheLength: 50,
                    createPseudo: ae,
                    match: J,
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
                            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            if (J.CHILD.test(e[0])) return null;
                            return e[3] ? e[2] = e[4] || e[5] || "" : n && Q.test(n) && (t = m(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = u[e + " "];
                            return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && u(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(n, r, i) {
                            return function(e) {
                                var t = ie.attr(e, n);
                                if (null == t) return "!=" === r;
                                if (!r) return !0;
                                return t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(W, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")
                            }
                        },
                        CHILD: function(p, e, t, h, m) {
                            var g = "nth" !== p.slice(0, 3),
                                v = "last" !== p.slice(-4),
                                y = "of-type" === e;
                            return 1 === h && 0 === m ? function(e) {
                                return !!e.parentNode
                            } : function(e, t, n) {
                                var r, i, o, a, s, u, l = g !== v ? "nextSibling" : "previousSibling",
                                    c = e.parentNode,
                                    f = y && e.nodeName.toLowerCase(),
                                    d = !n && !y;
                                if (c) {
                                    if (g) {
                                        for (; l;) {
                                            for (o = e; o = o[l];)
                                                if (y ? o.nodeName.toLowerCase() === f : 1 === o.nodeType) return !1;
                                            u = l = "only" === p && !u && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (u = [v ? c.firstChild : c.lastChild], v && d) {
                                        for (s = (r = (i = c[N] || (c[N] = {}))[p] || [])[0] === k && r[1], a = r[0] === k && r[2], o = s && c.childNodes[s]; o = ++s && o && o[l] || (a = s = 0) || u.pop();)
                                            if (1 === o.nodeType && ++a && o === e) {
                                                i[p] = [k, s, a];
                                                break
                                            }
                                    } else if (d && (r = (e[N] || (e[N] = {}))[p]) && r[0] === k) a = r[1];
                                    else
                                        for (;
                                            (o = ++s && o && o[l] || (a = s = 0) || u.pop()) && ((y ? o.nodeName.toLowerCase() !== f : 1 !== o.nodeType) || !++a || (d && ((o[N] || (o[N] = {}))[p] = [k, a]), o !== e)););
                                    return (a -= m) === h || a % h == 0 && 0 <= a / h
                                }
                            }
                        },
                        PSEUDO: function(e, o) {
                            var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                            if (a[N]) return a(o);
                            if (1 < a.length) return t = [e, e, "", o], x.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, t) {
                                for (var n, r = a(e, o), i = r.length; i--;) e[n = q(e, r[i])] = !(t[n] = r[i])
                            }) : function(e) {
                                return a(e, 0, t)
                            };
                            return a
                        }
                    },
                    pseudos: {
                        not: ae(function(e) {
                            var r = [],
                                i = [],
                                s = f(e.replace($, "$1"));
                            return s[N] ? ae(function(e, t, n, r) {
                                for (var i, o = s(e, null, r, []), a = e.length; a--;)(i = o[a]) && (e[a] = !(t[a] = i))
                            }) : function(e, t, n) {
                                return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                            }
                        }),
                        has: ae(function(t) {
                            return function(e) {
                                return 0 < ie(t, e).length
                            }
                        }),
                        contains: ae(function(t) {
                            return t = t.replace(te, ne),
                                function(e) {
                                    return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                                }
                        }),
                        lang: ae(function(n) {
                            return U.test(n || "") || ie.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                                function(e) {
                                    var t;
                                    do {
                                        if (t = y ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var t = n.location && n.location.hash;
                            return t && t.slice(1) === e.id
                        },
                        root: function(e) {
                            return e === i
                        },
                        focus: function(e) {
                            return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
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
                            return !x.pseudos.empty(e)
                        },
                        header: function(e) {
                            return Y.test(e.nodeName)
                        },
                        input: function(e) {
                            return V.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: de(function() {
                            return [0]
                        }),
                        last: de(function(e, t) {
                            return [t - 1]
                        }),
                        eq: de(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: de(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: de(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: de(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                            return e
                        }),
                        gt: de(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }).pseudos.nth = x.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) x.pseudos[e] = ce(e);
            for (e in {
                    submit: !0,
                    reset: !0
                }) x.pseudos[e] = fe(e);

            function he() {}

            function me(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r
            }

            function ge(a, e, t) {
                var s = e.dir,
                    u = t && "parentNode" === s,
                    l = d++;
                return e.first ? function(e, t, n) {
                    for (; e = e[s];)
                        if (1 === e.nodeType || u) return a(e, t, n)
                } : function(e, t, n) {
                    var r, i, o = [k, l];
                    if (n) {
                        for (; e = e[s];)
                            if ((1 === e.nodeType || u) && a(e, t, n)) return !0
                    } else
                        for (; e = e[s];)
                            if (1 === e.nodeType || u) {
                                if ((r = (i = e[N] || (e[N] = {}))[s]) && r[0] === k && r[1] === l) return o[2] = r[2];
                                if ((i[s] = o)[2] = a(e, t, n)) return !0
                            }
                }
            }

            function ve(i) {
                return 1 < i.length ? function(e, t, n) {
                    for (var r = i.length; r--;)
                        if (!i[r](e, t, n)) return !1;
                    return !0
                } : i[0]
            }

            function ye(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                return a
            }

            function be(p, h, m, g, v, e) {
                return g && !g[N] && (g = be(g)), v && !v[N] && (v = be(v, e)), ae(function(e, t, n, r) {
                    var i, o, a, s = [],
                        u = [],
                        l = t.length,
                        c = e || function(e, t, n) {
                            for (var r = 0, i = t.length; r < i; r++) ie(e, t[r], n);
                            return n
                        }(h || "*", n.nodeType ? [n] : n, []),
                        f = !p || !e && h ? c : ye(c, s, p, n, r),
                        d = m ? v || (e ? p : l || g) ? [] : t : f;
                    if (m && m(f, d, n, r), g)
                        for (i = ye(d, u), g(i, [], n, r), o = i.length; o--;)(a = i[o]) && (d[u[o]] = !(f[u[o]] = a));
                    if (e) {
                        if (v || p) {
                            if (v) {
                                for (i = [], o = d.length; o--;)(a = d[o]) && i.push(f[o] = a);
                                v(null, d = [], i, r)
                            }
                            for (o = d.length; o--;)(a = d[o]) && -1 < (i = v ? q(e, a) : s[o]) && (e[i] = !(t[i] = a))
                        }
                    } else d = ye(d === t ? d.splice(l, d.length) : d), v ? v(null, t, d, r) : H.apply(t, d)
                })
            }

            function xe(e) {
                for (var i, t, n, r = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, u = ge(function(e) {
                        return e === i
                    }, a, !0), l = ge(function(e) {
                        return -1 < q(i, e)
                    }, a, !0), c = [function(e, t, n) {
                        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                        return i = null, r
                    }]; s < r; s++)
                    if (t = x.relative[e[s].type]) c = [ge(ve(c), t)];
                    else {
                        if ((t = x.filter[e[s].type].apply(null, e[s].matches))[N]) {
                            for (n = ++s; n < r && !x.relative[e[n].type]; n++);
                            return be(1 < s && ve(c), 1 < s && me(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace($, "$1"), t, s < n && xe(e.slice(s, n)), n < r && xe(e = e.slice(n)), n < r && me(e))
                        }
                        c.push(t)
                    } return ve(c)
            }
            return he.prototype = x.filters = x.pseudos, x.setFilters = new he, m = ie.tokenize = function(e, t) {
                var n, r, i, o, a, s, u, l = p[e + " "];
                if (l) return t ? 0 : l.slice(0);
                for (a = e, s = [], u = x.preFilter; a;) {
                    for (o in n && !(r = z.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = I.exec(a)) && (n = r.shift(), i.push({
                            value: n,
                            type: r[0].replace($, " ")
                        }), a = a.slice(n.length)), x.filter) !(r = J[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                        value: n,
                        type: o,
                        matches: r
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return t ? a.length : a ? ie.error(e) : p(e, s).slice(0)
            }, f = ie.compile = function(e, t) {
                var n, g, v, y, b, r, i = [],
                    o = [],
                    a = S[e + " "];
                if (!a) {
                    for (t || (t = m(e)), n = t.length; n--;)(a = xe(t[n]))[N] ? i.push(a) : o.push(a);
                    (a = S(e, (g = o, y = 0 < (v = i).length, b = 0 < g.length, r = function(e, t, n, r, i) {
                        var o, a, s, u = 0,
                            l = "0",
                            c = e && [],
                            f = [],
                            d = w,
                            p = e || b && x.find.TAG("*", i),
                            h = k += null == d ? 1 : Math.random() || .1,
                            m = p.length;
                        for (i && (w = t !== T && t); l !== m && null != (o = p[l]); l++) {
                            if (b && o) {
                                for (a = 0; s = g[a++];)
                                    if (s(o, t, n)) {
                                        r.push(o);
                                        break
                                    } i && (k = h)
                            }
                            y && ((o = !s && o) && u--, e && c.push(o))
                        }
                        if (u += l, y && l !== u) {
                            for (a = 0; s = v[a++];) s(c, f, t, n);
                            if (e) {
                                if (0 < u)
                                    for (; l--;) c[l] || f[l] || (f[l] = D.call(r));
                                f = ye(f)
                            }
                            H.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && ie.uniqueSort(r)
                        }
                        return i && (k = h, w = d), c
                    }, y ? ae(r) : r))).selector = e
                }
                return a
            }, g = ie.select = function(e, t, n, r) {
                var i, o, a, s, u, l = "function" == typeof e && e,
                    c = !r && m(e = l.selector || e);
                if (n = n || [], 1 === c.length) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && h.getById && 9 === t.nodeType && y && x.relative[o[1].type]) {
                        if (!(t = (x.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                        l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (i = J.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !x.relative[s = a.type]);)
                        if ((u = x.find[s]) && (r = u(a.matches[0].replace(te, ne), Z.test(o[0].type) && pe(t.parentNode) || t))) {
                            if (o.splice(i, 1), !(e = r.length && me(o))) return H.apply(n, r), n;
                            break
                        }
                }
                return (l || f(e, c))(r, t, !y, n, Z.test(e) && pe(t.parentNode) || t), n
            }, h.sortStable = N.split("").sort(j).join("") === N, h.detectDuplicates = !!c, v(), h.sortDetached = se(function(e) {
                return 1 & e.compareDocumentPosition(T.createElement("div"))
            }), se(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || ue("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), h.attributes && se(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || ue("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), se(function(e) {
                return null == e.getAttribute("disabled")
            }) || ue(M, function(e, t, n) {
                var r;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), ie
        }(h);
    C.find = p, C.expr = p.selectors, C.expr[":"] = C.expr.pseudos, C.unique = p.uniqueSort, C.text = p.getText, C.isXMLDoc = p.isXML, C.contains = p.contains;
    var y = C.expr.match.needsContext,
        b = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        x = /^.[^:#\[\.,]*$/;

    function w(e, n, r) {
        if (C.isFunction(n)) return C.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        });
        if (n.nodeType) return C.grep(e, function(e) {
            return e === n !== r
        });
        if ("string" == typeof n) {
            if (x.test(n)) return C.filter(n, e, r);
            n = C.filter(n, e)
        }
        return C.grep(e, function(e) {
            return 0 <= C.inArray(e, n) !== r
        })
    }
    C.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, C.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (C.contains(r[t], this)) return !0
            }));
            for (t = 0; t < i; t++) C.find(e, r[t], n);
            return (n = this.pushStack(1 < i ? C.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(w(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(w(this, e || [], !0))
        },
        is: function(e) {
            return !!w(this, "string" == typeof e && y.test(e) ? C(e) : e || [], !1).length
        }
    });
    var T, N = h.document,
        E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (C.fn.init = function(e, t) {
        var n, r;
        if (!e) return this;
        if ("string" == typeof e) {
            if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : E.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || T).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : N, !0)), b.test(n[1]) && C.isPlainObject(t))
                    for (n in t) C.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            if ((r = N.getElementById(n[2])) && r.parentNode) {
                if (r.id !== n[2]) return T.find(e);
                this.length = 1, this[0] = r
            }
            return this.context = N, this.selector = e, this
        }
        if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
        if (C.isFunction(e)) return void 0 !== T.ready ? T.ready(e) : e(C);
        return void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), C.makeArray(e, this)
    }).prototype = C.fn, T = C(N);
    var k = /^(?:parents|prev(?:Until|All))/,
        S = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function j(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    C.extend({
        dir: function(e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !C(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), C.fn.extend({
        has: function(e) {
            var t, n = C(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (C.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = y.test(e) || "string" != typeof e ? C(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    } return this.pushStack(1 < o.length ? C.unique(o) : o)
        },
        index: function(e) {
            if (!e) return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            if ("string" == typeof e) return C.inArray(this[0], C(e));
            return C.inArray(e.jquery ? e[0] : e, this)
        },
        add: function(e, t) {
            return this.pushStack(C.unique(C.merge(this.get(), C(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), C.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return C.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return C.dir(e, "parentNode", n)
        },
        next: function(e) {
            return j(e, "nextSibling")
        },
        prev: function(e) {
            return j(e, "previousSibling")
        },
        nextAll: function(e) {
            return C.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return C.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return C.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return C.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return C.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return C.sibling(e.firstChild)
        },
        contents: function(e) {
            return C.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : C.merge([], e.childNodes)
        }
    }, function(r, i) {
        C.fn[r] = function(e, t) {
            var n = C.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (S[r] || (n = C.unique(n)), k.test(r) && (n = n.reverse())), this.pushStack(n)
        }
    });
    var A, D = /\S+/g,
        L = {};

    function H() {
        N.addEventListener ? (N.removeEventListener("DOMContentLoaded", _, !1), h.removeEventListener("load", _, !1)) : (N.detachEvent("onreadystatechange", _), h.detachEvent("onload", _))
    }

    function _() {
        (N.addEventListener || "load" === event.type || "complete" === N.readyState) && (H(), C.ready())
    }
    C.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? L[i] || (n = L[e = i] = {}, C.each(e.match(D) || [], function(e, t) {
            n[t] = !0
        }), n) : C.extend({}, i);
        var r, t, o, a, s, u, l = [],
            c = !i.once && [],
            f = function(e) {
                for (t = i.memory && e, o = !0, s = u || 0, u = 0, a = l.length, r = !0; l && s < a; s++)
                    if (!1 === l[s].apply(e[0], e[1]) && i.stopOnFalse) {
                        t = !1;
                        break
                    } r = !1, l && (c ? c.length && f(c.shift()) : t ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var e = l.length;
                        ! function r(e) {
                            C.each(e, function(e, t) {
                                var n = C.type(t);
                                "function" === n ? i.unique && d.has(t) || l.push(t) : t && t.length && "string" !== n && r(t)
                            })
                        }(arguments), r ? a = l.length : t && (u = e, f(t))
                    }
                    return this
                },
                remove: function() {
                    return l && C.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = C.inArray(t, l, n));) l.splice(n, 1), r && (n <= a && a--, n <= s && s--)
                    }), this
                },
                has: function(e) {
                    return e ? -1 < C.inArray(e, l) : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], a = 0, this
                },
                disable: function() {
                    return l = c = t = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = void 0, t || d.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, t) {
                    return !l || o && !c || (t = [e, (t = t || []).slice ? t.slice() : t], r ? c.push(t) : f(t)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return d
    }, C.extend({
        Deferred: function(e) {
            var o = [
                    ["resolve", "done", C.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", C.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", C.Callbacks("memory")]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var i = arguments;
                        return C.Deferred(function(r) {
                            C.each(o, function(e, t) {
                                var n = C.isFunction(i[e]) && i[e];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && C.isFunction(e.promise) ? e.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[t[0] + "With"](this === a ? r.promise() : this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? C.extend(e, a) : a
                    }
                },
                s = {};
            return a.pipe = a.then, C.each(o, function(e, t) {
                var n = t[2],
                    r = t[3];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[1 ^ e][2].disable, o[2][2].lock), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? a : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var i, t, n, r = 0,
                o = c.call(arguments),
                a = o.length,
                s = 1 !== a || e && C.isFunction(e.promise) ? a : 0,
                u = 1 === s ? e : C.Deferred(),
                l = function(t, n, r) {
                    return function(e) {
                        n[t] = this, r[t] = 1 < arguments.length ? c.call(arguments) : e, r === i ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (1 < a)
                for (i = new Array(a), t = new Array(a), n = new Array(a); r < a; r++) o[r] && C.isFunction(o[r].promise) ? o[r].promise().done(l(r, n, o)).fail(u.reject).progress(l(r, t, i)) : --s;
            return s || u.resolveWith(n, o), u.promise()
        }
    }), C.fn.ready = function(e) {
        return C.ready.promise().done(e), this
    }, C.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? C.readyWait++ : C.ready(!0)
        },
        ready: function(e) {
            if (!0 === e ? --C.readyWait : C.isReady) return;
            if (!N.body) return setTimeout(C.ready);
            if ((C.isReady = !0) !== e && 0 < --C.readyWait) return;
            A.resolveWith(N, [C]), C.fn.triggerHandler && (C(N).triggerHandler("ready"), C(N).off("ready"))
        }
    }), C.ready.promise = function(e) {
        if (!A)
            if (A = C.Deferred(), "complete" === N.readyState) setTimeout(C.ready);
            else if (N.addEventListener) N.addEventListener("DOMContentLoaded", _, !1), h.addEventListener("load", _, !1);
        else {
            N.attachEvent("onreadystatechange", _), h.attachEvent("onload", _);
            var n = !1;
            try {
                n = null == h.frameElement && N.documentElement
            } catch (e) {}
            n && n.doScroll && function t() {
                if (!C.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(t, 50)
                    }
                    H(), C.ready()
                }
            }()
        }
        return A.promise(e)
    };
    var q, M = "undefined";
    for (q in C(v)) break;
    v.ownLast = "0" !== q, v.inlineBlockNeedsLayout = !1, C(function() {
            var e, t, n, r;
            if (!(n = N.getElementsByTagName("body")[0]) || !n.style) return;
            t = N.createElement("div"), (r = N.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== M && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", v.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r)
        }),
        function() {
            var e = N.createElement("div");
            if (null == v.deleteExpando) {
                v.deleteExpando = !0;
                try {
                    delete e.test
                } catch (e) {
                    v.deleteExpando = !1
                }
            }
            e = null
        }(), C.acceptData = function(e) {
            var t = C.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
        };
    var O = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        F = /([A-Z])/g;

    function B(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(F, "-$1").toLowerCase();
            if ("string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : O.test(n) ? C.parseJSON(n) : n)
                } catch (e) {}
                C.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function P(e) {
        var t;
        for (t in e) {
            if ("data" === t && C.isEmptyObject(e[t])) continue;
            if ("toJSON" !== t) return !1
        }
        return !0
    }

    function R(e, t, n, r) {
        if (!C.acceptData(e)) return;
        var i, o, a = C.expando,
            s = e.nodeType,
            u = s ? C.cache : e,
            l = s ? e[a] : e[a] && a;
        if (!(l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t)) return;
        return l || (l = s ? e[a] = f.pop() || C.guid++ : a), u[l] || (u[l] = s ? {} : {
            toJSON: C.noop
        }), "object" != typeof t && "function" != typeof t || (r ? u[l] = C.extend(u[l], t) : u[l].data = C.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[C.camelCase(t)] = n), "string" == typeof t ? null == (i = o[t]) && (i = o[C.camelCase(t)]) : i = o, i
    }

    function W(e, t, n) {
        if (!C.acceptData(e)) return;
        var r, i, o = e.nodeType,
            a = o ? C.cache : e,
            s = o ? e[C.expando] : C.expando;
        if (!a[s]) return;
        if (t && (r = n ? a[s] : a[s].data)) {
            i = (t = C.isArray(t) ? t.concat(C.map(t, C.camelCase)) : t in r ? [t] : (t = C.camelCase(t)) in r ? [t] : t.split(" ")).length;
            for (; i--;) delete r[t[i]];
            if (n ? !P(r) : !C.isEmptyObject(r)) return
        }
        if (!n && (delete a[s].data, !P(a[s]))) return;
        o ? C.cleanData([e], !0) : v.deleteExpando || a != a.window ? delete a[s] : a[s] = null
    }
    C.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? C.cache[e[C.expando]] : e[C.expando]) && !P(e)
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
        }
    }), C.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = C.data(o), 1 === o.nodeType && !C._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && B(o, r = C.camelCase(r.slice(5)), i[r]);
                    C._data(o, "parsedAttrs", !0)
                }
                return i
            }
            if ("object" == typeof e) return this.each(function() {
                C.data(this, e)
            });
            return 1 < arguments.length ? this.each(function() {
                C.data(this, e, t)
            }) : o ? B(o, e, C.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                C.removeData(this, e)
            })
        }
    }), C.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = C._data(e, t), n && (!r || C.isArray(n) ? r = C._data(e, t, C.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = C.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = C._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                C.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return C._data(e, n) || C._data(e, n, {
                empty: C.Callbacks("once memory").add(function() {
                    C._removeData(e, t + "queue"), C._removeData(e, n)
                })
            })
        }
    }), C.fn.extend({
        queue: function(t, n) {
            var e = 2;
            if ("string" != typeof t && (n = t, t = "fx", e--), arguments.length < e) return C.queue(this[0], t);
            return void 0 === n ? this : this.each(function() {
                var e = C.queue(this, t, n);
                C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                C.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = C.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = C._data(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        z = ["Top", "Right", "Bottom", "Left"],
        I = function(e, t) {
            return e = t || e, "none" === C.css(e, "display") || !C.contains(e.ownerDocument, e)
        },
        X = C.access = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === C.type(n))
                for (s in i = !0, n) C.access(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, C.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(C(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        Q = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = N.createElement("input"),
            t = N.createElement("div"),
            n = N.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", v.leadingWhitespace = 3 === t.firstChild.nodeType, v.tbody = !t.getElementsByTagName("tbody").length, v.htmlSerialize = !!t.getElementsByTagName("link").length, v.html5Clone = "<:nav></:nav>" !== N.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), v.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", v.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, v.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                v.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == v.deleteExpando) {
            v.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                v.deleteExpando = !1
            }
        }
    }(),
    function() {
        var e, t, n = N.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) t = "on" + e, (v[e + "Bubbles"] = t in h) || (n.setAttribute(t, "t;"), v[e + "Bubbles"] = !1 === n.attributes[t].expando);
        n = null
    }();
    var U = /^(?:input|select|textarea)$/i,
        J = /^key/,
        V = /^(?:mouse|pointer|contextmenu)|click/,
        Y = /^(?:focusinfocus|focusoutblur)$/,
        G = /^([^.]*)(?:\.(.+)|)$/;

    function K() {
        return !0
    }

    function Z() {
        return !1
    }

    function ee() {
        try {
            return N.activeElement
        } catch (e) {}
    }

    function te(e) {
        var t = ne.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }
    C.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, m, g = C._data(e);
            if (!g) return;
            for (n.handler && (n = (u = n).handler, i = u.selector), n.guid || (n.guid = C.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || ((c = g.handle = function(e) {
                    return typeof C === M || e && C.event.triggered === e.type ? void 0 : C.event.dispatch.apply(c.elem, arguments)
                }).elem = e), s = (t = (t || "").match(D) || [""]).length; s--;) {
                if (p = m = (o = G.exec(t[s]) || [])[1], h = (o[2] || "").split(".").sort(), !p) continue;
                l = C.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, l = C.event.special[p] || {}, f = C.extend({
                    type: p,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && C.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, u), (d = a[p]) || ((d = a[p] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(e, r, h, c) || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), C.event.global[p] = !0
            }
            e = null
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, m, g = C.hasData(e) && C._data(e);
            if (!g || !(c = g.events)) return;
            for (l = (t = (t || "").match(D) || [""]).length; l--;) {
                if (p = m = (s = G.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), !p) {
                    for (p in c) C.event.remove(e, p + t[l], n, r, !0);
                    continue
                }
                for (f = C.event.special[p] || {}, d = c[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = d.length; o--;) a = d[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
                u && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || C.removeEvent(e, p, g.handle), delete c[p])
            }
            C.isEmptyObject(c) && (delete g.handle, C._removeData(e, "events"))
        },
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f = [n || N],
                d = g.call(e, "type") ? e.type : e,
                p = g.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = l = n = n || N, 3 === n.nodeType || 8 === n.nodeType) return;
            if (Y.test(d + C.event.triggered)) return;
            if (0 <= d.indexOf(".") && (d = (p = d.split(".")).shift(), p.sort()), o = d.indexOf(":") < 0 && "on" + d, (e = e[C.expando] ? e : new C.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), u = C.event.special[d] || {}, !r && u.trigger && !1 === u.trigger.apply(n, t)) return;
            if (!r && !u.noBubble && !C.isWindow(n)) {
                for (s = u.delegateType || d, Y.test(s + d) || (a = a.parentNode); a; a = a.parentNode) f.push(a), l = a;
                l === (n.ownerDocument || N) && f.push(l.defaultView || l.parentWindow || h)
            }
            for (c = 0;
                (a = f[c++]) && !e.isPropagationStopped();) e.type = 1 < c ? s : u.bindType || d, (i = (C._data(a, "events") || {})[e.type] && C._data(a, "handle")) && i.apply(a, t), (i = o && a[o]) && i.apply && C.acceptData(a) && (e.result = i.apply(a, t), !1 === e.result && e.preventDefault());
            if (e.type = d, !r && !e.isDefaultPrevented() && (!u._default || !1 === u._default.apply(f.pop(), t)) && C.acceptData(n) && o && n[d] && !C.isWindow(n)) {
                (l = n[o]) && (n[o] = null), C.event.triggered = d;
                try {
                    n[d]()
                } catch (e) {}
                C.event.triggered = void 0, l && (n[o] = l)
            }
            return e.result
        },
        dispatch: function(e) {
            e = C.event.fix(e);
            var t, n, r, i, o, a, s = c.call(arguments),
                u = (C._data(this, "events") || {})[e.type] || [],
                l = C.event.special[e.type] || {};
            if ((s[0] = e).delegateTarget = this, l.preDispatch && !1 === l.preDispatch.call(this, e)) return;
            for (a = C.event.handlers.call(this, e, u), t = 0;
                (i = a[t++]) && !e.isPropagationStopped();)
                for (e.currentTarget = i.elem, o = 0;
                    (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(r.namespace) || (e.handleObj = r, e.data = r.data, void 0 !== (n = ((C.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
            return l.postDispatch && l.postDispatch.call(this, e), e.result
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                        for (i = [], o = 0; o < s; o++) void 0 === i[n = (r = t[o]).selector + " "] && (i[n] = r.needsContext ? 0 <= C(n, this).index(u) : C.find(n, this, null, [u]).length), i[n] && i.push(r);
                        i.length && a.push({
                            elem: u,
                            handlers: i
                        })
                    } return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[C.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = V.test(i) ? this.mouseHooks : J.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new C.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
            return e.target || (e.target = o.srcElement || N), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
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
            filter: function(e, t) {
                var n, r, i, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = (r = e.target.ownerDocument || N).documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ee() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === ee() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (C.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(e) {
                    return C.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = C.extend(new C.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? C.event.trigger(i, null, t) : C.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, C.removeEvent = N.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === M && (e[r] = null), e.detachEvent(r, n))
    }, C.Event = function(e, t) {
        if (!(this instanceof C.Event)) return new C.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? K : Z) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || C.now(), this[C.expando] = !0
    }, C.Event.prototype = {
        isDefaultPrevented: Z,
        isPropagationStopped: Z,
        isImmediatePropagationStopped: Z,
        preventDefault: function() {
            var e = this.originalEvent;
            if (this.isDefaultPrevented = K, !e) return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            if (this.isPropagationStopped = K, !e) return;
            e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = K, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        C.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || C.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), v.submitBubbles || (C.event.special.submit = {
        setup: function() {
            if (C.nodeName(this, "form")) return !1;
            C.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = C.nodeName(t, "input") || C.nodeName(t, "button") ? t.form : void 0;
                n && !C._data(n, "submitBubbles") && (C.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), C._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && C.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            if (C.nodeName(this, "form")) return !1;
            C.event.remove(this, "._submit")
        }
    }), v.changeBubbles || (C.event.special.change = {
        setup: function() {
            if (U.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (C.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), C.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), C.event.simulate("change", this, e, !0)
            })), !1;
            C.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                U.test(t.nodeName) && !C._data(t, "changeBubbles") && (C.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || C.event.simulate("change", this.parentNode, e, !0)
                }), C._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return C.event.remove(this, "._change"), !U.test(this.nodeName)
        }
    }), v.focusinBubbles || C.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            C.event.simulate(r, e.target, C.event.fix(e), !0)
        };
        C.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = C._data(e, r);
                t || e.addEventListener(n, i, !0), C._data(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = C._data(e, r) - 1;
                t ? C._data(e, r, t) : (e.removeEventListener(n, i, !0), C._removeData(e, r))
            }
        }
    }), C.fn.extend({
        on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                for (o in "string" != typeof t && (n = n || t, t = void 0), e) this.on(o, t, n, e[o], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), !1 === r) r = Z;
            else if (!r) return this;
            return 1 === i && (a = r, (r = function(e) {
                return C().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = C.guid++)), this.each(function() {
                C.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Z), this.each(function() {
                C.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                C.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return C.event.trigger(e, t, n, !0)
        }
    });
    var ne = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        re = / jQuery\d+="(?:null|\d+)"/g,
        ie = new RegExp("<(?:" + ne + ")[\\s/>]", "i"),
        oe = /^\s+/,
        ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        se = /<([\w:]+)/,
        ue = /<tbody/i,
        le = /<|&#?\w+;/,
        ce = /<(?:script|style|link)/i,
        fe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        de = /^$|\/(?:java|ecma)script/i,
        pe = /^true\/(.*)/,
        he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        me = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: v.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        ge = te(N).appendChild(N.createElement("div"));

    function ve(e, t) {
        var n, r, i = 0,
            o = typeof e.getElementsByTagName !== M ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== M ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || C.nodeName(r, t) ? o.push(r) : C.merge(o, ve(r, t));
        return void 0 === t || t && C.nodeName(e, t) ? C.merge([e], o) : o
    }

    function ye(e) {
        Q.test(e.type) && (e.defaultChecked = e.checked)
    }

    function be(e, t) {
        return C.nodeName(e, "table") && C.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function xe(e) {
        return e.type = (null !== C.find.attr(e, "type")) + "/" + e.type, e
    }

    function we(e) {
        var t = pe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Te(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) C._data(n, "globalEval", !t || C._data(t[r], "globalEval"))
    }

    function Ce(e, t) {
        if (1 !== t.nodeType || !C.hasData(e)) return;
        var n, r, i, o = C._data(e),
            a = C._data(t, o),
            s = o.events;
        if (s)
            for (n in delete a.handle, a.events = {}, s)
                for (r = 0, i = s[n].length; r < i; r++) C.event.add(t, n, s[n][r]);
        a.data && (a.data = C.extend({}, a.data))
    }

    function Ne(e, t) {
        var n, r, i;
        if (1 !== t.nodeType) return;
        if (n = t.nodeName.toLowerCase(), !v.noCloneEvent && t[C.expando]) {
            for (r in (i = C._data(t)).events) C.removeEvent(t, r, i.handle);
            t.removeAttribute(C.expando)
        }
        "script" === n && t.text !== e.text ? (xe(t).text = e.text, we(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), v.html5Clone && e.innerHTML && !C.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Q.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    me.optgroup = me.option, me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td, C.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, u = C.contains(e.ownerDocument, e);
            if (v.html5Clone || C.isXMLDoc(e) || !ie.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ge.innerHTML = e.outerHTML, ge.removeChild(o = ge.firstChild)), !(v.noCloneEvent && v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                for (r = ve(o), s = ve(e), a = 0; null != (i = s[a]); ++a) r[a] && Ne(i, r[a]);
            if (t)
                if (n)
                    for (s = s || ve(e), r = r || ve(o), a = 0; null != (i = s[a]); a++) Ce(i, r[a]);
                else Ce(e, o);
            return 0 < (r = ve(o, "script")).length && Te(r, !u && ve(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, l, c, f = e.length, d = te(t), p = [], h = 0; h < f; h++)
                if ((o = e[h]) || 0 === o)
                    if ("object" === C.type(o)) C.merge(p, o.nodeType ? [o] : o);
                    else if (le.test(o)) {
                for (s = s || d.appendChild(t.createElement("div")), u = (se.exec(o) || ["", ""])[1].toLowerCase(), c = me[u] || me._default, s.innerHTML = c[1] + o.replace(ae, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!v.leadingWhitespace && oe.test(o) && p.push(t.createTextNode(oe.exec(o)[0])), !v.tbody)
                    for (i = (o = "table" !== u || ue.test(o) ? "<table>" !== c[1] || ue.test(o) ? 0 : s : s.firstChild) && o.childNodes.length; i--;) C.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (C.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = d.lastChild
            } else p.push(t.createTextNode(o));
            for (s && d.removeChild(s), v.appendChecked || C.grep(ve(p, "input"), ye), h = 0; o = p[h++];) {
                if (r && -1 !== C.inArray(o, r)) continue;
                if (a = C.contains(o.ownerDocument, o), s = ve(d.appendChild(o), "script"), a && Te(s), n)
                    for (i = 0; o = s[i++];) de.test(o.type || "") && n.push(o)
            }
            return s = null, d
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = C.expando, u = C.cache, l = v.deleteExpando, c = C.event.special; null != (n = e[a]); a++)
                if ((t || C.acceptData(n)) && (o = (i = n[s]) && u[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? C.event.remove(n, r) : C.removeEvent(n, r, o.handle);
                    u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== M ? n.removeAttribute(s) : n[s] = null, f.push(i))
                }
        }
    }), C.fn.extend({
        text: function(e) {
            return X(this, function(e) {
                return void 0 === e ? C.text(this) : this.empty().append((this[0] && this[0].ownerDocument || N).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || be(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = be(this, e);
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
            for (var n, r = e ? C.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || C.cleanData(ve(n)), n.parentNode && (t && C.contains(n.ownerDocument, n) && Te(ve(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && C.cleanData(ve(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && C.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return C.clone(this, e, t)
            })
        },
        html: function(e) {
            return X(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(re, "") : void 0;
                if ("string" == typeof e && !ce.test(e) && (v.htmlSerialize || !ie.test(e)) && (v.leadingWhitespace || !oe.test(e)) && !me[(se.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(ae, "<$1></$2>");
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, C.cleanData(ve(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(n, r) {
            n = m.apply([], n);
            var e, t, i, o, a, s, u = 0,
                l = this.length,
                c = this,
                f = l - 1,
                d = n[0],
                p = C.isFunction(d);
            if (p || 1 < l && "string" == typeof d && !v.checkClone && fe.test(d)) return this.each(function(e) {
                var t = c.eq(e);
                p && (n[0] = d.call(this, e, t.html())), t.domManip(n, r)
            });
            if (l && (e = (s = C.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 1 === s.childNodes.length && (s = e), e)) {
                for (i = (o = C.map(ve(s, "script"), xe)).length; u < l; u++) t = s, u !== f && (t = C.clone(t, !0, !0), i && C.merge(o, ve(t, "script"))), r.call(this[u], t, u);
                if (i)
                    for (a = o[o.length - 1].ownerDocument, C.map(o, we), u = 0; u < i; u++) t = o[u], de.test(t.type || "") && !C._data(t, "globalEval") && C.contains(a, t) && (t.src ? C._evalUrl && C._evalUrl(t.src) : C.globalEval((t.text || t.textContent || t.innerHTML || "").replace(he, "")));
                s = e = null
            }
            return this
        }
    }), C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        C.fn[e] = function(e) {
            for (var t, n = 0, r = [], i = C(e), o = i.length - 1; n <= o; n++) t = n === o ? this : this.clone(!0), C(i[n])[a](t), s.apply(r, t.get());
            return this.pushStack(r)
        }
    });
    var Ee, ke, Se = {};

    function je(e, t) {
        var n, r = C(t.createElement(e)).appendTo(t.body),
            i = h.getDefaultComputedStyle && (n = h.getDefaultComputedStyle(r[0])) ? n.display : C.css(r[0], "display");
        return r.detach(), i
    }

    function Ae(e) {
        var t = N,
            n = Se[e];
        return n || ("none" !== (n = je(e, t)) && n || ((t = ((Ee = (Ee || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Ee[0].contentDocument).document).write(), t.close(), n = je(e, t), Ee.detach()), Se[e] = n), n
    }
    v.shrinkWrapBlocks = function() {
        if (null != ke) return ke;
        var e, t, n;
        if (ke = !1, !(t = N.getElementsByTagName("body")[0]) || !t.style) return;
        return e = N.createElement("div"), (n = N.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), typeof e.style.zoom !== M && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(N.createElement("div")).style.width = "5px", ke = 3 !== e.offsetWidth), t.removeChild(n), ke
    };
    var De, Le, He = /^margin/,
        _e = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
        qe = /^(top|right|bottom|left)$/;

    function Me(t, n) {
        return {
            get: function() {
                var e = t();
                if (null == e) return;
                if (e) return void delete this.get;
                return (this.get = n).apply(this, arguments)
            }
        }
    }
    h.getComputedStyle ? (De = function(e) {
            if (e.ownerDocument.defaultView.opener) return e.ownerDocument.defaultView.getComputedStyle(e, null);
            return h.getComputedStyle(e, null)
        }, Le = function(e, t, n) {
            var r, i, o, a, s = e.style;
            return a = (n = n || De(e)) ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || C.contains(e.ownerDocument, e) || (a = C.style(e, t)), _e.test(a) && He.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
        }) : N.documentElement.currentStyle && (De = function(e) {
            return e.currentStyle
        }, Le = function(e, t, n) {
            var r, i, o, a, s = e.style;
            return null == (a = (n = n || De(e)) ? n[t] : void 0) && s && s[t] && (a = s[t]), _e.test(a) && !qe.test(t) && (r = s.left, (o = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
        }),
        function() {
            var e, t, n, i, o, a, s;
            if ((e = N.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", !(t = (n = e.getElementsByTagName("a")[0]) && n.style)) return;

            function r() {
                var e, t, n, r;
                if (!(t = N.getElementsByTagName("body")[0]) || !t.style) return;
                e = N.createElement("div"), (n = N.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", i = o = !1, s = !0, h.getComputedStyle && (i = "1%" !== (h.getComputedStyle(e, null) || {}).top, o = "4px" === (h.getComputedStyle(e, null) || {
                    width: "4px"
                }).width, (r = e.appendChild(N.createElement("div"))).style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", s = !parseFloat((h.getComputedStyle(r, null) || {}).marginRight), e.removeChild(r)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (r = e.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === r[0].offsetHeight) && (r[0].style.display = "", r[1].style.display = "none", a = 0 === r[0].offsetHeight), t.removeChild(n)
            }
            t.cssText = "float:left;opacity:.5", v.opacity = "0.5" === t.opacity, v.cssFloat = !!t.cssFloat, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === e.style.backgroundClip, v.boxSizing = "" === t.boxSizing || "" === t.MozBoxSizing || "" === t.WebkitBoxSizing, C.extend(v, {
                reliableHiddenOffsets: function() {
                    return null == a && r(), a
                },
                boxSizingReliable: function() {
                    return null == o && r(), o
                },
                pixelPosition: function() {
                    return null == i && r(), i
                },
                reliableMarginRight: function() {
                    return null == s && r(), s
                }
            })
        }(), C.swap = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
            return i
        };
    var Oe = /alpha\([^)]*\)/i,
        Fe = /opacity\s*=\s*([^)]*)/,
        Be = /^(none|table(?!-c[ea]).+)/,
        Pe = new RegExp("^(" + $ + ")(.*)$", "i"),
        Re = new RegExp("^([+-])=(" + $ + ")", "i"),
        We = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $e = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ze = ["Webkit", "O", "Moz", "ms"];

    function Ie(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = ze.length; i--;)
            if ((t = ze[i] + n) in e) return t;
        return r
    }

    function Xe(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) {
            if (!(r = e[a]).style) continue;
            o[a] = C._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && I(r) && (o[a] = C._data(r, "olddisplay", Ae(r.nodeName)))) : (i = I(r), (n && "none" !== n || !i) && C._data(r, "olddisplay", i ? n : C.css(r, "display")))
        }
        for (a = 0; a < s; a++) {
            if (!(r = e[a]).style) continue;
            t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none")
        }
        return e
    }

    function Qe(e, t, n) {
        var r = Pe.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function Ue(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += C.css(e, n + z[o], !0, i)), r ? ("content" === n && (a -= C.css(e, "padding" + z[o], !0, i)), "margin" !== n && (a -= C.css(e, "border" + z[o] + "Width", !0, i))) : (a += C.css(e, "padding" + z[o], !0, i), "padding" !== n && (a += C.css(e, "border" + z[o] + "Width", !0, i)));
        return a
    }

    function Je(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = De(e),
            a = v.boxSizing && "border-box" === C.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = Le(e, t, o)) < 0 || null == i) && (i = e.style[t]), _e.test(i)) return i;
            r = a && (v.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + Ue(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function Ve(e, t, n, r, i) {
        return new Ve.prototype.init(e, t, n, r, i)
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Le(e, "opacity");
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
            float: v.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (!e || 3 === e.nodeType || 8 === e.nodeType || !e.style) return;
            var i, o, a, s = C.camelCase(t),
                u = e.style;
            if (t = C.cssProps[s] || (C.cssProps[s] = Ie(u, s)), a = C.cssHooks[t] || C.cssHooks[s], void 0 === n) {
                if (a && "get" in a && void 0 !== (i = a.get(e, !1, r))) return i;
                return u[t]
            }
            if ("string" === (o = typeof n) && (i = Re.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(C.css(e, t)), o = "number"), null == n || n != n) return;
            if ("number" !== o || C.cssNumber[s] || (n += "px"), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r)))) try {
                u[t] = n
            } catch (e) {}
        },
        css: function(e, t, n, r) {
            var i, o, a, s = C.camelCase(t);
            if (t = C.cssProps[s] || (C.cssProps[s] = Ie(e.style, s)), (a = C.cssHooks[t] || C.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Le(e, t, r)), "normal" === o && t in $e && (o = $e[t]), "" === n || n) return i = parseFloat(o), !0 === n || C.isNumeric(i) ? i || 0 : o;
            return o
        }
    }), C.each(["height", "width"], function(e, i) {
        C.cssHooks[i] = {
            get: function(e, t, n) {
                if (t) return Be.test(C.css(e, "display")) && 0 === e.offsetWidth ? C.swap(e, We, function() {
                    return Je(e, i, n)
                }) : Je(e, i, n)
            },
            set: function(e, t, n) {
                var r = n && De(e);
                return Qe(0, t, n ? Ue(e, i, n, v.boxSizing && "border-box" === C.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), v.opacity || (C.cssHooks.opacity = {
        get: function(e, t) {
            return Fe.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = C.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            if (((n.zoom = 1) <= t || "" === t) && "" === C.trim(o.replace(Oe, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter)) return;
            n.filter = Oe.test(o) ? o.replace(Oe, i) : o + " " + i
        }
    }), C.cssHooks.marginRight = Me(v.reliableMarginRight, function(e, t) {
        if (t) return C.swap(e, {
            display: "inline-block"
        }, Le, [e, "marginRight"])
    }), C.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        C.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + z[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, He.test(i) || (C.cssHooks[i + o].set = Qe)
    }), C.fn.extend({
        css: function(e, t) {
            return X(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (C.isArray(t)) {
                    for (r = De(e), i = t.length; a < i; a++) o[t[a]] = C.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return Xe(this, !0)
        },
        hide: function() {
            return Xe(this)
        },
        toggle: function(e) {
            if ("boolean" == typeof e) return e ? this.show() : this.hide();
            return this.each(function() {
                I(this) ? C(this).show() : C(this).hide()
            })
        }
    }), ((C.Tween = Ve).prototype = {
        constructor: Ve,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (C.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ve.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ve.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ve.propHooks[this.prop];
            return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ve.propHooks._default.set(this), this
        }
    }).init.prototype = Ve.prototype, (Ve.propHooks = {
        _default: {
            get: function(e) {
                var t;
                if (null != e.elem[e.prop] && (!e.elem.style || null == e.elem.style[e.prop])) return e.elem[e.prop];
                return (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[C.cssProps[e.prop]] || C.cssHooks[e.prop]) ? C.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }).scrollTop = Ve.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, C.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, C.fx = Ve.prototype.init, C.fx.step = {};
    var Ye, Ge, Ke, Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/,
        it = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
        ot = /queueHooks$/,
        at = [function(t, e, n) {
            var r, i, o, a, s, u, l, c = this,
                f = {},
                d = t.style,
                p = t.nodeType && I(t),
                h = C._data(t, "fxshow");
            n.queue || (null == (s = C._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
                s.unqueued || u()
            }), s.unqueued++, c.always(function() {
                c.always(function() {
                    s.unqueued--, C.queue(t, "fx").length || s.empty.fire()
                })
            }));
            1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = C.css(t, "display"), "inline" === ("none" === l ? C._data(t, "olddisplay") || Ae(t.nodeName) : l) && "none" === C.css(t, "float") && (v.inlineBlockNeedsLayout && "inline" !== Ae(t.nodeName) ? d.zoom = 1 : d.display = "inline-block"));
            n.overflow && (d.overflow = "hidden", v.shrinkWrapBlocks() || c.always(function() {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            }));
            for (r in e)
                if (i = e[r], rt.exec(i)) {
                    if (delete e[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
                        if ("show" !== i || !h || void 0 === h[r]) continue;
                        p = !0
                    }
                    f[r] = h && h[r] || C.style(t, r)
                } else l = void 0;
            if (C.isEmptyObject(f)) "inline" === ("none" === l ? Ae(t.nodeName) : l) && (d.display = l);
            else
                for (r in h ? "hidden" in h && (p = h.hidden) : h = C._data(t, "fxshow", {}), o && (h.hidden = !p), p ? C(t).show() : c.done(function() {
                        C(t).hide()
                    }), c.done(function() {
                        var e;
                        for (e in C._removeData(t, "fxshow"), f) C.style(t, e, f[e])
                    }), f) a = ct(p ? h[r] : 0, r, c), r in h || (h[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }],
        st = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = it.exec(t),
                    o = i && i[3] || (C.cssNumber[e] ? "" : "px"),
                    a = (C.cssNumber[e] || "px" !== o && +r) && it.exec(C.css(n.elem, e)),
                    s = 1,
                    u = 20;
                if (a && a[3] !== o)
                    for (o = o || a[3], i = i || [], a = +r || 1; a /= s = s || ".5", C.style(n.elem, e, a + o), s !== (s = n.cur() / r) && 1 !== s && --u;);
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };

    function ut() {
        return setTimeout(function() {
            Ye = void 0
        }), Ye = C.now()
    }

    function lt(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = z[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function ct(e, t, n) {
        for (var r, i = (st[t] || []).concat(st["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ft(o, e, t) {
        var n, a, r = 0,
            i = at.length,
            s = C.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = Ye || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: C.extend({}, e),
                opts: C.extend(!0, {
                    specialEasing: {}
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ye || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = C.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? s.resolveWith(o, [l, e]) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = C.camelCase(n)], o = e[n], C.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = C.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = at[r].call(l, o, c, l.opts)) return n;
        return C.map(c, ct, l), C.isFunction(l.opts.start) && l.opts.start.call(o, l), C.fx.timer(C.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    C.Animation = C.extend(ft, {
        tweener: function(e, t) {
            C.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], st[n] = st[n] || [], st[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? at.unshift(e) : at.push(e)
        }
    }), C.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? C.extend({}, e) : {
            complete: n || !n && t || C.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !C.isFunction(t) && t
        };
        return r.duration = C.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in C.fx.speeds ? C.fx.speeds[r.duration] : C.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            C.isFunction(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
        }, r
    }, C.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(I).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = C.isEmptyObject(t),
                o = C.speed(e, n, r),
                a = function() {
                    var e = ft(this, C.extend({}, t), o);
                    (i || C._data(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = C.timers,
                    r = C._data(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && ot.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || C.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = C._data(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = C.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, C.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), C.each(["toggle", "show", "hide"], function(e, r) {
        var i = C.fn[r];
        C.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }), C.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        C.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), C.timers = [], C.fx.tick = function() {
        var e, t = C.timers,
            n = 0;
        for (Ye = C.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || C.fx.stop(), Ye = void 0
    }, C.fx.timer = function(e) {
        C.timers.push(e), e() ? C.fx.start() : C.timers.pop()
    }, C.fx.interval = 13, C.fx.start = function() {
        Ge || (Ge = setInterval(C.fx.tick, C.fx.interval))
    }, C.fx.stop = function() {
        clearInterval(Ge), Ge = null
    }, C.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, C.fn.delay = function(r, e) {
        return r = C.fx && C.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = setTimeout(e, r);
            t.stop = function() {
                clearTimeout(n)
            }
        })
    }, (Ze = N.createElement("div")).setAttribute("className", "t"), Ze.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", tt = Ze.getElementsByTagName("a")[0], nt = (et = N.createElement("select")).appendChild(N.createElement("option")), Ke = Ze.getElementsByTagName("input")[0], tt.style.cssText = "top:1px", v.getSetAttribute = "t" !== Ze.className, v.style = /top/.test(tt.getAttribute("style")), v.hrefNormalized = "/a" === tt.getAttribute("href"), v.checkOn = !!Ke.value, v.optSelected = nt.selected, v.enctype = !!N.createElement("form").enctype, et.disabled = !0, v.optDisabled = !nt.disabled, (Ke = N.createElement("input")).setAttribute("value", ""), v.input = "" === Ke.getAttribute("value"), Ke.value = "t", Ke.setAttribute("type", "radio"), v.radioValue = "t" === Ke.value;
    var dt = /\r/g;
    C.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            if (!arguments.length) {
                if (t) {
                    if ((r = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value"))) return e;
                    return "string" == typeof(e = t.value) ? e.replace(dt, "") : null == e ? "" : e
                }
                return
            }
            return i = C.isFunction(n), this.each(function(e) {
                var t;
                if (1 !== this.nodeType) return;
                null == (t = i ? n.call(this, e, C(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : C.isArray(t) && (t = C.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t)
            })
        }
    }), C.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : C.trim(C.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
                        if (((n = r[u]).selected || u === i) && (v.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !C.nodeName(n.parentNode, "optgroup"))) {
                            if (t = C(n).val(), o) return t;
                            a.push(t)
                        } return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = C.makeArray(t), a = i.length; a--;)
                        if (r = i[a], 0 <= C.inArray(C.valHooks.option.get(r), o)) try {
                            r.selected = n = !0
                        } catch (e) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), C.each(["radio", "checkbox"], function() {
        C.valHooks[this] = {
            set: function(e, t) {
                if (C.isArray(t)) return e.checked = 0 <= C.inArray(C(e).val(), t)
            }
        }, v.checkOn || (C.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var pt, ht, mt = C.expr.attrHandle,
        gt = /^(?:checked|selected)$/i,
        vt = v.getSetAttribute,
        yt = v.input;
    C.fn.extend({
        attr: function(e, t) {
            return X(this, C.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                C.removeAttr(this, e)
            })
        }
    }), C.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (!e || 3 === o || 8 === o || 2 === o) return;
            if (typeof e.getAttribute === M) return C.prop(e, t, n);
            if (1 === o && C.isXMLDoc(e) || (t = t.toLowerCase(), r = C.attrHooks[t] || (C.expr.match.bool.test(t) ? ht : pt)), void 0 === n) return r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = C.find.attr(e, t)) ? void 0 : i;
            if (null !== n) return r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n);
            C.removeAttr(e, t)
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(D);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = C.propFix[n] || n, C.expr.match.bool.test(n) ? yt && vt || !gt.test(n) ? e[r] = !1 : e[C.camelCase("default-" + n)] = e[r] = !1 : C.attr(e, n, ""), e.removeAttribute(vt ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && C.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), ht = {
        set: function(e, t, n) {
            return !1 === t ? C.removeAttr(e, n) : yt && vt || !gt.test(n) ? e.setAttribute(!vt && C.propFix[n] || n, n) : e[C.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var o = mt[t] || C.find.attr;
        mt[t] = yt && vt || !gt.test(t) ? function(e, t, n) {
            var r, i;
            return n || (i = mt[t], mt[t] = r, r = null != o(e, t, n) ? t.toLowerCase() : null, mt[t] = i), r
        } : function(e, t, n) {
            if (!n) return e[C.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), yt && vt || (C.attrHooks.value = {
        set: function(e, t, n) {
            if (!C.nodeName(e, "input")) return pt && pt.set(e, t, n);
            e.defaultValue = t
        }
    }), vt || (pt = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n)) return t
        }
    }, mt.id = mt.name = mt.coords = function(e, t, n) {
        var r;
        if (!n) return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, C.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified) return n.value
        },
        set: pt.set
    }, C.attrHooks.contenteditable = {
        set: function(e, t, n) {
            pt.set(e, "" !== t && t, n)
        }
    }, C.each(["width", "height"], function(e, n) {
        C.attrHooks[n] = {
            set: function(e, t) {
                if ("" === t) return e.setAttribute(n, "auto"), t
            }
        }
    })), v.style || (C.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var bt = /^(?:input|select|textarea|button|object)$/i,
        xt = /^(?:a|area)$/i;
    C.fn.extend({
        prop: function(e, t) {
            return X(this, C.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return e = C.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {}
            })
        }
    }), C.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (!e || 3 === o || 8 === o || 2 === o) return;
            return (1 !== o || !C.isXMLDoc(e)) && (t = C.propFix[t] || t, i = C.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = C.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), v.hrefNormalized || C.each(["href", "src"], function(e, t) {
        C.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), v.optSelected || (C.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        C.propFix[this.toLowerCase()] = this
    }), v.enctype || (C.propFix.enctype = "encoding");
    var wt = /[\t\r\n\f]/g;
    C.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s = 0,
                u = this.length,
                l = "string" == typeof t && t;
            if (C.isFunction(t)) return this.each(function(e) {
                C(this).addClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(D) || []; s < u; s++)
                    if (r = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : " ")) {
                        for (o = 0; i = e[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = C.trim(r), n.className !== a && (n.className = a)
                    } return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s = 0,
                u = this.length,
                l = 0 === arguments.length || "string" == typeof t && t;
            if (C.isFunction(t)) return this.each(function(e) {
                C(this).removeClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(D) || []; s < u; s++)
                    if (r = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : "")) {
                        for (o = 0; i = e[o++];)
                            for (; 0 <= r.indexOf(" " + i + " ");) r = r.replace(" " + i + " ", " ");
                        a = t ? C.trim(r) : "", n.className !== a && (n.className = a)
                    } return this
        },
        toggleClass: function(i, t) {
            var o = typeof i;
            if ("boolean" == typeof t && "string" === o) return t ? this.addClass(i) : this.removeClass(i);
            if (C.isFunction(i)) return this.each(function(e) {
                C(this).toggleClass(i.call(this, e, this.className, t), t)
            });
            return this.each(function() {
                if ("string" === o)
                    for (var e, t = 0, n = C(this), r = i.match(D) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else o !== M && "boolean" !== o || (this.className && C._data(this, "__className__", this.className), this.className = this.className || !1 === i ? "" : C._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(wt, " ").indexOf(t)) return !0;
            return !1
        }
    }), C.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        C.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), C.fn.extend({
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
    var Tt = C.now(),
        Ct = /\?/,
        Nt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    C.parseJSON = function(e) {
        if (h.JSON && h.JSON.parse) return h.JSON.parse(e + "");
        var i, o = null,
            t = C.trim(e + "");
        return t && !C.trim(t.replace(Nt, function(e, t, n, r) {
            if (i && t && (o = 0), 0 === o) return e;
            return i = n || t, o += !r - !n, ""
        })) ? Function("return " + t)() : C.error("Invalid JSON: " + e)
    }, C.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            h.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
        } catch (e) {
            t = void 0
        }
        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
    };
    var Et, kt, St = /#.*$/,
        jt = /([?&])_=[^&]*/,
        At = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Dt = /^(?:GET|HEAD)$/,
        Lt = /^\/\//,
        Ht = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        _t = {},
        qt = {},
        Mt = "*/".concat("*");
    try {
        kt = location.href
    } catch (e) {
        (kt = N.createElement("a")).href = "", kt = kt.href
    }

    function Ot(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(D) || [];
            if (C.isFunction(t))
                for (; n = i[r++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Ft(t, i, o, a) {
        var s = {},
            u = t === qt;

        function l(e) {
            var r;
            return s[e] = !0, C.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                if ("string" == typeof n && !u && !s[n]) return i.dataTypes.unshift(n), l(n), !1;
                if (u) return !(r = n)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Bt(e, t) {
        var n, r, i = C.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && C.extend(!0, e, n), e
    }
    Et = Ht.exec(kt.toLowerCase()) || [], C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: kt,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Mt,
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
                "text json": C.parseJSON,
                "text xml": C.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Bt(Bt(e, C.ajaxSettings), t) : Bt(C.ajaxSettings, e)
        },
        ajaxPrefilter: Ot(_t),
        ajaxTransport: Ot(qt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, r, c, f, d, p, h, i, m = C.ajaxSetup({}, t),
                g = m.context || m,
                v = m.context && (g.nodeType || g.jquery) ? C(g) : C.event,
                y = C.Deferred(),
                b = C.Callbacks("once memory"),
                x = m.statusCode || {},
                o = {},
                a = {},
                w = 0,
                s = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!i)
                                for (i = {}; t = At.exec(f);) i[t[1].toLowerCase()] = t[2];
                            t = i[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? f : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = a[n] = a[n] || e, o[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return w || (m.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (w < 2)
                                for (t in e) x[t] = [x[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || s;
                        return h && h.abort(t), u(0, t), this
                    }
                };
            if (y.promise(T).complete = b.add, T.success = T.done, T.error = T.fail, m.url = ((e || m.url || kt) + "").replace(St, "").replace(Lt, Et[1] + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = C.trim(m.dataType || "*").toLowerCase().match(D) || [""], null == m.crossDomain && (n = Ht.exec(m.url.toLowerCase()), m.crossDomain = !(!n || n[1] === Et[1] && n[2] === Et[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Et[3] || ("http:" === Et[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = C.param(m.data, m.traditional)), Ft(_t, m, t, T), 2 === w) return T;
            for (r in (p = C.event && m.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Dt.test(m.type), c = m.url, m.hasContent || (m.data && (c = m.url += (Ct.test(c) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = jt.test(c) ? c.replace(jt, "$1_=" + Tt++) : c + (Ct.test(c) ? "&" : "?") + "_=" + Tt++)), m.ifModified && (C.lastModified[c] && T.setRequestHeader("If-Modified-Since", C.lastModified[c]), C.etag[c] && T.setRequestHeader("If-None-Match", C.etag[c])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && T.setRequestHeader("Content-Type", m.contentType), T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : m.accepts["*"]), m.headers) T.setRequestHeader(r, m.headers[r]);
            if (m.beforeSend && (!1 === m.beforeSend.call(g, T, m) || 2 === w)) return T.abort();
            for (r in s = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[r](m[r]);
            if (h = Ft(qt, m, t, T)) {
                T.readyState = 1, p && v.trigger("ajaxSend", [T, m]), m.async && 0 < m.timeout && (d = setTimeout(function() {
                    T.abort("timeout")
                }, m.timeout));
                try {
                    w = 1, h.send(o, u)
                } catch (e) {
                    if (!(w < 2)) throw e;
                    u(-1, e)
                }
            } else u(-1, "No Transport");

            function u(e, t, n, r) {
                var i, o, a, s, u, l = t;
                if (2 === w) return;
                w = 2, d && clearTimeout(d), h = void 0, f = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (a in s)
                            if (s[a] && s[a].test(i)) {
                                u.unshift(a);
                                break
                            } if (u[0] in n) o = u[0];
                    else {
                        for (a in n) {
                            if (!u[0] || e.converters[a + " " + u[0]]) {
                                o = a;
                                break
                            }
                            r || (r = a)
                        }
                        o = o || r
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(m, T, n)), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(m, s, T, i), i ? (m.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (C.lastModified[c] = u), (u = T.getResponseHeader("etag")) && (C.etag[c] = u)), 204 === e || "HEAD" === m.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? y.resolveWith(g, [o, l, T]) : y.rejectWith(g, [T, l, a]), T.statusCode(x), x = void 0, p && v.trigger(i ? "ajaxSuccess" : "ajaxError", [T, m, i ? o : a]), b.fireWith(g, [T, l]), p && (v.trigger("ajaxComplete", [T, m]), --C.active || C.event.trigger("ajaxStop"))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return C.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return C.get(e, void 0, t, "script")
        }
    }), C.each(["get", "post"], function(e, i) {
        C[i] = function(e, t, n, r) {
            return C.isFunction(t) && (r = r || n, n = t, t = void 0), C.ajax({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            })
        }
    }), C._evalUrl = function(e) {
        return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, C.fn.extend({
        wrapAll: function(t) {
            if (C.isFunction(t)) return this.each(function(e) {
                C(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = C(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            if (C.isFunction(n)) return this.each(function(e) {
                C(this).wrapInner(n.call(this, e))
            });
            return this.each(function() {
                var e = C(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = C.isFunction(t);
            return this.each(function(e) {
                C(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                C.nodeName(this, "body") || C(this).replaceWith(this.childNodes)
            }).end()
        }
    }), C.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !v.reliableHiddenOffsets() && "none" === (e.style && e.style.display || C.css(e, "display"))
    }, C.expr.filters.visible = function(e) {
        return !C.expr.filters.hidden(e)
    };
    var Pt = /%20/g,
        Rt = /\[\]$/,
        Wt = /\r?\n/g,
        $t = /^(?:submit|button|image|reset|file)$/i,
        zt = /^(?:input|select|textarea|keygen)/i;

    function It(n, e, r, i) {
        var t;
        if (C.isArray(e)) C.each(e, function(e, t) {
            r || Rt.test(n) ? i(n, t) : It(n + "[" + ("object" == typeof t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== C.type(e)) i(n, e);
        else
            for (t in e) It(n + "[" + t + "]", e[t], r, i)
    }
    C.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = C.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = C.ajaxSettings && C.ajaxSettings.traditional), C.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) It(n, e[n], t, i);
        return r.join("&").replace(Pt, "+")
    }, C.fn.extend({
        serialize: function() {
            return C.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = C.prop(this, "elements");
                return e ? C.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !C(this).is(":disabled") && zt.test(this.nodeName) && !$t.test(e) && (this.checked || !Q.test(e))
            }).map(function(e, t) {
                var n = C(this).val();
                return null == n ? null : C.isArray(n) ? C.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Wt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Wt, "\r\n")
                }
            }).get()
        }
    }), C.ajaxSettings.xhr = void 0 !== h.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Jt() || function() {
            try {
                return new h.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }()
    } : Jt;
    var Xt = 0,
        Qt = {},
        Ut = C.ajaxSettings.xhr();

    function Jt() {
        try {
            return new h.XMLHttpRequest
        } catch (e) {}
    }
    h.attachEvent && h.attachEvent("onunload", function() {
        for (var e in Qt) Qt[e](void 0, !0)
    }), v.cors = !!Ut && "withCredentials" in Ut, (Ut = v.ajax = !!Ut) && C.ajaxTransport(function(u) {
        var l;
        if (!u.crossDomain || v.cors) return {
            send: function(e, o) {
                var t, a = u.xhr(),
                    s = ++Xt;
                if (a.open(u.type, u.url, u.async, u.username, u.password), u.xhrFields)
                    for (t in u.xhrFields) a[t] = u.xhrFields[t];
                for (t in u.mimeType && a.overrideMimeType && a.overrideMimeType(u.mimeType), u.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) void 0 !== e[t] && a.setRequestHeader(t, e[t] + "");
                a.send(u.hasContent && u.data || null), l = function(e, t) {
                    var n, r, i;
                    if (l && (t || 4 === a.readyState))
                        if (delete Qt[s], l = void 0, a.onreadystatechange = C.noop, t) 4 !== a.readyState && a.abort();
                        else {
                            i = {}, n = a.status, "string" == typeof a.responseText && (i.text = a.responseText);
                            try {
                                r = a.statusText
                            } catch (e) {
                                r = ""
                            }
                            n || !u.isLocal || u.crossDomain ? 1223 === n && (n = 204) : n = i.text ? 200 : 404
                        } i && o(n, r, i, a.getAllResponseHeaders())
                }, u.async ? 4 === a.readyState ? setTimeout(l) : a.onreadystatechange = Qt[s] = l : l()
            },
            abort: function() {
                l && l(void 0, !0)
            }
        }
    }), C.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return C.globalEval(e), e
            }
        }
    }), C.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), C.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var r, i = N.head || C("head")[0] || N.documentElement;
            return {
                send: function(e, n) {
                    (r = N.createElement("script")).async = !0, t.scriptCharset && (r.charset = t.scriptCharset), r.src = t.url, r.onload = r.onreadystatechange = function(e, t) {
                        (t || !r.readyState || /loaded|complete/.test(r.readyState)) && (r.onload = r.onreadystatechange = null, r.parentNode && r.parentNode.removeChild(r), r = null, t || n(200, "success"))
                    }, i.insertBefore(r, i.firstChild)
                },
                abort: function() {
                    r && r.onload(void 0, !0)
                }
            }
        }
    });
    var Vt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Vt.pop() || C.expando + "_" + Tt++;
            return this[e] = !0, e
        }
    }), C.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = C.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || C.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = h[r], h[r] = function() {
            o = arguments
        }, n.always(function() {
            h[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Vt.push(r)), o && C.isFunction(i) && i(o[0]), o = i = void 0
        }), "script"
    }), C.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || N;
        var r = b.exec(e),
            i = !n && [];
        if (r) return [t.createElement(r[1])];
        return r = C.buildFragment([e], t, i), i && i.length && C(i).remove(), C.merge([], r.childNodes)
    };
    var Gt = C.fn.load;
    C.fn.load = function(e, t, n) {
        if ("string" != typeof e && Gt) return Gt.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return 0 <= s && (r = C.trim(e.slice(s, e.length)), e = e.slice(0, s)), C.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < a.length && C.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            a.each(n, i || [e.responseText, t, e])
        }), this
    }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        C.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), C.expr.filters.animated = function(t) {
        return C.grep(C.timers, function(e) {
            return t === e.elem
        }).length
    };
    var Kt = h.document.documentElement;

    function Zt(e) {
        return C.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    C.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = C.css(e, "position"),
                c = C(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = C.css(e, "top"), u = C.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < C.inArray("auto", [o, u]) ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), C.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, C.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                C.offset.setOffset(this, t, e)
            });
            var e, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                o = i && i.ownerDocument;
            if (!o) return;
            if (e = o.documentElement, !C.contains(e, i)) return r;
            return typeof i.getBoundingClientRect !== M && (r = i.getBoundingClientRect()), n = Zt(o), {
                top: r.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: r.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }
        },
        position: function() {
            if (!this[0]) return;
            var e, t, n = {
                    top: 0,
                    left: 0
                },
                r = this[0];
            return "fixed" === C.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), C.nodeName(e[0], "html") || (n = e.offset()), n.top += C.css(e[0], "borderTopWidth", !0), n.left += C.css(e[0], "borderLeftWidth", !0)), {
                top: t.top - n.top - C.css(r, "marginTop", !0),
                left: t.left - n.left - C.css(r, "marginLeft", !0)
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Kt; e && !C.nodeName(e, "html") && "static" === C.css(e, "position");) e = e.offsetParent;
                return e || Kt
            })
        }
    }), C.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = /Y/.test(i);
        C.fn[t] = function(e) {
            return X(this, function(e, t, n) {
                var r = Zt(e);
                if (void 0 === n) return r ? i in r ? r[i] : r.document.documentElement[t] : e[t];
                r ? r.scrollTo(o ? C(r).scrollLeft() : n, o ? n : C(r).scrollTop()) : e[t] = n
            }, t, e, arguments.length, null)
        }
    }), C.each(["top", "left"], function(e, n) {
        C.cssHooks[n] = Me(v.pixelPosition, function(e, t) {
            if (t) return t = Le(e, n), _e.test(t) ? C(e).position()[n] + "px" : t
        })
    }), C.each({
        Height: "height",
        Width: "width"
    }, function(o, a) {
        C.each({
            padding: "inner" + o,
            content: a,
            "": "outer" + o
        }, function(r, e) {
            C.fn[e] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return X(this, function(e, t, n) {
                    var r;
                    if (C.isWindow(e)) return e.document.documentElement["client" + o];
                    if (9 === e.nodeType) return r = e.documentElement, Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o]);
                    return void 0 === n ? C.css(e, t, i) : C.style(e, t, n, i)
                }, a, n ? e : void 0, n, null)
            }
        })
    }), C.fn.size = function() {
        return this.length
    }, C.fn.andSelf = C.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return C
    });
    var en = h.jQuery,
        tn = h.$;
    return C.noConflict = function(e) {
        return h.$ === C && (h.$ = tn), e && h.jQuery === C && (h.jQuery = en), C
    }, typeof e === M && (h.jQuery = h.$ = C), C
}),
/* @preserve
 * jQuery Migrate - v1.2.1 - 2013-05-08
 * https://github.com/jquery/jquery-migrate
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
 */
function(l, n, a) {
    try {
        var r = {};

        function c(e) {
            var t = n.console;
            r[e] || (r[e] = !n.enableRemoveMigrateWarns, l.migrateWarnings.push(e), t && t.error && !l.migrateMute && (t.error(e), l.migrateTrace && t.trace && t.trace()))
        }

        function e(e, t, n, r) {
            if (Object.defineProperty) try {
                return void Object.defineProperty(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return c(r), n
                    },
                    set: function(e) {
                        c(r), n = e
                    }
                })
            } catch (e) {}
            l._definePropertyBroken = !0, e[t] = n
        }
        l.migrateWarnings = [], l.migrateMute = !n.enableRemoveMigrateWarns, !l.migrateMute && n.console && n.console.log && n.console.log("JQMIGRATE: Logging is active"), l.migrateTrace === a && (l.migrateTrace = !l.migrateMute), l.migrateReset = function() {
            r = {}, l.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && c("jQuery is not compatible with Quirks Mode");
        var s = l("<input/>", {
                size: 1
            }).attr("size") && l.attrFn,
            u = l.attr,
            i = l.attrHooks.value && l.attrHooks.value.get || function() {
                return null
            },
            o = l.attrHooks.value && l.attrHooks.value.set || function() {
                return a
            },
            f = /^(?:input|button)$/i,
            d = /^[238]$/,
            p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            h = /^(?:checked|selected)$/i;
        e(l, "attrFn", s || {}, "jQuery.attrFn is deprecated"), l.attr = function(e, t, n, r) {
            var i = t.toLowerCase(),
                o = e && e.nodeType;
            if (r && (u.length < 4 && c("jQuery.fn.attr( props, pass ) is deprecated"), e && !d.test(o) && (s ? t in s : l.isFunction(l.fn[t])))) return l(e)[t](n);
            return "type" === t && n !== a && f.test(e.nodeName) && e.parentNode && c("Can't change the 'type' of an input or button in IE 6/7/8"), !l.attrHooks[i] && p.test(i) && (l.attrHooks[i] = {
                get: function(e, t) {
                    var n, r = l.prop(e, t);
                    return !0 === r || "boolean" != typeof r && (n = e.getAttributeNode(t)) && !1 !== n.nodeValue ? t.toLowerCase() : a
                },
                set: function(e, t, n) {
                    var r;
                    return !1 === t ? l.removeAttr(e, n) : ((r = l.propFix[n] || n) in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
                }
            }, h.test(i) && c("jQuery.fn.attr('" + i + "') may use property instead of attribute")), u.call(l, e, t, n)
        }, l.attrHooks.value = {
            get: function(e, t) {
                var n = (e.nodeName || "").toLowerCase();
                if ("button" === n) return i.apply(this, arguments);
                return "input" !== n && "option" !== n && c("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null
            },
            set: function(e, t) {
                var n = (e.nodeName || "").toLowerCase();
                if ("button" === n) return o.apply(this, arguments);
                "input" !== n && "option" !== n && c("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t
            }
        };
        var t, m, g = l.fn.init,
            v = l.parseJSON,
            y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        l.fn.init = function(e, t, n) {
            var r;
            if (e && "string" == typeof e && !l.isPlainObject(t) && (r = y.exec(l.trim(e))) && r[0] && ("#" === r[0].charAt(0) && (c("HTML string cannot start with a '#' character"), l.error("JQMIGRATE: Invalid selector string (XSS)")), t && t.context && (t = t.context), l.parseHTML)) return g.call(this, l.parseHTML(r[2], t, !0), t, n);
            return g.apply(this, arguments)
        }, l.fn.init.prototype = l.fn, l.parseJSON = function(e) {
            if (!e && null !== e) return null;
            return v.apply(this, arguments)
        }, l.uaMatch = function(e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }, l.browser || (t = l.uaMatch(navigator.userAgent), m = {}, t.browser && (m[t.browser] = !0, m.version = t.version), m.chrome ? m.webkit = !0 : m.webkit && (m.safari = !0), l.browser = m), e(l, "browser", l.browser, "jQuery.browser is deprecated"), l.sub = function() {
            function n(e, t) {
                return new n.fn.init(e, t)
            }
            l.extend(!0, n, this), n.superclass = this, ((n.fn = n.prototype = this()).constructor = n).sub = this.sub, n.fn.init = function(e, t) {
                return t && t instanceof l && !(t instanceof n) && (t = n(t)), l.fn.init.call(this, e, t, r)
            }, n.fn.init.prototype = n.fn;
            var r = n(document);
            return c("jQuery.sub() is deprecated"), n
        }, l.ajaxSetup({
            converters: {
                "text json": l.parseJSON
            }
        });
        var b = l.fn.data;
        l.fn.data = function(e) {
            var t, n, r = this[0];
            if (r && "events" === e && 1 === arguments.length && (t = l.data(r, e), n = l._data(r, e), (t === a || t === n) && n !== a)) return c("Use of jQuery.fn.data('events') is deprecated"), n;
            return b.apply(this, arguments)
        };
        var x = /\/(java|ecma)script/i;
        l.clean || (l.clean = function(e, t, n, r) {
            t = (t = !(t = t || document).nodeType && t[0] || t).ownerDocument || t, c("jQuery.clean() is deprecated");
            var i, o, a, s, u = [];
            if (l.merge(u, l.buildFragment(e, t).childNodes), n)
                for (a = function(e) {
                        if (!e.type || x.test(e.type)) return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
                    }, i = 0; null != (o = u[i]); i++) l.nodeName(o, "script") && a(o) || (n.appendChild(o), void 0 !== o.getElementsByTagName && (s = l.grep(l.merge([], o.getElementsByTagName("script")), a), u.splice.apply(u, [i + 1, 0].concat(s)), i += s.length));
            return u
        });
        var w = l.event.add,
            T = l.event.remove,
            C = l.event.trigger,
            N = l.fn.toggle,
            E = l.fn.live,
            k = l.fn.die,
            S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            j = new RegExp("\\b(?:" + S + ")\\b"),
            A = /(?:^|\s)hover(\.\S+|)\b/,
            D = function(e) {
                if ("string" != typeof e || l.event.special.hover) return e;
                return A.test(e) && c("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), e && e.replace(A, "mouseenter$1 mouseleave$1")
            };
        l.event.props && "attrChange" !== l.event.props[0] && l.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), l.event.dispatch && e(l.event, "handle", l.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), l.event.add = function(e, t, n, r, i) {
            e !== document && j.test(t) && c("AJAX events should be attached to document: " + t), w.call(this, e, D(t || ""), n, r, i)
        }, l.event.remove = function(e, t, n, r, i) {
            T.call(this, e, D(t) || "", n, r, i)
        }, l.fn.error = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            if (c("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length) return this.bind.apply(this, e);
            return this.triggerHandler.apply(this, e), this
        }, l.fn.toggle = function(n, e) {
            if (!l.isFunction(n) || !l.isFunction(e)) return N.apply(this, arguments);
            c("jQuery.fn.toggle(handler, handler...) is deprecated");
            var r = arguments,
                t = n.guid || l.guid++,
                i = 0,
                o = function(e) {
                    var t = (l._data(this, "lastToggle" + n.guid) || 0) % i;
                    return l._data(this, "lastToggle" + n.guid, t + 1), e.preventDefault(), r[t].apply(this, arguments) || !1
                };
            for (o.guid = t; i < r.length;) r[i++].guid = t;
            return this.click(o)
        }, l.fn.live = function(e, t, n) {
            if (c('jQuery.fn.live() is deprecated. Use "$(document).on( types, selector, data, fn );" instead.'), E) return E.apply(this, arguments);
            return l(this.context).on(e, this.selector, t, n), this
        }, l.fn.die = function(e, t) {
            if (c('jQuery.fn.die() is deprecated. Use "$(document).off( types, selector || "**", fn );" instead.'), k) return k.apply(this, arguments);
            return l(this.context).off(e, this.selector || "**", t), this
        }, l.event.trigger = function(e, t, n, r) {
            return n || j.test(e) || c("Global events are undocumented and deprecated"), C.call(this, e, t, n || document, r)
        }, l.each(S.split("|"), function(e, t) {
            l.event.special[t] = {
                setup: function() {
                    var e = this;
                    return e !== document && (l.event.add(document, t + "." + l.guid, function() {
                        l.event.trigger(t, null, e, !0)
                    }), l._data(this, t, l.guid++)), !1
                },
                teardown: function() {
                    return this !== document && l.event.remove(document, t + "." + l._data(this, t)), !1
                }
            }
        })
    } catch (t) {
        ! function e() {
            if (!document.getElementById("req_info")) return void setTimeout(e, 100);
            n.onerror("3rd_JQUERY: jquery migrate " + t, 1, 1)
        }()
    }
}(window.jQuery, window), Object.defineProperties && function(i, r) {
    var o = {
        pageX: function(e) {
            if (!e) return;
            var t = this.target.ownerDocument || i,
                n = t.documentElement,
                r = t.body;
            return e.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0)
        },
        pageY: function(e) {
            if (!e) return;
            var t = this.target.ownerDocument || i,
                n = t.documentElement,
                r = t.body;
            return e.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)
        },
        relatedTarget: function(e) {
            if (!e) return;
            return e.fromElement === this.target ? e.toElement : e.fromElement
        },
        metaKey: function(e) {
            if (!e) return;
            return e.ctrlKey
        },
        which: function(e) {
            if (!e) return;
            return null !== e.charCode ? e.charCode : e.keyCode
        }
    };
    r.each(r.event.keyHooks.props.concat(r.event.mouseHooks.props, r.event.props), function(e, i) {
        "target" !== i && Object.defineProperty(r.Event.prototype, i, {
            get: function() {
                var e, t, n, r = this.originalEvent && this.originalEvent[i];
                return void 0 !== this["_" + i] ? this["_" + i] : (e = this, void 0 !== (n = o[t = i] && void 0 === r ? o[i].call(this, this.originalEvent) : r) && Object.defineProperty(e, t, {
                    value: n
                }), n)
            },
            set: function(e) {
                this["_" + i] = e
            }
        })
    }), r.event.fix = function(e) {
        if (e[r.expando]) return e;
        var t = e,
            n = t.target;
        return e = r.Event(t), n || (n = t.srcElement || i), 3 === n.nodeType && (n = n.parentNode), e.target = n, e
    }
}(document, jQuery);