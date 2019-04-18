/*! jQuery v1.12.2 | (c) jQuery Foundation | jquery.org/license */ ! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "1.12.2",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (!l.ownFirst)
                for (b in a) return k.call(a, b);
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (h) return h.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function() {
                return a.apply(b || this, c.concat(e.call(arguments)))
            }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
        },
        now: function() {
            return +new Date
        },
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
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
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = la(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                    return a === b
                }, h, !0), l = ra(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                } return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                } k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                } return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (n.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                if (f = d.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return A.find(a);
                    this.length = 1, this[0] = f
                }
                return this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    } return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function(b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = !0, c || j.disable(), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }

    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
    }
    n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
            else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
        else {
            d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
            var c = !1;
            try {
                c = null == a.frameElement && d.documentElement
            } catch (e) {}
            c && c.doScroll && ! function f() {
                if (!n.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (b) {
                        return a.setTimeout(f, 50)
                    }
                    J(), n.ready()
                }
            }()
        }
        return I.promise(b)
    }, n.ready.promise();
    var L;
    for (L in n(l)) break;
    l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() {
            var a, b, c, e;
            c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
        }),
        function() {
            var a = d.createElement("div");
            l.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                l.deleteExpando = !1
            }
            a = null
        }();
    var M = function(a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        },
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else c = void 0;
        }
        return c
    }

    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function R(a, b, d, e) {
        if (M(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: n.noop
            }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    }

    function S(a, b, c) {
        if (M(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return
                }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }
    n.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(a) {
                return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
            },
            data: function(a, b, c) {
                return R(a, b, c)
            },
            removeData: function(a, b) {
                return S(a, b)
            },
            _data: function(a, b, c) {
                return R(a, b, c, !0)
            },
            _removeData: function(a, b) {
                return S(a, b, !0)
            }
        }), n.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                        c = g.length;
                        while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                        n._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    n.data(this, a)
                }) : arguments.length > 1 ? this.each(function() {
                    n.data(this, a, b)
                }) : f ? P(f, a, n.data(f, a)) : void 0
            },
            removeData: function(a) {
                return this.each(function() {
                    n.removeData(this, a)
                })
            }
        }), n.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function() {
                        n.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return n._data(a, c) || n._data(a, c, {
                    empty: n.Callbacks("once memory").add(function() {
                        n._removeData(a, b + "queue"), n._removeData(a, c)
                    })
                })
            }
        }), n.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = n.queue(this, a, b);
                    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    n.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        }),
        function() {
            var a;
            l.shrinkWrapBlocks = function() {
                if (null != a) return a;
                a = !1;
                var b, c, e;
                return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
            }
        }();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        V = ["Top", "Right", "Bottom", "Left"],
        W = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function X(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var Y = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) Y(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Z = /^(?:checkbox|radio)$/i,
        $ = /<([\w:-]+)/,
        _ = /^$|\/(?:java|ecma)script/i,
        aa = /^\s+/,
        ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ca(a) {
        var b = ba.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }! function() {
        var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
    }();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

    function ea(a, b) {
        var c, d, e = 0,
            f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }
    var ga = /<|&#?\w+;/,
        ha = /<tbody/i;

    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked)
    }

    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
            if (g = a[r], g || 0 === g)
                if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                else if (ga.test(g)) {
            i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
            while (f--) i = i.lastChild;
            if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
                g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
            }
            n.merge(q, i.childNodes), i.textContent = "";
            while (i.firstChild) i.removeChild(i.firstChild);
            i = p.lastChild
        } else q.push(b.createTextNode(g));
        i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
        while (g = q[r++])
            if (d && n.inArray(g, d) > -1) e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
            f = 0;
            while (g = i[f++]) _.test(g.type || "") && c.push(g)
        }
        return i = null, p
    }! function() {
        var b, c, e = d.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
        e = null
    }();
    var ka = /^(?:input|select|textarea)$/i,
        la = /^key/,
        ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        na = /^(?:focusinfocus|focusoutblur)$/,
        oa = /^([^.]*)(?:\.(.+)|)/;

    function pa() {
        return !0
    }

    function qa() {
        return !1
    }

    function ra() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) sa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
                while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--)
                    if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
                if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h], m && (e[h] = null), n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (s) {}
                    n.event.triggered = void 0, m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    } return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
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
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button,
                    h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ra() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ra() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = d.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submit || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
                    a._submitBubble = !0
                }), n._data(c, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }), l.change || (n.event.special.change = {
        setup: function() {
            return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }), n.event.add(this, "click._change", function(a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
            })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }), n._data(b, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"), !ka.test(this.nodeName)
        }
    }), l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return sa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return sa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ta = / jQuery\d+="(?:null|\d+)"/g,
        ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
        va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        wa = /<script|<style|<link/i,
        xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ya = /^true\/(.*)/,
        za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Aa = ca(d),
        Ba = Aa.appendChild(d.createElement("div"));

    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }

    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
        });
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
            for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
            k = e = null
        }
        return a
    }

    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(va, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
                else Fa(a, f);
            return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                }
        }
    }), n.fn.extend({
        domManip: Ha,
        detach: function(a) {
            return Ia(this, a, !0)
        },
        remove: function(a) {
            return Ia(this, a)
        },
        text: function(a) {
            return Y(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(ea(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return Y(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ha(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ja, Ka = {
        HTML: "block",
        BODY: "block"
    };

    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function Ma(a) {
        var b = d,
            c = Ka[a];
        return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
    }
    var Na = /^margin/,
        Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Pa = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Qa = d.documentElement;
    ! function() {
        var b, c, e, f, g, h, i = d.createElement("div"),
            j = d.createElement("div");
        if (j.style) {
            j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
                reliableHiddenOffsets: function() {
                    return null == b && k(), f
                },
                boxSizingReliable: function() {
                    return null == b && k(), e
                },
                pixelMarginRight: function() {
                    return null == b && k(), c
                },
                pixelPosition: function() {
                    return null == b && k(), b
                },
                reliableMarginRight: function() {
                    return null == b && k(), g
                },
                reliableMarginLeft: function() {
                    return null == b && k(), h
                }
            });

            function k() {
                var k, l, m = d.documentElement;
                m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                    width: "4px"
                }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                    marginRight: "4px"
                }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
            }
        }
    }();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b)
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
    }) : Qa.currentStyle && (Ra = function(a) {
        return a.currentStyle
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Ua(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Va = /alpha\([^)]*\)/i,
        Wa = /opacity\s*=\s*([^)]*)/i,
        Xa = /^(none|table(?!-c[ea]).+)/,
        Ya = new RegExp("^(" + T + ")(.*)$", "i"),
        Za = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $a = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        _a = ["Webkit", "O", "Moz", "ms"],
        ab = d.createElement("div").style;

    function bb(a) {
        if (a in ab) return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1),
            c = _a.length;
        while (c--)
            if (a = _a[c] + b, a in ab) return a
    }

    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
        return g
    }

    function fb(b, c, e) {
        var f = !0,
            g = "width" === c ? b.offsetWidth : b.offsetHeight,
            h = Ra(b),
            i = l.boxSizing && "border-box" === n.css(b, "boxSizing", !1, h);
        if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) {
            if (g = Sa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Oa.test(g)) return g;
            f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0
        }
        return g + eb(b, c, e || (i ? "border" : "content"), f, h) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1" : c
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
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
                    return fb(a, b, d)
                }) : fb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
        return b ? Pa(a, {
            display: "inline-block"
        }, Sa, [a, "marginRight"]) : void 0
    }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Na.test(a) || (n.cssHooks[a + b].set = db)
    }), n.fn.extend({
        css: function(a, b) {
            return Y(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return cb(this, !0)
        },
        hide: function() {
            return cb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                W(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a, b, c, d, e)
    }
    n.Tween = gb, gb.prototype = {
        constructor: gb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = gb.propHooks[this.prop];
            return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = gb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
        }
    }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = gb.prototype.init, n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/,
        kb = /queueHooks$/;

    function lb() {
        return a.setTimeout(function() {
            hb = void 0
        }), hb = n.now()
    }

    function mb(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ob(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && W(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, m.always(function() {
            m.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], jb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                n(a).hide()
            }), m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function qb(a, b, c) {
        var d, e, f = 0,
            g = qb.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: hb || lb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++)
            if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(qb, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return X(c.elem, a, U.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
            },
            prefilters: [ob],
            prefilter: function(a, b) {
                b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(W).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = qb(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: mb("show"),
            slideUp: mb("hide"),
            slideToggle: mb("toggle"),
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
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = n.timers,
                c = 0;
            for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), hb = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            a.clearInterval(ib), ib = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a, b = d.createElement("input"),
                c = d.createElement("div"),
                e = d.createElement("select"),
                f = e.appendChild(d.createElement("option"));
            c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
        }();
    var rb = /\r/g,
        sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        } return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var tb, ub, vb = n.expr.attrHandle,
        wb = /^(?:checked|selected)$/i,
        xb = l.getSetAttribute,
        yb = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
        }
    }), ub = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = vb[b] || n.find.attr;
        yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
            var e, f;
            return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e
        } : vb[b] = function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), yb && xb || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c)
        }
    }), xb || (tb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, vb.id = vb.name = vb.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: tb.set
    }, n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            tb.set(a, "" === b ? !1 : b, c)
        }
    }, n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var zb = /^(?:input|select|textarea|button|object)$/i,
        Ab = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var Bb = /[\t\r\n\f]/g;

    function Cb(a) {
        return n.attr(a, "class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, Cb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, Cb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, Cb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Db = a.location,
        Eb = n.now(),
        Fb = /\?/,
        Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var Hb = /#.*$/,
        Ib = /([?&])_=[^&]*/,
        Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Lb = /^(?:GET|HEAD)$/,
        Mb = /^\/\//,
        Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ob = {},
        Pb = {},
        Qb = "*/".concat("*"),
        Rb = Db.href,
        Sb = Nb.exec(Rb.toLowerCase()) || [];

    function Tb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Ub(a, b, c, d) {
        var e = {},
            f = a === Pb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Vb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }

    function Wb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                } if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Xb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    } if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rb,
            type: "GET",
            isLocal: Kb.test(Sb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qb,
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
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
        },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
                m = l.context || l,
                o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                p = n.Deferred(),
                q = n.Callbacks("once memory"),
                r = l.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!k) {
                                k = {};
                                while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2]
                            }
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return j && j.abort(b), y(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
            i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[e](l[e]);
            if (j = Ub(Pb, l, c, w)) {
                if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1, j.send(s, y)
                } catch (x) {
                    if (!(2 > u)) throw x;
                    y(-1, x)
                }
            } else y(-1, "No Transport");

            function y(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });

    function Yb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }

    function Zb(a) {
        while (a && 1 === a.nodeType) {
            if ("none" === Yb(a) || "hidden" === a.type) return !0;
            a = a.parentNode
        }
        return !1
    }
    n.expr.filters.hidden = function(a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var $b = /%20/g,
        _b = /\[\]$/,
        ac = /\r?\n/g,
        bc = /^(?:submit|button|image|reset|file)$/i,
        cc = /^(?:input|select|textarea|keygen)/i;

    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) dc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) dc(c, a[c], b, e);
        return d.join("&").replace($b, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ac, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ac, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
    } : hc;
    var ec = 0,
        fc = {},
        gc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in fc) fc[a](void 0, !0)
    }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function(b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f, g = b.xhr(),
                        h = ++ec;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (f in b.xhrFields) g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null), c = function(a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState))
                            if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                            else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (k) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            } j && e(f, i, j, g.getAllResponseHeaders())
                    }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    });

    function hc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function(e, f) {
                    b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var jc = [],
        kc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = jc.pop() || n.expando + "_" + Eb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var lc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && lc) return lc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(g, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };

    function mc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Qa
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return Y(this, function(a, d, e) {
                var f = mc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
            return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Y(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
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
        }
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var nc = a.jQuery,
        oc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
    }, b || (a.jQuery = a.$ = n), n
});;
/**
 * Copyright (c) 2009 Sergiy Kovalchuk (serg472@gmail.com)
 * 
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *  
 * Following code is based on Element.mask() implementation from ExtJS framework (http://extjs.com/)
 *
 */
(function(a) {
    a.fn.mask = function(c, b) {
        a(this).each(function() {
            if (b !== undefined && b > 0) {
                var d = a(this);
                d.data("_mask_timeout", setTimeout(function() {
                    a.maskElement(d, c)
                }, b))
            } else {
                a.maskElement(a(this), c)
            }
        })
    };
    a.fn.unmask = function() {
        a(this).each(function() {
            a.unmaskElement(a(this))
        })
    };
    a.fn.isMasked = function() {
        return this.hasClass("load-masked")
    };
    a.maskElement = function(d, c) {
        if (d.data("_mask_timeout") !== undefined) {
            clearTimeout(d.data("_mask_timeout"));
            d.removeData("_mask_timeout")
        }
        if (d.isMasked()) {
            a.unmaskElement(d)
        }
        if (d.css("position") == "static") {
            d.addClass("load-masked-relative")
        }
        d.addClass("load-masked");
        var e = a('<div class="loadmask"></div>');
        if (navigator.userAgent.toLowerCase().indexOf("msie") > -1) {
            e.height(d.height() + parseInt(d.css("padding-top")) + parseInt(d.css("padding-bottom")));
            e.width(d.width() + parseInt(d.css("padding-left")) + parseInt(d.css("padding-right")))
        }
        if (navigator.userAgent.toLowerCase().indexOf("msie 6") > -1) {
            d.find("select").addClass("load-masked-hidden")
        }
        d.append(e);
        if (c !== undefined) {
            var b = a('<div class="loadmask-msg" style="display:none;"></div>');
            b.append("<div>" + c + "</div>");
            d.append(b);
            b.css("top", Math.round(d.height() / 2 - (b.height() - parseInt(b.css("padding-top")) - parseInt(b.css("padding-bottom"))) / 2) + "px");
            b.css("left", Math.round(d.width() / 2 - (b.width() - parseInt(b.css("padding-left")) - parseInt(b.css("padding-right"))) / 2) + "px");
            b.show()
        }
    };
    a.unmaskElement = function(b) {
        if (b.data("_mask_timeout") !== undefined) {
            clearTimeout(b.data("_mask_timeout"));
            b.removeData("_mask_timeout")
        }
        b.find(".loadmask-msg,.loadmask").remove();
        b.removeClass("load-masked");
        b.removeClass("load-masked-relative");
        b.find("select").removeClass("load-masked-hidden")
    }
})(jQuery);;
/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($, e, b) {
    var c = "hashchange",
        h = document,
        f, g = $.event.special,
        i = h.documentMode,
        d = "on" + c in e && (i === b || i > 7);

    function a(j) {
        j = j || location.href;
        return "#" + j.replace(/^[^#]*#?(.*)$/, "$1")
    }
    $.fn[c] = function(j) {
        return j ? this.bind(c, j) : this.trigger(c)
    };
    $.fn[c].delay = 50;
    g[c] = $.extend(g[c], {
        setup: function() {
            if (d) {
                return false
            }
            $(f.start)
        },
        teardown: function() {
            if (d) {
                return false
            }
            $(f.stop)
        }
    });
    f = (function() {
        var j = {},
            p, m = a(),
            k = function(q) {
                return q
            },
            l = k,
            o = k;
        j.start = function() {
            p || n()
        };
        j.stop = function() {
            p && clearTimeout(p);
            p = b
        };

        function n() {
            var r = a(),
                q = o(m);
            if (r !== m) {
                l(m = r, q);
                $(e).trigger(c)
            } else {
                if (q !== m) {
                    location.href = location.href.replace(/#.*/, "") + q
                }
            }
            p = setTimeout(n, $.fn[c].delay)
        }!$.support.boxModel && !d && (function() {
            var q, r;
            j.start = function() {
                if (!q) {
                    r = $.fn[c].src;
                    r = r && r + a();
                    q = $('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                        r || l(a());
                        n()
                    }).attr("src", r || "javascript:0").insertAfter("body")[0].contentWindow;
                    h.onpropertychange = function() {
                        try {
                            if (event.propertyName === "title") {
                                q.document.title = h.title
                            }
                        } catch (s) {}
                    }
                }
            };
            j.stop = k;
            o = function() {
                return a(q.location.href)
            };
            l = function(v, s) {
                var u = q.document,
                    t = $.fn[c].domain;
                if (v !== s) {
                    u.title = h.title;
                    u.open();
                    t && u.write('<script>document.domain="' + t + '"<\/script>');
                    u.close();
                    q.location.hash = v
                }
            }
        })();
        return j
    })()
})(jQuery, this);;
(function($) {
    $.facebox = function(data, klass) {
        $.facebox.loading(data.settings || [])
        if (data.ajax) fillFaceboxFromAjax(data.ajax, klass)
        else if (data.image) fillFaceboxFromImage(data.image, klass)
        else if (data.div) fillFaceboxFromHref(data.div, klass)
        else if ($.isFunction(data)) data.call($)
        else $.facebox.reveal(data, klass)
    }
    $.extend($.facebox, {
        settings: {
            opacity: 0.2,
            overlay: !0,
            loadingImage: '/common/img/loading_big.gif',
            closeImage: '/common/img/closelabel2.png',
            imageTypes: ['png', 'jpg', 'jpeg', 'gif'],
            faceboxHtml: '\
    <div id="facebox" style="display:none;"> \
      <div class="popup"> \
        <div class="content"> \
        </div> \
        <a href="#" class="close"></a> \
      </div> \
    </div>'
        },
        loading: function() {
            init()
            if ($('#facebox .loading').length == 1) return !0
            showOverlay()
            $('#facebox .content').empty().append('<div class="loading"><img src="' + $.facebox.settings.loadingImage + '"/></div>')
            $('#facebox').show().css({
                top: getPageScroll()[1] + (getPageHeight() / 10),
                left: $(window).width() / 2 - ($('#facebox .popup').outerWidth() / 2)
            })
            $(document).bind('keydown.facebox', function(e) {
                if (e.keyCode == 27) $.facebox.close()
                return !0
            })
            $(document).trigger('loading.facebox')
        },
        reveal: function(data, klass) {
            $(document).trigger('beforeReveal.facebox')
            if (klass) $('#facebox .content').addClass(klass)
            $('#facebox .content').empty().append(data)
            $('#facebox .popup').children().fadeIn('normal')
            $('#facebox').css('left', $(window).width() / 2 - ($('#facebox .popup').outerWidth() / 2))
            $(document).trigger('reveal.facebox').trigger('afterReveal.facebox')
        },
        close: function() {
            $(document).trigger('close.facebox')
            return !1
        }
    })
    $.fn.facebox = function(settings) {
        if ($(this).length == 0) return
        init(settings)

        function clickHandler() {
            $.facebox.loading(!0)
            var klass = this.rel.match(/facebox\[?\.(\w+)\]?/)
            if (klass) klass = klass[1]
            fillFaceboxFromHref(this.href, klass)
            return !1
        }
        return this.bind('click.facebox', clickHandler)
    }

    function init(settings) {
        if ($.facebox.settings.inited) return !0
        else $.facebox.settings.inited = !0
        $(document).trigger('init.facebox')
        makeCompatible()
        var imageTypes = $.facebox.settings.imageTypes.join('|')
        $.facebox.settings.imageTypesRegexp = new RegExp('\\.(' + imageTypes + ')(\\?.*)?$', 'i')
        if (settings) $.extend($.facebox.settings, settings)
        $('body').append($.facebox.settings.faceboxHtml)
        var preload = [new Image(), new Image()]
        preload[0].src = $.facebox.settings.closeImage
        preload[1].src = $.facebox.settings.loadingImage
        $('#facebox').find('.b:first, .bl').each(function() {
            preload.push(new Image())
            preload.slice(-1).src = $(this).css('background-image').replace(/url\((.+)\)/, '$1')
        })
        $('#facebox .close').click($.facebox.close).append('<img src="' + $.facebox.settings.closeImage + '" class="close_image" title="close">')
    }

    function getPageScroll() {
        var xScroll, yScroll;
        if (self.pageYOffset) {
            yScroll = self.pageYOffset;
            xScroll = self.pageXOffset
        } else if (document.documentElement && document.documentElement.scrollTop) {
            yScroll = document.documentElement.scrollTop;
            xScroll = document.documentElement.scrollLeft
        } else if (document.body) {
            yScroll = document.body.scrollTop;
            xScroll = document.body.scrollLeft
        }
        return new Array(xScroll, yScroll)
    }

    function getPageHeight() {
        var windowHeight
        if (self.innerHeight) {
            windowHeight = self.innerHeight
        } else if (document.documentElement && document.documentElement.clientHeight) {
            windowHeight = document.documentElement.clientHeight
        } else if (document.body) {
            windowHeight = document.body.clientHeight
        }
        return windowHeight
    }

    function makeCompatible() {
        var $s = $.facebox.settings
        $s.loadingImage = $s.loading_image || $s.loadingImage
        $s.closeImage = $s.close_image || $s.closeImage
        $s.imageTypes = $s.image_types || $s.imageTypes
        $s.faceboxHtml = $s.facebox_html || $s.faceboxHtml
    }

    function fillFaceboxFromHref(href, klass) {
        if (href.match(/#/)) {
            var url = window.location.href.split('#')[0]
            var target = href.replace(url, '')
            if (target == '#') return
            $.facebox.reveal($(target).html(), klass)
        } else if (href.match($.facebox.settings.imageTypesRegexp)) {
            fillFaceboxFromImage(href, klass)
        } else {
            fillFaceboxFromAjax(href, klass)
        }
    }

    function fillFaceboxFromImage(href, klass) {
        var image = new Image()
        image.onload = function() {
            $.facebox.reveal('<div class="image"><img src="' + image.src + '" /></div>', klass)
        }
        image.src = href
    }

    function fillFaceboxFromAjax(href, klass) {
        $.facebox.jqxhr = $.get(href, function(data) {
            $.facebox.reveal(data, klass)
        })
    }

    function skipOverlay() {
        return $.facebox.settings.overlay == !1 || $.facebox.settings.opacity === null
    }

    function showOverlay() {
        if (skipOverlay()) return
        if ($('#facebox_overlay').length == 0)
            $("body").append('<div id="facebox_overlay" class="facebox_hide"></div>')
        $('#facebox_overlay').hide().addClass("facebox_overlayBG").css('opacity', $.facebox.settings.opacity).click(function() {
            $(document).trigger('close.facebox')
        }).fadeIn(200)
        return !1
    }

    function hideOverlay() {
        if (skipOverlay()) return
        $('#facebox_overlay').fadeOut(200, function() {
            $("#facebox_overlay").removeClass("facebox_overlayBG")
            $("#facebox_overlay").addClass("facebox_hide")
            $("#facebox_overlay").remove()
        })
        return !1
    }
    $(document).bind('close.facebox', function() {
        if ($.facebox.jqxhr) {
            $.facebox.jqxhr.abort()
            $.facebox.jqxhr = null
        }
        $(document).unbind('keydown.facebox')
        $('#facebox').fadeOut(function() {
            $('#facebox .content').removeClass().addClass('content')
            $('#facebox .loading').remove()
            $(document).trigger('afterClose.facebox')
        })
        hideOverlay()
    })
})(jQuery);
var _self = (typeof window !== 'undefined') ? window : ((typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) ? self : {});
var Prism = (function() {
    var lang = /\blang(?:uage)?-(\w+)\b/i;
    var uniqueId = 0;
    var _ = _self.Prism = {
        manual: _self.Prism && _self.Prism.manual,
        util: {
            encode: function(tokens) {
                if (tokens instanceof Token) {
                    return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias)
                } else if (_.util.type(tokens) === 'Array') {
                    return tokens.map(_.util.encode)
                } else {
                    return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ')
                }
            },
            type: function(o) {
                return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1]
            },
            objId: function(obj) {
                if (!obj.__id) {
                    Object.defineProperty(obj, '__id', {
                        value: ++uniqueId
                    })
                }
                return obj.__id
            },
            clone: function(o) {
                var type = _.util.type(o);
                switch (type) {
                    case 'Object':
                        var clone = {};
                        for (var key in o) {
                            if (o.hasOwnProperty(key)) {
                                clone[key] = _.util.clone(o[key])
                            }
                        }
                        return clone;
                    case 'Array':
                        return o.map && o.map(function(v) {
                            return _.util.clone(v)
                        })
                }
                return o
            }
        },
        languages: {
            extend: function(id, redef) {
                var lang = _.util.clone(_.languages[id]);
                for (var key in redef) {
                    lang[key] = redef[key]
                }
                return lang
            },
            insertBefore: function(inside, before, insert, root) {
                root = root || _.languages;
                var grammar = root[inside];
                if (arguments.length == 2) {
                    insert = arguments[1];
                    for (var newToken in insert) {
                        if (insert.hasOwnProperty(newToken)) {
                            grammar[newToken] = insert[newToken]
                        }
                    }
                    return grammar
                }
                var ret = {};
                for (var token in grammar) {
                    if (grammar.hasOwnProperty(token)) {
                        if (token == before) {
                            for (var newToken in insert) {
                                if (insert.hasOwnProperty(newToken)) {
                                    ret[newToken] = insert[newToken]
                                }
                            }
                        }
                        ret[token] = grammar[token]
                    }
                }
                _.languages.DFS(_.languages, function(key, value) {
                    if (value === root[inside] && key != inside) {
                        this[key] = ret
                    }
                });
                return root[inside] = ret
            },
            DFS: function(o, callback, type, visited) {
                visited = visited || {};
                for (var i in o) {
                    if (o.hasOwnProperty(i)) {
                        callback.call(o, i, o[i], type || i);
                        if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
                            visited[_.util.objId(o[i])] = !0;
                            _.languages.DFS(o[i], callback, null, visited)
                        } else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
                            visited[_.util.objId(o[i])] = !0;
                            _.languages.DFS(o[i], callback, i, visited)
                        }
                    }
                }
            }
        },
        plugins: {},
        highlightAll: function(async, callback) {
            var env = {
                callback: callback,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            _.hooks.run("before-highlightall", env);
            var elements = env.elements || document.querySelectorAll(env.selector);
            for (var i = 0, element; element = elements[i++];) {
                _.highlightElement(element, async ===!0, env.callback)
            }
        },
        highlightElement: function(element, async, callback) {
            var language, grammar, parent = element;
            while (parent && !lang.test(parent.className)) {
                parent = parent.parentNode
            }
            if (parent) {
                language = (parent.className.match(lang) || [, ''])[1].toLowerCase();
                grammar = _.languages[language]
            }
            element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
            parent = element.parentNode;
            if (/pre/i.test(parent.nodeName)) {
                parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language
            }
            var code = element.textContent;
            var env = {
                element: element,
                language: language,
                grammar: grammar,
                code: code
            };
            _.hooks.run('before-sanity-check', env);
            if (!env.code || !env.grammar) {
                if (env.code) {
                    _.hooks.run('before-highlight', env);
                    env.element.textContent = env.code;
                    _.hooks.run('after-highlight', env)
                }
                _.hooks.run('complete', env);
                return
            }
            _.hooks.run('before-highlight', env);
            if (async &&_self.Worker) {
                var worker = new Worker(_.filename);
                worker.onmessage = function(evt) {
                    env.highlightedCode = evt.data;
                    _.hooks.run('before-insert', env);
                    env.element.innerHTML = env.highlightedCode;
                    callback && callback.call(env.element);
                    _.hooks.run('after-highlight', env);
                    _.hooks.run('complete', env)
                };
                worker.postMessage(JSON.stringify({
                    language: env.language,
                    code: env.code,
                    immediateClose: !0
                }))
            } else {
                env.highlightedCode = _.highlight(env.code, env.grammar, env.language);
                _.hooks.run('before-insert', env);
                env.element.innerHTML = env.highlightedCode;
                callback && callback.call(element);
                _.hooks.run('after-highlight', env);
                _.hooks.run('complete', env)
            }
        },
        highlight: function(text, grammar, language) {
            var tokens = _.tokenize(text, grammar);
            return Token.stringify(_.util.encode(tokens), language)
        },
        matchGrammar: function(text, strarr, grammar, index, startPos, oneshot, target) {
            var Token = _.Token;
            for (var token in grammar) {
                if (!grammar.hasOwnProperty(token) || !grammar[token]) {
                    continue
                }
                if (token == target) {
                    return
                }
                var patterns = grammar[token];
                patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];
                for (var j = 0; j < patterns.length; ++j) {
                    var pattern = patterns[j],
                        inside = pattern.inside,
                        lookbehind = !!pattern.lookbehind,
                        greedy = !!pattern.greedy,
                        lookbehindLength = 0,
                        alias = pattern.alias;
                    if (greedy && !pattern.pattern.global) {
                        var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
                        pattern.pattern = RegExp(pattern.pattern.source, flags + "g")
                    }
                    pattern = pattern.pattern || pattern;
                    for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {
                        var str = strarr[i];
                        if (strarr.length > text.length) {
                            return
                        }
                        if (str instanceof Token) {
                            continue
                        }
                        pattern.lastIndex = 0;
                        var match = pattern.exec(str),
                            delNum = 1;
                        if (!match && greedy && i != strarr.length - 1) {
                            pattern.lastIndex = pos;
                            match = pattern.exec(text);
                            if (!match) {
                                break
                            }
                            var from = match.index + (lookbehind ? match[1].length : 0),
                                to = match.index + match[0].length,
                                k = i,
                                p = pos;
                            for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
                                p += strarr[k].length;
                                if (from >= p) {
                                    ++i;
                                    pos = p
                                }
                            }
                            if (strarr[i] instanceof Token || strarr[k - 1].greedy) {
                                continue
                            }
                            delNum = k - i;
                            str = text.slice(pos, p);
                            match.index -= pos
                        }
                        if (!match) {
                            if (oneshot) {
                                break
                            }
                            continue
                        }
                        if (lookbehind) {
                            lookbehindLength = match[1].length
                        }
                        var from = match.index + lookbehindLength,
                            match = match[0].slice(lookbehindLength),
                            to = from + match.length,
                            before = str.slice(0, from),
                            after = str.slice(to);
                        var args = [i, delNum];
                        if (before) {
                            ++i;
                            pos += before.length;
                            args.push(before)
                        }
                        var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
                        args.push(wrapped);
                        if (after) {
                            args.push(after)
                        }
                        Array.prototype.splice.apply(strarr, args);
                        if (delNum != 1)
                            _.matchGrammar(text, strarr, grammar, i, pos, !0, token);
                        if (oneshot)
                            break
                    }
                }
            }
        },
        tokenize: function(text, grammar, language) {
            var strarr = [text];
            var rest = grammar.rest;
            if (rest) {
                for (var token in rest) {
                    grammar[token] = rest[token]
                }
                delete grammar.rest
            }
            _.matchGrammar(text, strarr, grammar, 0, 0, !1);
            return strarr
        },
        hooks: {
            all: {},
            add: function(name, callback) {
                var hooks = _.hooks.all;
                hooks[name] = hooks[name] || [];
                hooks[name].push(callback)
            },
            run: function(name, env) {
                var callbacks = _.hooks.all[name];
                if (!callbacks || !callbacks.length) {
                    return
                }
                for (var i = 0, callback; callback = callbacks[i++];) {
                    callback(env)
                }
            }
        }
    };
    var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
        this.type = type;
        this.content = content;
        this.alias = alias;
        this.length = (matchedStr || "").length | 0;
        this.greedy = !!greedy
    };
    Token.stringify = function(o, language, parent) {
        if (typeof o == 'string') {
            return o
        }
        if (_.util.type(o) === 'Array') {
            return o.map(function(element) {
                return Token.stringify(element, language, o)
            }).join('')
        }
        var env = {
            type: o.type,
            content: Token.stringify(o.content, language, parent),
            tag: 'span',
            classes: ['token', o.type],
            attributes: {},
            language: language,
            parent: parent
        };
        if (env.type == 'comment') {
            env.attributes.spellcheck = 'true'
        }
        if (o.alias) {
            var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
            Array.prototype.push.apply(env.classes, aliases)
        }
        _.hooks.run('wrap', env);
        var attributes = Object.keys(env.attributes).map(function(name) {
            return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"'
        }).join(' ');
        return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>'
    };
    if (!_self.document) {
        if (!_self.addEventListener) {
            return _self.Prism
        }
        _self.addEventListener('message', function(evt) {
            var message = JSON.parse(evt.data),
                lang = message.language,
                code = message.code,
                immediateClose = message.immediateClose;
            _self.postMessage(_.highlight(code, _.languages[lang], lang));
            if (immediateClose) {
                _self.close()
            }
        }, !1);
        return _self.Prism
    }
    var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
    if (script) {
        _.filename = script.src
    }
    return _self.Prism
})();
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Prism
}
if (typeof global !== 'undefined') {
    global.Prism = Prism
};
Prism.languages.markup = {
    'comment': /<!--[\s\S]*?-->/,
    'prolog': /<\?[\s\S]+?\?>/,
    'doctype': /<!DOCTYPE[\s\S]+?>/i,
    'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
    'tag': {
        pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\s\S])*\1|[^\s'">=]+))?)*\s*\/?>/i,
        inside: {
            'tag': {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: {
                    'punctuation': /^<\/?/,
                    'namespace': /^[^\s>\/:]+:/
                }
            },
            'attr-value': {
                pattern: /=(?:('|")[\s\S]*?(\1)|[^\s>]+)/i,
                inside: {
                    'punctuation': /[=>"']/
                }
            },
            'punctuation': /\/?>/,
            'attr-name': {
                pattern: /[^\s>\/]+/,
                inside: {
                    'namespace': /^[^\s>\/:]+:/
                }
            }
        }
    },
    'entity': /&#?[\da-z]{1,8};/i
};
Prism.hooks.add('wrap', function(env) {
    if (env.type === 'entity') {
        env.attributes.title = env.content.replace(/&amp;/, '&')
    }
});
Prism.languages.xml = Prism.languages.markup;
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.css = {
    'comment': /\/\*[\s\S]*?\*\//,
    'atrule': {
        pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
        inside: {
            'rule': /@[\w-]+/
        }
    },
    'url': /url\((?:(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
    'string': {
        pattern: /("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    'property': /(\b|\B)[\w-]+(?=\s*:)/i,
    'important': /\B!important\b/i,
    'function': /[-a-z0-9]+(?=\()/i,
    'punctuation': /[(){};:]/
};
Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css);
if (Prism.languages.markup) {
    Prism.languages.insertBefore('markup', 'tag', {
        'style': {
            pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
            lookbehind: !0,
            inside: Prism.languages.css,
            alias: 'language-css'
        }
    });
    Prism.languages.insertBefore('inside', 'attr-value', {
        'style-attr': {
            pattern: /\s*style=("|').*?\1/i,
            inside: {
                'attr-name': {
                    pattern: /^\s*style/i,
                    inside: Prism.languages.markup.tag.inside
                },
                'punctuation': /^\s*=\s*['"]|['"]\s*$/,
                'attr-value': {
                    pattern: /.+/i,
                    inside: Prism.languages.css
                }
            },
            alias: 'language-css'
        }
    }, Prism.languages.markup.tag)
};
Prism.languages.clike = {
    'comment': [{
        pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0
    }],
    'string': {
        pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    'class-name': {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /(\.|\\)/
        }
    },
    'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    'boolean': /\b(true|false)\b/,
    'function': /[a-z0-9_]+(?=\()/i,
    'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
    'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    'punctuation': /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend('clike', {
    'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
    'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
    'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});
Prism.languages.insertBefore('javascript', 'keyword', {
    'regex': {
        pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.})]))/,
        lookbehind: !0,
        greedy: !0
    }
});
Prism.languages.insertBefore('javascript', 'string', {
    'template-string': {
        pattern: /`(?:\\\\|\\?[^\\])*?`/,
        greedy: !0,
        inside: {
            'interpolation': {
                pattern: /\$\{[^}]+\}/,
                inside: {
                    'interpolation-punctuation': {
                        pattern: /^\$\{|\}$/,
                        alias: 'punctuation'
                    },
                    rest: Prism.languages.javascript
                }
            },
            'string': /[\s\S]+/
        }
    }
});
if (Prism.languages.markup) {
    Prism.languages.insertBefore('markup', 'tag', {
        'script': {
            pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
            lookbehind: !0,
            inside: Prism.languages.javascript,
            alias: 'language-javascript'
        }
    })
}
Prism.languages.js = Prism.languages.javascript;
(function(Prism) {
    var insideString = {
        variable: [{
            pattern: /\$?\(\([\s\S]+?\)\)/,
            inside: {
                variable: [{
                    pattern: /(^\$\(\([\s\S]+)\)\)/,
                    lookbehind: !0
                }, /^\$\(\(/, ],
                number: /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,
                operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                punctuation: /\(\(?|\)\)?|,|;/
            }
        }, {
            pattern: /\$\([^)]+\)|`[^`]+`/,
            inside: {
                variable: /^\$\(|^`|\)$|`$/
            }
        }, /\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i],
    };
    Prism.languages.bash = {
        'shebang': {
            pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,
            alias: 'important'
        },
        'comment': {
            pattern: /(^|[^"{\\])#.*/,
            lookbehind: !0
        },
        'string': [{
            pattern: /((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,
            lookbehind: !0,
            greedy: !0,
            inside: insideString
        }, {
            pattern: /(["'])(?:\\\\|\\?[^\\])*?\1/g,
            greedy: !0,
            inside: insideString
        }],
        'variable': insideString.variable,
        'function': {
            pattern: /(^|\s|;|\||&)(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,
            lookbehind: !0
        },
        'keyword': {
            pattern: /(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,
            lookbehind: !0
        },
        'boolean': {
            pattern: /(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/,
            lookbehind: !0
        },
        'operator': /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
        'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];]/
    };
    var inside = insideString.variable[1].inside;
    inside['function'] = Prism.languages.bash['function'];
    inside.keyword = Prism.languages.bash.keyword;
    inside.boolean = Prism.languages.bash.boolean;
    inside.operator = Prism.languages.bash.operator;
    inside.punctuation = Prism.languages.bash.punctuation
})(Prism);
Prism.languages.basic = {
    'string': /"(?:""|[!#$%&'()*,\/:;<=>?^_ +\-.A-Z\d])*"/i,
    'comment': {
        pattern: /(?:!|REM\b).+/i,
        inside: {
            'keyword': /^REM/i
        }
    },
    'number': /(?:\b|\B[.-])(?:\d+\.?\d*)(?:E[+-]?\d+)?/i,
    'keyword': /\b(?:AS|BEEP|BLOAD|BSAVE|CALL(?: ABSOLUTE)?|CASE|CHAIN|CHDIR|CLEAR|CLOSE|CLS|COM|COMMON|CONST|DATA|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DIM|DO|DOUBLE|ELSE|ELSEIF|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FOR|FUNCTION|GET|GOSUB|GOTO|IF|INPUT|INTEGER|IOCTL|KEY|KILL|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|MKDIR|NAME|NEXT|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPTION BASE|OUT|POKE|PUT|READ|REDIM|REM|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SHARED|SINGLE|SELECT CASE|SHELL|SLEEP|STATIC|STEP|STOP|STRING|SUB|SWAP|SYSTEM|THEN|TIMER|TO|TROFF|TRON|TYPE|UNLOCK|UNTIL|USING|VIEW PRINT|WAIT|WEND|WHILE|WRITE)(?:\$|\b)/i,
    'function': /\b(?:ABS|ACCESS|ACOS|ANGLE|AREA|ARITHMETIC|ARRAY|ASIN|ASK|AT|ATN|BASE|BEGIN|BREAK|CAUSE|CEIL|CHR|CLIP|COLLATE|COLOR|CON|COS|COSH|COT|CSC|DATE|DATUM|DEBUG|DECIMAL|DEF|DEG|DEGREES|DELETE|DET|DEVICE|DISPLAY|DOT|ELAPSED|EPS|ERASABLE|EXLINE|EXP|EXTERNAL|EXTYPE|FILETYPE|FIXED|FP|GO|GRAPH|HANDLER|IDN|IMAGE|IN|INT|INTERNAL|IP|IS|KEYED|LBOUND|LCASE|LEFT|LEN|LENGTH|LET|LINE|LINES|LOG|LOG10|LOG2|LTRIM|MARGIN|MAT|MAX|MAXNUM|MID|MIN|MISSING|MOD|NATIVE|NUL|NUMERIC|OF|OPTION|ORD|ORGANIZATION|OUTIN|OUTPUT|PI|POINT|POINTER|POINTS|POS|PRINT|PROGRAM|PROMPT|RAD|RADIANS|RANDOMIZE|RECORD|RECSIZE|RECTYPE|RELATIVE|REMAINDER|REPEAT|REST|RETRY|REWRITE|RIGHT|RND|ROUND|RTRIM|SAME|SEC|SELECT|SEQUENTIAL|SET|SETTER|SGN|SIN|SINH|SIZE|SKIP|SQR|STANDARD|STATUS|STR|STREAM|STYLE|TAB|TAN|TANH|TEMPLATE|TEXT|THERE|TIME|TIMEOUT|TRACE|TRANSFORM|TRUNCATE|UBOUND|UCASE|USE|VAL|VARIABLE|VIEWPORT|WHEN|WINDOW|WITH|ZER|ZONEWIDTH)(?:\$|\b)/i,
    'operator': /<[=>]?|>=?|[+\-*\/^=&]|\b(?:AND|EQV|IMP|NOT|OR|XOR)\b/i,
    'punctuation': /[,;:()]/
};
Prism.languages.c = Prism.languages.extend('clike', {
    'keyword': /\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
    'operator': /\-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*\/]/,
    'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)[ful]*\b/i
});
Prism.languages.insertBefore('c', 'string', {
    'macro': {
        pattern: /(^\s*)#\s*[a-z]+([^\r\n\\]|\\.|\\(?:\r\n?|\n))*/im,
        lookbehind: !0,
        alias: 'property',
        inside: {
            'string': {
                pattern: /(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/,
                lookbehind: !0
            },
            'directive': {
                pattern: /(#\s*)\b(define|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
                lookbehind: !0,
                alias: 'keyword'
            }
        }
    },
    'constant': /\b(__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|stdin|stdout|stderr)\b/
});
delete Prism.languages.c['class-name'];
delete Prism.languages.c['boolean'];
Prism.languages.csharp = Prism.languages.extend('clike', {
    'keyword': /\b(abstract|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/,
    'string': [{
        pattern: /@("|')(\1\1|\\\1|\\?(?!\1)[\s\S])*\1/,
        greedy: !0
    }, {
        pattern: /("|')(\\?.)*?\1/,
        greedy: !0
    }],
    'number': /\b-?(0x[\da-f]+|\d*\.?\d+f?)\b/i
});
Prism.languages.insertBefore('csharp', 'keyword', {
    'generic-method': {
        pattern: /[a-z0-9_]+\s*<[^>\r\n]+?>\s*(?=\()/i,
        alias: 'function',
        inside: {
            keyword: Prism.languages.csharp.keyword,
            punctuation: /[<>(),.:]/
        }
    },
    'preprocessor': {
        pattern: /(^\s*)#.*/m,
        lookbehind: !0,
        alias: 'property',
        inside: {
            'directive': {
                pattern: /(\s*#)\b(define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
                lookbehind: !0,
                alias: 'keyword'
            }
        }
    }
});
Prism.languages.cpp = Prism.languages.extend('c', {
    'keyword': /\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
    'boolean': /\b(true|false)\b/,
    'operator': /[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/
});
Prism.languages.insertBefore('cpp', 'keyword', {
    'class-name': {
        pattern: /(class\s+)[a-z0-9_]+/i,
        lookbehind: !0
    }
});
(function(Prism) {
    Prism.languages.ruby = Prism.languages.extend('clike', {
        'comment': [/#(?!\{[^\r\n]*?\}).*/, /^=begin(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?=end/m],
        'keyword': /\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/
    });
    var interpolation = {
        pattern: /#\{[^}]+\}/,
        inside: {
            'delimiter': {
                pattern: /^#\{|\}$/,
                alias: 'tag'
            },
            rest: Prism.util.clone(Prism.languages.ruby)
        }
    };
    Prism.languages.insertBefore('ruby', 'keyword', {
        'regex': [{
            pattern: /%r([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[gim]{0,3}/,
            greedy: !0,
            inside: {
                'interpolation': interpolation
            }
        }, {
            pattern: /%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,
            greedy: !0,
            inside: {
                'interpolation': interpolation
            }
        }, {
            pattern: /%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,
            greedy: !0,
            inside: {
                'interpolation': interpolation
            }
        }, {
            pattern: /%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,
            greedy: !0,
            inside: {
                'interpolation': interpolation
            }
        }, {
            pattern: /%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,
            greedy: !0,
            inside: {
                'interpolation': interpolation
            }
        }, {
            pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.})]))/,
            lookbehind: !0,
            greedy: !0
        }],
        'variable': /[@$]+[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/,
        'symbol': /:[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/
    });
    Prism.languages.insertBefore('ruby', 'number', {
        'builtin': /\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
        'constant': /\b[A-Z][a-zA-Z_0-9]*(?:[?!]|\b)/
    });
    Prism.languages.ruby.string = [{
        pattern: /%[qQiIwWxs]?([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,
        greedy: !0,
        inside: {
            'interpolation': interpolation
        }
    }, {
        pattern: /%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,
        greedy: !0,
        inside: {
            'interpolation': interpolation
        }
    }, {
        pattern: /%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,
        greedy: !0,
        inside: {
            'interpolation': interpolation
        }
    }, {
        pattern: /%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,
        greedy: !0,
        inside: {
            'interpolation': interpolation
        }
    }, {
        pattern: /%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,
        greedy: !0,
        inside: {
            'interpolation': interpolation
        }
    }, {
        pattern: /("|')(#\{[^}]+\}|\\(?:\r?\n|\r)|\\?.)*?\1/,
        greedy: !0,
        inside: {
            'interpolation': interpolation
        }
    }]
}(Prism));
Prism.languages.diff = {
    'coord': [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d+.*$/m],
    'deleted': /^[-<].*$/m,
    'inserted': /^[+>].*$/m,
    'diff': {
        'pattern': /^!(?!!).+$/m,
        'alias': 'important'
    }
};
Prism.languages.java = Prism.languages.extend('clike', {
    'keyword': /\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,
    'number': /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,
    'operator': {
        pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
        lookbehind: !0
    }
});
Prism.languages.insertBefore('java', 'function', {
    'annotation': {
        alias: 'punctuation',
        pattern: /(^|[^.])@\w+/,
        lookbehind: !0
    }
});
Prism.languages.json = {
    'property': /"(?:\\.|[^\\"])*"(?=\s*:)/ig,
    'string': /"(?!:)(?:\\.|[^\\"])*"(?!:)/g,
    'number': /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/g,
    'punctuation': /[{}[\]);,]/g,
    'operator': /:/g,
    'boolean': /\b(true|false)\b/gi,
    'null': /\bnull\b/gi
};
Prism.languages.jsonp = Prism.languages.json;
Prism.languages.perl = {
    'comment': [{
        pattern: /(^\s*)=\w+[\s\S]*?=cut.*/m,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\$])#.*/,
        lookbehind: !0
    }],
    'string': [{
        pattern: /\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,
        greedy: !0
    }, {
        pattern: /\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:[^\\]|\\[\s\S])*?\1/,
        greedy: !0
    }, {
        pattern: /\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/,
        greedy: !0
    }, {
        pattern: /\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/,
        greedy: !0
    }, {
        pattern: /\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/,
        greedy: !0
    }, {
        pattern: /\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/,
        greedy: !0
    }, {
        pattern: /("|`)(?:[^\\]|\\[\s\S])*?\1/,
        greedy: !0
    }, {
        pattern: /'(?:[^'\\\r\n]|\\.)*'/,
        greedy: !0
    }],
    'regex': [{
        pattern: /(^|[^$-]\b)(?:m|qr)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[msixpodualngc]*/,
        lookbehind: !0,
        greedy: !0
    }, {
        pattern: /\b(?:m|qr)\s+([a-zA-Z0-9])(?:[^\\]|\\.)*?\1[msixpodualngc]*/,
        greedy: !0
    }, {
        pattern: /\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/,
        greedy: !0
    }, {
        pattern: /\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/,
        greedy: !0
    }, {
        pattern: /\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/,
        greedy: !0
    }, {
        pattern: /\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/,
        greedy: !0
    }, {
        pattern: /(^|[^$-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\2(?:[^\\]|\\[\s\S])*?\2[msixpodualngcer]*/,
        lookbehind: !0,
        greedy: !0
    }, {
        pattern: /(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:[^\\]|\\[\s\S])*?\2(?:[^\\]|\\[\s\S])*?\2[msixpodualngcer]*/,
        lookbehind: !0,
        greedy: !0
    }, {
        pattern: /(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/,
        lookbehind: !0,
        greedy: !0
    }, {
        pattern: /(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/,
        lookbehind: !0,
        greedy: !0
    }, {
        pattern: /(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/,
        lookbehind: !0,
        greedy: !0
    }, {
        pattern: /(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/,
        lookbehind: !0,
        greedy: !0
    }, {
        pattern: /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/,
        greedy: !0
    }],
    'variable': [{
        pattern: /[&*$@%]\{\^[A-Z]+\}/
    }, {
        pattern: /[&*$@%]\^[A-Z_]/
    }, {
        pattern: /[&*$@%]#?(?=\{)/
    }, {
        pattern: /[&*$@%]#?((::)*'?(?!\d)[\w$]+)+(::)*/i
    }, {
        pattern: /[&*$@%]\d+/
    }, {
        pattern: /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/
    }],
    'filehandle': {
        pattern: /<(?![<=])\S*>|\b_\b/,
        alias: 'symbol'
    },
    'vstring': {
        pattern: /v\d+(\.\d+)*|\d+(\.\d+){2,}/,
        alias: 'string'
    },
    'function': {
        pattern: /sub [a-z0-9_]+/i,
        inside: {
            keyword: /sub/
        }
    },
    'keyword': /\b(any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
    'number': /\b-?(0x[\dA-Fa-f](_?[\dA-Fa-f])*|0b[01](_?[01])*|(\d(_?\d)*)?\.?\d(_?\d)*([Ee][+-]?\d+)?)\b/,
    'operator': /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/,
    'punctuation': /[{}[\];(),:]/
};
Prism.languages.php = Prism.languages.extend('clike', {
    'keyword': /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
    'constant': /\b[A-Z0-9_]{2,}\b/,
    'comment': {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: !0
    }
});
Prism.languages.insertBefore('php', 'class-name', {
    'shell-comment': {
        pattern: /(^|[^\\])#.*/,
        lookbehind: !0,
        alias: 'comment'
    }
});
Prism.languages.insertBefore('php', 'keyword', {
    'delimiter': {
        pattern: /\?>|<\?(?:php|=)?/i,
        alias: 'important'
    },
    'variable': /\$\w+\b/i,
    'package': {
        pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
        lookbehind: !0,
        inside: {
            punctuation: /\\/
        }
    }
});
Prism.languages.insertBefore('php', 'operator', {
    'property': {
        pattern: /(->)[\w]+/,
        lookbehind: !0
    }
});
if (Prism.languages.markup) {
    Prism.hooks.add('before-highlight', function(env) {
        if (env.language !== 'php' || !/(?:<\?php|<\?)/ig.test(env.code)) {
            return
        }
        env.tokenStack = [];
        env.backupCode = env.code;
        env.code = env.code.replace(/(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/ig, function(match) {
            var i = env.tokenStack.length;
            while (env.backupCode.indexOf('___PHP' + i + '___') !== -1)
                ++i;
            env.tokenStack[i] = match;
            return '___PHP' + i + '___'
        });
        env.grammar = Prism.languages.markup
    });
    Prism.hooks.add('before-insert', function(env) {
        if (env.language === 'php' && env.backupCode) {
            env.code = env.backupCode;
            delete env.backupCode
        }
    });
    Prism.hooks.add('after-highlight', function(env) {
        if (env.language !== 'php' || !env.tokenStack) {
            return
        }
        env.grammar = Prism.languages.php;
        for (var i = 0, keys = Object.keys(env.tokenStack); i < keys.length; ++i) {
            var k = keys[i];
            var t = env.tokenStack[k];
            env.highlightedCode = env.highlightedCode.replace('___PHP' + k + '___', "<span class=\"token php language-php\">" + Prism.highlight(t, env.grammar, 'php').replace(/\$/g, '$$$$') + "</span>")
        }
        env.element.innerHTML = env.highlightedCode
    })
};
Prism.languages.python = {
    'triple-quoted-string': {
        pattern: /"""[\s\S]+?"""|'''[\s\S]+?'''/,
        alias: 'string'
    },
    'comment': {
        pattern: /(^|[^\\])#.*/,
        lookbehind: !0
    },
    'string': {
        pattern: /("|')(?:\\\\|\\?[^\\\r\n])*?\1/,
        greedy: !0
    },
    'function': [{
        pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,
        lookbehind: !0
    }, {
        pattern: /[a-z0-9_]+(?=\()/i,
    }],
    'class-name': {
        pattern: /(\bclass\s+)[a-z0-9_]+/i,
        lookbehind: !0
    },
    'keyword': /\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,
    'boolean': /\b(?:True|False)\b/,
    'number': /\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
    'operator': /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
    'punctuation': /[{}[\];(),.:]/
};
Prism.languages.vbnet = Prism.languages.extend("basic", {
    'keyword': /(?:\b(?:ADDHANDLER|ADDRESSOF|ALIAS|AND|ANDALSO|AS|BEEP|BLOAD|BOOLEAN|BSAVE|BYREF|BYTE|BYVAL|CALL(?: ABSOLUTE)?|CASE|CATCH|CBOOL|CBYTE|CCHAR|CDATE|CDEC|CDBL|CHAIN|CHAR|CHDIR|CINT|CLASS|CLEAR|CLNG|CLOSE|CLS|COBJ|COM|COMMON|CONST|CONTINUE|CSBYTE|CSHORT|CSNG|CSTR|CTYPE|CUINT|CULNG|CUSHORT|DATA|DATE|DECIMAL|DECLARE|DEFAULT|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DELEGATE|DIM|DIRECTCAST|DO|DOUBLE|ELSE|ELSEIF|END|ENUM|ENVIRON|ERASE|ERROR|EVENT|EXIT|FALSE|FIELD|FILES|FINALLY|FOR(?: EACH)?|FRIEND|FUNCTION|GET|GETTYPE|GETXMLNAMESPACE|GLOBAL|GOSUB|GOTO|HANDLES|IF|IMPLEMENTS|IMPORTS|IN|INHERITS|INPUT|INTEGER|INTERFACE|IOCTL|IS|ISNOT|KEY|KILL|LINE INPUT|LET|LIB|LIKE|LOCATE|LOCK|LONG|LOOP|LSET|ME|MKDIR|MOD|MODULE|MUSTINHERIT|MUSTOVERRIDE|MYBASE|MYCLASS|NAME|NAMESPACE|NARROWING|NEW|NEXT|NOT|NOTHING|NOTINHERITABLE|NOTOVERRIDABLE|OBJECT|OF|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPERATOR|OPEN|OPTION(?: BASE)?|OPTIONAL|OR|ORELSE|OUT|OVERLOADS|OVERRIDABLE|OVERRIDES|PARAMARRAY|PARTIAL|POKE|PRIVATE|PROPERTY|PROTECTED|PUBLIC|PUT|RAISEEVENT|READ|READONLY|REDIM|REM|REMOVEHANDLER|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SBYTE|SELECT(?: CASE)?|SET|SHADOWS|SHARED|SHORT|SINGLE|SHELL|SLEEP|STATIC|STEP|STOP|STRING|STRUCTURE|SUB|SYNCLOCK|SWAP|SYSTEM|THEN|THROW|TIMER|TO|TROFF|TRON|TRUE|TRY|TRYCAST|TYPE|TYPEOF|UINTEGER|ULONG|UNLOCK|UNTIL|USHORT|USING|VIEW PRINT|WAIT|WEND|WHEN|WHILE|WIDENING|WITH|WITHEVENTS|WRITE|WRITEONLY|XOR)|\B(?:#CONST|#ELSE|#ELSEIF|#END|#IF))(?:\$|\b)/i,
    'comment': [{
        pattern: /(?:!|REM\b).+/i,
        inside: {
            'keyword': /^REM/i
        }
    }, {
        pattern: /(^|[^\\:])'.*/,
        lookbehind: !0
    }]
});
Prism.languages.simple = {
    'comment': /#.*$/m,
    'operator': /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
    'punctuation': /[{}[\];(),.]/
};
Prism.languages.ini = {
    'comment': /(^[ \t]*[;#].*$|#.*$)/m,
    'selector': /^[ \t]*\[.*?\]/m,
    'constant': [/^[ \t]*[^\s=]+?(?=[ \t]*=)/m, /^[a-z0-9\-_]+$/im],
    'attr-value': {
        pattern: /=.*/,
        inside: {
            'punctuation': /^[=]/
        }
    }
};
Prism.languages.sql = {
    'output': [{
        pattern: /^([\t \xA0]*(\+\-\-[\+\-]+|\|[^\n]*?\|)[\t \xA0]*|(\d+ (row|document)(s)? in set|Query OK).*?\d+\.\d+ sec\)|Empty set \(\d+\.\d+ sec\)|(Records|Rows matched): \d+.*?Warnings: \d+)$/m,
        inside: {
            'punctuation': /[|\+\-]/
        }
    }, {
        pattern: /(\*{20}|ERROR \d+( \([A-Z0-9]+\))?)[\s\S]*?(?=\n[\t ]*[a-zA-Z:\\@~\$'-]+>|$)/,
        inside: {
            'punctuation': /[\*:]/
        }
    }],
    'prompt': /^([\t \xA0]*(mysql(M'|S'|C'|M|S|C)?>|mysql\-(js|py|sql)>|shell>|\->))/m,
    'inlinejson': {
        pattern: /^(\[|[\t ]*{)[\s]*[{\[]?[\s]*"[\s\S]+[\]}]$/m,
        inside: {
            'property': /"(?:\\.|[^\\"])*"(?=\s*:)/ig,
            'string': /"(?!:)(?:\\.|[^\\"])*"(?!:)/g,
            'number': /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/g,
            'punctuation': /[{}[\]);,]/g,
            'operator': /:/g,
            'boolean': /\b(true|false)\b/gi,
            'null': /\bnull\b/gi
        }
    },
    'comment': {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
        lookbehind: !0
    },
    'string': {
        pattern: /(^|[^\\])("|')(?:\\?[\s\S])*?\2/,
        greedy: !0,
        lookbehind: !0
    },
    'variable': /@[@]?[\w.$]+/,
    'function': /\b(?:ABS|ACOS|ADDDATE|ADDTIME|AES_(?:DECRYPT|ENCRYPT)|ANY_VALUE|ASCII|ASIN|ASYMMETRIC_(?:DECRYPT|DERIVE|ENCRYPT|SIGN|VERIFY)|ATAN2?|AVG|Area|As(?:Binary|WKB|Text|WKT)|BENCHMARK|BIN(?:_TO_UUID)?|BIT_(?:AND|COUNT|LENGTH|OR|XOR)|Buffer|CAN_ACCESS_(?:COLUMN|DATABASE|TABLE|VIEW)|CAST|CEIL|CEILING|CHAR(?:ACTER_LENGTH|SET|_LENGTH)|COALESCE|COERCIBILITY|COLLATION|COMPRESS|CONCAT(?:_WS)?|CONNECTION_ID|CONV(?:ERT|ERT_TZ)?|COS|COT|COUNT|CRC32|CREATE_(?:ASYMMETRIC_PRIV_KEY|ASYMMETRIC_PUB_KEY|DH_PARAMETERS|DIGEST)|CUME_DIST|CURDATE|CURRENT_(?:DATE|ROLE|TIME|TIMESTAMP|USER)|CURTIME|Centroid|Contains|ConvexHull|Crosses|DATABASE|DATE(?:DIFF|_ADD|_FORMAT|_SUB)?|DAY(?:NAME|OFMONTH|OFWEEK|OFYEAR)?|DECODE|DEFAULT|DEGREES|DENSE_RANK|DES_(?:DECRYPT|ENCRYPT)|Dimension|Disjoint|Distance|DISTINCT|ELT|ENCODE|ENCRYPT|EXP|EXPORT_SET|EXTRACT|EndPoint|Envelope|Equals|ExteriorRing|ExtractValue|FIELD|FIND_IN_SET|FIRST_VALUE|FLOOR|FORMAT|FOUND_ROWS|FROM_(?:BASE64|DAYS|UNIXTIME)|GEOMCOLLECTION|GEOMETRYCOLLECTION|GET_DD_(?:COLUMN_PRIVILEGES|CREATE_OPTIONS|INDEX_SUB_PART_LENGTH)|GET_(?:FORMAT|LOCK)|GLength|GREATEST|GROUP_CONCAT|GTID_(?:SUBSET|SUBTRACT)|GeomCollFrom(?:Text|WKB)|GeomFrom(?:Text|WKB)|GeometryCollection(?:FromText|FromWKB)?|Geometry(?:N|Type|FromText|FromWKB)|GROUPING|HEX|HOUR|ICU_VERSION|IF(?:NULL)?|INET(?:6_ATON|6_NTOA|_ATON|_NTOA)|INSERT|INSTR|INTERNAL(?:_AUTO_INCREMENT|_AVG_ROW_LENGTH|_CHECK_TIME|_CHECKSUM|_DATA_FREE|_DATA_LENGTH|_DD_CHAR_LENGTH|_GET_COMMENT_OR_ERROR|_GET_VIEW_WARNING_OR_ERROR|_INDEX_COLUMN_CARDINALITY|_INDEX_LENGTH|_KEYS_DISABLED|_MAX_DATA_LENGTH|_TABLE_ROWS|_UPDATE_TIME)?|ISNULL|IS_(?:FREE_LOCK|IPV4|IPV4_COMPAT|IPV4_MAPPED|IPV6|USED_LOCK|UUID)|InteriorRingN|Intersects|Is(?:Closed|Empty|Simple)|JSON_(?:ARRAYAGG|OBJECTAGG|PRETTY|STORAGE_FREE|STORAGE_SIZE|APPEND|ARRAY|ARRAY_APPEND|ARRAY_INSERT|CONTAINS|CONTAINS_PATH|DEPTH|EXTRACT|INSERT|KEYS|LENGTH|MERGE|MERGE_PATCH|MERGE_PRESERVE|OBJECT|QUOTE|REMOVE|REPLACE|SEARCH|SET|TYPE|UNQUOTE|VALID)|LAG|LAST_(?:DAY|INSERT_ID|VALUE)|LCASE|LEAD|LEAST|LEFT|LENGTH|LN|LOAD_FILE|LOCALTIME(?:STAMP)?|LOCATE|LOG(?:10|2)?|LOWER|LPAD|LTRIM|LineFrom(?:Text|WKB)|LineString(?:FromText|FromWKB)?|MAKE(?:DATE|TIME|_SET)|MASTER_POS_WAIT|MAX|MBR(?:Contains|CoveredBy|Covers|Disjoint|Equal|Equals|Intersects|Overlaps|Touches|Within)|MD5|MICROSECOND|MID|MIN|MINUTE|MLineFrom(?:Text|WKB)|MultiLineStringFrom(?:Text|WKB)|MOD|MONTH(?:NAME)?|MPointFrom(?:Text|WKB)|MPolyFrom(?:Text|WKB)|MultiLineString|MultiPoint(?:FromText|FromWKB)?|MultiPolygon(?:FromText|FromWKB)?|NAME_CONST|NOW|NTH_VALUE|NTILE|NULLIF|Num(?:Geometries|InteriorRings|Points)|OCT|OCTET_LENGTH|OLD_PASSWORD|ORD|Overlaps|PASSWORD|PERCENT_RANK|PERIOD_(?:ADD|DIFF)|PI|POSITION|POW|POWER|PROCEDURE ANALYSE|Point(?:FromText|FromWKB)?|PointN|PolyFrom(?:Text|WKB)|Polygon(?:FromText|FromWKB)?|QUARTER|QUOTE|RADIANS|RAND|RANDOM_BYTES|RANK|REGEXP_(?:INSTR|LIKE|REPLACE|SUBSTR)|RELEASE_(?:ALL_LOCKS|LOCK)|REPEAT|REPLACE|REVERSE|RIGHT|ROUND|ROW_(?:COUNT|NUMBER)|ROLES_GRAPHML|RPAD|RTRIM|SCHEMA|SECOND|SEC_TO_TIME|SESSION_USER|SHA(?:1|2)?|SIGN|SIN|SLEEP|SOUNDEX|SPACE|SQRT|SRID|STATEMENT_DIGEST(?:_TEXT)?|STD|STDDEV(?:_POP|_SAMP)?|STRCMP|STR_TO_DATE|ST_(Area|AsBinary|AsWKB|AsGeoJSON|AsText|AsWKT|Buffer|Buffer_Strategy|Centroid|Contains|ConvexHull|Crosses|Difference|Dimension|Disjoint|Distance|Distance_Sphere|EndPoint|Envelope|Equals|ExteriorRing|GeoHash|GeomCollFromText|GeometryCollectionFromText|GeomCollFromTxt|GeomCollFromWKB|GeometryCollectionFromWKB|GeomFromGeoJSON|GeomFromText|GeometryFromText|GeomFromWKB|GeometryFromWKB|GeometryN|GeometryType|InteriorRingN|Intersection|Intersects|IsClosed|IsEmpty|IsSimple|IsValid|LatFromGeoHash|Latitude|Length|LineFromText|LineStringFromText|LineFromWKB|LineStringFromWKB|LongFromGeoHash|Longitude|MLineFromText|MultiLineStringFromText|MLineFromWKB|MultiLineStringFromWKB|MPointFromText|MultiPointFromText|MPointFromWKB|MultiPointFromWKB|MPolyFromText|MultiPolygonFromText|MPolyFromWKB|MultiPolygonFromWKB|MakeEnvelope|NumGeometries|NumInteriorRing|NumInteriorRings|NumPoints|Overlaps|PointFromGeoHash|PointFromText|PointFromWKB|PointN|PolyFromText|PolygonFromText|PolyFromWKB|PolygonFromWKB|SRID|Simplify|StartPoint|SwapXY|SymDifference|Touches|Union|Validate|Within|X|Y)|SUB(?:DATE|STR|STRING|STRING_INDEX|TIME)|SUM|SYSDATE|SYSTEM_USER|StartPoint|TAN|TIME(?:DIFF|STAMP|STAMPADD|STAMPDIFF|_FORMAT|_TO_SEC)?|TO_(?:BASE64|DAYS|SECONDS)|TRIM|TRUNCATE|Touches|UCASE|UNCOMPRESS(?:ED_LENGTH)?|UNHEX|UNIX_TIMESTAMP|UPPER|USER|UTC_(?:DATE|TIME|TIMESTAMP)|UUID(?:_SHORT|_TO_BIN)?|UpdateXML|VALIDATE_PASSWORD_STRENGTH|VAR(?:IANCE|_POP|_SAMP)|VERSION|WAIT_FOR_EXECUTED_GTID_SET|WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS|WEEK(?:DAY|OFYEAR)?|WEIGHT_STRING|Within|X|Y|YEAR(?:WEEK)?)(?=\s*\()/i,
    'datatype': /\b(?:BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|CHAR|DATE(?:TIME)?|DEC(?:IMAL)?|DOUBLE(?: PRECISION)?|ENUM|FLOAT|INT(?:EGER)?|JSON|LONG(?:BLOB|TEXT)|MEDIUM(?:BLOB|TEXT|INT)|NCHAR|NUMERIC|NVARCHAR|REAL|SET(?=\s*\()|SMALLINT|TEXT|TIME(?:STAMP)?|TINY(?:BLOB|TEXT|INT)|VAR(?:BINARY|CHAR)|VARCHARACTER|YEAR)\b/i,
    'keyword': /\b(?:ACCESSIBLE|ACCOUNT|ACTION|ADD|ADMIN|AFTER|AGAINST|AGGREGATE|ALGORITHM|ALL|ALTER|ALWAYS|ANALY(?:SE|ZE)|ANY|AS|ASC|ASENSITIVE|AT|AUTOEXTEND_SIZE|AUTO_INCREMENT|AVG_ROW_LENGTH|BACKUP|BEFORE|BEGIN|BINLOG|BLOCK|BOTH|BTREE|BUCKETS|BY|BYTE|CACHE|CALL|CASCADE|CASCADED|CATALOG_NAME|CHAIN|CHANGE(?:D)?|CHANNEL|CHAR(?:ACTER|SET)|CHECK(?:SUM)?|CIPHER|CLASS_ORIGIN|CLIENT|CLONE|CLOSE|CODE|COLLATE|COALESCE|COLLATION|COLUMN(?:S|_FORMAT|_NAME)?|COMMENT|COMMIT(?:TED)?|COMPACT|COMPLETION|COMPONENT|COMPRESS(?:ED|ION)?|CONCURRENT|CONDITION|CONNECTION|CONSISTENT|CONSTRAINT(?:_CATALOG|_NAME|_SCHEMA)?|CONTAINS|CONTEXT|CONTINUE|CPU|CREATE|CROSS|CUBE|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR(?:_NAME)?|DATA(?:BASE|BASES|FILE)?|DAY_(?:HOUR|MICROSECOND|MINUTE|SECOND)|DEALLOCATE|DECLARE|DEFAULT(?:_AUTH)?|DEFINER|DEFINITION|DELAYED|DELAY_KEY_WRITE|DELETE|DELIMITER|DESC|DESCRIBE|DESCRIPTION|DES_KEY_FILE|DETERMINISTIC|DIAGNOSTICS|DIRECTORY|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DO|DROP|DUAL|DUMPFILE|DUPLICATE|DYNAMIC|EACH|ELSE(?:IF)?|EMPTY|ENABLE|ENCLOSED|ENCRYPTION|END(?:S)?|ENGINE(?:S)?|ERROR(?:S)?|ESCAPE(?:D)?|EVENT(?:S)?|EVERY|EXCEPT|EXCHANGE|EXCLUDE|EXECUTE|EXISTS|EXIT|EXPANSION|EXPIRE|EXPLAIN|EXPORT|EXTENDED|EXTENT_SIZE|FAST|FAULTS|FETCH|FIELDS|FILE(?:_BLOCK_SIZE)?|FILTER|FIRST|FIXED|FLOAT(?:4|8)|FLUSH|FOLLOW(?:S|ING)|FOR|FORCE|FOREIGN|FORMAT|FOUND|FROM|FULL(?:TEXT)?|FUNCTION|GENERAL|GENERATED|GEOMETRY|GET|GET_MASTER_PUBLIC_KEY|GLOBAL|GRANT(?:S)?|GROUP(?:ING|_REPLICATION|S)?|HANDLER|HASH|HAVING|HELP|HIGH_PRIORITY|HISTO(?:RY|GRAM)|HOST(?:S)?|HOUR(?:_MICROSECOND|_MINUTE|_SECOND)?|IDENTIFIED|IF|IGNORE(?:_SERVER_IDS)?|IMPORT|IN|INDEX(?:ES)?|INFILE|INITIAL_SIZE|INNER|INOUT|INSENSITIVE|INSERT(?:_METHOD)?|INSTALL|INSTANCE|INT(?:1|2|3|4|8|ERVAL)|INTO|INVISIBLE|INVOKER|IO(?:_AFTER_GTIDS|_BEFORE_GTIDS|_THREAD)?|IPC|ISOLATION|ISSUER|ITERATE|JSON_TABLE|JOIN|KEY(?:S|_BLOCK_SIZE)?|KILL|LANGUAGE|LAST|LEADING|LEAVE|LEAVES|LEFT|LESS|LEVEL|LIMIT|LINE(?:AR|S|STRING)|LIST|LOAD|LOCAL(?:TIME|TIMESTAMP)?|LOCK(?:S|ED)?|LOGFILE|LOGS|LONG|LOOP|LOW_PRIORITY|MASTER(?:_AUTO_POSITION|_BIND|_CONNECT_RETRY|_DELAY|_HEARTBEAT_PERIOD|_HOST|_LOG_FILE|_LOG_POS|_PASSWORD|_PORT|_PUBLIC_KEY_PATH|_RETRY_COUNT|_SERVER_ID|_SSL|_SSL_CA|_SSL_CAPATH|_SSL_CERT|_SSL_CIPHER|_SSL_CRL|_SSL_CRLPATH|_SSL_KEY|_SSL_VERIFY_SERVER_CERT|_TLS_VERSION|_USER)?|MAX(?:VALUE|_CONNECTIONS_PER_HOUR|_QUERIES_PER_HOUR|_ROWS|_SIZE|_STATEMENT_TIME|_UPDATES_PER_HOUR|_USER_CONNECTIONS)|MEDIUM|MEMORY|MERGE|MESSAGE_TEXT|MICROSECOND|MIDDLEINT|MIGRATE|MINUTE(?:_MICROSECOND|_SECOND)?|MIN_ROWS|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|MUTEX|MYSQL_ERRNO|NAME|NAMES|NATIONAL|NATURAL|NDB|NDBCLUSTER|NESTED|NEVER|NEW|NEXT|NO(?:WAIT)?|NODEGROUP|NONBLOCKING|NONE|NO_(?:WAIT|WRITE_TO_BINLOG)|NUMBER|OF(?:FSET)?|NULLS|OLD_PASSWORD|ON|ONE|ONLY|OPEN|OPTIMIZE(?:R_COSTS)?|OPTION(?:ALLY|S)?|ORDER|ORDINALITY|ORGANIZATION|OTHERS|OUT|OUTER|OUTFILE|OVER|OWNER|PACK_KEYS|PAGE|PARSER|PARSE_GCOL_EXPR|PARTIAL|PARTITION(?:ING|S)?|PASSWORD|PATH|PERSIST(?:_ONLY)?|PHASE|PLUGIN(?:S|_DIR)?|POINT|POLYGON|PORT|PRECEDES|PRECEDING|PRECISION|PREPARE|PRESERVE|PREV|PRIMARY|PRIVILEGES|PROCEDURE|PROCESS(?:LIST)?|PROFILE(?:S)?|PROXY|PURGE|QUARTER|QUERY|QUICK|RANGE|READ(?:S|_ONLY|_WRITE)?|REBUILD|RECOVER|RECURSIVE|REDO(?:FILE|_BUFFER_SIZE)|REDUNDANT|REFERENCE(?:S)?|RELAY(?:LOG|_LOG_FILE|_LOG_POS|_THREAD)?|RELEASE|RELOAD|REMOTE|REMOVE|RENAME|REORGANIZE|REPAIR|REPEAT(?:ABLE)?|REPLACE|REPLICATE_(?:DO_DB|DO_TABLE|IGNORE_DB|IGNORE_TABLE|REWRITE_DB|WILD_DO_TABLE|WILD_IGNORE_TABLE)|REPLICATION|REQUIRE|RESET|RESIGNAL|RESOURCE|RESPECT|RESTART|RESTORE|RESTRICT|RESUME|RETURN(?:ED_SQLSTATE|S)?|REUSE|REVERSE|REVOKE|RIGHT|ROLE|ROLL(?:BACK|UP)|ROTATE|ROUTINE|ROW(?:S|_COUNT|_FORMAT)?|RTREE|SAVEPOINT|SCHEDULE|SCHEMA(?:S|_NAME)?|SECOND(?:_MICROSECOND)?|SECURITY|SELECT|SENSITIVE|SEPARATOR|SERIAL(?:IZABLE)?|SERVER|SESSION|SET|SHARE|SHOW|SHUTDOWN|SIGNAL|SIGNED|SIMPLE|SKIP|SLAVE|SLOW|SNAPSHOT|SOCKET|SOME|SONAME|SOUNDS|SOURCE|SPATIAL|SPECIFIC|SQL(?:EXCEPTION|STATE|WARNING|_AFTER_GTIDS|_AFTER_MTS_GAPS|_BEFORE_GTIDS|_BIG_RESULT|_BUFFER_RESULT|_CACHE|_CALC_FOUND_ROWS|_NO_CACHE|_SMALL_RESULT|_THREAD|_TSI_DAY|_TSI_HOUR|_TSI_MINUTE|_TSI_MONTH|_TSI_QUARTER|_TSI_SECOND|_TSI_WEEK|_TSI_YEAR)?|SSL|STACKED|START(?:ING|S)?|SRID|STATS_(?:AUTO_RECALC|PERSIST(?:ENT)?|SAMPLE_PAGES)|STATUS|STOP|STORAGE|STORED|STRAIGHT_JOIN|STRING|SUBCLASS_ORIGIN|SUBJECT|SUBPARTITION(?:S)?|SUPER|SUSPEND|SWAPS|SWITCHES|SYSTEM|TABLE(?:S|SPACE|_CHECKSUM|_NAME)?|TEMPORARY|TEMPTABLE|TERMINATED|THAN|THREAD_PRIORITY|THEN|TIES|TO|TRAILING|TRANSACTION|TRIGGER(?:S)?|TRUNCATE|TYPE|TYPE(?:S)?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNDO(?:FILE|_BUFFER_SIZE)?|UNICODE|UNINSTALL|UNION|UNIQUE|UNKNOWN|UNLOCK|UNSIGNED|UNTIL|UPDATE|UPGRADE|USAGE|USE|USER(?:_RESOURCES)?|USE_FRM|USING|UTC_(?:DATE|TIME|TIMESTAMP)|VALIDATION|VALUE(?:S)?|VARIABLES|VARYING|VCPU|VIEW|VIRTUAL|VISIBLE|WAIT|WARNINGS|WEEK|WEIGHT_STRING|WHEN|WHERE|WHILE|WITH(?:OUT)?|WINDOW|WORK|WRAPPER|WRITE|X509|XA|XID|XML|XOR|YEAR(?:_MONTH)?|ZEROFILL)\b/i,
    'boolean': /\b(?:TRUE|FALSE|NULL)\b/i,
    'number': /\b-?(?:0x)?\d*\.?\d[\da-f]*\b/i,
    'operator': /[-+*\/=%^~]|&&?|\|?\||!=?|<(?:=>?|<|>)?|>[>=]?|->>?|:=|\b(?:AND|BETWEEN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR|BINARY|CASE|MOD|MATCH)\b/i,
    'punctuation': /[;[\]()`,.]/
};
Prism.languages.mysqlsh = Prism.languages.extend('javascript', {});
Prism.languages.insertBefore('mysqlsh', 'comment', {
    'output': Prism.languages.sql.output,
    'prompt': /^mysql\-(js|py)>/m,
    'inlinejson': Prism.languages.sql.inlinejson
});
Prism.languages.terminal = {
    'output': Prism.languages.sql.output,
    'command': {
        pattern: /^(((root\-)?shell(M|S)?|gdb|mysql(sh)?|C:\\[\S]*|\[[a-z0-9]+@[a-z0-9]+( ~)?\])[#>]|\$ |~\$ |~\/mysql\-server\$ )\s*([\w\.:\\\/\+\-\\]+)/m,
        lookbehind: !0
    },
    'prompt': /^(((root\-)?shell(M|S)?|gdb|mysql(sh)?|C:\\[\S]*|\[[a-z0-9]+@[a-z0-9]+( ~)?\])[#>]|\$ |~\$ |~\/mysql\-server\$ )/m,
    'inlinejson': Prism.languages.sql.inlinejson,
    'comment': /#.*$/m,
    'atrule': {
        pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    'constant': /[\-]+?[^\s="']+?(?=[ \t]*=)/m,
    'attr-value': {
        pattern: /(?:=(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|=\[(\\(?:\r\n|[\s\S])|(?!\])[^\\\r\n])*\]|=<(\\(?:\r\n|[\s\S])|(?!>)[^\\\r\n])*>|=[\S]+)/,
        inside: {
            'punctuation': /(^[=]|\]$)/
        },
        greedy: !0
    },
    'property': [{
        pattern: /(^|[ \t\[]+)([\-]+[^\s\t\]"']+)/m,
        lookbehind: !0
    }, {
        pattern: /\[([A-Z-]+)\]/m,
        inside: {
            'punctuation': /(^\[|\]$)/
        }
    }],
    'punctuation': /[{}[\];(),.:]/
};
Prism.languages.mysqlfabric = Prism.languages.extend('terminal', {
    'prompt': /^[\t ]*(Description|Options|Parameters|Usage|Return)\b/im,
    'command': /\bmysqlfabric\b/m,
    'angle-attr': {
        pattern: /<[a-z_]+>/,
        alias: 'attr-value'
    }
});
Prism.languages.ndbmgm = {
    'command': {
        pattern: /^(shell>)\s*([\w\.\/\+\-\\]+)/m,
        lookbehind: !0
    },
    'prompt': /\b(ndb_mgm|shell)>/,
    'selector': /^[\t ]*((\d{4}\-\d{2}\-\d{2}|[a-z]+ \d{2} [a-z]+ \d{4}) \d{2}:\d{2}:\d{2}[\t ]*\[.*?\]|\[.*?\]|Node[\t ]*\d+:?)/im,
    'function': /\b(?:BackupStatus|MemoryUsage|EventLog)\b/i,
    'datatype': /\b(?:ERROR|ALERT|CRITICAL|ERROR|WARNING|INFO|DEBUG)\b/,
    'keyword': /\b(?:ABORT BACKUP|ALL|CHECKPOINT|CLUSTERLOG|COMPLETED|CONNECT(?:ION)?|CREATE NODEGROUP|DROP NODEGROUP|DUMP|ENTER SINGLE USER MODE|EXIT(?: SINGLE USER MODE)?|FILTER|HELP|MEMORY|NODERESTART|NOWAIT|PROMPT|QUIT|REPORT|RESTART|SHOW|SHUTDOWN|SNAPSHOT(?:END|START)|START(?: BACKUP|ED|UP)?|STATISTICS|STATUS|STOP|WAIT)\b/,
    'boolean': /\b(?:ON|OFF)\b/i,
    'operator': Prism.languages.simple.operator,
    'punctuation': Prism.languages.simple.punctuation
};
Prism.languages.mcm = {
    'output': Prism.languages.sql.output,
    'extra-output': {
        pattern: /\-{10}[\s\S]*?(?=\n[\t ]*[a-zA-Z:\\@~\$'-]+>|$)/,
        alias: 'output',
        inside: {
            'punctuation': /\-/
        }
    },
    'prompt': /^(mcm>|[\t ]*\-?>)/m,
    'keyword': /(?:(^|[^-])\b(abort|add|agents|autotune|backup(?:s)?|change|cluster(?:s)?|collect|commands|config|create|delete|get|hosts|import|list|log(?:-level|s)?|nextnodeids|package(?:s)?|process(?:es)?|remove|reset|restart|restore|rotate|set(?:tings)?|show|site(?:s)?|start|status|stop|upgrade|version))\b/i,
    'punctuation': Prism.languages.simple.punctuation
};
Prism.languages.mysqltest = Prism.languages.extend('sql', {
    'comment': {
        pattern: /(^|[^\\])#.*/,
        lookbehind: !0
    },
    'variable': [{
        pattern: /@[@]?[\w.$]+/
    }, {
        pattern: /\$[\w.]+/
    }]
});
Prism.languages.insertBefore('mysqltest', 'keyword', {
    'testcommand': {
        alias: 'function',
        pattern: /\b(?:append_file|cat_file|change_user|character_set|chmod|connect(?:ion)?|let|copy_file(?:s_wildcard)?|dec|delimiter|die|diff_files|dirty_close|disable_(?:abort_on_error|connect_log|info|metadata|parsing|ps_protocol|ps_warnings|query_log|reconnect|result_log|rpl_parse|session_track_info|warnings)|disconnect|echo|enable_(?:abort_on_error|connect_log|info|metadata|parsing|ps_protocol|ps_warnings|query_log|reconnect|result_log|rpl_parse|session_track_info|warnings)|end(?:_timer)?|error|eval|exec(?:w)?|exit|expr|file_exists|force-(?:cpdir|rmdir)|horizontal_results|if|inc|let|mkdir|list_files(?:_append_file|_write_file)?|lowercase_result|move_file|output|perl|ping|query(?:_get_value|_horizontal|_vertical)?|real_sleep|reap|remove_file(?:s_wildcard)?|replace_(?:column|regex|result)|require|reset_connection|result(?:_format)?|rmdir|save_master_pos|send(?:_eval|_quit|_shutdown)?|shutdown_server|skip|sleep|sorted_result|source|start_timer|sync_(?:slave_with_master|with_master)|system|vertical_results|wait_for_slave_to_stop|while|write_file)\b/i
    }
});
(function() {
    if (typeof self === 'undefined' || !self.Prism || !self.document) {
        return
    }
    Prism.hooks.add('complete', function(env) {
        if (!env.code) {
            return
        }
        var pre = env.element.parentNode;
        var clsReg = /\s*\bline-numbers\b\s*/;
        if (!pre || !/pre/i.test(pre.nodeName) || (!clsReg.test(pre.className) && !clsReg.test(env.element.className))) {
            return
        }
        if (env.element.querySelector(".line-numbers-rows")) {
            return
        }
        if (clsReg.test(env.element.className)) {
            env.element.className = env.element.className.replace(clsReg, '')
        }
        if (!clsReg.test(pre.className)) {
            pre.className += ' line-numbers'
        }
        var match = env.code.match(/\n(?!$)/g);
        var linesNum = match ? match.length + 1 : 1;
        var lineNumbersWrapper;
        var lines = new Array(linesNum + 1);
        lines = lines.join('<span></span>');
        lineNumbersWrapper = document.createElement('span');
        lineNumbersWrapper.setAttribute('aria-hidden', 'true');
        lineNumbersWrapper.className = 'line-numbers-rows';
        lineNumbersWrapper.innerHTML = lines;
        if (pre.hasAttribute('data-start')) {
            pre.style.counterReset = 'linenumber ' + (parseInt(pre.getAttribute('data-start'), 10) - 1)
        }
        env.element.appendChild(lineNumbersWrapper)
    })
}());
(function() {
    if (typeof self === 'undefined' || !self.Prism || !self.document || !document.createRange) {
        return
    }
    Prism.plugins.KeepMarkup = !0;
    Prism.hooks.add('before-highlight', function(env) {
        if (!env.element.children.length) {
            return
        }
        var pos = 0;
        var data = [];
        var f = function(elt, baseNode) {
            var o = {};
            if (!baseNode) {
                o.clone = elt.cloneNode(!1);
                o.posOpen = pos;
                data.push(o)
            }
            for (var i = 0, l = elt.childNodes.length; i < l; i++) {
                var child = elt.childNodes[i];
                if (child.nodeType === 1) {
                    f(child)
                } else if (child.nodeType === 3) {
                    pos += child.data.length
                }
            }
            if (!baseNode) {
                o.posClose = pos
            }
        };
        f(env.element, !0);
        if (data && data.length) {
            env.keepMarkup = data
        }
    });
    Prism.hooks.add('after-highlight', function(env) {
        if (env.keepMarkup && env.keepMarkup.length) {
            var walk = function(elt, nodeState) {
                for (var i = 0, l = elt.childNodes.length; i < l; i++) {
                    var child = elt.childNodes[i];
                    if (child.nodeType === 1) {
                        if (!walk(child, nodeState)) {
                            return !1
                        }
                    } else if (child.nodeType === 3) {
                        if (!nodeState.nodeStart && nodeState.pos + child.data.length > nodeState.node.posOpen) {
                            nodeState.nodeStart = child;
                            nodeState.nodeStartPos = nodeState.node.posOpen - nodeState.pos
                        }
                        if (nodeState.nodeStart && nodeState.pos + child.data.length >= nodeState.node.posClose) {
                            nodeState.nodeEnd = child;
                            nodeState.nodeEndPos = nodeState.node.posClose - nodeState.pos
                        }
                        nodeState.pos += child.data.length
                    }
                    if (nodeState.nodeStart && nodeState.nodeEnd) {
                        var range = document.createRange();
                        range.setStart(nodeState.nodeStart, nodeState.nodeStartPos);
                        range.setEnd(nodeState.nodeEnd, nodeState.nodeEndPos);
                        nodeState.node.clone.appendChild(range.extractContents());
                        range.insertNode(nodeState.node.clone);
                        range.detach();
                        return !1
                    }
                }
                return !0
            };
            env.keepMarkup.forEach(function(node) {
                walk(env.element, {
                    node: node,
                    pos: 0
                })
            });
            env.highlightedCode = env.element.innerHTML
        }
    })
}());
/*!
 * clipboard.js v1.6.1
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.Clipboard = e()
    }
}(function() {
    var e, t, n;
    return function e(t, n, o) {
        function i(a, c) {
            if (!n[a]) {
                if (!t[a]) {
                    var l = "function" == typeof require && require;
                    if (!c && l) return l(a, !0);
                    if (r) return r(a, !0);
                    var u = new Error("Cannot find module '" + a + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var s = n[a] = {
                    exports: {}
                };
                t[a][0].call(s.exports, function(e) {
                    var n = t[a][1][e];
                    return i(n ? n : e)
                }, s, s.exports, e, t, n, o)
            }
            return n[a].exports
        }
        for (var r = "function" == typeof require && require, a = 0; a < o.length; a++) i(o[a]);
        return i
    }({
        1: [function(e, t, n) {
            function o(e, t) {
                for (; e && e.nodeType !== i;) {
                    if (e.matches(t)) return e;
                    e = e.parentNode
                }
            }
            var i = 9;
            if ("undefined" != typeof Element && !Element.prototype.matches) {
                var r = Element.prototype;
                r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector
            }
            t.exports = o
        }, {}],
        2: [function(e, t, n) {
            function o(e, t, n, o, r) {
                var a = i.apply(this, arguments);
                return e.addEventListener(n, a, r), {
                    destroy: function() {
                        e.removeEventListener(n, a, r)
                    }
                }
            }

            function i(e, t, n, o) {
                return function(n) {
                    n.delegateTarget = r(n.target, t), n.delegateTarget && o.call(e, n)
                }
            }
            var r = e("./closest");
            t.exports = o
        }, {
            "./closest": 1
        }],
        3: [function(e, t, n) {
            n.node = function(e) {
                return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
            }, n.nodeList = function(e) {
                var t = Object.prototype.toString.call(e);
                return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || n.node(e[0]))
            }, n.string = function(e) {
                return "string" == typeof e || e instanceof String
            }, n.fn = function(e) {
                var t = Object.prototype.toString.call(e);
                return "[object Function]" === t
            }
        }, {}],
        4: [function(e, t, n) {
            function o(e, t, n) {
                if (!e && !t && !n) throw new Error("Missing required arguments");
                if (!c.string(t)) throw new TypeError("Second argument must be a String");
                if (!c.fn(n)) throw new TypeError("Third argument must be a Function");
                if (c.node(e)) return i(e, t, n);
                if (c.nodeList(e)) return r(e, t, n);
                if (c.string(e)) return a(e, t, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }

            function i(e, t, n) {
                return e.addEventListener(t, n), {
                    destroy: function() {
                        e.removeEventListener(t, n)
                    }
                }
            }

            function r(e, t, n) {
                return Array.prototype.forEach.call(e, function(e) {
                    e.addEventListener(t, n)
                }), {
                    destroy: function() {
                        Array.prototype.forEach.call(e, function(e) {
                            e.removeEventListener(t, n)
                        })
                    }
                }
            }

            function a(e, t, n) {
                return l(document.body, e, t, n)
            }
            var c = e("./is"),
                l = e("delegate");
            t.exports = o
        }, {
            "./is": 3,
            delegate: 2
        }],
        5: [function(e, t, n) {
            function o(e) {
                var t;
                if ("SELECT" === e.nodeName) e.focus(), t = e.value;
                else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                    var n = e.hasAttribute("readonly");
                    n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value
                } else {
                    e.hasAttribute("contenteditable") && e.focus();
                    var o = window.getSelection(),
                        i = document.createRange();
                    i.selectNodeContents(e), o.removeAllRanges(), o.addRange(i), t = o.toString()
                }
                return t
            }
            t.exports = o
        }, {}],
        6: [function(e, t, n) {
            function o() {}
            o.prototype = {
                on: function(e, t, n) {
                    var o = this.e || (this.e = {});
                    return (o[e] || (o[e] = [])).push({
                        fn: t,
                        ctx: n
                    }), this
                },
                once: function(e, t, n) {
                    function o() {
                        i.off(e, o), t.apply(n, arguments)
                    }
                    var i = this;
                    return o._ = t, this.on(e, o, n)
                },
                emit: function(e) {
                    var t = [].slice.call(arguments, 1),
                        n = ((this.e || (this.e = {}))[e] || []).slice(),
                        o = 0,
                        i = n.length;
                    for (o; o < i; o++) n[o].fn.apply(n[o].ctx, t);
                    return this
                },
                off: function(e, t) {
                    var n = this.e || (this.e = {}),
                        o = n[e],
                        i = [];
                    if (o && t)
                        for (var r = 0, a = o.length; r < a; r++) o[r].fn !== t && o[r].fn._ !== t && i.push(o[r]);
                    return i.length ? n[e] = i : delete n[e], this
                }
            }, t.exports = o
        }, {}],
        7: [function(t, n, o) {
            ! function(i, r) {
                if ("function" == typeof e && e.amd) e(["module", "select"], r);
                else if ("undefined" != typeof o) r(n, t("select"));
                else {
                    var a = {
                        exports: {}
                    };
                    r(a, i.select), i.clipboardAction = a.exports
                }
            }(this, function(e, t) {
                "use strict";

                function n(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function o(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }
                var i = n(t),
                    r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    a = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var o = t[n];
                                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                            }
                        }
                        return function(t, n, o) {
                            return n && e(t.prototype, n), o && e(t, o), t
                        }
                    }(),
                    c = function() {
                        function e(t) {
                            o(this, e), this.resolveOptions(t), this.initSelection()
                        }
                        return a(e, [{
                            key: "resolveOptions",
                            value: function e() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = t.action, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
                            }
                        }, {
                            key: "initSelection",
                            value: function e() {
                                this.text ? this.selectFake() : this.target && this.selectTarget()
                            }
                        }, {
                            key: "selectFake",
                            value: function e() {
                                var t = this,
                                    n = "rtl" == document.documentElement.getAttribute("dir");
                                this.removeFake(), this.fakeHandlerCallback = function() {
                                    return t.removeFake()
                                }, this.fakeHandler = document.body.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[n ? "right" : "left"] = "-9999px";
                                var o = window.pageYOffset || document.documentElement.scrollTop;
                                this.fakeElem.style.top = o + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, document.body.appendChild(this.fakeElem), this.selectedText = (0, i.default)(this.fakeElem), this.copyText()
                            }
                        }, {
                            key: "removeFake",
                            value: function e() {
                                this.fakeHandler && (document.body.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                            }
                        }, {
                            key: "selectTarget",
                            value: function e() {
                                this.selectedText = (0, i.default)(this.target), this.copyText()
                            }
                        }, {
                            key: "copyText",
                            value: function e() {
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
                            value: function e(t) {
                                this.emitter.emit(t ? "success" : "error", {
                                    action: this.action,
                                    text: this.selectedText,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                })
                            }
                        }, {
                            key: "clearSelection",
                            value: function e() {
                                this.target && this.target.blur(), window.getSelection().removeAllRanges()
                            }
                        }, {
                            key: "destroy",
                            value: function e() {
                                this.removeFake()
                            }
                        }, {
                            key: "action",
                            set: function e() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                                if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                            },
                            get: function e() {
                                return this._action
                            }
                        }, {
                            key: "target",
                            set: function e(t) {
                                if (void 0 !== t) {
                                    if (!t || "object" !== ("undefined" == typeof t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                    if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    this._target = t
                                }
                            },
                            get: function e() {
                                return this._target
                            }
                        }]), e
                    }();
                e.exports = c
            })
        }, {
            select: 5
        }],
        8: [function(t, n, o) {
            ! function(i, r) {
                if ("function" == typeof e && e.amd) e(["module", "./clipboard-action", "tiny-emitter", "good-listener"], r);
                else if ("undefined" != typeof o) r(n, t("./clipboard-action"), t("tiny-emitter"), t("good-listener"));
                else {
                    var a = {
                        exports: {}
                    };
                    r(a, i.clipboardAction, i.tinyEmitter, i.goodListener), i.clipboard = a.exports
                }
            }(this, function(e, t, n, o) {
                "use strict";

                function i(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function r(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function a(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function c(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                function l(e, t) {
                    var n = "data-clipboard-" + e;
                    if (t.hasAttribute(n)) return t.getAttribute(n)
                }
                var u = i(t),
                    s = i(n),
                    f = i(o),
                    d = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var o = t[n];
                                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                            }
                        }
                        return function(t, n, o) {
                            return n && e(t.prototype, n), o && e(t, o), t
                        }
                    }(),
                    h = function(e) {
                        function t(e, n) {
                            r(this, t);
                            var o = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return o.resolveOptions(n), o.listenClick(e), o
                        }
                        return c(t, e), d(t, [{
                            key: "resolveOptions",
                            value: function e() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText
                            }
                        }, {
                            key: "listenClick",
                            value: function e(t) {
                                var n = this;
                                this.listener = (0, f.default)(t, "click", function(e) {
                                    return n.onClick(e)
                                })
                            }
                        }, {
                            key: "onClick",
                            value: function e(t) {
                                var n = t.delegateTarget || t.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new u.default({
                                    action: this.action(n),
                                    target: this.target(n),
                                    text: this.text(n),
                                    trigger: n,
                                    emitter: this
                                })
                            }
                        }, {
                            key: "defaultAction",
                            value: function e(t) {
                                return l("action", t)
                            }
                        }, {
                            key: "defaultTarget",
                            value: function e(t) {
                                var n = l("target", t);
                                if (n) return document.querySelector(n)
                            }
                        }, {
                            key: "defaultText",
                            value: function e(t) {
                                return l("text", t)
                            }
                        }, {
                            key: "destroy",
                            value: function e() {
                                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                            }
                        }], [{
                            key: "isSupported",
                            value: function e() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                    n = "string" == typeof t ? [t] : t,
                                    o = !!document.queryCommandSupported;
                                return n.forEach(function(e) {
                                    o = o && !!document.queryCommandSupported(e)
                                }), o
                            }
                        }]), t
                    }(s.default);
                e.exports = h
            })
        }, {
            "./clipboard-action": 7,
            "good-listener": 4,
            "tiny-emitter": 6
        }]
    }, {}, [8])(8)
});;
(function($) {
    $.doc = function(opt) {
        this.defaults = {
            'navStickyMinWidth': 860,
            'mobile': !1,
            'docId': 0,
            'highlight': !1
        }
        this.navObj = $('#sub-header');
        this.headerObj = $('#l1-nav-container');
        this.bodyObj = $('body');
        this.footerObj = $('footer');
        this.docTocObj = $('#docs-sidebar-toc');
        this.docsMainObj = $('#docs-main');
        this.docsMainInner = $('#docs-main-inner');
        this.docTocInner = $('#docs-toc-inner');
        this.window = $(window);
        this.document = $(document);
        this.tocPosition = null;
        this.copyTimer = null;
        this.tables = [];
        this.theadMagicNumber = 4;
        this.theadTimer = null;
        this.theadMinRows = 10;
        this.options = $.extend({}, this.defaults, opt);
        this.init = function() {
            var self = this;
            $('.docs-sidebar-nav a.expandable').doctoc(self);
            $('#docs-hide-nav').click(function(e) {
                self.docTocObj.hide();
                self.docsMainObj.removeClass('has-toc').addClass('no-toc');
                $('#docs-show-nav').show();
                self.docsMainObj.css('min-height', '100px');
                $.get('/doc/sidebar/?visible=0&d=' + self.options.docId, {});
                return !1
            });
            $('.docs-sidebar-section').click(function(e) {
                var div = $(this).next();
                if (div.is(':hidden')) {
                    div.slideDown('fast', function() {
                        self.adjustHeight()
                    })
                } else {
                    div.slideUp('fast', function() {
                        self.adjustHeight()
                    })
                }
                return !1
            });
            $('#docs-show-nav').click(function(e) {
                self.docTocObj.show();
                self.docsMainObj.removeClass('no-toc').addClass('has-toc');
                self.adjustHeight();
                $('#docs-show-nav').hide();
                $.get('/doc/sidebar/?visible=1&d=' + self.options.docId, {});
                return !1
            });
            $('#show-breadcrumbs').click(function(e) {
                $('#breadcrumbs-link').hide();
                $('#hidden-breadcrumbs').show();
                return !1
            });
            $('#docs-version-nav-toggle').click(function(e) {
                $('#docs-version-nav div').toggle();
                if ($('#docs-version-nav-toggle span').hasClass('icon-chevron-down')) {
                    $('#docs-version-nav-toggle span').removeClass('icon-chevron-down').addClass('icon-chevron-up')
                } else {
                    $('#docs-version-nav-toggle span').removeClass('icon-chevron-up').addClass('icon-chevron-down')
                }
                return !1
            });
            $('.mediaobject img').each(function() {
                var width = $(this).attr('width');
                $(this).removeAttr('width').removeAttr('height');
                if (width > 0) {
                    $(this).css('max-height', 'auto').css('width', '100%').css('max-width', width + 'px')
                } else {
                    width = $(this).width();
                    $(this).css('max-height', 'auto').css('width', '100%').css('max-width', width + 'px')
                }
            });
            $('#expand-footer').click(function() {
                var collapsed = 1;
                var span = $('#footer-collapse').find('span');
                if ($('footer').hasClass('collapsed')) {
                    collapsed = 0;
                    $('footer').removeClass('collapsed');
                    $('#footer-links').show();
                    $('#footer-contact-icon').show();
                    $('#footer-contact-numbers').show();
                    $('#footer-contact-copyright').hide();
                    span.removeClass('icon-plus-square').addClass('icon-minus-square');
                    $(this).attr('title', 'Hide Footer');
                    $('html, body').animate({
                        scrollTop: $(document).height()
                    }, 'slow')
                } else {
                    $('#footer-links').hide();
                    $('footer').addClass('collapsed');
                    $('#footer-contact-icon').hide();
                    $('#footer-contact-numbers').hide();
                    $('#footer-contact-copyright').show();
                    span.removeClass('icon-minus-square').addClass('icon-plus-square');
                    $(this).attr('title', 'Expand Footer')
                }
                $.get('/doc/footer/?collapsed=' + collapsed, {});
                return !1
            });
            if (this.options.highlight) {
                if (document.addEventListener) {
                    if (document.readyState !== "loading") {
                        if (window.requestAnimationFrame) {
                            window.requestAnimationFrame(Prism.highlightAll)
                        } else {
                            window.setTimeout(Prism.highlightAll, 16)
                        }
                    } else {
                        document.addEventListener('DOMContentLoaded', Prism.highlightAll)
                    }
                }
            }
            if (!this.options.mobile) {
                var presel = this.options.highlight ? 'pre.copytoclipboard' : 'pre.programlisting';
                $(presel).each(function() {
                    $this = $(this);
                    $this.wrap('<div/>').removeClass('copytoclipboard');
                    $wrapper = $this.parent();
                    $wrapper.addClass('copytoclipboard-wrapper').css({
                        position: 'relative'
                    })
                    var id = 'sa' + Math.floor((Math.random() * 100000000) + 1);
                    var cmd = (navigator.appVersion.indexOf("Mac") != -1) ? '&#8984;+C' : 'CTRL+C';
                    $button = $('<div class="docs-select-all right" id="' + id + '"><div class="copy-help left">Press ' + cmd + ' to copy</div> <div class="right"><button class="clipboard-btn" title="Copy to Clipboard">' + '<span class="icon-clipboard"></span></button></div></div>');
                    $button.prependTo($this);
                    $this.hover(function() {
                        $('#' + id).show()
                    }, function() {
                        $('#' + id).find('.copy-help').hide();
                        $('#' + id).hide()
                    });
                    var success = 'Copied';
                    var error = 'Press ' + ((navigator.appVersion.indexOf("Mac") != -1) ? '&#8984;+C' : 'CTRL+C') + ' to copy';
                    if (self.options.highlight) {
                        var copyCode = new Clipboard('.clipboard-btn', {
                            target: function(trigger) {
                                return trigger.parentNode.parentNode.nextSibling
                            }
                        })
                    } else {
                        var copyCode = new Clipboard('.clipboard-btn', {
                            text: function(trigger) {
                                var labelTxt = trigger.parentNode.parentNode.firstChild.textContent;
                                return trigger.parentNode.parentNode.parentNode.textContent.substr(labelTxt.length + 1)
                            }
                        })
                    }
                    copyCode.on('success', function(event) {
                        event.clearSelection();
                        var chDiv = $(event.trigger.parentNode.previousElementSibling);
                        chDiv.html(success);
                        chDiv.fadeIn("slow", function() {
                            self.copyTimer = window.setTimeout(function() {
                                chDiv.fadeOut('slow')
                            }, 2000)
                        });
                        return !1
                    });
                    copyCode.on('error', function(event) {
                        var chDiv = $(event.trigger.parentNode.previousElementSibling);
                        chDiv.html(error);
                        chDiv.fadeIn("slow", function() {
                            self.copyTimer = window.setTimeout(function() {
                                chDiv.fadeOut('slow')
                            }, 4000)
                        });
                        return !1
                    })
                })
            }
            this.initComments('');
            if (!this.options.mobile) {
                this.scrollToc();
                this.adjustHeight();
                $(window).scroll(function() {
                    self.scrollToc()
                });
                $(window).smartresize(function() {
                    self.scrollToc();
                    self.adjustHeight()
                })
            }
            var tbls = $('#docs-body thead').closest('table');
            if (tbls.length) {
                $(tbls).each(function() {
                    var table = this.tagName.toLowerCase() == 'table' ? $(this) : $('table', this),
                        parent = table.parent(),
                        thead = $('thead', table);
                    var rows = $('tr', table).length;
                    if (thead.length && rows > self.theadMinRows) {
                        var clazz = table.attr('class'),
                            cp = table.attr('cellpadding'),
                            cs = table.attr('cellspacing');
                        self.tables.push($('<table />').attr('class', clazz).attr('cellpadding', cp ? cp : 0).attr('cellspacing', cs ? cs : 0).css({
                            position: 'fixed',
                            top: 0
                        }).appendTo($('<' + parent.get(0).tagName + '/>').attr('class', parent.attr('class')).insertAfter(parent)).append($(thead).clone(!0)))
                    }
                });
                if (this.tables.length) {
                    $(window).scroll(self.throttle(100, function() {
                        self.scrollThead()
                    }));
                    $(window).smartscroll(function() {
                        self.scrollThead()
                    });
                    $(window).smartresize(function() {
                        self.scrollThead()
                    })
                }
                self.scrollThead()
            }
        }
        this.throttle = function(delay, callback) {
            var previousCall = new Date().getTime();
            return function() {
                var time = new Date().getTime();
                if ((time - previousCall) >= delay) {
                    previousCall = time;
                    callback.apply(null, arguments)
                }
            }
        }
        this.scrollThead = function() {
            var self = this;
            console.log('In thead scroll event');
            $(this.tables).each(function() {
                var w, s = 'thead tr th, thead tr td',
                    t = $('table', this.parent().prev()).get(0),
                    c = $('caption', t),
                    collapse = $(t).css('border-collapse') == 'collapse',
                    ths = $(s, t),
                    offset = self.document.scrollTop() - $(t).offset().top + self.theadMagicNumber;
                if (c.length) {
                    offset -= c.get(0).clientHeight
                }
                $(s, this).each(function(index) {
                    var th = ths.eq(index).get(0);
                    w = $(th).get(0).getBoundingClientRect().width;
                    $(this).css('width', w != 'auto' ? w : th.clientWidth - self.parseInt($(th).css('padding-left')) - self.parseInt($(th).css('padding-right')) + 'px')
                });
                $(this).css({
                    display: (offset > self.theadMagicNumber && offset < t.clientHeight - $('tr:last', t).height() - self.theadMagicNumber * 2) ? $(t).css('display') : 'none',
                    left: $(t).offset().left - self.document.scrollLeft() + 'px',
                    width: $(t).get(0).offsetWidth
                })
            })
        }
        this.initComments = function(prefix) {
            var self = this;
            $(prefix + ' #docs-comment-agree').change(function(e) {
                if ($(this).prop('checked')) {
                    $('.docs-comment-submit-btn').removeAttr('disabled').removeClass('disabled')
                } else {
                    $('.docs-comment-submit-btn').attr('disabled', 'disabled').addClass('disabled')
                }
            });
            $(prefix + ' #docs-comment-agree').change();
            $(prefix + ' #docs-comment-show-form-btn').click(function(e) {
                $(this).hide()
                $('#add-comment').show();
                $('html, body').animate({
                    scrollTop: $('#add-comment').offset().top
                }, 'slow');
                return !1
            });
            $(prefix + ' #docs-comment-hide-form-btn').click(function(e) {
                $(prefix + ' #docs-comment-agree').prop('checked', !1).change();
                $('#add-comment').hide();
                $('#docs-comment-show-form-btn').show()
                self.adjustHeight();
                return !1
            });
            $(prefix + ' .json-input').val(1);
            $(prefix + ' .docs-comment-delete-link').click(function(e) {
                if (confirm('Are you sure you want to delete this comment?')) {
                    var id = $(this).attr('id').substring(1);
                    self.showCommentLinkSpinner(id);
                    $.ajax({
                        type: 'GET',
                        url: '/doc/delete-comment/',
                        data: {
                            'id': id,
                            'json': 1
                        },
                        dataType: 'json',
                        success: function(data, msg) {
                            if (!data.success) {
                                alert(data.results)
                            } else {
                                $('#c' + id).remove();
                                self.adjustHeight()
                            }
                            self.hideCommentLinkSpinner(id)
                        },
                        error: function(xhr, status_text, error_thrown) {
                            alert('An unexpected error was encountered.');
                            self.hideCommentLinkSpinner(id)
                        }
                    })
                }
                return !1
            });
            $(prefix + ' .docs-comment-submit-btn').click(function(e) {
                e.preventDefault();
                if (!$(prefix + ' #docs-comment-agree').prop('checked')) {
                    alert('You must first agree to the terms by clicking the I AGREE checkbox.')
                }
                var form = $(this).closest('form');
                var data = form.serializeArray();
                $(form).find('.docs-comment-btn').prop('disabled', !0).addClass('disabled');
                $.ajax({
                    type: 'POST',
                    url: '/doc/comment/',
                    data: form.serializeArray(),
                    dataType: 'json',
                    success: function(data, msg) {
                        if (!data.success) {
                            alert(data.results);
                            $(form).find('.docs-comment-btn').prop('disabled', !1).removeClass('disabled')
                        } else {
                            $('#comment-listing').append(data.results);
                            var cid = $('#comment-listing').children().last().attr('id');
                            self.initComments('#' + cid);
                            $('#docs-comment-hide-form-btn').trigger('click');
                            $(form).find('textarea').val('');
                            self.adjustHeight();
                            $(prefix + ' #docs-comment-agree').prop('checked', !1).change();
                            $(form).find('#docs-comment-hide-form-btn').prop('disabled', !1).removeClass('disabled')
                        }
                    },
                    error: function(xhr, status_text, error_thrown) {
                        alert('An unexpected error was encountered.')
                    }
                });
                return !1
            })
        }
        this.showCommentLinkSpinner = function(id) {
            var spinner = '<span class="icon-spinner pulse"></span>';
            $('#c' + id + ' .docs-comment-item-header-spinner').html(spinner).show();
            $('#c' + id + ' .docs-comment-item-header-links').hide()
        }
        this.hideCommentLinkSpinner = function(id) {
            $('#c' + id + ' .docs-comment-item-header-spinner').html('').hide();
            $('#c' + id + ' .docs-comment-item-header-links').show()
        }
        this.parseInt = function(value) {
            var result = parseInt(value, 10);
            return isNaN(result) ? 0 : result
        }
        this.clearHeights = function() {
            this.docTocObj.css('max-height', 'none');
            this.docsMainObj.css('min-height', 'none')
        }
        this.adjustHeight = function() {
            var width = $(window).width();
            if (width <= this.options.navStickyMinWidth || this.docTocObj.is(':hidden')) {
                this.clearHeights();
                return this
            }
            var height = $(window).height();
            var mainHeight = this.docsMainInner.height();
            var tocHeight = this.docTocInner.height();
            var footerHeight = this.footerObj.outerHeight(!0);
            var footerPixels = ($(window).scrollTop() + $(window).height()) - this.footerObj.offset().top;
            if (footerPixels < 0) {
                footerPixels = 0
            } else if (footerPixels > footerHeight) {
                footerPixels = footerHeight
            }
            var minMainDoc = null;
            var maxToc = null;
            if (tocHeight >= mainHeight) {
                if (tocHeight > height - footerHeight) {
                    if (this.tocPosition == 'fixed') {
                        maxToc = height - footerPixels
                    } else {
                        minMainDoc = tocHeight > height ? height : tocHeight;
                        maxToc = tocHeight > height ? height : tocHeight
                    }
                } else {
                    minMainDoc = tocHeight;
                    maxToc = tocHeight
                }
            } else if (this.tocPosition == 'fixed') {
                maxToc = height;
                maxToc -= footerPixels
            }
            if (minMainDoc !== null) {
                this.docsMainObj.css('min-height', minMainDoc + 'px')
            }
            if (maxToc !== null) {
                this.docTocObj.css('max-height', maxToc + 'px')
            } else {
                this.docTocObj.css('max-height', 'none')
            }
            if (this.tocPosition == 'fixed') {
                this.docTocObj.css('overflow-y', 'auto')
            } else {
                this.docTocObj.css('overflow-y', 'hidden')
            }
            return this
        }
        this.scrollToc = function() {
            if ($(window).scrollTop() >= this.headerObj.height() + this.navObj.height()) {
                var width = $(window).width();
                if ((!this.tocPosition || this.tocPosition == 'static') && width > this.options.navStickyMinWidth) {
                    this.bodyObj.addClass('has-sticky-toc');
                    this.docTocObj.addClass('sticky');
                    this.tocPosition = 'fixed'
                } else if (this.tocPosition == 'fixed' && width <= this.options.navStickyMinWidth) {
                    this.bodyObj.removeClass('has-sticky-toc');
                    this.docTocObj.removeClass('sticky');
                    this.docTocObj.scrollTop(0);
                    this.tocPosition = 'static'
                }
                if (width > this.options.navStickyMinWidth) {
                    var tocHeight = $(window).height();
                    var footerPixels = ($(window).scrollTop() + $(window).height()) - this.footerObj.offset().top;
                    var footerHeight = this.footerObj.outerHeight(!0);
                    if (footerPixels > 0) {
                        tocHeight -= footerPixels
                    } else if (footerPixels > footerHeight) {
                        footerPixels = footerHeight
                    }
                    var maxHeight = this.docTocObj.css('max-height');
                    var overflowY = this.docTocObj.css('overflow-y');
                    var newHeight = tocHeight + 'px';
                    if (maxHeight != newHeight || overflowY != 'auto') {
                        this.docTocObj.css('max-height', tocHeight + 'px').css('overflow-y', 'auto')
                    }
                }
            } else {
                if (!this.tocPosition || this.tocPosition == 'fixed') {
                    this.navObj.removeClass('sticky');
                    this.bodyObj.removeClass('has-sticky-toc');
                    this.docTocObj.removeClass('sticky');
                    this.docTocObj.scrollTop(0);
                    this.tocPosition = 'static';
                    this.adjustHeight();
                    $('#wkr').hide(0, function() {
                        $(this).show()
                    })
                }
            }
        }
        this.init()
    }
    $.fn.doctoc = function(doc) {
        this.on('click', function(e) {
            var chevron = this;
            if ($(this).hasClass('loaded')) {
                var icon = $(this).find('span');
                var submenu = $(this).parent().parent().parent().find('.docs-submenu')[0];
                if (icon.hasClass('icon-chevron-down')) {
                    icon.removeClass('icon-chevron-down').addClass('icon-chevron-right');
                    $(submenu).slideUp('fast', function() {
                        doc.adjustHeight()
                    })
                } else {
                    icon.removeClass('icon-chevron-right').addClass('icon-chevron-down');
                    $(submenu).slideDown('fast', function() {
                        doc.adjustHeight()
                    })
                }
            } else {
                var icon = $(this).find('span');
                var link = $(this).parent().parent().find('.docs-sidebar-nav-link a')[0];
                var submenu = $(this).parent().parent().parent().find('.docs-submenu')[0];
                var href = $(link).attr('href');
                var parts = $('.doctoc').attr('id').split('-');
                var docVersionId = parts[1];
                $(submenu).after('<div class="docs-toc-loading"><span class="icon-spinner pulse"></span>&nbsp; Loading</div>');
                $.ajax({
                    type: 'GET',
                    url: '/doc/toc/',
                    data: {
                        'id': docVersionId,
                        'page': href
                    },
                    dataType: 'json',
                    success: function(data, msg) {
                        if (!data.success) {
                            $(submenu).find('.docs-toc-loading').html('Error Loading Nav Items')
                        } else {
                            $(submenu).next().remove();
                            $(submenu).html(data.results);
                            $(submenu).find('a.expandable').doctoc(doc);
                            $(chevron).addClass('loaded');
                            icon.removeClass('icon-chevron-right').addClass('icon-chevron-down');
                            $(submenu).slideDown('fast', function() {
                                doc.adjustHeight()
                            })
                        }
                    },
                    error: function(xhr, status_text, error_thrown) {}
                })
            }
            e.stopPropagation();
            return !1
        });
        return this
    }
})(jQuery);
(function($) {
    $.fn.loadVersion = function(ga) {
        $('#' + ga).mask('Loading ...');
        var os = $('#os-' + ga).val();
        var osva = $('#osva-' + ga).val();
        var url = $(this).attr('href');
        if (typeof url === 'undefined' || url === !1) {
            url = $('#dl-' + ga).attr('action');
            var version = $('#version-' + ga).val();
            var params = {
                tpl: 'version',
                os: os,
                version: version,
                osva: osva
            }
        } else {
            var params = {
                tpl: 'version',
                os: os,
                osva: osva
            }
        }
        $.get(url, params).done(function(data) {
            $('#' + ga).html(data);
            $('#' + ga).unmask()
        });
        return !1
    };
    $.fn.loadPlatform = function(ga) {
        var url = $('#dl-' + ga).attr('action');
        var os = $('#os-' + ga).val();
        var osva = $('#osva-' + ga).val();
        $('#os-version-' + ga).mask('Loading ...');
        var version = $('#version-' + ga).val();
        $.get(url, {
            tpl: 'platform',
            os: os,
            version: version,
            osva: osva
        }).done(function(data) {
            $('#os-version-' + ga).html(data);
            $('#os-version-' + ga).unmask()
        });
        return !1
    };
    $.fn.loadFiles = function(ga) {
        var url = $('#dl-' + ga).attr('action');
        var os = $('#os-' + ga).val();
        var osva = $('#osva-' + ga).val();
        if (os == 0) {
            return !1
        }
        $('#files-' + ga).mask('Loading ...');
        var version = $('#version-' + ga).val();
        $.get(url, {
            tpl: 'files',
            os: os,
            version: version,
            osva: osva
        }).done(function(data) {
            $('#files-' + ga).html(data);
            $('#files-' + ga).unmask()
        });
        return !1
    };
    $.fn.loadArchiveVersion = function() {
        $('#downloads').mask('Loading ...');
        var url = $('#dl').attr('action');
        var os = $('#os').val();
        var osva = $('#osva').val();
        var version = $('#version').val();
        var params = {
            tpl: 'version',
            os: os,
            version: version,
            osva: osva
        };
        $.get(url, params).done(function(data) {
            $('#downloads').html(data);
            $('#downloads').unmask()
        });
        return !1
    };
    $.fn.loadArchivePlatform = function() {
        var url = $('#dl').attr('action');
        var os = $('#os').val();
        var osva = $('#osva').val();
        var version = $('#version').val();
        if (os == 0) {
            return !1
        }
        $('#os-version').mask('Loading ...');
        $.get(url, {
            tpl: 'platform',
            os: os,
            version: version,
            osva: osva
        }).done(function(data) {
            $('#os-version').html(data);
            $('#os-version').unmask()
        });
        return !1
    };
    $.fn.loadArchiveFiles = function() {
        var url = $('#dl').attr('action');
        var os = $('#os').val();
        var osva = $('#osva').val();
        var version = $('#version').val();
        if (os == 0) {
            return !1
        }
        $('#files').mask('Loading ...');
        $.get(url, {
            tpl: 'files',
            os: os,
            version: version,
            osva: osva
        }).done(function(data) {
            $('#files').html(data);
            $('#files').unmask()
        });
        return !1
    };
    $.fn.showSignature = function() {
        var self = this;
        $.facebox(function() {
            var url = $(self).attr('href');
            $.get($(self).attr('href'), {
                tpl: 'fb'
            }).done(function(data) {
                $.facebox(data)
            })
        })
    }
})(jQuery);
(function($) {
    $.worklog = function(opt) {
        this.defaults = {
            'keywords': '',
            'priority': '',
            'severity': '',
            'page': 1,
            'sort': 'last_modified',
            'sort_dir': 'DESC',
            'controller_url': '/worklog'
        }
        this.loading = !1;
        this.options = $.extend({}, this.defaults, opt);
        this.viewed = [];
        this.init = function() {
            var self = this;
            $('#task_search').submit(function(event) {
                event.preventDefault();
                if ($('#k').val()) {
                    self.options.sort = '';
                    self.options.sort_dir = ''
                } else {
                    self.options.sort = $('#sc').val();
                    self.options.sort_dir = $('#sd').val()
                }
                self.options.keywords = $('#k').val();
                self.options.priority = $('#p').val();
                self.options.status = $('#s').val();
                self.options.page = 1;
                self.refresh('Searching', !1);
                return !1
            });
            $('#go_form').submit(function(event) {
                event.preventDefault();
                var href = self.options.controller_url + '/task/?id=' + self.getIntValue('go_to_id');
                self.loadTask(href);
                return !1
            });
            $('#k').bind('keypress', function(e) {
                if (e.keyCode == 13) {
                    $(this).blur();
                    $('#search_button').click();
                    return !1
                }
            });
            this.initLinks()
        };
        this.initLinks = function() {
            var self = this;
            $('#pagination a, .sort_link').click(function() {
                var href = $(this).attr('href');
                $('#sc').val(self.getQueryParam(href, 'sc'));
                $('#sd').val(self.getQueryParam(href, 'sd'));
                var parts = href.split('?');
                self.refresh('Loading', parts[1]);
                return !1
            });
            this.initTaskLinks('.task_link')
        }
        this.initTaskLinks = function(selector) {
            var self = this;
            $(selector).click(function() {
                self.loadTask($(this).attr('href'));
                return !1
            })
        }
        this.scrollTabsTop = function() {
            var self = this;
            $('.ui-tabs-nav a').click(function() {
                var id = $(this).attr('href');
                if (!self.viewed[id]) {
                    $(id).scrollTop(0);
                    self.viewed[id] = 1
                }
                return !1
            })
        }
        this.loadTask = function(href) {
            var self = this;
            jQuery.facebox(function() {
                jQuery.get(href + '&facebox=1', function(data) {
                    jQuery.facebox(data);
                    self.viewed = [];
                    var current = $('.ui-tabs-nav li.ui-state-active a').attr('href');
                    $(current).scrollTop(0);
                    self.viewed[current] = 1;
                    self.scrollTabsTop();
                    self.initTaskLinks('.tab_task_link')
                })
            })
        }
        this.getQueryParam = function(query, name) {
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
            var matches = regex.exec(query);
            return (matches == null) ? '' : matches[1]
        }
        this.refresh = function(message, params) {
            if (this.loading) {
                return
            }
            this.loading = !0;
            var self = this;
            $('#results_container').mask(message + ' ...');
            $.ajax({
                type: 'GET',
                url: this.options.controller_url + '/search/',
                data: (params === !1) ? this.getParams(!0) : params,
                dataType: 'json',
                success: function(data, msg) {
                    $('#results_container').unmask();
                    $('#results_container').html(data.results);
                    self.initLinks();
                    self.loading = !1
                },
                error: function(xhr, status_text, error_thrown) {
                    $('#results_container').unmask();
                    self.loading = !1
                }
            })
        };
        this.getParams = function(json) {
            var self = this;
            var params = {
                'k': self.options.keywords,
                'p': self.options.priority,
                's': self.options.status,
                'sc': self.options.sort,
                'sd': self.options.sort_dir,
                'pg': self.options.page
            }
            return (json ? params : $.param(params))
        }
        this.getIntValue = function(id) {
            var i = parseInt($('#' + id).val().replace(/\D/g, ''), 10);
            return isNaN(i) ? 0 : i
        }
    }
})(jQuery);
(function($) {
    $.content = function(opt) {
        this.defaults = $.extend({
            'main': 0,
            'type': 0,
            'pathPrefix': ''
        }, opt);
        this.init = function() {
            var self = this;
            $(window).hashchange(function() {
                self.load()
            })
            if (location.href.split("#")[1]) {
                $('#content-container').html('<br /><br /><br /><br /><br />');
                $(window).hashchange()
            } else {
                this.initEvents()
            }
        };
        this.getHashData = function() {
            var hash = (location.href.split("#")[1] || "");
            hash = hash.replace(/^#?(.*)$/, '$1');
            hash = jQuery.trim(hash);
            if (hash != '') {
                var parts = hash.split('-');
                if (parts.length == 3) {
                    return {
                        'lang': parts[0],
                        'type': parts[1],
                        'topic': parts[2],
                        'main': this.defaults.main
                    }
                }
            }
            return {
                'lang': this.defaults.lang,
                'type': this.defaults.type,
                'topic': 0,
                'main': this.defaults.main
            }
        }
        this.load = function() {
            var self = this;
            $('#content-container').mask('Loading ...');
            var prefix = this.defaults.pathPrefix;
            $.ajax({
                type: 'GET',
                url: prefix + '/content/search/',
                data: this.getHashData(),
                dataType: 'json',
                success: function(data, msg) {
                    $('#content-container').unmask();
                    if (!data.success) {
                        $("#err_dialog").html(message);
                        $("#err_dialog").dialog({
                            modal: !0
                        })
                    } else {
                        $('#content-container').html(data.content);
                        self.initEvents()
                    }
                },
                error: function(xhr, status_text, error_thrown) {
                    $('#content-container').unmask()
                }
            })
        };
        this.initEvents = function() {
            var self = this;
            $('#type, #topic, #lang').change(function() {
                var lang = self.getStrValue('lang');
                var type = self.getIntValue('type');
                var topic = self.getIntValue('topic');
                window.location.hash = lang + '-' + type + '-' + topic
            });
            $('.content-more').click(function() {
                var id = $(this).attr('id');
                $('.' + id).show();
                $(this).hide();
                return !1
            })
        }
        this.getIntValue = function(id) {
            var i = parseInt($('#' + id).val().replace(/\D/g, ''), 10);
            return isNaN(i) ? 0 : i
        };
        this.getStrValue = function(id) {
            var str = $('#' + id).val().replace(/[^a-z]/g, '');
            return str
        }
    }
})(jQuery);
(function($) {
    $.rotator = function() {
        this.numBanners = null;
        this.interval = 14000;
        this.timeoutId = null;
        this.running = !1;
        this.current = null;
        this.loaded = [];
        this.init = function() {
            var self = this;
            $('.fp-banner-dots a').click(function() {
                self.running = !1;
                clearTimeout(self.timeoutId);
                var id = $(this).attr('id');
                var num = parseInt(id.substring(id.length - 1));
                self.rotateBanner(num);
                return !1
            });
            var currentId = $('#banners .current').attr('id');
            this.numBanners = $('.fp-banner').length;
            this.current = parseInt(currentId.substring(currentId.length - 1));
            this.loaded[this.current] = !0;
            if (this.numBanners == 1) {
                $('.fp-banner-dots').hide()
            } else {
                this.running = !0;
                this.preLoadNext();
                this.timeoutId = setTimeout(function() {
                    self.rotateBanner(self.getNextBannerNumber())
                }, this.interval)
            }
        };
        this.rotateBanner = function(num) {
            if (this.current == num) {
                return
            }
            $('#fp-banner' + this.current).fadeOut().removeClass('current');
            $('#fp-banner' + num).fadeIn().addClass('current');
            $('#fp-dot' + this.current).removeClass('on');
            $('#fp-dot' + num).addClass('on');
            this.current = num;
            this.preLoadNext();
            if (this.running) {
                var self = this;
                this.timeoutId = setTimeout(function() {
                    self.rotateBanner(self.getNextBannerNumber())
                }, this.interval)
            }
        }
        this.getNextBannerNumber = function() {
            return this.current + 1 > this.numBanners ? 1 : this.current + 1
        }
        this.preLoadNext = function() {
            var next = this.getNextBannerNumber();
            if (this.loaded[next]) {
                return
            }
            var bannerImg = new Image();
            bannerImg.src = $('#fp-banner-image' + next).css('background-image').replace(/^url|[\(\)"']/g, '');
            var bannerImgBack = new Image();
            bannerImgBack.src = $('#fp-banner' + next).css('background-image').replace(/^url|[\(\)"']/g, '');
            this.loaded[next] = !0
        }
    }
})(jQuery);
(function($) {
    $.slider = function() {
        this.numLogos = null;
        this.logoWidth = 120;
        this.first = null;
        this.init = function() {
            var self = this;
            this.first = 1;
            this.numLogos = $('#fp-logos a').length;
            $('.fp-logo-container .next').click(function() {
                var remaining = self.numLogos - self.first - self.getVisibleLogos() + 1;
                if (remaining > 0) {
                    $('#fp-logos').animate({
                        'left': '-' + (self.first * self.logoWidth) + 'px'
                    }, 'fast');
                    self.first++
                }
                return !1
            });
            $('.fp-logo-container a.prev').click(function() {
                if (self.first > 1) {
                    $('#fp-logos').animate({
                        'left': '-' + ((self.first - 2) * self.logoWidth) + 'px'
                    }, 'fast');
                    self.first--
                }
                return !1
            })
        };
        this.getVisibleLogos = function() {
            return Math.ceil($('#fp-logo-bar').width() / this.logoWidth)
        }
    }
})(jQuery);
(function($) {
    $.tco = function(opt) {
        this.defaults = {
            'server_count': 4,
            'cpu_count': 4,
            'core_count': 4,
            'years': 3,
            'isv_ids': [],
            'editions': [],
            'lead_captured': !1,
            'controller_url': '/tcosavings',
            'err_heading': 'Warning',
            'msg_calculating': 'Calculating',
            'msg_validating': 'Validating Selections',
            'err_edition_suffix': 'has the following constraints',
            'err_message_suffix': 'Please choose a less restrictive Edition that meets the requirements of your System Configuration'
        }
        this.valid = !0;
        this.last_error = '';
        this.options = $.extend({}, this.defaults, opt);
        this.init = function() {
            var self = this;
            var id_str = '#server_count, #cpu_count, #core_count, #years, #edition_' + this.options.isv_ids.join(', #edition_');
            $(id_str).change(function() {
                var id = $(this).attr('id');
                self.options[id] = self.getIntValue(id);
                if (id == 'server_count' || id == 'cpu_count' || id == 'core_count') {
                    $('#total_cpus').html(self.options.server_count * self.options.cpu_count);
                    $('#total_cores').html(self.options.server_count * self.options.cpu_count * self.options.core_count)
                }
                self.refresh(!1)
            })
            $('#tco_calculate_btn').click(function() {
                if ($('#tco_hash_value').val() != '') {
                    self.refresh(!0)
                } else {
                    self.submitForm()
                }
            })
            $('#tco_print').click(function() {
                self.print()
            })
            $('#server_count').bind('keypress', function(e) {
                if (e.keyCode == 13) {
                    $(this).blur();
                    return !1
                }
            })
        };
        this.refresh = function(top) {
            var self = this;
            var msg = this.options.lead_captured ? self.options.msg_calculating : self.options.msg_validating;
            if (top) {
                var new_position = $('#tco_graph').offset();
                window.scrollTo(new_position.left, new_position.top);
                var mask_id = '#tco_graph'
            } else {
                var mask_id = '#tco_form'
            }
            $(mask_id).mask(msg + ' ...');
            $.ajax({
                type: 'GET',
                url: this.options.controller_url + '/calculate/',
                data: this.getParams(!0),
                dataType: 'json',
                success: function(data, msg) {
                    $(mask_id).unmask();
                    if (!data.success) {
                        self.valid = !1;
                        self.clearHighlight();
                        self.displayError(data.failed_constraints)
                    } else {
                        self.valid = !0;
                        self.last_error = '';
                        self.clearHighlight();
                        if (self.options.lead_captured) {
                            $('#tcotable').html(data.table);
                            $('#graph_img').attr('src', data.graph)
                        }
                    }
                },
                error: function(xhr, status_text, error_thrown) {
                    $(mask_id).unmask()
                }
            })
        };
        this.getParams = function(json) {
            var self = this;
            var editions = new Array();
            $.each(this.options.isv_ids, function(index, value) {
                editions.push(self.getIntValue('edition_' + value))
            });
            var params = {
                'server_count': this.options.server_count,
                'cpu_count': this.options.cpu_count,
                'core_count': this.options.core_count,
                'years': this.options.years,
                'editions': editions,
                'hash': $('#tco_hash_value').val()
            }
            return (json ? params : decodeURIComponent($.param(params)))
        }
        this.getIntValue = function(id) {
            var i = parseInt($('#' + id).val().replace(/\D/g, ''), 10);
            return isNaN(i) ? 0 : i
        };
        this.displayError = function(failed_constraints) {
            var self = this;
            var message = '';
            $.each(failed_constraints, function(isv_id, fail) {
                $('#edition_' + isv_id + ', #edition_' + isv_id + ' option:selected').css('color', 'red');
                message += '<p><b>' + fail.edition + '</b> ' + self.options.err_edition_suffix + ':<ul>';
                $.each(fail.errors, function(index, error) {
                    message += '<li>' + error + '</li>'
                });
                message += '</ul></p>'
            });
            message += '<p>' + this.options.err_message_suffix + '</p>';
            $('#edition_' + this.options.isv_ids.join(' option:not(:selected), #edition_') + ' option:not(:selected)').css('color', 'black');
            this.last_error = message;
            $("#err_dialog").html(message);
            $("#err_dialog").dialog({
                modal: !0
            })
        };
        this.clearHighlight = function() {
            $('#edition_' + this.options.isv_ids.join(', #edition_')).css('color', 'black');
            $('#edition_' + this.options.isv_ids.join(' option, #edition_') + ' option').css('color', 'black')
        };
        this.submitForm = function() {
            if (this.valid) {
                $('#tco_calculate_btn').attr('disabled', 'disabled');
                $('#tco').submit()
            } else {
                $("#err_dialog").html(this.last_error);
                $("#err_dialog").dialog({
                    modal: !0
                })
            }
        };
        this.print = function() {
            window.open(this.options.controller_url + '/print/?' + this.getParams(!1), '_blank')
        }
    }
})(jQuery);
(function(a) {
    ($.browser = $.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);

function debounce(func, threshold, execAsap) {
    var timeout;
    return function debounced() {
        var obj = this,
            args = arguments;

        function delayed() {
            if (!execAsap)
                func.apply(obj, args);
            timeout = null
        };
        if (timeout)
            clearTimeout(timeout);
        else if (execAsap)
            func.apply(obj, args);
        timeout = setTimeout(delayed, threshold || 100)
    }
}(function($, sr) {
    $.fn[sr] = function(fn) {
        return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr)
    }
})($, 'smartresize');
(function($, ss) {
    $.fn[ss] = function(fn) {
        return fn ? this.bind('scroll', debounce(fn)) : this.trigger(ss)
    }
})($, 'smartscroll');
$(function() {
    var navStickyMinWidth = 860;
    var navMaxWidth = 1600;
    var ns = {
        'svg': 'http://www.w3.org/2000/svg'
    };
    if (!!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect) {
        if (!$('html').hasClass('svg')) {
            $('html').addClass('svg')
        }
    } else {
        $('html').removeClass('svg');
        $('html').addClass('no-svg')
    }
    $('#l2-nav-toggle').click(function() {
        if ($('#l2-search-toggle').hasClass('open-search')) {
            $('#l2-search-toggle').removeClass('open-search');
            $('#l3-search-container').removeClass('open-search')
        }
        if ($('#l2-nav-container').hasClass('open-nav')) {
            $('#l2-nav-container').removeClass('open-nav')
        } else {
            $('#l2-nav-container').addClass('open-nav')
        }
    });
    $('#l2-search-toggle').click(function() {
        if ($('#l2-nav-container').hasClass('open-nav')) {
            $('#l2-nav-container').removeClass('open-nav')
        }
        if ($('#l2-search-toggle').hasClass('open-search')) {
            $('#l2-search-toggle').removeClass('open-search');
            $('#l3-search-container').removeClass('open-search')
        } else {
            $('#l2-search-toggle').addClass('open-search');
            $('#l3-search-container').addClass('open-search')
        }
    });
    if (!$.browser.mobile) {
        var navObj = $('#sub-header');
        var bodyObj = $('body');
        var footerObj = $('footer');
        var headerObj = $('#l1-nav-container');
        var docTocObj = $('#docs-sidebar-toc');
        var lastScrollTop = 0;
        var navHeight = navObj.height();
        var l1Height = headerObj.height();
        var navPosition = null;
        var navDown = null
        var stickyNav = function() {
            if (docTocObj.length) {} else {
                var st = $(window).scrollTop();
                var width = $(window).width();
                if (st > lastScrollTop && st > (l1Height + navHeight)) {
                    if ((!navPosition || navPosition == 'static') && width > navStickyMinWidth) {
                        navObj.addClass('sticky');
                        if (width > navMaxWidth) {
                            navObj.css('max-width', navMaxWidth + 'px')
                        }
                        bodyObj.addClass('has-sticky-header').css('padding-top', navHeight + 'px');
                        navPosition = 'fixed'
                    } else if (navPosition == 'fixed' && width <= navStickyMinWidth) {
                        navObj.removeClass('sticky');
                        bodyObj.removeClass('has-sticky-header').css('padding-top', '0px');
                        navPosition = 'static'
                    }
                    if ((navDown === null || navDown === !0) && width > navStickyMinWidth) {
                        navObj.removeClass('nav-down').addClass('nav-up');
                        navDown = !1
                    } else if (navDown !== null && width <= navStickyMinWidth) {
                        navObj.removeClass('nav-down').removeClass('nav-up');
                        navDown = null
                    }
                } else {
                    if (st < l1Height) {
                        if (navDown) {
                            navObj.removeClass('nav-down').removeClass('nav-up');
                            navDown = null
                        }
                        if (!navPosition || navPosition == 'fixed') {
                            navObj.removeClass('sticky');
                            bodyObj.removeClass('has-sticky-header').css('padding-top', '0px');
                            navPosition = 'static'
                        }
                    } else {
                        if (navPosition == 'fixed' && width <= navStickyMinWidth) {
                            navObj.removeClass('sticky');
                            bodyObj.removeClass('has-sticky-header').css('padding-top', '0px');
                            navPosition = 'static';
                            navObj.removeClass('nav-down').removeClass('nav-up');
                            navDown = null
                        }
                        if (Math.abs(lastScrollTop - st) <= 5 && st > (l1Height + navHeight)) {
                            lastScrollTop = st;
                            return
                        }
                        if (navDown === !1 && st + $(window).height() < $(document).height()) {
                            navObj.removeClass('nav-up').addClass('nav-down');
                            navDown = !0
                        }
                    }
                }
                lastScrollTop = st
            }
        };
        stickyNav();
        $(window).scroll(function() {
            stickyNav()
        })
    }
    var created = !1;
    var setupSmallScreen = function() {
        var dynNav = $('#l2-nav li.active');
        if (dynNav) {
            $('#menu nav li').each(function() {
                var li = $(this).clone();
                $(li).find('ul').remove().end();
                $(li).addClass('drilldown');
                dynNav.after(li);
                dynNav = li
            })
        }
        $('#l1-search-form').clone().appendTo('#l3-search-container');
        var options = '<option selected="selected">Menu ...</option>';
        $('#footer-links .links a').each(function() {
            var link = $(this);
            options += '<option value="' + link.attr('href') + '">' + (link.parent().hasClass('top') ? '' : '&nbsp; |- ') + link.text() + '</option>'
        });
        $('<select id="footer-select" />').append(options).appendTo('#footer-nav');
        $('#footer-select').change(function() {
            window.location = $(this).find("option:selected").val()
        });
        created = !0
    }
    if ($(window).width() <= navStickyMinWidth && !created) {
        setupSmallScreen()
    }
    $(window).smartresize(function() {
        if (!$.browser.mobile) {
            stickyNav()
        }
        if ($(this).width() <= navStickyMinWidth && !created) {
            setupSmallScreen()
        }
    });
    if (!$.browser.mobile && !docTocObj.length && !$('#fp-docs-banner').length) {
        var scrollTo = function(hash) {
            var newTop = null;
            var width = $(window).width();
            var offset = (width > navStickyMinWidth) ? 50 : 10;
            if ($(hash).length) {
                newTop = $(hash).offset().top - offset
            } else if ($('a[name=' + hash.substr(1) + ']').length) {
                newTop = $('a[name=' + hash.substr(1) + ']').offset().top - offset
            }
            if (newTop) {
                $('html, body').animate({
                    scrollTop: newTop
                }, 300)
            }
        }
        var hash = location.hash ? location.hash : null;
        if (hash && navPosition == 'fixed') {
            scrollTo(hash)
        }
        $('a[href*="#"]').click(function(e) {
            var hash = $(this).attr('href');
            scrollTo(hash);
            return !1
        })
    }
});