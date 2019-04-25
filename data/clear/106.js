if (function(e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(A, e) {
        "use strict";
        var t = [],
            k = A.document,
            o = Object.getPrototypeOf,
            s = t.slice,
            m = t.concat,
            u = t.push,
            l = t.indexOf,
            n = {},
            r = n.toString,
            E = n.hasOwnProperty,
            i = E.toString,
            a = i.call(Object),
            g = {};

        function v(e, t) {
            var n = (t = t || k).createElement("script");
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
            var e, t, n, r, i, o, a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || D.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (D.isPlainObject(r) || (i = Array.isArray(r))) ? (o = i ? (i = !1, n && Array.isArray(n) ? n : []) : n && D.isPlainObject(n) ? n : {}, a[t] = D.extend(l, o, r)) : void 0 !== r && (a[t] = r));
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
                return !(!e || "[object Object]" !== r.call(e) || (t = o(e)) && ("function" != typeof(n = E.call(t, "constructor") && t.constructor) || i.call(n) !== a))
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                v(e)
            },
            camelCase: function(e) {
                return e.replace(d, "ms-").replace(p, h)
            },
            each: function(e, t) {
                var n, r = 0;
                if (y(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
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
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                return r
            },
            map: function(e, t, n) {
                var r, i, o = 0,
                    a = [];
                if (y(e))
                    for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                else
                    for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return m.apply([], a)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                if ("string" == typeof t && (n = e[t], t = e, e = n), D.isFunction(e)) return r = s.call(arguments, 2), (i = function() {
                    return e.apply(t || this, r.concat(s.call(arguments)))
                }).guid = e.guid = e.guid || D.guid++, i
            },
            now: Date.now,
            support: g
        }), "function" == typeof Symbol && (D.fn[Symbol.iterator] = t[Symbol.iterator]), D.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            n["[object " + t + "]"] = t.toLowerCase()
        });
        var x = function(n) {
            var e, p, b, o, i, h, f, m, w, u, l, S, C, a, T, g, s, c, v, A = "sizzle" + 1 * new Date,
                y = n.document,
                k = 0,
                x = 0,
                r = ae(),
                d = ae(),
                E = ae(),
                D = function(e, t) {
                    return e === t && (l = !0), 0
                },
                L = {}.hasOwnProperty,
                t = [],
                F = t.pop,
                N = t.push,
                M = t.push,
                j = t.slice,
                q = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
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
                B = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
                $ = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
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
                    var r = "0x" + t - 65536;
                    return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ne = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                re = function() {
                    S()
                },
                ie = ye(function(e) {
                    return !0 === e.disabled && ("form" in e || "label" in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                M.apply(t = j.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
            } catch (Ce) {
                M = {
                    apply: t.length ? function(e, t) {
                        N.apply(e, j.call(t))
                    } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }

            function oe(e, t, n, r) {
                var i, o, a, s, u, l, c, f = t && t.ownerDocument,
                    d = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
                if (!r && ((t ? t.ownerDocument || t : y) !== C && S(t), t = t || C, T)) {
                    if (11 !== d && (u = J.exec(e)))
                        if (i = u[1]) {
                            if (9 === d) {
                                if (!(a = t.getElementById(i))) return n;
                                if (a.id === i) return n.push(a), n
                            } else if (f && (a = f.getElementById(i)) && v(t, a) && a.id === i) return n.push(a), n
                        } else {
                            if (u[2]) return M.apply(n, t.getElementsByTagName(e)), n;
                            if ((i = u[3]) && p.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(i)), n
                        } if (p.qsa && !E[e + " "] && (!g || !g.test(e))) {
                        if (1 !== d) f = t, c = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(te, ne) : t.setAttribute("id", s = A), o = (l = h(e)).length; o--;) l[o] = "#" + s + " " + ve(l[o]);
                            c = l.join(","), f = K.test(e) && me(t.parentNode) || t
                        }
                        if (c) try {
                            return M.apply(n, f.querySelectorAll(c)), n
                        } catch (x) {} finally {
                            s === A && t.removeAttribute("id")
                        }
                    }
                }
                return m(e.replace(_, "$1"), t, n, r)
            }

            function ae() {
                var n = [];
                return function r(e, t) {
                    return n.push(e + " ") > b.cacheLength && delete r[n.shift()], r[e + " "] = t
                }
            }

            function se(e) {
                return e[A] = !0, e
            }

            function ue(e) {
                var t = C.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (p) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function le(e, t) {
                for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
            }

            function ce(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r) return r;
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
                    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ie(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function he(a) {
                return se(function(o) {
                    return o = +o, se(function(e, t) {
                        for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                    })
                })
            }

            function me(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }
            for (e in p = oe.support = {}, i = oe.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, S = oe.setDocument = function(e) {
                    var t, n, r = e ? e.ownerDocument || e : y;
                    return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, T = !i(C), y !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)), p.attributes = ue(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), p.getElementsByTagName = ue(function(e) {
                        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                    }), p.getElementsByClassName = Y.test(C.getElementsByClassName), p.getById = ue(function(e) {
                        return a.appendChild(e).id = A, !C.getElementsByName || !C.getElementsByName(A).length
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
                            var n, r, i, o = t.getElementById(e);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                            }
                            return []
                        }
                    }), b.find.TAG = p.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" !== e) return o;
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }, b.find.CLASS = p.getElementsByClassName && function(e, t) {
                        if ("undefined" != typeof t.getElementsByClassName && T) return t.getElementsByClassName(e)
                    }, s = [], g = [], (p.qsa = Y.test(C.querySelectorAll)) && (ue(function(e) {
                        a.appendChild(e).innerHTML = "<a id='" + A + "'></a><select id='" + A + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + O + "*(?:value|" + z + ")"), e.querySelectorAll("[id~=" + A + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + A + "+*").length || g.push(".#.+[+~]")
                    }), ue(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = C.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + O + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                    })), (p.matchesSelector = Y.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ue(function(e) {
                        p.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", I)
                    }), g = g.length && new RegExp(g.join("|")), s = s.length && new RegExp(s.join("|")), t = Y.test(a.compareDocumentPosition), v = t || Y.test(a.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, D = t ? function(e, t) {
                        if (e === t) return l = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === y && v(y, e) ? -1 : t === C || t.ownerDocument === y && v(y, t) ? 1 : u ? q(u, e) - q(u, t) : 0 : 4 & n ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return l = !0, 0;
                        var n, r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            s = [t];
                        if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? q(u, e) - q(u, t) : 0;
                        if (i === o) return ce(e, t);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (; a[r] === s[r];) r++;
                        return r ? ce(a[r], s[r]) : a[r] === y ? -1 : s[r] === y ? 1 : 0
                    }), C
                }, oe.matches = function(e, t) {
                    return oe(e, null, null, t)
                }, oe.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== C && S(e), t = t.replace($, "='$1']"), p.matchesSelector && T && !E[t + " "] && (!s || !s.test(t)) && (!g || !g.test(t))) try {
                        var n = c.call(e, t);
                        if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                    } catch (o) {}
                    return 0 < oe(t, C, null, [e]).length
                }, oe.contains = function(e, t) {
                    return (e.ownerDocument || e) !== C && S(e), v(e, t)
                }, oe.attr = function(e, t) {
                    (e.ownerDocument || e) !== C && S(e);
                    var n = b.attrHandle[t.toLowerCase()],
                        r = n && L.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !T) : void 0;
                    return void 0 !== r ? r : p.attributes || !T ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, oe.escape = function(e) {
                    return (e + "").replace(te, ne)
                }, oe.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, oe.uniqueSort = function(e) {
                    var t, n = [],
                        r = 0,
                        i = 0;
                    if (l = !p.detectDuplicates, u = !p.sortStable && e.slice(0), e.sort(D), l) {
                        for (; t = e[i++];) t === e[i] && (r = n.push(i));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return u = null, e
                }, o = oe.getText = function(e) {
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
                            var t = r[e + " "];
                            return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && r(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(n, r, i) {
                            return function(e) {
                                var t = oe.attr(e, n);
                                return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(R, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(h, e, t, m, g) {
                            var v = "nth" !== h.slice(0, 3),
                                y = "last" !== h.slice(-4),
                                x = "of-type" === e;
                            return 1 === m && 0 === g ? function(e) {
                                return !!e.parentNode
                            } : function(e, t, n) {
                                var r, i, o, a, s, u, l = v !== y ? "nextSibling" : "previousSibling",
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
                                        for (p = (s = (r = (i = (o = (a = c)[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[l] || (p = s = 0) || u.pop();)
                                            if (1 === a.nodeType && ++p && a === e) {
                                                i[h] = [k, s, p];
                                                break
                                            }
                                    } else if (d && (p = s = (r = (i = (o = (a = e)[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === p)
                                        for (;
                                            (a = ++s && a && a[l] || (p = s = 0) || u.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++p || (d && ((i = (o = a[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, p]), a !== e)););
                                    return (p -= g) === m || p % m == 0 && 0 <= p / m
                                }
                            }
                        },
                        PSEUDO: function(e, o) {
                            var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                            return a[A] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, t) {
                                for (var n, r = a(e, o), i = r.length; i--;) e[n = q(e, r[i])] = !(t[n] = r[i])
                            }) : function(e) {
                                return a(e, 0, t)
                            }) : a
                        }
                    },
                    pseudos: {
                        not: se(function(e) {
                            var r = [],
                                i = [],
                                s = f(e.replace(_, "$1"));
                            return s[A] ? se(function(e, t, n, r) {
                                for (var i, o = s(e, null, r, []), a = e.length; a--;)(i = o[a]) && (e[a] = !(t[a] = i))
                            }) : function(e, t, n) {
                                return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
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
                            return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
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
                            for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                            return e
                        }),
                        gt: he(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
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
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r
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
                    var r, i, o, a = [k, d];
                    if (n) {
                        for (; e = e[u];)
                            if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                    } else
                        for (; e = e[u];)
                            if (1 === e.nodeType || f)
                                if (i = (o = e[A] || (e[A] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                                else {
                                    if ((r = i[c]) && r[0] === k && r[1] === d) return a[2] = r[2];
                                    if ((i[c] = a)[2] = s(e, t, n)) return !0
                                } return !1
                }
            }

            function xe(i) {
                return 1 < i.length ? function(e, t, n) {
                    for (var r = i.length; r--;)
                        if (!i[r](e, t, n)) return !1;
                    return !0
                } : i[0]
            }

            function be(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                return a
            }

            function we(h, m, g, v, y, e) {
                return v && !v[A] && (v = we(v)), y && !y[A] && (y = we(y, e)), se(function(e, t, n, r) {
                    var i, o, a, s = [],
                        u = [],
                        l = t.length,
                        c = e || function p(e, t, n) {
                            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                            return n
                        }(m || "*", n.nodeType ? [n] : n, []),
                        f = !h || !e && m ? c : be(c, s, h, n, r),
                        d = g ? y || (e ? h : l || v) ? [] : t : f;
                    if (g && g(f, d, n, r), v)
                        for (i = be(d, u), v(i, [], n, r), o = i.length; o--;)(a = i[o]) && (d[u[o]] = !(f[u[o]] = a));
                    if (e) {
                        if (y || h) {
                            if (y) {
                                for (i = [], o = d.length; o--;)(a = d[o]) && i.push(f[o] = a);
                                y(null, d = [], i, r)
                            }
                            for (o = d.length; o--;)(a = d[o]) && -1 < (i = y ? q(e, a) : s[o]) && (e[i] = !(t[i] = a))
                        }
                    } else d = be(d === t ? d.splice(l, d.length) : d), y ? y(null, t, d, r) : M.apply(t, d)
                })
            }

            function Se(e) {
                for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = ye(function(e) {
                        return e === i
                    }, a, !0), l = ye(function(e) {
                        return -1 < q(i, e)
                    }, a, !0), c = [function(e, t, n) {
                        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                        return i = null, r
                    }]; s < r; s++)
                    if (t = b.relative[e[s].type]) c = [ye(xe(c), t)];
                    else {
                        if ((t = b.filter[e[s].type].apply(null, e[s].matches))[A]) {
                            for (n = ++s; n < r && !b.relative[e[n].type]; n++);
                            return we(1 < s && xe(c), 1 < s && ve(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(_, "$1"), t, s < n && Se(e.slice(s, n)), n < r && Se(e = e.slice(n)), n < r && ve(e))
                        }
                        c.push(t)
                    } return xe(c)
            }
            return ge.prototype = b.filters = b.pseudos, b.setFilters = new ge, h = oe.tokenize = function(e, t) {
                var n, r, i, o, a, s, u, l = d[e + " "];
                if (l) return t ? 0 : l.slice(0);
                for (a = e, s = [], u = b.preFilter; a;) {
                    for (o in n && !(r = W.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = B.exec(a)) && (n = r.shift(), i.push({
                            value: n,
                            type: r[0].replace(_, " ")
                        }), a = a.slice(n.length)), b.filter) !(r = X[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                        value: n,
                        type: o,
                        matches: r
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return t ? a.length : a ? oe.error(e) : d(e, s).slice(0)
            }, f = oe.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = E[e + " "];
                if (!o) {
                    for (t || (t = h(e)), n = t.length; n--;)(o = Se(t[n]))[A] ? r.push(o) : i.push(o);
                    (o = E(e, function a(g, v) {
                        var y = 0 < v.length,
                            x = 0 < g.length,
                            e = function(e, t, n, r, i) {
                                var o, a, s, u = 0,
                                    l = "0",
                                    c = e && [],
                                    f = [],
                                    d = w,
                                    p = e || x && b.find.TAG("*", i),
                                    h = k += null == d ? 1 : Math.random() || .1,
                                    m = p.length;
                                for (i && (w = t === C || t || i); l !== m && null != (o = p[l]); l++) {
                                    if (x && o) {
                                        for (a = 0, t || o.ownerDocument === C || (S(o), n = !T); s = g[a++];)
                                            if (s(o, t || C, n)) {
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
                                            for (; l--;) c[l] || f[l] || (f[l] = F.call(r));
                                        f = be(f)
                                    }
                                    M.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && oe.uniqueSort(r)
                                }
                                return i && (k = h, w = d), c
                            };
                        return y ? se(e) : e
                    }(i, r))).selector = e
                }
                return o
            }, m = oe.select = function(e, t, n, r) {
                var i, o, a, s, u, l = "function" == typeof e && e,
                    c = !r && h(e = l.selector || e);
                if (n = n || [], 1 === c.length) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && T && b.relative[o[1].type]) {
                        if (!(t = (b.find.ID(a.matches[0].replace(Z, ee), t) || [])[0])) return n;
                        l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (i = X.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !b.relative[s = a.type]);)
                        if ((u = b.find[s]) && (r = u(a.matches[0].replace(Z, ee), K.test(o[0].type) && me(t.parentNode) || t))) {
                            if (o.splice(i, 1), !(e = r.length && ve(o))) return M.apply(n, r), n;
                            break
                        }
                }
                return (l || f(e, c))(r, t, !T, n, !t || K.test(e) && me(t.parentNode) || t), n
            }, p.sortStable = A.split("").sort(D).join("") === A, p.detectDuplicates = !!l, S(), p.sortDetached = ue(function(e) {
                return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
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
                var r;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), oe
        }(A);
        D.find = x, D.expr = x.selectors, D.expr[":"] = D.expr.pseudos, D.uniqueSort = D.unique = x.uniqueSort, D.text = x.getText, D.isXMLDoc = x.isXML, D.contains = x.contains, D.escapeSelector = x.escape;
        var b = function(e, t, n) {
                for (var r = [], i = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (i && D(e).is(n)) break;
                        r.push(e)
                    } return r
            },
            L = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            w = D.expr.match.needsContext;

        function S(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            T = /^.[^:#\[\.,]*$/;

        function F(e, n, r) {
            return D.isFunction(n) ? D.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== r
            }) : n.nodeType ? D.grep(e, function(e) {
                return e === n !== r
            }) : "string" != typeof n ? D.grep(e, function(e) {
                return -1 < l.call(n, e) !== r
            }) : T.test(n) ? D.filter(n, e, r) : (n = D.filter(n, e), D.grep(e, function(e) {
                return -1 < l.call(n, e) !== r && 1 === e.nodeType
            }))
        }
        D.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? D.find.matchesSelector(r, e) ? [r] : [] : D.find.matches(e, D.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, D.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    i = this;
                if ("string" != typeof e) return this.pushStack(D(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (D.contains(i[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < r; t++) D.find(e, i[t], n);
                return 1 < r ? D.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(F(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(F(this, e || [], !0))
            },
            is: function(e) {
                return !!F(this, "string" == typeof e && w.test(e) ? D(e) : e || [], !1).length
            }
        });
        var N, M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (D.fn.init = function(e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || N, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : D.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(D) : D.makeArray(e, this);
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : M.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof D ? t[0] : t, D.merge(this, D.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : k, !0)), C.test(r[1]) && D.isPlainObject(t))
                    for (r in t) D.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = k.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }).prototype = D.fn, N = D(k);
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
                var n, r = 0,
                    i = this.length,
                    o = [],
                    a = "string" != typeof e && D(e);
                if (!w.test(e))
                    for (; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
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
                return S(e, "iframe") ? e.contentDocument : (S(e, "template") && (e = e.content || e), D.merge([], e.childNodes))
            }
        }, function(r, i) {
            D.fn[r] = function(e, t) {
                var n = D.map(this, i, e);
                return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = D.filter(t, n)), 1 < this.length && (q[r] || D.uniqueSort(n), j.test(r) && n.reverse()), this.pushStack(n)
            }
        });
        var O = /[^\x20\t\r\n\f]+/g;

        function P(e) {
            return e
        }

        function H(e) {
            throw e
        }

        function I(e, t, n, r) {
            var i;
            try {
                e && D.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && D.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        D.Callbacks = function(r) {
            r = "string" == typeof r ? function c(e) {
                var n = {};
                return D.each(e.match(O) || [], function(e, t) {
                    n[t] = !0
                }), n
            }(r) : D.extend({}, r);
            var i, e, t, n, o = [],
                a = [],
                s = -1,
                u = function() {
                    for (n = n || r.once, t = i = !0; a.length; s = -1)
                        for (e = a.shift(); ++s < o.length;) !1 === o[s].apply(e[0], e[1]) && r.stopOnFalse && (s = o.length, e = !1);
                    r.memory || (e = !1), i = !1, n && (o = e ? [] : "")
                },
                l = {
                    add: function() {
                        return o && (e && !i && (s = o.length - 1, a.push(e)), function n(e) {
                            D.each(e, function(e, t) {
                                D.isFunction(t) ? r.unique && l.has(t) || o.push(t) : t && t.length && "string" !== D.type(t) && n(t)
                            })
                        }(arguments), e && !i && u()), this
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
                        return n = a = [], e || i || (o = e = ""), this
                    },
                    locked: function() {
                        return !!n
                    },
                    fireWith: function(e, t) {
                        return n || (t = [e, (t = t || []).slice ? t.slice() : t], a.push(t), i || u()), this
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
                    i = "pending",
                    a = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        "catch": function(e) {
                            return a.then(null, e)
                        },
                        pipe: function() {
                            var i = arguments;
                            return D.Deferred(function(r) {
                                D.each(o, function(e, t) {
                                    var n = D.isFunction(i[t[4]]) && i[t[4]];
                                    s[t[1]](function() {
                                        var e = n && n.apply(this, arguments);
                                        e && D.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                    })
                                }), i = null
                            }).promise()
                        },
                        then: function(t, n, r) {
                            var u = 0;

                            function l(i, o, a, s) {
                                return function() {
                                    var n = this,
                                        r = arguments,
                                        e = function() {
                                            var e, t;
                                            if (!(i < u)) {
                                                if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                                t = e && ("object" == typeof e || "function" == typeof e) && e.then, D.isFunction(t) ? s ? t.call(e, l(u, o, P, s), l(u, o, H, s)) : (u++, t.call(e, l(u, o, P, s), l(u, o, H, s), l(u, o, P, o.notifyWith))) : (a !== P && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                            }
                                        },
                                        t = s ? e : function() {
                                            try {
                                                e()
                                            } catch (A) {
                                                D.Deferred.exceptionHook && D.Deferred.exceptionHook(A, t.stackTrace), u <= i + 1 && (a !== H && (n = void 0, r = [A]), o.rejectWith(n, r))
                                            }
                                        };
                                    i ? t() : (D.Deferred.getStackHook && (t.stackTrace = D.Deferred.getStackHook()), A.setTimeout(t))
                                }
                            }
                            return D.Deferred(function(e) {
                                o[0][3].add(l(0, e, D.isFunction(r) ? r : P, e.notifyWith)), o[1][3].add(l(0, e, D.isFunction(t) ? t : P)), o[2][3].add(l(0, e, D.isFunction(n) ? n : H))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? D.extend(e, a) : a
                        }
                    },
                    s = {};
                return D.each(o, function(e, t) {
                    var n = t[2],
                        r = t[5];
                    a[t[1]] = n.add, r && n.add(function() {
                        i = r
                    }, o[3 - e][2].disable, o[0][2].lock), n.add(t[3].fire), s[t[0]] = function() {
                        return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                    }, s[t[0] + "With"] = n.fireWith
                }), a.promise(s), e && e.call(s, s), s
            },
            when: function(e) {
                var n = arguments.length,
                    t = n,
                    r = Array(t),
                    i = s.call(arguments),
                    o = D.Deferred(),
                    a = function(t) {
                        return function(e) {
                            r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                        }
                    };
                if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || D.isFunction(i[t] && i[t].then))) return o.then();
                for (; t--;) I(i[t], a(t), o.reject);
                return o.promise()
            }
        });
        var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        D.Deferred.exceptionHook = function(e, t) {
            A.console && A.console.warn && e && R.test(e.name) && A.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, D.readyException = function(e) {
            A.setTimeout(function() {
                throw e
            })
        };
        var _ = D.Deferred();

        function W() {
            k.removeEventListener("DOMContentLoaded", W), A.removeEventListener("load", W), D.ready()
        }
        D.fn.ready = function(e) {
            return _.then(e)["catch"](function(e) {
                D.readyException(e)
            }), this
        }, D.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --D.readyWait : D.isReady) || ((D.isReady = !0) !== e && 0 < --D.readyWait || _.resolveWith(k, [D]))
            }
        }), D.ready.then = _.then, "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? A.setTimeout(D.ready) : (k.addEventListener("DOMContentLoaded", W), A.addEventListener("load", W));
        var B = function(e, t, n, r, i, o, a) {
                var s = 0,
                    u = e.length,
                    l = null == n;
                if ("object" === D.type(n))
                    for (s in i = !0, n) B(e, t, s, n[s], !0, o, a);
                else if (void 0 !== r && (i = !0, D.isFunction(r) || (a = !0), l && (t = a ? (t.call(e, r), null) : (l = t, function(e, t, n) {
                        return l.call(D(e), n)
                    })), t))
                    for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
            },
            $ = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };

        function U() {
            this.expando = D.expando + U.uid++
        }
        U.uid = 1, U.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t) i[D.camelCase(t)] = n;
                else
                    for (r in t) i[D.camelCase(r)] = t[r];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][D.camelCase(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(D.camelCase) : (t = D.camelCase(t)) in r ? [t] : t.match(O) || []).length;
                        for (; n--;) delete r[t[n]]
                    }(void 0 === t || D.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
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
            var r;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(G, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                    try {
                        n = function i(e) {
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
                var t, r, i, o = this[0],
                    a = o && o.attributes;
                if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                    X.set(this, n)
                }) : B(this, function(e) {
                    var t;
                    if (o && void 0 === e) {
                        if (void 0 !== (t = X.get(o, n))) return t;
                        if (void 0 !== (t = Y(o, n))) return t
                    } else this.each(function() {
                        X.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
                if (this.length && (i = X.get(o), 1 === o.nodeType && !V.get(o, "hasDataAttrs"))) {
                    for (t = a.length; t--;) a[t] && (0 === (r = a[t].name).indexOf("data-") && (r = D.camelCase(r.slice(5)), Y(o, r, i[r])));
                    V.set(o, "hasDataAttrs", !0)
                }
                return i
            },
            removeData: function(e) {
                return this.each(function() {
                    X.remove(this, e)
                })
            }
        }), D.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = V.get(e, t), n && (!r || Array.isArray(n) ? r = V.access(e, t, D.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = D.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = D._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                    D.dequeue(e, t)
                }, o)), !r && o && o.empty.fire()
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
                var n, r = 1,
                    i = D.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --r || i.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = V.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t)
            }
        });
        var J = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            K = new RegExp("^(?:([+-])=|)(" + J + ")([a-z%]*)$", "i"),
            Z = ["Top", "Right", "Bottom", "Left"],
            ee = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && D.contains(e.ownerDocument, e) && "none" === D.css(e, "display")
            },
            te = function(e, t, n, r) {
                var i, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
                return i
            };

        function Ce(e, t, n, r) {
            var i, o = 1,
                a = 20,
                s = r ? function() {
                    return r.cur()
                } : function() {
                    return D.css(e, t, "")
                },
                u = s(),
                l = n && n[3] || (D.cssNumber[t] ? "" : "px"),
                c = (D.cssNumber[t] || "px" !== l && +u) && K.exec(D.css(e, t));
            if (c && c[3] !== l)
                for (l = l || c[3], n = n || [], c = +u || 1; c /= o = o || ".5", D.style(e, t, c + l), o !== (o = s() / u) && 1 !== o && --a;);
            return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
        }
        var ne = {};

        function re(e, t) {
            for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = V.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ee(r) && (i[o] = (f = l = u = void 0, l = (s = r).ownerDocument, c = s.nodeName, (f = ne[c]) || (u = l.body.appendChild(l.createElement(c)), f = D.css(u, "display"), u.parentNode.removeChild(u), "none" === f && (f = "block"), ne[c] = f)))) : "none" !== n && (i[o] = "none", V.set(r, "display", n)));
            var s, u, l, c, f;
            for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
            return e
        }
        D.fn.extend({
            show: function() {
                return re(this, !0)
            },
            hide: function() {
                return re(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    ee(this) ? D(this).show() : D(this).hide()
                })
            }
        });
        var ie = /^(?:checkbox|radio)$/i,
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
            return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S(e, t) ? D.merge([e], n) : n
        }

        function le(e, t) {
            for (var n = 0, r = e.length; n < r; n++) V.set(e[n], "globalEval", !t || V.get(t[n], "globalEval"))
        }
        se.optgroup = se.option, se.tbody = se.tfoot = se.colgroup = se.caption = se.thead, se.th = se.td;
        var ce, fe, de = /<|&#?\w+;/;

        function pe(e, t, n, r, i) {
            for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
                if ((o = e[p]) || 0 === o)
                    if ("object" === D.type(o)) D.merge(d, o.nodeType ? [o] : o);
                    else if (de.test(o)) {
                for (a = a || f.appendChild(t.createElement("div")), s = (oe.exec(o) || ["", ""])[1].toLowerCase(), u = se[s] || se._default, a.innerHTML = u[1] + D.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
                D.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
            } else d.push(t.createTextNode(o));
            for (f.textContent = "", p = 0; o = d[p++];)
                if (r && -1 < D.inArray(o, r)) i && i.push(o);
                else if (l = D.contains(o.ownerDocument, o), a = ue(f.appendChild(o), "script"), l && le(a), n)
                for (c = 0; o = a[c++];) ae.test(o.type || "") && n.push(o);
            return f
        }
        ce = k.createDocumentFragment().appendChild(k.createElement("div")), (fe = k.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), g.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue;
        var he = k.documentElement,
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
                return k.activeElement
            } catch (A) {}
        }

        function we(e, t, n, r, i, o) {
            var a, s;
            if ("object" == typeof t) {
                for (s in "string" != typeof n && (r = r || n, n = void 0), t) we(e, s, n, r, t[s], o);
                return e
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = xe;
            else if (!i) return e;
            return 1 === o && (a = i, (i = function(e) {
                return D().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = D.guid++)), e.each(function() {
                D.event.add(this, t, i, r, n)
            })
        }
        D.event = {
            global: {},
            add: function(t, e, n, r, i) {
                var o, a, s, u, l, c, f, d, p, h, m, g = V.get(t);
                if (g)
                    for (n.handler && (n = (o = n).handler, i = o.selector), i && D.find.matchesSelector(he, i), n.guid || (n.guid = D.guid++), (u = g.events) || (u = g.events = {}), (a = g.handle) || (a = g.handle = function(e) {
                            return void 0 !== D && D.event.triggered !== e.type ? D.event.dispatch.apply(t, arguments) : void 0
                        }), l = (e = (e || "").match(O) || [""]).length; l--;) p = m = (s = ve.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = D.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = D.event.special[p] || {}, c = D.extend({
                        type: p,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && D.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(p, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), D.event.global[p] = !0)
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, u, l, c, f, d, p, h, m, g = V.hasData(e) && V.get(e);
                if (g && (u = g.events)) {
                    for (l = (t = (t || "").match(O) || [""]).length; l--;)
                        if (p = m = (s = ve.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                            for (f = D.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                            a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || D.removeEvent(e, p, g.handle), delete u[p])
                        } else
                            for (p in u) D.event.remove(e, p + t[l], n, r, !0);
                    D.isEmptyObject(u) && V.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, i, o, a, s = D.event.fix(e),
                    u = new Array(arguments.length),
                    l = (V.get(this, "events") || {})[s.type] || [],
                    c = D.event.special[s.type] || {};
                for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                    for (a = D.event.handlers.call(this, s, l), t = 0;
                        (i = a[t++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = i.elem, n = 0;
                            (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((D.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, s), s.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, o, a, s = [],
                    u = t.delegateCount,
                    l = e.target;
                if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                            for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < D(i, this).index(l) : D.find(i, this, null, [l]).length), a[i] && o.push(r);
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
                        if ("checkbox" === this.type && this.click && S(this, "input")) return this.click(), !1
                    },
                    _default: function(e) {
                        return S(e.target, "a")
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
        }, function(e, i) {
            D.event.special[e] = {
                delegateType: i,
                bindType: i,
                handle: function(e) {
                    var t, n = e.relatedTarget,
                        r = e.handleObj;
                    return n && (n === this || D.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
                }
            }
        }), D.fn.extend({
            on: function(e, t, n, r) {
                return we(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return we(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, D(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = xe), this.each(function() {
                    D.event.remove(this, e, n, t)
                });
                for (i in e) this.off(i, t, e[i]);
                return this
            }
        });
        var Se = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Te = /<script|<style|<link/i,
            Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ke = /^true\/(.*)/,
            Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function De(e, t) {
            return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && D(">tbody", e)[0] || e
        }

        function Le(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function Fe(e) {
            var t = ke.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function Ne(e, t) {
            var n, r, i, o, a, s, u, l;
            if (1 === t.nodeType) {
                if (V.hasData(e) && (o = V.access(e), a = V.set(t, o), l = o.events))
                    for (i in delete a.handle, a.events = {}, l)
                        for (n = 0, r = l[i].length; n < r; n++) D.event.add(t, i, l[i][n]);
                X.hasData(e) && (s = X.access(e), u = D.extend({}, s), X.set(t, u))
            }
        }

        function Me(n, r, i, o) {
            r = m.apply([], r);
            var e, t, a, s, u, l, c = 0,
                f = n.length,
                d = f - 1,
                p = r[0],
                h = D.isFunction(p);
            if (h || 1 < f && "string" == typeof p && !g.checkClone && Ae.test(p)) return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = p.call(this, e, t.html())), Me(t, r, i, o)
            });
            if (f && (t = (e = pe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
                for (s = (a = D.map(ue(e, "script"), Le)).length; c < f; c++) u = e, c !== d && (u = D.clone(u, !0, !0), s && D.merge(a, ue(u, "script"))), i.call(n[c], u, c);
                if (s)
                    for (l = a[a.length - 1].ownerDocument, D.map(a, Fe), c = 0; c < s; c++) u = a[c], ae.test(u.type || "") && !V.access(u, "globalEval") && D.contains(l, u) && (u.src ? D._evalUrl && D._evalUrl(u.src) : v(u.textContent.replace(Ee, ""), l))
            }
            return n
        }

        function je(e, t, n) {
            for (var r, i = t ? D.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || D.cleanData(ue(r)), r.parentNode && (n && D.contains(r.ownerDocument, r) && le(ue(r, "script")), r.parentNode.removeChild(r));
            return e
        }
        D.extend({
            htmlPrefilter: function(e) {
                return e.replace(Se, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                    f = D.contains(e.ownerDocument, e);
                if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || D.isXMLDoc(e)))
                    for (a = ue(c), r = 0, i = (o = ue(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && ie.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
                if (t)
                    if (n)
                        for (o = o || ue(e), a = a || ue(c), r = 0, i = o.length; r < i; r++) Ne(o[r], a[r]);
                    else Ne(e, c);
                return 0 < (a = ue(c, "script")).length && le(a, !f && ue(e, "script")), c
            },
            cleanData: function(e) {
                for (var t, n, r, i = D.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if ($(n)) {
                        if (t = n[V.expando]) {
                            if (t.events)
                                for (r in t.events) i[r] ? D.event.remove(n, r) : D.removeEvent(n, r, t.handle);
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
                return B(this, function(e) {
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
                return B(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Te.test(e) && !se[(oe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = D.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (D.cleanData(ue(t, !1)), t.innerHTML = e);
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
                for (var t, n = [], r = D(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), D(r[o])[a](t), u.apply(n, t.get());
                return this.pushStack(n)
            }
        });
        var qe = /^margin/,
            ze = new RegExp("^(" + J + ")(?!px)[a-z%]+$", "i"),
            Oe = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = A), t.getComputedStyle(e)
            };

        function Pe(e, t, n) {
            var r, i, o, a, s = e.style;
            return (n = n || Oe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || D.contains(e.ownerDocument, e) || (a = D.style(e, t)), !g.pixelMarginRight() && ze.test(a) && qe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
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
                    var e = A.getComputedStyle(a);
                    t = "1%" !== e.top, i = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, he.removeChild(o), a = null
                }
            }
            var t, n, r, i, o = k.createElement("div"),
                a = k.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), D.extend(g, {
                pixelPosition: function() {
                    return e(), t
                },
                boxSizingReliable: function() {
                    return e(), n
                },
                pixelMarginRight: function() {
                    return e(), r
                },
                reliableMarginLeft: function() {
                    return e(), i
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
            Be = ["Webkit", "Moz", "ms"],
            $e = k.createElement("div").style;

        function Ue(e) {
            var t = D.cssProps[e];
            return t || (t = D.cssProps[e] = function r(e) {
                if (e in $e) return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = Be.length; n--;)
                    if ((e = Be[n] + t) in $e) return e
            }(e) || e), t
        }

        function Ve(e, t, n) {
            var r = K.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function Xe(e, t, n, r, i) {
            var o, a = 0;
            for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += D.css(e, n + Z[o], !0, i)), r ? ("content" === n && (a -= D.css(e, "padding" + Z[o], !0, i)), "margin" !== n && (a -= D.css(e, "border" + Z[o] + "Width", !0, i))) : (a += D.css(e, "padding" + Z[o], !0, i), "padding" !== n && (a += D.css(e, "border" + Z[o] + "Width", !0, i)));
            return a
        }

        function Qe(e, t, n) {
            var r, i = Oe(e),
                o = Pe(e, t, i),
                a = "border-box" === D.css(e, "boxSizing", !1, i);
            return ze.test(o) ? o : (r = a && (g.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + Xe(e, t, n || (a ? "border" : "content"), r, i) + "px")
        }

        function Ge(e, t, n, r, i) {
            return new Ge.prototype.init(e, t, n, r, i)
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
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = D.camelCase(t),
                        u = Re.test(t),
                        l = e.style;
                    return u || (t = Ue(s)), a = D.cssHooks[t] || D.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t] : ("string" === (o = typeof n) && (i = K.exec(n)) && i[1] && (n = Ce(e, t, i), o = "number"), void(null != n && n == n && ("number" === o && (n += i && i[3] || (D.cssNumber[s] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))))
                }
            },
            css: function(e, t, n, r) {
                var i, o, a, s = D.camelCase(t);
                return Re.test(t) || (t = Ue(s)), (a = D.cssHooks[t] || D.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Pe(e, t, r)), "normal" === i && t in We && (i = We[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
            }
        }), D.each(["height", "width"], function(e, a) {
            D.cssHooks[a] = {
                get: function(e, t, n) {
                    if (t) return !Ie.test(D.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Qe(e, a, n) : te(e, _e, function() {
                        return Qe(e, a, n)
                    })
                },
                set: function(e, t, n) {
                    var r, i = n && Oe(e),
                        o = n && Xe(e, a, n, "border-box" === D.css(e, "boxSizing", !1, i), i);
                    return o && (r = K.exec(t)) && "px" !== (r[3] || "px") && (e.style[a] = t, t = D.css(e, a)), Ve(0, t, o)
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
        }, function(i, o) {
            D.cssHooks[i + o] = {
                expand: function(e) {
                    for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Z[t] + o] = r[t] || r[t - 2] || r[0];
                    return n
                }
            }, qe.test(i) || (D.cssHooks[i + o].set = Ve)
        }), D.fn.extend({
            css: function(e, t) {
                return B(this, function(e, t, n) {
                    var r, i, o = {},
                        a = 0;
                    if (Array.isArray(t)) {
                        for (r = Oe(e), i = t.length; a < i; a++) o[t[a]] = D.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? D.style(e, t, n) : D.css(e, t)
                }, e, t, 1 < arguments.length)
            }
        }), ((D.Tween = Ge).prototype = {
            constructor: Ge,
            init: function(e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || D.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (D.cssNumber[n] ? "" : "px")
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
            Je && (!1 === k.hidden && A.requestAnimationFrame ? A.requestAnimationFrame(nt) : A.setTimeout(nt, D.fx.interval), D.fx.tick())
        }

        function rt() {
            return A.setTimeout(function() {
                Ye = void 0
            }), Ye = D.now()
        }

        function it(e, t) {
            var n, r = 0,
                i = {
                    height: e
                };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Z[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function ot(e, t, n) {
            for (var r, i = (at.tweeners[t] || []).concat(at.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                if (r = i[o].call(n, t, e)) return r
        }

        function at(o, e, t) {
            var n, a, r = 0,
                i = at.prefilters.length,
                s = D.Deferred().always(function() {
                    delete u.elem
                }),
                u = function() {
                    if (a) return !1;
                    for (var e = Ye || rt(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                    return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
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
                    startTime: Ye || rt(),
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
                    var n, r, i, o, a;
                    for (n in e)
                        if (i = t[r = D.camelCase(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = D.cssHooks[r]) && "expand" in a)
                            for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                        else t[r] = i
                }(c, l.opts.specialEasing); r < i; r++)
                if (n = at.prefilters[r].call(l, o, c, l.opts)) return D.isFunction(n.stop) && (D._queueHooks(l.elem, l.opts.queue).stop = D.proxy(n.stop, n)), n;
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
                    return Ce(n.elem, e, K.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                for (var n, r = 0, i = (e = D.isFunction(e) ? (t = e, ["*"]) : e.match(O)).length; r < i; r++) n = e[r], at.tweeners[n] = at.tweeners[n] || [], at.tweeners[n].unshift(t)
            },
            prefilters: [function Bt(e, t, n) {
                var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                    d = this,
                    p = {},
                    h = e.style,
                    m = e.nodeType && ee(e),
                    g = V.get(e, "fxshow");
                for (r in n.queue || (null == (a = D._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || s()
                    }), a.unqueued++, d.always(function() {
                        d.always(function() {
                            a.unqueued--, D.queue(e, "fx").length || a.empty.fire()
                        })
                    })), t)
                    if (i = t[r], et.test(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (m ? "hide" : "show")) {
                            if ("show" !== i || !g || void 0 === g[r]) continue;
                            m = !0
                        }
                        p[r] = g && g[r] || D.style(e, r)
                    } if ((u = !D.isEmptyObject(t)) || !D.isEmptyObject(p))
                    for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = g && g.display) && (l = V.get(e, "display")), "none" === (c = D.css(e, "display")) && (l ? c = l : (re([e], !0), l = e.style.display || l, c = D.css(e, "display"), re([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === D.css(e, "float") && (u || (d.done(function() {
                            h.display = l
                        }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
                            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                        })), u = !1, p) u || (g ? "hidden" in g && (m = g.hidden) : g = V.access(e, "fxshow", {
                        display: l
                    }), o && (g.hidden = !m), m && re([e], !0), d.done(function() {
                        for (r in m || re([e]), V.remove(e, "fxshow"), p) D.style(e, r, p[r])
                    })), u = ot(m ? g[r] : 0, r, d), r in g || (g[r] = u.start, m && (u.end = u.start, u.start = 0))
            }],
            prefilter: function(e, t) {
                t ? at.prefilters.unshift(e) : at.prefilters.push(e)
            }
        }), D.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? D.extend({}, e) : {
                complete: n || !n && t || D.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !D.isFunction(t) && t
            };
            return D.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in D.fx.speeds ? r.duration = D.fx.speeds[r.duration] : r.duration = D.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                D.isFunction(r.old) && r.old.call(this), r.queue && D.dequeue(this, r.queue)
            }, r
        }, D.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ee).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(t, e, n, r) {
                var i = D.isEmptyObject(t),
                    o = D.speed(e, n, r),
                    a = function() {
                        var e = at(this, D.extend({}, t), o);
                        (i || V.get(this, "finish")) && e.stop(!0)
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
                        n = D.timers,
                        r = V.get(this);
                    if (t) r[t] && r[t].stop && a(r[t]);
                    else
                        for (t in r) r[t] && r[t].stop && tt.test(t) && a(r[t]);
                    for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                    !e && o || D.dequeue(this, i)
                })
            },
            finish: function(a) {
                return !1 !== a && (a = a || "fx"), this.each(function() {
                    var e, t = V.get(this),
                        n = t[a + "queue"],
                        r = t[a + "queueHooks"],
                        i = D.timers,
                        o = n ? n.length : 0;
                    for (t.finish = !0, D.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                    for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete t.finish
                })
            }
        }), D.each(["toggle", "show", "hide"], function(e, r) {
            var i = D.fn[r];
            D.fn[r] = function(e, t, n) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(it(r, !0), e, t, n)
            }
        }), D.each({
            slideDown: it("show"),
            slideUp: it("hide"),
            slideToggle: it("toggle"),
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
            D.fn[e] = function(e, t, n) {
                return this.animate(r, e, t, n)
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
        }, D.fn.delay = function(r, e) {
            return r = D.fx && D.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
                var n = A.setTimeout(e, r);
                t.stop = function() {
                    A.clearTimeout(n)
                }
            })
        }, Ke = k.createElement("input"), Ze = k.createElement("select").appendChild(k.createElement("option")), Ke.type = "checkbox", g.checkOn = "" !== Ke.value, g.optSelected = Ze.selected, (Ke = k.createElement("input")).value = "t", Ke.type = "radio", g.radioValue = "t" === Ke.value;
        var st, ut = D.expr.attrHandle;
        D.fn.extend({
            attr: function(e, t) {
                return B(this, D.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    D.removeAttr(this, e)
                })
            }
        }), D.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? D.prop(e, t, n) : (1 === o && D.isXMLDoc(e) || (i = D.attrHooks[t.toLowerCase()] || (D.expr.match.bool.test(t) ? st : void 0)), void 0 !== n ? null === n ? void D.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = D.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!g.radioValue && "radio" === t && S(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    i = t && t.match(O);
                if (i && 1 === e.nodeType)
                    for (; n = i[r++];) e.removeAttribute(n)
            }
        }), st = {
            set: function(e, t, n) {
                return !1 === t ? D.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, D.each(D.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var a = ut[t] || D.find.attr;
            ut[t] = function(e, t, n) {
                var r, i, o = t.toLowerCase();
                return n || (i = ut[o], ut[o] = r, r = null != a(e, t, n) ? o : null, ut[o] = i), r
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
                return B(this, D.prop, e, t, 1 < arguments.length)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[D.propFix[e] || e]
                })
            }
        }), D.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && D.isXMLDoc(e) || (t = D.propFix[t] || t, i = D.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
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
                var e, n, r, i, o, a, s, u = 0;
                if (D.isFunction(t)) return this.each(function(e) {
                    D(this).addClass(t.call(this, e, dt(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(O) || []; n = this[u++];)
                        if (i = dt(n), r = 1 === n.nodeType && " " + ft(i) + " ") {
                            for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (s = ft(r)) && n.setAttribute("class", s)
                        } return this
            },
            removeClass: function(t) {
                var e, n, r, i, o, a, s, u = 0;
                if (D.isFunction(t)) return this.each(function(e) {
                    D(this).removeClass(t.call(this, e, dt(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(O) || []; n = this[u++];)
                        if (i = dt(n), r = 1 === n.nodeType && " " + ft(i) + " ") {
                            for (a = 0; o = e[a++];)
                                for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                            i !== (s = ft(r)) && n.setAttribute("class", s)
                        } return this
            },
            toggleClass: function(i, t) {
                var o = typeof i;
                return "boolean" == typeof t && "string" === o ? t ? this.addClass(i) : this.removeClass(i) : D.isFunction(i) ? this.each(function(e) {
                    D(this).toggleClass(i.call(this, e, dt(this), t), t)
                }) : this.each(function() {
                    var e, t, n, r;
                    if ("string" === o)
                        for (t = 0, n = D(this), r = i.match(O) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                    else void 0 !== i && "boolean" !== o || ((e = dt(this)) && V.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : V.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (1 === n.nodeType && -1 < (" " + ft(dt(n)) + " ").indexOf(t)) return !0;
                return !1
            }
        });
        var pt = /\r/g;
        D.fn.extend({
            val: function(n) {
                var r, e, i, t = this[0];
                return arguments.length ? (i = D.isFunction(n), this.each(function(e) {
                    var t;
                    1 === this.nodeType && (null == (t = i ? n.call(this, e, D(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = D.map(t, function(e) {
                        return null == e ? "" : e + ""
                    })), (r = D.valHooks[this.type] || D.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
                })) : t ? (r = D.valHooks[t.type] || D.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(pt, "") : null == e ? "" : e : void 0
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
                        var t, n, r, i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                                if (t = D(n).val(), a) return t;
                                s.push(t)
                            } return s
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, o = D.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < D.inArray(D.valHooks.option.get(r), o)) && (n = !0);
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
            trigger: function(e, t, n, r) {
                var i, o, a, s, u, l, c, f = [n || k],
                    d = E.call(e, "type") ? e.type : e,
                    p = E.call(e, "namespace") ? e.namespace.split(".") : [];
                if (o = a = n = n || k, 3 !== n.nodeType && 8 !== n.nodeType && !ht.test(d + D.event.triggered) && (-1 < d.indexOf(".") && (d = (p = d.split(".")).shift(), p.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[D.expando] ? e : new D.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : D.makeArray(t, [e]), c = D.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                    if (!r && !c.noBubble && !D.isWindow(n)) {
                        for (s = c.delegateType || d, ht.test(s + d) || (o = o.parentNode); o; o = o.parentNode) f.push(o), a = o;
                        a === (n.ownerDocument || k) && f.push(a.defaultView || a.parentWindow || A)
                    }
                    for (i = 0;
                        (o = f[i++]) && !e.isPropagationStopped();) e.type = 1 < i ? s : c.bindType || d, (l = (V.get(o, "events") || {})[e.type] && V.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && $(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                    return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), t) || !$(n) || u && D.isFunction(n[d]) && !D.isWindow(n) && ((a = n[u]) && (n[u] = null), n[D.event.triggered = d](), D.event.triggered = void 0, a && (n[u] = a)), e.result
                }
            },
            simulate: function(e, t, n) {
                var r = D.extend(new D.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                D.event.trigger(r, null, t)
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
        }), g.focusin = "onfocusin" in A, g.focusin || D.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, r) {
            var i = function(e) {
                D.event.simulate(r, e.target, D.event.fix(e))
            };
            D.event.special[r] = {
                setup: function() {
                    var e = this.ownerDocument || this,
                        t = V.access(e, r);
                    t || e.addEventListener(n, i, !0), V.access(e, r, (t || 0) + 1)
                },
                teardown: function() {
                    var e = this.ownerDocument || this,
                        t = V.access(e, r) - 1;
                    t ? V.access(e, r, t) : (e.removeEventListener(n, i, !0), V.remove(e, r))
                }
            }
        });
        var mt = A.location,
            gt = D.now(),
            vt = /\?/;
        D.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new A.DOMParser).parseFromString(e, "text/xml")
            } catch (k) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || D.error("Invalid XML: " + e), t
        };
        var yt = /\[\]$/,
            xt = /\r?\n/g,
            bt = /^(?:submit|button|image|reset|file)$/i,
            wt = /^(?:input|select|textarea|keygen)/i;

        function St(n, e, r, i) {
            var t;
            if (Array.isArray(e)) D.each(e, function(e, t) {
                r || yt.test(n) ? i(n, t) : St(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
            else if (r || "object" !== D.type(e)) i(n, e);
            else
                for (t in e) St(n + "[" + t + "]", e[t], r, i)
        }
        D.param = function(e, t) {
            var n, r = [],
                i = function(e, t) {
                    var n = D.isFunction(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (Array.isArray(e) || e.jquery && !D.isPlainObject(e)) D.each(e, function() {
                i(this.name, this.value)
            });
            else
                for (n in e) St(n, e[n], t, i);
            return r.join("&")
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
                    return this.name && !D(this).is(":disabled") && wt.test(this.nodeName) && !bt.test(e) && (this.checked || !ie.test(e))
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
        var Ct = /%20/g,
            Tt = /#.*$/,
            At = /([?&])_=[^&]*/,
            kt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Et = /^(?:GET|HEAD)$/,
            Dt = /^\/\//,
            Lt = {},
            Ft = {},
            Nt = "*/".concat("*"),
            Mt = k.createElement("a");

        function jt(o) {
            return function(e, t) {
                "string" != typeof e && (t = e, e = "*");
                var n, r = 0,
                    i = e.toLowerCase().match(O) || [];
                if (D.isFunction(t))
                    for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
            }
        }

        function qt(t, i, o, a) {
            var s = {},
                u = t === Ft;

            function l(e) {
                var r;
                return s[e] = !0, D.each(t[e] || [], function(e, t) {
                    var n = t(i, o, a);
                    return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
                }), r
            }
            return l(i.dataTypes[0]) || !s["*"] && l("*")
        }

        function zt(e, t) {
            var n, r, i = D.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && D.extend(!0, e, r), e
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
                    "*": Nt,
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
            ajaxTransport: jt(Ft),
            ajax: function(e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var d, p, h, n, m, r, g, v, i, o, y = D.ajaxSetup({}, t),
                    x = y.context || y,
                    b = y.context && (x.nodeType || x.jquery) ? D(x) : D.event,
                    w = D.Deferred(),
                    S = D.Callbacks("once memory"),
                    C = y.statusCode || {},
                    a = {},
                    s = {},
                    u = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (g) {
                                if (!n)
                                    for (n = {}; t = kt.exec(h);) n[t[1].toLowerCase()] = t[2];
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
                                    for (t in e) C[t] = [C[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || u;
                            return d && d.abort(t), l(0, t), this
                        }
                    };
                if (w.promise(T), y.url = ((e || y.url || mt.href) + "").replace(Dt, mt.protocol + "//"), y.type = t.method || t.type || y.method || y.type, y.dataTypes = (y.dataType || "*").toLowerCase().match(O) || [""], null == y.crossDomain) {
                    r = k.createElement("a");
                    try {
                        r.href = y.url, r.href = r.href, y.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host
                    } catch (L) {
                        y.crossDomain = !0
                    }
                }
                if (y.data && y.processData && "string" != typeof y.data && (y.data = D.param(y.data, y.traditional)), qt(Lt, y, t, T), g) return T;
                for (i in (v = D.event && y.global) && 0 == D.active++ && D.event.trigger("ajaxStart"), y.type = y.type.toUpperCase(), y.hasContent = !Et.test(y.type), p = y.url.replace(Tt, ""), y.hasContent ? y.data && y.processData && 0 === (y.contentType || "").indexOf("application/x-www-form-urlencoded") && (y.data = y.data.replace(Ct, "+")) : (o = y.url.slice(p.length), y.data && (p += (vt.test(p) ? "&" : "?") + y.data, delete y.data), !1 === y.cache && (p = p.replace(At, "$1"), o = (vt.test(p) ? "&" : "?") + "_=" + gt++ + o), y.url = p + o), y.ifModified && (D.lastModified[p] && T.setRequestHeader("If-Modified-Since", D.lastModified[p]), D.etag[p] && T.setRequestHeader("If-None-Match", D.etag[p])), (y.data && y.hasContent && !1 !== y.contentType || t.contentType) && T.setRequestHeader("Content-Type", y.contentType), T.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + Nt + "; q=0.01" : "") : y.accepts["*"]), y.headers) T.setRequestHeader(i, y.headers[i]);
                if (y.beforeSend && (!1 === y.beforeSend.call(x, T, y) || g)) return T.abort();
                if (u = "abort", S.add(y.complete), T.done(y.success), T.fail(y.error), d = qt(Ft, y, t, T)) {
                    if (T.readyState = 1, v && b.trigger("ajaxSend", [T, y]), g) return T;
                    y.async && 0 < y.timeout && (m = A.setTimeout(function() {
                        T.abort("timeout")
                    }, y.timeout));
                    try {
                        g = !1, d.send(a, l)
                    } catch (L) {
                        if (g) throw L;
                        l(-1, L)
                    }
                } else l(-1, "No Transport");

                function l(e, t, n, r) {
                    var i, o, a, s, u, l = t;
                    g || (g = !0, m && A.clearTimeout(m), d = void 0, h = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function c(e, t, n) {
                        for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (i in s)
                                if (s[i] && s[i].test(r)) {
                                    u.unshift(i);
                                    break
                                } if (u[0] in n) o = u[0];
                        else {
                            for (i in n) {
                                if (!u[0] || e.converters[i + " " + u[0]]) {
                                    o = i;
                                    break
                                }
                                a || (a = i)
                            }
                            o = o || a
                        }
                        if (o) return o !== u[0] && u.unshift(o), n[o]
                    }(y, T, n)), s = function f(e, t, n, r) {
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
                    }(y, s, T, i), i ? (y.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (D.lastModified[p] = u), (u = T.getResponseHeader("etag")) && (D.etag[p] = u)), 204 === e || "HEAD" === y.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? w.resolveWith(x, [o, l, T]) : w.rejectWith(x, [T, l, a]), T.statusCode(C), C = void 0, v && b.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]), S.fireWith(x, [T, l]), v && (b.trigger("ajaxComplete", [T, y]), --D.active || D.event.trigger("ajaxStop")))
                }
                return T
            },
            getJSON: function(e, t, n) {
                return D.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return D.get(e, void 0, t, "script")
            }
        }), D.each(["get", "post"], function(e, i) {
            D[i] = function(e, t, n, r) {
                return D.isFunction(t) && (r = r || n, n = t, t = void 0), D.ajax(D.extend({
                    url: e,
                    type: i,
                    dataType: r,
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
                return new A.XMLHttpRequest
            } catch (e) {}
        };
        var Ot = {
                0: 200,
                1223: 204
            },
            Pt = D.ajaxSettings.xhr();
        g.cors = !!Pt && "withCredentials" in Pt, g.ajax = Pt = !!Pt, D.ajaxTransport(function(i) {
            var o, a;
            if (g.cors || Pt && !i.crossDomain) return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                        for (n in i.xhrFields) r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ot[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }, r.onload = o(), a = r.onerror = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && A.setTimeout(function() {
                            o && a()
                        })
                    }, o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
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
            var r, i;
            if (n.crossDomain) return {
                send: function(e, t) {
                    r = D("<script>").prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                    }), k.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
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
            var r, i, o, a = !1 !== e.jsonp && (Rt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Rt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = D.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Rt, "$1" + r) : !1 !== e.jsonp && (e.url += (vt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return o || D.error(r + " was not called"), o[0]
            }, e.dataTypes[0] = "json", i = A[r], A[r] = function() {
                o = arguments
            }, n.always(function() {
                void 0 === i ? D(A).removeProp(r) : A[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, It.push(r)), o && D.isFunction(i) && i(o[0]), o = i = void 0
            }), "script"
        }), g.createHTMLDocument = ((Ht = k.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ht.childNodes.length), D.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((r = (t = k.implementation.createHTMLDocument("")).createElement("base")).href = k.location.href, t.head.appendChild(r)) : t = k), o = !n && [], (i = C.exec(e)) ? [t.createElement(i[1])] : (i = pe([e], t, o), o && o.length && D(o).remove(), D.merge([], i.childNodes)));
            var r, i, o
        }, D.fn.load = function(e, t, n) {
            var r, i, o, a = this,
                s = e.indexOf(" ");
            return -1 < s && (r = ft(e.slice(s)), e = e.slice(0, s)), D.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && D.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, a.html(r ? D("<div>").append(D.parseHTML(e)).find(r) : e)
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
                var r, i, o, a, s, u, l = D.css(e, "position"),
                    c = D(e),
                    f = {};
                "static" === l && (e.style.position = "relative"), s = c.offset(), o = D.css(e, "top"), u = D.css(e, "left"), i = ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, r.left) : (a = parseFloat(o) || 0, parseFloat(u) || 0), D.isFunction(t) && (t = t.call(e, n, D.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
            }
        }, D.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    D.offset.setOffset(this, t, e)
                });
                var e, n, r, i, o = this[0];
                return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(), n = (e = o.ownerDocument).documentElement, i = e.defaultView, {
                    top: r.top + i.pageYOffset - n.clientTop,
                    left: r.left + i.pageXOffset - n.clientLeft
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        r = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === D.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), S(e[0], "html") || (r = e.offset()), r = {
                        top: r.top + D.css(e[0], "borderTopWidth", !0),
                        left: r.left + D.css(e[0], "borderLeftWidth", !0)
                    }), {
                        top: t.top - r.top - D.css(n, "marginTop", !0),
                        left: t.left - r.left - D.css(n, "marginLeft", !0)
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
        }, function(t, i) {
            var o = "pageYOffset" === i;
            D.fn[t] = function(e) {
                return B(this, function(e, t, n) {
                    var r;
                    return D.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n ? r ? r[i] : e[t] : void(r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n)
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
            }, function(r, o) {
                D.fn[o] = function(e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e),
                        i = r || (!0 === e || !0 === t ? "margin" : "border");
                    return B(this, function(e, t, n) {
                        var r;
                        return D.isWindow(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? D.css(e, t, i) : D.style(e, t, n, i)
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
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), D.holdReady = function(e) {
            e ? D.readyWait++ : D.ready(!0)
        }, D.isArray = Array.isArray, D.parseJSON = JSON.parse, D.nodeName = S, "function" == typeof define && define.amd && define("jquery", [], function() {
            return D
        });
        var _t = A.jQuery,
            Wt = A.$;
        return D.noConflict = function(e) {
            return A.$ === D && (A.$ = Wt), e && A.jQuery === D && (A.jQuery = _t), D
        }, e || (A.jQuery = A.$ = D), D
    }), void 0 === Mozilla) var Mozilla = {};
if (function() {
        "use strict";
        var e = {
                initMobileDownloadLinks: function() {
                    if ("android" === site.platform)
                        for (var e = document.querySelectorAll('a[href^="https://play.google.com/store/apps/"]'), t = 0; t < e.length; ++t) {
                            var n = e[t],
                                r = n.getAttribute("href").replace("https://play.google.com/store/apps/", "market://");
                            n.setAttribute("href", r)
                        }
                },
                maybeSwitchToDistDownloadLinks: function(e) {
                    if (e.distribution && "default" !== e.distribution) {
                        for (var t = e.distribution.toLowerCase(), n = document.querySelectorAll("a[data-" + t + "-link]"), r = document.querySelectorAll("img[data-" + t + "-link]"), i = 0; i < n.length; i++) {
                            var o = n[i].getAttribute("data-" + t + "-link");
                            n[i].setAttribute("href", o)
                        }
                        for (var a = 0; a < r.length; a++) {
                            var s = r[a].getAttribute("data-" + t + "-link");
                            r[a].setAttribute("src", s)
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
    }(), void 0 === Mozilla) Mozilla = {};
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
            for (var r = 0, i = 0, o = !1; n.length < t.length;) n.push("0");
            for (; t.length < n.length;) t.push("0");
            e || (n.length = 1);
            for (var a = 0; a < n.length; a++) {
                if ((r = Number(t[a])) < (i = Number(n[a]))) {
                    o = !1;
                    break
                }
                if (i < r) {
                    o = !0;
                    break
                }
                o = !0
            }
            return o
        }, l._isFirefoxUpToDate = function(e, t, n) {
            e = e === undefined || e, t = t !== undefined && t, n = n === undefined ? l._getFirefoxVersion() : n;
            var r = document.documentElement;
            if (!r.getAttribute("data-esr-versions") || !r.getAttribute("data-latest-firefox")) return !1;
            var i = t ? r.getAttribute("data-esr-versions").split(" ") : [r.getAttribute("data-latest-firefox")],
                o = n.match(/^(\d+(?:\.\d+){1,2})/)[1].split("."),
                a = !1;
            i.sort(function(e, t) {
                return parseFloat(e) < parseFloat(t)
            });
            for (var s = 0; s < i.length; s++) {
                var u = i[s].split(".");
                if (a = l._compareVersion(e, o, u)) break
            }
            return a
        }, l.isFirefoxOutOfDate = function(e, t, n) {
            var r = parseInt(e, 10),
                i = void 0 === n ? parseInt(document.documentElement.getAttribute("data-latest-firefox"), 10) : parseInt(n, 10),
                o = Math.max(parseInt(t, 10), 1);
            return !(isNaN(i) || isNaN(r) || isNaN(o)) && r <= i - o
        }, l.isFirefoxURLOutOfDate = function(e, t, n) {
            var r = void 0 === t ? window.location.pathname : t,
                i = /firefox\/(\d+(?:\.\d+)?\.\da?\d?)/.exec(r),
                o = i ? parseInt(i[1], 10) : null,
                a = void 0 === n ? parseInt(document.documentElement.getAttribute("data-latest-firefox"), 10) : parseInt(n, 10),
                s = Math.max(parseInt(e, 10), 1);
            return !!(o && a && o <= a - s)
        }, l.getFirefoxDetails = function(s) {
            if (l.FirefoxDetails) s(l.FirefoxDetails);
            else {
                var t = Math.random().toString(36).replace(/[^a-z]+/g, ""),
                    u = function(e) {
                        e.detail && e.detail.data && e.detail.callbackID === t && (window.clearTimeout(i), n(!0, e.detail.data.version, e.detail.data.defaultUpdateChannel, e.detail.data.distribution))
                    },
                    n = function(e, t, n, r) {
                        document.removeEventListener("mozUITourResponse", u, !1);
                        var i = "esr" === n,
                            o = l._isFirefoxUpToDate(e, !!e && i, t),
                            a = l.FirefoxDetails = {
                                accurate: e,
                                version: t,
                                channel: n,
                                distribution: r,
                                isUpToDate: o,
                                isESR: i
                            };
                        s(a)
                    },
                    e = l._getFirefoxVersion(),
                    r = function() {
                        n(!1, e, "release", undefined)
                    };
                if (parseFloat(e) < 35 || l._isFirefoxAndroid()) r();
                else {
                    var i = window.setTimeout(r, 400);
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
                        var r = Math.random().toString(36).replace(/[^a-z]+/g, ""),
                            i = function(e) {
                                e.detail && e.detail.data && e.detail.callbackID === r && (window.clearTimeout(o), document.removeEventListener("mozUITourResponse", i, !1), t.setup = e.detail.data.hasOwnProperty("setup") ? e.detail.data.setup : "unknown", t.desktopDevices = e.detail.data.hasOwnProperty("desktopDevices") ? e.detail.data.desktopDevices : "unknown", t.mobileDevices = e.detail.data.hasOwnProperty("mobileDevices") ? e.detail.data.mobileDevices : "unknown", a())
                            };
                        document.addEventListener("mozUITourResponse", i, !1), document.dispatchEvent(new CustomEvent("mozUITour", {
                            bubbles: !0,
                            detail: {
                                action: "getConfiguration",
                                data: {
                                    configuration: "sync",
                                    callbackID: r
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
                for (var r = 0; r < e.length; r++) t.call(n, e[r])
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
        var t, n, r, i, o, a = {};
        a.matchMedia = "undefined" != typeof window.matchMedia && window.matchMedia("all").addListener, a.classList = "classList" in document.createElement("div"), a.details = "open" in (o = e.createElement("details")) && (n = e.body || (i = e.documentElement, t = !0, i.insertBefore(e.createElement("body"), i.firstElementChild || i.firstChild)), o.innerHTML = "<summary>a</summary>b", o.style.display = "block", n.appendChild(o), r = o.offsetHeight, o.open = !0, r = r !== o.offsetHeight, n.removeChild(o), t && n.parentNode.removeChild(n), r), window.Mzp.Supports = a
    }(document), void 0 === Mzp) Mzp = {};
if (function() {
        "use strict";
        var e = {};
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), e.nextUntil = function(e, t, n) {
            var r = [];
            for (e = e.nextElementSibling; e && !e.matches(t);) e = ((!n || e.matches(n)) && r.push(e), e.nextElementSibling);
            return r
        }, window.Mzp.Utils = e
    }(), void 0 === Mzp) Mzp = {};
if (function(e) {
        "use strict";
        var n, t, r = {},
            i = !1,
            o = {
                onMenuOpen: null,
                onMenuClose: null,
                onMenuButtonClose: null
            };
        r.open = function(e, t) {
            t && e.classList.add("mzp-is-animated"), e.classList.add("mzp-is-selected"), i = !0, e.querySelector(".mzp-c-menu-title").setAttribute("aria-expanded", !0), "function" == typeof o.onMenuOpen && o.onMenuOpen(e)
        }, r.close = function() {
            for (var e = document.querySelectorAll(".mzp-c-menu-category.mzp-is-selected"), t = 0; t < e.length; t++) e[t].classList.remove("mzp-is-selected"), e[t].classList.remove("mzp-is-animated"), e[t].querySelector(".mzp-c-menu-title").setAttribute("aria-expanded", !1);
            return i = !1, "function" == typeof o.onMenuClose && 0 < e.length && o.onMenuClose(), 0 < e.length
        }, r.onDocumentKeyUp = function(e) {
            27 === e.keyCode && i && r.close()
        }, r.onCloseButtonClick = function(e) {
            e.preventDefault(), "function" == typeof o.onMenuButtonClose && o.onMenuButtonClose(), r.close()
        }, r.toggle = function(e) {
            !!e.classList.contains("mzp-is-selected") ? (e.classList.remove("mzp-is-selected"), e.classList.remove("mzp-is-animated"), e.querySelector(".mzp-c-menu-title").setAttribute("aria-expanded", !1), "function" == typeof o.onMenuClose && o.onMenuClose()) : r.open(e)
        }, r.onMouseEnter = function(t) {
            clearTimeout(n), n = setTimeout(function() {
                var e = !r.close();
                r.open(t.target, e)
            }, 150)
        }, r.onMouseLeave = function() {
            clearTimeout(n), n = setTimeout(function() {
                r.close()
            }, 150)
        }, r.onFocusOut = function() {
            var e = this;
            setTimeout(function() {
                !e.contains(document.activeElement) && e.classList.contains("mzp-is-selected") && r.close()
            }, 0)
        }, r.onClickWide = function(e) {
            e.preventDefault(), r.close(), r.open(e.target.parentNode)
        }, r.onClickSmall = function(e) {
            e.preventDefault(), r.toggle(e.target.parentNode)
        }, r.isWideViewport = function() {
            return t.matches
        }, r.handleState = function() {
            (t = matchMedia("(min-width: 768px)")).addListener(function(e) {
                r.close(), e.matches ? (r.unbindEventsSmall(), r.bindEventsWide()) : (r.unbindEventsWide(), r.bindEventsSmall())
            }), r.isWideViewport() ? r.bindEventsWide() : r.bindEventsSmall()
        }, r.bindEventsWide = function() {
            for (var e = document.querySelectorAll(".mzp-c-menu-category.mzp-js-expandable"), t = 0; t < e.length; t++) e[t].addEventListener("mouseenter", r.onMouseEnter, !1), e[t].addEventListener("mouseleave", r.onMouseLeave, !1), e[t].addEventListener("focusout", r.onFocusOut, !1), e[t].querySelector(".mzp-c-menu-title").addEventListener("click", r.onClickWide, !1), e[t].querySelector(".mzp-c-menu-button-close").addEventListener("click", r.onCloseButtonClick, !1);
            document.addEventListener("keyup", r.onDocumentKeyUp, !1)
        }, r.unbindEventsWide = function() {
            for (var e = document.querySelectorAll(".mzp-c-menu-category.mzp-js-expandable"), t = 0; t < e.length; t++) e[t].removeEventListener("mouseenter", r.onMouseEnter, !1), e[t].removeEventListener("mouseleave", r.onMouseLeave, !1), e[t].removeEventListener("focusout", r.onFocusOut, !1), e[t].querySelector(".mzp-c-menu-title").removeEventListener("click", r.onClickWide, !1), e[t].querySelector(".mzp-c-menu-button-close").removeEventListener("click", r.onCloseButtonClick, !1);
            document.removeEventListener("keyup", r.onDocumentKeyUp, !1)
        }, r.bindEventsSmall = function() {
            for (var e = document.querySelectorAll(".mzp-c-menu-category.mzp-js-expandable .mzp-c-menu-title"), t = 0; t < e.length; t++) e[t].addEventListener("click", r.onClickSmall, !1)
        }, r.unbindEventsSmall = function() {
            for (var e = document.querySelectorAll(".mzp-c-menu-category.mzp-js-expandable .mzp-c-menu-title"), t = 0; t < e.length; t++) e[t].removeEventListener("click", r.onClickSmall, !1)
        }, r.setAria = function() {
            for (var e = document.querySelectorAll(".mzp-c-menu-category.mzp-js-expandable .mzp-c-menu-title"), t = 0; t < e.length; t++) e[t].setAttribute("aria-expanded", !1)
        }, r.enhanceJS = function() {
            for (var e = document.querySelectorAll(".mzp-c-menu"), t = 0; t < e.length; t++) e[t].classList.remove("mzp-is-basic"), e[t].classList.add("mzp-is-enhanced")
        }, r.isSupported = function() {
            return "undefined" != typeof e.Supports && (e.Supports.matchMedia && e.Supports.classList)
        }, r.init = function(e) {
            if ("object" == typeof e)
                for (var t in e) e.hasOwnProperty(t) && (o[t] = e[t]);
            r.isSupported() && (r.handleState(), r.setAria(), r.enhanceJS())
        }, window.Mzp.Menu = r
    }(window.Mzp), void 0 === Mzp) Mzp = {};
if (function() {
        "use strict";
        var n, r = {},
            i = {
                onNavOpen: null,
                onNavClose: null
            };
        r.onClick = function(e) {
            var t = e.target.parentNode.querySelector(".mzp-c-navigation-items");
            e.preventDefault(), e.target.classList.toggle("mzp-is-active"), t.classList.toggle("mzp-is-open");
            var n = !!t.classList.contains("mzp-is-open");
            t.setAttribute("aria-expanded", n), n ? "function" == typeof i.onNavOpen && i.onNavOpen(t) : "function" == typeof i.onNavClose && i.onNavClose(t)
        }, r.setAria = function() {
            for (var e = 0; e < n.length; e++) n[e].setAttribute("aria-expanded", !1)
        }, r.bindEvents = function() {
            if (0 < (n = document.querySelectorAll(".mzp-c-navigation-items")).length) {
                for (var e = document.querySelectorAll(".mzp-c-navigation-menu-button"), t = 0; t < e.length; t++) e[t].addEventListener("click", r.onClick, !1);
                r.setAria()
            }
        }, r.init = function(e) {
            if ("object" == typeof e)
                for (var t in e) e.hasOwnProperty(t) && (i[t] = e[t]);
            r.bindEvents()
        }, window.Mzp.Navigation = r
    }(), function() {
        if (void 0 !== Mzp && "undefined" != typeof Mzp.Menu && "undefined" != typeof Mzp.Navigation) {
            var i = "undefined" != typeof window.matchMedia;
            ! function e() {
                if ("undefined" == typeof Mozilla.Client) return !1;
                var t = document.querySelector(".mzp-c-navigation"),
                    n = document.querySelector(".mzp-c-navigation .c-navigation-fxa-cta");
                if (!Mozilla.Client.isFirefoxDesktop || !t || !n) return !1;
                if (n) {
                    var r = n.getAttribute("data-alt-href");
                    Mozilla.Client.getFxaDetails(function(e) {
                        e.setup && (t.classList.add("fxa-signed-in"), n.href = r)
                    })
                }
            }(), Mzp.Menu.init({
                onMenuOpen: function a(e) {
                    if (i && window.matchMedia("(min-width: 768px)").matches) {
                        var t = e.querySelector(".mzp-c-card-image");
                        if (t) {
                            var n = t.getAttribute("data-src");
                            if (n) {
                                var r = t.getAttribute("data-srcset");
                                r && (t.srcset = r), t.src = n, t.onload = o
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
        var i = {
            switchPath: function(e, t) {
                var n = e.pathname.slice(1).split("/"),
                    r = "/" + n[0] + "/";
                return !!/^(\/\w{2}-\w{2}\/|\/\w{2,3}\/)/.test(r) && "/" + t + "/" + n.slice(1).join("/") + e.search
            },
            doRedirect: function(e) {
                e && (window.location.href = e)
            },
            init: function(r) {
                for (var e = document.querySelectorAll(".mzp-js-language-switcher-select"), t = 0; t < e.length; t++) e[t].setAttribute("data-previous-language", e[t].value), e[t].addEventListener("change", function(e) {
                    var t = e.target.value,
                        n = e.target.getAttribute("data-previous-language");
                    "function" == typeof r && r(n, t), i.doRedirect(i.switchPath(window.location, t))
                }, !1)
            }
        };
        window.Mzp.LangSwitcher = i
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
            r = l.getElementById(e);
        n.setAttribute("aria-expanded", !0), r.setAttribute("aria-hidden", !1), r.classList.remove("is-closed"), "function" == typeof t.onDetailsOpen && t.onDetailsOpen(r)
    }, f.close = function(e, t) {
        var n = l.querySelector("[aria-controls=" + e + "]"),
            r = l.getElementById(e);
        n.setAttribute("aria-expanded", !1), r.setAttribute("aria-hidden", !0), r.classList.add("is-closed"), "function" == typeof t.onDetailsClose && t.onDetailsClose(r)
    }, f.toggle = function(e, t) {
        "true" === l.getElementById(e).getAttribute("aria-hidden") ? f.open(e, t) : f.close(e, t)
    }, f.handleControlActivation = function(e, t) {
        var n = e.target.getAttribute("aria-controls");
        f.toggle(n, t)
    }, f.initItem = function(e, t, n) {
        var r, i, o = e,
            a = l.createElement("button"),
            s = o.parentNode;
        if (0 === o.querySelectorAll("button").length) {
            if (1 === (i = c.Utils.nextUntil(o, t)).length) r = i[0];
            else {
                if (!(1 < i.length)) return;
                r = l.createElement("div"), i.forEach(function(e) {
                    r.appendChild(e)
                }), o.parentNode.insertBefore(r, o.nextSibling)
            }
            if (s.classList.add("is-details"), r.classList.add("mzp-js-details-wrapper"), !r.id) {
                var u = t.replace(/[^a-zA-Z]+/g, "");
                r.id = "expand-" + u + "-" + d, d += 1
            }
            r.setAttribute("aria-hidden", !0), r.classList.add("is-closed"), a.setAttribute("type", "button"), a.setAttribute("aria-controls", r.id), a.setAttribute("aria-expanded", !1), a.addEventListener("click", function(e) {
                f.handleControlActivation(e, n)
            }, !1), Array.prototype.slice.call(o.childNodes).forEach(function(e) {
                a.appendChild(e)
            }), o.appendChild(a), o.classList.add("is-summary")
        }
    }, f.destroyItem = function(e) {
        var t = e,
            n = t.parentNode,
            r = t.nextElementSibling,
            i = t.querySelector("button");
        0 !== t.querySelectorAll("button").length && (n.classList.remove("is-details"), r.removeAttribute("aria-hidden"), r.classList.remove("is-closed"), Array.prototype.slice.call(i.childNodes).forEach(function(e) {
            t.appendChild(e)
        }), t.removeChild(i), t.classList.remove("is-summary"))
    }, f.init = function(e, t) {
        if (f.isSupported()) {
            void 0 === t && (t = {});
            for (var n = l.querySelectorAll(e), r = 0; r < n.length; r++) f.initItem(n[r], e, t)
        }
    }, f.destroy = function(e, t) {
        for (var n = l.querySelectorAll(e, t), r = 0; r < n.length; r++) f.destroyItem(n[r], e, t)
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
        r = !1;

    function i() {
        e("html").addClass("loaded")
    }
    e(document).ready(function() {
        var e = Mozilla.Client,
            t = Mozilla.Utils;
        t.initMobileDownloadLinks(), e.isFirefoxDesktop && e.getFirefoxDetails(t.maybeSwitchToDistDownloadLinks), n && i(), r = !0
    }), e(window).on("load", function() {
        r && i(), n = !0
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
                    r = !1,
                    i = !1;
                0 < e.mobileDevices ? n = t.FxAMobileSync = !0 : 0 === e.mobileDevices ? t.FxAMobileSync = !1 : t.FxAMobileSync = "unknown", 1 < e.desktopDevices ? i = t.FxAMultiDesktopSync = !0 : 1 === e.desktopDevices ? r = !(t.FxAMultiDesktopSync = !1) : 0 === e.desktopDevices ? t.FxAMultiDesktopSync = !1 : t.FxAMultiDesktopSync = "unknown", i && n ? t.FxASegment = "Multi-Desktop and Mobile Sync" : r && n ? t.FxASegment = "Desktop and Mobile Sync" : i && (t.FxASegment = "Multi-Desktop Sync")
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
                            var r = n.replace(/^(?:https?\:\/\/)(?:[^\/])*/, ""),
                                i = r.match(/^(\/\w{2}\-\w{2}\/|\/\w{2,3}\/)/);
                            r = i ? r.replace(i[0], "/") : r, arguments[e].newClickHref = r
                        } else arguments[e].newClickHref = n;
                        o.defaultPush(arguments[e])
                    } else o.defaultPush(arguments[e])
            }
        }
    }(), $(function() {
        var n = Mozilla.Analytics,
            e = Mozilla.Client,
            r = window.dataLayer = window.dataLayer || [],
            i = !1,
            o = !1;

        function t() {
            i && o && function t() {
                var e = {
                    event: "core-datalayer-loaded",
                    pageHasDownload: n.pageHasDownload(),
                    pageHasVideo: n.pageHasVideo(),
                    pageVersion: n.getPageVersion(),
                    testPilotUser: "testpilotAddon" in navigator ? "true" : "false",
                    releaseWindowVersion: n.getLatestFxVersion()
                };
                r.push(e)
            }()
        }
        e.getFxaDetails(function(e) {
            r.push(n.formatFxaDetails(e)), o = !0, t()
        }), e.isFirefoxDesktop || e.isFirefoxAndroid ? e.getFirefoxDetails(function(e) {
            r.push(e), i = !0, t()
        }) : (i = !0, t()), n.updateDataLayerPush()
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
        var r = e[n].split("="),
            i = r[0],
            o = r[1];
        t[i] = isNaN(o) ? o : parseFloat(o)
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