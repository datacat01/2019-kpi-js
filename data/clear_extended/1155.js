if (function(e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(k, e) {
        "use strict";
        var t = [],
            A = k.document,
            o = Object.getPrototypeOf,
            s = t.slice,
            m = t.concat,
            u = t.push,
            l = t.indexOf,
            n = {},
            i = n.toString,
            E = n.hasOwnProperty,
            r = E.toString,
            a = r.call(Object),
            g = {};

        function v(e, t) {
            var n = (t = t || A).createElement("script");
            n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
        }
        var c = "3.2.1",
            D = function(e, t) {
                return new D.fn.init(e, t)
            },
            f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            d = /^-ms-/,
            p = /-([a-z])/g,
            h = function(e, t) {
                return t.toUpperCase()
            };

        function y(e) {
            var t = !!e && "length" in e && e.length,
                n = D.type(e);
            return "function" !== n && !D.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
        }
        D.fn = D.prototype = {
            jquery: c,
            constructor: D,
            length: 0,
            toArray: function() {
                return s.call(this)
            },
            get: function(e) {
                return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = D.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return D.each(this, e)
            },
            map: function(n) {
                return this.pushStack(D.map(this, function(e, t) {
                    return n.call(e, t, e)
                }))
            },
            slice: function() {
                return this.pushStack(s.apply(this, arguments))
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
                return this.prevObject || this.constructor()
            },
            push: u,
            sort: t.sort,
            splice: t.splice
        }, D.extend = D.fn.extend = function() {
            var e, t, n, i, r, o, a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || D.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = a[t], a !== (i = e[t]) && (l && i && (D.isPlainObject(i) || (r = Array.isArray(i))) ? (o = r ? (r = !1, n && Array.isArray(n) ? n : []) : n && D.isPlainObject(n) ? n : {}, a[t] = D.extend(l, o, i)) : void 0 !== i && (a[t] = i));
            return a
        }, D.extend({
            expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === D.type(e)
            },
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = D.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== i.call(e) || (t = o(e)) && ("function" != typeof(n = E.call(t, "constructor") && t.constructor) || r.call(n) !== a))
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                v(e)
            },
            camelCase: function(e) {
                return e.replace(d, "ms-").replace(p, h)
            },
            each: function(e, t) {
                var n, i = 0;
                if (y(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(f, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (y(Object(e)) ? D.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : l.call(t, e, n)
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
                var i, r, o = 0,
                    a = [];
                if (y(e))
                    for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r);
                else
                    for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
                return m.apply([], a)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                if ("string" == typeof t && (n = e[t], t = e, e = n), D.isFunction(e)) return i = s.call(arguments, 2), (r = function() {
                    return e.apply(t || this, i.concat(s.call(arguments)))
                }).guid = e.guid = e.guid || D.guid++, r
            },
            now: Date.now,
            support: g
        }), "function" == typeof Symbol && (D.fn[Symbol.iterator] = t[Symbol.iterator]), D.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            n["[object " + t + "]"] = t.toLowerCase()
        });
        var x = function(n) {
            var e, p, b, o, r, h, f, m, w, u, l, C, S, a, T, g, s, c, v, k = "sizzle" + 1 * new Date,
                y = n.document,
                A = 0,
                x = 0,
                i = ae(),
                d = ae(),
                E = ae(),
                D = function(e, t) {
                    return e === t && (l = !0), 0
                },
                L = {}.hasOwnProperty,
                t = [],
                N = t.pop,
                F = t.push,
                M = t.push,
                j = t.slice,
                q = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                O = "[\\x20\\t\\r\\n\\f]",
                P = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                H = "\\[" + O + "*(" + P + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + O + "*\\]",
                I = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
                R = new RegExp(O + "+", "g"),
                _ = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
                W = new RegExp("^" + O + "*," + O + "*"),
                $ = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
                B = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
                U = new RegExp(I),
                V = new RegExp("^" + P + "$"),
                X = {
                    ID: new RegExp("^#(" + P + ")"),
                    CLASS: new RegExp("^\\.(" + P + ")"),
                    TAG: new RegExp("^(" + P + "|[*])"),
                    ATTR: new RegExp("^" + H),
                    PSEUDO: new RegExp("^" + I),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + z + ")$", "i"),
                    needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
                },
                Q = /^(?:input|select|textarea|button)$/i,
                G = /^h\d$/i,
                Y = /^[^{]+\{\s*\[native \w/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                K = /[+~]/,
                Z = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
                ee = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ne = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                ie = function() {
                    C()
                },
                re = ye(function(e) {
                    return !0 === e.disabled && ("form" in e || "label" in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                M.apply(t = j.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
            } catch (Se) {
                M = {
                    apply: t.length ? function(e, t) {
                        F.apply(e, j.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }

            function oe(e, t, n, i) {
                var r, o, a, s, u, l, c, f = t && t.ownerDocument,
                    d = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
                if (!i && ((t ? t.ownerDocument || t : y) !== S && C(t), t = t || S, T)) {
                    if (11 !== d && (u = J.exec(e)))
                        if (r = u[1]) {
                            if (9 === d) {
                                if (!(a = t.getElementById(r))) return n;
                                if (a.id === r) return n.push(a), n
                            } else if (f && (a = f.getElementById(r)) && v(t, a) && a.id === r) return n.push(a), n
                        } else {
                            if (u[2]) return M.apply(n, t.getElementsByTagName(e)), n;
                            if ((r = u[3]) && p.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(r)), n
                        } if (p.qsa && !E[e + " "] && (!g || !g.test(e))) {
                        if (1 !== d) f = t, c = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(te, ne) : t.setAttribute("id", s = k), o = (l = h(e)).length; o--;) l[o] = "#" + s + " " + ve(l[o]);
                            c = l.join(","), f = K.test(e) && me(t.parentNode) || t
                        }
                        if (c) try {
                            return M.apply(n, f.querySelectorAll(c)), n
                        } catch (x) {} finally {
                            s === k && t.removeAttribute("id")
                        }
                    }
                }
                return m(e.replace(_, "$1"), t, n, i)
            }

            function ae() {
                var n = [];
                return function i(e, t) {
                    return n.push(e + " ") > b.cacheLength && delete i[n.shift()], i[e + " "] = t
                }
            }

            function se(e) {
                return e[k] = !0, e
            }

            function ue(e) {
                var t = S.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (p) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function le(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) b.attrHandle[n[i]] = t
            }

            function ce(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function fe(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function de(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }

            function pe(t) {
                return function(e) {
                    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && re(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function he(a) {
                return se(function(o) {
                    return o = +o, se(function(e, t) {
                        for (var n, i = a([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                    })
                })
            }

            function me(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }
            for (e in p = oe.support = {}, r = oe.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, C = oe.setDocument = function(e) {
                    var t, n, i = e ? e.ownerDocument || e : y;
                    return i !== S && 9 === i.nodeType && i.documentElement && (a = (S = i).documentElement, T = !r(S), y !== S && (n = S.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ie, !1) : n.attachEvent && n.attachEvent("onunload", ie)), p.attributes = ue(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), p.getElementsByTagName = ue(function(e) {
                        return e.appendChild(S.createComment("")), !e.getElementsByTagName("*").length
                    }), p.getElementsByClassName = Y.test(S.getElementsByClassName), p.getById = ue(function(e) {
                        return a.appendChild(e).id = k, !S.getElementsByName || !S.getElementsByName(k).length
                    }), p.getById ? (b.filter.ID = function(e) {
                        var t = e.replace(Z, ee);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }, b.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && T) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (b.filter.ID = function(e) {
                        var n = e.replace(Z, ee);
                        return function(e) {
                            var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return t && t.value === n
                        }
                    }, b.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && T) {
                            var n, i, r, o = t.getElementById(e);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                            }
                            return []
                        }
                    }), b.find.TAG = p.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, i = [],
                            r = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" !== e) return o;
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }, b.find.CLASS = p.getElementsByClassName && function(e, t) {
                        if ("undefined" != typeof t.getElementsByClassName && T) return t.getElementsByClassName(e)
                    }, s = [], g = [], (p.qsa = Y.test(S.querySelectorAll)) && (ue(function(e) {
                        a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + O + "*(?:value|" + z + ")"), e.querySelectorAll("[id~=" + k + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || g.push(".#.+[+~]")
                    }), ue(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = S.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + O + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                    })), (p.matchesSelector = Y.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ue(function(e) {
                        p.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", I)
                    }), g = g.length && new RegExp(g.join("|")), s = s.length && new RegExp(s.join("|")), t = Y.test(a.compareDocumentPosition), v = t || Y.test(a.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, D = t ? function(e, t) {
                        if (e === t) return l = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === S || e.ownerDocument === y && v(y, e) ? -1 : t === S || t.ownerDocument === y && v(y, t) ? 1 : u ? q(u, e) - q(u, t) : 0 : 4 & n ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return l = !0, 0;
                        var n, i = 0,
                            r = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            s = [t];
                        if (!r || !o) return e === S ? -1 : t === S ? 1 : r ? -1 : o ? 1 : u ? q(u, e) - q(u, t) : 0;
                        if (r === o) return ce(e, t);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (; a[i] === s[i];) i++;
                        return i ? ce(a[i], s[i]) : a[i] === y ? -1 : s[i] === y ? 1 : 0
                    }), S
                }, oe.matches = function(e, t) {
                    return oe(e, null, null, t)
                }, oe.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== S && C(e), t = t.replace(B, "='$1']"), p.matchesSelector && T && !E[t + " "] && (!s || !s.test(t)) && (!g || !g.test(t))) try {
                        var n = c.call(e, t);
                        if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                    } catch (o) {}
                    return 0 < oe(t, S, null, [e]).length
                }, oe.contains = function(e, t) {
                    return (e.ownerDocument || e) !== S && C(e), v(e, t)
                }, oe.attr = function(e, t) {
                    (e.ownerDocument || e) !== S && C(e);
                    var n = b.attrHandle[t.toLowerCase()],
                        i = n && L.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !T) : void 0;
                    return void 0 !== i ? i : p.attributes || !T ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }, oe.escape = function(e) {
                    return (e + "").replace(te, ne)
                }, oe.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, oe.uniqueSort = function(e) {
                    var t, n = [],
                        i = 0,
                        r = 0;
                    if (l = !p.detectDuplicates, u = !p.sortStable && e.slice(0), e.sort(D), l) {
                        for (; t = e[r++];) t === e[r] && (i = n.push(r));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return u = null, e
                }, o = oe.getText = function(e) {
                    var t, n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else
                        for (; t = e[i++];) n += o(t);
                    return n
                }, (b = oe.selectors = {
                    cacheLength: 50,
                    createPseudo: se,
                    match: X,
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
                            return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(Z, ee).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = i[e + " "];
                            return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && i(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(n, i, r) {
                            return function(e) {
                                var t = oe.attr(e, n);
                                return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(R, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                            }
                        },
                        CHILD: function(h, e, t, m, g) {
                            var v = "nth" !== h.slice(0, 3),
                                y = "last" !== h.slice(-4),
                                x = "of-type" === e;
                            return 1 === m && 0 === g ? function(e) {
                                return !!e.parentNode
                            } : function(e, t, n) {
                                var i, r, o, a, s, u, l = v !== y ? "nextSibling" : "previousSibling",
                                    c = e.parentNode,
                                    f = x && e.nodeName.toLowerCase(),
                                    d = !n && !x,
                                    p = !1;
                                if (c) {
                                    if (v) {
                                        for (; l;) {
                                            for (a = e; a = a[l];)
                                                if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                            u = l = "only" === h && !u && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (u = [y ? c.firstChild : c.lastChild], y && d) {
                                        for (p = (s = (i = (r = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === A && i[1]) && i[2], a = s && c.childNodes[s]; a = ++s && a && a[l] || (p = s = 0) || u.pop();)
                                            if (1 === a.nodeType && ++p && a === e) {
                                                r[h] = [A, s, p];
                                                break
                                            }
                                    } else if (d && (p = s = (i = (r = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === A && i[1]), !1 === p)
                                        for (;
                                            (a = ++s && a && a[l] || (p = s = 0) || u.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++p || (d && ((r = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [A, p]), a !== e)););
                                    return (p -= g) === m || p % m == 0 && 0 <= p / m
                                }
                            }
                        },
                        PSEUDO: function(e, o) {
                            var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                            return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, t) {
                                for (var n, i = a(e, o), r = i.length; r--;) e[n = q(e, i[r])] = !(t[n] = i[r])
                            }) : function(e) {
                                return a(e, 0, t)
                            }) : a
                        }
                    },
                    pseudos: {
                        not: se(function(e) {
                            var i = [],
                                r = [],
                                s = f(e.replace(_, "$1"));
                            return s[k] ? se(function(e, t, n, i) {
                                for (var r, o = s(e, null, i, []), a = e.length; a--;)(r = o[a]) && (e[a] = !(t[a] = r))
                            }) : function(e, t, n) {
                                return i[0] = e, s(i, null, n, r), i[0] = null, !r.pop()
                            }
                        }),
                        has: se(function(t) {
                            return function(e) {
                                return 0 < oe(t, e).length
                            }
                        }),
                        contains: se(function(t) {
                            return t = t.replace(Z, ee),
                                function(e) {
                                    return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                                }
                        }),
                        lang: se(function(n) {
                            return V.test(n || "") || oe.error("unsupported lang: " + n), n = n.replace(Z, ee).toLowerCase(),
                                function(e) {
                                    var t;
                                    do {
                                        if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var t = n.location && n.location.hash;
                            return t && t.slice(1) === e.id
                        },
                        root: function(e) {
                            return e === a
                        },
                        focus: function(e) {
                            return e === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: pe(!1),
                        disabled: pe(!0),
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
                            return !b.pseudos.empty(e)
                        },
                        header: function(e) {
                            return G.test(e.nodeName)
                        },
                        input: function(e) {
                            return Q.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: he(function() {
                            return [0]
                        }),
                        last: he(function(e, t) {
                            return [t - 1]
                        }),
                        eq: he(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: he(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: he(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: he(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                            return e
                        }),
                        gt: he(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                }).pseudos.nth = b.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) b.pseudos[e] = fe(e);
            for (e in {
                    submit: !0,
                    reset: !0
                }) b.pseudos[e] = de(e);

            function ge() {}

            function ve(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function ye(s, e, t) {
                var u = e.dir,
                    l = e.next,
                    c = l || u,
                    f = t && "parentNode" === c,
                    d = x++;
                return e.first ? function(e, t, n) {
                    for (; e = e[u];)
                        if (1 === e.nodeType || f) return s(e, t, n);
                    return !1
                } : function(e, t, n) {
                    var i, r, o, a = [A, d];
                    if (n) {
                        for (; e = e[u];)
                            if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                    } else
                        for (; e = e[u];)
                            if (1 === e.nodeType || f)
                                if (r = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                                else {
                                    if ((i = r[c]) && i[0] === A && i[1] === d) return a[2] = i[2];
                                    if ((r[c] = a)[2] = s(e, t, n)) return !0
                                } return !1
                }
            }

            function xe(r) {
                return 1 < r.length ? function(e, t, n) {
                    for (var i = r.length; i--;)
                        if (!r[i](e, t, n)) return !1;
                    return !0
                } : r[0]
            }

            function be(e, t, n, i, r) {
                for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), l && t.push(s)));
                return a
            }

            function we(h, m, g, v, y, e) {
                return v && !v[k] && (v = we(v)), y && !y[k] && (y = we(y, e)), se(function(e, t, n, i) {
                    var r, o, a, s = [],
                        u = [],
                        l = t.length,
                        c = e || function p(e, t, n) {
                            for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                            return n
                        }(m || "*", n.nodeType ? [n] : n, []),
                        f = !h || !e && m ? c : be(c, s, h, n, i),
                        d = g ? y || (e ? h : l || v) ? [] : t : f;
                    if (g && g(f, d, n, i), v)
                        for (r = be(d, u), v(r, [], n, i), o = r.length; o--;)(a = r[o]) && (d[u[o]] = !(f[u[o]] = a));
                    if (e) {
                        if (y || h) {
                            if (y) {
                                for (r = [], o = d.length; o--;)(a = d[o]) && r.push(f[o] = a);
                                y(null, d = [], r, i)
                            }
                            for (o = d.length; o--;)(a = d[o]) && -1 < (r = y ? q(e, a) : s[o]) && (e[r] = !(t[r] = a))
                        }
                    } else d = be(d === t ? d.splice(l, d.length) : d), y ? y(null, t, d, i) : M.apply(t, d)
                })
            }

            function Ce(e) {
                for (var r, t, n, i = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = ye(function(e) {
                        return e === r
                    }, a, !0), l = ye(function(e) {
                        return -1 < q(r, e)
                    }, a, !0), c = [function(e, t, n) {
                        var i = !o && (n || t !== w) || ((r = t).nodeType ? u(e, t, n) : l(e, t, n));
                        return r = null, i
                    }]; s < i; s++)
                    if (t = b.relative[e[s].type]) c = [ye(xe(c), t)];
                    else {
                        if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                            for (n = ++s; n < i && !b.relative[e[n].type]; n++);
                            return we(1 < s && xe(c), 1 < s && ve(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(_, "$1"), t, s < n && Ce(e.slice(s, n)), n < i && Ce(e = e.slice(n)), n < i && ve(e))
                        }
                        c.push(t)
                    } return xe(c)
            }
            return ge.prototype = b.filters = b.pseudos, b.setFilters = new ge, h = oe.tokenize = function(e, t) {
                var n, i, r, o, a, s, u, l = d[e + " "];
                if (l) return t ? 0 : l.slice(0);
                for (a = e, s = [], u = b.preFilter; a;) {
                    for (o in n && !(i = W.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(r = [])), n = !1, (i = $.exec(a)) && (n = i.shift(), r.push({
                            value: n,
                            type: i[0].replace(_, " ")
                        }), a = a.slice(n.length)), b.filter) !(i = X[o].exec(a)) || u[o] && !(i = u[o](i)) || (n = i.shift(), r.push({
                        value: n,
                        type: o,
                        matches: i
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return t ? a.length : a ? oe.error(e) : d(e, s).slice(0)
            }, f = oe.compile = function(e, t) {
                var n, i = [],
                    r = [],
                    o = E[e + " "];
                if (!o) {
                    for (t || (t = h(e)), n = t.length; n--;)(o = Ce(t[n]))[k] ? i.push(o) : r.push(o);
                    (o = E(e, function a(g, v) {
                        var y = 0 < v.length,
                            x = 0 < g.length,
                            e = function(e, t, n, i, r) {
                                var o, a, s, u = 0,
                                    l = "0",
                                    c = e && [],
                                    f = [],
                                    d = w,
                                    p = e || x && b.find.TAG("*", r),
                                    h = A += null == d ? 1 : Math.random() || .1,
                                    m = p.length;
                                for (r && (w = t === S || t || r); l !== m && null != (o = p[l]); l++) {
                                    if (x && o) {
                                        for (a = 0, t || o.ownerDocument === S || (C(o), n = !T); s = g[a++];)
                                            if (s(o, t || S, n)) {
                                                i.push(o);
                                                break
                                            } r && (A = h)
                                    }
                                    y && ((o = !s && o) && u--, e && c.push(o))
                                }
                                if (u += l, y && l !== u) {
                                    for (a = 0; s = v[a++];) s(c, f, t, n);
                                    if (e) {
                                        if (0 < u)
                                            for (; l--;) c[l] || f[l] || (f[l] = N.call(i));
                                        f = be(f)
                                    }
                                    M.apply(i, f), r && !e && 0 < f.length && 1 < u + v.length && oe.uniqueSort(i)
                                }
                                return r && (A = h, w = d), c
                            };
                        return y ? se(e) : e
                    }(r, i))).selector = e
                }
                return o
            }, m = oe.select = function(e, t, n, i) {
                var r, o, a, s, u, l = "function" == typeof e && e,
                    c = !i && h(e = l.selector || e);
                if (n = n || [], 1 === c.length) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && T && b.relative[o[1].type]) {
                        if (!(t = (b.find.ID(a.matches[0].replace(Z, ee), t) || [])[0])) return n;
                        l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (r = X.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !b.relative[s = a.type]);)
                        if ((u = b.find[s]) && (i = u(a.matches[0].replace(Z, ee), K.test(o[0].type) && me(t.parentNode) || t))) {
                            if (o.splice(r, 1), !(e = i.length && ve(o))) return M.apply(n, i), n;
                            break
                        }
                }
                return (l || f(e, c))(i, t, !T, n, !t || K.test(e) && me(t.parentNode) || t), n
            }, p.sortStable = k.split("").sort(D).join("") === k, p.detectDuplicates = !!l, C(), p.sortDetached = ue(function(e) {
                return 1 & e.compareDocumentPosition(S.createElement("fieldset"))
            }), ue(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || le("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), p.attributes && ue(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || le("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), ue(function(e) {
                return null == e.getAttribute("disabled")
            }) || le(z, function(e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), oe
        }(k);
        D.find = x, D.expr = x.selectors, D.expr[":"] = D.expr.pseudos, D.uniqueSort = D.unique = x.uniqueSort, D.text = x.getText, D.isXMLDoc = x.isXML, D.contains = x.contains, D.escapeSelector = x.escape;
        var b = function(e, t, n) {
                for (var i = [], r = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && D(e).is(n)) break;
                        i.push(e)
                    } return i
            },
            L = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            w = D.expr.match.needsContext;

        function C(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            T = /^.[^:#\[\.,]*$/;

        function N(e, n, i) {
            return D.isFunction(n) ? D.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== i
            }) : n.nodeType ? D.grep(e, function(e) {
                return e === n !== i
            }) : "string" != typeof n ? D.grep(e, function(e) {
                return -1 < l.call(n, e) !== i
            }) : T.test(n) ? D.filter(n, e, i) : (n = D.filter(n, e), D.grep(e, function(e) {
                return -1 < l.call(n, e) !== i && 1 === e.nodeType
            }))
        }
        D.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? D.find.matchesSelector(i, e) ? [i] : [] : D.find.matches(e, D.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, D.fn.extend({
            find: function(e) {
                var t, n, i = this.length,
                    r = this;
                if ("string" != typeof e) return this.pushStack(D(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (D.contains(r[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < i; t++) D.find(e, r[t], n);
                return 1 < i ? D.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(N(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(N(this, e || [], !0))
            },
            is: function(e) {
                return !!N(this, "string" == typeof e && w.test(e) ? D(e) : e || [], !1).length
            }
        });
        var F, M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (D.fn.init = function(e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || F, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : D.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(D) : D.makeArray(e, this);
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : M.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof D ? t[0] : t, D.merge(this, D.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : A, !0)), S.test(i[1]) && D.isPlainObject(t))
                    for (i in t) D.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (r = A.getElementById(i[2])) && (this[0] = r, this.length = 1), this
        }).prototype = D.fn, F = D(A);
        var j = /^(?:parents|prev(?:Until|All))/,
            q = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function z(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        D.fn.extend({
            has: function(e) {
                var t = D(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (D.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, i = 0,
                    r = this.length,
                    o = [],
                    a = "string" != typeof e && D(e);
                if (!w.test(e))
                    for (; i < r; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && D.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            } return this.pushStack(1 < o.length ? D.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? l.call(D(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(D.uniqueSort(D.merge(this.get(), D(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), D.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return b(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return b(e, "parentNode", n)
            },
            next: function(e) {
                return z(e, "nextSibling")
            },
            prev: function(e) {
                return z(e, "previousSibling")
            },
            nextAll: function(e) {
                return b(e, "nextSibling")
            },
            prevAll: function(e) {
                return b(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return b(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return b(e, "previousSibling", n)
            },
            siblings: function(e) {
                return L((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return L(e.firstChild)
            },
            contents: function(e) {
                return C(e, "iframe") ? e.contentDocument : (C(e, "template") && (e = e.content || e), D.merge([], e.childNodes))
            }
        }, function(i, r) {
            D.fn[i] = function(e, t) {
                var n = D.map(this, r, e);
                return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = D.filter(t, n)), 1 < this.length && (q[i] || D.uniqueSort(n), j.test(i) && n.reverse()), this.pushStack(n)
            }
        });
        var O = /[^\x20\t\r\n\f]+/g;

        function P(e) {
            return e
        }

        function H(e) {
            throw e
        }

        function I(e, t, n, i) {
            var r;
            try {
                e && D.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && D.isFunction(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        D.Callbacks = function(i) {
            i = "string" == typeof i ? function c(e) {
                var n = {};
                return D.each(e.match(O) || [], function(e, t) {
                    n[t] = !0
                }), n
            }(i) : D.extend({}, i);
            var r, e, t, n, o = [],
                a = [],
                s = -1,
                u = function() {
                    for (n = n || i.once, t = r = !0; a.length; s = -1)
                        for (e = a.shift(); ++s < o.length;) !1 === o[s].apply(e[0], e[1]) && i.stopOnFalse && (s = o.length, e = !1);
                    i.memory || (e = !1), r = !1, n && (o = e ? [] : "")
                },
                l = {
                    add: function() {
                        return o && (e && !r && (s = o.length - 1, a.push(e)), function n(e) {
                            D.each(e, function(e, t) {
                                D.isFunction(t) ? i.unique && l.has(t) || o.push(t) : t && t.length && "string" !== D.type(t) && n(t)
                            })
                        }(arguments), e && !r && u()), this
                    },
                    remove: function() {
                        return D.each(arguments, function(e, t) {
                            for (var n; - 1 < (n = D.inArray(t, o, n));) o.splice(n, 1), n <= s && s--
                        }), this
                    },
                    has: function(e) {
                        return e ? -1 < D.inArray(e, o) : 0 < o.length
                    },
                    empty: function() {
                        return o && (o = []), this
                    },
                    disable: function() {
                        return n = a = [], o = e = "", this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return n = a = [], e || r || (o = e = ""), this
                    },
                    locked: function() {
                        return !!n
                    },
                    fireWith: function(e, t) {
                        return n || (t = [e, (t = t || []).slice ? t.slice() : t], a.push(t), r || u()), this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!t
                    }
                };
            return l
        }, D.extend({
            Deferred: function(e) {
                var o = [
                        ["notify", "progress", D.Callbacks("memory"), D.Callbacks("memory"), 2],
                        ["resolve", "done", D.Callbacks("once memory"), D.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", D.Callbacks("once memory"), D.Callbacks("once memory"), 1, "rejected"]
                    ],
                    r = "pending",
                    a = {
                        state: function() {
                            return r
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        "catch": function(e) {
                            return a.then(null, e)
                        },
                        pipe: function() {
                            var r = arguments;
                            return D.Deferred(function(i) {
                                D.each(o, function(e, t) {
                                    var n = D.isFunction(r[t[4]]) && r[t[4]];
                                    s[t[1]](function() {
                                        var e = n && n.apply(this, arguments);
                                        e && D.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                    })
                                }), r = null
                            }).promise()
                        },
                        then: function(t, n, i) {
                            var u = 0;

                            function l(r, o, a, s) {
                                return function() {
                                    var n = this,
                                        i = arguments,
                                        e = function() {
                                            var e, t;
                                            if (!(r < u)) {
                                                if ((e = a.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                                t = e && ("object" == typeof e || "function" == typeof e) && e.then, D.isFunction(t) ? s ? t.call(e, l(u, o, P, s), l(u, o, H, s)) : (u++, t.call(e, l(u, o, P, s), l(u, o, H, s), l(u, o, P, o.notifyWith))) : (a !== P && (n = void 0, i = [e]), (s || o.resolveWith)(n, i))
                                            }
                                        },
                                        t = s ? e : function() {
                                            try {
                                                e()
                                            } catch (k) {
                                                D.Deferred.exceptionHook && D.Deferred.exceptionHook(k, t.stackTrace), u <= r + 1 && (a !== H && (n = void 0, i = [k]), o.rejectWith(n, i))
                                            }
                                        };
                                    r ? t() : (D.Deferred.getStackHook && (t.stackTrace = D.Deferred.getStackHook()), k.setTimeout(t))
                                }
                            }
                            return D.Deferred(function(e) {
                                o[0][3].add(l(0, e, D.isFunction(i) ? i : P, e.notifyWith)), o[1][3].add(l(0, e, D.isFunction(t) ? t : P)), o[2][3].add(l(0, e, D.isFunction(n) ? n : H))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? D.extend(e, a) : a
                        }
                    },
                    s = {};
                return D.each(o, function(e, t) {
                    var n = t[2],
                        i = t[5];
                    a[t[1]] = n.add, i && n.add(function() {
                        r = i
                    }, o[3 - e][2].disable, o[0][2].lock), n.add(t[3].fire), s[t[0]] = function() {
                        return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                    }, s[t[0] + "With"] = n.fireWith
                }), a.promise(s), e && e.call(s, s), s
            },
            when: function(e) {
                var n = arguments.length,
                    t = n,
                    i = Array(t),
                    r = s.call(arguments),
                    o = D.Deferred(),
                    a = function(t) {
                        return function(e) {
                            i[t] = this, r[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(i, r)
                        }
                    };
                if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || D.isFunction(r[t] && r[t].then))) return o.then();
                for (; t--;) I(r[t], a(t), o.reject);
                return o.promise()
            }
        });
        var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        D.Deferred.exceptionHook = function(e, t) {
            k.console && k.console.warn && e && R.test(e.name) && k.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, D.readyException = function(e) {
            k.setTimeout(function() {
                throw e
            })
        };
        var _ = D.Deferred();

        function W() {
            A.removeEventListener("DOMContentLoaded", W), k.removeEventListener("load", W), D.ready()
        }
        D.fn.ready = function(e) {
            return _.then(e)["catch"](function(e) {
                D.readyException(e)
            }), this
        }, D.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --D.readyWait : D.isReady) || ((D.isReady = !0) !== e && 0 < --D.readyWait || _.resolveWith(A, [D]))
            }
        }), D.ready.then = _.then, "complete" === A.readyState || "loading" !== A.readyState && !A.documentElement.doScroll ? k.setTimeout(D.ready) : (A.addEventListener("DOMContentLoaded", W), k.addEventListener("load", W));
        var $ = function(e, t, n, i, r, o, a) {
                var s = 0,
                    u = e.length,
                    l = null == n;
                if ("object" === D.type(n))
                    for (s in r = !0, n) $(e, t, s, n[s], !0, o, a);
                else if (void 0 !== i && (r = !0, D.isFunction(i) || (a = !0), l && (t = a ? (t.call(e, i), null) : (l = t, function(e, t, n) {
                        return l.call(D(e), n)
                    })), t))
                    for (; s < u; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                return r ? e : l ? t.call(e) : u ? t(e[0], n) : o
            },
            B = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };

        function U() {
            this.expando = D.expando + U.uid++
        }
        U.uid = 1, U.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, B(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var i, r = this.cache(e);
                if ("string" == typeof t) r[D.camelCase(t)] = n;
                else
                    for (i in t) r[D.camelCase(i)] = t[i];
                return r
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][D.camelCase(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(D.camelCase) : (t = D.camelCase(t)) in i ? [t] : t.match(O) || []).length;
                        for (; n--;) delete i[t[n]]
                    }(void 0 === t || D.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !D.isEmptyObject(t)
            }
        };
        var V = new U,
            X = new U,
            Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            G = /[A-Z]/g;

        function Y(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(G, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = function r(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Q.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (o) {}
                    X.set(e, t, n)
                } else n = void 0;
            return n
        }
        D.extend({
            hasData: function(e) {
                return X.hasData(e) || V.hasData(e)
            },
            data: function(e, t, n) {
                return X.access(e, t, n)
            },
            removeData: function(e, t) {
                X.remove(e, t)
            },
            _data: function(e, t, n) {
                return V.access(e, t, n)
            },
            _removeData: function(e, t) {
                V.remove(e, t)
            }
        }), D.fn.extend({
            data: function(n, e) {
                var t, i, r, o = this[0],
                    a = o && o.attributes;
                if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                    X.set(this, n)
                }) : $(this, function(e) {
                    var t;
                    if (o && void 0 === e) {
                        if (void 0 !== (t = X.get(o, n))) return t;
                        if (void 0 !== (t = Y(o, n))) return t
                    } else this.each(function() {
                        X.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
                if (this.length && (r = X.get(o), 1 === o.nodeType && !V.get(o, "hasDataAttrs"))) {
                    for (t = a.length; t--;) a[t] && (0 === (i = a[t].name).indexOf("data-") && (i = D.camelCase(i.slice(5)), Y(o, i, r[i])));
                    V.set(o, "hasDataAttrs", !0)
                }
                return r
            },
            removeData: function(e) {
                return this.each(function() {
                    X.remove(this, e)
                })
            }
        }), D.extend({
            queue: function(e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = V.get(e, t), n && (!i || Array.isArray(n) ? i = V.access(e, t, D.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = D.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = D._queueHooks(e, t);
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() {
                    D.dequeue(e, t)
                }, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return V.get(e, n) || V.access(e, n, {
                    empty: D.Callbacks("once memory").add(function() {
                        V.remove(e, [t + "queue", n])
                    })
                })
            }
        }), D.fn.extend({
            queue: function(t, n) {
                var e = 2;
                return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? D.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                    var e = D.queue(this, t, n);
                    D._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && D.dequeue(this, t)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    D.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    r = D.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = V.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t)
            }
        });
        var J = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            K = new RegExp("^(?:([+-])=|)(" + J + ")([a-z%]*)$", "i"),
            Z = ["Top", "Right", "Bottom", "Left"],
            ee = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && D.contains(e.ownerDocument, e) && "none" === D.css(e, "display")
            },
            te = function(e, t, n, i) {
                var r, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                for (o in r = n.apply(e, i || []), t) e.style[o] = a[o];
                return r
            };

        function Se(e, t, n, i) {
            var r, o = 1,
                a = 20,
                s = i ? function() {
                    return i.cur()
                } : function() {
                    return D.css(e, t, "")
                },
                u = s(),
                l = n && n[3] || (D.cssNumber[t] ? "" : "px"),
                c = (D.cssNumber[t] || "px" !== l && +u) && K.exec(D.css(e, t));
            if (c && c[3] !== l)
                for (l = l || c[3], n = n || [], c = +u || 1; c /= o = o || ".5", D.style(e, t, c + l), o !== (o = s() / u) && 1 !== o && --a;);
            return n && (c = +c || +u || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = c, i.end = r)), r
        }
        var ne = {};

        function ie(e, t) {
            for (var n, i, r = [], o = 0, a = e.length; o < a; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = V.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ee(i) && (r[o] = (f = l = u = void 0, l = (s = i).ownerDocument, c = s.nodeName, (f = ne[c]) || (u = l.body.appendChild(l.createElement(c)), f = D.css(u, "display"), u.parentNode.removeChild(u), "none" === f && (f = "block"), ne[c] = f)))) : "none" !== n && (r[o] = "none", V.set(i, "display", n)));
            var s, u, l, c, f;
            for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
            return e
        }
        D.fn.extend({
            show: function() {
                return ie(this, !0)
            },
            hide: function() {
                return ie(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    ee(this) ? D(this).show() : D(this).hide()
                })
            }
        });
        var re = /^(?:checkbox|radio)$/i,
            oe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            ae = /^$|\/(?:java|ecma)script/i,
            se = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function ue(e, t) {
            var n;
            return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && C(e, t) ? D.merge([e], n) : n
        }

        function le(e, t) {
            for (var n = 0, i = e.length; n < i; n++) V.set(e[n], "globalEval", !t || V.get(t[n], "globalEval"))
        }
        se.optgroup = se.option, se.tbody = se.tfoot = se.colgroup = se.caption = se.thead, se.th = se.td;
        var ce, fe, de = /<|&#?\w+;/;

        function pe(e, t, n, i, r) {
            for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
                if ((o = e[p]) || 0 === o)
                    if ("object" === D.type(o)) D.merge(d, o.nodeType ? [o] : o);
                    else if (de.test(o)) {
                for (a = a || f.appendChild(t.createElement("div")), s = (oe.exec(o) || ["", ""])[1].toLowerCase(), u = se[s] || se._default, a.innerHTML = u[1] + D.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
                D.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
            } else d.push(t.createTextNode(o));
            for (f.textContent = "", p = 0; o = d[p++];)
                if (i && -1 < D.inArray(o, i)) r && r.push(o);
                else if (l = D.contains(o.ownerDocument, o), a = ue(f.appendChild(o), "script"), l && le(a), n)
                for (c = 0; o = a[c++];) ae.test(o.type || "") && n.push(o);
            return f
        }
        ce = A.createDocumentFragment().appendChild(A.createElement("div")), (fe = A.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), g.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue;
        var he = A.documentElement,
            me = /^key/,
            ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            ve = /^([^.]*)(?:\.(.+)|)/;

        function ye() {
            return !0
        }

        function xe() {
            return !1
        }

        function be() {
            try {
                return A.activeElement
            } catch (k) {}
        }

        function we(e, t, n, i, r, o) {
            var a, s;
            if ("object" == typeof t) {
                for (s in "string" != typeof n && (i = i || n, n = void 0), t) we(e, s, n, i, t[s], o);
                return e
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = xe;
            else if (!r) return e;
            return 1 === o && (a = r, (r = function(e) {
                return D().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = D.guid++)), e.each(function() {
                D.event.add(this, t, r, i, n)
            })
        }
        D.event = {
            global: {},
            add: function(t, e, n, i, r) {
                var o, a, s, u, l, c, f, d, p, h, m, g = V.get(t);
                if (g)
                    for (n.handler && (n = (o = n).handler, r = o.selector), r && D.find.matchesSelector(he, r), n.guid || (n.guid = D.guid++), (u = g.events) || (u = g.events = {}), (a = g.handle) || (a = g.handle = function(e) {
                            return void 0 !== D && D.event.triggered !== e.type ? D.event.dispatch.apply(t, arguments) : void 0
                        }), l = (e = (e || "").match(O) || [""]).length; l--;) p = m = (s = ve.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = D.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, f = D.event.special[p] || {}, c = D.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && D.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, o), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, h, a) || t.addEventListener && t.addEventListener(p, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), D.event.global[p] = !0)
            },
            remove: function(e, t, n, i, r) {
                var o, a, s, u, l, c, f, d, p, h, m, g = V.hasData(e) && V.get(e);
                if (g && (u = g.events)) {
                    for (l = (t = (t || "").match(O) || [""]).length; l--;)
                        if (p = m = (s = ve.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                            for (f = D.event.special[p] || {}, d = u[p = (i ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !r && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                            a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || D.removeEvent(e, p, g.handle), delete u[p])
                        } else
                            for (p in u) D.event.remove(e, p + t[l], n, i, !0);
                    D.isEmptyObject(u) && V.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, i, r, o, a, s = D.event.fix(e),
                    u = new Array(arguments.length),
                    l = (V.get(this, "events") || {})[s.type] || [],
                    c = D.event.special[s.type] || {};
                for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                    for (a = D.event.handlers.call(this, s, l), t = 0;
                        (r = a[t++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = r.elem, n = 0;
                            (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (i = ((D.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, u)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, s), s.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, o, a, s = [],
                    u = t.delegateCount,
                    l = e.target;
                if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                            for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[r = (i = t[n]).selector + " "] && (a[r] = i.needsContext ? -1 < D(r, this).index(l) : D.find(r, this, null, [l]).length), a[r] && o.push(i);
                            o.length && s.push({
                                elem: l,
                                handlers: o
                            })
                        } return l = this, u < t.length && s.push({
                    elem: l,
                    handlers: t.slice(u)
                }), s
            },
            addProp: function(t, e) {
                Object.defineProperty(D.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: D.isFunction(e) ? function() {
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
            fix: function(e) {
                return e[D.expando] ? e : new D.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== be() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === be() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && C(this, "input")) return this.click(), !1
                    },
                    _default: function(e) {
                        return C(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, D.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, D.Event = function(e, t) {
            return this instanceof D.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ye : xe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && D.extend(this, t), this.timeStamp = e && e.timeStamp || D.now(), void(this[D.expando] = !0)) : new D.Event(e, t)
        }, D.Event.prototype = {
            constructor: D.Event,
            isDefaultPrevented: xe,
            isPropagationStopped: xe,
            isImmediatePropagationStopped: xe,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = ye, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = ye, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = ye, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, D.each({
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
            which: function(e) {
                var t = e.button;
                return null == e.which && me.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ge.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, D.event.addProp), D.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, r) {
            D.event.special[e] = {
                delegateType: r,
                bindType: r,
                handle: function(e) {
                    var t, n = e.relatedTarget,
                        i = e.handleObj;
                    return n && (n === this || D.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
                }
            }
        }), D.fn.extend({
            on: function(e, t, n, i) {
                return we(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return we(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, D(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = xe), this.each(function() {
                    D.event.remove(this, e, n, t)
                });
                for (r in e) this.off(r, t, e[r]);
                return this
            }
        });
        var Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Te = /<script|<style|<link/i,
            ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ae = /^true\/(.*)/,
            Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function De(e, t) {
            return C(e, "table") && C(11 !== t.nodeType ? t : t.firstChild, "tr") && D(">tbody", e)[0] || e
        }

        function Le(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function Ne(e) {
            var t = Ae.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function Fe(e, t) {
            var n, i, r, o, a, s, u, l;
            if (1 === t.nodeType) {
                if (V.hasData(e) && (o = V.access(e), a = V.set(t, o), l = o.events))
                    for (r in delete a.handle, a.events = {}, l)
                        for (n = 0, i = l[r].length; n < i; n++) D.event.add(t, r, l[r][n]);
                X.hasData(e) && (s = X.access(e), u = D.extend({}, s), X.set(t, u))
            }
        }

        function Me(n, i, r, o) {
            i = m.apply([], i);
            var e, t, a, s, u, l, c = 0,
                f = n.length,
                d = f - 1,
                p = i[0],
                h = D.isFunction(p);
            if (h || 1 < f && "string" == typeof p && !g.checkClone && ke.test(p)) return n.each(function(e) {
                var t = n.eq(e);
                h && (i[0] = p.call(this, e, t.html())), Me(t, i, r, o)
            });
            if (f && (t = (e = pe(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
                for (s = (a = D.map(ue(e, "script"), Le)).length; c < f; c++) u = e, c !== d && (u = D.clone(u, !0, !0), s && D.merge(a, ue(u, "script"))), r.call(n[c], u, c);
                if (s)
                    for (l = a[a.length - 1].ownerDocument, D.map(a, Ne), c = 0; c < s; c++) u = a[c], ae.test(u.type || "") && !V.access(u, "globalEval") && D.contains(l, u) && (u.src ? D._evalUrl && D._evalUrl(u.src) : v(u.textContent.replace(Ee, ""), l))
            }
            return n
        }

        function je(e, t, n) {
            for (var i, r = t ? D.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || D.cleanData(ue(i)), i.parentNode && (n && D.contains(i.ownerDocument, i) && le(ue(i, "script")), i.parentNode.removeChild(i));
            return e
        }
        D.extend({
            htmlPrefilter: function(e) {
                return e.replace(Ce, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, r, o, a, s, u, l, c = e.cloneNode(!0),
                    f = D.contains(e.ownerDocument, e);
                if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || D.isXMLDoc(e)))
                    for (a = ue(c), i = 0, r = (o = ue(e)).length; i < r; i++) s = o[i], u = a[i], void 0, "input" === (l = u.nodeName.toLowerCase()) && re.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
                if (t)
                    if (n)
                        for (o = o || ue(e), a = a || ue(c), i = 0, r = o.length; i < r; i++) Fe(o[i], a[i]);
                    else Fe(e, c);
                return 0 < (a = ue(c, "script")).length && le(a, !f && ue(e, "script")), c
            },
            cleanData: function(e) {
                for (var t, n, i, r = D.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (B(n)) {
                        if (t = n[V.expando]) {
                            if (t.events)
                                for (i in t.events) r[i] ? D.event.remove(n, i) : D.removeEvent(n, i, t.handle);
                            n[V.expando] = void 0
                        }
                        n[X.expando] && (n[X.expando] = void 0)
                    }
            }
        }), D.fn.extend({
            detach: function(e) {
                return je(this, e, !0)
            },
            remove: function(e) {
                return je(this, e)
            },
            text: function(e) {
                return $(this, function(e) {
                    return void 0 === e ? D.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return Me(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return Me(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = De(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return Me(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return Me(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (D.cleanData(ue(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return D.clone(this, e, t)
                })
            },
            html: function(e) {
                return $(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Te.test(e) && !se[(oe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = D.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (D.cleanData(ue(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (o) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return Me(this, arguments, function(e) {
                    var t = this.parentNode;
                    D.inArray(this, n) < 0 && (D.cleanData(ue(this)), t && t.replaceChild(e, this))
                }, n)
            }
        }), D.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, a) {
            D.fn[e] = function(e) {
                for (var t, n = [], i = D(e), r = i.length - 1, o = 0; o <= r; o++) t = o === r ? this : this.clone(!0), D(i[o])[a](t), u.apply(n, t.get());
                return this.pushStack(n)
            }
        });
        var qe = /^margin/,
            ze = new RegExp("^(" + J + ")(?!px)[a-z%]+$", "i"),
            Oe = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = k), t.getComputedStyle(e)
            };

        function Pe(e, t, n) {
            var i, r, o, a, s = e.style;
            return (n = n || Oe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || D.contains(e.ownerDocument, e) || (a = D.style(e, t)), !g.pixelMarginRight() && ze.test(a) && qe.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
        }

        function He(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }! function() {
            function e() {
                if (a) {
                    a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", he.appendChild(o);
                    var e = k.getComputedStyle(a);
                    t = "1%" !== e.top, r = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", i = "4px" === e.marginRight, he.removeChild(o), a = null
                }
            }
            var t, n, i, r, o = A.createElement("div"),
                a = A.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), D.extend(g, {
                pixelPosition: function() {
                    return e(), t
                },
                boxSizingReliable: function() {
                    return e(), n
                },
                pixelMarginRight: function() {
                    return e(), i
                },
                reliableMarginLeft: function() {
                    return e(), r
                }
            }))
        }();
        var Ie = /^(none|table(?!-c[ea]).+)/,
            Re = /^--/,
            _e = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            We = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            $e = ["Webkit", "Moz", "ms"],
            Be = A.createElement("div").style;

        function Ue(e) {
            var t = D.cssProps[e];
            return t || (t = D.cssProps[e] = function i(e) {
                if (e in Be) return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = $e.length; n--;)
                    if ((e = $e[n] + t) in Be) return e
            }(e) || e), t
        }

        function Ve(e, t, n) {
            var i = K.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function Xe(e, t, n, i, r) {
            var o, a = 0;
            for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += D.css(e, n + Z[o], !0, r)), i ? ("content" === n && (a -= D.css(e, "padding" + Z[o], !0, r)), "margin" !== n && (a -= D.css(e, "border" + Z[o] + "Width", !0, r))) : (a += D.css(e, "padding" + Z[o], !0, r), "padding" !== n && (a += D.css(e, "border" + Z[o] + "Width", !0, r)));
            return a
        }

        function Qe(e, t, n) {
            var i, r = Oe(e),
                o = Pe(e, t, r),
                a = "border-box" === D.css(e, "boxSizing", !1, r);
            return ze.test(o) ? o : (i = a && (g.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + Xe(e, t, n || (a ? "border" : "content"), i, r) + "px")
        }

        function Ge(e, t, n, i, r) {
            return new Ge.prototype.init(e, t, n, i, r)
        }
        D.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Pe(e, "opacity");
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
                "float": "cssFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, a, s = D.camelCase(t),
                        u = Re.test(t),
                        l = e.style;
                    return u || (t = Ue(s)), a = D.cssHooks[t] || D.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t] : ("string" === (o = typeof n) && (r = K.exec(n)) && r[1] && (n = Se(e, t, r), o = "number"), void(null != n && n == n && ("number" === o && (n += r && r[3] || (D.cssNumber[s] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (u ? l.setProperty(t, n) : l[t] = n))))
                }
            },
            css: function(e, t, n, i) {
                var r, o, a, s = D.camelCase(t);
                return Re.test(t) || (t = Ue(s)), (a = D.cssHooks[t] || D.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = Pe(e, t, i)), "normal" === r && t in We && (r = We[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
            }
        }), D.each(["height", "width"], function(e, a) {
            D.cssHooks[a] = {
                get: function(e, t, n) {
                    if (t) return !Ie.test(D.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Qe(e, a, n) : te(e, _e, function() {
                        return Qe(e, a, n)
                    })
                },
                set: function(e, t, n) {
                    var i, r = n && Oe(e),
                        o = n && Xe(e, a, n, "border-box" === D.css(e, "boxSizing", !1, r), r);
                    return o && (i = K.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t, t = D.css(e, a)), Ve(0, t, o)
                }
            }
        }), D.cssHooks.marginLeft = He(g.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(Pe(e, "marginLeft")) || e.getBoundingClientRect().left - te(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), D.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(r, o) {
            D.cssHooks[r + o] = {
                expand: function(e) {
                    for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + Z[t] + o] = i[t] || i[t - 2] || i[0];
                    return n
                }
            }, qe.test(r) || (D.cssHooks[r + o].set = Ve)
        }), D.fn.extend({
            css: function(e, t) {
                return $(this, function(e, t, n) {
                    var i, r, o = {},
                        a = 0;
                    if (Array.isArray(t)) {
                        for (i = Oe(e), r = t.length; a < r; a++) o[t[a]] = D.css(e, t[a], !1, i);
                        return o
                    }
                    return void 0 !== n ? D.style(e, t, n) : D.css(e, t)
                }, e, t, 1 < arguments.length)
            }
        }), ((D.Tween = Ge).prototype = {
            constructor: Ge,
            init: function(e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || D.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (D.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = Ge.propHooks[this.prop];
                return e && e.get ? e.get(this) : Ge.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = Ge.propHooks[this.prop];
                return this.options.duration ? this.pos = t = D.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ge.propHooks._default.set(this), this
            }
        }).init.prototype = Ge.prototype, (Ge.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = D.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    D.fx.step[e.prop] ? D.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[D.cssProps[e.prop]] && !D.cssHooks[e.prop] ? e.elem[e.prop] = e.now : D.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }).scrollTop = Ge.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, D.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, D.fx = Ge.prototype.init, D.fx.step = {};
        var Ye, Je, Ke, Ze, et = /^(?:toggle|show|hide)$/,
            tt = /queueHooks$/;

        function nt() {
            Je && (!1 === A.hidden && k.requestAnimationFrame ? k.requestAnimationFrame(nt) : k.setTimeout(nt, D.fx.interval), D.fx.tick())
        }

        function it() {
            return k.setTimeout(function() {
                Ye = void 0
            }), Ye = D.now()
        }

        function rt(e, t) {
            var n, i = 0,
                r = {
                    height: e
                };
            for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = Z[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function ot(e, t, n) {
            for (var i, r = (at.tweeners[t] || []).concat(at.tweeners["*"]), o = 0, a = r.length; o < a; o++)
                if (i = r[o].call(n, t, e)) return i
        }

        function at(o, e, t) {
            var n, a, i = 0,
                r = at.prefilters.length,
                s = D.Deferred().always(function() {
                    delete u.elem
                }),
                u = function() {
                    if (a) return !1;
                    for (var e = Ye || it(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), i = 0, r = l.tweens.length; i < r; i++) l.tweens[i].run(n);
                    return s.notifyWith(o, [l, n, t]), n < 1 && r ? t : (r || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
                },
                l = s.promise({
                    elem: o,
                    props: D.extend({}, e),
                    opts: D.extend(!0, {
                        specialEasing: {},
                        easing: D.easing._default
                    }, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: Ye || it(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function(e, t) {
                        var n = D.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                        return l.tweens.push(n), n
                    },
                    stop: function(e) {
                        var t = 0,
                            n = e ? l.tweens.length : 0;
                        if (a) return this;
                        for (a = !0; t < n; t++) l.tweens[t].run(1);
                        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                    }
                }),
                c = l.props;
            for (function f(e, t) {
                    var n, i, r, o, a;
                    for (n in e)
                        if (r = t[i = D.camelCase(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = D.cssHooks[i]) && "expand" in a)
                            for (n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                        else t[i] = r
                }(c, l.opts.specialEasing); i < r; i++)
                if (n = at.prefilters[i].call(l, o, c, l.opts)) return D.isFunction(n.stop) && (D._queueHooks(l.elem, l.opts.queue).stop = D.proxy(n.stop, n)), n;
            return D.map(c, ot, l), D.isFunction(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), D.fx.timer(D.extend(u, {
                elem: o,
                anim: l,
                queue: l.opts.queue
            })), l
        }
        D.Animation = D.extend(at, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return Se(n.elem, e, K.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                for (var n, i = 0, r = (e = D.isFunction(e) ? (t = e, ["*"]) : e.match(O)).length; i < r; i++) n = e[i], at.tweeners[n] = at.tweeners[n] || [], at.tweeners[n].unshift(t)
            },
            prefilters: [function $t(e, t, n) {
                var i, r, o, a, s, u, l, c, f = "width" in t || "height" in t,
                    d = this,
                    p = {},
                    h = e.style,
                    m = e.nodeType && ee(e),
                    g = V.get(e, "fxshow");
                for (i in n.queue || (null == (a = D._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || s()
                    }), a.unqueued++, d.always(function() {
                        d.always(function() {
                            a.unqueued--, D.queue(e, "fx").length || a.empty.fire()
                        })
                    })), t)
                    if (r = t[i], et.test(r)) {
                        if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
                            if ("show" !== r || !g || void 0 === g[i]) continue;
                            m = !0
                        }
                        p[i] = g && g[i] || D.style(e, i)
                    } if ((u = !D.isEmptyObject(t)) || !D.isEmptyObject(p))
                    for (i in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = g && g.display) && (l = V.get(e, "display")), "none" === (c = D.css(e, "display")) && (l ? c = l : (ie([e], !0), l = e.style.display || l, c = D.css(e, "display"), ie([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === D.css(e, "float") && (u || (d.done(function() {
                            h.display = l
                        }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
                            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                        })), u = !1, p) u || (g ? "hidden" in g && (m = g.hidden) : g = V.access(e, "fxshow", {
                        display: l
                    }), o && (g.hidden = !m), m && ie([e], !0), d.done(function() {
                        for (i in m || ie([e]), V.remove(e, "fxshow"), p) D.style(e, i, p[i])
                    })), u = ot(m ? g[i] : 0, i, d), i in g || (g[i] = u.start, m && (u.end = u.start, u.start = 0))
            }],
            prefilter: function(e, t) {
                t ? at.prefilters.unshift(e) : at.prefilters.push(e)
            }
        }), D.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? D.extend({}, e) : {
                complete: n || !n && t || D.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !D.isFunction(t) && t
            };
            return D.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in D.fx.speeds ? i.duration = D.fx.speeds[i.duration] : i.duration = D.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                D.isFunction(i.old) && i.old.call(this), i.queue && D.dequeue(this, i.queue)
            }, i
        }, D.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(ee).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(t, e, n, i) {
                var r = D.isEmptyObject(t),
                    o = D.speed(e, n, i),
                    a = function() {
                        var e = at(this, D.extend({}, t), o);
                        (r || V.get(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(r, e, o) {
                var a = function(e) {
                    var t = e.stop;
                    delete e.stop, t(o)
                };
                return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function() {
                    var e = !0,
                        t = null != r && r + "queueHooks",
                        n = D.timers,
                        i = V.get(this);
                    if (t) i[t] && i[t].stop && a(i[t]);
                    else
                        for (t in i) i[t] && i[t].stop && tt.test(t) && a(i[t]);
                    for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                    !e && o || D.dequeue(this, r)
                })
            },
            finish: function(a) {
                return !1 !== a && (a = a || "fx"), this.each(function() {
                    var e, t = V.get(this),
                        n = t[a + "queue"],
                        i = t[a + "queueHooks"],
                        r = D.timers,
                        o = n ? n.length : 0;
                    for (t.finish = !0, D.queue(this, a, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === a && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete t.finish
                })
            }
        }), D.each(["toggle", "show", "hide"], function(e, i) {
            var r = D.fn[i];
            D.fn[i] = function(e, t, n) {
                return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(rt(i, !0), e, t, n)
            }
        }), D.each({
            slideDown: rt("show"),
            slideUp: rt("hide"),
            slideToggle: rt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, i) {
            D.fn[e] = function(e, t, n) {
                return this.animate(i, e, t, n)
            }
        }), D.timers = [], D.fx.tick = function() {
            var e, t = 0,
                n = D.timers;
            for (Ye = D.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || D.fx.stop(), Ye = void 0
        }, D.fx.timer = function(e) {
            D.timers.push(e), D.fx.start()
        }, D.fx.interval = 13, D.fx.start = function() {
            Je || (Je = !0, nt())
        }, D.fx.stop = function() {
            Je = null
        }, D.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, D.fn.delay = function(i, e) {
            return i = D.fx && D.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
                var n = k.setTimeout(e, i);
                t.stop = function() {
                    k.clearTimeout(n)
                }
            })
        }, Ke = A.createElement("input"), Ze = A.createElement("select").appendChild(A.createElement("option")), Ke.type = "checkbox", g.checkOn = "" !== Ke.value, g.optSelected = Ze.selected, (Ke = A.createElement("input")).value = "t", Ke.type = "radio", g.radioValue = "t" === Ke.value;
        var st, ut = D.expr.attrHandle;
        D.fn.extend({
            attr: function(e, t) {
                return $(this, D.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    D.removeAttr(this, e)
                })
            }
        }), D.extend({
            attr: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? D.prop(e, t, n) : (1 === o && D.isXMLDoc(e) || (r = D.attrHooks[t.toLowerCase()] || (D.expr.match.bool.test(t) ? st : void 0)), void 0 !== n ? null === n ? void D.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = D.find.attr(e, t)) ? void 0 : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!g.radioValue && "radio" === t && C(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i = 0,
                    r = t && t.match(O);
                if (r && 1 === e.nodeType)
                    for (; n = r[i++];) e.removeAttribute(n)
            }
        }), st = {
            set: function(e, t, n) {
                return !1 === t ? D.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, D.each(D.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var a = ut[t] || D.find.attr;
            ut[t] = function(e, t, n) {
                var i, r, o = t.toLowerCase();
                return n || (r = ut[o], ut[o] = i, i = null != a(e, t, n) ? o : null, ut[o] = r), i
            }
        });
        var lt = /^(?:input|select|textarea|button)$/i,
            ct = /^(?:a|area)$/i;

        function ft(e) {
            return (e.match(O) || []).join(" ")
        }

        function dt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        D.fn.extend({
            prop: function(e, t) {
                return $(this, D.prop, e, t, 1 < arguments.length)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[D.propFix[e] || e]
                })
            }
        }), D.extend({
            prop: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && D.isXMLDoc(e) || (t = D.propFix[t] || t, r = D.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = D.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : lt.test(e.nodeName) || ct.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), g.optSelected || (D.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), D.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            D.propFix[this.toLowerCase()] = this
        }), D.fn.extend({
            addClass: function(t) {
                var e, n, i, r, o, a, s, u = 0;
                if (D.isFunction(t)) return this.each(function(e) {
                    D(this).addClass(t.call(this, e, dt(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(O) || []; n = this[u++];)
                        if (r = dt(n), i = 1 === n.nodeType && " " + ft(r) + " ") {
                            for (a = 0; o = e[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            r !== (s = ft(i)) && n.setAttribute("class", s)
                        } return this
            },
            removeClass: function(t) {
                var e, n, i, r, o, a, s, u = 0;
                if (D.isFunction(t)) return this.each(function(e) {
                    D(this).removeClass(t.call(this, e, dt(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(O) || []; n = this[u++];)
                        if (r = dt(n), i = 1 === n.nodeType && " " + ft(r) + " ") {
                            for (a = 0; o = e[a++];)
                                for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                            r !== (s = ft(i)) && n.setAttribute("class", s)
                        } return this
            },
            toggleClass: function(r, t) {
                var o = typeof r;
                return "boolean" == typeof t && "string" === o ? t ? this.addClass(r) : this.removeClass(r) : D.isFunction(r) ? this.each(function(e) {
                    D(this).toggleClass(r.call(this, e, dt(this), t), t)
                }) : this.each(function() {
                    var e, t, n, i;
                    if ("string" === o)
                        for (t = 0, n = D(this), i = r.match(O) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                    else void 0 !== r && "boolean" !== o || ((e = dt(this)) && V.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : V.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && -1 < (" " + ft(dt(n)) + " ").indexOf(t)) return !0;
                return !1
            }
        });
        var pt = /\r/g;
        D.fn.extend({
            val: function(n) {
                var i, e, r, t = this[0];
                return arguments.length ? (r = D.isFunction(n), this.each(function(e) {
                    var t;
                    1 === this.nodeType && (null == (t = r ? n.call(this, e, D(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = D.map(t, function(e) {
                        return null == e ? "" : e + ""
                    })), (i = D.valHooks[this.type] || D.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
                })) : t ? (i = D.valHooks[t.type] || D.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(pt, "") : null == e ? "" : e : void 0
            }
        }), D.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = D.find.attr(e, "value");
                        return null != t ? t : ft(D.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, i, r = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : r.length;
                        for (i = o < 0 ? u : a ? o : 0; i < u; i++)
                            if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !C(n.parentNode, "optgroup"))) {
                                if (t = D(n).val(), a) return t;
                                s.push(t)
                            } return s
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, o = D.makeArray(t), a = r.length; a--;)((i = r[a]).selected = -1 < D.inArray(D.valHooks.option.get(i), o)) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), D.each(["radio", "checkbox"], function() {
            D.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = -1 < D.inArray(D(e).val(), t)
                }
            }, g.checkOn || (D.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var ht = /^(?:focusinfocus|focusoutblur)$/;
        D.extend(D.event, {
            trigger: function(e, t, n, i) {
                var r, o, a, s, u, l, c, f = [n || A],
                    d = E.call(e, "type") ? e.type : e,
                    p = E.call(e, "namespace") ? e.namespace.split(".") : [];
                if (o = a = n = n || A, 3 !== n.nodeType && 8 !== n.nodeType && !ht.test(d + D.event.triggered) && (-1 < d.indexOf(".") && (d = (p = d.split(".")).shift(), p.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[D.expando] ? e : new D.Event(d, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : D.makeArray(t, [e]), c = D.event.special[d] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                    if (!i && !c.noBubble && !D.isWindow(n)) {
                        for (s = c.delegateType || d, ht.test(s + d) || (o = o.parentNode); o; o = o.parentNode) f.push(o), a = o;
                        a === (n.ownerDocument || A) && f.push(a.defaultView || a.parentWindow || k)
                    }
                    for (r = 0;
                        (o = f[r++]) && !e.isPropagationStopped();) e.type = 1 < r ? s : c.bindType || d, (l = (V.get(o, "events") || {})[e.type] && V.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && B(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                    return e.type = d, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), t) || !B(n) || u && D.isFunction(n[d]) && !D.isWindow(n) && ((a = n[u]) && (n[u] = null), n[D.event.triggered = d](), D.event.triggered = void 0, a && (n[u] = a)), e.result
                }
            },
            simulate: function(e, t, n) {
                var i = D.extend(new D.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                D.event.trigger(i, null, t)
            }
        }), D.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    D.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return D.event.trigger(e, t, n, !0)
            }
        }), D.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
            D.fn[n] = function(e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        }), D.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), g.focusin = "onfocusin" in k, g.focusin || D.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, i) {
            var r = function(e) {
                D.event.simulate(i, e.target, D.event.fix(e))
            };
            D.event.special[i] = {
                setup: function() {
                    var e = this.ownerDocument || this,
                        t = V.access(e, i);
                    t || e.addEventListener(n, r, !0), V.access(e, i, (t || 0) + 1)
                },
                teardown: function() {
                    var e = this.ownerDocument || this,
                        t = V.access(e, i) - 1;
                    t ? V.access(e, i, t) : (e.removeEventListener(n, r, !0), V.remove(e, i))
                }
            }
        });
        var mt = k.location,
            gt = D.now(),
            vt = /\?/;
        D.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new k.DOMParser).parseFromString(e, "text/xml")
            } catch (A) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || D.error("Invalid XML: " + e), t
        };
        var yt = /\[\]$/,
            xt = /\r?\n/g,
            bt = /^(?:submit|button|image|reset|file)$/i,
            wt = /^(?:input|select|textarea|keygen)/i;

        function Ct(n, e, i, r) {
            var t;
            if (Array.isArray(e)) D.each(e, function(e, t) {
                i || yt.test(n) ? r(n, t) : Ct(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
            });
            else if (i || "object" !== D.type(e)) r(n, e);
            else
                for (t in e) Ct(n + "[" + t + "]", e[t], i, r)
        }
        D.param = function(e, t) {
            var n, i = [],
                r = function(e, t) {
                    var n = D.isFunction(t) ? t() : t;
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (Array.isArray(e) || e.jquery && !D.isPlainObject(e)) D.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (n in e) Ct(n, e[n], t, r);
            return i.join("&")
        }, D.fn.extend({
            serialize: function() {
                return D.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = D.prop(this, "elements");
                    return e ? D.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !D(this).is(":disabled") && wt.test(this.nodeName) && !bt.test(e) && (this.checked || !re.test(e))
                }).map(function(e, t) {
                    var n = D(this).val();
                    return null == n ? null : Array.isArray(n) ? D.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(xt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(xt, "\r\n")
                    }
                }).get()
            }
        });
        var St = /%20/g,
            Tt = /#.*$/,
            kt = /([?&])_=[^&]*/,
            At = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Et = /^(?:GET|HEAD)$/,
            Dt = /^\/\//,
            Lt = {},
            Nt = {},
            Ft = "*/".concat("*"),
            Mt = A.createElement("a");

        function jt(o) {
            return function(e, t) {
                "string" != typeof e && (t = e, e = "*");
                var n, i = 0,
                    r = e.toLowerCase().match(O) || [];
                if (D.isFunction(t))
                    for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
            }
        }

        function qt(t, r, o, a) {
            var s = {},
                u = t === Nt;

            function l(e) {
                var i;
                return s[e] = !0, D.each(t[e] || [], function(e, t) {
                    var n = t(r, o, a);
                    return "string" != typeof n || u || s[n] ? u ? !(i = n) : void 0 : (r.dataTypes.unshift(n), l(n), !1)
                }), i
            }
            return l(r.dataTypes[0]) || !s["*"] && l("*")
        }

        function zt(e, t) {
            var n, i, r = D.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && D.extend(!0, e, i), e
        }
        Mt.href = mt.href, D.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: mt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(mt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ft,
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
                    "text xml": D.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? zt(zt(e, D.ajaxSettings), t) : zt(D.ajaxSettings, e)
            },
            ajaxPrefilter: jt(Lt),
            ajaxTransport: jt(Nt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var d, p, h, n, m, i, g, v, r, o, y = D.ajaxSetup({}, t),
                    x = y.context || y,
                    b = y.context && (x.nodeType || x.jquery) ? D(x) : D.event,
                    w = D.Deferred(),
                    C = D.Callbacks("once memory"),
                    S = y.statusCode || {},
                    a = {},
                    s = {},
                    u = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (g) {
                                if (!n)
                                    for (n = {}; t = At.exec(h);) n[t[1].toLowerCase()] = t[2];
                                t = n[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return g ? h : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == g && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == g && (y.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (g) T.always(e[T.status]);
                                else
                                    for (t in e) S[t] = [S[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || u;
                            return d && d.abort(t), l(0, t), this
                        }
                    };
                if (w.promise(T), y.url = ((e || y.url || mt.href) + "").replace(Dt, mt.protocol + "//"), y.type = t.method || t.type || y.method || y.type, y.dataTypes = (y.dataType || "*").toLowerCase().match(O) || [""], null == y.crossDomain) {
                    i = A.createElement("a");
                    try {
                        i.href = y.url, i.href = i.href, y.crossDomain = Mt.protocol + "//" + Mt.host != i.protocol + "//" + i.host
                    } catch (L) {
                        y.crossDomain = !0
                    }
                }
                if (y.data && y.processData && "string" != typeof y.data && (y.data = D.param(y.data, y.traditional)), qt(Lt, y, t, T), g) return T;
                for (r in (v = D.event && y.global) && 0 == D.active++ && D.event.trigger("ajaxStart"), y.type = y.type.toUpperCase(), y.hasContent = !Et.test(y.type), p = y.url.replace(Tt, ""), y.hasContent ? y.data && y.processData && 0 === (y.contentType || "").indexOf("application/x-www-form-urlencoded") && (y.data = y.data.replace(St, "+")) : (o = y.url.slice(p.length), y.data && (p += (vt.test(p) ? "&" : "?") + y.data, delete y.data), !1 === y.cache && (p = p.replace(kt, "$1"), o = (vt.test(p) ? "&" : "?") + "_=" + gt++ + o), y.url = p + o), y.ifModified && (D.lastModified[p] && T.setRequestHeader("If-Modified-Since", D.lastModified[p]), D.etag[p] && T.setRequestHeader("If-None-Match", D.etag[p])), (y.data && y.hasContent && !1 !== y.contentType || t.contentType) && T.setRequestHeader("Content-Type", y.contentType), T.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : y.accepts["*"]), y.headers) T.setRequestHeader(r, y.headers[r]);
                if (y.beforeSend && (!1 === y.beforeSend.call(x, T, y) || g)) return T.abort();
                if (u = "abort", C.add(y.complete), T.done(y.success), T.fail(y.error), d = qt(Nt, y, t, T)) {
                    if (T.readyState = 1, v && b.trigger("ajaxSend", [T, y]), g) return T;
                    y.async && 0 < y.timeout && (m = k.setTimeout(function() {
                        T.abort("timeout")
                    }, y.timeout));
                    try {
                        g = !1, d.send(a, l)
                    } catch (L) {
                        if (g) throw L;
                        l(-1, L)
                    }
                } else l(-1, "No Transport");

                function l(e, t, n, i) {
                    var r, o, a, s, u, l = t;
                    g || (g = !0, m && k.clearTimeout(m), d = void 0, h = i || "", T.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (s = function c(e, t, n) {
                        for (var i, r, o, a, s = e.contents, u = e.dataTypes;
                            "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (i)
                            for (r in s)
                                if (s[r] && s[r].test(i)) {
                                    u.unshift(r);
                                    break
                                } if (u[0] in n) o = u[0];
                        else {
                            for (r in n) {
                                if (!u[0] || e.converters[r + " " + u[0]]) {
                                    o = r;
                                    break
                                }
                                a || (a = r)
                            }
                            o = o || a
                        }
                        if (o) return o !== u[0] && u.unshift(o), n[o]
                    }(y, T, n)), s = function f(e, t, n, i) {
                        var r, o, a, s, u, l = {},
                            c = e.dataTypes.slice();
                        if (c[1])
                            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                        for (o = c.shift(); o;)
                            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                                if ("*" === o) o = u;
                                else if ("*" !== u && u !== o) {
                            if (!(a = l[u + " " + o] || l["* " + o]))
                                for (r in l)
                                    if ((s = r.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                        !0 === a ? a = l[r] : !0 !== l[r] && (o = s[0], c.unshift(s[1]));
                                        break
                                    } if (!0 !== a)
                                if (a && e["throws"]) t = a(t);
                                else try {
                                    t = a(t)
                                } catch (E) {
                                    return {
                                        state: "parsererror",
                                        error: a ? E : "No conversion from " + u + " to " + o
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(y, s, T, r), r ? (y.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (D.lastModified[p] = u), (u = T.getResponseHeader("etag")) && (D.etag[p] = u)), 204 === e || "HEAD" === y.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, r = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", r ? w.resolveWith(x, [o, l, T]) : w.rejectWith(x, [T, l, a]), T.statusCode(S), S = void 0, v && b.trigger(r ? "ajaxSuccess" : "ajaxError", [T, y, r ? o : a]), C.fireWith(x, [T, l]), v && (b.trigger("ajaxComplete", [T, y]), --D.active || D.event.trigger("ajaxStop")))
                }
                return T
            },
            getJSON: function(e, t, n) {
                return D.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return D.get(e, void 0, t, "script")
            }
        }), D.each(["get", "post"], function(e, r) {
            D[r] = function(e, t, n, i) {
                return D.isFunction(t) && (i = i || n, n = t, t = void 0), D.ajax(D.extend({
                    url: e,
                    type: r,
                    dataType: i,
                    data: t,
                    success: n
                }, D.isPlainObject(e) && e))
            }
        }), D._evalUrl = function(e) {
            return D.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }, D.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (D.isFunction(e) && (e = e.call(this[0])), t = D(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(n) {
                return D.isFunction(n) ? this.each(function(e) {
                    D(this).wrapInner(n.call(this, e))
                }) : this.each(function() {
                    var e = D(this),
                        t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function(t) {
                var n = D.isFunction(t);
                return this.each(function(e) {
                    D(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    D(this).replaceWith(this.childNodes)
                }), this
            }
        }), D.expr.pseudos.hidden = function(e) {
            return !D.expr.pseudos.visible(e)
        }, D.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, D.ajaxSettings.xhr = function() {
            try {
                return new k.XMLHttpRequest
            } catch (e) {}
        };
        var Ot = {
                0: 200,
                1223: 204
            },
            Pt = D.ajaxSettings.xhr();
        g.cors = !!Pt && "withCredentials" in Pt, g.ajax = Pt = !!Pt, D.ajaxTransport(function(r) {
            var o, a;
            if (g.cors || Pt && !r.crossDomain) return {
                send: function(e, t) {
                    var n, i = r.xhr();
                    if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                        for (n in r.xhrFields) i[n] = r.xhrFields[n];
                    for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = i.onload = i.onerror = i.onabort = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Ot[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                binary: i.response
                            } : {
                                text: i.responseText
                            }, i.getAllResponseHeaders()))
                        }
                    }, i.onload = o(), a = i.onerror = o("error"), void 0 !== i.onabort ? i.onabort = a : i.onreadystatechange = function() {
                        4 === i.readyState && k.setTimeout(function() {
                            o && a()
                        })
                    }, o = o("abort");
                    try {
                        i.send(r.hasContent && r.data || null)
                    } catch (l) {
                        if (o) throw l
                    }
                },
                abort: function() {
                    o && o()
                }
            }
        }), D.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), D.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return D.globalEval(e), e
                }
            }
        }), D.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), D.ajaxTransport("script", function(n) {
            var i, r;
            if (n.crossDomain) return {
                send: function(e, t) {
                    i = D("<script>").prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", r = function(e) {
                        i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
                    }), A.head.appendChild(i[0])
                },
                abort: function() {
                    r && r()
                }
            }
        });
        var Ht, It = [],
            Rt = /(=)\?(?=&|$)|\?\?/;
        D.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = It.pop() || D.expando + "_" + gt++;
                return this[e] = !0, e
            }
        }), D.ajaxPrefilter("json jsonp", function(e, t, n) {
            var i, r, o, a = !1 !== e.jsonp && (Rt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Rt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = D.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Rt, "$1" + i) : !1 !== e.jsonp && (e.url += (vt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                return o || D.error(i + " was not called"), o[0]
            }, e.dataTypes[0] = "json", r = k[i], k[i] = function() {
                o = arguments
            }, n.always(function() {
                void 0 === r ? D(k).removeProp(i) : k[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, It.push(i)), o && D.isFunction(r) && r(o[0]), o = r = void 0
            }), "script"
        }), g.createHTMLDocument = ((Ht = A.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ht.childNodes.length), D.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((i = (t = A.implementation.createHTMLDocument("")).createElement("base")).href = A.location.href, t.head.appendChild(i)) : t = A), o = !n && [], (r = S.exec(e)) ? [t.createElement(r[1])] : (r = pe([e], t, o), o && o.length && D(o).remove(), D.merge([], r.childNodes)));
            var i, r, o
        }, D.fn.load = function(e, t, n) {
            var i, r, o, a = this,
                s = e.indexOf(" ");
            return -1 < s && (i = ft(e.slice(s)), e = e.slice(0, s)), D.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < a.length && D.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, a.html(i ? D("<div>").append(D.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }), this
        }, D.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            D.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), D.expr.pseudos.animated = function(t) {
            return D.grep(D.timers, function(e) {
                return t === e.elem
            }).length
        }, D.offset = {
            setOffset: function(e, t, n) {
                var i, r, o, a, s, u, l = D.css(e, "position"),
                    c = D(e),
                    f = {};
                "static" === l && (e.style.position = "relative"), s = c.offset(), o = D.css(e, "top"), u = D.css(e, "left"), r = ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (i = c.position()).top, i.left) : (a = parseFloat(o) || 0, parseFloat(u) || 0), D.isFunction(t) && (t = t.call(e, n, D.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : c.css(f)
            }
        }, D.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    D.offset.setOffset(this, t, e)
                });
                var e, n, i, r, o = this[0];
                return o ? o.getClientRects().length ? (i = o.getBoundingClientRect(), n = (e = o.ownerDocument).documentElement, r = e.defaultView, {
                    top: i.top + r.pageYOffset - n.clientTop,
                    left: i.left + r.pageXOffset - n.clientLeft
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === D.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), C(e[0], "html") || (i = e.offset()), i = {
                        top: i.top + D.css(e[0], "borderTopWidth", !0),
                        left: i.left + D.css(e[0], "borderLeftWidth", !0)
                    }), {
                        top: t.top - i.top - D.css(n, "marginTop", !0),
                        left: t.left - i.left - D.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === D.css(e, "position");) e = e.offsetParent;
                    return e || he
                })
            }
        }), D.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, r) {
            var o = "pageYOffset" === r;
            D.fn[t] = function(e) {
                return $(this, function(e, t, n) {
                    var i;
                    return D.isWindow(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n ? i ? i[r] : e[t] : void(i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n)
                }, t, e, arguments.length)
            }
        }), D.each(["top", "left"], function(e, n) {
            D.cssHooks[n] = He(g.pixelPosition, function(e, t) {
                if (t) return t = Pe(e, n), ze.test(t) ? D(e).position()[n] + "px" : t
            })
        }), D.each({
            Height: "height",
            Width: "width"
        }, function(a, s) {
            D.each({
                padding: "inner" + a,
                content: s,
                "": "outer" + a
            }, function(i, o) {
                D.fn[o] = function(e, t) {
                    var n = arguments.length && (i || "boolean" != typeof e),
                        r = i || (!0 === e || !0 === t ? "margin" : "border");
                    return $(this, function(e, t, n) {
                        var i;
                        return D.isWindow(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + a], i["scroll" + a], e.body["offset" + a], i["offset" + a], i["client" + a])) : void 0 === n ? D.css(e, t, r) : D.style(e, t, n, r)
                    }, s, n ? e : void 0, n)
                }
            })
        }), D.fn.extend({
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
        }), D.holdReady = function(e) {
            e ? D.readyWait++ : D.ready(!0)
        }, D.isArray = Array.isArray, D.parseJSON = JSON.parse, D.nodeName = C, "function" == typeof define && define.amd && define("jquery", [], function() {
            return D
        });
        var _t = k.jQuery,
            Wt = k.$;
        return D.noConflict = function(e) {
            return k.$ === D && (k.$ = Wt), e && k.jQuery === D && (k.jQuery = _t), D
        }, e || (k.jQuery = k.$ = D), D
    }), function(e, t) {
        "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Spinner = t()
    }(this, function() {
        "use strict";

        function m(e, t) {
            var n, i = document.createElement(e || "div");
            for (n in t) i[n] = t[n];
            return i
        }

        function g(e) {
            for (var t = 1, n = arguments.length; t < n; t++) e.appendChild(arguments[t]);
            return e
        }

        function i(e, t) {
            var n, i, r = e.style;
            for (t = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < o.length; i++)
                if (void 0 !== r[n = o[i] + t]) return n;
            return void 0 !== r[t] ? t : void 0
        }

        function v(e, t) {
            for (var n in t) e.style[i(e, n) || n] = t[n];
            return e
        }

        function t(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) void 0 === e[i] && (e[i] = n[i])
            }
            return e
        }

        function y(e, t) {
            return "string" == typeof e ? e : e[t % e.length]
        }

        function n(e) {
            this.opts = t(e || {}, n.defaults, r)
        }
        var x, e, o = ["webkit", "Moz", "ms", "O"],
            b = {},
            w = (e = m("style", {
                type: "text/css"
            }), g(document.getElementsByTagName("head")[0], e), e.sheet || e.styleSheet),
            r = {
                lines: 12,
                length: 7,
                width: 5,
                radius: 10,
                rotate: 0,
                corners: 1,
                color: "#000",
                direction: 1,
                speed: 1,
                trail: 100,
                opacity: .25,
                fps: 20,
                zIndex: 2e9,
                className: "spinner",
                top: "50%",
                left: "50%",
                position: "absolute"
            };
        n.defaults = {}, t(n.prototype, {
            spin: function(e) {
                this.stop();
                var t = this,
                    n = t.opts,
                    i = t.el = v(m(0, {
                        className: n.className
                    }), {
                        position: n.position,
                        width: 0,
                        zIndex: n.zIndex
                    });
                if (n.radius, n.length, n.width, v(i, {
                        left: n.left,
                        top: n.top
                    }), e && e.insertBefore(i, e.firstChild || null), i.setAttribute("role", "progressbar"), t.lines(i, t.opts), !x) {
                    var r, o = 0,
                        a = (n.lines - 1) * (1 - n.direction) / 2,
                        s = n.fps,
                        u = s / n.speed,
                        l = (1 - n.opacity) / (u * n.trail / 100),
                        c = u / n.lines;
                    ! function f() {
                        o++;
                        for (var e = 0; e < n.lines; e++) r = Math.max(1 - (o + (n.lines - e) * c) % u * l, n.opacity), t.opacity(i, e * n.direction + a, r, n);
                        t.timeout = t.el && setTimeout(f, ~~(1e3 / s))
                    }()
                }
                return t
            },
            stop: function() {
                var e = this.el;
                return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = void 0), this
            },
            lines: function(e, n) {
                function t(e, t) {
                    return v(m(), {
                        position: "absolute",
                        width: n.length + n.width + "px",
                        height: n.width + "px",
                        background: e,
                        boxShadow: t,
                        transformOrigin: "left",
                        transform: "rotate(" + ~~(360 / n.lines * r + n.rotate) + "deg) translate(" + n.radius + "px,0)",
                        borderRadius: (n.corners * n.width >> 1) + "px"
                    })
                }
                for (var i, r = 0, o = (n.lines - 1) * (1 - n.direction) / 2; r < n.lines; r++) i = v(m(), {
                    position: "absolute",
                    top: 1 + ~(n.width / 2) + "px",
                    transform: n.hwaccel ? "translate3d(0,0,0)" : "",
                    opacity: n.opacity,
                    animation: x && (a = n.opacity, s = n.trail, u = o + r * n.direction, l = n.lines, void 0, void 0, void 0, void 0, void 0, c = ["opacity", s, ~~(100 * a), u, l].join("-"), f = .01 + u / l * 100, d = Math.max(1 - (1 - a) / s * (100 - f), a), p = x.substring(0, x.indexOf("Animation")).toLowerCase(), h = p && "-" + p + "-" || "", b[c] || (w.insertRule("@" + h + "keyframes " + c + "{0%{opacity:" + d + "}" + f + "%{opacity:" + a + "}" + (f + .01) + "%{opacity:1}" + (f + s) % 100 + "%{opacity:" + a + "}100%{opacity:" + d + "}}", w.cssRules.length), b[c] = 1), c + " " + 1 / n.speed + "s linear infinite")
                }), n.shadow && g(i, v(t("#000", "0 0 4px #000"), {
                    top: "2px"
                })), g(e, g(i, t(y(n.color, r), "0 0 1px rgba(0,0,0,.1)")));
                var a, s, u, l, c, f, d, p, h;
                return e
            },
            opacity: function(e, t, n) {
                t < e.childNodes.length && (e.childNodes[t].style.opacity = n)
            }
        });
        var a = v(m("group"), {
            behavior: "url(#default#VML)"
        });
        return !i(a, "transform") && a.adj ? function s() {
            function l(e, t) {
                return m("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', t)
            }
            w.addRule(".spin-vml", "behavior:url(#default#VML)"), n.prototype.lines = function(e, i) {
                function r() {
                    return v(l("group", {
                        coordsize: a + " " + a,
                        coordorigin: -o + " " + -o
                    }), {
                        width: a,
                        height: a
                    })
                }

                function t(e, t, n) {
                    g(u, g(v(r(), {
                        rotation: 360 / i.lines * e + "deg",
                        left: ~~t
                    }), g(v(l("roundrect", {
                        arcsize: i.corners
                    }), {
                        width: o,
                        height: i.width,
                        left: i.radius,
                        top: -i.width >> 1,
                        filter: n
                    }), l("fill", {
                        color: y(i.color, e),
                        opacity: i.opacity
                    }), l("stroke", {
                        opacity: 0
                    }))))
                }
                var n, o = i.length + i.width,
                    a = 2 * o,
                    s = 2 * -(i.width + i.length) + "px",
                    u = v(r(), {
                        position: "absolute",
                        top: s,
                        left: s
                    });
                if (i.shadow)
                    for (n = 1; n <= i.lines; n++) t(n, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                for (n = 1; n <= i.lines; n++) t(n);
                return g(e, u)
            }, n.prototype.opacity = function(e, t, n, i) {
                var r = e.firstChild;
                i = i.shadow && i.lines || 0, r && t + i < r.childNodes.length && (r = (r = (r = r.childNodes[t + i]) && r.firstChild) && r.firstChild) && (r.opacity = n)
            }
        }() : x = i(a, "animation"), n
    }), void 0 === Mozilla) var Mozilla = {};
if (function() {
        "use strict";
        var e = {
                initMobileDownloadLinks: function() {
                    if ("android" === site.platform)
                        for (var e = document.querySelectorAll('a[href^="https://play.google.com/store/apps/"]'), t = 0; t < e.length; ++t) {
                            var n = e[t],
                                i = n.getAttribute("href").replace("https://play.google.com/store/apps/", "market://");
                            n.setAttribute("href", i)
                        }
                },
                maybeSwitchToDistDownloadLinks: function(e) {
                    if (e.distribution && "default" !== e.distribution) {
                        for (var t = e.distribution.toLowerCase(), n = document.querySelectorAll("a[data-" + t + "-link]"), i = document.querySelectorAll("img[data-" + t + "-link]"), r = 0; r < n.length; r++) {
                            var o = n[r].getAttribute("data-" + t + "-link");
                            n[r].setAttribute("href", o)
                        }
                        for (var a = 0; a < i.length; a++) {
                            var s = i[a].getAttribute("data-" + t + "-link");
                            i[a].setAttribute("src", s)
                        }
                    }
                },
                doRedirect: function(e) {
                    e && (window.location.href = e)
                }
            },
            t = document.getElementById("strings");
        e.trans = function(e) {
            return t ? t.getAttribute("data-" + e) : undefined
        }, window.Mozilla.Utils = e
    }(), $(function() {
        "use strict";
        ! function r() {
            var e = $(".footer-newsletter-form input[type=submit]"),
                t = $(".footer-newsletter-form #form-details"),
                n = $(".footer-newsletter-form .form-details");

            function i() {
                t.is(":visible") || (t.slideDown("normal"), n.slideDown("normal"))
            }
            $(".footer-newsletter-form").on("focus", "select, input", i), e.on("click", function(e) {
                t.is(":visible") || (e.preventDefault(), i())
            })
        }(), $("#newsletter-form").on("submit", function(e) {
            e.preventDefault();
            var a = $(this),
                s = $("#footer-email-errors"),
                u = s.find("ul.errorlist"),
                t = $("#footer_email_submit"),
                n = $("#newsletter-spinner"),
                i = "#000";
            a.data("spinner-color") && (i = a.data("spinner-color"));
            var r = new Spinner({
                lines: 12,
                length: 4,
                width: 2,
                radius: 4,
                corners: 0,
                rotate: 0,
                direction: 1,
                color: i,
                speed: 1,
                trail: 60,
                shadow: !1,
                hwaccel: !0
            });
            s.hide(), u.empty();
            var o = a.serialize();

            function l() {
                a.removeClass("loading"), a.find("input,select").prop("disabled", !1), t.removeClass("insensitive"), r.stop(), n.hide()
            }! function c() {
                a.addClass("loading"), a.find("input,select").prop("disabled", !0), t.addClass("insensitive"), r.spin(n.show()[0])
            }(), $.ajax(a.attr("action"), {
                method: "post",
                data: o,
                dataType: "json"
            }).done(function(e) {
                if (e.success) {
                    var t = $("#newsletter-form-thankyou"),
                        n = a.css("height");
                    t.css("min-height", n), a.hide(), l(), t.show();
                    var i = function o(e) {
                        var t = e.children("input[name=newsletters]");
                        return 0 === t.length ? "Registered for Firefox Updates" : t.val()
                    }(a);
                    window.dataLayer.push({
                        event: "newsletter-signup-success",
                        newsletter: i
                    })
                } else if (e.errors) {
                    for (var r = 0; r < e.errors.length; r++) u.append("<li>" + e.errors[r] + "</li>");
                    s.show(), l()
                }
            }).fail(function() {
                u.append("<li>An unknown error occurred. Please try again later</li>"), s.show(), l()
            })
        })
    }), void 0 === Mozilla) Mozilla = {};
if (function() {
        "use strict";
        var l = {};
        l._isFirefox = function(e) {
            return e = e || navigator.userAgent, /\s(Firefox|FxiOS)/.test(e) && !l._isLikeFirefox(e)
        }, l._isFirefoxDesktop = function(e) {
            return e = e || navigator.userAgent, /\sFirefox/.test(e) && !/Mobile|Tablet|Fennec/.test(e) && !l._isLikeFirefox(e)
        }, l._isFirefoxAndroid = function(e) {
            return e = e || navigator.userAgent, /\sFirefox/.test(e) && /Android/.test(e)
        }, l._isFirefoxiOS = function(e) {
            return e = e || navigator.userAgent, /FxiOS/.test(e)
        }, l._isFirefoxFxOS = function(e, t) {
            return e = e || navigator.userAgent, t = "" === t ? "" : t || navigator.platform, /Firefox/.test(e) && "" === t
        }, l._isLikeFirefox = function(e) {
            return e = e || navigator.userAgent, /Iceweasel|IceCat|SeaMonkey|Camino|like\ Firefox/i.test(e)
        }, l._getFirefoxVersion = function(e) {
            e = e || navigator.userAgent;
            var t = /Firefox\/(\d+(?:\.\d+){1,2})/.exec(e);
            return t && !l._isLikeFirefox(e) ? t[1] : "0"
        }, l._getFirefoxMajorVersion = function(e) {
            return parseInt(l._getFirefoxVersion(e), 10)
        }, l._compareVersion = function(e, t, n) {
            for (var i = 0, r = 0, o = !1; n.length < t.length;) n.push("0");
            for (; t.length < n.length;) t.push("0");
            e || (n.length = 1);
            for (var a = 0; a < n.length; a++) {
                if ((i = Number(t[a])) < (r = Number(n[a]))) {
                    o = !1;
                    break
                }
                if (r < i) {
                    o = !0;
                    break
                }
                o = !0
            }
            return o
        }, l._isFirefoxUpToDate = function(e, t, n) {
            e = e === undefined || e, t = t !== undefined && t, n = n === undefined ? l._getFirefoxVersion() : n;
            var i = document.documentElement;
            if (!i.getAttribute("data-esr-versions") || !i.getAttribute("data-latest-firefox")) return !1;
            var r = t ? i.getAttribute("data-esr-versions").split(" ") : [i.getAttribute("data-latest-firefox")],
                o = n.match(/^(\d+(?:\.\d+){1,2})/)[1].split("."),
                a = !1;
            r.sort(function(e, t) {
                return parseFloat(e) < parseFloat(t)
            });
            for (var s = 0; s < r.length; s++) {
                var u = r[s].split(".");
                if (a = l._compareVersion(e, o, u)) break
            }
            return a
        }, l.isFirefoxOutOfDate = function(e, t, n) {
            var i = parseInt(e, 10),
                r = void 0 === n ? parseInt(document.documentElement.getAttribute("data-latest-firefox"), 10) : parseInt(n, 10),
                o = Math.max(parseInt(t, 10), 1);
            return !(isNaN(r) || isNaN(i) || isNaN(o)) && i <= r - o
        }, l.isFirefoxURLOutOfDate = function(e, t, n) {
            var i = void 0 === t ? window.location.pathname : t,
                r = /firefox\/(\d+(?:\.\d+)?\.\da?\d?)/.exec(i),
                o = r ? parseInt(r[1], 10) : null,
                a = void 0 === n ? parseInt(document.documentElement.getAttribute("data-latest-firefox"), 10) : parseInt(n, 10),
                s = Math.max(parseInt(e, 10), 1);
            return !!(o && a && o <= a - s)
        }, l.getFirefoxDetails = function(s) {
            if (l.FirefoxDetails) s(l.FirefoxDetails);
            else {
                var t = Math.random().toString(36).replace(/[^a-z]+/g, ""),
                    u = function(e) {
                        e.detail && e.detail.data && e.detail.callbackID === t && (window.clearTimeout(r), n(!0, e.detail.data.version, e.detail.data.defaultUpdateChannel, e.detail.data.distribution))
                    },
                    n = function(e, t, n, i) {
                        document.removeEventListener("mozUITourResponse", u, !1);
                        var r = "esr" === n,
                            o = l._isFirefoxUpToDate(e, !!e && r, t),
                            a = l.FirefoxDetails = {
                                accurate: e,
                                version: t,
                                channel: n,
                                distribution: i,
                                isUpToDate: o,
                                isESR: r
                            };
                        s(a)
                    },
                    e = l._getFirefoxVersion(),
                    i = function() {
                        n(!1, e, "release", undefined)
                    };
                if (parseFloat(e) < 35 || l._isFirefoxAndroid()) i();
                else {
                    var r = window.setTimeout(i, 400);
                    document.addEventListener("mozUITourResponse", u, !1), document.dispatchEvent(new CustomEvent("mozUITour", {
                        bubbles: !0,
                        detail: {
                            action: "getConfiguration",
                            data: {
                                configuration: "appinfo",
                                callbackID: t
                            }
                        }
                    }))
                }
            }
        }, l.getFxaDetails = function(e) {
            if (l.FxaDetails) e(l.FxaDetails);
            else {
                var t = {
                    firefox: !1,
                    legacy: !1,
                    mobile: !1,
                    setup: !1,
                    desktopDevices: !1,
                    mobileDevices: !1
                };
                if (l.isFirefoxAndroid) t.firefox = !0, t.mobile = "android", a();
                else if (l.isFirefoxiOS) t.firefox = !0, t.mobile = "ios", a();
                else if (l.isFirefoxDesktop) {
                    t.firefox = !0;
                    var n = l._getFirefoxVersion();
                    if (parseFloat(n) < 29) t.legacy = !0;
                    else {
                        parseFloat(n) < 40 && (t.legacy = !0);
                        var i = Math.random().toString(36).replace(/[^a-z]+/g, ""),
                            r = function(e) {
                                e.detail && e.detail.data && e.detail.callbackID === i && (window.clearTimeout(o), document.removeEventListener("mozUITourResponse", r, !1), t.setup = e.detail.data.hasOwnProperty("setup") ? e.detail.data.setup : "unknown", t.desktopDevices = e.detail.data.hasOwnProperty("desktopDevices") ? e.detail.data.desktopDevices : "unknown", t.mobileDevices = e.detail.data.hasOwnProperty("mobileDevices") ? e.detail.data.mobileDevices : "unknown", a())
                            };
                        document.addEventListener("mozUITourResponse", r, !1), document.dispatchEvent(new CustomEvent("mozUITour", {
                            bubbles: !0,
                            detail: {
                                action: "getConfiguration",
                                data: {
                                    configuration: "sync",
                                    callbackID: i
                                }
                            }
                        }))
                    }
                }
                var o = window.setTimeout(a, 400)
            }

            function a() {
                window.clearTimeout(o), l.FxaDetails = t, e(t)
            }
        }, l.isFirefox = l._isFirefox(), l.isFirefoxDesktop = l._isFirefoxDesktop(), l.isFirefoxAndroid = l._isFirefoxAndroid(), l.isFirefoxiOS = l._isFirefoxiOS(), l.isFirefoxFxOS = l._isFirefoxFxOS(), l.isLikeFirefox = l._isLikeFirefox(), l.FirefoxVersion = l._getFirefoxVersion(), l.FirefoxMajorVersion = l._getFirefoxMajorVersion(), l.platform = window.site.platform, l.isMobile = /^(android|ios|fxos)$/.test(l.platform), l.isDesktop = !l.isMobile, window.Mozilla.Client = l
    }(), function() {
        "use strict";
        var t = function(e) {
                return new RegExp("(^| )" + e + "( |$)")
            },
            e = function(e, t, n) {
                for (var i = 0; i < e.length; i++) t.call(n, e[i])
            };

        function n(e) {
            this.element = e
        }
        n.prototype = {
            add: function() {
                e(arguments, function(e) {
                    this.contains(e) || this.element.setAttribute("class", this.element.className + " " + e)
                }, this)
            },
            remove: function() {
                e(arguments, function(e) {
                    this.element.setAttribute("class", this.element.className.replace(t(e), ""))
                }, this)
            },
            toggle: function(e) {
                return this.contains(e) ? (this.remove(e), !1) : (this.add(e), !0)
            },
            contains: function(e) {
                return t(e).test(this.element.className)
            },
            replace: function(e, t) {
                this.remove(e), this.add(t)
            }
        }, "undefined" == typeof Element || "classList" in Element.prototype || Object.defineProperty(Element.prototype, "classList", {
            get: function() {
                return new n(this)
            }
        }), window.DOMTokenList && null == DOMTokenList.prototype.replace && (DOMTokenList.prototype.replace = n.prototype.replace)
    }(), void 0 === Mzp) var Mzp = {};
if (function(e) {
        "use strict";
        var t, n, i, r, o, a = {};
        a.matchMedia = "undefined" != typeof window.matchMedia && window.matchMedia("all").addListener, a.classList = "classList" in document.createElement("div"), a.details = "open" in (o = e.createElement("details")) && (n = e.body || (r = e.documentElement, t = !0, r.insertBefore(e.createElement("body"), r.firstElementChild || r.firstChild)), o.innerHTML = "<summary>a</summary>b", o.style.display = "block", n.appendChild(o), i = o.offsetHeight, o.open = !0, i = i !== o.offsetHeight, n.removeChild(o), t && n.parentNode.removeChild(n), i), window.Mzp.Supports = a
    }(document), void 0 === Mzp) Mzp = {};
if (function() {
        "use strict";
        var e = {};
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), e.nextUntil = function(e, t, n) {
            var i = [];
            for (e = e.nextElementSibling; e && !e.matches(t);) e = ((!n || e.matches(n)) && i.push(e), e.nextElementSibling);
            return i
        }, window.Mzp.Utils = e
    }(), void 0 === Mzp) Mzp = {};
if (function(e) {
        "use strict";
        var n, t, i = {},
            r = !1,
            o = {
                onMenuOpen: null,
                onMenuClose: null,
                onMenuButtonClose: null
            };
        i.open = function(e, t) {
            t && e.classList.add("mzp-is-animated"), e.classList.add("mzp-is-selected"), r = !0, e.querySelector(".mzp-c-menu-title").setAttribute("aria-expanded", !0), "function" == typeof o.onMenuOpen && o.onMenuOpen(e)
        }, i.close = function() {
            for (var e = document.querySelectorAll(".mzp-c-menu-category.mzp-is-selected"), t = 0; t < e.length; t++) e[t].classList.remove("mzp-is-selected"), e[t].classList.remove("mzp-is-animated"), e[t].querySelector(".mzp-c-menu-title").setAttribute("aria-expanded", !1);
            return r = !1, "function" == typeof o.onMenuClose && 0 < e.length && o.onMenuClose(), 0 < e.length
        }, i.onDocumentKeyUp = function(e) {
            27 === e.keyCode && r && i.close()
        }, i.onCloseButtonClick = function(e) {
            e.preventDefault(), "function" == typeof o.onMenuButtonClose && o.onMenuButtonClose(), i.close()
        }, i.toggle = function(e) {
            !!e.classList.contains("mzp-is-selected") ? (e.classList.remove("mzp-is-selected"), e.classList.remove("mzp-is-animated"), e.querySelector(".mzp-c-menu-title").setAttribute("aria-expanded", !1), "function" == typeof o.onMenuClose && o.onMenuClose()) : i.open(e)
        }, i.onMouseEnter = function(t) {
            clearTimeout(n), n = setTimeout(function() {
                var e = !i.close();
                i.open(t.target, e)
            }, 150)
        }, i.onMouseLeave = function() {
            clearTimeout(n), n = setTimeout(function() {
                i.close()
            }, 150)
        }, i.onFocusOut = function() {
            var e = this;
            setTimeout(function() {
                !e.contains(document.activeElement) && e.classList.contains("mzp-is-selected") && i.close()
            }, 0)
        }, i.onClickWide = function(e) {
            e.preventDefault(), i.close(), i.open(e.target.parentNode)
        }, i.onClickSmall = function(e) {
            e.preventDefault(), i.toggle(e.target.parentNode)
        }, i.isWideViewport = function() {
            return t.matches
        }, i.handleState = function() {
            (t = matchMedia("(min-width: 768px)")).addListener(function(e) {
                i.close(), e.matches ? (i.unbindEventsSmall(), i.bindEventsWide()) : (i.unbindEventsWide(), i.bindEventsSmall())
            }), i.isWideViewport() ? i.bindEventsWide() : i.bindEventsSmall()
        }, i.bindEventsWide = function() {
            for (var e = document.querySelectorAll(".mzp-c-menu-category.mzp-js-expandable"), t = 0; t < e.length; t++) e[t].addEventListener("mouseenter", i.onMouseEnter, !1), e[t].addEventListener("mouseleave", i.onMouseLeave, !1), e[t].addEventListener("focusout", i.onFocusOut, !1), e[t].querySelector(".mzp-c-menu-title").addEventListener("click", i.onClickWide, !1), e[t].querySelector(".mzp-c-menu-button-close").addEventListener("click", i.onCloseButtonClick, !1);
            document.addEventListener("keyup", i.onDocumentKeyUp, !1)
        }, i.unbindEventsWide = function() {
            for (var e = document.querySelectorAll(".mzp-c-menu-category.mzp-js-expandable"), t = 0; t < e.length; t++) e[t].removeEventListener("mouseenter", i.onMouseEnter, !1), e[t].removeEventListener("mouseleave", i.onMouseLeave, !1), e[t].removeEventListener("focusout", i.onFocusOut, !1), e[t].querySelector(".mzp-c-menu-title").removeEventListener("click", i.onClickWide, !1), e[t].querySelector(".mzp-c-menu-button-close").removeEventListener("click", i.onCloseButtonClick, !1);
            document.removeEventListener("keyup", i.onDocumentKeyUp, !1)
        }, i.bindEventsSmall = function() {
            for (var e = document.querySelectorAll(".mzp-c-menu-category.mzp-js-expandable .mzp-c-menu-title"), t = 0; t < e.length; t++) e[t].addEventListener("click", i.onClickSmall, !1)
        }, i.unbindEventsSmall = function() {
            for (var e = document.querySelectorAll(".mzp-c-menu-category.mzp-js-expandable .mzp-c-menu-title"), t = 0; t < e.length; t++) e[t].removeEventListener("click", i.onClickSmall, !1)
        }, i.setAria = function() {
            for (var e = document.querySelectorAll(".mzp-c-menu-category.mzp-js-expandable .mzp-c-menu-title"), t = 0; t < e.length; t++) e[t].setAttribute("aria-expanded", !1)
        }, i.enhanceJS = function() {
            for (var e = document.querySelectorAll(".mzp-c-menu"), t = 0; t < e.length; t++) e[t].classList.remove("mzp-is-basic"), e[t].classList.add("mzp-is-enhanced")
        }, i.isSupported = function() {
            return "undefined" != typeof e.Supports && (e.Supports.matchMedia && e.Supports.classList)
        }, i.init = function(e) {
            if ("object" == typeof e)
                for (var t in e) e.hasOwnProperty(t) && (o[t] = e[t]);
            i.isSupported() && (i.handleState(), i.setAria(), i.enhanceJS())
        }, window.Mzp.Menu = i
    }(window.Mzp), void 0 === Mzp) Mzp = {};
if (function() {
        "use strict";
        var n, i = {},
            r = {
                onNavOpen: null,
                onNavClose: null
            };
        i.onClick = function(e) {
            var t = e.target.parentNode.querySelector(".mzp-c-navigation-items");
            e.preventDefault(), e.target.classList.toggle("mzp-is-active"), t.classList.toggle("mzp-is-open");
            var n = !!t.classList.contains("mzp-is-open");
            t.setAttribute("aria-expanded", n), n ? "function" == typeof r.onNavOpen && r.onNavOpen(t) : "function" == typeof r.onNavClose && r.onNavClose(t)
        }, i.setAria = function() {
            for (var e = 0; e < n.length; e++) n[e].setAttribute("aria-expanded", !1)
        }, i.bindEvents = function() {
            if (0 < (n = document.querySelectorAll(".mzp-c-navigation-items")).length) {
                for (var e = document.querySelectorAll(".mzp-c-navigation-menu-button"), t = 0; t < e.length; t++) e[t].addEventListener("click", i.onClick, !1);
                i.setAria()
            }
        }, i.init = function(e) {
            if ("object" == typeof e)
                for (var t in e) e.hasOwnProperty(t) && (r[t] = e[t]);
            i.bindEvents()
        }, window.Mzp.Navigation = i
    }(), function() {
        if (void 0 !== Mzp && "undefined" != typeof Mzp.Menu && "undefined" != typeof Mzp.Navigation) {
            var r = "undefined" != typeof window.matchMedia;
            ! function e() {
                if ("undefined" == typeof Mozilla.Client) return !1;
                var t = document.querySelector(".mzp-c-navigation"),
                    n = document.querySelector(".mzp-c-navigation .c-navigation-fxa-cta");
                if (!Mozilla.Client.isFirefoxDesktop || !t || !n) return !1;
                if (n) {
                    var i = n.getAttribute("data-alt-href");
                    Mozilla.Client.getFxaDetails(function(e) {
                        e.setup && (t.classList.add("fxa-signed-in"), n.href = i)
                    })
                }
            }(), Mzp.Menu.init({
                onMenuOpen: function a(e) {
                    if (r && window.matchMedia("(min-width: 768px)").matches) {
                        var t = e.querySelector(".mzp-c-card-image");
                        if (t) {
                            var n = t.getAttribute("data-src");
                            if (n) {
                                var i = t.getAttribute("data-srcset");
                                i && (t.srcset = i), t.src = n, t.onload = o
                            }
                        }
                    }
                }
            }), Mzp.Navigation.init()
        }

        function o(e) {
            e.target.removeAttribute("data-src"), e.target.removeAttribute("data-srcset")
        }
    }(), void 0 === Mzp) Mzp = {};
if (function() {
        "use strict";
        var r = {
            switchPath: function(e, t) {
                var n = e.pathname.slice(1).split("/"),
                    i = "/" + n[0] + "/";
                return !!/^(\/\w{2}-\w{2}\/|\/\w{2,3}\/)/.test(i) && "/" + t + "/" + n.slice(1).join("/") + e.search
            },
            doRedirect: function(e) {
                e && (window.location.href = e)
            },
            init: function(i) {
                for (var e = document.querySelectorAll(".mzp-js-language-switcher-select"), t = 0; t < e.length; t++) e[t].setAttribute("data-previous-language", e[t].value), e[t].addEventListener("change", function(e) {
                    var t = e.target.value,
                        n = e.target.getAttribute("data-previous-language");
                    "function" == typeof i && i(n, t), r.doRedirect(r.switchPath(window.location, t))
                }, !1)
            }
        };
        window.Mzp.LangSwitcher = r
    }(), void 0 !== Mzp && "undefined" != typeof Mzp.LangSwitcher && Mzp.LangSwitcher.init(function(e, t) {
        window.dataLayer.push({
            event: "change-language",
            languageSelected: t,
            previousLanguage: e
        })
    }), void 0 === Mzp) Mzp = {};
! function(l, c) {
    "use strict";
    var f = {},
        d = 0;
    f.isSupported = function() {
        return "undefined" != typeof c.Supports && "undefined" != typeof c.Utils && c.Supports.classList
    }, f.open = function(e, t) {
        var n = l.querySelector("[aria-controls=" + e + "]"),
            i = l.getElementById(e);
        n.setAttribute("aria-expanded", !0), i.setAttribute("aria-hidden", !1), i.classList.remove("is-closed"), "function" == typeof t.onDetailsOpen && t.onDetailsOpen(i)
    }, f.close = function(e, t) {
        var n = l.querySelector("[aria-controls=" + e + "]"),
            i = l.getElementById(e);
        n.setAttribute("aria-expanded", !1), i.setAttribute("aria-hidden", !0), i.classList.add("is-closed"), "function" == typeof t.onDetailsClose && t.onDetailsClose(i)
    }, f.toggle = function(e, t) {
        "true" === l.getElementById(e).getAttribute("aria-hidden") ? f.open(e, t) : f.close(e, t)
    }, f.handleControlActivation = function(e, t) {
        var n = e.target.getAttribute("aria-controls");
        f.toggle(n, t)
    }, f.initItem = function(e, t, n) {
        var i, r, o = e,
            a = l.createElement("button"),
            s = o.parentNode;
        if (0 === o.querySelectorAll("button").length) {
            if (1 === (r = c.Utils.nextUntil(o, t)).length) i = r[0];
            else {
                if (!(1 < r.length)) return;
                i = l.createElement("div"), r.forEach(function(e) {
                    i.appendChild(e)
                }), o.parentNode.insertBefore(i, o.nextSibling)
            }
            if (s.classList.add("is-details"), i.classList.add("mzp-js-details-wrapper"), !i.id) {
                var u = t.replace(/[^a-zA-Z]+/g, "");
                i.id = "expand-" + u + "-" + d, d += 1
            }
            i.setAttribute("aria-hidden", !0), i.classList.add("is-closed"), a.setAttribute("type", "button"), a.setAttribute("aria-controls", i.id), a.setAttribute("aria-expanded", !1), a.addEventListener("click", function(e) {
                f.handleControlActivation(e, n)
            }, !1), Array.prototype.slice.call(o.childNodes).forEach(function(e) {
                a.appendChild(e)
            }), o.appendChild(a), o.classList.add("is-summary")
        }
    }, f.destroyItem = function(e) {
        var t = e,
            n = t.parentNode,
            i = t.nextElementSibling,
            r = t.querySelector("button");
        0 !== t.querySelectorAll("button").length && (n.classList.remove("is-details"), i.removeAttribute("aria-hidden"), i.classList.remove("is-closed"), Array.prototype.slice.call(r.childNodes).forEach(function(e) {
            t.appendChild(e)
        }), t.removeChild(r), t.classList.remove("is-summary"))
    }, f.init = function(e, t) {
        if (f.isSupported()) {
            void 0 === t && (t = {});
            for (var n = l.querySelectorAll(e), i = 0; i < n.length; i++) f.initItem(n[i], e, t)
        }
    }, f.destroy = function(e, t) {
        for (var n = l.querySelectorAll(e, t), i = 0; i < n.length; i++) f.destroyItem(n[i], e, t)
    }, "undefined" != typeof c.Supports && (c.Supports.details || f.init("summary")), f.init(".mzp-c-details > h2"), f.init(".mzp-c-details > h3"), f.init(".mzp-c-details > h4"), f.init(".mzp-c-details > h5"), f.init(".mzp-c-details > h6"), c.Details = f
}(document, window.Mzp),
function() {
    "use strict";
    if ("undefined" != typeof window.Mzp) {
        var t = window.Mzp,
            n = ".mzp-c-footer-sections .mzp-c-footer-heading";
        if ("undefined" != typeof t.Supports && "undefined" != typeof t.Details && t.Supports.matchMedia) {
            var e = matchMedia("(max-width: 479px)");
            e.matches && t.Details.init(n), e.addListener(function(e) {
                e.matches ? t.Details.init(n) : t.Details.destroy(n)
            })
        }
    }
}(),
function(e) {
    var n = !1,
        i = !1;

    function r() {
        e("html").addClass("loaded")
    }
    e(document).ready(function() {
        var e = Mozilla.Client,
            t = Mozilla.Utils;
        t.initMobileDownloadLinks(), e.isFirefoxDesktop && e.getFirefoxDetails(t.maybeSwitchToDistDownloadLinks), n && r(), i = !0
    }), e(window).on("load", function() {
        i && r(), n = !0
    })
}(window.jQuery), "undefined" == typeof Mozilla.Analytics && (Mozilla.Analytics = {}),
    function() {
        var e = Mozilla.Analytics,
            t = "querySelector" in document && "querySelectorAll" in document;
        e.pageHasDownload = function() {
            return t && null !== document.querySelector("[data-download-os]") ? "true" : "false"
        }, e.pageHasVideo = function() {
            return t && (null !== document.querySelector("video") || null !== document.querySelector('iframe[src^="https://www.youtube"]')) ? "true" : "false"
        }, e.getPageVersion = function(e) {
            var t = e || document.location.pathname,
                n = /firefox\/(\d+(?:\.\d+)?\.\da?\d?)/.exec(t);
            return n ? n[1] : null
        }, e.getLatestFxVersion = function() {
            return document.getElementsByTagName("html")[0].getAttribute("data-latest-firefox")
        }, e.formatFxaDetails = function(e) {
            var t = {};
            if (!0 === e.firefox)
                if (e.mobile) t.FxASegment = "Firefox Mobile";
                else if (e.setup) {
                t.FxALogin = !0, t.FxASegment = "Logged in", !0 === e.legacy && (t.FxASegment = "Legacy Firefox");
                var n = !1,
                    i = !1,
                    r = !1;
                0 < e.mobileDevices ? n = t.FxAMobileSync = !0 : 0 === e.mobileDevices ? t.FxAMobileSync = !1 : t.FxAMobileSync = "unknown", 1 < e.desktopDevices ? r = t.FxAMultiDesktopSync = !0 : 1 === e.desktopDevices ? i = !(t.FxAMultiDesktopSync = !1) : 0 === e.desktopDevices ? t.FxAMultiDesktopSync = !1 : t.FxAMultiDesktopSync = "unknown", r && n ? t.FxASegment = "Multi-Desktop and Mobile Sync" : i && n ? t.FxASegment = "Desktop and Mobile Sync" : r && (t.FxASegment = "Multi-Desktop Sync")
            } else !0 === e.legacy ? (t.FxASegment = "Legacy Firefox", t.FxALogin = "unknown") : (t.FxASegment = "Not logged in", t.FxALogin = !1);
            else t.FxASegment = "Not Firefox";
            return t
        }, e.updateDataLayerPush = function(e) {
            var o = window.dataLayer = window.dataLayer || [],
                a = e || document.location.hostname;
            o.defaultPush = o.push, o.push = function() {
                for (var e = 0; e < arguments.length; e++)
                    if ("gtm.linkClick" === arguments[e].event) {
                        var t = arguments[e]["gtm.element"],
                            n = t.href;
                        if (t.hostname === a) {
                            var i = n.replace(/^(?:https?\:\/\/)(?:[^\/])*/, ""),
                                r = i.match(/^(\/\w{2}\-\w{2}\/|\/\w{2,3}\/)/);
                            i = r ? i.replace(r[0], "/") : i, arguments[e].newClickHref = i
                        } else arguments[e].newClickHref = n;
                        o.defaultPush(arguments[e])
                    } else o.defaultPush(arguments[e])
            }
        }
    }(), $(function() {
        var n = Mozilla.Analytics,
            e = Mozilla.Client,
            i = window.dataLayer = window.dataLayer || [],
            r = !1,
            o = !1;

        function t() {
            r && o && function t() {
                var e = {
                    event: "core-datalayer-loaded",
                    pageHasDownload: n.pageHasDownload(),
                    pageHasVideo: n.pageHasVideo(),
                    pageVersion: n.getPageVersion(),
                    testPilotUser: "testpilotAddon" in navigator ? "true" : "false",
                    releaseWindowVersion: n.getLatestFxVersion()
                };
                i.push(e)
            }()
        }
        e.getFxaDetails(function(e) {
            i.push(n.formatFxaDetails(e)), o = !0, t()
        }), e.isFirefoxDesktop || e.isFirefoxAndroid ? e.getFirefoxDetails(function(e) {
            i.push(e), r = !0, t()
        }) : (r = !0, t()), n.updateDataLayerPush()
    });
var _SearchParams = function(e) {
    e = e || location.search || "", this.params = _SearchParams.queryStringToObject(e)
};
_SearchParams.objectToQueryString = function(e) {
    var t = [];
    for (var n in e) e.hasOwnProperty(n) && t.push([encodeURIComponent(n), encodeURIComponent(e[n])].join("="));
    return t.join("&")
}, _SearchParams.queryStringToObject = function(e) {
    var t = {};
    e = (e = e.match(/^\??(.*)/)[1]) ? e.split(/[&;]/m) : [];
    for (var n = 0; n < e.length; n++) {
        var i = e[n].split("="),
            r = i[0],
            o = i[1];
        t[r] = isNaN(o) ? o : parseFloat(o)
    }
    return t
}, _SearchParams.prototype.get = function(e) {
    return this.params[e]
}, _SearchParams.prototype.set = function(e, t) {
    this.params[e] = isNaN(t) ? t : parseFloat(t)
}, _SearchParams.prototype.has = function(e) {
    return e in this.params
}, _SearchParams.prototype.remove = function(e) {
    delete this.params[e]
}, _SearchParams.prototype.toString = function() {
    return _SearchParams.objectToQueryString(this.params)
}, _SearchParams.prototype.utmParams = function() {
    var e = {},
        t = this.params;
    for (var n in t) t.hasOwnProperty(n) && 0 === n.indexOf("utm_") && (e[n] = t[n]);
    return e
}, _SearchParams.prototype.utmParamsFxA = function(e) {
    e = e || window.location.pathname || "";
    var t = this.utmParams();
    t.utm_campaign || (t.utm_campaign = "page referral - not part of a campaign");
    var n = e.match(/\/[\w-]+(\/.*)$/);
    return n && 1 < n.length && (t.utm_content = n[1]), Object.keys(t).forEach(function(e) {
        t[e] = t[e].toString()
    }), t
};