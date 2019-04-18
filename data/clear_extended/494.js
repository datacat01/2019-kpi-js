var gapi = window.gapi = window.gapi || {};
gapi._bs = new Date().getTime();
(function() {
    var m = this,
        aa = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ba = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        ca = function(a, b, c) {
            ca = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
            return ca.apply(null, arguments)
        },
        da = function(a,
            b) {
            function c() {}
            c.prototype = b.prototype;
            a.ja = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.A = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g)
            }
        };
    var ea = function() {
        this.V = ""
    };
    ea.prototype.toString = function() {
        return "SafeScript{" + this.V + "}"
    };
    ea.prototype.i = function(a) {
        this.V = a
    };
    (new ea).i("");
    var fa = function() {
        this.X = ""
    };
    fa.prototype.toString = function() {
        return "SafeStyle{" + this.X + "}"
    };
    fa.prototype.i = function(a) {
        this.X = a
    };
    (new fa).i("");
    var ha = function() {
        this.W = ""
    };
    ha.prototype.toString = function() {
        return "SafeStyleSheet{" + this.W + "}"
    };
    ha.prototype.i = function(a) {
        this.W = a
    };
    (new ha).i("");
    var q = function() {
        this.U = ""
    };
    q.prototype.toString = function() {
        return "SafeHtml{" + this.U + "}"
    };
    q.prototype.i = function(a) {
        this.U = a
    };
    (new q).i("<!DOCTYPE html>");
    (new q).i("");
    (new q).i("<br>");
    /*
     gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
    var t = window,
        v = document,
        ia = t.location,
        ja = function() {},
        ka = /\[native code\]/,
        w = function(a, b, c) {
            return a[b] = a[b] || c
        },
        la = function(a) {
            for (var b = 0; b < this.length; b++)
                if (this[b] === a) return b;
            return -1
        },
        ma = function(a) {
            a = a.sort();
            for (var b = [], c = void 0, d = 0; d < a.length; d++) {
                var e = a[d];
                e != c && b.push(e);
                c = e
            }
            return b
        },
        na = /&/g,
        oa = /</g,
        pa = />/g,
        ra = /"/g,
        sa = /'/g,
        ta = function(a) {
            return String(a).replace(na, "&amp;").replace(oa, "&lt;").replace(pa, "&gt;").replace(ra, "&quot;").replace(sa, "&#39;")
        },
        x = function() {
            var a;
            if ((a = Object.create) &&
                ka.test(a)) a = a(null);
            else {
                a = {};
                for (var b in a) a[b] = void 0
            }
            return a
        },
        z = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        ua = function(a) {
            if (ka.test(Object.keys)) return Object.keys(a);
            var b = [],
                c;
            for (c in a) z(a, c) && b.push(c);
            return b
        },
        A = function(a, b) {
            a = a || {};
            for (var c in a) z(a, c) && (b[c] = a[c])
        },
        va = function(a) {
            return function() {
                t.setTimeout(a, 0)
            }
        },
        B = function(a, b) {
            if (!a) throw Error(b || "");
        },
        C = w(t, "gapi", {});
    var D = function(a, b, c) {
            var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)", "g");
            b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)", "g");
            if (a = a && (d.exec(a) || b.exec(a))) try {
                c = decodeURIComponent(a[2])
            } catch (e) {}
            return c
        },
        wa = new RegExp(/^/.source + /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source + /(\/\/[^\/?#]*)?/.source + /([^?#]*)?/.source + /(\?([^#]*))?/.source + /(#((#|[^#])*))?/.source + /$/.source),
        xa = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g,
        ya = new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source + /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source,
            "g"),
        za = /%([a-f]|[0-9a-fA-F][a-f])/g,
        Aa = /^(https?|ftp|file|chrome-extension):$/i,
        F = function(a) {
            a = String(a);
            a = a.replace(xa, function(e) {
                try {
                    return encodeURIComponent(e)
                } catch (f) {
                    return encodeURIComponent(e.replace(/^[^%]+$/g, "\ufffd"))
                }
            }).replace(ya, function(e) {
                return e.replace(/%/g, "%25")
            }).replace(za, function(e) {
                return e.toUpperCase()
            });
            a = a.match(wa) || [];
            var b = x(),
                c = function(e) {
                    return e.replace(/\\/g, "%5C").replace(/\^/g, "%5E").replace(/`/g, "%60").replace(/\{/g, "%7B").replace(/\|/g, "%7C").replace(/\}/g,
                        "%7D")
                },
                d = !!(a[1] || "").match(Aa);
            b.A = c((a[1] || "") + (a[2] || "") + (a[3] || (a[2] && d ? "/" : "")));
            d = function(e) {
                return c(e.replace(/\?/g, "%3F").replace(/#/g, "%23"))
            };
            b.query = a[5] ? [d(a[5])] : [];
            b.g = a[7] ? [d(a[7])] : [];
            return b
        },
        Ba = function(a) {
            return a.A + (0 < a.query.length ? "?" + a.query.join("&") : "") + (0 < a.g.length ? "#" + a.g.join("&") : "")
        },
        Ca = function(a, b) {
            var c = [];
            if (a)
                for (var d in a)
                    if (z(a, d) && null != a[d]) {
                        var e = b ? b(a[d]) : a[d];
                        c.push(encodeURIComponent(d) + "=" + encodeURIComponent(e))
                    } return c
        },
        Da = function(a, b, c, d) {
            a = F(a);
            a.query.push.apply(a.query, Ca(b, d));
            a.g.push.apply(a.g, Ca(c, d));
            return Ba(a)
        },
        Ea = new RegExp(/\/?\??#?/.source + "(" + /[\/?#]/i.source + "|" + /[\uD800-\uDBFF]/i.source + "|" + /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source + "|" + /%[0-9a-f]?/i.source + ")$", "i"),
        Fa = function(a, b) {
            var c = F(b);
            b = c.A;
            c.query.length && (b += "?" + c.query.join(""));
            c.g.length && (b += "#" + c.g.join(""));
            var d = "";
            2E3 < b.length && (c = b, b = b.substr(0, 2E3), b = b.replace(Ea, ""), d = c.substr(b.length));
            var e = a.createElement("div");
            a = a.createElement("a");
            c = F(b);
            b = c.A;
            c.query.length && (b += "?" + c.query.join(""));
            c.g.length && (b += "#" + c.g.join(""));
            a.href = b;
            e.appendChild(a);
            e.innerHTML = e.innerHTML;
            b = String(e.firstChild.href);
            e.parentNode && e.parentNode.removeChild(e);
            c = F(b + d);
            b = c.A;
            c.query.length && (b += "?" + c.query.join(""));
            c.g.length && (b += "#" + c.g.join(""));
            return b
        },
        Ga = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
    var Ha = function(a, b, c, d) {
            if (t[c + "EventListener"]) t[c + "EventListener"](a, b, !1);
            else if (t[d + "tachEvent"]) t[d + "tachEvent"]("on" + a, b)
        },
        Ja = function() {
            var a = v.readyState;
            return "complete" === a || "interactive" === a && -1 == navigator.userAgent.indexOf("MSIE")
        },
        Ma = function(a) {
            var b = Ka;
            if (!Ja()) try {
                b()
            } catch (c) {}
            La(a)
        },
        La = function(a) {
            if (Ja()) a();
            else {
                var b = !1,
                    c = function() {
                        if (!b) return b = !0, a.apply(this, arguments)
                    };
                t.addEventListener ? (t.addEventListener("load", c, !1), t.addEventListener("DOMContentLoaded", c, !1)) : t.attachEvent &&
                    (t.attachEvent("onreadystatechange", function() {
                        Ja() && c.apply(this, arguments)
                    }), t.attachEvent("onload", c))
            }
        },
        Na = function(a) {
            for (; a.firstChild;) a.removeChild(a.firstChild)
        },
        Oa = {
            button: !0,
            div: !0,
            span: !0
        };
    var G;
    G = w(t, "___jsl", x());
    w(G, "I", 0);
    w(G, "hel", 10);
    var Pa = function(a) {
            return G.dpo ? G.h : D(a, "jsh", G.h)
        },
        Qa = function(a) {
            var b = w(G, "sws", []);
            b.push.apply(b, a)
        },
        Ra = function(a) {
            return w(G, "watt", x())[a]
        },
        Sa = function(a) {
            var b = w(G, "PQ", []);
            G.PQ = [];
            var c = b.length;
            if (0 === c) a();
            else
                for (var d = 0, e = function() {
                        ++d === c && a()
                    }, f = 0; f < c; f++) b[f](e)
        },
        Ta = function(a) {
            return w(w(G, "H", x()), a, x())
        };
    var Ua = w(G, "perf", x()),
        Va = w(Ua, "g", x()),
        Wa = w(Ua, "i", x());
    w(Ua, "r", []);
    x();
    x();
    var Xa = function(a, b, c) {
            var d = Ua.r;
            "function" === typeof d ? d(a, b, c) : d.push([a, b, c])
        },
        H = function(a, b, c) {
            Va[a] = !b && Va[a] || c || (new Date).getTime();
            Xa(a)
        },
        Za = function(a, b, c) {
            b && 0 < b.length && (b = Ya(b), c && 0 < c.length && (b += "___" + Ya(c)), 28 < b.length && (b = b.substr(0, 28) + (b.length - 28)), c = b, b = w(Wa, "_p", x()), w(b, c, x())[a] = (new Date).getTime(), Xa(a, "_p", c))
        },
        Ya = function(a) {
            return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/,/g, "_")
        };
    var $a = x(),
        J = [],
        L = function(a) {
            throw Error("Bad hint" + (a ? ": " + a : ""));
        };
    J.push(["jsl", function(a) {
        for (var b in a)
            if (z(a, b)) {
                var c = a[b];
                "object" == typeof c ? G[b] = w(G, b, []).concat(c) : w(G, b, c)
            } if (b = a.u) a = w(G, "us", []), a.push(b), (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1])
    }]);
    var ab = /^(\/[a-zA-Z0-9_\-]+)+$/,
        bb = [/\/amp\//, /\/amp$/, /^\/amp$/],
        cb = /^[a-zA-Z0-9\-_\.,!]+$/,
        db = /^gapi\.loaded_[0-9]+$/,
        eb = /^[a-zA-Z0-9,._-]+$/,
        ib = function(a, b, c, d) {
            var e = a.split(";"),
                f = e.shift(),
                g = $a[f],
                h = null;
            g ? h = g(e, b, c, d) : L("no hint processor for: " + f);
            h || L("failed to generate load url");
            b = h;
            c = b.match(fb);
            (d = b.match(gb)) && 1 === d.length && hb.test(b) && c && 1 === c.length || L("failed sanity: " + a);
            return h
        },
        lb = function(a, b, c, d) {
            a = jb(a);
            db.test(c) || L("invalid_callback");
            b = kb(b);
            d = d && d.length ? kb(d) : null;
            var e =
                function(f) {
                    return encodeURIComponent(f).replace(/%2C/g, ",")
                };
            return [encodeURIComponent(a.pathPrefix).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=", e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.M ? "/am=" + e(a.M) : "", a.Y ? "/rs=" + e(a.Y) : "", a.$ ? "/t=" + e(a.$) : "", "/cb=", e(c)].join("")
        },
        jb = function(a) {
            "/" !== a.charAt(0) && L("relative path");
            for (var b = a.substring(1).split("/"), c = []; b.length;) {
                a = b.shift();
                if (!a.length || 0 == a.indexOf(".")) L("empty/relative directory");
                else if (0 < a.indexOf("=")) {
                    b.unshift(a);
                    break
                }
                c.push(a)
            }
            a = {};
            for (var d = 0, e = b.length; d < e; ++d) {
                var f = b[d].split("="),
                    g = decodeURIComponent(f[0]),
                    h = decodeURIComponent(f[1]);
                2 == f.length && g && h && (a[g] = a[g] || h)
            }
            b = "/" + c.join("/");
            ab.test(b) || L("invalid_prefix");
            c = 0;
            for (d = bb.length; c < d; ++c) bb[c].test(b) && L("invalid_prefix");
            c = mb(a, "k", !0);
            d = mb(a, "am");
            e = mb(a, "rs");
            a = mb(a, "t");
            return {
                pathPrefix: b,
                version: c,
                M: d,
                Y: e,
                $: a
            }
        },
        kb = function(a) {
            for (var b = [], c = 0, d = a.length; c < d; ++c) {
                var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
                eb.test(e) && b.push(e)
            }
            return b.join(",")
        },
        mb = function(a, b, c) {
            a = a[b];
            !a && c && L("missing: " + b);
            if (a) {
                if (cb.test(a)) return a;
                L("invalid: " + b)
            }
            return null
        },
        hb = /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
        gb = /\/cb=/g,
        fb = /\/\//g,
        nb = function() {
            var a = Pa(ia.href);
            if (!a) throw Error("Bad hint");
            return a
        };
    $a.m = function(a, b, c, d) {
        (a = a[0]) || L("missing_hint");
        return "https://apis.google.com" + lb(a, b, c, d)
    };
    var ob = decodeURI("%73cript"),
        pb = /^[-+_0-9\/A-Za-z]+={0,2}$/,
        qb = function(a, b) {
            for (var c = [], d = 0; d < a.length; ++d) {
                var e = a[d];
                e && 0 > la.call(b, e) && c.push(e)
            }
            return c
        },
        rb = function() {
            var a = G.nonce;
            return void 0 !== a ? a && a === String(a) && a.match(pb) ? a : G.nonce = null : v.querySelector ? (a = v.querySelector("script[nonce]")) ? (a = a.nonce || a.getAttribute("nonce") || "", a && a === String(a) && a.match(pb) ? G.nonce = a : G.nonce = null) : null : null
        },
        tb = function(a) {
            if ("loading" != v.readyState) sb(a);
            else {
                var b = rb(),
                    c = "";
                null !== b && (c = ' nonce="' +
                    b + '"');
                v.write("<" + ob + ' src="' + encodeURI(a) + '"' + c + "></" + ob + ">")
            }
        },
        sb = function(a) {
            var b = v.createElement(ob);
            b.setAttribute("src", a);
            a = rb();
            null !== a && b.setAttribute("nonce", a);
            b.async = "true";
            (a = v.getElementsByTagName(ob)[0]) ? a.parentNode.insertBefore(b, a): (v.head || v.body || v.documentElement).appendChild(b)
        },
        ub = function(a, b) {
            var c = b && b._c;
            if (c)
                for (var d = 0; d < J.length; d++) {
                    var e = J[d][0],
                        f = J[d][1];
                    f && z(c, e) && f(c[e], a, b)
                }
        },
        wb = function(a, b, c) {
            vb(function() {
                var d = b === Pa(ia.href) ? w(C, "_", x()) : x();
                d = w(Ta(b),
                    "_", d);
                a(d)
            }, c)
        },
        M = function(a, b) {
            var c = b || {};
            "function" == typeof b && (c = {}, c.callback = b);
            ub(a, c);
            b = a ? a.split(":") : [];
            var d = c.h || nb(),
                e = w(G, "ah", x());
            if (e["::"] && b.length) {
                a = [];
                for (var f = null; f = b.shift();) {
                    var g = f.split(".");
                    g = e[f] || e[g[1] && "ns:" + g[0] || ""] || d;
                    var h = a.length && a[a.length - 1] || null,
                        k = h;
                    h && h.hint == g || (k = {
                        hint: g,
                        P: []
                    }, a.push(k));
                    k.P.push(f)
                }
                var l = a.length;
                if (1 < l) {
                    var n = c.callback;
                    n && (c.callback = function() {
                        0 == --l && n()
                    })
                }
                for (; b = a.shift();) xb(b.P, c, b.hint)
            } else xb(b || [], c, d)
        },
        xb = function(a, b,
            c) {
            a = ma(a) || [];
            var d = b.callback,
                e = b.config,
                f = b.timeout,
                g = b.ontimeout,
                h = b.onerror,
                k = void 0;
            "function" == typeof h && (k = h);
            var l = null,
                n = !1;
            if (f && !g || !f && g) throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
            h = w(Ta(c), "r", []).sort();
            var p = w(Ta(c), "L", []).sort(),
                r = [].concat(h),
                u = function(K, Y) {
                    if (n) return 0;
                    t.clearTimeout(l);
                    p.push.apply(p, y);
                    var Z = ((C || {}).config || {}).update;
                    Z ? Z(e) : e && w(G, "cu", []).push(e);
                    if (Y) {
                        Za("me0", K, r);
                        try {
                            wb(Y, c, k)
                        } finally {
                            Za("me1", K, r)
                        }
                    }
                    return 1
                };
            0 < f && (l = t.setTimeout(function() {
                n = !0;
                g()
            }, f));
            var y = qb(a, p);
            if (y.length) {
                y = qb(a, h);
                var E = w(G, "CP", []),
                    I = E.length;
                E[I] = function(K) {
                    if (!K) return 0;
                    Za("ml1", y, r);
                    var Y = function(qa) {
                            E[I] = null;
                            u(y, K) && Sa(function() {
                                d && d();
                                qa()
                            })
                        },
                        Z = function() {
                            var qa = E[I + 1];
                            qa && qa()
                        };
                    0 < I && E[I - 1] ? E[I] = function() {
                        Y(Z)
                    } : Y(Z)
                };
                if (y.length) {
                    var Ia = "loaded_" + G.I++;
                    C[Ia] = function(K) {
                        E[I](K);
                        C[Ia] = null
                    };
                    a = ib(c, y, "gapi." + Ia, h);
                    h.push.apply(h, y);
                    Za("ml0", y, r);
                    b.sync || t.___gapisync ? tb(a) : sb(a)
                } else E[I](ja)
            } else u(y) && d && d()
        };
    var vb = function(a, b) {
        if (G.hee && 0 < G.hel) try {
            return a()
        } catch (c) {
            b && b(c), G.hel--, M("debug_error", function() {
                try {
                    window.___jsl.hefn(c)
                } catch (d) {
                    throw c;
                }
            })
        } else try {
            return a()
        } catch (c) {
            throw b && b(c), c;
        }
    };
    C.load = function(a, b) {
        return vb(function() {
            return M(a, b)
        })
    };
    var yb = function(a) {
            var b = window.___jsl = window.___jsl || {};
            b[a] = b[a] || [];
            return b[a]
        },
        zb = function(a) {
            var b = window.___jsl = window.___jsl || {};
            b.cfg = !a && b.cfg || {};
            return b.cfg
        },
        Ab = function(a) {
            return "object" === typeof a && /\[native code\]/.test(a.push)
        },
        N = function(a, b, c) {
            if (b && "object" === typeof b)
                for (var d in b) !Object.prototype.hasOwnProperty.call(b, d) || c && "___goc" === d && "undefined" === typeof b[d] || (a[d] && b[d] && "object" === typeof a[d] && "object" === typeof b[d] && !Ab(a[d]) && !Ab(b[d]) ? N(a[d], b[d]) : b[d] && "object" ===
                    typeof b[d] ? (a[d] = Ab(b[d]) ? [] : {}, N(a[d], b[d])) : a[d] = b[d])
        },
        Bb = function(a) {
            if (a && !/^\s+$/.test(a)) {
                for (; 0 == a.charCodeAt(a.length - 1);) a = a.substring(0, a.length - 1);
                try {
                    var b = window.JSON.parse(a)
                } catch (c) {}
                if ("object" === typeof b) return b;
                try {
                    b = (new Function("return (" + a + "\n)"))()
                } catch (c) {}
                if ("object" === typeof b) return b;
                try {
                    b = (new Function("return ({" + a + "\n})"))()
                } catch (c) {}
                return "object" === typeof b ? b : {}
            }
        },
        Cb = function(a, b) {
            var c = {
                ___goc: void 0
            };
            a.length && a[a.length - 1] && Object.hasOwnProperty.call(a[a.length -
                1], "___goc") && "undefined" === typeof a[a.length - 1].___goc && (c = a.pop());
            N(c, b);
            a.push(c)
        },
        Db = function(a) {
            zb(!0);
            var b = window.___gcfg,
                c = yb("cu"),
                d = window.___gu;
            b && b !== d && (Cb(c, b), window.___gu = b);
            b = yb("cu");
            var e = document.scripts || document.getElementsByTagName("script") || [];
            d = [];
            var f = [];
            f.push.apply(f, yb("us"));
            for (var g = 0; g < e.length; ++g)
                for (var h = e[g], k = 0; k < f.length; ++k) h.src && 0 == h.src.indexOf(f[k]) && d.push(h);
            0 == d.length && 0 < e.length && e[e.length - 1].src && d.push(e[e.length - 1]);
            for (e = 0; e < d.length; ++e) d[e].getAttribute("gapi_processed") ||
                (d[e].setAttribute("gapi_processed", !0), (f = d[e]) ? (g = f.nodeType, f = 3 == g || 4 == g ? f.nodeValue : f.textContent || f.innerText || f.innerHTML || "") : f = void 0, (f = Bb(f)) && b.push(f));
            a && Cb(c, a);
            d = yb("cd");
            a = 0;
            for (b = d.length; a < b; ++a) N(zb(), d[a], !0);
            d = yb("ci");
            a = 0;
            for (b = d.length; a < b; ++a) N(zb(), d[a], !0);
            a = 0;
            for (b = c.length; a < b; ++a) N(zb(), c[a], !0)
        },
        O = function(a) {
            var b = zb();
            if (!a) return b;
            a = a.split("/");
            for (var c = 0, d = a.length; b && "object" === typeof b && c < d; ++c) b = b[a[c]];
            return c === a.length && void 0 !== b ? b : void 0
        },
        Eb = function(a,
            b) {
            var c;
            if ("string" === typeof a) {
                var d = c = {};
                a = a.split("/");
                for (var e = 0, f = a.length; e < f - 1; ++e) {
                    var g = {};
                    d = d[a[e]] = g
                }
                d[a[e]] = b
            } else c = a;
            Db(c)
        };
    var Fb = function() {
        var a = window.__GOOGLEAPIS;
        a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis), w(G, "ci", []).push(a), window.__GOOGLEAPIS = void 0)
    };
    var Gb = {
            callback: 1,
            clientid: 1,
            cookiepolicy: 1,
            openidrealm: -1,
            includegrantedscopes: -1,
            requestvisibleactions: 1,
            scope: 1
        },
        Hb = !1,
        Ib = x(),
        Jb = function() {
            if (!Hb) {
                for (var a = document.getElementsByTagName("meta"), b = 0; b < a.length; ++b) {
                    var c = a[b].name.toLowerCase();
                    if (0 == c.lastIndexOf("google-signin-", 0)) {
                        c = c.substring(14);
                        var d = a[b].content;
                        Gb[c] && d && (Ib[c] = d)
                    }
                }
                if (window.self !== window.top) {
                    a = document.location.toString();
                    for (var e in Gb) 0 < Gb[e] && (b = D(a, e, "")) && (Ib[e] = b)
                }
                Hb = !0
            }
            e = x();
            A(Ib, e);
            return e
        },
        Kb = function(a) {
            return !!(a.clientid &&
                a.scope && a.callback)
        };
    var Lb = window.console,
        Mb = function(a) {
            Lb && Lb.log && Lb.log(a)
        };
    var Nb = function() {
            return !!G.oa
        },
        Ob = function() {};
    var P = w(G, "rw", x()),
        Pb = function(a) {
            for (var b in P) a(P[b])
        },
        Qb = function(a, b) {
            (a = P[a]) && a.state < b && (a.state = b)
        };
    var Rb;
    var Sb = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//,
        Tb = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//,
        Ub = function(a) {
            var b = O("googleapis.config/sessionIndex");
            "string" === typeof b && 254 < b.length && (b = null);
            null == b && (b = window.__X_GOOG_AUTHUSER);
            "string" === typeof b && 254 < b.length && (b = null);
            if (null == b) {
                var c = window.google;
                c && (b = c.authuser)
            }
            "string" === typeof b && 254 < b.length && (b = null);
            null == b && (a = a || window.location.href, b = D(a, "authuser") ||
                null, null == b && (b = (b = a.match(Sb)) ? b[1] : null));
            if (null == b) return null;
            b = String(b);
            254 < b.length && (b = null);
            return b
        },
        Vb = function(a) {
            var b = O("googleapis.config/sessionDelegate");
            "string" === typeof b && 21 < b.length && (b = null);
            null == b && (b = (a = (a || window.location.href).match(Tb)) ? a[1] : null);
            if (null == b) return null;
            b = String(b);
            21 < b.length && (b = null);
            return b
        };
    var Wb, Q, R = void 0,
        S = function(a) {
            try {
                return m.JSON.parse.call(m.JSON, a)
            } catch (b) {
                return !1
            }
        },
        T = function(a) {
            return Object.prototype.toString.call(a)
        },
        Xb = T(0),
        Yb = T(new Date(0)),
        Zb = T(!0),
        $b = T(""),
        ac = T({}),
        bc = T([]),
        U = function(a, b) {
            if (b)
                for (var c = 0, d = b.length; c < d; ++c)
                    if (a === b[c]) throw new TypeError("Converting circular structure to JSON");
            d = typeof a;
            if ("undefined" !== d) {
                c = Array.prototype.slice.call(b || [], 0);
                c[c.length] = a;
                b = [];
                var e = T(a);
                if (null != a && "function" === typeof a.toJSON && (Object.prototype.hasOwnProperty.call(a,
                        "toJSON") || (e !== bc || a.constructor !== Array && a.constructor !== Object) && (e !== ac || a.constructor !== Array && a.constructor !== Object) && e !== $b && e !== Xb && e !== Zb && e !== Yb)) return U(a.toJSON.call(a), c);
                if (null == a) b[b.length] = "null";
                else if (e === Xb) a = Number(a), isNaN(a) || isNaN(a - a) ? a = "null" : -0 === a && 0 > 1 / a && (a = "-0"), b[b.length] = String(a);
                else if (e === Zb) b[b.length] = String(!!Number(a));
                else {
                    if (e === Yb) return U(a.toISOString.call(a), c);
                    if (e === bc && T(a.length) === Xb) {
                        b[b.length] = "[";
                        var f = 0;
                        for (d = Number(a.length) >> 0; f < d; ++f) f &&
                            (b[b.length] = ","), b[b.length] = U(a[f], c) || "null";
                        b[b.length] = "]"
                    } else if (e == $b && T(a.length) === Xb) {
                        b[b.length] = '"';
                        f = 0;
                        for (c = Number(a.length) >> 0; f < c; ++f) d = String.prototype.charAt.call(a, f), e = String.prototype.charCodeAt.call(a, f), b[b.length] = "\b" === d ? "\\b" : "\f" === d ? "\\f" : "\n" === d ? "\\n" : "\r" === d ? "\\r" : "\t" === d ? "\\t" : "\\" === d || '"' === d ? "\\" + d : 31 >= e ? "\\u" + (e + 65536).toString(16).substr(1) : 32 <= e && 65535 >= e ? d : "\ufffd";
                        b[b.length] = '"'
                    } else if ("object" === d) {
                        b[b.length] = "{";
                        d = 0;
                        for (f in a) Object.prototype.hasOwnProperty.call(a,
                            f) && (e = U(a[f], c), void 0 !== e && (d++ && (b[b.length] = ","), b[b.length] = U(f), b[b.length] = ":", b[b.length] = e));
                        b[b.length] = "}"
                    } else return
                }
                return b.join("")
            }
        },
        cc = /[\0-\x07\x0b\x0e-\x1f]/,
        dc = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/,
        ec = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/,
        fc = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/,
        gc = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g,
        hc = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g,
        ic = /[ \t\n\r]+/g,
        jc = /[^"]:/,
        kc = /""/g,
        lc = /true|false|null/g,
        mc = /00/,
        nc = /[\{]([^0\}]|0[^:])/,
        oc = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/,
        pc = /[^\[,:][\[\{]/,
        qc = /^(\{|\}|\[|\]|,|:|0)+/,
        rc = /\u2028/g,
        sc = /\u2029/g,
        tc = function(a) {
            a = String(a);
            if (cc.test(a) || dc.test(a) || ec.test(a) || fc.test(a)) return !1;
            var b = a.replace(gc, '""');
            b = b.replace(hc, "0");
            b = b.replace(ic, "");
            if (jc.test(b)) return !1;
            b = b.replace(kc, "0");
            b = b.replace(lc, "0");
            if (mc.test(b) || nc.test(b) || oc.test(b) || pc.test(b) || !b || (b = b.replace(qc, ""))) return !1;
            a = a.replace(rc, "\\u2028").replace(sc,
                "\\u2029");
            b = void 0;
            try {
                b = R ? [S(a)] : eval("(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" + a + "\n)")
            } catch (c) {
                return !1
            }
            return b && 1 === b.length ? b[0] : !1
        },
        uc = function() {
            var a = ((m.document || {}).scripts || []).length;
            if ((void 0 === Wb || void 0 === R || Q !== a) && -1 !== Q) {
                Wb = R = !1;
                Q = -1;
                try {
                    try {
                        R = !!m.JSON && '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' === m.JSON.stringify.call(m.JSON, {
                            a: [3, !0, new Date(0)],
                            c: function() {}
                        }) && !0 === S("true") && 3 === S('[{"a":3}]')[0].a
                    } catch (b) {}
                    Wb = R && !S("[00]") &&
                        !S('"\u0007"') && !S('"\\0"') && !S('"\\v"')
                } finally {
                    Q = a
                }
            }
        },
        vc = function(a) {
            if (-1 === Q) return !1;
            uc();
            return (Wb ? S : tc)(a)
        },
        wc = function(a) {
            if (-1 !== Q) return uc(), R ? m.JSON.stringify.call(m.JSON, a) : U(a)
        },
        xc = !Date.prototype.toISOString || "function" !== typeof Date.prototype.toISOString || "1970-01-01T00:00:00.000Z" !== (new Date(0)).toISOString(),
        yc = function() {
            var a = Date.prototype.getUTCFullYear.call(this);
            return [0 > a ? "-" + String(1E6 - a).substr(1) : 9999 >= a ? String(1E4 + a).substr(1) : "+" + String(1E6 + a).substr(1), "-", String(101 +
                Date.prototype.getUTCMonth.call(this)).substr(1), "-", String(100 + Date.prototype.getUTCDate.call(this)).substr(1), "T", String(100 + Date.prototype.getUTCHours.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1), ".", String(1E3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1), "Z"].join("")
        };
    Date.prototype.toISOString = xc ? yc : Date.prototype.toISOString;
    var zc = function() {
        this.l = -1
    };
    var Ac = function() {
        this.l = 64;
        this.b = [];
        this.G = [];
        this.aa = [];
        this.C = [];
        this.C[0] = 128;
        for (var a = 1; a < this.l; ++a) this.C[a] = 0;
        this.D = this.v = 0;
        this.reset()
    };
    da(Ac, zc);
    Ac.prototype.reset = function() {
        this.b[0] = 1732584193;
        this.b[1] = 4023233417;
        this.b[2] = 2562383102;
        this.b[3] = 271733878;
        this.b[4] = 3285377520;
        this.D = this.v = 0
    };
    var Bc = function(a, b, c) {
        c || (c = 0);
        var d = a.aa;
        if ("string" == typeof b)
            for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
        else
            for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.b[0];
        c = a.b[1];
        var g = a.b[2],
            h = a.b[3],
            k = a.b[4];
        for (e = 0; 80 > e; e++) {
            if (40 > e)
                if (20 > e) {
                    f = h ^ c & (g ^ h);
                    var l = 1518500249
                } else f = c ^ g ^ h, l = 1859775393;
            else 60 > e ? (f = c & g | h & (c | g), l = 2400959708) :
                (f = c ^ g ^ h, l = 3395469782);
            f = (b << 5 | b >>> 27) + f + k + l + d[e] & 4294967295;
            k = h;
            h = g;
            g = (c << 30 | c >>> 2) & 4294967295;
            c = b;
            b = f
        }
        a.b[0] = a.b[0] + b & 4294967295;
        a.b[1] = a.b[1] + c & 4294967295;
        a.b[2] = a.b[2] + g & 4294967295;
        a.b[3] = a.b[3] + h & 4294967295;
        a.b[4] = a.b[4] + k & 4294967295
    };
    Ac.prototype.update = function(a, b) {
        if (null != a) {
            void 0 === b && (b = a.length);
            for (var c = b - this.l, d = 0, e = this.G, f = this.v; d < b;) {
                if (0 == f)
                    for (; d <= c;) Bc(this, a, d), d += this.l;
                if ("string" == typeof a)
                    for (; d < b;) {
                        if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.l) {
                            Bc(this, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; d < b;)
                            if (e[f] = a[d], ++f, ++d, f == this.l) {
                                Bc(this, e);
                                f = 0;
                                break
                            }
            }
            this.v = f;
            this.D += b
        }
    };
    Ac.prototype.digest = function() {
        var a = [],
            b = 8 * this.D;
        56 > this.v ? this.update(this.C, 56 - this.v) : this.update(this.C, this.l - (this.v - 56));
        for (var c = this.l - 1; 56 <= c; c--) this.G[c] = b & 255, b /= 256;
        Bc(this, this.G);
        for (c = b = 0; 5 > c; c++)
            for (var d = 24; 0 <= d; d -= 8) a[b] = this.b[c] >> d & 255, ++b;
        return a
    };
    var Cc = function() {
        this.K = new Ac
    };
    Cc.prototype.reset = function() {
        this.K.reset()
    };
    var Dc = t.crypto,
        Ec = !1,
        Fc = 0,
        Gc = 0,
        Hc = 1,
        Ic = 0,
        Jc = "",
        Kc = function(a) {
            a = a || t.event;
            var b = a.screenX + a.clientX << 16;
            b += a.screenY + a.clientY;
            b *= (new Date).getTime() % 1E6;
            Hc = Hc * b % Ic;
            0 < Fc && ++Gc == Fc && Ha("mousemove", Kc, "remove", "de")
        },
        Lc = function(a) {
            var b = new Cc;
            a = unescape(encodeURIComponent(a));
            for (var c = [], d = 0, e = a.length; d < e; ++d) c.push(a.charCodeAt(d));
            b.K.update(c);
            b = b.K.digest();
            a = "";
            for (c = 0; c < b.length; c++) a += "0123456789ABCDEF".charAt(Math.floor(b[c] / 16)) + "0123456789ABCDEF".charAt(b[c] % 16);
            return a
        };
    Ec = !!Dc && "function" == typeof Dc.getRandomValues;
    Ec || (Ic = 1E6 * (screen.width * screen.width + screen.height), Jc = Lc(v.cookie + "|" + v.location + "|" + (new Date).getTime() + "|" + Math.random()), Fc = O("random/maxObserveMousemove") || 0, 0 != Fc && Ha("mousemove", Kc, "add", "at"));
    var Mc = function() {
            var a = Hc;
            a += parseInt(Jc.substr(0, 20), 16);
            Jc = Lc(Jc);
            return a / (Ic + Math.pow(16, 20))
        },
        Nc = function() {
            var a = new t.Uint32Array(1);
            Dc.getRandomValues(a);
            return Number("0." + a[0])
        };
    var Oc = function() {
            var a = G.onl;
            if (!a) {
                a = x();
                G.onl = a;
                var b = x();
                a.e = function(c) {
                    var d = b[c];
                    d && (delete b[c], d())
                };
                a.a = function(c, d) {
                    b[c] = d
                };
                a.r = function(c) {
                    delete b[c]
                }
            }
            return a
        },
        Pc = function(a, b) {
            b = b.onload;
            return "function" === typeof b ? (Oc().a(a, b), b) : null
        },
        Qc = function(a) {
            B(/^\w+$/.test(a), "Unsupported id - " + a);
            Oc();
            return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
        },
        Rc = function(a) {
            Oc().r(a)
        };
    var Sc = {
            allowtransparency: "true",
            frameborder: "0",
            hspace: "0",
            marginheight: "0",
            marginwidth: "0",
            scrolling: "no",
            style: "",
            tabindex: "0",
            vspace: "0",
            width: "100%"
        },
        Tc = {
            allowtransparency: !0,
            onload: !0
        },
        Uc = 0,
        Vc = function(a) {
            B(!a || Ga.test(a), "Illegal url for new iframe - " + a)
        },
        Wc = function(a, b, c, d, e) {
            Vc(c.src);
            var f, g = Pc(d, c),
                h = g ? Qc(d) : "";
            try {
                document.all && (f = a.createElement('<iframe frameborder="' + ta(String(c.frameborder)) + '" scrolling="' + ta(String(c.scrolling)) + '" ' + h + ' name="' + ta(String(c.name)) + '"/>'))
            } catch (l) {} finally {
                f ||
                    (f = a.createElement("iframe"), g && (f.onload = function() {
                        f.onload = null;
                        g.call(this)
                    }, Rc(d)))
            }
            f.setAttribute("ng-non-bindable", "");
            for (var k in c) a = c[k], "style" === k && "object" === typeof a ? A(a, f.style) : Tc[k] || f.setAttribute(k, String(a));
            (k = e && e.beforeNode || null) || e && e.dontclear || Na(b);
            b.insertBefore(f, k);
            f = k ? k.previousSibling : b.lastChild;
            c.allowtransparency && (f.allowTransparency = !0);
            return f
        };
    var Xc = /^:[\w]+$/,
        Yc = /:([a-zA-Z_]+):/g,
        Zc = function() {
            var a = Ub() || "0",
                b = Vb();
            var c = Ub(void 0) || a;
            var d = Vb(void 0),
                e = "";
            c && (e += "u/" + encodeURIComponent(String(c)) + "/");
            d && (e += "b/" + encodeURIComponent(String(d)) + "/");
            c = e || null;
            (e = (d = !1 === O("isLoggedIn")) ? "_/im/" : "") && (c = "");
            var f = O("iframes/:socialhost:"),
                g = O("iframes/:im_socialhost:");
            return Rb = {
                socialhost: f,
                ctx_socialhost: d ? g : f,
                session_index: a,
                session_delegate: b,
                session_prefix: c,
                im_prefix: e
            }
        },
        $c = function(a, b) {
            return Zc()[b] || ""
        },
        ad = function(a) {
            return function(b,
                c) {
                return a ? Zc()[c] || a[c] || "" : Zc()[c] || ""
            }
        };
    var bd = function(a) {
            var b;
            a.match(/^https?%3A/i) && (b = decodeURIComponent(a));
            return Fa(document, b ? b : a)
        },
        cd = function(a) {
            a = a || "canonical";
            for (var b = document.getElementsByTagName("link"), c = 0, d = b.length; c < d; c++) {
                var e = b[c],
                    f = e.getAttribute("rel");
                if (f && f.toLowerCase() == a && (e = e.getAttribute("href")) && (e = bd(e)) && null != e.match(/^https?:\/\/[\w\-_\.]+/i)) return e
            }
            return window.location.href
        };
    var dd = {
            se: "0"
        },
        ed = {
            post: !0
        },
        fd = {
            style: "position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"
        },
        gd = "onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "),
        hd = w(G, "WI", x()),
        id = function(a, b, c) {
            var d;
            var e = {};
            var f = d = a;
            "plus" == a && b.action && (d = a + "_" + b.action, f = a + "/" + b.action);
            (d = O("iframes/" + d + "/url")) || (d = ":im_socialhost:/:session_prefix::im_prefix:_/widget/render/" + f + "?usegapi=1");
            for (var g in dd) e[g] = g + "/" + (b[g] || dd[g]) + "/";
            e = Fa(v, d.replace(Yc,
                ad(e)));
            g = "iframes/" + a + "/params/";
            f = {};
            A(b, f);
            (d = O("lang") || O("gwidget/lang")) && (f.hl = d);
            ed[a] || (f.origin = window.location.origin || window.location.protocol + "//" + window.location.host);
            f.exp = O(g + "exp");
            if (g = O(g + "location"))
                for (d = 0; d < g.length; d++) {
                    var h = g[d];
                    f[h] = t.location[h]
                }
            switch (a) {
                case "plus":
                case "follow":
                    g = f.href;
                    d = b.action ? void 0 : "publisher";
                    g = (g = "string" == typeof g ? g : void 0) ? bd(g) : cd(d);
                    f.url = g;
                    delete f.href;
                    break;
                case "plusone":
                    g = (g = b.href) ? bd(g) : cd();
                    f.url = g;
                    g = b.db;
                    d = O();
                    null == g && d && (g = d.db,
                        null == g && (g = d.gwidget && d.gwidget.db));
                    f.db = g || void 0;
                    g = b.ecp;
                    d = O();
                    null == g && d && (g = d.ecp, null == g && (g = d.gwidget && d.gwidget.ecp));
                    f.ecp = g || void 0;
                    delete f.href;
                    break;
                case "signin":
                    f.url = cd()
            }
            G.ILI && (f.iloader = "1");
            delete f["data-onload"];
            delete f.rd;
            for (var k in dd) f[k] && delete f[k];
            f.gsrc = O("iframes/:source:");
            k = O("inline/css");
            "undefined" !== typeof k && 0 < c && k >= c && (f.ic = "1");
            k = /^#|^fr-/;
            c = {};
            for (var l in f) z(f, l) && k.test(l) && (c[l.replace(k, "")] = f[l], delete f[l]);
            l = "q" == O("iframes/" + a + "/params/si") ? f :
                c;
            k = Jb();
            for (var n in k) !z(k, n) || z(f, n) || z(c, n) || (l[n] = k[n]);
            n = [].concat(gd);
            (l = O("iframes/" + a + "/methods")) && "object" === typeof l && ka.test(l.push) && (n = n.concat(l));
            for (var p in b) z(b, p) && /^on/.test(p) && ("plus" != a || "onconnect" != p) && (n.push(p), delete f[p]);
            delete f.callback;
            c._methods = n.join(",");
            return Da(e, f, c)
        },
        jd = ["style", "data-gapiscan"],
        ld = function(a) {
            for (var b = x(), c = 0 != a.nodeName.toLowerCase().indexOf("g:"), d = 0, e = a.attributes.length; d < e; d++) {
                var f = a.attributes[d],
                    g = f.name,
                    h = f.value;
                0 <= la.call(jd,
                    g) || c && 0 != g.indexOf("data-") || "null" === h || "specified" in f && !f.specified || (c && (g = g.substr(5)), b[g.toLowerCase()] = h)
            }
            a = a.style;
            (c = kd(a && a.height)) && (b.height = String(c));
            (a = kd(a && a.width)) && (b.width = String(a));
            return b
        },
        kd = function(a) {
            var b = void 0;
            "number" === typeof a ? b = a : "string" === typeof a && (b = parseInt(a, 10));
            return b
        },
        nd = function() {
            var a = G.drw;
            Pb(function(b) {
                if (a !== b.id && 4 != b.state && "share" != b.type) {
                    var c = b.id,
                        d = b.type,
                        e = b.url;
                    b = b.userParams;
                    var f = v.getElementById(c);
                    if (f) {
                        var g = id(d, b, 0);
                        g ? (f = f.parentNode,
                            e.replace(/#.*/, "").replace(/(\?|&)ic=1/, "") !== g.replace(/#.*/, "").replace(/(\?|&)ic=1/, "") && (b.dontclear = !0, b.rd = !0, b.ri = !0, b.type = d, md(f, b), (d = P[f.lastChild.id]) && (d.oid = c), Qb(c, 4))) : delete P[c]
                    } else delete P[c]
                }
            })
        };
    var od, pd, V, qd, rd, sd = /(?:^|\s)g-((\S)*)(?:$|\s)/,
        td = {
            plusone: !0,
            autocomplete: !0,
            profile: !0,
            signin: !0,
            signin2: !0
        };
    od = w(G, "SW", x());
    pd = w(G, "SA", x());
    V = w(G, "SM", x());
    qd = w(G, "FW", []);
    rd = null;
    var vd = function(a, b) {
            ud(void 0, !1, a, b)
        },
        ud = function(a, b, c, d) {
            H("ps0", !0);
            c = ("string" === typeof c ? document.getElementById(c) : c) || v;
            var e = v.documentMode;
            if (c.querySelectorAll && (!e || 8 < e)) {
                e = d ? [d] : ua(od).concat(ua(pd)).concat(ua(V));
                for (var f = [], g = 0; g < e.length; g++) {
                    var h = e[g];
                    f.push(".g-" + h, "g\\:" + h)
                }
                e = c.querySelectorAll(f.join(","))
            } else e = c.getElementsByTagName("*");
            c = x();
            for (f = 0; f < e.length; f++) {
                g = e[f];
                var k = g;
                h = d;
                var l = k.nodeName.toLowerCase(),
                    n = void 0;
                if (k.getAttribute("data-gapiscan")) h = null;
                else {
                    var p =
                        l.indexOf("g:");
                    0 == p ? n = l.substr(2) : (p = (p = String(k.className || k.getAttribute("class"))) && sd.exec(p)) && (n = p[1]);
                    h = !n || !(od[n] || pd[n] || V[n]) || h && n !== h ? null : n
                }
                h && (td[h] || 0 == g.nodeName.toLowerCase().indexOf("g:") || 0 != ua(ld(g)).length) && (g.setAttribute("data-gapiscan", !0), w(c, h, []).push(g))
            }
            if (b)
                for (var r in c)
                    for (b = c[r], d = 0; d < b.length; d++) b[d].setAttribute("data-onload", !0);
            for (var u in c) qd.push(u);
            H("ps1", !0);
            if ((r = qd.join(":")) || a) try {
                C.load(r, a)
            } catch (E) {
                Mb(E);
                return
            }
            if (wd(rd || {}))
                for (var y in c) {
                    a =
                        c[y];
                    u = 0;
                    for (b = a.length; u < b; u++) a[u].removeAttribute("data-gapiscan");
                    xd(y)
                } else {
                    d = [];
                    for (y in c)
                        for (a = c[y], u = 0, b = a.length; u < b; u++) e = a[u], yd(y, e, ld(e), d, b);
                    zd(r, d)
                }
        },
        Ad = function(a) {
            var b = w(C, a, {});
            b.go || (b.go = function(c) {
                return vd(c, a)
            }, b.render = function(c, d) {
                d = d || {};
                d.type = a;
                return md(c, d)
            })
        },
        Bd = function(a) {
            od[a] = !0
        },
        Cd = function(a) {
            pd[a] = !0
        },
        Dd = function(a) {
            V[a] = !0
        };
    var xd = function(a, b) {
            var c = Ra(a);
            b && c ? (c(b), (c = b.iframeNode) && c.setAttribute("data-gapiattached", !0)) : C.load(a, function() {
                var d = Ra(a),
                    e = b && b.iframeNode,
                    f = b && b.userParams;
                e && d ? (d(b), e.setAttribute("data-gapiattached", !0)) : (d = C[a].go, "signin2" == a ? d(e, f) : d(e && e.parentNode, f))
            })
        },
        wd = function() {
            return !1
        },
        zd = function() {},
        yd = function(a, b, c, d, e, f, g) {
            switch (Ed(b, a, f)) {
                case 0:
                    a = V[a] ? a + "_annotation" : a;
                    d = {};
                    d.iframeNode = b;
                    d.userParams = c;
                    xd(a, d);
                    break;
                case 1:
                    if (b.parentNode) {
                        for (var h in c) {
                            if (f = z(c, h)) f = c[h],
                                f = !!f && "object" === typeof f && (!f.toString || f.toString === Object.prototype.toString || f.toString === Array.prototype.toString);
                            if (f) try {
                                c[h] = wc(c[h])
                            } catch (y) {
                                delete c[h]
                            }
                        }
                        f = !0;
                        c.dontclear && (f = !1);
                        delete c.dontclear;
                        Ob();
                        h = id(a, c, e);
                        e = g || {};
                        e.allowPost = 1;
                        e.attributes = fd;
                        e.dontclear = !f;
                        g = {};
                        g.userParams = c;
                        g.url = h;
                        g.type = a;
                        if (c.rd) var k = b;
                        else k = document.createElement("div"), b.setAttribute("data-gapistub", !0), k.style.cssText = "position:absolute;width:450px;left:-10000px;", b.parentNode.insertBefore(k, b);
                        g.siteElement =
                            k;
                        k.id || (b = k, w(hd, a, 0), f = "___" + a + "_" + hd[a]++, b.id = f);
                        b = x();
                        b[">type"] = a;
                        A(c, b);
                        f = h;
                        c = k;
                        h = e || {};
                        b = h.attributes || {};
                        B(!(h.allowPost || h.forcePost) || !b.onload, "onload is not supported by post iframe (allowPost or forcePost)");
                        e = b = f;
                        Xc.test(b) && (e = O("iframes/" + e.substring(1) + "/url"), B(!!e, "Unknown iframe url config for - " + b));
                        f = Fa(v, e.replace(Yc, $c));
                        b = c.ownerDocument || v;
                        k = 0;
                        do e = h.id || ["I", Uc++, "_", (new Date).getTime()].join(""); while (b.getElementById(e) && 5 > ++k);
                        B(5 > k, "Error creating iframe id");
                        k = {};
                        var l = {};
                        b.documentMode && 9 > b.documentMode && (k.hostiemode = b.documentMode);
                        A(h.queryParams || {}, k);
                        A(h.fragmentParams || {}, l);
                        var n = h.pfname;
                        var p = x();
                        O("iframes/dropLegacyIdParam") || (p.id = e);
                        p._gfid = e;
                        p.parent = b.location.protocol + "//" + b.location.host;
                        var r = D(b.location.href, "parent");
                        n = n || "";
                        !n && r && (r = D(b.location.href, "_gfid", "") || D(b.location.href, "id", ""), n = D(b.location.href, "pfname", ""), n = r ? n + "/" + r : "");
                        n || (r = vc(D(b.location.href, "jcp", ""))) && "object" == typeof r && (n = (n = r.id) ? r.pfname + "/" + n : "");
                        p.pfname =
                            n;
                        h.connectWithJsonParam && (r = {}, r.jcp = wc(p), p = r);
                        r = D(f, "rpctoken") || k.rpctoken || l.rpctoken;
                        r || (r = h.rpctoken || String(Math.round(1E8 * (Ec ? Nc() : Mc()))), p.rpctoken = r);
                        h.rpctoken = r;
                        A(p, h.connectWithQueryParams ? k : l);
                        r = b.location.href;
                        p = x();
                        (n = D(r, "_bsh", G.bsh)) && (p._bsh = n);
                        (r = Pa(r)) && (p.jsh = r);
                        h.hintInFragment ? A(p, l) : A(p, k);
                        f = Da(f, k, l, h.paramsSerializer);
                        l = x();
                        A(Sc, l);
                        A(h.attributes, l);
                        l.name = l.id = e;
                        l.src = f;
                        h.eurl = f;
                        k = h || {};
                        p = !!k.allowPost;
                        if (k.forcePost || p && 2E3 < f.length) {
                            k = F(f);
                            l.src = "";
                            h.dropDataPostorigin ||
                                (l["data-postorigin"] = f);
                            f = Wc(b, c, l, e);
                            if (-1 != navigator.userAgent.indexOf("WebKit")) {
                                var u = f.contentWindow.document;
                                u.open();
                                l = u.createElement("div");
                                p = {};
                                r = e + "_inner";
                                p.name = r;
                                p.src = "";
                                p.style = "display:none";
                                Wc(b, l, p, r, h)
                            }
                            l = (h = k.query[0]) ? h.split("&") : [];
                            h = [];
                            for (p = 0; p < l.length; p++) r = l[p].split("=", 2), h.push([decodeURIComponent(r[0]), decodeURIComponent(r[1])]);
                            k.query = [];
                            l = Ba(k);
                            B(Ga.test(l), "Invalid URL: " + l);
                            k = b.createElement("form");
                            k.action = l;
                            k.method = "POST";
                            k.target = e;
                            k.style.display = "none";
                            for (e = 0; e < h.length; e++) l = b.createElement("input"), l.type = "hidden", l.name = h[e][0], l.value = h[e][1], k.appendChild(l);
                            c.appendChild(k);
                            k.submit();
                            k.parentNode.removeChild(k);
                            u && u.close();
                            u = f
                        } else u = Wc(b, c, l, e, h);
                        g.iframeNode = u;
                        g.id = u.getAttribute("id");
                        u = g.id;
                        c = x();
                        c.id = u;
                        c.userParams = g.userParams;
                        c.url = g.url;
                        c.type = g.type;
                        c.state = 1;
                        P[u] = c;
                        u = g
                    } else u = null;
                    u && ((g = u.id) && d.push(g), xd(a, u))
            }
        },
        Ed = function(a, b, c) {
            if (a && 1 === a.nodeType && b) {
                if (c) return 1;
                if (V[b]) {
                    if (Oa[a.nodeName.toLowerCase()]) return (a = a.innerHTML) &&
                        a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") ? 0 : 1
                } else {
                    if (pd[b]) return 0;
                    if (od[b]) return 1
                }
            }
            return null
        },
        md = function(a, b) {
            var c = b.type;
            delete b.type;
            var d = ("string" === typeof a ? document.getElementById(a) : a) || void 0;
            if (d) {
                a = {};
                for (var e in b) z(b, e) && (a[e.toLowerCase()] = b[e]);
                a.rd = 1;
                (b = !!a.ri) && delete a.ri;
                e = [];
                yd(c, d, a, e, 0, b, void 0);
                zd(c, e)
            } else Mb("string" === "gapi." + c + ".render: missing element " + typeof a ? a : "")
        };
    w(C, "platform", {}).go = vd;
    wd = function(a) {
        for (var b = ["_c", "jsl", "h"], c = 0; c < b.length && a; c++) a = a[b[c]];
        b = Pa(ia.href);
        return !a || 0 != a.indexOf("n;") && 0 != b.indexOf("n;") && a !== b
    };
    zd = function(a, b) {
        Fd(a, b)
    };
    var Ka = function(a) {
            ud(a, !0)
        },
        Gd = function(a, b) {
            b = b || [];
            for (var c = 0; c < b.length; ++c) a(b[c]);
            for (a = 0; a < b.length; a++) Ad(b[a])
        };
    J.push(["platform", function(a, b, c) {
        rd = c;
        b && qd.push(b);
        Gd(Bd, a);
        Gd(Cd, c._c.annotation);
        Gd(Dd, c._c.bimodal);
        Fb();
        Db();
        if ("explicit" != O("parsetags")) {
            Qa(a);
            Kb(Jb()) && !O("disableRealtimeCallback") && Ob();
            if (c && (a = c.callback)) {
                var d = va(a);
                delete c.callback
            }
            Ma(function() {
                Ka(d)
            })
        }
    }]);
    C._pl = !0;
    var Hd = function(a) {
        a = (a = P[a]) ? a.oid : void 0;
        if (a) {
            var b = v.getElementById(a);
            b && b.parentNode.removeChild(b);
            delete P[a];
            Hd(a)
        }
    };
    var Id = /^\{h:'/,
        Jd = /^!_/,
        Kd = "",
        Fd = function(a, b) {
            function c() {
                Ha("message", d, "remove", "de")
            }

            function d(f) {
                var g = f.data,
                    h = f.origin;
                if (Ld(g, b)) {
                    var k = e;
                    e = !1;
                    k && H("rqe");
                    Md(a, function() {
                        k && H("rqd");
                        c();
                        for (var l = w(G, "RPMQ", []), n = 0; n < l.length; n++) l[n]({
                            data: g,
                            origin: h
                        })
                    })
                }
            }
            if (0 !== b.length) {
                Kd = D(ia.href, "pfname", "");
                var e = !0;
                Ha("message", d, "add", "at");
                M(a, c)
            }
        },
        Ld = function(a, b) {
            a = String(a);
            if (Id.test(a)) return !0;
            var c = !1;
            Jd.test(a) && (c = !0, a = a.substr(2));
            if (!/^\{/.test(a)) return !1;
            var d = vc(a);
            if (!d) return !1;
            a = d.f;
            if (d.s && a && -1 != la.call(b, a)) {
                if ("_renderstart" === d.s || d.s === Kd + "/" + a + "::_renderstart")
                    if (d = d.a && d.a[c ? 0 : 1], b = v.getElementById(a), Qb(a, 2), d && b && d.width && d.height) {
                        a: {
                            c = b.parentNode;a = d || {};
                            if (Nb()) {
                                var e = b.id;
                                if (e) {
                                    d = (d = P[e]) ? d.state : void 0;
                                    if (1 === d || 4 === d) break a;
                                    Hd(e)
                                }
                            }(d = c.nextSibling) && d.getAttribute && d.getAttribute("data-gapistub") && (c.parentNode.removeChild(d), c.style.cssText = "");d = a.width;
                            var f = a.height,
                                g = c.style;g.textIndent = "0";g.margin = "0";g.padding = "0";g.background = "transparent";g.borderStyle =
                            "none";g.cssFloat = "none";g.styleFloat = "none";g.lineHeight = "normal";g.fontSize = "1px";g.verticalAlign = "baseline";c = c.style;c.display = "inline-block";g = b.style;g.position = "static";g.left = "0";g.top = "0";g.visibility = "visible";d && (c.width = g.width = d + "px");f && (c.height = g.height = f + "px");a.verticalAlign && (c.verticalAlign = a.verticalAlign);e && Qb(e, 3)
                        }
                        b["data-csi-wdt"] = (new Date).getTime()
                    } return !0
            }
            return !1
        },
        Md = function(a, b) {
            M(a, b)
        };
    var Nd = function(a, b) {
            this.J = a;
            a = b || {};
            this.ca = Number(a.maxAge) || 0;
            this.O = a.domain;
            this.S = a.path;
            this.da = !!a.secure
        },
        Od = /^[-+/_=.:|%&a-zA-Z0-9@]*$/,
        Pd = /^[A-Z_][A-Z0-9_]{0,63}$/;
    Nd.prototype.read = function() {
        for (var a = this.J + "=", b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
            var d = b[c];
            if (0 == d.indexOf(a)) return d.substr(a.length)
        }
    };
    Nd.prototype.write = function(a, b) {
        if (!Pd.test(this.J)) throw "Invalid cookie name";
        if (!Od.test(a)) throw "Invalid cookie value";
        a = this.J + "=" + a;
        this.O && (a += ";domain=" + this.O);
        this.S && (a += ";path=" + this.S);
        b = "number" === typeof b ? b : this.ca;
        if (0 <= b) {
            var c = new Date;
            c.setSeconds(c.getSeconds() + b);
            a += ";expires=" + c.toUTCString()
        }
        this.da && (a += ";secure");
        document.cookie = a;
        return !0
    };
    Nd.prototype.clear = function() {
        this.write("", 0)
    };
    Nd.iterate = function(a) {
        for (var b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
            var d = b[c].split("="),
                e = d.shift();
            a(e, d.join("="))
        }
    };
    var Qd = function(a) {
            this.B = a
        },
        W = {};
    Qd.prototype.read = function() {
        if (W.hasOwnProperty(this.B)) return W[this.B]
    };
    Qd.prototype.write = function(a) {
        W[this.B] = a;
        return !0
    };
    Qd.prototype.clear = function() {
        delete W[this.B]
    };
    Qd.iterate = function(a) {
        for (var b in W) W.hasOwnProperty(b) && a(b, W[b])
    };
    var Rd = "https:" === window.location.protocol,
        Sd = Rd || "http:" === window.location.protocol ? Nd : Qd,
        Td = function(a) {
            var b = a.substr(1),
                c = "",
                d = window.location.hostname;
            if ("" !== b) {
                c = parseInt(b, 10);
                if (isNaN(c)) return null;
                b = d.split(".");
                if (b.length < c - 1) return null;
                b.length == c - 1 && (d = "." + d)
            } else d = "";
            return {
                j: "S" == a.charAt(0),
                domain: d,
                o: c
            }
        },
        Ud = function() {
            var a, b = null;
            Sd.iterate(function(c, d) {
                0 === c.indexOf("G_AUTHUSER_") && (c = Td(c.substring(11)), !a || c.j && !a.j || c.j == a.j && c.o > a.o) && (a = c, b = d)
            });
            return {
                ba: a,
                F: b
            }
        };
    var Vd = function(a) {
            if (0 !== a.indexOf("GCSC")) return null;
            var b = {
                R: !1
            };
            a = a.substr(4);
            if (!a) return b;
            var c = a.charAt(0);
            a = a.substr(1);
            var d = a.lastIndexOf("_");
            if (-1 == d) return b;
            var e = Td(a.substr(d + 1));
            if (null == e) return b;
            a = a.substring(0, d);
            if ("_" !== a.charAt(0)) return b;
            d = "E" === c && e.j;
            return !d && ("U" !== c || e.j) || d && !Rd ? b : {
                R: !0,
                j: d,
                ga: a.substr(1),
                domain: e.domain,
                o: e.o
            }
        },
        Wd = function(a) {
            if (!a) return [];
            a = a.split("=");
            return a[1] ? a[1].split("|") : []
        },
        Xd = function(a) {
            a = a.split(":");
            return {
                clientId: a[0].split("=")[1],
                fa: Wd(a[1]),
                ia: Wd(a[2]),
                ha: Wd(a[3])
            }
        },
        Yd = function() {
            var a = Ud(),
                b = a.ba;
            a = a.F;
            if (null !== a) {
                var c;
                Sd.iterate(function(f, g) {
                    (f = Vd(f)) && f.R && f.j == b.j && f.o == b.o && (c = g)
                });
                if (c) {
                    var d = Xd(c),
                        e = d && d.fa[Number(a)];
                    d = d && d.clientId;
                    if (e) return {
                        F: a,
                        ea: e,
                        clientId: d
                    }
                }
            }
            return null
        };
    var X = function() {
        this.N = Zd
    };
    X.prototype.w = 0;
    X.prototype.L = 2;
    X.prototype.N = null;
    X.prototype.H = !1;
    X.prototype.Z = function() {
        this.H || (this.w = 0, this.H = !0, this.T())
    };
    X.prototype.T = function() {
        this.H && (this.N() ? this.w = this.L : this.w = Math.min(2 * (this.w || this.L), 120), window.setTimeout(ca(this.T, this), 1E3 * this.w))
    };
    for (var $d = 0; 64 > $d; ++$d);
    var ae = null;
    Nb = function() {
        return G.oa = !0
    };
    Ob = function() {
        G.oa = !0;
        var a = Yd();
        (a = a && a.F) && Eb("googleapis.config/sessionIndex", a);
        ae || (ae = w(G, "ss", new X));
        a = ae;
        a.Z && a.Z()
    };
    var Zd = function() {
        var a = Yd(),
            b = a && a.ea || null,
            c = a && a.clientId;
        M("auth", {
            callback: function() {
                var d = t.gapi.auth,
                    e = {
                        client_id: c,
                        session_state: b
                    };
                d.checkSessionState(e, function(f) {
                    var g = e.session_state,
                        h = O("isLoggedIn");
                    f = O("debug/forceIm") ? !1 : g && f || !g && !f;
                    if (h = h != f) Eb("isLoggedIn", f), Ob(), nd(), f || ((f = d.signOut) ? f() : (f = d.setToken) && f(null));
                    f = Jb();
                    var k = O("savedUserState");
                    g = d._guss(f.cookiepolicy);
                    k = k != g && "undefined" != typeof k;
                    Eb("savedUserState", g);
                    (h || k) && Kb(f) && !O("disableRealtimeCallback") && d._pimf(f,
                        !0)
                })
            }
        });
        return !0
    };
    H("bs0", !0, window.gapi._bs);
    H("bs1", !0);
    delete window.gapi._bs;
}).call(this);
gapi.load("", {
    callback: window["googleOnLoad"],
    _c: {
        "jsl": {
            "ci": {
                "deviceType": "desktop",
                "oauth-flow": {
                    "authUrl": "https://accounts.google.com/o/oauth2/auth",
                    "proxyUrl": "https://accounts.google.com/o/oauth2/postmessageRelay",
                    "disableOpt": true,
                    "idpIframeUrl": "https://accounts.google.com/o/oauth2/iframe",
                    "usegapi": false
                },
                "debug": {
                    "reportExceptionRate": 0.05,
                    "forceIm": false,
                    "rethrowException": false,
                    "host": "https://apis.google.com"
                },
                "enableMultilogin": true,
                "googleapis.config": {
                    "auth": {
                        "useFirstPartyAuthV2": false
                    }
                },
                "isPlusUser": false,
                "inline": {
                    "css": 1
                },
                "disableRealtimeCallback": false,
                "drive_share": {
                    "skipInitCommand": true
                },
                "csi": {
                    "rate": 0.01
                },
                "client": {
                    "cors": false
                },
                "isLoggedIn": false,
                "signInDeprecation": {
                    "rate": 0.0
                },
                "include_granted_scopes": true,
                "llang": "en",
                "iframes": {
                    "youtube": {
                        "params": {
                            "location": ["search", "hash"]
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1",
                        "methods": ["scroll", "openwindow"]
                    },
                    "ytsubscribe": {
                        "url": "https://www.youtube.com/subscribe_embed?usegapi\u003d1"
                    },
                    "plus_circle": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi\u003d1"
                    },
                    "plus_share": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1"
                    },
                    "rbr_s": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"
                    },
                    ":source:": "3p",
                    "playemm": {
                        "url": "https://play.google.com/work/embedded/search?usegapi\u003d1\u0026usegapi\u003d1"
                    },
                    "savetoandroidpay": {
                        "url": "https://pay.google.com/gp/v/widget/save"
                    },
                    "blogger": {
                        "params": {
                            "location": ["search", "hash"]
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi\u003d1",
                        "methods": ["scroll", "openwindow"]
                    },
                    "evwidget": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix:_/events/widget?usegapi\u003d1"
                    },
                    "partnersbadge": {
                        "url": "https://www.gstatic.com/partners/badge/templates/badge.html?usegapi\u003d1"
                    },
                    "dataconnector": {
                        "url": "https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi\u003d1"
                    },
                    "surveyoptin": {
                        "url": "https://www.google.com/shopping/customerreviews/optin?usegapi\u003d1"
                    },
                    ":socialhost:": "https://apis.google.com",
                    "shortlists": {
                        "url": ""
                    },
                    "hangout": {
                        "url": "https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"
                    },
                    "plus_followers": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1"
                    },
                    "post": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1"
                    },
                    ":gplus_url:": "https://plus.google.com",
                    "signin": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1",
                        "methods": ["onauth"]
                    },
                    "rbr_i": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"
                    },
                    "donation": {
                        "url": "https://onetoday.google.com/home/donationWidget?usegapi\u003d1"
                    },
                    "share": {
                        "url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi\u003d1"
                    },
                    "plusone": {
                        "params": {
                            "count": "",
                            "size": "",
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi\u003d1"
                    },
                    "comments": {
                        "params": {
                            "location": ["search", "hash"]
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1",
                        "methods": ["scroll", "openwindow"]
                    },
                    ":im_socialhost:": "https://plus.googleapis.com",
                    "backdrop": {
                        "url": "https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi\u003d1"
                    },
                    "visibility": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/visibility?usegapi\u003d1"
                    },
                    "autocomplete": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/autocomplete"
                    },
                    "additnow": {
                        "url": "https://apis.google.com/marketplace/button?usegapi\u003d1",
                        "methods": ["launchurl"]
                    },
                    ":signuphost:": "https://plus.google.com",
                    "ratingbadge": {
                        "url": "https://www.google.com/shopping/customerreviews/badge?usegapi\u003d1"
                    },
                    "appcirclepicker": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
                    },
                    "follow": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1"
                    },
                    "community": {
                        "url": ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi\u003d1"
                    },
                    "sharetoclassroom": {
                        "url": "https://www.gstatic.com/classroom/sharewidget/widget_stable.html?usegapi\u003d1"
                    },
                    "ytshare": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi\u003d1"
                    },
                    "plus": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1"
                    },
                    "family_creation": {
                        "params": {
                            "url": ""
                        },
                        "url": "https://families.google.com/webcreation?usegapi\u003d1\u0026usegapi\u003d1"
                    },
                    "commentcount": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1"
                    },
                    "configurator": {
                        "url": ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1"
                    },
                    "zoomableimage": {
                        "url": "https://ssl.gstatic.com/microscope/embed/"
                    },
                    "appfinder": {
                        "url": "https://gsuite.google.com/:session_prefix:marketplace/appfinder?usegapi\u003d1"
                    },
                    "savetowallet": {
                        "url": "https://pay.google.com/gp/v/widget/save"
                    },
                    "person": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1"
                    },
                    "savetodrive": {
                        "url": "https://drive.google.com/savetodrivebutton?usegapi\u003d1",
                        "methods": ["save"]
                    },
                    "page": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1"
                    },
                    "card": {
                        "url": ":socialhost:/:session_prefix:_/hovercard/card"
                    }
                }
            },
            "h": "m;/_/scs/apps-static/_/js/k\u003doz.gapi.en_US.8RodOolT8JU.O/am\u003dwQ/rt\u003dj/d\u003d1/rs\u003dAGLTcCOIo0_JuSGflMsDv4KwJaDwWj-arA/m\u003d__features__",
            "u": "https://apis.google.com/js/platform.js?onload\u003dgoogleOnLoad",
            "hee": true,
            "fp": "4b947cd3330946bce8e2e5cf7a8d409b57846eb9",
            "dpo": false
        },
        "platform": ["additnow", "backdrop", "blogger", "comments", "commentcount", "community", "donation", "family_creation", "follow", "hangout", "health", "page", "partnersbadge", "person", "playemm", "playreview", "plus", "plusone", "post", "ratingbadge", "savetoandroidpay", "savetodrive", "savetowallet", "sharetoclassroom", "shortlists", "signin2", "surveyoptin", "visibility", "youtube", "ytsubscribe", "zoomableimage"],
        "fp": "4b947cd3330946bce8e2e5cf7a8d409b57846eb9",
        "annotation": ["interactivepost", "recobar", "signin2", "autocomplete", "profile"],
        "bimodal": ["signin", "share"]
    }
});