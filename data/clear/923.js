if (!window.ustream) {
    window.ustream = {}
}
if (!ustream.labels) {
    ustream.labels = {}
}(function(l) {
    l["js.v3.datepicker.now"] = "Now";
    l["js.v3.datepicker.closetext"] = "Done";
    l["js.v3.datepicker.timeformat"] = "hh:mm TT";
    l["js.v3.datepicker.choose_time"] = "Choose Time";
    l["js.v3.datepicker.time"] = "Time:";
    l["js.v3.datepicker.time_hour"] = "Hour";
    l["js.v3.datepicker.time_minute"] = "Min";
    l["js.v3.datepicker.time_second"] = "Sec";
    l["js.v3.pretty_date.now"] = "just now";
    l["js.v3.pretty_date.one_min"] = "1 minute ago";
    l["js.v3.pretty_date.n_mins"] = "#n# minutes ago";
    l["js.v3.pretty_date.one_hour"] = "1 hour ago";
    l["js.v3.pretty_date.n_hours"] = "#n# hours ago";
    l["js.v3.pretty_date.yesterday"] = "Yesterday";
    l["js.v3.pretty_date.n_days"] = "#n# days ago";
    l["js.v3.validator_error.default_required"] = "This field is required.";
    l["js.v3.validator_error.default_number"] = "Please enter a valid number.";
    l["js.v3.validator_error.password_strength"] = "Must contain at least <span class=\"length\">7 characters<\/span>, including <span class=\"digit\">a number<\/span>, <span class=\"upper\">an uppercase<\/span> and <span class=\"lower\">a lowercase<\/span> letter.";
    l["js.v3.validator_error.strings_not_identical"] = "The value entered does not match the value of the other field.";
    l["js.v3.validator_error.default_creditcard"] = "Please enter a valid credit card number.";
    l["js.v3.validator_error.default_cvv"] = "Please enter a valid CVV.";
    l["js.v3.validator_error.default_url"] = "Please enter a valid URL. Example: http:\/\/www.example.com\/";
    l["js.v3.validator_error.default_email"] = "Please enter a valid email address.";
    l["js.v3.validator_error.default_min"] = "Please enter a value greater than or equal to {0}.";
    l["js.v3.validator_error.default_max"] = "Please enter a value less than or equal to {0}.";
    l["js.v3.validator_error.default_date"] = "Please enter a valid date.";
    l["js.v3.validator_error.invalid_format"] = "Invalid format.";
    l["js.payment_form.creditcard_invalid_date"] = "This card has already expired.";
    l["js.v3.validator_error.default_tel"] = "Please provide a valid phone number";
    l["js.v3.validator_error.color"] = "Color must be 3 or 6 length hexadecimal number.";
    l["js.validator_error.start_with_letter"] = "Please start the name with a letter";
    l["js.v3.validator_error.default_minlength"] = "Please enter at least {0} characters.";
    l["js.validator_error.group_required"] = "You need to fill all required field.";
    l["js.v3.validator_error.one_required"] = "Required";
    l["js.v6.validator_error.min_required"] = "You need to provide at least #min# options.";
    l["js.validator_error.tokenmultiselect"] = "Please select at least one option.";
    l["js.v6.validator_error.file_size_error"] = "Attached file(s) are too large.";
    l["js.v6.validator_error.file_type_error"] = "Invalid file(s) selected";
})(ustream.labels);
var requirejs, require, define;
! function(p) {
    var t, u, d, a, g = {},
        v = {},
        h = {},
        q = {},
        r = Object.prototype.hasOwnProperty,
        i = [].slice;

    function w(e, n) {
        return r.call(e, n)
    }

    function l(e, n) {
        var r, i, o, t, u, l, c, f, s, p, d = n && n.split("/"),
            a = h.map,
            g = a && a["*"] || {};
        if (e && "." === e.charAt(0))
            if (n) {
                for (e = (d = d.slice(0, d.length - 1)).concat(e.split("/")), f = 0; f < e.length; f += 1)
                    if ("." === (p = e[f])) e.splice(f, 1), f -= 1;
                    else if (".." === p) {
                    if (1 === f && (".." === e[2] || ".." === e[0])) break;
                    0 < f && (e.splice(f - 1, 2), f -= 2)
                }
                e = e.join("/")
            } else 0 === e.indexOf("./") && (e = e.substring(2));
        if ((d || g) && a) {
            for (f = (r = e.split("/")).length; 0 < f; f -= 1) {
                if (i = r.slice(0, f).join("/"), d)
                    for (s = d.length; 0 < s; s -= 1)
                        if ((o = a[d.slice(0, s).join("/")]) && (o = o[i])) {
                            t = o, u = f;
                            break
                        } if (t) break;
                !l && g && g[i] && (l = g[i], c = f)
            }!t && l && (t = l, u = c), t && (r.splice(0, u, t), e = r.join("/"))
        }
        return e
    }

    function j(e, n) {
        return function() {
            return u.apply(p, i.call(arguments, 0).concat([e, n]))
        }
    }

    function m(n) {
        return function(e) {
            g[n] = e
        }
    }

    function x(e) {
        if (w(v, e)) {
            var n = v[e];
            delete v[e], q[e] = !0, t.apply(p, n)
        }
        if (!w(g, e) && !w(q, e)) throw new Error("No " + e);
        return g[e]
    }

    function c(e) {
        var n, r = e ? e.indexOf("!") : -1;
        return -1 < r && (n = e.substring(0, r), e = e.substring(r + 1, e.length)), [n, e]
    }
    void 0 !== define && void 0 !== require && void 0 !== requirejs || (d = function(e, n) {
        var r, i, o = c(e),
            t = o[0];
        return e = o[1], t && (r = x(t = l(t, n))), t ? e = r && r.normalize ? r.normalize(e, (i = n, function(e) {
            return l(e, i)
        })) : l(e, n) : (t = (o = c(e = l(e, n)))[0], e = o[1], t && (r = x(t))), {
            f: t ? t + "!" + e : e,
            n: e,
            pr: t,
            p: r
        }
    }, a = {
        require: function(e) {
            return j(e)
        },
        exports: function(e) {
            var n = g[e];
            return void 0 !== n ? n : g[e] = {}
        },
        module: function(e) {
            return {
                id: e,
                uri: "",
                exports: g[e],
                config: (n = e, function() {
                    return h && h.config && h.config[n] || {}
                })
            };
            var n
        }
    }, t = function(e, n, r, i) {
        var o, t, u, l, c, f, s = [];
        if (i = i || e, "function" == typeof r) {
            for (n = !n.length && r.length ? ["require", "exports", "module"] : n, c = 0; c < n.length; c += 1) "require" === (t = (l = d(n[c], i)).f) ? s[c] = a.require(e) : "exports" === t ? (s[c] = a.exports(e), f = !0) : "module" === t ? o = s[c] = a.module(e) : w(g, t) || w(v, t) || w(q, t) ? s[c] = x(t) : l.p ? (l.p.load(l.n, j(i, !0), m(t), {}), s[c] = g[t]) : window.$ && window.$.console && $.console.log("Missing dependency: ", t);
            u = r.apply(g[e], s), e && (o && o.exports !== p && o.exports !== g[e] ? g[e] = o.exports : u === p && f || (g[e] = u))
        } else e && (g[e] = r)
    }, requirejs = require = u = function(e, n, r, i, o) {
        return "string" == typeof e ? a[e] ? a[e](n) : x(d(e, n).f) : (e.splice || (h = e, n.splice ? (e = n, n = r, r = null) : e = p), n = n || function() {}, "function" == typeof r && (r = i, i = o), i ? t(p, e, n, r) : setTimeout(function() {
            t(p, e, n, r)
        }, 4), u)
    }, u.config = function(e) {
        return (h = e).deps && u(h.deps, h.callback), u
    }, requirejs._defined = g, (define = function(e, n, r) {
        window.$ && window.$.console && ($.console.groupCollapsed("DEFINE", e), $.console.log("module", e), $.console.log("deps", n), $.console.groupEnd()), n.splice || (r = n, n = []), w(g, e) || w(v, e) || (v[e] = [e, n, r])
    }).amd = {
        jQuery: !0
    })
}();
! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    var f = [],
        h = C.document,
        c = f.slice,
        g = f.concat,
        s = f.push,
        i = f.indexOf,
        n = {},
        t = n.toString,
        m = n.hasOwnProperty,
        v = {},
        r = "1.12.4",
        E = function(e, t) {
            return new E.fn.init(e, t)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        a = /^-ms-/,
        u = /-([\da-z])/gi,
        l = function(e, t) {
            return t.toUpperCase()
        };

    function d(e) {
        var t = !!e && "length" in e && e.length,
            n = E.type(e);
        return "function" !== n && !E.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    E.fn = E.prototype = {
        jquery: r,
        constructor: E,
        selector: "",
        length: 0,
        toArray: function() {
            return c.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
        },
        pushStack: function(e) {
            var t = E.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return E.each(this, e)
        },
        map: function(n) {
            return this.pushStack(E.map(this, function(e, t) {
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
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: f.sort,
        splice: f.splice
    }, E.extend = E.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || E.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (i = arguments[s]))
                for (r in i) e = a[r], a !== (n = i[r]) && (l && n && (E.isPlainObject(n) || (t = E.isArray(n))) ? (t ? (t = !1, o = e && E.isArray(e) ? e : []) : o = e && E.isPlainObject(e) ? e : {}, a[r] = E.extend(l, o, n)) : void 0 !== n && (a[r] = n));
        return a
    }, E.extend({
        expando: "jQuery" + (r + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === E.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === E.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !E.isArray(e) && 0 <= t - parseFloat(t) + 1
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== E.type(e) || e.nodeType || E.isWindow(e)) return !1;
            try {
                if (e.constructor && !m.call(e, "constructor") && !m.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (!v.ownFirst)
                for (t in e) return m.call(e, t);
            for (t in e);
            return void 0 === t || m.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[t.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            e && E.trim(e) && (C.execScript || function(e) {
                C.eval.call(C, e)
            })(e)
        },
        camelCase: function(e) {
            return e.replace(a, "ms-").replace(u, l)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, r = 0;
            if (d(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
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
            return null != e && (d(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
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
            var r, i, o = 0,
                a = [];
            if (d(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (i = e[t], t = e, e = i), E.isFunction(e)) return n = c.call(arguments, 2), (r = function() {
                return e.apply(t || this, n.concat(c.call(arguments)))
            }).guid = e.guid = e.guid || E.guid++, r
        },
        now: function() {
            return +new Date
        },
        support: v
    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = f[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        var e, h, b, o, i, g, f, m, w, u, l, T, C, a, E, v, s, c, y, N = "sizzle" + 1 * new Date,
            x = n.document,
            k = 0,
            r = 0,
            d = oe(),
            p = oe(),
            S = oe(),
            A = function(e, t) {
                return e === t && (l = !0), 0
            },
            D = 1 << 31,
            j = {}.hasOwnProperty,
            t = [],
            L = t.pop,
            H = t.push,
            q = t.push,
            _ = t.slice,
            F = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            O = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            P = "\\[" + O + "*(" + R + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + O + "*\\]",
            B = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
            W = new RegExp(O + "+", "g"),
            I = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
            $ = new RegExp("^" + O + "*," + O + "*"),
            z = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
            X = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
            U = new RegExp(B),
            V = new RegExp("^" + R + "$"),
            Y = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + B),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + M + ")$", "i"),
                needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
            },
            J = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Z = /[+~]/,
            ee = /'|\\/g,
            te = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
            ne = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            re = function() {
                T()
            };
        try {
            q.apply(t = _.call(x.childNodes), x.childNodes), t[x.childNodes.length].nodeType
        } catch (e) {
            q = {
                apply: t.length ? function(e, t) {
                    H.apply(e, _.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function ie(e, t, n, r) {
            var i, o, a, s, u, l, c, f, d = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((t ? t.ownerDocument || t : x) !== C && T(t), t = t || C, E)) {
                if (11 !== p && (l = K.exec(e)))
                    if (i = l[1]) {
                        if (9 === p) {
                            if (!(a = t.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (d && (a = d.getElementById(i)) && y(t, a) && a.id === i) return n.push(a), n
                    } else {
                        if (l[2]) return q.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return q.apply(n, t.getElementsByClassName(i)), n
                    } if (h.qsa && !S[e + " "] && (!v || !v.test(e))) {
                    if (1 !== p) d = t, f = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(ee, "\\$&") : t.setAttribute("id", s = N), o = (c = g(e)).length, u = V.test(s) ? "#" + s : "[id='" + s + "']"; o--;) c[o] = u + " " + ge(c[o]);
                        f = c.join(","), d = Z.test(e) && pe(t.parentNode) || t
                    }
                    if (f) try {
                        return q.apply(n, d.querySelectorAll(f)), n
                    } catch (e) {} finally {
                        s === N && t.removeAttribute("id")
                    }
                }
            }
            return m(e.replace(I, "$1"), t, n, r)
        }

        function oe() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function ae(e) {
            return e[N] = !0, e
        }

        function se(e) {
            var t = C.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ue(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
        }

        function le(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
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
        for (e in h = ie.support = {}, i = ie.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, T = ie.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : x;
                return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)), h.attributes = se(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), h.getElementsByTagName = se(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), h.getElementsByClassName = Q.test(C.getElementsByClassName), h.getById = se(function(e) {
                    return a.appendChild(e).id = N, !C.getElementsByName || !C.getElementsByName(N).length
                }), h.getById ? (b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, b.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete b.find.ID, b.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }), b.find.TAG = h.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = h.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (h.qsa = Q.test(C.querySelectorAll)) && (se(function(e) {
                    a.appendChild(e).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + O + "*(?:value|" + M + ")"), e.querySelectorAll("[id~=" + N + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + N + "+*").length || v.push(".#.+[+~]")
                }), se(function(e) {
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + O + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (h.matchesSelector = Q.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && se(function(e) {
                    h.disconnectedMatch = c.call(e, "div"), c.call(e, "[s!='']:x"), s.push("!=", B)
                }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = Q.test(a.compareDocumentPosition), y = t || Q.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === x && y(x, e) ? -1 : t === C || t.ownerDocument === x && y(x, t) ? 1 : u ? F(u, e) - F(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? F(u, e) - F(u, t) : 0;
                    if (i === o) return le(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? le(a[r], s[r]) : a[r] === x ? -1 : s[r] === x ? 1 : 0
                }), C
            }, ie.matches = function(e, t) {
                return ie(e, null, null, t)
            }, ie.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && T(e), t = t.replace(X, "='$1']"), h.matchesSelector && E && !S[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < ie(t, C, null, [e]).length
            }, ie.contains = function(e, t) {
                return (e.ownerDocument || e) !== C && T(e), y(e, t)
            }, ie.attr = function(e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : h.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, ie.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ie.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !h.detectDuplicates, u = !h.sortStable && e.slice(0), e.sort(A), l) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return u = null, e
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
            }, (b = ie.selectors = {
                cacheLength: 50,
                createPseudo: ae,
                match: Y,
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
                        return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = g(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
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
                        var t = d[e + " "];
                        return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && d(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = ie.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(W, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, m) {
                        var v = "nth" !== h.slice(0, 3),
                            y = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === m ? function(e) {
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
                                    for (p = (s = (r = (i = (o = (a = c)[N] || (a[N] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[l] || (p = s = 0) || u.pop();)
                                        if (1 === a.nodeType && ++p && a === e) {
                                            i[h] = [k, s, p];
                                            break
                                        }
                                } else if (d && (p = s = (r = (i = (o = (a = e)[N] || (a[N] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === p)
                                    for (;
                                        (a = ++s && a && a[l] || (p = s = 0) || u.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++p || (d && ((i = (o = a[N] || (a[N] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, p]), a !== e)););
                                return (p -= m) === g || p % g == 0 && 0 <= p / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                        return a[N] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, t) {
                            for (var n, r = a(e, o), i = r.length; i--;) e[n = F(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: ae(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace(I, "$1"));
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
                        return V.test(n || "") || ie.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
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
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return J.test(e.nodeName)
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
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = ce(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = fe(e);

        function he() {}

        function ge(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function me(s, e, t) {
            var u = e.dir,
                l = t && "parentNode" === u,
                c = r++;
            return e.first ? function(e, t, n) {
                for (; e = e[u];)
                    if (1 === e.nodeType || l) return s(e, t, n)
            } : function(e, t, n) {
                var r, i, o, a = [k, c];
                if (n) {
                    for (; e = e[u];)
                        if ((1 === e.nodeType || l) && s(e, t, n)) return !0
                } else
                    for (; e = e[u];)
                        if (1 === e.nodeType || l) {
                            if ((r = (i = (o = e[N] || (e[N] = {}))[e.uniqueID] || (o[e.uniqueID] = {}))[u]) && r[0] === k && r[1] === c) return a[2] = r[2];
                            if ((i[u] = a)[2] = s(e, t, n)) return !0
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

        function xe(p, h, g, m, v, e) {
            return m && !m[N] && (m = xe(m)), v && !v[N] && (v = xe(v, e)), ae(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) ie(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !p || !e && h ? c : ye(c, s, p, n, r),
                    d = g ? v || (e ? p : l || m) ? [] : t : f;
                if (g && g(f, d, n, r), m)
                    for (i = ye(d, u), m(i, [], n, r), o = i.length; o--;)(a = i[o]) && (d[u[o]] = !(f[u[o]] = a));
                if (e) {
                    if (v || p) {
                        if (v) {
                            for (i = [], o = d.length; o--;)(a = d[o]) && i.push(f[o] = a);
                            v(null, d = [], i, r)
                        }
                        for (o = d.length; o--;)(a = d[o]) && -1 < (i = v ? F(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else d = ye(d === t ? d.splice(l, d.length) : d), v ? v(null, t, d, r) : q.apply(t, d)
            })
        }

        function be(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = me(function(e) {
                    return e === i
                }, a, !0), l = me(function(e) {
                    return -1 < F(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [me(ve(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[N]) {
                        for (n = ++s; n < r && !b.relative[e[n].type]; n++);
                        return xe(1 < s && ve(c), 1 < s && ge(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(I, "$1"), t, s < n && be(e.slice(s, n)), n < r && be(e = e.slice(n)), n < r && ge(e))
                    }
                    c.push(t)
                } return ve(c)
        }
        return he.prototype = b.filters = b.pseudos, b.setFilters = new he, g = ie.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = p[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (a = e, s = [], u = b.preFilter; a;) {
                for (o in n && !(r = $.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(I, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = Y[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? ie.error(e) : p(e, s).slice(0)
        }, f = ie.compile = function(e, t) {
            var n, m, v, y, x, r, i = [],
                o = [],
                a = S[e + " "];
            if (!a) {
                for (t || (t = g(e)), n = t.length; n--;)(a = be(t[n]))[N] ? i.push(a) : o.push(a);
                (a = S(e, (m = o, y = 0 < (v = i).length, x = 0 < m.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        d = w,
                        p = e || x && b.find.TAG("*", i),
                        h = k += null == d ? 1 : Math.random() || .1,
                        g = p.length;
                    for (i && (w = t === C || t || i); l !== g && null != (o = p[l]); l++) {
                        if (x && o) {
                            for (a = 0, t || o.ownerDocument === C || (T(o), n = !E); s = m[a++];)
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
                                for (; l--;) c[l] || f[l] || (f[l] = L.call(r));
                            f = ye(f)
                        }
                        q.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && ie.uniqueSort(r)
                    }
                    return i && (k = h, w = d), c
                }, y ? ae(r) : r))).selector = e
            }
            return a
        }, m = ie.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && g(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && h.getById && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = Y.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !b.relative[s = a.type]);)
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), Z.test(o[0].type) && pe(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && ge(o))) return q.apply(n, r), n;
                        break
                    }
            }
            return (l || f(e, c))(r, t, !E, n, !t || Z.test(e) && pe(t.parentNode) || t), n
        }, h.sortStable = N.split("").sort(A).join("") === N, h.detectDuplicates = !!l, T(), h.sortDetached = se(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("div"))
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
    }(C);
    E.find = p, E.expr = p.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = p.uniqueSort, E.text = p.getText, E.isXMLDoc = p.isXML, E.contains = p.contains;
    var y = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && E(e).is(n)) break;
                    r.push(e)
                } return r
        },
        x = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        b = E.expr.match.needsContext,
        w = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        T = /^.[^:#\[\.,]*$/;

    function N(e, n, r) {
        if (E.isFunction(n)) return E.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        });
        if (n.nodeType) return E.grep(e, function(e) {
            return e === n !== r
        });
        if ("string" == typeof n) {
            if (T.test(n)) return E.filter(n, e, r);
            n = E.filter(n, e)
        }
        return E.grep(e, function(e) {
            return -1 < E.inArray(e, n) !== r
        })
    }
    E.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, E.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(E(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (E.contains(r[t], this)) return !0
            }));
            for (t = 0; t < i; t++) E.find(e, r[t], n);
            return (n = this.pushStack(1 < i ? E.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(N(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(N(this, e || [], !0))
        },
        is: function(e) {
            return !!N(this, "string" == typeof e && b.test(e) ? E(e) : e || [], !1).length
        }
    });
    var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (E.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || k, "string" == typeof e) {
            if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : h, !0)), w.test(r[1]) && E.isPlainObject(t))
                    for (r in t) E.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            if ((i = h.getElementById(r[2])) && i.parentNode) {
                if (i.id !== r[2]) return k.find(e);
                this.length = 1, this[0] = i
            }
            return this.context = h, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : E.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), E.makeArray(e, this))
    }).prototype = E.fn, k = E(h);
    var A = /^(?:parents|prev(?:Until|All))/,
        D = {
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
    E.fn.extend({
        has: function(e) {
            var t, n = E(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (E.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = b.test(e) || "string" != typeof e ? E(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    } return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? E.inArray(this[0], E(e)) : E.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), E.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return y(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return y(e, "parentNode", n)
        },
        next: function(e) {
            return j(e, "nextSibling")
        },
        prev: function(e) {
            return j(e, "previousSibling")
        },
        nextAll: function(e) {
            return y(e, "nextSibling")
        },
        prevAll: function(e) {
            return y(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return y(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return y(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x(e.firstChild)
        },
        contents: function(e) {
            return E.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : E.merge([], e.childNodes)
        }
    }, function(r, i) {
        E.fn[r] = function(e, t) {
            var n = E.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (D[r] || (n = E.uniqueSort(n)), A.test(r) && (n = n.reverse())), this.pushStack(n)
        }
    });
    var L, H, q = /\S+/g;

    function _() {
        h.addEventListener ? (h.removeEventListener("DOMContentLoaded", F), C.removeEventListener("load", F)) : (h.detachEvent("onreadystatechange", F), C.detachEvent("onload", F))
    }

    function F() {
        (h.addEventListener || "load" === C.event.type || "complete" === h.readyState) && (_(), E.ready())
    }
    for (H in E.Callbacks = function(r) {
            var e, n;
            r = "string" == typeof r ? (e = r, n = {}, E.each(e.match(q) || [], function(e, t) {
                n[t] = !0
            }), n) : E.extend({}, r);
            var i, t, o, a, s = [],
                u = [],
                l = -1,
                c = function() {
                    for (a = r.once, o = i = !0; u.length; l = -1)
                        for (t = u.shift(); ++l < s.length;) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
                    r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
                },
                f = {
                    add: function() {
                        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                            E.each(e, function(e, t) {
                                E.isFunction(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== E.type(t) && n(t)
                            })
                        }(arguments), t && !i && c()), this
                    },
                    remove: function() {
                        return E.each(arguments, function(e, t) {
                            for (var n; - 1 < (n = E.inArray(t, s, n));) s.splice(n, 1), n <= l && l--
                        }), this
                    },
                    has: function(e) {
                        return e ? -1 < E.inArray(e, s) : 0 < s.length
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return a = u = [], s = t = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return a = !0, t || f.disable(), this
                    },
                    locked: function() {
                        return !!a
                    },
                    fireWith: function(e, t) {
                        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                    },
                    fire: function() {
                        return f.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!o
                    }
                };
            return f
        }, E.extend({
            Deferred: function(e) {
                var o = [
                        ["resolve", "done", E.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", E.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", E.Callbacks("memory")]
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
                            return E.Deferred(function(r) {
                                E.each(o, function(e, t) {
                                    var n = E.isFunction(i[e]) && i[e];
                                    s[t[1]](function() {
                                        var e = n && n.apply(this, arguments);
                                        e && E.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this === a ? r.promise() : this, n ? [e] : arguments)
                                    })
                                }), i = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? E.extend(e, a) : a
                        }
                    },
                    s = {};
                return a.pipe = a.then, E.each(o, function(e, t) {
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
                    s = 1 !== a || e && E.isFunction(e.promise) ? a : 0,
                    u = 1 === s ? e : E.Deferred(),
                    l = function(t, n, r) {
                        return function(e) {
                            n[t] = this, r[t] = 1 < arguments.length ? c.call(arguments) : e, r === i ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                        }
                    };
                if (1 < a)
                    for (i = new Array(a), t = new Array(a), n = new Array(a); r < a; r++) o[r] && E.isFunction(o[r].promise) ? o[r].promise().progress(l(r, t, i)).done(l(r, n, o)).fail(u.reject) : --s;
                return s || u.resolveWith(n, o), u.promise()
            }
        }), E.fn.ready = function(e) {
            return E.ready.promise().done(e), this
        }, E.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? E.readyWait++ : E.ready(!0)
            },
            ready: function(e) {
                (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || (L.resolveWith(h, [E]), E.fn.triggerHandler && (E(h).triggerHandler("ready"), E(h).off("ready")))
            }
        }), E.ready.promise = function(e) {
            if (!L)
                if (L = E.Deferred(), "complete" === h.readyState || "loading" !== h.readyState && !h.documentElement.doScroll) C.setTimeout(E.ready);
                else if (h.addEventListener) h.addEventListener("DOMContentLoaded", F), C.addEventListener("load", F);
            else {
                h.attachEvent("onreadystatechange", F), C.attachEvent("onload", F);
                var n = !1;
                try {
                    n = null == C.frameElement && h.documentElement
                } catch (e) {}
                n && n.doScroll && function t() {
                    if (!E.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return C.setTimeout(t, 50)
                        }
                        _(), E.ready()
                    }
                }()
            }
            return L.promise(e)
        }, E.ready.promise(), E(v)) break;
    v.ownFirst = "0" === H, v.inlineBlockNeedsLayout = !1, E(function() {
            var e, t, n, r;
            (n = h.getElementsByTagName("body")[0]) && n.style && (t = h.createElement("div"), (r = h.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", v.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
        }),
        function() {
            var e = h.createElement("div");
            v.deleteExpando = !0;
            try {
                delete e.test
            } catch (e) {
                v.deleteExpando = !1
            }
            e = null
        }();
    var M, O = function(e) {
            var t = E.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
        },
        R = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        P = /([A-Z])/g;

    function B(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(P, "-$1").toLowerCase();
            if ("string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : R.test(n) ? E.parseJSON(n) : n)
                } catch (e) {}
                E.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function W(e) {
        var t;
        for (t in e)
            if (("data" !== t || !E.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function I(e, t, n, r) {
        if (O(e)) {
            var i, o, a = E.expando,
                s = e.nodeType,
                u = s ? E.cache : e,
                l = s ? e[a] : e[a] && a;
            if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = f.pop() || E.guid++ : a), u[l] || (u[l] = s ? {} : {
                toJSON: E.noop
            }), "object" != typeof t && "function" != typeof t || (r ? u[l] = E.extend(u[l], t) : u[l].data = E.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[E.camelCase(t)] = n), "string" == typeof t ? null == (i = o[t]) && (i = o[E.camelCase(t)]) : i = o, i
        }
    }

    function $(e, t, n) {
        if (O(e)) {
            var r, i, o = e.nodeType,
                a = o ? E.cache : e,
                s = o ? e[E.expando] : E.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    i = (t = E.isArray(t) ? t.concat(E.map(t, E.camelCase)) : t in r ? [t] : (t = E.camelCase(t)) in r ? [t] : t.split(" ")).length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !W(r) : !E.isEmptyObject(r)) return
                }(n || (delete a[s].data, W(a[s]))) && (o ? E.cleanData([e], !0) : v.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
            }
        }
    }
    E.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? E.cache[e[E.expando]] : e[E.expando]) && !W(e)
        },
        data: function(e, t, n) {
            return I(e, t, n)
        },
        removeData: function(e, t) {
            return $(e, t)
        },
        _data: function(e, t, n) {
            return I(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return $(e, t, !0)
        }
    }), E.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = E.data(o), 1 === o.nodeType && !E._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && B(o, r = E.camelCase(r.slice(5)), i[r]);
                    E._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                E.data(this, e)
            }) : 1 < arguments.length ? this.each(function() {
                E.data(this, e, t)
            }) : o ? B(o, e, E.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                E.removeData(this, e)
            })
        }
    }), E.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = E._data(e, t), n && (!r || E.isArray(n) ? r = E._data(e, t, E.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = E.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = E._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                E.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return E._data(e, n) || E._data(e, n, {
                empty: E.Callbacks("once memory").add(function() {
                    E._removeData(e, t + "queue"), E._removeData(e, n)
                })
            })
        }
    }), E.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                E.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = E.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = E._data(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    }), v.shrinkWrapBlocks = function() {
        return null != M ? M : (M = !1, (t = h.getElementsByTagName("body")[0]) && t.style ? (e = h.createElement("div"), (n = h.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(h.createElement("div")).style.width = "5px", M = 3 !== e.offsetWidth), t.removeChild(n), M) : void 0);
        var e, t, n
    };
    var z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        X = new RegExp("^(?:([+-])=|)(" + z + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(e, t) {
            return e = t || e, "none" === E.css(e, "display") || !E.contains(e.ownerDocument, e)
        };

    function Y(e, t, n, r) {
        var i, o = 1,
            a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return E.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (E.cssNumber[t] ? "" : "px"),
            c = (E.cssNumber[t] || "px" !== l && +u) && X.exec(E.css(e, t));
        if (c && c[3] !== l)
            for (l = l || c[3], n = n || [], c = +u || 1; c /= o = o || ".5", E.style(e, t, c + l), o !== (o = s() / u) && 1 !== o && --a;);
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var J, G, Q, K = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === E.type(n))
                for (s in i = !0, n) K(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, E.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(E(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        Z = /^(?:checkbox|radio)$/i,
        ee = /<([\w:-]+)/,
        te = /^$|\/(?:java|ecma)script/i,
        ne = /^\s+/,
        re = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ie(e) {
        var t = re.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }
    J = h.createElement("div"), G = h.createDocumentFragment(), Q = h.createElement("input"), J.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", v.leadingWhitespace = 3 === J.firstChild.nodeType, v.tbody = !J.getElementsByTagName("tbody").length, v.htmlSerialize = !!J.getElementsByTagName("link").length, v.html5Clone = "<:nav></:nav>" !== h.createElement("nav").cloneNode(!0).outerHTML, Q.type = "checkbox", Q.checked = !0, G.appendChild(Q), v.appendChecked = Q.checked, J.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!J.cloneNode(!0).lastChild.defaultValue, G.appendChild(J), (Q = h.createElement("input")).setAttribute("type", "radio"), Q.setAttribute("checked", "checked"), Q.setAttribute("name", "t"), J.appendChild(Q), v.checkClone = J.cloneNode(!0).cloneNode(!0).lastChild.checked, v.noCloneEvent = !!J.addEventListener, J[E.expando] = 1, v.attributes = !J.getAttribute(E.expando);
    var oe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: v.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };

    function ae(e, t) {
        var n, r, i = 0,
            o = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || E.nodeName(r, t) ? o.push(r) : E.merge(o, ae(r, t));
        return void 0 === t || t && E.nodeName(e, t) ? E.merge([e], o) : o
    }

    function se(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) E._data(n, "globalEval", !t || E._data(t[r], "globalEval"))
    }
    oe.optgroup = oe.option, oe.tbody = oe.tfoot = oe.colgroup = oe.caption = oe.thead, oe.th = oe.td;
    var ue = /<|&#?\w+;/,
        le = /<tbody/i;

    function ce(e) {
        Z.test(e.type) && (e.defaultChecked = e.checked)
    }

    function fe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f, d = e.length, p = ie(t), h = [], g = 0; g < d; g++)
            if ((a = e[g]) || 0 === a)
                if ("object" === E.type(a)) E.merge(h, a.nodeType ? [a] : a);
                else if (ue.test(a)) {
            for (u = u || p.appendChild(t.createElement("div")), l = (ee.exec(a) || ["", ""])[1].toLowerCase(), f = oe[l] || oe._default, u.innerHTML = f[1] + E.htmlPrefilter(a) + f[2], o = f[0]; o--;) u = u.lastChild;
            if (!v.leadingWhitespace && ne.test(a) && h.push(t.createTextNode(ne.exec(a)[0])), !v.tbody)
                for (o = (a = "table" !== l || le.test(a) ? "<table>" !== f[1] || le.test(a) ? 0 : u : u.firstChild) && a.childNodes.length; o--;) E.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (E.merge(h, u.childNodes), u.textContent = ""; u.firstChild;) u.removeChild(u.firstChild);
            u = p.lastChild
        } else h.push(t.createTextNode(a));
        for (u && p.removeChild(u), v.appendChecked || E.grep(ae(h, "input"), ce), g = 0; a = h[g++];)
            if (r && -1 < E.inArray(a, r)) i && i.push(a);
            else if (s = E.contains(a.ownerDocument, a), u = ae(p.appendChild(a), "script"), s && se(u), n)
            for (o = 0; a = u[o++];) te.test(a.type || "") && n.push(a);
        return u = null, p
    }! function() {
        var e, t, n = h.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) t = "on" + e, (v[e] = t in C) || (n.setAttribute(t, "t"), v[e] = !1 === n.attributes[t].expando);
        n = null
    }();
    var de = /^(?:input|select|textarea)$/i,
        pe = /^key/,
        he = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ge = /^(?:focusinfocus|focusoutblur)$/,
        me = /^([^.]*)(?:\.(.+)|)/;

    function ve() {
        return !0
    }

    function ye() {
        return !1
    }

    function xe() {
        try {
            return h.activeElement
        } catch (e) {}
    }

    function be(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) be(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ye;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return E().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = E.guid++)), e.each(function() {
            E.event.add(this, t, i, r, n)
        })
    }
    E.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, m = E._data(e);
            if (m) {
                for (n.handler && (n = (u = n).handler, i = u.selector), n.guid || (n.guid = E.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || ((c = m.handle = function(e) {
                        return void 0 === E || e && E.event.triggered === e.type ? void 0 : E.event.dispatch.apply(c.elem, arguments)
                    }).elem = e), s = (t = (t || "").match(q) || [""]).length; s--;) p = g = (o = me.exec(t[s]) || [])[1], h = (o[2] || "").split(".").sort(), p && (l = E.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, l = E.event.special[p] || {}, f = E.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && E.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, u), (d = a[p]) || ((d = a[p] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(e, r, h, c) || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), E.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, m = E.hasData(e) && E._data(e);
            if (m && (c = m.events)) {
                for (l = (t = (t || "").match(q) || [""]).length; l--;)
                    if (p = g = (s = me.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = E.event.special[p] || {}, d = c[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = d.length; o--;) a = d[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
                        u && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || E.removeEvent(e, p, m.handle), delete c[p])
                    } else
                        for (p in c) E.event.remove(e, p + t[l], n, r, !0);
                E.isEmptyObject(c) && (delete m.handle, E._removeData(e, "events"))
            }
        },
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f = [n || h],
                d = m.call(e, "type") ? e.type : e,
                p = m.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = l = n = n || h, 3 !== n.nodeType && 8 !== n.nodeType && !ge.test(d + E.event.triggered) && (-1 < d.indexOf(".") && (d = (p = d.split(".")).shift(), p.sort()), o = d.indexOf(":") < 0 && "on" + d, (e = e[E.expando] ? e : new E.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), u = E.event.special[d] || {}, r || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!r && !u.noBubble && !E.isWindow(n)) {
                    for (s = u.delegateType || d, ge.test(s + d) || (a = a.parentNode); a; a = a.parentNode) f.push(a), l = a;
                    l === (n.ownerDocument || h) && f.push(l.defaultView || l.parentWindow || C)
                }
                for (c = 0;
                    (a = f[c++]) && !e.isPropagationStopped();) e.type = 1 < c ? s : u.bindType || d, (i = (E._data(a, "events") || {})[e.type] && E._data(a, "handle")) && i.apply(a, t), (i = o && a[o]) && i.apply && O(a) && (e.result = i.apply(a, t), !1 === e.result && e.preventDefault());
                if (e.type = d, !r && !e.isDefaultPrevented() && (!u._default || !1 === u._default.apply(f.pop(), t)) && O(n) && o && n[d] && !E.isWindow(n)) {
                    (l = n[o]) && (n[o] = null), E.event.triggered = d;
                    try {
                        n[d]()
                    } catch (e) {}
                    E.event.triggered = void 0, l && (n[o] = l)
                }
                return e.result
            }
        },
        dispatch: function(e) {
            e = E.event.fix(e);
            var t, n, r, i, o, a, s = c.call(arguments),
                u = (E._data(this, "events") || {})[e.type] || [],
                l = E.event.special[e.type] || {};
            if ((s[0] = e).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (a = E.event.handlers.call(this, e, u), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                        for (r = [], n = 0; n < s; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? -1 < E(i, this).index(u) : E.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    } return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[E.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = he.test(i) ? this.mouseHooks : pe.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new E.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
            return e.target || (e.target = o.srcElement || h), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
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
                return null == e.pageX && null != t.clientX && (i = (r = e.target.ownerDocument || h).documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== xe() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === xe() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (E.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(e) {
                    return E.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var r = E.extend(new E.Event, n, {
                type: e,
                isSimulated: !0
            });
            E.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
        }
    }, E.removeEvent = h.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (void 0 === e[r] && (e[r] = null), e.detachEvent(r, n))
    }, E.Event = function(e, t) {
        if (!(this instanceof E.Event)) return new E.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ve : ye) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || E.now(), this[E.expando] = !0
    }, E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: ye,
        isPropagationStopped: ye,
        isImmediatePropagationStopped: ye,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ve, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ve, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ve, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        E.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), v.submit || (E.event.special.submit = {
        setup: function() {
            if (E.nodeName(this, "form")) return !1;
            E.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = E.nodeName(t, "input") || E.nodeName(t, "button") ? E.prop(t, "form") : void 0;
                n && !E._data(n, "submit") && (E.event.add(n, "submit._submit", function(e) {
                    e._submitBubble = !0
                }), E._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && E.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            if (E.nodeName(this, "form")) return !1;
            E.event.remove(this, "._submit")
        }
    }), v.change || (E.event.special.change = {
        setup: function() {
            if (de.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (E.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), E.event.add(this, "click._change", function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), E.event.simulate("change", this, e)
            })), !1;
            E.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                de.test(t.nodeName) && !E._data(t, "change") && (E.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || E.event.simulate("change", this.parentNode, e)
                }), E._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return E.event.remove(this, "._change"), !de.test(this.nodeName)
        }
    }), v.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            E.event.simulate(r, e.target, E.event.fix(e))
        };
        E.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = E._data(e, r);
                t || e.addEventListener(n, i, !0), E._data(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = E._data(e, r) - 1;
                t ? E._data(e, r, t) : (e.removeEventListener(n, i, !0), E._removeData(e, r))
            }
        }
    }), E.fn.extend({
        on: function(e, t, n, r) {
            return be(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return be(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ye), this.each(function() {
                E.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                E.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return E.event.trigger(e, t, n, !0)
        }
    });
    var we = / jQuery\d+="(?:null|\d+)"/g,
        Te = new RegExp("<(?:" + re + ")[\\s/>]", "i"),
        Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Ee = /<script|<style|<link/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ke = /^true\/(.*)/,
        Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ae = ie(h).appendChild(h.createElement("div"));

    function De(e, t) {
        return E.nodeName(e, "table") && E.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function je(e) {
        return e.type = (null !== E.find.attr(e, "type")) + "/" + e.type, e
    }

    function Le(e) {
        var t = ke.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function He(e, t) {
        if (1 === t.nodeType && E.hasData(e)) {
            var n, r, i, o = E._data(e),
                a = E._data(t, o),
                s = o.events;
            if (s)
                for (n in delete a.handle, a.events = {}, s)
                    for (r = 0, i = s[n].length; r < i; r++) E.event.add(t, n, s[n][r]);
            a.data && (a.data = E.extend({}, a.data))
        }
    }

    function qe(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !v.noCloneEvent && t[E.expando]) {
                for (r in (i = E._data(t)).events) E.removeEvent(t, r, i.handle);
                t.removeAttribute(E.expando)
            }
            "script" === n && t.text !== e.text ? (je(t).text = e.text, Le(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), v.html5Clone && e.innerHTML && !E.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Z.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function _e(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            d = f - 1,
            p = r[0],
            h = E.isFunction(p);
        if (h || 1 < f && "string" == typeof p && !v.checkClone && Ne.test(p)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = p.call(this, e, t.html())), _e(t, r, i, o)
        });
        if (f && (e = (l = fe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === l.childNodes.length && (l = e), e || o)) {
            for (a = (s = E.map(ae(l, "script"), je)).length; c < f; c++) t = l, c !== d && (t = E.clone(t, !0, !0), a && E.merge(s, ae(t, "script"))), i.call(n[c], t, c);
            if (a)
                for (u = s[s.length - 1].ownerDocument, E.map(s, Le), c = 0; c < a; c++) t = s[c], te.test(t.type || "") && !E._data(t, "globalEval") && E.contains(u, t) && (t.src ? E._evalUrl && E._evalUrl(t.src) : E.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Se, "")));
            l = e = null
        }
        return n
    }

    function Fe(e, t, n) {
        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(ae(r)), r.parentNode && (n && E.contains(r.ownerDocument, r) && se(ae(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    E.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ce, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u = E.contains(e.ownerDocument, e);
            if (v.html5Clone || E.isXMLDoc(e) || !Te.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ae.innerHTML = e.outerHTML, Ae.removeChild(o = Ae.firstChild)), !(v.noCloneEvent && v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                for (r = ae(o), s = ae(e), a = 0; null != (i = s[a]); ++a) r[a] && qe(i, r[a]);
            if (t)
                if (n)
                    for (s = s || ae(e), r = r || ae(o), a = 0; null != (i = s[a]); a++) He(i, r[a]);
                else He(e, o);
            return 0 < (r = ae(o, "script")).length && se(r, !u && ae(e, "script")), r = s = i = null, o
        },
        bazsiCache: "2018-03-21 14:05",
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = E.expando, u = E.cache, l = v.attributes, c = E.event.special; null != (n = e[a]); a++)
                if ((t || O(n)) && (o = (i = n[s]) && u[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? E.event.remove(n, r) : E.removeEvent(n, r, o.handle);
                    u[i] && (delete u[i], l || void 0 === n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), f.push(i))
                }
        }
    }), E.fn.extend({
        domManip: _e,
        detach: function(e) {
            return Fe(this, e, !0)
        },
        remove: function(e) {
            return Fe(this, e)
        },
        text: function(e) {
            return K(this, function(e) {
                return void 0 === e ? E.text(this) : this.empty().append((this[0] && this[0].ownerDocument || h).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return _e(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return _e(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = De(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return _e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return _e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && E.cleanData(ae(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && E.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return E.clone(this, e, t)
            })
        },
        html: function(e) {
            return K(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(we, "") : void 0;
                if ("string" == typeof e && !Ee.test(e) && (v.htmlSerialize || !Te.test(e)) && (v.leadingWhitespace || !ne.test(e)) && !oe[(ee.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(ae(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return _e(this, arguments, function(e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(ae(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        E.fn[e] = function(e) {
            for (var t, n = 0, r = [], i = E(e), o = i.length - 1; n <= o; n++) t = n === o ? this : this.clone(!0), E(i[n])[a](t), s.apply(r, t.get());
            return this.pushStack(r)
        }
    });
    var Me, Oe = {
        HTML: "block",
        BODY: "block"
    };

    function Re(e, t) {
        var n = E(t.createElement(e)).appendTo(t.body),
            r = E.css(n[0], "display");
        return n.detach(), r
    }

    function Pe(e) {
        var t = h,
            n = Oe[e];
        return n || ("none" !== (n = Re(e, t)) && n || ((t = ((Me = (Me || E("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Me[0].contentDocument).document).write(), t.close(), n = Re(e, t), Me.detach()), Oe[e] = n), n
    }
    var Be = /^margin/,
        We = new RegExp("^(" + z + ")(?!px)[a-z%]+$", "i"),
        Ie = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
            return i
        },
        $e = h.documentElement;
    ! function() {
        var r, i, o, a, s, u, l = h.createElement("div"),
            c = h.createElement("div");

        function e() {
            var e, t, n = h.documentElement;
            n.appendChild(l), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", r = o = u = !1, i = s = !0, C.getComputedStyle && (t = C.getComputedStyle(c), r = "1%" !== (t || {}).top, u = "2px" === (t || {}).marginLeft, o = "4px" === (t || {
                width: "4px"
            }).width, c.style.marginRight = "50%", i = "4px" === (t || {
                marginRight: "4px"
            }).marginRight, (e = c.appendChild(h.createElement("div"))).style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", c.style.width = "1px", s = !parseFloat((C.getComputedStyle(e) || {}).marginRight), c.removeChild(e)), c.style.display = "none", (a = 0 === c.getClientRects().length) && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", (e = c.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", a = 0 === e[0].offsetHeight)), n.removeChild(l)
        }
        c.style && (c.style.cssText = "float:left;opacity:.5", v.opacity = "0.5" === c.style.opacity, v.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === c.style.backgroundClip, (l = h.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), v.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, E.extend(v, {
            reliableHiddenOffsets: function() {
                return null == r && e(), a
            },
            boxSizingReliable: function() {
                return null == r && e(), o
            },
            pixelMarginRight: function() {
                return null == r && e(), i
            },
            pixelPosition: function() {
                return null == r && e(), r
            },
            reliableMarginRight: function() {
                return null == r && e(), s
            },
            reliableMarginLeft: function() {
                return null == r && e(), u
            }
        }))
    }();
    var ze, Xe, Ue = /^(top|right|bottom|left)$/;

    function Ve(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    C.getComputedStyle ? (ze = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C), t.getComputedStyle(e)
    }, Xe = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return "" !== (a = (n = n || ze(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== a || E.contains(e.ownerDocument, e) || (a = E.style(e, t)), n && !v.pixelMarginRight() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), void 0 === a ? a : a + ""
    }) : $e.currentStyle && (ze = function(e) {
        return e.currentStyle
    }, Xe = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return null == (a = (n = n || ze(e)) ? n[t] : void 0) && s && s[t] && (a = s[t]), We.test(a) && !Ue.test(t) && (r = s.left, (o = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
    });
    var Ye = /alpha\([^)]*\)/i,
        Je = /opacity\s*=\s*([^)]*)/i,
        Ge = /^(none|table(?!-c[ea]).+)/,
        Qe = new RegExp("^(" + z + ")(.*)$", "i"),
        Ke = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ze = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        et = ["Webkit", "O", "Moz", "ms"],
        tt = h.createElement("div").style;

    function nt(e) {
        if (e in tt) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = et.length; n--;)
            if ((e = et[n] + t) in tt) return e
    }

    function rt(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)(r = e[a]).style && (o[a] = E._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && V(r) && (o[a] = E._data(r, "olddisplay", Pe(r.nodeName)))) : (i = V(r), (n && "none" !== n || !i) && E._data(r, "olddisplay", i ? n : E.css(r, "display"))));
        for (a = 0; a < s; a++)(r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function it(e, t, n) {
        var r = Qe.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function ot(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += E.css(e, n + U[o], !0, i)), r ? ("content" === n && (a -= E.css(e, "padding" + U[o], !0, i)), "margin" !== n && (a -= E.css(e, "border" + U[o] + "Width", !0, i))) : (a += E.css(e, "padding" + U[o], !0, i), "padding" !== n && (a += E.css(e, "border" + U[o] + "Width", !0, i)));
        return a
    }

    function at(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = ze(e),
            a = v.boxSizing && "border-box" === E.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = Xe(e, t, o)) < 0 || null == i) && (i = e.style[t]), We.test(i)) return i;
            r = a && (v.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + ot(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function st(e, t, n, r, i) {
        return new st.prototype.init(e, t, n, r, i)
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Xe(e, "opacity");
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
            float: v.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = E.camelCase(t),
                    u = e.style;
                if (t = E.cssProps[s] || (E.cssProps[s] = nt(s) || s), a = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                if ("string" === (o = typeof n) && (i = X.exec(n)) && i[1] && (n = Y(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (E.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                    u[t] = n
                } catch (e) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = E.camelCase(t);
            return t = E.cssProps[s] || (E.cssProps[s] = nt(s) || s), (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Xe(e, t, r)), "normal" === o && t in Ze && (o = Ze[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }), E.each(["height", "width"], function(e, i) {
        E.cssHooks[i] = {
            get: function(e, t, n) {
                if (t) return Ge.test(E.css(e, "display")) && 0 === e.offsetWidth ? Ie(e, Ke, function() {
                    return at(e, i, n)
                }) : at(e, i, n)
            },
            set: function(e, t, n) {
                var r = n && ze(e);
                return it(0, t, n ? ot(e, i, n, v.boxSizing && "border-box" === E.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), v.opacity || (E.cssHooks.opacity = {
        get: function(e, t) {
            return Je.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = E.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === E.trim(o.replace(Ye, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = Ye.test(o) ? o.replace(Ye, i) : o + " " + i)
        }
    }), E.cssHooks.marginRight = Ve(v.reliableMarginRight, function(e, t) {
        if (t) return Ie(e, {
            display: "inline-block"
        }, Xe, [e, "marginRight"])
    }), E.cssHooks.marginLeft = Ve(v.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Xe(e, "marginLeft")) || (E.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - Ie(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        }) : 0)) + "px"
    }), E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        E.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + U[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, Be.test(i) || (E.cssHooks[i + o].set = it)
    }), E.fn.extend({
        css: function(e, t) {
            return K(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (E.isArray(t)) {
                    for (r = ze(e), i = t.length; a < i; a++) o[t[a]] = E.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return rt(this, !0)
        },
        hide: function() {
            return rt(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                V(this) ? E(this).show() : E(this).hide()
            })
        }
    }), ((E.Tween = st).prototype = {
        constructor: st,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (E.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = st.propHooks[this.prop];
            return e && e.get ? e.get(this) : st.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = st.propHooks[this.prop];
            return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : st.propHooks._default.set(this), this
        }
    }).init.prototype = st.prototype, (st.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[E.cssProps[e.prop]] && !E.cssHooks[e.prop] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = st.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, E.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, E.fx = st.prototype.init, E.fx.step = {};
    var ut, lt, ct, ft, dt, pt, ht, gt = /^(?:toggle|show|hide)$/,
        mt = /queueHooks$/;

    function vt() {
        return C.setTimeout(function() {
            ut = void 0
        }), ut = E.now()
    }

    function yt(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = U[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function xt(e, t, n) {
        for (var r, i = (bt.tweeners[t] || []).concat(bt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function bt(o, e, t) {
        var n, a, r = 0,
            i = bt.prefilters.length,
            s = E.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = ut || vt(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: E.extend({}, e),
                opts: E.extend(!0, {
                    specialEasing: {},
                    easing: E.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: ut || vt(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = E.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
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
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = E.camelCase(n)], o = e[n], E.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = E.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = bt.prefilters[r].call(l, o, c, l.opts)) return E.isFunction(n.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = E.proxy(n.stop, n)), n;
        return E.map(c, xt, l), E.isFunction(l.opts.start) && l.opts.start.call(o, l), E.fx.timer(E.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    E.Animation = E.extend(bt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return Y(n.elem, e, X.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            E.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(q);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], bt.tweeners[n] = bt.tweeners[n] || [], bt.tweeners[n].unshift(t)
        },
        prefilters: [function(t, e, n) {
            var r, i, o, a, s, u, l, c = this,
                f = {},
                d = t.style,
                p = t.nodeType && V(t),
                h = E._data(t, "fxshow");
            for (r in n.queue || (null == (s = E._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || u()
                }), s.unqueued++, c.always(function() {
                    c.always(function() {
                        s.unqueued--, E.queue(t, "fx").length || s.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ("none" === (l = E.css(t, "display")) ? E._data(t, "olddisplay") || Pe(t.nodeName) : l) && "none" === E.css(t, "float") && (v.inlineBlockNeedsLayout && "inline" !== Pe(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", v.shrinkWrapBlocks() || c.always(function() {
                    d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
                })), e)
                if (i = e[r], gt.exec(i)) {
                    if (delete e[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
                        if ("show" !== i || !h || void 0 === h[r]) continue;
                        p = !0
                    }
                    f[r] = h && h[r] || E.style(t, r)
                } else l = void 0;
            if (E.isEmptyObject(f)) "inline" === ("none" === l ? Pe(t.nodeName) : l) && (d.display = l);
            else
                for (r in h ? "hidden" in h && (p = h.hidden) : h = E._data(t, "fxshow", {}), o && (h.hidden = !p), p ? E(t).show() : c.done(function() {
                        E(t).hide()
                    }), c.done(function() {
                        var e;
                        for (e in E._removeData(t, "fxshow"), f) E.style(t, e, f[e])
                    }), f) a = xt(p ? h[r] : 0, r, c), r in h || (h[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }],
        prefilter: function(e, t) {
            t ? bt.prefilters.unshift(e) : bt.prefilters.push(e)
        }
    }), E.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? E.extend({}, e) : {
            complete: n || !n && t || E.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !E.isFunction(t) && t
        };
        return r.duration = E.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in E.fx.speeds ? E.fx.speeds[r.duration] : E.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            E.isFunction(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue)
        }, r
    }, E.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(V).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = E.isEmptyObject(t),
                o = E.speed(e, n, r),
                a = function() {
                    var e = bt(this, E.extend({}, t), o);
                    (i || E._data(this, "finish")) && e.stop(!0)
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
                    n = E.timers,
                    r = E._data(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && mt.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || E.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = E._data(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = E.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, E.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), E.each(["toggle", "show", "hide"], function(e, r) {
        var i = E.fn[r];
        E.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(yt(r, !0), e, t, n)
        }
    }), E.each({
        slideDown: yt("show"),
        slideUp: yt("hide"),
        slideToggle: yt("toggle"),
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
        E.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), E.timers = [], E.fx.tick = function() {
        var e, t = E.timers,
            n = 0;
        for (ut = E.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || E.fx.stop(), ut = void 0
    }, E.fx.timer = function(e) {
        E.timers.push(e), e() ? E.fx.start() : E.timers.pop()
    }, E.fx.interval = 13, E.fx.start = function() {
        lt || (lt = C.setInterval(E.fx.tick, E.fx.interval))
    }, E.fx.stop = function() {
        C.clearInterval(lt), lt = null
    }, E.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, E.fn.delay = function(r, e) {
        return r = E.fx && E.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, ft = h.createElement("input"), dt = h.createElement("div"), pt = h.createElement("select"), ht = pt.appendChild(h.createElement("option")), (dt = h.createElement("div")).setAttribute("className", "t"), dt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ct = dt.getElementsByTagName("a")[0], ft.setAttribute("type", "checkbox"), dt.appendChild(ft), (ct = dt.getElementsByTagName("a")[0]).style.cssText = "top:1px", v.getSetAttribute = "t" !== dt.className, v.style = /top/.test(ct.getAttribute("style")), v.hrefNormalized = "/a" === ct.getAttribute("href"), v.checkOn = !!ft.value, v.optSelected = ht.selected, v.enctype = !!h.createElement("form").enctype, pt.disabled = !0, v.optDisabled = !ht.disabled, (ft = h.createElement("input")).setAttribute("value", ""), v.input = "" === ft.getAttribute("value"), ft.value = "t", ft.setAttribute("type", "radio"), v.radioValue = "t" === ft.value;
    var wt = /\r/g,
        Tt = /[\x20\t\r\n\f]+/g;
    E.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = E.isFunction(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : E.isArray(t) && (t = E.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
        }
    }), E.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : E.trim(E.text(e)).replace(Tt, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
                        if (((n = r[u]).selected || u === i) && (v.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !E.nodeName(n.parentNode, "optgroup"))) {
                            if (t = E(n).val(), o) return t;
                            a.push(t)
                        } return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = E.makeArray(t), a = i.length; a--;)
                        if (r = i[a], -1 < E.inArray(E.valHooks.option.get(r), o)) try {
                            r.selected = n = !0
                        } catch (e) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), E.each(["radio", "checkbox"], function() {
        E.valHooks[this] = {
            set: function(e, t) {
                if (E.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t)
            }
        }, v.checkOn || (E.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Ct, Et, Nt = E.expr.attrHandle,
        kt = /^(?:checked|selected)$/i,
        St = v.getSetAttribute,
        At = v.input;
    E.fn.extend({
        attr: function(e, t) {
            return K(this, E.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                E.removeAttr(this, e)
            })
        }
    }), E.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (t = t.toLowerCase(), i = E.attrHooks[t] || (E.expr.match.bool.test(t) ? Et : Ct)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && E.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(q);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = E.propFix[n] || n, E.expr.match.bool.test(n) ? At && St || !kt.test(n) ? e[r] = !1 : e[E.camelCase("default-" + n)] = e[r] = !1 : E.attr(e, n, ""), e.removeAttribute(St ? n : r)
        }
    }), Et = {
        set: function(e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : At && St || !kt.test(n) ? e.setAttribute(!St && E.propFix[n] || n, n) : e[E.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var o = Nt[t] || E.find.attr;
        At && St || !kt.test(t) ? Nt[t] = function(e, t, n) {
            var r, i;
            return n || (i = Nt[t], Nt[t] = r, r = null != o(e, t, n) ? t.toLowerCase() : null, Nt[t] = i), r
        } : Nt[t] = function(e, t, n) {
            if (!n) return e[E.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), At && St || (E.attrHooks.value = {
        set: function(e, t, n) {
            if (!E.nodeName(e, "input")) return Ct && Ct.set(e, t, n);
            e.defaultValue = t
        }
    }), St || (Ct = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n)) return t
        }
    }, Nt.id = Nt.name = Nt.coords = function(e, t, n) {
        var r;
        if (!n) return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, E.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified) return n.value
        },
        set: Ct.set
    }, E.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Ct.set(e, "" !== t && t, n)
        }
    }, E.each(["width", "height"], function(e, n) {
        E.attrHooks[n] = {
            set: function(e, t) {
                if ("" === t) return e.setAttribute(n, "auto"), t
            }
        }
    })), v.style || (E.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Dt = /^(?:input|select|textarea|button|object)$/i,
        jt = /^(?:a|area)$/i;
    E.fn.extend({
        prop: function(e, t) {
            return K(this, E.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return e = E.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {}
            })
        }
    }), E.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Dt.test(e.nodeName) || jt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), v.hrefNormalized || E.each(["href", "src"], function(e, t) {
        E.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), v.optSelected || (E.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        E.propFix[this.toLowerCase()] = this
    }), v.enctype || (E.propFix.enctype = "encoding");
    var Lt = /[\t\r\n\f]/g;

    function Ht(e) {
        return E.attr(e, "class") || ""
    }
    E.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (E.isFunction(t)) return this.each(function(e) {
                E(this).addClass(t.call(this, e, Ht(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(q) || []; n = this[u++];)
                    if (i = Ht(n), r = 1 === n.nodeType && (" " + i + " ").replace(Lt, " ")) {
                        for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = E.trim(r)) && E.attr(n, "class", s)
                    } return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (E.isFunction(t)) return this.each(function(e) {
                E(this).removeClass(t.call(this, e, Ht(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(q) || []; n = this[u++];)
                    if (i = Ht(n), r = 1 === n.nodeType && (" " + i + " ").replace(Lt, " ")) {
                        for (a = 0; o = e[a++];)
                            for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                        i !== (s = E.trim(r)) && E.attr(n, "class", s)
                    } return this
        },
        toggleClass: function(i, t) {
            var o = typeof i;
            return "boolean" == typeof t && "string" === o ? t ? this.addClass(i) : this.removeClass(i) : E.isFunction(i) ? this.each(function(e) {
                E(this).toggleClass(i.call(this, e, Ht(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if ("string" === o)
                    for (t = 0, n = E(this), r = i.match(q) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== i && "boolean" !== o || ((e = Ht(this)) && E._data(this, "__className__", e), E.attr(this, "class", e || !1 === i ? "" : E._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + Ht(n) + " ").replace(Lt, " ").indexOf(t)) return !0;
            return !1
        }
    }), E.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        E.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), E.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var qt = C.location,
        _t = E.now(),
        Ft = /\?/,
        Mt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    E.parseJSON = function(e) {
        if (C.JSON && C.JSON.parse) return C.JSON.parse(e + "");
        var i, o = null,
            t = E.trim(e + "");
        return t && !E.trim(t.replace(Mt, function(e, t, n, r) {
            return i && t && (o = 0), 0 === o ? e : (i = n || t, o += !r - !n, "")
        })) ? Function("return " + t)() : E.error("Invalid JSON: " + e)
    }, E.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            C.DOMParser ? t = (new C.DOMParser).parseFromString(e, "text/xml") : ((t = new C.ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
        } catch (e) {
            t = void 0
        }
        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e), t
    };
    var Ot = /#.*$/,
        Rt = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Bt = /^(?:GET|HEAD)$/,
        Wt = /^\/\//,
        It = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        $t = {},
        zt = {},
        Xt = "*/".concat("*"),
        Ut = qt.href,
        Vt = It.exec(Ut.toLowerCase()) || [];

    function Yt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(q) || [];
            if (E.isFunction(t))
                for (; n = i[r++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Jt(t, i, o, a) {
        var s = {},
            u = t === zt;

        function l(e) {
            var r;
            return s[e] = !0, E.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Gt(e, t) {
        var n, r, i = E.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && E.extend(!0, e, n), e
    }
    E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ut,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Vt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xt,
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
                "text json": E.parseJSON,
                "text xml": E.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Gt(Gt(e, E.ajaxSettings), t) : Gt(E.ajaxSettings, e)
        },
        ajaxPrefilter: Yt($t),
        ajaxTransport: Yt(zt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, r, c, f, d, p, h, i, g = E.ajaxSetup({}, t),
                m = g.context || g,
                v = g.context && (m.nodeType || m.jquery) ? E(m) : E.event,
                y = E.Deferred(),
                x = E.Callbacks("once memory"),
                b = g.statusCode || {},
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
                                for (i = {}; t = Pt.exec(f);) i[t[1].toLowerCase()] = t[2];
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
                        return w || (g.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (w < 2)
                                for (t in e) b[t] = [b[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || s;
                        return h && h.abort(t), u(0, t), this
                    }
                };
            if (y.promise(T).complete = x.add, T.success = T.done, T.error = T.fail, g.url = ((e || g.url || Ut) + "").replace(Ot, "").replace(Wt, Vt[1] + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = E.trim(g.dataType || "*").toLowerCase().match(q) || [""], null == g.crossDomain && (n = It.exec(g.url.toLowerCase()), g.crossDomain = !(!n || n[1] === Vt[1] && n[2] === Vt[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Vt[3] || ("http:" === Vt[1] ? "80" : "443")))), g.data && g.processData && "string" != typeof g.data && (g.data = E.param(g.data, g.traditional)), Jt($t, g, t, T), 2 === w) return T;
            for (r in (p = E.event && g.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Bt.test(g.type), c = g.url, g.hasContent || (g.data && (c = g.url += (Ft.test(c) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (g.url = Rt.test(c) ? c.replace(Rt, "$1_=" + _t++) : c + (Ft.test(c) ? "&" : "?") + "_=" + _t++)), g.ifModified && (E.lastModified[c] && T.setRequestHeader("If-Modified-Since", E.lastModified[c]), E.etag[c] && T.setRequestHeader("If-None-Match", E.etag[c])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && T.setRequestHeader("Content-Type", g.contentType), T.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Xt + "; q=0.01" : "") : g.accepts["*"]), g.headers) T.setRequestHeader(r, g.headers[r]);
            if (g.beforeSend && (!1 === g.beforeSend.call(m, T, g) || 2 === w)) return T.abort();
            for (r in s = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[r](g[r]);
            if (h = Jt(zt, g, t, T)) {
                if (T.readyState = 1, p && v.trigger("ajaxSend", [T, g]), 2 === w) return T;
                g.async && 0 < g.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, g.timeout));
                try {
                    w = 1, h.send(o, u)
                } catch (e) {
                    if (!(w < 2)) throw e;
                    u(-1, e)
                }
            } else u(-1, "No Transport");

            function u(e, t, n, r) {
                var i, o, a, s, u, l = t;
                2 !== w && (w = 2, d && C.clearTimeout(d), h = void 0, f = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
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
                }(g, T, n)), s = function(e, t, n, r) {
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
                }(g, s, T, i), i ? (g.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (E.lastModified[c] = u), (u = T.getResponseHeader("etag")) && (E.etag[c] = u)), 204 === e || "HEAD" === g.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? y.resolveWith(m, [o, l, T]) : y.rejectWith(m, [T, l, a]), T.statusCode(b), b = void 0, p && v.trigger(i ? "ajaxSuccess" : "ajaxError", [T, g, i ? o : a]), x.fireWith(m, [T, l]), p && (v.trigger("ajaxComplete", [T, g]), --E.active || E.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return E.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return E.get(e, void 0, t, "script")
        }
    }), E.each(["get", "post"], function(e, i) {
        E[i] = function(e, t, n, r) {
            return E.isFunction(t) && (r = r || n, n = t, t = void 0), E.ajax(E.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, E.isPlainObject(e) && e))
        }
    }), E._evalUrl = function(e) {
        return E.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, E.fn.extend({
        wrapAll: function(t) {
            if (E.isFunction(t)) return this.each(function(e) {
                E(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = E(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return E.isFunction(n) ? this.each(function(e) {
                E(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = E(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = E.isFunction(t);
            return this.each(function(e) {
                E(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                E.nodeName(this, "body") || E(this).replaceWith(this.childNodes)
            }).end()
        }
    }), E.expr.filters.hidden = function(e) {
        return v.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : function(e) {
            if (!E.contains(e.ownerDocument || h, e)) return !0;
            for (; e && 1 === e.nodeType;) {
                if ("none" === ((t = e).style && t.style.display || E.css(t, "display")) || "hidden" === e.type) return !0;
                e = e.parentNode
            }
            var t;
            return !1
        }(e)
    }, E.expr.filters.visible = function(e) {
        return !E.expr.filters.hidden(e)
    };
    var Qt = /%20/g,
        Kt = /\[\]$/,
        Zt = /\r?\n/g,
        en = /^(?:submit|button|image|reset|file)$/i,
        tn = /^(?:input|select|textarea|keygen)/i;

    function nn(n, e, r, i) {
        var t;
        if (E.isArray(e)) E.each(e, function(e, t) {
            r || Kt.test(n) ? i(n, t) : nn(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== E.type(e)) i(n, e);
        else
            for (t in e) nn(n + "[" + t + "]", e[t], r, i)
    }
    E.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = E.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = E.ajaxSettings && E.ajaxSettings.traditional), E.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) nn(n, e[n], t, i);
        return r.join("&").replace(Qt, "+")
    }, E.fn.extend({
        serialize: function() {
            return E.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && tn.test(this.nodeName) && !en.test(e) && (this.checked || !Z.test(e))
            }).map(function(e, t) {
                var n = E(this).val();
                return null == n ? null : E.isArray(n) ? E.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Zt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Zt, "\r\n")
                }
            }).get()
        }
    }), E.ajaxSettings.xhr = void 0 !== C.ActiveXObject ? function() {
        return this.isLocal ? un() : 8 < h.documentMode ? sn() : /^(get|post|head|put|delete|options)$/i.test(this.type) && sn() || un()
    } : sn;
    var rn = 0,
        on = {},
        an = E.ajaxSettings.xhr();

    function sn() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }

    function un() {
        try {
            return new C.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }
    C.attachEvent && C.attachEvent("onunload", function() {
        for (var e in on) on[e](void 0, !0)
    }), v.cors = !!an && "withCredentials" in an, (an = v.ajax = !!an) && E.ajaxTransport(function(u) {
        var l;
        if (!u.crossDomain || v.cors) return {
            send: function(e, o) {
                var t, a = u.xhr(),
                    s = ++rn;
                if (a.open(u.type, u.url, u.async, u.username, u.password), u.xhrFields)
                    for (t in u.xhrFields) a[t] = u.xhrFields[t];
                for (t in u.mimeType && a.overrideMimeType && a.overrideMimeType(u.mimeType), u.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) void 0 !== e[t] && a.setRequestHeader(t, e[t] + "");
                a.send(u.hasContent && u.data || null), l = function(e, t) {
                    var n, r, i;
                    if (l && (t || 4 === a.readyState))
                        if (delete on[s], l = void 0, a.onreadystatechange = E.noop, t) 4 !== a.readyState && a.abort();
                        else {
                            i = {}, n = a.status, "string" == typeof a.responseText && (i.text = a.responseText);
                            try {
                                r = a.statusText
                            } catch (e) {
                                r = ""
                            }
                            n || !u.isLocal || u.crossDomain ? 1223 === n && (n = 204) : n = i.text ? 200 : 404
                        } i && o(n, r, i, a.getAllResponseHeaders())
                }, u.async ? 4 === a.readyState ? C.setTimeout(l) : a.onreadystatechange = on[s] = l : l()
            },
            abort: function() {
                l && l(void 0, !0)
            }
        }
    }), E.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return E.globalEval(e), e
            }
        }
    }), E.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), E.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var r, i = h.head || E("head")[0] || h.documentElement;
            return {
                send: function(e, n) {
                    (r = h.createElement("script")).async = !0, t.scriptCharset && (r.charset = t.scriptCharset), r.src = t.url, r.onload = r.onreadystatechange = function(e, t) {
                        (t || !r.readyState || /loaded|complete/.test(r.readyState)) && (r.onload = r.onreadystatechange = null, r.parentNode && r.parentNode.removeChild(r), r = null, t || n(200, "success"))
                    }, i.insertBefore(r, i.firstChild)
                },
                abort: function() {
                    r && r.onload(void 0, !0)
                }
            }
        }
    });
    var ln = [],
        cn = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = ln.pop() || E.expando + "_" + _t++;
            return this[e] = !0, e
        }
    }), E.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (cn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && cn.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = E.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(cn, "$1" + r) : !1 !== e.jsonp && (e.url += (Ft.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || E.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? E(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, ln.push(r)), o && E.isFunction(i) && i(o[0]), o = i = void 0
        }), "script"
    }), E.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || h;
        var r = w.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = fe([e], t, i), i && i.length && E(i).remove(), E.merge([], r.childNodes))
    };
    var fn = E.fn.load;

    function dn(e) {
        return E.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    E.fn.load = function(e, t, n) {
        if ("string" != typeof e && fn) return fn.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = E.trim(e.slice(s, e.length)), e = e.slice(0, s)), E.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && E.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        E.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), E.expr.filters.animated = function(t) {
        return E.grep(E.timers, function(e) {
            return t === e.elem
        }).length
    }, E.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = E.css(e, "position"),
                c = E(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = E.css(e, "top"), u = E.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < E.inArray("auto", [o, u]) ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), E.isFunction(t) && (t = t.call(e, n, E.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, E.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                E.offset.setOffset(this, t, e)
            });
            var e, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                o = i && i.ownerDocument;
            return o ? (e = o.documentElement, E.contains(e, i) ? (void 0 !== i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = dn(o), {
                top: r.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: r.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === E.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), E.nodeName(e[0], "html") || (n = e.offset()), n.top += E.css(e[0], "borderTopWidth", !0), n.left += E.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - E.css(r, "marginTop", !0),
                    left: t.left - n.left - E.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !E.nodeName(e, "html") && "static" === E.css(e, "position");) e = e.offsetParent;
                return e || $e
            })
        }
    }), E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = /Y/.test(i);
        E.fn[t] = function(e) {
            return K(this, function(e, t, n) {
                var r = dn(e);
                if (void 0 === n) return r ? i in r ? r[i] : r.document.documentElement[t] : e[t];
                r ? r.scrollTo(o ? E(r).scrollLeft() : n, o ? n : E(r).scrollTop()) : e[t] = n
            }, t, e, arguments.length, null)
        }
    }), E.each(["top", "left"], function(e, n) {
        E.cssHooks[n] = Ve(v.pixelPosition, function(e, t) {
            if (t) return t = Xe(e, n), We.test(t) ? E(e).position()[n] + "px" : t
        })
    }), E.each({
        Height: "height",
        Width: "width"
    }, function(o, a) {
        E.each({
            padding: "inner" + o,
            content: a,
            "": "outer" + o
        }, function(r, e) {
            E.fn[e] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return K(this, function(e, t, n) {
                    var r;
                    return E.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i)
                }, a, n ? e : void 0, n, null)
            }
        })
    }), E.fn.extend({
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
    }), E.fn.size = function() {
        return this.length
    }, E.fn.andSelf = E.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return E
    });
    var pn = C.jQuery,
        hn = C.$;
    return E.noConflict = function(e) {
        return C.$ === E && (C.$ = hn), e && C.jQuery === E && (C.jQuery = pn), E
    }, e || (C.jQuery = C.$ = E), E
});
(function() {
    var no, to = 200,
        ro = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
        eo = "Expected a function",
        uo = "__lodash_hash_undefined__",
        io = 500,
        oo = "__lodash_placeholder__",
        fo = 1,
        ao = 2,
        co = 4,
        lo = 1,
        so = 2,
        ho = 1,
        po = 2,
        vo = 4,
        _o = 8,
        go = 16,
        yo = 32,
        bo = 64,
        wo = 128,
        mo = 256,
        xo = 512,
        jo = 30,
        Ao = "...",
        ko = 800,
        Oo = 16,
        Io = 1,
        Ro = 2,
        zo = 1 / 0,
        Eo = 9007199254740991,
        So = 1.7976931348623157e308,
        Wo = NaN,
        Lo = 4294967295,
        Co = Lo - 1,
        Uo = Lo >>> 1,
        Bo = [
            ["ary", wo],
            ["bind", ho],
            ["bindKey", po],
            ["curry", _o],
            ["curryRight", go],
            ["flip", xo],
            ["partial", yo],
            ["partialRight", bo],
            ["rearg", mo]
        ],
        To = "[object Arguments]",
        $o = "[object Array]",
        Do = "[object AsyncFunction]",
        Mo = "[object Boolean]",
        Fo = "[object Date]",
        No = "[object DOMException]",
        Po = "[object Error]",
        qo = "[object Function]",
        Zo = "[object GeneratorFunction]",
        Ko = "[object Map]",
        Vo = "[object Number]",
        Go = "[object Null]",
        Ho = "[object Object]",
        Jo = "[object Promise]",
        Yo = "[object Proxy]",
        Qo = "[object RegExp]",
        Xo = "[object Set]",
        nf = "[object String]",
        tf = "[object Symbol]",
        rf = "[object Undefined]",
        ef = "[object WeakMap]",
        uf = "[object WeakSet]",
        of = "[object ArrayBuffer]",
        ff = "[object DataView]",
        af = "[object Float32Array]",
        cf = "[object Float64Array]",
        lf = "[object Int8Array]",
        sf = "[object Int16Array]",
        hf = "[object Int32Array]",
        pf = "[object Uint8Array]",
        vf = "[object Uint8ClampedArray]",
        _f = "[object Uint16Array]",
        gf = "[object Uint32Array]",
        yf = /\b__p \+= '';/g,
        df = /\b(__p \+=) '' \+/g,
        bf = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        wf = /&(?:amp|lt|gt|quot|#39);/g,
        mf = /[&<>"']/g,
        xf = RegExp(wf.source),
        jf = RegExp(mf.source),
        Af = /<%-([\s\S]+?)%>/g,
        kf = /<%([\s\S]+?)%>/g,
        Of = /<%=([\s\S]+?)%>/g,
        If = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Rf = /^\w*$/,
        zf = /^\./,
        Ef = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Sf = /[\\^$.*+?()[\]{}|]/g,
        Wf = RegExp(Sf.source),
        Lf = /^\s+|\s+$/g,
        Cf = /^\s+/,
        Uf = /\s+$/,
        Bf = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
        Tf = /\{\n\/\* \[wrapped with (.+)\] \*/,
        $f = /,? & /,
        Df = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
        Mf = /\\(\\)?/g,
        Ff = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        Nf = /\w*$/,
        Pf = /^[-+]0x[0-9a-f]+$/i,
        qf = /^0b[01]+$/i,
        Zf = /^\[object .+?Constructor\]$/,
        Kf = /^0o[0-7]+$/i,
        Vf = /^(?:0|[1-9]\d*)$/,
        Gf = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        Hf = /($^)/,
        Jf = /['\n\r\u2028\u2029\\]/g,
        n = "\\ud800-\\udfff",
        t = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
        r = "\\u2700-\\u27bf",
        e = "a-z\\xdf-\\xf6\\xf8-\\xff",
        u = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        i = "\\ufe0e\\ufe0f",
        o = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        f = "['’]",
        a = "[" + n + "]",
        c = "[" + o + "]",
        l = "[" + t + "]",
        s = "\\d+",
        h = "[" + r + "]",
        p = "[" + e + "]",
        v = "[^" + n + o + s + r + e + u + "]",
        _ = "\\ud83c[\\udffb-\\udfff]",
        g = "[^" + n + "]",
        y = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        d = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        b = "[" + u + "]",
        w = "\\u200d",
        m = "(?:" + p + "|" + v + ")",
        x = "(?:" + b + "|" + v + ")",
        j = "(?:['’](?:d|ll|m|re|s|t|ve))?",
        A = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
        k = "(?:" + l + "|" + _ + ")" + "?",
        O = "[" + i + "]?",
        I = O + k + ("(?:" + w + "(?:" + [g, y, d].join("|") + ")" + O + k + ")*"),
        R = "(?:" + [h, y, d].join("|") + ")" + I,
        z = "(?:" + [g + l + "?", l, y, d, a].join("|") + ")",
        Yf = RegExp(f, "g"),
        Qf = RegExp(l, "g"),
        E = RegExp(_ + "(?=" + _ + ")|" + z + I, "g"),
        Xf = RegExp([b + "?" + p + "+" + j + "(?=" + [c, b, "$"].join("|") + ")", x + "+" + A + "(?=" + [c, b + m, "$"].join("|") + ")", b + "?" + m + "+" + j, b + "+" + A, "\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)", "\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)", s, R].join("|"), "g"),
        S = RegExp("[" + w + n + t + i + "]"),
        na = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        ta = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
        ra = -1,
        ea = {};
    ea[af] = ea[cf] = ea[lf] = ea[sf] = ea[hf] = ea[pf] = ea[vf] = ea[_f] = ea[gf] = !0, ea[To] = ea[$o] = ea[ of ] = ea[Mo] = ea[ff] = ea[Fo] = ea[Po] = ea[qo] = ea[Ko] = ea[Vo] = ea[Ho] = ea[Qo] = ea[Xo] = ea[nf] = ea[ef] = !1;
    var ua = {};
    ua[To] = ua[$o] = ua[ of ] = ua[ff] = ua[Mo] = ua[Fo] = ua[af] = ua[cf] = ua[lf] = ua[sf] = ua[hf] = ua[Ko] = ua[Vo] = ua[Ho] = ua[Qo] = ua[Xo] = ua[nf] = ua[tf] = ua[pf] = ua[vf] = ua[_f] = ua[gf] = !0, ua[Po] = ua[qo] = ua[ef] = !1;
    var W = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        ia = parseFloat,
        oa = parseInt,
        L = "object" == typeof global && global && global.Object === Object && global,
        C = "object" == typeof self && self && self.Object === Object && self,
        fa = L || C || Function("return this")(),
        U = "object" == typeof exports && exports && !exports.nodeType && exports,
        B = U && "object" == typeof module && module && !module.nodeType && module,
        aa = B && B.exports === U,
        T = aa && L.process,
        $ = function() {
            try {
                return T && T.binding && T.binding("util")
            } catch (n) {}
        }(),
        ca = $ && $.isArrayBuffer,
        la = $ && $.isDate,
        sa = $ && $.isMap,
        ha = $ && $.isRegExp,
        pa = $ && $.isSet,
        va = $ && $.isTypedArray;

    function _a(n, t) {
        return n.set(t[0], t[1]), n
    }

    function ga(n, t) {
        return n.add(t), n
    }

    function ya(n, t, r) {
        switch (r.length) {
            case 0:
                return n.call(t);
            case 1:
                return n.call(t, r[0]);
            case 2:
                return n.call(t, r[0], r[1]);
            case 3:
                return n.call(t, r[0], r[1], r[2])
        }
        return n.apply(t, r)
    }

    function da(n, t, r, e) {
        for (var u = -1, i = null == n ? 0 : n.length; ++u < i;) {
            var o = n[u];
            t(e, o, r(o), n)
        }
        return e
    }

    function ba(n, t) {
        for (var r = -1, e = null == n ? 0 : n.length; ++r < e && !1 !== t(n[r], r, n););
        return n
    }

    function wa(n, t) {
        for (var r = null == n ? 0 : n.length; r-- && !1 !== t(n[r], r, n););
        return n
    }

    function ma(n, t) {
        for (var r = -1, e = null == n ? 0 : n.length; ++r < e;)
            if (!t(n[r], r, n)) return !1;
        return !0
    }

    function xa(n, t) {
        for (var r = -1, e = null == n ? 0 : n.length, u = 0, i = []; ++r < e;) {
            var o = n[r];
            t(o, r, n) && (i[u++] = o)
        }
        return i
    }

    function ja(n, t) {
        return !!(null == n ? 0 : n.length) && -1 < Wa(n, t, 0)
    }

    function Aa(n, t, r) {
        for (var e = -1, u = null == n ? 0 : n.length; ++e < u;)
            if (r(t, n[e])) return !0;
        return !1
    }

    function ka(n, t) {
        for (var r = -1, e = null == n ? 0 : n.length, u = Array(e); ++r < e;) u[r] = t(n[r], r, n);
        return u
    }

    function Oa(n, t) {
        for (var r = -1, e = t.length, u = n.length; ++r < e;) n[u + r] = t[r];
        return n
    }

    function Ia(n, t, r, e) {
        var u = -1,
            i = null == n ? 0 : n.length;
        for (e && i && (r = n[++u]); ++u < i;) r = t(r, n[u], u, n);
        return r
    }

    function Ra(n, t, r, e) {
        var u = null == n ? 0 : n.length;
        for (e && u && (r = n[--u]); u--;) r = t(r, n[u], u, n);
        return r
    }

    function za(n, t) {
        for (var r = -1, e = null == n ? 0 : n.length; ++r < e;)
            if (t(n[r], r, n)) return !0;
        return !1
    }
    var D = Ba("length");

    function Ea(n, e, t) {
        var u;
        return t(n, function(n, t, r) {
            if (e(n, t, r)) return u = t, !1
        }), u
    }

    function Sa(n, t, r, e) {
        for (var u = n.length, i = r + (e ? 1 : -1); e ? i-- : ++i < u;)
            if (t(n[i], i, n)) return i;
        return -1
    }

    function Wa(n, t, r) {
        return t == t ? function(n, t, r) {
            var e = r - 1,
                u = n.length;
            for (; ++e < u;)
                if (n[e] === t) return e;
            return -1
        }(n, t, r) : Sa(n, Ca, r)
    }

    function La(n, t, r, e) {
        for (var u = r - 1, i = n.length; ++u < i;)
            if (e(n[u], t)) return u;
        return -1
    }

    function Ca(n) {
        return n != n
    }

    function Ua(n, t) {
        var r = null == n ? 0 : n.length;
        return r ? $a(n, t) / r : Wo
    }

    function Ba(t) {
        return function(n) {
            return null == n ? no : n[t]
        }
    }

    function M(t) {
        return function(n) {
            return null == t ? no : t[n]
        }
    }

    function Ta(n, e, u, i, t) {
        return t(n, function(n, t, r) {
            u = i ? (i = !1, n) : e(u, n, t, r)
        }), u
    }

    function $a(n, t) {
        for (var r, e = -1, u = n.length; ++e < u;) {
            var i = t(n[e]);
            i !== no && (r = r === no ? i : r + i)
        }
        return r
    }

    function Da(n, t) {
        for (var r = -1, e = Array(n); ++r < n;) e[r] = t(r);
        return e
    }

    function Ma(t) {
        return function(n) {
            return t(n)
        }
    }

    function Fa(t, n) {
        return ka(n, function(n) {
            return t[n]
        })
    }

    function Na(n, t) {
        return n.has(t)
    }

    function Pa(n, t) {
        for (var r = -1, e = n.length; ++r < e && -1 < Wa(t, n[r], 0););
        return r
    }

    function qa(n, t) {
        for (var r = n.length; r-- && -1 < Wa(t, n[r], 0););
        return r
    }
    var Za = M({
            "À": "A",
            "Á": "A",
            "Â": "A",
            "Ã": "A",
            "Ä": "A",
            "Å": "A",
            "à": "a",
            "á": "a",
            "â": "a",
            "ã": "a",
            "ä": "a",
            "å": "a",
            "Ç": "C",
            "ç": "c",
            "Ð": "D",
            "ð": "d",
            "È": "E",
            "É": "E",
            "Ê": "E",
            "Ë": "E",
            "è": "e",
            "é": "e",
            "ê": "e",
            "ë": "e",
            "Ì": "I",
            "Í": "I",
            "Î": "I",
            "Ï": "I",
            "ì": "i",
            "í": "i",
            "î": "i",
            "ï": "i",
            "Ñ": "N",
            "ñ": "n",
            "Ò": "O",
            "Ó": "O",
            "Ô": "O",
            "Õ": "O",
            "Ö": "O",
            "Ø": "O",
            "ò": "o",
            "ó": "o",
            "ô": "o",
            "õ": "o",
            "ö": "o",
            "ø": "o",
            "Ù": "U",
            "Ú": "U",
            "Û": "U",
            "Ü": "U",
            "ù": "u",
            "ú": "u",
            "û": "u",
            "ü": "u",
            "Ý": "Y",
            "ý": "y",
            "ÿ": "y",
            "Æ": "Ae",
            "æ": "ae",
            "Þ": "Th",
            "þ": "th",
            "ß": "ss",
            "Ā": "A",
            "Ă": "A",
            "Ą": "A",
            "ā": "a",
            "ă": "a",
            "ą": "a",
            "Ć": "C",
            "Ĉ": "C",
            "Ċ": "C",
            "Č": "C",
            "ć": "c",
            "ĉ": "c",
            "ċ": "c",
            "č": "c",
            "Ď": "D",
            "Đ": "D",
            "ď": "d",
            "đ": "d",
            "Ē": "E",
            "Ĕ": "E",
            "Ė": "E",
            "Ę": "E",
            "Ě": "E",
            "ē": "e",
            "ĕ": "e",
            "ė": "e",
            "ę": "e",
            "ě": "e",
            "Ĝ": "G",
            "Ğ": "G",
            "Ġ": "G",
            "Ģ": "G",
            "ĝ": "g",
            "ğ": "g",
            "ġ": "g",
            "ģ": "g",
            "Ĥ": "H",
            "Ħ": "H",
            "ĥ": "h",
            "ħ": "h",
            "Ĩ": "I",
            "Ī": "I",
            "Ĭ": "I",
            "Į": "I",
            "İ": "I",
            "ĩ": "i",
            "ī": "i",
            "ĭ": "i",
            "į": "i",
            "ı": "i",
            "Ĵ": "J",
            "ĵ": "j",
            "Ķ": "K",
            "ķ": "k",
            "ĸ": "k",
            "Ĺ": "L",
            "Ļ": "L",
            "Ľ": "L",
            "Ŀ": "L",
            "Ł": "L",
            "ĺ": "l",
            "ļ": "l",
            "ľ": "l",
            "ŀ": "l",
            "ł": "l",
            "Ń": "N",
            "Ņ": "N",
            "Ň": "N",
            "Ŋ": "N",
            "ń": "n",
            "ņ": "n",
            "ň": "n",
            "ŋ": "n",
            "Ō": "O",
            "Ŏ": "O",
            "Ő": "O",
            "ō": "o",
            "ŏ": "o",
            "ő": "o",
            "Ŕ": "R",
            "Ŗ": "R",
            "Ř": "R",
            "ŕ": "r",
            "ŗ": "r",
            "ř": "r",
            "Ś": "S",
            "Ŝ": "S",
            "Ş": "S",
            "Š": "S",
            "ś": "s",
            "ŝ": "s",
            "ş": "s",
            "š": "s",
            "Ţ": "T",
            "Ť": "T",
            "Ŧ": "T",
            "ţ": "t",
            "ť": "t",
            "ŧ": "t",
            "Ũ": "U",
            "Ū": "U",
            "Ŭ": "U",
            "Ů": "U",
            "Ű": "U",
            "Ų": "U",
            "ũ": "u",
            "ū": "u",
            "ŭ": "u",
            "ů": "u",
            "ű": "u",
            "ų": "u",
            "Ŵ": "W",
            "ŵ": "w",
            "Ŷ": "Y",
            "ŷ": "y",
            "Ÿ": "Y",
            "Ź": "Z",
            "Ż": "Z",
            "Ž": "Z",
            "ź": "z",
            "ż": "z",
            "ž": "z",
            "Ĳ": "IJ",
            "ĳ": "ij",
            "Œ": "Oe",
            "œ": "oe",
            "ŉ": "'n",
            "ſ": "s"
        }),
        Ka = M({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        });

    function Va(n) {
        return "\\" + W[n]
    }

    function Ga(n) {
        return S.test(n)
    }

    function Ha(n) {
        var r = -1,
            e = Array(n.size);
        return n.forEach(function(n, t) {
            e[++r] = [t, n]
        }), e
    }

    function Ja(t, r) {
        return function(n) {
            return t(r(n))
        }
    }

    function Ya(n, t) {
        for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) {
            var o = n[r];
            o !== t && o !== oo || (n[r] = oo, i[u++] = r)
        }
        return i
    }

    function Qa(n) {
        var t = -1,
            r = Array(n.size);
        return n.forEach(function(n) {
            r[++t] = n
        }), r
    }

    function Xa(n) {
        return Ga(n) ? function(n) {
            var t = E.lastIndex = 0;
            for (; E.test(n);) ++t;
            return t
        }(n) : D(n)
    }

    function nc(n) {
        return Ga(n) ? n.match(E) || [] : n.split("")
    }
    var tc = M({
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
    });
    var rc = function n(t) {
        var r, R = (t = null == t ? fa : rc.defaults(fa.Object(), t, rc.pick(fa, ta))).Array,
            e = t.Date,
            u = t.Error,
            g = t.Function,
            i = t.Math,
            A = t.Object,
            y = t.RegExp,
            l = t.String,
            z = t.TypeError,
            o = R.prototype,
            f = g.prototype,
            a = A.prototype,
            c = t["__core-js_shared__"],
            s = f.toString,
            k = a.hasOwnProperty,
            h = 0,
            p = (r = /[^.]+$/.exec(c && c.keys && c.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "",
            v = a.toString,
            _ = s.call(A),
            d = fa._,
            b = y("^" + s.call(k).replace(Sf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            w = aa ? t.Buffer : no,
            m = t.Symbol,
            x = t.Uint8Array,
            j = w ? w.allocUnsafe : no,
            O = Ja(A.getPrototypeOf, A),
            I = A.create,
            E = a.propertyIsEnumerable,
            S = o.splice,
            W = m ? m.isConcatSpreadable : no,
            L = m ? m.iterator : no,
            C = m ? m.toStringTag : no,
            U = function() {
                try {
                    var n = Mr(A, "defineProperty");
                    return n({}, "", {}), n
                } catch (n) {}
            }(),
            B = t.clearTimeout !== fa.clearTimeout && t.clearTimeout,
            T = e && e.now !== fa.Date.now && e.now,
            $ = t.setTimeout !== fa.setTimeout && t.setTimeout,
            D = i.ceil,
            M = i.floor,
            F = A.getOwnPropertySymbols,
            N = w ? w.isBuffer : no,
            P = t.isFinite,
            q = o.join,
            Z = Ja(A.keys, A),
            K = i.max,
            V = i.min,
            G = e.now,
            H = t.parseInt,
            J = i.random,
            Y = o.reverse,
            Q = Mr(t, "DataView"),
            X = Mr(t, "Map"),
            nn = Mr(t, "Promise"),
            tn = Mr(t, "Set"),
            rn = Mr(t, "WeakMap"),
            en = Mr(A, "create"),
            un = rn && new rn,
            on = {},
            fn = pe(Q),
            an = pe(X),
            cn = pe(nn),
            ln = pe(tn),
            sn = pe(rn),
            hn = m ? m.prototype : no,
            pn = hn ? hn.valueOf : no,
            vn = hn ? hn.toString : no;

        function _n(n) {
            if (Eu(n) && !bu(n) && !(n instanceof bn)) {
                if (n instanceof dn) return n;
                if (k.call(n, "__wrapped__")) return ve(n)
            }
            return new dn(n)
        }
        var gn = function() {
            function r() {}
            return function(n) {
                if (!zu(n)) return {};
                if (I) return I(n);
                r.prototype = n;
                var t = new r;
                return r.prototype = no, t
            }
        }();

        function yn() {}

        function dn(n, t) {
            this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = no
        }

        function bn(n) {
            this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Lo, this.__views__ = []
        }

        function wn(n) {
            var t = -1,
                r = null == n ? 0 : n.length;
            for (this.clear(); ++t < r;) {
                var e = n[t];
                this.set(e[0], e[1])
            }
        }

        function mn(n) {
            var t = -1,
                r = null == n ? 0 : n.length;
            for (this.clear(); ++t < r;) {
                var e = n[t];
                this.set(e[0], e[1])
            }
        }

        function xn(n) {
            var t = -1,
                r = null == n ? 0 : n.length;
            for (this.clear(); ++t < r;) {
                var e = n[t];
                this.set(e[0], e[1])
            }
        }

        function jn(n) {
            var t = -1,
                r = null == n ? 0 : n.length;
            for (this.__data__ = new xn; ++t < r;) this.add(n[t])
        }

        function An(n) {
            var t = this.__data__ = new mn(n);
            this.size = t.size
        }

        function kn(n, t) {
            var r = bu(n),
                e = !r && du(n),
                u = !r && !e && ju(n),
                i = !r && !e && !u && $u(n),
                o = r || e || u || i,
                f = o ? Da(n.length, l) : [],
                a = f.length;
            for (var c in n) !t && !k.call(n, c) || o && ("length" == c || u && ("offset" == c || "parent" == c) || i && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Vr(c, a)) || f.push(c);
            return f
        }

        function On(n) {
            var t = n.length;
            return t ? n[jt(0, t - 1)] : no
        }

        function In(n, t) {
            return ae(ur(n), Bn(t, 0, n.length))
        }

        function Rn(n) {
            return ae(ur(n))
        }

        function zn(n, t, r) {
            (r === no || _u(n[t], r)) && (r !== no || t in n) || Cn(n, t, r)
        }

        function En(n, t, r) {
            var e = n[t];
            k.call(n, t) && _u(e, r) && (r !== no || t in n) || Cn(n, t, r)
        }

        function Sn(n, t) {
            for (var r = n.length; r--;)
                if (_u(n[r][0], t)) return r;
            return -1
        }

        function Wn(n, e, u, i) {
            return Fn(n, function(n, t, r) {
                e(i, n, u(n), r)
            }), i
        }

        function Ln(n, t) {
            return n && ir(t, oi(t), n)
        }

        function Cn(n, t, r) {
            "__proto__" == t && U ? U(n, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : n[t] = r
        }

        function Un(n, t) {
            for (var r = -1, e = t.length, u = R(e), i = null == n; ++r < e;) u[r] = i ? no : ti(n, t[r]);
            return u
        }

        function Bn(n, t, r) {
            return n == n && (r !== no && (n = n <= r ? n : r), t !== no && (n = t <= n ? n : t)), n
        }

        function Tn(r, e, u, n, t, i) {
            var o, f = e & fo,
                a = e & ao,
                c = e & co;
            if (u && (o = t ? u(r, n, t, i) : u(r)), o !== no) return o;
            if (!zu(r)) return r;
            var l, s, h, p, v, _, g, y, d, b = bu(r);
            if (b) {
                if (y = (g = r).length, d = g.constructor(y), y && "string" == typeof g[0] && k.call(g, "index") && (d.index = g.index, d.input = g.input), o = d, !f) return ur(r, o)
            } else {
                var w = Pr(r),
                    m = w == qo || w == Zo;
                if (ju(r)) return Qt(r, f);
                if (w == Ho || w == To || m && !t) {
                    if (o = a || m ? {} : Zr(r), !f) return a ? (_ = h = r, p = (v = o) && ir(_, fi(_), v), ir(h, Nr(h), p)) : (s = Ln(o, l = r), ir(l, Fr(l), s))
                } else {
                    if (!ua[w]) return t ? r : {};
                    o = function(n, t, r, e) {
                        var u, i, o, f, a, c, l, s, h, p = n.constructor;
                        switch (t) {
                            case of:
                                return Xt(n);
                            case Mo:
                            case Fo:
                                return new p(+n);
                            case ff:
                                return s = n, h = e ? Xt(s.buffer) : s.buffer, new s.constructor(h, s.byteOffset, s.byteLength);
                            case af:
                            case cf:
                            case lf:
                            case sf:
                            case hf:
                            case pf:
                            case vf:
                            case _f:
                            case gf:
                                return nr(n, e);
                            case Ko:
                                return c = n, l = r, Ia(e ? l(Ha(c), fo) : Ha(c), _a, new c.constructor);
                            case Vo:
                            case nf:
                                return new p(n);
                            case Qo:
                                return (a = new(f = n).constructor(f.source, Nf.exec(f))).lastIndex = f.lastIndex, a;
                            case Xo:
                                return i = n, o = r, Ia(e ? o(Qa(i), fo) : Qa(i), ga, new i.constructor);
                            case tf:
                                return u = n, pn ? A(pn.call(u)) : {}
                        }
                    }(r, w, Tn, f)
                }
            }
            i || (i = new An);
            var x = i.get(r);
            if (x) return x;
            i.set(r, o);
            var j = b ? no : (c ? a ? Lr : Wr : a ? fi : oi)(r);
            return ba(j || r, function(n, t) {
                j && (n = r[t = n]), En(o, t, Tn(n, e, u, t, r, i))
            }), o
        }

        function $n(n, t, r) {
            var e = r.length;
            if (null == n) return !e;
            for (n = A(n); e--;) {
                var u = r[e],
                    i = t[u],
                    o = n[u];
                if (o === no && !(u in n) || !i(o)) return !1
            }
            return !0
        }

        function Dn(n, t, r) {
            if ("function" != typeof n) throw new z(eo);
            return ue(function() {
                n.apply(no, r)
            }, t)
        }

        function Mn(n, t, r, e) {
            var u = -1,
                i = ja,
                o = !0,
                f = n.length,
                a = [],
                c = t.length;
            if (!f) return a;
            r && (t = ka(t, Ma(r))), e ? (i = Aa, o = !1) : t.length >= to && (i = Na, o = !1, t = new jn(t));
            n: for (; ++u < f;) {
                var l = n[u],
                    s = null == r ? l : r(l);
                if (l = e || 0 !== l ? l : 0, o && s == s) {
                    for (var h = c; h--;)
                        if (t[h] === s) continue n;
                    a.push(l)
                } else i(t, s, e) || a.push(l)
            }
            return a
        }
        _n.templateSettings = {
            escape: Af,
            evaluate: kf,
            interpolate: Of,
            variable: "",
            imports: {
                _: _n
            }
        }, (_n.prototype = yn.prototype).constructor = _n, (dn.prototype = gn(yn.prototype)).constructor = dn, (bn.prototype = gn(yn.prototype)).constructor = bn, wn.prototype.clear = function() {
            this.__data__ = en ? en(null) : {}, this.size = 0
        }, wn.prototype.delete = function(n) {
            var t = this.has(n) && delete this.__data__[n];
            return this.size -= t ? 1 : 0, t
        }, wn.prototype.get = function(n) {
            var t = this.__data__;
            if (en) {
                var r = t[n];
                return r === uo ? no : r
            }
            return k.call(t, n) ? t[n] : no
        }, wn.prototype.has = function(n) {
            var t = this.__data__;
            return en ? t[n] !== no : k.call(t, n)
        }, wn.prototype.set = function(n, t) {
            var r = this.__data__;
            return this.size += this.has(n) ? 0 : 1, r[n] = en && t === no ? uo : t, this
        }, mn.prototype.clear = function() {
            this.__data__ = [], this.size = 0
        }, mn.prototype.delete = function(n) {
            var t = this.__data__,
                r = Sn(t, n);
            return !(r < 0 || (r == t.length - 1 ? t.pop() : S.call(t, r, 1), --this.size, 0))
        }, mn.prototype.get = function(n) {
            var t = this.__data__,
                r = Sn(t, n);
            return r < 0 ? no : t[r][1]
        }, mn.prototype.has = function(n) {
            return -1 < Sn(this.__data__, n)
        }, mn.prototype.set = function(n, t) {
            var r = this.__data__,
                e = Sn(r, n);
            return e < 0 ? (++this.size, r.push([n, t])) : r[e][1] = t, this
        }, xn.prototype.clear = function() {
            this.size = 0, this.__data__ = {
                hash: new wn,
                map: new(X || mn),
                string: new wn
            }
        }, xn.prototype.delete = function(n) {
            var t = $r(this, n).delete(n);
            return this.size -= t ? 1 : 0, t
        }, xn.prototype.get = function(n) {
            return $r(this, n).get(n)
        }, xn.prototype.has = function(n) {
            return $r(this, n).has(n)
        }, xn.prototype.set = function(n, t) {
            var r = $r(this, n),
                e = r.size;
            return r.set(n, t), this.size += r.size == e ? 0 : 1, this
        }, jn.prototype.add = jn.prototype.push = function(n) {
            return this.__data__.set(n, uo), this
        }, jn.prototype.has = function(n) {
            return this.__data__.has(n)
        }, An.prototype.clear = function() {
            this.__data__ = new mn, this.size = 0
        }, An.prototype.delete = function(n) {
            var t = this.__data__,
                r = t.delete(n);
            return this.size = t.size, r
        }, An.prototype.get = function(n) {
            return this.__data__.get(n)
        }, An.prototype.has = function(n) {
            return this.__data__.has(n)
        }, An.prototype.set = function(n, t) {
            var r = this.__data__;
            if (r instanceof mn) {
                var e = r.__data__;
                if (!X || e.length < to - 1) return e.push([n, t]), this.size = ++r.size, this;
                r = this.__data__ = new xn(e)
            }
            return r.set(n, t), this.size = r.size, this
        };
        var Fn = ar(Hn),
            Nn = ar(Jn, !0);

        function Pn(n, e) {
            var u = !0;
            return Fn(n, function(n, t, r) {
                return u = !!e(n, t, r)
            }), u
        }

        function qn(n, t, r) {
            for (var e = -1, u = n.length; ++e < u;) {
                var i = n[e],
                    o = t(i);
                if (null != o && (f === no ? o == o && !Tu(o) : r(o, f))) var f = o,
                    a = i
            }
            return a
        }

        function Zn(n, e) {
            var u = [];
            return Fn(n, function(n, t, r) {
                e(n, t, r) && u.push(n)
            }), u
        }

        function Kn(n, t, r, e, u) {
            var i = -1,
                o = n.length;
            for (r || (r = Kr), u || (u = []); ++i < o;) {
                var f = n[i];
                0 < t && r(f) ? 1 < t ? Kn(f, t - 1, r, e, u) : Oa(u, f) : e || (u[u.length] = f)
            }
            return u
        }
        var Vn = cr(),
            Gn = cr(!0);

        function Hn(n, t) {
            return n && Vn(n, t, oi)
        }

        function Jn(n, t) {
            return n && Gn(n, t, oi)
        }

        function Yn(t, n) {
            return xa(n, function(n) {
                return Ou(t[n])
            })
        }

        function Qn(n, t) {
            for (var r = 0, e = (t = Gt(t, n)).length; null != n && r < e;) n = n[he(t[r++])];
            return r && r == e ? n : no
        }

        function Xn(n, t, r) {
            var e = t(n);
            return bu(n) ? e : Oa(e, r(n))
        }

        function nt(n) {
            return null == n ? n === no ? rf : Go : C && C in A(n) ? function(n) {
                var t = k.call(n, C),
                    r = n[C];
                try {
                    n[C] = no;
                    var e = !0
                } catch (n) {}
                var u = v.call(n);
                return e && (t ? n[C] = r : delete n[C]), u
            }(n) : (t = n, v.call(t));
            var t
        }

        function tt(n, t) {
            return t < n
        }

        function rt(n, t) {
            return null != n && k.call(n, t)
        }

        function et(n, t) {
            return null != n && t in A(n)
        }

        function ut(n, t, r) {
            for (var e = r ? Aa : ja, u = n[0].length, i = n.length, o = i, f = R(i), a = 1 / 0, c = []; o--;) {
                var l = n[o];
                o && t && (l = ka(l, Ma(t))), a = V(l.length, a), f[o] = !r && (t || 120 <= u && 120 <= l.length) ? new jn(o && l) : no
            }
            l = n[0];
            var s = -1,
                h = f[0];
            n: for (; ++s < u && c.length < a;) {
                var p = l[s],
                    v = t ? t(p) : p;
                if (p = r || 0 !== p ? p : 0, !(h ? Na(h, v) : e(c, v, r))) {
                    for (o = i; --o;) {
                        var _ = f[o];
                        if (!(_ ? Na(_, v) : e(n[o], v, r))) continue n
                    }
                    h && h.push(v), c.push(p)
                }
            }
            return c
        }

        function it(n, t, r) {
            var e = null == (n = re(n, t = Gt(t, n))) ? n : n[he(ke(t))];
            return null == e ? no : ya(e, n, r)
        }

        function ot(n) {
            return Eu(n) && nt(n) == To
        }

        function ft(n, t, r, e, u) {
            return n === t || (null == n || null == t || !Eu(n) && !Eu(t) ? n != n && t != t : function(n, t, r, e, u, i) {
                var o = bu(n),
                    f = bu(t),
                    a = o ? $o : Pr(n),
                    c = f ? $o : Pr(t),
                    l = (a = a == To ? Ho : a) == Ho,
                    s = (c = c == To ? Ho : c) == Ho,
                    h = a == c;
                if (h && ju(n)) {
                    if (!ju(t)) return !1;
                    l = !(o = !0)
                }
                if (h && !l) return i || (i = new An), o || $u(n) ? Er(n, t, r, e, u, i) : function(n, t, r, e, u, i, o) {
                    switch (r) {
                        case ff:
                            if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset) return !1;
                            n = n.buffer, t = t.buffer;
                        case of:
                            return !(n.byteLength != t.byteLength || !i(new x(n), new x(t)));
                        case Mo:
                        case Fo:
                        case Vo:
                            return _u(+n, +t);
                        case Po:
                            return n.name == t.name && n.message == t.message;
                        case Qo:
                        case nf:
                            return n == t + "";
                        case Ko:
                            var f = Ha;
                        case Xo:
                            var a = e & lo;
                            if (f || (f = Qa), n.size != t.size && !a) return !1;
                            var c = o.get(n);
                            if (c) return c == t;
                            e |= so, o.set(n, t);
                            var l = Er(f(n), f(t), e, u, i, o);
                            return o.delete(n), l;
                        case tf:
                            if (pn) return pn.call(n) == pn.call(t)
                    }
                    return !1
                }(n, t, a, r, e, u, i);
                if (!(r & lo)) {
                    var p = l && k.call(n, "__wrapped__"),
                        v = s && k.call(t, "__wrapped__");
                    if (p || v) {
                        var _ = p ? n.value() : n,
                            g = v ? t.value() : t;
                        return i || (i = new An), u(_, g, r, e, i)
                    }
                }
                return !!h && (i || (i = new An), function(n, t, r, e, u, i) {
                    var o = r & lo,
                        f = Wr(n),
                        a = f.length,
                        c = Wr(t).length;
                    if (a != c && !o) return !1;
                    for (var l = a; l--;) {
                        var s = f[l];
                        if (!(o ? s in t : k.call(t, s))) return !1
                    }
                    var h = i.get(n);
                    if (h && i.get(t)) return h == t;
                    var p = !0;
                    i.set(n, t), i.set(t, n);
                    for (var v = o; ++l < a;) {
                        s = f[l];
                        var _ = n[s],
                            g = t[s];
                        if (e) var y = o ? e(g, _, s, t, n, i) : e(_, g, s, n, t, i);
                        if (!(y === no ? _ === g || u(_, g, r, e, i) : y)) {
                            p = !1;
                            break
                        }
                        v || (v = "constructor" == s)
                    }
                    if (p && !v) {
                        var d = n.constructor,
                            b = t.constructor;
                        d != b && "constructor" in n && "constructor" in t && !("function" == typeof d && d instanceof d && "function" == typeof b && b instanceof b) && (p = !1)
                    }
                    return i.delete(n), i.delete(t), p
                }(n, t, r, e, u, i))
            }(n, t, r, e, ft, u))
        }

        function at(n, t, r, e) {
            var u = r.length,
                i = u,
                o = !e;
            if (null == n) return !i;
            for (n = A(n); u--;) {
                var f = r[u];
                if (o && f[2] ? f[1] !== n[f[0]] : !(f[0] in n)) return !1
            }
            for (; ++u < i;) {
                var a = (f = r[u])[0],
                    c = n[a],
                    l = f[1];
                if (o && f[2]) {
                    if (c === no && !(a in n)) return !1
                } else {
                    var s = new An;
                    if (e) var h = e(c, l, a, n, t, s);
                    if (!(h === no ? ft(l, c, lo | so, e, s) : h)) return !1
                }
            }
            return !0
        }

        function ct(n) {
            return !(!zu(n) || (t = n, p && p in t)) && (Ou(n) ? b : Zf).test(pe(n));
            var t
        }

        function lt(n) {
            return "function" == typeof n ? n : null == n ? Wi : "object" == typeof n ? bu(n) ? gt(n[0], n[1]) : _t(n) : Fi(n)
        }

        function st(n) {
            if (!Qr(n)) return Z(n);
            var t = [];
            for (var r in A(n)) k.call(n, r) && "constructor" != r && t.push(r);
            return t
        }

        function ht(n) {
            if (!zu(n)) return function(n) {
                var t = [];
                if (null != n)
                    for (var r in A(n)) t.push(r);
                return t
            }(n);
            var t = Qr(n),
                r = [];
            for (var e in n)("constructor" != e || !t && k.call(n, e)) && r.push(e);
            return r
        }

        function pt(n, t) {
            return n < t
        }

        function vt(n, e) {
            var u = -1,
                i = mu(n) ? R(n.length) : [];
            return Fn(n, function(n, t, r) {
                i[++u] = e(n, t, r)
            }), i
        }

        function _t(t) {
            var r = Dr(t);
            return 1 == r.length && r[0][2] ? ne(r[0][0], r[0][1]) : function(n) {
                return n === t || at(n, t, r)
            }
        }

        function gt(r, e) {
            return Hr(r) && Xr(e) ? ne(he(r), e) : function(n) {
                var t = ti(n, r);
                return t === no && t === e ? ri(n, r) : ft(e, t, lo | so)
            }
        }

        function yt(e, u, i, o, f) {
            e !== u && Vn(u, function(n, t) {
                if (zu(n)) f || (f = new An),
                    function(n, t, r, e, u, i, o) {
                        var f = n[r],
                            a = t[r],
                            c = o.get(a);
                        if (c) return zn(n, r, c);
                        var l = i ? i(f, a, r + "", n, t, o) : no,
                            s = l === no;
                        if (s) {
                            var h = bu(a),
                                p = !h && ju(a),
                                v = !h && !p && $u(a);
                            l = a, h || p || v ? l = bu(f) ? f : xu(f) ? ur(f) : p ? Qt(a, !(s = !1)) : v ? nr(a, !(s = !1)) : [] : Lu(a) || du(a) ? du(l = f) ? l = Ku(f) : (!zu(f) || e && Ou(f)) && (l = Zr(a)) : s = !1
                        }
                        s && (o.set(a, l), u(l, a, e, i, o), o.delete(a)), zn(n, r, l)
                    }(e, u, t, i, yt, o, f);
                else {
                    var r = o ? o(e[t], n, t + "", e, u, f) : no;
                    r === no && (r = n), zn(e, t, r)
                }
            }, fi)
        }

        function dt(n, t) {
            var r = n.length;
            if (r) return Vr(t += t < 0 ? r : 0, r) ? n[t] : no
        }

        function bt(n, e, r) {
            var u = -1;
            return e = ka(e.length ? e : [Wi], Ma(Tr())),
                function(n, t) {
                    var r = n.length;
                    for (n.sort(t); r--;) n[r] = n[r].value;
                    return n
                }(vt(n, function(t, n, r) {
                    return {
                        criteria: ka(e, function(n) {
                            return n(t)
                        }),
                        index: ++u,
                        value: t
                    }
                }), function(n, t) {
                    return function(n, t, r) {
                        for (var e = -1, u = n.criteria, i = t.criteria, o = u.length, f = r.length; ++e < o;) {
                            var a = tr(u[e], i[e]);
                            if (a) {
                                if (f <= e) return a;
                                var c = r[e];
                                return a * ("desc" == c ? -1 : 1)
                            }
                        }
                        return n.index - t.index
                    }(n, t, r)
                })
        }

        function wt(n, t, r) {
            for (var e = -1, u = t.length, i = {}; ++e < u;) {
                var o = t[e],
                    f = Qn(n, o);
                r(f, o) && Rt(i, Gt(o, n), f)
            }
            return i
        }

        function mt(n, t, r, e) {
            var u = e ? La : Wa,
                i = -1,
                o = t.length,
                f = n;
            for (n === t && (t = ur(t)), r && (f = ka(n, Ma(r))); ++i < o;)
                for (var a = 0, c = t[i], l = r ? r(c) : c; - 1 < (a = u(f, l, a, e));) f !== n && S.call(f, a, 1), S.call(n, a, 1);
            return n
        }

        function xt(n, t) {
            for (var r = n ? t.length : 0, e = r - 1; r--;) {
                var u = t[r];
                if (r == e || u !== i) {
                    var i = u;
                    Vr(u) ? S.call(n, u, 1) : Mt(n, u)
                }
            }
            return n
        }

        function jt(n, t) {
            return n + M(J() * (t - n + 1))
        }

        function At(n, t) {
            var r = "";
            if (!n || t < 1 || Eo < t) return r;
            for (; t % 2 && (r += n), (t = M(t / 2)) && (n += n), t;);
            return r
        }

        function kt(n, t) {
            return ie(te(n, t, Wi), n + "")
        }

        function Ot(n) {
            return On(_i(n))
        }

        function It(n, t) {
            var r = _i(n);
            return ae(r, Bn(t, 0, r.length))
        }

        function Rt(n, t, r, e) {
            if (!zu(n)) return n;
            for (var u = -1, i = (t = Gt(t, n)).length, o = i - 1, f = n; null != f && ++u < i;) {
                var a = he(t[u]),
                    c = r;
                if (u != o) {
                    var l = f[a];
                    (c = e ? e(l, a, f) : no) === no && (c = zu(l) ? l : Vr(t[u + 1]) ? [] : {})
                }
                En(f, a, c), f = f[a]
            }
            return n
        }
        var zt = un ? function(n, t) {
                return un.set(n, t), n
            } : Wi,
            Et = U ? function(n, t) {
                return U(n, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: zi(t),
                    writable: !0
                })
            } : Wi;

        function St(n) {
            return ae(_i(n))
        }

        function Wt(n, t, r) {
            var e = -1,
                u = n.length;
            t < 0 && (t = u < -t ? 0 : u + t), (r = u < r ? u : r) < 0 && (r += u), u = r < t ? 0 : r - t >>> 0, t >>>= 0;
            for (var i = R(u); ++e < u;) i[e] = n[e + t];
            return i
        }

        function Lt(n, e) {
            var u;
            return Fn(n, function(n, t, r) {
                return !(u = e(n, t, r))
            }), !!u
        }

        function Ct(n, t, r) {
            var e = 0,
                u = null == n ? e : n.length;
            if ("number" == typeof t && t == t && u <= Uo) {
                for (; e < u;) {
                    var i = e + u >>> 1,
                        o = n[i];
                    null !== o && !Tu(o) && (r ? o <= t : o < t) ? e = i + 1 : u = i
                }
                return u
            }
            return Ut(n, t, Wi, r)
        }

        function Ut(n, t, r, e) {
            t = r(t);
            for (var u = 0, i = null == n ? 0 : n.length, o = t != t, f = null === t, a = Tu(t), c = t === no; u < i;) {
                var l = M((u + i) / 2),
                    s = r(n[l]),
                    h = s !== no,
                    p = null === s,
                    v = s == s,
                    _ = Tu(s);
                if (o) var g = e || v;
                else g = c ? v && (e || h) : f ? v && h && (e || !p) : a ? v && h && !p && (e || !_) : !p && !_ && (e ? s <= t : s < t);
                g ? u = l + 1 : i = l
            }
            return V(i, Co)
        }

        function Bt(n, t) {
            for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) {
                var o = n[r],
                    f = t ? t(o) : o;
                if (!r || !_u(f, a)) {
                    var a = f;
                    i[u++] = 0 === o ? 0 : o
                }
            }
            return i
        }

        function Tt(n) {
            return "number" == typeof n ? n : Tu(n) ? Wo : +n
        }

        function $t(n) {
            if ("string" == typeof n) return n;
            if (bu(n)) return ka(n, $t) + "";
            if (Tu(n)) return vn ? vn.call(n) : "";
            var t = n + "";
            return "0" == t && 1 / n == -zo ? "-0" : t
        }

        function Dt(n, t, r) {
            var e = -1,
                u = ja,
                i = n.length,
                o = !0,
                f = [],
                a = f;
            if (r) o = !1, u = Aa;
            else if (to <= i) {
                var c = t ? null : Ar(n);
                if (c) return Qa(c);
                o = !1, u = Na, a = new jn
            } else a = t ? [] : f;
            n: for (; ++e < i;) {
                var l = n[e],
                    s = t ? t(l) : l;
                if (l = r || 0 !== l ? l : 0, o && s == s) {
                    for (var h = a.length; h--;)
                        if (a[h] === s) continue n;
                    t && a.push(s), f.push(l)
                } else u(a, s, r) || (a !== f && a.push(s), f.push(l))
            }
            return f
        }

        function Mt(n, t) {
            return null == (n = re(n, t = Gt(t, n))) || delete n[he(ke(t))]
        }

        function Ft(n, t, r, e) {
            return Rt(n, t, r(Qn(n, t)), e)
        }

        function Nt(n, t, r, e) {
            for (var u = n.length, i = e ? u : -1;
                (e ? i-- : ++i < u) && t(n[i], i, n););
            return r ? Wt(n, e ? 0 : i, e ? i + 1 : u) : Wt(n, e ? i + 1 : 0, e ? u : i)
        }

        function Pt(n, t) {
            var r = n;
            return r instanceof bn && (r = r.value()), Ia(t, function(n, t) {
                return t.func.apply(t.thisArg, Oa([n], t.args))
            }, r)
        }

        function qt(n, t, r) {
            var e = n.length;
            if (e < 2) return e ? Dt(n[0]) : [];
            for (var u = -1, i = R(e); ++u < e;)
                for (var o = n[u], f = -1; ++f < e;) f != u && (i[u] = Mn(i[u] || o, n[f], t, r));
            return Dt(Kn(i, 1), t, r)
        }

        function Zt(n, t, r) {
            for (var e = -1, u = n.length, i = t.length, o = {}; ++e < u;) {
                var f = e < i ? t[e] : no;
                r(o, n[e], f)
            }
            return o
        }

        function Kt(n) {
            return xu(n) ? n : []
        }

        function Vt(n) {
            return "function" == typeof n ? n : Wi
        }

        function Gt(n, t) {
            return bu(n) ? n : Hr(n, t) ? [n] : se(Vu(n))
        }
        var Ht = kt;

        function Jt(n, t, r) {
            var e = n.length;
            return r = r === no ? e : r, !t && e <= r ? n : Wt(n, t, r)
        }
        var Yt = B || function(n) {
            return fa.clearTimeout(n)
        };

        function Qt(n, t) {
            if (t) return n.slice();
            var r = n.length,
                e = j ? j(r) : new n.constructor(r);
            return n.copy(e), e
        }

        function Xt(n) {
            var t = new n.constructor(n.byteLength);
            return new x(t).set(new x(n)), t
        }

        function nr(n, t) {
            var r = t ? Xt(n.buffer) : n.buffer;
            return new n.constructor(r, n.byteOffset, n.length)
        }

        function tr(n, t) {
            if (n !== t) {
                var r = n !== no,
                    e = null === n,
                    u = n == n,
                    i = Tu(n),
                    o = t !== no,
                    f = null === t,
                    a = t == t,
                    c = Tu(t);
                if (!f && !c && !i && t < n || i && o && a && !f && !c || e && o && a || !r && a || !u) return 1;
                if (!e && !i && !c && n < t || c && r && u && !e && !i || f && r && u || !o && u || !a) return -1
            }
            return 0
        }

        function rr(n, t, r, e) {
            for (var u = -1, i = n.length, o = r.length, f = -1, a = t.length, c = K(i - o, 0), l = R(a + c), s = !e; ++f < a;) l[f] = t[f];
            for (; ++u < o;)(s || u < i) && (l[r[u]] = n[u]);
            for (; c--;) l[f++] = n[u++];
            return l
        }

        function er(n, t, r, e) {
            for (var u = -1, i = n.length, o = -1, f = r.length, a = -1, c = t.length, l = K(i - f, 0), s = R(l + c), h = !e; ++u < l;) s[u] = n[u];
            for (var p = u; ++a < c;) s[p + a] = t[a];
            for (; ++o < f;)(h || u < i) && (s[p + r[o]] = n[u++]);
            return s
        }

        function ur(n, t) {
            var r = -1,
                e = n.length;
            for (t || (t = R(e)); ++r < e;) t[r] = n[r];
            return t
        }

        function ir(n, t, r, e) {
            var u = !r;
            r || (r = {});
            for (var i = -1, o = t.length; ++i < o;) {
                var f = t[i],
                    a = e ? e(r[f], n[f], f, r, n) : no;
                a === no && (a = n[f]), u ? Cn(r, f, a) : En(r, f, a)
            }
            return r
        }

        function or(u, i) {
            return function(n, t) {
                var r = bu(n) ? da : Wn,
                    e = i ? i() : {};
                return r(n, u, Tr(t, 2), e)
            }
        }

        function fr(f) {
            return kt(function(n, t) {
                var r = -1,
                    e = t.length,
                    u = 1 < e ? t[e - 1] : no,
                    i = 2 < e ? t[2] : no;
                for (u = 3 < f.length && "function" == typeof u ? (e--, u) : no, i && Gr(t[0], t[1], i) && (u = e < 3 ? no : u, e = 1), n = A(n); ++r < e;) {
                    var o = t[r];
                    o && f(n, o, r, u)
                }
                return n
            })
        }

        function ar(i, o) {
            return function(n, t) {
                if (null == n) return n;
                if (!mu(n)) return i(n, t);
                for (var r = n.length, e = o ? r : -1, u = A(n);
                    (o ? e-- : ++e < r) && !1 !== t(u[e], e, u););
                return n
            }
        }

        function cr(a) {
            return function(n, t, r) {
                for (var e = -1, u = A(n), i = r(n), o = i.length; o--;) {
                    var f = i[a ? o : ++e];
                    if (!1 === t(u[f], f, u)) break
                }
                return n
            }
        }

        function lr(u) {
            return function(n) {
                var t = Ga(n = Vu(n)) ? nc(n) : no,
                    r = t ? t[0] : n.charAt(0),
                    e = t ? Jt(t, 1).join("") : n.slice(1);
                return r[u]() + e
            }
        }

        function sr(t) {
            return function(n) {
                return Ia(Oi(di(n).replace(Yf, "")), t, "")
            }
        }

        function hr(e) {
            return function() {
                var n = arguments;
                switch (n.length) {
                    case 0:
                        return new e;
                    case 1:
                        return new e(n[0]);
                    case 2:
                        return new e(n[0], n[1]);
                    case 3:
                        return new e(n[0], n[1], n[2]);
                    case 4:
                        return new e(n[0], n[1], n[2], n[3]);
                    case 5:
                        return new e(n[0], n[1], n[2], n[3], n[4]);
                    case 6:
                        return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
                    case 7:
                        return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6])
                }
                var t = gn(e.prototype),
                    r = e.apply(t, n);
                return zu(r) ? r : t
            }
        }

        function pr(o) {
            return function(n, t, r) {
                var e = A(n);
                if (!mu(n)) {
                    var u = Tr(t, 3);
                    n = oi(n), t = function(n) {
                        return u(e[n], n, e)
                    }
                }
                var i = o(n, t, r);
                return -1 < i ? e[u ? n[i] : i] : no
            }
        }

        function vr(a) {
            return Sr(function(u) {
                var i = u.length,
                    n = i,
                    t = dn.prototype.thru;
                for (a && u.reverse(); n--;) {
                    var r = u[n];
                    if ("function" != typeof r) throw new z(eo);
                    if (t && !o && "wrapper" == Ur(r)) var o = new dn([], !0)
                }
                for (n = o ? n : i; ++n < i;) {
                    var e = Ur(r = u[n]),
                        f = "wrapper" == e ? Cr(r) : no;
                    o = f && Jr(f[0]) && f[1] == (wo | _o | yo | mo) && !f[4].length && 1 == f[9] ? o[Ur(f[0])].apply(o, f[3]) : 1 == r.length && Jr(r) ? o[e]() : o.thru(r)
                }
                return function() {
                    var n = arguments,
                        t = n[0];
                    if (o && 1 == n.length && bu(t)) return o.plant(t).value();
                    for (var r = 0, e = i ? u[r].apply(this, n) : t; ++r < i;) e = u[r].call(this, e);
                    return e
                }
            })
        }

        function _r(c, l, s, h, p, v, _, g, y, d) {
            var b = l & wo,
                w = l & ho,
                m = l & po,
                x = l & (_o | go),
                j = l & xo,
                A = m ? no : hr(c);
            return function n() {
                for (var t = arguments.length, r = R(t), e = t; e--;) r[e] = arguments[e];
                if (x) var u = Br(n),
                    i = function(n, t) {
                        for (var r = n.length, e = 0; r--;) n[r] === t && ++e;
                        return e
                    }(r, u);
                if (h && (r = rr(r, h, p, x)), v && (r = er(r, v, _, x)), t -= i, x && t < d) {
                    var o = Ya(r, u);
                    return xr(c, l, _r, n.placeholder, s, r, o, g, y, d - t)
                }
                var f = w ? s : this,
                    a = m ? f[c] : c;
                return t = r.length, g ? r = function(n, t) {
                    for (var r = n.length, e = V(t.length, r), u = ur(n); e--;) {
                        var i = t[e];
                        n[e] = Vr(i, r) ? u[i] : no
                    }
                    return n
                }(r, g) : j && 1 < t && r.reverse(), b && y < t && (r.length = y), this && this !== fa && this instanceof n && (a = A || hr(a)), a.apply(f, r)
            }
        }

        function gr(o, f) {
            return function(n, t) {
                return r = n, e = o, u = f(t), i = {}, Hn(r, function(n, t, r) {
                    e(i, u(n), t, r)
                }), i;
                var r, e, u, i
            }
        }

        function yr(e, u) {
            return function(n, t) {
                var r;
                if (n === no && t === no) return u;
                if (n !== no && (r = n), t !== no) {
                    if (r === no) return t;
                    "string" == typeof n || "string" == typeof t ? (n = $t(n), t = $t(t)) : (n = Tt(n), t = Tt(t)), r = e(n, t)
                }
                return r
            }
        }

        function dr(e) {
            return Sr(function(n) {
                return n = ka(n, Ma(Tr())), kt(function(t) {
                    var r = this;
                    return e(n, function(n) {
                        return ya(n, r, t)
                    })
                })
            })
        }

        function br(n, t) {
            var r = (t = t === no ? " " : $t(t)).length;
            if (r < 2) return r ? At(t, n) : t;
            var e = At(t, D(n / Xa(t)));
            return Ga(t) ? Jt(nc(e), 0, n).join("") : e.slice(0, n)
        }

        function wr(e) {
            return function(n, t, r) {
                return r && "number" != typeof r && Gr(n, t, r) && (t = r = no), n = Nu(n), t === no ? (t = n, n = 0) : t = Nu(t),
                    function(n, t, r, e) {
                        for (var u = -1, i = K(D((t - n) / (r || 1)), 0), o = R(i); i--;) o[e ? i : ++u] = n, n += r;
                        return o
                    }(n, t, r = r === no ? n < t ? 1 : -1 : Nu(r), e)
            }
        }

        function mr(r) {
            return function(n, t) {
                return "string" == typeof n && "string" == typeof t || (n = Zu(n), t = Zu(t)), r(n, t)
            }
        }

        function xr(n, t, r, e, u, i, o, f, a, c) {
            var l = t & _o;
            t |= l ? yo : bo, (t &= ~(l ? bo : yo)) & vo || (t &= ~(ho | po));
            var s = [n, t, u, l ? i : no, l ? o : no, l ? no : i, l ? no : o, f, a, c],
                h = r.apply(no, s);
            return Jr(n) && ee(h, s), h.placeholder = e, oe(h, n, t)
        }

        function jr(n) {
            var e = i[n];
            return function(n, t) {
                if (n = Zu(n), t = null == t ? 0 : V(Pu(t), 292)) {
                    var r = (Vu(n) + "e").split("e");
                    return +((r = (Vu(e(r[0] + "e" + (+r[1] + t))) + "e").split("e"))[0] + "e" + (+r[1] - t))
                }
                return e(n)
            }
        }
        var Ar = tn && 1 / Qa(new tn([, -0]))[1] == zo ? function(n) {
            return new tn(n)
        } : Ti;

        function kr(o) {
            return function(n) {
                var t, r, e, u, i = Pr(n);
                return i == Ko ? Ha(n) : i == Xo ? (t = n, r = -1, e = Array(t.size), t.forEach(function(n) {
                    e[++r] = [n, n]
                }), e) : ka(o(u = n), function(n) {
                    return [n, u[n]]
                })
            }
        }

        function Or(n, t, r, e, u, i, o, f) {
            var a = t & po;
            if (!a && "function" != typeof n) throw new z(eo);
            var c = e ? e.length : 0;
            if (c || (t &= ~(yo | bo), e = u = no), o = o === no ? o : K(Pu(o), 0), f = f === no ? f : Pu(f), c -= u ? u.length : 0, t & bo) {
                var l = e,
                    s = u;
                e = u = no
            }
            var h, p, v, _, g, y, d, b, w, m, x, j, A, k = a ? no : Cr(n),
                O = [n, t, r, e, u, l, s, i, o, f];
            if (k && function(n, t) {
                    var r = n[1],
                        e = t[1],
                        u = r | e,
                        i = u < (ho | po | wo),
                        o = e == wo && r == _o || e == wo && r == mo && n[7].length <= t[8] || e == (wo | mo) && t[7].length <= t[8] && r == _o;
                    if (i || o) {
                        e & ho && (n[2] = t[2], u |= r & ho ? 0 : vo);
                        var f = t[3];
                        if (f) {
                            var a = n[3];
                            n[3] = a ? rr(a, f, t[4]) : f, n[4] = a ? Ya(n[3], oo) : t[4]
                        }(f = t[5]) && (a = n[5], n[5] = a ? er(a, f, t[6]) : f, n[6] = a ? Ya(n[5], oo) : t[6]), (f = t[7]) && (n[7] = f), e & wo && (n[8] = null == n[8] ? t[8] : V(n[8], t[8])), null == n[9] && (n[9] = t[9]), n[0] = t[0], n[1] = u
                    }
                }(O, k), n = O[0], t = O[1], r = O[2], e = O[3], u = O[4], !(f = O[9] = O[9] === no ? a ? 0 : n.length : K(O[9] - c, 0)) && t & (_o | go) && (t &= ~(_o | go)), t && t != ho) t == _o || t == go ? (d = t, b = f, w = hr(y = n), I = function n() {
                for (var t = arguments.length, r = R(t), e = t, u = Br(n); e--;) r[e] = arguments[e];
                var i = t < 3 && r[0] !== u && r[t - 1] !== u ? [] : Ya(r, u);
                return (t -= i.length) < b ? xr(y, d, _r, n.placeholder, no, r, i, no, no, b - t) : ya(this && this !== fa && this instanceof n ? w : y, this, r)
            }) : t != yo && t != (ho | yo) || u.length ? I = _r.apply(no, O) : (p = r, v = e, _ = t & ho, g = hr(h = n), I = function n() {
                for (var t = -1, r = arguments.length, e = -1, u = v.length, i = R(u + r), o = this && this !== fa && this instanceof n ? g : h; ++e < u;) i[e] = v[e];
                for (; r--;) i[e++] = arguments[++t];
                return ya(o, _ ? p : this, i)
            });
            else var I = (x = r, j = t & ho, A = hr(m = n), function n() {
                return (this && this !== fa && this instanceof n ? A : m).apply(j ? x : this, arguments)
            });
            return oe((k ? zt : ee)(I, O), n, t)
        }

        function Ir(n, t, r, e) {
            return n === no || _u(n, a[r]) && !k.call(e, r) ? t : n
        }

        function Rr(n, t, r, e, u, i) {
            return zu(n) && zu(t) && (i.set(t, n), yt(n, t, no, Rr, i), i.delete(t)), n
        }

        function zr(n) {
            return Lu(n) ? no : n
        }

        function Er(n, t, r, e, u, i) {
            var o = r & lo,
                f = n.length,
                a = t.length;
            if (f != a && !(o && f < a)) return !1;
            var c = i.get(n);
            if (c && i.get(t)) return c == t;
            var l = -1,
                s = !0,
                h = r & so ? new jn : no;
            for (i.set(n, t), i.set(t, n); ++l < f;) {
                var p = n[l],
                    v = t[l];
                if (e) var _ = o ? e(v, p, l, t, n, i) : e(p, v, l, n, t, i);
                if (_ !== no) {
                    if (_) continue;
                    s = !1;
                    break
                }
                if (h) {
                    if (!za(t, function(n, t) {
                            if (!Na(h, t) && (p === n || u(p, n, r, e, i))) return h.push(t)
                        })) {
                        s = !1;
                        break
                    }
                } else if (p !== v && !u(p, v, r, e, i)) {
                    s = !1;
                    break
                }
            }
            return i.delete(n), i.delete(t), s
        }

        function Sr(n) {
            return ie(te(n, no, we), n + "")
        }

        function Wr(n) {
            return Xn(n, oi, Fr)
        }

        function Lr(n) {
            return Xn(n, fi, Nr)
        }
        var Cr = un ? function(n) {
            return un.get(n)
        } : Ti;

        function Ur(n) {
            for (var t = n.name + "", r = on[t], e = k.call(on, t) ? r.length : 0; e--;) {
                var u = r[e],
                    i = u.func;
                if (null == i || i == n) return u.name
            }
            return t
        }

        function Br(n) {
            return (k.call(_n, "placeholder") ? _n : n).placeholder
        }

        function Tr() {
            var n = _n.iteratee || Li;
            return n = n === Li ? lt : n, arguments.length ? n(arguments[0], arguments[1]) : n
        }

        function $r(n, t) {
            var r, e, u = n.__data__;
            return ("string" == (e = typeof(r = t)) || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== r : null === r) ? u["string" == typeof t ? "string" : "hash"] : u.map
        }

        function Dr(n) {
            for (var t = oi(n), r = t.length; r--;) {
                var e = t[r],
                    u = n[e];
                t[r] = [e, u, Xr(u)]
            }
            return t
        }

        function Mr(n, t) {
            var r, e, u = (e = t, null == (r = n) ? no : r[e]);
            return ct(u) ? u : no
        }
        var Fr = F ? function(t) {
                return null == t ? [] : (t = A(t), xa(F(t), function(n) {
                    return E.call(t, n)
                }))
            } : qi,
            Nr = F ? function(n) {
                for (var t = []; n;) Oa(t, Fr(n)), n = O(n);
                return t
            } : qi,
            Pr = nt;

        function qr(n, t, r) {
            for (var e = -1, u = (t = Gt(t, n)).length, i = !1; ++e < u;) {
                var o = he(t[e]);
                if (!(i = null != n && r(n, o))) break;
                n = n[o]
            }
            return i || ++e != u ? i : !!(u = null == n ? 0 : n.length) && Ru(u) && Vr(o, u) && (bu(n) || du(n))
        }

        function Zr(n) {
            return "function" != typeof n.constructor || Qr(n) ? {} : gn(O(n))
        }

        function Kr(n) {
            return bu(n) || du(n) || !!(W && n && n[W])
        }

        function Vr(n, t) {
            return !!(t = null == t ? Eo : t) && ("number" == typeof n || Vf.test(n)) && -1 < n && n % 1 == 0 && n < t
        }

        function Gr(n, t, r) {
            if (!zu(r)) return !1;
            var e = typeof t;
            return !!("number" == e ? mu(r) && Vr(t, r.length) : "string" == e && t in r) && _u(r[t], n)
        }

        function Hr(n, t) {
            if (bu(n)) return !1;
            var r = typeof n;
            return !("number" != r && "symbol" != r && "boolean" != r && null != n && !Tu(n)) || Rf.test(n) || !If.test(n) || null != t && n in A(t)
        }

        function Jr(n) {
            var t = Ur(n),
                r = _n[t];
            if ("function" != typeof r || !(t in bn.prototype)) return !1;
            if (n === r) return !0;
            var e = Cr(r);
            return !!e && n === e[0]
        }(Q && Pr(new Q(new ArrayBuffer(1))) != ff || X && Pr(new X) != Ko || nn && Pr(nn.resolve()) != Jo || tn && Pr(new tn) != Xo || rn && Pr(new rn) != ef) && (Pr = function(n) {
            var t = nt(n),
                r = t == Ho ? n.constructor : no,
                e = r ? pe(r) : "";
            if (e) switch (e) {
                case fn:
                    return ff;
                case an:
                    return Ko;
                case cn:
                    return Jo;
                case ln:
                    return Xo;
                case sn:
                    return ef
            }
            return t
        });
        var Yr = c ? Ou : Zi;

        function Qr(n) {
            var t = n && n.constructor;
            return n === ("function" == typeof t && t.prototype || a)
        }

        function Xr(n) {
            return n == n && !zu(n)
        }

        function ne(t, r) {
            return function(n) {
                return null != n && n[t] === r && (r !== no || t in A(n))
            }
        }

        function te(i, o, f) {
            return o = K(o === no ? i.length - 1 : o, 0),
                function() {
                    for (var n = arguments, t = -1, r = K(n.length - o, 0), e = R(r); ++t < r;) e[t] = n[o + t];
                    t = -1;
                    for (var u = R(o + 1); ++t < o;) u[t] = n[t];
                    return u[o] = f(e), ya(i, this, u)
                }
        }

        function re(n, t) {
            return t.length < 2 ? n : Qn(n, Wt(t, 0, -1))
        }
        var ee = fe(zt),
            ue = $ || function(n, t) {
                return fa.setTimeout(n, t)
            },
            ie = fe(Et);

        function oe(n, t, r) {
            var e, u, i, o = t + "";
            return ie(n, function(n, t) {
                var r = t.length;
                if (!r) return n;
                var e = r - 1;
                return t[e] = (1 < r ? "& " : "") + t[e], t = t.join(2 < r ? ", " : " "), n.replace(Bf, "{\n/* [wrapped with " + t + "] */\n")
            }(o, (i = o.match(Tf), e = i ? i[1].split($f) : [], u = r, ba(Bo, function(n) {
                var t = "_." + n[0];
                u & n[1] && !ja(e, t) && e.push(t)
            }), e.sort())))
        }

        function fe(r) {
            var e = 0,
                u = 0;
            return function() {
                var n = G(),
                    t = Oo - (n - u);
                if (u = n, 0 < t) {
                    if (++e >= ko) return arguments[0]
                } else e = 0;
                return r.apply(no, arguments)
            }
        }

        function ae(n, t) {
            var r = -1,
                e = n.length,
                u = e - 1;
            for (t = t === no ? e : t; ++r < t;) {
                var i = jt(r, u),
                    o = n[i];
                n[i] = n[r], n[r] = o
            }
            return n.length = t, n
        }
        var ce, le, se = (ce = cu(function(n) {
            var u = [];
            return zf.test(n) && u.push(""), n.replace(Ef, function(n, t, r, e) {
                u.push(r ? e.replace(Mf, "$1") : t || n)
            }), u
        }, function(n) {
            return le.size === io && le.clear(), n
        }), le = ce.cache, ce);

        function he(n) {
            if ("string" == typeof n || Tu(n)) return n;
            var t = n + "";
            return "0" == t && 1 / n == -zo ? "-0" : t
        }

        function pe(n) {
            if (null != n) {
                try {
                    return s.call(n)
                } catch (n) {}
                try {
                    return n + ""
                } catch (n) {}
            }
            return ""
        }

        function ve(n) {
            if (n instanceof bn) return n.clone();
            var t = new dn(n.__wrapped__, n.__chain__);
            return t.__actions__ = ur(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, t
        }
        var _e = kt(function(n, t) {
                return xu(n) ? Mn(n, Kn(t, 1, xu, !0)) : []
            }),
            ge = kt(function(n, t) {
                var r = ke(t);
                return xu(r) && (r = no), xu(n) ? Mn(n, Kn(t, 1, xu, !0), Tr(r, 2)) : []
            }),
            ye = kt(function(n, t) {
                var r = ke(t);
                return xu(r) && (r = no), xu(n) ? Mn(n, Kn(t, 1, xu, !0), no, r) : []
            });

        function de(n, t, r) {
            var e = null == n ? 0 : n.length;
            if (!e) return -1;
            var u = null == r ? 0 : Pu(r);
            return u < 0 && (u = K(e + u, 0)), Sa(n, Tr(t, 3), u)
        }

        function be(n, t, r) {
            var e = null == n ? 0 : n.length;
            if (!e) return -1;
            var u = e - 1;
            return r !== no && (u = Pu(r), u = r < 0 ? K(e + u, 0) : V(u, e - 1)), Sa(n, Tr(t, 3), u, !0)
        }

        function we(n) {
            return null != n && n.length ? Kn(n, 1) : []
        }

        function me(n) {
            return n && n.length ? n[0] : no
        }
        var xe = kt(function(n) {
                var t = ka(n, Kt);
                return t.length && t[0] === n[0] ? ut(t) : []
            }),
            je = kt(function(n) {
                var t = ke(n),
                    r = ka(n, Kt);
                return t === ke(r) ? t = no : r.pop(), r.length && r[0] === n[0] ? ut(r, Tr(t, 2)) : []
            }),
            Ae = kt(function(n) {
                var t = ke(n),
                    r = ka(n, Kt);
                return (t = "function" == typeof t ? t : no) && r.pop(), r.length && r[0] === n[0] ? ut(r, no, t) : []
            });

        function ke(n) {
            var t = null == n ? 0 : n.length;
            return t ? n[t - 1] : no
        }
        var Oe = kt(Ie);

        function Ie(n, t) {
            return n && n.length && t && t.length ? mt(n, t) : n
        }
        var Re = Sr(function(n, t) {
            var r = null == n ? 0 : n.length,
                e = Un(n, t);
            return xt(n, ka(t, function(n) {
                return Vr(n, r) ? +n : n
            }).sort(tr)), e
        });

        function ze(n) {
            return null == n ? n : Y.call(n)
        }
        var Ee = kt(function(n) {
                return Dt(Kn(n, 1, xu, !0))
            }),
            Se = kt(function(n) {
                var t = ke(n);
                return xu(t) && (t = no), Dt(Kn(n, 1, xu, !0), Tr(t, 2))
            }),
            We = kt(function(n) {
                var t = ke(n);
                return t = "function" == typeof t ? t : no, Dt(Kn(n, 1, xu, !0), no, t)
            });

        function Le(t) {
            if (!t || !t.length) return [];
            var r = 0;
            return t = xa(t, function(n) {
                if (xu(n)) return r = K(n.length, r), !0
            }), Da(r, function(n) {
                return ka(t, Ba(n))
            })
        }

        function Ce(n, t) {
            if (!n || !n.length) return [];
            var r = Le(n);
            return null == t ? r : ka(r, function(n) {
                return ya(t, no, n)
            })
        }
        var Ue = kt(function(n, t) {
                return xu(n) ? Mn(n, t) : []
            }),
            Be = kt(function(n) {
                return qt(xa(n, xu))
            }),
            Te = kt(function(n) {
                var t = ke(n);
                return xu(t) && (t = no), qt(xa(n, xu), Tr(t, 2))
            }),
            $e = kt(function(n) {
                var t = ke(n);
                return t = "function" == typeof t ? t : no, qt(xa(n, xu), no, t)
            }),
            De = kt(Le);
        var Me = kt(function(n) {
            var t = n.length,
                r = 1 < t ? n[t - 1] : no;
            return Ce(n, r = "function" == typeof r ? (n.pop(), r) : no)
        });

        function Fe(n) {
            var t = _n(n);
            return t.__chain__ = !0, t
        }

        function Ne(n, t) {
            return t(n)
        }
        var Pe = Sr(function(t) {
            var r = t.length,
                n = r ? t[0] : 0,
                e = this.__wrapped__,
                u = function(n) {
                    return Un(n, t)
                };
            return !(1 < r || this.__actions__.length) && e instanceof bn && Vr(n) ? ((e = e.slice(n, +n + (r ? 1 : 0))).__actions__.push({
                func: Ne,
                args: [u],
                thisArg: no
            }), new dn(e, this.__chain__).thru(function(n) {
                return r && !n.length && n.push(no), n
            })) : this.thru(u)
        });
        var qe = or(function(n, t, r) {
            k.call(n, r) ? ++n[r] : Cn(n, r, 1)
        });
        var Ze = pr(de),
            Ke = pr(be);

        function Ve(n, t) {
            return (bu(n) ? ba : Fn)(n, Tr(t, 3))
        }

        function Ge(n, t) {
            return (bu(n) ? wa : Nn)(n, Tr(t, 3))
        }
        var He = or(function(n, t, r) {
            k.call(n, r) ? n[r].push(t) : Cn(n, r, [t])
        });
        var Je = kt(function(n, t, r) {
                var e = -1,
                    u = "function" == typeof t,
                    i = mu(n) ? R(n.length) : [];
                return Fn(n, function(n) {
                    i[++e] = u ? ya(t, n, r) : it(n, t, r)
                }), i
            }),
            Ye = or(function(n, t, r) {
                Cn(n, r, t)
            });

        function Qe(n, t) {
            return (bu(n) ? ka : vt)(n, Tr(t, 3))
        }
        var Xe = or(function(n, t, r) {
            n[r ? 0 : 1].push(t)
        }, function() {
            return [
                [],
                []
            ]
        });
        var nu = kt(function(n, t) {
                if (null == n) return [];
                var r = t.length;
                return 1 < r && Gr(n, t[0], t[1]) ? t = [] : 2 < r && Gr(t[0], t[1], t[2]) && (t = [t[0]]), bt(n, Kn(t, 1), [])
            }),
            tu = T || function() {
                return fa.Date.now()
            };

        function ru(n, t, r) {
            return t = r ? no : t, t = n && null == t ? n.length : t, Or(n, wo, no, no, no, no, t)
        }

        function eu(n, t) {
            var r;
            if ("function" != typeof t) throw new z(eo);
            return n = Pu(n),
                function() {
                    return 0 < --n && (r = t.apply(this, arguments)), n <= 1 && (t = no), r
                }
        }
        var uu = kt(function(n, t, r) {
                var e = ho;
                if (r.length) {
                    var u = Ya(r, Br(uu));
                    e |= yo
                }
                return Or(n, e, t, r, u)
            }),
            iu = kt(function(n, t, r) {
                var e = ho | po;
                if (r.length) {
                    var u = Ya(r, Br(iu));
                    e |= yo
                }
                return Or(t, e, n, r, u)
            });

        function ou(e, u, n) {
            var i, o, f, a, c, l, s = 0,
                h = !1,
                p = !1,
                t = !0;
            if ("function" != typeof e) throw new z(eo);

            function v(n) {
                var t = i,
                    r = o;
                return i = o = no, s = n, a = e.apply(r, t)
            }

            function _(n) {
                var t = n - l;
                return l === no || u <= t || t < 0 || p && f <= n - s
            }

            function g() {
                var n, t, r = tu();
                if (_(r)) return y(r);
                c = ue(g, (t = u - ((n = r) - l), p ? V(t, f - (n - s)) : t))
            }

            function y(n) {
                return c = no, t && i ? v(n) : (i = o = no, a)
            }

            function r() {
                var n, t = tu(),
                    r = _(t);
                if (i = arguments, o = this, l = t, r) {
                    if (c === no) return s = n = l, c = ue(g, u), h ? v(n) : a;
                    if (p) return c = ue(g, u), v(l)
                }
                return c === no && (c = ue(g, u)), a
            }
            return u = Zu(u) || 0, zu(n) && (h = !!n.leading, f = (p = "maxWait" in n) ? K(Zu(n.maxWait) || 0, u) : f, t = "trailing" in n ? !!n.trailing : t), r.cancel = function() {
                c !== no && Yt(c), s = 0, i = l = o = c = no
            }, r.flush = function() {
                return c === no ? a : y(tu())
            }, r
        }
        var fu = kt(function(n, t) {
                return Dn(n, 1, t)
            }),
            au = kt(function(n, t, r) {
                return Dn(n, Zu(t) || 0, r)
            });

        function cu(u, i) {
            if ("function" != typeof u || null != i && "function" != typeof i) throw new z(eo);
            var o = function() {
                var n = arguments,
                    t = i ? i.apply(this, n) : n[0],
                    r = o.cache;
                if (r.has(t)) return r.get(t);
                var e = u.apply(this, n);
                return o.cache = r.set(t, e) || r, e
            };
            return o.cache = new(cu.Cache || xn), o
        }

        function lu(t) {
            if ("function" != typeof t) throw new z(eo);
            return function() {
                var n = arguments;
                switch (n.length) {
                    case 0:
                        return !t.call(this);
                    case 1:
                        return !t.call(this, n[0]);
                    case 2:
                        return !t.call(this, n[0], n[1]);
                    case 3:
                        return !t.call(this, n[0], n[1], n[2])
                }
                return !t.apply(this, n)
            }
        }
        cu.Cache = xn;
        var su = Ht(function(e, u) {
                var i = (u = 1 == u.length && bu(u[0]) ? ka(u[0], Ma(Tr())) : ka(Kn(u, 1), Ma(Tr()))).length;
                return kt(function(n) {
                    for (var t = -1, r = V(n.length, i); ++t < r;) n[t] = u[t].call(this, n[t]);
                    return ya(e, this, n)
                })
            }),
            hu = kt(function(n, t) {
                var r = Ya(t, Br(hu));
                return Or(n, yo, no, t, r)
            }),
            pu = kt(function(n, t) {
                var r = Ya(t, Br(pu));
                return Or(n, bo, no, t, r)
            }),
            vu = Sr(function(n, t) {
                return Or(n, mo, no, no, no, t)
            });

        function _u(n, t) {
            return n === t || n != n && t != t
        }
        var gu = mr(tt),
            yu = mr(function(n, t) {
                return t <= n
            }),
            du = ot(function() {
                return arguments
            }()) ? ot : function(n) {
                return Eu(n) && k.call(n, "callee") && !E.call(n, "callee")
            },
            bu = R.isArray,
            wu = ca ? Ma(ca) : function(n) {
                return Eu(n) && nt(n) == of
            };

        function mu(n) {
            return null != n && Ru(n.length) && !Ou(n)
        }

        function xu(n) {
            return Eu(n) && mu(n)
        }
        var ju = N || Zi,
            Au = la ? Ma(la) : function(n) {
                return Eu(n) && nt(n) == Fo
            };

        function ku(n) {
            if (!Eu(n)) return !1;
            var t = nt(n);
            return t == Po || t == No || "string" == typeof n.message && "string" == typeof n.name && !Lu(n)
        }

        function Ou(n) {
            if (!zu(n)) return !1;
            var t = nt(n);
            return t == qo || t == Zo || t == Do || t == Yo
        }

        function Iu(n) {
            return "number" == typeof n && n == Pu(n)
        }

        function Ru(n) {
            return "number" == typeof n && -1 < n && n % 1 == 0 && n <= Eo
        }

        function zu(n) {
            var t = typeof n;
            return null != n && ("object" == t || "function" == t)
        }

        function Eu(n) {
            return null != n && "object" == typeof n
        }
        var Su = sa ? Ma(sa) : function(n) {
            return Eu(n) && Pr(n) == Ko
        };

        function Wu(n) {
            return "number" == typeof n || Eu(n) && nt(n) == Vo
        }

        function Lu(n) {
            if (!Eu(n) || nt(n) != Ho) return !1;
            var t = O(n);
            if (null === t) return !0;
            var r = k.call(t, "constructor") && t.constructor;
            return "function" == typeof r && r instanceof r && s.call(r) == _
        }
        var Cu = ha ? Ma(ha) : function(n) {
            return Eu(n) && nt(n) == Qo
        };
        var Uu = pa ? Ma(pa) : function(n) {
            return Eu(n) && Pr(n) == Xo
        };

        function Bu(n) {
            return "string" == typeof n || !bu(n) && Eu(n) && nt(n) == nf
        }

        function Tu(n) {
            return "symbol" == typeof n || Eu(n) && nt(n) == tf
        }
        var $u = va ? Ma(va) : function(n) {
            return Eu(n) && Ru(n.length) && !!ea[nt(n)]
        };
        var Du = mr(pt),
            Mu = mr(function(n, t) {
                return n <= t
            });

        function Fu(n) {
            if (!n) return [];
            if (mu(n)) return Bu(n) ? nc(n) : ur(n);
            if (L && n[L]) return function(n) {
                for (var t, r = []; !(t = n.next()).done;) r.push(t.value);
                return r
            }(n[L]());
            var t = Pr(n);
            return (t == Ko ? Ha : t == Xo ? Qa : _i)(n)
        }

        function Nu(n) {
            return n ? (n = Zu(n)) === zo || n === -zo ? (n < 0 ? -1 : 1) * So : n == n ? n : 0 : 0 === n ? n : 0
        }

        function Pu(n) {
            var t = Nu(n),
                r = t % 1;
            return t == t ? r ? t - r : t : 0
        }

        function qu(n) {
            return n ? Bn(Pu(n), 0, Lo) : 0
        }

        function Zu(n) {
            if ("number" == typeof n) return n;
            if (Tu(n)) return Wo;
            if (zu(n)) {
                var t = "function" == typeof n.valueOf ? n.valueOf() : n;
                n = zu(t) ? t + "" : t
            }
            if ("string" != typeof n) return 0 === n ? n : +n;
            n = n.replace(Lf, "");
            var r = qf.test(n);
            return r || Kf.test(n) ? oa(n.slice(2), r ? 2 : 8) : Pf.test(n) ? Wo : +n
        }

        function Ku(n) {
            return ir(n, fi(n))
        }

        function Vu(n) {
            return null == n ? "" : $t(n)
        }
        var Gu = fr(function(n, t) {
                if (Qr(t) || mu(t)) ir(t, oi(t), n);
                else
                    for (var r in t) k.call(t, r) && En(n, r, t[r])
            }),
            Hu = fr(function(n, t) {
                ir(t, fi(t), n)
            }),
            Ju = fr(function(n, t, r, e) {
                ir(t, fi(t), n, e)
            }),
            Yu = fr(function(n, t, r, e) {
                ir(t, oi(t), n, e)
            }),
            Qu = Sr(Un);
        var Xu = kt(function(n) {
                return n.push(no, Ir), ya(Ju, no, n)
            }),
            ni = kt(function(n) {
                return n.push(no, Rr), ya(ci, no, n)
            });

        function ti(n, t, r) {
            var e = null == n ? no : Qn(n, t);
            return e === no ? r : e
        }

        function ri(n, t) {
            return null != n && qr(n, t, et)
        }
        var ei = gr(function(n, t, r) {
                n[t] = r
            }, zi(Wi)),
            ui = gr(function(n, t, r) {
                k.call(n, t) ? n[t].push(r) : n[t] = [r]
            }, Tr),
            ii = kt(it);

        function oi(n) {
            return mu(n) ? kn(n) : st(n)
        }

        function fi(n) {
            return mu(n) ? kn(n, !0) : ht(n)
        }
        var ai = fr(function(n, t, r) {
                yt(n, t, r)
            }),
            ci = fr(function(n, t, r, e) {
                yt(n, t, r, e)
            }),
            li = Sr(function(t, n) {
                var r = {};
                if (null == t) return r;
                var e = !1;
                n = ka(n, function(n) {
                    return n = Gt(n, t), e || (e = 1 < n.length), n
                }), ir(t, Lr(t), r), e && (r = Tn(r, fo | ao | co, zr));
                for (var u = n.length; u--;) Mt(r, n[u]);
                return r
            });
        var si = Sr(function(n, t) {
            return null == n ? {} : wt(r = n, t, function(n, t) {
                return ri(r, t)
            });
            var r
        });

        function hi(n, r) {
            if (null == n) return {};
            var t = ka(Lr(n), function(n) {
                return [n]
            });
            return r = Tr(r), wt(n, t, function(n, t) {
                return r(n, t[0])
            })
        }
        var pi = kr(oi),
            vi = kr(fi);

        function _i(n) {
            return null == n ? [] : Fa(n, oi(n))
        }
        var gi = sr(function(n, t, r) {
            return t = t.toLowerCase(), n + (r ? yi(t) : t)
        });

        function yi(n) {
            return ki(Vu(n).toLowerCase())
        }

        function di(n) {
            return (n = Vu(n)) && n.replace(Gf, Za).replace(Qf, "")
        }
        var bi = sr(function(n, t, r) {
                return n + (r ? "-" : "") + t.toLowerCase()
            }),
            wi = sr(function(n, t, r) {
                return n + (r ? " " : "") + t.toLowerCase()
            }),
            mi = lr("toLowerCase");
        var xi = sr(function(n, t, r) {
            return n + (r ? "_" : "") + t.toLowerCase()
        });
        var ji = sr(function(n, t, r) {
            return n + (r ? " " : "") + ki(t)
        });
        var Ai = sr(function(n, t, r) {
                return n + (r ? " " : "") + t.toUpperCase()
            }),
            ki = lr("toUpperCase");

        function Oi(n, t, r) {
            return n = Vu(n), (t = r ? no : t) === no ? (e = n, na.test(e) ? n.match(Xf) || [] : n.match(Df) || []) : n.match(t) || [];
            var e
        }
        var Ii = kt(function(n, t) {
                try {
                    return ya(n, no, t)
                } catch (n) {
                    return ku(n) ? n : new u(n)
                }
            }),
            Ri = Sr(function(t, n) {
                return ba(n, function(n) {
                    n = he(n), Cn(t, n, uu(t[n], t))
                }), t
            });

        function zi(n) {
            return function() {
                return n
            }
        }
        var Ei = vr(),
            Si = vr(!0);

        function Wi(n) {
            return n
        }

        function Li(n) {
            return lt("function" == typeof n ? n : Tn(n, fo))
        }
        var Ci = kt(function(t, r) {
                return function(n) {
                    return it(n, t, r)
                }
            }),
            Ui = kt(function(t, r) {
                return function(n) {
                    return it(t, n, r)
                }
            });

        function Bi(e, t, n) {
            var r = oi(t),
                u = Yn(t, r);
            null != n || zu(t) && (u.length || !r.length) || (n = t, t = e, e = this, u = Yn(t, oi(t)));
            var i = !(zu(n) && "chain" in n && !n.chain),
                o = Ou(e);
            return ba(u, function(n) {
                var r = t[n];
                e[n] = r, o && (e.prototype[n] = function() {
                    var n = this.__chain__;
                    if (i || n) {
                        var t = e(this.__wrapped__);
                        return (t.__actions__ = ur(this.__actions__)).push({
                            func: r,
                            args: arguments,
                            thisArg: e
                        }), t.__chain__ = n, t
                    }
                    return r.apply(e, Oa([this.value()], arguments))
                })
            }), e
        }

        function Ti() {}
        var $i = dr(ka),
            Di = dr(ma),
            Mi = dr(za);

        function Fi(n) {
            return Hr(n) ? Ba(he(n)) : (t = n, function(n) {
                return Qn(n, t)
            });
            var t
        }
        var Ni = wr(),
            Pi = wr(!0);

        function qi() {
            return []
        }

        function Zi() {
            return !1
        }
        var Ki = yr(function(n, t) {
                return n + t
            }, 0),
            Vi = jr("ceil"),
            Gi = yr(function(n, t) {
                return n / t
            }, 1),
            Hi = jr("floor");
        var Ji, Yi = yr(function(n, t) {
                return n * t
            }, 1),
            Qi = jr("round"),
            Xi = yr(function(n, t) {
                return n - t
            }, 0);
        return _n.after = function(n, t) {
            if ("function" != typeof t) throw new z(eo);
            return n = Pu(n),
                function() {
                    if (--n < 1) return t.apply(this, arguments)
                }
        }, _n.ary = ru, _n.assign = Gu, _n.assignIn = Hu, _n.assignInWith = Ju, _n.assignWith = Yu, _n.at = Qu, _n.before = eu, _n.bind = uu, _n.bindAll = Ri, _n.bindKey = iu, _n.castArray = function() {
            if (!arguments.length) return [];
            var n = arguments[0];
            return bu(n) ? n : [n]
        }, _n.chain = Fe, _n.chunk = function(n, t, r) {
            t = (r ? Gr(n, t, r) : t === no) ? 1 : K(Pu(t), 0);
            var e = null == n ? 0 : n.length;
            if (!e || t < 1) return [];
            for (var u = 0, i = 0, o = R(D(e / t)); u < e;) o[i++] = Wt(n, u, u += t);
            return o
        }, _n.compact = function(n) {
            for (var t = -1, r = null == n ? 0 : n.length, e = 0, u = []; ++t < r;) {
                var i = n[t];
                i && (u[e++] = i)
            }
            return u
        }, _n.concat = function() {
            var n = arguments.length;
            if (!n) return [];
            for (var t = R(n - 1), r = arguments[0], e = n; e--;) t[e - 1] = arguments[e];
            return Oa(bu(r) ? ur(r) : [r], Kn(t, 1))
        }, _n.cond = function(e) {
            var u = null == e ? 0 : e.length,
                t = Tr();
            return e = u ? ka(e, function(n) {
                if ("function" != typeof n[1]) throw new z(eo);
                return [t(n[0]), n[1]]
            }) : [], kt(function(n) {
                for (var t = -1; ++t < u;) {
                    var r = e[t];
                    if (ya(r[0], this, n)) return ya(r[1], this, n)
                }
            })
        }, _n.conforms = function(n) {
            return t = Tn(n, fo), r = oi(t),
                function(n) {
                    return $n(n, t, r)
                };
            var t, r
        }, _n.constant = zi, _n.countBy = qe, _n.create = function(n, t) {
            var r = gn(n);
            return null == t ? r : Ln(r, t)
        }, _n.curry = function n(t, r, e) {
            var u = Or(t, _o, no, no, no, no, no, r = e ? no : r);
            return u.placeholder = n.placeholder, u
        }, _n.curryRight = function n(t, r, e) {
            var u = Or(t, go, no, no, no, no, no, r = e ? no : r);
            return u.placeholder = n.placeholder, u
        }, _n.debounce = ou, _n.defaults = Xu, _n.defaultsDeep = ni, _n.defer = fu, _n.delay = au, _n.difference = _e, _n.differenceBy = ge, _n.differenceWith = ye, _n.drop = function(n, t, r) {
            var e = null == n ? 0 : n.length;
            return e ? Wt(n, (t = r || t === no ? 1 : Pu(t)) < 0 ? 0 : t, e) : []
        }, _n.dropRight = function(n, t, r) {
            var e = null == n ? 0 : n.length;
            return e ? Wt(n, 0, (t = e - (t = r || t === no ? 1 : Pu(t))) < 0 ? 0 : t) : []
        }, _n.dropRightWhile = function(n, t) {
            return n && n.length ? Nt(n, Tr(t, 3), !0, !0) : []
        }, _n.dropWhile = function(n, t) {
            return n && n.length ? Nt(n, Tr(t, 3), !0) : []
        }, _n.fill = function(n, t, r, e) {
            var u = null == n ? 0 : n.length;
            return u ? (r && "number" != typeof r && Gr(n, t, r) && (r = 0, e = u), function(n, t, r, e) {
                var u = n.length;
                for ((r = Pu(r)) < 0 && (r = u < -r ? 0 : u + r), (e = e === no || u < e ? u : Pu(e)) < 0 && (e += u), e = e < r ? 0 : qu(e); r < e;) n[r++] = t;
                return n
            }(n, t, r, e)) : []
        }, _n.filter = function(n, t) {
            return (bu(n) ? xa : Zn)(n, Tr(t, 3))
        }, _n.flatMap = function(n, t) {
            return Kn(Qe(n, t), 1)
        }, _n.flatMapDeep = function(n, t) {
            return Kn(Qe(n, t), zo)
        }, _n.flatMapDepth = function(n, t, r) {
            return r = r === no ? 1 : Pu(r), Kn(Qe(n, t), r)
        }, _n.flatten = we, _n.flattenDeep = function(n) {
            return null != n && n.length ? Kn(n, zo) : []
        }, _n.flattenDepth = function(n, t) {
            return null != n && n.length ? Kn(n, t = t === no ? 1 : Pu(t)) : []
        }, _n.flip = function(n) {
            return Or(n, xo)
        }, _n.flow = Ei, _n.flowRight = Si, _n.fromPairs = function(n) {
            for (var t = -1, r = null == n ? 0 : n.length, e = {}; ++t < r;) {
                var u = n[t];
                e[u[0]] = u[1]
            }
            return e
        }, _n.functions = function(n) {
            return null == n ? [] : Yn(n, oi(n))
        }, _n.functionsIn = function(n) {
            return null == n ? [] : Yn(n, fi(n))
        }, _n.groupBy = He, _n.initial = function(n) {
            return null != n && n.length ? Wt(n, 0, -1) : []
        }, _n.intersection = xe, _n.intersectionBy = je, _n.intersectionWith = Ae, _n.invert = ei, _n.invertBy = ui, _n.invokeMap = Je, _n.iteratee = Li, _n.keyBy = Ye, _n.keys = oi, _n.keysIn = fi, _n.map = Qe, _n.mapKeys = function(n, e) {
            var u = {};
            return e = Tr(e, 3), Hn(n, function(n, t, r) {
                Cn(u, e(n, t, r), n)
            }), u
        }, _n.mapValues = function(n, e) {
            var u = {};
            return e = Tr(e, 3), Hn(n, function(n, t, r) {
                Cn(u, t, e(n, t, r))
            }), u
        }, _n.matches = function(n) {
            return _t(Tn(n, fo))
        }, _n.matchesProperty = function(n, t) {
            return gt(n, Tn(t, fo))
        }, _n.memoize = cu, _n.merge = ai, _n.mergeWith = ci, _n.method = Ci, _n.methodOf = Ui, _n.mixin = Bi, _n.negate = lu, _n.nthArg = function(t) {
            return t = Pu(t), kt(function(n) {
                return dt(n, t)
            })
        }, _n.omit = li, _n.omitBy = function(n, t) {
            return hi(n, lu(Tr(t)))
        }, _n.once = function(n) {
            return eu(2, n)
        }, _n.orderBy = function(n, t, r, e) {
            return null == n ? [] : (bu(t) || (t = null == t ? [] : [t]), bu(r = e ? no : r) || (r = null == r ? [] : [r]), bt(n, t, r))
        }, _n.over = $i, _n.overArgs = su, _n.overEvery = Di, _n.overSome = Mi, _n.partial = hu, _n.partialRight = pu, _n.partition = Xe, _n.pick = si, _n.pickBy = hi, _n.property = Fi, _n.propertyOf = function(t) {
            return function(n) {
                return null == t ? no : Qn(t, n)
            }
        }, _n.pull = Oe, _n.pullAll = Ie, _n.pullAllBy = function(n, t, r) {
            return n && n.length && t && t.length ? mt(n, t, Tr(r, 2)) : n
        }, _n.pullAllWith = function(n, t, r) {
            return n && n.length && t && t.length ? mt(n, t, no, r) : n
        }, _n.pullAt = Re, _n.range = Ni, _n.rangeRight = Pi, _n.rearg = vu, _n.reject = function(n, t) {
            return (bu(n) ? xa : Zn)(n, lu(Tr(t, 3)))
        }, _n.remove = function(n, t) {
            var r = [];
            if (!n || !n.length) return r;
            var e = -1,
                u = [],
                i = n.length;
            for (t = Tr(t, 3); ++e < i;) {
                var o = n[e];
                t(o, e, n) && (r.push(o), u.push(e))
            }
            return xt(n, u), r
        }, _n.rest = function(n, t) {
            if ("function" != typeof n) throw new z(eo);
            return kt(n, t = t === no ? t : Pu(t))
        }, _n.reverse = ze, _n.sampleSize = function(n, t, r) {
            return t = (r ? Gr(n, t, r) : t === no) ? 1 : Pu(t), (bu(n) ? In : It)(n, t)
        }, _n.set = function(n, t, r) {
            return null == n ? n : Rt(n, t, r)
        }, _n.setWith = function(n, t, r, e) {
            return e = "function" == typeof e ? e : no, null == n ? n : Rt(n, t, r, e)
        }, _n.shuffle = function(n) {
            return (bu(n) ? Rn : St)(n)
        }, _n.slice = function(n, t, r) {
            var e = null == n ? 0 : n.length;
            return e ? (r && "number" != typeof r && Gr(n, t, r) ? (t = 0, r = e) : (t = null == t ? 0 : Pu(t), r = r === no ? e : Pu(r)), Wt(n, t, r)) : []
        }, _n.sortBy = nu, _n.sortedUniq = function(n) {
            return n && n.length ? Bt(n) : []
        }, _n.sortedUniqBy = function(n, t) {
            return n && n.length ? Bt(n, Tr(t, 2)) : []
        }, _n.split = function(n, t, r) {
            return r && "number" != typeof r && Gr(n, t, r) && (t = r = no), (r = r === no ? Lo : r >>> 0) ? (n = Vu(n)) && ("string" == typeof t || null != t && !Cu(t)) && !(t = $t(t)) && Ga(n) ? Jt(nc(n), 0, r) : n.split(t, r) : []
        }, _n.spread = function(e, u) {
            if ("function" != typeof e) throw new z(eo);
            return u = null == u ? 0 : K(Pu(u), 0), kt(function(n) {
                var t = n[u],
                    r = Jt(n, 0, u);
                return t && Oa(r, t), ya(e, this, r)
            })
        }, _n.tail = function(n) {
            var t = null == n ? 0 : n.length;
            return t ? Wt(n, 1, t) : []
        }, _n.take = function(n, t, r) {
            return n && n.length ? Wt(n, 0, (t = r || t === no ? 1 : Pu(t)) < 0 ? 0 : t) : []
        }, _n.takeRight = function(n, t, r) {
            var e = null == n ? 0 : n.length;
            return e ? Wt(n, (t = e - (t = r || t === no ? 1 : Pu(t))) < 0 ? 0 : t, e) : []
        }, _n.takeRightWhile = function(n, t) {
            return n && n.length ? Nt(n, Tr(t, 3), !1, !0) : []
        }, _n.takeWhile = function(n, t) {
            return n && n.length ? Nt(n, Tr(t, 3)) : []
        }, _n.tap = function(n, t) {
            return t(n), n
        }, _n.throttle = function(n, t, r) {
            var e = !0,
                u = !0;
            if ("function" != typeof n) throw new z(eo);
            return zu(r) && (e = "leading" in r ? !!r.leading : e, u = "trailing" in r ? !!r.trailing : u), ou(n, t, {
                leading: e,
                maxWait: t,
                trailing: u
            })
        }, _n.thru = Ne, _n.toArray = Fu, _n.toPairs = pi, _n.toPairsIn = vi, _n.toPath = function(n) {
            return bu(n) ? ka(n, he) : Tu(n) ? [n] : ur(se(Vu(n)))
        }, _n.toPlainObject = Ku, _n.transform = function(n, e, u) {
            var t = bu(n),
                r = t || ju(n) || $u(n);
            if (e = Tr(e, 4), null == u) {
                var i = n && n.constructor;
                u = r ? t ? new i : [] : zu(n) && Ou(i) ? gn(O(n)) : {}
            }
            return (r ? ba : Hn)(n, function(n, t, r) {
                return e(u, n, t, r)
            }), u
        }, _n.unary = function(n) {
            return ru(n, 1)
        }, _n.union = Ee, _n.unionBy = Se, _n.unionWith = We, _n.uniq = function(n) {
            return n && n.length ? Dt(n) : []
        }, _n.uniqBy = function(n, t) {
            return n && n.length ? Dt(n, Tr(t, 2)) : []
        }, _n.uniqWith = function(n, t) {
            return t = "function" == typeof t ? t : no, n && n.length ? Dt(n, no, t) : []
        }, _n.unset = function(n, t) {
            return null == n || Mt(n, t)
        }, _n.unzip = Le, _n.unzipWith = Ce, _n.update = function(n, t, r) {
            return null == n ? n : Ft(n, t, Vt(r))
        }, _n.updateWith = function(n, t, r, e) {
            return e = "function" == typeof e ? e : no, null == n ? n : Ft(n, t, Vt(r), e)
        }, _n.values = _i, _n.valuesIn = function(n) {
            return null == n ? [] : Fa(n, fi(n))
        }, _n.without = Ue, _n.words = Oi, _n.wrap = function(n, t) {
            return hu(Vt(t), n)
        }, _n.xor = Be, _n.xorBy = Te, _n.xorWith = $e, _n.zip = De, _n.zipObject = function(n, t) {
            return Zt(n || [], t || [], En)
        }, _n.zipObjectDeep = function(n, t) {
            return Zt(n || [], t || [], Rt)
        }, _n.zipWith = Me, _n.entries = pi, _n.entriesIn = vi, _n.extend = Hu, _n.extendWith = Ju, Bi(_n, _n), _n.add = Ki, _n.attempt = Ii, _n.camelCase = gi, _n.capitalize = yi, _n.ceil = Vi, _n.clamp = function(n, t, r) {
            return r === no && (r = t, t = no), r !== no && (r = (r = Zu(r)) == r ? r : 0), t !== no && (t = (t = Zu(t)) == t ? t : 0), Bn(Zu(n), t, r)
        }, _n.clone = function(n) {
            return Tn(n, co)
        }, _n.cloneDeep = function(n) {
            return Tn(n, fo | co)
        }, _n.cloneDeepWith = function(n, t) {
            return Tn(n, fo | co, t = "function" == typeof t ? t : no)
        }, _n.cloneWith = function(n, t) {
            return Tn(n, co, t = "function" == typeof t ? t : no)
        }, _n.conformsTo = function(n, t) {
            return null == t || $n(n, t, oi(t))
        }, _n.deburr = di, _n.defaultTo = function(n, t) {
            return null == n || n != n ? t : n
        }, _n.divide = Gi, _n.endsWith = function(n, t, r) {
            n = Vu(n), t = $t(t);
            var e = n.length,
                u = r = r === no ? e : Bn(Pu(r), 0, e);
            return 0 <= (r -= t.length) && n.slice(r, u) == t
        }, _n.eq = _u, _n.escape = function(n) {
            return (n = Vu(n)) && jf.test(n) ? n.replace(mf, Ka) : n
        }, _n.escapeRegExp = function(n) {
            return (n = Vu(n)) && Wf.test(n) ? n.replace(Sf, "\\$&") : n
        }, _n.every = function(n, t, r) {
            var e = bu(n) ? ma : Pn;
            return r && Gr(n, t, r) && (t = no), e(n, Tr(t, 3))
        }, _n.find = Ze, _n.findIndex = de, _n.findKey = function(n, t) {
            return Ea(n, Tr(t, 3), Hn)
        }, _n.findLast = Ke, _n.findLastIndex = be, _n.findLastKey = function(n, t) {
            return Ea(n, Tr(t, 3), Jn)
        }, _n.floor = Hi, _n.forEach = Ve, _n.forEachRight = Ge, _n.forIn = function(n, t) {
            return null == n ? n : Vn(n, Tr(t, 3), fi)
        }, _n.forInRight = function(n, t) {
            return null == n ? n : Gn(n, Tr(t, 3), fi)
        }, _n.forOwn = function(n, t) {
            return n && Hn(n, Tr(t, 3))
        }, _n.forOwnRight = function(n, t) {
            return n && Jn(n, Tr(t, 3))
        }, _n.get = ti, _n.gt = gu, _n.gte = yu, _n.has = function(n, t) {
            return null != n && qr(n, t, rt)
        }, _n.hasIn = ri, _n.head = me, _n.identity = Wi, _n.includes = function(n, t, r, e) {
            n = mu(n) ? n : _i(n), r = r && !e ? Pu(r) : 0;
            var u = n.length;
            return r < 0 && (r = K(u + r, 0)), Bu(n) ? r <= u && -1 < n.indexOf(t, r) : !!u && -1 < Wa(n, t, r)
        }, _n.indexOf = function(n, t, r) {
            var e = null == n ? 0 : n.length;
            if (!e) return -1;
            var u = null == r ? 0 : Pu(r);
            return u < 0 && (u = K(e + u, 0)), Wa(n, t, u)
        }, _n.inRange = function(n, t, r) {
            return t = Nu(t), r === no ? (r = t, t = 0) : r = Nu(r), n = Zu(n), (e = n) >= V(u = t, i = r) && e < K(u, i);
            var e, u, i
        }, _n.invoke = ii, _n.isArguments = du, _n.isArray = bu, _n.isArrayBuffer = wu, _n.isArrayLike = mu, _n.isArrayLikeObject = xu, _n.isBoolean = function(n) {
            return !0 === n || !1 === n || Eu(n) && nt(n) == Mo
        }, _n.isBuffer = ju, _n.isDate = Au, _n.isElement = function(n) {
            return Eu(n) && 1 === n.nodeType && !Lu(n)
        }, _n.isEmpty = function(n) {
            if (null == n) return !0;
            if (mu(n) && (bu(n) || "string" == typeof n || "function" == typeof n.splice || ju(n) || $u(n) || du(n))) return !n.length;
            var t = Pr(n);
            if (t == Ko || t == Xo) return !n.size;
            if (Qr(n)) return !st(n).length;
            for (var r in n)
                if (k.call(n, r)) return !1;
            return !0
        }, _n.isEqual = function(n, t) {
            return ft(n, t)
        }, _n.isEqualWith = function(n, t, r) {
            var e = (r = "function" == typeof r ? r : no) ? r(n, t) : no;
            return e === no ? ft(n, t, no, r) : !!e
        }, _n.isError = ku, _n.isFinite = function(n) {
            return "number" == typeof n && P(n)
        }, _n.isFunction = Ou, _n.isInteger = Iu, _n.isLength = Ru, _n.isMap = Su, _n.isMatch = function(n, t) {
            return n === t || at(n, t, Dr(t))
        }, _n.isMatchWith = function(n, t, r) {
            return r = "function" == typeof r ? r : no, at(n, t, Dr(t), r)
        }, _n.isNaN = function(n) {
            return Wu(n) && n != +n
        }, _n.isNative = function(n) {
            if (Yr(n)) throw new u(ro);
            return ct(n)
        }, _n.isNil = function(n) {
            return null == n
        }, _n.isNull = function(n) {
            return null === n
        }, _n.isNumber = Wu, _n.isObject = zu, _n.isObjectLike = Eu, _n.isPlainObject = Lu, _n.isRegExp = Cu, _n.isSafeInteger = function(n) {
            return Iu(n) && -Eo <= n && n <= Eo
        }, _n.isSet = Uu, _n.isString = Bu, _n.isSymbol = Tu, _n.isTypedArray = $u, _n.isUndefined = function(n) {
            return n === no
        }, _n.isWeakMap = function(n) {
            return Eu(n) && Pr(n) == ef
        }, _n.isWeakSet = function(n) {
            return Eu(n) && nt(n) == uf
        }, _n.join = function(n, t) {
            return null == n ? "" : q.call(n, t)
        }, _n.kebabCase = bi, _n.last = ke, _n.lastIndexOf = function(n, t, r) {
            var e = null == n ? 0 : n.length;
            if (!e) return -1;
            var u = e;
            return r !== no && (u = (u = Pu(r)) < 0 ? K(e + u, 0) : V(u, e - 1)), t == t ? function(n, t, r) {
                for (var e = r + 1; e--;)
                    if (n[e] === t) return e;
                return e
            }(n, t, u) : Sa(n, Ca, u, !0)
        }, _n.lowerCase = wi, _n.lowerFirst = mi, _n.lt = Du, _n.lte = Mu, _n.max = function(n) {
            return n && n.length ? qn(n, Wi, tt) : no
        }, _n.maxBy = function(n, t) {
            return n && n.length ? qn(n, Tr(t, 2), tt) : no
        }, _n.mean = function(n) {
            return Ua(n, Wi)
        }, _n.meanBy = function(n, t) {
            return Ua(n, Tr(t, 2))
        }, _n.min = function(n) {
            return n && n.length ? qn(n, Wi, pt) : no
        }, _n.minBy = function(n, t) {
            return n && n.length ? qn(n, Tr(t, 2), pt) : no
        }, _n.stubArray = qi, _n.stubFalse = Zi, _n.stubObject = function() {
            return {}
        }, _n.stubString = function() {
            return ""
        }, _n.stubTrue = function() {
            return !0
        }, _n.multiply = Yi, _n.nth = function(n, t) {
            return n && n.length ? dt(n, Pu(t)) : no
        }, _n.noConflict = function() {
            return fa._ === this && (fa._ = d), this
        }, _n.noop = Ti, _n.now = tu, _n.pad = function(n, t, r) {
            n = Vu(n);
            var e = (t = Pu(t)) ? Xa(n) : 0;
            if (!t || t <= e) return n;
            var u = (t - e) / 2;
            return br(M(u), r) + n + br(D(u), r)
        }, _n.padEnd = function(n, t, r) {
            n = Vu(n);
            var e = (t = Pu(t)) ? Xa(n) : 0;
            return t && e < t ? n + br(t - e, r) : n
        }, _n.padStart = function(n, t, r) {
            n = Vu(n);
            var e = (t = Pu(t)) ? Xa(n) : 0;
            return t && e < t ? br(t - e, r) + n : n
        }, _n.parseInt = function(n, t, r) {
            return r || null == t ? t = 0 : t && (t = +t), H(Vu(n).replace(Cf, ""), t || 0)
        }, _n.random = function(n, t, r) {
            if (r && "boolean" != typeof r && Gr(n, t, r) && (t = r = no), r === no && ("boolean" == typeof t ? (r = t, t = no) : "boolean" == typeof n && (r = n, n = no)), n === no && t === no ? (n = 0, t = 1) : (n = Nu(n), t === no ? (t = n, n = 0) : t = Nu(t)), t < n) {
                var e = n;
                n = t, t = e
            }
            if (r || n % 1 || t % 1) {
                var u = J();
                return V(n + u * (t - n + ia("1e-" + ((u + "").length - 1))), t)
            }
            return jt(n, t)
        }, _n.reduce = function(n, t, r) {
            var e = bu(n) ? Ia : Ta,
                u = arguments.length < 3;
            return e(n, Tr(t, 4), r, u, Fn)
        }, _n.reduceRight = function(n, t, r) {
            var e = bu(n) ? Ra : Ta,
                u = arguments.length < 3;
            return e(n, Tr(t, 4), r, u, Nn)
        }, _n.repeat = function(n, t, r) {
            return t = (r ? Gr(n, t, r) : t === no) ? 1 : Pu(t), At(Vu(n), t)
        }, _n.replace = function() {
            var n = arguments,
                t = Vu(n[0]);
            return n.length < 3 ? t : t.replace(n[1], n[2])
        }, _n.result = function(n, t, r) {
            var e = -1,
                u = (t = Gt(t, n)).length;
            for (u || (u = 1, n = no); ++e < u;) {
                var i = null == n ? no : n[he(t[e])];
                i === no && (e = u, i = r), n = Ou(i) ? i.call(n) : i
            }
            return n
        }, _n.round = Qi, _n.runInContext = n, _n.sample = function(n) {
            return (bu(n) ? On : Ot)(n)
        }, _n.size = function(n) {
            if (null == n) return 0;
            if (mu(n)) return Bu(n) ? Xa(n) : n.length;
            var t = Pr(n);
            return t == Ko || t == Xo ? n.size : st(n).length
        }, _n.snakeCase = xi, _n.some = function(n, t, r) {
            var e = bu(n) ? za : Lt;
            return r && Gr(n, t, r) && (t = no), e(n, Tr(t, 3))
        }, _n.sortedIndex = function(n, t) {
            return Ct(n, t)
        }, _n.sortedIndexBy = function(n, t, r) {
            return Ut(n, t, Tr(r, 2))
        }, _n.sortedIndexOf = function(n, t) {
            var r = null == n ? 0 : n.length;
            if (r) {
                var e = Ct(n, t);
                if (e < r && _u(n[e], t)) return e
            }
            return -1
        }, _n.sortedLastIndex = function(n, t) {
            return Ct(n, t, !0)
        }, _n.sortedLastIndexBy = function(n, t, r) {
            return Ut(n, t, Tr(r, 2), !0)
        }, _n.sortedLastIndexOf = function(n, t) {
            if (null != n && n.length) {
                var r = Ct(n, t, !0) - 1;
                if (_u(n[r], t)) return r
            }
            return -1
        }, _n.startCase = ji, _n.startsWith = function(n, t, r) {
            return n = Vu(n), r = null == r ? 0 : Bn(Pu(r), 0, n.length), t = $t(t), n.slice(r, r + t.length) == t
        }, _n.subtract = Xi, _n.sum = function(n) {
            return n && n.length ? $a(n, Wi) : 0
        }, _n.sumBy = function(n, t) {
            return n && n.length ? $a(n, Tr(t, 2)) : 0
        }, _n.template = function(o, n, t) {
            var r = _n.templateSettings;
            t && Gr(o, n, t) && (n = no), o = Vu(o), n = Ju({}, n, r, Ir);
            var f, a, e = Ju({}, n.imports, r.imports, Ir),
                u = oi(e),
                i = Fa(e, u),
                c = 0,
                l = n.interpolate || Hf,
                s = "__p += '",
                h = y((n.escape || Hf).source + "|" + l.source + "|" + (l === Of ? Ff : Hf).source + "|" + (n.evaluate || Hf).source + "|$", "g"),
                p = "//# sourceURL=" + ("sourceURL" in n ? n.sourceURL : "lodash.templateSources[" + ++ra + "]") + "\n";
            o.replace(h, function(n, t, r, e, u, i) {
                return r || (r = e), s += o.slice(c, i).replace(Jf, Va), t && (f = !0, s += "' +\n__e(" + t + ") +\n'"), u && (a = !0, s += "';\n" + u + ";\n__p += '"), r && (s += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), c = i + n.length, n
            }), s += "';\n";
            var v = n.variable;
            v || (s = "with (obj) {\n" + s + "\n}\n"), s = (a ? s.replace(yf, "") : s).replace(df, "$1").replace(bf, "$1;"), s = "function(" + (v || "obj") + ") {\n" + (v ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (f ? ", __e = _.escape" : "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + s + "return __p\n}";
            var _ = Ii(function() {
                return g(u, p + "return " + s).apply(no, i)
            });
            if (_.source = s, ku(_)) throw _;
            return _
        }, _n.times = function(n, t) {
            if ((n = Pu(n)) < 1 || Eo < n) return [];
            var r = Lo,
                e = V(n, Lo);
            t = Tr(t), n -= Lo;
            for (var u = Da(e, t); ++r < n;) t(r);
            return u
        }, _n.toFinite = Nu, _n.toInteger = Pu, _n.toLength = qu, _n.toLower = function(n) {
            return Vu(n).toLowerCase()
        }, _n.toNumber = Zu, _n.toSafeInteger = function(n) {
            return n ? Bn(Pu(n), -Eo, Eo) : 0 === n ? n : 0
        }, _n.toString = Vu, _n.toUpper = function(n) {
            return Vu(n).toUpperCase()
        }, _n.trim = function(n, t, r) {
            if ((n = Vu(n)) && (r || t === no)) return n.replace(Lf, "");
            if (!n || !(t = $t(t))) return n;
            var e = nc(n),
                u = nc(t);
            return Jt(e, Pa(e, u), qa(e, u) + 1).join("")
        }, _n.trimEnd = function(n, t, r) {
            if ((n = Vu(n)) && (r || t === no)) return n.replace(Uf, "");
            if (!n || !(t = $t(t))) return n;
            var e = nc(n);
            return Jt(e, 0, qa(e, nc(t)) + 1).join("")
        }, _n.trimStart = function(n, t, r) {
            if ((n = Vu(n)) && (r || t === no)) return n.replace(Cf, "");
            if (!n || !(t = $t(t))) return n;
            var e = nc(n);
            return Jt(e, Pa(e, nc(t))).join("")
        }, _n.truncate = function(n, t) {
            var r = jo,
                e = Ao;
            if (zu(t)) {
                var u = "separator" in t ? t.separator : u;
                r = "length" in t ? Pu(t.length) : r, e = "omission" in t ? $t(t.omission) : e
            }
            var i = (n = Vu(n)).length;
            if (Ga(n)) {
                var o = nc(n);
                i = o.length
            }
            if (i <= r) return n;
            var f = r - Xa(e);
            if (f < 1) return e;
            var a = o ? Jt(o, 0, f).join("") : n.slice(0, f);
            if (u === no) return a + e;
            if (o && (f += a.length - f), Cu(u)) {
                if (n.slice(f).search(u)) {
                    var c, l = a;
                    for (u.global || (u = y(u.source, Vu(Nf.exec(u)) + "g")), u.lastIndex = 0; c = u.exec(l);) var s = c.index;
                    a = a.slice(0, s === no ? f : s)
                }
            } else if (n.indexOf($t(u), f) != f) {
                var h = a.lastIndexOf(u); - 1 < h && (a = a.slice(0, h))
            }
            return a + e
        }, _n.unescape = function(n) {
            return (n = Vu(n)) && xf.test(n) ? n.replace(wf, tc) : n
        }, _n.uniqueId = function(n) {
            var t = ++h;
            return Vu(n) + t
        }, _n.upperCase = Ai, _n.upperFirst = ki, _n.each = Ve, _n.eachRight = Ge, _n.first = me, Bi(_n, (Ji = {}, Hn(_n, function(n, t) {
            k.call(_n.prototype, t) || (Ji[t] = n)
        }), Ji), {
            chain: !1
        }), _n.VERSION = "4.17.4", ba(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
            _n[n].placeholder = _n
        }), ba(["drop", "take"], function(r, e) {
            bn.prototype[r] = function(n) {
                n = n === no ? 1 : K(Pu(n), 0);
                var t = this.__filtered__ && !e ? new bn(this) : this.clone();
                return t.__filtered__ ? t.__takeCount__ = V(n, t.__takeCount__) : t.__views__.push({
                    size: V(n, Lo),
                    type: r + (t.__dir__ < 0 ? "Right" : "")
                }), t
            }, bn.prototype[r + "Right"] = function(n) {
                return this.reverse()[r](n).reverse()
            }
        }), ba(["filter", "map", "takeWhile"], function(n, t) {
            var r = t + 1,
                e = r == Io || 3 == r;
            bn.prototype[n] = function(n) {
                var t = this.clone();
                return t.__iteratees__.push({
                    iteratee: Tr(n, 3),
                    type: r
                }), t.__filtered__ = t.__filtered__ || e, t
            }
        }), ba(["head", "last"], function(n, t) {
            var r = "take" + (t ? "Right" : "");
            bn.prototype[n] = function() {
                return this[r](1).value()[0]
            }
        }), ba(["initial", "tail"], function(n, t) {
            var r = "drop" + (t ? "" : "Right");
            bn.prototype[n] = function() {
                return this.__filtered__ ? new bn(this) : this[r](1)
            }
        }), bn.prototype.compact = function() {
            return this.filter(Wi)
        }, bn.prototype.find = function(n) {
            return this.filter(n).head()
        }, bn.prototype.findLast = function(n) {
            return this.reverse().find(n)
        }, bn.prototype.invokeMap = kt(function(t, r) {
            return "function" == typeof t ? new bn(this) : this.map(function(n) {
                return it(n, t, r)
            })
        }), bn.prototype.reject = function(n) {
            return this.filter(lu(Tr(n)))
        }, bn.prototype.slice = function(n, t) {
            n = Pu(n);
            var r = this;
            return r.__filtered__ && (0 < n || t < 0) ? new bn(r) : (n < 0 ? r = r.takeRight(-n) : n && (r = r.drop(n)), t !== no && (r = (t = Pu(t)) < 0 ? r.dropRight(-t) : r.take(t - n)), r)
        }, bn.prototype.takeRightWhile = function(n) {
            return this.reverse().takeWhile(n).reverse()
        }, bn.prototype.toArray = function() {
            return this.take(Lo)
        }, Hn(bn.prototype, function(s, n) {
            var h = /^(?:filter|find|map|reject)|While$/.test(n),
                p = /^(?:head|last)$/.test(n),
                v = _n[p ? "take" + ("last" == n ? "Right" : "") : n],
                _ = p || /^find/.test(n);
            v && (_n.prototype[n] = function() {
                var n = this.__wrapped__,
                    r = p ? [1] : arguments,
                    t = n instanceof bn,
                    e = r[0],
                    u = t || bu(n),
                    i = function(n) {
                        var t = v.apply(_n, Oa([n], r));
                        return p && o ? t[0] : t
                    };
                u && h && "function" == typeof e && 1 != e.length && (t = u = !1);
                var o = this.__chain__,
                    f = !!this.__actions__.length,
                    a = _ && !o,
                    c = t && !f;
                if (!_ && u) {
                    n = c ? n : new bn(this);
                    var l = s.apply(n, r);
                    return l.__actions__.push({
                        func: Ne,
                        args: [i],
                        thisArg: no
                    }), new dn(l, o)
                }
                return a && c ? s.apply(this, r) : (l = this.thru(i), a ? p ? l.value()[0] : l.value() : l)
            })
        }), ba(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
            var r = o[n],
                e = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
                u = /^(?:pop|shift)$/.test(n);
            _n.prototype[n] = function() {
                var t = arguments;
                if (u && !this.__chain__) {
                    var n = this.value();
                    return r.apply(bu(n) ? n : [], t)
                }
                return this[e](function(n) {
                    return r.apply(bu(n) ? n : [], t)
                })
            }
        }), Hn(bn.prototype, function(n, t) {
            var r = _n[t];
            if (r) {
                var e = r.name + "";
                (on[e] || (on[e] = [])).push({
                    name: t,
                    func: r
                })
            }
        }), on[_r(no, po).name] = [{
            name: "wrapper",
            func: no
        }], bn.prototype.clone = function() {
            var n = new bn(this.__wrapped__);
            return n.__actions__ = ur(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = ur(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = ur(this.__views__), n
        }, bn.prototype.reverse = function() {
            if (this.__filtered__) {
                var n = new bn(this);
                n.__dir__ = -1, n.__filtered__ = !0
            } else(n = this.clone()).__dir__ *= -1;
            return n
        }, bn.prototype.value = function() {
            var n = this.__wrapped__.value(),
                t = this.__dir__,
                r = bu(n),
                e = t < 0,
                u = r ? n.length : 0,
                i = function(n, t, r) {
                    for (var e = -1, u = r.length; ++e < u;) {
                        var i = r[e],
                            o = i.size;
                        switch (i.type) {
                            case "drop":
                                n += o;
                                break;
                            case "dropRight":
                                t -= o;
                                break;
                            case "take":
                                t = V(t, n + o);
                                break;
                            case "takeRight":
                                n = K(n, t - o)
                        }
                    }
                    return {
                        start: n,
                        end: t
                    }
                }(0, u, this.__views__),
                o = i.start,
                f = i.end,
                a = f - o,
                c = e ? f : o - 1,
                l = this.__iteratees__,
                s = l.length,
                h = 0,
                p = V(a, this.__takeCount__);
            if (!r || !e && u == a && p == a) return Pt(n, this.__actions__);
            var v = [];
            n: for (; a-- && h < p;) {
                for (var _ = -1, g = n[c += t]; ++_ < s;) {
                    var y = l[_],
                        d = y.iteratee,
                        b = y.type,
                        w = d(g);
                    if (b == Ro) g = w;
                    else if (!w) {
                        if (b == Io) continue n;
                        break n
                    }
                }
                v[h++] = g
            }
            return v
        }, _n.prototype.at = Pe, _n.prototype.chain = function() {
            return Fe(this)
        }, _n.prototype.commit = function() {
            return new dn(this.value(), this.__chain__)
        }, _n.prototype.next = function() {
            this.__values__ === no && (this.__values__ = Fu(this.value()));
            var n = this.__index__ >= this.__values__.length;
            return {
                done: n,
                value: n ? no : this.__values__[this.__index__++]
            }
        }, _n.prototype.plant = function(n) {
            for (var t, r = this; r instanceof yn;) {
                var e = ve(r);
                e.__index__ = 0, e.__values__ = no, t ? u.__wrapped__ = e : t = e;
                var u = e;
                r = r.__wrapped__
            }
            return u.__wrapped__ = n, t
        }, _n.prototype.reverse = function() {
            var n = this.__wrapped__;
            if (n instanceof bn) {
                var t = n;
                return this.__actions__.length && (t = new bn(this)), (t = t.reverse()).__actions__.push({
                    func: Ne,
                    args: [ze],
                    thisArg: no
                }), new dn(t, this.__chain__)
            }
            return this.thru(ze)
        }, _n.prototype.toJSON = _n.prototype.valueOf = _n.prototype.value = function() {
            return Pt(this.__wrapped__, this.__actions__)
        }, _n.prototype.first = _n.prototype.head, L && (_n.prototype[L] = function() {
            return this
        }), _n
    }();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (fa._ = rc, define("lodash", [], function() {
        return rc
    })) : B ? ((B.exports = rc)._ = rc, U._ = rc) : fa._ = rc
}).call(this);
var swfobject = function() {
    var s, c, f, d, l, p, m = "undefined",
        w = "object",
        u = "Shockwave Flash",
        v = "application/x-shockwave-flash",
        y = "SWFObjectExprInst",
        e = "onreadystatechange",
        h = window,
        g = document,
        b = navigator,
        C = !1,
        n = [function() {
            C ? function() {
                var t = g.getElementsByTagName("body")[0],
                    a = V(w);
                a.setAttribute("type", v);
                var n = t.appendChild(a);
                if (n) {
                    var i = 0;
                    ! function() {
                        if (typeof n.GetVariable != m) {
                            var e = n.GetVariable("$version");
                            e && (e = e.split(" ")[1].split(","), T.pv = [parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10)])
                        } else if (i < 10) return i++, setTimeout(arguments.callee, 10);
                        t.removeChild(a), n = null, I()
                    }()
                } else I()
            }() : I()
        }],
        E = [],
        S = [],
        o = [],
        i = !1,
        N = !1,
        r = !0,
        T = function() {
            var e = typeof g.getElementById != m && typeof g.getElementsByTagName != m && typeof g.createElement != m,
                t = b.userAgent.toLowerCase(),
                a = b.platform.toLowerCase(),
                n = /win/.test(a || t),
                i = /mac/.test(a || t),
                r = !!/webkit/.test(t) && parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")),
                o = !1,
                l = [0, 0, 0],
                s = null;
            if (typeof b.plugins != m && typeof b.plugins[u] == w) !(s = b.plugins[u].description) || typeof b.mimeTypes != m && b.mimeTypes[v] && !b.mimeTypes[v].enabledPlugin || (o = !(C = !0), s = s.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), l[0] = parseInt(s.replace(/^(.*)\..*$/, "$1"), 10), l[1] = parseInt(s.replace(/^.*\.(.*)\s.*$/, "$1"), 10), l[2] = /[a-zA-Z]/.test(s) ? parseInt(s.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
            else if (typeof h.ActiveXObject != m) try {
                var c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                c && (s = c.GetVariable("$version")) && (o = !0, s = s.split(" ")[1].split(","), l = [parseInt(s[0], 10), parseInt(s[1], 10), parseInt(s[2], 10)])
            } catch (e) {}
            return {
                w3: e,
                pv: l,
                wk: r,
                ie: o,
                win: n,
                mac: i
            }
        }();
    T.w3 && ((typeof g.readyState != m && "complete" == g.readyState || typeof g.readyState == m && (g.getElementsByTagName("body")[0] || g.body)) && t(), i || (typeof g.addEventListener != m && g.addEventListener("DOMContentLoaded", t, !1), T.ie && T.win && (g.attachEvent(e, function() {
        "complete" == g.readyState && (g.detachEvent(e, arguments.callee), t())
    }), h == top && function() {
        if (!i) {
            try {
                g.documentElement.doScroll("left")
            } catch (e) {
                return setTimeout(arguments.callee, 0)
            }
            t()
        }
    }()), T.wk && function() {
        i || (/loaded|complete/.test(g.readyState) ? t() : setTimeout(arguments.callee, 0))
    }(), A(t)));

    function t() {
        if (!i) {
            try {
                var e = g.getElementsByTagName("body")[0].appendChild(V("span"));
                e.parentNode.removeChild(e)
            } catch (e) {
                return
            }
            i = !0;
            for (var t = n.length, a = 0; a < t; a++) n[a]()
        }
    }

    function a(e) {
        i ? e() : n[n.length] = e
    }

    function A(e) {
        if (typeof h.addEventListener != m) h.addEventListener("load", e, !1);
        else if (typeof g.addEventListener != m) g.addEventListener("load", e, !1);
        else if (typeof h.attachEvent != m) n = "onload", i = e, (a = h).attachEvent(n, i), o[o.length] = [a, n, i];
        else if ("function" == typeof h.onload) {
            var t = h.onload;
            h.onload = function() {
                t(), e()
            }
        } else h.onload = e;
        var a, n, i
    }

    function I() {
        var e = E.length;
        if (0 < e)
            for (var t = 0; t < e; t++) {
                var a = E[t].id,
                    n = E[t].callbackFn,
                    i = {
                        success: !1,
                        id: a
                    };
                if (0 < T.pv[0]) {
                    var r = M(a);
                    if (r)
                        if (!P(E[t].swfVersion) || T.wk && T.wk < 312)
                            if (E[t].expressInstall && k()) {
                                var o = {};
                                o.data = E[t].expressInstall, o.width = r.getAttribute("width") || "0", o.height = r.getAttribute("height") || "0", r.getAttribute("class") && (o.styleclass = r.getAttribute("class")), r.getAttribute("align") && (o.align = r.getAttribute("align"));
                                for (var l = {}, s = r.getElementsByTagName("param"), c = s.length, f = 0; f < c; f++) "movie" != s[f].getAttribute("name").toLowerCase() && (l[s[f].getAttribute("name")] = s[f].getAttribute("value"));
                                j(o, l, a, n)
                            } else O(r), n && n(i);
                    else W(a, !0), n && (i.success = !0, i.ref = L(a), n(i))
                } else if (W(a, !0), n) {
                    var d = L(a);
                    d && typeof d.SetVariable != m && (i.success = !0, i.ref = d), n(i)
                }
            }
    }

    function L(e) {
        var t = null,
            a = M(e);
        if (a && "OBJECT" == a.nodeName)
            if (typeof a.SetVariable != m) t = a;
            else {
                var n = a.getElementsByTagName(w)[0];
                n && (t = n)
            } return t
    }

    function k() {
        return !N && P("6.0.65") && (T.win || T.mac) && !(T.wk && T.wk < 312)
    }

    function j(e, t, a, n) {
        f = n || null, d = {
            success: !(N = !0),
            id: a
        };
        var i = M(a);
        if (i) {
            "OBJECT" == i.nodeName ? (s = B(i), c = null) : (s = i, c = a), e.id = y, (typeof e.width == m || !/%$/.test(e.width) && parseInt(e.width, 10) < 310) && (e.width = "310"), (typeof e.height == m || !/%$/.test(e.height) && parseInt(e.height, 10) < 137) && (e.height = "137"), g.title = g.title.slice(0, 47) + " - Flash Player Installation";
            var r = T.ie && T.win ? "ActiveX" : "PlugIn",
                o = "MMredirectURL=" + h.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + r + "&MMdoctitle=" + g.title;
            if (typeof t.flashvars != m ? t.flashvars += "&" + o : t.flashvars = o, T.ie && T.win && 4 != i.readyState) {
                var l = V("div");
                a += "SWFObjectNew", l.setAttribute("id", a), i.parentNode.insertBefore(l, i), i.style.display = "none",
                    function() {
                        4 == i.readyState ? i.parentNode.removeChild(i) : setTimeout(arguments.callee, 10)
                    }()
            }
            F(e, t, a)
        }
    }

    function O(e) {
        if (T.ie && T.win && 4 != e.readyState) {
            var t = V("div");
            e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(B(e), t), e.style.display = "none",
                function() {
                    4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
                }()
        } else e.parentNode.replaceChild(B(e), e)
    }

    function B(e) {
        var t = V("div");
        if (T.win && T.ie) t.innerHTML = e.innerHTML;
        else {
            var a = e.getElementsByTagName(w)[0];
            if (a) {
                var n = a.childNodes;
                if (n)
                    for (var i = n.length, r = 0; r < i; r++) 1 == n[r].nodeType && "PARAM" == n[r].nodeName || 8 == n[r].nodeType || t.appendChild(n[r].cloneNode(!0))
            }
        }
        return t
    }

    function F(e, t, a) {
        var n, i = M(a);
        if (T.wk && T.wk < 312) return n;
        if (i)
            if (typeof e.id == m && (e.id = a), T.ie && T.win) {
                var r = "";
                for (var o in e) e[o] != Object.prototype[o] && ("data" == o.toLowerCase() ? t.movie = e[o] : "styleclass" == o.toLowerCase() ? r += ' class="' + e[o] + '"' : "classid" != o.toLowerCase() && (r += " " + o + '="' + e[o] + '"'));
                var l = "";
                for (var s in t) t[s] != Object.prototype[s] && (l += '<param name="' + s + '" value="' + t[s] + '" />');
                i.outerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' + r + ">" + l + "</object>", S[S.length] = e.id, n = M(e.id)
            } else {
                var c = V(w);
                for (var f in c.setAttribute("type", v), e) e[f] != Object.prototype[f] && ("styleclass" == f.toLowerCase() ? c.setAttribute("class", e[f]) : "classid" != f.toLowerCase() && c.setAttribute(f, e[f]));
                for (var d in t) t[d] != Object.prototype[d] && "movie" != d.toLowerCase() && $(c, d, t[d]);
                i.parentNode.replaceChild(c, i), n = c
            } return n
    }

    function $(e, t, a) {
        var n = V("param");
        n.setAttribute("name", t), n.setAttribute("value", a), e.appendChild(n)
    }

    function x(e) {
        var t = M(e);
        t && "OBJECT" == t.nodeName && (T.ie && T.win ? (t.style.display = "none", function() {
            4 == t.readyState ? function(e) {
                var t = M(e);
                if (t) {
                    for (var a in t) "function" == typeof t[a] && (t[a] = null);
                    t.parentNode.removeChild(t)
                }
            }(e) : setTimeout(arguments.callee, 10)
        }()) : t.parentNode.removeChild(t))
    }

    function M(e) {
        var t = null;
        try {
            t = g.getElementById(e)
        } catch (e) {}
        return t
    }

    function V(e) {
        return g.createElement(e)
    }

    function P(e) {
        var t = T.pv,
            a = e.split(".");
        return a[0] = parseInt(a[0], 10), a[1] = parseInt(a[1], 10) || 0, a[2] = parseInt(a[2], 10) || 0, t[0] > a[0] || t[0] == a[0] && t[1] > a[1] || t[0] == a[0] && t[1] == a[1] && t[2] >= a[2]
    }

    function R(e, t, a, n) {
        if (!T.ie || !T.mac) {
            var i = g.getElementsByTagName("head")[0];
            if (i) {
                var r = a && "string" == typeof a ? a : "screen";
                if (n && (p = l = null), !l || p != r) {
                    var o = V("style");
                    o.setAttribute("type", "text/css"), o.setAttribute("media", r), l = i.appendChild(o), T.ie && T.win && typeof g.styleSheets != m && 0 < g.styleSheets.length && (l = g.styleSheets[g.styleSheets.length - 1]), p = r
                }
                T.ie && T.win ? l && typeof l.addRule == w && l.addRule(e, t) : l && typeof g.createTextNode != m && l.appendChild(g.createTextNode(e + " {" + t + "}"))
            }
        }
    }

    function W(e, t) {
        if (r) {
            var a = t ? "visible" : "hidden";
            i && M(e) ? M(e).style.visibility = a : R("#" + e, "visibility:" + a)
        }
    }

    function H(e) {
        return null != /[\\\"<>\.;]/.exec(e) && typeof encodeURIComponent != m ? encodeURIComponent(e) : e
    }
    T.ie && T.win && window.attachEvent("onunload", function() {
        for (var e = o.length, t = 0; t < e; t++) o[t][0].detachEvent(o[t][1], o[t][2]);
        for (var a = S.length, n = 0; n < a; n++) x(S[n]);
        for (var i in T) T[i] = null;
        for (var r in T = null, swfobject) swfobject[r] = null;
        swfobject = null
    });
    return {
        registerObject: function(e, t, a, n) {
            if (T.w3 && e && t) {
                var i = {};
                i.id = e, i.swfVersion = t, i.expressInstall = a, i.callbackFn = n, E[E.length] = i, W(e, !1)
            } else n && n({
                success: !1,
                id: e
            })
        },
        getObjectById: function(e) {
            if (T.w3) return L(e)
        },
        embedSWF: function(o, l, s, c, f, d, p, u, v, y) {
            var h = {
                success: !1,
                id: l
            };
            T.w3 && !(T.wk && T.wk < 312) && o && l && s && c && f ? (W(l, !1), a(function() {
                s += "", c += "";
                var e = {};
                if (v && typeof v === w)
                    for (var t in v) e[t] = v[t];
                e.data = o, e.width = s, e.height = c;
                var a = {};
                if (u && typeof u === w)
                    for (var n in u) a[n] = u[n];
                if (p && typeof p === w)
                    for (var i in p) typeof a.flashvars != m ? a.flashvars += "&" + i + "=" + p[i] : a.flashvars = i + "=" + p[i];
                if (P(f)) {
                    var r = F(e, a, l);
                    e.id == l && W(l, !0), h.success = !0, h.ref = r
                } else {
                    if (d && k()) return e.data = d, void j(e, a, l, y);
                    W(l, !0)
                }
                y && y(h)
            })) : y && y(h)
        },
        switchOffAutoHideShow: function() {
            r = !1
        },
        ua: T,
        getFlashPlayerVersion: function() {
            return {
                major: T.pv[0],
                minor: T.pv[1],
                release: T.pv[2]
            }
        },
        hasFlashPlayerVersion: P,
        createSWF: function(e, t, a) {
            return T.w3 ? F(e, t, a) : void 0
        },
        showExpressInstall: function(e, t, a, n) {
            T.w3 && k() && j(e, t, a, n)
        },
        removeSWF: function(e) {
            T.w3 && x(e)
        },
        createCSS: function(e, t, a, n) {
            T.w3 && R(e, t, a, n)
        },
        addDomLoadEvent: a,
        addLoadEvent: A,
        getQueryParamValue: function(e) {
            var t = g.location.search || g.location.hash;
            if (t) {
                if (/\?/.test(t) && (t = t.split("?")[1]), null == e) return H(t);
                for (var a = t.split("&"), n = 0; n < a.length; n++)
                    if (a[n].substring(0, a[n].indexOf("=")) == e) return H(a[n].substring(a[n].indexOf("=") + 1))
            }
            return ""
        },
        expressInstallCallback: function() {
            if (N) {
                var e = M(y);
                e && s && (e.parentNode.replaceChild(s, e), c && (W(c, !0), T.ie && T.win && (s.style.display = "block")), f && f(d)), N = !1
            }
        }
    }
}();
! function(n) {
    var c, a = function() {
        var n, e;
        return 1 == arguments.length ? (n = arguments[0], new a.internal.Class(n)) : (e = arguments[0], n = arguments[1], e.extend(n))
    };
    a.internal = ((c = {}).__classId = c.__instaId = 0, c.__instanciated = {}, c.__instances = {}, c.Class = function(o) {
        var l = c.__classId++;
        o.__classId = l;
        var e = function() {
            if (this.__instaId = c.__instaId++, (o._exclusive || o._singleton) && c.__instanciated[this.__classId]) {
                if (o._returnInstance) return c.__instances[o.__instaId];
                throw new Error("Trying to instanciate an singleton class.")
            }
            if ((o._exclusive || o._singleton) && (o.__instaId = this.__instaId), null !== arguments[0] && (this._exclusive || this._singleton || this.useObjectPool) && (c.__instanciated[l] = !0, c.__instances[this.__instaId] = this), c.objectReset(this), o.__implements || o.__mixin) {
                var s = c.Class.Merge,
                    n = function(n, e, t) {
                        var r = e[t];
                        e[t] = void 0 === r ? n[t] : s(n[t], r)
                    },
                    e = o.__implements || o.__mixin,
                    t = c.type(e);
                if ("class" === t)
                    for (var r in e) n(e, this, r);
                else if ("array" === t)
                    for (var i = 0, a = e.length; i < a; i++)
                        for (var r in e[i]) n(e[i], this, r)
            }
            return null !== arguments[0] && this.initialize && "function" == c.type(this.initialize) ? this.initialize.apply(this, arguments) : this
        };
        return c.$extend(e, this), (o._exclusive || o._singleton) && (e.getInstance = function() {
            var n = new e;
            return e.getInstance = function() {
                return n
            }, n
        }), e.prototype = o, e.constructor = c.Class, e
    }, c.Class.prototype = {
        extend: function(n) {
            var e = new this(null);
            for (var t in n) {
                var r = e[t];
                e[t] = c.Class.Merge(r, n[t])
            }
            return new c.Class(e)
        }
    }, c.Class.Merge = function(n, t) {
        if (n && n != t) {
            var e = c.type(t);
            if (e != c.type(n)) return t;
            switch (e) {
                case "function":
                    var r = function() {
                        var n, e = this.parent;
                        return this.parent = arguments.callee.parent, n = t.apply(this, arguments), this.parent = e, n
                    };
                    return r.parent = n, r;
                case "object":
                    return c.$merge(n, t)
            }
        }
        return t
    }, c.unlink = function(n) {
        var e;
        switch (c.type(n)) {
            case "object":
                for (var t in e = {}, n) e[t] = c.unlink(n[t]);
                break;
            case "array":
                e = [];
                for (var r = 0, s = n.length; r < s; r++) e[r] = c.unlink(n[r]);
                break;
            default:
                return n
        }
        return e
    }, c.objectReset = function(n) {
        for (var e in n) {
            var t = n[e];
            switch (c.type(t)) {
                case "object":
                    var r = function() {};
                    r.prototype = t;
                    var s = new r;
                    n[e] = c.objectReset(s);
                    break;
                case "array":
                    n[e] = c.unlink(n[e])
            }
        }
        return n
    }, c.type = function(n) {
        if (null == n) return !1;
        if (n.htmlElement) return "element";
        var e = typeof n;
        if ("object" == e && n.nodeName) switch (n.nodeType) {
            case 1:
                return "element";
            case 3:
                return /\S/.test(n.nodeValue) ? "textnode" : "whitespace"
        }
        if ("object" == e || "function" == e) {
            switch (n.constructor) {
                case Array:
                    return "array";
                case RegExp:
                    return "regexp";
                case c.Class:
                    return "class"
            }
            if ("number" == typeof n.length) {
                if (n.item) return "collection";
                if (n.callee) return "arguments"
            }
        }
        return e
    }, c.merge = c.$merge = function() {
        for (var n = {}, e = 0; e < arguments.length; e++)
            for (var t in arguments[e]) {
                var r = arguments[e][t],
                    s = n[t];
                s && "object" == c.type(r) && "object" == c.type(s) ? n[t] = c.$merge(s, r) : n[t] = r
            }
        return n
    }, c.$extend = function() {
        var n = arguments;
        for (var e in n[1] || (n = [this, n[0]]), n[1]) n[0][e] = n[1][e];
        return n[0]
    }, c), a.setClassPool = function(n) {
        a.internal.__classPool = n
    }, a.merge = a.internal.merge, a.getInstancesByClass = function() {
        if (!a.internal.__classPool) throw "$.klass: classPool not set!";
        var n, e, t, r, s, i = {};
        for (n in s = a.internal.__instances)
            if (s.hasOwnProperty(n))
                for (r in e = s[n].__classId, t = s[n].__instaId, a.internal.__classPool)
                    if (e === a.internal.__classPool[r].prototype.__classId) {
                        i[r] || (i[r] = {}), i[r][t] = s[n];
                        break
                    } return i
    }, a.getFirstInstanceOf = function(n, e) {
        var t, r = [];
        for (var s in t = a.getInstancesByClass()[n]) t.hasOwnProperty(s) && r.push(t[s]);
        return r[e = r.length && e >= r.length ? r.length - 1 : ~~e]
    }, a.destroy = function() {
        a.internal.__instanciated[this.__instaId] = !1, a.internal.__instances[this.__instaId] = null
    }, a.getLastInstanceOf = function(n) {
        return a.getFirstInstanceOf(n, 1 / 0)
    }, a.isClassInstanciated = function(n) {
        return !!a.getInstancesByClass()[n]
    }, n.klass = a, "undefined" != typeof module && module.exports ? module.exports = a : "function" == typeof window.define && window.define.amd && define("klass", [], function() {
        return a
    })
}(jQuery);
window.ustream || (window.ustream = {}),
    function() {
        var s, e = ["vars", "framework", "labels", "external", "templates", "flash", "html5video", "statik", "classes", "abstracts", "logic"],
            a = e.length;
        for (s = 0; s < a; s += 1) ustream[e[s]] || (ustream[e[s]] = {});
        try {
            ustream.vars.isPopup = window.opener && window.opener.ustream && "object" == typeof window.opener.ustream
        } catch (s) {
            ustream.vars.isPopup = !1
        }
        $.klass.setClassPool(ustream.classes)
    }();
! function(h, b) {
    function j() {}

    function g(e) {
        x = [e]
    }

    function v(e) {
        P.insertBefore(e, P.firstChild)
    }

    function w(e, t, n) {
        e && e.apply(t, n)
    }

    function k(e) {
        return /\?/.test(e) ? "&" : "?"
    }
    var x, C = "async",
        T = "",
        Q = "error",
        S = "_jqjsp",
        e = "on",
        $ = e + Q,
        _ = "onload",
        q = "onreadystatechange",
        B = "removeChild",
        D = "<script/>",
        E = "success",
        F = "timeout",
        P = h("head")[0] || document.documentElement,
        z = {},
        A = 0,
        G = {
            callback: S,
            url: location.href
        };

    function t(t) {
        var e, n = (t = h.extend({}, G, t)).complete,
            o = t.dataFilter,
            c = t.callbackParameter,
            r = t.callback,
            a = t.cache,
            i = t.pageCache,
            u = t.url,
            f = t.data,
            s = t.timeout,
            l = t.beforeSend,
            d = 0,
            p = j;
        if (t.abort = function() {
                !d++ && p()
            }, l && (!1 === l(t, t) || d)) return t;

        function m(e) {
            !d++ && b(function() {
                p(), i && (z[u] = {
                    s: [e]
                }), o && (e = o.apply(t, [e])), w(t.success, t, [e, E]), w(n, t, [t, E])
            }, 0)
        }

        function y(e) {
            !d++ && b(function() {
                p(), i && e != F && (z[u] = e), w(t.error, t, [t, e]), w(n, t, [t, e])
            }, 0)
        }
        return u = u || T, f = f ? "string" == typeof f ? f : h.param(f, t.traditional) : T, u += f ? k(u) + f : T, c && (u += k(u) + escape(c) + "=?"), !a && !i && (u += k(u) + "_" + (new Date).getTime() + "="), u = u.replace(/=\?(&|$)/, "=" + r + "$1"), i && (e = z[u]) ? e.s ? m(e.s[0]) : y(e) : b(function(e, t, n) {
            if (!d) {
                function o(e) {
                    e = x, x = void 0, e ? m(e[0]) : y(Q)
                }
                n = 0 < s && b(function() {
                    y(F)
                }, s), p = function() {
                    n && clearTimeout(n), e[q] = e[_] = e[$] = null, P[B](e), t && P[B](t)
                }, window[r] = g, (e = h(D)[0])[q] = function() {
                    /loaded|complete/.test(e.readyState) && o()
                }, e[$] = e[_] = o, ustream.browser.opera ? (t = h(D)[0]).text = "jQuery('#" + (e.id = S + A++) + "')[0]." + $ + "()" : e[C] = C, e.src = u, v(e), t && v(t)
            }
        }, 0), t
    }
    t.setup = function(e) {
        h.extend(G, e)
    }, h.jsonp = t
}(jQuery, setTimeout);
! function(i, t) {
    "use strict";
    var n = i.History = i.History || {},
        r = i.jQuery;
    if (void 0 !== n.Adapter) throw new Error("History.js Adapter has already been loaded...");
    n.Adapter = {
        bind: function(i, t, n) {
            r(i).bind(t, n)
        },
        trigger: function(i, t, n) {
            r(i).trigger(t, n)
        },
        extractEventData: function(i, t, n) {
            return t && t.originalEvent && t.originalEvent[i] || n && n[i] || void 0
        },
        onDomLoad: function(i) {
            r(i)
        }
    }, void 0 !== n.init && n.init()
}(window);
! function(o, e) {
    "use strict";
    var c = o.document,
        t = o.setTimeout || t,
        a = o.clearTimeout || a,
        i = o.setInterval || i,
        u = o.History = o.History || {};
    if (void 0 !== u.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
    u.initHtml4 = function() {
        if (void 0 !== u.initHtml4.initialized) return !1;
        u.initHtml4.initialized = !0, u.enabled = !0, u.savedHashes = [], u.isLastHash = function(e) {
            return e === u.getHashByIndex()
        }, u.saveHash = function(e) {
            return !u.isLastHash(e) && (u.savedHashes.push(e), !0)
        }, u.getHashByIndex = function(e) {
            return void 0 === e ? u.savedHashes[u.savedHashes.length - 1] : e < 0 ? u.savedHashes[u.savedHashes.length + e] : u.savedHashes[e]
        }, u.discardedHashes = {}, u.discardedStates = {}, u.discardState = function(e, t, a) {
            var s, r = u.getHashByState(e);
            return s = {
                discardedState: e,
                backState: a,
                forwardState: t
            }, u.discardedStates[r] = s, !0
        }, u.discardHash = function(e, t, a) {
            var s = {
                discardedHash: e,
                backState: a,
                forwardState: t
            };
            return u.discardedHashes[e] = s, !0
        }, u.discardedState = function(e) {
            var t = u.getHashByState(e);
            return u.discardedStates[t] || !1
        }, u.discardedHash = function(e) {
            return u.discardedHashes[e] || !1
        }, u.recycleState = function(e) {
            var t = u.getHashByState(e);
            return u.discardedState(e) && delete u.discardedStates[t], !0
        }, u.emulated.hashChange && (u.hashChangeInit = function() {
            u.checkerFunction = null;
            var a, s, r, n = "";
            return u.isInternetExplorer() ? ("historyjs-iframe", (a = c.createElement("iframe")).setAttribute("id", "historyjs-iframe"), a.style.display = "none", c.body.appendChild(a), a.contentWindow.document.open(), a.contentWindow.document.close(), s = "", r = !1, u.checkerFunction = function() {
                if (r) return !1;
                r = !0;
                var e = u.getHash() || "",
                    t = u.unescapeHash(a.contentWindow.document.location.hash) || "";
                return e !== n ? (t !== (n = e) && (s = t = e, a.contentWindow.document.open(), a.contentWindow.document.close(), a.contentWindow.document.location.hash = u.escapeHash(e)), u.Adapter.trigger(o, "hashchange")) : t !== s && (s = t, u.setHash(t, !1)), !(r = !1)
            }) : u.checkerFunction = function() {
                var e = u.getHash();
                return e !== n && (n = e, u.Adapter.trigger(o, "hashchange")), !0
            }, u.intervalList.push(i(u.checkerFunction, u.options.hashChangeInterval)), !0
        }, u.Adapter.onDomLoad(u.hashChangeInit)), u.emulated.pushState && (u.onHashChange = function(e) {
            var t, a, s = e && e.newURL || c.location.href,
                r = u.getHashByUrl(s);
            return u.isLastHash(r) ? (u.busy(!1), !1) : (u.doubleCheckComplete(), u.saveHash(r), r && u.isTraditionalAnchor(r) ? (u.Adapter.trigger(o, "anchorchange"), u.busy(!1), !1) : (t = u.extractState(u.getFullUrl(r || c.location.href, !1), !0), u.isLastSavedState(t) ? (u.busy(!1), !1) : (u.getHashByState(t), (a = u.discardedState(t)) ? (u.getHashByIndex(-2) === u.getHashByState(a.forwardState) ? u.back(!1) : u.forward(!1), !1) : (u.pushState(t.data, t.title, t.url, !1), !0))))
        }, u.Adapter.bind(o, "hashchange", u.onHashChange), u.pushState = function(e, t, a, s) {
            if (u.getHashByUrl(a)) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (!1 !== s && u.busy()) return u.pushQueue({
                scope: u,
                callback: u.pushState,
                args: arguments,
                queue: s
            }), !1;
            u.busy(!0);
            var r = u.createStateObject(e, t, a),
                n = u.getHashByState(r),
                i = u.getState(!1),
                d = u.getHashByState(i),
                h = u.getHash();
            return u.storeState(r), u.expectedStateId = r.id, u.recycleState(r), u.setTitle(r), n === d ? (u.busy(!1), !1) : n !== h && n !== u.getShortUrl(c.location.href) ? (u.setHash(n, !1), !1) : (u.saveState(r), u.Adapter.trigger(o, "statechange"), u.busy(!1), !0)
        }, u.replaceState = function(e, t, a, s) {
            if (u.getHashByUrl(a)) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (!1 !== s && u.busy()) return u.pushQueue({
                scope: u,
                callback: u.replaceState,
                args: arguments,
                queue: s
            }), !1;
            u.busy(!0);
            var r = u.createStateObject(e, t, a),
                n = u.getState(!1),
                i = u.getStateByIndex(-2);
            return u.discardState(n, r, i), u.pushState(r.data, r.title, r.url, !1), !0
        }), u.emulated.pushState && u.getHash() && !u.emulated.hashChange && u.Adapter.onDomLoad(function() {
            u.Adapter.trigger(o, "hashchange")
        })
    }, void 0 !== u.init && u.init()
}(window);
! function(i, t) {
    "use strict";
    var s = i.console || t,
        l = i.document,
        r = i.navigator,
        a = i.sessionStorage || !1,
        o = i.setTimeout,
        n = i.clearTimeout,
        u = i.setInterval,
        c = i.clearInterval,
        d = i.JSON || {},
        p = i.alert,
        h = i.History = i.History || {},
        g = i.history;
    if (d.stringify = d.stringify || d.encode, d.parse = d.parse || d.decode, void 0 !== h.init) throw new Error("History.js Core has already been loaded...");
    h.init = function() {
        return void 0 !== h.Adapter && (void 0 !== h.initCore && h.initCore(), void 0 !== h.initHtml4 && h.initHtml4(), !0)
    }, h.initCore = function() {
        if (void 0 !== h.initCore.initialized) return !1;
        if (h.initCore.initialized = !0, h.options = h.options || {}, h.options.hashChangeInterval = h.options.hashChangeInterval || 100, h.options.safariPollInterval = h.options.safariPollInterval || 500, h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500, h.options.storeInterval = h.options.storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay || 250, h.options.debug = h.options.debug || !1, h.options.initialTitle = h.options.initialTitle || l.title, h.intervalList = [], h.clearAllIntervals = function() {
                var e, t = h.intervalList;
                if (null != t) {
                    for (e = 0; e < t.length; e++) c(t[e]);
                    h.intervalList = null
                }
            }, h.debug = function() {
                h.options.debug && h.log.apply(h, arguments)
            }, h.log = function() {
                var e, t, r, a, o, n = !(void 0 === s || void 0 === s.log || void 0 === s.log.apply),
                    i = l.getElementById("log");
                for (n ? (e = (a = Array.prototype.slice.call(arguments)).shift(), void 0 !== s.debug ? s.debug.apply(s, [e, a]) : s.log.apply(s, [e, a])) : e = "\n" + arguments[0] + "\n", t = 1, r = arguments.length; t < r; ++t) {
                    if ("object" == typeof(o = arguments[t]) && void 0 !== d) try {
                        o = d.stringify(o)
                    } catch (e) {}
                    e += "\n" + o + "\n"
                }
                return i ? (i.value += e + "\n-----\n", i.scrollTop = i.scrollHeight - i.clientHeight) : n || p(e), !0
            }, h.getInternetExplorerMajorVersion = function() {
                return h.getInternetExplorerMajorVersion.cached = void 0 !== h.getInternetExplorerMajorVersion.cached ? h.getInternetExplorerMajorVersion.cached : function() {
                    for (var e = 3, t = l.createElement("div"), r = t.getElementsByTagName("i");
                        (t.innerHTML = "\x3c!--[if gt IE " + ++e + "]><i></i><![endif]--\x3e") && r[0];);
                    return 4 < e && e
                }()
            }, h.isInternetExplorer = function() {
                return h.isInternetExplorer.cached = void 0 !== h.isInternetExplorer.cached ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion())
            }, h.emulated = {
                pushState: !Boolean(i.history && i.history.pushState && i.history.replaceState && !(/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(r.userAgent) || /AppleWebKit\/5([0-2]|3[0-2])/i.test(r.userAgent))),
                hashChange: Boolean(!("onhashchange" in i || "onhashchange" in l) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
            }, h.enabled = !h.emulated.pushState, h.bugs = {
                setHash: Boolean(!h.emulated.pushState && "Apple Computer, Inc." === r.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)),
                safariPoll: Boolean(!h.emulated.pushState && "Apple Computer, Inc." === r.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)),
                ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
                hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)
            }, h.isEmptyObject = function(e) {
                for (var t in e) return !1;
                return !0
            }, h.cloneObject = function(e) {
                var t, r;
                return e ? (t = d.stringify(e), r = d.parse(t)) : r = {}, r
            }, h.getRootUrl = function() {
                var e = l.location.protocol + "//" + (l.location.hostname || l.location.host);
                return l.location.port && (e += ":" + l.location.port), e += "/"
            }, h.getBaseHref = function() {
                var e = l.getElementsByTagName("base"),
                    t = "";
                return 1 === e.length && (t = e[0].href.replace(/[^\/]+$/, "")), (t = t.replace(/\/+$/, "")) && (t += "/"), t
            }, h.getBaseUrl = function() {
                return h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl()
            }, h.getPageUrl = function() {
                return ((h.getState(!1, !1) || {}).url || l.location.href).replace(/\/+$/, "").replace(/[^\/]+$/, function(e, t, r) {
                    return /\./.test(e) ? e : e + "/"
                })
            }, h.getBasePageUrl = function() {
                return l.location.href.replace(/[#\?].*/, "").replace(/[^\/]+$/, function(e, t, r) {
                    return /[^\/]$/.test(e) ? "" : e
                }).replace(/\/+$/, "") + "/"
            }, h.getFullUrl = function(e, t) {
                var r = e,
                    a = e.substring(0, 1);
                return t = void 0 === t || t, /[a-z]+\:\/\//.test(e) || (r = "/" === a ? h.getRootUrl() + e.replace(/^\/+/, "") : "#" === a ? h.getPageUrl().replace(/#.*/, "") + e : "?" === a ? h.getPageUrl().replace(/[\?#].*/, "") + e : t ? h.getBaseUrl() + e.replace(/^(\.\/)+/, "") : h.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), r.replace(/\#$/, "")
            }, h.getShortUrl = function(e) {
                var t = e,
                    r = (h.getBaseUrl(), h.getRootUrl());
                return h.emulated.pushState, t = t.replace(r, "/"), h.isTraditionalAnchor(t) && (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
            }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId = h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates = h.storedStates || [], h.savedStates = h.savedStates || [], h.normalizeStore = function() {
                h.store.idToState = h.store.idToState || {}, h.store.urlToId = h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
            }, h.getState = function(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var r = h.getLastSavedState();
                return !r && t && (r = h.createStateObject()), e && ((r = h.cloneObject(r)).url = r.cleanUrl || r.url), r
            }, h.getIdByState = function(e) {
                var t, r = h.extractId(e.url);
                if (!r)
                    if (t = h.getStateString(e), void 0 !== h.stateToId[t]) r = h.stateToId[t];
                    else if (void 0 !== h.store.stateToId[t]) r = h.store.stateToId[t];
                else {
                    for (; r = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), void 0 !== h.idToState[r] || void 0 !== h.store.idToState[r];);
                    h.stateToId[t] = r, h.idToState[r] = e
                }
                return r
            }, h.normalizeState = function(e) {
                var t, r;
                return e && "object" == typeof e || (e = {}), void 0 !== e.normalized ? e : (e.data && "object" == typeof e.data || (e.data = {}), (t = {
                    normalized: !0
                }).title = e.title || "", t.url = h.getFullUrl(h.unescapeString(e.url || l.location.href)), t.hash = h.getShortUrl(t.url), t.data = h.cloneObject(e.data), t.id = h.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl, r = !h.isEmptyObject(t.data), (t.title || r) && (t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) || (t.hash += "?"), t.hash += "&_suid=" + t.id), t.hashedUrl = h.getFullUrl(t.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t)
            }, h.createStateObject = function(e, t, r) {
                var a = {
                    data: e,
                    title: t,
                    url: r
                };
                return a = h.normalizeState(a)
            }, h.getStateById = function(e) {
                return e = String(e), h.idToState[e] || h.store.idToState[e] || t
            }, h.getStateString = function(e) {
                var t;
                return t = {
                    data: h.normalizeState(e).data,
                    title: e.title,
                    url: e.url
                }, d.stringify(t)
            }, h.getStateId = function(e) {
                return h.normalizeState(e).id
            }, h.getHashByState = function(e) {
                return h.normalizeState(e).hash
            }, h.extractId = function(e) {
                var t;
                return (t = /(.*)\&_suid=([0-9]+)$/.exec(e)) && t[1] || e, (t ? String(t[2] || "") : "") || !1
            }, h.isTraditionalAnchor = function(e) {
                return !/[\/\?]/.test(e)
            }, h.extractState = function(e, t) {
                var r, a, o = null;
                return t = t || !1, (r = h.extractId(e)) && (o = h.getStateById(r)), o || (a = h.getFullUrl(e), (r = h.getIdByUrl(a) || !1) && (o = h.getStateById(r)), o || !t || h.isTraditionalAnchor(e) || (o = h.createStateObject(null, null, a))), o
            }, h.getIdByUrl = function(e) {
                return h.urlToId[e] || h.store.urlToId[e] || t
            }, h.getLastSavedState = function() {
                return h.savedStates[h.savedStates.length - 1] || t
            }, h.getLastStoredState = function() {
                return h.storedStates[h.storedStates.length - 1] || t
            }, h.hasUrlDuplicate = function(e) {
                var t;
                return (t = h.extractState(e.url)) && t.id !== e.id
            }, h.storeState = function(e) {
                return h.urlToId[e.url] = e.id, h.storedStates.push(h.cloneObject(e)), e
            }, h.isLastSavedState = function(e) {
                var t = !1;
                return h.savedStates.length && (t = e.id === h.getLastSavedState().id), t
            }, h.saveState = function(e) {
                return !h.isLastSavedState(e) && (h.savedStates.push(h.cloneObject(e)), !0)
            }, h.getStateByIndex = function(e) {
                return void 0 === e ? h.savedStates[h.savedStates.length - 1] : e < 0 ? h.savedStates[h.savedStates.length + e] : h.savedStates[e]
            }, h.getHash = function() {
                return h.unescapeHash(l.location.hash)
            }, h.unescapeString = function(e) {
                return e
            }, h.unescapeHash = function(e) {
                var t = h.normalizeHash(e);
                return t = h.unescapeString(t)
            }, h.normalizeHash = function(e) {
                return e.replace(/[^#]*#/, "").replace(/#.*/, "")
            }, h.setHash = function(e, t) {
                var r, a, o;
                return !1 !== t && h.busy() ? (h.pushQueue({
                    scope: h,
                    callback: h.setHash,
                    args: arguments,
                    queue: t
                }), !1) : (r = h.escapeHash(e), h.busy(!0), (a = h.extractState(e, !0)) && !h.emulated.pushState ? h.pushState(a.data, a.title, a.url, !1) : l.location.hash !== r && (h.bugs.setHash ? (o = h.getPageUrl(), h.pushState(null, null, o + "#" + r, !1)) : l.location.hash = r), h)
            }, h.escapeHash = function(e) {
                var t = h.normalizeHash(e);
                return t
            }, h.getHashByUrl = function(e) {
                var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                return t = h.unescapeHash(t)
            }, h.setTitle = function(e) {
                var t, r = e.title;
                r || (t = h.getStateByIndex(0)) && t.url === e.url && (r = t.title || h.options.initialTitle);
                try {
                    l.getElementsByTagName("title")[0].innerHTML = r.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                } catch (e) {}
                return l.title = r, h
            }, h.queues = [], h.busy = function(e) {
                if (void 0 !== e ? h.busy.flag = e : void 0 === h.busy.flag && (h.busy.flag = !1), !h.busy.flag) {
                    n(h.busy.timeout);
                    var a = function() {
                        var e, t, r;
                        if (!h.busy.flag)
                            for (e = h.queues.length - 1; 0 <= e; --e) 0 !== (t = h.queues[e]).length && (r = t.shift(), h.fireQueueItem(r), h.busy.timeout = o(a, h.options.busyDelay))
                    };
                    h.busy.timeout = o(a, h.options.busyDelay)
                }
                return h.busy.flag
            }, h.busy.flag = !1, h.fireQueueItem = function(e) {
                return e.callback.apply(e.scope || h, e.args || [])
            }, h.pushQueue = function(e) {
                return h.queues[e.queue || 0] = h.queues[e.queue || 0] || [], h.queues[e.queue || 0].push(e), h
            }, h.queue = function(e, t) {
                return "function" == typeof e && (e = {
                    callback: e
                }), void 0 !== t && (e.queue = t), h.busy() ? h.pushQueue(e) : h.fireQueueItem(e), h
            }, h.clearQueue = function() {
                return h.busy.flag = !1, h.queues = [], h
            }, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete = function() {
                return h.stateChanged = !0, h.doubleCheckClear(), h
            }, h.doubleCheckClear = function() {
                return h.doubleChecker && (n(h.doubleChecker), h.doubleChecker = !1), h
            }, h.doubleCheck = function(e) {
                return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = o(function() {
                    return h.doubleCheckClear(), h.stateChanged || e(), !0
                }, h.options.doubleCheckInterval)), h
            }, h.safariStatePoll = function() {
                var e = h.extractState(l.location.href);
                if (!h.isLastSavedState(e)) return e || h.createStateObject(), h.Adapter.trigger(i, "popstate"), h
            }, h.back = function(e) {
                return !1 !== e && h.busy() ? (h.pushQueue({
                    scope: h,
                    callback: h.back,
                    args: arguments,
                    queue: e
                }), !1) : (h.busy(!0), h.doubleCheck(function() {
                    h.back(!1)
                }), g.go(-1), !0)
            }, h.forward = function(e) {
                return !1 !== e && h.busy() ? (h.pushQueue({
                    scope: h,
                    callback: h.forward,
                    args: arguments,
                    queue: e
                }), !1) : (h.busy(!0), h.doubleCheck(function() {
                    h.forward(!1)
                }), g.go(1), !0)
            }, h.go = function(e, t) {
                var r;
                if (0 < e)
                    for (r = 1; r <= e; ++r) h.forward(t);
                else {
                    if (!(e < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                    for (r = -1; e <= r; --r) h.back(t)
                }
                return h
            }, h.emulated.pushState) {
            var e = function() {};
            h.pushState = h.pushState || e, h.replaceState = h.replaceState || e
        } else h.onPopState = function(e, t) {
            var r, a, o, n = !1;
            return h.doubleCheckComplete(), (a = h.getHash()) ? ((o = h.extractState(a || l.location.href, !0)) ? h.replaceState(o.data, o.title, o.url, !1) : (h.Adapter.trigger(i, "anchorchange"), h.busy(!1)), h.expectedStateId = !1) : ((n = (r = h.Adapter.extractEventData("state", e, t) || !1) ? h.getStateById(r) : h.expectedStateId ? h.getStateById(h.expectedStateId) : h.extractState(l.location.href)) || (n = h.createStateObject(null, null, l.location.href)), h.expectedStateId = !1, h.isLastSavedState(n) ? (h.busy(!1), !1) : (h.storeState(n), h.saveState(n), h.setTitle(n), h.Adapter.trigger(i, "statechange"), h.busy(!1), !0))
        }, h.Adapter.bind(i, "popstate", h.onPopState), h.pushState = function(e, t, r, a) {
            if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (!1 !== a && h.busy()) return h.pushQueue({
                scope: h,
                callback: h.pushState,
                args: arguments,
                queue: a
            }), !1;
            h.busy(!0);
            var o = h.createStateObject(e, t, r);
            return h.isLastSavedState(o) ? h.busy(!1) : (h.storeState(o), h.expectedStateId = o.id, g.pushState(o.id, o.title, o.url), h.Adapter.trigger(i, "popstate")), !0
        }, h.replaceState = function(e, t, r, a) {
            if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (!1 !== a && h.busy()) return h.pushQueue({
                scope: h,
                callback: h.replaceState,
                args: arguments,
                queue: a
            }), !1;
            h.busy(!0);
            var o = h.createStateObject(e, t, r);
            return h.isLastSavedState(o) ? h.busy(!1) : (h.storeState(o), h.expectedStateId = o.id, g.replaceState(o.id, o.title, o.url), h.Adapter.trigger(i, "popstate")), !0
        };
        if (a) {
            try {
                h.store = d.parse(a.getItem("History.store")) || {}
            } catch (e) {
                h.store = {}
            }
            h.normalizeStore()
        } else h.store = {}, h.normalizeStore();
        h.Adapter.bind(i, "beforeunload", h.clearAllIntervals), h.Adapter.bind(i, "unload", h.clearAllIntervals), h.saveState(h.storeState(h.extractState(l.location.href, !0))), a && (h.onUnload = function() {
            var t, e;
            try {
                t = d.parse(a.getItem("History.store")) || {}
            } catch (e) {
                t = {}
            }
            for (e in t.idToState = t.idToState || {}, t.urlToId = t.urlToId || {}, t.stateToId = t.stateToId || {}, h.idToState) h.idToState.hasOwnProperty(e) && (t.idToState[e] = h.idToState[e]);
            for (e in h.urlToId) h.urlToId.hasOwnProperty(e) && (t.urlToId[e] = h.urlToId[e]);
            for (e in h.stateToId) h.stateToId.hasOwnProperty(e) && (t.stateToId[e] = h.stateToId[e]);
            h.store = t, h.normalizeStore();
            try {
                a.setItem("History.store", d.stringify(t))
            } catch (e) {}
        }, h.intervalList.push(u(h.onUnload, h.options.storeInterval)), h.Adapter.bind(i, "beforeunload", h.onUnload), h.Adapter.bind(i, "unload", h.onUnload)), h.emulated.pushState || (h.bugs.safariPoll && h.intervalList.push(u(h.safariStatePoll, h.options.safariPollInterval)), "Apple Computer, Inc." !== r.vendor && "Mozilla" !== (r.appCodeName || "") || (h.Adapter.bind(i, "hashchange", function() {
            h.Adapter.trigger(i, "popstate")
        }), h.getHash() && h.Adapter.onDomLoad(function() {
            h.Adapter.trigger(i, "hashchange")
        })))
    }, h.init()
}(window);
! function(o) {
    var t = ["DOMMouseScroll", "mousewheel"];
    if (o.event.fixHooks)
        for (var e = t.length; e;) o.event.fixHooks[t[--e]] = o.event.mouseHooks;

    function n(e) {
        var t = e || window.event,
            n = [].slice.call(arguments, 1),
            i = 0,
            l = 0,
            s = 0;
        return (e = o.event.fix(t)).type = "mousewheel", t.wheelDelta && (i = t.wheelDelta / 120), t.detail && (i = -t.detail / 3), s = i, void 0 !== t.axis && t.axis === t.HORIZONTAL_AXIS && (s = 0, l = -1 * i), void 0 !== t.wheelDeltaY && (s = t.wheelDeltaY / 120), void 0 !== t.wheelDeltaX && (l = -1 * t.wheelDeltaX / 120), n.unshift(e, i, l, s), (o.event.dispatch || o.event.handle).apply(this, n)
    }
    o.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var e = t.length; e;) this.addEventListener(t[--e], n, !1);
            else this.onmousewheel = n
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = t.length; e;) this.removeEventListener(t[--e], n, !1);
            else this.onmousewheel = null
        }
    }, o.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
}(jQuery);
! function(t) {
    t.forEach || t.fn.forEach ? alert("jQuery has its own forEach now?!") : (t.forEach = function(o, n, r, e) {
        var a, c = t.type,
            f = 0,
            l = 0;
        if (null == o) window.console && window.console.log && (console.trace(), console.log("$.forEach: undefined or null param passed; please trace."));
        else if ("function" === c(o.forEach)) o.forEach(n, r);
        else if ("string" === c(o))
            for (f = 0, a = o.length; f < a; f++) n.call(r, o.charAt(f), f);
        else if ("array" === c(o))
            for (a = o.length; f !== a;) n.call(r, o[f], f++);
        else if ("object" === c(o))
            if (o.jquery && "function" === c(o.each)) o.each(function(o, e) {
                n.call(r, e, o)
            });
            else
                for (f in o) o.hasOwnProperty(f) && n.call(r, o[f], f, l++);
        return e
    }, t.fn.extend({
        forEach: function(o, e) {
            return t.forEach(this.toArray(), o, e, this)
        }
    }), t.forEach.version = "1.1")
}(jQuery);
! function(n) {
    n.postMessage = function(o, e, n) {
        if (void 0 === o || !e || !n) throw new TypeError("Not enough arguments [postMessage]");
        try {
            n = n.contentWindow || n
        } catch (o) {}
        "*" === e && void 0 !== window.console && "function" == typeof window.console.log && window.console.log("targetOrigin is *, are you sure you don't know where do you want to send it? For example  'http://' + window.location.hostname");
        var t = typeof n.postMessage;
        ("function" === t || ustream.browser.msie && "object" === t) && (o = JSON.stringify(o), n.postMessage(o, e))
    }, n.receiveMessage = function(o, e) {
        n(o).bind("message", function(o) {
            try {
                o.eventData = JSON.parse(o.originalEvent.data)
            } catch (o) {}
            e(o)
        })
    }
}(window.jQuery);
! function(E) {
    function M() {
        if (E.fn.ajaxSubmit.debug) {
            var e = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(e) : window.opera && window.opera.postError && window.opera.postError(e)
        }
    }
    E.fn.ajaxSubmit = function(l) {
        if (!this.length) return M("ajaxSubmit: skipping submit process - no element selected"), this;
        var A, e, t, D = this;
        "function" == typeof l && (l = {
            success: l
        }), A = this.attr("method"), (t = (t = "string" == typeof(e = this.attr("action")) ? E.trim(e) : "") || window.location.href || "") && (t = (t.match(/^([^#]+)/) || [])[1]), l = E.extend(!0, {
            url: t,
            success: E.ajaxSettings.success,
            type: A || "GET",
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, l);
        var r = {};
        if (this.trigger("form-pre-serialize", [this, l, r]), r.veto) return M("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (l.beforeSerialize && !1 === l.beforeSerialize(this, l)) return M("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var a, n, i = this.formToArray(l.semantic);
        if (l.data)
            for (a in l.extraData = l.data, l.data)
                if (E.isArray(l.data[a]))
                    for (var o in l.data[a]) i.push({
                        name: a,
                        value: l.data[a][o]
                    });
                else n = l.data[a], n = E.isFunction(n) ? n() : n, i.push({
                    name: a,
                    value: n
                });
        if (l.beforeSubmit && !1 === l.beforeSubmit(i, this, l)) return M("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [i, this, l, r]), r.veto) return M("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var s = E.param(i);
        "GET" == l.type.toUpperCase() ? (l.url += (0 <= l.url.indexOf("?") ? "&" : "?") + s, l.data = null) : l.data = s;
        var u = [];
        if (l.resetForm && u.push(function() {
                D.resetForm()
            }), l.clearForm && u.push(function() {
                D.clearForm()
            }), !l.dataType && l.target) {
            var c = l.success || function() {};
            u.push(function(e) {
                var t = l.replaceTarget ? "replaceWith" : "html";
                E(l.target)[t](e).each(c, arguments)
            })
        } else l.success && u.push(l.success);
        l.success = function(e, t, r) {
            for (var a = l.context || l, n = 0, i = u.length; n < i; n++) u[n].apply(a, [e, t, r || D, D])
        };
        var f = E("input:file:not(:disabled)", this),
            m = "";
        f.each(function() {
            m += E(this).val()
        }), f = m && 0 < f.length;
        if (!1 !== l.iframe && (f || l.iframe)) l.closeKeepAlive ? E.get(l.closeKeepAlive, function() {
            p(i)
        }) : p(i);
        else {
            if (ustream.browser.msie && "get" == A) {
                var d = D[0].getAttribute("method");
                "string" == typeof d && (l.type = d)
            }
            E.ajax(l)
        }
        return this.trigger("form-submit-notify", [this, l]), this;

        function p(e) {
            var t, c, f, n, m, d, p, r, a, h, v, i = D[0],
                o = !!E.fn.prop;
            if (e)
                for (t = 0; t < e.length; t++) E(i[e[t].name])[o ? "prop" : "attr"]("disabled", !1);
            if (E(":input[name=submit],:input[id=submit]", i).length) alert('Error: Form elements must not have name or id of "submit".');
            else if ((c = E.extend(!0, {}, E.ajaxSettings, l)).context = c.context || c, n = "jqFormIO" + (new Date).getTime(), c.iframeTarget ? null == (a = (m = E(c.iframeTarget)).attr("name")) ? m.attr("name", n) : n = a : (m = E('<iframe name="' + n + '" src="' + c.iframeSrc + '" />')).css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                }), d = m[0], p = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function() {},
                    getResponseHeader: function() {},
                    setRequestHeader: function() {},
                    abort: function(e) {
                        var t = "timeout" === e ? "timeout" : "aborted";
                        M("aborting upload... " + t), this.aborted = 1, m.attr("src", c.iframeSrc), p.error = t, c.error && c.error.call(c.context, p, t, e), f && E.event.trigger("ajaxError", [p, c, t]), c.complete && c.complete.call(c.context, p, t)
                    }
                }, (f = c.global) && !E.active++ && E.event.trigger("ajaxStart"), f && E.event.trigger("ajaxSend", [p, c]), c.beforeSend && !1 === c.beforeSend.call(c.context, p, c)) c.global && E.active--;
            else if (!p.aborted) {
                (r = i.clk) && (a = r.name) && !r.disabled && (c.extraData = c.extraData || {}, c.extraData[a] = r.value, "image" == r.type && (c.extraData[a + ".x"] = i.clk_x, c.extraData[a + ".y"] = i.clk_y));
                var g = 1,
                    b = 2;
                c.forceSync ? u() : setTimeout(u, 10);
                var x, y, T, k = 50,
                    w = E.parseXML || function(e, t) {
                        return window.ActiveXObject ? ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                    },
                    s = E.parseJSON || function(e) {
                        return window.eval("(" + e + ")")
                    },
                    j = function(e, t, r) {
                        var a = e.getResponseHeader("content-type") || "",
                            n = "xml" === t || !t && 0 <= a.indexOf("xml"),
                            i = n ? e.responseXML : e.responseText;
                        return n && "parsererror" === i.documentElement.nodeName && E.error && E.error("parsererror"), r && r.dataFilter && (i = r.dataFilter(i, t)), "string" == typeof i && ("json" === t || !t && 0 <= a.indexOf("json") ? i = s(i) : ("script" === t || !t && 0 <= a.indexOf("javascript")) && E.globalEval(i)), i
                    }
            }

            function S(e) {
                return e.contentWindow ? e.contentWindow.document : e.contentDocument ? e.contentDocument : e.document
            }

            function u() {
                var e = D.attr("target"),
                    t = D.attr("action");
                i.setAttribute("target", n), A || i.setAttribute("method", "POST"), t != c.url && i.setAttribute("action", c.url), c.skipEncodingOverride || A && !/post/i.test(A) || D.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), c.timeout && (v = setTimeout(function() {
                    h = !0, L(g)
                }, c.timeout));
                var r = [];
                try {
                    if (c.extraData)
                        for (var a in c.extraData) r.push(E('<input type="hidden" name="' + a + '" />').val(c.extraData[a]).appendTo(i)[0]);
                    c.iframeTarget || (m.appendTo("body"), d.attachEvent ? d.attachEvent("onload", L) : d.addEventListener("load", L, !1)), setTimeout(function e() {
                        try {
                            var t = S(d).readyState;
                            M("state = " + t), "uninitialized" == t.toLowerCase() && setTimeout(e, 50)
                        } catch (e) {
                            M("Server abort: ", e, " (", e.name, ")"), L(b), v && clearTimeout(v), v = void 0
                        }
                    }, 15), i.submit()
                } finally {
                    i.setAttribute("action", t), e ? i.setAttribute("target", e) : D.removeAttr("target"), E(r).remove()
                }
            }

            function L(t) {
                if (!p.aborted && !T) {
                    try {
                        y = S(d)
                    } catch (e) {
                        M("cannot access response document: ", e), t = b
                    }
                    if (t === g && p) p.abort("timeout");
                    else if (t == b && p) p.abort("server abort");
                    else if (y && y.location.href != c.iframeSrc || h) {
                        d.detachEvent ? d.detachEvent("onload", L) : d.removeEventListener("load", L, !1);
                        var e, r = "success";
                        try {
                            if (h) throw "timeout";
                            var a = "xml" == c.dataType || y.XMLDocument || E.isXMLDoc(y);
                            if (M("isXml=" + a), !a && window.opera && (null == y.body || "" == y.body.innerHTML) && --k) return M("requeing onLoad callback, DOM not available"), void setTimeout(L, 250);
                            var n = y.body ? y.body : y.documentElement;
                            p.responseText = n ? n.innerHTML : null, p.responseXML = y.XMLDocument ? y.XMLDocument : y, a && (c.dataType = "xml"), p.getResponseHeader = function(e) {
                                return {
                                    "content-type": c.dataType
                                } [e]
                            }, n && (p.status = Number(n.getAttribute("status")) || p.status, p.statusText = n.getAttribute("statusText") || p.statusText);
                            var i = c.dataType || "",
                                o = /(json|script|text)/.test(i.toLowerCase());
                            if (o || c.textarea) {
                                var s = y.getElementsByTagName("textarea")[0];
                                if (s) p.responseText = s.value, p.status = Number(s.getAttribute("status")) || p.status, p.statusText = s.getAttribute("statusText") || p.statusText;
                                else if (o) {
                                    var u = y.getElementsByTagName("pre")[0],
                                        l = y.getElementsByTagName("body")[0];
                                    u ? p.responseText = u.textContent ? u.textContent : u.innerHTML : l && (p.responseText = l.innerHTML)
                                }
                            } else "xml" != c.dataType || p.responseXML || null == p.responseText || (p.responseXML = w(p.responseText));
                            try {
                                x = j(p, c.dataType, c)
                            } catch (t) {
                                r = "parsererror", p.error = e = t || r
                            }
                        } catch (t) {
                            M("error caught: ", t), r = "error", p.error = e = t || r
                        }
                        p.aborted && (M("upload aborted"), r = null), p.status && (r = 200 <= p.status && p.status < 300 || 304 === p.status ? "success" : "error"), "success" === r ? (c.success && c.success.call(c.context, x, "success", p), f && E.event.trigger("ajaxSuccess", [p, c])) : r && (null == e && (e = p.statusText), c.error && c.error.call(c.context, p, r, e), f && E.event.trigger("ajaxError", [p, c, e])), f && E.event.trigger("ajaxComplete", [p, c]), f && !--E.active && E.event.trigger("ajaxStop"), c.complete && c.complete.call(c.context, p, r), T = !0, c.timeout && clearTimeout(v), setTimeout(function() {
                            c.iframeTarget || m.remove(), p.responseXML = null
                        }, 100)
                    }
                }
            }
        }
    }, E.fn.ajaxForm = function(t) {
        if (0 === this.length) {
            var e = {
                s: this.selector,
                c: this.context
            };
            return !E.isReady && e.s ? (M("DOM not ready, queuing ajaxForm"), E(function() {
                E(e.s, e.c).ajaxForm(t)
            })) : M("terminating; zero elements found by selector" + (E.isReady ? "" : " (DOM not ready)")), this
        }
        return this.ajaxFormUnbind().bind("submit.form-plugin", function(e) {
            e.isDefaultPrevented() || (e.preventDefault(), E(this).ajaxSubmit(t))
        }).bind("click.form-plugin", function(e) {
            var t = e.target,
                r = E(t);
            if (!r.is(":submit,input:image")) {
                var a = r.closest(":submit");
                if (0 == a.length) return;
                t = a[0]
            }
            var n = this;
            if ("image" == (n.clk = t).type)
                if (null != e.offsetX) n.clk_x = e.offsetX, n.clk_y = e.offsetY;
                else if ("function" == typeof E.fn.offset) {
                var i = r.offset();
                n.clk_x = e.pageX - i.left, n.clk_y = e.pageY - i.top
            } else n.clk_x = e.pageX - t.offsetLeft, n.clk_y = e.pageY - t.offsetTop;
            setTimeout(function() {
                n.clk = n.clk_x = n.clk_y = null
            }, 100)
        })
    }, E.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, E.fn.formToArray = function(e) {
        var t = [];
        if (0 === this.length) return t;
        var r, a, n, i, o, s, u, l = this[0],
            c = e ? l.getElementsByTagName("*") : l.elements;
        if (!c) return t;
        for (r = 0, s = c.length; r < s; r++)
            if (n = (o = c[r]).name)
                if (e && l.clk && "image" == o.type) o.disabled || l.clk != o || (t.push({
                    name: n,
                    value: E(o).val()
                }), t.push({
                    name: n + ".x",
                    value: l.clk_x
                }, {
                    name: n + ".y",
                    value: l.clk_y
                }));
                else if ((i = E.fieldValue(o, !0)) && i.constructor == Array)
            for (a = 0, u = i.length; a < u; a++) t.push({
                name: n,
                value: i[a]
            });
        else null != i && t.push({
            name: n,
            value: i
        });
        if (!e && l.clk) {
            var f = E(l.clk),
                m = f[0];
            (n = m.name) && !m.disabled && "image" == m.type && (t.push({
                name: n,
                value: f.val()
            }), t.push({
                name: n + ".x",
                value: l.clk_x
            }, {
                name: n + ".y",
                value: l.clk_y
            }))
        }
        return t
    }, E.fn.formSerialize = function(e) {
        return E.param(this.formToArray(e))
    }, E.fn.fieldSerialize = function(n) {
        var i = [];
        return this.each(function() {
            var e = this.name;
            if (e) {
                var t = E.fieldValue(this, n);
                if (t && t.constructor == Array)
                    for (var r = 0, a = t.length; r < a; r++) i.push({
                        name: e,
                        value: t[r]
                    });
                else null != t && i.push({
                    name: this.name,
                    value: t
                })
            }
        }), E.param(i)
    }, E.fn.fieldValue = function(e) {
        for (var t = [], r = 0, a = this.length; r < a; r++) {
            var n = this[r],
                i = E.fieldValue(n, e);
            null == i || i.constructor == Array && !i.length || (i.constructor == Array ? E.merge(t, i) : t.push(i))
        }
        return t
    }, E.fieldValue = function(e, t) {
        var r = e.name,
            a = e.type,
            n = e.tagName.toLowerCase();
        if (void 0 === t && (t = !0), t && (!r || e.disabled || "reset" == a || "button" == a || ("checkbox" == a || "radio" == a) && !e.checked || ("submit" == a || "image" == a) && e.form && e.form.clk != e || "select" == n && -1 == e.selectedIndex)) return null;
        if ("select" == n) {
            var i = e.selectedIndex;
            if (i < 0) return null;
            for (var o = [], s = e.options, u = "select-one" == a, l = u ? i + 1 : s.length, c = u ? i : 0; c < l; c++) {
                var f = s[c];
                if (f.selected) {
                    var m = f.value;
                    if (m || (m = f.attributes && f.attributes.value && !f.attributes.value.specified ? f.text : f.value), u) return m;
                    o.push(m)
                }
            }
            return o
        }
        return E(e).val()
    }, E.fn.clearForm = function() {
        return this.each(function() {
            E("input,select,textarea", this).clearFields()
        })
    }, E.fn.clearFields = E.fn.clearInputs = function() {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var e = this.type,
                t = this.tagName.toLowerCase();
            r.test(e) || "textarea" == t ? this.value = "" : "checkbox" == e || "radio" == e ? this.checked = !1 : "select" == t && (this.selectedIndex = -1)
        })
    }, E.fn.resetForm = function() {
        return this.each(function() {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, E.fn.enable = function(e) {
        return void 0 === e && (e = !0), this.each(function() {
            this.disabled = !e
        })
    }, E.fn.selected = function(r) {
        return void 0 === r && (r = !0), this.each(function() {
            var e = this.type;
            if ("checkbox" == e || "radio" == e) this.checked = r;
            else if ("option" == this.tagName.toLowerCase()) {
                var t = E(this).parent("select");
                r && t[0] && "select-one" == t[0].type && t.find("option").selected(!1), this.selected = r
            }
        })
    }
}(jQuery);
! function(l) {
    l.extend(l.fn, {
        validate: function(t) {
            if (this.length) {
                var i = l.data(this[0], "validator");
                if (i) return i;
                if (this.prop("novalidate", "novalidate"), i = new l.validator(t, this[0]), l.data(this[0], "validator", i), i.settings.onsubmit) {
                    var e = this.find("input, button");
                    e.filter(".cancel").click(function() {
                        i.cancelSubmit = !0
                    }), i.settings.submitHandler && e.filter('[type="submit"]').click(function() {
                        i.submitButton = this
                    }), this.submit(function(t) {
                        function e() {
                            if (i.settings.submitHandler) {
                                if (i.submitButton) var t = l("<input type='hidden'/>").prop("name", i.submitButton.name).val(i.submitButton.value).appendTo(i.currentForm);
                                return i.settings.submitHandler.call(i, i.currentForm), i.submitButton && t.remove(), !1
                            }
                            return !0
                        }
                        return i.settings.debug && t.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, e()) : i.form() ? i.pendingRequest ? !(i.formSubmitted = !0) : e() : (i.focusInvalid(), !1)
                    })
                }
                return i
            }
            t && t.debug && window.console && console.warn("nothing selected, can't validate, returning nothing")
        },
        valid: function() {
            if (l(this[0]).is("form")) return this.validate().form();
            var t = !0,
                e = l(this[0].form).validate();
            return this.each(function() {
                t &= e.element(this)
            }), t
        },
        removeAttrs: function(t) {
            var i = {},
                s = this;
            return l.each(t.split(/\s/), function(t, e) {
                i[e] = s.val(), s.removeAttr(e)
            }), i
        },
        rules: function(t, e) {
            var i = this[0];
            if (t) {
                var s = l.data(i.form, "validator").settings,
                    n = s.rules,
                    r = l.validator.staticRules(i);
                switch (t) {
                    case "add":
                        l.extend(r, l.validator.normalizeRule(e)), n[i.name] = r, e.messages && (s.messages[i.name] = l.extend(s.messages[i.name], e.messages));
                        break;
                    case "remove":
                        if (!e) return delete n[i.name], r;
                        var a = {};
                        return l.each(e.split(/\s/), function(t, e) {
                            a[e] = r[e], delete r[e]
                        }), a
                }
            }
            var u = l.validator.normalizeRules(l.extend({}, l.validator.metadataRules(i), l.validator.classRules(i), l.validator.attributeRules(i), l.validator.staticRules(i)), i);
            if (u.required) {
                var o = u.required;
                delete u.required, u = l.extend({
                    required: o
                }, u)
            }
            return u
        }
    }), l.extend(l.expr[":"], {
        blank: function(t) {
            return !l.trim("" + t.value)
        },
        filled: function(t) {
            return !!l.trim("" + t.value)
        },
        unchecked: function(t) {
            return !t.checked
        }
    }), l.validator = function(t, e) {
        this.settings = l.extend(!0, {}, l.validator.defaults, t), this.currentForm = e, this.init()
    }, l.validator.format = function(i, t) {
        return 1 == arguments.length ? function() {
            var t = l.makeArray(arguments);
            return t.unshift(i), l.validator.format.apply(this, t)
        } : (2 < arguments.length && t.constructor != Array && (t = l.makeArray(arguments).slice(1)), t.constructor != Array && (t = [t]), l.each(t, function(t, e) {
            i = i.replace(new RegExp("\\{" + t + "\\}", "g"), e)
        }), i)
    }, l.extend(l.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: l([]),
            errorLabelContainer: l([]),
            onsubmit: !0,
            ignore: "",
            ignoreTitle: !1,
            onfocusin: function(t) {
                this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
            },
            onfocusout: function(t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function(t) {
                (t.name in this.submitted || t == this.lastElement) && this.element(t)
            },
            onclick: function(t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function(t, e, i) {
                "radio" === t.type ? this.findByName(t.name).addClass(e).removeClass(i) : l(t).addClass(e).removeClass(i)
            },
            unhighlight: function(t, e, i) {
                "radio" === t.type ? this.findByName(t.name).removeClass(e).addClass(i) : l(t).removeClass(e).addClass(i)
            }
        },
        setDefaults: function(t) {
            l.extend(l.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            accept: "Please enter a value with a valid extension.",
            maxlength: l.validator.format("Please enter no more than {0} characters."),
            minlength: l.validator.format("Please enter at least {0} characters."),
            rangelength: l.validator.format("Please enter a value between {0} and {1} characters long."),
            range: l.validator.format("Please enter a value between {0} and {1}."),
            max: l.validator.format("Please enter a value less than or equal to {0}."),
            min: l.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                this.labelContainer = l(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || l(this.currentForm), this.containers = l(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var s = this.groups = {};
                l.each(this.settings.groups, function(i, t) {
                    l.each(t.split(/\s/), function(t, e) {
                        s[e] = i
                    })
                });
                var i = this.settings.rules;

                function t(t) {
                    var e = l.data(this[0].form, "validator"),
                        i = "on" + t.type.replace(/^validate/, "");
                    e.settings[i] && e.settings[i].call(e, this[0])
                }
                l.each(i, function(t, e) {
                    i[t] = l.validator.normalizeRule(e)
                }), l(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", t).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", t), this.settings.invalidHandler && l(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.settings.beforeValidate && this.settings.beforeValidate(), this.checkForm(), l.extend(this.submitted, this.errorMap), this.invalid = l.extend({}, this.errorMap), this.valid() || l(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                return this.valid()
            },
            element: function(t) {
                t = this.validationTargetFor(this.clean(t)), this.lastElement = t, this.prepareElement(t), this.currentElements = l(t);
                var e = this.check(t);
                return e ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
            },
            showErrors: function(e) {
                if (e) {
                    for (var t in l.extend(this.errorMap, e), this.errorList = [], e) this.errorList.push({
                        message: e[t],
                        element: this.findByName(t)[0]
                    });
                    this.successList = l.grep(this.successList, function(t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                l.fn.resetForm && l(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(t) {
                var e = 0;
                for (var i in t) e++;
                return e
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    l(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {}
            },
            findLastActive: function() {
                var e = this.lastActive;
                return e && 1 == l.grep(this.errorList, function(t) {
                    return t.element.name == e.name
                }).length && e
            },
            elements: function() {
                var t = this,
                    e = {};
                return l(this.currentForm).find("input, select, textarea").not('[type="submit"], [type="reset"], [type="image"], [disabled]').not(this.settings.ignore).filter(function() {
                    return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in e || !t.objectLength(l(this).rules())) && (e[this.name] = !0)
                })
            },
            clean: function(t) {
                return l(t)[0]
            },
            errors: function() {
                return l(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext)
            },
            reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = l([]), this.toHide = l([]), this.currentElements = l([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(t) {
                this.reset(), this.toHide = this.errorsFor(t)
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var t = l(e).rules(),
                    i = !1;
                for (var s in t) {
                    var n = {
                        method: s,
                        parameters: t[s]
                    };
                    try {
                        var r = l.validator.methods[s].call(this, e.value.replace(/\r/g, ""), e, n.parameters);
                        if ("dependency-mismatch" == r) {
                            i = !0;
                            continue
                        }
                        if (i = !1, "pending" == r) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!r) return this.formatAndAdd(e, n), !1
                    } catch (t) {
                        throw this.settings.debug && window.console && console.log("exception occured when checking element " + e.id + ", check the '" + n.method + "' method", t), t
                    }
                }
                if (!i) return this.objectLength(t) && this.successList.push(e), !0
            },
            customMetaMessage: function(t, e) {
                if (l.metadata) {
                    var i = this.settings.meta ? l(t).metadata()[this.settings.meta] : l(t).metadata();
                    return i && i.messages && i.messages[e]
                }
            },
            customMessage: function(t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor == String ? i : i[e])
            },
            findDefined: function() {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t]) return arguments[t]
            },
            defaultMessage: function(t, e) {
                return this.findDefined(this.customMessage(t.name, e), this.customMetaMessage(t, e), !this.settings.ignoreTitle && t.title || void 0, l.validator.messages[e], "<strong>Warning: No message defined for " + t.name + "</strong>")
            },
            formatAndAdd: function(t, e) {
                var i = this.defaultMessage(t, e.method),
                    s = /\$?\{(\d+)\}/g;
                "function" == typeof i ? i = i.call(this, e.parameters, t) : s.test(i) && (i = jQuery.format(i.replace(s, "{$1}"), e.parameters)), this.errorList.push({
                    message: i,
                    element: t
                }), this.errorMap[t.name] = i, this.submitted[t.name] = i
            },
            addWrapper: function(t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            },
            defaultShowErrors: function() {
                for (var t = 0; this.errorList[t]; t++) {
                    var e = this.errorList[t];
                    this.settings.highlight && this.settings.highlight.call(this, e.element, this.settings.errorClass, this.settings.validClass), this.showLabel(e.element, e.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                if (this.settings.unhighlight) {
                    t = 0;
                    for (var i = this.validElements(); i[t]; t++) this.settings.unhighlight.call(this, i[t], this.settings.errorClass, this.settings.validClass)
                }
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return l(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, e) {
                var i = this.errorsFor(t);
                i.length ? (i.removeClass(this.settings.validClass).addClass(this.settings.errorClass), i.attr("generated") && i.html(e)) : (i = l("<" + this.settings.errorElement + "/>").attr({
                    for: this.idOrName(t),
                    generated: !0
                }).addClass(this.settings.errorClass).html(e || ""), this.settings.wrapper && (i = i.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(i).length || (this.settings.errorPlacement ? this.settings.errorPlacement(i, l(t)) : i.insertAfter(t))), !e && this.settings.success && (i.text(""), "string" == typeof this.settings.success ? i.addClass(this.settings.success) : this.settings.success(i)), this.toShow = this.toShow.add(i)
            },
            errorsFor: function(t) {
                var e = this.idOrName(t);
                return this.errors().filter(function() {
                    return l(this).prop("for") == e
                })
            },
            idOrName: function(t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
            },
            checkable: function(t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function(i) {
                var s = this.currentForm;
                return l(document.getElementsByName(i)).map(function(t, e) {
                    return e.form == s && e.name == i && e || null
                })
            },
            getLength: function(t, e) {
                switch (e.nodeName.toLowerCase()) {
                    case "select":
                        return l("option:selected", e).length;
                    case "input":
                        if (this.checkable(e)) return this.findByName(e.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(t, e) {
                return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
            },
            dependTypes: {
                boolean: function(t, e) {
                    return t
                },
                string: function(t, e) {
                    return !!l(t, e.form).length
                },
                function: function(t, e) {
                    return t(e)
                }
            },
            optional: function(t) {
                return !l.validator.methods.required.call(this, l.trim(t.value), t) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
            },
            stopRequest: function(t, e) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e && 0 == this.pendingRequest && this.formSubmitted && this.form() ? (l(this.currentForm).submit(), this.formSubmitted = !1) : !e && 0 == this.pendingRequest && this.formSubmitted && (l(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(t) {
                return l.data(t, "previousValue") || l.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            dateDE: {
                dateDE: !0
            },
            number: {
                number: !0
            },
            numberDE: {
                numberDE: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, e) {
            t.constructor == String ? this.classRuleSettings[t] = e : l.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var e = {},
                i = l(t).attr("class");
            return i && l.each(i.split(" "), function() {
                this in l.validator.classRuleSettings && l.extend(e, l.validator.classRuleSettings[this])
            }), e
        },
        attributeRules: function(t) {
            var e = {},
                i = l(t);
            for (var s in l.validator.methods) {
                var n = i.prop(s);
                n ? e[s] = n : i[0].getAttribute("type") === s && (e[s] = !0)
            }
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
        },
        metadataRules: function(t) {
            if (!l.metadata) return {};
            var e = l.data(t.form, "validator").settings.meta;
            return e ? l(t).metadata()[e] : l(t).metadata()
        },
        staticRules: function(t) {
            var e = {},
                i = l.data(t.form, "validator");
            return i.settings.rules && (e = l.validator.normalizeRule(i.settings.rules[t.name]) || {}), e
        },
        normalizeRules: function(s, n) {
            return l.each(s, function(t, e) {
                if (!1 !== e) {
                    if (e.param || e.depends) {
                        var i = !0;
                        switch (typeof e.depends) {
                            case "string":
                                i = !!l(e.depends, n.form).length;
                                break;
                            case "function":
                                i = e.depends.call(n, n)
                        }
                        i ? s[t] = void 0 === e.param || e.param : delete s[t]
                    }
                } else delete s[t]
            }), l.each(s, function(t, e) {
                s[t] = l.isFunction(e) ? e(n) : e
            }), l.each(["minlength", "maxlength", "min", "max"], function() {
                s[this] && (s[this] = Number(s[this]))
            }), l.each(["rangelength", "range"], function() {
                s[this] && (s[this] = [Number(s[this][0]), Number(s[this][1])])
            }), l.validator.autoCreateRanges && (s.min && s.max && (s.range = [s.min, s.max], delete s.min, delete s.max), s.minlength && s.maxlength && (s.rangelength = [s.minlength, s.maxlength], delete s.minlength, delete s.maxlength)), s.messages && delete s.messages, s
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var e = {};
                l.each(t.split(/\s/), function() {
                    e[this] = !0
                }), t = e
            }
            return t
        },
        addMethod: function(t, e, i) {
            l.validator.methods[t] = e, l.validator.messages[t] = null != i ? i : l.validator.messages[t], e.length < 3 && l.validator.addClassRules(t, l.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, e, i) {
                if (!this.depend(i, e)) return "dependency-mismatch";
                switch (e.nodeName.toLowerCase()) {
                    case "select":
                        var s = l(e).val();
                        return s && 0 < s.length;
                    case "input":
                        if (this.checkable(e)) return 0 < this.getLength(t, e);
                    default:
                        return 0 < l.trim(t).length
                }
            },
            remote: function(r, a, t) {
                if (this.optional(a)) return "dependency-mismatch";
                var u = this.previousValue(a);
                if (this.settings.messages[a.name] || (this.settings.messages[a.name] = {}), u.originalMessage = this.settings.messages[a.name].remote, this.settings.messages[a.name].remote = u.message, t = "string" == typeof t && {
                        url: t
                    } || t, this.pending[a.name]) return "pending";
                if (u.old === r) return u.valid;
                u.old = r;
                var o = this;
                this.startRequest(a);
                var e = {};
                return e[a.name] = r, l.ajax(l.extend(!0, {
                    url: t,
                    mode: "abort",
                    port: "validate" + a.name,
                    dataType: "json",
                    data: e,
                    success: function(t) {
                        o.settings.messages[a.name].remote = u.originalMessage;
                        var e = !0 === t;
                        if (e) {
                            var i = o.formSubmitted;
                            o.prepareElement(a), o.formSubmitted = i, o.successList.push(a), o.showErrors()
                        } else {
                            var s = {},
                                n = t || o.defaultMessage(a, "remote");
                            s[a.name] = u.message = l.isFunction(n) ? n(r) : n, o.showErrors(s)
                        }
                        u.valid = e, o.stopRequest(a, e)
                    }
                }, t)), "pending"
            },
            minlength: function(t, e, i) {
                return this.optional(e) || this.getLength(l.trim(t), e) >= i
            },
            maxlength: function(t, e, i) {
                return this.optional(e) || this.getLength(l.trim(t), e) <= i
            },
            rangelength: function(t, e, i) {
                var s = this.getLength(l.trim(t), e);
                return this.optional(e) || s >= i[0] && s <= i[1]
            },
            min: function(t, e, i) {
                return this.optional(e) || i <= t
            },
            max: function(t, e, i) {
                return this.optional(e) || t <= i
            },
            range: function(t, e, i) {
                return this.optional(e) || t >= i[0] && t <= i[1]
            },
            email: function(t, e) {
                return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
            },
            url: function(t, e) {
                return this.optional(e) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
            },
            date: function(t, e) {
                return this.optional(e) || !/Invalid|NaN/.test(new Date(t))
            },
            dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(t)
            },
            number: function(t, e) {
                return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(t)
            },
            digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            creditcard: function(t, e) {
                if (this.optional(e)) return "dependency-mismatch";
                if (/[^0-9-]+/.test(t)) return !1;
                for (var i = 0, s = 0, n = !1, r = (t = t.replace(/\D/g, "")).length - 1; 0 <= r; r--) {
                    var a = t.charAt(r);
                    s = parseInt(a, 10);
                    n && 9 < (s *= 2) && (s -= 9), i += s, n = !n
                }
                return i % 10 == 0
            },
            accept: function(t, e, i) {
                return i = "string" == typeof i ? i.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(e) || t.match(new RegExp(".(" + i + ")$", "i"))
            },
            equalTo: function(t, e, i) {
                return t == l(i).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    l(e).valid()
                }).val()
            }
        }
    }), l.format = l.validator.format
}(jQuery),
function(s) {
    var n = {};
    if (s.ajaxPrefilter) s.ajaxPrefilter(function(t, e, i) {
        var s = t.port;
        "abort" == t.mode && (n[s] && n[s].abort(), n[s] = i)
    });
    else {
        var r = s.ajax;
        s.ajax = function(t) {
            var e = ("mode" in t ? t : s.ajaxSettings).mode,
                i = ("port" in t ? t : s.ajaxSettings).port;
            return "abort" == e ? (n[i] && n[i].abort(), n[i] = r.apply(this, arguments)) : r.apply(this, arguments)
        }
    }
}(jQuery),
function(n) {
    jQuery.event.special.focusin || jQuery.event.special.focusout || !document.addEventListener || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        function i(t) {
            return (t = n.event.fix(t)).type = e, n.event.dispatch.call(this, t)
        }
        n.event.special[e] = {
            setup: function() {
                this.addEventListener(t, i, !0)
            },
            teardown: function() {
                this.removeEventListener(t, i, !0)
            },
            handler: function(t) {
                return arguments[0] = n.event.fix(t), t.type = e, n.event.dispatch.apply(this, arguments)
            }
        }
    }), n.extend(n.fn, {
        validateDelegate: function(i, t, s) {
            return this.bind(t, function(t) {
                var e = n(t.target);
                if (e.is(i)) return s.apply(e, arguments)
            })
        }
    })
}(jQuery);
$.curCSS = function(t, e, n) {
        return jQuery(t).css(e, n)
    },
    function(o, t) {
        function u(t) {
            return !o(t).parents().addBack().filter(function() {
                return "hidden" === o.curCSS(this, "visibility") || o.expr.filters.hidden(this)
            }).length
        }
        o.ui = o.ui || {}, o.ui.version || (o.extend(o.ui, {
            version: "@VERSION",
            keyCode: {
                ALT: 18,
                BACKSPACE: 8,
                CAPS_LOCK: 20,
                COMMA: 188,
                COMMAND: 91,
                COMMAND_LEFT: 91,
                COMMAND_RIGHT: 93,
                CONTROL: 17,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                INSERT: 45,
                LEFT: 37,
                MENU: 93,
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
                SHIFT: 16,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                WINDOWS: 91
            }
        }), o.fn.extend({
            _focus: o.fn.focus,
            focus: function(e, n) {
                return "number" == typeof e ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        o(t).focus(), n && n.call(t)
                    }, e)
                }) : this._focus.apply(this, arguments)
            },
            scrollParent: function() {
                var t;
                return t = ustream.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(o.curCSS(this, "position", 1)) && /(auto|scroll)/.test(o.curCSS(this, "overflow", 1) + o.curCSS(this, "overflow-y", 1) + o.curCSS(this, "overflow-x", 1))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(o.curCSS(this, "overflow", 1) + o.curCSS(this, "overflow-y", 1) + o.curCSS(this, "overflow-x", 1))
                }).eq(0), /fixed/.test(this.css("position")) || !t.length ? o(document) : t
            },
            zIndex: function(t) {
                if (void 0 !== t) return this.css("zIndex", t);
                if (this.length)
                    for (var e, n, i = o(this[0]); i.length && i[0] !== document;) {
                        if (("absolute" === (e = i.css("position")) || "relative" === e || "fixed" === e) && (n = parseInt(i.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                        i = i.parent()
                    }
                return 0
            },
            disableSelection: function() {
                return this.bind((o.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
                    t.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        }), o.extend(o.expr[":"], {
            data: o.expr.createPseudo ? o.expr.createPseudo(function(e) {
                return function(t) {
                    return !!o.data(t, e)
                }
            }) : function(t, e, n) {
                return !!o.data(t, n[3])
            },
            focusable: function(t) {
                var e = t.nodeName.toLowerCase(),
                    n = o.attr(t, "tabindex");
                if ("area" === e) {
                    var i, r = t.parentNode,
                        s = r.name;
                    return !(!t.href || !s || "map" !== r.nodeName.toLowerCase()) && (!!(i = o("img[usemap=#" + s + "]")[0]) && u(i))
                }
                return (/input|select|textarea|button|object/.test(e) ? !t.disabled : "a" == e && t.href || !isNaN(n)) && u(t)
            },
            tabbable: function(t) {
                var e = o.attr(t, "tabindex");
                return (isNaN(e) || 0 <= e) && o(t).is(":focusable")
            }
        }), o(function() {
            var t = document.body,
                e = t.appendChild(e = document.createElement("div"));
            o.extend(e.style, {
                minHeight: "100px",
                height: "auto",
                padding: 0,
                borderWidth: 0
            }), o.support.minHeight = 100 === e.offsetHeight, o.support.selectstart = "onselectstart" in e, t.removeChild(e).style.display = "none"
        }), o.extend(o.ui, {
            plugin: {
                add: function(t, e, n) {
                    var i = o.ui[t].prototype;
                    for (var r in n) i.plugins[r] = i.plugins[r] || [], i.plugins[r].push([e, n[r]])
                },
                call: function(t, e, n) {
                    var i = t.plugins[e];
                    if (i && t.element[0].parentNode)
                        for (var r = 0; r < i.length; r++) t.options[i[r][0]] && i[r][1].apply(t.element, n)
                }
            },
            contains: function(t, e) {
                return document.compareDocumentPosition ? 16 & t.compareDocumentPosition(e) : t !== e && t.contains(e)
            },
            hasScroll: function(t, e) {
                if ("hidden" === o(t).css("overflow")) return !1;
                var n, i = e && "left" === e ? "scrollLeft" : "scrollTop";
                return 0 < t[i] || (t[i] = 1, n = 0 < t[i], t[i] = 0, n)
            },
            isOverAxis: function(t, e, n) {
                return e < t && t < e + n
            },
            isOver: function(t, e, n, i, r, s) {
                return o.ui.isOverAxis(t, n, r) && o.ui.isOverAxis(e, i, s)
            }
        }))
    }(jQuery);
jQuery.effects || function(l, i) {
    function a(e) {
        var t;
        return e && e.constructor == Array && 3 == e.length ? e : (t = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(e)) ? [parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3], 10)] : (t = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(e)) ? [2.55 * parseFloat(t[1]), 2.55 * parseFloat(t[2]), 2.55 * parseFloat(t[3])] : (t = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : (t = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(e)) ? [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)] : (t = /rgba\(0, 0, 0, 0\)/.exec(e)) ? n.transparent : n[l.trim(e).toLowerCase()]
    }
    l.effects = {}, l.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function(e, t) {
        l.fx.step[t] = function(e) {
            e.colorInit || (e.start = function(e, t) {
                var n;
                do {
                    if ("" != (n = l.curCSS(e, t)) && "transparent" != n || l.nodeName(e, "body")) break;
                    t = "backgroundColor"
                } while (e = e.parentNode);
                return a(n)
            }(e.elem, t), e.end = a(e.end), e.colorInit = !0), e.elem.style[t] = "rgb(" + Math.max(Math.min(parseInt(e.pos * (e.end[0] - e.start[0]) + e.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[1] - e.start[1]) + e.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[2] - e.start[2]) + e.start[2], 10), 255), 0) + ")"
        }
    });
    var n = {
            aqua: [0, 255, 255],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            black: [0, 0, 0],
            blue: [0, 0, 255],
            brown: [165, 42, 42],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgrey: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkviolet: [148, 0, 211],
            fuchsia: [255, 0, 255],
            gold: [255, 215, 0],
            green: [0, 128, 0],
            indigo: [75, 0, 130],
            khaki: [240, 230, 140],
            lightblue: [173, 216, 230],
            lightcyan: [224, 255, 255],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            navy: [0, 0, 128],
            olive: [128, 128, 0],
            orange: [255, 165, 0],
            pink: [255, 192, 203],
            purple: [128, 0, 128],
            violet: [128, 0, 128],
            red: [255, 0, 0],
            silver: [192, 192, 192],
            white: [255, 255, 255],
            yellow: [255, 255, 0],
            transparent: [255, 255, 255]
        },
        h = ["add", "remove", "toggle"],
        r = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };

    function p() {
        var e, t = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
            n = {};
        if (t && t.length && t[0] && t[t[0]])
            for (var a = t.length; a--;) "string" == typeof t[e = t[a]] && (n[e.replace(/\-(\w)/g, function(e, t) {
                return t.toUpperCase()
            })] = t[e]);
        else
            for (e in t) "string" == typeof t[e] && (n[e] = t[e]);
        return n
    }

    function d(e) {
        var t, n;
        for (t in e)(null == (n = e[t]) || l.isFunction(n) || t in r || /scrollbar/.test(t) || !/color/i.test(t) && isNaN(parseFloat(n))) && delete e[t];
        return e
    }

    function u(e, t, n, a) {
        return "object" == typeof e && (a = t, n = null, e = (t = e).effect), l.isFunction(t) && (a = t, n = null, t = {}), ("number" == typeof t || l.fx.speeds[t]) && (a = n, n = t, t = {}), l.isFunction(n) && (a = n, n = null), t = t || {}, n = n || t.duration, [e, t, n = l.fx.off ? 0 : "number" == typeof n ? n : n in l.fx.speeds ? l.fx.speeds[n] : l.fx.speeds._default, a = a || t.complete]
    }

    function s(e) {
        return !(e && "number" != typeof e && !l.fx.speeds[e]) || "string" == typeof e && !l.effects[e]
    }
    l.effects.animateClass = function(o, u, c, f) {
        return l.isFunction(c) && (f = c, c = null), this.queue("fx", function() {
            var e, n = l(this),
                t = n.attr("style") || " ",
                a = d(p.call(this)),
                r = n.attr("className");
            l.each(h, function(e, t) {
                o[t] && n[t + "Class"](o[t])
            }), e = d(p.call(this)), n.attr("className", r), n.animate(function(e, t) {
                var n, a = {
                    _: 0
                };
                for (n in t) e[n] != t[n] && (a[n] = t[n]);
                return a
            }(a, e), u, c, function() {
                l.each(h, function(e, t) {
                    o[t] && n[t + "Class"](o[t])
                }), "object" == typeof n.attr("style") ? (n.attr("style").cssText = "", n.attr("style").cssText = t) : n.attr("style", t), f && f.apply(this, arguments)
            });
            var s = l.queue(this),
                i = s.splice(s.length - 1, 1)[0];
            s.splice(1, 0, i), l.dequeue(this)
        })
    }, l.fn.extend({
        _addClass: l.fn.addClass,
        addClass: function(e, t, n, a) {
            return t ? l.effects.animateClass.apply(this, [{
                add: e
            }, t, n, a]) : this._addClass(e)
        },
        _removeClass: l.fn.removeClass,
        removeClass: function(e, t, n, a) {
            return t ? l.effects.animateClass.apply(this, [{
                remove: e
            }, t, n, a]) : this._removeClass(e)
        },
        _toggleClass: l.fn.toggleClass,
        toggleClass: function(e, t, n, a, r) {
            return "boolean" == typeof t || t === i ? n ? l.effects.animateClass.apply(this, [t ? {
                add: e
            } : {
                remove: e
            }, n, a, r]) : this._toggleClass(e, t) : l.effects.animateClass.apply(this, [{
                toggle: e
            }, t, n, a])
        },
        switchClass: function(e, t, n, a, r) {
            return l.effects.animateClass.apply(this, [{
                add: t,
                remove: e
            }, n, a, r])
        }
    }), l.extend(l.effects, {
        version: "1.8.10",
        save: function(e, t) {
            for (var n = 0; n < t.length; n++) null !== t[n] && e.data("ec.storage." + t[n], e[0].style[t[n]])
        },
        restore: function(e, t) {
            for (var n = 0; n < t.length; n++) null !== t[n] && e.css(t[n], e.data("ec.storage." + t[n]))
        },
        setMode: function(e, t) {
            return "toggle" == t && (t = e.is(":hidden") ? "show" : "hide"), t
        },
        getBaseline: function(e, t) {
            var n, a;
            switch (e[0]) {
                case "top":
                    n = 0;
                    break;
                case "middle":
                    n = .5;
                    break;
                case "bottom":
                    n = 1;
                    break;
                default:
                    n = e[0] / t.height
            }
            switch (e[1]) {
                case "left":
                    a = 0;
                    break;
                case "center":
                    a = .5;
                    break;
                case "right":
                    a = 1;
                    break;
                default:
                    a = e[1] / t.width
            }
            return {
                x: a,
                y: n
            }
        },
        createWrapper: function(n) {
            if (n.parent().is(".ui-effects-wrapper")) return n.parent();
            var a = {
                    width: n.outerWidth(!0),
                    height: n.outerHeight(!0),
                    float: n.css("float")
                },
                e = l("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                });
            return n.wrap(e), e = n.parent(), "static" == n.css("position") ? (e.css({
                position: "relative"
            }), n.css({
                position: "relative"
            })) : (l.extend(a, {
                position: n.css("position"),
                zIndex: n.css("z-index")
            }), l.each(["top", "left", "bottom", "right"], function(e, t) {
                a[t] = n.css(t), isNaN(parseInt(a[t], 10)) && (a[t] = "auto")
            }), n.css({
                position: "relative",
                top: 0,
                left: 0,
                right: "auto",
                bottom: "auto"
            })), e.css(a).show()
        },
        removeWrapper: function(e) {
            return e.parent().is(".ui-effects-wrapper") ? e.parent().replaceWith(e) : e
        },
        setTransition: function(n, e, a, r) {
            return r = r || {}, l.each(e, function(e, t) {
                unit = n.cssUnit(t), 0 < unit[0] && (r[t] = unit[0] * a + unit[1])
            }), r
        }
    }), l.fn.extend({
        effect: function(e, t, n, a) {
            var r = u.apply(this, arguments),
                s = {
                    options: r[1],
                    duration: r[2],
                    callback: r[3]
                },
                i = s.options.mode,
                o = l.effects[e];
            return l.fx.off || !o ? i ? this[i](s.duration, s.callback) : this.each(function() {
                s.callback && s.callback.call(this)
            }) : o.call(this, s)
        },
        _show: l.fn.show,
        show: function(e) {
            if (s(e)) return this._show.apply(this, arguments);
            var t = u.apply(this, arguments);
            return t[1].mode = "show", this.effect.apply(this, t)
        },
        _hide: l.fn.hide,
        hide: function(e) {
            if (s(e)) return this._hide.apply(this, arguments);
            var t = u.apply(this, arguments);
            return t[1].mode = "hide", this.effect.apply(this, t)
        },
        __toggle: l.fn.toggle,
        toggle: function(e) {
            if (s(e) || "boolean" == typeof e || l.isFunction(e)) return this.__toggle.apply(this, arguments);
            var t = u.apply(this, arguments);
            return t[1].mode = "toggle", this.effect.apply(this, t)
        },
        cssUnit: function(e) {
            var n = this.css(e),
                a = [];
            return l.each(["em", "px", "%", "pt"], function(e, t) {
                0 < n.indexOf(t) && (a = [parseFloat(n), t])
            }), a
        }
    }), l.easing.jswing = l.easing.swing, l.extend(l.easing, {
        def: "easeOutQuad",
        swing: function(e, t, n, a, r) {
            return l.easing[l.easing.def](e, t, n, a, r)
        },
        easeInQuad: function(e, t, n, a, r) {
            return a * (t /= r) * t + n
        },
        easeOutQuad: function(e, t, n, a, r) {
            return -a * (t /= r) * (t - 2) + n
        },
        easeInOutQuad: function(e, t, n, a, r) {
            return (t /= r / 2) < 1 ? a / 2 * t * t + n : -a / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function(e, t, n, a, r) {
            return a * (t /= r) * t * t + n
        },
        easeOutCubic: function(e, t, n, a, r) {
            return a * ((t = t / r - 1) * t * t + 1) + n
        },
        easeInOutCubic: function(e, t, n, a, r) {
            return (t /= r / 2) < 1 ? a / 2 * t * t * t + n : a / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function(e, t, n, a, r) {
            return a * (t /= r) * t * t * t + n
        },
        easeOutQuart: function(e, t, n, a, r) {
            return -a * ((t = t / r - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function(e, t, n, a, r) {
            return (t /= r / 2) < 1 ? a / 2 * t * t * t * t + n : -a / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function(e, t, n, a, r) {
            return a * (t /= r) * t * t * t * t + n
        },
        easeOutQuint: function(e, t, n, a, r) {
            return a * ((t = t / r - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function(e, t, n, a, r) {
            return (t /= r / 2) < 1 ? a / 2 * t * t * t * t * t + n : a / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function(e, t, n, a, r) {
            return -a * Math.cos(t / r * (Math.PI / 2)) + a + n
        },
        easeOutSine: function(e, t, n, a, r) {
            return a * Math.sin(t / r * (Math.PI / 2)) + n
        },
        easeInOutSine: function(e, t, n, a, r) {
            return -a / 2 * (Math.cos(Math.PI * t / r) - 1) + n
        },
        easeInExpo: function(e, t, n, a, r) {
            return 0 == t ? n : a * Math.pow(2, 10 * (t / r - 1)) + n
        },
        easeOutExpo: function(e, t, n, a, r) {
            return t == r ? n + a : a * (1 - Math.pow(2, -10 * t / r)) + n
        },
        easeInOutExpo: function(e, t, n, a, r) {
            return 0 == t ? n : t == r ? n + a : (t /= r / 2) < 1 ? a / 2 * Math.pow(2, 10 * (t - 1)) + n : a / 2 * (2 - Math.pow(2, -10 * --t)) + n
        },
        easeInCirc: function(e, t, n, a, r) {
            return -a * (Math.sqrt(1 - (t /= r) * t) - 1) + n
        },
        easeOutCirc: function(e, t, n, a, r) {
            return a * Math.sqrt(1 - (t = t / r - 1) * t) + n
        },
        easeInOutCirc: function(e, t, n, a, r) {
            return (t /= r / 2) < 1 ? -a / 2 * (Math.sqrt(1 - t * t) - 1) + n : a / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function(e, t, n, a, r) {
            var s = 1.70158,
                i = 0,
                o = a;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + a;
            if (i || (i = .3 * r), o < Math.abs(a)) {
                o = a;
                s = i / 4
            } else s = i / (2 * Math.PI) * Math.asin(a / o);
            return -o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - s) * (2 * Math.PI) / i) + n
        },
        easeOutElastic: function(e, t, n, a, r) {
            var s = 1.70158,
                i = 0,
                o = a;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + a;
            if (i || (i = .3 * r), o < Math.abs(a)) {
                o = a;
                s = i / 4
            } else s = i / (2 * Math.PI) * Math.asin(a / o);
            return o * Math.pow(2, -10 * t) * Math.sin((t * r - s) * (2 * Math.PI) / i) + a + n
        },
        easeInOutElastic: function(e, t, n, a, r) {
            var s = 1.70158,
                i = 0,
                o = a;
            if (0 == t) return n;
            if (2 == (t /= r / 2)) return n + a;
            if (i || (i = r * (.3 * 1.5)), o < Math.abs(a)) {
                o = a;
                s = i / 4
            } else s = i / (2 * Math.PI) * Math.asin(a / o);
            return t < 1 ? o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - s) * (2 * Math.PI) / i) * -.5 + n : o * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - s) * (2 * Math.PI) / i) * .5 + a + n
        },
        easeInBack: function(e, t, n, a, r, s) {
            return s == i && (s = 1.70158), a * (t /= r) * t * ((s + 1) * t - s) + n
        },
        easeOutBack: function(e, t, n, a, r, s) {
            return s == i && (s = 1.70158), a * ((t = t / r - 1) * t * ((s + 1) * t + s) + 1) + n
        },
        easeInOutBack: function(e, t, n, a, r, s) {
            return s == i && (s = 1.70158), (t /= r / 2) < 1 ? a / 2 * (t * t * ((1 + (s *= 1.525)) * t - s)) + n : a / 2 * ((t -= 2) * t * ((1 + (s *= 1.525)) * t + s) + 2) + n
        },
        easeInBounce: function(e, t, n, a, r) {
            return a - l.easing.easeOutBounce(e, r - t, 0, a, r) + n
        },
        easeOutBounce: function(e, t, n, a, r) {
            return (t /= r) < 1 / 2.75 ? a * (7.5625 * t * t) + n : t < 2 / 2.75 ? a * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? a * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : a * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function(e, t, n, a, r) {
            return t < r / 2 ? .5 * l.easing.easeInBounce(e, 2 * t, 0, a, r) + n : .5 * l.easing.easeOutBounce(e, 2 * t - r, 0, a, r) + .5 * a + n
        }
    })
}(jQuery);
! function(r, o) {
    if (r.cleanData) {
        var n = r.cleanData;
        r.cleanData = function(t) {
            for (var e, i = 0; null != (e = t[i]); i++) r(e).triggerHandler("remove");
            n(t)
        }
    } else {
        var i = r.fn.remove;
        r.fn.remove = function(t, e) {
            return this.each(function() {
                return e || t && !r.filter(t, [this]).length || r("*", this).add([this]).each(function() {
                    r(this).triggerHandler("remove")
                }), i.call(r(this), t, e)
            })
        }
    }
    r.widget = function(e, t, i) {
        var n, s = e.split(".")[0];
        n = s + "-" + (e = e.split(".")[1]), i || (i = t, t = r.Widget), r.expr[":"][n] = function(t) {
            return !!r.data(t, e)
        }, r[s] = r[s] || {}, r[s][e] = function(t, e) {
            arguments.length && this._createWidget(t, e)
        };
        var a = new t;
        a.options = r.extend(!0, {}, a.options), r[s][e].prototype = r.extend(!0, a, {
            namespace: s,
            widgetName: e,
            widgetEventPrefix: r[s][e].prototype.widgetEventPrefix || e,
            widgetBaseClass: n
        }, i), r.widget.bridge(e, r[s][e])
    }, r.widget.bridge = function(a, e) {
        r.fn[a] = function(i) {
            var t = "string" == typeof i,
                n = Array.prototype.slice.call(arguments, 1),
                s = this;
            return i = !t && n.length ? r.extend.apply(null, [!0, i].concat(n)) : i, t && "_" === i.charAt(0) || (t ? this.each(function() {
                var t = r.data(this, a),
                    e = t && r.isFunction(t[i]) ? t[i].apply(t, n) : t;
                if (e !== t && e !== o) return s = e, !1
            }) : this.each(function() {
                var t = r.data(this, a);
                t ? t.option(i || {})._init() : r.data(this, a, new e(i, this))
            })), s
        }
    }, r.Widget = function(t, e) {
        arguments.length && this._createWidget(t, e)
    }, r.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function(t, e) {
            r.data(e, this.widgetName, this), this.element = r(e), this.options = r.extend(!0, {}, this.options, this._getCreateOptions(), t);
            var i = this;
            this.element.bind("remove." + this.widgetName, function() {
                i.destroy()
            }), this._create(), this._trigger("create"), this._init()
        },
        _getCreateOptions: function() {
            return r.metadata && r.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function() {},
        _init: function() {},
        destroy: function() {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function() {
            return this.element
        },
        option: function(t, e) {
            var i = t;
            if (0 === arguments.length) return r.extend({}, this.options);
            if ("string" == typeof t) {
                if (e === o) return this.options[t];
                (i = {})[t] = e
            }
            return this._setOptions(i), this
        },
        _setOptions: function(t) {
            var i = this;
            return r.each(t, function(t, e) {
                i._setOption(t, e)
            }), this
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && this.widget()[e ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", e), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _trigger: function(t, e, i) {
            var n = this.options[t];
            if ((e = r.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i = i || {}, e.originalEvent)
                for (var s, a = r.event.props.length; a;) e[s = r.event.props[--a]] = e.originalEvent[s];
            return this.element.trigger(e, i), !(r.isFunction(n) && !1 === n.call(this.element[0], e, i) || e.isDefaultPrevented())
        }
    }
}(jQuery);
! function(m, t) {
    m.ui = m.ui || {};
    var o = /left|center|right/,
        i = /top|center|bottom/,
        n = m.fn.position,
        l = m.fn.offset;
    m.fn.position = function(c) {
        if (!c || !c.of) return n.apply(this, arguments);
        c = m.extend({}, c);
        var h, a, p, t = m(c.of),
            e = t[0],
            u = (c.collision || "flip").split(" "),
            g = c.offset ? c.offset.split(" ") : [0, 0];
        return 9 === e.nodeType ? (h = t.width(), a = t.height(), p = {
            top: 0,
            left: 0
        }) : e.setTimeout ? (h = t.width(), a = t.height(), p = {
            top: t.scrollTop(),
            left: t.scrollLeft()
        }) : e.preventDefault ? (c.at = "left top", h = a = 0, p = {
            top: c.of.pageY,
            left: c.of.pageX
        }) : (h = t.outerWidth(), a = t.outerHeight(), p = t.offset()), m.each(["my", "at"], function() {
            var t = (c[this] || "").split(" ");
            1 === t.length && (t = o.test(t[0]) ? t.concat(["center"]) : i.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), t[0] = o.test(t[0]) ? t[0] : "center", t[1] = i.test(t[1]) ? t[1] : "center", c[this] = t
        }), 1 === u.length && (u[1] = u[0]), g[0] = parseInt(g[0], 10) || 0, 1 === g.length && (g[1] = g[0]), g[1] = parseInt(g[1], 10) || 0, "right" === c.at[0] ? p.left += h : "center" === c.at[0] && (p.left += h / 2), "bottom" === c.at[1] ? p.top += a : "center" === c.at[1] && (p.top += a / 2), p.left += g[0], p.top += g[1], this.each(function() {
            var o, t = m(this),
                i = t.outerWidth(),
                n = t.outerHeight(),
                e = parseInt(m.curCSS(this, "marginLeft", !0), 10) || 0,
                l = parseInt(m.curCSS(this, "marginTop", !0), 10) || 0,
                f = i + e + (parseInt(m.curCSS(this, "marginRight", !0), 10) || 0),
                s = n + l + (parseInt(m.curCSS(this, "marginBottom", !0), 10) || 0),
                r = m.extend({}, p);
            "right" === c.my[0] ? r.left -= i : "center" === c.my[0] && (r.left -= i / 2), "bottom" === c.my[1] ? r.top -= n : "center" === c.my[1] && (r.top -= n / 2), r.left = Math.round(r.left), r.top = Math.round(r.top), o = {
                left: r.left - e,
                top: r.top - l
            }, m.each(["left", "top"], function(t, e) {
                m.ui.position[u[t]] && m.ui.position[u[t]][e](r, {
                    targetWidth: h,
                    targetHeight: a,
                    elemWidth: i,
                    elemHeight: n,
                    collisionPosition: o,
                    collisionWidth: f,
                    collisionHeight: s,
                    offset: g,
                    my: c.my,
                    at: c.at
                })
            }), m.fn.bgiframe && t.bgiframe(), t.offset(m.extend(r, {
                using: c.using
            }))
        })
    }, m.ui.position = {
        fit: {
            left: function(t, e) {
                var o = m(window),
                    i = e.collisionPosition.left + e.collisionWidth - o.width() - o.scrollLeft();
                t.left = 0 < i ? t.left - i : Math.max(t.left - e.collisionPosition.left, t.left)
            },
            top: function(t, e) {
                var o = m(window),
                    i = e.collisionPosition.top + e.collisionHeight - o.height() - o.scrollTop();
                t.top = 0 < i ? t.top - i : Math.max(t.top - e.collisionPosition.top, t.top)
            }
        },
        flip: {
            left: function(t, e) {
                if ("center" !== e.at[0]) {
                    var o = m(window),
                        i = e.collisionPosition.left + e.collisionWidth - o.width() - o.scrollLeft(),
                        n = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        l = "left" === e.at[0] ? e.targetWidth : -e.targetWidth,
                        f = -2 * e.offset[0];
                    t.left += e.collisionPosition.left < 0 ? n + l + f : 0 < i ? n + l + f : 0
                }
            },
            top: function(t, e) {
                if ("center" !== e.at[1]) {
                    var o = m(window),
                        i = e.collisionPosition.top + e.collisionHeight - o.height() - o.scrollTop(),
                        n = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        l = "top" === e.at[1] ? e.targetHeight : -e.targetHeight,
                        f = -2 * e.offset[1];
                    t.top += e.collisionPosition.top < 0 ? n + l + f : 0 < i ? n + l + f : 0
                }
            }
        }
    }, m.offset.setOffset || (m.offset.setOffset = function(t, e) {
        /static/.test(m.curCSS(t, "position")) && (t.style.position = "relative");
        var o = m(t),
            i = o.offset(),
            n = parseInt(m.curCSS(t, "top", !0), 10) || 0,
            l = parseInt(m.curCSS(t, "left", !0), 10) || 0,
            f = {
                top: e.top - i.top + n,
                left: e.left - i.left + l
            };
        "using" in e ? e.using.call(t, f) : o.css(f)
    }, m.fn.offset = function(t) {
        var e = this[0];
        return e && e.ownerDocument ? t ? this.each(function() {
            m.offset.setOffset(this, t)
        }) : l.call(this) : null
    })
}(jQuery);
! function(l, i) {
    var d = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
        a = {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        n = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        };
    l.widget("ui.dialog", {
        options: {
            autoOpen: !0,
            buttons: {},
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: !1,
            maxWidth: !1,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            focusOnFirstInput: !0,
            justHide: !1,
            fixed: !1,
            position: {
                my: "center",
                at: "center",
                collision: "fit",
                using: function(i) {
                    var e = l(this).css(i).offset().top;
                    e < 0 && l(this).css("top", i.top - e)
                }
            },
            resizable: !0,
            show: null,
            stack: !0,
            title: "",
            width: 300,
            zIndex: 1e3
        },
        _create: function() {
            this.originalTitle = this.element.attr("title"), "string" != typeof this.originalTitle && (this.originalTitle = ""), this.options.title = this.options.title || this.originalTitle;
            var e = this,
                t = e.options,
                i = t.title || "&#160;",
                o = l.ui.dialog.getTitleId(e.element),
                s = (e.uiDialog = l("<div></div>")).appendTo(document.body).hide().addClass(d + t.dialogClass).css({
                    zIndex: t.zIndex
                }).attr("tabIndex", -1).css("outline", 0).bind("keydown.ui-dialog", function(i) {
                    t.closeOnEscape && i.keyCode && i.keyCode === l.ui.keyCode.ESCAPE && (e.close(i), i.preventDefault())
                }).attr({
                    role: "dialog",
                    "aria-labelledby": o
                }).mousedown(function(i) {
                    e.moveToTop(!1, i)
                }),
                a = (e.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(s), (e.uiDialogTitlebar = l("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(s)),
                n = l('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function() {
                    n.addClass("ui-state-hover")
                }, function() {
                    n.removeClass("ui-state-hover")
                }).focus(function() {
                    n.addClass("ui-state-focus")
                }).blur(function() {
                    n.removeClass("ui-state-focus")
                }).on("click", function(i) {
                    return e.close(i), !1
                }).appendTo(a);
            (e.uiDialogTitlebarCloseText = l("<span></span>")).addClass("ui-icon ui-icon-closethick").text(t.closeText).appendTo(n), l("<span></span>").addClass("ui-dialog-title").attr("id", o).html(i).prependTo(a);
            l.isFunction(t.beforeclose) && !l.isFunction(t.beforeClose) && (t.beforeClose = t.beforeclose), a.find("*").add(a).disableSelection(), t.draggable && l.fn.draggable && e._makeDraggable(), t.resizable && l.fn.resizable && e._makeResizable(), e._createButtons(t.buttons), e._isOpen = !1, l.fn.bgiframe && s.bgiframe(), t.justHide && s.css({
                visibility: "hidden"
            }).show()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        destroy: function() {
            var i = this;
            return i.overlay && i.overlay.destroy(), i.uiDialog.hide(), i.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), i.uiDialog.remove(), i.originalTitle && i.element.attr("title", i.originalTitle), i
        },
        widget: function() {
            return this.uiDialog
        },
        close: function(i) {
            var e, t, o = this;
            if (!1 !== o._trigger("beforeClose", i)) return o.overlay && o.overlay.destroy(), o.uiDialog.off("keydown.ui-dialog keypress.ui-dialog"), o._isOpen = !1, o.options.justHide ? (o.uiDialog.css({
                visibility: "hidden"
            }), o._trigger("close", i)) : o.options.hide ? o.uiDialog.hide(o.options.hide, function() {
                o._trigger("close", i)
            }) : (o.uiDialog.hide(), o._trigger("close", i)), l.ui.dialog.overlay.resize(), o.options.modal && (e = 0, l(".ui-dialog").each(function() {
                this !== o.uiDialog[0] && (t = l(this).css("z-index"), isNaN(t) || (e = Math.max(e, t)))
            }), l.ui.dialog.maxZ = e), l("body").is("#Broadcaster_Page_Console"), ustream && ustream.events && l.dispatch && 0 < l(".ui-dialog:hidden").length && l.dispatch("OVERLAYCLOSED"), o
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function(i, e) {
            var t, o = this,
                s = o.options;
            return s.modal && !i || !s.stack && !s.modal ? o._trigger("focus", e) : (s.zIndex > l.ui.dialog.maxZ && (l.ui.dialog.maxZ = s.zIndex), o.overlay && (l.ui.dialog.maxZ += 1, o.overlay.$el.css("z-index", l.ui.dialog.overlay.maxZ = l.ui.dialog.maxZ)), t = {
                scrollTop: o.element.attr("scrollTop"),
                scrollLeft: o.element.attr("scrollLeft")
            }, l.ui.dialog.maxZ += 1, o.uiDialog.css("z-index", l.ui.dialog.maxZ), o.element.attr(t), o._trigger("focus", e), o)
        },
        open: function() {
            if (!this._isOpen) {
                var i = this,
                    e = i.options,
                    t = i.uiDialog;
                return i.overlay = e.modal ? new l.ui.dialog.overlay(i) : null, i._size(), i._position(e.position), i._show(t), i.moveToTop(!0), i._setFixed(), e.modal && t.bind("keypress.ui-dialog", function(i) {
                    if (i.keyCode === l.ui.keyCode.TAB) {
                        var e = l(":tabbable", this),
                            t = e.filter(":first"),
                            o = e.filter(":last");
                        return i.target !== o[0] || i.shiftKey ? i.target === t[0] && i.shiftKey ? (o.focus(1), !1) : void 0 : (t.focus(1), !1)
                    }
                }), this.options.focusOnFirstInput && l(i.element.find(":tabbable").get().concat(t.find(".ui-dialog-buttonpane :tabbable").get().concat(t.get()))).eq(0).focus(), i._isOpen = !0, i._trigger("open"), ustream && ustream.events && l.dispatch && l.dispatch("OVERLAYOPENED"), i
            }
        },
        _show: function(i) {
            this.options.justHide ? i.css({
                visibility: "visible",
                overflow: "visible"
            }) : i.show(this.options.show)
        },
        _hide: function(i) {
            this.options.justHide ? i.css({
                visibility: "hide",
                overflow: "hidden"
            }) : i.hide()
        },
        _setFixed: function() {
            var i = this.uiDialog;
            this.options.fixed && (window.innerHeight < i.height() ? i.removeClass("fixed") : i.hasClass("fixed") || i.addClass("fixed"))
        },
        _createButtons: function(i) {
            var o = this,
                e = !1,
                t = l("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
                s = l("<div></div>").addClass("ui-dialog-buttonset").appendTo(t);
            o.uiDialog.find(".ui-dialog-buttonpane").remove(), "object" == typeof i && null !== i && l.each(i, function() {
                return !(e = !0)
            }), e && (l.each(i, function(i, e) {
                e = l.isFunction(e) ? {
                    click: e,
                    text: i
                } : e;
                var t = l('<button type="button"></button>').addClass(e.className ? e.className : "").text(e.text || "").off("click").on("click", function() {
                    e.click.apply(o.element[0], arguments)
                }).appendTo(s);
                l.fn.button && t.button()
            }), t.appendTo(o.uiDialog))
        },
        _makeDraggable: function() {
            var t, o = this,
                s = o.options,
                a = l(document);

            function n(i) {
                return {
                    position: i.position,
                    offset: i.offset
                }
            }
            o.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(i, e) {
                    t = "auto" === s.height ? "auto" : l(this).height(), l(this).height(l(this).height()).addClass("ui-dialog-dragging"), o._trigger("dragStart", i, n(e))
                },
                drag: function(i, e) {
                    o._trigger("drag", i, n(e))
                },
                stop: function(i, e) {
                    s.position = [e.position.left - a.scrollLeft(), e.position.top - a.scrollTop()], l(this).removeClass("ui-dialog-dragging").height(t), o._trigger("dragStop", i, n(e)), l.ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function(i) {
            i = void 0 === i ? this.options.resizable : i;
            var t = this,
                o = t.options,
                e = t.uiDialog.css("position"),
                s = "string" == typeof i ? i : "n,e,s,w,se,sw,ne,nw";

            function a(i) {
                return {
                    originalPosition: i.originalPosition,
                    originalSize: i.originalSize,
                    position: i.position,
                    size: i.size
                }
            }
            t.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: t.element,
                maxWidth: o.maxWidth,
                maxHeight: o.maxHeight,
                minWidth: o.minWidth,
                minHeight: t._minHeight(),
                handles: s,
                start: function(i, e) {
                    l(this).addClass("ui-dialog-resizing"), t._trigger("resizeStart", i, a(e))
                },
                resize: function(i, e) {
                    t._trigger("resize", i, a(e))
                },
                stop: function(i, e) {
                    l(this).removeClass("ui-dialog-resizing"), o.height = l(this).height(), o.width = l(this).width(), t._trigger("resizeStop", i, a(e)), l.ui.dialog.overlay.resize()
                }
            }).css("position", e).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function() {
            var i = this.options;
            return "auto" === i.height ? i.minHeight : Math.min(i.minHeight, i.height)
        },
        _position: function(i) {
            var e, t = [],
                o = [0, 0];
            i ? (("string" == typeof i || "object" == typeof i && "0" in i) && (1 === (t = i.split ? i.split(" ") : [i[0], i[1]]).length && (t[1] = t[0]), l.each(["left", "top"], function(i, e) {
                +t[i] === t[i] && (o[i] = t[i], t[i] = e)
            }), i = {
                my: t.join(" "),
                at: t.join(" "),
                offset: o.join(" ")
            }), i = l.extend({}, l.ui.dialog.prototype.options.position, i)) : i = l.ui.dialog.prototype.options.position, (e = this.uiDialog.is(":visible")) || this.uiDialog.show(), this.uiDialog.css({
                top: 0,
                left: 0
            }).position(l.extend({
                of: window
            }, i)), e || this._hide(this.uiDialog)
        },
        _setOptions: function(i) {
            var t = this,
                o = {},
                s = !1;
            l.each(i, function(i, e) {
                t._setOption(i, e), i in a && (s = !0), i in n && (o[i] = e)
            }), s && this._size(), this.uiDialog.is("[data-resizable]") && this.uiDialog.resizable("option", o)
        },
        _setOption: function(i, e) {
            var t = this,
                o = t.uiDialog;
            switch (i) {
                case "beforeclose":
                    i = "beforeClose";
                    break;
                case "buttons":
                    t._createButtons(e);
                    break;
                case "closeText":
                    t.uiDialogTitlebarCloseText.text("" + e);
                    break;
                case "dialogClass":
                    o.removeClass(t.options.dialogClass).addClass(d + e);
                    break;
                case "disabled":
                    e ? o.addClass("ui-dialog-disabled") : o.removeClass("ui-dialog-disabled");
                    break;
                case "draggable":
                    var s = o.is(":data(draggable)");
                    s && !e && o.draggable("destroy"), !s && e && t._makeDraggable();
                    break;
                case "position":
                    t._position(e);
                    break;
                case "resizable":
                    var a = o.is(":data(resizable)");
                    a && !e && o.resizable("destroy"), a && "string" == typeof e && o.resizable("option", "handles", e), a || !1 === e || t._makeResizable(e);
                    break;
                case "title":
                    l(".ui-dialog-title", t.uiDialogTitlebar).html("" + (e || "&#160;"))
            }
            l.Widget.prototype._setOption.apply(t, arguments)
        },
        _size: function() {
            var i, e, t = this.options,
                o = this.uiDialog.is(":visible");
            if (this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    height: 0
                }).hide(), t.minWidth > t.width && (t.width = t.minWidth), i = this.uiDialog.css({
                    height: "auto",
                    width: t.width
                }).height(), e = Math.max(0, t.minHeight - i), this.element.show(), "auto" === t.height)
                if (l.support.minHeight) this.element.css({
                    minHeight: e,
                    height: "auto"
                });
                else {
                    this.uiDialog.show();
                    var s = this.element.css("height", "auto").height();
                    o || this._hide(this.uiDialog), this.element.height(Math.max(s, e))
                }
            else this.element.height(Math.max(t.height - i, 0));
            this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }
    }), l.extend(l.ui.dialog, {
        version: "@VERSION",
        uuid: 0,
        maxZ: 0,
        getTitleId: function(i) {
            var e = i.attr("id");
            return e || (this.uuid += 1, e = this.uuid), "ui-dialog-title-" + e
        },
        overlay: function(i) {
            this.$el = l.ui.dialog.overlay.create(i)
        }
    }), l.extend(l.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: l.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(i) {
            return i + ".dialog-overlay"
        }).join(" "),
        create: function(e) {
            var i = (this.oldInstances.pop() || l("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
                width: this.width(),
                height: this.height()
            });
            return l.fn.bgiframe && i.bgiframe(), 0 === this.instances.length && (setTimeout(function() {
                l.ui.dialog.overlay.instances.length && i.bind(l.ui.dialog.overlay.events, function(i) {
                    if (l(i.target).zIndex() < l.ui.dialog.overlay.maxZ) return !1
                })
            }, 1), l(document).bind("keydown.dialog-overlay keypress.dialog-overlay focus.dialog-overlay", function(i) {
                if (l(i.target).closest(".ui-dialog").zIndex() < l.ui.dialog.overlay.maxZ && !l(i.target).closest(".allow-keys").length) return !1
            }), l(document).bind("keydown.dialog-overlay", function(i) {
                e.options.closeOnEscape && i.keyCode && i.keyCode === l.ui.keyCode.ESCAPE && (e.close(i), i.preventDefault())
            }), l(window).bind("resize.dialog-overlay", l.ui.dialog.overlay.resize)), this.instances.push(i), i
        },
        destroy: function(i) {
            var e = l.inArray(i, this.instances); - 1 != e && this.oldInstances.push(this.instances.splice(e, 1)[0]), 0 === this.instances.length && l([document, window]).unbind(".dialog-overlay"), i.remove();
            var t = 0;
            l.each(this.instances, function() {
                t = Math.max(t, this.css("z-index"))
            }), this.maxZ = t
        },
        height: function() {
            return l(document).height() + "px"
        },
        width: function() {
            return l(document).width() + "px"
        },
        resize: function() {
            var i = l([]);
            l.each(l.ui.dialog.overlay.instances, function() {
                i = i.add(this)
            }), i.css({
                width: 0,
                height: 0
            }).css({
                width: l.ui.dialog.overlay.width(),
                height: l.ui.dialog.overlay.height()
            })
        }
    }), l.extend(l.ui.dialog.overlay.prototype, {
        destroy: function() {
            l.ui.dialog.overlay.destroy(this.$el)
        }
    })
}(jQuery);
! function(o, e) {
    o.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(e) {
                if (!0 === o.data(e.target, t.widgetName + ".preventClickEvent")) return o.removeData(e.target, t.widgetName + ".preventClickEvent"), e.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName)
        },
        _mouseDown: function(e) {
            if (e.originalEvent = e.originalEvent || {}, !e.originalEvent.mouseHandled) {
                this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var t = this,
                    s = 1 == e.which,
                    i = "string" == typeof this.options.cancel && o(e.target).parents().add(e.target).filter(this.options.cancel).length;
                return !(s && !i && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    t.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (this._mouseMoveDelegate = function(e) {
                    return t._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                    return t._mouseUp(e)
                }, o(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), e.originalEvent.mouseHandled = !0))
            }
        },
        _mouseMove: function(e) {
            return !ustream.browser.msie || 9 <= document.documentMode || e.button ? this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted) : this._mouseUp(e)
        },
        _mouseUp: function(e) {
            return o(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target == this._mouseDownEvent.target && o.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function(e) {
            return this.mouseDelayMet
        },
        _mouseStart: function(e) {},
        _mouseDrag: function(e) {},
        _mouseStop: function(e) {},
        _mouseCapture: function(e) {
            return !0
        }
    })
}(jQuery);
! function(P, t) {
    P.widget("ui.draggable", P.ui.mouse, {
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function() {
            "original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        destroy: function() {
            if (this.element.data("draggable")) return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this
        },
        _mouseCapture: function(t) {
            var e = this.options;
            return !(this.helper || e.disabled || P(t.target).is(".ui-resizable-handle")) && (this.handle = this._getHandle(t), !!this.handle)
        },
        _mouseStart: function(t) {
            var e = this.options;
            return this.helper = this._createHelper(t), this._cacheHelperProportions(), P.ui.ddmanager && (P.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, P.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt), e.containment && this._setContainment(), !1 === this._trigger("start", t) ? (this._clear(), !1) : (this._cacheHelperProportions(), P.ui.ddmanager && !e.dropBehaviour && P.ui.ddmanager.prepareOffsets(this, t), this.helper.addClass("ui-draggable-dragging"), this._mouseDrag(t, !0), !0)
        },
        _mouseDrag: function(t, e) {
            if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !e) {
                var s = this._uiHash();
                if (!1 === this._trigger("drag", t, s)) return this._mouseUp({}), !1;
                this.position = s.position
            }
            return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), P.ui.ddmanager && P.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function(t) {
            var e = !1;
            if (P.ui.ddmanager && !this.options.dropBehaviour && (e = P.ui.ddmanager.drop(this, t)), this.dropped && (e = this.dropped, this.dropped = !1), !(this.element[0] && this.element[0].parentNode || "original" != this.options.helper)) return !1;
            if ("invalid" == this.options.revert && !e || "valid" == this.options.revert && e || !0 === this.options.revert || P.isFunction(this.options.revert) && this.options.revert.call(this.element, e)) {
                var s = this;
                P(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    !1 !== s._trigger("stop", t) && s._clear()
                })
            } else !1 !== this._trigger("stop", t) && this._clear();
            return !1
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(t) {
            var e = !this.options.handle || !P(this.options.handle, this.element).length;
            return P(this.options.handle, this.element).find("*").addBack().each(function() {
                this == t.target && (e = !0)
            }), e
        },
        _createHelper: function(t) {
            var e = this.options,
                s = P.isFunction(e.helper) ? P(e.helper.apply(this.element[0], [t])) : "clone" == e.helper ? this.element.clone() : this.element;
            return s.parents("body").length || s.appendTo("parent" == e.appendTo ? this.element[0].parentNode : e.appendTo), s[0] == this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")), P.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && P.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && ustream.browser.msie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" == this.cssPosition) {
                var t = this.element.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t = this.options;
            if ("parent" == t.containment && (t.containment = this.helper[0].parentNode), "document" != t.containment && "window" != t.containment || (this.containment = [("document" == t.containment ? 0 : P(window).scrollLeft()) - this.offset.relative.left - this.offset.parent.left, ("document" == t.containment ? 0 : P(window).scrollTop()) - this.offset.relative.top - this.offset.parent.top, ("document" == t.containment ? 0 : P(window).scrollLeft()) + P("document" == t.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == t.containment ? 0 : P(window).scrollTop()) + (P("document" == t.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(t.containment) || t.containment.constructor == Array) t.containment.constructor == Array && (this.containment = t.containment);
            else {
                var e = P(t.containment)[0];
                if (!e) return;
                var s = P(t.containment).offset(),
                    i = "hidden" != P(e).css("overflow");
                this.containment = [s.left + (parseInt(P(e).css("borderLeftWidth"), 10) || 0) + (parseInt(P(e).css("paddingLeft"), 10) || 0) - this.margins.left, s.top + (parseInt(P(e).css("borderTopWidth"), 10) || 0) + (parseInt(P(e).css("paddingTop"), 10) || 0) - this.margins.top, s.left + (i ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(P(e).css("borderLeftWidth"), 10) || 0) - (parseInt(P(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, s.top + (i ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(P(e).css("borderTopWidth"), 10) || 0) - (parseInt(P(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function(t, e) {
            e || (e = this.position);
            var s = "absolute" == t ? 1 : -1,
                i = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && P.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                o = /(html|body)/i.test(i[0].tagName);
            return {
                top: e.top + this.offset.relative.top * s + this.offset.parent.top * s - (ustream.browser.safari && ustream.browser.version < 526 && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : i.scrollTop()) * s),
                left: e.left + this.offset.relative.left * s + this.offset.parent.left * s - (ustream.browser.safari && ustream.browser.version < 526 && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : i.scrollLeft()) * s)
            }
        },
        _generatePosition: function(t) {
            var e = this.options,
                s = "absolute" != this.cssPosition || this.scrollParent[0] != document && P.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(s[0].tagName),
                o = t.pageX,
                n = t.pageY;
            if (this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (n = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (n = this.containment[3] + this.offset.click.top)), e.grid)) {
                var r = this.originalPageY + Math.round((n - this.originalPageY) / e.grid[1]) * e.grid[1];
                n = this.containment && (r - this.offset.click.top < this.containment[1] || r - this.offset.click.top > this.containment[3]) ? r - this.offset.click.top < this.containment[1] ? r + e.grid[1] : r - e.grid[1] : r;
                var a = this.originalPageX + Math.round((o - this.originalPageX) / e.grid[0]) * e.grid[0];
                o = this.containment && (a - this.offset.click.left < this.containment[0] || a - this.offset.click.left > this.containment[2]) ? a - this.offset.click.left < this.containment[0] ? a + e.grid[0] : a - e.grid[0] : a
            }
            return {
                top: n - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (ustream.browser.safari && ustream.browser.version < 526 && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : i ? 0 : s.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (ustream.browser.safari && ustream.browser.version < 526 && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : i ? 0 : s.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] == this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(t, e, s) {
            return s = s || this._uiHash(), P.ui.plugin.call(this, t, [e, s]), "drag" == t && (this.positionAbs = this._convertPositionTo("absolute")), P.Widget.prototype._trigger.call(this, t, e, s)
        },
        plugins: {},
        _uiHash: function(t) {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), P.extend(P.ui.draggable, {
        version: "@VERSION"
    }), P.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, t) {
            var s = P(this).data("draggable"),
                i = s.options,
                o = P.extend({}, t, {
                    item: s.element
                });
            s.sortables = [], P(i.connectToSortable).each(function() {
                var t = P.data(this, "sortable");
                t && !t.options.disabled && (s.sortables.push({
                    instance: t,
                    shouldRevert: t.options.revert
                }), t._refreshItems(), t._trigger("activate", e, o))
            })
        },
        stop: function(t, e) {
            var s = P(this).data("draggable"),
                i = P.extend({}, e, {
                    item: s.element
                });
            P.each(s.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" == s.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, i))
            })
        },
        drag: function(e, s) {
            var i = P(this).data("draggable"),
                o = this;
            P.each(i.sortables, function(t) {
                this.instance.positionAbs = i.positionAbs, this.instance.helperProportions = i.helperProportions, this.instance.offset.click = i.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = P(o).clone().appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return s.helper[0]
                }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = i.offset.click.top, this.instance.offset.click.left = i.offset.click.left, this.instance.offset.parent.left -= i.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= i.offset.parent.top - this.instance.offset.parent.top, i._trigger("toSortable", e), i.dropped = this.instance.element, i.currentItem = i.element, this.instance.fromOutside = i), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), i._trigger("fromSortable", e), i.dropped = !1)
            })
        }
    }), P.ui.plugin.add("draggable", "cursor", {
        start: function(t, e) {
            var s = P("body"),
                i = P(this).data("draggable").options;
            s.css("cursor") && (i._cursor = s.css("cursor")), s.css("cursor", i.cursor)
        },
        stop: function(t, e) {
            var s = P(this).data("draggable").options;
            s._cursor && P("body").css("cursor", s._cursor)
        }
    }), P.ui.plugin.add("draggable", "iframeFix", {
        start: function(t, e) {
            var s = P(this).data("draggable").options;
            P(!0 === s.iframeFix ? "iframe" : s.iframeFix).each(function() {
                P('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(P(this).offset()).appendTo("body")
            })
        },
        stop: function(t, e) {
            P("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            })
        }
    }), P.ui.plugin.add("draggable", "opacity", {
        start: function(t, e) {
            var s = P(e.helper),
                i = P(this).data("draggable").options;
            s.css("opacity") && (i._opacity = s.css("opacity")), s.css("opacity", i.opacity)
        },
        stop: function(t, e) {
            var s = P(this).data("draggable").options;
            s._opacity && P(e.helper).css("opacity", s._opacity)
        }
    }), P.ui.plugin.add("draggable", "scroll", {
        start: function(t, e) {
            var s = P(this).data("draggable");
            s.scrollParent[0] != document && "HTML" != s.scrollParent[0].tagName && (s.overflowOffset = s.scrollParent.offset())
        },
        drag: function(t, e) {
            var s = P(this).data("draggable"),
                i = s.options,
                o = !1;
            s.scrollParent[0] != document && "HTML" != s.scrollParent[0].tagName ? (i.axis && "x" == i.axis || (s.overflowOffset.top + s.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? s.scrollParent[0].scrollTop = o = s.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - s.overflowOffset.top < i.scrollSensitivity && (s.scrollParent[0].scrollTop = o = s.scrollParent[0].scrollTop - i.scrollSpeed)), i.axis && "y" == i.axis || (s.overflowOffset.left + s.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? s.scrollParent[0].scrollLeft = o = s.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - s.overflowOffset.left < i.scrollSensitivity && (s.scrollParent[0].scrollLeft = o = s.scrollParent[0].scrollLeft - i.scrollSpeed))) : (i.axis && "x" == i.axis || (t.pageY - P(document).scrollTop() < i.scrollSensitivity ? o = P(document).scrollTop(P(document).scrollTop() - i.scrollSpeed) : P(window).height() - (t.pageY - P(document).scrollTop()) < i.scrollSensitivity && (o = P(document).scrollTop(P(document).scrollTop() + i.scrollSpeed))), i.axis && "y" == i.axis || (t.pageX - P(document).scrollLeft() < i.scrollSensitivity ? o = P(document).scrollLeft(P(document).scrollLeft() - i.scrollSpeed) : P(window).width() - (t.pageX - P(document).scrollLeft()) < i.scrollSensitivity && (o = P(document).scrollLeft(P(document).scrollLeft() + i.scrollSpeed)))), !1 !== o && P.ui.ddmanager && !i.dropBehaviour && P.ui.ddmanager.prepareOffsets(s, t)
        }
    }), P.ui.plugin.add("draggable", "snap", {
        start: function(t, e) {
            var s = P(this).data("draggable"),
                i = s.options;
            s.snapElements = [], P(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function() {
                var t = P(this),
                    e = t.offset();
                this != s.element[0] && s.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: e.top,
                    left: e.left
                })
            })
        },
        drag: function(t, e) {
            for (var s = P(this).data("draggable"), i = s.options, o = i.snapTolerance, n = e.offset.left, r = n + s.helperProportions.width, a = e.offset.top, l = a + s.helperProportions.height, h = s.snapElements.length - 1; 0 <= h; h--) {
                var c = s.snapElements[h].left,
                    p = c + s.snapElements[h].width,
                    f = s.snapElements[h].top,
                    d = f + s.snapElements[h].height;
                if (c - o < n && n < p + o && f - o < a && a < d + o || c - o < n && n < p + o && f - o < l && l < d + o || c - o < r && r < p + o && f - o < a && a < d + o || c - o < r && r < p + o && f - o < l && l < d + o) {
                    if ("inner" != i.snapMode) {
                        var g = Math.abs(f - l) <= o,
                            u = Math.abs(d - a) <= o,
                            m = Math.abs(c - r) <= o,
                            v = Math.abs(p - n) <= o;
                        g && (e.position.top = s._convertPositionTo("relative", {
                            top: f - s.helperProportions.height,
                            left: 0
                        }).top - s.margins.top), u && (e.position.top = s._convertPositionTo("relative", {
                            top: d,
                            left: 0
                        }).top - s.margins.top), m && (e.position.left = s._convertPositionTo("relative", {
                            top: 0,
                            left: c - s.helperProportions.width
                        }).left - s.margins.left), v && (e.position.left = s._convertPositionTo("relative", {
                            top: 0,
                            left: p
                        }).left - s.margins.left)
                    }
                    var b = g || u || m || v;
                    if ("outer" != i.snapMode) {
                        g = Math.abs(f - a) <= o, u = Math.abs(d - l) <= o, m = Math.abs(c - n) <= o, v = Math.abs(p - r) <= o;
                        g && (e.position.top = s._convertPositionTo("relative", {
                            top: f,
                            left: 0
                        }).top - s.margins.top), u && (e.position.top = s._convertPositionTo("relative", {
                            top: d - s.helperProportions.height,
                            left: 0
                        }).top - s.margins.top), m && (e.position.left = s._convertPositionTo("relative", {
                            top: 0,
                            left: c
                        }).left - s.margins.left), v && (e.position.left = s._convertPositionTo("relative", {
                            top: 0,
                            left: p - s.helperProportions.width
                        }).left - s.margins.left)
                    }!s.snapElements[h].snapping && (g || u || m || v || b) && s.options.snap.snap && s.options.snap.snap.call(s.element, t, P.extend(s._uiHash(), {
                        snapItem: s.snapElements[h].item
                    })), s.snapElements[h].snapping = g || u || m || v || b
                } else s.snapElements[h].snapping && s.options.snap.release && s.options.snap.release.call(s.element, t, P.extend(s._uiHash(), {
                    snapItem: s.snapElements[h].item
                })), s.snapElements[h].snapping = !1
            }
        }
    }), P.ui.plugin.add("draggable", "stack", {
        start: function(t, e) {
            var s = P(this).data("draggable").options,
                i = P.makeArray(P(s.stack)).sort(function(t, e) {
                    return (parseInt(P(t).css("zIndex"), 10) || 0) - (parseInt(P(e).css("zIndex"), 10) || 0)
                });
            if (i.length) {
                var o = parseInt(i[0].style.zIndex) || 0;
                P(i).each(function(t) {
                    this.style.zIndex = o + t
                }), this[0].style.zIndex = o + i.length
            }
        }
    }), P.ui.plugin.add("draggable", "zIndex", {
        start: function(t, e) {
            var s = P(e.helper),
                i = P(this).data("draggable").options;
            s.css("zIndex") && (i._zIndex = s.css("zIndex")), s.css("zIndex", i.zIndex)
        },
        stop: function(t, e) {
            var s = P(this).data("draggable").options;
            s._zIndex && P(e.helper).css("zIndex", s._zIndex)
        }
    })
}(jQuery);
! function(i, e) {
    i.widget("ui.progressbar", {
        options: {
            value: 0,
            max: 100
        },
        min: 0,
        _create: function() {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            }), this.valueDiv = i("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
        },
        destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove(), i.Widget.prototype.destroy.apply(this, arguments)
        },
        value: function(e) {
            return void 0 === e ? this._value() : (this._setOption("value", e), this)
        },
        _setOption: function(e, t) {
            "value" === e && (this.options.value = t, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), i.Widget.prototype._setOption.apply(this, arguments)
        },
        _value: function() {
            var e = this.options.value;
            return "number" != typeof e && (e = 0), Math.min(this.options.max, Math.max(this.min, e))
        },
        _percentage: function() {
            return 100 * this._value() / this.options.max
        },
        _refreshValue: function() {
            var e = this.value(),
                t = this._percentage();
            this.oldValue !== e && (this.oldValue = e, this._trigger("change")), this.valueDiv.toggleClass("ui-corner-right", e === this.options.max).width(t.toFixed(0) + "%"), this.element.attr("aria-valuenow", e)
        }
    }), i.extend(i.ui.progressbar, {
        version: "@VERSION"
    })
}(jQuery);
! function(r, e) {
    r.widget("ui.slider", r.ui.mouse, {
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null
        },
        _create: function() {
            var l = this,
                e = this.options;
            if (this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), e.disabled && this.element.addClass("ui-slider-disabled ui-disabled"), this.range = r([]), e.range && (!0 === e.range ? (this.range = r("<div></div>"), e.values || (e.values = [this._valueMin(), this._valueMin()]), e.values.length && 2 !== e.values.length && (e.values = [e.values[0], e.values[0]])) : this.range = r("<div></div>"), this.range.appendTo(this.element).addClass("ui-slider-range"), "min" !== e.range && "max" !== e.range || this.range.addClass("ui-slider-range-" + e.range), this.range.addClass("ui-widget-header")), 0 === r(".ui-slider-handle", this.element).length && r("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle"), e.values && e.values.length)
                for (; r(".ui-slider-handle", this.element).length < e.values.length;) r("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
            this.handles = r(".ui-slider-handle", this.element).addClass("ui-state-default ui-corner-all"), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function(e) {
                e.preventDefault()
            }).hover(function() {
                e.disabled || r(this).addClass("ui-state-hover")
            }, function() {
                r(this).removeClass("ui-state-hover")
            }).focus(function() {
                e.disabled ? r(this).blur() : (r(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), r(this).addClass("ui-state-focus"))
            }).blur(function() {
                r(this).removeClass("ui-state-focus")
            }), this.handles.each(function(e) {
                r(this).data("index.ui-slider-handle", e)
            }), this.handles.keydown(function(e) {
                var i, t, s, a = !0,
                    n = r(this).data("index.ui-slider-handle");
                if (!l.options.disabled) {
                    switch (e.keyCode) {
                        case r.ui.keyCode.HOME:
                        case r.ui.keyCode.END:
                        case r.ui.keyCode.PAGE_UP:
                        case r.ui.keyCode.PAGE_DOWN:
                        case r.ui.keyCode.UP:
                        case r.ui.keyCode.RIGHT:
                        case r.ui.keyCode.DOWN:
                        case r.ui.keyCode.LEFT:
                            if (a = !1, !l._keySliding && (l._keySliding = !0, r(this).addClass("ui-state-active"), !1 === l._start(e, n))) return
                    }
                    switch (s = l.options.step, i = t = l.options.values && l.options.values.length ? l.values(n) : l.value(), e.keyCode) {
                        case r.ui.keyCode.HOME:
                            t = l._valueMin();
                            break;
                        case r.ui.keyCode.END:
                            t = l._valueMax();
                            break;
                        case r.ui.keyCode.PAGE_UP:
                            t = l._trimAlignValue(i + (l._valueMax() - l._valueMin()) / 5);
                            break;
                        case r.ui.keyCode.PAGE_DOWN:
                            t = l._trimAlignValue(i - (l._valueMax() - l._valueMin()) / 5);
                            break;
                        case r.ui.keyCode.UP:
                        case r.ui.keyCode.RIGHT:
                            if (i === l._valueMax()) return;
                            t = l._trimAlignValue(i + s);
                            break;
                        case r.ui.keyCode.DOWN:
                        case r.ui.keyCode.LEFT:
                            if (i === l._valueMin()) return;
                            t = l._trimAlignValue(i - s)
                    }
                    return l._slide(e, n, t), a
                }
            }).keyup(function(e) {
                var i = r(this).data("index.ui-slider-handle");
                l._keySliding && (l._keySliding = !1, l._stop(e, i), l._change(e, i), r(this).removeClass("ui-state-active"))
            }), this._refreshValue(), this._animateOff = !1
        },
        destroy: function() {
            return this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), this._mouseDestroy(), this
        },
        _mouseCapture: function(e) {
            var i, t, s, a, n, l, h, u, o = this.options;
            return !o.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, t = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, (n = this).handles.each(function(e) {
                var i = Math.abs(t - n.values(e));
                i < s && (s = i, a = r(this), l = e)
            }), !0 === o.range && this.values(1) === o.min && (l += 1, a = r(this.handles[l])), !1 !== this._start(e, l) && (this._mouseSliding = !0, n._handleIndex = l, a.addClass("ui-state-active").focus(), h = a.offset(), u = !r(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = u ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - h.left - a.width() / 2,
                top: e.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, l, t), this._animateOff = !0))
        },
        _mouseStart: function(e) {
            return !0
        },
        _mouseDrag: function(e) {
            var i = {
                    x: e.pageX,
                    y: e.pageY
                },
                t = this._normValueFromMouse(i);
            return this._slide(e, this._handleIndex, t), !1
        },
        _mouseStop: function(e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(e) {
            var i, t, s, a, n;
            return "horizontal" === this.orientation ? (i = this.elementSize.width, t = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (i = this.elementSize.height, t = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), 1 < (s = t / i) && (s = 1), s < 0 && (s = 0), "vertical" === this.orientation && (s = 1 - s), a = this._valueMax() - this._valueMin(), n = this._valueMin() + s * a, this._trimAlignValue(n)
        },
        _start: function(e, i) {
            var t = {
                handle: this.handles[i],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (t.value = this.values(i), t.values = this.values()), this._trigger("start", e, t)
        },
        _slide: function(e, i, t) {
            var s, a, n;
            this.options.values && this.options.values.length ? (s = this.values(i ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === i && s < t || 1 === i && t < s) && (t = s), t !== this.values(i) && ((a = this.values())[i] = t, n = this._trigger("slide", e, {
                handle: this.handles[i],
                value: t,
                values: a
            }), s = this.values(i ? 0 : 1), !1 !== n && this.values(i, t, !0))) : t !== this.value() && !1 !== (n = this._trigger("slide", e, {
                handle: this.handles[i],
                value: t
            })) && this.value(t)
        },
        _stop: function(e, i) {
            var t = {
                handle: this.handles[i],
                value: this.value()
            };
            this.options.values && this.options.values.length && (t.value = this.values(i), t.values = this.values()), this._trigger("stop", e, t)
        },
        _change: function(e, i) {
            if (!this._keySliding && !this._mouseSliding) {
                var t = {
                    handle: this.handles[i],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (t.value = this.values(i), t.values = this.values()), this._trigger("change", e, t)
            }
        },
        value: function(e) {
            return arguments.length && (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0)), this._value()
        },
        values: function(e, i) {
            var t, s, a;
            if (1 < arguments.length && (this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e)), !arguments.length) return this._values();
            if (!r.isArray(e)) return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (t = this.options.values, s = e, a = 0; a < t.length; a += 1) t[a] = this._trimAlignValue(s[a]), this._change(null, a);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var t, s = 0;
            switch (r.isArray(this.options.values) && (s = this.options.values.length), r.Widget.prototype._setOption.apply(this, arguments), e) {
                case "disabled":
                    i ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.attr("disabled", "disabled"), this.element.addClass("ui-disabled")) : (this.handles.removeAttr("disabled"), this.element.removeClass("ui-disabled"));
                    break;
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), t = 0; t < s; t += 1) this._change(null, t);
                    this._animateOff = !1
            }
        },
        _value: function() {
            var e = this.options.value;
            return e = this._trimAlignValue(e)
        },
        _values: function(e) {
            var i, t, s;
            if (arguments.length) return i = this.options.values[e], i = this._trimAlignValue(i);
            for (t = this.options.values.slice(), s = 0; s < t.length; s += 1) t[s] = this._trimAlignValue(t[s]);
            return t
        },
        _trimAlignValue: function(e) {
            if (e <= this._valueMin()) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var i = 0 < this.options.step ? this.options.step : 1,
                t = (e - this._valueMin()) % i;
            return alignValue = e - t, 2 * Math.abs(t) >= i && (alignValue += 0 < t ? i : -i), parseFloat(alignValue.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var t, s, e, i, a, n = this.options.range,
                l = this.options,
                h = this,
                u = !this._animateOff && l.animate,
                o = {};
            this.options.values && this.options.values.length ? this.handles.each(function(e, i) {
                t = (h.values(e) - h._valueMin()) / (h._valueMax() - h._valueMin()) * 100, o["horizontal" === h.orientation ? "left" : "bottom"] = t + "%", r(this).stop(1, 1)[u ? "animate" : "css"](o, l.animate), !0 === h.options.range && ("horizontal" === h.orientation ? (0 === e && h.range.stop(1, 1)[u ? "animate" : "css"]({
                    left: t + "%"
                }, l.animate), 1 === e && h.range[u ? "animate" : "css"]({
                    width: t - s + "%"
                }, {
                    queue: !1,
                    duration: l.animate
                })) : (0 === e && h.range.stop(1, 1)[u ? "animate" : "css"]({
                    bottom: t + "%"
                }, l.animate), 1 === e && h.range[u ? "animate" : "css"]({
                    height: t - s + "%"
                }, {
                    queue: !1,
                    duration: l.animate
                }))), s = t
            }) : (e = this.value(), i = this._valueMin(), a = this._valueMax(), t = a !== i ? (e - i) / (a - i) * 100 : 0, o["horizontal" === h.orientation ? "left" : "bottom"] = t + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](o, l.animate), "min" === n && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                width: t + "%"
            }, l.animate), "max" === n && "horizontal" === this.orientation && this.range[u ? "animate" : "css"]({
                width: 100 - t + "%"
            }, {
                queue: !1,
                duration: l.animate
            }), "min" === n && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                height: t + "%"
            }, l.animate), "max" === n && "vertical" === this.orientation && this.range[u ? "animate" : "css"]({
                height: 100 - t + "%"
            }, {
                queue: !1,
                duration: l.animate
            }))
        }
    }), r.extend(r.ui.slider, {
        version: "@VERSION"
    })
}(jQuery);
! function(f, t) {
    f.widget("ui.sortable", f.ui.mouse, {
        widgetEventPrefix: "sort",
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function() {
            this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = !!this.items.length && /left|right/.test(this.items[0].item.css("float")), this.offset = this.element.offset(), this._mouseInit()
        },
        destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable"), this._mouseDestroy();
            for (var t = this.items.length - 1; 0 <= t; t--) this.items[t].item.removeData("sortable-item");
            return this
        },
        _setOption: function(t, e) {
            "disabled" === t ? (this.options[t] = e, this.widget()[e ? "addClass" : "removeClass"]("ui-sortable-disabled")) : f.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(t, e) {
            if (this.reverting) return !1;
            if (this.options.disabled || "static" == this.options.type) return !1;
            this._refreshItems(t);
            var i = null,
                s = this;
            f(t.target).parents().each(function() {
                if (f.data(this, "sortable-item") == s) return i = f(this), !1
            });
            if (f.data(t.target, "sortable-item") == s && (i = f(t.target)), !i) return !1;
            if (this.options.handle && !e) {
                var o = !1;
                if (f(this.options.handle, i).find("*").addBack().each(function() {
                        this == t.target && (o = !0)
                    }), !o) return !1
            }
            return this.currentItem = i, this._removeCurrentsFromItems(), !0
        },
        _mouseStart: function(t, e, i) {
            var s = this.options;
            if ((this.currentContainer = this).refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), f.extend(this.offset, {
                    click: {
                        left: t.pageX - this.offset.left,
                        top: t.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), s.cursor && (f("body").css("cursor") && (this._storedCursor = f("body").css("cursor")), f("body").css("cursor", s.cursor)), s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", s.opacity)), s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", s.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i)
                for (var o = this.containers.length - 1; 0 <= o; o--) this.containers[o]._trigger("activate", t, this._uiHash(this));
            return f.ui.ddmanager && (f.ui.ddmanager.current = this), f.ui.ddmanager && !s.dropBehaviour && f.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function(t) {
            if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
                var e = this.options,
                    i = !1;
                this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < e.scrollSensitivity ? this.scrollParent[0].scrollTop = i = this.scrollParent[0].scrollTop + e.scrollSpeed : t.pageY - this.overflowOffset.top < e.scrollSensitivity && (this.scrollParent[0].scrollTop = i = this.scrollParent[0].scrollTop - e.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < e.scrollSensitivity ? this.scrollParent[0].scrollLeft = i = this.scrollParent[0].scrollLeft + e.scrollSpeed : t.pageX - this.overflowOffset.left < e.scrollSensitivity && (this.scrollParent[0].scrollLeft = i = this.scrollParent[0].scrollLeft - e.scrollSpeed)) : (t.pageY - f(document).scrollTop() < e.scrollSensitivity ? i = f(document).scrollTop(f(document).scrollTop() - e.scrollSpeed) : f(window).height() - (t.pageY - f(document).scrollTop()) < e.scrollSensitivity && (i = f(document).scrollTop(f(document).scrollTop() + e.scrollSpeed)), t.pageX - f(document).scrollLeft() < e.scrollSensitivity ? i = f(document).scrollLeft(f(document).scrollLeft() - e.scrollSpeed) : f(window).width() - (t.pageX - f(document).scrollLeft()) < e.scrollSensitivity && (i = f(document).scrollLeft(f(document).scrollLeft() + e.scrollSpeed))), !1 !== i && f.ui.ddmanager && !e.dropBehaviour && f.ui.ddmanager.prepareOffsets(this, t)
            }
            this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px");
            for (var s = this.items.length - 1; 0 <= s; s--) {
                var o = this.items[s],
                    r = o.item[0],
                    n = this._intersectsWithPointer(o);
                if (n && !(r == this.currentItem[0] || this.placeholder[1 == n ? "next" : "prev"]()[0] == r || f.ui.contains(this.placeholder[0], r) || "semi-dynamic" == this.options.type && f.ui.contains(this.element[0], r))) {
                    if (this.direction = 1 == n ? "down" : "up", "pointer" != this.options.tolerance && !this._intersectsWithSides(o)) break;
                    this._rearrange(t, o), this._trigger("change", t, this._uiHash());
                    break
                }
            }
            return this._contactContainers(t), f.ui.ddmanager && f.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(t, e) {
            if (t) {
                if (f.ui.ddmanager && !this.options.dropBehaviour && f.ui.ddmanager.drop(this, t), this.options.revert) {
                    var i = this,
                        s = i.placeholder.offset();
                    i.reverting = !0, f(this.helper).animate({
                        left: s.left - this.offset.parent.left - i.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: s.top - this.offset.parent.top - i.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, function() {
                        i._clear(t)
                    })
                } else this._clear(t, e);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var t = this.containers.length - 1; 0 <= t; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), f.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? f(this.domPosition.prev).after(this.currentItem) : f(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(e) {
            var t = this._getItemsAsjQuery(e && e.connected),
                i = [];
            return e = e || {}, f(t).each(function() {
                var t = (f(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[-=_](.+)/);
                t && i.push((e.key || t[1] + "[]") + "=" + (e.key && e.expression ? t[1] : t[2]))
            }), !i.length && e.key && i.push(e.key + "="), i.join("&")
        },
        toArray: function(t) {
            var e = this._getItemsAsjQuery(t && t.connected),
                i = [];
            return t = t || {}, e.each(function() {
                i.push(f(t.item || this).attr(t.attribute || "id") || "")
            }), i
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                s = this.positionAbs.top,
                o = s + this.helperProportions.height,
                r = t.left,
                n = r + t.width,
                h = t.top,
                a = h + t.height,
                l = this.offset.click.top,
                c = this.offset.click.left,
                p = h < s + l && s + l < a && r < e + c && e + c < n;
            return "pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : r < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < n && h < s + this.helperProportions.height / 2 && o - this.helperProportions.height / 2 < a
        },
        _intersectsWithPointer: function(t) {
            var e = f.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                i = f.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                s = e && i,
                o = this._getDragVerticalDirection(),
                r = this._getDragHorizontalDirection();
            return !!s && (this.floating ? r && "right" == r || "down" == o ? 2 : 1 : o && ("down" == o ? 2 : 1))
        },
        _intersectsWithSides: function(t) {
            var e = f.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                i = f.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                s = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" == o && i || "left" == o && !i : s && ("down" == s && e || "up" == s && !e)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 != t && (0 < t ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 != t && (0 < t ? "right" : "left")
        },
        refresh: function(t) {
            return this._refreshItems(t), this.refreshPositions(), this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor == String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(t) {
            var e = [],
                i = [],
                s = this._connectWith();
            if (s && t)
                for (var o = s.length - 1; 0 <= o; o--)
                    for (var r = f(s[o]), n = r.length - 1; 0 <= n; n--) {
                        var h = f.data(r[n], "sortable");
                        h && h != this && !h.options.disabled && i.push([f.isFunction(h.options.items) ? h.options.items.call(h.element) : f(h.options.items, h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), h])
                    }
            i.push([f.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : f(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (o = i.length - 1; 0 <= o; o--) i[o][0].each(function() {
                e.push(this)
            });
            return f(e)
        },
        _removeCurrentsFromItems: function() {
            for (var t = this.currentItem.find(":data(sortable-item)"), e = 0; e < this.items.length; e++)
                for (var i = 0; i < t.length; i++) t[i] == this.items[e].item[0] && this.items.splice(e, 1)
        },
        _refreshItems: function(t) {
            this.items = [], this.containers = [this];
            var e = this.items,
                i = [
                    [f.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                        item: this.currentItem
                    }) : f(this.options.items, this.element), this]
                ],
                s = this._connectWith();
            if (s)
                for (var o = s.length - 1; 0 <= o; o--)
                    for (var r = f(s[o]), n = r.length - 1; 0 <= n; n--) {
                        var h = f.data(r[n], "sortable");
                        h && h != this && !h.options.disabled && (i.push([f.isFunction(h.options.items) ? h.options.items.call(h.element[0], t, {
                            item: this.currentItem
                        }) : f(h.options.items, h.element), h]), this.containers.push(h))
                    }
            for (o = i.length - 1; 0 <= o; o--)
                for (var a = i[o][1], l = i[o][0], c = (n = 0, l.length); n < c; n++) {
                    var p = f(l[n]);
                    p.data("sortable-item", a), e.push({
                        item: p,
                        instance: a,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
        },
        refreshPositions: function(t) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var e = this.items.length - 1; 0 <= e; e--) {
                var i = this.items[e],
                    s = this.options.toleranceElement ? f(this.options.toleranceElement, i.item) : i.item;
                t || (i.width = s.outerWidth(), i.height = s.outerHeight());
                var o = s.offset();
                i.left = o.left, i.top = o.top
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (e = this.containers.length - 1; 0 <= e; e--) {
                    o = this.containers[e].element.offset();
                    this.containers[e].containerCache.left = o.left, this.containers[e].containerCache.top = o.top, this.containers[e].containerCache.width = this.containers[e].element.outerWidth(), this.containers[e].containerCache.height = this.containers[e].element.outerHeight()
                }
            return this
        },
        _createPlaceholder: function(t) {
            var i = t || this,
                s = i.options;
            if (!s.placeholder || s.placeholder.constructor == String) {
                var o = s.placeholder;
                s.placeholder = {
                    element: function() {
                        var t = f(document.createElement(i.currentItem[0].nodeName)).addClass(o || i.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return o || (t.style.visibility = "hidden"), t
                    },
                    update: function(t, e) {
                        o && !s.forcePlaceholderSize || (e.height() || e.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10)))
                    }
                }
            }
            i.placeholder = f(s.placeholder.element.call(i.element, i.currentItem)), i.currentItem.after(i.placeholder), s.placeholder.update(i, i.placeholder)
        },
        _contactContainers: function(t) {
            for (var e = null, i = null, s = this.containers.length - 1; 0 <= s; s--)
                if (!f.ui.contains(this.currentItem[0], this.containers[s].element[0]))
                    if (this._intersectsWith(this.containers[s].containerCache)) {
                        if (e && f.ui.contains(this.containers[s].element[0], e.element[0])) continue;
                        e = this.containers[s], i = s
                    } else this.containers[s].containerCache.over && (this.containers[s]._trigger("out", t, this._uiHash(this)), this.containers[s].containerCache.over = 0);
            if (e)
                if (1 === this.containers.length) this.containers[i]._trigger("over", t, this._uiHash(this)), this.containers[i].containerCache.over = 1;
                else if (this.currentContainer != this.containers[i]) {
                for (var o = 1e4, r = null, n = this.positionAbs[this.containers[i].floating ? "left" : "top"], h = this.items.length - 1; 0 <= h; h--)
                    if (f.ui.contains(this.containers[i].element[0], this.items[h].item[0])) {
                        var a = this.items[h][this.containers[i].floating ? "left" : "top"];
                        Math.abs(a - n) < o && (o = Math.abs(a - n), r = this.items[h])
                    } if (!r && !this.options.dropOnEmpty) return;
                this.currentContainer = this.containers[i], r ? this._rearrange(t, r, null, !0) : this._rearrange(t, null, this.containers[i].element, !0), this._trigger("change", t, this._uiHash()), this.containers[i]._trigger("change", t, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[i]._trigger("over", t, this._uiHash(this)), this.containers[i].containerCache.over = 1
            }
        },
        _createHelper: function(t) {
            var e = this.options,
                i = f.isFunction(e.helper) ? f(e.helper.apply(this.element[0], [t, this.currentItem])) : "clone" == e.helper ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || f("parent" != e.appendTo ? e.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), ("" == i[0].style.width || e.forceHelperSize) && i.width(this.currentItem.width()), ("" == i[0].style.height || e.forceHelperSize) && i.height(this.currentItem.height()), i
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")), f.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && f.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && ustream.browser.msie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" == this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t = this.options;
            if ("parent" == t.containment && (t.containment = this.helper[0].parentNode), "document" != t.containment && "window" != t.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, f("document" == t.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (f("document" == t.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(t.containment)) {
                var e = f(t.containment)[0],
                    i = f(t.containment).offset(),
                    s = "hidden" != f(e).css("overflow");
                this.containment = [i.left + (parseInt(f(e).css("borderLeftWidth"), 10) || 0) + (parseInt(f(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(f(e).css("borderTopWidth"), 10) || 0) + (parseInt(f(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(f(e).css("borderLeftWidth"), 10) || 0) - (parseInt(f(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(f(e).css("borderTopWidth"), 10) || 0) - (parseInt(f(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function(t, e) {
            e || (e = this.position);
            var i = "absolute" == t ? 1 : -1,
                s = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && f.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                o = /(html|body)/i.test(s[0].tagName);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - (ustream.browser.safari && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * i),
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - (ustream.browser.safari && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * i)
            }
        },
        _generatePosition: function(t) {
            var e = this.options,
                i = "absolute" != this.cssPosition || this.scrollParent[0] != document && f.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                s = /(html|body)/i.test(i[0].tagName);
            "relative" != this.cssPosition || this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
            var o = t.pageX,
                r = t.pageY;
            if (this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), e.grid)) {
                var n = this.originalPageY + Math.round((r - this.originalPageY) / e.grid[1]) * e.grid[1];
                r = this.containment && (n - this.offset.click.top < this.containment[1] || n - this.offset.click.top > this.containment[3]) ? n - this.offset.click.top < this.containment[1] ? n + e.grid[1] : n - e.grid[1] : n;
                var h = this.originalPageX + Math.round((o - this.originalPageX) / e.grid[0]) * e.grid[0];
                o = this.containment && (h - this.offset.click.left < this.containment[0] || h - this.offset.click.left > this.containment[2]) ? h - this.offset.click.left < this.containment[0] ? h + e.grid[0] : h - e.grid[0] : h
            }
            return {
                top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (ustream.browser.safari && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : i.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (ustream.browser.safari && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : i.scrollLeft())
            }
        },
        _rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var o = this,
                r = this.counter;
            window.setTimeout(function() {
                r == o.counter && o.refreshPositions(!s)
            }, 0)
        },
        _clear: function(t, e) {
            this.reverting = !1;
            var i = [];
            if (!this._noFinalSort && this.currentItem[0].parentNode && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
                for (var s in this._storedCSS) "auto" != this._storedCSS[s] && "static" != this._storedCSS[s] || (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            if (this.fromOutside && !e && i.push(function(t) {
                    this._trigger("receive", t, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev == this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent == this.currentItem.parent()[0] || e || i.push(function(t) {
                    this._trigger("update", t, this._uiHash())
                }), !f.ui.contains(this.element[0], this.currentItem[0])) {
                e || i.push(function(t) {
                    this._trigger("remove", t, this._uiHash())
                });
                for (s = this.containers.length - 1; 0 <= s; s--) f.ui.contains(this.containers[s].element[0], this.currentItem[0]) && !e && (i.push(function(e) {
                    return function(t) {
                        e._trigger("receive", t, this._uiHash(this))
                    }
                }.call(this, this.containers[s])), i.push(function(e) {
                    return function(t) {
                        e._trigger("update", t, this._uiHash(this))
                    }
                }.call(this, this.containers[s])))
            }
            for (s = this.containers.length - 1; 0 <= s; s--) e || i.push(function(e) {
                return function(t) {
                    e._trigger("deactivate", t, this._uiHash(this))
                }
            }.call(this, this.containers[s])), this.containers[s].containerCache.over && (i.push(function(e) {
                return function(t) {
                    e._trigger("out", t, this._uiHash(this))
                }
            }.call(this, this.containers[s])), this.containers[s].containerCache.over = 0);
            if (this._storedCursor && f("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!e) {
                    this._trigger("beforeStop", t, this._uiHash());
                    for (s = 0; s < i.length; s++) i[s].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return !1
            }
            if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
                for (s = 0; s < i.length; s++) i[s].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return !(this.fromOutside = !1)
        },
        _trigger: function() {
            !1 === f.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function(t) {
            var e = t || this;
            return {
                helper: e.helper,
                placeholder: e.placeholder || f([]),
                position: e.position,
                originalPosition: e.originalPosition,
                offset: e.positionAbs,
                item: e.currentItem,
                sender: t ? t.element : null
            }
        }
    }), f.extend(f.ui.sortable, {
        version: "@VERSION"
    })
}(jQuery);
! function(o, t) {
    o.widget("ui.a11ysortable", o.ui.sortable, {
        options: {
            alertContainer: "#notification",
            msgTemplate: function(t, e, r, n, i) {
                var o = "";
                return o += "Now " + t.text() + " is " + n + " of " + i + ",", r && (o += "Previous is " + r.text() + ","), e && (o += "Next element is " + e.text() + ","), o
            }
        },
        _create: function() {
            o.ui.sortable.prototype._create.apply(this, arguments), this._bindKeyBoard()
        },
        _bindKeyBoard: function() {
            if (this.alertContainer = o(this.options.alertContainer), o(this.alertContainer).length) {
                var n = this._getItemsAsjQuery(),
                    i = this;
                n.focus(function(t) {
                    o(t.currentTarget).attr("aria-current", "true")
                }).blur(function(t) {
                    o(t.currentTarget).attr("aria-current", "")
                }).keyup(function(t) {
                    var e = t.which;
                    if (38 !== e && 40 !== e || t.altKey || t.ctrlKey || t.shiftKey) return !0;
                    var r = o(t.currentTarget);
                    i._moveItem(e, r, n), i._notifyUser(r, n)
                })
            }
        },
        _moveItem: function(t, e, r) {
            38 === t ? e.insertBefore(e.prev(r)) : 40 === t && e.insertAfter(e.next(r)), e.focus()
        },
        _notifyUser: function(t, e) {
            this.alertContainer.text(this.options.msgTemplate(t, t.next(), t.prev(), t.index() + 1, e.length))
        }
    })
}(jQuery);
! function($, undefined) {
    $.extend($.ui, {
        datepicker: {
            version: "@VERSION"
        }
    });
    var PROP_NAME = "datepicker",
        dpuuid = (new Date).getTime();

    function Datepicker() {
        this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            ustrDisabledCheck: !1
        }, $.extend(this._defaults, this.regional[""]), this.dpDiv = $('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')
    }

    function extendRemove(e, t) {
        for (var a in $.extend(e, t), t) null != t[a] && t[a] != undefined || (e[a] = t[a]);
        return e
    }

    function isArray(e) {
        return e && (ustream.browser.safari && "object" == typeof e && e.length || e.constructor && e.constructor.toString().match(/\Array\(\)/))
    }
    $.extend(Datepicker.prototype, {
        markerClassName: "hasDatepicker",
        log: function() {
            this.debug && console.log.apply("", arguments)
        },
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(e) {
            return extendRemove(this._defaults, e || {}), this
        },
        _attachDatepicker: function(target, settings) {
            var inlineSettings = null;
            for (var attrName in this._defaults) {
                var attrValue = target.getAttribute("date:" + attrName);
                if (attrValue) {
                    inlineSettings = inlineSettings || {};
                    try {
                        inlineSettings[attrName] = eval(attrValue)
                    } catch (e) {
                        inlineSettings[attrName] = attrValue
                    }
                }
            }
            var nodeName = target.nodeName.toLowerCase(),
                inline = "div" == nodeName || "span" == nodeName;
            target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
            var inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {}, inlineSettings || {}), "input" == nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
        },
        _newInst: function(e, t) {
            return {
                id: e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: t,
                dpDiv: t ? $('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>') : this.dpDiv
            }
        },
        _connectDatepicker: function(e, i) {
            var t = $(e);
            i.append = $([]), i.trigger = $([]), t.hasClass(this.markerClassName) || (this._attachments(t, i), t.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(e, t, a) {
                i.settings[t] = a
            }).bind("getData.datepicker", function(e, t) {
                return this._get(i, t)
            }), this._autoSize(i), $.data(e, PROP_NAME, i))
        },
        _attachments: function(e, t) {
            var a = this._get(t, "appendText"),
                i = this._get(t, "isRTL");
            t.append && t.append.remove(), a && (t.append = $('<span class="' + this._appendClass + '">' + a + "</span>"), e[i ? "before" : "after"](t.append)), e.unbind("focus", this._showDatepicker), t.trigger && t.trigger.remove();
            var r = this._get(t, "showOn");
            if ("focus" != r && "both" != r || e.focus(this._showDatepicker), "button" == r || "both" == r) {
                var s = this._get(t, "buttonText"),
                    n = this._get(t, "buttonImage");
                t.trigger = $(this._get(t, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                    src: n,
                    alt: s,
                    title: s
                }) : $('<button type="button"></button>').addClass(this._triggerClass).html("" == n ? s : $("<img/>").attr({
                    src: n,
                    alt: s,
                    title: s
                }))), e[i ? "before" : "after"](t.trigger), t.trigger.click(function() {
                    return $.datepicker._datepickerShowing && $.datepicker._lastInput == e[0] ? $.datepicker._hideDatepicker() : $.datepicker._showDatepicker(e[0]), !1
                })
            }
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t = new Date(2009, 11, 20),
                    a = this._get(e, "dateFormat");
                if (a.match(/[DM]/)) {
                    var i = function(e) {
                        for (var t = 0, a = 0, i = 0; i < e.length; i++) e[i].length > t && (t = e[i].length, a = i);
                        return a
                    };
                    t.setMonth(i(this._get(e, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), t.setDate(i(this._get(e, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t.getDay())
                }
                e.input.attr("size", this._formatDate(e, t).length)
            }
        },
        _inlineDatepicker: function(e, i) {
            var t = $(e);
            t.hasClass(this.markerClassName) || (t.addClass(this.markerClassName).append(i.dpDiv).bind("setData.datepicker", function(e, t, a) {
                i.settings[t] = a
            }).bind("getData.datepicker", function(e, t) {
                return this._get(i, t)
            }), $.data(e, PROP_NAME, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.dpDiv.show())
        },
        _dialogDatepicker: function(e, t, a, i, r) {
            var s = this._dialogInst;
            if (!s) {
                this.uuid += 1;
                var n = "dp" + this.uuid;
                this._dialogInput = $('<input type="text" id="' + n + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), (s = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, $.data(this._dialogInput[0], PROP_NAME, s)
            }
            if (extendRemove(s.settings, i || {}), t = t && t.constructor == Date ? this._formatDate(s, t) : t, this._dialogInput.val(t), this._pos = r ? r.length ? r : [r.pageX, r.pageY] : null, !this._pos) {
                var o = document.documentElement.clientWidth,
                    d = document.documentElement.clientHeight,
                    c = document.documentElement.scrollLeft || document.body.scrollLeft,
                    l = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [o / 2 - 100 + c, d / 2 - 150 + l]
            }
            return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), s.settings.onSelect = a, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, s), this
        },
        _destroyDatepicker: function(e) {
            var t = $(e),
                a = $.data(e, PROP_NAME);
            if (t.hasClass(this.markerClassName)) {
                var i = e.nodeName.toLowerCase();
                $.removeData(e, PROP_NAME), "input" == i ? (a.append.remove(), a.trigger.remove(), t.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : "div" != i && "span" != i || t.removeClass(this.markerClassName).empty()
            }
        },
        _enableDatepicker: function(t) {
            var e = $(t),
                a = $.data(t, PROP_NAME);
            if (e.hasClass(this.markerClassName)) {
                var i = t.nodeName.toLowerCase();
                if ("input" == i) t.disabled = !1, a.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                });
                else if ("div" == i || "span" == i) {
                    e.children("." + this._inlineClass).children().removeClass("ui-state-disabled")
                }
                this._disabledInputs = $.map(this._disabledInputs, function(e) {
                    return e == t ? null : e
                })
            }
        },
        _disableDatepicker: function(t) {
            var e = $(t),
                a = $.data(t, PROP_NAME);
            if (e.hasClass(this.markerClassName)) {
                var i = t.nodeName.toLowerCase();
                if ("input" == i) t.disabled = !0, a.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                });
                else if ("div" == i || "span" == i) {
                    e.children("." + this._inlineClass).children().addClass("ui-state-disabled")
                }
                this._disabledInputs = $.map(this._disabledInputs, function(e) {
                    return e == t ? null : e
                }), this._disabledInputs[this._disabledInputs.length] = t
            }
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return !1;
            var t = this._getInst(e);
            if (t.settings.ustrDisabledCheck) return !!t.settings.disabled;
            for (var a = 0; a < this._disabledInputs.length; a++)
                if (this._disabledInputs[a] == e) return !0;
            return !1
        },
        _getInst: function(e) {
            try {
                return $.data(e, PROP_NAME)
            } catch (e) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(e, t, a) {
            var i = this._getInst(e);
            if (2 == arguments.length && "string" == typeof t) return "defaults" == t ? $.extend({}, $.datepicker._defaults) : i ? "all" == t ? $.extend({}, i.settings) : this._get(i, t) : null;
            var r = t || {};
            if ("string" == typeof t && ((r = {})[t] = a), i) {
                this._curInst == i && this._hideDatepicker();
                var s = this._getDateDatepicker(e, !0);
                extendRemove(i.settings, r), this._attachments($(e), i), this._autoSize(i), this._setDateDatepicker(e, s), this._updateDatepicker(i)
            }
        },
        _changeDatepicker: function(e, t, a) {
            this._optionDatepicker(e, t, a)
        },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var a = this._getInst(e);
            a && (this._setDate(a, t), this._updateDatepicker(a), this._updateAlternate(a))
        },
        _getDateDatepicker: function(e, t) {
            var a = this._getInst(e);
            return a && !a.inline && this._setDateFromField(a, t), a ? this._getDate(a) : null
        },
        _doKeyDown: function(e) {
            var t = $.datepicker._getInst(e.target),
                a = !0,
                i = t.dpDiv.is(".ui-datepicker-rtl");
            if (t._keyEvent = !0, $.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    $.datepicker._hideDatepicker(), a = !1;
                    break;
                case 13:
                    var r = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", t.dpDiv);
                    return r[0] ? $.datepicker._selectDay(e.target, t.selectedMonth, t.selectedYear, r[0]) : $.datepicker._hideDatepicker(), !1;
                case 27:
                    $.datepicker._hideDatepicker();
                    break;
                case 33:
                    $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                    break;
                case 34:
                    $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && $.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && $.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, i ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, i ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
                    break;
                default:
                    a = !1
            } else 36 == e.keyCode && e.ctrlKey ? $.datepicker._showDatepicker(this) : a = !1;
            a && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function(e) {
            var t = $.datepicker._getInst(e.target);
            if ($.datepicker._get(t, "constrainInput")) {
                var a = $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")),
                    i = String.fromCharCode(e.charCode == undefined ? e.keyCode : e.charCode);
                return e.ctrlKey || e.metaKey || i < " " || !a || -1 < a.indexOf(i)
            }
        },
        _doKeyUp: function(e) {
            var t = $.datepicker._getInst(e.target);
            if (t.input.val() != t.lastVal) try {
                $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), t.input ? t.input.val() : null, $.datepicker._getFormatConfig(t)) && ($.datepicker._setDateFromField(t), $.datepicker._updateAlternate(t), $.datepicker._updateDatepicker(t))
            } catch (e) {
                $.datepicker.log(e)
            }
            return !0
        },
        _showDatepicker: function(e) {
            if ("input" != (e = e.target || e).nodeName.toLowerCase() && (e = $("input", e.parentNode)[0]), !$.datepicker._isDisabledDatepicker(e) && $.datepicker._lastInput != e) {
                var a = $.datepicker._getInst(e);
                $.datepicker._curInst && $.datepicker._curInst != a && $.datepicker._curInst.dpDiv.stop(!0, !0);
                var t = $.datepicker._get(a, "beforeShow");
                extendRemove(a.settings, t ? t.apply(e, [e, a]) : {}), a.lastVal = null, $.datepicker._lastInput = e, $.datepicker._setDateFromField(a), $.datepicker._inDialog && (e.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(e), $.datepicker._pos[1] += e.offsetHeight);
                var i = !1;
                $(e).parents().each(function() {
                    return !(i |= "fixed" == $(this).css("position"))
                }), i && ustream.browser.opera && ($.datepicker._pos[0] -= document.documentElement.scrollLeft, $.datepicker._pos[1] -= document.documentElement.scrollTop);
                var r = {
                    left: $.datepicker._pos[0],
                    top: $.datepicker._pos[1]
                };
                if ($.datepicker._pos = null, a.dpDiv.empty(), a.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), $.datepicker._updateDatepicker(a), r = $.datepicker._checkOffset(a, r, i), a.dpDiv.css({
                        position: $.datepicker._inDialog && $.blockUI ? "static" : i ? "fixed" : "absolute",
                        display: "none",
                        left: r.left + "px",
                        top: r.top + "px"
                    }), !a.inline) {
                    var s = $.datepicker._get(a, "showAnim"),
                        n = $.datepicker._get(a, "duration"),
                        o = function() {
                            $.datepicker._datepickerShowing = !0;
                            var e = a.dpDiv.find("iframe.ui-datepicker-cover");
                            if (e.length) {
                                var t = $.datepicker._getBorders(a.dpDiv);
                                e.css({
                                    left: -t[0],
                                    top: -t[1],
                                    width: a.dpDiv.outerWidth(),
                                    height: a.dpDiv.outerHeight()
                                })
                            }
                        };
                    a.dpDiv.zIndex(a.settings.zIndex || $(e).zIndex() + 1), $.effects && $.effects[s] ? a.dpDiv.show(s, $.datepicker._get(a, "showOptions"), n, o) : a.dpDiv[s || "show"](s ? n : null, o), s && n || o(), a.input.is(":visible") && !a.input.is(":disabled") && a.input.focus(), $.datepicker._curInst = a
                }
            }
        },
        _updateDatepicker: function(e) {
            var t = this,
                a = $.datepicker._getBorders(e.dpDiv);
            e.dpDiv.empty().append(this._generateHTML(e));
            var i = e.dpDiv.find("iframe.ui-datepicker-cover");
            i.length && i.css({
                left: -a[0],
                top: -a[1],
                width: e.dpDiv.outerWidth(),
                height: e.dpDiv.outerHeight()
            }), e.dpDiv.find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout", function() {
                $(this).removeClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).removeClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).removeClass("ui-datepicker-next-hover")
            }).bind("mouseover", function() {
                t._isDisabledDatepicker(e.inline ? e.dpDiv.parent()[0] : e.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).addClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).addClass("ui-datepicker-next-hover"))
            }).end().find("." + this._dayOverClass + " a").trigger("mouseover").end();
            var r = this._getNumberOfMonths(e),
                s = r[1];
            if (1 < s ? e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", 17 * s + "em") : e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), e.dpDiv[(1 != r[0] || 1 != r[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e == $.datepicker._curInst && $.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] != document.activeElement && e.input.focus(), e.yearshtml) {
                var n = e.yearshtml;
                setTimeout(function() {
                    n === e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), n = e.yearshtml = null
                }, 0)
            }
        },
        _getBorders: function(e) {
            var t = function(e) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                } [e] || e
            };
            return [parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
        },
        _checkOffset: function(e, t, a) {
            var i = e.dpDiv.outerWidth(),
                r = e.dpDiv.outerHeight(),
                s = e.input ? e.input.outerWidth() : 0,
                n = e.input ? e.input.outerHeight() : 0,
                o = document.documentElement.clientWidth + $(document).scrollLeft(),
                d = document.documentElement.clientHeight + $(document).scrollTop();
            return t.left -= this._get(e, "isRTL") ? i - s : 0, t.left -= a && t.left == e.input.offset().left ? $(document).scrollLeft() : 0, t.top -= a && t.top == e.input.offset().top + n ? $(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + i > o && i < o ? Math.abs(t.left + i - o) : 0), t.top -= Math.min(t.top, t.top + r > d && r < d ? Math.abs(r + n) : 0), t
        },
        _findPos: function(e) {
            for (var t = this._getInst(e), a = this._get(t, "isRTL"); e && ("hidden" == e.type || 1 != e.nodeType || $.expr.filters.hidden(e));) e = e[a ? "previousSibling" : "nextSibling"];
            var i = $(e).offset();
            return [i.left, i.top]
        },
        _hideDatepicker: function(e) {
            var t = this._curInst;
            if (t && (!e || t == $.data(e, PROP_NAME)) && this._datepickerShowing) {
                var a = this._get(t, "showAnim"),
                    i = this._get(t, "duration"),
                    r = function() {
                        $.datepicker._tidyDialog(t), this._curInst = null
                    };
                $.effects && $.effects[a] ? t.dpDiv.hide(a, $.datepicker._get(t, "showOptions"), i, r) : t.dpDiv["slideDown" == a ? "slideUp" : "fadeIn" == a ? "fadeOut" : "hide"](a ? i : null, r), a || r();
                var s = this._get(t, "onClose");
                s && s.apply(t.input ? t.input[0] : null, [t.input ? t.input.val() : "", t]), this._datepickerShowing = !1, this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
            }
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(e) {
            if ($.datepicker._curInst) {
                var t = $(e.target);
                t[0].id == $.datepicker._mainDivId || 0 != t.parents("#" + $.datepicker._mainDivId).length || t.hasClass($.datepicker.markerClassName) || t.hasClass($.datepicker._triggerClass) || !$.datepicker._datepickerShowing || $.datepicker._inDialog && $.blockUI || $.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(e, t, a) {
            var i = $(e),
                r = this._getInst(i[0]);
            this._isDisabledDatepicker(i[0]) || (this._adjustInstDate(r, t + ("M" == a ? this._get(r, "showCurrentAtPos") : 0), a), this._updateDatepicker(r))
        },
        _gotoToday: function(e) {
            var t = $(e),
                a = this._getInst(t[0]);
            if (this._get(a, "gotoCurrent") && a.currentDay) a.selectedDay = a.currentDay, a.drawMonth = a.selectedMonth = a.currentMonth, a.drawYear = a.selectedYear = a.currentYear;
            else {
                var i = new Date;
                a.selectedDay = a.currentDay = i.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = i.getMonth(), a.drawYear = a.selectedYear = a.currentYear = i.getFullYear()
            }
            this._notifyChange(a), this._adjustDate(t)
        },
        _selectMonthYear: function(e, t, a) {
            var i = $(e),
                r = this._getInst(i[0]);
            r._selectingMonthYear = !1, r["selected" + ("M" == a ? "Month" : "Year")] = r["draw" + ("M" == a ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(r), this._adjustDate(i)
        },
        _clickMonthYear: function(e) {
            var t = $(e),
                a = this._getInst(t[0]);
            a.input && a._selectingMonthYear && setTimeout(function() {
                a.input.focus()
            }, 0), a._selectingMonthYear = !a._selectingMonthYear
        },
        _selectDay: function(e, t, a, i) {
            var r = $(e);
            if (!$(i).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(r[0])) {
                var s = this._getInst(r[0]);
                s.selectedDay = s.currentDay = $("a", i).html(), s.selectedMonth = s.currentMonth = t, s.selectedYear = s.currentYear = a, this._selectDate(e, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear))
            }
        },
        _clearDate: function(e) {
            var t = $(e);
            this._getInst(t[0]);
            this._selectDate(t, "")
        },
        _selectDate: function(e, t) {
            var a = $(e),
                i = this._getInst(a[0]);
            t = null != t ? t : this._formatDate(i), i.input && i.input.val(t), this._updateAlternate(i);
            var r = this._get(i, "onSelect");
            r ? r.apply(i.input ? i.input[0] : null, [t, i]) : i.input && i.input.trigger("change"), i.inline ? this._updateDatepicker(i) : (this._hideDatepicker(), this._lastInput = i.input[0], "object" != typeof i.input[0] && i.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var t = this._get(e, "altField");
            if (t) {
                var a = this._get(e, "altFormat") || this._get(e, "dateFormat"),
                    i = this._getDate(e),
                    r = this.formatDate(a, i, this._getFormatConfig(e));
                $(t).each(function() {
                    $(this).val(r)
                })
            }
        },
        noWeekends: function(e) {
            var t = e.getDay();
            return [0 < t && t < 6, ""]
        },
        iso8601Week: function(e) {
            var t = new Date(e.getTime());
            t.setDate(t.getDate() + 4 - (t.getDay() || 7));
            var a = t.getTime();
            return t.setMonth(0), t.setDate(1), Math.floor(Math.round((a - t) / 864e5) / 7) + 1
        },
        parseDate: function(a, s, e) {
            if (null == a || null == s) throw "Invalid arguments";
            if ("" == (s = "object" == typeof s ? s.toString() : s + "")) return null;
            var t = (e ? e.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10);
            for (var i = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort, r = (e ? e.dayNames : null) || this._defaults.dayNames, n = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort, o = (e ? e.monthNames : null) || this._defaults.monthNames, d = -1, c = -1, l = -1, u = -1, h = !1, p = function(e) {
                    var t = k + 1 < a.length && a.charAt(k + 1) == e;
                    return t && k++, t
                }, g = function(e) {
                    var t = p(e),
                        a = new RegExp("^\\d{1," + ("@" == e ? 14 : "!" == e ? 20 : "y" == e && t ? 4 : "o" == e ? 3 : 2) + "}"),
                        i = s.substring(D).match(a);
                    if (!i) throw "Missing number at position " + D;
                    return D += i[0].length, parseInt(i[0], 10)
                }, _ = function(e, t, a) {
                    for (var i = p(e) ? a : t, r = 0; r < i.length; r++)
                        if (s.substr(D, i[r].length).toLowerCase() == i[r].toLowerCase()) return D += i[r].length, r + 1;
                    throw "Unknown name at position " + D
                }, f = function() {
                    if (s.charAt(D) != a.charAt(k)) throw "Unexpected literal at position " + D;
                    D++
                }, D = 0, k = 0; k < a.length; k++)
                if (h) "'" != a.charAt(k) || p("'") ? f() : h = !1;
                else switch (a.charAt(k)) {
                    case "d":
                        l = g("d");
                        break;
                    case "D":
                        _("D", i, r);
                        break;
                    case "o":
                        u = g("o");
                        break;
                    case "m":
                        c = g("m");
                        break;
                    case "M":
                        c = _("M", n, o);
                        break;
                    case "y":
                        d = g("y");
                        break;
                    case "@":
                        d = (m = new Date(g("@"))).getFullYear(), c = m.getMonth() + 1, l = m.getDate();
                        break;
                    case "!":
                        var m;
                        d = (m = new Date((g("!") - this._ticksTo1970) / 1e4)).getFullYear(), c = m.getMonth() + 1, l = m.getDate();
                        break;
                    case "'":
                        p("'") ? f() : h = !0;
                        break;
                    default:
                        f()
                }
            if (-1 == d ? d = (new Date).getFullYear() : d < 100 && (d += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d <= t ? 0 : -100)), -1 < u)
                for (c = 1, l = u;;) {
                    var y = this._getDaysInMonth(d, c - 1);
                    if (l <= y) break;
                    c++, l -= y
                }
            if ((m = this._daylightSavingAdjust(new Date(d, c - 1, l))).getFullYear() != d || m.getMonth() + 1 != c || m.getDate() != l) throw "Invalid date";
            return m
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function(a, e, t) {
            if (!e) return "";
            var i = (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort,
                r = (t ? t.dayNames : null) || this._defaults.dayNames,
                s = (t ? t.monthNamesShort : null) || this._defaults.monthNamesShort,
                n = (t ? t.monthNames : null) || this._defaults.monthNames,
                o = function(e) {
                    var t = h + 1 < a.length && a.charAt(h + 1) == e;
                    return t && h++, t
                },
                d = function(e, t, a) {
                    var i = "" + t;
                    if (o(e))
                        for (; i.length < a;) i = "0" + i;
                    return i
                },
                c = function(e, t, a, i) {
                    return o(e) ? i[t] : a[t]
                },
                l = "",
                u = !1;
            if (e)
                for (var h = 0; h < a.length; h++)
                    if (u) "'" != a.charAt(h) || o("'") ? l += a.charAt(h) : u = !1;
                    else switch (a.charAt(h)) {
                        case "d":
                            l += d("d", e.getDate(), 2);
                            break;
                        case "D":
                            l += c("D", e.getDay(), i, r);
                            break;
                        case "o":
                            l += d("o", (e.getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5, 3);
                            break;
                        case "m":
                            l += d("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            l += c("M", e.getMonth(), s, n);
                            break;
                        case "y":
                            l += o("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                            break;
                        case "@":
                            l += e.getTime();
                            break;
                        case "!":
                            l += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            o("'") ? l += "'" : u = !0;
                            break;
                        default:
                            l += a.charAt(h)
                    }
            return l
        },
        _possibleChars: function(a) {
            for (var e = "", t = !1, i = function(e) {
                    var t = r + 1 < a.length && a.charAt(r + 1) == e;
                    return t && r++, t
                }, r = 0; r < a.length; r++)
                if (t) "'" != a.charAt(r) || i("'") ? e += a.charAt(r) : t = !1;
                else switch (a.charAt(r)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        e += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        i("'") ? e += "'" : t = !0;
                        break;
                    default:
                        e += a.charAt(r)
                }
            return e
        },
        _get: function(e, t) {
            return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() != e.lastVal) {
                var a, i, r = this._get(e, "dateFormat"),
                    s = e.lastVal = e.input ? e.input.val() : null;
                a = i = this._getDefaultDate(e);
                var n = this._getFormatConfig(e);
                try {
                    a = this.parseDate(r, s, n) || i
                } catch (e) {
                    this.log(e), s = t ? "" : s
                }
                e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), e.currentDay = s ? a.getDate() : 0, e.currentMonth = s ? a.getMonth() : 0, e.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function(o, e, t) {
            var a, i, r = null == e || "" === e ? t : "string" == typeof e ? function(e) {
                try {
                    return $.datepicker.parseDate($.datepicker._get(o, "dateFormat"), e, $.datepicker._getFormatConfig(o))
                } catch (e) {}
                for (var t = (e.toLowerCase().match(/^c/) ? $.datepicker._getDate(o) : null) || new Date, a = t.getFullYear(), i = t.getMonth(), r = t.getDate(), s = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, n = s.exec(e); n;) {
                    switch (n[2] || "d") {
                        case "d":
                        case "D":
                            r += parseInt(n[1], 10);
                            break;
                        case "w":
                        case "W":
                            r += 7 * parseInt(n[1], 10);
                            break;
                        case "m":
                        case "M":
                            i += parseInt(n[1], 10), r = Math.min(r, $.datepicker._getDaysInMonth(a, i));
                            break;
                        case "y":
                        case "Y":
                            a += parseInt(n[1], 10), r = Math.min(r, $.datepicker._getDaysInMonth(a, i))
                    }
                    n = s.exec(e)
                }
                return new Date(a, i, r)
            }(e) : "number" == typeof e ? isNaN(e) ? t : (a = e, (i = new Date).setDate(i.getDate() + a), i) : new Date(e.getTime());
            return (r = r && "Invalid Date" == r.toString() ? t : r) && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(12 < e.getHours() ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function(e, t, a) {
            var i = !t,
                r = e.selectedMonth,
                s = e.selectedYear,
                n = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = n.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = n.getMonth(), e.drawYear = e.selectedYear = e.currentYear = n.getFullYear(), r == e.selectedMonth && s == e.selectedYear || a || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(i ? "" : this._formatDate(e))
        },
        _getDate: function(e) {
            return !e.currentYear || e.input && "" == e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay))
        },
        _getContolButton: function(e, t) {
            return e.inline ? "" : '<button type="button" class="button small ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + t + '.datepicker._hideDatepicker();">' + this._get(e, "closeText") + "</button>"
        },
        _getButtonPanel: function(e, t, a, i, r, s, n) {
            return e ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (t ? a : "") + (this._isInRange(s, i) ? '<button type="button" class="button ui-datepicker-current button-small ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + n + ".datepicker._gotoToday('#" + s.id + "');\">" + r + "</button>" : "") + (t ? "" : a) + "</div>" : ""
        },
        _generateHTML: function(e) {
            var t = new Date;
            t = this._daylightSavingAdjust(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
            var a = this._get(e, "isRTL"),
                i = this._get(e, "showButtonPanel"),
                r = this._get(e, "hideIfNoPrevNext"),
                s = this._get(e, "navigationAsDateFormat"),
                n = this._getNumberOfMonths(e),
                o = this._get(e, "showCurrentAtPos"),
                d = this._get(e, "stepMonths"),
                c = 1 != n[0] || 1 != n[1],
                l = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                u = this._getMinMaxDate(e, "min"),
                h = this._getMinMaxDate(e, "max"),
                p = e.drawMonth - o,
                g = e.drawYear;
            if (p < 0 && (p += 12, g--), h) {
                var _ = this._daylightSavingAdjust(new Date(h.getFullYear(), h.getMonth() - n[0] * n[1] + 1, h.getDate()));
                for (_ = u && _ < u ? u : _; this._daylightSavingAdjust(new Date(g, p, 1)) > _;) --p < 0 && (p = 11, g--)
            }
            e.drawMonth = p, e.drawYear = g;
            var f = this._get(e, "prevText");
            f = s ? this.formatDate(f, this._daylightSavingAdjust(new Date(g, p - d, 1)), this._getFormatConfig(e)) : f;
            var D = this._canAdjustMonth(e, -1, g, p) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._adjustDate('#" + e.id + "', -" + d + ", 'M');\" title=\"" + f + '"><span class="ui-icon ui-icon-circle-triangle-' + (a ? "e" : "w") + '">' + f + "</span></a>" : r ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + f + '"><span class="ui-icon ui-icon-circle-triangle-' + (a ? "e" : "w") + '">' + f + "</span></a>",
                k = this._get(e, "nextText");
            k = s ? this.formatDate(k, this._daylightSavingAdjust(new Date(g, p + d, 1)), this._getFormatConfig(e)) : k;
            var m = this._canAdjustMonth(e, 1, g, p) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._adjustDate('#" + e.id + "', +" + d + ", 'M');\" title=\"" + k + '"><span class="ui-icon ui-icon-circle-triangle-' + (a ? "w" : "e") + '">' + k + "</span></a>" : r ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + k + '"><span class="ui-icon ui-icon-circle-triangle-' + (a ? "w" : "e") + '">' + k + "</span></a>",
                y = this._get(e, "currentText"),
                v = this._get(e, "gotoCurrent") && e.currentDay ? l : t;
            y = s ? this.formatDate(y, v, this._getFormatConfig(e)) : y;
            var M = this._getContolButton(e, dpuuid),
                $ = this._getButtonPanel(i, a, M, v, y, e, dpuuid),
                b = parseInt(this._get(e, "firstDay"), 10);
            b = isNaN(b) ? 0 : b;
            for (var w = this._get(e, "showWeek"), C = this._get(e, "dayNames"), I = (this._get(e, "dayNamesShort"), this._get(e, "dayNamesMin")), Y = this._get(e, "monthNames"), N = this._get(e, "monthNamesShort"), x = this._get(e, "beforeShowDay"), S = this._get(e, "showOtherMonths"), T = this._get(e, "selectOtherMonths"), A = (this._get(e, "calculateWeek") || this.iso8601Week, this._getDefaultDate(e)), F = "", j = 0; j < n[0]; j++) {
                for (var P = "", O = 0; O < n[1]; O++) {
                    var K = this._daylightSavingAdjust(new Date(g, p, e.selectedDay)),
                        R = " ui-corner-all",
                        E = "";
                    if (c) {
                        if (E += '<div class="ui-datepicker-group', 1 < n[1]) switch (O) {
                            case 0:
                                E += " ui-datepicker-group-first", R = " ui-corner-" + (a ? "right" : "left");
                                break;
                            case n[1] - 1:
                                E += " ui-datepicker-group-last", R = " ui-corner-" + (a ? "left" : "right");
                                break;
                            default:
                                E += " ui-datepicker-group-middle", R = ""
                        }
                        E += '">'
                    }
                    E += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + R + '">' + (/all|left/.test(R) && 0 == j ? a ? m : D : "") + (/all|right/.test(R) && 0 == j ? a ? D : m : "") + this._generateMonthYearHeader(e, p, g, u, h, 0 < j || 0 < O, Y, N) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                    for (var W = w ? '<th class="ui-datepicker-week-col">' + this._get(e, "weekHeader") + "</th>" : "", L = 0; L < 7; L++) {
                        var H = (L + b) % 7;
                        W += "<th" + (5 <= (L + b + 6) % 7 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + C[H] + '">' + I[H] + "</span></th>"
                    }
                    E += W + "</tr></thead><tbody>";
                    var z = this._getDaysInMonth(g, p);
                    g == e.selectedYear && p == e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, z));
                    for (var B = (this._getFirstDayOfMonth(g, p) - b + 7) % 7, Q = c ? 6 : Math.ceil((B + z) / 7), U = this._daylightSavingAdjust(new Date(g, p, 1 - B)), V = 0; V < Q; V++) {
                        E += "<tr>";
                        var J = w ? '<td class="ui-datepicker-week-col">' + this._get(e, "calculateWeek")(U) + "</td>" : "";
                        for (L = 0; L < 7; L++) {
                            var X = x ? x.apply(e.input ? e.input[0] : null, [U]) : [!0, ""],
                                Z = U.getMonth() != p,
                                q = Z && !T || !X[0] || u && U < u || h && h < U;
                            J += '<td class="' + (5 <= (L + b + 6) % 7 ? " ui-datepicker-week-end" : "") + (Z ? " ui-datepicker-other-month" : "") + (U.getTime() == K.getTime() && p == e.selectedMonth && e._keyEvent || A.getTime() == U.getTime() && A.getTime() == K.getTime() ? " " + this._dayOverClass : "") + (q ? " " + this._unselectableClass + " ui-state-disabled" : "") + (Z && !S ? "" : " " + X[1] + (U.getTime() == l.getTime() ? " " + this._currentClass : "") + (U.getTime() == t.getTime() ? " ui-datepicker-today" : "")) + '"' + (Z && !S || !X[2] ? "" : ' title="' + X[2] + '"') + (q ? "" : ' onclick="DP_jQuery_' + dpuuid + ".datepicker._selectDay('#" + e.id + "'," + U.getMonth() + "," + U.getFullYear() + ', this);return false;"') + ">" + (Z && !S ? "&#xa0;" : q ? '<span class="ui-state-default">' + U.getDate() + "</span>" : '<a class="ui-state-default' + (U.getTime() == t.getTime() ? " ui-state-highlight" : "") + (U.getTime() == l.getTime() ? " ui-state-active" : "") + (Z ? " ui-priority-secondary" : "") + '" href="#">' + U.getDate() + "</a>") + "</td>", U.setDate(U.getDate() + 1), U = this._daylightSavingAdjust(U)
                        }
                        E += J + "</tr>"
                    }
                    11 < ++p && (p = 0, g++), P += E += "</tbody></table>" + (c ? "</div>" + (0 < n[0] && O == n[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : "")
                }
                F += P
            }
            return F += $ + (ustream.browser.msie && parseInt(ustream.browser.version, 10) < 7 && !e.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), e._keyEvent = !1, F
        },
        _generateMonthYearHeader: function(e, t, a, i, r, s, n, o) {
            var d = this._get(e, "changeMonth"),
                c = this._get(e, "changeYear"),
                l = this._get(e, "showMonthAfterYear"),
                u = '<div class="ui-datepicker-title">',
                h = "";
            if (s || !d) h += '<span class="ui-datepicker-month">' + n[t] + "</span>";
            else {
                var p = i && i.getFullYear() == a,
                    g = r && r.getFullYear() == a;
                h += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + dpuuid + ".datepicker._selectMonthYear('#" + e.id + "', this, 'M');\" onclick=\"DP_jQuery_" + dpuuid + ".datepicker._clickMonthYear('#" + e.id + "');\">";
                for (var _ = 0; _ < 12; _++)(!p || _ >= i.getMonth()) && (!g || _ <= r.getMonth()) && (h += '<option value="' + _ + '"' + (_ == t ? ' selected="selected"' : "") + ">" + o[_] + "</option>");
                h += "</select>"
            }
            if (l || (u += h + (!s && d && c ? "" : "&#xa0;")), e.yearshtml = "", s || !c) u += '<span class="ui-datepicker-year">' + a + "</span>";
            else {
                var f = this._get(e, "yearRange").split(":"),
                    D = (new Date).getFullYear(),
                    k = function(e) {
                        var t = e.match(/c[+-].*/) ? a + parseInt(e.substring(1), 10) : e.match(/[+-].*/) ? D + parseInt(e, 10) : parseInt(e, 10);
                        return isNaN(t) ? D : t
                    },
                    m = k(f[0]),
                    y = Math.max(m, k(f[1] || ""));
                for (m = i ? Math.max(m, i.getFullYear()) : m, y = r ? Math.min(y, r.getFullYear()) : y, e.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + dpuuid + ".datepicker._selectMonthYear('#" + e.id + "', this, 'Y');\" onclick=\"DP_jQuery_" + dpuuid + ".datepicker._clickMonthYear('#" + e.id + "');\">"; m <= y; m++) e.yearshtml += '<option value="' + m + '"' + (m == a ? ' selected="selected"' : "") + ">" + m + "</option>";
                e.yearshtml += "</select>", ustream.browser.mozilla ? u += '<select class="ui-datepicker-year"><option value="' + a + '" selected="selected">' + a + "</option></select>" : (u += e.yearshtml, e.yearshtml = null)
            }
            return u += this._get(e, "yearSuffix"), l && (u += (!s && d && c ? "" : "&#xa0;") + h), u += "</div>"
        },
        _adjustInstDate: function(e, t, a) {
            var i = e.drawYear + ("Y" == a ? t : 0),
                r = e.drawMonth + ("M" == a ? t : 0),
                s = Math.min(e.selectedDay, this._getDaysInMonth(i, r)) + ("D" == a ? t : 0),
                n = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(i, r, s)));
            e.selectedDay = n.getDate(), e.drawMonth = e.selectedMonth = n.getMonth(), e.drawYear = e.selectedYear = n.getFullYear(), "M" != a && "Y" != a || this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var a = this._getMinMaxDate(e, "min"),
                i = this._getMinMaxDate(e, "max"),
                r = a && t < a ? a : t;
            return r = i && i < r ? i : r
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function(e, t) {
            return new Date(e, t, 1).getDay()
        },
        _canAdjustMonth: function(e, t, a, i) {
            var r = this._getNumberOfMonths(e),
                s = this._daylightSavingAdjust(new Date(a, i + (t < 0 ? t : r[0] * r[1]), 1));
            return t < 0 && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
        },
        _isInRange: function(e, t) {
            var a = this._getMinMaxDate(e, "min"),
                i = this._getMinMaxDate(e, "max");
            return (!a || t.getTime() >= a.getTime()) && (!i || t.getTime() <= i.getTime())
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return {
                shortYearCutoff: t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10),
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function(e, t, a, i) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var r = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(i, a, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), r, this._getFormatConfig(e))
        }
    }), $.fn.datepicker = function(e) {
        if (!this.length) return this;
        $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv), $.datepicker.initialized = !0);
        var t = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" != e && "getDate" != e && "widget" != e ? "option" == e && 2 == arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t)) : this.each(function() {
            "string" == typeof e ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this].concat(t)) : $.datepicker._attachDatepicker(this, e)
        }) : $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t))
    }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "@VERSION", window["DP_jQuery_" + dpuuid] = $
}(jQuery),
function(r, e) {
    r.datepicker._u_attachDatepicker = r.datepicker._attachDatepicker, r.datepicker._attachDatepicker = function(e, t) {
        r(e).siblings(".icon").text((new Date).getDate()).on("click", function() {
            e.focus()
        }), r.datepicker._u_attachDatepicker(e, t)
    }, r.datepicker._gotoToday = function(e) {
        var t = r(e),
            a = this._getInst(t[0]);
        if (this._get(a, "gotoCurrent") && a.currentDay) a.selectedDay = a.currentDay, a.drawMonth = a.selectedMonth = a.currentMonth, a.drawYear = a.selectedYear = a.currentYear;
        else {
            var i = new Date;
            a.selectedDay = a.currentDay = i.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = i.getMonth(), a.drawYear = a.selectedYear = a.currentYear = i.getFullYear()
        }
        this._notifyChange(a), this._adjustDate(t), this._selectDate(e, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)), t.blur()
    }, r.datepicker._getButtonPanel = function(e, t, a, i, r, s, n) {
        return e ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (t ? a : "") + (this._isInRange(s, i) ? '<a class=" ui-datepicker-current  ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + n + ".datepicker._gotoToday('#" + s.id + "');return false;\">" + r + "</a>" : "") + (t ? "" : a) + "</div>" : ""
    }
}(jQuery);
! function($) {
    var _t_ = function(e, t, i) {
        "object" != typeof t || i || (i = t, t = null);
        var s = t || ustream.labels[e];
        return s ? i && (s = ustream.framework.stringUtils.labelSubst(s, i)) : s = e.toUpperCase(), s
    };

    function Timepicker() {
        this.regional = [], this.regional[""] = {
            currentText: _t_("js.v3.datepicker.now"),
            closeText: _t_("js.v3.datepicker.closetext"),
            timeFormat: _t_("js.v3.datepicker.timeformat"),
            ampm: !!_t_("js.v3.datepicker.timeformat").match(/TT?|tt?/g),
            timeOnlyTitle: _t_("js.v3.datepicker.choose_time"),
            timeText: _t_("js.v3.datepicker.time"),
            hourText: _t_("js.v3.datepicker.time_hour"),
            minuteText: _t_("js.v3.datepicker.time_minute"),
            secondText: _t_("js.v3.datepicker.time_second")
        }, this._defaults = {
            showButtonPanel: !0,
            timeOnly: !1,
            showHour: !0,
            showMinute: !0,
            showSecond: !1,
            showTime: !0,
            stepHour: .05,
            stepMinute: .05,
            stepSecond: .05,
            hour: 0,
            minute: 0,
            second: 0,
            hourMin: 0,
            minuteMin: 0,
            secondMin: 0,
            hourMax: 23,
            minuteMax: 59,
            secondMax: 59,
            minDateTime: null,
            maxDateTime: null,
            hourGrid: 0,
            minuteGrid: 0,
            secondGrid: 0,
            alwaysSetTime: !0,
            separator: " ",
            altFieldTimeOnly: !0,
            showTimepicker: !0
        }, $.extend(this._defaults, this.regional[""])
    }

    function extendRemove(e, t) {
        for (var i in $.extend(e, t), t) null !== t[i] && void 0 !== t[i] || (e[i] = t[i]);
        return e
    }
    $.extend($.ui, {
        timepicker: {
            version: "0.9.3"
        }
    }), $.extend(Timepicker.prototype, {
        $input: null,
        $altInput: null,
        $timeObj: null,
        inst: null,
        hour_slider: null,
        minute_slider: null,
        second_slider: null,
        hour: 0,
        minute: 0,
        second: 0,
        hourMinOriginal: null,
        minuteMinOriginal: null,
        secondMinOriginal: null,
        hourMaxOriginal: null,
        minuteMaxOriginal: null,
        secondMaxOriginal: null,
        ampm: "",
        formattedDate: "",
        formattedTime: "",
        formattedDateTime: "",
        setDefaults: function(e) {
            return extendRemove(this._defaults, e || {}), this
        },
        _newInst: function($input, o) {
            var tp_inst = new Timepicker,
                inlineSettings = {};
            for (var attrName in tp_inst.hour = tp_inst._defaults.hour, tp_inst.minute = tp_inst._defaults.minute, tp_inst.second = tp_inst._defaults.second, tp_inst.ampm = "", tp_inst.$input = $input, this._defaults) {
                var attrValue = $input.attr("time:" + attrName);
                if (attrValue) try {
                    inlineSettings[attrName] = eval(attrValue)
                } catch (e) {
                    inlineSettings[attrName] = attrValue
                }
            }
            return tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, o, {
                beforeShow: function(e, t) {
                    $.isFunction(o.beforeShow) && o.beforeShow(e, t, tp_inst)
                },
                onChangeMonthYear: function(e, t, i) {
                    tp_inst._updateDateTime(i), $.isFunction(o.onChangeMonthYear) && o.onChangeMonthYear(e, t, i, tp_inst)
                },
                onClose: function(e, t) {
                    !0 === tp_inst.timeDefined && "" != $input.val() && tp_inst._updateDateTime(t), $.isFunction(o.onClose) && o.onClose(e, t, tp_inst)
                },
                timepicker: tp_inst
            }), o.altField && (tp_inst.$altInput = $(o.altField).css({
                cursor: "pointer"
            }).focus(function() {
                $input.trigger("focus")
            })), void 0 !== tp_inst._defaults.minDate && tp_inst._defaults.minDate instanceof Date && (tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime())), void 0 !== tp_inst._defaults.minDateTime && tp_inst._defaults.minDateTime instanceof Date && (tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime())), void 0 !== tp_inst._defaults.maxDate && tp_inst._defaults.maxDate instanceof Date && (tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime())), void 0 !== tp_inst._defaults.maxDateTime && tp_inst._defaults.maxDateTime instanceof Date && (tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime())), tp_inst
        },
        _addTimePicker: function(e) {
            var t = this.$altInput && this._defaults.altFieldTimeOnly ? this.$input.val() + " " + this.$altInput.val() : this.$input.val();
            this.timeDefined = this._parseTime(t), this._limitMinMaxDateTime(e, !1), this._injectTimePicker()
        },
        _parseTime: function(e, t) {
            var i, s = this._defaults.timeFormat.toString().replace(/h{1,2}/gi, "(\\d?\\d)").replace(/m{1,2}/gi, "(\\d?\\d)").replace(/s{1,2}/gi, "(\\d?\\d)").replace(/t{1,2}/gi, "(am|pm|a|p)?").replace(/\s/g, "\\s?") + "$",
                a = this._getFormatPositions();
            (this.inst || (this.inst = $.datepicker._getInst(this.$input[0])), t || !this._defaults.timeOnly) && (s = ".{" + $.datepicker._get(this.inst, "dateFormat").length + ",}" + this._defaults.separator + s);
            return !!(i = e.match(new RegExp(s, "i"))) && (-1 !== a.t && (this.ampm = (void 0 === i[a.t] || 0 === i[a.t].length ? "" : "A" == i[a.t].charAt(0).toUpperCase() ? "AM" : "PM").toUpperCase()), -1 !== a.h && ("AM" == this.ampm && "12" == i[a.h] ? this.hour = 0 : "PM" == this.ampm && "12" != i[a.h] ? this.hour = (parseFloat(i[a.h]) + 12).toFixed(0) : this.hour = Number(i[a.h])), -1 !== a.m && (this.minute = Number(i[a.m])), -1 !== a.s && (this.second = Number(i[a.s])), !0)
        },
        _getFormatPositions: function() {
            var e = this._defaults.timeFormat.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|t{1,2})/g),
                t = {
                    h: -1,
                    m: -1,
                    s: -1,
                    t: -1
                };
            if (e)
                for (var i = 0; i < e.length; i++) - 1 == t[e[i].toString().charAt(0)] && (t[e[i].toString().charAt(0)] = i + 1);
            return t
        },
        _injectTimePicker: function() {
            var e = this.inst.dpDiv,
                s = this._defaults,
                a = this,
                t = (s.hourMax - s.hourMax % s.stepHour).toFixed(0),
                i = (s.minuteMax - s.minuteMax % s.stepMinute).toFixed(0),
                n = (s.secondMax - s.secondMax % s.stepSecond).toFixed(0),
                r = this.inst.id.toString().replace(/([^A-Za-z0-9_])/g, "");
            if (0 === e.find("div#ui-timepicker-div-" + r).length && s.showTimepicker) {
                var d, o = ' style="display:none;"',
                    u = '<div class="ui-timepicker-div" id="ui-timepicker-div-' + r + '"><dl><dt class="ui_tpicker_time_label" id="ui_tpicker_time_label_' + r + '"' + (s.showTime ? "" : o) + ">" + s.timeText + '</dt><dd class="ui_tpicker_time" id="ui_tpicker_time_' + r + '"' + (s.showTime ? "" : o) + '></dd><dt class="ui_tpicker_hour_label" id="ui_tpicker_hour_label_' + r + '"' + (s.showHour ? "" : o) + ">" + s.hourText + "</dt>",
                    l = 0,
                    h = 0,
                    c = 0;
                if (s.showHour && 0 < s.hourGrid) {
                    u += '<dd class="ui_tpicker_hour"><div id="ui_tpicker_hour_' + r + '"' + (s.showHour ? "" : o) + '></div><div style="padding-left: 1px"><table><tr>';
                    for (var m = s.hourMin; m < t; m += s.hourGrid) {
                        l++;
                        var _ = s.ampm && 12 < m ? m - 12 : m;
                        _ < 10 && (_ = "0" + _), s.ampm && (0 == m ? _ = "12a" : _ += m < 12 ? "a" : "p"), u += "<td>" + _ + "</td>"
                    }
                    u += "</tr></table></div></dd>"
                } else u += '<dd class="ui_tpicker_hour" id="ui_tpicker_hour_' + r + '"' + (s.showHour ? "" : o) + "></dd>";
                if (u += '<dt class="ui_tpicker_minute_label" id="ui_tpicker_minute_label_' + r + '"' + (s.showMinute ? "" : o) + ">" + s.minuteText + "</dt>", s.showMinute && 0 < s.minuteGrid) {
                    u += '<dd class="ui_tpicker_minute ui_tpicker_minute_' + s.minuteGrid + '"><div id="ui_tpicker_minute_' + r + '"' + (s.showMinute ? "" : o) + '></div><div style="padding-left: 1px"><table><tr>';
                    for (var p = s.minuteMin; p < i; p += s.minuteGrid) h++, u += "<td>" + (p < 10 ? "0" : "") + p + "</td>";
                    u += "</tr></table></div></dd>"
                } else u += '<dd class="ui_tpicker_minute" id="ui_tpicker_minute_' + r + '"' + (s.showMinute ? "" : o) + "></dd>";
                if (u += '<dt class="ui_tpicker_second_label" id="ui_tpicker_second_label_' + r + '"' + (s.showSecond ? "" : o) + ">" + s.secondText + "</dt>", s.showSecond && 0 < s.secondGrid) {
                    u += '<dd class="ui_tpicker_second ui_tpicker_second_' + s.secondGrid + '"><div id="ui_tpicker_second_' + r + '"' + (s.showSecond ? "" : o) + '></div><div style="padding-left: 1px"><table><tr>';
                    for (var f = s.secondMin; f < n; f += s.secondGrid) c++, u += "<td>" + (f < 10 ? "0" : "") + f + "</td>";
                    u += "</tr></table></div></dd>"
                } else u += '<dd class="ui_tpicker_second" id="ui_tpicker_second_' + r + '"' + (s.showSecond ? "" : o) + "></dd>";
                u += "</dl></div>", $tp = $(u), !0 === s.timeOnly && ($tp.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all"><div class="ui-datepicker-title">' + s.timeOnlyTitle + "</div></div>"), e.find(".ui-datepicker-header, .ui-datepicker-calendar").hide()), this.hour_slider = $tp.find("#ui_tpicker_hour_" + r).slider({
                    orientation: "horizontal",
                    value: this.hour,
                    min: s.hourMin,
                    max: t,
                    step: s.stepHour,
                    slide: function(e, t) {
                        a.hour_slider.slider("option", "value", t.value), a._onTimeChange()
                    }
                }), this.minute_slider = $tp.find("#ui_tpicker_minute_" + r).slider({
                    orientation: "horizontal",
                    value: this.minute,
                    min: s.minuteMin,
                    max: i,
                    step: s.stepMinute,
                    slide: function(e, t) {
                        a.minute_slider.slider("option", "value", t.value), a._onTimeChange()
                    }
                }), this.second_slider = $tp.find("#ui_tpicker_second_" + r).slider({
                    orientation: "horizontal",
                    value: this.second,
                    min: s.secondMin,
                    max: n,
                    step: s.stepSecond,
                    slide: function(e, t) {
                        a.second_slider.slider("option", "value", t.value), a._onTimeChange()
                    }
                }), s.showHour && 0 < s.hourGrid && (d = 100 * l * s.hourGrid / (t - s.hourMin), $tp.find(".ui_tpicker_hour table").css({
                    width: d + "%",
                    marginLeft: d / (-2 * l) + "%",
                    borderCollapse: "collapse"
                }).find("td").each(function(e) {
                    $(this).click(function() {
                        var e = $(this).html();
                        if (s.ampm) {
                            var t = e.substring(2).toLowerCase(),
                                i = parseInt(e.substring(0, 2));
                            e = "a" == t ? 12 == i ? 0 : i : 12 == i ? 12 : i + 12
                        }
                        a.hour_slider.slider("option", "value", e), a._onTimeChange()
                    }).css({
                        cursor: "pointer",
                        width: 100 / l + "%",
                        textAlign: "center",
                        overflow: "hidden"
                    })
                })), s.showMinute && 0 < s.minuteGrid && (d = 100 * h * s.minuteGrid / (i - s.minuteMin), $tp.find(".ui_tpicker_minute table").css({
                    width: d + "%",
                    marginLeft: d / (-2 * h) + "%",
                    borderCollapse: "collapse"
                }).find("td").each(function(e) {
                    $(this).click(function() {
                        a.minute_slider.slider("option", "value", $(this).html()), a._onTimeChange()
                    }).css({
                        cursor: "pointer",
                        width: 100 / h + "%",
                        textAlign: "center",
                        overflow: "hidden"
                    })
                })), s.showSecond && 0 < s.secondGrid && $tp.find(".ui_tpicker_second table").css({
                    width: d + "%",
                    marginLeft: d / (-2 * c) + "%",
                    borderCollapse: "collapse"
                }).find("td").each(function(e) {
                    $(this).click(function() {
                        a.second_slider.slider("option", "value", $(this).html()), a._onTimeChange()
                    }).css({
                        cursor: "pointer",
                        width: 100 / c + "%",
                        textAlign: "center",
                        overflow: "hidden"
                    })
                });
                var g = e.find(".ui-datepicker-buttonpane");
                if (g.length ? g.before($tp) : e.append($tp), this.$timeObj = $("#ui_tpicker_time_" + r), null !== this.inst) {
                    var k = this.timeDefined;
                    this._onTimeChange(), this.timeDefined = k
                }
                var v = a._defaults.onSelect;
                if (v) {
                    var M = a.$input ? a.$input[0] : null,
                        T = function() {
                            v.apply(M, [a.formattedDateTime, a])
                        };
                    this.hour_slider.bind("slidestop", T), this.minute_slider.bind("slidestop", T), this.second_slider.bind("slidestop", T)
                }
            }
        },
        _limitMinMaxDateTime: function(e, t) {
            var i = this._defaults,
                s = new Date(e.selectedYear, e.selectedMonth, e.selectedDay);
            new Date(e.selectedYear, e.selectedMonth, e.selectedDay, this.hour, this.minute, this.second, 0);
            if (null !== this._defaults.minDateTime && s) {
                var a = this._defaults.minDateTime,
                    n = new Date(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0, 0);
                null !== this.hourMinOriginal && null !== this.minuteMinOriginal && null !== this.secondMinOriginal || (this.hourMinOriginal = i.hourMin, this.minuteMinOriginal = i.minuteMin, this.secondMinOriginal = i.secondMin), n.getTime() == s.getTime() ? (this._defaults.hourMin = a.getHours(), this._defaults.minuteMin = a.getMinutes(), this._defaults.secondMin = a.getSeconds(), this.hour < this._defaults.hourMin && (this.hour = this._defaults.hourMin), this.minute < this._defaults.minuteMin && (this.minute = this._defaults.minuteMin), this.second < this._defaults.secondMin && (this.second = this._defaults.secondMin)) : (this._defaults.hourMin = this.hourMinOriginal, this._defaults.minuteMin = this.minuteMinOriginal, this._defaults.secondMin = this.secondMinOriginal)
            }
            if (null !== this._defaults.maxDateTime && s) {
                var r = this._defaults.maxDateTime,
                    d = new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0, 0);
                null !== this.hourMaxOriginal && null !== this.minuteMaxOriginal && null !== this.secondMaxOriginal || (this.hourMaxOriginal = i.hourMax, this.minuteMaxOriginal = i.minuteMax, this.secondMaxOriginal = i.secondMax), d.getTime() == s.getTime() ? (this._defaults.hourMax = r.getHours(), this._defaults.minuteMax = r.getMinutes(), this._defaults.secondMax = r.getSeconds(), this.hour > this._defaults.hourMax && (this.hour = this._defaults.hourMax), this.minute > this._defaults.minuteMax && (this.minute = this._defaults.minuteMax), this.second > this._defaults.secondMax && (this.second = this._defaults.secondMax)) : (this._defaults.hourMax = this.hourMaxOriginal, this._defaults.minuteMax = this.minuteMaxOriginal, this._defaults.secondMax = this.secondMaxOriginal)
            }
            void 0 !== t && !0 === t && (this.hour_slider.slider("option", {
                min: this._defaults.hourMin,
                max: this._defaults.hourMax
            }).slider("value", this.hour), this.minute_slider.slider("option", {
                min: this._defaults.minuteMin,
                max: this._defaults.minuteMax
            }).slider("value", this.minute), this.second_slider.slider("option", {
                min: this._defaults.secondMin,
                max: this._defaults.secondMax
            }).slider("value", this.second))
        },
        _onTimeChange: function() {
            var e = !!this.hour_slider && this.hour_slider.slider("value"),
                t = !!this.minute_slider && this.minute_slider.slider("value"),
                i = !!this.second_slider && this.second_slider.slider("value");
            !1 !== e && (e = parseInt(e, 10)), !1 !== t && (t = parseInt(t, 10)), !1 !== i && (i = parseInt(i, 10));
            var s = e < 12 ? "AM" : "PM",
                a = e != this.hour || t != this.minute || i != this.second || 0 < this.ampm.length && this.ampm != s;
            a && (!1 !== e && (this.hour = e), !1 !== t && (this.minute = t), !1 !== i && (this.second = i)), this._defaults.ampm && (this.ampm = s), this._formatTime(), this.$timeObj && this.$timeObj.text(this.formattedTime), this.timeDefined = !0, a && this._updateDateTime(), this._limitMinMaxDateTime(this, !0)
        },
        _formatTime: function(e, t, i) {
            null == i && (i = this._defaults.ampm), e = e || {
                hour: this.hour,
                minute: this.minute,
                second: this.second,
                ampm: this.ampm
            };
            var s = t || this._defaults.timeFormat.toString();
            if (i) {
                var a = "AM" == e.ampm ? e.hour : e.hour % 12;
                a = 0 === Number(a) ? 12 : a, s = s.toString().replace(/hh/g, (a < 10 ? "0" : "") + a).replace(/h/g, a).replace(/mm/g, (e.minute < 10 ? "0" : "") + e.minute).replace(/m/g, e.minute).replace(/ss/g, (e.second < 10 ? "0" : "") + e.second).replace(/s/g, e.second).replace(/TT/g, e.ampm.toUpperCase()).replace(/tt/g, e.ampm.toLowerCase()).replace(/T/g, e.ampm.charAt(0).toUpperCase()).replace(/t/g, e.ampm.charAt(0).toLowerCase())
            } else s = s.toString().replace(/hh/g, (e.hour < 10 ? "0" : "") + e.hour).replace(/h/g, e.hour).replace(/mm/g, (e.minute < 10 ? "0" : "") + e.minute).replace(/m/g, e.minute).replace(/ss/g, (e.second < 10 ? "0" : "") + e.second).replace(/s/g, e.second), s = $.trim(s.replace(/t/gi, ""));
            if (arguments.length) return s;
            this.formattedTime = s
        },
        _updateDateTime: function(e) {
            e = this.inst || e, dt = new Date(e.selectedYear, e.selectedMonth, e.selectedDay), dateFmt = $.datepicker._get(e, "dateFormat"), formatCfg = $.datepicker._getFormatConfig(e), timeAvailable = null !== dt && this.timeDefined, this.formattedDate = $.datepicker.formatDate(dateFmt, null === dt ? new Date : dt, formatCfg);
            var t = this.formattedDate;
            void 0 !== e.lastVal && 0 < e.lastVal.length && 0 === this.$input.val().length || (!0 === this._defaults.timeOnly ? t = this.formattedTime : !0 !== this._defaults.timeOnly && (this._defaults.alwaysSetTime || timeAvailable) && (t += this._defaults.separator + this.formattedTime), this.formattedDateTime = t, this._defaults.showTimepicker ? this.$altInput && !0 === this._defaults.altFieldTimeOnly ? (this.$altInput.val(this.formattedTime), this.$input.val(this.formattedDate)) : (this.$altInput && this.$altInput.val(t), this.$input.val(t)) : this.$input.val(this.formattedDate), this.$input.trigger("change"))
        }
    }), $.fn.extend({
        timepicker: function(e) {
            var t = arguments;
            return "object" == typeof(e = e || {}) && (t[0] = $.extend(e, {
                timeOnly: !0
            })), $(this).each(function() {
                $.fn.datetimepicker.apply($(this), t)
            })
        },
        datetimepicker: function(t) {
            var i = arguments;
            return "string" == typeof(t = t || {}) ? "getDate" == t ? $.fn.datepicker.apply($(this[0]), i) : this.each(function() {
                var e = $(this);
                e.datepicker.apply(e, i)
            }) : this.each(function() {
                var e = $(this);
                e.datepicker($.timepicker._newInst(e, t)._defaults)
            })
        }
    }), $.datepicker._base_selectDate = $.datepicker._selectDate, $.datepicker._selectDate = function(e, t) {
        var i = this._getInst($(e)[0]),
            s = this._get(i, "timepicker");
        s ? (s._limitMinMaxDateTime(i, !0), i.inline = i.stay_open = !0, this._base_selectDate(e, t + s._defaults.separator + s.formattedTime), i.inline = i.stay_open = !1, this._notifyChange(i), this._updateDatepicker(i)) : this._base_selectDate(e, t)
    }, $.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker, $.datepicker._updateDatepicker = function(e) {
        if ("boolean" != typeof e.stay_open || !1 === e.stay_open) {
            this._base_updateDatepicker(e);
            var t = this._get(e, "timepicker");
            t && t._addTimePicker(e)
        }
    }, $.datepicker._base_doKeyPress = $.datepicker._doKeyPress, $.datepicker._doKeyPress = function(e) {
        var t = $.datepicker._getInst(e.target),
            i = $.datepicker._get(t, "timepicker");
        if (i && $.datepicker._get(t, "constrainInput")) {
            var s = i._defaults.ampm,
                a = i._defaults.timeFormat.toString().replace(/[hms]/g, "").replace(/TT/g, s ? "APM" : "").replace(/T/g, s ? "AP" : "").replace(/tt/g, s ? "apm" : "").replace(/t/g, s ? "ap" : "") + " " + i._defaults.separator + $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")),
                n = String.fromCharCode(void 0 === e.charCode ? e.keyCode : e.charCode);
            return e.ctrlKey || n < " " || !a || -1 < a.indexOf(n)
        }
        return $.datepicker._base_doKeyPress(e)
    }, $.datepicker._base_doKeyUp = $.datepicker._doKeyUp, $.datepicker._doKeyUp = function(e) {
        var t = $.datepicker._getInst(e.target),
            i = $.datepicker._get(t, "timepicker");
        if (i && i._defaults.timeOnly && t.input.val() != t.lastVal) try {
            $.datepicker._updateDatepicker(t)
        } catch (e) {
            $.datepicker.log(e)
        }
        return $.datepicker._base_doKeyUp(e)
    }, $.datepicker._base_gotoToday = $.datepicker._gotoToday, $.datepicker._gotoToday = function(e) {
        this._base_gotoToday(e), this._setTime(this._getInst($(e)[0]), new Date)
    }, $.datepicker._disableTimepickerDatepicker = function(e, t, i) {
        var s = this._getInst(e),
            a = this._get(s, "timepicker");
        a && (a._defaults.showTimepicker = !1, a._onTimeChange(), a._updateDateTime(s))
    }, $.datepicker._enableTimepickerDatepicker = function(e, t, i) {
        var s = this._getInst(e),
            a = this._get(s, "timepicker");
        a && (a._defaults.showTimepicker = !0, a._onTimeChange(), a._updateDateTime(s))
    }, $.datepicker._setTime = function(e, t) {
        var i = this._get(e, "timepicker");
        if (i) {
            var s = i._defaults,
                a = t ? t.getHours() : s.hour,
                n = t ? t.getMinutes() : s.minute,
                r = t ? t.getSeconds() : s.second;
            (a < s.hourMin || a > s.hourMax || n < s.minuteMin || n > s.minuteMax || r < s.secondMin || r > s.secondMax) && (a = s.hourMin, n = s.minuteMin, r = s.secondMin), i.hour_slider ? i.hour_slider.slider("value", a) : i.hour = a, i.minute_slider ? i.minute_slider.slider("value", n) : i.minute = n, i.second_slider ? i.second_slider.slider("value", r) : i.second = r, i._onTimeChange(), i._updateDateTime(e)
        }
    }, $.datepicker._setTimeDatepicker = function(e, t, i) {
        var s, a = this._getInst(e),
            n = this._get(a, "timepicker");
        n && (this._setDateFromField(a), t && ("string" == typeof t ? (n._parseTime(t, i), (s = new Date).setHours(n.hour, n.minute, n.second)) : s = new Date(t.getTime()), "Invalid Date" == s.toString() && (s = void 0)), this._setTime(a, s))
    }, $.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker, $.datepicker._setDateDatepicker = function(e, t) {
        var i = this._getInst(e),
            s = t instanceof Date ? new Date(t.getTime()) : t;
        this._updateDatepicker(i), this._base_setDateDatepicker.apply(this, arguments), this._setTimeDatepicker(e, s, !0)
    }, $.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker, $.datepicker._getDateDatepicker = function(e, t) {
        var i = this._getInst(e),
            s = this._get(i, "timepicker");
        if (s) {
            this._setDateFromField(i, t);
            var a = this._getDate(i);
            return a && s._parseTime($(e).val(), !0) && a.setHours(s.hour, s.minute, s.second), a
        }
        return this._base_getDateDatepicker(e, t)
    }, $.timepicker = new Timepicker, $.timepicker.version = "0.9.3"
}(jQuery);
! function($) {
    var _t_ = function(e, t, i) {
        "object" != typeof t || i || (i = t, t = null);
        var s = t || ustream.labels[e];
        return s ? i && (s = ustream.framework.stringUtils.labelSubst(s, i)) : s = e.toUpperCase(), s
    };
    if ($.ui.timepicker = $.ui.timepicker || {}, !$.ui.timepicker.version) {
        $.extend($.ui, {
            timepicker: {
                version: "1.2"
            }
        });
        var Timepicker = function() {
            this.regional = [], this.regional[""] = {
                currentText: "Now",
                closeText: "Done",
                amNames: ["AM", "A"],
                pmNames: ["PM", "P"],
                timeFormat: "HH:mm",
                timeSuffix: "",
                timeOnlyTitle: "Choose Time",
                timeText: "Time",
                hourText: "Hour",
                minuteText: "Minute",
                secondText: "Second",
                millisecText: "Millisecond",
                timezoneText: "Time Zone",
                isRTL: !1
            }, this._defaults = {
                showButtonPanel: !0,
                timeOnly: !1,
                showHour: !0,
                showMinute: !0,
                showSecond: !1,
                showMillisec: !1,
                showTimezone: !1,
                showTime: !0,
                stepHour: 1,
                stepMinute: 1,
                stepSecond: 1,
                stepMillisec: 1,
                hour: 0,
                minute: 0,
                second: 0,
                millisec: 0,
                timezone: null,
                useLocalTimezone: !1,
                defaultTimezone: "+0000",
                hourMin: 0,
                minuteMin: 0,
                secondMin: 0,
                millisecMin: 0,
                hourMax: 23,
                minuteMax: 59,
                secondMax: 59,
                millisecMax: 999,
                minDateTime: null,
                maxDateTime: null,
                onSelect: null,
                hourGrid: 0,
                minuteGrid: 0,
                secondGrid: 0,
                millisecGrid: 0,
                alwaysSetTime: !0,
                separator: " ",
                altFieldTimeOnly: !0,
                altTimeFormat: null,
                altSeparator: null,
                altTimeSuffix: null,
                pickerTimeFormat: null,
                pickerTimeSuffix: null,
                showTimepicker: !0,
                timezoneIso8601: !1,
                timezoneList: null,
                addSliderAccess: !1,
                sliderAccessArgs: null,
                controlType: "slider",
                defaultValue: null,
                parse: "strict"
            }, $.extend(this._defaults, this.regional[""])
        };
        $.extend(Timepicker.prototype, {
            $input: null,
            $altInput: null,
            $timeObj: null,
            inst: null,
            hour_slider: null,
            minute_slider: null,
            second_slider: null,
            millisec_slider: null,
            timezone_select: null,
            hour: 0,
            minute: 0,
            second: 0,
            millisec: 0,
            timezone: null,
            defaultTimezone: "+0000",
            hourMinOriginal: null,
            minuteMinOriginal: null,
            secondMinOriginal: null,
            millisecMinOriginal: null,
            hourMaxOriginal: null,
            minuteMaxOriginal: null,
            secondMaxOriginal: null,
            millisecMaxOriginal: null,
            ampm: "",
            formattedDate: "",
            formattedTime: "",
            formattedDateTime: "",
            timezoneList: null,
            units: ["hour", "minute", "second", "millisec"],
            control: null,
            setDefaults: function(e) {
                return extendRemove(this._defaults, e || {}), this
            },
            _newInst: function($input, o) {
                var tp_inst = new Timepicker,
                    inlineSettings = {},
                    fns = {},
                    overrides, i;
                for (var attrName in this._defaults)
                    if (this._defaults.hasOwnProperty(attrName)) {
                        var attrValue = $input.attr("time:" + attrName);
                        if (attrValue) try {
                            inlineSettings[attrName] = eval(attrValue)
                        } catch (e) {
                            inlineSettings[attrName] = attrValue
                        }
                    } for (i in overrides = {
                        beforeShow: function(e, t) {
                            if ($.isFunction(tp_inst._defaults.evnts.beforeShow)) return tp_inst._defaults.evnts.beforeShow.call($input[0], e, t, tp_inst)
                        },
                        onChangeMonthYear: function(e, t, i) {
                            tp_inst._updateDateTime(i), $.isFunction(tp_inst._defaults.evnts.onChangeMonthYear) && tp_inst._defaults.evnts.onChangeMonthYear.call($input[0], e, t, i, tp_inst)
                        },
                        onClose: function(e, t) {
                            !0 === tp_inst.timeDefined && "" !== $input.val() && tp_inst._updateDateTime(t), $.isFunction(tp_inst._defaults.evnts.onClose) && tp_inst._defaults.evnts.onClose.call($input[0], e, t, tp_inst)
                        }
                    }, overrides) overrides.hasOwnProperty(i) && (fns[i] = o[i] || null);
                if (tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, o, overrides, {
                        evnts: fns,
                        timepicker: tp_inst
                    }), tp_inst.amNames = $.map(tp_inst._defaults.amNames, function(e) {
                        return e.toUpperCase()
                    }), tp_inst.pmNames = $.map(tp_inst._defaults.pmNames, function(e) {
                        return e.toUpperCase()
                    }), "string" == typeof tp_inst._defaults.controlType ? (void 0 === $.fn[tp_inst._defaults.controlType] && (tp_inst._defaults.controlType = "select"), tp_inst.control = tp_inst._controls[tp_inst._defaults.controlType]) : tp_inst.control = tp_inst._defaults.controlType, null === tp_inst._defaults.timezoneList) {
                    var timezoneList = ["-1200", "-1100", "-1000", "-0930", "-0900", "-0800", "-0700", "-0600", "-0500", "-0430", "-0400", "-0330", "-0300", "-0200", "-0100", "+0000", "+0100", "+0200", "+0300", "+0330", "+0400", "+0430", "+0500", "+0530", "+0545", "+0600", "+0630", "+0700", "+0800", "+0845", "+0900", "+0930", "+1000", "+1030", "+1100", "+1130", "+1200", "+1245", "+1300", "+1400"];
                    tp_inst._defaults.timezoneIso8601 && (timezoneList = $.map(timezoneList, function(e) {
                        return "+0000" == e ? "Z" : e.substring(0, 3) + ":" + e.substring(3)
                    })), tp_inst._defaults.timezoneList = timezoneList
                }
                return tp_inst.timezone = tp_inst._defaults.timezone, tp_inst.hour = tp_inst._defaults.hour < tp_inst._defaults.hourMin ? tp_inst._defaults.hourMin : tp_inst._defaults.hour > tp_inst._defaults.hourMax ? tp_inst._defaults.hourMax : tp_inst._defaults.hour, tp_inst.minute = tp_inst._defaults.minute < tp_inst._defaults.minuteMin ? tp_inst._defaults.minuteMin : tp_inst._defaults.minute > tp_inst._defaults.minuteMax ? tp_inst._defaults.minuteMax : tp_inst._defaults.minute, tp_inst.second = tp_inst._defaults.second < tp_inst._defaults.secondMin ? tp_inst._defaults.secondMin : tp_inst._defaults.second > tp_inst._defaults.secondMax ? tp_inst._defaults.secondMax : tp_inst._defaults.second, tp_inst.millisec = tp_inst._defaults.millisec < tp_inst._defaults.millisecMin ? tp_inst._defaults.millisecMin : tp_inst._defaults.millisec > tp_inst._defaults.millisecMax ? tp_inst._defaults.millisecMax : tp_inst._defaults.millisec, tp_inst.ampm = "", tp_inst.$input = $input, o.altField && (tp_inst.$altInput = $(o.altField).css({
                    cursor: "pointer"
                }).focus(function() {
                    $input.trigger("focus")
                })), 0 !== tp_inst._defaults.minDate && 0 !== tp_inst._defaults.minDateTime || (tp_inst._defaults.minDate = new Date), 0 !== tp_inst._defaults.maxDate && 0 !== tp_inst._defaults.maxDateTime || (tp_inst._defaults.maxDate = new Date), void 0 !== tp_inst._defaults.minDate && tp_inst._defaults.minDate instanceof Date && (tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime())), void 0 !== tp_inst._defaults.minDateTime && tp_inst._defaults.minDateTime instanceof Date && (tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime())), void 0 !== tp_inst._defaults.maxDate && tp_inst._defaults.maxDate instanceof Date && (tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime())), void 0 !== tp_inst._defaults.maxDateTime && tp_inst._defaults.maxDateTime instanceof Date && (tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime())), tp_inst.$input.bind("focus", function() {
                    tp_inst._onFocus()
                }), tp_inst
            },
            _addTimePicker: function(e) {
                var t = this.$altInput && this._defaults.altFieldTimeOnly ? this.$input.val() + " " + this.$altInput.val() : this.$input.val();
                this.timeDefined = this._parseTime(t), this._limitMinMaxDateTime(e, !1), this._injectTimePicker()
            },
            _parseTime: function(t, e) {
                if (this.inst || (this.inst = $.datepicker._getInst(this.$input[0])), e || !this._defaults.timeOnly) {
                    var i = $.datepicker._get(this.inst, "dateFormat");
                    try {
                        var s = parseDateTimeInternal(i, this._defaults.timeFormat, t, $.datepicker._getFormatConfig(this.inst), this._defaults);
                        if (!s.timeObj) return !1;
                        $.extend(this, s.timeObj)
                    } catch (e) {
                        return $.timepicker.log("Error parsing the date/time string: " + e + "\ndate/time string = " + t + "\ntimeFormat = " + this._defaults.timeFormat + "\ndateFormat = " + i), !1
                    }
                    return !0
                }
                var a = $.datepicker.parseTime(this._defaults.timeFormat, t, this._defaults);
                return !!a && ($.extend(this, a), !0)
            },
            _injectTimePicker: function() {
                var e = this.inst.dpDiv,
                    t = this.inst.settings,
                    r = this,
                    l = "",
                    i = "",
                    s = {},
                    a = {},
                    n = null;
                if (0 === e.find("div.ui-timepicker-div").length && t.showTimepicker) {
                    for (var o = ' style="display:none;"', u = '<div class="ui-timepicker-div' + (t.isRTL ? " ui-timepicker-rtl" : "") + '"><dl><dt class="ui_tpicker_time_label"' + (t.showTime ? "" : o) + ">" + t.timeText + '</dt><dd class="ui_tpicker_time"' + (t.showTime ? "" : o) + "></dd>", d = 0, m = this.units.length; d < m; d++) {
                        if (i = (l = this.units[d]).substr(0, 1).toUpperCase() + l.substr(1), s[l] = parseInt(t[l + "Max"] - (t[l + "Max"] - t[l + "Min"]) % t["step" + i], 10), a[l] = 0, u += '<dt class="ui_tpicker_' + l + '_label"' + (t["show" + i] ? "" : o) + ">" + t[l + "Text"] + '</dt><dd class="ui_tpicker_' + l + '"><div class="ui_tpicker_' + l + '_slider"' + (t["show" + i] ? "" : o) + "></div>", t["show" + i] && 0 < t[l + "Grid"]) {
                            if (u += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>', "hour" == l)
                                for (var c = t[l + "Min"]; c <= s[l]; c += parseInt(t[l + "Grid"], 10)) {
                                    a[l]++;
                                    var h = $.datepicker.formatTime(useAmpm(t.pickerTimeFormat || t.timeFormat) ? "hht" : "HH", {
                                        hour: c
                                    }, t);
                                    u += '<td data-for="' + l + '">' + h + "</td>"
                                } else
                                    for (var p = t[l + "Min"]; p <= s[l]; p += parseInt(t[l + "Grid"], 10)) a[l]++, u += '<td data-for="' + l + '">' + (p < 10 ? "0" : "") + p + "</td>";
                            u += "</tr></table></div>"
                        }
                        u += "</dd>"
                    }
                    u += '<dt class="ui_tpicker_timezone_label"' + (t.showTimezone ? "" : o) + ">" + t.timezoneText + "</dt>", u += '<dd class="ui_tpicker_timezone" ' + (t.showTimezone ? "" : o) + "></dd>";
                    var _ = $(u += "</dl></div>");
                    !0 === t.timeOnly && (_.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all"><div class="ui-datepicker-title">' + t.timeOnlyTitle + "</div></div>"), e.find(".ui-datepicker-header, .ui-datepicker-calendar").hide());
                    for (d = 0, m = r.units.length; d < m; d++) i = (l = r.units[d]).substr(0, 1).toUpperCase() + l.substr(1), r[l + "_slider"] = r.control.create(r, _.find(".ui_tpicker_" + l + "_slider"), l, r[l], t[l + "Min"], s[l], t["step" + i]), t["show" + i] && 0 < t[l + "Grid"] && (n = 100 * a[l] * t[l + "Grid"] / (s[l] - t[l + "Min"]), _.find(".ui_tpicker_" + l + " table").css({
                        width: n + "%",
                        marginLeft: t.isRTL ? "0" : n / (-2 * a[l]) + "%",
                        marginRight: t.isRTL ? n / (-2 * a[l]) + "%" : "0",
                        borderCollapse: "collapse"
                    }).find("td").click(function(e) {
                        var t = $(this),
                            i = t.html(),
                            s = parseInt(i.replace(/[^0-9]/g), 10),
                            a = i.replace(/[^apm]/gi),
                            n = t.data("for");
                        "hour" == n && (-1 !== a.indexOf("p") && s < 12 ? s += 12 : -1 !== a.indexOf("a") && 12 === s && (s = 0)), r.control.value(r, r[n + "_slider"], l, s), r._onTimeChange(), r._onSelectHandler()
                    }).css({
                        cursor: "pointer",
                        width: 100 / a[l] + "%",
                        textAlign: "center",
                        overflow: "hidden"
                    }));
                    if (this.timezone_select = _.find(".ui_tpicker_timezone").append("<select></select>").find("select"), $.fn.append.apply(this.timezone_select, $.map(t.timezoneList, function(e, t) {
                            return $("<option />").val("object" == typeof e ? e.value : e).text("object" == typeof e ? e.label : e)
                        })), void 0 !== this.timezone && null !== this.timezone && "" !== this.timezone) {
                        var f = new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12);
                        $.timepicker.timeZoneOffsetString(f) == this.timezone ? selectLocalTimeZone(r) : this.timezone_select.val(this.timezone)
                    } else void 0 !== this.hour && null !== this.hour && "" !== this.hour ? this.timezone_select.val(t.defaultTimezone) : selectLocalTimeZone(r);
                    this.timezone_select.change(function() {
                        r._defaults.useLocalTimezone = !1, r._onTimeChange(), r._onSelectHandler()
                    });
                    var g = e.find(".ui-datepicker-buttonpane");
                    if (g.length ? g.before(_) : e.append(_), e.addClass("ui-datetimepicker"), this.$timeObj = _.find(".ui_tpicker_time"), null !== this.inst) {
                        var v = this.timeDefined;
                        this._onTimeChange(), this.timeDefined = v
                    }
                    if (this._defaults.addSliderAccess) {
                        var k = this._defaults.sliderAccessArgs,
                            T = this._defaults.isRTL;
                        k.isRTL = T, setTimeout(function() {
                            if (0 === _.find(".ui-slider-access").length) {
                                _.find(".ui-slider:visible").sliderAccess(k);
                                var r = _.find(".ui-slider-access:eq(0)").outerWidth(!0);
                                r && _.find("table:visible").each(function() {
                                    var e = $(this),
                                        t = e.outerWidth(),
                                        i = e.css(T ? "marginRight" : "marginLeft").toString().replace("%", ""),
                                        s = t - r,
                                        a = i * s / t + "%",
                                        n = {
                                            width: s,
                                            marginRight: 0,
                                            marginLeft: 0
                                        };
                                    n[T ? "marginRight" : "marginLeft"] = a, e.css(n)
                                })
                            }
                        }, 10)
                    }
                }
            },
            _limitMinMaxDateTime: function(e, t) {
                var i = this._defaults,
                    s = new Date(e.selectedYear, e.selectedMonth, e.selectedDay);
                if (this._defaults.showTimepicker) {
                    if (null !== $.datepicker._get(e, "minDateTime") && void 0 !== $.datepicker._get(e, "minDateTime") && s) {
                        var a = $.datepicker._get(e, "minDateTime"),
                            n = new Date(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0, 0);
                        null !== this.hourMinOriginal && null !== this.minuteMinOriginal && null !== this.secondMinOriginal && null !== this.millisecMinOriginal || (this.hourMinOriginal = i.hourMin, this.minuteMinOriginal = i.minuteMin, this.secondMinOriginal = i.secondMin, this.millisecMinOriginal = i.millisecMin), e.settings.timeOnly || n.getTime() == s.getTime() ? (this._defaults.hourMin = a.getHours(), this.hour <= this._defaults.hourMin ? (this.hour = this._defaults.hourMin, this._defaults.minuteMin = a.getMinutes(), this.minute <= this._defaults.minuteMin ? (this.minute = this._defaults.minuteMin, this._defaults.secondMin = a.getSeconds(), this.second <= this._defaults.secondMin ? (this.second = this._defaults.secondMin, this._defaults.millisecMin = a.getMilliseconds()) : (this.millisec < this._defaults.millisecMin && (this.millisec = this._defaults.millisecMin), this._defaults.millisecMin = this.millisecMinOriginal)) : (this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal)) : (this._defaults.minuteMin = this.minuteMinOriginal, this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal)) : (this._defaults.hourMin = this.hourMinOriginal, this._defaults.minuteMin = this.minuteMinOriginal, this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal)
                    }
                    if (null !== $.datepicker._get(e, "maxDateTime") && void 0 !== $.datepicker._get(e, "maxDateTime") && s) {
                        var r = $.datepicker._get(e, "maxDateTime"),
                            l = new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0, 0);
                        null !== this.hourMaxOriginal && null !== this.minuteMaxOriginal && null !== this.secondMaxOriginal || (this.hourMaxOriginal = i.hourMax, this.minuteMaxOriginal = i.minuteMax, this.secondMaxOriginal = i.secondMax, this.millisecMaxOriginal = i.millisecMax), e.settings.timeOnly || l.getTime() == s.getTime() ? (this._defaults.hourMax = r.getHours(), this.hour >= this._defaults.hourMax ? (this.hour = this._defaults.hourMax, this._defaults.minuteMax = r.getMinutes(), this.minute >= this._defaults.minuteMax ? (this.minute = this._defaults.minuteMax, this._defaults.secondMax = r.getSeconds(), this.second >= this._defaults.secondMax ? (this.second = this._defaults.secondMax, this._defaults.millisecMax = r.getMilliseconds()) : (this.millisec > this._defaults.millisecMax && (this.millisec = this._defaults.millisecMax), this._defaults.millisecMax = this.millisecMaxOriginal)) : (this._defaults.secondMax = this.secondMaxOriginal, this._defaults.millisecMax = this.millisecMaxOriginal)) : (this._defaults.minuteMax = this.minuteMaxOriginal, this._defaults.secondMax = this.secondMaxOriginal, this._defaults.millisecMax = this.millisecMaxOriginal)) : (this._defaults.hourMax = this.hourMaxOriginal, this._defaults.minuteMax = this.minuteMaxOriginal, this._defaults.secondMax = this.secondMaxOriginal, this._defaults.millisecMax = this.millisecMaxOriginal)
                    }
                    if (void 0 !== t && !0 === t) {
                        var o = parseInt(this._defaults.hourMax - (this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour, 10),
                            u = parseInt(this._defaults.minuteMax - (this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute, 10),
                            d = parseInt(this._defaults.secondMax - (this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond, 10),
                            m = parseInt(this._defaults.millisecMax - (this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec, 10);
                        this.hour_slider && (this.control.options(this, this.hour_slider, "hour", {
                            min: this._defaults.hourMin,
                            max: o
                        }), this.control.value(this, this.hour_slider, "hour", this.hour - this.hour % this._defaults.stepHour)), this.minute_slider && (this.control.options(this, this.minute_slider, "minute", {
                            min: this._defaults.minuteMin,
                            max: u
                        }), this.control.value(this, this.minute_slider, "minute", this.minute - this.minute % this._defaults.stepMinute)), this.second_slider && (this.control.options(this, this.second_slider, "second", {
                            min: this._defaults.secondMin,
                            max: d
                        }), this.control.value(this, this.second_slider, "second", this.second - this.second % this._defaults.stepSecond)), this.millisec_slider && (this.control.options(this, this.millisec_slider, "millisec", {
                            min: this._defaults.millisecMin,
                            max: m
                        }), this.control.value(this, this.millisec_slider, "millisec", this.millisec - this.millisec % this._defaults.stepMillisec))
                    }
                }
            },
            _onTimeChange: function() {
                var e = !!this.hour_slider && this.control.value(this, this.hour_slider, "hour"),
                    t = !!this.minute_slider && this.control.value(this, this.minute_slider, "minute"),
                    i = !!this.second_slider && this.control.value(this, this.second_slider, "second"),
                    s = !!this.millisec_slider && this.control.value(this, this.millisec_slider, "millisec"),
                    a = !!this.timezone_select && this.timezone_select.val(),
                    n = this._defaults,
                    r = n.pickerTimeFormat || n.timeFormat,
                    l = n.pickerTimeSuffix || n.timeSuffix;
                "object" == typeof e && (e = !1), "object" == typeof t && (t = !1), "object" == typeof i && (i = !1), "object" == typeof s && (s = !1), "object" == typeof a && (a = !1), !1 !== e && (e = parseInt(e, 10)), !1 !== t && (t = parseInt(t, 10)), !1 !== i && (i = parseInt(i, 10)), !1 !== s && (s = parseInt(s, 10));
                var o = n[e < 12 ? "amNames" : "pmNames"][0],
                    u = e != this.hour || t != this.minute || i != this.second || s != this.millisec || 0 < this.ampm.length && e < 12 != (-1 !== $.inArray(this.ampm.toUpperCase(), this.amNames)) || null === this.timezone && a != this.defaultTimezone || null !== this.timezone && a != this.timezone;
                u && (!1 !== e && (this.hour = e), !1 !== t && (this.minute = t), !1 !== i && (this.second = i), !1 !== s && (this.millisec = s), !1 !== a && (this.timezone = a), this.inst || (this.inst = $.datepicker._getInst(this.$input[0])), this._limitMinMaxDateTime(this.inst, !0)), useAmpm(n.timeFormat) && (this.ampm = o), this.formattedTime = $.datepicker.formatTime(n.timeFormat, this, n), this.$timeObj && (r === n.timeFormat ? this.$timeObj.text(this.formattedTime + l) : this.$timeObj.text($.datepicker.formatTime(r, this, n) + l)), this.timeDefined = !0, u && this._updateDateTime()
            },
            _onSelectHandler: function() {
                var e = this._defaults.onSelect || this.inst.settings.onSelect,
                    t = this.$input ? this.$input[0] : null;
                e && t && e.apply(t, [this.formattedDateTime, this])
            },
            _updateDateTime: function(e) {
                e = this.inst || e;
                var t = $.datepicker._daylightSavingAdjust(new Date(e.selectedYear, e.selectedMonth, e.selectedDay)),
                    i = $.datepicker._get(e, "dateFormat"),
                    s = $.datepicker._getFormatConfig(e),
                    a = null !== t && this.timeDefined;
                this.formattedDate = $.datepicker.formatDate(i, null === t ? new Date : t, s);
                var n = this.formattedDate;
                if ("" == e.lastVal && (e.currentYear = e.selectedYear, e.currentMonth = e.selectedMonth, e.currentDay = e.selectedDay), !0 === this._defaults.timeOnly ? n = this.formattedTime : !0 !== this._defaults.timeOnly && (this._defaults.alwaysSetTime || a) && (n += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix), this.formattedDateTime = n, this._defaults.showTimepicker)
                    if (this.$altInput && !0 === this._defaults.altFieldTimeOnly) this.$altInput.val(this.formattedTime), this.$input.val(this.formattedDate);
                    else if (this.$altInput) {
                    this.$input.val(n);
                    var r = "",
                        l = this._defaults.altSeparator ? this._defaults.altSeparator : this._defaults.separator,
                        o = this._defaults.altTimeSuffix ? this._defaults.altTimeSuffix : this._defaults.timeSuffix;
                    (r = this._defaults.altFormat ? $.datepicker.formatDate(this._defaults.altFormat, null === t ? new Date : t, s) : this.formattedDate) && (r += l), this._defaults.altTimeFormat ? r += $.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + o : r += this.formattedTime + o, this.$altInput.val(r)
                } else this.$input.val(n);
                else this.$input.val(this.formattedDate);
                this.$input.trigger("change")
            },
            _onFocus: function() {
                if (!this.$input.val() && this._defaults.defaultValue) {
                    this.$input.val(this._defaults.defaultValue);
                    var e = $.datepicker._getInst(this.$input.get(0)),
                        t = $.datepicker._get(e, "timepicker");
                    if (t && t._defaults.timeOnly && e.input.val() != e.lastVal) try {
                        $.datepicker._updateDatepicker(e)
                    } catch (e) {
                        $.timepicker.log(e)
                    }
                }
            },
            _controls: {
                slider: {
                    create: function(i, e, s, t, a, n, r) {
                        var l = i._defaults.isRTL;
                        return e.prop("slide", null).slider({
                            orientation: "horizontal",
                            value: l ? -1 * t : t,
                            min: l ? -1 * n : a,
                            max: l ? -1 * a : n,
                            step: r,
                            slide: function(e, t) {
                                i.control.value(i, $(this), s, l ? -1 * t.value : t.value), i._onTimeChange()
                            },
                            stop: function(e, t) {
                                i._onSelectHandler()
                            }
                        })
                    },
                    options: function(e, t, i, s, a) {
                        if (e._defaults.isRTL) {
                            if ("string" == typeof s) return "min" == s || "max" == s ? void 0 !== a ? t.slider(s, -1 * a) : Math.abs(t.slider(s)) : t.slider(s);
                            var n = s.min,
                                r = s.max;
                            return s.min = s.max = null, void 0 !== n && (s.max = -1 * n), void 0 !== r && (s.min = -1 * r), t.slider(s)
                        }
                        return "string" == typeof s && void 0 !== a ? t.slider(s, a) : t.slider(s)
                    },
                    value: function(e, t, i, s) {
                        return e._defaults.isRTL ? void 0 !== s ? t.slider("value", -1 * s) : Math.abs(t.slider("value")) : void 0 !== s ? t.slider("value", s) : t.slider("value")
                    }
                },
                select: {
                    create: function(t, e, i, s, a, n, r) {
                        for (var l = '<select class="ui-timepicker-select" data-unit="' + i + '" data-min="' + a + '" data-max="' + n + '" data-step="' + r + '">', o = (t._defaults.timeFormat.indexOf("t"), a); o <= n; o += r) l += '<option value="' + o + '"' + (o == s ? " selected" : "") + ">", "hour" == i && useAmpm(t._defaults.pickerTimeFormat || t._defaults.timeFormat) ? l += $.datepicker.formatTime("hh TT", {
                            hour: o
                        }, t._defaults) : l += "millisec" == i || 10 <= o ? o : "0" + o.toString(), l += "</option>";
                        return l += "</select>", e.children("select").remove(), $(l).appendTo(e).change(function(e) {
                            t._onTimeChange(), t._onSelectHandler()
                        }), e
                    },
                    options: function(e, t, i, s, a) {
                        var n = {},
                            r = t.children("select");
                        if ("string" == typeof s) {
                            if (void 0 === a) return r.data(s);
                            n[s] = a
                        } else n = s;
                        return e.control.create(e, t, r.data("unit"), r.val(), n.min || r.data("min"), n.max || r.data("max"), n.step || r.data("step"))
                    },
                    value: function(e, t, i, s) {
                        var a = t.children("select");
                        return void 0 !== s ? a.val(s) : a.val()
                    }
                }
            }
        }), $.fn.extend({
            timepicker: function(e) {
                e = e || {};
                var t = Array.prototype.slice.call(arguments);
                return "object" == typeof e && (t[0] = $.extend(e, {
                    timeOnly: !0
                })), $(this).each(function() {
                    $.fn.datetimepicker.apply($(this), t)
                })
            },
            datetimepicker: function(t) {
                var i = arguments;
                return "string" == typeof(t = t || {}) ? "getDate" == t ? $.fn.datepicker.apply($(this[0]), i) : this.each(function() {
                    var e = $(this);
                    e.datepicker.apply(e, i)
                }) : this.each(function() {
                    var e = $(this);
                    e.datepicker($.timepicker._newInst(e, t)._defaults)
                })
            }
        }), $.datepicker.parseDateTime = function(e, t, i, s, a) {
            var n = parseDateTimeInternal(e, t, i, s, a);
            if (n.timeObj) {
                var r = n.timeObj;
                n.date.setHours(r.hour, r.minute, r.second, r.millisec)
            }
            return n.date
        }, $.datepicker.parseTime = function(e, t, i) {
            var s = extendRemove(extendRemove({}, $.timepicker._defaults), i || {}),
                a = function(e, t, n) {
                    var i, s = "^" + e.toString().replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[lz]|'.*?')/g, function(e) {
                            var t, i, s, a = e.length;
                            switch (e.charAt(0).toLowerCase()) {
                                case "h":
                                case "m":
                                case "s":
                                    return 1 === a ? "(\\d?\\d)" : "(\\d{" + a + "})";
                                case "l":
                                    return "(\\d?\\d?\\d)";
                                case "z":
                                    return "(z|[-+]\\d\\d:?\\d\\d|\\S+)?";
                                case "t":
                                    return t = n.amNames, i = n.pmNames, s = [], t && $.merge(s, t), i && $.merge(s, i), "(" + (s = $.map(s, function(e) {
                                        return e.replace(/[.*+?|()\[\]{}\\]/g, "\\$&")
                                    })).join("|") + ")?";
                                default:
                                    return "(" + e.replace(/\'/g, "").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g, function(e) {
                                        return "\\" + e
                                    }) + ")?"
                            }
                        }).replace(/\s/g, "\\s?") + n.timeSuffix + "$",
                        a = function(e) {
                            var t = e.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|t{1,2}|z|'.*?')/g),
                                i = {
                                    h: -1,
                                    m: -1,
                                    s: -1,
                                    l: -1,
                                    t: -1,
                                    z: -1
                                };
                            if (t)
                                for (var s = 0; s < t.length; s++) - 1 == i[t[s].toString().charAt(0)] && (i[t[s].toString().charAt(0)] = s + 1);
                            return i
                        }(e),
                        r = "",
                        l = {
                            hour: 0,
                            minute: 0,
                            second: 0,
                            millisec: 0
                        };
                    if (i = t.match(new RegExp(s, "i"))) {
                        if (-1 !== a.t && (void 0 === i[a.t] || 0 === i[a.t].length ? (r = "", l.ampm = "") : (r = -1 !== $.inArray(i[a.t].toUpperCase(), n.amNames) ? "AM" : "PM", l.ampm = n["AM" == r ? "amNames" : "pmNames"][0])), -1 !== a.h && ("AM" == r && "12" == i[a.h] ? l.hour = 0 : "PM" == r && "12" != i[a.h] ? l.hour = parseInt(i[a.h], 10) + 12 : l.hour = Number(i[a.h])), -1 !== a.m && (l.minute = Number(i[a.m])), -1 !== a.s && (l.second = Number(i[a.s])), -1 !== a.l && (l.millisec = Number(i[a.l])), -1 !== a.z && void 0 !== i[a.z]) {
                            var o = i[a.z].toUpperCase();
                            switch (o.length) {
                                case 1:
                                    o = n.timezoneIso8601 ? "Z" : "+0000";
                                    break;
                                case 5:
                                    n.timezoneIso8601 && (o = "0000" == o.substring(1) ? "Z" : o.substring(0, 3) + ":" + o.substring(3));
                                    break;
                                case 6:
                                    n.timezoneIso8601 ? "00:00" == o.substring(1) && (o = "Z") : o = "Z" == o || "00:00" == o.substring(1) ? "+0000" : o.replace(/:/, "")
                            }
                            l.timezone = o
                        }
                        return l
                    }
                    return !1
                };
            return "function" == typeof s.parse ? s.parse(e, t, s) : "loose" === s.parse ? function(t, i, s) {
                try {
                    var e = new Date("2012-01-01 " + i);
                    if (isNaN(e.getTime()) && (e = new Date("2012-01-01T" + i), isNaN(e.getTime()) && (e = new Date("01/01/2012 " + i), isNaN(e.getTime())))) throw "Unable to parse time with native Date: " + i;
                    return {
                        hour: e.getHours(),
                        minute: e.getMinutes(),
                        second: e.getSeconds(),
                        millisec: e.getMilliseconds(),
                        timezone: $.timepicker.timeZoneOffsetString(e)
                    }
                } catch (e) {
                    try {
                        return a(t, i, s)
                    } catch (e) {
                        $.timepicker.log("Unable to parse \ntimeString: " + i + "\ntimeFormat: " + t)
                    }
                }
                return !1
            }(e, t, s) : a(e, t, s)
        }, $.datepicker.formatTime = function(e, t, i) {
            i = i || {}, i = $.extend({}, $.timepicker._defaults, i), t = $.extend({
                hour: 0,
                minute: 0,
                second: 0,
                millisec: 0,
                timezone: "+0000"
            }, t);
            var s = e,
                a = i.amNames[0],
                n = parseInt(t.hour, 10);
            return 11 < n && (a = i.pmNames[0]), s = s.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[lz]|('.*?'|".*?"))/g, function(e) {
                switch (e) {
                    case "HH":
                        return ("0" + n).slice(-2);
                    case "H":
                        return n;
                    case "hh":
                        return ("0" + convert24to12(n)).slice(-2);
                    case "h":
                        return convert24to12(n);
                    case "mm":
                        return ("0" + t.minute).slice(-2);
                    case "m":
                        return t.minute;
                    case "ss":
                        return ("0" + t.second).slice(-2);
                    case "s":
                        return t.second;
                    case "l":
                        return ("00" + t.millisec).slice(-3);
                    case "z":
                        return null === t.timezone ? i.defaultTimezone : t.timezone;
                    case "T":
                        return a.charAt(0).toUpperCase();
                    case "TT":
                        return a.toUpperCase();
                    case "t":
                        return a.charAt(0).toLowerCase();
                    case "tt":
                        return a.toLowerCase();
                    default:
                        return e.replace(/\'/g, "") || "'"
                }
            }), s = $.trim(s)
        }, $.datepicker._base_selectDate = $.datepicker._selectDate, $.datepicker._selectDate = function(e, t) {
            var i = this._getInst($(e)[0]),
                s = this._get(i, "timepicker");
            s ? (s._limitMinMaxDateTime(i, !0), i.inline = i.stay_open = !0, this._base_selectDate(e, t), i.inline = i.stay_open = !1, this._notifyChange(i), this._updateDatepicker(i)) : this._base_selectDate(e, t)
        }, $.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker, $.datepicker._updateDatepicker = function(e) {
            var t = e.input[0];
            if (!($.datepicker._curInst && $.datepicker._curInst != e && $.datepicker._datepickerShowing && $.datepicker._lastInput != t || "boolean" == typeof e.stay_open && !1 !== e.stay_open)) {
                this._base_updateDatepicker(e);
                var i = this._get(e, "timepicker");
                i && i._addTimePicker(e)
            }
        }, $.datepicker._base_doKeyPress = $.datepicker._doKeyPress, $.datepicker._doKeyPress = function(e) {
            var t = $.datepicker._getInst(e.target),
                i = $.datepicker._get(t, "timepicker");
            if (i && $.datepicker._get(t, "constrainInput")) {
                var s = useAmpm(i._defaults.timeFormat),
                    a = $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")),
                    n = i._defaults.timeFormat.toString().replace(/[hms]/g, "").replace(/TT/g, s ? "APM" : "").replace(/Tt/g, s ? "AaPpMm" : "").replace(/tT/g, s ? "AaPpMm" : "").replace(/T/g, s ? "AP" : "").replace(/tt/g, s ? "apm" : "").replace(/t/g, s ? "ap" : "") + " " + i._defaults.separator + i._defaults.timeSuffix + (i._defaults.showTimezone ? i._defaults.timezoneList.join("") : "") + i._defaults.amNames.join("") + i._defaults.pmNames.join("") + a,
                    r = String.fromCharCode(void 0 === e.charCode ? e.keyCode : e.charCode);
                return e.ctrlKey || r < " " || !a || -1 < n.indexOf(r)
            }
            return $.datepicker._base_doKeyPress(e)
        }, $.datepicker._base_updateAlternate = $.datepicker._updateAlternate, $.datepicker._updateAlternate = function(e) {
            var t = this._get(e, "timepicker");
            if (t) {
                var i = t._defaults.altField;
                if (i) {
                    t._defaults.altFormat || t._defaults.dateFormat;
                    var s = this._getDate(e),
                        a = $.datepicker._getFormatConfig(e),
                        n = "",
                        r = t._defaults.altSeparator ? t._defaults.altSeparator : t._defaults.separator,
                        l = t._defaults.altTimeSuffix ? t._defaults.altTimeSuffix : t._defaults.timeSuffix,
                        o = null !== t._defaults.altTimeFormat ? t._defaults.altTimeFormat : t._defaults.timeFormat;
                    n += $.datepicker.formatTime(o, t, t._defaults) + l, t._defaults.timeOnly || t._defaults.altFieldTimeOnly || null === s || (n = t._defaults.altFormat ? $.datepicker.formatDate(t._defaults.altFormat, s, a) + r + n : t.formattedDate + r + n), $(i).val(n)
                }
            } else $.datepicker._base_updateAlternate(e)
        }, $.datepicker._base_doKeyUp = $.datepicker._doKeyUp, $.datepicker._doKeyUp = function(e) {
            var t = $.datepicker._getInst(e.target),
                i = $.datepicker._get(t, "timepicker");
            if (i && i._defaults.timeOnly && t.input.val() != t.lastVal) try {
                $.datepicker._updateDatepicker(t)
            } catch (e) {
                $.timepicker.log(e)
            }
            return $.datepicker._base_doKeyUp(e)
        }, $.datepicker._base_gotoToday = $.datepicker._gotoToday, $.datepicker._gotoToday = function(e) {
            var t = this._getInst($(e)[0]),
                i = t.dpDiv;
            this._base_gotoToday(e);
            var s = this._get(t, "timepicker");
            selectLocalTimeZone(s);
            var a = new Date;
            this._setTime(t, a), $(".ui-datepicker-today", i).click()
        }, $.datepicker._disableTimepickerDatepicker = function(e) {
            var t = this._getInst(e);
            if (t) {
                var i = this._get(t, "timepicker");
                $(e).datepicker("getDate"), i && (i._defaults.showTimepicker = !1, i._updateDateTime(t))
            }
        }, $.datepicker._enableTimepickerDatepicker = function(e) {
            var t = this._getInst(e);
            if (t) {
                var i = this._get(t, "timepicker");
                $(e).datepicker("getDate"), i && (i._defaults.showTimepicker = !0, i._addTimePicker(t), i._updateDateTime(t))
            }
        }, $.datepicker._setTime = function(e, t) {
            var i = this._get(e, "timepicker");
            if (i) {
                var s = i._defaults;
                i.hour = t ? t.getHours() : s.hour, i.minute = t ? t.getMinutes() : s.minute, i.second = t ? t.getSeconds() : s.second, i.millisec = t ? t.getMilliseconds() : s.millisec, i._limitMinMaxDateTime(e, !0), i._onTimeChange(), i._updateDateTime(e)
            }
        }, $.datepicker._setTimeDatepicker = function(e, t, i) {
            var s = this._getInst(e);
            if (s) {
                var a, n = this._get(s, "timepicker");
                if (n) this._setDateFromField(s), t && ("string" == typeof t ? (n._parseTime(t, i), (a = new Date).setHours(n.hour, n.minute, n.second, n.millisec)) : a = new Date(t.getTime()), "Invalid Date" == a.toString() && (a = void 0), this._setTime(s, a))
            }
        }, $.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker, $.datepicker._setDateDatepicker = function(e, t) {
            var i = this._getInst(e);
            if (i) {
                var s = t instanceof Date ? new Date(t.getTime()) : t;
                this._updateDatepicker(i), this._base_setDateDatepicker.apply(this, arguments), this._setTimeDatepicker(e, s, !0)
            }
        }, $.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker, $.datepicker._getDateDatepicker = function(e, t) {
            var i = this._getInst(e);
            if (i) {
                var s = this._get(i, "timepicker");
                if (s) {
                    void 0 === i.lastVal && this._setDateFromField(i, t);
                    var a = this._getDate(i);
                    return a && s._parseTime($(e).val(), s.timeOnly) && a.setHours(s.hour, s.minute, s.second, s.millisec), a
                }
                return this._base_getDateDatepicker(e, t)
            }
        }, $.datepicker._base_parseDate = $.datepicker.parseDate, $.datepicker.parseDate = function(t, i, s) {
            var a;
            try {
                a = this._base_parseDate(t, i, s)
            } catch (e) {
                a = this._base_parseDate(t, i.substring(0, i.length - (e.length - e.indexOf(":") - 2)), s), $.timepicker.log("Error parsing the date string: " + e + "\ndate string = " + i + "\ndate format = " + t)
            }
            return a
        }, $.datepicker._base_formatDate = $.datepicker._formatDate, $.datepicker._formatDate = function(e, t, i, s) {
            var a = this._get(e, "timepicker");
            return a ? (a._updateDateTime(e), a.$input.val()) : this._base_formatDate(e)
        }, $.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker, $.datepicker._optionDatepicker = function(e, t, i) {
            var s, a = this._getInst(e);
            if (!a) return null;
            var n = this._get(a, "timepicker");
            if (n) {
                var r, l = null,
                    o = null,
                    u = null,
                    d = n._defaults.evnts,
                    m = {};
                if ("string" == typeof t) {
                    if ("minDate" === t || "minDateTime" === t) l = i;
                    else if ("maxDate" === t || "maxDateTime" === t) o = i;
                    else if ("onSelect" === t) u = i;
                    else if (d.hasOwnProperty(t)) {
                        if (void 0 === i) return d[t];
                        m[t] = i, s = {}
                    }
                } else if ("object" == typeof t)
                    for (r in t.minDate ? l = t.minDate : t.minDateTime ? l = t.minDateTime : t.maxDate ? o = t.maxDate : t.maxDateTime && (o = t.maxDateTime), d) d.hasOwnProperty(r) && t[r] && (m[r] = t[r]);
                for (r in m) m.hasOwnProperty(r) && (d[r] = m[r], s || (s = $.extend({}, t)), delete s[r]);
                if (s && isEmptyObject(s)) return;
                l ? (l = 0 === l ? new Date : new Date(l), n._defaults.minDate = l, n._defaults.minDateTime = l) : o ? (o = 0 === o ? new Date : new Date(o), n._defaults.maxDate = o, n._defaults.maxDateTime = o) : u && (n._defaults.onSelect = u)
            }
            return void 0 === i ? this._base_optionDatepicker.call($.datepicker, e, t) : this._base_optionDatepicker.call($.datepicker, e, s || t, i)
        };
        var isEmptyObject = function(e) {
                var t;
                for (t in e)
                    if (e.hasOwnProperty(e)) return !1;
                return !0
            },
            extendRemove = function(e, t) {
                for (var i in $.extend(e, t), t) null !== t[i] && void 0 !== t[i] || (e[i] = t[i]);
                return e
            },
            useAmpm = function(e) {
                return -1 !== e.indexOf("t") && -1 !== e.indexOf("h")
            },
            convert24to12 = function(e) {
                return 12 < e && (e -= 12), 0 == e && (e = 12), String(e)
            },
            splitDateTime = function(t, i, e, s) {
                try {
                    var a = s && s.separator ? s.separator : $.timepicker._defaults.separator,
                        n = (s && s.timeFormat ? s.timeFormat : $.timepicker._defaults.timeFormat).split(a).length,
                        r = i.split(a),
                        l = r.length;
                    if (1 < l) return [r.splice(0, l - n).join(a), r.splice(0, n).join(a)]
                } catch (e) {
                    if ($.timepicker.log("Could not split the date from the time. Please check the following datetimepicker options\nthrown error: " + e + "\ndateTimeString" + i + "\ndateFormat = " + t + "\nseparator = " + s.separator + "\ntimeFormat = " + s.timeFormat), 0 <= e.indexOf(":")) {
                        var o = i.length - (e.length - e.indexOf(":") - 2);
                        i.substring(o);
                        return [$.trim(i.substring(0, o)), $.trim(i.substring(o))]
                    }
                    throw e
                }
                return [i, ""]
            },
            parseDateTimeInternal = function(e, t, i, s, a) {
                var n, r = splitDateTime(e, i, s, a);
                if (n = $.datepicker._base_parseDate(e, r[0], s), "" !== r[1]) {
                    var l = r[1],
                        o = $.datepicker.parseTime(t, l, a);
                    if (null === o) throw "Wrong time format";
                    return {
                        date: n,
                        timeObj: o
                    }
                }
                return {
                    date: n
                }
            },
            selectLocalTimeZone = function(e, t) {
                if (e && e.timezone_select) {
                    e._defaults.useLocalTimezone = !0;
                    var i = void 0 !== t ? t : new Date,
                        s = $.timepicker.timeZoneOffsetString(i);
                    e._defaults.timezoneIso8601 && (s = s.substring(0, 3) + ":" + s.substring(3)), e.timezone_select.val(s)
                }
            };
        $.timepicker = new Timepicker, $.timepicker.timeZoneOffsetString = function(e) {
            var t = -1 * e.getTimezoneOffset(),
                i = t % 60;
            return (0 <= t ? "+" : "-") + ("0" + (101 * ((t - i) / 60)).toString()).slice(-2) + ("0" + (101 * i).toString()).slice(-2)
        }, $.timepicker.timeRange = function(e, t, i) {
            return $.timepicker.handleRange("timepicker", e, t, i)
        }, $.timepicker.dateTimeRange = function(e, t, i) {
            $.timepicker.dateRange(e, t, i, "datetimepicker")
        }, $.timepicker.dateRange = function(e, t, i, s) {
            s = s || "datepicker", $.timepicker.handleRange(s, e, t, i)
        }, $.timepicker.handleRange = function(a, s, n, e) {
            function i(e, t, i) {
                t.val() && new Date(s.val()) > new Date(n.val()) && t.val(i)
            }

            function t(e, t, i) {
                if ($(e).val()) {
                    var s = $(e)[a].call($(e), "getDate");
                    s.getTime && $(t)[a].call($(t), "option", i, s)
                }
            }
            return $.fn[a].call(s, $.extend({
                onClose: function(e, t) {
                    i(this, n, e)
                },
                onSelect: function(e) {
                    t(this, n, "minDate")
                }
            }, e, e.start)), $.fn[a].call(n, $.extend({
                onClose: function(e, t) {
                    i(this, s, e)
                },
                onSelect: function(e) {
                    t(this, s, "maxDate")
                }
            }, e, e.end)), "timepicker" != a && e.reformat && $([s, n]).each(function() {
                var e = $(this)[a].call($(this), "option", "dateFormat"),
                    t = new Date($(this).val());
                $(this).val() && t && $(this).val($.datepicker.formatDate(e, t))
            }), i(s, n, s.val()), t(s, n, "minDate"), t(n, s, "maxDate"), $([s.get(0), n.get(0)])
        }, $.timepicker.log = function(e) {
            window.console && console.log(e)
        }, $.timepicker.version = "1.2"
    }
}(jQuery);
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function(t) {
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(),
function(o) {
    "use strict";
    o.fn.emulateTransitionEnd = function(t) {
        var e = !1,
            i = this;
        o(this).one("bsTransitionEnd", function() {
            e = !0
        });
        return setTimeout(function() {
            e || o(i).trigger(o.support.transition.end)
        }, t), this
    }, o(function() {
        o.support.transition = function() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in e)
                if (void 0 !== t.style[i]) return {
                    end: e[i]
                };
            return !1
        }(), o.support.transition && (o.event.special.bsTransitionEnd = {
            bindType: o.support.transition.end,
            delegateType: o.support.transition.end,
            handle: function(t) {
                if (o(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(n) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        a = function(t) {
            n(t).on("click", e, this.close)
        };
    a.VERSION = "3.3.1", a.TRANSITION_DURATION = 150, a.prototype.close = function(t) {
        var e = n(this),
            i = e.attr("data-target");
        i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = n(i);

        function s() {
            o.detach().trigger("closed.bs.alert").remove()
        }
        t && t.preventDefault(), o.length || (o = e.closest(".alert")), o.trigger(t = n.Event("close.bs.alert")), t.isDefaultPrevented() || (o.removeClass("in"), n.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", s).emulateTransitionEnd(a.TRANSITION_DURATION) : s())
    };
    var t = n.fn.alert;
    n.fn.alert = function(i) {
        return this.each(function() {
            var t = n(this),
                e = t.data("bs.alert");
            e || t.data("bs.alert", e = new a(this)), "string" == typeof i && e[i].call(t)
        })
    }, n.fn.alert.Constructor = a, n.fn.alert.noConflict = function() {
        return n.fn.alert = t, this
    }, n(document).on("click.bs.alert.data-api", e, a.prototype.close)
}(jQuery),
function(n) {
    "use strict";
    var s = function(t, e) {
        this.$element = n(t), this.options = n.extend({}, s.DEFAULTS, e), this.isLoading = !1
    };

    function i(o) {
        return this.each(function() {
            var t = n(this),
                e = t.data("bs.button"),
                i = "object" == typeof o && o;
            e || t.data("bs.button", e = new s(this, i)), "toggle" == o ? e.toggle() : o && e.setState(o)
        })
    }
    s.VERSION = "3.3.1", s.DEFAULTS = {
        loadingText: "loading..."
    }, s.prototype.setState = function(t) {
        var e = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            s = i.data();
        t += "Text", null == s.resetText && i.data("resetText", i[o]()), setTimeout(n.proxy(function() {
            i[o](null == s[t] ? this.options[t] : s[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(e).attr(e, e)) : this.isLoading && (this.isLoading = !1, i.removeClass(e).removeAttr(e))
        }, this), 0)
    }, s.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        t && this.$element.toggleClass("active")
    };
    var t = n.fn.button;
    n.fn.button = i, n.fn.button.Constructor = s, n.fn.button.noConflict = function() {
        return n.fn.button = t, this
    }, n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        var e = n(t.target);
        e.hasClass("btn") || (e = e.closest(".btn")), i.call(e, "toggle"), t.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery),
function(c) {
    "use strict";
    var f = function(t, e) {
        this.$element = c(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = e, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", c.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", c.proxy(this.pause, this)).on("mouseleave.bs.carousel", c.proxy(this.cycle, this))
    };

    function a(s) {
        return this.each(function() {
            var t = c(this),
                e = t.data("bs.carousel"),
                i = c.extend({}, f.DEFAULTS, t.data(), "object" == typeof s && s),
                o = "string" == typeof s ? s : i.slide;
            e || t.data("bs.carousel", e = new f(this, i)), "number" == typeof s ? e.to(s) : o ? e[o]() : i.interval && e.pause().cycle()
        })
    }
    f.VERSION = "3.3.1", f.TRANSITION_DURATION = 600, f.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, f.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, f.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(c.proxy(this.next, this), this.options.interval)), this
    }, f.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, f.prototype.getItemForDirection = function(t, e) {
        var i = "prev" == t ? -1 : 1,
            o = (this.getItemIndex(e) + i) % this.$items.length;
        return this.$items.eq(o)
    }, f.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(i < t ? "next" : "prev", this.$items.eq(t))
    }, f.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && c.support.transition && (this.$element.trigger(c.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, f.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, f.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, f.prototype.slide = function(t, e) {
        var i = this.$element.find(".item.active"),
            o = e || this.getItemForDirection(t, i),
            s = this.interval,
            n = "next" == t ? "left" : "right",
            a = "next" == t ? "first" : "last",
            r = this;
        if (!o.length) {
            if (!this.options.wrap) return;
            o = this.$element.find(".item")[a]()
        }
        if (o.hasClass("active")) return this.sliding = !1;
        var l = o[0],
            h = c.Event("slide.bs.carousel", {
                relatedTarget: l,
                direction: n
            });
        if (this.$element.trigger(h), !h.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = c(this.$indicators.children()[this.getItemIndex(o)]);
                p && p.addClass("active")
            }
            var d = c.Event("slid.bs.carousel", {
                relatedTarget: l,
                direction: n
            });
            return c.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), o[0].offsetWidth, i.addClass(n), o.addClass(n), i.one("bsTransitionEnd", function() {
                o.removeClass([t, n].join(" ")).addClass("active"), i.removeClass(["active", n].join(" ")), r.sliding = !1, setTimeout(function() {
                    r.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(f.TRANSITION_DURATION)) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)), s && this.cycle(), this
        }
    };
    var t = c.fn.carousel;
    c.fn.carousel = a, c.fn.carousel.Constructor = f, c.fn.carousel.noConflict = function() {
        return c.fn.carousel = t, this
    };
    var e = function(t) {
        var e, i = c(this),
            o = c(i.attr("data-target") || (e = i.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var s = c.extend({}, o.data(), i.data()),
                n = i.attr("data-slide-to");
            n && (s.interval = !1), a.call(o, s), n && o.data("bs.carousel").to(n), t.preventDefault()
        }
    };
    c(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), c(window).on("load", function() {
        c('[data-ride="carousel"]').each(function() {
            var t = c(this);
            a.call(t, t.data())
        })
    })
}(jQuery),
function(a) {
    "use strict";
    var r = function(t, e) {
        this.$element = a(t), this.options = a.extend({}, r.DEFAULTS, e), this.$trigger = a(this.options.trigger).filter('[href="#' + t.id + '"], [data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };

    function s(t) {
        var e, i = t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "");
        return a(i)
    }

    function l(o) {
        return this.each(function() {
            var t = a(this),
                e = t.data("bs.collapse"),
                i = a.extend({}, r.DEFAULTS, t.data(), "object" == typeof o && o);
            !e && i.toggle && "show" == o && (i.toggle = !1), e || t.data("bs.collapse", e = new r(this, i)), "string" == typeof o && e[o]()
        })
    }
    r.VERSION = "3.3.1", r.TRANSITION_DURATION = 350, r.DEFAULTS = {
        toggle: !0,
        trigger: '[data-toggle="collapse"]'
    }, r.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, r.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, e = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing");
            if (!(e && e.length && (t = e.data("bs.collapse")) && t.transitioning)) {
                var i = a.Event("show.bs.collapse");
                if (this.$element.trigger(i), !i.isDefaultPrevented()) {
                    e && e.length && (l.call(e, "hide"), t || e.data("bs.collapse", null));
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var s = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return s.call(this);
                    var n = a.camelCase(["scroll", o].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(s, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][n])
                }
            }
        }
    }, r.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = a.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var e = this.dimension();
                this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!a.support.transition) return i.call(this);
                this.$element[e](0).one("bsTransitionEnd", a.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION)
            }
        }
    }, r.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, r.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(t, e) {
            var i = a(e);
            this.addAriaAndCollapsedClass(s(i), i)
        }, this)).end()
    }, r.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var t = a.fn.collapse;
    a.fn.collapse = l, a.fn.collapse.Constructor = r, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = t, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var e = a(this);
        e.attr("data-target") || t.preventDefault();
        var i = s(e),
            o = i.data("bs.collapse") ? "toggle" : a.extend({}, e.data(), {
                trigger: this
            });
        l.call(i, o)
    })
}(jQuery),
function(r) {
    "use strict";
    var t = ".dropdown-backdrop",
        l = '[data-toggle="dropdown"]',
        o = function(t) {
            r(t).on("click.bs.dropdown", this.toggle)
        };

    function n(o) {
        o && 3 === o.which || (r(t).remove(), r(l).each(function() {
            var t = r(this),
                e = h(t),
                i = {
                    relatedTarget: this
                };
            e.hasClass("open") && (e.trigger(o = r.Event("hide.bs.dropdown", i)), o.isDefaultPrevented() || (t.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", i)))
        }))
    }

    function h(t) {
        var e = t.attr("data-target");
        e || (e = (e = t.attr("href")) && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
        var i = e && r(e);
        return i && i.length ? i : t.parent()
    }
    o.VERSION = "3.3.1", o.prototype.toggle = function(t) {
        var e = r(this);
        if (!e.is(".disabled, :disabled")) {
            var i = h(e),
                o = i.hasClass("open");
            if (n(), !o) {
                "ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && r('<div class="dropdown-backdrop"/>').insertAfter(r(this)).on("click", n);
                var s = {
                    relatedTarget: this
                };
                if (i.trigger(t = r.Event("show.bs.dropdown", s)), t.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), i.toggleClass("open").trigger("shown.bs.dropdown", s)
            }
            return !1
        }
    }, o.prototype.keydown = function(t) {
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
            var e = r(this);
            if (t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled")) {
                var i = h(e),
                    o = i.hasClass("open");
                if (!o && 27 != t.which || o && 27 == t.which) return 27 == t.which && i.find(l).trigger("focus"), e.trigger("click");
                var s = " li:not(.divider):visible a",
                    n = i.find('[role="menu"]' + s + ', [role="listbox"]' + s);
                if (n.length) {
                    var a = n.index(t.target);
                    38 == t.which && 0 < a && a--, 40 == t.which && a < n.length - 1 && a++, ~a || (a = 0), n.eq(a).trigger("focus")
                }
            }
        }
    };
    var e = r.fn.dropdown;
    r.fn.dropdown = function(i) {
        return this.each(function() {
            var t = r(this),
                e = t.data("bs.dropdown");
            e || t.data("bs.dropdown", e = new o(this)), "string" == typeof i && e[i].call(t)
        })
    }, r.fn.dropdown.Constructor = o, r.fn.dropdown.noConflict = function() {
        return r.fn.dropdown = e, this
    }, r(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", l, o.prototype.toggle).on("keydown.bs.dropdown.data-api", l, o.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', o.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', o.prototype.keydown)
}(jQuery),
function(n) {
    "use strict";
    var a = function(t, e) {
        this.options = e, this.$body = n(document.body), this.$element = n(t), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };

    function r(o, s) {
        return this.each(function() {
            var t = n(this),
                e = t.data("bs.modal"),
                i = n.extend({}, a.DEFAULTS, t.data(), "object" == typeof o && o);
            e || t.data("bs.modal", e = new a(this, i)), "string" == typeof o ? e[o](s) : i.show && e.show(s)
        })
    }
    a.VERSION = "3.3.1", a.TRANSITION_DURATION = 300, a.BACKDROP_TRANSITION_DURATION = 150, a.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, a.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, a.prototype.show = function(i) {
        var o = this,
            t = n.Event("show.bs.modal", {
                relatedTarget: i
            });
        this.$element.trigger(t), this.isShown || t.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this)), this.backdrop(function() {
            var t = n.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.options.backdrop && o.adjustBackdrop(), o.adjustDialog(), t && o.$element[0].offsetWidth, o.$element.addClass("in").attr("aria-hidden", !1), o.enforceFocus();
            var e = n.Event("shown.bs.modal", {
                relatedTarget: i
            });
            t ? o.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                o.$element.trigger("focus").trigger(e)
            }).emulateTransitionEnd(a.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(e)
        }))
    }, a.prototype.hide = function(t) {
        t && t.preventDefault(), t = n.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : this.hideModal())
    }, a.prototype.enforceFocus = function() {
        n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, a.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", n.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, a.prototype.resize = function() {
        this.isShown ? n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this)) : n(window).off("resize.bs.modal")
    }, a.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, a.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, a.prototype.backdrop = function(t) {
        var e = this,
            i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = n.support.transition && i;
            if (this.$backdrop = n('<div class="modal-backdrop ' + i + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", n.proxy(function(t) {
                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                e.removeBackdrop(), t && t()
            };
            n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : s()
        } else t && t()
    }, a.prototype.handleUpdate = function() {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
    }, a.prototype.adjustBackdrop = function() {
        this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
    }, a.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, a.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, a.prototype.checkScrollbar = function() {
        this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
    }, a.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, a.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, a.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var t = n.fn.modal;
    n.fn.modal = r, n.fn.modal.Constructor = a, n.fn.modal.noConflict = function() {
        return n.fn.modal = t, this
    }, n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var e = n(this),
            i = e.attr("href"),
            o = n(e.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            s = o.data("bs.modal") ? "toggle" : n.extend({
                remote: !/#/.test(i) && i
            }, o.data(), e.data());
        e.is("a") && t.preventDefault(), o.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                e.is(":visible") && e.trigger("focus")
            })
        }), r.call(o, s, this)
    })
}(jQuery),
function(v) {
    "use strict";
    var m = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    m.VERSION = "3.3.1", m.TRANSITION_DURATION = 150, m.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, m.prototype.init = function(t, e, i) {
        this.enabled = !0, this.type = t, this.$element = v(e), this.options = this.getOptions(i), this.$viewport = this.options.viewport && v(this.options.viewport.selector || this.options.viewport);
        for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
            var n = o[s];
            if ("click" == n) this.$element.on("click." + this.type, this.options.selector, v.proxy(this.toggle, this));
            else if ("manual" != n) {
                var a = "hover" == n ? "mouseenter" : "focusin",
                    r = "hover" == n ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, v.proxy(this.enter, this)), this.$element.on(r + "." + this.type, this.options.selector, v.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = v.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, m.prototype.getDefaults = function() {
        return m.DEFAULTS
    }, m.prototype.getOptions = function(t) {
        return (t = v.extend({}, this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, m.prototype.getDelegateOptions = function() {
        var i = {},
            o = this.getDefaults();
        return this._options && v.each(this._options, function(t, e) {
            o[t] != e && (i[t] = e)
        }), i
    }, m.prototype.enter = function(t) {
        var e = t instanceof this.constructor ? t : v(t.currentTarget).data("bs." + this.type);
        if (e && e.$tip && e.$tip.is(":visible")) e.hoverState = "in";
        else {
            if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), v(t.currentTarget).data("bs." + this.type, e)), clearTimeout(e.timeout), e.hoverState = "in", !e.options.delay || !e.options.delay.show) return e.show();
            e.timeout = setTimeout(function() {
                "in" == e.hoverState && e.show()
            }, e.options.delay.show)
        }
    }, m.prototype.leave = function(t) {
        var e = t instanceof this.constructor ? t : v(t.currentTarget).data("bs." + this.type);
        if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), v(t.currentTarget).data("bs." + this.type, e)), clearTimeout(e.timeout), e.hoverState = "out", !e.options.delay || !e.options.delay.hide) return e.hide();
        e.timeout = setTimeout(function() {
            "out" == e.hoverState && e.hide()
        }, e.options.delay.hide)
    }, m.prototype.show = function() {
        var t = v.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var e = v.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !e) return;
            var i = this,
                o = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade");
            var n = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                a = /\s?auto?\s?/i,
                r = a.test(n);
            r && (n = n.replace(a, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(n).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
            var l = this.getPosition(),
                h = o[0].offsetWidth,
                p = o[0].offsetHeight;
            if (r) {
                var d = n,
                    c = this.options.container ? v(this.options.container) : this.$element.parent(),
                    f = this.getPosition(c);
                n = "bottom" == n && l.bottom + p > f.bottom ? "top" : "top" == n && l.top - p < f.top ? "bottom" : "right" == n && l.right + h > f.width ? "left" : "left" == n && l.left - h < f.left ? "right" : n, o.removeClass(d).addClass(n)
            }
            var u = this.getCalculatedOffset(n, l, h, p);
            this.applyPlacement(u, n);
            var g = function() {
                var t = i.hoverState;
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i)
            };
            v.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(m.TRANSITION_DURATION) : g()
        }
    }, m.prototype.applyPlacement = function(t, e) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            s = i[0].offsetHeight,
            n = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(n) && (n = 0), isNaN(a) && (a = 0), t.top = t.top + n, t.left = t.left + a, v.offset.setOffset(i[0], v.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, t), 0), i.addClass("in");
        var r = i[0].offsetWidth,
            l = i[0].offsetHeight;
        "top" == e && l != s && (t.top = t.top + s - l);
        var h = this.getViewportAdjustedDelta(e, t, r, l);
        h.left ? t.left += h.left : t.top += h.top;
        var p = /top|bottom/.test(e),
            d = p ? 2 * h.left - o + r : 2 * h.top - s + l,
            c = p ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(d, i[0][c], p)
    }, m.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, m.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, m.prototype.hide = function(t) {
        var e = this,
            i = this.tip(),
            o = v.Event("hide.bs." + this.type);

        function s() {
            "in" != e.hoverState && i.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), t && t()
        }
        if (this.$element.trigger(o), !o.isDefaultPrevented()) return i.removeClass("in"), v.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", s).emulateTransitionEnd(m.TRANSITION_DURATION) : s(), this.hoverState = null, this
    }, m.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, m.prototype.hasContent = function() {
        return this.getTitle()
    }, m.prototype.getPosition = function(t) {
        var e = (t = t || this.$element)[0],
            i = "BODY" == e.tagName,
            o = e.getBoundingClientRect();
        null == o.width && (o = v.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var s = i ? {
                top: 0,
                left: 0
            } : t.offset(),
            n = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            a = i ? {
                width: v(window).width(),
                height: v(window).height()
            } : null;
        return v.extend({}, o, n, a, s)
    }, m.prototype.getCalculatedOffset = function(t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, m.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
        var s = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return s;
        var n = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - n - a.scroll,
                l = e.top + n - a.scroll + o;
            r < a.top ? s.top = a.top - r : l > a.top + a.height && (s.top = a.top + a.height - l)
        } else {
            var h = e.left - n,
                p = e.left + n + i;
            h < a.left ? s.left = a.left - h : p > a.width && (s.left = a.left + a.width - p)
        }
        return s
    }, m.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, m.prototype.getUID = function(t) {
        for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
        return t
    }, m.prototype.tip = function() {
        return this.$tip = this.$tip || v(this.options.template)
    }, m.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, m.prototype.enable = function() {
        this.enabled = !0
    }, m.prototype.disable = function() {
        this.enabled = !1
    }, m.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, m.prototype.toggle = function(t) {
        var e = this;
        t && ((e = v(t.currentTarget).data("bs." + this.type)) || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), v(t.currentTarget).data("bs." + this.type, e))), e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
    }, m.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type)
        })
    };
    var t = v.fn.tooltip;
    v.fn.tooltip = function(s) {
        return this.each(function() {
            var t = v(this),
                e = t.data("bs.tooltip"),
                i = "object" == typeof s && s,
                o = i && i.selector;
            (e || "destroy" != s) && (o ? (e || t.data("bs.tooltip", e = {}), e[o] || (e[o] = new m(this, i))) : e || t.data("bs.tooltip", e = new m(this, i)), "string" == typeof s && e[s]())
        })
    }, v.fn.tooltip.Constructor = m, v.fn.tooltip.noConflict = function() {
        return v.fn.tooltip = t, this
    }
}(jQuery),
function(n) {
    "use strict";
    var a = function(t, e) {
        this.init("popover", t, e)
    };
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    a.VERSION = "3.3.1", a.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), a.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype), (a.prototype.constructor = a).prototype.getDefaults = function() {
        return a.DEFAULTS
    }, a.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, a.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, a.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, a.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, a.prototype.tip = function() {
        return this.$tip || (this.$tip = n(this.options.template)), this.$tip
    };
    var t = n.fn.popover;
    n.fn.popover = function(s) {
        return this.each(function() {
            var t = n(this),
                e = t.data("bs.popover"),
                i = "object" == typeof s && s,
                o = i && i.selector;
            (e || "destroy" != s) && (o ? (e || t.data("bs.popover", e = {}), e[o] || (e[o] = new a(this, i))) : e || t.data("bs.popover", e = new a(this, i)), "string" == typeof s && e[s]())
        })
    }, n.fn.popover.Constructor = a, n.fn.popover.noConflict = function() {
        return n.fn.popover = t, this
    }
}(jQuery),
function(n) {
    "use strict";

    function s(t, e) {
        var i = n.proxy(this.process, this);
        this.$body = n("body"), this.$scrollElement = n(t).is("body") ? n(window) : n(t), this.options = n.extend({}, s.DEFAULTS, e), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", i), this.refresh(), this.process()
    }

    function e(o) {
        return this.each(function() {
            var t = n(this),
                e = t.data("bs.scrollspy"),
                i = "object" == typeof o && o;
            e || t.data("bs.scrollspy", e = new s(this, i)), "string" == typeof o && e[o]()
        })
    }
    s.VERSION = "3.3.1", s.DEFAULTS = {
        offset: 10
    }, s.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, s.prototype.refresh = function() {
        var o = "offset",
            s = 0;
        n.isWindow(this.$scrollElement[0]) || (o = "position", s = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var t = this;
        this.$body.find(this.selector).map(function() {
            var t = n(this),
                e = t.data("target") || t.attr("href"),
                i = /^#./.test(e) && n(e);
            return i && i.length && i.is(":visible") && [
                [i[o]().top + s, e]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, s.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            o = this.options.offset + i - this.$scrollElement.height(),
            s = this.offsets,
            n = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), o <= e) return a != (t = n[n.length - 1]) && this.activate(t);
        if (a && e < s[0]) return this.activeTarget = null, this.clear();
        for (t = s.length; t--;) a != n[t] && e >= s[t] && (!s[t + 1] || e <= s[t + 1]) && this.activate(n[t])
    }, s.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        var e = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = n(e).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, s.prototype.clear = function() {
        n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var t = n.fn.scrollspy;
    n.fn.scrollspy = e, n.fn.scrollspy.Constructor = s, n.fn.scrollspy.noConflict = function() {
        return n.fn.scrollspy = t, this
    }, n(window).on("load.bs.scrollspy.data-api", function() {
        n('[data-spy="scroll"]').each(function() {
            var t = n(this);
            e.call(t, t.data())
        })
    })
}(jQuery),
function(r) {
    "use strict";
    var a = function(t) {
        this.element = r(t)
    };

    function e(i) {
        return this.each(function() {
            var t = r(this),
                e = t.data("bs.tab");
            e || t.data("bs.tab", e = new a(this)), "string" == typeof i && e[i]()
        })
    }
    a.VERSION = "3.3.1", a.TRANSITION_DURATION = 150, a.prototype.show = function() {
        var t = this.element,
            e = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = (i = t.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var o = e.find(".active:last a"),
                s = r.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                n = r.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(s), t.trigger(n), !n.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var a = r(i);
                this.activate(t.closest("li"), e), this.activate(a, a.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, a.prototype.activate = function(t, e, i) {
        var o = e.find("> .active"),
            s = i && r.support.transition && (o.length && o.hasClass("fade") || !!e.find("> .fade").length);

        function n() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
        }
        o.length && s ? o.one("bsTransitionEnd", n).emulateTransitionEnd(a.TRANSITION_DURATION) : n(), o.removeClass("in")
    };
    var t = r.fn.tab;
    r.fn.tab = e, r.fn.tab.Constructor = a, r.fn.tab.noConflict = function() {
        return r.fn.tab = t, this
    };
    var i = function(t) {
        t.preventDefault(), e.call(r(this), "show")
    };
    r(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery),
function(l) {
    "use strict";
    var h = function(t, e) {
        this.options = l.extend({}, h.DEFAULTS, e), this.$target = l(this.options.target).on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", l.proxy(this.checkPositionWithEventLoop, this)), this.$element = l(t), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };

    function i(o) {
        return this.each(function() {
            var t = l(this),
                e = t.data("bs.affix"),
                i = "object" == typeof o && o;
            e || t.data("bs.affix", e = new h(this, i)), "string" == typeof o && e[o]()
        })
    }
    h.VERSION = "3.3.1", h.RESET = "affix affix-top affix-bottom", h.DEFAULTS = {
        offset: 0,
        target: window
    }, h.prototype.getState = function(t, e, i, o) {
        var s = this.$target.scrollTop(),
            n = this.$element.offset(),
            a = this.$target.height();
        if (null != i && "top" == this.affixed) return s < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(s + this.unpin <= n.top) && "bottom" : !(s + a <= t - o) && "bottom";
        var r = null == this.affixed,
            l = r ? s : n.top;
        return null != i && l <= i ? "top" : null != o && t - o <= l + (r ? a : e) && "bottom"
    }, h.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(h.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, h.prototype.checkPositionWithEventLoop = function() {
        setTimeout(l.proxy(this.checkPosition, this), 1)
    }, h.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                e = this.options.offset,
                i = e.top,
                o = e.bottom,
                s = l("body").height();
            "object" != typeof e && (o = i = e), "function" == typeof i && (i = e.top(this.$element)), "function" == typeof o && (o = e.bottom(this.$element));
            var n = this.getState(s, t, i, o);
            if (this.affixed != n) {
                null != this.unpin && this.$element.css("top", "");
                var a = "affix" + (n ? "-" + n : ""),
                    r = l.Event(a + ".bs.affix");
                if (this.$element.trigger(r), r.isDefaultPrevented()) return;
                this.affixed = n, this.unpin = "bottom" == n ? this.getPinnedOffset() : null, this.$element.removeClass(h.RESET).addClass(a).trigger(a.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == n && this.$element.offset({
                top: s - t - o
            })
        }
    };
    var t = l.fn.affix;
    l.fn.affix = i, l.fn.affix.Constructor = h, l.fn.affix.noConflict = function() {
        return l.fn.affix = t, this
    }, l(window).on("load", function() {
        l('[data-spy="affix"]').each(function() {
            var t = l(this),
                e = t.data();
            e.offset = e.offset || {}, null != e.offsetBottom && (e.offset.bottom = e.offsetBottom), null != e.offsetTop && (e.offset.top = e.offsetTop), i.call(t, e)
        })
    })
}(jQuery);
! function(i) {
    i(function() {
        "use strict";
        var n;
        i.support.transition = (n = function() {
            var n, i = document.createElement("bootstrap"),
                t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (n in t)
                if (void 0 !== i.style[n]) return t[n]
        }()) && {
            end: n
        }
    })
}(window.jQuery);
! function(n, o, r, i) {
    "use strict";
    var u = function(i, t) {
            this.$element = n(i), this.defaultTime = t.defaultTime, this.disableFocus = t.disableFocus, this.disableMousewheel = t.disableMousewheel, this.isOpen = t.isOpen, this.minuteStep = t.minuteStep, this.modalBackdrop = t.modalBackdrop, this.secondStep = t.secondStep, this.showInputs = t.showInputs, this.showMeridian = t.showMeridian, this.showSeconds = t.showSeconds, this._init()
        },
        a = "am",
        c = "pm";
    u.prototype = {
        constructor: u,
        _init: function() {
            var i = this;
            this.$element.siblings(".icon").on({
                click: function() {
                    i.$element.focus(), i.highlightHour()
                }
            }), this.$element.on({
                "focus.timepicker": n.proxy(this.highlightUnit, this),
                "keydown.timepicker": n.proxy(this.elementKeydown, this),
                "keypress.timepicker": n.proxy(this.elementKeypress, this),
                "blur.timepicker": n.proxy(this.blurElement, this),
                "mousewheel.timepicker DOMMouseScroll.timepicker": n.proxy(this.mousewheel, this)
            }), this.setDefaultTime(this.defaultTime)
        },
        blurElement: function() {
            this.highlightedUnit = null, this.updateFromElementVal()
        },
        clear: function() {
            this.hour = "", this.minute = "", this.second = "", this.meridian = "", this.$element.val("")
        },
        decrementHour: function() {
            if (this.showMeridian)
                if (1 === this.hour) this.hour = 12;
                else {
                    if (12 === this.hour) return this.hour--, this.toggleMeridian();
                    if (0 === this.hour) return this.hour = 11, this.toggleMeridian();
                    this.hour--
                }
            else this.hour <= 0 ? this.hour = 23 : this.hour--
        },
        decrementMinute: function(i) {
            var t;
            (t = i ? this.minute - i : this.minute - this.minuteStep) < 0 ? (this.decrementHour(), this.minute = t + 60) : this.minute = t
        },
        decrementSecond: function() {
            var i = this.second - this.secondStep;
            i < 0 ? (this.decrementMinute(!0), this.second = i + 60) : this.second = i
        },
        elementKeydown: function(i) {
            switch (i.keyCode) {
                case 13:
                    this.updateFromElementVal();
                    break;
                case 9:
                case 27:
                    this.updateFromElementVal();
                    break;
                case 37:
                    i.preventDefault(), this.highlightPrevUnit();
                    break;
                case 38:
                    switch (i.preventDefault(), this.highlightedUnit) {
                        case "hour":
                            this.incrementHour(), this.highlightHour();
                            break;
                        case "minute":
                            this.incrementMinute(), this.highlightMinute();
                            break;
                        case "second":
                            this.incrementSecond(), this.highlightSecond();
                            break;
                        case "meridian":
                            this.toggleMeridian(), this.highlightMeridian()
                    }
                    this.update();
                    break;
                case 39:
                    i.preventDefault(), this.highlightNextUnit();
                    break;
                case 40:
                    switch (i.preventDefault(), this.highlightedUnit) {
                        case "hour":
                            this.decrementHour(), this.highlightHour();
                            break;
                        case "minute":
                            this.decrementMinute(), this.highlightMinute();
                            break;
                        case "second":
                            this.decrementSecond(), this.highlightSecond();
                            break;
                        case "meridian":
                            this.toggleMeridian(), this.highlightMeridian()
                    }
                    this.update()
            }
        },
        elementKeypress: function(i) {
            var t = this.$element.get(0);
            if (1 == this.getCursorPosition()) {
                if (48 <= i.keyCode && i.keyCode <= 57) {
                    var e = t.value.split("");
                    e.splice(this.getCursorPosition(), 0, i.keyCode - 48), this.hour = +e.join("").split(":")[0]
                }
                this.highlightMinute(!0)
            }
        },
        getCursorPosition: function() {
            var i = this.$element.get(0);
            if ("selectionStart" in i) return i.selectionStart;
            if (r.selection) {
                i.focus();
                var t = r.selection.createRange(),
                    e = r.selection.createRange().text.length;
                return t.moveStart("character", -i.value.length), t.text.length - e
            }
        },
        setSelectionRange: function(i, t) {
            var e = this.$element.get(0);
            if (e.setSelectionRange) e.setSelectionRange(i, t);
            else if (r.createRange) {
                var h = r.createRange();
                h.setStart(e, i), h.setEnd(e, t);
                var s = o.getSelection();
                s.removeAllRanges(), s.addRange(h)
            }
        },
        getTime: function() {
            if ("number" != typeof this.hour && "number" != typeof this.minute && "number" != typeof this.second) return "";
            var i = this.showMeridian || 1 !== this.hour.toString().length ? this.hour : "0" + this.hour;
            return this.showMeridian && this.meridian === a && 0 === this.hour && (i = 12), i + ":" + (1 === this.minute.toString().length ? "0" + this.minute : this.minute) + (this.showSeconds ? ":" + (1 === this.second.toString().length ? "0" + this.second : this.second) : "") + (this.showMeridian ? "" + this.meridian : "")
        },
        highlightUnit: function() {
            this.position = this.getCursorPosition(), 0 <= this.position && this.position <= 2 ? this.highlightHour() : 3 <= this.position && this.position <= 5 ? this.highlightMinute() : 6 <= this.position && this.position <= 8 ? this.showSeconds ? this.highlightSecond() : this.highlightMeridian() : 8 <= this.position && this.position <= 10 && this.highlightMeridian()
        },
        highlightNextUnit: function() {
            switch (this.highlightedUnit) {
                case "hour":
                    this.highlightMinute();
                    break;
                case "minute":
                    this.showSeconds ? this.highlightSecond() : this.showMeridian ? this.highlightMeridian() : this.highlightHour();
                    break;
                case "second":
                    this.showMeridian ? this.highlightMeridian() : this.highlightHour();
                    break;
                case "meridian":
                    this.highlightHour()
            }
        },
        highlightPrevUnit: function() {
            switch (this.highlightedUnit) {
                case "hour":
                    this.showMeridian ? this.highlightMeridian() : this.showSeconds ? this.highlightSecond() : this.highlightMinute();
                    break;
                case "minute":
                    this.highlightHour();
                    break;
                case "second":
                    this.highlightMinute();
                    break;
                case "meridian":
                    this.showSeconds ? this.highlightSecond() : this.highlightMinute()
            }
        },
        highlightHour: function() {
            var i = this;
            this.highlightedUnit = "hour", setTimeout(function() {
                i.hour < 10 && i.showMeridian ? i.setSelectionRange(0, 1) : i.setSelectionRange(0, 2)
            }, 0)
        },
        highlightMinute: function(i) {
            var t = this.$element.get(0),
                e = this,
                h = (i = !!i, +t.value.split(":")[0]);
            this.highlightedUnit = "minute", setTimeout(function() {
                i ? e.setSelectionRange(3, 5) : h < 10 && e.showMeridian || e.hour != h && h < 10 ? e.setSelectionRange(2, 4) : e.setSelectionRange(3, 5)
            }, 0)
        },
        highlightSecond: function() {
            var i = this.$element.get(0),
                t = this,
                e = +i.value.split(":")[0];
            this.highlightedUnit = "second", setTimeout(function() {
                e < 10 && t.showMeridian || t.hour != e && e < 10 ? t.setSelectionRange(5, 7) : t.setSelectionRange(6, 8)
            }, 0)
        },
        highlightMeridian: function() {
            var i = this;
            this.highlightedUnit = "meridian", this.showSeconds ? setTimeout(function() {
                i.hour < 10 && i.showMeridian ? i.setSelectionRange(8, 10) : i.setSelectionRange(9, 11)
            }, 0) : setTimeout(function() {
                i.hour < 10 && i.showMeridian ? i.setSelectionRange(4, 6) : i.setSelectionRange(5, 7)
            }, 0)
        },
        incrementHour: function() {
            if (this.showMeridian) {
                if (11 === this.hour) return this.hour++, this.toggleMeridian();
                12 === this.hour && (this.hour = 0)
            }
            23 !== this.hour ? this.hour++ : this.hour = 0
        },
        incrementMinute: function(i) {
            var t;
            59 < (t = i ? this.minute + i : this.minute + this.minuteStep - this.minute % this.minuteStep) ? (this.incrementHour(), this.minute = t - 60) : this.minute = t
        },
        incrementSecond: function() {
            var i = this.second + this.secondStep - this.second % this.secondStep;
            59 < i ? (this.incrementMinute(!0), this.second = i - 60) : this.second = i
        },
        mousewheel: function(i) {
            if (!this.disableMousewheel) {
                i.preventDefault(), i.stopPropagation();
                var t = i.originalEvent.wheelDelta || -i.originalEvent.detail,
                    e = null;
                switch ("mousewheel" === i.type ? e = -1 * i.originalEvent.wheelDelta : "DOMMouseScroll" === i.type && (e = 40 * i.originalEvent.detail), e && (i.preventDefault(), n(this).scrollTop(e + n(this).scrollTop())), this.highlightedUnit) {
                    case "minute":
                        0 < t ? this.incrementMinute() : this.decrementMinute(), this.highlightMinute();
                        break;
                    case "second":
                        0 < t ? this.incrementSecond() : this.decrementSecond(), this.highlightSecond();
                        break;
                    case "meridian":
                        this.toggleMeridian(), this.highlightMeridian();
                        break;
                    default:
                        0 < t ? this.incrementHour() : this.decrementHour(), this.highlightHour()
                }
                return !1
            }
        },
        remove: function() {
            n("document").off(".timepicker"), delete this.$element.data().timepicker
        },
        setDefaultTime: function(i) {
            if (this.$element.val()) this.updateFromElementVal();
            else if ("current" === i) {
                var t = new Date,
                    e = t.getHours(),
                    h = t.getMinutes(),
                    s = t.getSeconds(),
                    n = a;
                0 !== s && 60 === (s = Math.ceil(t.getSeconds() / this.secondStep) * this.secondStep) && (h += 1, s = 0), 0 !== h && 60 === (h = Math.ceil(t.getMinutes() / this.minuteStep) * this.minuteStep) && (e += 1, h = 0), this.showMeridian && (0 === e ? e = 12 : 12 <= e ? (12 < e && (e -= 12), n = c) : n = a), this.hour = e, this.minute = h, this.second = s, this.meridian = n, this.update()
            } else !1 === i ? (this.hour = 0, this.minute = 0, this.second = 0, this.meridian = a) : this.setTime(i)
        },
        setTime: function(i) {
            var t, e, h, s, n, o;
            i ? ("object" == typeof i && i.getMonth ? (h = i.getHours(), s = i.getMinutes(), n = i.getSeconds(), this.showMeridian && (o = a, 12 < h && (o = c, h %= 12), 12 === h && (o = c))) : (o = null !== i.match(/p/i) ? c : a, h = (t = (i = i.replace(/[^0-9\:]/g, "")).split(":"))[0] ? t[0].toString() : t.toString(), s = t[1] ? t[1].toString() : "", n = t[2] ? t[2].toString() : "", 4 < h.length && (n = h.substr(4, 2)), 2 < h.length && (e = parseInt(h.substr(0, 2), 10), this.showMeridian && 12 < e && 4 == h.length ? (o = c, s = h.substr(2, 2), h = parseInt(h.substr(0, 2), 10), h -= 12) : this.showMeridian && 12 < e ? (s = h.substr(1, 2), h = h.substr(0, 1)) : (s = h.substr(2, 2), h = h.substr(0, 2))), 2 < s.length && (n = s.substr(2, 2), s = s.substr(0, 2)), 2 < n.length && (n = n.substr(2, 2)), h = parseInt(h, 10), s = parseInt(s, 10), n = parseInt(n, 10), isNaN(h) && (h = 0), isNaN(s) && (s = 0), isNaN(n) && (n = 0), this.showMeridian ? h < 1 ? h = 1 : 12 < h && (h = 12) : (24 <= h ? h = 23 : h < 0 && (h = 0), h < 13 && o === c && (h += 12)), s < 0 ? s = 0 : 60 <= s && (s = 59), this.showSeconds && (isNaN(n) ? n = 0 : n < 0 ? n = 0 : 60 <= n && (n = 59))), this.hour = h, this.minute = s, this.second = n, this.meridian = o, this.update()) : this.clear()
        },
        toggleMeridian: function() {
            this.meridian = this.meridian === a ? c : a
        },
        update: function() {
            this.updateElement(), this.$element.trigger({
                type: "changeTime.timepicker",
                time: {
                    value: this.getTime(),
                    hours: this.hour,
                    minutes: this.minute,
                    seconds: this.second,
                    meridian: this.meridian
                }
            })
        },
        updateElement: function() {
            var i;
            this.showMeridian ? this.meridian == a && 12 == this.hour ? i = 0 : this.meridian == a && this.hour < 13 ? i = this.hour : this.meridian == c && this.hour < 12 ? i = this.hour + 12 : this.meridian == c && 12 == this.hour && (i = 12) : i = this.hour, this.$element.data("time", [i, this.minute, this.second]), this.$element.val(this.getTime()).change()
        },
        updateFromElementVal: function() {
            this.setTime(this.$element.val())
        }
    }, n.fn.timepicker = function(h) {
        var s = Array.apply(null, arguments);
        return s.shift(), this.each(function() {
            var i = n(this),
                t = i.data("timepicker"),
                e = "object" == typeof h && h;
            t || i.data("timepicker", t = new u(this, n.extend({}, n.fn.timepicker.defaults, e, n(this).data()))), "string" == typeof h && t[h].apply(t, s)
        })
    }, n.fn.timepicker.defaults = {
        defaultTime: "current",
        disableFocus: !1,
        disableMousewheel: !1,
        minuteStep: 15,
        secondStep: 15,
        showSeconds: !1,
        showInputs: !0,
        showMeridian: !0
    }, n.fn.timepicker.Constructor = u
}(jQuery, window, document);
! function(i) {
    "use strict";
    var p = function(t, o) {
        this.init("popover", t, o)
    };
    p.prototype = i.extend({}, i.fn.tooltip.Constructor.prototype, {
        constructor: p,
        setContent: function() {
            var t = this.tip(),
                o = this.getTitle(),
                e = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](o), t.find(".popover-content > *")[this.options.html ? "html" : "text"](e || this.options.html), this.options.id && t.attr("id", this.options.id), t.removeClass("fade top bottom left right in")
        },
        hasContent: function() {
            return this.getTitle() || this.getContent()
        },
        getContent: function() {
            var t = this.$element,
                o = this.options;
            return t.attr("data-content") || ("function" == typeof o.content ? o.content.call(t[0]) : o.content)
        },
        tip: function() {
            return this.$tip || (this.$tip = i(this.options.template)), this.$tip
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    }), i.fn.popover = function(n) {
        return this.each(function() {
            var t = i(this),
                o = t.data("popover"),
                e = "object" == typeof n && n;
            o || t.data("popover", o = new p(this, e)), "string" == typeof n && o[n]()
        })
    }, i.fn.popover.Constructor = p, i.fn.popover.defaults = i.extend({}, i.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
    })
}(window.jQuery);
! function(n) {
    "use strict";
    var s = function(t, e) {
        this.init("tooltip", t, e)
    };
    s.prototype = {
        constructor: s,
        init: function(t, e, i) {
            var o, s;
            this.type = t, this.$element = n(e), this.options = this.getOptions(i), this.enabled = !0, "click" == this.options.trigger ? this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this)) : "manual" != this.options.trigger && (o = "hover" == this.options.trigger ? "mouseenter" : "focus", s = "hover" == this.options.trigger ? "mouseleave" : "blur", this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this))), this.options.selector ? this._options = n.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        },
        getOptions: function(t) {
            return (t = n.extend({}, n.fn[this.type].defaults, t, t.skipElementData ? {} : this.$element.data(), this.options)).delay && "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t
        },
        enter: function(t) {
            var e = n(t.currentTarget)[this.type](this._options).data(this.type);
            if (!e.options.delay || !e.options.delay.show) return e.show();
            clearTimeout(this.timeout), e.hoverState = "in", this.timeout = setTimeout(function() {
                "in" == e.hoverState && e.show()
            }, e.options.delay.show)
        },
        leave: function(t) {
            var e = n(t.currentTarget)[this.type](this._options).data(this.type);
            if (this.timeout && clearTimeout(this.timeout), !e.options.delay || !e.options.delay.hide) return e.hide();
            e.hoverState = "out", this.timeout = setTimeout(function() {
                "out" == e.hoverState && e.hide()
            }, e.options.delay.hide)
        },
        show: function() {
            var t, e, i, o, s, n, h;
            if (this.hasContent() && this.enabled) {
                switch (t = this.tip(), this.setContent(), this.options.animation && t.addClass("fade"), n = "function" == typeof this.options.placement ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement, e = /in/.test(n), t.remove().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).appendTo(e ? this.$element : document.body), i = this.getPosition(e), o = t[0].offsetWidth, s = t[0].offsetHeight, e ? n.split(" ")[1] : n) {
                    case "bottom":
                        h = {
                            top: i.top + i.height,
                            left: i.left + i.width / 2 - o / 2
                        };
                        break;
                    case "top":
                        h = {
                            top: i.top - s,
                            left: i.left + i.width / 2 - o / 2
                        };
                        break;
                    case "left":
                        h = {
                            top: i.top + i.height / 2 - s / 2,
                            left: i.left - o
                        };
                        break;
                    case "right":
                        h = {
                            top: i.top + i.height / 2 - s / 2,
                            left: i.left + i.width
                        }
                }
                h.top -= this.options.innerPos && this.options.innerPos.top || 0, h.left -= this.options.innerPos && this.options.innerPos.left || 0, t.css(h).addClass(n).addClass("in")
            }
        },
        setContent: function() {
            var t = this.tip(),
                e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        },
        hide: function() {
            var t, e = this.tip();
            return e.removeClass("in"), n.support.transition && this.$tip.hasClass("fade") ? (t = setTimeout(function() {
                e.off(n.support.transition.end).remove()
            }, 500), e.one(n.support.transition.end, function() {
                clearTimeout(t), e.remove()
            })) : e.remove(), this
        },
        fixTitle: function() {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").removeAttr("title")
        },
        hasContent: function() {
            return this.getTitle()
        },
        getPosition: function(t) {
            return n.extend({}, t ? {
                top: 0,
                left: 0
            } : this.$element.offset(), {
                width: this.$element[0].offsetWidth,
                height: this.$element[0].offsetHeight
            })
        },
        getTitle: function() {
            var t = this.$element,
                e = this.options;
            return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        },
        tip: function() {
            return this.$tip = this.$tip || n(this.options.template)
        },
        validate: function() {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function() {
            this.enabled = !0
        },
        disable: function() {
            this.enabled = !1
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled
        },
        toggle: function() {
            this[this.tip().hasClass("in") ? "hide" : "show"]()
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    }, n.fn.tooltip = function(o) {
        return this.each(function() {
            var t = n(this),
                e = t.data("tooltip"),
                i = "object" == typeof o && o;
            e || t.data("tooltip", e = new s(this, i)), "string" == typeof o && e[o]()
        })
    }, n.fn.tooltip.Constructor = s, n.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover",
        title: "",
        delay: 0,
        html: !0
    }
}(window.jQuery);
! function(e) {
    for (var o, n = {}, r = window.console, i = function() {}, t = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "memory", "profile", "profileEnd", "profiles", "table", "time", "timeEnd", "timestamp", "trace", "warn"], l = t.length, u = function(e) {
            return function() {
                window.ustream && ustream.debug && i.apply.call(r[e], r, arguments)
            }
        }; l--;) n[o = t[l]] = r && r[o] ? u(o) : i;
    ($ || e.mocha) && ($.console = n), ("function" == typeof define || e.mocha) && define("jquery-console", ["jquery"], function(e) {
        return e.console = n, e
    })
}(this);
define("jsdebug", ["module"], function(e) {
    "use strict";
    for (var r, o, n, t, i = (o = (r = /[\?&]jsdebug/).test(window.location.href), n = r.test(document.referrer), t = window && window.ustream && window.ustream.debug, o || n || t), l = window.console, d = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "memory", "profile", "profileEnd", "profiles", "table", "time", "timeEnd", "timestamp", "trace", "warn"], a = d.length, u = function(e) {
            if (l && i) {
                for (var r = arguments.length, o = Array(1 < r ? r - 1 : 0), n = 1; n < r; n++) o[n - 1] = arguments[n];
                l[e].apply(l, o)
            }
        }, s = function() {
            for (var e = arguments.length, r = Array(e), o = 0; o < e; o++) r[o] = arguments[o];
            u("log", r)
        }; --a;) {
        var f = d[a];
        s[f] = u.bind(null, f)
    }
    e.exports = s
});
window.ustream || (window.ustream = {}), ustream.__modules || (ustream.__modules = []), ustream.__modules.push("storage.js"), ustream.storage = {}, ustream.storage = function() {
    var n = function() {
            var t = !1;
            try {
                t = "localStorage" in window && null !== window.localStorage
            } catch (e) {
                t = !1
            }
            if (t) try {
                window.localStorage.setItem("privateBrowseTest", !0)
            } catch (e) {
                t = !1
            }
            return t || (window.localStorage = {
                getItem: function() {},
                setItem: function() {},
                removeItem: function() {},
                clear: function() {}
            }), t
        }(),
        c = function(e) {
            var t = {
                key: e.key
            };
            e.createdAt && (t.createdAt = e.createdAt)
        },
        r = function(e) {
            var t, o = [],
                s = Object.prototype.hasOwnProperty;
            if ("function" == typeof Object.keys) o = Object.keys(e);
            else
                for (t in e) s.call(e, t) && o.push(t);
            return o
        },
        u = function(e, t) {
            var o, s = {};
            if ("string" == typeof e) {
                if (!(o = e.match(/(local|session|global)+\.+([\w\.\-\:]*)/i))) throw $.console.trace(), $.console.log("ustream.storage: No storage type defined, missing local or session!"), new Error("ustream.storage: No storage type defined, missing local or session!");
                s = {
                    type: o[1],
                    key: o[2]
                }, "undefined" !== t && (s.value = t)
            } else "object" == typeof e && (e.local ? s = {
                type: "local",
                key: "object" == typeof e.local ? r(e.local)[0] : e.local
            } : e.session && (s = {
                type: "session",
                key: "object" == typeof e.session ? r(e.session)[0] : e.session
            }), e[s.type][s.key] && (s.value = e[s.type][s.key]));
            return s
        },
        l = function(e) {
            var t = null;
            return "local" === e.type ? t = localStorage : "session" === e.type && (t = sessionStorage), t
        };
    return {
        __depends: ["ustream.events"],
        __ns: ["storageGet <- ustream.storage.get", "storageSet <- ustream.storage.set", "storageRemove <- ustream.storage.remove", "storageClear <- ustream.storage.clear"],
        available: n,
        get: function(e) {
            var t, o, s = !1,
                r = {};
            return n && (t = u(e), (o = l(t).getItem(t.key)) ? ((r = JSON.parse(o)).key = e, s = !0) : s = !1), r.success = s, r
        },
        set: function(e, t) {
            var o, s, r, a = !1;
            if (n) {
                o = u(e, t), s = l(o), r = {
                    createdAt: (new Date).getTime(),
                    value: o.value
                };
                try {
                    s.setItem(o.key, JSON.stringify(r)), a = !0
                } catch (e) {
                    if (ustream.debug || ustream.vars.debug) throw $.console.trace(), $.console.log(e.name, e.message), new Error(e.message);
                    a = !1
                }
                c({
                    type: "set",
                    key: e,
                    createdAt: r.createdAt
                })
            }
            return {
                success: a
            }
        },
        remove: function(e) {
            var t, o = !1;
            return n && (t = u(e), l(t).removeItem(t.key), c({
                type: "remove",
                key: e
            }), o = !0), {
                success: o
            }
        },
        clear: function(e) {
            var t = !1;
            return n && (l({
                type: e
            }).clear(), t = !0), {
                success: t
            }
        }
    }
}(), "function" == typeof define ? define("storage", function() {
    return ustream.storage
}) : "undefined" != typeof module && void 0 !== module.exports && (module.exports = ustream.storage);
"use strict";
! function(e) {
    var n = {
        htmlRegexes: {
            lt: /</g,
            gt: />/g,
            dblquote: /"/g,
            quote: /'/g
        },
        htmlRegexesRevert: {
            lt: /&lt;/g,
            gt: /&gt;/g,
            dblquote: /&quot;/g,
            quote: /&#039;/g
        },
        urlSubst: function(e, t) {
            var r, n, o;
            for (r in t) t.hasOwnProperty(r) && (n = t[r], o = "x" + r.toUpperCase() + "x", e = e.replace(new RegExp(o, "g"), n));
            return e
        },
        urlFromStr: function(e) {
            var t, r, n, o, a, s, i, l, u, c, p, h, f, g, m, d;
            if (h = a = l = t = "", i = {}, 1 < (n = e.split("#")).length && (t = "#" + n[1]), 1 < (u = (s = (f = n[0].split("?"))[0]).split("://")).length ? (l = u[0] + ":", s = u.slice(1).join("://")) : s = u.join("://"), g = (c = s.split("/"))[0], s = 1 < c.length ? "/" + c.slice(1).join("/") : "", o = (p = g.split(":"))[0], 1 < p.length && (a = +p[1]), 1 < f.length) {
                for (m in r = f[1].split("&")) r.hasOwnProperty(m) && (1 < (d = r[m].split("=")).length ? i[d[0]] = d[1] : i[d[0]] = null);
                h = "?" + f[1]
            }
            return e = "", l && (e += l + "//"), {
                host: g,
                hostname: o,
                path: s,
                port: a,
                protocol: l,
                search: h,
                queryObject: i,
                hash: t,
                href: e += g + s + h + t
            }
        },
        strFromUrl: function(e, t) {
            var r, n, o = "",
                a = [];
            if (e.protocol && (o += e.protocol + "//"), r = e.search, !t && e.queryObject) {
                for (n in a = [], e.queryObject) e.queryObject.hasOwnProperty(n) && (e.queryObject[n] ? a.push(n + "=" + e.queryObject[n]) : a.push(n));
                r = "?" + a.join("&")
            }
            return o += e.host + e.path + r + e.hash
        },
        labelSubst: function(e, t) {
            var r, n;
            for (n in t) t.hasOwnProperty(n) && (r = t[n], "#" !== n.substr(0, 1) && "#" !== n.substr(n.length - 1, 1) && (n = "#" + n + "#"), e = e.replace(new RegExp(n, "g"), r));
            return e
        },
        zeroPad: function(e, t) {
            var r = e < 0;
            for (e += "", r && (e = e.slice(1)); e.length < t;) e = "0" + e;
            return r ? "-" + e : e
        },
        truncateByLength: function(e, t, r) {
            if (e.length < t) return e;
            var n, o = e.split(" "),
                a = o.length,
                s = 0,
                i = t,
                l = [];
            if (1 === o.length) l = o[0].substr(0, t);
            else {
                for (n = 0; n < a && s < i; n += 1) l.push(o[n]), s += o[n].length + 1;
                l = l.join(" ")
            }
            return r && (l += "&hellip;"), l
        },
        prettyDate: function(e) {
            var t, r = ustream.framework.i18n._t_,
                n = new Date(e),
                o = ((new Date).getTime() - n.getTime()) / 1e3;
            if (!(isNaN(o) || o < 0)) return o < 86400 ? o < 60 && r("js.v3.pretty_date.now") || o < 120 && r("js.v3.pretty_date.one_min") || o < 3600 && r("js.v3.pretty_date.n_mins").replace(/#n#/, Math.floor(o / 60)) || o < 7200 && r("js.v3.pretty_date.one_hour") || r("js.v3.pretty_date.n_hours").replace(/#n#/, Math.floor(o / 3600)) : 1 === (t = Math.floor(o / 86400)) && r("js.v3.pretty_date.yesterday") || 1 < t && r("js.v3.pretty_date.n_days").replace(/#n#/, t)
        },
        rndTimestamp: function() {
            return ((new Date).getTime() + Math.random() + "").replace(".", "")
        },
        _setDecimal: function(e, t) {
            var r = e.indexOf("."),
                n = 0,
                o = -1 < r;
            return o && (n = e.length - r - 1), 0 < t ? o ? t < n ? e = e.slice(0, r + t + 1) : n < t && (e += "0") : e += ".0" : o && (e = parseInt(e, 10) + ""), e
        },
        setDecimalFormat: function(e, t) {
            var r;
            for (e = parseFloat(e), e = isNaN(e) ? "0" : "" + e; e !== r;) r = e, e = n._setDecimal(r, t);
            return e
        },
        formatNumber: function(e, t, r, n) {
            var o, a, s, i = 2,
                l = ",",
                u = ".";
            return e = parseFloat(e), isNaN(e) ? NaN : (t = void 0 === t ? i : t, r = void 0 === r ? l : r, n = void 0 === n ? u : n, s = (o = e.toString().split("."))[0].replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + r), (a = (o[1] || "").substring(0, t)).length < t && (a += new Array(t - a.length + 1).join("0")), a ? s + n + a : s)
        },
        _wrapInAnchor: function(e) {
            var t = e;
            return /^https?:\/\//.test(t) || (t = "http://" + t), '<a href="' + t + '" target="_blank">' + e + "</a>"
        },
        linkify: function(e) {
            return e.replace(/\b((https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gim, n._wrapInAnchor)
        },
        getCaretPosition: function(e) {
            var t = 0;
            if (document.selection) {
                e.focus();
                var r = document.selection.createRange();
                r.moveStart("character", -e.value.length), t = r.text.length
            } else(e.selectionStart || "0" == e.selectionStart) && (t = e.selectionStart);
            return t
        },
        setCaretPosition: function(e, t) {
            if (document.selection) {
                e.focus();
                var r = document.selection.createRange();
                r.moveStart("character", -e.value.length), r.moveStart("character", t), r.moveEnd("character", 0), r.select()
            } else(e.selectionStart || "0" == e.selectionStart) && (e.selectionStart = t, e.selectionEnd = t, e.focus())
        },
        getMediaId: function(e) {
            return (e + "").split(",").pop()
        },
        ucFirst: function(e) {
            return e[0].toUpperCase() + e.slice(1)
        },
        htmlEscape: function(e) {
            if ("string" != typeof e) return e;
            var t = n.htmlRegexes;
            return e.replace(t.lt, "&lt;").replace(t.gt, "&gt;").replace(t.dblquote, "&quot;").replace(t.quote, "&#039;")
        },
        htmlUnescape: function(e) {
            if ("string" != typeof e) return e;
            var t = n.htmlRegexesRevert;
            return e.replace(t.lt, "<").replace(t.gt, ">").replace(t.dblquote, '"').replace(t.quote, "'")
        },
        getHMSfromSec: function(e) {
            var t = Math.floor(e / 3600),
                r = e - 3600 * t,
                n = Math.floor(r / 60);
            return {
                hours: +t,
                minutes: +n,
                seconds: +(r - 60 * n)
            }
        },
        formatLength: function(e) {
            return this.formatSecsToReadableDuration(e, "%h:%i:%s")
        },
        formatSecsToReadableDuration: function(e, t) {
            var r = t || "%h:%i",
                n = this.getHMSfromSec(e);
            return /%+[g|h]/.test(r) || (n.minutes += 60 * n.hours), r.replace("%g", n.hours).replace("%h", this.zeroPad(n.hours, 2)).replace("%k", n.minutes).replace("%i", this.zeroPad(n.minutes, 2)).replace("%q", n.seconds).replace("%s", this.zeroPad(n.seconds, 2))
        },
        htmlDecode: function(e) {
            return (new DOMParser).parseFromString(e, "text/html").documentElement.textContent
        }
    };
    e && (e.$ && (e.$.stringUtils = n), e.ustream && e.ustream.framework && (e.ustream.framework.stringUtils = n)), "function" == typeof define ? define("stringUtils", [], function() {
        return n
    }) : "undefined" != typeof module && void 0 !== module.exports && (module.exports = n)
}(window);
"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function(e) {
    var t = function(f) {
            var e = function(e, t, o) {
                    var r = window.ustream,
                        n = r.vars,
                        i = void 0 === n ? {} : n,
                        a = r.labels,
                        s = void 0 === a ? {} : a;
                    "object" !== (void 0 === t ? "undefined" : _typeof(t)) || o || (o = t, t = null);
                    var l = s[e],
                        u = void 0;
                    return (u = l || t) ? o && (u = f.labelSubst(u, o)) : u = e.toUpperCase(), i && i.debugL10n && (u = '<dfn key="' + e + '">' + u + "</dfn>"), u
                },
                n = function(t, o) {
                    var e = window.ustream,
                        r = e.vars,
                        n = void 0 === r ? {} : r,
                        i = e.labels,
                        a = void 0 === i ? {} : i;
                    a[t] ? o() : $.getJSON(f.urlSubst(n.translateUrl, {
                        locale: n.locale || "en_US",
                        unit: t,
                        xhrFields: {
                            withCredentials: !0
                        }
                    }), function(e) {
                        e && e.translation ? a[t] = e.translation : $.console.log("translation failed, no response"), o()
                    })
                };
            return e.getLabel = function e(t, o) {
                if ("string" != typeof t)
                    if (0 < t.length) {
                        var r = t.shift();
                        n(r, function() {
                            e(t, o)
                        })
                    } else o();
                else n(t, o)
            }, e
        },
        o = void 0;
    if (e) {
        e.ustream || (e.ustream = {}), e.ustream.framework || (e.ustream.framework = {}), e.ustream.framework.i18n || (e.ustream.framework.i18n = {});
        var r = t(e.ustream.framework.stringUtils);
        e.ustream.framework.i18n._t_ = r, e.ustream.framework.i18n.getLabel = r.getLabel
    }
    "function" == typeof define ? define("i18n", ["stringUtils"], t) : "undefined" != typeof module && void 0 !== module.exports && (o = require("stringUtils"), module.exports = t(o))
}(window);
! function(E) {
    var w, j, b, t, U, e, n = E.jQuery,
        i = E.ustream;

    function r() {
        return i && i.debug
    }

    function _() {
        r() && console.log.apply(console, arguments)
    }

    function C() {
        r() && console.error.apply(console, arguments)
    }

    function a() {
        r() && console.trace()
    }

    function D(e) {
        var n = (e = e || E.document || E)._ustreamTargetId;
        return n || (n = "UstreamEventTarget" + (t += 1), e._ustreamTargetId = n), n
    }

    function Q(e) {
        var n = E.document || E;
        return e && e[2] && "object" == typeof e[2] && (n = e[2]), n
    }

    function T(e) {
        return e && e[2] && "string" == typeof e[2] ? e[2] : e && e[3] && "string" == typeof e[3] ? e[3] : U
    }

    function o(e, n) {
        null == n && (n = {});
        var t, i, r, o, a, u, c, s = e,
            l = Q(arguments),
            d = D(l),
            f = T(arguments),
            p = (o = s, a = n, u = l, c = f, {
                timestamp: (new Date).getTime(),
                type: o,
                eventData: a,
                target: u,
                currentTarget: u,
                namespace: c,
                stop: function() {},
                cancel: function() {},
                stopPropagation: function() {},
                preventDefault: function() {}
            }),
            v = w,
            h = j,
            g = b,
            m = [],
            y = !0;
        if (_("Dispatch: ", s, n), l === (E || E.document) && void 0 !== h[s] && void 0 !== h[s][d] && void 0 !== h[s][d][f] && (h[s][d][f] = null, delete h[s][d][f]), v.push(s), void 0 === g[s] || void 0 === g[s][d] || void 0 === g[s][d][f]) {
            if (void 0 !== g[s] && void 0 !== g[s][d] && f === U) {
                for (t in r = 0, i = g[s][d]) r += 1;
                0 < r && (y = !1)
            }
            if (h[s] || (h[s] = {}), h[s][d] || (h[s][d] = {}), y) return void(h[s][d][f] = p)
        }
        if (void 0 !== g[s] && void 0 !== g[s][d]) {
            if (f === U)
                for (t in t = null, i = g[s][d]) m = m.concat(i[t]);
            else {
                if (void 0 === g[s][d][f]) return;
                m = g[s][d][f]
            }
            if (m) {
                for (r = m.length; r;) {
                    r -= 1;
                    try {
                        m[r].call(this, p)
                    } catch (e) {
                        C("Error in events.js", e.name, e.message)
                    }
                }
                for (r = v.length; r;) v[r -= 1] === s && v.splice(r, 1)
            }
        }
    }

    function u(e, n) {
        var t = e,
            i = D(Q(arguments)),
            r = T(arguments),
            o = j;
        if (!t) throw a(), _("Undefined, or missing event passed to ustream.events.capture", e), "Undefined, or missing event";
        if (!n) throw a(), C("Undefined, or missing event handler passed", e), "Undefined, or missing handler";
        _("Capture: ", t), b[t] || (b[t] = {}), b[t][i] || (b[t][i] = {}), b[t][i][r] || (b[t][i][r] = []), b[t][i][r].push(n), void 0 !== o[t] && void 0 !== o[t][i] && (void 0 !== o[t][i][r] ? n.call(this, o[t][i][r]) : void 0 !== o[t][i][U] && n.call(this, o[t][i][U]))
    }

    function c(e) {
        var n = Array.prototype.slice.apply(arguments),
            t = n.slice(0, 1).concat([function() {}], n.slice(1)),
            i = e,
            r = b,
            o = D(Q(t)),
            a = T(t);
        r[i] && r[i][o] && r[i][o][a] && (_("Capture: ", i), delete b[i][o][a])
    }

    function s(e) {
        if (!e) {
            _("Uncaptured Events"), _(" - already fired: ", w.length), _(" - list: ", w), _(j), _("Event Callback Cache:");
            var n, t, i, r, o = 0,
                a = 0,
                u = "",
                c = "";
            for (n in b)
                for (r in o += 1, t = b[n])
                    for (i in u.indexOf(r) < 0 && (u += "%" + r + "%"), t[r]) c.indexOf(i) < 0 && (c += "%" + i + "%"), a += t[r][i].length;
            _(" - number of events with handlers: ", o), _(" - used targets: ", u.split("%%").length), _(" - used namespaces: ", c.split("%%").length), _(" - callbacks registered: ", a), _(b)
        }
        return {
            getEventCache: function() {
                return b
            }
        }
    }
    w = [], j = {}, b = {}, U = "global", e = {
        stop: function() {},
        cancel: function() {},
        stopPropagation: function() {},
        preventDefault: function() {},
        isNull: !(t = 0)
    }, !n || n.dispatch && !E.mocha || (n.dispatch = o, n.capture = u, n.uncapture = c, n.nullEvent = e, n.eventRuntime = s), !i || i.events && !E.mocha || (i.events = {
        __depends: [],
        __ns: ["dispatchEvent <- window.jQuery.dispatch", "captureEvent <- window.jQuery.capture", "uncaptureEvent <- window.jQuery.uncapture", "nullEvent <- window.jQuery.nullEvent"],
        dispatch: o,
        capture: u,
        uncapture: c,
        nullEvent: e,
        runtime: s
    }), ("function" == typeof define || E.mocha) && define("events", [], function() {
        return {
            dispatch: o,
            capture: u,
            uncapture: c,
            nullEvent: e,
            runtime: s
        }
    })
}(this);
jQuery.cookie = function(e, o, i) {
    if (void 0 === o) {
        var n = null;
        if (document.cookie && "" != document.cookie)
            for (var r = document.cookie.split(";"), t = 0; t < r.length; t++) {
                var u = jQuery.trim(r[t]);
                if (u.substring(0, e.length + 1) == e + "=") {
                    n = decodeURIComponent(u.substring(e.length + 1));
                    break
                }
            }
        return n
    }
    i = i || {}, null === o && (o = "", i.expires = -1, i.path = "/");
    var c, p = "";
    i.expires && ("number" == typeof i.expires || i.expires.toUTCString) && ("number" == typeof i.expires ? (c = new Date).setTime(c.getTime() + 24 * i.expires * 60 * 60 * 1e3) : c = i.expires, p = "; expires=" + c.toUTCString());
    var s = "; path=" + (i.path ? i.path : "/"),
        a = i.domain ? "; domain=" + i.domain : "",
        d = i.secure ? "; secure" : "";
    document.cookie = [e, "=", encodeURIComponent(o), p, s, a, d].join("")
}, window.define && define("cookie", function() {
    return jQuery.cookie
});
define("ustream-copy", [], function() {
    var o = Boolean(document.createRange && window.getSelection),
        c = document.body.createTextRange;

    function t(e) {
        var t, n;
        e.select ? e.select() : o ? function(t) {
            var n = document.createRange(),
                o = window.getSelection();
            o.removeAllRanges();
            try {
                n.selectNodeContent(t), o.addRange(n)
            } catch (e) {
                n.selectNode(t), o.addRange(n)
            }
        }(e) : c && ((n = document.body.createTextRange()).moveToElementText(t), n.select())
    }

    function n() {
        o ? window.getSelection().removeAllRanges() : c && document.selection && document.selection && document.selection.empty()
    }
    return {
        selectElementContent: t,
        unselectAllText: n,
        copyElementContent: function(e) {
            t(e), document.execCommand("copy"), n()
        }
    }
});
define("ustream-centrallogging/conf/consts", [], function() {
    return {
        NAME: "Central Logging JS Client",
        VERSION: "dev",
        CORRELATION_ID_LENGTH: 32,
        UUID_LENGTH: 32,
        MAX_REQUEST_INTERVAL: 6e4,
        XHR_SEND_TIMEOUT: 1e3,
        XHR_RETRY_TIMEOUT: 2e3,
        XHR_MAX_RETRY: 5,
        errors: {
            WRONG_CONFIG: "wrongConfig",
            PAYLOAD_TOO_LARGE: "payloadTooLarge",
            XHR_TIMEOUT: "xhrTimeout",
            XHR_ERROR: "xhrError",
            SERVER_ERROR: "serverError"
        }
    }
}), define("ustream-centrallogging/vendor/ustream-env", [], function() {
    var e, n, t, r, o, a, i, s, u, c, l, g, d = "undefined",
        f = "function",
        p = "object",
        m = "Shockwave Flash",
        h = "ShockwaveFlash.ShockwaveFlash",
        v = "application/x-shockwave-flash",
        w = navigator,
        _ = w.mimeTypes,
        y = w.userAgent.toLowerCase(),
        E = w.platform.toLowerCase(),
        R = window.location;

    function O() {
        var e = /android/i.test(y);
        return e && (e = y.match(/android (\d+)(?:\.(\d+))?(?:\.(\d+))?/i)).shift(), e
    }

    function b() {
        var e = /iphone|ipad|ipod/.test(y);
        return e && (e = y.match(/os (\d*)?\_?(\d*)?\_?(\d*)/i)).shift(), e
    }

    function T() {
        return /BB10(.*)Mobile/i.test(y)
    }

    function I() {
        return -1 < y.indexOf("playstation")
    }

    function S() {
        var e = y.match(/Chrome\/(\d+(?:\.\d+)*)/i);
        return e = !(!e || A() || N()) && e[1].split(".")
    }

    function A() {
        var e = y.match(/OPR\/(\d+(?:\.\d+)*)/i);
        return e = e ? e[1].split(".") : !(!window.opera || !window.opera.version) && window.opera.version().split(".")
    }

    function N() {
        var e = y.match(/Edge\/(\d+(?:\.\d+)*)/i);
        return !!e && e[1].split(".")
    }

    function k() {
        var e, n;
        if (typeof window.ActiveXObject === d) return !1;
        try {
            if (e = new window.ActiveXObject(h)) return !(n = e.GetVariable("$version")) || (n = n.split(" ")[1].split(","), [parseInt(n[0], 10), parseInt(n[1], 10), parseInt(n[2], 10)])
        } catch (e) {}
        return !1
    }
    return g = b(), {
        w3: typeof document.getElementById !== d && typeof document.getElementsByTagName !== d && typeof document.createElement !== d,
        win: /win/.test(E || y),
        mac: /mac/.test(E || y),
        desktop: !(O() || b() || T() || I()),
        ios: g,
        android: O(),
        blackberry: T(),
        playstation: I(),
        chrome: S(),
        opera: A(),
        ff: (l = y.match(/Firefox\/(\d+(?:\.\d+)*)/i), !!l && l[1].split(".")),
        safari: (u = y.match(/Safari/i), c = y.match(/Version\/(\d+(?:\.\d+)*)/i), u = !(!u || A() || S() || N()) && (!c || c[1].split("."))),
        ie: (a = -1 < document.getElementsByTagName("html")[0].className.indexOf("ie "), i = y.match(/Trident\/(\d+)/i), s = y.match(/MSIE (\d+(?:\.\d+)*)/i), a = a ? !s || s[1].split(".") : !!i && [11, 0]),
        phantomJS: /PhantomJS/.test(y),
        ssl: /https/.test(R.protocol),
        wk: !!/webkit/.test(y) && parseFloat(y.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")),
        edgeIe: N(),
        ws: (r = g, o = typeof window.WebSocket, (o = o === f || o === p) && typeof window.WebSocket.prototype.CLOSING === d && (o = !1), r && !o && (4 < r[0] || 4 === r[0] && 2 < r[1]) && (o = !0), o),
        storage: function() {
            var e = "" + Math.random();
            try {
                return localStorage.setItem(e, e), localStorage.removeItem(e), !0
            } catch (e) {
                return !1
            }
        }(),
        placeholder: function() {
            var n = !1;
            try {
                n = document.createElement("input").hasOwnProperty("placeholder")
            } catch (e) {
                n = !1
            }
            return n
        }(),
        touchEvents: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
        swf: (t = [0, 0, 0], typeof w.plugins !== d && typeof w.plugins[m] === p ? !(n = w.plugins[m].description) || typeof _ !== d && _[v] && !_[v].enabledPlugin || (n = n.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), t[0] = +n.replace(/^(.*)\..*$/, "$1"), t[1] = +n.replace(/^.*\.(.*)\s.*$/, "$1"), t[2] = /[a-zA-Z]/.test(n) ? +n.replace(/^.*[a-zA-Z]+(.*)$/, "$1") : 0) : k() && (t = k()), "000" === t.join("") && (t = !1), t),
        flashPPAPI: (e = _ && _[v] && _[v].enabledPlugin && _[v].enabledPlugin.filename || "", "pepflashplayer.dll" === (e = e.toLowerCase()) || "libpepflashplayer.so" === e || "pepperflashplayer.plugin" === e || "chrome.plugin" === e.slice(-13)),
        flashActiveX: k(),
        nav: {
            appCodeName: w.appCodeName,
            appName: w.appName,
            appVersion: w.appVersion,
            cpuClass: w.cpuClass,
            platform: w.platform,
            product: w.product,
            userAgent: w.userAgent,
            vendor: w.vendor,
            vendorSub: w.vendorSub
        }
    }
}), define("ustream-centrallogging/conf/rpin", ["ustream-centrallogging/vendor/ustream-env"], function(e) {
    var n = "umte_rpin",
        t = "_rpin.0";
    return e.storage && ((t = localStorage.getItem(n)) || (t = "_rpin." + ("" + Math.random()).substr(2), localStorage.setItem(n, t))), t
}), define("ustream-centrallogging/utils/string", [], function() {
    return {
        random: function(e, n, t, r) {
            var o, a = "",
                i = "";
            if ((void 0 === n || n) && (a += "abcdefghijklmnopqrstuvwxyz"), (void 0 === n || t) && (a += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), (void 0 === n || r) && (a += "0123456789"), a.length)
                for (o = 0; o < e; ++o) i += a.substr(Math.floor(a.length * Math.random()), 1);
            return i
        }
    }
}), define("ustream-centrallogging/validateconfig", ["ustream-centrallogging/conf/consts"], function(r) {
    var n, t = {
        domain: e("string"),
        subdomain: function(e) {
            return "string" == typeof e && -1 === e.indexOf(".")
        },
        tag: function(e) {
            return "string" == typeof e && -1 < e.indexOf(".")
        },
        type: e("string"),
        extra: function(e) {
            if (void 0 === e) return !0;
            if ("object" != typeof e) return !1;
            for (var n in e)
                if (e.hasOwnProperty(n) && e[n] instanceof Object) return !1;
            return !0
        },
        debug: e("boolean"),
        callback: (n = "function", function(e) {
            return typeof e === n
        })
    };

    function s(e, n) {
        var t = {
            type: r.errors.WRONG_CONFIG,
            propertyName: e
        };
        if (!n) throw new Error(t);
        n(t)
    }

    function e(n) {
        return function(e) {
            return void 0 === e || typeof e === n
        }
    }
    return function(e) {
        var n = e && e.callback;
        return function e(n, t, r, o) {
            var a, i;
            if ("object" != typeof t) return s(n, o), !1;
            for (a in r)
                if (r.hasOwnProperty(a))
                    if ("object" == typeof(i = r[a])) e(a, t[a], i);
                    else if (!i(t[a])) return s(a, o), !1;
            return !0
        }("config", e, t, n)
    }
}), define("ustream-centrallogging/utils/object", [], function() {
    return {
        defaultsDeep: function e(n, t) {
            if (arguments.length < 2) return n;
            for (var r = 1; r < arguments.length; ++r)
                for (var o in t = arguments[r]) t.hasOwnProperty(o) && void 0 !== t[o] && void 0 === n[o] && (n[o] = "object" == typeof t[o] ? e({}, t[o]) : t[o]);
            return n
        }
    }
}), define("ustream-centrallogging/factories/skeleton", ["ustream-centrallogging/vendor/ustream-env", "ustream-centrallogging/conf/consts", "ustream-centrallogging/conf/rpin", "ustream-centrallogging/utils/object"], function(o, a, i, s) {
    var u = window.ustream && window.ustream.vars;

    function c() {
        var e = {
            win: "Windows",
            mac: "MacOS",
            ios: "iOS",
            android: "Android",
            blackberry: "BlackBerry",
            playstation: "Playstation"
        };
        for (var n in e)
            if (e.hasOwnProperty(n) && o[n]) return e[n];
        return "unknown"
    }

    function l(e, n) {
        switch (n) {
            case "web":
                return {
                    platform: "web",
                    device_type: o.desktop ? "desktop" : "mobile",
                    operation_system: c(),
                    os_name: c(),
                    os_version: (r = navigator.userAgent.match(/\((.*?)\)/), r && r[1] && (t = r[1].match(/\d.*/)) && t[0] || "unknown"),
                    screen_size: window.screen && window.screen.width && window.screen.height ? window.screen.width + "x" + window.screen.height : "unknown",
                    browser: function() {
                        var e = {
                            chrome: "Chrome",
                            opera: "Opera",
                            ff: "Firefox",
                            safari: "Safari",
                            edgeIe: "Edge",
                            ie: "Internet Explorer"
                        };
                        for (var n in e)
                            if (e.hasOwnProperty(n) && o[n]) return e[n] + (o[n].length ? " " + o[n][0] : "");
                        return "unknown"
                    }(),
                    locale: navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "unknown",
                    rpin: i,
                    user_id: u && u.loggedInUserId,
                    organization_id: u && u.organizationId,
                    login_id: u && u.orgUserId,
                    session_id: e
                };
            default:
                return {}
        }
        var t, r
    }
    return function(e, n, t, r) {
        var o = {
            u_corr_id: e
        };
        return s.defaultsDeep(o, l(e, n), r ? {
            u_logger: a.NAME + " " + a.VERSION
        } : {}, t), o
    }
}), define("ustream-centrallogging/factories/payload", ["ustream-centrallogging/conf/consts", "ustream-centrallogging/utils/object", "ustream-centrallogging/utils/string"], function(u, c, l) {
    return function(e, n) {
        var t, r, o, a, i, s = [];
        for (n = "[object Array]" === Object.prototype.toString.call(n) ? n : [n], t = 0; t < n.length; ++t) i = {
            u_uuid: l.random(u.UUID_LENGTH)
        }, "object" == typeof n[t] ? (r = n[t].timestamp ? new Date(n[t].timestamp) : new Date, o = n[t].message, a = n[t].data || {}) : (r = new Date, o = n[t], a = {}), r = r.getTime(), c.defaultsDeep(i, {
            u_msg: o,
            u_ts: Math.round(r / 1e3),
            u_ts_msec: r
        }, e, a), s.push(i);
        return s
    }
}), define("ustream-centrallogging/xhrsender", ["ustream-centrallogging/conf/consts"], function(I) {
    var S = "//%subdomain%.%domain%/%tag%/",
        A = "services.video.ibm.com";
    return {
        create: function(e, n, t, a, r) {
            var o, i, s = S.replace("%domain%", e || A).replace("%subdomain%", n).replace("%tag%", t),
                u = [],
                c = [],
                l = [],
                g = 0,
                d = {},
                f = 524288,
                p = 50;

            function m(e, n) {
                var t, r;
                for (t = 0; t < e.length; ++t) r = e[t].u_uuid, c.push(e[t]), n && (d[r] = n);
                !o && c.length && (i && (clearTimeout(i), window.removeEventListener("beforeunload", h)), i = setTimeout(h, y()), window.addEventListener("beforeunload", h))
            }

            function h() {
                ! function() {
                    var e, n, t = 0;
                    for (u = [], n = 0; n < c.length; ++n) e = JSON.stringify(c[n]).length, t + e <= f && (u = u.concat(c.splice(n--, 1)), t += e)
                }(), u.length ? E() : c.length && _(I.errors.PAYLOAD_TOO_LARGE)
            }

            function v() {
                g = i = 0
            }

            function w() {
                o && (o.onload = null, o.onerror = null, o.ontimeout = null, o.abort(), o = null)
            }

            function _(e, n) {
                var t, r;
                a(e = e || !1, n = !e && n);
                for (var o = 0; o < n.length; ++o) t = n[o].u_uuid, (r = d[t]) && r.call(null, e, n), delete d[t]
            }

            function y() {
                var e, n = (new Date).getTime();
                for (e = g ? I.XHR_RETRY_TIMEOUT << g : I.XHR_SEND_TIMEOUT; l.length && l[0].getTime() + I.MAX_REQUEST_INTERVAL < n;) l.shift();
                return e = l.length < p ? e : Math.max(e, I.MAX_REQUEST_INTERVAL)
            }

            function E() {
                var e = !r || !r.hasOwnProperty("async") || r.async;
                (o = new XMLHttpRequest).onload = O, o.onerror = T, o.ontimeout = b, o.open("POST", s, e), o.setRequestHeader("Content-Type", "application/json"), o.send(JSON.stringify(u)), l.push(new Date)
            }

            function R(e) {
                g < I.XHR_MAX_RETRY ? (i = setTimeout(function() {
                    w(), E()
                }, y()), ++g) : (v(), _(e))
            }

            function O() {
                switch (v(), o.status) {
                    case 413:
                        1 < u.length ? (f = Math.round(f / 2), c = u.concat(c)) : _(I.errors.PAYLOAD_TOO_LARGE);
                        break;
                    case 200:
                        _(!1, u), w(), m([]);
                        break;
                    default:
                        _(I.errors.SERVER_ERROR)
                }
            }

            function b() {
                R(I.errors.XHR_TIMEOUT)
            }

            function T() {
                R(I.errors.XHR_ERROR)
            }
            return m
        }
    }
}), define("ustream-centrallogging", ["ustream-centrallogging/conf/consts", "ustream-centrallogging/conf/rpin", "ustream-centrallogging/utils/string", "ustream-centrallogging/validateconfig", "ustream-centrallogging/factories/skeleton", "ustream-centrallogging/factories/payload", "ustream-centrallogging/xhrsender"], function(i, s, u, c, l, g, d) {
    return {
        create: function(e) {
            var n, r, o, t = u.random(i.CORRELATION_ID_LENGTH);

            function a(e, n) {
                var t = g(r, e);
                o(t, n)
            }
            return c(e) && (o = d.create(e.domain, e.subdomain, e.tag, e.callback, e.xhrOptions), r = l(t, e.type, e.extra, e.debug), n = {
                send: a,
                rpin: s,
                correlationId: t
            }), n
        },
        rpin: s,
        version: i.VERSION,
        errors: i.errors
    }
});
define("coverLayer", ["lodash"], function(v) {
    var a = "coverLayer",
        s = "coverLayerCommon";

    function u() {
        return $("." + s)
    }

    function h(t) {
        return t.find("> ." + a)
    }

    function l(t, e, o) {
        var r = a;
        return e.className && (r += " " + e.className), o && (r += " " + s), $("<div>").addClass(r).appendTo(t)
    }

    function p(t, e) {
        if ("absolute" === e.css("position")) e.css({
            bottom: "0",
            height: "auto"
        });
        else {
            var o = t.outerHeight() || 0;
            e.height(o).css("bottom", "")
        }
        return e
    }
    return {
        coverLayerOptions: {
            target: "",
            show: !0,
            relocate: !0,
            captureFocus: !0,
            className: ""
        },
        cover: function(t, e) {
            var o;
            e && v.merge(this.coverLayerOptions, e);
            var r, a, s, i, n = this.coverLayerOptions,
                c = $(t || n.target);
            n.relocate ? o = 0 < u().length ? u() : l(c, n, !0) : o = 0 < h(c).length ? h(c) : l(c, n), a = o, (r = c).length && a && (a = p(r, a)).appendTo(r), n.show && (i = h(s = c), i = p(s, i), "static" === s.css("position") && (s.css("position", "relative"), s.attr("data-coverlayer-isstatic", "1")), i.show())
        },
        uncover: function(t) {
            var e, o;
            t && (t = $(t)), e = t, this.coverLayerOptions, o = u(), e && (o = h(e)), o && (o.hide(), e && "1" === e.attr("data-coverlayer-isstatic") && e.css("position", "static"))
        }
    }
});
var UstreamEmbed = function() {
    var h = void 0 !== Object.keys,
        g = {},
        n = new RegExp("^(http(?:s)?://[^/]+)", "im");

    function e(e) {
        return function(e) {
            var n = w(e),
                t = function(i) {
                    var t, a, c, s, d = !1,
                        f = !1,
                        u = [],
                        l = {},
                        o = {},
                        p = [];

                    function r(e) {
                        if ("socialstream" !== e) {
                            if (!d) return u || (u = []), void u.push(arguments);
                            var n, t = (n = arguments, Array.prototype.slice.call(n, 0)).slice(1);
                            t[0] && "function" == typeof t[0] && (l[e] || (l[e] = []), l[e].push(t[0])), L(i, a, {
                                cmd: e,
                                args: t
                            })
                        } else if (W(window, "message", v), s = w(arguments[1]), c = P(s.getAttribute("src")), f = !0, p.length)
                            for (var r = 0, o = p.length; r < o; r++) b(p[r])
                    }

                    function v(e) {
                        var n = s;
                        n && n.contentWindow && n.contentWindow === e.source ? t.onmessage(e) : e.source === s.id && t.onmessage(e)
                    }

                    function y(e) {
                        var n, t = JSON.parse(e.data);
                        t.cmd && "ready" == t.cmd ? L(s, c, {
                            cmd: "ready"
                        }) : (n = (n = [t.cmd]).concat(t.args), r.apply(this, n))
                    }

                    function m() {
                        d = !0, L(i, a, {
                                cmd: "apihandshake",
                                args: []
                            }),
                            function() {
                                if (u) {
                                    for (; u.length;) r.apply(this, u.shift());
                                    u = null
                                }
                            }(), s && L(s, c, {
                                cmd: "viewer_ready"
                            })
                    }

                    function e() {
                        r.apply(this, arguments)
                    }
                    return a = P(i.getAttribute("src")).toLowerCase(), i.onload = function() {
                        L(i, a, {
                            cmd: "ready"
                        })
                    }, t = {
                        host: a,
                        callMethod: e,
                        getProperty: function() {
                            e.apply(this, arguments)
                        },
                        addListener: function(e, n) {
                            o[e] || (o[e] = []), o[e].push(n)
                        },
                        removeListener: function(e, n) {
                            if (n)
                                for (var t = 0, r = o[e].length; t < r; t++) o[e][t] === n && o[e].splice(t, 1);
                            else o[e] = null
                        },
                        onmessage: function(e) {
                            var n;
                            if (a || c || p.push({
                                    origin: e.origin,
                                    data: e.data
                                }), e.origin.toLowerCase() == a) {
                                try {
                                    n = JSON.parse(e.data)
                                } catch (e) {
                                    return
                                }
                                if (n.sstream) return void y(e);
                                if (n.event && n.event.ready && (m(), E(o, "ready")), n.event && !0 === n.event.live) return void E(o, "live");
                                if (n.event && !1 === n.event.live) return void E(o, "offline");
                                if (n.event && !n.event.ready)
                                    if (h) Object.keys(n.event).forEach(function(e) {
                                        E(o, e, n.event[e])
                                    });
                                    else
                                        for (var t in n.event) n.event.hasOwnProperty(t) && E(o, t, n.event[t]);
                                if (n.property)
                                    if (h) Object.keys(n.property).forEach(function(e) {
                                        O(l, e, n.property[e])
                                    });
                                    else
                                        for (var t in n.property) n.property.hasOwnProperty(t) && O(l, t, n.property[t])
                            } else if (f && e.origin == c) return void y(e)
                        },
                        destroy: function() {
                            f = d = !1, c = a = "", s = null, u = [], l = {}, o = {}, p = [], g[i.id] && (g[i.id] = null), i = null
                        }
                    }
                }(n);
            n.id || (n.id = "UstreamEmbed" + Math.ceil(1e5 * Math.random()));
            return t.id = n.id, g[n.id] = t
        }(e)
    }

    function w(e) {
        return "string" == typeof e && (e = document.getElementById(e)), e
    }

    function E(e, n, t) {
        for (var r in e[n]) e[n].hasOwnProperty(r) && e[n][r].call(window, n, t)
    }

    function O(e, n, t) {
        if (e[n]) {
            var r = e[n];
            e[n] = null, delete e[n], r.forEach(function(e) {
                e.call(window, t)
            })
        }
    }

    function b(e) {
        var n, t;
        for (n in g) g.hasOwnProperty(n) && g[n] && ((t = document.getElementById(n)) && t.contentWindow ? t.contentWindow === e.source && g[n].onmessage(e) : "string" == typeof e.source && e.source == n && g[n].onmessage(e))
    }

    function L(e, n, t) {
        e.contentWindow.postMessage(JSON.stringify(t), n)
    }

    function P(e) {
        return e.indexOf("http") < 0 && (e = location.protocol + e), e.match(n)[1].toString()
    }

    function W(e, n, t) {
        e.addEventListener ? e.addEventListener(n, t, !1) : e.attachEvent("on" + n, t)
    }
    return W(window, "message", b), "function" == typeof define && define.amd && define("ustream-embedapi", [], function() {
        return e
    }), window.UstreamEmbed = e
}();
! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("ustream-env", [], t) : "object" == typeof exports ? exports["ustream-env"] = t() : e["ustream-env"] = t()
}(window, function() {
    return function(o) {
        var n = {};

        function r(e) {
            if (n[e]) return n[e].exports;
            var t = n[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return o[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports
        }
        return r.m = o, r.c = n, r.d = function(e, t, o) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(t, e) {
            if (1 & e && (t = r(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var o = Object.create(null);
            if (r.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var n in t) r.d(o, n, function(e) {
                    return t[e]
                }.bind(null, n));
            return o
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 0)
    }([function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            r = "Shockwave Flash",
            i = "ShockwaveFlash.ShockwaveFlash",
            a = "application/x-shockwave-flash",
            c = navigator,
            u = c.mimeTypes,
            l = c.userAgent.toLowerCase(),
            d = c.platform.toLowerCase(),
            p = window.location;

        function s() {
            var e = /android/i.test(l);
            return e && (e = l.match(/android (\d+)(?:\.(\d+))?(?:\.(\d+))?/i)).shift(), e
        }

        function f() {
            var e = /iphone|ipad|ipod/.test(l);
            return e && (e = l.match(/os (\d*)?_?(\d*)?_?(\d*)/i)).shift(), e
        }

        function m() {
            return /BB10(.*)Mobile/i.test(l)
        }

        function v() {
            return -1 < l.indexOf("playstation")
        }

        function h() {
            var e = l.match(/Chrome\/(\d+(?:\.\d+)*)/i);
            return !(!e || y() || b()) && e[1].split(".")
        }

        function y() {
            var e = l.match(/OPR\/(\d+(?:\.\d+)*)/i);
            return e ? e[1].split(".") : !(!window.opera || !window.opera.version) && window.opera.version().split(".")
        }

        function b() {
            var e = l.match(/Edge\/(\d+(?:\.\d+)*)/i);
            return !!e && e[1].split(".")
        }

        function w() {
            var e = void 0,
                t = void 0;
            if (void 0 === window.ActiveXObject) return !1;
            try {
                if (e = new window.ActiveXObject(i)) return !(t = e.GetVariable("$version")) || (t = t.split(" ")[1].split(","), [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)])
            } catch (e) {
                return !1
            }
            return !1
        }
        var g, S, j, O, P, x, k, $, I, _, A, C, E = f();
        t.default = {
            w3: void 0 !== document.getElementById && void 0 !== document.getElementsByTagName && void 0 !== document.createElement,
            win: /win/.test(d || l),
            mac: /mac/.test(d || l),
            desktop: !(s() || f() || m() || v()),
            ios: E,
            android: s(),
            blackberry: m(),
            playstation: v(),
            chrome: h(),
            opera: y(),
            ff: (C = l.match(/Firefox\/(\d+(?:\.\d+)*)/i), !!C && C[1].split(".")),
            safari: (_ = l.match(/Safari/i), A = l.match(/Version\/(\d+(?:\.\d+)*)/i), !(!_ || y() || h() || b()) && (!A || A[1].split("."))),
            ie: (x = document.getElementsByTagName("html")[0], k = l.match(/Trident\/(\d+)/i), $ = l.match(/MSIE (\d+(?:\.\d+)*)/i), I = -1 < x.className.indexOf("ie "), I ? !$ || $[1].split(".") : !!k && [11, 0]),
            phantomJS: /PhantomJS/.test(l),
            ssl: /https/.test(p.protocol),
            wk: !!/webkit/.test(l) && parseFloat(l.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")),
            edgeIe: b(),
            ws: (O = E, P = n(window.WebSocket), (P = "function" === P || "object" === P) && void 0 === window.WebSocket.prototype.CLOSING && (P = !1), O && !P && (4 < O[0] || 4 === O[0] && 2 < O[1]) && (P = !0), P),
            storage: function() {
                var e = String(Math.random());
                try {
                    return localStorage.setItem(e, e), localStorage.removeItem(e), !0
                } catch (e) {
                    return !1
                }
            }(),
            placeholder: function() {
                var e = document.createElement("input"),
                    t = !1;
                try {
                    t = "placeholder" in e
                } catch (e) {
                    t = !1
                }
                return t
            }(),
            touchEvents: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
            swf: (S = [0, 0, 0], j = void 0, void 0 !== c.plugins && "object" === n(c.plugins[r]) ? !(j = c.plugins[r].description) || void 0 !== u && u[a] && !u[a].enabledPlugin || (j = j.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), S[0] = +j.replace(/^(.*)\..*$/, "$1"), S[1] = +j.replace(/^.*\.(.*)\s.*$/, "$1"), S[2] = /[a-zA-Z]/.test(j) ? +j.replace(/^.*[a-zA-Z]+(.*)$/, "$1") : 0) : w() && (S = w()), "000" === S.join("") && (S = !1), S),
            flashPPAPI: (g = u && u[a] && u[a].enabledPlugin && u[a].enabledPlugin.filename || "", "pepflashplayer.dll" === (g = g.toLowerCase()) || "libpepflashplayer.so" === g || "pepperflashplayer.plugin" === g || "chrome.plugin" === g.slice(-13)),
            flashActiveX: w(),
            nav: {
                appCodeName: c.appCodeName,
                appName: c.appName,
                appVersion: c.appVersion,
                cpuClass: c.cpuClass,
                platform: c.platform,
                product: c.product,
                userAgent: c.userAgent,
                vendor: c.vendor,
                vendorSub: c.vendorSub
            }
        }
    }]).default
});
define("dialog", ["jquery"], function(i) {
    return function(i) {
        var s = {};

        function o(t) {
            if (s[t]) return s[t].exports;
            var e = s[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return i[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports
        }
        return o.m = i, o.c = s, o.d = function(t, e, i) {
            o.o(t, e) || Object.defineProperty(t, e, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }, o.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return o.d(e, "a", e), e
        }, o.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, o.p = "", o(o.s = 10)
    }([function(t, e) {
        t.exports = i
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(t) {
            return t.ui = t.ui || {}, t.ui.version = "1.12.1"
        }, o = [i(0)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(c) {
            var o, i = 0,
                l = Array.prototype.slice;
            return c.cleanData = (o = c.cleanData, function(t) {
                var e, i, s;
                for (s = 0; null != (i = t[s]); s++) try {
                    (e = c._data(i, "events")) && e.remove && c(i).triggerHandler("remove")
                } catch (t) {}
                o(t)
            }), c.widget = function(t, i, e) {
                var s, o, n, a = {},
                    l = t.split(".")[0],
                    r = l + "-" + (t = t.split(".")[1]);
                return e || (e = i, i = c.Widget), c.isArray(e) && (e = c.extend.apply(null, [{}].concat(e))), c.expr[":"][r.toLowerCase()] = function(t) {
                    return !!c.data(t, r)
                }, c[l] = c[l] || {}, s = c[l][t], o = c[l][t] = function(t, e) {
                    if (!this._createWidget) return new o(t, e);
                    arguments.length && this._createWidget(t, e)
                }, c.extend(o, s, {
                    version: e.version,
                    _proto: c.extend({}, e),
                    _childConstructors: []
                }), (n = new i).options = c.widget.extend({}, n.options), c.each(e, function(e, n) {
                    c.isFunction(n) ? a[e] = function() {
                        function s() {
                            return i.prototype[e].apply(this, arguments)
                        }

                        function o(t) {
                            return i.prototype[e].apply(this, t)
                        }
                        return function() {
                            var t, e = this._super,
                                i = this._superApply;
                            return this._super = s, this._superApply = o, t = n.apply(this, arguments), this._super = e, this._superApply = i, t
                        }
                    }() : a[e] = n
                }), o.prototype = c.widget.extend(n, {
                    widgetEventPrefix: s && n.widgetEventPrefix || t
                }, a, {
                    constructor: o,
                    namespace: l,
                    widgetName: t,
                    widgetFullName: r
                }), s ? (c.each(s._childConstructors, function(t, e) {
                    var i = e.prototype;
                    c.widget(i.namespace + "." + i.widgetName, o, e._proto)
                }), delete s._childConstructors) : i._childConstructors.push(o), c.widget.bridge(t, o), o
            }, c.widget.extend = function(t) {
                for (var e, i, s = l.call(arguments, 1), o = 0, n = s.length; o < n; o++)
                    for (e in s[o]) i = s[o][e], s[o].hasOwnProperty(e) && void 0 !== i && (c.isPlainObject(i) ? t[e] = c.isPlainObject(t[e]) ? c.widget.extend({}, t[e], i) : c.widget.extend({}, i) : t[e] = i);
                return t
            }, c.widget.bridge = function(n, e) {
                var a = e.prototype.widgetFullName || n;
                c.fn[n] = function(i) {
                    var t = "string" == typeof i,
                        s = l.call(arguments, 1),
                        o = this;
                    return t ? this.length || "instance" !== i ? this.each(function() {
                        var t, e = c.data(this, a);
                        return "instance" === i ? (o = e, !1) : e ? c.isFunction(e[i]) && "_" !== i.charAt(0) ? (t = e[i].apply(e, s)) !== e && void 0 !== t ? (o = t && t.jquery ? o.pushStack(t.get()) : t, !1) : void 0 : c.error("no such method '" + i + "' for " + n + " widget instance") : c.error("cannot call methods on " + n + " prior to initialization; attempted to call method '" + i + "'")
                    }) : o = void 0 : (s.length && (i = c.widget.extend.apply(null, [i].concat(s))), this.each(function() {
                        var t = c.data(this, a);
                        t ? (t.option(i || {}), t._init && t._init()) : c.data(this, a, new e(i, this))
                    })), o
                }
            }, c.Widget = function() {}, c.Widget._childConstructors = [], c.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    classes: {},
                    disabled: !1,
                    create: null
                },
                _createWidget: function(t, e) {
                    e = c(e || this.defaultElement || this)[0], this.element = c(e), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = c(), this.hoverable = c(), this.focusable = c(), this.classesElementLookup = {}, e !== this && (c.data(e, this.widgetFullName, this), this._on(!0, this.element, {
                        remove: function(t) {
                            t.target === e && this.destroy()
                        }
                    }), this.document = c(e.style ? e.ownerDocument : e.document || e), this.window = c(this.document[0].defaultView || this.document[0].parentWindow)), this.options = c.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
                },
                _getCreateOptions: function() {
                    return {}
                },
                _getCreateEventData: c.noop,
                _create: c.noop,
                _init: c.noop,
                destroy: function() {
                    var i = this;
                    this._destroy(), c.each(this.classesElementLookup, function(t, e) {
                        i._removeClass(e, t)
                    }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
                },
                _destroy: c.noop,
                widget: function() {
                    return this.element
                },
                option: function(t, e) {
                    var i, s, o, n = t;
                    if (0 === arguments.length) return c.widget.extend({}, this.options);
                    if ("string" == typeof t)
                        if (n = {}, t = (i = t.split(".")).shift(), i.length) {
                            for (s = n[t] = c.widget.extend({}, this.options[t]), o = 0; o < i.length - 1; o++) s[i[o]] = s[i[o]] || {}, s = s[i[o]];
                            if (t = i.pop(), 1 === arguments.length) return void 0 === s[t] ? null : s[t];
                            s[t] = e
                        } else {
                            if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                            n[t] = e
                        } return this._setOptions(n), this
                },
                _setOptions: function(t) {
                    var e;
                    for (e in t) this._setOption(e, t[e]);
                    return this
                },
                _setOption: function(t, e) {
                    return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
                },
                _setOptionClasses: function(t) {
                    var e, i, s;
                    for (e in t) s = this.classesElementLookup[e], t[e] !== this.options.classes[e] && s && s.length && (i = c(s.get()), this._removeClass(s, e), i.addClass(this._classes({
                        element: i,
                        keys: e,
                        classes: t,
                        add: !0
                    })))
                },
                _setOptionDisabled: function(t) {
                    this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
                },
                enable: function() {
                    return this._setOptions({
                        disabled: !1
                    })
                },
                disable: function() {
                    return this._setOptions({
                        disabled: !0
                    })
                },
                _classes: function(o) {
                    var n = [],
                        a = this;

                    function t(t, e) {
                        var i, s;
                        for (s = 0; s < t.length; s++) i = a.classesElementLookup[t[s]] || c(), i = o.add ? c(c.unique(i.get().concat(o.element.get()))) : c(i.not(o.element).get()), a.classesElementLookup[t[s]] = i, n.push(t[s]), e && o.classes[t[s]] && n.push(o.classes[t[s]])
                    }
                    return o = c.extend({
                        element: this.element,
                        classes: this.options.classes || {}
                    }, o), this._on(o.element, {
                        remove: "_untrackClassesElement"
                    }), o.keys && t(o.keys.match(/\S+/g) || [], !0), o.extra && t(o.extra.match(/\S+/g) || []), n.join(" ")
                },
                _untrackClassesElement: function(i) {
                    var s = this;
                    c.each(s.classesElementLookup, function(t, e) {
                        -1 !== c.inArray(i.target, e) && (s.classesElementLookup[t] = c(e.not(i.target).get()))
                    })
                },
                _removeClass: function(t, e, i) {
                    return this._toggleClass(t, e, i, !1)
                },
                _addClass: function(t, e, i) {
                    return this._toggleClass(t, e, i, !0)
                },
                _toggleClass: function(t, e, i, s) {
                    s = "boolean" == typeof s ? s : i;
                    var o = "string" == typeof t || null === t,
                        n = {
                            extra: o ? e : i,
                            keys: o ? t : e,
                            element: o ? this.element : t,
                            add: s
                        };
                    return n.element.toggleClass(this._classes(n), s), this
                },
                _on: function(a, l, t) {
                    var r, h = this;
                    "boolean" != typeof a && (t = l, l = a, a = !1), t ? (l = r = c(l), this.bindings = this.bindings.add(l)) : (t = l, l = this.element, r = this.widget()), c.each(t, function(t, e) {
                        function i() {
                            if (a || !0 !== h.options.disabled && !c(this).hasClass("ui-state-disabled")) return ("string" == typeof e ? h[e] : e).apply(h, arguments)
                        }
                        "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || c.guid++);
                        var s = t.match(/^([\w:-]*)\s*(.*)$/),
                            o = s[1] + h.eventNamespace,
                            n = s[2];
                        n ? r.on(o, n, i) : l.on(o, i)
                    })
                },
                _off: function(t, e) {
                    e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(e).off(e), this.bindings = c(this.bindings.not(t).get()), this.focusable = c(this.focusable.not(t).get()), this.hoverable = c(this.hoverable.not(t).get())
                },
                _delay: function(t, e) {
                    var i = this;
                    return setTimeout(function() {
                        return ("string" == typeof t ? i[t] : t).apply(i, arguments)
                    }, e || 0)
                },
                _hoverable: function(t) {
                    this.hoverable = this.hoverable.add(t), this._on(t, {
                        mouseenter: function(t) {
                            this._addClass(c(t.currentTarget), null, "ui-state-hover")
                        },
                        mouseleave: function(t) {
                            this._removeClass(c(t.currentTarget), null, "ui-state-hover")
                        }
                    })
                },
                _focusable: function(t) {
                    this.focusable = this.focusable.add(t), this._on(t, {
                        focusin: function(t) {
                            this._addClass(c(t.currentTarget), null, "ui-state-focus")
                        },
                        focusout: function(t) {
                            this._removeClass(c(t.currentTarget), null, "ui-state-focus")
                        }
                    })
                },
                _trigger: function(t, e, i) {
                    var s, o, n = this.options[t];
                    if (i = i || {}, (e = c.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), e.target = this.element[0], o = e.originalEvent)
                        for (s in o) s in e || (e[s] = o[s]);
                    return this.element.trigger(e, i), !(c.isFunction(n) && !1 === n.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
                }
            }, c.each({
                show: "fadeIn",
                hide: "fadeOut"
            }, function(n, a) {
                c.Widget.prototype["_" + n] = function(e, t, i) {
                    var s;
                    "string" == typeof t && (t = {
                        effect: t
                    });
                    var o = t ? !0 === t || "number" == typeof t ? a : t.effect || a : n;
                    "number" == typeof(t = t || {}) && (t = {
                        duration: t
                    }), s = !c.isEmptyObject(t), t.complete = i, t.delay && e.delay(t.delay), s && c.effects && c.effects.effect[o] ? e[n](t) : o !== n && e[o] ? e[o](t.duration, t.easing, i) : e.queue(function(t) {
                        c(this)[n](), i && i.call(e[0]), t()
                    })
                }
            }), c.widget
        }, o = [i(0), i(1)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(o) {
            var n = !1;
            return o(document).on("mouseup", function() {
                n = !1
            }), o.widget("ui.mouse", {
                version: "1.12.1",
                options: {
                    cancel: "input, textarea, button, select, option",
                    distance: 1,
                    delay: 0
                },
                _mouseInit: function() {
                    var e = this;
                    this.element.on("mousedown." + this.widgetName, function(t) {
                        return e._mouseDown(t)
                    }).on("click." + this.widgetName, function(t) {
                        if (!0 === o.data(t.target, e.widgetName + ".preventClickEvent")) return o.removeData(t.target, e.widgetName + ".preventClickEvent"), t.stopImmediatePropagation(), !1
                    }), this.started = !1
                },
                _mouseDestroy: function() {
                    this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
                },
                _mouseDown: function(t) {
                    if (!n) {
                        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                        var e = this,
                            i = 1 === t.which,
                            s = !("string" != typeof this.options.cancel || !t.target.nodeName) && o(t.target).closest(this.options.cancel).length;
                        return !(i && !s && this._mouseCapture(t)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                            e.mouseDelayMet = !0
                        }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === o.data(t.target, this.widgetName + ".preventClickEvent") && o.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                            return e._mouseMove(t)
                        }, this._mouseUpDelegate = function(t) {
                            return e._mouseUp(t)
                        }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0))
                    }
                },
                _mouseMove: function(t) {
                    if (this._mouseMoved) {
                        if (o.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                        if (!t.which)
                            if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                            else if (!this.ignoreMissingWhich) return this._mouseUp(t)
                    }
                    return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
                },
                _mouseUp: function(t) {
                    this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && o.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, n = !1, t.preventDefault()
                },
                _mouseDistanceMet: function(t) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
                },
                _mouseDelayMet: function() {
                    return this.mouseDelayMet
                },
                _mouseStart: function() {},
                _mouseDrag: function() {},
                _mouseStop: function() {},
                _mouseCapture: function() {
                    return !0
                }
            })
        }, o = [i(0), i(19), i(1), i(2)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(t) {
            return t.ui.escapeSelector = (e = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, function(t) {
                return t.replace(e, "\\$1")
            });
            var e
        }, o = [i(0), i(1)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(t) {
            return t.ui.keyCode = {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }, o = [i(0), i(1)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(n) {
            return n.ui.plugin = {
                add: function(t, e, i) {
                    var s, o = n.ui[t].prototype;
                    for (s in i) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([e, i[s]])
                },
                call: function(t, e, i, s) {
                    var o, n = t.plugins[e];
                    if (n && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                        for (o = 0; o < n.length; o++) t.options[n[o][0]] && n[o][1].apply(t.element, i)
                }
            }
        }, o = [i(0), i(1)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(e) {
            return e.ui.safeBlur = function(t) {
                t && "body" !== t.nodeName.toLowerCase() && e(t).trigger("blur")
            }
        }, o = [i(0), i(1)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(t) {
            return t.ui.safeActiveElement = function(e) {
                var i;
                try {
                    i = e.activeElement
                } catch (t) {
                    i = e.body
                }
                return i || (i = e.body), i.nodeName || (i = e.body), i
            }
        }, o = [i(0), i(1)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(r) {
            return r.ui.focusable = function(t, e) {
                var i, s, o, n, a, l = t.nodeName.toLowerCase();
                return "area" === l ? (s = (i = t.parentNode).name, !(!t.href || !s || "map" !== i.nodeName.toLowerCase()) && (0 < (o = r("img[usemap='#" + s + "']")).length && o.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(l) ? (n = !t.disabled) && (a = r(t).closest("fieldset")[0]) && (n = !a.disabled) : n = "a" === l && t.href || e, n && r(t).is(":visible") && function(t) {
                    var e = t.css("visibility");
                    for (;
                        "inherit" === e;) t = t.parent(), e = t.css("visibility");
                    return "hidden" !== e
                }(r(t)))
            }, r.extend(r.expr[":"], {
                focusable: function(t) {
                    return r.ui.focusable(t, null != r.attr(t, "tabindex"))
                }
            }), r.ui.focusable
        }, o = [i(0), i(1)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        i(11);
        var n = i(0);
        t.exports = function(t) {
            for (var e, i = arguments.length, s = Array(1 < i ? i - 1 : 0), o = 1; o < i; o++) s[o - 1] = arguments[o];
            return (e = n(t)).dialog.apply(e, s)
        }
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(r) {
            return r.widget("ui.dialog", {
                version: "1.12.1",
                options: {
                    appendTo: "body",
                    autoOpen: !0,
                    buttons: [],
                    classes: {
                        "ui-dialog": "ui-corner-all",
                        "ui-dialog-titlebar": "ui-corner-all"
                    },
                    closeOnEscape: !0,
                    closeText: "Close",
                    draggable: !0,
                    hide: null,
                    height: "auto",
                    maxHeight: null,
                    maxWidth: null,
                    minHeight: 150,
                    minWidth: 150,
                    modal: !1,
                    position: {
                        my: "center",
                        at: "center",
                        of: window,
                        collision: "fit",
                        using: function(t) {
                            var e = r(this).css(t).offset().top;
                            e < 0 && r(this).css("top", t.top - e)
                        }
                    },
                    resizable: !0,
                    show: null,
                    title: null,
                    width: 300,
                    beforeClose: null,
                    close: null,
                    drag: null,
                    dragStart: null,
                    dragStop: null,
                    focus: null,
                    open: null,
                    resize: null,
                    resizeStart: null,
                    resizeStop: null
                },
                sizeRelatedOptions: {
                    buttons: !0,
                    height: !0,
                    maxHeight: !0,
                    maxWidth: !0,
                    minHeight: !0,
                    minWidth: !0,
                    width: !0
                },
                resizableRelatedOptions: {
                    maxHeight: !0,
                    maxWidth: !0,
                    minHeight: !0,
                    minWidth: !0
                },
                _create: function() {
                    this.originalCss = {
                        display: this.element[0].style.display,
                        width: this.element[0].style.width,
                        minHeight: this.element[0].style.minHeight,
                        maxHeight: this.element[0].style.maxHeight,
                        height: this.element[0].style.height
                    }, this.originalPosition = {
                        parent: this.element.parent(),
                        index: this.element.parent().children().index(this.element)
                    }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && r.fn.draggable && this._makeDraggable(), this.options.resizable && r.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
                },
                _init: function() {
                    this.options.autoOpen && this.open()
                },
                _appendTo: function() {
                    var t = this.options.appendTo;
                    return t && (t.jquery || t.nodeType) ? r(t) : this.document.find(t || "body").eq(0)
                },
                _destroy: function() {
                    var t, e = this.originalPosition;
                    this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
                },
                widget: function() {
                    return this.uiDialog
                },
                disable: r.noop,
                enable: r.noop,
                close: function(t) {
                    var e = this;
                    this._isOpen && !1 !== this._trigger("beforeClose", t) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || r.ui.safeBlur(r.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() {
                        e._trigger("close", t)
                    }))
                },
                isOpen: function() {
                    return this._isOpen
                },
                moveToTop: function() {
                    this._moveToTop()
                },
                _moveToTop: function(t, e) {
                    var i = !1,
                        s = this.uiDialog.siblings(".ui-front:visible").map(function() {
                            return +r(this).css("z-index")
                        }).get(),
                        o = Math.max.apply(null, s);
                    return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), i = !0), i && !e && this._trigger("focus", t), i
                },
                open: function() {
                    var t = this;
                    this._isOpen ? this._moveToTop() && this._focusTabbable() : (this._isOpen = !0, this.opener = r(r.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                        t._focusTabbable(), t._trigger("focus")
                    }), this._makeFocusTarget(), this._trigger("open"))
                },
                _focusTabbable: function() {
                    var t = this._focusedElement;
                    t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
                },
                _keepFocus: function(t) {
                    function e() {
                        var t = r.ui.safeActiveElement(this.document[0]);
                        this.uiDialog[0] === t || r.contains(this.uiDialog[0], t) || this._focusTabbable()
                    }
                    t.preventDefault(), e.call(this), this._delay(e)
                },
                _createWrapper: function() {
                    this.uiDialog = r("<div>").hide().attr({
                        tabIndex: -1,
                        role: "dialog"
                    }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                        keydown: function(t) {
                            if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === r.ui.keyCode.ESCAPE) return t.preventDefault(), void this.close(t);
                            if (t.keyCode === r.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                                var e = this.uiDialog.find(":tabbable"),
                                    i = e.filter(":first"),
                                    s = e.filter(":last");
                                t.target !== s[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== i[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function() {
                                    s.trigger("focus")
                                }), t.preventDefault()) : (this._delay(function() {
                                    i.trigger("focus")
                                }), t.preventDefault())
                            }
                        },
                        mousedown: function(t) {
                            this._moveToTop(t) && this._focusTabbable()
                        }
                    }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                        "aria-describedby": this.element.uniqueId().attr("id")
                    })
                },
                _createTitlebar: function() {
                    var t;
                    this.uiDialogTitlebar = r("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
                        mousedown: function(t) {
                            r(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                        }
                    }), this.uiDialogTitlebarClose = r("<button type='button'></button>").button({
                        label: r("<a>").text(this.options.closeText).html(),
                        icon: "ui-icon-closethick",
                        showLabel: !1
                    }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
                        click: function(t) {
                            t.preventDefault(), this.close(t)
                        }
                    }), t = r("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(t, "ui-dialog-title"), this._title(t), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
                        "aria-labelledby": t.attr("id")
                    })
                },
                _title: function(t) {
                    this.options.title ? t.text(this.options.title) : t.html("&#160;")
                },
                _createButtonPane: function() {
                    this.uiDialogButtonPane = r("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = r("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
                },
                _createButtons: function() {
                    var o = this,
                        t = this.options.buttons;
                    this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), r.isEmptyObject(t) || r.isArray(t) && !t.length ? this._removeClass(this.uiDialog, "ui-dialog-buttons") : (r.each(t, function(t, e) {
                        var i, s;
                        e = r.isFunction(e) ? {
                            click: e,
                            text: t
                        } : e, e = r.extend({
                            type: "button"
                        }, e), i = e.click, s = {
                            icon: e.icon,
                            iconPosition: e.iconPosition,
                            showLabel: e.showLabel,
                            icons: e.icons,
                            text: e.text
                        }, delete e.click, delete e.icon, delete e.iconPosition, delete e.showLabel, delete e.icons, "boolean" == typeof e.text && delete e.text, r("<button></button>", e).button(s).appendTo(o.uiButtonSet).on("click", function() {
                            i.apply(o.element[0], arguments)
                        })
                    }), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog))
                },
                _makeDraggable: function() {
                    var o = this,
                        n = this.options;

                    function a(t) {
                        return {
                            position: t.position,
                            offset: t.offset
                        }
                    }
                    this.uiDialog.draggable({
                        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                        handle: ".ui-dialog-titlebar",
                        containment: "document",
                        start: function(t, e) {
                            o._addClass(r(this), "ui-dialog-dragging"), o._blockFrames(), o._trigger("dragStart", t, a(e))
                        },
                        drag: function(t, e) {
                            o._trigger("drag", t, a(e))
                        },
                        stop: function(t, e) {
                            var i = e.offset.left - o.document.scrollLeft(),
                                s = e.offset.top - o.document.scrollTop();
                            n.position = {
                                my: "left top",
                                at: "left" + (0 <= i ? "+" : "") + i + " top" + (0 <= s ? "+" : "") + s,
                                of: o.window
                            }, o._removeClass(r(this), "ui-dialog-dragging"), o._unblockFrames(), o._trigger("dragStop", t, a(e))
                        }
                    })
                },
                _makeResizable: function() {
                    var n = this,
                        a = this.options,
                        t = a.resizable,
                        e = this.uiDialog.css("position"),
                        i = "string" == typeof t ? t : "n,e,s,w,se,sw,ne,nw";

                    function l(t) {
                        return {
                            originalPosition: t.originalPosition,
                            originalSize: t.originalSize,
                            position: t.position,
                            size: t.size
                        }
                    }
                    this.uiDialog.resizable({
                        cancel: ".ui-dialog-content",
                        containment: "document",
                        alsoResize: this.element,
                        maxWidth: a.maxWidth,
                        maxHeight: a.maxHeight,
                        minWidth: a.minWidth,
                        minHeight: this._minHeight(),
                        handles: i,
                        start: function(t, e) {
                            n._addClass(r(this), "ui-dialog-resizing"), n._blockFrames(), n._trigger("resizeStart", t, l(e))
                        },
                        resize: function(t, e) {
                            n._trigger("resize", t, l(e))
                        },
                        stop: function(t, e) {
                            var i = n.uiDialog.offset(),
                                s = i.left - n.document.scrollLeft(),
                                o = i.top - n.document.scrollTop();
                            a.height = n.uiDialog.height(), a.width = n.uiDialog.width(), a.position = {
                                my: "left top",
                                at: "left" + (0 <= s ? "+" : "") + s + " top" + (0 <= o ? "+" : "") + o,
                                of: n.window
                            }, n._removeClass(r(this), "ui-dialog-resizing"), n._unblockFrames(), n._trigger("resizeStop", t, l(e))
                        }
                    }).css("position", e)
                },
                _trackFocus: function() {
                    this._on(this.widget(), {
                        focusin: function(t) {
                            this._makeFocusTarget(), this._focusedElement = r(t.target)
                        }
                    })
                },
                _makeFocusTarget: function() {
                    this._untrackInstance(), this._trackingInstances().unshift(this)
                },
                _untrackInstance: function() {
                    var t = this._trackingInstances(),
                        e = r.inArray(this, t); - 1 !== e && t.splice(e, 1)
                },
                _trackingInstances: function() {
                    var t = this.document.data("ui-dialog-instances");
                    return t || (t = [], this.document.data("ui-dialog-instances", t)), t
                },
                _minHeight: function() {
                    var t = this.options;
                    return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
                },
                _position: function() {
                    var t = this.uiDialog.is(":visible");
                    t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
                },
                _setOptions: function(t) {
                    var i = this,
                        s = !1,
                        o = {};
                    r.each(t, function(t, e) {
                        i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (o[t] = e)
                    }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", o)
                },
                _setOption: function(t, e) {
                    var i, s, o = this.uiDialog;
                    "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
                        label: r("<a>").text("" + this.options.closeText).html()
                    }), "draggable" === t && ((i = o.is(":data(ui-draggable)")) && !e && o.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && ((s = o.is(":data(ui-resizable)")) && !e && o.resizable("destroy"), s && "string" == typeof e && o.resizable("option", "handles", e), s || !1 === e || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
                },
                _size: function() {
                    var t, e, i, s = this.options;
                    this.element.show().css({
                        width: "auto",
                        minHeight: 0,
                        maxHeight: "none",
                        height: 0
                    }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
                        height: "auto",
                        width: s.width
                    }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
                        minHeight: e,
                        maxHeight: i,
                        height: "auto"
                    }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
                },
                _blockFrames: function() {
                    this.iframeBlocks = this.document.find("iframe").map(function() {
                        var t = r(this);
                        return r("<div>").css({
                            position: "absolute",
                            width: t.outerWidth(),
                            height: t.outerHeight()
                        }).appendTo(t.parent()).offset(t.offset())[0]
                    })
                },
                _unblockFrames: function() {
                    this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
                },
                _allowInteraction: function(t) {
                    return !!r(t.target).closest(".ui-dialog").length || !!r(t.target).closest(".ui-datepicker").length
                },
                _createOverlay: function() {
                    if (this.options.modal) {
                        var e = !0;
                        this._delay(function() {
                            e = !1
                        }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                            focusin: function(t) {
                                e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                            }
                        }), this.overlay = r("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
                            mousedown: "_keepFocus"
                        }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                    }
                },
                _destroyOverlay: function() {
                    if (this.options.modal && this.overlay) {
                        var t = this.document.data("ui-dialog-overlays") - 1;
                        t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
                    }
                }
            }), !1 !== r.uiBackCompat && r.widget("ui.dialog", r.ui.dialog, {
                options: {
                    dialogClass: ""
                },
                _createWrapper: function() {
                    this._super(), this.uiDialog.addClass(this.options.dialogClass)
                },
                _setOption: function(t, e) {
                    "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
                }
            }), r.ui.dialog
        }, o = [i(0), i(12), i(18), i(3), i(22), i(9), i(5), i(24), i(8), i(7), i(25), i(26), i(1), i(2)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a, l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        a = function(n) {
            var t;
            return n.widget("ui.button", {
                version: "1.12.1",
                defaultElement: "<button>",
                options: {
                    classes: {
                        "ui-button": "ui-corner-all"
                    },
                    disabled: null,
                    icon: null,
                    iconPosition: "beginning",
                    label: null,
                    showLabel: !0
                },
                _getCreateOptions: function() {
                    var t, e = this._super() || {};
                    return this.isInput = this.element.is("input"), null != (t = this.element[0].disabled) && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
                },
                _create: function() {
                    !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
                        keyup: function(t) {
                            t.keyCode === n.ui.keyCode.SPACE && (t.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                        }
                    })
                },
                _enhance: function() {
                    this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
                },
                _updateTooltip: function() {
                    this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
                },
                _updateIcon: function(t, e) {
                    var i = "iconPosition" !== t,
                        s = i ? this.options.iconPosition : e,
                        o = "top" === s || "bottom" === s;
                    this.icon ? i && this._removeClass(this.icon, null, this.options.icon) : (this.icon = n("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), i && this._addClass(this.icon, null, e), this._attachIcon(s), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = n("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(s))
                },
                _destroy: function() {
                    this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
                },
                _attachIconSpace: function(t) {
                    this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
                },
                _attachIcon: function(t) {
                    this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
                },
                _setOptions: function(t) {
                    var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                        i = void 0 === t.icon ? this.options.icon : t.icon;
                    e || i || (t.showLabel = !0), this._super(t)
                },
                _setOption: function(t, e) {
                    "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), (this.element[0].disabled = e) && this.element.blur())
                },
                refresh: function() {
                    var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
                    t !== this.options.disabled && this._setOptions({
                        disabled: t
                    }), this._updateTooltip()
                }
            }), !1 !== n.uiBackCompat && (n.widget("ui.button", n.ui.button, {
                options: {
                    text: !0,
                    icons: {
                        primary: null,
                        secondary: null
                    }
                },
                _create: function() {
                    this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
                },
                _setOption: function(t, e) {
                    "text" !== t ? ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), this._superApply(arguments)) : this._super("showLabel", e)
                }
            }), n.fn.button = (t = n.fn.button, function() {
                return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? t.apply(this, arguments) : (n.ui.checkboxradio || n.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
                    icon: !1
                }) : this.checkboxradio.apply(this, arguments))
            }), n.fn.buttonset = function() {
                return n.ui.controlgroup || n.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" === l(arguments[0]) && arguments[0].items && (arguments[0].items = {
                    button: arguments[0].items
                }), this.controlgroup.apply(this, arguments))
            }), n.ui.button
        }, o = [i(0), i(13), i(14), i(5), i(2)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(r) {
            var n = /ui-corner-([a-z]){2,6}/g;
            return r.widget("ui.controlgroup", {
                version: "1.12.1",
                defaultElement: "<div>",
                options: {
                    direction: "horizontal",
                    disabled: null,
                    onlyVisible: !0,
                    items: {
                        button: "input[type=button], input[type=submit], input[type=reset], button, a",
                        controlgroupLabel: ".ui-controlgroup-label",
                        checkboxradio: "input[type='checkbox'], input[type='radio']",
                        selectmenu: "select",
                        spinner: ".ui-spinner-input"
                    }
                },
                _create: function() {
                    this._enhance()
                },
                _enhance: function() {
                    this.element.attr("role", "toolbar"), this.refresh()
                },
                _destroy: function() {
                    this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
                },
                _initWidgets: function() {
                    var a = this,
                        l = [];
                    r.each(this.options.items, function(o, t) {
                        var e, n = {};
                        if (t) return "controlgroupLabel" === o ? ((e = a.element.find(t)).each(function() {
                            var t = r(this);
                            t.children(".ui-controlgroup-label-contents").length || t.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                        }), a._addClass(e, null, "ui-widget ui-widget-content ui-state-default"), void(l = l.concat(e.get()))) : void(r.fn[o] && (n = a["_" + o + "Options"] ? a["_" + o + "Options"]("middle") : {
                            classes: {}
                        }, a.element.find(t).each(function() {
                            var t = r(this),
                                e = t[o]("instance"),
                                i = r.widget.extend({}, n);
                            if ("button" !== o || !t.parent(".ui-spinner").length) {
                                e || (e = t[o]()[o]("instance")), e && (i.classes = a._resolveClassesValues(i.classes, e)), t[o](i);
                                var s = t[o]("widget");
                                r.data(s[0], "ui-controlgroup-data", e || t[o]("instance")), l.push(s[0])
                            }
                        })))
                    }), this.childWidgets = r(r.unique(l)), this._addClass(this.childWidgets, "ui-controlgroup-item")
                },
                _callChildMethod: function(e) {
                    this.childWidgets.each(function() {
                        var t = r(this).data("ui-controlgroup-data");
                        t && t[e] && t[e]()
                    })
                },
                _updateCornerClass: function(t, e) {
                    var i = this._buildSimpleOptions(e, "label").classes.label;
                    this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i)
                },
                _buildSimpleOptions: function(t, e) {
                    var i = "vertical" === this.options.direction,
                        s = {
                            classes: {}
                        };
                    return s.classes[e] = {
                        middle: "",
                        first: "ui-corner-" + (i ? "top" : "left"),
                        last: "ui-corner-" + (i ? "bottom" : "right"),
                        only: "ui-corner-all"
                    } [t], s
                },
                _spinnerOptions: function(t) {
                    var e = this._buildSimpleOptions(t, "ui-spinner");
                    return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
                },
                _buttonOptions: function(t) {
                    return this._buildSimpleOptions(t, "ui-button")
                },
                _checkboxradioOptions: function(t) {
                    return this._buildSimpleOptions(t, "ui-checkboxradio-label")
                },
                _selectmenuOptions: function(t) {
                    var e = "vertical" === this.options.direction;
                    return {
                        width: !!e && "auto",
                        classes: {
                            middle: {
                                "ui-selectmenu-button-open": "",
                                "ui-selectmenu-button-closed": ""
                            },
                            first: {
                                "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                                "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                            },
                            last: {
                                "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                                "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                            },
                            only: {
                                "ui-selectmenu-button-open": "ui-corner-top",
                                "ui-selectmenu-button-closed": "ui-corner-all"
                            }
                        } [t]
                    }
                },
                _resolveClassesValues: function(i, s) {
                    var o = {};
                    return r.each(i, function(t) {
                        var e = s.options.classes[t] || "";
                        e = r.trim(e.replace(n, "")), o[t] = (e + " " + i[t]).replace(/\s+/g, " ")
                    }), o
                },
                _setOption: function(t, e) {
                    "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" !== t ? this.refresh() : this._callChildMethod(e ? "disable" : "enable")
                },
                refresh: function() {
                    var o, n = this;
                    this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), o = this.childWidgets, this.options.onlyVisible && (o = o.filter(":visible")), o.length && (r.each(["first", "last"], function(t, e) {
                        var i = o[e]().data("ui-controlgroup-data");
                        if (i && n["_" + i.widgetName + "Options"]) {
                            var s = n["_" + i.widgetName + "Options"](1 === o.length ? "only" : e);
                            s.classes = n._resolveClassesValues(s.classes, i), i.element[i.widgetName](s)
                        } else n._updateCornerClass(o[e](), e)
                    }), this._callChildMethod("refresh"))
                }
            })
        }, o = [i(0), i(2)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(o) {
            return o.widget("ui.checkboxradio", [o.ui.formResetMixin, {
                version: "1.12.1",
                options: {
                    disabled: null,
                    label: null,
                    icon: !0,
                    classes: {
                        "ui-checkboxradio-label": "ui-corner-all",
                        "ui-checkboxradio-icon": "ui-corner-all"
                    }
                },
                _getCreateOptions: function() {
                    var t, e, i = this,
                        s = this._super() || {};
                    return this._readType(), e = this.element.labels(), this.label = o(e[e.length - 1]), this.label.length || o.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function() {
                        i.originalLabel += 3 === this.nodeType ? o(this).text() : this.outerHTML
                    }), this.originalLabel && (s.label = this.originalLabel), null != (t = this.element[0].disabled) && (s.disabled = t), s
                },
                _create: function() {
                    var t = this.element[0].checked;
                    this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                        change: "_toggleClasses",
                        focus: function() {
                            this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                        },
                        blur: function() {
                            this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                        }
                    })
                },
                _readType: function() {
                    var t = this.element[0].nodeName.toLowerCase();
                    this.type = this.element[0].type, "input" === t && /radio|checkbox/.test(this.type) || o.error("Can't create checkboxradio on element.nodeName=" + t + " and element.type=" + this.type)
                },
                _enhance: function() {
                    this._updateIcon(this.element[0].checked)
                },
                widget: function() {
                    return this.label
                },
                _getRadioGroup: function() {
                    var t = this.element[0].name,
                        e = "input[name='" + o.ui.escapeSelector(t) + "']";
                    return t ? (this.form.length ? o(this.form[0].elements).filter(e) : o(e).filter(function() {
                        return 0 === o(this).form().length
                    })).not(this.element) : o([])
                },
                _toggleClasses: function() {
                    var t = this.element[0].checked;
                    this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t)._toggleClass(this.icon, null, "ui-icon-blank", !t), "radio" === this.type && this._getRadioGroup().each(function() {
                        var t = o(this).checkboxradio("instance");
                        t && t._removeClass(t.label, "ui-checkboxradio-checked", "ui-state-active")
                    })
                },
                _destroy: function() {
                    this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
                },
                _setOption: function(t, e) {
                    if ("label" !== t || e) {
                        if (this._super(t, e), "disabled" === t) return this._toggleClass(this.label, null, "ui-state-disabled", e), void(this.element[0].disabled = e);
                        this.refresh()
                    }
                },
                _updateIcon: function(t) {
                    var e = "ui-icon ui-icon-background ";
                    this.options.icon ? (this.icon || (this.icon = o("<span>"), this.iconSpace = o("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (e += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, t ? "ui-icon-blank" : "ui-icon-check")) : e += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", e), t || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
                },
                _updateLabel: function() {
                    var t = this.label.contents().not(this.element[0]);
                    this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
                },
                refresh: function() {
                    var t = this.element[0].checked,
                        e = this.element[0].disabled;
                    this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
                        disabled: e
                    })
                }
            }]), o.ui.checkboxradio
        }, o = [i(0), i(4), i(15), i(17), i(2)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(i) {
            return i.ui.formResetMixin = {
                _formResetHandler: function() {
                    var e = i(this);
                    setTimeout(function() {
                        var t = e.data("ui-form-reset-instances");
                        i.each(t, function() {
                            this.refresh()
                        })
                    })
                },
                _bindFormResetHandler: function() {
                    if (this.form = this.element.form(), this.form.length) {
                        var t = this.form.data("ui-form-reset-instances") || [];
                        t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
                    }
                },
                _unbindFormResetHandler: function() {
                    if (this.form.length) {
                        var t = this.form.data("ui-form-reset-instances");
                        t.splice(i.inArray(this, t), 1), t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
                    }
                }
            }
        }, o = [i(0), i(16), i(1)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(t) {
            return t.fn.form = function() {
                return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
            }
        }, o = [i(0), i(1)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(n) {
            return n.fn.labels = function() {
                var t, e, i, s, o;
                return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"), (i = this.attr("id")) && (o = (t = this.eq(0).parents().last()).add(t.length ? t.siblings() : this.siblings()), e = "label[for='" + n.ui.escapeSelector(i) + "']", s = s.add(o.find(e).addBack(e))), this.pushStack(s))
            }
        }, o = [i(0), i(1), i(4)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(v) {
            return v.widget("ui.draggable", v.ui.mouse, {
                version: "1.12.1",
                widgetEventPrefix: "drag",
                options: {
                    addClasses: !0,
                    appendTo: "parent",
                    axis: !1,
                    connectToSortable: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    iframeFix: !1,
                    opacity: !1,
                    refreshPositions: !1,
                    revert: !1,
                    revertDuration: 500,
                    scope: "default",
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    snap: !1,
                    snapMode: "both",
                    snapTolerance: 20,
                    stack: !1,
                    zIndex: !1,
                    drag: null,
                    start: null,
                    stop: null
                },
                _create: function() {
                    "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
                },
                _setOption: function(t, e) {
                    this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
                },
                _destroy: function() {
                    (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this._removeHandleClassName(), this._mouseDestroy())
                },
                _mouseCapture: function(t) {
                    var e = this.options;
                    return !(this.helper || e.disabled || 0 < v(t.target).closest(".ui-resizable-handle").length) && (this.handle = this._getHandle(t), !!this.handle && (this._blurActiveElement(t), this._blockFrames(!0 === e.iframeFix ? "iframe" : e.iframeFix), !0))
                },
                _blockFrames: function(t) {
                    this.iframeBlocks = this.document.find(t).map(function() {
                        var t = v(this);
                        return v("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
                    })
                },
                _unblockFrames: function() {
                    this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
                },
                _blurActiveElement: function(t) {
                    var e = v.ui.safeActiveElement(this.document[0]);
                    v(t.target).closest(e).length || v.ui.safeBlur(e)
                },
                _mouseStart: function(t) {
                    var e = this.options;
                    return this.helper = this._createHelper(t), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), v.ui.ddmanager && (v.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = 0 < this.helper.parents().filter(function() {
                        return "fixed" === v(this).css("position")
                    }).length, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt), this._setContainment(), !1 === this._trigger("start", t) ? (this._clear(), !1) : (this._cacheHelperProportions(), v.ui.ddmanager && !e.dropBehaviour && v.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), v.ui.ddmanager && v.ui.ddmanager.dragStart(this, t), !0)
                },
                _refreshOffsets: function(t) {
                    this.offset = {
                        top: this.positionAbs.top - this.margins.top,
                        left: this.positionAbs.left - this.margins.left,
                        scroll: !1,
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }, this.offset.click = {
                        left: t.pageX - this.offset.left,
                        top: t.pageY - this.offset.top
                    }
                },
                _mouseDrag: function(t, e) {
                    if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !e) {
                        var i = this._uiHash();
                        if (!1 === this._trigger("drag", t, i)) return this._mouseUp(new v.Event("mouseup", t)), !1;
                        this.position = i.position
                    }
                    return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", v.ui.ddmanager && v.ui.ddmanager.drag(this, t), !1
                },
                _mouseStop: function(t) {
                    var e = this,
                        i = !1;
                    return v.ui.ddmanager && !this.options.dropBehaviour && (i = v.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || !0 === this.options.revert || v.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? v(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                        !1 !== e._trigger("stop", t) && e._clear()
                    }) : !1 !== this._trigger("stop", t) && this._clear(), !1
                },
                _mouseUp: function(t) {
                    return this._unblockFrames(), v.ui.ddmanager && v.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.trigger("focus"), v.ui.mouse.prototype._mouseUp.call(this, t)
                },
                cancel: function() {
                    return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new v.Event("mouseup", {
                        target: this.element[0]
                    })) : this._clear(), this
                },
                _getHandle: function(t) {
                    return !this.options.handle || !!v(t.target).closest(this.element.find(this.options.handle)).length
                },
                _setHandleClassName: function() {
                    this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
                },
                _removeHandleClassName: function() {
                    this._removeClass(this.handleElement, "ui-draggable-handle")
                },
                _createHelper: function(t) {
                    var e = this.options,
                        i = v.isFunction(e.helper),
                        s = i ? v(e.helper.apply(this.element[0], [t])) : "clone" === e.helper ? this.element.clone().removeAttr("id") : this.element;
                    return s.parents("body").length || s.appendTo("parent" === e.appendTo ? this.element[0].parentNode : e.appendTo), i && s[0] === this.element[0] && this._setPositionRelative(), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
                },
                _setPositionRelative: function() {
                    /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
                },
                _adjustOffsetFromHelper: function(t) {
                    "string" == typeof t && (t = t.split(" ")), v.isArray(t) && (t = {
                        left: +t[0],
                        top: +t[1] || 0
                    }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
                },
                _isRootNode: function(t) {
                    return /(html|body)/i.test(t.tagName) || t === this.document[0]
                },
                _getParentOffset: function() {
                    var t = this.offsetParent.offset(),
                        e = this.document[0];
                    return "absolute" === this.cssPosition && this.scrollParent[0] !== e && v.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                        top: 0,
                        left: 0
                    }), {
                        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                    }
                },
                _getRelativeOffset: function() {
                    if ("relative" !== this.cssPosition) return {
                        top: 0,
                        left: 0
                    };
                    var t = this.element.position(),
                        e = this._isRootNode(this.scrollParent[0]);
                    return {
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
                    }
                },
                _cacheMargins: function() {
                    this.margins = {
                        left: parseInt(this.element.css("marginLeft"), 10) || 0,
                        top: parseInt(this.element.css("marginTop"), 10) || 0,
                        right: parseInt(this.element.css("marginRight"), 10) || 0,
                        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                    }
                },
                _cacheHelperProportions: function() {
                    this.helperProportions = {
                        width: this.helper.outerWidth(),
                        height: this.helper.outerHeight()
                    }
                },
                _setContainment: function() {
                    var t, e, i, s = this.options,
                        o = this.document[0];
                    this.relativeContainer = null, s.containment ? "window" !== s.containment ? "document" !== s.containment ? s.containment.constructor !== Array ? ("parent" === s.containment && (s.containment = this.helper[0].parentNode), (i = (e = v(s.containment))[0]) && (t = /(scroll|auto)/.test(e.css("overflow")), this.containment = [(parseInt(e.css("borderLeftWidth"), 10) || 0) + (parseInt(e.css("paddingLeft"), 10) || 0), (parseInt(e.css("borderTopWidth"), 10) || 0) + (parseInt(e.css("paddingTop"), 10) || 0), (t ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e.css("borderRightWidth"), 10) || 0) - (parseInt(e.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e.css("borderBottomWidth"), 10) || 0) - (parseInt(e.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = e)) : this.containment = s.containment : this.containment = [0, 0, v(o).width() - this.helperProportions.width - this.margins.left, (v(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = [v(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, v(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, v(window).scrollLeft() + v(window).width() - this.helperProportions.width - this.margins.left, v(window).scrollTop() + (v(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = null
                },
                _convertPositionTo: function(t, e) {
                    e || (e = this.position);
                    var i = "absolute" === t ? 1 : -1,
                        s = this._isRootNode(this.scrollParent[0]);
                    return {
                        top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                        left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
                    }
                },
                _generatePosition: function(t, e) {
                    var i, s, o, n, a = this.options,
                        l = this._isRootNode(this.scrollParent[0]),
                        r = t.pageX,
                        h = t.pageY;
                    return l && this.offset.scroll || (this.offset.scroll = {
                        top: this.scrollParent.scrollTop(),
                        left: this.scrollParent.scrollLeft()
                    }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (r = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (r = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), a.grid && (o = a.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, h = i ? o - this.offset.click.top >= i[1] || o - this.offset.click.top > i[3] ? o : o - this.offset.click.top >= i[1] ? o - a.grid[1] : o + a.grid[1] : o, n = a.grid[0] ? this.originalPageX + Math.round((r - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, r = i ? n - this.offset.click.left >= i[0] || n - this.offset.click.left > i[2] ? n : n - this.offset.click.left >= i[0] ? n - a.grid[0] : n + a.grid[0] : n), "y" === a.axis && (r = this.originalPageX), "x" === a.axis && (h = this.originalPageY)), {
                        top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : l ? 0 : this.offset.scroll.top),
                        left: r - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : l ? 0 : this.offset.scroll.left)
                    }
                },
                _clear: function() {
                    this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
                },
                _trigger: function(t, e, i) {
                    return i = i || this._uiHash(), v.ui.plugin.call(this, t, [e, i, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), i.offset = this.positionAbs), v.Widget.prototype._trigger.call(this, t, e, i)
                },
                plugins: {},
                _uiHash: function() {
                    return {
                        helper: this.helper,
                        position: this.position,
                        originalPosition: this.originalPosition,
                        offset: this.positionAbs
                    }
                }
            }), v.ui.plugin.add("draggable", "connectToSortable", {
                start: function(e, t, i) {
                    var s = v.extend({}, t, {
                        item: i.element
                    });
                    i.sortables = [], v(i.options.connectToSortable).each(function() {
                        var t = v(this).sortable("instance");
                        t && !t.options.disabled && (i.sortables.push(t), t.refreshPositions(), t._trigger("activate", e, s))
                    })
                },
                stop: function(e, t, i) {
                    var s = v.extend({}, t, {
                        item: i.element
                    });
                    i.cancelHelperRemoval = !1, v.each(i.sortables, function() {
                        var t = this;
                        t.isOver ? (t.isOver = 0, i.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                            position: t.placeholder.css("position"),
                            top: t.placeholder.css("top"),
                            left: t.placeholder.css("left")
                        }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, s))
                    })
                },
                drag: function(i, s, o) {
                    v.each(o.sortables, function() {
                        var t = !1,
                            e = this;
                        e.positionAbs = o.positionAbs, e.helperProportions = o.helperProportions, e.offset.click = o.offset.click, e._intersectsWith(e.containerCache) && (t = !0, v.each(o.sortables, function() {
                            return this.positionAbs = o.positionAbs, this.helperProportions = o.helperProportions, this.offset.click = o.offset.click, this !== e && this._intersectsWith(this.containerCache) && v.contains(e.element[0], this.element[0]) && (t = !1), t
                        })), t ? (e.isOver || (e.isOver = 1, o._parent = s.helper.parent(), e.currentItem = s.helper.appendTo(e.element).data("ui-sortable-item", !0), e.options._helper = e.options.helper, e.options.helper = function() {
                            return s.helper[0]
                        }, i.target = e.currentItem[0], e._mouseCapture(i, !0), e._mouseStart(i, !0, !0), e.offset.click.top = o.offset.click.top, e.offset.click.left = o.offset.click.left, e.offset.parent.left -= o.offset.parent.left - e.offset.parent.left, e.offset.parent.top -= o.offset.parent.top - e.offset.parent.top, o._trigger("toSortable", i), o.dropped = e.element, v.each(o.sortables, function() {
                            this.refreshPositions()
                        }), o.currentItem = o.element, e.fromOutside = o), e.currentItem && (e._mouseDrag(i), s.position = e.position)) : e.isOver && (e.isOver = 0, e.cancelHelperRemoval = !0, e.options._revert = e.options.revert, e.options.revert = !1, e._trigger("out", i, e._uiHash(e)), e._mouseStop(i, !0), e.options.revert = e.options._revert, e.options.helper = e.options._helper, e.placeholder && e.placeholder.remove(), s.helper.appendTo(o._parent), o._refreshOffsets(i), s.position = o._generatePosition(i, !0), o._trigger("fromSortable", i), o.dropped = !1, v.each(o.sortables, function() {
                            this.refreshPositions()
                        }))
                    })
                }
            }), v.ui.plugin.add("draggable", "cursor", {
                start: function(t, e, i) {
                    var s = v("body"),
                        o = i.options;
                    s.css("cursor") && (o._cursor = s.css("cursor")), s.css("cursor", o.cursor)
                },
                stop: function(t, e, i) {
                    var s = i.options;
                    s._cursor && v("body").css("cursor", s._cursor)
                }
            }), v.ui.plugin.add("draggable", "opacity", {
                start: function(t, e, i) {
                    var s = v(e.helper),
                        o = i.options;
                    s.css("opacity") && (o._opacity = s.css("opacity")), s.css("opacity", o.opacity)
                },
                stop: function(t, e, i) {
                    var s = i.options;
                    s._opacity && v(e.helper).css("opacity", s._opacity)
                }
            }), v.ui.plugin.add("draggable", "scroll", {
                start: function(t, e, i) {
                    i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
                },
                drag: function(t, e, i) {
                    var s = i.options,
                        o = !1,
                        n = i.scrollParentNotHidden[0],
                        a = i.document[0];
                    n !== a && "HTML" !== n.tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + n.offsetHeight - t.pageY < s.scrollSensitivity ? n.scrollTop = o = n.scrollTop + s.scrollSpeed : t.pageY - i.overflowOffset.top < s.scrollSensitivity && (n.scrollTop = o = n.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + n.offsetWidth - t.pageX < s.scrollSensitivity ? n.scrollLeft = o = n.scrollLeft + s.scrollSpeed : t.pageX - i.overflowOffset.left < s.scrollSensitivity && (n.scrollLeft = o = n.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - v(a).scrollTop() < s.scrollSensitivity ? o = v(a).scrollTop(v(a).scrollTop() - s.scrollSpeed) : v(window).height() - (t.pageY - v(a).scrollTop()) < s.scrollSensitivity && (o = v(a).scrollTop(v(a).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (t.pageX - v(a).scrollLeft() < s.scrollSensitivity ? o = v(a).scrollLeft(v(a).scrollLeft() - s.scrollSpeed) : v(window).width() - (t.pageX - v(a).scrollLeft()) < s.scrollSensitivity && (o = v(a).scrollLeft(v(a).scrollLeft() + s.scrollSpeed)))), !1 !== o && v.ui.ddmanager && !s.dropBehaviour && v.ui.ddmanager.prepareOffsets(i, t)
                }
            }), v.ui.plugin.add("draggable", "snap", {
                start: function(t, e, i) {
                    var s = i.options;
                    i.snapElements = [], v(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function() {
                        var t = v(this),
                            e = t.offset();
                        this !== i.element[0] && i.snapElements.push({
                            item: this,
                            width: t.outerWidth(),
                            height: t.outerHeight(),
                            top: e.top,
                            left: e.left
                        })
                    })
                },
                drag: function(t, e, i) {
                    var s, o, n, a, l, r, h, c, u, p, d = i.options,
                        f = d.snapTolerance,
                        g = e.offset.left,
                        m = g + i.helperProportions.width,
                        _ = e.offset.top,
                        b = _ + i.helperProportions.height;
                    for (u = i.snapElements.length - 1; 0 <= u; u--) r = (l = i.snapElements[u].left - i.margins.left) + i.snapElements[u].width, c = (h = i.snapElements[u].top - i.margins.top) + i.snapElements[u].height, m < l - f || r + f < g || b < h - f || c + f < _ || !v.contains(i.snapElements[u].item.ownerDocument, i.snapElements[u].item) ? (i.snapElements[u].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, v.extend(i._uiHash(), {
                        snapItem: i.snapElements[u].item
                    })), i.snapElements[u].snapping = !1) : ("inner" !== d.snapMode && (s = Math.abs(h - b) <= f, o = Math.abs(c - _) <= f, n = Math.abs(l - m) <= f, a = Math.abs(r - g) <= f, s && (e.position.top = i._convertPositionTo("relative", {
                        top: h - i.helperProportions.height,
                        left: 0
                    }).top), o && (e.position.top = i._convertPositionTo("relative", {
                        top: c,
                        left: 0
                    }).top), n && (e.position.left = i._convertPositionTo("relative", {
                        top: 0,
                        left: l - i.helperProportions.width
                    }).left), a && (e.position.left = i._convertPositionTo("relative", {
                        top: 0,
                        left: r
                    }).left)), p = s || o || n || a, "outer" !== d.snapMode && (s = Math.abs(h - _) <= f, o = Math.abs(c - b) <= f, n = Math.abs(l - g) <= f, a = Math.abs(r - m) <= f, s && (e.position.top = i._convertPositionTo("relative", {
                        top: h,
                        left: 0
                    }).top), o && (e.position.top = i._convertPositionTo("relative", {
                        top: c - i.helperProportions.height,
                        left: 0
                    }).top), n && (e.position.left = i._convertPositionTo("relative", {
                        top: 0,
                        left: l
                    }).left), a && (e.position.left = i._convertPositionTo("relative", {
                        top: 0,
                        left: r - i.helperProportions.width
                    }).left)), !i.snapElements[u].snapping && (s || o || n || a || p) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, v.extend(i._uiHash(), {
                        snapItem: i.snapElements[u].item
                    })), i.snapElements[u].snapping = s || o || n || a || p)
                }
            }), v.ui.plugin.add("draggable", "stack", {
                start: function(t, e, i) {
                    var s, o = i.options,
                        n = v.makeArray(v(o.stack)).sort(function(t, e) {
                            return (parseInt(v(t).css("zIndex"), 10) || 0) - (parseInt(v(e).css("zIndex"), 10) || 0)
                        });
                    n.length && (s = parseInt(v(n[0]).css("zIndex"), 10) || 0, v(n).each(function(t) {
                        v(this).css("zIndex", s + t)
                    }), this.css("zIndex", s + n.length))
                }
            }), v.ui.plugin.add("draggable", "zIndex", {
                start: function(t, e, i) {
                    var s = v(e.helper),
                        o = i.options;
                    s.css("zIndex") && (o._zIndex = s.css("zIndex")), s.css("zIndex", o.zIndex)
                },
                stop: function(t, e, i) {
                    var s = i.options;
                    s._zIndex && v(e.helper).css("zIndex", s._zIndex)
                }
            }), v.ui.draggable
        }, o = [i(0), i(3), i(20), i(6), i(8), i(7), i(21), i(1), i(2)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(t) {
            return t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())
        }, o = [i(0), i(1)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(s) {
            return s.extend(s.expr[":"], {
                data: s.expr.createPseudo ? s.expr.createPseudo(function(e) {
                    return function(t) {
                        return !!s.data(t, e)
                    }
                }) : function(t, e, i) {
                    return !!s.data(t, i[3])
                }
            })
        }, o = [i(0), i(1)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(n) {
            return n.fn.scrollParent = function(t) {
                var e = this.css("position"),
                    i = "absolute" === e,
                    s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    o = this.parents().filter(function() {
                        var t = n(this);
                        return (!i || "static" !== t.css("position")) && s.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                    }).eq(0);
                return "fixed" !== e && o.length ? o : n(this[0].ownerDocument || document)
            }
        }, o = [i(0), i(1)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(b) {
            return b.widget("ui.resizable", b.ui.mouse, {
                version: "1.12.1",
                widgetEventPrefix: "resize",
                options: {
                    alsoResize: !1,
                    animate: !1,
                    animateDuration: "slow",
                    animateEasing: "swing",
                    aspectRatio: !1,
                    autoHide: !1,
                    classes: {
                        "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
                    },
                    containment: !1,
                    ghost: !1,
                    grid: !1,
                    handles: "e,s,se",
                    helper: !1,
                    maxHeight: null,
                    maxWidth: null,
                    minHeight: 10,
                    minWidth: 10,
                    zIndex: 90,
                    resize: null,
                    start: null,
                    stop: null
                },
                _num: function(t) {
                    return parseFloat(t) || 0
                },
                _isNumber: function(t) {
                    return !isNaN(parseFloat(t))
                },
                _hasScroll: function(t, e) {
                    if ("hidden" === b(t).css("overflow")) return !1;
                    var i, s = e && "left" === e ? "scrollLeft" : "scrollTop";
                    return 0 < t[s] || (t[s] = 1, i = 0 < t[s], t[s] = 0, i)
                },
                _create: function() {
                    var t, e = this.options,
                        i = this;
                    this._addClass("ui-resizable"), b.extend(this, {
                        _aspectRatio: !!e.aspectRatio,
                        aspectRatio: e.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: e.helper || e.ghost || e.animate ? e.helper || "ui-resizable-helper" : null
                    }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(b("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, t = {
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom"),
                        marginLeft: this.originalElement.css("marginLeft")
                    }, this.element.css(t), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css(t), this._proportionallyResize()), this._setupHandles(), e.autoHide && b(this.element).on("mouseenter", function() {
                        e.disabled || (i._removeClass("ui-resizable-autohide"), i._handles.show())
                    }).on("mouseleave", function() {
                        e.disabled || i.resizing || (i._addClass("ui-resizable-autohide"), i._handles.hide())
                    }), this._mouseInit()
                },
                _destroy: function() {
                    this._mouseDestroy();
                    var t, e = function(t) {
                        b(t).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
                    };
                    return this.elementIsWrapper && (e(this.element), t = this.element, this.originalElement.css({
                        position: t.css("position"),
                        width: t.outerWidth(),
                        height: t.outerHeight(),
                        top: t.css("top"),
                        left: t.css("left")
                    }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), e(this.originalElement), this
                },
                _setOption: function(t, e) {
                    switch (this._super(t, e), t) {
                        case "handles":
                            this._removeHandles(), this._setupHandles()
                    }
                },
                _setupHandles: function() {
                    var t, e, i, s, o, n = this.options,
                        a = this;
                    if (this.handles = n.handles || (b(".ui-resizable-handle", this.element).length ? {
                            n: ".ui-resizable-n",
                            e: ".ui-resizable-e",
                            s: ".ui-resizable-s",
                            w: ".ui-resizable-w",
                            se: ".ui-resizable-se",
                            sw: ".ui-resizable-sw",
                            ne: ".ui-resizable-ne",
                            nw: ".ui-resizable-nw"
                        } : "e,s,se"), this._handles = b(), this.handles.constructor === String)
                        for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), i = this.handles.split(","), this.handles = {}, e = 0; e < i.length; e++) s = "ui-resizable-" + (t = b.trim(i[e])), o = b("<div>"), this._addClass(o, "ui-resizable-handle " + s), o.css({
                            zIndex: n.zIndex
                        }), this.handles[t] = ".ui-resizable-" + t, this.element.append(o);
                    this._renderAxis = function(t) {
                        var e, i, s, o;
                        for (e in t = t || this.element, this.handles) this.handles[e].constructor === String ? this.handles[e] = this.element.children(this.handles[e]).first().show() : (this.handles[e].jquery || this.handles[e].nodeType) && (this.handles[e] = b(this.handles[e]), this._on(this.handles[e], {
                            mousedown: a._mouseDown
                        })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (i = b(this.handles[e], this.element), o = /sw|ne|nw|se|n|s/.test(e) ? i.outerHeight() : i.outerWidth(), s = ["padding", /ne|nw|n/.test(e) ? "Top" : /se|sw|s/.test(e) ? "Bottom" : /^e$/.test(e) ? "Right" : "Left"].join(""), t.css(s, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[e])
                    }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() {
                        a.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = o && o[1] ? o[1] : "se")
                    }), n.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
                },
                _removeHandles: function() {
                    this._handles.remove()
                },
                _mouseCapture: function(t) {
                    var e, i, s = !1;
                    for (e in this.handles)((i = b(this.handles[e])[0]) === t.target || b.contains(i, t.target)) && (s = !0);
                    return !this.options.disabled && s
                },
                _mouseStart: function(t) {
                    var e, i, s, o = this.options,
                        n = this.element;
                    return this.resizing = !0, this._renderProxy(), e = this._num(this.helper.css("left")), i = this._num(this.helper.css("top")), o.containment && (e += b(o.containment).scrollLeft() || 0, i += b(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                        left: e,
                        top: i
                    }, this.size = this._helper ? {
                        width: this.helper.width(),
                        height: this.helper.height()
                    } : {
                        width: n.width(),
                        height: n.height()
                    }, this.originalSize = this._helper ? {
                        width: n.outerWidth(),
                        height: n.outerHeight()
                    } : {
                        width: n.width(),
                        height: n.height()
                    }, this.sizeDiff = {
                        width: n.outerWidth() - n.width(),
                        height: n.outerHeight() - n.height()
                    }, this.originalPosition = {
                        left: e,
                        top: i
                    }, this.originalMousePosition = {
                        left: t.pageX,
                        top: t.pageY
                    }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = b(".ui-resizable-" + this.axis).css("cursor"), b("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), this._addClass("ui-resizable-resizing"), this._propagate("start", t), !0
                },
                _mouseDrag: function(t) {
                    var e, i, s = this.originalMousePosition,
                        o = this.axis,
                        n = t.pageX - s.left || 0,
                        a = t.pageY - s.top || 0,
                        l = this._change[o];
                    return this._updatePrevProperties(), l && (e = l.apply(this, [t, n, a]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (e = this._updateRatio(e, t)), e = this._respectSize(e, t), this._updateCache(e), this._propagate("resize", t), i = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), b.isEmptyObject(i) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges())), !1
                },
                _mouseStop: function(t) {
                    this.resizing = !1;
                    var e, i, s, o, n, a, l, r = this.options,
                        h = this;
                    return this._helper && (s = (i = (e = this._proportionallyResizeElements).length && /textarea/i.test(e[0].nodeName)) && this._hasScroll(e[0], "left") ? 0 : h.sizeDiff.height, o = i ? 0 : h.sizeDiff.width, n = {
                        width: h.helper.width() - o,
                        height: h.helper.height() - s
                    }, a = parseFloat(h.element.css("left")) + (h.position.left - h.originalPosition.left) || null, l = parseFloat(h.element.css("top")) + (h.position.top - h.originalPosition.top) || null, r.animate || this.element.css(b.extend(n, {
                        top: l,
                        left: a
                    })), h.helper.height(h.size.height), h.helper.width(h.size.width), this._helper && !r.animate && this._proportionallyResize()), b("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
                },
                _updatePrevProperties: function() {
                    this.prevPosition = {
                        top: this.position.top,
                        left: this.position.left
                    }, this.prevSize = {
                        width: this.size.width,
                        height: this.size.height
                    }
                },
                _applyChanges: function() {
                    var t = {};
                    return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
                },
                _updateVirtualBoundaries: function(t) {
                    var e, i, s, o, n, a = this.options;
                    n = {
                        minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                        maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                        minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                        maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
                    }, (this._aspectRatio || t) && (e = n.minHeight * this.aspectRatio, s = n.minWidth / this.aspectRatio, i = n.maxHeight * this.aspectRatio, o = n.maxWidth / this.aspectRatio, e > n.minWidth && (n.minWidth = e), s > n.minHeight && (n.minHeight = s), i < n.maxWidth && (n.maxWidth = i), o < n.maxHeight && (n.maxHeight = o)), this._vBoundaries = n
                },
                _updateCache: function(t) {
                    this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
                },
                _updateRatio: function(t) {
                    var e = this.position,
                        i = this.size,
                        s = this.axis;
                    return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
                },
                _respectSize: function(t) {
                    var e = this._vBoundaries,
                        i = this.axis,
                        s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                        o = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                        n = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                        a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                        l = this.originalPosition.left + this.originalSize.width,
                        r = this.originalPosition.top + this.originalSize.height,
                        h = /sw|nw|w/.test(i),
                        c = /nw|ne|n/.test(i);
                    return n && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), o && (t.height = e.maxHeight), n && h && (t.left = l - e.minWidth), s && h && (t.left = l - e.maxWidth), a && c && (t.top = r - e.minHeight), o && c && (t.top = r - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
                },
                _getPaddingPlusBorderDimensions: function(t) {
                    for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], o = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++) i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(o[e]) || 0;
                    return {
                        height: i[0] + i[2],
                        width: i[1] + i[3]
                    }
                },
                _proportionallyResize: function() {
                    if (this._proportionallyResizeElements.length)
                        for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                            height: i.height() - this.outerDimensions.height || 0,
                            width: i.width() - this.outerDimensions.width || 0
                        })
                },
                _renderProxy: function() {
                    var t = this.element,
                        e = this.options;
                    this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || b("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        position: "absolute",
                        left: this.elementOffset.left + "px",
                        top: this.elementOffset.top + "px",
                        zIndex: ++e.zIndex
                    }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
                },
                _change: {
                    e: function(t, e) {
                        return {
                            width: this.originalSize.width + e
                        }
                    },
                    w: function(t, e) {
                        var i = this.originalSize;
                        return {
                            left: this.originalPosition.left + e,
                            width: i.width - e
                        }
                    },
                    n: function(t, e, i) {
                        var s = this.originalSize;
                        return {
                            top: this.originalPosition.top + i,
                            height: s.height - i
                        }
                    },
                    s: function(t, e, i) {
                        return {
                            height: this.originalSize.height + i
                        }
                    },
                    se: function(t, e, i) {
                        return b.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
                    },
                    sw: function(t, e, i) {
                        return b.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
                    },
                    ne: function(t, e, i) {
                        return b.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
                    },
                    nw: function(t, e, i) {
                        return b.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
                    }
                },
                _propagate: function(t, e) {
                    b.ui.plugin.call(this, t, [e, this.ui()]), "resize" !== t && this._trigger(t, e, this.ui())
                },
                plugins: {},
                ui: function() {
                    return {
                        originalElement: this.originalElement,
                        element: this.element,
                        helper: this.helper,
                        position: this.position,
                        size: this.size,
                        originalSize: this.originalSize,
                        originalPosition: this.originalPosition
                    }
                }
            }), b.ui.plugin.add("resizable", "animate", {
                stop: function(e) {
                    var i = b(this).resizable("instance"),
                        t = i.options,
                        s = i._proportionallyResizeElements,
                        o = s.length && /textarea/i.test(s[0].nodeName),
                        n = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                        a = o ? 0 : i.sizeDiff.width,
                        l = {
                            width: i.size.width - a,
                            height: i.size.height - n
                        },
                        r = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                        h = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
                    i.element.animate(b.extend(l, h && r ? {
                        top: h,
                        left: r
                    } : {}), {
                        duration: t.animateDuration,
                        easing: t.animateEasing,
                        step: function() {
                            var t = {
                                width: parseFloat(i.element.css("width")),
                                height: parseFloat(i.element.css("height")),
                                top: parseFloat(i.element.css("top")),
                                left: parseFloat(i.element.css("left"))
                            };
                            s && s.length && b(s[0]).css({
                                width: t.width,
                                height: t.height
                            }), i._updateCache(t), i._propagate("resize", e)
                        }
                    })
                }
            }), b.ui.plugin.add("resizable", "containment", {
                start: function() {
                    var i, s, t, e, o, n, a, l = b(this).resizable("instance"),
                        r = l.options,
                        h = l.element,
                        c = r.containment,
                        u = c instanceof b ? c.get(0) : /parent/.test(c) ? h.parent().get(0) : c;
                    u && (l.containerElement = b(u), /document/.test(c) || c === document ? (l.containerOffset = {
                        left: 0,
                        top: 0
                    }, l.containerPosition = {
                        left: 0,
                        top: 0
                    }, l.parentData = {
                        element: b(document),
                        left: 0,
                        top: 0,
                        width: b(document).width(),
                        height: b(document).height() || document.body.parentNode.scrollHeight
                    }) : (i = b(u), s = [], b(["Top", "Right", "Left", "Bottom"]).each(function(t, e) {
                        s[t] = l._num(i.css("padding" + e))
                    }), l.containerOffset = i.offset(), l.containerPosition = i.position(), l.containerSize = {
                        height: i.innerHeight() - s[3],
                        width: i.innerWidth() - s[1]
                    }, t = l.containerOffset, e = l.containerSize.height, o = l.containerSize.width, n = l._hasScroll(u, "left") ? u.scrollWidth : o, a = l._hasScroll(u) ? u.scrollHeight : e, l.parentData = {
                        element: u,
                        left: t.left,
                        top: t.top,
                        width: n,
                        height: a
                    }))
                },
                resize: function(t) {
                    var e, i, s, o, n = b(this).resizable("instance"),
                        a = n.options,
                        l = n.containerOffset,
                        r = n.position,
                        h = n._aspectRatio || t.shiftKey,
                        c = {
                            top: 0,
                            left: 0
                        },
                        u = n.containerElement,
                        p = !0;
                    u[0] !== document && /static/.test(u.css("position")) && (c = l), r.left < (n._helper ? l.left : 0) && (n.size.width = n.size.width + (n._helper ? n.position.left - l.left : n.position.left - c.left), h && (n.size.height = n.size.width / n.aspectRatio, p = !1), n.position.left = a.helper ? l.left : 0), r.top < (n._helper ? l.top : 0) && (n.size.height = n.size.height + (n._helper ? n.position.top - l.top : n.position.top), h && (n.size.width = n.size.height * n.aspectRatio, p = !1), n.position.top = n._helper ? l.top : 0), s = n.containerElement.get(0) === n.element.parent().get(0), o = /relative|absolute/.test(n.containerElement.css("position")), s && o ? (n.offset.left = n.parentData.left + n.position.left, n.offset.top = n.parentData.top + n.position.top) : (n.offset.left = n.element.offset().left, n.offset.top = n.element.offset().top), e = Math.abs(n.sizeDiff.width + (n._helper ? n.offset.left - c.left : n.offset.left - l.left)), i = Math.abs(n.sizeDiff.height + (n._helper ? n.offset.top - c.top : n.offset.top - l.top)), e + n.size.width >= n.parentData.width && (n.size.width = n.parentData.width - e, h && (n.size.height = n.size.width / n.aspectRatio, p = !1)), i + n.size.height >= n.parentData.height && (n.size.height = n.parentData.height - i, h && (n.size.width = n.size.height * n.aspectRatio, p = !1)), p || (n.position.left = n.prevPosition.left, n.position.top = n.prevPosition.top, n.size.width = n.prevSize.width, n.size.height = n.prevSize.height)
                },
                stop: function() {
                    var t = b(this).resizable("instance"),
                        e = t.options,
                        i = t.containerOffset,
                        s = t.containerPosition,
                        o = t.containerElement,
                        n = b(t.helper),
                        a = n.offset(),
                        l = n.outerWidth() - t.sizeDiff.width,
                        r = n.outerHeight() - t.sizeDiff.height;
                    t._helper && !e.animate && /relative/.test(o.css("position")) && b(this).css({
                        left: a.left - s.left - i.left,
                        width: l,
                        height: r
                    }), t._helper && !e.animate && /static/.test(o.css("position")) && b(this).css({
                        left: a.left - s.left - i.left,
                        width: l,
                        height: r
                    })
                }
            }), b.ui.plugin.add("resizable", "alsoResize", {
                start: function() {
                    var t = b(this).resizable("instance").options;
                    b(t.alsoResize).each(function() {
                        var t = b(this);
                        t.data("ui-resizable-alsoresize", {
                            width: parseFloat(t.width()),
                            height: parseFloat(t.height()),
                            left: parseFloat(t.css("left")),
                            top: parseFloat(t.css("top"))
                        })
                    })
                },
                resize: function(t, i) {
                    var e = b(this).resizable("instance"),
                        s = e.options,
                        o = e.originalSize,
                        n = e.originalPosition,
                        a = {
                            height: e.size.height - o.height || 0,
                            width: e.size.width - o.width || 0,
                            top: e.position.top - n.top || 0,
                            left: e.position.left - n.left || 0
                        };
                    b(s.alsoResize).each(function() {
                        var t = b(this),
                            s = b(this).data("ui-resizable-alsoresize"),
                            o = {},
                            e = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        b.each(e, function(t, e) {
                            var i = (s[e] || 0) + (a[e] || 0);
                            i && 0 <= i && (o[e] = i || null)
                        }), t.css(o)
                    })
                },
                stop: function() {
                    b(this).removeData("ui-resizable-alsoresize")
                }
            }), b.ui.plugin.add("resizable", "ghost", {
                start: function() {
                    var t = b(this).resizable("instance"),
                        e = t.size;
                    t.ghost = t.originalElement.clone(), t.ghost.css({
                        opacity: .25,
                        display: "block",
                        position: "relative",
                        height: e.height,
                        width: e.width,
                        margin: 0,
                        left: 0,
                        top: 0
                    }), t._addClass(t.ghost, "ui-resizable-ghost"), !1 !== b.uiBackCompat && "string" == typeof t.options.ghost && t.ghost.addClass(this.options.ghost), t.ghost.appendTo(t.helper)
                },
                resize: function() {
                    var t = b(this).resizable("instance");
                    t.ghost && t.ghost.css({
                        position: "relative",
                        height: t.size.height,
                        width: t.size.width
                    })
                },
                stop: function() {
                    var t = b(this).resizable("instance");
                    t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
                }
            }), b.ui.plugin.add("resizable", "grid", {
                resize: function() {
                    var t, e = b(this).resizable("instance"),
                        i = e.options,
                        s = e.size,
                        o = e.originalSize,
                        n = e.originalPosition,
                        a = e.axis,
                        l = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                        r = l[0] || 1,
                        h = l[1] || 1,
                        c = Math.round((s.width - o.width) / r) * r,
                        u = Math.round((s.height - o.height) / h) * h,
                        p = o.width + c,
                        d = o.height + u,
                        f = i.maxWidth && i.maxWidth < p,
                        g = i.maxHeight && i.maxHeight < d,
                        m = i.minWidth && i.minWidth > p,
                        _ = i.minHeight && i.minHeight > d;
                    i.grid = l, m && (p += r), _ && (d += h), f && (p -= r), g && (d -= h), /^(se|s|e)$/.test(a) ? (e.size.width = p, e.size.height = d) : /^(ne)$/.test(a) ? (e.size.width = p, e.size.height = d, e.position.top = n.top - u) : /^(sw)$/.test(a) ? (e.size.width = p, e.size.height = d, e.position.left = n.left - c) : ((d - h <= 0 || p - r <= 0) && (t = e._getPaddingPlusBorderDimensions(this)), 0 < d - h ? (e.size.height = d, e.position.top = n.top - u) : (d = h - t.height, e.size.height = d, e.position.top = n.top + o.height - d), 0 < p - r ? (e.size.width = p, e.position.left = n.left - c) : (p = r - t.width, e.size.width = p, e.position.left = n.left + o.width - p))
                }
            }), b.ui.resizable
        }, o = [i(0), i(3), i(23), i(6), i(1), i(2)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(t) {
            return t.fn.extend({
                disableSelection: (e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
                    return this.on(e + ".ui-disableSelection", function(t) {
                        t.preventDefault()
                    })
                }),
                enableSelection: function() {
                    return this.off(".ui-disableSelection")
                }
            });
            var e
        }, o = [i(0), i(1)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(D) {
            return function() {
                var o, x = Math.max,
                    z = Math.abs,
                    s = /left|center|right/,
                    n = /top|center|bottom/,
                    a = /[\+\-]\d+(\.[\d]+)?%?/,
                    l = /^\w+/,
                    r = /%$/,
                    h = D.fn.position;

                function P(t, e, i) {
                    return [parseFloat(t[0]) * (r.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (r.test(t[1]) ? i / 100 : 1)]
                }

                function C(t, e) {
                    return parseInt(D.css(t, e), 10) || 0
                }
                D.position = {
                    scrollbarWidth: function() {
                        if (void 0 !== o) return o;
                        var t, e, i = D("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                            s = i.children()[0];
                        return D("body").append(i), t = s.offsetWidth, i.css("overflow", "scroll"), t === (e = s.offsetWidth) && (e = i[0].clientWidth), i.remove(), o = t - e
                    },
                    getScrollInfo: function(t) {
                        var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                            i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                            s = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
                        return {
                            width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? D.position.scrollbarWidth() : 0,
                            height: s ? D.position.scrollbarWidth() : 0
                        }
                    },
                    getWithinInfo: function(t) {
                        var e = D(t || window),
                            i = D.isWindow(e[0]),
                            s = !!e[0] && 9 === e[0].nodeType;
                        return {
                            element: e,
                            isWindow: i,
                            isDocument: s,
                            offset: !i && !s ? D(t).offset() : {
                                left: 0,
                                top: 0
                            },
                            scrollLeft: e.scrollLeft(),
                            scrollTop: e.scrollTop(),
                            width: e.outerWidth(),
                            height: e.outerHeight()
                        }
                    }
                }, D.fn.position = function(u) {
                    if (!u || !u.of) return h.apply(this, arguments);
                    u = D.extend({}, u);
                    var p, d, f, g, m, t, e, i, _ = D(u.of),
                        b = D.position.getWithinInfo(u.within),
                        v = D.position.getScrollInfo(b),
                        w = (u.collision || "flip").split(" "),
                        y = {};
                    return t = 9 === (i = (e = _)[0]).nodeType ? {
                        width: e.width(),
                        height: e.height(),
                        offset: {
                            top: 0,
                            left: 0
                        }
                    } : D.isWindow(i) ? {
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
                    }, _[0].preventDefault && (u.at = "left top"), d = t.width, f = t.height, g = t.offset, m = D.extend({}, g), D.each(["my", "at"], function() {
                        var t, e, i = (u[this] || "").split(" ");
                        1 === i.length && (i = s.test(i[0]) ? i.concat(["center"]) : n.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = s.test(i[0]) ? i[0] : "center", i[1] = n.test(i[1]) ? i[1] : "center", t = a.exec(i[0]), e = a.exec(i[1]), y[this] = [t ? t[0] : 0, e ? e[0] : 0], u[this] = [l.exec(i[0])[0], l.exec(i[1])[0]]
                    }), 1 === w.length && (w[1] = w[0]), "right" === u.at[0] ? m.left += d : "center" === u.at[0] && (m.left += d / 2), "bottom" === u.at[1] ? m.top += f : "center" === u.at[1] && (m.top += f / 2), p = P(y.at, d, f), m.left += p[0], m.top += p[1], this.each(function() {
                        var i, t, a = D(this),
                            l = a.outerWidth(),
                            r = a.outerHeight(),
                            e = C(this, "marginLeft"),
                            s = C(this, "marginTop"),
                            o = l + e + C(this, "marginRight") + v.width,
                            n = r + s + C(this, "marginBottom") + v.height,
                            h = D.extend({}, m),
                            c = P(y.my, a.outerWidth(), a.outerHeight());
                        "right" === u.my[0] ? h.left -= l : "center" === u.my[0] && (h.left -= l / 2), "bottom" === u.my[1] ? h.top -= r : "center" === u.my[1] && (h.top -= r / 2), h.left += c[0], h.top += c[1], i = {
                            marginLeft: e,
                            marginTop: s
                        }, D.each(["left", "top"], function(t, e) {
                            D.ui.position[w[t]] && D.ui.position[w[t]][e](h, {
                                targetWidth: d,
                                targetHeight: f,
                                elemWidth: l,
                                elemHeight: r,
                                collisionPosition: i,
                                collisionWidth: o,
                                collisionHeight: n,
                                offset: [p[0] + c[0], p[1] + c[1]],
                                my: u.my,
                                at: u.at,
                                within: b,
                                elem: a
                            })
                        }), u.using && (t = function(t) {
                            var e = g.left - h.left,
                                i = e + d - l,
                                s = g.top - h.top,
                                o = s + f - r,
                                n = {
                                    target: {
                                        element: _,
                                        left: g.left,
                                        top: g.top,
                                        width: d,
                                        height: f
                                    },
                                    element: {
                                        element: a,
                                        left: h.left,
                                        top: h.top,
                                        width: l,
                                        height: r
                                    },
                                    horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                                    vertical: o < 0 ? "top" : 0 < s ? "bottom" : "middle"
                                };
                            d < l && z(e + i) < d && (n.horizontal = "center"), f < r && z(s + o) < f && (n.vertical = "middle"), x(z(e), z(i)) > x(z(s), z(o)) ? n.important = "horizontal" : n.important = "vertical", u.using.call(this, t, n)
                        }), a.offset(D.extend(h, {
                            using: t
                        }))
                    })
                }, D.ui.position = {
                    fit: {
                        left: function(t, e) {
                            var i, s = e.within,
                                o = s.isWindow ? s.scrollLeft : s.offset.left,
                                n = s.width,
                                a = t.left - e.collisionPosition.marginLeft,
                                l = o - a,
                                r = a + e.collisionWidth - n - o;
                            e.collisionWidth > n ? 0 < l && r <= 0 ? (i = t.left + l + e.collisionWidth - n - o, t.left += l - i) : t.left = 0 < r && l <= 0 ? o : r < l ? o + n - e.collisionWidth : o : 0 < l ? t.left += l : 0 < r ? t.left -= r : t.left = x(t.left - a, t.left)
                        },
                        top: function(t, e) {
                            var i, s = e.within,
                                o = s.isWindow ? s.scrollTop : s.offset.top,
                                n = e.within.height,
                                a = t.top - e.collisionPosition.marginTop,
                                l = o - a,
                                r = a + e.collisionHeight - n - o;
                            e.collisionHeight > n ? 0 < l && r <= 0 ? (i = t.top + l + e.collisionHeight - n - o, t.top += l - i) : t.top = 0 < r && l <= 0 ? o : r < l ? o + n - e.collisionHeight : o : 0 < l ? t.top += l : 0 < r ? t.top -= r : t.top = x(t.top - a, t.top)
                        }
                    },
                    flip: {
                        left: function(t, e) {
                            var i, s, o = e.within,
                                n = o.offset.left + o.scrollLeft,
                                a = o.width,
                                l = o.isWindow ? o.scrollLeft : o.offset.left,
                                r = t.left - e.collisionPosition.marginLeft,
                                h = r - l,
                                c = r + e.collisionWidth - a - l,
                                u = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                                p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                                d = -2 * e.offset[0];
                            h < 0 ? ((i = t.left + u + p + d + e.collisionWidth - a - n) < 0 || i < z(h)) && (t.left += u + p + d) : 0 < c && (0 < (s = t.left - e.collisionPosition.marginLeft + u + p + d - l) || z(s) < c) && (t.left += u + p + d)
                        },
                        top: function(t, e) {
                            var i, s, o = e.within,
                                n = o.offset.top + o.scrollTop,
                                a = o.height,
                                l = o.isWindow ? o.scrollTop : o.offset.top,
                                r = t.top - e.collisionPosition.marginTop,
                                h = r - l,
                                c = r + e.collisionHeight - a - l,
                                u = "top" === e.my[1],
                                p = u ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                                d = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                                f = -2 * e.offset[1];
                            h < 0 ? ((s = t.top + p + d + f + e.collisionHeight - a - n) < 0 || s < z(h)) && (t.top += p + d + f) : 0 < c && (0 < (i = t.top - e.collisionPosition.marginTop + p + d + f - l) || z(i) < c) && (t.top += p + d + f)
                        }
                    },
                    flipfit: {
                        left: function() {
                            D.ui.position.flip.left.apply(this, arguments), D.ui.position.fit.left.apply(this, arguments)
                        },
                        top: function() {
                            D.ui.position.flip.top.apply(this, arguments), D.ui.position.fit.top.apply(this, arguments)
                        }
                    }
                }
            }(), D.ui.position
        }, o = [i(0), i(1)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(s) {
            return s.extend(s.expr[":"], {
                tabbable: function(t) {
                    var e = s.attr(t, "tabindex"),
                        i = null != e;
                    return (!i || 0 <= e) && s.ui.focusable(t, i)
                }
            })
        }, o = [i(0), i(1), i(9)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }, function(t, e, i) {
        "use strict";
        var s, o, n, a;
        a = function(t) {
            return t.fn.extend({
                uniqueId: (e = 0, function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++e)
                    })
                }),
                removeUniqueId: function() {
                    return this.each(function() {
                        /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                    })
                }
            });
            var e
        }, o = [i(0), i(1)], void 0 === (n = "function" == typeof(s = a) ? s.apply(e, o) : s) || (t.exports = n)
    }])
});
define("exposedVars", ["module"], function(e) {
    "use strict";
    var n = {
        get: function(e) {
            return window.ustream && window.ustream.vars ? window.ustream.vars[e] : null
        },
        set: function(e, n) {
            window.ustream.vars[e] = n
        }
    };
    e.exports = n
});
define("ustream-legacy-merge", ["module"], function(e) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        c = {
            type: function(e) {
                if (null == e) return !1;
                if (e.htmlElement) return "element";
                var t = void 0 === e ? "undefined" : r(e);
                if ("object" === t && e.nodeName) switch (e.nodeType) {
                    case 1:
                        return "element";
                    case 3:
                        return /\S/.test(e.nodeValue) ? "textnode" : "whitespace"
                }
                if ("object" === t || "function" === t) {
                    switch (e.constructor) {
                        case Array:
                            return "array";
                        case RegExp:
                            return "regexp"
                    }
                    if ("number" == typeof e.length) {
                        if (e.item) return "collection";
                        if (e.callee) return "arguments"
                    }
                }
                return t
            },
            merge: function(e) {
                for (var t = {}, r = 0; r < arguments.length; r++)
                    for (var n in arguments[r]) {
                        var o = arguments[r][n],
                            u = t[n];
                        u && "object" === this.type(o) && "object" === this.type(u) ? t[n] = c.merge(u, o) : t[n] = o
                    }
                return t
            }
        };
    e.exports = c
});
! function(s) {
    var b = s.scrollTo = function(e, t, n) {
        s(window).scrollTo(e, t, n)
    };

    function e(e) {
        return "object" == typeof e ? e : {
            top: e,
            left: e
        }
    }
    b.defaults = {
        axis: "xy",
        duration: 1.3 <= parseFloat(s.fn.jquery) ? 0 : 1,
        limit: !0
    }, b.window = function(e) {
        return s(window)._scrollable()
    }, s.fn._scrollable = function() {
        return this.map(function() {
            var e = this;
            if (!(!e.nodeName || -1 != s.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]))) return e;
            var t = (e.contentWindow || e).document || e.ownerDocument || e;
            return /webkit/i.test(navigator.userAgent) || "BackCompat" == t.compatMode ? t.body : t.documentElement
        })
    }, s.fn.scrollTo = function(t, n, w) {
        return "object" == typeof n && (w = n, n = 0), "function" == typeof w && (w = {
            onAfter: w
        }), "max" == t && (t = 9e9), w = s.extend({}, b.defaults, w), n = n || w.duration, w.queue = w.queue && 1 < w.axis.length, w.queue && (n /= 2), w.offset = e(w.offset), w.over = e(w.over), this._scrollable().each(function() {
            if (null != t) {
                var c, u = this,
                    f = s(u),
                    l = t,
                    d = {},
                    m = f.is("html,body");
                switch (typeof l) {
                    case "number":
                    case "string":
                        if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(l)) {
                            l = e(l);
                            break
                        }
                        if (!(l = s(l, this)).length) return;
                    case "object":
                        (l.is || l.style) && (c = (l = s(l)).offset())
                }
                s.each(w.axis.split(""), function(e, t) {
                    var n = "x" == t ? "Left" : "Top",
                        o = n.toLowerCase(),
                        r = "scroll" + n,
                        i = u[r],
                        a = b.max(u, t);
                    if (c) d[r] = c[o] + (m ? 0 : i - f.offset()[o]), w.margin && (d[r] -= parseInt(l.css("margin" + n)) || 0, d[r] -= parseInt(l.css("border" + n + "Width")) || 0), d[r] += w.offset[o] || 0, w.over[o] && (d[r] += l["x" == t ? "width" : "height"]() * w.over[o]);
                    else {
                        var s = l[o];
                        d[r] = s.slice && "%" == s.slice(-1) ? parseFloat(s) / 100 * a : s
                    }
                    w.limit && /^\d+$/.test(d[r]) && (d[r] = d[r] <= 0 ? 0 : Math.min(d[r], a)), !e && w.queue && (i != d[r] && h(w.onAfterFirst), delete d[r])
                }), h(w.onAfter)
            }

            function h(e) {
                f.animate(d, n, w.easing, e && function() {
                    e.call(this, t, w)
                })
            }
        }).end()
    }, b.max = function(e, t) {
        var n = "x" == t ? "Width" : "Height",
            o = "scroll" + n;
        if (!s(e).is("html,body")) return e[o] - s(e)[n.toLowerCase()]();
        var r = "client" + n,
            i = e.ownerDocument.documentElement,
            a = e.ownerDocument.body;
        return Math.max(i[o], a[o]) - Math.min(i[r], a[r])
    }
}(jQuery);
define("uvalidator", ["jquery"], function(e) {
    return function(e) {
        var r = {};

        function i(t) {
            if (r[t]) return r[t].exports;
            var a = r[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(a.exports, a, a.exports, i), a.l = !0, a.exports
        }
        return i.m = e, i.c = r, i.d = function(t, a, e) {
            i.o(t, a) || Object.defineProperty(t, a, {
                enumerable: !0,
                get: e
            })
        }, i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, i.t = function(a, t) {
            if (1 & t && (a = i(a)), 8 & t) return a;
            if (4 & t && "object" == typeof a && a && a.__esModule) return a;
            var e = Object.create(null);
            if (i.r(e), Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: a
                }), 2 & t && "string" != typeof a)
                for (var r in a) i.d(e, r, function(t) {
                    return a[t]
                }.bind(null, r));
            return e
        }, i.n = function(t) {
            var a = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return i.d(a, "a", a), a
        }, i.o = function(t, a) {
            return Object.prototype.hasOwnProperty.call(t, a)
        }, i.p = "", i(i.s = 7)
    }([function(t, a) {
        t.exports = e
    }, function(t, a, e) {
        var r, i;
        r = [e(0), e(2)], void 0 === (i = function(t, a) {
            var e = function(d) {
                "use strict";
                var n, o = {},
                    i = {};
                d.uvalidator.events;

                function u(t) {
                    return Array.prototype.slice.call(t)
                }
                n = function(o) {
                    return {
                        setForm: function(t, a) {
                            var e = d(this);

                            function r(t) {
                                var a = d.makeArray(arguments).slice(1);
                                e.trigger(t, a)
                            }
                            return this.form = t, a = a || {}, d(t).uvalidator(a).on(o.FORM_INVALID, d.proxy(this.onFormInvalid, this)).on(o.FORM_VALID, d.proxy(this.onFormValid, this)).on(o.FIELD_INVALID, d.proxy(this.onFieldInvalid, this)).on(o.FIELD_VALID, d.proxy(this.onFieldValid, this)).on(o.START_FIELD_VALIDATION, d.proxy(this.onFieldValidationStart, this)).on(o.FINISH_FIELD_VALIDATION, d.proxy(this.onFieldValidationFinish, this)).on(o.START_FORM_VALIDATION, d.proxy(this.onFormValidationStart, this)).on(o.FINISH_FORM_VALIDATION, d.proxy(this.onFormValidationFinish, this)).on(o.FORM_VALID, d.proxy(this.resetResults, this)).on(o.FORM_VALID, r).on(o.FORM_INVALID, r).on(o.FIELD_INVALID, r).on(o.FIELD_VALID, r).on(o.START_FIELD_VALIDATION, r).on(o.FINISH_FIELD_VALIDATION, r).on(o.START_FORM_VALIDATION, r).on(o.FINISH_FORM_VALIDATION, r), this
                        },
                        on: function() {
                            var t = d(this);
                            return t.on.apply(t, u(arguments)), this
                        },
                        resetResults: function() {
                            return this.results = {}, this
                        },
                        applyErrors: function(t) {
                            var i = this.form,
                                n = {};
                            return d.each(t, function(t, a) {
                                var e, r = i.find('[name="' + t + '"]');
                                e = {
                                    field: r,
                                    message: a && a.text ? a.text : a,
                                    isValid: !1
                                }, r.trigger(o.FIELD_INVALID, e), n[t] = e
                            }), this.form.trigger(o.FORM_INVALID, {
                                results: n,
                                errors: n
                            }), this.results = n, this
                        },
                        getMessage: function(t) {
                            var a = null;
                            return t.message ? a = t.message : "function" == typeof(a = i[t.validator]) && (a = a(t)), a
                        },
                        hideAllError: function() {
                            this.form.find(":input").each(d.proxy(function(t, a) {
                                this.setFieldValid(a), this.hideFieldError(a)
                            }, this))
                        },
                        onFieldValid: function(t, a) {
                            this.setFieldValid(t.target, a), this.hideFieldError(t.target, a)
                        },
                        onFieldInvalid: function(t, a) {
                            this.setFieldInvalid(t.target, a), this.showFieldError(t.target, a)
                        },
                        showFieldError: function() {},
                        setFieldInvalid: function() {},
                        setFieldValid: function() {},
                        hideFieldError: function() {},
                        onFieldValidationStart: function() {},
                        onFieldValidationFinish: function() {},
                        onFormValidationStart: function() {},
                        onFormValidationFinish: function() {},
                        onFormValid: function() {},
                        onFormInvalid: function() {}
                    }
                };
                var t = function(e) {
                    return function(t, a) {
                        var r = n(e);
                        a = d.extend(!0, {}, r, a);
                        var i = function() {};
                        i.prototype = a, o[t] = function() {
                            var e = new i;
                            return e.superclass = {}, d.each(r, function(t, a) {
                                e.superclass[t] = function() {
                                    return a.apply(e, u(arguments))
                                }
                            }), e
                        }
                    }
                };

                function a(t, a, e) {
                    return (new o[t]).setForm(a, e)
                }
                var e = function(t, a) {
                        i[t] = a
                    },
                    r = function(t) {
                        var a, e, r;
                        for (e = 0, a = t.length; e < a; e += 1) r = t[e], i[r[0]] = r[1]
                    },
                    s = function() {
                        var e = Array.prototype.slice.call(arguments);
                        return e.shift().replace(/\{[0-9]+\}/g, function(t) {
                            var a = e[t.slice(1, t.indexOf("}"))];
                            return void 0 === a && (a = t), a
                        })
                    };
                return d.uvalidatorSkin = t(d, d.uvalidator.events), {
                    createSkinFactory: t,
                    applySkin: d.uvalidatorApplySkin = a,
                    addMessage: d.uvalidatorSkin.addMessage = e,
                    addMessages: d.uvalidatorSkin.addMessages = r,
                    format: d.uvalidatorSkin.format = s
                }
            }(t);
            return a.skin = e.createSkinFactory(a.events), a.applySkin = e.applySkin, a.skin.createSkin = e.createSkinFactory(a.events), a.skin.addMessage = e.addMessage, a.skin.addMessages = e.addMessages, a.skin.format = e.format, a
        }.apply(a, r)) || (t.exports = i)
    }, function(t, a, e) {
        var r, i, n = function(f) {
            "use strict";
            var n, v, h, s, l, F, c;

            function m(t) {
                return t.is(":checkbox,:radio") ? t.is(":checked") : t.val()
            }

            function p(t) {
                var a;
                return a = t.attr("data-validator-group"), (t[0].form ? f(t[0].form) : t.closest("form")).find('[data-validator-group="' + a + '"]:not(:disabled)')
            }

            function g(e, r, i, n) {
                var o, d, u, s, l, F;

                function c(t) {
                    var a = {
                        isValid: u,
                        isGroup: i,
                        validator: t.name,
                        field: e
                    };
                    F = !0, e.trigger(v.FINISH_FIELD_VALIDATION, e), r(a, e)
                }

                function p(i, n) {
                    return function(t) {
                        var a, e, r;
                        a = t, e = i, r = n, F || (s += 1, u = u && a, (l += 1) < o && u ? r() : c(e))
                    }
                }
                e = f(e), F = !(u = !(l = s = 0)), o = h.len(i), i || (d = m(e)), e.trigger(v.START_FIELD_VALIDATION, e),
                    function t() {
                        for (var a; s < o && u;) a = h.getValidatorByIndex(s, i), e.is(a.selector) ? a.fn.call(n, d, e, p(a, t)) : o <= (l += 1) && c(a), s += 1
                    }()
            }

            function i(t, a) {
                t.isValid ? a.trigger(v.FIELD_VALID, t) : a.trigger(v.FIELD_INVALID, t)
            }

            function r(t) {
                var a, e = !0;
                return "keyup" === t.type && (9 !== (a = t.which) && 16 !== a && 17 !== a && 18 !== a || (e = !1)), e
            }

            function o(e) {
                var r, i, n, t, o, d;

                function u(t, a) {
                    i = i && t.isValid, r.push({
                        field: a,
                        isValid: t.isValid,
                        validator: t.validator,
                        isGroup: !1
                    }), t.isValid ? a.trigger(v.FIELD_VALID, t) : a.trigger(v.FIELD_INVALID, t), r.length >= n.length + d && (e.trigger(v.FINISH_FORM_VALIDATION, e), i ? e.trigger(v.FORM_VALID, {
                        results: r
                    }) : e.trigger(v.FORM_INVALID, {
                        results: r,
                        errors: f.makeArray(f(r).filter(function(t, a) {
                            return !a.isValid
                        }))
                    }))
                }
                if (t = (n = e.find(":input").not(".skip-validation,:disabled,:hidden")).filter("[data-validator-group]"), n = n.not("[data-validator-group],:button,:submit"), o = {}, d = 0, t.each(function() {
                        var t = f(this),
                            a = t.attr("data-validator-group");
                        o[a] || (o[a] = p(t), d += 1)
                    }), r = [], i = !0, e.trigger(v.START_FORM_VALIDATION, e), !n.length && !d) return e.trigger(v.FIELD_VALID, {
                    results: r
                }), void e.trigger(v.FORM_VALID, {
                    results: r
                });
                n.each(function() {
                    g(this, u, !1, e)
                }), f.each(o, function(t, a) {
                    g(a, u, !0, e)
                })
            }

            function t(t) {
                var a = f.extend({}, n, t);
                return this.each(function() {
                    var e, t;
                    t = a, (e = f(e = this)).attr("novalidate", "novalidate"), f.each(t.validationEvents, function(t, a) {
                        a && (e.delegate(":input:not(:button,:submit,[data-validator-group],.skip-validation)", t, function(t) {
                            r(t) && g(t.target, i, !1, e)
                        }), e.delegate(":input[data-validator-group]", t, function(t) {
                            r(t) && g(p(f(t.target)), i, !0, e)
                        }))
                    }), e.submit(function(t) {
                        t.preventDefault(), o(e)
                    })
                })
            }
            n = {
                validationEvents: {
                    focusout: !1,
                    focusin: !1,
                    change: !0,
                    keyup: !0,
                    click: !1,
                    submit: !0
                }
            }, v = {
                FIELD_VALID: "fieldValid",
                FIELD_INVALID: "fieldInvalid",
                FORM_VALID: "formValid",
                FORM_INVALID: "formInvalid",
                FINISH_FORM_VALIDATION: "finishFormValidation",
                START_FORM_VALIDATION: "startFormValidation",
                FINISH_FIELD_VALIDATION: "finishFieldValidation",
                START_FIELD_VALIDATION: "startFieldValidation"
            }, s = [], l = {}, F = [], c = {};
            var a = {
                addMethod: (h = {
                    createValidator: function(t, a, e, r) {
                        return {
                            fn: e,
                            name: a,
                            selector: t,
                            isGroup: r
                        }
                    },
                    getValidatorByIndex: function(t, a) {
                        return a ? F[t] : s[t]
                    },
                    getValidatorIndexByName: function(t, a) {
                        var e = -1,
                            r = a ? c : l;
                        return "number" == typeof r[t] && (e = r[t]), e
                    },
                    getValidatorByName: function(t, a) {
                        var e = h.getValidatorIndexByName(t, a),
                            r = null;
                        return -1 < e && (r = a ? F[e] : s[e]), r
                    },
                    addValidatorMethod: function(t, a, e) {
                        var r, i, n, o = t,
                            d = a,
                            u = e;
                        1 === arguments.length && t instanceof Array && (o = t[0], d = t[1], u = t[2]), i = -1 < (r = h.getValidatorIndexByName(d, !1)) ? r : s.length, n = h.createValidator(o, d, u, !1), l[d] = i, s[i] = n
                    },
                    addValidatorGroupMethod: function(t, a, e) {
                        var r, i, n, o = t,
                            d = a,
                            u = e;
                        1 === arguments.length && t instanceof Array && (o = t[0], d = t[1], u = t[2]), i = -1 < (r = h.getValidatorIndexByName(d, !0)) ? r : F.length, n = h.createValidator(o, d, u, !0), c[d] = i, F[i] = n
                    },
                    len: function(t) {
                        return t ? F.length : s.length
                    }
                }).addValidatorMethod,
                addGroupMethod: h.addValidatorGroupMethod,
                events: v,
                fieldIsValid: function(t, a, e, r) {
                    var i;
                    t = f(t), e = f.extend({}, n, e), (i = t.is("[data-validator-group]")) && (t = p(t)), g(t, a, i, r)
                },
                validateField: function(t, e, a, r) {
                    f.uvalidator.fieldIsValid(t, function(t, a) {
                        return i(t, a), e && e(t, a)
                    }, a, r)
                },
                validateWith: function(t, a, e, r) {
                    var i, n, o, d, u, s, l, F = t.is("[data-validator-group]");
                    i = m(t), n = t, o = a, d = e, u = F, s = r, (l = h.getValidatorByName(o, u)) ? l.fn.call(s, i, n, d) : d(!0)
                },
                validate: function(t) {
                    o(f(t))
                }
            };
            return f.uvalidator = a, (f.fn.uvalidator = t).__methods = a, t
        };
        r = [e(0)], void 0 === (i = function(t) {
            var a = n(t),
                e = a.__methods;
            for (var r in e) e.hasOwnProperty(r) && (a[r] = e[r]);
            return a
        }.apply(a, r)) || (t.exports = i)
    }, function(t, a, e) {
        var r, i;
        r = [e(0), e(1)], void 0 === (i = function(t, a) {
            var e = function(F) {
                "use strict";
                var t = "ustream",
                    a = {
                        validatorEventMap: {
                            START_REMOTE_VALIDATION: "onRemoteValidationStart",
                            FINISH_REMOTE_VALIDATION: "onRemoteValidationFinish"
                        },
                        options: {
                            focusOnFormInvalid: !0,
                            inputInvalidClassName: "input-invalid",
                            inputContainerSelector: ".control-group",
                            dropdownContainerSelector: ".control-select",
                            checkboxContainerSelector: ".page-checkbox, .page-radio",
                            inputValidClassName: "input-valid",
                            errorMessageClassName: "tooltip-error",
                            errorMessagePlaceholderClassName: "error-placeholder",
                            checkboxFocusedClassName: "focused",
                            checkboxSelector: ".control-radio, .control-checkbox",
                            errorIDprefix: "error-"
                        },
                        setForm: function(t, a) {
                            return this.superclass.setForm(t, a), this.form.delegate(':input[type="radio"], :input[type="checkbox"]', "focus", F.proxy(function(t) {
                                F(t.target).closest(this.options.inputContainerSelector).addClass(this.options.checkboxFocusedClassName)
                            }, this)), this.form.delegate(':input[type="radio"], :input[type="checkbox"]', "blur", F.proxy(function(t) {
                                F(t.target).closest(this.options.inputContainerSelector).removeClass(this.options.checkboxFocusedClassName)
                            }, this)), this.form.delegate(':input:not(".liveValidation")', "keyup", F.proxy(function(t) {
                                -1 === F.inArray(t.keyCode, [9, 13, 16]) && this.onFieldValid(t)
                            }, this)), this
                        },
                        setFieldInvalid: function(t, a) {
                            var e = this.options;
                            this.getCorrectField(t).addClass(e.inputInvalidClassName).removeClass(e.inputValidClassName), F(t).attr("aria-invalid", "true")
                        },
                        setFieldValid: function(t, a) {
                            var e = this.options;
                            this.getCorrectField(t).addClass(e.inputValidClassName).removeClass(e.inputInvalidClassName), F(t).attr("aria-invalid", "false")
                        },
                        unsetValidatorState: function(t, a) {
                            var e = this.options;
                            this.getCorrectField(t).removeClass(e.inputValidClassName + " " + e.inputInvalidClassName), this.hideFieldError(t)
                        },
                        getCorrectField: function(t) {
                            var a = t.nodeName,
                                e = F(t);
                            return "SELECT" === a && (e = e.closest(this.options.dropdownContainerSelector)), e
                        },
                        addFieldError: function(t, a) {
                            var e, r, i, n, o, d, u, s = this.getMessage(a),
                                l = this.options;
                            0 < (e = (r = (i = a.field).closest(this.options.inputContainerSelector)).find(">" + this.options.dropdownContainerSelector)).length && (r = e), n = r.find("." + l.errorMessageClassName), o = r.find("." + l.errorMessagePlaceholderClassName), n.length < 1 && (u = l.errorIDprefix + i.attr("id") + "-" + Math.ceil(1e4 * Math.random()), n = F("<span />").addClass(l.errorMessageClassName).attr("id", u), i.attr("aria-describedBy", u), d = "SELECT" === i[0].nodeName ? i.next("span.select") : i.is(this.options.checkboxContainerSelector) || r.find(this.options.checkboxSelector).length ? i.last().next("label") : i, o.length ? o.append(n) : d.after(n)), n.html(s)
                        },
                        showFieldError: function(t, a) {
                            this.addFieldError(t, a)
                        },
                        hideFieldError: function(t, a) {
                            var e = F(t).removeAttr("aria-describedBy").closest(this.options.inputContainerSelector);
                            e.find("." + this.options.inputInvalidClassName).length || e.find("." + this.options.errorMessageClassName).remove()
                        },
                        onFormInvalid: function() {
                            if (this.options.focusOnFormInvalid) {
                                var t = this.options.inputInvalidClassName;
                                this.form.find(":input." + t + "," + this.options.dropdownContainerSelector + "." + t + " > select").first().focus()
                            }
                        }
                    };
                return F.uvalidatorSkin(t, a), {
                    name: t,
                    skin: a
                }
            }(t);
            return a.skin(e.name, e.skin), a
        }.apply(a, r)) || (t.exports = i)
    }, function(t, a, e) {
        var r, i;
        r = [e(0), e(1)], void 0 === (i = function(t, a) {
            var e = function(o) {
                "use strict";
                var t = {
                    setFieldInvalid: function(t, a) {
                        o(t).addClass("invalid").removeClass("valid").attr("aria-invalid", "true").closest(".control-group").addClass("error").removeClass("success")
                    },
                    setFieldValid: function(t, a) {
                        o(t).addClass("valid").removeClass("invalid").attr("aria-invalid", "false").closest(".control-group").addClass("success").removeClass("error")
                    },
                    showFieldError: function(t, a) {
                        var e, r = o(t),
                            i = this.getMessage(a),
                            n = "error-" + r.attr("id") + "-" + Math.ceil(1e4 * Math.random());
                        (e = r.closest(".control-group")).find(".uerror").remove(), o("<label />").attr({
                            for: r.attr("id"),
                            id: n
                        }).addClass("uerror").html(i).appendTo(e), r.attr("aria-describedBy", n)
                    },
                    hideFieldError: function(t, a) {
                        o(t).removeAttr("aria-describedBy").closest(".control-group").find(".uerror").remove()
                    }
                };
                return o.uvalidatorSkin("base", t), {
                    name: "base",
                    skin: t
                }
            }(t);
            return a.skin(e.name, e.skin), a
        }.apply(a, r)) || (t.exports = i)
    }, function(t, a, e) {
        var r, i;
        r = [e(0), e(1)], void 0 === (i = function(t, a) {
            var e = function(t) {
                "use strict";
                var a = [
                    ["required", "The field is required."],
                    ["number", "Type a number, please."],
                    ["userpassword", "Password must contain at least 7 characters including at least 1 capitalized letter AND at least 1 number."],
                    ["passwordverify", "Password must be the same as above."],
                    ["creditcard", "Invalid credit card number."],
                    ["url", "Please type a valid url."],
                    ["uri", "Please type a valid url."],
                    ["email", "Please type a valid email address."],
                    ["min", function(t) {
                        return "The minimum value is " + (t.field.attr("data-validation-min") || t.field.attr("min")) + "."
                    }],
                    ["max", function(t) {
                        return "The maximum value is " + (t.field.attr("data-validation-max") || t.field.attr("max")) + "."
                    }],
                    ["tel", "Invalid telephone number."],
                    ["uniquemail", "Email already in use"],
                    ["freeusername", "Username already taken"],
                    ["cvv", "Invalid cvv number"],
                    ["pattern", "Invalid format."],
                    ["maxfilesize", "Attached file(s) are too large."],
                    ["acceptfiles", "Invalid file(s) selected"]
                ];
                return t.uvalidatorSkin.addMessages(a), a
            }(t);
            return a.skin.addMessages(e), a
        }.apply(a, r)) || (t.exports = i)
    }, function(t, a, e) {
        var r, i;
        r = [e(0), e(2)], void 0 === (i = function(t, a) {
            var e = function(u) {
                "use strict";

                function l(t, a) {
                    for (t = String(t); t.length < a;) t = "0" + t;
                    return t
                }
                var s;
                s = {
                    userpassword: /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.{7,})/,
                    email: /^(?!\.)(?!.*\.{2})[a-z0-9á-ÿ\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF.!#$%&'*+\/=?^_`{|}~-]+@(?!\.)(?:[a-z0-9á-ÿ\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF-]{1,63})(?:\.(?:[a-z0-9á-ÿ\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF-]{1,63}))*\.[a-z0-9á-ÿ\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,63}$/i,
                    url: /(https?|ftp):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?/,
                    uri: /^([a-z0-9+.-]+):(?:\/\/(?:((?:[a-z0-9-._~!$&'()*+,;=:]|%[0-9A-F]{2})*)@)?((?:[a-z0-9-._~!$&'()*+,;=]|%[0-9A-F]{2})*)(?::(\d*))?(\/(?:[a-z0-9-._~!$&'()*+,;=:@/]|%[0-9A-F]{2})*)?|(\/?(?:[a-z0-9-._~!$&'()*+,;=:@]|%[0-9A-F]{2})+(?:[a-z0-9-._~!$&'()*+,;=:@/]|%[0-9A-F]{2})*)?)(?:\?((?:[a-z0-9-._~!$&'()*+,;=:/?@]|%[0-9A-F]{2})*))?(?:#((?:[a-z0-9-._~!$&'()*+,;=:/?@]|%[0-9A-F]{2})*))?$/,
                    domain: /((https?|ftp):\/\/)?(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?/,
                    alpha: /[a-zA-Z]+/,
                    alphaNumeric: /\w+/,
                    color: /#[\da-fA-F]{6}/,
                    tel: /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i
                }, window.console && window.console.log;
                var t = [".required,[required]", "required", function(t, a, e) {
                    e(!!t)
                }];
                u.uvalidator.addMethod(t);
                var a = [".ajax", "ajax", function(t, a, e) {
                    setTimeout(function() {
                        e(+t % 2)
                    }, 500)
                }];

                function F(t, a) {
                    return !t.is("[required],.required") && "" === a
                }
                u.uvalidator.addMethod(a), u.uvalidator.isOptional = F;
                var e = [":radio[required],:radio.required,:checkbox[required],:checkbox.required", "required", function(t, a, e) {
                    e(0 < a.filter(":checked").length)
                }];
                u.uvalidator.addGroupMethod(e);
                var r = [':input[data-validator-type="pattern"]', "pattern", function(t, a, e) {
                    var d = !0;
                    a.each(function(t, a) {
                        var e = u(a),
                            r = e.val(),
                            i = e.attr("data-validator-pattern") || e.attr("pattern"),
                            n = e.attr("data-validator-subtype"),
                            o = i ? new RegExp(i) : s[n];
                        d = d && (F(e, r) || o.test(r))
                    }), e(d)
                }];
                u.uvalidator.addGroupMethod(r);
                var i = [':input[data-validator-type="date"][required],:input[data-validator-type="date"].required', "required-date", function(t, a, e) {
                    var r = !0;
                    a.each(function() {
                        r = r && "" !== u.trim(u(this).val())
                    }), e(r)
                }];
                u.uvalidator.addGroupMethod(i);
                var n = [':input[data-validator-type="date"].cc-expiration', "expiration-date", function(t, a, e) {
                    var r, i, n = a.filter('[data-validator-ccexp="year"]'),
                        o = a.filter('[data-validator-ccexp="month"]'),
                        d = n.val(),
                        u = l(o.val(), 2),
                        s = new Date;
                    r = String(s.getFullYear()), i = l(s.getMonth() + 1, 2), 2 === d.length && (r = r.slice(-2)), e(+(r + i) <= +(d + u))
                }];
                u.uvalidator.addGroupMethod(n);
                var o = [":input.required:not(:radio,:checkbox)", "input-group-required", function(t, a, e) {
                    var r = !0;
                    a.each(function() {
                        r = r && "" !== u.trim(u(this).val())
                    }), e(r)
                }];
                u.uvalidator.addGroupMethod(o);
                var d = ['.number,[type="number"]', "number", function(t, a, e) {
                    e(F(a, t) || !isNaN(+t) && !isNaN(parseInt(t, 10)))
                }];
                u.uvalidator.addMethod(d);
                var c = [".input-uri,.uri", "uri", function(t, a, e) {
                    e(F(a, t) || s.uri.test(t))
                }];
                u.uvalidator.addMethod(c);
                var p = ['.input-url,.url,[type="url"]', "url", function(t, a, e) {
                    e(F(a, t) || s.url.test(t))
                }];
                u.uvalidator.addMethod(p);
                var f = [".domain-with-optional-protocol", "domain", function(t, a, e) {
                    e(F(a, t) || s.domain.test(t))
                }];
                u.uvalidator.addMethod(f);
                var v = ['.input-email,[type="email"]', "email", function(t, a, e) {
                    e(F(a, t) || s.email.test(t))
                }];
                u.uvalidator.addMethod(v);
                var h = [".userpassword", "userpassword", function(t, a, e) {
                    e(s.userpassword.test(t))
                }];
                u.uvalidator.addMethod(h);
                var m = [".password-verify,.input-password-verify", "passwordverify", function(t, a, e) {
                    var r = a.data("validator-refelem");
                    e(F(a, t) || u(r).val() === a.val())
                }];
                u.uvalidator.addMethod(m);
                var g = [".input-min,[min]", "min", function(t, a, e) {
                    var r;
                    t = +t, (r = a.attr("data-validator-min")) || (r = a.attr("min")), r = +r, isNaN(r) || isNaN(t) ? e(!1) : e(F(a, t) || r <= t)
                }];
                u.uvalidator.addMethod(g);
                var D = [".input-max,[max]", "max", function(t, a, e) {
                    var r;
                    t = +t, (r = a.attr("data-validator-max")) || (r = a.attr("max")), r = +r, isNaN(r) || isNaN(t) ? e(!1) : e(F(a, t) || t <= r)
                }];
                u.uvalidator.addMethod(D);
                var I = [".creditcard,.input-creditcard", "creditcard", function(t, a, e) {
                    var r, i, n, o, d;
                    if (/^[0-9 \-]+$/.test(t)) {
                        for (i = r = 0, n = !1, o = (t = t.replace(/\D/g, "")).length - 1; 0 <= o; o -= 1) d = t.charAt(o), i = parseInt(d, 10), n && 9 < (i *= 2) && (i -= 9), r += i, n = !n;
                        e(r % 10 == 0)
                    } else e(!1)
                }];
                u.uvalidator.addMethod(I);
                var A = [".cvv", "cvv", function(t, a, e) {
                    var r, i;
                    i = a.attr("data-validator-ccfield"), e((r = u(i).val()) && r.match(/^3[47]\d{13}$/) ? t.match(/^\d{4}$/) : t.match(/^\d{3}$/))
                }];
                u.uvalidator.addMethod(A);
                var y = ["input[type=color], .input-color", "iscolor", function(t, a, e) {
                    e(s.color.test(t) || "" === t)
                }];
                u.uvalidator.addMethod(y);
                var M = ["input[type=tel], .input-tel", "tel", function(t, a, e) {
                    e(s.tel.test(t))
                }];
                u.uvalidator.addMethod(M);
                var V = [".pattern,.input-pattern,[pattern]", "pattern", function(t, a, e) {
                    var r;
                    e(!!(r = a.attr("data-validator-pattern") || a.attr("pattern")) && new RegExp(r).test(t))
                }];
                u.uvalidator.addMethod(V);
                var x = [".start-with-letter", "startwithletter", function(t, a, e) {
                    var r = !0;
                    /^[a-z]/i.test(t) || (r = !1), e(r)
                }];
                u.uvalidator.addMethod(x);
                var _ = ["[minlength]", "minlength", function(t, a, e) {
                    e(t.length >= a.attr("minlength"))
                }];
                u.uvalidator.addMethod(_);
                var T = ["[maxlength]", "maxlength", function(t, a, e) {
                    e(t.length <= a.attr("maxlength"))
                }];
                u.uvalidator.addMethod(T);
                var C = ["[maxfilesize]", "maxfilesize", function(t, a, e) {
                    if (a[0].files) {
                        for (var r = a[0].files.length, i = 0, n = !0; i < r; i++) n && (n = a[0].files[i].size < parseInt(a.attr("maxfilesize"), 10));
                        e(n)
                    }
                }];
                u.uvalidator.addMethod(C);
                var E = ["[accept]", "acceptfiles", function(t, a, e) {
                    if (a[0].files) {
                        for (var r = a[0].files.length, i = 0, n = !0, o = a.attr("accept") || []; i < r; i++) n && (n = -1 < o.indexOf(a[0].files[i].type));
                        e(n)
                    }
                }];
                return u.uvalidator.addMethod(E), {
                    isOptional: F,
                    required: t,
                    ajax: a,
                    requiredRadioCheckbox: e,
                    patternType: r,
                    dateRequiredType: i,
                    dateExpirationType: n,
                    groupRequired: o,
                    numberType: d,
                    uriType: c,
                    domainType: f,
                    urlType: p,
                    emailType: v,
                    userPassword: h,
                    passwordVerify: m,
                    minType: g,
                    maxType: D,
                    creditcardType: I,
                    ccvType: A,
                    colorType: y,
                    telType: M,
                    regexType: V,
                    startWithLetter: x,
                    minLengthType: _,
                    maxLengthType: T,
                    maxFileSizeType: C,
                    acceptFilesType: E
                }
            }(t);
            return a.isOptional = e.isOptional, a.addMethod(e.required), a.addMethod(e.ajax), a.addMethod(e.numberType), a.addMethod(e.uriType), a.addMethod(e.domainType), a.addMethod(e.urlType), a.addMethod(e.emailType), a.addMethod(e.userPassword), a.addMethod(e.passwordVerify), a.addMethod(e.minType), a.addMethod(e.maxType), a.addMethod(e.creditcardType), a.addMethod(e.ccvType), a.addMethod(e.colorType), a.addMethod(e.telType), a.addMethod(e.regexType), a.addMethod(e.startWithLetter), a.addMethod(e.minLengthType), a.addMethod(e.maxLengthType), a.addMethod(e.maxFileSizeType), a.addMethod(e.acceptFilesType), a.addGroupMethod(e.requiredRadioCheckbox), a.addGroupMethod(e.patternType), a.addGroupMethod(e.dateRequiredType), a.addGroupMethod(e.dateExpirationType), a.addGroupMethod(e.groupRequired), a
        }.apply(a, r)) || (t.exports = i)
    }, function(t, a, e) {
        var r, i;
        r = [e(0), e(2), e(6), e(1), e(5), e(4), e(3)], void 0 === (i = function(t, a, e, r, i, n, o) {
            return a
        }.apply(a, r)) || (t.exports = i)
    }])
});
var addMessages = function(e, t) {
    e.addMessages([
        ["required", t("js.v3.validator_error.default_required")],
        ["number", t("js.v3.validator_error.default_number")],
        ["userpassword", t("js.v3.validator_error.password_strength")],
        ["passwordverify", t("js.v3.validator_error.strings_not_identical")],
        ["creditcard", t("js.v3.validator_error.default_creditcard")],
        ["cvv", t("js.v3.validator_error.default_cvv")],
        ["url", t("js.v3.validator_error.default_url")],
        ["uri", t("js.v3.validator_error.default_url")],
        ["any-url", t("js.v3.validator_error.default_url")],
        ["email", t("js.v3.validator_error.default_email")],
        ["min", function(r) {
            var a = r.field.attr("data-validation-min") || r.field.attr("min");
            return e.format(t("js.v3.validator_error.default_min"), a)
        }],
        ["max", function(r) {
            var a = r.field.attr("data-validation-max") || r.field.attr("max");
            return e.format(t("js.v3.validator_error.default_max"), a)
        }],
        ["required-date", t("js.v3.validator_error.default_date")],
        ["required-date-format", t("js.v3.validator_error.default_date")],
        ["pattern", t("js.v3.validator_error.invalid_format")],
        ["expiration-date", t("js.payment_form.creditcard_invalid_date")],
        ["tel", t("js.v3.validator_error.default_tel")],
        ["color", t("js.v3.validator_error.color")],
        ["startwithletter", t("js.validator_error.start_with_letter")],
        ["minlength", function(r) {
            var a = r.field.attr("minlength");
            return e.format(t("js.v3.validator_error.default_minlength"), a)
        }],
        ["domain", t("js.v3.validator_error.default_url")],
        ["input-group-required", t("js.validator_error.group_required")],
        ["input-group-min-required", function(r) {
            var a = r.field.attr("data-min-required");
            return a && 1 !== a ? t("js.v6.validator_error.min_required", {
                min: a
            }) : t("js.v3.validator_error.one_required")
        }],
        ["tokenmultiselect", t("js.validator_error.tokenmultiselect")],
        ["maxfilesize", t("js.v6.validator_error.file_size_error")],
        ["acceptfiles", t("js.v6.validator_error.file_type_error")]
    ])
};
window.define ? define("statik/validatorMessages", ["uvalidator", "i18n"], function(r, a) {
    addMessages(r.skin, a)
}) : addMessages(uvalidator.skin);
var addRules = function(t) {
    var a;
    t.addGroupMethod(":input.one-required:not(:radio,:checkbox), :input.min-required:not(:radio,:checkbox)", "input-group-min-required", function(t, a, e) {
        var r = +a.eq(0).attr("data-min-required") || 1,
            d = 0;
        a.each(function(t, a) {
            var e = $(a);
            "" !== $.trim(e.val()) && (d += 1)
        }), e(r <= d)
    }), t.addMethod(".js-android__hashkey", "required_", $.proxy(function(t, a, e) {
        var r = a.attr("data-validator-required__platform"),
            d = a.closest("form").find(a.attr("data-validator-platform__selector")).val().toLowerCase() === r.toLowerCase();
        e(!d || d && t)
    }, this)), t.addMethod(".js-tokenmultiselect-input-required", "tokenmultiselect", $.proxy(function(t, a, e) {
        var r = a.closest(".js-tokenmultiselect").find(".js-tokenmultiselect-stack"),
            d = r.find(".js-tokenmultiselect-value"),
            i = r.find(".js-tokenmultiselect-value-empty");
        e(0 < d.length && 0 === i.length)
    }, this)), a = [':input[data-validator-type="date"][data-validator-format]', "required-date-format", function(t, a, e) {
        var r = !0;
        if ($.datepicker) try {
            var d = a.attr("data-validator-format"),
                i = $.datepicker.parseDate(d, a.val());
            r = $.datepicker.formatDate(d, i) === a.val()
        } catch (t) {
            r = !1
        }
        e(r)
    }], t.addMethod(a), t.addGroupMethod(a)
};
window.define ? define("statik/validatorRules", ["uvalidator"], function(t) {
    addRules(t)
}) : addRules(uvalidator);
define("ustream-rpin", [], function() {
    var t = "umte_rpin",
        r = "_rpin.",
        e = r + "0";
    return function() {
        var t = "" + Math.random();
        try {
            return localStorage.setItem(t, t), localStorage.removeItem(t), !0
        } catch (t) {
            return !1
        }
    }() && ((e = localStorage.getItem(t)) || (e = r + ("" + Math.random()).substr(2), localStorage.setItem(t, e))), e
});